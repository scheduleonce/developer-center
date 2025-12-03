#!/usr/bin/env node

/**
 * OpenAPI Product Variants Build Script
 *
 * Generates product-specific OpenAPI specifications:
 * - booking-calendars-api.yaml/json (Booking Calendars product)
 * - booking-pages-api.yaml/json (Booking Pages product - legacy)
 *
 * Both variants include shared resources (authentication, bookings, contacts,
 * users, teams, webhooks) but exclude each other's product-specific endpoints.
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

const SOURCE_FILE = "./openapi/index.yaml";
const OUTPUT_DIR = "./static";

// Define which resources belong to which product
const PRODUCT_RESOURCES = {
  "booking-calendars": {
    // Product-specific resources
    specific: ["booking-calendars"],
    // Shared resources available to both products
    shared: [
      "authentication",
      "bookings",
      "contacts",
      "users",
      "teams",
      "webhooks",
    ],
    // Resources to exclude
    exclude: ["booking-pages", "master-pages", "event-types"],
    // Paths that don't follow the conventional prefix but should remain available
    extraPaths: ["/test"],
  },
  "booking-pages": {
    // Product-specific resources
    specific: ["booking-pages", "master-pages", "event-types"],
    // Shared resources available to both products
    shared: [
      "authentication",
      "bookings",
      "contacts",
      "users",
      "teams",
      "webhooks",
    ],
    // Resources to exclude
    exclude: ["booking-calendars"],
    // Paths that don't follow the conventional prefix but should remain available
    extraPaths: ["/test"],
  },
};

/**
 * Filter paths based on product configuration
 */
function filterPathsForProduct(paths, productConfig) {
  const filtered = {};
  const allowedPrefixes = [
    ...productConfig.specific,
    ...productConfig.shared,
  ].map((resource) => `/${resource}`);
  const extraPaths = productConfig.extraPaths || [];

  for (const [path, pathItem] of Object.entries(paths)) {
    // Check if path starts with any allowed prefix
    const isAllowed =
      allowedPrefixes.some((prefix) => path.startsWith(prefix)) ||
      extraPaths.includes(path);

    if (isAllowed) {
      filtered[path] = pathItem;
    }
  }

  return filtered;
}

/**
 * Filter tags based on product configuration
 */
function filterTagsForProduct(tags, productConfig) {
  const allowedResources = [...productConfig.specific, ...productConfig.shared];

  return tags.filter((tag) => {
    // Handle both direct tags and $ref tags
    if (tag.$ref) {
      // Check if it's the webhooks events tag (./webhooks/tag.yaml)
      if (tag.$ref === "./webhooks/tag.yaml") {
        return allowedResources.includes("webhooks");
      }
      const tagName = tag.$ref.split("/")[2]; // Extract resource name from path
      return allowedResources.includes(tagName);
    }
    // For direct tag objects, check the name
    return (
      tag.name &&
      allowedResources.some((resource) =>
        tag.name.toLowerCase().includes(resource.replace("-", " "))
      )
    );
  });
}

/**
 * Filter schemas in components based on product configuration
 */
function filterSchemasForProduct(schemas, productConfig) {
  const filtered = {};

  // Schemas that should be included in all products with ALL their fields intact
  // These represent shared resources that contain fields from multiple products
  const sharedSchemas = [
    "Error",
    "DeletedObject",
    "Conversation",
    "Booking",
    "BookingList",
  ];

  // Schemas that are referenced by shared schemas and should be included to avoid broken $refs
  const referencedSchemas = [
    "BookingPage",
    "BookingPageList",
    "MasterPage",
    "MasterPageList",
    "EventType",
    "EventTypeList",
    "BookingCalendar",
    "BookingCalendarList",
    "User",
    "Contact",
  ];

  for (const [schemaName, schema] of Object.entries(schemas)) {
    // Always include shared schemas with all their fields intact
    if (sharedSchemas.includes(schemaName)) {
      filtered[schemaName] = schema;
      continue;
    }

    // Always include referenced schemas to avoid broken $refs
    if (referencedSchemas.includes(schemaName)) {
      filtered[schemaName] = schema;
      continue;
    }

    // Check if schema should be excluded based on product
    const isExcluded = productConfig.exclude.some((resource) => {
      // Convert resource name to singular PascalCase
      // e.g., "booking-pages" -> "BookingPage", "master-pages" -> "MasterPage"
      const resourceSingular = resource.endsWith("s")
        ? resource.slice(0, -1)
        : resource;
      const resourcePascalCase = resourceSingular
        .split("-")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join("");

      // Check if schema name matches the excluded resource
      // e.g., "BookingPage", "BookingPageList", "MasterPage", "MasterPageList"
      return (
        schemaName === resourcePascalCase ||
        schemaName === `${resourcePascalCase}List`
      );
    });

    if (!isExcluded) {
      filtered[schemaName] = schema;
    }
  }

  return filtered;
}

/**
 * Generate product-specific OpenAPI spec
 */
function generateProductSpec(masterSpec, product, productConfig) {
  console.log(`\n📦 Generating ${product} variant...`);

  // Deep clone the master spec
  const productSpec = JSON.parse(JSON.stringify(masterSpec));

  // Update info based on product
  if (product === "booking-calendars") {
    productSpec.info.title = "OnceHub Booking Calendars API";
    productSpec.info.description = `
The OnceHub Booking Calendars API allows you to manage bookings, calendars, event types, and scheduling resources programmatically.

**Note:** This documentation is for the Booking Calendars product. Booking Calendars is our current and recommended scheduling solution.
    `.trim();
  } else if (product === "booking-pages") {
    productSpec.info.title = "OnceHub Booking Pages API";
    productSpec.info.description = `
The OnceHub Booking Pages API allows you to manage bookings, booking pages, master pages, and scheduling resources programmatically.

**Note:** This documentation is for the Booking Pages product (legacy). While still supported, we recommend using Booking Calendars for new implementations.
    `.trim();
  }

  // Filter paths
  productSpec.paths = filterPathsForProduct(masterSpec.paths, productConfig);

  // Filter tags
  if (productSpec.tags) {
    productSpec.tags = filterTagsForProduct(masterSpec.tags, productConfig);
  }

  // Filter schemas in components
  if (productSpec.components && productSpec.components.schemas) {
    productSpec.components.schemas = filterSchemasForProduct(
      masterSpec.components.schemas,
      productConfig
    );
    console.log(
      `   ✓ ${Object.keys(productSpec.components.schemas).length} schemas, ${
        Object.keys(productSpec.paths).length
      } endpoints`
    );
  }

  return productSpec;
}

/**
 * Write spec to YAML and JSON files
 */
function writeSpecFiles(spec, product) {
  const yamlPath = path.join(OUTPUT_DIR, `${product}-api.yaml`);
  const jsonPath = path.join(OUTPUT_DIR, `${product}-api.json`);

  // Write YAML
  const yamlContent = yaml.dump(spec, {
    lineWidth: -1, // Don't wrap lines
    noRefs: true, // Don't use YAML references
    indent: 2,
  });
  fs.writeFileSync(yamlPath, yamlContent, "utf8");

  const yamlStats = fs.statSync(yamlPath);

  // Write JSON
  const jsonContent = JSON.stringify(spec, null, 2);
  fs.writeFileSync(jsonPath, jsonContent, "utf8");

  const jsonStats = fs.statSync(jsonPath);
  console.log(
    `   ✓ Generated: ${(yamlStats.size / 1024).toFixed(1)}KB YAML, ${(
      jsonStats.size / 1024
    ).toFixed(1)}KB JSON`
  );
}

/**
 * Main build function
 */
async function build() {
  try {
    console.log("🚀 Building OpenAPI Product Variants");
    console.log("=====================================");

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // First, check if bundled master spec exists
    const masterYamlPath = path.join(OUTPUT_DIR, "oncehub-api.yaml");

    if (!fs.existsSync(masterYamlPath)) {
      console.log("⚠️  Master bundled spec not found. Building it first...");
      const { build: buildMaster } = require("./build-openapi.js");
      await buildMaster();
      console.log();
    }

    // Load the bundled master spec (which has all $refs resolved)
    console.log("📖 Loading master specification...");
    const masterYaml = fs.readFileSync(masterYamlPath, "utf8");
    const masterSpec = yaml.load(masterYaml);

    // Generate Booking Calendars variant
    const bookingCalendarsSpec = generateProductSpec(
      masterSpec,
      "booking-calendars",
      PRODUCT_RESOURCES["booking-calendars"]
    );
    writeSpecFiles(bookingCalendarsSpec, "booking-calendars");

    // Generate Booking Pages variant
    const bookingPagesSpec = generateProductSpec(
      masterSpec,
      "booking-pages",
      PRODUCT_RESOURCES["booking-pages"]
    );
    writeSpecFiles(bookingPagesSpec, "booking-pages");

    console.log("\n✅ Product variants generated successfully!");
  } catch (error) {
    console.error("❌ Build failed:", error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

/**
 * Watch mode - rebuild variants when OpenAPI files change
 */
async function watchAndBuild() {
  console.log("👀 Watching OpenAPI files for changes...");
  console.log("   (Product variants will rebuild when source files change)");
  console.log("   Press Ctrl+C to stop watching");
  console.log();

  // Build once initially
  try {
    await build();
  } catch (err) {
    console.error("❌ Initial build failed:", err.message);
  }

  // Watch for changes in the openapi directory and the bundled master spec
  const watcher = fs.watch(
    "./openapi",
    { recursive: true },
    async (eventType, filename) => {
      if (
        filename &&
        (filename.endsWith(".yaml") ||
          filename.endsWith(".yml") ||
          filename.endsWith(".json"))
      ) {
        console.log(`\n🔄 OpenAPI file changed: ${filename}`);
        console.log("📄 Rebuilding product variants...");
        try {
          // First rebuild the master spec
          const { build: buildMaster } = require("./build-openapi.js");
          await buildMaster();
          // Then rebuild variants
          await build();
          console.log("✅ Rebuild completed");
        } catch (err) {
          console.error("❌ Rebuild failed:", err.message);
        }
      }
    }
  );

  // Handle graceful shutdown
  process.on("SIGINT", () => {
    console.log("\n🛑 Stopping file watcher...");
    watcher.close();
    process.exit(0);
  });
}

// Run the build
if (require.main === module) {
  if (process.argv.includes("--watch")) {
    watchAndBuild();
  } else {
    build();
  }
}

module.exports = { build, generateProductSpec, filterPathsForProduct };

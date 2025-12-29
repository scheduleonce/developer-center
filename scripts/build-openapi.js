#!/usr/bin/env node

/**
 * OpenAPI Build Script
 *
 * Builds the complete OnceHub OpenAPI specification and product variants:
 * 1. Master spec (oncehub-api.yaml/json) - complete API
 * 2. Booking Calendars variant (booking-calendars-api.yaml/json)
 * 3. Booking Pages variant (booking-pages-api.yaml/json) - legacy
 *
 * Product variants include shared resources (authentication, bookings, contacts,
 * users, teams, webhooks) but exclude each other's product-specific endpoints.
 */

const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");
const { execSync } = require("child_process");

const SOURCE_FILE = "./openapi/index.yaml";
const OUTPUT_DIR = "./static";
const OUTPUT_YAML = path.join(OUTPUT_DIR, "oncehub-api.yaml");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "oncehub-api.json");

/**
 * Bundle the master YAML specification using Redocly
 */
async function bundleMasterSpec() {
  console.log("📄 Bundling master YAML specification...");

  if (!fs.existsSync(SOURCE_FILE)) {
    throw new Error(`Source file not found: ${SOURCE_FILE}`);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  try {
    // Use Redocly CLI to bundle the API spec by resolving all $refs
    console.log("🔄 Resolving external $refs with Redocly CLI...");
    execSync(`npx redocly bundle "${SOURCE_FILE}" --output "${OUTPUT_YAML}"`, {
      stdio: "inherit",
      cwd: process.cwd(),
    });

    console.log(`✅ Master YAML bundled: ${OUTPUT_YAML}`);
    const stats = fs.statSync(OUTPUT_YAML);
    console.log(`   File size: ${(stats.size / 1024).toFixed(1)} KB`);

    // Read and parse the bundled YAML
    const yamlContent = fs.readFileSync(OUTPUT_YAML, "utf8");
    const bundled = yaml.load(yamlContent);

    // Convert to JSON
    const jsonContent = JSON.stringify(bundled, null, 2);
    fs.writeFileSync(OUTPUT_JSON, jsonContent);

    console.log(`✅ Master JSON created: ${OUTPUT_JSON}`);
    const jsonStats = fs.statSync(OUTPUT_JSON);
    console.log(`   File size: ${(jsonStats.size / 1024).toFixed(1)} KB`);

    return bundled;
  } catch (error) {
    console.error("❌ Failed to bundle master spec:", error.message);
    throw error;
  }
}

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
      "notifications",
    ],
    // Resources to exclude
    exclude: ["booking-pages", "master-pages", "event-types"],
    // Paths that don't follow the conventional prefix but should remain available
    extraPaths: ["/test"],
    // Webhook events to exclude for this product variant
    webhookExclude: [],
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
      "notifications",
    ],
    // Resources to exclude
    exclude: ["booking-calendars"],
    // Paths that don't follow the conventional prefix but should remain available
    extraPaths: ["/test"],
    // Webhook events to exclude for this product variant
    // booking.reassigned is only applicable to Booking Calendars
    webhookExclude: ["booking.reassigned"],
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
    if (tag.name) {
      // Check if it's the "Webhook Events" tag (special case)
      if (tag.name === "Webhook Events") {
        return allowedResources.includes("webhooks");
      }
      // Check other tags by name matching
      return allowedResources.some((resource) =>
        tag.name.toLowerCase().includes(resource.replace("-", " ")),
      );
    }
    return false;
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
      productConfig,
    );
    console.log(
      `   ✓ ${Object.keys(productSpec.components.schemas).length} schemas, ${
        Object.keys(productSpec.paths).length
      } endpoints`,
    );
  }

  // Filter webhook events per product (OpenAPI 3.1 top-level webhooks)
  if (masterSpec.webhooks) {
    productSpec.webhooks = filterWebhooksForProduct(
      masterSpec.webhooks,
      productConfig,
    );
  }

  return productSpec;
}

/**
 * Filter webhook events (top-level OpenAPI 3.1 `webhooks`) based on product configuration
 */
function filterWebhooksForProduct(webhooks, productConfig) {
  if (!webhooks) return webhooks;
  const excluded = new Set(productConfig.webhookExclude || []);
  const filtered = {};
  for (const [name, def] of Object.entries(webhooks)) {
    if (!excluded.has(name)) {
      filtered[name] = def;
    }
  }
  return filtered;
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
    ).toFixed(1)}KB JSON`,
  );
}

/**
 * Main build function - builds master spec and all product variants
 */
async function build() {
  try {
    console.log("🚀 Building OnceHub OpenAPI Specification");
    console.log("=========================================");
    console.log();

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // Step 1: Build the master specification
    const masterSpec = await bundleMasterSpec();
    console.log();

    // Generate Booking Calendars variant
    const bookingCalendarsSpec = generateProductSpec(
      masterSpec,
      "booking-calendars",
      PRODUCT_RESOURCES["booking-calendars"],
    );
    writeSpecFiles(bookingCalendarsSpec, "booking-calendars");

    // Generate Booking Pages variant
    const bookingPagesSpec = generateProductSpec(
      masterSpec,
      "booking-pages",
      PRODUCT_RESOURCES["booking-pages"],
    );
    writeSpecFiles(bookingPagesSpec, "booking-pages");

    console.log("\n✅ Build completed successfully!");
    console.log("\n📂 Generated files:");
    console.log("   Master spec:");
    console.log(`     ${OUTPUT_YAML}`);
    console.log(`     ${OUTPUT_JSON}`);
    console.log("   Product variants:");
    console.log(`     ${OUTPUT_DIR}/booking-calendars-api.yaml`);
    console.log(`     ${OUTPUT_DIR}/booking-calendars-api.json`);
    console.log(`     ${OUTPUT_DIR}/booking-pages-api.yaml`);
    console.log(`     ${OUTPUT_DIR}/booking-pages-api.json`);
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

  // Debounce mechanism to prevent multiple rapid rebuilds
  let rebuildTimeout = null;
  let isRebuilding = false;
  let lastChangedFiles = new Set();

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
        // Track this file change
        lastChangedFiles.add(filename);

        // Clear any pending rebuild
        if (rebuildTimeout) {
          clearTimeout(rebuildTimeout);
        }

        // Debounce rebuilds (wait 1000ms after last change)
        rebuildTimeout = setTimeout(async () => {
          if (isRebuilding) {
            console.log("⏳ Rebuild already in progress, skipping...");
            return;
          }

          // Get all changed files and clear the set
          const changedFiles = Array.from(lastChangedFiles);
          lastChangedFiles.clear();

          console.log(
            `\n🔄 OpenAPI file(s) changed: ${changedFiles.join(", ")}`,
          );
          console.log("📄 Rebuilding...");
          isRebuilding = true;

          try {
            await build();
            console.log("✅ Rebuild completed successfully");
          } catch (err) {
            console.error("❌ Rebuild failed:", err.message);
            console.error(err.stack);
          } finally {
            isRebuilding = false;
          }
        }, 1000);
      }
    },
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

module.exports = {
  build,
  bundleMasterSpec,
  generateProductSpec,
  filterPathsForProduct,
  filterTagsForProduct,
  filterSchemasForProduct,
};

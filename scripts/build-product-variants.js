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
  'booking-calendars': {
    // Product-specific resources
    specific: [
      'booking-calendars',
      'event-types'
    ],
    // Shared resources available to both products
    shared: [
      'authentication',
      'bookings',
      'contacts',
      'users',
      'teams',
      'webhooks'
    ],
    // Resources to exclude
    exclude: [
      'booking-pages',
      'master-pages'
    ]
  },
  'booking-pages': {
    // Product-specific resources
    specific: [
      'booking-pages',
      'master-pages'
    ],
    // Shared resources available to both products
    shared: [
      'authentication',
      'bookings',
      'contacts',
      'users',
      'teams',
      'webhooks'
    ],
    // Resources to exclude
    exclude: [
      'booking-calendars',
      'event-types'
    ]
  }
};

/**
 * Filter paths based on product configuration
 */
function filterPathsForProduct(paths, productConfig) {
  const filtered = {};
  const allowedPrefixes = [
    ...productConfig.specific,
    ...productConfig.shared
  ].map(resource => `/${resource}`);

  for (const [path, pathItem] of Object.entries(paths)) {
    // Check if path starts with any allowed prefix
    const isAllowed = allowedPrefixes.some(prefix => path.startsWith(prefix));
    
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
  const allowedResources = [
    ...productConfig.specific,
    ...productConfig.shared
  ];

  return tags.filter(tag => {
    // Handle both direct tags and $ref tags
    if (tag.$ref) {
      const tagName = tag.$ref.split('/')[2]; // Extract resource name from path
      return allowedResources.includes(tagName);
    }
    // For direct tag objects, check the name
    return tag.name && allowedResources.some(resource => 
      tag.name.toLowerCase().includes(resource.replace('-', ' '))
    );
  });
}

/**
 * Filter schemas in components based on product configuration
 */
function filterSchemasForProduct(schemas, productConfig) {
  const filtered = {};
  
  // Common schemas that should be included in all products
  const commonSchemas = ['Error', 'DeletedObject', 'Conversation'];

  for (const [schemaName, schema] of Object.entries(schemas)) {
    // Always include common schemas
    if (commonSchemas.includes(schemaName)) {
      filtered[schemaName] = schema;
      continue;
    }

    // Check if schema should be excluded based on product
    const isExcluded = productConfig.exclude.some(resource => {
      // Convert resource name to singular PascalCase
      // e.g., "booking-pages" -> "BookingPage", "master-pages" -> "MasterPage"
      const resourceSingular = resource.endsWith('s') ? resource.slice(0, -1) : resource;
      const resourcePascalCase = resourceSingular
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join('');
      
      // Check if schema name matches the excluded resource
      // e.g., "BookingPage", "BookingPageList", "MasterPage", "MasterPageList"
      return schemaName === resourcePascalCase || 
             schemaName === `${resourcePascalCase}List`;
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
  if (product === 'booking-calendars') {
    productSpec.info.title = 'OnceHub Booking Calendars API';
    productSpec.info.description = `
The OnceHub Booking Calendars API allows you to manage bookings, calendars, event types, and scheduling resources programmatically.

**Note:** This documentation is for the Booking Calendars product. Booking Calendars is our current and recommended scheduling solution.
    `.trim();
  } else if (product === 'booking-pages') {
    productSpec.info.title = 'OnceHub Booking Pages API';
    productSpec.info.description = `
The OnceHub Booking Pages API allows you to manage bookings, booking pages, master pages, and scheduling resources programmatically.

**Note:** This documentation is for the Booking Pages product (legacy). While still supported, we recommend using Booking Calendars for new implementations.
    `.trim();
  }

  // Filter paths
  productSpec.paths = filterPathsForProduct(masterSpec.paths, productConfig);
  console.log(`   ✓ Filtered paths: ${Object.keys(productSpec.paths).length} endpoints`);

  // Filter tags
  if (productSpec.tags) {
    productSpec.tags = filterTagsForProduct(masterSpec.tags, productConfig);
    console.log(`   ✓ Filtered tags: ${productSpec.tags.length} tags`);
  }

  // Filter schemas in components
  if (productSpec.components && productSpec.components.schemas) {
    productSpec.components.schemas = filterSchemasForProduct(
      masterSpec.components.schemas,
      productConfig
    );
    console.log(`   ✓ Filtered schemas: ${Object.keys(productSpec.components.schemas).length} schemas`);
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
    noRefs: true,  // Don't use YAML references
    indent: 2
  });
  fs.writeFileSync(yamlPath, yamlContent, 'utf8');
  
  const yamlStats = fs.statSync(yamlPath);
  console.log(`   ✓ YAML written: ${yamlPath}`);
  console.log(`     Size: ${(yamlStats.size / 1024).toFixed(1)} KB`);

  // Write JSON
  const jsonContent = JSON.stringify(spec, null, 2);
  fs.writeFileSync(jsonPath, jsonContent, 'utf8');
  
  const jsonStats = fs.statSync(jsonPath);
  console.log(`   ✓ JSON written: ${jsonPath}`);
  console.log(`     Size: ${(jsonStats.size / 1024).toFixed(1)} KB`);
}

/**
 * Main build function
 */
async function build() {
  try {
    console.log('🚀 Building OpenAPI Product Variants');
    console.log('=====================================');

    // Ensure output directory exists
    if (!fs.existsSync(OUTPUT_DIR)) {
      fs.mkdirSync(OUTPUT_DIR, { recursive: true });
    }

    // First, check if bundled master spec exists
    const masterYamlPath = path.join(OUTPUT_DIR, 'oncehub-api.yaml');
    
    if (!fs.existsSync(masterYamlPath)) {
      console.log('⚠️  Master bundled spec not found. Building it first...');
      const { build: buildMaster } = require('./build-openapi.js');
      await buildMaster();
      console.log();
    }

    // Load the bundled master spec (which has all $refs resolved)
    console.log('📖 Loading bundled master specification...');
    const masterYaml = fs.readFileSync(masterYamlPath, 'utf8');
    const masterSpec = yaml.load(masterYaml);
    console.log(`   ✓ Master spec loaded: ${Object.keys(masterSpec.paths).length} total endpoints`);

    // Generate Booking Calendars variant
    const bookingCalendarsSpec = generateProductSpec(
      masterSpec,
      'booking-calendars',
      PRODUCT_RESOURCES['booking-calendars']
    );
    writeSpecFiles(bookingCalendarsSpec, 'booking-calendars');

    // Generate Booking Pages variant
    const bookingPagesSpec = generateProductSpec(
      masterSpec,
      'booking-pages',
      PRODUCT_RESOURCES['booking-pages']
    );
    writeSpecFiles(bookingPagesSpec, 'booking-pages');

    console.log('\n🎉 Product variants generated successfully!');
    console.log('\n📂 Generated files:');
    console.log('   Booking Calendars:');
    console.log('     - /booking-calendars-api.yaml');
    console.log('     - /booking-calendars-api.json');
    console.log('   Booking Pages (legacy):');
    console.log('     - /booking-pages-api.yaml');
    console.log('     - /booking-pages-api.json');

  } catch (error) {
    console.error('❌ Build failed:', error.message);
    console.error(error.stack);
    process.exit(1);
  }
}

// Run the build
if (require.main === module) {
  build();
}

module.exports = { build, generateProductSpec, filterPathsForProduct };

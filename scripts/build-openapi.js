#!/usr/bin/env node

/**
 * OpenAPI Build Script
 *
 * Builds and bundles the OpenAPI specification for static serving
 */

const fs = require("fs");
const path = require("path");

const SOURCE_FILE = "./openapi/index.yaml";
const OUTPUT_DIR = "./static";
const OUTPUT_YAML = path.join(OUTPUT_DIR, "oncehub-api.yaml");
const OUTPUT_JSON = path.join(OUTPUT_DIR, "oncehub-api.json");

async function bundleYamlFile() {
  console.log("📄 Bundling modular YAML specification...");

  if (!fs.existsSync(SOURCE_FILE)) {
    throw new Error(`Source file not found: ${SOURCE_FILE}`);
  }

  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, { recursive: true });
  }

  try {
    const { execSync } = require("child_process");

    // Use Redocly CLI to bundle the API spec by resolving all $refs
    console.log("🔄 Resolving external $refs with Redocly CLI...");
    execSync(
      `./node_modules/.bin/redocly bundle "${SOURCE_FILE}" --output "${OUTPUT_YAML}"`,
      {
        stdio: "inherit",
        cwd: process.cwd(),
      }
    );

    console.log(`✅ YAML bundled to: ${OUTPUT_YAML}`);

    const stats = fs.statSync(OUTPUT_YAML);
    console.log(`   File size: ${(stats.size / 1024).toFixed(1)} KB`);

    // Read and parse the bundled YAML for JSON conversion
    const yaml = require("js-yaml");
    const yamlContent = fs.readFileSync(OUTPUT_YAML, "utf8");
    const bundled = yaml.load(yamlContent);

    return bundled;
  } catch (error) {
    console.error("❌ Failed to bundle YAML:", error.message);
    throw error;
  }
}

function convertToJson(bundledSpec) {
  console.log("🔄 Converting to JSON format...");

  try {
    // Write JSON with proper formatting from the already bundled spec
    const jsonContent = JSON.stringify(bundledSpec, null, 2);
    fs.writeFileSync(OUTPUT_JSON, jsonContent);

    console.log("✅ JSON conversion completed");
    const stats = fs.statSync(OUTPUT_JSON);
    console.log(`   File size: ${(stats.size / 1024).toFixed(1)} KB`);

    return Promise.resolve();
  } catch (error) {
    console.error("❌ JSON conversion failed:", error.message);
    return Promise.reject(error);
  }
}

function validateSource() {
  console.log("🔍 Validating source specification...");

  try {
    const yaml = require("js-yaml");

    // Basic YAML syntax validation
    const yamlContent = fs.readFileSync(SOURCE_FILE, "utf8");
    const parsedData = yaml.load(yamlContent);

    // Basic OpenAPI structure validation
    if (!parsedData.openapi) {
      throw new Error("Missing openapi field");
    }

    if (
      !parsedData.info ||
      !parsedData.info.title ||
      !parsedData.info.version
    ) {
      throw new Error("Missing required info fields (title, version)");
    }

    if (!parsedData.paths || Object.keys(parsedData.paths).length === 0) {
      throw new Error("No paths defined");
    }

    console.log("✅ Basic validation passed");
    console.log(`   OpenAPI version: ${parsedData.openapi}`);
    console.log(`   API title: ${parsedData.info.title}`);
    console.log(`   API version: ${parsedData.info.version}`);
    console.log(`   Endpoints: ${Object.keys(parsedData.paths).length}`);

    return Promise.resolve();
  } catch (error) {
    console.error("❌ Validation failed:", error.message);
    return Promise.reject(error);
  }
}

function generateManifest() {
  console.log("📝 Generating API manifest...");

  const manifest = {
    name: "OnceHub API",
    version: "2.0.0",
    description:
      "OnceHub API for managing bookings, calendars, and scheduling resources",
    files: {
      yaml: "oncehub-api.yaml",
      json: "oncehub-api.json",
    },
    generated: new Date().toISOString(),
    source: SOURCE_FILE,
  };

  const manifestPath = path.join(OUTPUT_DIR, "api-manifest.json");
  fs.writeFileSync(manifestPath, JSON.stringify(manifest, null, 2));
  console.log(`✅ Manifest created: ${manifestPath}`);
}

async function build() {
  try {
    console.log("🚀 Building OnceHub OpenAPI Specification");
    console.log("=========================================");
    console.log();

    // Validate and bundle YAML (this also validates the source)
    const bundledSpec = await bundleYamlFile();
    console.log();

    // Convert to JSON using the bundled spec
    await convertToJson(bundledSpec);
    console.log();

    // Generate manifest
    generateManifest();
    console.log();

    console.log("🎉 Build completed successfully!");
    console.log();
    console.log("📂 Generated files:");
    console.log(`   ${OUTPUT_YAML}`);
    console.log(`   ${OUTPUT_JSON}`);
    console.log(`   ${path.join(OUTPUT_DIR, "api-manifest.json")}`);
    console.log();
    console.log("🌐 Usage:");
    console.log("   YAML: /oncehub-api.yaml");
    console.log("   JSON: /oncehub-api.json");
    console.log("   Manifest: /api-manifest.json");
  } catch (error) {
    console.error("❌ Build failed:", error.message);
    process.exit(1);
  }
}

// Handle command line arguments
if (process.argv.includes("--help") || process.argv.includes("-h")) {
  console.log("OpenAPI Build Script");
  console.log("");
  console.log("Usage:");
  console.log("  node scripts/build-openapi.js           # Build all formats");
  console.log("  node scripts/build-openapi.js --yaml    # Build YAML only");
  console.log("  node scripts/build-openapi.js --json    # Build JSON only");
  console.log("  node scripts/build-openapi.js --help    # Show this help");
  process.exit(0);
}

if (process.argv.includes("--yaml")) {
  bundleYamlFile().catch((err) => {
    console.error("❌ YAML build failed:", err.message);
    process.exit(1);
  });
} else if (process.argv.includes("--json")) {
  bundleYamlFile()
    .then((bundledSpec) => convertToJson(bundledSpec))
    .catch((err) => {
      console.error("❌ JSON build failed:", err.message);
      process.exit(1);
    });
} else {
  build();
}

module.exports = { build, bundleYamlFile, convertToJson };

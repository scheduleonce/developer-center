#!/usr/bin/env ts-node
/*
 * Legacy ReadMe -> Docusaurus migration helper.
 * Preserves slugs & metadata (title, excerpt, api.operationId, deprecated, hidden) while generating frontmatter.
 */
import fs from "fs";
import path from "path";

interface LegacyFrontmatter {
  title?: string;
  excerpt?: string;
  api?: { file?: string; operationId?: string };
  deprecated?: boolean;
  hidden?: boolean;
  metadata?: Record<string, any>;
  next?: any;
}

const ROOT = path.join(process.cwd(), "old");
const DOCS_TARGET = path.join(process.cwd(), "docs");
const REFERENCE_TARGET = path.join(process.cwd(), "reference");

// Configuration toggles
const config = {
  includeOperationPages: true, // set false to skip endpoints covered by Scalar
  referenceDir: "reference",
  docsDir: "docs",
  recipesDir: "recipes",
  addExplicitSlugs: true,
};

function readFile(p: string) {
  return fs.readFileSync(p, "utf8");
}

function ensureDir(d: string) {
  if (!fs.existsSync(d)) fs.mkdirSync(d, { recursive: true });
}

function extractFrontmatter(raw: string): {
  fm: LegacyFrontmatter;
  body: string;
} {
  if (!raw.startsWith("---")) return { fm: {}, body: raw };
  const end = raw.indexOf("\n---", 3);
  if (end === -1) return { fm: {}, body: raw };
  const yamlBlock = raw.substring(3, end).trim();
  const body = raw.substring(end + 4).replace(/^\n+/, "");
  const fm: LegacyFrontmatter = {};
  // naive parse (frontmatter is simple key: value; ignoring nested except api)
  yamlBlock.split(/\n+/).forEach((line) => {
    const m = line.match(/^([a-zA-Z0-9_]+):\s*(.*)$/);
    if (m) {
      const key = m[1];
      const val = m[2];
      if (key === "title") fm.title = val.replace(/^"|"$/g, "");
      else if (key === "excerpt") fm.excerpt = val.replace(/^"|"$/g, "");
      else if (key === "deprecated") fm.deprecated = val === "true";
      else if (key === "hidden") fm.hidden = val === "true";
    }
  });
  // Capture api.operationId via regex
  const opMatch = yamlBlock.match(/operationId:\s*([a-zA-Z0-9-_]+)/);
  if (opMatch) fm.api = { operationId: opMatch[1] };
  return { fm, body };
}

function toFrontmatter(
  id: string,
  legacy: LegacyFrontmatter,
  slugPath?: string
): string {
  const lines: string[] = ["---"];
  lines.push(`id: ${id}`);
  if (legacy.title) lines.push(`title: ${legacy.title}`);
  if (legacy.excerpt) lines.push(`description: ${legacy.excerpt}`);
  if (legacy.deprecated) lines.push("deprecated: true");
  if (legacy.api?.operationId)
    lines.push(`operationId: ${legacy.api.operationId}`);
  if (slugPath) lines.push(`slug: ${slugPath}`);
  lines.push("---");
  return lines.join("\n");
}

function slugify(file: string) {
  return file.replace(/\.mdx?$/, "").toLowerCase();
}

function isOperationPage(body: string, fm: LegacyFrontmatter) {
  return !!fm.api?.operationId; // heuristic
}

function processDir(srcDir: string, outDir: string, baseSlug: string) {
  ensureDir(outDir);
  const entries = fs.readdirSync(srcDir);
  for (const entry of entries) {
    const full = path.join(srcDir, entry);
    const stat = fs.statSync(full);
    if (stat.isDirectory()) {
      processDir(
        full,
        path.join(outDir, entry.toLowerCase().replace(/\s+/g, "-")),
        `${baseSlug}/${entry.toLowerCase().replace(/\s+/g, "-")}`
      );
    } else if (/\.mdx?$/.test(entry)) {
      const raw = readFile(full);
      const { fm, body } = extractFrontmatter(raw);
      if (!config.includeOperationPages && isOperationPage(body, fm)) continue;
      const id = slugify(entry);
      const relative = entry.replace(/\s+/g, "-").toLowerCase();
      const slugPath = config.addExplicitSlugs
        ? `${baseSlug}/${relative.replace(/\.mdx?$/, "/")}`
        : undefined;
      const fmBlock = toFrontmatter(id, fm, slugPath);
      const final = fmBlock + "\n\n" + body;
      fs.writeFileSync(path.join(outDir, relative), final);
    }
  }
}

function main() {
  // Map legacy top-level doc sets
  const legacyDocsPath = path.join(ROOT, config.docsDir);
  const legacyRefPath = path.join(ROOT, config.referenceDir);
  const legacyRecipesPath = path.join(ROOT, config.recipesDir);

  if (fs.existsSync(legacyDocsPath))
    processDir(legacyDocsPath, DOCS_TARGET, "/docs");
  if (fs.existsSync(legacyRefPath))
    processDir(legacyRefPath, REFERENCE_TARGET, "/reference");
  if (fs.existsSync(legacyRecipesPath))
    processDir(
      legacyRecipesPath,
      path.join(DOCS_TARGET, "recipes"),
      "/docs/recipes"
    );

  console.log("Conversion complete (basic). Review slugs & frontmatter.");
}

main();

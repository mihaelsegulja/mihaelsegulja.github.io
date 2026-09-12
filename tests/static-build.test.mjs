import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync, readdirSync } from "node:fs";
import { join } from "node:path";

const projectFiles = readdirSync("src/content/projects").map((slug) => ({
  slug, source: readFileSync(`src/content/projects/${slug}/index.md`, "utf8"),
}));
const projectSource = projectFiles.map((project) => project.source).join("\n");

const html = (route) => readFileSync(join("dist", route, "index.html"), "utf8");

test("all existing routes and project detail pages contain static content", () => {
  for (const route of ["", "projects", "blog", "contact"]) {
    const page = html(route);
    assert.match(page, /<main id="content">/);
    assert.match(page, /rel="canonical"/);
    assert.doesNotMatch(page, /<astro-island|react-dom|\?\//);
  }
  assert.match(html(""), /welcome\.sh/);
  assert.match(html(""), /WorldSkills Croatia 2023/);
  assert.match(html("blog"), /Coming Soon|class="blog-posts"/);
  const source = projectSource;
  const names = Array.from(
    source.matchAll(/name: "([^"]+)"/g),
    (match) => match[1],
  );
  assert.ok(names.length > 0);
  for (const name of names) {
    const slug = name
      .toLowerCase()
      .replace(/\s+/g, "-")
      .replace(/[^\w-]+/g, "");
    assert.ok(existsSync(`dist/projects/${slug}/index.html`));
    assert.ok(html(`projects/${slug}`).includes(name));
  }
});

test("all local project media exist in the static output", () => {
  const source = projectSource;
  const imports = Array.from(new Set(Array.from(
    source.matchAll(/"(\/src\/media\/[^"]+)"/g),
    ([, path]) => path,
  )));
  assert.ok(imports.length > 0);
  for (const path of imports) assert.ok(existsSync(path.slice(1)), path);
  const page = projectFiles.map(({ slug }) => html(`projects/${slug}`)).join("\n");
  const assets = Array.from(
    page.matchAll(
      /(?:src|href)="(\/_astro\/[^\"]+\.(?:jpg|png|gif|mp4|webm))"/g,
    ),
  );
  assert.ok(assets.length > 0);
  for (const [, path] of assets) assert.ok(existsSync(`dist${path}`), path);
  assert.equal(new Set(assets.map(([, path]) => path)).size, imports.length);
  assert.doesNotMatch(page, /(?:src|href)="\/media\//);
});

test("crawler files and a real 404 page replace the SPA redirect", () => {
  assert.ok(existsSync("dist/sitemap-index.xml"));
  const sitemaps = readdirSync("dist").filter((name) =>
    /^sitemap-\d+\.xml$/.test(name),
  );
  assert.ok(sitemaps.length);
  const sitemap = sitemaps
    .map((name) => readFileSync(`dist/${name}`, "utf8"))
    .join("");
  assert.match(sitemap, /projects\/macrokeeb/);
  assert.match(sitemap, /\/blog/);
  const notFound = readFileSync("dist/404.html", "utf8");
  assert.match(notFound, /Page not found/);
  assert.doesNotMatch(notFound, /l\.replace|pathSegmentsToKeep/);
  assert.match(readFileSync("dist/robots.txt", "utf8"), /Sitemap:/);
});

test("the site has no UI framework or gallery library dependency", () => {
  const packageJson = JSON.parse(readFileSync("package.json", "utf8"));
  const dependencies = {
    ...packageJson.dependencies,
    ...packageJson.devDependencies,
  };
  for (const name of [
    "react",
    "react-dom",
    "react-router-dom",
    "@fancyapps/ui",
    "tailwindcss",
  ])
    assert.ok(!(name in dependencies));
});

test("project links navigate directly to pages without project dialogs", () => {
  const page = html("projects");
  for (const { slug } of projectFiles) {
    assert.ok(page.includes(`href="/projects/${slug}"`));
  }
  for (const route of ["", "projects"]) {
    assert.doesNotMatch(html(route), /data-project-window|data-media-viewer|href="\/projects#/);
  }
});

test("project pages render Markdown and playable media inline", () => {
  assert.equal(projectFiles.length, 15);
  assert.ok(!existsSync("src/data/projects.ts"));
  const page = html("projects/malwave");
  assert.match(page, /<video[^>]*controls/);
  assert.match(page, /<iframe[^>]*youtube\.com\/embed\/qQyvwB0_DuI/);
  assert.match(page, /A 2D fast-paced/);
  assert.doesNotMatch(page, /project-detail-overlay|data-media-viewer/);
});

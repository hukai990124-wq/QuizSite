import test from "node:test";
import assert from "node:assert/strict";
import { readdir, readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { BACK_TO_TOP_THRESHOLD, shouldShowBackToTop } from "./back-to-top.mjs";

const siteDirectory = fileURLToPath(new URL("..", import.meta.url));

async function htmlFiles(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(async (entry) => {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) return htmlFiles(path);
    return entry.isFile() && entry.name.endsWith(".html") ? [path] : [];
  }));
  return nested.flat();
}

test("shows the back-to-top button only after the scroll threshold", () => {
  assert.equal(shouldShowBackToTop(BACK_TO_TOP_THRESHOLD - 1), false);
  assert.equal(shouldShowBackToTop(BACK_TO_TOP_THRESHOLD), true);
});

test("keeps the button hidden for invalid or negative scroll positions", () => {
  assert.equal(shouldShowBackToTop(-1), false);
  assert.equal(shouldShowBackToTop(Number.NaN), false);
  assert.equal(shouldShowBackToTop(Number.POSITIVE_INFINITY), false);
});

test("all question bank pages load the shared back-to-top component", async () => {
  const files = await htmlFiles(siteDirectory);
  const homepage = await readFile(join(siteDirectory, "index.html"), "utf8");
  const sharedTheme = await readFile(join(siteDirectory, "assets", "quizsite-theme.js"), "utf8");

  assert.ok(files.length > 1, "expected the site to contain question bank pages");
  assert.match(homepage, /\/assets\/back-to-top\.mjs/);
  assert.match(sharedTheme, /\/assets\/back-to-top\.mjs/);

  for (const file of files) {
    if (file === join(siteDirectory, "index.html")) continue;
    const html = await readFile(file, "utf8");
    assert.match(html, /quizsite-theme\.js/, `${file} should load the shared theme`);
  }
});

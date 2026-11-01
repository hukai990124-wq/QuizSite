import test from "node:test";
import assert from "node:assert/strict";
import { execFileSync } from "node:child_process";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

const repoDirectory = fileURLToPath(new URL("..", import.meta.url));
const legacyBrand = ["quiz", "bank"].join("");

test("tracked text files and paths use the QuizSite identity", async () => {
  const deleted = new Set(execFileSync("git", ["ls-files", "--deleted", "-z"], { cwd: repoDirectory })
    .toString("utf8").split("\0").filter(Boolean));
  const paths = execFileSync("git", ["ls-files", "--cached", "--others", "--exclude-standard", "-z"], { cwd: repoDirectory })
    .toString("utf8")
    .split("\0")
    .filter((path) => path && !deleted.has(path));
  const stalePaths = paths.filter((path) => path.toLowerCase().includes(legacyBrand));
  const staleContents = [];

  for (const path of paths) {
    const content = await readFile(join(repoDirectory, path));
    if (content.includes(0)) continue;
    if (content.toString("utf8").toLowerCase().includes(legacyBrand)) staleContents.push(path);
  }

  assert.deepEqual(stalePaths, [], "tracked paths still contain the previous product name");
  assert.deepEqual(
    staleContents,
    ["wrangler.toml"],
    "only the existing Cloudflare D1 binding name may retain the prior identifier while its UUID stays unchanged",
  );
});

test("the Cloudflare Worker deploy keeps the existing account database", async () => {
  const config = await readFile(join(repoDirectory, "wrangler.toml"), "utf8");

  assert.match(config, /^name\s*=\s*"quizsite"\s*$/m);
  assert.ok(config.includes(`database_name = "${legacyBrand}-accounts"`));
  assert.match(config, /database_id\s*=\s*"5df2fac9-fe75-4a2a-9313-75e47a164de5"/);
});

import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { DatabaseSync } from "node:sqlite";

test("registration location migration preserves old users and validates metadata", (t) => {
  const db = new DatabaseSync(":memory:");
  t.after(() => db.close());

  db.exec(readFileSync(new URL("./migrations/0001_accounts_and_progress.sql", import.meta.url), "utf8"));
  db.prepare(`
    INSERT INTO users (
      id, username, password_salt, password_hash, password_iterations,
      progress_initialized, created_at
    ) VALUES (?, ?, ?, ?, ?, ?, ?)
  `).run("legacy", "Legacy1", "salt", "hash", 16384, 0, 1);

  db.exec(readFileSync(new URL("./migrations/0005_registration_location.sql", import.meta.url), "utf8"));

  const legacy = db.prepare("SELECT registration_country, registration_region FROM users WHERE id = ?").get("legacy");
  assert.equal(legacy.registration_country, null);
  assert.equal(legacy.registration_region, null);

  db.prepare("UPDATE users SET registration_country = ?, registration_region = ? WHERE id = ?").run("JP", "Tokyo", "legacy");
  const updated = db.prepare("SELECT registration_country, registration_region FROM users WHERE id = ?").get("legacy");
  assert.equal(updated.registration_country, "JP");
  assert.equal(updated.registration_region, "Tokyo");

  assert.throws(() => db.prepare("UPDATE users SET registration_country = ? WHERE id = ?").run("JPN", "legacy"));
  assert.throws(() => db.prepare("UPDATE users SET registration_region = ? WHERE id = ?").run("x".repeat(129), "legacy"));
});

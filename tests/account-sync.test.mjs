import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";
import vm from "node:vm";

const source = await readFile(new URL("../site/assets/account-sync.js", import.meta.url), "utf8");

class MemoryStorage {
  constructor() { this.values = new Map(); }
  get length() { return this.values.size; }
  key(index) { return [...this.values.keys()][index] ?? null; }
  getItem(key) { return this.values.has(String(key)) ? this.values.get(String(key)) : null; }
  setItem(key, value) { this.values.set(String(key), String(value)); }
  removeItem(key) { this.values.delete(String(key)); }
}

function loadSync() {
  const window = {};
  vm.runInNewContext(source, { window });
  return window.QuizBankProgressSync;
}

test("local edits and removals produce per-question versions and tombstones", () => {
  const sync = loadSync();
  const meta = sync.createMeta();
  const before = JSON.stringify({ "1": { s: ["A"], ok: null }, "2": { s: ["B"], ok: true } });
  const after = JSON.stringify({ "1": { s: ["C"], ok: null } });
  const tracked = sync.trackChange("quiz:aws:clf:01", before, after, meta, 200);
  const changed = tracked.records;

  assert.equal(changed.length, 2);
  assert.equal(changed.find((record) => record.itemKey === "1").updatedAt, 200);
  assert.deepEqual(JSON.parse(JSON.stringify(changed.find((record) => record.itemKey === "1").value)), { s: ["C"], ok: null });
  assert.equal(changed.find((record) => record.itemKey === "2").isDeleted, true);
});

test("repeated same-millisecond edits still advance the per-question version", () => {
  const sync = loadSync();
  const meta = sync.createMeta();
  meta.stamps["quiz:aws:clf:01"] = { "1": 200 };
  const tracked = sync.trackChange(
    "quiz:aws:clf:01",
    JSON.stringify({ "1": { s: ["A"] } }),
    JSON.stringify({ "1": { s: ["B"] } }),
    meta,
    200,
  );

  assert.equal(tracked.records[0].updatedAt, 201);
  assert.equal(tracked.meta.pending["quiz:aws:clf:01"]["1"], 201);
});

test("full snapshots retain local answer state, timer values, and pending deletion markers", () => {
  const sync = loadSync();
  const storage = new MemoryStorage();
  const meta = sync.createMeta();
  const before = JSON.stringify({ "1": { s: ["A"] }, "2": { s: ["B"] } });
  const after = JSON.stringify({ "1": { s: ["A"] } });
  storage.setItem("quiz:aws:clf:01", before);
  storage.setItem("quiz:aws:clf:01:t0", "12345");
  const tracked = sync.trackChange("quiz:aws:clf:01", before, after, meta, 150);
  storage.setItem("quiz:aws:clf:01", after);

  const records = sync.collectSnapshot(storage, tracked.meta, 200).records;
  const timer = records.find((record) => record.storageKey.endsWith(":t0"));
  const answer = records.find((record) => record.storageKey === "quiz:aws:clf:01" && record.itemKey === "1");
  const deleted = records.find((record) => record.storageKey === "quiz:aws:clf:01" && record.itemKey === "2");

  assert.equal(timer.value, "12345");
  assert.equal(timer.itemKey, "@value");
  assert.deepEqual(JSON.parse(JSON.stringify(answer.value)), { s: ["A"] });
  assert.equal(deleted.isDeleted, true);
});

test("server merge results update localStorage without losing unrelated question answers", () => {
  const sync = loadSync();
  const storage = new MemoryStorage();
  const meta = sync.createMeta();
  storage.setItem("quiz:aws:clf:01", JSON.stringify({ "1": { s: ["A"] }, "2": { s: ["B"] } }));
  const applied = sync.applyMergedRecords(storage, meta, [{
    storageKey: "quiz:aws:clf:01",
    itemKey: "1",
    value: { s: ["C"] },
    updatedAt: 300,
    isDeleted: false,
  }, {
    storageKey: "quiz:aws:clf:01",
    itemKey: "2",
    value: null,
    updatedAt: 310,
    isDeleted: true,
  }]);

  assert.equal(applied.changed, true);
  assert.equal(storage.getItem("quiz:aws:clf:01"), JSON.stringify({ "1": { s: ["C"] } }));
  assert.equal(applied.meta.stamps["quiz:aws:clf:01"]["1"], 300);
  assert.equal(applied.meta.tombstones["quiz:aws:clf:01"]["2"], 310);
});

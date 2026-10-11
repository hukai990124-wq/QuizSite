import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { matchingAnswer, validateHotspot } from "../site/assets/hotspot-protocol.mjs";
const data = JSON.parse(readFileSync(new URL("../site/assets/aif-hotspots.json", import.meta.url)));
test("all 32 AIF hotspot questions have structured rows and actual selectable options", () => {
  assert.equal(Object.keys(data).length, 32);
  for (const question of Object.values(data)) assert.deepEqual(validateHotspot(question), question);
});
test("Q114 scores an ordered sequence, not an unordered set", () => {
  assert.equal(matchingAnswer(["D", "B", "A", "C"], 4, true), "D>B>A>C");
  assert.notEqual(matchingAnswer(["A", "B", "C", "D"], 4, true), "D>B>A>C");
  assert.equal(matchingAnswer(["D", "B", "", "C"], 4, true), "");
  assert.equal(matchingAnswer(["D", "D", "A", "C"], 4, true), "");
});
test("matching questions permit repeated choices and reject malformed source answers", () => {
  assert.equal(matchingAnswer(["B", "A", "B"], 3, false), "B>A>B");
  assert.equal(validateHotspot({ options: ["A"], rows: ["Row"], answer: [1] }), null);
  assert.equal(validateHotspot({ options: ["A"], rows: [], answer: [] }), null);
  assert.equal(validateHotspot({ options: ["A"], rows: ["Row"], answer: ["0"] }), null);
  assert.equal(validateHotspot({ options: ["A"], rows: ["Row"], answer: [0], ordered: "false" }), null);
  assert.equal(data["245"].answer, null, "conflicting source must not be silently guessed");
});

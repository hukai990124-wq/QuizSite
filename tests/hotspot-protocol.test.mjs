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
test("editorial answers include multilingual reasoning and AWS sources; ambiguous items stay ungraded", () => {
  const expected = {185:[1,0,0],191:[0,3,2],229:[1,2],309:[0,3,2,1],313:[1,2,0]};
  for (const [number, answer] of Object.entries(expected)) assert.deepEqual(data[number].answer, answer);
  for (const number of [185,188,191,229,245,309,313]) {
    const review = data[number].review;
    for (const language of ['zh','en','ja']) assert.ok(review[language].length > 30);
    assert.ok(review.sources.length > 0);
    for (const url of review.sources) assert.ok(['docs.aws.amazon.com','aws.amazon.com'].includes(new URL(url).hostname));
  }
  assert.equal(data['188'].answer, null, 'transparency is not automatically equivalent to explainability');
  assert.equal(data['245'].options.length, 4, 'do not invent missing source options');
  assert.equal(validateHotspot({...data['185'],review:{zh:'only Chinese'}}), null);
  assert.equal(validateHotspot({...data['185'],review:{...data['185'].review,sources:['javascript:alert(1)']}}), null);
});

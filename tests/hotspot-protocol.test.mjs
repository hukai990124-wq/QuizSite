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
  assert.deepEqual(data["245"].answer, [1,4,2], "grade against the explicitly disclosed repaired practice key");
});
test("editorial answers include multilingual reasoning and AWS sources; authorized inferred keys are graded", () => {
  const expected = {185:[1,0,0],188:[1,3,2],191:[0,3,2],229:[1,2],245:[1,4,2],309:[0,3,2,1],313:[1,2,0]};
  for (const [number, answer] of Object.entries(expected)) assert.deepEqual(data[number].answer, answer);
  for (const number of [185,188,191,229,245,309,313]) {
    const review = data[number].review;
    for (const language of ['zh','en','ja']) assert.ok(review[language].length > 30);
    assert.ok(review.sources.length > 0);
    for (const url of review.sources) assert.ok(['docs.aws.amazon.com','aws.amazon.com'].includes(new URL(url).hostname));
  }
  assert.match(data['188'].review.zh, /不完全相同/);
  assert.equal(data['245'].options.length, 5);
  assert.equal(data['245'].options[4], 'Fairness / 公平性（补充参考选项 / Added practice option）');
  assert.match(data['245'].review.zh, /不是恢复出的原题选项/);
  assert.ok(Object.values(data).every(question => question.answer !== null));
  assert.equal(validateHotspot({...data['185'],review:{zh:'only Chinese'}}), null);
  assert.equal(validateHotspot({...data['185'],review:{...data['185'].review,sources:['javascript:alert(1)']}}), null);
});

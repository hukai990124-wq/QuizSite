import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const read = name => JSON.parse(readFileSync(new URL(`../site/fe/${name}`, import.meta.url), "utf8"));
test("every FE A/B question has nonempty, correctly numbered AI text without adjacent questions", () => {
  const materials = read("chat-materials.json");
  let count = 0;
  for (const filename of ["data.json", "extra.json"]) {
    for (const [id, exam] of Object.entries(read(filename).sets)) {
      assert.equal(Object.keys(materials[id]).length, exam.questions.length);
      for (const q of exam.questions) {
        const text = materials[id][q.number];
        assert.ok(text.length > 30, `${id}/${q.number} has actual text`);
        const headings = [...text.matchAll(/^問\s*([\d０-９]+)\s*/gm)];
        assert.equal(headings.length, 1, `${id}/${q.number} excludes adjacent questions`);
        const number = Number(headings[0][1].replace(/[０-９]/g, c => String(c.charCodeAt(0)-0xff10)));
        assert.equal(number, q.originNumber || q.number, `${id}/${q.number} matches its IPA question`);
        assert.ok(text.length < 9000, `${id}/${q.number} leaves room for context metadata`);
        count++;
      }
    }
  }
  assert.equal(count,344);
});

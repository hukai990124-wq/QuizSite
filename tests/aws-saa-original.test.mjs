import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { banks } from '../.build/banks/quiz_kit/typescript/banks.mjs';
import layouts from '../.build/banks/quiz_kit/typescript/layouts.mjs';
import { renderPage } from '../.build/banks/quiz_kit/typescript/render.mjs';

const questions = JSON.parse(readFileSync(new URL("../question-banks/aws-saa/original-questions.json", import.meta.url), "utf8"));
const paper = readFileSync(new URL("../site/aws-saa/original/part01.html", import.meta.url), "utf8");
const directory = readFileSync(new URL("../site/aws-saa/index.html", import.meta.url), "utf8");
const homepage = readFileSync(new URL("../site/index.html", import.meta.url), "utf8");
const randomPool = readFileSync(new URL("../site/assets/random-quiz.js", import.meta.url), "utf8");

test("SAA original practice set has 50 complete trilingual questions across official domain weights", () => {
  assert.equal(questions.length, 50);
  assert.deepEqual(questions.map(question => question.id), Array.from({ length: 50 }, (_, index) => index + 1));
  assert.deepEqual([1, 2, 3, 4].map(domain => questions.filter(question => question.domain === domain).length), [15, 13, 12, 10]);

  for (const question of questions) {
    assert.ok([1, 2, 3, 4].includes(question.domain), `invalid domain for question ${question.id}`);
    assert.match(question.task, /^[1-4]\.\d$/);
    assert.ok([1, 2].includes(question.select), `invalid answer count for question ${question.id}`);
    assert.equal(question.options.length, question.select === 1 ? 4 : 5, `unexpected option count for question ${question.id}`);
    for (const language of ["en", "zh", "ja"]) {
      assert.ok(question.stem[language]?.trim(), `missing ${language} stem for question ${question.id}`);
      assert.ok(question.explanation[language]?.trim(), `missing ${language} explanation for question ${question.id}`);
      for (const option of question.options) assert.ok(option[language]?.trim(), `missing ${language} option for question ${question.id}`);
    }
    const letters = question.options.map(option => option.letter);
    assert.equal(new Set(letters).size, letters.length, `duplicate option letter for question ${question.id}`);
    assert.equal(new Set(question.answer).size, question.answer.length, `duplicate answer for question ${question.id}`);
    assert.equal(question.answer.length, question.select, `answer count mismatch for question ${question.id}`);
    assert.ok(question.answer.every(letter => letters.includes(letter)), `unknown answer for question ${question.id}`);
  }
});

test("SAA original set is rendered, linked from the directory, counted and included in random practice", () => {
  assert.equal((paper.match(/class="q" id="q\d+"/g) ?? []).length, 50);
  assert.match(paper, /quiz:aws:original:01/);
  assert.match(paper, /html\[data-lang="zh"\].*\.zh/);
  assert.match(paper, /html\[data-lang="ja"\].*\.ja/);
  assert.match(directory, /href="original\/part01\.html"/);
  assert.match(directory, /data-quiz-group="aws:original" data-quiz-count="1" data-quiz-total="50"/);
  assert.match(directory, /1050 题/);
  assert.match(homepage, /1060 题/);
  assert.match(randomPool, /files\("aws-saa\/original", 1, "part"\)/);
});
test("SAA Chinese fields contain no Japanese kana", () => {
  for (const question of questions) {
    for (const field of [question.stem, ...question.options, question.explanation]) {
      assert.doesNotMatch(field.zh, /[\u3040-\u30ff]/u, `Japanese text in Chinese question ${question.id}`);
    }
  }
});


test("original paper is generated from editable data and a question-free template", () => {
  const source = banks.find(bank => bank.id === 'aws-saa').pages.find(page => page.path === 'aws-saa/original/part01.html');
  const edited = structuredClone(source);
  const previous = JSON.stringify(source);
  edited.questions[0].content.stem = '<p class="en">Edited &lt;question&gt; &amp; text</p>';
  const output = renderPage(edited, layouts);
  assert.ok(output.includes('Edited &lt;question&gt; &amp; text'));
  assert.match(output, /quiz:aws:original:01/);
  assert.equal((output.match(/class="q" id="q\d+"/g) ?? []).length, 50);
  assert.ok(output.includes(source.questions[1].content.stem), 'editing Q1 must preserve Q2');
  assert.equal(edited.questions[0].answer, source.questions[0].answer, 'editing a stem must preserve its answer');
  assert.deepEqual(edited.questions.map(question => question.id), source.questions.map(question => question.id));
  assert.equal(JSON.stringify(source), previous);
});

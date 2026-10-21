import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateProgressItems} from '../worker/account.mjs';

const load = path => readFile(new URL('../' + path, import.meta.url), 'utf8');
test('HTML review has 20 stable four-choice questions with three-language explanations', async () => {
  const data = JSON.parse(await load('question-banks/programming/html-review.json'));
  assert.equal(data.length, 20);
  assert.equal(new Set(data.map(q => q.id)).size, 20);
  const answers = {};
  for (const [i, q] of data.entries()) {
    assert.equal(q.id, `html-${String(i + 1).padStart(2, '0')}`);
    assert.equal(q.options.length, 4);
    assert.equal(new Set(q.options).size, 4);
    assert.match(q.answer, /^[ABCD]$/);
    answers[q.answer] = (answers[q.answer] || 0) + 1;
    for (const lang of ['en','zh','ja']) {
      assert.ok(q.prompt[lang]?.trim());
      assert.ok(q.explanation[lang]?.trim());
    }
    assert.match(q.source, /^https:\/\/developer.mozilla.org\/en-US\//);
  }
  assert.deepEqual(Object.values(answers).sort(), [5,5,5,5]);
});
test('HTML review uses safe escaped snippets and the shared quiz engine', async () => {
  const page = await load('site/programming/index.html');
  assert.equal((page.match(/class="q" id="q\d+"/g) || []).length, 20);
  assert.equal((page.match(/class="opt" data-letter="[ABCD]"/g) || []).length, 80);
  assert.match(page, /&lt;img/);
  assert.doesNotMatch(page, /<img\b|<input\b|<iframe\b|onclick="|onerror="/i);
  assert.match(page, /quiz:programming:html:01/);
  assert.match(page, /programming-review.css/);
  assert.match(page, /quizsite-theme.js/);
  assert.equal((page.match(/data-chat-context="/g) || []).length, 20,
    'AI context must preserve options even though the shared reader strips buttons');
  assert.doesNotThrow(() => validateProgressItems([{
    storageKey:'quiz:programming:html:01', itemKey:'1',
    value:{s:['A'],ok:true,revealed:false},updatedAt:100,isDeleted:false
  }]));
});
test('homepage separates programming practice and includes its progress', async () => {
  const page = await load('site/index.html');
  assert.match(page, /<section[^>]*id="programming-practice"/);
  assert.match(page, /data-site="programming"/);
  assert.match(page, /href="programming\/index.html"/);
  assert.match(page, /"programming":\{keys:\[\["programming:html:01",20\]\]\}/);
});

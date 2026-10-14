import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { validateProgressItems } from '../worker/account.mjs';
import { createHash } from 'node:crypto';

const root = new URL('../', import.meta.url);
test('the original 50 vocabulary records remain unchanged and in the same order', async () => {
  const data = JSON.parse(await readFile(new URL('aws-aif/vocabulary.json', root), 'utf8'));
  assert.equal(createHash('sha256').update(JSON.stringify(data.slice(0, 50))).digest('hex'),
    'c40b90e62fab9f6d59bc26a335ba1c9357016d42f0b4f608e81e0785abf1a5e1');
});
test('vocabulary progress is accepted by the existing account sync contract', () => {
  assert.doesNotThrow(() => validateProgressItems([{
    storageKey: 'quiz:aws:aifvocab:01', itemKey: '1',
    value: { s: ['B'], ok: true, revealed: false }, updatedAt: 100, isDeleted: false
  }]));
});
test('AIF vocabulary has 100 unique terms, bilingual distractors and Japanese coverage', async () => {
  const data = JSON.parse(await readFile(new URL('aws-aif/vocabulary.json', root), 'utf8'));
  assert.equal(data.length, 100);
  assert.equal(new Set(data.map(q => q.id)).size, 100);
  assert.equal(new Set(data.map(q => q.term)).size, 100);
  for (const q of data) {
    for (const lang of ['zh', 'en', 'ja']) assert.ok(q.meaning[lang]?.trim());
    assert.ok(data.some(other => other.id === q.distractor && other.id !== q.id));
    assert.ok([1, 2, 3, 4, 5].includes(q.domain));
    assert.match(q.source, /^https:\/\/docs\.aws\.amazon\.com\//);
  }
  assert.equal(new Set(data.map(q => q.domain)).size, 5);
});
test('vocabulary page reuses quiz scoring with exactly A/B choices and an isolated progress key', async () => {
  const page = await readFile(new URL('site/aws-aif/vocabulary.html', root), 'utf8');
  const questions = [...page.matchAll(/<div class="q" id="q(\d+)"[\s\S]*?(?=<div class="q"|<\/div><div class="sheet")/g)].map(match => match[0]);
  assert.equal(questions.length, 100);
  let a = 0;
  for (const q of questions) {
    assert.deepEqual([...q.matchAll(/class="opt" data-letter="([A-Z])"/g)].map(m => m[1]), ['A', 'B']);
    assert.match(q, /data-ans="[AB]"/);
    if (q.includes('data-ans="A"')) a++;
    assert.match(q, /lang="ja"/);
    assert.match(q, /class="js-redo"/);
  }
  assert.ok(a >= 30 && a <= 70, 'answer positions must not all be the same');
  assert.match(page, /quiz:aws:aifvocab:01/);
  assert.match(page, /quizbank-theme\.js/);
  const index = await readFile(new URL('site/aws-aif/index.html', root), 'utf8');
  assert.match(index, /href="vocabulary.html"/);
});

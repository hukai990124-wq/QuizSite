import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { matchesVocabulary, readVocabularyState } from '../site/assets/fe-vocabulary.mjs';

const data = JSON.parse(await readFile(new URL('../question-banks/fe/content/vocabulary.json', import.meta.url), 'utf8'));

test('FE vocabulary has 120 stable unique complete records in eight categories', () => {
  assert.equal(data.length, 120);
  assert.equal(new Set(data.map(word => word.id)).size, 120);
  assert.equal(new Set(data.map(word => word.term)).size, 120);
  assert.equal(new Set(data.map(word => word.category)).size, 8);
  for (const word of data) {
    assert.match(word.id, /^fe-[a-z]+-\d{2}$/);
    for (const field of ['category', 'term', 'reading', 'english', 'meaning', 'hint', 'contrast']) {
      assert.ok(word[field]?.trim(), `${word.id}.${field}`);
    }
    assert.equal(data.filter(other => other.category === word.category).length, 15);
  }
});

test('search matches Japanese, readings, Chinese and normalized English', () => {
  const cpu = data.find(word => word.id === 'fe-system-01');
  for (const query of ['CPU', 'ｃｐｕ', '中央処理', 'ちゅうおう', '中央处理']) {
    assert.ok(matchesVocabulary(cpu, {}, { query }));
  }
  assert.equal(matchesVocabulary(cpu, {}, { query: 'CPU 没有的词' }), false);
  assert.equal(matchesVocabulary(cpu, {}, { category: '数据库' }), false);
});

test('learning filters distinguish unseen, review and mastered records', () => {
  const word = data[0];
  assert.ok(matchesVocabulary(word, {}, { status: 'unseen' }));
  assert.equal(matchesVocabulary(word, {}, { status: 'review' }), false);
  const state = { [word.id]: 'review' };
  assert.ok(matchesVocabulary(word, state, { status: 'review' }));
  assert.equal(matchesVocabulary(word, state, { status: 'mastered' }), false);
  assert.ok(matchesVocabulary(word, { [word.id]: 'mastered' }, { status: 'mastered' }));
});

test('malformed or unsupported stored state never breaks studying', () => {
  for (const value of ['{', 'null', '[]', '3', '"hello"']) assert.deepEqual(readVocabularyState(value), {});
  assert.deepEqual(readVocabularyState('{"fe-system-01":"mastered","bad":"wrong","fe-network-02":"review"}'), {
    'fe-system-01': 'mastered', 'fe-network-02': 'review'
  });
});

test('FE pages expose vocabulary and the bank build publishes its data', async () => {
  for (const name of ['index', 'a', 'b']) {
    const html = await readFile(new URL(`../site/fe/${name}.html`, import.meta.url), 'utf8');
    assert.match(html, /href="vocabulary.html"/);
  }
  const published = JSON.parse(await readFile(new URL('../site/fe/vocabulary.json', import.meta.url), 'utf8'));
  assert.deepEqual(published, data);
});

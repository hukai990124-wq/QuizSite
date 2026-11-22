import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { readVocabularyState } from '../site/assets/fe-vocabulary.mjs';

const load = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('AIB mock covers four domains with independently gradable, translated questions', async () => {
  const pages = JSON.parse(await load('question-banks/aws-aib/pages.json'));
  const { questions } = pages.find(page => page.path === 'aws-aib/mock01.html');
  assert.equal(new Set(questions.map(q => q.content.stem)).size, 85);
  const counts = [0, 0, 0, 0];
  let multi = 0;
  for (const [index, q] of questions.entries()) {
    assert.equal(q.id, 'q' + (index + 1));
    counts[Number(q.content.qhead.match(/Domain ([1-4])/)[1]) - 1]++;
    const answers = q.answer.split(',');
    const letters = q.choices.map(choice => choice.letter);
    assert.equal(letters.join(''), answers.length > 1 ? 'ABCDE' : 'ABCD');
    assert.equal(new Set(answers).size, answers.length);
    assert.ok(answers.every(answer => letters.includes(answer)));
    if (answers.length > 1) { multi++; assert.equal(answers.length, 2); }
    for (const field of [q.content.stem, q.content.expl, ...q.choices.map(choice => choice.content['text.0'])]) {
      for (const lang of ['en', 'zh-CN', 'ja']) assert.match(field, new RegExp('lang="' + lang + '">[^<]+</p>'));
    }
  }
  assert.deepEqual(counts, [20, 24, 20, 21]);
  assert.equal(multi, 5);
});

test('AIB cards retain their own learning state and cover each exam domain', async () => {
  const cards = JSON.parse(await load('site/aws-aib/vocabulary.json'));
  assert.equal(cards.length, 60);
  assert.equal(new Set(cards.map(card => card.id)).size, 60);
  assert.equal(new Set(cards.map(card => card.category)).size, 4);
  for (const card of cards) {
    for (const key of ['term','reading','english','meaning','hint','contrast']) assert.ok(card[key].trim());
  }
  const raw = JSON.stringify({ [cards[0].id]: 'review', 'fe-system-01': 'mastered' });
  assert.deepEqual(readVocabularyState(raw, 'aib'), { [cards[0].id]: 'review' });
  assert.deepEqual(readVocabularyState(raw), { 'fe-system-01': 'mastered' });
});

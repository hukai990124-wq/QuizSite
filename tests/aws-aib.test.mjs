import test from 'node:test';
import assert from 'node:assert/strict';
import { readFile } from 'node:fs/promises';
import { readVocabularyState } from '../site/assets/fe-vocabulary.mjs';

const load = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

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

test('the user-curated AIB paper preserves its supplied key and flags disputed questions', async () => {
  const pages = JSON.parse(await load('question-banks/aws-aib/pages.json'));
  assert.deepEqual(pages.filter(page => page.questions.length).map(page => page.path), ['aws-aib/community01.html']);
  const paper = pages.find(page => page.path === 'aws-aib/community01.html');
  assert.equal(paper.questions.length, 31);
  assert.equal(new Set(paper.questions.map(question => question.content.stem)).size, 31);
  assert.equal(paper.questions.map(question => question.answer).join(''), 'DADBBBBCDDABACBCDCABDADDCDBCDDD');
  for (const [index, question] of paper.questions.entries()) {
    assert.equal(question.id, 'q' + (index + 1));
    assert.equal(question.number, String(index + 1));
    assert.match(question.content.qhead, new RegExp('AI' + String(index + 1).padStart(3, '0')));
    assert.equal(question.choices.map(choice => choice.letter).join(''), 'ABCD');
    assert.ok(question.choices.some(choice => choice.letter === question.answer));
    assert.match(question.content.stem, /lang="en"/);
    assert.match(question.content.expl, /lang="zh-CN"/);
  }
  for (const number of [14, 24, 26, 28, 30]) {
    assert.match(paper.questions[number - 1].content.expl, /备注：/);
  }
  const domains = [1, 2, 3, 4].map(domain =>
    paper.questions.filter(question => question.content.qhead.includes('Domain ' + domain)).length
  );
  assert.ok(domains.every((count, index) => count > [2, 3, 3, 2][index]));
  const index = await load('site/aws-aib/index.html');
  assert.match(index, /pool=aws-aib&amp;size=10"/);
  assert.doesNotMatch(index, /mock01\.html|pool=aws-aib&amp;size=(50|85)"/);
  assert.match(index, /href="community01.html" data-quiz-key="aws:aib:community:01" data-quiz-total="31"/);
});

test('AIB uses the supplied paper for random exams and landing-page progress', async () => {
  const home = await load('site/index.html');
  assert.match(home, /"aws-aib":\{keys:\[\["aws:aib:community:01",31\]\]\}/);
  const random = await load('site/assets/random-quiz.js');
  assert.match(random, /"aws-aib":[^\n]+files: \["aws-aib\/community01\.html"\]/);
  assert.doesNotMatch(random, /aws-aib\/mock01\.html/);
  const vocabulary = await load('site/aws-aib/vocabulary.html');
  assert.match(vocabulary, /href="community01\.html"/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateProgressItems} from '../worker/account.mjs';

const load = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

const DOMAINS = [
  'Data Preparation for Machine Learning (ML)',
  'ML Model Development',
  'Deployment and Orchestration of ML Workflows',
  'ML Solution Monitoring, Maintenance, and Security',
];

test('MLA-C01 bank holds 65 questions matching the official domain weights', async () => {
  const qs = JSON.parse(await load('question-banks/aws-mla/data/questions.json'));
  assert.equal(qs.length, 65);
  const tally = {};
  for (const [i, q] of qs.entries()) {
    assert.equal(q.id, `mla-${String(i + 1).padStart(2, '0')}`);
    assert.ok(DOMAINS.includes(q.topic), `${q.id} has an unknown topic: ${q.topic}`);
    tally[q.topic] = (tally[q.topic] || 0) + 1;
    assert.ok([4, 6].includes(q.options.length), `${q.id} has ${q.options.length} options`);
    assert.ok(q.answer.length >= 1, `${q.id} has no answer`);
    const letters = q.options.map(o => o.letter);
    assert.deepEqual(letters, 'ABCDEF'.slice(0, letters.length).split(''), `${q.id} letters`);
    for (const a of q.answer) assert.ok(letters.includes(a), `${q.id} answer ${a} not offered`);
    assert.equal(new Set(q.options.map(o => o.en)).size, q.options.length, `${q.id} duplicate options`);
    // Every question is answerable in all three languages, or the language
    // switch silently falls back to English mid-page.
    for (const lang of ['en', 'zh', 'ja']) {
      assert.ok(q.question[lang]?.trim(), `${q.id} stem missing ${lang}`);
      assert.ok(q.explanation[lang]?.trim(), `${q.id} explanation missing ${lang}`);
      for (const o of q.options) assert.ok(o[lang]?.trim(), `${q.id} option missing ${lang}`);
      if (q.exhibit) {
        assert.ok(q.exhibit.title[lang]?.trim(), `${q.id} exhibit title missing ${lang}`);
      }
    }
    if (q.exhibit) assert.ok(q.exhibit.code.trim(), `${q.id} exhibit has no body`);
  }
  // 28% / 26% / 24% / 22% of 65 comes out as 18 / 17 / 16 / 14.
  assert.deepEqual(tally, {
    'Data Preparation for Machine Learning (ML)': 18,
    'ML Model Development': 17,
    'Deployment and Orchestration of ML Workflows': 14,
    'ML Solution Monitoring, Maintenance, and Security': 16,
  });
  assert.equal(qs.filter(q => q.answer.length > 1).length, 13, 'multi-answer count');
});

test('MLA-C01 keeps 65 practice questions and replaces the old timed mode with a random 50-question exam', async () => {
  const page = await load('site/aws-mla/index.html');
  const qs = JSON.parse(await load('question-banks/aws-mla/data/questions.json'));
  const blocks = page.match(/class="q" id="q\d+"/g) || [];
  assert.equal(blocks.length, 65);
  for (const q of qs) {
    assert.ok(page.includes(`data-ans="${q.answer.join(',')}"`), `${q.id} answer key missing`);
  }
  // Exhibits must survive as preformatted text; escaping them into the stem
  // would flatten the log excerpts the questions rely on.
  assert.equal((page.match(/class="exhibit-code"/g) || []).length, qs.filter(q => q.exhibit).length);
  assert.equal((page.match(/class="exhibit-code"/g) || []).length, 10);
  assert.match(page, /random\.html\?pool=aws-mla&amp;size=50/);
  assert.match(page, /class="random-entry"/);
  assert.match(page, /quiz:aws:mla:c01/);
  assert.doesNotMatch(page, /id="btn-exam"/);
  assert.doesNotMatch(page, /LIMIT=130\*60/);
  assert.match(page, /random-entry\.css/);
  // English sits beside Chinese on the same question rather than replacing it.
  assert.match(page, /class="zh" lang="zh">/);
  assert.match(page, /class="en" lang="en">/);
});

test('homepage lists MLA-C01 and counts it once', async () => {
  const home = await load('site/index.html');
  assert.ok(home.includes('href="aws-mla/index.html"'), 'card missing');
  assert.match(home, /"aws-mla":\{keys:\[\["aws:mla:c01",65\]\]\}/);
  assert.ok(home.includes('14 个题库 · 共 5722 题次'), 'bank count not updated');
  assert.ok(home.includes('0 / 5722'), 'progress total not updated');
  // The AIF card sits directly above; MLA must not have displaced OPC's last slot.
  const mla = home.indexOf('href="aws-mla/index.html"');
  const aif = home.indexOf('href="aws-aif/index.html"');
  const opc = home.indexOf('href="workbuddy-opc/index.html"');
  assert.ok(aif < mla && mla < opc, 'card order changed');
});

test('MLA-C01 progress keys pass the account validator', async () => {
  assert.doesNotThrow(() => validateProgressItems([{
    storageKey: 'quiz:aws:mla:c01', itemKey: '1',
    value: {s: ['B'], ok: true, revealed: false}, updatedAt: 100, isDeleted: false,
  }]));
  // A key without the quiz: prefix is what the validator rejects; make sure
  // the page really ships the prefixed form.
  assert.throws(() => validateProgressItems([{
    storageKey: 'aws:mla:c01', itemKey: '1',
    value: {s: ['B'], ok: true, revealed: false}, updatedAt: 100, isDeleted: false,
  }]));
});

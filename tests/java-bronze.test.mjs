import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateProgressItems} from '../worker/account.mjs';

const load = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('Java Bronze set has 20 stable questions mixing single and multiple answers', async () => {
  const data = JSON.parse(await load('question-banks/java-bronze/java-bronze.json'));
  const qs = data.questions;
  assert.equal(qs.length, 20);
  const multi = qs.filter(q => q.kind === 'multi');
  assert.ok(multi.length, 'the set must include multi-answer questions');
  assert.ok(qs.length - multi.length, 'the set must include single-answer questions');
  for (const [i, q] of qs.entries()) {
    assert.equal(q.id, `jb-${String(i + 1).padStart(2, '0')}`);
    assert.equal(q.options.length, 4);
    assert.ok(q.topic?.trim(), `${q.id} needs a topic label`);
    // A multi-answer question must really carry more than one correct choice.
    const answers = q.answer.split(',');
    assert.equal(answers.length, q.kind === 'multi' ? answers.length : 1);
    if (q.kind === 'multi') assert.ok(answers.length >= 2, `${q.id} is multi with one answer`);
    else assert.equal(answers.length, 1, `${q.id} is single with several answers`);
    for (const a of answers) assert.match(q.answer.replace(/,/g, ''), /^[ABCD]+$/);
    const texts = q.options.map(o => o.en);
    assert.equal(new Set(texts).size, 4, `${q.id} has duplicate options`);
    for (const lang of ['en', 'zh', 'ja']) {
      assert.ok(q.prompt[lang]?.trim(), `${q.id} prompt missing ${lang}`);
      assert.ok(q.explanation[lang]?.trim(), `${q.id} explanation missing ${lang}`);
      for (const opt of q.options) {
        assert.ok(opt[lang]?.trim(), `${q.id} option missing ${lang}`);
      }
    }
    assert.ok((q.code || '').trim(), `${q.id} needs a code snippet`);
  }
});

test('Java Bronze page renders both answer types with three-language text', async () => {
  const page = await load('site/java-bronze/index.html');
  assert.equal((page.match(/class="q" id="q\d+"/g) || []).length, 20);
  assert.equal((page.match(/class="opt" data-letter="[ABCD]"/g) || []).length, 80);
  assert.match(page, /jb:practice:01/);
  assert.match(page, /quizsite-theme.js/);
  for (const lang of ['en', 'zh', 'ja']) {
    assert.equal((page.match(new RegExp(`class="opt-lang" lang="${lang}"`, 'g')) || []).length, 80,
      `every option needs a ${lang} rendering`);
  }
  assert.equal((page.match(/class="jb-code i18n-noloc"/g) || []).length, 20);
  // Multi-answer questions are marked by a comma in data-ans.
  const data = JSON.parse(await load('question-banks/java-bronze/java-bronze.json'));
  const multiCount = data.questions.filter(q => q.kind === 'multi').length;
  assert.equal((page.match(/data-ans="[ABCD],[ABCD,]+"/g) || []).length, multiCount);
  assert.doesNotMatch(page, /<img\b|<input\b|<iframe\b|on(?:click|error)\s*=\s*["']/i,
    'code snippets must stay inert escaped text');
  assert.match(page, /html\[data-lang="zh"\][^{]*\[lang="en"\][^{]*\{[^}]*display:\s*none/,
    'switching to Chinese must hide the English line instead of stacking on it');
  assert.doesNotThrow(() => validateProgressItems([{
    storageKey: 'quiz:jb:practice:01', itemKey: '1',
    value: {s: ['B'], ok: true, revealed: false}, updatedAt: 100, isDeleted: false
  }]));
});

test('homepage lists the Java Bronze bank and registers its progress', async () => {
  const page = await load('site/index.html');
  assert.match(page, /href="java-bronze\/index\.html"/);
  assert.match(page, /data-site="java-bronze"/);
  assert.ok(page.includes('"java-bronze":{keys:[["jb:practice:01",20],["jb:exam:60",60]]}'),
    'the bank must register both sets');
  assert.match(page, /13 个题库 · 共 5641 题次/);
  assert.match(page, /id="ov-txt">0 \/ 5641</);
  // OPC stays the last card of the main bank area, as requested.
  const opc = page.indexOf('href="workbuddy-opc/index.html"');
  const jb = page.indexOf('href="java-bronze/index.html"');
  assert.ok(opc > jb, 'Java Bronze must come before the final OPC card');
  const section = page.indexOf('id="programming-practice"');
  assert.ok(opc < section, 'OPC must remain the last card before the programming section');
});

test('Java Bronze mock exam has 60 questions with balanced answers and a timer', async () => {
  const data = JSON.parse(await load('question-banks/java-bronze/java-bronze-exam.json'));
  const qs = data.questions;
  assert.equal(qs.length, 60);
  assert.equal(new Set(qs.map(q => q.id)).size, 60);
  for (const [i, q] of qs.entries()) {
    assert.equal(q.id, `jbe-${String(i + 1).padStart(2, '0')}`);
    assert.ok(q.options.length >= 2 && q.options.length <= 5,
      `${q.id} has ${q.options.length} choices`);
    for (const lang of ['en', 'zh', 'ja']) {
      assert.ok(q.prompt[lang]?.trim(), `${q.id} prompt missing ${lang}`);
      assert.ok(q.explanation[lang]?.trim(), `${q.id} explanation missing ${lang}`);
      for (const o of q.options) assert.ok(o[lang]?.trim(), `${q.id} option missing ${lang}`);
    }
  }
  // A paper where nearly every answer sits on A is guessable, so the rendered
  // page is checked instead of the source data.
  const page = await load('site/java-bronze/exam.html');
  const answers = [...page.matchAll(/data-ans="([A-E,]+)"/g)].map(m => m[1]);
  assert.equal(answers.length, 60);
  const singles = answers.filter(a => !a.includes(',')).map(a => a);
  const tally = {};
  for (const a of singles) tally[a] = (tally[a] || 0) + 1;
  const counts = Object.values(tally);
  assert.ok(Math.max(...counts) <= 20,
    `one letter carries too many answers: ${JSON.stringify(tally)}`);
  assert.ok(Object.keys(tally).length >= 4, 'answers should use at least four letters');
  // Shuffling must never touch position-sensitive choices.
  assert.equal((page.match(/None of the above|All of the above/g) || []).length > 0, true);
  assert.match(page, /id="btn-exam"/);
  assert.match(page, /id="timer"/);
  assert.match(page, /60 \* 60|\b3900\b|LIMIT=65\*60/);
  assert.match(page, /quiz:jb:exam:60/);
  assert.match(page, /body\.exam details\.ans/);
});

test('practice page links to the mock exam and the homepage counts both', async () => {
  const practice = await load('site/java-bronze/index.html');
  assert.match(practice, /href="\/java-bronze\/exam\.html"/);
  const home = await load('site/index.html');
  assert.ok(home.includes('"java-bronze":{keys:[["jb:practice:01",20],["jb:exam:60",60]]}'),
    'homepage must register both the practice set and the mock exam');
  assert.match(home, /13 个题库 · 共 5641 题次/);
  assert.match(home, /id="ov-txt">0 \/ 5641</);
  assert.match(home, />80 题</);
});

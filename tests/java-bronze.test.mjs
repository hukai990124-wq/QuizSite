import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateProgressItems} from '../worker/account.mjs';

const load = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('Java Bronze set has 20 stable questions mixing single and multiple answers', async () => {
  const data = JSON.parse(await load('java-bronze/java-bronze.json'));
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
  assert.match(page, /quizbank-theme.js/);
  for (const lang of ['en', 'zh', 'ja']) {
    assert.equal((page.match(new RegExp(`class="opt-lang" lang="${lang}"`, 'g')) || []).length, 80,
      `every option needs a ${lang} rendering`);
  }
  assert.equal((page.match(/class="jb-code i18n-noloc"/g) || []).length, 20);
  // Multi-answer questions are marked by a comma in data-ans.
  const data = JSON.parse(await load('java-bronze/java-bronze.json'));
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
  assert.match(page, /"java-bronze":\{keys:\[\["jb:practice:01",20\]\]\}/);
  assert.match(page, /11 个题库 · 共 4901 题次/);
  assert.match(page, /id="ov-txt">0 \/ 4901</);
  // OPC stays the last card of the main bank area, as requested.
  const opc = page.indexOf('href="workbuddy-opc/index.html"');
  const jb = page.indexOf('href="java-bronze/index.html"');
  assert.ok(opc > jb, 'Java Bronze must come before the final OPC card');
  const section = page.indexOf('id="programming-practice"');
  assert.ok(opc < section, 'OPC must remain the last card before the programming section');
});

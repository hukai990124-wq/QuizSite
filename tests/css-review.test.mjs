import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateProgressItems} from '../worker/account.mjs';

const load = path => readFile(new URL('../' + path, import.meta.url), 'utf8');

test('CSS review has 20 stable four-choice questions with three-language explanations', async () => {
  const data = JSON.parse(await load('question-banks/programming/css-review.json'));
  assert.equal(data.length, 20);
  assert.equal(new Set(data.map(q => q.id)).size, 20);
  const answers = {};
  for (const [i, q] of data.entries()) {
    assert.equal(q.id, `css-${String(i + 1).padStart(2, '0')}`);
    assert.equal(q.options.length, 4);
    const texts = q.options.map(o => (typeof o === 'string' ? o : o.en));
    assert.equal(new Set(texts).size, 4, `${q.id} has duplicate options`);
    assert.match(q.answer, /^[ABCD]$/);
    answers[q.answer] = (answers[q.answer] || 0) + 1;
    for (const lang of ['en','zh','ja']) {
      assert.ok(q.prompt[lang]?.trim());
      assert.ok(q.explanation[lang]?.trim());
    }
    assert.match(q.source, /^https:\/\/developer\.mozilla\.org\/en-US\//);
  }
  assert.deepEqual(Object.values(answers).sort(), [5,5,5,5]);
});

test('defect-review options are translated; implementation-choice options stay code', async () => {
  const data = JSON.parse(await load('question-banks/programming/css-review.json'));
  const defect = data.filter(q => (q.code || '').trim());
  const impl = data.filter(q => !(q.code || '').trim());
  assert.ok(defect.length && impl.length, 'the set mixes both question styles');
  for (const q of defect) {
    for (const opt of q.options) {
      assert.equal(typeof opt, 'object', `${q.id}: prose options need {en,zh,ja}`);
      for (const lang of ['en', 'zh', 'ja']) {
        assert.ok(opt[lang]?.trim(), `${q.id}: option missing ${lang} text`);
      }
    }
  }
  // Snippets are language-neutral, so a bare string is the right shape for them.
  for (const q of impl) {
    for (const opt of q.options) {
      assert.equal(typeof opt, 'string', `${q.id}: code options must stay strings`);
    }
  }
});

test('rendered prose options carry three languages and the theme switches them', async () => {
  const page = await load('site/programming/css.html');
  const data = JSON.parse(await load('question-banks/programming/css-review.json'));
  const proseOptions = data.filter(q => (q.code || '').trim()).length * 4;
  for (const lang of ['en', 'zh', 'ja']) {
    assert.equal((page.match(new RegExp(`class="opt-lang" lang="${lang}"`, 'g')) || []).length,
      proseOptions, `every prose option needs a ${lang} rendering`);
  }
  const css = await load('site/assets/programming-review.css');
  assert.match(css, /html\[data-lang="zh"\][^{]*\[lang="en"\][^{]*\{[^}]*display:\s*none/,
    'switching to Chinese must hide the English line instead of stacking on it');
  assert.match(css, /\.opt-lang\[lang="(?:zh|ja)"\]/);
});

test('CSS review reuses the shared engine, red theme and safe snippets', async () => {
  const page = await load('site/programming/css.html');
  assert.equal((page.match(/class="q" id="q\d+"/g) || []).length, 20);
  assert.equal((page.match(/class="opt" data-letter="[ABCD]"/g) || []).length, 80);
  assert.match(page, /quiz:programming:css:01/);
  assert.match(page, /programming-review.css/);
  assert.match(page, /quizsite-theme.js/);
  assert.equal((page.match(/data-chat-context="/g) || []).length, 20,
    'AI context must preserve options even though the shared reader strips buttons');
  assert.doesNotMatch(page, /<img\b|<input\b|<iframe\b|on(?:click|error)\s*=\s*["']/i,
    'code choices must stay inert escaped text');
  // Questions that only ask the reviewer to pick an implementation carry no code block.
  const data = JSON.parse(await load('question-banks/programming/css-review.json'));
  const withoutCode = data.filter(q => !(q.code || '').trim()).length;
  assert.equal((page.match(/class="review-code i18n-noloc"/g) || []).length, 20 - withoutCode,
    'a code block appears only where the question supplies source code');
  assert.ok(withoutCode > 0, 'the set mixes implementation-choice and defect-review questions');
  assert.doesNotThrow(() => validateProgressItems([{
    storageKey:'quiz:programming:css:01', itemKey:'1',
    value:{s:['C'],ok:true,revealed:false},updatedAt:100,isDeleted:false
  }]));
});

test('programming practice section lists both HTML and CSS reviews', async () => {
  const page = await load('site/index.html');
  assert.match(page, /<section[^>]*id="programming-practice"/);
  assert.match(page, /"programming":\{keys:\[\["programming:html:01",20\]\]\}/);
  assert.match(page, /"programming-css":\{keys:\[\["programming:css:01",20\]\]\}/);
  assert.match(page, /href="programming\/index\.html"/);
  assert.match(page, /href="programming\/css\.html"/);
  assert.match(page, /data-site="programming-css"/);
});

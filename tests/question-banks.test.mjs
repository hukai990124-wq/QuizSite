import test from 'node:test';
import assert from 'node:assert/strict';
import { createHash } from 'node:crypto';
import { execFileSync } from 'node:child_process';
import { mkdtemp, readFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { banks } from '../.build/banks/quiz_kit/typescript/banks.mjs';
import layouts from '../.build/banks/quiz_kit/typescript/layouts.mjs';
import { defineBank } from '../.build/banks/quiz_kit/typescript/define-bank.mjs';
import { validateFeData } from '../.build/banks/quiz_kit/typescript/fe-data.mjs';
import { outputPath, renderBanks, renderLayout, renderPage, renderQuestion } from '../.build/banks/quiz_kit/typescript/render.mjs';

const root = fileURLToPath(new URL('../', import.meta.url));
const hash = value => createHash('sha256').update(value).digest('hex');

test('all 14 banks render their complete published page and question inventory', async () => {
  assert.deepEqual(banks.map(bank => bank.id), ['aws-aib', 'aws-aif', 'aws-aip', 'aws-clf', 'aws-mla', 'aws-saa', 'dele-a1', 'dele-a2', 'fe', 'java-bronze', 'programming', 'toeic-listening', 'toeic-reading', 'workbuddy-opc']);
  const outputs = renderBanks(banks, layouts);
  assert.equal(banks.reduce((n, bank) => n + bank.pages.length, 0), 122);
  assert.equal(banks.reduce((n, bank) => n + bank.pages.reduce((sum, page) => sum + page.questions.length, 0), 0), 5462);
  for (const bank of banks) {
    for (const page of bank.pages) {
      assert.equal(outputs.get(page.path), await readFile(join(root, 'site', page.path), 'utf8'), page.path);
    }
  }
});

test('editing a question changes its stem, choice and both scoring and displayed answer without changing other questions', () => {
  const source = banks.find(bank => bank.id === 'aws-saa').pages.find(page => page.path === 'aws-saa/original/part01.html');
  const changed = structuredClone(source);
  const question = changed.questions[0];
  const before = JSON.stringify(source);
  question.content.stem = '<p class="en">Edited &lt;question&gt; $& <!-- content stays literal --></p>';
  question.choices[0].content['text.0'] = '<p class="en">Edited choice</p>';
  question.answer = 'A';
  const output = renderPage(changed, layouts);
  assert.ok(output.includes(question.content.stem));
  assert.ok(output.includes('Edited choice'));
  assert.match(output, /id="q1" data-n="1" data-ans="A"/);
  assert.ok(output.includes('正确答案 <b>A</b>'));
  assert.equal(renderQuestion(source.questions[1], layouts), renderQuestion(changed.questions[1], layouts));
  assert.equal(JSON.stringify(source), before, 'renderer must not mutate authored data');
});

test('unknown layouts, missing/extra slots, recursive layouts, malformed data and duplicate outputs fail explicitly', () => {
  assert.throws(() => renderLayout('missing', {}, {}), /Unknown layout/);
  assert.throws(() => renderLayout('one', {}, { one: [{ slot: 'stem' }] }), /Missing slot/);
  assert.throws(() => renderLayout('one', { extra: 'x' }, { one: ['text'] }), /Unused slot/);
  assert.throws(() => renderLayout('one', {}, { one: [{ layout: 'two' }], two: [{ layout: 'one' }] }), /Circular layout/);
  assert.equal(renderLayout('one', { text: '<!-- slot --> $&' }, { one: [{ slot: 'text' }] }), '<!-- slot --> $&');
  assert.throws(() => defineBank({ id: 'test', title: 'test', pages: [{ path: 'test/a.html', layout: 'one', content: { stem: 42 }, questions: [] }], dataFiles: [] }), /Expected string/);
  assert.throws(() => renderBanks([banks[0], banks[0]], layouts), /Duplicate bank/);
  const duplicate = structuredClone(banks[0]);
  duplicate.pages.push(duplicate.pages[0]);
  assert.throws(() => renderBanks([duplicate], layouts), /Duplicate output/);
});

test('output paths cannot escape the selected bank or output root', () => {
  for (const path of ['../escape.html', 'aws-aif/../../escape.html', 'aws-aif//x.html', 'C:/x.html', 'aws-saa/part01.html', 'aws-aif/../x.html', 'aws-aif/\\x.html']) {
    assert.throws(() => outputPath(banks[0], path), /Unsafe bank output/);
  }
});

test('FE image-question data rejects an ungradeable answer, a missing image and missing chat material before publishing', async () => {
  const data = JSON.parse(await readFile(join(root, 'question-banks/fe/content/data.json'), 'utf8'));
  const materials = JSON.parse(await readFile(join(root, 'question-banks/fe/content/chat-materials.json'), 'utf8'));
  const invalidAnswer = structuredClone(data);
  invalidAnswer.sets['2022-a'].questions[0].answer = 'invalid';
  assert.throws(() => validateFeData(invalidAnswer, materials), /Invalid FE answer/);
  const invalidImage = structuredClone(data);
  invalidImage.sets['2022-a'].questions[0].images = [];
  assert.throws(() => validateFeData(invalidImage, materials), /Invalid FE question images/);
  assert.throws(() => validateFeData(data, {}), /Missing FE chat material/);
});

test('an empty output directory rebuilds all pages and FE data solely from TypeScript and content sources', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'quizsite-banks-'));
  // Verify this resolved temporary path before the recursive cleanup below.
  assert.ok(resolve(directory).startsWith(resolve(tmpdir()) + sep));
  const before = await Promise.all(banks.map(bank => readFile(join(root, 'question-banks', bank.id, 'pages.json'))));
  try {
    execFileSync(process.execPath, [join(root, '.build/banks/quiz_kit/typescript/build.mjs'), '--out-dir', directory], { cwd: root });
    for (const bank of banks) {
      for (const page of bank.pages) assert.equal(hash(await readFile(join(directory, page.path))), hash(renderPage(page, layouts)), page.path);
      for (const file of bank.dataFiles) assert.deepEqual(await readFile(join(directory, file.path)), await readFile(join(root, file.source)), file.path);
    }
    for (const [index, bank] of banks.entries()) {
      assert.deepEqual(await readFile(join(root, 'question-banks', bank.id, 'pages.json')), before[index]);
    }
    const data = JSON.parse(await readFile(join(directory, 'fe/data.json'), 'utf8'));
    const extra = JSON.parse(await readFile(join(directory, 'fe/extra.json'), 'utf8'));
    const count = sets => Object.values(sets).reduce((n, set) => n + set.questions.length, 0);
    assert.equal(count(data.sets) + count(extra.sets), 344);
  } finally {
    await rm(directory, { recursive: true, force: true });
  }
});

import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import vm from 'node:vm';

const read = path => readFileSync(new URL('../' + path, import.meta.url), 'utf8');
const home = read('site/index.html');
const directory = read('site/aws-saa/index.html');
const originalKey = read('site/aws-saa/original/part01.html').match(/var KEY="([^"]+)"/)[1];
const officialKey = read('site/aws-saa/appendix_official.html').match(/var KEY="([^"]+)"/)[1];
const script = (html, marker) => [...html.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)].map(match => match[1]).find(source => source.includes(marker));

function createCard(attributes = {}) {
  const bar = { style: {} }, text = { textContent: '' }, classes = new Set();
  const progress = { classList: { add: value => classes.add(value), toggle(value, active) { if (active) classes.add(value); else classes.delete(value); } } };
  return { bar, text, classes, getAttribute: name => attributes[name] ?? null,
    querySelector: selector => ({ '.pg i': bar, '.pg span': text, '.pg': progress })[selector] };
}

function seed() {
  const answer = ok => ({ s: ['A'], ok, revealed: false });
  return new Map([
    ['quiz:aws:real:01', JSON.stringify({ 1: answer(true) })],
    ['quiz:aws:compliance:01', JSON.stringify({ 1: answer(false) })],
    [originalKey, JSON.stringify({ 1: answer(true), 2: answer(false), 3: answer(null), 4: { ...answer(true), revealed: true } })],
    [officialKey, JSON.stringify({ 1: answer(true), 2: answer(false) })],
  ]);
}

function run(source, document, storage) {
  const listeners = {};
  vm.runInNewContext(source, { document, localStorage: { getItem: key => storage.get(key) ?? null },
    window: { addEventListener(name, listener) { (listeners[name] ??= []).push(listener); } } });
  return (name, event = {}) => (listeners[name] || []).forEach(listener => listener(event));
}

test('homepage includes saved SAA C-line and official answers in both subject and global progress', () => {
  const card = createCard(), overall = { textContent: '' }, fill = { style: {} }, storage = seed();
  const dispatch = run(script(home, 'function awsKeys()'), {
    querySelector: selector => selector === '[data-site="aws-saa"]' ? card : null,
    getElementById: id => ({ 'ov-txt': overall, 'ov-fill': fill })[id],
  }, storage);
  assert.equal(card.text.textContent, '6/1060 题 · 正确率 50%');
  assert.equal(overall.textContent, '6 / 5806 · 正确率 50%');
  assert.equal(card.bar.style.width, (6 / 1060 * 100) + '%');
  storage.set(originalKey, '{}');
  dispatch('quizsite:progress-updated');
  assert.equal(card.text.textContent, '4/1060 题 · 正确率 50%');
  storage.set(officialKey, '{}');
  dispatch('storage', { key: officialKey });
  assert.equal(card.text.textContent, '2/1060 题 · 正确率 50%');
});

test('SAA directory reads actual paper keys and refreshes official statistics after sync and reset', () => {
  const cards = [...directory.matchAll(/<a\b[^>]*data-quiz-group="[^"]+"[^>]*>/g)].map(match => {
    const attributes = Object.fromEntries([...match[0].matchAll(/(data-[\w-]+)="([^"]*)"/g)].map(attribute => [attribute[1], attribute[2]]));
    return createCard(attributes);
  });
  const storage = seed();
  const dispatch = run(script(directory, 'function qa(s)'), { querySelectorAll: () => cards }, storage);
  const original = cards.find(card => card.getAttribute('data-quiz-group') === 'aws:original');
  const official = cards.find(card => card.getAttribute('data-quiz-group') === 'aws:official');
  assert.equal(original.text.textContent, '2/50 题 · 正确率 50%');
  assert.equal(official.text.textContent, '2/10 题 · 正确率 50%');
  storage.set(officialKey, JSON.stringify({ 1: { s: ['A'], ok: true, revealed: false } }));
  dispatch('quizsite:progress-updated');
  assert.equal(official.text.textContent, '1/10 题 · 正确率 100%');
  storage.delete(officialKey);
  dispatch('storage', { key: officialKey });
  assert.equal(official.text.textContent, '未开始');
  assert.equal(official.classes.has('on'), false);
});

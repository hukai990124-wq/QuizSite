import test from 'node:test';
import assert from 'node:assert/strict';
import { createGavinSpeech, speechLanguage, speechVoice } from '../site/assets/gavin-speech.mjs';

test('Gavin narration follows the answer language and handles Japanese kanji with question context', () => {
  assert.equal(speechLanguage('The Norman Conquest began in 1066.'), 'en-US');
  assert.equal(speechLanguage('阁下，百年战争并非连续作战。'), 'zh-CN');
  assert.equal(speechLanguage('貴殿、百年戦争には休戦期間もあった。'), 'ja-JP');
  assert.equal(speechLanguage('百年戦争', 'ja-JP'), 'ja-JP');
});

test('Gavin chooses available matching voices and never substitutes another language', () => {
  const voices = [{name:'David',lang:'en-US',localService:true}, {name:'Keita',lang:'ja-JP',localService:false}];
  assert.equal(speechVoice(voices, 'ja-JP'), voices[1]);
  assert.equal(speechVoice(voices, 'zh-CN'), undefined);
  assert.equal(speechVoice([], 'en-US'), undefined);
});

test('English uses online speech and reuses audio when replayed', async t => {
  const buttons = Object.fromEntries(['gavin-read', 'gavin-stop', 'gavin-speech-status'].map(id => [id, { disabled: false, textContent: '', addEventListener(type, fn) { this[type] = fn; } }]));
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    assert.deepEqual(JSON.parse(options.body), { text: 'Hello, my friend.', language: 'en' });
    return new Response(new Uint8Array([73, 68, 51]), { headers: { 'Content-Type': 'audio/mpeg' } });
  });
  t.mock.method(URL, 'createObjectURL', () => 'blob:test');
  t.mock.method(URL, 'revokeObjectURL', () => {});
  const old = { window: globalThis.window, document: globalThis.document, Audio: globalThis.Audio };
  t.after(() => { for (const [key, value] of Object.entries(old)) { if (value === undefined) delete globalThis[key]; else globalThis[key] = value; } });
  globalThis.window = { addEventListener() {} };
  globalThis.document = { getElementById: id => buttons[id], documentElement: { lang: 'zh-CN' } };
  let played = 0;
  globalThis.Audio = class { async play() { played++; } pause() {} };
  const speech = createGavinSpeech();
  speech.read('Hello, my friend.', 'Tell me more');
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(played, 1);
  buttons['gavin-read'].click();
  await new Promise(resolve => setTimeout(resolve, 0));
  assert.equal(played, 2);
  assert.equal(globalThis.fetch.mock.callCount(), 1);
});

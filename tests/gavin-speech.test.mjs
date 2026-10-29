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

function speechFixture(t, { voices = [{ name: 'David', lang: 'en-US', localService: true }], play = async () => {} } = {}) {
  const buttons = Object.fromEntries(['gavin-read', 'gavin-stop', 'gavin-speech-status'].map(id => [id, { disabled: false, textContent: '', addEventListener(type, fn) { this[type] = fn; } }]));
  const events = new EventTarget();
  const spoken = [];
  const engine = { getVoices: () => voices, cancel() {}, speak(utterance) { spoken.push(utterance); }, addEventListener: events.addEventListener.bind(events), removeEventListener: events.removeEventListener.bind(events) };
  class Utterance { constructor(text) { this.text = text; } }
  const old = Object.fromEntries(['window', 'document', 'Audio', 'SpeechSynthesisUtterance'].map(key => [key, globalThis[key]]));
  t.after(() => { for (const [key, value] of Object.entries(old)) { if (value === undefined) delete globalThis[key]; else globalThis[key] = value; } });
  globalThis.window = { speechSynthesis: engine, SpeechSynthesisUtterance: Utterance, addEventListener() {} };
  globalThis.SpeechSynthesisUtterance = Utterance;
  globalThis.document = { getElementById: id => buttons[id], documentElement: { lang: 'zh-CN' } };
  globalThis.Audio = class { play() { return play(); } pause() {} };
  t.mock.method(URL, 'createObjectURL', () => 'blob:test');
  t.mock.method(URL, 'revokeObjectURL', () => {});
  t.mock.method(globalThis, 'fetch', async () => new Response(new Uint8Array([73, 68, 51]), { headers: { 'Content-Type': 'audio/mpeg' } }));
  return { speech: createGavinSpeech(), buttons, spoken, setVoices(next) { voices = next; events.dispatchEvent(new Event('voiceschanged')); } };
}

const flush = () => new Promise(resolve => setTimeout(resolve, 0));

test('autoplay rejection retains generated audio for a manual retry', async t => {
  let plays = 0;
  const { speech, buttons, spoken } = speechFixture(t, { play: async () => { if (++plays === 1) throw new DOMException('Blocked', 'NotAllowedError'); } });
  speech.read('Hello friend.', 'Hello');
  await flush();
  assert.match(buttons['gavin-speech-status'].textContent, /自动播放/);
  buttons['gavin-read'].click();
  await flush();
  assert.equal(plays, 2);
  assert.equal(globalThis.fetch.mock.callCount(), 1);
  assert.equal(URL.revokeObjectURL.mock.callCount(), 0);
  assert.equal(spoken.length, 0);
});

test('invalid online audio is discarded and falls back to the matching device voice', async t => {
  const { speech, spoken } = speechFixture(t, { play: async () => { throw new DOMException('Decode failed', 'NotSupportedError'); } });
  speech.read('Hello friend.', 'Hello');
  await flush();
  assert.equal(URL.revokeObjectURL.mock.callCount(), 1);
  assert.equal(spoken.length, 1);
  assert.equal(spoken[0].lang, 'en-US');
  assert.equal(spoken[0].voice.lang, 'en-US');
});

test('device narration waits for voiceschanged and preserves the answer language', async t => {
  const { speech, spoken, setVoices } = speechFixture(t, { voices: [] });
  speech.read('百年戦争について説明する。', 'Explain in Japanese');
  await flush();
  assert.equal(spoken.length, 0);
  setVoices([{ name: 'Keita', lang: 'ja-JP', localService: true }]);
  await flush();
  assert.equal(spoken.length, 1);
  assert.equal(spoken[0].lang, 'ja-JP');
  assert.equal(spoken[0].voice.lang, 'ja-JP');
  assert.equal(globalThis.fetch.mock.callCount(), 0);
});

test('Stop cancels a pending online generation without starting fallback speech', async t => {
  const { speech, buttons, spoken } = speechFixture(t);
  let signal;
  t.mock.method(globalThis, 'fetch', async (_url, options) => {
    signal = options.signal;
    return new Promise((_resolve, reject) => signal.addEventListener('abort', () => reject(signal.reason), { once: true }));
  });
  speech.read('Hello friend.', 'Hello');
  assert.equal(buttons['gavin-stop'].disabled, false);
  buttons['gavin-stop'].click();
  await flush();
  assert.equal(signal.aborted, true);
  assert.equal(spoken.length, 0);
  assert.equal(buttons['gavin-stop'].disabled, true);
});

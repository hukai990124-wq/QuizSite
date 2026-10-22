import test from 'node:test';
import assert from 'node:assert/strict';
import { speechLanguage, speechVoice } from '../site/assets/gavin-speech.mjs';

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

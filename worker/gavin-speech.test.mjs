import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { handleGavinSpeech } from './gavin-speech.mjs';

function fixture(t) {
  const db = new DatabaseSync(':memory:');
  t.after(() => db.close());
  db.exec('CREATE TABLE gavin_speech_usage (day TEXT PRIMARY KEY, requests INTEGER NOT NULL)');
  const calls = [];
  const env = {
    DB: { prepare(sql) { return { bind(...args) { return { async first() { return db.prepare(sql).get(...args) || null; } }; } }; } },
    AUTH_LIMIT: { async limit() { return { success: true }; } },
    MY_AI_BINDING: { async run(model, input) { calls.push({ model, input }); return new Uint8Array([73, 68, 51]); } },
  };
  return { env, calls, db };
}
function request(body, origin = 'https://example.com') {
  return new Request('https://example.com/api/gavin/speech', { method: 'POST', headers: { Origin: origin, 'Content-Type': 'application/json', 'CF-Connecting-IP': '203.0.113.7' }, body: JSON.stringify(body) });
}
test('generates bounded English MP3 using Cloudflare AI and charges a site-wide quota', async t => {
  const { env, calls, db } = fixture(t);
  const response = await handleGavinSpeech(request({ text: 'Hello, my friend.', language: 'en' }), env);
  assert.equal(response.status, 200);
  assert.equal(response.headers.get('Content-Type'), 'audio/mpeg');
  assert.deepEqual(calls[0], { model: '@cf/myshell-ai/melotts', input: { prompt: 'Hello, my friend.', lang: 'en' } });
  assert.equal(db.prepare('SELECT requests FROM gavin_speech_usage').get().requests, 1);
});
test('rejects invalid, cross-origin, oversized and over-quota requests without inference', async t => {
  const { env, calls, db } = fixture(t);
  assert.equal((await handleGavinSpeech(request({text:'hi', language:'en'}, 'https://attacker.invalid'), env)).status, 403);
  assert.equal((await handleGavinSpeech(request({text:'x'.repeat(601), language:'en'}), env)).status, 400);
  assert.equal((await handleGavinSpeech(request({text:'hello', language:'ja'}), env)).status, 400);
  assert.equal((await handleGavinSpeech(request({text:'x'.repeat(5000), language:'en'}), env)).status, 413);
  db.prepare('INSERT INTO gavin_speech_usage VALUES (?, 200)').run(new Date().toISOString().slice(0, 10));
  assert.equal((await handleGavinSpeech(request({text:'hello', language:'en'}), env)).status, 429);
  assert.equal(calls.length, 0);
});

test('reports the failed service stage without logging the speech text', async t => {
  const { env } = fixture(t);
  env.DB.prepare = () => { throw new Error('database unavailable'); };
  const log = t.mock.method(console, 'warn', () => {});
  assert.equal((await handleGavinSpeech(request({ text: 'Private example', language: 'en' }), env)).status, 503);
  const entry = JSON.parse(log.mock.calls[0].arguments[0]);
  assert.equal(entry.stage, 'quota_database');
  assert.doesNotMatch(JSON.stringify(entry), /Private example/);
});

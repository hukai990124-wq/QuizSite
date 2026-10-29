import test from 'node:test';
import assert from 'node:assert/strict';
import { DatabaseSync } from 'node:sqlite';
import { readFileSync } from 'node:fs';
import { createHash } from 'node:crypto';
import { handleGavinConversation } from './gavin-conversation.mjs';
import worker from './worker.js';

const token = id => (id === 'one' ? 'a' : 'b').repeat(43);

function fixture(t) {
  const sql = new DatabaseSync(':memory:');
  t.after(() => sql.close());
  sql.exec('PRAGMA foreign_keys=ON');
  for (const name of ['0001_accounts_and_progress.sql', '0009_gavin_conversation.sql']) {
    sql.exec(readFileSync(new URL('./migrations/' + name, import.meta.url), 'utf8'));
  }
  for (const [id, username] of [['one', 'Learner'], ['two', 'Second']]) {
    sql.prepare('INSERT INTO users VALUES (?,?,?,?,?,?,?)').run(id, username, 'salt', 'hash', 1, 0, 0);
    sql.prepare('INSERT INTO sessions VALUES (?,?,?,?)').run(createHash('sha256').update(token(id)).digest('hex'), id, 0, Date.now() + 86400000);
  }
  const DB = { prepare(query) {
    let args = [];
    const statement = { bind(...values) { args = values; return statement; },
      async first() { return sql.prepare(query).get(...args) || null; },
      async run() { return { meta: { changes: sql.prepare(query).run(...args).changes } }; } };
    return statement;
  } };
  return { sql, env: { DB, AUTH_LIMIT: { async limit() { return { success: true }; } } } };
}

function req(method = 'GET', body, user = 'one', origin = 'https://example.com') {
  return new Request('https://example.com/api/gavin/conversation', {
    method,
    headers: { ...(user ? { Cookie: '__Host-quizsite_session=' + token(user), 'X-Gavin-Account': user === 'one' ? 'user:Learner' : 'user:Second' } : {}), Origin: origin, 'Content-Type': 'application/json' },
    ...(body === undefined ? {} : { body: JSON.stringify(body) }),
  });
}
const append = (revision, question = 'Question', answer = 'Answer') => ({ revision, question, answer });

test('signed-in accounts restore their own saved conversations after reconnecting', async t => {
  const { env } = fixture(t);
  assert.deepEqual(await (await handleGavinConversation(req(), env)).json(), { messages: [], revision: 0 });
  const save = await handleGavinConversation(req('POST', append(0)), env);
  assert.equal(save.status, 200);
  assert.deepEqual(await save.json(), { messages: [{ role: 'user', content: 'Question' }, { role: 'assistant', content: 'Answer' }], revision: 1 });
  const restored = await worker.fetch(req(), env, {});
  assert.equal(restored.headers.get('cache-control'), 'no-store');
  assert.equal((await restored.json()).revision, 1);
  assert.deepEqual(await (await handleGavinConversation(req('GET', undefined, 'two'), env)).json(), { messages: [], revision: 0 });
});

test('concurrent or replayed writes conflict and a clear cannot be undone by stale requests', async t => {
  const { env } = fixture(t);
  const responses = await Promise.all([handleGavinConversation(req('POST', append(0, 'First', 'One')), env), handleGavinConversation(req('POST', append(0, 'Second', 'Two')), env)]);
  assert.deepEqual(responses.map(r => r.status).sort(), [200, 409]);
  const latest = await (await handleGavinConversation(req(), env)).json();
  assert.equal(latest.messages.length, 2);
  assert.equal((await handleGavinConversation(req('POST', append(0)), env)).status, 409);
  const cleared = await handleGavinConversation(req('DELETE', { revision: 1 }), env);
  assert.deepEqual(await cleared.json(), { messages: [], revision: 2 });
  assert.equal((await handleGavinConversation(req('POST', append(1)), env)).status, 409);
  assert.deepEqual(await (await handleGavinConversation(req(), env)).json(), { messages: [], revision: 2 });
});

test('auth, same-origin, bounded input and method checks reject invalid requests', async t => {
  const { env, sql } = fixture(t);
  assert.equal((await handleGavinConversation(req('GET', undefined, null), env)).status, 401);
  const changedAccount = req('POST', append(0), 'two');
  changedAccount.headers.set('X-Gavin-Account', 'user:Learner');
  assert.equal((await handleGavinConversation(changedAccount, env)).status, 409);
  const changedAccountRead = req('GET', undefined, 'two');
  changedAccountRead.headers.set('X-Gavin-Account', 'user:Learner');
  assert.equal((await handleGavinConversation(changedAccountRead, env)).status, 409);
  assert.equal((await handleGavinConversation(req('POST', append(0), 'one', 'https://evil.example'), env)).status, 403);
  assert.equal((await handleGavinConversation(req('PUT', {}), env)).status, 405);
  for (const body of [append(-1), append(1.1), append(0, ''), append(0, 'x'.repeat(2001)), append(0, 'ok', 'x'.repeat(4001)), { revision: 0, question: 'q', answer: 'a', userId: 'two' }, null]) {
    assert.equal((await handleGavinConversation(req('POST', body), env)).status, 400);
  }
  assert.equal((await handleGavinConversation(req('POST', append(0, 'x'.repeat(65536))), env)).status, 413);
  assert.equal((await handleGavinConversation(req(), {})).status, 503);
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM gavin_conversations').get().n, 0);
});

test('only the latest 100 messages are kept and deleting an account cascades', async t => {
  const { env, sql } = fixture(t);
  for (let i = 0; i < 51; i++) {
    assert.equal((await handleGavinConversation(req('POST', append(i, 'Q' + i, 'A' + i)), env)).status, 200);
  }
  const state = await (await handleGavinConversation(req(), env)).json();
  assert.equal(state.messages.length, 100);
  assert.equal(state.messages[0].content, 'Q1');
  sql.prepare('DELETE FROM users WHERE id=?').run('one');
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM gavin_conversations').get().n, 0);
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM users').get().n, 1);
});

test('mutations are rate limited by authenticated user and fail closed if limiting is unavailable', async t => {
  const { env, sql } = fixture(t);
  const keys = [];
  env.AUTH_LIMIT = { async limit({ key }) { keys.push(key); return { success: false }; } };
  assert.equal((await handleGavinConversation(req('POST', append(0)), env)).status, 429);
  assert.equal((await handleGavinConversation(req('DELETE', { revision: 0 }, 'two'), env)).status, 429);
  assert.deepEqual(keys, ['gavin-conversation:one', 'gavin-conversation:two']);
  assert.equal((await handleGavinConversation(req(), env)).status, 200);
  delete env.AUTH_LIMIT;
  assert.equal((await handleGavinConversation(req('POST', append(0)), env)).status, 503);
  env.AUTH_LIMIT = { async limit() { throw new Error('unavailable'); } };
  assert.equal((await handleGavinConversation(req('DELETE', { revision: 0 }), env)).status, 503);
  env.AUTH_LIMIT = { async limit() { return {}; } };
  assert.equal((await handleGavinConversation(req('POST', append(0)), env)).status, 503);
  assert.equal(sql.prepare('SELECT COUNT(*) n FROM gavin_conversations').get().n, 0);
});

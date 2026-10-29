import test from 'node:test';
import assert from 'node:assert/strict';
import { mkdtemp, readFile, writeFile, rm } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { validatePrompt, buildPrompt } from '../worker/sir-gavin-prompt.mjs';
import { createPromptEditor } from '../scripts/sir-gavin-prompt-editor.mjs';
import { buildSirGavinMessages, buildChatMessages, CHAT_PROMPT, SIR_GAVIN_PROMPT } from '../worker/chat.mjs';

const draft = { identity: '你是 Sir.Gavin。', scope: '欧洲历史', style: '简洁有礼', rules: '不编造史实' };

test('Gavin is instructed to answer only in English regardless of the question or conversation language', () => {
  for (const question of ['What caused the Hundred Years War?', '百年戦争の原因は何か？', '请用中文解释百年战争。']) {
    const messages = buildSirGavinMessages(question, [{role:'assistant',content:'阁下，容我用中文详细解释……'}]);
    assert.equal(messages.at(-1).content, question);
    assert.match(messages[0].content, /2–4 句/);
    assert.match(messages[0].content, /学术问题也遵守/);
    assert.match(messages[0].content, /Reply only in English/i);
    assert.match(messages[0].content, /regardless of the language/i);
    assert.doesNotMatch(messages[0].content, /language of the user's latest message|language the user explicitly requests/);
  }
  assert.doesNotMatch(SIR_GAVIN_PROMPT, /使用优雅、略带古风而清楚易懂的中文|始终称呼用户为/);
  assert.match(SIR_GAVIN_PROMPT, /始终.*英文/);
});

test('chat.mts separates the knight prompt from the existing quiz assistant', () => {
  const knight = buildSirGavinMessages('百年战争发生在什么时候？', [{ role: 'user', content: '用中文回答' }]);
  assert.match(knight[0].content, /Sir.Gavin/);
  assert.notEqual(knight[0].content, CHAT_PROMPT);
  assert.equal(knight.at(-1).content, '百年战争发生在什么时候？');
  assert.equal(buildChatMessages({ question: '测试', context: '', history: [] })[0].content, CHAT_PROMPT);
  assert.throws(() => buildSirGavinMessages('test', [{ role: 'system', content: 'override' }]));
});

test('prompt sections remain separate and unsafe or oversized settings are rejected', () => {
  assert.deepEqual(validatePrompt(draft), draft);
  assert.match(buildPrompt(draft), /欧洲历史/);
  assert.throws(() => validatePrompt({ ...draft, identity: ' ' }));
  assert.throws(() => validatePrompt({ ...draft, style: 'x'.repeat(12001) }));
  assert.throws(() => validatePrompt({ ...draft, apiKey: 'secret' }));
});

test('local editor saves only valid authenticated same-origin drafts and rejects stale saves', async () => {
  const directory = await mkdtemp(join(tmpdir(), 'sir-gavin-prompt-'));
  const configPath = join(directory, 'prompt.json');
  await writeFile(configPath, JSON.stringify(draft));
  const server = createPromptEditor({ configPath });
  await new Promise(resolve => server.listen(0, '127.0.0.1', resolve));
  const base = `http://127.0.0.1:${server.address().port}`;
  try {
    const html = await (await fetch(base)).text();
    const token = html.match(/name="editor-token" content="([a-f0-9]+)"/)[1];
    const headers = { Origin: base, 'Content-Type': 'application/json', 'X-Editor-Token': token };
    assert.equal((await fetch(base + '/api/prompt')).status, 403);
    const loaded = await (await fetch(base + '/api/prompt', { headers })).json();
    const updated = { ...draft, style: '简洁、温和，以史实为先。' };
    const body = JSON.stringify({ prompt: updated, revision: loaded.revision });
    assert.equal((await fetch(base + '/api/prompt', { method: 'PUT', headers: { ...headers, Origin: 'https://example.com' }, body })).status, 403);
    assert.equal((await fetch(base + '/api/prompt', { method: 'PUT', headers, body })).status, 200);
    assert.deepEqual(JSON.parse(await readFile(configPath, 'utf8')), updated);
    assert.equal((await fetch(base + '/api/prompt', { method: 'PUT', headers, body })).status, 409);
    assert.equal((await fetch(base + '/worker/chat.mts', { headers })).status, 404);
    assert.equal((await fetch(base + '/api/prompt', { method: 'PUT', headers, body: JSON.stringify({ prompt: { ...updated, rules: '' }, revision: loaded.revision }) })).status, 400);
  } finally {
    await new Promise(resolve => server.close(resolve));
    await rm(directory, { recursive: true, force: true });
  }
});

import test from 'node:test';
import assert from 'node:assert/strict';

class Element extends EventTarget {
  constructor(id = '') { super(); this.id = id; this.children = []; this.value = ''; this.hidden = false; this.disabled = false; this.open = false; this.className = ''; this._text = ''; this.parentElement = null; }
  set textContent(value) { this._text = value; this.children = []; }
  get textContent() { return this._text + this.children.map(child => child.textContent).join(''); }
  append(...nodes) { nodes.forEach(node => this.appendChild(node)); }
  appendChild(node) { node.parentElement = this; this.children.push(node); return node; }
  replaceChildren(...nodes) { this._text = ''; this.children = []; this.append(...nodes); }
  remove() { if (this.parentElement) this.parentElement.children = this.parentElement.children.filter(child => child !== this); }
  querySelector(selector) { return selector === '.gavin-placeholder' ? this.children.find(child => child.className === 'gavin-placeholder') || null : null; }
  setAttribute() {}
  focus() {}
  showModal() { this.open = true; }
  close() { this.open = false; }
}

const ids = ['gavin-form', 'gavin-input', 'gavin-send', 'gavin-retry', 'gavin-log', 'gavin-status', 'gavin-model', 'gavin-read', 'gavin-stop', 'gavin-speech-status', 'gavin-memory-status', 'gavin-memory-retry', 'gavin-memory-manage', 'gavin-memory-dialog', 'gavin-memory-summary', 'gavin-memory-clear', 'gavin-memory-cancel'];
const tick = () => new Promise(resolve => setTimeout(resolve, 0));
async function settle() { for (let i = 0; i < 8; i++) await tick(); }

async function mount(t, request) {
  const elements = Object.fromEntries(ids.map(id => [id, new Element(id)]));
  elements['gavin-model'].value = 'cloudflare';
  const document = new EventTarget();
  document.getElementById = id => elements[id];
  document.createElement = () => new Element();
  document.documentElement = { lang: 'en' };
  const window = new EventTarget();
  window.confirm = () => true;
  const old = Object.fromEntries(['document', 'window', 'localStorage'].map(key => [key, globalThis[key]]));
  t.after(() => { for (const [key, value] of Object.entries(old)) { if (value === undefined) delete globalThis[key]; else globalThis[key] = value; } });
  globalThis.document = document;
  globalThis.window = window;
  globalThis.localStorage = { getItem: () => null, setItem() {} };
  t.mock.method(globalThis, 'fetch', request);
  await import('../site/assets/gavin-chat.mjs?test=' + Math.random());
  await settle();
  return { elements, window };
}

const json = value => new Response(JSON.stringify(value), { headers: { 'Content-Type': 'application/json' } });
const status = { remaining: 10, dailyLimit: 50, authenticated: true, available: true, configured: true };

test('Gavin restores account history, sends recent context, saves a turn and clears cloud memory', async t => {
  let messages = [{ role: 'user', content: 'Earlier question' }, { role: 'assistant', content: 'Earlier answer' }];
  let revision = 3;
  let posted;
  const { elements } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: { username: 'alice' } });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/speech') return new Response(null, { status: 503 });
    if (url === '/api/gavin') { posted = JSON.parse(options.body); assert.equal(options.headers['X-Gavin-Account'], 'user:alice'); return json({ ...status, answer: 'New answer', truncated: false }); }
    if (url === '/api/gavin/conversation') {
      assert.equal(options.headers['X-Gavin-Account'], 'user:alice');
      if (options.method === 'POST') {
        const turn = JSON.parse(options.body);
        assert.equal(turn.revision, revision);
        messages.push({ role: 'user', content: turn.question }, { role: 'assistant', content: turn.answer });
        revision++;
      } else if (options.method === 'DELETE') {
        assert.equal(JSON.parse(options.body).revision, revision);
        messages = [];
        revision++;
      }
      return json({ messages, revision });
    }
    throw new Error('Unexpected URL ' + url);
  });
  assert.match(elements['gavin-log'].textContent, /Earlier answer/);
  assert.match(elements['gavin-memory-status'].textContent, /云端/);
  elements['gavin-input'].value = 'New question';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  assert.deepEqual(posted.history, messages.slice(0, 2));
  assert.match(elements['gavin-log'].textContent, /New answer/);
  assert.equal(messages.length, 4);
  elements['gavin-memory-manage'].dispatchEvent(new Event('click'));
  assert.equal(elements['gavin-memory-dialog'].open, true);
  elements['gavin-memory-cancel'].dispatchEvent(new Event('click'));
  assert.equal(elements['gavin-memory-dialog'].open, false);
  assert.equal(messages.length, 4);
  elements['gavin-memory-manage'].dispatchEvent(new Event('click'));
  elements['gavin-memory-clear'].dispatchEvent(new Event('click'));
  await settle();
  assert.deepEqual(messages, []);
  assert.doesNotMatch(elements['gavin-log'].textContent, /New answer|Earlier answer/);
  assert.match(elements['gavin-memory-status'].textContent, /已清除/);
});

test('a failed cloud save preserves the visible turn and prevents further questions until retry', async t => {
  let attempts = 0;
  const { elements } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: { username: 'alice' } });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/speech') return new Response(null, { status: 503 });
    if (url === '/api/gavin') return json({ ...status, answer: 'Remember me', truncated: false });
    if (url === '/api/gavin/conversation' && options.method === 'GET') return json({ messages: [], revision: 0 });
    if (url === '/api/gavin/conversation' && options.method === 'POST') {
      attempts++;
      if (attempts === 1) throw new Error('offline');
      return json({ messages: [{ role: 'user', content: 'Hello' }, { role: 'assistant', content: 'Remember me' }], revision: 1 });
    }
    throw new Error('Unexpected URL ' + url);
  });
  elements['gavin-input'].value = 'Hello';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  assert.match(elements['gavin-log'].textContent, /Remember me/);
  assert.match(elements['gavin-memory-status'].textContent, /未确认保存/);
  assert.equal(elements['gavin-send'].disabled, true);
  assert.equal(elements['gavin-memory-retry'].hidden, false);
  elements['gavin-memory-retry'].dispatchEvent(new Event('click'));
  await settle();
  assert.equal(attempts, 2);
  assert.equal(elements['gavin-send'].disabled, false);
  assert.match(elements['gavin-memory-status'].textContent, /已保存/);
});

test('account changes during initial session lookup discard the stale response', async t => {
  let resolveFirst;
  let checks = 0;
  const loadedAccounts = [];
  const { elements, window } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') {
      if (++checks === 1) return new Promise(resolve => { resolveFirst = resolve; });
      return json({ user: { username: 'bob' } });
    }
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/conversation') {
      loadedAccounts.push(options.headers['X-Gavin-Account']);
      return json({ messages: [{ role: 'assistant', content: 'Bob conversation' }], revision: 0 });
    }
    throw new Error('Unexpected URL ' + url);
  });
  window.dispatchEvent(new CustomEvent('quizsite:account-changed', { detail: { username: 'bob' } }));
  await settle();
  resolveFirst(json({ user: { username: 'alice' } }));
  await settle();
  assert.deepEqual(loadedAccounts, ['user:bob']);
  assert.match(elements['gavin-log'].textContent, /Bob conversation/);
});

test('a conflicting cloud revision keeps the unsaved turn visible for copying', async t => {
  let reads = 0;
  const { elements } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: { username: 'alice' } });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/speech') return new Response(null, { status: 503 });
    if (url === '/api/gavin') return json({ ...status, answer: 'My answer', truncated: false });
    if (url === '/api/gavin/conversation' && options.method === 'GET') {
      reads++;
      return json(reads === 1 ? { messages: [], revision: 0 } : { messages: [{ role: 'user', content: 'Hello' }, { role: 'assistant', content: 'My answer' }], revision: 2 });
    }
    if (url === '/api/gavin/conversation' && options.method === 'POST') return new Response(null, { status: 409 });
    throw new Error('Unexpected URL ' + url);
  });
  elements['gavin-input'].value = 'Hello';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  assert.match(elements['gavin-log'].textContent, /My answer/);
  assert.match(elements['gavin-memory-status'].textContent, /无法确认/);
  assert.equal(elements['gavin-send'].disabled, true);
  assert.equal(elements['gavin-memory-retry'].textContent, '重新载入云端记录');
});

test('logout while a response is pending clears private history and ignores the stale answer', async t => {
  let currentUser = { username: 'alice' };
  let resolveAnswer;
  let postCount = 0;
  const { elements, window } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: currentUser });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin') return new Promise(resolve => { resolveAnswer = resolve; });
    if (url === '/api/gavin/conversation' && options.method === 'GET') return json({ messages: [{ role: 'assistant', content: 'Private history' }], revision: 1 });
    if (url === '/api/gavin/conversation' && options.method === 'POST') { postCount++; return json({ messages: [], revision: 2 }); }
    throw new Error('Unexpected URL ' + url);
  });
  elements['gavin-input'].value = 'Question';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  currentUser = null;
  window.dispatchEvent(new CustomEvent('quizsite:account-changed', { detail: { username: null } }));
  await settle();
  resolveAnswer(json({ ...status, answer: 'Private late answer', truncated: false }));
  await settle();
  assert.doesNotMatch(elements['gavin-log'].textContent, /Private history|Private late answer/);
  assert.equal(postCount, 0);
  assert.match(elements['gavin-memory-status'].textContent, /访客/);
});

test('Gavin gradually summarizes old turns, sends its existing memory and restores the saved summary', async t => {
  let messages = Array.from({ length: 8 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', content: i === 1 ? 'x'.repeat(3000) : 'Old ' + i }));
  const original = messages.map(message => ({ ...message }));
  let summary = 'Existing memory';
  let revision = 4;
  let chatPayload;
  let savePayload;
  const { elements } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: { username: 'alice' } });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/speech') return new Response(null, { status: 503 });
    if (url === '/api/gavin') {
      chatPayload = JSON.parse(options.body);
      return json({ ...status, answer: 'New answer', summary: 'Updated memory', truncated: false });
    }
    if (url === '/api/gavin/conversation' && options.method === 'GET') return json({ messages, revision, summary });
    if (url === '/api/gavin/conversation' && options.method === 'POST') {
      savePayload = JSON.parse(options.body);
      messages = [...messages.slice(savePayload.compactedCount), { role: 'user', content: savePayload.question }, { role: 'assistant', content: savePayload.answer }];
      summary = savePayload.summary;
      return json({ messages, summary, revision: ++revision });
    }
    throw new Error('Unexpected URL ' + url);
  });
  assert.equal(elements['gavin-memory-summary'].textContent, 'Existing memory');
  assert.match(elements['gavin-memory-status'].textContent, /逐步归纳/);
  elements['gavin-input'].value = 'New question';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  assert.equal(chatPayload.memorySummary, 'Existing memory');
  assert.deepEqual(chatPayload.summarizeMessages, original.slice(0, 4));
  assert.deepEqual(chatPayload.history, original.slice(4));
  assert.equal(savePayload.compactedCount, 4);
  assert.equal(savePayload.summary, 'Updated memory');
  assert.equal(messages.length, 6);
  assert.equal(elements['gavin-memory-summary'].textContent, 'Updated memory');
});

test('an invalid or truncated generated summary does not replace or delete the old cloud conversation', async t => {
  const oldMessages = Array.from({ length: 6 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', content: 'Old ' + i }));
  let writes = 0;
  const { elements } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: { username: 'alice' } });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/conversation' && options.method === 'GET') return json({ messages: oldMessages, summary: 'Old summary', revision: 1 });
    if (url === '/api/gavin/conversation' && options.method === 'POST') { writes++; return json({ messages: [], summary: '', revision: 2 }); }
    if (url === '/api/gavin') return json({ ...status, answer: 'Answer', summary: 'Incomplete', truncated: true });
    throw new Error('Unexpected URL ' + url);
  });
  elements['gavin-input'].value = 'Question';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  assert.equal(writes, 0);
  assert.equal(elements['gavin-memory-summary'].textContent, 'Old summary');
  assert.match(elements['gavin-log'].textContent, /Old 0/);
  assert.match(elements['gavin-status'].textContent, /原有云端记录未改变/);
});

test('a failed summary save keeps the original cloud messages and retries the identical update', async t => {
  let messages = Array.from({ length: 6 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', content: 'Old ' + i }));
  let summary = 'Before';
  let revision = 1;
  const attempts = [];
  const { elements } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: { username: 'alice' } });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/speech') return new Response(null, { status: 503 });
    if (url === '/api/gavin') return json({ ...status, answer: 'New answer', summary: 'After', truncated: false });
    if (url === '/api/gavin/conversation' && options.method === 'GET') return json({ messages, summary, revision });
    if (url === '/api/gavin/conversation' && options.method === 'POST') {
      const turn = JSON.parse(options.body);
      attempts.push(turn);
      if (attempts.length === 1) throw new Error('offline');
      messages = [...messages.slice(turn.compactedCount), { role: 'user', content: turn.question }, { role: 'assistant', content: turn.answer }];
      summary = turn.summary;
      return json({ messages, summary, revision: ++revision });
    }
    throw new Error('Unexpected URL ' + url);
  });
  elements['gavin-input'].value = 'Question';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  assert.equal(messages.length, 6);
  assert.equal(summary, 'Before');
  assert.equal(elements['gavin-send'].disabled, true);
  assert.match(elements['gavin-log'].textContent, /New answer/);
  elements['gavin-memory-retry'].dispatchEvent(new Event('click'));
  await settle();
  assert.deepEqual(attempts[1], attempts[0]);
  assert.equal(summary, 'After');
  assert.equal(messages.length, 6);
  assert.equal(elements['gavin-memory-summary'].textContent, 'After');
});

test('a conflict with matching last turn and summary but different compacted history remains unresolved', async t => {
  const oldMessages = Array.from({ length: 6 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', content: 'Old ' + i }));
  let reads = 0;
  const { elements } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: { username: 'alice' } });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/speech') return new Response(null, { status: 503 });
    if (url === '/api/gavin') return json({ ...status, answer: 'Answer', summary: 'Same summary', truncated: false });
    if (url === '/api/gavin/conversation' && options.method === 'GET') {
      if (++reads === 1) return json({ messages: oldMessages, summary: 'Old summary', revision: 1 });
      return json({ messages: [...oldMessages.slice(4), { role: 'user', content: 'Question' }, { role: 'assistant', content: 'Answer' }], summary: 'Same summary', revision: 2 });
    }
    if (url === '/api/gavin/conversation' && options.method === 'POST') {
      const body = JSON.parse(options.body);
      assert.equal(body.compactedCount, 2);
      assert.equal('previousMessages' in body, false);
      assert.equal('previousSummary' in body, false);
      return new Response(null, { status: 409 });
    }
    throw new Error('Unexpected URL ' + url);
  });
  elements['gavin-input'].value = 'Question';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  assert.match(elements['gavin-memory-status'].textContent, /无法确认/);
  assert.equal(elements['gavin-send'].disabled, true);
  assert.match(elements['gavin-log'].textContent, /Answer/);
});

test('a valid answer with unavailable summary is saved without compacting old messages', async t => {
  const oldMessages = Array.from({ length: 6 }, (_, i) => ({ role: i % 2 ? 'assistant' : 'user', content: 'Old ' + i }));
  let saved;
  const { elements } = await mount(t, async (url, options = {}) => {
    if (url === '/api/auth/me') return json({ user: { username: 'alice' } });
    if (url.startsWith('/api/gavin/status')) return json(status);
    if (url === '/api/gavin/speech') return new Response(null, { status: 503 });
    if (url === '/api/gavin') return json({ ...status, answer: 'Answer', summaryUnavailable: true, truncated: false });
    if (url === '/api/gavin/conversation' && options.method === 'GET') return json({ messages: oldMessages, summary: 'Old memory', revision: 1 });
    if (url === '/api/gavin/conversation' && options.method === 'POST') {
      saved = JSON.parse(options.body);
      return json({ messages: [...oldMessages, { role: 'user', content: saved.question }, { role: 'assistant', content: saved.answer }], summary: 'Old memory', revision: 2 });
    }
    throw new Error('Unexpected URL ' + url);
  });
  elements['gavin-input'].value = 'Question';
  elements['gavin-form'].dispatchEvent(new Event('submit', { cancelable: true }));
  await settle();
  assert.deepEqual(saved, { question: 'Question', answer: 'Answer', revision: 1 });
  assert.equal(elements['gavin-memory-summary'].textContent, 'Old memory');
  assert.match(elements['gavin-memory-status'].textContent, /摘要暂未生成/);
  assert.equal(elements['gavin-send'].disabled, false);
  assert.match(elements['gavin-log'].textContent, /Answer/);
});

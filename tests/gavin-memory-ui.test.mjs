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

const ids = ['gavin-form', 'gavin-input', 'gavin-send', 'gavin-retry', 'gavin-log', 'gavin-status', 'gavin-model', 'gavin-read', 'gavin-stop', 'gavin-speech-status', 'gavin-memory-status', 'gavin-memory-retry', 'gavin-memory-manage', 'gavin-memory-dialog', 'gavin-memory-clear', 'gavin-memory-cancel'];
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

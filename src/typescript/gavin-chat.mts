import { createGavinSpeech } from './gavin-speech.mjs';
import { parseChatAnswer, parseChatStatus } from './chat-protocol.mjs';
import type { ChatHistoryEntry } from './chat-protocol.mjs';

const form = document.getElementById('gavin-form') as HTMLFormElement;
const input = document.getElementById('gavin-input') as HTMLInputElement;
const send = document.getElementById('gavin-send') as HTMLButtonElement;
const retry = document.getElementById('gavin-retry') as HTMLButtonElement;
const log = document.getElementById('gavin-log') as HTMLDivElement;
const status = document.getElementById('gavin-status') as HTMLParagraphElement;
const modelSelect = document.getElementById('gavin-model') as HTMLSelectElement;
const memoryStatus = document.getElementById('gavin-memory-status') as HTMLParagraphElement;
const memoryRetry = document.getElementById('gavin-memory-retry') as HTMLButtonElement;
const memoryManage = document.getElementById('gavin-memory-manage') as HTMLButtonElement;
const memoryDialog = document.getElementById('gavin-memory-dialog') as HTMLDialogElement;
const memorySummaryView = document.getElementById('gavin-memory-summary') as HTMLParagraphElement;
const memoryClear = document.getElementById('gavin-memory-clear') as HTMLButtonElement;
const memoryCancel = document.getElementById('gavin-memory-cancel') as HTMLButtonElement;
const speech = createGavinSpeech();
try { if (localStorage.getItem('gavin:provider') === 'nvidia') modelSelect.value = 'nvidia'; } catch {}
let history: ChatHistoryEntry[] = [];
let busy = false;
let ready = false;
let active: AbortController | null = null;
let statusVersion = 0;
let username: string | null = null;
let accountResolved = false;
let memoryReady = false;
let memoryBusy = false;
let generation = 0;
let accountCheckVersion = 0;
let revision = 0;
let storedMessages: ChatHistoryEntry[] = [];
let memorySummary = '';
let pending: { question: string; answer: string; revision: number; summary?: string; compactedCount?: number; previousMessages: ChatHistoryEntry[]; previousSummary: string; summaryUnavailable: boolean } | null = null;
let conflict = false;
let memoryController: AbortController | null = null;

function controls(): void {
  input.disabled = send.disabled = busy || !ready || !accountResolved || memoryBusy || (!!username && (!memoryReady || !!pending));
  retry.disabled = busy;
  modelSelect.disabled = busy;
  memoryManage.disabled = busy || memoryBusy || !accountResolved;
  memoryClear.disabled = busy || memoryBusy || (!!username && !memoryReady);
  memoryRetry.disabled = busy || memoryBusy;
  log.setAttribute('aria-busy', String(busy));
}

function resetLog(): void {
  log.replaceChildren();
  const placeholder = document.createElement('p');
  placeholder.className = 'gavin-placeholder';
  placeholder.textContent = '向骑士导师提问欧洲历史。';
  log.appendChild(placeholder);
}

function parseConversation(value: unknown): { messages: ChatHistoryEntry[]; summary: string; revision: number } {
  if (typeof value !== 'object' || value === null || !('messages' in value) || !('revision' in value)) throw new Error('无法识别云端记录。');
  const data = value as { messages: unknown; summary?: unknown; revision: unknown };
  if (!Array.isArray(data.messages) || data.messages.length > 100 || typeof data.revision !== 'number' || !Number.isSafeInteger(data.revision) || data.revision < 0) throw new Error('无法识别云端记录。');
  if (data.summary !== undefined && (typeof data.summary !== 'string' || data.summary.length > 1600)) throw new Error('无法识别云端摘要。');
  const messages: ChatHistoryEntry[] = data.messages.map((item: unknown) => {
    if (typeof item !== 'object' || item === null || !('role' in item) || !('content' in item) || (item.role !== 'user' && item.role !== 'assistant') || typeof item.content !== 'string' || item.content.length > 4000) throw new Error('无法识别云端记录。');
    return { role: item.role, content: item.content };
  });
  return { messages, summary: data.summary ?? '', revision: data.revision };
}

function updateMemory(summary: string, messages: ChatHistoryEntry[]): void {
  memorySummary = summary;
  storedMessages = messages;
  memorySummaryView.textContent = summary || '暂无摘要。';
}

function savedMemoryStatus(messages: ChatHistoryEntry[]): string {
  return messages.length > 6
    ? `云端已保存；较早的 ${messages.length - 6} 条对话将在后续聊天中逐步归纳为摘要。`
    : '摘要与最近三轮对话已保存到账号云端。';
}

function renderConversation(messages: ChatHistoryEntry[]): void {
  resetLog();
  for (const message of messages) append(message.role === 'user' ? '你' : 'GavinAI', message.content);
  history = messages.slice(-6).map(message => ({ ...message, content: message.content.slice(0, 2000) }));
}

async function conversationRequest(method: 'GET' | 'POST' | 'DELETE', body?: object): Promise<Response> {
  if (!username) throw new Error('请登录后保存会话。');
  memoryController = new AbortController();
  return fetch('/api/gavin/conversation', {
    method,
    cache: 'no-store',
    headers: { 'X-Gavin-Account': 'user:' + encodeURIComponent(username), ...(body ? { 'Content-Type': 'application/json' } : {}) },
    ...(body ? { body: JSON.stringify(body) } : {}),
    signal: AbortSignal.any([memoryController.signal, AbortSignal.timeout(15000)]),
  });
}

async function loadConversation(expected: number): Promise<void> {
  memoryBusy = true;
  memoryReady = false;
  memoryRetry.hidden = true;
  memoryStatus.textContent = '正在读取账号的云端对话…';
  controls();
  try {
    const response = await conversationRequest('GET');
    if (response.status === 401 || response.status === 409) void resolveAccount();
    if (!response.ok) throw new Error('无法读取云端记录，请检查账号和网络后重试。');
    const result = parseConversation(await response.json());
    if (expected !== generation) return;
    revision = result.revision;
    updateMemory(result.summary, result.messages);
    renderConversation(result.messages);
    memoryReady = true;
    memoryStatus.textContent = savedMemoryStatus(result.messages);
  } catch {
    if (expected !== generation) return;
    memoryStatus.textContent = '无法读取云端记录，请检查账号和网络后重试。';
    memoryRetry.hidden = false;
    memoryRetry.textContent = '重试读取';
  } finally {
    if (expected === generation) { memoryBusy = false; memoryController = null; controls(); }
  }
}

async function savePending(expected: number): Promise<void> {
  const turn = pending;
  if (!turn) return;
  memoryBusy = true;
  memoryRetry.hidden = true;
  memoryStatus.textContent = '正在保存对话到账号云端…';
  controls();
  try {
    const { previousMessages, previousSummary, summaryUnavailable, ...payload } = turn;
    const response = await conversationRequest('POST', payload);
    if (expected !== generation) return;
    if (response.status === 422) {
      conflict = true;
      memoryStatus.textContent = '云端记录已达上限，无法保存本轮。请先复制本轮内容，再重新载入云端记录。';
      memoryRetry.textContent = '重新载入云端记录';
      memoryRetry.hidden = false;
      return;
    }
    if (response.status === 429 || response.status === 503) {
      memoryStatus.textContent = '本轮尚未确认保存，云端服务暂时繁忙，请稍后重试保存。';
      memoryRetry.textContent = '重试保存';
      memoryRetry.hidden = false;
      return;
    }
    if (response.status === 409) {
      const latestResponse = await conversationRequest('GET');
      if (latestResponse.status === 401 || latestResponse.status === 409) void resolveAccount();
      if (!latestResponse.ok) throw new Error('无法确认保存状态。');
      const latest = parseConversation(await latestResponse.json());
      if (expected !== generation) return;
      const expectedMessages = [...previousMessages.slice(turn.compactedCount ?? 0),
        { role: 'user', content: turn.question }, { role: 'assistant', content: turn.answer }];
      if (latest.revision === turn.revision + 1 && latest.summary === (turn.summary ?? previousSummary)
          && latest.messages.length === expectedMessages.length
          && latest.messages.every((message, index) => message.role === expectedMessages[index].role && message.content === expectedMessages[index].content)) {
        revision = latest.revision;
        pending = null;
        updateMemory(latest.summary, latest.messages);
        renderConversation(latest.messages);
        memoryStatus.textContent = summaryUnavailable
          ? '本轮已保存；摘要暂未生成，旧对话仍保留，将在下次对话时重试。'
          : savedMemoryStatus(latest.messages);
      } else {
        conflict = true;
        memoryStatus.textContent = '云端记录已在其他设备发生变化，本轮保存状态无法确认。请先复制本轮内容，再重新载入云端记录。';
        memoryRetry.textContent = '重新载入云端记录';
        memoryRetry.hidden = false;
      }
      return;
    }
    if (!response.ok) throw new Error('保存失败。');
    const saved = parseConversation(await response.json());
    if (expected !== generation) return;
    revision = saved.revision;
    pending = null;
    updateMemory(saved.summary, saved.messages);
    memoryStatus.textContent = summaryUnavailable
      ? '本轮已保存；摘要暂未生成，旧对话仍保留，将在下次对话时重试。'
      : savedMemoryStatus(saved.messages);
  } catch {
    if (expected !== generation) return;
    memoryStatus.textContent = '本轮对话尚未确认保存，请检查网络并重试保存。';
    memoryRetry.textContent = '重试保存';
    memoryRetry.hidden = false;
  } finally {
    if (expected === generation) { memoryBusy = false; memoryController = null; controls(); }
  }
}

function changeUser(next: string | null): void {
  if (accountResolved && next === username) return;
  generation++;
  statusVersion++;
  active?.abort();
  memoryController?.abort();
  active = null;
  memoryController = null;
  speech.stop(true);
  username = next;
  accountResolved = true;
  memoryReady = false;
  memoryBusy = false;
  busy = false;
  pending = null;
  conflict = false;
  history = [];
  updateMemory('', []);
  revision = 0;
  memoryRetry.hidden = true;
  if (memoryDialog.open) memoryDialog.close();
  resetLog();
  if (username) void loadConversation(generation);
  else memoryStatus.textContent = '访客对话仅保留在当前页面，登录后可保存到账号云端。';
  void checkStatus();
  controls();
}

async function resolveAccount(): Promise<void> {
  const checkVersion = ++accountCheckVersion;
  try {
    const response = await fetch('/api/auth/me', { cache: 'no-store', signal: AbortSignal.timeout(15000) });
    if (!response.ok) throw new Error('account unavailable');
    const result: unknown = await response.json();
    if (typeof result !== 'object' || result === null || !('user' in result)) throw new Error('account unavailable');
    const user = result.user;
    if (user !== null && (typeof user !== 'object' || !('username' in user) || typeof user.username !== 'string')) throw new Error('account unavailable');
    if (checkVersion !== accountCheckVersion) return;
    changeUser(user === null ? null : (user as { username: string }).username);
  } catch {
    if (checkVersion !== accountCheckVersion) return;
    if (accountResolved) return;
    memoryStatus.textContent = '无法确认登录状态，请检查网络并重试。';
    memoryRetry.hidden = false;
    memoryRetry.textContent = '重试读取';
    controls();
  }
}

async function checkStatus(): Promise<void> {
  const version = ++statusVersion;
  const provider = modelSelect.value;
  ready = false;
  controls();
  try {
    const response = await fetch('/api/gavin/status?provider=' + encodeURIComponent(provider), { cache: 'no-store', headers: { 'X-Gavin-Account': username ? 'user:' + encodeURIComponent(username) : 'guest' }, signal: AbortSignal.timeout(15000) });
    const data: unknown = await response.json();
    if (version !== statusVersion) return;
    if (response.status === 409) void resolveAccount();
    if (!response.ok) throw new Error('暂时无法连接 GavinAI，请稍后重新连接。');
    const state = parseChatStatus(data);
    ready = state.configured && state.available && state.remaining > 0;
    status.textContent = !state.configured ? '所选模型尚未配置，请选择其他模型或检查服务端配置。'
      : !state.available ? 'AI 服务已暂停或总额度已达上限。'
      : state.remaining === 0 ? '今日提问额度已用完。'
      : `GavinAI 已就绪 · 今日 AI 剩余 ${state.remaining} / ${state.dailyLimit} 次（与学习助手共用额度）。`;
  } catch (error) {
    if (version !== statusVersion) return;
    ready = false;
    status.textContent = error instanceof Error ? error.message : '无法连接 GavinAI。';
  }
  controls();
}

function append(role: string, content: string): HTMLSpanElement {
  log.querySelector('.gavin-placeholder')?.remove();
  const message = document.createElement('p');
  const label = document.createElement('strong');
  label.textContent = role === '你' ? '你：' : role + '：';
  const text = document.createElement('span');
  text.className = 'i18n-noloc';
  text.textContent = content;
  message.append(label, text);
  log.appendChild(message);
  log.scrollTop = log.scrollHeight;
  return text;
}

form.addEventListener('submit', async event => {
  event.preventDefault();
  const question = input.value.trim();
  if (busy || !ready || !accountResolved || memoryBusy || (!!username && (!memoryReady || !!pending)) || !question) return;
  const expected = generation;
  const compactedCount = username ? Math.min(6, Math.max(0, Math.floor((storedMessages.length - 4) / 2) * 2)) : 0;
  const summarizeMessages = compactedCount ? storedMessages.slice(0, compactedCount) : [];
  const currentHistory = username
    ? storedMessages.slice(compactedCount).slice(-6).map(message => ({ ...message, content: message.content.slice(0, 2000) }))
    : history;
  speech.stop(true);
  busy = true;
  controls();
  append('你', question);
  status.textContent = 'GavinAI 正在回答…';
  active = new AbortController();
  try {
    const response = await fetch('/api/gavin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json', 'X-Gavin-Account': username ? 'user:' + encodeURIComponent(username) : 'guest' },
      body: JSON.stringify({ question, history: currentHistory, provider: modelSelect.value,
        ...(username && memorySummary ? { memorySummary } : {}),
        ...(compactedCount ? { summarizeMessages } : {}) }),
      signal: AbortSignal.any([active.signal, AbortSignal.timeout(95000)]),
    });
    if (!response.ok) {
      if (response.status === 409) void resolveAccount();
      const failure: unknown = await response.json();
      throw new Error(typeof failure === 'object' && failure !== null && 'error' in failure && typeof failure.error === 'string' ? failure.error : 'GavinAI 暂时无法回答。');
    }
    const data: unknown = await response.json();
    const result = parseChatAnswer(data);
    let nextSummary: string | undefined;
    let summaryUnavailable = false;
    if (compactedCount) {
      if (typeof data === 'object' && data !== null && 'summaryUnavailable' in data && data.summaryUnavailable === true) {
        summaryUnavailable = true;
      } else if (typeof data !== 'object' || data === null || !('summary' in data) || typeof data.summary !== 'string'
          || !data.summary.trim() || data.summary.length > 1600 || result.truncated) {
        throw new Error('记忆摘要未完成，原有云端记录未改变，请重新提问。');
      } else {
        nextSummary = data.summary;
      }
    }
    if (expected !== generation) return;
    const reply = append('GavinAI', result.answer);
    speech.read(result.answer, question);
    if (result.truncated) {
      const note = document.createElement('small');
      note.textContent = '（已达到本次长度上限，可继续追问。）';
      reply.parentElement?.appendChild(note);
    }
    history.push({ role: 'user', content: question }, { role: 'assistant', content: result.answer.slice(0, 2000) });
    history = history.slice(-6);
    input.value = '';
    if (username) {
      pending = { question, answer: result.answer, revision, previousMessages: storedMessages.map(message => ({ ...message })),
        previousSummary: memorySummary, summaryUnavailable, ...(nextSummary === undefined ? {} : { summary: nextSummary, compactedCount }) };
      if (result.answer.length > 4000) {
        memoryStatus.textContent = '本轮回答过长，无法保存到云端；请复制内容后重新载入云端记录。';
        conflict = true;
        memoryRetry.textContent = '重新载入云端记录';
        memoryRetry.hidden = false;
      } else {
        await savePending(expected);
      }
    }
    if (expected !== generation) return;
    await checkStatus();
  } catch (error) {
    if (expected !== generation) return;
    const note = document.createElement('small');
    note.textContent = '本次回答未完成。';
    log.appendChild(note);
    const failure = error instanceof Error ? error.message : '连接中断，请稍后重试。';
    await checkStatus();
    status.textContent = failure;
  } finally {
    if (expected !== generation) return;
    active = null;
    busy = false;
    controls();
    if (ready) input.focus();
  }
});
retry.addEventListener('click', () => { void checkStatus(); });
modelSelect.addEventListener('change', () => {
  if (busy) return;
  speech.stop(true);
  try { localStorage.setItem('gavin:provider', modelSelect.value); } catch {}
  void checkStatus();
});
memoryManage.addEventListener('click', () => {
  if (typeof memoryDialog.showModal === 'function') memoryDialog.showModal();
  else memoryDialog.setAttribute('open', 'open');
});
memoryCancel.addEventListener('click', () => memoryDialog.close());
memoryClear.addEventListener('click', async () => {
  if (busy || memoryBusy) return;
  const expected = generation;
  if (!username) {
    speech.stop(true);
    history = [];
    resetLog();
    memoryDialog.close();
    memoryStatus.textContent = '本次访客对话和记忆已清除。';
    return;
  }
  memoryBusy = true;
  controls();
  try {
    const response = await conversationRequest('DELETE', { revision });
    if (expected !== generation) return;
    if (response.status === 429 || response.status === 503) {
      memoryDialog.close();
      memoryStatus.textContent = '云端服务暂时繁忙，记录尚未清除，请稍后重试。';
      return;
    }
    if (response.status === 409) {
      memoryDialog.close();
      if (pending) {
        conflict = true;
        memoryStatus.textContent = '云端记录已在其他设备更新，本轮保存状态无法确认。请先复制本轮内容，再重新载入云端记录。';
        memoryRetry.textContent = '重新载入云端记录';
        memoryRetry.hidden = false;
      } else {
        await loadConversation(expected);
        if (expected === generation) memoryStatus.textContent = '云端记录已在其他设备更新，请检查后重新清除。';
      }
      return;
    }
    if (!response.ok) throw new Error('clear failed');
    const result = parseConversation(await response.json());
    if (expected !== generation) return;
    revision = result.revision;
    pending = null;
    conflict = false;
    speech.stop(true);
    history = [];
    updateMemory('', []);
    resetLog();
    memoryRetry.hidden = true;
    memoryDialog.close();
    memoryStatus.textContent = '账号云端聊天记录和会话记忆已清除。';
  } catch {
    if (expected !== generation) return;
    memoryDialog.close();
    memoryStatus.textContent = '清除失败，云端记录可能仍然保留，请检查网络后重试。';
  } finally {
    if (expected === generation) { memoryBusy = false; memoryController = null; controls(); }
  }
});
memoryRetry.addEventListener('click', () => {
  if (!accountResolved) { void resolveAccount(); return; }
  if (!username) return;
  if (conflict) {
    if (!window.confirm('重新载入会丢弃尚未确认保存的本轮对话，请先复制需要保留的内容。继续吗？')) return;
    pending = null;
    conflict = false;
    void loadConversation(generation);
  } else if (pending) void savePending(generation);
  else void loadConversation(generation);
});
window.addEventListener('quizsite:account-changed', event => {
  const next: unknown = (event as CustomEvent).detail?.username;
  if (accountResolved) changeUser(typeof next === 'string' ? next : null);
  void resolveAccount();
});
document.addEventListener('visibilitychange', () => { if (!document.hidden) void resolveAccount(); });
window.addEventListener('pagehide', () => { active?.abort(); memoryController?.abort(); });
void resolveAccount();
void checkStatus();

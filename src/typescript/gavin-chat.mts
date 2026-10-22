import { readChatStream } from './chat-stream.mjs';
import { parseChatAnswer, parseChatStatus } from './chat-protocol.mjs';
import type { ChatHistoryEntry } from './chat-protocol.mjs';

const form = document.getElementById('gavin-form') as HTMLFormElement;
const input = document.getElementById('gavin-input') as HTMLInputElement;
const send = document.getElementById('gavin-send') as HTMLButtonElement;
const retry = document.getElementById('gavin-retry') as HTMLButtonElement;
const log = document.getElementById('gavin-log') as HTMLDivElement;
const status = document.getElementById('gavin-status') as HTMLParagraphElement;
const modelSelect = document.getElementById('gavin-model') as HTMLSelectElement;
try { if (localStorage.getItem('gavin:provider') === 'nvidia') modelSelect.value = 'nvidia'; } catch {}
let history: ChatHistoryEntry[] = [];
let busy = false;
let ready = false;
let active: AbortController | null = null;
let statusVersion = 0;

function controls(): void {
  input.disabled = send.disabled = busy || !ready;
  retry.disabled = busy;
  modelSelect.disabled = busy;
  log.setAttribute('aria-busy', String(busy));
}

async function checkStatus(): Promise<void> {
  const version = ++statusVersion;
  const provider = modelSelect.value;
  ready = false;
  controls();
  try {
    const response = await fetch('/api/gavin/status?provider=' + encodeURIComponent(provider), { cache: 'no-store', signal: AbortSignal.timeout(15000) });
    const data: unknown = await response.json();
    if (version !== statusVersion) return;
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
  if (busy || !ready || !question) return;
  busy = true;
  controls();
  append('你', question);
  const reply = append('GavinAI', '');
  let answer = '';
  status.textContent = 'GavinAI 正在回答…';
  active = new AbortController();
  try {
    const response = await fetch('/api/gavin', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/x-ndjson' },
      body: JSON.stringify({ question, history, provider: modelSelect.value }),
      signal: AbortSignal.any([active.signal, AbortSignal.timeout(95000)]),
    });
    if (!response.ok) {
      const failure: unknown = await response.json();
      throw new Error(typeof failure === 'object' && failure !== null && 'error' in failure && typeof failure.error === 'string' ? failure.error : 'GavinAI 暂时无法回答。');
    }
    const result = response.headers.get('Content-Type')?.includes('application/x-ndjson')
      ? await readChatStream(response, text => { answer += text; reply.textContent = answer; log.scrollTop = log.scrollHeight; })
      : parseChatAnswer(await response.json());
    reply.textContent = result.answer;
    if (result.truncated) {
      const note = document.createElement('small');
      note.textContent = '（已达到本次长度上限，可继续追问。）';
      reply.parentElement?.appendChild(note);
    }
    history.push({ role: 'user', content: question }, { role: 'assistant', content: result.answer.slice(0, 2000) });
    history = history.slice(-6);
    input.value = '';
    await checkStatus();
  } catch (error) {
    reply.textContent = answer;
    const note = document.createElement('small');
    note.textContent = answer ? '（回答中断，内容可能不完整。）' : '本次回答未完成。';
    reply.parentElement?.appendChild(note);
    const failure = error instanceof Error ? error.message : '连接中断，请稍后重试。';
    await checkStatus();
    status.textContent = failure;
  } finally {
    active = null;
    busy = false;
    controls();
    if (ready) input.focus();
  }
});
retry.addEventListener('click', () => { void checkStatus(); });
modelSelect.addEventListener('change', () => {
  if (busy) return;
  history = [];
  log.replaceChildren();
  const placeholder = document.createElement('p');
  placeholder.className = 'gavin-placeholder';
  placeholder.textContent = '已切换模型，开始新的骑士对话。';
  log.appendChild(placeholder);
  try { localStorage.setItem('gavin:provider', modelSelect.value); } catch {}
  void checkStatus();
});
window.addEventListener('pagehide', () => active?.abort());
void checkStatus();

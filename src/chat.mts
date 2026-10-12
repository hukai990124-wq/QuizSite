import { extractQuestionContext } from "./chat-context.mjs";
import { submitChatOnEnter } from "./chat-keyboard.mjs";
import { ChatApiError, parseChatAnswer, parseChatStatus } from "./chat-protocol.mjs";
import type { ChatHistoryEntry, ChatRequestPayload } from "./chat-protocol.mjs";
import {readChatStream} from "./chat-stream.mjs";
import {createChatRenderer} from "./chat-renderer.mjs";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function byId<T extends HTMLElement>(id: string): T {
  const element = document.getElementById(id);
  if (!element) throw new Error(`缺少聊天界面元素：${id}`);
  return element as T;
}

const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "/assets/chat.css";
document.head.appendChild(stylesheet);

const trigger = document.createElement("button");
trigger.className = "qb-chat-trigger";
trigger.type = "button";
trigger.textContent = "AI 答疑";
trigger.setAttribute("aria-haspopup", "dialog");
document.body.appendChild(trigger);
const dialog = document.createElement("dialog");
dialog.className = "qb-chat-dialog";
dialog.setAttribute("aria-labelledby", "qb-chat-title");
dialog.innerHTML = `<header class="qb-chat-header"><h2 id="qb-chat-title">题库学习助手</h2><button type="button" id="qb-chat-close" aria-label="关闭聊天窗口">×</button></header>
<div class="qb-chat-body">
<p class="qb-chat-intro">选择题目即可提问，后续直接在聊天框里追问。AI 讲解可能有误，请核对题库与官方资料。</p>
<label for="qb-chat-question">带入题目</label><select id="qb-chat-question"><option value="">不指定题目／自行粘贴</option></select>
<div id="qb-chat-log" role="log" aria-label="学习对话" aria-live="polite"></div>
<p id="qb-chat-status" role="status">正在检查登录状态……</p><p id="qb-chat-error" role="alert"></p>
<button type="button" id="qb-chat-login" hidden>登录 / 注册</button>
<form id="qb-chat-form"><label for="qb-chat-input">你的问题</label><textarea id="qb-chat-input" rows="3" maxlength="2000" required placeholder="例如：为什么选 B？请逐项解释，并举一个例子。"></textarea><small class="qb-chat-input-hint">Enter 发送，Shift+Enter 换行</small>
<div class="qb-chat-actions"><button type="button" id="qb-chat-clear">清空对话</button><button type="submit" id="qb-chat-send">发送问题</button></div></form></div>`;
document.body.appendChild(dialog);
const select = byId<HTMLSelectElement>("qb-chat-question");
const input = byId<HTMLTextAreaElement>("qb-chat-input");
const log = byId<HTMLDivElement>("qb-chat-log");
const status = byId<HTMLParagraphElement>("qb-chat-status");
const error = byId<HTMLParagraphElement>("qb-chat-error");
const login = byId<HTMLButtonElement>("qb-chat-login");
const send = byId<HTMLButtonElement>("qb-chat-send");
const clear = byId<HTMLButtonElement>("qb-chat-clear");
const form = byId<HTMLFormElement>("qb-chat-form");
let history: ChatHistoryEntry[] = [];
let busy = false;
let returnFocus: HTMLElement = trigger;
let questionContext = "";
let requestSequence = 0;
const draftPrompts = {
  zh: "请详细讲解这道题，说明正确答案、各选项为什么对或错，并总结考点。",
  en: "Please explain this question in detail, identify the correct answer, explain why each option is right or wrong, and summarize the key concepts.",
  ja: "この問題を詳しく解説し、正解と各選択肢が正しい・誤っている理由を説明して、重要なポイントをまとめてください。",
};
function draftPrompt(): string {
  const language = document.documentElement.getAttribute("data-lang");
  return language === "en" ? draftPrompts.en : language === "ja" ? draftPrompts.ja : draftPrompts.zh;
}
document.addEventListener("quizbank:language-changed", () => {
  // Never translate or overwrite a user's own draft.
  if (Object.values(draftPrompts).includes(input.value)) input.value = draftPrompt();
});

function appendMessage(role: ChatHistoryEntry["role"], text: string): HTMLDivElement {
  const message = document.createElement("div");
  message.className = `qb-chat-message qb-chat-message--${role}`;
  const label = document.createElement("strong");
  label.textContent = role === "user" ? "你" : "学习助手";
  const content = document.createElement("div");
  // 只保护提问与回答的正文，界面外壳交由 i18n 运行时翻译。
  content.className = "i18n-noloc";
  content.textContent = text; // Never execute model-generated HTML or links.
  message.append(label, content);
  log.appendChild(message);
  log.scrollTop = log.scrollHeight;
  return content;
}

async function api<T>(path: string, body: ChatRequestPayload | undefined, parse: (value: unknown) => T, onText?: (text: string) => void): Promise<T> {
  const response = await fetch(path, {
    method: body ? "POST" : "GET", credentials: "same-origin", cache: "no-store",
    headers: body ? { "Content-Type": "application/json", ...(onText ? {Accept:"application/x-ndjson"} : {}) } : {},
    body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(100000),
  });
  if (response.ok && onText && response.headers.get("Content-Type")?.includes("application/x-ndjson")) {
    return parse(await readChatStream(response, onText));
  }
  const data: unknown = await response.json().catch(() => null);
  if (!response.ok) {
    const message = isRecord(data) && typeof data.error === "string" ? data.error : "服务暂不可用。";
    throw new ChatApiError(message, response.status);
  }
  return parse(data);
}

function controls(enabled: boolean): void {
  send.disabled = busy || !enabled;
  input.disabled = busy;
  clear.disabled = busy;
  select.disabled = busy;
}

function setBusy(value: boolean): void {
  busy = value;
  dialog.classList.toggle("is-thinking", value);
  if (!value) dialog.classList.remove("is-generating");
  form.setAttribute("aria-busy", String(value));
  log.setAttribute("aria-busy", String(value));
}

async function checkStatus(): Promise<void> {
  const sequence = ++requestSequence;
  try {
    const data = await api("/api/chat/status", undefined, parseChatStatus);
    if (sequence !== requestSequence) return;
    login.hidden = data.authenticated || data.remaining > 0;
    if (!data.authenticated) login.textContent = "注册账号";
    status.textContent = !data.configured ? "学习助手尚未配置完成。" : !data.available ? "全站 AI 额度已达上限，服务已暂停。" : data.remaining === 0 ? (data.authenticated ? "今日额度已用完，将于 UTC-8标准时间0:00分刷新。" : "访客今日额度已用完。注册账号每日可提问 50 次。") : data.authenticated ? `今日剩余 ${data.remaining} / ${data.dailyLimit} 次（UTC-8 标准时间每日 0:00 刷新）。` : `访客今日剩余 ${data.remaining} / ${data.dailyLimit} 次；注册账号每日可提问 50 次。`;
    controls(data.configured && data.available && data.remaining > 0);
  } catch (failure: unknown) {
    if (sequence !== requestSequence) return;
    const statusCode = failure instanceof ChatApiError ? failure.status : undefined;
    login.hidden = statusCode !== 401;
    status.textContent = statusCode === 401 ? "请先登录后使用学习助手。" : "暂时无法连接学习助手。";
    if (statusCode === 401) { history = []; log.replaceChildren(); }
    controls(false);
  }
}

function clearConversation(): void {
  history = [];
  log.replaceChildren();
  error.textContent = "";
}

select.addEventListener("change", () => {
  clearConversation();
  questionContext = extractQuestionContext(document.getElementById(select.value));
});
clear.addEventListener("click", clearConversation);

function open(question: HTMLElement | null = null, source: HTMLElement = trigger): void {
  returnFocus = source;
  if (question && !busy) {
    select.value = question.id;
    questionContext = extractQuestionContext(question);
    input.value = draftPrompt();
    clearConversation();
  }
  if (!dialog.open) dialog.showModal();
  if (!busy) void checkStatus();
}
trigger.addEventListener("click", () => open());
byId<HTMLButtonElement>("qb-chat-close").addEventListener("click", () => dialog.close());
input.addEventListener("keydown", event => {
  submitChatOnEnter(event, () => form.requestSubmit(), !busy && !send.disabled);
});
dialog.addEventListener("close", () => returnFocus.focus());
dialog.addEventListener("click", event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
login.addEventListener("click", () => {
  dialog.close();
  document.querySelector<HTMLButtonElement>(".qb-auth-trigger")?.click();
  document.getElementById("qb-mode-register")?.click();
});

function indexQuestions(): void {
  document.querySelectorAll<HTMLElement>(".q[id], .question[id]").forEach(question => {
    if (question.dataset.chatIndexed) return;
    question.dataset.chatIndexed = "true";
    const option = document.createElement("option");
    option.value = question.id;
    option.textContent = `第 ${question.dataset.n || question.id.replace(/^q/, "")} 题`;
    select.appendChild(option);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "qb-question-chat";
    button.textContent = "AI 讲解";
    button.addEventListener("click", () => open(question, button));
    (question.querySelector<HTMLElement>(".qact") || question).appendChild(button);
  });
}
indexQuestions();
new MutationObserver(indexQuestions).observe(document.querySelector(".wrap") || document.body, { childList: true, subtree: true });

form.addEventListener("submit", async event => {
  event.preventDefault();
  const question = input.value.trim();
  if (busy || !question) return;
  setBusy(true);
  controls(false);
  error.textContent = "";
  status.textContent = "正在整理讲解……";
  appendMessage("user", question);
  let reply: HTMLDivElement | null = null;
  const renderer = createChatRenderer(text => {
    if (!reply) {
      reply = appendMessage("assistant", "");
      reply.parentElement?.classList.add("is-streaming");
      dialog.classList.remove("is-thinking");
      dialog.classList.add("is-generating");
      status.textContent = "正在生成讲解……";
    }
    const nearBottom = log.scrollHeight - log.scrollTop - log.clientHeight < 64;
    reply.textContent = text;
    if (nearBottom) log.scrollTop = log.scrollHeight;
  }, () => document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  try {
    const data = await api("/api/chat", { question, context: questionContext, history: history.slice(-6).map(item => ({ role: item.role, content: item.content.slice(0, 2000) })) }, parseChatAnswer, text => renderer.append(text));
    // Old cached deployments/mocks can still return a complete JSON answer.
    if (!reply) renderer.append(data.answer);
    await renderer.finish();
    const completedReply = log.querySelector<HTMLDivElement>(".qb-chat-message--assistant:last-child .i18n-noloc");
    if (completedReply) completedReply.textContent = data.answer;
    history.push({ role: "user", content: question }, { role: "assistant", content: data.answer });
    history = history.slice(-6);
    input.value = "";
    if (data.truncated) error.textContent = "本次讲解达到长度上限，可继续追问其中一部分。";
  } catch (failure: unknown) {
    await renderer.finish();
    error.textContent = failure instanceof ChatApiError ? failure.message : "连接中断，请稍后重试。";
    const partial = log.querySelector(".qb-chat-message--assistant.is-streaming");
    if (partial) {
      const warning = document.createElement("small");
      warning.textContent = "回答未完成，以上内容可能不完整。";
      partial.classList.add("is-incomplete");
      partial.appendChild(warning);
    }
  } finally {
    log.querySelectorAll(".is-streaming").forEach(node => node.classList.remove("is-streaming"));
    setBusy(false);
    await checkStatus();
    if (!input.disabled) input.focus();
  }
});

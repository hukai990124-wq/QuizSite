import { extractQuestionContext } from "./chat-context.mjs";

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
dialog.className = "qb-chat-dialog i18n-noloc";
dialog.setAttribute("aria-labelledby", "qb-chat-title");
dialog.innerHTML = `<header class="qb-chat-header"><h2 id="qb-chat-title">题库学习助手</h2><button type="button" id="qb-chat-close" aria-label="关闭聊天窗口">×</button></header>
<div class="qb-chat-body">
<p class="qb-chat-intro">选择题目即可提问，后续直接在聊天框里追问。AI 讲解可能有误，请核对题库与官方资料。</p>
<label for="qb-chat-question">带入题目</label><select id="qb-chat-question"><option value="">不指定题目／自行粘贴</option></select>
<div id="qb-chat-log" role="log" aria-label="学习对话" aria-live="polite"></div>
<p id="qb-chat-status" role="status">正在检查登录状态……</p><p id="qb-chat-error" role="alert"></p>
<button type="button" id="qb-chat-login" hidden>登录 / 注册</button>
<form id="qb-chat-form"><label for="qb-chat-input">你的问题</label><textarea id="qb-chat-input" rows="3" maxlength="2000" required placeholder="例如：为什么选 B？请逐项解释，并举一个例子。"></textarea>
<div class="qb-chat-actions"><button type="button" id="qb-chat-clear">清空对话</button><button type="submit" id="qb-chat-send">发送问题</button></div></form></div>`;
document.body.appendChild(dialog);
const byId = id => document.getElementById(id);
const select = byId("qb-chat-question"), input = byId("qb-chat-input");
const log = byId("qb-chat-log"), status = byId("qb-chat-status"), error = byId("qb-chat-error");
const login = byId("qb-chat-login"), send = byId("qb-chat-send"), clear = byId("qb-chat-clear");
let history = [], busy = false, authenticated = false, returnFocus = trigger;
let questionContext = "";
let requestSequence = 0;

function appendMessage(role, text) {
  const message = document.createElement("div");
  message.className = `qb-chat-message qb-chat-message--${role}`;
  const label = document.createElement("strong");
  label.textContent = role === "user" ? "你" : "学习助手";
  const content = document.createElement("div");
  content.textContent = text; // Never execute model-generated HTML or links.
  message.append(label, content);
  log.appendChild(message);
  log.scrollTop = log.scrollHeight;
}

async function api(path, body) {
  const response = await fetch(path, {
    method: body ? "POST" : "GET", credentials: "same-origin", cache: "no-store",
    headers: body ? { "Content-Type": "application/json" } : {},
    body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(100000),
  });
  const data = await response.json();
  if (!response.ok) throw Object.assign(new Error(data.error || "服务暂不可用。"), { status: response.status });
  return data;
}

function controls(enabled) {
  send.disabled = busy || !enabled;
  input.disabled = busy || !authenticated;
  clear.disabled = busy;
  select.disabled = busy;
  byId("qb-chat-form").setAttribute("aria-busy", String(busy));
}

async function checkStatus() {
  const sequence = ++requestSequence;
  try {
    const data = await api("/api/chat/status");
    if (sequence !== requestSequence) return;
    authenticated = true;
    login.hidden = true;
    status.textContent = !data.configured ? "学习助手尚未配置完成。" : !data.available ? "全站 AI 额度已达上限，服务已暂停。" : `今日剩余 ${data.remaining} / ${data.dailyLimit} 次（太平洋标准时间每日重置）。`;
    controls(data.configured && data.available && data.remaining > 0);
  } catch (failure) {
    if (sequence !== requestSequence) return;
    authenticated = false;
    login.hidden = failure.status !== 401;
    status.textContent = failure.status === 401 ? "请先登录后使用学习助手。" : "暂时无法连接学习助手。";
    if (failure.status === 401) { history = []; log.replaceChildren(); }
    controls(false);
  }
}

function clearConversation() {
  history = [];
  log.replaceChildren();
  error.textContent = "";
}

select.addEventListener("change", () => {
  clearConversation();
  questionContext = extractQuestionContext(document.getElementById(select.value));
});
clear.addEventListener("click", clearConversation);

function open(question, source = trigger) {
  returnFocus = source;
  if (question && !busy) {
    select.value = question.id;
    questionContext = extractQuestionContext(question);
    input.value = "请详细讲解这道题，说明正确答案、各选项为什么对或错，并总结考点。";
    clearConversation();
  }
  if (!dialog.open) dialog.showModal();
  checkStatus();
}
trigger.addEventListener("click", () => open());
byId("qb-chat-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => returnFocus?.focus());
dialog.addEventListener("click", event => { if (event.target === dialog) { const rect = dialog.getBoundingClientRect(); if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close(); } });
login.addEventListener("click", () => { dialog.close(); document.querySelector(".qb-auth-trigger")?.click(); });

function indexQuestions() {
  document.querySelectorAll(".q[id], .question[id]").forEach(question => {
    if (question.dataset.chatIndexed) return;
    question.dataset.chatIndexed = "true";
    const option = document.createElement("option");
    option.value = question.id;
    option.textContent = `第 ${question.dataset.n || question.id.replace(/^q/, "")} 题`;
    select.appendChild(option);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "qb-question-chat i18n-noloc";
    button.textContent = "AI 讲解";
    button.addEventListener("click", () => open(question, button));
    (question.querySelector(".qact") || question).appendChild(button);
  });
}
indexQuestions();
new MutationObserver(indexQuestions).observe(document.querySelector(".wrap") || document.body, { childList: true, subtree: true });

byId("qb-chat-form").addEventListener("submit", async event => {
  event.preventDefault();
  const question = input.value.trim();
  if (busy || !authenticated || !question) return;
  busy = true;
  controls(false);
  error.textContent = "";
  status.textContent = "正在整理讲解……";
  try {
    const data = await api("/api/chat", { question, context: questionContext, history: history.slice(-6).map(item => ({ role: item.role, content: item.content.slice(0, 2000) })) });
    appendMessage("user", question);
    appendMessage("assistant", data.answer);
    history.push({ role: "user", content: question }, { role: "assistant", content: data.answer });
    history = history.slice(-6);
    input.value = "";
    if (data.truncated) error.textContent = "本次讲解达到长度上限，可继续追问其中一部分。";
  } catch (failure) {
    error.textContent = failure.status ? failure.message : "连接中断，请稍后重试。";
  } finally {
    busy = false;
    await checkStatus();
    if (!input.disabled) input.focus();
  }
});

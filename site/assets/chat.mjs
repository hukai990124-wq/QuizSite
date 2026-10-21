import { extractQuestionContext } from "./chat-context.mjs";
import { submitChatOnEnter } from "./chat-keyboard.mjs";
import { ChatApiError, parseChatAnswer, parseChatStatus } from "./chat-protocol.mjs";
import { readChatStream } from "./chat-stream.mjs";
import { createChatRenderer } from "./chat-renderer.mjs";
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
function byId(id) {
    const element = document.getElementById(id);
    if (!element)
        throw new Error(`缺少聊天界面元素：${id}`);
    return element;
}
const stylesheet = document.createElement("link");
stylesheet.rel = "stylesheet";
stylesheet.href = "/assets/chat.css";
document.head.appendChild(stylesheet);
const trigger = document.createElement("button");
function examPending() { return document.documentElement.dataset.examStatus === "pending"; }
trigger.hidden = examPending();
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
<fieldset class="qb-chat-model-picker"><legend>选择 AI 模型</legend>
<label class="qb-chat-model-option"><input type="radio" name="qb-chat-provider" value="qwen"><span class="qb-chat-model-icon" aria-hidden="true"><img src="/assets/qwen-mark.svg" alt=""></span><span class="qb-chat-model-copy"><strong>Qwen</strong><small>通义千问</small></span></label>
<label class="qb-chat-model-option"><input type="radio" name="qb-chat-provider" value="cloudflare"><span class="qb-chat-model-icon" aria-hidden="true"><img src="/assets/cloudflare-ai-mark.svg" alt=""></span><span class="qb-chat-model-copy"><strong>Cloudflare AI</strong><small>Llama 3.1 · 8B Fast</small></span></label>
</fieldset>
<p class="qb-chat-intro">选择题目即可提问，后续直接在聊天框里追问。AI 讲解可能有误，请核对题库与官方资料。</p>
<label for="qb-chat-question">带入题目</label><select id="qb-chat-question"><option value="">不指定题目／自行粘贴</option></select>
<div id="qb-chat-log" role="log" aria-label="学习对话" aria-live="polite"></div>
<p id="qb-chat-status" role="status">正在检查登录状态……</p><p id="qb-chat-error" role="alert"></p>
<button type="button" id="qb-chat-login" hidden>登录 / 注册</button>
<form id="qb-chat-form"><label for="qb-chat-input">你的问题</label><textarea id="qb-chat-input" rows="3" maxlength="2000" required placeholder="例如：这道题选什么？简要说明理由。"></textarea><small class="qb-chat-input-hint">Enter 发送，Shift+Enter 换行</small>
<div class="qb-chat-actions"><button type="button" id="qb-chat-clear">清空对话</button><button type="submit" id="qb-chat-send">发送问题</button></div></form></div>`;
document.body.appendChild(dialog);
const select = byId("qb-chat-question");
const input = byId("qb-chat-input");
const log = byId("qb-chat-log");
const status = byId("qb-chat-status");
const error = byId("qb-chat-error");
const login = byId("qb-chat-login");
const send = byId("qb-chat-send");
const clear = byId("qb-chat-clear");
const form = byId("qb-chat-form");
const providerInputs = Array.from(dialog.querySelectorAll('input[name="qb-chat-provider"]'));
const PROVIDER_STORAGE_KEY = "quizsite-ai-provider";
function readProviderPreference() {
    try {
        return localStorage.getItem(PROVIDER_STORAGE_KEY) === "cloudflare" ? "cloudflare" : "qwen";
    }
    catch {
        return "qwen";
    }
}
let selectedProvider = readProviderPreference();
providerInputs.forEach(radio => { radio.checked = radio.value === selectedProvider; });
let history = [];
let busy = false;
let returnFocus = trigger;
let questionContext = "";
let requestSequence = 0;
const draftPrompts = {
    zh: "请简要说明这道题的正确答案和主要理由。",
    en: "Briefly give the correct answer and the main reason for this question.",
    ja: "この問題の正解と主な理由を簡潔に説明してください。",
};
function draftPrompt() {
    const language = document.documentElement.getAttribute("data-lang");
    return language === "en" ? draftPrompts.en : language === "ja" ? draftPrompts.ja : draftPrompts.zh;
}
document.addEventListener("quizsite:language-changed", () => {
    // Never translate or overwrite a user's own draft.
    if (Object.values(draftPrompts).includes(input.value))
        input.value = draftPrompt();
});
providerInputs.forEach(radio => radio.addEventListener("change", () => {
    if (!radio.checked || (radio.value !== "qwen" && radio.value !== "cloudflare"))
        return;
    selectedProvider = radio.value;
    try {
        localStorage.setItem(PROVIDER_STORAGE_KEY, selectedProvider);
    }
    catch { /* preference remains available for this page */ }
    if (dialog.open && !busy)
        void checkStatus();
}));
function appendMessage(role, text) {
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
async function api(path, body, parse, onText) {
    const response = await fetch(path, {
        method: body ? "POST" : "GET", credentials: "same-origin", cache: "no-store",
        headers: body ? { "Content-Type": "application/json", ...(onText ? { Accept: "application/x-ndjson" } : {}) } : {},
        body: body ? JSON.stringify(body) : undefined, signal: AbortSignal.timeout(100000),
    });
    if (response.ok && onText && response.headers.get("Content-Type")?.includes("application/x-ndjson")) {
        return parse(await readChatStream(response, onText));
    }
    const data = await response.json().catch(() => null);
    if (!response.ok) {
        const message = isRecord(data) && typeof data.error === "string" ? data.error : "服务暂不可用。";
        throw new ChatApiError(message, response.status);
    }
    return parse(data);
}
function controls(enabled) {
    send.disabled = busy || !enabled;
    input.disabled = busy;
    clear.disabled = busy;
    select.disabled = busy;
    providerInputs.forEach(radio => { radio.disabled = busy; });
}
function setBusy(value) {
    busy = value;
    dialog.classList.toggle("is-thinking", value);
    if (!value)
        dialog.classList.remove("is-generating");
    form.setAttribute("aria-busy", String(value));
    log.setAttribute("aria-busy", String(value));
}
async function checkStatus() {
    const sequence = ++requestSequence;
    try {
        const data = await api(`/api/chat/status?provider=${selectedProvider}`, undefined, parseChatStatus);
        if (sequence !== requestSequence)
            return;
        login.hidden = data.authenticated || data.remaining > 0;
        if (!data.authenticated)
            login.textContent = "注册账号";
        status.textContent = !data.configured ? "学习助手尚未配置完成。" : !data.available ? "全站 AI 额度已达上限，服务已暂停。" : data.remaining === 0 ? (data.authenticated ? "今日额度已用完，将于 UTC-8标准时间0:00分刷新。" : "访客今日额度已用完。注册账号每日可提问 50 次。") : data.authenticated ? `今日剩余 ${data.remaining} / ${data.dailyLimit} 次（UTC-8 标准时间每日 0:00 刷新）。` : `访客今日剩余 ${data.remaining} / ${data.dailyLimit} 次；注册账号每日可提问 50 次。`;
        controls(data.configured && data.available && data.remaining > 0);
    }
    catch (failure) {
        if (sequence !== requestSequence)
            return;
        const statusCode = failure instanceof ChatApiError ? failure.status : undefined;
        login.hidden = statusCode !== 401;
        status.textContent = statusCode === 401 ? "请先登录后使用学习助手。" : "暂时无法连接学习助手。";
        if (statusCode === 401) {
            history = [];
            log.replaceChildren();
        }
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
function open(question = null, source = trigger) {
    if (examPending())
        return;
    returnFocus = source;
    if (question && !busy) {
        select.value = question.id;
        questionContext = extractQuestionContext(question);
        input.value = draftPrompt();
        clearConversation();
    }
    if (!dialog.open)
        dialog.showModal();
    if (!busy)
        void checkStatus();
}
trigger.addEventListener("click", () => open());
byId("qb-chat-close").addEventListener("click", () => dialog.close());
input.addEventListener("keydown", event => {
    submitChatOnEnter(event, () => form.requestSubmit(), !busy && !send.disabled);
});
dialog.addEventListener("close", () => returnFocus.focus());
dialog.addEventListener("click", event => { if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom)
        dialog.close();
} });
login.addEventListener("click", () => {
    dialog.close();
    document.querySelector(".qb-auth-trigger")?.click();
    document.getElementById("qb-mode-register")?.click();
});
function indexQuestions() {
    if (examPending())
        return;
    document.querySelectorAll(".q[id], .question[id]").forEach(question => {
        if (question.dataset.chatIndexed)
            return;
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
        (question.querySelector(".qact") || question).appendChild(button);
    });
    // Dynamic single-question viewers keep a hidden, stable question catalogue
    // and expose a visible action targeting the corresponding catalogue entry.
    document.querySelectorAll("[data-chat-question]").forEach(target => {
        if (target.dataset.chatIndexed)
            return;
        const question = document.getElementById(target.dataset.chatQuestion || "");
        if (!question)
            return;
        target.dataset.chatIndexed = "true";
        const button = document.createElement("button");
        button.type = "button";
        button.className = "qb-question-chat";
        button.textContent = "AI 讲解";
        button.addEventListener("click", () => open(question, button));
        target.appendChild(button);
    });
}
indexQuestions();
function updateExamAvailability() {
    trigger.hidden = examPending();
    if (examPending()) {
        dialog.close();
        clearConversation();
    }
    else
        indexQuestions();
}
document.addEventListener("quizsite:exam-submitted", updateExamAvailability);
document.addEventListener("quizsite:exam-state-changed", updateExamAvailability);
// Some viewers have a header .wrap before their dynamically rendered main.
new MutationObserver(indexQuestions).observe(document.body, { childList: true, subtree: true });
form.addEventListener("submit", async (event) => {
    event.preventDefault();
    if (examPending())
        return;
    const question = input.value.trim();
    if (busy || !question)
        return;
    setBusy(true);
    controls(false);
    error.textContent = "";
    status.textContent = "正在整理讲解……";
    appendMessage("user", question);
    let reply = null;
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
        if (nearBottom)
            log.scrollTop = log.scrollHeight;
    }, () => document.hidden || window.matchMedia("(prefers-reduced-motion: reduce)").matches);
    try {
        const data = await api("/api/chat", { question, context: questionContext, history: history.slice(-6).map(item => ({ role: item.role, content: item.content.slice(0, 2000) })), provider: selectedProvider }, parseChatAnswer, text => renderer.append(text));
        // Old cached deployments/mocks can still return a complete JSON answer.
        if (!reply)
            renderer.append(data.answer);
        await renderer.finish();
        const completedReply = log.querySelector(".qb-chat-message--assistant:last-child .i18n-noloc");
        if (completedReply)
            completedReply.textContent = data.answer;
        history.push({ role: "user", content: question }, { role: "assistant", content: data.answer });
        history = history.slice(-6);
        input.value = "";
        if (data.truncated)
            error.textContent = "本次讲解达到长度上限，可继续追问其中一部分。";
    }
    catch (failure) {
        await renderer.finish();
        error.textContent = failure instanceof ChatApiError ? failure.message : "连接中断，请稍后重试。";
        const partial = log.querySelector(".qb-chat-message--assistant.is-streaming");
        if (partial) {
            const warning = document.createElement("small");
            warning.textContent = "回答未完成，以上内容可能不完整。";
            partial.classList.add("is-incomplete");
            partial.appendChild(warning);
        }
    }
    finally {
        log.querySelectorAll(".is-streaming").forEach(node => node.classList.remove("is-streaming"));
        setBusy(false);
        await checkStatus();
        if (!input.disabled)
            input.focus();
    }
});

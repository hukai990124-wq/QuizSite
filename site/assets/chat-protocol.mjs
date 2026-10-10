export class ChatApiError extends Error {
    status;
    constructor(message, status) {
        super(message);
        this.status = status;
        this.name = "ChatApiError";
    }
}
function isRecord(value) {
    return typeof value === "object" && value !== null && !Array.isArray(value);
}
export function parseChatStatus(value) {
    if (!isRecord(value))
        throw new Error("学习助手返回了无法识别的状态。");
    const { remaining, dailyLimit, authenticated, available, configured } = value;
    if (typeof remaining !== "number" || !Number.isSafeInteger(remaining) || remaining < 0 || typeof dailyLimit !== "number" || !Number.isSafeInteger(dailyLimit) || dailyLimit <= 0 || remaining > dailyLimit || typeof authenticated !== "boolean" || typeof available !== "boolean" || typeof configured !== "boolean") {
        throw new Error("学习助手返回了无法识别的状态。");
    }
    return { remaining, dailyLimit, authenticated, available, configured };
}
export function parseChatAnswer(value) {
    if (!isRecord(value) || typeof value.answer !== "string" || typeof value.truncated !== "boolean") {
        throw new Error("学习助手返回了无法识别的回答。");
    }
    return { ...parseChatStatus(value), answer: value.answer, truncated: value.truncated };
}

export type ChatHistoryEntry = { role: "user" | "assistant"; content: string };
export type ChatStatusResponse = {
  remaining: number;
  dailyLimit: number;
  authenticated: boolean;
  available: boolean;
  configured: boolean;
};
export type ChatAnswerResponse = ChatStatusResponse & { answer: string; truncated: boolean };
export type ChatProvider = "qwen" | "cloudflare";
export type ChatRequestPayload = { question: string; context: string; history: ChatHistoryEntry[]; provider: ChatProvider };

export class ChatApiError extends Error {
  constructor(message: string, readonly status: number) {
    super(message);
    this.name = "ChatApiError";
  }
}

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function parseChatStatus(value: unknown): ChatStatusResponse {
  if (!isRecord(value)) throw new Error("学习助手返回了无法识别的状态。");
  const { remaining, dailyLimit, authenticated, available, configured } = value;
  if (typeof remaining !== "number" || !Number.isSafeInteger(remaining) || remaining < 0 || typeof dailyLimit !== "number" || !Number.isSafeInteger(dailyLimit) || dailyLimit <= 0 || remaining > dailyLimit || typeof authenticated !== "boolean" || typeof available !== "boolean" || typeof configured !== "boolean") {
    throw new Error("学习助手返回了无法识别的状态。");
  }
  return { remaining, dailyLimit, authenticated, available, configured };
}

export function parseChatAnswer(value: unknown): ChatAnswerResponse {
  if (!isRecord(value) || typeof value.answer !== "string" || typeof value.truncated !== "boolean") {
    throw new Error("学习助手返回了无法识别的回答。");
  }
  return { ...parseChatStatus(value), answer: value.answer, truncated: value.truncated };
}

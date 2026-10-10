import test from "node:test";
import assert from "node:assert/strict";
import { ChatApiError, parseChatAnswer, parseChatStatus } from "../site/assets/chat-protocol.mjs";

const validStatus = { remaining: 17, dailyLimit: 20, authenticated: false, available: true, configured: true };

test("chat status parser accepts the API contract and rejects malformed quota values", () => {
  assert.deepEqual(parseChatStatus(validStatus), validStatus);
  for (const value of [
    null,
    { ...validStatus, remaining: -1 },
    { ...validStatus, remaining: 21 },
    { ...validStatus, dailyLimit: 0 },
    { ...validStatus, available: "yes" },
  ]) {
    assert.throws(() => parseChatStatus(value));
  }
});

test("chat answer parser validates answer and status fields before the UI uses them", () => {
  const response = { ...validStatus, answer: "逐步分析后，B 符合题意。", truncated: false };
  assert.deepEqual(parseChatAnswer(response), response);
  assert.throws(() => parseChatAnswer({ ...response, answer: null }));
  assert.throws(() => parseChatAnswer({ answer: "没有额度状态", truncated: false }));
});

test("chat API errors retain only a message and HTTP status", () => {
  const failure = new ChatApiError("额度已用完", 429);
  assert.equal(failure.message, "额度已用完");
  assert.equal(failure.status, 429);
  assert.equal(failure.name, "ChatApiError");
});

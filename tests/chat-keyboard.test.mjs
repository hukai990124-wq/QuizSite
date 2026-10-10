import test from "node:test";
import assert from "node:assert/strict";
import { submitChatOnEnter } from "../site/assets/chat-keyboard.mjs";

function keyEvent({ key = "Enter", shiftKey = false, isComposing = false, keyCode } = {}) {
  let prevented = false;
  return { event: { key, shiftKey, isComposing, keyCode, preventDefault() { prevented = true; } }, wasPrevented: () => prevented };
}

test("Enter submits the chat and prevents inserting a newline", () => {
  const { event, wasPrevented } = keyEvent();
  let submits = 0;
  assert.equal(submitChatOnEnter(event, () => submits++, true), true);
  assert.equal(wasPrevented(), true);
  assert.equal(submits, 1);
});

test("Shift+Enter keeps the textarea newline behavior", () => {
  const { event, wasPrevented } = keyEvent({ shiftKey: true });
  let submits = 0;
  assert.equal(submitChatOnEnter(event, () => submits++, true), false);
  assert.equal(wasPrevented(), false);
  assert.equal(submits, 0);
});

test("other keys do not submit the chat", () => {
  const { event, wasPrevented } = keyEvent({ key: "a" });
  let submits = 0;
  assert.equal(submitChatOnEnter(event, () => submits++, true), false);
  assert.equal(wasPrevented(), false);
  assert.equal(submits, 0);
});

test("Enter used by an IME and Enter while sending is disabled do not submit", () => {
  for (const { options, enabled } of [
    { options: { isComposing: true }, enabled: true },
    { options: { keyCode: 229 }, enabled: true },
    { options: {}, enabled: false },
  ]) {
    const { event, wasPrevented } = keyEvent(options);
    let submits = 0;
    assert.equal(submitChatOnEnter(event, () => submits++, enabled), false);
    assert.equal(wasPrevented(), false);
    assert.equal(submits, 0);
  }
});

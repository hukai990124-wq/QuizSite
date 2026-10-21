import test from "node:test";
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";

const source = readFileSync(new URL("../src/typescript/chat.mts", import.meta.url), "utf8");
const builtChat = readFileSync(new URL("../site/assets/chat.mjs", import.meta.url), "utf8");
const styles = readFileSync(new URL("../site/assets/chat.css", import.meta.url), "utf8");
const config = readFileSync(new URL("../wrangler.toml", import.meta.url), "utf8");

test("AI model selector offers accessible Qwen and Cloudflare cards with separate logo assets", () => {
  assert.match(source, /<fieldset class="qb-chat-model-picker"><legend>选择 AI 模型<\/legend>/);
  assert.match(source, /name="qb-chat-provider" value="qwen"/);
  assert.match(source, /name="qb-chat-provider" value="cloudflare"/);
  assert.match(source, /\/assets\/qwen-mark\.svg/);
  assert.match(source, /\/assets\/cloudflare-ai-mark\.svg/);
  assert.match(source, /Llama 3\.1 · 8B Fast/);
  assert.match(styles, /qb-chat-model-option:has\(input:checked\)/);
  assert.match(styles, /qb-chat-model-option:has\(input:focus-visible\)/);
  for (const asset of ["qwen-mark.svg", "cloudflare-ai-mark.svg"]) {
    const svg = readFileSync(new URL(`../site/assets/${asset}`, import.meta.url), "utf8");
    assert.match(svg, /<svg[^>]+viewBox="0 0 40 40"/);
    assert.match(svg, /<\/svg>/);
  }
});

test("selected provider is remembered locally and sent to status and chat APIs", () => {
  assert.match(source, /quizsite-ai-provider/);
  assert.match(source, /\/api\/chat\/status\?provider=\$\{selectedProvider\}/);
  assert.match(source, /provider: selectedProvider/);
});

test("checked-in Worker config retains the user's Workers AI binding name", () => {
  assert.match(config, /\[ai\]\s+binding = "MY_AI_BINDING"/);
});

test("chat UI does not expose provider billing notices to visitors", () => {
  assert.doesNotMatch(source, /超出免费额度后可能按账户套餐计费/);
  assert.doesNotMatch(source, /qb-chat-model-notice/);
  assert.doesNotMatch(builtChat, /超出免费额度后可能按账户套餐计费/);
  assert.doesNotMatch(builtChat, /qb-chat-model-notice/);
  assert.doesNotMatch(styles, /qb-chat-model-notice/);
});

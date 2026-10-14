import test from 'node:test';
import assert from 'node:assert/strict';
import {createChatRenderer} from '../site/assets/chat-renderer.mjs';
test('typing batches expose partial text, keep emoji intact and drain the complete answer', async () => {
  const frames = [];
  const renderer = createChatRenderer(text=>frames.push(text),()=>false);
  const text = '你好🌏，这是分段生成的讲解。'.repeat(3);
  renderer.append(text);
  assert.ok(frames[0].length > 0 && frames[0].length < text.length);
  await renderer.finish();
  assert.equal(frames.at(-1),text);
  assert.ok(frames.length > 1);
  assert.ok(frames.every(frame=>!/[\uD800-\uDBFF]$/.test(frame)));
});
test('reduced-motion renderer displays received chunks immediately', async () => {
  const frames = [];
  const renderer = createChatRenderer(text=>frames.push(text),()=>true);
  renderer.append('第一段'); renderer.append('第二段');
  await renderer.finish();
  assert.deepEqual(frames,['第一段','第一段第二段']);
});

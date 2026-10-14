import test from 'node:test';
import assert from 'node:assert/strict';
import {readChatStream} from '../site/assets/chat-stream.mjs';
const quota = {remaining:49,dailyLimit:50,authenticated:true,available:true,configured:true,truncated:false};
function reply(text) {
  const bytes = new TextEncoder().encode(text);
  return new Response(new ReadableStream({start(controller) {
    const size = bytes.length > 1000 ? 128 : 1;
    for (let index = 0; index < bytes.length; index += size) controller.enqueue(bytes.slice(index, index + size));
    controller.close();
  }}));
}
test('browser stream parser handles split UTF-8 characters, deltas and quota completion', async () => {
  const deltas = [];
  const frames = [{type:'delta',text:'你好🌏'}, {type:'delta',text:'，B 正确。'}, {type:'done',...quota}];
  const answer = await readChatStream(reply(frames.map(frame=>JSON.stringify(frame)).join('\n')+'\n'), text=>deltas.push(text));
  assert.deepEqual(deltas,['你好🌏','，B 正确。']);
  assert.equal(answer.answer,'你好🌏，B 正确。');
  assert.equal(answer.remaining,49);
});
test('browser stream parser rejects unfinished, malformed or oversized output and safe stream errors', async () => {
  for (const text of ['{"type":"delta","text":"半句"}\n','not-json\n','{"type":"delta","text":42}\n',JSON.stringify({type:'delta',text:'x'.repeat(100001)})+'\n']) {
    await assert.rejects(readChatStream(reply(text),()=>{}));
  }
  await assert.rejects(readChatStream(reply('{"type":"error","error":"回答未完成，请稍后再试。"}\n'),()=>{}),/回答未完成/);
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateProgressItems} from '../worker/account.mjs';

const load = path => readFile(new URL('../' + path, import.meta.url), 'utf8');
test('AIP import preserves all 136 numbered questions and valid answer choices', async () => {
  const bank = JSON.parse(await load('aws-aip/data/questions.json'));
  assert.equal(bank.length,136);
  assert.deepEqual(bank[1].answer,['A','D','F']);
  assert.match(bank[22].question.en,/invoke_model\(modelId="anthropic\.claude-v2"/);
  assert.equal(bank.filter(q=>q.answer.length>1).length,15);
  for (const [index,q] of bank.entries()) {
    assert.equal(q.number,index+1);
    assert.equal(q.id,`aip-${String(index+1).padStart(3,'0')}`);
    const letters=q.options.map(o=>o.letter);
    assert.deepEqual(letters,'ABCDEF'.slice(0,letters.length).split(''));
    assert.ok(letters.length>=4 && letters.length<=6,q.id);
    assert.ok(q.answer.length>0 && q.answer.every(a=>letters.includes(a)),q.id);
    const needed=q.question.en.match(/Choose (two|three)/i)?.[1].toLowerCase();
    if (needed) assert.equal(q.answer.length,needed==='two'?2:3,q.id);
    for (const field of [q.question,...q.options,q.explanation]) {
      for (const lang of ['en','zh','ja']) assert.ok(field[lang]?.trim(),`${q.id}: missing ${lang}`);
      assert.doesNotMatch(field.en,/Correct Answer:|Community vote distribution|Topic 1Question|淘宝|微信/);
    }
  }
  const sources=JSON.parse(await load('aws-aip/data/sources.json'));
  assert.equal(sources.length,6);
  assert.deepEqual(sources.map(s=>s.count),[50,50,36,50,50,36]);
  for(const source of sources) assert.match(source.sha256,/^[a-f0-9]{64}$/);
});

test('AIP pages reuse the AWS engine with 50/50/36 questions, AI and shared shell',async()=>{
  const bank=JSON.parse(await load('aws-aip/data/questions.json'));
  for (const [part,total] of [[1,50],[2,50],[3,36]]) {
    const page=await load(`site/aws-aip/part0${part}.html`);
    assert.equal((page.match(/class="q" id="q\d+"/g)||[]).length,total);
    const answers=[...page.matchAll(/data-ans="([A-F,]+)"/g)].map(m=>m[1]);
    assert.deepEqual(answers,bank.slice((part-1)*50,part*50).map(q=>q.answer.join(',')));
    assert.match(page,new RegExp(`quiz:aws:aip:0${part}`));
    assert.match(page,/quizbank-theme-js/);
    assert.match(page,/id="btn-report"/);
    assert.match(page,/i18n:head/);
    assert.match(page,/html\[data-lang="en"\] \.zh/);
    assert.match(page,/原始讨论（英文，仅供参考）/);
    assert.doesNotThrow(()=>validateProgressItems([{storageKey:`quiz:aws:aip:0${part}`,itemKey:'1',
      value:{s:['C'],ok:true,revealed:false},updatedAt:100,isDeleted:false}]));
  }
});

test('AIP is reachable from home and its random pool uses all three papers',async()=>{
  const home=await load('site/index.html');
  assert.match(home,/href="aws-aip\/index.html"/);
  assert.match(home,/"aws-aip":\{keys:\[\["aws:aip:01",50\],\["aws:aip:02",50\],\["aws:aip:03",36\],/);
  const index=await load('site/aws-aip/index.html');
  for(const part of ['01','02','03']) assert.ok(index.includes(`href="part${part}.html"`));
  assert.match(index,/pool=aws-aip&amp;size=50/);
  const random=await load('site/assets/random-quiz.js');
  assert.match(random,/"aws-aip".*files\("aws-aip", 3, "part"\)/);
});

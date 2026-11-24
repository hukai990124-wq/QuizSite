import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {validateProgressItems} from '../worker/account.mjs';
const load=path=>readFile(new URL('../'+path,import.meta.url),'utf8');
const groups=[['easy',[50,50,50,46]],['hard',[50,50,15]],['veryhard',[50,50,31]]];
test('open AIP bank excludes attributed BenchPrep content and retains 442 unique reference-answer questions',async()=>{
  const bank=JSON.parse(await load('question-banks/aws-aip/data/open-questions.json'));
  const meta=JSON.parse(await load('question-banks/aws-aip/data/open-source.json'));
  assert.equal(bank.length,442);assert.equal(meta.imported,442);assert.equal(meta.excluded.length,20);
  assert.ok(meta.excluded.every(q=>q.source==='BenchPrep'));assert.deepEqual(meta.duplicates,[]);
  assert.equal(new Set(bank.map(q=>q.sourceId)).size,442);
  const fingerprint=t=>t.toLowerCase().replace(/[^a-z0-9]/g,'');
  const old=JSON.parse(await load('question-banks/aws-aip/data/questions.json'));
  const seen=new Set(old.map(q=>fingerprint(q.question.en)));
  for(const [i,q] of bank.entries()){
    assert.equal(q.id,`open-aip-${String(i+1).padStart(3,'0')}`);
    assert.equal(seen.has(fingerprint(q.question.en)),false,q.id);seen.add(fingerprint(q.question.en));
    assert.ok(!q.sourceId.includes(':bp-'));
    const letters=q.options.map(o=>o.letter);
    assert.deepEqual(letters,'ABCDEF'.slice(0,letters.length).split(''));
    assert.ok(letters.length>=4&&letters.length<=6);
    assert.ok(q.answer.length>0&&q.answer.every(a=>letters.includes(a)),q.id);
    for(const field of [q.question,...q.options,...q.options.map(o=>o.explanation)]){
      for(const lang of ['en','zh'])assert.ok(field[lang]?.trim(),q.id+' '+lang);
      assert.equal(Object.hasOwn(field,'ja'),false,'Japanese content is explicitly deferred');
    }
    assert.ok(q.resources.length>0);
    for(const ref of q.resources)assert.match(ref.url,/^https:\/\/(docs\.)?aws\.amazon\.com\//);
  }
  for(const [tier,counts] of groups)assert.equal(bank.filter(q=>q.tier===tier).length,counts.reduce((a,b)=>a+b,0));
  assert.match(await load('site/aws-aip/LICENSE-JeremyEngineer.txt'),/Copyright \(c\) 2026 JeremyEngineer/);
});
test('open practice papers keep all answers, bilingual options, shared AI shell and separate progress keys',async()=>{
  const bank=JSON.parse(await load('question-banks/aws-aip/data/open-questions.json'));
  for(const [tier,counts] of groups){
    const source=bank.filter(q=>q.tier===tier);let offset=0;
    for(const [index,count] of counts.entries()){
      const part=String(index+1).padStart(2,'0'),page=await load(`site/aws-aip/open-${tier}/part${part}.html`);
      assert.equal((page.match(/class="q" id="q\d+"/g)||[]).length,count);
      assert.deepEqual([...page.matchAll(/data-ans="([A-F,]+)"/g)].map(m=>m[1]),source.slice(offset,offset+count).map(q=>q.answer.join(',')));
      assert.match(page,/quizsite-theme-js/);assert.match(page,/aip-options.mjs/);
      assert.doesNotMatch(page,/class="ja" lang="ja"/);
      assert.match(page,/本批暂不提供日文题文/);
      assert.match(page,/JeremyEngineer/);assert.match(page,/LICENSE-JeremyEngineer.txt/);
      assert.doesNotThrow(()=>validateProgressItems([{storageKey:`quiz:aws:aip:open:${tier}:${part}`,itemKey:'1',
        value:{s:['B'],ok:true,revealed:false},updatedAt:100,isDeleted:false}]));
      offset+=count;
    }
  }
});
test('AIP directory, aggregate progress and random pool include old and new papers',async()=>{
  const index=await load('site/aws-aip/index.html');
  assert.equal((index.match(/data-quiz-key="aws:aip:/g)||[]).length,13);
  // The shared translator must not flatten the link's enclosing toolbar.
  assert.match(index,/<a id="aip-random" href="\.\.\/random\.html\?pool=aws-aip&amp;size=50">/);
  const home=await load('site/index.html');assert.match(home,/>578 题</);assert.match(home,/0 \/ 5722</);
  for(const [tier,counts] of groups)for(const [i,count] of counts.entries()){
    const part=String(i+1).padStart(2,'0');
    assert.ok(home.includes(`["aws:aip:open:${tier}:${part}",${count}]`));
  }
  const random=await load('site/assets/random-quiz.js');
  for(const [tier,counts] of groups)assert.ok(random.includes(`files("aws-aip/open-${tier}", ${counts.length}, "part")`));
});

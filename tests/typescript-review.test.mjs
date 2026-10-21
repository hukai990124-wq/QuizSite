import test from 'node:test';
import assert from 'node:assert/strict';
import {readFile,mkdtemp,writeFile,rm} from 'node:fs/promises';
import {tmpdir} from 'node:os';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {spawnSync} from 'node:child_process';
import {validateProgressItems} from '../worker/account.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const load=name=>readFile(path.join(root,name),'utf8');
const getBank=async()=>JSON.parse(await load('question-banks/programming/typescript-review.json'));

test('TypeScript review contains 30 original trilingual four-choice defect reviews',async()=>{
  const bank=await getBank(), tally={};
  assert.equal(bank.length,30);
  assert.equal(new Set(bank.map(q=>q.code)).size,30);
  for(const [index,q] of bank.entries()){
    assert.equal(q.id,`typescript-${String(index+1).padStart(2,'0')}`);
    assert.ok(q.code.trim());assert.equal(q.options.length,4);assert.match(q.answer,/^[ABCD]$/);
    tally[q.answer]=(tally[q.answer]||0)+1;
    for(const lang of ['en','zh','ja']){
      assert.ok(q.prompt[lang]?.trim(),q.id);assert.ok(q.explanation[lang]?.trim(),q.id);
      assert.equal(new Set(q.options.map(o=>o[lang])).size,4,q.id);
      for(const option of q.options)assert.ok(option[lang]?.trim(),q.id);
    }
    assert.match(q.source,/^https:\/\/www\.typescriptlang\.org\//);
    assert.ok(q.fixed.trim());assert.ok(q.diagnostic>0);
  }
  assert.deepEqual(Object.values(tally).sort(),[7,7,8,8]);
});

test('every displayed defect produces its documented compiler error; every fix typechecks',async()=>{
  const bank=await getBank();
  const scratch=await mkdtemp(path.join(tmpdir(),'quizsite-typescript-review-'));
  const compiler=path.join(root,'node_modules/typescript/bin/tsc');
  const run=files=>spawnSync(process.execPath,[compiler,'--noEmit','--strict','--target','ES2022',
    '--module','ESNext','--lib','ES2022,DOM','--noUncheckedIndexedAccess','--exactOptionalPropertyTypes',
    '--pretty','false',...files],{cwd:scratch,encoding:'utf8',timeout:30000});
  try{
    for(const q of bank){
      await writeFile(path.join(scratch,q.id+'-bad.ts'),q.code+'\nexport {};\n');
      await writeFile(path.join(scratch,q.id+'-fixed.ts'),q.fixed+'\nexport {};\n');
    }
    const bad=run(bank.map(q=>q.id+'-bad.ts'));
    assert.equal(bad.error,undefined);assert.equal(bad.status,1,bad.stdout+bad.stderr);
    const lines=bad.stdout.split('\n').filter(line=>/error TS\d+/.test(line));
    for(const q of bank){
      const matches=lines.filter(line=>line.startsWith(q.id+'-bad.ts('));
      assert.ok(matches.length>0,`${q.id}: the displayed defect did not fail`);
      assert.ok(matches.every(line=>line.includes('error TS'+q.diagnostic+':')),matches.join('\n'));
    }
    const fixed=run(bank.map(q=>q.id+'-fixed.ts'));
    assert.equal(fixed.error,undefined);assert.equal(fixed.status,0,fixed.stdout+fixed.stderr);
  }finally{
    assert.ok(scratch.startsWith(path.join(tmpdir(),'quizsite-typescript-review-')));
    await rm(scratch,{recursive:true});
  }
});

test('TypeScript page keeps code inert, shared red review controls and complete AI context',async()=>{
  const page=await load('site/programming/typescript.html');
  assert.equal((page.match(/class="q" id="q\d+"/g)||[]).length,30);
  assert.equal((page.match(/class="opt" data-letter="[ABCD]"/g)||[]).length,120);
  assert.equal((page.match(/data-chat-context="/g)||[]).length,30);
  assert.equal((page.match(/class="review-code i18n-noloc"/g)||[]).length,30);
  assert.match(page,/programming-review.css/);assert.match(page,/quizsite-theme.js/);
  assert.match(page,/quiz:programming:typescript:01/);assert.match(page,/id="btn-report"/);
  assert.match(page,/TypeScript Handbook/);
  assert.doesNotMatch(page,/<img\b|<input\b|<iframe\b|on(?:click|error)\s*=\s*["']/i);
  for(const lang of ['en','zh','ja'])assert.equal((page.match(new RegExp(`class="opt-lang" lang="${lang}"`,'g'))||[]).length,120);
  assert.doesNotThrow(()=>validateProgressItems([{storageKey:'quiz:programming:typescript:01',itemKey:'1',
    value:{s:['A'],ok:true,revealed:false},updatedAt:100,isDeleted:false}]));
});

test('TypeScript review has its own card and progress without displacing HTML or CSS',async()=>{
  const home=await load('site/index.html');
  for(const name of ['programming','programming-css','programming-typescript'])assert.ok(home.includes(`data-site="${name}"`));
  assert.match(home,/href="programming\/typescript.html"/);
  assert.match(home,/"programming-typescript":\{keys:\[\["programming:typescript:01",30\]\]\}/);
});

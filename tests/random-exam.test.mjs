import test from 'node:test';
import assert from 'node:assert/strict';
import {gradeExam,readExamState} from '../site/assets/random-exam-state.mjs';
import {validateProgressItems} from '../worker/account.mjs';

const questions=[{id:'1',answers:['A'],fill:false},{id:'2',answers:['A','C'],fill:false},{id:'3',answers:['HELLO','HI'],fill:true}];
test('exam drafts never restore per-question grading before submission',()=>{
  const state=readExamState(JSON.stringify({exam:{startedAt:1,submitted:false},'1':{s:['B'],ok:false,revealed:true}}),questions,100);
  assert.equal(state.exam.submitted,false);
  assert.deepEqual(state.answers['1'],{s:['B'],ok:null,revealed:false});
  assert.equal(gradeExam(questions,state).correct,0);
});
test('exam grading compares full multi-select sets and normalized fill alternatives',()=>{
  const state=readExamState(JSON.stringify({'1':{s:['A']},'2':{s:['C','A']},'3':{s:[' hi ']}}),questions,100);
  assert.deepEqual(gradeExam(questions,state),{answered:3,correct:3,wrong:0,unanswered:0,percent:100});
  state.answers['2'].s=['A'];
  assert.equal(gradeExam(questions,state).correct,2);
  delete state.answers['3'];
  assert.deepEqual(gradeExam(questions,state),{answered:2,correct:1,wrong:1,unanswered:1,percent:33});
});
test('malformed progress fails safely, preserves valid drafts and ignores unknown keys',()=>{
  assert.equal(readExamState('{',questions,100).exam.startedAt,100);
  const state=readExamState(JSON.stringify({exam:{submitted:'yes',startedAt:-1},'1':{s:['Z','A','A',1]},'999':{s:['A']}}),questions,100);
  assert.equal(state.exam.submitted,false);
  assert.equal(state.exam.startedAt,100);
  assert.equal(state.answers['999'],undefined);
  assert.deepEqual(state.answers['1'].s,['Z','A']);
});
test('exam metadata and draft answers fit existing per-item cloud sync without touching practice keys',()=>{
  const state=readExamState(null,questions,100);
  assert.doesNotThrow(()=>validateProgressItems([{storageKey:'quiz:random-exam:aws-clf:50:12345678',itemKey:'exam',value:state.exam,updatedAt:100,isDeleted:false}]));
});
test('submitted status survives reload only with valid submission metadata and recomputes keys',()=>{
  const raw={exam:{startedAt:10,submitted:true,submittedAt:50},'1':{s:['B'],ok:true,revealed:true}};
  const state=readExamState(JSON.stringify(raw),questions,100);
  assert.equal(state.exam.submitted,true);
  assert.equal(state.answers['1'].ok,false);
  raw.exam.submittedAt=101;
  const pending=readExamState(JSON.stringify(raw),questions,100);
  assert.equal(pending.exam.submitted,false);
  assert.equal(pending.answers['1'].ok,null);
});

test('exam resumes the current question and rejects invalid page positions',()=>{
  assert.equal(readExamState(null,questions,100).exam.currentIndex,0);
  for(const currentIndex of [0,1,2]) {
    const state=readExamState(JSON.stringify({exam:{startedAt:1,currentIndex}}),questions,100);
    assert.equal(state.exam.currentIndex,currentIndex);
  }
  for(const currentIndex of [-1,3,1.5,'1',null]) {
    const state=readExamState(JSON.stringify({exam:{startedAt:1,currentIndex}}),questions,100);
    assert.equal(state.exam.currentIndex,0);
  }
});

test('MLA exposes the same random 50-question exam entrance as the other AWS banks',async()=>{
  const {readFile}=await import('node:fs/promises');
  const page=await readFile(new URL('../site/aws-mla/index.html',import.meta.url),'utf8');
  assert.match(page,/random\.html\?pool=aws-mla&amp;size=50/);
});

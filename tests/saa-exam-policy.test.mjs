import test from 'node:test';
import assert from 'node:assert/strict';

test('SAA exams accept four-option single choice and five-or-more-option multiple response',async()=>{
  const {isSaaExamQuestion}=await import('../site/assets/saa-exam-policy.mjs');
  assert.equal(isSaaExamQuestion(['A'],['A','B','C','D']),true);
  assert.equal(isSaaExamQuestion(['A','C'],['A','B','C','D','E']),true);
  assert.equal(isSaaExamQuestion(['A','C','F'],['A','B','C','D','E','F']),true);
});

test('SAA exams reject true/false, nonstandard option counts, fill and malformed keys',async()=>{
  const {isSaaExamQuestion}=await import('../site/assets/saa-exam-policy.mjs');
  for(const [answers,options,kind] of [
    [['A'],['A','B']],
    [['B'],['A','B','C']],
    [['A'],['A','B','C','D','E']],
    [['A','B'],['A','B','C','D']],
    [['A'],['A','B','C','D'],'fill'],
    [[],['A','B','C','D']],
    [['Z'],['A','B','C','D']],
    [['A','A'],['A','B','C','D','E']],
    [['A'],['A','B','C','C']],
  ]) assert.equal(isSaaExamQuestion(answers,options,kind),false,JSON.stringify({answers,options,kind}));
});

import test from 'node:test';
import assert from 'node:assert/strict';
import {parseWeeklyStudy,formatWeeklyTime} from '../site/assets/weekly-study.mjs';

test('weekly format supports more than 24 hours without changing the daily formatter',()=>{
  assert.equal(formatWeeklyTime(25*3600000+62000),'25:01:02');
  assert.equal(formatWeeklyTime(604800000),'168:00:00');
  assert.equal(formatWeeklyTime(-1),'00:00:00');
  assert.equal(formatWeeklyTime(NaN),'00:00:00');
});
test('weekly response parser rejects malformed, excessive and inconsistent values',()=>{
  const value={totalMs:1000,weekStart:1000000,resetsAt:605800000,serverNow:1001000};
  assert.deepEqual(parseWeeklyStudy(value),value);
  for(const invalid of [null,{}, {...value,totalMs:-1},{...value,totalMs:604800001},{...value,totalMs:'1000'},{...value,resetsAt:123},{...value,serverNow:999999},{...value,serverNow:605800000}])assert.throws(()=>parseWeeklyStudy(invalid));
});

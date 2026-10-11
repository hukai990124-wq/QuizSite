import test from 'node:test';
import assert from 'node:assert/strict';
import { advanceStudyTime, formatStudyTime, studyDay, parseStudyTime } from '../site/assets/study-time.mjs';

test('study time is formatted as hours, minutes and seconds', () => {
  assert.equal(formatStudyTime(0), '00:00:00');
  assert.equal(formatStudyTime(3661000), '01:01:01');
  assert.equal(formatStudyTime(-1), '00:00:00');
});
test('visible intervals accumulate and overlapping tabs are counted once', () => {
  const start = new Date(2026, 9, 12, 10).getTime();
  const first = advanceStudyTime(null, start, start + 1000);
  assert.equal(first.totalMs, 1000);
  const overlap = advanceStudyTime(first, start, start + 1000);
  assert.equal(overlap.totalMs, 1000);
  const next = advanceStudyTime(overlap, start + 500, start + 1500);
  assert.equal(next.totalMs, 1500);
  const afterPause = advanceStudyTime(next, start + 10000, start + 11000);
  assert.equal(afterPause.totalMs, 2500);
});
test('local midnight starts a new day and only credits the new-day interval', () => {
  const midnight = new Date(2026, 9, 13).getTime();
  const old = advanceStudyTime(null, midnight - 2000, midnight - 1000);
  const today = advanceStudyTime(old, midnight - 1000, midnight + 500);
  assert.equal(today.day, studyDay(midnight));
  assert.equal(today.totalMs, 500);
});
test('suspended timers and backwards clocks do not inflate study time', () => {
  const start = new Date(2026, 9, 12, 10).getTime();
  const first = advanceStudyTime(null, start, start + 1000);
  assert.equal(advanceStudyTime(first, start + 1000, start).totalMs, 1000);
  assert.equal(advanceStudyTime(first, start + 1000, start + 61000).totalMs, 6000);
});
test('malformed or oversized stored values are ignored, and valid values survive reload', () => {
  assert.equal(parseStudyTime('not-json'), null);
  assert.equal(parseStudyTime('{"day":"2026-10-12","totalMs":-1,"lastEnd":0}'), null);
  assert.equal(parseStudyTime('{"day":"2026-10-12","totalMs":999999999,"lastEnd":0}'), null);
  const state = advanceStudyTime(null, Date.now() - 1000, Date.now());
  assert.deepEqual(parseStudyTime(JSON.stringify(state)), state);
});

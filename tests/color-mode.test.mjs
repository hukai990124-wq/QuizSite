import test from 'node:test';
import assert from 'node:assert/strict';
import { colorModeAt, nextColorBoundary } from '../site/assets/color-mode.mjs';

test('automatic appearance changes exactly at local 08:00 and 18:00 including midnight', () => {
  for (const [hour, minute, expected] of [[0,0,'dark'],[7,59,'dark'],[8,0,'light'],[17,59,'light'],[18,0,'dark'],[23,59,'dark']]) {
    assert.equal(colorModeAt('auto', new Date(2026, 9, 25, hour, minute)), expected);
  }
});

test('manual appearance persists across the automatic boundaries', () => {
  assert.equal(colorModeAt('light', new Date(2026,9,25,23)), 'light');
  assert.equal(colorModeAt('dark', new Date(2026,9,25,12)), 'dark');
});

test('the next boundary is computed in local calendar time across midnight', () => {
  for (const [hour, day, expectedHour] of [[7,25,8],[8,25,18],[18,26,8],[23,26,8]]) {
    const next = nextColorBoundary(new Date(2026,9,25,hour));
    assert.equal(next.getDate(), day);
    assert.equal(next.getHours(), expectedHour);
    assert.equal(next.getMinutes(), 0);
  }
});

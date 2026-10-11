import test from 'node:test';
import assert from 'node:assert/strict';
import {readFileSync} from 'node:fs';

test('back-to-top has a strict TypeScript source and keeps its browser module URL', () => {
  const root = new URL('../', import.meta.url);
  const source = readFileSync(new URL('src/back-to-top.mts', root), 'utf8');
  const output = readFileSync(new URL('site/assets/back-to-top.mjs', root), 'utf8');
  assert.match(source, /scrollPosition: number/);
  assert.match(output, /export function shouldShowBackToTop/);
  const config = JSON.parse(readFileSync(new URL('tsconfig.json', root)));
  assert.equal(config.compilerOptions.strict, true);
  assert.equal(config.compilerOptions.noEmitOnError, true);
});

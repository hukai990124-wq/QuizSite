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
test('shared navigation and matching UI are built from TypeScript at unchanged asset URLs', () => {
  for (const [source, output] of [['quizbank-theme.ts','quizbank-theme.js'],['aif-hotspots.mts','aif-hotspots.mjs']]) {
    assert.ok(readFileSync(new URL('../src/'+source, import.meta.url),'utf8').length > 100);
    assert.ok(readFileSync(new URL('../site/assets/'+output, import.meta.url),'utf8').length > 100);
  }
  const theme = readFileSync(new URL('../site/assets/quizbank-theme.js', import.meta.url),'utf8');
  assert.doesNotMatch(theme, /\bexports\b|\brequire\(/, 'classic script must not contain CommonJS exports');
});

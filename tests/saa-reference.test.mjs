import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { groups } from '../question-banks/aws-saa/reference-data.mjs';
import { matchesReference } from '../site/assets/saa-reference.mjs';

const scope = JSON.parse(readFileSync(new URL('../question-banks/aws-saa/reference-scope.json', import.meta.url), 'utf8'));
const page = readFileSync(new URL('../site/aws-saa/reference.html', import.meta.url), 'utf8');
const entries = groups.flatMap(group => group.entries);
const esc = value => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#39;');

test('SAA reference covers the complete checked official service list once and has substantive Chinese explanations', () => {
  assert.equal(scope.services.length, 118);
  assert.deepEqual(entries.filter(entry => entry.kind === 'service').map(entry => entry.name).sort(), [...scope.services].sort());
  assert.equal(new Set(entries.map(entry => entry.id)).size, entries.length);
  assert.equal(new Set(groups.map(group => group.id)).size, groups.length);
  for (const entry of entries) {
    assert.match(entry.id, /^[a-z][a-z0-9-]+$/);
    assert.ok(['service', 'term'].includes(entry.kind));
    for (const field of ['purpose', 'functions', 'distinction']) {
      assert.ok(entry[field].trim(), `${entry.id}: ${field}`);
      assert.match(entry[field], /\p{Script=Han}/u, `${entry.id}: ${field} should explain the concept in Chinese`);
      assert.doesNotMatch(entry[field], /[\u3040-\u30ff]|TODO|待补充/u, entry.id);
    }
    const source = new URL(entry.source);
    assert.equal(source.protocol, 'https:');
    assert.ok(['aws.amazon.com', 'docs.aws.amazon.com'].includes(source.hostname), entry.id);
    assert.ok(page.includes(`id="${entry.id}"`), entry.id);
    for (const field of ['name', 'alias', 'purpose', 'functions', 'distinction']) assert.ok(page.includes(esc(entry[field])), `${entry.id}: rendered ${field}`);
  }
});

test('reference is readable static content, linked separately from scored practice, and records retired-service distinctions', () => {
  const index = readFileSync(new URL('../site/aws-saa/index.html', import.meta.url), 'utf8');
  assert.match(index, /href="reference\.html"/);
  assert.equal((page.match(/<article class="ref-entry"/g) || []).length, entries.length);
  assert.doesNotMatch(page, /data-ans=|data-quiz-group=|class="q"|quizkit|quiz:aws:|id="btn-report"/);
  assert.match(page, /2025-11-13/);
  assert.match(page, /不向新客户提供 Snowball Edge 设备/u);
  assert.match(page, /2026-12-31/u);
  assert.match(page, /id="quizsite-theme-js"/);
});

test('reference search normalizes case and full-width input and intersects query, category and kind', () => {
  const record = { category: 'network', kind: 'term', text: 'Gateway Endpoint 网关端点 S3 / DynamoDB 私有路径' };
  assert.equal(matchesReference(record, { query: 'ｓ３ 私有' }), true);
  assert.equal(matchesReference(record, { query: 'gateway-endpoint' }), true);
  assert.equal(matchesReference(record, { query: 's3', category: 'network', kind: 'term' }), true);
  assert.equal(matchesReference(record, { query: 'S3 不存在' }), false);
  assert.equal(matchesReference(record, { category: 'storage' }), false);
  assert.equal(matchesReference(record, { kind: 'service' }), false);
  assert.equal(matchesReference(record, { query: '  ' }), true);
});

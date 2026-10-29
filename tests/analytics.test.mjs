import test from 'node:test';
import assert from 'node:assert/strict';
import { installAnalytics } from '../site/assets/analytics.mjs';

test('installs the Cloudflare beacon once, including when a beacon already exists', () => {
  const scripts = [];
  const doc = {
    querySelector() { return scripts.find(script => script.src.startsWith('https://static.cloudflareinsights.com/beacon.min.js')) ?? null; },
    createElement() { return { setAttribute(name, value) { this[name] = value; } }; },
    head: { appendChild(script) { scripts.push(script); } },
  };
  installAnalytics(doc);
  installAnalytics(doc);
  assert.equal(scripts.length, 1);
  assert.equal(scripts[0].type, 'module');
  assert.equal(scripts[0].src, 'https://static.cloudflareinsights.com/beacon.min.js');
  assert.equal(JSON.parse(scripts[0]['data-cf-beacon']).token, '51b4c2403a524bc4915ab3b3b388c13a');
});

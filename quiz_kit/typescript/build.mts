import { createHash } from 'node:crypto';
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname, isAbsolute, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { banks } from './banks.mjs';
import layouts from './layouts.mjs';
import { renderBanks } from './render.mjs';
import type { MigrationInventory } from './model.mjs';

const root = fileURLToPath(new URL('../../../..', import.meta.url));
const args = process.argv.slice(2);
for (let index = 0; index < args.length; index++) {
  if (['--out-dir', '--bank'].includes(args[index]!)) {
    if (!args[index + 1] || args[index + 1]!.startsWith('--')) throw new Error(`${args[index]} requires a value`);
    index++;
  } else if (!['--check', '--verify-migration'].includes(args[index]!)) throw new Error(`Unknown argument: ${args[index]}`);
}
const bankIndex = args.indexOf('--bank');
const selected = bankIndex >= 0 ? banks.filter(bank => bank.id === args[bankIndex + 1]) : banks;
if (!selected.length) throw new Error(`Unknown bank: ${args[bankIndex + 1]}`);
const destinationIndex = args.indexOf('--out-dir');
if (destinationIndex >= 0 && !args[destinationIndex + 1]) throw new Error('--out-dir requires a directory');
const destination = resolve(destinationIndex >= 0 ? args[destinationIndex + 1]! : join(root, 'site'));
if (!isAbsolute(destination)) throw new Error('Expected an absolute output directory');
const rendered = renderBanks(selected, layouts);
const outputs = new Map<string, Uint8Array>();
for (const [path, html] of rendered) outputs.set(path, Buffer.from(html, 'utf8'));
for (const bank of selected) for (const file of bank.dataFiles) {
  outputs.set(file.path, await readFile(join(root, file.source)));
}

if (args.includes('--verify-migration')) {
  const inventory = JSON.parse(await readFile(join(root, 'question-banks/migration-inventory.json'), 'utf8')) as MigrationInventory;
  for (const bank of inventory.banks.filter(bank => selected.some(value => value.id === bank.id))) for (const expected of [...bank.pages, ...bank.dataFiles]) {
    const value = outputs.get(expected.path);
    if (!value || createHash('sha256').update(value).digest('hex') !== expected.sha256) {
      throw new Error(`Migration changed original content: ${expected.path}`);
    }
  }
  console.log('All original page and data fingerprints match.');
}

if (args.includes('--check')) {
  for (const [path, value] of outputs) {
    const actual = await readFile(join(destination, path));
    if (!Buffer.from(value).equals(actual)) throw new Error(`Published output differs: ${path}`);
  }
  console.log(`Verified ${outputs.size} published files against TypeScript sources.`);
} else {
  // Reading and rendering all sources above must succeed before publishing starts.
  for (const [path, value] of outputs) {
    const target = join(destination, path);
    await mkdir(dirname(target), { recursive: true });
    await writeFile(target, value);
  }
  console.log(`Published ${selected.length} banks: ${selected.reduce((n, bank) => n + bank.pages.length, 0)} HTML pages and ${outputs.size - selected.reduce((n, bank) => n + bank.pages.length, 0)} data files.`);
}

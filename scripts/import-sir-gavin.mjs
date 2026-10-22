import { readFile, writeFile, mkdir, copyFile } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const source = process.argv[2];
if (!source) throw new Error('Usage: node scripts/import-sir-gavin.mjs <WebPet directory>');
const destination = new URL('../site/knight/media/', import.meta.url);
await mkdir(destination, { recursive: true });
const model = await readFile(join(resolve(source), 'sir_gavin.glb'));
if (model.readUInt32LE(0) !== 0x46546c67 || model.readUInt32LE(4) !== 2) {
  throw new Error('Expected a glTF 2 GLB model');
}
const jsonLength = model.readUInt32LE(12);
const document = JSON.parse(model.subarray(20, 20 + jsonLength).toString('utf8'));
const binary = model.subarray(28 + jsonLength);
const chunks = [];
let parts = [];
let length = 0;
function finishChunk() {
  if (!parts.length) return;
  chunks.push(Buffer.concat(parts, length));
  parts = [];
  length = 0;
}
for (const view of document.bufferViews) {
  if (view.byteLength > 20 * 1024 * 1024) throw new Error('Buffer view exceeds asset limit');
  const padding = (4 - length % 4) % 4;
  if (length + padding + view.byteLength > 20 * 1024 * 1024) finishChunk();
  const alignment = (4 - length % 4) % 4;
  if (alignment) {
    parts.push(Buffer.alloc(alignment));
    length += alignment;
  }
  const originalOffset = view.byteOffset || 0;
  parts.push(binary.subarray(originalOffset, originalOffset + view.byteLength));
  view.buffer = chunks.length;
  view.byteOffset = length;
  length += view.byteLength;
}
finishChunk();
document.buffers = chunks.map((chunk, index) => ({ uri: `sir-gavin-${index}.bin`, byteLength: chunk.length }));
for (const [index, chunk] of chunks.entries()) {
  await writeFile(new URL(`sir-gavin-${index}.bin`, destination), chunk);
}
await writeFile(new URL('sir-gavin.gltf', destination), JSON.stringify(document));
for (const name of ['sir-gavin-handshake.wav', 'wp4096204.jpg']) {
  await copyFile(join(resolve(source), name), new URL(name, destination));
}
console.log(`Imported Sir.Gavin with ${chunks.length} lossless binary chunks; no other character assets copied.`);

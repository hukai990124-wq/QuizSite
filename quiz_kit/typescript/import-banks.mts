/** One-time, explicit import of the existing site. Normal builds never run this. */
import { createHash } from 'node:crypto';
import { mkdir, readFile, readdir, writeFile, access } from 'node:fs/promises';
import { join, relative, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { parse } from 'parse5';
import type { DefaultTreeAdapterMap } from 'parse5';
import type { Choice, Layout, LayoutPart, MigrationInventory, Question, QuestionBank, QuizPage } from './model.mjs';
import { renderBanks } from './render.mjs';

type Element = DefaultTreeAdapterMap['element'];
type Node = DefaultTreeAdapterMap['node'];
interface Replacement { start: number; end: number; part: LayoutPart }
const root = fileURLToPath(new URL('../../../..', import.meta.url));
const bankNames = ['aws-aif', 'aws-aip', 'aws-clf', 'aws-mla', 'aws-saa', 'dele-a1', 'dele-a2', 'fe', 'java-bronze', 'programming', 'toeic-listening', 'toeic-reading', 'workbuddy-opc'];
const layouts: Record<string, Layout> = {};
const digest = (text: string | Uint8Array): string => createHash('sha256').update(text).digest('hex');
const slash = (path: string): string => path.split(sep).join('/');

function elements(node: Node): Element[] {
  const result: Element[] = [];
  if ('tagName' in node) result.push(node);
  if ('childNodes' in node) for (const child of node.childNodes) result.push(...elements(child));
  return result;
}

function hasClass(node: Element, name: string): boolean {
  return (node.attrs.find(attr => attr.name === 'class')?.value ?? '').split(/\s+/).includes(name);
}

function bounds(node: Element): { start: number; end: number } {
  const location = node.sourceCodeLocation;
  if (!location) throw new Error(`Element has no original source span: ${node.tagName}`);
  return { start: location.startOffset, end: location.endOffset };
}

function inner(node: Element): { start: number; end: number } | null {
  const location = node.sourceCodeLocation;
  if (!location?.startTag || !location.endTag) return null;
  return { start: location.startTag.endOffset, end: location.endTag.startOffset };
}

function intern(parts: LayoutPart[], prefix: string): string {
  const id = `${prefix}-${digest(JSON.stringify(parts)).slice(0, 20)}`;
  if (layouts[id] && JSON.stringify(layouts[id]) !== JSON.stringify(parts)) throw new Error('Layout hash collision');
  layouts[id] = parts;
  return id;
}

function fragment(html: string, start: number, end: number, replacements: Replacement[], prefix: string): string {
  const parts: LayoutPart[] = [];
  let cursor = start;
  for (const replacement of replacements.sort((a, b) => a.start - b.start)) {
    if (replacement.start < cursor || replacement.end > end) throw new Error(`Overlapping ${prefix} content`);
    if (replacement.start > cursor) parts.push(html.slice(cursor, replacement.start));
    parts.push(replacement.part);
    cursor = replacement.end;
  }
  if (cursor < end) parts.push(html.slice(cursor, end));
  return intern(parts, prefix);
}

function attribute(html: string, node: Element, name: string): { start: number; end: number; value: string } | null {
  const location = node.sourceCodeLocation?.attrs?.[name];
  if (!location) return null;
  const raw = html.slice(location.startOffset, location.endOffset);
  const match = /^[^=]+?=\s*(["'])([\s\S]*)\1$/.exec(raw);
  const bare = /^[^=]+?=\s*([^\s]+)$/.exec(raw);
  const value = match?.[2] ?? bare?.[1];
  if (value === undefined) throw new Error(`Unsupported ${name} attribute: ${raw}`);
  const start = location.endOffset - value.length - (match ? 1 : 0);
  return { start, end: start + value.length, value };
}

function extractChoice(html: string, node: Element): Choice {
  const replacements: Replacement[] = [];
  const content: Record<string, string> = {};
  const letterAttribute = attribute(html, node, 'data-letter');
  let letter = letterAttribute?.value ?? '';
  if (letterAttribute) replacements.push({ ...letterAttribute, part: { slot: 'letter' } });
  for (const attr of node.attrs) {
    if (attr.name === 'data-letter' || !['title', 'aria-label'].includes(attr.name) && !attr.name.startsWith('data-')) continue;
    const value = attribute(html, node, attr.name);
    if (!value) continue;
    const key = `attribute.${attr.name}`;
    content[key] = value.value;
    replacements.push({ ...value, part: { slot: key } });
  }
  let fieldIndex = 0;
  const candidates = elements(node).filter(child => child !== node && (hasClass(child, 'letter') || hasClass(child, 'otext') || hasClass(child, 'otxt') || child.tagName === 'img'));
  const selected: { start: number; end: number }[] = [];
  for (const child of candidates) {
    const range = child.tagName === 'img' ? bounds(child) : inner(child);
    if (!range || selected.some(span => range.start >= span.start && range.end <= span.end)) continue;
    selected.push(range);
    const value = html.slice(range.start, range.end);
    if (hasClass(child, 'letter') && (!letter || value === letter)) {
      letter = value;
      replacements.push({ ...range, part: { slot: 'letter' } });
    } else {
      const key = `${child.tagName === 'img' ? 'image' : hasClass(child, 'otext') || hasClass(child, 'otxt') ? 'text' : 'label'}.${fieldIndex++}`;
      content[key] = value;
      replacements.push({ ...range, part: { slot: key } });
    }
  }
  const range = bounds(node);
  return { letter, layout: fragment(html, range.start, range.end, replacements, 'choice'), content };
}

function extractQuestion(html: string, node: Element): Question {
  const replacements: Replacement[] = [];
  const question: Question = { id: '', number: '', answer: '', kind: '', layout: '', content: {}, choices: [], answerLabels: {} };
  for (const [name, field] of [['id', 'id'], ['data-n', 'number'], ['data-ans', 'answer'], ['data-kind', 'kind']] as const) {
    const value = attribute(html, node, name);
    if (!value) continue;
    question[field] = value.value;
    replacements.push({ ...value, part: { slot: field } });
  }
  // Extra per-question metadata (chat context, stable review IDs, etc.) is data too.
  for (const attr of node.attrs) {
    if (!attr.name.startsWith('data-') || ['data-n', 'data-ans', 'data-kind'].includes(attr.name)) continue;
    const value = attribute(html, node, attr.name);
    if (!value) continue;
    const key = `attribute.${attr.name}`;
    question.content[key] = value.value;
    replacements.push({ ...value, part: { slot: key } });
  }
  const children = elements(node).filter(child => child !== node);
  const choices = children.filter(child => hasClass(child, 'opt'));
  for (const child of choices) {
    const range = bounds(child);
    const index = question.choices.length;
    question.choices.push(extractChoice(html, child));
    replacements.push({ ...range, part: { slot: `choice.${index}` } });
  }
  const fields = ['qhead', 'qhd', 'stem', 'correct', 'expl', 'anbody', 'aud', 'source', 'noticebox', 'hothint'];
  const selected: { start: number; end: number }[] = choices.map(bounds);
  // Answer labels are derived from the same answer as scoring. Updating an answer
  // must not leave a stale reference answer visible in its explanation.
  for (const block of children.filter(child => ['correct', 'anbody', 'expl'].some(name => hasClass(child, name)))) {
    const range = inner(block);
    const label = elements(block).find(child => child !== block && (child.tagName === 'b' || hasClass(child, 'k')));
    const labelRange = label && inner(label);
    if (!range || !label || !labelRange || !question.answer) continue;
    const raw = html.slice(labelRange.start, labelRange.end);
    let slot: string | undefined;
    if (raw === question.answer) slot = 'answer';
    else for (const separator of [', ', ',', '、', ' / ']) {
      for (const suffix of ['', '.', '。', ')']) {
        if (question.answer.split(',').map(value => value.trim()).join(separator) + suffix !== raw) continue;
        slot = `answer.label.${Object.keys(question.answerLabels).length}`;
        question.answerLabels[slot] = { separator, suffix };
        break;
      }
      if (slot) break;
    }
    if (!slot) continue;
    replacements.push({ ...labelRange, part: { slot } });
    selected.push(range);
    if (!hasClass(block, 'correct')) {
      const end = bounds(label).end;
      const key = `explanation.${Object.keys(question.content).length}`;
      question.content[key] = html.slice(end, range.end);
      replacements.push({ start: end, end: range.end, part: { slot: key } });
    }
  }
  const hasDetailedAnswer = children.some(child => hasClass(child, 'expl') || hasClass(child, 'correct') || hasClass(child, 'anbody'));
  for (const child of children) {
    const field = fields.find(name => hasClass(child, name)) ?? (!hasDetailedAnswer && hasClass(child, 'ans') ? 'answerHtml' : undefined);
    if (!field) continue;
    const range = inner(child);
    if (!range || selected.some(span => range.start >= span.start && range.end <= span.end)) continue;
    selected.push(range);
    let key = field;
    for (let count = 1; Object.hasOwn(question.content, key); count++) key = `${field}.${count}`;
    question.content[key] = html.slice(range.start, range.end);
    replacements.push({ ...range, part: { slot: key } });
  }
  const range = bounds(node);
  question.layout = fragment(html, range.start, range.end, replacements, 'question');
  return question;
}

function extractPage(html: string, path: string): QuizPage {
  const all = elements(parse(html, { sourceCodeLocationInfo: true }));
  const questionNodes = all.filter(node => hasClass(node, 'q'));
  const questions = questionNodes.map(node => extractQuestion(html, node));
  const questionSpans = questionNodes.map(bounds);
  const replacements: Replacement[] = questionSpans.map((span, index) => ({ ...span, part: { slot: `question.${index}` } }));
  const page: QuizPage = { path, layout: '', content: {}, questions };
  const selected = [...questionSpans];
  let scriptIndex = 0;
  for (const node of all) {
    if (!node.sourceCodeLocation || !['script', 'style'].includes(node.tagName)) continue;
    const range = bounds(node);
    if (selected.some(span => range.start >= span.start && range.end <= span.end)) continue;
    selected.push(range);
    const config: Replacement[] = [];
    const bindings: Record<string, string> = {};
    const source = html.slice(range.start, range.end);
    if (node.tagName === 'script') {
      // Per-paper configuration is data; the scoring and i18n code is shared.
      const declaration = /\bvar (KEY|STORE|REL)="([^"]*)";|\bvar (TOTAL)=(\d+);/g;
      for (const match of source.matchAll(declaration)) {
        const field = match[1] ?? match[3]!;
        const value = match[2] ?? match[4]!;
        const offset = match.index + match[0].indexOf('=') + 1 + (match[1] ? 1 : 0);
        const key = `script.${scriptIndex++}.${field}`;
        const slot = `${field}.${Object.keys(bindings).length}`;
        page.content[key] = value;
        bindings[slot] = key;
        config.push({ start: range.start + offset, end: range.start + offset + value.length, part: { slot } });
      }
    }
    const layout = fragment(html, range.start, range.end, config, node.tagName);
    replacements.push({ ...range, part: Object.keys(bindings).length ? { layout, bindings } : { layout } });
  }
  // Page text and grouped reading/listening material remain content. Capture an
  // outer eligible block once, leaving its tags and the document skeleton in layouts.
  const textTags = new Set(['title', 'h1', 'h2', 'h3', 'h4', 'p', 'table', 'figure', 'audio']);
  let fieldIndex = 0;
  for (const node of all) {
    if (!node.sourceCodeLocation || !textTags.has(node.tagName)) continue;
    const range = inner(node);
    if (!range || selected.some(span => range.start < span.end && range.end > span.start)) continue;
    selected.push(range);
    const key = `${node.tagName}.${fieldIndex++}`;
    page.content[key] = html.slice(range.start, range.end);
    replacements.push({ ...range, part: { slot: key } });
  }
  page.layout = fragment(html, 0, html.length, replacements, 'page');
  return page;
}

async function files(directory: string): Promise<string[]> {
  const result: string[] = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const path = join(directory, entry.name);
    if (entry.isDirectory()) result.push(...await files(path));
    else if (entry.isFile()) result.push(path);
  }
  return result.sort();
}

if (!process.argv.includes('--from-existing-site')) throw new Error('Importer requires --from-existing-site; it is not a build command');
const marker = join(root, 'question-banks', 'migration-inventory.json');
try { await access(marker); throw new Error('Bank sources already exist. Import is deliberately one-time.'); }
catch (error) { if (!(error instanceof Error) || !('code' in error) || error.code !== 'ENOENT') throw error; }

const banks: QuestionBank[] = [];
const inventory: MigrationInventory = { version: 1, banks: [] };
for (const id of bankNames) {
  const bank: QuestionBank = { id, title: id, pages: [], dataFiles: [] };
  const pages: QuizPage[] = [];
  const dataFiles: { source: string; path: string }[] = [];
  const record: MigrationInventory['banks'][number] = { id, pages: [], dataFiles: [] };
  for (const path of await files(join(root, 'site', id))) {
    const output = slash(relative(join(root, 'site'), path));
    if (path.endsWith('.html')) {
      const bytes = await readFile(path);
      const html = bytes.toString('utf8');
      const page = extractPage(html, output);
      pages.push(page);
      record.pages.push({ path: output, sha256: digest(bytes), questions: page.questions.map(({ id, number, answer, kind }) => ({ id, number, answer, kind })) });
    } else if (id === 'fe' && path.endsWith('.json')) {
      const source = `question-banks/fe/content/${output.slice(3)}`;
      dataFiles.push({ source, path: output });
      const bytes = await readFile(path);
      await mkdir(join(root, 'question-banks/fe/content'), { recursive: true });
      await writeFile(join(root, source), bytes);
      record.dataFiles.push({ path: output, sha256: digest(bytes) });
    }
  }
  banks.push({ ...bank, pages, dataFiles });
  inventory.banks.push(record);
}

// Losslessness is checked before any HTML output is replaced or removed.
const outputs = renderBanks(banks, layouts);
for (const bank of inventory.banks) for (const page of bank.pages) {
  if (digest(outputs.get(page.path)!) !== page.sha256) throw new Error(`Round trip changed ${page.path}`);
}

for (const bank of banks) {
  const directory = join(root, 'question-banks', bank.id);
  await writeFile(join(directory, 'pages.json'), JSON.stringify(bank.pages, null, 2) + '\n');
  const validation = bank.id === 'fe' ? `import official from './content/data.json' with { type: 'json' };\nimport extra from './content/extra.json' with { type: 'json' };\nimport materials from './content/chat-materials.json' with { type: 'json' };\nimport { validateFeData } from '../../quiz_kit/typescript/fe-data.mjs';\nvalidateFeData(official, materials);\nvalidateFeData(extra, materials);\n` : '';
  await writeFile(join(directory, 'bank.mts'), `import pages from './pages.json' with { type: 'json' };\nimport { defineBank } from '../../quiz_kit/typescript/define-bank.mjs';\nimport type { QuestionBank } from '../../quiz_kit/typescript/model.mjs';\n${validation}\nexport default defineBank({\n  id: ${JSON.stringify(bank.id)},\n  title: ${JSON.stringify(bank.title)},\n  pages,\n  dataFiles: ${JSON.stringify(bank.dataFiles, null, 2)},\n}) satisfies QuestionBank;\n`);
}
await writeFile(join(root, 'quiz_kit/typescript/layouts.mts'), `// Imported reusable markup. Edit question content in question-banks/*/pages.json.\nimport type { Layouts } from './model.mjs';\n\nconst layouts: Layouts = ${JSON.stringify(layouts, null, 2)};\n\nexport default layouts;\n`);
await writeFile(marker, JSON.stringify(inventory, null, 2) + '\n');
console.log(`Imported ${banks.length} banks, ${banks.reduce((n, bank) => n + bank.pages.length, 0)} pages, ${banks.reduce((n, bank) => n + bank.pages.reduce((sum, page) => sum + page.questions.length, 0), 0)} questions, ${Object.keys(layouts).length} shared layouts; all page hashes match.`);

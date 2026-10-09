// Import the pinned, MIT-licensed original bank; no network or browser globals.
const fs = require('node:fs');
const path = require('node:path');
const vm = require('node:vm');
const crypto = require('node:crypto');
const {execFileSync} = require('node:child_process');
const source = path.resolve(process.argv[2] || '../toeic-question-ocean');
const revision = 'a940bb8b479ef4d06af468015d757041c3d2e457';
if (execFileSync('git', ['-C', source, 'rev-parse', 'HEAD'], {encoding:'utf8'}).trim() !== revision) {
  throw new Error('Use the documented pinned source revision.');
}
const index = fs.readFileSync(path.join(source, 'index.html'), 'utf8');
const files = [...index.matchAll(/src="\.\/(question-bank[^"?]*\.js)(?:\?[^" ]*)?"/g)].map(m => m[1]);
const sandbox = vm.createContext({window:{BUILTIN_BANK:[]}}, {codeGeneration:{strings:false, wasm:false}});
for (const file of files) {
  vm.runInContext(fs.readFileSync(path.join(source, file), 'utf8'), sandbox, {timeout:1000});
}
const bank = JSON.parse(JSON.stringify(sandbox.window.BUILTIN_BANK));
// A reviewed adaptation adds closer action/state distractors to the printer photo.
const printer = bank.find(q => q.id === 'P1-006');
printer.choices = [
  'An office machine is being operated using a touch screen.',
  'A drawer beneath the control panel is being pulled open.',
  'Some sheets are being fed into an automatic document feeder.',
  'The machine is being wheeled away from the wall.'
];
printer.answer = 0;
printer.difficulty = '600';
printer.explanation = '男子的手指正触碰机器的控制屏。纸盒并未拉开，也没有送纸或移动机器的动作；后三项用常见办公动作作为干扰。此题为基于原许可图片的改编。';
printer.answerTranslation = '一台办公设备正通过触摸屏操作。';
const groups = part => Object.values(Object.groupBy(bank.filter(q => q.part === part), q => q.groupId));
const photos = bank.filter(q => q.part === '1' && q.imageOrigin === 'ai-generated');
const responses = bank.filter(q => q.part === '2');
const conversations = groups('3').filter(g => g.length === 3);
const talks = groups('4').filter(g => g.length === 3);
function select(pool, count, testIndex) {
  const score = q => Array.isArray(q) ? Math.max(...q.map(x => Number(x.difficulty))) : Number(q.difficulty);
  const eligible = pool.filter(q => score(q) >= 600).sort((a, b) => score(b) - score(a));
  if (eligible.length < count * 2) throw new Error('Insufficient intermediate/advanced items.');
  return eligible.slice(0, count * 2).filter((q, i) => i % 2 === testIndex);
}
if (photos.length < 12 || responses.length < 50 || conversations.length < 26 || talks.length < 20) {
  throw new Error('Insufficient distinct questions for two standard tests.');
}
function question(q) {
  if (!q.explanation || !q.audioText || !Number.isInteger(q.answer) || !q.choices[q.answer]) {
    throw new Error('Incomplete question: ' + q.id);
  }
  // Rotate choices reproducibly; rebuild both the answer and spoken option order.
  const offset = crypto.createHash('sha256').update(q.id).digest()[0] % q.choices.length;
  const options = q.choices.slice(offset).concat(q.choices.slice(0, offset));
  return {sourceId:q.id, difficulty:q.difficulty, text:q.prompt, options,
    answer:(q.answer - offset + options.length) % options.length, exp:q.explanation};
}
const jobs = [];
const images = [];
const tests = [5, 6].map((mock, testIndex) => {
  const parts = {p1:[], p2:[], p3:[], p4:[]};
  function recording(part, ordinal, segments) {
    const audio = `audio/m${mock}/${part}-${ordinal}.mp3`;
    const number = part === 'p2' ? ordinal + 6 : ordinal;
    const accent = number % 2 ? 'en-GB' : 'en-US';
    jobs.push({audio, segments:segments.map(segment => ({...segment,
      accent:part === 'p3' ? (segment.speaker.startsWith('M') ? 'en-GB' : 'en-US') : accent}))});
    return audio;
  }
  select(photos, 6, testIndex).forEach((q, i) => {
    const normalized = question(q);
    const image = `img/ocean-${path.basename(q.image)}`;
    images.push({original:q.image, local:image, sourceId:q.id});
    parts.p1.push({...normalized, no:i + 1, img:image,
      scene:q.answerTranslation, statements:normalized.options,
      audio:recording('p1', i + 1, normalized.options.map((text, index) =>
        ({text:`${String.fromCharCode(65 + index)}. ${text}`, speaker:''})))});
  });
  select(responses, 25, testIndex).forEach((q, i) => {
    const normalized = question(q);
    parts.p2.push({...normalized, no:i + 7, prompt:q.audioText,
      audio:recording('p2', i + 1, [{text:q.audioText, speaker:''},
        ...normalized.options.map((text, index) => ({text:`${String.fromCharCode(65 + index)}. ${text}`, speaker:''}))])});
  });
  for (const [part, pool, count, start] of [['p3', conversations, 13, 32], ['p4', talks, 10, 71]]) {
    select(pool, count, testIndex).forEach((group, i) => {
      if (group.some(q => q.audioText !== group[0].audioText)) throw new Error('Inconsistent transcript');
      const text = group[0].audioText.replace(/^Speaker:\s*/i, '');
      const turns = [...text.matchAll(/\b([MW]\d?):\s*([\s\S]*?)(?=\s+\b[MW]\d?:|$)/g)]
        .map(match => ({speaker:match[1], text:match[2].trim()}));
      if (part === 'p3' && (!turns.length || turns.map(s => `${s.speaker}: ${s.text}`).join(' ').replace(/\s+/g, ' ') !== text.replace(/\s+/g, ' '))) {
        throw new Error('Unrecognized conversation: ' + group[0].id);
      }
      const segments = part === 'p3' ? turns : [{speaker:'', text}];
      parts[part].push({no:start + i * 3, graphic:null,
        script:part === 'p3' ? turns : [text], questions:group.map(question),
        audio:recording(part, i + 1, segments)});
    });
  }
  return {mock, parts, source:'TOEIC Question Ocean', sourceRevision:revision};
});
const dataDir = path.join(__dirname, 'data');
fs.mkdirSync(dataDir, {recursive:true});
fs.writeFileSync(path.join(dataDir, 'extra-tests.json'), JSON.stringify(tests, null, 2) + '\n');
fs.writeFileSync(path.join(dataDir, 'extra-audio-jobs.json'), JSON.stringify(jobs, null, 2) + '\n');
fs.writeFileSync(path.join(__dirname, 'LICENSE-OCEAN.txt'), fs.readFileSync(path.join(source, 'LICENSE')));
for (const image of images) {
  fs.copyFileSync(path.join(source, image.original), path.join(__dirname, image.local));
}
console.log(`Imported ${tests.length} tests, ${jobs.length} audio jobs, ${images.length} distinct original images.`);

// 把 toeicmocktests 的 raw content JS 汇成一个 dump（指定 mock 号，供新增套使用）。
// 用法：node dump_extra.js 5 6 7 8
const fs = require('fs'), path = require('path');
global.window = {};
const raw = path.join(__dirname, 'raw');
const mocks = process.argv.slice(2).map(Number).filter(n => n > 0);
if (!mocks.length) {
  console.error('usage: node dump_extra.js <mock> [mock...]');
  process.exit(2);
}
const out = {};
for (const m of mocks) {
  for (const tag of ['l12', 'l3', 'l4']) {
    const f = tag + '-m' + m + '.js';
    const p = path.join(raw, f);
    if (!fs.existsSync(p)) { console.error('missing: ' + f); process.exit(3); }
    window.TP_CONTENT = {};
    eval(fs.readFileSync(p, 'utf8'));
    out['m' + m + '.' + tag] = JSON.parse(JSON.stringify(window.TP_CONTENT));
  }
}
fs.writeFileSync(path.join(raw, '_dump_extra.json'), JSON.stringify(out, null, 2), 'utf8');
for (const k of Object.keys(out)) {
  for (const kk of Object.keys(out[k])) {
    const a = out[k][kk];
    console.log(k + ' | ' + kk + ' | items=' + (Array.isArray(a) ? a.length : '?'));
  }
}

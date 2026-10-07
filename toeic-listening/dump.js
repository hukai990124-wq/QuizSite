const fs = require('fs'), path = require('path');
global.window = {};
const raw = path.join(__dirname, 'raw');
const out = {};
for (const m of [1, 2, 3, 4]) {
  for (const tag of ['l12', 'l3', 'l4']) {
    const f = tag + '-m' + m + '.js';
    const code = fs.readFileSync(path.join(raw, f), 'utf8');
    window.TP_CONTENT = {};
    eval(code);
    out['m' + m + '.' + tag] = JSON.parse(JSON.stringify(window.TP_CONTENT));
  }
}
fs.writeFileSync(path.join(__dirname, 'raw', '_dump.json'), JSON.stringify(out, null, 2), 'utf8');
for (const k of Object.keys(out)) {
  for (const kk of Object.keys(out[k])) {
    const a = out[k][kk];
    console.log(k + ' | ' + kk + ' | items=' + (Array.isArray(a) ? a.length : '?'));
  }
}

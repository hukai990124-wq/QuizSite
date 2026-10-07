const fs = require('fs');
const path = require('path');
const dir = "C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/toeic-reading/raw/tmt";
const out = "C:/Users/75729/WorkBuddy/2026-10-05-22-16-32/toeic-reading/parsed/tmt_all.json";
global.window = {};
for (const f of fs.readdirSync(dir).filter(f => f.endsWith('.js'))) {
  const code = fs.readFileSync(path.join(dir, f), 'utf8');
  (0, eval)(code);
}
const C = window.TP_CONTENT;
const summary = {};
for (const k of Object.keys(C)) summary[k] = Array.isArray(C[k]) ? C[k].length : typeof C[k];
console.log(JSON.stringify(summary, null, 1));
fs.writeFileSync(out, JSON.stringify(C), 'utf8');
console.log("WROTE", out);

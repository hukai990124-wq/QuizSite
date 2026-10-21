const fs = require('fs'), path = require('path');
const d = JSON.parse(fs.readFileSync(path.join(__dirname, 'raw', '_dump.json'), 'utf8'));
function show(label, obj) {
  console.log('\n===== ' + label + ' =====');
  console.log(JSON.stringify(obj, null, 1).slice(0, 1600));
}
show('P1[0]', d['m1.l12']['lr.p1'][0]);
show('P2[0]', d['m1.l12']['lr.p2'][0]);
show('P3[0]', d['m1.l3']['lr.p3'][0]);
show('P4[0]', d['m1.l4']['lr.p4'][0]);

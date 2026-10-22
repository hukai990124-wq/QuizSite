const fields = ['identity', 'scope', 'style', 'rules'];
const labels = ['角色身份', '知识范围', '表达风格', '回答规则'];
const status = document.getElementById('status');
const save = document.getElementById('save');
const reload = document.getElementById('reload');
let revision;
let dirty = false;
function values() { return Object.fromEntries(fields.map(key => [key, document.getElementById(key).value])); }
function preview() { document.getElementById('preview').value = fields.map((key, index) => `${labels[index]}\n${values()[key]}`).join('\n\n'); }
async function api(method, body) {
  const response = await fetch('/api/prompt', {
    method,
    headers: { 'Content-Type': 'application/json', 'X-Editor-Token': document.querySelector('meta[name="editor-token"]').content },
    body: body ? JSON.stringify(body) : undefined,
  });
  const data = await response.json();
  if (!response.ok) throw new Error(data.error || '操作失败');
  return data;
}
async function load() {
  save.disabled = true;
  try {
    const data = await api('GET');
    for (const key of fields) {
      document.getElementById(key).value = data.prompt[key];
      document.getElementById(key).disabled = false;
    }
    revision = data.revision;
    dirty = false;
    preview();
    status.textContent = '已载入项目中的 Sir.Gavin 提示词。';
  } catch (error) { status.textContent = error.message; }
  finally { save.disabled = !revision; }
}
for (const key of fields) document.getElementById(key).addEventListener('input', () => {
  dirty = true;
  preview();
  status.textContent = '有未保存的修改。';
});
document.getElementById('prompt-form').addEventListener('submit', async event => {
  event.preventDefault();
  save.disabled = true;
  reload.disabled = true;
  for (const key of fields) document.getElementById(key).disabled = true;
  try {
    const data = await api('PUT', { prompt: values(), revision });
    revision = data.revision;
    dirty = false;
    status.textContent = '已保存到项目。重新构建并部署后才会影响线上 AI。';
  } catch (error) { status.textContent = error.message; }
  finally {
    save.disabled = false;
    reload.disabled = false;
    for (const key of fields) document.getElementById(key).disabled = false;
  }
});
reload.addEventListener('click', () => { if (!dirty || window.confirm('重新载入会丢弃未保存的修改，继续吗？')) load(); });
window.addEventListener('beforeunload', event => { if (dirty) { event.preventDefault(); event.returnValue = ''; } });
load();

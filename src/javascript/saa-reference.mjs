export function matchesReference(entry, { query = '', category = 'all', kind = 'all' } = {}) {
  if (category !== 'all' && entry.category !== category) return false;
  if (kind !== 'all' && entry.kind !== kind) return false;
  const normalize = value => value.normalize('NFKC').toLocaleLowerCase().replace(/[-_/]/g, ' ');
  const text = normalize(entry.text);
  return normalize(query).trim().split(/\s+/u).filter(Boolean).every(token => text.includes(token));
}

function mountReference() {
  const form = document.getElementById('reference-filter');
  if (!form) return;
  const search = document.getElementById('reference-search');
  const kind = document.getElementById('reference-kind');
  const result = document.getElementById('reference-result');
  const empty = document.getElementById('reference-empty');
  const sections = [...document.querySelectorAll('.ref-group')];
  const links = [...document.querySelectorAll('[data-category]')];
  const records = sections.flatMap(section => [...section.querySelectorAll('.ref-entry')].map(element => ({
    element, category: section.dataset.group, kind: element.dataset.kind, text: element.textContent,
  })));
  let category = 'all';
  function update() {
    let count = 0;
    for (const record of records) {
      const visible = matchesReference(record, { query: search.value, category, kind: kind.value });
      record.element.hidden = !visible;
      if (visible) count++;
    }
    for (const section of sections) section.hidden = !section.querySelector('.ref-entry:not([hidden])');
    for (const link of links) {
      const active = link.dataset.category === category;
      if (link.tagName === 'BUTTON') link.setAttribute('aria-pressed', String(active));
      else if (active) link.setAttribute('aria-current', 'true');
      else link.removeAttribute('aria-current');
    }
    result.textContent = `显示 ${count} / ${records.length} 条`;
    empty.hidden = count !== 0;
  }
  search.addEventListener('input', update);
  kind.addEventListener('change', update);
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    category = link.dataset.category;
    update();
  }));
  form.addEventListener('submit', event => event.preventDefault());
  form.addEventListener('reset', event => {
    event.preventDefault();
    search.value = '';
    kind.value = 'all';
    category = 'all';
    update();
    search.focus();
  });
  form.hidden = false;
  document.querySelector('.ref-all').hidden = false;
  update();
}

if (typeof document !== 'undefined') mountReference();

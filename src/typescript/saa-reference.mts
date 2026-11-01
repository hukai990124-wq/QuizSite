interface ReferenceEntry { category?: string; kind?: string; text: string }
interface ReferenceFilter { query?: string; category?: string; kind?: string }

export function matchesReference(entry: ReferenceEntry, { query = '', category = 'all', kind = 'all' }: ReferenceFilter = {}) {
  if (category !== 'all' && entry.category !== category) return false;
  if (kind !== 'all' && entry.kind !== kind) return false;
  const normalize = (value: string) => value.normalize('NFKC').toLocaleLowerCase().replace(/[-_/]/g, ' ');
  const text = normalize(entry.text);
  return normalize(query).trim().split(/\s+/u).filter(Boolean).every(token => text.includes(token));
}

function mountReference() {
  const form = document.getElementById('reference-filter');
  if (!form) return;
  const search = document.querySelector<HTMLInputElement>('#reference-search');
  const kind = document.querySelector<HTMLSelectElement>('#reference-kind');
  const result = document.getElementById('reference-result');
  const empty = document.getElementById('reference-empty');
  const sections = [...document.querySelectorAll<HTMLElement>('.ref-group')];
  const links = [...document.querySelectorAll<HTMLElement>('[data-category]')];
  const records = sections.flatMap(section => [...section.querySelectorAll<HTMLElement>('.ref-entry')].map(element => ({
    element, category: section.dataset.group, kind: element.dataset.kind, text: element.textContent ?? '',
  })));
  const all = document.querySelector<HTMLElement>('.ref-all');
  if (!search || !kind || !result || !empty || !all) return;
  const searchInput = search, kindInput = kind, resultOutput = result, emptyMessage = empty;
  let category = 'all';
  function update() {
    let count = 0;
    for (const record of records) {
      const visible = matchesReference(record, { query: searchInput.value, category, kind: kindInput.value });
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
    resultOutput.textContent = `显示 ${count} / ${records.length} 条`;
    emptyMessage.hidden = count !== 0;
  }
  search.addEventListener('input', update);
  kind.addEventListener('change', update);
  links.forEach(link => link.addEventListener('click', event => {
    event.preventDefault();
    category = link.dataset.category ?? 'all';
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
  all.hidden = false;
  update();
}

if (typeof document !== 'undefined') mountReference();

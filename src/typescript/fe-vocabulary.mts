export interface VocabularyWord {
  id: string; category: string; term: string; reading: string; english: string;
  meaning: string; hint: string; contrast: string;
}
type LearningStatus = 'review' | 'mastered';
type VocabularyState = Record<string, LearningStatus>;
interface VocabularyFilter { query?: string; category?: string; status?: string }
const storageKey = 'fe:vocabulary:v1';

export function readVocabularyState(raw: string): VocabularyState {
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== 'object' || Array.isArray(value)) return {};
    return Object.fromEntries(Object.entries(value).filter(([id, status]) =>
      /^fe-[a-z]+-\d{2}$/.test(id) && (status === 'review' || status === 'mastered')));
  } catch { return {}; }
}

export function matchesVocabulary(word: VocabularyWord, state: VocabularyState, filter: VocabularyFilter = {}): boolean {
  if (filter.category && filter.category !== 'all' && word.category !== filter.category) return false;
  if (filter.status && filter.status !== 'all' && (state[word.id] || 'unseen') !== filter.status) return false;
  const normalize = (text: string) => text.normalize('NFKC').toLocaleLowerCase();
  const text = normalize([word.term, word.reading, word.english, word.meaning, word.hint, word.contrast].join(' '));
  return normalize(filter.query || '').trim().split(/\s+/u).filter(Boolean).every(token => text.includes(token));
}

function element<T extends HTMLElement>(id: string): T {
  const result = document.getElementById(id);
  if (!result) throw new Error(`Missing vocabulary element: ${id}`);
  return result as T;
}

async function mountVocabulary(): Promise<void> {
  const loading = element('v-loading');
  const retry = element<HTMLButtonElement>('v-retry');
  retry.hidden = true;
  loading.textContent = '正在加载词汇……';
  let words: VocabularyWord[];
  try {
    const response = await fetch('vocabulary.json');
    if (!response.ok) throw new Error(`HTTP ${response.status}`);
    words = await response.json() as VocabularyWord[];
    if (!Array.isArray(words) || !words.length) throw new Error('词汇内容为空');
  } catch {
    loading.textContent = '词汇加载失败，请检查网络后重试。';
    retry.hidden = false;
    retry.onclick = () => { void mountVocabulary(); };
    return;
  }
  loading.hidden = true;
  element('v-workspace').hidden = false;
  const search = element<HTMLInputElement>('v-search');
  const category = element<HTMLSelectElement>('v-category');
  const status = element<HTMLSelectElement>('v-status');
  const direction = element<HTMLSelectElement>('v-direction');
  const flip = element<HTMLButtonElement>('v-flip');
  const review = element<HTMLButtonElement>('v-review');
  const mastered = element<HTMLButtonElement>('v-mastered');
  const prev = element<HTMLButtonElement>('v-prev');
  const next = element<HTMLButtonElement>('v-next');
  const notice = element('v-storage');
  const cardView = element<HTMLButtonElement>('v-card-view');
  const listView = element<HTMLButtonElement>('v-list-view');
  let state: VocabularyState = {};
  try { state = readVocabularyState(localStorage.getItem(storageKey) || '{}'); }
  catch { notice.hidden = false; }
  let order = [...words];
  let currentId = words[0].id;
  let revealed = false;
  let view = 'card';
  let filtered: VocabularyWord[] = [];
  for (const name of new Set(words.map(word => word.category))) {
    const option = document.createElement('option');
    option.value = name; option.textContent = name; category.append(option);
  }

  function paragraph(label: string, value: string): HTMLElement {
    const p = document.createElement('p');
    const strong = document.createElement('strong'); strong.textContent = `${label} `;
    p.append(strong, document.createTextNode(value));
    return p;
  }
  function render(): void {
    filtered = order.filter(word => matchesVocabulary(word, state, {
      query: search.value, category: category.value, status: status.value
    }));
    if (!filtered.some(word => word.id === currentId)) currentId = filtered[0]?.id || '';
    const index = filtered.findIndex(word => word.id === currentId);
    const word = filtered[index];
    const knownCount = words.filter(item => state[item.id] === 'mastered').length;
    const reviewCount = words.filter(item => state[item.id] === 'review').length;
    element('v-counts').textContent = `已掌握 ${knownCount} / ${words.length} · 待复习 ${reviewCount} · 未学习 ${words.length - knownCount - reviewCount}`;
    const progress = element<HTMLProgressElement>('v-progress'); progress.max = words.length; progress.value = knownCount;
    element('v-results').textContent = `当前筛选 ${filtered.length} / ${words.length} 词`;
    element('v-empty').hidden = !!word;
    element('v-empty-text').textContent = status.value === 'review' && !search.value && category.value === 'all'
      ? '目前没有待复习的词。可以从未学习词开始，或回顾已掌握的词。'
      : '没有符合条件的词汇，试试其他关键词或恢复全部。';
    element('v-card').hidden = !word || view !== 'card';
    element('v-list').hidden = !word || view !== 'list';
    cardView.setAttribute('aria-pressed', String(view === 'card'));
    listView.setAttribute('aria-pressed', String(view === 'list'));
    if (!word) return;
    element('v-position').textContent = `${index + 1} / ${filtered.length} · ${word.category}`;
    element('v-word-status').textContent = state[word.id] === 'mastered' ? '已掌握' : state[word.id] === 'review' ? '待复习' : '未学习';
    const reverse = direction.value === 'reverse';
    const prompt = element('v-prompt'); prompt.textContent = reverse ? word.meaning : word.term;
    prompt.lang = reverse ? 'zh-CN' : 'ja';
    const reading = element('v-reading'); reading.textContent = reverse ? '回忆对应的日文术语，再翻卡确认。' : `${word.reading} · ${word.english}`;
    element('v-answer-title').textContent = reverse ? word.term : word.meaning;
    element('v-answer-title').lang = reverse ? 'ja' : 'zh-CN';
    element('v-answer-reading').textContent = `${word.reading} · ${word.english}`;
    element('v-answer-reading').hidden = !reverse;
    element('v-hint').textContent = word.hint;
    element('v-contrast').textContent = word.contrast;
    element('v-answer').hidden = !revealed;
    flip.textContent = revealed ? '收起答案' : '翻卡 · 显示答案';
    flip.setAttribute('aria-expanded', String(revealed));
    review.disabled = mastered.disabled = !revealed;
    prev.disabled = index === 0; next.disabled = index === filtered.length - 1;
    if (view === 'list') {
      const list = element('v-list'); list.replaceChildren();
      for (const item of filtered) {
        const details = document.createElement('details'); details.className = 'v-entry';
        const summary = document.createElement('summary');
        const term = document.createElement('span'); term.lang = 'ja'; term.textContent = item.term;
        const meta = document.createElement('small');
        meta.textContent = `${item.category} · ${state[item.id] === 'mastered' ? '已掌握' : state[item.id] === 'review' ? '待复习' : '未学习'}`;
        summary.append(term, meta);
        const content = document.createElement('div'); content.className = 'v-entry-content';
        content.append(paragraph('读音 / 英文', `${item.reading} · ${item.english}`), paragraph('中文释义', item.meaning),
          paragraph('记忆提示', item.hint), paragraph('易混辨析', item.contrast));
        const study = document.createElement('button'); study.type = 'button'; study.textContent = '背这个词';
        study.addEventListener('click', () => { currentId = item.id; view = 'card'; revealed = false; render(); flip.focus(); });
        content.append(study); details.append(summary, content); list.append(details);
      }
    }
  }
  function resetFilters(): void {
    search.value = ''; category.value = status.value = 'all'; revealed = false; render();
  }
  for (const control of [search, category, status, direction]) {
    control.addEventListener(control === search ? 'input' : 'change', () => { revealed = false; render(); });
  }
  element('v-filter').addEventListener('submit', event => event.preventDefault());
  element('v-reset').addEventListener('click', resetFilters);
  element('v-empty-reset').addEventListener('click', resetFilters);
  flip.addEventListener('click', () => { revealed = !revealed; render(); });
  function rate(value: LearningStatus): void {
    if (!revealed || !currentId) return;
    const index = filtered.findIndex(word => word.id === currentId);
    const nextId = filtered[index + 1]?.id;
    state[currentId] = value;
    try { localStorage.setItem(storageKey, JSON.stringify(state)); }
    catch { notice.hidden = false; }
    if (nextId) currentId = nextId;
    revealed = false; render();
    element('v-feedback').textContent = `已标记${value === 'mastered' ? '掌握' : '待复习'}。${filtered.length ? '继续背诵。' : '本组已完成。'}`;
    if (filtered.length) flip.focus(); else element('v-empty-reset').focus();
  }
  review.addEventListener('click', () => rate('review'));
  mastered.addEventListener('click', () => rate('mastered'));
  function move(step: number): void {
    const index = filtered.findIndex(word => word.id === currentId);
    const word = filtered[index + step];
    if (word) { currentId = word.id; revealed = false; render(); }
  }
  prev.addEventListener('click', () => move(-1));
  next.addEventListener('click', () => move(1));
  element('v-shuffle').addEventListener('click', () => {
    order = [...words];
    for (let i = order.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [order[i], order[j]] = [order[j], order[i]];
    }
    currentId = ''; revealed = false; render();
    element('v-feedback').textContent = '已打乱顺序，继续回忆。';
  });
  for (const [button, name] of [[cardView, 'card'], [listView, 'list']] as const) {
    button.addEventListener('click', () => { view = name; revealed = false; render(); });
  }
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    state = readVocabularyState(event.newValue || '{}'); revealed = false; render();
  });
  render();
}

if (typeof document !== 'undefined' && document.getElementById('v-workspace')) void mountVocabulary();

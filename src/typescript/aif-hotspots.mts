import { matchingAnswer, validateHotspot } from "./hotspot-protocol.mjs";
import type { Hotspot } from "./hotspot-protocol.mjs";

function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}
function required<T extends HTMLElement>(root: ParentNode, selector: string): T {
  const element = root.querySelector<T>(selector);
  if (!element) throw new Error(`Missing hotspot element: ${selector}`);
  return element;
}

// Reuse the existing fill-answer engine and its progress/cloud-sync storage.
// A>B>C is ONE answer string: matching/order is never graded as a set.
const questions = [...document.querySelectorAll<HTMLElement>('.q')].filter(q => q.querySelector('.badge.hot'));
const pathname = location.pathname;
if (questions.length && /\/aws-aif\/bank\/part\d+/.test(pathname)) {
  const stylesheet = document.createElement('link');
  stylesheet.rel = 'stylesheet'; stylesheet.href = '/assets/aif-hotspots.css'; document.head.appendChild(stylesheet);
  try {
    const response = await fetch('/assets/aif-hotspots.json');
    if (!response.ok) throw new Error('Missing hotspot data');
    const source: unknown = await response.json();
    if (!isRecord(source)) throw new Error("Invalid hotspot data");
    for (const q of questions) {
      const data = validateHotspot(q.dataset.n ? source[q.dataset.n] : undefined);
      if (data) mount(q, data);
    }
  } catch {
    for (const q of questions) {
      const hint = q.querySelector('.hothint');
      if (hint) hint.textContent = '匹配选项加载失败，请刷新页面重试。';
    }
  }
}

function mount(q: HTMLElement, data: Hotspot): void {
  const part = /part(\d+)/.exec(pathname)?.[1];
  if (!part) return;
  const letter = (index: number) => String.fromCharCode(65 + index);
  const known = data.answer !== null;
  q.dataset.kind = 'fill';
  q.dataset.ans = data.answer?.map(letter).join('>') || '';
  const hint = required<HTMLElement>(q, '.hothint');
  hint.classList.add('qact');
  hint.textContent = data.ordered ? '请按步骤顺序选择，每个选项只能使用一次。' : '请为每一项选择匹配的选项。';
  const form = document.createElement('div');
  form.className = 'hotspot-form i18n-noloc';
  const selectedDescriptions: HTMLElement[] = [];
  const selects = data.rows.map((row, index) => {
    const label = document.createElement('label');
    const caption = document.createElement('span'); caption.textContent = row;
    const select = document.createElement('select');
    select.id = `hotspot-${q.dataset.n}-${index}`;
    select.setAttribute('aria-label', row);
    select.append(new Option('—', ''));
    data.options.forEach((option, optionIndex) => select.append(new Option(`${letter(optionIndex)}. ${option}`, letter(optionIndex))));
    const description = document.createElement('small');
    description.className = 'hotspot-choice'; description.id = `${select.id}-choice`;
    select.setAttribute('aria-describedby', description.id);
    selectedDescriptions.push(description);
    label.append(caption, select, description); form.append(label); return select;
  });
  const input = document.createElement('input');
  input.type = 'hidden'; input.className = 'fill';
  form.append(input); hint.after(form);
  const actions = document.createElement('div'); actions.className = 'qact';
  actions.innerHTML = '<button class="primary js-submit" type="button" disabled>确认作答</button><button class="js-reveal" type="button">直接看答案</button><button class="js-redo" type="button">重做本题</button><button class="js-next" type="button">下一题 ↓</button>';
  const warning = document.createElement('p'); warning.className = 'qact';
  warning.textContent = data.note === 'source-conflict' ? '原选项与解析存在冲突，答案待核对；本题暂不判分。' : '原资料未提供可核对的答案；本题暂不判分。';
  if (!known) { required<HTMLButtonElement>(actions, '.js-reveal').hidden = true; warning.hidden = false; }
  else warning.hidden = true;
  const verdict = document.createElement('div'); verdict.className = 'verdict';
  form.after(actions, warning, verdict);
  const details = required<HTMLDetailsElement>(q, 'details.ans');
  details.open = q.classList.contains('done');
  const review = data.review;
  if (review) {
    const verifiedReview = review;
    const notice = document.createElement('p'); notice.className = 'hotspot-reference-notice i18n-noloc';
    actions.before(notice);
    const panel = document.createElement('section'); panel.className = 'hotspot-reference i18n-noloc';
    const heading = document.createElement('strong');
    const explanation = document.createElement('p');
    const sources = document.createElement('ul');
    review.sources.forEach(url => {
      const item = document.createElement('li'), link = document.createElement('a');
      link.href = url; link.textContent = new URL(url).pathname.split('/').filter(Boolean).pop()?.replace(/\.html$/, '').replace(/-/g, ' ') || 'AWS reference';
      link.target = '_blank'; link.rel = 'noopener noreferrer'; item.append(link); sources.append(item);
    });
    panel.append(heading, explanation, sources); details.append(panel);
    function localizeReview() {
      const language = document.documentElement.dataset.lang;
      const lang = language === 'en' || language === 'ja' ? language : 'zh';
      const copy = {
        zh: ['按参考答案评分（非官方／原题答案）','参考判断存在歧义；本题暂不判分。','参考判断与 AWS 资料'],
        en: ['Graded using an editorial key (not an official or original key)','Ambiguous editorial assessment; this question is not graded.','Editorial assessment and AWS sources'],
        ja: ['参考解答で採点（公式・元の解答ではありません）','参考判断に曖昧さがあるため、採点しません。','参考判断とAWS資料']
      }[lang];
      notice.textContent = known ? copy[0] : copy[1];
      heading.textContent = copy[2]; explanation.textContent = verifiedReview[lang];
    }
    localizeReview(); document.addEventListener('quizsite:language-changed', localizeReview);
  }
  if (data.answer !== null) {
    const answer = required<HTMLElement>(details, '.correct');
    answer.replaceChildren();
    const ordered = document.createElement('ol');
    data.answer.forEach((index, rowIndex) => {
      const item = document.createElement('li');
      item.textContent = `${data.rows[rowIndex]} → ${letter(index)}. ${data.options[index]}`;
      ordered.append(item);
    });
    answer.append(ordered);
  }
  let saved: unknown = null;
  try {
    const state: unknown = JSON.parse(localStorage.getItem(`quiz:aws:aifbank:${part}`) || '{}');
    saved = isRecord(state) && q.dataset.n ? state[q.dataset.n] : null;
  }
  catch { saved = null; /* Invalid/local-storage-disabled caches do not prevent practice. */ }
  const selection = isRecord(saved) && Array.isArray(saved.s) ? saved.s : [];
  const prior = typeof selection[0] === 'string' ? selection[0].split('>') : [];
  selects.forEach((select, i) => { select.value = prior[i] || ''; });
  const submit = required<HTMLButtonElement>(actions, '.js-submit');
  function sync() {
    const locked = q.classList.contains('done');
    selects.forEach((select, index) => {
      select.disabled = locked;
      selectedDescriptions[index].textContent = select.value ? select.selectedOptions[0].textContent : '';
      selectedDescriptions[index].hidden = !select.value;
    });
    // The old engine may not have had controls while initial saved state was painted.
    if (locked) details.open = true;
    if (!known) submit.disabled = true;
  }
  selects.forEach(select => select.addEventListener('change', () => {
    if (q.classList.contains('done')) return;
    input.value = known ? matchingAnswer(selects.map(item => item.value), selects.length, !!data.ordered) : '';
    if (known) input.dispatchEvent(new Event('input', { bubbles: true }));
    sync();
  }));
  q.addEventListener('keydown', event => {
    // Let the native select commit its option; never let the delegated quiz handler
    // grade an incomplete sequence or an unverified source answer.
    if (event.key === 'Enter' && ((event.target instanceof Element && event.target.tagName === 'SELECT') || !known || !input.value)) event.stopPropagation();
  });
  q.addEventListener('click', event => {
    if (event.target instanceof Element && event.target.closest('.js-redo')) selects.forEach(select => { select.value = ''; });
    queueMicrotask(sync);
  });
  new MutationObserver(sync).observe(q, { attributes: true, attributeFilter: ['class'] });
  document.getElementById('btn-reset')?.addEventListener('click', () => {
    queueMicrotask(() => {
      let record: unknown;
      try {
        const state: unknown = JSON.parse(localStorage.getItem(`quiz:aws:aifbank:${part}`) || '{}');
        record = isRecord(state) && q.dataset.n ? state[q.dataset.n] : null;
      } catch { return; }
      if (!record) { selects.forEach(select => { select.value = ''; }); input.value = ''; sync(); }
    });
  });
  // Preserve and restore unfinished draft selections without changing their timestamp.
  input.value = known ? matchingAnswer(selects.map(item => item.value), selects.length, !!data.ordered) : '';
  submit.disabled = !input.value;
  sync();
}

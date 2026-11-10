type ColorPreference = 'auto' | 'light' | 'dark';
const storageKey = 'quizsite:color-mode';
let preference: ColorPreference = 'auto';
let listeners: AbortController | undefined;
let timer: ReturnType<typeof setTimeout> | undefined;

export function colorModeAt(mode: ColorPreference, now = new Date()): 'light' | 'dark' {
  return mode === 'auto' ? (now.getHours() >= 18 || now.getHours() < 8 ? 'dark' : 'light') : mode;
}

export function nextColorBoundary(now = new Date()): Date {
  const next = new Date(now);
  if (now.getHours() < 8) next.setHours(8, 0, 0, 0);
  else if (now.getHours() < 18) next.setHours(18, 0, 0, 0);
  else { next.setDate(next.getDate() + 1); next.setHours(8, 0, 0, 0); }
  return next;
}

function readPreference(): ColorPreference {
  try {
    const saved = localStorage.getItem(storageKey);
    return saved === 'light' || saved === 'dark' ? saved : 'auto';
  } catch { return preference; }
}

function translateControl(): void {
  const select = document.getElementById('qb-color-mode') as HTMLSelectElement | null;
  if (!select) return;
  const lang = document.documentElement.getAttribute('data-lang') || document.documentElement.lang;
  const labels = lang.startsWith('ja') ? ['表示', '自動（18時〜8時は夜間）', '日間', '夜間']
    : lang.startsWith('en') ? ['Appearance', 'Auto (night: 18:00–08:00)', 'Day', 'Night']
    : ['外观', '自动（18:00–08:00 夜间）', '日间', '夜间'];
  document.getElementById('qb-color-mode-label')!.textContent = labels[0];
  select.setAttribute('aria-label', labels[0]);
  Array.from(select.options).forEach((option, index) => { option.textContent = labels[index + 1]; });
  select.value = preference;
}

function applyMode(): void {
  const root = document.documentElement;
  root.setAttribute('data-color-mode', colorModeAt(preference));
  root.setAttribute('data-color-preference', preference);
  root.setAttribute('data-theme-page', document.querySelector('.gavin-interface') ? 'knight' : 'quiz');
  translateControl();
  clearTimeout(timer);
  if (preference === 'auto') {
    const now = new Date();
    timer = setTimeout(applyMode, Math.min(60000, Math.max(1, nextColorBoundary(now).getTime() - now.getTime())));
  }
}

export function mountColorMode(): void {
  if (!document.body || document.documentElement.hasAttribute('data-defer-shared-shell')) return;
  if (!document.getElementById('qb-color-mode-css')) {
    const style = document.createElement('link');
    style.id = 'qb-color-mode-css';
    style.rel = 'stylesheet';
    style.href = '/assets/color-mode.css';
    document.head.appendChild(style);
  }
  if (!document.getElementById('qb-color-mode')) {
    const bar = document.createElement('div');
    bar.className = 'qb-theme-controls i18n-noloc';
    const label = document.createElement('label');
    label.id = 'qb-color-mode-label';
    label.htmlFor = 'qb-color-mode';
    const select = document.createElement('select');
    select.id = 'qb-color-mode';
    for (const mode of ['auto', 'light', 'dark']) {
      const option = document.createElement('option');
      option.value = mode;
      select.appendChild(option);
    }
    select.addEventListener('change', () => {
      if (select.value !== 'auto' && select.value !== 'light' && select.value !== 'dark') return;
      preference = select.value;
      try { localStorage.setItem(storageKey, preference); } catch {}
      applyMode();
    });
    bar.append(label, select);
    const slot = document.querySelector('[data-color-mode-slot]');
    const header = document.querySelector('.qb-sitebar');
    if (slot) slot.append(bar);
    else if (header) header.after(bar);
    else document.body.prepend(bar);
  }
  preference = readPreference();
  listeners?.abort();
  listeners = new AbortController();
  const options = { signal: listeners.signal };
  document.addEventListener('quizsite:language-changed', translateControl, options);
  document.addEventListener('visibilitychange', () => { if (!document.hidden) applyMode(); }, options);
  window.addEventListener('focus', applyMode, options);
  window.addEventListener('pageshow', applyMode, options);
  window.addEventListener('storage', event => {
    if (event.key !== storageKey && event.key !== null) return;
    preference = readPreference();
    applyMode();
  }, options);
  applyMode();
}

if (typeof document !== 'undefined') mountColorMode();

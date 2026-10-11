export interface StudyTimeState { day: string; totalMs: number; lastEnd: number }
export const STUDY_TIME_KEY = "quizbank:study-time:v1";
const DAY_MS = 86400000;

export function studyDay(now: number): string {
  const date = new Date(now);
  return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, "0")}-${String(date.getDate()).padStart(2, "0")}`;
}

export function formatStudyTime(milliseconds: number): string {
  const seconds = Math.floor(Math.max(0, Math.min(DAY_MS, Number.isFinite(milliseconds) ? milliseconds : 0)) / 1000);
  return [Math.floor(seconds / 3600), Math.floor(seconds / 60) % 60, seconds % 60].map(value => String(value).padStart(2, "0")).join(":");
}

export function parseStudyTime(raw: string | null): StudyTimeState | null {
  if (!raw || raw.length > 1024) return null;
  try {
    const value: unknown = JSON.parse(raw);
    if (!value || typeof value !== "object") return null;
    const state = value as Record<string, unknown>;
    if (typeof state.day !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(state.day) ||
        typeof state.totalMs !== "number" || !Number.isFinite(state.totalMs) || state.totalMs < 0 || state.totalMs > DAY_MS ||
        typeof state.lastEnd !== "number" || !Number.isSafeInteger(state.lastEnd) || state.lastEnd < 0) return null;
    return { day: state.day, totalMs: state.totalMs, lastEnd: state.lastEnd };
  } catch { return null; }
}

// Store the union of observed visible intervals rather than summing each tab's timer.
export function advanceStudyTime(state: StudyTimeState | null, start: number, end: number): StudyTimeState {
  const day = studyDay(end);
  const current = state?.day === day ? state : { day, totalMs: 0, lastEnd: 0 };
  const date = new Date(end);
  const midnight = new Date(date.getFullYear(), date.getMonth(), date.getDate()).getTime();
  // A delayed/suspended timer must not credit a whole sleep interval.
  const from = Math.max(start, end - 5000, midnight, current.lastEnd);
  const elapsed = Math.max(0, end - from);
  return { day, totalMs: Math.min(DAY_MS, current.totalMs + elapsed), lastEnd: Math.max(current.lastEnd, end) };
}

function mountStudyTime(): void {
  if (document.documentElement.dataset.studyTimeReady) return;
  document.documentElement.dataset.studyTimeReady = "true";
  let memory: StudyTimeState | null = null;
  let lastTick: number | null = document.visibilityState === "visible" ? Date.now() : null;
  let persistent = true;
  function read(): StudyTimeState | null {
    if (!persistent) return memory;
    try { return parseStudyTime(localStorage.getItem(STUDY_TIME_KEY)); }
    catch { persistent = false; return memory; }
  }
  function render(): void {
    const label = document.getElementById("qb-study-time");
    if (!label) return;
    const state = read();
    const time = formatStudyTime(state?.day === studyDay(Date.now()) ? state.totalMs : 0);
    const lang = (document.documentElement.getAttribute("data-lang") || document.documentElement.lang || "zh").toLowerCase();
    label.textContent = lang.startsWith("ja") ? `今日の学習時間 ${time}` : lang.startsWith("en") ? `Studied today ${time}` : `今日已学习 ${time}`;
    label.title = persistent
      ? (lang.startsWith("ja") ? "このブラウザーに保存。表示中のページのみ計測し、現地時刻の午前0時にリセットします。" : lang.startsWith("en") ? "Saved in this browser. Counts visible pages; resets at local midnight." : "保存在当前浏览器；仅累计前台可见页面，本地时间每日零点重新计时。")
      : (lang.startsWith("ja") ? "保存できないため、このページを開いている間のみ記録します。" : lang.startsWith("en") ? "Browser storage is unavailable; time is kept for this page session only." : "浏览器无法保存数据，学习时间仅保留在当前页面会话。" );
  }
  function record(start: number, end: number): void {
    const save = (): void => {
      memory = advanceStudyTime(read(), start, end);
      try { localStorage.setItem(STUDY_TIME_KEY, JSON.stringify(memory)); }
      catch { persistent = false; }
      render();
    };
    if (navigator.locks) {
      void navigator.locks.request(STUDY_TIME_KEY, save).catch(() => { if (document.hasFocus()) save(); });
    } else if (document.hasFocus()) save();
  }
  function flush(now: number): void {
    if (lastTick !== null) record(lastTick, now);
    lastTick = null;
  }
  function tick(): void {
    const now = Date.now();
    if (document.visibilityState === "visible") {
      if (lastTick !== null) record(lastTick, now);
      lastTick = now;
    } else {
      lastTick = null;
    }
    render();
  }
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") flush(Date.now());
    else lastTick = Date.now();
    render();
  });
  window.addEventListener("pagehide", () => flush(Date.now()));
  window.addEventListener("pageshow", () => { lastTick = document.visibilityState === "visible" ? Date.now() : null; render(); });
  window.addEventListener("storage", event => { if (event.key === STUDY_TIME_KEY || event.key === null) { memory = parseStudyTime(event.newValue); render(); } });
  document.addEventListener("quizbank:language-changed", render);
  render();
  window.setInterval(tick, 1000);
}

if (typeof document !== "undefined") {
  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", mountStudyTime, { once: true });
  else mountStudyTime();
}

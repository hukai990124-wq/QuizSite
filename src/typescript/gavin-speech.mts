export function speechLanguage(text: string, fallback = 'en-US'): string {
  if (/[\u3040-\u30ff]/.test(text)) return 'ja-JP';
  if (/[\u3400-\u9fff]/.test(text)) return fallback === 'ja-JP' ? fallback : 'zh-CN';
  if (/[a-z]/i.test(text)) return 'en-US';
  return fallback;
}

export function speechVoice<Voice extends { name: string; lang: string; localService: boolean }>(voices: Voice[], language: string): Voice | undefined {
  const matching = voices.filter(voice => voice.lang.toLowerCase().split('-')[0] === language.toLowerCase().split('-')[0]);
  return matching.find(voice => /\b(david|daniel|george|ryan|keita|otoya|yunxi|yunjian)\b/i.test(voice.name))
    || matching.find(voice => voice.lang.toLowerCase() === language.toLowerCase() && voice.localService)
    || matching.find(voice => voice.lang.toLowerCase() === language.toLowerCase())
    || matching[0];
}

export function createGavinSpeech() {
  const replay = document.getElementById('gavin-read') as HTMLButtonElement;
  const stop = document.getElementById('gavin-stop') as HTMLButtonElement;
  const status = document.getElementById('gavin-speech-status') as HTMLParagraphElement;
  const available = 'speechSynthesis' in window && 'SpeechSynthesisUtterance' in window;
  const engine = available ? window.speechSynthesis : null;
  let lastText = '';
  let lastLanguage = 'en-US';
  let generation = 0;
  let utterance: SpeechSynthesisUtterance | null = null;
  let audio: HTMLAudioElement | null = null;
  let audioUrl = '';
  let pending: AbortController | null = null;

  function cancel(clear = false): void {
    generation++;
    pending?.abort();
    pending = null;
    if (audio) { audio.pause(); audio = null; }
    engine?.cancel();
    utterance = null;
    stop.disabled = true;
    if (clear) {
      lastText = '';
      if (audioUrl) URL.revokeObjectURL(audioUrl);
      audioUrl = '';
    }
    replay.disabled = !lastText || (!available && lastLanguage !== 'en-US');
    status.textContent = '';
  }

  async function speak(): Promise<void> {
    cancel();
    if (!lastText) return;
    const current = generation;
    if (lastLanguage === 'en-US' && lastText.length <= 600) {
      try {
        if (!audioUrl) {
          pending = new AbortController();
          const response = await fetch('/api/gavin/speech', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: lastText, language: 'en' }), signal: pending.signal,
          });
          if (!response.ok) throw new Error('Speech service unavailable');
          const blob = await response.blob();
          if (current !== generation) return;
          audioUrl = URL.createObjectURL(blob);
        }
        if (current !== generation) return;
        audio = new Audio(audioUrl);
        audio.onended = () => { if (current === generation) { stop.disabled = true; status.textContent = '朗读已结束。'; audio = null; } };
        audio.onerror = () => { if (current === generation) { stop.disabled = true; status.textContent = '无法自动朗读，请点击“朗读回复”重试，或检查设备的对应语言语音。'; } };
        stop.disabled = false;
        try {
          await audio.play();
          if (current === generation) status.textContent = 'Gavin 正在朗读…';
        } catch {
          if (current === generation) { stop.disabled = true; status.textContent = '无法自动朗读，请点击“朗读回复”重试，或检查设备的对应语言语音。'; }
        }
        return;
      } catch {
        if (current !== generation) return;
      } finally { if (current === generation) pending = null; }
    }
    if (!engine) { status.textContent = '此浏览器不支持语音朗读，文字回复仍可正常使用。'; return; }
    utterance = new SpeechSynthesisUtterance(lastText);
    utterance.lang = lastLanguage;
    utterance.voice = speechVoice(engine.getVoices(), lastLanguage) || null;
    utterance.rate = 0.92;
    utterance.pitch = 0.85;
    utterance.onstart = () => { if (current === generation) status.textContent = 'Gavin 正在朗读…'; };
    utterance.onend = () => {
      if (current !== generation) return;
      stop.disabled = true;
      status.textContent = '朗读已结束。';
      utterance = null;
    };
    utterance.onerror = () => {
      if (current !== generation) return;
      stop.disabled = true;
      status.textContent = '无法自动朗读，请点击“朗读回复”重试，或检查设备的对应语言语音。';
      utterance = null;
    };
    stop.disabled = false;
    try { engine.speak(utterance); } catch {
      stop.disabled = true;
      status.textContent = '无法自动朗读，请点击“朗读回复”重试，或检查设备的对应语言语音。';
    }
  }

  replay.addEventListener('click', () => { void speak(); });
  stop.addEventListener('click', () => { cancel(); status.textContent = '朗读已停止。'; });
  if (!available) status.textContent = '此浏览器不支持语音朗读，文字回复仍可正常使用。';
  window.addEventListener('pagehide', () => cancel(true));
  return {
    stop: cancel,
    read(text: string, question: string): void {
      cancel(true);
      lastText = text;
      const interfaceLanguage = document.documentElement.lang.startsWith('ja') ? 'ja-JP' : document.documentElement.lang.startsWith('zh') ? 'zh-CN' : 'en-US';
      lastLanguage = speechLanguage(text, speechLanguage(question, interfaceLanguage));
      replay.disabled = !available && lastLanguage !== 'en-US';
      if (available || lastLanguage === 'en-US') void speak();
      else status.textContent = '此浏览器不支持语音朗读，文字回复仍可正常使用。';
    },
  };
}

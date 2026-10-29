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

function readyVoices(engine: SpeechSynthesis): Promise<SpeechSynthesisVoice[]> {
  const voices = engine.getVoices();
  if (voices.length) return Promise.resolve(voices);
  return new Promise(resolve => {
    const finish = (): void => {
      clearTimeout(timer);
      engine.removeEventListener('voiceschanged', finish);
      resolve(engine.getVoices());
    };
    const timer = setTimeout(finish, 800);
    engine.addEventListener('voiceschanged', finish, { once: true });
  });
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

  async function speakNative(current: number): Promise<void> {
    if (!engine) { stop.disabled = true; status.textContent = '此浏览器不支持语音朗读，文字回复仍可正常使用。'; return; }
    stop.disabled = false;
    const voices = await readyVoices(engine);
    if (current !== generation) return;
    utterance = new SpeechSynthesisUtterance(lastText);
    utterance.lang = lastLanguage;
    utterance.voice = speechVoice(voices, lastLanguage) || null;
    utterance.rate = 0.92;
    utterance.pitch = 0.85;
    utterance.onstart = () => { if (current === generation) status.textContent = 'Gavin 正在朗读…'; };
    utterance.onend = () => {
      if (current !== generation) return;
      stop.disabled = true;
      status.textContent = '朗读已结束。';
      utterance = null;
    };
    utterance.onerror = event => {
      if (current !== generation) return;
      stop.disabled = true;
      status.textContent = event.error === 'not-allowed' ? '浏览器已阻止自动播放，请点击“朗读回复”播放。' : '无法自动朗读，请点击“朗读回复”重试，或检查设备的对应语言语音。';
      utterance = null;
    };
    try { engine.speak(utterance); } catch {
      stop.disabled = true;
      status.textContent = '无法自动朗读，请点击“朗读回复”重试，或检查设备的对应语言语音。';
    }
  }

  async function speak(): Promise<void> {
    cancel();
    if (!lastText) return;
    const current = generation;
    stop.disabled = false;
    if (lastLanguage === 'en-US' && lastText.length <= 600) {
      try {
        if (!audioUrl) {
          pending = new AbortController();
          const response = await fetch('/api/gavin/speech', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text: lastText, language: 'en' }), signal: AbortSignal.any([pending.signal, AbortSignal.timeout(20000)]),
          });
          if (!response.ok || !response.headers.get('Content-Type')?.startsWith('audio/')) throw new Error('Speech service unavailable');
          const blob = await response.blob();
          if (!blob.size) throw new Error('Empty speech audio');
          if (current !== generation) return;
          audioUrl = URL.createObjectURL(blob);
        }
        if (current !== generation) return;
        audio = new Audio(audioUrl);
        let fallbackStarted = false;
        const fallback = (): void => {
          if (current !== generation || fallbackStarted) return;
          fallbackStarted = true;
          if (audio) { audio.pause(); audio = null; }
          if (audioUrl) URL.revokeObjectURL(audioUrl);
          audioUrl = '';
          void speakNative(current);
        };
        audio.onended = () => { if (current === generation) { stop.disabled = true; status.textContent = '朗读已结束。'; audio = null; } };
        audio.onerror = fallback;
        stop.disabled = false;
        try {
          await audio.play();
          if (current === generation && !fallbackStarted) status.textContent = 'Gavin 正在朗读…';
        } catch (error) {
          if (current === generation) {
            if (error instanceof Error && error.name === 'NotAllowedError') {
              stop.disabled = true;
              status.textContent = '浏览器已阻止自动播放，请点击“朗读回复”播放。';
            } else fallback();
          }
        }
        return;
      } catch {
        if (current !== generation) return;
      } finally { if (current === generation) pending = null; }
    }
    await speakNative(current);
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

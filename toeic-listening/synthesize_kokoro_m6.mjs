import { promises as fs } from 'node:fs';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { spawnSync } from 'node:child_process';

const BASE = path.dirname(fileURLToPath(import.meta.url));
const SPACE_API = 'https://hexgrad-kokoro-tts.hf.space/gradio_api';
const VOICES = { 'en-GB': 'bf_emma', 'en-US': 'am_michael' };
const SPEED = 1.1;

function option(name, fallback) {
  const index = process.argv.indexOf(name);
  return index === -1 ? fallback : process.argv[index + 1];
}

function getTasks(job) {
  return job.segments.map((segment) => {
    const voice = VOICES[segment.accent];
    if (!voice) throw new Error(`No Kokoro voice configured for ${segment.accent}`);
    return { text: segment.text, voice };
  });
}

async function fetchSpeech(text, voice) {
  const sessionHash = `quizbank-m6-${Date.now()}-${Math.random().toString(36).slice(2)}`;
  const queued = await fetch(`${SPACE_API}/queue/join`, {
    method: 'POST',
    headers: { 'content-type': 'application/json', 'x-gradio-user': 'api' },
    body: JSON.stringify({
      data: [text, voice, SPEED, true],
      fn_index: 4,
      session_hash: sessionHash,
    }),
    signal: AbortSignal.timeout(30_000),
  });
  if (!queued.ok) {
    throw new Error(`Kokoro queue returned ${queued.status}: ${await queued.text()}`);
  }
  const { event_id: eventId } = await queued.json();
  if (!eventId) throw new Error('Kokoro queue response did not include an event id');

  const stream = await fetch(`${SPACE_API}/queue/data?session_hash=${encodeURIComponent(sessionHash)}`, {
    headers: { accept: 'text/event-stream' },
    signal: AbortSignal.timeout(180_000),
  });
  if (!stream.ok || !stream.body) {
    throw new Error(`Kokoro result stream returned ${stream.status}`);
  }

  const reader = stream.body.getReader();
  const decoder = new TextDecoder();
  let buffer = '';
  while (true) {
    const { value, done } = await reader.read();
    if (done) break;
    buffer += decoder.decode(value, { stream: true });
    const events = buffer.split(/\r?\n\r?\n/);
    buffer = events.pop();
    for (const event of events) {
      const line = event.split(/\r?\n/).find((entry) => entry.startsWith('data:'));
      if (!line) continue;
      const message = JSON.parse(line.slice(5).trim());
      if (message.event_id !== eventId || message.msg !== 'process_completed') continue;
      if (!message.success || message.output?.error) {
        throw new Error(`Kokoro synthesis failed: ${message.output?.error ?? 'unknown error'}`);
      }
      const audio = message.output?.data?.[0];
      if (!audio?.url) throw new Error('Kokoro response did not include an audio URL');
      const result = await fetch(audio.url, { signal: AbortSignal.timeout(30_000) });
      if (!result.ok) throw new Error(`Kokoro audio download returned ${result.status}`);
      const wav = Buffer.from(await result.arrayBuffer());
      if (wav.length < 1_000 || wav.toString('ascii', 0, 4) !== 'RIFF') {
        throw new Error('Kokoro returned an empty or invalid WAV file');
      }
      return wav;
    }
  }
  throw new Error('Kokoro stream closed before the audio was returned');
}

function runFfmpeg(ffmpeg, args) {
  const result = spawnSync(ffmpeg, args, { encoding: 'utf8', windowsHide: true });
  if (result.error) throw result.error;
  if (result.status !== 0) {
    throw new Error(`ffmpeg failed (${result.status}): ${result.stderr || result.stdout}`);
  }
}

function wavDuration(wav) {
  const sampleRate = wav.readUInt32LE(24);
  const channels = wav.readUInt16LE(22);
  const bitsPerSample = wav.readUInt16LE(34);
  const dataMarker = wav.indexOf('data', 36, 'ascii');
  if (sampleRate !== 24000 || channels !== 1 || bitsPerSample !== 16 || dataMarker < 0) {
    throw new Error('Kokoro WAV did not use the expected 24 kHz mono PCM format');
  }
  const samples = wav.readUInt32LE(dataMarker + 4);
  return samples / (sampleRate * channels * bitsPerSample / 8);
}

function mp3Duration(ffmpeg, filename) {
  const result = spawnSync(ffmpeg, ['-hide_banner', '-i', filename, '-f', 'null', '-'], {
    encoding: 'utf8',
    windowsHide: true,
  });
  if (result.error) throw result.error;
  const details = `${result.stdout}\n${result.stderr}`;
  const match = details.match(/Duration:\s*(\d+):(\d+):([\d.]+)/);
  if (!match) throw new Error(`Could not read MP3 duration for ${filename}: ${details}`);
  return Number(match[1]) * 3600 + Number(match[2]) * 60 + Number(match[3]);
}

function concatPath(value) {
  return path.resolve(value).replaceAll('\\', '/').replaceAll("'", "'\\''");
}

async function installMock(jobs, outputDir, mock) {
  const allJobs = JSON.parse(await fs.readFile(path.join(BASE, 'data/extra-audio-jobs.json'), 'utf8'));
  const selectedJobs = allJobs.filter((job) => job.audio.startsWith(`audio/m${mock}/`));
  const manifestPath = path.join(BASE, 'data/audio-manifest.json');
  const manifest = JSON.parse(await fs.readFile(manifestPath, 'utf8'));
  if (jobs.length !== 54 || selectedJobs.length !== 54 || manifest.length !== 108) {
    throw new Error(`Install requires all 54 Test ${mock} jobs and the existing 108-entry manifest`);
  }
  if (jobs.some((job) => !job.audio.startsWith(`audio/m${mock}/`))) {
    throw new Error(`Install only supports the selected Test ${mock} audio`);
  }

  const manifestByAudio = new Map(manifest.map((entry) => [entry.audio, entry]));
  const updates = new Map();
  const sourceDir = BASE;
  const siteDir = path.resolve(BASE, '../site/toeic-listening');
  for (const job of selectedJobs) {
    const stagedPath = path.join(outputDir, job.audio);
    const audio = await fs.readFile(stagedPath);
    if (audio.length < 1_000) throw new Error(`Staged audio is empty: ${job.audio}`);
    const current = manifestByAudio.get(job.audio);
    if (!current) throw new Error(`Manifest entry is missing: ${job.audio}`);
    const { modelSha256, ...preserved } = current;
    updates.set(job.audio, {
      ...preserved,
      sha256: createHash('sha256').update(audio).digest('hex'),
      generator: 'Kokoro-82M via Hugging Face Spaces',
      service: 'https://huggingface.co/spaces/hexgrad/Kokoro-TTS',
      voiceSettings: {
        'en-GB': { engine: 'Kokoro-82M', voice: VOICES['en-GB'], speed: SPEED },
        'en-US': { engine: 'Kokoro-82M', voice: VOICES['en-US'], speed: SPEED },
      },
      outputSettings: {
        sampleRateHz: 24000,
        channels: 1,
        bitrateKbps: 64,
        silenceBetweenSegmentsMs: 400,
      },
    });
  }

  for (const [audioPath] of updates) {
    const stagedPath = path.join(outputDir, audioPath);
    const sourcePath = path.join(sourceDir, audioPath);
    const sitePath = path.join(siteDir, audioPath);
    await fs.access(sourcePath);
    await fs.access(sitePath);
    await fs.copyFile(stagedPath, sourcePath);
    await fs.copyFile(stagedPath, sitePath);
  }

  const mergedManifest = manifest.map((entry) => updates.get(entry.audio) ?? entry);
  const manifestText = JSON.stringify(mergedManifest, null, 2)
    .replace(/"lengthScale": 1(?=\n)/g, '"lengthScale": 1.0');
  await fs.writeFile(manifestPath, `${manifestText}\n`, 'utf8');
  console.log(`Installed 54 Test ${mock} tracks and updated both audio copies plus their manifest.`);
}

async function main() {
  const outputDir = option('--out-dir');
  const ffmpeg = option('--ffmpeg');
  const only = option('--only');
  const install = process.argv.includes('--install');
  const mock = Number(option('--mock', '6'));
  if (![5,6].includes(mock)) throw new Error('--mock must be 5 or 6');
  if (!outputDir || !ffmpeg) {
    throw new Error('Usage: node synthesize_kokoro_m6.mjs --mock 5|6 --out-dir <staging-dir> --ffmpeg <ffmpeg.exe> [--only audio/m5/p3-1.mp3] [--install]');
  }
  if (install && only) throw new Error('--install requires a complete selected paper; do not combine it with --only');

  const allJobs = JSON.parse(await fs.readFile(path.join(BASE, 'data/extra-audio-jobs.json'), 'utf8'));
  let jobs = allJobs.filter((job) => job.audio.startsWith(`audio/m${mock}/`));
  if (only) jobs = jobs.filter((job) => job.audio === only);
  if (!jobs.length) throw new Error(`No Test ${mock} audio job found${only ? ` for ${only}` : ''}`);

  const wavDir = path.join(outputDir, '_segments');
  await fs.mkdir(wavDir, { recursive: true });
  const silenceWav = path.join(wavDir, 'pause-400ms.wav');
  if (jobs.some((job) => job.segments.length > 1)) {
    runFfmpeg(ffmpeg, [
      '-hide_banner', '-loglevel', 'error', '-y', '-f', 'lavfi', '-i', 'anullsrc=r=24000:cl=mono',
      '-t', '0.4', '-c:a', 'pcm_s16le', silenceWav,
    ]);
  }

  let calls = 0;
  for (const [index, job] of jobs.entries()) {
    const destination = path.join(outputDir, job.audio);
    await fs.mkdir(path.dirname(destination), { recursive: true });
    try {
      if ((await fs.stat(destination)).size > 1_000) {
        console.log(`[${index + 1}/${jobs.length}] already staged ${job.audio}`);
        continue;
      }
    } catch (error) {
      if (error.code !== 'ENOENT') throw error;
    }

    const tasks = getTasks(job);
    const wavPaths = [];
    let expectedDuration = 0;
    for (const [segmentIndex, task] of tasks.entries()) {
      const fingerprint = createHash('sha256').update(JSON.stringify({...task,speed:SPEED})).digest('hex').slice(0,16);
      const wavPath = path.join(wavDir, `${path.basename(job.audio, '.mp3')}-${segmentIndex + 1}-${fingerprint}.wav`);
      let wav;
      try {
        wav = await fs.readFile(wavPath);
        wavDuration(wav);
      } catch (error) {
        if (error.code !== 'ENOENT') throw error;
        calls += 1;
        console.log(`[${index + 1}/${jobs.length}] Kokoro ${calls} · ${job.audio} · ${task.voice}`);
        wav = await fetchSpeech(task.text, task.voice);
        wavDuration(wav);
        await fs.writeFile(wavPath, wav);
      }
      expectedDuration += wavDuration(wav);
      wavPaths.push(wavPath);
    }

    let inputs = wavPaths;
    if (wavPaths.length > 1) {
      expectedDuration += 0.4 * (wavPaths.length - 1);
      inputs = wavPaths.flatMap((wavPath, segmentIndex) =>
        segmentIndex === wavPaths.length - 1 ? [wavPath] : [wavPath, silenceWav]);
    }
    const listPath = path.join(wavDir, `${path.basename(job.audio, '.mp3')}-concat.txt`);
    await fs.writeFile(listPath, inputs.map((wavPath) => `file '${concatPath(wavPath)}'`).join('\n') + '\n');
    runFfmpeg(ffmpeg, [
      '-hide_banner', '-loglevel', 'error', '-xerror', '-y', '-f', 'concat', '-safe', '0', '-i', listPath,
      '-ar', '24000', '-ac', '1', '-codec:a', 'libmp3lame', '-b:a', '64k', destination,
    ]);
    const final = await fs.readFile(destination);
    if (final.length < 1_000 || final.toString('ascii', 0, 3) !== 'ID3' && final[0] !== 0xff) {
      throw new Error(`ffmpeg produced an invalid MP3 for ${job.audio}`);
    }
    runFfmpeg(ffmpeg, ['-hide_banner', '-loglevel', 'error', '-i', destination, '-f', 'null', '-']);
    const actualDuration = mp3Duration(ffmpeg, destination);
    if (Math.abs(actualDuration - expectedDuration) > Math.max(0.25, expectedDuration * 0.03)) {
      throw new Error(`${job.audio} is ${actualDuration.toFixed(2)}s; expected about ${expectedDuration.toFixed(2)}s`);
    }
    console.log(`[${index + 1}/${jobs.length}] staged ${job.audio} (${final.length} bytes)`);
  }

  console.log(`Finished ${jobs.length} track(s) with ${calls} Kokoro synthesis call(s).`);
  if (install) await installMock(jobs, outputDir, mock);
}

main().catch((error) => {
  console.error(error.stack || error.message || error);
  process.exitCode = 1;
});

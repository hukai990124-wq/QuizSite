import { validateMutationRequest } from './account.mjs';
const MODEL = '@cf/myshell-ai/melotts';
const DAILY_LIMIT = 200;
const MAX_BYTES = 4096;
export async function handleGavinSpeech(request, env) {
    if (request.method !== 'POST')
        return new Response(null, { status: 405 });
    if (!validateMutationRequest(request))
        return new Response(null, { status: 403 });
    if (!env.MY_AI_BINDING || !env.DB || !env.AUTH_LIMIT)
        return new Response(null, { status: 503 });
    const ip = request.headers.get('CF-Connecting-IP');
    if (!ip)
        return new Response(null, { status: 403 });
    let stage = 'rate_limit';
    try {
        const limited = await env.AUTH_LIMIT.limit({ key: `gavin-speech:${ip}` });
        if (!limited.success)
            return new Response(null, { status: 429 });
        const reader = request.body?.getReader();
        if (!reader)
            return new Response(null, { status: 400 });
        const chunks = [];
        let size = 0;
        while (true) {
            const { done, value } = await reader.read();
            if (done)
                break;
            size += value.byteLength;
            if (size > MAX_BYTES) {
                await reader.cancel();
                return new Response(null, { status: 413 });
            }
            chunks.push(value);
        }
        const data = JSON.parse(await new Blob(chunks).text());
        if (!data || typeof data.text !== 'string' || !data.text.trim() || data.text.length > 600 || data.language !== 'en')
            return new Response(null, { status: 400 });
        stage = 'quota_database';
        const day = new Date().toISOString().slice(0, 10);
        const usage = await env.DB.prepare('INSERT INTO gavin_speech_usage (day, requests) VALUES (?, 1) ON CONFLICT(day) DO UPDATE SET requests = requests + 1 WHERE requests < ? RETURNING requests').bind(day, DAILY_LIMIT).first();
        if (!usage)
            return new Response(null, { status: 429 });
        stage = 'model';
        const result = await env.MY_AI_BINDING.run(MODEL, { prompt: data.text.trim(), lang: 'en' });
        // Workers AI may return either binary audio or an object containing Base64 audio.
        let audio = result;
        if (result && typeof result === 'object' && 'audio' in result && typeof result.audio === 'string' && result.audio.length > 0 && result.audio.length <= 4_000_000) {
            audio = Uint8Array.from(atob(result.audio), char => char.charCodeAt(0));
        }
        if (!(audio instanceof ReadableStream) && !(audio instanceof ArrayBuffer) && !(audio instanceof Uint8Array)) {
            console.warn(JSON.stringify({ event: 'gavin_speech_invalid_audio' }));
            return new Response(null, { status: 502 });
        }
        const bytes = audio instanceof ArrayBuffer ? new Uint8Array(audio) : audio;
        const isWav = bytes instanceof Uint8Array && bytes.length >= 12
            && bytes[0] === 82 && bytes[1] === 73 && bytes[2] === 70 && bytes[3] === 70
            && bytes[8] === 87 && bytes[9] === 65 && bytes[10] === 86 && bytes[11] === 69;
        return new Response(audio, { headers: { 'Content-Type': isWav ? 'audio/wav' : 'audio/mpeg', 'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff' } });
    }
    catch (error) {
        console.warn(JSON.stringify({ event: 'gavin_speech_failure', stage, errorName: error instanceof Error ? error.name : 'Error' }));
        return new Response(null, { status: 503 });
    }
}

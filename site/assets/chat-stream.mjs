import { ChatApiError, parseChatAnswer } from './chat-protocol.mjs';
// Only public text deltas and final quota status cross this boundary.
export async function readChatStream(response, onText) {
    if (!response.body)
        throw new Error('Missing chat stream');
    const reader = response.body.getReader();
    const decoder = new TextDecoder();
    let buffer = '', answer = '', bytes = 0;
    let completed = null;
    function consume(line) {
        if (!line.trim())
            return;
        if (completed)
            throw new Error('Unexpected data after chat completion');
        const data = JSON.parse(line);
        if (typeof data !== 'object' || data === null || Array.isArray(data))
            throw new Error('Invalid chat stream');
        const frame = data;
        if (frame.type === 'error' && typeof frame.error === 'string')
            throw new ChatApiError(frame.error, 503);
        if (frame.type === 'delta' && typeof frame.text === 'string') {
            answer += frame.text;
            if (answer.length > 100000)
                throw new Error('Chat answer too large');
            if (frame.text)
                onText(frame.text);
        }
        else if (frame.type === 'done') {
            completed = parseChatAnswer({ ...frame, answer: answer.trim() });
            if (!completed.answer)
                throw new Error('Empty chat answer');
        }
        else
            throw new Error('Invalid chat stream frame');
    }
    try {
        for (;;) {
            const { done, value } = await reader.read();
            if (done)
                break;
            bytes += value.byteLength;
            if (bytes > 1000000)
                throw new Error('Chat stream too large');
            buffer += decoder.decode(value, { stream: true });
            let cut;
            while ((cut = buffer.indexOf('\n')) !== -1) {
                consume(buffer.slice(0, cut));
                buffer = buffer.slice(cut + 1);
            }
        }
        buffer += decoder.decode();
        if (buffer.trim())
            consume(buffer);
        if (!completed)
            throw new Error('Incomplete chat stream');
        return completed;
    }
    finally {
        try {
            await reader.cancel();
        }
        finally {
            reader.releaseLock();
        }
    }
}

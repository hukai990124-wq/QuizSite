export function streamChatAnswer(run, onFailure, abort, lifetime) {
    const encoder = new TextEncoder();
    let cancelled = false;
    const body = new ReadableStream({
        start(controller) {
            function send(frame) {
                if (!cancelled)
                    controller.enqueue(encoder.encode(JSON.stringify(frame) + '\n'));
            }
            const task = (async () => {
                try {
                    const result = await run(text => send({ type: 'delta', text }));
                    send({ type: 'done', ...result });
                }
                catch (failure) {
                    await onFailure();
                    console.warn(JSON.stringify({ event: 'ai_stream_failure', errorName: failure instanceof Error ? failure.name : 'Error' }));
                    send({ type: 'error', error: '回答未完成，请稍后再试。' });
                }
                finally {
                    if (!cancelled)
                        controller.close();
                }
            })();
            lifetime?.waitUntil(task);
            return task;
        },
        cancel() { cancelled = true; abort(); }
    });
    return new Response(body, { headers: {
            'Content-Type': 'application/x-ndjson; charset=utf-8',
            'Cache-Control': 'no-store, no-transform',
            'X-Content-Type-Options': 'nosniff'
        } });
}

export interface ChatLifetime {waitUntil(task: Promise<unknown>): void;}
export interface ChatStreamCompletion {
  truncated: boolean;
  remaining: number;
  dailyLimit: number;
  authenticated: boolean;
  available: boolean;
  configured: boolean;
}

export function streamChatAnswer(
  run: (onText: (text: string) => void) => Promise<ChatStreamCompletion>,
  onFailure: () => Promise<void>,
  abort: () => void,
  lifetime?: ChatLifetime
): Response {
  const encoder = new TextEncoder();
  let cancelled = false;
  const body = new ReadableStream<Uint8Array>({
    start(controller) {
      function send(frame: object): void {
        if (!cancelled) controller.enqueue(encoder.encode(JSON.stringify(frame)+'\n'));
      }
      const task = (async () => {
        try {
          const result = await run(text => send({type:'delta',text}));
          send({type:'done',...result});
        } catch (failure) {
          await onFailure();
          console.warn(JSON.stringify({event:'ai_stream_failure',errorName:failure instanceof Error ? failure.name : 'Error'}));
          send({type:'error',error:'回答未完成，请稍后再试。'});
        } finally {
          if (!cancelled) controller.close();
        }
      })();
      lifetime?.waitUntil(task);
      return task;
    },
    cancel() {cancelled = true; abort();}
  });
  return new Response(body, {headers:{
    'Content-Type':'application/x-ndjson; charset=utf-8',
    'Cache-Control':'no-store, no-transform',
    'X-Content-Type-Options':'nosniff'
  }});
}

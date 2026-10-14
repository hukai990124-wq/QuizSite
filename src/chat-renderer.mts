// Short adaptive batches smooth provider chunks without creating a long typing delay.
export function createChatRenderer(render: (text: string) => void, instant: () => boolean) {
  let visible = '', pending: string[] = [], timer: ReturnType<typeof setTimeout> | undefined;
  let finished: (() => void) | undefined;
  function tick(): void {
    timer = undefined;
    const size = instant() ? pending.length : Math.max(3, Math.ceil(pending.length / 12));
    visible += pending.splice(0, size).join('');
    render(visible);
    if (pending.length) timer = setTimeout(tick, 24);
    else { finished?.(); finished = undefined; }
  }
  return {
    append(text: string): void {
      pending = pending.concat(Array.from(text));
      if (timer === undefined) tick();
    },
    async finish(): Promise<void> {
      if (pending.length) await new Promise<void>(resolve => {finished = resolve;});
    }
  };
}

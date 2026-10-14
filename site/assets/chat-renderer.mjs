// Short adaptive batches smooth provider chunks without creating a long typing delay.
export function createChatRenderer(render, instant) {
    let visible = '', pending = [], timer;
    let finished;
    function tick() {
        timer = undefined;
        const size = instant() ? pending.length : Math.max(3, Math.ceil(pending.length / 12));
        visible += pending.splice(0, size).join('');
        render(visible);
        if (pending.length)
            timer = setTimeout(tick, 24);
        else {
            finished?.();
            finished = undefined;
        }
    }
    return {
        append(text) {
            pending = pending.concat(Array.from(text));
            if (timer === undefined)
                tick();
        },
        async finish() {
            if (pending.length)
                await new Promise(resolve => { finished = resolve; });
        }
    };
}

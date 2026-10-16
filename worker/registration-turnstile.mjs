export function registrationConfig(env) {
    const siteKey = env.TURNSTILE_SITE_KEY?.trim() || null;
    const configured = !!siteKey && !!env.TURNSTILE_SECRET_KEY?.trim();
    return { configured, siteKey: configured ? siteKey : null };
}
const unavailable = () => ({ status: 503, error: '人机验证暂不可用，请稍后重试。' });
const rejected = () => ({ status: 403, error: '人机验证失败或已过期，请重新验证。' });
export async function verifyRegistration(request, env, token, fetcher = fetch) {
    if (!registrationConfig(env).configured)
        return unavailable();
    if (typeof token !== 'string' || !token.trim() || token.length > 2048)
        return rejected();
    try {
        const response = await fetcher('https://challenges.cloudflare.com/turnstile/v0/siteverify', {
            method: 'POST', headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ secret: env.TURNSTILE_SECRET_KEY?.trim(), response: token }),
            signal: AbortSignal.timeout(8000), redirect: 'error'
        });
        if (!response.ok)
            return unavailable();
        const data = await response.json();
        if (!data || typeof data !== 'object' || Array.isArray(data))
            return unavailable();
        const result = data;
        if (result.success !== true) {
            const codes = result['error-codes'];
            if (Array.isArray(codes) && codes.some(code => ['missing-input-secret', 'invalid-input-secret', 'internal-error'].includes(String(code))))
                return unavailable();
            return rejected();
        }
        if (result.hostname !== new URL(request.url).hostname || result.action !== 'register')
            return rejected();
        return { status: 200 };
    }
    catch {
        return unavailable();
    }
}

import { findSession, validateMutationRequest } from './account.mjs';

const MAX_BODY_BYTES = 64 * 1024;
const MAX_MESSAGES = 100;

function json(body, status = 200, headers = {}) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      'X-Content-Type-Options': 'nosniff',
      ...headers,
    },
  });
}

async function readBody(request) {
  if (!request.body) return { error: 400 };
  const reader = request.body.getReader();
  const chunks = [];
  let size = 0;
  while (true) {
    const { done, value } = await reader.read();
    if (done) break;
    size += value.byteLength;
    if (size > MAX_BODY_BYTES) {
      await reader.cancel();
      return { error: 413 };
    }
    chunks.push(value);
  }
  try {
    return { value: JSON.parse(await new Blob(chunks).text()) };
  } catch {
    return { error: 400 };
  }
}

function validBody(body, method) {
  if (!body || typeof body !== 'object' || Array.isArray(body)
      || !Number.isSafeInteger(body.revision) || body.revision < 0
      || body.revision >= Number.MAX_SAFE_INTEGER) return false;
  const keys = Object.keys(body);
  if (method === 'DELETE') return keys.length === 1 && keys[0] === 'revision';
  return keys.length === 3 && keys.every(key => ['revision', 'question', 'answer'].includes(key))
    && typeof body.question === 'string' && body.question.trim().length > 0 && body.question.length <= 2000
    && typeof body.answer === 'string' && body.answer.trim().length > 0 && body.answer.length <= 4000;
}

export async function handleGavinConversation(request, env) {
  if (!['GET', 'POST', 'DELETE'].includes(request.method)) {
    return json({ error: 'Method not allowed' }, 405, { Allow: 'GET, POST, DELETE' });
  }
  if (!env.DB) return json({ error: '会话服务暂时不可用' }, 503);
  if (request.method !== 'GET' && !validateMutationRequest(request)) return json({ error: '同源请求校验失败' }, 403);

  try {
    const session = await findSession(request, env.DB);
    if (!session) return json({ error: '请先登录' }, 401);
    if (request.headers.get('X-Gavin-Account') !== 'user:' + encodeURIComponent(session.username)) {
      return json({ error: '登录账号已更改，请重新加载' }, 409);
    }
    if (request.method !== 'GET') {
      if (!env.AUTH_LIMIT || typeof env.AUTH_LIMIT.limit !== 'function') {
        return json({ error: '会话服务暂时不可用' }, 503);
      }
      let limit;
      try {
        limit = await env.AUTH_LIMIT.limit({ key: 'gavin-conversation:' + session.user_id });
      } catch {
        return json({ error: '会话服务暂时不可用' }, 503);
      }
      if (typeof limit?.success !== 'boolean') return json({ error: '会话服务暂时不可用' }, 503);
      if (!limit.success) return json({ error: '操作过于频繁，请稍后重试' }, 429);
    }
    const row = await env.DB.prepare('SELECT messages_json, revision FROM gavin_conversations WHERE user_id = ?').bind(session.user_id).first();
    const state = row ? { messages: JSON.parse(row.messages_json), revision: row.revision } : { messages: [], revision: 0 };
    if (request.method === 'GET') return json(state);

    const parsed = await readBody(request);
    if (parsed.error) return json({ error: '请求内容无效或过长' }, parsed.error);
    const body = parsed.value;
    if (!validBody(body, request.method)) return json({ error: '请求内容无效' }, 400);
    if (body.revision !== state.revision) return json({ error: '对话已在其他位置更新，请重新加载' }, 409);

    const messages = request.method === 'DELETE' ? [] : [
      ...state.messages,
      { role: 'user', content: body.question },
      { role: 'assistant', content: body.answer },
    ].slice(-MAX_MESSAGES);
    const content = JSON.stringify(messages);
    let updated;
    if (state.revision === 0) {
      updated = await env.DB.prepare(
        'INSERT OR IGNORE INTO gavin_conversations (user_id, messages_json, revision, updated_at) VALUES (?, ?, 1, ?) RETURNING revision',
      ).bind(session.user_id, content, Date.now()).first();
    } else {
      updated = await env.DB.prepare(
        'UPDATE gavin_conversations SET messages_json = ?, revision = revision + 1, updated_at = ? WHERE user_id = ? AND revision = ? RETURNING revision',
      ).bind(content, Date.now(), session.user_id, state.revision).first();
    }
    if (!updated) return json({ error: '对话已在其他位置更新，请重新加载' }, 409);
    return json({ messages, revision: updated.revision });
  } catch (error) {
    console.warn(JSON.stringify({ event: 'gavin_conversation_failure', errorName: error instanceof Error ? error.name : 'Error' }));
    return json({ error: '会话服务暂时不可用' }, 503);
  }
}

import { createServer } from 'node:http';
import { randomBytes, createHash } from 'node:crypto';
import { readFile, writeFile, rename } from 'node:fs/promises';
import { pathToFileURL } from 'node:url';
import { validatePrompt, buildPrompt } from '../worker/sir-gavin-prompt.mjs';

const defaultConfig = new URL('../worker/prompts/sir-gavin.json', import.meta.url);
const revisionOf = text => createHash('sha256').update(text).digest('hex');

export function createPromptEditor({ configPath = defaultConfig } = {}) {
  const token = randomBytes(32).toString('hex');
  let saving = false;
  return createServer(async (request, response) => {
    const origin = `http://127.0.0.1:${request.socket.localPort}`;
    const headers = {
      'Cache-Control': 'no-store', 'X-Content-Type-Options': 'nosniff', 'X-Frame-Options': 'DENY',
      'Content-Security-Policy': "default-src 'self'; style-src 'self' 'unsafe-inline'; frame-ancestors 'none'; base-uri 'none'; form-action 'self'",
    };
    const send = (status, body, type = 'application/json; charset=utf-8') => {
      response.writeHead(status, { ...headers, 'Content-Type': type });
      response.end(type.startsWith('application/json') ? JSON.stringify(body) : body);
    };
    if (request.headers.host !== new URL(origin).host
      || (request.headers.origin && request.headers.origin !== origin)) return send(403, { error: '仅允许本地同源访问' });
    try {
      if (request.method === 'GET' && request.url === '/') {
        const html = await readFile(new URL('../quiz_kit/sir-gavin-prompt-editor.html', import.meta.url), 'utf8');
        return send(200, html.replace('__EDITOR_TOKEN__', token), 'text/html; charset=utf-8');
      }
      if (request.method === 'GET' && request.url === '/editor.js') {
        return send(200, await readFile(new URL('../quiz_kit/sir-gavin-prompt-editor.js', import.meta.url), 'utf8'), 'text/javascript; charset=utf-8');
      }
      if (request.url !== '/api/prompt') return send(404, { error: '未找到' });
      if (request.headers['x-editor-token'] !== token) return send(403, { error: '请从本地窗口访问' });
      if (request.method === 'GET') {
        const text = await readFile(configPath, 'utf8');
        const prompt = validatePrompt(JSON.parse(text));
        return send(200, { prompt, preview: buildPrompt(prompt), revision: revisionOf(text) });
      }
      if (request.method !== 'PUT') return send(405, { error: '不支持此操作' });
      if (request.headers.origin !== origin || request.headers['content-type'] !== 'application/json') return send(403, { error: '保存需要同源 JSON 请求' });
      const chunks = [];
      let length = 0;
      for await (const chunk of request) {
        chunks.push(chunk);
        length += chunk.length;
        if (length > 200000) return send(413, { error: '内容过长' });
      }
      const input = JSON.parse(Buffer.concat(chunks).toString('utf8'));
      const prompt = validatePrompt(input.prompt);
      if (saving) return send(409, { error: '正在保存，请稍后重试' });
      saving = true;
      try {
        const text = await readFile(configPath, 'utf8');
        if (input.revision !== revisionOf(text)) return send(409, { error: '文件已被其他窗口修改，请重新载入后再保存' });
        const next = JSON.stringify(prompt, null, 2) + '\n';
        const temporary = typeof configPath === 'string' ? configPath + '.tmp' : new URL('sir-gavin.json.tmp', configPath);
        await writeFile(temporary, next, 'utf8');
        await rename(temporary, configPath);
        return send(200, { prompt, preview: buildPrompt(prompt), revision: revisionOf(next) });
      } finally { saving = false; }
    } catch (error) {
      if (error instanceof SyntaxError || /提示词字段|每栏需填写/.test(error.message)) return send(400, { error: error.message });
      console.error('Prompt editor operation failed:', error);
      return send(500, { error: '读写失败，请检查本地文件权限' });
    }
  });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  const server = createPromptEditor();
  server.listen(0, '127.0.0.1', () => console.log(`Sir.Gavin 提示词编辑窗口：http://127.0.0.1:${server.address().port}/\n按 Ctrl+C 关闭。保存仅修改本地配置，不会自动部署。`));
}

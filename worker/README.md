# 后端 API 与数据库

| 文件/目录 | 用途 |
| --- | --- |
| `worker.js` | Worker 入口、在线人数及 WebSocket |
| `account.mjs` | 注册、登录、会话、答题进度同步 |
| `chat.mts` | AI 提示词、模型调用、输入检查和次数限制 |
| `chat-stream.mts` | AI 流式输出 |
| `registration-turnstile.mts` | 注册验证码的服务端验证 |
| `weekly-study.mts` | 每周学习时间 |
| `migrations/` | 数据库迁移 |
| `*.test.mjs` | 后端自动化测试 |

存在 `.mts` 的模块请编辑 `.mts`，再从仓库根目录运行 `pnpm build` 生成同名 `.mjs`。`account.mjs` 与 `worker.js` 为手写 JavaScript，直接维护。

正式部署读取仓库根目录的 `wrangler.toml`。账号数据库和 Secret 继续使用现有 Cloudflare 资源，目录整理不要求新建数据库或替换密钥。

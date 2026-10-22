# GavinAI 模型选择与 Cloudflare 部署

## 先用 Workers AI 测试

骑士对话框的模型下拉框默认选 **Cloudflare · Llama 3.1 8B FP8**，固定模型 ID 为 `@cf/meta/llama-3.1-8b-instruct-fp8`。通过现有 `MY_AI_BINDING` 调用，不需要 NVIDIA Key，也不需要为 Llama 设置 `GAVIN_AI_ENABLED`。仓库的 `wrangler.toml` 已声明该 Workers AI 绑定；若控制台未显示，给 quizsite 添加同名 Workers AI 绑定并部署。

已配置通义千问或 NVIDIA Key 时会沿用现有访客身份哈希；如果只用 Workers AI 且没有这两种 Key，应另外设置 `AI_VISITOR_SECRET` 为足够长的随机 Secret，以便支持未登录访客的限额识别。登录用户不依赖访客 Secret。

选择 NVIDIA 时仍需下面的 Key 和开关。选择与启用状态按各个模型独立检查，未配置的模型禁用发送，不自动切换供应商。切换会清空当前对话历史并记住选择。模型 ID 和人设由服务端决定，两个模型都使用 Gavin 的提示词。学习助手的模型选择不受此下拉框影响。

已核对 [Cloudflare 模型页](https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct-fp8/)，支持 Workers AI binding 和流式回复。本站日限额与 Cloudflare 平台额度不是同一计量方式；付费账户超出平台免费额度可能产生费用，以控制台用量为准。

## 当前实现

- `worker/chat.mts` 中 GavinAI 支持 `cloudflare` 和 `nvidia` 两个供应商，独立接口为 `POST /api/gavin`、`GET /api/gavin/status?provider=cloudflare`。不传 provider 时默认 Cloudflare；学习助手仍使用 `/api/chat`。
- 使用 Worker 原生 fetch，不需要安装 OpenAI SDK 或单独搭建 Node/Python 服务器。
- 保留示例的 `temperature: 1`、`top_p: 0.95`、`enable_thinking: false` 和流式输出；只返回正文，不返回思考内容。移除哈利波特和颜色工具。
- GavinAI 输出上限为 512 tokens，默认提示词要求 2–4 句短答，学术问题也适用；优先遵从本轮明确的语言要求，否则跟随当前提问语言，而非界面或历史回答语言。学习助手仍为 1024 tokens。90 秒超时。GavinAI 与学习助手共用已有 D1 次数、总预算、并发预留保护；对话历史在各自页面内独立保存。NVIDIA 权限错误不关闭学习助手，也不回退到其他付费服务。
- NVIDIA 选项默认未启用，必须同时设置 `NVIDIA_API_KEY` 和 `GAVIN_AI_ENABLED=true`。尚未使用真实 Key 联调；Workers AI 选项只依赖 AI 绑定。

## 在 Cloudflare 控制台配置

1. 从 NVIDIA 模型页面生成 API Key。示例里的 `$NVIDIA_API_KEY` 是占位符，不能原样粘贴成密钥，也不要把真实 Key 提交到 GitHub 或写入网页。
2. Cloudflare → **Workers & Pages** → 当前 Worker **quizsite** → **Settings** → **Variables and Secrets** → **Add**。
3. 类型选择 **Secret**，名称填 `NVIDIA_API_KEY`，值粘贴完整 NVIDIA Key。
4. 再添加 `GAVIN_AI_ENABLED`，值为 `true`。可同样用 Secret 类型保存，避免代码部署覆盖开关。
5. 点击 **Deploy** 应用变量。这一步仅更新当前部署的变量；新代码仍需另外部署。
6. 将本次代码更新到私有 GitHub 仓库，触发已有的 Cloudflare Git 构建。原来的 Worker 名称、D1、Durable Object 和域名配置继续沿用，不需新建项目或数据库迁移。
7. 打开部署域名的 `/api/gavin/status?provider=nvidia`，正常配置应返回 `configured: true`。再进入 `/knight/`，选择 NVIDIA 模型并发送问题。状态显示今日共用剩余额度，回复逐段出现。

NVIDIA 免费端点仅用于内部测试/评估。启用前应将 NVIDIA 调用限制为内部访问（不能只隐藏页面链接）；否则在公开站点保留 NVIDIA 关闭状态，正式开放前另行取得相应服务资格。

关闭 NVIDIA 选项：将 `GAVIN_AI_ENABLED` 改为 `false` 并部署即可，Workers AI 与题库学习助手仍可使用。

## 常见问题

| 现象 | 检查内容 |
| --- | --- |
| `configured: false` | Worker 是否为 quizsite，两个变量是否拼写正确，开关是否严格为字符串 true，是否点击 Deploy |
| 503 / 密钥或权限错误 | NVIDIA Key 是否有效，该账号是否获准调用指定模型 |
| 429 / 次数或预算耗尽 | 本站与学习助手共用的次数、并发和总预算；不要反复重试 |
| NVIDIA 上游繁忙 | 免费端点限流或服务负载；本次请求失败，不自动改用其他供应商 |
| 页面还是旧占位窗口 | 新代码尚未构建部署，或浏览器仍缓存旧资源 |

依据：[NVIDIA 模型调用示例](https://build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b)、[Cloudflare Secret 配置](https://developers.cloudflare.com/workers/configuration/secrets/)、[NVIDIA 试用条款](https://assets.ngc.nvidia.com/products/api-catalog/legal/NVIDIA%20API%20Trial%20Terms%20of%20Service.pdf)。

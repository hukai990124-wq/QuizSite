# GavinAI 模型选择与 Cloudflare 部署

## 先用 Workers AI 测试

骑士对话框的模型下拉框默认选 **Cloudflare · Llama 3.1 8B FP8**，固定模型 ID 为 `@cf/meta/llama-3.1-8b-instruct-fp8`。通过现有 `MY_AI_BINDING` 调用，不需要 NVIDIA Key，也不需要为 Llama 设置 `GAVIN_AI_ENABLED`。仓库的 `wrangler.toml` 已声明该 Workers AI 绑定；若控制台未显示，给 quizsite 添加同名 Workers AI 绑定并部署。

已配置通义千问或 NVIDIA Key 时会沿用现有访客身份哈希；如果只用 Workers AI 且没有这两种 Key，应另外设置 `AI_VISITOR_SECRET` 为足够长的随机 Secret，以便支持未登录访客的限额识别。登录用户不依赖访客 Secret。

选择 NVIDIA 时仍需下面的 Key 和开关。选择与启用状态按各个模型独立检查，未配置的模型禁用发送，不自动切换供应商。模型 ID 和人设由服务端决定，两个模型都使用 Gavin 的提示词。学习助手的模型选择不受此下拉框影响。

已核对 [Cloudflare 模型页](https://developers.cloudflare.com/workers-ai/models/llama-3.1-8b-instruct-fp8/)，支持 Workers AI binding 和流式回复。本站日限额与 Cloudflare 平台额度不是同一计量方式；付费账户超出平台免费额度可能产生费用，以控制台用量为准。

## 当前实现

- `worker/chat.mts` 中 GavinAI 支持 `cloudflare` 和 `nvidia` 两个供应商，独立接口为 `POST /api/gavin`、`GET /api/gavin/status?provider=cloudflare`。不传 provider 时默认 Cloudflare；学习助手仍使用 `/api/chat`。
- 使用 Worker 原生 fetch，不需要安装 OpenAI SDK 或单独搭建 Node/Python 服务器。
- 保留 NVIDIA 示例的 `temperature: 1`、`top_p: 0.95`、`enable_thinking: false`。上游流由服务端收集，只返回完整正文，不返回思考内容。Gavin 页面使用 JSON 整条回复，一次性展示后启动浏览器 TTS；学习助手保留流式显示。移除哈利波特和颜色工具。
- GavinAI 默认提示词要求始终使用英文回答，接受不同语言的提问；默认 2–4 句短答，学术问题也适用。90 秒超时。GavinAI 与学习助手共用已有 D1 次数、总预算、并发预留保护。NVIDIA 权限错误不关闭学习助手，也不回退到其他付费服务。
- NVIDIA 选项默认未启用，必须同时设置 `NVIDIA_API_KEY` 和 `GAVIN_AI_ENABLED=true`。尚未使用真实 Key 联调；Workers AI 选项只依赖 AI 绑定。

## 在 Cloudflare 控制台配置

1. 从 NVIDIA 模型页面生成 API Key。示例里的 `$NVIDIA_API_KEY` 是占位符，不能原样粘贴成密钥，也不要把真实 Key 提交到 GitHub 或写入网页。
2. Cloudflare → **Workers & Pages** → 当前 Worker **quizsite** → **Settings** → **Variables and Secrets** → **Add**。
3. 类型选择 **Secret**，名称填 `NVIDIA_API_KEY`，值粘贴完整 NVIDIA Key。
4. 再添加 `GAVIN_AI_ENABLED`，值为 `true`。可同样用 Secret 类型保存，避免代码部署覆盖开关。
5. 点击 **Deploy** 应用变量。这一步仅更新当前部署的变量；新代码仍需另外部署。
6. 部署代码前，在项目目录对现有 D1 数据库执行 `wrangler d1 migrations apply DB --remote`，应用待执行的迁移（包括 `0009_gavin_conversation.sql` 和 `0010_gavin_memory_summary.sql`）。然后将代码更新到私有 GitHub 仓库，触发已有的 Cloudflare Git 构建；继续沿用原有 Worker、D1、Durable Object 和域名。
7. 打开部署域名的 `/api/gavin/status?provider=nvidia`，正常配置应返回 `configured: true`。再进入 `/knight/`，选择 NVIDIA 模型并发送问题。状态显示今日共用剩余额度，完整回复生成后一次性显示并开始朗读。

## 账号会话与记忆

登录账号后，Gavin 的会话记忆存储在现有 D1 数据库中，重新登录或更换设备后可恢复；未登录时的对话只保留在当前页面。云端保存一份最多 1600 字符的摘要和最近 3 轮完整对话；更早对话在摘要成功生成并保存后才移除，无法逐字恢复。旧版已有较长记录会在后续对话中分批压缩；摘要生成或保存失败时保留原记录。每次提问使用摘要和最近 3 轮对话作为上下文。页面中的「记忆管理」可以同时清除摘要和最近对话；删除账号时也会级联删除对应会话。

网页会话接口为 `/api/gavin/conversation`：已登录用户可通过 GET 读取 `{messages, summary, revision}`，通过 POST 发送 `{question, answer, revision}` 追加一轮；压缩旧记录时还需提供新 `summary` 和已摘要消息数 `compactedCount`，并用同一版本原子替换。DELETE 发送 `{revision}` 同时清空摘要和对话；写入时 revision 不匹配返回 409，客户端应重新读取，避免覆盖其他设备的改动。请求需携带 `X-Gavin-Account: user:<URL 编码的用户名>`，服务端将其与已认证会话比较。该头不是身份凭证；接口仍使用网站账号的安全 Cookie 和同源校验。未来原生 App 需另行设计适用的登录凭证和跨域访问，不能把用户名当作认证方式。

Gavin 在正常回答的同一次模型调用中整理待压缩的旧记录，不额外占用一次提问；摘要生成会增加本次输入及输出 token 的预算预留。摘要是可能不完整的非可信资料，不作为系统指令。摘要无效时保留旧记录；若模型仍提供有效回答，会在容量允许时保存本轮原文并在后续对话继续尝试摘要。输出被截断或保存版本冲突时不会删除旧记录；重新打开页面也无法恢复未成功保存的回答。

## 朗读

英文回复在 600 字符以内时优先调用 `POST /api/gavin/speech`，通过现有 `MY_AI_BINDING` 运行 `@cf/myshell-ai/melotts`。Workers AI 可返回二进制音频或 `{ audio: "Base64 audio" }`，后端负责解码；实际 WAV 输出使用 `audio/wav`，MP3 使用 `audio/mpeg`。上线前应用 D1 迁移，其中 `0008_gavin_speech.sql` 创建朗读额度表；漏执行时接口会在 `quota_database` 阶段返回 503。

在线朗读每天全站最多 200 次，沿用 `AUTH_LIMIT` 按 IP 限流；重复播放复用当前回答的音频，不再次生成。此限制与 Cloudflare 账户免费额度不是同一计量方式。只有英文使用 MeloTTS；中文、日语、过长英文或在线服务失败时回退设备语音。

音频自动播放被浏览器阻止时保留已生成音频并提示点击「朗读回复」。解码失败时清除音频缓存再尝试设备语音；等待设备声音列表最多 800 毫秒，在线请求 20 秒超时，等待时可点击停止。离开页面、新提问和切换模型会取消旧请求与播放。

Gavin 回复完成后，以完整回答创建一次 SpeechSynthesisUtterance，按回答和提问内容选择中日英语音；不朗读流式片段或失败的半句。语速 0.92、音调 0.85，优先选择设备已有的对应语言音色；声音及可用语言由设备决定，不需要 TTS API Key。使用「朗读回复」重播，「停止朗读」取消；新提问、切换模型、离开页面会停止旧语音。若浏览器禁止异步自动朗读，提示手动点击重试；不支持 TTS 时仍能查看文字。并非所有设备语音都离线运行。

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

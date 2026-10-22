# Sir.Gavin 本地提示词工作台

在仓库根目录运行 `npm.cmd run edit:sir-gavin`（或 `pnpm run edit:sir-gavin`），打开终端输出的本地地址。端口自动分配，监听地址仅为 `127.0.0.1`；终端按 Ctrl+C 关闭。

四个编辑栏分别保存角色身份、知识范围、表达风格、回答规则。右侧实时预览最终系统提示词，点击「保存到项目」写入 `worker/prompts/sir-gavin.json`。重新载入可读取外部修改；未保存离开会提示，旧版本覆盖会被拒绝。

`worker/chat.mts` 导入该配置，导出 `SIR_GAVIN_PROMPT` 与 `buildSirGavinMessages()`，与原 `CHAT_PROMPT` 和 `buildChatMessages()` 分开。修改配置后需重新构建及部署才会更新线上版本。骑士聊天窗口通过 `/api/gavin` 调用 NVIDIA，需在服务端配置密钥并启用开关；保存提示词本身不会产生模型调用。部署见 [GavinAI Cloudflare 部署](gavin-ai-cloudflare.md)。

编辑工具位于 `quiz_kit/` 和 `scripts/`，不在公开静态目录 `site/` 内。只允许同源且持有当前进程令牌的请求保存到固定配置文件，不提供任意文件读写、模型请求或密钥输入功能。提示词不是密钥保险箱；未来启用聊天时，模型也不能保证绝不透露提示词。

## NVIDIA API 评估（2026-10-22）

先用于开发验证，再单独确认正式使用条件。没有 API Key，本次未进行真实模型调用，因此没有实测延迟、语言质量和历史准确性结论。

| 候选 | 已核实状态 | 用途判断 |
| --- | --- | --- |
| `nvidia/nemotron-3.5-lightning-30b-a3b` | Free Endpoint Available，30B 总参数 / 3B 活跃，支持文本 | 优先试验短回复的骑士导师。官方定位偏速度及 agent；英日语受支持，中文需实测。不能把宣传速度当作免费端点延迟保证。 |
| `meta/muse-glimmer-30b` | Free Endpoint Available，文本与图片输入，131K 上下文 | 后续有历史地图、图片问答时作为对比候选；三语人设与史实表现仍须测评。 |

依据：[Lightning 模型页](https://build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b)、[模型卡](https://build.nvidia.com/nvidia/nemotron-3.5-lightning-30b-a3b/modelcard)、[Muse Glimmer 模型页](https://build.nvidia.com/meta/muse-glimmer-30b)。以上推荐是基于产品需求的初选，不是实测排名。

[NVIDIA 官方 FAQ](https://docs.api.nvidia.com/nim/docs/product) 明确开发者免费访问用于原型、研发与测试，并将服务真实终端用户列为生产使用。不能将免费试用资格视为公开网站长期免费运行授权；模型本身的商用许可也不等于免费托管端点的生产授权。[试用条款](https://assets.ngc.nvidia.com/products/api-catalog/legal/NVIDIA%20API%20Trial%20Terms%20of%20Service.pdf) 也明确限制生产使用；以注册时接受的版本为准。

[官方工作人员说明](https://forums.developer.nvidia.com/t/request-more-4-000-credits-option-on-build-nvidia-com/344567)：旧 credits 制已改为试用限流，限额因模型而异，账号页面显示上限。不写死「永久免费」「固定 40 RPM」或旧的 1000 credits。

未来测试接入：后端保存 `NVIDIA_API_KEY`，请求 `https://integrate.api.nvidia.com/v1/chat/completions`，由 `buildSirGavinMessages()` 生成 messages。沿用服务端限流、日预算与超时；不把 API Key、模型选择或 system 消息控制权交给浏览器。流式回复只展示 `delta.content`，不展示 `reasoning_content`。免费测试返回 429/额度或权限错误时停止本次请求，不切换到付费服务。

建议测试：三种语言分别提问百年战争、诺曼征服、史料有争议的问题；测试错误前提纠正、人设稳定性、简短回复与提示词覆盖攻击，再比较首字延迟和完整回答延迟。

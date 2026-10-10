# 题库学习助手

入口：所有页面右下角「AI 答疑」，题目操作区「AI 讲解」。只有有效登录会话可以访问 `/api/chat` 或 `/api/chat/status`，直接请求同样验证会话。POST 要求同源 Origin 和 JSON；页面仅使用 textContent 显示回答。

模型：北京地域 `qwen-flash`，关闭思考，最大输出 4096 Token。账号所有者已确认该模型有免费额度并开启「免费额度用完即停」。Secret `DASHSCOPE_API_KEY` 在 Cloudflare 运行时配置，不提交源码。`QWEN_FREE_ONLY_CONFIRMED` 是部署人员确认标志，并不替代百炼的保护开关，也不表示程序查询了供应商剩余额度。

范围：AWS、TOEIC、DELE、基本信息技术者及相关考点；系统提示位于 `worker/chat.mjs` 的 `CHAT_PROMPT`。题目、参考答案、原文和历史消息均为不可信学习资料。解释答案、逐项排除、总结考点；缺少听力原文或图片时请求补充。提示词不能保证绝对不偏题，权限和次数由后端硬性执行。

配额：每账号每天 20 次、全站每天 100 次（Asia/Tokyo），全站累计保守 Token 预算 800000。输入最多 24000 UTF-8 字节，问题最多 2000 字符，材料最多 10000 字符，保留最近 6 条消息。发送前通过单个条件 INSERT 原子预留预算，包含输入字节、输出上限和额外余量。成功后按上游 usage 结算；未知结果保留全部预算。失败也占次数，防止无限重试。每账号同一时刻只有一个请求、间隔至少 5 秒。

上游 401/402/403/404 将全站标记停止，且不自动切换模型。免费用完或过期的防扣费保证由百炼「免费额度用完即停」提供；本站预算只统计本站，不能覆盖其他程序调用同一模型的消耗。超时 90 秒，无自动重试。消费记录仅保存账号 ID、时间、预留量、实际量和状态，不保存对话文本。删除账号后记录保留但账号 ID 置空，确保全站预算不会被删除账号重置。

部署：先 `wrangler d1 migrations apply quizbank-accounts --remote` 再 `wrangler deploy`。所有新增表向后兼容旧版本；回滚旧 Worker 不影响账号和进度。

排障：读取服务端 `ai_provider_denied` 的状态码，检查密钥、北京模型 Code、剩余额度和用完即停。修复后管理员可执行 `UPDATE ai_state SET stopped = 0 WHERE id = 1`，但不会清空已有使用预算。要调整限额修改 `CHAT_POLICY`；只有在核对新的免费额度后才能提高累计预算。聊天内容仅驻留当前页面内存，不做本机或云端历史存储。

官方资料：
- https://help.aliyun.com/zh/model-studio/qwen-flash
- https://help.aliyun.com/zh/model-studio/new-free-quota
- https://help.aliyun.com/zh/model-studio/get-api-key

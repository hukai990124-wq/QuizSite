# 账号与学习进度同步设计

## 目标与范围

在现有 Cloudflare Workers 静态题库站中增加本地账号/密码注册、登录、退出、账号删除，以及跨设备学习进度同步。静态题库和未登录时的本机学习进度继续可用；云端功能依赖尚待创建并绑定的 Cloudflare D1 数据库。

不做第三方登录、邮箱、验证码、自助找回密码或管理员重置界面。忘记密码时没有自助恢复；站主只能通过后续的受控运维流程手动重置。

## 已确认的产品规则

- 账号与密码必填，均为 6–15 个 Unicode 字符；不设字符组合规则，不去除前后空格。
- 账号区分大小写，按原样匹配。
- 允许无验证码的服务端静默限流。
- 注册成功后自动登录。会话有效期 30 天。
- 首次将本机进度并入账号时，合并不同题目；同题冲突以本机答案为准。之后按每题最后修改时间合并。
- 支持用户删除账号；验证当前密码后删除云端账号、会话和进度，本机缓存保留。
- 学习页继续以 localStorage 为离线缓存；登录后变更自动同步，离线变更保留并在恢复联网时重试。
- 总览页「重置学习进度」仍清本机进度；当时产生的删除记录在下次同步时同步到云端。

## 模块与顺序

1. 账号与会话：Worker API、密码存储、会话 cookie、限流。
2. D1 学习进度：按用户和题目记录的云端存储与冲突合并。
3. 本机迁移与自动同步：保留既有题库 localStorage 格式，增加同步元数据、重试与删除墓碑。
4. 登录界面：总览页联系作者按钮左侧显示账号入口；其他题库页面的共用导航显示账号状态。

## API 合约

所有写接口仅接受同源 JSON 请求；校验 `Origin`，不启用跨域。错误统一返回 `{ error: string }`，不回显密码或密码哈希。

| 方法与路径 | 用途 | 成功结果 |
| --- | --- | --- |
| `POST /api/auth/register` | 创建账号并建立会话 | `{ user: { username } }` + HttpOnly 会话 cookie |
| `POST /api/auth/login` | 校验凭据并建立新会话 | `{ user: { username } }` + HttpOnly 会话 cookie |
| `POST /api/auth/logout` | 撤销当前会话 | `{ ok: true }` + 清除 cookie |
| `GET /api/auth/me` | 查询当前登录状态 | `{ user: { username } }` 或 `{ user: null }` |
| `POST /api/progress/sync` | 首次合并或上传/合并变更 | `{ initialized, records }` |
| `DELETE /api/auth/account` | 密码二次确认并删除账号及云端资料 | `{ ok: true }` + 清除 cookie |

进度记录使用 `(storageKey, itemKey)` 唯一定位单题；每项包含 JSON 值、客户端最后修改时间和删除标记。首次同步通过一次完整快照完成；后续同步只上传受影响的题目，服务器返回胜出的版本。请求最多 10,000 项、整体不超过 2 MiB，单项 JSON 不超过 4 KiB。

状态码：`400` 输入无效，`401` 凭据无效/会话失效，`409` 账号已存在，`413` 进度负载超限，`429` 限流，`503` D1/限流服务未绑定或不可用。

## 数据模型

### `users`

- `id TEXT PRIMARY KEY`：随机 UUID。
- `username TEXT NOT NULL UNIQUE COLLATE BINARY`：区分大小写的账号名。
- `password_salt TEXT NOT NULL`、`password_hash TEXT NOT NULL`、`password_iterations INTEGER NOT NULL`：PBKDF2-HMAC-SHA-256 参数及派生值。
- `progress_initialized INTEGER NOT NULL DEFAULT 0`：是否完成该账号首次完整进度合并。
- `created_at INTEGER NOT NULL`。

### `sessions`

- `token_hash TEXT PRIMARY KEY`：随机会话令牌的 SHA-256，不存明文令牌。
- `user_id TEXT NOT NULL`、`created_at INTEGER NOT NULL`、`expires_at INTEGER NOT NULL`。
- 删除账号时一并删除其会话。

### `progress`

- 主键 `(user_id, storage_key, item_key)`。
- `value_json TEXT`、`updated_at INTEGER NOT NULL`、`is_deleted INTEGER NOT NULL DEFAULT 0`。
- 删除以墓碑记录表示，防止其他离线设备在下次同步时把已删除答案重新上传。
- 删除账号时一并删除其全部进度。

## 安全与隐私

- 使用 Cloudflare Workers Web Crypto 的 PBKDF2-HMAC-SHA-256、随机盐和 600,000 次迭代；账号密码只在 TLS 请求体中短暂经过 Worker，不记录日志。
- 会话令牌由密码学安全随机源生成；cookie 为 `__Host-quizbank_session`、`Secure`、`HttpOnly`、`SameSite=Strict`、`Path=/`，不设置 Domain。
- 写请求要求同源 `Origin` 和 JSON Content-Type；无开放 CORS。
- 对登录和注册使用 Cloudflare Worker Rate Limiting binding 静默限流；该服务是最终一致的缓解措施，不作为精确计数器。
- SQL 均使用 D1 prepared statement 参数绑定。对请求体、账号长度、进度键和值大小做服务端校验。
- 页面不把会话令牌放入 localStorage；仅同步元数据和现有学习进度留在 localStorage。

## 验收条件

1. 6–15 字符的账号和密码可注册/登录；边界外输入被拒绝；大小写不同的账号互不相同。
2. 重复注册、错误密码、过期/退出会话有明确且不泄露敏感信息的响应。
3. 未登录和 D1 未绑定时题库本机作答不受影响；登录状态在页面间一致。
4. 首次同步保留本机冲突答案并引入云端独有答案；后续按题目时间戳合并，支持离线重试及删除墓碑。
5. 删除账号需再次输入密码，删除所有云端会话和进度，本机缓存不被清除。
6. 注册/登录触发静默限流；写接口拒绝非同源请求。
7. 新增 Worker/API 与同步规则有 Node 内置测试；既有 Python 测试继续通过；浏览器冒烟验证无脚本错误、交互可键盘操作且手机宽度不溢出。

## 验证与部署边界

- 仓库现有验证：`python -m unittest discover`；本功能新增：`node --test worker/*.test.mjs tests/*.test.mjs`。
- 生产 D1 需要先在 Cloudflare 创建并迁移，然后把真实 `database_id` 绑定为 `DB`；本实现不代替站主创建外部 Cloudflare 资源或部署。
- Rate Limiting namespace ID 在部署前须确认在 Cloudflare 账号内唯一。

## 官方依据

- Cloudflare D1 Worker Bindings 与 prepared statements：<https://developers.cloudflare.com/d1/worker-api/>、<https://developers.cloudflare.com/d1/worker-api/prepared-statements/>
- Cloudflare D1 migrations：<https://developers.cloudflare.com/d1/reference/migrations/>
- Cloudflare Workers Web Crypto：<https://developers.cloudflare.com/workers/runtime-apis/web-crypto/>
- Cloudflare Workers Rate Limiting API：<https://developers.cloudflare.com/workers/runtime-apis/bindings/rate-limit/>
- OWASP Password Storage Cheat Sheet：<https://cheatsheetseries.owasp.org/cheatsheets/Password_Storage_Cheat_Sheet.html>
- OWASP Session Management Cheat Sheet：<https://cheatsheetseries.owasp.org/cheatsheets/Session_Management_Cheat_Sheet.html>

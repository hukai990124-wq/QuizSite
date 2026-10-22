# Sir.Gavin 迁移

入口：`/knight/`。从独立 WebPet 项目迁入 Sir.Gavin 的模型、城堡背景与握手语音，保留待机、握手、旋转、平移与缩放；使用 QuizSite 公共导航和纹章页脚。未迁入 Draco 的模型、草地场景、音效、喂食、抚摸或朗读功能。

源文件：`src/javascript/sir-gavin.mjs`、`src/css/sir-gavin.css`；运行 `pnpm build` 发布到 `site/assets/`。页面和媒体位于 `site/knight/`。

原始 GLB 约 40 MB。Cloudflare 静态资产单文件上限为 25 MiB，因此使用标准 glTF 外置二进制缓冲区，每个分片最多 20 MiB。模型数据、贴图与动画无损保留。重新导入：

```powershell
node scripts/import-sir-gavin.mjs '<原 WebPet 目录>'
```

Three.js 沿用原项目固定版本 0.150.1，由 jsDelivr 加载。模型和语音在本站托管。聊天窗口已接入独立的 GavinAI 接口；服务端配置 NVIDIA 密钥和启用开关后可用，见 [部署说明](gavin-ai-cloudflare.md)。独立 WebPet 项目保持原样；验证新部署后再决定是否停用旧部署。

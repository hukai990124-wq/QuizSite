# SAA 服务与术语集

## 目标与范围

为准备 SAA-C03 的读者提供中文参考资料，保留英文服务名和缩写，解释用途、实现的功能和相近概念的区别。用户已明确要求直接执行；页面为阅读资料，不设置题目、答案、成绩或答题进度。

覆盖 2026-10-26 核对的 AWS 官方 In-Scope AWS Services 清单（跨分类重复的 Redshift 合并），并补充四个架构领域所需的核心术语。官方清单不穷尽所有潜在考点；页面明确资料范围和核对日期，避免声称囊括未知考点。旧名称和受限服务保留考纲名称并提供说明。

## 页面与内容

- 入口：SAA 目录的「服务与术语集」卡片，独立于练习题库。
- 页面：`site/aws-saa/reference.html`，构建时生成全部内容，无 JavaScript 也可阅读。
- 按功能分组；每条有名称、中文别名、用途、主要功能、辨析说明、AWS 官方资料链接。
- 搜索名称、缩写、中文说明，叠加类别和服务/术语筛选；支持清空、结果数量及空状态。
- 复用站点导航和日夜模式；正文保持中文；支持手机和打印。
- 不加载 quizkit、随机试卷、答题卡或 AI 作答组件；不写入答题存储。

## 实现与验证

内容和范围快照在 `question-banks/aws-saa/`；构建器生成页面；样式与筛选脚本分别位于 `src/css/`、`src/javascript/`。无新增依赖。

验证：官方清单覆盖、条目 ID 唯一、字段与来源完整、中文无日文残留、所有内容静态可读；真实浏览器验证搜索交集、空状态、清空、手机溢出、深夜模式和无答题写入。

命令：`npm.cmd run build`；`node --test worker/*.test.mjs tests/*.test.mjs site/assets/back-to-top.test.mjs`；`node quiz_kit/saa_reference_audit.cjs`（使用已有 Playwright 模块）。

## 官方范围

- https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03/saa-03-in-scope-services.html
- https://docs.aws.amazon.com/aws-certification/latest/solutions-architect-associate-03.html

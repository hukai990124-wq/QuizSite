# AWS CLF-C02 练习题

> 当前发布入口已迁移到 TypeScript。请编辑本目录的 `pages.json`（题目、选项、答案、解析、页面文本）和 `bank.mts`（题库声明）；在仓库根目录运行 `node scripts/build-banks.mjs --bank aws-clf`。页面布局在 `quiz_kit/typescript/layouts.mts`。下方旧 Python/HTML 流程仅供历史采集参考；详见[统一维护说明](../README.md)。



本目录提供 4 份中英日对照练习卷，每份 50 题，共 200 题。题目按 AWS CLF-C02 官方内容领域权重抽样：云概念 12 题、安全与合规 15 题、云技术与服务 17 题、账单/定价/支持 6 题。每题含答案和解析，可在网页中作答、判分并保存本机进度。CLF-C02 官方考试共 65 题，其中 15 题不计分；这里按你的要求每套 50 题，是练习卷而非完整考试模拟。

这些是练习题，不是 AWS 官方题目，也不保证预测考试内容。英文题目和解析来自下方 MIT 许可项目；中文和日文为机器翻译，仅辅助理解。网页切换到「日本語」时显示英文与日文，中文译文会隐藏。

## 来源与许可证

- CloudCertPrep，`src/data/clf-c02/` 中的 CLF-C02 练习题：<https://github.com/nastaso/cloudcertprep/tree/9367b00d9f5b39676f4ec3413304d91a7dccbbfb/src/data/clf-c02>
- 上游项目声明采用 MIT License。完整许可文本见 [`LICENSE-CloudCertPrep.txt`](LICENSE-CloudCertPrep.txt)；转载本题库时请一并保留版权和许可声明。
- AWS CLF-C02 考试领域与权重以 [AWS 官方考试指南](https://docs.aws.amazon.com/aws-certification/latest/cloud-practitioner-02/cloud-practitioner-02.html) 为准。
- AWS 与 Amazon Web Services 是 Amazon.com, Inc. 或其关联公司的商标。本练习题库与 AWS 无关联或背书关系。

## 生成

已有 `data/questions.json` 时，运行 `python build_clf.py` 可离线重建 `output/` 和 `site/aws-clf/`，并刷新 CLF 页面所需的三语界面资源。如仅需补齐现有题库的日文，可运行 `python build_clf.py --translate-ja`；如需从固定上游版本重新抽题并生成中日机翻，可运行 `python build_clf.py --prepare`。翻译操作需要网络访问 Google 翻译公开端点。

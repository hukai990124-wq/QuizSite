# AWS AIF-C01 AI 真题库（452 题） · 第 10 份

> 题目 451–452 · 中英对照 · 来源：扫描版 AWS AI 题库（452 题，中英对照）

## Question 451  `#451`

**EN** A social media company uses an Al-based "Add as Friend" recommendation system. The company wants to ensure that its Al models are transparent and explainable. Which solution will meet these requirements in the MOsT operationally efficient way?

**中** 二家社交媒体公司采用基于人工智能的“添加为好友”推荐系统。该公司希望确保其AI模型具有透明性和 可解释性。 哪种解决方案将以最高效的操作方式满足这些要求？

- **A.** Use Amazon Rekognition to analyze user profile pictures to improve model recommendations.
  - 使用AmazonRekognition分析用户头像，以改进模型推荐。
- **B.** Use Amazon SageMaker Clarify to enhance the explainability of model recommendations.
  - 使用AmazonSageMakerClarify提升模型推荐的可解释性。
- **C.** Migrate the Al model to Amazon Personalize to improve model recommendations.
  - 将AI模型迁移至Amazon Personalize，以提升模型的推荐效果。
- **D.** Use Amazon SageMaker Ground Truth to manually detect model bias.
  - 使用Amazon SageMaker Ground Truth手动检测模型偏差。

**正确答案 / Answer: `B`**

Amazon SageMaker Clarify helps improve model transparency and explainability by showing how input features contribute to model predictions. This supports understanding why the recommendation system makes specific “Add as Friend" recommendations.

AmazonSageMakerClarify通过展示输入特征如何影响模型预测，帮助提升模型的透明度和可解释性。这 有助于理解推荐系统为何会做出特定的“添加为好友”建议。

---

## Question 452  `#452`

**EN** A company has deployed an ML model. The company wants to provide external customers with secure access to the model through the customers' own applications. Which solution will meet these requirements?

**中** 一家公司已部署了机器学习模型，希望借助客户自身的应用程序，为外部客户提供安全的模型访问服务。 哪种解决方案能满足这些要求？

- **A.** Use a custom script in the customers' application for authentication.
  - 在客户的应用程序中使用自定义脚本进行身份验证。
- **B.** Store model credentials and share them with the customers directly for authentication.
  - 存储模型凭证并直接与客户共享以进行身份验证。
- **C.** Create a secure APl endpoint that customers can use.
  - 创建一个安全的API端点，供客户使用。
- **D.** Embed the model directly into the customers' applications.
  - 将模型直接嵌入客户的应用程序中。

**正确答案 / Answer: `C`**

A secure APl endpoint allows external customers to access the deployed ML model through their own applications while enforcing authentication, authorization, monitoring, and controlled access without exposing model credentials directly.

安全的API端点可让外部客户通过自已的应用程序访问已部署的机器学习模型，同时强制执行身份验证、 授权、监控和受控访问，而无需直接暴露模型凭据。

---

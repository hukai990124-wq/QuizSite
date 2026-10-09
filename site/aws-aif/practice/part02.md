# AWS AIF-C01 AI 练习卷（230 题） · 第 02 份

> 题目 51–100 · 中英对照 · 来源：HydraNode 免费题库（考生回忆题，逐项解析）

## Question 51  `#51`

**EN** You are building a machine learning pipeline on AWS to predict customer churn. The pipeline includes data preprocessing, feature engineering, model training, and monitoring the deployed model. Which combination of AWS services should you use to ensure an efficient and scalable implementation?

**中** 您正在 AWS 上构建机器学习管道来预测客户流失。该管道包括数据预处理、特征工程、模型训练和监控已部署的模型。您应该使用哪种 AWS 服务组合来确保高效且可扩展的实施？

- **A.** Amazon SageMaker Data Wrangler for preprocessing and feature engineering
  - Amazon SageMaker Data Wrangler 用于预处理和特征工程
- **B.** Amazon SageMaker Feature Store for storing and serving engineered features
  - Amazon SageMaker Feature Store 用于存储和提供工程功能
- **C.** AWS CloudTrail for training the machine learning model
  - AWS CloudTrail 用于训练机器学习模型
- **D.** Amazon SageMaker for training and deploying the model
  - Amazon SageMaker 用于训练和部署模型
- **E.** Amazon SageMaker Model Monitor for monitoring the deployed model
  - Amazon SageMaker Model Monitor 用于监控已部署的模型

**正确答案 / Answer: `A,B,D,E`**

To build a complete ML pipeline on AWS, several specialized services can be used for different stages. Amazon SageMaker Data Wrangler handles preprocessing and feature engineering. Amazon SageMaker Feature Store manages feature storage and reuse. Amazon SageMaker is used for model training and deployment. Finally, Amazon SageMaker Model Monitor ensures that the deployed model performs as expected by monitoring for data drift and other anomalies. AWS CloudTrail, while valuable for auditing and logging, does not play a role in the ML pipeline.
A. Correct. Amazon SageMaker Data Wrangler simplifies the data preprocessing and feature engineering process by allowing users to clean, transform, and visualize data without needing to write extensive code. It is suitable for the preprocessing stage of the pipeline.
B. Correct. Amazon SageMaker Feature Store is a fully managed repository to store and retrieve machine learning features. It is designed for efficient feature reuse, enabling consistency across training and inference.
C. Incorrect. AWS CloudTrail is a service for monitoring and logging API activity across AWS accounts. While useful for security and compliance, it is not used for training machine learning models.
D. Correct. Amazon SageMaker provides a fully managed service for training and deploying machine learning models at scale. It is the appropriate choice for the training and deployment stages of the pipeline.
E. Correct. Amazon SageMaker Model Monitor continuously monitors the deployed model to detect data drift and other issues, making it ideal for the monitoring stage of the pipeline.

要在 AWS 上构建完整的 ML 管道，可以在不同阶段使用多种专门服务。 Amazon SageMaker Data Wrangler 处理预处理和特征工程。 Amazon SageMaker Feature Store 管理特征存储和重用。 Amazon SageMaker 用于模型训练和部署。最后，Amazon SageMaker Model Monitor 通过监控数据漂移和其他异常情况来确保部署的模型按预期执行。 AWS CloudTrail 虽然对于审计和日志记录很有价值，但在 ML 管道中不起作用。答：正确。 Amazon SageMaker Data Wrangler 允许用户清理、转换和可视化数据，而无需编写大量代码，从而简化了数据预处理和特征工程流程。适用于管道的预处理阶段。 B、正确。 Amazon SageMaker Feature Store 是一个完全托管的存储库，用于存储和检索机器学习功能。它旨在实现高效的特征重用，从而实现训练和推理的一致性。 C、不正确。AWS CloudTrail 是一项用于跨 AWS 账户监控和记录 API 活动的服务。虽然对于安全性和合规性很有用，但它不用于训练机器学习模型。 D、正确。 Amazon SageMaker 提供完全托管的服务，用于大规模训练和部署机器学习模型。它是管道训练和部署阶段的合适选择。 E、正确。 Amazon SageMaker Model Monitor 持续监控已部署的模型以检测数据漂移和其他问题，使其成为管道监控阶段的理想选择。

---

## Question 52  `#52`

**EN** You are tasked with deploying a machine learning model to production in AWS. To ensure long-term success, you need to implement an MLOps pipeline that addresses key challenges such as model monitoring, scalability, and minimizing technical debt. Which combination of actions will best achieve this goal?

**中** 您的任务是将机器学习模型部署到 AWS 中的生产中。为了确保长期成功，您需要实施 MLOps 管道来解决模型监控、可扩展性和最小化技术债务等关键挑战。哪种行动组合最能实现这一目标？

- **A.** Set up Amazon SageMaker Model Monitor to track model performance metrics and identify data drift.
  - 设置 Amazon SageMaker Model Monitor 来跟踪模型性能指标并识别数据偏差。
- **B.** Use a manual process to retrain the model periodically based on feedback from application users.
  - 根据应用程序用户的反馈，使用手动流程定期重新训练模型。
- **C.** Deploy the model using Amazon SageMaker endpoints with auto-scaling enabled to handle varying traffic loads.
  - 使用 Amazon SageMaker 端点部署模型，并启用自动扩展来处理不同的流量负载。
- **D.** Store experiment results in a centralized location using Amazon SageMaker Experiments for reproducibility.
  - 使用 Amazon SageMaker 实验将实验结果存储在集中位置，以实现可重复性。
- **E.** Rely on the initial training dataset to make long-term decisions without regular updates or re-training.
  - 依靠初始训练数据集做出长期决策，无需定期更新或重新训练。

**正确答案 / Answer: `A,C,D`**

Implementing MLOps in AWS requires a combination of tools and best practices to ensure a scalable, reproducible, and production-ready pipeline. By using Amazon SageMaker Model Monitor, auto-scaling endpoints, and SageMaker Experiments, you can address key operational challenges such as monitoring, scalability, and reproducibility while minimizing technical debt. Avoiding manual processes or outdated data ensures that the solution remains robust and efficient over time.
A. Correct. Setting up Amazon SageMaker Model Monitor is essential for tracking model performance and ensuring that the model remains accurate over time by identifying issues such as data drift.
B. Incorrect. Using a manual process for model retraining is not scalable and can lead to delays or errors, increasing technical debt.
C. Correct. Deploying the model with Amazon SageMaker endpoints and enabling auto-scaling ensures that the system can handle varying traffic loads efficiently, making the pipeline scalable and production-ready.
D. Correct. Using Amazon SageMaker Experiments to store experiment results promotes reproducibility and helps manage technical debt by documenting the decisions and parameters used during the model development process.
E. Incorrect. Relying solely on the initial training dataset without regular updates or retraining makes the model vulnerable to degradation over time and fails to address production readiness or long-term scalability.

在 AWS 中实施 MLOps 需要结合使用工具和最佳实践，以确保可扩展、可重复且可投入生产的管道。通过使用 Amazon SageMaker Model Monitor、自动扩展终端节点和 SageMaker Experiments，您可以解决监控、可扩展性和可重复性等关键运营挑战，同时最大限度地减少技术债务。避免手动流程或过时的数据可确保解决方案随着时间的推移保持稳健和高效。答：正确。设置 Amazon SageMaker Model Monitor 对于跟踪模型性能并通过识别数据漂移等问题确保模型随着时间的推移保持准确至关重要。 B、不正确。使用手动流程进行模型重新训练是不可扩展的，并且可能导致延迟或错误，从而增加技术债务。 C、正确。使用 Amazon SageMaker 端点部署模型并启用自动扩展可确保系统能够有效地处理不同的流量负载，从而使管道可扩展且可投入生产。 D、正确。使用 Amazon SageMaker Experiments 存储实验结果可以提高可重复性，并通过记录模型开发过程中使用的决策和参数来帮助管理技术债务。 E、不正确。仅依赖初始训练数据集而不定期更新或重新训练会使模型容易随着时间的推移而退化，并且无法解决生产就绪性或长期可扩展性问题。

---

## Question 53  `#53`

**EN** An e-commerce company uses a machine learning (ML) model to recommend products to its users. The model’s performance has been degrading over time due to changes in customer behavior. The company wants to ensure that the model performs optimally in production by implementing an MLOps strategy. Which of the following steps should be included in their MLOps process to address this issue?

**中** 一家电子商务公司使用机器学习 (ML) 模型向用户推荐产品。由于客户行为的变化，该模型的性能随着时间的推移而不断下降。该公司希望通过实施 MLOps 策略来确保该模型在生产中表现最佳。 MLOps 流程中应包含以下哪些步骤来解决此问题？

- **A.** Set up automated monitoring to track model performance metrics such as accuracy and precision.
  - 设置自动监控来跟踪模型性能指标，例如准确性和精确度。
- **B.** Implement a manual process to retrain the model every six months, regardless of performance metrics.
  - 无论性能指标如何，每六个月实施一次手动流程重新训练模型。
- **C.** Establish a pipeline to automatically retrain and deploy the model when performance drops below a threshold.
  - 建立一个管道，以便在性能下降到阈值以下时自动重新训练和部署模型。
- **D.** Archive the current dataset and replace it entirely with new data without analyzing its impact on the model.
  - 归档当前数据集并用新数据完全替换它，而不分析其对模型的影响。
- **E.** Continuously collect and label new data that reflects the latest customer behavior for retraining.
  - 不断收集和标记反映最新客户行为的新数据，以进行再培训。

**正确答案 / Answer: `A,C,E`**

To address performance degradation in production, an MLOps strategy should include automated monitoring to detect issues early, pipelines to automate retraining and deployment when performance drops, and methods to continuously collect and label new data that reflects changes in user behavior. These steps create a scalable and repeatable process that ensures production readiness and minimizes technical debt.
A. Correct. Setting up automated monitoring is essential to track the model's performance in real time and identify when it starts to degrade.
B. Incorrect. A manual process for retraining every six months is not efficient or adaptive to changes in customer behavior, as it does not account for real-time performance metrics.
C. Correct. Establishing an automated retraining and deployment pipeline ensures that the model is updated promptly when performance falls below acceptable levels.
D. Incorrect. Archiving and replacing the dataset without analysis can lead to a loss of valuable historical data and may negatively impact the model's performance.
E. Correct. Collecting and labeling new data that reflects current trends ensures that the model is trained on relevant and up-to-date information, improving its accuracy.

为了解决生产中的性能下降问题，MLOps 策略应包括自动监控以尽早发现问题、在性能下降时自动进行重新训练和部署的管道，以及持续收集和标记反映用户行为变化的新数据的方法。这些步骤创建了一个可扩展且可重复的流程，可确保生产准备就绪并最大限度地减少技术债务。答：正确。设置自动监控对于实时跟踪模型的性能并确定模型何时开始性能下降至关重要。 B、不正确。每六个月重新培训一次的手动流程效率不高，也不能适应客户行为的变化，因为它没有考虑实时绩效指标。 C、正确。建立自动再训练和部署管道可确保在性能低于可接受水平时及时更新模型。 D、不正确。在不进行分析的情况下归档和替换数据集可能会导致有价值的历史数据丢失，并可能对模型的性能产生负面影响。 E、正确。收集和标记反映当前趋势的新数据可确保模型接受相关和最新信息的训练，从而提高其准确性。

---

## Question 54  `#54`

**EN** A financial services company is deploying a machine learning model to detect fraudulent transactions. The team wants to ensure the deployed model remains accurate over time. They need to monitor the model’s performance in production and retrain it when necessary due to data drift. Which of the following strategies should the team implement to achieve this goal?

**中** 一家金融服务公司正在部署机器学习模型来检测欺诈交易。该团队希望确保部署的模型随着时间的推移保持准确。他们需要监控模型在生产中的性能，并在必要时由于数据漂移而重新训练。为了实现这一目标，团队应该实施以下哪些策略？

- **A.** Set up a pipeline to automatically retrain the model at fixed time intervals regardless of data changes.
  - 设置管道以固定时间间隔自动重新训练模型，无论数据如何变化。
- **B.** Use Amazon SageMaker Model Monitor to track data quality and distribution in real-time.
  - 使用 Amazon SageMaker Model Monitor 实时跟踪数据质量和分布。
- **C.** Establish a feedback loop to capture user-validated results and integrate them into training data for retraining.
  - 建立反馈循环来捕获用户验证的结果并将其集成到培训数据中以进行再培训。
- **D.** Manually compare the model's performance metrics every six months to decide if retraining is required.
  - 每六个月手动比较模型的性能指标，以确定是否需要重新训练。
- **E.** Implement automated alerts for significant deviations in model performance metrics.
  - 针对模型性能指标的重大偏差实施自动警报。

**正确答案 / Answer: `B,C,E`**

To manage model performance in production and address data drift, it is critical to implement a combination of automated monitoring tools, feedback loops, and alert systems. Amazon SageMaker Model Monitor provides real-time insights into data quality, while feedback loops and automated alerts ensure the model remains accurate and reliable over time. This strategy ensures production readiness and minimizes technical debt associated with model degradation.
A. Incorrect. Automatically retraining the model at fixed intervals is inefficient and may not address the actual occurrence of data drift or performance degradation.
B. Correct. Amazon SageMaker Model Monitor can continuously analyze and detect changes in data quality and distribution, which is essential for identifying data drift in production.
C. Correct. Establishing a feedback loop to capture validated results helps collect real-world data for retraining, ensuring the model adapts to evolving patterns.
D. Incorrect. Manually comparing metrics every six months is not scalable or responsive enough for production-grade systems where real-time monitoring is critical.
E. Correct. Setting up automated alerts for deviations in model performance ensures timely notifications when the model's accuracy or other key metrics degrade.

为了管理生产中的模型性能并解决数据漂移问题，实施自动化监控工具、反馈循环和警报系统的组合至关重要。 Amazon SageMaker Model Monitor 提供对数据质量的实时洞察，而反馈循环和自动警报可确保模型随着时间的推移保持准确和可靠。该策略可确保生产准备就绪并最大限度地减少与模型退化相关的技术债务。 A. 不正确。以固定时间间隔自动重新训练模型效率低下，并且可能无法解决实际发生的数据漂移或性能下降问题。 B、正确。 Amazon SageMaker Model Monitor 可以持续分析和检测数据质量和分布的变化，这对于识别生产中的数据漂移至关重要。 C、正确。建立反馈循环来捕获经过验证的结果有助于收集现实世界的数据进行再训练，确保模型适应不断变化的模式。 D、不正确。对于实时监控至关重要的生产级系统来说，每六个月手动比较一次指标的可扩展性或响应速度不够。 E、正确。针对模型性能偏差设置自动警报，确保在模型准确性或其他关键指标下降时及时收到通知。

---

## Question 55  `#55`

**EN** A company has developed a machine learning model for predicting customer churn. The model achieves an accuracy of 92% and an Area Under the ROC Curve (AUC) of 0.85. However, the business team reports that despite the model's strong metrics, the total cost of retaining customers is higher than anticipated. What should the company focus on to address this issue?

**中** 一家公司开发了一种用于预测客户流失的机器学习模型。该模型的准确度为 92%，ROC 曲线下面积 (AUC) 为 0.85。然而，业务团队报告称，尽管该模型具有强大的指标，但保留客户的总成本仍高于预期。为了解决这个问题，公司应该重点关注什么？

- **A.** Improve the model's accuracy further to reduce churn predictions.
  - 进一步提高模型的准确性以减少流失预测。
- **B.** Reevaluate business metrics like cost per retained customer and ROI.
  - 重新评估业务指标，例如每个保留客户的成本和投资回报率。
- **C.** Increase the training dataset to improve model generalization.
  - 增加训练数据集以提高模型泛化能力。
- **D.** Use a different model evaluation metric like F1 score.
  - 使用不同的 Model Evaluation 指标，例如 F1 score。

**正确答案 / Answer: `B`**

While the model performance metrics like accuracy and AUC are strong, the business problem revolves around the cost of retaining customers. To align the ML model with business objectives, it is crucial to focus on business metrics such as cost per retained customer or ROI instead of solely relying on performance metrics.
A. Incorrect. While increasing accuracy might seem beneficial, the issue lies in the business metrics. Focusing solely on accuracy may not address the cost concerns.
B. Correct. This is correct. The problem described is related to business metrics rather than model performance metrics. The company should analyze metrics like cost per retained customer and ROI to align the model with business goals.
C. Incorrect. Increasing the training dataset may improve the model's performance, but it does not directly address the issue of high retention costs.
D. Incorrect. Switching to a different model evaluation metric like F1 score would help in cases of imbalanced datasets, but it won't address the cost concerns directly tied to business metrics.

虽然准确性和 AUC 等模型性能指标很强，但业务问题却围绕着留住客户的成本。为了使机器学习模型与业务目标保持一致，关键是要关注业务指标，例如每个保留客户的成本或投资回报率，而不是仅仅依赖绩效指标。 A. 不正确。虽然提高准确性似乎是有益的，但问题在于业务指标。仅关注准确性可能无法解决成本问题。 B、正确。这是正确的。所描述的问题与业务指标相关，而不是模型性能指标。公司应该分析每个保留客户的成本和投资回报率等指标，以使模型与业务目标保持一致。 C、不正确。增加训练数据集可能会提高模型的性能，但并不能直接解决高保留成本的问题。 D、不正确。切换到不同的 Model Evaluation 指标（例如 F1 score）在数据集不平衡的情况下会有所帮助，但它无法解决与业务指标直接相关的成本问题。

---

## Question 56  `#56`

**EN** A company is using a machine learning model for customer churn prediction. The model achieves high accuracy but has a low F1 score. The business team reports that the cost of incorrectly predicting a churned customer as staying (false negative) is significantly higher than incorrectly predicting a staying customer as churned (false positive). Which of the following metrics should the company prioritize to evaluate this model's suitability for their business requirements?

**中** 一家公司正在使用机器学习模型来预测客户流失。该模型精度较高，但 F1 score 较低。业务团队报告说，错误地将流失的客户预测为流失（误报）的成本明显高于错误地将流失的客户预测为流失（误报）。公司应优先考虑以下哪些指标来评估该模型是否适合其业务需求？

- **A.** Accuracy
  - 准确性
- **B.** F1 Score
  - F1 score
- **C.** Area Under the ROC Curve (AUC)
  - ROC 曲线下面积 (AUC)
- **D.** Cost per User
  - 每用户成本

**正确答案 / Answer: `B`**

In this scenario, the business impact of false negatives is higher than false positives, and the F1 score is a performance metric that balances precision and recall. This makes it the most suitable metric to evaluate the model's effectiveness given the business requirements.
A. Incorrect. Accuracy measures the overall correctness of predictions, but it does not account for the imbalance between false positives and false negatives, which is critical in this business case.
B. Correct. F1 Score is the harmonic mean of precision and recall, making it a better metric when the cost of false positives and false negatives is imbalanced, as in this scenario.
C. Incorrect. AUC measures the model's ability to distinguish between classes across different thresholds, but it does not directly address the cost imbalance between false negatives and false positives.
D. Incorrect. Cost per User is a business metric, but it does not evaluate the performance of the machine learning model itself.

在这种情况下，误报对业务的影响高于误报，F1 score 是一个平衡精确率和召回率的性能指标。这使得它成为在给定业务需求的情况下评估模型有效性的最合适的指标。 A. 不正确。准确性衡量预测的整体正确性，但它没有考虑误报和漏报之间的不平衡，而这在此业务案例中至关重要。 B、正确。 F1 score 是精确率和召回率的调和平均值，当误报和漏报成本不平衡时（如本场景所示），它是一个更好的指标。 C、不正确。 AUC 衡量模型区分不同阈值的类别的能力，但它并不能直接解决假阴性和假阳性之间的成本不平衡问题。 D、不正确。每个用户的成本是一个业务指标，但它并不评估机器学习模型本身的性能。

---

## Question 57  `#57`

**EN** A retail company has trained a machine learning model to predict customer churn. The model achieves 95% accuracy on the test dataset. However, when deployed, the business team notices that the cost of retaining churned customers is unexpectedly high. Which combination of metrics should the team focus on to better evaluate the model's effectiveness for their business goals?

**中** 一家零售公司训练了机器学习模型来预测客户流失。该模型在测试数据集上的准确率达到 95%。然而，部署后，业务团队发现留住流失客户的成本出乎意料地高。团队应该关注哪种指标组合才能更好地评估模型对其业务目标的有效性？

- **A.** F1 score to balance precision and recall for churn predictions
  - F1 score 用于平衡流失预测的精确度和召回率
- **B.** Area Under the ROC Curve (AUC) to evaluate the model's ability to rank customers by churn risk
  - ROC 曲线下面积 (AUC)，用于评估模型按流失风险对客户进行排名的能力
- **C.** Cost per retained customer to assess the financial impact of retention strategies
  - 用于评估保留策略的财务影响的每个保留客户的成本
- **D.** Model accuracy to ensure the model performs well on the dataset
  - 模型准确性，确保模型在数据集上表现良好
- **E.** Return on Investment (ROI) to measure the profitability of the churn prediction system
  - 投资回报率 (ROI) 衡量流失预测系统的盈利能力

**正确答案 / Answer: `A,C,E`**

Evaluating a model for business goals requires combining ML performance metrics like F1 score, which balances precision and recall, with business metrics like cost per retained customer and ROI. These metrics align with the company's concerns about high retention costs and ensure the model's predictions are both accurate and financially viable. Accuracy alone is insufficient for imbalanced datasets, and AUC does not directly address the financial impact.
A. Correct. F1 score is a critical metric when dealing with imbalanced datasets, such as churn prediction, ensuring the model balances false positives and false negatives effectively.
B. Incorrect. AUC is useful for ranking predictions, but it does not directly address the financial implications or business impact of the model's performance, which is the focus here.
C. Correct. Cost per retained customer is a business metric directly tied to the financial impact of the churn prediction system and aligns with the company's concerns about retention costs.
D. Incorrect. Accuracy is not sufficient for imbalanced datasets because a high accuracy might be misleading if the model simply predicts the majority class without effectively identifying churned customers.
E. Correct. ROI is essential for understanding the overall profitability and effectiveness of the churn prediction system from a business perspective.

评估业务目标模型需要将机器学习性能指标（如 F1 score）与业务指标（如每个保留客户的成本和投资回报率）相结合，以平衡精确度和召回率。这些指标符合公司对高保留成本的担忧，并确保模型的预测既准确又在财务上可行。对于不平衡的数据集来说，仅靠准确性是不够的，而且 AUC 并不能直接解决财务影响。答：正确。 F1 score 是处理不平衡数据集（例如流失预测）时的关键指标，可确保模型有效平衡误报和漏报。 B、不正确。 AUC 对于排名预测很有用，但它并不能直接解决模型性能的财务影响或业务影响，这是这里的重点。 C、正确。每个保留客户的成本是一个与客户流失预测系统的财务影响直接相关的业务指标，并且与公司对保留成本的担忧一致。 D、不正确。对于不平衡的数据集来说，准确性是不够的，因为如果模型只是简单地预测大多数类别而没有有效识别流失的客户，那么高精度可能会产生误导。 E、正确。投资回报率对于从业务角度理解流失预测系统的整体盈利能力和有效性至关重要。

---

## Question 58  `#58`

**EN** A retail company wants to create a virtual assistant that can generate personalized product descriptions for its customers. Which of the following characteristics of generative AI makes it suitable for this use case?

**中** 一家零售公司希望创建一个虚拟助理，可以为其客户生成个性化的产品描述。生成式人工智能的以下哪些特征使其适合此用例？

- **A.** Generative AI models can create new content by learning patterns from existing data.
  - 生成式人工智能模型可以通过从现有数据中学习模式来创建新内容。
- **B.** Generative AI models are specifically designed for structured data analysis and reporting.
  - 生成式人工智能模型专为结构化数据分析和报告而设计。
- **C.** Generative AI can generate diverse outputs based on the input prompts provided.
  - 生成式人工智能可以根据提供的输入提示生成不同的输出。
- **D.** Generative AI models require minimal training data to produce relevant outputs.
  - 生成式人工智能模型需要最少的训练数据来产生相关的输出。
- **E.** Generative AI can interpret customer sentiment and predict future buying trends.
  - 生成式人工智能可以解读客户情绪并预测未来的购买趋势。

**正确答案 / Answer: `A,C`**

Generative AI excels at creating new content by leveraging patterns in existing data and generating diverse outputs. These characteristics make it suitable for use cases like creating personalized product descriptions. However, it is not specifically designed for structured data analysis or sentiment interpretation, and its data requirements can vary depending on the complexity of the task.
A. Correct. Correct. Generative AI is capable of learning patterns from existing data and applying them to create new, meaningful content, such as product descriptions.
B. Incorrect. Incorrect. Generative AI is not specifically designed for structured data analysis; that is typically the focus of predictive or descriptive AI models.
C. Correct. Correct. Generative AI can produce diverse outputs, making it suitable for tasks like creating varied product descriptions based on different input prompts.
D. Incorrect. Incorrect. While generative AI can work with large datasets, the claim that it requires minimal training data is context-dependent and generally untrue for complex tasks.
E. Incorrect. Incorrect. While customer sentiment analysis is a feature of some AI models, it is not a primary characteristic of generative AI.

生成式人工智能擅长通过利用现有数据中的模式并生成不同的输出来创建新内容。这些特性使其适合创建个性化产品描述等用例。然而，它并不是专门为结构化数据分析或情感解释而设计的，其数据要求可能会根据任务的复杂性而变化。答：正确。正确的。生成式人工智能能够从现有数据中学习模式，并将其应用于创建新的、有意义的内容，例如产品描述。 B、不正确。不正确。生成式人工智能并不是专门为结构化数据分析而设计的；这通常是预测性或描述性人工智能模型的焦点。 C、正确。正确的。生成式人工智能可以产生不同的输出，使其适合诸如根据不同的输入提示创建不同的产品描述等任务。 D、不正确。不正确。虽然生成式人工智能可以处理大型数据集，但它需要最少训练数据的说法是依赖于上下文的，对于复杂的任务来说通常是不正确的。 E、不正确。不正确。虽然客户情绪分析是某些人工智能模型的一个特征，但它并不是生成式人工智能的主要特征。

---

## Question 59  `#59`

**EN** An e-commerce company wants to create a personalized product description generator for its website, capable of generating unique text for each product based on its attributes. Which of the following characteristics of generative AI makes it suitable for this task?

**中** 一家电子商务公司希望为其网站创建个性化的产品描述生成器，能够根据每个产品的属性生成唯一的文本。生成式人工智能的以下哪些特征使其适合这项任务？

- **A.** Generative AI models can create new content that has not been explicitly programmed or stored.
  - 生成式人工智能模型可以创建尚未明确编程或存储的新内容。
- **B.** Generative AI models rely on predefined templates to generate text, ensuring consistency.
  - 生成式人工智能模型依靠预定义的模板来生成文本，确保一致性。
- **C.** Generative AI models can learn patterns and relationships from training data to produce coherent and relevant content.
  - 生成式人工智能模型可以从训练数据中学习模式和关系，以生成连贯且相关的内容。
- **D.** Generative AI models are designed to retrieve exact information from a database.
  - 生成式人工智能模型旨在从数据库中检索准确的信息。
- **E.** Generative AI models can generate diverse outputs based on input prompts, allowing flexibility in content creation.
  - 生成式人工智能模型可以根据输入提示生成不同的输出，从而实现内容创建的灵活性。

**正确答案 / Answer: `A,C,E`**

Generative AI is ideal for tasks like creating personalized product descriptions because it can generate new, coherent, and contextually relevant content based on patterns learned from training data. It provides flexibility and diversity in outputs, making it well-suited for dynamic content creation without relying on static templates or exact retrieval mechanisms.
A. Correct. Correct: Generative AI models, such as GPT models, are designed to generate new content rather than simply reproducing stored or predefined data.
B. Incorrect. Incorrect: While predefined templates ensure consistency, generative AI focuses on dynamic creation rather than relying on static templates.
C. Correct. Correct: Generative AI models analyze patterns and relationships in training data, enabling them to generate contextually relevant and coherent output.
D. Incorrect. Incorrect: Generative AI does not function as a database retrieval system; its purpose is to generate new content rather than fetch exact stored data.
E. Correct. Correct: Generative AI models allow flexibility in content creation by generating diverse outputs based on the given input prompts.

生成式人工智能非常适合创建个性化产品描述等任务，因为它可以根据从训练数据中学习的模式生成新的、连贯的且与上下文相关的内容。它提供了输出的灵活性和多样性，使其非常适合动态内容创建，而无需依赖静态模板或精确的检索机制。答：正确。正确：生成式 AI 模型（例如 GPT 模型）旨在生成新内容，而不是简单地复制存储或预定义的数据。 B、不正确。错误：虽然预定义模板可确保一致性，但生成式 AI 侧重于动态创建，而不是依赖静态模板。 C、正确。正确：生成式人工智能模型分析训练数据中的模式和关系，使它们能够生成上下文相关且连贯的输出。 D、不正确。错误：生成式人工智能不能充当数据库检索系统；其目的是生成新内容而不是获取确切的存储数据。 E、正确。正确：生成式 AI 模型可以根据给定的输入提示生成不同的输出，从而实现内容创建的灵活性。

---

## Question 60  `#60`

**EN** A company wants to generate unique product descriptions for its e-commerce website using generative AI. Which of the following concepts of generative AI should the company understand to implement this solution effectively?

**中** 一家公司希望使用生成式人工智能为其电子商务网站生成独特的产品描述。公司应该了解以下哪些生成人工智能概念才能有效实施该解决方案？

- **A.** Generative AI models use training data to learn patterns and create new content similar to the data.
  - 生成式人工智能模型使用训练数据来学习模式并创建与数据类似的新内容。
- **B.** Generative AI models can only work with structured numerical data and are not suitable for text generation tasks.
  - 生成式人工智能模型只能处理结构化数值数据，不适合文本生成任务。
- **C.** The output of generative AI models may require human review to ensure accuracy and appropriateness.
  - 生成式人工智能模型的输出可能需要人工审查以确保准确性和适当性。
- **D.** Generative AI models like GPT rely on techniques such as transformer-based architectures for text generation.
  - 像 GPT 这样的生成式 AI 模型依赖于基于 Transformer 的文本生成架构等技术。
- **E.** Generative AI models can guarantee fully accurate and factually correct outputs in all cases.
  - 生成式人工智能模型可以保证在所有情况下输出完全准确且事实上正确。

**正确答案 / Answer: `A,C,D`**

To generate product descriptions using generative AI, the company must understand how generative models learn patterns from training data, the need for human review of generated content, and the underlying technology such as transformer-based architectures. Generative AI is well-suited for text-related tasks, but it does not guarantee fully accurate outputs.
A. Correct. Correct: Generative AI models analyze patterns in their training data to create new content that resembles the training examples, which is key to generating product descriptions.
B. Incorrect. Incorrect: Generative AI models are highly effective with unstructured data like text, making them suitable for tasks like text generation.
C. Correct. Correct: Outputs of generative AI models often require human review to ensure correctness, especially for critical applications like product descriptions.
D. Correct. Correct: Transformer-based architectures, such as those used in GPT models, are foundational to modern generative AI for text generation tasks.
E. Incorrect. Incorrect: Generative AI cannot guarantee fully accurate outputs since the models rely on probabilistic patterns and may generate incorrect or inappropriate content.

要使用生成式人工智能生成产品描述，公司必须了解生成模型如何从训练数据中学习模式、对生成内容进行人工审查的需求以及基于变压器的架构等底层技术。生成式人工智能非常适合与文本相关的任务，但它不能保证完全准确的输出。答：正确。正确：生成式 AI 模型分析训练数据中的模式，以创建类似于训练示例的新内容，这是生成产品描述的关键。 B、不正确。错误：生成式人工智能模型对于文本等非结构化数据非常有效，使其适合文本生成等任务。 C、正确。正确：生成式人工智能模型的输出通常需要人工审查以确保正确性，特别是对于产品描述等关键应用。 D、正确。正确：基于 Transformer 的架构（例如 GPT 模型中使用的架构）是现代生成人工智能文本生成任务的基础。 E、不正确。错误：生成式人工智能无法保证完全准确的输出，因为模型依赖于概率模式，可能会生成不正确或不适当的内容。

---

## Question 61  `#61`

**EN** You are tasked with developing a text summarization application using a transformer-based large language model (LLM). During testing, you notice that the model generates incomplete sentences when summarizing long input documents. What is the best approach to address this issue?

**中** 您的任务是使用基于转换器的大语言模型 (LLM) 开发文本摘要应用程序。在测试过程中，您注意到模型在总结长输入文档时生成不完整的句子。解决这个问题的最佳方法是什么？

- **A.** Use chunking to split the input document into smaller, manageable segments before feeding them to the model.
  - 使用分块将输入文档分割成更小的、可管理的片段，然后再将其输入模型。
- **B.** Increase the model's token limit by adding more GPUs to your infrastructure.
  - 通过向基础设施添加更多 GPU 来增加模型的令牌限制。
- **C.** Reduce the output length of the model by setting a lower maximum token limit in the prompt.
  - 通过在提示中设置较低的最大令牌限制来减少模型的输出长度。
- **D.** Switch to a multi-modal model to process the text content more effectively.
  - 切换到多模态模型以更有效地处理文本内容。

**正确答案 / Answer: `A`**

Transformer-based LLMs have token limits, and processing inputs that exceed these limits can lead to incomplete or truncated outputs. Chunking is a foundational technique in generative AI to divide lengthy inputs into smaller parts, allowing the model to process each part effectively without encountering token limitations. This ensures accurate and complete summaries for long documents.
A. Correct. Chunking is an effective method for handling lengthy inputs by dividing them into smaller, manageable segments, ensuring the model processes them without exceeding token limits. This directly addresses the problem of incomplete outputs.
B. Incorrect. The token limit of a model is determined by its architecture and cannot be arbitrarily increased by adding more GPUs. This option does not address the core issue.
C. Incorrect. Reducing the output length by setting a lower maximum token limit may further truncate the summary, worsening the issue rather than solving it.
D. Incorrect. Multi-modal models are designed to process multiple data types, such as text and images. Switching to a multi-modal model does not address the specific issue of handling long text inputs in a summarization task.

基于变压器的 LLMs 具有令牌限制，超过这些限制的处理输入可能会导致输出不完整或被截断。分块是生成人工智能中的一项基础技术，可将冗长的输入分成较小的部分，从而使模型能够有效地处理每个部分，而不会遇到令牌限制。这确保了长文档的准确和完整的摘要。答：正确。分块是处理冗长输入的有效方法，通过将它们分成更小的、可管理的部分，确保模型在不超出令牌限制的情况下处理它们。这直接解决了输出不完整的问题。 B、不正确。模型的代币限制由其架构决定，不能通过添加更多 GPU 来随意增加。这个选项没有解决核心问题。 C、不正确。通过设置较低的最大令牌限制来减少输出长度可能会进一步截断摘要，从而使问题恶化而不是解决问题。 D、不正确。多模态模型旨在处理多种数据类型，例如文本和图像。切换到多模式模型并不能解决摘要任务中处理长文本输入的具体问题。

---

## Question 62  `#62`

**EN** A retail company wants to use a transformer-based large language model (LLM) to analyze customer feedback and generate personalized product recommendations. However, they notice that the model sometimes struggles with long inputs, such as detailed customer reviews. What foundational generative AI concept can help them address this issue?

**中** 一家零售公司希望使用基于 Transformer 的大语言模型 (LLM) 来分析客户反馈并生成个性化产品推荐。然而，他们注意到该模型有时会难以处理较长的输入，例如详细的客户评论。哪些基本的生成人工智能概念可以帮助他们解决这个问题？

- **A.** Tokenization
  - 代币化
- **B.** Chunking
  - 分块
- **C.** Embeddings
  - 嵌入
- **D.** Prompt engineering
  - 及时工程

**正确答案 / Answer: `B`**

Transformer-based LLMs typically have a maximum input token limit, which can cause issues when processing long text inputs like detailed customer reviews. Chunking is the appropriate solution, as it breaks the input into smaller segments that the model can process individually, ensuring no information is lost due to input size constraints.
A. Incorrect. Tokenization refers to breaking text into smaller units, such as words or subwords, for processing by the model. While tokenization is important, it does not directly address the issue of handling long inputs.
B. Correct. Chunking involves splitting long inputs into smaller, manageable pieces that can be processed by the model. This is a common solution to address limitations in model input size, making it the correct answer.
C. Incorrect. Embeddings are vector representations of data that capture semantic meaning. While embeddings are useful in many AI tasks, they are not specifically intended to handle long inputs.
D. Incorrect. Prompt engineering involves crafting effective prompts to guide the model's behavior. While it can improve the quality of model outputs, it does not solve the issue of input length limitations.

基于 Transformer 的 LLMs 通常具有最大输入令牌限制，这在处理详细客户评论等长文本输入时可能会导致问题。分块是合适的解决方案，因为它将输入分解为模型可以单独处理的更小的部分，从而确保不会因输入大小限制而丢失信息。 A. 不正确。分词是指将文本分解为更小的单元，例如单词或子词，以供模型处理。虽然标记化很重要，但它并不能直接解决处理长输入的问题。 B、正确。分块涉及将长输入分割成更小的、可管理的部分，以便模型可以处理。这是解决模型输入大小限制的常见解决方案，使其成为正确的答案。 C、不正确。嵌入是捕获语义的数据的向量表示。虽然嵌入在许多人工智能任务中很有用，但它们并不是专门用于处理长输入。 D、不正确。提示工程涉及制作有效的提示来指导模型的行为。虽然它可以提高模型输出的质量，但它并不能解决输入长度限制的问题。

---

## Question 63  `#63`

**EN** You are tasked with building a customer service chatbot using a foundation model based on a transformer architecture. To ensure the chatbot understands queries effectively, you decide to optimize the prompts provided to the model. Which of the following practices would enhance the model's performance?

**中** 您的任务是使用基于变压器架构的基础模型构建客户服务聊天机器人。为了确保聊天机器人有效地理解查询，您决定优化提供给模型的提示。以下哪些实践可以提高模型的性能？

- **A.** Providing clear and specific instructions in the prompt
  - 在提示中提供清晰具体的说明
- **B.** Using embeddings to preprocess the input data before prompt construction
  - 在提示构建之前使用嵌入来预处理输入数据
- **C.** Adding unnecessary context to the prompt to make it more detailed
  - 在提示中添加不必要的上下文以使其更加详细
- **D.** Experimenting with different phrasing of the prompt to improve responses
  - 尝试不同的提示措辞以改善反应
- **E.** Leveraging multi-modal inputs like images along with text for better understanding
  - 利用图像和文本等多模式输入来更好地理解

**正确答案 / Answer: `A,D,E`**

Effective prompt engineering is crucial for maximizing the performance of large language models (LLMs). Clear instructions, iterative experimentation with prompt phrasing, and utilizing multi-modal inputs (when supported by the model) are best practices. Adding irrelevant details or relying on unrelated techniques like embeddings does not contribute to prompt optimization.
A. Correct. Providing clear and specific instructions in the prompt ensures the model understands the task and responds more accurately. Ambiguity can lead to inconsistent outputs.
B. Incorrect. Using embeddings is a preprocessing technique unrelated to prompt construction. While embeddings are useful for vectorizing data, they are not part of crafting effective prompts.
C. Incorrect. Adding unnecessary context can confuse the model and degrade performance. It's more effective to keep the prompt concise and relevant.
D. Correct. Experimenting with different phrasings helps identify the most effective way to communicate the task to the model. Prompt engineering often involves iterative refinement.
E. Correct. Leveraging multi-modal inputs can enhance the model's ability to understand complex queries, especially in scenarios requiring image or audio processing alongside text.

有效的提示工程对于最大化大型语言模型（LLMs）的性能至关重要。清晰的说明、带有提示措辞的迭代实验以及利用多模式输入（当模型支持时）是最佳实践。添加不相关的细节或依赖嵌入等不相关的技术无助于及时优化。答：正确。在提示中提供清晰具体的说明可确保模型理解任务并更准确地做出响应。歧义可能导致输出不一致。 B、不正确。使用嵌入是一种与提示构造无关的预处理技术。虽然嵌入对于矢量化数据很有用，但它们并不是制作有效提示的一部分。 C、不正确。添加不必要的上下文可能会混淆模型并降低性能。保持提示简洁且相关会更有效。 D、正确。尝试不同的措辞有助于确定将任务传达给模型的最有效方法。快速工程通常涉及迭代细化。 E、正确。利用多模式输入可以增强模型理解复杂查询的能力，特别是在需要图像或音频与文本一起处理的场景中。

---

## Question 64  `#64`

**EN** An e-commerce company wants to improve customer engagement on their platform. They are considering using generative AI models to enhance the customer experience by providing personalized product recommendations, assisting customers with queries, and summarizing product reviews. Which of the following are valid generative AI use cases for this scenario?

**中** 一家电子商务公司希望提高客户在其平台上的参与度。他们正在考虑使用生成式人工智能模型，通过提供个性化产品推荐、协助客户查询和总结产品评论来增强客户体验。以下哪些是此场景的有效生成式 AI 用例？

- **A.** Generating personalized product recommendations based on user behavior
  - 根据用户行为生成个性化产品推荐
- **B.** Creating chatbots to assist customers with their queries in real-time
  - 创建聊天机器人来帮助客户实时解答疑问
- **C.** Summarizing customer reviews to provide concise highlights for potential buyers
  - 总结客户评论，为潜在买家提供简洁的亮点
- **D.** Generating synthetic product images to replace actual product photos
  - 生成合成产品图像以替换实际产品照片
- **E.** Building a static FAQ page for general customer queries
  - 为一般客户查询构建静态常见问题解答页面

**正确答案 / Answer: `A,B,C`**

Generative AI models are highly effective for use cases that involve dynamic content creation, personalization, and summarization. In this scenario, the valid generative AI use cases include generating personalized recommendations, creating intelligent chatbots for customer service, and summarizing product reviews to improve the customer experience. However, generating synthetic product images or building static FAQ pages do not align with the typical strengths of generative AI in this context.
A. Correct. Correct: Generative AI can be used to create recommendation engines that analyze user behavior and preferences to provide personalized suggestions.
B. Correct. Correct: Chatbots powered by generative AI can engage with customers in real-time, understand their queries, and provide relevant responses.
C. Correct. Correct: Generative AI can summarize large amounts of text, like customer reviews, into concise highlights for easier consumption by users.
D. Incorrect. Incorrect: While generative AI can create synthetic images, replacing actual product photos with generated ones is not a typical use case in e-commerce as it may mislead customers.
E. Incorrect. Incorrect: Building a static FAQ page is not a generative AI use case as it does not involve AI-based dynamic interaction or generation of content.

生成式 AI 模型对于涉及动态内容创建、个性化和摘要的用例非常有效。在这种情况下，有效的生成式人工智能用例包括生成个性化推荐、创建用于客户服务的智能聊天机器人以及总结产品评论以改善客户体验。然而，生成合成产品图像或构建静态常见问题解答页面并不符合生成式人工智能在这种情况下的典型优势。答：正确。正确：生成式人工智能可用于创建推荐引擎，分析用户行为和偏好以提供个性化建议。 B、正确。正确：由生成式人工智能支持的聊天机器人可以与客户实时互动，了解他们的疑问并提供相关响应。 C、正确。正确：生成式人工智能可以将大量文本（例如客户评论）总结为简洁的亮点，以便用户更轻松地使用。 D、不正确。错误：虽然生成式人工智能可以创建合成图像，但用生成的产品照片替换实际产品照片并不是电子商务中的典型用例，因为它可能会误导客户。 E、不正确。错误：构建静态常见问题解答页面不是生成式 AI 用例，因为它不涉及基于 AI 的动态交互或内容生成。

---

## Question 65  `#65`

**EN** A retail company wants to enhance its customer experience by deploying a virtual assistant to handle customer inquiries in a conversational manner, suggest relevant products based on customer preferences, and provide multilingual support. Which of the following generative AI use cases would best address this requirement?

**中** 一家零售公司希望通过部署虚拟助理以对话方式处理客户询问、根据客户偏好推荐相关产品并提供多语言支持来增强客户体验。以下哪些生成式人工智能用例最能满足这一要求？

- **A.** Chatbots
  - 聊天机器人
- **B.** Recommendation engines
  - 推荐引擎
- **C.** Translation
  - 翻译
- **D.** Image generation
  - 图像生成
- **E.** Code generation
  - 代码生成

**正确答案 / Answer: `A,B,C`**

The retail company's requirements, handling customer inquiries conversationally, suggesting products, and providing multilingual support, align with the use cases of chatbots, recommendation engines, and translation. Generative AI models like large language models (LLMs) are well-suited for these tasks due to their ability to generate human-like responses, analyze customer preferences, and operate across multiple languages. Image generation and code generation do not address the specific needs of this scenario.
A. Correct. Chatbots are a suitable use case here because they can engage with customers conversationally to answer inquiries and assist with tasks.
B. Correct. Recommendation engines are relevant as they can suggest products based on customer preferences and browsing behavior.
C. Correct. Translation is important for providing multilingual support, enabling communication with customers in various languages.
D. Incorrect. Image generation is not relevant in this context since the use case does not involve creating or manipulating images.
E. Incorrect. Code generation is not applicable because the scenario does not involve automatically creating or improving code.

零售公司的要求，即以对话方式处理客户询问、建议产品并提供多语言支持，与聊天机器人、推荐引擎和翻译的用例保持一致。像大语言模型 (LLMs) 这样的生成式 AI 模型非常适合这些任务，因为它们能够生成类似人类的响应、分析客户偏好以及跨多种语言进行操作。图像生成和代码生成不能解决此场景的特定需求。答：正确。聊天机器人是一个合适的用例，因为它们可以与客户进行对话，回答询问并协助完成任务。 B、正确。推荐引擎是相关的，因为它们可以根据客户偏好和浏览行为推荐产品。 C、正确。翻译对于提供多语言支持、实现与各种语言的客户沟通非常重要。 D、不正确。图像生成与此上下文无关，因为用例不涉及创建或操作图像。 E、不正确。代码生成不适用，因为该场景不涉及自动创建或改进代码。

---

## Question 66  `#66`

**EN** A retail company wants to improve its customer experience by leveraging generative AI. Which of the following use cases would be most appropriate for implementing generative AI models in this scenario?

**中** 一家零售公司希望通过利用生成式人工智能来改善其客户体验。以下哪些用例最适合在这种情况下实施生成式 AI 模型？

- **A.** Creating an AI-powered chatbot to handle customer inquiries in real time
  - 创建人工智能驱动的聊天机器人来实时处理客户询问
- **B.** Generating personalized product recommendations based on user behavior
  - 根据用户行为生成个性化产品推荐
- **C.** Producing weekly sales reports by analyzing historical data
  - 通过分析历史数据生成每周销售报告
- **D.** Automating the generation of marketing content, such as product descriptions and social media posts
  - 自动生成营销内容，例如产品描述和社交媒体帖子
- **E.** Translating product descriptions into multiple languages for international customers
  - 为国际客户将产品描述翻译成多种语言

**正确答案 / Answer: `A,B,D,E`**

Generative AI models are highly effective for tasks that involve natural language generation, personalization, and content creation. In this scenario, the retail company can use generative AI to enhance customer service, personalize recommendations, streamline content creation, and enable multi-language support to improve the overall customer experience. Tasks like sales reporting are not typically suited for generative AI and are better handled by other AWS services focused on data analysis.
A. Correct. Chatbots powered by generative AI models can simulate human-like conversations and efficiently handle customer inquiries, improving customer experience.
B. Correct. Generative AI can be used to personalize product recommendations by analyzing user behavior and preferences, enhancing customer engagement.
C. Incorrect. While generating reports is a valuable task, it is more suited to traditional data analytics and business intelligence tools rather than generative AI.
D. Correct. Generative AI models can create marketing content like product descriptions and social media posts, saving time and ensuring consistent messaging.
E. Correct. Generative AI is well-suited for natural language processing tasks, such as translating product descriptions into multiple languages, making products accessible to a global audience.

生成式人工智能模型对于涉及自然语言生成、个性化和内容创建的任务非常有效。在这种情况下，零售公司可以使用生成式人工智能来增强客户服务、个性化推荐、简化内容创建并启用多语言支持以改善整体客户体验。销售报告等任务通常不适合生成式 AI，最好由其他专注于数据分析的 AWS 服务来处理。答：正确。由生成式人工智能模型支持的聊天机器人可以模拟类人对话并有效处理客户询问，从而改善客户体验。 B、正确。生成式人工智能可通过分析用户行为和偏好来个性化产品推荐，从而提高客户参与度。 C、不正确。虽然生成报告是一项有价值的任务，但它更适合传统的数据分析和商业智能工具，而不是生成式人工智能。 D、正确。生成式人工智能模型可以创建产品描述和社交媒体帖子等营销内容，从而节省时间并确保消息传递的一致性。 E、正确。生成式人工智能非常适合自然语言处理任务，例如将产品描述翻译成多种语言，使全球受众都能使用产品。

---

## Question 67  `#67`

**EN** An e-commerce company wants to leverage a foundation model to improve their product recommendation system. They plan to follow the foundation model lifecycle. Which steps must they include to ensure the model performs optimally for their specific use case?

**中** 一家电子商务公司希望利用基础模型来改进其产品推荐系统。他们计划遵循基础模型生命周期。他们必须包括哪些步骤才能确保模型针对其特定用例发挥最佳性能？

- **A.** Pre-train the model on a large generic dataset to learn general patterns.
  - 在大型通用数据集上预训练模型以学习通用模式。
- **B.** Fine-tune the model on a domain-specific dataset containing customer purchase data.
  - 在包含客户购买数据的特定领域数据集上微调模型。
- **C.** Deploy the model immediately after pre-training without evaluation.
  - 预训练后立即部署模型，无需评估。
- **D.** Gather feedback from users to iteratively improve the model post-deployment.
  - 收集用户的反馈，以迭代改进部署后的模型。
- **E.** Skip data selection and directly use publicly available datasets for pre-training.
  - 跳过数据选择，直接使用公开的数据集进行预训练。

**正确答案 / Answer: `A,B,D`**

The foundation model lifecycle involves pre-training, fine-tuning, evaluation, deployment, and feedback. Pre-training on a generic dataset helps the model learn general patterns, while fine-tuning on domain-specific data ensures the model is tailored to the specific use case. Feedback post-deployment is essential for continuous improvement. Skipping evaluation or data selection can lead to poor model performance and should be avoided.
A. Correct. Pre-training is a crucial step in the foundation model lifecycle, as it helps the model learn general patterns from a large dataset before fine-tuning it for a specific use case.
B. Correct. Fine-tuning allows the model to adapt to a specific domain or context, such as customer purchase data, which is essential for improving performance in the recommendation system.
C. Incorrect. Skipping evaluation and deploying the model immediately after pre-training is not a best practice, as evaluation ensures the model meets performance standards before deployment.
D. Correct. Gathering feedback post-deployment is an important part of the lifecycle to identify areas for improvement and refine the model iteratively.
E. Incorrect. Skipping data selection and relying only on publicly available datasets may lead to suboptimal pre-training as the data might not be relevant or high-quality for the task.

基础模型生命周期包括预训练、微调、评估、部署和反馈。对通用数据集的预训练有助于模型学习一般模式，而对特定领域数据的微调可确保模型适合特定用例。部署后的反馈对于持续改进至关重要。跳过评估或数据选择可能会导致模型性能不佳，应该避免。答：正确。预训练是基础模型生命周期中的关键步骤，因为它有助于模型在针对特定用例进行微调之前从大型数据集中学习一般模式。 B、正确。微调允许模型适应特定领域或上下文，例如客户购买数据，这对于提高推荐系统的性能至关重要。 C、不正确。跳过评估并在预训练后立即部署模型并不是最佳实践，因为评估可确保模型在部署前满足性能标准。 D、正确。收集部署后反馈是生命周期的重要组成部分，用于确定需要改进的领域并迭代地完善模型。 E、不正确。跳过数据选择并仅依赖公开可用的数据集可能会导致预训练效果不佳，因为数据可能与任务无关或质量不高。

---

## Question 68  `#68`

**EN** An e-commerce company wants to implement a recommendation engine using a foundation model. They have collected customer interaction data, selected a pre-trained model, and fine-tuned it using their proprietary data. Before deployment, which step in the foundation model lifecycle should they perform to ensure the model is ready for real-world use?

**中** 一家电子商务公司希望使用基础模型来实现推荐引擎。他们收集了客户交互数据，选择了预先训练的模型，并使用其专有数据对其进行了微调。在部署之前，他们应该执行基础模型生命周期中的哪一步来确保模型可供实际使用？

- **A.** Evaluate the model's performance using relevant metrics and test datasets.
  - 使用相关指标和测试数据集评估模型的性能。
- **B.** Deploy the model directly to production and monitor customer feedback.
  - 将模型直接部署到生产中并监控客户反馈。
- **C.** Select new training data to improve the fine-tuning process.
  - 选择新的训练数据来改进微调过程。
- **D.** Switch to a different foundation model for better results.
  - 切换到不同的基础模型以获得更好的结果。

**正确答案 / Answer: `A`**

The foundation model lifecycle includes evaluating the model's performance after fine-tuning and before deployment. This step ensures the model meets the required standards for accuracy and effectiveness. Skipping this step can result in poor user experiences or operational issues after deployment.
A. Correct. Evaluation is a critical step to assess the model's performance using metrics and test datasets. It ensures the model is robust and accurate before deployment.
B. Incorrect. Deploying the model directly without evaluation can lead to errors or suboptimal performance in production, making this option incorrect.
C. Incorrect. Selecting new training data is part of an earlier step in the lifecycle, not immediately before deployment.
D. Incorrect. Switching to a different foundation model is unnecessary at this stage unless the current model fails evaluation, which is not mentioned in the scenario.

基础模型生命周期包括在微调之后和部署之前评估模型的性能。此步骤确保模型满足准确性和有效性所需的标准。跳过此步骤可能会导致部署后出现不良的用户体验或操作问题。答：正确。评估是使用指标和测试数据集评估模型性能的关键步骤。它确保模型在部署之前稳健且准确。 B、不正确。直接部署模型而不进行评估可能会导致生产中出现错误或性能不佳，从而使此选项不正确。 C、不正确。选择新的训练数据是生命周期早期步骤的一部分，而不是在部署之前。 D、不正确。在此阶段没有必要切换到不同的基础模型，除非当前模型无法评估（场景中未提及）。

---

## Question 69  `#69`

**EN** A data science team is tasked with building a custom AI model using a foundation model for a natural language processing (NLP) application. The team has already chosen the foundation model and gathered domain-specific data. What should be the next step in the foundation model lifecycle to ensure the model is tailored to their specific use case?

**中** 数据科学团队的任务是使用自然语言处理 (NLP) 应用程序的基础模型构建自定义 AI 模型。该团队已经选择了基础模型并收集了特定领域的数据。为了确保模型适合其特定用例，基础模型生命周期的下一步应该是什么？

- **A.** Pre-train the foundation model using the gathered data
  - 使用收集的数据预训练基础模型
- **B.** Fine-tune the foundation model using the domain-specific data
  - 使用特定领域的数据微调基础模型
- **C.** Evaluate the foundation model before fine-tuning it
  - 在微调之前评估基础模型
- **D.** Deploy the foundation model directly to production
  - 将基础模型直接部署到生产中

**正确答案 / Answer: `B`**

The foundation model lifecycle involves fine-tuning the pre-trained model using domain-specific data after selecting the model and gathering relevant data. Fine-tuning ensures the model is adapted to the specific requirements of the application, which is critical for optimal performance in the use case.
A. Incorrect. Pre-training is the process of training a model from scratch on a massive dataset. Since the team has already chosen a pre-trained foundation model, this step is not applicable.
B. Correct. Fine-tuning adjusts the pre-trained model by training it on domain-specific data to improve its performance for the specific use case. This is the correct next step after selecting the model and gathering data.
C. Incorrect. Evaluation usually happens after fine-tuning to assess the model's performance. Evaluating the model before fine-tuning it would not address the need for customization.
D. Incorrect. Deploying the model directly to production without fine-tuning or evaluation would likely result in suboptimal performance since the model has not been adapted to the specific use case.

基础模型生命周期涉及在选择模型并收集相关数据后使用特定于领域的数据对预训练模型进行微调。微调可确保模型适应应用程序的特定要求，这对于用例中的最佳性能至关重要。 A. 不正确。预训练是在海量数据集上从头开始训练模型的过程。由于团队已经选择了预训练的基础模型，因此此步骤不适用。 B、正确。微调通过在特定领域的数据上进行训练来调整预训练模型，以提高其针对特定用例的性能。这是选择模型和收集数据后正确的下一步。 C、不正确。评估通常在微调后进行，以评估模型的性能。在微调之前评估模型并不能满足定制的需求。 D、不正确。由于模型尚未适应特定用例，因此在不进行微调或评估的情况下将模型直接部署到生产中可能会导致性能不佳。

---

## Question 70  `#70`

**EN** A retail company is looking to use a generative AI solution to improve customer engagement and increase sales. They are considering using generative AI to automatically create personalized product descriptions and promotional emails. However, they are concerned about potential limitations. Which of the following statements accurately describe the capabilities and limitations of generative AI in this scenario?

**中** 一家零售公司正在寻求使用生成式人工智能解决方案来提高客户参与度并增加销售额。他们正在考虑使用生成式人工智能来自动创建个性化的产品描述和促销电子邮件。然而，他们担心潜在的限制。以下哪项陈述准确地描述了生成式人工智能在这种情况下的能力和局限性？

- **A.** Generative AI can create personalized product descriptions and emails, but it might require fine-tuning on domain-specific data for better results.
  - 生成式人工智能可以创建个性化的产品描述和电子邮件，但可能需要对特定领域的数据进行微调以获得更好的结果。
- **B.** Generative AI ensures 100% factual accuracy in the generated content, eliminating the need for human review.
  - 生成式 AI 可确保生成的内容 100% 的事实准确性，无需人工审核。
- **C.** Generative AI can automate the creation of diverse content but may reflect biases present in the training data.
  - 生成式人工智能可以自动创建不同的内容，但可能反映训练数据中存在的偏见。
- **D.** Generative AI excels at real-time customer support and decision-making better than rule-based systems in all scenarios.
  - 在所有场景中，生成式人工智能都比基于规则的系统更擅长实时客户支持和决策。
- **E.** Generative AI can help scale content creation efforts while significantly reducing manual workload.
  - 生成式人工智能可以帮助扩大内容创建工作，同时显着减少手动工作量。

**正确答案 / Answer: `A,C,E`**

Generative AI has significant potential for automating and personalizing content creation, making it a valuable tool for businesses. However, it has limitations such as the possibility of introducing bias, the need for domain-specific fine-tuning, and the requirement for human oversight to ensure factual accuracy and adherence to business standards.
A. Correct. Correct: Generative AI can create personalized content, but to achieve high-quality, domain-specific results, fine-tuning on relevant data is often necessary.
B. Incorrect. Incorrect: Generative AI does not guarantee factual accuracy. Human review is needed to ensure correctness and consistency, especially in business-critical contexts.
C. Correct. Correct: Generative AI may generate biased content if the training data contains biases, making it necessary to monitor and address these issues.
D. Incorrect. Incorrect: While generative AI can assist in decision-making and customer support, it is not always better than rule-based systems, particularly in scenarios requiring strict compliance or deterministic outcomes.
E. Correct. Correct: Generative AI can automate repetitive tasks like content creation, enabling businesses to scale their operations and reduce manual workload.

生成式人工智能在自动化和个性化内容创建方面具有巨大潜力，使其成为企业的宝贵工具。然而，它也有局限性，例如可能引入偏见、需要针对特定领域进行微调以及需要人工监督以确保事实准确性和遵守业务标准。答：正确。正确：生成式人工智能可以创建个性化内容，但为了获得高质量、特定领域的结果，通常需要对相关数据进行微调。 B、不正确。错误：生成式人工智能不能保证事实的准确性。需要人工审核来确保正确性和一致性，尤其是在业务关键型环境中。 C、正确。正确：如果训练数据包含偏差，生成式人工智能可能会生成有偏差的内容，因此有必要监控和解决这些问题。 D、不正确。错误：虽然生成式人工智能可以协助决策和客户支持，但它并不总是比基于规则的系统更好，特别是在需要严格合规或确定性结果的情况下。 E、正确。正确：生成式人工智能可以自动执行重复性任务，例如内容创建，使企业能够扩展其运营并减少手动工作量。

---

## Question 71  `#71`

**EN** A retail company wants to use generative AI to create personalized marketing emails for their customers. However, they are concerned about some potential risks and limitations. Which statements accurately describe the capabilities and limitations of generative AI in this scenario?

**中** 一家零售公司希望使用生成式人工智能为其客户创建个性化营销电子邮件。然而，他们担心一些潜在的风险和限制。哪些陈述准确地描述了生成式人工智能在这种情况下的能力和局限性？

- **A.** Generative AI can create personalized email content but may produce outputs that lack factual accuracy.
  - 生成式人工智能可以创建个性化的电子邮件内容，但可能会产生缺乏事实准确性的输出。
- **B.** Generative AI can ensure compliance with regional data privacy laws automatically.
  - 生成式人工智能可以自动确保遵守地区数据隐私法。
- **C.** Generative AI requires high-quality training data to produce relevant and tailored outputs.
  - 生成式人工智能需要高质量的训练数据来产生相关的、定制的输出。
- **D.** Generative AI can generate unique email content for each customer without human oversight or review.
  - 生成式人工智能可以为每个客户生成独特的电子邮件内容，无需人工监督或审查。
- **E.** Generative AI can help improve customer engagement but cannot predict customer behavior patterns accurately without additional data analysis.
  - 生成式人工智能可以帮助提高客户参与度，但如果不进行额外的数据分析，就无法准确预测客户的行为模式。

**正确答案 / Answer: `A,C,E`**

Generative AI is a powerful tool for creating personalized and engaging content, but it has limitations, such as potential inaccuracies, reliance on high-quality data, and the need for human oversight. It also cannot automatically address compliance or predict customer behaviors without additional tools or models. Understanding these capabilities and limitations is crucial for effectively using generative AI in solving business problems.
A. Correct. Correct. Generative AI excels at creating content but may sometimes generate outputs that are factually inaccurate or irrelevant if not properly guided.
B. Incorrect. Incorrect. Generative AI does not inherently understand or enforce compliance with data privacy laws. Ensuring compliance is the responsibility of the organization.
C. Correct. Correct. Generative AI relies on high-quality and representative training data to produce accurate and relevant outputs; poor data quality can lead to suboptimal results.
D. Incorrect. Incorrect. While generative AI can create unique content, human oversight is essential to ensure the outputs align with the brand's tone, values, and accuracy.
E. Correct. Correct. Generative AI can create engaging content but lacks the ability to predict customer behavior patterns without integrating additional analytics or predictive models.

生成式人工智能是创建个性化且引人入胜的内容的强大工具，但它也有局限性，例如潜在的不准确性、对高质量数据的依赖以及需要人工监督。如果没有额外的工具或模型，它也无法自动解决合规性问题或预测客户行为。了解这些功能和限制对于有效使用生成式人工智能解决业务问题至关重要。答：正确。正确的。生成式人工智能擅长创建内容，但如果没有正确指导，有时可能会生成实际上不准确或不相关的输出。 B、不正确。不正确。生成式人工智能本质上并不理解或强制遵守数据隐私法。确保合规性是组织的责任。 C、正确。正确的。生成式人工智能依靠高质量且具有代表性的训练数据来产生准确且相关的输出；数据质量差可能导致结果不理想。 D、不正确。不正确。虽然生成式人工智能可以创建独特的内容，但人类的监督对于确保输出符合品牌的基调、价值观和准确性至关重要。 E、正确。正确的。生成式人工智能可以创建引人入胜的内容，但缺乏在不集成额外分析或预测模型的情况下预测客户行为模式的能力。

---

## Question 72  `#72`

**EN** A company wants to use a generative AI model to automate the creation of personalized marketing content for its customers. Which of the following considerations should the company keep in mind when assessing the capabilities and limitations of generative AI for this use case?

**中** 一家公司希望使用生成式人工智能模型为其客户自动创建个性化营销内容。在评估该用例的生成式人工智能的功能和局限性时，公司应牢记以下哪些注意事项？

- **A.** Generative AI can produce creative content, but the results may require human review to ensure quality and brand consistency.
  - 生成式人工智能可以产生创意内容，但结果可能需要人工审核以确保质量和品牌的一致性。
- **B.** Generative AI can guarantee accuracy in factual content without needing additional validation processes.
  - 生成式人工智能可以保证事实内容的准确性，而无需额外的验证过程。
- **C.** Generative AI models may unintentionally produce biased content depending on the training data used.
  - 根据所使用的训练数据，生成式人工智能模型可能会无意中产生有偏见的内容。
- **D.** Generative AI can operate effectively without any domain-specific fine-tuning for all industries.
  - 生成式人工智能无需针对所有行业进行任何特定领域的微调即可有效运行。
- **E.** Generative AI may require large-scale computational resources for inference and training.
  - 生成式人工智能可能需要大规模计算资源来进行推理和训练。

**正确答案 / Answer: `A,C,E`**

Generative AI offers significant potential for creative automation, but businesses must understand its limitations, such as potential biases, the need for human intervention, and computational demands. It is not a one-size-fits-all solution and often requires fine-tuning and validation to align with specific business needs and context.
A. Correct. Correct. Generative AI can create creative and personalized content, but human review is often necessary to ensure the output aligns with quality and branding standards.
B. Incorrect. Incorrect. Generative AI cannot guarantee factual accuracy. Outputs should be validated, especially for customer-facing materials.
C. Correct. Correct. Biases in training datasets can lead to biased outputs, which is a limitation of generative AI that needs to be managed.
D. Incorrect. Incorrect. While generative AI is powerful, it often requires fine-tuning with domain-specific data to generate relevant and effective content for a specific industry.
E. Correct. Correct. Generative AI models, especially large ones, can demand significant computational power for both training and inference, which can be a limitation for businesses with limited resources.

生成式人工智能为创意自动化提供了巨大的潜力，但企业必须了解其局限性，例如潜在的偏见、人工干预的需要以及计算需求。它不是一种一刀切的解决方案，通常需要进行微调和验证，以符合特定的业务需求和环境。答：正确。正确的。生成式人工智能可以创建创意和个性化的内容，但通常需要人工审核以确保输出符合质量和品牌标准。 B、不正确。不正确。生成式人工智能无法保证事实的准确性。应验证输出，尤其是面向客户的材料。 C、正确。正确的。训练数据集中的偏差可能会导致输出有偏差，这是生成式人工智能需要管理的限制。 D、不正确。不正确。虽然生成式人工智能功能强大，但它通常需要对特定领域的数据进行微调，才能为特定行业生成相关且有效的内容。 E、正确。正确的。生成式人工智能模型，尤其是大型模型，可能需要大量的计算能力来进行训练和推理，这对于资源有限的企业来说可能是一个限制。

---

## Question 73  `#73`

**EN** A retail company wants to use generative AI to improve customer engagement through personalized chatbot interactions. Which advantages of generative AI make it suitable for this use case?

**中** 一家零售公司希望利用生成式人工智能，通过个性化的聊天机器人交互来提高客户参与度。生成式人工智能的哪些优势使其适合此用例？

- **A.** Generative AI can adapt to various customer inquiries in real time.
  - 生成式人工智能可以实时适应各种客户查询。
- **B.** Generative AI requires no training data to function effectively.
  - 生成式人工智能无需训练数据即可有效运行。
- **C.** Generative AI can provide consistent and responsive interactions across multiple channels.
  - 生成式人工智能可以跨多个渠道提供一致且响应迅速的交互。
- **D.** Generative AI simplifies the process of handling complex and unique customer queries.
  - 生成式人工智能简化了处理复杂且独特的客户查询的过程。

**正确答案 / Answer: `A,C,D`**

Generative AI is particularly advantageous in scenarios requiring adaptability, responsiveness, and simplicity, such as personalized chatbot interactions. It can dynamically handle a variety of customer queries (adaptability), maintain consistent service across multiple channels (responsiveness), and simplify the process of addressing complex or unique questions. However, it does require training data to function effectively, so the option suggesting otherwise is incorrect.
A. Correct. Generative AI is highly adaptable and capable of customizing responses based on diverse customer inputs, making it ideal for real-time interactions.
B. Incorrect. This is incorrect. Generative AI typically requires substantial training data to learn patterns and generate meaningful responses.
C. Correct. Generative AI is known for its ability to maintain responsiveness and consistency when deployed across different communication platforms, such as chatbots or virtual assistants.
D. Correct. Generative AI excels at handling complex or unique customer queries, as it generates contextually relevant outputs without relying solely on predefined rules.

生成式人工智能在需要适应性、响应性和简单性的场景中特别有利，例如个性化聊天机器人交互。它可以动态处理各种客户查询（适应性），跨多个渠道保持一致的服务（响应性），并简化解决复杂或独特问题的过程。但是，它确实需要训练数据才能有效发挥作用，因此建议的选项是不正确的。答：正确。生成式人工智能具有高度适应性，能够根据不同的客户输入定制响应，使其成为实时交互的理想选择。 B、不正确。这是不正确的。生成式人工智能通常需要大量的训练数据来学习模式并生成有意义的响应。 C、正确。生成式人工智能以其在聊天机器人或虚拟助理等不同通信平台上部署时保持响应能力和一致性的能力而闻名。 D、正确。生成式人工智能擅长处理复杂或独特的客户查询，因为它可以生成上下文相关的输出，而无需仅依赖预定义的规则。

---

## Question 74  `#74`

**EN** A retail company wants to create personalized product descriptions for its e-commerce platform to enhance customer engagement. The team is considering using generative AI for this task. Which of the following are advantages of using generative AI in this scenario?

**中** 一家零售公司希望为其电子商务平台创建个性化的产品描述，以提高客户参与度。该团队正在考虑使用生成式人工智能来完成这项任务。在这种情况下使用生成式人工智能有哪些优势？

- **A.** It can dynamically generate product descriptions tailored to different user preferences.
  - 它可以动态生成适合不同用户偏好的产品描述。
- **B.** It requires extensive manual updates to adapt to new product categories.
  - 它需要大量的手动更新才能适应新的产品类别。
- **C.** It simplifies the content creation process by automating repetitive tasks.
  - 它通过自动化重复任务来简化内容创建过程。
- **D.** It ensures that all generated descriptions are entirely error-free without human intervention.
  - 它确保所有生成的描述完全没有错误，无需人工干预。
- **E.** It can quickly respond to changes in customer trends by adapting the generated content.
  - 它可以通过调整生成的内容来快速响应客户趋势的变化。

**正确答案 / Answer: `A,C,E`**

Generative AI offers key advantages such as adaptability, responsiveness, and simplicity, making it an excellent choice for tasks like creating personalized product descriptions. It can dynamically tailor content to user preferences, automate repetitive processes, and quickly respond to new trends, ultimately enhancing customer engagement and reducing manual effort.
A. Correct. Generative AI can create dynamic and personalized content, making it well-suited for tailoring product descriptions based on user preferences or data.
B. Incorrect. This is incorrect because generative AI is designed to adapt to new information or categories with minimal manual intervention, unlike traditional static systems.
C. Correct. Generative AI automates repetitive tasks, such as writing product descriptions, thus reducing the manual effort required in content creation.
D. Incorrect. This is incorrect because while generative AI can produce high-quality output, human review is often required to ensure accuracy and handle edge cases.
E. Correct. Generative AI excels at quickly adapting to new data or trends, enabling businesses to stay responsive to changes in customer behavior or market demands.

生成式人工智能具有适应性、响应能力和简单性等关键优势，使其成为创建个性化产品描述等任务的绝佳选择。它可以根据用户偏好动态定制内容，自动化重复流程，并快速响应新趋势，最终提高客户参与度并减少手动工作。答：正确。生成式人工智能可以创建动态和个性化的内容，使其非常适合根据用户偏好或数据定制产品描述。 B、不正确。这是不正确的，因为与传统的静态系统不同，生成式人工智能旨在以最少的人工干预来适应新信息或类别。 C、正确。生成式人工智能可以自动执行重复性任务，例如编写产品描述，从而减少内容创建所需的手动工作。 D、不正确。这是不正确的，因为虽然生成式人工智能可以产生高质量的输出，但通常需要人工审查来确保准确性并处理边缘情况。 E、正确。生成式人工智能擅长快速适应新数据或趋势，使企业能够对客户行为或市场需求的变化保持响应。

---

## Question 75  `#75`

**EN** A retail company is considering integrating generative AI into their customer service chatbot. They are specifically looking for a solution that can adapt to new product data, respond naturally to customer queries, and simplify the development process. Which benefits of generative AI align with their requirements?

**中** 一家零售公司正在考虑将生成式人工智能集成到他们的客户服务聊天机器人中。他们专门寻找一种能够适应新产品数据、自然响应客户查询并简化开发流程的解决方案。生成式人工智能的哪些好处符合他们的要求？

- **A.** Adaptability to new and evolving datasets
  - 对新的和不断发展的数据集的适应性
- **B.** Responsiveness in generating human-like interactions
  - 生成类人交互的响应能力
- **C.** Simplicity in automating repetitive coding tasks
  - 自动化重复编码任务的简单性
- **D.** Real-time analysis of customer purchasing trends
  - 实时分析客户购买趋势
- **E.** Enhancement of data encryption and security
  - 增强数据加密和安全性

**正确答案 / Answer: `A,B,C`**

Generative AI offers key benefits such as adaptability, responsiveness, and simplicity, making it ideal for use cases like chatbots that need to handle evolving datasets, generate natural responses, and reduce development complexity. While AI has many other applications, the correct answers highlight the specific advantages of generative AI in addressing the scenario provided.
A. Correct. Generative AI is highly adaptable, which allows it to incorporate new and evolving datasets, such as new product data, into its outputs effectively.
B. Correct. Generative AI excels at creating human-like and responsive interactions, making it suitable for customer service chatbots that need natural language responses.
C. Correct. Generative AI can simplify processes like creating text-based content or responding to queries, reducing the complexity of development and operations.
D. Incorrect. While real-time analysis of customer purchasing trends is a benefit of AI in general, it is not a specific advantage of generative AI, which focuses more on content generation and adaptability.
E. Incorrect. Generative AI does not inherently enhance data encryption and security. These are separate concerns typically addressed by other AWS services or security practices.

生成式 AI 提供了适应性、响应性和简单性等关键优势，使其成为聊天机器人等需要处理不断变化的数据集、生成自然响应和降低开发复杂性的用例的理想选择。虽然人工智能还有许多其他应用，但正确答案凸显了生成式人工智能在解决所提供场景方面的具体优势。答：正确。生成式人工智能具有高度适应性，这使得它能够有效地将新的和不断发展的数据集（例如新产品数据）纳入其输出中。 B、正确。生成式人工智能擅长创建类人且响应式的交互，使其适合需要自然语言响应的客户服务聊天机器人。 C、正确。生成式人工智能可以简化创建基于文本的内容或响应查询等流程，从而降低开发和运营的复杂性。 D、不正确。虽然实时分析客户购买趋势是人工智能的总体优势，但这并不是生成式人工智能的具体优势，生成式人工智能更注重内容生成和适应性。 E、不正确。生成式人工智能本质上并不能增强数据加密和安全性。这些是通常由其他 AWS 服务或安全实践解决的单独问题。

---

## Question 76  `#76`

**EN** A company is using a generative AI model to create customer support content, but the management has noticed that the responses sometimes contain fabricated facts or incorrect information. What are the likely disadvantages of using generative AI in this scenario?

**中** 一家公司正在使用生成式人工智能模型来创建客户支持内容，但管理层注意到响应有时包含捏造的事实或不正确的信息。在这种情况下使用生成式人工智能可能有哪些缺点？

- **A.** The model may hallucinate and generate content that appears factual but is untrue.
  - 该模型可能会产生幻觉并生成看似真实但不真实的内容。
- **B.** Generative AI models can lack interpretability, making it difficult to understand why specific outputs are produced.
  - 生成式人工智能模型可能缺乏可解释性，因此很难理解为什么会产生特定的输出。
- **C.** The model is deterministic, meaning the same input always results in the same output.
  - 该模型是确定性的，这意味着相同的输入总是会产生相同的输出。
- **D.** Generative AI models may not always align with the organization's accuracy requirements.
  - 生成式人工智能模型可能并不总是符合组织的准确性要求。
- **E.** The model requires significant labeled data for fine-tuning to address these issues.
  - 该模型需要大量标记数据进行微调以解决这些问题。

**正确答案 / Answer: `A,B,D`**

Generative AI models have inherent disadvantages such as hallucination (generating false but plausible outputs), lack of interpretability (difficulty understanding their reasoning), and potential inaccuracy. These issues make them less ideal for tasks requiring high reliability. The nondeterministic nature of these models and the challenges in aligning their outputs with specific requirements further complicate their use in sensitive applications like customer support.
A. Correct. Hallucination is a known issue with generative AI models, where they generate outputs that are factually incorrect or fabricated even though they appear plausible.
B. Correct. Generative AI models often lack interpretability, meaning it is challenging to understand the reasoning or process behind their outputs.
C. Incorrect. This option is incorrect because generative AI models are generally nondeterministic, meaning the same input may produce different outputs due to inherent randomness or variations in the model.
D. Correct. Generative AI models may produce outputs that do not meet the required accuracy for specific use cases, which is a major disadvantage in tasks needing reliable data.
E. Incorrect. While labeled data can improve model performance, this is not directly related to the disadvantages described in the scenario. The issues of hallucination, interpretability, and accuracy persist regardless of the amount of labeled data.

生成式人工智能模型具有固有的缺点，例如幻觉（生成错误但合理的输出）、缺乏可解释性（难以理解其推理）以及潜在的不准确性。这些问题使得它们不太适合需要高可靠性的任务。这些模型的不确定性以及将其输出与特定要求保持一致的挑战进一步使其在客户支持等敏感应用中的使用变得复杂。答：正确。幻觉是生成式人工智能模型的一个已知问题，它们生成的输出实际上是不正确的或捏造的，尽管它们看起来似乎合理。 B、正确。生成式人工智能模型通常缺乏可解释性，这意味着理解其输出背后的推理或过程具有挑战性。 C、不正确。这个选项是不正确的，因为生成式人工智能模型通常是不确定的，这意味着由于模型固有的随机性或变化，相同的输入可能会产生不同的输出。 D、正确。生成式人工智能模型可能会产生不符合特定用例所需精度的输出，这对于需要可靠数据的任务来说是一个主要缺点。 E、不正确。虽然标记数据可以提高模型性能，但这与场景中描述的缺点没有直接关系。无论标记数据有多少，幻觉、可解释性和准确性问题仍然存在。

---

## Question 77  `#77`

**EN** A retail company is exploring the use of a generative AI model to create personalized product descriptions for their online store. However, they are concerned about potential disadvantages of generative AI models. Which of the following are valid concerns the company should consider?

**中** 一家零售公司正在探索使用生成式人工智能模型为其在线商店创建个性化的产品描述。然而，他们担心生成式人工智能模型的潜在缺点。公司应该考虑以下哪些合理的担忧？

- **A.** The model may generate outputs that are factually incorrect or completely fabricated.
  - 该模型可能会生成实际上不正确或完全捏造的输出。
- **B.** The outputs of the model can sometimes be difficult to interpret or explain.
  - 模型的输出有时很难解释或解释。
- **C.** Generative AI models are guaranteed to produce the same output for identical input every time.
  - 生成式人工智能模型保证每次对于相同的输入产生相同的输出。
- **D.** The model may generate biased outputs if the training data contains bias.
  - 如果训练数据包含偏差，则模型可能会生成有偏差的输出。
- **E.** The model can only be used for supervised learning tasks, limiting its flexibility.
  - 该模型只能用于监督学习任务，限制了其灵活性。

**正确答案 / Answer: `A,B,D`**

Generative AI models have several disadvantages, including hallucinations (factually incorrect outputs), limited interpretability, and the risk of biased outputs due to biased training data. These are critical considerations for the retail company when deciding to use such models. However, the nondeterministic nature of generative AI models and their applicability beyond supervised learning tasks are not disadvantages in this context.
A. Correct. Correct. Generative AI models are prone to hallucinations, where they generate outputs that are factually incorrect or fabricated.
B. Correct. Correct. Interpretability of generative AI models is often limited, making it challenging to explain why a certain output was generated.
C. Incorrect. Incorrect. Generative AI models are nondeterministic by nature, meaning they may produce different outputs for the same input depending on conditions like randomness in the generation process.
D. Correct. Correct. Generative AI models can inherit and amplify biases present in their training data, leading to biased outputs.
E. Incorrect. Incorrect. Generative AI models are not limited to supervised learning tasks; they are used in unsupervised and self-supervised learning contexts as well, making them highly flexible.

生成式人工智能模型有几个缺点，包括幻觉（实际上不正确的输出）、可解释性有限，以及由于训练数据有偏差而导致输出有偏差的风险。这些是零售公司在决定使用此类模型时的关键考虑因素。然而，生成式人工智能模型的不确定性及其在监督学习任务之外的适用性在这种情况下并不是缺点。答：正确。正确的。生成式人工智能模型很容易产生幻觉，产生实际上不正确或捏造的输出。 B、正确。正确的。生成式人工智能模型的可解释性通常是有限的，因此很难解释为什么会生成特定的输出。 C、不正确。不正确。生成式人工智能模型本质上是不确定性的，这意味着它们可能会根据生成过程中的随机性等条件，为相同的输入产生不同的输出。 D、正确。正确的。生成式人工智能模型可以继承并放大训练数据中存在的偏差，从而导致有偏差的输出。 E、不正确。不正确。生成式人工智能模型不仅限于监督学习任务；它们也可用于无监督和自监督的学习环境，这使得它们高度灵活。

---

## Question 78  `#78`

**EN** A company is evaluating the use of a generative AI model to provide customer support through a chatbot. However, the team is concerned about potential limitations of generative AI solutions. Which of the following are valid disadvantages that the team should consider?

**中** 一家公司正在评估使用生成式人工智能模型通过聊天机器人提供客户支持。然而，该团队担心生成式人工智能解决方案的潜在局限性。以下哪些是团队应该考虑的有效缺点？

- **A.** The model may generate incorrect or fabricated information when responding to customer queries.
  - 该模型在响应客户查询时可能会生成不正确或捏造的信息。
- **B.** The model's underlying decision-making process can be difficult to interpret and explain.
  - 该模型的基本决策过程可能难以解释和解释。
- **C.** The model is guaranteed to produce consistent responses for identical inputs.
  - 该模型保证对相同的输入产生一致的响应。
- **D.** The model may generate offensive or biased content if not properly trained and monitored.
  - 如果没有适当的训练和监控，该模型可能会生成令人反感或有偏见的内容。
- **E.** The model requires no data preprocessing or ongoing fine-tuning for optimal performance.
  - 该模型不需要数据预处理或持续微调即可获得最佳性能。

**正确答案 / Answer: `A,B,D`**

Generative AI solutions come with several potential disadvantages, including hallucinations (fabricated or incorrect outputs), limited interpretability (difficulty in understanding the model's decision-making process), and the possibility of generating biased or offensive content. These issues must be carefully managed to ensure responsible and accurate use of generative AI in applications such as customer support.
A. Correct. This is correct. Generative AI models can hallucinate, meaning they may provide responses that are inaccurate or completely fabricated, which could lead to misinformation.
B. Correct. This is correct. Generative AI models, such as those based on deep learning, often have limited interpretability, making it difficult to explain how they arrived at a specific output.
C. Incorrect. This is incorrect. Generative AI models are inherently nondeterministic, meaning they do not always produce consistent outputs for identical inputs due to their probabilistic nature.
D. Correct. This is correct. Generative AI models can unintentionally generate biased or offensive content if their training data contains such biases or if monitoring mechanisms are not implemented.
E. Incorrect. This is incorrect. Generative AI models often require data preprocessing and periodic fine-tuning to ensure they perform optimally, especially in dynamic real-world environments.

生成式人工智能解决方案存在一些潜在的缺点，包括幻觉（捏造或不正确的输出）、可解释性有限（难以理解模型的决策过程）以及生成有偏见或令人反感的内容的可能性。必须仔细管理这些问题，以确保在客户支持等应用中负责任且准确地使用生成式人工智能。答：正确。这是正确的。生成式人工智能模型可能会产生幻觉，这意味着它们可能会提供不准确或完全捏造的响应，这可能会导致错误信息。 B、正确。这是正确的。生成式人工智能模型，例如基于深度学习的模型，通常可解释性有限，因此很难解释它们如何得出特定的输出。 C、不正确。这是不正确的。生成式人工智能模型本质上是不确定的，这意味着由于其概率性质，它们并不总是为相同的输入产生一致的输出。 D .正确的。这是正确的。如果生成式人工智能模型的训练数据包含此类偏见或未实施监控机制，则生成式人工智能模型可能会无意中生成有偏见或令人反感的内容。 E、不正确。这是不正确的。生成式人工智能模型通常需要数据预处理和定期微调，以确保其最佳性能，尤其是在动态的现实环境中。

---

## Question 79  `#79`

**EN** A retail company wants to implement a generative AI model to create personalized product descriptions for its e-commerce platform. The company needs the model to generate text in multiple languages, comply with data privacy regulations like GDPR, and provide high-quality outputs within a low-latency environment. Which factors should the company consider while selecting the appropriate generative AI model?

**中** 一家零售公司希望实施生成式人工智能模型，为其电子商务平台创建个性化的产品描述。该公司需要该模型来生成多种语言的文本，遵守 GDPR 等数据隐私法规，并在低延迟环境中提供高质量的输出。公司在选择合适的生成式人工智能模型时应考虑哪些因素？

- **A.** The model's multilingual capabilities
  - 该模型的多语言能力
- **B.** Whether the model is pre-trained or requires training from scratch
  - 模型是预先训练的还是需要从头开始训练
- **C.** The model's compliance with data privacy regulations such as GDPR
  - 该模型符合 GDPR 等数据隐私法规
- **D.** The hardware and infrastructure required to meet low-latency performance needs
  - 满足低延迟性能需求所需的硬件和基础设施
- **E.** The number of training datasets available for the model
  - 可用于模型的训练数据集的数量

**正确答案 / Answer: `A,C,D`**

The company has specific requirements, such as multilingual capabilities, compliance with GDPR, and low-latency performance. Therefore, the appropriate generative AI model must align with these factors. Other considerations, such as whether the model is pre-trained or the number of training datasets, are secondary to the primary requirements listed.
A. Correct. Correct: Since the company needs to generate text in multiple languages, evaluating the model's multilingual capabilities is essential.
B. Incorrect. Incorrect: While pre-trained models might reduce time to production, this factor is less critical than other requirements in this scenario.
C. Correct. Correct: Compliance with data privacy regulations like GDPR is crucial when handling customer data in AI applications.
D. Correct. Correct: Considering the hardware and infrastructure to achieve low latency aligns with the company's performance requirements.
E. Incorrect. Incorrect: The number of training datasets is not directly relevant, as pre-trained generative models may already handle the task without additional data.

该公司有特定的要求，例如多语言功能、符合 GDPR 以及低延迟性能。因此，适当的生成人工智能模型必须与这些因素保持一致。其他考虑因素（例如模型是否经过预训练或训练数据集的数量）对于列出的主要要求来说是次要的。答：正确。正确：由于公司需要生成多种语言的文本，因此评估模型的多语言能力至关重要。 B、不正确。错误：虽然预先训练的模型可能会缩短生产时间，但在这种情况下，这个因素不如其他要求那么重要。 C、正确。正确：在人工智能应用程序中处理客户数据时，遵守 GDPR 等数据隐私法规至关重要。 D、正确。正确：考虑实现低延迟的硬件和基础设施符合公司的性能要求。 E、不正确。错误：训练数据集的数量不直接相关，因为预先训练的生成模型可能已经在没有额外数据的情况下处理任务。

---

## Question 80  `#80`

**EN** A retail company wants to use a generative AI model to create personalized product descriptions for their e-commerce platform. They require a model that can handle multilingual output, ensure compliance with data privacy regulations, and generate responses in near real-time. Which factors should the company prioritize when selecting a generative AI model?

**中** 一家零售公司希望使用生成式人工智能模型为其电子商务平台创建个性化产品描述。他们需要一个能够处理多语言输出、确保遵守数据隐私法规并近乎实时地生成响应的模型。公司在选择生成式人工智能模型时应优先考虑哪些因素？

- **A.** Multilingual capabilities of the model
  - 模型的多语言能力
- **B.** Latency and performance of the model
  - 模型的延迟和性能
- **C.** The model's ability to produce creative and fictional content
  - 模型产生创意和虚构内容的能力
- **D.** Compliance with relevant privacy and data protection regulations
  - 遵守相关隐私和数据保护法规
- **E.** The size of the model's training dataset
  - 模型训练数据集的大小

**正确答案 / Answer: `A,B,D`**

To meet the company’s requirements, the chosen generative AI model must support multilingual output to cater to a diverse customer base, ensure low latency for near real-time responses, and comply with privacy regulations to avoid legal and reputational risks. These factors directly align with the company’s goals, while other considerations like creativity or dataset size are less critical for this scenario.
A. Correct. Multilingual capabilities are critical for the company’s need to generate product descriptions in multiple languages.
B. Correct. Latency and performance are important as the company requires near real-time generation of responses.
C. Incorrect. While creativity is valuable in some contexts, the company’s goal is to create accurate and personalized product descriptions, not fictional content.
D. Correct. Ensuring compliance with privacy and data protection regulations is essential for any application that handles customer data, especially in a commercial environment.
E. Incorrect. The size of the model's training dataset is less relevant here compared to the model's capabilities and performance for the specific use case.

为了满足公司的要求，所选的生成式人工智能模型必须支持多语言输出，以满足多样化的客户群，确保低延迟以实现近乎实时的响应，并遵守隐私法规以避免法律和声誉风险。这些因素与公司的目标直接相关，而创造力或数据集大小等其他考虑因素对于这种情况并不那么重要。答：正确。多语言功能对于公司需要生成多种语言的产品描述至关重要。 B、正确。延迟和性能非常重要，因为公司需要近乎实时地生成响应。 C、不正确。虽然创造力在某些情况下很有价值，但该公司的目标是创建准确且个性化的产品描述，而不是虚构的内容。 D、正确。确保遵守隐私和数据保护法规对于任何处理客户数据的应用程序至关重要，尤其是在商业环境中。 E.不正确。与特定用例的模型功能和性能相比，模型训练数据集的大小在这里不太重要。

---

## Question 81  `#81`

**EN** Your company wants to implement a generative AI solution to summarize legal documents while ensuring compliance with strict data privacy regulations. The solution must process documents locally without sending sensitive data to external servers and should produce highly accurate summaries. Which factors should you consider when selecting an appropriate generative AI model?

**中** 贵公司希望实施生成式人工智能解决方案来汇总法律文件，同时确保遵守严格的数据隐私法规。该解决方案必须在本地处理文档，而不将敏感数据发送到外部服务器，并且应该生成高度准确的摘要。选择合适的生成式人工智能模型时应考虑哪些因素？

- **A.** The model's ability to be fine-tuned and deployed locally
  - 该模型能够在本地进行微调和部署
- **B.** The model's compliance with data privacy regulations
  - 该模型符合数据隐私法规
- **C.** The model's pre-trained ability to handle legal terminology
  - 模型处理法律术语的预训练能力
- **D.** The cost of using a cloud-based, fully managed service
  - 使用基于云的完全托管服务的成本
- **E.** The model's ability to generate creative content like poetry
  - 该模型生成诗歌等创意内容的能力

**正确答案 / Answer: `A,B,C`**

When choosing a generative AI model for summarizing legal documents while ensuring compliance with data privacy regulations, it's crucial to focus on factors like the model's ability to run locally, compliance with regulations, and its domain-specific capabilities (e.g., handling legal terminology). Cost considerations for cloud services and unrelated capabilities like creative content generation are not relevant in this context.
A. Correct. This is correct because the need to process data locally requires the model to support deployment in an on-premises environment or a local infrastructure.
B. Correct. This is correct because compliance with data privacy regulations is explicitly mentioned as a strict requirement in the scenario.
C. Correct. This is correct because the task involves summarizing legal documents, so the model must be capable of understanding and working with legal terminology.
D. Incorrect. This is incorrect because the company requires a locally deployed solution, not a cloud-based service, making this factor irrelevant to the scenario.
E. Incorrect. This is incorrect because the task involves summarizing legal documents, not generating creative content like poetry. This capability is not relevant to the use case.

在选择生成式 AI 模型来总结法律文件并确保遵守数据隐私法规时，关键是要关注模型在本地运行的能力、遵守法规及其特定领域的能力（例如处理法律术语）等因素。云服务的成本考虑和创意内容生成等不相关的功能在这种情况下并不相关。答：正确。这是正确的，因为本地处理数据的需要要求模型支持在本地环境或本地基础设施中的部署。 B、正确。这是正确的，因为场景中明确提到遵守数据隐私法规是严格要求。 C、正确。这是正确的，因为任务涉及总结法律文件，因此模型必须能够理解和使用法律术语。 D、不正确。这是不正确的，因为该公司需要本地部署的解决方案，而不是基于云的服务，使得该因素与场景无关。 E、不正确。这是不正确的，因为该任务涉及总结法律文件，而不是生成诗歌等创意内容。此功能与用例无关。

---

## Question 82  `#82`

**EN** A retail company wants to implement a generative AI chatbot to improve customer engagement and drive sales. The team needs to evaluate the business value of the chatbot post-deployment. Which metrics should they prioritize to measure the success of the generative AI application?

**中** 一家零售公司希望实施生成式人工智能聊天机器人来提高客户参与度并推动销售。团队需要评估聊天机器人部署后的业务价值。他们应该优先考虑哪些指标来衡量生成人工智能应用程序的成功？

- **A.** Customer lifetime value (CLV)
  - 客户终生价值 (CLV)
- **B.** Average response time of the chatbot
  - 聊天机器人的平均响应时间
- **C.** Accuracy of product recommendations provided by the chatbot
  - 聊天机器人提供的产品推荐的准确性
- **D.** Conversion rate from chatbot interactions to purchases
  - 从聊天机器人交互到购买的转化率
- **E.** Total number of chatbot sessions initiated by users
  - 用户发起的聊天机器人会话总数

**正确答案 / Answer: `A,C,D`**

To determine the business value of a generative AI chatbot, it is crucial to focus on metrics that directly reflect its impact on revenue, customer engagement, and satisfaction. Metrics like customer lifetime value, recommendation accuracy, and conversion rate are more aligned with these goals compared to operational metrics like response time or session counts.
A. Correct. Customer lifetime value (CLV) is a key business metric as it reflects the long-term impact of the chatbot on customer retention and spending.
B. Incorrect. While average response time is important for user experience, it does not directly measure the business value or impact on revenue.
C. Correct. The accuracy of product recommendations is critical for ensuring the chatbot effectively drives sales and enhances user satisfaction.
D. Correct. Conversion rate from chatbot interactions to purchases is a direct indicator of the chatbot’s ability to generate revenue, making it a vital success metric.
E. Incorrect. The total number of chatbot sessions initiated by users may indicate engagement, but it does not specifically measure the chatbot's business impact or value.

要确定生成式人工智能聊天机器人的商业价值，关键是要关注直接反映其对收入、客户参与度和满意度影响的指标。与响应时间或会话计数等运营指标相比，客户生命周期价值、推荐准确性和转化率等指标更符合这些目标。答：正确。客户生命周期价值 (CLV) 是一项关键业务指标，因为它反映了聊天机器人对客户保留和支出的长期影响。 B、不正确。虽然平均响应时间对于用户体验很重要，但它并不能直接衡量业务价值或对收入的影响。 C、正确。产品推荐的准确性对于确保聊天机器人有效推动销售并提高用户满意度至关重要。 D、正确。从聊天机器人交互到购买的转化率是聊天机器人创收能力的直接指标，使其成为一个重要的成功指标。 E、不正确。用户发起的聊天机器人会话总数可能表明参与度，但它并不能具体衡量聊天机器人的业务影响或价值。

---

## Question 83  `#83`

**EN** A retail company is considering implementing a generative AI application to create personalized marketing content for its customers. The goal is to increase customer engagement and sales. Which metrics should the company use to measure the business value of this generative AI application?

**中** 一家零售公司正在考虑实施生成式人工智能应用程序，为其客户创建个性化营销内容。目标是提高客户参与度和销售额。公司应该使用哪些指标来衡量这一生成式人工智能应用程序的商业价值？

- **A.** Conversion rate
  - 转化率
- **B.** Average revenue per user (ARPU)
  - 每用户平均收入 (ARPU)
- **C.** Customer lifetime value (CLV)
  - 客户终生价值 (CLV)
- **D.** Latency of the generative AI model
  - 生成式 AI 模型的延迟
- **E.** Cross-domain performance of the generative AI model
  - 生成式人工智能模型的跨领域性能
- **F.** Accuracy of the model in generating personalized recommendations
  - 模型生成个性化推荐的准确性

**正确答案 / Answer: `A,B,C`**

To determine the business value of a generative AI application for personalized marketing, it is important to focus on metrics that directly impact financial outcomes, such as conversion rate, average revenue per user, and customer lifetime value. Metrics like latency, cross-domain performance, and accuracy are more technical and do not directly measure the business value, making them less suitable in this context.
A. Correct. Conversion rate is a key metric to evaluate the effectiveness of personalized marketing in turning customer interactions into sales, directly tying to business value.
B. Correct. Average revenue per user (ARPU) measures the revenue generated per customer and is critical for assessing the financial benefit of personalized content.
C. Correct. Customer lifetime value (CLV) represents the long-term financial impact of retaining customers, which can improve through targeted marketing using generative AI.
D. Incorrect. While latency may affect user experience, it does not directly measure business value or financial impact in this scenario.
E. Incorrect. Cross-domain performance is a technical metric that evaluates model adaptability across different domains, but it does not directly assess business outcomes in this case.
F. Incorrect. Accuracy of recommendations is a technical measure of how well the AI performs, but it does not directly represent the business value relevant to engagement or sales.

要确定用于个性化营销的生成式人工智能应用程序的商业价值，重要的是要关注直接影响财务成果的指标，例如转化率、每个用户的平均收入和客户终身价值。延迟、跨域性能和准确性等指标更具技术性，不能直接衡量业务价值，因此不太适合这种情况。答：正确。转化率是评估个性化营销在将客户互动转化为销售方面的有效性的关键指标，与业务价值直接相关。 B、正确。每用户平均收入 (ARPU) 衡量每个客户产生的收入，对于评估个性化内容的经济效益至关重要。 C、正确。客户终身价值 (CLV) 代表留住客户的长期财务影响，可以通过使用生成人工智能的有针对性的营销来改善。 D、不正确。虽然延迟可能会影响用户体验，但它并不能直接衡量这种情况下的业务价值或财务影响。 E、不正确。跨域性能是评估模型跨不同域的适应性的技术指标，但在这种情况下它并不直接评估业务成果。 F. 不正确。推荐的准确性是衡量人工智能性能的技术指标，但它并不直接代表与参与度或销售相关的商业价值。

---

## Question 84  `#84`

**EN** A retail company is planning to implement a generative AI application to create personalized marketing content. The company wants to assess the business value of this application. Which of the following metrics would be the most relevant to measure the success of this generative AI application?

**中** 一家零售公司正计划实施生成式人工智能应用程序来创建个性化营销内容。该公司希望评估该应用程序的商业价值。以下哪项指标与衡量该生成式人工智能应用程序的成功最相关？

- **A.** Conversion rate of marketing campaigns
  - 营销活动转化率
- **B.** Average revenue per user (ARPU)
  - 每用户平均收入 (ARPU)
- **C.** The training time of the generative AI model
  - 生成式 AI 模型的训练时间
- **D.** Customer lifetime value (CLV)
  - 客户终生价值 (CLV)
- **E.** The total size of the generative AI model in memory
  - 生成式 AI 模型在内存中的总大小

**正确答案 / Answer: `A,B,D`**

To assess the business value of a generative AI application in personalized marketing, it is essential to focus on metrics that align with business performance and customer engagement. Conversion rate measures immediate campaign success, ARPU connects to revenue impact, and CLV reflects long-term customer value, making these the most relevant metrics. Technical metrics like training time and model size are important for operational efficiency but do not directly indicate business value.
A. Correct. Conversion rate is a crucial metric for marketing campaigns as it directly measures how effectively the AI-generated content drives customer actions, such as purchases or sign-ups.
B. Correct. Average revenue per user (ARPU) is a key metric for understanding the revenue impact of personalized marketing content generated by the AI application.
C. Incorrect. While the training time of the model is an important technical consideration, it does not directly measure business value or success for the application.
D. Correct. Customer lifetime value (CLV) is highly relevant as it indicates the long-term financial value of retaining customers based on the effectiveness of personalized content.
E. Incorrect. The size of the generative AI model in memory is a technical metric, but it does not provide insights into the business value or success of the application.

要评估生成式人工智能应用程序在个性化营销中的商业价值，必须关注与业务绩效和客户参与度相一致的指标。转化率衡量营销活动的即时成功程度，ARPU 与收入影响相关，CLV 反映长期客户价值，使这些成为最相关的指标。训练时间和模型大小等技术指标对于运营效率很重要，但并不直接表明业务价值。答：正确。转化率是营销活动的一个关键指标，因为它直接衡量人工智能生成的内容如何有效地推动客户行为，例如购买或注册。 B、正确。每用户平均收入 (ARPU) 是了解人工智能应用程序生成的个性化营销内容的收入影响的关键指标。 C、不正确。虽然模型的训练时间是一个重要的技术考虑因素，但它并不能直接衡量应用程序的业务价值或成功。 D、正确。客户终身价值 (CLV) 具有高度相关性，因为它表明基于个性化内容的有效性留住客户的长期财务价值。 E、不正确。内存中生成式 AI 模型的大小是一个技术指标，但它不能提供有关应用程序的业务价值或成功的见解。

---

## Question 85  `#85`

**EN** A startup is building a generative AI application to create personalized marketing content for its users. They need a solution that can handle large-scale training and inference while leveraging pre-trained models to reduce development time. Which AWS services and technologies should they consider for this use case?

**中** 一家初创公司正在构建生成式人工智能应用程序，为其用户创建个性化营销内容。他们需要一种能够处理大规模训练和推理的解决方案，同时利用预先训练的模型来减少开发时间。对于此用例，他们应该考虑哪些 AWS 服务和技术？

- **A.** Amazon SageMaker JumpStart
  - 亚马逊 SageMaker JumpStart
- **B.** AWS Inferentia-based EC2 Instances
  - 基于 AWS Inferentia 的 EC2 实例
- **C.** Amazon Elastic File System (EFS)
  - 亚马逊弹性文件系统 (EFS)
- **D.** Amazon Polly
  - Amazon Polly
- **E.** Amazon Bedrock
  - Amazon Bedrock

**正确答案 / Answer: `A,B,E`**

To build a generative AI application, AWS provides multiple services tailored to the task. Amazon SageMaker JumpStart simplifies the process by offering pre-trained models and solutions. AWS Inferentia-based EC2 Instances enhance inference performance for large-scale workloads. Amazon Bedrock provides easy access to foundation models without requiring infrastructure management. These services collectively address the needs of training, inference, and efficient deployment for generative AI applications.
A. Correct. Amazon SageMaker JumpStart provides pre-trained models and end-to-end solutions for machine learning tasks, including generative AI, which can save time and effort in building applications.
B. Correct. AWS Inferentia-based EC2 Instances are optimized for running machine learning inference workloads at scale, making them suitable for deploying generative AI models efficiently.
C. Incorrect. Amazon Elastic File System (EFS) is a scalable storage service but is not specifically designed for generative AI workloads or model training/inference.
D. Incorrect. Amazon Polly is a text-to-speech service and is not directly related to generative AI applications or training large models for personalized content generation.
E. Correct. Amazon Bedrock allows developers to access foundation models via an API without managing infrastructure, making it an ideal choice for building generative AI applications.

为了构建生成式 AI 应用程序，AWS 提供了多种针对该任务量身定制的服务。 Amazon SageMaker JumpStart 通过提供预先训练的模型和解决方案来简化流程。基于 AWS Inferentia 的 EC2 实例增强了大规模工作负载的推理性能。 Amazon Bedrock 可以轻松访问基础模型，无需基础设施管理。这些服务共同满足生成式人工智能应用程序的训练、推理和高效部署的需求。答：正确。 Amazon SageMaker JumpStart 为机器学习任务（包括生成式 AI）提供预训练模型和端到端解决方案，可以节省构建应用程序的时间和精力。 B、正确。基于 AWS Inferentia 的 EC2 实例针对大规模运行机器学习推理工作负载进行了优化，使其适合高效部署生成式 AI 模型。 C、不正确。Amazon Elastic File System (EFS) 是一种可扩展存储服务，但并非专门为生成式 AI 工作负载或模型训练/推理而设计。 D、不正确。 Amazon Polly 是一项文本转语音服务，与生成式 AI 应用程序或训练大型模型以生成个性化内容没有直接关系。 E、正确。 Amazon Bedrock 允许开发人员通过 API 访问基础模型，而无需管理基础设施，使其成为构建生成式 AI 应用程序的理想选择。

---

## Question 86  `#86`

**EN** You are tasked with developing a generative AI application that creates realistic images from textual descriptions. Which AWS services and technologies would you use to build and deploy this application efficiently?

**中** 您的任务是开发一个生成式 AI 应用程序，该应用程序可以根据文本描述创建逼真的图像。您将使用哪些 AWS 服务和技术来高效构建和部署此应用程序？

- **A.** Amazon SageMaker JumpStart for accessing pre-trained generative AI models
  - Amazon SageMaker JumpStart 用于访问预先训练的生成 AI 模型
- **B.** Amazon Rekognition for generating images from text
  - Amazon Rekognition 用于从文本生成图像
- **C.** AWS Lambda for scalable, serverless inference of the generative AI model
  - AWS Lambda 用于生成 AI 模型的可扩展、无服务器推理
- **D.** Amazon Elastic Kubernetes Service (EKS) for managing containerized training and inference workloads
  - 用于管理容器化训练和推理工作负载的 Amazon Elastic Kubernetes Service (EKS)
- **E.** AWS CodePipeline for continuous integration and deployment (CI/CD) of your generative AI application
  - AWS CodePipeline 用于持续集成和部署 (CI/CD) 生成式 AI 应用程序

**正确答案 / Answer: `A,D,E`**

Building generative AI applications on AWS involves leveraging services tailored for machine learning tasks, such as SageMaker JumpStart for pre-trained models, EKS for containerized workloads, and CodePipeline for deploying updates efficiently. These services together provide a robust infrastructure for training, deploying, and maintaining generative AI models.
A. Correct. Amazon SageMaker JumpStart provides pre-trained generative AI models and solutions that can be quickly deployed and fine-tuned, making it a key service for developing generative AI applications.
B. Incorrect. Amazon Rekognition is used for image and video analysis tasks, such as object detection and facial recognition, but it is not capable of generating images from text.
C. Incorrect. AWS Lambda is a serverless compute service but is not designed for the heavy computational requirements of generative AI model inference.
D. Correct. Amazon Elastic Kubernetes Service (EKS) is well-suited for managing containerized workloads, including scalable training and inference of generative AI models.
E. Correct. AWS CodePipeline helps automate CI/CD workflows, which is essential for deploying updates to your generative AI application efficiently.

在 AWS 上构建生成式 AI 应用程序涉及利用为机器学习任务量身定制的服务，例如用于预训练模型的 SageMaker JumpStart、用于容器化工作负载的 EKS 以及用于高效部署更新的 CodePipeline。这些服务共同为训练、部署和维护生成式人工智能模型提供了强大的基础设施。答：正确。 Amazon SageMaker JumpStart 提供预训练的生成式 AI 模型和解决方案，可以快速部署和微调，使其成为开发生成式 AI 应用程序的关键服务。 B、不正确。 Amazon Rekognition 用于图像和视频分析任务，例如物体检测和面部识别，但它不能从文本生成图像。 C、不正确。 AWS Lambda 是一种无服务器计算服务，但并非针对生成式 AI 模型推理的繁重计算要求而设计。 D、正确。Amazon Elastic Kubernetes Service (EKS) 非常适合管理容器化工作负载，包括生成式 AI 模型的可扩展训练和推理。 E、正确。 AWS CodePipeline 有助于自动化 CI/CD 工作流程，这对于高效地将更新部署到生成式 AI 应用程序至关重要。

---

## Question 87  `#87`

**EN** A company wants to build a generative AI application that can produce high-quality text outputs based on user prompts. They plan to use AWS services to reduce infrastructure management overhead and ensure scalability. Which combination of AWS services and technologies would be most suitable for this use case?

**中** 一家公司希望构建一个生成式人工智能应用程序，可以根据用户提示生成高质量的文本输出。他们计划使用 AWS 服务来减少基础设施管理开销并确保可扩展性。哪种 AWS 服务和技术组合最适合此用例？

- **A.** Amazon Bedrock
  - Amazon Bedrock
- **B.** Amazon SageMaker JumpStart
  - 亚马逊 SageMaker JumpStart
- **C.** AWS Lambda for hosting the generative model
  - AWS Lambda 用于托管生成模型
- **D.** Amazon EC2 with custom deep learning frameworks
  - 具有自定义深度学习框架的 Amazon EC2
- **E.** Amazon S3 for storing training data
  - Amazon S3 用于存储训练数据
- **F.** AWS CodePipeline for deploying the model
  - 用于部署模型的 AWS CodePipeline

**正确答案 / Answer: `A,B,E`**

To build a scalable generative AI application with reduced infrastructure management, Amazon Bedrock and Amazon SageMaker JumpStart are ideal for leveraging foundation models and pre-trained solutions. Additionally, Amazon S3 supports the storage of training data, providing a scalable and cost-effective foundation for the application. These services work together to simplify the development and deployment of generative AI applications while minimizing operational complexity.
A. Correct. Amazon Bedrock is a fully managed service that allows developers to build and scale generative AI applications using foundation models without managing infrastructure. It is suitable for this use case.
B. Correct. Amazon SageMaker JumpStart provides pre-built and pre-trained models, including those for generative AI, which simplifies model deployment and reduces time to production.
C. Incorrect. AWS Lambda is not ideal for hosting complex generative AI models as it is designed for lightweight, event-driven tasks and has execution time limits.
D. Incorrect. Amazon EC2 is a viable option for hosting custom deep learning frameworks, but it requires significant infrastructure management and does not align with the company's goal of reducing overhead.
E. Correct. Amazon S3 is commonly used for storing training data and is a scalable and cost-effective solution for this purpose.
F. Incorrect. AWS CodePipeline is used for CI/CD pipelines and is not directly relevant to hosting or running a generative AI model.

为了构建可扩展的生成式 AI 应用程序并减少基础设施管理，Amazon Bedrock 和 Amazon SageMaker JumpStart 非常适合利用基础模型和预训练的解决方案。此外，Amazon S3 支持训练数据的存储，为应用程序提供可扩展且经济高效的基础。这些服务协同工作，可简化生成式人工智能应用程序的开发和部署，同时最大限度地降低操作复杂性。答：正确。 Amazon Bedrock 是一项完全托管的服务，允许开发人员使用基础模型构建和扩展生成式 AI 应用程序，而无需管理基础设施。它适合这个用例。 B、正确。 Amazon SageMaker JumpStart 提供预构建和预训练的模型，包括用于生成式 AI 的模型，从而简化了模型部署并缩短了生产时间。 C、不正确。AWS Lambda 并不适合托管复杂的生成式 AI 模型，因为它是为轻量级、事件驱动的任务而设计的，并且具有执行时间限制。 D、不正确。 Amazon EC2 是托管自定义深度学习框架的可行选择，但它需要大量的基础设施管理，并且与公司减少开销的目标不符。 E、正确。 Amazon S3 通常用于存储训练数据，是用于此目的的可扩展且经济高效的解决方案。 F. 不正确。 AWS CodePipeline 用于 CI/CD 管道，与托管或运行生成式 AI 模型不直接相关。

---

## Question 88  `#88`

**EN** A company wants to develop a generative AI application that generates personalized product recommendations for its users. The company needs a solution that requires minimal infrastructure management while providing access to pre-trained foundation models from various providers. Which AWS service would best meet their requirements?

**中** 一家公司希望开发一种生成式人工智能应用程序，为其用户生成个性化的产品推荐。该公司需要一种需要最少基础设施管理的解决方案，同时提供对来自不同提供商的预先训练的基础模型的访问。哪种 AWS 服务最能满足他们的要求？

- **A.** Amazon SageMaker JumpStart
  - 亚马逊 SageMaker JumpStart
- **B.** Amazon Bedrock
  - Amazon Bedrock
- **C.** PartyRock, an Amazon Bedrock Playground
  - PartyRock，Amazon Bedrock 游乐场
- **D.** Amazon Q
  - Amazon Q

**正确答案 / Answer: `B`**

Amazon Bedrock is the best choice because it enables customers to integrate pre-trained foundation models from various providers into their applications without managing underlying infrastructure. This aligns with the company's need for minimal infrastructure management and access to diverse generative AI models.
A. Incorrect. Amazon SageMaker JumpStart provides pre-built solutions and models, but it is primarily focused on machine learning workflows and doesn’t provide direct access to foundation models from multiple providers.
B. Correct. Amazon Bedrock allows customers to build and scale generative AI applications by providing access to foundation models from multiple providers without the need for managing infrastructure, making it the best choice in this scenario.
C. Incorrect. PartyRock, an Amazon Bedrock Playground, is a tool for experimenting with generative AI models hosted on Amazon Bedrock, but it is more suited for testing and prototyping rather than building scalable applications.
D. Incorrect. Amazon Q is not a real AWS service, making this option incorrect.

Amazon Bedrock 是最佳选择，因为它使客户能够将来自不同提供商的预先训练的基础模型集成到他们的应用程序中，而无需管理底层基础设施。这符合公司对最少的基础设施管理和访问不同的生成人工智能模型的需求。 A. 不正确。 Amazon SageMaker JumpStart 提供预构建的解决方案和模型，但它主要专注于机器学习工作流程，不提供对来自多个提供商的基础模型的直接访问。 B、正确。 Amazon Bedrock 允许客户通过提供对多个提供商的基础模型的访问来构建和扩展生成式 AI 应用程序，而无需管理基础设施，使其成为这种情况下的最佳选择。 C、不正确。 PartyRock 是一个 Amazon Bedrock Playground，是一种用于试验 Amazon Bedrock 上托管的生成式 AI 模型的工具，但它更适合测试和原型设计，而不是构建可扩展的应用程序。 D、不正确。Amazon Q 不是真正的 AWS 服务，因此此选项不正确。

---

## Question 89  `#89`

**EN** A large e-commerce company wants to build a generative AI-powered chatbot to answer customer queries in natural language. The team has limited expertise in managing infrastructure and training large language models. Which AWS services should they use to efficiently develop and deploy this application?

**中** 一家大型电子商务公司希望构建一个由人工智能驱动的生成式聊天机器人，以自然语言回答客户的查询。该团队在管理基础设施和训练大型语言模型方面的专业知识有限。他们应该使用哪些 AWS 服务来高效开发和部署此应用程序？

- **A.** Amazon SageMaker JumpStart
  - 亚马逊 SageMaker JumpStart
- **B.** Amazon Bedrock
  - Amazon Bedrock
- **C.** Amazon EC2
  - Amazon EC2
- **D.** PartyRock, an Amazon Bedrock Playground
  - PartyRock，Amazon Bedrock 游乐场
- **E.** Amazon Q
  - Amazon Q

**正确答案 / Answer: `A,B,D`**

To efficiently build a generative AI-powered chatbot with minimal infrastructure management, the team should leverage Amazon SageMaker JumpStart for pre-trained models and solutions, Amazon Bedrock for accessing foundation models without infrastructure overhead, and PartyRock for experimenting with generative AI models in a sandbox environment. Amazon EC2 is not specialized for generative AI, and Amazon Q is not a real service.
A. Correct. Amazon SageMaker JumpStart is a curated set of pre-trained models and solutions, making it an excellent choice for quickly starting with AI applications like chatbots.
B. Correct. Amazon Bedrock allows users to access and integrate foundation models from various providers without managing any infrastructure or training models themselves, making it ideal for generative AI use cases.
C. Incorrect. Amazon EC2 is a general-purpose compute service and does not provide specialized tools or models for building generative AI applications.
D. Correct. PartyRock, an Amazon Bedrock Playground, provides a hands-on environment to experiment with generative AI models available in Amazon Bedrock, which is helpful for prototyping solutions like chatbots.
E. Incorrect. Amazon Q is a fictional service and does not exist, so it is not a valid choice.

为了以最少的基础设施管理高效构建基于 AI 的生成式聊天机器人，团队应利用 Amazon SageMaker JumpStart 进行预训练模型和解决方案，利用 Amazon Bedrock 来访问基础模型而无需基础设施开销，并利用 PartyRock 在沙盒环境中试验生成式 AI 模型。 Amazon EC2 并不是专门用于生成式 AI，而 Amazon Q 也不是真正的服务。答：正确。 Amazon SageMaker JumpStart 是一组精选的预训练模型和解决方案，使其成为快速启动聊天机器人等 AI 应用程序的绝佳选择。 B、正确。 Amazon Bedrock 允许用户访问和集成来自不同提供商的基础模型，而无需自行管理任何基础设施或训练模型，这使其成为生成式 AI 使用案例的理想选择。 C、不正确。 Amazon EC2 是一种通用计算服务，不提供用于构建生成式 AI 应用程序的专用工具或模型。 D、正确。PartyRock 是一个 Amazon Bedrock Playground，它提供了一个实践环境来试验 Amazon Bedrock 中可用的生成式 AI 模型，这有助于对聊天机器人等解决方案进行原型设计。 E、不正确。 Amazon Q 是虚构的服务并且不存在，因此它不是有效的选择。

---

## Question 90  `#90`

**EN** A company wants to build a generative AI application to automate text summarization for customer support tickets. They need a solution that allows them to integrate foundational models from third-party providers without managing the underlying infrastructure. Which AWS service would best meet their requirements?

**中** 一家公司希望构建一个生成式 AI 应用程序来自动生成客户支持票证的文本摘要。他们需要一个解决方案，使他们能够集成来自第三方提供商的基础模型，而无需管理底层基础设施。哪种 AWS 服务最能满足他们的要求？

- **A.** Amazon SageMaker JumpStart
  - 亚马逊 SageMaker JumpStart
- **B.** Amazon Bedrock
  - Amazon Bedrock
- **C.** PartyRock, an Amazon Bedrock Playground
  - PartyRock，Amazon Bedrock 游乐场
- **D.** Amazon Q
  - Amazon Q

**正确答案 / Answer: `B`**

Amazon Bedrock is the ideal choice for this scenario because it enables customers to access and integrate foundational models from third-party providers for generative AI applications without managing infrastructure. Other options either do not support this functionality or are not real services.
A. Incorrect. Amazon SageMaker JumpStart provides pre-built machine learning models and solutions, but it is not designed for directly integrating foundational models from third-party providers for generative AI use cases.
B. Correct. Amazon Bedrock is specifically designed to allow customers to integrate and use foundational models from various third-party providers without the need to manage underlying infrastructure. It meets the requirements of this scenario.
C. Incorrect. PartyRock, an Amazon Bedrock Playground, is a tool for experimenting and testing generative AI models, but it is not the service to deploy and integrate foundational models into production applications.
D. Incorrect. Amazon Q is a fictitious service and does not exist. It is not relevant to this question.

Amazon Bedrock 是此场景的理想选择，因为它使客户能够访问和集成第三方提供商的基础模型以实现生成 AI 应用程序，而无需管理基础设施。其他选项要么不支持此功能，要么不是真正的服务。 A. 不正确。 Amazon SageMaker JumpStart 提供预构建的机器学习模型和解决方案，但它并非旨在直接集成第三方提供商的基础模型以用于生成 AI 用例。 B、正确。 Amazon Bedrock 专门设计用于允许客户集成和使用来自各个第三方提供商的基础模型，而无需管理底层基础设施。就满足了这个场景的要求。 C、不正确。 PartyRock 是一个 Amazon Bedrock Playground，是一种用于实验和测试生成式 AI 模型的工具，但它不是将基础模型部署和集成到生产应用程序中的服务。 D、不正确。Amazon Q 是一个虚构的服务，并不存在。这与这个问题无关。

---

## Question 91  `#91`

**EN** A company is building a customer support chatbot and is considering using AWS generative AI services. Which of the following advantages make AWS generative AI services a suitable choice for this project?

**中** 一家公司正在构建客户支持聊天机器人，并正在考虑使用 AWS 生成式 AI 服务。以下哪些优势使 AWS 生成式 AI 服务成为该项目的合适选择？

- **A.** Reduced time to develop and deploy the chatbot, accelerating time to market
  - 减少了开发和部署聊天机器人的时间，加快了上市时间
- **B.** Ability to customize the AI model for specific customer requirements without requiring advanced machine learning expertise
  - 能够根据特定客户需求定制人工智能模型，而无需高级机器学习专业知识
- **C.** High upfront costs for setting up infrastructure and training generative AI models
  - 建立基础设施和训练生成人工智能模型的前期成本很高
- **D.** Access to pre-trained models that are optimized for common use cases like text generation and summarization
  - 访问针对文本生成和摘要等常见用例进行优化的预训练模型
- **E.** Requirement to manage and scale infrastructure manually for peak usage times
  - 需要在高峰使用时间手动管理和扩展基础设施

**正确答案 / Answer: `A,B,D`**

AWS generative AI services, such as Amazon Bedrock and Amazon SageMaker, simplify the development of AI-powered applications by providing pre-trained models, infrastructure management, and customization options. This enables businesses to reduce time to market, lower operational complexity, and meet specific objectives without requiring deep expertise in machine learning. These advantages make AWS generative AI services a strong choice for building applications like customer support chatbots.
A. Correct. AWS generative AI services provide ready-to-use capabilities and infrastructure, allowing development teams to build and deploy applications faster, which reduces time to market.
B. Correct. AWS generative AI services, such as Amazon Bedrock, offer the ability to fine-tune models for specific business needs without requiring deep machine learning expertise, making it accessible for a wide range of users.
C. Incorrect. This option is incorrect because AWS generative AI services are cost-effective and remove the need for upfront investment in infrastructure. Users only pay for what they use.
D. Correct. AWS generative AI services provide access to pre-trained models optimized for common use cases, which reduces the complexity and time needed to build applications like chatbots.
E. Incorrect. This option is incorrect because AWS generative AI services handle infrastructure management and scaling, allowing developers to focus on application logic rather than operational overhead.

AWS 生成式 AI 服务（例如 Amazon Bedrock 和 Amazon SageMaker）通过提供预先训练的模型、基础设施管理和自定义选项来简化 AI 支持的应用程序的开发。这使企业能够缩短上市时间、降低运营复杂性并实现特定目标，而无需深厚的机器学习专业知识。这些优势使 AWS 生成式 AI 服务成为构建客户支持聊天机器人等应用程序的绝佳选择。答：正确。 AWS 生成式 AI 服务提供即用型功能和基础设施，使开发团队能够更快地构建和部署应用程序，从而缩短上市时间。 B、正确。 AWS 生成式 AI 服务（例如 Amazon Bedrock）能够根据特定业务需求微调模型，而无需深厚的机器学习专业知识，从而可供广泛的用户使用。 C、不正确。这个选项是不正确的，因为 AWS 生成式 AI 服务具有成本效益，并且无需对基础设施进行前期投资。用户只需为他们使用的内容付费。 D、正确。 AWS 生成式 AI 服务提供对针对常见用例优化的预训练模型的访问，从而降低了构建聊天机器人等应用程序所需的复杂性和时间。 E、不正确。此选项不正确，因为 AWS 生成式 AI 服务处理基础设施管理和扩展，使开发人员能够专注于应用程序逻辑而不是运营开销。

---

## Question 92  `#92`

**EN** A startup is building a text-to-image generation application and is considering using AWS generative AI services. The team is evaluating whether AWS generative AI services can help them achieve their business objectives quickly and cost-effectively. What are some advantages of using AWS generative AI services in this scenario?

**中** 一家初创公司正在构建文本到图像生成应用程序，并正在考虑使用 AWS 生成式 AI 服务。该团队正在评估 AWS 生成式 AI 服务是否可以帮助他们快速且经济高效地实现业务目标。在这种场景下使用 AWS 生成式 AI 服务有哪些优势？

- **A.** AWS generative AI services provide pre-trained models that reduce the need for extensive training data.
  - AWS 生成式 AI 服务提供预训练模型，减少对大量训练数据的需求。
- **B.** AWS generative AI services enable faster application development with managed infrastructure and tools.
  - AWS 生成式 AI 服务通过托管基础设施和工具实现更快的应用程序开发。
- **C.** AWS generative AI services guarantee the lowest cost for generative AI implementations across all cloud providers.
  - AWS 生成式 AI 服务可保证所有云提供商的生成式 AI 实施成本最低。
- **D.** AWS generative AI services simplify compliance with data privacy regulations by providing built-in security features.
  - AWS 生成式 AI 服务通过提供内置安全功能来简化数据隐私法规的合规性。
- **E.** AWS generative AI services are only designed for enterprises and are not suitable for startups or small businesses.
  - AWS 生成式 AI 服务仅针对企业设计，不适合初创公司或小型企业。

**正确答案 / Answer: `A,B,D`**

AWS generative AI services offer significant advantages, including pre-trained models that reduce the need for extensive data, faster development with managed tools, and built-in security features that simplify compliance. These factors make them particularly beneficial for startups looking to build applications quickly and cost-effectively. However, AWS does not guarantee the lowest cost universally, and the services are designed to be accessible for businesses of all sizes.
A. Correct. Correct: AWS generative AI services offer pre-trained foundation models, reducing the need for businesses to gather and preprocess extensive datasets, which can lower the barrier to entry.
B. Correct. Correct: AWS generative AI services provide fully managed infrastructure, pre-configured tools, and APIs, enabling faster development and deployment of applications.
C. Incorrect. Incorrect: While AWS generative AI services can be cost-effective, they do not guarantee the lowest cost across all cloud providers, as pricing depends on various factors.
D. Correct. Correct: AWS generative AI services are built with security and compliance in mind, offering features like encryption and data privacy controls, which help businesses address regulatory requirements.
E. Incorrect. Incorrect: AWS generative AI services are designed to be accessible and scalable for both startups and large enterprises, making them suitable for businesses of all sizes.

AWS 生成式 AI 服务具有显着的优势，包括可减少对大量数据需求的预训练模型、使用托管工具加快开发速度，以及可简化合规性的内置安全功能。这些因素使它们对于寻求快速且经济高效地构建应用程序的初创公司特别有利。然而，AWS 并不保证普遍的最低成本，并且这些服务旨在供各种规模的企业使用。答：正确。正确：AWS 生成式 AI 服务提供预先训练的基础模型，减少了企业收集和预处理大量数据集的需要，从而降低了进入门槛。 B、正确。正确：AWS 生成式 AI 服务提供完全托管的基础设施、预配置的工具和 API，从而能够更快地开发和部署应用程序。 C、不正确。错误：虽然 AWS 生成式 AI 服务具有成本效益，但它们不能保证在所有云提供商中成本最低，因为定价取决于各种因素。 D、正确。正确：AWS 生成式 AI 服务在构建时考虑了安全性和合规性，提供加密和数据隐私控制等功能，帮助企业满足监管要求。 E、不正确。错误：AWS 生成式 AI 服务旨在为初创公司和大型企业提供可访问性和可扩展性，使其适合各种规模的企业。

---

## Question 93  `#93`

**EN** A startup company wants to build a customer support chatbot powered by generative AI to handle common inquiries and reduce response times. They are considering using AWS generative AI services such as Amazon Bedrock and Amazon SageMaker. What are the key advantages of using AWS generative AI services in this scenario?

**中** 一家初创公司希望构建一个由生成式人工智能驱动的客户支持聊天机器人，以处理常见查询并减少响应时间。他们正在考虑使用 AWS 生成式 AI 服务，例如 Amazon Bedrock 和 Amazon SageMaker。在这种场景下使用 AWS 生成式 AI 服务的主要优势是什么？

- **A.** Lower barrier to entry by providing pre-trained models that require minimal expertise to implement.
  - 通过提供需要最少专业知识即可实施的预训练模型来降低进入门槛。
- **B.** Cost-effectiveness due to the pay-as-you-go pricing model and no upfront infrastructure costs.
  - 由于采用即用即付定价模式且无前期基础设施成本，因此具有成本效益。
- **C.** Guaranteed 100% accuracy of responses generated by the chatbot.
  - 保证聊天机器人生成的响应 100% 准确。
- **D.** Faster time-to-market by reducing the need for extensive model training and infrastructure setup.
  - 通过减少大量模型培训和基础设施设置的需求，加快上市时间。
- **E.** Ability to scale dynamically to meet varying chatbot usage demands.
  - 能够动态扩展以满足不同的聊天机器人使用需求。

**正确答案 / Answer: `A,B,D,E`**

AWS generative AI services like Amazon Bedrock and SageMaker offer several advantages for building applications, such as accessibility through pre-trained models, cost-effectiveness, faster time-to-market, and dynamic scalability. These features make it easier for businesses to implement and deploy generative AI solutions efficiently. However, it is important to note that while these services are powerful, the accuracy of AI-generated responses is not guaranteed.
A. Correct. AWS generative AI services, like Amazon Bedrock, provide access to pre-trained models, reducing the need for deep expertise in machine learning. This lowers the barrier to entry for startups and small teams.
B. Correct. AWS generative AI services operate on a pay-as-you-go model, allowing businesses to avoid large upfront investments in infrastructure and only pay for resources they use.
C. Incorrect. While generative AI models are powerful, they do not guarantee 100% accuracy of their outputs, as their responses depend on the quality of training data and context provided.
D. Correct. AWS generative AI services reduce the need for extensive model training and infrastructure setup, enabling faster deployment of applications such as chatbots.
E. Correct. AWS cloud infrastructure allows applications to scale dynamically based on demand, ensuring the chatbot can handle varying levels of traffic efficiently.

Amazon Bedrock 和 SageMaker 等 AWS 生成式 AI 服务为构建应用程序提供了多种优势，例如通过预先训练的模型进行访问、成本效益、更快的上市时间和动态可扩展性。这些功能使企业能够更轻松地高效实施和部署生成式人工智能解决方案。然而，值得注意的是，虽然这些服务很强大，但人工智能生成的响应的准确性并不能得到保证。答：正确。 AWS 生成式 AI 服务（例如 Amazon Bedrock）提供对预先训练模型的访问，从而减少了对机器学习方面深厚专业知识的需求。这降低了初创公司和小型团队的进入门槛。 B、正确。 AWS 生成式 AI 服务采用即用即付模式运行，使企业能够避免对基础设施进行大量前期投资，而只需为他们使用的资源付费。 C、不正确。虽然生成式 AI 模型功能强大，但它们不能保证输出 100% 的准确性，因为它们的响应取决于训练数据的质量和所提供的上下文。 D、正确。 AWS 生成式 AI 服务减少了对大量模型训练和基础设施设置的需求，从而能够更快地部署聊天机器人等应用程序。 E、正确。 AWS 云基础设施允许应用程序根据需求动态扩展，确保聊天机器人能够有效处理不同级别的流量。

---

## Question 94  `#94`

**EN** An organization is building a generative AI application for creating text-based summaries of legal documents. They are concerned about data security, compliance with industry regulations, and ensuring ethical use of the AI model. How does AWS infrastructure address these concerns?

**中** 一个组织正在构建一个生成式人工智能应用程序，用于创建基于文本的法律文件摘要。他们关注数据安全、遵守行业法规以及确保人工智能模型的道德使用。 AWS 基础设施如何解决这些问题？

- **A.** AWS provides encryption for data at rest and in transit to ensure data security.
  - AWS 为静态和传输中的数据提供加密，以确保数据安全。
- **B.** AWS offers compliance certifications such as GDPR, HIPAA, and SOC to meet industry regulations.
  - AWS 提供 GDPR、HIPAA 和 SOC 等合规性认证，以满足行业法规。
- **C.** AWS takes full responsibility for ethical AI usage by automatically ensuring models are not biased.
  - AWS 通过自动确保模型不存在偏见，对人工智能的道德使用承担全部责任。
- **D.** AWS enables customers to control access to data and resources through IAM policies and fine-grained permissions.
  - AWS 使客户能够通过 IAM 策略和细粒度权限控制对数据和资源的访问。
- **E.** AWS provides tools like Amazon SageMaker Clarify to help monitor and mitigate bias in AI models.
  - AWS 提供 Amazon SageMaker Clarify 等工具来帮助监控和减轻 AI 模型中的偏差。

**正确答案 / Answer: `A,B,D,E`**

AWS infrastructure supports generative AI applications by providing robust security features such as encryption, compliance with industry standards, and tools like SageMaker Clarify to address ethical concerns like bias. While AWS provides the tools and frameworks for responsible AI development, customers retain the responsibility to ensure their AI models are used ethically and appropriately.
A. Correct. Correct: AWS ensures data security by providing encryption capabilities for both data at rest and in transit, which is critical for protecting sensitive legal document data.
B. Correct. Correct: AWS meets various compliance standards, including GDPR, HIPAA, and SOC, helping organizations adhere to industry regulations while using the platform.
C. Incorrect. Incorrect: AWS provides tools and frameworks to support ethical AI development, but it does not take full responsibility for ensuring models are unbiased. This remains the customer's responsibility.
D. Correct. Correct: AWS Identity and Access Management (IAM) allows customers to define and enforce fine-grained access control, ensuring that only authorized personnel can access sensitive data and resources.
E. Correct. Correct: Amazon SageMaker Clarify is specifically designed to help identify and mitigate bias in AI models, supporting ethical AI usage.

AWS 基础设施通过提供强大的安全功能（例如加密、符合行业标准）以及 SageMaker Clarify 等工具来支持生成式 AI 应用程序，以解决偏见等道德问题。虽然 AWS 为负责任的 AI 开发提供了工具和框架，但客户仍有责任确保其 AI 模型得到合乎道德且适当的使用。答：正确。正确：AWS 通过为静态和传输中的数据提供加密功能来确保数据安全，这对于保护敏感的法律文档数据至关重要。 B、正确。正确：AWS 满足各种合规性标准，包括 GDPR、HIPAA 和 SOC，帮助组织在使用该平台时遵守行业法规。 C、不正确。错误：AWS 提供了支持道德人工智能开发的工具和框架，但它并不承担确保模型公正的全部责任。这仍然是客户的责任。 D、正确。正确：AWS Identity and Access Management (IAM) 允许客户定义和实施细粒度的访问控制，确保只有授权人员才能访问敏感数据和资源。 E、正确。正确：Amazon SageMaker Clarify 专门设计用于帮助识别和减少 AI 模型中的偏差，支持合乎道德的 AI 使用。

---

## Question 95  `#95`

**EN** You are developing a generative AI application that processes sensitive customer data. Why would you choose AWS infrastructure to host your application?

**中** 您正在开发一个处理敏感客户数据的生成式 AI 应用程序。您为什么选择 AWS 基础设施来托管您的应用程序？

- **A.** AWS provides robust security features like encryption and fine-grained access control to protect sensitive data.
  - AWS 提供强大的安全功能（例如加密和细粒度访问控制）来保护敏感数据。
- **B.** AWS offers compliance certifications and frameworks that meet global regulatory requirements for data protection.
  - AWS 提供符合全球数据保护监管要求的合规性认证和框架。
- **C.** AWS guarantees that generative AI models will always produce entirely safe outputs without any human oversight.
  - AWS 保证生成式 AI 模型将始终产生完全安全的输出，而无需任何人为监督。
- **D.** AWS provides shared responsibility for security, ensuring that customers manage their data securely while AWS secures the underlying infrastructure.
  - AWS 提供共同的安全责任，确保客户安全地管理其数据，同时 AWS 保护底层基础设施。
- **E.** AWS offers specialized tools to ensure ethical and responsible use of AI models, such as monitoring for bias and harmful content.
  - AWS 提供专门的工具来确保人工智能模型的使用符合道德和负责任，例如监控偏见和有害内容。

**正确答案 / Answer: `A,B,D,E`**

AWS infrastructure provides several benefits for generative AI applications, including robust security, compliance with global standards, tools for responsible AI usage, and a shared responsibility model for security. While AWS supports building safe AI systems, ultimate responsibility for monitoring outputs lies with the customer.
A. Correct. Correct: AWS provides robust security features such as encryption at rest and in transit, IAM policies, and fine-grained access control, which are critical for protecting sensitive data in AI applications.
B. Correct. Correct: AWS meets global compliance standards such as GDPR, HIPAA, and SOC, making it suitable for applications that need to adhere to strict regulatory requirements.
C. Incorrect. Incorrect: While AWS offers tools and guidelines to build safe AI applications, it does not guarantee that generative AI models will always produce safe outputs. Responsibility for model usage and monitoring lies partly with the customer.
D. Correct. Correct: AWS operates on a shared responsibility model where AWS secures the underlying infrastructure and customers are responsible for securing their workloads and data. This ensures a balanced approach to security.
E. Correct. Correct: AWS offers tools such as Amazon SageMaker Clarify to detect bias and monitor for harmful content, supporting the ethical use of AI.

AWS 基础设施为生成式 AI 应用程序提供了多项优势，包括强大的安全性、符合全球标准、负责任的 AI 使用工具以及安全共享责任模型。虽然 AWS 支持构建安全的人工智能系统，但监控输出的最终责任在于客户。答：正确。正确：AWS 提供强大的安全功能，例如静态和传输中加密、IAM 策略和细粒度访问控制，这对于保护 AI 应用程序中的敏感数据至关重要。 B、正确。正确：AWS 符合 GDPR、HIPAA 和 SOC 等全球合规标准，使其适合需要遵守严格监管要求的应用程序。 C、不正确。错误：虽然 AWS 提供了构建安全 AI 应用程序的工具和指南，但它并不能保证生成式 AI 模型始终会产生安全的输出。模型使用和监控的部分责任由客户承担。 D .正确的。正确：AWS 采用责任共担模式运营，其中 AWS 保护底层基础设施的安全，而客户则负责保护其工作负载和数据的安全。这确保了平衡的安全方法。 E、正确。正确：AWS 提供 Amazon SageMaker Clarify 等工具来检测偏见并监控有害内容，支持人工智能的道德使用。

---

## Question 96  `#96`

**EN** You are building a generative AI application that processes sensitive customer data and must comply with regulations such as GDPR. Which benefits of AWS infrastructure would best support this use case?

**中** 您正在构建一个生成式 AI 应用程序，用于处理敏感的客户数据，并且必须遵守 GDPR 等法规。 AWS 基础设施的哪些优势最能支持该用例？

- **A.** AWS offers built-in security features such as encryption for data at rest and in transit.
  - AWS 提供内置安全功能，例如对静态和传输中的数据进行加密。
- **B.** AWS provides pre-trained generative AI models that eliminate the need for security measures.
  - AWS 提供预先训练的生成式 AI 模型，无需采取安全措施。
- **C.** AWS complies with global regulatory frameworks, including GDPR, HIPAA, and SOC 2.
  - AWS 遵守全球监管框架，包括 GDPR、HIPAA 和 SOC 2。
- **D.** AWS allows you to configure fine-grained access controls using Identity and Access Management (IAM).
  - AWS 允许您使用身份和访问管理 (IAM) 配置细粒度的访问控制。
- **E.** AWS automatically guarantees ethical use of your generative AI applications without human oversight.
  - AWS 自动保证您的生成式 AI 应用程序的合乎道德使用，无需人工监督。

**正确答案 / Answer: `A,C,D`**

AWS infrastructure benefits generative AI applications by providing robust security features, compliance with global regulations, and fine-grained access controls, all of which are essential for handling sensitive customer data responsibly and securely. However, users must still ensure ethical practices and implement security measures effectively.
A. Correct. AWS provides robust security features such as encryption for data at rest and in transit, ensuring sensitive data is protected during storage and transmission.
B. Incorrect. While AWS provides pre-trained models, security measures are still necessary and not eliminated by using these models.
C. Correct. AWS complies with multiple global regulatory frameworks, making it suitable for applications that must align with legal and compliance requirements like GDPR.
D. Correct. AWS IAM allows you to implement fine-grained access controls, ensuring that only authorized users and systems can access sensitive data and resources.
E. Incorrect. AWS provides tools and frameworks for building responsible AI, but ethical use still requires human oversight and proper implementation by the user.

AWS 基础设施通过提供强大的安全功能、遵守全球法规以及细粒度的访问控制，使生成式 AI 应用程序受益，所有这些对于负责任、安全地处理敏感客户数据至关重要。然而，用户仍然必须确保道德实践并有效实施安全措施。答：正确。 AWS 提供强大的安全功能，例如对静态和传输中的数据进行加密，确保敏感数据在存储和传输过程中受到保护。 B、不正确。虽然 AWS 提供了预先训练的模型，但安全措施仍然是必要的，并且不会因为使用这些模型而消除。 C、正确。 AWS 符合多个全球监管框架，使其适合必须符合法律和合规性要求（例如 GDPR）的应用程序。 D、正确。 AWS IAM 允许您实施细粒度的访问控制，确保只有授权的用户和系统才能访问敏感数据和资源。 E.不正确。 AWS 提供了用于构建负责任的 AI 的工具和框架，但道德使用仍然需要人类监督和用户的正确实施。

---

## Question 97  `#97`

**EN** A company is planning to use an AWS generative AI service to create a custom language model for their chatbot. They want to minimize costs while ensuring the solution is available globally and responsive to their customers in multiple regions. Which considerations should they prioritize when designing this solution?

**中** 一家公司计划使用 AWS 生成式 AI 服务为其聊天机器人创建自定义语言模型。他们希望最大限度地降低成本，同时确保解决方案在全球范围内可用并响应多个地区的客户。在设计这个解决方案时，他们应该优先考虑哪些因素？

- **A.** Choose token-based pricing to control costs based on usage.
  - 选择基于令牌的定价以根据使用情况控制成本。
- **B.** Deploy the model in multiple AWS Regions to reduce latency for global users.
  - 在多个 AWS 区域部署模型以减少全球用户的延迟。
- **C.** Use a pre-trained foundation model instead of training a custom model.
  - 使用预先训练的基础模型而不是训练自定义模型。
- **D.** Provision high throughput for the model to ensure responsiveness during peak demand.
  - 为模型提供高吞吐量，以确保高峰需求期间的响应能力。
- **E.** Enable redundancy by deploying the model across Availability Zones in a single region.
  - 通过在单个区域中跨可用区部署模型来实现冗余。

**正确答案 / Answer: `A,B,D`**

To meet the company's requirements of minimizing costs, ensuring global availability, and maintaining responsiveness, the solution should focus on token-based pricing to manage costs, deploying the model in multiple regions to reduce latency for global users, and provisioning high throughput to handle traffic efficiently during peak usage. These considerations align with the cost tradeoffs and performance requirements of AWS generative AI services.
A. Correct. Token-based pricing is cost-effective because it allows the company to pay only for the amount of data processed, which helps control costs.
B. Correct. Deploying the model in multiple AWS Regions ensures low latency for users across the globe, improving responsiveness and availability.
C. Incorrect. Using a pre-trained foundation model might not meet the company's needs for a custom chatbot, as it limits their ability to tailor the model to their specific requirements.
D. Correct. Provisioning high throughput ensures the model can handle high traffic during peak demand, maintaining responsiveness for users.
E. Incorrect. Deploying the model across Availability Zones in a single region improves redundancy locally but does not address the need for global availability and responsiveness.

为了满足公司最小化成本、确保全球可用性和保持响应能力的要求，解决方案应侧重于基于代币的定价来管理成本，在多个区域部署模型以减少全球用户的延迟，并提供高吞吐量以在高峰使用期间有效处理流量。这些考虑因素符合 AWS 生成式 AI 服务的成本权衡和性能要求。答：正确。基于代币的定价具有成本效益，因为它允许公司只需为处理的数据量付费，这有助于控制成本。 B、正确。在多个 AWS 区域部署模型可确保全球用户的低延迟，从而提高响应能力和可用性。 C、不正确。使用预先训练的基础模型可能无法满足公司对自定义聊天机器人的需求，因为这限制了他们根据特定要求定制模型的能力。 D、正确。预配高吞吐量可确保模型能够在高峰需求期间处理高流量，从而保持对用户的响应能力。 E、不正确。在单个区域中跨可用区部署模型可以改善本地冗余，但无法满足全球可用性和响应能力的需求。

---

## Question 98  `#98`

**EN** A company is planning to implement a generative AI application using Amazon Bedrock. They need to balance cost efficiency with high responsiveness for real-time text generation workloads. The application will operate across multiple regions and requires minimal latency. Which approach should they choose to optimize costs while meeting their requirements?

**中** 一家公司计划使用 Amazon Bedrock 实施生成式 AI 应用程序。他们需要在成本效率与实时文本生成工作负载的高响应能力之间取得平衡。该应用程序将跨多个区域运行，并且需要最小的延迟。他们应该选择哪种方法来优化成本，同时满足他们的要求？

- **A.** Use a pre-trained foundation model provided by Amazon Bedrock with on-demand pricing and deploy it to multiple regions.
  - 使用 Amazon Bedrock 提供的预训练基础模型（按需定价）并将其部署到多个区域。
- **B.** Fine-tune a foundation model with custom data, host it on Amazon Bedrock, and provision it with high throughput reserved capacity.
  - 使用自定义数据微调基础模型，将其托管在 Amazon Bedrock 上，并为其提供高吞吐量预留容量。
- **C.** Use a pre-trained foundation model provided by Amazon Bedrock and deploy it in a single region with auto-scaling enabled.
  - 使用 Amazon Bedrock 提供的预训练基础模型，并将其部署在启用自动扩展的单个区域中。
- **D.** Deploy a fine-tuned model on Amazon SageMaker hosting with provisioned instances in multiple regions for better control over token-based pricing.
  - 在 Amazon SageMaker 托管上部署微调模型，并在多个区域中配置实例，以便更好地控制基于令牌的定价。

**正确答案 / Answer: `C`**

The best approach is to use a pre-trained foundation model in a single region with auto-scaling enabled. This provides cost efficiency and responsiveness by leveraging Bedrock's pre-trained models without the need for expensive fine-tuning or regional duplication. Auto-scaling ensures that resources adjust dynamically based on demand, minimizing costs during low-usage periods while maintaining performance during high-demand scenarios.
A. Incorrect. Using a pre-trained foundation model with on-demand pricing and deploying it to multiple regions will ensure availability but is likely to increase costs significantly due to regional duplication.
B. Incorrect. Fine-tuning a foundation model and provisioning it with high throughput reserved capacity could improve performance but would increase costs and may not optimize for real-time responsiveness.
C. Correct. Using a pre-trained foundation model in a single region with auto-scaling enabled balances cost efficiency and responsiveness by optimizing resource utilization and scaling only when demand increases.
D. Incorrect. Deploying a fine-tuned model on Amazon SageMaker hosting with provisioned instances in multiple regions offers more control but requires higher upfront costs and may not be as cost-efficient for real-time workloads.

最好的方法是在启用自动缩放的单个区域中使用预先训练的基础模型。通过利用 Bedrock 的预训练模型，无需昂贵的微调或区域重复，即可提供成本效率和响应能力。自动扩展可确保资源根据需求动态调整，从而最大限度地降低低使用率期间的成本，同时在高需求场景下保持性能。 A. 不正确。使用预先训练的基础模型和按需定价并将其部署到多个区域将确保可用性，但可能会由于区域重复而显着增加成本。 B、不正确。微调基础模型并为其配置高吞吐量保留容量可以提高性能，但会增加成本，并且可能无法优化实时响应能力。 C、正确。在启用了自动扩展的单个区域中使用预先训练的基础模型，通过优化资源利用率并仅在需求增加时进行扩展来平衡成本效率和响应能力。 D、不正确。在多个区域中配置实例的 Amazon SageMaker 托管上部署微调模型可提供更多控制，但需要更高的前期成本，并且对于实时工作负载可能不那么经济高效。

---

## Question 99  `#99`

**EN** A retail company is deploying a generative AI solution for personalized customer recommendations. They are considering using Amazon Bedrock to integrate a foundational model (FM). The company wants to minimize costs while ensuring low-latency responses to enhance customer experience. Which of the following strategies would help achieve their goals?

**中** 一家零售公司正在部署生成式人工智能解决方案，以提供个性化的客户推荐。他们正在考虑使用 Amazon Bedrock 来集成基础模型 (FM)。该公司希望最大限度地降低成本，同时确保低延迟响应，以增强客户体验。以下哪些策略有助于实现他们的目标？

- **A.** Leverage a pre-trained foundational model provided by Amazon Bedrock instead of training a custom model.
  - 利用 Amazon Bedrock 提供的预训练基础模型，而不是训练自定义模型。
- **B.** Deploy the solution in multiple AWS Regions to ensure global coverage and redundancy.
  - 在多个 AWS 区域部署解决方案，以确保全球覆盖和冗余。
- **C.** Use token-based pricing to optimize costs by controlling the number of tokens processed in each API request.
  - 使用基于令牌的定价，通过控制每个 API 请求中处理的令牌数量来优化成本。
- **D.** Provision higher throughput capacity even if it increases costs to ensure low latency for requests.
  - 即使增加成本，也要提供更高的吞吐量，以确保请求的低延迟。
- **E.** Implement caching for frequently requested or common responses to reduce the number of API calls.
  - 对频繁请求或常见响应实施缓存，以减少 API 调用的数量。

**正确答案 / Answer: `A,C,E`**

To balance cost minimization and low latency, the company should use a pre-trained foundational model to avoid the high costs of custom models. Additionally, token-based pricing helps optimize expenses by controlling request size. Implementing caching can further reduce the number of API calls, ensuring both cost-efficiency and responsiveness. Deploying in multiple AWS Regions or provisioning higher throughput capacity would increase costs unnecessarily and is not aligned with the company's objectives.
A. Correct. Using a pre-trained foundational model avoids the high computational and financial costs associated with training a custom model, making it a cost-effective strategy.
B. Incorrect. Deploying the solution in multiple AWS Regions increases availability and redundancy but also significantly increases costs, which contradicts the company's goal of minimizing expenses.
C. Correct. Token-based pricing allows the company to control costs by optimizing the size and complexity of requests, aligning with the cost minimization objective.
D. Incorrect. Provisioning higher throughput capacity ensures low latency but increases costs, which conflicts with the company's goal of keeping expenses low.
E. Correct. Implementing caching reduces the number of API calls, thereby lowering operational costs while maintaining low latency for frequent requests.

为了平衡成本最小化和低延迟，公司应该使用预先训练的基础模型来避免定制模型的高成本。此外，基于令牌的定价有助于通过控制请求大小来优化费用。实施缓存可以进一步减少 API 调用的数量，确保成本效率和响应能力。在多个 AWS 区域中部署或预置更高的吞吐量会不必要地增加成本，并且不符合公司的目标。答：正确。使用预先训练的基础模型可以避免与训练自定义模型相关的高计算和财务成本，使其成为一种具有成本效益的策略。 B、不正确。在多个 AWS 区域部署解决方案可以提高可用性和冗余性，但也会显着增加成本，这与公司最大限度减少开支的目标相矛盾。 C、正确。基于代币的定价使公司能够通过优化请求的规模和复杂性来控制成本，从而与成本最小化目标保持一致。 D、不正确。提供更高的吞吐能力可确保低延迟，但会增加成本，这与公司保持较低费用的目标相冲突。 E、正确。实施缓存可减少 API 调用的数量，从而降低运营成本，同时保持频繁请求的低延迟。

---

## Question 100  `#100`

**EN** Your company plans to build a customer service chatbot using a foundation model like Amazon Bedrock. The chatbot needs to handle sensitive customer data, ensure responses are accurate, and provide cost-effective scalability. Which considerations should you prioritize during the design process?

**中** 贵公司计划使用 Amazon Bedrock 等基础模型构建客户服务聊天机器人。聊天机器人需要处理敏感的客户数据，确保响应准确，并提供经济高效的可扩展性。在设计过程中您应该优先考虑哪些因素？

- **A.** Implement fine-tuning of the foundation model to adapt to domain-specific terminology and customer requirements.
  - 对基础模型进行微调，以适应特定领域的术语和客户要求。
- **B.** Enable data encryption for any sensitive customer data transmitted to and from the model.
  - 对传入和传出模型的任何敏感客户数据启用数据加密。
- **C.** Rely solely on the foundation model's pre-trained capabilities without customization for faster deployment.
  - 仅依靠基础模型的预训练功能，无需进行定制，即可实现更快的部署。
- **D.** Incorporate a human-in-the-loop mechanism to review and correct certain responses for critical scenarios.
  - 纳入人机交互机制来审查和纠正关键场景的某些响应。
- **E.** Select a foundation model solely based on its size (e.g., number of parameters) to ensure high performance.
  - 仅根据其大小（例如参数数量）选择基础模型，以确保高性能。

**正确答案 / Answer: `A,B,D`**

When designing applications with foundation models, it is important to consider fine-tuning for domain specificity to improve relevance and accuracy, implement encryption to handle sensitive data securely, and include mechanisms like human-in-the-loop for critical scenarios to ensure reliability. These considerations help meet accuracy, security, and scalability requirements while avoiding unnecessary costs or risks.
A. Correct. Fine-tuning the foundation model allows you to adapt it to your specific domain and improve its accuracy in handling customer interactions, which is critical for a chatbot.
B. Correct. Sensitive customer data must be protected with encryption to comply with security and privacy regulations, ensuring customer trust.
C. Incorrect. Relying solely on pre-trained capabilities may lead to suboptimal responses or inaccuracies for domain-specific use cases, making this approach unsuitable for critical applications.
D. Correct. A human-in-the-loop mechanism ensures that critical or sensitive responses can be reviewed and corrected, improving both accuracy and customer trust.
E. Incorrect. Choosing a foundation model based solely on size is not an optimal approach, as performance depends on other factors like domain relevance, cost, and efficiency.

在使用基础模型设计应用程序时，重要的是要考虑针对领域特异性进行微调以提高相关性和准确性，实施加密以安全地处理敏感数据，并在关键场景中包括人机交互等机制以确保可靠性。这些注意事项有助于满足准确性、安全性和可扩展性要求，同时避免不必要的成本或风险。答：正确。通过微调基础模型，您可以使其适应您的特定领域，并提高其处理客户交互的准确性，这对于聊天机器人至关重要。 B、正确。敏感的客户数据必须进行加密保护，以符合安全和隐私法规，确保客户信任。 C、不正确。仅依赖预先训练的功能可能会导致特定领域用例的响应不理想或不准确，从而使这种方法不适合关键应用程序。 D、正确。人机交互机制确保可以审查和纠正关键或敏感的响应，从而提高准确性和客户信任度。 E、不正确。仅根据大小选择基础模型并不是最佳方法，因为性能取决于领域相关性、成本和效率等其他因素。

---

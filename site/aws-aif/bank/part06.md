# AWS AIF-C01 AI 真题库（452 题） · 第 06 份

> 题目 251–300 · 中英对照 · 来源：扫描版 AWS AI 题库（452 题，中英对照）

## Question 251  `#251`

**EN** A design company is using a foundation model (FM) on Amazon Bedrock to generate images for various projects. The company wants to have control over how detailed or abstract each generated image appears Which model parameter should the company modify?

**中** 一家设计公司正在亚马逊Bedrock上使用基础模型（FM）为各类项目生成图像。该公司希望对每张生成图 像的细节程度或抽象程度进行控制。 公司应该修改哪个模型参数？

- **A.** Model checkpoint
  - 模型检查点
- **B.** Batch size
  - 批量大小
- **C.** Generation step
  - 生成步骤
- **D.** Token length
  - 令牌长度

**正确答案 / Answer: `C`**

The “generation step" parameter controls how detailed or abstract an image appears during generation. By adjusting the number of generation steps, you can influence the level of refinement and detail in the output - more steps yield more detailed images, while fewer steps result in more abstract images.

“生成步骤”参数控制着生成图像时的详细程度或抽象程度。通过调整生成步骤的数量，您可以影响输出图 像的精细度和细节水平一一步骤越多，生成的图像越详细；步骤越少，生成的图像越抽象。

---

## Question 252  `#252`

**EN** A financial company has offices in different countries worldwide. The company requires that all APl calls between generative Al applications and foundation models (FM) must not travel across the public internet. Which AWS service should the company use?

**中** 一家金融公司在全球多个国家设有办事处。该公司要求，生成式人工智能应用程序与基础模型（FM）之间 的所有API调用均不得通过公共互联网传输。 该公司应该使用哪种AWS服务？

- **A.** AWS PrivateLink
  - AWS私有链接
- **B.** Amazon Q
  - 亚马逊Q
- **C.** Amazon CloudFront
  - 亚马逊 CloudFront
- **D.** AWS CloudTrail
  - AWS CloudTrail 服务

**正确答案 / Answer: `A`**

AWS PrivateLink provides secure, private connectivity between VPCs and AWS services, ensuring that APl calls do not traverse the public internet. This meets the requirement for private communication between generative Al applications and foundation models across global offices.

AWSPrivateLink提供了VPC与AWS服务之间的安全私有连接，确保API调用不会通过公共互联网传 输。这满足了全球办公室之间生成式AI应用程序与基础模型进行私有通信的需求。

---

## Question 253  `#253`

**EN** An ecommerce company is deploying a chatbot. The chatbot will give users the ability to ask questions about the company's products and receive details on users' orders. The company must implement safeguards for the chatbot to filter harmful content from the input prompts and chatbot responses. Which AWS feature or resource meets these requirements?

**中** 一家电子商务公司正在部署一个聊天机器人。该聊天机器人将使用户能够就公司的产品提问，并获取其 订单详情。公司必须为聊天机器人设置防护措施，以过滤掉输入提示和聊天机器人回复中的有害内容。 哪个AWS功能或资源符合这些要求？

- **A.** Amazon Bedrock Guardrails
  - 亚马逊Bedrock安全护栏
- **B.** Amazon Bedrock Agents
  - 亚马逊Bedrock代理
- **C.** Amazon Bedrock inference APls
  - 亚马逊 Bedrock 推理 API
- **D.** Amazon Bedrock custom models
  - 亚马逊Bedrock自定义模型

**正确答案 / Answer: `A`**

Amazon Bedrock Guardrails enable you to implement safeguards that filter out harmful or inappropriate content in both user input prompts and chatbot responses, ensuring safe and compliant chatbot interactions.

亚马逊Bedrock守护栏功能让您能够实施防护措施，过滤掉用户输入提示和聊天机器人回复中的有害或 不适当内容，确保聊天机器人交互的安全合规。

---

## Question 254  `#254`

**EN** A company wants to learn about generative Al applications in an experimental environment. Which solution will meet this requirement MOsT cost-effectively?

**中** 一家公司希望在实验环境中了解生成式人工智能的应用。 哪种解决方案能以最经济高效的方式满足这一要求？

- **A.** Amazon Q Developer
  - 亚马逊Q开发者
- **B.** Amazon SageMaker JumpStart
  - 亚马逊SageMaker快速入门
- **C.** Amazon Bedrock PartyRock
  - 亚马逊贝德洛克派对摇滚
- **D.** Amazon Q Business
  - 亚马逊Q商业版

**正确答案 / Answer: `C`**

Amazon Bedrock PartyRock provides a highly cost-effective and experimental environment for learning about generative Al applications, allowing users to quickly build, test, and iterate on Al apps without incurring significant costs.

亚马逊BedrockPartyRock为学习生成式人工智能应用提供了一个极具成本效益且富有实验性的环境，使 用户能够快速构建、测试和选代人工智能应用程序，而无需承担高昂的成本。

---

## Question 255  `#255`

**EN** A company needs to collect a large dataset to train an Al assistant in a specific content area. Which dataset will meet this requirement?

**中** 一家公司需要收集大量数据集来训练一个特定内容领域的AI助手。 哪个数据集能满足这一要求？

- **A.** Diverse conversations that use relevant terminology
  - 使用相关术语的多样化对话
- **B.** Time series data of general purpose historical sales
  - 通用历史销售的时间序列数据
- **C.** Sentiment analysis of news articles
  - 新闻文章的情感分析
- **D.** Unique product IDs and corresponding user IDs
  - 独特的产品ID及其对应的用户ID

**正确答案 / Answer: `A`**

To train an Al assistant for a specific content area, you need a large dataset of diverse conversations that incorporate the relevant terminology and context for that area. This enables the assistant to learn how to respond accurately and appropriately within the targeted subject.

要训练一个特定内容领域的AI助手，您需要一个包含大量多样化对话的大数据集，这些对话要融入该领 域的相关术语和背景。这能让助手学会在目标主题内准确且恰当地作出回应。

---

## Question 256  `#256`

**EN** A financial company is developing a generative Al application for loan approval decisions. The company needs the application output to be responsible and fair. Which solution meets these requirements?

**中** 一家金融公司正在开发-一款用于贷款审批决策的生成式人工智能应用程序。该公司要求该应用程序的输出 结果要负责任且公平。 哪种解决方案能满足这些要求？

- **A.** Review the training data to check for biases. Include data from all demographics in the training data.
  - 审查训练数据以检查是否存在偏差。在训练数据中纳入来自所有人口群体的数据。
- **B.** Use a deep learning model with many hidden layers.
  - 使用具有许多隐藏层的深度学习模型。
- **C.** Keep the model's decision-making process a secret to protect proprietary algorithms.
  - 对模型的决策过程保密，以保护专有算法。
- **D.** Continuously monitor the model's performance on a static test dataset
  - 持续监控模型在静态测试数据集上的表现

**正确答案 / Answer: `A`**

Reviewing the training data for biases and ensuring representation from all demographics is essential for developing a responsible and fair generative Al application, especially in sensitive domains like loan approval decisions. This approach helps reduce bias and supports ethical Al practices.

审查训练数据是否存在偏见，并确保涵盖所有人口群体，这对于开发负责任且公平的生成式人工智能应用 至关重要，尤其是在贷款审批决策等敏感领域。这种方法有助于减少偏见，并支持人工智能的道德实践。

---

## Question 257  `#257`

**EN** HOTSPOT Select the correct AWS service or tool from the following list for each use case. Select each AWS service or tool one time or not at all. Hot Area: ApplyhumanfeedbackacrosstheML lifecycleto improveSelect... theaccuracyandrelevancyofmodels.Select theaccuracyandfelevancyormodeis.AmaconSageMakerClarify Amazon SageMakerCrarydTruth Amazon SageMakerGroundTruth Amazon BedrockGuardrails AwsCloudTrail Aws Trusted Advisor ImplementsafeguardsthatalignwithresponsibleAlpolicies.Select... select AmeazonSageMakerClarify Amazon SageMakerClraryd Truth AmazonSageMakerGroundTruth Amazon BedrockGuardrails AwsCloudTrail AwsTrustedAdvisor Detect potential biasduringdata preparation andmodeltraining.Select... gppgSelect AmeazonSageMakerClarify Amazon SageMakerCrarnydTruth Amazon SageMakerGroundTruth Amazon BedrockGuardrails AwsCloudTrail AwS Trusted Advisor

**中** 热点 从以下列表中为每个用例选择正确的AWS服务或工具。每个AWS服务或工具只能选择一次或根本不选。 热点区域： Applyhumanfeedbackacross theML lifecycletoimproveSelect... the accuracy and relevancy of models.Select. AmazonSageMakerClarify Amazon SageMakerGround Truth AmazonBedrockGuardrails AWsCloudTrail AWs Trusted Advisor ImplementsafeguardsthatalignwithresponsibleAl policies.Select... Select. AmazonSageMakerClarify Amazon SageMakerGround Truth Amazon BedrockGuardrails AWsCloudTrail AWsTrustedAdvisor Detect potential biasduringdata preparation andmodel training.Select... Select.. AmazonSageMakerClarify AmazonSageMakerGroundTruth AmazonBedrockGuardrails AsCloudTrail AWsTrustedAdvisor


**正确答案 / Answer: ``**

Apply human feedback across the ML lifecycle to improve the accuracy and relevancy of models. -> Amazon SageMaker Ground Truth Implement safeguards that align with responsible Al policies. -> Amazon Bedrock Guardrails Detect potential bias during data preparation and model training. -> Amazon SageMaker Clarify Amazon SageMaker Ground Truth is used for human-in-the-loop data labeling and model improvement. Amazon Bedrock Guardrails are designed to enforce responsible Al safeguards. Amazon SageMaker Clarify detects and helps mitigate bias during data preparation and model training.

在整个机器学习生命周期中应用人工反馈，以提高模型的准确性和相关性。->亚马逊SageMakerGroundTruth 落实与负责任的人工智能政策相一致的保障措施。->AmazonBedrock安全护栏在数据准备和模型训练期间检测潜在 偏差。>Amazon SageMaker清晰化 亚马逊SageMakerGroundTruth用于人机协作的数据标注和模型改进。 亚马逊Bedrock守护栏旨在实施负责任的人工智能保障措施。 亚马逊SageMakerClarify可在数据准备和模型训练期间检测并帮助减轻偏差。

---

## Question 258  `#258`

**EN** An Al practitioner who has minimal ML knowledge wants to predict employee attrition without writing code. Which Amazon SageMaker feature meets this requirement?

**中** 一-位对机器学习知之甚少的人工智能从业者想要预测员工流失情况，但又不想编写代码。 哪个AmazonSageMaker功能满足此要求?

- **A.** SageMaker Canvas
  - SageMakerCanvas(亚马逊SageMaker Canvas)
- **B.** SageMaker Clarify
  - SageMaker Clarify
- **C.** SageMaker Model Monitor
  - SageMaker模型监控器
- **D.** SageMaker Data Wrangler
  - SageMaker数据抓取器

**正确答案 / Answer: `A`**

SageMaker Canvas provides a no-code visual interface that allows users with minimal ML knowledge to build, train, and deploy models for predictions, such as employee attrition, without writing any code.

SageMakerCanvas提供了一个无需代码的可视化界面，让具备极少机器学习知识的用户能够构建、训练 和部署用于预测（例如员工流失）的模型、而无需编写任何代码。

---

## Question 259  `#259`

**EN** A company is using Al to improve its services. The company needs to ensure that the Al system is fair and explainable. The company wants to require training for members of the Al system development team. Which training will meet these requirements?

**中** 一家公司正在利用人工智能来改进其服务。该公司需要确保人工智能系统公平且具有可解释性。该公司希望 对人工智能系统并发团队的成员进行培训。 哪种培训能满足这些要求？

- **A.** Training on advanced coding skills
  - 高级编程技能培训
- **B.** Training on data privacy and encryption protocols
  - 数据隐私和加密协议方面的培训
- **C.** Training on bias awareness and responsible Al
  - 关于偏见意识和负责任的人工智能的培训
- **D.** Training on advanced ML algorithms
  - 高级机器学习算法培训

**正确答案 / Answer: `C`**

Training on bias awareness and responsible Al equips the development team with the knowledge and practices necessary to ensure that Al systems are fair, unbiased, and explainable, which aligns with the company's requirements.

关于偏见意识和负责任的人工智能的培训使开发团队掌握了必要的知识和实践，以确保人工智能系统公 平、无偏见且可解释，这符合公司的要求。

---

## Question 260  `#260`

**EN** A company has an ML model. The company wants to know how the model makes predictions. Which term refers to understanding model predictions?

**中** 一家公司拥有一个机器学习模型。该公司想知道该模型是如何进行预测的。 哪个术语指的是理解模型预测？

- **A.** Model interpretability
  - 模型可解释性
- **B.** Model training
  - 模型训练
- **C.** Model interoperability
  - 模型互操作性
- **D.** Model performance
  - 模型性能

**正确答案 / Answer: `A`**

Model interpretability refers to understanding how a model makes its predictions, providing insights into the reasoning behind the model's outputs.

模型可解释性指的是理解模型如何做出预测，为模型输出背后的推理提供见解。

---

## Question 261  `#261`

**EN** A company wants to identify groups for its customers based on the customers' demographics and buying patterns. Which algorithm should the company use to meet this requirement?

**中** 一家公司希望根据客户的个人特征和购买模式来确定客户群体。 公司应该使用哪种算法来满足这一要求？

- **A.** K-nearest neighbors (k-NN)
  - K近邻 (K-NN)
- **B.** K-means
  - K均值算法
- **C.** Decision tree
  - 决策树
- **D.** Support vector machine
  - 支持向量机

**正确答案 / Answer: `B`**

K-means is a clustering algorithm commonly used to identify and group customers based on shared characteristics such as demographics and buying patterns, making it suitable for customer segmentation tasks.

K均值算法是一种常用的聚类算法，常用于根据诸如人口统计信息和购买模式等共同特征来识别和分组 客户，因此适用于客户细分任务。

---

## Question 262  `#262`

**EN** A company is working on a large language model (LLM) and noticed that the LLM's outputs are not as diverse as expected. Which parameter should the company adjust?

**中** 一家公司正在研发一款大型语言模型（LLM），并注意到该模型的输出结果不如预期那样多样化。 公司应该调整哪个参数？

- **A.** Temperature
  - 温度
- **B.** Batch size
  - 批量大小
- **C.** Learning rate
  - 学习率
- **D.** Optimizer type
  - 优化器类型

**正确答案 / Answer: `A`**

The “temperature" parameter controls the randomness and diversity of outputs generated by a large language model. Increasing the temperature produces more diverse and creative responses, while lowering it makes the outputs more focused and deterministic.

“温度”参数控制着大型语言模型生成输出结果的随机性和多样性。提高温度会生成更多样化和更 具创意的回复，而降低温度则会使输出结果更集中、更确定。

---

## Question 263  `#263`

**EN** A company is using an Amazon Nova Canvas model to generate images. The model generates images successfully. The company needs to prevent the model from including specific items in the generated images. Which solution will meet this requirement?

**中** 一家公司正在使用亚马逊NovaCanvas模型生成图像。该模型成功生成了图像。 该公司需要防止模型在生成的图像中包含特定物品。 哪种解决方案能满足这一要求？

- **A.** Use a higher temperature value.
  - 使用更高的温度值。
- **B.** Use a more detailed prompt.
  - 使用更详细的提示。
- **C.** Use a negative prompt.
  - 使用否定提示。
- **D.** Use another foundation model (FM).
  - 使用另一个基础模型（FM）。

**正确答案 / Answer: `C`**

A negative prompt is used to specify items or characteristics that you want the image generation model to avoid including in the output, ensuring that specific items are excluded from generated images.

负面提示用于指定您希望图像生成模型在输出中避免包含的项目或特征，确保特定项目不会出现在生成 的图像中。据范工国主以压的量定已的

---

## Question 264  `#264`

**EN** HOTSPOT A company uses ML techniques to build applications. Select the correct ML technique from the following list for each task. Select each ML technique one time. Hot Area: Analyzeatextguestiontodetermine if theanswer is correct.Select. Analyzeatextquestiontodetenmnetheanswersconect.Select.. Binaryclassification Multiolececlocoificotion Multiclassclassification Regression Regression Analyzeecologicalfactorstodeterminethenumberselect.. AfnanyzeecoiogicatactorstodeteminethehumberPelect ofspeciesinacertainarea.Binaryclassification Multiolececlecnificntion Multiclassclassification Regression Regression Analyzecarattributestodeterminethecarmodelselect Analyzecar attnbutes to detemine thecarmodel.Select... Binaryclassification Multiolececlecnificntin Multiclassclassification Regression Regression

**中** 热点 一家公司运用机器学习技术来开发应用程序。 从以下列表中为每个任务选择正确的机器学习技术。每个机器学习技术只能选择一次。 热点区域： Analyze a text question to determine if the answer is correct.Select... Binary classification Multiclassclassification Regression Analyze ecological factors to determine the numberSelect... ofspeciesina certainarea.Binaryclassification Multiclass classification aoaoo Regression Analyze car attributes to determine the car model.Select... yo Binaryclassification Multiclassclassification [Regression


**正确答案 / Answer: ``**

Analyze a text question to determine if the answer is correct -> Binary classification Analyze ecological factors to determine the number of species in a certain area -> Regression Analyze car attributes to determine the car model -> Multiclass classification Determining if an answer is correct is a yes/no (binary) decision. Predicting the number of species (a numeric value) is a regression task. Identifying a car model from attributes involves choosing from multiple possible classes, which is multiclass classification.

分析一个文本问题以确定答案是否正确->二分类分析生态因素以确定某一地区物种的数量-> 回归 分析汽车属性以确定汽车型号->多类别分类 判断一个答案是否正确是一个是/否（二元）的决定。 预测物种的数量（一个数值）是一项回归任务。 从汽车属性来识别汽车型号涉及从多个可能的类别中进行选择，这属于多类别分类。

---

## Question 265  `#265`

**EN** A company wants to label training datasets by using human feedback to fine-tune a foundation model (FM). The company does not want to develop labeling applications or manage a labeling workforce. Which AWS service or feature meets these requirements?

**中** 一家公司希望利用人工反馈来微调基础模型（FM），从而对训练数据集进行标注，但该公司不想开发 标注应角程序或管理标注人赏团队。国主《》，人的以积的的， 哪个AWS服务或功能符合这些要求？

- **A.** Amazon SageMaker Data Wrangler
  - 亚马逊SageMaker数据转换器
- **B.** Amazon SageMaker Ground Truth Plus
  - 亚马逊 SageMaker Ground Truth Plus
- **C.** Amazon Transcribe
  - 亚马逊转录服务
- **D.** Amazon Macie
  - 亚马逊Macie

**正确答案 / Answer: `B`**

Amazon SageMaker Ground Truth Plus provides managed data labeling services, allowing you to label datasets using human feedback without developing labeling applications or managing a labeling workforce.

亚马逊SageMakerGround TruthPlus提供托管的数据标注服务，让您能够利用人工反馈标注数据集，而 无需开发标注应用程序或管理标注人员团队。

---

## Question 266  `#266`

**EN** An online media streaming company wants to give its customers the ability to perform natural language- based image search and filtering. The company needs a vector database that can help with similarity searches and nearest neighbor queries. Which AWS service meets these requirements?

**中** 一家在线媒体流媒体公司希望为其客户提供基于自然语言的图像搜索和筛选功能。该公司需要一个向量 数据库来帮助进行相似性搜索和最近邻查询。 哪种AWS服务能满足这些要求？

- **A.** Amazon Comprehend
  - 亚马逊comprehend 服务
- **B.** Amazon Personalize
  - 亚马逊个性化服务
- **C.** Amazon Polly
  - 亚马逊波利（Amazon Polly)
- **D.** Amazon OpenSearch Service
  - 亚马逊OpenSearch服务

**正确答案 / Answer: `D`**

Amazon OpenSearch Service supports vector search capabilities, allowing you to perform similarity searches and nearest neighbor queries - key requirements for natural language-based image search and filtering.

亚马逊OpenSearch服务支持向量搜索功能，使您能够执行相似性搜索和最近邻查询一一这是基于自然语言 的图像搜索和筛选的关键要求。

---

## Question 267  `#267`

**EN** HOTSPOT A company is building an Al solution by using Amazon SageMaker Al. The company wants to use SageMakerAl features tofacilitateapplication development. Select the correct SageMaker Al feature from the following list for each use case. Select each feature one time. Hot Area: Determinethemostsuitablemodelto useforabusinesscaseSelect Detemme themostsuitablemoderto useforabusiness case.Select.. Clarify ay DataWrangler ModelCards ModelCards Prenare datathrougha lowcode ornocode interfaceSelect Preparedatathroughalow-codeorno-codeintertace.Select..: Clarify DataWrangler ModelCards ModelCards Identifybiases orimbalancesinthedataSelect Identiryblasesorimbalancesintnedata.Select..: Clarify ay DataWrangler ModelCards Model Cards

**中** 热点 一家公司正在利用亚马逊的SageMakerAI构建人工智能解决方案。该公司希望借助SageMakerAI 的功能来促进应用程序的开发。 从以下列表中为每个用例选择正确的 SageMaker AI功能。每个功能只能选择一次。 热点区域： Determine the most suitable model to use for a business case.Select... Clarify Data Wrangler Model Cards Prepare data through a low-code or no-code interface.Select... clarify Data Wrangler a Model Cards Identify biases or imbalances in the data.Select... clarify Data Wrangler Model Cards


**正确答案 / Answer: ``**

Determine the most suitable model to use for a business case -> Model Cards Prepare data through a low-code or no-code interface -> Data Wrangler Identify biases or imbalances in the data -> Clarify Model Cards help summarize and communicate model characteristics for selection. Data Wrangler provides a no-code/low-code interface for data preparation. Clarify is used to detect bias and imbalances in datasets and models.

确定业务案例中适用的最恰当模型->模型卡片通过低代码或无代码界面准备 数据->数据整理器查明数据中的偏差或不平衡->明确说明 模型卡片有助于总结和传达模型的特征，以便进行选择。 数据整理工具提供了一个无需代码或只需少量代码的数据准备界面。 “Clarify”用于检测数据集和模型中的偏见和不平衡。

---

## Question 268  `#268`

**EN** A company is building a generative Al tool. The company will use internal documents to customize a foundation model (FM). Which approach will meet this requirement?

**中** 一家公司正在开发--款生成式人工智能工具。该公司将利用内部文件来定制基础模型（FM）。 哪种方法能满足这一要求？

- **A.** Classification
  - 分类
- **B.** Continued pre-training
  - 持续预训练
- **C.** Distillation
  - 蒸馏
- **D.** Regression
  - 回归分析

**正确答案 / Answer: `B`**

Continued pre-training involves further training a foundation model (FM) on internal documents, allowing the model to better understand and generate content specific to the company's context and requirements. This approach customizes the FM using the company's own data.

持续的预训练是指在内部文档上进一步训练基础模型（FM），使该模型能够更好地理解和生成符合公司特 定背景和需求的内容。这种方法利用公司的自有数据对基础模型进行定制。

---

## Question 269  `#269`

**EN** A company is monitoring a predictive model by using Amazon SageMaker Model Monitor. The company notices data drift beyond a defined threshold. The company wants to mitigate a potentially adverse impact on the predictive model. Which solution will meet these requirements?

**中** 一家公司正在使用亚马逊SageMaker模型监控器来监控一个预测模型。该公司注意到数据漂移已超出设定 的阈值。该公司希望减轻对预测模型可能产生的不利影响。 哪种解决方案能满足这些要求？

- **A.** Restart the SageMaker Al endpoint.
  - 重启SageMakerAI端点。
- **B.** Adjust the monitoring sensitivity.
  - 调整监测灵敏度。
- **C.** Re-train the model with fresh data.
  - 使用新数据重新训练模型。
- **D.** Set up experiments tracking.
  - 建立实验跟踪机制。

**正确答案 / Answer: `C`**

When Amazon SageMaker Model Monitor detects data drift beyond a defined threshold, it indicates that the current data differs from what the model was trained on. Retraining the model with recent data ensures it adapts to new patterns and maintains predictive accuracy.

当亚马逊SageMaker模型监控器检测到数据漂移超出定义的阈值时，这表明当前数据与模型训练时的数据有 所不同。使用最新数据重新训练模型可确保其适应新模式并保持预测准确性。

---

## Question 270  `#270`

**EN** A financial company uses a generative Al model to assign credit limits to new customers. The company wants to make the decision-making process of the model more transparent to its customers. Which solution meets these requirements?

**中** 一家金融公司使用生成式人工智能模型为新客户分配信用额度。该公司希望让其客户更清楚地了解该模 型的决策过程。 哪种解决方案能满足这些要求？

- **A.** Use a rule-based system instead of an ML model.
  - 使用基于规则的系统，而非机器学习模型。
- **B.** Apply explainable Al techniques to show customers which factors influenced the model's decision.
  - 应用可解释的人工智能技术，向客户展示哪些因素影响了模型的决策。
- **C.** Develop an interactive Ul for customers and provide clear technical explanations about the system.
  - 为客户开发一个交互式用户界面，并提供关于系统的清晰技术说明。
- **D.** Increase the accuracy of the model to reduce the need for transparency.
  - 提高模型的准确性以降低对透明度的需求。

**正确答案 / Answer: `B`**

Explainable Al techniques provide transparency by identifying and displaying the specific factors that influenced the generative Al model's credit limit decisions, making the decision-making process understandable to customers.

可解释的人工智能技术通过识别并展示影响生成式人工智能模型信用额度决策的具体因素，为客户提 供透明的决策过程，使客户能够理解这一过程。

---

## Question 271  `#271`

**EN** A company deployed a model to production. After 4 months, the model inference quality degraded. The company wants to receive a notification if the model inference quality degrades. The company also wants to ensure that the problem does not happen again. Which solution will meet these requirements?

**中** 一家公司将其模型部署到生产环境中。四个月后，模型的推理质量下降了。该公司希望在模型推理质量下 降时收到通知，并且希望确保此类问题不再发生。 哪种解决方案能满足这些要求？

- **A.** Retrain the model. Monitor model drift by using Amazon SageMaker Clarify.
  - 重新训练模型。使用Amazon SageMakerClarify监控模型漂移。
- **B.** Retrain the model. Monitor model drift by using Amazon SageMaker Model Monitor.
  - 重新训练模型。使用AmazonSageMaker模型监控器监控模型漂移。
- **C.** Build a new model. Monitor model drift by using Amazon SageMaker Feature Store.
  - 构建新模型。使用Amazon SageMaker特征存储监控模型漂移。
- **D.** Build a new model. Monitor model drift by using Amazon SageMaker JumpStart.
  - 构建新模型。使用AmazonSageMakerJumpStart监控模型漂移。

**正确答案 / Answer: `B`**

Amazon SageMaker Model Monitor enables continuous monitoring of model inference quality and detects data/model drift in production. Setting up notifications ensures the company is alerted if quality degrades again, allowing timely intervention and retraining as needed.

亚马逊SageMaker模型监控功能能够持续监控模型推理质量，并检测生产环境中的数据/模型漂移。设置通 知可确保公司在质量再次下降时收到警报，从而能够及时进行干预和重新训练。

---

## Question 272  `#272`

**EN** Which option is an example of unsupervised learning?

**中** 以下哪个选项是无监督学习的例子？

- **A.** A model that groups customers based on their purchase history
  - 一种根据客户购买历史对其进行分组的模型
- **B.** A model that classifies images as dogs or cats
  - 一种将图像分类为狗或猫的模型
- **C.** A model that predicts a house's price based on various features
  - 一种基于多种特征来预测房屋价格的模型
- **D.** A model that learns to play chess by using trial and error
  - 一种通过反复试验来学习下棋的模型

**正确答案 / Answer: `A`**

Grouping customers based on purchase history is an example of unsupervised learning, where the model discovers patterns or clusters in the data without using labeled outputs.

根据购买历史对客户进行分组是无监督学习的一个例子，在这种学习方式中，模型在没有使用有标签输出 的情况下发现数据中的模式或聚类。口，国。

---

## Question 273  `#273`

**EN** A company is evaluating several large language models (LLMs) for a text summarization task. The company needs to select a metric to evaluate the quality of the summaries that the LLMs generate. Which metric will meet this requirement?

**中** 一家公司正在评估几款大型语言模型（LLM）用于文本摘要任务。该公司需要选择一个指标来评估 这些语言模型生成的摘要的质量。 哪个指标能满足这一要求？

- **A.** Recall
  - 召回
- **B.** Area under the ROC curve (AUC)
  - 受试者工作特征曲线下的面积（AUC)
- **C.** Recall-Oriented Understudy for Gisting Evaluation (ROUGE)
  - 基于召回率的摘要评估工具(ROUGE)
- **D.** Mean squared error (MSE)
  - 均方误差(MSE)

**正确答案 / Answer: `C`**

The ROUGE metric is widely used to evaluate the quality of summaries generated by language models, as it measures the overlap between the generated summary and reference summaries in terms of recall, precision, and F1-score for n-grams and sequences.

ROUGE指标被广泛用于评估语言模型生成的摘要质量，因为它从召回率、准确率和FI值的角度衡量生成 摘要与参考摘要在n元语法和序列方面的重叠程度。

---

## Question 274  `#274`

**EN** A research group wants to test different generative Al models to create research papers. The research group has defined a prompt and needs a method to assess the models' output. The research group wants to use a team of scientists to perform the output assessments. Which solution will meet these requirements?

**中** 一个研究小组想要测试不同的生成式人工智能模型来创作研究论文。该研究小组已经定义了一个提示语， 并需要一种芳法莱评估这些模型的输出结果。该研究小组希望大已金大， 使用一组科学家来进行产出评估。 哪种解决方案能满足这些要求？

- **A.** Use automatic evaluation on Amazon Personalize.
  - 在AmazonPersonalize上使用自动评估。
- **B.** Use content moderation on Amazon Rekognition.
  - 在亚马逊Rekognition上使用内容审核功能。
- **C.** Use model evaluation on Amazon Bedrock.
  - 在亚马逊Bedrock上使用模型评估。
- **D.** Use sentiment analysis on Amazon Comprehend.
  - 在 Amazon Comprehend 中使用情感分析。

**正确答案 / Answer: `C`**

Amazon Bedrock provides model evaluation capabilities, allowing a team of scientists to manually assess and compare the outputs of different generative Al models based on defined prompts and criteria. This meets the requirement for human-in-the-loop model output evaluation.

亚马逊Bedrock提供了模型评估功能，使一组科学家能够根据定义的提示和标准手动评估和比较不同生 成式人工智能模型的输出结果。这满足了人工参与模型输出评估的需求。

---

## Question 275  `#275`

**EN** HOTSPOT An ecommerce company is developing a generative Al solution to create personalized product recommendations for its application users. The company wants to track how effectively the Al solution increases product sales and user engagement in the application. Select the correct business metric from the following list for each business goal. Each business metric should be selected one time. Hot Area: Measure how engaging the product recommendations are to usersSelect... Segug we pcaceoooonaaeeae aeoAverage order vale lAov Averageordervalue(AOV)1 Click-through rate (CTR) Retention rate Determine the effect of the Al solution on the total value of user purchasesSelect... DetemeuieChcctortneArsoraton ontnetotarvaidcoraserparcnascAverageordervalue(Aov Averageordervalue(AOV) [Click-through rate (CTR) Retention rate Assess the Al solution's ability to encourage users to return to the platform select... ytoonoaragoaoototoanoopiaoAverageordervalue(Aov Averageordervalue（AOV) Click-through rate (CTR) Retention rate

**中** 热点 一家电子商务公司正在开发一种生成式人工智能解决方案，为应用程序用户生成个性化的产品推荐。 该公司希望追踪该人工智能解决方案在提高产品销售和用户在应用程序中的参与度方面的效果。 从以下列表中为每个业务目标选择正确的业务指标。每个业务指标只能选择一次。 热点区域： Measure how engaging the product recommendations are to usersSelec... Average ordervalue (AOV) Click-throughrate(CTR) Retention rate Determine the effect of the Al solution on the total value of user purchasesSelec.. Average order value (AOV) Click-through rate(CTR) Retention rate Assess theAl solution's ability to encourage users to return to the platformSelect... [Averageordervalue(AOV) Click-through rate (CTR) Retention rate


**正确答案 / Answer: ``**

Measure how engaging the product recommendations are to users -> Click-through rate (CTR) Determine the effect of the Al solution on the total value of user purchases -> Average order value (AOV) Assess the Al solution's ability to encourage users to return to the platform -> Retention rate CTR reflects engagement with recommendations. AOV measures the impact on purchase value. Retention rate evaluates if users are returning due to the Al solution.

衡量产品推荐对用户的吸引力->点击率（CTR）确定人工智能解决方案对用户总购买价值的影响->平均 订单价值（AOV）评估人工智能解决方案鼓励用户回访平台的能力->用户留存率 点击率反映了用户对推荐内容的参与度。 AOV衡量的是对购买价值的影响。 留存率评估用户是否因人工智能解决方案而再次访问。

---

## Question 276  `#276`

**EN** An Al practitioner wants to evaluate ML models. The Al practitioner wants to provide explanations of model predictions to customers and stakeholders. Which AWS service or feature will meet these requirements?

**中** 一位人工智能从业者想要评估机器学习模型。该从业者希望向客户和利益相关者提供模型预测的解释。 哪种AWS服务或功能能满足这些要求？

- **A.** Amazon QuickSight
  - 亚马逊QuickSight
- **B.** Amazon Comprehend
  - 亚马逊comprehend
- **C.** AWS Trusted Advisor
  - AWS可信顾问
- **D.** Amazon SageMaker Clarify
  - 亚马逊 SageMaker Clarify

**正确答案 / Answer: `D`**

Amazon SageMaker Clarify provides tools to explain model predictions, allowing practitioners to generate and share interpretability reports with customers and stakeholders, improving transparency and trust in ML models.

亚马逊SageMakerClarify提供了用于解释模型预测的工具，使从业者能够生成并分享可解释性报告给客户 和利益相关者，从而提高机器学习模型的透明度和可信度。

---

## Question 277  `#277`

**EN** Sentiment analysis is a subset of which broader field of Al?

**中** 情感分析属于人工智能中哪个更广泛的领域？

- **A.** Computer vision
  - 计算机视觉
- **B.** Robotics
  - 机器人技术
- **C.** Natural language processing (NLP)
  - 自然语言处理(NLP)
- **D.** Time series forecasting
  - 时间序列预测

**正确答案 / Answer: `C`**

Sentiment analysis is a subset of natural language processing (NLP), which focuses on analyzing and interpreting human language, including the detection of sentiment within text.

情感分析是自然语言处理（NLP）的一个分支，专注于分析和解读人类语言，包括检测文本中的 情感。，

---

## Question 278  `#278`

**EN** A company wants to set up private access to Amazon Bedrock APls from the company's AWS account. The company also wants to protect its data from internet exposure. Which solution meets these requirements?

**中** 一家公司希望从其AWS账户设置对亚马逊BedrockAPI的私有访问。该公司还希望保护其数据不被 互联网曝光。哪种解决方案能满足这些要求？

- **A.** Use Amazon CloudFront to restrict access to the company's private content.
  - 使用亚马逊CloudFront来限制对公司私有内容的访问。
- **B.** Use AWS Glue to set up data encryption across the company's data catalog.
  - 使用AWSGlue在公司的数据目录中设置数据加密。
- **C.** Use AWS Lake Formation to manage centralized data governance and cross-account data sharing.
  - 使用AWSLakeFormation来管理集中式数据治理和跨账户数据共享。
- **D.** Use AWS PrivateLink to configure a private connection between the company's VPC and Amazon Bedrock.
  - 使用AWSPrivateLink在公司的虚拟私有云（VPC）与AmazonBedrock之间配置私有连接。

**正确答案 / Answer: `D`**

AWS PrivateLink enables private connectivity between your VPC and Amazon Bedrock APls without exposing data to the public internet, ensuring that all APl calls and data transfers remain secure and private within your AWS account.

AWSPrivateLink可在您的虚拟私有云（VPC）与AmazonBedrockAPI之间建立私有连接，无需 将数据暴露到公共互联网，从而确保所有API调用和数据传输都在您的AWS账户内保持安全和 私密。

---

## Question 279  `#279`

**EN** A company receives a large amount of unstructured user feedback in text format. The company wants to analyze the sentiment of the user feedback. Which solution will meet these requirements?

**中** 一家公司收到了大量以文本形式星现的非结构化用户反馈。该公司希望对这些用户反馈的情感倾向 进行分析。哪种解决方案能满足这些要求？

- **A.** Use a large language model (LLM) to perform natural language processing (NLP) for sentiment analysis.
  - 使用大型语言模型（LLM）执行自然语言处理（NLP）以进行情感分析。
- **B.** Use a regression algorithm to classify the feedback based on predefined categories. Then, analyze user sentiment.
  - 使用回归算法根据预定义的类别对反馈进行分类。然后，分析用户情绪。
- **C.** Use a recommendation engine algorithm to detect user sentiment.
  - 使用推荐引擎算法来检测用户情绪。
- **D.** Use a time series algorithm to predict user sentiment based on past feedback.
  - 使用时间序列算法根据过往反馈预测用户情绪。

**正确答案 / Answer: `A`**

A large language model (LLM) can analyze unstructured text using NLP techniques to accurately determine the sentiment (positive, negative, or neutral) of user feedback. This approach is well-suited for handling large volumes of text data.

大型语言模型（LLM）能够运用自然语言处理技术分析非结构化文本，从而准确判断用户反馈的情 感（积极、消极或中立）。这种方法非常适合处理大量文本数据。

---

## Question 280  `#280`

**EN** HOTSPOT A company wants to improve multiple ML models. Select the correct technique from the following list of use cases. Each technique should be selected one time or not at all. Hot Area: Enhancing thecapabilities ofa large languagemodel (LLM) by using external sourcesSelect.. gEewshotlearning Few-shotlearning Rinte-tuninguamentedGeneration(RAG) RetnevalAugmentedGeneration (RAG) [Zero-shot learning Querying amodel to generalizeandmake predictions on unseen tasksSelect... sacryhngaodcrtogcncraizcaaancpicarctonoocnctaoowshotlearning Few-shotlearning Fine-tuninguamentedGeneration(RAG) Retrieval Augmented Generation (RAG) [Zero-shot learning Querying amodel withalimited amountofdata fornewtasksSelect... Eew.shot learning Few-shotlearning Finte-tuninguamentedGeneration(BAG) RetnievalAugmentedGeneration (RAG) [Zero-shot learning

**中** 热点 一家公司想要改进多个机器学习模型。 从以下用例列表中选择正确的技术。每个技术应选择一次或根本不选。 热点区域： Enhancing the capabilties of a large languagemodel (LLM)by using extermal sourcesSelect... Few-shot learning Fine-tuning Retrieval Augmented Generation (RAG) Zero-shot learning Querying a model o generalize and make predictions on unseen tasksSelect.. Few-shot learning Fine-tuning Retrieval Augmented Generation (RAG) Zero-shot learning Queryingamodel witha limitedamount ofdata fornew tasksSelect.. Few-shot learning Fine-tuning Retrieval AugmentedGeneration (RAG) Zero-shot learning


**正确答案 / Answer: ``**

Enhancing the capabilities of a large language model (LLM) by using external sources -> Retrieval Augmented Generation (RAG) Querying a model to generalize and make predictions on unseen tasks -> Zero-shot learning Querying a model with a limited amount of data for new tasks -> Few-shot learning RAG improves LLMs by incorporating information from external data sources at query time. Zero-shot learning allows a model to perform tasks it wasn't explicitly trained on, using generalization. Few-shot learning enables a model to handle new tasks with only a small number of examples.

通过使用外部来源增强大型语言模型（LLM）的能力->检索增强生成（RAG) 对模型进行查询以使其泛化并对未见过的任务进行预测->零样本学习用少量数据对模型进行 查询以完成新任务>少样本学习 RAG通过在查询时整合来自外部数据源的信息来改进大型语言模型。 零样本学习使模型能够利用泛化能力执行其未经过明确训练的任务。 少样本学习使模型仅通过少量示例就能处理新任务。

---

## Question 281  `#281`

**EN** A company wants to create an Al solution to generate images and descriptions for a product catalog. The company needs to select a foundation model (FM) for this solution. The company must consider the output types of each FM. Which FM characteristic is the company evaluating?

**中** 一家公司想要开发一种人工智能解决方案，用于生成产品目录的图像和描述。该公司需要为该解决方案选 择一个基础模型（FM）。一 公司必须考虑每个设施管理（FM）的产出类型。 该公司正在评估的是哪个财务管理系统的特点？

- **A.** Latency
  - 延迟
- **B.** Model size
  - 模型尺寸
- **C.** Model customization
  - 模型定制
- **D.** Modality
  - 情态 ：太

**正确答案 / Answer: `D`**

Modality refers to the types of input and output data a foundation model can handle, such as text, images, or both. Evaluating modality ensures the selected FM can generate both images and text descriptions for the product catalog.

模态指的是基础模型能够处理的输入和输出数据类型，例如文本、图像或两者兼有。评估模态可确保所选 的基础模型能够为产品目录生成图像和文字描述。

---

## Question 282  `#282`

**EN** A company wants to use an ML model to analyze customer reviews on social media. The model must determine if each review has a neutral, positive, or negative sentiment. Which model evaluation strategy will meet these requirements?

**中** 一家公司希望使用机器学习模型来分析社交媒体上的客户评论。该模型必须判断每条评论是中性、积 极还是消极的。 哪种模型评估策略能满足这些要求？

- **A.** Open-ended generation
  - 开放式生成
- **B.** Text summarization
  - 文本摘要
- **C.** Machine translation
  - 机器翻译
- **D.** Classification
  - 分类

**正确答案 / Answer: `D`**

Classification is the evaluation strategy that assigns input data (such as customer reviews) to predefined categories - in this case, neutral, positive, or negative sentiment. This approach is standard for sentiment analysis tasks.

分类是一种评估策略，它将输入数据（例如客户评论）分配到预定义的类别中一一在这种情况下，为中性、 积极或消极情绪。这种方法是情感分析任务的标准做法。

---

## Question 283  `#283`

**EN** HOTSPOT Select the correct Al term from the following list for each statement. Each Al term should be selected one time. Hot Area: Simulateshuman problem-solvingcapabititiesSelect Simalatesunanprobiem-soivingcapabhtesSelect..y AL Deeplearning M M Appliesdata-drivenlearningtechniguestomakepredictionsSelect Appllesdata-dnvenleamingtechniquestoinakepredictonsSelect..:y A Deeplearning M M FocusesonprocessingdatathroughintricateneuralnetworksSelect PocusesonprocessingdatathrougthncateheurarhetworksSelect: A Deeplearning M M

**中** 热点 从以下列表中为每个陈述选择正确的AI术语。每个AI术语只能选择一次。 热点区域： Simulates human problem-solving capabilitiesSelect... [Al Deep learning ML Applies data-driven learning techniques to make predictionsSelect... PpSP A Deep learning ML Focusesonprocessingdata throughintricateneuralnetworksSelect... A Deep learning ML


**正确答案 / Answer: ``**

Simulates human problem-solving capabilities -> Al Applies data-driven learning techniques to make predictions -> ML Focuses on processing data through intricate neural networks -> Deep learning Al (Artificial Intelligence) is the broadest concept and includes simulating human-like reasoning and problem-solving. ML (Machine Learning) is a subset of Al focused on learning from data to make predictions or decisions. Deep learning is a subset of ML that uses neural networks with many layers to process complex data.

模拟人类解决问题的能力>人工智能 应用数据驱动的学习技术进行预测->机器学习侧重于通过复杂的神经网络处理数据>深度学习 人工智能（Artificial Intelligence，简称An）是最宽泛的概念，涵盖了模拟人类般的推理和解决问题的能力。 机器学习（ML）是人工智能的一个分支，专注于从数据中学习以进行预测或决策。 深度学习是机器学习的一个分支，它使用具有多层结构的神经网络来处理复杂的数据。

---

## Question 284  `#284`

**EN** Which option is an example of unsupervised learning?

**中** 以下哪个选项是无监督学习的例子？

- **A.** Clustering data points into groups based on their similarity
  - 根据数据点的相似性将其聚类分组
- **B.** Training a model to recognize images of animals
  - 训练一个模型来识别动物图像
- **C.** Predicting the price of a house based on the house's features
  - 根据房屋的特征预测房屋的价格
- **D.** Generating human-like text based on a given prompt
  - 根据给定提示生成类似人类的文本

**正确答案 / Answer: `A`**

Clustering data points based on similarity is an example of unsupervised learning, where the algorithm groups data without using labeled examples.

基于相似性对数据点进行聚类是无监督学习的一个例子，在这种学习方式中，算法在没有使用带标签示 例的情况下对数据进行分组。

---

## Question 285  `#285`

**EN** An online learning company with large volumes of education materials wants to use enterprise search. Which AWS service meets these requirements?

**中** 一家拥有大量教育资料的在线学习公司想要使用企业搜索服务。 哪种AWS服务能满足这些要求？

- **A.** Amazon Comprehend
  - 亚马逊comprehend服务
- **B.** Amazon Textract
  - 亚马逊Textract
- **C.** Amazon Kendra
  - 亚马逊Kendra
- **D.** Amazon Personalize
  - 亚马逊个性化服务

**正确答案 / Answer: `C`**

Amazon Kendra is an intelligent enterprise search service that enables organizations to search large volumes of unstructured data, such as educational materials, making it ideal for enterprise search needs.

亚马逊Kendra是一项智能企业搜索服务，能够帮助组织搜索大量非结构化数据，例如教育资料，非常适 合企业搜索需求。，

---

## Question 286  `#286`

**EN** A company creates video content. The company wants to use generative Al to generate new creative content and to reduce video creation time. Which solution will meet these requirements in the MOsT operationally efficient way?

**中** 一家公司制作视频内容。该公司希望利用生成式人工智能来生成新的创意内容，并缩短视频制作时间。 哪种解决方案能以最高效的操作方式满足这些要求？

- **A.** Use the Amazon Titan Image Generator model on Amazon Bedrock to generate intermediate images. Use video editing software to create videos.
  - 在亚马逊Bedrock上使用亚马逊泰坦图像生成器模型生成中间图像。使用视频编辑软件制作视频。
- **B.** Use the Amazon Nova Canvas model on Amazon Bedrock to generate intermediate images. Use video editing software to create videos.
  - 在亚马逊Bedrock上使用亚马逊Nova画布模型生成中间图像。使用视频编辑软件制作视频。
- **C.** Use the Amazon Nova Reel model on Amazon Bedrock to generate videos.
  - 在亚马逊Bedrock上使用亚马逊Nova Reel模型生成视频。
- **D.** Use the Amazon Nova Pro model on Amazon Bedrock to generate videos.
  - 在亚马逊Bedrock上使用亚马逊Nova Pro模型生成视频。

**正确答案 / Answer: `C`**

The Amazon Nova Reel model on Amazon Bedrock is specifically designed for generative video creation, enabling the company to efficiently generate new creative content and significantly reduce video creation time in an operationally efficient manner.

亚马逊Bedrock上的亚马逊NovaReel模型专门用于生成视频创作，使该公司能够高效生成新的创意内容， 并以高效的操作方式大幅缩短视频创作时间。

---

## Question 287  `#287`

**EN** A company is training ML models on datasets. The datasets contain some classes that have more examples than other classes. The company wants to measure how well the model balances detecting and labeling the classes. Which metric should the company use?

**中** 一家公司正在使用数据集训练机器学习模型。这些数据集中某些类别的示例数量多于其他类别。该公司希 望衡量模型在检测和标注各类别方面的平衡程度。 公司应该采用哪个指标？

- **A.** Accuracy
  - 准确性
- **B.** Recall
  - 召回
- **C.** Precision
  - 精度
- **D.** F1 score
  - FI值

**正确答案 / Answer: `D`**

The F1 score is the harmonic mean of precision and recall, making it especially useful for evaluating model performance on datasets with class imbalance. It measures how well the model balances detecting (recall) and correctly labeling (precision)all classes.

F1分数是准确率和召回率的调和平均值，这使得它在评估类别不平衡数据集上的模型性能时特别有用。它 衡量模型在检测（召回率）和正确标注（准确率）所有类别方面的平衡程度。

---

## Question 288  `#288`

**EN** A company is analyzing financial transaction records. The company categorizes the records as either personal or business. The company inserts the categories into the transaction records. Which data preparation step does this describe?

**中** 一家公司正在分析财务交易记录。该公司将这些记录分为个人和商务两类，并将类别信息插入到交易 记录中。正的一 这描述的是哪个数据准备步骤？

- **A.** Data encoding
  - 数据编码
- **B.** Data labeling
  - 数据标注
- **C.** Data normalization
  - 数据规范化
- **D.** Data balancing
  - 数据平衡

**正确答案 / Answer: `B`**

Assigning categories such as "personal" or "business" to financial transaction records is an example of data labeling, where each data point is tagged with a specific label for use in machine learning or data analysis tasks.

将诸如“个人”或“商务”之类的类别分配给财务交易记录，这是数据标注的一个例子，在此过程中， 每个数据点都被贴上特定的标签，以使用于机器学习或数据分析任务。

---

## Question 289  `#289`

**EN** A company wants to extract key insights from large policy documents to increase employee efficiency. Which generative Al strategy meets this requirement?

**中** 一家公司希望从大量的政策文件中提取关键信息，以提高员工的工作效率。 哪种生成式人工智能策略能满足这一要求？

- **A.** Regression
  - 回归分析
- **B.** Clustering
  - 聚类
- **C.** Summarization
  - 摘要
- **D.** Classification
  - 分类

**正确答案 / Answer: `C`**

Summarization is a generative Al strategy that extracts and condenses the key insights from large documents, such as policy documents, making it easier for employees to quickly understand and act on essential information.

摘要生成是一种生成式人工智能策略，它能从诸如政策文件之类的大型文档中提取并浓缩关键要点，使 员工能够更轻松地快速理解并依据重要信息采取行动。

---

## Question 290  `#290`

**EN** A company is using Amazon SageMaker to deploy a model that identifies if social media posts contain certain topics. The company needs to show how different input features influence model behavior. Which SageMaker feature meets these requirements?

**中** 一家公司正在使用亚马逊SageMaker部署一个模型，用于识别社交媒体帖子中是否包含某些主题。该公 司需要展示不筒的输入特征茹何影响模型的行为。， 哪个SageMaker功能符合这些要求？

- **A.** SageMaker Canvas
  - SageMaker帆布
- **B.** SageMaker Clarify
  - SageMakerClarify（注：此名称为专有名词，通常不翻译）
- **C.** SageMakerFeature Store
  - SageMaker特征存储库
- **D.** SageMaker Ground Truth
  - SageMaker Ground Truth

**正确答案 / Answer: `B`**

SageMaker Clarify provides tools for model interpretability, allowing you to visualize and understand how different input features influence the behavior and predictions of your deployed model.

SageMaker Clarify提供了模型可解释性工具，让您能够可视化并理解不同输入特征如何影响已部署模型的 行为和预测结果。

---

## Question 291  `#291`

**EN** HOTSPOT An Al practitioner is determining the appropriate data type for various use cases. Select the correct data type from the following list for each use case. Select each data type one time. Hot Area: Build a sentiment analysis model for social media posts.Select... DanaasehcehcanarysisocrorsociarcaiapostPeiecedat Imagedata Tabulardata Textdata Timedaeries data [Time series data] Train a self-driving car to recognize traffic sians.Select. haasei-anvingcartofecoghizetraesighs.Peiectat, Imagedata Tabulardata Textdata Temedaeriesdata Time series data Optimizead campaigns hy using customerdemographicdata and purchasebistorySelect. Optimizeadcampaignsbyusingcustomerdemographicdataandpurchasehistory.Seieccdat Imagedata Tabulardata Textdata Temedaeriesdata [Time series data] Forecast stockpricesbyusinghistorical pricedata.Select. pcoyaogoncaprcocaaPeiecedate LImagedata Tabulardata Textdata Temedccciesdata [Time series data

**中** 热点 一位人工智能从业者正在确定各种用例的合适数据类型。 从以下列表中为每个用例选择正确的数据类型。每个数据类型只能选择一次。 热点区域： Build a sentiment analysis model for social media posts.Select.. Image data Tabular data Textdata Time series data Train a self-driving car to recognize traffic signs.Select... Image data Tabulardata [Textdata Time series data Optimize ad campaigns by using customer demographic data and purchase history.Select.. Imagedata Tabulardata Textdata Time series data Forecast stock prices by using historical price data.Select... [Image data Tabulardata Textdata Time series data


**正确答案 / Answer: ``**

Build a sentiment analysis model for social media posts -> Text data Train a self-driving car to recognize traffic signs -> Image data Optimize ad campaigns by using customer demographic data and purchase history -> Tabular data Forecast stock prices by using historical price data -> Time series data Sentiment analysis deals with text data from social media posts. Recognizing traffic signs requires processing image data. Optimizing ad campaigns uses structured (tabular) customer and purchase data. Stock price forecasting uses time series data, which captures trends over time.

为社交媒体帖子构建一个情感分析模型>文本数据 训练自动驾驶汽车识别交通标志->图像数据 利用客户人口统计数据和购买历史优化广告活动->表格数据利用历史价格数据预测股票价格>时 间序列数据 情感分析处理来自社交媒体帖子的文本数据。 识别交通标志需要处理图像数据。 优化广告活动会用到结构化（表格形式的）客户和购买数据。 股票价格预测使用时间序列数据，这种数据能够捕捉到随时间变化的趋势。

---

## Question 292  `#292`

**EN** A company wants to assess internet quality in remote areas of the world. The company needs to collect internet speed data and store the data in Amazon RDS. The company will analyze internet speed variation throughout each day. The company wants to create an Al model to predict potential internet disruptions. Which type of data should the company collect for this task?

**中** 一家公司想要评估世界偏远地区的互联网质量。该公司需要收集互联网速度数据，并将数据存储在亚马逊 RDS中。该公司将分析每关互联网速度的变花情况。该公司希望创建一个人工智能模型来预测潜在的互联 网中断情况。 公司应为这项任务收集哪种类型的数据？

- **A.** Tabular data
  - 表格数据
- **B.** Text data
  - 文本数据
- **C.** Time series data
  - 时间序列数据
- **D.** Audio data
  - 音频数据

**正确答案 / Answer: `C`**

Time series data consists of measurements (such as internet speed) collected over time, which is essential for analyzing variations throughout the day and for building predictive models of potential internet disruptions.

时间序列数据由随时间收集的测量值（例如网速）组成，这对于分析一天中的变化以及构建潜在互联网中断 的预测模型至关重要。

---

## Question 293  `#293`

**EN** A company wants to build an ML model to detect abnormal patterns in sensor data. The company does not have labeled data for training. Which ML method will meet these requirements?

**中** 一家公司想要构建一个机器学习模型来检测传感器数据中的异常模式。该公司没有可用于训练的带标签数据。 哪种机器学习方法能满足这些要求？

- **A.** Linear regression
  - 线性回归
- **B.** Classification
  - 分类
- **C.** Decision tree
  - 决策树
- **D.** Autoencoders
  - 自编码器

**正确答案 / Answer: `D`**

Autoencoders are a type of unsupervised learning method used to detect abnormal patterns (anomalies) in sensor data when labeled data is not available. They learn to reconstruct normal patterns, making deviations (anomalies) easily detectable.

自编码器是一种无监督学习方法，用于在没有标签数据的情况下检测传感器数据中的异常模式（异常值）。 它们学习重建正常模式，从而使偏差（异常值）易于检测。

---

## Question 294  `#294`

**EN** A company uses Amazon Bedrock to implement a generative Al assistant on a website. The Al assistant helps customers with product recommendations and purchasing decisions. The company wants to measure the direct impact of the Al assistant on sales performance. Which metric will meet these requirements?

**中** 一家公司利用亚马逊Bedrock在其网站上部署了一个生成式人工智能助手。该人工智能助手帮助客户进行 产品推荐和购买决策。 该公司希望衡量人工智能助手对销售业绩的直接影响。 哪个指标能满足这些要求？

- **A.** The conversion rate of customers who purchase products after Al assistant interactions.
  - 与人工智能助手互动后购买产品的客户转化率。
- **B.** The number of customer interactions with the Al assistant
  - 客户与人工智能助手的互动次数
- **C.** Sentiment analysis scores from customer feedback after Al assistant interactions
  - 与人工智能助手互动后客户反馈中的情感分析得分
- **D.** Natural language understanding accuracy rates
  - 自然语言理解准确率

**正确答案 / Answer: `A`**

Conversion rate directly measures the impact of the Al assistant on sales performance by quantifying the percentage of customers who make a purchase after interacting with the assistant. This metric links Al engagementtoactual sales outcomes.

转化率通过量化与AI助手互动后进行购买的客户比例，直接衡量了AI助手对销售业绩的影响。这一指标 将AI的参与度与实际销售成果联系起来。

---

## Question 295  `#295`

**EN** Which AWS service or feature stores embeddings in a vector database for use with foundation models (FMs) and Retrieval Augmented Generation (RAG)?

**中** 哪项AWS服务或功能将嵌入式向量存储在向量数据库中，以便与基础模型（FMs）和检索增强生成 （RAG）一起使用？

- **A.** Amazon SageMaker Ground Truth
  - 亚马逊 SageMaker Ground Truth
- **B.** Amazon OpenSearch Service
  - 亚马逊OpenSearch服务
- **C.** Amazon Transcribe
  - 亚马逊转录服务
- **D.** Amazon Textract
  - 亚马逊Textract

**正确答案 / Answer: `B`**

Amazon OpenSearch Service provides a vector database capability to store and search embeddings, which are essential for powering Retrieval Augmented Generation (RAG) workflows and integrating with foundation models (FMs) in generative Al solutions.

亚马逊OpenSearch服务提供向量数据库功能，用于存储和搜索嵌入式数据，这对于支持检索增强生成 （RAG）工作流以及与生成式人工智能解决方案中的基础模型（FMs）集成至关重要。

---

## Question 296  `#296`

**EN** Which scenario represents a practical use case for generative Al?

**中** 哪种场景代表了生成式人工智能的实际应用案例？

- **A.** Using an ML model to forecast product demand
  - 利用机器学习模型预测产品需求
- **B.** Employing a chatbot to provide human-like responses to customer queries in real time
  - 利用聊天机器人实时为客户提供类似人类的回应来解答客户咨询
- **C.** Using an analytics dashboard to track website traffic and user behavior
  - 使用分析仪表板来跟踪网站流量和用户行为
- **D.** Implementing a rule-based recommendation engine to suggest products to customers
  - 实施基于规则的推荐引擎，向客户推荐产品

**正确答案 / Answer: `B`**

A generative Al use case involves generating new content, such as natural language responses. A chatbot that provides human-like responses to customer queries uses generative Al models (like large language models) to dynamically create relevant answers, making this a practical example.

生成式人工智能的一个应用场景是生成新的内容，例如自然语言回复。能够为客户的查询提供类似人类回复 的聊关机器人使用生成式人工智能模型（如大型语答模型）来动态生成相关答案，这便是此类技宋的一个实 际应角案例。以)

---

## Question 297  `#297`

**EN** A company is using Amazon Bedrock for a generative Al solution. The solution must integrate a service with vector database storage and vector search capabilities. Which AWS service will meet these requirements?

**中** 一家公司正在使用亚马逊Bedrock来构建一个生成式人工智能解决方案。该解决方案必须整合一个具备 向量数据库存储和向量搜索功能的服务。 哪种AWS服务能满足这些要求？

- **A.** Amazon DynamoDB
  - 亚马逊DynamoDB
- **B.** Amazon OpenSearch Service
  - 亚马逊OpenSearch服务
- **C.** Amazon ElastiCache
  - 亚马逊弹性缓存（AmazonElastiCache）
- **D.** Amazon Redshift
  - 亚马逊红移（Amazon Redshift)

**正确答案 / Answer: `B`**

Amazon OpenSearch Service supports vector database storage and vector search capabilities, which are essential for integrating with generative Al solutions like those on Amazon Bedrock that require efficient similarity search over embeddings.

亚马逊OpenSearch服务支持向量数据库存储和向量搜索功能，这对于与亚马逊Bedrock等生成式人工智能 解决方案集成至关重要，因为这些解决方案需要对嵌入进行高效的相似性搜索。

---

## Question 298  `#298`

**EN** A media streaming platform wants to provide movie recommendations to users based on the users' account history. Which AWS service meets these requirements?

**中** 一家媒体流媒体平台希望根据用户的账户历史记录为用户提供电影推荐。 哪种AWS服务能满足这些要求？

- **A.** Amazon Polly
  - 亚马逊波利（AmazonPolly）
- **B.** Amazon Comprehend
  - 亚马逊comprehend
- **C.** Amazon Transcribe
  - 亚马逊转录服务
- **D.** Amazon Personalize
  - 亚马逊个性化服务

**正确答案 / Answer: `D`**

Amazon Personalize is an AWS service designed to deliver personalized recommendations, such as movie suggestions, to users based on their account history and preferences.

亚马逊个性化服务是亚马逊网络服务（AWS）的一项服务，旨在根据用户的账户历史记录和偏好为其 提供个性花推荐，例如电影推荐。《

---

## Question 299  `#299`

**EN** A company has developed an ML model to approve or reject loan applications. The model's decision- making process must be transparent and explainable to comply with regulatory requirements. The company must document the decision-making process for audit purposes. Which solution will meet these requirements?

**中** 一家公司开发了一个机器学习模型来批准或拒绝贷款申请。该模型的决策过程必须透明且可解释， 以符合监管要求。公司必须记录决策过程以备审计之用。 哪种解决方案能满足这些要求？

- **A.** Amazon Textract
  - 亚马逊Textract
- **B.** Amazon SageMaker Model Card
  - 亚马逊SageMaker模型卡
- **C.** AWS Cloud Formation
  - AWS云形成服务
- **D.** Amazon Comprehend
  - 亚马逊comprehend

**正确答案 / Answer: `B`**

Amazon SageMaker Model Card enables you to document a model's decision-making process, including transparency and explainability details, which helps meet regulatory and audit requirements for Al-driven decisions suchasloanapprovals.

亚马逊SageMaker模型卡使您能够记录模型的决策过程，包括透明度和可解释性细节，这有助于满足贷 款审批等由人工智能驱动的决策的监管和审计要求。

---

## Question 300  `#300`

**EN** HOTSPOT A company is building a generative Al application and is reviewing foundation models (FMs). The company needs to considermultipleFM characteristics. Select the correct FM characteristic from the following list for each definition. Each FM characteristic should be selected one time. Hot Area: Amountof informationthatcanfitinasinglepromptSelect7 AmountornfomtatontnatcanitinasnglepromptSelect...y Concurrency concaency Contextwindows atency Latency Lenathoftimeittakesfora modeltogenerateanoutputSelect LenginortimeittakesoramodertogenerateanoutputSelect... Concurrency oncaency Contextwindows atency Latency Multinleusers inyoking anapplication endnoint simultaneouslySelect MuitipleusersinvokinganappiicationendpointsimuitaneouslySelect...y Concurrency concanency Contextwindows atency Latency

**中** 热点 一家公司正在开发一款生成式人工智能应用程序，并正在评估基础模型（FMs）。该公司需要考虑多个基 础模型的特性。 从下列列表中为每个定义选择正确的调频特性。每个调频特性应仅选择一次。 热点区域： Amount of information that can fit in a single promptSelect...7 Concurrency Contextwindows Eo [Latency Length of time it takes fora model to generate an outputSelect... Soonoooaoaoogooaoaapa Concurrency Contextwindows Latency Multipleusers invoking an application endpoint simultaneouslySelect... Pg Concurrency Contextwindows Latency


**正确答案 / Answer: ``**

Amount of information that can fit in a single prompt -> Context windows Length of time it takes for a model to generate an output -> Latency Multiple users invoking an application endpoint simultaneously -> Concurrency Context windows determine how much information the model can process at once. Latency is the response time for generating output. Concurrency measures how many users or requests the endpoint can handle at the same time.

单个提示中可容纳的信息量>上下文窗口生成输出所需的时间长度>延迟 多个用户同时调用应用程序端点>并发性 上下文窗口决定了模型一次能够处理多少信息。 延迟是生成输出的响应时间。 并发性衡量的是端点在同一时间能够处理的用户数或请求数。

---

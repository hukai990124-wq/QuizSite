# AWS AIF-C01 AI 真题库（452 题） · 第 09 份

> 题目 401–450 · 中英对照 · 来源：扫描版 AWS AI 题库（452 题，中英对照）

## Question 401  `#401`

**EN** A company is creating a model to label credit card transactions. The company has a large volume of sample transaction data to train the model. Most of the transaction data is unlabeled. The data does not contain confidential information. The company needs to obtain labeled sample data to fine-tune the model. Which solutions will meet these requirements? (Choose two.)

**中** 一家公司正在创建一个模型来标注信用卡交易。该公司拥有大量的 用于训练模型的交易样本数据。大部分交易数据未标注。这些数据不包含机密信息。 该公司需要获取带标签的样本数据来微调模型。 哪些解决方案能满足这些要求？（选择两项。）

- **A.** Run batch inference jobs on the unlabeled data.
  - 在未标记的数据上运行批量推理任务。
- **B.** Run an Amazon SageMaker Al training job that uses the PyTorch Distributed library to label data.
  - 运行一个使用PyTorch分布式库对数据进行标注的Amazon SageMakerAI训练任务。
- **C.** Use an Amazon SageMaker Ground Truth labeling job with Amazon Mechanical Turk workers.
  - 使用带有亚马逊Mechanical Turk工人的亚马逊SageMakerGround Truth标注任务。
- **D.** Use an optical character recognition model trained on labeled samples to label unlabeled samples.
  - 使用在有标签样本上训练好的光学字符识别模型为无标签样本标注标签。
- **E.** Run an Amazon SageMaker Al labeling job.
  - 运行Amazon SageMaker AI标注任务。

**正确答案 / Answer: `C,E`**

Amazon SageMaker Ground Truth with Mechanical Turk workers enables human labeling of large unlabeled datasets, and SageMaker Al labeling jobs can automatically generate labels using machine learning workflows, providing the labeled data needed for fine-tuning.

亚马逊SageMakerGroundTruth与MechanicalTurk工人相结合，能够对大量未标注的数据集进行人工 标注，而SageMakerAI标注任务则可以利用机器学习工作流首动生成标注，从而提供用于微调所需的 棕注数据。位在据工口)

---

## Question 402  `#402`

**EN** A company has developed an Al assistant application for customers by using Amazon Bedrock Agents. The company notices that the agents require additional context to make informed decisions consistently. The agents are not accessing external services to complete customer travel booking requests. The company needs to ensure that the agents access additional context when necessary. Which solution will meet this requirement?

**中** 一家公司利用亚马逊Bedrock代理开发了一款面向客户的AI助手应用程序。该公司发现，这些代理需要 更多的上下文信息牙能始终如一地做出明智的决策。这些代理无法访外部服务来完成客户的旅行预订请 求。 公司需要确保代理人在必要时能够获取更多背景信息。 哪种解决方案能满足这一要求？

- **A.** Negative prompting
  - 负面提示
- **B.** Model Context Protocol (MCP)
  - 模型上下文协议（MCP)
- **C.** Zero-shot prompting
  - 零样本提示法
- **D.** Custom API to provide more context
  - 自定义API以提供更多上下文信息

**正确答案 / Answer: `D`**

Providing a custom APl allows the agents to access external data and services, supplying the additional context needed to make informed and consistent decisions for customer travel bookings.

提供息定义API可以让代理访问外部数据和服务，从而为客户的旅行预订提供做出明智且一致决策所需 的额外青景信息。

---

## Question 403  `#403`

**EN** HOTSPOT A company has multiple datasets that contain historical data. The company wants to use ML technologies to process each dataset. Select the correct ML technology from the following list for each dataset. Select each ML technology one time or not at all. Hot Area: Adatasetthat contains text-basedcustomer reviewsSelect... computer vision Natural language processing (NLP) Ratnfarcamgenatgeapricessing (NLP) Reinforcementieaming Time series forecasting A dataset that contains images of animals labeled with their species namesSelect. Computervision Natural language processing (NLP) Rainfarcemgena Jeapricessing(NLP) Reinforcement eaming Time series forecasting Adataset that containsdaily sales volumes for productsSelect.. Computervision Natural languageprocessing (NLP) Reinfarcemenat eapmicessing (NLP) Reinforcemenreeamting ime senes forecasting

**中** 热点 一家公司拥有多个包含历史数据的数据集。该公司希望利用机器学习技术来处理每个数据集。 从以下列表中为每个数据集选择正确的机器学习技术。每个机器学习技术只能选择一次或根本不选。 热点区域： Adataset that contains text-based customer reviewsSelect. Computervision Naturl language processing (NLP) Reinforcement leaming Timeseriesforecasting Adataset that contains images of animals labeled withtheir species namesSelect.. Computer vision Natural language processing (NLP) Reinforcement leaming Time series forecasting Adataset that containsdailysales volumes for productsSelect.. computer vision Natural language processing (NLP) Reinforcementleaming Time series forecasting


**正确答案 / Answer: ``**

Text-based customer reviews - Natural language processing (NLP) Images of animals labeled with species names Computer vision Daily sales volumes for products - Time series forecasting Customer reviews are unstructured text, so NLP is the appropriate technology for analyzing and processing language data. Images labeled by species are a visual classification task, which is handled by computer vision. Daily sales volumes are sequential data over time, making time series forecasting the correct choice for identifying patterns and predicting future values.

基于文本的客户评价一一自然语言处理（NLP）带有物种名称的动物 图片一一计算机视觉产品的每日销售量一一时间序列预测 客户评价是无结构的文本，因此自然语言处理是分析和处理语言数据的合适技术。按物种标注的图像属于 视觉分类任务，由计算机视觉来处理。每日销售量是随时间变化的序列数据，因此时间序列预测是识别模 式和预测未来值的正确选择。

---

## Question 404  `#404`

**EN** A company wants to detect unauthorized AP1 actions for foundation models (FMs) in Amazon Bedrock. Which solution meets these requirements?

**中** 一家公司希望检测亚马逊Bedrock中基础模型（FMs）的未经授权的API操作。 哪种解决方案符合这些要求？

- **A.** Configure AWS CloudTrail to monitor API activity.
  - 配置AWSCloudTrail以监控API活动。
- **B.** Use AWs Trusted Advisor to monitor model input and output data.
  - 使用AWS可信顾问来监控模型的输入和输出数据。
- **C.** Create Amazon QuickSight dashboards to monitor row-level safety.
  - 创建AmazonQuickSight仪表板以监控行级安全性。
- **D.** Monitor user access by using Amazon Personalize.
  - 使用Amazon Personalize监控用户访问。

**正确答案 / Answer: `A`**

AWS CloudTrail records and monitors Amazon Bedrock APl activity, which helps detect unauthorized APl actions performed against foundation models.

AWS.CloudTrail会记录和监控AmazonBedrockAPI活动，这有助于检测针对基础模型执行的未经授权的 API操作。

---

## Question 405  `#405`

**EN** A company has developed a generative Al application by using Amazon Bedrock. The application produces catalogs that are updated weekly. The company needs to select a pricing model for weekly catalog updates. Which Amazon Bedrock pricing model meets these requirements MOsT cost-effectively?

**中** 一家公司利用亚马逊Bedrock开发了一款生成式人工智能应用程序。该应用程序每周生成一次目录。 该公司需要为每周的目录更新选择一种定价模式。 哪种亚马逊Bedrock定价模式能以最经济高效的方式满足这些要求？

- **A.** On-Demand
  - 按需（服务）
- **B.** Provisioned Throughput
  - 预配置吞吐量
- **C.** Batch
  - 批处理
- **D.** Modelevaluation
  - 模型评估

**正确答案 / Answer: `C`**

Batch is the most cost-effective choice for weekly catalog updates because it is designed for asynchronous, non-real-time workloads, and Aws states that Amazon Bedrock batch inference can process large jobs offline at lower cost, including pricing at up to 50% of on-demand inference for supported models.

对于每周的目录更新，批处理是最具成本效益的选择，因为它专为异步、非实时工作负载而设计，而 且亚马逊网络服务（AWS）表示，亚马逊Bedrock的批处理推理可以离线处理大型任务，成本更低， 包括对支持的模型的定价可低至按需推理价格的50%。

---

## Question 406  `#406`

**EN** An Al practitioner is creating prompts for an Amazon Nova Canvas model. The Al practitioner wants to exclude certain characteristics from the model's generated output. Which prompting technique will meet this requirement?

**中** 一位人工智能从业者正在为亚马逊Nova Canvas模型创建提示。该从业者希望从模型生成的输出中排除 某些特征。 哪种提示技术能满足这一要求？

- **A.** Mask prompts
  - 面具提示
- **B.** Negative prompts
  - 负面提示
- **C.** Inpainting prompts
  - 修复提示
- **D.** Outpainting prompts
  - 扩展画作提示

**正确答案 / Answer: `B`**

Negative prompts are used to tell Amazon Nova Canvas which objects, attributes, or styles should be excludedfrom thegenerated image.

负面提示用于告知亚马逊Nova画布在生成图像时应排除哪些对象、属性或风格。

---

## Question 407  `#407`

**EN** A company is building a conversational Al assistant. The company plans to use Amazon Bedrock Guardrails to prevent users from attempting to bypass the Al assistant's built-in safety capabilities. Which type of Bedrock Guardrail policy will meet this requirement?

**中** 一家公司正在开发一款对话式人工智能助手。该公司计划使用亚马逊Bedrock安全防护措施来防止 用户试图绕过该人工智能助手内置的安全功能。 哪种类型的“基岩护栏”策略能满足这一要求？

- **A.** Contextual grounding check
  - 上下文关联性检查
- **B.** Denied topics
  - 禁止讨论的话题
- **C.** Prompt attacks
  - 突然袭击
- **D.** Sensitive information filters
  - 敏感信息过滤器

**正确答案 / Answer: `C`**

Prompt attack policies in Amazon Bedrock Guardrails are designed to detect and block attempts to manipulate the model into ignoring or bypassing its built-in safety instructions.

亚马逊Bedrock安全护栏中的即时攻击策略旨在检测并阻止试图操纵模型以忽略或绕过其内置安全 指令的行为。

---

## Question 408  `#408`

**EN** A company has implemented a large language model (LLM) solution by using a pre-trained model. The company needs to ensure that the model's responses are transparent and accurate. The company wants to ground the model's responses in factual information from the company's authoritative data sources. Which technique should the company use to meet these requirements?

**中** 一家公司通过使用预训练模型实施了大型语言模型（LLM）解决方案。该公司需要确保模型的响应透明且 准确。该公司希望将模型的响应基于公司权威数据源中的事实信息。 公司应该采用哪种技术来满足这些要求？

- **A.** Prompt engineering
  - 提示工程
- **B.** Reinforcement learning
  - 强化学习
- **C.** Retrieval Augmented Generation (RAG)
  - 检索增强生成(RAG)
- **D.** Static knowledge base
  - 静态知识库

**正确答案 / Answer: `C`**

Retrieval Augmented Generation (RAG) grounds the model's responses in authoritative company data by retrieving relevant information at inference time, which improves factual accuracy and makes responses more transparent and trustworthy.

检索增强生成（RAG）通过在推理时检索相关权威公司数据来为模型的响应提供依据，这提高了事实的准 确性，并使响应更透明、更可信。

---

## Question 409  `#409`

**EN** A company is deploying an Al-powered loan approval system. The company must comply with data governance regulations for Al. Which solution will meet these requirements?

**中** 一家公司正在部署一套由人工智能驱动的贷款审批系统。该公司必须遵守人工智能的数据治理规定。 哪种解决方案能满足这些要求？

- **A.** Modify Al outputs based on user preferences without audit trails.
  - 根据用户偏好修改人工智能的输出结果，且无需审计追踪。
- **B.** Implement data lifecycle management to track and manage Al training data.
  - 实施数据生命周期管理，以跟踪和管理人工智能训练数据。
- **C.** Prioritize Al inference time optimization over data residency requirements.
  - 优先考虑人工智能推理时间的优化，而非数据驻留要求。
- **D.** Use only synthetic data for model training to avoid compliance risks.
  - 仅使用合成数据进行模型训练，以规避合规风险。

**正确答案 / Answer: `B`**

Implementing data lifecycle management helps track how training data is collected, stored, used, updated, and retained, which supports compliance with Al data governance requirements and provides accountability over the data used by the loan approval system.

实施数据生命周期管理有助于追踪训练数据的收集、存储、使用、更新和保留情况，这有助于符合人工智 能数据治理要求，并对贷款审批系统所使用的数据进行责任追溯。

---

## Question 410  `#410`

**EN** A company built an Al chatbot. The chatbot uses large language models (LLMs) to answer user questions. The company wants to keep the chatbot's LLM instructions private. Which security risk should the company consider?

**中** 一家公司开发了一款人工智能聊天机器人。该聊天机器人使用大型语言模型（LLM）来回答用户的问题。 该公司希望将聊天机器人的LLM指令保密。 公司应当考虑哪种安全风险？

- **A.** Data poisoning
  - 数据投毒
- **B.** Prompt leakage
  - 活塞杆泄漏
- **C.** LLM hallucinations
  - 大语言模型的幻觉现象
- **D.** Output ungroundedness
  - 输出未接地

**正确答案 / Answer: `B`**

Prompt leakage is the risk that hidden system instructions or private prompts can be exposed to users, which could reveal the chatbot's confidential LLM instructions.

提示泄露是指隐藏的系统指令或私密提示可能被用户发现的风险，这可能会暴露聊天机器人的机密 LLM指令。E一

---

## Question 411  `#411`

**EN** A company wants to use a large language model (LLM) to generate responses based on company data. Which strategy will meet this requirement?

**中** 一家公司希望利用大型语言模型（LLM）根据公司数据生成回复。 哪种策略能满足这一要求？

- **A.** Use first-party pre-trained models from Amazon Bedrock.
  - 使用来自亚马逊Bedrock的第一方预训练模型。
- **B.** Use pre-trained open source models.
  - 使用预训练的开源模型。
- **C.** Fine-tune a custom model on company data.
  - 在公司数据上对自定义模型进行微调。
- **D.** Use pre-trained third-party models from Amazon Bedrock.
  - 使用来自亚马逊Bedrock的预训练第三方模型。

**正确答案 / Answer: `C`**

Fine-tuning a custom model on company data adapts the model's behavior and responses to the organization's specific domain, terminology, and knowledge, enabling it to generate responses based on that data.

在公司数据上对自定义模型进行微调，可使模型的行为和响应适应组织的特定领域、术语和知识，从而能 够基于这些数据生成响应。

---

## Question 412  `#412`

**EN** What is an example of structured data?

**中** 结构化数据的-一个例子是什么？

- **A.** A file of text comments from an online forum
  - 一个来自在线论坛的文本评论文件
- **B.** A compilation of video files that contains news broadcasts
  - 一个包含新闻广播的视频文件合集
- **C.** A CsV file that consists of measurement data
  - 一个包含测量数据的CSV文件
- **D.** Transcribed conversations between call center agents and customers
  - 客服代表与客户之间的通话记录

**正确答案 / Answer: `C`**

A CsV file that contains measurement data is structured because the information is organized into a consistent tabular format with defined rows and columns.

一个包含测量数据的CSV文件是结构化的，因为信息被组织成具有定义好的行和列的统一表格格式。

---

## Question 413  `#413`

**EN** A company uses foundation models (FMs) to automate daily tasks. An Al practitioner at the company is creating system instructions that include context that is relevant to the tasks. The Al practitioner wants to save and reuse the instructions in daily interactions with FMs in Amazon Bedrock. Which Amazon Bedrock solution will meet these requirements?

**中** 一家公司使用基础模型（FMs）来息动化日常任务。该公司的一位人工智能从业者正在创建包含与任务相 关背景信息的系统指令。这位人工智能从业者希望在与亚马逊Bedrock中的基础模型进行日常交互时保存 并重复使用这些指令。 哪种亚马逊Bedrock解决方案能满足这些要求？

- **A.** Knowledge Bases
  - 知识库
- **B.** Guardrails
  - 护栏
- **C.** Playgrounds
  - 游乐场
- **D.** Prompt management
  - 及时处理

**正确答案 / Answer: `D`**

Prompt management in Amazon Bedrock lets you create, save, version, and reuse prompts, including system instructions and task context, across repeated interactions.

在亚马逊Bedrock中，提示管理功能可让您创建、保存、版本控制和重复使用提示，包括系统指令和任 务上下支，以供多次交互使角。。、的、下业要设规

---

## Question 414  `#414`

**EN** A company maintains a large product catalog with detailed descriptions. The company wants to build an Al assistant to answer customer questions about the products. However, the company's labeled training data is limited. Which solution will meet these requirements with the LEAST implementation effort?

**中** 一家公司维护着一个包含详细产品描述的大型产品目录。该公司希望构建一个AI助手来回答客户关于产品 的疑问。然而，该公司的带标签训练数据有限。 哪种解决方案能以最少的实施工作量满足这些要求？

- **A.** Use a Retrieval Augmented Generation (RAG) architecture to query the product database at runtime. Provide relevant, unmodified product descriptions as context for the foundation model (FM).
  - 在运行时使用检索增强生成（RAG）架构查询产品数据库。为基础模型（FM）提供相关且未经修改的 产品描述作为上下文。
- **B.** Fine-tune a foundation model (FM) on the restricted labeled data. Automatically refresh the model with novel product details weekly for accuracy.
  - 在受限的标注数据上对基础模型（FM）进行微调。每周自动用新产品详情更新模型以确保准确性。
- **C.** Deploy a foundation model (FM) for each product category. Implement a routing layer to direct customer queries to the appropriate specialized model.
  - 为每个产品类别部署一个基础模型（FM）。实施一个路由层，将客户的查询定向到相应的专业 模型。
- **D.** Create a new custom foundation model (FM) that is trained on the product database. Optimize the FM for minimal token usage during inference.
  - 创建一个新的自定义基础模型（FM），该模型基于产品数据库进行训练。优化该基础模型，使其在推 理过程中使用的标记量最少。（

**正确答案 / Answer: `A`**

A RAG architecture is the least-effort solution because it uses the existing product catalog as the knowledge source at runtime, so the foundation model can answer questions with current product information without requiring extensive labeled data or custom model training.

RAG架构是最省力的解决方案，因为它在运行时使用现有的产品目录作为知识源，因此基础模型 能够利用当前的产品信息回答问题，而无需大量标注数据或进行定制模型训练。

---

## Question 415  `#415`

**EN** A company is using Amazon Bedrock to build an assistant for its online store. The company wants to ensure that the assistant does not generate harmful responses based on hate speech, insults, sexual content, or violence. Which strategy will prevent harmful responses in Amazon Bedrock?

**中** 一家公司正在使用亚马逊Bedrock为其在线商店打造一款助手。该公司希望确保该助手不会基于仇恨 言论、侮辱、色情内容或暴力生成有害的回复。 哪种策略可以防止亚马逊Bedrock产生有害的响应?

- **A.** Use Amazon SageMaker built-in algorithms to filter harmful content.
  - 使用亚马逊SageMaker内置算法过滤有害内容。
- **B.** Use Amazon Comprehend toxicity detection to identify harmful content.
  - 使用亚马逊Comprehend毒性检测功能来识别有害内容。
- **C.** Configure Guardrails for Amazon Bedrock to filter harmful content.
  - 为亚马逊Bedrock配置防护栏以过滤有害内容。
- **D.** Train a custom model according to the company's responsible Al policies.
  - 根据公司的负责任人工智能政策训练自定义模型。

**正确答案 / Answer: `C`**

Guardrails for Amazon Bedrock provides content filters that can detect and block harmful model inputs and outputs across categories including hate, insults, sexual content, and violence.

亚马逊Bedrock的防护栏提供内容过滤器，能够检测并阻止包括优恨、悔厚、色情内容和暴力在内的各类有 害模型输入和输出。说

---

## Question 416  `#416`

**EN** A company is deploying a new Al application to generate content for internal users. Which strategy will make the application output more deterministic?

**中** 一家公司正在部署一款新的人工智能应用程序，为内部用户生成内容。 哪种策略能使应用程序的输出更具确定性？

- **A.** Decreasing the temperature
  - 降低温度
- **B.** Increasing the learning rate
  - 提高学习率
- **C.** Setting stop sequences
  - 设置停止序列
- **D.** Setting the token count
  - 设置令牌数量

**正确答案 / Answer: `A`**

Decreasing the temperature reduces randomness in token selection, which makes the model's responses more consistent and deterministic for the same input.

降低温度会减少标记选择的随机性，这使得模型对于相的输入给出的响应更加一致和确定。

---

## Question 417  `#417`

**EN** HOTSPOT An Al practitioner is using an Amazon Nova text model. The Al practitioner wants to apply prompt engineering techniques to ensure that prompts support an iterative refinement process. Select the correct prompt design component from the following list for each definition. Select each prompt design component one time. Hot Area: SnocifythousocasoforthomodolSelect Specitytheusecaseforthemodel.Select... Responsestyle Responsestyle Role Role Successcriteria aoocoona Task Definethe personathe model shouldassumeSelect DetinethepersonathemodelshouidassumeSelect...-Y tomeetthereguirements effectivelyResponse style tomeettheTeqairementseectively.Responsestyle. Role Role Successcriteria oooona Task Describethetone,format,orstructurethatSelect nselect.M themodelshouldfollow.Resnonsestyle Response style Role Role Successcriteria aocooon Task SetclearmetricstoevaluatewhetherSelect Setclearmetricsto evaluatewhetherSelect..M themodel outputmeets expectations.Response style themoueroatpatheetsexpectations.Responsestyle Role e Successcriteria aoocoocncna Task

**中** 热点 一位人工智能从业煮正在使用亚马逊Nova文本模型。该从业者希望运用提示工程技巧，以确 保提宗能够支持选代花过程。“。口位 从以下列表中为每个定义选择正确的提示设计组件。每个提示设计组件只能选择一次。 热点区域： Specify the use case for the model.Select... Response style Role Success criteria Task Define the persona the model should assumeSelect.. to meet the requirements effectively.Response style Role Success criteria: Task Describe the tone, format, or structure thatSelect... the model should follow...... Responsestyle Role Success criteria Task Set clearmetrics to evaluatewhetherSelect... the model output meets expectations.Response style Role Success criteria Task


**正确答案 / Answer: ``**

Specify the use case for the model - Task Define the persona the model should assume to meet the requirements effectively - Role Describe the tone, format, or structure that the model should follow - Response style Set clear metrics to evaluate whether the model output meets expectations - Success criteria Task defines what the model is being asked to do. Role sets the persona or perspective the model should adopt. Response style determines the tone, format, and structure of the output. Success criteria establish how to judge whether the response meets the intended requirements.

指定模型的使用场景一一任务 定义模型应承担的角色以有效满足要求一角色描述模型应遵循的语气、格式或结构一回应 风格设定明确的指标以评估模型输出是否符合预期一成功标准 任务定义了模型需要完成的工作。角色设定了模型应采用的立场或视角。响应风格决定了输出的语气、 格式和结构。成功标准确立了如何判断响应是否符合预期要求。

---

## Question 418  `#418`

**EN** A company runs an application on servers in an Amazon VPC. The company's application uses Amazon Bedrock APls for Al features. The company does not want API calls to travel across the public internet. Which solution will meet this requirement?

**中** 一家公司在亚马逊VPC中的服务器上运行应用程序。该公司的应用程序使用亚马逊BedrockAPI来实 现人工智能功能。该公司不希望API调用通过公共互联网传输。 哪种解决方案能满足这一要求？

- **A.** Use AWS PrivateLink to establish a private connection between the Amazon VPC and Amazon Bedrock.
  - 使用AWSPrivateLink在AmazonVPC和AmazonBedrock之间建立私有连接。
- **B.** Sign APl requests by using an access key ID and a secret access key that is associated with an IAM principal.
  - 使用与IAM实体关联的访问密钥ID和秘密访问密钥对API请求进行签名。
- **C.** Move the application to an on-premises server. Make APl calls to the public endpoint of Amazon Bedrock.
  - 将应用程序迁移到本地服务器。向AmazonBedrock的公共端点发出API调用。
- **D.** Encrypt the data in transit from clients to the APls that have been implemented in the Amazon VPC. Encrypt the data in transit for API calls from the Amazon VPC to Amazon Bedrock.
  - 对从客户端传输到在亚马逊VPC中实现的API的数据进行加密。对从亚马逊VPC发往亚马逊 Bedrock的API 调用的数据进行加密。

**正确答案 / Answer: `A`**

AWS PrivateLink lets the application in the Amazon VPC connect privately to Amazon Bedrock through interface VPC endpoints, so the API traffic does not traverse the public internet.

AWSPrivateLink使AmazonVPC中的应用程序能够通过接口VPC端点与AmazonBedrock进行私有连接， 因此API流量不会经过公共互联网。的国0

---

## Question 419  `#419`

**EN** A financial company uses an ML model to detect potentially fraudulent transactions. The company needs to ensure that some types of predictions receive review by human analysts before the company acts upon the predictions. Which AWS solution will meet this requirement?

**中** 一家金融公司使用机器学习模型来检测潜在的欺诈交易。该公司需要确保某些类型的预测在公司采取行动 之前先由人工分析师进行审查。 哪种AWS解决方案能满足这一要求？

- **A.** Amazon SageMaker Clarify
  - 亚马逊 SageMaker Clarify
- **B.** Amazon SageMaker Ground Truth
  - 亚马逊 SageMaker Ground Truth
- **C.** Amazon Augmented Al (Amazon A2l)
  - 亚马逊增强型人工智能（亚马逊A2I)
- **D.** Amazon SageMaker Model Monitor
  - 亚马逊SageMaker模型监控器

**正确答案 / Answer: `C`**

Amazon Augmented Al (Amazon A2l) adds human review workflows to ML predictions so selected fraud detection results can be routed to human analysts before action is taken.

亚马逊增强型人工智能（AmazonA2I）将人工审核工作流添加到机器学习预测中，以便在采取行动之前 将选定的欺诈检测结巢转交给人工分析师。

---

## Question 420  `#420`

**EN** Which strategy will evaluate the performance of a foundation model (FM) in real-world applications?

**中** 哪种策略能够评估基础模型（FM）在实际应用中的性能？

- **A.** Conducting A/B testing with users in a controlled environment
  - 在受控环境中对用户进行A/B测试
- **B.** Human evaluation by subject matter experts
  - 由相关领域专家进行的人工评估
- **C.** Measuring the model's accuracy on a training dataset
  - 在训练数据集上测量模型的准确性
- **D.** Analysis of the model's internal representations and attention patterns
  - 对模型内部表示和注意力模式的分析

**正确答案 / Answer: `A`**

A/B testing with users in a controlled environment evaluates how the foundation model performs in an actual application setting by measuring user interactions and outcomes under realistic conditions.

在受控环境中对用户进行A/B测试，通过衡量用户在现实条件下的交互情况和结果，来评估基础模型 在实际应角环境中的表现。，领主的

---

## Question 421  `#421`

**EN** A company is building a chatbot. The chatbot uses a large language model (LLM) and answers customer questions about products. The company wants the chatbot to answer only product questions. The company does not want the chatbot to answer questions about other topics. Which solution will meet these requirements with the LEAsT operational overhead?

**中** 一家公司正在开发一个聊天机器人。该聊天机器人使用大型语言模型（LLM）来回答客户关于产品的疑问。 公司希望聊天机器人仅回答产品相关的问题，而不回答其他主题的问题。 哪种解决方案能在运营开销最小的情况下满足这些要求？

- **A.** Set guardrails on the LLM prompt template.
  - 在LLM提示模板上设置防护栏。
- **B.** Write custom application logic to identify questions about other topics.
  - 编写自定义应用程序逻辑以识别关于其他主题的问题。
- **C.** Reduce the information the LLM can access.
  - 减少大型语言模型可访问的信息。
- **D.** Set the temperature parameter value to a lower number.
  - 将温度参数值设置为较低的数值。

**正确答案 / Answer: `A`**

Setting guardrails on the prompt template is the least-overhead way to constrain the chatbot to product- related topics by defining allowed behavior and preventing responses outside the intended scope.

在提示模板上设置防护栏是限制聊天机器人仅讨论产品相关主题的开销最小的方法，通过定义允许的行 为弃防正出现超出预期范菌的尚复来实现。次，品定的

---

## Question 422  `#422`

**EN** A company is building a large language model (LLM)-based Al assistant to support service agents by automatically managing customer inquiries. The company wants to reduce the effort that customer service agents require during support calls. The company needs to select a metric to evaluate the Al assistant against one of the company's business objectives. Which metric will meet these requirements?

**中** 一家公司正在开发一款基于大型语言模型（LLM）的AI助手，以自动管理客户咨询，从而为客服人员提供 支持。该公司希望减少客服人员在支持电话中所需付出的努力。 该公司需要选择一个指标来评估人工智能助手在实现公司业务目标之一方面的表现。 哪个指标能满足这些要求？

- **A.** Website engagement rate
  - 网站参与率
- **B.** Average call duration
  - 平均通话时长
- **C.** Agent attrition rate
  - 代理流失率
- **D.** First contact resolution rate
  - 首次接触解决率

**正确答案 / Answer: `B`**

Average call duration directly measures how much effort service agents need during support calls. If the Al assistant is effectively helping manage inquiries, agents should be able to resolve calls more quickly, reducing call time.

平均通话时长直接反映了服务人员在处理支持电话时所需的工作量。如果人工智能助手能有效地协助管理咨 询事务，服务人员应该能够更快地解决电话问题，从而缩短通话时间。

---

## Question 423  `#423`

**EN** A company has fine-tuned an Amazon Bedrock foundation model (FM) to produce short document summaries. The company wants an automated metric that compares each model-generated summary with its human-written reference summary. Which metric will meet these requirements?

**中** 一家公司已对AmazonBedrock的基础模型（FM）进行了微调，以生成简短的文档摘要。该公司希望获得一 个自动化指标，用于将每个模型生成的摘要与人工撰写的参考摘要进行比较。 哪个指标能满足这些要求？

- **A.** F1 score
  - F1分数
- **B.** Recall-Oriented Understudy for Gisting Evaluation (ROUGE)
  - 用于摘要评估的召回导向型辅助工具（ROUGE)
- **C.** Perplexity
  - 困惑度
- **D.** Frechet inception distance (FID)
  - Fréchet inception 距离(FID)

**正确答案 / Answer: `B`**

Recall-Oriented Understudy for Gisting Evaluation is used to evaluate generated text summaries by comparing them with human-written reference summaries. It measures overlap in words or sequences, making it suitable for automated summary quality evaluation.

用于摘要评估的召回导向副手（Recall-OrientedUnderstudyforGistingEvaluation）通过将生成的文本摘 要与人工撰写的参考摘要进行比较，来评估生成摘要的质量。该方法衡量词语或序列的重叠程度，适用 手首动花的摘要质量评估。的比资，信人的支的量。以主注资）

---

## Question 424  `#424`

**EN** A company has created an Al assistant to provide relevant information to employees about internal processes. The Al assistant uses a fine-tuned foundation model (FM). The company wants to use feedback from employees to further refine the model's responses. Which solution will meet these requirements?

**中** 一家公司开发了一款AI助手，用于向员工提供有关内部流程的相关信息。该AI助手采用了一个经过 微调的基础模型（FM）。公司希望利用员工的反馈来进一步优化模型的响应效果。 哪种解决方案能满足这些要求？

- **A.** Implement model distillation.
  - 实施模型蒸馏。
- **B.** Perform continued pre-training and incorporate feedback from employee ratings.
  - 持续进行预训练，并纳入员工评分的反馈意见。
- **C.** Use reinforcement learning from human feedback (RLHF).
  - 使用基于人类反馈的强化学习（RLHF）。
- **D.** Enable intelligent prompt routing.
  - 启用智能提示路由。

**正确答案 / Answer: `C`**

Reinforcement learning from human feedback uses human evaluations, preferences, or ratings to improve a model's responses. This approach is designed to align a foundation model's outputs more closely with user expectations and desired behavior.

基于人类反馈的强化学习利用人类的评估、偏好或评分来改模型的响应。该方法旨在使基础模型的输出 更贴近用户的期望和期望行为。

---

## Question 425  `#425`

**EN** Which AWS service provides a broad range of high-performing generative Al foundation models (FMs)?

**中** 哪个AWS服务提供了广泛高性能的生成式AI基础模型（FMs）？

- **A.** Amazon Bedrock
  - 亚马逊Bedrock
- **B.** Amazon Rekognition
  - 亚马逊人脸识别
- **C.** Amazon Lex
  - 亚马逊Lex
- **D.** Amazon Kendra
  - 亚马逊Kendra

**正确答案 / Answer: `A`**

Amazon Bedrock provides access to a broad range of high-performing foundation models for generative Al throughafully managed AWS service.

AmazonBedrock通过--项完全托管的AWS服务，提供访问多种高性能生成式AI基础模型。

---

## Question 426  `#426`

**EN** A company is preparing data to fine-tune a large language model (LLM). The company must follow the principles of responsible Al. Which actions will meet this requirement? (Choose two.)

**中** 一家公司正在准备数据以微调大型语言模型（LLM），该公司必须遵循负责任的人工智能原则。 哪些操作可以满足此要求？（选择两项。）

- **A.** Include demographically diverse data sources to improve model fairness.
  - 包含具有人口统计多样性的数据源，以提高模型的公平性。
- **B.** Apply consistent labeling standards across the training dataset.
  - 在训练数据集中统一应用标注标准。
- **C.** Focus exclusively on high-volume data regardless of quality.
  - 仅专注于大量数据，而不考虑其质量。
- **D.** Use only synthetic data to train the model.
  - 仅使用合成数据来训练模型。
- **E.** Use fewer labels to reduce ambiguity in data during model training.
  - 使用更少的标签，以在模型训练期间减少数据的歧义。

**正确答案 / Answer: `A,B`**

Using demographically diverse data helps reduce bias and supports fairness across different user groups. Applying consistent labeling standards improves data quality, reliability, and transparency during fine- tuning, which supports responsible Al practices.

使用具有人口多样性的数据有助于减少偏见，支持不同用户群体之间的公平性。采用一致的标注标准可提 高微调过程中的数据质量、可靠性和透明度，从而促进负责任的人工智能实践。

---

## Question 427  `#427`

**EN** Which benefit does a company gain by using ongoing pre-training to fine-tune a foundation model (FM)?

**中** 企业通过持续使用预训练来微调基础模型（FM）能获得什么好处？

- **A.** Decreased model complexity
  - 模型复杂度降低
- **B.** Improved model performance over time
  - 模型性能随时间的提升
- **C.** Decreased time required to train the model
  - 减少模型训练所需的时间
- **D.** Reduced model training cost
  - 降低模型训练成本

**正确答案 / Answer: `B`**

Ongoing pre-training continues training a foundation model on additional relevant data, helping the model improve its knowledge and performance over time for the target domain or use case.

持续的预训练通过在更多相关数据上对基础模型进行训练，帮助模型随着时间推移不断提升其在目标领域 或应角场景中的知识和性能。工主主

---

## Question 428  `#428`

**EN** A software development company wants to increase its speed to market delivery. The company needs a solution that helps developers generate real-time code and unit tests. Which AWS service meets these requirements?

**中** 一家软件开发公司希望加快产品上市速度，需要一种能够帮助开发者实时生成代码和单元测试的解决方案。 哪个AWS服务满足这些要求？

- **A.** Amazon Personalize
  - 亚马逊个性化
- **B.** Amazon Q Developer
  - 亚马逊Q开发者
- **C.** Amazon Comprehend
  - 亚马逊语义理解
- **D.** Amazon Kendra
  - 亚马逊Kendra

**正确答案 / Answer: `B`**

Amazon Q Developer helps software developers generate code, create unit tests, explain code, and improve development productivity in real time, which supports faster software delivery.

AmazonQDeveloper可帮助软件开发者实时生成代码、创建单元测试、解释代码并提升开发效率，从 而支持更快的软件交付。资的的已提

---

## Question 429  `#429`

**EN** A company plans to use a dataset to train a new Al model. The company needs to determine whether a bias against a specific user group exists in the dataset before the company trains the model. Which solution will meet these requirement?

**中** 一家公司计划使用数据集来训练一个新的AI模型。在训练模型之前，该公司需要确定数据集中是否存在 针对特定用户群体的偏见。主 哪种解决方案能满足这些要求？

- **A.** Use Amazon SageMaker Clarify to compute pre-training bias metrics.
  - 使用AmazonSageMakerClarify计算预训练偏见指标。
- **B.** Use Amazon SageMaker Model Cards to compute pre-training bias metrics.
  - 使用AmazonSageMaker模型卡片来计算预训练偏见指标。
- **C.** Use Amazon SageMaker Clarify to compute post-training bias metrics.
  - 使用Amazon SageMakerClarify计算训练后的偏差指标。
- **D.** Use Amazon SageMaker Model Cards to compute post-training bias metrics.
  - 使用Amazon SageMaker模型卡片来计算训练后的偏差指标。

**正确答案 / Answer: `A`**

Amazon SageMaker Clarify can analyze a dataset before training and compute pre-training bias metrics. This helps identify whether the training data contains bias against specific groups before the model is built.

AmazonSageMakerClarify可在训练前分析数据集并计算训练前的偏见指标，有助于在构建模型之前识别训 练数据是否对特定群体存在偏见。

---

## Question 430  `#430`

**EN** An Al practitioner wants to use Retrieval Augmented Generation (RAG) architecture. However, company leadership thinks RAG will make the architecture too complex. Which response will support the Al practitioner's recommendation to use RAG?

**中** 一位人工智能从业者希望采用检索增强生成（RAG）架构，但公司管理层认为RAG会使架构过于复杂。 哪种回应将支持AI从业者使用RAG的建议？

- **A.** RAG improves large language model (LLM) inference time.
  - RAG可以提升大语言模型（LLM）的推理速度。
- **B.** RAG improves model training speed.
  - RAG提高了模型的训练速度。
- **C.** RAG decreases hallucinations.
  - RAG减少了幻觉。
- **D.** RAG decreases development controls.
  - RAG减少了开发管控。

**正确答案 / Answer: `C`**

Retrieval Augmented Generation grounds model responses in relevant external or enterprise data retrieved at inference time. This helps the model produce more accurate, context-supported answers and reduceshallucinations.

检索增强生成通过在推理时检索相关的外部或企业数据，为模型响应提供依据。这有助于模型生成更准确、 更具上下文支持的回答，并减少幻觉现象。

---

## Question 431  `#431`

**EN** A company built a Retrieval Augmented Generation (RAG) based Al assistant by using Amazon Bedrock Agents. Sometimes the Al assistant gives incomplete or inaccurate answers. The company wants to improve and evaluate the Al assistant's performance. Which solution will meet these requirements?

**中** 一家公司使用AmazonBedrockAgents构建了一个基于检索增强生成（RAG）的AI助手。但有时该AI助 手会给出不完整或不准确的回答。该公司希望改进并评估该AI助手的性能。 哪种解决方案能满足这些要求？

- **A.** Use automated metrics such as Bilingual Evaluation Understudy (BLEU) scores to measure response similarity to reference answers.
  - 使用自动评估指标，如双语评价助手（BLEU）分数，来衡量回答与参考答案的相似度。
- **B.** Monitor response latency and token generation speed to optimize performance.
  - 监控响应延迟和令牌生成速度以优化性能。
- **C.** Evaluate only the final answer quality against ground truth responses.
  - 仅根据真实答案评估最终答案的质量。
- **D.** Confirm that the retrieved documents are relevant and that the final answers are accurate.
  - 确认所获取的文档相关性以及最终答案的准确性。

**正确答案 / Answer: `D`**

A RAG-based assistant depends on both retrieval quality and generation quality. Confirming that the retrieved documents are relevant and that the final answers are accurate evaluates the full RAG workflow and helps identify whether incomplete or inaccurate responses are caused by poor retrieval, poor generation, or both.

基于RAG的助手依赖于检索质量和生成质量。确认所检索的文档是否相关以及最终答案是否准确，可以评 估完整的RAG工作流程，并有助于判断不完整或不准确的回答是由检索不佳、生成不佳，还是两者共同导 致的。

---

## Question 432  `#432`

**EN** A company wants to develop an Al solution to automatically extract structured and unstructured data from scanned PDF documents and forms. Which AWS service will meet these requirements?

**中** 一家公司希望开发一种人工智能解决方案，用于从扫描的PDF文档和表单中自动提取结构化和非结构化数 据。 哪个AWS服务能满足这些要求？

- **A.** Amazon Polly
  - 亚马逊Polly
- **B.** Amazon Lex
  - 亚马逊Lex
- **C.** Amazon Personalize
  - 亚马逊个性化
- **D.** Amazon Textract
  - 亚马逊Textract

**正确答案 / Answer: `D`**

Amazon Textract automatically extracts text, handwriting, and data from scanned documents, PDFs, forms, and tables. It can process both structured and unstructured document content for downstream analysis or automation.

Amazon Textract可自动从扫描文档、PDF、表单和表格中提取文本、手写内容和数据。它能够处理结 构化和非结构化的文档内容，以供后续分析或自动化使用。

---

## Question 433  `#433`

**EN** A company is developing an Al solution to help make hiring decisions. Which strategy complies with AWS guidance for responsible Al?

**中** 一家公司正在开发一种人工智能解决方案，以协助做出招聘决策。 哪种策略符合AWS关于负责任的人工智能的指导原则？

- **A.** Use the Al solution to make final hiring decisions without human review.
  - 使用人工智能解决方案做出最终聘用决定，无需人工审核。
- **B.** Train the Al solution exclusively on data from previous successful hires.
  - 仅使用以往成功招聘的数据来训练人工智能解决方案。
- **C.** Test the Al solution to ensure that it does not discriminate against any protected groups.
  - 测试人工智能解决方案，确保其不对任何受保护群体进行歧视。
- **D.** Keep the Al decision-making process confidential to maintain a competitive advantage.
  - 为保持竞争优势，应将人工智能的决策过程保密。

**正确答案 / Answer: `C`**

Responsible Al requires evaluating systems for fairness and potential bias, especially in high-impact use cases such as hiring. Testing the solution for discrimination against protected groups helps ensure the Al system supports fair and accountable decision-making.

负贵任的人工智能需要对系统进行公平性和潜在偏见的评估，尤其是在招聘等高影响的应用场景中。通 过测试解决方案是否对受保护群体存在歧视，有助于确保人工智能系统支持公平且可问贵的决策。

---

## Question 434  `#434`

**EN** An Al practitioner is developing a recommendation system. The Al practitioner wants to document a business problem, data assumptions, training considerations, and usage risks. The company must follow guidelines for transparency and governance. Which Amazon SageMaker Al feature will meet these requirements?

**中** 一位人工智能从业者正在开发一个推荐系统。该从业者希望记录业务问题、数据假设、训练注意事项以 及使用风险。公司必须遵循透明度和治理方面的指导方针。 哪个AmazonSageMaker人工智能功能能满足这些要求？

- **A.** Model Registry
  - 模型注册表
- **B.** Model Cards
  - 模型卡片
- **C.** Model Monitor
  - 模型监控
- **D.** Model Dashboard
  - 模型仪表盘

**正确答案 / Answer: `B`**

Amazon SageMaker Model Cards document important model details such as the intended business problem, assumptions, training information, evaluation results, limitations, risks, and usage considerations. This supports transparency, governance, and responsible Al practices.

AmazonSageMaker模型卡片记录了模型的重要细节，例如预期的业务问题、假设条件、训练信息、评估 结果、局限性、风险试及使用注意事项。这有助于提升透明度、实现治理，并支持负贵任的人工智能实 践。

---

## Question 435  `#435`

**EN** A company that runs Al workloads on Amazon Bedrock needs to evaluate and document compliance with regulatory standards. Which AWS service or feature meets these requirements?

**中** 在AmazonBedrock上运行AI工作负载的公司需要评估并记录对监管标准的合规性。 哪个AWS服务或功能满足这些要求？

- **A.** AWS Audit Manager
  - AWS审计管理器
- **B.** Amazon SageMaker Model Cards
  - 亚马逊SageMaker模型卡片
- **C.** Amazon SageMaker Model Monitor
  - 亚马逊SageMaker模型监控
- **D.** AWS Artifact
  - AWS服务文档

**正确答案 / Answer: `A`**

AWs Audit Manager helps evaluate and document compliance with regulatory standards by continuously collecting evidence from AwS resources and mapping it to compliance frameworks. This supports audit preparation and governance for Al workloads running on AwS.

AWSAuditManager通过持续收集AWS资源中的证据并将其映射到合规框架，帮助评估和记录对监管 标准的合规性。这有助于为在AWS上运行的人工智能工作负载做好审计准备并加强治理。

---

## Question 436  `#436`

**EN** A company wants to use foundation models (FMs) for multiple use cases, including content summarization, code generation, and customer service Al assistants. Which solution will implement FMs MOST cost-effectively?

**中** 一家公司希望将基础模型（FMs）用于多种应用场景，包括内容摘要、代码生成以及客户服务AI助手。 哪种方案能以最具成本效益的方式实施FMs？

- **A.** Select the smallest model that meets the performance requirements for each specific use case.
  - 为每个特定使用场景选择满足性能要求的最小模型。
- **B.** Use the largest and most capable model available for all tasks to ensure quality.
  - 对所有任务使用当前最大且功能最强的模型，以确保质量。
- **C.** Build and train a custom FM for each individual use case.
  - 为每个具体使用场景构建并训练一个定制的FM。
- **D.** Use batch processing for all inference requests to reduce the costs and latency for each request.
  - 对所有推理请求使用批量处理，以降低每次请求的成本和延迟。

**正确答案 / Answer: `A`**

Selecting the smallest foundation model that meets the performance requirements helps control inference cost while still achieving the needed output quality for each use case. Different tasks have different complexity levels, so matching model size to the task is the most cost-effective approach.

选择满足性能要求的最小基础模型，有助于在控制推理成本的同时，为每个应用场景实现所需的输出质量。 不同任务具有不同的复杂程度，因此将模型大小与任务相匹配是最具成本效益的方法。

---

## Question 437  `#437`

**EN** An Al practitioner wants to quickly deploy and fine-tune foundation models (FMs) for generative Al (GenAl) tasks. The Al practitioner needs access to pre-trained models, solution templates, and example notebooks that can accelerate the development process. Which AWS feature or resource meets these requirements?

**中** 一位人工智能从业者希望快速部署并微调用于生成式人工智能（GenAI）任务的基础模型（FMs）。该从业 者需要获取预训练模型、解决方案模板以及示例笔记本，以加快开发进程。 哪个AWS功能或资源符合这些要求？

- **A.** Amazon SageMaker Studio
  - 亚马逊 SageMaker Studio
- **B.** Amazon SageMaker JumpStart
  - 亚马逊SageMaker JumpStart
- **C.** Amazon Bedrock model catalog
  - Amazon Bedrock模型目录
- **D.** Amazon SageMaker Canvas
  - 亚马逊 SageMaker Canvas

**正确答案 / Answer: `B`**

Amazon SageMaker JumpStart provides access to pre-trained foundation models, built-in solution templates, and example notebooks. It helps practitioners quickly deploy, evaluate, and fine-tune models for generative Al use cases.

AmazonSageMakerJumpStart提供了预训练的基础模型、内置的解决方案模板以及示例笔记本，可帮助从业 者快速部署、评估和微调适用于生成式人工智能场景的模型。

---

## Question 438  `#438`

**EN** A human resources company is building an Al/ML solution to screen resumes and select relevant applicants for various job roles. Which Al methodologies will help ensure impartial treatment for all demographic groups? (Choose two.)

**中** 一家人力资源公司正在开发一种人工智能/机器学习解决方案，用于筛选简历并为不同职位挑选合 适的请人。业的。 哪些人工智能方法论有助于确保对所有人口群体进行公正对待？（选择两项。）

- **A.** Modularity
  - 模块化
- **B.** Fairness
  - 公平性
- **C.** Explainability
  - 可解释性
- **D.** Secrecy
  - 保密
- **E.** Underfitting
  - 欠拟合

**正确答案 / Answer: `B,C`**

Fairness helps ensure that the Al/ML solution treats demographic groups impartially and avoids biased outcomes. Explainability helps stakeholders understand how the model makes screening decisions, which supports transparency, accountability, and bias detection in a high-impact hiring use case.

公平性有助于确保人工智能/机器学习解决方案对不同人口群体一视同仁，避免产生偏见结果。可解释性则 帮助相关方理解模型如何做出筛选决策，从而在高影响的招聘场景中支持透明度、问责制以及偏见检测。

---

## Question 439  `#439`

**EN** A company needs to evaluate Al-generated summaries against reference text. The company must measure semantic similarity and coverage of key information. Which metrics meet these requirements? (Choose two.)

**中** 公司需要将人工智能生成的摘要与参考文本进行比对评估，必须衡量语义相似度以及关键信息的覆 盖情况。口 哪些指标符合这些要求？（选择两项。）

- **A.** F1 score
  - F1分数
- **B.** BERTScore
  - BERTScore
- **C.** Bilingual Evaluation Understudy (BLEU) score
  - 双语评估下级（BLEU）分数
- **D.** Accuracy
  - 准确性
- **E.** Recall-Oriented Understudy for Gisting Evaluation (ROUGE)
  - 用于摘要评估的召回导向型副手（ROUGE)

**正确答案 / Answer: `B,E`**

BERTScore evaluates semantic similarity by comparing contextual embeddings between generated and reference text. Recall-Oriented Understudy for Gisting Evaluation measures overlap and coverage of important words or phrases, making it well suited for evaluating summaries against reference text.

BERTScore通过比较生成文本与参考文本之间的上下文嵌入来评估语义相似性。面向召回的摘要评估方 法（Recall-OrientedUnderstudyforGistingEvaluation）则衡量重要词语或短语的重叠度和覆盖范围，茵此 特别适用于将摘要与参考文本进行对比评估。人员量主美金主量支度量

---

## Question 440  `#440`

**EN** A company needs to document an ML model's purpose, owners, and limitations. Which AWS service or feature provides this capability?

**中** 企业需要记录机器学习模型的目的、所有者和局限性。 哪个AWS服务或功能提供了此功能？

- **A.** Amazon Bedrock
  - 亚马逊Bedrock
- **B.** AWS AI Service Cards
  - AWSAI服务卡片
- **C.** AWS Prescriptive Guidance
  - AWS 规范性指导
- **D.** Amazon SageMaker Model Cards
  - 亚马逊SageMaker模型卡片

**正确答案 / Answer: `D`**

Amazon SageMaker Model Cards provide a structured way to document an ML model's purpose, owners, intended use, limitations, risks, and evaluation details. This supports transparency, governance, and responsible Al practices.

Amazon SageMaker模型卡片提供了一种结构化的方式来记录机器学习模型的目的、所有者、预期用途、局 限性、风险以及评估细节，有助于提升透明度、实现治理并践行负责任的人工智能实践。

---

## Question 441  `#441`

**EN** A company is training a foundation model (FM). The company wants the FM training data to be well managed, secure, and compliant throughout the data lifecycle. The data must follow governance practices. Which option is an AWS data governance strategy for managing data across the data lifecycle?

**中** 一家公司正在训练一个基础模型（FM），。该公司希望在数据生命周期的各个阶段，对FM的训练数据进行妥 善管理、确保安全并符合合规要求。数据必须遵循治理规范。口 哪个选项是AWS数据治理策略，用于管理数据的整个生命周期？

- **A.** Allow unrestricted access to all data for every employee.
  - 允许所有员工无限制地访问所有数据。
- **B.** Store data indefinitely without classification or retention policies.
  - 无限期存储数据，无需分类或保留策略。
- **C.** Rely solely on manual reviews for data quality and compliance.
  - 仅依赖人工审核来确保数据质量和合规性。
- **D.** Establish data lifecycle policies, access controls, logging, and monitoring.
  - 制定数据生命周期策略、访问控制、日志记录和监控措施。

**正确答案 / Answer: `D`**

Establishing data lifecycle policies, access controls, logging, and monitoring helps ensure that training data is managed securely, governed properly, and kept compliant throughout its lifecycle.

制定数据生命周期策略、访问控制、日志记录和监控措施，有助于确保训练数据在其整个生命周期内得到安 全管理、规范治理并保持合规。、的主合

---

## Question 442  `#442`

**EN** HOTSPOT A company is using Amazon Bedrock AgentCore to build, deploy, and implement agents at scale. The company needs to identify which resources to use. Select the correct AgentCore resource from the following list for each description. Select each resource one time or not at all. Hot Area: Monitoragentbehaviorthrough intuitivedashboards Monitoragentbenaviorthrougnintuitivedashboarasy Select oelectohiit Observability CodeInterpreter codemterpreter Browsertool Runtime Runtime Gateway Memory [Memory Fxecutecodesecurelyacrossmultiplelanguages Executecodesecureryacrossmurtplelanguagesy Select. obccrvobility Observability CodeInterpreter Browcortopletel Browsertool Runtime Fcatow [Gateway [Memory Fast securoand seryerlecsbrowser runtimefor agents Fast,secure,andserveriessbrowserruntimeforagents Select oelect.biit Observability CodeInterpreter Codeiterpreter Browsertool Runtime Runtime Gateway Memor-：- [Memory

**中** 热点 一家公司正在使用AmazonBedrockAgentCore来构建、部署和大规模实施代理。该公司需要确定应使 用哪些资源。合 从以下列表中为每个描述选择正确的AgentCore资源。每个资源只能选择一次或不选。 热门区域： Monitor agent behavior through intuitive dashboards Select.. Observability Code Interpreter Browsertool Runtime Gateway Memory Executecodesecurelyacrossmultiplelanguages Select... Observability Code Interpreter Browsertool Runtime Gateway HAmAA Livielury Fast, secure, and serverless browser runtime for agents Select... Observability CodeInterpreter Browsertool Runtime [Gateway [Memory


**正确答案 / Answer: ``**

Observability Code Interpreter Browser tool Amazon Bedrock AgentCore Observability is used to monitor agent behavior with dashboards and operational telemetry. AgentCore Code Interpreter enables agents to securely execute code in supported languages. AgentCore Browser tool provides a fast, secure, serverless browser runtime that agents can use to interact with websites and web applications.

可观测性代码 解释器浏览器 工具 Amazon Bedrock AgentCore可观测性功能通过仪表板和运行时遥测数据来监控代理行为。AgentCore 代码解释器使代理能够安全地执行支持的语言代码。AgentCore浏览器工具提供了一种快速、安全 的无服务器浏览器运行环境，代理可利用其与网站和网络应用程序进行交互。

---

## Question 443  `#443`

**EN** HOTSPOT A company wants to use Amazon Bedrock to create a knowledge base from existing documents. The documents include text, tables, and images. Select and order the steps from the following list to correctly describe how to convert data from the documents into a knowledge base by using an ingestion process in Amazon Bedrock. Select each step one time or not at all. Hot Area: step Ste Convertthechunksintovectorembeddings. Dividethodetadintochunkectoreinbeuangs: Dividethedata intochunks. Parsethedocuments. sedata eventsto createadata lineage usedataeventstocreateadatalineage.o UseRetrievalAugmentedGeneration(RAG)toretrieverelevantcontent. Writethevectorembeddingstothevectorstore wtethevectorembeddingstothevectorstore. step2 Stepz Convertthechunksintovectorembeddings. Dividethodetadintochunkectorenbedangs Dividethedata into chunks. Parsethedocuments. sedata eventsto createadata lineage usedataeventstocreateadatalineage. UseRetrievalAugmentedGeneration(RAG)to retrieverelevantcontent. Writethevectorembeddingstothevector store wntethevectorembedaingstothevectorstore. Step3 Steps Convertthechunksintovectorembeddings. Dividethodetadintochunkectorebedangs Dividethedata intochunks. Parsethedocuments. sedataeventsto createadatalineage Usedataeventstocreateadatalineage. UseRetrievalAugmentedGeneration(RAG)to retrieverelevantcontent. Writethevectorembeddinastothevector store Wnte the vector embedaings to tne vector store. step4 otep4 [Convertthechunks intovectorembeddings. piidethedetodintochunkectornbeuangs. Dividethedataintochunks. Parsethedocuments. lsedata events to createadatalineage- usedataeventstocreateadatalineage. UseRetrievalAugmentedGeneration(RAG)toretrieverelevantcontent. Writethevectorembeddingstothevectorstorew wntethevectorembeddingstothevectorstore.

**中** 热点 一家公司希望使用AmazonBedrock从现有文档中创建知识库。这些文档包含文本、表格和图像。 请从以下列表中选择并按正确顺序排列步骤，以准确描述如何通过Amazon Bedrock中的摄取流程 将文档中的数据转换为知识库。每个步骤只能选择一次或不选。 热门区域： Step 1 Convert the chunks into vector embeddings. Divide thedata into chunks. Parsethedocuments. Use data events to create a data lineage. UseRetrieval Augmented Generation (RAG)to retrieve relevant content. Writethevectorembeddingstothevectorstore. Step2 Convert the chunks into vector embeddings. Divide the data into chunks. Parsethedocuments. Use data events to create a data lineage. Use Retrieval Augmented Generation(RAG)to retrieve relevantcontent. Writethevectorembeddingstothevectorstore. Step3 Convert the chunks into vector embeddings. Dividethedataintochunks. Parsethedocuments. Use data events to create a data lineage. UseRetrieval Augmented Generation (RAG)to retrieve relevantcontent. Write the vector embeddings to the vector store. Step4 Convert thechunks into vector embeddings. Dividethedatainto chunks. Parsethedocuments. Use data events to create a data lineage. Use Retrieval Augmented Generation (RAG) to retrieve relevant content. Write the vector embeddings to the vector store.


**正确答案 / Answer: ``**

Step 1: Parse the documents. Step 2: Divide the data into chunks. Step 3: Convert the chunks into vector embeddings. Step 4: Write the vector embeddings to the vector store. Amazon Bedrock knowledge base ingestion starts by parsing the source documents, including supported content such as text, tables, and images. The parsed data is then split into chunks, converted into vector embeddings, and stored in a vector store so the knowledge base can retrieve relevant content later during RAG-based responses.

第一步：解析文档。 步骤2：将数据分割成干块。 步骤3：将文本块转换为向量嵌入。步骤4：将向量嵌入 写入向量存储。 AmazonBedrock知识库的导入过程首先解析源文档，包括支持的内容类型，如文本、表格和图像。解析后 的数据会被分割成若干片段，转换为向量嵌入，并存储在向量数据库中，以便在基于检索增强生成（RAG) 的响应过程中能够检索到相关的内容。

---

## Question 444  `#444`

**EN** A company wants to establish a data governance framework for its Al system. The framework must give the company the ability to monitor when data is generated, updated, and scheduled for deletion. Which data governance component meets these requirements?

**中** 一家公司希望为其人工智能系统建立一个数据治理框架。该框架必须使公司能够监控数据的生成、更新 以及计划删除的时间。 哪个数据治理组件满足这些要求？

- **A.** Data residency
  - 数据驻留
- **B.** Data lifecycle management
  - 数据生命周期管理
- **C.** Data observability
  - 数据可观测性
- **D.** Data logging
  - 数据记录

**正确答案 / Answer: `B`**

Data lifecycle management defines and monitors how data is created, updated, retained, archived, and deleted. This supports governance by ensuring data is managed appropriately throughout its full lifecycle.

数据生命周期管理定义并监控数据的创建、更新、保留、归档和删除过程。这有助于实现治理，确保数据 在其整个生命周期中得到妥善管理。已、在。定。主

---

## Question 445  `#445`

**EN** A company is building an agentic Al application by using Model Context Protocol (MCP) servers with Amazon Q Developer CLI. The company wants to follow MCP security practices. Which solutions will meet these requirements? (Choose two.)

**中** 一家公司正在使用Amazon.QDeveloperCLI配合ModelContextProtocol（MCP）服务器构建一个代理 式AI应用程序。该公司希望遵循MCP安全实践。 哪些解决方案可以满足这些要求？（选择两项。）

- **A.** Keep MCP servers and the Amazon Q Developer CLI updated.
  - 保持MCP服务器和AmazonQ开发者CLI的更新。
- **B.** Monitor MCP logs for normal successful activity.
  - 监控MCP日志，查看正常成功的操作记录。
- **C.** Use plain text files to store sensitive configurations.
  - 使用纯文本文件存储敏感配置。
- **D.** Automatically approve all tools that are provided by MCP servers.
  - 自动批准所有由MCP服务器提供的工具。
- **E.** Install servers only from trusted sources.
  - 仅从可信来源安装服务器。

**正确答案 / Answer: `A,E`**

Keeping MCP servers and Amazon Q Developer CLI updated helps reduce security exposure from known vulnerabilities. Installing MCP servers only from trusted sources helps prevent malicious or unverified tools from gaining access to agent workflows, configurations, or sensitive data.

保持MCP服务器和AmazonQDeveloperCLI的更新，有助于降低因已知漏洞导致的安全风险。仅从可信来 源安装MCP服务器，可防止恶意或未经验证的工具访问代理工作流、配置或敏感数据。

---

## Question 446  `#446`

**EN** A company is using a foundation model (FM) to create product descriptions. The model sometimes provides incorrect information. Which potential risk of generative Al does this describe?

**中** 一家公司正在使用基础模型（FM）来生成产品描述，但该模型有时会提供错误的信息。 这描述的是生成式人工智能的哪种潜在风险？

- **A.** Toxicity
  - 毒性
- **B.** Hallucinations
  - 幻觉
- **C.** Interpretability
  - 可解释性
- **D.** Deterministic outputs
  - 确定性输出

**正确答案 / Answer: `B`**

Hallucinations occur when a generative Al model produces incorrect or fabricated information while presenting it as factual. In this case, the foundation model is generating product descriptions that sometimes contain inaccurate details.

当生成式人工智能模型在呈现信息时，将其错误或虚构的内容当作事实输出，就会发生幻觉现象。 在此情况下，基础模型生成的产品描述有时会包含不准确的细节。

---

## Question 447  `#447`

**EN** A company is using a generative Al (GenAl) system to generate medical summaries from patient records. The system sometimes produces inaccurate information that appears credible. Which strategy will mitigate the issue?

**中** 一家公司正在使用生成式人工智能（GenAI）系统从患者病历中生成医疗摘要。该系统有时会产生看似可 信但实际不准确的信息。 哪种策略可以缓解该问题？

- **A.** Implement strict input validation and output formatting rules.
  - 实施严格的输入验证和输出格式化规则。
- **B.** Implement Retrieval Augmented Generation (RAG) to ground responses.
  - 实施检索增强生成（RAG）以确保回答的准确性。
- **C.** Use smaller, more transparent models for medical applications.
  - 在医疗应用中使用更小、更透明的模型。
- **D.** Increase computational resources and model size.
  - 增加计算资源和模型规模。

**正确答案 / Answer: `B`**

Retrieval Augmented Generation grounds generated medical summaries in trusted patient records or approved medical sources. This helps reduce credible but inaccurate outputs by giving the model relevant factual context to use when generating responses.

检索增强生成技术通过将生成的医疗摘要基于可信的患者记录或经批准的医学来源，有助于减少虽可信但 不准确的输出，使模型在生成回复时能够利用相关的事实背景。

---

## Question 448  `#448`

**EN** A company wants to call a single Amazon Bedrock endpoint and needs Amazon Bedrock to pick the most suitable foundation model (FM) for each request. The company does not want to hardcode a model. Which Amazon Bedrock feature or resource will meet these requirements?

**中** 一家公司希望调用单个AmazonBedrock端点，并要求AmazonBedrock为每个请求选择最合适的基底模型 （FM）。该公司不希望硬编码指定某个模型。 哪个AmazonBedrock功能或资源能满足这些要求?

- **A.** Amazon Bedrock Guardrails
  - 亚马逊Bedrock安全防护
- **B.** Amazon Bedrock Knowledge Bases
  - 亚马逊Bedrock知识库
- **C.** Amazon Bedrock prompt router
  - 亚马逊Bedrock提示路由器
- **D.** Amazon Bedrock agent memory
  - Amazon Bedrock代理内存

**正确答案 / Answer: `C`**

Amazon Bedrock prompt router lets an application call a single endpoint while Amazon Bedrock selects the most appropriate foundation model for each request. This avoids hardcoding a specific model and supports dynamic model selection based on the prompt.

AmazonBedrock提示路由功能允许应用程序调用单一端点，而AmazonBedrock会为每个请求选择最合 适的基底模型。这避免了硬编码特定模型，并支持根据提示动态选择模型。

---

## Question 449  `#449`

**EN** A global logistics company is using generative Al (GenAl) models on Amazon Bedrock to automate paperwork and shipment documentation. The company wants to set up a clear Al governance process to make sure the models are used responsibly and meet company policies. Which solutions will meet these requirements? (Choose two.)

**中** 一家全球物流公司在AmazonBedlrock上使用生成式人工智能（GenAI）模型来自动化文书工作和货运文件 处理。该公司希望建立清晰的人工智能治理流程，以确保模型得到负责任地使用，并符合公司政策。 哪些解决方案能够满足这些要求？（选择两项。）

- **A.** Set up a regular review process to check that the models' results are accurate and fair and follow company policies.
  - 建立定期审查流程，以确保模型结果的准确性、公平性，并符合公司政策。
- **B.** Provide training for all employees who work with Al tools so the employees understand company rules, data handling, and responsible Al use.
  - 为所有使用人工智能工具的员工提供培训，使其了解公司规定、数据处理方法以及负责任地使用人工智 能。
- **C.** Let the cloud provider manage all Al safety checks and reviews to save internal effort.
  - 让云服务提供商负责管理所有AI安全检查和审核，以节省内部工作量。
- **D.** Involve only developers in governance reviews because the developers build and deploy the Al systems.
  - 仅让开发人员参与治理审查，因为开发人员负责构建和部署人工智能系统。
- **E.** Review the models only when users report problems or errors in the system.
  - 仅在用户报告系统出现问题或错误时，才审查模型。

**正确答案 / Answer: `A,B`**

A regular review process helps verify that generative Al outputs remain accurate, fair, and aligned with company policies. Employee training ensures that people who use Al tools understand responsible Al practices, data handling expectations, and governance requirements.

定期的审查流程有助于确保生成式人工智能的输出结果保持准确、公正，并符合公司政策。员工培训可 确保使用AI工具的人员了解负责任的AI实践、数据处理规范以及治理要求。

---

## Question 450  `#450`

**EN** A company is using Retrieval Augmented Generation (RAG) in its generative Al (GenAl) application. The company wants to use Amazon Bedrock Knowledge Bases evaluations to measure how well responses avoid hallucination based on the retrieved texts. Which metric meets these requirements?

**中** 一家公司正在其生成式人工智能（GenAI）应用中使用检索增强生成（RAG）。这个 公司希望利用AmazonBedrock知识库的评估功能，来衡量回复在基于检索文本时避免幻觉的效果如何。 哪个指标符合这些要求？

- **A.** Refusal
  - 拒绝
- **B.** Harmfulness
  - 有害性
- **C.** Stereotyping
  - 刻板印象
- **D.** Faithfulness
  - 忠诚

**正确答案 / Answer: `D`**

Faithfulness measures whether the generated response is grounded in and supported by the retrieved texts. This metric helps evaluate whether a RAG application avoids hallucinations by checking that the answer remains consistent with the source context.

忠实度衡量生成的回答是否基于并得到所检索文本的支持。该指标有助于评估RAG应用是否避免了幻觉， 通过检查回答与源上下文的一致性来实现。

---

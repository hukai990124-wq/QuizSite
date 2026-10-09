# AWS AIF-C01 AI 真题库（452 题） · 第 01 份

> 题目 1–50 · 中英对照 · 来源：扫描版 AWS AI 题库（452 题，中英对照）

## Question 1  `#1`

**EN** A company makes forecasts each quarter to decide how to optimize operations to meet expected demand. The company uses ML models to make these forecasts. An Al practitioner is writing a report about the trained ML models to provide transparency and explainability to company stakeholders. What should the Al practitioner include in the report to meet the transparency and explainability requirements?

**中** 该公司每季度都会进行预测，以决定如何优化运营来满足预期需求。该公司使用机器学习模型来进行这些预 测。 一位人工智能从业者正在撰写一份关于已训练的机器学习模型的报告，以便向公司相关方提供透明度和可解 释性。 人工智能从业者应在报告中包含哪些内容才能满足透明度和可解释性的要求？

- **A.** Code for model training
  - 模型训练代码
- **B.** Partial dependence plots (PDPs)
  - 部分依赖图(PDPs)
- **C.** Sample data for training
  - 用于训练的示例数据
- **D.** Model convergence tables
  - 模型收敛表

**正确答案 / Answer: `B`**

Partial Dependence Plots (PDPs) are a powerful tool for understanding and explaining how the features in a machine learning model impact predictions. They are often used to meet transparency and explainability requirements for stakeholders. Let's go over why this is the correct choice, along with why the other options are less suitable: Partial Dependence Plots (PDPs) Purpose: PDPs show the relationship between a feature (or muitiple features) and the model's predicted output, which helps to explain the effect of each feature on the model's predictions. Explainability: By visualizing how each feature influences the prediction, stakeholders can better understand how the model works and why it makes certain predictions. This level of interpretability is essential for gaining trust from non-technical stakeholders. Transparency: PDPs improve transparency by providing an intuitive way to analyze and present the effects of individual features.

部分依赖图（PDP）是一种强大的工具，有助于理解机器学习模型中的特征如何影响预测结果，并对其进 行解释。它们常用于满足利益相关者对透明度和可解释性的要求。让我们来探讨一下为什么这是正确的选 择，以及为什么其他选项不太合适： 部分依赖图（PDPs) 目的：部分依赖图（PDP）展示了某个特征（或多个特征）与模型预测输出之间的关系，有助于解释每个 特征对模型预测结果的影响。证（证，这领的 可解释性：通过可视化每个特征如何影响预测，利益相关者能够更好地理解模型的工作原理以及它为 何做出某些预测。这种程度的可解释性对于赢得非技术利益相关者的信任至关重要。 透明度：PDP（部分依赖图）通过提供一种直观的方式来分析和展示各个特征的影响，从而提高了透 明度。

---

## Question 2  `#2`

**EN** A law firm wants to build an Al application by using large language models (LLMs). The application will read legal documents and extract key points from the documents. Which solution meets these requirements?

**中** 一家律师事务所想要利用大型语言模型（LLM）开发一款人工智能应用程序。该应用程序将阅读法律文 件并从文件中提取关键要点。 哪种解决方案能满足这些要求？

- **A.** Build an automatic named entity recognition system.
  - 构建一个自动命名实体识别系统。
- **B.** Create a recommendation engine.
  - 创建一个推荐引擎。
- **C.** Develop a summarization chatbot.
  - 开发一个摘要聊天机器人。
- **D.** Develop a multi-language translation system.
  - 开发一个多语言翻译系统。

**正确答案 / Answer: `C`**

A summarization chatbot can effectively read legal documents and generate concise versions that highlight key points. This directly addresses the requirement of extracting essential information, unlike the other options, which focus on different tasks.

一款摘要聊天机器人能够高效阅读法律文件，并生成突出关键要点的简洁版本。这直接满足了提取核心信 息的需求，而其他选项则专注于不同的任务。

---

## Question 3  `#3`

**EN** A company wants to classify human genes into 20 categories based on gene characteristics. The company needs an ML algorithm to document how the inner mechanism of the model affects the output. Which ML algorithm meets these requirements?

**中** 一家公司希望根据基因特征将人类基因分为20类。该公司需要一种机器学习算法来记录模型内部机制如 何影响输出结果。 哪种机器学习算法能满足这些要求？

- **A.** Decision trees
  - 决策树
- **B.** Linear regression
  - 线性回归
- **C.** Logistic regression
  - 逻辑回归
- **D.** Neural networks
  - 神经网络

**正确答案 / Answer: `A`**

Decision trees provide clear transparency into how the model makes decisions, allowing easy documentation of how the inner mechanism influences the output. The other options do not offer this level of interpretability.

决策树清晰地展示了模型如何做出决策，便于记录内部机制如何影响输出。其他选项则无法提供这种程度 的可解释性。

---

## Question 4  `#4`

**EN** A company has built an image classification model to predict plant diseases from photos of plant leaves. The company wants to evaluate how many images the model classified correctly. Which evaluation metric should the company use to measure the model's performance?

**中** 一家公司构建了一个图像分类模型，用于从植物叶片的照片中预测植物病害。该公司希望评估该模型正确 分类了多少张图像。 公司应该使用哪种评估指标来衡量模型的性能？

- **A.** R-squared score
  - 决定系数（R²分数)
- **B.** Accuracy
  - 准确性
- **C.** Root mean squared error (RMSE)
  - 均方根误差(RMSE)
- **D.** Learning rate
  - 学习率

**正确答案 / Answer: `B`**

Accuracy measures how many images were correctly classified out of the total images, making it the appropriate metric for evaluating the performance of an image classification model. The other metrics are either not suitable for classification tasks or not used for performance evaluation.

准确率衡量的是在所有图像中正确分类的图像数量，因此它是评估图像分类模型性能的恰当指标。其他指 标要么不适合分类任务，要么不用于性能评估。

---

## Question 5  `#5`

**EN** A company is using a pre-trained large language model (LLM) to build a chatbot for product recommendations. The company needs the LLM outputs to be short and written in a specific language. Which solution will align the LLM response quality with the company's expectations?

**中** 一家公司正在使用一个预训练的大语言模型（LLM）来构建一个用于产品推荐的聊天机器人。该公司需 要该语言模型的输出简短，并且使用特定的语言。 哪种解决方案能使大语言模型的响应质量符合公司的期望？

- **A.** Adjust the prompt.
  - 调整提示。
- **B.** Choose an LLM of a different size.
  - 选择一个不同规模的大型语言模型。
- **C.** Increase the temperature.
  - 升高温度。
- **D.** Increase the Top K value.
  - 提高TopK的值。

**正确答案 / Answer: `A`**

Adjusting the prompt allows you to specify the desired length and language of the LLM's responses, making it suitable for tailoring the output to meet the company's needs. The other options do not directly control response length or language.

调整提示内容可让您指定LLM回复的期望长度和语言，从而使其输出能够满足公司的需求。其他选项并 不能直接控制回复的长度或语言。

---

## Question 6  `#6`

**EN** A company uses Amazon SageMaker for its ML pipeline in a production environment. The company has large input data sizes up to 1 GB and processing times up to 1 hour. The company needs near real-time latency. Which SageMaker inference option meets these requirements?

**中** 一家公司在生产环境中使用亚马逊SageMaker来运行其机器学习流程。该公司处理的数据量大，单个数据 集可达1GB，处理时间长达1小时，但其需要近乎实时的响应延迟。 哪种SageMaker推理选项符合这些要求?

- **A.** Real-time inference
  - 实时推理
- **B.** Serverless inference
  - 无服务器推理
- **C.** Asynchronous inference
  - 异步推理
- **D.** Batch transform
  - 批量转换

**正确答案 / Answer: `C`**

Asynchronous inference is suitable for handling large input data and long processing times while still providing responses without blocking other requests. It allows for near real-time latency, whereas the other options are less suitable given the input size and processing time constraints.

异步推理适合处理大型输入数据和较长的处理时间，同时仍能提供响应而不阻塞其他请求。它能够实现接近 实时的延迟，而其他选项由于输入大小和处理时间的限制则不太适用。

---

## Question 7  `#7`

**EN** A company is using domain-specific models. The company wants to avoid creating new models from the beginning. The company instead wants to adapt pre-trained models to create models for new, related tasks. Which ML strategy meets these requirements?

**中** 一家公司正在使用特定领域的模型。该公司希望避免从头开始创建新模型。相反，该公司希望对预训练模 型进行调整，以创建适用于新相关任务的模型。 哪种机器学习策略能满足这些要求？

- **A.** Increase the number of epochs.
  - 增加训练轮数。
- **B.** Use transfer learning.
  - 使用迁移学习。
- **C.** Decrease the number of epochs.
  - 减少训练轮数。
- **D.** Use unsupervised learning.
  - 使用无监督学习。

**正确答案 / Answer: `B`**

Transfer learning allows the company to adapt pre-trained models for new, related tasks, saving time and resources compared to training models from scratch. The other options do not address the goal of reusing existing models.

迁移学习使公司能够将预训练模型应用于新的相关任务，与从头开始训练模型相比，节省了时间和资源。 其他选项并未涉及复用现有模型这一目标。

---

## Question 8  `#8`

**EN** A company is building a solution to generate images for protective eyewear. The solution must have high accuracy and must minimize the risk of incorrect annotations. Which solution will meet these requirements?

**中** 一家公司正在开发一种用于生成防护眼镜图像的解决方案。该方案必须具有高精度，并且要将错误标注的 风险降至最低。 哪种解决方案能满足这些要求？

- **A.** Human-in-the-loop validation by using Amazon SageMaker Ground Truth Plus
  - 使用亚马逊SageMakerGround TruthPlus进行的人工在环验证
- **B.** Data augmentation by using an Amazon Bedrock knowledge base
  - 利用亚马逊Bedrock知识库进行数据增强
- **C.** Image recognition by using Amazon Rekognition
  - 使用亚马逊Rekognition进行图像识别
- **D.** Data summarization by using Amazon QuickSight Q
  - 使用业马逊QuickSightQ进行数据汇总

**正确答案 / Answer: `A`**

Human-in-the-loop validation ensures high accuracy by involving human reviewers to verify and correct annotations, minimizing the risk of errors in the generated images. The other options are not directly relevantforensuring annotation accuracy in imagegeneration.

“人在回路验证”通过让人工审核员验证和纠正标注内容来确保高精度，从而将生成图像中的错误风险 降至最低。其他选项与确保图像生成中的标注准确性没有直接关系。

---

## Question 9  `#9`

**EN** A company wants to create a chatbot by using a foundation model (FM) on Amazon Bedrock. The FM needs to access encrypted data that is stored in an Amazon S3 bucket. The data is encrypted with Amazon S3 managed keys (SSE-S3). The FM encounters a failure when attempting to access the S3 bucket data. Which solution will meet these requirements?

**中** 一家公司希望在亚马逊Bedrock上使用基础模型（FM）创建一个聊天机器人。该基础模型需要访问存 储在亚马逊S3存储桶中的加密数据，这些数据使用的是亚马逊S3管理的密钥（SSE-S3）进行加密。 当文件管理器尝试访问S3存储桶数据时遇到故障。 哪种解决方案能满足这些要求？

- **A.** Ensure that the role that Amazon Bedrock assumes has permission to decrypt data with the correct encryption key.
  - 确保亚马逊Bedrock所承担的角色有权使用正确的加密密钥解密数据。
- **B.** Set the access permissions for the S3 buckets to allow public access to enable access over the internet.
  - 将S3存储桶的访问权限设置为允许公共访问，以便通过互联网进行访问。
- **C.** Use prompt engineering techniques to tell the model to look for information in Amazon S3.
  - 使用提示工程技巧告知模型在亚马逊S3中查找信息。
- **D.** Ensure that the S3 data does not contain sensitive information.
  - 确保S3数据中不包含敏感信息。

**正确答案 / Answer: `A`**

The foundation model needs the appropriate permissions to decrypt the encrypted data in the S3 bucket. Ensuring that the role used by Amazon Bedrock has permission to access and decrypt the data will resolve the access failure. The other options are not suitable for addressing the encryption and permission issue.

基础模型需要适当的权限才能解密S3存储桶中的加密数据。确保亚马逊Bedrock使用的角色具有访问和 解密数据的权限，这将解决访问失败的问题。其他选项都不适合解决加密和权限问题。

---

## Question 10  `#10`

**EN** A company wants to use language models to create an application for inference on edge devices. The inference must have the lowest latency possible. Which solution will meet these requirements?

**中** 一家公司希望利用语言模型开发一款可在边缘设备上进行推理的应用程序。该推理过程必须尽可能 降低延迟。 哪种解决方案能满足这些要求？

- **A.** Deploy optimized small language models (SLMs) on edge devices.
  - 在边缘设备上部署优化的小型语言模型（SLM）。
- **B.** Deploy optimized large language models (LLMs) on edge devices.
  - 在边缘设备上部署优化的大语言模型（LLM）。
- **C.** Incorporate a centralized small language model (SLM) API for asynchronous communication with edge devices.
  - 集成一个集中式的小型语言模型（SLM）API，用于与边缘设备进行异步通信。
- **D.** Incorporate a centralized large language model (LLM) API for asynchronous communication with edge devices.
  - 集成一个集中式的大型语言模型（LLM）API，用于与边缘设备进行异步通信。

**正确答案 / Answer: `A`**

Deploying optimized small language models (SLMs) directly on edge devices provides low latency for inference since the computation happens locally, avoiding the delays associated with network communication. The other options either increase latency or are less suitable for edge deployment.

在边缘设备上直接部署优化的小型语言模型（SLM）能够实现低延迟推理，因为计算在本地进行， 避免了网络通信带来的延迟。其他选项要么会增加延迟，要么不太适合边缘部署。

---

## Question 11  `#11`

**EN** A company wants to build an ML model by using Amazon SageMaker. The company needs to share and manage variables for model development across multiple teams. Which SageMaker feature meets these requirements?

**中** 一家公司希望使用亚马逊SageMaker构建机器学习模型。该公司需要在多个团队之闻共享和管理模型 开发所需的变量。“ 哪个SageMaker功能符合这些要求?

- **A.** Amazon SageMaker Feature Store
  - 亚马逊SageMaker特征存储库
- **B.** Amazon SageMaker Data Wrangler
  - 亚马逊SageMaker数据转换器
- **C.** Amazon SageMaker Clarify
  - 亚马逊 SageMaker Clarify
- **D.** Amazon SageMaker Model Cards
  - 亚马逊SageMaker模型卡片

**正确答案 / Answer: `A`**

Amazon SageMaker Feature Store is a centralized repository for storing and managing features, allowing multiple teams to share and reuse variables (features) for model development. The other options serve different purposes, such as data preprocessing or model documentation.

亚马逊SageMaker特征存储库是一个用于存储和管理特征的集中式存储库，使多个团队能够共享和重复使 用变量（特征）来进行模型开发。其他选项则服务于不同的目的，例如数据预处理或模型文档记录。

---

## Question 12  `#12`

**EN** A company wants to use generative Al to increase developer productivity and software development. The company wants to use Amazon Q Developer. What can Amazon Q Developer do to help the company meet these requirements?

**中** 一家公司希望利用生成式人工智能来提高开发人员的工作效率和软件开发水平。该公司希望使用亚马逊Q 开发者工真。工范提及中。以工 亚马逊Q开发者能做些什么来帮助公司满足这些要求？

- **A.** Create software snippets, reference tracking, and open source license tracking.
  - 创建软件代码片段、参考跟踪以及开源许可证跟踪。
- **B.** Run an application without provisioning or managing servers.
  - 无需配置或管理服务器即可运行应用程序。
- **C.** Enable voice commands for coding and providing natural language search.
  - 启用语音指令进行编码并提供自然语言搜索功能。
- **D.** Convert audio files to text documents by using ML models.
  - 利用机器学习模型将音频文件转换为文本文件。

**正确答案 / Answer: `A`**

Amazon Q Developer is designed to assist developers by generating software snippets, tracking references, and managing open source licenses, which aligns with the company's goal of increasing productivity in software development. The other options do not match the intended use of Amazon Q Developer.

亚马逊Q开发者旨在通过生成软件代码片段、跟踪引用以及管理开源许可证来帮助开发者，这与该公 司提高软件开发效率的目标相一致。其他选项与亚马逊Q开发者的预期用途不符。

---

## Question 13  `#13`

**EN** A financial institution is using Amazon Bedrock to develop an Al application. The application is hosted in a VPC. To meet regulatory compliance standards, the VPC is not allowed access to any internet traffic. Which AWS service or feature will meet these requirements?

**中** 一家金融机构正在使用亚马逊Bedrock开发一款人工智能应用程序。该应用程序托管在虚拟私有云（VPC） 中。为满足监管合规标准，该VPC不充许访尚在何互联网流量。 哪个AWS服务或功能能满足这些要求？

- **A.** AWS PrivateLink
  - AWS私有链接
- **B.** Amazon Macie
  - 亚马逊Macie
- **C.** Amazon CloudFront
  - 亚马逊CloudFront
- **D.** Internet gateway
  - 互联网网关

**正确答案 / Answer: `A`**

AWS PrivateLink allows secure, private connectivity between VPCs and AWS services without needing internet access, making it suitable for meeting regulatory compliance standards. The other options either do not provide private connectivity or require internet access.

AWSPrivateLink可在虚拟私有云（VPC）与AWS服务之间实现安全、私密的连接，无需互联网访问，因 此非常适合满足合规性标准。其他选项要么无法提供私密连接，要么需要互联网访问。

---

## Question 14  `#14`

**EN** A company wants to develop an educational game where users answer questions such as the following: "A jar contains six red, four green, and three yellow marbles. What is the probability of choosing a green marble from the jar?" Which solution meets these requirements with the LEAST operational overhead?

**中** 一家公司想要开发一款教育类游戏，游戏中用户需要回答诸如以下的问题：“一个罐子里有6颗红色弹珠、 4颗绿色弹珠和3颗黄色弹珠。从罐子里随机取出一颗弹珠，取出绿色弹珠的概率是多少？” 哪种解决方案在满足这些要求的同时，运营开销最小？

- **A.** Use supervised learning to create a regression model that will predict probability.
  - 使用监督学习创建一个回归模型来预测概率。
- **B.** Use reinforcement learning to train a model to return the probability.
  - 使用强化学习训练一个模型以返回概率值。
- **C.** Use code that will calculate probability by using simple rules and computations.
  - 使用能够通过简单规则和计算来计算概率的代码。
- **D.** Use unsupervised learning to create a model that will estimate probability density.
  - 使用无监督学习创建一个能够估计概率密度的模型。

**正确答案 / Answer: `C`**

Calculating probability in this scenario involves straightforward arithmetic, making it most efficient to use simple rules and computations. This approach requires the least operational overhead compared to using complex ML models, which are unnecessaryfor such basic tasks.

在这种情况下计算概率涉及简单的算术运算，因此使用简单的规则和计算最为高效。这种方法所需的运算 开销最小，与使用复杂的机器学习模型相比，后者对于此类基本任务来说是不必要的。

---

## Question 15  `#15`

**EN** Which metric measures the runtime efficiency of operating Al models?

**中** 哪个指标衡量运行人工智能模型的运行效率？

- **A.** Customer satisfaction score (CSAT)
  - 客户满意度得分（CSAT)
- **B.** Training time for each epoch
  - 每个周期的训练时间
- **C.** Average response time
  - 平均响应时间
- **D.** Number of training instances
  - 训练实例数量

**正确答案 / Answer: `C`**

Average response time measures how quickly an Al model produces an output, which reflects the runtime efficiency of the model. The other options do not directly measure the efficiency of operating Al models.

平均响应时间衡量的是人工智能模型生成输出的速度，这反映了模型的运行效率。其他选项并不能直接衡 量运行人工智能模型的效率。以主人度

---

## Question 16  `#16`

**EN** A company is building a contact center application and wants to gain insights from customer conversations. The company wants to analyze and extract key information from the audio of the customer calls. Which solution meets these requirements?

**中** 一家公司正在开发一个联络中心应用程序，并希望从客户对话中获取见解。该公司希望分析并从客户通话 的音频中提取关键信息。 哪种解决方案能满足这些要求？

- **A.** Build a conversational chatbot by using Amazon Lex.
  - 使用亚马逊Lex构建一个对话聊天机器人。
- **B.** Transcribe call recordings by using Amazon Transcribe.
  - 使用亚马逊转录服务转录通话录音。
- **C.** Extract information from call recordings by using Amazon SageMaker Model Monitor.
  - 使用亚马逊SageMaker模型监控器从通话录音中提取信息。
- **D.** Create classification labels by using Amazon Comprehend.
  - 使用Amazon Comprehend创建分类标签。

**正确答案 / Answer: `B`**

Amazon Transcribe converts audio recordings into text, which allows for further analysis and extraction of key information from customer conversations. The other options do not directly handle audio transcription or extraction of information from audio.

亚马逊转录服务可将音频记录转换为文本，从而能够对客户对话进行进一步分析并提取关键信息。其他选 项无法直接处理音频转录或从音频中提取信息。

---

## Question 17  `#17`

**EN** A company has petabytes of unlabeled customer data to use for an advertisement campaign. The company wants to classify its customers into tiers to advertise and promote the company's products. Which methodology should the company use to meet these requirements?

**中** 一家公司拥有数PB的未标注客户数据，打算用于广告宣传活动。该公司希望将客户分类，以使针对 不同层级的客产进行产告宣传和推广公司的产品。 公司应采用哪种方法来满足这些要求？

- **A.** Supervised learning
  - 监督学习
- **B.** Unsupervised learning
  - 无监督学习
- **C.** Reinforcement learning
  - 强化学习
- **D.** Reinforcement learning from human feedback (RLHF)
  - 从人类反馈中进行强化学习（RLHF)

**正确答案 / Answer: `B`**

Unsupervised learning is suitable for analyzing unlabeled data and grouping it into clusters or tiers, which aligns with the company's goal of classifying customers. The other methods require labeled data or are used for different types of problems.

无监督学习适用于分析未标记的数据，并将其分组为不同的簇或层级，从而 这与公司对客户进行分类的目标一致。其他方法需要有标签的数据，或者用于解决不同类型的问题。

---

## Question 18  `#18`

**EN** An Al practitioner wants to use a foundation model (FM) to design a search application. The search application must handle queries that have text and images. Which type of FM should the Al practitioner use to power the search application?

**中** 一位人工智能从业者想要使用基础模型（FM）来设计一个搜索应用程序。该搜索应用程序必须能够 处理包含文本和图像的查询。 AI实践者应使用哪种类型的全文检索（FM）来为搜索应用程序提供支持？

- **A.** Multi-modal embedding model
  - 多模态嵌入模型
- **B.** Text embedding model
  - 文本嵌入模型
- **C.** Multi-modal generation model
  - 多模态生成模型
- **D.** Image generation model
  - 图像生成模型

**正确答案 / Answer: `A`**

A multi-modal embedding model can handle both text and image queries by embedding them into a shared space, enabling the search application to process and relate different data types. The other options are not suitable for handling both text and image inputs effectively.

多模态嵌入模型能够将文本和图像查询嵌入到共享空间中，从而使搜索应用程序能够处理和关联不同类型的 数据。其他选项都不适合有效地处理文本和图像输入。

---

## Question 19  `#19`

**EN** A company uses a foundation model (FM) from Amazon Bedrock for an Al search tool. The company wants to fine-tune the model to be more accurate by using the company's data. Which strategy will successfully fine-tune the model?

**中** 一家公司使用亚马逊Bedrock提供的基础模型（FM）来开发一款人工智能搜索工具。该公司希望利用 自身数据对模型进行微调，以提高其准确性。 哪种策略能成功地微调模型？

- **A.** Provide labeled data with the prompt field and the completion field.
  - 提供带有提示字段和完成字段的标注数据。
- **B.** Prepare the training dataset by creating a .txt file that contains multiple lines in .csv format.
  - 准备训练数据集，方法是创建一个包含多行.csv格式内容的.txt文件。
- **C.** Purchase Provisioned Throughput for Amazon Bedrock.
  - 为亚马逊Bedrock购买预配置的吞吐量。
- **D.** Train the model on journals and textbooks.
  - 在期刊和教科书上训练模型。

**正确答案 / Answer: `A`**

Fine-tuning a foundation model involves training it with labeled data that contains both input prompts and corresponding expected completions to adjust the model's behavior to fit the company's needs. The other options are not directly related to the fine-tuning process using specific labeled data.

微调基础模型涉及使用包含输入提示和相应预期完成内容的标注数据对其进行训练，以调整模型的行为以 满足公司的需求。其他选项与使用特定标注数据进行微调的过程没有直接关系。

---

## Question 20  `#20`

**EN** A company wants to use Al to protect its application from threats. The Al solution needs to check if an IP address is from a suspicious source. Which solution meets these requirements?

**中** 一家公司希望利用人工智能来保护其应用程序免受威胁。该人工智能解决方案需要检查某个IP地址是否 来自可疑来源。 哪种解决方案能满足这些要求？

- **A.** Build a speech recognition system.
  - 构建一个语音识别系统。
- **B.** Create a natural language processing (NLP) named entity recognition system.
  - 构建一个自然语言处理（NLP）的命名实体识别系统。
- **C.** Develop an anomaly detection system.
  - 开发一个异常检测系统。
- **D.** Create a fraud forecasting system.
  - 构建一个欺诈预测系统。

**正确答案 / Answer: `C`**

An anomaly detection system can identify suspicious behavior, such as IP addresses that deviate from expected patterns, which helps in protecting the application from threats. The other options are not designed for detecting suspicious IP addresses.

异常检测系统能够识别可疑行为，例如偏离常规的IP地址。 预期模式，这有助于保护应用程序免受威胁。其他选项并非用于检测可疑的IP地址。

---

## Question 21  `#21`

**EN** Which feature of Amazon OpenSearch Service gives companies the ability to build vector database applications?

**中** 亚马逊OpenSearch服务的哪项功能使公司能够构建向量数据库应用程序？

- **A.** Integration with Amazon S3 for object storage
  - 与亚马逊S3集成以实现对象存储
- **B.** Support for geospatial indexing and queries
  - 对地理空间索引和查询的支持
- **C.** Scalable index management and nearest neighbor search capability
  - 可扩展的索引管理和最近邻搜索能力
- **D.** Ability to perform real-time analysis on streaming data
  - 对流数据进行实时分析的能力

**正确答案 / Answer: `C`**

The scalable index management and nearest neighbor search capability in Amazon OpenSearch Service enables companies to build vector database applications, which are crucial for tasks like similarity search in Al models. The other options do not specifically provide the vector search functionality.

亚马逊OpenSearch服务中的可扩展索引管理和最近邻搜索功能使公司能够构建向量数据库应用程序，这对 于AI模型中的相似性搜索等任务至关重要。其他选项并未专门提供向量搜索功能。

---

## Question 22  `#22`

**EN** Which option is a use case for generative Al models?

**中** 以下哪个选项是生成式人工智能模型的应用场景？

- **A.** Improving network security by using intrusion detection systems
  - 通过使用入侵检测系统来提高网络安全
- **B.** Creating photorealistic images from text descriptions for digital marketing
  - 根据文字描述生成用于数字营销的逼真图像
- **C.** Enhancing database performance by using optimized indexing
  - 通过使用优化的索引提升数据库性能
- **D.** Analyzing financial data to forecast stock market trends
  - 分析财务数据以预测股市超趋势

**正确答案 / Answer: `B`**

Generative Al models are used to create new content, such as photorealistic images from text descriptions, which is useful for digital marketing. The other options involve tasks better suited for analytical or detection systems rather than generative models.

生成式人工智能模型用于创建新内容，例如根据文字描述生成逼真的图像，这对数字营销很有用。 其他选项涉及的任务更适合分析或检测系统，而非生成式模型。

---

## Question 23  `#23`

**EN** A company wants to build a generative Al application by using Amazon Bedrock and needs to choose a foundation model (FM). The company wants to know how much information can fit into one prompt. Which consideration will inform the company's decision?

**中** 一家公司希望利用亚马逊Bedrock构建一个生成式人工智能应用程序，并需要选择一个基础模型（FM）。 该公司想知道一个提示中能容纳多少信息。一一口的在 哪项考虑因素将影响公司的决策？

- **A.** Temperature
  - 温度
- **B.** Context window
  - 上下文窗口
- **C.** Batch size
  - 批量大小
- **D.** Model size
  - 模型大小

**正确答案 / Answer: `B`**

The context window determines how much information can fit into a single prompt. It specifies the number of tokens the foundation model can process at once, affecting the length of input that can be provided. The other options do not directly relate to prompt size.

上下文窗口决定了单个提示中可以容纳多少信息。它指定了基础模型一次能够处理的标记数量，从而影响了 可以提供的输入长度。其他选项与提示大小没有直接关系。

---

## Question 24  `#24`

**EN** A company wants to make a chatbot to help customers. The chatbot will help solve technical problems without human intervention. The company chose a foundation model (FM) for the chatbot. The chatbot needs to produce responses that adhere to company tone. Which solution meets these requirements?

**中** 一家公司想要开发一个聊天机器人来帮助客户。该聊天机器人将帮助解决技术问题。 无需人工干预。 该公司为聊天机器人选择了基础模型（FM）。聊天机器人需要生成符合公司语气的回复。 哪种解决方案能满足这些要求？

- **A.** Set a low limit on the number of tokens the FM can produce.
  - 对FM可生成的标记数量设置一个较低的限制。
- **B.** Use batch inferencing to process detailed responses.
  - 使用批量推理来处理详细回复。
- **C.** Experiment and refine the prompt until the FM produces the desired responses.
  - 不断试验并优化提示，直至生成模型给出期望的回复。
- **D.** Define a higher number for the temperature parameter.
  - 将温度参数设置为一个更高的数值。

**正确答案 / Answer: `C`**

Experimenting and refining the prompt allows you to guide the FM to produce responses that align with the company's desired tone. This approach helps to shape the behavior of the chatbot. The other options do not directly ensure adherence to company tone.

通过试验和优化提示内容，您可以引导FM生成符合公司期望语气的回复。这种方法有助于塑造聊天机 器人的行为。其他选项并不能直接确保其遵循公司的语气。

---

## Question 25  `#25`

**EN** A company wants to use a large language model (LLM) on Amazon Bedrock for sentiment analysis. The company wants to classify the sentiment of text passages as positive or negative. Which prompt engineering strategy meets these requirements?

**中** 一家公司希望在亚马逊Bedrock上使用大型语言模型（LLM）进行情感分析。该公司希望将文本段落 的情感分类为积极或消极。 哪种提示工程策略能满足这些要求？

- **A.** Provide examples of text passages with corresponding positive or negative labels in the prompt followed by the new text passage to be classified.
  - 在提示中提供带有相应正向或负向标签的文本段落示例，然后给出待分类的新文本段落。
- **B.** Provide a detailed explanation of sentiment analysis and how LLMs work in the prompt.
  - 请在提示中详细解释情感分析以及大型语言模型的工作原理。
- **C.** Provide the new text passage to be classified without any additional context or examples.
  - 提供待分类的新文本段落，不要附加任何其他背景信息或示例。
- **D.** Provide the new text passage with a few examples of unrelated tasks, such as text summarization or question answering.
  - 请为新的文本段落提供一些不相关的任务示例，例如文本摘要或问答。

**正确答案 / Answer: `A`**

Providing examples with labels in the prompt helps the LLM understand the context of sentiment analysis, improving its accuracy in classifying the new text passage as positive or negative. The other options do not effectively guide the LLM for sentiment analysis.

在提示中提供带有标签的示例有助于LLM理解情感分析的上下文，从而提高其对新文本段落进行积极或 消极分类的准确性。其他选项无法有效地引导LLM进行情感分析。

---

## Question 26  `#26`

**EN** A security company is using Amazon Bedrock to run foundation models (FMs). The company wants to ensure that only authorized users invoke the models. The company needs to identify any unauthorized access attempts to set appropriate AWS Identity and Access Management (IAM) policies and roles for future iterations of the FMs. Which AWS service should the company use to identify unauthorized users that are trying to access Amazon Bedrock?

**中** 一家安保公司正在使用亚马逊Bedrock运行基础模型（FMs）。该公司希望确保只有授权用户才能调 用这些模型。公司需要识别任何未经授权的访问尝试，以便为未来基础模型的迭代设置适当的AWS 身份和访问管理（IAM）策略及角色。 该公司应使用哪项AWS服务来识别试图访问AmazonBedrock的未经授权的用户？

- **A.** AWS Audit Manager
  - AWS审计管理器
- **B.** AWS CloudTrail
  - AWS CloudTrail 服务
- **C.** AmazonFraud Detector
  - 亚马逊欺诈检测器
- **D.** AWSTrustedAdvisor
  - AWS可信顾问

**正确答案 / Answer: `B`**

AWS CloudTrail records API activity and provides a log of access attempts, which helps identify unauthorized users trying to access Amazon Bedrock. The other services are not specifically used for tracking unauthorized access attempts in this context.

AWSCloudTrail会记录API活动，并提供访问尝试的日志，这有助于识别试图访问AmazonBedrock的 未经授权的用户。在此上下文中，其他服务并非专门用于跟踪未经授权的访问尝试。

---

## Question 27  `#27`

**EN** A company has developed an ML model for image classification. The company wants to deploy the model to production so that a web application can use the model. The company needs to implement a solution to host the model and serve predictions without managing any of the underlying infrastructure. Which solution will meet these requirements?

**中** 一家公司开发了一个用于图像分类的机器学习模型。该公司希望将该模型部署到生产环境中，以使一个网 络应用程序能够使用该模型。。。6 该公司需要实施一种解决方案来托管模型并提供预测服务，同时无需管理任何底层基础设施。 哪种解决方案能满足这些要求？

- **A.** Use Amazon SageMaker Serverless Inference to deploy the model.
  - 使用AmazonSageMaker无服务器推理来部署模型。
- **B.** Use Amazon CloudFront to deploy the model.
  - 使用亚马逊CloudFront部署模型。
- **C.** Use Amazon APl Gateway to host the model and serve predictions.
  - 使用亚马逊API网关来托管模型并提供预测服务。
- **D.** Use AWS Batch to host the model and serve predictions.
  - 使用AWSBatch来托管模型并提供预测服务。

**正确答案 / Answer: `A`**

Amazon SageMaker Serverless Inference allows the company to deploy the ML model without managing any underlying infrastructure, making it suitable for hosting the model and serving predictions. The other options do not directly provide serverless model deployment capabilities.

亚马逊SageMaker无服务器推理功能使公司能够部署机器学习模型，而无需管理任何底层基础设施，这使 其非常适合托管模型并提供预测服务。其他选项并不直接提供无服务器模型部署功能。

---

## Question 28  `#28`

**EN** An Al company periodically evaluates its systems and processes with the help of independent software vendors (ISVs). The company needs to receive email message notifications when an ISV's compliance reports become available. Which AWS service can the company use to meet this requirement?

**中** 一家人工智能公司会定期借助独立软件供应商（ISV）对其系统和流程进行评估。该公司需要在独立软 件供应商的合规报告可用时收到电子邮件通知。 该公司可以使用哪种AWS服务来满足这一要求？

- **A.** AwS Audit Manager
  - AWS审计管理器
- **B.** AWS Artifact
  - AWS Artifact
- **C.** AWS Trusted Advisor
  - AWS可信顾问
- **D.** AWS Data Exchange
  - AWS数据交换

**正确答案 / Answer: `B`**

AWs Artifact provides access to compliance reports, including those from independent software vendors (ISVs). The company can use AWS Artifact to receive notifications when new compliance reports are available. The other services are not used for accessing and notifying about compliance reports.

AWSArtifact提供了获取合规报告的途径，包括来自独立软件供应商（ISV）的报告。公司可以使用AWS Artifact在有新的合规报告可用时接收通知。其他服务不用于访问和通知有关合规报告的信息。

---

## Question 29  `#29`

**EN** A company wants to use a large language model (LLM) to develop a conversational agent. The company needs to prevent the LLM from being manipulated with common prompt engineering techniques to perform undesirable actions or expose sensitive information. Which action will reduce these risks?

**中** 一家公司希望利用大型语言模型（LLM）开发一个对话代理。该公司需要防止LLM被常见的提示工程技巧 所操纵，从而执行不良行为或泄露敏感信息。 哪项行动会降低这些风险？

- **A.** Create a prompt template that teaches the LLM to detect attack patterns.
  - 创建一个提示模板，用于教导LLM检测攻击模式。
- **B.** Increase the temperature parameter on invocation requests to the LLM.
  - 在向大语言模型发出的调用请求中提高温度参数。
- **C.** Avoid using LLMs that are not listed in Amazon SageMaker.
  - 避免使用未在亚马逊SageMaker中列出的大语言模型。
- **D.** Decrease the number of input tokens on invocations of the LLM.
  - 减少调用大型语言模型时的输入标记数量。

**正确答案 / Answer: `A`**

Creating a prompt template that helps the LLM detect common attack patterns can reduce the risk of prompt injection and other undesirable manipulations. The other options do not effectively address the risk of prompt manipulation or unauthorized use.

创建一个有助于LLM检测常见攻击模式的提示模板，可以降低提示注入和其他不良操纵的风险。其他选项 无法有效应对提示操纵或未经授权使用的风险。

---

## Question 30  `#30`

**EN** A company is using the Generative Al Security Scoping Matrix to assess security responsibilities for its solutions. The company has identified four different solution scopes based on the matrix. Which solution scope gives the company the MOsT ownership of security responsibilities?

**中** 一家公司正在使用生成式人工智能安全范围矩阵来评估其解决方案的安全责任。该公司根据该矩阵确定 了四种不同的解决方案范围。 哪种解决方案范围能让公司拥有最大的安全责任自主权？

- **A.** Using a third-party enterprise application that has embedded generative Al features.
  - 使用具有嵌入式生成式人工智能功能的第三方企业应用程序。
- **B.** Building an application by using an existing third-party generative Al foundation model (FM).
  - 利用现有的第三方生成式人工智能基础模型（FM）构建应用程序。
- **C.** Refining an existing third-party generative Al foundation model (FM) by fine-tuning the model by using data specific to the business.
  - 通过使用特定于业务的数据对现有的第三方生成式人工智能基础模型（FM）进行微调来优化该模型。
- **D.** Building and training a generative Al model from scratch by using specific data that a customer owns.
  - 利用客户拥有的特定数据从零开始构建和训练生成式人工智能模型。

**正确答案 / Answer: `D`**

Building and training a generative Al model from scratch gives the company the most ownership of security responsibilities, as it involves full control over data, training, deployment, and security measures. The other options involve varying levels of dependency on third-party tools and services, which reduces the company's ownership of security.

从头开始构建和训练生成式人工智能模型能让公司最大程度地承担起安全责任，因为这涉及对数据、训练、 部署和安全措施的全面掌控。而其他选项则不同程度地依赖第三方工具和服务，这会降低公司对安全的责 任归属。

---

## Question 31  `#31`

**EN** An Al practitioner has a database of animal photos. The Al practitioner wants to automatically identify and categorize the animals in the photos without manual human effort. Which strategy meets these requirements?

**中** 一位人工智能从业者拥有一份动物照片的数据库。该从业者希望在无需人工干预的情况下自动识别并分类 照片中的动物。 哪种策略符合这些要求？

- **A.** Object detection
  - 目标检测
- **B.** Anomaly detection
  - 异常检测
- **C.** Named entity recognition
  - 命名实体识别
- **D.** Inpainting
  - 修复（图像修复)

**正确答案 / Answer: `A`**

Object detection is used to automatically identify and categorize objects (in this case, animals) in photos. It can detect the presence of animals and classify them accordingly. The other strategies are not suitable for identifying and categorizing animals in images.

目标检测用于自动识别和分类照片中的物体（在此例中为动物）。它能够检测出动物的存在并进行相应分类。 其他策略不适合用于识别和分类图像中的动物。

---

## Question 32  `#32`

**EN** A company wants to create an application by using Amazon Bedrock. The company has a limited budget and prefers flexibility without long-term commitment. Which Amazon Bedrock pricing model meets these requirements?

**中** 一家公司希望利用亚马逊Bedrock来开发一款应用程序。该公司预算有限，更倾向于灵活选择，而不愿做 出长期承诺。国 哪种亚马逊Bedrock定价模式符合这些要求？

- **A.** On-Demand
  - 按需（服务）
- **B.** Model customization
  - 模型定制
- **C.** Provisioned Throughput
  - 配置吞吐量
- **D.** Spot Instance
  - 竞价实例

**正确答案 / Answer: `A`**

The On-Demand pricing model provides flexibility without requiring a long-term commitment, allowing the company to pay only for the resources used, which fits well with a limited budget. The other options are either not relevant to pricing flexibility or involve specific resource commitments.

按需定价模式提供了灵活性，无需长期承诺，公司只需为所使用的资源付费，这非常适合预算有限的情 况。其他选项要么与定价灵活性无关，要么涉及特定的资源承诺。

---

## Question 33  `#33`

**EN** Which AWS service or feature can help an Al development team quickly deploy and consume a foundation model (FM) within the team's VPC?

**中** 哪种AWS服务或功能可以帮助AI开发团队在其VPC内快速部署和使用基础模型（FM）？

- **A.** AmazonPersonalize
  - 亚马逊个性化服务
- **B.** Amazon SageMaker JumpStart
  - 亚马逊SageMaker快速入门
- **C.** PartyRock, an Amazon Bedrock Playground
  - PartyRock，亚马逊Bedrock游乐场
- **D.** Amazon SageMaker endpoints
  - 亚马逊SageMaker端点

**正确答案 / Answer: `B`**

Amazon SageMaker JumpStart provides pre-built models, including foundation models, that can be quickly deployed and consumed within a VPC, helping teams get started faster. The other options are not designed for deploying foundation models in this context.

亚马逊SageMakerJumpStart提供了预构建的模型，包括基础模型，这些模型可以在VPC内快速部署和使 用，帮助团队更快地启动项目。其他选项在此情况下并非为部署基础模型而设计。

---

## Question 34  `#34`

**EN** How can companies use large language models (LLMs)securely on Amazon Bedrock?

**中** 公司如何在亚马逊Bedrock上安全地使用大型语言模型（LLM）？

- **A.** Configure AWS Identity and Access Management (IAM) roles and policies by using least privilege access.
  - 使用最小权限访问原则配置AWS身份和访问管理（IAM）角色和策略。
- **B.** Enable AWS Audit Manager for automatic model evaluation jobs.
  - 启用AWS审计管理器以自动执行模型评估任务。
- **C.** Enable Amazon Bedrock automatic model evaluation jobs.
  - 启用AmazonBedrock自动模型评估任务。
- **D.** Use Amazon CloudWatch Logs to make models explainable and to monitor for bias.
  - 使用Amazon CloudWatch Logs使模型具有可解释性，并监控是否存在偏差。

**正确答案 / Answer: `A`**

Designing clear prompts and using IAM roles with least privilege access ensures secure use of LLMs on Amazon Bedrock by minimizing access risks and preventing misuse. The other options do not directly address securing the use of LLMs.

设计清晰的提示并使用具有最小权限访问的IAM角色，可确保在亚马逊Bedrock上安全使用LLM，从 而降低访问风险并防止误用。其他选项并未直接解决LLM使用的安全问题。

---

## Question 35  `#35`

**EN** A company has terabytes of data in a database that the company can use for business analysis. The company wants to build an Al-based application that can build a SQL query from input text that employees provide. The employees have minimal experience with technology. Which solution meets these requirements?

**中** 一家公司拥有数太字节的数据存储在数据库中，可用于业务分析。该公司希望开发一个基于人工智能的 应用程序，能够根据员工提供的输入文本生成SQL查询。这些员工对技术的了解非常有限。 哪种解决方案能满足这些要求？

- **A.** Generative pre-trained transformers (GPT)
  - 生成式预训练转换器（GPT)
- **B.** Residual neural network
  - 残差神经网络
- **C.** Support vector machine
  - 支持向量机
- **D.** WaveNet
  - WaveNet

**正确答案 / Answer: `A`**

GPT models are well-suited for converting natural language input into structured queries like SQL, making them ideal for building an Al-based application that translates employee-provided text into SQL queries. The other options are not designed for natural language understanding and query generation tasks.

GPT模型非常适合将自然语言输入转换为结构化查询（如SQL），因此它们非常适合用于构建基于人工智 能的应用程序，将员工提供的文本转换为SQL查询。其他选项并非为自然语言理解和查询生成任务而设计。

---

## Question 36  `#36`

**EN** A company built a deep learning model for object detection and deployed the model to production. Which Al process occurs when the model analyzes a new image to identify objects?

**中** 一家公司构建了一个用于物体检测的深度学习模型，并将该模型投入生产。 当模型分析一张新图像以识别其中的物体时，发生了哪种人工智能处理过程？

- **A.** Training
  - 培训
- **B.** Inference
  - 推理
- **C.** Model deployment
  - 模型部署
- **D.** Bias correction
  - 偏差校正

**正确答案 / Answer: `B`**

Inference is the process where the model analyzes new data (in this case, a new image) to make predictions or identify objects. The other options are related to different stages of the Al lifecycle, such as building or preparing the model.

推理是模型分析新数据（在此例中为新图像）以进行预测或识别对象的过程。其他选项则与人工智能生命 周期的不同阶段相关，例如构建或准备模型。

---

## Question 37  `#37`

**EN** An Al practitioner is building a model to generate images of humans in various professions. The Al practitioner discovered that the input data is biased and that specific attributes affect the image generation and create bias in the model. Which technique will solve the problem?

**中** 一位人工智能从业者正在构建一个生成从事不同职业的人类图像的模型。该从业者发现输入数据存在偏差， 某些特定属性会影响图像生成，并在模型中造成偏差。 哪种技术能解决这个问题？

- **A.** Data augmentation for imbalanced classes
  - 针对类别不平衡的数据增强
- **B.** Model monitoring for class distribution
  - 类别分布的模型监控
- **C.** Retrieval Augmented Generation (RAG)
  - 检索增强生成(RAG)
- **D.** Watermark detection for images
  - 图像水印检测

**正确答案 / Answer: `A`**

Data augmentation for imbalanced classes helps address bias by creating a more balanced dataset, ensuring that different attributes are equally represented. This reduces bias in image generation. The other options do not directly address data bias issues.

针对类别不平衡的数据增强有助于通过创建更平衡的数据集来解决偏差问题，确保不同属性得到同等的体现。 这减少了图像生成中的偏差。其他选项并不能直接解决数据偏差问题。

---

## Question 38  `#38`

**EN** A company is using an Amazon Titan foundation model (FM) in Amazon Bedrock. The company needs to supplement the model by using relevant data from the company's private data sources. Which solution will meet this requirement?

**中** 一二家公司正在亚马逊Bedrock中使用亚马逊泰坦基础模型（FM）。该公司需要通过使用来自公司私有数据 源的相关数据来补充该模型。 哪种解决方案能满足这一要求？

- **A.** Use a different FM.
  - 使用不同的调频。
- **B.** Choose a lower temperature value.
  - 选择一个较低的温度值。
- **C.** Create an Amazon Bedrock knowledge base.
  - 创建一个亚马逊Bedrock知识库。
- **D.** Enable model invocation logging.
  - 启用模型调用日志记录。

**正确答案 / Answer: `C`**

Creating an Amazon Bedrock knowledge base allows the company to supplement the foundation model with relevant data from their private data sources. This ensures that the model has access to the additional, context-specific information needed. The other options do not directly address supplementing the model with private data.

创建亚马逊Bedrock知识库使该公司能够用其私有数据源中的相关数据来补充基础模型。这确保了模 型能够获取所需的额外特定上下文信息。其他选项并未直接涉及用私有数据来补充模型。

---

## Question 39  `#39`

**EN** A medical company is customizing a foundation model (FM) for diagnostic purposes. The company needs the model to be transparent and explainable to meet regulatory requirements. Which solution will meet these requirements?

**中** 一家医疗公司正在为诊断目的定制一个基础模型（FM）。该公司需要该模型具有透明度和可解释性， 以满足监管要求。口工工。义质量位 哪种解决方案能满足这些要求？

- **A.** Configure the security and compliance by using Amazon Inspector.
  - 使用AmazonInspector配置安全性和合规性。
- **B.** Generate simple metrics, reports, and examples by using Amazon SageMaker Clarify.
  - 使用AmazonSageMakerClarify生成简单的指标、报告和示例。
- **C.** Encrypt and secure training data by using Amazon Macie.
  - 使用亚马逊Macie对训练数据进行加密和保护。
- **D.** Gather more data. Use Amazon Rekognition to add custom labels to the data.
  - 收集更多数据。使用亚马逊Rekognition为数据添加自定义标签。

**正确答案 / Answer: `B`**

Amazon SageMaker Clarify helps with transparency and explainability by generating metrics, reports, and examples that show how the model makes decisions, which is essential for meeting regulatory requirements. The other options are not directly related to improving the model's transparency or explainability.

亚马逊SageMakerClarify通过生成指标、报告和示例来帮助提高透明度和可解释性，展示模型如何做出 决策，这对于满足监管要求至关重要。其他选项与提高模型的透明度或可解释性没有直接关系。

---

## Question 40  `#40`

**EN** A company wants to deploy a conversational chatbot to answer customer questions. The chatbot is based on a fine-tuned Amazon SageMaker JumpStart model. The application must comply with multiple regulatory frameworks. Which capabilities can the company show compliance for? (Choose two.)

**中** 一家公司希望部署一个对话式聊天机器人来回答客户的问题。该聊天机器人基于经过微调的亚马逊 SageMakerJumpStart模型。该应用程序必须符合多个监管框架。 该公司能够证明符合哪些能力？（选择两项。）

- **A.** Auto scaling inference endpoints
  - 自动扩展推理端点
- **B.** Threat detection
  - 威胁检测
- **C.** Data protection
  - 数据保护
- **D.** Cost optimization
  - 成本优化
- **E.** Loosely coupled microservices
  - 松耦合的微服务

**正确答案 / Answer: `B,C`**

Threat detection: Ensuring security measures are in place to detect threats is important for compliance with regulatory frameworks. Data protection: Proper data handling and protection measures are key compliance aspects, especially in applications dealing with sensitive customer information. The other options (auto scaling, cost optimization, and loosely coupled microservices) are more related to performance and architecture rather than regulatory compliance.

威胁检测：确保采取适当的安全措施来检测威胁对于符合监管框架的要求至关重要。 数据保护：恰当的数据处理和保护措施是合规的关键方面，尤其是在处理敏感客户信息的应用程序中。 其他选项（自动扩展、成本优化和松散耦合的微服务）更多地与性能和架构相关，而非与合规性相关。

---

## Question 41  `#41`

**EN** A company is training a foundation model (FM). The company wants to increase the accuracy of the model up to a specific acceptance level. Which solution will meet these requirements?

**中** 一家公司正在培训一个基础模型（FM）。该公司希望提高该模型的准确性。 达到特定的接受水平。 哪种解决方案能满足这些要求？

- **A.** Decrease the batch size.
  - 减小批次规模。
- **B.** Increase the epochs.
  - 增加训练轮数。
- **C.** Decrease the epochs.
  - 减少训练轮数。
- **D.** Increase the temperature parameter.
  - 提高温度参数。

**正确答案 / Answer: `B`**

Increasing the number of epochs allows the model to train for more iterations, improving its accuracy until the model reaches an optimal level. The other options are either less effective or unrelated to improving accuracy.

增加训练轮数可以让模型进行更多的选代训练，从而提高其准确性，直至模型达到最优水平。其他选项要 么效果较差，要么与提高准确性无关。

---

## Question 42  `#42`

**EN** A company is building a large language model (LLM) question answering chatbot. The company wants to decrease the number of actions call center employees need to take to respond to customer questions. Which business objective should the company use to evaluate the effect of the LLM chatbot?

**中** 一家公司正在开发一个大型语言模型（LLM）问答聊天机器人。该公司希望减少客服人员回应客户问题所 需的操作步骤。 公司应当采用哪个业务目标来评估LLM聊天机器人的效果？

- **A.** Website engagement rate
  - 网站参与率
- **B.** Average call duration
  - 平均通话时长
- **C.** Corporate social responsibility
  - 企业社会责任
- **D.** Regulatory compliance
  - 合规监管

**正确答案 / Answer: `B`**

Reducing the average call duration directly indicates how effectively the LLM chatbot is helping call center employees answer customer questions, thus reducing the number of actions needed. The other options are not directly related to the performance of a call center chatbot.

平均通话时长的缩短直接表明了LLM聊天机器人在帮助呼叫中心员工回答客户问题方面的有效性，从而减 少了所需的操作步骤。其他选项与呼叫中心聊天机器人的性能并无直接关联。

---

## Question 43  `#43`

**EN** Which functionality does Amazon SageMaker Clarify provide?

**中** 亚马逊SageMakerClarify提供了哪些功能?

- **A.** Integrates a Retrieval Augmented Generation (RAG) workflow
  - 集成了检索增强生成（RAG）工作流
- **B.** Monitors the quality of ML models in production
  - 监控生产环境中机器学习模型的质量
- **C.** Documents critical details about ML models
  - 记录有关机器学习模型的关键细节
- **D.** Identifies potential bias during data preparation
  - 在数据准备过程中识别潜在偏差

**正确答案 / Answer: `D`**

Amazon SageMaker Clarify helps detect potential bias in datasets and models during data preparation, training, and deployment. It also provides tools for explainability. The other options are functionalities that do not directly match SageMaker Clarify's core features.

亚马逊SageMakerClarify可帮助在数据准备、训练和部署期间检测数据集和模型中潜在的偏差。它还提供 了可解释性工具。其他选项的功能与SageMakerClarify的核心功能并不直接匹配。

---

## Question 44  `#44`

**EN** A company is developing a new model to predict the prices of specific items. The model performed well on the training dataset. When the company deployed the model to production, the model's performance decreased significantly. What should the company do to mitigate this problem?

**中** 一家公司正在开发一种新模型来预测特定商品的价格。该模型在训练数据集上表现良好。但当公司将该模型 投入生产使用时，其性能却大幅下降。 公司应该采取什么措施来缓解这个问题？

- **A.** Reduce the volume of data that is used in training.
  - 减少用于训练的数据量。
- **B.** Add hyperparameters to the model.
  - 向模型添加超参数。
- **C.** Increase the volume of data that is used in training.
  - 增加用于训练的数据量。
- **D.** Increase the model training time.
  - 增加模型训练时间。

**正确答案 / Answer: `C`**

Increasing the volume of data used in training helps the model generalize better to new, unseen data, reducing overfitting and improving performance in production. The other options either do not address the issue of model generalization or are unlikely to effectively solve the problem.

增加训练中使用的数据量有助于模型更好地泛化到新的、未见过的数据上，减少过拟合并提高生产环境中 的性能。其他选项要么没有解决模型泛化的问题，要么不太可能有效地解决该问题。

---

## Question 45  `#45`

**EN** An ecommerce company wants to build a solution to determine customer sentiments based on written customer reviews of products. Which AWS services meet these requirements? (Choose two.)

**中** 一家电子商务公司想要构建一个解决方案，根据客户对产品的书面评价来确定客户的感受。 哪些AWS服务符合这些要求？（选择两项。）

- **A.** Amazon Lex
  - 亚马逊莱克斯
- **B.** Amazon Comprehend
  - 亚马逊comprehend
- **C.** Amazon Polly
  - 亚马逊波利（Amazon Polly）
- **D.** Amazon Bedrock
  - 亚马逊Bedrock
- **E.** Amazon Rekognition
  - 亚马逊Rekognition

**正确答案 / Answer: `B,D`**

Amazon Comprehend: This service is specifically designed for natural language processing (NLP)tasks, including sentiment analysis, making it ideal for analyzing customer reviews. Amazon Bedrock: Bedrock can be used to leverage foundation models, which can also be employed for sentimentanalysis tasks. The other options are not suitable for sentiment analysis of written customer reviews.

亚马逊comprehend：此服务专为自然语言处理（NLP）任务而设计，包括情感分析，非常适合用于分析客 户评论。（） 亚马逊Bedrock：Bedrock可用于利用基础模型，这些模型也可用于情感分析任务。 其他选项都不适合用于对书面客户评价进行情感分析。

---

## Question 46  `#46`

**EN** A company wants to use large language models (LLMs) with Amazon Bedrock to develop a chat interface for the company's product manuals. The manuals are stored as PDF files. Which solution meets these requirements MOsT cost-effectively?

**中** 一家公司希望利用亚马逊Bedrock平台上的大型语言模型（LLM）为公司的产品手册开发一个聊天界面。 这些手册以PDF文件的形式存储。 哪种解决方案能以最经济高效的方式满足这些要求？

- **A.** Use prompt engineering to add one PDF file as context to the user prompt when the prompt is submitted to Amazon Bedrock.
  - 使用提示工程，在将提示提交给亚马逊Bedrock时，将一个PDF文件作为上下文添加到用户提 示中。
- **B.** Use prompt engineering to add all the PDF files as context to the user prompt when the prompt is submitted to Amazon Bedrock.
  - 使用提示工程，在将用户提示提交给亚马逊Bedrock时，将所有PDF文件作为上下文添加到用户提 示中。
- **C.** Use all the PDF documents to fine-tune a model with Amazon Bedrock. Use the fine-tuned model to process user prompts.
  - 使用所有PDF文档在业马逊Bedrock上微调模型。使用微调后的模型处理用户提示。
- **D.** Upload PDF documents to an Amazon Bedrock knowledge base. Use the knowledge base to provide context when users submit prompts to Amazon Bedrock.
  - 将PDF文档上传至亚马逊Bedrock知识库。当用户向亚马逊Bedrock提交提示时，使用该知识库提供 上下文信息。

**正确答案 / Answer: `D`**

Using an Amazon Bedrock knowledge base allows the model to efficiently access relevant information from the PDF manuals when needed, reducing the cost compared to continuously fine-tuning a model or providing all PDFs as context in each prompt. This approach ensures that only necessary context is provided, making it cost-effective.

使用亚马逊Bedrock知识库能让模型在需要时高效地从PDF手册中获取相关信息，与持续微调模型或 在每次提示中都提供所有PDF作为上下文相比，这种方式降低了成本。这种方法确保只提供必要的上 下文，从而具有成本效益。

---

## Question 47  `#47`

**EN** A social media company wants to use a large language model (LLM) for content moderation. The company wants to evaluate the LLM outputs for bias and potential discrimination against specific groups or individuals. Which data source should the company use to evaluate the LLM outputs with the LEAST administrative effort?

**中** 一家社交媒体公司希望使用大型语言模型（LLM）来进行内容审核。该公司希望评估该语言模型的输出 是否存在偏见以及是否对特定群体或个人存在潜在歧视。 公司应使用哪种数据源来以最少的管理精力评估LLM输出结果？

- **A.** User-generated content
  - 用户生成内容
- **B.** Moderation logs
  - 调节日志
- **C.** Content moderation guidelines
  - 内容审核指南
- **D.** Benchmark datasets
  - 基准数据集

**正确答案 / Answer: `D`**

Benchmark datasets are standardized datasets specifically designed for evaluating models for bias and fairness, allowing for efficient assessment with minimal administrative effort. The other options would require more manual processing and might not provide a consistent basis for evaluating bias and discrimination.

基准数据集是专门设计用于评估模型是否存在偏差和不公平性的标准化数据集，能够以最小的管理成 本实现高效评估。其他选项则需要更多的手动处理，可能无法为评估偏差和歧视提供一致的基础。

---

## Question 48  `#48`

**EN** A company wants to use a pre-trained generative Al model to generate content for its marketing campaigns. The company needs to ensure that the generated content aligns with the company's brand voice and messaging requirements. Which solution meets these requirements?

**中** 一家公司希望利用一款预训练的生成式人工智能模型为其营销活动生成内容。该公司需要确保生成的 内容符合其品牌风格和信息传递的要求。 哪种解决方案能满足这些要求？

- **A.** Optimize the model's architecture and hyperparameters to improve the model's overall performance.
  - 优化模型的架构和超参数以提升模型的整体性能。
- **B.** Increase the model's complexity by adding more layers to the model's architecture.
  - 通过在模型架构中增加更多层来提高模型的复杂度。
- **C.** Create effective prompts that provide clear instructions and context to guide the model's generation.
  - 制作有效的提示，提供清晰的指令和背景信息，以引导模型生成内容。
- **D.** Select a large, diverse dataset to pre-train a new generative model.
  - 选择一个规模大且多样化的数据集来对新的生成模型进行预训练。

**正确答案 / Answer: `C`**

Creating effective prompts helps guide the pre-trained generative Al model to produce content that aligns with the company's brand voice and messaging. The other options either involve model architecture changes or require extensive training, which are not necessary for aligning content generation.

创建有效的提示有助于引导预训练的生成式人工智能模型生成符合公司品牌声音和信息传递的内容。其 他选项要么涉及模型架构的更改，要么需要大量的训练，这些对于内容生成的对齐并非必要。

---

## Question 49  `#49`

**EN** A loan company is building a generative Al-based solution to offer new applicants discounts based on specific business criteria. The company wants to build and use an Al model responsibly to minimize bias that could negatively affect some customers. Which actions should the company take to meet these requirements? (Choose two.)

**中** 一家贷款公司正在构建一个基于生成式人工智能的解决方案，根据特定的业务标准为新客户提供折扣。 该公司希望负贵任地构建和使用人工智能模型，以尽量减少可能对某些客户产生负面影响的偏见。 公司应采取哪些行动来满足这些要求？（选择两项。）

- **A.** Detect imbalances or disparities in the data.
  - 检测数据中的不平衡或差异。
- **B.** Ensure that the model runs frequently.
  - 确保模型频繁运行。
- **C.** Evaluate the model's behavior so that the company can provide transparency to stakeholders.
  - 评估模型的行为，以便公司能够向利益相关者提供透明度。
- **D.** Use the Recall-Oriented Understudy for Gisting Evaluation (ROUGE) technique to ensure that the model is 100% accurate.
  - 使用面向召回的摘要评估技术（ROUGE）来确保 该模型的准确率为100%。
- **E.** Ensure that the model's inference time is within the accepted limits.
  - 确保模型的推理时间在可接受的范围内。

**正确答案 / Answer: `A,C`**

Detect imbalances or disparities in the data: Identifying and addressing data imbalances helps minimize biases that could negatively affect customers. Evaluate the model's behavior so that the company can provide transparency to stakeholders: Evaluating the model and ensuring transparency is important for responsible Al usage, as it helps stakeholders understand how decisions are made. The other options are either not directly related to minimizing bias or do not address responsible Al development.

检测数据中的不平衡或差异：识别并解决数据不平衡问题有助于减少可能对客户产生负面影响的偏 见。 评估模型的行为，以便公司能够向利益相关者提供透明度：评估模型并确保透明度对于负责任地使用 人工智能至关重要，因为这有助于利益相关者了解决策是如何做出的。 其他选项要么与减少偏见没有直接关系，要么没有涉及负责任的人工智能开发。

---

## Question 50  `#50`

**EN** A company is using an Amazon Bedrock base model to summarize documents for an internal use case. The company trained a custom model to improve the summarization quality. Which action must the company take to use the custom model through Amazon Bedrock?

**中** 一家公司正在使用亚马逊Bedrock的基础模型来为内部用例总结文档。该公司训练了一个自定义模型以 提高总结质量。 公司若要通过亚马逊Bedrock使用自定义模型，必须采取哪项行动？

- **A.** Purchase Provisioned Throughput for the custom model.
  - 为自定义模型购买预配置的吞吐量。
- **B.** Deploy the custom model in an Amazon SageMaker endpoint for real-time inference.
  - 在Amazon SageMaker端点中部署自定义模型以进行实时推理。
- **C.** Register the model with the Amazon SageMaker Model Registry.
  - 将模型注册到Amazon SageMaker模型注册中心。
- **D.** Grant access to the custom model in Amazon Bedrock.
  - 在Amazon Bedrock中授予自定义模型的访问权限。

**正确答案 / Answer: `A,D`**


---

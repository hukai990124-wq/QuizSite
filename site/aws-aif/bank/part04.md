# AWS AIF-C01 AI 真题库（452 题） · 第 04 份

> 题目 151–200 · 中英对照 · 来源：扫描版 AWS AI 题库（452 题，中英对照）

## Question 151  `#151`

**EN** A company wants to identify harmful language in the comments section of social media posts by using an ML model. The company will not use labeled data to train the model. Which strategy should the company use to identify harmful language?

**中** 一家公司希望利用机器学习模型来识别社交媒体帖子评论区中的有害语言。该公司不会使用标注数据来训 练模型。 公司应该采用哪种策略来识别有害语言？

- **A.** Use Amazon Rekognition moderation.
  - 使用亚马逊Rekognition审核功能。
- **B.** Use Amazon Comprehend toxicity detection.
  - 使用亚马逊Comprehend毒性检测功能。
- **C.** Use Amazon SageMaker built-in algorithms to train the model.
  - 使用AmazonSageMaker内置算法训练模型。
- **D.** Use Amazon Polly to monitor comments.
  - 使用业马逊Polly监控评论。

**正确答案 / Answer: `B`**

Amazon Comprehend provides pre-trained NLP models, including toxicity detection, to analyze text for harmful language. Since the company does not plan to use labeled data for training, Amazon Comprehend is a suitable choice because it does not require custom training and can automatically detect toxic or harmful content in comments.

亚马逊Comprehend提供了预先训练好的自然语言处理模型，包括毒性检测模型，用于分析文本中是否存在 有害语言。由于该公司不打算使用标注数据进行训练，因此亚马逊Comprehend是一个合适的选择，因为它 无需定制训练，能够自动检测评论中的有毒或有害内容。

---

## Question 152  `#152`

**EN** A media company wants to analyze viewer behavior and demographics to recommend personalized content. The company wants to deploy a customized ML model in its production environment. The company also wants to observe if the model quality drifts over time. Which AWS service or feature meets these requirements?

**中** 一家媒体公司希望分析观众的行为和人口统计数据，以推荐个性化内容。该公司希望在其生产环境中 部署一个定制的机器学习模型。该公司还希望观察模型质量是否会随时间而下降。 哪个AWS服务或功能符合这些要求？

- **A.** Amazon Rekognition
  - 亚马逊Rekognition
- **B.** Amazon SageMaker Clarify
  - 亚马逊 SageMaker Clarify
- **C.** Amazon Comprehend
  - 亚马逊comprehend服务
- **D.** Amazon SageMaker Model Monitor
  - 亚马逊SageMaker模型监控器

**正确答案 / Answer: `D`**

Amazon SageMaker Model Monitor continuously tracks deployed ML models in production to detect data drift, model drift, and quality degradation over time. This is essential for ensuring that the recommendation model remains accurate as viewer behavior and demographics change. Model Monitor helps detect anomalies and provides alerts when model performance deviates from expected trends, allowing the company to take corrective action.

亚马逊SageMaker模型监控器持续跟踪生产环境中部署的机器学习模型，以检测数据漂移、模型漂移以及 随着时间推移而出现的质量下降。这对于确保推荐模型在观众行为和人口统计数据发生变化时仍保持准确 性至关重要。模型监控器有助于检测异常情况，并在模型性能偏离预期趋势时发出警报，使公司能够采取 纠正措施。

---

## Question 153  `#153`

**EN** A company is deploying Al/ML models by using AWS services. The company wants to offer transparency into the models' decision-making processes and provide explanations for the model outputs. Which AWS service or feature meets these requirements?

**中** 一家公司正在使用AWS服务部署AIML模型。该公司希望对模型的决策过程提供透明度，并对模型输出 结巢给出解释。位0 哪个AWS服务或功能符合这些要求？

- **A.** Amazon SageMaker Model Cards
  - 亚马逊SageMaker模型卡片
- **B.** Amazon Rekognition
  - 亚马逊Rekognition
- **C.** Amazon Comprehend
  - 亚马逊comprehend 服务
- **D.** Amazon Lex
  - 亚马逊Lex

**正确答案 / Answer: `A`**

Amazon SageMaker Model Cards help provide transparency into Al/ML models by documenting key details such as model purpose, training data, performance metrics, and limitations. This documentation enables organizations to explain model outputs and decision-making processes, ensuring accountability and compliance with responsible Al principles.

亚马逊SageMaker模型卡片通过记录诸如模型用途、训练数据、性能指标和局限性等关键细节，有助 于提高人工智能/机器学习模型的透明度。这种文档使组织能够解释模型输出和决策过程，确保贵任落 实并符合负责任的人工智能原则。

---

## Question 154  `#154`

**EN** A manufacturing company wants to create product descriptions in multiple languages. Which AWS service will automate this task?

**中** 一家制造公司想要用多种语言编写产品说明。 哪个AWS服务可以自动执行此任务？

- **A.** Amazon Translate
  - 亚马逊翻译
- **B.** Amazon Transcribe
  - 亚马逊转录服务
- **C.** Amazon Kendra
  - 亚马逊Kendra
- **D.** Amazon Polly
  - 亚马逊波利（Amazon Polly)

**正确答案 / Answer: `A`**

Amazon Translate is an AWS service that automates language translation using neural machine translation (NMT). It enables businesses to generate product descriptions in multiple languages quickly and accurately, making it the best choice for this task.

亚马逊翻译是一项AWS服务，它使用神经机器翻译（NMT）实现语言自动翻译。它使企业能够快 速准确地生成多种语言的产品描述，是完成此任务的最佳选择。

---

## Question 155  `#155`

**EN** HOTSPOT A company wants more customized responses to its generative Al models' prompts. Select the correct customization methodology from the following list for each use case. Each use case should be selected one time. Hot Area: Themodelsmustbetaughtanewdomain-specifictask hehodeistmastbetacghtahewdoanrspecnctashM Continuedpre-training Dataauamentationg Madedfgeno Model fine-tuning A limited amount of labeled data is available and more data is needed Amnedanountorfabeeddata tsavaableandmoredata is eeded Continued pre-training Dataauamentationg Badatgenaon Model tine-tuning Onlyunlabeleddataisavailable OyaniabeleddatasavanabieM Continuedpre-training Dataaugmentationg Madedtgetenaon [Model fine-tuning

**中** 热点 一家公司希望其生成式人工智能模型对提示的回应更具个性化。 从以下列表中为每个用例选择正确的定制方法。每个用例只能选择一次。 热点区域： Themodelsmust be taught a newdomain-specifictask Continued pre-training Data augmentation Model fine-funing A limited amount of labeled data is available and more data is needed Continued pre-training Data augmentation Model fine-tuning Onlyunlabeleddata isavailable Continued pre-training Data augmentation Model fine-tuning


**正确答案 / Answer: ``**

The models must be taught a new domain-specific task - Model fine-tuning Fine-tuning is the best approach when a model needs to learn a specific domain-related task. It involves adjusting a pre-trained model with a smaller, task-specific dataset to improve performance in that domain. A limited amount of labeled data is available and more data is needed - Data augmentation Data augmentation helps in scenarios where labeled data is scarce by artificially increasing the size and variability of the dataset, improving model generalization. Only unlabeled data is available - Continued pre-training Continued pre-training allows an existing foundation model to be further trained on domain-specific, unlabeled data to adapt to new contexts without requiring labeled data.

这些模型必须学习一项新的特定领域任务一一模型微调 当模型需要学习特定领域的任务时，微调是最佳方法。它涉及使用较小的特定任务数据集对预训练模型进 行调整，以提高该领域的性能。 可用的标注数据量有限，需要更多数据一一数据增强 数据增强在标注数据稀缺的情况下很有帮助，它通过人为地增加数据集的规模和多样性来提高模型的泛 花能力。国的位效 只有未标注的数据可用-继续预训练 持续的预训练能够让现有的基础模型在特定领域的未标注数据上进一步训练，从而适应新的情境， 需完需棕注数据。0以工：的）)

---

## Question 156  `#156`

**EN** Which AWS feature records details about ML instance data for governance and reporting?

**中** AWS的哪项功能会记录有关ML实例数据的详细信息，以用于治理和报告？

- **A.** Amazon SageMaker Model Cards
  - 亚马逊SageMaker模型卡片
- **B.** Amazon SageMaker Debugger
  - 亚马逊SageMaker调试器
- **C.** Amazon SageMaker Model Monitor
  - 亚马逊SageMaker模型监控器
- **D.** Amazon SageMaker JumpStart
  - 亚马逊SageMaker快速入门

**正确答案 / Answer: `A`**

Amazon SageMaker Model Cards record key details about machine learning models, including intended use, training data, evaluation metrics, and compliance information. They support governance and reporting by providing a standardized way to document model information throughout its lifecycle.

亚马逊SageMaker模型卡片记录了有关机器学习模型的关键细节，包括预期用途、训练数据、评估指标和合 规信息。它们通过提供一种标准化的方式来记录模型在其整个生命周期中的信息，从而支持治理和报告工作。

---

## Question 157  `#157`

**EN** A financial company is using ML to help with some of the company's tasks. Which option is a use of generative Al models?

**中** 一家金融公司正在利用机器学习来协助完成公司的一些任务。 以下哪个选项是生成式人工智能模型的应用？

- **A.** Summarizing customer complaints
  - 汇总客户投诉
- **B.** Classifying customers based on product usage
  - 根据产品使用情况对客户进行分类
- **C.** Segmenting customers based on type of investments
  - 按投资类型细分客户
- **D.** Forecasting revenue for certain products
  - 某些产品的收入预测

**正确答案 / Answer: `A`**

Generative Al models are designed to generate new content such as text, images, or audio. Summarizing customer complaints involves generating concise versions of longer texts, which is a task well-suited for generative Al models like large language models.

生成式人工智能模型旨在生成新的内容，例如文本、图像或音频。总结客户投诉涉及将较长的文本生成 简短的版本，这是大型语言模型等生成式人工智能模型擅长的任务。

---

## Question 158  `#158`

**EN** A medical company wants to develop an Al application that can access structured patient records, extract relevant information, and generate concise summaries. Which solution will meet these requirements?

**中** 一家医疗公司希望开发一款人工智能应用程序，能够访问结构化的患者记录，提取相关信息，并生成简 明抛要的摘要。业计资公三位）的合进合定的技长情信 哪种解决方案能满足这些要求？

- **A.** Use Amazon Comprehend Medical to extract relevant medical entities and relationships. Apply rule- based logic to structure and format summaries.
  - 使用AmazonComprehend Medical提取相关的医疗实体和关系。应用基于规则的逻辑来构建和格式 化摘要。
- **B.** Use Amazon Personalize to analyze patient engagement patterns. Integrate the output with a general purpose text summarization tool.
  - 利用亚马逊个性化服务来分析患者参与模式。将分析结果与通用的文本摘要工具相结合。
- **C.** Use Amazon Textract to convert scanned documents into digital text. Design a keyword extraction system to generate summaries.
  - 使用亚马逊Textract将扫描文档转换为数字文本。设计一个关键词提取系统来生成摘要。
- **D.** Implement Amazon Kendra to provide a searchable index for medical records. Use a template-based system to format summaries.
  - 部署亚马逊Kendra为医疗记录提供可搜索的索引。使用基于模板的系统来格式化摘要。

**正确答案 / Answer: `A`**

Amazon Comprehend Medical is specifically designed to extract structured medical information (such as medication, condition, test results) from unstructured text. By applying rule-based logic afterward, relevant data can be formatted into concise summaries, meeting both the extraction and summarization needs.

亚马逊ComprehendMedical专门用于从非结构化文本中提取结构化的医疗信息（例如药物、病症、检测 结果）。通过后续应用基于规则的逻辑，相关数据可以被格式化为简洁的摘要，从而满足提取和总结的 需求。

---

## Question 159  `#159`

**EN** Which option describes embeddings in the context of Al?

**中** 在人工智能的语境中，以下哪个选项描述了嵌入？

- **A.** A method for compressing large datasets
  - 一种用于压缩大型数据集的方法
- **B.** An encryption method for securing sensitive data
  - 一种用于保护敏感数据的加密方法
- **C.** A method for visualizing high-dimensional data
  - 一种用于可视化高维数据的方法
- **D.** A numerical method for data representation in a reduced dimensionality space
  - 一种用于在降维空间中表示数据的数值方法

**正确答案 / Answer: `D`**

Embeddings are numerical representations of data, such as words, images, or items, in a lower- dimensional vector space. They capture semantic relationships and patterns in the data, enabling models to process and compare inputs efficiently.

嵌入是数据（如单词、图像或项目）在低维向量空间中的数值表示。它们捕捉了数据中的语义关系和模 式，使模型能够高效地处理和比较输入。

---

## Question 160  `#160`

**EN** A company is building an Al application to summarize books of varying lengths. During testing, the application fails to summarize some books. Why does the application fail to summarize some books?

**中** 一家公司正在开发一款用于总结不同长度书籍的人工智能应用程序。在测试期间，该应用程序未 能总结出某些书籍的内容。度程性。量的 为什么这个应用程序无法总结某些书籍？

- **A.** The temperature is set too high.
  - 温度设定得太高了。
- **B.** The selected model does not support fine-tuning.
  - 所选模型不支持微调。
- **C.** The Top P value is too high.
  - 最高P值过高。
- **D.** The input tokens exceed the model's context size.
  - 输入标记超出了模型的上下文大小。

**正确答案 / Answer: `D`**

Language models have a maximum context size, which limits the number of input tokens they can process at once. If a book's length exceeds this limit, the model cannot handle the full input, leading to failure in summarization.

语言模型存在最大上下文长度的限制，这决定了其一次能够处理的输入标记数量。如果一本书的长度超 过了这个限制，模型就无法处理完整的输入内容，从而导致摘要生成失败。

---

## Question 161  `#161`

**EN** An airline company wants to build a conversational Al assistant to answer customer questions about flight schedules, booking, and payments. The company wants to use large language models (LLMs) and a knowledge base to create a text-based chatbot interface. Which solution will meet these requirements with the LEAsT development effort?

**中** 一家航空公司希望打造一个对话式人工智能助手，以回答客户有关航班时刻表、预订和支付方面的问题。 该公司打算利用大型语言模型（LLM）和知识库来创建一个基于文本的聊天机器人界面。 哪种解决方案能以最少的开发工作量满足这些要求？

- **A.** Train models on Amazon SageMaker Autopilot.
  - 在Amazon SageMaker Autopilot上训练模型。
- **B.** Develop a Retrieval Augmented Generation (RAG) agent by using Amazon Bedrock.
  - 利用亚马逊Bedrock开发一个检索增强型生成（RAG）代理。
- **C.** Create a Python application by using Amazon Q Developer.
  - 使用 Amazon Q Developer创建一个Python 应用程序。
- **D.** Fine-tune models on Amazon SageMaker Jumpstart.
  - 在Amazon SageMaker Jumpstart上微调模型。

**正确答案 / Answer: `B`**

Amazon Bedrock allows quick integration of large language models with a knowledge base using RAG architecture, enabling accurate and dynamic responses based on up-to-date information. This approach requires minimal development effort while leveraging powerful generative capabilities.

亚马逊Bedrock支持通过RAG架构将大型语言模型与知识库快速集成，从而能够基于最新信息提供 准确且动态的响应。这种方法只需极少的开发工作，同时又能充分利用强大的生成能力。

---

## Question 162  `#162`

**EN** What is tokenization used for in natural language processing (NLP)?

**中** 在自然语言处理（NLP）中，分词（tokenization）用于做什么？

- **A.** To encrypt text data
  - 对文本数据进行加密
- **B.** To compress text files
  - 压缩文本文件
- **C.** To break text into smaller units for processing
  - 将文本分解为更小的单元以进行处理
- **D.** To translate text between languages
  - 在不同语言之间进行文本翻译

**正确答案 / Answer: `C`**

Tokenization is the process of dividing text into smaller units, such as words, subwords, or characters, which can then be analyzed or processed by NLP models. It is a foundational step in preparing text data for machine learning.

分词是将文本划分为更小单元（如单词、子词或字符）的过程，这些单元随后可由自然语言处理模型 进行分析或处理。这是为机器学习准备文本数据的基础步骤。

---

## Question 163  `#163`

**EN** Which option is a characteristic of transformer-based language models?

**中** 以下哪个选项是基于变压器的语言模型的特点？

- **A.** Transformer-based language models use convolutional layers to apply filters across an input to capture local patterns through filtered views.
  - 基于Transformer的语言模型使用卷积层对输入应用滤波器，通过滤波后的视图来捕捉局部模式。
- **B.** Transformer-based language models can process only text data.
  - 基于Transformer的语言模型只能处理文本数据。
- **C.** Transformer-based language models use self-attention mechanisms to capture contextual relationships.
  - 基于Transformer的语言模型使用自注意力机制来捕捉上下文关系。
- **D.** Transformer-based language models process data sequences one element at a time in cyclic iterations.
  - 基于Transformer的语言模型在循环迭代中每次处理数据序列中的一个元素。

**正确答案 / Answer: `C`**

A key characteristic of transformer models is their use of self-attention mechanisms, which allow the model to weigh the importance of different words in a sequence relative to each other, enabling a deep understanding of context and meaning across the entire input.

变压器模型的一个关键特征是其使用了自注意力机制，这使得模型能够根据彼此的重要性对序列中的不同单 词进行加权，从而能够深入理解整个输入的上下文和含义。

---

## Question 164  `#164`

**EN** A financial company is using Al systems to obtain customer credit scores as part of the loan application process. The company wants to expand to a new market in a different geographic area. The company must ensure that it can operate in that geographic area. Which compliance laws should the company review?

**中** 一家金融公司正在使用人工智能系统获取客户的信用评分，作为贷款申请流程的一部分。该公司希望拓 展到不同地理区域的新市场。公司必须确保能够在该地理区域开展业务。 公司应该审查哪些合规法律？

- **A.** Local health data protection laws
  - 地方健康数据保护法
- **B.** Local payment card data protection laws
  - 本地支付卡数据保护法
- **C.** Local education privacy laws
  - 地方教育隐私法
- **D.** Local algorithm accountability laws
  - 地方算法问责法

**正确答案 / Answer: `D`**

When deploying Al systems that affect individuals, such as credit scoring, companies must comply with local algorithm accountability laws. These laws regulate the fairness, transparency, and impact of automated decision-making, ensuring ethical use of Al in new geographic regions.

在部署影响个人的人工智能系统（如信用评分系统）时，企业必须遵守当地的算法责任法规。这些法规 对自动化决策的公平性、透明度和影响进行规范，确保在新的地理区域以合乎道德的方式使用人工智能。

---

## Question 165  `#165`

**EN** A company uses Amazon Bedrock for its generative Al application. The company wants to use Amazon Bedrock Guardrails to detect and filter harmful user inputs and model-generated outputs. Which content categories can the guardrails filter? (Choose two.)

**中** 一家公司将其生成式人工智能应用部署在亚马逊Bedrock上。该公司希望使用业马逊Bedrock安全防护 功能来检测和过滤有害的用户输入以及模型生成的输出。 防护栏可以过滤哪些内容类别？（选择两项。）

- **A.** Hate
  - 恨意
- **B.** Politics
  - 政治
- **C.** Violence
  - 暴力
- **D.** Gambling
  - 赌博
- **E.** Religion
  - 宗教

**正确答案 / Answer: `A,C`**

Amazon Bedrock Guardrails provide configurable content filters to detect and block harmful content in generative Al applications. Specifically, they include filters for categories such as Hate and Violence, among others. These filters can be applied to both user inputs and model-generated outputs to ensure that the Al application adheres to responsible Al practices and organizational policies.

亚马逊Bedrock安全护栏提供可配置的内容过滤器，用于检测和阻止生成式人工智能应用程序中的有害内容。 具体而言，这些过滤器涵盖仇恨和暴力等类别。这些过滤器可应用于用户输入和模型生成的输出，以确保人 工智能应用程序遵循负责任的人工智能实践和组织政策。

---

## Question 166  `#166`

**EN** Which scenario describes a potential risk and limitation of prompt engineering in the context of a generative Al model?

**中** 哪种场景描述了在生成式人工智能模型的背景下提示工程的一个潜在风险和局限性？

- **A.** Prompt engineering does not ensure that the model always produces consistent and deterministic outputs, eliminating the need for validation.
  - 提示工程并不能确保模型始终生成一致且确定性的输出，因此仍需要进行验证。
- **B.** Prompt engineering could expose the model to vulnerabilities such as prompt injection attacks.
  - 提示工程可能会使模型暴露于诸如提示注入攻击之类的漏洞之中。
- **C.** Properly designed prompts reduce but do not eliminate the risk of data poisoning or model hijacking.
  - 设计合理的提示可以降低但无法完全消除数据中毒或模型劫持的风险。
- **D.** Prompt engineering does not ensure that the model will consistently generate highly reliable outputs when working with real-world data.
  - 提示工程并不能确保模型在处理真实世界的数据时始终生成高度可靠的输出。

**正确答案 / Answer: `B`**

A key risk in prompt engineering is prompt injection, where attackers manipulate input prompts to alter a model's behavior or produce unintended outputs. This vulnerability arises from the model's sensitivity to input structure and content, making it a critical limitation in secure prompt design.

提示工程中的一个关键风险是提示注入，即攻击者通过操纵输入提示来改变模型的行为或生成意外的 输出。这种漏洞源于模型对输入结构和内容的高度敏感性，这使箕成为安全提宗设计中的一个董大限 制。

---

## Question 167  `#167`

**EN** A publishing company built a Retrieval Augmented Generation (RAG) based solution to give its users the ability to interact with published content. New content is published daily. The company wants to provide a near real-time experience to users. Which steps in the RAG pipeline should the company implement by using offline batch processing to meet these requirements? (Choose two.)

**中** 一家出版公司构建了一个基于检索增强生成（RAG）的解决方案，以使用户能够与已发布的内容进行 交互。该公司每天都会发布新的内容。公司希望为用户提供近乎实时的体验。 为了满足这些要求，公司应在RAG管道的哪些步骤中使用离线批处理来实现？（选择两项。）

- **A.** Generation of content embeddings
  - 内容嵌入的生成
- **B.** Generation of embeddings for user queries
  - 用户查询的嵌入生成
- **C.** Creation of the search index
  - 搜索索引的创建
- **D.** Retrieval of relevant content
  - 相关内容的检索
- **E.** Response generation for the user
  - 为用户生成回复

**正确答案 / Answer: `A,C`**

Generation of content embeddings New or updated documents can be converted to vector representations in periodic batches (e.g., hourly, nightly). Because a document's embedding remains fixed until the document itself changes, this step does not have to run for every user query, making it ideal for offline processing. Creationofthesearch index After new embeddings are produced, the vector (or hybrid) index can be rebuilt or incrementally updated in batch mode. Index construction is computationally intensive but happens infrequently relative to user requests, so running it offline avoids adding latency to real-time interactions.

内容嵌入生成 新文档或更新后的文档可以定期批量转换为向量表示（例如每小时、每晚）。由于文档的嵌入表示在文 档本身发生变化之前保持不变，因此此步骤不必为每个用户查询运行，非常适合离线处理。 创建搜索索引 生成新的嵌入后，可以以批处理模式重建或增量更新向量（或混合）索引。索引构建计算量大，但相对 于用户请求而言不常发生，因此离线运行可避免增加实时交互的延迟。

---

## Question 168  `#168`

**EN** Which technique breaks a complex task into smaller subtasks that are sent sequentially to a large language model (LLM)?

**中** 哪种技术将一个复杂任务分解为较小的子任务，并依次发送给大型语言模型（LLM）？

- **A.** One-shot prompting
  - 一次性提示
- **B.** Prompt chaining
  - 提示链式反应
- **C.** Tree of thoughts
  - 思维之树
- **D.** Retrieval Augmented Generation (RAG)
  - 检索增强生成(RAG)

**正确答案 / Answer: `B`**

Prompt chaining involves breaking a complex task into smaller, manageable subtasks and passing them sequentially to a large language model. Each step builds upon the previous one, enabling more structured reasoningand improved task execution.

提示链式处理是指将一个复杂的任务分解为较小的、易于管理的子任务，并依次传递给大型语言模型。 每一步都以前一步为基础，从而实现更结构化的推理和更出色的任务执行。

---

## Question 169  `#169`

**EN** An Al practitioner needs to improve the accuracy of a natural language generation model. The model uses rapidly changing inventory data. Which technique will improve the model's accuracy?

**中** 一位人工智能从业者需要提高一个自然语言生成模型的准确性。该模型使用 快速变化的库存数据。 哪种技术能提高模型的准确性？

- **A.** Transfer learning
  - 迁移学习
- **B.** Federated learning
  - 联邦学习
- **C.** Retrieval Augmented Generation (RAG)
  - 检索增强生成(RAG)
- **D.** One-shot prompting
  - 一次性提示

**正确答案 / Answer: `C`**

RAG enhances a language model by fetching up-to-date, domain-specific data (e.g., current inventory) at inference time and conditioning the generation on those facts, ensuring the output reflects the latest information and improving accuracy without retraining the core model.

检索增强生成（RAG）通过在推理时获取最新的特定领域数据（例如当前库存），并根据这些事实来调整 生成内容，从而增强了语言模型，确保输出反映最新信息，提高了准确性，而无需重新训练核心模型。

---

## Question 170  `#170`

**EN** A company wants to collaborate with several research institutes to develop an Al model. The company needs standardized documentation of model version tracking and a record of model development. Which solution meets these requirements?

**中** 一家公司希望与几家研究机构合作开发一个人工智能模型。该公司需要有关模型版本追踪的标准化文档 以及模型开发记录。 哪种解决方案能满足这些要求？

- **A.** Track the model changes by using Git.
  - 使用Git跟踪模型的变更。
- **B.** Track the model changes by using Amazon Fraud Detector.
  - 使用亚马逊欺诈检测器跟踪模型变更。
- **C.** Track the model changes by using Amazon SageMaker Model Cards.
  - 使用AmazonSageMaker模型卡来跟踪模型变更。
- **D.** Track the model changes by using Amazon Comprehend.
  - 使用Amazon Comprehend跟踪模型变更。

**正确答案 / Answer: `C`**

SageMaker Model Cards provide a built-in framework for capturing and versioning key metadata, such as training data details, performance metrics, lineage, and intended use, for each model iteration. This standardized documentation and history of development fulfills requirements for model version tracking and auditable records.

SageMaker模型卡片提供了一个内置框架，用于捕获和版本化每个模型迭代的关键元数据，例如训练数据 详情、性能指标、血缘关系和预期用途。这种标准化的文档和开发历史记录满足了模型版本跟踪和可审计 记录的要求。

---

## Question 171  `#171`

**EN** A company that uses multiple ML models wants to identify changes in original model quality so that the company can resolve any issues. Which AWS service or feature meets these requirements?

**中** 一家使用多个机器学习模型的公司希望识别原始模型质量的变化，以便公司能够解决任何问题。 哪种AWS服务或功能符合这些要求？

- **A.** Amazon SageMaker JumpStart
  - 亚马逊SageMaker快速入门
- **B.** Amazon SageMaker HyperPod
  - 亚马逊 SageMaker HyperPod
- **C.** Amazon SageMaker Data Wrangler
  - 亚马逊SageMaker数据抓取器
- **D.** Amazon SageMaker Model Monitor
  - 亚马逊SageMaker模型监控器

**正确答案 / Answer: `D`**

SageMaker Model Monitor continuously measures data and prediction quality in production, detects deviations from your model's baseline (such as data drift or accuracy degradation), and alerts you so you can investigate and resolve issues promptly.

SageMaker模型监控器会持续测量生产环境中的数据和预测质量，检测模型基线的偏差（例如数据漂移或 准确率下降），并向您发出警报，以便您能够及时调查并解决问题。

---

## Question 172  `#172`

**EN** What is the purpose of chunking in Retrieval Augmented Generation (RAG)?

**中** 在检索增强生成（RAG）中，分块的目的是什么？

- **A.** To avoid database storage limitations for large text documents by storing parts or chunks of the text
  - 通过存储文本的部分内容或片段来避免大型文本文件对数据库存储空间的限制
- **B.** To improve efficiency by avoiding the need to convert large text into vector embeddings
  - 通过避免将大量文本转换为向量嵌入来提高效率
- **C.** To improve the contextual relevancy of results retrieved from the vector index
  - 为提高从向量索引中检索到的结果的相关性
- **D.** To decrease the cost of storage by storing parts or chunks of the text
  - 通过存储文本的部分内容或片段来降低存储成本

**正确答案 / Answer: `C`**

By spliting large documents into smaller, semantically coherent chunks, the retrieval system can match and return only the most context-relevant segments for a given query, enhancing the precision and accuracy of the generated responses.

通过将大型文档拆分为较小的、语义连贯的片段，检索系统能够针对给定的查询匹配并返回最相关的上 下文段落，从而提高生成响应的准确性和精确度。

---

## Question 173  `#173`

**EN** A company is developing an editorial assistant application that uses generative Al. During the pilot phase, usage is low and application performance is not a concern. The company cannot predict application usage after the application is fully deployed and wants to minimize application costs. Which solution will meet these requirements?

**中** 一家公司正在开发一款使用生成式人工智能的编辑助手应用程序。在试点阶段，使用率较低，应用程序的性 能不是问题。该公司无法预测应用程序全面部署后的使用情况，并希望将应用程序的成本降至最低。 哪种解决方案能满足这些要求？

- **A.** Use GPU-powered Amazon EC2 instances.
  - 使用由GPU提供支持的亚马逊EC2实例。
- **B.** Use Amazon Bedrock with Provisioned Throughput.
  - 使用具有预配置吞吐量的AmazonBedrock。
- **C.** Use Amazon Bedrock with On-Demand Throughput.
  - 使用按需吞吐量的Amazon Bedrock。
- **D.** Use Amazon SageMaker JumpStart.
  - 使用 Amazon SageMaker JumpStart。

**正确答案 / Answer: `C`**

On-Demand Throughput in Bedrock charges only for the inference calls you actually make, with no upfront capacity commitment. This lets you start with minimal pilot usage and elastically handle unpredictable future load while keeping costs as low as possible.

Bedrock中的按需吞吐量仅对您实际进行的推理调用收费，无需预先承诺容量。这使您能够从最小规模的试 点使用开始，并灵活应对未来不可预测的负载，同时将成本保持在尽可能低的水平。

---

## Question 174  `#174`

**EN** A company deployed a Retrieval Augmented Generation (RAG) application on Amazon Bedrock that gathers financial news to distribute in daily newsletters. Users have recently reported politically influenced ideas in the newsletters. Which Amazon Bedrock guardrail can identify and filter this content?

**中** 一家公司在亚马逊Bedrock上部署了一个检索增强生成（RAG）应用程序，用于收集财经新闻并发布在每 日简报中。最近有用户报告称，这些简报中出现了受政治影响的观点。 亚马逊Bedrock的哪项防护措施能够识别并过滤此类内容？

- **A.** Word filters
  - 词过滤器
- **B.** Denied topics
  - 禁止讨论的话题
- **C.** Sensitive information filters
  - 敏感信息过滤器
- **D.** Content filters
  - 内容过滤器

**正确答案 / Answer: `B`**

The Denied topics guardrail lets you define high-level categories (such as politics) that the model must avoid. Bedrock enforces these rules during generation, filtering out any content related to politically influenced ideas.

“被拒绝的主题”防护栏功能允许您定义模型必须避开的高级别类别（例如政治）。Bedrock在生成内 容时会强制执行这些规则，过滤掉任何与政治相关的内容。

---

## Question 175  `#175`

**EN** A financial company is developing a fraud detection system that flags potential fraud cases in credit card transactions. Employees will evaluate the flagged fraud cases. The company wants to minimize the amount of time the employees spend reviewing flagged fraud cases that are not actually fraudulent. Which evaluation metric meets these requirements?

**中** 一家金融公司正在开发一个欺诈检测系统，用于标记信用卡中的潜在欺诈案件。 交易。员工将对被标记的欺诈案件进行评估。公司希望将员工花在审查那些实际上并非欺诈的被标 记欺诈案件上的时间降至最低。 哪种评估指标符合这些要求？

- **A.** Recall
  - 召回
- **B.** Accuracy
  - 准确性
- **C.** Precision
  - 精度
- **D.** Lift chart
  - 提升图

**正确答案 / Answer: `C`**

Precision measures the proportion of flagged cases that are truly fraudulent (TP / [TP + FP). Maximizing precision reduces the number of false positives employees must review, cutting down wasted effort on non-fraudulent cases.

精确度衡量的是被标记为欺诈的案例中真正欺诈的比例（真阳性数/[真阳性数+假阳性数]）。提高精确 度可以减少员工需要审查的误报数量，从而减少在非欺诈案例上浪费的努力。

---

## Question 176  `#176`

**EN** A company designed an Al-powered agent to answer customer inquiries based on product manuals. Which strategy can improve customer confidence levels in the Al-powered agent's responses?

**中** 一家公司设计了一款基于产品手册的人工智能客服来回答客户咨询。 哪种策略能够提高客户对人工智能驱动的客服代理回复的信任度？

- **A.** Writing the confidence level in the response
  - 在回复中写明置信水平
- **B.** Including referenced product manual links in the response
  - 在回复中包含所引用的产品手册链接
- **C.** Designing an agent avatar that looks like a computer
  - 设计一个看起来像电脑的代理化身
- **D.** Training the agent to respond in the company's language style
  - 训练代理以公司的语言风格进行回应

**正确答案 / Answer: `B`**

Providing direct links to the exact sections of the product manual that support each answer lets customers verify and trust the information, boosting confidence in the Al agent's responses.

提供指向产品手册中确切章节的直接链接，以支持每个答案，这能让客户验证并信任所提供的信息，从而 增强对AI代理回复的信心。工资证，行1定治过的位信位计提值范

---

## Question 177  `#177`

**EN** A hospital developed an Al system to provide personalized treatment recommendations for patients. The Al system must provide the rationale behind the recommendations and make the insights accessible to doctors and patients. Which human-centered design principle does this scenario present?

**中** 一家医院开发了一套人工智能系统，为患者提供个性化的治疗建议。该人工智能系统必须提供建议背后的 理由，并使医生和患者都能理解其中的见解。 这个场景体现了哪种以人为本的设计原则？

- **A.** Explainability
  - 可解释性
- **B.** Privacy and security
  - 隐私与安全
- **C.** Fairness
  - 公平性
- **D.** Data governance
  - 数据治理

**正确答案 / Answer: `A`**

Explainability ensures that the Al system reveals the reasoning behind its recommendations in an understandable way, making insights transparent and accessible to both doctors and patients.

可解释性确保人工智能系统以易于理解的方式揭示其推荐背后的推理，使医生和患者都能清晰地了 解其中的觅解。一工

---

## Question 178  `#178`

**EN** Which statement presents an advantage of using Retrieval Augmented Generation (RAG) for natural language processing (NLP) tasks?

**中** 以下哪个陈述阐述了在自然语言处理（NLP）任务中使用检索增强生成（RAG）的优势？

- **A.** RAG can use external knowledge sources to generate more accurate and informative responses.
  - RAG可以利用外部知识源生成更准确、更详尽的回复。
- **B.** RAG is designed to improve the speed of language model training.
  - RAG的设计旨在提高语言模型训练的速度。
- **C.** RAG is primarily used for speech recognition tasks.
  - RAG主要用于语音识别任务。
- **D.** RAG is a technique for data augmentation in computer vision tasks.
  - RAG是计算机视觉任务中--种用于数据增强的技术。

**正确答案 / Answer: `A`**

By retrieving relevant documents or data at inference time and conditioning the generation on that external knowledge, RAG enriches model outputs with up-to-date, domain-specific information, boosting accuracy and informativeness without retraining the core model.

通过在推理时检索相关文档或数据，并将生成过程基于这些外部知识进行条件设定，检索增强生成（RAG) 能够用最新的、特定领域的信息丰富模型输出，从而提高准确性与信息量，而无需重新训练核心模型。

---

## Question 179  `#179`

**EN** A company has created a custom model by fine-tuning an existing large language model (LLM) from Amazon Bedrock. The company wants to deploy the model to production and use the model to handle a steady rate of requests each minute. Which solution meets these requirements MOsT cost-effectively?

**中** 一家公司通过微调亚马逊Bedrock上现有的大型语言模型（LLM）创建了一个定制模型。该公司希望将 该模型部署到生产环境中，并使用该模型每分钟处理稳定数量的请求。 哪种解决方案能以最经济高效的方式满足这些要求？

- **A.** Deploy the model by using an Amazon Ec2 compute optimized instance.
  - 使用亚马逊EC2计算优化型实例部署模型。
- **B.** Use the model with on-demand throughput on Amazon Bedrock.
  - 在业马逊Bedrock上使用按需吞吐量的模型。
- **C.** Store the model in Amazon S3 and host the model by using AWS Lambda.
  - 将模型存储在AmazonS3中，并使用AWSLambda来托管模型。
- **D.** Purchase Provisioned Throughput for the model on Amazon Bedrock.
  - 在业马逊Bedrock上为该模型购买预配置的吞吐量。

**正确答案 / Answer: `D`**

Provisioned Throughput is priced lower per request when you have a predictable, steady volume of calls. By committing to a fixed throughput level, you secure the necessary capacity at a reduced unit cost compared to on-demand, making it the most cost-effective choice for steady-minute usage.

当您的呼叫量可预测且稳定时，预配置的吞吐量每请求的定价会更低。通过承诺固定的吞吐量级别，您可 以以低于按需服务的单位成本获得必要的容量，从而成为稳定分钟使用量的最具成本效益的选择。

---

## Question 180  `#180`

**EN** Which technique involves training Al models on labeled datasets to adapt the models to specific industry terminology and requirements?

**中** 哪种技术涉及在有标签的数据集上训练人工智能模型，以使模型适应特定行业的术语和要求？

- **A.** Data augmentation
  - 数据增强
- **B.** Fine-tuning
  - 微调
- **C.** Model quantization
  - 模型量化
- **D.** Continuous pre-training
  - 持续预训练

**正确答案 / Answer: `B`**

Fine-tuning takes a pre-trained model and continues training it on a labeled, domain-specific dataset so the model learns industry terminology and task nuances directly from that specialized data.

微调是利用一个预训练好的模型，并在其上继续使用特定领域的带标签数据集进行训练，从而使模型直 接从这些专业数据中学习行业术语和在务的细微差别。治明

---

## Question 181  `#181`

**EN** A company is creating an agent for its application by using Amazon Bedrock Agents. The agent is performing well, but the company wants to improve the agent's accuracy by providing some specific examples. Which solution meets these requirements?

**中** 一家公司正在使用亚马逊Bedrock代理为其应用程序创建一个代理。该代理运行良好，但该公司希望 通过提供一些具体的示例来提高代理的准确性。 哪种解决方案能满足这些要求？

- **A.** Modify the advanced prompts for the agent to include the examples.
  - 修改代理的高级提示，使其包含示例。
- **B.** Create a guardrail for the agent that includes the examples.
  - 为代理创建一个包含示例的防护栏。
- **C.** Use Amazon SageMaker Ground Truth to label the examples.
  - 使用亚马逊 SageMaker Ground Truth对示例进行标注。
- **D.** Run a script in AWS Lambda that adds the examples to the training dataset.
  - 在AWSLambda中运行一个脚本，将示例添加到训练数据集中。

**正确答案 / Answer: `A`**

Embedding specific input-output examples directly into the agent's advanced prompt (few-shot prompting) guides the model toward more accurate behavior without retraining or additional tooling.

将具体的输入输出示例直接嵌入到代理的高级提示中（少样本提示），无需重新训练或使用额外工具， 即奇引导模型实现更准确的行为。主的族提《提的”的人使工

---

## Question 182  `#182`

**EN** Which option is a benefit of using infrastructure as code (laC) in machine learning operations (MLOps)?

**中** 在机器学习运维（MLOps）中使用基础设施即代码（IaC）的一个好处是什么？

- **A.** laC eliminates the need for hyperparameter tuning.
  - 基础设施即代码（IaC）消除了对超参数调整的需求。
- **B.** laC always provisions powerful compute instances, contributing to the training of more accurate models.
  - 基础设施即代码（IaC）始终能够配置强大的计算实例，有助于训练出更精准的模型。
- **C.** laC streamlines the deployment of scalable and consistent ML workloads in cloud environments.
  - 基础设施即代码（IaC）简化了在云坏境中部署可扩展且一致的机器学习工作负载的过程。
- **D.** laC minimizes overall expenses by deploying only low-cost instances.
  - 基础设施即代码通过仅部署低成本实例来降低总体费用。

**正确答案 / Answer: `C`**

By describing infrastructure in code, teams can version, automate, and repeatably provision resources, ensuring that ML training and inference environments are consistent, scalable, and easy to reproduce across development, testing, and production.

通过以代码形式描述基础设施，团队能够对基础设施进行版本控制、自动化管理以及重复配置资源， 从而确保机器学习训练和推理坏境在开发、测试和生产阶段保持一致、可扩展且易于重现。

---

## Question 183  `#183`

**EN** A company wants to fine-tune a foundation model (FM) to answer questions for a specific domain. The company wants to use instruction-based fine-tuning. How should the company prepare the training data?

**中** 一家公司希望对基础模型（FM）进行微调，以便针对特定领域回答问题。该公司希望采用基于指令 的微调方法。 公司应该如何准备训练数据？

- **A.** Gather company internal documents and industry-specific materials. Merge the documents and materials into a single file.
  - 收集公司内部文件和行业相关资料。将这些文件和资料合并为一个文件。
- **B.** Collect external company reviews from various online sources. Manually label each review as either positive or negative.
  - 从各种在线来源收集外部公司评价。人工将每条评价标注为正面或负面。
- **C.** Create pairs of questions and answers that specifically address topics related to the company's industry domain.
  - 制作与公司所在行业领域相关主题的问答对。
- **D.** Create few-shot prompts to instruct the model to answer only domain knowledge.
  - 制作少量示例提示，以指导模型仅回答领域知识。

**正确答案 / Answer: `C`**

Instruction-based fine-tuning requires a dataset of instruction-response examples. By curating question- answer pairs focused on the company's domain, you teach the model exactly how to interpret domain- specific queries and generate the correct responses during inference.

基于指令的微调需要一个指令-响应示例的数据集。通过整理专注于公司领域的问答对，您可以确切地 教会模型如何在推理过程中解读特定领域的查询并生成正确的响应。

---

## Question 184  `#184`

**EN** Which ML technique ensures data compliance and privacy when training Al models on AWs?

**中** 在AWS上训练AI模型时，哪种机器学习技术能确保数据合规性和隐私？

- **A.** Reinforcement learning
  - 强化学习
- **B.** Transfer learning
  - 迁移学习
- **C.** Federated learning
  - 联邦学习
- **D.** Unsupervised learning
  - 无监督学习

**正确答案 / Answer: `C`**

Federated learning lets you train a global model across multiple data holders (for example, different AWS accounts or edge devices) without moving raw data to a central location. Each participant trains locally on its own private dataset and only shares model updates, preserving data privacy and ensuring compliance.

联邦学习让您能够在多个数据持有者（例如不同的AWS账户或边缘设备）之间训练一个全局模型，而无 需将原始数据移动到中央位置。每个参写者都在本地使用自已的私有数据集进行训练，并宜仅共拿模型更 新，从而保护数据隐私并确保合规性。。

---

## Question 185  `#185`

**EN** HOTSPOT A company needs to customize a base model that is hosted on Amazon Bedrock. Select the correct model customization method from the following list of company requirements. Each model customization method should be selected one or more times. Hot Area: The company wants to improve themodel's performance on specific tasks and examples.Select... pSelect Continued pre-training Fine-tuning The company wants to improve themodel's domainknowledge by providing specific documents.Select... select. Continued pre-training [Fine-tuning The company wants to retrain the model by using more unlabeled data over time.Select. eSelect. Continued pre-training Fine-tuning

**中** 热点 一家公司需要对托管在亚马逊Bedrock上的基础模型进行定制。 从以下公司需求列表中选择正确的模型定制方法。每个模型定制方法可被选择一次或多次。 热点区域： The company wants to imprcve themodel's performance on specific tasks andexamples.Select.. Select. Continuedpre-training Fine-tuning Thecompanywants to improve the model'sdomain knowledge by providing specific documents.Select... Setec.. Contirtred pre-training Fine-tuning The coinpany wants to retrain the mcdel by using more unlabeled data over tine.Select.. Select Contint.edpre-tra:ning Fine-tuning


**正确答案 / Answer: ``**


---

## Question 186  `#186`

**EN** A manufacturing company has an application that ingests consumer complaints from publicly available sources. The application uses complex hard-coded logic to process the complaints. The company wants to scale this logic across markets and product lines. Which advantage do generative Al models offer for this scenario?

**中** 一家制造公司有一个应用程序，从公开来源获取消费者的投诉。该应用程序使用复杂的硬编码逻辑来处理这 些投诉。该公司希望将这种逻辑扩展到不同的市场和产品线。 在这种情况下，生成式人工智能模型具有哪些优势？

- **A.** Predictability of outputs
  - 输出的可预测性
- **B.** Adaptability
  - 适应性
- **C.** Less sensitivity to changes in inputs
  - 对输入变化的敏感度较低
- **D.** Explainability
  - 可解释性

**正确答案 / Answer: `B`**

Generative Al models can generalize learned patterns to new domains and formats with minimal manual reconfiguration. This adaptability lets you extend complaint-processing logic across different markets and product lines without rewriting complex hard-coded rules.

生成式人工智能模型能够将所学模式推广到新的领域和格式，且只需极少的人工重新配置。这种适应性使 您能够在不同的市场和产品线中扩展投诉处理逻辑，而无需重写复杂的硬编码规则。

---

## Question 187  `#187`

**EN** A financial company wants to flag all credit card activity as possibly fraudulent or non-fraudulent based on transaction data. Which type of ML model meets these requirements?

**中** 一家金融公司希望根据交易数据将所有信用卡活动标记为可能欺诈或非欺诈。 哪种类型的机器学习模型能满足这些要求？

- **A.** Regression
  - 回归分析
- **B.** Diffusion
  - 扩散
- **C.** Binary classification
  - 二分类
- **D.** Multi-class classification
  - 多类别分类

**正确答案 / Answer: `C`**

Binary classification models are designed to distinguish between two classes - fraudulent versus non- fraudulent transactions - making them the appropriate choice for this use case.

二分类模型旨在区分两类情况一一欺诈交易与非欺诈交易，因此它们是此用例的恰当选择。

---

## Question 188  `#188`

**EN** HOTSPOT A company is designing a customer service chatbot by using a fine-tuned large language model (LLM). The company wants to ensure that the chatbot uses responsible Al characteristics. Select the correct responsible Al characteristic from the following list for each application design action. Each responsible Al characteristic should be selected one time or not at all. Hot Area: Anonymizepersonal informationduring trainingdata preparationSelect... AnonynizepersonaoatondannguangdatapieparatonSelect Selvcrnance Grovernancesecurity Privacyandsecurity Safety Transparency Design the customer service chatbot to provideexplainabledecisions Select... DcoigcaotoorocroccatbotopiovaccapiaabicccoroiooSelect Selectnance Governancesecurity Privacyandsecurity Safetyn [Transparency UseAmazon Bedrock Guardrails to preventharmful output and misuse of the chatbotSelect.. CoeAaconDcarookoaararanotopicvnanaroaparanahaoocrnocnaboSelect Selectnance Governancesecuriy Privacyandsecurity Safety Transparency

**中** 热点 一家公司正在利用一个经过微调的大语言模型（LLM）设计客户服务聊天机器人。该公司希望确保聊天 机器人具备负责任的人工智能特性。 从以下列表中为每个应用设计操作选择正确的负责任的人工智能特性。每个负责任的人工智能特性应选 择一次或根本不选。 热点区域： Anonymize personal information during training data preparationSelect... Select... Govermance Privacyand security Safety Transparency Design thecustomer servicechatbotto provideexplainabledecisionsSelect... Select... Governance Privacy and security safety Transparency Use Amazon Bedrock Guardrails to prevent harmful output and misuse of the chatbotSelect.. Select... Governance Privacyand security Safety Transparency


**正确答案 / Answer: ``**


---

## Question 189  `#189`

**EN** A hospital wants to use a generative Al solution with speech-to-text functionality to help improve employee skills in dictating clinical notes. Which AWS service meets these requirements?

**中** 一家医院希望使用具备语音转文字功能的生成式人工智能解决方案，以帮助提升员工书写临床记录的口述技 能。工 哪种AWS服务能满足这些要求？

- **A.** Amazon Q Developer
  - 亚马逊Q开发者
- **B.** Amazon Polly
  - 亚马逊波利（Amazon Polly）
- **C.** Amazon Rekognition
  - 亚马逊Rekognition
- **D.** AWS HealthScribe
  - AWS HealthScribe

**正确答案 / Answer: `D`**

AWS HealthScribe is specifically designed for healthcare workflows, providing accurate speech-to-text transcription of clinical conversations and generating structured clinical notes, meeting the hospital's need to improve employee dictation of clinical documentation.

AWSHealthScribe专门针对医疗工作流程设计，能够准确地将临床对话转录为文本，并生成结构化的临床 记录，满足医院提高员工临床文档口述质量的需求。

---

## Question 190  `#190`

**EN** Which type of Al model makes numeric predictions?

**中** 哪种类型的AI模型能进行数值预测？

- **A.** Diffusion
  - 扩散
- **B.** Regression
  - 回归分析
- **C.** Transformer
  - 变压器
- **D.** Multi-modal
  - 多模态

**正确答案 / Answer: `B`**

Regression models are designed to predict continuous numerical values (for example, forecasting sales figures or estimating house prices), making them the appropriate choice for numeric predictions.

回归模型旨在预测连续的数值（例如，预测销售数据或估算房价），因此它们是进行数值预测的恰当选 择。

---

## Question 191  `#191`

**EN** HOTSPOT A company wants to use Amazon SageMaker features for various use cases. Select the correct SageMaker feature from the following list for each use case. Each SageMaker feature should be selected one time or not at all. Hot Area: Preparing data through a visual interface without using codeselect Pepanngdata tnougnavisuarintenacewnoutsingcodeelect..: Select SageMakerCanvas SageMaker Fastus Store SageMakerFeature Store SageMakerGroundTruth SageMakerJumpStart sageMakerModeoonitor SageMakerModelMonitor Finding andusing a prebuilt solutionforfraud detectionSelect PinangandusingaprebuntsorutoniorfauddeteconSelect... Select.. SageMakerCanvas SageMakerFentuae Store SageMakerFeatureStore SageMakerGroundTruth SageMakerJumpStart SageMakerMnnpoMonitor SageMakerModelMonitor CreateJabeleddatasetswithhumaninterventionSelect Createlabeleddatasetswrhumanmervenuonselect... Selecta SageMakerCanvas SageMaker Eantias Store SageMakerFeatureStore SageMakerGroundTruth SageMakerJumpStart SageMakerModeoMonitor SageMakerModelMonitor

**中** 热点 一家公司希望将亚马逊SageMaker的功能用于各种用例。 从以下列表中为每个用例选择正确的SageMaker功能。每个SageMaker功能只能选择一次或根本不选。 热点区域： Preparing data through a visual interface without using codeSelect... Select SageMakerCanvas SageMakerFeature Store SageMaker Ground Truth SageMakerJumpStart SageMaker Model Monitor Finding and using a prebuilt solution for fraud detectionSelect.. Select SageMakerCanvas SageMakerFeature Store SageMakerGroundTruth SageMakerJumpStart SageMaker Model Monitor Create labeled datasets with human interventionSelect... select SageMakerCanvas SageMakerFeature Store SageMaker Ground Truth SageMakerJumpStart SageMaker Model Monitor


**正确答案 / Answer: ``**


---

## Question 192  `#192`

**EN** What is the purpose of vector embeddings in a large language model (LLM)?

**中** 在大型语言模型（LLM）中，向量嵌入的目的是什么？

- **A.** Splitting text into manageable pieces of data
  - 将文本拆分成易于处理的数据片段
- **B.** Grouping a set of characters to be treated as a single unit
  - 将一组字符组合成一个单独的单元进行处理
- **C.** Providing the ability to mathematically compare texts
  - 提供对文本进行数学比较的能力
- **D.** Providing the count of every word in the input
  - 提供输入中每个单词的数量

**正确答案 / Answer: `C`**

Embeddings convert text into high-dimensional vectors that capture semantic relationships, allowing you to compute distances or similarities between pieces of text for tasks like retrieval or clustering.

嵌入技术将文本转换为高维向量，这些向量能够捕捉语义关系，从而让您能够计算文本片段之间的距离或相 似度，以角于检索或聚类等任务。一后

---

## Question 193  `#193`

**EN** A company wants to fine-tune a foundation model (FM) by using AWS services. The company needs to ensure that its data stays private, safe, and secure in the source AWS Region where the data is stored. Which combination of steps will meet these requirements MOsT cost-effectively? (Choose two.)

**中** 一家公司希望利用AWS服务对基础模型（FM）进行微调。该公司需要确保其数据在存储数据的源 AWS区域内保持私密、安全和保密。 哪种步骤组合能以最经济高效的方式满足这些要求？（选择两项。）

- **A.** Host the model on premises by using AWS Outposts.
  - 使用AWSOutposts在本地托管模型。
- **B.** Use the Amazon Bedrock APl.
  - 使用亚马逊BedrockAPI。
- **C.** Use AWS PrivateLink and a VPC.
  - 使用AWSPrivateLink和虚拟私有云（VPC）。
- **D.** Host the Amazon Bedrock API on premises.
  - 在本地托管AmazonBedrockAPI。
- **E.** Use Amazon CloudWatch logs and metrics.
  - 使用亚马逊CloudWatch日志和指标。

**正确答案 / Answer: `B,C`**

Use the Amazon Bedrock APl: You'll call Bedrock's managed fine-tuning endpoints directly in your AWS Region, so your data never leaves that region. Use AWS PrivateLink and a VPC: Front Bedrock API traffic through a VPC endpoint via PrivateLink to keep all network traffic on the Aws backbone and within your account's private network.

使用亚马逊BedrockAPI：您将在您的AWs区域直接调用Bedrock的托管微调端点，因此您的数据永远 不会离开该区域。一口) 使用AWSPrivateLink和VPC：通过VPC端点经由PrivateLink转发BedrockAPI流量，以确保所有网 络流量都在AWS骨干网内，并且在您账户的私有网络中传输。

---

## Question 194  `#194`

**EN** A financial company uses AWS to host its generative Al models. The company must generate reports to show adherence to international regulations for handling sensitive customer data. Which AWS service meets these requirements?

**中** 一家金融公司使用AWS来托管其生成式AI模型。该公司必须生成报告，以证明其在处理敏感客户数据 方面符合国际法规。 哪种AWS服务能满足这些要求？

- **A.** Amazon Macie
  - 亚马逊Macie
- **B.** AWS Artifact
  - AWS Artifact
- **C.** AWS Secrets Manager
  - AWS密钥管理服务
- **D.** AWS Config
  - AWS配置

**正确答案 / Answer: `B`**

AWs Artifact provides on-demand access to AWS's compliance reports and certifications (for example, ISO, SOC, GDPR), enabling the company to demonstrate its generative AI workloads and data handling practices adhere to international regulatory requirements.

AWSArtifact提供按需访问AWS的合规报告和认证（例如ISO、SOC、GDPR），使公司能够证明其生 成式AI工作负载和数据处理实践符合国际监管要求。

---

## Question 195  `#195`

**EN** A medical company wants to modernize its onsite information processing application. The company wants to use generative Al to respond to medical questions from patients. Which AWS service should the company use to ensure responsible Al for the application?

**中** 一家医疗公司希望对其现场信息处理应用程序进行现代化改造。该公司希望利用生成式人工智能来回答患 者提出的医疗尚题。 该公司应使用哪种AWS服务来确保应用程序的人工智能负责任？

- **A.** Guardrails for Amazon Bedrock
  - 亚马逊Bedrock的防护栏
- **B.** Amazon Inspector
  - 亚马逊 Inspector
- **C.** Amazon Rekognition
  - 亚马逊Rekognition
- **D.** AWS Trusted Advisor
  - AWS可信顾问

**正确答案 / Answer: `A`**

Guardrails for Amazon Bedrock let you define and enforce safety, compliance, and bias controls on generative Al workloads. By embedding these guardrails into your application, you can ensure that patient- facing responses meet medical accuracy, privacy, and regulatory requirements without having to build custom monitoring or filtering pipelines yourself.

亚马逊Bedrock的防护栏功能可让您定义并实施生成式AI工作负载的安全性、合规性和偏见控制。通过将 这些防护栏嵌入您的应用程序，您可以确保面向患者的响应符合医疗准确性、隐私和监管要求，而无需自行 构建定制的监控或过滤管道。

---

## Question 196  `#196`

**EN** Which metric is used to evaluate the performance of foundation models (FMs) for text summarization tasks?

**中** 用于评估基础模型（FMs）在文本摘要任务中的性能的指标是什么？

- **A.** F1 score
  - F1分数
- **B.** Bilingual Evaluation Understudy (BLEU) score
  - 双语评估替补（BLEU）分数
- **C.** Accuracy
  - 准确性
- **D.** Mean squared error (MSE)
  - 均方误差(MSE)

**正确答案 / Answer: `A`**

Text summarization quality is most commonly assessed using ROUGE metrics, which report recall, precision, and an F1-score that balances the two. The ROUGE-F1 (often simply called the F1 score in this context) measures how well the model's summary overlaps with reference summaries, making it the standard choice for evaluating foundation models on summarization tasks.

文本摘要的质量通常使用ROUGE指标来评估，该指标会报告召回率、准确率以及平衡这两者的FI分数。 在这一语境中，ROUGE-FI（通常简称为F1分数）衡量的是模型生成的摘要与参考摘要的重叠程度，因 此成为评估基础模型在摘要任务上表现的标准选择。

---

## Question 197  `#197`

**EN** What is the benefit of fine-tuning a foundation model (FM)?

**中** 微调基础模型（FM）有什么好处？

- **A.** Fine-tuning reduces the FM's size and complexity and enables slower inference.
  - 微调可减小特征映射的大小和复杂度，并使推理速度变慢。
- **B.** Fine-tuning uses specific training data to retrain the FM from scratch to adapt to a specific use case.
  - 微调使用特定的训练数据从头开始重新训练FM，以适应特定的用例。
- **C.** Fine-tuning keeps the FM's knowledge up to date by pre-training the FM on more recent data.
  - 微调通过在更近期的数据上对FM进行预训练，使FM的知识保持最新。
- **D.** Fine-tuning improves the performance of the FM on a specific task by further training the FM on new labeled data.
  - 微调通过在新的有标签数据上进一步训练因子分解机（FM），从而提高其在特定任务上的性能。

**正确答案 / Answer: `D`**

By updating the model's weights with task-relevant examples, fine-tuning sharpens its understanding of domain-specific language and objectives, yielding higher accuracy and relevance on that particular task.

通过使用与任务相关的示例更新模型的权重，微调能够使其对特定领域的语言和目标有更深入的理解， 众而在该特定在务上获得更高的准确性和相关性。）

---

## Question 198  `#198`

**EN** A company wants to improve its chatbot's responses to match the company's desired tone. The company has 100 examples of high-quality conversations between customer service agents and customers. The company wants to use this data to incorporate company tone into the chatbot's responses. Which solution meets these requirements?

**中** 一家公司希望改进其聊天机器人的回复，使其符合公司期望的语气。该公司拥有100个客服人员与客户 之间的高质量对话示例。公司希望利用这些数据将公司语气融入聊天机器人的回复中。 哪种解决方案能满足这些要求？

- **A.** UseAmazon Personalize togenerateresponses.
  - 使用亚马逊个性化服务生成回复。
- **B.** Create an Amazon SageMaker HyperPod pre-training job.
  - 创建一个Amazon SageMakerHyperPod预训练作业。
- **C.** Host the model by using Amazon SageMaker. Use TensorRT for large language model (LLM) deployment.
  - 使用AmazonSageMaker部署模型。对于大型语言模型（LLM）的部署，使用TensorRT。
- **D.** Create an Amazon Bedrock fine-tuning job.
  - 创建一个Amazon Bedrock微调作业。

**正确答案 / Answer: `D`**

Bedrock's fine-tuning lets you adapt a foundation model on your own conversation examples-in this case, the 1oo high-quality transcripts to instill your company's tone directly into the model's response generation.

Bedrock的微调功能让您能够根据自已的对话示例来调整基础模型一一在这种情况下，就是这100份高质 量的对话记录从而将您公司的语气直接融入模型的响应生成中。。

---

## Question 199  `#199`

**EN** An ecommerce company is using a chatbot to automate the customer order submission process. The chatbot is powered by Al and is available to customers directly from the company's website 24 hours a day, 7 days a week. Which option is an Al system input vulnerability that the company needs to resolve before the chatbot is madeavailable?

**中** 一家电子商务公司正在使用聊天机器人来自动化客户订单提交流程。该聊天机器人由人工智能驱动， 每周7天、每天24小时直接在公司网站上为客户提供服务。 在聊天机器人上线之前，公司需要解决的AI系统输入漏洞是哪个选项？

- **A.** Data leakage
  - 数据泄露
- **B.** Prompt injection
  - 提示注入
- **C.** Large language model (LLM) hallucinations
  - 大型语言模型（LLM）的幻觉现象
- **D.** Concept drift
  - 概念漂移

**正确答案 / Answer: `B`**

Prompt injection is an input-level attack where a user crafts malicious input to override or manipulate the chatbot's instructions or behavior. Addressing this vulnerability by sanitizing and constraining user prompts ensures the chatbot won't execute unintended or harmful instructions when it goes live.

提示注入是一种输入层面的攻击，攻击者通过精心设计恶意输入来覆盖或操纵聊天机器人的指令或行为。通 过清理和限制用户提示来解决这一漏洞，可确保聊天机器人在上线时不会执行意外或有害的指令。

---

## Question 200  `#200`

**EN** A social media company wants to prevent users from posting discriminatory content on the company's application. The company wants to use Amazon Bedrock as part of the solution. How can the company use Amazon Bedrock to meet these requirements?

**中** 一家社交媒体公司希望阻止用户在其应用程序上发布歧视性内容。该公司希望将亚马逊Bedrock作为解 决方案的一部分。 该公司如何利用亚马逊Bedrock来满足这些要求？

- **A.** Give users the ability to interact based on user preferences.
  - 根据用户偏好赋予用户互动的能力。
- **B.** Block interactions related to predefined topics.
  - 阻止与预定义主题相关的互动。
- **C.** Restrict user conversations to predefined topics.
  - 将用户对话限制在预定义的主题范围内。
- **D.** Provide a variety of responses to select from for user engagement.
  - 提供多种可供选择的回复以增强用户互动。

**正确答案 / Answer: `B`**

Amazon Bedrock's built-in content moderation lets you define categories or keywords (e.g., hate speech, discriminatory language) and automatically block or filter any user inputs or outputs that fall under those topics. By configuring Bedrock's safety filters with your predefined “disallowed" categories, the application will prevent discriminatory content from ever being posted.

亚马逊Bedrock内置的内容审核功能可让您定义类别或关键词（例如仇恨言论、歧视性语言），并自动屏 蔽或过滤任何属于这些主题的用户输入或输出。通过使用您预先定义的“禁止”类别配置Bedrock的安全 过滤器，应用程序将防止任何歧视性内容被发布。

---

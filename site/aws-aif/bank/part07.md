# AWS AIF-C01 AI 真题库（452 题） · 第 07 份

> 题目 301–350 · 中英对照 · 来源：扫描版 AWS AI 题库（452 题，中英对照）

## Question 301  `#301`

**EN** A company is using large language models (LLMs) to develop online tutoring applications. The company needs to apply configurable safeguards to the LLMs. These safeguards must ensure that the LLMs follow standard safety rules when creating applications. Which solution will meet these requirements with the LEAST effort?

**中** 一家公司正在使用大型语言模型（LLM）开发在线辅导应用程序。该公司需要对这些语言模型应用可配 置的安全保障措施。这些保障措施必须确保语言模型在创建应用程序时遵循标准的安全规则。 哪种解决方案能以最少的努力满足这些要求？

- **A.** Amazon Bedrock playgrounds
  - 亚马逊Bedrock沙盒环境
- **B.** Amazon SageMaker Clarify
  - 亚马逊 SageMaker Clarify
- **C.** Amazon Bedrock Guardrails
  - 亚马逊Bedrock安全防护措施
- **D.** Amazon SageMaker Jumpstart
  - 亚马逊SageMaker快速入门

**正确答案 / Answer: `C`**

Amazon Bedrock Guardrails provide configurable safeguards that enforce standard safety rules on large language models (LLMs) with minimal effort, making it easy to ensure safe and compliant Al application development.

亚马逊Bedrock安全护栏提供了可配置的防护措施，能够以最小的努力对大型语言模型（LLM）实施 标准的安全规则，从而轻松确保人工智能应用程序开发的安全性和合规性。

---

## Question 302  `#302`

**EN** A company is exploring Amazon Nova models in Amazon Bedrock. The company needs a multimodal model that supports multiple languages. Which Nova model will meet these requirements MOsT cost-effectively?

**中** 一家公司正在亚马逊Bedrock中探索亚马逊Nova模型。该公司需要一个支持多种语言的多模态模型。 哪款诺瓦型号能满足这些要求且性价比最高？

- **A.** Nova Lite
  - 新星精简版
- **B.** Nova Pro
  - 新诺瓦Pro
- **C.** Nova Canvas
  - 新诺瓦画布
- **D.** Nova Reel
  - 新星胶片

**正确答案 / Answer: `A`**

Nova Lite is a multimodal model in Amazon Bedrock that supports multiple languages and is designed to be the most cost-effective option among the Nova models, making it suitable for organizations seeking efficient, scalable, and economical Al solutions.

NovaLite是亚马逊Bedrock中的一个多模态模型，支持多种语言，是Nova系列模型中最经济实惠的选择， 适合寻求高效、可扩展且经济的AI解决方案的组织。

---

## Question 303  `#303`

**EN** A company is building a new generative Al chatbot. The chatbot uses an Amazon Bedrock foundation model (FM) to generate responses. During testing, the company notices that the chatbot is prone to prompt injection attacks. What can the company do to secure the chatbot with the LEAST implementation effort?

**中** 一家公司正在开发一款新的生成式人工智能聊天机器人。该聊天机器人使用亚马逊Bedrock基础模型 （FM）来生成回复。在测试期间，该公司发现该聊天机器人容易受到提示注入攻击。 公司能采取什么措施以最小的实施工作量来保障聊天机器人的安全？

- **A.** Fine-tune the FM to avoid harmful responses.
  - 微调频率调制以避免有害反应。
- **B.** Use Amazon Bedrock Guardrails content filters and denied topics.
  - 使用亚马逊Bedrock安全护栏内容过滤器和禁止话题。
- **C.** Change the FM to a more secure FM.
  - 将调频（FM）更改为更安全的调频（FM）。
- **D.** Use chain-of-thought prompting to produce secure responses.
  - 使用链式思维提示来生成安全的响应。

**正确答案 / Answer: `B`**

Using Amazon Bedrock Guardrails' content filters and denied topics is the quickest and least effort solution to mitigate prompt injection attacks. These guardrails can be configured without model retraining, helping to automatically filter or block unsafe prompts and responses.

使用亚马逊Bedrock安全防护措施中的内容过滤器和禁止话题是缓解提示注入攻击最快且最省力的解决方案。 这些防护措施无需重新训练模型即可进行配置，有助于自动过滤或阻止不安全的提示和响应。

---

## Question 304  `#304`

**EN** What does inference refer to in the context of Al?

**中** 在人工智能的语境中，“推理”指的是什么？

- **A.** The process of creating new Al algorithms
  - 创建新的人工智能算法的过程
- **B.** The use of a trained model to make predictions or decisions on unseen data
  - 利用训练好的模型对未见过的数据进行预测或决策
- **C.** The process of combining multiple Al models into one model
  - 将多个AI模型组合成一个模型的过程
- **D.** The method of collecting training data for Al systems
  - 用于人工智能系统的训练数据收集方法

**正确答案 / Answer: `B`**

Inference in Al refers to applying a trained model to new, unseen data to generate predictions or decisions, leveraging the patterns learned during training.

在人工智能中，推理是指将训练好的模型应用于新的、未见过的数据，以生成预测或决策，利用在训练过程 中学到的模式。

---

## Question 305  `#305`

**EN** A company wants to build an Al assistant to provide responses to user queries. The Al assistant must evaluate specific data sources, query external APls, generate response options, and compare and prioritize response options. Which Amazon Bedrock feature or resource will meet these requirements?

**中** 一家公司想要开发一个AI助手来回答用户的查询。该AI助手必须评估特定的数据源，查询外部API, 生成回答选项，并对回答选项进行比较和优先级排序。 亚马逊Bedrock的哪项功能或资源能满足这些要求?

- **A.** Prompt Management
  - 提示管理
- **B.** Response streaming
  - 响应流式传输
- **C.** Knowledge Bases
  - 知识库
- **D.** Agents
  - 代理人

**正确答案 / Answer: `D`**

Amazon Bedrock Agents enable Al assistants to interact with specific data sources, query external APls, generate and compare response options, and prioritize results, making them the ideal feature for building advanced, task-oriented chatbots with decision-making and orchestration capabilities.

亚马逊Bedrock代理使AI助手能够与特定数据源进行交互、查询外部API、生成和比较响应选项，并对结 果进行优先级排序，是构建具有决策和协调能力的高级任务导向型聊天机器人的理想功能。

---

## Question 306  `#306`

**EN** An Al practitioner notices a large language model (LLM) is generating different responses for the same input across multiple invocations. Which risk of Al does this describe?

**中** 一位人工智能从业者注意到，对于相同的输入，一个大型语言模型（LLM）在多次调用时生成了不同的 响应。 这描述的是人工智能的哪种风险？

- **A.** Hallucinations
  - 幻觉
- **B.** Nondeterminism
  - 非确定性
- **C.** Accuracy
  - 准确性
- **D.** Multimodality
  - 多模态

**正确答案 / Answer: `B`**

Nondeterminism refers to the property where a large language model generates different responses for the same input due to inherent randomness or stochasticity in the generation process. This can lead to varying outputs on multiple invocations with identical inputs.

非确定性是指大型语言模型由于生成过程中的固有随机性或随机性，对于相同的输入会生成不同的响应。这 可能导致在多次调用且输入完全相同的情况下输出结果各不相同。

---

## Question 307  `#307`

**EN** A company is building a generative Al application on AWS. The application will help improve reading comprehension for students. The application must give students the ability to add illustrations to stories. Which solution will meet this requirement?

**中** 一家公司正在AWS.上构建一个生成式人工智能应用程序。该应用程序将帮助提高学生的阅读理解能力。 该应用程序必须让学生能够为故事添加插图。 哪种解决方案能满足这一要求？

- **A.** Use Amazon Bedrock Stable Diffusion 3.5 Large to generate images based on text inputs.
  - 使用亚马逊Bedrock稳定扩散3.5大型模型根据文本输入生成图像。
- **B.** Use Amazon Polly to create an audiobook based on story texts.
  - 使用亚马逊Polly根据故事文本创建有声读物。
- **C.** Use Amazon Rekognition to analyze image contents and detect text attributes.
  - 使用业马逊Rekognition分析图像内容并检测文本属性。
- **D.** Create a standard prompt template. Use Amazon Q Business to illustrate stories.
  - 创建一个标准的提示模板。使用亚马逊Q商务来阐释故事。

**正确答案 / Answer: `A`**

Amazon Bedrock Stable Diffusion 3.5 Large is a generative Al model designed to create high-quality images from text prompts, allowing students to add custom illustrations to their stories and enhancing reading comprehension through visual aids.

亚马逊BedrockStableDiffusion3.5Large是一款生成式人工智能模型，能够根据文本提示生成高质量 图像，让学生能够为自己的故事添加自定义插图，并通过视觉辅助手段提高阅读理解能力。

---

## Question 308  `#308`

**EN** A healthcare company wants to analyze patient data. The data was gathered over the previous year to detect patterns in disease outbreaks. The company needs to create a trend analysis report for each month to present to public health officials. The company must provide insights into patient data from the most recent month of the current year. Which inference method will meet these requirements MOsT cost-effectively?

**中** 一家医疗保健公司想要分析患者数据。这些数据是在过去一年中收集的，旨在发现疾病爆发的模式。该公司 需要为每个月制作一份趋势分析报告，提交给公共卫生官员。公司还必须提供本年度最近-一个月的患者数据 的分析见解。 哪种推理方法能以最经济有效的方式满足这些要求？

- **A.** Real-time inference
  - 实时推理
- **B.** Batch transform
  - 批量转换
- **C.** Serverless inference
  - 无服务器推理
- **D.** Asynchronous inference
  - 异步推理

**正确答案 / Answer: `B`**

Batch transform is the most cost-effective inference method for analyzing large amounts of data collected over a period (such as monthly patient data). It allows you to process and generate reports on all historical data in batches, rather than incurring the higher costs of real-time or serverless inference.

批量转换是分析一段时间内收集的大量数据（例如每月患者数据）最经济高效的推理方法。它允许您批量处 理并生成所有历史数据的报告，而无需承担实时或无服务器推理的更高成本。

---

## Question 309  `#309`

**EN** HOTSPOT Select and order the steps from the following list to correctly describe the ML lifecycle for a new custom model. Select each step one time. Hot Area: Step 1:Select StepSelect... Definethe business obiective Definethnebusinessobjective. Deploythemodel. Depolpnandtrointhemedal Developandtrainthemodel. Processthedata Focess tne data. Step2select Step2select. Definethebusinessobiective Definethnebusinessobjective. Deploythemodel. Depolynadtainthedal Developandtrainthemodel. Processthedata Focess ne data. Step3Select StepsSelect... Definethebusinessohiectiye Definethnebusinessobjective. Deploythemodel. Depolonondainthemedal Developandtrainthemodel. Processthedata Focessnedata. Step4:Select Step4.Select... Definethebusinessobiective Derinethnebusinessobjective. Deploythemodel. Depolynndtrainthemodal Developandtrainthemodel. Processthedata ocess ne data.

**中** 热点 从以下列表中选择并按顺序排列步骤，以正确描述新自定义模型的机器学习生命周期。每个步骤只能选 择一次。 热点区域： Step1:select.. Definethebusiness objective. Deploy themodel. Developand train themodel. Processthedata. Step2:Select... Definethebusiness objective. Deploythemodel. Develop and train themodel. Processthedata. Step3:Select... Definethebusinessobjective. Deploythemodel. Developandtrainthemodel. Processthedata. Step4:Select... Define the business objective. Deploy themodel. Developand trainthemodel. Processthedata.


**正确答案 / Answer: ``**


---

## Question 310  `#310`

**EN** A company acquires International Organization for Standardization (ISO) accreditation to manage Al risks and to use Al responsibly. What does this accreditation reflect about the company?

**中** 一家公司获得了国际标准化组织（ISO）的认证，以管理人工智能风险并负贵任地使用人工智能。 这项认证反映了该公司怎样的情况？

- **A.** All members of the company are IsO certified.
  - 公司所有成员均通过了ISO认证。
- **B.** All Al systems that the company uses are ISO certified.
  - 该公司使用的所有人工智能系统均通过了ISO认证。
- **C.** All Al application team members are ISO certified.
  - 所有人工智能应用团队成员均通过了ISO认证。
- **D.** The company's development framework is ISO certified.
  - 该公司的开发框架已通过ISO认证。

**正确答案 / Answer: `D`**

ISO accreditation for managing Al risks means that the company's development processes, controls, and frameworks for Al are certified to meet IsO standards. It does not certify individual employees or Al systems, but rather the organizational framework and practices.

获得管理人工智能风险的ISO认证意味着公司的开发流程、控制措施和框架符合ISO标准。这并非是对 单个员工或人工智能系统的认证，而是对组织架构和实践的认可。

---

## Question 311  `#311`

**EN** HOTSPOT Select the correct prompt engineering technique from the following list for each description. Select each prompt engineering technique one time or not at all. Hot Area: Provideasmall numberofexamplestothemodel tounderstandSelect FrovideasnaanberorexampiestodeodertoundelstandPelect thedesiredtaskbeforegeneratingoutputs.Chain-of-thoughtprompting Few-shotpromptingpg Few-shorprompting Role-basedprompting Single-shotprompting Zerg-shotpromptingg Zero-shotprompting Promntamodeltobreak.downthestep-by-step.processthatSelect Promptamodeltobreakdowhthestep-by-stepprocessthatSelect.. themodeltooktoarriveatafinalanswer.Chain-of-thoughtprompting diehodertooktoaveatanaranswer.Few-shotpromptingpeg rew-shotprompting Role-basedprompting Single-shotprompting Zerg-shotpromptingg Zero-shotprompting Promptamodeltoperformataskwithoutprovidingexamples.Select PromptanodertopenomataskwiunoutproviangexampiesSelect. Chain-of-thoughtprompting Few-shotpromptingpg Few-shotprompting Role-basedprompting Single-shotprompting Zerg-shotprompting zero-shotprompting

**中** 热点 从以下列表中为每个描述选择正确的提示工程技术。每个提示工程技术只能选择一次或根本不选。 热点区域： Provideasmall numberof examples to themodel tounderstandSelect.. the desired task before generating outputs.Chain-of-thought prompting Few-shot prompting Role-basedprompting Single-shotprompting Zero-shot prompting Prompt a model to break down the step-by-step processthatSelect. themodel took to arriveat a final answer.Chain-of-thought prompting Few-shotprompting Role-basedprompting singleshot prompting Zero-shot prompting Promptamodeltoperformataskwithout providingexamples.Select. Chain-of-thought prompting Few-shotprompting Role-basedprompting single-shotprompting Zero-shot prompting


**正确答案 / Answer: ``**

Provide a small number of examples to the model to understand the desired task before generating outputs -> Few-shot prompting Prompt a model to break down the step-by-step process that the model took to arrive at a final answer -> Chain-of-thought prompting Prompt a model to perform a task without providing examples -> Zero-shot prompting Few-shot prompting uses a few examples to guide the model's outputs. Chain-of-thought prompting asks the model to explain its reasoning step-by-step. Zero-shot prompting asks the model to perform a task without any examples.

在生成输出之前，向模型提供少量示例以使其理解所需任务->少样本提示 提示模型分解其得出最终答案的逐步过程->思维链提示 提示模型执行任务而不提供示例>零样本提示 少样本提示法通过几个示例来引导模型的输出。 链式思维提示要求模型逐步解释其推理过程。 零样本提示要求模型在没有任何示例的情况下执行任务。

---

## Question 312  `#312`

**EN** A company is developing an ML model to predict heart disease risk. The model uses patient data, such as age, cholesterol, blood pressure, smoking status, and exercise habits. The dataset includes a target value that indicates whether a patient has heart disease. Which ML technique will meet these requirements?

**中** 一家公司正在开发一种机器学习模型来预测患心脏病的风险。该模型使用患者数据，例如年龄、胆固醇 水平、血压、吸烟状况和运动习惯。数据集包含一个目标值，用于表明患者是否患有心脏病。 哪种机器学习技术能满足这些要求？

- **A.** Unsupervised learning
  - 无监督学习
- **B.** Supervised learning
  - 监督学习
- **C.** Reinforcement learning
  - 强化学习
- **D.** Semi-supervised learning
  - 半监督学习

**正确答案 / Answer: `B`**

Supervised learning is used when the dataset includes both input features (like age, cholesterol, blood pressure, etc.) and a target value indicating the presence of heart disease. The model learns to predict the target value from labeled examples.

当数据集既包含输入特征（如年龄、胆固醇、血压等），又包含表明是否患有心脏病的目标值时，就会 使用监督学习。模型通过有标签的示例学习预测目标值。

---

## Question 313  `#313`

**EN** HOTSPOT A company periodically updates its product database by manually uploading digital product guides. The product guides contain text and images. The company wants to automate this task by using generative Al. Select and order the steps from the following list to automate the database update task by using generative Al. Select each step one time. Hot Area: Stepselect Steptelecty nsertdataintotheproductdatabase. lnloadthe dicitalteytandimaaeflestoanAmazons3bucket UploadthedigitaltextandimagetilestoanAmazons3bucket. UseAmazonNovamultimodalmodelstoprocessthedigitaltextandimagefiles. seAazovaaioaar oaep o poeess a gignarekt and mage nes: step2select Stepelecty Insertdataintotheproductdatabase. lnloadthedioitalteytandimaaoalestoanAmazons3buckat Uploadthedigital textandimagetilestoanAmazons3bucket. UseAmazonNovamultimodalmodelstoprocessthedigitaltextandimagefiles. se Aazornovaaranoaaroaeis to proeess ae argnartekt and nage cs: Step3select Stepsselect. nsertdataintotheproductdatabase. Hinloadthe digitalteytandimaaealestoanAmazons3bucket Uploadthedigital textandimagefilestoanAmazons3bucket. UseAmazonNovamultimodalmodelstoprocessthedigitaltextandimagefiles. Lse Racornvaaoaaroacigopooess ae aignareatandnagecs

**中** 热点 一家公司定期通过手动上传数字产品指南来更新其产品数据库。这些产品指南包含文本和图片。该公司 希望利用生成式人工智能来实现这一任务的自动化。 从以下列表中选择并按顺序排列步骤，以使用生成式人工智能自动化数据库更新任务。每个步 骤只能选择一次。 热点区域： 3select.. Unsertdata intotheproductdatabase. UploadthedigitaltextandimagefilestoanAmazons3bucket. UseAmazonNovamultimodalmodelstoprocessthedigitaltextandimagefiles.es. Step2:select.. Insert data into the product database. Upload thedigitaltextand imagefiles toanAmazonS3bucket. UseAmazonNovamultimodalmodelsto processthedigitaltextandimagefiles. Step3:select.. Insertdata into the product database. Uploadthedigital extand imagefilestoanAmazonS3bucket. UseAmazonNovamultimodalmodelstoprocessthedigitaltextandimagefiles.


**正确答案 / Answer: ``**


---

## Question 314  `#314`

**EN** A company has guidelines for data storage and deletion. Which data governance strategy does this describe?

**中** 一家公司有数据存储和删除的指导方针。 这描述的是哪种数据治理策略？

- **A.** Data de-identification
  - 数据去标识化
- **B.** Data quality standards
  - 数据质量标准
- **C.** Data retention
  - 数据保留
- **D.** Log storage
  - 日志存储

**正确答案 / Answer: `C`**

Data retention refers to the policies and practices that define how long data is stored and when it should be deleted, ensuring compliance with organizational guidelines and regulatory requirements.

数据保留指的是定义数据存储时长以及何时应予以删除的政策和做法，以确保符合组织方针和监管要求。

---

## Question 315  `#315`

**EN** A company needs to apply numerical transformations to a set of images to transpose and rotate the images. Which solution will meet these requirements in the MOsT operationally efficient way?

**中** 一家公司需要对一组图像进行数值转换，以实现图像的转置和旋转。 哪种解决方案能以最高效的操作方式满足这些要求？

- **A.** Create a deep neural network by using the images as input.
  - 利用这些图像作为输入来创建一个深度神经网络。
- **B.** Create an AWS Lambda function to perform the transformations.
  - 创建一个AWSLambda函数来执行转换操作。
- **C.** Use an Amazon Bedrock large language model (LLM) with a high temperature.
  - 使用亚马逊Bedlrock大型语言模型（LLM），并将温度值设得较高。
- **D.** Use AWS Glue Data Quality to make corrections to each image.
  - 使用AWSGlue数据质量功能对每张图像进行修正。

**正确答案 / Answer: `B`**

An AWs Lambda function can efficiently perform numerical image transformations such as transposing and rotating images at scale without the need to build or train a neural network, making it the most operationally efficient solution.

AWSLambda函数能够高效地执行诸如图像转置和旋转之类的数值图像转换操作，而且无需构建或训练 神经网络，因此是操作效率最高的解决方案。

---

## Question 316  `#316`

**EN** An Al practitioner is writing software code. The Al practitioner wants to quickly develop a test case and create documentation for the code. Which solution will meet these requirements with the LEAST effort?

**中** 一位人工智能从业者正在编写软件代码。该从业者希望快速开发一个测试用例并为代码编写文档。 哪种解决方案能以最少的努力满足这些要求？

- **A.** Upload the code to an online coding assistant.
  - 将代码上传至在线编程助手。
- **B.** Develop an application to use foundation models (FMs).
  - 开发一个使用基础模型（FMs）的应用程序。
- **C.** Use Amazon Q Developer in an integrated development environment (IDE).
  - 在集成开发环境（IDE）中使用AmazonQ开发者工具。
- **D.** Research and write test cases. Then, create test cases and add documentation.
  - 研究并编写测试用例。然后，创建测试用例并添加文档。

**正确答案 / Answer: `C`**

Amazon Q Developer integrated with an IDE can automatically generate test cases and create documentation for code, minimizing manual effort and accelerating development compared with building custom solutions or manual research.

亚马逊Q开发者与集成开发环境（IDE）相结合，能够自动为代码生成测试用例并创建文档，与构建自定 义解决方案或进行手动研究相比，这能大幅减少人工工作量并加快开发速度。

---

## Question 317  `#317`

**EN** A company is developing a generative Al application to automatically generate product descriptions for an ecommerce website. The product descriptions must consist of paragraphs of text that are consistent in style and tone. The application must generate thousands of unique descriptions each day. Which type of generative model will meet these requirements?

**中** 一家公司正在开发一款生成式人工智能应用程序，用于为一家电商网站自动生成产品描述。这些产品描述 必须由风格和语气一致的段落组成。该应用程序每天必须生成数千条独特的描述。 哪种生成模型能满足这些要求？

- **A.** A variational autoencoder (VAE)model
  - 变分自编码器（VAE）模型
- **B.** A transformer-based model
  - 一种基于变压器的模型
- **C.** A diffusion model
  - 扩散模型
- **D.** A generative adversarial network (GAN) model
  - 生成对抗网络（GAN）模型

**正确答案 / Answer: `B`**

Transformer-based models, such as large language models, are designed to generate coherent and contextually consistent text at scale. They are well-suited for creating thousands of unique, styled product descriptions daily.

基于Transformer的模型，例如大型语言模型，旨在大规模生成连贯且上下文一致的文本。它们非常适合每 天生成数千条独特且风格各异的产品描述。

---

## Question 318  `#318`

**EN** An Al practitioner has trained a model on a training dataset. The model performs well on the training data. However, the model does not perform well on evaluation data. What is the MOST likely cause of this issue?

**中** 一位人工智能从业者在一个训练数据集上训练了一个模型。该模型在训练数据上表现良好。然而，该模型 在评估数据上的表现采佳。数现主以2。以在的以据主长长对。然 这个问题最有可能的原因是什么？

- **A.** The model is underfit.
  - 该模型拟合不足。
- **B.** The model requires prompt engineering.
  - 该模型需要即时的工程设计。
- **C.** The model is biased.
  - 该模型存在偏差。
- **D.** The model is overfit.
  - 该模型过拟合了。

**正确答案 / Answer: `D`**

Overfitting occurs when a model learns the training data too well, including noise and details that do not generalize. As a result, it performs well on training data but poorly on unseen evaluation data.

过拟合发生在模型对训练数据学习过度时，包括了噪声和无法泛化的细节。因此，它在训练数据上表现 食好，但在案觉过的评估数据上表现不佳。一后来，)

---

## Question 319  `#319`

**EN** A company wants to develop an interpretable ML model to assess the risk of loan applications. Which type of ML model or algorithm will meet these requirements?

**中** 一家公司希望开发一种可解释的机器学习模型来评估贷款申请的风险。 哪种类型的机器学习模型或算法能满足这些要求？

- **A.** Deep learning model
  - 深度学习模型
- **B.** Logistic regression model
  - 逻辑回归模型
- **C.** K-means algorithm
  - K 均值算法
- **D.** Random cut forest algorithm
  - 随机切割森林算法

**正确答案 / Answer: `B`**

Logistic regression is a simple, interpretable ML model that provides clear relationships between input features and predicted outcomes. It is widely used for risk assessment tasks like loan applications, where transparency and explainability are critical.

逻辑回归是一种简单且易于理解的机器学习模型，它能清晰地展现输入特征与预测结果之间的关系。该模 型在诸如贷款请等风险评估任务中被广泛应用，因为这些任务对透明度和可解释性有着很高的要求。

---

## Question 320  `#320`

**EN** A company stores customer personally identifiable information (Pll) data. The company must store the Pll data within the company's AWS Region. Which aspect of governance does this describe?

**中** 一家公司存储客户的个人身份信息（PII）数据。该公司必须将PII数据存储在其所在的AWS区域内。 这描述的是治理的哪个方面？

- **A.** Data mining
  - 数据挖掘
- **B.** Data residency
  - 数据驻留
- **C.** Pre-training bias
  - 预训练偏差
- **D.** Geolocation routing
  - 地理位置路由

**正确答案 / Answer: `B`**

Data residency refers to the requirement that data, such as Pll, must remain within a specific geographic location or region, ensuring compliance with local regulations and governance policies.

数据驻留是指诸如个人身份信息（PII）之类的数据必须保留在特定的地理位置或区域内，以确保符合当 地法规和治理政策的要求。信定：大数据次国定主在人人

---

## Question 321  `#321`

**EN** A company wants to implement a generative Al solution to improve its marketing operations. The company wants to increase its revenue in the next 6 months. Which approach will meet these requirements?

**中** 一家公司希望实施生成式人工智能解决方案以改进其营销业务。该公司希望在接下来的6个月内增加收入。 哪种方法能满足这些要求？

- **A.** Immediately start training a custom FM by using the company's existing data.
  - 立即利用公司现有的数据开始训练一个定制的FM模型。
- **B.** Conduct stakeholder interviews to refine use cases and set measurable goals.
  - 进行利益相关者访谈，以完善用例并设定可衡量的目标。
- **C.** Implement a prebuilt Al assistant solution and measure its impact on customer satisfaction.
  - 实施一个预先构建好的人工智能助手解决方案，并衡量其对客户满意度的影响。
- **D.** Analyze industry Al implementations and replicate the most successful features.
  - 分析行业内的AI应用实例，并复制其中最成功的特性。

**正确答案 / Answer: `C`**

Using a prebuilt Al assistant allows the company to deploy generative Al quickly without the time and cost of training custom models. This accelerates implementation, enabling measurable business impact such as improved customer engagement and increased revenue within the short 6-month timeframe.

使用预构建的AI助手能让公司迅速部署生成式AI，无需花费时间和成本来训练定制模型。这加快了实施 速度，从而能够产生可衡量的业务影响，例如“ 在短短6个月的时间内，客户参与度得到提升，收入也有所增加。

---

## Question 322  `#322`

**EN** A healthcare company wants to create a model to improve disease diagnostics by analyzing patient voices. The company has recorded hundreds of patient voices for this project. The company is currently filtering voice recordings according to duration and language. Which phase of the ML lifecycle describes the current project phase?

**中** 一家医疗保健公司希望创建一个模型，通过分析患者的声音来改进疾病诊断。为此，该公司已录制 了数百名患著的声音。，国 该公司目前正在根据时长和语言对语音记录进行筛选。 机器学习生命周期的哪个阶段描述了当前项目所处的阶段？

- **A.** Data collection
  - 数据收集
- **B.** Data preprocessing
  - 数据预处理
- **C.** Feature engineering
  - 特征工程
- **D.** Model training
  - 模型训练

**正确答案 / Answer: `B`**

Filtering voice recordings by duration and language is part of data preprocessing, where raw data is cleaned and prepared to ensure quality and consistency before moving to feature engineering and model training.

通过时长和语言对语音记录进行筛选是数据预处理的一部分，在此过程中会对原始数据进行清理和准备， 以确保在进行特征工程和模型训练之前数据的质量和一致性。

---

## Question 323  `#323`

**EN** A company is using Amazon Bedrock to build an Al assistant. The Al assistant helps customers find relevant products by making suggestions. However, the Al assistant's responses are often generic and irrelevant. The company wants to use prompt engineering to improve the Al assistant's responses. Which solution will meet these requirements?

**中** 一家公司正在使用亚马逊Bedrock构建一个AI助手。该AI助手通过提供建议帮助客户找到相关产品。 然而，该AI助手的回复常常很笼统且不相关。该公司希望利用提示工程来改进AI助手的回复。 哪种解决方案能满足这些要求？

- **A.** Use few-shot prompting to add domain-specific context and explicit instructions.
  - 使用少样本提示来添加特定领域的背景信息和明确的指令。
- **B.** Use chain-of-thought prompting with hidden reasoning steps to ignore explicit domain instructions.
  - 使用隐藏推理步骤的链式思维提示来忽略明确的领域指令。
- **C.** Modify the Al assistant's conversational style to use more formal language and include technical product specifications.
  - 调整AI助手的对话风格，使其使用更正式的语言，并包含技术产品规格。
- **D.** Use zero-shot prompting to augment retrieval from a product database.
  - 利用零样本提示来增强从产品数据库中的检索。

**正确答案 / Answer: `A`**

Few-shot prompting provides the model with examples and domain-specific context, guiding it to generate more accurate and relevant responses. This improves the quality of product suggestions compared to generic outputs.

少样本提示为模型提供示例和特定领域的背景信息，引导其生成更准确、更相关的响应。这使得产品推荐 的质量优于通用输出。

---

## Question 324  `#324`

**EN** A company runs a website for users to make travel reservations. The company wants an Al solution to help create consistent branding for hotels on the website. The Al solution needs to generate hotel descriptions for the website in a consistent writing style. Which AWS service will meet these requirements?

**中** 一家公司运营着一个供用户预订旅行的网站。该公司希望借助人工智能解决方案，为网站上的酒店打造 统一的品牌形象。主合 该人工智能解决方案需要以-一致的写作风格为网站生成酒店描述。 哪种AWS服务能满足这些要求？

- **A.** Amazon Comprehend
  - 亚马逊comprehend服务
- **B.** Amazon Personalize
  - 亚马逊个性化服务
- **C.** Amazon Rekognition
  - 亚马逊Rekognition
- **D.** Amazon Bedrock
  - 亚马逊Bedrock

**正确答案 / Answer: `D`**

Amazon Bedrock provides access to foundation models for generative Al tasks such as creating text in a consistent style. It is the correct service to generate hotel descriptions with uniform branding for the website.

亚马逊Bedrock提供了用于生成式人工智能任务的基础模型访问权限，例如以一致的风格生成文本。它是 为网站生成具有统品牌形象的酒店描述的正确服务。

---

## Question 325  `#325`

**EN** A company is using a pre-trained large language model (LLM). The LLM must perform multiple tasks that require specific domain knowledge. The LLM does not have information about several technical topics in the domain. The company has unlabeled data that the company can use to fine-tune the model. Which fine-tuning method will meet these requirements?

**中** 一家公司正在使用一个预训练的大语言模型（LLM）。该模型必须执行多项需要特定领域知识的任务。然 而，该模型对于该领域中的若干技术主题没有相关信息。该公司拥有未标注的数据，可以用来对模型进行 微调。，以以中技设行值以性效 哪种微调方法能满足这些要求？

- **A.** Full training
  - 全面培训
- **B.** Supervised fine-tuning
  - 监督微调
- **C.** Continued pre-training
  - 持续预训练
- **D.** Retrieval Augmented Generation (RAG)
  - 检索增强生成 (RAG)

**正确答案 / Answer: `C`**

Continued pre-training uses the company's unlabeled domain data to further train a pre-trained LLM, expanding its knowledge in specific technical areas without requiring labeled datasets. This makes it the best fit for the scenario.

持续的预训练利用公司的未标注领域数据进一步训练预训练的大型语言模型，使其在特定技术领域的知 识得到扩展，且无需标注数据集。这使其成为该场景的最佳选择。

---

## Question 326  `#326`

**EN** A company wants to classify images of different objects based on custom features extracted from a dataset. Which solution will meet this requirement with the LEAST development effort?

**中** 一家公司希望根据从数据集中提取的自定义特征对不同物体的图像进行分类。 哪种解决方案能以最少的开发工作量满足这一要求？

- **A.** Use traditional ML algorithms with custom features extracted from the dataset.
  - 使用从数据集中提取的自定义特征的传统机器学习算法。
- **B.** Use a pre-trained deep learning model. Fine-tune the model on the dataset.
  - 使用预训练的深度学习模型。在数据集上对模型进行微调。
- **C.** Use a generative adversarial network (GAN) model to classify the images.
  - 使用生成对抗网络（GAN）模型对图像进行分类。
- **D.** Use a support vector machine (SVM) with manually engineered features for classification.
  - 使用具有手动设计特征的支持向量机（SVM）进行分类。

**正确答案 / Answer: `B`**

Fine-tuning a pre-trained deep learning model leverages transfer learning, reducing development effort because the model already captures general image features. Only minimal adjustments with the custom dataset are needed to achieveaccurate classification.

微调预训练的深度学习模型利用了迁移学习，减少了开发工作量，因为该模型已经捕捉到了通用的图像 特征。只需对自定义数据集进行少量调整，即可实现准确的分类。

---

## Question 327  `#327`

**EN** A company wants to customize Amazon Bedrock foundation models (FMs) to improve an application's performance. The company must prepare a training dataset for text-to-text model fine-tuning. Which dataset format should the company use to train the models?

**中** 一家公司希望对亚马逊Bedrock基础模型（FMs）进行定制，以提升某应用程序的性能。该公司必须准 备一个用手支本到文本模型微调的训练数据集。 公司应该使用哪种数据集格式来训练模型？

- **A.** A JSON file with labeled data
  - 一个带有标注数据的JSON文件
- **B.** A CSV file with unlabeled data
  - 一个包含未标注数据的CSV文件
- **C.** A CSV file with tabular data
  - 一个包含表格数据的CSV文件
- **D.** A text file with unlabeled data
  - 一个包含未标注数据的文本文件

**正确答案 / Answer: `A`**


---

## Question 328  `#328`

**EN** HOTSPOT A company wants to build generative Al applications by using Amazon Bedrock. The company wants to minimize development effort. Select and order the model development techniques from the following list from the LEAST development effort to the MOsT development effort. Each model development technique should be selected one time. Hot Area: AnswerArea LEAsTdevelopmenteffortSelect EAsrdevelopmentenort.Select. Continuedpre-training Eine.tuningpng Fine-tuning Promptengineering RetrievalAugmentedGeneration(RAG) [RethevalAugmentedGeneration (RAG) select elect. Continuedpre-training Eine.tuningpg Fine-tuning Promptengineering RetrievalAugmentedGeneration(RAG) [RetrevalAugmentedGeneration(RAG) select elect. Continuedpre-training Eine.tuningpang Fine-tuning Promptengineering RetrievalAugmentedGeneration (RAG) [RetrevalAugmentedGeneration (RAG) MosTdevelopmenteffort:select Mosrdevelopinentenort:select... Continuedpre-training Eine.tuningpitrang Fine-tuning Promptengineering RetrievalAugmentedGeneration(RAG) [RetrevalAugmentedGeneration(RAG)

**中** 热点 一家公司希望利用亚马逊Bedrock构建生成式人工智能应用程序，同时希望将开发工作量降至最低。 从以下列表中选择并按开发工作量从小到大的顺序排列模型开发技术。每个模型开发技术只能选择 一次。 热点区域： LEAsTdevelopmenteffort:Select.. Continuedpre-training Fine-tuning Promptengineering RetrievalAugmentedGeneration(RAG) Select..eration (RAG) Continuedpre-training Fine-tuning Promptengineering Retrieval Augmented Generation (RAG) Select...Veration (RAG) Continued pre-training Fine-tuning Promptengineering Retrieval Augmented Generation (RAG) MOSTdevelopment effortSelect..eration (RAG) Continuedpre-training Fine-tuning Promptengineering Retrieval AugmentedGeneration (RAG) opregcoy RetrievalAugmentedGeneration(RAG)


**正确答案 / Answer: ``**

1. Prompt engineering 2. Retrieval Augmented Generation (RAG) 3. Fine-tuning 4. Continued pre-training Prompt engineering requires minimal effort as it only involves designing effective prompts. RAG adds moderate effort by integrating retrieval mechanisms with the model. Fine-tuning requires labeled data and retraining, demanding more resources. Continued pre-training is the most effort-intensive because it involves large-scale training with unlabeled domain data.

1. 提示工程 2.检索增强生成（RAG) 3.微调 4.持续的预训练 提示工程所需的努力最小，因为它仅涉及设计有效的提示。检索增强生成（RAG）通过将检索机制与模型 相结合，增加了适度的努力。微调需要标注数据和重新训练，因此需要更多资源。持续的预训练是最耗费 精力的，因为它涉及使用大量未标注的领域数据进行大规模训练。

---

## Question 329  `#329`

**EN** An airline company wants to use a generative Al model to convert a flight booking system from one coding language into another coding language. The company must select a model for this task. Which criteria should the company use to select the correct generative Al model for this task?

**中** 一家航空公司希望使用生成式人工智能模型将航班预订系统从--种编程语言转换为另一种编程语言。该公司 必须为此任务选择一个模型。 公司应采用哪些标准来为这项任务挑选合适的生成式人工智能模型？

- **A.** Syntax, semantic understanding, and code optimization capabilities
  - 语法、语义理解和代码优化能力
- **B.** Code generation speed and error handling capabilities
  - 代码生成速度和错误处理能力
- **C.** Ability to generate creative content
  - 创作创意内容的能力
- **D.** Model size and resource requirements
  - 模型大小和资源需求

**正确答案 / Answer: `A`**

Converting code from one programming language to another requires a generative Al model that can understand both the syntax (rules of the language) and semantics (logic and meaning of the code). Code optimization ensures the translated code is efficient and functional in the target language.

将代码从一种编程语言转换为另一种编程语言需要一个生成式人工智能模型，该模型能够理解两种语言的 语法（语言规则）和语义（代码的逻辑和含义）。代码优化可确保转换后的代码在自标语言中高效且功能 正常。

---

## Question 330  `#330`

**EN** An Al practitioner is using Amazon Bedrock Prompt Management to create a reusable prompt. The prompt must be able to interact with external services by calling an external APl. Which solution will meet this requirement?

**中** 一位人工智能从业者正在使用亚马逊Bedrock提示管理功能创建一个可重复使用的提示。该提示必须能够通 过调用外部API与外部服务进行交互。 哪种解决方案能满足这一要求?

- **A.** Use special tokens.
  - 使用特殊标记。
- **B.** Use a tools configuration.
  - 使用工具配置。
- **C.** Use prompt variables.
  - 使用提示变量。
- **D.** Use a stop sequence.
  - 使用停止序列。

**正确答案 / Answer: `B`**

In Amazon Bedrock Prompt Management, a tools configuration allows prompts to call external APls and services. This enables the Al assistant to extend functionality beyond static responses and interact with external systems.

在亚马逊Bedrock提示管理中，工具配置允许提示调用外部API和服务。这使AI助手能够超越静态响应， 与外部系统进行交互，从而扩展其功能。

---

## Question 331  `#331`

**EN** A company wants to use Amazon Q Business for its data. The company needs to ensure the security and privacy of the data. Which combination of steps will meet these requirements? (Choose two.)

**中** 一家公司希望使用亚马逊Q商业版来处理其数据。该公司需要确保数据的安全性和隐私性。 哪两种步骤组合能满足这些要求？（选择两项。）

- **A.** Enable AWS Key Management Service (AWS KMS) keys for the Amazon Q Business Enterprise index.
  - 为AmazonQ商业版企业索引启用AWS密钥管理服务（AWSKMS）密钥。
- **B.** Set up cross-account access to the Amazon Q index.
  - 设置跨账户访问AmazonQ指数。
- **C.** Configure Amazon Inspector for authentication.
  - 配置Amazon Inspector以进行身份验证。
- **D.** Allow public access to the Amazon Q index.
  - 允许公众访问亚马逊Q指数。
- **E.** Configure AWS Identity and Access Management (IAM) for authentication.
  - 配置AWS身份和访问管理（IAM）以进行身份验证。

**正确答案 / Answer: `A,E`**

Enabling AWS KMS keys ensures encryption of data at rest for the Amazon Q Business Enterprise index, protecting sensitive data. Configuring IAM provides secure authentication and access control, ensuring only authorized users and applications can access the data.

启用AWSKMS密钥可确保对AmazonQBusinessEnterprise索引中的静态数据进行加密，从而保护敏感数 据。 配置身份和访问管理（IAM）可提供安全的身份验证和访问控制，确保只有经过授权的用户和应用程序 能够访问数据。

---

## Question 332  `#332`

**EN** A company uses Amazon Comprehend to analyze customer feedback. A customer has several unique trained models. The company uses Comprehend to assign each model an endpoint. The company wants to automate a report on each endpoint that is not used for more than 15 days. Which service will meet these requirements?

**中** 一家公司使用亚马逊Comprehend来分析客户反馈。该公司有多个独特的训练模型。公司使用Comprehend 为每个模型分配一个端点。该公司希望自动生成一份关于每个超过15天未使用的端点的报告。 哪种服务能满足这些要求？

- **A.** AWS Trusted Advisor
  - AWS可信顾问
- **B.** Amazon CloudWatch
  - 亚马逊云监控（AmazonCloudWatch)
- **C.** AWS CloudTrail
  - AWS CloudTrail 服务
- **D.** AWS Config
  - AWS配置

**正确答案 / Answer: `B`**

Amazon CloudWatch can monitor Amazon Comprehend endpoint metrics, such as invocations. By tracking usage and setting alarms or automated checks, it can generate reports for endpoints that have not been used in the last 15 days.

亚马逊CloudWatch可以监控亚马逊Comprehend端点指标，例如调用次数。通过跟踪使用情况并设置警报 或自动检查，它可以为过去15天内未使用的端点生成报告。

---

## Question 333  `#333`

**EN** A company plans to use a generative Al model to provide real-time service quotes to users. Which criteria should the company use to select the correct model for this use case?

**中** 一家公司计划使用生成式人工智能模型为用户提供实时服务报价。 公司应采用哪些标准来为这个用例选择合适的模型？

- **A.** Model size
  - 模型尺寸
- **B.** Training data quality
  - 训练数据质量
- **C.** General-purpose use and high-powered GPU availability
  - 通用用途及高性能 GPU 的可用性
- **D.** Model latency and optimized inference speed
  - 模型延迟与优化后的推理速度

**正确答案 / Answer: `D`**

For real-time service quotes, the critical requirement is low response time. A model with optimized inference speed and low latency ensures fast and efficient user interactions, making it the correct selection criterion.

对于实时服务报价而言，关键要求是响应时间短。具有优化推理速度和低延迟的模型能够确保快速高效的用 户交互，因此这是正确的选择标准。

---

## Question 334  `#334`

**EN** An Al practitioner must fine-tune an open source large language model (LLM) for text categorization. The dataset is already prepared. Which solution will meet these requirements with the LEAsT operational effort?

**中** 二位人工智能从业者必须对一个开源的大语言模型（LLM）进行微调，以用于文本分类。数据集已经准备 好了。 哪种解决方案能以最少的操作努力满足这些要求？

- **A.** Create a custom model training job in PartyRock on Amazon Bedrock.
  - 在亚马逊Bedlrock的PartyRock中创建自定义模型训练任务。
- **B.** Use Amazon SageMaker JumpStart to create a training job.
  - 使用Amazon SageMaker JumpStart 创建训练任务。
- **C.** Use a custom script to run an Amazon SageMaker Al model training job.
  - 使用自定义脚本运行Amazon SageMakerAI模型训练任务。
- **D.** Create a Jupyter notebook on an Amazon EC2 instance. Use the notebook to train the model.
  - 在亚马逊EC2实例上创建一个Jupyter笔记本。使用该笔记本训练模型。

**正确答案 / Answer: `B`**

SageMaker JumpStart provides prebuilt solutions and workflows for fine-tuning open source models with minimal setup. It reduces operational effort compared to custom scripts, EC2 notebooks, or PartyRock, making it the most efficient choice.

SageMaker JumpStart提供了开箱即用的解决方案和工作流，只需少量设置即可对开源模型进行微调。与自 定义脚本、EC2笔记本或PartyRock相比，它减少了运营工作量，是效率最高的选择。

---

## Question 335  `#335`

**EN** What is the primary purpose of system prompts in generative Ai applications?

**中** 在生成式人工智能应用中，系统提示的主要目的是什么？

- **A.** To authenticate user credentials to access responses from Al
  - 对用户凭证进行身份验证以获取来自人工智能的响应
- **B.** To generate random responses by Al
  - 通过人工智能生成随机回复
- **C.** To define the role and behavioral boundaries of Al
  - 明确人工智能的角色和行为边界
- **D.** To compress output data from Al
  - 对来自人工智能的输出数据进行压缩

**正确答案 / Answer: `C`**

System prompts are used to establish the role, tone, rules, and behavioral constraints of the Al, ensuring it responds in a controlled and consistent manner aligned with the application's intended purpose.

系统提示用于确立人工智能的角色、语气、规则和行为限制，确保其以受控且一致的方式作出回应，符合应 用程序的预期用途。

---

## Question 336  `#336`

**EN** A company is using a large language model (LLM) to create a generative Al assistant. The company must choose an Al technique to ensure that the Al assistant generates the most factually correct responses. The company selects the Retrieval Augmented Generation (RAG) technique. Which limitation of LLMs is the company trying to reduce?

**中** 一家公司正在使用大型语言模型（LLM）来创建一个生成式人工智能助手。该公司必须选择一种人工智能 技术，以确保该人工智能助手生成最准确的事实性回答。该公司选定了检索增强生成（RAG）技术。 该公司正在努力减少大型语言模型的哪项局限性？

- **A.** Hallucinations
  - 幻觉
- **B.** Security
  - 安全
- **C.** Nondeterminism
  - 非确定性
- **D.** Interpretability
  - 可解释性

**正确答案 / Answer: `A`**

Retrieval Augmented Generation reduces hallucinations by grounding the model's responses in authoritative external data sources, which helps ensure that generated answers are based on factual and verifiable information rather than the model inventing incorrect details.

检索增强生成通过将模型的响应与权威的外部数据源相联系来减少幻觉，这有助于确保生成的答案基于事 实和可验证的信息，而不是模型编造错误的细节。

---

## Question 337  `#337`

**EN** A company is building a job recommendation system based on job posting data and job seeker user profiles. The system shows bias in job recommendations based on gender for user profiles that are otherwise equivalent. Which principle should the company follow to address this issue, according to AWS best practices for responsible Al?

**中** 一家公司正在基于职位发布数据和求职者用户资料构建一个职位推荐系统。该系统在为条件相当的用 户推荐职位时，存在基于性别的偏见。 根据AWS负责任的人工智能最佳实践，公司应遵循哪项原则来解决此问题？

- **A.** Governance
  - 治理
- **B.** Explainability
  - 可解释性
- **C.** Controllability
  - 可控性
- **D.** Fairness
  - 公平性

**正确答案 / Answer: `D`**

Fairness focuses on identifying and mitigating bias so that Al systems provide equitable outcomes for users with similar characteristics, preventing discriminatory behavior such as gender-based bias in job recommendations.

公平性侧重于识别和减轻偏见，以确保人工智能系统为具有相似特征的用户提供公平的结果，防止诸如 基于性别的就业推荐偏见等歧视行为。

---

## Question 338  `#338`

**EN** A company wants its Al models to be transparent and explainable. Which combination of Amazon SageMaker Al features will meet these requirements? (Choose two.)

**中** 一家公司希望其人工智能模型具有透明度和可解释性。 哪种亚马逊SageMaker人工智能功能的组合能满足这些要求？（选择两项。）

- **A.** SageMaker Model Cards
  - SageMaker模型卡片
- **B.** SageMaker Pipelines
  - SageMaker管道
- **C.** SageMaker Clarity
  - SageMaker 清晰版
- **D.** SageMaker Model Monitor
  - SageMaker模型监控器
- **E.** SageMaker Debugger
  - SageMaker 调试器

**正确答案 / Answer: `A,C`**

SageMaker Model Cards provide standardized documentation that describes a model's intended use, training data, performance, and limitations, supporting transparency. SageMaker Clarity helps explain model behavior by detecting bias and providing feature attribution, making model decisions more interpretable and explainable.

SageMaker模型卡片提供了标准化的文档，描述了模型的预期用途、训练数据、性能和局限性，有助 于提高透明度。 SageMakerClarity通过检测偏差并提供特征归因来帮助解释模型行为，使模型决策更具可解释性和可 理解性。位过性工

---

## Question 339  `#339`

**EN** A company is developing a product recommendation application by using a generative Al model. The company must minimize the application's environmental impact. Which solution will meet these requirements?

**中** 一家公司正在利用生成式人工智能模型开发一款产品推荐应用程序。该公司必须将该应用程序对环境 的影响降到最低。 哪种解决方案能满足这些要求？

- **A.** Optimize the deployed model architecture to prioritize computational efficiency during model inference.
  - 优化已部署的模型架构，以在模型推理过程中优先考虑计算效率。
- **B.** Adopt a distributed inference approach by using multiple smaller models across multiple Availability Zones.
  - 采用分布式推理方法，在多个可用区使用多个较小的模型。
- **C.** Adopt a hybrid strategy by deploying the model on premises and storing the data on AWS.
  - 采用混合策略，在本地部署模型，并将数据存储在AWS上。
- **D.** Deploy multiple models and use a dynamic model selection mechanism that queries different models randomly.
  - 部署多个模型，并使用一种动态模型选择机制，该机制随机查询不同的模型。

**正确答案 / Answer: `A`**

Optimizing the model architecture for computational efficiency reduces the compute resources and energy required during inference, which directly lowers the environmental impact of running the generative Al application.

优化模型架构以提高计算效率，能够减少推理过程中所需的计算资源和能源，从而直接降低运行生成式人 工智能应用程序对环境的影响。

---

## Question 340  `#340`

**EN** A company uses Amazon SageMaker Al to generate article summaries in multiple languages. The company needs a metric to evaluate the quality of the summary translations in multiple languages. Which evaluation metric will meet these requirements?

**中** 一家公司使用亚马逊SageMaker人工智能生成多语言的文章摘要。该公司需要一个指标来评估多语 言摘要翻译的质量。 哪种评估指标能满足这些要求？

- **A.** Recall-Oriented Understudy for Gisting Evaluation (ROUGE)
  - 基于召回率的摘要评估工具（ROUGE)
- **B.** Bilingual evaluation understudy (BLEU)
  - 双语评估参考译文(BLEU)
- **C.** Area Under the ROC Curve (AUC)
  - 受试者工作特征曲线下的面积（AUC)
- **D.** Precision
  - 精度

**正确答案 / Answer: `B`**

Bilingual Evaluation Understudy measures how closely a generated translation matches one or more high- quality reference translations, making it well suited for evaluating the quality of multilingual summary translations.

双语评估助手（BLEU）衡量生成的翻译与一个或多个高质量参考翻译的接近程度，使其非常适合用于评估 多语言摘要翻译的质量。

---

## Question 341  `#341`

**EN** A research company is growing microbiological cultures. The company captures images of the cultures without any prior labeled data about growth areas. The company needs to identify the regions of the images that show culture growth. Which ML technique will meet these requirements?

**中** 一家研究公司正在培养微生物。该公司在没有任何关于培养区域的先验标注数据的情况下拍摄了培养物 的图像。该公司需要识别图像中显示培养物生长的区域。 哪种机器学习技术能满足这些要求？

- **A.** Logistic regression
  - 逻辑回归
- **B.** Decision tree
  - 决策树
- **C.** Clustering
  - 聚类
- **D.** Dimensionality reduction
  - 维度约简

**正确答案 / Answer: `C`**

Clustering can group similar pixel patterns or image regions without labeled data, allowing the model to identify areas that share visual characteristics associated with culture growth.

聚类可以在没有标注数据的情况下将相似的像素模式或图像区域分组，从而使模型能够识别出具有与培 养物生长箱关的视宽特征的域。的信东成的，支以主

---

## Question 342  `#342`

**EN** A company that streams media is selecting an Amazon Nova foundation model (FM) to process documents and images. The company is comparing Nova Micro and Nova Lite. The company wants to minimize costs. Which model characteristics should the company consider to meet these requirements?

**中** 一家从事媒体流传输的公司正在选择亚马逊的Nova基础模型（FM）来处理文档和图像。该公司正在比 较Nova Micro和Nova Lite。该公司希望将成本降至最低。 公司应考虑哪些模型特性才能满足这些要求？

- **A.** Nova Micro uses transformer-based architectures.Nova Lite does not use transformer-based architectures.
  - Nova Micro采用基于转换器的架构。Nova Lite不采用基于转换器的架构。
- **B.** Nova Micro supports only text data. Nova Lite is optimized for numerical data.
  - Nova Micro仅支持文本数据。Nova Lite则针对数值数据进行了优化。
- **C.** Nova Micro supports only text. Nova Lite supports images, videos, and text.
  - Nova Micro仅支持文本。Nova Lite支持图片、视频和文本。
- **D.** Nova Micro runs only on CPUs. Nova Lite runs only on GPUs.
  - Nova Micro 仅能在 CPU 上运行。Nova Lite 仅能在 GPU上运行。

**正确答案 / Answer: `C`**

Nova Micro supports only text processing, while Nova Lite supports multimodal inputs including images, videos, and text. Selecting the model with broader multimodal support allows the company to choose the most cost-effective option that still meets document and image processing requirements.

NovaMicro仅支持文本处理，而Nova Lite则支持包括图像、视频和文本在内的多模态输入。选择具有更 广泛多模态支持的模型，使公司能够选择既满足文档和图像处理需求又最具成本效益的选项。

---

## Question 343  `#343`

**EN** A company stores customer data in OpenSearch. The company wants an Al solution to retrieve specific customer information from the stored data. The Al solution must convert queries into data requests and generate CSV files from the results. Then, the Al solution must upload the CSV files to Amazon S3. Which solution will meet these requirements in the MOsT operationally-efficient way?

**中** 一家公司将客户数据存储在OpenSearch中。该公司希望有一个AI解决方案从存储的数据中检索特定的 客户信息。该AI解决方案必须将查询转换为数据请求，并从结果中生成CSV文件。然后，该AI解决方 案必须将cSV文件上传到Amazon S3。 哪种解决方案能以最高效的操作方式满足这些要求？

- **A.** Create an Al agent to perform the required steps.
  - 创建一个能够执行所需步骤的人工智能代理。
- **B.** Use a single foundation model (FM) with few-shot prompting.
  - 使用单个基础模型（FM）并采用少样本提示。
- **C.** Create a software application without using Al to perform the required steps.
  - 开发一个软件应用程序，且在执行所需步骤时不使用人工智能。
- **D.** Train a decision tree model to generate a solution based on user questions.
  - 训练一个决策树模型，根据用户的问题生成解决方案。

**正确答案 / Answer: `A`**

An Al agent can orchestrate multiple actions end to end, including translating user queries into OpenSearch requests, generating csV files from the results, and uploading the files to Amazon S3, making it the most operationally efficient approach.

一个AI代理可以端到端地协调多个操作，包括将用户查询转换为OpenSearch请求，从结果中生成 CSV文件，并将文件上传到亚马逊S3，使其成为操作效率最高的方法。

---

## Question 344  `#344`

**EN** Which foundation model (FM) in Amazon Bedrock can be fine-tuned for text, image, and video comprehension?

**中** 亚马逊Bedrock中的哪个基础模型（FM）可以针对文本、图像和视频理解进行微调？

- **A.** Amazon Nova Pro
  - 亚马逊诺瓦专业版
- **B.** Amazon Titan Multimodal Embeddings G1
  - 亚马逊泰坦多模态嵌入G1
- **C.** Amazon Titan Text G1 - Express
  - 亚马逊泰坦文本G1-快速版
- **D.** Amazon Nova Micro
  - 亚马逊Nova微型服务器

**正确答案 / Answer: `A`**

Amazon Nova Pro supports multimodal capabilities and can be fine-tuned for understanding and generating insights across text, image, and video inputs, making it suitable for comprehensive multimodal comprehension tasks.

亚马逊Nova Pro支持多模态功能，能够针对文本、图像和视频输入进行微调，以理解和生成洞察，使 其适用于全面的多模态理解任务。

---

## Question 345  `#345`

**EN** A company wants to generate synthetic data responses for multiple prompts from a large volume of data. The company wants to use an APl method to generate the responses. The company does not need to generate the responses immediately. Which solution meets these requirements with the LEAsT development effort?

**中** 一家公司希望从大量数据中为多个提示生成合成数据响应。该公司希望使用API方法来生成这些响应。 该公司不需要立即生成响应。 哪种解决方案能以最少的开发工作量满足这些要求？

- **A.** Input the prompts into the model. Generate responses by using real-time inference.
  - 将提示输入模型。通过实时推理生成响应。
- **B.** Use Amazon Bedrock batch inference. Generate responses asynchronously.
  - 使用亚马逊Bedrock批量推理。异步生成响应。
- **C.** Use Amazon Bedrock agents. Build an agent system to process the prompts recursively.
  - 使用亚马逊Bedrock代理。构建一个代理系统来递归处理提示。
- **D.** Use AWs Lambda functions to automate the task. Submit one prompt after another and store each response.
  - 使用AWSLambda函数来自动化该任务。依次提交提示，并存储每个响应。

**正确答案 / Answer: `B`**

Amazon Bedrock batch inference allows large volumes of prompts to be processed asynchronously through a managed APl, making it ideal for generating synthetic data at scale without requiring immediate responses or custom orchestration logic.

亚马逊Bedrock批量推理功能允许通过托管API异步处理大量提示，这使其成为大规模生成合成数据 的理想选择，无需即时响应或自定义编排逻辑。

---

## Question 346  `#346`

**EN** Which statement accurately describes Retrieval Augmented Generation (RAG)?

**中** 哪项陈述准确描述了检索增强生成（RAG）？

- **A.** A process that uses large amounts of new data to train large language models (LLMs) to improve LLM performance
  - 一种利用大量新数据来训练大型语言模型（LLM）以提升其性能的过程
- **B.** A process by which large language models (LLMs) reference external authoritative knowledge bases to enhance the relevance and accuracy of LLM responses without re-training
  - 一种大型语言模型（LLM）引用外部权威知识库以增强其响应的相关性和准确性而不重新训练的过程
- **C.** A process that limits large language models (LLMs) exclusively to their original training data to improve response speed for business applications without re-training
  - 一种仅将大型语言模型（LLM）限制在其原始训练数据范围内以提高商业应用响应速度的过程，无 需重新训练。
- **D.** A process that focuses on language translation tasks for businesses that operate in multiple countries
  - 一个专注于为在多个国家开展业务的企业提供语言翻译服务的流程

**正确答案 / Answer: `B`**

Retrieval Augmented Generation enhances model outputs by retrieving relevant information from external authoritative data sources at inference time and using that information to generate more accurate and contextually relevant responses without retraining the model.

检索增强生成通过在推理时从外部权威数据源检索相关信息，并利用这些信息生成更准确且上下文相 关的响应，从而增强模型输出，而无需重新训练模型。

---

## Question 347  `#347`

**EN** A company must comply with regulatory standards to develop and use trustworthy Al management solutions. Which approach will meet this requirement?

**中** 一家公司必须遵守监管标准，才能开发和使用值得信赖的人工智能管理解决方案。 哪种方法能满足这一要求？

- **A.** Optimize model inference time by using high-powered GPUs for faster processing.
  - 通过使用高性能GPU来加快处理速度，从而优化模型推理时间。
- **B.** Ensure that each Al solution is developed only by technical experts. Do not involve other stakeholders.
  - 确保每个AI解决方案仅由技术专家开发。不要让其他利益相关者参与。
- **C.** Constrain transparency and user access to each model's decision-making process.
  - 限制每个模型决策过程的透明度和用户访问权限。
- **D.** Ensure fairness, transparency, accountability, and security throughout the lifecycle of each Al solution.
  - 确保每个AI解决方案在其整个生命周期内都做到公平、透明、负责和安全。

**正确答案 / Answer: `D`**

Complying with trustworthy Al regulations requires embedding fairness, transparency, accountability, and security across the entire Al lifecycle, from design and development through deployment and ongoing operation.

遵守可信人工智能法规需要在整个人工智能生命周期中嵌入公平性、透明度、可问责性和安全性，涵盖从 设计和开发到部署以及持续运行的各个阶段。

---

## Question 348  `#348`

**EN** A company has trained a foundation model (FM) to perform a specific task. The company needs to fine- tune the FM to perform a different but related task. Which fine-tuning method will meet this requirement?

**中** 一家公司已训练了一个基础模型（FM）来执行特定任务。该公司需要对FM进行微调，使其能够执行一 个不同但相关的任务。多 哪种微调方法能满足这一要求？

- **A.** Hyperparameter tuning
  - 超参数调优
- **B.** Pre-training
  - 预训练
- **C.** Transfer learning
  - 迁移学习
- **D.** Reinforcement learning
  - 强化学习

**正确答案 / Answer: `C`**

Transfer learning adapts an already trained foundation model to a new but related task by leveraging the knowledge learned from the original task, reducing training time and data requirements while improving performance.

迁移学习通过利用从原始任务中学到的知识，将一个已经训练好的基础模型应用于新的但相关的任务，从 而减少训练时间和数据需求，同时提高性能。

---

## Question 349  `#349`

**EN** An Al practitioner is developing a prompt for large language models (LLMs) in Amazon Bedrock. The Al practitioner must ensure that the prompt works across all Amazon Bedrock LLMs. Which characteristic can differ across the LLMs?

**中** 一~位人工智能从业者正在亚马逊Bedrock中为太型语言模型（LLM）开发提示语。该从业者必须确保提 示语适用于亚马逊Bedrock中的所有大型语言模型。 哪些特征在不同的大型语言模型之间可能存在差异？

- **A.** Maximumtoken count
  - 最大标记数
- **B.** On-demand inference parameter support
  - 按需推理参数支持
- **C.** The ability to control model output randomness
  - 控制模型输出随机性的能力
- **D.** Compatibility with Amazon Bedrock Guardrails
  - 与亚马逊Bedrock安全护栏的兼容性

**正确答案 / Answer: `A`**

Different large language models have varying maximum token limits, which affects how much input and output text a prompt can include, so prompts must account for these differences to work consistently across models.

不同的大型语言模型具有不同的最大标记限制，这会影响提示中可以包含的输入和输出文本量，因此提 示必须考虑到这些差异，以便在不同模型中都能保持一致的效果。

---

## Question 350  `#350`

**EN** HOTSPOT A company wants to use ML to increase customer engagement and sales. The company has collected a large dataset that includes customer demographics, purchase history, browsing patterns, and product ratings. Select the correct ML approach from the following list for each use case. Select each ML approach one time. Hot Area: Predictcustomerlifetimevalue(CLV)byestimatinghowmuchrevenueacustomer wllgenerateoverthecustomerslifetime. Identify the likelihood of a customer to stop using the company's services.Classification ldeyteikemoodoracustomertostopusngthecompanyssevicesClassificationClustering CclusteringRegression Regression Groupcustomers based onsimilar purchasing patterns and preferences. Classiication Clustering Regression

**中** 热点 一家公司希望利用机器学习来提高客户参与度和销售额。该公司已收集了一个庞大的数据集，其中包括客 户的人口统计信息、购买历史、浏览模式和产品评价。 从以下列表中为每个用例选择正确的机器学习方法。每个机器学习方法只能选择一次。 热点区域： Predict customer lifetime value (CLV) by astimating how much revenue a customer will generate over the customer's lifetime. Ident h ikeihodofacustmer o tpusing te companys seiceslmeiegin ElstinaionRegession Regression Group customers based on similar purchasing patterns and preferences. Classification Clustering [Regression


**正确答案 / Answer: ``**

Customer lifetime value is a continuous numeric prediction representing expected revenue over time. The likelihood that a customer will stop using services is a binary outcome prediction. Grouping customers by similar behaviors and preferences requires identifying natural patterns without predefined labels.

客户终身价值是一个连续的数值预测，代表了预期的长期收入。 客户停止使用服务的可能性是一种二元结果预测。 根据相似的行为和偏好对客户进行分组，需要识别出自然的模式，而无需预先设定标签。

---

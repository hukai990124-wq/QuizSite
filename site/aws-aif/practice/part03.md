# AWS AIF-C01 AI 练习卷（230 题） · 第 03 份

> 题目 101–150 · 中英对照 · 来源：HydraNode 免费题库（考生回忆题，逐项解析）

## Question 101  `#101`

**EN** Your team is building a customer support chatbot using a foundation model like Amazon Bedrock. The chatbot will handle sensitive customer data, including personal identification and payment information. What key design considerations should you focus on to ensure a secure and effective application?

**中** 您的团队正在使用 Amazon Bedrock 等基础模型构建客户支持聊天机器人。聊天机器人将处理敏感的客户数据，包括个人身份和付款信息。为了确保安全有效的应用程序，您应该关注哪些关键设计考虑因素？

- **A.** Ensure proper fine-tuning of the foundation model for your specific domain to improve response relevance.
  - 确保针对您的特定领域对基础模型进行适当微调，以提高响应相关性。
- **B.** Implement encryption mechanisms to secure sensitive customer data during storage and transmission.
  - 实施加密机制，以确保敏感客户数据在存储和传输过程中的安全。
- **C.** Configure the foundation model to directly store customer data for future training improvements.
  - 配置基础模型以直接存储客户数据以供将来的训练改进。
- **D.** Use access controls and role-based permissions to prevent unauthorized use of the model and data.
  - 使用访问控制和基于角色的权限来防止未经授权使用模型和数据。
- **E.** Avoid pre-training the foundation model to save costs, even if domain-specific data is available.
  - 即使特定领域的数据可用，也避免预先训练基础模型以节省成本。

**正确答案 / Answer: `A,B,D`**

When designing applications using foundation models, especially for use cases involving sensitive data, it is essential to focus on security and customization. Fine-tuning ensures the model is relevant to the specific use case. Encryption protects sensitive data in storage and transit, and access controls prevent unauthorized access. Avoiding these design considerations could lead to security vulnerabilities, regulatory non-compliance, and poor application performance.
A. Correct. Fine-tuning a foundation model for your specific domain ensures the chatbot produces relevant and accurate responses tailored to your use case, improving user satisfaction and effectiveness.
B. Correct. Implementing encryption mechanisms is critical for protecting sensitive customer data, ensuring compliance with data security regulations and maintaining user trust.
C. Incorrect. Foundation models should not directly store customer data, as this poses significant security and privacy risks. Instead, data should be handled transiently and securely.
D. Correct. Access controls and role-based permissions help prevent unauthorized access to both the model and sensitive data, minimizing the risk of data breaches and misuse.
E. Incorrect. Avoiding pre-training is not a best practice when domain-specific data is available. Pre-training or fine-tuning can improve the performance and relevance of the foundation model for the specific application.

使用基础模型设计应用程序时，尤其是涉及敏感数据的用例时，必须关注安全性和自定义。微调可确保模型与特定用例相关。加密保护存储和传输中的敏感数据，访问控制可防止未经授权的访问。避免这些设计考虑可能会导致安全漏洞、不合规和应用程序性能不佳。答：正确。针对您的特定领域微调基础模型可确保聊天机器人根据您的用例生成相关且准确的响应，从而提高用户满意度和有效性。 B、正确。实施加密机制对于保护敏感的客户数据、确保遵守数据安全法规和维护用户信任至关重要。 C、不正确。基础模型不应直接存储客户数据，因为这会带来重大的安全和隐私风险。相反，数据应该被瞬时且安全地处理。 D、正确。访问控制和基于角色的权限有助于防止对模型和敏感数据的未经授权的访问，从而最大限度地降低数据泄露和滥用的风险。 E、不正确。当特定领域的数据可用时，避免预训练并不是最佳实践。预训练或微调可以提高基础模型针对特定应用的性能和相关性。

---

## Question 102  `#102`

**EN** A company wants to build an AI-powered application using a foundation model deployed on AWS. The application involves summarizing large amounts of legal documents and providing accurate insights to assist lawyers. Which design considerations should the company prioritize for this use case?

**中** 一家公司希望使用部署在 AWS 上的基础模型来构建由 AI 驱动的应用程序。该应用程序涉及总结大量法律文件并提供准确的见解来协助律师。对于此用例，公司应优先考虑哪些设计考虑因素？

- **A.** Fine-tune the foundation model using a dataset of legal documents specific to the company's use case.
  - 使用特定于公司用例的法律文档数据集来微调基础模型。
- **B.** Use a smaller pre-built model to reduce costs, even if it performs poorly with legal terminology.
  - 使用较小的预构建模型来降低成本，即使它在法律术语方面表现不佳。
- **C.** Ensure the foundation model is integrated with a robust data privacy and security framework to protect sensitive legal data.
  - 确保基础模型与强大的数据隐私和安全框架集成，以保护敏感的法律数据。
- **D.** Leverage Amazon SageMaker's JumpStart to quickly deploy a pre-trained foundation model without assessing its suitability for legal language.
  - 利用 Amazon SageMaker 的 JumpStart 快速部署预训练的基础模型，而无需评估其对法律语言的适用性。
- **E.** Implement a feedback mechanism for users to flag inaccuracies in the model's summaries to improve future performance.
  - 实施反馈机制，让用户标记模型摘要中的不准确之处，以提高未来的性能。

**正确答案 / Answer: `A,C,E`**

When designing applications with foundation models, it is crucial to tailor the model to the specific use case, especially in specialized fields like legal analysis. Fine-tuning ensures domain relevance, while robust security measures protect sensitive data. Feedback mechanisms also allow for iterative improvement of the model's performance. These considerations are vital to building a reliable and trustworthy AI-powered application.
A. Correct. Fine-tuning the foundation model using a dataset of legal documents ensures it is tailored to the domain-specific language and nuances of the legal field, which is critical for generating accurate and relevant summaries.
B. Incorrect. Using a smaller pre-built model may reduce costs, but if it cannot handle legal terminology effectively, it will fail to meet the application's functional requirements.
C. Correct. Protecting sensitive legal data is crucial in this use case. A robust data privacy and security framework ensures compliance with regulations and builds trust with users.
D. Incorrect. While Amazon SageMaker JumpStart can help deploy pre-trained models quickly, skipping the evaluation of the model's suitability for legal language could result in poor performance and irrelevant outputs.
E. Correct. Implementing a feedback mechanism allows the system to improve over time by learning from flagged inaccuracies, which is essential for maintaining the quality and reliability of the summaries.

在使用基础模型设计应用程序时，根据特定用例定制模型至关重要，尤其是在法律分析等专业领域。微调可确保域相关性，同时强大的安全措施可保护敏感数据。反馈机制还允许迭代改进模型的性能。这些考虑因素对于构建可靠且值得信赖的人工智能应用程序至关重要。答：正确。使用法律文档数据集微调基础模型可确保其适合特定领域的语言和法律领域的细微差别，这对于生成准确且相关的摘要至关重要。 B、不正确。使用较小的预构建模型可能会降低成本，但如果不能有效处理法律术语，则将无法满足应用程序的功能要求。 C、正确。在此用例中，保护敏感的法律数据至关重要。强大的数据隐私和安全框架可确保遵守法规并建立用户信任。 D、不正确。虽然 Amazon SageMaker JumpStart 可以帮助快速部署预训练模型，但跳过模型对法律语言的适用性评估可能会导致性能不佳和不相关的输出。 E、正确。实施反馈机制允许系统通过从标记的不准确之处中学习来随着时间的推移进行改进，这对于保持摘要的质量和可靠性至关重要。

---

## Question 103  `#103`

**EN** A company wants to integrate a language translation service into its application. They need to process user input in real-time and support multiple languages. The company also wants to minimize the development effort and does not require fine-tuning or customization of the model. Which selection criteria should they prioritize when choosing a pre-trained model for this use case?

**中** 一家公司希望将语言翻译服务集成到其应用程序中。他们需要实时处理用户输入并支持多种语言。该公司还希望最大限度地减少开发工作量，并且不需要对模型进行微调或定制。在为此用例选择预训练模型时，他们应该优先考虑哪些选择标准？

- **A.** Latency
  - 延迟
- **B.** Multi-lingual support
  - 多语言支持
- **C.** Model size
  - 型号尺寸
- **D.** Model complexity
  - 模型复杂度
- **E.** Customization capabilities
  - 定制能力
- **F.** Input/output length
  - 输入/输出长度

**正确答案 / Answer: `A,B`**

For this real-time, multi-lingual language translation use case, the critical selection criteria are latency and multi-lingual support. These ensure that the service meets the application's real-time performance requirements and supports all the target languages. Other factors, such as model size or customization capabilities, are less relevant since the company does not require fine-tuning or optimization for deployment constraints.
A. Correct. Latency is critical for real-time applications to ensure the translation happens quickly without noticeable delays.
B. Correct. Multi-lingual support is essential as the company needs to handle multiple languages for translation.
C. Incorrect. Model size is less relevant in this scenario as the focus is not on deployment constraints but on functionality and performance.
D. Incorrect. Model complexity does not directly align with the company's stated priorities and is not a key factor in this use case.
E. Incorrect. Customization capabilities are unnecessary since the company does not require fine-tuning or model customization.
F. Incorrect. Input/output length is not a primary concern as the use case does not mention specific limitations or requirements for text length.

对于这种实时多语言翻译用例，关键的选择标准是延迟和多语言支持。这些确保服务满足应用程序的实时性能要求并支持所有目标语言。其他因素（例如模型大小或定制能力）的相关性较小，因为公司不需要针对部署限制进行微调或优化。答：正确。延迟对于实时应用程序至关重要，以确保翻译快速进行而不会出现明显的延迟。 B、正确。由于公司需要处理多种语言的翻译，因此多语言支持至关重要。 C、不正确。在这种情况下，模型大小不太重要，因为重点不是部署约束，而是功能和性能。 D、不正确。模型复杂性与公司规定的优先级并不直接一致，也不是该用例中的关键因素。 E、不正确。定制能力是不必要的，因为公司不需要微调或模型定制。 F. 不正确。输入/输出长度不是主要问题，因为用例没有提及文本长度的具体限制或要求。

---

## Question 104  `#104`

**EN** A company needs to deploy a natural language understanding (NLU) model for their chatbot. The model must support multiple languages, provide real-time responses with low latency, and allow for customization to fit the company's unique vocabulary. Which criteria should they prioritize when selecting a pre-trained model?

**中** 公司需要为其聊天机器人部署自然语言理解 (NLU) 模型。该模型必须支持多种语言，提供低延迟的实时响应，并允许进行定制以适应公司独特的词汇。在选择预训练模型时，他们应该优先考虑哪些标准？

- **A.** Multi-lingual support
  - 多语言支持
- **B.** Latency
  - 延迟
- **C.** Model size
  - 型号尺寸
- **D.** Customization capabilities
  - 定制能力
- **E.** Cost
  - 成本

**正确答案 / Answer: `A,B,D`**

The company needs a model that supports multiple languages, provides low latency for real-time responses, and can be customized to fit their unique vocabulary. These criteria directly align with the requirements stated in the scenario. While model size and cost may be general considerations, they are not explicitly prioritized here.
A. Correct. Multi-lingual support is necessary since the model needs to function in multiple languages for a global audience.
B. Correct. Latency is important for real-time responses, as a chatbot requires low response times to ensure a good user experience.
C. Incorrect. Model size is not explicitly mentioned as a requirement, so it is less relevant in this specific scenario.
D. Correct. Customization capabilities are needed to adapt the model to the company’s unique vocabulary and use case.
E. Incorrect. While cost is always a consideration, it is not explicitly mentioned as a priority in this scenario.

该公司需要一个支持多种语言、为实时响应提供低延迟并且可以进行定制以适应其独特词汇的模型。这些标准与场景中规定的要求直接一致。虽然模型大小和成本可能是一般考虑因素，但此处并未明确优先考虑它们。答：正确。多语言支持是必要的，因为该模型需要以多种语言为全球受众运行。 B、正确。延迟对于实时响应非常重要，因为聊天机器人需要较短的响应时间才能确保良好的用户体验。 C、不正确。模型大小没有作为要求明确提及，因此在此特定场景中相关性较小。 D、正确。需要定制功能来使模型适应公司独特的词汇和用例。 E、不正确。虽然成本始终是一个考虑因素，但在这种情况下并没有明确提到它是优先事项。

---

## Question 105  `#105`

**EN** You are developing a chatbot for a multilingual customer service application that must support text input in multiple languages and provide responses with minimal latency. Your team prefers to minimize customization efforts and is considering using a pre-trained model. Which criteria should you prioritize when selecting the pre-trained model?

**中** 您正在为多语言客户服务应用程序开发一个聊天机器人，该应用程序必须支持多种语言的文本输入并以最小的延迟提供响应。您的团队希望最大限度地减少定制工作，并正在考虑使用预先训练的模型。选择预训练模型时应优先考虑哪些标准？

- **A.** Support for multiple languages
  - 支持多种语言
- **B.** Low inference latency
  - 低推理延迟
- **C.** High customization capability
  - 高定制能力
- **D.** Large model size
  - 大型号尺寸
- **E.** Cost efficiency
  - 成本效率

**正确答案 / Answer: `A,B`**

The key requirements for this scenario are multilingual support and minimal latency, as the chatbot must handle multiple languages and provide quick responses. While other factors like model size, cost, and customization are important in general, they are not the primary selection criteria for this specific use case. By prioritizing multilingual support and low latency, the team can ensure the chatbot meets its functional and performance requirements.
A. Correct. Support for multiple languages is crucial since the chatbot must handle text input in different languages. Pre-trained models with multilingual support are necessary for this use case.
B. Correct. Low inference latency is important because the chatbot needs to provide responses quickly, ensuring a good customer experience.
C. Incorrect. High customization capability is not the primary focus here, as the team prefers to minimize customization efforts. Pre-trained models that work out-of-the-box are more suitable.
D. Incorrect. Large model size is not directly relevant to this scenario. While larger models may offer better accuracy, they might also increase latency and cost, which are not priorities here.
E. Incorrect. Cost efficiency is always a consideration, but it is not explicitly mentioned as a priority in this scenario. The focus is on multilingual support and low latency.

此场景的关键要求是多语言支持和最小延迟，因为聊天机器人必须处理多种语言并提供快速响应。虽然模型大小、成本和定制等其他因素通常很重要，但它们并不是此特定用例的主要选择标准。通过优先考虑多语言支持和低延迟，团队可以确保聊天机器人满足其功能和性能要求。答：正确。对多种语言的支持至关重要，因为聊天机器人必须处理不同语言的文本输入。此用例需要具有多语言支持的预训练模型。 B、正确。低推理延迟非常重要，因为聊天机器人需要快速提供响应，确保良好的客户体验。 C、不正确。高定制能力不是这里的主要关注点，因为团队更愿意最大限度地减少定制工作。开箱即用的预训练模型更合适。 D、不正确。大模型尺寸与此场景没有直接关系。虽然较大的模型可能提供更好的准确性，但它们也可能会增加延迟和成本，这不是这里的优先事项。 E、不正确。成本效率始终是一个考虑因素，但在这种情况下并没有明确提到它是优先事项。重点是多语言支持和低延迟。

---

## Question 106  `#106`

**EN** You are deploying a natural language processing (NLP) model on Amazon SageMaker for generating text responses. During testing, you notice that the responses are highly random and lack coherence. Which inference parameter should you adjust to make the model's responses more focused and deterministic?

**中** 您正在 Amazon SageMaker 上部署自然语言处理 (NLP) 模型以生成文本响应。在测试过程中，您会注意到响应高度随机且缺乏连贯性。您应该调整哪个推理参数以使模型的响应更加集中和确定性？

- **A.** Increase the temperature parameter
  - 增加温度参数
- **B.** Decrease the temperature parameter
  - 降低温度参数
- **C.** Increase the maximum output length parameter
  - 增加最大输出长度参数
- **D.** Decrease the input length parameter
  - 减少输入长度参数

**正确答案 / Answer: `B`**

The temperature parameter controls the randomness in a model's predictions. A higher temperature allows for more diverse outputs, while a lower temperature makes the model's responses more deterministic and focused. In this scenario, reducing the temperature will mitigate the issue of incoherent and overly random responses, making the output more predictable and aligned with the expected behavior.
A. Incorrect. Increasing the temperature parameter introduces more randomness into the model's predictions, making the output less deterministic and more varied. This would worsen the issue of incoherence.
B. Correct. Decreasing the temperature parameter reduces randomness in the model's predictions, making the output more deterministic and focused. This is the correct solution to address the issue of incoherent responses.
C. Incorrect. Increasing the maximum output length parameter allows the model to generate longer responses, but it does not directly address the issue of randomness or coherence in the text generation.
D. Incorrect. Decreasing the input length parameter limits the amount of input provided to the model, which may lead to less context for generating responses but does not directly control randomness or coherence.

温度参数控制模型预测的随机性。较高的温度允许更多样化的输出，而较低的温度使模型的响应更加确定和集中。在这种情况下，降低温度将缓解不连贯和过度随机响应的问题，使输出更加可预测并与预期行为保持一致。 A. 不正确。增加温度参数会给模型的预测带来更多的随机性，从而使输出的确定性降低且更加多样化。这将使不连贯的问题变得更加严重。 B、正确。降低温度参数可以减少模型预测的随机性，使输出更加确定和集中。这是解决响应不一致问题的正确解决方案。 C、不正确。增加最大输出长度参数允许模型生成更长的响应，但它并不能直接解决文本生成中的随机性或连贯性问题。 D、不正确。减少输入长度参数会限制提供给模型的输入量，这可能会导致生成响应的上下文减少，但不会直接控制随机性或一致性。

---

## Question 107  `#107`

**EN** You are deploying a text generation model using Amazon SageMaker and want to control the randomness and creativity of the model's responses. Additionally, you need to ensure that the responses are concise and do not exceed a specific number of tokens. Which inference parameters should you adjust to achieve this?

**中** 您正在使用 Amazon SageMaker 部署文本生成模型，并希望控制模型响应的随机性和创造性。此外，您需要确保响应简洁并且不超过特定数量的令牌。您应该调整哪些推理参数来实现这一目标？

- **A.** Temperature
  - 温度
- **B.** Max tokens
  - 最大代币数
- **C.** Top-k sampling
  - Top-k 采样
- **D.** Learning rate
  - 学习率
- **E.** Batch size
  - 批量大小

**正确答案 / Answer: `A,B`**

To control the randomness and creativity of a model's responses, you adjust the 'Temperature' parameter. To limit the output length and ensure concise responses, you use the 'Max tokens' parameter. Other parameters like learning rate and batch size are not relevant to inference behavior, while Top-k sampling could influence randomness but is less central to this specific scenario.
A. Correct. Temperature controls the randomness of the model's responses. A lower temperature results in more deterministic outputs, while a higher temperature allows for more creative and varied responses. This parameter directly impacts the randomness of the model's predictions.
B. Correct. Max tokens determines the maximum length of the output generated by the model. This is crucial for ensuring that the responses remain concise and within a predefined token limit.
C. Incorrect. Top-k sampling is another inference parameter that controls randomness by limiting the model's choices to the top-k most probable tokens. However, it is not directly as relevant as temperature or max tokens in this specific scenario.
D. Incorrect. Learning rate is a parameter used during model training to control the step size during optimization. It does not affect inference behavior and is irrelevant in this context.
E. Incorrect. Batch size is a parameter related to the number of input samples processed together during inference or training. It does not directly influence the randomness or length of the model's responses.

要控制模型响应的随机性和创造性，您可以调整“温度”参数。为了限制输出长度并确保简洁的响应，您可以使用“最大标记”参数。其他参数（例如学习率和批量大小）与推理行为无关，而 Top-k 采样可能会影响随机性，但对于这种特定场景来说不太重要。答：正确。温度控制模型响应的随机性。较低的温度会产生更具确定性的输出，而较高的温度会产生更具创造性和多样化的响应。该参数直接影响模型预测的随机性。 B、正确。最大令牌决定了模型生成的输出的最大长度。这对于确保响应保持简洁并在预定义的令牌限制内至关重要。 C、不正确。Top-k 采样是另一个推理参数，它通过将模型的选择限制为前 k 个最可能的标记来控制随机性。然而，在这种特定情况下，它并不像温度或最大令牌那样直接相关。 D、不正确。学习率是模型训练过程中使用的参数，用于控制优化过程中的步长。它不会影响推理行为，并且与此上下文无关。 E、不正确。批量大小是与推理或训练期间一起处理的输入样本数量相关的参数。它不会直接影响模型响应的随机性或长度。

---

## Question 108  `#108`

**EN** You are deploying a natural language processing (NLP) model on Amazon SageMaker to generate creative story prompts for writers. During testing, you notice that the generated prompts are either repetitive or lack creativity. Which inference parameter should you adjust to encourage more diverse and creative outputs?

**中** 您正在 Amazon SageMaker 上部署自然语言处理 (NLP) 模型，为作家生成创意故事提示。在测试过程中，您会注意到生成的提示要么是重复的，要么缺乏创意。您应该调整哪个推理参数来鼓励更加多样化和创造性的输出？

- **A.** Increase the temperature value
  - 增加温度值
- **B.** Decrease the temperature value
  - 降低温度值
- **C.** Reduce the maximum input length
  - 减少最大输入长度
- **D.** Set the output length to a fixed value
  - 将输出长度设置为固定值

**正确答案 / Answer: `A`**

Temperature is a key inference parameter in text generation models. It controls the randomness of the output by scaling the probability distribution of possible next words. A higher temperature encourages the model to explore less likely words, resulting in more creative and diverse outputs. In this scenario, increasing the temperature value is the best approach to address the observed lack of creativity.
A. Correct. Increasing the temperature value makes the model's output more random and diverse, which can encourage creativity. A higher temperature allows the model to explore less probable outputs.
B. Incorrect. Decreasing the temperature value makes the outputs more deterministic and focused on the most probable results, which is not ideal for encouraging creativity or diversity.
C. Incorrect. Reducing the maximum input length might truncate important context for the model, but it does not directly relate to the diversity or creativity of the output.
D. Incorrect. Setting the output length to a fixed value can control the length of the response but does not influence the diversity or creativity of the generated text.

温度是文本生成模型中的关键推理参数。它通过缩放可能的下一个单词的概率分布来控制输出的随机性。较高的温度会鼓励模型探索不太可能的单词，从而产生更具创意和多样化的输出。在这种情况下，增加温度值是解决观察到的缺乏创造力的最佳方法。答：正确。增加温度值使模型的输出更加随机和多样化，这可以鼓励创造力。较高的温度允许模型探索不太可能的输出。 B、不正确。降低温度值会使输出更具确定性并集中于最可能的结果，这对于鼓励创造力或多样性来说并不理想。 C、不正确。减少最大输入长度可能会截断模型的重要上下文，但它与输出的多样性或创造力没有直接关系。 D、不正确。将输出长度设置为固定值可以控制响应的长度，但不会影响生成文本的多样性或创造性。

---

## Question 109  `#109`

**EN** A company wants to implement a customer support chatbot that provides accurate and context-aware responses to user queries. The chatbot needs to retrieve relevant information from a large internal knowledge base of technical documentation to enhance its answers. Which of the following describes the most suitable approach for this scenario?

**中** A company wants to implement a customer support chatbot that provides accurate and context-aware responses to user queries.聊天机器人需要从大量内部 Knowledge Base 技术文档中检索相关信息，以增强其答案。 Which of the following describes the most suitable approach for this scenario?

- **A.** Use Retrieval Augmented Generation (RAG) to combine a retrieval mechanism with a generative model, enabling the chatbot to fetch relevant knowledge base documents and generate responses.
  - 使用检索增强生成 (RAG) 将检索机制与生成模型相结合，使聊天机器人能够获取相关的 Knowledge Base 文档并生成响应。
- **B.** Deploy a rule-based chatbot that uses predefined responses for common customer queries.
  - 部署基于规则的聊天机器人，该机器人使用预定义的响应来处理常见的客户查询。
- **C.** Use a generative AI model without any retrieval mechanism, relying solely on its pre-trained knowledge to answer queries.
  - 使用没有任何检索机制的生成式人工智能模型，仅依靠其预先训练的知识来回答查询。
- **D.** Implement a traditional keyword-based document search system for retrieving relevant documents, leaving users to interpret the results themselves.
  - 实施传统的基于关键字的文档搜索系统来检索相关文档，让用户自己解释结果。

**正确答案 / Answer: `A`**

Retrieval Augmented Generation (RAG) is an effective solution for scenarios where accurate and context-aware responses are needed. By combining a retrieval mechanism with a generative AI model, RAG allows the chatbot to fetch and incorporate specific, up-to-date information from a knowledge base, enhancing its ability to address user queries. This makes it particularly suitable for applications like customer support, where accuracy and efficiency are critical.
A. Correct. Correct. Retrieval Augmented Generation (RAG) is a suitable approach because it combines a retrieval mechanism to fetch relevant documents from a knowledge base with a generative model to create context-aware responses based on the retrieved information.
B. Incorrect. Incorrect. A rule-based chatbot lacks the flexibility and scalability to handle a wide range of queries or adapt to new information in a large knowledge base.
C. Incorrect. Incorrect. A generative AI model alone may not provide accurate or up-to-date information, especially if the required knowledge is not part of its training data.
D. Incorrect. Incorrect. A keyword-based document search system may retrieve relevant documents but would require users to manually interpret the results, making it less efficient for customer support scenarios.

检索增强生成 (RAG) 是需要准确和上下文感知响应的场景的有效解决方案。通过将检索机制与生成式 AI 模型相结合，RAG 允许聊天机器人从 Knowledge Base 获取并合并特定的最新信息，从而增强其解决用户查询的能力。这使得它特别适合客户支持等精度和效率至关重要的应用。答：正确。正确的。检索增强生成 (RAG) 是一种合适的方法，因为它将从 Knowledge Base 获取相关文档的检索机制与生成模型相结合，以根据检索到的信息创建上下文感知响应。 B、不正确。不正确。基于规则的聊天机器人缺乏处理各种查询或适应大型 Knowledge Base 中的新信息的灵活性和可扩展性。 C、不正确。不正确。单独的生成式人工智能模型可能无法提供准确或最新的信息，特别是当所需的知识不是其训练数据的一部分时。 D、不正确。不正确。基于关键字的文档搜索系统可以检索相关文档，但需要用户手动解释结果，从而降低了客户支持场景的效率。

---

## Question 110  `#110`

**EN** Your company wants to implement a customer support chatbot that can provide accurate responses derived from a large internal knowledge base of product documentation. The chatbot needs to retrieve relevant information dynamically and generate human-like answers for user queries. Which approach would best meet this requirement, and what AWS service could be used to implement it?

**中** 您的公司希望实现一个客户支持聊天机器人，该机器人可以根据大量内部 Knowledge Base 产品文档提供准确的响应。聊天机器人需要动态检索相关信息并为用户查询生成类似人类的答案。哪种方法最能满足此要求？可以使用哪些 AWS 服务来实现它？

- **A.** Use Retrieval Augmented Generation (RAG) to retrieve relevant knowledge base documents and generate responses using a large language model (LLM). Amazon Bedrock can be used to support this approach.
  - 使用检索增强生成 (RAG) 检索相关 Knowledge Base 文档并使用大型语言模型 (LLM) 生成响应。 Amazon Bedrock 可用于支持这种方法。
- **B.** Use a rule-based chatbot that relies on pre-defined scripts and decision trees for answering customer queries.
  - 使用基于规则的聊天机器人，该机器人依靠预定义的脚本和决策树来回答客户的查询。
- **C.** Deploy a standalone large language model (LLM) to generate responses without retrieving any external information.
  - 部署独立的大语言模型 (LLM) 以生成响应，而无需检索任何外部信息。
- **D.** Use Amazon Rekognition to analyze the customer’s sentiment and generate responses based on predefined templates.
  - 使用 Amazon Rekognition 分析客户的情绪并根据预定义的模板生成响应。

**正确答案 / Answer: `A`**

The Retrieval Augmented Generation (RAG) approach is ideal for scenarios where a chatbot needs to combine the power of a large language model (LLM) with domain-specific knowledge retrieval. Amazon Bedrock simplifies the implementation of RAG by offering access to foundational LLMs and the ability to integrate retrieval mechanisms for dynamic and accurate responses. This makes it well-suited for customer support scenarios involving extensive knowledge bases.
A. Correct. This is the correct answer. Retrieval Augmented Generation (RAG) combines document retrieval and generative language models to produce accurate responses by pulling relevant information from external sources like a knowledge base. Amazon Bedrock supports this by providing access to foundation models that can be integrated with retrieval mechanisms.
B. Incorrect. This is incorrect. Rule-based chatbots are limited to pre-defined scripts and do not dynamically retrieve or generate responses based on external knowledge, making them unsuitable for large, evolving knowledge bases.
C. Incorrect. This is incorrect. A standalone LLM cannot ensure the accuracy of its responses as it does not retrieve up-to-date or domain-specific information from external sources.
D. Incorrect. This is incorrect. Amazon Rekognition is a computer vision service and is not designed for natural language understanding or information retrieval tasks.

检索增强生成 (RAG) 方法非常适合聊天机器人需要将大型语言模型 (LLM) 的功能与特定领域的知识检索相结合的场景。 Amazon Bedrock 通过提供对基础 LLMs 的访问以及集成动态准确响应的检索机制的能力，简化了 RAG 的实施。这使得它非常适合涉及大量 Knowledge Bases 的客户支持场景。答：正确。这是正确的答案。检索增强生成 (RAG) 结合了文档检索和生成语言模型，通过从 Knowledge Base 等外部源提取相关信息来生成准确的响应。 Amazon Bedrock 通过提供对可与检索机制集成的基础模型的访问来支持这一点。 B、不正确。这是不正确的。基于规则的聊天机器人仅限于预定义的脚本，并且不会根据外部知识动态检索或生成响应，这使得它们不适合大型、不断发展的 Knowledge Bases。 C、不正确。这是不正确的。独立的 LLM 无法确保其响应的准确性，因为它不会从外部源检索最新或特定于域的信息。 D、不正确。这是不正确的。 Amazon Rekognition 是一项计算机视觉服务，并非专为自然语言理解或信息检索任务而设计。

---

## Question 111  `#111`

**EN** A company wants to build a conversational AI application that can provide accurate and context-aware answers by referencing its internal knowledge base. Which approach would be most suitable to achieve this using Retrieval Augmented Generation (RAG)?

**中** 一家公司希望构建一个对话式 AI 应用程序，该应用程序可以通过引用其内部 Knowledge Base 来提供准确且上下文感知的答案。哪种方法最适合使用检索增强生成 (RAG) 来实现这一目标？

- **A.** Train a large language model (LLM) exclusively on the company's entire knowledge base without further enhancement.
  - 专门在公司整个 Knowledge Base 上训练大型语言模型（LLM），无需进一步增强。
- **B.** Use a Retrieval Augmented Generation (RAG) workflow that retrieves relevant documents from the company's knowledge base and combines them with a pre-trained LLM for response generation.
  - 使用检索增强生成 (RAG) 工作流程，从公司的 Knowledge Base 中检索相关文档，并将其与预先训练的 LLM 相结合以生成响应。
- **C.** Implement a rule-based chatbot system with hardcoded responses for each use case in the knowledge base.
  - 实施基于规则的聊天机器人系统，并针对 Knowledge Base 中的每个用例进行硬编码响应。
- **D.** Use a standalone pre-trained LLM without referencing external data sources during query processing.
  - 使用独立的预训练 LLM，在查询处理期间无需引用外部数据源。

**正确答案 / Answer: `B`**

Retrieval Augmented Generation (RAG) enhances the capabilities of pre-trained language models by incorporating a retrieval step that fetches relevant context or documents from an external knowledge base. This approach is particularly suitable for applications requiring dynamic and accurate responses based on a proprietary dataset or knowledge base. By leveraging the RAG framework, the company can combine the power of pre-trained LLMs with its internal knowledge base to provide high-quality, context-aware answers.
A. Incorrect. Training a large language model (LLM) exclusively on the company's knowledge base would require significant resources, time, and expertise. Additionally, it lacks the dynamic retrieval capability that RAG offers.
B. Correct. RAG integrates a retrieval system to fetch relevant documents from the knowledge base and combines them with a pre-trained LLM. This makes it highly effective for generating accurate and context-aware responses dynamically.
C. Incorrect. A rule-based chatbot system is rigid and lacks the flexibility and contextual understanding provided by models utilizing the RAG framework.
D. Incorrect. A standalone pre-trained LLM can produce generic responses but lacks the ability to reference the company's specific knowledge base, which is critical for accurate and tailored answers.

检索增强生成 (RAG) 通过合并从外部 Knowledge Base 获取相关上下文或文档的检索步骤，增强了预训练语言模型的功能。这种方法特别适合需要基于专有数据集或 Knowledge Base 进行动态且准确响应的应用。通过利用 RAG 框架，该公司可以将预训练的 LLMs 的强大功能与其内部 Knowledge Base 相结合，以提供高质量的上下文感知答案。 A. 不正确。仅在公司的 Knowledge Base 上训练大型语言模型 (LLM) 需要大量资源、时间和专业知识。此外，它缺乏 RAG 提供的动态检索功能。 B、正确。 RAG 集成了一个检索系统，可从 Knowledge Base 中获取相关文档，并将其与预训练的 LLM 相结合。这使得它能够非常有效地动态生成准确且上下文感知的响应。 C、不正确。基于规则的聊天机器人系统是僵化的，缺乏利用 RAG 框架的模型提供的灵活性和上下文理解。 D、不正确。独立的预训练 LLM 可以生成通用响应，但缺乏参考公司特定 Knowledge Base 的能力，而这对于准确和定制的答案至关重要。

---

## Question 112  `#112`

**EN** You are developing an AI-powered recommendation system that uses embeddings to store and retrieve item similarity data. You need to choose an AWS service that supports storing and querying embeddings efficiently within a vector database. Which of the following AWS services are suitable for this use case?

**中** 您正在开发一个人工智能驱动的推荐系统，该系统使用嵌入来存储和检索项目相似性数据。您需要选择支持在向量数据库中高效存储和查询嵌入的 AWS 服务。以下哪些 AWS 服务适合此用例？

- **A.** Amazon OpenSearch Service
  - Amazon OpenSearch 服务
- **B.** Amazon Aurora
  - Amazon Aurora
- **C.** Amazon Neptune
  - Amazon Neptune
- **D.** Amazon DocumentDB (with MongoDB compatibility)
  - Amazon DocumentDB（与 MongoDB 兼容）
- **E.** Amazon RDS for PostgreSQL
  - 适用于 PostgreSQL 的 Amazon RDS
- **F.** AWS Glue
  - AWS Glue

**正确答案 / Answer: `A,C,D,E`**

Several AWS services can be used to store and query embeddings based on the use case. Amazon OpenSearch Service provides built-in vector search capabilities, making it ideal for storing embeddings for similarity searches. Amazon Neptune supports graph-based use cases involving embeddings. Amazon DocumentDB and Amazon RDS for PostgreSQL are also suitable for storing embeddings, with RDS for PostgreSQL supporting vector operations via extensions like pgvector. AWS Glue, however, is not relevant as it focuses on data integration rather than storage or querying of embeddings.
A. Correct. Amazon OpenSearch Service supports vector search capabilities, making it a suitable choice for storing and querying embeddings efficiently.
B. Incorrect. Amazon Aurora is a relational database that does not inherently support vector operations or embeddings natively.
C. Correct. Amazon Neptune is a graph database that supports storing and querying embeddings for graph-based use cases, making it relevant in this context.
D. Correct. Amazon DocumentDB (with MongoDB compatibility) can store embeddings and supports flexible querying, making it a suitable candidate.
E. Correct. Amazon RDS for PostgreSQL supports extensions like pgvector, enabling it to store and query embeddings effectively.
F. Incorrect. AWS Glue is a data integration service and is not designed for storing or querying embeddings.

根据用例，可以使用多种 AWS 服务来存储和查询嵌入。 Amazon OpenSearch 服务提供内置矢量搜索功能，非常适合存储相似性搜索的嵌入。 Amazon Neptune 支持涉及嵌入的基于图形的用例。 Amazon DocumentDB 和 Amazon RDS for PostgreSQL 也适合存储嵌入，其中 RDS for PostgreSQL 通过 pgvector 等扩展支持向量操作。然而，AWS Glue 并不相关，因为它专注于数据集成而不是嵌入的存储或查询。答：正确。 Amazon OpenSearch 服务支持矢量搜索功能，使其成为高效存储和查询嵌入的合适选择。 B、不正确。 Amazon Aurora 是一个关系数据库，本身并不支持向量运算或嵌入。 C、正确。 Amazon Neptune 是一个图形数据库，支持存储和查询基于图形的用例的嵌入，使其与此上下文相关。 D .正确的。 Amazon DocumentDB（与 MongoDB 兼容）可以存储嵌入并支持灵活的查询，使其成为合适的候选者。 E、正确。 Amazon RDS for PostgreSQL 支持 pgvector 等扩展，使其能够有效地存储和查询嵌入。 F. 不正确。 AWS Glue 是一项数据集成服务，不适用于存储或查询嵌入。

---

## Question 113  `#113`

**EN** A data science team is working on a recommendation system that involves storing and querying vector embeddings generated by a machine learning model. The team needs to store these embeddings in a database optimized for vector similarity searches and ensure scalability for their growing dataset. Which AWS services should they consider for storing and querying these embeddings?

**中** 数据科学团队正在开发一个推荐系统，该系统涉及存储和查询机器学习模型生成的向量嵌入。该团队需要将这些嵌入存储在针对向量相似性搜索优化的数据库中，并确保其不断增长的数据集的可扩展性。他们应该考虑使用哪些 AWS 服务来存储和查询这些嵌入？

- **A.** Amazon OpenSearch Service
  - Amazon OpenSearch 服务
- **B.** Amazon Aurora
  - Amazon Aurora
- **C.** Amazon Neptune
  - Amazon Neptune
- **D.** Amazon DocumentDB (with MongoDB compatibility)
  - Amazon DocumentDB（与 MongoDB 兼容）
- **E.** Amazon RDS for PostgreSQL
  - 适用于 PostgreSQL 的 Amazon RDS

**正确答案 / Answer: `A,C`**

When working with vector embeddings, it is critical to use a database optimized for vector similarity searches. Amazon OpenSearch Service is designed for full-text search and recently incorporated vector search capabilities, making it ideal for this purpose. Additionally, Amazon Neptune supports graph-based use cases and can handle embeddings effectively when combined with graph algorithms. Other services like Aurora, DocumentDB, and RDS for PostgreSQL are not optimized for vector search and thus are not suitable for this specific requirement.
A. Correct. Amazon OpenSearch Service supports vector search capabilities, making it suitable for storing and querying embeddings efficiently.
B. Incorrect. Amazon Aurora is a relational database that is not optimized for vector similarity searches. It is better suited for structured data and transactional use cases.
C. Correct. Amazon Neptune is a graph database that supports graph-based queries and vector embeddings, making it a valid option for storing and querying embeddings.
D. Incorrect. Amazon DocumentDB is a document database compatible with MongoDB but does not natively support vector similarity search, making it less ideal for this use case.
E. Incorrect. Amazon RDS for PostgreSQL is a relational database that does not have native support for vector similarity searches, making it unsuitable for this scenario.

使用向量嵌入时，使用针对向量相似性搜索优化的数据库至关重要。 Amazon OpenSearch 服务专为全文搜索而设计，最近还集成了矢量搜索功能，使其成为此目的的理想选择。此外，Amazon Neptune 支持基于图的用例，并且与图算法结合时可以有效地处理嵌入。其他服务（例如 Aurora、DocumentDB 和 RDS for PostgreSQL）未针对向量搜索进行优化，因此不适合此特定要求。答：正确。 Amazon OpenSearch 服务支持矢量搜索功能，使其适合高效存储和查询嵌入。 B、不正确。 Amazon Aurora 是一个关系数据库，未针对矢量相似性搜索进行优化。它更适合结构化数据和事务用例。 C、正确。Amazon Neptune 是一个图数据库，支持基于图的查询和向量嵌入，使其成为存储和查询嵌入的有效选项。 D、不正确。 Amazon DocumentDB 是与 MongoDB 兼容的文档数据库，但本身不支持向量相似性搜索，因此不太适合此用例。 E、不正确。 Amazon RDS for PostgreSQL 是一种关系数据库，本身不支持向量相似性搜索，因此不适合此场景。

---

## Question 114  `#114`

**EN** A company is building a recommendation engine that requires storing and querying high-dimensional vector embeddings for similarity searches. Which of the following AWS services can be used to store embeddings within a vector database for this use case?

**中** 一家公司正在构建一个推荐引擎，需要存储和查询高维向量嵌入以进行相似性搜索。对于此用例，以下哪些 AWS 服务可用于在矢量数据库中存储嵌入？

- **A.** Amazon OpenSearch Service
  - Amazon OpenSearch 服务
- **B.** Amazon Aurora
  - Amazon Aurora
- **C.** Amazon Neptune
  - Amazon Neptune
- **D.** Amazon RDS for PostgreSQL
  - 适用于 PostgreSQL 的 Amazon RDS
- **E.** Amazon DynamoDB
  - 亚马逊动态数据库

**正确答案 / Answer: `A,C,D`**

To store embeddings for similarity searches in vector databases, services like Amazon OpenSearch Service, Amazon Neptune, and Amazon RDS for PostgreSQL are suitable. OpenSearch supports vector-based operations natively, Neptune is ideal for graph-based embeddings, and PostgreSQL can use extensions like pgvector. While Amazon Aurora and DynamoDB are powerful databases, they are not designed specifically for vector embeddings or similarity searches.
A. Correct. Amazon OpenSearch Service is a suitable option for storing vector embeddings as it supports nearest neighbor search for vector-based queries, which is essential for similarity searches.
B. Incorrect. Amazon Aurora is a relational database and does not natively support vector operations or similarity searches required for handling embeddings.
C. Correct. Amazon Neptune is a graph database that can store embeddings and perform similarity searches, especially when embeddings are part of graph-based datasets.
D. Correct. Amazon RDS for PostgreSQL is a relational database but supports extensions like pgvector, which can enable the storage and querying of vector embeddings.
E. Incorrect. Amazon DynamoDB is a NoSQL database and is not designed specifically for storing or querying vector embeddings or performing similarity searches.

要在向量数据库中存储用于相似性搜索的嵌入，Amazon OpenSearch Service、Amazon Neptune 和 Amazon RDS for PostgreSQL 等服务适合。 OpenSearch 原生支持基于向量的操作，Neptune 非常适合基于图的嵌入，而 PostgreSQL 可以使用 pgvector 等扩展。虽然 Amazon Aurora 和 DynamoDB 是功能强大的数据库，但它们并不是专门为向量嵌入或相似性搜索而设计的。答：正确。 Amazon OpenSearch 服务是存储向量嵌入的合适选项，因为它支持基于向量的查询的最近邻搜索，这对于相似性搜索至关重要。 B、不正确。 Amazon Aurora 是一个关系数据库，本身不支持处理嵌入所需的向量操作或相似性搜索。 C、正确。 Amazon Neptune 是一个图数据库，可以存储嵌入并执行相似性搜索，特别是当嵌入是基于图的数据集的一部分时。 D、正确。Amazon RDS for PostgreSQL 是一个关系数据库，但支持 pgvector 等扩展，可以实现向量嵌入的存储和查询。 E、不正确。 Amazon DynamoDB 是一种 NoSQL 数据库，并不是专门为存储或查询向量嵌入或执行相似性搜索而设计的。

---

## Question 115  `#115`

**EN** A company wants to customize a foundation model for their specific use case of analyzing customer reviews and extracting sentiments. They are evaluating pre-training, fine-tuning, in-context learning, and retrieval-augmented generation (RAG) approaches. Which approaches are likely to result in the lowest cost while still achieving reasonable performance for their task?

**中** 一家公司希望为其分析客户评论和提取情绪的特定用例定制基础模型。他们正在评估预训练、微调、上下文学习和检索增强生成 (RAG) 方法。哪些方法可能会带来最低的成本，同时仍能实现合理的任务性能？

- **A.** Pre-training a new foundation model from scratch
  - 从头开始预训练新的基础模型
- **B.** Fine-tuning an existing foundation model on labeled customer reviews
  - 根据标记的客户评论微调现有基础模型
- **C.** Using in-context learning by providing customer reviews as examples in the input prompt
  - 通过在输入提示中提供客户评论作为示例来使用上下文学习
- **D.** Implementing retrieval-augmented generation (RAG) to provide customer review data as context during inference
  - 实施检索增强生成 (RAG)，以在推理过程中提供客户评论数据作为上下文

**正确答案 / Answer: `C,D`**

For a task like extracting sentiments from customer reviews, in-context learning and retrieval-augmented generation (RAG) are the most cost-effective approaches. Both methods avoid the computational and financial overhead of training or fine-tuning a model. In-context learning utilizes examples directly in the input, while RAG dynamically retrieves relevant information to enhance inference. Pre-training is only suitable for organizations with extensive resources, and fine-tuning, while effective, still incurs higher costs compared to in-context learning or RAG.
A. Incorrect. Pre-training a new foundation model from scratch is the most expensive option because it requires significant computational resources, large amounts of data, and time. This is not cost-effective for most business use cases.
B. Incorrect. Fine-tuning an existing foundation model can be more cost-effective than pre-training, but it still requires labeled data and computational resources to retrain the model parameters, which can make it relatively expensive.
C. Correct. Using in-context learning is a cost-efficient approach since it does not require retraining the model. Instead, examples are provided during inference, leveraging the model's existing capabilities with minimal overhead.
D. Correct. Retrieval-augmented generation (RAG) avoids the need for model retraining by dynamically retrieving relevant information during inference. This is cost-effective, especially when dealing with large datasets like customer reviews, as it combines retrieval systems with existing models.

对于从客户评论中提取情感这样的任务，上下文学习和检索增强生成（RAG）是最具成本效益的方法。这两种方法都避免了训练或微调模型的计算和财务开销。上下文学习直接利用输入中的示例，而 RAG 动态检索相关信息以增强推理。预训练只适合资源丰富的组织，微调虽然有效，但与情境学习或 RAG 相比，成本仍然较高。 A. 不正确。从头开始预训练新的基础模型是最昂贵的选择，因为它需要大量的计算资源、大量的数据和时间。对于大多数业务用例来说，这并不具有成本效益。 B、不正确。微调现有的基础模型可能比预训练更具成本效益，但它仍然需要标记数据和计算资源来重新训练模型参数，这可能使其相对昂贵。 C、正确。使用上下文学习是一种经济高效的方法，因为它不需要重新训练模型。相反，在推理过程中提供示例，以最小的开销利用模型的现有功能。 D、正确。检索增强生成 (RAG) 通过在推理过程中动态检索相关信息，避免了模型重新训练的需要。这是具有成本效益的，特别是在处理客户评论等大型数据集时，因为它将检索系统与现有模型相结合。

---

## Question 116  `#116`

**EN** A company wants to build a customer support chatbot using a foundation model. They are evaluating different customization approaches to minimize costs while achieving acceptable performance. Which approach would likely have the lowest overall cost if the company requires the chatbot to handle domain-specific queries but does not have extensive machine learning expertise?

**中** 一家公司希望使用基础模型构建客户支持聊天机器人。他们正在评估不同的定制方法，以最大限度地降低成本，同时实现可接受的性能。如果公司需要聊天机器人处理特定领域的查询但不具备广泛的机器学习专业知识，哪种方法可能具有最低的总体成本？

- **A.** Pre-training a new foundation model from scratch using their domain-specific data
  - 使用特定领域的数据从头开始预训练新的基础模型
- **B.** Fine-tuning an existing foundation model on a small set of domain-specific data
  - 在一小部分特定于领域的数据上微调现有的基础模型
- **C.** Using in-context learning with a pre-trained foundation model by providing domain-specific examples as part of the input prompt
  - 通过提供特定领域的示例作为输入提示的一部分，将上下文学习与预先训练的基础模型结合使用
- **D.** Implementing a Retrieval-Augmented Generation (RAG) solution that combines the foundation model with an external knowledge datastore
  - 实施将基础模型与外部知识数据存储相结合的检索增强生成 (RAG) 解决方案

**正确答案 / Answer: `C`**

In-context learning is the most cost-effective customization approach for the scenario described because it eliminates the need for training or fine-tuning the model. Instead, domain-specific examples can be provided directly in the input prompt to guide the model’s behavior. This approach is ideal for companies that lack extensive machine learning expertise and want to minimize costs while still achieving acceptable performance for domain-specific tasks. Other approaches, such as pre-training, fine-tuning, or RAG, involve greater costs or technical complexity.
A. Incorrect. Pre-training a new foundation model from scratch is extremely resource-intensive, requiring significant computational resources and expertise. This approach would have the highest cost and is not suitable for companies without extensive ML expertise.
B. Incorrect. Fine-tuning an existing foundation model can reduce costs compared to pre-training but still requires some machine learning expertise and access to computational resources for training. While less expensive than pre-training, this is not the lowest-cost option.
C. Correct. In-context learning allows the use of a pre-trained foundation model without requiring model retraining. By providing domain-specific examples in the input, the company avoids the need for training infrastructure, making this the lowest-cost option that still achieves acceptable performance for many use cases.
D. Incorrect. A Retrieval-Augmented Generation (RAG) approach can improve domain-specific performance by combining an external knowledge store with a foundation model, but setting up and maintaining the knowledge datastore can involve additional costs and technical complexity compared to in-context learning.

上下文学习是针对所描述的场景最具成本效益的定制方法，因为它消除了训练或微调模型的需要。相反，可以直接在输入提示中提供特定于领域的示例来指导模型的行为。对于缺乏广泛的机器学习专业知识并希望最大限度地降低成本，同时仍为特定领域的任务实现可接受的性能的公司来说，这种方法是理想的选择。其他方法，例如预训练、微调或 RAG，涉及更高的成本或技术复杂性。 A. 不正确。从头开始预训练新的基础模型需要大量资源，需要大量的计算资源和专业知识。这种方法的成本最高，不适合没有丰富的机器学习专业知识的公司。 B、不正确。与预训练相比，微调现有基础模型可以降低成本，但仍然需要一些机器学习专业知识和访问计算资源进行训练。虽然比预训练便宜，但这并不是成本最低的选择。 C、正确。上下文学习允许使用预先训练的基础模型，而不需要模型重新训练。通过在输入中提供特定领域的示例，该公司避免了对培训基础设施的需求，使其成为成本最低的选项，但在许多用例中仍能实现可接受的性能。 D、不正确。检索增强生成 (RAG) 方法可以通过将外部知识存储与基础模型相结合来提高特定领域的性能，但与上下文学习相比，设置和维护知识数据存储可能会涉及额外的成本和技术复杂性。

---

## Question 117  `#117`

**EN** Your team is building a chatbot using a foundation model to assist customers with product inquiries. You are considering customization approaches to optimize performance while managing costs. Which customization approach is most cost-effective if your primary goal is to minimize compute resources and training time, while still tailoring responses to your specific product catalog?

**中** 您的团队正在使用基础模型构建一个聊天机器人，以帮助客户进行产品查询。您正在考虑定制方法来优化性能，同时管理成本。如果您的主要目标是最大限度地减少计算资源和培训时间，同时仍然根据您的特定产品目录定制响应，那么哪种定制方法最具成本效益？

- **A.** Pre-training a new foundation model from scratch using your product catalog data.
  - 使用产品目录数据从头开始预训练新的基础模型。
- **B.** Fine-tuning an existing foundation model with your product-specific data.
  - 使用特定于产品的数据微调现有基础模型。
- **C.** Using in-context learning by providing product-specific examples in the input prompts.
  - 通过在输入提示中提供特定于产品的示例来使用上下文学习。
- **D.** Implementing a Retrieval-Augmented Generation (RAG) approach to fetch product-specific information from a knowledge base.
  - 实施检索增强生成 (RAG) 方法以从 Knowledge Base 获取产品特定信息。

**正确答案 / Answer: `C`**

In-context learning is the most cost-effective approach when attempting to customize foundation models without incurring compute-intensive training costs. By providing product-specific examples in the input prompts, the model can be tailored to specific needs without modifying its underlying parameters. Other approaches, such as pre-training or fine-tuning, involve significant compute and training time, while RAG introduces additional operational overhead.
A. Incorrect. Pre-training a new foundation model from scratch is highly expensive in terms of compute resources, data requirements, and time. This approach is unnecessary when existing models can be adapted more cost-effectively.
B. Incorrect. Fine-tuning an existing foundation model is cheaper than pre-training, but it still requires significant compute resources and can be costly compared to lighter-weight solutions like in-context learning.
C. Correct. In-context learning involves providing examples in the input prompt without modifying the model itself. This approach avoids training costs entirely, making it highly cost-effective for scenarios where minimal customization is needed.
D. Incorrect. While RAG is cost-effective for dynamically retrieving information, it requires setting up and managing an external knowledge base, which may introduce additional operational costs and complexities compared to in-context learning.

当尝试定制基础模型而不产生计算密集型培训成本时，上下文学习是最具成本效益的方法。通过在输入提示中提供特定于产品的示例，可以根据特定需求定制模型，而无需修改其基础参数。其他方法（例如预训练或微调）涉及大量计算和训练时间，而 RAG 则引入了额外的操作开销。 A. 不正确。从头开始预训练新的基础模型在计算资源、数据要求和时间方面都非常昂贵。当现有模型可以更经济有效地进行调整时，这种方法是不必要的。 B、不正确。微调现有的基础模型比预训练更便宜，但它仍然需要大量的计算资源，并且与上下文学习等轻量级解决方案相比成本可能很高。 C、正确。上下文学习涉及在输入提示中提供示例，而不修改模型本身。这种方法完全避免了培训成本，对于需要最少定制的场景来说非常经济高效。 D、不正确。虽然 RAG 对于动态检索信息来说具有成本效益，但它需要设置和管理外部 Knowledge Base，与上下文学习相比，这可能会带来额外的运营成本和复杂性。

---

## Question 118  `#118`

**EN** A company is building a customer support chatbot that uses Amazon Bedrock to complete multi-step tasks. The chatbot needs to collect user information, validate it against a database, and then confirm the appointment with a personalized response. Which of the following best describes how an agent in Amazon Bedrock can help achieve this functionality?

**中** 一家公司正在构建一个客户支持聊天机器人，该机器人使用 Amazon Bedrock 来完成多步骤任务。聊天机器人需要收集用户信息，根据数据库进行验证，然后通过个性化响应确认约会。以下哪一项最好地描述了 Amazon Bedrock 中的代理如何帮助实现此功能？

- **A.** An agent in Amazon Bedrock orchestrates the workflow by breaking down the multi-step task into manageable API calls to different systems.
  - Amazon Bedrock 中的代理通过将多步骤任务分解为对不同系统的可管理 API 调用来编排工作流程。
- **B.** An agent in Amazon Bedrock directly stores user data in Amazon S3 for future processing.
  - Amazon Bedrock 中的代理直接将用户数据存储在 Amazon S3 中以供将来处理。
- **C.** An agent in Amazon Bedrock is responsible for training machine learning models to improve chatbot accuracy.
  - Amazon Bedrock 中的代理负责训练机器学习模型以提高聊天机器人的准确性。
- **D.** An agent in Amazon Bedrock handles natural language understanding and directly generates responses without needing external API integration.
  - Amazon Bedrock 中的代理处理自然语言理解并直接生成响应，无需外部 API 集成。

**正确答案 / Answer: `A`**

Agents in Amazon Bedrock are designed to orchestrate multi-step workflows by breaking down tasks into smaller steps and interacting with APIs or external systems as necessary. In this scenario, the agent would manage the process of collecting information, validating it, and generating a confirmation response by integrating with the required systems, which aligns with the functionality described in option 1.
A. Correct. Correct. An agent in Amazon Bedrock can orchestrate multi-step workflows by breaking down tasks into smaller actions, integrating with APIs or external systems as needed.
B. Incorrect. Incorrect. Storing user data is not the primary role of an agent in Amazon Bedrock. Data storage would typically be handled by services like Amazon S3 or DynamoDB, not the agent itself.
C. Incorrect. Incorrect. Training machine learning models is not the role of an agent in Amazon Bedrock. Agents are designed for orchestrating tasks, not model training.
D. Incorrect. Incorrect. While an agent in Amazon Bedrock may handle natural language interactions, completing multi-step tasks often requires external API calls, which this option does not describe.

Amazon Bedrock 中的代理旨在通过将任务分解为更小的步骤并根据需要与 API 或外部系统交互来编排多步骤工作流程。在这种情况下，代理将通过与所需系统集成来管理收集信息、验证信息并生成确认响应的过程，这与选项 1.A. 正确中描述的功能一致。正确的。 Amazon Bedrock 中的代理可以通过将任务分解为更小的操作来编排多步骤工作流程，并根据需要与 API 或外部系统集成。 B、不正确。不正确。存储用户数据并不是 Amazon Bedrock 中代理的主要角色。数据存储通常由 Amazon S3 或 DynamoDB 等服务处理，而不是代理本身。 C、不正确。不正确。训练机器学习模型并不是 Amazon Bedrock 中代理的角色。代理是为编排任务而设计的，而不是模型训练。 D、不正确。不正确。虽然 Amazon Bedrock 中的代理可以处理自然语言交互，但完成多步骤任务通常需要外部 API 调用，此选项未对此进行描述。

---

## Question 119  `#119`

**EN** You are building a customer support chatbot using Agents for Amazon Bedrock. The chatbot must perform multiple tasks, such as answering common product queries, processing refund requests, and providing shipping updates. How does the role of agents help in managing these multi-step tasks effectively?

**中** 您正在使用 Agents for Amazon Bedrock 构建客户支持聊天机器人。聊天机器人必须执行多项任务，例如回答常见的产品查询、处理退款请求以及提供发货更新。代理的角色如何帮助有效管理这些多步骤任务？

- **A.** Agents allow the chatbot to break down multi-step tasks into smaller, manageable sub-tasks.
  - 代理允许聊天机器人将多步骤任务分解为更小的、可管理的子任务。
- **B.** Agents are used to directly store customer data in Amazon S3 for processing multi-step tasks.
  - 代理用于将客户数据直接存储在 Amazon S3 中，用于处理多步骤任务。
- **C.** Agents integrate seamlessly with external APIs to execute actions required for multi-step tasks.
  - 代理与外部 API 无缝集成，以执行多步骤任务所需的操作。
- **D.** Agents replace the need for large language models in handling multi-step tasks.
  - 代理在处理多步骤任务时取代了对大型语言模型的需求。

**正确答案 / Answer: `A`**

Agents for Amazon Bedrock play a critical role in breaking down complex, multi-step tasks into simpler sub-tasks. This modular approach allows the chatbot to handle diverse functionalities, such as answering queries, processing requests, and managing updates, in an organized and efficient manner. While agents can utilize APIs or work alongside large language models, their primary role is task orchestration, not data storage or replacement of underlying AI models.
A. Correct. Correct. Agents in Amazon Bedrock are designed to handle multi-step tasks by breaking them into smaller, manageable sub-tasks, ensuring efficient execution and clarity.
B. Incorrect. Incorrect. While Amazon S3 can store data, agents are not responsible for directly storing customer data; their role is task orchestration.
C. Incorrect. Incorrect. Although agents may interact with APIs as part of their orchestration, their primary role is not seamless integration but rather task management.
D. Incorrect. Incorrect. Agents do not replace the need for large language models; instead, they complement these models by managing the steps required to complete tasks.

Agents for Amazon Bedrock 在将复杂的多步骤任务分解为更简单的子任务方面发挥着关键作用。这种模块化方法允许聊天机器人以有组织且高效的方式处理各种功能，例如回答查询、处理请求和管理更新。虽然代理可以利用 API 或与大型语言模型一起工作，但它们的主要作用是任务编排，而不是数据存储或替换底层 AI 模型。答：正确。正确的。 Amazon Bedrock 中的代理旨在通过将多步骤任务分解为更小的、可管理的子任务来处理多步骤任务，从而确保高效执行和清晰度。 B、不正确。不正确。虽然 Amazon S3 可以存储数据，但代理商不负责直接存储客户数据；他们的作用是任务编排。 C、不正确。不正确。尽管代理可以在编排过程中与 API 进行交互，但它们的主要作用不是无缝集成，而是任务管理。 D、不正确。不正确。代理并不能取代对大型语言模型的需求；相反，它们通过管理完成任务所需的步骤来补充这些模型。

---

## Question 120  `#120`

**EN** A retail company is building a customer service chatbot that performs multi-step tasks, such as checking order statuses, processing returns, and recommending products. The team decides to use Agents for Amazon Bedrock to handle these tasks. What is the primary role of Agents for Amazon Bedrock in this scenario?

**中** 一家零售公司正在构建一个客户服务聊天机器人，该机器人执行多步骤任务，例如检查订单状态、处理退货和推荐产品。团队决定使用 Agents for Amazon Bedrock 来处理这些任务。 Agents for Amazon Bedrock 在这种情况下的主要作用是什么？

- **A.** Agents for Amazon Bedrock break down multi-step tasks into smaller sub-tasks and execute them through appropriate foundation models or APIs.
  - Agents for Amazon Bedrock 将多步骤任务分解为更小的子任务，并通过适当的基础模型或 API 执行它们。
- **B.** Agents for Amazon Bedrock replace all other AWS services by directly managing all customer interactions.
  - Agents for Amazon Bedrock 通过直接管理所有客户交互来取代所有其他 AWS 服务。
- **C.** Agents for Amazon Bedrock provide pre-trained chatbots that require no customization for specific use cases.
  - Agents for Amazon Bedrock 提供预先训练的聊天机器人，无需针对特定用例进行定制。
- **D.** Agents for Amazon Bedrock store customer data securely for long-term use in machine learning models.
  - Agents for Amazon Bedrock 安全地存储客户数据，以便在机器学习模型中长期使用。

**正确答案 / Answer: `A`**

Agents for Amazon Bedrock serve as orchestrators to manage multi-step workflows by breaking them into smaller tasks and leveraging foundation models or external APIs for execution. This makes them ideal for automating complex tasks like those required in the customer service chatbot scenario.
A. Correct. Correct: Agents for Amazon Bedrock are designed to handle complex multi-step tasks by breaking them into smaller, manageable steps and integrating with foundation models or external APIs to complete the tasks.
B. Incorrect. Incorrect: While Agents for Amazon Bedrock can manage task execution, they do not replace all other AWS services. They work alongside other services to facilitate specific task automation.
C. Incorrect. Incorrect: Agents for Amazon Bedrock are highly flexible and customizable; they are not pre-trained chatbots limited to generic use cases.
D. Incorrect. Incorrect: Agents for Amazon Bedrock do not function as a data storage solution. Their focus is on task execution, not long-term data storage.

Agents for Amazon Bedrock 作为编排器来管理多步骤工作流程，将其分解为更小的任务并利用基础模型或外部 API 来执行。这使得它们非常适合自动化复杂的任务，例如客户服务聊天机器人场景中所需的任务。答：正确。正确：Agents for Amazon Bedrock 旨在处理复杂的多步骤任务，将其分解为更小的、可管理的步骤，并与基础模型或外部 API 集成来完成任务。 B、不正确。错误：虽然 Agents for Amazon Bedrock 可以管理任务执行，但它们不会取代所有其他 AWS 服务。它们与其他服务一起工作，以促进特定任务的自动化。 C、不正确。错误：Agents for Amazon Bedrock 高度灵活且可定制；它们不是仅限于通用用例的预先训练的聊天机器人。 D、不正确。错误：Agents for Amazon Bedrock 不能用作数据存储解决方案。他们的重点是任务执行，而不是长期数据存储。

---

## Question 121  `#121`

**EN** You are building a chatbot using Amazon Bedrock and a foundation model to assist customers in troubleshooting common technical issues. During testing, you notice that the responses from the model are either too generic or irrelevant. What are the most effective prompt engineering techniques to improve the quality and relevance of the responses?

**中** 您正在使用 Amazon Bedrock 和基础模型构建聊天机器人，以帮助客户解决常见技术问题。在测试过程中，您会注意到模型的响应要么过于通用，要么不相关。提高响应质量和相关性的最有效的即时工程技术是什么？

- **A.** Provide clear instructions and context in the prompt.
  - 在提示中提供清晰的说明和上下文。
- **B.** Use short and generic prompts to encourage creative responses.
  - 使用简短而通用的提示来鼓励创造性的反应。
- **C.** Incorporate examples of desired outputs in the prompt.
  - 在提示中加入所需输出的示例。
- **D.** Use temperature and max tokens settings to control the model’s behavior.
  - 使用温度和最大令牌设置来控制模型的行为。
- **E.** Iteratively refine the prompt based on the model’s responses.
  - 根据模型的响应迭代地完善提示。

**正确答案 / Answer: `A,C,E`**

Effective prompt engineering focuses on providing clear instructions, incorporating examples, and iteratively refining prompts based on output quality. These techniques help guide the foundation model to produce relevant, accurate, and contextually appropriate responses. Adjusting model settings like temperature and max tokens, while useful, is not a core part of prompt engineering.
A. Correct. Providing clear instructions and context helps the model better understand the task and produce more relevant and specific responses. This is a fundamental prompt engineering technique.
B. Incorrect. Using short and generic prompts often leads to vague or irrelevant outputs. Specificity and clarity are key to effective prompt engineering.
C. Correct. Incorporating examples of desired outputs provides the model with guidance on what kind of responses are expected, improving the quality of its answers.
D. Incorrect. While adjusting settings like temperature and max tokens can influence the model’s behavior, these are not direct prompt engineering techniques. They are model configuration settings.
E. Correct. Iteratively refining the prompt based on the model’s responses allows you to identify and resolve issues, leading to better and more relevant outputs over time.

有效的提示工程侧重于提供清晰的说明、结合示例并根据输出质量迭代地完善提示。这些技术有助于指导基础模型产生相关、准确且适合上下文的响应。调整温度和最大令牌等模型设置虽然有用，但并不是提示工程的核心部分。答：正确。提供清晰的说明和上下文有助于模型更好地理解任务并产生更相关和更具体的响应。这是一项基本的快速工程技术。 B、不正确。使用简短而通用的提示通常会导致模糊或不相关的输出。特异性和清晰度是有效提示工程的关键。 C、正确。合并期望输出的示例为模型提供了预期响应类型的指导，从而提高了答案的质量。 D、不正确。虽然调整温度和最大令牌等设置可以影响模型的行为，但这些并不是直接的提示工程技术。它们是模型配置设置。 E、正确。根据模型的响应迭代地完善提示，使您能够识别和解决问题，从而随着时间的推移获得更好、更相关的输出。

---

## Question 122  `#122`

**EN** A retail company is using a generative AI model to create customer service responses. However, the generated responses are often too verbose and include unnecessary details. The company wants to refine the output to be concise and focused. Which prompt engineering techniques should they use to achieve this goal?

**中** 一家零售公司正在使用生成式人工智能模型来创建客户服务响应。然而，生成的响应通常过于冗长并且包含不必要的细节。该公司希望将输出细化为简洁、重点突出。他们应该使用哪些即时工程技术来实现这一目标？

- **A.** Specify the desired response length in the prompt
  - 在提示中指定所需的响应长度
- **B.** Provide a few examples of concise responses in the prompt
  - 在提示中提供一些简洁回答的示例
- **C.** Use temperature settings in the model to control verbosity
  - 使用模型中的温度设置来控制详细程度
- **D.** Avoid using system-level instructions in the prompt
  - 避免在提示中使用系统级指令
- **E.** Include clear and direct instructions about the desired tone and focus
  - 包括有关所需语气和焦点的清晰直接的说明

**正确答案 / Answer: `A,B,E`**

Effective prompt engineering involves clearly defining the desired outcomes for the AI model. By specifying response length, providing examples, and giving direct instructions, the model is more likely to generate concise and focused outputs. Temperature settings and avoiding system-level instructions are less relevant to achieving brevity and focus in this scenario.
A. Correct. Specifying the desired response length in the prompt helps guide the model to generate outputs that align with the required brevity.
B. Correct. Providing examples of concise responses trains the model to mimic the desired style, ensuring focused and brief outputs.
C. Incorrect. While temperature settings control randomness in the output, they do not directly influence verbosity or focus.
D. Incorrect. System-level instructions are often beneficial for providing context; avoiding them may reduce the clarity of the desired outcome.
E. Correct. Including clear and direct instructions about tone and focus ensures the model understands the requirements, leading to better results.

有效的即时工程涉及明确定义人工智能模型的预期结果。通过指定响应长度、提供示例并给出直接指令，模型更有可能生成简洁且集中的输出。在这种情况下，温度设置和避免系统级指令与实现简洁性和重点不太相关。答：正确。在提示中指定所需的响应长度有助于指导模型生成符合所需简洁性的输出。 B、正确。提供简洁响应的示例可以训练模型模仿所需的风格，确保输出集中而简短。 C、不正确。虽然温度设置控制输出的随机性，但它们不会直接影响详细程度或焦点。 D、不正确。系统级指令通常有利于提供上下文；避免它们可能会降低期望结果的清晰度。 E、正确。包括有关语气和焦点的清晰直接的说明可确保模型理解需求，从而获得更好的结果。

---

## Question 123  `#123`

**EN** You are designing a prompt for a language model to generate a detailed description of a product based on minimal input. The model's responses often include irrelevant details. Which combination of prompt engineering techniques should you use to improve the relevance of the model's output?

**中** 您正在设计一个语言模型的提示，以根据最少的输入生成产品的详细描述。模型的响应通常包含不相关的细节。您应该使用哪种即时工程技术组合来提高模型输出的相关性？

- **A.** Provide explicit instructions about what the model should avoid including in its response.
  - 提供关于模型应避免在其响应中包含哪些内容的明确说明。
- **B.** Add more context by giving the model a detailed background about the product before asking the question.
  - 在提问之前，为模型提供有关产品的详细背景，以添加更多背景信息。
- **C.** Use a negative prompt to focus the model on generating responses with specific unwanted characteristics.
  - 使用否定提示使模型专注于生成具有特定不需要的特征的响应。
- **D.** Avoid giving any instructions or context and rely on the model's pre-trained knowledge to generate the desired output.
  - 避免给出任何指令或上下文，并依靠模型的预先训练的知识来生成所需的输出。
- **E.** Structure the prompt to include clear instructions and examples of the desired output format.
  - 构建提示以包括清晰的说明和所需输出格式的示例。

**正确答案 / Answer: `A,B,E`**

Prompt engineering involves techniques like providing explicit instructions, adding context, and structuring prompts with examples to guide the model's responses. These methods improve the relevance and quality of the output by reducing ambiguity and giving the model clear guidance. Negative prompts, while useful in certain scenarios, are not the best choice for addressing relevance issues in this context.
A. Correct. Providing explicit instructions about what the model should avoid can help steer the output and reduce irrelevant details. This is a core principle of prompt engineering.
B. Correct. Adding context ensures the model has the necessary background to generate relevant responses. Without sufficient context, the model may rely on generic knowledge or assumptions.
C. Incorrect. Negative prompts are generally used to discourage specific unwanted characteristics, but they are less effective when the issue is relevancy rather than specific undesired traits.
D. Incorrect. Avoiding instructions or context can lead to unpredictable or irrelevant outputs because the model lacks the necessary guidance to focus on the desired outcome.
E. Correct. Including clear instructions and examples helps the model understand the expectations and improves the quality and relevance of its output.

提示工程涉及提供明确指令、添加上下文以及用示例构建提示等技术来指导模型的响应。这些方法通过减少歧义并为模型提供明确的指导来提高输出的相关性和质量。负面提示虽然在某些情况下很有用，但并不是解决这种情况下相关性问题的最佳选择。答：正确。提供关于模型应避免什么的明确说明可以帮助引导输出并减少不相关的细节。这是即时工程的核心原则。 B、正确。添加上下文可确保模型具有生成相关响应所需的背景。如果没有足够的上下文，模型可能依赖于通用知识或假设。 C、不正确。负面提示通常用于阻止特定的不需要的特征，但当问题是相关性而不是特定的不需要的特征时，它们的效果较差。 D、不正确。避免指令或上下文可能会导致不可预测或不相关的输出，因为模型缺乏必要的指导来关注所需的结果。 E、正确。包括清晰的说明和示例有助于模型理解期望并提高其输出的质量和相关性。

---

## Question 124  `#124`

**EN** You are designing a machine learning application that uses a large language model (LLM) to summarize customer feedback. The summaries generated often miss key details or include irrelevant information. Which approach in prompt engineering should you prioritize to improve the quality of the summaries?

**中** 您正在设计一个机器学习应用程序，该应用程序使用大型语言模型 (LLM) 来总结客户反馈。生成的摘要通常会遗漏关键细节或包含不相关的信息。您应该优先考虑即时工程中的哪种方法来提高摘要的质量？

- **A.** Provide clear and specific instructions within the prompt.
  - 在提示中提供清晰具体的说明。
- **B.** Use a negative prompt to explicitly exclude irrelevant details.
  - 使用否定提示明确排除不相关的细节。
- **C.** Rely on the model's latent space to infer the correct context automatically.
  - 依靠模型的潜在空间自动推断正确的上下文。
- **D.** Avoid adding context to the prompt to minimize its complexity.
  - 避免在提示中添加上下文以最大程度地降低其复杂性。

**正确答案 / Answer: `A`**

The quality of outputs from large language models heavily depends on how prompts are crafted. In this scenario, providing clear and specific instructions in the prompt is the most effective way to guide the model to include key details and avoid irrelevant information. This approach directly addresses the issue and aligns with best practices in prompt engineering.
A. Correct. Providing clear and specific instructions in the prompt ensures the model understands the task and generates more accurate and relevant responses. This is a fundamental principle of prompt engineering.
B. Incorrect. While negative prompts can help exclude undesired outputs, they are less effective for ensuring that key details are included. This is not the best approach for this scenario.
C. Incorrect. The model's latent space is inherent to how the model processes information, but relying on it without proper prompt design will not address the issue. Prompt engineering explicitly guides the model's behavior.
D. Incorrect. Avoiding context in the prompt usually leads to vague or irrelevant outputs, as the model lacks sufficient guidance on what to focus on. Adding context is often essential for improving response quality.

大型语言模型的输出质量在很大程度上取决于提示的制作方式。在这种场景下，在提示中提供清晰具体的说明是指导模型包含关键细节并避免不相关信息的最有效方法。这种方法直接解决了问题并符合即时工程的最佳实践。答：正确。在提示中提供清晰具体的说明可确保模型理解任务并生成更准确和相关的响应。这是即时工程的基本原则。 B、不正确。虽然负面提示可以帮助排除不需要的输出，但它们对于确保包含关键细节的效果较差。对于这种情况，这不是最佳方法。 C、不正确。模型的潜在空间是模型处理信息的方式所固有的，但在没有适当提示设计的情况下依赖它并不能解决问题。即时工程明确指导模型的行为。 D .不正确。避免提示中的上下文通常会导致模糊或不相关的输出，因为模型缺乏关于关注内容的足够指导。添加上下文对于提高响应质量通常至关重要。

---

## Question 125  `#125`

**EN** You are designing a prompt for a generative AI model to create a detailed product description for an e-commerce platform. The generated text should avoid mentioning competitor brands. Which of the following strategies should you apply in your prompt to achieve the desired outcome?

**中** 您正在设计一个生成式 AI 模型的提示，以便为电子商务平台创建详细的产品描述。生成的文本应避免提及竞争对手品牌。为了达到预期的结果，您应该在提示中应用以下哪些策略？

- **A.** Provide clear instructions specifying the desired format and tone of the product description.
  - 提供清晰的说明，指定产品描述所需的格式和语气。
- **B.** Include a negative prompt to explicitly instruct the model to exclude competitor brands.
  - 包括负面提示，明确指示模型排除竞争对手品牌。
- **C.** Rely solely on the model's latent space to infer that competitor brands should not be mentioned.
  - 仅仅依靠模型的潜在空间来推断竞争对手品牌不应该被提及。
- **D.** Add contextual information about the product, such as its features, benefits, and target audience.
  - 添加有关产品的上下文信息，例如其功能、优点和目标受众。
- **E.** Avoid specifying any constraints in the prompt, assuming the model will generate relevant output by default.
  - 避免在提示中指定任何约束，假设模型默认情况下会生成相关输出。

**正确答案 / Answer: `A,B,D`**

Prompt engineering requires a deliberate combination of strategies to guide the model effectively. In this scenario, clear instructions, negative prompts, and relevant contextual information are crucial to ensure the generated text meets the requirements and avoids including competitor brands. Relying solely on the model's latent space or leaving the prompt unconstrained can lead to undesired or inaccurate results.
A. Correct. Providing clear instructions is essential in prompt engineering as it helps guide the model toward generating output in the desired format and tone.
B. Correct. Including a negative prompt is an effective way to specify what should be excluded from the generated text, such as competitor brands in this case.
C. Incorrect. Relying solely on the model's latent space is not recommended as latent space represents the model's learned knowledge but does not guarantee the exclusion of specific content unless explicitly instructed.
D. Correct. Adding contextual information ensures the model has enough relevant details to generate an accurate and tailored product description.
E. Incorrect. Avoiding constraints in the prompt is not advisable as it can lead to unpredictable or irrelevant outputs, which do not align with the desired outcome.

快速工程需要精心组合策略来有效地指导模型。在这种情况下，清晰的说明、负面提示和相关上下文信息对于确保生成的文本满足要求并避免包含竞争对手品牌至关重要。仅仅依赖模型的潜在空间或不加限制地提示可能会导致不期望的或不准确的结果。答：正确。提供清晰的指令对于即时工程至关重要，因为它有助于指导模型以所需的格式和语气生成输出。 B、正确。包含否定提示是指定应从生成的文本中排除哪些内容的有效方法，例如本例中的竞争对手品牌。 C、不正确。不建议仅依赖模型的潜在空间，因为潜在空间代表模型学到的知识，但不能保证排除特定内容，除非明确指示。 D、正确。添加上下文信息可确保模型具有足够的相关详细信息，以生成准确且量身定制的产品描述。 E、不正确。避免提示中的约束是不可取的，因为它可能会导致不可预测或不相关的输出，这与期望的结果不符。

---

## Question 126  `#126`

**EN** A data scientist is tasked with building a natural language processing (NLP) workflow using a pre-trained large language model (LLM) on AWS. The scientist wants to generate better responses when querying the model. Initially, the model's responses are vague and lack depth. Which prompt engineering technique should the data scientist use to guide the model's reasoning process step-by-step and improve response quality?

**中** 数据科学家的任务是使用 AWS 上预先训练的大型语言模型 (LLM) 构建自然语言处理 (NLP) 工作流程。科学家希望在查询模型时产生更好的响应。最初，模型的响应模糊且缺乏深度。数据科学家应该使用哪种提示工程技术来逐步指导模型的推理过程并提高响应质量？

- **A.** Zero-shot prompting
  - 零射击提示
- **B.** Chain-of-thought prompting
  - 思路链提示
- **C.** Single-shot prompting
  - 单次提示
- **D.** Few-shot prompting
  - 少镜头提示

**正确答案 / Answer: `B`**

Chain-of-thought prompting is the most appropriate technique in this scenario because it guides the model to break down problems into logical steps, improving response depth and accuracy. This is particularly beneficial when working with tasks that require reasoning, as opposed to simply relying on examples or a general prompt.
A. Incorrect. Zero-shot prompting involves asking the model to perform a task without providing examples or guidance, which is unlikely to improve response quality for complex tasks requiring reasoning.
B. Correct. Chain-of-thought prompting helps guide the model to reason through problems step-by-step, resulting in more detailed and accurate responses. This is particularly useful for tasks that require logical reasoning.
C. Incorrect. Single-shot prompting involves giving one example alongside the prompt. While it might improve the model's response slightly, it is not focused on step-by-step reasoning.
D. Incorrect. Few-shot prompting involves providing multiple examples to guide the model. Although it can improve performance, it does not specifically target step-by-step reasoning like chain-of-thought prompting does.

思路链提示是这种情况下最合适的技术，因为它引导模型将问题分解为逻辑步骤，提高响应深度和准确性。这在处理需要推理的任务时特别有用，而不是简单地依赖示例或一般提示。 A. 不正确。零样本提示涉及要求模型在不提供示例或指导的情况下执行任务，这不太可能提高需要推理的复杂任务的响应质量。 B、正确。思维链提示有助于引导模型逐步推理问题，从而得到更详细、更准确的响应。这对于需要逻辑推理的任务特别有用。 C、不正确。单次提示涉及在提示旁边给出一个示例。虽然它可能会稍微改善模型的响应，但它并不专注于逐步推理。 D、不正确。少样本提示涉及提供多个示例来指导模型。虽然它可以提高性能，但它并不像思路链提示那样专门针对逐步推理。

---

## Question 127  `#127`

**EN** A data scientist is building a chatbot using a Large Language Model (LLM) deployed on Amazon SageMaker. The chatbot needs to handle customer queries effectively, even when it has not seen similar examples during training. Which prompt engineering technique should the data scientist use to guide the model in generating accurate responses by providing multiple examples within the prompt?

**中** 一位数据科学家正在使用部署在 Amazon SageMaker 上的大型语言模型 (LLM) 构建聊天机器人。聊天机器人需要有效地处理客户查询，即使它在训练期间没有看到类似的示例。数据科学家应该使用哪种提示工程技术通过在提示中提供多个示例来指导模型生成准确的响应？

- **A.** Zero-shot prompting
  - 零射击提示
- **B.** Few-shot prompting
  - 少镜头提示
- **C.** Single-shot prompting
  - 单次提示
- **D.** Chain-of-thought prompting
  - 思路链提示

**正确答案 / Answer: `B`**

Few-shot prompting is the most appropriate technique in this scenario as it includes a small number of examples within the prompt, helping the LLM understand the context for generating accurate and relevant responses. This is particularly effective when handling queries that the model may not have explicitly seen during training.
A. Incorrect. Zero-shot prompting does not provide any examples in the prompt and relies on the model to infer the task directly from the instructions. This is not the best approach for guiding the model with examples.
B. Correct. Few-shot prompting involves including a few examples of the task within the prompt to help the model understand the context and generate better responses. This technique is suitable for guiding the model effectively when handling customer queries.
C. Incorrect. Single-shot prompting provides only one example within the prompt. While it can help the model, it is less effective compared to providing multiple examples as in few-shot prompting.
D. Incorrect. Chain-of-thought prompting is used to encourage the model to reason through problems step by step. It is not primarily focused on providing examples to guide the model, making it less suitable in this scenario.

在这种情况下，少量提示是最合适的技术，因为它在提示中包含少量示例，帮助 LLM 了解上下文以生成准确且相关的响应。当处理模型在训练期间可能没有明确看到的查询时，这特别有效。 A. 不正确。零样本提示在提示中不提供任何示例，而是依靠模型直接从指令推断任务。这不是用示例指导模型的最佳方法。 B、正确。少样本提示涉及在提示中包含一些任务示例，以帮助模型理解上下文并生成更好的响应。该技术适合在处理客户查询时有效地指导模型。 C、不正确。单次提示仅在提示中提供一个示例。虽然它可以帮助模型，但与在几次提示中提供多个示例相比，它的效率较低。 D、不正确。思维链提示用于鼓励模型逐步推理问题。它主要不是专注于提供示例来指导模型，因此不太适合这种情况。

---

## Question 128  `#128`

**EN** A machine learning team is tasked with building a natural language processing (NLP) application using a large language model (LLM) hosted on Amazon SageMaker. They want to improve the model's ability to provide detailed reasoning for complex queries. Which prompt engineering technique should they use to achieve this?

**中** 机器学习团队的任务是使用 Amazon SageMaker 上托管的大型语言模型 (LLM) 构建自然语言处理 (NLP) 应用程序。他们希望提高模型为复杂查询提供详细推理的能力。他们应该使用哪种即时工程技术来实现这一目标？

- **A.** Zero-shot prompting
  - 零射击提示
- **B.** Few-shot prompting
  - 少镜头提示
- **C.** Chain-of-thought prompting
  - 思路链提示
- **D.** Single-shot prompting
  - 单次提示

**正确答案 / Answer: `C`**

Chain-of-thought prompting is a technique in prompt engineering where the prompt is designed to explicitly instruct the model to think through a problem step by step. This approach is particularly effective in scenarios where detailed reasoning or multi-step problem-solving is required, making it the best choice for the NLP team's goal of improving reasoning in their application.
A. Incorrect. Zero-shot prompting relies on the model's ability to generate an answer without any prior examples or context, which is not ideal for providing detailed reasoning.
B. Incorrect. Few-shot prompting provides a small number of examples to guide the model's behavior, but it does not inherently focus on step-by-step reasoning.
C. Correct. Chain-of-thought prompting encourages the model to generate step-by-step reasoning, making it well-suited for tasks requiring detailed explanations or multi-step problem-solving.
D. Incorrect. Single-shot prompting involves providing a single example, which may help guide responses but does not inherently encourage detailed or step-by-step reasoning.

思维链提示是提示工程中的一种技术，其中提示旨在明确指示模型逐步思考问题。这种方法在需要详细推理或多步骤解决问题的场景中特别有效，使其成为 NLP 团队提高应用程序推理能力目标的最佳选择。 A. 不正确。零样本提示依赖于模型在没有任何先前示例或上下文的情况下生成答案的能力，这对于提供详细推理来说并不理想。 B、不正确。 Few-shot 提示提供了少量示例来指导模型的行为，但它本质上并不注重逐步推理。 C、正确。思维链提示鼓励模型生成逐步推理，使其非常适合需要详细解释或多步骤解决问题的任务。 D、不正确。单次提示涉及提供单个示例，这可能有助于指导响应，但本质上并不鼓励详细或逐步推理。

---

## Question 129  `#129`

**EN** You are tasked with designing a chatbot using a large language model (LLM) to answer customer inquiries about your company's products. During testing, you notice the responses are often too vague or irrelevant. Which of the following prompt engineering techniques can help improve the quality of responses?

**中** 您的任务是使用大型语言模型 (LLM) 设计一个聊天机器人来回答客户有关您公司产品的询问。在测试过程中，您会注意到响应通常过于模糊或无关紧要。以下哪些即时工程技术可以帮助提高响应质量？

- **A.** Provide detailed and specific instructions in the prompt.
  - 在提示中提供详细且具体的说明。
- **B.** Use multiple comments to guide the LLM to think step-by-step.
  - 使用多个注释来引导 LLM 逐步思考。
- **C.** Keep prompts as short as possible to avoid overwhelming the model.
  - 提示尽可能简短，以避免模型不堪重负。
- **D.** Experiment with different prompt structures and phrasing.
  - 尝试不同的提示结构和措辞。
- **E.** Include guardrails in the prompt to limit the scope of the response.
  - 在提示中包含护栏以限制响应的范围。

**正确答案 / Answer: `A,B,D,E`**

Prompt engineering is a crucial skill when working with large language models like those used in AWS AI services. Techniques such as providing specific instructions, guiding the model with step-by-step prompts, experimenting with different phrasing, and including guardrails ensure the responses are relevant, specific, and aligned with the use case. While brevity is important, sacrificing necessary details for conciseness can lead to poor-quality responses.
A. Correct. Providing detailed and specific instructions helps the LLM focus on the desired context and improves response relevance and quality.
B. Correct. Using multiple comments or step-by-step guidance allows the LLM to follow a logical thought process, leading to more accurate outputs.
C. Incorrect. While keeping prompts concise is important, overly short prompts can lack the necessary context to generate high-quality responses, making this approach incomplete.
D. Correct. Experimenting with different prompt structures and phrasing helps identify what works best for the specific use case, improving response quality.
E. Correct. Including guardrails in the prompt, such as specifying what not to include or limiting the scope, ensures the LLM generates responses within acceptable boundaries.

在使用大型语言模型（例如 AWS AI 服务中使用的语言模型）时，快速工程是一项至关重要的技能。提供具体说明、通过分步提示指导模型、尝试不同的措辞以及包含护栏等技术可确保响应是相关的、具体的并与用例保持一致。虽然简洁很重要，但为了简洁而牺牲必要的细节可能会导致回复质量低下。答：正确。提供详细且具体的说明有助于 LLM 专注于所需的上下文，并提高响应的相关性和质量。 B、正确。使用多个注释或分步指导使 LLM 能够遵循逻辑思维过程，从而获得更准确的输出。 C、不正确。虽然保持提示简洁很重要，但过短的提示可能缺乏生成高质量响应所需的上下文，从而使这种方法不完整。 D、正确。尝试不同的提示结构和措辞有助于确定最适合特定用例的内容，从而提高响应质量。 E、正确。在提示中包含护栏，例如指定不包含的内容或限制范围，可确保 LLM 在可接受的范围内生成响应。

---

## Question 130  `#130`

**EN** A team of data scientists is using a large language model (LLM) to generate customer support responses. However, they notice that the responses are inconsistent in quality and sometimes irrelevant to the input prompts. Which of the following prompt engineering best practices should the team implement to improve response quality?

**中** 数据科学家团队正在使用大型语言模型 (LLM) 来生成客户支持响应。然而，他们注意到响应的质量不一致，有时与输入提示无关。团队应实施以下哪些即时工程最佳实践来提高响应质量？

- **A.** Experiment with different prompt structures to identify the most effective ones.
  - 尝试不同的提示结构以确定最有效的结构。
- **B.** Use concise and specific language in the prompts to reduce ambiguity.
  - 在提示中使用简洁、具体的语言，以减少歧义。
- **C.** Add multiple unrelated topics in a single prompt to explore broader responses.
  - 在单个提示中添加多个不相关的主题以探索更广泛的响应。
- **D.** Incorporate guardrails in the prompts to guide the model toward acceptable outputs.
  - 在提示中加入护栏，引导模型获得可接受的输出。
- **E.** Avoid iterating on prompts after initial testing to save time.
  - 避免在初始测试后重复提示以节省时间。

**正确答案 / Answer: `A,B,D`**

Effective prompt engineering involves experimenting with different structures, using concise and specific language, and incorporating guardrails to guide the model's behavior. These practices help improve response quality, relevance, and safety. Avoiding iteration or introducing unrelated topics can lead to suboptimal results, as they hinder the model's ability to focus and improve through refinement.
A. Correct. Experimenting with prompt structures helps uncover the most effective ways to elicit high-quality responses from the model. This is a key best practice in prompt engineering.
B. Correct. Using concise and specific language reduces ambiguity, which directly improves the relevance and quality of the model's responses.
C. Incorrect. Adding multiple unrelated topics in a single prompt often leads to confusion and lower-quality responses, as the model struggles to focus on a specific task.
D. Correct. Incorporating guardrails ensures the model generates acceptable and relevant outputs, aligning with the intended use case and avoiding undesirable responses.
E. Incorrect. Avoiding iteration contradicts the principle of refinement and experimentation in prompt engineering, which is crucial for achieving the best results.

有效的提示工程涉及尝试不同的结构，使用简洁而具体的语言，并结合护栏来指导模型的行为。这些做法有助于提高响应质量、相关性和安全性。避免迭代或引入不相关的主题可能会导致次优结果，因为它们会阻碍模型通过细化来集中和改进的能力。答：正确。尝试提示结构有助于发现从模型中引发高质量响应的最有效方法。这是即时工程的关键最佳实践。 B、正确。使用简洁而具体的语言可以减少歧义，从而直接提高模型响应的相关性和质量。 C、不正确。在单个提示中添加多个不相关的主题通常会导致混乱和低质量的响应，因为模型很难专注于特定任务。 D、正确。纳入护栏可确保模型生成可接受且相关的输出，与预期用例保持一致并避免不良响应。 E、不正确。避免迭代与即时工程中的细化和实验原则相矛盾，而这对于获得最佳结果至关重要。

---

## Question 131  `#131`

**EN** A data science team is building a natural language processing (NLP) chatbot using a pre-trained large language model (LLM) on AWS. They notice that the chatbot occasionally generates irrelevant or overly verbose responses. How can the team improve the chatbot's response quality by applying prompt engineering best practices?

**中** 数据科学团队正在 AWS 上使用预先训练的大型语言模型 (LLM) 构建自然语言处理 (NLP) 聊天机器人。他们注意到聊天机器人偶尔会生成不相关或过于冗长的响应。团队如何通过应用及时的工程最佳实践来提高聊天机器人的响应质量？

- **A.** Rewrite the prompts to be more specific and concise, clearly defining the expected output format.
  - 将提示重写得更加具体和简洁，明确定义预期的输出格式。
- **B.** Use multiple prompts with slight variations to discover which phrasing produces the best results.
  - 使用略有变化的多个提示来发现哪种措辞会产生最佳结果。
- **C.** Ensure the prompt includes guardrails by explicitly stating what the chatbot should not do.
  - 通过明确说明聊天机器人不应该做什么，确保提示包含护栏。
- **D.** Avoid experimenting with different prompt designs to maintain consistency during development.
  - 避免尝试不同的提示设计，以在开发过程中保持一致性。
- **E.** Rely entirely on the default behavior of the pre-trained model without modifying the prompts.
  - 完全依赖预训练模型的默认行为，无需修改提示。

**正确答案 / Answer: `A,B,C`**

Improving response quality when working with large language models on AWS involves applying prompt engineering best practices, such as writing specific and concise prompts, experimenting with different variations, and including explicit instructions or guardrails. These practices help tailor the model's behavior to the desired use case, ensuring more relevant and accurate outputs.
A. Correct. Specific and concise prompts help guide the model toward generating more relevant and targeted responses, improving overall quality.
B. Correct. Experimenting with multiple prompts allows the team to identify the most effective phrasing for eliciting desired responses, which is a best practice in prompt engineering.
C. Correct. Including guardrails in the prompt, such as specifying what the chatbot should avoid, minimizes the risk of irrelevant or inappropriate outputs.
D. Incorrect. Avoiding experimentation limits the team's ability to optimize the prompt design, which can hinder response quality improvement.
E. Incorrect. Relying entirely on the default behavior of the model often leads to suboptimal results, as pre-trained models may not align perfectly with specific use cases without prompt tuning.

在 AWS 上使用大型语言模型时提高响应质量涉及应用提示工程最佳实践，例如编写具体而简洁的提示、尝试不同的变体以及包含明确的指令或护栏。这些实践有助于根据所需的用例定制模型的行为，确保输出更加相关和准确。答：正确。具体而简洁的提示有助于指导模型生成更相关、更有针对性的响应，从而提高整体质量。 B、正确。通过对多个提示进行试验，团队可以确定最有效的措辞来引发所需的响应，这是提示工程中的最佳实践。 C、正确。在提示中包含护栏，例如指定聊天机器人应避免的内容，可以最大限度地减少不相关或不适当输出的风险。 D、不正确。避免实验会限制团队优化提示设计的能力，从而阻碍响应质量的提高。 E、不正确。完全依赖模型的默认行为通常会导致次优结果，因为如果不及时调整，预先训练的模型可能无法与特定用例完美匹配。

---

## Question 132  `#132`

**EN** A company is using an AI model powered by prompt engineering to automate customer support. However, they notice that with certain crafted inputs, users can manipulate the model to generate harmful or inappropriate outputs. What are the potential risks associated with this scenario?

**中** 一家公司正在使用由即时工程支持的人工智能模型来自动化客户支持。然而，他们注意到，通过某些精心设计的输入，用户可以操纵模型来生成有害或不适当的输出。这种情况有哪些潜在风险？

- **A.** Exposure of sensitive or confidential information
  - 敏感或机密信息的暴露
- **B.** Model hijacking to execute unintended tasks
  - 模型劫持以执行非预期任务
- **C.** Increased latency in response time due to model overload
  - 由于模型过载导致响应时间延迟增加
- **D.** Jailbreaking to bypass safety constraints
  - 越狱绕过安全限制
- **E.** Model poisoning to degrade overall performance
  - 模型中毒会降低整体性能

**正确答案 / Answer: `A,B,D,E`**

The scenario highlights multiple risks of prompt engineering, including exposure of sensitive data, hijacking of the model for unintended tasks, jailbreaking to override safety constraints, and poisoning to degrade performance. These are all critical considerations when implementing AI systems to ensure security and integrity.
A. Correct. Exposure of sensitive or confidential information can occur if prompt engineering unintentionally elicits responses that reveal private or proprietary data.
B. Correct. Model hijacking refers to exploiting the prompt to make the model perform tasks outside its intended scope, which aligns with the described scenario.
C. Incorrect. Increased latency in response time is typically related to infrastructure or performance issues, not directly linked to the risks of prompt engineering.
D. Correct. Jailbreaking happens when users craft prompts to bypass the AI model's safety mechanisms, leading to harmful or unintended outputs.
E. Correct. Model poisoning involves introducing malicious inputs that degrade the model's performance or behavior over time.

该场景凸显了即时工程的多种风险，包括敏感数据暴露、模型被劫持以执行意外任务、越狱以覆盖安全限制以及中毒以降低性能。这些都是实施人工智能系统以确保安全性和完整性时的关键考虑因素。答：正确。如果即时工程无意中引起泄露私人或专有数据的响应，则可能会泄露敏感或机密信息。 B、正确。模型劫持是指利用提示使模型执行超出其预期范围的任务，这与所描述的场景一致。 C、不正确。响应时间延迟的增加通常与基础设施或性能问题有关，与即时工程的风险没有直接关系。 D、正确。当用户精心设计提示绕过人工智能模型的安全机制，导致有害或意外的输出时，就会发生越狱。 E、正确。模型中毒涉及引入恶意输入，随着时间的推移会降低模型的性能或行为。

---

## Question 133  `#133`

**EN** A company is developing a chatbot using a Large Language Model (LLM) and has chosen to utilize prompt engineering to enhance the quality of responses. However, the team is concerned about potential risks associated with this approach. Which of the following are valid risks of prompt engineering that the team should be aware of?

**中** 一家公司正在使用大型语言模型 (LLM) 开发聊天机器人，并选择利用即时工程来提高响应质量。然而，该团队担心与这种方法相关的潜在风险。以下哪些是团队应注意的即时工程的有效风险？

- **A.** Exposure of sensitive information due to poorly crafted prompts
  - 由于提示设计不当而暴露敏感信息
- **B.** Model 'poisoning,' where malicious data alters the model's predictions
  - 模型“中毒”，恶意数据改变模型的预测
- **C.** Improved accuracy of responses through iterative prompt refinement
  - 通过迭代提示细化提高响应的准确性
- **D.** Prompt 'jailbreaking,' which leads to bypassing ethical or safety constraints
  - 提示“越狱”，这会导致绕过道德或安全约束
- **E.** Model hijacking, where prompts are manipulated to generate harmful outputs
  - 模型劫持，操纵提示以生成有害输出

**正确答案 / Answer: `A,B,D,E`**

Prompt engineering is a powerful tool for optimizing the performance of LLMs, but it also carries risks such as the exposure of sensitive data, model poisoning, jailbreaking, and hijacking. These risks can compromise the security, safety, and ethical behavior of the AI system. Understanding these limitations is critical for mitigating potential vulnerabilities when designing AI applications.
A. Correct. Sensitive information can be exposed if prompts unintentionally reveal proprietary or personal data, particularly if the model's responses are shared publicly.
B. Correct. Prompt engineering can inadvertently allow an attacker to 'poison' the model by crafting inputs that influence the model's behavior, leading to inaccurate or biased outputs.
C. Incorrect. This option describes a benefit of prompt engineering and not a risk or limitation, so it is incorrect.
D. Correct. Jailbreaking occurs when prompts are designed to bypass safety mechanisms, potentially leading the model to generate unethical or unsafe outputs.
E. Correct. Model hijacking refers to using carefully designed prompts to manipulate the model into producing harmful or misleading outputs, which is a valid risk of prompt engineering.

即时工程是优化 LLMs 性能的有力工具，但也带来敏感数据暴露、模型中毒、越狱、劫持等风险。这些风险可能会损害人工智能系统的安全性和道德行为。了解这些限制对于在设计人工智能应用程序时减少潜在的漏洞至关重要。答：正确。如果提示无意中泄露了专有或个人数据，特别是当模型的响应被公开共享时，敏感信息可能会被暴露。 B、正确。即时工程可能会无意中允许攻击者通过精心设计影响模型行为的输入来“毒害”模型，从而导致不准确或有偏差的输出。 C、不正确。此选项描述了即时工程的好处，而不是风险或限制，因此它是不正确的。 D、正确。当提示设计为绕过安全机制时，就会发生越狱，可能导致模型生成不道德或不安全的输出。 E、正确。模型劫持是指使用精心设计的提示来操纵模型产生有害或误导性的输出，这是提示工程的有效风险。

---

## Question 134  `#134`

**EN** A company is using a generative AI model for customer support automation. During testing, the team finds that certain inputs reveal sensitive company data, and other inputs yield harmful or inappropriate outputs. What potential risks related to prompt engineering could be causing these issues?

**中** 一家公司正在使用生成式人工智能模型来实现客户支持自动化。在测试过程中，团队发现某些输入会泄露敏感的公司数据，而其他输入会产生有害或不适当的输出。与即时工程相关的哪些潜在风险可能导致这些问题？

- **A.** Exposure of sensitive data due to improperly handled training data
  - 由于训练数据处理不当而导致敏感数据暴露
- **B.** Prompt hijacking, where adversarial prompts manipulate the model's behavior
  - 提示劫持，对抗性提示操纵模型的行为
- **C.** Model drift caused by changes in the underlying training data over time
  - 由于基础训练数据随时间的变化而导致的模型漂移
- **D.** Jailbreaking, where prompts bypass safeguards to produce harmful outputs
  - 越狱，提示绕过保护措施以产生有害输出
- **E.** Data poisoning, where malicious data corrupts the training process
  - 数据中毒，恶意数据破坏训练过程

**正确答案 / Answer: `A,B,D,E`**

Prompt engineering involves crafting inputs to guide AI models effectively, but it comes with risks. Exposure can occur if sensitive information is improperly managed during training. Prompt hijacking and jailbreaking involve adversarial or exploitative prompts that manipulate the model to behave in unintended or unsafe ways. Data poisoning corrupts the training process by injecting malicious data, leading to degraded or harmful outputs. These risks highlight the importance of robust safeguards and ethical considerations in AI development.
A. Correct. Exposure of sensitive data can occur if the model inadvertently memorizes and reveals private or confidential information from its training data.
B. Correct. Prompt hijacking involves crafting adversarial prompts to manipulate the model's behavior in unintended ways, which could explain unexpected or harmful outputs.
C. Incorrect. Model drift refers to performance degradation over time due to changing data patterns, but it is unrelated to prompt engineering risks.
D. Correct. Jailbreaking refers to crafting prompts that bypass safety or ethical guidelines set during the development of the AI model, leading to inappropriate outputs.
E. Correct. Data poisoning occurs when malicious actors insert harmful data into the training set, resulting in compromised or biased model behavior.

即时工程涉及精心设计输入以有效指导人工智能模型，但它也伴随着风险。如果培训期间敏感信息管理不当，可能会发生泄露。即时劫持和越狱涉及对抗性或剥削性的提示，操纵模型以非预期或不安全的方式运行。数据中毒通过注入恶意数据来破坏训练过程，导致输出降级或有害。这些风险凸显了人工智能开发中强有力的保障措施和道德考虑的重要性。答：正确。如果模型无意中记住并泄露了训练数据中的私人或机密信息，则可能会泄露敏感数据。 B、正确。提示劫持涉及制作对抗性提示，以意想不到的方式操纵模型的行为，这可以解释意外或有害的输出。 C、不正确。模型漂移是指由于数据模式变化而导致性能随着时间的推移而下降，但它与即时工程风险无关。 D、正确。越狱是指制作绕过人工智能模型开发过程中设定的安全或道德准则的提示，从而导致不适当的输出。 E、正确。当恶意行为者将有害数据插入训练集中时，就会发生数据中毒，从而导致模型行为受损或出现偏差。

---

## Question 135  `#135`

**EN** Your team is working with a large foundation model pre-trained on a diverse dataset. You want to adapt this model for your organization’s specific use case, which involves analyzing legal documents. Which of the following steps are most appropriate for fine-tuning the model to achieve this goal?

**中** 您的团队正在使用在不同数据集上预先训练的大型基础模型。您希望使该模型适合您组织的特定用例，其中涉及分析法律文档。以下哪些步骤最适合微调模型以实现此目标？

- **A.** Curate a domain-specific dataset of legal documents and fine-tune the model using supervised learning.
  - 整理特定领域的法律文档数据集，并使用监督学习微调模型。
- **B.** Use transfer learning to modify the original architecture of the foundation model and retrain it from scratch.
  - 使用迁移学习修改基础模型的原始架构并从头开始重新训练。
- **C.** Freeze most pre-trained layers of the model and fine-tune only the final layers using a smaller, domain-specific dataset.
  - 冻结模型的大多数预训练层，并使用较小的特定于领域的数据集仅微调最终层。
- **D.** Use reinforcement learning directly on the foundation model without additional training data.
  - 直接在基础模型上使用强化学习，无需额外的训练数据。
- **E.** Leverage the pre-trained model directly without fine-tuning, as foundation models are already general-purpose.
  - 直接利用预训练模型，无需微调，因为基础模型已经是通用的。

**正确答案 / Answer: `A,C`**

Fine-tuning foundation models involves adapting them to specific tasks by using domain-specific datasets and efficient training techniques. Curating a legal document dataset and fine-tuning only the final layers of the model are practical and effective steps to achieve this. This approach leverages the model's pre-trained knowledge while focusing on the task at hand, ensuring better performance without excessive computational costs.
A. Correct. Correct: Fine-tuning the model with a curated, domain-specific dataset allows it to specialize in analyzing legal documents while leveraging its pre-trained knowledge.
B. Incorrect. Incorrect: Retraining the model from scratch would require significant computational resources and time, making it inefficient compared to fine-tuning.
C. Correct. Correct: Freezing most pre-trained layers and fine-tuning only the final layers is a common and efficient strategy to adapt foundation models to specific tasks with limited data.
D. Incorrect. Incorrect: Reinforcement learning is not typically used for fine-tuning foundation models in tasks requiring labeled data, like legal document analysis.
E. Incorrect. Incorrect: While foundation models are versatile, fine-tuning is necessary to improve performance on specialized tasks like analyzing legal documents.

微调基础模型涉及通过使用特定领域的数据集和高效的训练技术使它们适应特定的任务。整理法律文档数据集并仅微调模型的最后几层是实现这一目标的实用且有效的步骤。这种方法利用模型的预先训练的知识，同时专注于手头的任务，确保更好的性能，而无需过多的计算成本。答：正确。正确：使用精选的特定领域数据集对模型进行微调，使其能够专门分析法律文档，同时利用其预先训练的知识。 B、不正确。错误：从头开始重新训练模型需要大量的计算资源和时间，与微调相比效率低下。 C、正确。正确：冻结大多数预训练层并仅微调最后层是一种常见且有效的策略，可以使基础模型适应数据有限的特定任务。 D、不正确。错误：强化学习通常不用于在需要标记数据的任务（例如法律文档分析）中微调基础模型。 E、不正确。错误：虽然基础模型具有多种用途，但为了提高分析法律文档等专门任务的性能，有必要进行微调。

---

## Question 136  `#136`

**EN** A company wants to fine-tune a pre-trained foundation model using their proprietary dataset to improve its performance on a specific task. Which of the following steps should they prioritize to ensure successful fine-tuning?

**中** 一家公司希望使用其专有数据集微调预先训练的基础模型，以提高其在特定任务上的性能。为了确保微调成功，他们应该优先考虑以下哪些步骤？

- **A.** Prepare and preprocess the proprietary dataset to match the input format expected by the foundation model.
  - 准备并预处理专有数据集，以匹配基础模型所需的输入格式。
- **B.** Start training the foundation model from scratch using their proprietary dataset.
  - 使用其专有数据集从头开始训练基础模型。
- **C.** Freeze the earlier layers of the foundation model and fine-tune only the task-specific layers.
  - 冻结基础模型的早期层并仅微调特定于任务的层。
- **D.** Evaluate the fine-tuned model on a validation dataset specific to the task.
  - 在特定于任务的验证数据集上评估微调模型。
- **E.** Use the proprietary dataset as-is, without preprocessing, to avoid any data corruption.
  - 按原样使用专有数据集，无需预处理，以避免任何数据损坏。

**正确答案 / Answer: `A,C,D`**

Fine-tuning a foundation model involves leveraging pre-trained knowledge while tailoring it to a specific task. Proper preprocessing of the dataset ensures compatibility, freezing earlier layers focuses fine-tuning on task-specific learning, and evaluating the fine-tuned model validates its performance. Starting training from scratch is unnecessary in this scenario, and skipping preprocessing can lead to errors or suboptimal results.
A. Correct. Correct. Preprocessing ensures that the input data aligns with the requirements of the foundation model, which is crucial for successful fine-tuning.
B. Incorrect. Incorrect. Starting training from scratch disregards the benefits of the pre-trained foundation model and is highly resource-intensive, making it an impractical approach for fine-tuning.
C. Correct. Correct. Freezing earlier layers leverages the general knowledge already learned by the model and focuses fine-tuning on task-specific adaptations.
D. Correct. Correct. Evaluating the fine-tuned model on a validation dataset helps ensure that the model performs well on the intended task and avoids overfitting.
E. Incorrect. Incorrect. Using raw, unprocessed data can lead to input mismatches, poor performance, or errors during fine-tuning.

微调基础模型涉及利用预先训练的知识，同时根据特定任务对其进行定制。对数据集进行适当的预处理可确保兼容性，冻结较早的层可重点对特定任务的学习进行微调，并评估微调后的模型以验证其性能。在这种情况下，没有必要从头开始训练，并且跳过预处理可能会导致错误或次优结果。答：正确。正确的。预处理可确保输入数据符合基础模型的要求，这对于成功微调至关重要。 B、不正确。不正确。从头开始训练忽视了预训练基础模型的好处，并且资源高度密集，使其成为一种不切实际的微调方法。 C、正确。正确的。冻结早期层利用模型已经学到的一般知识，并将重点放在特定于任务的适应上的微调。 D、正确。正确的。在验证数据集上评估微调模型有助于确保模型在预期任务上表现良好并避免过度拟合。 E、不正确。不正确。使用原始的、未经处理的数据可能会导致输入不匹配、性能不佳或微调期间出现错误。

---

## Question 137  `#137`

**EN** Your company is planning to fine-tune a foundation model for a specific use case involving sentiment analysis of customer reviews. Which of the following steps should be included in the fine-tuning process to ensure optimal performance?

**中** 您的公司正计划针对涉及客户评论情绪分析的特定用例微调基础模型。微调过程中应包括以下哪些步骤以确保最佳性能？

- **A.** Collect a labeled dataset that is representative of the target domain.
  - 收集代表目标域的标记数据集。
- **B.** Replace the foundation model's architecture entirely with a custom-built model.
  - 用定制模型完全替换基础模型的架构。
- **C.** Freeze most of the foundation model's layers and only train the final layers specific to the task.
  - 冻结大部分基础模型层，仅训练特定于任务的最终层。
- **D.** Select a learning rate suitable for fine-tuning rather than training from scratch.
  - 选择适合微调的学习率而不是从头开始训练。
- **E.** Use a foundation model pre-trained on a completely unrelated domain to save time.
  - 使用在完全不相关的领域预训练的基础模型可以节省时间。

**正确答案 / Answer: `A,C,D`**

Fine-tuning a foundation model involves adapting a pre-trained model to a specific use case. This process includes preparing a labeled dataset that is closely aligned with the target task, freezing most of the pre-trained layers to retain general knowledge, and fine-tuning the few task-specific layers with a suitable learning rate. Using a model pre-trained on a related domain ensures better transfer learning, whereas replacing the architecture or relying on unrelated pre-trained models is not recommended.
A. Correct. Collecting a labeled dataset that reflects the target domain is critical for fine-tuning because the foundation model needs to align with the specific task and data characteristics.
B. Incorrect. Replacing the foundation model's architecture defeats the purpose of using a foundation model, as it eliminates its pre-trained knowledge.
C. Correct. Freezing most of the foundation model's layers and training only the task-specific layers is a common approach in fine-tuning, as it retains the general knowledge while adapting to the specific task.
D. Correct. Choosing an appropriate learning rate for fine-tuning ensures the model updates weights incrementally without overwriting the pre-trained knowledge.
E. Incorrect. Using a foundation model pre-trained on an unrelated domain may lead to suboptimal results because the model's initial knowledge may not generalize to the target task effectively.

微调基础模型涉及使预训练模型适应特定用例。此过程包括准备与目标任务密切相关的标记数据集，冻结大部分预训练层以保留一般知识，并以合适的学习率微调少数特定于任务的层。使用在相关领域预训练的模型可确保更好的迁移学习，而不建议替换架构或依赖不相关的预训练模型。答：正确。收集反映目标域的标记数据集对于微调至关重要，因为基础模型需要与特定任务和数据特征保持一致。 B、不正确。替换基础模型的架构违背了使用基础模型的目的，因为它消除了其预先训练的知识。 C、正确。冻结大部分基础模型层并仅训练特定于任务的层是微调的常见方法，因为它在适应特定任务的同时保留了一般知识。 D、正确。选择合适的学习率进行微调可确保模型增量更新权重，而不会覆盖预先训练的知识。 E、不正确。使用在不相关领域预先训练的基础模型可能会导致次优结果，因为模型的初始知识可能无法有效地推广到目标任务。

---

## Question 138  `#138`

**EN** You are working on a language model project using AWS services. The team has decided to use a foundation model and plans to first perform pre-training on a large corpus of text data, followed by fine-tuning for a specific sentiment analysis task. Which of the following best describes the purpose of pre-training in this context?

**中** 您正在使用 AWS 服务开发一个语言模型项目。该团队决定使用基础模型，并计划首先对大量文本数据进行预训练，然后针对特定的情感分析任务进行微调。以下哪一项最能描述这种情况下预训练的目的？

- **A.** Pre-training is used to train the model on a general-purpose dataset to learn foundational knowledge.
  - 预训练用于在通用数据集上训练模型以学习基础知识。
- **B.** Pre-training focuses on optimizing the model for a specific task using task-specific data.
  - 预训练的重点是使用特定任务的数据优化特定任务的模型。
- **C.** Pre-training continuously updates the model with new task-specific data over time.
  - 随着时间的推移，预训练会使用新的特定于任务的数据不断更新模型。
- **D.** Pre-training involves modifying the model architecture to suit a specific use case.
  - 预训练涉及修改模型架构以适应特定的用例。

**正确答案 / Answer: `A`**

Pre-training is the initial phase in training a foundation model, where the model is exposed to a large and diverse dataset to learn general-purpose features. This foundational knowledge can then be fine-tuned for specific tasks, such as sentiment analysis, using smaller, task-specific datasets.
A. Correct. Correct. Pre-training is a process where the model is trained on a general-purpose, large dataset to learn foundational patterns and representations that can later be adapted for specific tasks.
B. Incorrect. Incorrect. This describes fine-tuning, where the model is optimized for a specific task using task-specific data.
C. Incorrect. Incorrect. This describes continuous pre-training or incremental training, where the model is updated with new data over time, but it is distinct from the initial pre-training phase.
D. Incorrect. Incorrect. Pre-training does not involve modifying the model architecture; it focuses on training the model parameters using general-purpose data.

预训练是训练基础模型的初始阶段，其中模型暴露于大型且多样化的数据集以学习通用特征。然后可以使用较小的特定于任务的数据集针对特定任务（例如情绪分析）对这些基础知识进行微调。答：正确。正确的。预训练是在通用大型数据集上训练模型的过程，以学习随后可以适应特定任务的基础模式和表示。 B、不正确。不正确。这描述了微调，其中模型使用特定于任务的数据针对特定任务进行优化。 C、不正确。不正确。这描述了连续预训练或增量训练，其中模型随着时间的推移使用新数据进行更新，但它与初始预训练阶段不同。 D、不正确。不正确。预训练不涉及修改模型架构；它专注于使用通用数据训练模型参数。

---

## Question 139  `#139`

**EN** Your company is building a chatbot using a foundation model to handle customer support inquiries. The team has pre-trained the model on a massive general text dataset. However, the chatbot struggles to answer domain-specific questions related to your company's products. What is the next step the team should take to improve the model's performance?

**中** 您的公司正在使用基础模型构建聊天机器人来处理客户支持查询。该团队已在大量通用文本数据集上对模型进行了预训练。然而，聊天机器人很难回答与您公司产品相关的特定领域的问题。团队下一步应该采取什么措施来提高模型的性能？

- **A.** Perform fine-tuning using a labeled dataset specific to your company's products.
  - 使用特定于您公司产品的标记数据集执行微调。
- **B.** Continue pre-training using the same general dataset to further improve the model.
  - 使用相同的通用数据集继续进行预训练，以进一步改进模型。
- **C.** Deploy the model as-is and rely on user feedback for self-improvement.
  - 按原样部署模型并依靠用户反馈进行自我改进。
- **D.** Use transfer learning to train a new model from scratch on your company's dataset.
  - 使用迁移学习在公司的数据集上从头开始训练新模型。

**正确答案 / Answer: `A`**

When a foundation model struggles with domain-specific tasks, fine-tuning is the most appropriate method to improve performance. It allows the model to adapt to a specific domain by training it on a smaller labeled dataset relevant to the application, making it more effective for tasks like answering product-related inquiries.
A. Correct. Fine-tuning involves training the pre-trained model on a smaller, domain-specific dataset to specialize the model for a particular task or domain, making it the most appropriate step in this scenario.
B. Incorrect. Continuing pre-training on the same general dataset would not address the issue because the model already lacks domain-specific knowledge, and further pre-training would not add this specialization.
C. Incorrect. Deploying the model as-is would not improve its ability to handle domain-specific questions, as the current shortcomings in understanding your company's products would remain unaddressed.
D. Incorrect. Using transfer learning to train a new model from scratch is unnecessary and inefficient because the foundation model is already pre-trained, and fine-tuning can efficiently specialize it for your needs.

当基础模型难以应对特定领域的任务时，微调是提高性能的最合适方法。它允许模型通过在与应用程序相关的较小标记数据集上进行训练来适应特定领域，从而更有效地完成回答产品相关查询等任务。答：正确。微调涉及在较小的特定于领域的数据集上训练预训练模型，以使模型专门用于特定任务或领域，使其成为此场景中最合适的步骤。 B、不正确。在相同的通用数据集上继续进行预训练并不能解决问题，因为模型已经缺乏特定领域的知识，并且进一步的预训练不会增加这种专业化。 C、不正确。按原样部署模型不会提高其处理特定领域问题的能力，因为当前在理解公司产品方面的缺陷仍未得到解决。 D、不正确。使用迁移学习从头开始训练新模型是不必要的且效率低下，因为基础模型已经经过预先训练，并且微调可以有效地使其专门化以满足您的需求。

---

## Question 140  `#140`

**EN** A retail company wants to implement a recommendation system using a pre-trained foundation model. They plan to use pre-training, fine-tuning, and continuous pre-training to improve the model's performance. Which of the following correctly describes the role of these steps in training the foundation model?

**中** 一家零售公司希望使用预先训练的基础模型来实施推荐系统。他们计划通过预训练、微调和持续预训练来提高模型的性能。以下哪项正确描述了这些步骤在训练基础模型中的作用？

- **A.** Pre-training involves training the model on a large, general dataset to learn broad patterns and representations.
  - 预训练涉及在大型通用数据集上训练模型以学习广泛的模式和表示。
- **B.** Fine-tuning adapts the pre-trained model to a specific use case or domain using a smaller, task-specific dataset.
  - 微调使用较小的特定于任务的数据集使预训练模型适应特定用例或领域。
- **C.** Continuous pre-training can be used to incrementally update the model with new general-purpose data to maintain its relevancy.
  - 连续预训练可用于使用新的通用数据增量更新模型，以保持其相关性。
- **D.** Fine-tuning removes all the knowledge gained during pre-training and trains the model from scratch for the specific task.
  - 微调会删除预训练期间获得的所有知识，并针对特定任务从头开始训练模型。
- **E.** Pre-training and fine-tuning are interchangeable processes and serve the same purpose in model training.
  - 预训练和微调是可互换的过程，并且在模型训练中具有相同的目的。

**正确答案 / Answer: `A,B,C`**

Training a foundation model involves multiple steps that build upon each other. Pre-training establishes a broad understanding by training on large, diverse datasets. Fine-tuning specializes the model for specific tasks or domains. Continuous pre-training helps keep the model updated with new general-purpose data, ensuring long-term relevance. Each step plays a unique and complementary role in developing and maintaining foundation models.
A. Correct. Correct: Pre-training is the initial phase where the model is trained on a large, diverse dataset to learn general representations, forming the foundation for further training.
B. Correct. Correct: Fine-tuning takes the pre-trained model and customizes it to a particular domain or task using domain-specific or task-specific data.
C. Correct. Correct: Continuous pre-training allows the model to be updated incrementally with new general-purpose data, keeping it aligned with evolving data trends.
D. Incorrect. Incorrect: Fine-tuning does not discard the knowledge gained during pre-training; instead, it builds upon it to specialize the model for specific tasks.
E. Incorrect. Incorrect: Pre-training and fine-tuning are distinct processes with different objectives. Pre-training focuses on general knowledge, while fine-tuning adapts this knowledge for specific tasks.

训练基础模型涉及多个相互构建的步骤。预训练通过对大型、多样化的数据集进行训练来建立广泛的理解。微调专门针对特定任务或领域的模型。持续的预训练有助于使用新的通用数据更新模型，确保长期相关性。每个步骤在开发和维护基础模型方面都发挥着独特和互补的作用。答：正确。正确：预训练是模型在大型、多样化的数据集上进行训练以学习一般表示的初始阶段，为进一步训练奠定了基础。 B、正确。正确：微调采用预先训练的模型，并使用特定于域或特定于任务的数据将其定制为特定域或任务。 C、正确。正确：持续的预训练允许使用新的通用数据增量更新模型，使其与不断变化的数据趋势保持一致。 D、不正确。错误：微调并没有丢弃预训练时获得的知识；相反，它建立在它的基础上，使模型专门用于特定任务。 E、不正确。错误：预训练和微调是具有不同目标的不同过程。预训练侧重于一般知识，而微调则使这些知识适应特定任务。

---

## Question 141  `#141`

**EN** A company wants to use a foundation model for a chatbot application tailored to the healthcare industry. They need the model to understand medical terminology and respond appropriately to patient inquiries. Which of the following methods are appropriate for fine-tuning the foundation model to meet their requirements?

**中** 一家公司希望使用针对医疗保健行业量身定制的聊天机器人应用程序的基础模型。他们需要该模型来理解医学术语并适当地回应患者的询问。以下哪种方法适合微调基础模型以满足其要求？

- **A.** Instruction tuning by providing task-specific prompts and examples for healthcare scenarios.
  - 通过为医疗保健场景提供特定于任务的提示和示例来调整指令。
- **B.** Adapting the model for the healthcare domain using a dataset of medical records and conversations.
  - 使用医疗记录和对话数据集调整医疗保健领域的模型。
- **C.** Using transfer learning by pre-training the model on general-purpose web data.
  - 通过在通用网络数据上预训练模型来使用迁移学习。
- **D.** Continuous pre-training of the model on a corpus of healthcare-related documents.
  - 在医疗保健相关文档的语料库上对模型进行持续预训练。
- **E.** Re-training the model from scratch with a custom architecture for healthcare.
  - 使用医疗保健定制架构从头开始重新训练模型。

**正确答案 / Answer: `A,B,D`**

Fine-tuning a foundation model for specific use cases often involves methods like instruction tuning, domain adaptation, and continuous pre-training. These approaches allow the model to specialize in a particular field, such as healthcare, without the need for costly and time-consuming re-training from scratch. Transfer learning is valuable, but the question's scenario assumes the model is already pre-trained, making some steps unnecessary.
A. Correct. Correct: Instruction tuning involves providing task-specific prompts and examples, which can help the model better understand and generate responses tailored to healthcare scenarios.
B. Correct. Correct: Adapting the model for a specific domain, such as healthcare, by using domain-specific datasets allows the model to specialize in that area.
C. Incorrect. Incorrect: Transfer learning typically involves leveraging pre-trained models on general-purpose data, but this option suggests starting with general-purpose web data for pre-training, which is not necessary as the foundation model is already pre-trained.
D. Correct. Correct: Continuous pre-training on a domain-specific corpus, such as healthcare documents, can improve the model's understanding of specialized terminology and context.
E. Incorrect. Incorrect: Re-training the model from scratch is inefficient and unnecessary when a pre-trained foundation model is available. Fine-tuning methods are more practical and cost-effective.

针对特定用例微调基础模型通常涉及指令调整、领域适应和持续预训练等方法。这些方法使模型能够专注于特定领域，例如医疗保健，而无需从头开始进行昂贵且耗时的重新训练。迁移学习很有价值，但问题的场景假设模型已经过预训练，因此不需要执行某些步骤。答：正确。正确：指令调整涉及提供特定于任务的提示和示例，这可以帮助模型更好地理解并生成针对医疗保健场景的响应。 B、正确。正确：通过使用特定领域的数据集，针对特定领域（例如医疗保健）调整模型，可以让模型专门研究该领域。 C、不正确。错误：迁移学习通常涉及利用通用数据上的预训练模型，但此选项建议从通用 Web 数据开始进行预训练，这是没有必要的，因为基础模型已经过预训练。 D、正确。正确：对特定领域的语料库（例如医疗保健文档）进行持续预训练可以提高模型对专业术语和上下文的理解。 E、不正确。错误：当预训练的基础模型可用时，从头开始重新训练模型效率低下且不必要。微调方法更加实用且更具成本效益。

---

## Question 142  `#142`

**EN** A company wants to use a pre-trained foundation model to power a customer support chatbot that understands domain-specific terminology for the healthcare industry. What is the most appropriate method to customize the model for this use case?

**中** 一家公司希望使用预先训练的基础模型来为客户支持聊天机器人提供支持，以了解医疗保健行业的特定领域术语。针对此用例定制模型的最合适方法是什么？

- **A.** Instruction tuning to teach the model how to perform specific tasks using labeled examples
  - 指令调整，教模型如何使用带标签的示例执行特定任务
- **B.** Adapting the model for the healthcare domain using transfer learning with domain-specific data
  - 使用迁移学习和特定领域的数据来调整医疗保健领域的模型
- **C.** Continuous pre-training on a general-purpose dataset to improve the model's overall knowledge
  - 对通用数据集进行持续预训练，以提高模型的整体知识
- **D.** Re-training the entire foundation model from scratch using only healthcare-specific data
  - 仅使用特定于医疗保健的数据从头开始重新训练整个基础模型

**正确答案 / Answer: `B`**

For customizing a pre-trained foundation model for a specific domain like healthcare, transfer learning is the most appropriate method. Transfer learning allows you to leverage the knowledge the model has already learned and refine it using domain-specific data. This approach is efficient and practical compared to alternatives like re-training from scratch.
A. Incorrect. Instruction tuning is used to teach the model how to perform specific tasks but does not involve adapting the model to a specific domain like healthcare.
B. Correct. Adapting the model using transfer learning with domain-specific data is the most appropriate approach. This method fine-tunes the pre-trained model using data from the healthcare domain, enabling it to understand and generate content specific to the industry.
C. Incorrect. Continuous pre-training on general-purpose datasets helps improve the model's general knowledge but does not tailor it to a specific domain such as healthcare.
D. Incorrect. Re-training the entire foundation model from scratch is not feasible due to the high computational cost and large data requirements. It is also unnecessary since the pre-trained model can be fine-tuned for this specific use case.

要为医疗保健等特定领域定制预训练的基础模型，迁移学习是最合适的方法。迁移学习允许您利用模型已经学到的知识，并使用特定领域的数据对其进行改进。与从头开始重新训练等替代方案相比，这种方法既高效又实用。 A. 不正确。指令调优用于教导模型如何执行特定任务，但不涉及使模型适应医疗保健等特定领域。 B、正确。使用迁移学习和特定领域的数据来调整模型是最合适的方法。该方法使用来自医疗保健领域的数据对预训练模型进行微调，使其能够理解并生成特定于行业的内容。 C、不正确。对通用数据集的持续预训练有助于提高模型的一般知识，但不能将其适应特定领域（例如医疗保健）。 D、不正确。由于计算成本高且数据需求大，从头开始重新训练整个基础模型是不可行的。这也是不必要的，因为可以针对该特定用例对预训练模型进行微调。

---

## Question 143  `#143`

**EN** You are deploying a natural language processing (NLP) application that needs to classify technical research papers into specific categories. You start with a pre-trained foundation model but want to improve its performance on this task. Which of the following methods would be appropriate for fine-tuning the foundation model for this specific use case?

**中** 您正在部署一个自然语言处理 (NLP) 应用程序，该应用程序需要将技术研究论文分类为特定类别。您从预先训练的基础模型开始，但希望提高其在此任务上的性能。以下哪种方法适合针对该特定用例微调基础模型？

- **A.** Use instruction tuning to guide the model's behavior with task-specific prompts.
  - 使用指令调整通过特定于任务的提示来指导模型的行为。
- **B.** Perform transfer learning by training the model on a labeled dataset of research papers.
  - 通过在带标签的研究论文数据集上训练模型来执行迁移学习。
- **C.** Adapt the model by using unsupervised clustering of research papers without further training.
  - 通过使用研究论文的无监督聚类来调整模型，无需进一步训练。
- **D.** Apply domain-specific continuous pre-training using a large corpus of technical research papers.
  - 使用大量技术研究论文语料库应用特定领域的连续预训练。
- **E.** Train a new model from scratch using only the labeled dataset of research papers.
  - 仅使用研究论文的标记数据集从头开始训练新模型。

**正确答案 / Answer: `A,B,D`**

Fine-tuning a foundation model for specific tasks like classifying research papers can involve methods such as instruction tuning, transfer learning, and domain-specific continuous pre-training. These approaches leverage the general knowledge encoded in the foundation model while adapting it to the task's specific requirements. Training a new model is not optimal in this case, and unsupervised clustering does not directly improve the model for classification tasks.
A. Correct. Instruction tuning involves using task-specific prompts or examples to fine-tune the model's behavior, making it suitable for specific tasks like text classification.
B. Correct. Transfer learning involves fine-tuning the pre-trained model on a labeled dataset specific to the task, which is highly effective for tasks like categorizing research papers.
C. Incorrect. Unsupervised clustering does not qualify as fine-tuning. It groups data based on similarities but does not modify or adapt the model for the specific task.
D. Correct. Continuous pre-training on domain-specific data helps adapt the model further to the language and semantics of that domain, enhancing its relevance and performance.
E. Incorrect. Training a new model from scratch is usually unnecessary and resource-intensive when fine-tuning a pre-trained foundation model is a much more efficient approach.

针对研究论文分类等特定任务微调基础模型可能涉及指令调整、迁移学习和特定领域的连续预训练等方法。这些方法利用基础模型中编码的一般知识，同时使其适应任务的特定要求。在这种情况下，训练新模型并不是最优的，并且无监督聚类不会直接改进分类任务的模型。答：正确。指令调整涉及使用特定于任务的提示或示例来微调模型的行为，使其适合文本分类等特定任务。 B、正确。迁移学习涉及在特定于任务的标记数据集上微调预训练模型，这对于研究论文分类等任务非常有效。 C、不正确。无监督聚类不符合微调的资格。它根据相似性对数据进行分组，但不会针对特定任务修改或调整模型。 D、正确。对特定领域数据的持续预训练有助于使模型进一步适应该领域的语言和语义，从而增强其相关性和性能。 E、不正确。当微调预训练的基础模型是一种更有效的方法时，从头开始训练新模型通常是不必要的，而且会占用大量资源。

---

## Question 144  `#144`

**EN** You are tasked with fine-tuning a foundation model using a dataset for a customer support chatbot. Which actions should you take to ensure the dataset is properly prepared for fine-tuning the model?

**中** 您的任务是使用客户支持聊天机器人的数据集微调基础模型。您应该采取哪些操作来确保为微调模型正确准备数据集？

- **A.** Ensure the dataset includes a diverse range of customer queries representative of real-world use cases.
  - 确保数据集包含代表实际用例的各种客户查询。
- **B.** Label the dataset with specific intents and responses for supervised learning.
  - 使用监督学习的特定意图和响应来标记数据集。
- **C.** Use only a small dataset with minimal diversity to reduce training time.
  - 仅使用多样性最小的小数据集来减少训练时间。
- **D.** Incorporate reinforcement learning from human feedback (RLHF) to align the model's responses with human preferences.
  - 结合人类反馈 (RLHF) 的强化学习，使模型的响应与人类偏好保持一致。
- **E.** Include personally identifiable information (PII) in the dataset to improve personalization.
  - 在数据集中包含个人身份信息 (PII) 以改进个性化。

**正确答案 / Answer: `A,B,D`**

To fine-tune a foundation model effectively, it is crucial to prepare the dataset by making it diverse and representative of real-world scenarios, labeling it for supervised learning, and optionally using RLHF to improve alignment with human preferences. Avoid practices like including PII or using insufficiently diverse datasets, as these can lead to ethical and performance issues.
A. Correct. Ensuring the dataset includes diverse and representative customer queries helps the model generalize effectively to real-world scenarios, which is critical for fine-tuning.
B. Correct. Labeling the dataset with specific intents and responses is necessary for supervised learning, enabling the model to learn the desired behavior.
C. Incorrect. Using a small and minimally diverse dataset may reduce training time, but it can lead to a poorly performing model that cannot generalize to real-world inputs.
D. Correct. Incorporating reinforcement learning from human feedback (RLHF) aligns the model with human preferences, ensuring more accurate and appropriate responses during fine-tuning.
E. Incorrect. Including personally identifiable information (PII) in the dataset violates data governance and security best practices. It should be avoided to ensure ethical AI development.

为了有效地微调基础模型，至关重要的是准备数据集，使其多样化并代表现实世界场景，将其标记为监督学习，并可选择使用 RLHF 来提高与人类偏好的一致性。避免包含 PII 或使用不够多样化的数据集等做法，因为这些可能会导致道德和性能问题。答：正确。确保数据集包含多样化且具有代表性的客户查询有助于模型有效地推广到现实场景，这对于微调至关重要。 B、正确。用特定意图和响应标记数据集对于监督学习是必要的，使模型能够学习所需的行为。 C、不正确。使用小型且多样性最低的数据集可能会减少训练时间，但可能会导致模型性能不佳，无法推广到现实世界的输入。 D、正确。结合人类反馈的强化学习 (RLHF) 使模型与人类偏好保持一致，确保微调过程中做出更准确、更适当的响应。 E、不正确。在数据集中包含个人身份信息 (PII) 违反了数据治理和安全最佳实践。应该避免这种情况，以确保人工智能的发展符合道德规范。

---

## Question 145  `#145`

**EN** You are tasked with fine-tuning a foundation model for a customer service chatbot. The goal is to ensure the model provides accurate responses and aligns with company policies. Which actions should you take to prepare the data for fine-tuning?

**中** 您的任务是微调客户服务聊天机器人的基础模型。目标是确保模型提供准确的响应并符合公司政策。您应该采取哪些措施来准备数据以进行微调？

- **A.** Ensure the dataset includes representative examples of common customer queries and responses.
  - 确保数据集包含常见客户查询和响应的代表性示例。
- **B.** Randomly sample unstructured text data from the internet without filtering.
  - 从互联网上随机采样非结构化文本数据而不进行过滤。
- **C.** Apply data labeling to classify customer queries based on intent and sentiment.
  - 应用数据标签根据意图和情绪对客户查询进行分类。
- **D.** Incorporate reinforcement learning from human feedback (RLHF) to improve alignment with company policies.
  - 结合人类反馈 (RLHF) 的强化学习，以提高与公司政策的一致性。
- **E.** Exclude data governance considerations since they do not impact model fine-tuning.
  - 排除数据治理考虑因素，因为它们不会影响模型微调。

**正确答案 / Answer: `A,C,D`**

Preparing data for fine-tuning requires ensuring the data is representative of real-world scenarios, properly labeled for the tasks the model must perform, and aligned with organizational goals using techniques like RLHF. Data governance is also critical to ensure ethical and legal compliance while avoiding random, unfiltered data that may introduce errors or biases.
A. Correct. Ensuring the dataset includes representative examples is critical to preparing training data that reflects real-world use cases and improves the model’s performance.
B. Incorrect. Randomly sampling unstructured data without filtering can introduce noise, irrelevant information, or biases, which can negatively impact the fine-tuned model.
C. Correct. Data labeling helps the model learn specific tasks such as identifying intents and sentiments, which are essential for a customer service chatbot.
D. Correct. Reinforcement learning from human feedback (RLHF) helps fine-tune the model to align with human expectations and specific company policies, making its responses more accurate and trustworthy.
E. Incorrect. Excluding data governance considerations is incorrect as governance ensures the data is compliant, unbiased, and appropriate for use.

准备数据进行微调需要确保数据代表现实场景，为模型必须执行的任务正确标记，并使用 RLHF 等技术与组织目标保持一致。数据治理对于确保道德和法律合规性也至关重要，同时避免可能引入错误或偏见的随机、未经过滤的数据。答：正确。确保数据集包含代表性示例对于准备反映真实用例并提高模型性能的训练数据至关重要。 B、不正确。在不进行过滤的情况下随机采样非结构化数据可能会引入噪声、不相关信息或偏差，这可能会对微调模型产生负面影响。 C、正确。数据标记有助于模型学习特定任务，例如识别意图和情绪，这对于客户服务聊天机器人至关重要。 D、正确。根据人类反馈进行强化学习 (RLHF) 有助于微调模型，以符合人类期望和具体的公司政策，使其响应更加准确和可信。 E、不正确。排除数据治理考虑因素是不正确的，因为治理可确保数据合规、公正且适合使用。

---

## Question 146  `#146`

**EN** You are tasked with fine-tuning a foundation model for a customer service chatbot. The training dataset contains thousands of chat transcripts, but the data is unstructured and contains inconsistent formats, redundant entries, and some irrelevant conversations. Which steps should you take to prepare the data before fine-tuning the model?

**中** 您的任务是微调客户服务聊天机器人的基础模型。训练数据集包含数千条聊天记录，但数据是非结构化的，包含格式不一致、冗余条目和一些不相关的对话。在微调模型之前，您应该采取哪些步骤来准备数据？

- **A.** Clean and normalize the data to remove inconsistencies and irrelevant entries.
  - 清理和标准化数据以消除不一致和不相关的条目。
- **B.** Ensure the dataset is representative of the scenarios the chatbot will handle in production.
  - 确保数据集代表聊天机器人将在生产中处理的场景。
- **C.** Label the data with the expected outputs, such as intent categories or response types.
  - 使用预期输出标记数据，例如意图类别或响应类型。
- **D.** Increase the size of the dataset by duplicating existing entries to achieve larger training data.
  - 通过复制现有条目来增加数据集的大小以获得更大的训练数据。
- **E.** Incorporate reinforcement learning from human feedback (RLHF) during data preparation.
  - 在数据准备过程中结合来自人类反馈的强化学习 (RLHF)。

**正确答案 / Answer: `A,B,C`**

Preparing data for fine-tuning a foundation model involves ensuring data quality, representativeness, and proper labeling. Cleaning and normalizing the data removes inconsistencies, while representativeness ensures the model generalizes well to real-world scenarios. Labeling the data provides the supervised signals needed during the fine-tuning process. RLHF, while useful during optimization, is not part of the initial data preparation phase, and duplicating data can harm model training by introducing biases.
A. Correct. Cleaning and normalizing data is essential to remove inconsistencies and irrelevant information, ensuring high-quality input for fine-tuning.
B. Correct. A representative dataset ensures that the model learns from diverse scenarios and performs well in real-world use cases.
C. Correct. Labeling the data with expected outputs, such as intents or categories, is crucial for supervised fine-tuning tasks.
D. Incorrect. Duplicating existing entries does not increase the diversity or quality of the data and can lead to overfitting during training.
E. Incorrect. While reinforcement learning from human feedback (RLHF) is a valuable technique for optimizing model behavior, it is not a direct step in preparing the dataset for fine-tuning.

准备数据以微调基础模型涉及确保数据质量、代表性和正确的标签。清理和标准化数据可以消除不一致，而代表性则确保模型能够很好地推广到现实世界的场景。标记数据提供了微调过程中所需的监督信号。 RLHF 虽然在优化过程中很有用，但它不是初始数据准备阶段的一部分，并且重复数据可能会引入偏差，从而损害模型训练。答：正确。清理和规范化数据对于消除不一致和不相关的信息至关重要，从而确保微调的高质量输入。 B、正确。具有代表性的数据集可确保模型从不同的场景中学习并在现实用例中表现良好。 C、正确。用预期输出（例如意图或类别）标记数据对于监督微调任务至关重要。 D、不正确。复制现有条目不会增加数据的多样性或质量，并且可能导致训练期间过度拟合。 E、不正确。虽然根据人类反馈进行强化学习 (RLHF) 是优化模型行为的一项有价值的技术，但它并不是准备数据集进行微调的直接步骤。

---

## Question 147  `#147`

**EN** A company is evaluating the performance of a foundation model they fine-tuned for summarizing long technical documents. They want to ensure that the summaries are accurate, concise, and meaningful. Which methods could the company use to evaluate the foundation model's performance?

**中** 一家公司正在评估他们为总结长技术文档而微调的基础模型的性能。他们希望确保摘要准确、简洁且有意义。公司可以使用哪些方法来评估基础模型的性能？

- **A.** Use BLEU or ROUGE scores to compare the model's output against reference summaries.
  - 使用 BLEU 或 ROUGE 分数将模型的输出与参考摘要进行比较。
- **B.** Manually review a random sample of summaries for readability and factual accuracy.
  - 手动审查随机摘要样本的可读性和事实准确性。
- **C.** Examine the model's training loss to judge its performance on summarization tasks.
  - 检查模型的训练损失以判断其在摘要任务上的表现。
- **D.** Conduct user surveys to evaluate how end-users perceive the quality of the summaries.
  - 进行用户调查以评估最终用户如何看待摘要的质量。
- **E.** Evaluate the model's latency and compute cost during inference.
  - 评估推理过程中模型的延迟和计算成本。

**正确答案 / Answer: `A,B,D`**

Evaluating a foundation model's performance for summarization requires a mix of quantitative and qualitative methods. BLEU and ROUGE provide quantitative measures against reference summaries, while manual review and user surveys offer qualitative insights into accuracy, readability, and user satisfaction. Training loss and latency are not directly relevant to task-specific performance evaluation.
A. Correct. BLEU and ROUGE scores are commonly used evaluation metrics for text generation tasks, such as summarization, as they measure similarity to reference summaries.
B. Correct. Manual review is a qualitative evaluation method that helps assess readability and factual accuracy, which are critical for summarization tasks.
C. Incorrect. While training loss is a useful metric during model training, it does not directly evaluate the performance of a model in real-world summarization tasks.
D. Correct. User surveys can provide valuable feedback on how well the generated summaries meet user expectations and are perceived as meaningful.
E. Incorrect. Latency and compute cost are performance considerations but are not directly related to evaluating the quality or effectiveness of the summaries generated.

评估基础模型的概括性能需要定量和定性方法的结合。 BLEU 和 ROUGE 提供针对参考摘要的定量测量，而手动审核和用户调查则提供有关准确性、可读性和用户满意度的定性见解。训练损失和延迟与特定任务的绩效评估没有直接关系。答：正确。 BLEU 和 ROUGE 分数是文本生成任务（例如摘要）的常用评估指标，因为它们衡量与参考摘要的相似性。 B、正确。手动审核是一种定性评估方法，有助于评估可读性和事实准确性，这对于摘要任务至关重要。 C、不正确。虽然训练损失是模型训练期间的一个有用指标，但它并不能直接评估模型在现实世界摘要任务中的性能。 D、正确。用户调查可以提供有关生成的摘要如何满足用户期望以及被认为有意义的宝贵反馈。 E、不正确。延迟和计算成本是性能考虑因素，但与评估生成的摘要的质量或有效性没有直接关系。

---

## Question 148  `#148`

**EN** A company is using a foundation model for text generation and wants to evaluate its performance. Which of the following methods are appropriate for evaluating the foundation model's performance?

**中** 一家公司正在使用基础模型进行文本生成，并希望评估其性能。以下哪种方法适合评估基础模型的性能？

- **A.** Use BLEU (Bilingual Evaluation Understudy) score to measure the quality of generated text against a reference text.
  - 使用 BLEU（双语评估替补）分数来衡量生成文本相对于参考文本的质量。
- **B.** Calculate the model's accuracy based on the number of correctly predicted tokens in the generated text.
  - 根据生成文本中正确预测的标记数量计算模型的准确性。
- **C.** Conduct human evaluations to assess the relevance and fluency of the generated text.
  - 进行人工评估以评估生成文本的相关性和流畅性。
- **D.** Use confusion matrices to analyze how well the foundation model distinguishes between different text categories.
  - 使用混淆矩阵来分析基础模型区分不同文本类别的能力。
- **E.** Apply F1-score to evaluate the balance between precision and recall for text classification tasks.
  - 应用 F1 分数来评估文本分类任务的精确度和召回率之间的平衡。

**正确答案 / Answer: `A,C`**

Foundation model performance for text generation is best evaluated using task-specific methods. BLEU is a quantitative metric that compares generated text with reference texts, while human evaluations provide qualitative insights into aspects like fluency and relevance. Metrics like accuracy, confusion matrices, and F1-score are better suited for classification or prediction tasks rather than text generation.
A. Correct. BLEU score is a widely used metric for evaluating text generation models. It compares the generated text with reference texts to assess quality.
B. Incorrect. Accuracy is not commonly used for evaluating text generation tasks, as it does not effectively capture nuances like fluency or relevance in generated text.
C. Correct. Human evaluations are a valid and commonly used approach to assess the quality of generated text, particularly for subjective measures like fluency and relevance.
D. Incorrect. Confusion matrices are more suited for classification tasks rather than evaluating the quality of text generation models.
E. Incorrect. The F1-score is relevant for classification tasks but is not applicable for evaluating the performance of text generation models.

使用特定于任务的方法可以最好地评估文本生成的基础模型性能。 BLEU 是一种定量指标，可将生成的文本与参考文本进行比较，而人工评估则提供对流畅性和相关性等方面的定性见解。准确性、混淆矩阵和 F1 分数等指标更适合分类或预测任务，而不是文本生成。答：正确。 BLEU 分数是一种广泛使用的用于评估文本生成模型的指标。它将生成的文本与参考文本进行比较以评估质量。 B、不正确。准确性通常不用于评估文本生成任务，因为它不能有效地捕捉生成文本中的流畅性或相关性等细微差别。 C、正确。人工评估是评估生成文本质量的有效且常用的方法，特别是对于流畅性和相关性等主观衡量标准。 D、不正确。混淆矩阵更适合分类任务，而不是评估文本生成模型的质量。 E、不正确。 F1 分数与分类任务相关，但不适用于评估文本生成模型的性能。

---

## Question 149  `#149`

**EN** A company is using a foundation model for a natural language processing (NLP) task, such as text summarization. They want to evaluate the model's performance to ensure it meets their quality standards. Which methods are appropriate for evaluating the performance of the foundation model?

**中** 一家公司正在使用基础模型来执行自然语言处理 (NLP) 任务，例如文本摘要。他们希望评估模型的性能以确保其符合他们的质量标准。哪些方法适合评估基础模型的性能？

- **A.** Use BLEU or ROUGE scores to compare the model's output with reference summaries.
  - 使用 BLEU 或 ROUGE 分数将模型的输出与参考摘要进行比较。
- **B.** Assess the model’s performance by monitoring its GPU utilization during inference.
  - 通过在推理过程中监控 GPU 利用率来评估模型的性能。
- **C.** Conduct human evaluation by having domain experts rate the quality of the summaries.
  - 通过让领域专家评估摘要的质量来进行人工评估。
- **D.** Measure the model's accuracy by comparing it to a benchmark dataset for classification tasks.
  - 通过将模型与分类任务的基准数据集进行比较来衡量模型的准确性。
- **E.** Evaluate the model's performance using prompt engineering to improve outputs.
  - 使用即时工程来评估模型的性能以提高输出。

**正确答案 / Answer: `A,C`**

Evaluating foundation model performance for tasks like summarization often involves objective metrics such as BLEU and ROUGE, as well as subjective methods like human evaluation. These approaches measure the quality and relevance of the generated summaries. Other methods, such as monitoring GPU utilization or using metrics like accuracy for unrelated tasks, are not suitable for this purpose.
A. Correct. BLEU and ROUGE are standard metrics used for evaluating the quality of text generation tasks like summarization. They compare the model's output with reference summaries, making this an appropriate method.
B. Incorrect. Monitoring GPU utilization is a measure of resource efficiency, not a performance metric for evaluating the quality of the model's outputs.
C. Correct. Human evaluation is a reliable method for assessing the quality of text generation tasks, especially when subjective judgment is required, such as in summarization.
D. Incorrect. Accuracy is commonly used for classification tasks, but it is not suitable for evaluating a summarization task, which involves generating text rather than predicting labels.
E. Incorrect. Prompt engineering is a method for improving the model's outputs, but it is not an evaluation method to measure the model's performance.

评估摘要等任务的基础模型性能通常涉及 BLEU 和 ROUGE 等客观指标，以及人工评估等主观方法。这些方法衡量生成的摘要的质量和相关性。其他方法（例如监控 GPU 利用率或使用不相关任务的准确性等指标）不适合此目的。答：正确。 BLEU 和 ROUGE 是用于评估摘要等文本生成任务质量的标准指标。他们将模型的输出与参考摘要进行比较，使其成为一种合适的方法。 B、不正确。监控 GPU 利用率是资源效率的衡量标准，而不是评估模型输出质量的性能指标。 C、正确。人工评估是评估文本生成任务质量的可靠方法，特别是在需要主观判断时，例如摘要。 D、不正确。准确性通常用于分类任务，但它不适合评估摘要任务，因为摘要任务涉及生成文本而不是预测标签。 E、不正确。即时工程是一种改进模型输出的方法，但它不是衡量模型性能的评估方法。

---

## Question 150  `#150`

**EN** A data science team is evaluating the performance of a foundation model trained for natural language understanding tasks. They want to ensure the model is robust across multiple use cases, including sentiment analysis, text summarization, and machine translation. Which approaches should they use to evaluate the foundation model's performance effectively?

**中** 数据科学团队正在评估针对自然语言理解任务训练的基础模型的性能。他们希望确保模型在多个用例中保持稳健，包括情感分析、文本摘要和机器翻译。他们应该使用哪些方法来有效评估基础模型的性能？

- **A.** Use benchmark datasets specifically designed for each task, such as GLUE for natural language understanding.
  - 使用专门为每个任务设计的基准数据集，例如用于自然语言理解的 GLUE。
- **B.** Conduct human evaluation by asking domain experts to rate the output quality for specific use cases.
  - 通过要求领域专家对特定用例的输出质量进行评级来进行人工评估。
- **C.** Evaluate the model solely based on its training data performance metrics, such as accuracy and loss.
  - 仅根据训练数据性能指标（例如准确性和损失）来评估模型。
- **D.** Use synthetic datasets generated by the foundation model itself for performance evaluation.
  - 使用基础模型本身生成的合成数据集进行性能评估。
- **E.** Perform cross-task evaluation by testing the model on tasks for which it was not explicitly trained.
  - 通过在未明确训练的任务上测试模型来执行跨任务评估。

**正确答案 / Answer: `A,B,E`**

Evaluating foundation model performance requires a combination of quantitative and qualitative approaches. Benchmark datasets provide standardized metrics, human evaluation ensures quality in subjective tasks, and cross-task evaluation assesses model generalization. Relying solely on training data or synthetic datasets compromises the reliability of the evaluation.
A. Correct. Benchmark datasets are specifically designed for evaluating model performance on standardized tasks, making this a reliable approach.
B. Correct. Human evaluation provides qualitative insights into the model's output quality, especially for subjective tasks like sentiment analysis.
C. Incorrect. Evaluating solely on training data performance can lead to overfitting issues and does not reflect real-world performance.
D. Incorrect. Synthetic datasets generated by the model itself could introduce bias and do not provide an objective evaluation of its capabilities.
E. Correct. Cross-task evaluation tests the adaptability and generalization of the foundation model, which is crucial for foundation models designed to handle diverse tasks.

评估基础模型性能需要结合定量和定性方法。基准数据集提供标准化指标，人工评估确保主观任务的质量，跨任务评估评估模型的泛化能力。仅仅依赖训练数据或合成数据集会损害评估的可靠性。答：正确。基准数据集专门用于评估标准化任务上的模型性能，使其成为一种可靠的方法。 B、正确。人工评估提供了对模型输出质量的定性洞察，尤其是对于情感分析等主观任务。 C、不正确。仅评估训练数据性能可能会导致过度拟合问题，并且不能反映真实世界的性能。 D、不正确。模型本身生成的综合数据集可能会引入偏差，并且无法对其功能进行客观评估。 E、正确。跨任务评估测试基础模型的适应性和泛化性，这对于设计用于处理不同任务的基础模型至关重要。

---

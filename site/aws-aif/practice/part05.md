# AWS AIF-C01 AI 练习卷（230 题） · 第 05 份

> 题目 201–230 · 中英对照 · 来源：HydraNode 免费题库（考生回忆题，逐项解析）

## Question 201  `#201`

**EN** A company is deploying a machine learning model on AWS to process sensitive customer data. They want to ensure the AI system is secure by restricting network access, encrypting data at rest, and monitoring for sensitive data leakage. Which combination of AWS services and features should the company use?

**中** 一家公司正在 AWS 上部署机器学习模型来处理敏感的客户数据。他们希望通过限制网络访问、加密静态数据以及监控敏感数据泄漏来确保人工智能系统的安全。公司应该使用哪种 AWS 服务和功能组合？

- **A.** AWS PrivateLink to restrict network access to the model endpoint
  - AWS PrivateLink 用于限制对模型终端节点的网络访问
- **B.** Amazon Macie to monitor and discover sensitive data
  - Amazon Macie 用于监控和发现敏感数据
- **C.** AWS Key Management Service (KMS) to manage encryption keys for data at rest
  - AWS Key Management Service (KMS)，用于管理静态数据的加密密钥
- **D.** AWS Lambda to automatically scale the model endpoint
  - AWS Lambda 自动缩放模型端点
- **E.** Amazon S3 Transfer Acceleration to speed up data uploads
  - Amazon S3 传输加速，加快数据上传速度

**正确答案 / Answer: `A,B,C`**

To secure an AI system processing sensitive data, you need to address network security, data encryption, and data monitoring. AWS PrivateLink ensures private network access, Amazon Macie helps detect and monitor sensitive data, and AWS KMS enables encryption of data at rest. These services collectively provide a robust security framework for the AI system.
A. Correct. AWS PrivateLink is designed to restrict network access by enabling private connectivity between VPCs and AWS services without exposing traffic to the public internet. This ensures the AI system's network traffic is secure.
B. Correct. Amazon Macie is a data security service that uses machine learning to discover, classify, and protect sensitive data. It is ideal for monitoring sensitive data leakage in this scenario.
C. Correct. AWS Key Management Service (KMS) enables encryption and secure management of keys for sensitive data at rest, ensuring data security.
D. Incorrect. AWS Lambda is a serverless compute service that is not directly related to securing an AI system. Instead, it is used for event-driven computing and scaling applications.
E. Incorrect. Amazon S3 Transfer Acceleration speeds up data uploads but does not provide security features like network restriction, encryption, or sensitive data monitoring.

为了确保人工智能系统处理敏感数据的安全，您需要解决网络安全、数据加密和数据监控问题。 AWS PrivateLink 确保专用网络访问，Amazon Macie 帮助检测和监控敏感数据，AWS KMS 支持静态数据加密。这些服务共同为人工智能系统提供了强大的安全框架。答：正确。 AWS PrivateLink 旨在通过在 VPC 和 AWS 服务之间启用私有连接来限制网络访问，而不会将流量暴露到公共互联网。这确保了 AI 系统的网络流量安全。 B、正确。 Amazon Macie 是一种数据安全服务，利用机器学习来发现、分类和保护敏感数据。它非常适合监控这种场景中的敏感数据泄露。 C、正确。 AWS Key Management Service (KMS) 支持静态敏感数据的密钥加密和安全管理，确保数据安全。 D、不正确。AWS Lambda 是一种无服务器计算服务，与保护 AI 系统没有直接关系。相反，它用于事件驱动的计算和扩展应用程序。 E、不正确。 Amazon S3 传输加速可加快数据上传速度，但不提供网络限制、加密或敏感数据监控等安全功能。

---

## Question 202  `#202`

**EN** Your company is deploying a machine learning (ML) model on Amazon SageMaker, and you are tasked with ensuring the system is secure. The model processes sensitive customer data, and compliance requirements mandate data encryption at rest, controlled network access, and proper IAM permissions. Which of the following AWS services and features should you use to secure the AI system?

**中** 您的公司正在 Amazon SageMaker 上部署机器学习 (ML) 模型，您的任务是确保系统安全。该模型处理敏感的客户数据，合规性要求要求静态数据加密、受控的网络访问和适当的 IAM 权限。您应该使用以下哪些 AWS 服务和功能来保护 AI 系统？

- **A.** Use AWS Key Management Service (AWS KMS) to encrypt data at rest.
  - 使用 AWS Key Management Service (AWS KMS) 加密静态数据。
- **B.** Set up an Amazon Macie job to find and classify sensitive data in Amazon S3.
  - 设置 Amazon Macie 作业以查找和分类 Amazon S3 中的敏感数据。
- **C.** Use AWS PrivateLink to restrict network traffic between SageMaker and other services.
  - 使用 AWS PrivateLink 限制 SageMaker 与其他服务之间的网络流量。
- **D.** Grant Amazon SageMaker full administrator access to simplify permissions management.
  - 授予 Amazon SageMaker 完全管理员访问权限以简化权限管理。
- **E.** Create an IAM role with least privilege access for SageMaker to access only required resources.
  - 创建具有最小权限访问权限的 IAM 角色，以便 SageMaker 仅访问所需的资源。

**正确答案 / Answer: `A,C,E`**

To secure an AI system in AWS, it is important to implement encryption (using AWS KMS), control network access (using AWS PrivateLink), and follow IAM best practices like least privilege access. These measures collectively reduce the risk of unauthorized access and ensure compliance with security and regulatory requirements. While Amazon Macie can help identify sensitive data, it does not directly secure the AI system, and granting full administrator access is not aligned with security best practices.
A. Correct. Correct. AWS KMS allows you to encrypt sensitive data at rest, which is a critical security measure for compliance and data protection.
B. Incorrect. Partially correct but not sufficient for this scenario. Amazon Macie is useful for discovering and classifying sensitive data, but it does not directly secure the SageMaker deployment.
C. Correct. Correct. AWS PrivateLink helps secure communications by restricting network traffic to private endpoints, reducing exposure to the public internet.
D. Incorrect. Incorrect. Granting full administrator access violates the principle of least privilege and increases the risk of accidental or malicious misuse.
E. Correct. Correct. Creating an IAM role with least privilege ensures SageMaker has access to only the resources it needs, which is a best practice for securing AI systems.

为了保护 AWS 中的 AI 系统，实施加密（使用 AWS KMS）、控制网络访问（使用 AWS PrivateLink）并遵循 IAM 最佳实践（例如最小权限访问）非常重要。这些措施共同降低了未经授权访问的风险，并确保符合安全和监管要求。虽然 Amazon Macie 可以帮助识别敏感数据，但它不能直接保护 AI 系统，并且授予完全管理员访问权限并不符合安全最佳实践。答：正确。正确的。 AWS KMS 允许您对静态敏感数据进行加密，这是合规性和数据保护的关键安全措施。 B、不正确。部分正确，但不足以满足这种情况。 Amazon Macie 对于发现和分类敏感数据很有用，但它不能直接保护 SageMaker 部署。 C、正确。正确的。AWS PrivateLink 通过限制专用端点的网络流量来帮助保护通信安全，从而减少对公共互联网的暴露。 D、不正确。不正确。授予完全管理员访问权限违反了最小权限原则，并增加了意外或恶意滥用的风险。 E、正确。正确的。创建具有最小权限的 IAM 角色可确保 SageMaker 只能访问其所需的资源，这是保护 AI 系统安全的最佳实践。

---

## Question 203  `#203`

**EN** You are designing an AI system hosted on AWS, which processes sensitive customer data. To ensure the system complies with security and privacy requirements, you need to implement measures to secure the data and restrict unauthorized access. Which of the following actions should you take to secure this AI system?

**中** 您正在设计一个托管在 AWS 上的 AI 系统，用于处理敏感的客户数据。为了确保系统符合安全和隐私要求，您需要采取措施来保护数据并限制未经授权的访问。您应该采取以下哪些措施来保护该人工智能系统？

- **A.** Use IAM roles with least privilege to grant access to AI system resources.
  - 使用具有最低权限的 IAM 角色来授予对 AI 系统资源的访问权限。
- **B.** Enable AWS PrivateLink to ensure communication between AI components stays within the AWS network.
  - 启用 AWS PrivateLink 以确保 AI 组件之间的通信保持在 AWS 网络内。
- **C.** Store sensitive data in Amazon S3 without encryption for faster processing.
  - 将敏感数据存储在 Amazon S3 中，无需加密，以加快处理速度。
- **D.** Use Amazon Macie to identify and protect sensitive data in your storage.
  - 使用 Amazon Macie 识别和保护存储中的敏感数据。
- **E.** Rely entirely on AWS to secure your AI system as part of the shared responsibility model.
  - 作为责任共担模型的一部分，完全依靠 AWS 来保护您的 AI 系统。

**正确答案 / Answer: `A,B,D`**

To secure AI systems on AWS, you must implement security best practices such as using IAM roles with least privilege, AWS PrivateLink for secure communication, and tools like Amazon Macie for identifying and protecting sensitive data. While AWS manages the security of the underlying infrastructure, you are responsible for securing your data and applications as part of the shared responsibility model.
A. Correct. Correct: IAM roles with least privilege ensure users and services have only the necessary permissions to access resources, reducing the risk of unauthorized access.
B. Correct. Correct: AWS PrivateLink ensures secure communication between AI components by keeping data within the AWS network, minimizing exposure to the public internet.
C. Incorrect. Incorrect: Storing sensitive data without encryption compromises the security of your system, making it vulnerable to potential breaches.
D. Correct. Correct: Amazon Macie helps identify sensitive data like personally identifiable information (PII) and ensures it is protected in compliance with security and privacy regulations.
E. Incorrect. Incorrect: The AWS shared responsibility model requires you to secure your applications and data. AWS secures the underlying infrastructure, but you must implement security measures for your AI system.

为了保护 AWS 上的 AI 系统，您必须实施安全最佳实践，例如使用具有最低权限的 IAM 角色、用于安全通信的 AWS PrivateLink 以及用于识别和保护敏感数据的 Amazon Macie 等工具。虽然 AWS 管理底层基础设施的安全性，但作为共享责任模型的一部分，您有责任保护数据和应用程序的安全。答：正确。正确：具有最小权限的 IAM 角色可确保用户和服务仅具有访问资源所需的权限，从而降低未经授权访问的风险。 B、正确。正确：AWS PrivateLink 通过将数据保留在 AWS 网络内来确保 AI 组件之间的安全通信，从而最大限度地减少对公共互联网的暴露。 C、不正确。错误：存储敏感数据而不加密会损害系统的安全性，使其容易受到潜在的破坏。 D、正确。正确：Amazon Macie 有助于识别个人身份信息 (PII) 等敏感数据，并确保其受到安全和隐私法规的保护。 E、不正确。错误：AWS 责任共担模型要求您保护您的应用程序和数据。 AWS 保护底层基础设施的安全，但您必须为您的 AI 系统实施安全措施。

---

## Question 204  `#204`

**EN** A company is building a machine learning model for predicting customer churn and wants to ensure transparency and accountability in their process. Which of the following AWS features can help the company document the data origins, transformations, and the model’s metadata effectively?

**中** 一家公司正在构建一个机器学习模型来预测客户流失，并希望确保其流程的透明度和问责制。以下哪些 AWS 功能可以帮助公司有效记录数据来源、转换和模型的元数据？

- **A.** AWS Glue Data Catalog
  - AWS Glue 数据目录
- **B.** Amazon SageMaker Model Cards
  - Amazon SageMaker 型号卡
- **C.** Amazon Rekognition
  - Amazon Rekognition
- **D.** AWS CloudTrail
  - AWS CloudTrail
- **E.** Amazon SageMaker Data Wrangler
  - 亚马逊 SageMaker Data Wrangler

**正确答案 / Answer: `A,B,E`**

Transparency and accountability in machine learning require proper documentation of data origins (data lineage) and metadata about the models. AWS Glue Data Catalog helps track data assets and their lineage, while SageMaker Model Cards focus on documenting model details, including the data used. Data Wrangler aids in documenting data preparation steps. Together, these tools help ensure a robust documentation process for machine learning workflows.
A. Correct. AWS Glue Data Catalog helps maintain a centralized repository of metadata about data assets, including their origins (data lineage). This supports documenting data sources and transformations.
B. Correct. Amazon SageMaker Model Cards provide a structured way to document information about machine learning models, including data origins, performance metrics, and intended use cases.
C. Incorrect. Amazon Rekognition is an AI service for image and video analysis. While it provides insights into media content, it does not support documenting data origins or metadata.
D. Incorrect. AWS CloudTrail tracks API activity and resource changes in AWS accounts but is not designed for documenting data origins or metadata related to machine learning models.
E. Correct. Amazon SageMaker Data Wrangler simplifies data preparation and transformation steps, allowing users to document these steps for transparency and reproducibility.

机器学习中的透明度和问责制需要正确记录数据来源（数据沿袭）和有关模型的元数据。 AWS Glue 数据目录有助于跟踪数据资产及其沿袭，而 SageMaker 模型卡则专注于记录模型详细信息，包括所使用的数据。 Data Wrangler 有助于记录数据准备步骤。这些工具共同帮助确保机器学习工作流程的稳健文档流程。答：正确。 AWS Glue 数据目录有助于维护有关数据资产的元数据的集中存储库，包括其来源（数据沿袭）。这支持记录数据源和转换。 B、正确。 Amazon SageMaker 模型卡提供了一种结构化的方式来记录有关机器学习模型的信息，包括数据来源、性能指标和预期用例。 C、不正确。 Amazon Rekognition 是一项用于图像和视频分析的人工智能服务。虽然它提供了对媒体内容的洞察，但它不支持记录数据来源或元数据。 D、不正确。 AWS CloudTrail 跟踪 AWS 账户中的 API 活动和资源更改，但不适用于记录与机器学习模型相关的数据来源或元数据。 E、正确。 Amazon SageMaker Data Wrangler 简化了数据准备和转换步骤，允许用户记录这些步骤以提高透明度和可重复性。

---

## Question 205  `#205`

**EN** A company is building a machine learning model using Amazon SageMaker. The data science team wants to ensure that they can effectively track the origins of their datasets, transformations applied, and the model's training history. Which combination of tools or practices should they use to achieve this?

**中** 一家公司正在使用 Amazon SageMaker 构建机器学习模型。数据科学团队希望确保他们能够有效地跟踪数据集的起源、应用的转换以及模型的训练历史。他们应该使用哪种工具或实践组合来实现这一目标？

- **A.** Use SageMaker Model Cards to document the model's training history and data sources.
  - 使用 SageMaker 模型卡记录模型的训练历史记录和数据源。
- **B.** Maintain a manual spreadsheet to document data transformations and sources.
  - 维护手动电子表格来记录数据转换和来源。
- **C.** Implement a data catalog using AWS Glue to track data origins and metadata.
  - 使用 AWS Glue 实施数据目录来跟踪数据来源和元数据。
- **D.** Leverage SageMaker Lineage Tracking to monitor data and model dependencies.
  - 利用 SageMaker Lineage Tracking 监控数据和模型依赖性。
- **E.** Rely solely on the training script comments to document data origins.
  - 仅依靠训练脚本注释来记录数据来源。

**正确答案 / Answer: `A,C,D`**

To effectively track data origins and maintain transparency in machine learning workflows, it is essential to use integrated tools like SageMaker Model Cards, AWS Glue Data Catalog, and SageMaker Lineage Tracking. These tools provide structured and scalable solutions for documenting data lineage, transformations, and model histories. Manual methods or relying solely on training script comments are not sufficient for ensuring traceability and scalability.
A. Correct. SageMaker Model Cards are used to document details about a model, such as its purpose, training datasets, evaluation metrics, and lineage. This is a key tool for tracking the model's history.
B. Incorrect. While maintaining a manual spreadsheet can help with documentation, it is prone to errors, lacks automation, and does not scale well for tracking complex data and model dependencies.
C. Correct. AWS Glue Data Catalog allows you to organize and track metadata for datasets, making it easier to identify the origins and structure of data used in machine learning pipelines.
D. Correct. SageMaker Lineage Tracking is explicitly designed to track dependencies between datasets, transformations, and models, ensuring transparency and traceability.
E. Incorrect. Training script comments are insufficient for comprehensive tracking of data origins and transformations as they are not structured or integrated with tools that manage lineage and metadata.

为了有效跟踪数据来源并保持机器学习工作流程的透明度，必须使用 SageMaker 模型卡、AWS Glue 数据目录和 SageMaker Lineage Tracking 等集成工具。这些工具提供了结构化且可扩展的解决方案，用于记录数据沿袭、转换和模型历史记录。手动方法或仅依赖训练脚本注释不足以确保可追溯性和可扩展性。答：正确。 SageMaker 模型卡用于记录有关模型的详细信息，例如其用途、训练数据集、评估指标和沿袭。这是跟踪模型历史的关键工具。 B、不正确。虽然维护手动电子表格有助于记录文档，但它很容易出错、缺乏自动化，并且不能很好地扩展以跟踪复杂的数据和模型依赖性。 C、正确。AWS Glue 数据目录允许您组织和跟踪数据集的元数据，从而更轻松地识别机器学习管道中使用的数据的来源和结构。 D、正确。 SageMaker Lineage Tracking 明确设计用于跟踪数据集、转换和模型之间的依赖关系，确保透明度和可追溯性。 E、不正确。训练脚本注释不足以全面跟踪数据起源和转换，因为它们没有与管理沿袭和元数据的工具进行结构化或集成。

---

## Question 206  `#206`

**EN** A data scientist is building a machine learning model using Amazon SageMaker and wants to ensure the origins of the training data are well-documented for future auditing and reproducibility. Which of the following AWS services or features should the data scientist use to achieve this?

**中** 一位数据科学家正在使用 Amazon SageMaker 构建机器学习模型，并希望确保训练数据的来源有详细记录，以便将来进行审核和再现。数据科学家应该使用以下哪些 AWS 服务或功能来实现这一目标？

- **A.** SageMaker Model Cards
  - SageMaker 模型卡
- **B.** AWS Glue Data Catalog
  - AWS Glue 数据目录
- **C.** Amazon CloudWatch Logs
  - Amazon CloudWatch 日志
- **D.** SageMaker Feature Store
  - SageMaker Feature Store
- **E.** AWS Cost Explorer
  - AWS Cost Explorer

**正确答案 / Answer: `A,B,D`**

To ensure data origins are well-documented, tools like SageMaker Model Cards, AWS Glue Data Catalog, and SageMaker Feature Store provide capabilities for tracking data lineage and organizing metadata. These tools are specifically designed to enhance transparency and reproducibility in machine learning workflows. CloudWatch Logs and AWS Cost Explorer do not serve this purpose.
A. Correct. SageMaker Model Cards are used to document critical details about machine learning models, including data origins, training processes, and performance metrics, which are vital for transparency and compliance.
B. Correct. AWS Glue Data Catalog provides a centralized metadata repository for datasets, making it easier to track and document data origins and lineage.
C. Incorrect. Amazon CloudWatch Logs is designed for monitoring and logging system activities but does not provide functionality for tracking data origins or documenting data lineage.
D. Correct. SageMaker Feature Store helps manage and store features used in machine learning models and can track the lineage of these features, contributing to data origin documentation.
E. Incorrect. AWS Cost Explorer focuses on cost management and billing insights and is unrelated to documenting data origins or lineage.

为了确保数据来源有完整的记录，SageMaker 模型卡、AWS Glue 数据目录和 SageMaker Feature Store 等工具提供了跟踪数据沿袭和组织元数据的功能。这些工具经过专门设计，旨在提高机器学习工作流程的透明度和可重复性。 CloudWatch Logs 和 AWS Cost Explorer 不用于此目的。答：正确。 SageMaker 模型卡用于记录有关机器学习模型的关键细节，包括数据来源、训练过程和性能指标，这对于透明度和合规性至关重要。 B、正确。 AWS Glue 数据目录为数据集提供了集中的元数据存储库，使跟踪和记录数据来源和沿袭变得更加容易。 C、不正确。 Amazon CloudWatch 日志旨在监视和记录系统活动，但不提供跟踪数据来源或记录数据沿袭的功能。 D、正确。SageMaker Feature Store 帮助管理和存储机器学习模型中使用的特征，并可以跟踪这些特征的沿袭，从而有助于数据源文档。 E、不正确。 AWS Cost Explorer 专注于成本管理和计费洞察，与记录数据来源或沿袭无关。

---

## Question 207  `#207`

**EN** A data engineering team is designing a pipeline to process sensitive customer information such as Personally Identifiable Information (PII). Which of the following are best practices to ensure secure data engineering in this scenario?

**中** 数据工程团队正在设计一个管道来处理敏感的客户信息，例如个人身份信息 (PII)。以下哪些是在这种情况下确保数据工程安全的最佳实践？

- **A.** Encrypt sensitive data both in transit and at rest using AWS Key Management Service (KMS).
  - 使用 AWS Key Management Service (KMS) 加密传输中和静态的敏感数据。
- **B.** Grant full administrative access to all team members to ensure smooth collaboration.
  - 向所有团队成员授予完全管理权限，以确保协作顺利。
- **C.** Implement fine-grained access control using AWS Identity and Access Management (IAM) policies.
  - 使用 AWS Identity and Access Management (IAM) 策略实施细粒度的访问控制。
- **D.** Regularly assess and validate the quality of incoming data to prevent data corruption.
  - 定期评估和验证传入数据的质量，以防止数据损坏。
- **E.** Store unencrypted PII data in Amazon S3 for faster data retrieval.
  - 将未加密的 PII 数据存储在 Amazon S3 中，以便更快地检索数据。

**正确答案 / Answer: `A,C,D`**

To ensure secure data engineering, sensitive data must be encrypted both in transit and at rest, and access should be controlled through fine-grained IAM policies to minimize unauthorized access. Additionally, assessing data quality is essential for maintaining data integrity. Avoid practices like storing unencrypted sensitive data or granting excessive privileges, as they pose significant security risks.
A. Correct. Encryption is a critical best practice to ensure the confidentiality of sensitive data such as PII. AWS KMS can help manage encryption keys securely.
B. Incorrect. Granting full administrative access to all team members violates the principle of least privilege, increasing security risks.
C. Correct. Fine-grained access control through IAM policies ensures that only authorized users can access or modify sensitive data.
D. Correct. Assessing and validating data quality helps maintain data integrity and prevents issues caused by corrupted or invalid data.
E. Incorrect. Storing unencrypted PII data is not a secure practice and violates data privacy and compliance requirements.

为了确保安全的数据工程，敏感数据必须在传输过程中和静态时进行加密，并且应通过细粒度的 IAM 策略控制访问，以最大限度地减少未经授权的访问。此外，评估数据质量对于维护数据完整性至关重要。避免存储未加密的敏感数据或授予过多权限等做法，因为它们会带来重大的安全风险。答：正确。加密是确保 PII 等敏感数据机密性的关键最佳实践。 AWS KMS 可以帮助安全地管理加密密钥。 B、不正确。向所有团队成员授予完全管理访问权限违反了最小特权原则，从而增加了安全风险。 C、正确。通过 IAM 策略进行细粒度的访问控制，确保只有授权用户才能访问或修改敏感数据。 D、正确。评估和验证数据质量有助于维护数据完整性并防止由损坏或无效数据引起的问题。 E.不正确。存储未加密的 PII 数据不是一种安全做法，并且违反了数据隐私和合规性要求。

---

## Question 208  `#208`

**EN** As a machine learning engineer, you are designing a data pipeline for a financial institution to process sensitive customer data. Which of the following actions should you take to ensure secure data engineering practices?

**中** 作为机器学习工程师，您正在为金融机构设计数据管道来处理敏感的客户数据。您应该采取以下哪些措施来确保数据工程实践的安全？

- **A.** Implement encryption for data at rest and in transit.
  - 对静态和传输中的数据实施加密。
- **B.** Grant all users in the organization full access to the data for flexibility.
  - 授予组织中的所有用户对数据的完全访问权限，以实现灵活性。
- **C.** Use AWS Identity and Access Management (IAM) policies to enforce least privilege access.
  - 使用 AWS Identity and Access Management (IAM) 策略强制实施最低权限访问。
- **D.** Regularly monitor and audit data access logs.
  - 定期监控和审核数据访问日志。
- **E.** Disable data validation checks to speed up processing.
  - 禁用数据验证检查以加快处理速度。
- **F.** Utilize privacy-enhancing technologies like differential privacy for sensitive data.
  - 利用敏感数据的差分隐私等隐私增强技术。

**正确答案 / Answer: `A,C,D,F`**

The best practices for secure data engineering include implementing encryption, enforcing least privilege access through IAM policies, monitoring and auditing access logs, and using privacy-enhancing technologies. These practices ensure data confidentiality, integrity, and quality while minimizing risks associated with unauthorized access or data misuse.
A. Correct. Implementing encryption for data at rest and in transit is a critical security best practice to protect sensitive data from unauthorized access during storage or transmission.
B. Incorrect. Granting all users full access violates the principle of least privilege and increases the risk of data breaches or misuse.
C. Correct. Using IAM policies to enforce least privilege ensures that users and services only have access to the resources they absolutely need, which enhances security.
D. Correct. Regularly monitoring and auditing data access logs helps detect unauthorized access or suspicious activity, reinforcing data security.
E. Incorrect. Disabling data validation checks is not advisable as it compromises data quality and integrity, which are essential for secure and accurate data engineering.
F. Correct. Privacy-enhancing technologies like differential privacy add an additional layer of protection for sensitive data by minimizing the risk of exposing individual data points.

安全数据工程的最佳实践包括实施加密、通过 IAM 策略强制执行最低权限访问、监控和审核访问日志以及使用隐私增强技术。这些做法可确保数据的机密性、完整性和质量，同时最大限度地降低与未经授权的访问或数据滥用相关的风险。答：正确。对静态和传输中的数据实施加密是一项关键的安全最佳实践，可保护敏感数据在存储或传输过程中免受未经授权的访问。 B、不正确。授予所有用户完全访问权限违反了最小权限原则，并增加了数据泄露或滥用的风险。 C、正确。使用 IAM 策略强制执行最低权限可确保用户和服务只能访问他们绝对需要的资源，从而增强安全性。 D、正确。定期监控和审核数据访问日志有助于检测未经授权的访问或可疑活动，从而增强数据安全。E、不正确。禁用数据验证检查是不可取的，因为它会损害数据质量和完整性，而这对于安全和准确的数据工程至关重要。 F. 正确。差异隐私等隐私增强技术通过最大限度地降低暴露单个数据点的风险，为敏感数据增加了一层额外的保护。

---

## Question 209  `#209`

**EN** A data engineering team is building a pipeline to process sensitive customer data in AWS. The team wants to ensure secure data engineering by protecting data privacy, maintaining data integrity, and controlling access. Which of the following practices should they implement?

**中** 数据工程团队正在构建一个管道来处理 AWS 中的敏感客户数据。该团队希望通过保护数据隐私、维护数据完整性和控制访问来确保数据工程的安全。他们应该实施以下哪些做法？

- **A.** Use AWS Key Management Service (KMS) to encrypt sensitive data at rest and in transit.
  - 使用 AWS Key Management Service (KMS) 对静态和传输中的敏感数据进行加密。
- **B.** Grant full administrative access to all users to simplify data access.
  - 向所有用户授予完全管理访问权限以简化数据访问。
- **C.** Implement AWS Lake Formation to define fine-grained access control policies for data stored in Amazon S3.
  - 实施 AWS Lake Formation 来为 Amazon S3 中存储的数据定义细粒度的访问控制策略。
- **D.** Use Amazon Macie to identify and protect sensitive data like personally identifiable information (PII).
  - 使用 Amazon Macie 识别和保护敏感数据，例如个人身份信息 (PII)。
- **E.** Disable logging to avoid unnecessary storage of access logs.
  - 禁用日志记录以避免不必要的访问日志存储。

**正确答案 / Answer: `A,C,D`**

To achieve secure data engineering, it is essential to implement encryption (AWS KMS) to protect data at rest and in transit, use fine-grained access controls (AWS Lake Formation) to restrict unauthorized access, and leverage tools like Amazon Macie to identify and secure sensitive data. These practices align with best practices for data privacy, integrity, and access control. Avoid actions that compromise visibility or provide excessive access, such as disabling logging or granting full administrative permissions.
A. Correct. This is correct. AWS Key Management Service (KMS) provides encryption capabilities to protect sensitive data both at rest and in transit, which is a critical component of secure data engineering.
B. Incorrect. This is incorrect. Granting full administrative access to all users violates the principle of least privilege and increases the risk of unauthorized access.
C. Correct. This is correct. AWS Lake Formation supports fine-grained access controls, ensuring only authorized users and roles can access specific data, enhancing security and compliance.
D. Correct. This is correct. Amazon Macie is a data security service designed to identify, classify, and protect sensitive data, like PII, which is essential for protecting data privacy.
E. Incorrect. This is incorrect. Disabling logging undermines security by removing the ability to monitor access and detect unauthorized activities.

为了实现安全的数据工程，必须实施加密 (AWS KMS) 来保护静态和传输中的数据，使用细粒度访问控制 (AWS Lake Formation) 来限制未经授权的访问，并利用 Amazon Macie 等工具来识别和保护敏感数据。这些实践与数据隐私、完整性和访问控制的最佳实践相一致。避免损害可见性或提供过多访问权限的操作，例如禁用日志记录或授予完全管理权限。答：正确。这是正确的。 AWS Key Management Service (KMS) 提供加密功能来保护静态和传输中的敏感数据，这是安全数据工程的关键组成部分。 B、不正确。这是不正确的。向所有用户授予完全管理访问权限违反了最小权限原则，并增加了未经授权访问的风险。 C、正确。这是正确的。AWS Lake Formation 支持细粒度的访问控制，确保只有授权的用户和角色才能访问特定数据，从而增强安全性和合规性。 D、正确。这是正确的。 Amazon Macie 是一种数据安全服务，旨在识别、分类和保护敏感数据，就像 PII 一样，这对于保护数据隐私至关重要。 E、不正确。这是不正确的。禁用日志记录会消除监视访问和检测未经授权的活动的能力，从而破坏安全性。

---

## Question 210  `#210`

**EN** You are designing an AI system that processes sensitive customer data, including financial transactions and personal identifiable information (PII). Which of the following measures should you implement to ensure the security and privacy of the data handled by your AI system?

**中** 您正在设计一个人工智能系统，用于处理敏感的客户数据，包括金融交易和个人身份信息 (PII)。您应该采取以下哪些措施来确保人工智能系统处理的数据的安全性和隐私性？

- **A.** Enable encryption for data both at rest and in transit.
  - 对静态和传输中的数据启用加密。
- **B.** Use role-based access control (RBAC) to restrict access to sensitive data.
  - 使用基于角色的访问控制 (RBAC) 来限制对敏感数据的访问。
- **C.** Disable logging of all API activity to reduce storage costs.
  - 禁用所有 API 活动的日志记录以降低存储成本。
- **D.** Implement network-level protections such as AWS WAF to guard against external threats.
  - 实施 AWS WAF 等网络级防护，防范外部威胁。
- **E.** Train the AI model using unencrypted raw customer data for better performance.
  - 使用未加密的原始客户数据训练 AI 模型，以获得更好的性能。

**正确答案 / Answer: `A,B,D`**

To secure AI systems that handle sensitive customer data, AWS recommends using encryption to protect data at rest and in transit, implementing access controls such as RBAC to limit data access, and protecting infrastructure with network-level security measures like AWS WAF. These practices align with AWS security best practices and help mitigate risks associated with unauthorized access or external threats.
A. Correct. Encryption at rest and in transit protects sensitive data from unauthorized access and ensures compliance with various security standards.
B. Correct. Role-based access control ensures only authorized users or systems can access sensitive data, reducing the risk of unauthorized access.
C. Incorrect. Disabling logging of API activity eliminates critical audit trails, making it harder to detect and investigate security incidents.
D. Correct. Network-level protections such as AWS WAF can help prevent external threats, including SQL injection and cross-site scripting attacks, from compromising your AI system.
E. Incorrect. Training the AI model on unencrypted raw customer data exposes the data to potential breaches and does not align with best security practices.

为了保护处理敏感客户数据的 AI 系统的安全，AWS 建议使用加密来保护静态和传输中的数据，实施 RBAC 等访问控制来限制数据访问，并使用 AWS WAF 等网络级安全措施保护基础设施。这些实践与 AWS 安全最佳实践相一致，有助于降低与未经授权的访问或外部威胁相关的风险。答：正确。静态和传输中的加密可保护敏感数据免遭未经授权的访问，并确保符合各种安全标准。 B、正确。基于角色的访问控制确保只有授权用户或系统才能访问敏感数据，从而降低未经授权访问的风险。 C、不正确。禁用 API 活动的日志记录会消除关键的审计跟踪，从而使检测和调查安全事件变得更加困难。 D、正确。AWS WAF 等网络级保护可以帮助防止外部威胁（包括 SQL 注入和跨站点脚本攻击）损害您的 AI 系统。 E、不正确。在未加密的原始客户数据上训练人工智能模型会使数据面临潜在的泄露，并且不符合最佳安全实践。

---

## Question 211  `#211`

**EN** A financial services company is deploying an AI-based recommendation system on AWS to provide personalized investment suggestions to its customers. Due to the sensitive nature of the data, the company is concerned about securing customer data and preventing unauthorized access or malicious activity. Which of the following actions should the company take to address these security and privacy concerns? (Select TWO.)

**中** 一家金融服务公司正在 AWS 上部署基于 AI 的推荐系统，为客户提供个性化的投资建议。由于数据的敏感性，该公司非常关注保护客户数据并防止未经授权的访问或恶意活动。公司应采取以下哪些行动来解决这些安全和隐私问题？ （选择两项。）

- **A.** Use Amazon S3 with default bucket settings to store customer data.
  - 使用具有默认存储桶设置的 Amazon S3 来存储客户数据。
- **B.** Enable encryption both at rest and in transit for all customer data.
  - 对所有客户数据启用静态和传输中的加密。
- **C.** Implement AWS Identity and Access Management (IAM) roles to control access to the AI system.
  - 实施 AWS Identity and Access Management (IAM) 角色来控制对 AI 系统的访问。
- **D.** Disable logging to reduce the risk of exposing sensitive operational details.
  - 禁用日志记录以降低暴露敏感操作细节的风险。
- **E.** Use AWS Key Management Service (KMS) to manage encryption keys securely.
  - 使用 AWS Key Management Service (KMS) 安全地管理加密密钥。

**正确答案 / Answer: `B,E`**

To secure sensitive data for an AI-based system, encryption (at rest and in transit) and secure key management are critical. AWS KMS ensures encryption keys are handled securely, while enabling encryption protects data from unauthorized access. IAM roles and logging are also important but are not specifically related to encryption or key management in this scenario.
A. Incorrect. Default bucket settings in Amazon S3 may not enforce encryption or access controls, which could lead to unauthorized access. It is important to customize these settings for security.
B. Correct. Encrypting data both at rest and in transit ensures that customer data remains protected from unauthorized access, even if intercepted or accessed maliciously.
C. Incorrect. While IAM roles are essential for access control, they alone do not address encryption or secure key management, which are critical for sensitive data protection.
D. Incorrect. Disabling logging is not a security best practice. Logging is essential for threat detection, auditing, and identifying suspicious activity.
E. Correct. AWS KMS provides a secure and managed way to handle encryption keys, ensuring that sensitive data encryption and decryption processes are protected.

为了保护基于人工智能的系统的敏感数据，加密（静态和传输中）和安全密钥管理至关重要。 AWS KMS 确保加密密钥得到安全处理，同时启用加密可保护数据免遭未经授权的访问。 IAM 角色和日志记录也很重要，但与此场景中的加密或密钥管理没有特定关系。 A. 不正确。 Amazon S3 中的默认存储桶设置可能不会强制执行加密或访问控制，这可能会导致未经授权的访问。为了安全起见，自定义这些设置非常重要。 B、正确。对静态和传输中的数据进行加密可确保客户数据免受未经授权的访问，即使被拦截或恶意访问也是如此。 C、不正确。虽然 IAM 角色对于访问控制至关重要，但它们本身并不能解决加密或安全密钥管理问题，而这对于敏感数据保护至关重要。 D、不正确。禁用日志记录并不是安全最佳实践。日志记录对于威胁检测、审核和识别可疑活动至关重要。 E、正确。 AWS KMS 提供了一种安全且托管的方式来处理加密密钥，确保敏感数据加密和解密过程受到保护。

---

## Question 212  `#212`

**EN** You are designing an AI system to process sensitive financial data. To ensure the security and privacy of this system, which of the following measures should you implement? (Select TWO)

**中** 您正在设计一个人工智能系统来处理敏感的财务数据。为了确保该系统的安全和隐私，您应该采取以下哪些措施？ （选择两项）

- **A.** Encrypt data both at rest and in transit using AWS Key Management Service (KMS).
  - 使用 AWS Key Management Service (KMS) 加密静态和传输中的数据。
- **B.** Use an open-source library for encryption without verifying its security standards.
  - 使用开源库进行加密，而不验证其安全标准。
- **C.** Implement IAM policies to restrict access to the AI system based on user roles.
  - 实施 IAM 策略，根据用户角色限制对 AI 系统的访问。
- **D.** Disable logging to prevent sensitive data from being recorded in CloudWatch.
  - 禁用日志记录以防止敏感数据记录在 CloudWatch 中。
- **E.** Enable Amazon Macie to detect and protect sensitive data stored in S3 buckets.
  - 启用 Amazon Macie 来检测和保护 S3 存储桶中存储的敏感数据。

**正确答案 / Answer: `A,C`**

To ensure the security and privacy of an AI system handling sensitive financial data, implementing encryption for data at rest and in transit (using AWS KMS) and enforcing access control through IAM policies are critical measures. These practices safeguard data from unauthorized access and maintain compliance with security standards. While tools like Amazon Macie are helpful, they are additional layers of protection, not core requirements for data security.
A. Correct. Encrypting data at rest and in transit ensures that sensitive information is protected from unauthorized access during storage and transmission. AWS KMS provides a secure mechanism for encryption management.
B. Incorrect. Using open-source libraries without verifying their security standards can introduce vulnerabilities into the system and compromise sensitive data.
C. Correct. Implementing IAM (Identity and Access Management) policies allows fine-grained control over access to the AI system, ensuring that only authorized users or services can interact with it.
D. Incorrect. Disabling logging is not a recommended practice. Instead, sensitive data should be redacted or encrypted in logs to maintain observability while protecting privacy.
E. Incorrect. Amazon Macie is a useful tool for detecting sensitive data, but it complements, rather than replaces, encryption and IAM policies. While valuable, it is not sufficient as a standalone measure for securing an AI system.

为了确保处理敏感金融数据的 AI 系统的安全性和隐私性，对静态和传输中的数据实施加密（使用 AWS KMS）并通过 IAM 策略实施访问控制是关键措施。这些做法可保护数据免遭未经授权的访问并保持符合安全标准。虽然 Amazon Macie 等工具很有帮助，但它们是额外的保护层，而不是数据安全的核心要求。答：正确。对静态和传输中的数据进行加密可确保敏感信息在存储和传输过程中免受未经授权的访问。 AWS KMS 提供安全的加密管理机制。 B、不正确。在没有验证其安全标准的情况下使用开源库可能会给系统带来漏洞并危及敏感数据。 C、正确。实施 IAM（身份和访问管理）策略可以对人工智能系统的访问进行细粒度控制，确保只有授权的用户或服务才能与其交互。 D、不正确。不建议禁用日志记录。相反，敏感数据应该在日志中进行编辑或加密，以在保护隐私的同时保持可观察性。 E、不正确。 Amazon Macie 是检测敏感数据的有用工具，但它补充而不是取代加密和 IAM 策略。虽然很有价值，但它不足以作为保护人工智能系统的独立措施。

---

## Question 213  `#213`

**EN** Your company is deploying a machine learning application that processes healthcare data for clinical predictions. As the AI practitioner, you must ensure the system is compliant with governance and regulatory requirements. Which of the following actions should you take to meet compliance standards for handling sensitive healthcare data?

**中** 您的公司正在部署一个机器学习应用程序，用于处理医疗数据以进行临床预测。作为人工智能从业者，您必须确保系统符合治理和监管要求。您应该采取以下哪些操作来满足处理敏感医疗保健数据的合规性标准？

- **A.** Ensure the AI system complies with HIPAA regulations for data confidentiality and security.
  - 确保 AI 系统符合 HIPAA 数据保密性和安全性规定。
- **B.** Enable encryption for data at rest and in transit to protect sensitive information.
  - 对静态和传输中的数据启用加密以保护敏感信息。
- **C.** Only use open-source datasets without reviewing their licensing and data privacy agreements.
  - 仅使用开源数据集，而不审查其许可和数据隐私协议。
- **D.** Implement audit logs to track access and modifications to healthcare data.
  - 实施审计日志来跟踪医疗保健数据的访问和修改。
- **E.** Avoid consulting legal experts, as AWS compliance services will automatically ensure regulatory adherence.
  - 避免咨询法律专家，因为 AWS 合规服务将自动确保遵守法规。

**正确答案 / Answer: `A,B,D`**

To ensure compliance with governance and regulatory standards for processing healthcare data, it is essential to follow industry-specific regulations like HIPAA, implement strong security measures such as encryption, and maintain transparency with audit logs. Ignoring licensing agreements or avoiding legal consultations can lead to non-compliance and legal risks. AWS tools assist with compliance but do not replace an organization's obligation to adhere to regulations.
A. Correct. Ensuring compliance with HIPAA regulations is critical when working with sensitive healthcare data, as it governs the security and privacy of patient information.
B. Correct. Encryption for data at rest and in transit is a best practice for securing sensitive information and is often a requirement under healthcare compliance standards.
C. Incorrect. Using open-source datasets without reviewing licensing and privacy agreements can lead to regulatory violations if the data is not authorized for your use case.
D. Correct. Implementing audit logs is essential for tracking data access and modifications, which supports transparency and compliance with healthcare-related regulations.
E. Incorrect. Avoiding consultation with legal experts is not advisable. AWS services provide compliance tools, but responsibility for regulatory adherence ultimately lies with the organization.

为了确保遵守处理医疗保健数据的治理和监管标准，必须遵循 HIPAA 等行业特定法规，实施加密等强大的安全措施，并保持审计日志的透明度。忽视许可协议或回避法律咨询可能会导致不合规和法律风险。 AWS 工具有助于合规性，但不能取代组织遵守法规的义务。答：正确。在处理敏感医疗数据时，确保遵守 HIPAA 法规至关重要，因为它管理着患者信息的安全和隐私。 B、正确。对静态和传输中的数据进行加密是保护敏感信息的最佳实践，并且通常是医疗保健合规标准的要求。 C、不正确。如果数据未经您的用例授权，则在未审查许可和隐私协议的情况下使用开源数据集可能会导致违反监管规定。 D、正确。实施审计日志对于跟踪数据访问和修改至关重要，这有助于提高透明度并遵守医疗保健相关法规。 E、不正确。避免咨询法律专家是不可取的。 AWS 服务提供合规性工具，但遵守法规的责任最终取决于组织。

---

## Question 214  `#214`

**EN** A healthcare organization is planning to deploy an AI model on AWS to analyze patient data and provide diagnostic recommendations. The organization must ensure compliance with industry regulations like HIPAA and maintain proper governance. Which of the following actions should the organization take to meet governance and compliance requirements?

**中** 一家医疗保健组织计划在 AWS 上部署 AI 模型来分析患者数据并提供诊断建议。组织必须确保遵守 HIPAA 等行业法规并维持适当的治理。组织应采取以下哪些行动来满足治理和合规性要求？

- **A.** Enable AWS CloudTrail to log all API activity related to the AI system.
  - 启用 AWS CloudTrail 来记录与 AI 系统相关的所有 API 活动。
- **B.** Use Amazon SageMaker Model Registry for version control and traceability of deployed AI models.
  - 使用 Amazon SageMaker 模型注册表对已部署的 AI 模型进行版本控制和可追溯性。
- **C.** Encrypt all patient data at rest and in transit using AWS Key Management Service (KMS).
  - 使用 AWS Key Management Service (KMS) 加密所有静态和传输中的患者数据。
- **D.** Rely solely on AWS services' built-in compliance certifications without conducting internal audits.
  - 仅依赖 AWS 服务的内置合规性认证，无需进行内部审计。
- **E.** Implement identity and access management (IAM) policies to restrict access to patient data based on roles.
  - 实施身份和访问管理 (IAM) 策略，根据角色限制对患者数据的访问。

**正确答案 / Answer: `A,B,C,E`**

To ensure compliance with governance and regulatory requirements such as HIPAA in a healthcare context, organizations must implement robust practices for security, traceability, and access management. This includes enabling logging and monitoring, managing model versions, encrypting sensitive data, and enforcing access controls. Relying solely on AWS's built-in compliance certifications is insufficient because compliance is a shared responsibility between AWS and the customer.
A. Correct. Enabling AWS CloudTrail helps log and monitor API activity, ensuring accountability and traceability, which are crucial for governance and compliance.
B. Correct. Amazon SageMaker Model Registry enables version control and traceability for AI models, which is important for governance and auditing purposes.
C. Correct. Encrypting patient data at rest and in transit using AWS Key Management Service (KMS) ensures compliance with regulations like HIPAA that require secure handling of sensitive data.
D. Incorrect. Relying solely on AWS's built-in compliance certifications is not sufficient. Organizations are responsible for their own compliance and must conduct their internal audits and processes.
E. Correct. Implementing IAM policies to restrict access based on roles is a key governance practice to ensure only authorized individuals can access sensitive data.

为了确保遵守医疗保健环境中的 HIPAA 等治理和监管要求，组织必须实施稳健的安全性、可追溯性和访问管理实践。这包括启用日志记录和监控、管理模型版本、加密敏感数据以及实施访问控制。仅仅依靠 AWS 的内置合规性认证是不够的，因为合规性是 AWS 和客户之间的共同责任。答：正确。启用 AWS CloudTrail 有助于记录和监控 API 活动，确保问责制和可追溯性，这对于治理和合规性至关重要。 B、正确。 Amazon SageMaker 模型注册表支持 AI 模型的版本控制和可追溯性，这对于治理和审计目的非常重要。 C、正确。使用 AWS Key Management Service (KMS) 对静态和传输中的患者数据进行加密，确保符合 HIPAA 等要求安全处理敏感数据的法规。 D、不正确。仅仅依靠 AWS 的内置合规性认证是不够的。组织对其自身的合规性负责，并且必须进行内部审核和流程。 E、正确。实施 IAM 策略以根据角色限制访问是确保只有授权个人才能访问敏感数据的关键治理实践。

---

## Question 215  `#215`

**EN** A financial institution is deploying an AI-based credit risk assessment model on AWS. The institution must ensure compliance with governance and regulatory requirements, such as ensuring explainability of model predictions and maintaining data privacy. Which actions should the institution take to meet these requirements on AWS?

**中** 一家金融机构正在 AWS 上部署基于 AI 的信用风险评估模型。该机构必须确保遵守治理和监管要求，例如确保模型预测的可解释性和维护数据隐私。机构应采取哪些行动来满足 AWS 上的这些要求？

- **A.** Use Amazon SageMaker Clarify to evaluate the explainability of the AI model's predictions.
  - 使用 Amazon SageMaker Clarify 评估 AI 模型预测的可解释性。
- **B.** Ensure that sensitive customer data is encrypted at rest using AWS Key Management Service (AWS KMS).
  - 确保使用 AWS Key Management Service (AWS KMS) 对敏感客户数据进行静态加密。
- **C.** Use Amazon Rekognition to validate the fairness of the AI model by analyzing customer demographics.
  - 使用 Amazon Rekognition 通过分析客户人口统计数据来验证 AI 模型的公平性。
- **D.** Document the AI model's training data sources and ensure it complies with regulations such as GDPR or CCPA.
  - 记录 AI 模型的训练数据源，并确保其符合 GDPR 或 CCPA 等法规。
- **E.** Enable AWS CloudTrail to track API activity and ensure auditability of the AI system's operations.
  - 使 AWS CloudTrail 能够跟踪 API 活动并确保 AI 系统操作的可审核性。

**正确答案 / Answer: `A,B,D,E`**

To ensure compliance with governance and regulatory requirements for AI systems, organizations must take actions such as ensuring model explainability, encrypting sensitive data, documenting data sources for regulatory compliance, and enabling auditability through tools like AWS CloudTrail. These actions align with best practices for responsible AI development and deployment on AWS, ensuring adherence to regulations like GDPR or industry-specific compliance requirements.
A. Correct. Amazon SageMaker Clarify provides tools to evaluate and improve the explainability of AI models, which is a key governance requirement for many regulations.
B. Correct. Encrypting sensitive customer data at rest using AWS Key Management Service (AWS KMS) is a critical step in ensuring data privacy and meeting compliance standards.
C. Incorrect. Amazon Rekognition is not designed for evaluating fairness or compliance of AI models. It is primarily used for image and video analysis tasks.
D. Correct. Documenting training data sources and ensuring compliance with regulations such as GDPR or CCPA is a fundamental step in adhering to governance and compliance standards.
E. Correct. Enabling AWS CloudTrail allows for tracking and auditing API activity, which is critical for maintaining compliance and ensuring the system is auditable.

为了确保符合人工智能系统的治理和监管要求，组织必须采取措施，例如确保模型的可解释性、加密敏感数据、记录数据源以确保合规性，以及通过 AWS CloudTrail 等工具实现可审计性。这些行动符合 AWS 上负责任的 AI 开发和部署的最佳实践，确保遵守 GDPR 等法规或行业特定的合规性要求。答：正确。 Amazon SageMaker Clarify 提供了评估和提高 AI 模型可解释性的工具，这是许多法规的关键治理要求。 B、正确。使用 AWS Key Management Service (AWS KMS) 加密静态客户数据是确保数据隐私和满足合规性标准的关键一步。 C、不正确。 Amazon Rekognition 不是为评估 AI 模型的公平性或合规性而设计的。它主要用于图像和视频分析任务。 D、正确。记录培训数据源并确保遵守 GDPR 或 CCPA 等法规是遵守治理和合规标准的基本步骤。 E、正确。启用 AWS CloudTrail 可以跟踪和审核 API 活动，这对于保持合规性并确保系统可审核至关重要。

---

## Question 216  `#216`

**EN** A company is developing an AI-powered recommendation system for its e-commerce platform. The system processes user data, including location and purchase history, to personalize recommendations. The company wants to ensure its AI system adheres to regulatory compliance standards for data privacy and algorithm accountability. Which of the following standards or laws should the company consider to remain compliant?

**中** 一家公司正在为其电子商务平台开发人工智能驱动的推荐系统。该系统处理用户数据，包括位置和购买历史记录，以提供个性化推荐。该公司希望确保其人工智能系统遵守数据隐私和算法责任的监管合规标准。公司应考虑保持遵守以下哪些标准或法律？

- **A.** International Organization for Standardization (ISO) 27001
  - 国际标准化组织 (ISO) 27001
- **B.** System and Organization Controls (SOC) 2
  - 系统和组织控制 (SOC) 2
- **C.** General Data Protection Regulation (GDPR)
  - 一般数据保护条例 (GDPR)
- **D.** Federal Risk and Authorization Management Program (FedRAMP)
  - 联邦风险和授权管理计划 (FedRAMP)
- **E.** Algorithmic Accountability Act (AAA)
  - 算法责任法案 (AAA)

**正确答案 / Answer: `A,B,C,E`**

To ensure regulatory compliance, the company should consider ISO 27001 for information security, SOC 2 for secure handling of sensitive data, GDPR for user data protection in the EU, and the Algorithmic Accountability Act for algorithmic transparency and accountability. FedRAMP, while relevant to cloud services, is specific to U.S. federal agencies and does not apply in this scenario.
A. Correct. ISO 27001 is an international standard for information security management, which is critical for protecting user data processed by AI systems.
B. Correct. SOC 2 is a compliance framework that ensures systems are designed to manage data securely, relevant to any service processing sensitive information.
C. Correct. GDPR is a European Union regulation that sets strict requirements for user data protection and is directly applicable to AI systems processing personal data.
D. Incorrect. FedRAMP is specific to cloud services used by U.S. federal agencies. While important, it is not directly applicable to general AI systems used by e-commerce platforms.
E. Correct. The Algorithmic Accountability Act (AAA) is a U.S. law proposal to ensure transparency and accountability in AI systems, which is relevant to an AI-powered recommendation system.

为了确保合规性，公司应考虑用于信息安全的 ISO 27001、用于安全处理敏感数据的 SOC 2、用于欧盟用户数据保护的 GDPR 以及用于算法透明度和问责制的算法问责法案。 FedRAMP 虽然与云服务相关，但特定于美国联邦机构，不适用于这种情况。答：正确。 ISO 27001 是信息安全管理的国际标准，对于保护人工智能系统处理的用户数据至关重要。 B、正确。 SOC 2 是一个合规性框架，可确保系统设计为安全地管理与处理敏感信息的任何服务相关的数据。 C、正确。 GDPR 是一项欧盟法规，对用户数据保护提出了严格要求，直接适用于处理个人数据的人工智能系统。 D、不正确。 FedRAMP 特定于美国联邦机构使用的云服务。虽然很重要，但它并不直接适用于电子商务平台使用的通用人工智能系统。 E、正确。 《算法问责法案》（AAA）是一项美国法律提案，旨在确保人工智能系统的透明度和问责制，这与人工智能驱动的推荐系统相关。

---

## Question 217  `#217`

**EN** A healthcare organization is deploying an AI-driven system to analyze patient data while ensuring compliance with international and industry standards. Which of the following regulatory compliance standards or frameworks would be most relevant for ensuring the system meets legal and ethical requirements?

**中** 一家医疗保健组织正在部署人工智能驱动的系统来分析患者数据，同时确保符合国际和行业标准。以下哪项监管合规标准或框架与确保系统满足法律和道德要求最相关？

- **A.** International Organization for Standardization (ISO) 27001
  - 国际标准化组织 (ISO) 27001
- **B.** Health Insurance Portability and Accountability Act (HIPAA)
  - 健康保险流通和责任法案 (HIPAA)
- **C.** System and Organization Controls (SOC) 2
  - 系统和组织控制 (SOC) 2
- **D.** General Data Protection Regulation (GDPR)
  - 一般数据保护条例 (GDPR)
- **E.** PCI Data Security Standard (PCI DSS)
  - PCI 数据安全标准 (PCI DSS)

**正确答案 / Answer: `A,B,C,D`**

Deploying an AI system in the healthcare industry requires compliance with multiple regulatory standards to ensure data privacy, security, and ethical use. ISO 27001, HIPAA, SOC 2, and GDPR are all relevant frameworks that address different aspects of securing sensitive information and maintaining accountability. PCI DSS, however, is specific to payment card security and does not apply to the healthcare use case described.
A. Correct. ISO 27001 is an international standard for information security management systems (ISMS), which is relevant for ensuring data security in AI systems handling sensitive information.
B. Correct. HIPAA is critical in the healthcare industry as it governs the privacy and security of protected health information (PHI), making it essential for the AI system processing patient data.
C. Correct. SOC 2 focuses on data security, availability, processing integrity, confidentiality, and privacy, ensuring that the AI system complies with industry best practices for data handling.
D. Correct. GDPR ensures compliance with data protection and privacy standards for individuals in the European Union, which is particularly important if the AI system processes personal data of EU citizens.
E. Incorrect. PCI DSS is specific to payment card data security and is not directly relevant to a healthcare AI system analyzing patient data.

在医疗保健行业部署人工智能系统需要遵守多项监管标准，以确保数据隐私、安全和道德使用。 ISO 27001、HIPAA、SOC 2 和 GDPR 都是相关框架，可解决保护敏感信息和维护问责制的不同方面。然而，PCI DSS 特定于支付卡安全，不适用于所述的医疗保健用例。答：正确。 ISO 27001 是信息安全管理系统 (ISMS) 的国际标准，与确保处理敏感信息的人工智能系统中的数据安全相关。 B、正确。 HIPAA 在医疗保健行业至关重要，因为它管理受保护的健康信息 (PHI) 的隐私和安全，这对于处理患者数据的 AI 系统至关重要。 C、正确。SOC 2 专注于数据安全性、可用性、处理完整性、机密性和隐私，确保 AI 系统符合数据处理的行业最佳实践。 D、正确。 GDPR 确保遵守欧盟个人的数据保护和隐私标准，如果人工智能系统处理欧盟公民的个人数据，这一点尤其重要。 E、不正确。 PCI DSS 专门针对支付卡数据安全，与分析患者数据的医疗保健人工智能系统没有直接关系。

---

## Question 218  `#218`

**EN** Your company is designing an AI-powered healthcare application that processes sensitive patient data. To comply with regulatory standards and ensure the system is legally and ethically responsible, which of the following should you consider during the design process?

**中** 您的公司正在设计一款由人工智能驱动的医疗保健应用程序，用于处理敏感的患者数据。为了遵守监管标准并确保系统在法律和道德上负责，您在设计过程中应考虑以下哪项？

- **A.** Ensure compliance with the Health Insurance Portability and Accountability Act (HIPAA) for handling patient data.
  - 确保遵守《健康保险流通与责任法案》(HIPAA) 处理患者数据。
- **B.** Adopt algorithm accountability principles to ensure the AI model's decisions are transparent and explainable.
  - 采用算法问责原则，确保人工智能模型的决策透明且可解释。
- **C.** Implement International Organization for Standardization (ISO) standards, such as ISO/IEC 27001, for information security.
  - 实施国际标准化组织 (ISO) 标准，例如 ISO/IEC 27001，以确保信息安全。
- **D.** Focus solely on optimizing the AI model's accuracy and performance, disregarding regulatory requirements.
  - 仅专注于优化人工智能模型的准确性和性能，而忽略监管要求。
- **E.** Conduct regular audits using System and Organization Controls (SOC) frameworks to verify compliance with data security best practices.
  - 使用系统和组织控制 (SOC) 框架进行定期审核，以验证是否符合数据安全最佳实践。

**正确答案 / Answer: `A,B,C,E`**

When designing AI systems that handle sensitive data, it is essential to consider regulatory compliance and ethical standards to ensure legal adherence and public trust. Standards like HIPAA, ISO/IEC 27001, and SOC frameworks address data security and privacy, while algorithm accountability principles ensure transparency and fairness. Ignoring regulatory requirements can lead to legal and reputational risks.
A. Correct. HIPAA is a critical regulatory standard for applications handling sensitive healthcare data in the United States. Ensuring compliance is necessary to avoid legal penalties and protect patient privacy.
B. Correct. Algorithm accountability principles ensure that AI systems are fair, transparent, and explainable, which is essential for ethical AI adoption and compliance with emerging laws.
C. Correct. ISO standards, such as ISO/IEC 27001, provide guidelines for managing information security, which is vital for protecting sensitive data processed by AI systems.
D. Incorrect. Focusing only on optimizing the model's accuracy without considering regulatory requirements is a poor practice and can lead to non-compliance with laws and ethical violations.
E. Correct. SOC frameworks, such as SOC 2, help organizations evaluate and demonstrate their adherence to data security and privacy standards, which is important for regulatory compliance.

在设计处理敏感数据的人工智能系统时，必须考虑监管合规性和道德标准，以确保法律遵守和公众信任。 HIPAA、ISO/IEC 27001 和 SOC 框架等标准解决了数据安全和隐私问题，而算法问责原则则确保了透明度和公平性。忽视监管要求可能会导致法律和声誉风险。答：正确。 HIPAA 是美国处理敏感医疗数据的应用程序的关键监管标准。确保合规对于避免法律处罚和保护患者隐私是必要的。 B、正确。算法问责原则确保人工智能系统公平、透明和可解释，这对于道德人工智能的采用和遵守新兴法律至关重要。 C、正确。 ISO/IEC 27001 等 ISO 标准提供了信息安全管理指南，这对于保护人工智能系统处理的敏感数据至关重要。D、不正确。仅专注于优化模型的准确性而不考虑监管要求是一种糟糕的做法，并且可能导致不遵守法律和违反道德行为。 E、正确。 SOC 框架（例如 SOC 2）可帮助组织评估和证明其对数据安全和隐私标准的遵守情况，这对于监管合规性非常重要。

---

## Question 219  `#219`

**EN** Your company operates in a heavily regulated industry and needs to ensure compliance with data governance and security standards. Which AWS services or features can help you continuously monitor your environment for compliance and generate audit reports to demonstrate adherence to regulations?

**中** 您的公司所处行业受到严格监管，需要确保遵守数据治理和安全标准。哪些 AWS 服务或功能可以帮助您持续监控环境的合规性并生成审核报告以证明遵守法规？

- **A.** AWS Config
  - AWS Config
- **B.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **C.** AWS Audit Manager
  - AWS 审计经理
- **D.** Amazon Lex
  - Amazon Lex
- **E.** AWS Artifact
  - AWS Artifact

**正确答案 / Answer: `A,C,E`**

AWS Config, AWS Audit Manager, and AWS Artifact are the most appropriate services for assisting with governance and regulatory compliance. AWS Config helps monitor compliance continuously, AWS Audit Manager automates audit preparation, and AWS Artifact provides access to compliance reports and agreements. Together, these services address key aspects of compliance management.
A. Correct. AWS Config continuously monitors and records your AWS resource configurations and compliance with rules, making it a critical service for governance and regulatory compliance.
B. Incorrect. AWS Trusted Advisor focuses on best practices for cost optimization, performance, and security, but it is not specifically designed for compliance monitoring or audit reporting.
C. Correct. AWS Audit Manager helps you automate evidence collection and generate audit reports to demonstrate compliance with various standards, making it highly relevant for this scenario.
D. Incorrect. Amazon Lex is a service for building conversational interfaces using voice or text. It is not related to governance or compliance.
E. Correct. AWS Artifact provides on-demand access to AWS compliance reports and agreements, which can help demonstrate compliance during audits.

AWS Config、AWS Audit Manager 和 AWS Artifact 是协助治理和监管合规性的最合适的服务。 AWS Config 有助于持续监控合规性，AWS Audit Manager 可自动进行审核准备，AWS Artifact 提供对合规性报告和协议的访问。这些服务共同解决合规管理的关键方面。答：正确。 AWS Config 持续监控和记录您的 AWS 资源配置和规则合规性，使其成为治理和法规合规性的关键服务。 B、不正确。 AWS Trusted Advisor 专注于成本优化、性能和安全性的最佳实践，但它并不是专门为合规性监控或审计报告而设计的。 C、正确。 AWS Audit Manager 可帮助您自动收集证据并生成审核报告，以证明符合各种标准，使其与此场景高度相关。 D、不正确。Amazon Lex 是一项使用语音或文本构建对话界面的服务。它与治理或合规性无关。 E、正确。 AWS Artifact 提供对 AWS 合规性报告和协议的按需访问，这有助于在审核期间证明合规性。

---

## Question 220  `#220`

**EN** Your company is preparing for a compliance audit, and you need to ensure that all AWS resources are configured in accordance with organizational governance policies. Additionally, the audit requires you to provide evidence of compliance and historical activity logs. Which combination of AWS services can help you meet these requirements?

**中** 您的公司正在准备合规性审计，您需要确保所有 AWS 资源都按照组织治理策略进行配置。此外，审核要求您提供合规证据和历史活动日志。哪种 AWS 服务组合可以帮助您满足这些要求？

- **A.** AWS CloudTrail
  - AWS CloudTrail
- **B.** AWS Config
  - AWS Config
- **C.** Amazon Rekognition
  - Amazon Rekognition
- **D.** AWS Artifact
  - AWS Artifact
- **E.** AWS Trusted Advisor
  - AWS Trusted Advisor

**正确答案 / Answer: `A,B,D`**

To meet compliance audit requirements, you need services that track changes in your AWS environment, ensure resource configurations adhere to governance policies, and provide evidence of compliance. AWS CloudTrail offers activity logs for auditing purposes, AWS Config ensures compliance with configuration policies, and AWS Artifact provides access to compliance documents. These services collectively address the audit's needs. Amazon Rekognition and AWS Trusted Advisor, while useful, are not directly relevant for governance and compliance.
A. Correct. AWS CloudTrail is correct because it provides detailed logs of all API activity in your AWS environment, which is crucial for tracking historical activity and meeting audit requirements.
B. Correct. AWS Config is correct because it helps you assess, audit, and evaluate the configurations of your AWS resources to ensure they comply with governance policies.
C. Incorrect. Amazon Rekognition is incorrect because it is a machine learning service for image and video analysis and does not assist with governance or compliance tasks.
D. Correct. AWS Artifact is correct because it provides access to compliance-related documents, such as audit reports and agreements, which are often required during audits.
E. Incorrect. AWS Trusted Advisor is incorrect because it primarily provides recommendations for cost optimization, security, performance, and fault tolerance, but it does not directly assist with governance or compliance documentation.

为了满足合规性审计要求，您需要能够跟踪 AWS 环境变化、确保资源配置符合治理策略并提供合规性证据的服务。 AWS CloudTrail 提供用于审核目的的活动日志，AWS Config 确保符合配置策略，AWS Artifact 提供对合规性文档的访问。这些服务共同满足审计的需求。 Amazon Rekognition 和 AWS Trusted Advisor 虽然有用，但与治理和合规性并不直接相关。答：正确。 AWS CloudTrail 是正确的，因为它提供了 AWS 环境中所有 API 活动的详细日志，这对于跟踪历史活动和满足审核要求至关重要。 B、正确。 AWS Config 是正确的，因为它可以帮助您评估、审核和评估 AWS 资源的配置，以确保它们符合治理策略。 C、不正确。Amazon Rekognition 是不正确的，因为它是用于图像和视频分析的机器学习服务，不协助治理或合规性任务。 D、正确。 AWS Artifact 是正确的，因为它提供了对合规性相关文档的访问，例如审核期间经常需要的审核报告和协议。 E、不正确。 AWS Trusted Advisor 是不正确的，因为它主要提供成本优化、安全性、性能和容错方面的建议，但它并不直接协助治理或合规性文档。

---

## Question 221  `#221`

**EN** A financial services company needs to ensure compliance with industry regulations, which require maintaining a record of all API activity within their AWS accounts. Additionally, they need a service that helps them generate audit-ready reports for demonstrating compliance. Which AWS services should the company use to meet these requirements?

**中** 金融服务公司需要确保遵守行业法规，这些法规要求维护其 AWS 账户内所有 API 活动的记录。此外，他们需要一项服务来帮助他们生成可审计的报告以证明合规性。公司应该使用哪些 AWS 服务来满足这些要求？

- **A.** AWS CloudTrail
  - AWS CloudTrail
- **B.** AWS Audit Manager
  - AWS 审计经理
- **C.** Amazon Inspector
  - Amazon Inspector
- **D.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **E.** AWS Config
  - AWS Config

**正确答案 / Answer: `A,B`**

To meet the compliance requirements, the company should use AWS CloudTrail to maintain a record of all API activity and AWS Audit Manager to generate audit-ready reports for demonstrating compliance. AWS CloudTrail provides the necessary logging and traceability, while AWS Audit Manager automates compliance workflows and evidence collection. Other services like Amazon Inspector, AWS Trusted Advisor, and AWS Config are useful for security and governance but do not fully address the specific needs of this scenario.
A. Correct. AWS CloudTrail provides a record of all API activity and events in an AWS account, which is essential for meeting compliance requirements. It helps monitor and log activity, ensuring traceability.
B. Correct. AWS Audit Manager helps automate evidence collection and generates audit-ready reports to demonstrate compliance with industry regulations, making it suitable for this scenario.
C. Incorrect. Amazon Inspector is a security assessment service that helps improve the security of applications but is not used for tracking API activity or generating compliance reports.
D. Incorrect. AWS Trusted Advisor is a tool for optimizing AWS environments, offering recommendations for cost, performance, security, and fault tolerance. It does not directly assist with compliance reporting or API activity tracking.
E. Incorrect. AWS Config is a service that tracks resource configurations and compliance with custom or AWS-managed rules. While it helps with compliance, it does not provide API activity logs or generate audit-ready reports.

为了满足合规性要求，公司应使用 AWS CloudTrail 维护所有 API 活动的记录，并使用 AWS Audit Manager 生成审计就绪报告以证明合规性。 AWS CloudTrail 提供必要的日志记录和可追溯性，而 AWS Audit Manager 可自动执行合规工作流程和证据收集。 Amazon Inspector、AWS Trusted Advisor 和 AWS Config 等其他服务对于安全和治理很有用，但不能完全满足此场景的特定需求。答：正确。 AWS CloudTrail 提供 AWS 账户中所有 API 活动和事件的记录，这对于满足合规性要求至关重要。它有助于监控和记录活动，确保可追溯性。 B、正确。 AWS Audit Manager 可帮助自动收集证据并生成可供审计的报告，以证明其符合行业法规，从而适合此场景。 C、不正确。Amazon Inspector 是一项安全评估服务，有助于提高应用程序的安全性，但不用于跟踪 API 活动或生成合规性报告。 D、不正确。 AWS Trusted Advisor 是一款用于优化 AWS 环境的工具，提供成本、性能、安全性和容错方面的建议。它不直接协助合规性报告或 API 活动跟踪。 E、不正确。 AWS Config 是一项跟踪资源配置以及自定义或 AWS 托管规则合规性的服务。虽然它有助于合规性，但它不提供 API 活动日志或生成审计就绪报告。

---

## Question 222  `#222`

**EN** A company is implementing an AI/ML solution on AWS to analyze customer data for predictive insights. As part of their data governance strategy, they need to ensure compliance with data residency requirements, monitor data access activities, and define retention policies for the data. Which combination of AWS services and features would best address these requirements?

**中** 一家公司正在 AWS 上实施 AI/ML 解决方案，以分析客户数据以获得预测性见解。作为数据治理策略的一部分，他们需要确保遵守数据驻留要求、监控数据访问活动并定义数据保留策略。哪种 AWS 服务和功能组合最能满足这些要求？

- **A.** AWS CloudTrail for logging and monitoring data access activities
  - AWS CloudTrail 用于记录和监控数据访问活动
- **B.** Amazon S3 Object Lock to enforce data retention policies
  - Amazon S3 对象锁定以强制执行数据保留策略
- **C.** AWS Glue to ensure compliance with data residency requirements
  - AWS Glue 确保符合数据驻留要求
- **D.** AWS Config to track configuration changes to resources storing customer data
  - AWS Config 用于跟踪存储客户数据的资源的配置更改
- **E.** AWS Control Tower for centralized data residency enforcement
  - AWS Control Tower 用于集中数据驻留强制执行

**正确答案 / Answer: `A,B,D`**

The question focuses on data governance strategies, specifically data residency, monitoring, and retention. AWS CloudTrail is suitable for monitoring data access activities, Amazon S3 Object Lock enforces data retention policies, and AWS Config helps track configuration changes, which can assist in governance. AWS Glue and AWS Control Tower are not directly aligned with the specific requirements outlined in the scenario.
A. Correct. AWS CloudTrail provides logging and monitoring of API calls and user activities, which helps meet the requirement of monitoring data access activities.
B. Correct. Amazon S3 Object Lock enables you to enforce retention policies by preventing the deletion or modification of data for a specified period of time, addressing the data retention requirement.
C. Incorrect. AWS Glue is a data integration service primarily used for building ETL workflows. While it can transform and move data, it is not used for ensuring compliance with data residency requirements.
D. Correct. AWS Config tracks configuration changes to AWS resources, which can include resources storing customer data. This helps with monitoring compliance and governance requirements.
E. Incorrect. AWS Control Tower provides a framework for multi-account governance but does not specifically enforce data residency requirements. Data residency compliance depends on the location of the resources.

该问题重点关注数据治理策略，特别是数据驻留、监控和保留。 AWS CloudTrail 适用于监控数据访问活动，Amazon S3 对象锁定强制执行数据保留策略，AWS Config 有助于跟踪配置更改，从而有助于治理。 AWS Glue 和 AWS Control Tower 并不直接符合场景中列出的具体要求。答：正确。 AWS CloudTrail 提供对 API 呼叫和用户活动的记录和监控，这有助于满足监控数据访问活动的要求。 B、正确。 Amazon S3 对象锁定使您能够通过防止在指定时间段内删除或修改数据来实施保留策略，从而满足数据保留要求。 C、不正确。 AWS Glue 是一项数据集成服务，主要用于构建 ETL 工作流程。虽然它可以转换和移动数据，但它并不用于确保符合数据驻留要求。 D .正确的。 AWS Config 跟踪 AWS 资源的配置更改，其中可以包括存储客户数据的资源。这有助于监控合规性和治理要求。 E、不正确。 AWS Control Tower 提供了多账户治理框架，但没有专门强制执行数据驻留要求。数据驻留合规性取决于资源的位置。

---

## Question 223  `#223`

**EN** A company is building an AI model that processes sensitive customer data. To ensure compliance with regulatory requirements and best practices, which strategies should they implement as part of their data governance framework?

**中** 一家公司正在构建一个处理敏感客户数据的人工智能模型。为了确保遵守监管要求和最佳实践，他们应该实施哪些策略作为数据治理框架的一部分？

- **A.** Implement data residency controls to ensure data is stored in specific geographic locations.
  - 实施数据驻留控制以确保数据存储在特定地理位置。
- **B.** Enable logging and monitoring to track data access and usage activities.
  - 启用日志记录和监控以跟踪数据访问和使用活动。
- **C.** Allow unrestricted access to the dataset to improve model training efficiency.
  - 允许不受限制地访问数据集，以提高模型训练效率。
- **D.** Establish data retention policies to define how long data should be stored.
  - 建立数据保留策略来定义数据应存储多长时间。
- **E.** Disable data lifecycle management to reduce operational overhead.
  - 禁用数据生命周期管理以减少运营开销。

**正确答案 / Answer: `A,B,D`**

Data governance strategies are vital for ensuring compliance, security, and efficiency in AI systems. Key practices such as enforcing data residency controls, enabling logging and monitoring, and establishing retention policies help organizations manage sensitive data responsibly. By implementing these strategies, companies can align their AI workflows with legal and regulatory requirements while maintaining operational integrity.
A. Correct. Implementing data residency controls ensures that sensitive data complies with local regulations by being stored in designated geographic regions, which is a critical component of data governance.
B. Correct. Enabling logging and monitoring provides visibility into how data is accessed and used, which is essential for detecting anomalies and ensuring compliance with governance policies.
C. Incorrect. Allowing unrestricted access to data violates data governance principles by increasing the risk of unauthorized access and data breaches.
D. Correct. Establishing data retention policies helps define and enforce how long data is stored, balancing regulatory compliance and storage efficiency.
E. Incorrect. Disabling data lifecycle management contradicts good governance practices since lifecycle management is essential for controlling data from creation to deletion.

数据治理策略对于确保人工智能系统的合规性、安全性和效率至关重要。实施数据驻留控制、启用日志记录和监控以及建立保留策略等关键实践可帮助组织负责任地管理敏感数据。通过实施这些策略，公司可以使其人工智能工作流程符合法律和监管要求，同时保持运营完整性。答：正确。实施数据驻留控制可确保敏感数据存储在指定地理区域，从而符合当地法规，这是数据治理的关键组成部分。 B、正确。启用日志记录和监控可以让您了解数据的访问和使用方式，这对于检测异常和确保遵守治理策略至关重要。 C、不正确。允许不受限制地访问数据违反了数据治理原则，因为增加了未经授权的访问和数据泄露的风险。 D、正确。建立数据保留策略有助于定义和强制执行数据的存储时间，平衡法规遵从性和存储效率。 E、不正确。禁用数据生命周期管理与良好的治理实践相矛盾，因为生命周期管理对于控制数据从创建到删除的过程至关重要。

---

## Question 224  `#224`

**EN** Your organization is using Amazon S3 to store sensitive customer data. To comply with regulatory requirements and ensure proper data governance, which strategies should you implement to monitor and manage the data lifecycle effectively?

**中** 您的组织正在使用 Amazon S3 存储敏感的客户数据。为了遵守监管要求并确保适当的数据治理，您应该实施哪些策略来有效监控和管理数据生命周期？

- **A.** Enable S3 Object Lifecycle Policies to automate data transitions and deletions.
  - 启用 S3 对象生命周期策略以自动执行数据转换和删除。
- **B.** Use AWS CloudTrail to log access and API activities associated with S3 objects.
  - 使用 AWS CloudTrail 记录与 S3 对象关联的访问和 API 活动。
- **C.** Store all data in the S3 Standard storage class indefinitely to simplify management.
  - 将所有数据无限期存储在 S3 标准存储类中，以简化管理。
- **D.** Enable S3 Object Lock to enforce retention policies for critical data.
  - 启用 S3 对象锁定以强制执行关键数据的保留策略。
- **E.** Monitor S3 bucket access patterns using Amazon S3 Storage Lens.
  - 使用 Amazon S3 存储镜头监控 S3 存储桶访问模式。

**正确答案 / Answer: `A,B,D,E`**

Implementing data governance strategies like lifecycle policies, logging, retention enforcement, and monitoring access patterns is essential for regulatory compliance and cost optimization. These practices ensure that sensitive customer data is managed securely and efficiently within Amazon S3.
A. Correct. Correct: Enabling S3 Object Lifecycle Policies ensures that data is managed automatically based on its lifecycle stage, such as transitioning to lower-cost storage classes or deleting expired data.
B. Correct. Correct: AWS CloudTrail logs provide detailed visibility into access and API usage, allowing you to monitor data access and maintain compliance.
C. Incorrect. Incorrect: Storing all data in the S3 Standard storage class indefinitely is not a best practice for data governance, as it can lead to unnecessary costs and fails to address data lifecycle requirements.
D. Correct. Correct: S3 Object Lock can be used to enforce retention policies, which is essential for ensuring compliance with data governance regulations for critical data.
E. Correct. Correct: Amazon S3 Storage Lens provides insights into bucket-level access patterns, enabling better monitoring and observation as part of a data governance strategy.

实施生命周期策略、日志记录、保留实施和监控访问模式等数据治理策略对于法规遵从性和成本优化至关重要。这些实践确保敏感的客户数据在 Amazon S3 内得到安全、高效的管理。答：正确。正确：启用 S3 对象生命周期策略可确保根据数据的生命周期阶段自动管理数据，例如过渡到成本较低的存储类或删除过期数据。 B、正确。正确：AWS CloudTrail 日志提供访问和 API 使用情况的详细可见性，使您能够监控数据访问并保持合规性。 C、不正确。错误：将所有数据无限期地存储在 S3 标准存储类中并不是数据治理的最佳实践，因为它可能会导致不必要的成本并且无法满足数据生命周期要求。 D、正确。正确：S3 对象锁定可用于强制执行保留策略，这对于确保遵守关键数据的数据治理法规至关重要。 E、正确。正确：Amazon S3 Storage Lens 提供对存储桶级别访问模式的洞察，从而作为数据治理策略的一部分实现更好的监控和观察。

---

## Question 225  `#225`

**EN** Your organization has deployed a machine learning model using Amazon SageMaker to predict customer churn. As part of your governance protocols, you need to ensure the model complies with your organization's policies for ethical AI usage and data privacy. Which processes should you follow to maintain governance compliance for the deployed model?

**中** 您的组织已部署使用 Amazon SageMaker 的机器学习模型来预测客户流失。作为治理协议的一部分，您需要确保模型符合组织关于道德人工智能使用和数据隐私的政策。您应该遵循哪些流程来维护已部署模型的治理合规性？

- **A.** Conduct regular reviews of the model's performance and fairness metrics.
  - 定期审查模型的性能和公平性指标。
- **B.** Implement monitoring to detect data drift and retrain the model frequently.
  - 实施监控以检测数据漂移并经常重新训练模型。
- **C.** Ensure access to the model and its predictions is restricted using AWS Identity and Access Management (IAM) policies.
  - 确保使用 AWS Identity and Access Management (IAM) 策略限制对模型及其预测的访问。
- **D.** Document and review the model's decision-making process to ensure transparency.
  - 记录并审查模型的决策过程以确保透明度。
- **E.** Disable logging in Amazon CloudWatch to reduce storage costs.
  - 禁用 Amazon CloudWatch 中的日志记录以降低存储成本。

**正确答案 / Answer: `A,C,D`**

Governance protocols for machine learning models emphasize fairness, transparency, and security. Regular reviews of performance and fairness metrics ensure the model adheres to ethical standards. Restricting access using IAM policies safeguards data privacy, and documenting the decision-making process ensures transparency. These practices align with governance frameworks and policies, making them essential for compliance.
A. Correct. Regular reviews of performance and fairness metrics are essential to ensure that the model adheres to governance protocols, such as ethical AI standards and fairness in predictions.
B. Incorrect. While monitoring and retraining are good practices for maintaining model accuracy, they are not explicitly part of governance protocols like ethical AI and data privacy compliance.
C. Correct. Restricting access using AWS IAM policies ensures that only authorized users can access the model and its predictions, which is crucial for governance and data privacy.
D. Correct. Documenting and reviewing the model's decision-making process promotes transparency, which is a core aspect of AI governance frameworks.
E. Incorrect. Disabling logging in Amazon CloudWatch may reduce costs but violates governance practices, as logging is critical for auditing and maintaining compliance protocols.

机器学习模型的治理协议强调公平、透明和安全。定期审查绩效和公平性指标，确保模型遵守道德标准。使用 IAM 策略限制访问可以保护数据隐私，记录决策过程可以确保透明度。这些实践与治理框架和政策相一致，对于合规性至关重要。答：正确。定期审查性能和公平性指标对于确保模型遵守治理协议至关重要，例如人工智能道德标准和预测公平性。 B、不正确。虽然监控和再培训是保持模型准确性的良好实践，但它们并不是道德人工智能和数据隐私合规等治理协议的明确组成部分。 C、正确。使用 AWS IAM 策略限制访问可确保只有授权用户才能访问模型及其预测，这对于治理和数据隐私至关重要。D、正确。记录和审查模型的决策过程可以提高透明度，这是人工智能治理框架的核心方面。 E、不正确。在 Amazon CloudWatch 中禁用日志记录可能会降低成本，但违反了治理实践，因为日志记录对于审计和维护合规性协议至关重要。

---

## Question 226  `#226`

**EN** Your organization is deploying an AI model for automated loan approvals, and you are tasked with ensuring governance compliance during the project lifecycle. Which of the following processes should you implement to adhere to governance protocols effectively?

**中** 您的组织正在部署用于自动贷款审批的 AI 模型，您的任务是确保项目生命周期内的治理合规性。您应该实施以下哪些流程才能有效遵守治理协议？

- **A.** Establish a model review cadence to evaluate performance metrics and bias periodically.
  - 建立模型审查节奏，定期评估绩效指标和偏差。
- **B.** Document the model's decision-making process and ensure it aligns with organizational policies.
  - 记录模型的决策过程并确保其符合组织政策。
- **C.** Deploy the model directly into production without testing to meet time-to-market requirements.
  - 无需测试即可将模型直接部署到生产中，以满足上市时间要求。
- **D.** Implement a governance framework such as AI Ethics and Risk Assessment to guide the project's lifecycle.
  - 实施人工智能道德和风险评估等治理框架来指导项目的生命周期。
- **E.** Incorporate stakeholder reviews only after the model has been deployed to ensure operational feedback.
  - 仅在部署模型后纳入利益相关者审查，以确保运营反馈。

**正确答案 / Answer: `A,B,D`**

Adhering to governance protocols for AI systems involves implementing structured processes such as regular model reviews, thorough documentation, and governance frameworks to ensure compliance, transparency, and accountability. The correct options emphasize proactive governance practices that align with organizational and ethical standards, while the incorrect options describe actions that either violate governance principles or fail to address governance requirements effectively.
A. Correct. Establishing a model review cadence is essential to ensure that the model's performance and fairness are consistently monitored, which aligns with governance protocols.
B. Correct. Documenting the model's decision-making process ensures transparency and alignment with the organization's policies, which is a critical component of governance.
C. Incorrect. Deploying the model directly into production without testing violates governance protocols, as it increases the risk of errors and biases in the AI system.
D. Correct. Implementing a governance framework, such as AI Ethics and Risk Assessment, provides a structured approach to managing risks and ensuring accountability, which is key to governance compliance.
E. Incorrect. Incorporating stakeholder reviews only after deployment is not a best practice, as governance protocols emphasize involving stakeholders throughout the model development and deployment processes, not just post-deployment.

遵守人工智能系统的治理协议涉及实施结构化流程，例如定期模型审查、完整的文档和治理框架，以确保合规性、透明度和问责制。正确的选项强调符合组织和道德标准的主动治理实践，而错误的选项则描述违反治理原则或无法有效满足治理要求的行为。答：正确。建立模型审查节奏对于确保模型的性能和公平性得到持续监控至关重要，这与治理协议保持一致。 B、正确。记录模型的决策过程可确保透明度并与组织的政策保持一致，这是治理的关键组成部分。 C、不正确。在不进行测试的情况下将模型直接部署到生产环境中违反了治理协议，因为这会增加人工智能系统中出现错误和偏见的风险。 D、正确。实施人工智能道德和风险评估等治理框架，提供了管理风险和确保问责制的结构化方法，这是治理合规性的关键。 E、不正确。仅在部署后纳入涉众审查并不是最佳实践，因为治理协议强调让涉众参与整个模型开发和部署过程，而不仅仅是部署后。

---

## Question 227  `#227`

**EN** A data science team at a financial institution is developing a machine learning model for loan approval predictions. According to the governance protocols, the institution requires regular reviews to ensure compliance with internal policies and regulatory standards. Which of the following steps should the team include in their governance process to adhere to these requirements?

**中** 一家金融机构的数据科学团队正在开发一种用于贷款审批预测的机器学习模型。根据治理协议，该机构需要定期审查，以确保遵守内部政策和监管标准。团队应在其治理流程中包含以下哪些步骤以遵守这些要求？

- **A.** Schedule periodic audits to evaluate model performance and fairness.
  - 安排定期审核以评估模型性能和公平性。
- **B.** Document all changes to the dataset, model, and hyperparameters.
  - 记录对数据集、模型和超参数的所有更改。
- **C.** Deploy the model without review to accelerate development cycles.
  - 无需审查即可部署模型，以加快开发周期。
- **D.** Establish a review board to assess ethical implications of the model.
  - 建立一个审查委员会来评估该模型的道德影响。
- **E.** Ignore external regulatory compliance to focus on internal policies only.
  - 忽略外部监管合规性，只关注内部政策。

**正确答案 / Answer: `A,B,D`**

Governance protocols require a structured approach to ensure compliance with internal policies, ethical considerations, and external regulations. This includes periodic audits, proper documentation, and the establishment of review mechanisms. These steps ensure traceability, accountability, and adherence to governance frameworks while mitigating risks associated with deployment of AI/ML models.
A. Correct. Periodic audits are essential for ensuring the model is performing as expected and adheres to fairness and compliance requirements.
B. Correct. Documenting changes ensures traceability and accountability, which are critical components of governance protocols.
C. Incorrect. Deploying the model without review contradicts governance best practices and can lead to non-compliance with policies and regulations.
D. Correct. A review board focused on ethical implications ensures that the model aligns with organizational values and regulatory expectations.
E. Incorrect. Ignoring external regulatory compliance is not acceptable, as adhering to external regulations is a key aspect of governance protocols.

治理协议需要采用结构化方法来确保遵守内部政策、道德考虑和外部法规。这包括定期审计、适当的文件记录以及审查机制的建立。这些步骤确保可追溯性、问责制和遵守治理框架，同时减轻与 AI/ML 模型部署相关的风险。答：正确。定期审核对于确保模型按预期运行并遵守公平性和合规性要求至关重要。 B、正确。记录变更可确保可追溯性和问责制，这是治理协议的关键组成部分。 C、不正确。未经审查就部署模型与治理最佳实践相矛盾，并可能导致不遵守政策和法规。 D、正确。专注于道德影响的审查委员会确保该模型符合组织价值观和监管期望。 E、不正确。忽视外部监管合规性是不可接受的，因为遵守外部监管是治理协议的一个关键方面。

---

## Question 228  `#228`

**EN** Your organization is deploying a generative AI model for customer service, and you are tasked with ensuring compliance with security and transparency standards. The Generative AI Security Scoping Matrix has been recommended for use. Which of the following actions should you prioritize to align with transparency and team training requirements?

**中** 您的组织正在为客户服务部署生成式 AI 模型，您的任务是确保遵守安全性和透明度标准。建议使用生成式人工智能安全范围矩阵。为了符合透明度和团队培训要求，您应该优先考虑以下哪些行动？

- **A.** Document the model's training data sources and ensure they are accessible for audit purposes.
  - 记录模型的训练数据源并确保可以出于审计目的访问它们。
- **B.** Conduct mandatory training for the development team on bias detection and mitigation techniques.
  - 对开发团队进行有关偏差检测和缓解技术的强制性培训。
- **C.** Enable encryption for all API communications between the generative AI model and the client applications.
  - 为生成式 AI 模型和客户端应用程序之间的所有 API 通信启用加密。
- **D.** Define a clear policy for notifying users about the use of AI in the responses they receive.
  - 制定明确的政策，通知用户在收到的回复中使用人工智能。
- **E.** Automate model updates without requiring team involvement to improve efficiency.
  - 自动更新模型，无需团队参与，从而提高效率。

**正确答案 / Answer: `A,B,D`**

The Generative AI Security Scoping Matrix emphasizes key principles such as transparency and team training. Actions like documenting training data sources, training teams on bias detection, and notifying users about AI usage directly align with these principles. While encryption and automation are important, they do not address the specific requirements of transparency and team training.
A. Correct. Documenting the model's training data sources is crucial for transparency, as it ensures stakeholders can verify the data used to create the model and assess potential biases or limitations.
B. Correct. Training the development team on bias detection and mitigation is essential to ensure they are equipped to address ethical and security concerns in generative AI systems.
C. Incorrect. While enabling encryption is a good security measure, it is not directly related to transparency or team training requirements, which are the focus of this question.
D. Correct. Defining a policy to notify users about AI usage supports transparency by ensuring users are aware that they are interacting with a generative AI system.
E. Incorrect. Automating model updates without team involvement could compromise ethical oversight and transparency, as it reduces the ability to review updates for compliance and security.

生成式人工智能安全范围矩阵强调透明度和团队培训等关键原则。记录培训数据源、培训团队进行偏差检测以及通知用户人工智能的使用等行动都直接符合这些原则。虽然加密和自动化很重要，但它们并不能满足透明度和团队培训的具体要求。答：正确。记录模型的训练数据源对于透明度至关重要，因为它确保利益相关者可以验证用于创建模型的数据并评估潜在的偏差或限制。 B、正确。对开发团队进行偏见检测和缓解方面的培训至关重要，以确保他们有能力解决生成人工智能系统中的道德和安全问题。 C、不正确。虽然启用加密是一项很好的安全措施，但它与透明度或团队培训要求没有直接关系，而这正是本问题的重点。 D、正确。定义通知用户有关人工智能使用情况的策略，确保用户知道他们正在与生成人工智能系统进行交互，从而支持透明度。 E、不正确。在没有团队参与的情况下自动更新模型可能会损害道德监督和透明度，因为它降低了审查合规性和安全性更新的能力。

---

## Question 229  `#229`

**EN** An organization is developing a generative AI application using AWS services. To ensure compliance with security and ethical standards, they decide to implement the Generative AI Security Scoping Matrix. Which of the following actions are critical for meeting transparency standards and ensuring the team is appropriately trained?

**中** 一个组织正在使用 AWS 服务开发生成式 AI 应用程序。为了确保遵守安全和道德标准，他们决定实施生成式人工智能安全范围矩阵。以下哪些行动对于满足透明度标准并确保团队接受适当的培训至关重要？

- **A.** Conduct regular security audits of the generative AI model and its workflows.
  - 对生成式人工智能模型及其工作流程进行定期安全审核。
- **B.** Implement clear documentation for model datasets, training methods, and potential biases.
  - 为模型数据集、训练方法和潜在偏差提供清晰的文档。
- **C.** Provide team training only on AWS infrastructure services without focusing on ethical AI principles.
  - 仅提供有关 AWS 基础设施服务的团队培训，而不关注人工智能道德原则。
- **D.** Establish a feedback loop for users to report issues like bias or misuse of generated content.
  - 建立一个反馈循环，供用户报告偏见或滥用生成内容等问题。
- **E.** Ensure the team is trained on responsible AI practices, including bias mitigation and interpretability.
  - 确保团队接受负责任的人工智能实践培训，包括减少偏见和可解释性。

**正确答案 / Answer: `B,D,E`**

Actions like implementing clear documentation (transparency), establishing a feedback loop (accountability), and providing team training on responsible AI practices (ethical readiness) are aligned with the Generative AI Security Scoping Matrix. These measures ensure compliance with transparency standards and prepare the team to manage the AI system responsibly. Security audits, while important, are not directly tied to transparency or team training, and training only on AWS infrastructure without ethical considerations is insufficient.
A. Incorrect. While conducting security audits is a good practice, this action focuses on securing the AI model rather than addressing transparency or team training requirements.
B. Correct. Clear documentation of datasets, training methods, and potential biases is essential for transparency standards, as it allows stakeholders to understand and trust the AI model's behavior and limitations.
C. Incorrect. Training the team only on AWS infrastructure services ignores the critical need for ethical AI training, which is vital for addressing potential biases and ensuring responsible use of generative AI.
D. Correct. A feedback loop for users is important for transparency and accountability, as it helps identify and address any issues related to bias or misuse of the AI system.
E. Correct. Training the team on responsible AI practices, including bias mitigation and interpretability, is crucial to ensure they can develop and manage generative AI systems that align with ethical standards.

实施清晰的文档（透明度）、建立反馈循环（问责制）以及提供负责任的人工智能实践（道德准备）的团队培训等行动均与生成人工智能安全范围矩阵保持一致。这些措施确保遵守透明度标准，并让团队做好负责任地管理人工智能系统的准备。安全审计虽然很重要，但与透明度或团队培训并不直接相关，并且仅在没有道德考虑的情况下对 AWS 基础设施进行培训是不够的。 A. 不正确。虽然进行安全审计是一种很好的做法，但此行动的重点是保护人工智能模型，而不是解决透明度或团队培训要求。 B、正确。数据集、训练方法和潜在偏差的清晰记录对于透明度标准至关重要，因为它使利益相关者能够理解和信任人工智能模型的行为和局限性。 C、不正确。仅针对 AWS 基础设施服务对团队进行培训，忽略了道德 AI 培训的迫切需求，而这对于解决潜在偏见和确保负责任地使用生成式 AI 至关重要。 D、正确。用户的反馈循环对于透明度和问责制非常重要，因为它有助于识别和解决与人工智能系统的偏见或滥用相关的任何问题。 E、正确。对团队进行负责任的人工智能实践培训，包括减少偏见和可解释性，对于确保他们能够开发和管理符合道德标准的生成人工智能系统至关重要。

---

## Question 230  `#230`

**EN** Your organization is planning to implement a generative AI model for customer service automation. To ensure compliance with the Generative AI Security Scoping Matrix, which of the following actions should your team prioritize during the initial stages of the project?

**中** 您的组织正计划实施用于客户服务自动化的生成式 AI 模型。为了确保符合生成人工智能安全范围矩阵，您的团队在项目的初始阶段应优先考虑以下哪些行动？

- **A.** Establish transparency standards for how the AI model generates responses and communicates limitations to users.
  - 为人工智能模型如何生成响应并向用户传达限制建立透明度标准。
- **B.** Provide training to the AI development team on secure coding practices and potential biases in generative AI models.
  - 为人工智能开发团队提供有关安全编码实践和生成人工智能模型中潜在偏差的培训。
- **C.** Generate synthetic data for the AI model without evaluating its compliance with organizational data privacy policies.
  - 为 AI 模型生成合成数据，而不评估其是否符合组织数据隐私政策。
- **D.** Implement a system for monitoring and logging all interactions for auditing and troubleshooting purposes.
  - 实施一个系统来监控和记录所有交互，以进行审核和故障排除。
- **E.** Skip team training on AI ethics and focus solely on deploying the model to production quickly.
  - 跳过有关人工智能道德的团队培训，只专注于将模型快速部署到生产中。

**正确答案 / Answer: `A,B,D`**

To align with the Generative AI Security Scoping Matrix and ensure a secure and transparent implementation, priorities should include establishing transparency standards, training teams on security and ethical considerations, and implementing monitoring systems. These actions provide a foundation for responsible AI development, while neglecting data privacy compliance or ethical training could lead to significant risks.
A. Correct. Establishing transparency standards is critical to ensure users understand how the AI functions, its limitations, and any potential risks associated with its use. This aligns with the Generative AI Security Scoping Matrix's focus on transparency.
B. Correct. Training the team on secure coding practices and addressing potential biases helps build a robust and ethical AI system, which is a key component of compliance with generative AI security guidelines.
C. Incorrect. Although synthetic data can be useful, generating it without ensuring compliance with privacy policies could introduce legal or ethical risks, making this an unsuitable action.
D. Correct. Monitoring and logging interactions are essential for tracking AI behavior, ensuring accountability, and troubleshooting issues. This aligns with security and transparency requirements.
E. Incorrect. Skipping team training on AI ethics overlooks the importance of ethical considerations, which is a fundamental part of responsible AI development and deployment.

为了与生成人工智能安全范围矩阵保持一致并确保安全和透明的实施，优先事项应包括建立透明度标准、对团队进行安全和道德考虑的培训以及实施监控系统。这些行动为负责任的人工智能开发奠定了基础，而忽视数据隐私合规性或道德培训可能会导致重大风险。答：正确。建立透明度标准对于确保用户了解人工智能的运作方式、其局限性以及与其使用相关的任何潜在风险至关重要。这与生成人工智能安全范围矩阵对透明度的关注相一致。 B、正确。对团队进行安全编码实践培训并解决潜在偏见有助于构建强大且符合道德的人工智能系统，这是遵守生成式人工智能安全准则的关键组成部分。 C、不正确。尽管合成数据可能有用，但在不确保遵守隐私政策的情况下生成合成数据可能会带来法律或道德风险，从而使这种行为变得不合适。 D、正确。监控和记录交互对于跟踪人工智能行为、确保责任和解决问题至关重要。这符合安全性和透明度要求。 E、不正确。跳过人工智能道德方面的团队培训忽视了道德考虑的重要性，而道德考虑是负责任的人工智能开发和部署的基本组成部分。

---

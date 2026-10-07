# AWS SAA-C03 真题演练卷 · 第 08 份

> 题目 351–400 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 351  `Single answer`

**EN** A company needs to ingest data from IoT sensors deployed across multiple locations. The data must be ingested in near real-time for analytics, but occasional delays of up to a few seconds are acceptable. The company wants to minimize operational overhead while ensuring scalability as the number of devices grows. Which service and configuration should the company choose?

**中** 公司需要从部署在多个地点的物联网传感器获取数据。数据必须近乎实时地获取以进行分析，但偶尔的延迟最多几秒钟是可以接受的。该公司希望最大限度地减少运营开销，同时确保随着设备数量的增长而扩展。公司应该选择哪种服务和配置？

- **A.** Use Amazon Kinesis Data Streams with a producer SDK to ingest data from the IoT sensors.
  - 将 Amazon Kinesis 数据流与生产者 SDK 结合使用，从 IoT 传感器获取数据。
- **B.** Use Amazon S3 to directly upload data from the IoT sensors as objects in near real-time.
  - 使用 Amazon S3 直接从 IoT 传感器将数据作为对象近乎实时地上传。
- **C.** Use AWS IoT Core for device connectivity and route data to Amazon Kinesis Data Streams.
  - 使用 AWS IoT Core 进行设备连接并将数据路由到 Amazon Kinesis 数据流。
- **D.** Use Amazon SQS to queue messages from IoT sensors and process them with a consumer application.
  - 使用 Amazon SQS 对来自 IoT 传感器的消息进行排队，并使用消费者应用程序对其进行处理。

**正确答案 / Answer: `C`**

AWS IoT Core is the most appropriate service for managing IoT devices and ingesting their data. It simplifies device connectivity, ensuring secure and scalable data ingestion. Routing the data from AWS IoT Core to Amazon Kinesis Data Streams enables near real-time processing and analytics while minimizing operational complexity. This approach aligns well with the company's requirements and ensures future scalability as the number of devices grows.

AWS IoT Core 是管理 IoT 设备和获取其数据的最合适的服务。它简化了设备连接，确保安全且可扩展的数据摄取。将数据从 AWS IoT Core 路由到 Amazon Kinesis Data Streams 可实现近乎实时的处理和分析，同时最大限度地降低操作复杂性。这种方法非常符合公司的要求，并确保未来随着设备数量的增长而可扩展。

---

## Question 352  `Select 3`

**EN** A company needs to ingest real-time data from IoT sensors deployed across multiple locations. The data must be processed with minimal latency for immediate analysis and stored for historical reporting. Which AWS services combination is the most suitable for this use case?

**中** 公司需要从部署在多个地点的物联网传感器获取实时数据。数据必须以最短的延迟进行处理，以便立即分析并存储以用于历史报告。哪种 AWS 服务组合最适合此用例？

- **A.** Amazon Kinesis Data Streams for real-time ingestion and processing
  - 用于实时摄取和处理的 Amazon Kinesis 数据流
- **B.** Amazon SQS for real-time ingestion and processing
  - Amazon SQS 用于实时摄取和处理
- **C.** AWS IoT Core for receiving sensor data and routing it to other AWS services
  - AWS IoT Core，用于接收传感器数据并将其路由到其他 AWS 服务
- **D.** Amazon Redshift for ingesting real-time data directly
  - Amazon Redshift 用于直接摄取实时数据
- **E.** Amazon S3 for storing historical data
  - Amazon S3 用于存储历史数据

**正确答案 / Answer: `A, C, E`**

For real-time data ingestion and processing, Amazon Kinesis Data Streams is the optimal choice. AWS IoT Core facilitates the ingestion of data from IoT sensors, while Amazon S3 provides durable and cost-effective storage for historical data. This combination ensures minimal latency for real-time processing and enables long-term storage for reporting and analysis.

对于实时数据摄取和处理，Amazon Kinesis Data Streams 是最佳选择。 AWS IoT Core 有助于从 IoT 传感器提取数据，而 Amazon S3 则为历史数据提供持久且经济高效的存储。这种组合可确保实时处理的延迟最小化，并支持长期存储以进行报告和分析。

---

## Question 353  `Single answer`

**EN** A company needs to migrate 80 TB of on-premises data to Amazon S3. The data transfer must minimize downtime and ensure efficient handling of the large dataset. The company also wants the solution to be suitable for ongoing data transfers in the future. Which AWS service best meets this requirement?

**中** 某公司需要将本地 80TB 数据迁移到 Amazon S3。数据传输必须最大限度地减少停机时间并确保高效处理大型数据集。该公司还希望该解决方案适用于未来持续的数据传输。哪种 AWS 服务最能满足此要求？

- **A.** AWS DataSync
  - AWS 数据同步
- **B.** AWS Storage Gateway - File Gateway
  - AWS Storage Gateway - 文件网关
- **C.** AWS Snowball
  - AWS Snowball
- **D.** AWS Direct Connect
  - AWS Direct Connect

**正确答案 / Answer: `A`**

AWS DataSync is the best solution for this scenario because it efficiently handles large-scale, one-time migrations as well as ongoing transfers. While AWS Snowball can handle large data migrations, it is not ideal for ongoing data transfers. AWS Storage Gateway is more suited for hybrid storage use cases, and AWS Direct Connect is not a data transfer service.

AWS DataSync 是此场景的最佳解决方案，因为它可以有效处理大规模一次性迁移以及持续传输。虽然 AWS Snowball 可以处理大量数据迁移，但它对于持续数据传输来说并不理想。 AWS Storage Gateway 更适合混合存储用例，而 AWS Direct Connect 不是数据传输服务。

---

## Question 354  `Single answer`

**EN** A company has an on-premises file storage system and wants to migrate a large amount of data to Amazon S3 while minimizing operational overhead. The data transfer should happen securely over the internet with the ability to schedule and automate future incremental transfers. Which service should the company use?

**中** 某公司拥有本地文件存储系统，希望将大量数据迁移到 Amazon S3，同时最大限度地减少运营开销。数据传输应通过互联网安全地进行，并能够安排和自动化未来的增量传输。公司应该使用哪种服务？

- **A.** AWS DataSync
  - AWS 数据同步
- **B.** AWS Storage Gateway (File Gateway)
  - AWS Storage Gateway（文件网关）
- **C.** Amazon S3 Transfer Acceleration
  - Amazon S3 传输加速
- **D.** AWS Snowball
  - AWS Snowball

**正确答案 / Answer: `A`**

AWS DataSync is the most suitable service for securely transferring a large amount of data over the internet to Amazon S3. It allows you to schedule and automate incremental transfers, reducing operational overhead. Other options like Storage Gateway and Snowball do not meet the requirements for internet-based or automated data migration.

AWS DataSync 是通过互联网安全地将大量数据传输到 Amazon S3 的最合适的服务。它允许您安排和自动化增量传输，从而减少运营开销。 Storage Gateway 和 Snowball 等其他选项无法满足基于 Internet 或自动数据迁移的要求。

---

## Question 355  `Single answer`

**EN** A company is migrating an on-premises file storage system to AWS. They need to transfer petabytes of data securely and efficiently. Once the migration is complete, they want the ability to continue accessing the migrated data from their on-premises systems with low latency while maintaining centralized storage in AWS. Which solution best meets these requirements?

**中** 一家公司正在将本地文件存储系统迁移到 AWS。他们需要安全高效地传输 PB 级数据。迁移完成后，他们希望能够继续以低延迟从本地系统访问迁移的数据，同时维持 AWS 中的集中存储。哪种解决方案最能满足这些要求？

- **A.** Use AWS DataSync to migrate the data and AWS Storage Gateway File Gateway for on-premises access to the data in AWS.
  - 使用 AWS DataSync 迁移数据和 AWS Storage Gateway 文件网关，以便在本地访问 AWS 中的数据。
- **B.** Use AWS Snowball Edge to transfer the data and migrate it to Amazon S3, then use AWS Direct Connect for on-premises access to the data.
  - 使用 AWS Snowball Edge 传输数据并将其迁移到 Amazon S3，然后使用 AWS Direct Connect 本地访问数据。
- **C.** Use AWS DataSync to migrate the data and set up an Amazon FSx file system for on-premises access.
  - 使用 AWS DataSync 迁移数据并设置 Amazon FSx 文件系统以进行本地访问。
- **D.** Use AWS Snowball Edge to transfer the data, and then use AWS DataSync continuously to synchronize the on-premises storage with Amazon EFS.
  - 使用 AWS Snowball Edge 传输数据，然后不断使用 AWS DataSync 将本地存储与 Amazon EFS 同步。

**正确答案 / Answer: `A`**

The best solution involves using AWS DataSync to transfer the large dataset to AWS quickly and securely. For continuous access to the migrated data from on-premises systems with low latency, AWS Storage Gateway File Gateway is ideal as it provides a local cache for frequently accessed files while storing the data centrally in AWS.

最佳解决方案是使用 AWS DataSync 将大型数据集快速安全地传输到 AWS。为了以低延迟连续访问本地系统中的迁移数据，AWS Storage Gateway 文件网关非常理想，因为它为经常访问的文件提供本地缓存，同时将数据集中存储在 AWS 中。

---

## Question 356  `Single answer`

**EN** A company is migrating its on-premises file storage solution to AWS. They need to transfer several terabytes of data to an Amazon S3 bucket. The data transfer must be automated, handle data integrity checks, and require minimal ongoing management. Which AWS service is the most appropriate for this use case?

**中** 一家公司正在将其本地文件存储解决方案迁移到 AWS。他们需要将几 TB 的数据传输到 Amazon S3 存储桶。数据传输必须自动化，处理数据完整性检查，并且需要最少的持续管理。哪种 AWS 服务最适合此用例？

- **A.** AWS DataSync
  - AWS 数据同步
- **B.** AWS Storage Gateway (File Gateway)
  - AWS Storage Gateway（文件网关）
- **C.** Amazon S3 Transfer Acceleration
  - Amazon S3 传输加速
- **D.** AWS Snowball
  - AWS Snowball

**正确答案 / Answer: `A`**

AWS DataSync is the best option for transferring large amounts of data to Amazon S3 in an automated and managed way. It simplifies the process by automating data transfer tasks, performing integrity checks, and minimizing operational overhead. Other options, such as Storage Gateway or Snowball, are better suited for hybrid storage or offline data transfer use cases, while S3 Transfer Acceleration is ideal for improving internet-based transfer speeds but lacks the automation required in this scenario.

AWS DataSync 是以自动化和托管方式将大量数据传输到 Amazon S3 的最佳选择。它通过自动化数据传输任务、执行完整性检查和最大限度地减少运营开销来简化流程。其他选项（例如 Storage Gateway 或 Snowball）更适合混合存储或离线数据传输用例，而 S3 传输加速非常适合提高基于互联网的传输速度，但缺乏此场景所需的自动化。

---

## Question 357  `Single answer`

**EN** A retail company collects customer purchase data from multiple sources, including on-premises databases and cloud-based systems. They need to clean, normalize, and transform this data into a consistent format before loading it into their Amazon Redshift data warehouse for analytics. Which service should they use to achieve this efficiently?

**中** 一家零售公司从多个来源收集客户购买数据，包括本地数据库和基于云的系统。他们需要清理、规范化这些数据并将其转换为一致的格式，然后再将其加载到 Amazon Redshift 数据仓库进行分析。他们应该使用哪种服务来有效地实现这一目标？

- **A.** AWS Glue
  - AWS Glue
- **B.** Amazon Kinesis Data Streams
  - Amazon Kinesis 数据流
- **C.** AWS DataSync
  - AWS 数据同步
- **D.** Amazon EMR
  - Amazon EMR

**正确答案 / Answer: `A`**

AWS Glue is the most suitable service for this scenario because it is designed to handle ETL (Extract, Transform, Load) workflows efficiently and can integrate seamlessly with Amazon Redshift. It simplifies the process of connecting to multiple data sources, cleaning and transforming the data, and loading it into a data warehouse for analytics. Other options like Amazon Kinesis Data Streams, AWS DataSync, and Amazon EMR are not specifically designed for this type of batch data transformation and loading use case.

AWS Glue 是最适合此场景的服务，因为它旨在高效处理 ETL（提取、转换、加载）工作流程，并且可以与 Amazon Redshift 无缝集成。它简化了连接到多个数据源、清理和转换数据以及将其加载到数据仓库中进行分析的过程。 Amazon Kinesis Data Streams、AWS DataSync 和 Amazon EMR 等其他选项并不是专门为此类批量数据转换和加载用例而设计的。

---

## Question 358  `Single answer`

**EN** A retail company collects transactional data from its point-of-sale systems and stores it in Amazon S3 in JSON format. The company wants to transform this data into a structured format (Parquet) to optimize query performance in Amazon Athena. They also want the solution to be serverless and capable of handling schema discovery automatically. Which AWS service is best suited for this use case?

**中** 一家零售公司从其销售点系统收集交易数据，并将其以 JSON 格式存储在 Amazon S3 中。该公司希望将这些数据转换为结构化格式 (Parquet)，以优化 Amazon Athena 中的查询性能。他们还希望该解决方案是无服务器的，并且能够自动处理模式发现。哪种 AWS 服务最适合此用例？

- **A.** AWS Glue
  - AWS Glue
- **B.** Amazon EMR
  - Amazon EMR
- **C.** AWS Lambda
  - AWS Lambda
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `A`**

AWS Glue is the best choice for this scenario because it is a serverless ETL (Extract, Transform, Load) service capable of discovering schemas automatically and transforming data into optimized formats like Parquet. This makes it highly suitable for use cases like preparing data for querying in Amazon Athena. Other options either lack the required capabilities or are not serverless.

AWS Glue 是这种场景的最佳选择，因为它是一种无服务器 ETL（提取、转换、加载）服务，能够自动发现模式并将数据转换为 Parquet 等优化格式。这使得它非常适合在 Amazon Athena 中准备查询数据等用例。其他选项要么缺乏所需的功能，要么不是无服务器的。

---

## Question 359  `Single answer`

**EN** A company has large volumes of semi-structured data stored in Amazon S3, such as JSON and CSV files. They need to transform this data into a structured format and load it into Amazon Redshift for analytics. The data transformation process requires schema discovery, deduplication, and partitioning. Which AWS service is the most appropriate to use for this data transformation task?

**中** 某公司在 Amazon S3 中存储了大量半结构化数据，例如 JSON 和 CSV 文件。他们需要将这些数据转换为结构化格式并将其加载到 Amazon Redshift 中进行分析。数据转换过程需要架构发现、重复数据删除和分区。哪种 AWS 服务最适合用于此数据转换任务？

- **A.** AWS Glue
  - AWS Glue
- **B.** Amazon EMR
  - Amazon EMR
- **C.** AWS Data Pipeline
  - AWS 数据管道
- **D.** Amazon Kinesis Data Firehose
  - Amazon Kinesis 数据消防软管

**正确答案 / Answer: `A`**

AWS Glue is the most suitable service for this use case because it provides automated schema discovery, built-in ETL capabilities, and integration with Amazon Redshift. It simplifies the process of transforming semi-structured data stored in Amazon S3 into a structured format for analytics. While other services like Amazon EMR or AWS Data Pipeline can perform similar tasks, they are not as straightforward or purpose-built for this specific use case.

AWS Glue 是最适合此用例的服务，因为它提供自动模式发现、内置 ETL 功能以及与 Amazon Redshift 的集成。它简化了将 Amazon S3 中存储的半结构化数据转换为用于分析的结构化格式的过程。虽然 Amazon EMR 或 AWS Data Pipeline 等其他服务可以执行类似的任务，但它们并不那么简单或专门针对此特定用例而构建。

---

## Question 360  `Single answer`

**EN** Your company is building a data lake on AWS to analyze customer transaction data. The data arrives daily in raw CSV files and needs to be transformed into a Parquet format for efficient querying. Additionally, you must clean the data by removing null values and standardizing the date format before storing it in Amazon S3 for querying with Amazon Athena. Which AWS service should you use to automate this data transformation process?

**中** 您的公司正在 AWS 上构建数据湖来分析客户交易数据。数据每天以原始 CSV 文件形式到达，需要转换为 Parquet 格式以进行高效查询。此外，您必须先通过删除空值并标准化日期格式来清理数据，然后再将其存储在 Amazon S3 中以便使用 Amazon Athena 进行查询。您应该使用哪种 AWS 服务来自动化此数据转换过程？

- **A.** AWS Glue
  - AWS Glue
- **B.** Amazon EMR
  - Amazon EMR
- **C.** AWS Lambda
  - AWS Lambda
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `A`**

AWS Glue is the best choice for this scenario because it provides a fully managed ETL service with built-in support for transforming data (e.g., converting CSV to Parquet, cleaning data) and is integrated with Amazon S3 and Athena. This makes it efficient and cost-effective for automating the data transformation process in a data lake architecture.

AWS Glue 是此场景的最佳选择，因为它提供完全托管的 ETL 服务，内置对数据转换的支持（例如，将 CSV 转换为 Parquet、清理数据），并与 Amazon S3 和 Athena 集成。这使得数据湖架构中的数据转换过程自动化变得高效且经济高效。

---

## Question 361  `Select 3`

**EN** A company is using Amazon Kinesis Data Streams to process real-time data from IoT devices. To ensure secure access to the ingestion access points, what actions should the company take?

**中** 一家公司正在使用 Amazon Kinesis 数据流来处理来自物联网设备的实时数据。为了确保安全访问摄取接入点，公司应采取哪些措施？

- **A.** Use AWS Identity and Access Management (IAM) policies to grant least privilege permissions to users and applications.
  - 使用 AWS Identity and Access Management (IAM) 策略向用户和应用程序授予最低权限。
- **B.** Enable server-side encryption (SSE) with Kinesis-managed encryption keys (SSE-KMS).
  - 使用 Kinesis 管理的加密密钥 (SSE-KMS) 启用服务器端加密 (SSE)。
- **C.** Use a security group to restrict access to the Kinesis Data Streams ingestion endpoint by IP address.
  - 使用安全组通过 IP 地址限制对 Kinesis Data Streams 提取端点的访问。
- **D.** Implement VPC endpoints for Kinesis Data Streams to ensure private access without traversing the public internet.
  - 为 Kinesis Data Streams 实施 VPC 终端节点，以确保私人访问而无需遍历公共互联网。
- **E.** Enable Multi-Factor Authentication (MFA) for all users accessing Kinesis Data Streams.
  - 为所有访问 Kinesis Data Streams 的用户启用多重身份验证 (MFA)。

**正确答案 / Answer: `A, B, D`**

To secure access to ingestion access points for Amazon Kinesis Data Streams, you should use IAM policies to enforce least privilege access, enable server-side encryption to protect data, and use VPC endpoints to ensure private connectivity. Security groups do not apply to Kinesis, and while MFA enhances identity security, it does not directly secure the ingestion access points.

为了保护对 Amazon Kinesis 数据流的摄取访问点的访问，您应该使用 IAM 策略强制执行最低权限访问，启用服务器端加密来保护数据，并使用 VPC 终端节点来确保专用连接。安全组不适用于 Kinesis，虽然 MFA 增强了身份安全性，但它并不直接保护摄取访问点。

---

## Question 362  `Select 2`

**EN** A company uses Amazon Kinesis Data Streams to ingest real-time data from IoT devices. The data ingestion access points for Kinesis are publicly accessible by default. To ensure secure access to these ingestion endpoints, what combination of actions should you take?

**中** 一家公司使用 Amazon Kinesis 数据流从 IoT 设备获取实时数据。默认情况下，Kinesis 的数据摄取访问点可公开访问。为了确保安全访问这些摄取端点，您应该采取什么操作组合？

- **A.** Enable server-side encryption (SSE) for the Kinesis Data Stream.
  - 为 Kinesis Data Stream 启用服务器端加密 (SSE)。
- **B.** Use an AWS Identity and Access Management (IAM) policy to restrict access to the Kinesis Data Stream.
  - 使用 AWS Identity and Access Management (IAM) 策略来限制对 Kinesis Data Stream 的访问。
- **C.** Configure a VPC endpoint for Kinesis and ensure access is limited to your VPC.
  - 为 Kinesis 配置 VPC 终端节点并确保访问仅限于您的 VPC。
- **D.** Enable Kinesis Enhanced Fan-Out to improve security for ingestion access points.
  - 启用 Kinesis 增强型扇出以提高摄取接入点的安全性。
- **E.** Use AWS WAF to block unwanted traffic to the Kinesis ingestion endpoint.
  - 使用 AWS WAF 阻止流向 Kinesis 摄取端点的不需要的流量。

**正确答案 / Answer: `B, C`**

To secure access to Amazon Kinesis ingestion access points, you should use IAM policies to define who or what can access the Kinesis Data Stream. Additionally, configuring a VPC endpoint for Kinesis restricts access to your private network, ensuring traffic does not traverse the public internet. Other options, like server-side encryption and Enhanced Fan-Out, are beneficial for data security and performance but do not specifically secure access to ingestion endpoints.

为了保护对 Amazon Kinesis 摄取访问点的访问，您应该使用 IAM 策略来定义谁或什么可以访问 Kinesis Data Stream。此外，为 Kinesis 配置 VPC 终端节点会限制对专用网络的访问，确保流量不会穿越公共互联网。其他选项（例如服务器端加密和增强型扇出）有利于数据安全和性能，但不能专门保护对摄取端点的访问。

---

## Question 363  `Select 4`

**EN** A company is using Amazon Kinesis Data Streams to ingest real-time streaming data from IoT devices deployed in the field. The company wants to ensure secure access to the ingestion endpoints and prevent unauthorized devices from sending data. Which actions should the Solutions Architect recommend?

**中** 一家公司正在使用 Amazon Kinesis Data Streams 从现场部署的 IoT 设备获取实时流数据。该公司希望确保对摄取端点的安全访问并防止未经授权的设备发送数据。解决方案架构师应该建议哪些操作？

- **A.** Use IAM policies to restrict access to the Kinesis Data Stream ingestion endpoint based on device-specific IAM roles.
  - 使用 IAM 策略根据设备特定的 IAM 角色限制对 Kinesis Data Stream 摄取终端节点的访问。
- **B.** Implement AWS PrivateLink to create a private endpoint for the Kinesis Data Stream ingestion point.
  - 实施 AWS PrivateLink 为 Kinesis Data Stream 摄取点创建专用终端节点。
- **C.** Use Kinesis Data Streams server-side encryption (SSE) to encrypt data ingested by the devices.
  - 使用 Kinesis Data Streams 服务器端加密 (SSE) 对设备接收的数据进行加密。
- **D.** Require all devices to use an API Gateway configured with AWS WAF to authenticate requests before sending data to Kinesis.
  - 要求所有设备使用配置了 AWS WAF 的 API 网关来验证请求，然后再将数据发送到 Kinesis。
- **E.** Enable VPC endpoint policies for the Kinesis Data Stream to control access from specific VPCs.
  - 为 Kinesis Data Stream 启用 VPC 终端节点策略以控制来自特定 VPC 的访问。

**正确答案 / Answer: `A, B, D, E`**

To secure access to ingestion access points, it is critical to implement a combination of IAM policies, private connectivity (such as AWS PrivateLink), request authentication and filtering (via API Gateway and AWS WAF), and VPC endpoint policies. These techniques collectively ensure that only authorized devices and networks can communicate with the Kinesis Data Stream, while server-side encryption protects data at rest but does not directly secure the ingestion access point.

为了确保对摄取接入点的访问安全，实施 IAM 策略、专用连接（例如 AWS PrivateLink）、请求身份验证和过滤（通过 API Gateway 和 AWS WAF）以及 VPC 终端节点策略的组合至关重要。这些技术共同确保只有授权的设备和网络才能与 Kinesis Data Stream 通信，而服务器端加密可以保护静态数据，但不能直接保护摄取接入点。

---

## Question 364  `Select 2`

**EN** A company is ingesting large volumes of data into an Amazon S3 bucket through an application running on Amazon EC2 instances. The company wants to ensure that access to the S3 bucket is secure and restricted only to the application instances. Which of the following steps should you take to achieve this?

**中** 一家公司通过在 Amazon EC2 实例上运行的应用程序将大量数据提取到 Amazon S3 存储桶中。该公司希望确保对 S3 存储桶的访问是安全的并且仅限于应用程序实例。为了实现这一目标，您应该采取以下哪些步骤？

- **A.** Use an IAM role attached to the EC2 instances to grant permissions to access the S3 bucket.
  - 使用附加到 EC2 实例的 IAM 角色来授予访问 S3 存储桶的权限。
- **B.** Create an S3 bucket policy that allows access only from specific VPC endpoints.
  - 创建仅允许从特定 VPC 终端节点进行访问的 S3 存储桶策略。
- **C.** Use access keys stored on the EC2 instances to authenticate the application to S3.
  - 使用存储在 EC2 实例上的访问密钥向 S3 验证应用程序。
- **D.** Enable server-side encryption on the S3 bucket to secure the data at rest.
  - 在 S3 存储桶上启用服务器端加密以保护静态数据。
- **E.** Restrict inbound traffic to the EC2 instances using a security group.
  - 使用安全组限制 EC2 实例的入站流量。

**正确答案 / Answer: `A, B`**

To secure access to ingestion access points, such as an Amazon S3 bucket, it is essential to follow AWS security best practices. Attaching an IAM role to the EC2 instances ensures temporary and secure credentials are used, while a bucket policy that restricts access to specific VPC endpoints limits access to trusted network paths. Avoid using static access keys, and while other security measures like encryption and security groups are important, they do not directly address access security to the ingestion endpoint.

为了保护对摄取访问点（例如 Amazon S3 存储桶）的访问，必须遵循 AWS 安全最佳实践。将 IAM 角色附加到 EC2 实例可确保使用临时且安全的凭证，而限制对特定 VPC 终端节点的访问的存储桶策略则限制对受信任网络路径的访问。避免使用静态访问密钥，虽然加密和安全组等其他安全措施很重要，但它们并不能直接解决摄取端点的访问安全问题。

---

## Question 365  `Single answer`

**EN** A company is running a high-traffic e-commerce website and has noticed that the current Amazon RDS database instance is experiencing high latency during peak times. They require a solution that can handle sudden spikes in traffic, provide read scalability, and meet their business performance requirements. What is the best approach to address this issue?

**中** 某公司正在运行一个高流量的电子商务网站，并注意到当前的 Amazon RDS 数据库实例在高峰时段出现高延迟。他们需要一个能够处理突然的流量峰值、提供读取可扩展性并满足其业务性能要求的解决方案。解决这个问题的最佳方法是什么？

- **A.** Scale the RDS instance vertically by upgrading to a larger instance type.
  - 通过升级到更大的实例类型来垂直扩展 RDS 实例。
- **B.** Enable Multi-AZ deployment for the RDS instance to improve performance.
  - 为 RDS 实例启用多可用区部署以提高性能。
- **C.** Add read replicas to the RDS instance to distribute read traffic.
  - 将只读副本添加到 RDS 实例以分配读取流量。
- **D.** Migrate the database to Amazon DynamoDB for better scalability.
  - 将数据库迁移到 Amazon DynamoDB 以获得更好的可扩展性。

**正确答案 / Answer: `C`**

The best approach to address the company's requirements is to add read replicas to the RDS instance. This solution allows the company to handle sudden spikes in traffic by offloading read queries to replicas, thereby reducing latency and improving performance without requiring a complete migration or major architectural changes.

满足公司需求的最佳方法是将只读副本添加到 RDS 实例。该解决方案允许公司通过将读取查询卸载到副本来处理突然的流量高峰，从而减少延迟并提高性能，而无需完全迁移或重大架构更改。

---

## Question 366  `Single answer`

**EN** A company is planning to deploy a high-performance database application on AWS. The database requires low-latency storage with at least 20,000 IOPS and 1 TB of storage capacity. What is the most cost-effective storage option to meet the business requirements?

**中** 一家公司计划在 AWS 上部署高性能数据库应用程序。数据库需要至少 20,000 IOPS 和 1 TB 存储容量的低延迟存储。满足业务需求最经济高效的存储选项是什么？

- **A.** Amazon EBS General Purpose SSD (gp3) with provisioned IOPS
  - Amazon EBS 通用 SSD (gp3)，具有预配置 IOPS
- **B.** Amazon EBS Provisioned IOPS SSD (io2)
  - Amazon EBS 预配置 IOPS SSD (io2)
- **C.** Amazon EBS Magnetic volumes
  - Amazon EBS 磁性卷
- **D.** Amazon S3 Standard storage class
  - Amazon S3 标准存储类

**正确答案 / Answer: `A`**

The correct answer is Amazon EBS Provisioned IOPS SSD (io2) because it is specifically designed to handle high IOPS workloads (up to 64,000 IOPS) and offers low-latency storage. While gp3 is a cost-effective option for many use cases, it cannot meet the required 20,000 IOPS in this scenario. Magnetic volumes and S3 are not suitable for high-performance database applications.

正确答案是 Amazon EBS 预配置 IOPS SSD (io2)，因为它专门设计用于处理高 IOPS 工作负载（高达 64,000 IOPS）并提供低延迟存储。虽然 gp3 对于许多用例来说是一个经济高效的选项，但它无法满足此场景中所需的 20,000 IOPS。磁卷和 S3 不适合高性能数据库应用程序。

---

## Question 367  `Single answer`

**EN** A company is hosting a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application receives unpredictable traffic that can spike suddenly. The company wants to ensure the application performs well during traffic spikes while minimizing costs during low traffic periods. Which configuration meets these requirements?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。应用程序收到的流量不可预测，可能会突然激增。该公司希望确保应用程序在流量高峰期间表现良好，同时在流量较低期间最大限度地降低成本。哪种配置满足这些要求？

- **A.** Use a fixed size Auto Scaling group with a set number of EC2 instances.
  - 使用固定大小的 Auto Scaling 组和一定数量的 EC2 实例。
- **B.** Configure an Auto Scaling group with step scaling policies based on CPU utilization thresholds.
  - 使用基于 CPU 利用率阈值的逐步扩展策略配置 Auto Scaling 组。
- **C.** Deploy the application on On-Demand Instances only and manually scale the EC2 instances during traffic spikes.
  - 仅在按需实例上部署应用程序，并在流量高峰期间手动扩展 EC2 实例。
- **D.** Use Spot Instances to run the application and scale manually during peak traffic.
  - 使用 Spot 实例运行应用程序并在流量高峰期间手动扩展。

**正确答案 / Answer: `B`**

Step scaling policies in an Auto Scaling group dynamically adjust the number of EC2 instances based on predefined CPU utilization thresholds. This ensures sufficient capacity during traffic spikes while reducing costs during low traffic by scaling down. This approach aligns with the requirement for performance and cost optimization.

Auto Scaling 组中的步进扩展策略会根据预定义的 CPU 利用率阈值动态调整 EC2 实例的数量。这样可以确保流量高峰期间有足够的容量，同时通过缩小规模来降低流量低时的成本。这种方法符合性能和成本优化的要求。

---

## Question 368  `Select 2`

**EN** A company is planning to deploy a new analytics application on AWS. The application requires low-latency access to data and will process large datasets of up to 10 TB daily. The processed data must be stored for long-term archiving at the lowest possible cost, but it should remain accessible within minutes if needed. Which combination of AWS services should you recommend to meet these requirements?

**中** 一家公司计划在 AWS 上部署新的分析应用程序。该应用程序需要低延迟地访问数据，并且每天将处理高达 10 TB 的大型数据集。处理后的数据必须以尽可能低的成本存储以便长期存档，但如果需要，应该在几分钟内保持可访问性。您应该推荐哪种 AWS 服务组合来满足这些要求？

- **A.** Amazon S3 Standard for active data processing and Amazon S3 Glacier for long-term storage
  - 用于主动数据处理的 Amazon S3 标准和用于长期存储的 Amazon S3 Glacier
- **B.** Amazon EBS Provisioned IOPS SSD (io2) volumes for data processing and Amazon S3 Glacier Deep Archive for long-term storage
  - 用于数据处理的 Amazon EBS 预配置 IOPS SSD (io2) 卷和用于长期存储的 Amazon S3 Glacier Deep Archive
- **C.** Amazon EFS for active data processing and Amazon S3 Intelligent-Tiering for long-term storage
  - 用于主动数据处理的 Amazon EFS 和用于长期存储的 Amazon S3 智能分层
- **D.** Amazon S3 Standard for active data processing and Amazon S3 Intelligent-Tiering for long-term storage
  - Amazon S3 用于主动数据处理的标准和用于长期存储的 Amazon S3 智能分层
- **E.** Amazon EFS for active data processing and Amazon S3 Glacier for long-term storage
  - Amazon EFS 用于主动数据处理，Amazon S3 Glacier 用于长期存储

**正确答案 / Answer: `C, D`**

The combination of Amazon EFS and S3 Intelligent-Tiering (Option 3) or S3 Standard and S3 Intelligent-Tiering (Option 4) is the best solution for this scenario. Amazon EFS provides low-latency access for active data processing, and Amazon S3 Intelligent-Tiering ensures cost-optimized long-term storage with fast retrieval capabilities. These options meet the performance, storage, and cost requirements described in the scenario.

Amazon EFS 和 S3 智能分层（选项 3）或 S3 标准和 S3 智能分层（选项 4）的组合是该场景的最佳解决方案。 Amazon EFS 为主动数据处理提供低延迟访问，Amazon S3 智能分层可确保成本优化的长期存储和快速检索功能。这些选项满足场景中描述的性能、存储和成本要求。

---

## Question 369  `Single answer`

**EN** A company needs to process a continuous stream of data in real-time from IoT sensors installed in their manufacturing units. The data needs to be ingested, processed in near real-time, and stored in Amazon S3 for long-term analysis. Which AWS service is the most appropriate for this use case?

**中** 公司需要实时处理来自制造单位安装的物联网传感器的连续数据流。数据需要近乎实时地摄取、处理，并存储在 Amazon S3 中以供长期分析。哪种 AWS 服务最适合此用例？

- **A.** Amazon Kinesis Data Streams
  - Amazon Kinesis 数据流
- **B.** Amazon SQS
  - Amazon SQS
- **C.** Amazon SNS
  - Amazon SNS
- **D.** Amazon RDS
  - Amazon RDS

**正确答案 / Answer: `A`**

Amazon Kinesis Data Streams is the ideal choice for this scenario because it is purpose-built for ingesting and processing large streams of real-time data. It allows developers to build applications that require high-throughput and low-latency data processing, which is a perfect fit for the company's IoT sensor data use case. Once processed, the data can be sent to Amazon S3 for long-term storage and analysis.

Amazon Kinesis Data Streams 是此场景的理想选择，因为它是专门为摄取和处理大量实时数据而构建的。它允许开发人员构建需要高吞吐量和低延迟数据处理的应用程序，这非常适合该公司的物联网传感器数据用例。处理后，数据可以发送到 Amazon S3 进行长期存储和分析。

---

## Question 370  `Single answer`

**EN** A company is building a real-time analytics dashboard that processes high-velocity streaming data from IoT sensors installed in manufacturing equipment. The data needs to be ingested continuously, processed with minimal latency, and stored for further analysis. Which AWS service would be the most appropriate for ingesting the streaming data in this scenario?

**中** 一家公司正在构建一个实时分析仪表板，用于处理来自制造设备中安装的物联网传感器的高速流数据。数据需要持续摄取、以最小的延迟进行处理并存储以供进一步分析。在这种情况下，哪种 AWS 服务最适合提取流数据？

- **A.** Amazon Kinesis Data Streams
  - Amazon Kinesis 数据流
- **B.** Amazon S3
  - Amazon S3
- **C.** Amazon RDS
  - Amazon RDS
- **D.** AWS Batch
  - AWS Batch

**正确答案 / Answer: `A`**

Amazon Kinesis Data Streams is the most suitable service for this scenario because it is purpose-built for ingesting and processing high-velocity streaming data in real-time. This aligns perfectly with the requirement for real-time analytics of IoT sensor data. Other services like Amazon S3, RDS, and AWS Batch do not offer the real-time data ingestion and processing capabilities required for this use case.

Amazon Kinesis Data Streams 是最适合此场景的服务，因为它是专门为实时摄取和处理高速流数据而构建的。这完全符合物联网传感器数据实时分析的要求。 Amazon S3、RDS 和 AWS Batch 等其他服务不提供此用例所需的实时数据摄取和处理功能。

---

## Question 371  `Single answer`

**EN** A company wants to process and analyze real-time streaming data generated from IoT sensors deployed in a manufacturing facility. The data needs to be ingested, processed with minimal latency, and stored for future analysis. Which AWS service is the most appropriate choice for processing the real-time streaming data?

**中** 一家公司希望处理和分析制造工厂中部署的物联网传感器生成的实时流数据。数据需要以最小的延迟被摄取、处理并存储以供将来分析。哪种 AWS 服务是处理实时流数据的最合适选择？

- **A.** Amazon Kinesis Data Streams
  - Amazon Kinesis 数据流
- **B.** Amazon S3
  - Amazon S3
- **C.** Amazon RDS
  - Amazon RDS
- **D.** Amazon Elastic Transcoder
  - 亚马逊弹性转码器

**正确答案 / Answer: `A`**

Amazon Kinesis Data Streams is the most appropriate service for processing real-time streaming data. It supports high-throughput ingestion and enables applications to process data with low latency. This makes it a perfect fit for use cases such as IoT sensor data, where real-time processing and analysis are critical. Other options, such as Amazon S3 and Amazon RDS, are not designed to handle real-time streaming data workloads.

Amazon Kinesis Data Streams 是处理实时流数据的最合适的服务。它支持高吞吐量摄取，并使应用程序能够以低延迟处理数据。这使其非常适合物联网传感器数据等实时处理和分析至关重要的用例。其他选项（例如 Amazon S3 和 Amazon RDS）并非设计用于处理实时流数据工作负载。

---

## Question 372  `Single answer`

**EN** A financial services company wants to collect, process, and analyze real-time stock price data from multiple global exchanges. The data needs to be ingested continuously and processed in near real-time to identify trends and anomalies. Which AWS service is the most appropriate for this use case?

**中** 一家金融服务公司希望收集、处理和分析来自多个全球交易所的实时股票价格数据。需要连续摄取并近乎实时地处理数据，以识别趋势和异常情况。哪种 AWS 服务最适合此用例？

- **A.** Amazon Kinesis Data Streams
  - Amazon Kinesis 数据流
- **B.** Amazon S3
  - Amazon S3
- **C.** Amazon RDS
  - Amazon RDS
- **D.** AWS Batch
  - AWS Batch

**正确答案 / Answer: `A`**

Amazon Kinesis Data Streams is the most appropriate service for this use case as it is purpose-built for collecting and processing real-time streaming data at scale. It allows the financial services company to ingest stock price data in real-time and process it to identify trends and anomalies. Other services like Amazon S3, Amazon RDS, and AWS Batch are not optimized for real-time, continuous data streaming and processing.

Amazon Kinesis 数据流是最适合此用例的服务，因为它是专门为大规模收集和处理实时流数据而构建的。它允许金融服务公司实时获取股票价格数据并对其进行处理以识别趋势和异常情况。 Amazon S3、Amazon RDS 和 AWS Batch 等其他服务未针对实时、连续数据流和处理进行优化。

---

## Question 373  `Single answer`

**EN** A startup is hosting a serverless web application on AWS and wants to optimize costs while maintaining performance. The application uses Amazon API Gateway, AWS Lambda functions, and Amazon DynamoDB. The DynamoDB table's write throughput is highly variable, with periods of intense activity followed by long periods of low or no writes. What is the most cost-effective way to configure the DynamoDB table to handle this workload?

**中** 一家初创公司在 AWS 上托管无服务器 Web 应用程序，希望在保持性能的同时优化成本。该应用程序使用 Amazon API Gateway、AWS Lambda 函数和 Amazon DynamoDB。 DynamoDB 表的写入吞吐量变化很大，在一段时间内活动频繁，然后是长时间的低写入或无写入。配置 DynamoDB 表来处理此工作负载的最经济高效的方法是什么？

- **A.** Configure the DynamoDB table to use provisioned capacity with sufficient write capacity units to handle peak traffic.
  - 将 DynamoDB 表配置为使用具有足够写入容量单位的预配置容量来处理峰值流量。
- **B.** Enable DynamoDB Auto Scaling on the table to dynamically adjust the provisioned capacity based on traffic patterns.
  - 在表上启用 DynamoDB Auto Scaling，以根据流量模式动态调整预配置容量。
- **C.** Switch the DynamoDB table to on-demand capacity mode.
  - 将 DynamoDB 表切换为按需容量模式。
- **D.** Use global secondary indexes (GSIs) to reduce the write traffic on the base table.
  - 使用全局二级索引 (GSI) 减少基表的写入流量。

**正确答案 / Answer: `C`**

For workloads with unpredictable and variable traffic patterns, DynamoDB's on-demand capacity mode is the most cost-effective solution. It eliminates the need to provision capacity and charges only for actual read and write requests. This is ideal for the startup's scenario where write activity fluctuates significantly.

对于流量模式不可预测且可变的工作负载，DynamoDB 的按需容量模式是最具成本效益的解决方案。它无需仅针对实际的读写请求配置容量和费用。这对于写入活动波动较大的初创公司场景来说是理想的选择。

---

## Question 374  `Select 3`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application processes user-uploaded images and stores the processed images in Amazon S3. The company has noticed that its costs have increased significantly and wants to implement a more cost-effective architecture. Which of the following options can help reduce costs without impacting the application's performance?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。应用程序处理用户上传的图像并将处理后的图像存储在 Amazon S3 中。该公司注意到其成本大幅增加，并希望实施更具成本效益的架构。以下哪个选项可以帮助降低成本而不影响应用程序的性能？

- **A.** Use Amazon EC2 Spot Instances for non-critical processing tasks.
  - 使用 Amazon EC2 Spot 实例来执行非关键处理任务。
- **B.** Enable S3 Intelligent-Tiering for storing processed images.
  - 启用 S3 智能分层来存储处理后的图像。
- **C.** Replace the Application Load Balancer (ALB) with a Network Load Balancer (NLB) to reduce load balancing costs.
  - 将 Application Load Balancer (ALB) 替换为 Network Load Balancer (NLB)，以降低负载平衡成本。
- **D.** Use Amazon CloudFront to cache processed images closer to users.
  - 使用 Amazon CloudFront 缓存处理后的图像更接近用户。
- **E.** Switch to a Reserved Instance model for the EC2 instances running the application.
  - 为运行应用程序的 EC2 实例切换到预留实例模型。

**正确答案 / Answer: `A, B, D`**

To optimize costs, the company should consider using EC2 Spot Instances for non-critical tasks, as they are significantly cheaper than On-Demand Instances. Enabling S3 Intelligent-Tiering reduces storage costs by automatically optimizing the storage tier for processed images. Additionally, using Amazon CloudFront to cache processed images reduces data transfer costs and improves performance by delivering content from edge locations. These solutions collectively help reduce costs without impacting the application's performance.

为了优化成本，公司应考虑使用 EC2 Spot 实例来执行非关键任务，因为它们比按需实例便宜得多。启用 S3 智能分层可自动优化已处理图像的存储层，从而降低存储成本。此外，使用 Amazon CloudFront 缓存处理后的图像可降低数据传输成本，并通过从边缘位置交付内容来提高性能。这些解决方案共同有助于降低成本而不影响应用程序的性能。

---

## Question 375  `Single answer`

**EN** A startup is running a web application on Amazon EC2 instances in a single Availability Zone. They store user-uploaded files in an Amazon EBS volume attached to one of the instances. The company is experiencing rapid growth and expects their storage needs to scale significantly. They want to improve their application’s availability, reduce costs, and simplify storage management. Which solution is the most cost-optimized and scalable?

**中** 一家初创公司正在单个可用区的 Amazon EC2 实例上运行 Web 应用程序。它们将用户上传的文件存储在附加到其中一个实例的 Amazon EBS 卷中。该公司正在经历快速增长，预计其存储需求将大幅扩展。他们希望提高应用程序的可用性、降低成本并简化存储管理。哪种解决方案成本最优化且可扩展？

- **A.** Move the user-uploaded files to an Amazon S3 bucket and enable S3 Lifecycle policies for cost management.
  - 将用户上传的文件移至 Amazon S3 存储桶并启用 S3 生命周期策略以进行成本管理。
- **B.** Upgrade the Amazon EBS volume to a larger size and replicate it across Availability Zones using snapshots.
  - 将 Amazon EBS 卷升级到更大的大小，并使用快照跨可用区复制它。
- **C.** Move the user-uploaded files to an Amazon EFS file system and configure it for Standard-IA storage class.
  - 将用户上传的文件移动到 Amazon EFS 文件系统并将其配置为 Standard-IA 存储类别。
- **D.** Attach a second Amazon EBS volume to the existing EC2 instance to increase storage capacity.
  - 将第二个 Amazon EBS 卷附加到现有 EC2 实例以增加存储容量。

**正确答案 / Answer: `A`**

Amazon S3 is a highly durable and scalable storage service that is ideal for storing user-uploaded files at a low cost. By enabling S3 Lifecycle policies, the company can further optimize costs by transitioning objects to lower-cost storage classes as they age. This approach also improves availability and eliminates the dependency on a single EC2 instance and EBS volume, making it the most cost-optimized solution.

Amazon S3 是一种高度耐用且可扩展的存储服务，非常适合以低成本存储用户上传的文件。通过启用 S3 生命周期策略，该公司可以在对象老化时将其转换为成本较低的存储类别，从而进一步优化成本。此方法还提高了可用性并消除了对单个 EC2 实例和 EBS 卷的依赖，使其成为成本最优化的解决方案。

---

## Question 376  `Select 3`

**EN** A company is running a fleet of Amazon EC2 instances in an Auto Scaling group to handle its e-commerce application during a seasonal sale. The application experiences highly variable traffic patterns, with significant spikes during flash sales. The company wants to optimize costs while ensuring high availability during peak traffic. Which combination of approaches should the Solutions Architect recommend?

**中** 一家公司在 Auto Scaling 组中运行一组 Amazon EC2 实例，以在季节性销售期间处理其电子商务应用程序。该应用程序的流量模式变化很大，在限时抢购期间流量出现显着峰值。该公司希望优化成本，同时确保高峰流量期间的高可用性。解决方案架构师应该推荐哪种方法组合？

- **A.** Use a combination of On-Demand Instances and Spot Instances in the Auto Scaling group.
  - 在 Auto Scaling 组中使用按需实例和 Spot 实例的组合。
- **B.** Increase the minimum and desired capacity of the Auto Scaling group to handle peak traffic.
  - 增加 Auto Scaling 组的最小容量和所需容量以处理峰值流量。
- **C.** Use Reserved Instances for predictable traffic and Spot Instances for variable traffic.
  - 对于可预测的流量使用预留实例，对于可变流量使用 Spot 实例。
- **D.** Enable Auto Scaling with a scaling policy based on CPU utilization or request count.
  - 使用基于 CPU 利用率或请求计数的扩展策略启用 Auto Scaling。
- **E.** Switch all instances to On-Demand Instances to handle unpredictable traffic.
  - 将所有实例切换为按需实例以处理不可预测的流量。

**正确答案 / Answer: `A, C, D`**

The best cost-optimized strategy for handling highly variable traffic patterns involves using a mix of instance types and leveraging Auto Scaling policies. Reserved Instances are cost-effective for predictable workloads, while Spot Instances provide significant savings for variable workloads that can tolerate interruptions. Auto Scaling ensures the application scales out during peak traffic and scales in during idle times, further optimizing costs. This approach balances cost optimization with high availability.

处理高度可变的流量模式的最佳成本优化策略涉及使用实例类型的组合并利用 Auto Scaling 策略。预留实例对于可预测的工作负载而言具有成本效益，而竞价型实例则可以为可容忍中断的可变工作负载提供显着的节省。 Auto Scaling 可确保应用程序在高峰流量期间横向扩展并在空闲时间期间缩减，从而进一步优化成本。这种方法平衡了成本优化和高可用性。

---

## Question 377  `Single answer`

**EN** A company needs to store a large volume of infrequently accessed log data for regulatory compliance purposes. The log data must be retained for 7 years, and the solution should minimize costs while ensuring data durability. Which storage solution should the company choose?

**中** 公司需要存储大量不经常访问的日志数据以符合法规要求。日志数据必须保留 7 年，解决方案应在保证数据持久性的同时最大限度地降低成本。公司应该选择哪种存储解决方案？

- **A.** Amazon S3 Standard storage class
  - Amazon S3 标准存储类
- **B.** Amazon S3 Glacier Deep Archive storage class
  - Amazon S3 Glacier Deep Archive 存储类
- **C.** Amazon EBS General Purpose SSD (gp3)
  - Amazon EBS 通用 SSD (gp3)
- **D.** Amazon RDS with automated backups
  - Amazon RDS 带自动备份

**正确答案 / Answer: `B`**

To design a cost-optimized storage solution for infrequently accessed data with long-term retention requirements, Amazon S3 Glacier Deep Archive is the best choice. It provides the lowest storage cost in S3 while maintaining high durability, which makes it ideal for long-term archival storage of log data. Other options such as S3 Standard, EBS, and RDS are either too expensive or unsuitable for this specific use case.

要为具有长期保留要求的不常访问的数据设计成本优化的存储解决方案，Amazon S3 Glacier Deep Archive 是最佳选择。它提供了 S3 中最低的存储成本，同时保持了高持久性，这使其成为日志数据长期归档存储的理想选择。其他选项（例如 S3 标准、EBS 和 RDS）要么太昂贵，要么不适合此特定用例。

---

## Question 378  `Single answer`

**EN** A company is running a web application that stores user-uploaded images in Amazon S3. The application frequently accesses recently uploaded images but rarely accesses older images. The company wants to reduce storage costs while ensuring that all images remain accessible when needed. What is the MOST cost-effective solution?

**中** 一家公司正在运行一个 Web 应用程序，该应用程序将用户上传的图像存储在 Amazon S3 中。该应用程序经常访问最近上传的图像，但很少访问较旧的图像。该公司希望降低存储成本，同时确保所有图像在需要时仍可访问。最具成本效益的解决方案是什么？

- **A.** Store all images in the S3 Standard storage class.
  - 将所有图像存储在 S3 标准存储类中。
- **B.** Use S3 Lifecycle policies to transition older images to S3 Glacier Flexible Retrieval.
  - 使用 S3 生命周期策略将旧映像转换为 S3 Glacier 灵活检索。
- **C.** Use S3 Lifecycle policies to transition older images to S3 Standard-IA (Infrequent Access).
  - 使用 S3 生命周期策略将旧映像转换为 S3 Standard-IA（不频繁访问）。
- **D.** Store all images in S3 Intelligent-Tiering.
  - 将所有图像存储在 S3 智能分层中。

**正确答案 / Answer: `C`**

The company wants to reduce storage costs while ensuring that all images remain accessible without delays. Since older images are rarely accessed, transitioning them to S3 Standard-IA using lifecycle policies is the most cost-effective approach. S3 Standard-IA provides lower storage costs than S3 Standard and is optimized for infrequent access while still providing immediate access when needed. Other options either do not provide sufficient cost savings or are not suitable for the application's requirements.

该公司希望降低存储成本，同时确保所有图像均可无延迟地访问。由于旧映像很少被访问，因此使用生命周期策略将它们转换为 S3 Standard-IA 是最具成本效益的方法。 S3 标准-IA 提供比 S3 标准更低的存储成本，并针对不频繁访问进行了优化，同时在需要时仍提供即时访问。其他选项要么不能提供足够的成本节省，要么不适合应用程序的要求。

---

## Question 379  `Single answer`

**EN** A company needs to store large volumes of log data generated by its application. The data will be accessed infrequently but must be retained for compliance purposes for at least 7 years. The company wants a cost-optimized solution that minimizes storage costs while ensuring data durability and availability. Which storage solution should the company use?

**中** 公司需要存储其应用程序生成的大量日志数据。数据不会经常访问，但出于合规目的必须保留至少 7 年。该公司需要一种成本优化的解决方案，最大限度地降低存储成本，同时确保数据的持久性和可用性。公司应该使用哪种存储解决方案？

- **A.** Amazon S3 Standard
  - Amazon S3 标准
- **B.** Amazon S3 Glacier Flexible Retrieval
  - Amazon S3 Glacier 灵活检索
- **C.** Amazon S3 Intelligent-Tiering
  - Amazon S3 智能分层
- **D.** Amazon EBS General Purpose SSD (gp3)
  - Amazon EBS 通用 SSD (gp3)

**正确答案 / Answer: `B`**

Amazon S3 Glacier Flexible Retrieval is the most cost-optimized solution for storing large volumes of infrequently accessed data that needs to be retained for compliance purposes. It provides low-cost storage, high durability, and retrieval options for data that is rarely accessed, making it ideal for the use case described.

Amazon S3 Glacier 灵活检索是成本最优化的解决方案，用于存储出于合规性目的而需要保留的大量不常访问的数据。它为很少访问的数据提供低成本存储、高耐用性和检索选项，使其成为所述用例的理想选择。

---

## Question 380  `Single answer`

**EN** A company is looking to optimize its storage costs for a new data analytics solution. The solution requires storing raw data for analytics in a durable and cost-effective manner. The data will be accessed infrequently for processing but must remain immediately accessible when needed. Which storage solution is the most cost-optimized for this use case?

**中** 一家公司正在寻求优化新数据分析解决方案的存储成本。该解决方案需要以持久且经济高效的方式存储用于分析的原始数据。数据不会经常被访问以进行处理，但必须在需要时保持立即可访问性。对于此用例，哪种存储解决方案成本最优化？

- **A.** Amazon S3 Standard Storage
  - Amazon S3 标准存储
- **B.** Amazon S3 Intelligent-Tiering
  - Amazon S3 智能分层
- **C.** Amazon S3 Standard-IA (Infrequent Access)
  - Amazon S3 标准-IA（不频繁访问）
- **D.** Amazon S3 Glacier Flexible Retrieval
  - Amazon S3 Glacier 灵活检索

**正确答案 / Answer: `C`**

Amazon S3 Standard-IA is the most cost-optimized solution for storing data that is infrequently accessed but still requires immediate retrieval. It provides lower storage costs than S3 Standard and avoids the retrieval delays associated with archival storage like S3 Glacier. While S3 Intelligent-Tiering can also optimize costs, it introduces additional monitoring fees that are unnecessary if the access patterns are already well understood.

Amazon S3 Standard-IA 是成本最优化的解决方案，用于存储不经常访问但仍需要立即检索的数据。它提供比 S3 标准更低的存储成本，并避免与 S3 Glacier 等归档存储相关的检索延迟。虽然 S3 智能分层也可以优化成本，但它会引入额外的监控费用，如果已经充分了解访问模式，则这些费用是不必要的。

---

## Question 381  `Single answer`

**EN** A company is running a two-tier application on AWS. The application consists of a web tier hosted on Amazon EC2 instances behind an Application Load Balancer (ALB) and a database tier hosted on Amazon RDS. The company wants to improve the security of the application by ensuring that all traffic between the web tier and the database tier is encrypted. What is the MOST cost-effective solution to achieve this goal?

**中** 一家公司正在 AWS 上运行一个两层应用程序。该应用程序由托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上的 Web 层和托管在 Amazon RDS 上的数据库层组成。该公司希望通过确保 Web 层和数据库层之间的所有流量都经过加密来提高应用程序的安全性。实现这一目标最具成本效益的解决方案是什么？

- **A.** Enable HTTPS on the Application Load Balancer and use SSL/TLS to encrypt traffic between the web tier and the database tier.
  - 在 Application Load Balancer 上启用 HTTPS 并使用 SSL/TLS 加密 Web 层和数据库层之间的流量。
- **B.** Create a VPC endpoint for Amazon RDS and route all traffic through the VPC endpoint.
  - 为 Amazon RDS 创建 VPC 终端节点并通过 VPC 终端节点路由所有流量。
- **C.** Configure the database on Amazon RDS to use native SSL/TLS for encrypting connections and update the application to connect using SSL/TLS.
  - 配置 Amazon RDS 上的数据库以使用本机 SSL/TLS 加密连接，并更新应用程序以使用 SSL/TLS 进行连接。
- **D.** Migrate the database tier to Amazon DynamoDB, which provides encryption by default.
  - 将数据库层迁移到 Amazon DynamoDB，默认提供加密。

**正确答案 / Answer: `C`**

The most cost-effective and appropriate solution is to configure Amazon RDS to use native SSL/TLS for encrypting database connections. This ensures that all traffic between the web tier and the database tier is encrypted without requiring significant changes or additional costs. Other options either fail to address the encryption requirement or introduce unnecessary complexity.

最经济有效且合适的解决方案是将 Amazon RDS 配置为使用本机 SSL/TLS 来加密数据库连接。这可确保 Web 层和数据库层之间的所有流量都经过加密，无需进行重大更改或额外成本。其他选项要么无法满足加密要求，要么引入不必要的复杂性。

---

## Question 382  `Single answer`

**EN** A company is running a web application that serves dynamic content to users. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). During peak hours, the application experiences high latency and occasional errors when serving requests. The company wants to implement a cost-effective solution to improve performance and availability while reducing the load on the EC2 instances. Which solution should the company implement?

**中** 一家公司正在运行一个为用户提供动态内容的 Web 应用程序。该应用程序托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上。在高峰时段，应用程序在处理请求时会遇到高延迟和偶尔的错误。该公司希望实施一种经济高效的解决方案来提高性能和可用性，同时减少 EC2 实例的负载。公司应该实施哪种解决方案？

- **A.** Enable caching by integrating Amazon CloudFront with the ALB.
  - 通过将 Amazon CloudFront 与 ALB 集成来启用缓存。
- **B.** Switch to a Network Load Balancer (NLB) to improve latency.
  - 切换到 Network Load Balancer (NLB) 以改善延迟。
- **C.** Increase the size and type of EC2 instances behind the ALB.
  - 增加 ALB 背后的 EC2 实例的大小和类型。
- **D.** Deploy an Auto Scaling group to add more EC2 instances during peak hours.
  - 部署 Auto Scaling 组以在高峰时段添加更多 EC2 实例。

**正确答案 / Answer: `A`**

The best solution to improve performance and availability while reducing the load on EC2 instances is to use Amazon CloudFront. CloudFront integrates with the ALB and caches content at edge locations, reducing latency and the number of requests reaching the backend servers. This approach is scalable, cost-effective, and specifically designed for such use cases. Other options either fail to address the caching requirement or are less cost-effective solutions.

提高性能和可用性同时减少 EC2 实例负载的最佳解决方案是使用 Amazon CloudFront。 CloudFront 与 ALB 集成并在边缘位置缓存内容，从而减少延迟和到达后端服务器的请求数量。这种方法具有可扩展性、经济高效，并且专门针对此类用例而设计。其他选项要么无法满足缓存要求，要么是成本效益较低的解决方案。

---

## Question 383  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user-uploaded files in an Amazon S3 bucket. Recently, the company noticed that users are experiencing higher latency while uploading large files. How can the company optimize the application architecture to improve file upload performance?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。该应用程序将用户上传的文件存储在 Amazon S3 存储桶中。最近，该公司注意到用户在上传大文件时遇到较高的延迟。公司如何优化应用架构，提升文件上传性能？

- **A.** Configure the application to upload files directly to Amazon S3 using pre-signed URLs.
  - 配置应用程序以使用预签名 URL 将文件直接上传到 Amazon S3。
- **B.** Increase the size of the EC2 instances behind the Application Load Balancer.
  - 增加 Application Load Balancer 后面的 EC2 实例的大小。
- **C.** Enable S3 Transfer Acceleration for the S3 bucket.
  - 为 S3 存储桶启用 S3 传输加速。
- **D.** Use Amazon CloudFront to cache the uploaded files closer to the users.
  - 使用 Amazon CloudFront 将上传的文件缓存到离用户更近的地方。

**正确答案 / Answer: `A`**

Using pre-signed URLs allows the application to offload file uploads directly to Amazon S3, bypassing the EC2 instances and reducing the load on the backend. This improves scalability and reduces latency for users uploading large files. Other options either do not address the root cause or are not applicable for improving upload performance in this scenario.

使用预签名 URL 允许应用程序将文件上传直接卸载到 Amazon S3，绕过 EC2 实例并减少后端的负载。这提高了可扩展性并减少了用户上传大文件的延迟。其他选项要么无法解决根本原因，要么不适用于提高此场景中的上传性能。

---

## Question 384  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer. The application stores user-uploaded files in an Amazon S3 bucket. Recently, the company noticed that some users are uploading malicious files. How can the company prevent this while minimizing operational overhead?

**中** 一家公司正在 Application Load Balancer 后面的 Amazon EC2 实例上运行 Web 应用程序。该应用程序将用户上传的文件存储在 Amazon S3 存储桶中。近日，该公司注意到一些用户正在上传恶意文件。公司如何防止这种情况发生，同时最大限度地减少运营开销？

- **A.** Use Amazon GuardDuty to scan files in the S3 bucket for malicious content.
  - 使用 Amazon GuardDuty 扫描 S3 存储桶中的文件是否存在恶意内容。
- **B.** Configure an AWS WAF rule to block malicious files during upload.
  - 配置 AWS WAF 规则以阻止上传过程中的恶意文件。
- **C.** Use an S3 Object Lambda function to scan files for malware before they are stored.
  - 使用 S3 对象 Lambda 函数在存储文件之前扫描文件是否存在恶意软件。
- **D.** Integrate the S3 bucket with Amazon Macie to detect and block malicious files.
  - 将 S3 存储桶与 Amazon Macie 集成以检测和阻止恶意文件。

**正确答案 / Answer: `C`**

To prevent malicious files from being uploaded to an S3 bucket, you need a mechanism to inspect files as they are being uploaded. S3 Object Lambda allows for custom processing of uploaded objects, such as malware scanning, ensuring the files meet the required security standards. GuardDuty, WAF, and Macie do not provide direct file scanning capabilities for this use case.

为了防止恶意文件上传到 S3 存储桶，您需要一种在上传文件时检查文件的机制。 S3 Object Lambda 允许对上传的对象进行自定义处理，例如恶意软件扫描，确保文件满足所需的安全标准。 GuardDuty、WAF 和 Macie 不为此用例提供直接文件扫描功能。

---

## Question 385  `Select 2`

**EN** A company is storing large datasets in an Amazon S3 bucket configured with the 'Requester Pays' option. They want to ensure that only certain authorized users can access the bucket and that the cost of data transfer is borne by the requester. How should the company configure the S3 bucket to meet their requirements?

**中** 一家公司将大型数据集存储在配置有“请求者付款”选项的 Amazon S3 存储桶中。他们希望确保只有某些授权用户才能访问存储桶，并且数据传输的成本由请求者承担。公司应该如何配置 S3 存储桶来满足他们的要求？

- **A.** Attach a bucket policy that allows access only to specific IAM users or roles.
  - 附加仅允许特定 IAM 用户或角色访问的存储桶策略。
- **B.** Enable server-side encryption (SSE) for the bucket to ensure secure data transfer.
  - 为存储桶启用服务器端加密（SSE），以确保数据传输安全。
- **C.** Use a bucket policy to explicitly deny access to anonymous users.
  - 使用存储桶策略显式拒绝匿名用户的访问。
- **D.** Ensure the requester includes the 'x-amz-request-payer: requester' header in their API requests.
  - 确保请求者在其 API 请求中包含“x-amz-request-payer: requester”标头。
- **E.** Create an Access Control List (ACL) to grant access to specific users.
  - 创建访问控制列表 (ACL) 以向特定用户授予访问权限。

**正确答案 / Answer: `A, D`**

To properly implement the Requester Pays model, the bucket policy must specify which IAM users or roles are authorized to access the bucket. Additionally, the requester must include the 'x-amz-request-payer: requester' header in their requests to acknowledge responsibility for the data transfer costs. While other options like encryption and ACLs may improve security or control access, they do not directly address the requirements for enforcing the Requester Pays model.

为了正确实施请求者付费模型，存储桶策略必须指定哪些 IAM 用户或角色有权访问存储桶。此外，请求者必须在其请求中包含“x-amz-request-payer：请求者”标头，以确认数据传输费用的责任。虽然加密和 ACL 等其他选项可能会提高安全性或控制访问，但它们并不能直接满足执行请求者付费模型的要求。

---

## Question 386  `Select 2`

**EN** You have been tasked with setting up an S3 bucket for a public dataset that requires the requester to pay for data transfer and request costs. The bucket must be configured to enforce this payment model. Which of the following actions should you take to ensure the setup aligns with the requirements?

**中** 您的任务是为公共数据集设置 S3 存储桶，该数据集要求请求者支付数据传输和请求费用。必须配置存储桶以强制实施此付款模式。您应该采取以下哪些操作来确保设置符合要求？

- **A.** Enable the 'Requester Pays' option on the S3 bucket.
  - 在 S3 存储桶上启用“请求者付款”选项。
- **B.** Attach an IAM policy to the bucket that denies access to any user who does not agree to pay for requests.
  - 将 IAM 策略附加到存储桶，拒绝任何不同意为请求付费的用户的访问。
- **C.** Ensure the objects in the bucket are publicly accessible using an appropriate bucket policy.
  - 确保使用适当的存储桶策略可公开访问存储桶中的对象。
- **D.** Notify requesters that they must use authenticated requests to access the data in the bucket.
  - 通知请求者必须使用经过身份验证的请求来访问存储桶中的数据。
- **E.** Set up S3 Transfer Acceleration for faster data transfer to requesters.
  - 设置 S3 传输加速以更快地向请求者传输数据。

**正确答案 / Answer: `A, D`**

To configure an S3 bucket with the 'Requester Pays' model, you must enable the 'Requester Pays' option on the bucket. This ensures the requester is billed for data transfer and request costs. Additionally, requesters must authenticate their API requests to allow AWS to track usage and apply charges to the requester. Other configurations like making objects public or enabling S3 Transfer Acceleration are not relevant to enforcing the 'Requester Pays' model.

要使用“请求者付款”模型配置 S3 存储桶，您必须在存储桶上启用“请求者付款”选项。这可确保请求者支付数据传输和请求费用。此外，请求者必须验证其 API 请求，以允许 AWS 跟踪使用情况并向请求者收取费用。其他配置（例如公开对象或启用 S3 传输加速）与强制执行“请求者付费”模型无关。

---

## Question 387  `Single answer`

**EN** A company wants to share a large dataset stored in an Amazon S3 bucket with external researchers. To manage costs, they want the researchers to pay for the data transfer and request costs when accessing the objects. How should the company configure the S3 bucket to meet these requirements?

**中** 一家公司希望与外部研究人员共享存储在 Amazon S3 存储桶中的大型数据集。为了管理成本，他们希望研究人员在访问对象时支付数据传输和请求成本。公司应该如何配置 S3 存储桶来满足这些要求？

- **A.** Enable the 'Requester Pays' option on the S3 bucket and share the bucket's ARN with the researchers.
  - 在 S3 存储桶上启用“请求者付款”选项，并与研究人员共享存储桶的 ARN。
- **B.** Enable the 'Requester Pays' option on the S3 bucket and share the bucket's name with the researchers.
  - 在 S3 存储桶上启用“请求者付款”选项，并与研究人员共享存储桶的名称。
- **C.** Configure bucket policies to restrict access to specific researchers and enable 'Requester Pays' on the S3 bucket.
  - 配置存储桶策略以限制特定研究人员的访问并在 S3 存储桶上启用“请求者付费”。
- **D.** Enable the 'Requester Pays' option on the S3 bucket and ensure the researchers authenticate before accessing the data.
  - 在 S3 存储桶上启用“请求者付费”选项，并确保研究人员在访问数据之前进行身份验证。

**正确答案 / Answer: `D`**

The 'Requester Pays' option in Amazon S3 is designed to shift the cost of data transfer and request operations to the requester rather than the bucket owner. However, for this to work, the requester must authenticate to AWS so that their account can be billed. Simply sharing the bucket name or ARN is not sufficient without ensuring the requester is authenticated.

Amazon S3 中的“请求者付费”选项旨在将数据传输和请求操作的成本转移给请求者而不是存储桶所有者。但是，为此，请求者必须向 AWS 进行身份验证，以便可以对其帐户进行计费。如果不确保请求者经过身份验证，仅共享存储桶名称或 ARN 是不够的。

---

## Question 388  `Select 2`

**EN** A company has a large dataset stored in an S3 bucket configured with the 'Requester Pays' feature. They want to share this dataset with external researchers who will download the data. Which of the following must the company ensure to allow researchers to access the data?

**中** 一家公司在配置了“请求者付款”功能的 S3 存储桶中存储了一个大型数据集。他们希望与下载数据的外部研究人员共享该数据集。公司必须确保以下哪项允许研究人员访问数据？

- **A.** The researchers must include the 'x-amz-request-payer' header in their requests.
  - 研究人员必须在其请求中包含“x-amz-request-payer”标头。
- **B.** The bucket policy must explicitly allow access to the researchers' IAM roles or users.
  - 存储桶策略必须明确允许访问研究人员的 IAM 角色或用户。
- **C.** The company must enable versioning on the S3 bucket.
  - 公司必须在 S3 存储桶上启用版本控制。
- **D.** The researchers must have an AWS account to access the bucket.
  - 研究人员必须拥有 AWS 帐户才能访问该存储桶。
- **E.** The company must use a signed URL to grant access to the objects in the bucket.
  - 公司必须使用签名 URL 来授予对存储桶中对象的访问权限。

**正确答案 / Answer: `A, B`**

To allow access to an S3 bucket with the 'Requester Pays' feature, requesters must include the 'x-amz-request-payer' header to confirm they accept the charges. Additionally, the bucket policy must explicitly permit access to the researchers' IAM roles, users, or other credentials. Other options, such as enabling versioning or requiring signed URLs, are not directly relevant to this use case.

要允许通过“请求者付款”功能访问 S3 存储桶，请求者必须包含“x-amz-request-payer”标头以确认他们接受费用。此外，存储桶策略必须明确允许访问研究人员的 IAM 角色、用户或其他凭证。其他选项（例如启用版本控制或要求签名 URL）与此用例不直接相关。

---

## Question 389  `Select 3`

**EN** Your company has a multi-account AWS environment managed through AWS Organizations. As a Solutions Architect, you are tasked with implementing a cost management strategy that allows you to identify the costs incurred by different projects within your organization. Each AWS account is associated with multiple projects, and you need a way to track costs across accounts for individual projects. Which combination of features should you use?

**中** 您的公司拥有通过 AWS Organizations 管理的多账户 AWS 环境。作为解决方案架构师，您的任务是实施成本管理策略，使您能够识别组织内不同项目产生的成本。每个 AWS 账户都与多个项目关联，您需要一种方法来跟踪各个项目的跨账户成本。您应该使用哪种功能组合？

- **A.** Enable cost allocation tags and assign them to resources associated with each project.
  - 启用成本分配标签并将其分配给与每个项目关联的资源。
- **B.** Activate the AWS Cost and Usage Report (CUR) to get detailed cost insights across all accounts.
  - 激活 AWS 成本和使用情况报告 (CUR) 以获取所有账户的详细成本洞察。
- **C.** Use consolidated billing in AWS Organizations to combine usage and costs across accounts.
  - 使用 AWS Organizations 中的合并计费来合并跨帐户的使用量和成本。
- **D.** Create separate AWS accounts for each project and enable cost allocation tags.
  - 为每个项目创建单独的 AWS 账户并启用成本分配标签。
- **E.** Use AWS Budgets to set spending limits for each project.
  - 使用 AWS 预算设置每个项目的支出限额。

**正确答案 / Answer: `A, B, C`**

To effectively manage costs across a multi-account structure and track spending by project, you need to enable cost allocation tags to categorize costs, use the AWS Cost and Usage Report for detailed insights, and leverage consolidated billing to aggregate costs across accounts. These features together provide the tools necessary for comprehensive cost management and project-level tracking.

为了有效管理跨多账户结构的成本并按项目跟踪支出，您需要启用成本分配标签来对成本进行分类，使用 AWS 成本和使用情况报告获取详细见解，并利用合并账单来汇总跨账户的成本。这些功能共同提供了全面成本管理和项目级跟踪所需的工具。

---

## Question 390  `Select 3`

**EN** Your organization has multiple AWS accounts and you want to track costs for different projects across these accounts. You also need to generate detailed cost reports that include specific resource usage information. Which combination of AWS features will help you achieve this?

**中** 您的组织拥有多个 AWS 账户，并且您希望跟踪这些账户中不同项目的成本。您还需要生成包含特定资源使用信息的详细成本报告。哪种 AWS 功能组合可以帮助您实现这一目标？

- **A.** Enable consolidated billing using AWS Organizations
  - 使用 AWS Organizations 启用合并计费
- **B.** Use cost allocation tags to categorize resources
  - 使用成本分配标签对资源进行分类
- **C.** Create a Cost and Usage Report (CUR)
  - 创建成本和使用情况报告 (CUR)
- **D.** Enable AWS Trusted Advisor for cost optimization recommendations
  - 启用 AWS Trusted Advisor 以获取成本优化建议
- **E.** Use AWS Cost Anomaly Detection to monitor unusual spending patterns
  - 使用 AWS 成本异常检测来监控异常支出模式

**正确答案 / Answer: `A, B, C`**

To track costs for different projects across multiple AWS accounts, you can use consolidated billing to centralize billing and cost management. Cost allocation tags allow you to categorize and track resources by project or other criteria. The Cost and Usage Report (CUR) provides the detailed usage and cost data required for generating comprehensive reports. While AWS Trusted Advisor and Cost Anomaly Detection are useful for cost optimization and monitoring, they do not directly facilitate project-specific cost tracking or detailed reporting.

要跟踪多个 AWS 账户中不同项目的成本，您可以使用合并计费来集中计费和成本管理。成本分配标签允许您按项目或其他条件对资源进行分类和跟踪。成本和使用情况报告 (CUR) 提供生成综合报告所需的详细使用情况和成本数据。虽然 AWS Trusted Advisor 和成本异常检测对于成本优化和监控很有用，但它们并不能直接促进特定于项目的成本跟踪或详细报告。

---

## Question 391  `Select 3`

**EN** A company uses AWS Organizations with multiple accounts for different departments. The finance team wants to track AWS costs by department and environment (e.g., production, development) across all accounts. Which combination of AWS Cost Management features should the company use to achieve this?

**中** 某公司使用 AWS Organizations，为不同部门提供多个账户。财务团队希望按部门和环境（例如生产、开发）跟踪所有账户的 AWS 成本。公司应使用哪种 AWS 成本管理功能组合来实现这一目标？

- **A.** Enable cost allocation tags and define tags for department and environment.
  - 启用成本分配标签并为部门和环境定义标签。
- **B.** Use AWS Budgets to set spending limits for each department.
  - 使用 AWS 预算设置每个部门的支出限额。
- **C.** Enable consolidated billing in AWS Organizations.
  - 在 AWS Organizations 中启用合并计费。
- **D.** Use the AWS Cost and Usage Report (CUR) to analyze tagged resources and costs.
  - 使用 AWS 成本和使用情况报告 (CUR) 分析标记的资源和成本。
- **E.** Set up AWS Savings Plans to reduce overall costs.
  - 设置 AWS Savings Plans 以降低总体成本。

**正确答案 / Answer: `A, C, D`**

To track AWS costs by department and environment in a multi-account setup, the company should use a combination of cost allocation tags, consolidated billing, and the AWS Cost and Usage Report (CUR). Cost allocation tags categorize resources, consolidated billing aggregates costs across accounts, and CUR provides detailed insights into tagged costs. AWS Budgets and Savings Plans, while useful for cost control and optimization, are not relevant for this specific use case.

要在多账户设置中按部门和环境跟踪 AWS 成本，公司应结合使用成本分配标签、合并账单以及 AWS 成本和使用情况报告 (CUR)。成本分配标签对资源进行分类，整合计费汇总跨账户的成本，CUR 提供对标记成本的详细洞察。 AWS 预算和节省计划虽然对于成本控制和优化很有用，但与此特定用例无关。

---

## Question 392  `Select 3`

**EN** A company has multiple AWS accounts under an AWS Organizations structure and wants to manage its cloud costs effectively. They require the ability to allocate costs to specific teams, analyze spending trends across accounts, and identify unused resources. Which combination of AWS Cost Management features would best fulfill these requirements?

**中** 一家公司在 AWS Organizations 结构下拥有多个 AWS 账户，并且希望有效管理其云成本。他们需要能够将成本分配给特定团队、分析各个账户的支出趋势以及识别未使用的资源。哪种 AWS 成本管理功能组合最能满足这些要求？

- **A.** Enable cost allocation tags to categorize costs by team or application
  - 启用成本分配标签以按团队或应用程序对成本进行分类
- **B.** Use AWS Cost Explorer to analyze spending trends and identify unused resources
  - 使用 AWS Cost Explorer 分析支出趋势并识别未使用的资源
- **C.** Set up consolidated billing within AWS Organizations to view all accounts' costs in one place
  - 在 AWS Organizations 中设置合并计费，以便在一处查看所有帐户的成本
- **D.** Enable Trusted Advisor to receive recommendations for rightsizing resources
  - 使 Trusted Advisor 能够接收有关调整资源规模的建议
- **E.** Use AWS Budgets to enforce spending limits for each account
  - 使用 AWS Budgets 强制执行每个账户的支出限制

**正确答案 / Answer: `A, B, C`**

To effectively manage costs in a multi-account scenario, the company should use cost allocation tags to categorize expenses by team or application, AWS Cost Explorer to analyze spending trends and find unused resources, and consolidated billing within AWS Organizations to aggregate and monitor costs across all accounts. These features together provide comprehensive cost management capabilities tailored to the company's requirements.

为了有效管理多账户场景中的成本，公司应使用成本分配标签按团队或应用程序对费用进行分类，使用 AWS Cost Explorer 来分析支出趋势并查找未使用的资源，并使用 AWS Organizations 中的整合账单来汇总和监控所有账户的成本。这些功能共同提供了适合公司需求的全面成本管理功能。

---

## Question 393  `Select 3`

**EN** An e-commerce company uses various AWS services and has noticed a sudden spike in their monthly AWS bill. They want to analyze the cost increase, identify the specific services contributing to the spike, and set up alerts to avoid unexpected expenses in the future. Which AWS tools should they use to achieve these goals?

**中** 一家电子商务公司使用各种 AWS 服务，并注意到其每月的 AWS 账单突然激增。他们希望分析成本增加，确定导致成本激增的具体服务，并设置警报以避免未来出现意外费用。他们应该使用哪些 AWS 工具来实现这些目标？

- **A.** AWS Cost Explorer to analyze the cost increase and identify specific services contributing to the spike.
  - AWS Cost Explorer 用于分析成本增加并确定导致成本激增的特定服务。
- **B.** AWS Budgets to set up alerts for future cost thresholds to avoid unexpected expenses.
  - AWS 预算为未来成本阈值设置警报，以避免意外支出。
- **C.** AWS Cost Anomaly Detection to analyze historical costs and generate detailed daily reports.
  - AWS 成本异常检测可分析历史成本并生成详细的每日报告。
- **D.** AWS Cost and Usage Report to get detailed usage and billing data for further analysis.
  - AWS 成本和使用情况报告，获取详细的使用情况和计费数据以进行进一步分析。
- **E.** AWS Trusted Advisor to identify underutilized resources and optimize costs.
  - AWS Trusted Advisor 用于识别未充分利用的资源并优化成本。

**正确答案 / Answer: `A, B, D`**

To address the company's requirements, AWS Cost Explorer is used to analyze and visualize the cost increase, AWS Budgets is used to set up alerts for future cost thresholds, and AWS Cost and Usage Report is used for granular data analysis. Combining these tools helps the company analyze the cost spike effectively and proactively manage future expenses. AWS Cost Anomaly Detection and AWS Trusted Advisor, while useful for cost management, do not directly address the stated requirements.

为了满足公司的需求，AWS Cost Explorer 用于分析和可视化成本增加，AWS Budgets 用于设置未来成本阈值警报，AWS Cost and 使用报告用于精细数据分析。结合这些工具可以帮助公司有效分析成本峰值并主动管理未来的费用。 AWS 成本异常检测和 AWS Trusted Advisor 虽然对于成本管理很有用，但不能直接满足规定的要求。

---

## Question 394  `Select 3`

**EN** A startup company has recently migrated its applications to AWS and wants to maintain control over its cloud spend. The company needs to:
Which combination of AWS cost management tools should the company use to meet these requirements?

**中** 一家初创公司最近将其应用程序迁移到 AWS，并希望保持对其云支出的控制。公司需要：
公司应使用哪种 AWS 成本管理工具组合来满足这些要求？

- **A.** AWS Cost Explorer to monitor monthly costs and usage trends, and AWS Budgets to set up automated alerts.
  - AWS Cost Explorer 用于监控每月成本和使用趋势，AWS Budgets 用于设置自动警报。
- **B.** AWS Cost Explorer to generate detailed usage reports and AWS Budgets to set up automated alerts.
  - AWS Cost Explorer 用于生成详细的使用情况报告和 AWS 预算以设置自动警报。
- **C.** AWS Cost and Usage Report to generate detailed usage reports and AWS Cost Explorer to monitor monthly costs and trends.
  - AWS 成本和使用情况报告可生成详细的使用情况报告，AWS Cost Explorer 可监控每月成本和趋势。
- **D.** AWS Budgets to monitor costs and usage trends, and AWS Cost and Usage Report to set up automated alerts.
  - 用于监控成本和使用趋势的 AWS 预算，以及用于设置自动警报的 AWS 成本和使用情况报告。
- **E.** AWS Cost Explorer to monitor costs and usage trends, AWS Budgets to set up automated alerts, and AWS Cost and Usage Report to generate detailed usage reports.
  - 用于监控成本和使用趋势的 AWS Cost Explorer、用于设置自动警报的 AWS Budgets 以及用于生成详细使用情况报告的 AWS 成本和使用情况报告。

**正确答案 / Answer: `A, C, E`**

To meet all the requirements, the company should use a combination of AWS Cost Explorer to monitor monthly costs and trends, AWS Budgets to set up automated alerts for cost thresholds, and AWS Cost and Usage Report to generate detailed reports about AWS usage. Each tool serves a specific purpose, and together they provide a comprehensive cost management solution.

为了满足所有要求，公司应结合使用 AWS Cost Explorer 来监控每月成本和趋势，使用 AWS Budgets 来设置成本阈值自动警报，并使用 AWS 成本和使用情况报告来生成有关 AWS 使用情况的详细报告。每个工具都有特定的用途，它们一起提供全面的成本管理解决方案。

---

## Question 395  `Select 3`

**EN** A company has recently migrated its workloads to AWS and wants to monitor and manage its monthly cloud costs effectively. They need to forecast future costs, set up alerts based on budget thresholds, and analyze detailed usage patterns. Which combination of AWS cost management tools should they use to meet these requirements?

**中** 一家公司最近将其工作负载迁移到 AWS，并希望有效监控和管理其每月的云成本。他们需要预测未来成本，根据预算阈值设置警报，并分析详细的使用模式。他们应该使用哪种 AWS 成本管理工具组合来满足这些要求？

- **A.** AWS Cost Explorer
  - AWS 成本管理器
- **B.** AWS Budgets
  - AWS 预算
- **C.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **D.** AWS Cost and Usage Report
  - AWS 成本和使用情况报告
- **E.** Amazon CloudWatch
  - Amazon CloudWatch

**正确答案 / Answer: `A, B, D`**

The combination of AWS Cost Explorer, AWS Budgets, and AWS Cost and Usage Report addresses the company's requirements effectively. AWS Cost Explorer provides tools for cost analysis and forecasting, AWS Budgets allows for setting budget thresholds and receiving alerts, and AWS Cost and Usage Report offers granular usage data for in-depth analysis. Trusted Advisor and CloudWatch are not directly relevant to the specific cost management needs described in the scenario.

AWS Cost Explorer、AWS Budgets 以及 AWS 成本和使用情况报告的组合有效地满足了公司的需求。 AWS Cost Explorer 提供用于成本分析和预测的工具，AWS Budgets 允许设置预算阈值和接收警报，AWS 成本和使用情况报告提供精细的使用数据以进行深入分析。 Trusted Advisor 和 CloudWatch 与场景中描述的特定成本管理需求没有直接关系。

---

## Question 396  `Select 2`

**EN** A company wants to monitor its monthly AWS spending and ensure it does not exceed a defined budget. The team also wants to visualize historical cost trends and forecast future spending based on past usage patterns. Which combination of AWS cost management tools should the company use?

**中** 一家公司希望监控其每月的 AWS 支出并确保其不超出既定预算。该团队还希望可视化历史成本趋势并根据过去的使用模式预测未来的支出。公司应使用哪种 AWS 成本管理工具组合？

- **A.** AWS Budgets to set spending thresholds and get alerts if spending exceeds the budget
  - AWS 预算用于设置支出阈值并在支出超出预算时收到警报
- **B.** AWS Cost Explorer to analyze historical spending and forecast future costs
  - AWS Cost Explorer 用于分析历史支出并预测未来成本
- **C.** AWS Trusted Advisor to identify cost optimization opportunities
  - AWS Trusted Advisor 识别成本优化机会
- **D.** AWS Cost and Usage Report to provide granular cost and usage data for detailed analysis
  - AWS 成本和使用情况报告可提供精细的成本和使用数据以进行详细分析
- **E.** AWS Savings Plans to automatically reduce costs for specific workloads
  - AWS Savings Plans 可自动降低特定工作负载的成本

**正确答案 / Answer: `A, B`**

In this scenario, the company needs to both monitor its spending against a budget and analyze past costs to forecast future expenses. AWS Budgets is the appropriate tool for setting spending thresholds and receiving alerts, while AWS Cost Explorer provides the necessary visualization and forecasting capabilities. Together, these tools fulfill the company's requirements effectively.

在这种情况下，公司需要根据预算监控其支出，并分析过去的成本以预测未来的支出。 AWS Budgets 是设置支出阈值和接收警报的适当工具，而 AWS Cost Explorer 提供必要的可视化和预测功能。这些工具共同有效地满足了公司的要求。

---

## Question 397  `Single answer`

**EN** A company is designing a new application that requires low-latency shared file storage for multiple Amazon EC2 instances running in a VPC. The application will process a high volume of data in parallel and needs to support file-level access with strong consistency. Which AWS storage service is the most appropriate for this use case?

**中** 一家公司正在设计一个新应用程序，该应用程序需要为 VPC 中运行的多个 Amazon EC2 实例提供低延迟共享文件存储。应用程序将并行处理大量数据，需要支持强一致性的文件级访问。哪种 AWS 存储服务最适合此用例？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EFS
  - Amazon EFS
- **C.** Amazon FSx for Lustre
  - Amazon FSx 光泽
- **D.** Amazon EBS
  - Amazon EBS

**正确答案 / Answer: `B`**

Amazon EFS is the best choice for this use case because it is designed to provide low-latency, shared file storage for multiple EC2 instances. It supports file-level access, strong consistency, and is highly scalable, making it ideal for applications that process large volumes of data in parallel. Other options, such as Amazon S3 and Amazon EBS, do not meet the requirement for shared file storage, and Amazon FSx for Lustre is better suited for specialized high-throughput workloads.

Amazon EFS 是此用例的最佳选择，因为它旨在为多个 EC2 实例提供低延迟、共享文件存储。它支持文件级访问，强一致性，并且具有高度可扩展性，非常适合并行处理大量数据的应用程序。其他选项（例如 Amazon S3 和 Amazon EBS）无法满足共享文件存储的要求，而 Amazon FSx for Lustre 更适合专门的高吞吐量工作负载。

---

## Question 398  `Single answer`

**EN** A company is running a web application that allows users to upload and share high-resolution images. The application needs to store these images, ensure they are highly available, and provide automatic scaling to handle variable traffic. Additionally, the company wants to minimize costs while ensuring durability of the data. Which AWS storage service is the most appropriate for this use case?

**中** 一家公司正在运行一个 Web 应用程序，允许用户上传和共享高分辨率图像。应用程序需要存储这些图像，确保它们具有高可用性，并提供自动缩放以处理可变流量。此外，该公司希望在确保数据持久性的同时最大限度地降低成本。哪种 AWS 存储服务最适合此用例？

- **A.** Amazon EFS
  - Amazon EFS
- **B.** Amazon S3
  - Amazon S3
- **C.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器
- **D.** Amazon EBS
  - Amazon EBS

**正确答案 / Answer: `B`**

Amazon S3 is the best choice for this scenario because it is an object storage service that provides high durability, availability, and scalability. It is designed to handle variable traffic patterns and is cost-effective for storing large amounts of data, such as high-resolution images. Other options, such as Amazon EFS, FSx, and EBS, are more suited for specific use cases like shared file storage or block storage for EC2 instances, but they are not optimized for scalable and cost-effective object storage.

Amazon S3 是该场景的最佳选择，因为它是一种提供高持久性、可用性和可扩展性的对象存储服务。它旨在处理可变的流量模式，并且对于存储大量数据（例如高分辨率图像）具有成本效益。其他选项（例如 Amazon EFS、FSx 和 EBS）更适合特定用例，例如 EC2 实例的共享文件存储或块存储，但它们并未针对可扩展且经济高效的对象存储进行优化。

---

## Question 399  `Single answer`

**EN** A company needs to set up a shared file system for its application servers to store and access configuration files and logs. The file system must support multiple EC2 instances accessing the data concurrently, and the data must be accessible from multiple Availability Zones within a single AWS Region. Which AWS storage service should the company choose?

**中** 某公司需要为其应用服务器建立一个共享文件系统，用于存储和访问配置文件和日志。文件系统必须支持多个 EC2 实例同时访问数据，并且数据必须可从单个 AWS 区域内的多个可用区访问。公司应该选择哪种 AWS 存储服务？

- **A.** Amazon Elastic File System (Amazon EFS)
  - 亚马逊弹性文件系统 (Amazon EFS)
- **B.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器
- **C.** Amazon Simple Storage Service (Amazon S3)
  - 亚马逊简单存储服务 (Amazon S3)
- **D.** Amazon Elastic Block Store (Amazon EBS)
  - 亚马逊弹性块存储 (Amazon EBS)

**正确答案 / Answer: `A`**

Amazon EFS is the best option for this scenario because it provides a shared file system that supports concurrent access from multiple EC2 instances and multiple Availability Zones. The other options either do not support the required functionality (like Amazon S3 and Amazon EBS) or are optimized for specific use cases (like Amazon FSx for Windows File Server).

Amazon EFS 是该场景的最佳选择，因为它提供了支持多个 EC2 实例和多个可用区并发访问的共享文件系统。其他选项要么不支持所需的功能（如 Amazon S3 和 Amazon EBS），要么针对特定用例进行了优化（如用于 Windows 文件服务器的 Amazon FSx）。

---

## Question 400  `Single answer`

**EN** A company needs to store large volumes of unstructured data such as images and videos for its content streaming application. The data should be highly durable, cost-effective, and accessible over the internet. Additionally, the company plans to implement lifecycle policies to move infrequently accessed data to a lower-cost storage tier automatically. Which AWS storage service is the most appropriate for this use case?

**中** 公司需要为其内容流应用程序存储大量非结构化数据，例如图像和视频。数据应该高度耐用、具有成本效益，并且可以通过互联网访问。此外，该公司计划实施生命周期策略，将不经常访问的数据自动转移到成本较低的存储层。哪种 AWS 存储服务最适合此用例？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EFS
  - Amazon EFS
- **C.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器
- **D.** Amazon EBS
  - Amazon EBS

**正确答案 / Answer: `A`**

Amazon S3 is the best choice for this scenario as it is specifically designed for storing unstructured data at scale, offers high durability, and allows internet accessibility. Additionally, S3 supports lifecycle management to move data to lower-cost tiers automatically, aligning with the company's requirements. The other options, EFS, FSx, and EBS, are not well-suited for storing large volumes of unstructured, internet-accessible data or do not provide cost-effective storage for this use case.

Amazon S3 是此场景的最佳选择，因为它专为大规模存储非结构化数据而设计，具有高耐用性并允许互联网访问。此外，S3 支持生命周期管理，自动将数据移动到成本较低的层，从而符合公司的要求。其他选项（EFS、FSx 和 EBS）不太适合存储大量非结构化、可通过 Internet 访问的数据，或者无法为此用例提供经济高效的存储。

---

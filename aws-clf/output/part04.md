# AWS CLF-C02 练习卷 · 第 04 套

> 50 题 · 中英对照 · 练习题来源为 MIT 许可的 CloudCertPrep；非 AWS 官方题目。中文为机器翻译。

## Question 1 · Domain 3

**EN** Which AWS service automatically discovers and catalogs metadata from various data sources and can generate ETL scripts for data transformation?

**中** 哪种 AWS 服务可以自动发现和编目来自各种数据源的元数据，并可以生成用于数据转换的 ETL 脚本？

- **A.** Amazon Athena
  - 亚马逊雅典娜
- **B.** AWS Glue
  - AWS Glue
- **C.** Amazon Redshift Spectrum
  - Amazon Redshift 光谱
- **D.** AWS Lake Formation
  - AWS 湖组

**答案 / Answer: `B`**

AWS Glue automatically discovers and catalogs metadata from data sources using crawlers that populate the Glue Data Catalog, and can generate and run ETL scripts to transform data for analytics workloads.
Amazon Athena is a serverless query service that analyzes data stored in Amazon S3 using SQL, and relies on the Glue Data Catalog as its metadata store rather than performing discovery or ETL itself. Amazon Redshift Spectrum is a feature of Amazon Redshift that enables querying data stored in S3 directly from Redshift without loading it, and is a query extension rather than a metadata discovery or ETL service. AWS Lake Formation is a service for building, securing, and managing data lakes on AWS, and while it uses the Glue Data Catalog, it is focused on data lake governance rather than automated metadata discovery or ETL script generation.

AWS Glue 使用填充 Glue 数据目录的爬虫自动发现数据源中的元数据并对其进行编目，并且可以生成和运行 ETL 脚本来转换分析工作负载的数据。
Amazon Athena 是一种无服务器查询服务，它使用 SQL 分析 Amazon S3 中存储的数据，并依赖 Glue 数据目录作为其元数据存储，而不是自行执行发现或 ETL。 Amazon Redshift Spectrum 是 Amazon Redshift 的一项功能，可以直接从 Redshift 查询存储在 S3 中的数据，而无需加载它，它是一个查询扩展，而不是元数据发现或 ETL 服务。 AWS Lake Formation 是一项用于在 AWS 上构建、保护和管理数据湖的服务，虽然它使用 Glue 数据目录，但它专注于数据湖治理，而不是自动元数据发现或 ETL 脚本生成。

---

## Question 2 · Domain 2

**EN** Which AWS service allows users to download security and compliance reports about the AWS infrastructure on demand?

**中** 哪种 AWS 服务允许用户按需下载有关 AWS 基础设施的安全性和合规性报告？

- **A.** Amazon GuardDuty
  - 亚马逊 GuardDuty
- **B.** AWS Security Hub
  - AWS 安全中心
- **C.** AWS Artifact
  - AWS Artifact
- **D.** AWS Shield
  - AWS Shield

**答案 / Answer: `C`**

AWS Artifact provides on-demand access to AWS security and compliance reports including SOC, PCI DSS, ISO, and HIPAA documentation, available for download directly from the AWS Management Console without contacting AWS.
Amazon CloudWatch monitors operational metrics and logs for AWS resources and applications, and is an observability and alerting service rather than a repository of AWS security and compliance reports. AWS CloudTrail records all API calls and management events across an AWS account for auditing purposes, and produces customer-specific activity logs rather than AWS security certification and compliance documentation. Amazon GuardDuty is a threat detection service that continuously monitors accounts and workloads for malicious activity, and is a real-time security monitoring service rather than a source of downloadable compliance reports.

AWS Artifact 提供对 AWS 安全性和合规性报告的按需访问，包括 SOC、PCI DSS、ISO 和 HIPAA 文档，这些文档可直接从 AWS 管理控制台下载，无需联系 AWS。
Amazon CloudWatch 监控 AWS 资源和应用程序的操作指标和日志，并且是一项可观察性和警报服务，而不是 AWS 安全性和合规性报告的存储库。 AWS CloudTrail 记录 AWS 账户中的所有 API 调用和管理事件以用于审计目的，并生成客户特定的活动日志，而不是 AWS 安全认证和合规性文档。 Amazon GuardDuty 是一项威胁检测服务，可持续监控账户和工作负载是否存在恶意活动，并且是一项实时安全监控服务，而不是可下载合规性报告的来源。

---

## Question 3 · Domain 1

**EN** Which AWS service is designed specifically to migrate databases from on-premises to AWS, supporting both same-engine and cross-engine migrations?

**中** 哪种 AWS 服务专门用于将数据库从本地迁移到 AWS，同时支持同引擎和跨引擎迁移？

- **A.** AWS Application Migration Service
  - AWS 应用程序迁移服务
- **B.** AWS Schema Conversion Tool
  - AWS 架构转换工具
- **C.** AWS Database Migration Service (AWS DMS)
  - AWS 数据库迁移服务 (AWS DMS)
- **D.** AWS DataSync
  - AWS 数据同步

**答案 / Answer: `C`**

AWS Database Migration Service supports continuous data replication from on-premises databases to AWS with minimal downtime, handling both homogeneous migrations where the source and target engines are the same and heterogeneous migrations where the engines differ.
AWS Application Migration Service migrates entire servers including the operating system and applications to AWS, but it is not designed for database-specific migrations that require data replication and schema handling. AWS Schema Conversion Tool converts database schemas and stored procedures from one engine to another to support heterogeneous migrations, but it handles schema conversion rather than the actual data migration itself. AWS DataSync automates data transfers between on-premises storage systems and AWS storage services such as S3 and EFS, but it is a file-based data movement service not designed for database migration.

AWS Database Migration Service 支持从本地数据库到 AWS 的连续数据复制，并且停机时间最短，可处理源引擎和目标引擎相同的同构迁移以及引擎不同的异构迁移。
AWS Application Migration Service 将包括操作系统和应用程序在内的整个服务器迁移到 AWS，但它并不是为需要数据复制和架构处理的特定于数据库的迁移而设计的。 AWS Schema Conversion Tool 将数据库架构和存储过程从一种引擎转换为另一种引擎以支持异构迁移，但它处理架构转换而不是实际的数据迁移本身。 AWS DataSync 可自动在本地存储系统与 S3 和 EFS 等 AWS 存储服务之间进行数据传输，但它是一种基于文件的数据移动服务，并非专为数据库迁移而设计。

---

## Question 4 · Domain 2

**EN** Under the AWS shared responsibility model, the security and patching of the guest operating system is the responsibility of:

**中** 在 AWS 共担责任模型下，来宾操作系统的安全性和修补由以下人员负责：

- **A.** AWS Support
  - AWS Support
- **B.** The customer
  - 客户
- **C.** AWS Systems Manager
  - AWS 系统经理
- **D.** AWS Config
  - AWS Config

**答案 / Answer: `B`**

Under the Shared Responsibility Model, the customer is responsible for security and patching of the guest operating system on EC2 instances, including applying security updates and configuring the OS, as AWS only manages the infrastructure beneath the hypervisor.
AWS Support provides technical assistance and guidance to customers experiencing issues with their AWS environment, but is not responsible for patching or securing operating systems on customer instances. AWS Systems Manager can assist customers in automating patch management tasks on EC2 instances, but it is a tool that helps customers fulfill their own patching responsibility rather than shifting that responsibility to AWS. AWS Config records and evaluates configuration changes to AWS resources for compliance purposes, and does not perform or take responsibility for operating system patching on EC2 instances.

在共享责任模型下，客户负责 EC2 实例上的来宾操作系统的安全性和修补，包括应用安全更新和配置操作系统，因为 AWS 仅管理虚拟机管理程序下的基础设施。
AWS Support 为在 AWS 环境中遇到问题的客户提供技术帮助和指导，但不负责修补或保护客户实例上的操作系统。 AWS Systems Manager 可以帮助客户在 EC2 实例上自动执行补丁管理任务，但它是一个帮助客户履行自己的补丁责任而不是将该责任转移给 AWS 的工具。 AWS Config 出于合规性目的记录和评估对 AWS 资源的配置更改，并且不执行也不负责对 EC2 实例进行操作系统修补。

---

## Question 5 · Domain 3

**EN** Which Amazon S3 storage class is optimized to provide access to data with lower resiliency requirements, but rapid access when needed such as duplicate backups?

**中** 哪种 Amazon S3 存储类别经过优化，可以提供对弹性要求较低的数据的访问，但在需要时（例如重复备份）可以快速访问？

- **A.** Amazon S3 Standard
  - Amazon S3 标准型
- **B.** Amazon S3 Glacier Deep Archive
  - Amazon S3 冰川深层档案
- **C.** Amazon S3 One Zone-Infrequent Access
  - Amazon S3 一区-不频繁访问
- **D.** Amazon S3 Glacier
  - Amazon S3 冰川

**答案 / Answer: `C`**

Amazon S3 One Zone-Infrequent Access stores data in a single Availability Zone at lower cost with lower resiliency, but provides rapid millisecond access when needed, making it suitable for duplicate backups that can be recreated.
Amazon S3 Standard is designed for frequently accessed data with high durability across multiple AZs, making it more expensive and over-specified for data with lower resiliency requirements such as duplicate backups. Amazon S3 Glacier Deep Archive is designed for long-term archival of data that is rarely accessed, with retrieval times of up to 12 hours, making it unsuitable for workloads requiring rapid access. Amazon S3 Glacier is designed for archival storage with retrieval times ranging from minutes to hours, and does not provide the rapid millisecond access required for the use case described.

Amazon S3 单区不频繁访问以较低的成本和较低的弹性将数据存储在单个可用区中，但在需要时提供快速的毫秒级访问，使其适合可重新创建的重复备份。
Amazon S3 标准专为跨多个可用区且具有高持久性的频繁访问数据而设计，对于弹性要求较低（例如重复备份）的数据来说，其成本更高且过度指定。 Amazon S3 Glacier Deep Archive 专为很少访问的数据进行长期归档而设计，检索时间长达 12 小时，不适合需要快速访问的工作负载。 Amazon S3 Glacier 设计用于检索时间从几分钟到几小时不等的档案存储，并且不提供所述用例所需的快速毫秒访问。

---

## Question 6 · Domain 2 · Select 2

**EN** A web application is hosted on AWS using an Elastic Load Balancer, multiple Amazon EC2 instances, and Amazon RDS. Which security measures fall under the responsibility of AWS?

**中** Web 应用程序使用弹性负载均衡器、多个 Amazon EC2 实例和 Amazon RDS 托管在 AWS 上。哪些安全措施属于 AWS 的责任？

- **A.** Running a virus scan on EC2 instances
  - 在 EC2 实例上运行病毒扫描
- **B.** Protecting against IP spoofing and packet sniffing
  - 防止 IP 欺骗和数据包嗅探
- **C.** Installing the latest security patches on the RDS instance
  - 为 RDS 实例安装最新的安全补丁
- **D.** Encrypting communication between the EC2 instances and the Elastic Load Balancer
  - 加密 EC2 实例与弹性负载均衡器之间的通信
- **E.** Configuring a security group and a network access control list (NACL) for EC2
  - 为 EC2 配置安全组和网络访问控制列表（NACL）

**答案 / Answer: `B,C`**

AWS is responsible for protecting against IP spoofing and packet sniffing at the network level as part of securing the infrastructure, and for patching the underlying operating system of managed RDS instances as RDS is a fully managed service where AWS handles database engine and OS patching.
Running a virus scan on EC2 instances is the customer's responsibility as the customer manages the guest operating system and installed software on their EC2 instances, including security tooling to detect malicious software. Encrypting communication between EC2 instances and the Elastic Load Balancer requires customer configuration of SSL/TLS settings in the application and load balancer, as the customer controls their own application architecture and must choose to enable encrypted communications. Configuring security groups and network ACLs for EC2 instances is the customer's responsibility for defining which network traffic is allowed to and from their own compute resources within the VPC.

AWS 负责在网络级别防止 IP 欺骗和数据包嗅探，作为保护基础设施的一部分，并负责修补托管 RDS 实例的底层操作系统，因为 RDS 是一项完全托管的服务，由 AWS 处理数据库引擎和操作系统修补。
在 EC2 实例上运行病毒扫描是客户的责任，因为客户管理其 EC2 实例上的来宾操作系统和安装的软件，包括用于检测恶意软件的安全工具。对 EC2 实例与弹性负载均衡器之间的通信进行加密需要客户在应用程序和负载均衡器中配置 SSL/TLS 设置，因为客户控制自己的应用程序架构并且必须选择启用加密通信。客户有责任为 EC2 实例配置安全组和网络 ACL，以定义允许哪些网络流量进出 VPC 内自己的计算资源。

---

## Question 7 · Domain 2

**EN** Which functions can users perform using AWS KMS?

**中** 用户可以使用 AWS KMS 执行哪些功能？

- **A.** Create and manage AWS access keys for the AWS account root user
  - 为 AWS 账户根用户创建和管理 AWS 访问密钥
- **B.** Create and manage AWS access keys for an AWS account IAM user
  - 为 AWS 账户 IAM 用户创建和管理 AWS 访问密钥
- **C.** Create and manage keys for encryption and decryption of data
  - 创建和管理用于数据加密和解密的密钥
- **D.** Create and manage keys for multi-factor authentication
  - 创建和管理用于多重身份验证的密钥

**答案 / Answer: `C`**

AWS KMS lets users create and manage cryptographic keys for encrypting and decrypting data across AWS services, providing centralized key lifecycle management with audit logging of key usage via CloudTrail.
Creating and managing AWS access keys for the root user is done through the IAM section of the AWS Management Console, and access keys are authentication credentials rather than cryptographic keys managed by KMS. Creating and managing AWS access keys for IAM users is performed through the IAM console or CLI, and access keys are programmatic authentication credentials unrelated to the encryption key management function of AWS KMS. Creating and managing keys for multi-factor authentication involves configuring virtual or hardware MFA devices in the IAM console, and MFA tokens are authentication mechanisms rather than cryptographic keys for data encryption and decryption.

AWS KMS 允许用户创建和管理加密密钥，用于跨 AWS 服务加密和解密数据，提供集中式密钥生命周期管理，并通过 CloudTrail 审核密钥使用情况的日志记录。
为根用户创建和管理 AWS 访问密钥是通过 AWS 管理控制台的 IAM 部分完成的，访问密钥是身份验证凭证，而不是 KMS 管理的加密密钥。为 IAM 用户创建和管理 AWS 访问密钥是通过 IAM 控制台或 CLI 执行的，访问密钥是与 AWS KMS 的加密密钥管理功能无关的编程身份验证凭证。创建和管理多因素身份验证密钥涉及在 IAM 控制台中配置虚拟或硬件 MFA 设备，并且 MFA 令牌是身份验证机制，而不是用于数据加密和解密的加密密钥。

---

## Question 8 · Domain 4

**EN** Which AWS Cloud service can send alerts to customers if custom spending thresholds are exceeded?

**中** 如果超过自定义支出阈值，哪种 AWS 云服务可以向客户发送警报？

- **A.** AWS Budgets
  - AWS Budgets
- **B.** AWS Cost Explorer
  - AWS Cost Explorer
- **C.** AWS Cost Allocation Tags
  - AWS 成本分配标签
- **D.** AWS Organizations
  - AWS Organizations

**答案 / Answer: `A`**

AWS Budgets sends alert notifications when actual or forecasted spending exceeds custom thresholds you define, enabling proactive cost management before bills grow unexpectedly.
AWS Cost Explorer provides interactive visualisations of historical AWS spending and usage patterns with forecasting capability, and is an analysis and planning tool rather than a service that sends automated threshold-based alerts. AWS Cost Allocation Tags are key-value labels applied to AWS resources that enable cost attribution by project, team, or environment in billing reports, and are a cost categorization mechanism rather than an alerting service. AWS Organizations provides centralized account management with consolidated billing and governance controls, and is an account structure and governance service rather than a service that sends spending threshold alerts.

当实际或预测支出超过您定义的自定义阈值时，AWS Budgets 会发送警报通知，从而在账单意外增长之前实现主动成本管理。
AWS Cost Explorer 提供历史 AWS 支出和使用模式的交互式可视化以及预测功能，并且是一种分析和规划工具，而不是发送基于阈值的自动警报的服务。 AWS 成本分配标签是应用于 AWS 资源的键值标签，可在账单报告中按项目、团队或环境进行成本归因，并且是一种成本分类机制而不是警报服务。 AWS Organizations 提供集中帐户管理以及合并的计费和治理控制，并且是帐户结构和治理服务，而不是发送支出阈值警报的服务。

---

## Question 9 · Domain 3

**EN** Which AWS service can run a managed PostgreSQL database that provides online transaction processing (OLTP)?

**中** 哪种 AWS 服务可以运行提供在线事务处理 (OLTP) 的托管 PostgreSQL 数据库？

- **A.** Amazon DynamoDB
  - Amazon DynamoDB
- **B.** Amazon Athena
  - 亚马逊雅典娜
- **C.** Amazon RDS
  - Amazon RDS
- **D.** Amazon EMR
  - 亚马逊电子病历

**答案 / Answer: `C`**

Amazon RDS supports PostgreSQL as a managed database engine, handling automated provisioning, patching, backups, and high availability for online transaction processing workloads.
Amazon DynamoDB is a fully managed NoSQL key-value and document database, not a relational database engine and does not support PostgreSQL or OLTP workloads in the traditional sense. Amazon Athena is an interactive query service for analyzing data stored in S3 using SQL and is not a transactional database. Amazon EMR is a managed big data processing service for running distributed frameworks such as Spark and Hadoop, unrelated to relational database management.

Amazon RDS 支持 PostgreSQL 作为托管数据库引擎，处理在线事务处理工作负载的自动配置、修补、备份和高可用性。
Amazon DynamoDB 是完全托管的 NoSQL 键值和文档数据库，不是关系数据库引擎，并且不支持传统意义上的 PostgreSQL 或 OLTP 工作负载。 Amazon Athena 是一种交互式查询服务，用于使用 SQL 分析 S3 中存储的数据，而不是事务数据库。 Amazon EMR 是一种托管大数据处理服务，用于运行 Spark 和 Hadoop 等分布式框架，与关系数据库管理无关。

---

## Question 10 · Domain 1 · Select 2

**EN** Which TWO of the following are perspectives of the AWS Cloud Adoption Framework (AWS CAF)?

**中** 以下哪两项是 AWS 云采用框架 (AWS CAF) 的观点？

- **A.** Governance
  - 治理
- **B.** Financial
  - 金融的
- **C.** People
  - 人们
- **D.** Infrastructure
  - 基础设施
- **E.** Agility
  - 敏捷

**答案 / Answer: `A,C`**

The AWS CAF organizes guidance into six perspectives: Business, People, Governance, Platform, Security, and Operations. Governance focuses on orchestrating cloud initiatives while maximizing organizational benefits and minimizing transformation-related risks, and People focuses on developing an organization-wide change management strategy and building cloud skills across the workforce.
Financial is not one of the six AWS CAF perspectives; financial and cost-related guidance falls within the Business perspective, which addresses how cloud adoption drives business value and return on investment rather than existing as its own separate financial perspective. Infrastructure is not one of the six AWS CAF perspectives; guidance on building and provisioning the technology foundation for cloud workloads falls under the Platform perspective rather than a perspective named Infrastructure. Agility is a benefit and characteristic of cloud computing but is not one of the six CAF perspectives; it does not appear in the CAF framework structure alongside Business, People, Governance, Platform, Security, and Operations.

AWS CAF 将指南分为六个角度：业务、人员、治理、平台、安全性和运营。治理侧重于协调云计划，同时最大限度地提高组织效益并最小化与转型相关的风险，而人员则侧重于制定组织范围内的变革管理策略并在整个员工队伍中培养云技能。
财务并不是 AWS CAF 的六个视角之一；财务和成本相关的指导属于业务角度，它解决了云采用如何推动业务价值和投资回报，而不是作为其自己单独的财务角度存在。基础设施不是 AWS CAF 的六个视角之一；有关为云工作负载构建和配置技术基础的指南属于平台视角，而不是基础设施视角。敏捷性是云计算的优势和特征，但不是 CAF 的六个视角之一；它不会与业务、人员、治理、平台、安全和运营一起出现在 CAF 框架结构中。

---

## Question 11 · Domain 1

**EN** How many perspectives does the AWS Cloud Adoption Framework (AWS CAF) define?

**中** AWS 云采用框架 (AWS CAF) 定义了多少个视角？

- **A.** Four
  - 四
- **B.** Five
  - 五
- **C.** Six
  - 六
- **D.** Seven
  - 七

**答案 / Answer: `C`**

The AWS CAF defines six perspectives: Business, People, and Governance (business capabilities), and Platform, Security, and Operations (technical capabilities), providing comprehensive guidance for cloud transformation.
Four perspectives would be incomplete, as the CAF explicitly defines six distinct areas of focus to cover both business and technical dimensions of cloud adoption. Five perspectives would be missing one of the six defined areas, and does not match the actual CAF structure. Seven perspectives exceeds the actual number defined by the framework, which groups its guidance into exactly six perspectives.

AWS CAF 定义了业务、人员和治理（业务能力）以及平台、安全和运营（技术能力）六个视角，为云转型提供了全面的指导。
四个视角是不完整的，因为 CAF 明确定义了六个不同的重点领域来涵盖云采用的业务和技术维度。五个视角将缺少六个定义区域之一，并且与实际的 CAF 结构不匹配。七个视角超出了框架定义的实际数量，该框架将其指导恰好分为六个视角。

---

## Question 12 · Domain 2 · Select 2

**EN** A company wants to provide one of its employees with access to Amazon RDS. The company also wants to limit the interaction to only the AWS CLI and AWS software development kits (SDKs). Which combination of actions should the company take to meet these requirements while following the principles of least privilege?

**中** 一家公司希望为其一名员工提供 Amazon RDS 的访问权限。该公司还希望将交互仅限于 AWS CLI 和 AWS 软件开发工具包 (SDK)。公司应采取哪种行动组合来满足这些要求，同时遵循最小特权原则？

- **A.** Create an IAM user and provide AWS Management Console access only
  - 创建 IAM 用户并仅提供 AWS 管理控制台访问权限
- **B.** Create an IAM user and provide programmatic access only
  - 创建 IAM 用户并仅提供编程访问
- **C.** Create an IAM role and provide AWS Management Console access only
  - 创建 IAM 角色并仅提供 AWS 管理控制台访问权限
- **D.** Create an IAM policy with administrator access and attach it to the IAM user
  - 创建具有管理员访问权限的 IAM 策略并将其附加到 IAM 用户
- **E.** Create an IAM policy with Amazon RDS access and attach it to the IAM user
  - 创建具有 Amazon RDS 访问权限的 IAM 策略并将其附加到 IAM 用户

**答案 / Answer: `B,E`**

An IAM policy that grants Amazon RDS access can be attached directly to the specific IAM user, limiting that employee's AWS permissions to only the RDS actions specified in the policy and no other services.
Creating a separate AWS account for the user would be an excessive measure for granting one employee RDS access, as it introduces administrative overhead for account management and does not simplify access control compared to using an IAM policy within the existing account. Creating an IAM user with full administrator access would grant unrestricted access to all AWS services and resources, directly violating the principle of least privilege and creating unnecessary security risk for a user who only needs access to RDS. Placing all existing IAM users into a new IAM group with RDS access would grant RDS permissions to the entire user population rather than limiting access to the single employee who requires it, which contradicts the goal of providing targeted access.

授予 Amazon RDS 访问权限的 IAM 策略可以直接附加到特定的 IAM 用户，从而将该员工的 AWS 权限限制为仅能执行策略中指定的 RDS 操作，而不能执行其他服务。
为用户创建单独的 AWS 账户对于授予一名员工 RDS 访问权限来说是一种过度措施，因为与在现有账户中使用 IAM 策略相比，它会带来账户管理的管理开销，并且不会简化访问控制。创建具有完全管理员访问权限的 IAM 用户将授予对所有 AWS 服务和资源的不受限制的访问权限，直接违反了最小权限原则，并为仅需要访问 RDS 的用户带来了不必要的安全风险。将所有现有 IAM 用户放入具有 RDS 访问权限的新 IAM 组中会将 RDS 权限授予整个用户群，而不是限制对需要该权限的单个员工的访问权限，这与提供有针对性的访问权限的目标相矛盾。

---

## Question 13 · Domain 1

**EN** A company is using the AWS Cloud Adoption Framework (AWS CAF) and wants to establish a Cloud Center of Excellence (CCoE). Which phase of the CAF transformation journey typically involves this activity?

**中** 一家公司正在使用 AWS 云采用框架 (AWS CAF)，并希望建立云卓越中心 (CCoE)。 CAF 转型之旅的哪个阶段通常涉及此活动？

- **A.** Envision
  - 设想
- **B.** Align
  - 对齐
- **C.** Launch
  - 发射
- **D.** Scale
  - 规模

**答案 / Answer: `C`**

The Launch phase of the AWS CAF involves delivering pilot initiatives, building a Cloud Center of Excellence to provide guidance and best practices, and demonstrating incremental business value through initial cloud deployments that establish the foundation for broader adoption.
The Envision phase focuses on creating a shared transformation vision and identifying how cloud can drive business outcomes, which occurs before establishing operational structures like a CCoE. The Align phase focuses on assessing readiness, identifying gaps, and creating an action plan, which is planning work that precedes the hands-on launch activities. The Scale phase focuses on expanding adoption across the entire organization after the CCoE and initial patterns have already been established during the Launch phase.

AWS CAF 的启动阶段涉及交付试点计划、构建卓越云中心以提供指导和最佳实践，以及通过初始云部署展示增量业务价值，从而为更广泛的采用奠定基础。
构想阶段的重点是创建共享转型愿景并确定云如何推动业务成果，这发生在建立 CCoE 等运营结构之前。协调阶段的重点是评估准备情况、找出差距并制定行动计划，即在实际启动活动之前规划工作。规模阶段的重点是在启动阶段建立 CCoE 和初始模式后扩大整个组织的采用。

---

## Question 14 · Domain 2 · Select 2

**EN** Under the AWS shared responsibility model, the customer manages which of the following?

**中** 在 AWS 责任共担模型下，客户管理以下哪一项？

- **A.** Decommissioning of physical storage devices
  - 物理存储设备退役
- **B.** Security group and ACL configuration
  - 安全组和 ACL 配置
- **C.** Patch management of an Amazon RDS instance operating system
  - Amazon RDS 实例操作系统补丁管理
- **D.** Controlling physical access to data centers
  - 控制对数据中心的物理访问
- **E.** Patch management of an Amazon EC2 instance operating system
  - Amazon EC2 实例操作系统补丁管理

**答案 / Answer: `B,E`**

Customers manage security group and ACL configurations to control inbound and outbound network access to their resources as part of securing their network environment, and are responsible for patching the guest operating system on EC2 instances including applying security updates and vulnerability patches.
Decommissioning physical storage devices including secure data erasure and physical destruction is entirely AWS's responsibility as part of managing the physical infrastructure in data centers that customers never access. Controlling physical access to AWS data centers including badge readers, biometrics, and surveillance is entirely AWS's responsibility as customers have no presence in or access to the facilities where AWS hardware is located. Patch management for the Amazon RDS instance operating system is AWS's responsibility as RDS is a managed service where AWS handles the underlying database engine patching, OS patching, and maintenance; customers only need to manage patching of databases they run on EC2 themselves.

客户管理安全组和 ACL 配置，以控制对其资源的入站和出站网络访问，作为保护其网络环境的一部分，并负责修补 EC2 实例上的来宾操作系统，包括应用安全更新和漏洞补丁。
退役物理存储设备（包括安全数据擦除和物理销毁）完全是 AWS 的责任，作为管理客户从不访问的数据中心中的物理基础设施的一部分。控制对 AWS 数据中心的物理访问（包括徽章读取器、生物识别和监控）完全是 AWS 的责任，因为客户无法进入或无法访问 AWS 硬件所在的设施。 Amazon RDS 实例操作系统的补丁管理是 AWS 的责任，因为 RDS 是一项托管服务，AWS 负责处理底层数据库引擎补丁、操作系统补丁和维护；客户只需自行管理在 EC2 上运行的数据库的修补。

---

## Question 15 · Domain 1

**EN** The AWS Cloud Adoption Framework (AWS CAF) identifies four transformation domains. Which of the following is one of those domains?

**中** AWS 云采用框架 (AWS CAF) 确定了四个转换域。以下哪一个是这些域之一？

- **A.** Technology
  - 技术
- **B.** Networking
  - 联网
- **C.** Database
  - 数据库
- **D.** Compute
  - 计算

**答案 / Answer: `A`**

The AWS CAF identifies four transformation domains: Technology, Process, Organization, and Product. The Technology domain covers migration and modernisation of infrastructure, applications, and data platforms to leverage cloud capabilities.
Networking is a component within the Platform perspective and Technology transformation domain, but it is not itself one of the four transformation domains defined by the CAF. Database is a specific service category within cloud technology, not one of the four transformation domains that the CAF uses to structure cloud adoption activities. Compute is a specific resource type within cloud infrastructure, not one of the four high-level transformation domains defined by the CAF.

AWS CAF 确定了四个转型领域：技术、流程、组织和产品。技术领域涵盖基础设施、应用程序和数据平台的迁移和现代化，以利用云功能。
网络是平台视角和技术转换域中的一个组件，但它本身并不是 CAF 定义的四个转换域之一。数据库是云技术中的一个特定服务类别，而不是 CAF 用于构建云采用活动的四个转换域之一。计算是云基础设施中的一种特定资源类型，而不是 CAF 定义的四个高级转换域之一。

---

## Question 16 · Domain 2

**EN** Which AWS service can be used to track resource changes and establish compliance?

**中** 哪些 AWS 服务可用于跟踪资源更改并建立合规性？

- **A.** Amazon CloudWatch
  - Amazon CloudWatch
- **B.** AWS Config
  - AWS Config
- **C.** AWS CloudTrail
  - AWS CloudTrail
- **D.** AWS Trusted Advisor
  - AWS Trusted Advisor

**答案 / Answer: `B`**

AWS Config continuously monitors and records configuration changes to AWS resources and evaluates those changes against compliance rules, identifying non-compliant resources and enabling auditing of the configuration history for compliance purposes.
Amazon CloudWatch monitors operational metrics, logs, and events for performance and observability, and while it can trigger alarms on unusual activity, it does not track resource configuration changes or evaluate compliance against desired configuration states. AWS CloudTrail records all API calls and management events for auditing, and while it logs who made configuration changes and when, it does not evaluate whether those configurations comply with defined rules the way Config does. Amazon Inspector is an automated vulnerability assessment service for EC2 instances and container images that identifies software vulnerabilities and unintended network access, and is not a resource configuration tracking and compliance evaluation service.

AWS Config 持续监控和记录 AWS 资源的配置更改，并根据合规性规则评估这些更改，识别不合规的资源并启用配置历史记录审核以实现合规性。
Amazon CloudWatch 监视操作指标、日志和事件的性能和可观察性，虽然它可以针对异常活动触发警报，但它不会跟踪资源配置更改或根据所需配置状态评估合规性。 AWS CloudTrail 记录所有 API 调用和管理事件以进行审核，虽然它记录谁进行了配置更改以及何时进行的更改，但它不会像 Config 那样评估这些配置是否符合定义的规则。 Amazon Inspector 是针对 EC2 实例和容器镜像的自动化漏洞评估服务，用于识别软件漏洞和意外网络访问，并非资源配置跟踪和合规性评估服务。

---

## Question 17 · Domain 3

**EN** A company must store critical business data in Amazon S3 with a backup to another AWS Region. How can this be achieved?

**中** 公司必须将关键业务数据存储在 Amazon S3 中，并备份到另一个 AWS 区域。如何才能实现这一目标？

- **A.** Use an Amazon CloudFront Content Delivery Network (CDN) to cache data globally
  - 使用 Amazon CloudFront 内容分发网络 (CDN) 全局缓存数据
- **B.** Set up Amazon S3 cross-region replication to another AWS Region
  - 设置 Amazon S3 跨区域复制到另一个 AWS 区域
- **C.** Configure the AWS Backup service to back up to the data to another AWS Region
  - 配置 AWS Backup 服务以将数据备份到另一个 AWS 区域
- **D.** Take Amazon S3 bucket snapshots and copy that data to another AWS Region
  - 获取 Amazon S3 存储桶快照并将该数据复制到另一个 AWS 区域

**答案 / Answer: `B`**

Amazon S3 cross-region replication automatically copies objects uploaded to a source bucket in one Region to a destination bucket in another Region, ensuring that a backup of the critical data exists in a geographically separate location.
Using Amazon CloudFront to cache data globally distributes content to edge locations for faster access by end users, but CDN caching is not a durable backup mechanism; cached content is temporary and can be evicted, and CloudFront is not designed for storing permanent backup copies of S3 data. AWS Backup can back up data from various AWS services including S3, but for continuous cross-region replication of S3 objects the native S3 cross-region replication feature is the direct, purpose-built solution. Taking Amazon S3 bucket snapshots is not a native S3 feature; S3 does not have a native snapshot capability like EBS, and the correct approach for S3 backup to another Region is cross-region replication rather than snapshots.

Amazon S3 跨区域复制自动将上传到一个区域的源存储桶的对象复制到另一个区域的目标存储桶，确保关键数据的备份存在于不同的地理位置。
使用 Amazon CloudFront 来缓存数据可以将内容全局分发到边缘位置，以便最终用户更快地访问，但 CDN 缓存不是持久的备份机制；缓存的内容是临时的，可以被逐出，并且 CloudFront 不适用于存储 S3 数据的永久备份副本。 AWS Backup 可以备份来自各种 AWS 服务（包括 S3）的数据，但对于 S3 对象的连续跨区域复制，本机 S3 跨区域复制功能是直接的专用解决方案。拍摄 Amazon S3 存储桶快照不是 S3 的原生功能； S3 不具备像 EBS 那样的原生快照能力，S3 备份到另一个 Region 的正确方法是跨 Region 复制而不是快照。

---

## Question 18 · Domain 1

**EN** A company currently runs VMware-based virtual machines on-premises and wants to move them to AWS with minimal changes to the existing VMware environment. Which migration strategy does this describe?

**中** 一家公司目前在本地运行基于 VMware 的虚拟机，并希望将其迁移到 AWS，同时对现有 VMware 环境进行最小程度的更改。这描述了哪种迁移策略？

- **A.** Rehost
  - 重新托管
- **B.** Replatform
  - 平台重构
- **C.** Relocate
  - 搬迁
- **D.** Refactor
  - 重构

**答案 / Answer: `C`**

Relocating involves moving infrastructure to AWS without purchasing new hardware, rewriting applications, or modifying existing operations, such as migrating VMware-based workloads to VMware Cloud on AWS where the existing VMware environment continues to function with minimal changes.
Rehosting involves moving individual applications to AWS infrastructure such as EC2 instances, which requires converting virtual machines rather than preserving the existing VMware management layer. Replatforming involves making targeted optimizations during migration such as switching to managed services, which goes beyond simply moving the existing VMware environment as-is. Refactoring involves redesigning the application architecture to use cloud-native services, which is the opposite of preserving the existing VMware-based infrastructure.

迁移涉及将基础设施迁移到 AWS，而无需购买新硬件、重写应用程序或修改现有操作，例如将基于 VMware 的工作负载迁移到 VMware Cloud on AWS，其中现有 VMware 环境只需进行最少的更改即可继续运行。
重新托管涉及将单个应用程序移动到 AWS 基础设施（例如 EC2 实例），这需要转换虚拟机而不是保留现有的 VMware 管理层。平台重构涉及在迁移过程中进行有针对性的优化，例如切换到托管服务，这不仅仅是简单地按原样迁移现有 VMware 环境。重构涉及重新设计应用程序架构以使用云原生服务，这与保留现有的基于 VMware 的基础架构相反。

---

## Question 19 · Domain 4

**EN** A company wants to automatically detect unusual spending patterns in their AWS account and receive alerts when anomalies are found. Which AWS service uses machine learning to monitor costs and detect anomalies?

**中** 一家公司希望自动检测其 AWS 账户中的异常支出模式，并在发现异常时收到警报。哪些 AWS 服务使用机器学习来监控成本和检测异常？

- **A.** AWS Budgets
  - AWS Budgets
- **B.** AWS Cost Anomaly Detection
  - AWS 成本异常检测
- **C.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **D.** Amazon GuardDuty
  - 亚马逊 GuardDuty

**答案 / Answer: `B`**

AWS Cost Anomaly Detection uses machine learning to continuously monitor cost and usage patterns and detect unusual spending that deviates from expected norms, sending alerts when anomalies are identified without requiring manual threshold configuration.
AWS Budgets allows you to set custom spending and usage thresholds and receive alerts when those thresholds are exceeded, but requires you to manually define the expected spending levels rather than automatically detecting anomalies using machine learning. AWS Trusted Advisor provides best practice recommendations across security, cost, performance, and fault tolerance, and while it flags some cost inefficiencies it does not continuously monitor spending patterns to automatically detect unusual cost anomalies. Amazon GuardDuty is a threat detection service that continuously monitors AWS accounts and workloads for malicious activity and anomalous behavior using machine learning, and is a security threat detection service rather than a cost anomaly monitoring service.

AWS 成本异常检测使用机器学习来持续监控成本和使用模式，并检测偏离预期标准的异常支出，并在发现异常时发送警报，而无需手动配置阈值。
AWS Budgets 允许您设置自定义支出和使用阈值，并在超过这些阈值时收到警报，但要求您手动定义预期支出水平，而不是使用机器学习自动检测异常。 AWS Trusted Advisor 提供了安全、成本、性能和容错方面的最佳实践建议，虽然它标记了一些成本效率低下的情况，但它不会持续监控支出模式以自动检测异常成本异常。 Amazon GuardDuty 是一项威胁检测服务，可使用机器学习持续监控 AWS 账户和工作负载是否存在恶意活动和异常行为，并且是一项安全威胁检测服务，而不是成本异常监控服务。

---

## Question 20 · Domain 3

**EN** What is the purpose of having an internet gateway within a VPC?

**中** VPC 内设有互联网网关的目的是什么？

- **A.** To create a VPN connection to the VPC
  - 创建到 VPC 的 VPN 连接
- **B.** To allow communication between the VPC and the Internet
  - 允许 VPC 和互联网之间的通信
- **C.** To impose bandwidth constraints on internet traffic
  - 对互联网流量施加带宽限制
- **D.** To load balance traffic from the Internet across Amazon EC2 instances
  - 在 Amazon EC2 实例之间对来自 Internet 的流量进行负载平衡

**答案 / Answer: `B`**

An internet gateway enables communication between resources in a VPC and the public internet, allowing instances in public subnets to send and receive traffic from the internet.
Creating a VPN connection to the VPC is the function of a Virtual Private Gateway, not an internet gateway, as VPN connections are used to link a VPC to an on-premises network. Imposing bandwidth constraints on internet traffic is not a function of any VPC gateway component, as bandwidth management is handled at the application or network policy level. Load balancing traffic from the internet across EC2 instances is the function of an Elastic Load Balancer, not an internet gateway.

互联网网关支持 VPC 中的资源与公共互联网之间的通信，允许公共子网中的实例发送和接收来自互联网的流量。
创建与 VPC 的 VPN 连接是虚拟专用网关（而不是 Internet 网关）的功能，因为 VPN 连接用于将 VPC 链接到本地网络。对互联网流量施加带宽限制不是任何 VPC 网关组件的功能，因为带宽管理是在应用程序或网络策略级别处理的。 EC2 实例之间来自互联网的负载平衡流量是弹性负载均衡器的功能，而不是互联网网关的功能。

---

## Question 21 · Domain 3

**EN** How should a web application be deployed to ensure high availability in the AWS Cloud?

**中** 应如何部署 Web 应用程序以确保 AWS 云中的高可用性？

- **A.** Deploy multiple instances of the application in multiple Availability Zones
  - 在多个可用区中部署应用程序的多个实例
- **B.** Deploy multiple instances of the application in a single Availability Zone
  - 在单个可用区中部署应用程序的多个实例
- **C.** Deploy the application to a compute-optimized Amazon EC2 instance in a single Availability Zone
  - 将应用程序部署到单个可用区中计算优化的 Amazon EC2 实例
- **D.** Deploy the application in one Amazon EC2 instance in an Auto Scaling group
  - 将应用程序部署在 Auto Scaling 组中的一个 Amazon EC2 实例中

**答案 / Answer: `A`**

Deploying multiple instances across multiple Availability Zones ensures high availability by providing redundancy, so if one AZ fails, instances in other AZs continue serving traffic without interruption.
Deploying multiple instances in a single Availability Zone improves capacity and performance but provides no protection against an AZ-level failure, leaving the application vulnerable to a single point of failure. Deploying to a compute-optimized EC2 instance in a single Availability Zone addresses performance for compute-intensive workloads but offers no redundancy or fault tolerance. Deploying one EC2 instance in an Auto Scaling group allows the group to replace a failed instance but still leaves a gap in availability while the replacement is provisioned, and does not protect against an AZ failure.

跨多个可用区部署多个实例可通过提供冗余来确保高可用性，因此，如果一个可用区发生故障，其他可用区中的实例将继续提供流量而不会中断。
在单个可用区中部署多个实例可以提高容量和性能，但无法提供针对可用区级别故障的保护，从而使应用程序容易受到单点故障的影响。部署到单个可用区中的计算优化型 EC2 实例可以解决计算密集型工作负载的性能问题，但不提供冗余或容错能力。在 Auto Scaling 组中部署一个 EC2 实例允许该组替换发生故障的实例，但在配置替换时仍然会留下可用性缺口，并且不能防止可用区故障。

---

## Question 22 · Domain 3

**EN** Which AWS service can be used to provide an on-demand, cloud-based contact center?

**中** 哪种 AWS 服务可用于提供按需、基于云的联络中心？

- **A.** AWS Direct Connect
  - AWS Direct Connect
- **B.** Amazon Connect
  - 亚马逊连接
- **C.** AWS Support Center
  - AWS Support 中心
- **D.** AWS Managed Services
  - AWS 托管服务

**答案 / Answer: `B`**

Amazon Connect is a cloud-based contact center service that can be set up in minutes, providing on-demand scalability with pay-per-use pricing for customer service operations.
AWS Direct Connect provides a dedicated private network connection between on-premises infrastructure and AWS for hybrid connectivity, and is a networking service with no capability to provide contact center functionality for managing customer communications. AWS Support Center is the portal where AWS customers create, view, and manage their own support cases with AWS, and is an internal support management interface rather than a service for building customer-facing contact centers. AWS Managed Services provides operational management of AWS infrastructure on behalf of enterprise customers including monitoring, patching, and incident management, and is an infrastructure operations service rather than a contact center platform for managing customer interactions.

Amazon Connect 是一项基于云的联络中心服务，可在几分钟内完成设置，为客户服务运营提供按需可扩展性和按使用付费的定价。
AWS Direct Connect 在本地基础设施和 AWS 之间提供专用的专用网络连接以实现混合连接，并且是一种网络服务，无法提供用于管理客户通信的联络中心功能。 AWS Support Center 是 AWS 客户使用 AWS 创建、查看和管理自己的支持案例的门户，并且是内部支持管理界面，而不是用于构建面向客户的联络中心的服务。 AWS Managed Services 代表企业客户提供 AWS 基础设施的运营管理，包括监控、修补和事件管理，并且是一项基础设施运营服务，而不是用于管理客户交互的联络中心平台。

---

## Question 23 · Domain 2

**EN** What is the best resource for a user to find compliance-related information and reports about AWS?

**中** 用户查找有关 AWS 的合规性相关信息和报告的最佳资源是什么？

- **A.** AWS Artifact
  - AWS Artifact
- **B.** AWS Marketplace
  - AWS 市场
- **C.** Amazon Inspector
  - Amazon Inspector
- **D.** AWS Support
  - AWS Support

**答案 / Answer: `A`**

AWS Artifact is a self-service portal that provides on-demand access to AWS compliance reports, certifications, and agreements, making it the best resource for users seeking compliance-related information and documentation about AWS.
AWS CloudTrail records all API calls and management events in an AWS account for auditing and forensic purposes, and is an activity logging service rather than a source of compliance reports or certification documentation about AWS infrastructure. The Amazon Inspector console provides vulnerability assessment findings for EC2 instances and container images, and is a security assessment tool for customer workloads rather than a repository of AWS-level compliance information and reports. AWS Support provides technical assistance and guidance for using AWS services, and while support engineers can answer compliance-related questions, the self-service repository for compliance documentation and formal reports is AWS Artifact.

AWS Artifact 是一个自助服务门户，可按需访问 AWS 合规性报告、认证和协议，使其成为寻求有关 AWS 的合规性相关信息和文档的用户的最佳资源。
AWS CloudTrail 记录 AWS 账户中的所有 API 调用和管理事件，以用于审计和取证目的，并且是一项活动日志记录服务，而不是有关 AWS 基础设施的合规性报告或认证文档的来源。 Amazon Inspector 控制台提供 EC2 实例和容器映像的漏洞评估结果，是针对客户工作负载的安全评估工具，而不是 AWS 级合规性信息和报告的存储库。 AWS Support 提供使用 AWS 服务的技术帮助和指导，虽然支持工程师可以回答与合规性相关的问题，但合规性文档和正式报告的自助存储库是 AWS Artifact。

---

## Question 24 · Domain 2 · Select 2

**EN** Under the AWS shared responsibility model, what are the customer's responsibilities?

**中** 在 AWS 责任共担模型下，客户的责任是什么？

- **A.** Physical and environmental security
  - 物理和环境安全
- **B.** Physical network devices including firewalls
  - 物理网络设备，包括防火墙
- **C.** Storage device decommissioning
  - 存储设备退役
- **D.** Security of data in transit
  - 传输中数据的安全
- **E.** Data integrity authentication
  - 数据完整性认证

**答案 / Answer: `D,E`**

Customers are responsible for securing data in transit by implementing encryption such as TLS/SSL to protect data as it moves between systems, and for data integrity authentication to verify that data has not been tampered with. Both fall within the customer's side of the Shared Responsibility Model.
Physical and environmental security of data centers is exclusively AWS's responsibility, covering the buildings, power, cooling, and physical access controls that customers have no involvement in. Physical network devices including firewalls are AWS's responsibility, as customers manage virtual networking constructs such as security groups and NACLs but have no access to the underlying physical network hardware. Storage device decommissioning is AWS's responsibility, as AWS manages the secure disposal and destruction of physical storage media when it reaches end of life.

客户负责通过实施 TLS/SSL 等加密来保护系统之间移动的数据，并负责数据完整性身份验证以验证数据未被篡改，从而确保传输中的数据安全。两者都属于责任共担模型的客户方。
数据中心的物理和环境安全完全由 AWS 负责，涵盖客户不参与的建筑物、电力、冷却和物理访问控制。包括防火墙在内的物理网络设备由 AWS 负责，因为客户管理安全组和 NACL 等虚拟网络结构，但无法访问底层物理网络硬件。存储设备退役是 AWS 的责任，因为 AWS 负责在物理存储介质达到使用寿命时对其进行安全处置和销毁。

---

## Question 25 · Domain 1

**EN** A company wants to migrate its on-premises MySQL database to Amazon RDS for MySQL to take advantage of managed patching and backups, without changing the application code. Which migration strategy does this describe?

**中** 一家公司希望将其本地 MySQL 数据库迁移到 Amazon RDS for MySQL，以利用托管修补和备份，而无需更改应用程序代码。这描述了哪种迁移策略？

- **A.** Rehost
  - 重新托管
- **B.** Replatform
  - 平台重构
- **C.** Refactor
  - 重构
- **D.** Retain
  - 保持

**答案 / Answer: `B`**

Replatforming, also known as lift, tinker, and shift, involves making targeted optimizations during migration without changing the core application architecture, such as moving a self-managed database to a managed service like Amazon RDS to benefit from automated patching and backups.
Rehosting would mean moving the MySQL database to an EC2 instance and continuing to manage it manually, which does not take advantage of managed database features. Refactoring would involve redesigning the application to use a fundamentally different database approach, such as migrating from a relational database to a NoSQL service like DynamoDB, which goes beyond targeted optimization. Retaining means keeping the workload in its current on-premises environment, which does not involve any migration to AWS.

平台重构也称为提升、修补和转移，涉及在迁移过程中进行有针对性的优化，而不更改核心应用程序架构，例如将自我管理的数据库移动到 Amazon RDS 等托管服务，以从自动修补和备份中受益。
重新托管意味着将 MySQL 数据库移动到 EC2 实例并继续手动管理它，这不会利用托管数据库功能。重构将涉及重新设计应用程序以使用根本不同的数据库方法，例如从关系数据库迁移到 DynamoDB 等 NoSQL 服务，这超出了目标优化的范围。保留意味着将工作负载保留在当前的本地环境中，这不涉及到 AWS 的任何迁移。

---

## Question 26 · Domain 3

**EN** Which AWS service provides neural machine translation to convert text between different languages?

**中** 哪种 AWS 服务提供神经机器翻译以在不同语言之间转换文本？

- **A.** Amazon Comprehend
  - 亚马逊理解
- **B.** Amazon Transcribe
  - 亚马逊转录
- **C.** Amazon Lex
  - 亚马逊莱克斯
- **D.** Amazon Translate
  - 亚马逊翻译

**答案 / Answer: `D`**

Amazon Translate uses neural machine translation to deliver fast, high-quality translation of text between different languages.
Amazon Comprehend is a natural language processing service that analyzes written text to extract insights such as sentiment, entities, and key phrases, and does not perform language translation. Amazon Transcribe converts spoken audio into written text, and is a speech-to-text service rather than a translation service. Amazon Lex is a service for building conversational interfaces and chatbots using voice and text, and has no language translation capability.

Amazon Translate 使用神经机器翻译在不同语言之间提供快速、高质量的文本翻译。
Amazon Comprehend 是一种自然语言处理服务，可分析书面文本以提取情感、实体和关键短语等见解，但不执行语言翻译。 Amazon Transcribe 将口语音频转换为书面文本，是一项语音转文本服务，而不是翻译服务。 Amazon Lex 是一项使用语音和文本构建对话界面和聊天机器人的服务，没有语言翻译功能。

---

## Question 27 · Domain 4

**EN** How can a company separate costs for network traffic, Amazon EC2, Amazon S3, and other AWS services by department?

**中** 公司如何按部门区分网络流量、Amazon EC2、Amazon S3 和其他 AWS 服务的成本？

- **A.** Add department-specific tags to each resource
  - 为每个资源添加特定于部门的标签
- **B.** Create a separate VPC for each department
  - 为每个部门创建单独的 VPC
- **C.** Create a separate AWS account for each department
  - 为每个部门创建单独的 AWS 账户
- **D.** Use AWS Organizations
  - 使用 AWS Organizations

**答案 / Answer: `C`**

Creating a separate AWS account for each department provides the cleanest cost separation, as all charges within each account belong exclusively to that department and appear as a distinct line item on a consolidated bill.
Adding department-specific tags to each resource enables cost attribution within shared accounts through Cost Explorer, but tagging relies on consistent human application and does not provide the hard billing boundaries that separate accounts create. Creating a separate VPC for each department isolates network resources and can improve security, but VPCs do not create separate invoices or cost boundaries as all VPC resources still appear on the same AWS account bill. Using AWS Organizations provides account governance and consolidated billing but does not itself separate costs by department. It enables visibility across accounts but the cost separation comes from having distinct accounts rather than from Organizations itself.

为每个部门创建单独的 AWS 账户可实现最清晰的成本分离，因为每个账户内的所有费用均专属于该部门，并在合并账单上显示为不同的行项目。
向每个资源添加特定于部门的标签可以通过 Cost Explorer 在共享帐户内进行成本归因，但标记依赖于一致的人工应用程序，并且不提供单独帐户创建的硬计费边界。为每个部门创建单独的 VPC 可隔离网络资源并提高安全性，但 VPC 不会创建单独的发票或成本边界，因为所有 VPC 资源仍显示在同一 AWS 账户账单上。使用 AWS Organizations 提供帐户管理和合并计费，但本身并不按部门分离成本。它实现了跨账户的可见性，但成本分离来自于拥有不同的账户，而不是来自组织本身。

---

## Question 28 · Domain 3

**EN** A company needs to track and manage its Microsoft and Oracle software licenses as it migrates workloads to AWS. Which AWS service helps manage software license compliance?

**中** 一家公司在将工作负载迁移到 AWS 时需要跟踪和管理其 Microsoft 和 Oracle 软件许可证。哪些 AWS 服务有助于管理软件许可证合规性？

- **A.** AWS Systems Manager
  - AWS 系统经理
- **B.** AWS License Manager
  - AWS 许可证管理器
- **C.** AWS Config
  - AWS Config
- **D.** AWS Service Catalog
  - AWS 服务目录

**答案 / Answer: `B`**

AWS License Manager helps customers manage software license entitlements from vendors such as Microsoft, Oracle, and SAP across AWS and on-premises environments, providing centralized tracking and enforcement of licensing rules to prevent compliance violations.
AWS Systems Manager provides operational tools for managing EC2 instances and on-premises servers including patching, automation, and parameter storage, but does not track or enforce software licensing rules. AWS Config records and evaluates the configuration of AWS resources against compliance rules, but it monitors resource configurations rather than tracking software license entitlements and usage. AWS Service Catalog allows organizations to create and manage approved catalogs of IT services for deployment on AWS, but it governs which products can be deployed rather than tracking software license compliance.

AWS License Manager 帮助客户跨 AWS 和本地环境管理来自 Microsoft、Oracle 和 SAP 等供应商的软件许可证权利，提供集中跟踪和执行许可规则，以防止合规性违规。
AWS Systems Manager 提供用于管理 EC2 实例和本地服务器的操作工具，包括修补、自动化和参数存储，但不跟踪或强制执行软件许可规则。 AWS Config 根据合规性规则记录和评估 AWS 资源的配置，但它监视资源配置，而不是跟踪软件许可证权利和使用情况。 AWS Service Catalog 允许组织创建和管理经批准的 IT 服务目录以在 AWS 上部署，但它控制可以部署哪些产品，而不是跟踪软件许可证合规性。

---

## Question 29 · Domain 2

**EN** Using AWS Config to record, audit, and evaluate changes to AWS resources to enable traceability is an example of which AWS Well-Architected Framework pillar?

**中** 使用 AWS Config 记录、审核和评估 AWS 资源的更改以实现可追溯性是 AWS 架构完善的框架支柱的一个示例？

- **A.** Security
  - 安全
- **B.** Operational excellence
  - 卓越运营
- **C.** Performance efficiency
  - 性能效率
- **D.** Cost optimization
  - 成本优化

**答案 / Answer: `A`**

Using AWS Config to record, audit, and evaluate changes to resources is an example of enabling traceability, which is a core design principle of the Security pillar focused on monitoring and detective controls.
Operational Excellence focuses on running and improving operations through automation and responding to events, not on detective monitoring of resource changes for traceability. Performance Efficiency focuses on using computing resources efficiently to meet workload requirements as demand changes over time. Cost Optimization focuses on eliminating unnecessary spend and selecting the right resource types to reduce overall costs.

使用 AWS Config 记录、审核和评估资源更改是实现可追溯性的一个示例，这是专注于监视和检测控制的安全支柱的核心设计原则。
卓越运营侧重于通过自动化和响应事件来运行和改进运营，而不是对资源变化进行检测性监控以实现可追溯性。性能效率侧重于有效地使用计算资源来满足需求随时间变化的工作负载要求。成本优化侧重于消除不必要的支出并选择正确的资源类型以降低总体成本。

---

## Question 30 · Domain 2

**EN** Under the AWS shared responsibility model, which of the following is the customer's responsibility?

**中** 在 AWS 责任共担模型下，以下哪项是客户的责任？

- **A.** Patching guest OS and applications
  - 修补来宾操作系统和应用程序
- **B.** Patching and fixing flaws in the infrastructure
  - 修补和修复基础设施中的缺陷
- **C.** Physical and environmental controls
  - 物理和环境控制
- **D.** Configuration of AWS infrastructure devices
  - AWS 基础设施设备的配置

**答案 / Answer: `A`**

Managing application data encryption and configuring security for their own applications are customer responsibilities under the shared responsibility model, as customers control their own data and application layer while AWS manages the underlying infrastructure.
Securing the infrastructure that runs all AWS Cloud services including physical servers, networking hardware, and data center facilities is entirely AWS's responsibility as part of the security of the cloud. Providing the physical security of global data centers including perimeter access controls, surveillance, and environmental protections is entirely AWS's responsibility as customers never have access to the physical facilities. Maintaining the hardware that provides the foundation of the global infrastructure including servers, storage devices, and networking equipment is entirely AWS's responsibility as part of owning and operating the physical cloud infrastructure.

在共享责任模型下，管理应用程序数据加密和配置自己的应用程序的安全性是客户的责任，因为客户控制自己的数据和应用程序层，而 AWS 管理底层基础设施。
作为云安全的一部分，确保运行所有 AWS 云服务的基础设施（包括物理服务器、网络硬件和数据中心设施）的安全完全是 AWS 的责任。提供全球数据中心的物理安全（包括周边访问控制、监控和环境保护）完全是 AWS 的责任，因为客户永远无法访问物理设施。作为拥有和运营物理云基础设施的一部分，维护为全球基础设施提供基础的硬件（包括服务器、存储设备和网络设备）完全是 AWS 的责任。

---

## Question 31 · Domain 3

**EN** A company needs a cloud-native business intelligence (BI) service to create interactive dashboards and visualizations from multiple data sources. Which AWS service should they use?

**中** 公司需要云原生商业智能 (BI) 服务来从多个数据源创建交互式仪表板和可视化。他们应该使用哪种 AWS 服务？

- **A.** Amazon Athena
  - 亚马逊雅典娜
- **B.** Amazon QuickSight
  - 亚马逊 QuickSight
- **C.** Amazon Redshift
  - Amazon Redshift
- **D.** AWS Glue
  - AWS Glue

**答案 / Answer: `B`**

Amazon QuickSight is a cloud-native serverless business intelligence service for creating interactive dashboards and visualisations that can connect to a wide range of data sources including S3, RDS, Redshift, and Athena.
Amazon Athena is an interactive query service for analyzing data stored in S3 using SQL and is a data source that QuickSight can connect to, not a visualisation tool. Amazon Redshift is a managed data warehouse for storing and querying large volumes of structured data, not a business intelligence or dashboard service. AWS Glue is a managed extract, transform, and load service for preparing and moving data between sources, not for creating dashboards or visualisations.

Amazon QuickSight 是一种云原生无服务器商业智能服务，用于创建交互式仪表板和可视化，可以连接到各种数据源，包括 S3、RDS、Redshift 和 Athena。
Amazon Athena 是一项交互式查询服务，用于使用 SQL 分析 S3 中存储的数据，并且是 QuickSight 可以连接的数据源，而不是可视化工具。 Amazon Redshift 是一个用于存储和查询大量结构化数据的托管数据仓库，而不是商业智能或仪表板服务。 AWS Glue 是一种托管提取、转换和加载服务，用于在源之间准备和移动数据，而不是用于创建仪表板或可视化。

---

## Question 32 · Domain 3

**EN** A user needs to quickly deploy a non-relational database on AWS. The user does not want to manage the underlying hardware or the database software. Which AWS service can be used to accomplish this?

**中** 用户需要在 AWS 上快速部署非关系型数据库。用户不想管理底层硬件或数据库软件。可以使用哪种 AWS 服务来完成此任务？

- **A.** Amazon RDS
  - Amazon RDS
- **B.** Amazon DynamoDB
  - Amazon DynamoDB
- **C.** Amazon Aurora
  - Amazon Aurora
- **D.** Amazon Redshift
  - Amazon Redshift

**答案 / Answer: `B`**

Amazon DynamoDB is a fully managed non-relational NoSQL database that requires no hardware provisioning, software installation, or database management, and scales automatically to handle any workload.
Amazon RDS is a fully managed relational database service supporting engines such as MySQL, PostgreSQL, and SQL Server, and does not support non-relational data models. Amazon Aurora is a fully managed relational database compatible with MySQL and PostgreSQL, and is also a relational rather than a non-relational database service. Amazon Redshift is a managed data warehouse service optimized for running analytical SQL queries across large datasets, and is a relational service with no non-relational capability.

Amazon DynamoDB 是一个完全托管的非关系型 NoSQL 数据库，无需硬件配置、软件安装或数据库管理，并可自动扩展以处理任何工作负载。
Amazon RDS 是完全托管的关系型数据库服务，支持 MySQL、PostgreSQL、SQL Server 等引擎，不支持非关系型数据模型。 Amazon Aurora 是一个完全托管的关系型数据库，兼容 MySQL 和 PostgreSQL，也是关系型而非非关系型数据库服务。 Amazon Redshift 是一种托管数据仓库服务，针对跨大型数据集运行分析 SQL 查询进行了优化，并且是一种没有非关系功能的关系服务。

---

## Question 33 · Domain 2

**EN** Which AWS service can be used to track unauthorized API calls?

**中** 哪些 AWS 服务可用于跟踪未经授权的 API 调用？

- **A.** AWS Config
  - AWS Config
- **B.** AWS CloudTrail
  - AWS CloudTrail
- **C.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **D.** Amazon Inspector
  - Amazon Inspector

**答案 / Answer: `B`**

AWS CloudTrail records all API calls and account activity including unauthorised or unusual API calls, making it the correct service for tracking API calls that may indicate unauthorised access or activity in an AWS environment.
Amazon CloudWatch monitors operational metrics, logs, and events for AWS resources and applications, and while CloudWatch can receive CloudTrail events and trigger alarms, it does not itself track or record API call history to identify unauthorised API actions. Amazon Detective analyzes and visualises security data from multiple sources to investigate the root cause of suspicious activity, and uses CloudTrail data as one of its inputs, but is an investigation tool that builds on top of CloudTrail rather than performing the original API call recording. AWS Trusted Advisor provides automated recommendations across security, cost, performance, and fault tolerance categories, and is an advisory tool rather than a service that tracks or records API activity.

AWS CloudTrail 记录所有 API 调用和账户活动，包括未经授权或异常的 API 调用，使其成为跟踪可能表明 AWS 环境中未经授权的访问或活动的 API 调用的正确服务。
Amazon CloudWatch 监控 AWS 资源和应用程序的操作指标、日志和事件，虽然 CloudWatch 可以接收 CloudTrail 事件并触发警报，但它本身不会跟踪或记录 API 调用历史记录来识别未经授权的 API 操作。 Amazon Detective 分析和可视化来自多个来源的安全数据，以调查可疑活动的根本原因，并使用 CloudTrail 数据作为其输入之一，但它是一种构建在 CloudTrail 之上的调查工具，而不是执行原始 API 调用记录。 AWS Trusted Advisor 提供跨安全性、成本、性能和容错类别的自动化建议，并且是一种咨询工具，而不是跟踪或记录 API 活动的服务。

---

## Question 34 · Domain 3

**EN** A company wants to replace its physical desktop computers with cloud-hosted virtual desktops that employees can access from any device anywhere, with each employee having their own persistent personalized desktop environment. Which AWS service provides this capability?

**中** 一家公司希望用云托管的虚拟桌面取代其物理桌面计算机，员工可以从任何地方的任何设备访问该虚拟桌面，并且每个员工都拥有自己的持久个性化桌面环境。哪个 AWS 服务提供此功能？

- **A.** Amazon AppStream 2.0
  - 亚马逊应用程序流 2.0
- **B.** Amazon WorkSpaces
  - 亚马逊工作空间
- **C.** Amazon WorkSpaces Web
  - Amazon WorkSpaces 网站
- **D.** Amazon EC2
  - Amazon EC2

**答案 / Answer: `B`**

Amazon WorkSpaces is a fully managed, secure virtual desktop infrastructure service that provides each user with a persistent cloud desktop accessible from any supported device, allowing companies to replace physical desktop hardware while giving employees a consistent personalized computing environment that follows them wherever they work.
Amazon AppStream 2.0 streams specific desktop applications to a browser without providing a persistent full desktop environment; users cannot install their own applications or maintain personal desktop settings across sessions, making it suited for delivering specific software rather than replacing complete personal computers. Amazon WorkSpaces Web provides browser-based access to internal websites and SaaS applications from unmanaged devices, and is a restricted access solution for web content rather than a complete persistent virtual desktop that replaces a personal computer. Amazon EC2 can run Windows or Linux virtual machines that technically function as desktops, but customers must provision, patch, and manage the instances themselves and build their own desktop management infrastructure rather than using a fully managed desktop service.

Amazon WorkSpaces 是一项完全托管、安全的虚拟桌面基础设施服务，为每个用户提供可从任何支持的设备访问的持久云桌面，允许公司更换物理桌面硬件，同时为员工提供一致的个性化计算环境，无论他们在哪里工作。
Amazon AppStream 2.0 将特定的桌面应用程序流式传输到浏览器，而不提供持久的完整桌面环境；用户无法安装自己的应用程序或跨会话维护个人桌面设置，因此适合交付特定软件而不是替换完整的个人计算机。 Amazon WorkSpaces Web 提供从非托管设备对内部网站和 SaaS 应用程序的基于浏览器的访问，并且是 Web 内容的受限访问解决方案，而不是取代个人计算机的完整持久虚拟桌面。 Amazon EC2 可以运行在技术上充当桌面的 Windows 或 Linux 虚拟机，但客户必须自行配置、修补和管理实例并构建自己的桌面管理基础设施，而不是使用完全托管的桌面服务。

---

## Question 35 · Domain 3

**EN** A company wants to build, train, and deploy machine learning models at scale. Which AWS service provides a fully managed environment for this purpose?

**中** 一家公司希望大规模构建、训练和部署机器学习模型。哪种 AWS 服务为此提供了完全托管的环境？

- **A.** Amazon Rekognition
  - 亚马逊重新识别
- **B.** Amazon SageMaker
  - 亚马逊 SageMaker
- **C.** AWS Lambda
  - AWS Lambda
- **D.** Amazon Comprehend
  - 亚马逊理解

**答案 / Answer: `B`**

Amazon SageMaker is a fully managed machine learning service that provides tools to build, train, and deploy ML models at scale, covering the entire machine learning workflow in a single managed environment.
Amazon Rekognition is a computer vision service that analyzes images and videos to detect faces, objects, and scenes, and does not provide a general-purpose environment for building and training custom ML models. AWS Lambda is a serverless compute service that runs code in response to events, and while it can run inference on pre-built models, it is not designed for building and training machine learning models at scale. Amazon Comprehend is a natural language processing service that extracts meaning and insights from text, and is a pre-built ML service rather than a platform for building and training custom models.

Amazon SageMaker 是一项完全托管的机器学习服务，提供用于大规模构建、训练和部署 ML 模型的工具，涵盖单个托管环境中的整个机器学习工作流程。
Amazon Rekognition 是一项计算机视觉服务，可分析图像和视频以检测人脸、物体和场景，并且不提供用于构建和训练自定义 ML 模型的通用环境。 AWS Lambda 是一种无服务器计算服务，它运行代码来响应事件，虽然它可以对预先构建的模型运行推理，但它并不是为大规模构建和训练机器学习模型而设计的。 Amazon Comprehend 是一种自然语言处理服务，可从文本中提取含义和见解，并且是预构建的 ML 服务，而不是用于构建和训练自定义模型的平台。

---

## Question 36 · Domain 4 · Select 2

**EN** The AWS Cost Management tools give users the ability to do which of the following?

**中** AWS 成本管理工具使用户能够执行以下哪项操作？

- **A.** Terminate all AWS resources automatically if budget thresholds are exceeded
  - 如果超出预算阈值，则自动终止所有 AWS 资源
- **B.** Break down AWS costs by day, service, and linked AWS account
  - 按天、服务和链接的 AWS 账户细分 AWS 成本
- **C.** Create budgets and receive notifications if current of forecasted usage exceeds the budgets
  - 创建预算并在当前预测使用量超出预算时接收通知
- **D.** Switch automatically to Reserved Instances or Spot Instances, whichever is most cost-effective
  - 自动切换到预留实例或 Spot 实例，以最具成本效益的为准
- **E.** Move data stored in Amazon S3 to a more cost-effective storage class
  - 将 Amazon S3 中存储的数据移动到更具成本效益的存储类别

**答案 / Answer: `B,C`**

AWS Cost Management tools break down costs by day, service, and linked account for detailed analysis, and allow you to create budgets and receive notifications when actual or forecasted usage exceeds defined thresholds.
Terminating all AWS resources automatically if budget thresholds are exceeded is not a standard function of AWS Cost Management tools. AWS Budgets can trigger automated actions such as applying IAM policies to restrict further provisioning, but does not automatically terminate existing resources. Switching automatically to Reserved Instances or Spot Instances based on which is more cost-effective is not a function of AWS Cost Management tools. Instance purchasing decisions require deliberate configuration rather than automatic switching based on price comparisons. Moving data stored in S3 to a more cost-effective storage class is managed through S3 Lifecycle policies configured on individual buckets, and is a storage management feature rather than a function of the AWS Cost Management toolset.

AWS 成本管理工具按天、服务和链接账户细分成本以进行详细分析，并允许您创建预算并在实际或预测使用量超过定义的阈值时接收通知。
如果超出预算阈值则自动终止所有 AWS 资源并不是 AWS 成本管理工具的标准功能。 AWS Budgets 可以触发自动操作，例如应用 IAM 策略来限制进一步配置，但不会自动终止现有资源。自动切换到预留实例或 Spot 实例（基于哪一个更具成本效益）不是 AWS 成本管理工具的功能。实例购买决策需要经过深思熟虑的配置，而不是根据价格比较自动切换。将 S3 中存储的数据移动到更具成本效益的存储类是通过在各个存储桶上配置的 S3 生命周期策略进行管理的，并且是一项存储管理功能，而不是 AWS 成本管理工具集的功能。

---

## Question 37 · Domain 3

**EN** A company wants to enable employees to search across thousands of internal documents, SharePoint sites, and wikis using plain English questions and receive precise answers rather than a list of links. Which AWS service provides this intelligent enterprise search capability?

**中** 一家公司希望员工能够使用简单的英语问题搜索数千个内部文档、SharePoint 站点和 wiki，并获得精确的答案而不是链接列表。哪项 AWS 服务提供这种智能企业搜索功能？

- **A.** Amazon Comprehend
  - 亚马逊理解
- **B.** Amazon OpenSearch Service
  - Amazon OpenSearch Service
- **C.** Amazon Kendra
  - 亚马逊肯德拉
- **D.** Amazon Lex
  - 亚马逊莱克斯

**答案 / Answer: `C`**

Amazon Kendra is an intelligent enterprise search service powered by machine learning that allows users to ask questions in natural language and receive precise answers drawn from across multiple data sources such as documents, SharePoint sites, and databases, rather than returning a simple ranked list of matching links.
Amazon Comprehend is a natural language processing service that extracts insights such as sentiment, entities, and key phrases from already-digitised text, but it does not provide a search interface or retrieve answers from a document corpus in response to natural language user queries. Amazon OpenSearch Service is a managed search and analytics engine suited for log analytics, full-text search, and operational monitoring, and returns ranked document matches based on keyword relevance rather than providing the intelligent question-answering and precise answer extraction that Kendra offers through machine learning. Amazon Lex is a service for building conversational chatbots and voice interfaces using automatic speech recognition and natural language understanding, and is designed for managing multi-turn dialogues rather than indexing and searching across enterprise document repositories.

Amazon Kendra 是一项由机器学习提供支持的智能企业搜索服务，允许用户以自然语言提出问题并接收从文档、SharePoint 站点和数据库等多个数据源得出的精确答案，而不是返回简单的匹配链接排名列表。
Amazon Comprehend 是一种自然语言处理服务，可从已数字化的文本中提取情感、实体和关键短语等见解，但它不提供搜索界面或从文档语料库中检索答案来响应自然语言用户查询。 Amazon OpenSearch Service 是一种托管搜索和分析引擎，适用于日志分析、全文搜索和操作监控，并根据关键字相关性返回排名的文档匹配，而不是提供 Kendra 通过机器学习提供的智能问答和精确答案提取。 Amazon Lex 是一项使用自动语音识别和自然语言理解构建对话式聊天机器人和语音界面的服务，旨在管理多轮对话，而不是跨企业文档存储库进行索引和搜索。

---

## Question 38 · Domain 1

**EN** Which AWS service provides a central location to track the progress of application migrations across multiple AWS migration tools?

**中** 哪项 AWS 服务提供了一个中心位置来跟踪跨多个 AWS 迁移工具的应用程序迁移进度？

- **A.** AWS Application Migration Service
  - AWS 应用程序迁移服务
- **B.** AWS CloudTrail
  - AWS CloudTrail
- **C.** AWS Migration Hub
  - AWS 迁移中心
- **D.** AWS Config
  - AWS Config

**答案 / Answer: `C`**

AWS Migration Hub provides a single dashboard to discover existing servers, plan migrations, and track the status of application migrations across AWS migration tools such as Application Migration Service, Database Migration Service, and partner solutions.
AWS Application Migration Service performs the actual server replication and migration to AWS, but it handles the migration execution rather than providing a centralized tracking dashboard across multiple tools. AWS CloudTrail records API calls and management events for auditing purposes, and is an activity logging service rather than a migration progress tracking tool. AWS Config records and evaluates resource configurations for compliance, and monitors the state of AWS resources rather than tracking migration progress.

AWS Migration Hub 提供了一个仪表板来发现现有服务器、规划迁移并跨 AWS 迁移工具（例如应用程序迁移服务、数据库迁移服务和合作伙伴解决方案）跟踪应用程序迁移的状态。
AWS Application Migration Service 执行实际的服务器复制和迁移到 AWS，但它负责处理迁移执行，而不是跨多个工具提供集中式跟踪仪表板。 AWS CloudTrail 记录 API 调用和管理事件以用于审核目的，并且是活动日志服务而不是迁移进度跟踪工具。 AWS Config 记录并评估资源配置的合规性，并监控 AWS 资源的状态，而不是跟踪迁移进度。

---

## Question 39 · Domain 4

**EN** An architecture design includes Amazon EC2, an Elastic Load Balancer, and Amazon RDS. What is the BEST way to get a monthly cost estimation for this architecture?

**中** 架构设计包括 Amazon EC2、弹性负载均衡器和 Amazon RDS。获得该架构每月成本估算的最佳方法是什么？

- **A.** Open an AWS Support case, provide the architecture proposal, and ask for a monthly cost estimation
  - 打开 AWS Support 案例，提供架构方案，并要求每月成本估算
- **B.** Collect the published prices of the AWS services and calculate the monthly estimate
  - 收集 AWS 服务的公布价格并计算每月估算
- **C.** Use the AWS Pricing Calculator to estimate the monthly cost
  - 使用 AWS Pricing Calculator 估算每月费用
- **D.** Use the AWS Cost and Usage Report to estimate the monthly cost
  - 使用 AWS 成本和使用情况报告来估算每月成本

**答案 / Answer: `C`**

The AWS Pricing Calculator allows you to model the specific configuration of your EC2 instances, Elastic Load Balancer, and RDS database to generate a detailed and accurate monthly cost estimate before deployment.
Opening an AWS Support case to request a cost estimation is unnecessarily complex and time-consuming when a self-service tool like the AWS Pricing Calculator provides instant, detailed estimates without requiring support engagement. Collecting published prices and calculating manually is possible but error-prone and inefficient compared to the AWS Pricing Calculator, which automatically accounts for all pricing dimensions including data transfer, storage, and regional pricing variations. The AWS Cost and Usage Report provides granular data about actual AWS charges already incurred on active resources, and cannot be used to estimate the monthly cost of an architecture that has not yet been deployed.

AWS Pricing Calculator 允许您对 EC2 实例、弹性负载均衡器和 RDS 数据库的特定配置进行建模，以便在部署之前生成详细且准确的每月成本估算。
当 AWS Pricing Calculator 等自助服务工具无需支持即可提供即时、详细的估算时，打开 AWS Support 案例来请求成本估算会变得不必要的复杂和耗时。收集公布的价格并手动计算是可能的，但与 AWS Pricing Calculator 相比容易出错且效率低下，AWS Pricing Calculator 自动考虑所有定价维度，包括数据传输、存储和区域定价变化。 AWS 成本和使用情况报告提供了有关活动资源上已产生的实际 AWS 费用的详细数据，并且不能用于估计尚未部署的架构的每月成本。

---

## Question 40 · Domain 2

**EN** Which AWS service should a cloud practitioner use to identify security vulnerabilities of an AWS account?

**中** 云从业者应使用哪种 AWS 服务来识别 AWS 账户的安全漏洞？

- **A.** AWS Secrets Manager
  - AWS 秘密管理器
- **B.** Amazon Cognito
  - Amazon Cognito
- **C.** Amazon Macie
  - Amazon Macie
- **D.** AWS Trusted Advisor
  - AWS Trusted Advisor

**答案 / Answer: `D`**

AWS Trusted Advisor identifies potential security vulnerabilities by checking for common misconfigurations such as unrestricted security group access, missing MFA on the root account, and publicly accessible S3 buckets, helping customers address security weaknesses proactively.
Amazon Detective is an investigation service that analyzes security data from GuardDuty, CloudTrail, and VPC Flow Logs to help security teams investigate the root cause of suspicious activity, and is a forensic investigation tool rather than a service for identifying security vulnerabilities in an AWS account configuration. Amazon Macie uses machine learning to discover and classify sensitive data in Amazon S3, and is a data classification service for detecting potential data exposure rather than a tool for auditing account-wide security configurations and vulnerabilities. AWS Shield provides managed DDoS protection at the network and transport layers, and is a traffic protection service rather than a security vulnerability identification tool.

AWS Trusted Advisor 通过检查常见的错误配置（例如不受限制的安全组访问、根帐户缺少 MFA 以及可公开访问的 S3 存储桶）来识别潜在的安全漏洞，帮助客户主动解决安全漏洞。
Amazon Detective 是一项调查服务，可分析来自 GuardDuty、CloudTrail 和 VPC 流日志的安全数据，以帮助安全团队调查可疑活动的根本原因，它是一种取证调查工具，而不是用于识别 AWS 账户配置中的安全漏洞的服务。 Amazon Macie 使用机器学习来发现和分类 Amazon S3 中的敏感数据，是一种用于检测潜在数据泄露的数据分类服务，而不是审计帐户范围安全配置和漏洞的工具。 AWS Shield 提供网络层和传输层的托管 DDoS 防护，是流量防护服务而不是安全漏洞识别工具。

---

## Question 41 · Domain 2 · Select 2

**EN** Which actions represent best practices for using AWS IAM?

**中** 哪些操作代表使用 AWS IAM 的最佳实践？

- **A.** Configure a strong password policy
  - 配置强密码策略
- **B.** Share the security credentials among users of AWS accounts who are in the same Region
  - 在同一区域的 AWS 账户用户之间共享安全凭证
- **C.** Use access keys to log in to the AWS Management Console
  - 使用访问密钥登录 AWS 管理控制台
- **D.** Rotate access keys on a regular basis
  - 定期轮换访问密钥
- **E.** Avoid using IAM roles to delegate permissions
  - 避免使用 IAM 角色来委派权限

**答案 / Answer: `A,D`**

Applying least privilege permissions ensures IAM users and roles have only the access they need to perform their tasks, and using IAM roles for applications running on EC2 instances avoids embedding long-term credentials in code. Both are IAM security best practices.
Sharing credentials between users contradicts IAM best practices; each user should have their own unique credentials to maintain individual accountability and allow precise permission scoping, and sharing credentials prevents tracking who performed which actions. Storing access keys in plaintext on EC2 instances is a security anti-pattern that risks credential exposure through instance metadata, log files, or shared access to the instance; IAM roles should be used instead to provide temporary credentials automatically. Using the root user account for all administrative tasks contradicts IAM best practices; the root account should be used only for tasks that specifically require it, and IAM users with appropriate permissions should be used for all regular administrative activities.

应用最小权限可确保 IAM 用户和角色仅拥有执行其任务所需的访问权限，并且对 EC2 实例上运行的应用程序使用 IAM 角色可避免在代码中嵌入长期凭据。两者都是 IAM 安全最佳实践。
用户之间共享凭证与 IAM 最佳实践相矛盾；每个用户都应该拥有自己独特的凭据，以维护个人责任并允许精确的权限范围，并且共享凭据可以防止跟踪谁执行了哪些操作。在 EC2 实例上以明文形式存储访问密钥是一种安全反模式，存在通过实例元数据、日志文件或对实例的共享访问导致凭证暴露的风险；应使用 IAM 角色来自动提供临时凭证。使用 root 用户帐户执行所有管理任务与 IAM 最佳实践相矛盾； root 帐户应仅用于特别需要它的任务，而具有适当权限的 IAM 用户应用于所有常规管理活动。

---

## Question 42 · Domain 1

**EN** Which AWS Cloud Adoption Framework (AWS CAF) perspective helps ensure that cloud workloads achieve the confidentiality, integrity, and availability of data?

**中** 哪个 AWS 云采用框架 (AWS CAF) 视角有助于确保云工作负载实现数据的机密性、完整性和可用性？

- **A.** Governance
  - 治理
- **B.** Operations
  - 运营
- **C.** Platform
  - 平台
- **D.** Security
  - 安全

**答案 / Answer: `D`**

The Security perspective of the AWS CAF focuses on achieving the confidentiality, integrity, and availability of data and cloud workloads, including identity management, threat detection, infrastructure protection, and incident response.
The Governance perspective focuses on orchestrating cloud initiatives, aligning cloud strategy with business goals, and managing transformation risks, rather than the technical security posture of workloads. The Operations perspective focuses on delivering cloud services to meet business needs through monitoring, incident management, and continuous improvement of operational processes. The Platform perspective focuses on designing and building a scalable, enterprise-grade cloud environment including infrastructure, networking, and provisioning, rather than data protection and security controls.

AWS CAF 的安全视角侧重于实现数据和云工作负载的机密性、完整性和可用性，包括身份管理、威胁检测、基础设施保护和事件响应。
治理视角侧重于协调云计划、使云战略与业务目标保持一致以及管理转型风险，而不是工作负载的技术安全状况。运营视角侧重于通过监控、事件管理和运营流程的持续改进来提供云服务以满足业务需求。平台视角侧重于设计和构建可扩展的企业级云环境，包括基础设施、网络和配置，而不是数据保护和安全控制。

---

## Question 43 · Domain 3

**EN** A company receives thousands of scanned paper forms each day and needs to automatically extract text, tables, and specific field values from these documents without writing custom code or training machine learning models. Which AWS service should the company use?

**中** 一家公司每天收到数千份扫描纸质表单，需要从这些文档中自动提取文本、表格和特定字段值，而无需编写自定义代码或训练机器学习模型。公司应该使用哪种 AWS 服务？

- **A.** Amazon Comprehend
  - 亚马逊理解
- **B.** Amazon Rekognition
  - 亚马逊重新识别
- **C.** Amazon Transcribe
  - 亚马逊转录
- **D.** Amazon Textract
  - 亚马逊文本

**答案 / Answer: `D`**

Amazon Textract is a machine learning service that automatically extracts printed text, handwriting, structured tables, and form field data from scanned documents and images, going beyond simple character recognition to understand document structure and the relationships between fields, without requiring custom code or model training.
Amazon Comprehend is a natural language processing service that analyzes already-digitised text to extract entities, sentiment, and key phrases, but does not extract text or structured data from scanned images or PDF documents; it processes text that has already been extracted rather than performing the extraction itself. Amazon Rekognition is a machine learning service for analyzing images and videos to detect objects, scenes, activities, and faces, and while it can detect text in images as a capability, it does not extract structured tables or form fields from scanned business documents the way Textract does. Amazon Transcribe is a speech-to-text service that converts audio and video recordings into written text transcripts, and is designed for processing spoken language in audio files rather than for extracting text and structured data from scanned document images.

Amazon Textract 是一项机器学习服务，可从扫描的文档和图像中自动提取打印文本、手写内容、结构化表格和表单字段数据，超越简单的字符识别，了解文档结构和字段之间的关系，而无需自定义代码或模型训练。
Amazon Comprehend 是一种自然语言处理服务，可分析已数字化的文本以提取实体、情感和关键短语，但不会从扫描图像或 PDF 文档中提取文本或结构化数据；它处理已经提取的文本，而不是执行提取本身。 Amazon Rekognition 是一项机器学习服务，用于分析图像和视频以检测对象、场景、活动和面部，虽然它可以检测图像中的文本作为一种功能，但它不会像 Textract 那样从扫描的业务文档中提取结构化表或表单字段。 Amazon Transcribe 是一项语音转文本服务，可将音频和视频录制转换为书面文本转录，旨在处理音频文件中的口语，而不是从扫描文档图像中提取文本和结构化数据。

---

## Question 44 · Domain 3

**EN** Which AWS service or feature requires an internet service provider (ISP) and a colocation facility to be implemented?

**中** 哪些 AWS 服务或功能需要互联网服务提供商 (ISP) 和托管设施才能实施？

- **A.** AWS VPN
  - AWS VPN
- **B.** Amazon Connect
  - 亚马逊连接
- **C.** AWS Direct Connect
  - AWS Direct Connect
- **D.** Internet gateway
  - 互联网网关

**答案 / Answer: `C`**

AWS Direct Connect requires an ISP and a colocation facility at an AWS Direct Connect location to establish a dedicated private network connection between on-premises infrastructure and AWS, making it the only option here with those physical prerequisites.
AWS VPN establishes an encrypted connection over the public internet and requires no ISP arrangement or colocation facility beyond a standard internet connection. Amazon Connect is a cloud-based contact center service for managing customer communications and is entirely unrelated to network connectivity or physical infrastructure requirements. An internet gateway is a VPC component that enables communication between resources in a VPC and the public internet and requires no ISP or colocation arrangement to implement.

AWS Direct Connect 需要 ISP 和 AWS Direct Connect 位置的托管设施来在本地基础设施和 AWS 之间建立专用的专用网络连接，这使其成为满足这些物理先决条件的唯一选择。
AWS VPN 通过公共互联网建立加密连接，除了标准互联网连接之外，不需要 ISP 安排或托管设施。 Amazon Connect 是一项基于云的联络中心服务，用于管理客户通信，与网络连接或物理基础设施要求完全无关。互联网网关是一个 VPC 组件，可实现 VPC 中的资源与公共互联网之间的通信，并且不需要 ISP 或托管安排来实施。

---

## Question 45 · Domain 3

**EN** Which AWS hybrid cloud solution brings native AWS services, infrastructure, and operating models to virtually any data center, co-location space, or on-premises facility?

**中** 哪种 AWS 混合云解决方案可以将原生 AWS 服务、基础设施和运营模式引入几乎所有数据中心、托管空间或本地设施？

- **A.** AWS Direct Connect
  - AWS Direct Connect
- **B.** AWS VPN
  - AWS VPN
- **C.** AWS Storage Gateway
  - AWS 存储网关
- **D.** AWS Outposts
  - AWS 前哨站

**答案 / Answer: `D`**

AWS Outposts extends native AWS infrastructure, services, and operating models to on-premises locations, data centers, and co-location spaces, providing a truly consistent hybrid experience with the same AWS APIs and tools used in the cloud.
AWS Direct Connect provides a dedicated private network link between on-premises infrastructure and AWS, but does not bring AWS infrastructure physically on-premises. AWS VPN creates encrypted network connections between on-premises environments and AWS over the public internet, and is a connectivity service rather than an infrastructure extension. AWS Storage Gateway connects on-premises storage environments to AWS cloud storage, but only bridges storage and does not extend the full range of native AWS services and infrastructure to on-premises locations.

AWS Outposts 将原生 AWS 基础设施、服务和操作模型扩展到本地位置、数据中心和主机代管空间，利用云中使用的相同 AWS API 和工具提供真正一致的混合体验。
AWS Direct Connect 在本地基础设施和 AWS 之间提供专用的专用网络链接，但不会将 AWS 基础设施物理引入本地。 AWS VPN 通过公共互联网在本地环境和 AWS 之间创建加密网络连接，并且是一种连接服务而不是基础设施扩展。 AWS Storage Gateway 将本地存储环境连接到 AWS 云存储，但仅桥接存储，并不将全系列原生 AWS 服务和基础设施扩展到本地位置。

---

## Question 46 · Domain 1

**EN** A company wants to move an existing on-premises application to AWS as quickly as possible without making any changes to the application code or architecture. Which migration strategy should the company use?

**中** 一家公司希望尽快将现有的本地应用程序迁移到 AWS，而不对应用程序代码或架构进行任何更改。公司应该使用哪种迁移策略？

- **A.** Replatform
  - 平台重构
- **B.** Refactor
  - 重构
- **C.** Rehost
  - 重新托管
- **D.** Repurchase
  - 回购

**答案 / Answer: `C`**

Rehosting, commonly referred to as lift-and-shift, involves moving an application to the cloud without making any changes to the application code or architecture, making it the fastest migration approach that allows organizations to realize cloud benefits quickly with minimal upfront migration effort.
Replatforming involves making targeted optimizations during migration, such as moving from a self-managed database to a managed service, to gain cloud benefits while leaving the core application architecture unchanged; this requires some changes and therefore more effort than a pure rehost. Refactoring involves re-architecting the application to fully leverage cloud-native capabilities such as microservices and serverless computing, providing the greatest long-term benefits but requiring the most time and development investment of any migration strategy. Repurchasing involves replacing the existing application entirely with a different product, typically a SaaS solution, which requires learning a new platform and migrating data rather than simply moving the existing application to new infrastructure.

重新托管通常称为直接迁移，涉及将应用程序迁移到云而不对应用程序代码或架构进行任何更改，使其成为最快的迁移方法，使组织能够以最少的前期迁移工作快速实现云优势。
平台重构涉及在迁移过程中进行有针对性的优化，例如从自我管理的数据库迁移到托管服务，以获得云优势，同时保持核心应用程序架构不变；这需要一些改变，因此比纯粹的重新托管需要更多的努力。重构涉及重新架构应用程序，以充分利用微服务和无服务器计算等云原生功能，提供最大的长期收益，但需要任何迁移策略中最多的时间和开发投资。重新购买涉及用不同的产品（通常是 SaaS 解决方案）完全替换现有应用程序，这需要学习新平台并迁移数据，而不是简单地将现有应用程序迁移到新的基础设施。

---

## Question 47 · Domain 4

**EN** A workload on AWS will run for the foreseeable future by using a consistent number of Amazon EC2 instances. What pricing model will minimize cost while ensuring that compute resources remain available?

**中** 在可预见的将来，AWS 上的工作负载将通过使用一致数量的 Amazon EC2 实例来运行。哪种定价模型可以最大限度地降低成本，同时确保计算资源保持可用？

- **A.** Dedicated Hosts
  - 专用主机
- **B.** On-Demand Instances
  - 按需实例
- **C.** Spot Instances
  - 现货实例
- **D.** Reserved Instances
  - 预留实例

**答案 / Answer: `D`**

Reserved Instances are the most cost-effective option for a consistent, long-running workload, providing significant discounts of up to 72% over On-Demand pricing in exchange for a one or three-year commitment.
Dedicated Hosts provide physical server isolation for compliance and licensing purposes, and are priced at a premium over standard EC2 options, making them more expensive rather than minimizing cost for a standard consistent workload. On-Demand Instances charge the full hourly rate with no discount, making them the most expensive option for a workload running continuously at a consistent level where Reserved Instance savings would be substantial over time. Spot Instances can be interrupted by AWS when spare capacity is reclaimed, and the question specifies that compute resources must remain available, making Spot Instances unsuitable despite their lower cost.

预留实例是一致、长期运行的工作负载的最具成本效益的选择，与按需定价相比可提供高达 72% 的大幅折扣，以换取一年或三年的承诺。
专用主机出于合规性和许可目的提供物理服务器隔离，其定价高于标准 EC2 选项，这使得它们更加昂贵，而不是最大限度地降低标准一致工作负载的成本。按需实例按小时全额收费，没有折扣，这使得它们成为以一致水平持续运行的工作负载的最昂贵的选择，随着时间的推移，预留实例的节省将非常可观。当回收闲置容量时，AWS 可能会中断 Spot 实例，并且问题指定计算资源必须保持可用，这使得 Spot 实例不适合，尽管其成本较低。

---

## Question 48 · Domain 1

**EN** Which AWS framework provides guidance organized into six perspectives to help organizations identify and prioritize cloud transformation opportunities?

**中** 哪个 AWS 框架提供了分为六个视角的指导，以帮助组织识别云转型机会并确定其优先级？

- **A.** AWS Well-Architected Framework
  - AWS 架构完善的框架
- **B.** AWS Cloud Adoption Framework (AWS CAF)
  - AWS 云采用框架 (AWS CAF)
- **C.** AWS Migration Acceleration Program
  - AWS 迁移加速计划
- **D.** AWS Shared Responsibility Model
  - AWS 责任共担模型

**答案 / Answer: `B`**

The AWS Cloud Adoption Framework organizes guidance into six perspectives, Business, People, Governance, Platform, Security, and Operations, to help organizations identify skill gaps, process improvements, and technical requirements for successful cloud transformation.
The AWS Well-Architected Framework provides best practices for designing and operating workloads in the cloud across six pillars, but it is focused on workload architecture rather than organizational cloud adoption planning. The AWS Migration Acceleration Program is a consulting and technology engagement program that helps customers accelerate their migration to AWS, but it is not a framework of perspectives for cloud transformation planning. The AWS Shared Responsibility Model defines the division of security responsibilities between AWS and the customer, and is a security governance concept rather than a cloud adoption planning framework.

AWS 云采用框架将指南分为六个视角：业务、人员、治理、平台、安全性和运营，以帮助组织确定成功云转型的技能差距、流程改进和技术要求。
AWS 架构完善的框架跨六个支柱提供了在云中设计和操作工作负载的最佳实践，但它侧重于工作负载架构而不是组织云采用规划。 AWS 迁移加速计划是一项咨询和技术参与计划，可帮助客户加速向 AWS 的迁移，但它并不是云转型规划的视角框架。 AWS 责任共担模型定义了 AWS 与客户之间的安全责任划分，是一个安全治理概念，而不是云采用规划框架。

---

## Question 49 · Domain 1

**EN** Which pillar of the AWS Well-Architected Framework focuses on selecting the right resource types and sizes based on workload requirements?

**中** AWS 架构完善框架的哪个支柱侧重于根据工作负载要求选择正确的资源类型和大小？

- **A.** Reliability
  - 可靠性
- **B.** Cost Optimization
  - 成本优化
- **C.** Performance Efficiency
  - 性能效率
- **D.** Sustainability
  - 可持续发展

**答案 / Answer: `C`**

The Performance Efficiency pillar focuses on using computing resources efficiently to meet workload requirements, including selecting the right resource types and sizes and maintaining efficiency as demand changes over time.
Reliability focuses on ensuring a workload performs its intended function correctly and recovers from failures, not on resource selection. Cost Optimization focuses on eliminating unnecessary spend and reducing overall costs, which overlaps with right-sizing but is not the pillar that specifically defines it as a design principle. Sustainability focuses on reducing the environmental impact of cloud workloads by minimizing energy consumption and maximizing resource utilization.

性能效率支柱侧重于有效地使用计算资源来满足工作负载要求，包括选择正确的资源类型和大小以及随着需求随时间的变化而保持效率。
可靠性侧重于确保工作负载正确执行其预期功能并从故障中恢复，而不是资源选择。成本优化的重点是消除不必要的支出和降低总体成本，这与合理规模重叠，但并不是将其具体定义为设计原则的支柱。可持续性的重点是通过最大限度地减少能源消耗和最大限度地提高资源利用率来减少云工作负载对环境的影响。

---

## Question 50 · Domain 2

**EN** A company wants to track AWS resource configuration changes for compliance reasons. Which AWS feature can be used to meet this requirement?

**中** 出于合规性原因，一家公司希望跟踪 AWS 资源配置更改。可以使用哪些 AWS 功能来满足此要求？

- **A.** AWS Cost and Usage Report
  - AWS 成本和使用情况报告
- **B.** AWS Organizations service control policies (SCPs)
  - AWS Organizations 服务控制策略 (SCP)
- **C.** AWS Config rules
  - AWS Config 规则
- **D.** VPC Flow Logs
  - VPC 流日志

**答案 / Answer: `C`**

AWS Config continuously monitors and records resource configuration changes and evaluates them against compliance rules, generating a complete history of configuration changes that auditors and compliance teams can use to demonstrate adherence to standards.
AWS CloudTrail records all API calls and account activity for auditing and forensic purposes, and while it captures who made configuration changes and when, it does not evaluate whether those configurations comply with defined rules or provide the configuration state history that Config does. Amazon Inspector is an automated vulnerability assessment service for EC2 instances and container images that identifies software vulnerabilities and network misconfigurations, and is a security scanning tool rather than a resource configuration tracking and compliance evaluation feature. AWS Trusted Advisor provides automated recommendations across security, cost, performance, and fault tolerance categories, and is an advisory tool rather than a resource configuration change tracking and compliance evaluation service.

AWS Config 持续监控和记录资源配置更改，并根据合规性规则对其进行评估，生成配置更改的完整历史记录，审核员和合规团队可以使用该历史记录来证明对标准的遵守情况。
AWS CloudTrail 记录所有 API 调用和帐户活动以用于审计和取证目的，虽然它捕获谁进行了配置更改以及何时更改，但它不会评估这些配置是否符合定义的规则或提供 Config 所做的配置状态历史记录。 Amazon Inspector 是针对 EC2 实例和容器镜像的自动化漏洞评估服务，可识别软件漏洞和网络错误配置，是一种安全扫描工具，而不是资源配置跟踪和合规性评估功能。 AWS Trusted Advisor 提供跨安全、成本、性能和容错类别的自动化建议，并且是一种咨询工具，而不是资源配置更改跟踪和合规性评估服务。

---

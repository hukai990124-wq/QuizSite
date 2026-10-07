# AWS SAA-C03 原创练习卷 · 第 09 份

> 题目 401–450 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 401

**EN** You are running a successful multitier web application on AWS and your marketing department has asked you to add a reporting tier to the application. The reporting tier will aggregate and publish status reports every 30 minutes from user-generated information that is being stored in your web application s database. You are currently running a Multi-AZ RDS MySQL instance for the database tier. You also have implemented Elasticache as a database caching layer between the application tier and database tier. Please select the answer that will allow you to successful ly implement the reporting tier with as little impact as possible to your database.

**中** 您正在 AWS 上成功运行多层 Web 应用程序，并且您的营销部门要求您向该应用程序添加报告层。报告层将每 30 分钟根据存储在 Web 应用程序数据库中的用户生成信息汇总和发布状态报告。您当前正在为数据库层运行多可用区 RDS MySQL 实例。您还实现了 Elasticache 作为应用程序层和数据库层之间的数据库缓存层。请选择允许您成功实施报告层且对数据库影响尽可能小的答案。

- **A.** Continually send transaction logs from your master database to an S3 bucket and generate the reports off the S3 bucket using S3 byte range requests.
  - 持续将事务日志从主数据库发送到 S3 存储桶，并使用 S3 字节范围请求生成 S3 存储桶的报告。
- **B.** Generate the reports by querying the synchronously replicated standby RDS MySQL instance maintained through Multi-AZ.
  - 通过查询通过多可用区维护的同步复制备用 RDS MySQL 实例来生成报告。
- **C.** Launch a RDS Read Replica connected to your Multi-AZ master database and generate reports by querying the Read Replica.
  - 启动连接到多可用区主数据库的 RDS 只读副本，并通过查询只读副本生成报告。
- **D.** Generate the reports by querying the ElastiCache database caching tier.
  - 通过查询 ElastiCache 数据库缓存层生成报告。

**正确答案 / Answer: `C`**


---

## Question 402

**EN** Can I delete a snapshot of the root device of an EBS volume used by a registered AMI?

**中** 我可以删除已注册 AMI 使用的 EBS 卷的根设备快照吗？

- **A.** Only via API.
  - 只能通过 API。
- **B.** Only via Console.
  - 仅通过控制台。
- **C.** Yes.
  - 是的。
- **D.** No.
  - 不。

**正确答案 / Answer: `C`**


---

## Question 403

**EN** MySQL installations default to port [...].

**中** MySQL 安装默认端口 [...]。

- **A.** 3306.
  - 3306.
- **B.** 443.
  - 443.
- **C.** 80.
  - 80.
- **D.** 1158.
  - 1158.

**正确答案 / Answer: `A`**


---

## Question 404

**EN** In the 'Detailed ' monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send [...] minute metrics to Amazon CloudWatch.

**中** 在可用于 Amazon EBS 卷的“详细”监控数据中，预配置 IOPS 卷会自动将分钟指标发送到 Amazon CloudWatch。

- **A.** 5.
  - 5.
- **B.** 2.
  - 2.
- **C.** 1.
  - 1.
- **D.** 3.
  - 3.

**正确答案 / Answer: `C`**


---

## Question 405

**EN** A user has deployed an application on his private cloud. The user is using his own monitoring tool. He wants to configure it so that whenever there is an error, the monitoring tool will notify him via SMS. Which of the below mentioned AWS services will help in this scenario?

**中** 用户在他的私有云上部署了一个应用程序。用户正在使用自己的监控工具。他想对其进行配置，以便每当出现错误时，监控工具都会通过短信通知他。下面提到的哪些 AWS 服务在这种情况下会有所帮助？

- **A.** AWS SES.
  - AWS SES。
- **B.** AWS SNS.
  - AWS 社交网络服务。
- **C.** None because the user infrastructure is in the private cloud.
  - 没有，因为用户基础设施位于私有云中。
- **D.** AWS SMS.
  - AWS 短信。

**正确答案 / Answer: `B`**


---

## Question 406

**EN** What does Amazon Route 53 provide?

**中** Amazon Route 53 提供什么？

- **A.** A global Content Delivery Network.
  - 全球内容交付网络。
- **B.** None of these.
  - 这些都没有。
- **C.** A scalable Domain Name System.
  - 可扩展的域名系统。
- **D.** An SSH endpoint for Amazon EC2.
  - Amazon EC2 的 SSH 端点。

**正确答案 / Answer: `C`**


---

## Question 407

**EN** The AWS CloudHSM service defines a resource known as a high-availability (HA) [...], which is a virtual partition that represents a group of partitions, typically distributed between several physical HSMs for high-availability.

**中** AWS CloudHSM 服务定义了一种称为高可用性 (HA) 的资源，它是代表一组分区的虚拟分区，通常分布在多个物理 HSM 之间以实现高可用性。

- **A.** proxy group.
  - 代理组。
- **B.** partition group.
  - 分区组。
- **C.** functional group.
  - 功能组。
- **D.** relational group.
  - 关系组。

**正确答案 / Answer: `B`**


---

## Question 408

**EN** In Amazon EC2, partial instance-hours are billed [...].

**中** 在 Amazon EC2 中，按部分实例小时计费 [...]。

- **A.** per second used in the hour.
  - 一小时内使用的每秒。
- **B.** per minute used.
  - 每分钟使用。
- **C.** by combining partial segments into full hours.
  - 通过将部分时间段合并为完整时间。
- **D.** as full hours.
  - 作为完整的时间。

**正确答案 / Answer: `D`**


---

## Question 409

**EN** In Amazon EC2, what is the limit of Reserved Instances per Availability Zone each month?

**中** 在 Amazon EC2 中，每个可用区每月的预留实例限制是多少？

- **A.** 5.
  - 5.
- **B.** 20.
  - 20.
- **C.** 50.
  - 50.
- **D.** 10.
  - 10.

**正确答案 / Answer: `B`**


---

## Question 410

**EN** True or False: When using IAM to control access to your RDS resources, the key names that can be used are case sensitive. For example, aws: CurrentTime is NOT equivalent to AWS: currenttime.

**中** 对或错：使用 IAM 控制对 RDS 资源的访问时，可以使用的键名称区分大小写。例如，aws: CurrentTime 不等于 AWS: currenttime。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `B`**


---

## Question 411

**EN** You need to create a JSON-formatted text file for AWS CloudFormation. This is your first template and the only thing you know is that the templates include several major sections but there is only one that is required for it to work. What is the only section required?

**中** 您需要为 AWS CloudFormation 创建 JSON 格式的文本文件。这是您的第一个模板，您唯一知道的是模板包含几个主要部分，但只有一个部分需要它才能工作。唯一需要的部分是什么？

- **A.** Mappings.
  - 映射。
- **B.** Outputs.
  - 输出。
- **C.** Resources.
  - 资源。
- **D.** Conditions.
  - 状况。

**正确答案 / Answer: `C`**


---

## Question 412

**EN** A user wants to use an EBS-backed Amazon EC2 instance for a temporary job. Based on the input data, the job is most likely to finish within a week. Which of the following steps should be followed to terminate the instance automatically once the job is finished?

**中** 用户想要使用 EBS 支持的 Amazon EC2 实例来执行临时作业。根据输入数据，这项工作最有可能在一周内完成。作业完成后应遵循以下哪个步骤来自动终止实例？

- **A.** Configure the EC2 instance with a stop instance to terminate it.
  - 使用停止实例配置 EC2 实例以终止它。
- **B.** Configure the EC2 instance with ELB to terminate the instance when it remains idle.
  - 使用 ELB 配置 EC2 实例，以在实例空闲时终止该实例。
- **C.** Configure the Cloud Watch alarm on the instance that should perform the termination action once the instance is idle.
  - 在实例上配置 Cloud Watch 警报，一旦实例空闲，该警报应执行终止操作。
- **D.** Configure the Auto Scaling schedule activity that terminates the instance after 7 days.
  - 配置在 7 天后终止实例的 Auto Scaling 计划活动。

**正确答案 / Answer: `C`**


---

## Question 413

**EN** You are building an automated transcription service in which Amazon EC2 worker instances process an uploaded audio file and generate a text file. You must store both of these files in the same durable storage until the text file is retrieved. You do not know what the storage capacity requirements are. Which storage option is both cost-efficient and scalable?

**中** 您正在构建一个自动转录服务，其中 Amazon EC2 工作实例处理上传的音频文件并生成文本文件。您必须将这两个文件存储在同一个持久存储中，直到检索到文本文件。您不知道存储容量要求是多少。哪种存储选项既经济高效又可扩展？

- **A.** Multiple Amazon EBS volume with snapshots.
  - 具有快照的多个 Amazon EBS 卷。
- **B.** A single Amazon Glacier vault.
  - 单个 Amazon Glacier 保险库。
- **C.** A single Amazon S3 bucket.
  - 单个 Amazon S3 桶。
- **D.** Multiple instance stores.
  - 多个实例存储。

**正确答案 / Answer: `C`**


---

## Question 414

**EN** Your company has recently extended its datacenter into a VPC on AWS to add burst computing capacity as needed Members of your Network Operations Center need to be able to go to the AWSManagement Console and administer Amazon EC2 instances as necessary You don't want to create new IAM users for each NOC member and make those users sign in again to the AWS Management Console Which option below will meet the needs for your NOC members?

**中** 您的公司最近将其数据中心扩展到 AWS 上的 VPC，以根据需要添加突发计算能力 您的网络运营中心的成员需要能够访问 AWS 管理控制台并根据需要管理 Amazon EC2 实例 您不希望为每个 NOC 成员创建新的 IAM 用户并让这些用户再次登录 AWS 管理控制台 以下哪个选项可以满足您的 NOC 成员的需求？

- **A.** Use OAuth 2 0 to retrieve temporary AWS security credentials to enable your NOC members to sign in to the AWS Management Console.
  - 使用 OAuth 2 0 检索临时 AWS 安全凭证，以使您的 NOC 成员能够登录 AWS 管理控制台。
- **B.** Use web Identity Federation to retrieve AWS temporary security credentials to enable your NOC members to sign in to the AWS Management Console.
  - 使用 Web Identity Federation 检索 AWS 临时安全凭证，以使您的 NOC 成员能够登录 AWS 管理控制台。
- **C.** Use your on-premises SAML 2.0-compliant identity provider (IOP) to grant the NOC members federated access to the AWS Management Console via the AWS sing le sign-on (550) endpoint.
  - 使用本地 SAML 2.0 兼容身份提供商 (IOP) 授予 NOC 成员通过 AWS 单点登录 (550) 终端节点对 AWS 管理控制台的联合访问权限。
- **D.** Use your on-premises SAML2.0-compliam identity provider (IOP) to retrieve temporary security credentials to enable NOC members to sign in to the AWS Management Console.
  - 使用本地 SAML2.0 兼容身份提供商 (IOP) 检索临时安全凭证，以使 NOC 成员能够登录 AWS 管理控制台。

**正确答案 / Answer: `D`**


---

## Question 415

**EN** You have just set up your first Elastic Load Balancer (ELB) but it does not seem to be configured properly. You discover that before you start using ELB, you have to configure the listeners for your load balancer. Which protocols does ELB use to support the load balancing of applications?

**中** 您刚刚设置了第一个 Elastic Load Balancer (ELB)，但它似乎配置不正确。您发现在开始使用 ELB 之前，必须为负载均衡器配置侦听器。 ELB 使用哪些协议来支持应用程序的负载均衡？

- **A.** HTTP and HTTPS.
  - HTTP 和 HTTPS。
- **B.** HTTP, HTTPS, TCP, SSL and SSH.
  - HTTP、HTTPS、TCP、SSL 和 SSH。
- **C.** HTTP, HTTPS, TCP, and SSL.
  - HTTP、HTTPS、TCP 和 SSL。
- **D.** HTTP, HTTPS, TCP, SSL and SFTP.
  - HTTP、HTTPS、TCP、SSL 和 SFTP。

**正确答案 / Answer: `C`**


---

## Question 416

**EN** A t2.medium EC2 instance type must be launched with what type of Amazon Machine Image (AMI)?

**中** t2.medium EC2 实例类型必须使用什么类型的 Amazon 系统映像 (AMI) 启动？

- **A.** An Instance store Hardware Virtual Machine AMI.
  - 实例存储硬件虚拟机 AMI。
- **B.** An Instance store Paravirtual AMI.
  - 实例存储准虚拟 AMI。
- **C.** An Amazon EBS-backed Hardware Virtual Machine AMI.
  - Amazon EBS 支持的硬件虚拟机 AMI。
- **D.** An Amazon EBS-backed Paravirtual AMI.
  - Amazon EBS 支持的准虚拟 AMI。

**正确答案 / Answer: `C`**


---

## Question 417

**EN** A user has created a subnet in VPC and launched an EC2 instance within it. The user has not selected the option to assign the IP address while launching the instance. The user has 3 elastic IPs and is trying to assign one of the Elastic IPs to the VPC instance from the console. The console does not show any instance in the IP assignment screen. What is a possible reason that the instance is unavailable in the assigned IP console?

**中** 用户已在 VPC 中创建子网并在其中启动 EC2 实例。用户在启动实例时未选择分配 IP 地址的选项。用户拥有 3 个弹性 IP，并尝试从控制台将其中一个弹性 IP 分配给 VPC 实例。控制台的 IP 分配屏幕中不显示任何实例。实例在分配的 IP 控制台中不可用的可能原因是什么？

- **A.** The IP address may be attached to one of the instances.
  - IP 地址可能附加到其中一个实例。
- **B.** The IP address belongs to a different zone than the subnet zone.
  - IP 地址属于与子网区域不同的区域。
- **C.** The user has not created an internet gateway.
  - 用户尚未创建 Internet 网关。
- **D.** The IP addresses belong to EC2 Classic; so they cannot be assigned to VPC.
  - IP 地址属于 EC2 Classic；所以不能分配到 VPC。

**正确答案 / Answer: `D`**


---

## Question 418

**EN** Will I be alerted when automatic fail over occurs?

**中** 发生自动故障转移时我会收到警报吗？

- **A.** Only if SNS configured.
  - 仅当配置了 SNS 时。
- **B.** Yes.
  - 是的。
- **C.** No.
  - 不。
- **D.** Only if Cloud watch configured.
  - 仅当配置了云监视时。

**正确答案 / Answer: `B`**


---

## Question 419

**EN** Amazon EC2 provides a [...]. It is an HTTP or HTTPS request that uses the HTTP verbs GET or POST.

**中** Amazon EC2 提供了一个[...]。它是使用 HTTP 动词 GET 或 POST 的 HTTP 或 HTTPS 请求。

- **A.** web database.
  - 网络数据库。
- **B.** .NET framework.
  - .NET 框架。
- **C.** Query API.
  - 查询 API。
- **D.** C library.
  - C 库。

**正确答案 / Answer: `C`**


---

## Question 420

**EN** Which of the following requires a custom Cloud Watch metric to monitor?

**中** 以下哪一项需要自定义 Cloud Watch 指标来监控？

- **A.** Memory Utilization of an EC2 instance.
  - EC2 实例的内存利用率。
- **B.** CPU Utilization of an EC2 instance.
  - EC2 实例的 CPU 利用率。
- **C.** Disk usage activity of an EC2 instance.
  - EC2 实例的磁盘使用活动。
- **D.** Data transfer of an EC2 instance.
  - EC2 实例的数据传输。

**正确答案 / Answer: `C`**


---

## Question 421

**EN** An International company has deployed a multi-tier web application that relies on DynamoDB in a single region. For regulatory reasons they need disaster recovery capability in a separate region with a Recovery Time Objective of 2 hours and a Recovery Point Objective of 24 hours. They should synchronize their data on a regular basis and be able to provision the web application rapidly using CloudFormation. The objective is to minimize changes to the existing web application, control the throughput of DynamoDB used for the synchronization of data and synchronize only the modified elements. Which design would you choose to meet these requirements?

**中** 一家国际公司在单个区域部署了依赖于 DynamoDB 的多层 Web 应用程序。出于监管原因，他们需要在单独区域提供灾难恢复能力，恢复时间目标为 2 小时，恢复点目标为 24 小时。他们应该定期同步数据，并能够使用 CloudFormation 快速配置 Web 应用程序。目标是最大限度地减少对现有 Web 应用程序的更改、控制用于数据同步的 DynamoDB 的吞吐量并仅同步修改的元素。您会选择哪种设计来满足这些要求？

- **A.** Use AWS data Pipeline to schedule a DynamoDB cross region copy once a day. Create a 'Last updated' attribute in your DynamoDB table that would represent the timestamp of the last update and use it as a filter.
  - 使用 AWS data Pipeline 安排每天一次 DynamoDB 跨区域复制。在 DynamoDB 表中创建一个“上次更新”属性，该属性代表上次更新的时间戳，并将其用作过滤器。
- **B.** Use EMR and write a custom script to retrieve data from DynamoDB in the current region using a SCAN operation and push it to DynamoDB in the second region.
  - 使用 EMR 并编写自定义脚本，使用 SCAN 操作从当前区域中的 DynamoDB 检索数据，并将其推送到第二个区域中的 DynamoDB。
- **C.** Use AWS data Pipeline to schedule an export of the DynamoDB table to S3 in the current region once a day, then schedule another task immediately after it that will import data from S3 to DynamoDB in the other region.
  - 使用 AWS data Pipeline 安排每天一次将 DynamoDB 表导出到当前区域中的 S3，然后立即安排另一个任务，将数据从 S3 导入到其他区域中的 DynamoDB。
- **D.** Send also each item into an SQS queue in the second region; use an auto-scaling group behind the SQS queue to replay the write in the second region.
  - 将每个项目发送到第二个区域的 SQS 队列中；在 SQS 队列后面使用自动缩放组来重播第二个区域中的写入。

**正确答案 / Answer: `A`**


---

## Question 422

**EN** An Elastic IP address (EIP) is a static IP address designed for dynamic cloud computing. With an EIP, you can mask the failure of an instance or software by rapidly remapping the address to another instance in your account. Your EIP is associated with your AWS account, not a particular EC2 instance, and it remains associated with your account until you choose to explicitly release it. By default how many EIPs is each AWS account limited to on a per region basis?

**中** 弹性 IP 地址（EIP）是专为动态云计算而设计的静态 IP 地址。使用 EIP，您可以通过快速将地址重新映射到帐户中的另一个实例来掩盖实例或软件的故障。您的 EIP 与您的 AWS 账户相关联，而不是与特定的 EC2 实例相关联，并且它会一直与您的账户相关联，直到您选择显式释放它为止。默认情况下，每个 AWS 账户在每个区域限制有多少个 EIP？

- **A.** 1.
  - 1.
- **B.** 5.
  - 5.
- **C.** Unlimited.
  - 无限。
- **D.** 10.
  - 10.

**正确答案 / Answer: `B`**


---

## Question 423

**EN** Which Amazon Storage behaves like raw, unformatted, external block devices that you can attach to your instances?

**中** 哪些 Amazon Storage 的行为类似于可以附加到实例的原始、未格式化的外部块设备？

- **A.** None of these.
  - 这些都没有。
- **B.** Amazon Instance Storage
  - 亚马逊实例存储
- **C.** Amazon EBS
  - Amazon EBS
- **D.** All of these.
  - 所有这些。

**正确答案 / Answer: `C`**


---

## Question 424

**EN** You currently operate a web application in the AWS US-East region. The application runs on an autoscaled layer of EC2 instances and an RDS Multi-AZ database. Your IT security compliance officer has tasked you to develop a reliable and durable logging solution to track changes made to your EC2, IAM, and RDS resources. The solution must ensure the integrity and confidentiality of your log data. Which of these solutions would you recommend?

**中** 您目前在 AWS 美国东部区域运营一个 Web 应用程序。该应用程序在 EC2 实例的自动缩放层和 RDS 多可用区数据库上运行。您的 IT 安全合规官要求您开发可靠且持久的日志记录解决方案，以跟踪对 EC2、IAM 和 RDS 资源所做的更改。该解决方案必须确保日志数据的完整性和机密性。您会推荐以下哪些解决方案？

- **A.** Create a new CloudTrail trail with one new S3 bucket to store the logs and with the global services option selected. Use IAM roles, S3 bucket policies, and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.
  - 使用一个新的 S3 存储桶来存储日志并选择全局服务选项，创建一个新的 CloudTrail 跟踪。在存储日志的 S3 存储桶上使用 IAM 角色、S3 存储桶策略和多重身份验证 (MFA) 删除。
- **B.** Create a new CloudTrail with one new S3 bucket to store the logs. Configure SNS to send log file delivery notifications to your management system. Use IAM roles and S3 bucket policies on the S3 bucket that stores your logs.
  - 使用一个新的 S3 存储桶创建一个新的 CloudTrail 来存储日志。配置 SNS 以将日志文件传送通知发送到您的管理系统。在存储日志的 S3 存储桶上使用 IAM 角色和 S3 存储桶策略。
- **C.** Create a new CloudTrail trail with an existing S3 bucket to store the logs and with the global services option selected. Use S3 ACLs and Multi Factor Authentication (MFA) Delete on the S3 bucket that stores your logs.
  - 使用现有 S3 存储桶创建新的 CloudTrail 跟踪来存储日志并选择全局服务选项。在存储日志的 S3 存储桶上使用 S3 ACL 和多重身份验证 (MFA) 删除。
- **D.** Create three new CloudTrail trails with three new S3 buckets to store the logs: one for the AWS Management console, one for AWS SDKs, and one for command line tools. Use IAM roles and S3 bucket policies on the S3 buckets that store your logs.
  - 使用三个新的 S3 存储桶创建三个新的 CloudTrail 跟踪来存储日志：一个用于 AWS 管理控制台，一个用于 AWS 开发工具包，一个用于命令行工具。在存储日志的 S3 存储桶上使用 IAM 角色和 S3 存储桶策略。

**正确答案 / Answer: `A`**


---

## Question 425

**EN** Does DynamoDB support in-place atomic updates?

**中** DynamoDB 是否支持就地原子更新？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。
- **C.** It does support in-place non-atomic updates.
  - 它确实支持就地非原子更新。
- **D.** It is not defined.
  - 它没有被定义。

**正确答案 / Answer: `A`**


---

## Question 426

**EN** Which of the following is true of Amazon EC2 security group?

**中** 关于 Amazon EC2 安全组，以下哪一项是正确的？

- **A.** You can modify the outbound rules for EC2-Classic.
  - 您可以修改 EC2-Classic 的出站规则。
- **B.** You can modify the rules for a security group only if the security group controls the traffic for just one instance.
  - 仅当安全组仅控制一个实例的流量时，您才可以修改该安全组的规则。
- **C.** You can modify the rules for a security group only when a new instance is created.
  - 只有在创建新实例时才可以修改安全组的规则。
- **D.** You can modify the rules for a security group at any time.
  - 您可以随时修改安全组的规则。

**正确答案 / Answer: `D`**


---

## Question 427

**EN** You need to set up security for your VPC and you know that Amazon VPC provides two features that you can use to increase security for your VPC: security groups and network access control lists (ACLs). You have already looked into security groups and you are now trying to understand ACLs. Which statement below is incorrect in relation to ACLs?

**中** 您需要为 VPC 设置安全性，并且您知道 Amazon VPC 提供了两个可用于提高 VPC 安全性的功能：安全组和网络访问控制列表 (ACL)。您已经研究过安全组，现在正在尝试了解 ACL。以下关于 ACL 的哪项表述不正确？

- **A.** Supports allow rules and deny rules.
  - 支持允许规则和拒绝规则。
- **B.** Is stateful: Return traffic is automatically allowed, regardless of any rules.
  - 是有状态的：无论任何规则如何，都会自动允许返回流量。
- **C.** Processes rules in number order when deciding whether to allow traffic.
  - 在决定是否允许流量时按编号顺序处理规则。
- **D.** Operates at the subnet level (second layer of defense).
  - 在子网级别运行（第二层防御）。

**正确答案 / Answer: `B`**


---

## Question 428

**EN** A user is trying to launch a similar EC2 instance from an existing instance with the option 'Launch More like this'. The AMI of the selected instance is deleted. What will happen in this case?

**中** 用户尝试使用“启动更多类似的”选项从现有实例启动类似的 EC2 实例。所选实例的 AMI 将被删除。在这种情况下会发生什么？

- **A.** AWS does not need an AMI for the 'Launch more like this' option.
  - AWS 不需要 AMI 来实现“启动更多类似功能”选项。
- **B.** AWS will launch the instance but will not create a new AMI.
  - AWS 将启动实例，但不会创建新的 AMI。
- **C.** AWS will create a new AMI and launch the instance.
  - AWS 将创建一个新的 AMI 并启动该实例。
- **D.** AWS will throw an error saying that the AMI is deregistered.
  - AWS 将抛出错误，指出 AMI 已取消注册。

**正确答案 / Answer: `D`**


---

## Question 429

**EN** True or False: When you use the AWS Management Console to delete an IAM user, IAM also deletes any signing certificates and any access keys belonging to the user.

**中** 对或错：当您使用 AWS 管理控制台删除 IAM 用户时，IAM 还会删除属于该用户的所有签名证书和所有访问密钥。

- **A.** False.
  - 错误的。
- **B.** This is configurable.
  - 这是可配置的。
- **C.** True.
  - 真的。

**正确答案 / Answer: `C`**


---

## Question 430

**EN** You are working with a customer who is using Chef configuration management in their data center. Which service is designed to let the customer leverage existing Chef recipes in AWS?

**中** 您正在与一位在其数据中心使用 Chef 配置管理的客户合作。哪种服务旨在让客户利用 AWS 中现有的 Chef 食谱？

- **A.** Amazon Simple Workflow Service.
  - 亚马逊简单工作流程服务。
- **B.** AWS Elastic Beanstalk.
  - AWS Elastic Beanstalk。
- **C.** AWS CloudFormation.
  - AWS CloudFormation。
- **D.** AWS OpsWorks.
  - AWS OpsWorks。

**正确答案 / Answer: `D`**


---

## Question 431

**EN** Does Amazon RDS for SQL Server currently support importing data into the msdb database?

**中** Amazon RDS for SQL Server 目前支持将数据导入 msdb 数据库吗？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 432

**EN** How can an EBS volume that is currently attached to an EC2 instance be migrated from one Availability Zone to another?

**中** 如何将当前附加到 EC2 实例的 EBS 卷从一个可用区迁移到另一个可用区？

- **A.** Detach the volume and attach it to another EC2 instance in the other AZ.
  - 分离该卷并将其附加到另一个可用区中的另一个 EC2 实例。
- **B.** Simply create a new volume in the other AZ and specify the original volume as the source.
  - 只需在其他可用区创建一个新卷并将原始卷指定为源即可。
- **C.** Create a snapshot of the volume, and create a new volume from the snapshot in the other AZ.
  - 创建卷的快照，并从其他可用区中的快照创建新卷。
- **D.** Detach the volume, then use the ec2-migrate-voiume command to move it to another AZ.
  - 分离该卷，然后使用 ec2-migrate-voiume 命令将其移动到另一个可用区。

**正确答案 / Answer: `C`**


---

## Question 433

**EN** Having set up a website to automatically be redirected to a backup website if it fails, you realize that there are different types of failovers that are possible. You need all your resources to be available the majority of the time. Using Amazon Route 53 which configuration would best suit this requirement?

**中** 将网站设置为在出现故障时自动重定向到备份网站后，您会意识到可能存在不同类型的故障转移。您需要所有资源在大部分时间都可用。使用 Amazon Route 53 哪种配置最适合此要求？

- **A.** Active-active failover.
  - 主动-主动故障转移。
- **B.** None. Route 53 can't failover.
  - 没有任何。 Route 53 无法进行故障转移。
- **C.** Active-passive failover.
  - 主动-被动故障转移。
- **D.** Active-active-passive and other mixed configurations.
  - 主动-主动-被动等混合配置。

**正确答案 / Answer: `A`**


---

## Question 434

**EN** A client application requires operating system privileges on a relational database server. What is an appropriate configuration for a highly available database architecture?

**中** 客户端应用程序需要关系数据库服务器上的操作系统权限。高可用数据库架构的合适配置是什么？

- **A.** A standalone Amazon EC2 instance.
  - 独立的 Amazon EC2 实例。
- **B.** Amazon RDS in a Multi-AZ configuration.
  - 多可用区配置中的 Amazon RDS。
- **C.** Amazon EC2 instances in a replication configuration utilizing a single Availability Zone.
  - 使用单个可用区的复制配置中的 Amazon EC2 实例。
- **D.** Amazon EC2 instances in a replication configuration utilizing two different Availability Zones.
  - 复制配置中的 Amazon EC2 实例利用两个不同的可用区。

**正确答案 / Answer: `D`**


---

## Question 435

**EN** Is decreasing the storage size of a DB Instance permitted?

**中** 是否允许减少数据库实例的存储大小？

- **A.** Depends on the ROMS used.
  - 取决于所使用的 ROM。
- **B.** Yes.
  - 是的。
- **C.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 436

**EN** Can you encrypt EBS volumes?

**中** 您可以加密 EBS 卷吗？

- **A.** Yes, you can enable encryption when you create a new EBS volume using the AWS Management Console, API, or CLI.
  - 是的，您可以在使用 AWS 管理控制台、API 或 CLI 创建新的 EBS 卷时启用加密。
- **B.** No, you should use a third-party software to perform raw block-level encryption of an EBS volume.
  - 不可以，您应该使用第三方软件对 EBS 卷执行原始块级加密。
- **C.** Yes, but you must use a third-party API for encrypting data before it's loaded on EBS.
  - 是的，但您必须使用第三方 API 来加密数据，然后才能将数据加载到 EBS 上。
- **D.** Yes, you can encrypt with the special 'ebs_encrypt' command through Amazon APIs.
  - 是的，您可以通过 Amazon API 使用特殊的“ebs_encrypt”命令进行加密。

**正确答案 / Answer: `A`**


---

## Question 437

**EN** You must assign each server to at least [...] security group.

**中** 您必须将每台服务器至少分配给 [...] 安全组。

- **A.** 3.
  - 3.
- **B.** 2.
  - 2.
- **C.** 4.
  - 4.
- **D.** 1.
  - 1.

**正确答案 / Answer: `D`**


---

## Question 438

**EN** Is the encryption of connections between my application and my DB Instance using SSL for the MySQL server engines available?

**中** 是否可以使用 MySQL 服务器引擎的 SSL 对我的应用程序和数据库实例之间的连接进行加密？

- **A.** Yes.
  - 是的。
- **B.** Only in VPC.
  - 仅在 VPC 中。
- **C.** Only in certain regions.
  - 仅在某些地区。
- **D.** No.
  - 不。

**正确答案 / Answer: `A`**


---

## Question 439

**EN** Your manager has come to you saying that he is very confused about the bills he is receiving from AWS as he is getting different bills for every user and needs you to look into making it more understandable. Which of the following would be the best solution to meet his request?

**中** 您的经理来找您说，他对从 AWS 收到的账单感到非常困惑，因为他为每个用户收到了不同的账单，需要您进行研究，使其更容易理解。以下哪项是满足他的要求的最佳解决方案？

- **A.** AWS Billing Aggregation.
  - AWS 账单聚合。
- **B.** Consolidated Billing.
  - 合并账单。
- **C.** Deferred Billing.
  - 延期计费。
- **D.** Aggregated Billing.
  - 汇总计费。

**正确答案 / Answer: `B`**


---

## Question 440

**EN** Regarding Amazon Route 53, if your application is running on Amazon EC2 instances in two or more Amazon EC2 regions and if you have more than one Amazon EC2 instance in one or more regions, you can use [...] to route traffic to the correct region and then use [...] route traffic to instances within the region, based on probabilities that you specify.

**中** 关于 Amazon Route 53，如果您的应用程序在两个或多个 Amazon EC2 区域中的 Amazon EC2 实例上运行，并且您在一个或多个区域中拥有多个 Amazon EC2 实例，则您可以使用 [...] 将流量路由到正确的区域，然后根据您指定的概率使用 [...] 将流量路由到该区域内的实例。

- **A.** weighted-based routing; alias resource record sets.
  - 基于加权的路由；别名资源记录集。
- **B.** latency-based routing; weighted resource record sets.
  - 基于延迟的路由；加权资源记录集。
- **C.** weighted-based routing; weighted resource record sets.
  - 基于加权的路由；加权资源记录集。
- **D.** latency-based routing; alias resource record sets.
  - 基于延迟的路由；别名资源记录集。

**正确答案 / Answer: `B`**


---

## Question 441

**EN** If I scale the storage capacity provisioned to my DB Instance by mid of a billing month, how will I be charged?

**中** 如果我在账单月中旬之前扩展为数据库实例配置的存储容量，我将如何付费？

- **A.** You will be charged for the highest storage capacity you have used.
  - 您将按照您使用的最高存储容量付费。
- **B.** On a proration basis.
  - 按比例分配。

**正确答案 / Answer: `B`**


---

## Question 442

**EN** When using the following AWS services, which should be implemented in multiple Availability Zones for high availability solutions? (Choose 2 answers)

**中** 使用以下 AWS 服务时，哪些应该在多个可用区实施以获得高可用性解决方案？ （选择 2 个答案）

- **A.** Amazon Dynamo DB.
  - 亚马逊 Dynamo 数据库。
- **B.** Amazon Elastic Compute Cloud (EC2).
  - 亚马逊弹性计算云（EC2）。
- **C.** Amazon Elastic Load Balancing.
  - 亚马逊弹性负载平衡。
- **D.** Amazon Simple Notification Service (SNS).
  - 亚马逊简单通知服务（SNS）。
- **E.** Amazon Simple Storage Service (S3).
  - 亚马逊简单存储服务（S3）。

**正确答案 / Answer: `B, C`**


---

## Question 443

**EN** A customer is hosting their company website on a cluster of web servers that are behind a public facing load balancer. The customer also uses Amazon Route 53 to manage their public DNS. How should the customer configure the DNS zone apex record to point to the load balancer?

**中** 客户将其公司网站托管在一组 Web 服务器上，这些服务器位于面向公众的负载均衡器后面。客户还使用 Amazon Route 53 来管理其公共 DNS。客户应如何配置 DNS 区域顶点记录以指向负载均衡器？

- **A.** Create an A record pointing to the IP address of the load balancer.
  - 创建指向负载均衡器 IP 地址的 A 记录。
- **B.** Create a CNAME record pointing to the load balancer DNS name.
  - 创建指向负载均衡器 DNS 名称的 CNAME 记录。
- **C.** Create a CNAME record aliased to the load balancer DNS name.
  - 创建一个别名为负载均衡器 DNS 名称的 CNAME 记录。
- **D.** Create an A record aliased to the load balancer DNS name.
  - 创建一个别名为负载均衡器 DNS 名称的 A 记录。

**正确答案 / Answer: `C`**


---

## Question 444

**EN** True or False: REST or Query requests are HTTP or HTTPS requests that use an HTTP verb (such as GET or POST) and a parameter named Action or Operation that specifies the API you are calling.

**中** 对或错：REST 或查询请求是使用 HTTP 动词（例如 GET 或 POST）以及名为 Action 或 Operation（指定您正在调用的 API）的参数的 HTTP 或 HTTPS 请求。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `B`**


---

## Question 445

**EN** Which of the following features ensures even distribution of traffic to Amazon EC2 instances in multiple Availability Zones registered with a load balancer?

**中** 以下哪项功能可确保将流量均匀分配到向负载均衡器注册的多个可用区中的 Amazon EC2 实例？

- **A.** Elastic Load Balancing request routing.
  - Elastic Load Balancing 请求路由。
- **B.** An Amazon Route 53 weighted routing policy.
  - Amazon Route 53 加权路由策略。
- **C.** Elastic Load Balancing cross-zone load balancing.
  - Elastic Load Balancing 跨区域负载均衡。
- **D.** An Amazon Route 53 latency routing policy.
  - Amazon Route 53 延迟路由策略。

**正确答案 / Answer: `A`**


---

## Question 446

**EN** Groups can't [...].

**中** 团体不能[...]。

- **A.** be nested more than 3 levels.
  - 嵌套超过 3 层。
- **B.** be nested at all.
  - 完全可以嵌套。
- **C.** be nested more than 4 levels.
  - 嵌套超过 4 层。
- **D.** be nested more than 2 levels.
  - 嵌套超过 2 层。

**正确答案 / Answer: `B`**


---

## Question 447

**EN** You have been using T2 instances as your CPU requirements have not been that intensive. However you now start to think about larger instance types and start looking at M1 and M3 instances. You are a little confused as to the differences between them as they both seem to have the same ratio of CPU and memory. Which statement below is incorrect as to why you would use one over the other?

**中** 您一直在使用 T2 实例，因为您的 CPU 要求并不那么密集。但是，您现在开始考虑更大的实例类型并开始考虑 M1 和 M3 实例。您对它们之间的差异有点困惑，因为它们似乎都具有相同的 CPU 和内存比例。关于为什么要使用其中一种而不是另一种，以下哪项陈述是不正确的？

- **A.** M3 instances are less expensive than M1 instances.
  - M3 实例比 M1 实例便宜。
- **B.** M3 instances are configured with more swap memory than M1 instances.
  - M3 实例配置的交换内存多于 M1 实例。
- **C.** M3 instances provide better, more consistent performance that M1 instances for most use-cases.
  - 对于大多数用例，M3 实例比 M1 实例提供更好、更一致的性能。
- **D.** M3 instances also offer SSD-based instance storage that delivers higher I/O performance.
  - M3 实例还提供基于 SSD 的实例存储，可提供更高的 I/O 性能。

**正确答案 / Answer: `B`**


---

## Question 448

**EN** Do the system resources on the Micro instance meet the recommended configuration for Oracle?

**中** Micro 实例的系统资源是否满足 Oracle 推荐配置？

- **A.** Yes, completely.
  - 是的，完全如此。
- **B.** Yes, but only for certain situations.
  - 是的，但仅适用于某些情况。

**正确答案 / Answer: `B`**


---

## Question 449

**EN** Which of the following are true regarding AWS CloudTrail? (Choose 3 answers)

**中** 关于 AWS CloudTrail，以下哪项描述是正确的？ （选择 3 个答案）

- **A.** CloudTrail is enabled globally.
  - CloudTrail 已在全球范围内启用。
- **B.** CloudTrail is enabled by default.
  - CloudTrail 默认启用。
- **C.** CloudTrail is enabled on a per-region basis.
  - CloudTrail 按区域启用。
- **D.** CloudTrail is enabled on a per-service basis.
  - CloudTrail 是按服务启用的。
- **E.** Logs can be delivered to a single Amazon S3 bucket for aggregation.
  - 日志可以传送到单个 Amazon S3 存储桶进行聚合。
- **F.** CloudTrail is enabled for all available services within a region.
  - CloudTrail 已针对区域内的所有可用服务启用。
- **G.** Logs can only be processed and delivered to the region in which they are generated.
  - 日志只能在其产生的区域进行处理和传送。

**正确答案 / Answer: `C, D, E`**


---

## Question 450

**EN** If you're unable to connect via SSH to your EC2 instance, which of the following should you check and possibly correct to restore connectivity?

**中** 如果您无法通过 SSH 连接到 EC2 实例，您应该检查并可能纠正以下哪一项来恢复连接？

- **A.** Adjust Security Group to permit egress traffic over TCP port 443 from your IP.
  - 调整安全组以允许来自您的 IP 通过 TCP 端口 443 的传出流量。
- **B.** Configure the JAM role to permit changes to security group settings.
  - 配置 JAM 角色以允许更改安全组设置。
- **C.** Modify the instance security group to allow ingress of ICMP packets from your IP.
  - 修改实例安全组以允许来自您的 IP 的 ICMP 数据包进入。
- **D.** Adjust the instance's Security Group to permit ingress traffic over port 22 from your IP.
  - 调整实例的安全组以允许来自您的 IP 通过端口 22 的入口流量。
- **E.** Apply the most recently released Operating System security patches.
  - 应用最新发布的操作系统安全补丁。

**正确答案 / Answer: `D`**


---

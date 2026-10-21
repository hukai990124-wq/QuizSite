# AWS SAA-C03 原创练习卷 · 第 08 份

> 题目 351–400 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 351

**EN** Before I delete an EBS volume, what can I do if I want to recreate the volume later?

**中** 在删除 EBS 卷之前，如果我想稍后重新创建该卷，该怎么办？

- **A.** Create a copy of the EBS volume (not a snapshot).
  - 创建 EBS 卷的副本（不是快照）。
- **B.** Store a snapshot of the volume.
  - 存储卷的快照。
- **C.** Download the content to an EC2 instance
  - 将内容下载到 EC2 实例
- **D.** Back up the data in to a physical disk.
  - 将数据备份到物理磁盘。

**正确答案 / Answer: `B`**


---

## Question 352

**EN** An accountant asks you to design a small VPC network for him and, due to the nature of his business, just needs something where the workload on the network will be low, and dynamic data will be accessed infrequently. Being an accountant, low cost is also a major factor. Which EBS volume type would best suit his requirements?

**中** 一位会计师要求您为他设计一个小型 VPC 网络，由于他的业务性质，只需要网络工作负载较低且动态数据访问频率较低的网络。作为会计师，低成本也是一个主要因素。哪种 EBS 卷类型最适合他的要求？

- **A.** Magnetic.
  - 磁的。
- **B.** Any, as they all perform the same and cost the same.
  - 任何，因为它们的性能相同且成本相同。
- **C.** General Purpose (SSD).
  - 通用（SSD）。
- **D.** Magnetic or Provisioned IOPS (SSD).
  - 磁性或预配置 IOPS (SSD)。

**正确答案 / Answer: `A`**


---

## Question 353

**EN** Your company currently has a 2-tier web application running in an on-premises data center. You have experienced several infrastructure failures in the past two months resulting in significant financial losses. Your CIO is strongly agreeing to move the application to AWS. While working on achieving buy-in from the other company executives, he asks you to develop a disaster recovery plan to help improve Business continuity in the short term. He specifies a target Recovery Time Objective (RTO) of 4 hours and a Recovery Point Objective (RPO) of 1 hour or less. He also asks you to implement the solution within 2 weeks. Your database is 200GB in size and you have a 20Mbps Internet connection. How would you do this while minimizing costs?

**中** 您的公司当前有一个在本地数据中心运行的 2 层 Web 应用程序。在过去的两个月中，您经历了多次基础设施故障，导致了重大的财务损失。您的 CIO 强烈同意将应用程序迁移到 AWS。在努力获得其他公司高管的支持时，他要求您制定灾难恢复计划，以帮助提高短期内的业务连续性。他指定了 4 小时的目标恢复时间目标 (RTO) 和 1 小时或更短的恢复点目标 (RPO)。他还要求你在两周内实施该解决方案。您的数据库大小为 200GB，并且您拥有 20Mbps 的互联网连接。您将如何做到这一点，同时最大限度地降低成本？

- **A.** Create an EBS backed private AMI which includes a fresh install of your application. Develop a CloudFormation template which includes your AMI and the required EC2, AutoScaling, and ELB resources to support deploying the application across Multiple Availability Zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
  - 创建 EBS 支持的私有 AMI，其中包括应用程序的全新安装。开发一个 CloudFormation 模板，其中包括您的 AMI 以及所需的 EC2、AutoScaling 和 ELB 资源，以支持跨多个可用区部署应用程序。通过安全 VPN 连接将事务从本地数据库异步复制到 AWS 中的数据库实例。
- **B.** Deploy your application on EC2 instances within an Auto Scaling group across multiple availability zones. Asynchronously replicate transactions from your on-premises database to a database instance in AWS across a secure VPN connection.
  - 在跨多个可用区的 Auto Scaling 组内的 EC2 实例上部署您的应用程序。通过安全 VPN 连接将事务从本地数据库异步复制到 AWS 中的数据库实例。
- **C.** Create an EBS backed private AMI which includes a fresh install of your application. Setup a script in your data center to backup the local database every 1 hour and to encrypt and copy the resulting file to an S3 bucket using multi-part upload.
  - 创建 EBS 支持的私有 AMI，其中包括应用程序的全新安装。在数据中心设置一个脚本，每 1 小时备份一次本地数据库，并使用分段上传加密生成的文件并将其复制到 S3 存储桶。
- **D.** Install your application on a compute-optimized EC2 instance capable of supporting the application's average load. Synchronously replicate transactions from your on-premises database to a database instance in AWS across a secure Direct Connect connection.
  - 将您的应用程序安装在能够支持应用程序平均负载的计算优化型 EC2 实例上。通过安全的 Direct Connect 连接将事务从本地数据库同步复制到 AWS 中的数据库实例。

**正确答案 / Answer: `A`**


---

## Question 354

**EN** A customer implemented AWS Storage Gateway with a gateway-cached volume at their main office. An event takes the link between the main and branch office offline. Which methods will enable the branch office to access their data? (Choose 3 answers)

**中** 客户在其总部实施了带有网关缓存卷的 AWS Storage Gateway。某个事件使总公司和分支机构之间的链接脱机。哪些方法将使分支机构能够访问其数据？ （选择 3 个答案）

- **A.** Use a HTTPS GET to the Amazon S3 bucket where the files are located.
  - 使用 HTTPS GET 访问文件所在的 Amazon S3 存储桶。
- **B.** Restore by implementing a lifecycle policy on the Amazon S3 bucket.
  - 通过在 Amazon S3 存储桶上实施生命周期策略进行恢复。
- **C.** Make an Amazon Glacier Restore API ca ll to load the files into another Amazon S3 bucket within four to six hours.
  - 进行 Amazon Glacier 恢复 API 调用，在四到六个小时内将文件加载到另一个 Amazon S3 存储桶中。
- **D.** Launch a new AWS Storage Gateway instance AMI in Amazon EC2, and restore from a gateway snapshot.
  - 在 Amazon EC2 中启动新的 AWS Storage Gateway 实例 AMI，并从网关快照恢复。
- **E.** Create an Amazon EBS volume from a gateway snapshot, and mount it to an Amazon EC2 instance.
  - 从网关快照创建 Amazon EBS 卷，并将其挂载到 Amazon EC2 实例。
- **F.** Launch an AWS Storage Gateway virtual iSCSI device at the branch office, and restore from a gateway snapshot.
  - 在分支机构启动 AWS Storage Gateway 虚拟 iSCSI 设备，并从网关快照恢复。

**正确答案 / Answer: `D, E, F`**


---

## Question 355

**EN** Your customer is willing to consolidate their log streams (access logs, application logs, security logs, etc.) in one single system. Once consolidated, the customer wants to analyze these logs in real-time based on heuristics. From time to time, the customer needs to validate heuristics, which requires going back to data samples extracted from the last 12 hours. What is the best approach to meet your customer's requirements?

**中** 您的客户愿意将他们的日志流（访问日志、应用程序日志、安全日志等）整合到一个系统中。整合后，客户希望根据启发法实时分析这些日志。有时，客户需要验证启发式方法，这需要返回过去 12 小时提取的数据样本。满足客户要求的最佳方法是什么？

- **A.** Send all the log events to Amazon SQS. Setup an Auto Scaling group of EC2 servers to consume the logs and apply the heuristics.
  - 将所有日志事件发送到 Amazon SQS。设置 EC2 服务器的 Auto Scaling 组来使用日志并应用启发式方法。
- **B.** Send all the log events to Amazon Kinesis. Develop a client process to apply heuristics on the logs.
  - 将所有日志事件发送到 Amazon Kinesis。开发一个客户端流程以对日志应用启发式方法。
- **C.** Configure Amazon Cloud Trail to receive custom logs. Use EMR to apply heuristics to the logs.
  - 配置 Amazon Cloud Trail 以接收自定义日志。使用 EMR 对日志应用启发式方法。
- **D.** Setup an Auto Scaling group of EC2 syslogd servers. Store the logs on S3. Use EMR to apply heuristics on the logs.
  - 设置 EC2 syslogd 服务器的 Auto Scaling 组。将日志存储在 S3 上。使用 EMR 对日志应用启发式方法。

**正确答案 / Answer: `B`**


---

## Question 356

**EN** Can the string value of 'Key' be prefixed with laws?

**中** ‘Key’的字符串值可以加上 laws 前缀吗？

- **A.** No.
  - 不。
- **B.** Only for EC2 not S3.
  - 仅适用于 EC2，不适用于 S3。
- **C.** Yes.
  - 是的。
- **D.** Only for S3 not EC.
  - 仅适用于 S3，不适用于 EC。

**正确答案 / Answer: `A`**


---

## Question 357

**EN** You are configuring your company's application to use Auto Scaling and need to move user state information. Which of the following AWS services provides a shared data store with durability and low latency?

**中** 您正在将公司的应用程序配置为使用 Auto Scaling，并且需要移动用户状态信息。以下哪项 AWS 服务提供了具有持久性和低延迟的共享数据存储？

- **A.** AWS ElastiCache Memcached.
  - AWS ElastiCache Memcached。
- **B.** Amazon Simple Storage Service.
  - 亚马逊简单存储服务。
- **C.** Amazon EC2 instance storage.
  - Amazon EC2 实例存储。
- **D.** Amazon DynamoDB.
  - Amazon DynamoDB。

**正确答案 / Answer: `B`**


---

## Question 358

**EN** Your company previously configured a heavily used, dynamically routed VPN connection between your on-premises data center and AWS. You recently provisioned a DirectConnect connection and would like to start using the new connection. After configuring DirectConnect settings in the AWS Console, which of the following options will provide the most seamless transition for your users?

**中** 您的公司之前在本地数据中心和 AWS 之间配置了频繁使用的动态路由 VPN 连接。您最近配置了 DirectConnect 连接并希望开始使用新连接。在 AWS 控制台中配置 DirectConnect 设置后，以下哪个选项将为您的用户提供最无缝的过渡？

- **A.** Delete your existing VPN connection to avoid routing loops. Configure your DirectConnect router with the appropriate settings and verify network traffic is leveraging DirectConnect.
  - 删除现有的 VPN 连接以避免路由循环。使用适当的设置配置 DirectConnect 路由器，并验证网络流量正在利用 DirectConnect。
- **B.** Configure your DirectConnect router with a higher BGP priority than your VPN router. Verify network traffic is leveraging DirectConnect and then delete your existing VPN connection.
  - 使用比 VPN 路由器更高的 BGP 优先级配置 DirectConnect 路由器。验证网络流量正在利用 DirectConnect，然后删除现有的 VPN 连接。
- **C.** Update your VPC route tables to point to the DirectConnect connection. Configure your DirectConnect router with the appropriate settings. Verify network traffic is leveraging DirectConnect and then delete the VPN connection.
  - 更新您的 VPC 路由表以指向 DirectConnect 连接。使用适当的设置配置 DirectConnect 路由器。验证网络流量正在利用 DirectConnect，然后删除 VPN 连接。
- **D.** Configure your DirectConnect router. Update your VPC route tables to point to the DirectConnect connection. Configure your VPN connection with a higher BGP priority and verify network traffic is leveraging the DirectConnect connection.
  - 配置您的 DirectConnect 路由器。更新您的 VPC 路由表以指向 DirectConnect 连接。使用更高的 BGP 优先级配置您的 VPN 连接，并验证网络流量正在利用 DirectConnect 连接。

**正确答案 / Answer: `D`**


---

## Question 359

**EN** After setting up several database instances in Amazon Relational Database Service (Amazon RDS) you decide that you need to track the performance and health of your databases. How can you do this?

**中** 在 Amazon Relational Database Service (Amazon RDS) 中设置多个数据库实例后，您决定需要跟踪数据库的性能和运行状况。你怎么能这样做呢？

- **A.** Subscribe to Amazon RDS events to be notified when changes occur with a DB instance, DB snapshot, DB parameter group, or DB security group.
  - 订阅 Amazon RDS 事件，以便在数据库实例、数据库快照、数据库参数组或数据库安全组发生更改时收到通知。
- **B.** Use the free Amazon CloudWatch service to monitor the performance and health of a DB instance.
  - 使用免费的 Amazon CloudWatch 服务来监控数据库实例的性能和运行状况。
- **C.** All of the items listed will track the performance and health of a database.
  - 列出的所有项目都将跟踪数据库的性能和运行状况。
- **D.** View, download, or watch database log files using the Amazon RDS console or Amazon RDS APIs. You can also query some database log files that are loaded into database tables.
  - 使用 Amazon RDS 控制台或 Amazon RDS API 查看、下载或监视数据库日志文件。您还可以查询加载到数据库表中的一些数据库日志文件。

**正确答案 / Answer: `C`**


---

## Question 360

**EN** You deployed your company website using Elastic Beanstalk and you enabled log file rotation to S3. An Elastic MapReduce job is periodically analyzing the logs on S3 to build a usage dashboard that you share with your CIO. You recently improved overall performance of the website using CloudFront for dynamic content delivery and your website as the origin. After this architectural change, the usage dashboard shows that the traffic on your website dropped by an order of magnitude. How do you fix your usage dashboard?

**中** 您使用 Elastic Beanstalk 部署了公司网站，并启用了日志文件轮换到 S3。 Elastic MapReduce 作业会定期分析 S3 上的日志，以构建您与 CIO 共享的使用情况仪表板。您最近使用 CloudFront 进行动态内容交付并以您的网站作为源，提高了网站的整体性能。进行此架构更改后，使用情况仪表板显示您网站上的流量下降了一个数量级。您如何修复您的使用情况仪表板？

- **A.** Enable CloudFront to deliver access logs to S3 and use them as input of the Elastic MapReduce job.
  - 启用 CloudFront 将访问日志传送到 S3 并将其用作 Elastic MapReduce 作业的输入。
- **B.** Turn on Cloud Trail and use trail log tiles on S3 as input of the Elastic MapReduce job.
  - 打开 Cloud Trail 并使用 S3 上的跟踪日志图块作为 Elastic MapReduce 作业的输入。
- **C.** Change your log collection process to use Cloud Watch ELB metrics as input of the Elastic Map Reduce job.
  - 更改日志收集流程以使用 Cloud Watch ELB 指标作为 Elastic Map Reduce 作业的输入。
- **D.** Use Elastic Beanstalk 'Rebuild Environment' option to update log delivery to the Elastic Map Reduce job.
  - 使用 Elastic Beanstalk“重建环境”选项更新到 Elastic Map Reduce 作业的日志传送。
- **E.** Use Elastic Beanstalk 'Restart App server(s)' option to update log delivery to the Elastic Map Reduce job.
  - 使用 Elastic Beanstalk“重新启动应用程序服务器”选项更新到 Elastic Map Reduce 作业的日志传送。

**正确答案 / Answer: `A`**


---

## Question 361

**EN** A customer has a 10 GB AWS Direct Connect connection to an AWS region where they have a web application hosted on Amazon Elastic Computer Cloud (EC2). The application has dependencies on an on-premises mainframe database that uses a BASE (Basic Available. Sort stale Eventual consistency) rather than an ACID (Atomicity. Consistency isolation. Durability) consistency model. The application is exhibiting undesirable behavior because the database is not able to handle the volume of writes. How can you reduce the load on your on-premises database resources in the most cost-effective way?

**中** 客户与 AWS 区域有 10 GB AWS Direct Connect 连接，在该区域有一个托管在 Amazon Elastic Computer Cloud (EC2) 上的 Web 应用程序。该应用程序依赖于本地大型机数据库，该数据库使用 BASE（基本可用。排序陈旧最终一致性）而不是 ACID（原子性。一致性隔离。持久性）一致性模型。应用程序表现出不良行为，因为数据库无法处理写入量。如何以最具成本效益的方式减少本地数据库资源的负载？

- **A.** Use an Amazon Elastic MapReduce (EMR) S3DistCp as a synchronization mechanism between the on-premises database and a Hadoop cluster on AWS.
  - 使用 Amazon Elastic MapReduce (EMR) S3DistCp 作为本地数据库与 AWS 上的 Hadoop 集群之间的同步机制。
- **B.** Modify the application to write to an Amazon SQS queue and develop a worker process to flush the queue to the on-premises database.
  - 修改应用程序以写入 Amazon SQS 队列，并开发一个工作进程以将队列刷新到本地数据库。
- **C.** Modify the application to use DynamoDB to feed an EMR cluster which uses a map function to write to the on-premises database.
  - 修改应用程序以使用 DynamoDB 为 EMR 集群提供数据，该集群使用映射函数写入本地数据库。
- **D.** Provision an RDS read-replica database on AWS to handle the writes and synchronize the two databases using Data Pipeline.
  - 在 AWS 上配置 RDS 只读副本数据库来处理写入并使用 Data Pipeline 同步两个数据库。

**正确答案 / Answer: `B`**


---

## Question 362

**EN** You are very concerned about security on your network because you have multiple programmers testing APIs and SDKs and you have no idea what is happening. You think CloudTrail may help but are not sure what it does. Which of the following statements best describes the AWS service CloudTrail?

**中** 您非常担心网络安全，因为您有多个程序员测试 API 和 SDK，而您不知道发生了什么。您认为 CloudTrail 可能有帮助，但不确定它的作用。以下哪项陈述最能描述 AWS 服务 CloudTrail？

- **A.** With AWS CloudTrail you can get a history of AWS API calls and related events for your account.
  - 使用 AWS CloudTrail，您可以获得您账户的 AWS API 调用和相关事件的历史记录。
- **B.** With AWS CloudTrail you can get a history of IAM users for your account.
  - 使用 AWS CloudTrail，您可以获得您账户的 IAM 用户历史记录。
- **C.** With AWS CloudTrail you can get a history of S3 logfiles for your account.
  - 使用 AWS CloudTrail，您可以获得您帐户的 S3 日志文件的历史记录。
- **D.** With AWS CloudTrail you can get a history of CloudFormation JSON scripts used for your account.
  - 使用 AWS CloudTrail，您可以获得您帐户使用的 CloudFormation JSON 脚本的历史记录。

**正确答案 / Answer: `A`**


---

## Question 363

**EN** Every user you create in the IAM system starts with [...].

**中** 您在 IAM 系统中创建的每个用户都以 [...] 开头。

- **A.** partial permissions.
  - 部分权限。
- **B.** full permissions.
  - 完整权限。
- **C.** no permissions.
  - 没有权限。

**正确答案 / Answer: `C`**


---

## Question 364

**EN** Amazon S3 allows you to set per-file permissions to grant read and/or write access. However you have decided that you want an entire bucket with 100 files already in it to be accessible to the public. You don't want to go through 100 files individually and set permissions. What would be the best way to do this?

**中** Amazon S3 允许您设置每个文件的权限以授予读取和/或写入访问权限。但是，您已决定希望公众可以访问其中已包含 100 个文件的整个存储桶。您不想单独检查 100 个文件并设置权限。最好的方法是什么？

- **A.** Move the bucket to a new region.
  - 将存储桶移至新区域。
- **B.** Add a bucket policy to the bucket.
  - 为存储桶添加存储桶策略。
- **C.** Move the files to a new bucket.
  - 将文件移至新存储桶。
- **D.** Use Amazon EBS instead of S3.
  - 使用 Amazon EBS 代替 S3。

**正确答案 / Answer: `B`**


---

## Question 365

**EN** You are designing an SSUTLS solution that requires HTTPS clients to be authenticated by the Web server using client certificate authentication. The solution must be resilient. Which of the following options would you consider for configuring the web server infrastructure? (Choose 2 answers)

**中** 您正在设计一个 SSUTLS 解决方案，该解决方案要求 Web 服务器使用客户端证书身份验证对 HTTPS 客户端进行身份验证。解决方案必须具有弹性。您会考虑以下哪些选项来配置 Web 服务器基础架构？ （选择 2 个答案）

- **A.** Configure ELB with TCP listeners on TCP/4d3. And place the Web servers behind it.
  - 在 TCP/4d3 上使用 TCP 侦听器配置 ELB。并将 Web 服务器放在其后面。
- **B.** Configure your Web servers with EIPS Place the Web servers in a Route 53 Record Set and configure health checks against all Web servers.
  - 使用 EIPS 配置 Web 服务器 将 Web 服务器放入 Route 53 记录集中，并针对所有 Web 服务器配置运行状况检查。
- **C.** Configure ELB with HTTPS listeners, and place the Web servers behind it.
  - 使用 HTTPS 侦听器配置 ELB，并将 Web 服务器放在其后面。
- **D.** Configure your web servers as the origins for a CloudFront distribution. Use custom SSL certificates on your CloudFront distribution.
  - 将您的 Web 服务器配置为 CloudFront 分配的源。在您的 CloudFront 分配上使用自定义 SSL 证书。

**正确答案 / Answer: `A, B`**


---

## Question 366

**EN** Which of the following are use cases for Amazon DynamoDB? (Choose 3 answers)

**中** 以下哪些是 Amazon DynamoDB 的用例？ （选择 3 个答案）

- **A.** Storing BLOB data.
  - 存储 BLOB 数据。
- **B.** Managing web sessions.
  - 管理网络会话。
- **C.** Storing JSON documents.
  - 存储 JSON 文档。
- **D.** Storing metadata for Amazon S3 objects.
  - 存储 Amazon S3 对象的元数据。
- **E.** Running relational joins and complex updates.
  - 运行关系连接和复杂的更新。
- **F.** Storing large amounts of infrequently accessed data.
  - 存储大量不经常访问的数据。

**正确答案 / Answer: `B, C, D`**


---

## Question 367

**EN** You have been asked to set up a database in AWS that will require frequent and granular updates. You know that you will require a reasonable amount of storage space but are not sure of the best option. What is the recommended storage option when you run a database on an instance with the above criteria?

**中** 您被要求在 AWS 中设置一个需要频繁且精细更新的数据库。您知道您将需要合理数量的存储空间，但不确定最佳选择。当您在符合上述条件的实例上运行数据库时，建议的存储选项是什么？

- **A.** Amazon S3.
  - Amazon S3。
- **B.** Amazon EBS.
  - Amazon EBS。
- **C.** AWS Storage Gateway.
  - AWS Storage Gateway。
- **D.** Amazon Glacier.
  - Amazon Glacier。

**正确答案 / Answer: `B`**


---

## Question 368

**EN** An application hosted at the EC2 instance receives an HTTP request from ELB. The same request has an X-Forwarded-For header, which has three IP addresses. Which system's IP will be a part of this header?

**中** EC2 实例上托管的应用程序接收来自 ELB 的 HTTP 请求。同一个请求有一个 X-Forwarded-For 标头，其中包含三个 IP 地址。哪个系统的 IP 将成为此标头的一部分？

- **A.** Previous Request IP address.
  - 上一个请求 IP 地址。
- **B.** Client IP address.
  - 客户端 IP 地址。
- **C.** All of the answers listed here.
  - 所有的答案都列在这里。
- **D.** Load Balancer IP address.
  - 负载均衡器 IP 地址。

**正确答案 / Answer: `C`**


---

## Question 369

**EN** An organization has developed a mobile application which allows end users to capture a photo on their mobile device, and store it inside an application. The application internally uploads the data to AWS S3. The organization wants each user to be able to directly upload data to S3 using their Google ID. How will the mobile app allow this?

**中** 一个组织开发了一款移动应用程序，允许最终用户在其移动设备上拍摄照片并将其存储在应用程序中。应用程序在内部将数据上传到 AWS S3。该组织希望每个用户都能够使用他们的 Google ID 直接将数据上传到 S3。移动应用程序如何允许这样做？

- **A.** Use the AWS Web identity federation for mobile applications, and use it to generate temporary security credentials for each user.
  - 将 AWS Web 身份联合用于移动应用程序，并使用它为每个用户生成临时安全凭证。
- **B.** It is not possible to connect to AWS S3 with a Google I
  - 无法使用 Google I 连接到 AWS S3
- **C.** Create an IAM user every time a user registers with their Google ID and use IAM to upload files to S3.
  - 每次用户使用其 Google ID 注册并使用 IAM 将文件上传到 S3 时，都会创建一个 IAM 用户。
- **D.** Create a bucket policy with a condition which allows everyone to upload if the login ID has a Google part to it.
  - 创建一个存储桶策略，其条件是如果登录 ID 包含 Google 部分，则允许每个人上传。

**正确答案 / Answer: `A`**


---

## Question 370

**EN** You must increase storage size in increments of at least [...].

**中** 您必须以至少 [...] 的增量增加存储大小。

- **A.** 40.
  - 40.
- **B.** 20.
  - 20.
- **C.** 50.
  - 50.
- **D.** 10.
  - 10.

**正确答案 / Answer: `D`**


---

## Question 371

**EN** You need to set up a security certificate for a client's e-commerce website as it will use the HTTPS protocol. Which of the below AWS services do you need to access to manage your SSL server certificate?

**中** 您需要为客户的电子商务网站设置安全证书，因为该网站将使用 HTTPS 协议。您需要访问以下哪些 AWS 服务来管理您的 SSL 服务器证书？

- **A.** AWS Directory Service.
  - AWS Directory Service。
- **B.** AWS Identity & Access Management.
  - AWS 身份和访问管理。
- **C.** AWS CloudFormation.
  - AWS CloudFormation。
- **D.** Amazon Route 53.
  - Amazon Route 53。

**正确答案 / Answer: `B`**


---

## Question 372

**EN** After setting up a Virtual Private Cloud (VPC) network, a more experienced cloud engineer suggests that to achieve low network latency and high network throughput you should look into setting up a placement group. You know nothing about this, but begin to do some research about it and are especially curious about its limitations. Which of the below statements is wrong in describing the limitations of a placement group?

**中** 设置虚拟私有云 (VPC) 网络后，经验丰富的云工程师建议，为了实现低网络延迟和高网络吞吐量，您应该考虑设置置放群组。你对此一无所知，但开始对此进行一些研究，并对它的局限性特别好奇。在描述归置组的局限性时，以下哪项陈述是错误的？

- **A.** Although launching multiple instance types into a placement group is possible, this reduces the likelihood that the required capacity will be available for your launch to succeed.
  - 尽管可以将多个实例类型启动到置放群组中，但这会降低成功启动所需容量的可能性。
- **B.** A placement group can span multiple Availability Zones.
  - 置放群组可以跨越多个可用区。
- **C.** You can't move an existing instance into a placement group.
  - 您无法将现有实例移至置放群组中。
- **D.** A placement group can span peered VPCs.
  - 置放群组可以跨越对等 VPC。

**正确答案 / Answer: `B`**


---

## Question 373

**EN** True or False: When you perform a restore operation to a point in time or from a DB Snapshot, a new DB Instance is created with a new endpoint.

**中** 对或错：当您对某个时间点或从数据库快照执行还原操作时，会使用新终端节点创建一个新数据库实例。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `A`**


---

## Question 374

**EN** What is the Reduced Redundancy option in Amazon S3?

**中** Amazon S3 中的减少冗余选项是什么？

- **A.** Less redundancy for a lower cost.
  - 减少冗余，降低成本。
- **B.** It doesn't exist in Amazon S3, but in Amazon EBS.
  - 它不存在于 Amazon S3 中，而是存在于 Amazon EBS 中。
- **C.** It allows you to destroy any copy of your files outside a specific jurisdiction.
  - 它允许您销毁特定管辖范围之外的任何文件副本。
- **D.** It doesn't exist at all.
  - 它根本不存在。

**正确答案 / Answer: `A`**


---

## Question 375

**EN** You are setting up your first Amazon Virtual Private Cloud (Amazon VPC) so you decide to use the VPC wizard in the AWS console to help make it easier for you. Which of the following statements is correct regarding instances that you launch into a default subnet via the VPC wizard?

**中** 您正在设置您的第一个 Amazon Virtual Private Cloud (Amazon VPC)，因此您决定使用 AWS 控制台中的 VPC 向导来帮助您更轻松地设置。关于您通过 VPC 向导启动到默认子网的实例，以下哪项陈述是正确的？

- **A.** Instances that you launch into a default subnet receive a public IP address and 10 private IP addresses.
  - 您在默认子网中启动的实例会收到一个公共 IP 地址和 10 个私有 IP 地址。
- **B.** Instances that you launch into a default subnet receive both a public IP address and a private IP address.
  - 您在默认子网中启动的实例会同时接收公共 IP 地址和私有 IP 地址。
- **C.** Instances that you launch into a default subnet don't receive any ip addresses and you need to define them manually.
  - 您在默认子网中启动的实例不会接收任何 IP 地址，您需要手动定义它们。
- **D.** Instances that you launch into a default subnet receive a public IP address and 5 private IP addresses.
  - 您在默认子网中启动的实例会收到一个公共 IP 地址和 5 个私有 IP 地址。

**正确答案 / Answer: `B`**


---

## Question 376

**EN** For which of the following use cases are Simple Workflow Service (SWF) and Amazon EC2 an appropriate solution? (Choose 2 answers)

**中** 简单工作流服务 (SWF) 和 Amazon EC2 是以下哪些用例的合适解决方案？ （选择 2 个答案）

- **A.** Using as an endpoint to collect thousands of data points per hour from a distributed fleet of sensors.
  - 用作端点，每小时从分布式传感器组收集数千个数据点。
- **B.** Managing a multi-step and multi-decision checkout process of an e-commerce website.
  - 管理电子商务网站的多步骤、多决策结账流程。
- **C.** Orchestrating the execution of distributed and auditable business processes.
  - 协调分布式且可审计的业务流程的执行。
- **D.** Using as an SNS (Simple Notification Service) endpoint to trigger execution of video transcoding jobs.
  - 用作 SNS（简单通知服务）端点来触发视频转码作业的执行。
- **E.** Using as a distributed session store for your web application.
  - 用作 Web 应用程序的分布式会话存储。

**正确答案 / Answer: `B, C`**


---

## Question 377

**EN** Which of the following instance types are available as Amazon EBS-backed only? (Choose 2 answers)

**中** 以下哪些实例类型仅可用作 Amazon EBS 支持的实例？ （选择 2 个答案）

- **A.** General purpose T2.
  - 通用 T2。
- **B.** General purpose M3.
  - 通用 M3。
- **C.** Compute-optimized C4.
  - 计算优化的 C4。
- **D.** Compute-optimized C3.
  - 计算优化的 C3。
- **E.** Storage-optimized 12.
  - 存储优化 12.

**正确答案 / Answer: `A, D`**


---

## Question 378

**EN** True or False: Without IAM, you cannot control the tasks a particular user or system can do and what AWS resources they might use.

**中** 对或错：如果没有 IAM，您就无法控制特定用户或系统可以执行的任务以及他们可能使用的 AWS 资源。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `A`**


---

## Question 379

**EN** What does Amazon ELB stand for?

**中** 亚马逊 ELB 代表什么？

- **A.** Elastic Linux Box.
  - 弹性 Linux 盒子。
- **B.** Encrypted Linux Box.
  - 加密的 Linux 盒子。
- **C.** Encrypted Load Balancing.
  - 加密负载平衡。
- **D.** Elastic Load Balancing.
  - 弹性负载平衡。

**正确答案 / Answer: `D`**


---

## Question 380

**EN** A read only news reporting site with a combined web and application tier and a database tier that receives large and unpredictable traffic demands must be able to respond to these traffic fluctuations automatically. What AWS services should be used meet these requirements?

**中** 具有组合的 Web 和应用程序层以及数据库层的只读新闻报道站点接收大量且不可预测的流量需求，必须能够自动响应这些流量波动。应使用哪些 AWS 服务来满足这些要求？

- **A.** Stateless instances for the web and application tier synchronized using Elasticache Memcached in an autoscaimg group monitored with CloudWatch. And RDSwith read replicas.
  - 在使用 CloudWatch 监控的 autoscaimg 组中使用 Elasticache Memcached 同步 Web 和应用程序层的无状态实例。以及带有只读副本的 RDS。
- **B.** Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and RDS with read replicas.
  - 使用带有只读副本的 CloudWatch 和 RDS 进行监控的自动扩展组中的 Web 和应用程序层的有状态实例。
- **C.** Stateful instances for the web and application tier in an autoscaling group monitored with CloudWatch and multi-AZ RDS.
  - 使用 CloudWatch 和多可用区 RDS 监控的自动扩展组中的 Web 和应用程序层的有状态实例。
- **D.** Stateless instances for the web and application tier synchronized using ElastiCache Memcached in an autoscaling group monitored with CloudWatch and multi-AZ RDS.
  - 在使用 CloudWatch 和多可用区 RDS 监控的自动扩展组中使用 ElastiCache Memcached 同步 Web 和应用程序层的无状态实例。

**正确答案 / Answer: `A`**


---

## Question 381

**EN** In Amazon AWS, which of the following statements is true of key pairs?

**中** 在 Amazon AWS 中，以下哪项关于密钥对的陈述是正确的？

- **A.** Key pairs are used only for Amazon SDKs.
  - 密钥对仅用于 Amazon SDK。
- **B.** Key pairs are used only for Amazon EC2 and Amazon CloudFront.
  - 密钥对仅用于 Amazon EC2 和 Amazon CloudFront。
- **C.** Key pairs are used only for Elastic Load Balancing and AWS IA.
  - 密钥对仅用于 Elastic Load Balancing 和 AWS IA。
- **D.** Key pairs are used for all Amazon services.
  - 密钥对用于所有 Amazon 服务。

**正确答案 / Answer: `B`**


---

## Question 382

**EN** What does Amazon ElastiCache provide?

**中** Amazon ElastiCache 提供什么？

- **A.** A service by this name doesn't exist. Perhaps you mean Amazon CloudCache.
  - 不存在具有此名称的服务。也许您指的是 Amazon CloudCache。
- **B.** A virtual server with a huge amount of memory.
  - 具有大量内存的虚拟服务器。
- **C.** A managed In-memory cache service.
  - 托管内存缓存服务。
- **D.** An Amazon EC2 instance with the Memcached software already pre-installed.
  - 已预装 Memcached 软件的 Amazon EC2 实例。

**正确答案 / Answer: `C`**


---

## Question 383

**EN** What are the two permission types used by AWS?

**中** AWS 使用哪两种权限类型？

- **A.** Resource-based and Product-based.
  - 基于资源和基于产品。
- **B.** Product-based and Service-based.
  - 以产品为基础，以服务为基础。
- **C.** Service-based.
  - 以服务为基础。
- **D.** User-based and Resource-based.
  - 基于用户和基于资源。

**正确答案 / Answer: `D`**


---

## Question 384

**EN** In AWS CloudHSM, in addition to the AWS recommendation that you use two or more HSM appliances in a high-availability configuration to prevent the loss of keys and data, you can also perform a remote backup/restore of a Luna SA partition if you have purchased a:

**中** 在 AWS CloudHSM 中，除了 AWS 建议您在高可用性配置中使用两个或多个 HSM 设备以防止密钥和数据丢失之外，您还可以执行 Luna SA 分区的远程备份/还原（如果您购买了：）：

- **A.** Luna Restore HS.
  - 露娜恢复 HS。
- **B.** Luna Backup HS.
  - 露娜备份 HS。
- **C.** Luna HS.
  - 卢娜高中。
- **D.** Luna SA HS.
  - 卢娜 SA HS。

**正确答案 / Answer: `B`**


---

## Question 385

**EN** An organization has a statutory requirement to protect the data at rest for the S3 objects. Which of the below mentioned options need not be enabled by the organization to achieve data security?

**中** 组织有保护 S3 对象的静态数据的法定要求。组织不需要启用以下哪些选项来实现数据安全？

- **A.** MFA delete for S3 objects.
  - S3 对象的 MFA 删除。
- **B.** Client side encryption.
  - 客户端加密。
- **C.** Bucket versioning.
  - 存储桶版本控制。
- **D.** Data replication.
  - 数据复制。

**正确答案 / Answer: `D`**


---

## Question 386

**EN** Your company is in the process of developing a next generation pet collar that collects biometric information to assist families with promoting healthy lifestyles for their pets. Each collar will push 30kb of biometric data in JSON format every 2 seconds to a collection platform that will process and analyze the data providing health trending information back to the pet owners and veterinarians via a web portal. Management has tasked you to architect the collection platform ensuring the following requirements are met. Provide the ability for real-time analytics of the inbound biometric data. Ensure processing of the biometric data is highly durable, elastic and parallel. The results of the analytic processing should be persisted for data mining. Which architecture outlined below will meet the initial requirements for the collection platform?

**中** 贵公司正在开发下一代宠物项圈，该项圈可收集生物识别信息，以帮助家庭促进宠物的健康生活方式。每个项圈每 2 秒就会将 30kb 的 JSON 格式的生物识别数据推送到收集平台，该平台将处理和分析数据，通过门户网站向宠物主人和兽医提供健康趋势信息。管理层责成您构建收集平台，确保满足以下要求。提供对入站生物识别数据进行实时分析的能力。确保生物识别数据的处理具有高度持久性、弹性和并行性。分析处理的结果应保留用于数据挖掘。下面列出的哪种架构能够满足采集平台的初始要求？

- **A.** Utilize S3 to collect the inbound sensor data, analyze the data from S3 with a daily scheduled Data Pipeline and save the results to a Redshift Cluster.
  - 利用 S3 收集入站传感器数据，通过每日计划的数据管道分析来自 S3 的数据，并将结果保存到 Redshift 集群。
- **B.** Utilize Amazon Kinesis to collect the inbound sensor data, analyze the data with Kinesis clients and save the results to a Redshift cluster using EMR.
  - 利用 Amazon Kinesis 收集入站传感器数据，使用 Kinesis 客户端分析数据，并使用 EMR 将结果保存到 Redshift 集群。
- **C.** Utilize SQS to collect the inbound sensor data, analyze the data from SQS with Amazon Kinesis and save the results to a Microsoft SQL Server RDS instance.
  - 利用 SQS 收集入站传感器数据，使用 Amazon Kinesis 分析来自 SQS 的数据，并将结果保存到 Microsoft SQL Server RDS 实例。
- **D.** Utilize EMR to collect the inbound sensor data, analyze the data from EMR with Amazon Kinesis and save the results to DynamoDB.
  - 利用 EMR 收集入站传感器数据，使用 Amazon Kinesis 分析来自 EMR 的数据并将结果保存到 DynamoDB。

**正确答案 / Answer: `B`**


---

## Question 387

**EN** Which of the following approaches provides the lowest cost for Amazon Elastic Block Store snapshots while giving you the ability to fully restore data?

**中** 以下哪种方法可以提供最低的 Amazon Elastic Block Store 快照成本，同时让您能够完全恢复数据？

- **A.** Maintain two snapshots: the original snapshot and the latest incremental snapshot.
  - 维护两个快照：原始快照和最新的增量快照。
- **B.** Maintain a volume snapshot; subsequent snapshots will overwrite one another
  - 维护卷快照；后续快照将相互覆盖
- **C.** Maintain a single snapshot the latest snapshot is both Incremental and complete.
  - 维护单个快照，最新快照既是增量的又是完整的。
- **D.** Maintain the most current snapshot, archive the original and incremental to Amazon Glacier.
  - 维护最新快照，将原始快照和增量存档到 Amazon Glacier。

**正确答案 / Answer: `A`**


---

## Question 388

**EN** You have a video transcoding application running on Amazon EC2. Each instance polls a queue to find out which video should be transcoded, and then runs a transcoding process. If this process is interrupted, the video will be transcoded by another instance based on the queuing system. You have a large backlog of videos which need to be transcoded and would like to reduce this backlog by adding more instances. You will need these instances only until the backlog is reduced. Which type of Amazon EC2 instances should you use to reduce the backlog in the most cost efficient way?

**中** 您有一个在 Amazon EC2 上运行的视频转码应用程序。每个实例都会轮询队列以找出应转码的视频，然后运行转码过程。如果此过程被中断，视频将由另一个基于排队系统的实例进行转码。您有大量积压的视频需要转码，并且希望通过添加更多实例来减少积压。仅在积压工作减少之前您才需要这些实例。您应该使用哪种类型的 Amazon EC2 实例以最具成本效益的方式减少积压？

- **A.** Reserved instances.
  - 预留实例。
- **B.** Spot instances.
  - 现货实例。
- **C.** Dedicated instances.
  - 专用实例。
- **D.** On-demand instances.
  - 按需实例。

**正确答案 / Answer: `B`**


---

## Question 389

**EN** What does the AWS Storage Gateway provide?

**中** AWS Storage Gateway 提供什么？

- **A.** It allows to integrate on-premises IT environments with Cloud Storage.
  - 它允许将本地 IT 环境与云存储集成。
- **B.** A direct encrypted connection to Amazon S3.
  - 与 Amazon S3 的直接加密连接。
- **C.** It's a backup solution that provides an on-premises Cloud storage.
  - 它是一种提供本地云存储的备份解决方案。
- **D.** It provides an encrypted SSL endpoint for backups in the Cloud.
  - 它为云中的备份提供加密的 SSL 端点。

**正确答案 / Answer: `A`**


---

## Question 390

**EN** You have recently joined a startup company building sensors to measure street noise and air quality in urban areas. The company has been running a pilot deployment of around 100 sensors for 3 months. Each sensor uploads 1KB of sensor data every minute to a backend hosted on AWS. During the pilot, you measured a peak of 10 IOPS on the database, and you stored an average of 3GB of sensor data per month in the database. The current deployment consists of a load-balanced auto scaled Ingestion layer using EC2 instances and a PostgreSQL RDS database with 500GB standard storage. The pilot is considered a success and your CEO has managed to get the attention of some potential investors. The business plan requires a deployment of at least 100K sensors which needs to be supported by the backend. You also need to store sensor data for at least two years to be able to compare year over year improvements. To secure funding, you have to make sure that the platform meets these requirements and leaves room for further scaling. Which setup will meet the requirements?

**中** 您最近加入了一家初创公司，该公司致力于开发传感器来测量城市地区的街道噪音和空气质量。该公司已经对大约 100 个传感器进行了 3 个月的试点部署。每个传感器每分钟将 1KB 的传感器数据上传到 AWS 上托管的后端。在试验期间，您测量到数据库的峰值为 10 IOPS，并且每月在数据库中平均存储 3GB 的传感器数据。当前的部署由使用 EC2 实例的负载平衡自动缩放摄取层和具有 500GB 标准存储的 PostgreSQL RDS 数据库组成。该试点被认为是成功的，您的首席执行官已成功吸引了一些潜在投资者的注意。该业务计划需要部署至少 100K 个传感器，并且需要后端的支持。您还需要将传感器数据存储至少两年，以便能够比较逐年改进。为了获得资金，您必须确保平台满足这些要求并为进一步扩展留有空间。哪种设置可以满足要求？

- **A.** Add an SQS queue to the ingestion layer to buffer writes to the RDS instance.
  - 将 SQS 队列添加到摄取层以缓冲对 RDS 实例的写入。
- **B.** Ingest data into a DynamoDB table and move old data to a Redshift cluster.
  - 将数据提取到 DynamoDB 表中，并将旧数据移动到 Redshift 集群。
- **C.** Replace the RDS instance with a 6 node Redshift cluster with 96TB of storage.
  - 将 RDS 实例替换为具有 96TB 存储空间的 6 节点 Redshift 集群。
- **D.** Keep the current architecture but upgrade RDS storage to 3TB and 10K provisioned IOPS.
  - 保留当前架构，但将 RDS 存储升级到 3TB 和 10K 预配置 IOPS。

**正确答案 / Answer: `C`**


---

## Question 391

**EN** After a major security breach your manager has requested a report of all users and their credentials in AWS. You discover that in IAM you can generate and download a credential report that lists all users in your account and the status of their various credentials, including passwords, access keys, MFA devices, and signing certificates. Which following statement is incorrect in regards to the use of credential reports?

**中** 在发生重大安全漏洞后，您的经理要求提供所有用户及其在 AWS 中的凭证的报告。您发现，在 IAM 中，您可以生成并下载一份凭证报告，其中列出了您账户中的所有用户及其各种凭证的状态，包括密码、访问密钥、MFA 设备和签名证书。关于证书报告的使用，以下哪项表述是不正确的？

- **A.** Credential reports are downloaded XML files.
  - 凭证报告是下载的 XML 文件。
- **B.** You can get a credential report using the AWS Management Console, the AWS CLI, or the IAM API.
  - 您可以使用 AWS 管理控制台、AWS CLI 或 IAM API 获取凭证报告。
- **C.** You can use the report to audit the effects of credential lifecycle requirements, such as password rotation.
  - 您可以使用该报告来审核凭证生命周期要求（例如密码轮换）的影响。
- **D.** You can generate a credential report as often as once every four hours.
  - 您最多可以每四个小时生成一次凭证报告。

**正确答案 / Answer: `A`**


---

## Question 392

**EN** What is the maximum response time for a Business level Premium Support case?

**中** 企业级高级支持案例的最长响应时间是多少？

- **A.** 30 minutes.
  - 30 分钟。
- **B.** 1 hour.
  - 1 小时。
- **C.** 12 hours.
  - 12 小时。
- **D.** 10 minutes.
  - 10 分钟。

**正确答案 / Answer: `B`**


---

## Question 393

**EN** Per the AWS Acceptable Use Policy, penetration testing of EC2 instances

**中** 根据 AWS 可接受使用政策，对 EC2 实例进行渗透测试

- **A.** May be performed by AWS, and will be performed by AWS upon customer request.
  - 可由 AWS 执行，并将根据客户请求由 AWS 执行。
- **B.** May be performed by AWS, and is periodically performed by AWS.
  - 可由 AWS 执行，并由 AWS 定期执行。
- **C.** Are expressly prohibited under all circumstances.
  - 在任何情况下均被明确禁止。
- **D.** May be performed by the customer on their own instances with prior authorization from AWS.
  - 经 AWS 事先授权，客户可以在自己的实例上执行。
- **E.** May be performed by the customer on their own instances, only if performed from EC2 instances.
  - 仅当从 EC2 实例执行时，可由客户在自己的实例上执行。

**正确答案 / Answer: `B`**


---

## Question 394

**EN** Which of the following features are provided by Amazon EC2?

**中** Amazon EC2 提供以下哪些功能？

- **A.** Exadata Database Machine, Optimized Storage Management, Flashback Technology, and Data Warehousing.
  - Exadata 数据库云服务器、优化存储管理、闪回技术和数据仓库。
- **B.** Instances, Amazon Machine Images (AMIs), Key Pairs, Amazon EBS Volumes, Firewall, Elastic IP address, Tags, and Virtual Private Clouds (VPCs).
  - 实例、Amazon 系统映像 (AMI)、密钥对、Amazon EBS 卷、防火墙、弹性 IP 地址、标签和虚拟私有云 (VPC)。
- **C.** Real Application Clusters (RAC), Elasticache Machine Images (EMIs), Data Warehousing, Flashback Technology, Dynamic IP address.
  - 真实应用集群 (RAC)、Elasticache 机器映像 (EMI)、数据仓库、闪回技术、动态 IP 地址。
- **D.** Exadata Database Machine, Real Application Clusters (RAC), Data Guard, Table and Index Partitioning, and Data Pump Compression.
  - Exadata 数据库云服务器、真实应用集群 (RAC)、Data Guard、表和索引分区以及数据泵压缩。

**正确答案 / Answer: `B`**


---

## Question 395

**EN** True or False: If you add a tag that has the same key as an existing tag on a DB Instance, the new value overwrites the old value.

**中** 对或错：如果您添加的标签与数据库实例上的现有标签具有相同键，则新值将覆盖旧值。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `A`**


---

## Question 396

**EN** You decide that you need to create a number of Auto Scaling groups to try and save some money as you have noticed that at certain times most of your EC2 instances are not being used. By default, what is the maximum number of Auto Scaling groups that AWS will allow you to create?

**中** 您决定需要创建多个 Auto Scaling 组来尝试节省一些资金，因为您注意到在某些时候大多数 EC2 实例都没有被使用。默认情况下，AWS 允许您创建的 Auto Scaling 组的最大数量是多少？

- **A.** 12.
  - 12.
- **B.** Unlimited.
  - 无限。
- **C.** 20.
  - 20.
- **D.** 2.
  - 2.

**正确答案 / Answer: `C`**


---

## Question 397

**EN** After moving an E-Commerce website for a client from a dedicated server to AWS you have also set up auto scaling to perform health checks on the instances in your group and replace instances that fail these checks. Your client has come to you with his own health check system that he wants you to use as it has proved to be very useful prior to his site running on AWS. What do you think would be an appropriate response to this given all that you know about auto scaling?

**中** 将客户的电子商务网站从专用服务器移至 AWS 后，您还设置了自动扩展以对组中的实例执行运行状况检查并替换未通过这些检查的实例。您的客户带着他自己的运行状况检查系统来找您，他希望您使用该系统，因为事实证明，在他的网站在 AWS 上运行之前，该系统非常有用。鉴于您对自动缩放的了解，您认为对此的适当回应是什么？

- **A.** It is not possible to implement your own health check system. You need to use AWSs health check system.
  - 不可能实现自己的健康检查系统。您需要使用 AWS 的健康检查系统。
- **B.** It is not possible to implement your own health check system due to compatibility issues.
  - 由于兼容性问题，无法实现自己的健康检查系统。
- **C.** It is possible to implement your own health check system and then send the instance's health information directly from your system to Cloud Watch.
  - 您可以实现自己的健康检查系统，然后将实例的健康信息直接从您的系统发送到 Cloud Watch。
- **D.** It is possible to implement your own health check system and then send the instance's health information directly from your system to Cloud Watch but only in the US East (Virginia) region.
  - 您可以实施自己的运行状况检查系统，然后将实例的运行状况信息直接从您的系统发送到 Cloud Watch，但仅限于美国东部（弗吉尼亚州）区域。

**正确答案 / Answer: `C`**


---

## Question 398

**EN** You've been brought in as solutions architect to assist an enterprise customer with their migration of an e-commerce platform to Amazon Virtual Private Cloud (VPC) The previous architect has already deployed a 3-tier VPC, The configuration is as follows. VPC: vpc-2f8bc447. IGW: igw-2d8bc445. NACL: ad-208bc448. 5ubnets and Route Tables: Web servers: subnet-258bc44d. Application servers: subnet-248bc44c. Database servers: subnet-9189c6f9. Route Tables: rrb-218bc449, rtb-238bc44b. Associations: subnet-258bc44d: rtb-218bc449, subnet-248bc44c: rtb-238bc44b, subnet-9189c6f9: rtb-238bc44b. You are now ready to begin deploying EC2 instances into the VPC Web servers must have direct access to the internet Application and database servers cannot have direct access to the internet. Which configuration below will allow you the ability to remotely administer your application and database servers, as well as allow these servers to retrieve updates from the Internet?

**中** 您被任命为解决方案架构师，协助企业客户将电子商务平台迁移到 Amazon Virtual Private Cloud (VPC)。之前的架构师已经部署了 3 层 VPC，配置如下。专有网络：vpc-2f8bc447。 IGW：igw-2d8bc445。 NACL：ad-208bc448。 5ubnet 和路由表： Web 服务器：subnet-258bc44d。应用程序服务器：subnet-248bc44c。数据库服务器：subnet-9189c6f9。路由表：rrb-218bc449、rtb-238bc44b。关联：subnet-258bc44d：rtb-218bc449、subnet-248bc44c：rtb-238bc44b、subnet-9189c6f9：rtb-238bc44b。您现在已准备好开始将 EC2 实例部署到 VPC Web 服务器必须能够直接访问互联网 应用程序和数据库服务器不能直接访问互联网。下面的哪种配置将允许您远程管理应用程序和数据库服务器，并允许这些服务器从 Internet 检索更新？

- **A.** Create a bastion and NAT instance in subnet-258bc44d, and add a route from rtb- 238bc44b to the NAT instance.
  - 在 subnet-258bc44d 中创建堡垒和 NAT 实例，并添加从 rtb-238bc44b 到 NAT 实例的路由。
- **B.** Add a route from rtb-238bc44b to igw-2d8bc445 and add a bastion and NAT instance within subnet-248bc44c.
  - 添加从 rtb-238bc44b 到 igw-2d8bc445 的路由，并在 subnet-248bc44c 内添加堡垒和 NAT 实例。
- **C.** Create a bastion and NAT instance in subnet-248bc44c, and add a route from rtb- 238bc44b to subnet-258bc44d.
  - 在 subnet-248bc44c 中创建堡垒和 NAT 实例，并添加从 rtb-238bc44b 到 subnet-258bc44d 的路由。
- **D.** Create a bastion and NAT instance in subnet-258bc44d, add a route from rtb-238bc44b to lgw- 2d8bc445, and a new NACL that allows access between subnet-258bc44d and subnet -248bc44c.
  - 在 subnet-258bc44d 中创建堡垒和 NAT 实例，添加从 rtb-238bc44b 到 lgw-2d8bc445 的路由，以及允许 subnet-258bc44d 和子网-248bc44c 之间访问的新 NACL。

**正确答案 / Answer: `A`**


---

## Question 399

**EN** After deciding that EMR will be useful in analysing vast amounts of data for a gaming website that you are architecting you have just deployed an Amazon EMR Cluster and wish to monitor the cluster performance. Which of the following tools cannot be used to monitor the cluster performance?

**中** 在确定 EMR 将有助于分析您正在构建的游戏网站的大量数据后，您刚刚部署了 Amazon EMR 集群并希望监控集群性能。以下哪些工具不能用于监控集群性能？

- **A.** Kinesis.
  - 运动。
- **B.** Ganglia.
  - 神经节。
- **C.** CloudWatch Metrics.
  - CloudWatch 指标。
- **D.** Hadoop Web Interfaces.
  - Hadoop Web 界面。

**正确答案 / Answer: `A`**


---

## Question 400

**EN** A/An [...] is the concept of allowing (or disallowing) an entity such as a user, group, or role some type of access to one or more resources.

**中** A/An [...] 是允许（或不允许）实体（例如用户、组或角色）对一个或多个资源进行某种类型的访问的概念。

- **A.** user.
  - 用户。
- **B.** AWS Account.
  - AWS 帐户。
- **C.** resource.
  - 资源。
- **D.** permission.
  - 允许。

**正确答案 / Answer: `B`**


---

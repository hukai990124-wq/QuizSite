# AWS SAA-C03 原创练习卷 · 第 06 份

> 题目 251–300 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 251

**EN** Resources that are created in AWS are identified by a unique identifier called an

**中** 在 AWS 中创建的资源由称为

- **A.** Amazon Resource Number.
  - 亚马逊资源号。
- **B.** Amazon Resource Nametag.
  - 亚马逊资源名称标签。
- **C.** Amazon Resource Name.
  - 亚马逊资源名称。
- **D.** Amazon Resource Namespace.
  - 亚马逊资源命名空间。

**正确答案 / Answer: `C`**


---

## Question 252

**EN** What are the two types of licensing options available for using Amazon RDS for Oracle?

**中** 使用 Amazon RDS for Oracle 有哪两种类型的许可选项？

- **A.** BYOL and Enterprise License.
  - BYOL 和企业许可证。
- **B.** BYOL and License Included.
  - 包含 BYOL 和许可证。
- **C.** Enterprise License and License Included.
  - 包含企业许可证和许可证。
- **D.** Role based License and License Included.
  - 基于角色的许可证和包含的许可证。

**正确答案 / Answer: `B`**


---

## Question 253

**EN** In AWS, which security aspects are the customer's responsibility? (Choose 4 answers)

**中** 在 AWS 中，哪些安全方面是客户的责任？ （选择 4 个答案）

- **A.** Security Group and ACL (Access Control List) settings.
  - 安全组和 ACL（访问控制列表）设置。
- **B.** Decommissioning storage devices.
  - 退役存储设备。
- **C.** Patch management on the EC2 instance's operating system.
  - EC2 实例操作系统上的补丁管理。
- **D.** Life-cycle management of IAM credentials.
  - IAM 凭证的生命周期管理。
- **E.** Controlling physical access to compute resources.
  - 控制对计算资源的物理访问。
- **F.** Encryption of EBS (Elastic Block Storage) volumes.
  - EBS（弹性块存储）卷的加密。

**正确答案 / Answer: `A, C, D, F`**


---

## Question 254

**EN** You have a web application running on six Amazon EC2 instances, consuming about 45% of resources on each instance. You are using auto-scaling to make sure that six instances are running at all times. The number of requests this application processes is consistent and does not experience spikes. The application is critical to your business and you want high availability at all times. You want the load to be distributed evenly between all instances. You also want to use the same Amazon Machine Image (AMI) for all instances. Which of the following architectural choices should you make?

**中** 您有一个 Web 应用程序在六个 Amazon EC2 实例上运行，每个实例消耗大约 45% 的资源。您正在使用自动扩展来确保六个实例始终在运行。此应用程序处理的请求数量是一致的并且不会出现峰值。该应用程序对您的业务至关重要，并且您希望始终保持高可用性。您希望负载在所有实例之间均匀分布。您还希望对所有实例使用相同的 Amazon 系统映像 (AMI)。您应该做出以下哪些架构选择？

- **A.** Deploy 6 EC2 instances in one Availability Zone and use Amazon Elastic Load Balancer.
  - 在 1 个可用区中部署 6 个 EC2 实例并使用 Amazon Elastic Load Balancer。
- **B.** Deploy 3 EC2 instances in one region and 3 in another region and use Amazon Elastic Load Balancer.
  - 在一个区域部署 3 个 EC2 实例，在另一区域部署 3 个 EC2 实例，并使用 Amazon Elastic Load Balancer。
- **C.** Deploy 3 EC2 instances in one Availability Zone and 3 in another Availability Zone and use Amazon Elastic Load Balancer.
  - 在一个可用区中部署 3 个 EC2 实例，在另一个可用区中部署 3 个 EC2 实例，并使用 Amazon Elastic Load Balancer。
- **D.** Deploy 2 EC2 instances in three regions and use Amazon Elastic Load Balancer.
  - 在三个区域部署 2 个 EC2 实例并使用 Amazon Elastic Load Balancer。

**正确答案 / Answer: `C`**


---

## Question 255

**EN** An ERP application is deployed across multiple AZs in a single region. In the event of failure, the Recovery Time Objective (RTO) must be less than 3 hours, and the Recovery Point Objective (RPO) must be 15 minutes. The customer realizes that data corruption occurred roughly 1.5 hours ago. What DR strategy could be used to achieve this RTO and RPO in the event of this kind of failure?

**中** ERP 应用程序部署在单个区域的多个可用区。如果发生故障，恢复时间目标 (RTO) 必须少于 3 小时，恢复点目标 (RPO) 必须为 15 分钟。客户意识到大约 1.5 小时前发生了数据损坏。如果发生此类故障，可以使用什么灾难恢复策略来实现 RTO 和 RPO？

- **A.** Take hourly DB backups to S3, with transaction logs stored in S3 every 5 minutes.
  - 每小时将数据库备份到 S3，每 5 分钟将事务日志存储在 S3 中。
- **B.** Use synchronous database master-slave replication between two Availability Zones.
  - 在两个可用区之间使用同步数据库主从复制。
- **C.** Take hourly DB backups to EC2 Instance store volumes with transaction logs stored in S3 every 5 minutes.
  - 每小时将数据库备份到 EC2 实例存储卷，并每 5 分钟将事务日志存储在 S3 中。
- **D.** Take 15 minute DB backups stored in Glacier with transaction logs stored in S3 every 5 minutes.
  - 每 5 分钟在 Glacier 中存储 15 分钟的数据库备份，并在 S3 中存储事务日志。

**正确答案 / Answer: `A`**


---

## Question 256

**EN** You have been setting up an Amazon Virtual Private Cloud (Amazon VPC) for your company, including setting up subnets. Security is a concern, and you are not sure which is the best security practice for securing subnets in your VPC. Which statement below is correct in describing the protection of AWS resources in each subnet?

**中** 您一直在为您的公司设置 Amazon Virtual Private Cloud (Amazon VPC)，包括设置子网。安全性是一个问题，您不确定哪种是保护 VPC 中子网的最佳安全实践。以下哪项关于每个子网中 AWS 资源保护的描述是正确的？

- **A.** You can use multiple layers of security, including security groups and network access control lists (ACL).
  - 您可以使用多层安全性，包括安全组和网络访问控制列表 (ACL)。
- **B.** You can only use access control lists (ACL).
  - 您只能使用访问控制列表 (ACL)。
- **C.** You don't need any security in subnets.
  - 您不需要子网中的任何安全性。
- **D.** You can use multiple layers of security, including security groups, network access control lists (ACL) and CloudHS.
  - 您可以使用多层安全性，包括安全组、网络访问控制列表 (ACL) 和 CloudHS。

**正确答案 / Answer: `A`**


---

## Question 257

**EN** Amazon EC2 provides a repository of public data sets that can be seamlessly integrated into AWS cloud-based applications. What is the monthly charge for using the public data sets?

**中** Amazon EC2 提供公共数据集存储库，可以无缝集成到 AWS 基于云的应用程序中。使用公共数据集的每月费用是多少？

- **A.** A 1 time charge of 10$ for all the datasets.
  - 所有数据集 1 次收费 10 美元。
- **B.** 1$ per dataset per month.
  - 每个数据集每月 1 美元。
- **C.** 10$ per month for all the datasets.
  - 所有数据集每月 10 美元。
- **D.** There is no charge for using the public data sets.
  - 使用公共数据集是免费的。

**正确答案 / Answer: `D`**


---

## Question 258

**EN** [...] embodies the 'share-nothing' architecture and essentially involves breaking a large database into several smaller databases. Common ways to split a database include: 1. Splitting tables that are not joined in the same query onto different hosts or 2. Duplicating a table across multiple hosts and then using a hashing algorithm to determine which host receives a given update.

**中** [...] 体现了“无共享”架构，本质上涉及将大型数据库分解为多个较小的数据库。拆分数据库的常见方法包括： 1. 将同一查询中未连接的表拆分到不同的主机上，或者 2. 在多个主机上复制表，然后使用哈希算法来确定哪个主机接收给定的更新。

- **A.** $harding.
  - $哈丁。
- **B.** Fai lure recovery.
  - 辉诱恢复。
- **C.** Federation.
  - 联邦。
- **D.** DOL operations.
  - 劳工部行动。

**正确答案 / Answer: `A`**


---

## Question 259

**EN** After deploying a new website for a client on AWS, he asks if you can set it up so that if it fails it can be automatically redirected to a backup website that he has stored on a dedicated server elsewhere. You are wondering whether Amazon Route 53 can do this. Which statement below is correct in regards to Amazon Route 53?

**中** 在 AWS 上为客户部署新网站后，他询问您是否可以对其进行设置，以便在出现故障时可以自动重定向到他存储在其他地方的专用服务器上的备份网站。您想知道 Amazon Route 53 是否可以做到这一点。关于 Amazon Route 53，以下哪项陈述是正确的？

- **A.** Amazon Route 53 can't help detect an outage. You need to use another service.
  - Amazon Route 53 无法帮助检测中断。您需要使用其他服务。
- **B.** Amazon Route 53 can help detect an outage of your website and redirect your end users to alternate locations.
  - Amazon Route 53 可以帮助检测您网站的中断并将您的最终用户重定向到备用位置。
- **C.** Amazon Route 53 can help detect an outage of your website but can't redirect your end users to alternate locations.
  - Amazon Route 53 可以帮助检测您网站的中断，但无法将您的最终用户重定向到备用位置。
- **D.** Amazon Route 53 can't help detect an outage of your website, but can redirect your end users to alternate locations.
  - Amazon Route 53 无法帮助检测您网站的中断，但可以将您的最终用户重定向到备用位置。

**正确答案 / Answer: `B`**


---

## Question 260

**EN** Your company plans to host a large donation website on Amazon Web Services (AWS). You anticipate a large and undetermined amount of traffic that will create many database writes. To be certain that you do not drop any writes to a database hosted on AWS. Which service should you use?

**中** 您的公司计划在 Amazon Web Services (AWS) 上托管一个大型捐赠网站。您预计会有大量且不确定的流量，这将创建许多数据库写入操作。确保您不会删除对 AWS 上托管的数据库的任何写入操作。您应该使用哪种服务？

- **A.** Amazon RDS with provisioned IOPS up to the anticipated peak write throughput.
  - Amazon RDS 的预配置 IOPS 高达预期峰值写入吞吐量。
- **B.** Amazon Simple Queue Service (SOS) for capturing the writes and draining the queue to write to the database.
  - Amazon Simple Queue Service (SOS)，用于捕获写入并排出队列以写入数据库。
- **C.** Amazon ElastiCache to store the writes until the writes are committed to the database.
  - Amazon ElastiCache 用于存储写入，直到写入提交到数据库。
- **D.** Amazon DynamoDB with provisioned write throughput up to the anticipated peak write throughput.
  - Amazon DynamoDB 的预配置写入吞吐量高达预期峰值写入吞吐量。

**正确答案 / Answer: `B`**


---

## Question 261

**EN** You have set up an Auto Scaling group. The cool down period for the Auto Scaling group is 7 minutes. The first instance is launched after 3 minutes, while the second instance is launched after 4 minutes. How many minutes after the first instance is launched will Auto Scaling accept another scaling activity request?

**中** 您已设置 Auto Scaling 组。 Auto Scaling 组的冷却时间为 7 分钟。第一个实例在 3 分钟后启动，第二个实例在 4 分钟后启动。第一个实例启动后多少分钟 Auto Scaling 会接受另一个扩展活动请求？

- **A.** 11 minutes.
  - 11 分钟。
- **B.** 7 minutes.
  - 7 分钟。
- **C.** 10 minutes.
  - 10 分钟。
- **D.** 14 minutes.
  - 14 分钟。

**正确答案 / Answer: `A`**


---

## Question 262

**EN** You are migrating a legacy client-server application to AWS. The application responds to a specific DNS domain (e.g. <www.example.com>) and has a 2-tier architecture, with multiple application servers and a database server. Remote clients use TCP to connect to the application servers. The application servers need to know the IP address of the clients in order to function properly and are currently taking that information from the TCP socket. A Multi-AZ RDS MySQL instance will be used for the database. During the migration you can change the application code, but you have to file a change request. How would you implement the architecture on AWS in order to maximize scalability and high availability?

**中** 您正在将旧版客户端服务器应用程序迁移到 AWS。该应用程序响应特定的 DNS 域（例如 <www.example.com>），并具有 2 层架构，具有多个应用程序服务器和一个数据库服务器。远程客户端使用 TCP 连接到应用程序服务器。应用程序服务器需要知道客户端的 IP 地址才能正常运行，并且当前正在从 TCP 套接字获取该信息。数据库将使用多可用区 RDS MySQL 实例。在迁移过程中，您可以更改应用程序代码，但必须提交更改请求。您将如何在 AWS 上实施架构以最大限度地提高可扩展性和高可用性？

- **A.** File a change request to implement Alias Resource support in the application. Use Route 53 Alias Resource Record to distribute load on two application servers in different AZs.
  - 提交更改请求以在应用程序中实施 Alias Resource 支持。使用 Route 53 别名资源记录将负载分配到不同可用区的两台应用程序服务器上。
- **B.** File a change request to implement Latency Based Routing support in the application. Use Route 53 with Latency Based Routing enabled to distribute load on two application servers in different AZs.
  - 提交变更请求以在应用程序中实现基于延迟的路由支持。使用启用了基于延迟的路由的 Route 53 在不同可用区的两台应用程序服务器上分配负载。
- **C.** File a change request to implement Cross-Zone support in the application. Use an ELB with a TCP Listener and Cross-Zone Load Balancing enabled, two application servers in different AZs.
  - 提交变更请求以在应用程序中实现跨区域支持。使用启用了 TCP 侦听器和跨区域负载均衡的 ELB，两个应用程序服务器位于不同的可用区。
- **D.** File a change request to implement Proxy Protocol support in the application. Use an ELB with a TCP Listener and Proxy Protocol enabled to distribute load on two application servers in different AZs.
  - 提交变更请求以在应用程序中实现代理协议支持。使用启用了 TCP 侦听器和代理协议的 ELB 将负载分配到不同可用区的两个应用程序服务器上。

**正确答案 / Answer: `D`**


---

## Question 263

**EN** Can I test my DB Instance against a new version before upgrading?

**中** 我可以在升级之前针对新版本测试我的数据库实例吗？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。
- **C.** Only in VPC.
  - 仅在 VPC 中。

**正确答案 / Answer: `A`**


---

## Question 264

**EN** Your system recently experienced down time during the troubleshooting process. You found that a new administrator mistakenly terminated several production EC2 instances. Which of the following strategies will help prevent a similar situation in the future? The administrator still must be able to: Launch, start stop, and terminate development resources. Launch and start production instances.

**中** 您的系统最近在故障排除过程中经历了停机。您发现新管理员错误地终止了多个生产 EC2 实例。以下哪项策略将有助于防止将来出现类似情况？管理员仍然必须能够： 启动、启动、停止和终止开发资源。启动并启动生产实例。

- **A.** Create an IAM user, which is not allowed to terminate instances by leveraging production EC2 termination protection.
  - 创建一个 IAM 用户，不允许该用户利用生产 EC2 终止保护来终止实例。
- **B.** Leverage resource based tagging along with an IAM user, which can prevent specific users from terminating production EC2 resources.
  - 利用基于资源的标记和 IAM 用户，这可以防止特定用户终止生产 EC2 资源。
- **C.** Leverage EC2 termination protection and multi-factor authentication, which together require users to authenticate before terminating EC2 instances.
  - 利用 EC2 终止保护和多因素身份验证，两者一起要求用户在终止 EC2 实例之前进行身份验证。
- **D.** Create an IAM user and apply an IAM role which prevents users from terminating production EC2 instances.
  - 创建 IAM 用户并应用 IAM 角色，以防止用户终止生产 EC2 实例。

**正确答案 / Answer: `B`**


---

## Question 265

**EN** You have just set up a large site for a client which involved a huge database which you set up with Amazon RDS to run as a Multi-AZ deployment. You now start to worry about what will happen if the database instance fails. Which statement best describes how this database will function if there is a database failure?

**中** 您刚刚为客户设置了一个大型站点，其中涉及一个巨大的数据库，您使用 Amazon RDS 设置该数据库以作为多可用区部署运行。您现在开始担心如果数据库实例失败会发生什么。哪句话最能描述数据库发生故障时该数据库将如何运行？

- **A.** Updates to your DB Instance are synchronously replicated across Availability Zones to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.
  - 对数据库实例的更新会跨可用区同步复制到备用数据库实例，以便保持同步并保护最新的数据库更新免受数据库实例故障的影响。
- **B.** Your database will not resume operation without manual administrative intervention.
  - 如果没有手动管理干预，您的数据库将不会恢复运行。
- **C.** Updates to your DB Instance are asynchronously replicated across Availability Zones to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.
  - 对数据库实例的更新会跨可用区异步复制到备用数据库实例，以便保持同步并保护最新的数据库更新免受数据库实例故障的影响。
- **D.** Updates to your DB Instance are synchronously replicated across S3 to the standby in order to keep both in sync and protect your latest database updates against DB Instance failure.
  - 对数据库实例的更新会通过 S3 同步复制到备用数据库，以便保持同步并保护最新的数据库更新免受数据库实例故障的影响。

**正确答案 / Answer: `A`**


---

## Question 266

**EN** Your company has an on-premises multi-tier PHP web application, which recently experienced downtime due to a large burst in web traffic due to a company announcement. Over the coming days, you are expecting similar announcements to drive similar unpredictable bursts, and are looking to find ways to quickly improve your infrastructure's ability to handle unexpected increases in traffic. The application currently consists of 2 tiers: a web tier which consists of a load balancer and several Linux Apache web servers, as well as a database tier which hosts a Linux server hosting a MySQL database. Which scenario below will provide full site functionality, while helping to improve the ability of your application in the short timeframe required?

**中** 您的公司有一个本地多层 PHP Web 应用程序，该应用程序最近因公司公告导致 Web 流量激增而出现停机。在接下来的几天里，您预计类似的公告会推动类似的不可预测的突发事件，并寻求快速提高基础设施处理意外流量增长的能力的方法。该应用程序当前由 2 层组成：Web 层由负载均衡器和多个 Linux Apache Web 服务器组成，以及数据库层，其中托管 Linux 服务器并托管 MySQL 数据库。下面哪种方案将提供完整的站点功能，同时帮助在所需的短时间内提高应用程序的能力？

- **A.** Failover environment: Create an S3 bucket and configure it for website hosting. Migrate your DNS to Route 53 using zone file import, and leverage Route 53 DNS failover to failover to the S3 hosted website.
  - 故障转移环境：创建 S3 存储桶并将其配置为网站托管。使用区域文件导入将您的 DNS 迁移到 Route 53，并利用 Route 53 DNS 故障转移将故障转移到 S3 托管网站。
- **B.** Hybrid environment: Create an AMI, which can be used to launch web servers in EC2. Create an Auto Scaling group, which uses the AMI to scale the web tier based on incoming traffic. Leverage Elastic Load Balancing to balance traffic between on-premises web servers and those hosted in AWS.
  - 混合环境：创建 AMI，可用于在 EC2 中启动 Web 服务器。创建 Auto Scaling 组，该组使用 AMI 根据传入流量扩展 Web 层。利用 Elastic Load Balancing 平衡本地 Web 服务器与 AWS 中托管的服务器之间的流量。
- **C.** Offload traffic from on-premises environment: Setup a CloudFront distribution, and configure CloudFront to cache objects from a custom origin. Choose to customize your object cache behavior, and select a TTL that objects should exist in cache.
  - 从本地环境卸载流量：设置 CloudFront 分配，并将 CloudFront 配置为缓存来自自定义源的对象。选择自定义对象缓存行为，并选择对象应存在于缓存中的 TTL。
- **D.** Migrate to AWS: Use VM Import/Export to quickly convert an on-premises web server to an AMI.
  - 迁移到 AWS：使用 VM Import/Export 将本地 Web 服务器快速转换为 AMI。
- **E.** Create an Auto Scaling group, which uses the imported AMI to scale the web tier based on incoming traffic. Create an RDS read replica and setup replication between the RDS instance and on-premises MySQL server to migrate the database.
  - 创建 Auto Scaling 组，该组使用导入的 AMI 根据传入流量扩展 Web 层。创建 RDS 只读副本并在 RDS 实例和本地 MySQL 服务器之间设置复制以迁移数据库。

**正确答案 / Answer: `C`**


---

## Question 267

**EN** When using consolidated billing there are two account types. What are they?

**中** 使用合并计费时，有两种帐户类型。这些是什么？

- **A.** Paying account and Linked account.
  - 付款帐户和关联帐户。
- **B.** Parent account and Child account.
  - 家长帐户和儿童帐户。
- **C.** Main account and Sub account.
  - 主账户和子账户。
- **D.** Main account and Secondary account.
  - 主帐户和辅助帐户。

**正确答案 / Answer: `A`**


---

## Question 268

**EN** You have a periodic Image analysis application that gets some files in input, analyzes them and for each file writes some data in output to a text file. The number of files in input per day is high and concentrated in a few hours of the day. Currently you have a server on EC2 with a large EBS volume that hosts the input data and the results. It takes almost 20 hours per day to complete the process. What services could be used to reduce the elaboration time and improve the availability of the solution?

**中** 您有一个定期的图像分析应用程序，它获取输入中的一些文件，分析它们，并将每个文件的输出中的一些数据写入文本文件。每天输入的文件数量较多，且集中在一天中的几个小时内。目前，您在 EC2 上有一台服务器，具有大型 EBS 卷，用于托管输入数据和结果。每天要花近 20 个小时才能完成这个过程。可以使用哪些服务来减少阐述时间并提高解决方案的可用性？

- **A.** Amazon S3 to store I/O files. SQS to distribute elaboration commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the length of the SQS queue.
  - Amazon S3 存储 I/O 文件。 SQS 将细化命令分发到一组并行工作的主机。自动缩放以根据 SQS 队列的长度动态调整主机组的大小。
- **B.** EBS with Provisioned IOPS (PIOPS) to store I/O files. SNS to distribute elaboration commands to a group of hosts working in parallel. Auto Scaling to dynamically size the group of hosts depending on the number of SNS notifications.
  - 具有预配置 IOPS (PIOPS) 的 EBS 用于存储 I/O 文件。 SNS 将详细命令分发到一组并行工作的主机。自动缩放可根据 SNS 通知的数量动态调整主机组的大小。
- **C.** Amazon S3 to store I/O files. SNS to distribute elaboration commands to a group of hosts working in parallel. Auto scaling to dynamically size the group of hosts depending on the number of SNS notifications.
  - Amazon S3 存储 I/O 文件。 SNS 将详细命令分发到一组并行工作的主机。自动缩放，根据 SNS 通知的数量动态调整主机组的大小。
- **D.** EBS with Provisioned IOPS (PIOPS) to store I/O files. SQS to distribute elaboration commands to a group of hosts working in parallel. Auto Scaling to dynamically size the group of hosts depending on the length of the SQS queue.
  - 具有预配置 IOPS (PIOPS) 的 EBS 用于存储 I/O 文件。 SQS 将细化命令分发到一组并行工作的主机。 Auto Scaling 可根据 SQS 队列的长度动态调整主机组的大小。

**正确答案 / Answer: `D`**


---

## Question 269

**EN** While controlling access to Amazon EC2 resources, which of the following acts as a firewall that controls the traffic allowed to reach one or more instances?

**中** 在控制对 Amazon EC2 资源的访问时，以下哪项充当防火墙来控制允许到达一个或多个实例的流量？

- **A.** A security group.
  - 一个安全组。
- **B.** An instance type.
  - 实例类型。
- **C.** A storage cluster.
  - 一个存储集群。
- **D.** An object.
  - 一个物体。

**正确答案 / Answer: `A`**


---

## Question 270

**EN** The base URI for all requests for instance metadata is [...].

**中** 实例元数据的所有请求的基本 URI 是 [...]。

- **A.** <http://254.169.169.254/latest/>.
  - <http://254.169.169.254/latest/>。
- **B.** <http://169.169.254.254/latest/>.
  - <http://169.169.254.254/latest/>。
- **C.** <http://127.0.0.1/latest/>.
  - <http://127.0.0.1/latest/>。
- **D.** <http://169.254.169.254/latest/>.
  - <http://169.254.169.254/latest/>。

**正确答案 / Answer: `D`**


---

## Question 271

**EN** While using the EC2 GET requests as URLs, the [...] is the URL that serves as the entry point for the web service.

**中** 当使用 EC2 GET 请求作为 URL 时，[...] 是充当 Web 服务入口点的 URL。

- **A.** token.
  - 令牌。
- **B.** endpoint.
  - 端点。
- **C.** action.
  - 行动。
- **D.** None of these.
  - 这些都没有。

**正确答案 / Answer: `B`**


---

## Question 272

**EN** A user is planning to launch a scalable web application. Which of the below mentioned options will not affect the latency of the application?

**中** 用户正计划启动可扩展的 Web 应用程序。以下哪个选项不会影响应用程序的延迟？

- **A.** Region.
  - 地区。
- **B.** Provisioned IOPS.
  - 已配置 IOPS。
- **C.** Availability Zone.
  - 可用区。
- **D.** Instance size.
  - 实例大小。

**正确答案 / Answer: `B`**


---

## Question 273

**EN** Your firm has uploaded a large amount of aerial image data to S3. In the past, in your on-premises environment, you used a dedicated group of servers to often process this data and used Rabbit MQ, an open source messaging system to get job information to the servers. Once processed, the data would go to tape and be shipped offsite. Your manager told you to stay with the current design, and leverage AWS archival storage and messaging services to minimize cost. Which is correct?

**中** 您的公司已将大量航拍图像数据上传到 S3。过去，在本地环境中，您经常使用一组专用服务器来处理这些数据，并使用 Rabbit MQ（一种开源消息传递系统）将作业信息发送到服务器。处理完毕后，数据将被写入磁带并异地传送。您的经理告诉您保持当前的设计，并利用 AWS 存档存储和消息传递服务来最大限度地降低成本。哪个是正确的？

- **A.** Use SQS for passing job messages. Use Cloud Watch alarms to terminate EC2 worker instances when they become idle. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.
  - 使用 SQS 传递作业消息。使用 Cloud Watch 警报在 EC2 工作线程实例空闲时终止它们。处理数据后，将 S3 对象的存储类别更改为减少冗余存储。
- **B.** Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Reduced Redundancy Storage.
  - 设置由队列深度触发的自动缩放工作线程，使用 Spot 实例来处理 SQS 中的消息。处理数据后，将 S3 对象的存储类别更改为减少冗余存储。
- **C.** Setup Auto-Scaled workers triggered by queue depth that use spot instances to process messages in SQS. Once data is processed, change the storage class of the S3 objects to Glacier.
  - 设置由队列深度触发的自动缩放工作线程，使用 Spot 实例来处理 SQS 中的消息。处理数据后，将 S3 对象的存储类别更改为 Glacier。
- **D.** Use SNS to pass job messages. Use Cloud Watch alarms to terminate spot worker instances when they become idle. Once data is processed, change the storage class of the S3 object to Glacier.
  - 使用 SNS 传递工作消息。使用 Cloud Watch 警报在 Spot Worker 实例空闲时终止它们。处理数据后，将 S3 对象的存储类别更改为 Glacier。

**正确答案 / Answer: `D`**


---

## Question 274

**EN** A user has launched 10 EC2 instances inside a placement group. Which of the below mentioned statements is true with respect to the placement group?

**中** 用户已在置放群组内启动 10 个 EC2 实例。关于安置组，以下哪项陈述是正确的？

- **A.** All instances must be in the same AZ.
  - 所有实例必须位于同一可用区。
- **B.** All instances can be across multiple regions.
  - 所有实例都可以跨多个区域。
- **C.** The placement group cannot have more than 5 instances.
  - 置放群组中的实例不能超过 5 个。
- **D.** All instances must be in the same region.
  - 所有实例必须位于同一区域。

**正确答案 / Answer: `A`**


---

## Question 275

**EN** A user has created a CloudFormation stack. The stack creates AWS services, such as EC2 instances, ELB, AutoScaling, and RDS. While creating the stack it created EC2, ELB and AutoScaling but failed to create RDS. What will CloudFormation do in this scenario?

**中** 用户已创建 CloudFormation 堆栈。该堆栈创建 AWS 服务，例如 EC2 实例、ELB、AutoScaling 和 RDS。在创建堆栈时，它创建了 EC2、ELB 和 AutoScaling，但未能创建 RDS。在这种情况下，CloudFormation 会做什么？

- **A.** Rollback all the changes and terminate all the created services.
  - 回滚所有更改并终止所有创建的服务。
- **B.** It will wait for the user's input about the error and correct the mistake after the input.
  - 它会等待用户输入有关错误的信息，并在输入后纠正错误。
- **C.** CloudFormation can never throw an error after launching a few services since it verifies all the steps before launching.
  - CloudFormation 在启动一些服务后永远不会抛出错误，因为它会在启动之前验证所有步骤。
- **D.** It will warn the user about the error and ask the user to manually create RDS.
  - 它会警告用户错误并要求用户手动创建 RDS。

**正确答案 / Answer: `A`**


---

## Question 276

**EN** You have been asked to design the storage layer for an application. The application requires disk performance of at least 100,000 IOPS. In addition, the storage layer must be able to survive the loss of an individual disk, EC2 instance, or Availability Zone without any data loss. The volume you provide must have a capacity of at least 3 TB. Which of the following designs will meet these objectives?

**中** 您被要求为应用程序设计存储层。该应用程序需要至少 100,000 IOPS 的磁盘性能。此外，存储层必须能够承受单个磁盘、EC2 实例或可用区丢失的影响，而不会丢失任何数据。您提供的卷的容量必须至少为 3 TB。以下哪些设计可以满足这些目标？

- **A.** Instantiate a c3.8xlarge instance in us-east-1. Provision 4x1TB EBS volumes, attach them to the instance, and configure them as a single RAID 5 volume. Ensure that EBS snapshots are performed every 15 minutes.
  - 在 us-east-1 中实例化一个 c3.8xlarge 实例。配置 4x1TB EBS 卷，将它们附加到实例，并将它们配置为单个 RAID 5 卷。确保每 15 分钟执行一次 EBS 快照。
- **B.** Instantiate a c3.8xlarge instance in us-east-1. Provision 3xlTB EBS volumes, attach them to the Instance, and configure them as a single RAID 0 volume. Ensure that EBS snapshots are performed every 15 minutes.
  - 在 us-east-1 中实例化一个 c3.8xlarge 实例。配置 3xlTB EBS 卷，将它们附加到实例，并将它们配置为单个 RAID 0 卷。确保每 15 分钟执行一次 EBS 快照。
- **C.** Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Provision 3x1TB EBS volumes, attach them to the instance, and configure them as a second RAID 0 volume. Configure synchronous, block-level replication from the ephemeral-backed volume to the EBS-backed volume.
  - 在 us-east-1a 中实例化一个 i2.8xlarge 实例。使用实例附带的四个 800GB SSD 临时磁盘创建 RAID 0 卷。配置 3x1TB EBS 卷，将它们附加到实例，并将它们配置为第二个 RAID 0 卷。配置从临时支持的卷到 EBS 支持的卷的同步块级复制。
- **D.** Instantiate a c3.8xlarge instance in us-east-1. Provision an AWS Storage Gateway and configure it for 3 TB of storage and 100,000 IOPS. Attach the volume to the instance.
  - 在 us-east-1 中实例化一个 c3.8xlarge 实例。配置 AWS Storage Gateway 并将其配置为 3 TB 存储和 100,000 IOPS。将卷附加到实例。
- **E.** Instantiate an i2.8xlarge instance in us-east-1a. Create a RAID 0 volume using the four 800GB SSD ephemeral disks provided with the instance. Configure synchronous, block-level replication to an identically configured instance in us-east-1b.
  - 在 us-east-1a 中实例化一个 i2.8xlarge 实例。使用实例附带的四个 800GB SSD 临时磁盘创建 RAID 0 卷。配置同步块级复制到 us-east-1b 中配置相同的实例。

**正确答案 / Answer: `E`**


---

## Question 277

**EN** A company is preparing to give AWS Management Console access to developers. Company policy mandates identity federation and role-based access control. Roles are currently assigned using groups in the corporate Active Directory. What combination of the following will give developers access to the AWS console? (Choose 2 answers)

**中** 一家公司正准备向开发人员提供 AWS 管理控制台访问权限。公司政策要求身份联合和基于角色的访问控制。目前，角色是使用公司 Active Directory 中的组来分配的。以下哪种组合可以让开发人员访问 AWS 控制台？ （选择 2 个答案）

- **A.** AWS Directory Service AD Connector.
  - AWS Directory Service AD 连接器。
- **B.** AWS Directory Service Simple AD.
  - AWS Directory Service 简易 AD.
- **C.** AWS Identity and Access Management groups.
  - AWS Identity and Access Management 组。
- **D.** AWS identity and Access Management roles.
  - AWS 身份和访问管理角色。
- **E.** AWS identity and Access Management users.
  - AWS 身份和访问管理用户。

**正确答案 / Answer: `A, D`**


---

## Question 278

**EN** Your startup wants to implement an order fulfillment process for selling a personalized gadget that needs an average of 3-4 days to produce with some orders taking up to 6 months. You expect 10 orders per day on your first day, 1000 orders per day after 6 months and 10,000 orders after 12 months. Orders coming in are checked for consistency, then dispatched to your manufacturing plant for production, quality control, packaging, shipment and payment processing. If the product does not meet the quality standards at any stage of the process, employees may force the process to repeat a step. Customers are notified via email about order status and any critical issues with their orders such as payment failure. Your base architecture includes AWS Elastic Beanstalk for your website with an RDS MySQL instance for customer data and orders. How can you implement the order fulfillment process while making sure that the emails are delivered reliably?

**中** 您的初创公司希望实施订单履行流程来销售个性化小工具，该小工具平均需要 3-4 天才能生产，有些订单长达 6 个月。您预计第一天每天有 10 个订单，6 个月后每天有 1000 个订单，12 个月后每天有 10,000 个订单。检查收到的订单是否一致，然后发送到您的制造工厂进行生产、质量控制、包装、运输和付款处理。如果产品在流程的任何阶段不符合质量标准，员工可能会强制流程重复某个步骤。通过电子邮件向客户通知订单状态以及订单的任何关键问题（例如付款失败）。您的基础架构包括用于网站的 AWS Elastic Beanstalk 以及用于客户数据和订单的 RDS MySQL 实例。如何实施订单履行流程，同时确保电子邮件可靠送达？

- **A.** Add a business process management application to your Elastic Beanstalk app servers and re-use the RDS database for tracking order status. Use one of the Elastic Beanstalk instances to send emails to customers.
  - 将业务流程管理应用程序添加到 Elastic Beanstalk 应用程序服务器并重新使用 RDS 数据库来跟踪订单状态。使用 Elastic Beanstalk 实例之一向客户发送电子邮件。
- **B.** Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1. Use the decider instance to send emails to customers.
  - 将 SWF 与活动工作线程的 Auto Scaling 组以及另一个 Auto Scaling 组中的决策程序实例（最小值/最大值 = 1）结合使用。使用决策者实例向客户发送电子邮件。
- **C.** Use SWF with an Auto Scaling group of activity workers and a decider instance in another Auto Scaling group with min/max=1. Use SES to send emails to customers.
  - 将 SWF 与活动工作线程的 Auto Scaling 组以及另一个 Auto Scaling 组中的决策程序实例（最小值/最大值 = 1）结合使用。使用 SES 向客户发送电子邮件。
- **D.** Use an SQS queue to manage all process tasks. Use an Auto Scaling group of EC2 Instances that poll the tasks and execute them. Use SES to send emails to customers.
  - 使用 SQS 队列来管理所有流程任务。使用 Auto Scaling EC2 实例组来轮询任务并执行它们。使用 SES 向客户发送电子邮件。

**正确答案 / Answer: `C`**


---

## Question 279

**EN** A, [...] is an individual, system, or application that interacts with AWS programmatically.

**中** A，[...] 是以编程方式与 AWS 交互的个人、系统或应用程序。

- **A.** user.
  - 用户。
- **B.** AWS Account.
  - AWS 帐户。
- **C.** group.
  - 团体。
- **D.** role.
  - 角色。

**正确答案 / Answer: `A`**


---

## Question 280

**EN** A user is accessing an EC2 instance on the SSH port for IP 10.20.30.40. Which one is a secure way to configure that the instance can be accessed only from this IP?

**中** 用户正在 IP 10.20.30.40 的 SSH 端口上访问 EC2 实例。哪一种是配置只能从此 IP 访问实例的安全方法？

- **A.** In the security group, open port 22 for IP 10.20.30.40.
  - 在安全组中，为 IP 10.20.30.40 开放 22 端口。
- **B.** In the security group, open port 22 for IP 10.20.30.40/32.
  - 在安全组中，为 IP 10.20.30.40/32 开放 22 端口。
- **C.** In the security group, open port 22 for IP 10.20.30.40/24.
  - 在安全组中，为 IP 10.20.30.40/24 开放 22 端口。
- **D.** In the security group, open port 22 for IP 10.20.30.40/0.
  - 在安全组中，为 IP 10.20.30.40/0 开放 22 端口。

**正确答案 / Answer: `B`**


---

## Question 281

**EN** Read Replicas require a transactional storage engine and are only supported for the [...] storage engine.

**中** 只读副本需要事务存储引擎，并且仅受存储引擎支持。

- **A.** OracleISAM.
  - OracleISAM。
- **B.** MSSQLDB.
  - MSSQLDB。
- **C.** InnoDB.
  - InnoDB。
- **D.** MyISAM.
  - MyISAM。

**正确答案 / Answer: `C`**


---

## Question 282

**EN** What is Amazon Glacier?

**中** Amazon Glacier 是什么？

- **A.** You mean Amazon 'Iceberg': it's a low-cost storage service.
  - 您指的是亚马逊“冰山”：它是一种低成本存储服务。
- **B.** A security tool that allows to 'freeze' an EBS volume and perform computer forensics on it.
  - 一种安全工具，允许“冻结”EBS 卷并对其执行计算机取证。
- **C.** A low-cost storage service that provides secure and durable storage for data archiving and backup.
  - 一种低成本存储服务，为数据归档和备份提供安全、持久的存储。
- **D.** It's a security tool that allows to 'freeze' an EC2 instance and perform computer forensics on it.
  - 它是一种安全工具，允许“冻结”EC2 实例并对其执行计算机取证。

**正确答案 / Answer: `C`**


---

## Question 283

**EN** You have a content management system running on an Amazon EC2 instance that is approaching 100% CPU utilization. Which option will reduce load on the Amazon EC2 instance?

**中** 您的内容管理系统在 Amazon EC2 实例上运行，CPU 利用率接近 100%。哪个选项将减少 Amazon EC2 实例的负载？

- **A.** Create a load balancer, and register the Amazon EC2 instance with it.
  - 创建负载均衡器，并向其注册 Amazon EC2 实例。
- **B.** Create a CloudFront distribution, and configure the Amazon EC2 instance as the origin.
  - 创建 CloudFront 分配，并将 Amazon EC2 实例配置为源。
- **C.** Create an Auto Scaling group from the instance using the Create AutoScaling Group action.
  - 使用创建 AutoScaling 组操作从实例创建 Auto Scaling 组。
- **D.** Create a launch configuration from the instance using the Create launch Configuration action.
  - 使用创建启动配置操作从实例创建启动配置。

**正确答案 / Answer: `B`**


---

## Question 284

**EN** Can I initiate a 'forced failover' for my MySQL Multi-AZ DB Instance deployment?

**中** 我可以为 MySQL 多可用区数据库实例部署启动“强制故障转移”吗？

- **A.** Only in certain regions.
  - 仅在某些地区。
- **B.** Only in VPC.
  - 仅在 VPC 中。
- **C.** Yes.
  - 是的。
- **D.** No.
  - 不。

**正确答案 / Answer: `C`**


---

## Question 285

**EN** When controlling access to Amazon EC2 resources, each Amazon EBS Snapshot has a [...] attribute that controls which AWS accounts can use the snapshot.

**中** 在控制对 Amazon EC2 资源的访问时，每个 Amazon EBS 快照都有一个 [...] 属性，用于控制哪些 AWS 账户可以使用该快照。

- **A.** createVolumePermission.
  - 创建卷权限。
- **B.** LaunchPermission.
  - 启动权限。
- **C.** SharePermission.
  - 共享权限。
- **D.** RequestPermission.
  - 请求许可。

**正确答案 / Answer: `A`**


---

## Question 286

**EN** You have decided to change the instance type for instances running in your application tier that is using Auto Scaling. In which area below would you change the instance type definition?

**中** 您已决定更改在使用 Auto Scaling 的应用程序层中运行的实例的实例类型。您将在下面哪个区域更改实例类型定义？

- **A.** Auto Scaling policy.
  - 自动缩放策略。
- **B.** Auto Scaling group.
  - 自动缩放组。
- **C.** Auto Scaling tags.
  - 自动缩放标签。
- **D.** Auto Scaling launch configuration.
  - Auto Scaling 启动配置。

**正确答案 / Answer: `D`**


---

## Question 287

**EN** Which of the following statements is true of creating a launch configuration using an EC2 instance?

**中** 关于使用 EC2 实例创建启动配置，以下哪项陈述是正确的？

- **A.** The launch configuration can be created only using the Query APIs.
  - 只能使用查询 API 创建启动配置。
- **B.** Auto Scaling automatically creates a launch configuration directly from an EC2 instance.
  - Auto Scaling 直接从 EC2 实例自动创建启动配置。
- **C.** A user should manually create a launch configuration before creating an Auto Scaling group.
  - 用户应在创建 Auto Scaling 组之前手动创建启动配置。
- **D.** The launch configuration should be created manually from the AWS CL.
  - 应从 AWS CL 手动创建启动配置。

**正确答案 / Answer: `B`**


---

## Question 288

**EN** Your company has multiple IT departments, each with their own VPC. Some VPCs are located within the same AWS account, and others in a different AWS account. You want to peer together all VPCs to enable the IT departments to have full access to each others' resources. There are certain limitations placed on VPC peering. Which of the following statements is incorrect in relation to VPC peering?

**中** 您的公司有多个 IT 部门，每个部门都有自己的 VPC。一些 VPC 位于同一 AWS 账户内，而其他 VPC 位于不同的 AWS 账户内。您希望将所有 VPC 对等连接在一起，以使 IT 部门能够完全访问彼此的资源。 VPC 对等互连存在某些限制。以下关于 VPC 对等互连的表述哪一项是不正确的？

- **A.** Private DNS values cannot be resolved between instances in peered VPCs.
  - 无法在对等 VPC 中的实例之间解析私有 DNS 值。
- **B.** You can have up to 3 VPC peering connections between the same two VPCs at the same time.
  - 同一两个 VPC 之间最多可以同时拥有 3 个 VPC 对等连接。
- **C.** You cannot create a VPC peering connection between VPCs in different regions.
  - 不同地域的 VPC 之间不能创建 VPC 对等连接。
- **D.** You have a limit on the number active and pending VPC peering connections that you can have per VP.
  - 每个 VP 可以拥有的活动和待处理 VPC 对等连接的数量有限制。

**正确答案 / Answer: `B`**


---

## Question 289

**EN** A gaming company comes to you and asks you to build them infrastructure for their site. They are not sure how big they will be as with all start ups they have limited money and big ideas. What they do tell you is that if the game becomes successful, like one of their previous games, it may rapidly grow to millions of users and generate tens (or even hundreds) of thousands of writes and reads per second. After considering all of this, you decide that they need a fully managed NoSQL database service that provides fast and predictable performance with seamless scalability. Which of the following databases do you think would best fit their needs?

**中** 一家游戏公司找到您并要求您为其网站构建基础设施。他们不确定自己能发展到多大，因为所有初创企业的资金和想法都有限。他们告诉你的是，如果游戏取得成功，就像他们之前的一款游戏一样，它可能会迅速增长到数百万用户，并每秒产生数万（甚至数十）万次写入和读取。考虑完所有这些之后，您决定他们需要一个完全托管的 NoSQL 数据库服务，该服务提供快速且可预测的性能以及无缝的可扩展性。您认为以下哪些数据库最适合他们的需求？

- **A.** Amazon DynamoDB.
  - Amazon DynamoDB。
- **B.** Amazon Redshift.
  - Amazon Redshift。
- **C.** Any non-relational database.
  - 任何非关系数据库。
- **D.** Amazon SimpleDB.
  - 亚马逊简单数据库。

**正确答案 / Answer: `A`**


---

## Question 290

**EN** A/An [...] acts as a firewall that controls the traffic allowed to reach one or more instances.

**中** A/An [...] 充当防火墙，控制允许到达一个或多个实例的流量。

- **A.** security group.
  - 安全组。
- **B.** ACL.
  - 前交叉韧带。
- **C.** IAM.
  - 我是。
- **D.** private IP Addresses.
  - 私有 IP 地址。

**正确答案 / Answer: `A`**


---

## Question 291

**EN** Your manager has just given you access to multiple VPN connections that someone else has recently set up between all your company's offices. She needs you to make sure that the communication between the VPNs is secure. Which of the following services would be best for providing a low-cost hub-and-spoke model for primary or backup connectivity between these remote offices?

**中** 您的经理刚刚授予您访问其他人最近在您公司所有办公室之间建立的多个 VPN 连接的权限。她需要您确保 VPN 之间的通信安全。以下哪种服务最适合为这些远程办公室之间的主要或备份连接提供低成本的中心辐射模型？

- **A.** Amazon CloudFront.
  - Amazon CloudFront。
- **B.** AWS Direct Connect.
  - AWS Direct Connect。
- **C.** AWS CloudHSM.
  - AWS 云 HSM。
- **D.** AWS VPN CloudHub.
  - AWS VPN 云中心。

**正确答案 / Answer: `D`**


---

## Question 292

**EN** You need to create a management network using network interfaces for a virtual private cloud (VPC) network. Which of the following statements is incorrect pertaining to Best Practices for ConfiguringNetwork Interfaces.

**中** 您需要使用 Virtual Private Cloud (VPC) 网络的网络接口创建管理网络。下列关于配置网络接口最佳实践的陈述哪一项是不正确的。

- **A.** You can detach secondary (ethN) network interfaces when the instance is running or stopped. However, you can't detach the primary (eth0) interface.
  - 您可以在实例运行或停止时分离辅助 (ethN) 网络接口。但是，您无法分离主 (eth0) 接口。
- **B.** Launching an instance with multiple network interfaces automatically configures interfaces, private IP addresses, and route tables on the operating system of the instance.
  - 启动具有多个网络接口的实例会自动在实例的操作系统上配置接口、私有 IP 地址和路由表。
- **C.** You can attach a network interface in one subnet to an instance in another subnet in the same VPC, however, both the network interface and the instance must reside in the same Availability Zone.
  - 您可以将一个子网中的网络接口附加到同一 VPC 中另一个子网中的实例，但是，网络接口和实例必须位于同一可用区中。
- **D.** Attaching another network interface to an instance is a valid method to increase or double the network bandwidth to or from the dual-homed instance.
  - 将另一个网络接口附加到实例是增加或加倍往返双宿主实例的网络带宽的有效方法。

**正确答案 / Answer: `D`**


---

## Question 293

**EN** A user has launched 10 EC2 instances inside a placement group. Which of the following statements is true in regards to what ability launching your instances into a VPC instead of EC2-Classic gives you?

**中** 用户已在置放群组内启动 10 个 EC2 实例。关于将实例启动到 VPC 而不是 EC2-Classic 中可以为您带来什么能力，以下哪项陈述是正确的？

- **A.** All of the things listed here.
  - 这里列出的所有内容。
- **B.** Change security group membership for your instances while they're running.
  - 在实例运行时更改实例的安全组成员身份。
- **C.** Assign static private IP addresses to your instances that persist across starts and stops.
  - 为您的实例分配在启动和停止时持续存在的静态私有 IP 地址。
- **D.** Define network interfaces, and attach one or more network interfaces to your instances.
  - 定义网络接口，并将一个或多个网络接口附加到您的实例。

**正确答案 / Answer: `A`**


---

## Question 294

**EN** In the HQ region you run an hourly batch process reading data from every region to compute cross regional reports that are sent by email to all offices this batch process must be completed as fast as possible to quickly optimize logistics how do you build the database architecture in order to meet the requirements'?

**中** 在总部区域，您每小时运行一个批处理过程，读取来自每个区域的数据，以计算通过电子邮件发送到所有办事处的跨区域报告，此批处理过程必须尽快完成，以快速优化物流，您如何构建数据库架构以满足要求？

- **A.** For each regional deployment, use RDS MySQL with a master in the region and a read replica in the HQ region.
  - 对于每个区域部署，使用 RDS MySQL，其中主服务器位于该区域，只读副本位于总部区域。
- **B.** For each regional deployment, use MySQL on EC2 with a master in the region and send hourly EBS snapshots to the HQ region.
  - 对于每个区域部署，使用 EC2 上的 MySQL 以及该区域中的主服务器，并将每小时 EBS 快照发送到总部区域。
- **C.** For each regional deployment, use RDS MySQL with a master in the region and send hourly RDS snapshots to the HQ region.
  - 对于每个区域部署，将 RDS MySQL 与该区域中的主服务器一起使用，并将每小时的 RDS 快照发送到总部区域。
- **D.** For each regional deployment, use MySQL on EC2 with a master in the region and use S3 to copy data files hourly to the HQ region.
  - 对于每个区域部署，使用 EC2 上的 MySQL 以及该区域中的主服务器，并使用 S3 每小时将数据文件复制到总部区域。
- **E.** Use Direct Connect to connect all regional MySQL deployments to the HQ region and reduce network latency for the batch process.
  - 使用 Direct Connect 将所有区域 MySQL 部署连接到总部区域，并减少批处理过程的网络延迟。

**正确答案 / Answer: `A`**


---

## Question 295

**EN** What is the average IOPS that the user will get for most of the year as per EC2 SLA if the instance is attached to the EBS optimized instance?

**中** 如果实例附加到 EBS 优化实例，则根据 EC2 SLA，用户在一年中的大部分时间将获得的平均 IOPS 是多少？

- **A.** 950.
  - 950.
- **B.** 990.
  - 990.
- **C.** 1000.
  - 1000。
- **D.** 900.
  - 900.

**正确答案 / Answer: `D`**


---

## Question 296

**EN** You are working with a customer who has 10 TB of archival data that they want to migrate to Amazon Glacier. The customer has a 1-Mbps connection to the Internet. Which service or feature provides the fastest method of getting the data into Amazon Glacier?

**中** 您正在与一位拥有 10 TB 存档数据的客户合作，他们希望将其迁移到 Amazon Glacier。客户拥有 1 Mbps 的 Internet 连接。哪种服务或功能提供了将数据导入 Amazon Glacier 的最快方法？

- **A.** Amazon Glacier multipart upload.
  - Amazon Glacier 分段上传。
- **B.** AWS Storage Gateway.
  - AWS Storage Gateway。
- **C.** VM Import/Export.
  - 虚拟机导入/导出。
- **D.** AWS Import/Export.
  - AWS 导入/导出。

**正确答案 / Answer: `A`**


---

## Question 297

**EN** Your manager has asked you to set up a public subnet with instances that can send and receive internet traffic, and a private subnet that can't receive traffic directly from the internet, but can initiate traffic to the internet (and receive responses) through a NAT instance in the public subnet. Hence, the following 3 rules need to be allowed: Inbound SSH traffic. Web servers in the public subnet to read and write to MS SQL servers in the private subnet. Inbound RDP traffic from the Microsoft Terminal Services gateway in the public private subnet. What are the respective ports that need to be opened for this?

**中** 您的经理要求您设置一个公有子网，其中包含可以发送和接收互联网流量的实例，以及一个私有子网，该子网无法直接从互联网接收流量，但可以通过公有子网中的 NAT 实例向互联网发起流量（并接收响应）。因此，需要允许以下 3 条规则： 入站 SSH 流量。公共子网中的 Web 服务器读取和写入私有子网中的 MS SQL 服务器。来自公共私有子网中 Microsoft 终端服务网关的入站 RDP 流量。为此需要打开哪些端口？

- **A.** Ports 22, 1433, 3389.
  - 端口 22、1433、3389。
- **B.** Ports 21, 1433, 3389.
  - 端口 21、1433、3389。
- **C.** Ports 25, 1433, 3389.
  - 端口 25、1433、3389。
- **D.** Ports 22, 1343, 3999.
  - 端口 22、1343、3999。

**正确答案 / Answer: `A`**


---

## Question 298

**EN** An EC2 instance is connected to an ENI (Elastic Network Interface) in one subnet. What happens to the data on an instance if the instance reboots (intentionally or unintentionally)?

**中** 一台 EC2 实例连接到一个子网中的 ENI（弹性网络接口）。如果实例重新启动（有意或无意），实例上的数据会发生什么情况？

- **A.** Data will be lost.
  - 数据将会丢失。
- **B.** Data persists.
  - 数据仍然存在。

**正确答案 / Answer: `B`**


---

## Question 299

**EN** Please select the Amazon EC2 resource which can be tagged.

**中** 请选择可标记的 Amazon EC2 资源。

- **A.** Key pairs.
  - 密钥对。
- **B.** Elastic IP addresses.
  - 弹性 IP 地址。
- **C.** Placement groups.
  - 安置组。
- **D.** Amazon EBS snapshots.
  - Amazon EBS 快照。

**正确答案 / Answer: `C`**


---

## Question 300

**EN** Without [...] you must either create multiple AWS accounts-each with its own billing and subscriptions to AWS products-or your employees must share the security credentials of a single AWS account.

**中** 如果没有[...]，您必须创建多个 AWS 账户（每个账户都有自己的账单和 AWS 产品订阅），或者您的员工必须共享单个 AWS 账户的安全凭证。

- **A.** Amazon RDS.
  - Amazon RDS。
- **B.** Amazon Glacier.
  - Amazon Glacier。
- **C.** Amazon EMR.
  - Amazon EMR。
- **D.** Amazon IAM.
  - 亚马逊 IAM。

**正确答案 / Answer: `D`**


---

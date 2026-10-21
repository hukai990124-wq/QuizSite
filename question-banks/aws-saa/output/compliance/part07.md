# AWS SAA-C03 原创练习卷 · 第 07 份

> 题目 301–350 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 301

**EN** An EC2 instance is connected to an ENI (Elastic Network Interface) in one subnet. What happens when you attach an ENI of a different subnet to this EC2 instance?

**中** 一台 EC2 实例连接到一个子网中的 ENI（弹性网络接口）。当您将不同子网的 ENI 连接到此 EC2 实例时会发生什么？

- **A.** The EC2 instance follows the rules of the older subnet.
  - EC2 实例遵循旧子网的规则。
- **B.** The EC2 instance follows the rules of both the subnets.
  - EC2 实例遵循两个子网的规则。
- **C.** Not possible, cannot be connected to 2 ENIs.
  - 不可能，无法连接到 2 个 ENI。
- **D.** The EC2 instance follows the rules of the newer subnet.
  - EC2 实例遵循较新子网的规则。

**正确答案 / Answer: `B`**


---

## Question 302

**EN** You have deployed a three-tier web application in a VPC with a CIDR block of 10.0.0.0/28. You initially deploy two web servers, two application servers, two database servers and one NAT instance for a total of seven EC2 instances. The web, application and database servers are deployed across two Availability Zones (AZs). You also deploy an ELB in front of the two web servers, and use Route 53 for DNS. Web traffic gradually increases in the first few days following the deployment, so you attempt to double the number of instances in each tier of the application to handle the new load. Unfortunately some of these new instances fail to launch. Which of the following could be the root cause? (Choose 2 answers)

**中** 您已在 CIDR 块为 10.0.0.0/28 的 VPC 中部署了三层 Web 应用程序。您最初部署两台 Web 服务器、两台应用程序服务器、两台数据库服务器和一个 NAT 实例，总共七个 EC2 实例。 Web、应用程序和数据库服务器跨两个可用区 (AZ) 部署。您还在两个 Web 服务器前面部署 ELB，并使用 Route 53 作为 DNS。部署后的最初几天，Web 流量逐渐增加，因此您尝试将应用程序每一层中的实例数量加倍以处理新负载。不幸的是，其中一些新实例无法启动。以下哪一项可能是根本原因？ （选择 2 个答案）

- **A.** AWS reserves the first and the last private IP address in each subnet's CIDR block so you do not have enough addresses left to launch all of the new EC2 instances.
  - AWS 保留每个子网 CIDR 块中的第一个和最后一个私有 IP 地址，因此您没有足够的地址来启动所有新的 EC2 实例。
- **B.** The Internet Gateway (IGW) of your VPC has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches.
  - 您的 VPC 的互联网网关 (IGW) 已进行扩展，添加了更多实例来应对流量高峰，减少了新实例启动时可用的私有 IP 地址的数量。
- **C.** The ELB has scaled-up, adding more instances to handle the traffic spike, reducing the number of available private IP addresses for new instance launches.
  - ELB 已进行了扩展，添加了更多实例来应对流量高峰，减少了新实例启动时可用的私有 IP 地址的数量。
- **D.** AWS reserves one IP address in each subnet's CIDR block for Route 53 so you do not have enough addresses left to launch all of the new EC2 instances.
  - AWS 在每个子网的 CIDR 块中为 Route 53 保留一个 IP 地址，因此您没有足够的地址来启动所有新的 EC2 实例。
- **E.** AWS reserves the first four and the last IP address in each subnet's CIDR block so you do not have enough addresses left to launch all of the new EC2 instances.
  - AWS 保留每个子网 CIDR 块中的前四个和最后一个 IP 地址，因此您没有足够的地址来启动所有新的 EC2 实例。

**正确答案 / Answer: `C, E`**


---

## Question 303

**EN** Which of the following will cause an immediate DB instance reboot to occur?

**中** 以下哪项会导致数据库实例立即重新启动？

- **A.** You change storage type from standard to PIOPS, and Apply Immediately is set to true.
  - 您将存储类型从标准更改为 PIOPS，并将立即应用设置为 true。
- **B.** You change the DB instance class, and Apply Immediately is set to false.
  - 您更改数据库实例类，并将立即应用设置为 false。
- **C.** You change a static parameter in a DB parameter group.
  - 您更改数据库参数组中的静态参数。
- **D.** You change the backup retention period for a DB instance from 0 to a nonzero value or from a nonzero value to 0, and Apply Immediately is set to false.
  - 您将数据库实例的备份保留期从 0 更改为非零值或从非零值更改为 0，并将立即应用设置为 false。

**正确答案 / Answer: `A`**


---

## Question 304

**EN** EBS Snapshots occur [...].

**中** EBS 快照发生[...]。

- **A.** Asynchronously.
  - 异步。
- **B.** Synchronously.
  - 同步进行。

**正确答案 / Answer: `A`**


---

## Question 305

**EN** You are tasked with moving a legacy application from a virtual machine running Inside your datacenter to an Amazon VPC Unfortunately this app requires access to a number of on-premises services and no one who configured the app still works for your company. Even worse there's no documentation for it. What will allow the application running inside the VPC to reach back and access its internal dependencies without being reconfigured? (Choose 3 answers)

**中** 您的任务是将遗留应用程序从数据中心内运行的虚拟机移动到 Amazon VPC 不幸的是，该应用程序需要访问许多本地服务，并且配置该应用程序的人仍然没有为您的公司工作。更糟糕的是没有相关的文档。什么将允许在 VPC 内运行的应用程序返回并访问其内部依赖项而无需重新配置？ （选择 3 个答案）

- **A.** An AWS Direct Connect link between the VPC and the network housing the internal services.
  - VPC 与容纳内部服务的网络之间的 AWS Direct Connect 链路。
- **B.** An Internet Gateway to allow a VPN connection.
  - 允许 VPN 连接的互联网网关。
- **C.** An Elastic IP address on the VPC instance.
  - VPC 实例上的弹性 IP 地址。
- **D.** An IP address space that does not conflict with the one on-premises.
  - 与本地 IP 地址空间不冲突的 IP 地址空间。
- **E.** Entries in Amazon Route 53 that allow the Instance to resolve its dependencies' IP addresses.
  - Amazon Route 53 中的条目允许实例解析其依赖项的 IP 地址。
- **F.** A VM Import of the current virtual machine.
  - 当前虚拟机的 VM 导入。

**正确答案 / Answer: `A, D, F`**


---

## Question 306

**EN** A company needs to deploy services to an AWS region which they have not previously used. The company currently has an AWS identity and Access Management (IAM) role for the Amazon EC2 instances, which permits the instance to have access to Amazon DynamoDB. The company wants their EC2 instances in the new region to have the same privileges. How should the company achieve this?

**中** 公司需要将服务部署到他们以前未使用过的 AWS 区域。该公司目前拥有 Amazon EC2 实例的 AWS 身份和访问管理 (IAM) 角色，该角色允许该实例访问 Amazon DynamoDB。该公司希望他们在新区域的 EC2 实例拥有相同的特权。公司应该如何实现这一目标？

- **A.** Create a new IAM role and associated policies within the new region.
  - 在新区域中创建新的 IAM 角色和关联策略。
- **B.** Assign the existing IAM role to the Amazon EC2 instances in the new region.
  - 将现有 IAM 角色分配给新区域中的 Amazon EC2 实例。
- **C.** Copy the IAM role and associated policies to the new region and attach it to the instances.
  - 将 IAM 角色和关联策略复制到新区域并将其附加到实例。
- **D.** Create an Amazon Machine Image (AMI) of the instance and copy it to the desired region using the AMI Copy feature.
  - 创建实例的 Amazon 系统映像 (AMI) 并使用 AMI 复制功能将其复制到所需区域。

**正确答案 / Answer: `B`**


---

## Question 307

**EN** If you want to launch Amazon Elastic Compute Cloud (EC2) instances and assign each instance a predetermined private IP address you should:

**中** 如果您想要启动 Amazon Elastic Compute Cloud (EC2) 实例并为每个实例分配一个预定的私有 IP 地址，您应该：

- **A.** Launch the instance from a private Amazon Machine Image (AMI).
  - 从私有 Amazon 系统映像 (AMI) 启动实例。
- **B.** Assign a group of sequential Elastic IP address to the instances.
  - 为实例分配一组连续的弹性 IP 地址。
- **C.** Launch the instances in the Amazon Virtual Private Cloud (VPC).
  - 启动 Amazon Virtual Private Cloud (VPC) 中的实例。
- **D.** Launch the instances in a Placement Group.
  - 启动置放群组中的实例。
- **E.** Use standard EC2 instances since each instance gets a private Domain Name Service (DNS) already.
  - 使用标准 EC2 实例，因为每个实例都已获得私有域名服务 (DNS)。

**正确答案 / Answer: `B`**


---

## Question 308

**EN** When automatic failover occurs, Amazon RDS will emit a DB Instance event to inform you that automatic failover occurred. You can use the [...] to return information about events related to your DB Instance.

**中** 当自动故障转移发生时，Amazon RDS 将发出数据库实例事件来通知您发生了自动故障转移。您可以使用 [...] 返回与您的数据库实例相关的事件的信息。

- **A.** FetchFailure.
  - 获取失败。
- **B.** DescriveFailure.
  - 描述失败。
- **C.** DescribeEvents.
  - 描述事件。
- **D.** FetchEvents.
  - 获取事件。

**正确答案 / Answer: `C`**


---

## Question 309

**EN** You have a Business support plan with AWS. One of your EC2 instances is running Microsoft Windows Server 2008 R2 and you are having problems with the software. Can you receive support from AWS for this software?

**中** 您有 AWS 商业支持计划。您的一个 EC2 实例正在运行 Microsoft Windows Server 2008 R2，并且您遇到了该软件的问题。您可以获得 AWS 对此软件的支持吗？

- **A.** Yes.
  - 是的。
- **B.** No, AWS does not support any third-party software.
  - 不，AWS 不支持任何第三方软件。
- **C.** No, Microsoft Windows Server 2008 R2 is not supported.
  - 不，不支持 Microsoft Windows Server 2008 R2。
- **D.** No, you need to be on the enterprise support plan.
  - 不，您需要加入企业支持计划。

**正确答案 / Answer: `A`**


---

## Question 310

**EN** A newspaper organization has a on-premises application which allows the public to search its back catalogue and retrieve individual newspaper pages via a website written in Java They have scanned the old newspapers into JPEGs (approx 17TB) and used Optical Character Recognition (OCR) to populate a commercial search product. The hosting platform and software are now end of life and the organization wants to migrate Its archive to AWS and produce a cost efficient architecture and still be designed for availability and durability. Which is the most appropriate?

**中** 一家报纸组织有一个本地应用程序，允许公众搜索其过往目录并通过用 Java 编写的网站检索各个报纸页面。他们将旧报纸扫描成 JPEG（约 17TB），并使用光学字符识别 (OCR) 来填充商业搜索产品。托管平台和软件现已结束生命周期，该组织希望将其存档迁移到 AWS 并生成一个具有成本效益的架构，同时仍以可用性和耐用性为设计目标。哪个最合适？

- **A.** Use S3 with reduced redundancy to store and serve the scanned files, install the commercial search application on EC2 Instances and configure with auto-scaling and an Elastic Load Balancer.
  - 使用减少冗余的 S3 来存储和提供扫描的文件，在 EC2 实例上安装商业搜索应用程序并配置自动扩展和 Elastic Load Balancer。
- **B.** Model the environment using CloudFormation use an EC2 instance running Apache webserver and an open source search application, stripe multiple standard EB5 volumes together to store the JPEGs and search index.
  - 使用 CloudFormation 对环境进行建模，使用运行 Apache Web 服务器的 EC2 实例和开源搜索应用程序，将多个标准 EB5 卷条带在一起以存储 JPEG 和搜索索引。
- **C.** Use S3 with standard redundancy to store and serve the scanned files, use Cloud5earch for query processing, and use Elastic Beanstalk to host the website across multiple Availability Zones.
  - 使用具有标准冗余的 S3 来存储和提供扫描的文件，使用 Cloud5earch 进行查询处理，并使用 Elastic Beanstalk 跨多个可用区托管网站。
- **D.** Use a single-AZ RD5 My5QL instance to store the search index 33d the JPEG images use an EC2 instance to serve the website and translate user queries into 5Q
  - 使用单可用区 RD5 My5QL 实例存储搜索索引 33d JPEG 图像使用 EC2 实例为网站提供服务并将用户查询转换为 5Q
- **E.** Use a CloudFront download distribution to serve the JPEGs to the end users and Install the current commercial search product, along with a Java Container Tor the website on EC2 instances and use Route 53 with DNS round-robin.
  - 使用 CloudFront 下载分发向最终用户提供 JPEG，并安装当前的商业搜索产品以及 EC2 实例上的 Java 容器 Tor 网站，并使用带有 DNS 循环的 Route 53。

**正确答案 / Answer: `C`**


---

## Question 311

**EN** A Provisioned IOPS volume must be at least [...] GB in size.

**中** 预配置 IOPS 卷的大小必须至少为 [...] GB。

- **A.** 1.
  - 1.
- **B.** 50.
  - 50.
- **C.** 20.
  - 20.
- **D.** 10.
  - 10.

**正确答案 / Answer: `D`**


---

## Question 312

**EN** In Amazon EC2, while sharing an Amazon EBS snapshot, can the snapshots with AWS Marketplace product codes be public?

**中** 在 Amazon EC2 中，共享 Amazon EBS 快照时，AWS Marketplace 产品代码的快照是否可以公开？

- **A.** Yes, but only for US-based providers.
  - 是的，但仅限于美国的提供商。
- **B.** Yes, they can be public.
  - 是的，它们可以是公开的。
- **C.** No, they cannot be made public.
  - 不，它们不能被公开。
- **D.** Yes, they are automatically made public by the system.
  - 是的，它们是由系统自动公开的。

**正确答案 / Answer: `C`**


---

## Question 313

**EN** A company has an AWS account that contains three VPCs (Dev, Test, and Prod) in the same region. Test is peered to both Prod and Dev. All VPCs have non-overlapping CIDR blocks. The company wants to push minor code releases from Dev to Prod to speed up time to market. Which of the following options helps the company accomplish this?

**中** 某公司拥有一个 AWS 账户，其中包含同一区域中的三个 VPC（开发、测试和生产）。测试与生产和开发都是对等的。所有 VPC 都有不重叠的 CIDR 块。该公司希望将次要代码版本从开发推向生产，以加快上市时间。以下哪个选项可以帮助公司实现这一目标？

- **A.** Create a new peering connection Between Prod and Dev along with appropriate routes.
  - 在 Prod 和 Dev 之间创建新的对等连接以及适当的路由。
- **B.** Create a new entry to Prod in the Dev route table using the peering connection as the target.
  - 使用对等连接作为目标，在 Dev 路由表中创建到 Prod 的新条目。
- **C.** Attach a second gateway to Dev. Add a new entry in the Prod route table identifying the gateway as the target.
  - 将第二个网关附加到 Dev。在 Prod 路由表中添加一个新条目，将网关标识为目标。
- **D.** The VPCs have non-overlapping Cl DR blocks in the same account. The route tables contain local routes for all VPCs.
  - VPC 在同一账户中具有不重叠的 Cl DR 块。路由表包含所有 VPC 的本地路由。

**正确答案 / Answer: `D`**


---

## Question 314

**EN** The [...] service is targeted at organizations with multiple users or systems that use AWS products such as Amazon EC2, Amazon SimpleDB, and the AWS Management Console.

**中** 该服务面向拥有多个用户或使用 Amazon EC2、Amazon SimpleDB 和 AWS 管理控制台等 AWS 产品的系统的组织。

- **A.** Amazon RDS.
  - Amazon RDS。
- **B.** AWS Integrity Management.
  - AWS 完整性管理。
- **C.** AWS Identity and Access Management.
  - AWS 身份和访问管理。
- **D.** Amazon EMR.
  - Amazon EMR。

**正确答案 / Answer: `C`**


---

## Question 315

**EN** You have just been given a scope for a new client who has an enormous amount of data (petabytes) that he constantly needs analysed. Currently he is paying a huge amount of money for a data warehousing company to do this for him and is wondering if AWS can provide a cheaper solution. Do you think AWS has a solution for this?

**中** 您刚刚获得了一位新客户的工作范围，该客户拥有大量需要不断分析的数据（PB 级）。目前，他正在向一家数据仓库公司支付巨额资金来为他做这件事，并且想知道 AWS 是否可以提供更便宜的解决方案。您认为 AWS 有解决方案吗？

- **A.** Yes. Amazon SimpleDB.
  - 是的。亚马逊简单数据库。
- **B.** No. Not presently.
  - 不，目前还不行。
- **C.** Yes. Amazon Redshift.
  - 是的。 Amazon Redshift。
- **D.** Yes. Your choice of relational AMIs on Amazon EC2 and EBS.
  - 是的。您在 Amazon EC2 和 EBS 上选择的关系 AMI。

**正确答案 / Answer: `C`**


---

## Question 316

**EN** You have set up an Elastic Load Balancer (ELB) with the usual default settings, which route each request independently to the application instance with the smallest load. However, someone has asked you to bind a user's session to a specific application instance so as to ensure that all requests coming from the user during the session will be sent to the same application instance. AWS has a feature to do this. What is it called?

**中** 您已使用通常的默认设置设置了 Elastic Load Balancer (ELB)，它将每个请求独立路由到负载最小的应用程序实例。但是，有人要求您将用户的会话绑定到特定的应用程序实例，以确保会话期间来自用户的所有请求都将发送到同一个应用程序实例。 AWS 有一个功能可以做到这一点。它叫什么？

- **A.** Connection draining.
  - 连接排水。
- **B.** Proxy protocol.
  - 代理协议。
- **C.** Tagging.
  - 标记。
- **D.** Sticky session.
  - 粘性会话。

**正确答案 / Answer: `D`**


---

## Question 317

**EN** You have written a CloudFormation template that creates 1 Elastic Load Balancer fronting 2 EC2 Instances. Which section of the template should you edit so that the DNS of the load balancer is returned upon creation of the stack?

**中** 您已编写一个 CloudFormation 模板，该模板创建 1 个 Elastic Load Balancer 前端 2 个 EC2 实例。您应该编辑模板的哪一部分，以便在创建堆栈时返回负载均衡器的 DNS？

- **A.** Resources.
  - 资源。
- **B.** Outputs.
  - 输出。
- **C.** Parameters.
  - 参数。
- **D.** Mappings.
  - 映射。

**正确答案 / Answer: `B`**


---

## Question 318

**EN** AWS CloudFormation is a service that helps you model and set up your Amazon Web Services resources so that you can spend less time managing those resources and more time focusing on your applications that run in AWS. You create a template that describes all the AWS resources that you want (like Amazon EC2 instances or Amazon RDS DB instances), and AWS CloudFormation takes care of provisioning and configuring those resources for you. What formatting is required for this template?

**中** AWS CloudFormation 是一项可帮助您建模和设置 Amazon Web Services 资源的服务，以便您可以花更少的时间管理这些资源，而将更多的时间专注于在 AWS 中运行的应用程序。您创建一个模板来描述所需的所有 AWS 资源（例如 Amazon EC2 实例或 Amazon RDS 数据库实例），AWS CloudFormation 负责为您预置和配置这些资源。该模板需要什么格式？

- **A.** JSON-formatted document.
  - JSON 格式的文档。
- **B.** CSS-formatted document.
  - CSS 格式的文档。
- **C.** XML-formatted document.
  - XML 格式的文档。
- **D.** HTML-formatted document.
  - HTML 格式的文档。

**正确答案 / Answer: `A`**


---

## Question 319

**EN** A user has created an application which will be hosted on EC2. The application makes calls to DynamoDB to fetch certain data. The application is using the DynamoDB SDK to connect with from theEC2 instance. Which of the below mentioned statements is true with respect to the best practice for security in this scenario?

**中** 用户创建了一个将托管在 EC2 上的应用程序。应用程序调用 DynamoDB 来获取某些数据。该应用程序使用 DynamoDB SDK 从 EC2 实例进行连接。对于这种情况下的安全最佳实践，以下哪项陈述是正确的？

- **A.** The user should create an IAM user with DynamoDB access and use its credentials within the application to connect with DynamoDB.
  - 用户应创建具有 DynamoDB 访问权限的 IAM 用户，并在应用程序中使用其凭证来连接 DynamoDB。
- **B.** The user should attach an IAM role with DynamoDB access to the EC2 instance.
  - 用户应将具有 DynamoDB 访问权限的 IAM 角色附加到 EC2 实例。
- **C.** The user should create an IAM role, which has EC2 access so that it will allow deploying the application.
  - 用户应创建一个 IAM 角色，该角色具有 EC2 访问权限，以便允许部署应用程序。
- **D.** The user should create an IAM user with DynamoDB and EC2 access. Attach the user with the application so that it does not use the root account credentials.
  - 用户应创建具有 DynamoDB 和 EC2 访问权限的 IAM 用户。将用户附加到应用程序，以便它不使用 root 帐户凭据。

**正确答案 / Answer: `B`**


---

## Question 320

**EN** After setting up an EC2 security group with a cluster of 20 EC2 instances, you find an error in the security group settings. You quickly make changes to the security group settings. When will the changes to the settings be effective?

**中** 在设置包含 20 个 EC2 实例的集群的 EC2 安全组后，您发现安全组设置中存在错误。您可以快速更改安全组设置。设置更改何时生效？

- **A.** The settings will be effective immediately for all the instances in the security group.
  - 该设置将立即对安全组中的所有实例生效。
- **B.** The settings will be effective only when all the instances are restarted.
  - 只有重启所有实例后，设置才会生效。
- **C.** The settings will be effective for all the instances only after 30 minutes.
  - 该设置仅在 30 分钟后对所有实例生效。
- **D.** The settings will be effective only for the new instances added to the security group.
  - 该设置仅对添加到安全组的新实例有效。

**正确答案 / Answer: `A`**


---

## Question 321

**EN** Can a user get a notification of each instance start / terminate configured with Auto Scaling?

**中** 用户能否收到配置了 Auto Scaling 的每个实例启动/终止的通知？

- **A.** Yes, if configured with the Launch Config.
  - 是的，如果使用启动配置进行配置。
- **B.** Yes, always.
  - 是的，总是如此。
- **C.** Yes, if configured with the Auto Scaling group.
  - 是，如果配置了 Auto Scaling 组。
- **D.** No.
  - 不。

**正确答案 / Answer: `C`**


---

## Question 322

**EN** Which Amazon storage do you think is the best for my database-style applications that frequently encounter many random reads and writes across the dataset?

**中** 您认为哪种 Amazon 存储最适合我的数据库式应用程序（这些应用程序经常在数据集中遇到大量随机读取和写入）？

- **A.** None of these.
  - 这些都没有。
- **B.** Amazon Instance Storage.
  - 亚马逊实例存储。
- **C.** Any of these.
  - 任何这些。
- **D.** Amazon EBS.
  - Amazon EBS。

**正确答案 / Answer: `D`**


---

## Question 323

**EN** In the Amazon RDS Oracle DB engine, the Database Diagnostic Pack and the Database Tuning Pack are only available with [...].

**中** 在 Amazon RDS Oracle DB 引擎中，数据库诊断包和数据库调整包仅适用于 [...]。

- **A.** Oracle Standard Edition.
  - Oracle 标准版。
- **B.** Oracle Express Edition.
  - Oracle 快捷版。
- **C.** Oracle Enterprise Edition.
  - Oracle 企业版。
- **D.** None of these.
  - 这些都没有。

**正确答案 / Answer: `C`**


---

## Question 324

**EN** Will my standby RDS instance be in the same Availability Zone as my primary?

**中** 我的备用 RDS 实例是否与主实例位于同一可用区？

- **A.** Only for Oracle RDS types.
  - 仅适用于 Oracle RDS 类型。
- **B.** Yes.
  - 是的。
- **C.** Only if configured at launch.
  - 仅当在启动时配置。
- **D.** No.
  - 不。

**正确答案 / Answer: `D`**


---

## Question 325

**EN** An administrator is using Amazon CloudFormation to deploy a three tier web application that consists of a web tier and application tier that will utilize Amazon DynamoDB for storage. When creating the CloudFormation template, which of the following would allow the application instance access to the DynamoDB tables without exposing API credentials?

**中** 管理员正在使用 Amazon CloudFormation 部署一个三层 Web 应用程序，该应用程序由 Web 层和应用程序层组成，将利用 Amazon DynamoDB 进行存储。创建 CloudFormation 模板时，以下哪项将允许应用程序实例访问 DynamoDB 表而不暴露 API 凭证？

- **A.** Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and associate the Role to the application instances by referencing an instance profile.
  - 创建一个身份和访问管理角色，该角色具有从所需的 DynamoDB 表中读取和写入所需的权限，并通过引用实例配置文件将该角色关联到应用程序实例。
- **B.** Use the Parameter section in the Cloud Formation template to have the user input Access and Secret Keys from an already created IAM user that has the permissions required to read and write from the required DynamoDB table.
  - 使用 Cloud Formation 模板中的参数部分，让用户从已创建的 IAM 用户输入访问权限和密钥，该用户具有从所需 DynamoDB 表中读取和写入所需的权限。
- **C.** Create an Identity and Access Management Role that has the required permissions to read and write from the required DynamoDB table and reference the Role in the instance profile property of the application instance.
  - 创建一个身份和访问管理角色，该角色具有从所需的 DynamoDB 表中读取和写入所需的权限，并在应用程序实例的实例配置文件属性中引用该角色。
- **D.** Create an identity and Access Management user in the CloudFormation template that has permissions to read and write from the required DynamoDB table, use the GetAtt function to retrieve the Access and secret keys and pass them to the application instance through user-data.
  - 在 CloudFormation 模板中创建一个身份和访问管理用户，该用户有权从所需的 DynamoDB 表中读取和写入，使用 GetAtt 函数检索访问密钥和密钥，并通过用户数据将它们传递到应用程序实例。

**正确答案 / Answer: `C`**


---

## Question 326

**EN** In an experiment, if the minimum size for an Auto Scaling group is 1 instance, which of the following statements holds true when you terminate the running instance?

**中** 在实验中，如果 Auto Scaling 组的最小大小为 1 个实例，则当您终止正在运行的实例时，以下哪项陈述成立？

- **A.** Auto Scaling must launch a new instance to replace it.
  - Auto Scaling 必须启动一个新实例来替换它。
- **B.** Auto Scaling will raise an alarm and send a notification to the user for action.
  - Auto Scaling 将发出警报并向用户发送通知以采取操作。
- **C.** Auto Scaling must configure the schedule activity that terminates the instance after 5 days.
  - Auto Scaling 必须配置在 5 天后终止实例的计划活动。
- **D.** Auto Scaling will terminate the experiment.
  - Auto Scaling 将终止实验。

**正确答案 / Answer: `A`**


---

## Question 327

**EN** True or False: Manually created DB Snapshots are deleted after the DB Instance is deleted.

**中** 对或错：删除数据库实例后，手动创建的数据库快照也会被删除。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `A`**


---

## Question 328

**EN** Amazon S3 doesn't automatically give a user who creates [...] permission to perform other actions on that bucket or object.

**中** Amazon S3 不会自动授予创建 [...] 的用户对该存储桶或对象执行其他操作的权限。

- **A.** a file.
  - 一个文件。
- **B.** a bucket or object.
  - 一个桶或物体。
- **C.** a bucket or file.
  - 一个存储桶或文件。
- **D.** a object or file.
  - 对象或文件。

**正确答案 / Answer: `B`**


---

## Question 329

**EN** A company wants to review the security requirements of Glacier. Which of the below mentioned statements is true with respect to the AWS Glacier data security?

**中** 一家公司想要审查 Glacier 的安全要求。关于 AWS Glacier 数据安全，以下哪项陈述是正确的？

- **A.** All data stored on Glacier is protected with AES-256 serverside encryption.
  - Glacier 上存储的所有数据均受到 AES-256 服务器端加密的保护。
- **B.** All data stored on Glacier is protected with AES-128 serverside encryption.
  - Glacier 上存储的所有数据均受到 AES-128 服务器端加密的保护。
- **C.** The user can set the serverside encryption flag to encrypt the data stored on Glacier.
  - 用户可以设置服务器端加密标志来加密存储在 Glacier 上的数据。
- **D.** The data stored on Glacier is not encrypted by default.
  - 默认情况下，Glacier 上存储的数据未加密。

**正确答案 / Answer: `A`**


---

## Question 330

**EN** What does Amazon EBS stand for?

**中** Amazon EBS 代表什么？

- **A.** Elastic Block Storage.
  - 弹性块存储。
- **B.** Elastic Business Server.
  - 弹性业务服务器。
- **C.** Elastic Blade Server.
  - 弹性刀片服务器。
- **D.** Elastic Block Store.
  - 弹性块存储。

**正确答案 / Answer: `D`**


---

## Question 331

**EN** You have a distributed application that periodically processes large volumes of data across multiple Amazon EC2 Instances. The application is designed to recover gracefully from Amazon EC2 instance failures. You are required to accomplish this task in the most cost-effective way. Which of the following will meet your requirements?

**中** 您有一个分布式应用程序，它定期处理多个 Amazon EC2 实例中的大量数据。该应用程序旨在从 Amazon EC2 实例故障中正常恢复。您需要以最具成本效益的方式完成这项任务。以下哪项能满足您的要求？

- **A.** Spot Instances.
  - 现货实例。
- **B.** Reserved instances.
  - 预留实例。
- **C.** Dedicated instances.
  - 专用实例。
- **D.** On-Demand instances.
  - 按需实例。

**正确答案 / Answer: `A`**


---

## Question 332

**EN** What does Amazon SWF stand for?

**中** 亚马逊 SWF 代表什么？

- **A.** Simple Web Flow.
  - 简单的网络流程。
- **B.** Simple Work Flow.
  - 简单的工作流程。
- **C.** Simple Wireless Forms.
  - 简单的无线表格。
- **D.** Simple Web Form.
  - 简单的网络表单。

**正确答案 / Answer: `B`**


---

## Question 333

**EN** Can you specify the security group that you created for a VPC when you launch an instance in EC2-Classic?

**中** 您可以在 EC2-Classic 中启动实例时指定为 VPC 创建的安全组吗？

- **A.** No, you can specify the security group created for EC2-Classic when you launch a VPC instance.
  - 不需要，您可以在启动 VPC 实例时指定为 EC2-Classic 创建的安全组。
- **B.** Yes.
  - 是的。
- **C.** No.
  - 不。
- **D.** No, you can specify the security group created for EC2-Classic to a non-VPC based instance only.
  - 不可以，您只能将为 EC2-Classic 创建的安全组指定给基于非 VPC 的实例。

**正确答案 / Answer: `C`**


---

## Question 334

**EN** Which two methods increases the fault tolerance of the connection to VPC-1? (Choose 2 answers)

**中** 哪两种方法可以提高与 VPC-1 连接的容错能力？ （选择 2 个答案）

- **A.** Establish a hardware VPN over the internet between VPC-2 and the on-premises network.
  - 在 VPC-2 和本地网络之间通过 Internet 建立硬件 VPN。
- **B.** Establish a hardware VPN over the internet between VPC-1 and the on-premises network.
  - 在 VPC-1 和本地网络之间通过 Internet 建立硬件 VPN。
- **C.** Establish a new AWS Direct Connect connection and private virtual interface in the same region as VPC-2.
  - 在与 VPC-2 相同的区域中建立新的 AWS Direct Connect 连接和私有虚拟接口。
- **D.** Establish a new AWS Direct Connect connection and private virtual interface in a different AWS region than VPC-1.
  - 在与 VPC-1 不同的 AWS 区域中建立新的 AWS Direct Connect 连接和私有虚拟接口。
- **E.** Establish a new AWS Direct Connect connection and private virtual interface in the same AWS region as VPC-1.
  - 在与 VPC-1 相同的 AWS 区域中建立新的 AWS Direct Connect 连接和私有虚拟接口。

**正确答案 / Answer: `B, E`**


---

## Question 335

**EN** How would you improve page load times for your users? (Choose 3 answers)

**中** 您将如何改善用户的页面加载时间？ （选择 3 个答案）

- **A.** Lower the scale up trigger of your Auto Scaling group to 30% so it scales more aggressively.
  - 将 Auto Scaling 组的扩展触发器降低至 30%，以便更积极地扩展。
- **B.** Add an Amazon ElastiCache caching layer to your application for storing sessions and frequent DB queries.
  - 将 Amazon ElastiCache 缓存层添加到您的应用程序中，用于存储会话和频繁的数据库查询。
- **C.** Configure Amazon CloudFront dynamic content support to enable caching of re-usable content from your site.
  - 配置 Amazon CloudFront 动态内容支持以启用站点中可重用内容的缓存。
- **D.** Switch Amazon RDS database to the high memory extra large Instance type.
  - 将 Amazon RDS 数据库切换为高内存超大实例类型。
- **E.** Set up a second installation in another region, and use the Amazon Route 53 latency-based routing feature to select the right region.
  - 在另一个区域设置第二个安装，并使用 Amazon Route 53 基于延迟的路由功能来选择正确的区域。

**正确答案 / Answer: `B, C, D`**


---

## Question 336

**EN** Typically, you want your application to check whether a request generated an error before you spend any time processing results. The easiest way to find out if an error occurred is to look for an [...] node in the response from the Amazon RDS API.

**中** 通常，您希望应用程序在花时间处理结果之前检查请求是否生成错误。查明是否发生错误的最简单方法是在 Amazon RDS API 的响应中查找 [...] 节点。

- **A.** incorrect.
  - 不正确。
- **B.** error.
  - 错误。

**正确答案 / Answer: `B`**


---

## Question 337

**EN** Through which of the following interfaces is AWS Identity and Access Management available? A. AWS Management Console. B. Command line interface (CLI). C. IAM Query API. D. Existing libraries.

**中** AWS Identity and Access Management 可通过以下哪个接口使用？ A.AWS 管理控制台。 B. 命令行界面 (CLI)。 C. IAM 查询 API。 D. 现有库。

- **A.** Only through Command line interface (CLI).
  - 只能通过命令行界面 (CLI)。
- **B.** A, B and C.
  - A、B 和 C。
- **C.** A and C.
  - A 和 C。
- **D.** All of the above.
  - 上述所有的。

**正确答案 / Answer: `D`**


---

## Question 338

**EN** A [...] is a storage device that moves data in sequences of bytes or bits (blocks).

**中** [...] 是一种以字节或位（块）序列移动数据的存储设备。

- **A.** block map.
  - 块地图。
- **B.** storage block.
  - 存储块。
- **C.** mapping device.
  - 测绘设备。
- **D.** block device.
  - 块设备。

**正确答案 / Answer: `D`**


---

## Question 339

**EN** You have just finished setting up an advertisement server in which one of the obvious choices for a service was Amazon Elastic MapReduce( EMR) and are now troubleshooting some weird cluster states that you are seeing. Which of the below is not an Amazon EMR cluster state?

**中** 您刚刚完成广告服务器的设置，其中显而易见的服务选择之一是 Amazon Elastic MapReduce (EMR)，现在正在对您看到的一些奇怪的集群状态进行故障排除。以下哪项不是 Amazon EMR 集群状态？

- **A.** STARTING.
  - 开始。
- **B.** STOPPED.
  - 停止了。
- **C.** RUNNING.
  - 跑步。
- **D.** WAITING.
  - 等待。

**正确答案 / Answer: `B`**


---

## Question 340

**EN** A US-based company is expanding their web presence into Europe. The company wants to extend their AWS infrastructure from Northern Virginia (us-east-1) into the Dublin (eu-west-1) region. Which of the following options would enable an equivalent experience for users on both continents?

**中** 一家美国公司正在将其网络业务扩展到欧洲。该公司希望将其 AWS 基础设施从北弗吉尼亚州 (us-east-1) 扩展到都柏林 (eu-west-1) 区域。以下哪些选项可以为两大洲的用户提供同等的体验？

- **A.** Use a public-facing load balancer per region to load-balance web traffic, and enable HTTP health checks.
  - 每个区域使用面向公众的负载均衡器来负载均衡 Web 流量，并启用 HTTP 运行状况检查。
- **B.** Use a public-facing load balancer per region to load-balance web traffic, and enable sticky sessions.
  - 每个区域使用面向公众的负载均衡器来负载均衡 Web 流量并启用粘性会话。
- **C.** Use Amazon Route 53, and apply a geolocation routing policy to distribute traffic across both regions.
  - 使用 Amazon Route 53，并应用地理位置路由策略在两个区域之间分配流量。
- **D.** Use Amazon Route 53, and apply a weighted routing policy to distribute traffic across both regions.
  - 使用 Amazon Route 53，并应用加权路由策略在两个区域之间分配流量。

**正确答案 / Answer: `D`**


---

## Question 341

**EN** You are building infrastructure for a data warehousing solution and an extra request has come through that there will be a lot of business reporting queries running all the time and you are not sure if your current DB instance will be able to handle it. What would be the best solution for this?

**中** 您正在为数据仓库解决方案构建基础设施，并且收到了额外的请求，即始终会运行大量业务报告查询，并且您不确定当前的数据库实例是否能够处理它。对此最好的解决方案是什么？

- **A.** DB Parameter Groups.
  - 数据库参数组。
- **B.** Read Replicas.
  - 阅读副本。
- **C.** Multi-AZ DB Instance deployment.
  - 多可用区数据库实例部署。
- **D.** Database Snapshots.
  - 数据库快照。

**正确答案 / Answer: `B`**


---

## Question 342

**EN** One of the criteria for a new deployment is that the customer wants to use AWS Storage Gateway. However you are not sure whether you should use gateway-cached volumes or gateway-stored volumes or even what the differences are. Which statement below best describes those differences?

**中** 新部署的标准之一是客户想要使用 AWS Storage Gateway。但是，您不确定是否应该使用网关缓存卷或网关存储卷，甚至不确定它们之间的区别是什么。以下哪项陈述最能描述这些差异？

- **A.** Gateway-cached lets you store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Gateway-stored enables you to configure your on-premises gateway to store all your data locally and then asynchronously back up point-in-time snapshots of this data to Amazon S3.
  - 网关缓存可让您将数据存储在 Amazon Simple Storage Service (Amazon S3) 中，并在本地保留经常访问的数据子集的副本。网关存储使您能够将本地网关配置为在本地存储所有数据，然后将该数据的时间点快照异步备份到 Amazon S3。
- **B.** Gateway-cached is free whilst gateway-stored is not.
  - 网关缓存是免费的，而网关存储则不是。
- **C.** Gateway-cached is up to 10 times faster than gateway-stored.
  - 网关缓存的速度比网关存储的速度快 10 倍。
- **D.** Gateway-stored lets you store your data in Amazon Simple Storage Service (Amazon S3) and retain a copy of frequently accessed data subsets locally. Gateway-cached enables you to configure your on-premises gateway to store all your data locally and then asynchronously back up point-in-time snapshots of this data to Amazon S3.
  - 通过网关存储，您可以将数据存储在 Amazon Simple Storage Service (Amazon S3) 中，并在本地保留经常访问的数据子集的副本。网关缓存使您能够将本地网关配置为在本地存储所有数据，然后将该数据的时间点快照异步备份到 Amazon S3。

**正确答案 / Answer: `A`**


---

## Question 343

**EN** In Amazon RDS, security groups are ideally used to:

**中** 在 Amazon RDS 中，安全组理想地用于：

- **A.** Define maintenance period for database engines.
  - 定义数据库引擎的维护周期。
- **B.** Launch Amazon RDS instances in a subnet.
  - 在子网中启动 Amazon RDS 实例。
- **C.** Create, describe, modify, and delete DB instances.
  - 创建、描述、修改和删除数据库实例。
- **D.** Control what IP addresses or EC2 instances can connect to your databases on a DB instance.
  - 控制哪些 IP 地址或 EC2 实例可以连接到数据库实例上的数据库。

**正确答案 / Answer: `D`**


---

## Question 344

**EN** How long does an AWS free usage tier EC2 last for?

**中** AWS 免费使用套餐 EC2 可以持续多长时间？

- **A.** Forever.
  - 永远。
- **B.** 12 Months upon signup.
  - 注册后 12 个月。
- **C.** 1 Month upon signup.
  - 注册后 1 个月。
- **D.** 6 Months upon signup.
  - 注册后 6 个月。

**正确答案 / Answer: `B`**


---

## Question 345

**EN** After you recommend Amazon Redshift to a client as an alternative solution to paying data warehouses to analyze his data, your client asks you to explain why you are recommending Redshift. Which of the following would be a reasonable response to his request?

**中** 当您向客户推荐 Amazon Redshift 作为付费数据仓库分析其数据的替代解决方案后，您的客户会要求您解释为什么推荐 Redshift。以下哪项是对他的请求的合理回应？

- **A.** It has high performance at scale as data and query complexity grows.
  - 随着数据和查询复杂性的增加，它具有大规模的高性能。
- **B.** It prevents reporting and analytic processing from interfering with the performance of OLTP workloads.
  - 它可以防止报告和分析处理干扰 OLTP 工作负载的性能。
- **C.** You don't have the administrative burden of running your own data warehouse and dealing with setup, durability, monitoring, scaling, and patching.
  - 您无需承担运行自己的数据仓库以及处理设置、持久性、监控、扩展和修补的管理负担。
- **D.** All answers listed are a reasonable response to his question.
  - 列出的所有答案都是对他的问题的合理回答。

**正确答案 / Answer: `D`**


---

## Question 346

**EN** You can seamlessly join an EC2 instance to your directory domain. What connectivity do you need to be able to connect remotely to this instance?

**中** 您可以将 EC2 实例无缝加入您的目录域。您需要什么连接才能远程连接到此实例？

- **A.** You must have IP connectivity to the instance from the network you are connecting from.
  - 您必须具有从要连接的网络到实例的 IP 连接。
- **B.** You must have the correct encryption keys to connect to the instance remotely.
  - 您必须拥有正确的加密密钥才能远程连接到实例。
- **C.** You must have enough bandwidth to connect to the instance.
  - 您必须有足够的带宽才能连接到实例。
- **D.** You must use MFA authentication to be able to connect to the instance remotely.
  - 您必须使用 MFA 身份验证才能远程连接到实例。

**正确答案 / Answer: `A`**


---

## Question 347

**EN** Does Amazon DynamoDB support both increment and decrement atomic operations?

**中** Amazon DynamoDB 是否支持递增和递减原子操作？

- **A.** Only increment, since decrement are inherently impossible with DynamoDB's data model.
  - 只能递增，因为对于 DynamoDB 的数据模型来说，递减本质上是不可能的。
- **B.** No, neither increment nor decrement operations.
  - 不，既不是递增也不是递减运算。
- **C.** Yes, both increment and decrement operations.
  - 是的，递增和递减操作。
- **D.** Only decrement, since increment are inherently impossible with DynamoDB's data model.
  - 只能递减，因为对于 DynamoDB 的数据模型来说，递增本质上是不可能的。

**正确答案 / Answer: `C`**


---

## Question 348

**EN** You have multiple Amazon EC2 instances running in a cluster across multiple Availability Zones within the same region. What combination of the following should be used to ensure the highest network performance (packets per second), lowest latency, and lowest jitter? (Choose 3 answers)

**中** 您有多个 Amazon EC2 实例在同一区域内多个可用区的集群中运行。应使用以下哪种组合来确保最高的网络性能（每秒数据包数）、最低的延迟和最低的抖动？ （选择 3 个答案）

- **A.** Amazon EC2 placement groups.
  - Amazon EC2 归置组。
- **B.** Enhanced networking.
  - 增强联网。
- **C.** Amazon PV AMI.
  - 亚马逊光伏 AMI。
- **D.** Amazon HVM AMI.
  - 亚马逊 HVM AMI。
- **E.** Amazon Linux.
  - 亚马逊 Linux。
- **F.** Amazon VPC.
  - Amazon VPC。

**正确答案 / Answer: `A, B, D`**


---

## Question 349

**EN** If an Amazon EBS volume is the root device of an instance, can I detach it without stopping the instance?

**中** 如果 Amazon EBS 卷是实例的根设备，我可以在不停止实例的情况下分离它吗？

- **A.** Yes but only if Windows instance.
  - 是的，但仅限于 Windows 实例。
- **B.** Yes.
  - 是的。
- **C.** No.
  - 不。
- **D.** Yes but only if a Linux instance.
  - 是的，但仅限于 Linux 实例。

**正确答案 / Answer: `C`**


---

## Question 350

**EN** True or False: When you add a rule to a DB security group, you do not need to specify port number or protocol.

**中** 对或错：将规则添加到数据库安全组时，不需要指定端口号或协议。

- **A.** Depends on the ROMS used.
  - 取决于所使用的 ROM。
- **B.** True.
  - 真的。
- **C.** False.
  - 错误的。

**正确答案 / Answer: `B`**


---

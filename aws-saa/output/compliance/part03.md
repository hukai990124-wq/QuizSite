# AWS SAA-C03 原创练习卷 · 第 03 份

> 题目 101–150 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 101

**EN** What is the maximum write throughput I can provision for a single Dynamic DB table?

**中** 我可以为单个动态数据库表配置的最大写入吞吐量是多少？

- **A.** 1,000 write capacity units.
  - 1,000 个写入容量单位。
- **B.** 100,000 write capacity units.
  - 100,000 个写入容量单位。
- **C.** Dynamic DB is designed to scale without limits, but if you go beyond 10,000 you have to contact AWS first.
  - 动态数据库旨在无限扩展，但如果超过 10,000 个，则必须首先联系 AWS。
- **D.** 10,000 write capacity units.
  - 10,000 个写入容量单位。

**正确答案 / Answer: `C`**


---

## Question 102

**EN** Do Amazon EBS volumes persist independently from the running life of an Amazon EC2 instance?

**中** Amazon EBS 卷是否独立于 Amazon EC2 实例的运行生命周期持续存在？

- **A.** Yes, they do but only if they are detached from the instance.
  - 是的，它们会这样做，但前提是它们与实例分离。
- **B.** No, you cannot attach EBS volumes to an instance.
  - 不可以，您不能将 EBS 卷附加到实例。
- **C.** No, they are dependent.
  - 不，他们是依赖的。
- **D.** Yes, they do.
  - 是的，他们确实这么做了。

**正确答案 / Answer: `D`**


---

## Question 103

**EN** What is a Security Group?

**中** 什么是安全组？

- **A.** None of these.
  - 这些都没有。
- **B.** A list of users that can access Amazon EC2 instances.
  - 可以访问 Amazon EC2 实例的用户列表。
- **C.** An Access Control List (ACL) for AWS resources.
  - AWS 资源的访问控制列表 (ACL)。
- **D.** A firewall for inbound traffic, built-in around every Amazon EC2 instance.
  - 用于入站流量的防火墙，内置在每个 Amazon EC2 实例周围。

**正确答案 / Answer: `D`**


---

## Question 104

**EN** You need to set up a high level of security for an Amazon Relational Database Service (RDS) you have just built in order to protect the confidential information stored in it. What are all the possible security groups that RDS uses?

**中** 您需要为刚刚构建的 Amazon Relational Database Service (RDS) 设置高级别的安全性，以保护其中存储的机密信息。 RDS 使用的所有可能的安全组有哪些？

- **A.** DB security groups, VPC security groups, and EC2 security groups.
  - DB 安全组、VPC 安全组和 EC2 安全组。
- **B.** DB security groups only.
  - 仅限数据库安全组。
- **C.** EC2 security groups only.
  - 仅限 EC2 安全组。
- **D.** VPC security groups, and EC2 security groups.
  - VPC 安全组和 EC2 安全组。

**正确答案 / Answer: `A`**


---

## Question 105

**EN** In the 'Detailed' monitoring data available for your Amazon EBS volumes, Provisioned IOPS volumes automatically send [...] minute metrics to Amazon CloudWatch.

**中** 在可用于 Amazon EBS 卷的“详细”监控数据中，预配置 IOPS 卷会自动将分钟指标发送到 Amazon CloudWatch。

- **A.** 3.
  - 3.
- **B.** 1.
  - 1.
- **C.** 5.
  - 5.
- **D.** 2.
  - 2.

**正确答案 / Answer: `B`**


---

## Question 106

**EN** You are looking at ways to improve some existing infrastructure as it seems a lot of engineering resources are being taken up with basic management and monitoring tasks and the costs seem to be excessive. You are thinking of deploying Amazon ElasticCache to help. Which of the following statements is true in regards to ElasticCache?

**中** 您正在寻找改进某些现有基础设施的方法，因为基本管理和监控任务似乎占用了大量工程资源，而且成本似乎过高。您正在考虑部署 Amazon ElasticCache 来提供帮助。以下关于 ElasticCache 的说法哪一项是正确的？

- **A.** You can improve load and response times to user actions and queries however the cost associated with scaling web applications will be more.
  - 您可以改善用户操作和查询的负载和响应时间，但是与扩展 Web 应用程序相关的成本将会更高。
- **B.** You can't improve load and response times to user actions and queries but you can reduce the cost associated with scaling web applications.
  - 您无法改善用户操作和查询的负载和响应时间，但可以降低与扩展 Web 应用程序相关的成本。
- **C.** You can improve load and response times to user actions and queries however the cost associated with scaling web applications will remain the same.
  - 您可以改进用户操作和查询的负载和响应时间，但与扩展 Web 应用程序相关的成本将保持不变。
- **D.** You can improve load and response times to user actions and queries and also reduce the cost associated with scaling web applications.
  - 您可以缩短用户操作和查询的负载和响应时间，还可以降低与扩展 Web 应用程序相关的成本。

**正确答案 / Answer: `D`**


---

## Question 107

**EN** A customer needs corporate IT governance and cost oversight of all AWS resources consumed by its divisions. The divisions want to maintain administrative control of the discrete AWS resources they consume and keep those resources separate from the resources of other divisions. Which of the following options, when used together will support the autonomy/control of divisions while enabling corporate IT to maintain governance and cost oversight? (Choose 2 answers)

**中** 客户需要对其部门消耗的所有 AWS 资源进行公司 IT 治理和成本监督。这些部门希望维持对其消耗的离散 AWS 资源的管理控制，并将这些资源与其他部门的资源分开。以下哪些选项一起使用时将支持部门的自主/控制，同时使企业 IT 能够维持治理和成本监督？ （选择 2 个答案）

- **A.** Use AWS Consolidated Billing and disable AWS root account access for the child accounts.
  - 使用 AWS Consolidated Billing 并禁用子账户的 AWS 根账户访问权限。
- **B.** Enable IAM cross-account access for all corporate IT administrators in each child account.
  - 为每个子账户中的所有公司 IT 管理员启用 IAM 跨账户访问。
- **C.** Create separate VPCs for each division within the corporate IT AWS account.
  - 为公司 IT AWS 账户中的每个部门创建单独的 VPC。
- **D.** Use AWS Consolidated Billing to link the divisions' accounts to a parent corporate account.
  - 使用 AWS Consolidated Billing 将部门的账户链接到父公司账户。
- **E.** Write all child AWS CloudTrail and Amazon CloudWatch logs to each child account's Amazon S3 'Log' bucket.
  - 将所有子 AWS CloudTrail 和 Amazon CloudWatch 日志写入每个子账户的 Amazon S3“日志”存储桶。

**正确答案 / Answer: `D, E`**


---

## Question 108

**EN** After creating a new IAM user which of the following must be done before they can successfully make API calls?

**中** 创建新的 IAM 用户后，必须执行以下哪项操作才能成功进行 API 调用？

- **A.** Add a password to the user.
  - 为用户添加密码。
- **B.** Enable Multi-Factor Authentication for the user.
  - 为用户启用多重身份验证。
- **C.** Assign a Password Policy to the user.
  - 为用户分配密码策略。
- **D.** Create a set of Access Keys for the user.
  - 为用户创建一组访问密钥。

**正确答案 / Answer: `D`**


---

## Question 109

**EN** A friend wants you to set up a small BitTorrent storage area for him on Amazon S3. You tell him it is highly unlikely that AWS would allow such a thing in their infrastructure. However you decide to investigate. Which of the following statements best describes using BitTorrent with Amazon S3?

**中** 一位朋友希望您在 Amazon S3 上为他设置一个小型 BitTorrent 存储区域。你告诉他 AWS 不太可能在他们的基础设施中允许这样的事情。但您决定进行调查。以下哪项陈述最准确地描述了将 BitTorrent 与 Amazon S3 结合使用？

- **A.** Amazon S3 does not support the BitTorrent protocol because it is used for pirated software.
  - Amazon S3 不支持 BitTorrent 协议，因为它用于盗版软件。
- **B.** You can use the BitTorrent protocol but only for objects that are less than 100 GB in size.
  - 您可以使用 BitTorrent 协议，但仅适用于大小小于 100 GB 的对象。
- **C.** You can use the BitTorrent protocol but you need to ask AWS for specific permissions first.
  - 您可以使用 BitTorrent 协议，但需要先向 AWS 请求特定权限。
- **D.** You can use the BitTorrent protocol but only for objects that are less than 5 GB in size.
  - 您可以使用 BitTorrent 协议，但仅限大小小于 5 GB 的对象。

**正确答案 / Answer: `D`**


---

## Question 110

**EN** IAM's Policy Evaluation Logic always starts with a default [...] for every request, except for those that use the AWS account's root security credentials?

**中** 对于每个请求，IAM 的策略评估逻辑始终以默认值开始，但使用 AWS 账户根安全凭证的请求除外？

- **A.** Permit.
  - 允许。
- **B.** Deny.
  - 否定。
- **C.** Cancel.
  - 取消。

**正确答案 / Answer: `B`**


---

## Question 111

**EN** You have been given a scope to deploy some AWS infrastructure for a large organization. The requirements are that you will have a lot of EC2 instances but may need to add more when the average utilization of your Amazon EC2 fleet is high and conversely remove them when CPU utilization is low. Which AWS services would be best to use to accomplish this?

**中** 您已获得为大型组织部署一些 AWS 基础设施的范围。要求是您将拥有大量 EC2 实例，但当 Amazon EC2 队列的平均利用率较高时可能需要添加更多实例，反之，当 CPU 利用率较低时则需要删除它们。最适合使用哪些 AWS 服务来实现此目的？

- **A.** Auto Scaling, Amazon CloudWatch and AWS Elastic Beanstalk.
  - 自动缩放，Amazon CloudWatch 和 AWS Elastic Beanstalk。
- **B.** Auto Scaling, Amazon CloudWatch and Elastic Load Balancing.
  - 自动扩展、Amazon CloudWatch 和弹性负载均衡。
- **C.** Amazon CloudFront, Amazon CloudWatch and Elastic Load Balancing.
  - Amazon CloudFront、Amazon CloudWatch 和弹性负载平衡。
- **D.** AWS Elastic Beanstalk, Amazon CloudWatch and Elastic Load Balancing.
  - AWS Elastic Beanstalk、Amazon CloudWatch 和弹性负载平衡。

**正确答案 / Answer: `B`**


---

## Question 112

**EN** When does the billing of an Amazon EC2 system begin?

**中** Amazon EC2 系统什么时候开始计费？

- **A.** It starts when the Status column for your distribution changes from Creating to Deployed.
  - 当您的发行版的“状态”列从“正在创建”更改为“已部署”时，它就会启动。
- **B.** It starts as soon as you click the create instance option on the main EC2 console.
  - 当您单击主 EC2 控制台上的创建实例选项时，它就会启动。
- **C.** It starts when your instance reaches 720 instance hours.
  - 当您的实例达到 720 个实例小时时，它将开始。
- **D.** It starts when Amazon EC2 initiates the boot sequence of an AMI instance.
  - 它在 Amazon EC2 启动 AMI 实例的引导序列时启动。

**正确答案 / Answer: `D`**


---

## Question 113

**EN** A user is storing a large number of objects on AWS S3. The user wants to implement the search functionality among the objects. How can the user achieve this?

**中** 用户在 AWS S3 上存储大量对象。用户想要实现对象之间的搜索功能。用户如何才能实现这一目标？

- **A.** Use the indexing feature of S3.
  - 使用 S3 的索引功能。
- **B.** Tag the objects with the metadata to search on that.
  - 使用元数据标记对象以进行搜索。
- **C.** Use the query functionality of S3.
  - 使用 S3 的查询功能。
- **D.** Make your own DB system which stores the S3 metadata for the search functionality.
  - 创建您自己的数据库系统，用于存储搜索功能的 S3 元数据。

**正确答案 / Answer: `D`**


---

## Question 114

**EN** A corporate web application is deployed within an Amazon Virtual Private Cloud (VPC) and is connected to the corporate data center via an IPsec VPN. The application must authenticate against the on-premises LDAP server. After authentication, each logged-in user can only access an Amazon Simple Storage Space (S3) keyspace specific to that user. Which two approaches can satisfy these objectives? (Choose 2 answers)

**中** 企业 Web 应用程序部署在 Amazon Virtual Private Cloud (VPC) 内，并通过 IPsec VPN 连接到企业数据中心。应用程序必须针对本地 LDAP 服务器进行身份验证。身份验证后，每个登录用户只能访问特定于该用户的 Amazon Simple Storage Space (S3) 密钥空间。哪两种方法可以满足这些目标？ （选择 2 个答案）

- **A.** Develop an identity broker that authenticates against IAM security Token service to assume an IAM role in order to get temporary AWS security credentials. The application calls the identity broker to get AWS temporary security credentials with access to the appropriate S3 bucket.
  - 开发一个身份代理，根据 IAM 安全令牌服务进行身份验证，以承担 IAM 角色，从而获取临时 AWS 安全凭证。应用程序调用身份代理来获取可访问适当 S3 存储桶的 AWS 临时安全凭证。
- **B.** The application authenticates against LDAP and retrieves the name of an IAM role associated with the user. The application then calls the IAM Security Token Service to assume that IAM role. The application can use the temporary credentials to access the appropriate S3 bucket.
  - 应用程序根据 LDAP 进行身份验证并检索与用户关联的 IAM 角色的名称。然后，应用程序调用 IAM 安全令牌服务来承担该 IAM 角色。应用程序可以使用临时凭证来访问适当的 S3 存储桶。
- **C.** Develop an identity broker that authenticates against LDAP and then calls IAM Security Token Service to get IAM federated user credentials. The application calls the identity broker to get IAM federated user credentials with access to the appropriate S3 bucket.
  - 开发一个身份代理，根据 LDAP 进行身份验证，然后调用 IAM 安全令牌服务来获取 IAM 联合用户凭证。应用程序调用身份代理来获取能够访问适当 S3 存储桶的 IAM 联合用户凭证。
- **D.** The application authenticates against LDAP. The application then calls the AWS identity and Access Management (IAM) Security service to log in to IAM using the LDAP credentials. The application can use the IAM temporary credentials to access the appropriate S3 bucket.
  - 应用程序根据 LDAP 进行身份验证。然后，应用程序调用 AWS Identity and Access Management (IAM) 安全服务以使用 LDAP 凭证登录 IAM。应用程序可以使用 IAM 临时凭证来访问适当的 S3 存储桶。
- **E.** The application authenticates against IAM Security Token Service using the LDAP credentials. The application uses those temporary AWS security credentials to access the appropriate S3 bucket.
  - 应用程序使用 LDAP 凭证针对 IAM 安全令牌服务进行身份验证。应用程序使用这些临时 AWS 安全凭证来访问适当的 S3 存储桶。

**正确答案 / Answer: `B, C`**


---

## Question 115

**EN** A group can contain many users. Can a user belong to multiple groups?

**中** 一个组可以包含许多用户。一个用户可以属于多个组吗？

- **A.** Yes always.
  - 是的，总是。
- **B.** No.
  - 不。
- **C.** Yes but only if they are using two factor authentication.
  - 是的，但前提是他们使用两因素身份验证。
- **D.** Yes but only in VPC.
  - 可以，但仅限于 VPC。

**正确答案 / Answer: `A`**


---

## Question 116

**EN** Does Dynamo DB support in-place atomic updates?

**中** Dynamo DB 是否支持就地原子更新？

- **A.** It is not defined.
  - 它没有被定义。
- **B.** Yes.
  - 是的。
- **C.** It does support in-place non-atomic updates.
  - 它确实支持就地非原子更新。

**正确答案 / Answer: `B`**


---

## Question 117

**EN** Can you move a Reserved Instance from one Availability Zone to another?

**中** 您可以将预留实例从一个可用区移动到另一个可用区吗？

- **A.** Yes, but each Reserved Instance is associated with a specific Region that cannot be changed.
  - 是的，但每个预留实例都与无法更改的特定区域相关联。
- **B.** Yes, only in US-West-2.
  - 是的，仅限 US-West-2。
- **C.** Yes, only in US-East-1.
  - 是的，仅限 US-East-1。
- **D.** No.
  - 不。

**正确答案 / Answer: `A`**


---

## Question 118

**EN** You want to establish a dedicated network connection from your premises to AWS in order to save money by transferring data directly to AWS rather than through your internet service provider. You are sure there must be some other benefits beyond cost savings. Which of the following statements would be the best choice to put your client's mind at rest?

**中** 您希望建立从您的场所到 AWS 的专用网络连接，以便通过直接将数据传输到 AWS（而不是通过互联网服务提供商）来节省资金。您确信除了节省成本之外，还一定有其他一些好处。以下哪项陈述是让您的客户放心的最佳选择？

- **A.** Different instances running on the same physical machine are isolated from each other via a 256-bit Advanced Encryption Standard (AES-256).
  - 在同一台物理机上运行的不同实例通过 256 位高级加密标准 (AES-256) 相互隔离。
- **B.** Different instances running on the same physical machine are isolated from each other via the Xen hypervisor and via a 256-bit Advanced Encryption Standard (AES-256).
  - 在同一台物理机上运行的不同实例通过 Xen 虚拟机管理程序和 256 位高级加密标准 (AES-256) 相互隔离。
- **C.** Different instances running on the same physical machine are isolated from each other via the Xen hypervisor.
  - 在同一台物理机上运行的不同实例通过 Xen hypervisor 相互隔离。
- **D.** Different instances running on the same physical machine are isolated from each other via IAM permissions.
  - 同一物理机上运行的不同实例通过 IAM 权限相互隔离。

**正确答案 / Answer: `C`**


---

## Question 119

**EN** Can I detach the primary (ethO) network interface when the instance is running or stopped?

**中** 当实例运行或停止时，我可以分离主 (ethO) 网络接口吗？

- **A.** Yes, You can.
  - 是的，你可以。
- **B.** No. You cannot.
  - 不，你不能。

**正确答案 / Answer: `B`**


---

## Question 120

**EN** You have launched an Amazon Elastic Compute Cloud (EC2) instance into a public subnet with a primary private I P address assigned, an internet gateway is attached to the VPC, and the public route table is configured to send all Internet-based traffic to the Internet gateway. The instance security group is set to allow all outbound traffic but cannot access the internet. Why is the Internet unreachable from this instance?

**中** 您已将 Amazon Elastic Compute Cloud (EC2) 实例启动到公有子网中，并分配了主私有 IP 地址，互联网网关连接到 VPC，并且公共路由表配置为将所有基于互联网的流量发送到互联网网关。实例安全组设置为允许所有出站流量，但无法访问互联网。为什么此实例无法访问 Internet？

- **A.** The instance does not have a public IP address.
  - 该实例没有公网 IP 地址。
- **B.** The internet gateway security group must allow all outbound traffic.
  - Internet 网关安全组必须允许所有出站流量。
- **C.** The instance security group must allow all inbound traffic.
  - 实例安全组必须允许所有入站流量。
- **D.** The instance 'Source/Destination check' property must be enabled.
  - 必须启用实例“源/目标检查”属性。

**正确答案 / Answer: `A`**


---

## Question 121

**EN** Which of the following statements best describes the differences between Elastic Beanstalk and CloudFormation?

**中** 以下哪项陈述最能描述 Elastic Beanstalk 和 CloudFormation 之间的差异？

- **A.** Elastic Beanstalk uses Elastic load balancing and CloudFormation doesn't.
  - Elastic Beanstalk 使用 Elastic 负载平衡，而 CloudFormation 则不使用。
- **B.** CloudFormation is faster in deploying applications than Elastic Beanstalk.
  - CloudFormation 的应用程序部署速度比 Elastic Beanstalk 更快。
- **C.** Elastic Beanstalk is faster in deploying applications than CloudFormation.
  - Elastic Beanstalk 的应用程序部署速度比 CloudFormation 更快。
- **D.** CloudFormation is much more powerful than Elastic Beanstalk, because you can actually design and script custom resources.
  - CloudFormation 比 Elastic Beanstalk 强大得多，因为您实际上可以设计自定义资源并编写脚本。

**正确答案 / Answer: `D`**


---

## Question 122

**EN** It is advised that you watch the Amazon CloudWatch [...] metric (available via the AWS Management Console or Amazon Cloud Watch APIs) carefully and recreate the Read Replica should it fall behind due to replication errors.

**中** 建议您仔细观察 Amazon CloudWatch 指标（可通过 AWS 管理控制台或 Amazon Cloud Watch API 获取），并在只读副本因复制错误而落后时重新创建只读副本。

- **A.** Write Lag.
  - 写滞后。
- **B.** Read Replica.
  - 阅读副本。
- **C.** Replica Lag.
  - 副本滞后。
- **D.** Single Replica.
  - 单个副本。

**正确答案 / Answer: `C`**


---

## Question 123

**EN** Your application provides data transformation services. Files containing data to be transformed are first uploaded to Amazon S3 and then transformed by a fleet of spot EC2 instances. Fi les submitted by your premium customers must be transformed with the highest priority. How should you implement such a system?

**中** 您的应用程序提供数据转换服务。包含要转换的数据的文件首先上传到 Amazon S3，然后由一组 Spot EC2 实例进行转换。您的高级客户提交的文件必须以最高优先级进行转换。您应该如何实施这样的系统？

- **A.** Use a DynamoDB table with an attribute defining the priority level. Transformation instances will scan the table for tasks, sorting the results by priority level.
  - 使用具有定义优先级的属性的 DynamoDB 表。转换实例将扫描表中的任务，并按优先级对结果进行排序。
- **B.** Use Route 53 latency based-routing to send high priority tasks to the closest transformation instances.
  - 使用 Route 53 基于延迟的路由将高优先级任务发送到最近的转换实例。
- **C.** Use two SQS queues, one for high priority messages, the other for default priority. Transformation instances first poll the high priority queue; if there is no message, they poll the default priority queue.
  - 使用两个 SQS 队列，一个用于高优先级消息，另一个用于默认优先级。转换实例首先轮询高优先级队列；如果没有消息，它们会轮询默认优先级队列。
- **D.** Use a single SQS queue. Each message contains the priority level. Transformation instances poll high-priority messages first.
  - 使用单个 SQS 队列。每条消息都包含优先级。转换实例首先轮询高优先级消息。

**正确答案 / Answer: `C`**


---

## Question 124

**EN** True or False: When you view the block device mapping for your instance, you can see only the EBS volumes, not the instance store volumes.

**中** 对或错：当您查看实例的块储存设备映射时，您只能看到 EBS 卷，而看不到实例存储卷。

- **A.** Depends on the instance type.
  - 取决于实例类型。
- **B.** False.
  - 错误的。
- **C.** Depends on whether you use API call.
  - 取决于你是否使用 API 调用。
- **D.** True.
  - 真的。

**正确答案 / Answer: `D`**


---

## Question 125

**EN** Does AWS CloudFormation support Amazon EC2 tagging?

**中** AWS CloudFormation 是否支持 Amazon EC2 标记？

- **A.** Yes, AWS CloudFormation supports Amazon EC2 tagging.
  - 是的，AWS CloudFormation 支持 Amazon EC2 标记。
- **B.** No, CloudFormation doesn't support any tagging.
  - 不，CloudFormation 不支持任何标记。
- **C.** No, it doesn't support Amazon EC2 tagging.
  - 不，它不支持 Amazon EC2 标记。
- **D.** It depends if the Amazon EC2 tagging has been defined in the template.
  - 这取决于模板中是否定义了 Amazon EC2 标记。

**正确答案 / Answer: `A`**


---

## Question 126

**EN** If I modify a DB Instance or the DB parameter group associated with the instance, should I reboot the instance for the changes to take effect?

**中** 如果我修改数据库实例或与该实例关联的数据库参数组，是否应该重新启动实例以使更改生效？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。

**正确答案 / Answer: `A`**


---

## Question 127

**EN** If you are using Amazon RDS Provisioned IOPS storage with MySQL and Oracle database engines, you can scale the throughput of your database Instance by specifying the IOPS rate from [...].

**中** 如果您将 Amazon RDS 预配置 IOPS 存储与 MySQL 和 Oracle 数据库引擎一起使用，则可以通过指定 [...] 中的 IOPS 速率来扩展数据库实例的吞吐量。

- **A.** 1,000 to 100,000.
  - 1,000 到 100,000。
- **B.** 100 to 1,000.
  - 100 到 1,000。
- **C.** 10,000 to 100,000.
  - 10,000 到 100,000。
- **D.** 1,000 to 10,000.
  - 1,000 到 10,000。

**正确答案 / Answer: `D`**


---

## Question 128

**EN** To specify a resource in a policy statement, in Amazon EC2, can you use its Amazon Resource Name (ARN)?

**中** 要在策略声明中指定资源，在 Amazon EC2 中，您可以使用其 Amazon 资源名称 (ARN) 吗？

- **A.** Yes, you can.
  - 是的，你可以。
- **B.** No, you can't because EC2 is not related to AR
  - 不，你不能，因为 EC2 与 AR 无关
- **C.** No, you can't because you can't specify a particular Amazon EC2 resource in an IAM policy.
  - 不可以，因为您无法在 IAM 策略中指定特定的 Amazon EC2 资源。
- **D.** Yes, you can but only for the resources that are not affected by the action.
  - 是的，您可以，但仅限于不受该操作影响的资源。

**正确答案 / Answer: `A`**


---

## Question 129

**EN** An enterprise wants to use a third-party SaaS application. The SaaS application needs to have access to issue several API commands to discover Amazon EC2 resources running within the enterprise's account The enterprise has internal security policies that require any outside access to their environment must conform to the principles of least privilege and there must be controls in place to ensure that the credentials used by the 5aa5 vendor cannot be used by any other third party. Which of the following would meet all of these conditions?

**中** 某企业想要使用第三方 SaaS 应用程序。 SaaS 应用程序需要有权发出多个 API 命令来发现在企业帐户内运行的 Amazon EC2 资源 企业具有内部安全策略，要求对其环境的任何外部访问都必须符合最小权限原则，并且必须有适当的控制措施以确保 5aa5 供应商使用的凭据不能被任何其他第三方使用。以下哪项能够满足所有这些条件？

- **A.** From the AWS Management Console, navigate to the Security Credentials page and retrieve the access and secret key for your account.
  - 从 AWS 管理控制台，导航到安全凭证页面并检索您账户的访问权限和密钥。
- **B.** Create an IAM user within the enterprise account assign a user policy to the IAM user that allows only the actions required by the SaaS application create a new access and secret key for the user and provide these credentials to the 5aa5 provider.
  - 在企业账户中创建 IAM 用户 向 IAM 用户分配用户策略，仅允许 SaaS 应用程序所需的操作 为用户创建新的访问权限和密钥，并将这些凭证提供给 5aa5 提供商。
- **C.** Create an IAM role for cross-account access allows the SaaS provider's account to assume the role and assign it a policy that allows only the actions required by the SaaS application.
  - 创建跨账户访问的 IAM 角色允许 SaaS 提供商的账户代入该角色并为其分配仅允许 SaaS 应用程序所需的操作的策略。
- **D.** Create an IAM role for EC2 instances, assign it a policy that allows only the actions required for the SaaS application to work. Provide the role ARN to the SaaS provider to use when launching their application instances.
  - 为 EC2 实例创建 IAM 角色，为其分配一个策略，仅允许 SaaS 应用程序运行所需的操作。向 SaaS 提供商提供角色 ARN，以便在启动其应用程序实例时使用。

**正确答案 / Answer: `C`**


---

## Question 130

**EN** By default what are ENIs that are automatically created and attached to instances using the EC2 console set to do when the attached instance terminates?

**中** 默认情况下，使用 EC2 控制台自动创建并附加到实例的 ENI 设置为在附加实例终止时执行哪些操作？

- **A.** Remain as is.
  - 保持原样。
- **B.** Terminate.
  - 终止。
- **C.** Hibernate.
  - 冬眠。
- **D.** Pause.
  - 暂停。

**正确答案 / Answer: `B`**


---

## Question 131

**EN** In EC2, what happens to the data in an instance store if an instance reboots (either intentionally or unintentionally)?

**中** 在 EC2 中，如果实例重新启动（有意或无意），实例存储中的数据会发生什么情况？

- **A.** Data is deleted from the instance store for security reasons.
  - 出于安全原因，数据将从实例存储中删除。
- **B.** Data persists in the instance store.
  - 数据保留在实例存储中。
- **C.** Data is partially present in the instance store.
  - 数据部分存在于实例存储中。
- **D.** Data in the instance store will be lost.
  - 实例存储中的数据将会丢失。

**正确答案 / Answer: `B`**


---

## Question 132

**EN** You are designing a social media site and are considering how to mitigate distributed denial-of service (DDoS) attacks. Which of the below are viable mitigation techniques? (Choose 3 answers)

**中** 您正在设计一个社交媒体网站，并正在考虑如何减轻分布式拒绝服务 (DDoS) 攻击。以下哪些是可行的缓解技术？ （选择 3 个答案）

- **A.** Add multiple elastic network interfaces (ENis) to each EC2 instance to increase the network bandwidth.
  - 向每个 EC2 实例添加多个弹性网络接口 (ENis) 以增加网络带宽。
- **B.** Use dedicated instances to ensure that each instance has the maximum performance possible.
  - 使用专用实例可确保每个实例都具有尽可能高的性能。
- **C.** Use an Amazon CloudFront distribution for both static and dynamic content.
  - 对静态和动态内容使用 Amazon CloudFront 分发。
- **D.** Use an Elastic Load Balancer with auto scaling groups at the web. App and Amazon Relational Database Service (RDS) tiers.
  - 在 Web 上使用带有自动缩放组的 Elastic Load Balancer。应用程序和 Amazon Relational Database Service (RDS) 层。
- **E.** Add alert Amazon CloudWatch to look for high Network in and CPU utilization.
  - 添加警报 Amazon CloudWatch 以查找高网络输入和 CPU 利用率。
- **F.** Create processes and capabilities to quickly add and remove rules to the instance OS firewall.
  - 创建流程和功能以快速添加和删除实例操作系统防火墙的规则。

**正确答案 / Answer: `C, D, E`**


---

## Question 133

**EN** In Amazon CloudFront, if you use Amazon EC2 instances and other custom origins with CloudFront, it is recommended to [...].

**中** 在 Amazon CloudFront 中，如果您将 Amazon EC2 实例和其他自定义源与 CloudFront 结合使用，建议 [...]。

- **A.** not use Elastic Load Balancing.
  - 不使用弹性负载平衡。
- **B.** restrict Internet communication to private instances while allowing outgoing traffic.
  - 将 Internet 通信限制为私有实例，同时允许传出流量。
- **C.** enable access key rotation for CloudWatch metrics.
  - 启用 CloudWatch 指标的访问密钥轮换。
- **D.** specify the URL of the load balancer for the domain name of your origin server.
  - 指定源服务器域名的负载均衡器的 URL。

**正确答案 / Answer: `D`**


---

## Question 134

**EN** Which of the following statements is true regarding attaching network interfaces to your instances in your VPC?

**中** 关于将网络接口连接到 VPC 中的实例，以下哪项陈述是正确的？

- **A.** You can attach 5 ENIs per instance type.
  - 您可以为每个实例类型附加 5 个 ENI。
- **B.** You can attach as many ENIs as you want.
  - 您可以根据需要附加任意数量的 ENI。
- **C.** The number of ENIs you can attach varies by instance type.
  - 您可以附加的 ENI 数量因实例类型而异。
- **D.** You can attach 100 ENIs total regardless of instance type.
  - 无论实例类型如何，您总共可以附加 100 个 ENI。

**正确答案 / Answer: `C`**


---

## Question 135

**EN** What is the reason for this?

**中** 这是什么原因呢？

- **A.** For security reasons.
  - 出于安全原因。
- **B.** Hardware restrictions.
  - 硬件限制。
- **C.** Public (IPV4) internet addresses are a scarce resource.
  - 公共 (IPV4) 互联网地址是一种稀缺资源。
- **D.** There are only 5 network interfaces per instance.
  - 每个实例只有 5 个网络接口。

**正确答案 / Answer: `C`**


---

## Question 136

**EN** Can a 'user' be associated with multiple AWS accounts?

**中** 一个“用户”可以与多个 AWS 账户关联吗？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。

**正确答案 / Answer: `A`**


---

## Question 137

**EN** You have an application running on an Amazon Elastic Compute Cloud instance, that uploads 5 GB video objects to Amazon Simple Storage Service (S3). Video uploads are taking longer than expected, resulting in poor application performance. Which method will help improve performance of your application?

**中** 您有一个在 Amazon Elastic Compute Cloud 实例上运行的应用程序，该应用程序将 5 GB 视频对象上传到 Amazon Simple Storage Service (S3)。视频上传时间比预期长，导致应用程序性能不佳。哪种方法将有助于提高应用程序的性能？

- **A.** Enable enhanced networking.
  - 启用增强网络。
- **B.** Use Amazon S3 multipart upload.
  - 使用 Amazon S3 分段上传。
- **C.** Leveraging Amazon CloudFront, use the HTTP POST method to reduce latency.
  - 利用 Amazon CloudFront，使用 HTTP POST 方法来减少延迟。
- **D.** Use Amazon Elastic Block Store Provisioned IOPs and use an Amazon EBS-optimized instance.
  - 使用 Amazon Elastic Block Store 预置 IOP 并使用 Amazon EBS 优化实例。

**正确答案 / Answer: `B`**


---

## Question 138

**EN** You have been given a scope to set up an AWS Media Sharing Framework for a new start up photo sharing company similar to flickr. The first thing that comes to mind about this is that it will obviously need a huge amount of persistent data storage for this framework. Which of the following storage options would be appropriate for persistent storage?

**中** 您已获得为一家新成立的照片共享公司（类似于 flickr）设置 AWS 媒体共享框架的范围。想到这一点，首先想到的是这个框架显然需要大量的持久数据存储。以下哪种存储选项适合持久存储？

- **A.** Amazon Glacier or Amazon S3.
  - Amazon Glacier 或 Amazon S3。
- **B.** Amazon Glacier or AWS Import/Export.
  - Amazon Glacier 或 AWS 导入/导出。
- **C.** AWS Import/Export or Amazon CloudFront.
  - AWS 导入/导出或 Amazon CloudFront。
- **D.** Amazon EBS volumes or Amazon S3.
  - Amazon EBS 卷或 Amazon S3。

**正确答案 / Answer: `D`**


---

## Question 139

**EN** You need a persistent and durable storage to trace call activity of an IVR (Interactive Voice Response) system. Call duration is mostly in the 2-3 minutes timeframe. Each traced call can be either active or terminated. An external application needs to know each minute the list of currently active calls, which are usually a few calls/second. Put once per month there is a periodic peak up to 1000 calls/second for a few hours. The system is open 24/7 and any downtime should be avoided. Historical data is periodically archived to files. Cost saving is a priority for this project. What database implementation would better fit this scenario, keeping costs as low as possible?

**中** 您需要持久且持久的存储来跟踪 IVR（交互式语音应答）系统的呼叫活动。通话时长大多在 2-3 分钟内。每个跟踪的呼叫可以是活动的，也可以是终止的。外部应用程序需要每分钟了解当前活动呼叫的列表，通常是每秒几个呼叫。每月一次，会出现几个小时内高达 1000 次调用/秒的周期性峰值。系统 24/7 全天候开放，应避免任何停机。历史数据定期归档到文件中。节省成本是该项目的首要任务。什么样的数据库实施更适合这种情况，并尽可能降低成本？

- **A.** Use RDS Multi-AZ with two tables, one for 'Active calls' and one for 'Terminated calls'. in this way the 'Active calls' table is always small and effective to access.
  - 使用带有两张表的 RDS 多可用区，一张用于“活动呼叫”，一张用于“终止呼叫”。通过这种方式，“活动呼叫”表始终很小并且可以有效访问。
- **B.** Use DynamoDB with a 'Calls' table and a Global Secondary Index on a 'lsActive' attribute that is present for active calls only in this way the Global Secondary index is sparse and more effective.
  - 将 DynamoDB 与“Calls”表和“lsActive”属性上的全局二级索引结合使用，该属性仅针对活动呼叫而存在，这样全局二级索引就会变得稀疏且更有效。
- **C.** Use DynamoDB with a 'Calls' table and a Global secondary index on a 'State' attribute that can equal to 'active' or 'terminated' in this way the Global Secondary index can be used for all Items in the table.
  - 将 DynamoDB 与“呼叫”表和“状态”属性上的全局二级索引一起使用，该属性可以等于“活动”或“终止”，这样全局二级索引可用于表中的所有项目。
- **D.** Use RDS Multi-AZ with a 'CALLS' table and an Indexed 'STATE* field that can be equal to 'ACTIVE' or 'TERMINATED' in this way the SOL query Is optimized by the use of the Index.
  - 将 RDS 多可用区与“CALLS”表和索引“STATE*”字段一起使用，该字段可以等于“ACTIVE”或“TERMINATED”，这样 SOL 查询就可以通过使用索引进行优化。

**正确答案 / Answer: `A`**


---

## Question 140

**EN** If you have chosen Multi-AZ deployment, in the event of a planned or unplanned outage of your primary DB Instance, Amazon RDS automatically switches to the standby replica. The automatic failover mechanism simply changes the record of the main DB Instance to point to the standby DB Instance.

**中** 如果您选择了多可用区部署，则当主数据库实例发生计划内或计划外中断时，Amazon RDS 会自动切换到备用副本。自动故障转移机制只是将主数据库实例的记录更改为指向备用数据库实例。

- **A.** DNAME.
  - 域名。
- **B.** CNAME.
  - 别名记录。
- **C.** TXT.
  - TXT。
- **D.** MX.
  - MX。

**正确答案 / Answer: `B`**


---

## Question 141

**EN** All Amazon EC2 instances are assigned two IP addresses at launch. Which are those?

**中** 所有 Amazon EC2 实例在启动时都分配有两个 IP 地址。那些是哪些？

- **A.** 2 Elastic IP addresses.
  - 2 个弹性 IP 地址。
- **B.** A private IP address and an Elastic IP address.
  - 私有 IP 地址和弹性 IP 地址。
- **C.** A public IP address and an Elastic IP address.
  - 公共 IP 地址和弹性 IP 地址。
- **D.** A private IP address and a public IP address.
  - 私有 IP 地址和公共 IP 地址。

**正确答案 / Answer: `D`**


---

## Question 142

**EN** You need to pass a custom script to new Amazon Linux instances created in your Auto Scaling group. Which feature allows you to accomplish this?

**中** 您需要将自定义脚本传递到 Auto Scaling 组中创建的新 Amazon Linux 实例。哪个功能可以让您完成此任务？

- **A.** User data.
  - 用户数据。
- **B.** EC2Config service.
  - EC2Config 服务。
- **C.** IAM roles.
  - IAM 角色。
- **D.** AWS Config.
  - AWS Config。

**正确答案 / Answer: `A`**


---

## Question 143

**EN** A customer wants to track access to their Amazon Simple Storage Service (S3) buckets and also use this information for their internal security and access audits. Which of the following will meet the Customer requirement?

**中** 客户希望跟踪对其 Amazon Simple Storage Service (S3) 存储桶的访问，并将此信息用于内部安全和访问审核。以下哪项可以满足客户的要求？

- **A.** Enable AWS CloudTrail to audit all Amazon S3 bucket access.
  - 启用 AWS CloudTrail 来审核所有 Amazon S3 存储桶访问。
- **B.** Enable server access logging for all required Amazon S3 buckets.
  - 为所有必需的 Amazon S3 存储桶启用服务器访问日志记录。
- **C.** Enable the Requester Pays option to track access via AWS Billing.
  - 启用请求者付款选项以通过 AWS 账单跟踪访问。
- **D.** Enable Amazon S3 event notifications for Put and Post.
  - 为 Put 和 Post 启用 Amazon S3 事件通知。

**正确答案 / Answer: `A`**


---

## Question 144

**EN** Which DNS name can only be resolved within Amazon EC2?

**中** 哪个 DNS 名称只能在 Amazon EC2 内解析？

- **A.** Public DNS name.
  - 公共 DNS 名称。
- **B.** Internal DNS name.
  - 内部 DNS 名称。
- **C.** External DNS name.
  - 外部 DNS 名称。
- **D.** Global DNS name.
  - 全球 DNS 名称。

**正确答案 / Answer: `B`**


---

## Question 145

**EN** An AWS customer is deploying an application that is composed of an AutoScaling group of EC2 Instances. The customers security policy requires that every outbound connection from these instances to any other service within the customers Virtual Private Cloud must be authenticated using a unique x 509 certificate that contains the specific instance-id. In addition an x 509 certificates must be designed by the customer's Key management service in order to be trusted for authentication. Which of the following configurations will support these requirements?

**中** AWS 客户正在部署由 EC2 实例 AutoScaling 组组成的应用程序。客户安全策略要求从这些实例到客户虚拟私有云内任何其他服务的每个出站连接都必须使用包含特定实例 ID 的唯一 x 509 证书进行身份验证。此外，x 509 证书必须由客户的密钥管理服务设计，以便可信进行身份验证。以下哪些配置将支持这些要求？

- **A.** Configure an IAM Role that grants access to an Amazon S3 object containing a signed certificate and configure the Auto Scaling group to launch instances with this role Have the instances bootstrap get the certificate from Amazon S3 upon first boot.
  - 配置授予对包含签名证书的 Amazon S3 对象的访问权限的 IAM 角色，并将 Auto Scaling 组配置为使用此角色启动实例 让实例引导程序在首次启动时从 Amazon S3 获取证书。
- **B.** Embed a certificate into the Amazon Machine Image that is used by the Auto Scaling group Have the launched instances generate a certificate signature request with the instance's assigned instance- id to the Key management service for signature.
  - 将证书嵌入到 Auto Scaling 组使用的 Amazon 系统映像中 让已启动的实例使用实例分配的实例 ID 生成证书签名请求，以供密钥管理服务签名。
- **C.** Configure the Auto Scaling group to send an SNS notification of the launch of a new instance to the trusted key management service. Have the Key management service generate a signed certificate and send it directly to the newly launched instance.
  - 配置 Auto Scaling 组以将新实例启动的 SNS 通知发送到可信密钥管理服务。让密钥管理服务生成签名证书并将其直接发送到新启动的实例。
- **D.** Configure the launched instances to generate a new certificate upon first boot Have the Key management service poll the AutoScaling group for associated instances and send new instances a certificate signature that contains the specific instance-id.
  - 配置启动的实例以在首次启动时生成新证书 让密钥管理服务轮询 AutoScaling 组以查找关联的实例，并向新实例发送包含特定实例 ID 的证书签名。

**正确答案 / Answer: `C`**


---

## Question 146

**EN** A company is storing data on Amazon Simple Storage Service (S3). The company's security policy mandates that data is encrypted at rest. Which of the following methods can achieve this? (Choose 3 answers)

**中** 一家公司正在 Amazon Simple Storage Service (S3) 上存储数据。该公司的安全策略要求对静态数据进行加密。以下哪种方法可以实现这一目标？ （选择 3 个答案）

- **A.** Use Amazon S3 server-side encryption with AWS Key Management Service managed keys.
  - 将 Amazon S3 服务器端加密与 AWS Key Management Service 托管密钥结合使用。
- **B.** Use Amazon S3 server-side encryption with customer-provided keys.
  - 使用 Amazon S3 服务器端加密和客户提供的密钥。
- **C.** Use Amazon S3 server-side encryption with EC2 key pair.
  - 使用带有 EC2 密钥对的 Amazon S3 服务器端加密。
- **D.** Use Amazon S3 bucket policies to restrict access to the data at rest.
  - 使用 Amazon S3 存储桶策略来限制对静态数据的访问。
- **E.** Encrypt the data on the client-side before ingesting to Amazon S3 using their own master key.
  - 在使用自己的主密钥摄取到 Amazon S3 之前，在客户端对数据进行加密。
- **F.** Use SSL to encrypt the data while in transit to Amazon S3.
  - 在传输到 Amazon S3 时使用 SSL 对数据进行加密。

**正确答案 / Answer: `A, B, E`**


---

## Question 147

**EN** In Amazon EC2, you are billed instance-hours when [...].

**中** 在 Amazon EC2 中，当 [...] 时，您将按实例小时计费。

- **A.** your EC2 instance is in a running state.
  - 您的 EC2 实例处于运行状态。
- **B.** the instance exits from Amazon S3 console.
  - 实例从 Amazon S3 控制台退出。
- **C.** your instance still exits the EC2 console.
  - 您的实例仍然退出 EC2 控制台。
- **D.** EC2 instances stop.
  - EC2 实例停止。

**正确答案 / Answer: `A`**


---

## Question 148

**EN** Which of the below mentioned options is a possible solution to avoid any security threat?

**中** 以下哪个选项是避免任何安全威胁的可能解决方案？

- **A.** Use the IAM based single sign between the AWS resources and the organization application.
  - 在 AWS 资源和组织应用程序之间使用基于 IAM 的单点登录。
- **B.** Use the IAM role and assign it to the instance.
  - 使用 IAM 角色并将其分配给实例。
- **C.** Since the application is hosted on EC2, it does not need credentials to access S3.
  - 由于该应用程序托管在 EC2 上，因此不需要凭据即可访问 S3。
- **D.** Use the 509 certificates instead of the access and the secret access keys.
  - 使用 509 证书代替访问密钥和秘密访问密钥。

**正确答案 / Answer: `B`**


---

## Question 149

**EN** In Amazon EC2 Container Service components, what is the name of a logical grouping of container instances on which you can place tasks?

**中** 在 Amazon EC2 容器服务组件中，您可以在其上放置任务的容器实例的逻辑分组的名称是什么？

- **A.** A cluster.
  - 一个集群。
- **B.** A container instance.
  - 一个容器实例。
- **C.** A container.
  - 一个容器。
- **D.** A task definition.
  - 任务定义。

**正确答案 / Answer: `A`**


---

## Question 150

**EN** You are looking to migrate your Development (Dev) and Test environments to AWS. You have decided to use separate AWS accounts to host each environment. You plan to link each accounts bill to a Master AWS account using Consolidated Billing. To make sure you Keep within budget you would like to implement a way for administrators in the Master account to have access to stop, delete and/or terminate resources in both the Dev and Test accounts. Identify which option will allow you to achieve this goal.

**中** 您希望将您的开发 (Dev) 和测试环境迁移到 AWS。您已决定使用单独的 AWS 账户来托管每个环境。您计划使用合并账单将每个账户账单链接到主 AWS 账户。为了确保您的预算不超出预算，您希望为主帐户中的管理员实施一种方法，以便有权停止、删除和/或终止开发帐户和测试帐户中的资源。确定哪个选项可以让您实现这一目标。

- **A.** Create IAM users in the Master account with full Admin permissions. Create cross-account roles in the Dev and Test accounts that grant the Master account access to the resources in the account by inheriting permissions from the Master account.
  - 在主账户中创建具有完全管理员权限的 IAM 用户。在开发和测试账户中创建跨账户角色，通过继承主账户的权限来授予主账户访问账户中资源的权限。
- **B.** Create IAM users and a cross-account role in the Master account that grants full Admin permissions to the Dev and Test accounts.
  - 在主账户中创建 IAM 用户和跨账户角色，向开发和测试账户授予完整的管理员权限。
- **C.** Create IAM users in the Master account Create cross-account roles in the Dev and Test accounts that have full Admin permissions and grant the Master.
  - 在主账户中创建 IAM 用户 在具有完全管理员权限的开发和测试账户中创建跨账户角色并授予主账户。
- **D.** Link the accounts using Consolidated Billing. This will give IAM users in the Master account access to resources in the Dev and Test accounts.
  - 使用合并账单链接帐户。这将使主账户中的 IAM 用户能够访问开发和测试账户中的资源。

**正确答案 / Answer: `C`**


---

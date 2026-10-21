# AWS SAA-C03 原创练习卷 · 第 01 份

> 题目 1–50 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 1

**EN** Which set of Amazon S3 features helps to prevent and recover from accidental data loss?

**中** 哪组 Amazon S3 功能有助于防止意外数据丢失并从中恢复？

- **A.** Object lifecycle and service access logging.
  - 对象生命周期和服务访问日志记录。
- **B.** Object versioning and Multi-factor authentication.
  - 对象版本控制和多因素身份验证。
- **C.** Access controls and server-side encryption.
  - 访问控制和服务器端加密。
- **D.** Website hosting and Amazon S3 policies.
  - 网站托管和 Amazon S3 政策。

**正确答案 / Answer: `B`**


---

## Question 2

**EN** What is the minimum time interval for the data that Amazon CloudWatch receives and aggregates?

**中** Amazon CloudWatch 接收和聚合数据的最小时间间隔是多少？

- **A.** One second.
  - 一秒钟。
- **B.** Five seconds.
  - 五秒钟。
- **C.** One minute.
  - 一分钟。
- **D.** Three minutes.
  - 三分钟。
- **E.** Five minutes.
  - 五分钟。

**正确答案 / Answer: `C`**


---

## Question 3

**EN** A user has launched an EC2 instance. The instance got terminated as soon as it was launched. Which of the below mentioned options is not a possible reason for this?

**中** 用户已启动 EC2 实例。该实例一启动就被终止。以下哪一个选项不是造成这种情况的可能原因？

- **A.** The user account has reached the maximum volume limit.
  - 用户帐户已达到最大音量限制。
- **B.** The AMI is missing. It is the required part.
  - AMI 丢失。这是必需的部分。
- **C.** The snapshot is corrupt.
  - 快照已损坏。
- **D.** The user account has reached the maximum EC2 instance limit.
  - 用户帐户已达到最大 EC2 实例限制。

**正确答案 / Answer: `D`**


---

## Question 4

**EN** Your website is serving on-demand training videos to your workforce. Videos are uploaded monthly in high resolution MP4 format. Your workforce is distributed globally often on the move and using company-provided tablets that require the HTTP Live Streaming (HLS) protocol to watch a video. Your company has no video transcoding expertise and it required you may need to pay for a consultant. How do you implement the most cost-efficient architecture without compromising high availability and quality of video delivery?

**中** 您的网站正在为您的员工提供点播培训视频。视频每月以高分辨率 MP4 格式上传。您的员工分布在全球各地，经常在移动中使用公司提供的平板电脑，这些平板电脑需要 HTTP 直播流 (HLS) 协议才能观看视频。您的公司没有视频转码专业知识，因此您可能需要付费聘请顾问。如何在不影响视频传输的高可用性和质量的情况下实施最具成本效益的架构？

- **A.** A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.
  - 在 EC2 上运行的视频转码管道，使用 SQS 分配任务，并使用 Auto Scaling 根据队列长度调整节点数量。用于托管视频的 EBS 卷和用于在几天后增量备份原始文件的 EBS 快照。 CloudFront 提供来自 EC2 的 HLS 转码视频。
- **B.** Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. EBS volumes to host videos and EBS snapshots to incrementally backup original files after a few days. CloudFront to serve HLS transcoded videos from EC2.
  - Elastic Transcoder 可将原始高分辨率 MP4 视频转码为 HLS。用于托管视频的 EBS 卷和用于在几天后增量备份原始文件的 EBS 快照。 CloudFront 提供来自 EC2 的 HLS 转码视频。
- **C.** Elastic Transcoder to transcode original high-resolution MP4 videos to HLS. S3 to host videos with Lifecycle Management to archive original files to Glacier after a few days. CloudFront to serve HLS transcoded videos from S3.
  - Elastic Transcoder 可将原始高分辨率 MP4 视频转码为 HLS。 S3 通过生命周期管理托管视频，以便在几天后将原始文件存档到 Glacier。 CloudFront 提供来自 S3 的 HLS 转码视频。
- **D.** A video transcoding pipeline running on EC2 using SQS to distribute tasks and Auto Scaling to adjust the number of nodes depending on the length of the queue. S3 to host videos with Lifecycle Management to archive all files to Glacier after a few days. CloudFront to serve HLS transcoded videos from Glacier.
  - 在 EC2 上运行的视频转码管道，使用 SQS 分配任务，并使用 Auto Scaling 根据队列长度调整节点数量。 S3 通过生命周期管理托管视频，以便在几天后将所有文件存档到 Glacier。 CloudFront 提供来自 Glacier 的 HLS 转码视频。

**正确答案 / Answer: `C`**


---

## Question 5

**EN** You are designing an intrusion detection prevention (IDS/IPS) solution for a customer web application in a single VPC. You are considering the options for implementing IOS IPS protection for traffic coming from the Internet. Which of the following options would you consider? (Choose 2 answers)

**中** 您正在为单个 VPC 中的客户 Web 应用程序设计入侵检测防御 (IDS/IPS) 解决方案。您正在考虑对来自 Internet 的流量实施 IOS IPS 保护的选项。您会考虑以下哪些选项？ （选择 2 个答案）

- **A.** Implement IDS/IPS agents on each Instance running in VPC.
  - 在 VPC 中运行的每个实例上实施 IDS/IPS 代理。
- **B.** Configure an instance in each subnet to switch its network interface card to promiscuous mode and analyze network traffic.
  - 配置每个子网中的一个实例，将其网络接口卡切换到混杂模式并分析网络流量。
- **C.** Implement Elastic Load Balancing with SSL listeners in front of the web applications.
  - 在 Web 应用程序前面使用 SSL 侦听器实施 Elastic Load Balancing。
- **D.** Implement a reverse proxy layer in front of web servers and configure IDS/ IPS agents on each reverse proxy server.
  - 在 Web 服务器前面实施反向代理层，并在每个反向代理服务器上配置 IDS/IPS 代理。

**正确答案 / Answer: `A, D`**


---

## Question 6

**EN** Which of the following are valid statements about Amazon S3? (Choose 2 answers)

**中** 以下哪些关于 Amazon S3 的正确陈述是？ （选择 2 个答案）

- **A.** Amazon S3 provides read-after-write consistency for any type of PUT or DELETE.
  - Amazon S3 为任何类型的 PUT 或 DELETE 提供写后读一致性。
- **B.** Consistency is not guaranteed for any type of PUT or DELETE.
  - 不保证任何类型的 PUT 或 DELETE 的一致性。
- **C.** A successful response to a PUT request only occurs when a complete object is saved.
  - 仅当保存完整的对象时，才会成功响应 PUT 请求。
- **D.** Partially saved objects are immediately readable with a GET after an overwrite PU.
  - 覆盖 PU 后，可以使用 GET 立即读取部分保存的对象。
- **E.** S3 provides eventual consistency for overwrite PUTS and DELETE.
  - S3 为覆盖 PUTS 和 DELETE 提供最终一致性。

**正确答案 / Answer: `C, E`**


---

## Question 7

**EN** How can the domain's zone apex, for example, 'myzoneapexdomain.com', be pointed towards an Elastic Load Balancer?

**中** 如何将域的区域顶点（例如“myzoneapexdomain.com”）指向 Elastic Load Balancer？

- **A.** By using an Amazon Route 53 Alias record.
  - 通过使用 Amazon Route 53 别名记录。
- **B.** By using an AAAA record.
  - 通过使用 AAAA 记录。
- **C.** By using an Amazon Route 53 CNAME record.
  - 通过使用 Amazon Route 53 CNAME 记录。
- **D.** By using an A record.
  - 通过使用 A 记录。

**正确答案 / Answer: `A`**


---

## Question 8

**EN** When should I choose Provisioned IOPS over Standard RDS storage?

**中** 我什么时候应该选择预配置 IOPS 而不是标准 RDS 存储？

- **A.** If you have batch-oriented workloads.
  - 如果您有面向批处理的工作负载。
- **B.** If you use production online transaction processing (OLTP) workloads.
  - 如果您使用生产在线事务处理 (OLTP) 工作负载。
- **C.** If you have workloads that are not sensitive to consistent performance.
  - 如果您的工作负载对一致性性能不敏感。

**正确答案 / Answer: `B`**


---

## Question 9

**EN** Your department creates regular analytics reports from your company's log files All log data is collected in Amazon S3 and processed by daily Amazon Elastic MapReduce (EMR) jobs that generate daily PDF reports and aggregated tables in CSV format for an Amazon Redshift data warehouse. Which of the following alternatives will lower costs without compromising average performance of the system or data integrity for the raw data?

**中** 您的部门根据公司的日志文件创建定期分析报告。所有日志数据都收集在 Amazon S3 中，并由每日 Amazon Elastic MapReduce (EMR) 作业进行处理，这些作业为 Amazon Redshift 数据仓库生成每日 PDF 报告和 CSV 格式的聚合表。以下哪种替代方案可以降低成本而不影响系统的平均性能或原始数据的数据完整性？

- **A.** Use reduced redundancy storage (RRS) for all data in S3. Use a combination of Spot Instances and Reserved Instances for Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.
  - 对 S3 中的所有数据使用减少冗余存储 (RRS)。对 Amazon EMR 作业使用竞价型实例和预留实例的组合。使用 Amazon Redshift 的预留实例。
- **B.** Use reduced redundancy storage (RRS) for PDF and .csv data in S3. Add Spot Instances to EMR jobs. Use Spot Instances for Amazon Redshift.
  - 对 S3 中的 PDF 和 .csv 数据使用减少冗余存储 (RRS)。将 Spot 实例添加到 EMR 作业。使用 Amazon Redshift 的 Spot 实例。
- **C.** Use reduced redundancy storage (RRS) for PDF and .csv data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.
  - 对 Amazon S3 中的 PDF 和 .csv 数据使用减少冗余存储 (RRS)。将 Spot 实例添加到 Amazon EMR 作业。使用 Amazon Redshift 的预留实例。
- **D.** Use reduced redundancy storage (RRS) for all data in Amazon S3. Add Spot Instances to Amazon EMR jobs. Use Reserved Instances for Amazon Redshift.
  - 对 Amazon S3 中的所有数据使用减少冗余存储 (RRS)。将 Spot 实例添加到 Amazon EMR 作业。使用 Amazon Redshift 的预留实例。

**正确答案 / Answer: `C`**


---

## Question 10

**EN** Because of the extensibility limitations of striped storage attached to Windows Server, Amazon RDS does not currently support increasing storage on a [...] DB Instance.

**中** 由于附加到 Windows Server 的条带存储的可扩展性限制，Amazon RDS 目前不支持增加数据库实例上的存储。

- **A.** SQL Server.
  - SQL 服务器。
- **B.** MySQL.
  - MySQL。
- **C.** Oracle.
  - 甲骨文。

**正确答案 / Answer: `A`**


---

## Question 11

**EN** In regards to IAM you can edit user properties later, but you cannot use the console to change the [...].

**中** 对于 IAM，您可以稍后编辑用户属性，但无法使用控制台更改 [...]。

- **A.** user name.
  - 用户名。
- **B.** password.
  - 密码。
- **C.** default group.
  - 默认组。

**正确答案 / Answer: `A`**


---

## Question 12

**EN** In Amazon EC2 Container Service, are other container types supported?

**中** Amazon EC2 容器服务是否支持其他容器类型？

- **A.** Yes, EC2 Container Service supports any container service you need.
  - 是的，EC2 容器服务支持您需要的任何容器服务。
- **B.** Yes, EC2 Container Service also supports Microsoft container service.
  - 是的，EC2 容器服务还支持 Microsoft 容器服务。
- **C.** No, Docker is the only container platform supported by EC2 Container Service presently.
  - 不，Docker 是目前 EC2 容器服务支持的唯一容器平台。
- **D.** Yes, EC2 Container Service supports Microsoft container service and Openstack.
  - 是的，EC2 容器服务支持 Microsoft 容器服务和 Openstack。

**正确答案 / Answer: `C`**


---

## Question 13

**EN** Content and Media Server is the latest requirement that you need to meet for a client. The client has been very specific about his requirements such as low latency, high availability, durability, and access control. Potentially there will be millions of views on this server and because of 'spiky' usage patterns, operations teams will need to provision static hardware, network, and management resources to support the maximum expected need. The Customer base will be initially low but is expected to grow and become more geographically distributed. Which of the following would be a good solution for content distribution?

**中** 内容和媒体服务器是您需要满足客户端的最新要求。客户对他的要求非常具体，例如低延迟、高可用性、耐用性和访问控制。该服务器上可能会有数百万个视图，并且由于“尖峰”使用模式，运营团队将需要配置静态硬件、网络和管理资源来支持最大的预期需求。客户群最初较低，但预计会增长，并且地理分布更加分散。以下哪项是内容分发的良好解决方案？

- **A.** Amazon S3 as both the origin server and for caching.
  - Amazon S3 既作为源服务器又用于缓存。
- **B.** AWS Storage Gateway as the origin server and Amazon EC2 for caching.
  - AWS Storage Gateway 作为源服务器，Amazon EC2 用于缓存。
- **C.** AWS CloudFront as both the origin server and for caching.
  - AWS CloudFront 既作为源服务器又用于缓存。
- **D.** Amazon S3 as the origin server and Amazon CloudFront for caching.
  - Amazon S3 作为源服务器，Amazon CloudFront 用于缓存。

**正确答案 / Answer: `D`**


---

## Question 14

**EN** Name the disk storage supported by Amazon Elastic Compute Cloud (EC2)

**中** 命名 Amazon Elastic Compute Cloud (EC2) 支持的磁盘存储

- **A.** None of these.
  - 这些都没有。
- **B.** Amazon AppStream store.
  - Amazon AppStream 商店。
- **C.** Amazon SNS store.
  - Amazon SNS 商店。
- **D.** Amazon Instance Store.
  - 亚马逊实例商店。

**正确答案 / Answer: `D`**


---

## Question 15

**EN** After an Amazon VPC instance is launched, can I change the VPC security groups it belongs to?

**中** Amazon VPC 实例启动后可以更改所属 VPC 安全组吗？

- **A.** Only if the tag 'VPC_Change_Group' is true.
  - 仅当标签“VPC_Change_Group”为 true 时。
- **B.** Yes. You can.
  - 是的。你可以。
- **C.** No. You cannot.
  - 不，你不能。
- **D.** Only if the tag 'VPC Change Group' is true.
  - 仅当标签“VPC 更改组”为 true 时。

**正确答案 / Answer: `B`**


---

## Question 16

**EN** If I want an instance to have a public IP address, which IP address should I use?

**中** 如果我希望实例拥有公有 IP 地址，我应该使用哪个 IP 地址？

- **A.** Elastic IP Address.
  - 弹性 IP 地址。
- **B.** Class B IP Address.
  - B 类 IP 地址。
- **C.** Class A IP Address.
  - A 类 IP 地址。
- **D.** Dynamic IP Address.
  - 动态 IP 地址。

**正确答案 / Answer: `A`**


---

## Question 17

**EN** Amazon RDS supports SOAP only through [...].

**中** Amazon RDS 仅通过 [...] 支持 SOAP。

- **A.** HTTP or HTTPS.
  - HTTP 或 HTTPS。
- **B.** TCP/IP.
  - TCP/IP。
- **C.** HTTP.
  - HTTP。
- **D.** HTTPS.
  - HTTPS。

**正确答案 / Answer: `D`**


---

## Question 18

**EN** Which of the following services natively encrypts data at rest within an AWS region? (Choose 2 answers)

**中** 以下哪项服务对 AWS 区域内的静态数据进行本机加密？ （选择 2 个答案）

- **A.** AWS Storage Gateway.
  - AWS Storage Gateway。
- **B.** Amazon DynamoDB.
  - Amazon DynamoDB。
- **C.** Amazon CloudFront.
  - Amazon CloudFront。
- **D.** Amazon Glacier.
  - Amazon Glacier。
- **E.** Amazon Simple Queue Service.
  - 亚马逊简单队列服务。

**正确答案 / Answer: `A, D`**


---

## Question 19

**EN** Which one of the following can't be used as an origin server with Amazon CloudFront?

**中** 以下哪一项不能用作 Amazon CloudFront 的源服务器？

- **A.** A web server running in your infrastructure.
  - 在您的基础设施中运行的 Web 服务器。
- **B.** Amazon S3.
  - Amazon S3。
- **C.** Amazon Glacier.
  - Amazon Glacier。
- **D.** A web server running on Amazon EC2 instances.
  - 在 Amazon EC2 实例上运行的 Web 服务器。

**正确答案 / Answer: `C`**


---

## Question 20

**EN** Select the most correct The device name /dev/sdal (within Amazon EC2) is [...].

**中** 选择最正确的设备名称/dev/sdal（在 Amazon EC2 内）是[...]。

- **A.** possible for EBS volumes.
  - 对于 EBS 卷来说是可能的。
- **B.** reserved for the root device.
  - 为根设备保留。
- **C.** recommended for EBS volumes.
  - 建议用于 EBS 卷。
- **D.** recommended for instance store volumes.
  - 推荐用于实例存储卷。

**正确答案 / Answer: `B`**


---

## Question 21

**EN** How can I change the security group membership for interfaces owned by other AWS, such as Elastic Load Balancing?

**中** 如何更改其他 AWS 拥有的接口（例如 Elastic Load Balancing）的安全组成员身份？

- **A.** By using the service specific console or APICLI commands.
  - 通过使用服务特定控制台或 APICLI 命令。
- **B.** None of these.
  - 这些都没有。
- **C.** Using Amazon EC2 API/CLI.
  - 使用 Amazon EC2 API/CLI。
- **D.** Using all these methods.
  - 使用所有这些方法。

**正确答案 / Answer: `A`**


---

## Question 22

**EN** You have created a Route 53 latency record set from your domain to a machine in Northern Virginia and a similar record to a machine in Sydney. When a user located in US visits your domain he will be routed to

**中** 您已创建从您的域到北弗吉尼亚州计算机的 Route 53 延迟记录集以及到悉尼计算机的类似记录。当位于美国的用户访问您的域时，他将被路由到

- **A.** Northern Virginia.
  - 北弗吉尼亚州。
- **B.** Sydney.
  - 悉尼。
- **C.** Both, Northern Virginia and Sydney.
  - 北弗吉尼亚州和悉尼。
- **D.** Depends on the Weighted Resource Record Sets.
  - 取决于加权资源记录集。

**正确答案 / Answer: `A`**


---

## Question 23

**EN** In the context of MySQL, version numbers are organized as MySQL version = X.Y.Z. What does X denote here?

**中** 在 MySQL 上下文中，版本号的组织方式为 MySQL version = X.Y.Z。这里的 X 代表什么？

- **A.** Release level.
  - 发布级别。
- **B.** Minor version.
  - 小版本。
- **C.** Version number.
  - 版本号。
- **D.** Major version.
  - 主要版本。

**正确答案 / Answer: `D`**


---

## Question 24

**EN** Which one of the below doesn't affect Amazon CloudFront billing?

**中** 以下哪一项不影响 Amazon CloudFront 计费？

- **A.** Distribution Type.
  - 分布类型。
- **B.** Data Transfer Out.
  - 数据传出。
- **C.** Dedicated IP SSL Certificates.
  - 专用 IP SSL 证书。
- **D.** Requests.
  - 请求。

**正确答案 / Answer: `A`**


---

## Question 25

**EN** Just when you thought you knew every possible storage option on AWS you hear someone mention Reduced Redundancy Storage (RRS) within Amazon S3. What is the ideal scenario to use Reduced Redundancy Storage (RRS)?

**中** 正当您以为自己了解 AWS 上所有可能的存储选项时，您听到有人提到 Amazon S3 中的减少冗余存储 (RRS)。使用减少冗余存储 (RRS) 的理想场景是什么？

- **A.** Huge volumes of data.
  - 海量数据。
- **B.** Sensitive data.
  - 敏感数据。
- **C.** Non-critical or reproducible data.
  - 非关键或可重现的数据。
- **D.** Critical data.
  - 关键数据。

**正确答案 / Answer: `C`**


---

## Question 26

**EN** Which of the following AWS CLI commands is syntactically incorrect?

**中** 以下哪项 AWS CLI 命令在语法上不正确？

- **A.** `$ aws ec2 describe-instances`.
  - `$ aws ec2 描述实例`。
- **B.** `$ aws ec2 start-instances --instance-ids i-1348636c`.
  - `$ aws ec2 start-instances --instance-ids i-1348636c`。
- **C.** `$ aws sns publish --topic-arn arn:aws:sns:us-east-1:546419318123:OperationsError -message "Script Failure"`.
  - `$ aws snspublish --topic-arn arn:aws:sns:us-east-1:546419318123:OperationsError -message“脚本失败”`。
- **D.** `$ aws sqs receive-message --queue-url https://queue.amazonaws.com/546419318123/Test`.
  - `$ aws sqs receive-message --queue-url https://queue.amazonaws.com/546419318123/Test`。

**正确答案 / Answer: `C`**


---

## Question 27

**EN** When running my DB Instance as a Multi-AZ deployment, can I use the standby for read or write operations?

**中** 当我的数据库实例作为多可用区部署运行时，我可以使用备用实例进行读取或写入操作吗？

- **A.** Yes.
  - 是的。
- **B.** Only with MSSQL based RDS.
  - 仅适用于基于 MSSQL 的 RDS。
- **C.** Only for Oracle RDS instances.
  - 仅适用于 Oracle RDS 实例。
- **D.** No.
  - 不。

**正确答案 / Answer: `D`**


---

## Question 28

**EN** In the Launch Db Instance Wizard, where can I select the backup and maintenance options?

**中** 在启动数据库实例向导中，在哪里可以选择备份和维护选项？

- **A.** Under DB INSTANCE DETAILS.
  - 在数据库实例详细信息下。
- **B.** Under REVI EW.
  - 根据 REVI EW。
- **C.** Under MANAGEMENT OPTIONS.
  - 在“管理选项”下。
- **D.** Under ENGINE SELECTION.
  - 在发动机选择下。

**正确答案 / Answer: `C`**


---

## Question 29

**EN** What is the network performance offered by the c4.8xlarge instance in Amazon EC2?

**中** Amazon EC2 中的 c4.8xlarge 实例提供的网络性能如何？

- **A.** 20 Gigabit.
  - 20 千兆位。
- **B.** 10 Gigabit.
  - 10 千兆位。
- **C.** Very High but variable.
  - 非常高但可变。
- **D.** 5 Gigabit.
  - 5 千兆位。

**正确答案 / Answer: `B`**


---

## Question 30

**EN** In Amazon EC2, if your EBS volume stays in the detaching state, you can force the detachment by clicking [...].

**中** 在 Amazon EC2 中，如果您的 EBS 卷处于分离状态，您可以通过单击 [...] 强制分离。

- **A.** Force Detach.
  - 强制分离。
- **B.** Detach Instance.
  - 分离实例。
- **C.** AttachVolume.
  - 附加卷。
- **D.** AttachInstance.
  - 附加实例。

**正确答案 / Answer: `A`**


---

## Question 31

**EN** What does Amazon DynamoDB provide?

**中** Amazon DynamoDB 提供什么？

- **A.** A predictable and scalable MySQL database.
  - 可预测且可扩展的 MySQL 数据库。
- **B.** A fast and reliable PL/SQL database cluster.
  - 快速可靠的 PL/SQL 数据库集群。
- **C.** A standalone Cassandra database, managed by Amazon Web Services.
  - 独立的 Cassandra 数据库，由 Amazon Web Services 管理。
- **D.** A fast, highly scalable managed NoSQL database service.
  - 快速、高度可扩展的托管 NoSQL 数据库服务。

**正确答案 / Answer: `D`**


---

## Question 32

**EN** Security groups act like a firewall at the instance level, whereas [...] are an additional layer of security that act at the subnet level.

**中** 安全组在实例级别充当防火墙的角色，而 [...] 是在子网级别发挥作用的附加安全层。

- **A.** DB Security Groups.
  - 数据库安全组。
- **B.** VPC Security Groups.
  - VPC 安全组。
- **C.** network ACLs.
  - 网络 ACL。

**正确答案 / Answer: `C`**


---

## Question 33

**EN** You have been asked to tighten up the password policies in your organization after a serious security breach, so you need to consider every possible security measure. Which of the following is not an account password policy for IAM Users that can be set?

**中** 在发生严重的安全漏洞后，您被要求加强组织中的密码策略，因此您需要考虑所有可能的安全措施。以下哪一项不是 IAM 用户可以设置的账户密码策略？

- **A.** Force IAM users to contact an account administrator when the user has allowed his or her password to expire.
  - 当用户允许其密码过期时，强制 IAM 用户联系账户管理员。
- **B.** A minimum password length.
  - 最小密码长度。
- **C.** Force IAM users to contact an account administrator when the user has entered his password incorrectly.
  - 当用户输入错误的密码时，强制 IAM 用户联系账户管理员。
- **D.** Prevent IAM users from reusing previous passwords.
  - 防止 IAM 用户重复使用以前的密码。

**正确答案 / Answer: `C`**


---

## Question 34

**EN** Multi-AZ deployment [...] supported for Microsoft SQL Server DB Instances.

**中** Microsoft SQL Server 数据库实例支持多可用区部署。

- **A.** is not currently.
  - 目前还没有。
- **B.** is as of 2013.
  - 截至 2013 年。
- **C.** is planned to be in 2014.
  - 计划于 2014 年进行。
- **D.** will never be.
  - 永远不会。

**正确答案 / Answer: `A`**


---

## Question 35

**EN** What does Amazon Elastic Beanstalk provide?

**中** Amazon Elastic Beanstalk 提供什么？

- **A.** A scalable storage appliance on top of Amazon Web Services.
  - Amazon Web Services 之上的可扩展存储设备。
- **B.** An application container on top of Amazon Web Services.
  - Amazon Web Services 之上的应用程序容器。
- **C.** A service by this name doesn't exist.
  - 不存在具有此名称的服务。
- **D.** A scalable cluster of EC2 instances.
  - 可扩展的 EC2 实例集群。

**正确答案 / Answer: `B`**


---

## Question 36

**EN** You need to quickly set up an email-sending service because a client needs to start using it in the next hour. Amazon Simple Email Service (Amazon SES) seems to be the logical choice but there are several options available to set it up. Which of the following options to set up SES would best meet the needs of the client?

**中** 您需要快速设置电子邮件发送服务，因为客户需要在下一小时内开始使用它。 Amazon Simple Email Service (Amazon SES) 似乎是合理的选择，但有多个选项可用于设置它。以下哪种设置 SES 的选项最能满足客户的需求？

- **A.** Amazon SES console.
  - Amazon SES 控制台。
- **B.** AWS CloudFormation.
  - AWS CloudFormation。
- **C.** SMTP Interface.
  - SMTP 接口。
- **D.** AWS Elastic Beanstalk.
  - AWS Elastic Beanstalk。

**正确答案 / Answer: `A`**


---

## Question 37

**EN** A user is observing the EC2 CPU utilization metric on CloudWatch. The user has observed some interesting patterns while filtering over the 1 week period for a particular hour. The user wants to zoom that data point to a more granular period. How can the user do that easily with CloudWatch?

**中** 用户正在 CloudWatch 上观察 EC2 CPU 利用率指标。用户在过滤 1 周期间的特定小时时观察到了一些有趣的模式。用户希望将该数据点缩放到更细粒度的周期。用户如何使用 CloudWatch 轻松做到这一点？

- **A.** The user can zoom a particular period by selecting that period with the mouse and then releasing the mouse.
  - 用户可以通过用鼠标选择特定时间段然后释放鼠标来缩放该时间段。
- **B.** The user can zoom a particular period by specifying the aggregation data for that period.
  - 用户可以通过指定特定时间段的聚合数据来缩放该时间段。
- **C.** The user can zoom a particular period by double clicking on that period with the mouse.
  - 用户可以通过用鼠标双击特定时间段来缩放该时间段。
- **D.** The user can zoom a particular period by specifying the period in the Time Range.
  - 用户可以通过在时间范围中指定时间段来缩放特定时间段。

**正确答案 / Answer: `A`**


---

## Question 38

**EN** A company is running a batch analysis every hour on their main transactional DB, running on an RDS MySQL instance to populate their central Data Warehouse running on Redshift. During the execution of the batch their transactional applications are very slow. When the batch completes they need to update the top management dashboard with the new data. The dashboard is produced by another system running on-premises that is currently started when a manually-sent email notifies that an update is required. The on-premises system cannot be modified because it is managed by another team. How would you optimize this scenario to solve performance issues and automate the process as much as possible?

**中** 一家公司每小时在其主事务数据库上运行一次批量分析，该数据库在 RDS MySQL 实例上运行，以填充在 Redshift 上运行的中央数据仓库。在批处理执行期间，它们的事务应用程序非常慢。批次完成后，他们需要使用新数据更新高层管理仪表板。该仪表板由本地运行的另一个系统生成，该系统当前在手动发送的电子邮件通知需要更新时启动。本地系统无法修改，因为它由另一个团队管理。您将如何优化此场景以解决性能问题并尽可能自动化流程？

- **A.** Replace RDS with Redshift for the batch analysis and SNS to notify the on-premises system to update the dashboard.
  - 将 RDS 替换为 Redshift 进行批量分析，并使用 SNS 通知本地系统更新仪表板。
- **B.** Replace RDS with Redshift for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.
  - 将 RDS 替换为 Redshift 以进行批量分析，将 SQS 替换为向本地系统发送消息以更新仪表板。
- **C.** Create an RDS Read Replica for the batch analysis and SNS to notify the on-premises system to update the dashboard.
  - 创建 RDS 只读副本用于批量分析和 SNS，以通知本地系统更新仪表板。
- **D.** Create an RDS Read Replica for the batch analysis and SQS to send a message to the on-premises system to update the dashboard.
  - 创建用于批量分析的 RDS 只读副本和 SQS，以将消息发送到本地系统以更新仪表板。

**正确答案 / Answer: `A`**


---

## Question 39

**EN** You are configuring a new VPC for one of your clients for a cloud migration project, and only a public VPN will be in place. After you created your VPC, you created a new subnet, a new internet gateway, and attached your internet gateway to your VPC. When you launched your first instance into your VPC, you realized that you aren't able to connect to the instance, even if it is configured with an elastic IP. What should be done to access the instance?

**中** 您正在为云迁移项目的一个客户配置新的 VPC，并且仅使用公共 VPN。创建 VPC 后，您创建了一个新的子网、一个新的互联网网关，并将互联网网关附加到您的 VPC。当您在 VPC 中启动第一个实例时，您意识到您无法连接到该实例，即使它配置了弹性 IP。访问实例应该做什么？

- **A.** A route should be created as 0.0.0.0/0 and your internet gateway as target.
  - 应将路由创建为 0.0.0.0/0 并将您的互联网网关作为目标。
- **B.** Attach another ENI to the instance and connect via new ENI.
  - 将另一个 ENI 连接到实例并通过新 ENI 进行连接。
- **C.** A NAT instance should be created and all traffic should be forwarded to NAT instance.
  - 应创建 NAT 实例，并将所有流量转发到 NAT 实例。
- **D.** A NACL should be created that allows all outbound traffic.
  - 应创建允许所有出站流量的 NACL。

**正确答案 / Answer: `A`**


---

## Question 40

**EN** You have been asked to build a database warehouse using Amazon Redshift. You know a little about it, including that it is a SQL data warehouse solution, and uses industry standard ODBC and JDBC connections and PostgreSQL drivers. However, you are not sure about what sort of storage it uses for database tables. What sort of storage does Amazon Redshift use for database tables?

**中** 您被要求使用 Amazon Redshift 构建数据库仓库。您对它有所了解，包括它是一个 SQL 数据仓库解决方案，并使用行业标准 ODBC 和 JDBC 连接以及 PostgreSQL 驱动程序。但是，您不确定它对数据库表使用什么类型的存储。 Amazon Redshift 数据库表使用什么类型的存储？

- **A.** InnoDB Tables.
  - InnoDB 表。
- **B.** NDB data storage.
  - NDB 数据存储。
- **C.** Columnar data storage.
  - 列式数据存储。
- **D.** NDB CLUSTER Storage.
  - NDB 集群存储。

**正确答案 / Answer: `C`**


---

## Question 41

**EN** A user has attached 1 EBS volume to a VPC instance. The user wants to achieve the best fault tolerance of data possible. Which of the below mentioned options can help achieve fault tolerance?

**中** 用户已将 1 个 EBS 卷附加到 VPC 实例。用户希望尽可能实现最佳的数据容错能力。下面提到的哪些选项可以帮助实现容错？

- **A.** Attach one more volume with RAID 1 configuration.
  - 再附加一个具有 RAID 1 配置的卷。
- **B.** Attach one more volume with RAID 0 configuration.
  - 再附加一个具有 RAID 0 配置的卷。
- **C.** Connect multiple volumes and stripe them with RAID.
  - 连接多个卷并使用 RAID 对它们进行条带化。
- **D.** Use the EBS volume as a root device.
  - 使用 EBS 卷作为根设备。

**正确答案 / Answer: `A`**


---

## Question 42

**EN** Which features can be used to restrict access to data in S3? (Choose 2 answers)

**中** 哪些功能可用于限制对 S3 中数据的访问？ （选择 2 个答案）

- **A.** Set an S3 ACL on the bucket or the object.
  - 在存储桶或对象上设置 S3 ACL。
- **B.** Create a CloudFront distribution for the bucket.
  - 为存储桶创建 CloudFront 分配。
- **C.** Set an S3 bucket policy.
  - 设置 S3 存储桶策略。
- **D.** Enable IAM Identity Federation.
  - 启用 IAM 联合身份验证。
- **E.** Use S3 Virtual Hosting.
  - 使用 S3 虚拟主机。

**正确答案 / Answer: `A, C`**


---

## Question 43

**EN** You are in the process of creating a Route 53 DNS failover to direct traffic to two EC2 zones. Obviously, if one fails, you would like Route 53 to direct traffic to the other region. Each region has an ELB with some instances being distributed. What is the best way for you to configure the Route 53 health check?

**中** 您正在创建 Route 53 DNS 故障转移以将流量引导至两个 EC2 区域。显然，如果其中一个区域出现故障，您希望 Route 53 将流量引导至另一个区域。每个 Region 都有一个 ELB，其中分布着一些实例。配置 Route 53 运行状况检查的最佳方法是什么？

- **A.** Route 53 doesn't support ELB with an internal health check. You need to create your own Route 53 health check of the ELB.
  - Route 53 不支持具有内部运行状况检查的 ELB。您需要创建自己的 ELB Route 53 运行状况检查。
- **B.** Route 53 natively supports ELB with an internal health check. Turn 'Evaluate target health' off and 'Associate with Health Check' on and R53 will use the ELB's internal health check.
  - Route 53 本身支持具有内部运行状况检查的 ELB。关闭“评估目标运行状况”并打开“与运行状况检查关联”，R53 将使用 ELB 的内部运行状况检查。
- **C.** Route 53 doesn't support ELB with an internal health check. You need to associate your resource record set for the ELB with your own health check.
  - Route 53 不支持具有内部运行状况检查的 ELB。您需要将 ELB 的资源记录集与您自己的健康检查相关联。
- **D.** Route 53 natively supports ELB with an internal health check. Turn 'Evaluate target health' on and 'Associate with Health Check' off and R53 will use the ELB's internal health check.
  - Route 53 本身支持具有内部运行状况检查的 ELB。打开“评估目标运行状况”并关闭“与运行状况检查关联”，R53 将使用 ELB 的内部运行状况检查。

**正确答案 / Answer: `D`**


---

## Question 44

**EN** For each DB Instance class, what is the maximum size of associated storage capacity?

**中** 对于每个数据库实例类别，关联的存储容量的最大大小是多少？

- **A.** 5GB.
  - 5GB。
- **B.** 1TB.
  - 1TB。
- **C.** 2TB.
  - 2TB。
- **D.** 500GB.
  - 500GB。

**正确答案 / Answer: `B`**


---

## Question 45

**EN** A user is planning a highly available application deployment with EC2. Which of the below mentioned options will not help to achieve HA?

**中** 用户正在规划使用 EC2 进行高度可用的应用程序部署。以下哪个选项无助于实现 HA？

- **A.** Elastic IP address.
  - 弹性 IP 地址。
- **B.** PIOPS.
  - PIOPS。
- **C.** AMI.
  - AMI。
- **D.** Availability Zones.
  - 可用区。

**正确答案 / Answer: `B`**


---

## Question 46

**EN** What does specifying the mapping /dev/sdc=none when launching an instance do?

**中** 启动实例时指定映射 /dev/sdc=none 有何作用？

- **A.** Prevents /dev/sdc from creating the instance.
  - 阻止 /dev/sdc 创建实例。
- **B.** Prevents /dev/sdc from deleting the instance.
  - 防止 /dev/sdc 删除实例。
- **C.** Set the value of /dev/sdc to 'zero'.
  - 将 /dev/sdc 的值设置为“零”。
- **D.** Prevents /dev/sdc from attaching to the instance.
  - 阻止 /dev/sdc 连接到实例。

**正确答案 / Answer: `D`**


---

## Question 47

**EN** Which of the following statements is true of tagging an Amazon EC2 resource?

**中** 关于标记 Amazon EC2 资源，以下哪项陈述是正确的？

- **A.** You don't need to specify the resource identifier while terminating a resource.
  - 终止资源时不需要指定资源标识符。
- **B.** You can terminate, stop, or delete a resource based solely on its tags.
  - 您可以仅根据资源的标签来终止、停止或删除资源。
- **C.** You can't terminate, stop, or delete a resource based solely on its tags.
  - 您不能仅根据资源的标签来终止、停止或删除资源。
- **D.** You don't need to specify the resource identifier while stopping a resource.
  - 停止资源时无需指定资源标识符。

**正确答案 / Answer: `C`**


---

## Question 48

**EN** You are deploying an application to collect votes for a very popular television show. Millions of users will submit votes using mobile devices. The votes must be collected into a durable, scalable, and highly available data store for real-time public tabulation. Which service should you use?

**中** 您正在部署一个应用程序来为一个非常受欢迎的电视节目收集选票。数百万用户将使用移动设备提交投票。必须将选票收集到持久、可扩展且高度可用的数据存储中，以进行实时公共统计。您应该使用哪种服务？

- **A.** Amazon DynamoDB.
  - Amazon DynamoDB。
- **B.** Amazon Redshift.
  - Amazon Redshift。
- **C.** Amazon Kinesis.
  - Amazon Kinesis。
- **D.** Amazon Simple Queue Service.
  - 亚马逊简单队列服务。

**正确答案 / Answer: `A`**


---

## Question 49

**EN** Are Reserved Instances available for Multi-AZ Deployments?

**中** 预留实例是否可用于多可用区部署？

- **A.** Only for Cluster Compute instances.
  - 仅适用于集群计算实例。
- **B.** Yes for all instance types.
  - 对于所有实例类型都是如此。
- **C.** Only for M3 instance types.
  - 仅适用于 M3 实例类型。
- **D.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 50

**EN** A [...] for a VPC is a collection of subnets (typically private) that you may want to designate for your backend RDS DB Instances.

**中** VPC 的 [...] 是您可能想要为后端 RDS 数据库实例指定的子网（通常是私有）的集合。

- **A.** DB Subnet Set.
  - DB 子网集。
- **B.** RDS Subnet Group.
  - RDS 子网组。
- **C.** DB Subnet Group.
  - DB 子网组。
- **D.** DB Subnet Collection.
  - DB 子网集合。

**正确答案 / Answer: `C`**


---

# AWS SAA-C03 原创练习卷 · 第 05 份

> 题目 201–250 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 201

**EN** Which Amazon Elastic Compute Cloud feature can you query from within the instance to access instance properties?

**中** 您可以从实例内查询哪个 Amazon Elastic Compute Cloud 功能来访问实例属性？

- **A.** Instance user data.
  - 实例用户数据。
- **B.** Resource tags.
  - 资源标签。
- **C.** Instance metadata.
  - 实例元数据。
- **D.** Amazon Machine Image.
  - 亚马逊机器映像。

**正确答案 / Answer: `C`**


---

## Question 202

**EN** Making your snapshot public shares all snapshot data with everyone. Can the snapshots with AWS Market place product codes be made public?

**中** 公开您的快照，与所有人共享所有快照数据。带有 AWS Marketplace 产品代码的快照可以公开吗？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。

**正确答案 / Answer: `A`**


---

## Question 203

**EN** Which service enables AWS customers to manage users and permissions in AWS?

**中** 哪种服务使 AWS 客户能够管理 AWS 中的用户和权限？

- **A.** AWS Access Control Service (ACS).
  - AWS 访问控制服务 (ACS)。
- **B.** AWS Identity and Access Management (IAM).
  - AWS 身份和访问管理 (IAM)。

**正确答案 / Answer: `B`**


---

## Question 204

**EN** You have launched an EC2 instance with four (4) 500 GB EBS Provisioned IOPS volumes attached. The EC2 instance is EBS-Optimized and supports 500 Mbps throughput between EC2 and EBS. The four EBS volumes are configured as a single RAID 0 device, and each Provisioned IOPS volume is provisioned with 4,000IOPS (4,000 16KB reads or writes), for a total of 16,000 random IOPS on the instance. The EC2 instance initially delivers the expected 16,000 IOPS random read and write performance. Sometime later, in order to increase the total random I/O performance of the instance, you add an additional two 500 GB EBS Provisioned IOPS volumes to the RAID. Each volume is provisioned to 4,000 IOPs like the original four, for a total of 24,000 IOPS on the EC2 instance. Monitoring shows that the EC2 instance CPU utilization increased from 50% to 70%, but the total random IOPS measured at the instance level does not increase at all. What is the problem and a valid solution?

**中** 您已启动一个附加了四 (4) 个 500 GB EBS 预配置 IOPS 卷的 EC2 实例。 EC2 实例经过 EBS 优化，支持 EC2 和 EBS 之间的 500 Mbps 吞吐量。四个 EBS 卷配置为单个 RAID 0 设备，每个预置 IOPS 卷均预配 4,000 IOPS（4,000 次 16KB 读取或写入），实例上的随机 IOPS 总数为 16,000。 EC2 实例最初提供预期的 16,000 IOPS 随机读写性能。一段时间后，为了提高实例的总随机 I/O 性能，您可以向 RAID 添加两个额外的 500 GB EBS 预配置 IOPS 卷。每个卷都像原来的四个卷一样配置为 4,000 IOPS，在 EC2 实例上总共提供 24,000 IOPS。监控显示，EC2 实例 CPU 利用率从 50%增加到 70%，但在实例级别测量的总随机 IOPS 根本没有增加。问题是什么以及有效的解决方案？

- **A.** Larger storage volumes support higher Provisioned IOPS rates; increase the provisioned volume storage of each of the 6 EBS volumes to 1TB.
  - 更大的存储卷支持更高的预配置 IOPS 速率；将 6 个 EBS 卷中每个卷的预配置卷存储增加到 1TB。
- **B.** The EBS-Optimized throughput limits the total IOPS that can be utilized; use an EBS Optimized instance that provides larger throughput. Mo
  - EBS-Optimized 吞吐量限制了可以利用的总 IOPS；使用提供更大吞吐量的 EBS 优化实例。莫
- **C.** Small block sizes cause performance degradation, limiting the I/O throughput; configure the instance device driver and filesystem to use 64KB blocks to increase throughput.
  - 小块大小会导致性能下降，限制 I/O 吞吐量；配置实例设备驱动程序和文件系统以使用 64KB 块来提高吞吐量。
- **D.** The standard EBS Instance root volume limits the total IOPS rate; change the instance root volume to also be a 500GB 4,000 Provisioned IOPS volume.
  - 标准 EBS 实例根卷限制总 IOPS 速率；将实例根卷更改为 500GB 4,000 预配置 IOPS 卷。
- **E.** RAID 0 only scales linearly to about 4 devices; use RAID 0 with 4 EBS Provisioned IOPS volumes, but increase each Provisioned IOPS EBS volume to 6,000 IOPS.
  - RAID 0 只能线性扩展至大约 4 个设备；将 RAID 0 与 4 个 EBS 预配置 IOPS 卷结合使用，但将每个预配置 IOPS EBS 卷增加到 6,000 IOPS。

**正确答案 / Answer: `B`**


---

## Question 205

**EN** A user has configured a website and launched it using the Apache web server on port 80. The user is using ELB with the EC2 instances for Load Balancing. What should the user do to ensure that the EC2 instances accept requests only from ELB?

**中** 用户已配置网站并使用 Apache Web 服务器在端口 80 上启动该网站。用户使用 ELB 与 EC2 实例进行负载平衡。用户应该如何确保 EC2 实例仅接受来自 ELB 的请求？

- **A.** Configure the security group of EC2, which allows access to the ELB source security group.
  - 配置 EC2 的安全组，允许访问 ELB 源安全组。
- **B.** Configure the EC2 instance so that it only listens on the ELB port.
  - 配置 EC2 实例，使其仅侦听 ELB 端口。
- **C.** Open the port for an ELB static IP in the EC2 security group.
  - 在 EC2 安全组中打开 ELB 静态 IP 的端口。
- **D.** Configure the security group of EC2, which allows access only to the ELB listener.
  - 配置 EC2 的安全组，仅允许 ELB 监听访问。

**正确答案 / Answer: `A`**


---

## Question 206

**EN** You're trying to delete an SSL certificate from the IAM certificate store, and you're getting the message 'Certificate: <certificate< span=''>-id> is being used by CloudFront.' Which of the following statements is probably the reason why you are getting this error?

**中** 您尝试从 IAM 证书存储中删除 SSL 证书，并且收到消息“证书：CloudFront 正在使用 <certificate<span=''>-id>”。以下哪项陈述可能是您收到此错误的原因？

- **A.** Before you can delete an SSL certificate, you need to either rotate SSL certificates or revert from using a custom SSL certificate to using the default CloudFront certificate.
  - 在删除 SSL 证书之前，您需要轮换 SSL 证书或从使用自定义 SSL 证书恢复为使用默认 CloudFront 证书。
- **B.** You can't delete SSL certificates. You need to request it from AWS.
  - 您无法删除 SSL 证书。您需要向 AWS 请求。
- **C.** Before you can delete an SSL certificate, you need to set up the appropriate access level in IAM. Before you can delete an SSL certificate you need to set up https on your server.
  - 在删除 SSL 证书之前，您需要在 IAM 中设置适当的访问级别。在删除 SSL 证书之前，您需要在服务器上设置 https。
- **D.** Before you can delete an SSL certificate you need to set up https on your server.
  - 在删除 SSL 证书之前，您需要在服务器上设置 https。

**正确答案 / Answer: `A`**


---

## Question 207

**EN** A government client needs you to set up secure cryptographic key storage for some of their extremely confidential data. You decide that the AWS CloudHSM is the best service for this. However, there seem to be a few pre-requisites before this can happen, one of those being a security group that has certain ports open. Which of the following is correct in regards to those security groups?

**中** 政府客户需要您为其一些极其机密的数据设置安全的加密密钥存储。您认为 AWS CloudHSM 是最适合此目的的服务。然而，在此之前似乎有一些先决条件，其中之一是开放某些端口的安全组。关于这些安全组，以下哪一项是正确的？

- **A.** A security group that has port 22 (for SSH) or port 3389 (for RDP) open to your network.
  - 向您的网络开放端口 22（用于 SSH）或端口 3389（用于 RDP）的安全组。
- **B.** A security group that has no ports open to your network.
  - 没有向您的网络开放端口的安全组。
- **C.** A security group that has only port 3389 (for RDP) open to your network.
  - 仅向您的网络开放端口 3389（用于 RDP）的安全组。
- **D.** A security group that has only port 22 (for SSH) open to your network.
  - 仅向您的网络开放端口 22（用于 SSH）的安全组。

**正确答案 / Answer: `A`**


---

## Question 208

**EN** A web company is looking to implement an intrusion detection and prevention system into their deployed VPC. This platform should have the ability to scale to thousands of instances running inside of the VPC. How should they architect their solution to achieve these goals?

**中** 一家网络公司希望在其部署的 VPC 中实施入侵检测和防御系统。该平台应该能够扩展到在 VPC 内运行的数千个实例。他们应该如何构建解决方案来实现这些目标？

- **A.** Configure an instance with monitoring software and the elastic network interface (ENI) set to promiscuous mode packet sniffing to see an traffic across the VPC. Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IP.
  - 使用监控软件配置实例，并将弹性网络接口 (ENI) 设置为混杂模式数据包嗅探，以查看 VPC 上的流量。使用基于主机的“路由”命令配置在 VPC 中运行的服务器，将所有流量通过平台发送到可扩展的虚拟化 IDS/IP。
- **B.** Create a second VPC and route all traffic from the primary application VPC through the second VPC where the scalable virtualized IDS/IPS platform resides.
  - 创建第二个 VPC，并将来自主应用程序 VPC 的所有流量路由到可扩展虚拟化 IDS/IPS 平台所在的第二个 VPC。
- **C.** Configure servers running in the VPC using the host-based 'route' commands to send all traffic through the platform to a scalable virtualized IDS/IP.
  - 使用基于主机的“路由”命令配置在 VPC 中运行的服务器，将所有流量通过平台发送到可扩展的虚拟化 IDS/IP。
- **D.** Configure each host with an agent that collects all network traffic and sends that traffic to the IDS/IPS platform for inspection.
  - 为每台主机配置一个代理，该代理收集所有网络流量并将该流量发送到 IDS/IPS 平台进行检查。

**正确答案 / Answer: `C`**


---

## Question 209

**EN** You run an ad-supported photo sharing website using Amazon S3 to serve photos to visitors of your site. At some point you find out that other sites have been linking to the photos on your site, causing loss to your business. What is an effective method to mitigate this?

**中** 您使用 Amazon S3 运行一个支持广告的照片共享网站，向您网站的访问者提供照片。有时您会发现其他网站已链接到您网站上的照片，从而给您的业务造成损失。有什么有效的方法可以缓解这种情况呢？

- **A.** Remove public read access and use signed URLs with expiry dates.
  - 删除公共读取访问权限并使用带有到期日期的签名 URL。
- **B.** Use CloudFront distributions for static content.
  - 将 CloudFront 分配用于静态内容。
- **C.** Block the IPs of the offending websites in Security Groups.
  - 在安全组中阻止违规网站的 IP。
- **D.** Store photos on an EBS volume of the web server.
  - 将照片存储在 Web 服务器的 EBS 卷上。

**正确答案 / Answer: `A`**


---

## Question 210

**EN** Which of the following is not a true statement relating to the performance of your EBS volumes?

**中** 以下哪一项不是与您的 EBS 卷性能相关的真实陈述？

- **A.** Frequent snapshots provide a higher level of data durability and they will not degrade the performance of your application while the snapshot is in progress.
  - 频繁的快照可提供更高级别的数据持久性，并且在快照过程中不会降低应用程序的性能。
- **B.** General Purpose (SSD) and Provisioned IOPS (SSD) volumes have a throughput limit of 128 MB/s per volume.
  - 通用 (SSD) 和预配置 IOPS (SSD) 卷的吞吐量限制为每卷 128 MB/秒。
- **C.** There is a relationship between the maximum performance of your EBS volumes, the amount of I/O you are driving to them, and the amount of time it takes for each transaction to complete.
  - EBS 卷的最大性能、驱动到它们的 I/O 量以及完成每个事务所需的时间之间存在关系。
- **D.** There is a 5 to 50 percent reduction in IOPS when you first access each block of data on a newly created or restored EBS volume.
  - 当您首次访问新创建或恢复的 EBS 卷上的每个数据块时，IOPS 会降低 5% 到 50%。

**正确答案 / Answer: `A`**


---

## Question 211

**EN** Changes to the backup window take effect [...].

**中** 对备份窗口的更改生效[...]。

- **A.** from the next billing cycle.
  - 从下一个计费周期开始。
- **B.** after 30 minutes.
  - 30 分钟后。
- **C.** immediately.
  - 立即地。
- **D.** after 24 hours.
  - 24 小时后。

**正确答案 / Answer: `C`**


---

## Question 212

**EN** Location of Instances are [...].

**中** 实例的位置是[...]。

- **A.** regional.
  - 区域性的。
- **B.** based on Availability Zone.
  - 基于可用区。
- **C.** global.
  - 全球的。

**正确答案 / Answer: `B`**


---

## Question 213

**EN** You log in to IAM on your AWS console and notice the following message. 'Delete your root access keys.' Why do you think IAM is requesting this?

**中** 您在 AWS 控制台上登录 IAM 并注意到以下消息。 “删除您的根访问密钥。”您认为 IAM 为何提出此要求？

- **A.** Because the root access keys will expire as soon as you log out.
  - 因为一旦您注销，根访问密钥就会过期。
- **B.** Because the root access keys expire after 1 week.
  - 因为根访问密钥会在 1 周后过期。
- **C.** Because the root access keys are the same for all users.
  - 因为根访问密钥对于所有用户都是相同的。
- **D.** Because they provide unrestricted access to your AWS resources.
  - 因为它们可以不受限制地访问您的 AWS 资源。

**正确答案 / Answer: `D`**


---

## Question 214

**EN** What is the minimum charge for the data transferred between Amazon RDS and Amazon EC2 Instances in the same Availability Zone?

**中** 同一可用区的 Amazon RDS 和 Amazon EC2 实例之间传输数据的最低费用是多少？

- **A.** USD 0.10 per GB.
  - 每 GB 0.10 美元。
- **B.** No charge. It is free.
  - 不收费。它是免费的。
- **C.** USD 0.02 per GB
  - 每 GB 0.02 美元
- **D.** USD 0.01 per GB.
  - 每 GB 0.01 美元。

**正确答案 / Answer: `B`**


---

## Question 215

**EN** In DynamoDB, could you use IAM to grant access to Amazon DynamoDB resources and API actions?

**中** 在 DynamoDB 中，您可以使用 IAM 授予对 Amazon DynamoDB 资源和 API 操作的访问权限吗？

- **A.** In DynamoDB there is no need to grant access.
  - 在 DynamoDB 中，无需授予访问权限。
- **B.** Depended to the type of access.
  - 取决于访问类型。
- **C.** Yes.
  - 是的。
- **D.** No.
  - 不。

**正确答案 / Answer: `C`**


---

## Question 216

**EN** The common use cases for DynamoDB Fine-Grained Access Control (FGAC) are cases in which the end user wants [...].

**中** DynamoDB 细粒度访问控制 (FGAC) 的常见用例是最终用户想要[...]的情况。

- **A.** to change the hash keys of the table directly.
  - 直接更改表的哈希键。
- **B.** to check if an IAM policy requires the hash keys of the tables directly.
  - 检查 IAM 策略是否直接需要表的哈希键。
- **C.** to read or modify any code commit key of the table directly, without a middle-tier service.
  - 直接读取或修改表的任何代码提交键，无需中间层服务。
- **D.** to read or modify the table directly, without a middle-tier service.
  - 直接读取或修改表，无需中间层服务。

**正确答案 / Answer: `D`**


---

## Question 217

**EN** What are the initial settings of an user created security group?

**中** 用户创建的安全组的初始设置是什么？

- **A.** Allow all inbound traffic and Allow no outbound traffic.
  - 允许所有入站流量，不允许出站流量。
- **B.** Al low no inbound traffic and Al low no outbound traffic.
  - 不允许任何入站流量，并且不允许任何出站流量。
- **C.** Al low no inbound traffic and Al low all outbound traffic.
  - 不允许任何入站流量，并且允许所有出站流量。
- **D.** Allow all inbound traffic and Allow all outbound traffic.
  - 允许所有入站流量和允许所有出站流量。

**正确答案 / Answer: `C`**


---

## Question 218

**EN** Which one of the following answers is not a possible state of Amazon CloudWatch Alarm?

**中** 以下哪一项答案不是 Amazon CloudWatch 报警器的可能状态？

- **A.** INSUFFICIENT_DATA.
  - 数据不足。
- **B.** ALARM.
  - 警报。
- **C.** OK.
  - 好的。
- **D.** STATUS_CHECK_FAILED.
  - 状态检查失败。

**正确答案 / Answer: `D`**


---

## Question 219

**EN** [...] let you categorize your EC2 resources in different ways, for example, by purpose, owner, or environment.

**中** [...] 允许您以不同的方式对 EC2 资源进行分类，例如按用途、所有者或环境。

- **A.** wildcards.
  - 通配符。
- **B.** pointers.
  - 指针。
- **C.** tags.
  - 标签。
- **D.** special filters.
  - 特殊过滤器。

**正确答案 / Answer: `C`**


---

## Question 220

**EN** Which of the below mentioned options is not available when an instance is launched by Auto Scaling with EC2 Classic?

**中** 当使用 EC2 Classic 通过 Auto Scaling 启动实例时，以下哪个选项不可用？

- **A.** Public IP.
  - 公共 IP。
- **B.** Elastic IP.
  - 弹性 IP。
- **C.** Private DNS.
  - 私有 DNS。
- **D.** Private IP.
  - 私有 IP。

**正确答案 / Answer: `B`**


---

## Question 221

**EN** You have a lot of data stored in the AWS Storage Gateway and your manager has come to you asking about how the billing is calculated, specifically the Virtual Tape Shelf usage. What would be a correct response to this?

**中** 您在 AWS Storage Gateway 中存储了大量数据，您的经理来找您询问如何计算计费，特别是虚拟磁带架的使用情况。对此，正确的反应是什么？

- **A.** You are billed for the virtual tape data you store in Amazon Glacier and are billed for the size of the virtual tape.
  - 您需要为 Amazon Glacier 中存储的虚拟磁带数据付费，并根据虚拟磁带的大小付费。
- **B.** You are billed for the virtual tape data you store in Amazon Glacier and billed for the portion of virtual tape capacity that you use, not for the size of the virtual tape.
  - 您需要为存储在 Amazon Glacier 中的虚拟磁带数据付费，并根据您使用的虚拟磁带容量部分付费，而不是根据虚拟磁带的大小付费。
- **C.** You are billed for the virtual tape data you store in Amazon S3 and billed for the portion of virtual tape capacity that you use, not for the size of the virtual tape.
  - 您需要为存储在 Amazon S3 中的虚拟磁带数据付费，并根据您使用的虚拟磁带容量部分付费，而不是根据虚拟磁带的大小付费。
- **D.** You are billed for the virtual tape data you store in Amazon S3 and are billed for the size of the virtual tape.
  - 您需要为存储在 Amazon S3 中的虚拟磁带数据付费，并根据虚拟磁带的大小付费。

**正确答案 / Answer: `B`**


---

## Question 222

**EN** True or False: The new DB Instance that is created when you promote a Read Replica retains the backup window period.

**中** 对或错：升级只读副本时创建的新数据库实例会保留备份窗口期。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `A`**


---

## Question 223

**EN** [...] is a fast, flexible, fully managed push messaging service.

**中** [...] 是一种快速、灵活、完全托管的推送消息服务。

- **A.** Amazon SNS.
  - Amazon SNS。
- **B.** Amazon SES.
  - Amazon SES。
- **C.** Amazon SQS.
  - Amazon SQS。
- **D.** Amazon FPS.
  - 亚马逊第一人称射击游戏。

**正确答案 / Answer: `A`**


---

## Question 224

**EN** You are tasked with setting up a Linux bastion host for access to Amazon EC2 instances running in your VPC. Only clients connecting from the corporate external public IP address 72.34.51.100 should have SSH access to the host. Which option will meet the customer requirement?

**中** 您的任务是设置 Linux 堡垒主机以访问 VPC 中运行的 Amazon EC2 实例。只有从公司外部公共 IP 地址 72.34.51.100 连接的客户端才应具有对主机的 SSH 访问权限。哪个选项可以满足客户的要求？

- **A.** Security Group Inbound Rule: Protocol – TCP. Port Range – 22, Source 72.34.51.100/32
  - 安全组入站规则：协议-TCP。端口范围 – 22，源 72.34.51.100/32
- **B.** Port Range- 22, Source 72.34.51. 100/32.
  - 端口范围 - 22，源 72.34.51。 100/32。
- **C.** Security Group Inbound Rule: Protocol – UDP, Port Range- 22, Source 72.34.51.100/32.
  - 安全组入站规则：协议 - UDP，端口范围 - 22，源 72.34.51.100/32。
- **D.** Network ACL Inbound Rule: Protocol – UDP, Port Range- 22, Source 72.34.51.100/32.
  - 网络 ACL 入站规则：协议 - UDP，端口范围 - 22，源 72.34.51.100/32。
- **E.** Network ACL Inbound Rule: Protocol – TCP, Port Range-22, Source 72.34.51.100/0.
  - 网络 ACL 入站规则：协议 – TCP、端口范围 22、源 72.34.51.100/0。

**正确答案 / Answer: `A`**


---

## Question 225

**EN** How can you secure data at rest on an EBS volume?

**中** 如何保护 EBS 卷上的静态数据？

- **A.** Attach the volume to an instance using EC2's SSL interface.
  - 使用 EC2 的 SSL 接口将卷附加到实例。
- **B.** Write the data randomly instead of sequentially.
  - 随机写入数据而不是顺序写入数据。
- **C.** Encrypt the volume using the S3 server-side encryption service.
  - 使用 S3 服务器端加密服务加密卷。
- **D.** Create an IAM policy that restricts read and write access to the volume.
  - 创建限制对卷的读写访问的 IAM 策略。
- **E.** Use an encrypted file system on top of the EBS volume.
  - 在 EBS 卷之上使用加密文件系统。

**正确答案 / Answer: `E`**


---

## Question 226

**EN** Is there a method in the IAM system to allow or deny access to a specific instance?

**中** IAM 系统中是否有方法允许或拒绝对特定实例的访问？

- **A.** Only for VPC based instances.
  - 仅适用于基于 VPC 的实例。
- **B.** Yes.
  - 是的。
- **C.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 227

**EN** Using Amazon IAM, can I give permission based on organizational groups?

**中** 使用 Amazon IAM，我可以根据组织组授予权限吗？

- **A.** Yes but only in certain cases.
  - 是的，但仅限于某些情况。
- **B.** Yes.
  - 是的。
- **C.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 228

**EN** Which services allow the customer to retain full administrative privileges of the underlying EC2 instances? (Choose 2 answers)

**中** 哪些服务允许客户保留底层 EC2 实例的完整管理权限？ （选择 2 个答案）

- **A.** Amazon Relational Database Service.
  - 亚马逊关系数据库服务。
- **B.** Amazon Elastic MapReduce.
  - 亚马逊弹性 MapReduce。
- **C.** Amazon ElastiCache.
  - Amazon ElastiCache。
- **D.** Amazon DynamoDB.
  - Amazon DynamoDB。
- **E.** AWS Elastic Beanstalk.
  - AWS Elastic Beanstalk。

**正确答案 / Answer: `B, E`**


---

## Question 229

**EN** While launching an RDS DB instance, on which page I can select the Availability Zone?

**中** 启动 RDS 实例时，在哪个页面可以选择可用区？

- **A.** REVIEW.
  - 审查。
- **B.** DB INSTANCE DETAILS.
  - 数据库实例详细信息。
- **C.** MANAGEMENT OPTIONS.
  - 管理选项。
- **D.** ADDITIONAL CONFIGURATION.
  - 附加配置。

**正确答案 / Answer: `D`**


---

## Question 230

**EN** You are responsible for a legacy web application whose server environment is approaching end of life. You would like to migrate this application to AWS as quickly as possible, since the application environment currently has the following limitations. The VM's single 10GB VMDK is almost full. The virtual network interface still uses the 10Mbps driver, which leaves your 100Mbps WAN connection completely underutilized. It is currently running on a highly customized Windows VM within a VMware environment. You do not have the installation media. This is a mission critical application with an RTO (Recovery Time Objective) of 8 hours and RPO (Recovery Point Objective) of 1 hour. How could you best migrate this application to AWS while meeting your business continuity requirements?

**中** 您负责管理一个遗留 Web 应用程序，其服务器环境即将终止。您希望尽快将此应用程序迁移到 AWS，因为该应用程序环境目前存在以下限制。 VM 的单个 10GB VMDK 几乎已满。虚拟网络接口仍然使用 10Mbps 驱动程序，这使得您的 100Mbps WAN 连接完全没有得到充分利用。它目前在 VMware 环境中的高度定制的 Windows VM 上运行。您没有安装介质。这是一个任务关键型应用程序，RTO（恢复时间目标）为 8 小时，RPO（恢复点目标）为 1 小时。如何才能最好地将此应用程序迁移到 AWS，同时满足您的业务连续性要求？

- **A.** Use the EC2 VM Import Connector for vCenter to import the VM into EC2.
  - 使用适用于 vCenter 的 EC2 VM 导入连接器将 VM 导入 EC2。
- **B.** Use Import/Export to import the VM as an EBS snapshot and attach to EC2.
  - 使用导入/导出将 VM 作为 EBS 快照导入并附加到 EC2。
- **C.** Use S3 to create a backup of the VM and restore the data into EC2.
  - 使用 S3 创建 VM 的备份并将数据恢复到 EC2 中。
- **D.** Use the ec2-bundle-instance API to Import an Image of the VM into EC2.
  - 使用 ec2-bundle-instance API 将 VM 的映像导入 EC2。

**正确答案 / Answer: `A`**


---

## Question 231

**EN** You are setting up some EBS volumes for a customer who has requested a setup which includes a RAID (redundant array of inexpensive disks). AWS has some recommendations for RAID setups. Which RAID setup is not recommended for Amazon EBS?

**中** 您正在为客户设置一些 EBS 卷，该客户请求设置包括 RAID（廉价磁盘冗余阵列）。 AWS has some recommendations for RAID setups.哪种 RAID 设置不推荐用于 Amazon EBS？

- **A.** RAID 5 only.
  - 仅限 RAID 5。
- **B.** RAID 5 and RAID 6.
  - RAID 5 和 RAID 6。
- **C.** RAID 1 only.
  - 仅限 RAID 1。
- **D.** RAID 1 and RAID 6.
  - RAID 1 和 RAID 6。

**正确答案 / Answer: `B`**


---

## Question 232

**EN** Much of your company's data does not need to be accessed often, and can take several hours for retrieval time, so it's stored on Amazon Glacier. However someone within your organization has expressed concerns that his data is more sensitive than the other data, and is wondering whether the high level of encryption that he knows is on S3 is also used on the much cheaper Glacier service. Which of the following statements would be most applicable in regards to this concern?

**中** 您公司的大部分数据不需要经常访问，并且检索时间可能需要几个小时，因此将其存储在 Amazon Glacier 上。然而，您组织内的某人表示担心他的数据比其他数据更敏感，并且想知道他所知道的 S3 上的高级别加密是否也用于便宜得多的 Glacier 服务。以下哪项陈述最适用于这一问题？

- **A.** There is no encryption on Amazon Glacier, that's why it is cheaper.
  - Amazon Glacier 没有加密，这就是它更便宜的原因。
- **B.** Amazon Glacier automatically encrypts the data using AES-128 a lesser encryption method than Amazon S3 but you can change it to AES-256 if you are willing to pay more.
  - Amazon Glacier 自动使用 AES-128 加密数据，这种加密方法比 Amazon S3 的加密方法要少，但如果您愿意支付更多费用，可以将其更改为 AES-256。
- **C.** Amazon Glacier automatically encrypts the data using AES-256, the same as Amazon S3.
  - Amazon Glacier 自动使用 AES-256 加密数据，与 Amazon S3 相同。
- **D.** Amazon Glacier automatically encrypts the data using AES-128 a lesser encryption method than Amazon S3.
  - Amazon Glacier 使用 AES-128 自动加密数据，这是一种比 Amazon S3 加密程度较低的方法。

**正确答案 / Answer: `C`**


---

## Question 233

**EN** Can I use Provisioned IOPS with VPC?

**中** 我可以将预配置 IOPS 与 VPC 结合使用吗？

- **A.** Only Oracle based RDS.
  - 仅基于 Oracle 的 RDS。
- **B.** No.
  - 不。
- **C.** Only with MSSQL based RDS.
  - 仅适用于基于 MSSQL 的 RDS。
- **D.** Yes for all RDS instances.
  - 对于所有 RDS 实例都是如此。

**正确答案 / Answer: `D`**


---

## Question 234

**EN** To ensure failover capabilities, consider using a [...] for incoming traffic on a network interface.

**中** 为了确保故障转移功能，请考虑对网络接口上的传入流量使用 [...]。

- **A.** primary public IP.
  - 主要公共 IP。
- **B.** secondary private IP.
  - 辅助私有 IP。
- **C.** secondary public IP.
  - 二级公网 IP。
- **D.** add on secondary IP.
  - 添加辅助 IP。

**正确答案 / Answer: `B`**


---

## Question 235

**EN** By default, EBS volumes that are created and attached to an instance at launch are deleted when that instance is terminated. You can modify this behavior by changing the value of the flag [...] to false when you launch the instance.

**中** 默认情况下，启动时创建并附加到实例的 EBS 卷将在实例终止时删除。您可以在启动实例时通过将标志 [...] 的值更改为 false 来修改此行为。

- **A.** Delete On Termination.
  - 终止时删除。
- **B.** Remove On Deletion.
  - 删除时删除。
- **C.** Remove On Termination.
  - 终止时删除。
- **D.** Terminate On Deletion.
  - 删除时终止。

**正确答案 / Answer: `A`**


---

## Question 236

**EN** Which AWS service helps this functionality?

**中** 哪些 AWS 服务有助于此功能？

- **A.** AWS Simple Queue Service.
  - AWS 简单队列服务。
- **B.** AWS Simple Notification Service.
  - AWS 简单通知服务。
- **C.** AWS Simple Workflow Service.
  - AWS 简单工作流服务。
- **D.** AWS Simple Email Service.
  - AWS 简单电子邮件服务。

**正确答案 / Answer: `A`**


---

## Question 237

**EN** Which of the below statements would be an incorrect response to your customers enquiry?

**中** 以下哪项陈述是对您客户询问的错误答复？

- **A.** Amazon EMR customers can choose to send data to Amazon S3 using the HTTPS protocol for secure transmission.
  - Amazon EMR 客户可以选择使用 HTTPS 协议向 Amazon S3 发送数据进行安全传输。
- **B.** Amazon S3 provides authentication mechanisms to ensure that stored data is secured against unauthorized access.
  - Amazon S3 提供身份验证机制，以确保存储的数据免受未经授权的访问。
- **C.** Every packet sent in the AWS network uses Internet Protocol Security (IPsec).
  - AWS 网络中发送的每个数据包都使用 Internet 协议安全性 (IPsec)。
- **D.** Customers may encrypt the input data before they upload it to Amazon S3.
  - 客户可以在将输入数据上传到 Amazon S3 之前对其进行加密。

**正确答案 / Answer: `C`**


---

## Question 238

**EN** The one-time payment for Reserved Instances is [...] refundable if the reservation is cancelled.

**中** 如果取消预订，预留实例的一次性付款可退还。

- **A.** always.
  - 总是。
- **B.** in some circumstances.
  - 在某些情况下。
- **C.** never.
  - 绝不。

**正确答案 / Answer: `C`**


---

## Question 239

**EN** Is it possible to get a history of all EC2 API calls made on your account for security analysis and operational troubleshooting purposes?

**中** 是否可以获取您账户上进行的所有 EC2 API 调用的历史记录，以进行安全分析和操作故障排除？

- **A.** Yes, by default, the history of your API calls is logged.
  - 是的，默认情况下，您的 API 调用历史记录会被记录。
- **B.** Yes, you should turn on the CloudTrail in the AWS console.
  - 是的，您应该在 AWS 控制台中打开 CloudTrail。
- **C.** No, you can only get a history of VPC API calls.
  - 不可以，您只能获取 VPC API 调用的历史记录。
- **D.** No, you cannot store history of EC2 API calls on Amazon.
  - 不可以，您无法在 Amazon 上存储 EC2 API 调用的历史记录。

**正确答案 / Answer: `B`**


---

## Question 240

**EN** The Trusted Advisor service provides insight regarding which four categories of an AWS account?

**中** Trusted Advisor 服务提供有关 AWS 账户哪四类的见解？

- **A.** Security, fault tolerance, high availability, and connectivity.
  - 安全性、容错性、高可用性和连接性。
- **B.** Security, access control, high availability, and performance.
  - 安全性、访问控制、高可用性和性能。
- **C.** Performance, cost optimization, security, and fault tolerance.
  - 性能、成本优化、安全性和容错。
- **D.** Performance, cost optimization, access control, and connectivity.
  - 性能、成本优化、访问控制和连接。

**正确答案 / Answer: `C`**


---

## Question 241

**EN** An AWS customer runs a public blogging website. The site users upload two million blog entries a month. The average blog entry size is 200 KB. The access rate to blog entries drops to negligible 6 months after publication and users rarely access a blog entry 1 year after publication. Additionally, blog entries have a high update rate during the first 3 months following publication, this drops to no updates after 6 months. The customer wants to use CloudFront to improve his user's load times. Which of the following recommendations would you make to the customer?

**中** AWS 客户运营一个公共博客网站。该网站用户每月上传 200 万篇博客文章。博客条目的平均大小为 200 KB。博客文章的访问率在发布后 6 个月内下降到可以忽略不计，并且用户在发布后 1 年后很少访问博客文章。此外，博客条目在发布后的前 3 个月内更新率很高，6 个月后下降到没有更新。客户希望使用 CloudFront 来缩短用户的加载时间。您会向客户提出以下哪些建议？

- **A.** Duplicate entries into two different buckets and create two separate CloudFront distributions where S3 access is restricted only to CloudFront identity.
  - 将条目复制到两个不同的存储桶中，并创建两个单独的 CloudFront 分配，其中 S3 访问仅限于 CloudFront 身份。
- **B.** Create a CloudFront distribution with 'US' Europe price class for US/ Europe users and a different CloudFront distribution with Al l Edge Locations' for the remaining users.
  - 为美国/欧洲用户创建一个具有“美国”欧洲价格等级的 CloudFront 分配，并为其余用户创建一个具有“所有边缘位置”的不同 CloudFront 分配。
- **C.** Create a CloudFront distribution with S3 access restricted only to the CloudFront identity and partition the blog entry's location in S3 according to the month it was uploaded to be used withCloudFront behaviors.
  - 创建一个 CloudFront 分配，其中 S3 访问仅限于 CloudFront 身份，并根据博客条目上传的月份对 S3 中的位置进行分区，以便与 CloudFront 行为一起使用。
- **D.** Create a CloudFronl distribution with Restrict Viewer Access Forward Query string set to true and minimum TTL of 0.
  - 创建一个 CloudFronl 分配，并将“限制查看者访问转发查询”字符串设置为 true 并将最小 TTL 设置为 0。

**正确答案 / Answer: `C`**


---

## Question 242

**EN** Your supervisor has asked you to build a simple file synchronization service for your department. He doesn't want to spend too much money and he wants to be notified of any changes to files by email. What do you think would be the best Amazon service to use for the email solution?

**中** 您的主管要求您为您的部门构建一个简单的文件同步服务。他不想花太多钱，并且希望通过电子邮件收到文件的任何更改通知。您认为最适合用于电子邮件解决方案的亚马逊服务是什么？

- **A.** Amazon SES.
  - Amazon SES。
- **B.** Amazon CloudSearch.
  - 亚马逊云搜索。
- **C.** Amazon SWF.
  - 亚马逊 SWF。
- **D.** Amazon AppStream.
  - Amazon AppStream。

**正确答案 / Answer: `A`**


---

## Question 243

**EN** What are the Amazon EC2 API tools?

**中** Amazon EC2 API 工具是什么？

- **A.** They don't exist. The Amazon EC2 AMI tools, instead, are used to manage permissions.
  - 它们不存在。相反，Amazon EC2 AMI 工具用于管理权限。
- **B.** Command-line tools to the Amazon EC2 web service.
  - Amazon EC2 Web 服务的命令行工具。
- **C.** They are a set of graphical tools to manage EC2 instances.
  - 它们是一组用于管理 EC2 实例的图形工具。
- **D.** They don't exist. The Amazon API tools are a client interface to Amazon Web Services.
  - 它们不存在。 Amazon API 工具是 Amazon Web Services 的客户端接口。

**正确答案 / Answer: `B`**


---

## Question 244

**EN** Your customer wishes to deploy an enterprise application to AWS which will consist of several web servers, several application servers and a small (50GB) Oracle database information is stored, both in the database and the file systems of the various servers. The backup system must support database recovery whole server and whole disk restores, and individual file restores with a recovery time of no more than two hours. They have chosen to use RDS Oracle as the database. Which backup architecture will meet these requirements?

**中** 您的客户希望将企业应用程序部署到 AWS，该应用程序将由多个 Web 服务器、多个应用程序服务器和一个小型 (50GB) Oracle 数据库组成，信息存储在数据库和各个服务器的文件系统中。备份系统必须支持数据库恢复全服务器、全盘恢复，以及单个文件恢复，恢复时间不超过 2 小时。他们选择使用 RDS Oracle 作为数据库。哪种备份架构能够满足这些要求？

- **A.** Backup RDS using automated daily DB backups Backup the EC2 instances using AMIs and supplement with file-level backup to S3 using traditional enterprise backup software to provide file level restore.
  - 使用每日自动数据库备份来备份 RDS 使用 AMI 备份 EC2 实例，并使用传统企业备份软件将文件级备份补充到 S3，以提供文件级恢复。
- **B.** Backup RDS using a Multi-AZ Deployment Backup the EC2 instances using Amis, and supplement by copying file system data to S3 to provide file-level restore.
  - 使用多可用区部署备份 RDS 使用 Amis 备份 EC2 实例，并通过将文件系统数据复制到 S3 来进行补充以提供文件级恢复。
- **C.** Backup RDS using automated daily DB backups Backup the EC2 instances using EBS snapshots and supplement with file-level backups to Amazon Glacier using traditional enterprise backup software to provide file-level restore.
  - 使用每日自动数据库备份备份 RDS 使用 EBS 快照备份 EC2 实例，并使用传统企业备份软件将文件级备份补充到 Amazon Glacier，以提供文件级恢复。
- **D.** Backup RDS database to S3 using Oracle RMAN Backup the EC2 instances using Amis, and supplement with EBS snapshots for individual volume restore.
  - 使用 Oracle RMAN 将 RDS 数据库备份到 S3 使用 Amis 备份 EC2 实例，并补充 EBS 快照以进行单个卷恢复。

**正确答案 / Answer: `A`**


---

## Question 245

**EN** You are architecting a highly-scalable and reliable web application which will have a huge amount of content. You have decided to use Cloudfront as you know it will speed up distribution of your static and dynamic web content and know that Amazon CloudFront integrates with Amazon CloudWatch metrics so that you can monitor your web application. Because you live in Sydney you have chosen the the Asia Pacific (Sydney) region in the AWS console. However you have set up this up but no CloudFront metrics seem to be appearing in the CloudWatch console. What is the most likely reason from the possible choices below for this?

**中** 您正在构建一个高度可扩展且可靠的 Web 应用程序，该应用程序将包含大量内容。您已决定使用 Cloudfront，因为您知道它将加快静态和动态 Web 内容的分发速度，并且知道 Amazon CloudFront 与 Amazon CloudWatch 指标集成，以便您可以监控您的 Web 应用程序。由于您居住在悉尼，因此您在 AWS 控制台中选择了亚太地区（悉尼）区域。然而，您已经进行了设置，但 CloudWatch 控制台中似乎没有出现任何 CloudFront 指标。从以下可能的选择中，最可能的原因是什么？

- **A.** Metrics for CloudWatch are available only when you choose the same region as the application you are monitoring.
  - 仅当您选择与正在监控的应用程序相同的区域时，CloudWatch 的指标才可用。
- **B.** You need to pay for CloudWatch for it to become active.
  - 您需要为 CloudWatch 付费才能使其激活。
- **C.** Metrics for CloudWatch are available only when you choose the US East (Virginia).
  - 仅当您选择美国东部（弗吉尼亚州）时，CloudWatch 的指标才可用。
- **D.** Metrics for CloudWatch are not available for the Asia Pacific region as yet.
  - CloudWatch 的指标尚不适用于亚太地区。

**正确答案 / Answer: `C`**


---

## Question 246

**EN** Is the SQL Server Audit feature supported in the Amazon RDS SQL Server engine?

**中** Amazon RDS SQL Server 引擎是否支持 SQL Server 审核功能？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 247

**EN** What is the command line instruction for running the remote desktop client in Windows?

**中** 在 Windows 中运行远程桌面客户端的命令行指令是什么？

- **A.** desk.cpl.
  - 办公桌.cpl。
- **B.** mstsc.
  - mstsc。

**正确答案 / Answer: `B`**


---

## Question 248

**EN** Which of the following cannot be used in Amazon EC2 to control who has access to specific Amazon EC2 instances?

**中** 以下哪项不能在 Amazon EC2 中使用来控制谁有权访问特定 Amazon EC2 实例？

- **A.** Security Groups.
  - 安全组。
- **B.** IAM System.
  - 身份管理系统。
- **C.** SSH keys.
  - SSH 密钥。
- **D.** Windows passwords.
  - Windows 密码。

**正确答案 / Answer: `B`**


---

## Question 249

**EN** What is the charge for the data transfer incurred in replicating data between your primary and standby?

**中** 在主备机之间复制数据时产生的数据传输费用是多少？

- **A.** Same as the standard data transfer charge.
  - 与标准数据传输费用相同。
- **B.** Double the standard data transfer charge.
  - 标准数据传输费用加倍。
- **C.** No charge. It is free.
  - 不收费。它是免费的。
- **D.** Half of the standard data transfer charge.
  - 标准数据传输费用的一半。

**正确答案 / Answer: `C`**


---

## Question 250

**EN** You have a load balancer configured for VPC, and all back-end Amazon EC2 instances are in service. However, your web browser times out when connecting to the load balancer's DNS name. Which options are probable causes of this behavior? (Choose 2 answers)

**中** 您已为 VPC 配置了负载均衡器，并且所有后端 Amazon EC2 实例均处于服务状态。但是，您的 Web 浏览器在连接到负载均衡器的 DNS 名称时超时。哪些选项可能是导致此行为的原因？ （选择 2 个答案）

- **A.** The load balancer was not configured to use a public subnet with an Internet gateway configured.
  - 负载均衡器未配置为使用配置了 Internet 网关的公有子网。
- **B.** The Amazon EC2 instances do not have a dynamically allocated private IP address.
  - Amazon EC2 实例没有动态分配的私有 IP 地址。
- **C.** The security groups or network ACLs are not properly configured for web traffic.
  - 未针对 Web 流量正确配置安全组或网络 ACL。
- **D.** The load balancer is not configured in a private subnet with a NAT instance.
  - 负载均衡器未在具有 NAT 实例的私有子网中配置。
- **E.** The VPC does not have a VGW configured.
  - VPC 未配置 VGW。

**正确答案 / Answer: `A, C`**


---

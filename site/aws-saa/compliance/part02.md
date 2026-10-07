# AWS SAA-C03 原创练习卷 · 第 02 份

> 题目 51–100 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 51

**EN** An instance is launched into a VPC subnet with the network ACL configured to allow all inbound traffic and deny all outbound traffic. The instance's security group is configured to allow SSH from any IP address and deny all outbound traffic. What changes need to be made to allow SSH access to the instance?

**中** 将实例启动到 VPC 子网中，并将网络 ACL 配置为允许所有入站流量并拒绝所有出站流量。该实例的安全组配置为允许来自任何 IP 地址的 SSH 并拒绝所有出站流量。需要进行哪些更改才能允许 SSH 访问实例？

- **A.** The outbound security group needs to be modified to allow outbound traffic.
  - 需要修改出站安全组以允许出站流量。
- **B.** The outbound network ACL needs to be modified to allow outbound traffic.
  - 需要修改出站网络 ACL 以允许出站流量。
- **C.** Nothing, it can be accessed from any IP address using S3.
  - 没什么，可以使用 S3 从任何 IP 地址访问它。
- **D.** Both the outbound security group and outbound network ACL need to be modified to allow outbound traffic.
  - 需要修改出方向安全组和出方向网络 ACL 以允许出方向流量。

**正确答案 / Answer: `B`**


---

## Question 52

**EN** You can modify the backup retention period; valid values are 0 (for no backup retention) to a maximum of [...] days.

**中** 您可以修改备份保留期限；有效值为 0（不保留备份）到最多 [...] 天。

- **A.** 45.
  - 45.
- **B.** 35.
  - 35.
- **C.** 15.
  - 15.
- **D.** 5.
  - 5.

**正确答案 / Answer: `B`**


---

## Question 53

**EN** To serve Web traffic for a popular product your chief financial officer and IT director have purchased 10 ml large heavy utilization Reserved Instances (RIs) evenly spread across two Availability Zones. Route 53 is used to deliver the traffic to an Elastic Load Balancer (ELB). After several months, the product grows even more popular and you need additional capacity. As a result, your company purchases two C3.2xlarge medium utilization RIs. You register the two c3 2xlarge instances with your ELB and quickly find that the ml large instances are at 100% of capacity and the c3 2xlarge instances have significant capacity that's unused. Which option is the most cost effective and uses EC2 capacity most effectively?

**中** 为了为流行产品提供 Web 流量，您的首席财务官和 IT 总监购买了 10 毫升大型高利用率预留实例 (RI)，均匀分布在两个可用区中。路由 53 用于将流量传送到 Elastic Load Balancer (ELB)。几个月后，该产品变得更加流行，您需要额外的容量。因此，您的公司购买了两个 C3.2xlarge 中等利用率 RI。您向 ELB 注册了两个 c3 2xlarge 实例，很快发现 ml 大型实例的容量已达到 100%，而 c3 2xlarge 实例有大量未使用的容量。哪种选项最具成本效益并且最有效地利用 EC2 容量？

- **A.** Use a separate ELB for each instance type and distribute load to ELBs with Route 53 weighted round robin.
  - 为每个实例类型使用单独的 ELB，并通过 Route 53 加权循环将负载分配到 ELB。
- **B.** Configure Autoscaling group and Launch Configuration with ELB to add up to 10 more on-demand ml large instances when triggered by Cloudwatch. Shut off c3 2xlarge instances.
  - 使用 ELB 配置自动扩展组和启动配置，以便在 Cloudwatch 触发时再添加最多 10 个按需 ml 大型实例。关闭 c3 2xlarge 实例。
- **C.** Route traffic to EC2 ml large and c3 2xlarge instances directly using Route 53 latency based routing and health checks. Shut off ELB.
  - 使用基于 Route 53 延迟的路由和运行状况检查，直接将流量路由到 EC2 ml large 和 c3 2xlarge 实例。关闭 ELB。
- **D.** Configure ELB with two c3 2xlarge Instances and use on-demand Autoscaling group for up to two additional c3.2xlarge instances. Shut off m1.large instances.
  - 使用两个 c3 2xlarge 实例配置 ELB，并使用按需自动缩放组最多另外两个 c3.2xlarge 实例。关闭 m1.large 实例。

**正确答案 / Answer: `A`**


---

## Question 54

**EN** An existing application stores sensitive information on a non-boot Amazon EBS data volume attached to an Amazon Elastic Compute Cloud instance. Which of the following approaches would protect the sensitive data on an Amazon EBS volume?

**中** 现有应用程序将敏感信息存储在附加到 Amazon Elastic Compute Cloud 实例的非启动 Amazon EBS 数据卷上。以下哪种方法可以保护 Amazon EBS 卷上的敏感数据？

- **A.** Upload your customer keys to AWS CloudHS.
  - 将您的客户密钥上传到 AWS CloudHS。
- **B.** Associate the Amazon EBS volume with AWS CloudHS.
  - 将 Amazon EBS 卷与 AWS CloudHS 关联。
- **C.** Re-mount the Amazon EBS volume.
  - 重新安装 Amazon EBS 卷。
- **D.** Create and mount a new, encrypted Amazon EBS volume. Move the data to the new volume. Delete the old Amazon EBS volume.
  - 创建并安装新的加密 Amazon EBS 卷。将数据移动到新卷。删除旧的 Amazon EBS 卷。
- **E.** Unmount the EBS volume. Toggle the encryption attribute to True. Re-mount the Amazon EBS volume.
  - 卸载 EBS 卷。将加密属性切换为 True。重新安装 Amazon EBS 卷。
- **F.** Snapshot the current Amazon EBS volume. Restore the snapshot to a new, encrypted Amazon EBS volume. Mount the Amazon EBS volume.
  - 快照当前 Amazon EBS 卷。将快照恢复到新的加密 Amazon EBS 卷。安装 Amazon EBS 卷。

**正确答案 / Answer: `D`**


---

## Question 55

**EN** A user has launched one EC2 instance in the US West region. The user wants to access the RDS instance launched in the US East region from that EC2 instance. How can the user configure the access for that EC2 instance?

**中** 用户在美国西部地区启动了一个 EC2 实例。用户希望从该 EC2 实例访问在美国东部区域启动的 RDS 实例。用户如何配置该 EC2 实例的访问权限？

- **A.** Configure the IP range of the US West region instance as the ingress security rule of RDS.
  - 配置美国西部地区实例的 IP 范围作为 RDS 的入口安全规则。
- **B.** It is not possible to access RDS of the US East region from the US West region.
  - 无法从美国西部区域访问美国东部区域的 RDS。
- **C.** Open the security group of the US West region in the RDS security group's ingress rule.
  - 在 RDS 安全组的入口规则中打开美国西部区域的安全组。
- **D.** Create an IAM role which has access to RDS and launch an instance in the US West region with it.
  - 创建一个有权访问 RDS 的 IAM 角色，并使用它在美国西部区域启动一个实例。

**正确答案 / Answer: `A`**


---

## Question 56

**EN** You have been asked to build AWS infrastructure for disaster recovery for your local applications and within that you should use an AWS Storage Gateway as part of the solution. Which of the following best describes the function of an AWS Storage Gateway?

**中** 您被要求为本地应用程序构建用于灾难恢复的 AWS 基础设施，并且您应该在其中使用 AWS Storage Gateway 作为解决方案的一部分。以下哪项最准确地描述了 AWS Storage Gateway 的功能？

- **A.** Accelerates transferring large amounts of data between the AWS cloud and portable storage devices .
  - 加速 AWS 云和便携式存储设备之间的大量数据传输。
- **B.** A web service that speeds up distribution of your static and dynamic web content.
  - 一种可加速静态和动态 Web 内容分发的 Web 服务。
- **C.** Connects an on-premises software appliance with cloud-based storage to provide seamless and secure integration between your on-premises IT environment and AWS's storage infrastructure.
  - 将本地软件设备与基于云的存储连接起来，以在本地 IT 环境和 AWS 存储基础设施之间提供无缝、安全的集成。
- **D.** Is a storage service optimized for infrequently used data, or 'cold data'.
  - 是针对不常用数据或“冷数据”进行优化的存储服务。

**正确答案 / Answer: `C`**


---

## Question 57

**EN** While creating an Amazon RDS DB, your first task is to set up a DB [...] that controls which IP address or EC2 instance can access your DB Instance.

**中** 创建 Amazon RDS 数据库时，您的首要任务是设置一个数据库 [...] 来控制哪个 IP 地址或 EC2 实例可以访问您的数据库实例。

- **A.** security token pool.
  - 安全令牌池。
- **B.** security token.
  - 安全令牌。
- **C.** security pool.
  - 安全池。
- **D.** security group.
  - 安全组。

**正确答案 / Answer: `D`**


---

## Question 58

**EN** You need to import several hundred megabytes of data from a local Oracle database to an Amazon RDS DB instance. What does AWS recommend you use to accomplish this?

**中** 您需要将本地 Oracle 数据库数百兆数据导入 Amazon RDS 数据库实例。 AWS 建议您使用什么来实现此目的？

- **A.** Oracle export/import utilities.
  - Oracle 导出/导入实用程序。
- **B.** Oracle SQL Developer.
  - Oracle SQL 开发人员。
- **C.** Oracle Data Pump.
  - Oracle 数据泵。
- **D.** DBMS_FILE_TRANSFER.
  - DBMS_FILE_TRANSFER。

**正确答案 / Answer: `C`**


---

## Question 59

**EN** In the context of AWS support, why must an EC2 instance be unreachable for 20 minutes rather than allowing customers to open tickets immediately?

**中** 在 AWS Support 的情况下，为什么 EC2 实例必须在 20 分钟内无法访问，而不是允许客户立即开票？

- **A.** Because most reachability issues are resolved by automated processes in less than 20 minutes.
  - 因为大多数可达性问题都可以通过自动化流程在 20 分钟内得到解决。
- **B.** Because all EC2 instances are unreachable for 20 minutes every day when AWS does routine maintenance.
  - 因为 AWS 每天进行例行维护时，所有 EC2 实例都会有 20 分钟不可达的情况。
- **C.** Because all EC2 instances are unreachable for 20 minutes when first launched.
  - 因为所有 EC2 实例在首次启动时 20 分钟内都无法访问。
- **D.** Because of all the reasons listed here.
  - 由于这里列出的所有原因。

**正确答案 / Answer: `A`**


---

## Question 60

**EN** HTTP Query-based requests are HTTP requests that use the HTTP verb GET or POST and a Query parameter named [...].

**中** 基于 HTTP 查询的请求是使用 HTTP 动词 GET 或 POST 以及名为 [...] 的查询参数的 HTTP 请求。

- **A.** Action.
  - 行动。
- **B.** Value.
  - 价值。
- **C.** Reset.
  - 重置。
- **D.** Retrieve.
  - 取回。

**正确答案 / Answer: `A`**


---

## Question 61

**EN** A friend tells you he is being charged $100 a month to host his WordPress website, and you tell him you can move it to AWS for him and he will only pay a fraction of that, which makes him very happy. He then tells you he is being charged $50 a month for the domain, which is registered with the same people that set it up, and he asks if it's possible to move that to AWS as well. You tell him you aren't sure, but will look into it. Which of the following statements is true in regards to transferring domain names to AWS?

**中** 一位朋友告诉您，他每月需要支付 100 美元来托管他的 WordPress 网站，而您告诉他您可以为他将其迁移到 AWS，而他只需支付其中的一小部分，这让他非常高兴。然后他告诉你，他每月要为该域名支付 50 美元的费用，该域名是由设置该域名的同一个人注册的，他询问是否也可以将其转移到 AWS。你告诉他你不确定，但会调查一下。关于将域名转移到 AWS，以下哪项陈述是正确的？

- **A.** You can't transfer existing domains to AWS.
  - 您无法将现有域转移到 AWS。
- **B.** You can transfer existing domains into Amazon Route 53's management.
  - 您可以将现有域转移到 Amazon Route 53 的管理中。
- **C.** You can transfer existing domains via AWS Direct Connect.
  - 您可以通过 AWS Direct Connect 转移现有域名。
- **D.** You can transfer existing domains via AWS Import/Export.
  - 您可以通过 AWS Import/Export 转移现有域。

**正确答案 / Answer: `B`**


---

## Question 62

**EN** While creating the snapshots using the command line tools, which command should I be using?

**中** 使用命令行工具创建快照时，我应该使用哪个命令？

- **A.** ec2-deploy-snapshot.
  - ec2-部署快照。
- **B.** ec2-fresh-snapshot.
  - ec2-新鲜快照。
- **C.** ec2-create-snapshot.
  - ec2-创建快照。
- **D.** ec2-new-snapshot.
  - ec2-新快照。

**正确答案 / Answer: `C`**


---

## Question 63

**EN** All Amazon EC2 instances are assigned two IP addresses at launch, out of which one can only be reached from within the Amazon EC2 network?

**中** 所有 Amazon EC2 实例在启动时都分配有两个 IP 地址，其中一个只能从 Amazon EC2 网络内部访问吗？

- **A.** Multiple IP address.
  - 多个 IP 地址。
- **B.** Public IP address.
  - 公共 IP 地址。
- **C.** Private IP address.
  - 私有 IP 地址。
- **D.** Elastic IP Address.
  - 弹性 IP 地址。

**正确答案 / Answer: `C`**


---

## Question 64

**EN** When an EC2 instance that is backed by an S3-based AMI is terminated, what happens to the data on the root volume?

**中** 当基于 S3 的 AMI 支持的 EC2 实例终止时，根卷上的数据会发生什么情况？

- **A.** Data is automatically saved as an EBS snapshot.
  - 数据自动保存为 EBS 快照。
- **B.** Data is automatically saved as an EBS volume.
  - 数据自动保存为 EBS 卷。
- **C.** Data is unavailable until the instance is restarted.
  - 在实例重新启动之前，数据不可用。
- **D.** Data is automatically deleted.
  - 数据被自动删除。

**正确答案 / Answer: `D`**


---

## Question 65

**EN** You've created your first load balancer and have registered your EC2 instances with the load balancer. Elastic Load Balancing routinely performs health checks on all the registered EC2 instances and automatically distributes all incoming requests to the DNS name of your load balancer across your registered, healthy EC2 instances. By default, the load balancer uses the [...] protocol for checking the health of your instances.

**中** 您已创建第一个负载均衡器，并向该负载均衡器注册了您的 EC2 实例。 Elastic Load Balancing 定期对所有已注册的 EC2 实例执行运行状况检查，并自动将所有传入请求分发到已注册的运行状况良好的 EC2 实例上的负载均衡器的 DNS 名称。默认情况下，负载均衡器使用 [...] 协议来检查实例的运行状况。

- **A.** HTTPS.
  - HTTPS。
- **B.** HTTP.
  - HTTP。
- **C.** ICMP.
  - ICMP。
- **D.** IPv6.
  - IPv6。

**正确答案 / Answer: `B`**


---

## Question 66

**EN** Amazon Elastic Load Balancing is used to manage traffic on a fleet of Amazon EC2 instances, distributing traffic to instances across all Availability Zones within a region. Elastic Load Balancing has all the advantages of an on-premises load balancer, plus several security benefits. Which of the following is not an advantage of ELB over an on-premise load balancer?

**中** Amazon Elastic Load Balancing 用于管理 Amazon EC2 实例队列上的流量，将流量分配到区域内所有可用区的实例。 Elastic Load Balancing 具有本地负载均衡器的所有优点，以及多项安全优势。以下哪一项不是 ELB 相对于本地负载均衡器的优势？

- **A.** ELB uses a four-tier, key-based architecture for encryption.
  - ELB 使用四层、基于密钥的架构进行加密。
- **B.** ELB offers clients a single point of contact, and can also serve as the first line of defense against attacks on your network.
  - ELB 为客户提供单点联系，也可以作为抵御网络攻击的第一道防线。
- **C.** ELB takes over the encryption and decryption work from the Amazon EC2 instances and manages it centrally on the load balancer.
  - ELB 接管 Amazon EC2 实例的加密和解密工作，并在负载均衡器上集中管理。
- **D.** ELB supports end-to-end traffic encryption using TLS (previously SSL) on those networks that use secure HTTP (HTTPS) connections.
  - ELB 支持在使用安全 HTTP (HTTPS) 连接的网络上使用 TLS（以前称为 SSL）进行端到端流量加密。

**正确答案 / Answer: `A`**


---

## Question 67

**EN** A web company is looking to implement an external payment service into their highly available application deployed in a VPC. Their application EC2 instances are behind a public facing ELB. Auto scaling is used to add additional instances as traffic increases. Under normal load the application runs 2 instances in the Auto Scaling group but at peak it can scale 3x in size. The application instances need to communicate with the payment service over the Internet which requires whitelisting of all public IP addresses used to communicate with it. A maximum of 4 whitelisting IP addresses are allowed at a time and can be added through an API. How should they architect their solution?

**中** 一家网络公司正在寻求将外部支付服务实施到部署在 VPC 中的高可用应用程序中。他们的应用程序 EC2 实例位于面向公众的 ELB 后面。自动缩放用于随着流量的增加添加额外的实例。在正常负载下，应用程序在 Auto Scaling 组中运行 2 个实例，但在峰值时，它的大小可以扩展 3 倍。应用程序实例需要通过互联网与支付服务进行通信，这需要将用于与其通信的所有公共 IP 地址列入白名单。一次最多允许 4 个白名单 IP 地址，并且可以通过 API 添加。他们应该如何构建他们的解决方案？

- **A.** Route payment requests through two NAT instances setup for High Availability and whitelist the Elastic IP addresses attached to the NAT instances.
  - 通过两个 NAT 实例路由支付请求以实现高可用性，并将附加到 NAT 实例的弹性 IP 地址列入白名单。
- **B.** Whitelist the VPC Internet Gateway Public IP and route payment requests through the Internet Gateway.
  - 将 VPC 互联网网关公共 IP 列入白名单，并通过互联网网关路由付款请求。
- **C.** Whitelist the ELB IP addresses and route payment requests from the Application servers through the ELB.
  - 将 ELB IP 地址列入白名单，并通过 ELB 路由来自应用程序服务器的支付请求。
- **D.** Automatically assign public IP addresses to the application instances in the Auto Scaling group and run a script on boot that adds each instance's public IP address to the payment validation whitelist API.
  - 自动将公共 IP 地址分配给 Auto Scaling 组中的应用程序实例，并在启动时运行脚本，将每个实例的公共 IP 地址添加到支付验证白名单 API。

**正确答案 / Answer: `A`**


---

## Question 68

**EN** You are using Amazon SES as an email solution but are unsure of what its limitations are. Which statement below is correct in regards to that?

**中** 您正在使用 Amazon SES 作为电子邮件解决方案，但不确定其局限性。对此，以下哪项陈述是正确的？

- **A.** New Amazon SES users who have received production access can send up to 1,000 emails per 24-hour period, at a maximum rate of 10 emails per second.
  - 获得生产访问权限的新 Amazon SES 用户每 24 小时最多可以发送 1,000 封电子邮件，每秒最多发送 10 封电子邮件。
- **B.** Every Amazon SES sender has a the same set of sending limits.
  - 每个 Amazon SES 发送器都有一组相同的发送限制。
- **C.** Sending limits are based on messages rather than on recipients.
  - 发送限制基于消息而不是收件人。
- **D.** Every Amazon SES sender has a unique set of sending limits.
  - 每个 Amazon SES 发送器都有一组独特的发送限制。

**正确答案 / Answer: `D`**


---

## Question 69

**EN** Your company is getting ready to do a major public announcement of a social media site on AWS. The website is running on EC2 instances deployed across multiple Availability Zones with a Multi-AZ RDS MySQL Extra Large DB Instance. The site performs a high number of small reads and writes per second and relies on an eventual consistency model. After comprehensive tests you discover that there is read contention on RDS MySQL. Which are the best approaches to meet these requirements? (Choose 2 answers)

**中** 您的公司正准备在 AWS 上发布社交媒体网站的重大公告。该网站在跨多个可用区部署的 EC2 实例上运行，并具有多可用区 RDS MySQL 超大型数据库实例。该站点每秒执行大量小型读取和写入，并依赖于最终一致性模型。经过综合测试，发现 RDS MySQL 存在读争用。满足这些要求的最佳方法是什么？ （选择 2 个答案）

- **A.** Deploy ElasticCache in-memory cache running in each Availability Zone.
  - 部署在每个可用区中运行的 ElasticCache 内存缓存。
- **B.** Implement sharding to distribute load to multiple RDS MySQL instances.
  - 实施分片以将负载分配到多个 RDS MySQL 实例。
- **C.** Increase the RDS MySQL Instance size and Implement provisioned IOPS.
  - 增加 RDS MySQL 实例大小并实施预配置 IOPS。
- **D.** Add an RDS MySQL read replica in each Availability Zone.
  - 在每个可用区中添加 RDS MySQL 只读副本。

**正确答案 / Answer: `A, D`**


---

## Question 70

**EN** What does a 'Domain' refer to in Amazon SWF?

**中** Amazon SWF 中的“域”指什么？

- **A.** A security group in which only tasks inside can communicate with each other.
  - 一个安全组，只有内部的任务才能相互通信。
- **B.** A special type of worker.
  - 一种特殊类型的工人。
- **C.** A collection of related Workflows.
  - 相关工作流程的集合。
- **D.** The DNS record for the Amazon SWF service.
  - Amazon SWF 服务的 DNS 记录。

**正确答案 / Answer: `C`**


---

## Question 71

**EN** The SQL Server [...] feature is an efficient means of copying data from a source database to your DB Instance. It writes the data that you specify to a data file, such as an ASCII file.

**中** SQL Server [...] 功能是将数据从源数据库复制到数据库实例的有效方法。它将您指定的数据写入数据文件，例如 ASCII 文件。

- **A.** bulk copy.
  - 批量复制。
- **B.** group copy.
  - 团体副本。
- **C.** dual copy.
  - 双副本。
- **D.** mass copy.
  - 大量复制。

**正确答案 / Answer: `A`**


---

## Question 72

**EN** Any person or application that interacts with AWS requires security credentials. AWS uses these credentials to identify who is making the call and whether to allow the requested access. You have just set up a VPC network for a client and you are now thinking about the best way to secure this network. You set up a security group called vpcsecuritygroup. Which following statement is true in respect to the initial settings that will be applied to this security group if you choose to use the default settings for this group?

**中** 与 AWS 交互的任何人或应用程序都需要安全凭证。 AWS 使用这些凭证来识别谁在进行调用以及是否允许请求的访问。您刚刚为客户端设置了 VPC 网络，现在正在考虑保护该网络的最佳方法。您设置了一个名为 vpcsecuritygroup 的安全组。如果您选择使用该组的默认设置，以下哪项关于将应用于该安全组的初始设置的陈述是正确的？

- **A.** Allow all inbound traffic and allow no outbound traffic.
  - 允许所有入站流量，不允许出站流量。
- **B.** Allow no inbound traffic and allow all outbound traffic.
  - 不允许入站流量并允许所有出站流量。
- **C.** Allow inbound traffic on port 80 only and allow all outbound traffic.
  - 仅允许端口 80 上的入站流量并允许所有出站流量。
- **D.** Allow all inbound traffic and allow all outbound traffic.
  - 允许所有入站流量并允许所有出站流量。

**正确答案 / Answer: `B`**


---

## Question 73

**EN** Which one of the below is not an AWS Storage Service?

**中** 以下哪一项不是 AWS 存储服务？

- **A.** Amazon S3.
  - Amazon S3。
- **B.** Amazon Glacier.
  - Amazon Glacier。
- **C.** Amazon CloudFront.
  - Amazon CloudFront。
- **D.** Amazon EBS.
  - Amazon EBS。

**正确答案 / Answer: `C`**


---

## Question 74

**EN** You are trying to launch an EC2 instance, however the instance seems to go into a terminated status immediately. What would probably not be a reason that this is happening?

**中** 您正在尝试启动 EC2 实例，但该实例似乎立即进入终止状态。什么可能不是发生这种情况的原因？

- **A.** The AMI is missing a required part.
  - AMI 缺少必需的部分。
- **B.** The snapshot is corrupt.
  - 快照已损坏。
- **C.** You need to create storage in EBS first.
  - 您需要先在 EBS 中创建存储。
- **D.** You've reached your volume limit.
  - 您已达到音量限制。

**正确答案 / Answer: `C`**


---

## Question 75

**EN** A company is building software on AWS that requires access to various AWS services. Which configuration should be used to ensure that AWS credentials (i.e., Access Key ID/Secret Access Key combination) are not compromised?

**中** 一家公司正在 AWS 上构建需要访问各种 AWS 服务的软件。应使用哪种配置来确保 AWS 凭证（即访问密钥 ID/秘密访问密钥组合）不被泄露？

- **A.** Enable Multi-Factor Authentication for your AWS root account.
  - 为您的 AWS 根账户启用多重身份验证。
- **B.** Assign an IAM role to the Amazon EC2 instance.
  - 将 IAM 角色分配给 Amazon EC2 实例。
- **C.** Store the AWS Access Key ID/Secret Access Key combination in software comments.
  - 将 AWS 访问密钥 ID/秘密访问密钥组合存储在软件注释中。
- **D.** Assign an IAM user to the Amazon EC2 Instance.
  - 将 IAM 用户分配给 Amazon EC2 实例。

**正确答案 / Answer: `B`**


---

## Question 76

**EN** Can we attach an EBS volume to more than one EC2 instance at the same time?

**中** 我们可以同时将一个 EBS 卷附加到多个 EC2 实例吗？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。
- **C.** Only EC2-optimized EBS volumes.
  - 仅适用于 EC2 优化的 EBS 卷。
- **D.** Only in read mode.
  - 仅在读取模式下。

**正确答案 / Answer: `B`**


---

## Question 77

**EN** You need to measure the performance of your EBS volumes as they seem to be under performing. You have come up with a measurement of 1,024 KB I/O but your colleague tells you that EBS volume performance is measured in IOPS. How many IOPS is equal to 1,024 KB I/O?

**中** 您需要衡量 EBS 卷的性能，因为它们似乎表现不佳。您提出了 1,024 KB I/O 的测量值，但您的同事告诉您 EBS 卷性能是以 IOPS 来测量的。 1,024 KB I/O 等于多少 IOPS？

- **A.** 16.
  - 16.
- **B.** 256.
  - 256.
- **C.** 8.
  - 8.
- **D.** 4.
  - 4.

**正确答案 / Answer: `D`**


---

## Question 78

**EN** Your company produces customer commissioned one-of-a-kind skiing helmets combining high fashion with custom technical enhancements. Customers can show off their Individuality on the ski slopes and have access to head-up-displays. GPS rear-view cams and any other technical innovation they wish to embed in the helmet. The current manufacturing process is data rich and complex including assessments to ensure that the custom electronics and materials used to assemble the helmets are to the highest standards. Assessments are a mixture of human and automated assessments you need to add a new set of assessment to model the failure modes of the custom electronics using GPUs with CUDA, across a cluster of servers with low latency networking. What architecture would allow you to automate the existing process using a hybrid approach and ensure that the architecture can support the evolution of processes over time?

**中** 贵公司生产客户委托的独一无二的滑雪头盔，将高级时尚与定制技术增强相结合。客户可以在滑雪场上展示自己的个性，并可以使用平视显示器。 GPS 后视摄像头以及他们希望嵌入头盔中的任何其他技术创新。当前的制造过程数据丰富且复杂，包括评估以确保用于组装头盔的定制电子设备和材料符合最高标准。评估是人工评估和自动评估的混合体，您需要添加一组新的评估，以在具有低延迟网络的服务器集群中使用 GPU 和 CUDA 对定制电子设备的故障模式进行建模。哪种架构允许您使用混合方法自动化现有流程，并确保该架构能够支持流程随时间的演变？

- **A.** Use AWS Data Pipeline to manage movement of data & meta-data and assessments Use an autoscaling group of G2 instances in a placement group.
  - 使用 AWS Data Pipeline 管理数据和元数据以及评估的移动 在置放群组中使用 G2 实例的自动扩展组。
- **B.** Use Amazon Simple Workflow (SWF) to manages assessments, movement of data & meta-data Use an auto-scaling group of G2 instances in a placement group.
  - 使用 Amazon Simple Workflow (SWF) 管理评估、数据和元数据的移动 在置放群组中使用 G2 实例的自动扩展组。
- **C.** Use Amazon Simple Workflow (SWF) to manages assessments movement of data & meta-data Use an auto-scaling group of C3 instances with SR-IOV (Single Root 1/0 Virtualization).
  - 使用 Amazon Simple Workflow (SWF) 管理数据和元数据的评估移动 使用具有 SR-IOV（单根 1/0 虚拟化）的自动扩展 C3 实例组。
- **D.** Use AWS data Pipeline to manage movement of data & meta-data and assessments use autoscaling group of C3 with SR-IOV (Single Root 1/0 virtualization).
  - 使用 AWS data Pipeline 管理数据和元数据的移动，并使用带有 SR-IOV（单根 1/0 虚拟化）的 C3 自动缩放组进行评估。

**正确答案 / Answer: `B`**


---

## Question 79

**EN** You are designing Internet connectivity for your VPC. The Web servers must be available on the Internet. The application must have a highly available architecture. Which alternatives should you consider? (Choose 2 answers)

**中** 您正在为您的 VPC 设计 Internet 连接。 Web 服务器必须在 Internet 上可用。应用程序必须具有高可用的架构。您应该考虑哪些替代方案？ （选择 2 个答案）

- **A.** Configure a NAT instance in your VPC Create a default route via the NAT instance and associate it with all subnets Configure a DNS A record that points to the NAT instance public IP address.
  - 在 VPC 中配置 NAT 实例 通过 NAT 实例创建默认路由并将其与所有子网关联 配置指向 NAT 实例公共 IP 地址的 DNS A 记录。
- **B.** Configure a CloudFront distribution and configure the origin to point to the private IP addresses of your Web servers Configure a Route 53 CNAME record to your CloudFront distribution.
  - 配置 CloudFront 分配并将源配置为指向您的 Web 服务器的私有 IP 地址 将 Route 53 CNAME 记录配置到您的 CloudFront 分配。
- **C.** Place all your web servers behind EL8 Configure a Route 53 CNAME to point to the ELB DNS name.
  - 将所有 Web 服务器置于 EL8 后面 配置 Route 53 CNAME 以指向 ELB DNS 名称。
- **D.** Assign EIPs to all web servers. Configure a Route 53 record set with all EIPs. With health checks and DNS failover.
  - 将 EIP 分配给所有 Web 服务器。配置包含所有 EIP 的 Route 53 记录集。具有健康检查和 DNS 故障转移功能。
- **E.** Configure ELB with an EIP Place all your Web servers behind ELB Configure a Route 53 A record that points to the EIP.
  - 使用 EIP 配置 ELB 将所有 Web 服务器置于 ELB 后面 配置指向 EIP 的 Route 53 A 记录。

**正确答案 / Answer: `C, D`**


---

## Question 80

**EN** You need to configure an Amazon S3 bucket to serve static assets for your public-facing web application. Which methods ensure that all objects uploaded to the bucket are set to public read? (Choose 2 answers)

**中** 您需要配置 Amazon S3 存储桶来为面向公众的 Web 应用程序提供静态资产。哪些方法可以确保上传到存储桶的所有对象都设置为公共读取？ （选择 2 个答案）

- **A.** Set permissions on the object to public read during upload.
  - 将对象的权限设置为上传期间公开读取。
- **B.** Configure the bucket ACL to set all objects to public read.
  - 配置桶 ACL，将所有对象设置为公开读取。
- **C.** Configure the bucket policy to set all objects to public read.
  - 配置存储桶策略，将所有对象设置为公共读取。
- **D.** Use AWS Identity and Access Management roles to set the bucket to public read.
  - 使用 AWS Identity and Access Management 角色将存储桶设置为公共读取。
- **E.** Amazon S3 objects default to public read, so no action is needed.
  - Amazon S3 对象默认为公共读取，因此无需执行任何操作。

**正确答案 / Answer: `A, C`**


---

## Question 81

**EN** A major customer has asked you to set up his AWS infrastructure so that it will be easy to recover in the case of a disaster of some sort. Which of the following is important when thinking about being able to quickly launch resources in AWS to ensure business continuity in case of a disaster?

**中** 一位主要客户要求您设置他的 AWS 基础设施，以便在发生某种灾难时能够轻松恢复。在考虑能够在 AWS 中快速启动资源以确保发生灾难时的业务连续性时，以下哪一项很重要？

- **A.** Create and maintain AMIs of key servers where fast recovery is required.
  - 创建和维护需要快速恢复的关键服务器的 AMI。
- **B.** Regularly run your servers, test them, and apply any software updates and configuration changes.
  - 定期运行您的服务器、测试它们并应用所有软件更新和配置更改。
- **C.** All items listed here are important when thinking about disaster recovery.
  - 在考虑灾难恢复时，此处列出的所有项目都很重要。
- **D.** Ensure that you have all supporting custom software packages available in AWS.
  - 确保您在 AWS 中拥有所有可用的支持自定义软件包。

**正确答案 / Answer: `C`**


---

## Question 82

**EN** You are developing a new mobile application and are considering storing user preferences in AWS. This would provide a more uniform cross-device experience to users using multiple mobile devices to access the application. The preference data for each user is estimated to be 50KB in size. Additionally, 5 million customers are expected to use the application on a regular basis. The solution needs to be cost-effective, highly available, scalable and secure. How would you design a solution to meet the above requirements?

**中** 您正在开发一个新的移动应用程序，并考虑在 AWS 中存储用户首选项。这将为使用多个移动设备访问应用程序的用户提供更统一的跨设备体验。每个用户的偏好数据大小估计为 50KB。此外，预计将有 500 万客户定期使用该应用程序。该解决方案需要具有成本效益、高可用性、可扩展性和安全性。您将如何设计解决方案来满足上述要求？

- **A.** Setup an RDS MySQL instance in 2 Availability Zones to store the user preference data. Deploy a public facing application on a server in front of the database to manage security and access credentials.
  - 在 2 个可用区中设置一个 RDS MySQL 实例来存储用户偏好数据。在数据库前面的服务器上部署面向公众的应用程序，以管理安全性和访问凭据。
- **B.** Setup a DynamoDB table with an item for each user having the necessary attributes to hold the user preferences. The mobile application will query the user preferences directly from the DynamoDB table. Utilize STS, Web Identity Federation, and DynamoDB Fine Grained Access Control to authenticate and authorize access.
  - 为每个用户设置一个 DynamoDB 表，其中包含一个具有保存用户首选项所需属性的项目。移动应用程序将直接从 DynamoDB 表查询用户首选项。利用 STS、Web Identity Federation 和 DynamoDB 细粒度访问控制来验证和授权访问。
- **C.** Setup an RDS MySQL instance with multiple read replicas in 2 Availability Zones to store the user preference data. The mobile application will query the user preferences from the read replicas. Leverage the MySQL user management and access privilege system to manage security and access credentials.
  - 在 2 个可用区中设置具有多个只读副本的 RDS MySQL 实例来存储用户首选项数据。移动应用程序将从只读副本中查询用户偏好。利用 MySQL 用户管理和访问权限系统来管理安全和访问凭据。
- **D.** Store the user preference data in S3. Setup a DynamoDB table with an item for each user and an item attribute pointing to the user's S3 object. The mobile application will retrieve the S3 URL from DynamoDB and then access the S3 object directly. Utilize STS, Web identity Federation, and S3 ACLs to authenticate and authorize access.
  - 将用户偏好数据存储在 S3 中。设置一个 DynamoDB 表，其中包含每个用户的项目以及指向用户的 S3 对象的项目属性。移动应用程序将从 DynamoDB 检索 S3 URL，然后直接访问 S3 对象。利用 STS、Web 身份联合和 S3 ACL 来验证和授权访问。

**正确答案 / Answer: `B`**


---

## Question 83

**EN** In the Amazon RDS which uses the SQL Server engine, what is the maximum size for a Microsoft SQL Server DB Instance with SQL Server Express edition?

**中** 在使用 SQL Server 引擎的 Amazon RDS 中，SQL Server Express 版本的 Microsoft SQL Server 数据库实例的最大大小是多少？

- **A.** 10GB per DB.
  - 每个数据库 10GB。
- **B.** 100GB per DB.
  - 每个数据库 100GB。
- **C.** 2TB per DB.
  - 每个数据库 2TB。
- **D.** 1TB per DB.
  - 每个数据库 1TB。

**正确答案 / Answer: `A`**


---

## Question 84

**EN** You have deployed a web application targeting a global audience across multiple AWS Regions under the domain name.example.com. You decide to use Route 53 Latency-Based Routing to serve web requests to users from the region closest to the user. To provide business continuity in the event of server downtime you configure weighted record sets associated with two web servers in separate Availability Zones per region. During a DR test you notice that when you disable all web servers in one of the regions Route 53 does not automatically direct all users to the other region. What could be happening? (Choose 2 answers)

**中** 您已在域名.example.com 下跨多个 AWS 区域部署了面向全球受众的 Web 应用程序。您决定使用 Route 53 基于延迟的路由来为距离用户最近的区域的用户提供 Web 请求。为了在服务器停机时提供业务连续性，您可以配置与每个区域不同可用区中的两个 Web 服务器关联的加权记录集。在 DR 测试期间，您会注意到，当您禁用其中一个区域中的所有 Web 服务器时，Route 53 不会自动将所有用户定向到另一区域。可能会发生什么？ （选择 2 个答案）

- **A.** Latency resource record sets cannot be used in combination with weighted resource record sets.
  - 延迟资源记录集不能与加权资源记录集结合使用。
- **B.** You did not setup an HTTP health check for one or more of the weighted resource record sets associated with the disabled web servers.
  - 您没有为与禁用的 Web 服务器关联的一个或多个加权资源记录集设置 HTTP 运行状况检查。
- **C.** The value of the weight associated with the latency alias resource record set in the region with the disabled servers is higher than the weight for the other region.
  - 与服务器已禁用的区域中的延迟别名资源记录集关联的权重值高于其他区域的权重。
- **D.** One of the two working web servers in the other region did not pass its HTTP health check.
  - 另一个区域中的两个正在运行的 Web 服务器之一未通过其 HTTP 运行状况检查。
- **E.** You did not set 'Evaluate Target Health' to 'Yes' on the latency alias resource record set associated with example com in the region where you disabled the servers.
  - 您未在与禁用服务器的区域中的示例 com 关联的延迟别名资源记录集上将“评估目标运行状况”设置为“是”。

**正确答案 / Answer: `B, E`**


---

## Question 85

**EN** Amazon EBS provides the ability to create backups of any Amazon EC2 volume into what is known as [...].

**中** Amazon EBS 提供了将任何 Amazon EC2 卷创建备份到所谓的 [...] 的能力。

- **A.** snapshots.
  - 快照。
- **B.** images.
  - 图像。
- **C.** instance backups.
  - 实例备份。
- **D.** mirrors.
  - 镜子。

**正确答案 / Answer: `A`**


---

## Question 86

**EN** You've been hired to enhance the overall security posture for a very large e-commerce site. They have a well architected multi-tier application running in a VPC that uses ELBs in front of both the web and the app tier with static assets served directly from S3. They are using a combination of RDS and DynamoDB for their dynamic data and then archiving nightly into S3 for further processing with EMR. They are concerned because they found questionable log entries and suspect someone is attempting to gain unauthorized access. Which approach provides a cost effective scalable mitigation to this kind of attack?

**中** 您受雇来增强一家大型电子商务网站的整体安全状况。他们在 VPC 中运行一个架构良好的多层应用程序，该应用程序在 Web 和应用程序层前面使用 ELB，并直接从 S3 提供静态资产。他们将 RDS 和 DynamoDB 组合用于动态数据，然后每晚归档到 S3 中，以便使用 EMR 进行进一步处理。他们之所以担心，是因为他们发现了可疑的日志条目，并怀疑有人试图获得未经授权的访问。哪种方法可以为此类攻击提供经济高效、可扩展的缓解措施？

- **A.** Recommend that they lease space at a DirectConnect partner location and establish a 1G DirectConnect connection to their VPC. They would then establish Internet connectivity into their space, filter the traffic in hardware Web Application Firewall (WAF), and then pass the traffic through the DirectConnect connection into their application running in their VPC.
  - 建议他们在 DirectConnect 合作伙伴位置租用空间并建立与其 VPC 的 1G DirectConnect 连接。然后，他们将在其空间中建立互联网连接，在硬件 Web 应用程序防火墙 (WAF) 中过滤流量，然后通过 DirectConnect 连接将流量传递到在其 VPC 中运行的应用程序。
- **B.** Add previously identified hostile source IPs as an explicit INBOUND DENY NACL to the web tier sub net.
  - 将先前识别的恶意源 IP 作为显式 INBOUND DENY NACL 添加到 Web 层子网。
- **C.** Add a WAF tier by creating a new ELB and an AutoScaling group of EC2 Instances running a host based WAF. They would redirect Route 53 to resolve to the new WAF tier ELB. The WAF tier would then pass the traffic to the current web tier. The web tier Security Groups would be updated to only allow traffic from the WAF tier Security Group.
  - 通过创建新的 ELB 和运行基于主机的 WAF 的 EC2 实例 AutoScaling 组来添加 WAF 层。他们将重定向 Route 53 以解析到新的 WAF 层 ELB。然后，WAF 层会将流量传递到当前的 Web 层。 Web 层安全组将更新为仅允许来自 WAF 层安全组的流量。
- **D.** Remove all but TLS 1.2 from the web tier ELB and enable Advanced Protocol Filtering. This will enable the ELB itself to perform WAF functionality.
  - 从 Web 层 ELB 中删除除 TLS 1.2 之外的所有内容，并启用高级协议过滤。这将使 ELB 本身能够执行 WAF 功能。

**正确答案 / Answer: `C`**


---

## Question 87

**EN** You are designing the network infrastructure for an application server in Amazon VPC. Users will access all the application instances from the Internet as well as from an on-premises network. The on-premises network is connected to your VPC over an AWS Direct Connect link. How would you design routing to meet the above requirements?

**中** 您正在为 Amazon VPC 中的应用程序服务器设计网络基础设施。用户将从 Internet 以及本地网络访问所有应用程序实例。本地网络通过 AWS Direct Connect 链路连接到您的 VPC。您将如何设计路由来满足上述要求？

- **A.** Configure a single routing Table with a default route via the Internet gateway. Propagate a default route via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.
  - 通过 Internet 网关配置具有默认路由的单个路由表。通过 AWS Direct Connect 客户路由器上的 BGP 传播默认路由。将路由表与所有 VPC 子网关联。
- **B.** Configure a single routing table with a default route via the internet gateway. Propagate specific routes for the on-premises networks via BGP on the AWS Direct Connect customer router. Associate the routing table with all VPC subnets.
  - 通过互联网网关配置具有默认路由的单个路由表。通过 AWS Direct Connect 客户路由器上的 BGP 传播本地网络的特定路由。将路由表与所有 VPC 子网关联。
- **C.** Configure a single routing table with two default routes: one to the internet via an Internet gateway, the other to the on-premises network via the VPN gateway. Use this routing table across all subnets in your VPC.
  - 配置具有两条默认路由的单个路由表：一条通过 Internet 网关到达 Internet，另一条通过 VPN 网关到达本地网络。在 VPC 中的所有子网中使用此路由表。
- **D.** Configure two routing tables: one that has a default route via the Internet gateway and another that has a default route via the VPN gateway. Associate both routing tables with each VPC subnet.
  - 配置两个路由表：一个具有通过 Internet 网关的默认路由，另一个具有通过 VPN 网关的默认路由。将两个路由表与每个 VPC 子网关联。

**正确答案 / Answer: `A`**


---

## Question 88

**EN** You have multiple VPN connections and want to provide secure communication between sites using the AWS VPN CloudHub. Which statement is the most accurate in describing what you must do to set this up correctly?

**中** 您有多个 VPN 连接，并希望使用 AWS VPN CloudHub 在站点之间提供安全通信。哪种说法最准确地描述了您必须执行哪些操作才能正确设置此设置？

- **A.** Create a virtual private gateway with multiple customer gateways, each with unique Border Gateway Protocol (BGP) Autonomous System Numbers (ASNs).
  - 创建具有多个客户网关的虚拟专用网关，每个网关都具有唯一的边界网关协议 (BGP) 自治系统编号 (ASN)。
- **B.** Create a virtual private gateway with multiple customer gateways, each with a unique set of keys.
  - 创建具有多个客户网关的虚拟专用网关，每个网关都有一组唯一的密钥。
- **C.** Create a virtual public gateway with multiple customer gateways, each with a unique Private subnet.
  - 创建具有多个客户网关的虚拟公共网关，每个网关都有一个唯一的私有子网。
- **D.** Create a virtual private gateway with multiple customer gateways, each with unique subnet id.
  - 创建具有多个客户网关的虚拟专用网关，每个网关都有唯一的子网 ID。

**正确答案 / Answer: `A`**


---

## Question 89

**EN** A user is aware that a huge download is occurring on his instance. He has already set the Auto Scaling policy to increase the instance count when the network I/O increases beyond a certain limit. How can the user ensure that this temporary event does not result in scaling?

**中** 用户意识到他的实例上正在发生大量下载。他已经设置了 Auto Scaling 策略，以在网络 I/O 增加超过一定限制时增加实例数量。用户如何确保这个临时事件不会导致扩展？

- **A.** The network I/O are not affected during data download.
  - 数据下载期间网络 I/O 不受影响。
- **B.** The policy cannot be set on the network I/O.
  - 无法在网络 I/O 上设置策略。
- **C.** There is no way the user can stop scaling as it is already configured.
  - 用户无法停止缩放，因为它已经配置好了。
- **D.** Suspend scaling.
  - 暂停缩放。

**正确答案 / Answer: `D`**


---

## Question 90

**EN** The Amazon EC2 web service can be accessed using the [...] web services messaging protocol. This interface is described by a Web Services Description Language (WSDL) document.

**中** 可以使用 Web 服务消息传递协议来访问 Amazon EC2 Web 服务。该接口由 Web 服务描述语言 (WSDL) 文档进行描述。

- **A.** SOAP.
  - 肥皂。
- **B.** DCOM.
  - DCOM。
- **C.** CORBA.
  - CORBA。
- **D.** XML-RPC.
  - XML-RPC。

**正确答案 / Answer: `A`**


---

## Question 91

**EN** Which of the following are true regarding encrypted Amazon Elastic Block Store (EBS) volumes? (Choose 2 answers)

**中** 关于加密的 Amazon Elastic Block Store (EBS) 卷，以下哪一项是正确的？ （选择 2 个答案）

- **A.** Supported on all Amazon EBS volume types.
  - 所有 Amazon EBS 卷类型均受支持。
- **B.** Snapshots are automatically encrypted.
  - 快照会自动加密。
- **C.** Available to all instance types.
  - 适用于所有实例类型。
- **D.** Existing volumes can be encrypted.
  - 可以对现有卷进行加密。
- **E.** Shared volumes can be encrypted.
  - 共享卷可以加密。

**正确答案 / Answer: `A, B`**


---

## Question 92

**EN** Is Federated Storage Engine currently supported by Amazon RDS for MySQL?

**中** Amazon RDS for MySQL 目前支持联合存储引擎吗？

- **A.** Only for Oracle RDS instances.
  - 仅适用于 Oracle RDS 实例。
- **B.** Yes.
  - 是的。
- **C.** No.
  - 不。
- **D.** Only in VPC.
  - 仅在 VPC 中。

**正确答案 / Answer: `C`**


---

## Question 93

**EN** While creating the snapshots using the API, which Action should I be using?

**中** 使用 API 创建快照时，我应该使用哪个操作？

- **A.** MakeSnapShot.
  - 制作快照。
- **B.** FreshSnapshot.
  - 新鲜快照。
- **C.** DeploySnapshot.
  - 部署快照。
- **D.** CreateSnapshot.
  - 创建快照。

**正确答案 / Answer: `D`**


---

## Question 94

**EN** A customer needs to capture all client connection information from their load balancer every five minutes. The company wants to use this data for analyzing traffic patterns and troubleshooting their applications. Which of the following options meets the customer requirements?

**中** 客户需要每五分钟从负载均衡器捕获所有客户端连接信息。该公司希望使用这些数据来分析流量模式并对其应用程序进行故障排除。以下哪个选项可以满足客户的要求？

- **A.** Enable AWS CloudTrail for the load balancer.
  - 为负载均衡器启用 AWS CloudTrail。
- **B.** Enable access logs on the load balancer.
  - 在负载均衡器上启用访问日志。
- **C.** Install the Amazon CloudWatch Logs agent on the load balancer.
  - 在负载均衡器上安装 Amazon CloudWatch 日志代理。
- **D.** Enable Amazon CloudWatch metrics on the load balancer.
  - 在负载均衡器上启用 Amazon CloudWatch 指标。

**正确答案 / Answer: `A`**


---

## Question 95

**EN** Will my standby RDS instance be in the same Region as my primary?

**中** 我的备用 RDS 实例是否与主实例位于同一区域？

- **A.** Only for Oracle RDS types.
  - 仅适用于 Oracle RDS 类型。
- **B.** Yes.
  - 是的。
- **C.** Only if configured at launch.
  - 仅当在启动时配置。
- **D.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 96

**EN** If I want my instance to run on a single-tenant hardware, which value do I have to set the instance's tenancy attribute to?

**中** 如果我希望我的实例在单租户硬件上运行，我必须将实例的租赁属性设置为哪个值？

- **A.** Dedicated.
  - 投入的。
- **B.** Isolated.
  - 孤立。
- **C.** One.
  - 一。
- **D.** Reserved.
  - 预订的。

**正确答案 / Answer: `A`**


---

## Question 97

**EN** Can the string value of 'Key' be prefixed with :aws:'?

**中** 'Key' 的字符串值可以以 :aws:' 为前缀吗？

- **A.** Only in GovCloud.
  - 仅在 GovCloud 中。
- **B.** Only for S3 not EC2.
  - 仅适用于 S3，不适用于 EC2。
- **C.** Yes.
  - 是的。
- **D.** No.
  - 不。

**正确答案 / Answer: `D`**


---

## Question 98

**EN** A user wants to increase the durability and availability of the EBS volume. Which of the below mentioned actions should he perform?

**中** 用户希望提高 EBS 卷的耐用性和可用性。他应该执行以下哪项操作？

- **A.** Take regular snapshots.
  - 定期拍摄快照。
- **B.** Create an AM.
  - 创建一个 AM。
- **C.** Create EBS with higher capacity.
  - 创建容量更大的 EBS。
- **D.** Access EBS regularly.
  - 定期访问 EBS。

**正确答案 / Answer: `A`**


---

## Question 99

**EN** What does Amazon RDS stand for?

**中** Amazon RDS 代表什么？

- **A.** Regional Data Server.
  - 区域数据服务器。
- **B.** Relational Database Service.
  - 关系数据库服务。
- **C.** Nothing.
  - 没有什么。
- **D.** Regional Database Service.
  - 区域数据库服务。

**正确答案 / Answer: `B`**


---

## Question 100

**EN** You have been asked to set up monitoring of your network and you have decided that Cloudwatch would be the best service to use. Amazon CloudWatch monitors your Amazon Web Services (AWS) resources and the applications you run on AWS in real-time. You can use CloudWatch to collect and track metrics, which are the variables you want to measure for your resources and applications. Which of the following items listed can AWS Cloudwatch monitor?

**中** 您被要求设置网络监控，并且您已确定 Cloudwatch 将是最好使用的服务。 Amazon CloudWatch 实时监控您的 Amazon Web Services (AWS) 资源以及您在 AWS 上运行的应用程序。您可以使用 CloudWatch 收集和跟踪指标，这些指标是您想要衡量资源和应用程序的变量。 AWS Cloudwatch 可以监控以下列出的哪些项目？

- **A.** Log files your applications generate.
  - 您的应用程序生成的日志文件。
- **B.** All of the items listed on this page.
  - 此页面上列出的所有项目。
- **C.** System-wide visibility into resource utilization, application performance, and operational health.
  - 对资源利用率、应用程序性能和运行状况的系统范围内的可见性。
- **D.** Custom metrics generated by your applications and services.
  - 由您的应用程序和服务生成的自定义指标。

**正确答案 / Answer: `B`**


---

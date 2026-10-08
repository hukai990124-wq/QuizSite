# AWS CLF-C02 练习卷 · 第 03 套

> 50 题 · 中英对照 · 练习题来源为 MIT 许可的 CloudCertPrep；非 AWS 官方题目。中文为机器翻译。

## Question 1 · Domain 2

**EN** What does it mean to grant least privilege to AWS IAM users?

**中** 向 AWS IAM 用户授予最低权限是什么意思？

- **A.** It is granting permissions to a single user only
  - 它仅向单个用户授予权限
- **B.** It is granting permissions using AWS IAM policies only
  - 它仅使用 AWS IAM 策略授予权限
- **C.** It is granting AdministratorAccess policy permissions to trustworthy users
  - 它将 AdministratorAccess 策略权限授予值得信赖的用户
- **D.** It is granting only the permissions required to perform a given task
  - 它仅授予执行给定任务所需的权限

**答案 / Answer: `D`**

Least privilege means granting only the minimum permissions required to perform a specific task, ensuring that IAM users cannot access resources or perform actions beyond what their job requires, minimizing the risk of misuse.
Granting permissions to a single user only describes individual rather than shared access, but does not capture the concept of scoping permissions to the minimum required; least privilege is about the breadth of permissions granted rather than the number of users receiving them. Granting permissions using IAM policies only is a description of the mechanism for assigning permissions in AWS, but does not define the principle of least privilege, which is about minimizing the scope of those permissions rather than the method of granting them. Granting AdministratorAccess permissions to trustworthy users is the opposite of least privilege; administrator access grants unrestricted access to all AWS services and resources, which far exceeds the minimum permissions needed for most tasks regardless of how trustworthy the user is.

最小权限意味着仅授予执行特定任务所需的最低权限，确保 IAM 用户无法访问资源或执行超出其工作要求的操作，从而最大限度地降低误用风险。
向单个用户授予权限仅描述个人访问而不是共享访问，但并未体现将权限范围限定为所需的最低限度的概念；最小权限是指授予权限的范围，而不是接收权限的用户数量。仅使用 IAM 策略授予权限是对 AWS 中分配权限的机制的描述，但没有定义最小权限原则，即最小化这些权限的范围而不是授予权限的方法。向值得信赖的用户授予 AdministratorAccess 权限与最小权限相反；管理员访问权限授予对所有 AWS 服务和资源的不受限制的访问权限，这远远超出了大多数任务所需的最低权限，无论用户的可信程度如何。

---

## Question 2 · Domain 2

**EN** What does Amazon GuardDuty do to protect AWS accounts and workloads?

**中** Amazon GuardDuty 如何保护 AWS 账户和工作负载？

- **A.** Notifies AWS customers about abuse events once they are reported
  - 一旦报告滥用事件，立即通知 AWS 客户
- **B.** Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise
  - 持续监控 AWS 基础设施并帮助检测攻击者侦察或账户泄露等威胁
- **C.** Helps AWS customers identify the root cause of potential security issues
  - 帮助 AWS 客户识别潜在安全问题的根本原因
- **D.** Checks security groups for rules that allow unrestricted access to AWS resources
  - 检查安全组中是否存在允许无限制访问 AWS 资源的规则

**答案 / Answer: `B`**

Amazon GuardDuty is a threat detection service that continuously monitors AWS accounts and workloads using machine learning and threat intelligence to identify suspicious activity such as attacker reconnaissance, compromised instances, or unusual API calls.
Notifying customers about abuse events once they are reported is the function of the AWS Abuse Team, which handles reports of AWS resources being used for malicious activity and communicates with affected account holders, rather than a capability of GuardDuty. Helping customers identify the root cause of potential security issues describes Amazon Detective, which analyzes and visualises security data from GuardDuty and CloudTrail to trace the origin and scope of suspicious activity rather than detecting threats in real time. Checking security groups for rules that allow unrestricted access to AWS resources is a function of AWS Trusted Advisor, which performs security checks including identification of overly permissive security group configurations, not GuardDuty.

Amazon GuardDuty 是一项威胁检测服务，它使用机器学习和威胁情报持续监控 AWS 账户和工作负载，以识别可疑活动，例如攻击者侦察、受损实例或异常 API 调用。
一旦报告滥用事件，通知客户是 AWS 滥用团队的职责，该团队负责处理有关 AWS 资源被用于恶意活动的报告并与受影响的账户持有者进行通信，而不是 GuardDuty 的功能。 Amazon Detective 描述了帮助客户识别潜在安全问题的根本原因，它分析和可视化来自 GuardDuty 和 CloudTrail 的安全数据，以追踪可疑活动的起源和范围，而不是实时检测威胁。检查安全组中是否存在允许不受限制地访问 AWS 资源的规则是 AWS Trusted Advisor 的一项功能，它执行安全检查，包括识别过于宽松的安全组配置，而不是 GuardDuty。

---

## Question 3 · Domain 2

**EN** Which AWS service would you use to obtain compliance reports and certificates?

**中** 您将使用哪种 AWS 服务来获取合规性报告和证书？

- **A.** AWS Artifact
  - AWS Artifact
- **B.** AWS Lambda
  - AWS Lambda
- **C.** Amazon Inspector
  - Amazon Inspector
- **D.** AWS Certificate Manager
  - AWS 证书管理器

**答案 / Answer: `A`**

AWS Artifact provides on-demand access to AWS compliance reports and certifications including SOC, PCI DSS, ISO, and HIPAA documents, available directly from the AWS Management Console without needing to engage AWS support.
AWS Lambda is a serverless compute service that runs code in response to events without requiring server provisioning or management, and is a compute service with no connection to compliance reports or certification documentation. Amazon Inspector is an automated security assessment service that scans EC2 instances and container images for software vulnerabilities and network misconfigurations, and produces customer-specific vulnerability findings rather than AWS compliance certifications. AWS Certificate Manager provisions and manages SSL/TLS certificates for use with AWS services, and is a certificate management service rather than a repository of compliance reports or regulatory certifications.

AWS Artifact 提供对 AWS 合规性报告和认证的按需访问，包括 SOC、PCI DSS、ISO 和 HIPAA 文档，可直接从 AWS 管理控制台获取，无需使用 AWS Support。
AWS Lambda 是一种无服务器计算服务，可运行代码来响应事件，无需服务器配置或管理，并且是一种与合规性报告或认证文档无关的计算服务。 Amazon Inspector 是一项自动化安全评估服务，可扫描 EC2 实例和容器映像是否存在软件漏洞和网络配置错误，并生成特定于客户的漏洞结果，而不是 AWS 合规性认证。 AWS Certificate Manager 预置和管理用于 AWS 服务的 SSL/TLS 证书，它是一种证书管理服务，而不是合规性报告或监管认证的存储库。

---

## Question 4 · Domain 2

**EN** Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?

**中** 在 AWS 共担责任模型下，以下哪项是 AWS 云安全性的示例？

- **A.** Managing edge locations
  - 管理边缘站点
- **B.** Physical security
  - 物理安全
- **C.** Firewall configuration
  - 防火墙配置
- **D.** Global infrastructure
  - 全球基础设施

**答案 / Answer: `C`**

Firewall configuration through security groups and network ACLs, which customers define to control inbound and outbound traffic to their resources, is the customer's responsibility and is an example of security performed within the cloud on the customer's side of the shared responsibility model.
Managing edge locations is AWS's responsibility; AWS operates the global network of edge locations for CloudFront and other services, and customers benefit from these locations without being responsible for their management or security. Physical security of AWS data centers and hardware is entirely AWS's responsibility as customers never have physical access to the facilities where AWS infrastructure runs. Global infrastructure, including the physical data centers, Availability Zones, and Regions, is designed, built, and operated by AWS, and maintaining its security and availability is an AWS responsibility rather than a customer one.

通过安全组和网络 ACL 进行防火墙配置（客户定义这些安全组和网络 ACL 来控制其资源的入站和出站流量）是客户的责任，也是在共享责任模型的客户端云中执行安全性的一个示例。
管理边缘站点是 AWS 的责任； AWS 为 CloudFront 和其他服务运营全球边缘站点网络，客户可以从这些站点中受益，而无需对其管理或安全负责。 AWS 数据中心和硬件的物理安全完全由 AWS 负责，因为客户永远无法物理访问 AWS 基础设施运行的设施。全球基础设施（包括物理数据中心、可用区和区域）由 AWS 设计、构建和运营，维护其安全性和可用性是 AWS 的责任，而不是客户的责任。

---

## Question 5 · Domain 4 · Select 2

**EN** Which methods can be used to identify AWS costs by departments?

**中** 可以使用哪些方法来确定各部门的 AWS 成本？

- **A.** Enable multi-factor authentication for the AWS account root user
  - 为 AWS 账户根用户启用多重身份验证
- **B.** Create separate accounts for each department
  - 为每个部门创建单独的帐户
- **C.** Use Reserved Instances whenever possible
  - 尽可能使用预留实例
- **D.** Use tags to associate each instance with a particular department
  - 使用标签将每个实例与特定部门相关联
- **E.** Pay bills using purchase orders
  - 使用采购订单支付账单

**答案 / Answer: `B,D`**

Creating separate AWS accounts per department isolates costs naturally as all charges within each account belong to that department, and applying tags to resources allows cost allocation by department within shared accounts through Cost Explorer reports.
Enabling multi-factor authentication for the AWS account root user is a security best practice for protecting account access, and has no connection to identifying or attributing costs by department. Using Reserved Instances reduces compute costs through long-term commitments, and while this benefits the overall bill it does not provide a mechanism for identifying or separating costs by department. Paying bills using purchase orders is a payment method for settling AWS invoices, and has no connection to identifying which department incurred which costs.

每个部门创建单独的 AWS 账户可以自然地隔离成本，因为每个账户内的所有费用都属于该部门，并且将标签应用于资源可以通过 Cost Explorer 报告在共享账户内按部门分配成本。
为 AWS 账户根用户启用多重身份验证是保护账户访问的安全最佳实践，与按部门识别或分配成本无关。使用预留实例可以通过长期承诺降低计算成本，虽然这有利于整体账单，但它没有提供按部门识别或分离成本的机制。使用采购订单支付账单是一种结算 AWS 发票的付款方式，与识别哪个部门产生了哪些成本无关。

---

## Question 6 · Domain 4

**EN** Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?

**中** 哪个 AWS 功能允许公司利用跨多个成员账户的服务使用层级？

- **A.** Service control policies (SCPs)
  - 服务控制策略 (SCP)
- **B.** Consolidated billing
  - 合并计费
- **C.** All Upfront Reserved Instances
  - 所有预先预留的实例
- **D.** AWS Cost Explorer
  - AWS Cost Explorer

**答案 / Answer: `B`**

Consolidated billing through AWS Organizations combines usage across all member accounts, allowing the organization to reach higher volume tiers and qualify for usage-based discounts that individual accounts would not achieve independently.
Service Control Policies are permission guardrails applied through AWS Organizations that restrict which AWS services and actions are available within member accounts, and are a governance mechanism rather than a feature that enables usage tier benefits. All Upfront Reserved Instances are a purchasing commitment where you pay the full cost of the reservation at the start of the term in exchange for the maximum discount, and apply to a single account rather than aggregating usage across multiple accounts. AWS Cost Explorer provides interactive visualisations and analysis of AWS spending patterns over time, and is a cost analysis tool rather than a feature that aggregates usage across accounts to qualify for volume pricing tiers.

通过 AWS Organizations 的合并计费结合了所有成员帐户的使用情况，使组织能够达到更高的数量级别，并有资格获得个人帐户无法独立实现的基于使用的折扣。
服务控制策略是通过 AWS Organizations 应用的权限护栏，限制成员账户中可用的 AWS 服务和操作，并且是一种治理机制，而不是实现使用层优势的功能。所有预付预留实例都是一种购买承诺，您在期限开始时支付预留的全部费用，以换取最大折扣，并适用于单个账户，而不是汇总多个账户的使用情况。 AWS Cost Explorer 提供随时间变化的 AWS 支出模式的交互式可视化和分析，它是一种成本分析工具，而不是聚合跨账户的使用情况以获得批量定价等级的功能。

---

## Question 7 · Domain 2 · Select 2

**EN** Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS?

**中** 哪些 AWS 服务或功能可以通过阻止来自特定网络对 AWS 上的 Web 应用程序的请求来增强网络安全性？

- **A.** AWS WAF
  - AWS WAF
- **B.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **C.** AWS Direct Connect
  - AWS Direct Connect
- **D.** AWS Organizations
  - AWS Organizations
- **E.** Network ACLs
  - 网络 ACL

**答案 / Answer: `A,E`**

AWS WAF creates rules to block requests from specific IP addresses, networks, or matching certain patterns, filtering malicious web traffic at the application layer, and Network ACLs are stateless subnet-level firewalls that can block traffic from specific IP ranges at the network layer. Both can enhance network security by blocking requests from particular networks.
AWS Trusted Advisor provides automated recommendations across security, cost, performance, and fault tolerance categories, and while it identifies insecure configurations, it does not itself block network requests or actively enforce traffic rules. AWS Direct Connect provides a dedicated private network connection between on-premises data centers and AWS, and is a connectivity service rather than a tool for blocking or filtering web application traffic. AWS Organizations manages multiple AWS accounts under a central structure for governance and consolidated billing, and does not have the capability to block network traffic from specific IP ranges for web applications.

AWS WAF 创建规则来阻止来自特定 IP 地址、网络或匹配某些模式的请求，从而在应用层过滤恶意 Web 流量，而网络 ACL 是无状态子网级防火墙，可以在网络层阻止来自特定 IP 范围的流量。两者都可以通过阻止来自特定网络的请求来增强网络安全性。
AWS Trusted Advisor 提供跨安全、成本、性能和容错类别的自动化建议，虽然它可以识别不安全的配置，但它本身不会阻止网络请求或主动强制执行流量规则。 AWS Direct Connect 在本地数据中心和 AWS 之间提供专用的专用网络连接，它是一种连接服务，而不是用于阻止或过滤 Web 应用程序流量的工具。 AWS Organizations 在一个中央结构下管理多个 AWS 账户以进行治理和整合计费，并且无法阻止来自 Web 应用程序的特定 IP 范围的网络流量。

---

## Question 8 · Domain 1

**EN** Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?

**中** 以代码形式执行操作是支持 AWS 架构完善框架的哪一个支柱的设计原则？

- **A.** Performance efficiency
  - 性能效率
- **B.** Operational excellence
  - 卓越运营
- **C.** Reliability
  - 可靠性
- **D.** Security
  - 安全

**答案 / Answer: `B`**

Performing operations as code is an explicit design principle of the Operational Excellence pillar, which focuses on running and improving operations by automating processes and responding to events programmatically.
Performance Efficiency focuses on using compute resources efficiently to meet system requirements, not on automating operational processes. Reliability focuses on ensuring a workload performs its intended function correctly and consistently, with design principles around recovery and redundancy. Security focuses on protecting data, systems, and assets through controls and detective mechanisms.

将操作作为代码执行是卓越运营支柱的明确设计原则，该原则侧重于通过自动化流程和以编程方式响应事件来运行和改进操作。
性能效率侧重于有效地使用计算资源来满足系统要求，而不是自动化操作流程。可靠性侧重于确保工作负载正确且一致地执行其预期功能，并遵循围绕恢复和冗余的设计原则。安全重点是通过控制和检测机制保护数据、系统和资产。

---

## Question 9 · Domain 3

**EN** Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?

**中** 哪项 AWS 服务以低延迟和高传输速度向全球用户提供数据、视频、应用程序和 API？

- **A.** Amazon Route 53
  - Amazon Route 53
- **B.** Amazon Connect
  - 亚马逊连接
- **C.** Amazon CloudFront
  - Amazon CloudFront
- **D.** Amazon EC2
  - Amazon EC2

**答案 / Answer: `C`**

Amazon CloudFront is a global content delivery network that delivers data, videos, applications, and APIs to users worldwide with low latency and high transfer speeds through a network of edge locations.
Amazon Route 53 is a DNS and domain routing service that directs users to application endpoints based on routing policies, but it routes traffic rather than caching and delivering content at edge locations. Amazon Connect is a cloud contact center service for managing customer communications via voice and chat, and has no role in content delivery or global data transfer. Amazon EC2 provides virtual servers for running applications and workloads, but requires manual configuration to serve content globally and does not natively deliver it with low latency to users worldwide through edge locations.

Amazon CloudFront 是一个全球内容交付网络，通过边缘站点网络以低延迟和高传输速度向全球用户交付数据、视频、应用程序和 API。
Amazon Route 53 是一种 DNS 和域路由服务，可根据路由策略将用户引导至应用程序端点，但它路由流量，而不是在边缘位置缓存和交付内容。 Amazon Connect 是一项云联络中心服务，用于通过语音和聊天管理客户通信，在内容交付或全球数据传输中不发挥作用。 Amazon EC2 提供用于运行应用程序和工作负载的虚拟服务器，但需要手动配置才能在全球范围内提供内容，并且本身无法通过边缘位置以低延迟向全球用户提供内容。

---

## Question 10 · Domain 3

**EN** Which AWS networking service enables a company to create a virtual network within AWS?

**中** 哪种 AWS 网络服务使公司能够在 AWS 中创建虚拟网络？

- **A.** AWS Config
  - AWS Config
- **B.** Amazon Route 53
  - Amazon Route 53
- **C.** AWS Direct Connect
  - AWS Direct Connect
- **D.** Amazon Virtual Private Cloud (Amazon VPC)
  - 亚马逊虚拟私有云 (Amazon VPC)

**答案 / Answer: `D`**

Amazon Virtual Private Cloud (Amazon VPC) enables companies to create isolated virtual networks within AWS, with full control over IP addressing, subnets, routing, and network gateways.
AWS Config continuously tracks and records the configuration state of AWS resources to assess compliance and detect configuration changes, and is a governance and auditing tool with no capability to provision or define virtual networks. Amazon Route 53 is a DNS and traffic routing service that resolves domain names and directs users to application endpoints, and is a domain management service rather than a service for creating virtual networks within AWS. AWS Direct Connect establishes a dedicated private network connection between on-premises infrastructure and AWS, and is a hybrid connectivity service for linking external networks to AWS rather than a service for creating virtual networks within AWS itself.

Amazon Virtual Private Cloud (Amazon VPC) 使公司能够在 AWS 内创建隔离的虚拟网络，并完全控制 IP 寻址、子网、路由和网络网关。
AWS Config 持续跟踪和记录 AWS 资源的配置状态，以评估合规性并检测配置更改，并且是一种治理和审计工具，无法配置或定义虚拟网络。 Amazon Route 53 是一种 DNS 和流量路由服务，可解析域名并将用户定向到应用程序端点，并且是域管理服务，而不是用于在 AWS 中创建虚拟网络的服务。 AWS Direct Connect 在本地基础设施和 AWS 之间建立专用的专用网络连接，是一种用于将外部网络链接到 AWS 的混合连接服务，而不是用于在 AWS 本身内创建虚拟网络的服务。

---

## Question 11 · Domain 3 · Select 2

**EN** Which load balancer types are available with Elastic Load Balancing (ELB)?

**中** Elastic Load Balancing (ELB) 提供哪些负载均衡器类型？

- **A.** Public load balancers with AWS Application Auto Scaling capabilities
  - 具有 AWS Application Auto Scaling 功能的公共负载均衡器
- **B.** F5 Big-IP and Citrix NetScaler load balancers
  - F5 Big-IP 和 Citrix NetScaler 负载均衡器
- **C.** Classic Load Balancers
  - 经典负载均衡器
- **D.** Cross-zone load balancers with public and private IPs
  - 具有公共和私有 IP 的跨区域负载均衡器
- **E.** Application Load Balancers
  - 应用程序负载均衡器

**答案 / Answer: `C,E`**

Classic Load Balancers are the legacy ELB option supporting HTTP, HTTPS, and TCP traffic, and Application Load Balancers are the modern Layer 7 option for HTTP and HTTPS routing with advanced request-based routing rules, both being official ELB load balancer types.
Public load balancers with AWS Application Auto Scaling capabilities conflates two separate services and does not describe a load balancer type available within ELB. F5 Big-IP and Citrix NetScaler are third-party load balancing products that run on-premises or on EC2, not native ELB load balancer types. Cross-zone load balancers with public and private IPs describes a configuration feature of ELB rather than a distinct load balancer type.

经典负载均衡器是支持 HTTP、HTTPS 和 TCP 流量的传统 ELB 选项，而应用程序负载均衡器是用于 HTTP 和 HTTPS 路由的现代第 7 层选项，具有基于请求的高级路由规则，两者都是官方 ELB 负载均衡器类型。
具有 AWS Application Auto Scaling 功能的公共负载均衡器合并了两个单独的服务，并且不描述 ELB 中可用的负载均衡器类型。 F5 Big-IP 和 Citrix NetScaler 是在本地或 EC2 上运行的第三方负载平衡产品，而不是本机 ELB 负载平衡器类型。具有公共和私有 IP 的跨区域负载均衡器描述了 ELB 的配置功能，而不是不同的负载均衡器类型。

---

## Question 12 · Domain 2 · Select 2

**EN** Under the shared responsibility model, which of the following tasks are the responsibility of the customer?

**中** 在共担责任模式下，以下哪些任务是客户的责任？

- **A.** Maintaining the underlying Amazon EC2 hardware
  - 维护底层 Amazon EC2 硬件
- **B.** Managing the VPC network access control lists
  - 管理 VPC 网络访问控制列表
- **C.** Encrypting data in transit and at rest
  - 加密传输中和静态的数据
- **D.** Replacing failed hard disk drives
  - 更换出现故障的硬盘驱动器
- **E.** Deploying hardware in different Availability Zones
  - 在不同可用区部署硬件

**答案 / Answer: `B,C`**

Customers are responsible for managing VPC network access control lists to define inbound and outbound traffic rules at the subnet level, and for encrypting their own data in transit using TLS and at rest using services such as KMS and S3 server-side encryption.
Maintaining the underlying EC2 hardware including servers, storage, and networking infrastructure is entirely AWS's responsibility, as customers have no physical access to the data center equipment that hosts EC2 instances. Replacing failed hard disk drives is AWS's responsibility as part of managing the physical infrastructure, and customers experience this transparently through AWS's hardware redundancy and replacement processes without any action required. Deploying hardware in different Availability Zones is an AWS infrastructure responsibility; AWS designs and maintains the physical separation of AZs, while customers choose which AZ to deploy their resources in but do not control the underlying hardware deployment.

客户负责管理 VPC 网络访问控制列表，以定义子网级别的入站和出站流量规则，并使用 TLS 加密传输中的数据，并使用 KMS 和 S3 服务器端加密等服务加密静态数据。
维护底层 EC2 硬件（包括服务器、存储和网络基础设施）完全由 AWS 负责，因为客户无法物理访问托管 EC2 实例的数据中心设备。作为管理物理基础设施的一部分，更换故障硬盘驱动器是 AWS 的责任，客户可以通过 AWS 的硬件冗余和更换流程透明地体验这一点，无需任何操作。在不同可用区部署硬件是 AWS 基础设施的责任； AWS 设计并维护可用区的物理隔离，客户可以选择在哪个可用区部署资源，但不控制底层硬件部署。

---

## Question 13 · Domain 1

**EN** A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?

**中** 用户在多个可用区中部署 Amazon RDS 数据库实例。该策略涉及 AWS 架构完善的框架的哪个支柱？

- **A.** Performance efficiency
  - 性能效率
- **B.** Reliability
  - 可靠性
- **C.** Cost optimization
  - 成本优化
- **D.** Security
  - 安全

**答案 / Answer: `B`**

Deploying across multiple Availability Zones ensures the database can withstand an AZ failure and recover automatically, which directly maps to the Reliability pillar's focus on workload recovery and availability.
Performance Efficiency focuses on using compute resources efficiently to meet performance requirements, not on redundancy across failure domains. Cost Optimization focuses on eliminating unnecessary spend and choosing the right resource types, not on fault tolerance. Security focuses on protecting data and systems through access controls and detective mechanisms, not on availability architecture.

跨多个可用区部署可确保数据库能够承受可用区故障并自动恢复，这直接映射到可靠性支柱对工作负载恢复和可用性的关注。
性能效率侧重于有效地使用计算资源来满足性能要求，而不是跨故障域的冗余。成本优化的重点是消除不必要的支出和选择正确的资源类型，而不是容错能力。安全性的重点是通过访问控制和检测机制来保护数据和系统，而不是可用性架构。

---

## Question 14 · Domain 4

**EN** Which of the following makes it easier for you to categorize, manage and filter your resources?

**中** 以下哪一项可以让您更轻松地对资源进行分类、管理和过滤？

- **A.** Amazon CloudWatch
  - Amazon CloudWatch
- **B.** AWS Service Catalog
  - AWS 服务目录
- **C.** AWS Directory Service
  - AWS 目录服务
- **D.** AWS Tagging
  - AWS 标记

**答案 / Answer: `D`**

AWS tags are key-value metadata pairs attached to resources, making it easy to categorize, filter, search, and manage resources by project, environment, owner, or any other custom criteria.
Amazon CloudWatch is a monitoring and observability service for collecting metrics, logs, and alarms on AWS resources, not a resource categorization or filtering tool. AWS Service Catalog allows organizations to create and manage approved catalogs of IT services for internal deployment, not for tagging or filtering existing resources. AWS Directory Service provides managed Microsoft Active Directory for user authentication and access management, unrelated to resource categorization or metadata management.

AWS 标签是附加到资源的键值元数据对，可以轻松按项目、环境、所有者或任何其他自定义条件对资源进行分类、筛选、搜索和管理。
Amazon CloudWatch 是一种监控和可观察性服务，用于收集 AWS 资源的指标、日志和警报，而不是资源分类或过滤工具。 AWS Service Catalog 允许组织创建和管理经批准的 IT 服务目录以供内部部署，而不是用于标记或过滤现有资源。 AWS Directory Service 提供托管 Microsoft Active Directory，用于用户身份验证和访问管理，与资源分类或元数据管理无关。

---

## Question 15 · Domain 2

**EN** Within the AWS shared responsibility model, who is responsible for security and compliance?

**中** 在 AWS 责任共担模型中，谁负责安全性和合规性？

- **A.** The customer is responsible
  - 客户负责
- **B.** AWS is responsible
  - AWS 负责
- **C.** AWS and the customer share responsibility
  - AWS 和客户共同承担责任
- **D.** AWS shares responsibility with the relevant governing body
  - AWS 与相关管理机构分担责任

**答案 / Answer: `C`**

Security and compliance is a shared responsibility between AWS and the customer; AWS secures the underlying cloud infrastructure while customers are responsible for securing their workloads, data, and configurations built on top of it.
The customer alone being responsible for security and compliance is incorrect; under the shared responsibility model, AWS manages security of the cloud infrastructure including physical data centers, hypervisor, and global network, which are entirely outside customer control. AWS alone being responsible for security and compliance is incorrect; customers must actively manage security in the cloud including IAM policies, encryption configuration, network security, and application security, all of which AWS cannot control or configure on the customer's behalf. AWS sharing responsibility with a relevant governing body is not how the shared responsibility model works; the model divides responsibility between AWS and the customer based on which layer of the stack each party controls, with no involvement from external regulatory bodies in the operational security responsibility.

安全性和合规性是 AWS 和客户之间的共同责任； AWS 保护底层云基础设施的安全，而客户则负责保护构建在其之上的工作负载、数据和配置的安全。
仅由客户负责安全性和合规性是不正确的；在责任共担模式下，AWS 管理云基础设施的安全性，包括物理数据中心、虚拟机管理程序和全球网络，这些完全不受客户控制。单独由 AWS 负责安全性和合规性是不正确的；客户必须主动管理云中的安全性，包括 IAM 策略、加密配置、网络安全和应用程序安全，所有这些 AWS 无法代表客户控制或配置。 AWS 与相关管理机构分担责任并不是共担责任模式的运作方式；该模型根据双方控制堆栈的哪一层来划分 AWS 和客户之间的责任，而外部监管机构不会参与运营安全责任。

---

## Question 16 · Domain 3

**EN** What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?

**中** 在 Amazon EC2 实例上托管经常更改的数据库时，建议的存储选项是什么？

- **A.** Amazon EBS
  - 亚马逊 EBS
- **B.** Amazon RDS
  - Amazon RDS
- **C.** Amazon S3
  - Amazon S3
- **D.** Amazon DynamoDB
  - Amazon DynamoDB

**答案 / Answer: `A`**

Amazon EBS provides persistent block storage volumes that attach to EC2 instances, delivering the consistent low-latency I/O performance needed for databases with frequently changing data.
Amazon RDS is a fully managed relational database service that runs on its own infrastructure, and is not a storage option for a database hosted directly on an EC2 instance. Amazon S3 provides object storage accessible via API calls and is designed for storing files, backups, and static assets rather than serving as the underlying block storage for a database engine running on EC2. Amazon DynamoDB is a fully managed serverless NoSQL database service that runs on AWS infrastructure, and is not a storage volume that can be attached to an EC2 instance.

Amazon EBS 提供附加到 EC2 实例的持久块存储卷，为数据频繁更改的数据库提供所需的一致低延迟 I/O 性能。
Amazon RDS 是一种完全托管的关系数据库服务，在其自己的基础架构上运行，而不是直接托管在 EC2 实例上的数据库的存储选项。 Amazon S3 提供可通过 API 调用访问的对象存储，旨在存储文件、备份和静态资产，而不是充当在 EC2 上运行的数据库引擎的底层块存储。 Amazon DynamoDB 是一种完全托管的无服务器 NoSQL 数据库服务，在 AWS 基础设施上运行，并且不是可以附加到 EC2 实例的存储卷。

---

## Question 17 · Domain 2

**EN** Where can a customer find information about prohibited actions on AWS infrastructure?

**中** 客户在哪里可以找到有关 AWS 基础设施上禁止的操作的信息？

- **A.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **B.** AWS Identity and Access Management (IAM)
  - AWS 身份和访问管理 (IAM)
- **C.** AWS Billing Console
  - AWS 计费控制台
- **D.** AWS Acceptable Use Policy
  - AWS 可接受使用政策

**答案 / Answer: `D`**

The AWS Acceptable Use Policy defines what activities are prohibited on AWS infrastructure including illegal content hosting, network attacks, and sending spam, and is the authoritative reference for customers seeking to understand what actions are not permitted.
AWS Trusted Advisor provides automated recommendations for improving the security, cost efficiency, performance, and fault tolerance of AWS environments, and is an advisory tool rather than a document defining prohibited uses of the AWS platform. AWS IAM manages user identities and permissions to control which AWS services and resources users can access, and is an access management service rather than a policy document listing prohibited infrastructure activities. The AWS Billing Console displays cost and usage data, invoices, and payment information for an AWS account, and is a financial management interface with no connection to defining or documenting prohibited uses of AWS infrastructure.

AWS 可接受使用政策定义了在 AWS 基础设施上禁止哪些活动，包括非法内容托管、网络攻击和发送垃圾邮件，并且是寻求了解不允许哪些行为的客户的权威参考。
AWS Trusted Advisor 提供用于提高 AWS 环境的安全性、成本效率、性能和容错能力的自动化建议，并且是一种咨询工具，而不是定义 AWS 平台禁止使用的文档。 AWS IAM 管理用户身份和权限，以控制用户可以访问哪些 AWS 服务和资源，并且是一项访问管理服务，而不是列出禁止的基础设施活动的策略文档。 AWS 账单控制台显示 AWS 账户的成本和使用数据、发票和付款信息，并且是一个财务管理界面，与定义或记录 AWS 基础设施的禁止使用无关。

---

## Question 18 · Domain 3 · Select 2

**EN** Which of the following AWS services provide compute resources?

**中** 以下哪些 AWS 服务提供计算资源？

- **A.** AWS Lambda
  - AWS Lambda
- **B.** Amazon Elastic Container Service (Amazon ECS)
  - 亚马逊弹性容器服务 (Amazon ECS)
- **C.** AWS CodeDeploy
  - AWS 代码部署
- **D.** Amazon S3 Glacier
  - Amazon S3 冰川
- **E.** AWS Organizations
  - AWS Organizations

**答案 / Answer: `A,B`**

AWS Lambda provides serverless compute by running code in response to events without requiring you to provision or manage servers, and Amazon ECS runs containerised applications on managed compute infrastructure. Both are purpose-built AWS compute services.
AWS CodeDeploy automates the deployment of application code to compute targets such as EC2 instances and Lambda functions, and is a deployment automation tool rather than a compute service that provides resources. Amazon S3 Glacier is an archival storage service designed for rarely accessed data with retrieval times ranging from minutes to hours, and is a storage service with no compute capability. AWS Organizations is a account management service for centrally governing and consolidating multiple AWS accounts, and has no compute capability of any kind.

AWS Lambda 通过运行代码来响应事件来提供无服务器计算，无需您配置或管理服务器，而 Amazon ECS 在托管计算基础设施上运行容器化应用程序。两者都是专门构建的 AWS 计算服务。
AWS CodeDeploy 可自动将应用程序代码部署到 EC2 实例和 Lambda 函数等计算目标，并且它是一种部署自动化工具，而不是提供资源的计算服务。 Amazon S3 Glacier 是一种归档存储服务，专为很少访问的数据而设计，检索时间从几分钟到几小时不等，并且是一种不具有计算能力的存储服务。 AWS Organizations 是一项用于集中管理和整合多个 AWS 账户的账户管理服务，并且不具有任何类型的计算能力。

---

## Question 19 · Domain 3

**EN** What is a benefit of loose coupling as a principle of cloud architecture design?

**中** 松耦合作为云架构设计的原则有什么好处？

- **A.** It facilitates low-latency request handling
  - 它有助于低延迟请求处理
- **B.** It allows applications to have dependent workflows
  - 它允许应用程序具有依赖的工作流程
- **C.** It prevents cascading failures between different components
  - 它可以防止不同组件之间的级联故障
- **D.** It allows companies to focus on their physical data center operations
  - 它使公司能够专注于其物理数据中心运营

**答案 / Answer: `C`**

Loose coupling prevents cascading failures because components interact through well-defined interfaces such as queues and APIs rather than direct dependencies, so a failure in one component does not bring down others.
Low-latency request handling is a performance characteristic achieved through infrastructure choices such as edge caching and regional deployment, and is not a benefit of loose coupling as an architectural pattern. Allowing applications to have dependent workflows describes tight coupling, which is the opposite of loose coupling and increases the risk that a failure in one component will impact others. Allowing companies to focus on physical data center operations describes an on-premises operational model, which is the opposite of what cloud adoption enables and is entirely unrelated to loose coupling as a design principle.

松散耦合可以防止级联故障，因为组件通过明确定义的接口（例如队列和 API）进行交互，而不是直接依赖关系，因此一个组件的故障不会影响其他组件。
低延迟请求处理是通过边缘缓存和区域部署等基础设施选择实现的性能特征，而不是松散耦合作为架构模式的好处。允许应用程序具有依赖的工作流程描述了紧密耦合，这与松散耦合相反，并且增加了一个组件中的故障影响其他组件的风险。允许公司专注于物理数据中心运营描述了一种本地运营模型，这与云采用所实现的相反，并且与松散耦合作为设计原则完全无关。

---

## Question 20 · Domain 3 · Select 2

**EN** Which AWS services are defined as global instead of regional?

**中** 哪些 AWS 服务被定义为全球服务而不是区域服务？

- **A.** Amazon Route 53
  - Amazon Route 53
- **B.** Amazon EC2
  - Amazon EC2
- **C.** Amazon S3
  - Amazon S3
- **D.** Amazon CloudFront
  - Amazon CloudFront
- **E.** Amazon DynamoDB
  - Amazon DynamoDB

**答案 / Answer: `A,D`**

Amazon Route 53 is a global DNS service that operates without being tied to any single AWS Region, and Amazon CloudFront is a global content delivery network whose edge locations span the globe independently of regional deployments. Both are global services rather than regional.
Amazon EC2 is a regional service; instances are launched in specific Availability Zones within specific Regions, and each EC2 deployment is bound to its Region. Amazon S3 is generally considered a regional service because buckets are created in a specific Region and data resides there by default, even though bucket names are globally unique. Amazon DynamoDB is a regional service where tables are created and data is stored in a specific Region, though Global Tables can replicate across Regions as an additional feature.

Amazon Route 53 是一项全球 DNS 服务，其运行不依赖于任何单个 AWS 区域，而 Amazon CloudFront 是一个全球内容交付网络，其边缘站点遍布全球，独立于区域部署。两者都是全球服务而不是区域服务。
Amazon EC2 为区域服务；实例在特定区域内的特定可用区中启动，每个 EC2 部署都绑定到其区域。 Amazon S3 通常被视为区域服务，因为存储桶是在特定区域中创建的，并且默认情况下数据驻留在该区域，即使存储桶名称是全局唯一的。 Amazon DynamoDB 是一项区域服务，其中创建表并将数据存储在特定区域中，但作为一项附加功能，全局表可以跨区域复制。

---

## Question 21 · Domain 3 · Select 2

**EN** Which of the following are main components of the AWS global infrastructure?

**中** 以下哪些是 AWS 全球基础设施的主要组成部分？

- **A.** Resource groups
  - 资源组
- **B.** Availability Zones
  - 可用区
- **C.** Security groups
  - 安全组
- **D.** Regions
  - 地区
- **E.** Amazon Machine Images (AMIS)
  - 亚马逊机器映像 (AMIS)

**答案 / Answer: `B,D`**

Regions and Availability Zones are the two main building blocks of AWS global infrastructure, with Regions being geographic areas and each Region containing multiple isolated Availability Zones.
Resource groups are a management tool used to organize and tag AWS resources within an account, and are not a component of the physical global infrastructure. Security groups are virtual firewalls that control inbound and outbound traffic for AWS resources, and are a networking feature rather than an infrastructure component. Amazon Machine Images are templates used to launch EC2 instances containing the operating system and configuration, and are a compute feature rather than part of the global infrastructure hierarchy.

区域和可用区是 AWS 全球基础设施的两个主要构建块，区域是地理区域，每个区域包含多个独立的可用区。
资源组是一种管理工具，用于组织和标记账户内的 AWS 资源，而不是物理全局基础设施的组件。安全组是控制 AWS 资源的入站和出站流量的虚拟防火墙，并且是一项网络功能而不是基础设施组件。 Amazon 系统映像是用于启动包含操作系统和配置的 EC2 实例的模板，并且是一项计算功能，而不是全局基础设施层次结构的一部分。

---

## Question 22 · Domain 1

**EN** Fault tolerance refers to:

**中** 容错是指：

- **A.** The ability of an application to accommodate growth without changing design
  - 应用程序在不改变设计的情况下适应增长的能力
- **B.** How well and how quickly an application's environment can have lost data restored
  - 应用程序环境恢复丢失数据的效果和速度如何
- **C.** How secure your application is
  - 您的应用程序的安全性如何
- **D.** The built-in redundancy of an application's components
  - 应用程序组件的内置冗余

**答案 / Answer: `D`**

Fault tolerance refers to the built-in redundancy of an application's components, ensuring the system continues operating correctly even when individual components fail.
The ability to accommodate growth without changing design describes scalability, which is a separate cloud concept focused on handling increased demand. How well and how quickly lost data can be restored describes recoverability, which relates to backup and disaster recovery rather than continued operation during failures. How secure an application is describes the security posture of a system, which is an entirely separate concern from redundancy and fault tolerance.

容错是指应用程序组件的内置冗余，确保即使单个组件发生故障，系统也能继续正常运行。
在不改变设计的情况下适应增长的能力描述了可扩展性，这是一个单独的云概念，专注于处理增加的需求。丢失数据的恢复程度和恢复速度描述了可恢复性，它与备份和灾难恢复有关，而不是在故障期间继续运行。应用程序的安全程度描述了系统的安全状况，这与冗余和容错完全不同。

---

## Question 23 · Domain 2

**EN** Under the AWS shared responsibility model, customer responsibilities include which one of the following?

**中** 在 AWS 责任共担模型下，客户责任包括以下哪一项？

- **A.** Securing the hardware, software, facilities, and networks that run all products and services
  - 确保运行所有产品和服务的硬件、软件、设施和网络的安全
- **B.** Providing certificates, reports, and other documentation directly to AWS customers under NDA
  - 根据 NDA 直接向 AWS 客户提供证书、报告和其他文档
- **C.** Configuring the operating system, network, and firewall
  - 配置操作系统、网络和防火墙
- **D.** Obtaining industry certifications and independent third-party attestations
  - 获得行业认证和独立第三方认证

**答案 / Answer: `C`**

Configuring the operating system, network settings, and firewall rules on EC2 instances falls within the customer's responsibility under the shared responsibility model, as AWS provides the underlying infrastructure while customers are responsible for what they install and configure on top of it.
Securing the hardware, software, facilities, and networks that run all AWS products and services is AWS's responsibility under the shared responsibility model, as customers have no access to or control over the physical and virtual infrastructure that AWS manages. Providing compliance certificates, reports, and documentation to customers under NDA is a service AWS provides through AWS Artifact, not a customer responsibility; customers access these documents rather than create or provide them. Obtaining industry certifications and third-party attestations for the AWS infrastructure is AWS's responsibility, as AWS undergoes independent audits for certifications such as ISO, SOC, and PCI DSS that apply to the infrastructure layer rather than being a customer obligation.

在共享责任模型下，在 EC2 实例上配置操作系统、网络设置和防火墙规则属于客户的责任，因为 AWS 提供底层基础设施，而客户负责在其之上安装和配置的内容。
在共担责任模式下，确保运行所有 AWS 产品和服务的硬件、软件、设施和网络的安全是 AWS 的责任，因为客户无法访问或控制 AWS 管理的物理和虚拟基础设施。根据 NDA 向客户提供合规证书、报告和文档是 AWS 通过 AWS Artifact 提供的服务，而不是客户的责任；客户访问这些文档而不是创建或提供它们。获得 AWS 基础设施的行业认证和第三方证明是 AWS 的责任，因为 AWS 对适用于基础设施层的 ISO、SOC 和 PCI DSS 等认证进行独立审核，而不是客户的义务。

---

## Question 24 · Domain 4 · Select 2

**EN** What are the advantages of Reserved Instances?

**中** 预留实例有哪些优势？

- **A.** They provide a discount over on-demand pricing
  - 他们提供比按需定价折扣
- **B.** They provide access to additional instance types
  - 它们提供对其他实例类型的访问
- **C.** They provide additional networking capability
  - 它们提供额外的网络功能
- **D.** Customers can upgrade instances as new types become available
  - 当新类型可用时，客户可以升级实例
- **E.** Customers can reserve capacity in an Availability Zone
  - 客户可以预留可用区的容量

**答案 / Answer: `A,E`**

Reserved Instances provide significant discounts over On-Demand pricing of up to 72%, and they allow you to reserve capacity in a specific Availability Zone, ensuring that capacity is available when you need it.
Reserved Instances do not provide access to additional instance types beyond what is available on On-Demand. The instance types available to you are the same regardless of how you purchase them. Reserved Instances do not provide additional networking capability. Network performance is determined by the instance type and configuration rather than the purchasing model. Customers cannot upgrade Reserved Instance types as new types become available unless they hold Convertible RIs, which allow exchanges. Standard RIs are locked to the specific instance type purchased.

预留实例比按需定价提供高达 72% 的大幅折扣，并且允许您在特定可用区中预留容量，确保在需要时提供可用容量。
预留实例不提供对按需可用实例类型之外的其他实例类型的访问。无论您如何购买，您可用的实例类型都是相同的。预留实例不提供额外的网络功能。网络性能由实例类型和配置决定，而不是由购买模式决定。当新类型可用时，客户无法升级预留实例类型，除非他们持有允许交换的可转换 RI。标准 RI 被锁定到购买的特定实例类型。

---

## Question 25 · Domain 3

**EN** Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?

**中** 哪个 AWS 服务处理容量配置、负载平衡、Auto Scaling 和应用程序运行状况监控的部署详细信息？

- **A.** AWS Config
  - AWS Config
- **B.** AWS Elastic Beanstalk
  - AWS 弹性豆茎
- **C.** Amazon Route 53
  - Amazon Route 53
- **D.** Amazon CloudFront
  - Amazon CloudFront

**答案 / Answer: `B`**

AWS Elastic Beanstalk automatically handles capacity provisioning, load balancing, Auto Scaling, and application health monitoring, allowing developers to deploy applications without needing to manage the underlying infrastructure.
AWS Config records and evaluates configuration changes to AWS resources for compliance and auditing purposes and has no role in application deployment or infrastructure provisioning. Amazon Route 53 is a DNS and traffic routing service and does not handle application deployment, load balancing, or health monitoring. Amazon CloudFront is a content delivery network for caching and distributing content globally and is not an application deployment or infrastructure management service.

AWS Elastic Beanstalk 自动处理容量配置、负载平衡、自动扩展和应用程序运行状况监控，使开发人员无需管理底层基础设施即可部署应用程序。
AWS Config 记录并评估 AWS 资源的配置更改，以用于合规性和审计目的，并且在应用程序部署或基础设施配置中不起任何作用。 Amazon Route 53 是 DNS 和流量路由服务，不处理应用程序部署、负载平衡或运行状况监控。 Amazon CloudFront 是一个用于在全球范围内缓存和分发内容的内容交付网络，不是应用程序部署或基础设施管理服务。

---

## Question 26 · Domain 2

**EN** Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?

**中** 需要启用哪个 AWS 服务才能跟踪 AWS 管理控制台中的所有用户账户更改？

- **A.** AWS CloudTrail
  - AWS CloudTrail
- **B.** Amazon Simple Notification Service (Amazon SNS)
  - 亚马逊简单通知服务 (Amazon SNS)
- **C.** VPC Flow Logs
  - VPC 流日志
- **D.** AWS CloudHSM
  - AWS 云 HSM

**答案 / Answer: `A`**

AWS CloudTrail records all API calls and user actions in the AWS Management Console, providing a complete audit trail of account changes for security analysis and compliance.
Amazon Simple Notification Service is a fully managed pub/sub messaging service that delivers notifications to subscribers such as Lambda functions, HTTP endpoints, and email addresses, and has no capability to record or track user account changes within the AWS Management Console. VPC Flow Logs capture information about IP traffic flowing to and from network interfaces within a VPC, and is a network traffic logging feature that records connection-level data rather than user actions or account changes in the console. AWS CloudHSM provides dedicated hardware security modules for generating and managing cryptographic keys, and is a key management and encryption service with no capability to track or audit user activity within the AWS Management Console.

AWS CloudTrail 在 AWS 管理控制台中记录所有 API 调用和用户操作，提供账户更改的完整审计跟踪，以进行安全分析和合规性。
Amazon Simple Notification Service 是一项完全托管的发布/订阅消息服务，可向订阅者发送通知，例如 Lambda 函数、HTTP 终端节点和电子邮件地址，并且无法在 AWS 管理控制台中记录或跟踪用户账户更改。 VPC 流日志捕获有关流入和流出 VPC 内网络接口的 IP 流量的信息，并且是一种网络流量日志记录功能，可记录连接级数据，而不是控制台中的用户操作或帐户更改。 AWS CloudHSM 提供专用硬件安全模块来生成和管理加密密钥，并且是一种密钥管理和加密服务，无法跟踪或审核 AWS 管理控制台中的用户活动。

---

## Question 27 · Domain 1 · Select 2

**EN** Which AWS Cloud design principles can help increase reliability?

**中** 哪些 AWS 云设计原则可以帮助提高可靠性？

- **A.** Using monolithic architecture
  - 使用单体架构
- **B.** Measuring overall efficiency
  - 衡量整体效率
- **C.** Testing recovery procedures
  - 测试恢复程序
- **D.** Adopting a consumption model
  - 采用消费模式
- **E.** Automatically recovering from failure
  - 自动从故障中恢复

**答案 / Answer: `C,E`**

Testing recovery procedures validates that disaster recovery plans work correctly, and automatically recovering from failure using health checks and auto-scaling ensures systems self-heal without manual intervention, both being core Reliability pillar design principles.
Monolithic architecture tightly couples all application components together, meaning a failure in one part can bring down the entire system, which reduces rather than increases reliability. Measuring overall efficiency is a design principle associated with the Performance Efficiency pillar, not the Reliability pillar. Adopting a consumption model is a cost management principle associated with the Cost Optimization pillar, focused on paying only for what is used rather than on system resilience.

测试恢复程序可验证灾难恢复计划是否正常工作，并使用运行状况检查和自动扩展自动从故障中恢复，确保系统无需人工干预即可自我修复，这两者都是核心可靠性支柱设计原则。
整体架构将所有应用程序组件紧密耦合在一起，这意味着一个部件的故障可能会导致整个系统瘫痪，从而降低而不是提高可靠性。衡量整体效率是与性能效率支柱相关的设计原则，而不是与可靠性支柱相关的设计原则。采用消耗模型是与成本优化支柱相关的成本管理原则，重点是只为使用的内容付费，而不是为系统弹性付费。

---

## Question 28 · Domain 1

**EN** A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?

**中** 在 Amazon EC2 实例上完成批量工作负载需要 5 小时。每月处理的数据量翻倍，处理时间成正比。满足这种持续增长的需求的最佳云架构是什么？

- **A.** Run the application on a bigger EC2 instance size
  - 在更大的 EC2 实例大小上运行应用程序
- **B.** Switch to an EC2 instance family that better matches batch requirements
  - 切换到更符合批量要求的 EC2 实例规格族
- **C.** Distribute the application across multiple EC2 instances and run the workload in parallel
  - 将应用程序分布到多个 EC2 实例并并行运行工作负载
- **D.** Run the application on a bare metal EC2 instance
  - 在裸机 EC2 实例上运行应用程序

**答案 / Answer: `C`**

Distributing the workload across multiple EC2 instances and running in parallel applies horizontal scaling, which handles consistently growing demand by adding more machines rather than relying on a single larger instance that will eventually hit capacity limits.
Running the application on a bigger EC2 instance applies vertical scaling, which has an upper size limit and creates a single point of failure, making it unsuitable for consistently doubling workloads over time. Switching to a different EC2 instance family optimizes for workload characteristics such as compute or memory intensity, but does not address the problem of consistently growing processing volume. Running on a bare metal EC2 instance provides direct access to physical hardware without a hypervisor layer, which can improve performance for certain workloads but does not scale to handle doubling data volumes.

将工作负载分配到多个 EC2 实例并并行运行可应用水平扩展，通过添加更多机器来处理持续增长的需求，而不是依赖最终会达到容量限制的单个较大实例。
在更大的 EC2 实例上运行应用程序会应用垂直扩展，这具有大小上限并会产生单点故障，使其不适合随着时间的推移持续加倍工作负载。切换到不同的 EC2 实例系列可优化计算或内存强度等工作负载特征，但无法解决处理量持续增长的问题。在裸机 EC2 实例上运行可以直接访问物理硬件，无需虚拟机管理程序层，这可以提高某些工作负载的性能，但无法扩展以处理双倍的数据量。

---

## Question 29 · Domain 1

**EN** An application designed to span multiple Availability Zones is described as:

**中** 设计用于跨越多个可用区的应用程序被描述为：

- **A.** Being highly available
  - 高度可用
- **B.** Having global reach
  - 具有全球影响力
- **C.** Using an economy of scale
  - 利用规模经济
- **D.** Having elasticity
  - 有弹性

**答案 / Answer: `A`**

An application spanning multiple Availability Zones remains operational if one AZ experiences an outage, which is the definition of high availability.
Global reach describes deploying across multiple Regions or using a content delivery network to serve users worldwide, which goes beyond AZ-level redundancy within a single Region. Economy of scale refers to the cost benefits AWS passes to customers through aggregated purchasing power, which is a pricing concept unrelated to application architecture. Elasticity refers to dynamically scaling resources up or down in response to demand, which is independent of how many Availability Zones an application spans.

如果一个可用区发生中断，跨多个可用区的应用程序仍可运行，这就是高可用性的定义。
全球覆盖描述了跨多个区域部署或使用内容交付网络为全球用户提供服务，这超出了单个区域内可用区级别的冗余。规模经济是指 AWS 通过聚合购买力传递给客户的成本效益，是一个与应用架构无关的定价概念。弹性是指根据需求动态扩展或缩减资源，这与应用程序跨越的可用区数量无关。

---

## Question 30 · Domain 1

**EN** The continual reduction of AWS Cloud pricing is due to:

**中** AWS 云定价持续降低的原因是：

- **A.** Pay-as-you go pricing
  - 按使用量付费定价
- **B.** The AWS global infrastructure
  - AWS 全球基础设施
- **C.** Economies of scale
  - 规模经济
- **D.** Reserved storage pricing
  - 预留存储定价

**答案 / Answer: `C`**

As AWS grows and serves more customers, it achieves lower per-unit costs through economies of scale and passes those savings on to customers through regular price reductions.
Pay-as-you-go pricing is a billing model that charges for actual usage rather than upfront commitments, but it does not cause prices to decrease over time. The AWS global infrastructure describes the physical footprint of Regions, AZs, and edge locations, which supports service delivery but is not the mechanism behind continual price reductions. Reserved storage pricing is a commitment-based discount option for specific services, not a driver of overall AWS pricing reductions across the platform.

随着 AWS 的发展并为更多客户提供服务，它通过规模经济降低单位成本，并通过定期降价将这些节省的成本转嫁给客户。
即用即付定价是一种计费模式，根据实际使用情况而不是预先承诺进行收费，但它不会导致价格随着时间的推移而下降。 AWS 全球基础设施描述了区域、可用区和边缘站点的物理足迹，它支持服务交付，但不是持续降价背后的机制。预留存储定价是针对特定服务的基于承诺的折扣选项，而不是整个平台上 AWS 整体定价降低的驱动因素。

---

## Question 31 · Domain 3

**EN** A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?

**中** 一家公司需要使用 EC2 实例在 AWS 上托管大数据应用程序。他们会选择以下哪种 AWS 存储服务来自动为多个计算节点获得高吞吐量？

- **A.** Amazon Elastic Block Store
  - 亚马逊弹性块商店
- **B.** AWS Storage Gateway
  - AWS 存储网关
- **C.** Amazon Elastic File System
  - 亚马逊弹性文件系统
- **D.** S3
  - S3

**答案 / Answer: `C`**

Amazon Elastic File System (EFS) provides a shared NFS file system that automatically scales and delivers high throughput to multiple EC2 instances concurrently, making it ideal for big data workloads that require parallel access across compute nodes.
Amazon Elastic Block Store provides block storage volumes that attach to a single EC2 instance at a time and cannot be simultaneously shared across multiple compute nodes for parallel access. AWS Storage Gateway is a hybrid storage service that connects on-premises environments to AWS cloud storage, and is not designed for high-throughput shared access between EC2 instances. Amazon S3 provides object storage accessible via API calls rather than a mounted file system, and does not deliver the low-latency, high-throughput shared file system access that big data workloads running on EC2 require.

Amazon Elastic File System (EFS) 提供共享 NFS 文件系统，可自动扩展并向多个 EC2 实例同时提供高吞吐量，非常适合需要跨计算节点并行访问的大数据工作负载。
Amazon Elastic Block Store 提供一次附加到单个 EC2 实例的块存储卷，并且无法在多个计算节点之间同时共享以进行并行访问。 AWS Storage Gateway 是一种混合存储服务，可将本地环境连接到 AWS 云存储，并非专为 EC2 实例之间的高吞吐量共享访问而设计。 Amazon S3 提供可通过 API 调用而不是安装的文件系统访问的对象存储，并且不提供在 EC2 上运行的大数据工作负载所需的低延迟、高吞吐量共享文件系统访问。

---

## Question 32 · Domain 2

**EN** According to the AWS shared responsibility model what is the sole responsibility of AWS?

**中** 根据 AWS 共享责任模型，AWS 的唯一责任是什么？

- **A.** Application security
  - 应用安全
- **B.** Edge location management
  - 边缘位置管理
- **C.** Patch management
  - 补丁管理
- **D.** Client-side data
  - 客户端数据

**答案 / Answer: `B`**

Managing edge locations, the physical infrastructure used by CloudFront and other services, is solely AWS's responsibility as part of its obligation to operate and maintain the global infrastructure underpinning its services.
Application security is the customer's responsibility under the Shared Responsibility Model, as customers are accountable for securing the code, configurations, and access controls within their own applications. Patch management is a shared control where AWS patches the underlying infrastructure and managed services, while customers retain responsibility for patching their own operating systems and applications. Client-side data is the customer's responsibility, as customers control how their data is classified, encrypted, and managed on the client side regardless of which AWS services they use.

管理边缘站点（CloudFront 和其他服务使用的物理基础设施）完全是 AWS 的责任，也是其运营和维护支撑其服务的全球基础设施义务的一部分。
在共享责任模型下，应用程序安全是客户的责任，因为客户负责保护自己的应用程序内的代码、配置和访问控制。补丁管理是一种共享控制，AWS 可以在其中修补底层基础设施和托管服务，而客户则保留修补自己的操作系统和应用程序的责任。客户端数据是客户的责任，因为无论他们使用哪种 AWS 服务，客户都可以控制其数据在客户端的分类、加密和管理方式。

---

## Question 33 · Domain 3

**EN** What is the purpose of AWS Storage Gateway?

**中** AWS Storage Gateway 的用途是什么？

- **A.** It ensures on-premises data storage is 99.999999999% durable
  - 确保本地数据存储 99.999999999% 持久
- **B.** It transports petabytes of data to and from AWS
  - 它与 AWS 之间传输 PB 级的数据
- **C.** It connects to multiple Amazon EC2 instances
  - 它连接到多个 Amazon EC2 实例
- **D.** It connects on-premises data storage to the AWS Cloud
  - 它将本地数据存储连接到 AWS 云

**答案 / Answer: `D`**

AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. It connects your existing on-premises applications and workflows to AWS storage services like Amazon S3, Amazon EBS, and Amazon FSx through standard storage protocols such as NFS, SMB, and iSCSI.
The 99.999999999% (11 nines) durability figure is a specific design characteristic of Amazon S3's object storage, not a guarantee applied to local on-premises hardware. Transporting petabytes of data physically to and from AWS is the primary function of the AWS Snow Family (such as AWS Snowball), whereas Storage Gateway is for ongoing network-based integration. Connecting to multiple Amazon EC2 instances is a feature of shared storage services like Amazon EFS or Amazon FSx, rather than a hybrid connectivity solution for on-premises data centers.

AWS Storage Gateway 是一种混合云存储服务，可让您在本地访问几乎无限的云存储。它通过 NFS、SMB 和 iSCSI 等标准存储协议将您现有的本地应用程序和工作流程连接到 Amazon S3、Amazon EBS 和 Amazon FSx 等 AWS 存储服务。
99.999999999%（11 个 9）的耐用性数字是 Amazon S3 对象存储的特定设计特征，而不是应用于本地本地硬件的保证。 AWS Snow 系列（例如 AWS Snowball）的主要功能是从 AWS 物理传输 PB 级数据，而 Storage Gateway 用于持续的基于网络的集成。连接到多个 Amazon EC2 实例是 Amazon EFS 或 Amazon FSx 等共享存储服务的一项功能，而不是本地数据中心的混合连接解决方案。

---

## Question 34 · Domain 1

**EN** Treating infrastructure as code in the AWS Cloud allows users to:

**中** 将基础设施视为 AWS 云中的代码允许用户：

- **A.** Automate migration of on-premises hardware to AWS data centers
  - 自动将本地硬件迁移到 AWS 数据中心
- **B.** Let a third party automate an audit of the AWS infrastructure
  - 让第三方自动审核 AWS 基础设施
- **C.** Turn over application code to AWS so it can run on the AWS infrastructure
  - 将应用程序代码移交给 AWS，以便它可以在 AWS 基础设施上运行
- **D.** Automate the infrastructure provisioning process
  - 自动化基础设施配置流程

**答案 / Answer: `D`**

Infrastructure as code allows users to define and automate the provisioning of AWS resources using templates, enabling repeatable, version-controlled deployments without manual configuration.
Automating migration of on-premises hardware to AWS data centers is not possible through infrastructure as code, as physical hardware migration is a separate process managed outside of code-based provisioning. Letting a third party automate an audit of AWS infrastructure describes a compliance or security activity unrelated to infrastructure provisioning. Turning over application code to AWS to run on its infrastructure misrepresents how AWS works, as customers are always responsible for their own application code and deployment.

基础设施即代码允许用户使用模板定义和自动配置 AWS 资源，从而无需手动配置即可实现可重复、版本控制的部署。
通过基础设施即代码无法将本地硬件自动迁移到 AWS 数据中心，因为物理硬件迁移是在基于代码的配置之外进行管理的单独流程。让第三方自动审核 AWS 基础设施描述了与基础设施配置无关的合规性或安全活动。将应用程序代码移交给 AWS 在其基础设施上运行并不能体现 AWS 的工作方式，因为客户始终要对自己的应用程序代码和部署负责。

---

## Question 35 · Domain 3 · Select 2

**EN** Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources?

**中** 哪些 AWS 服务为用户提供 AWS 云和本地资源之间的连接？

- **A.** AWS VPN
  - AWS VPN
- **B.** Amazon Connect
  - 亚马逊连接
- **C.** Amazon Cognito
  - Amazon Cognito
- **D.** AWS Direct Connect
  - AWS Direct Connect
- **E.** AWS Managed Services
  - AWS 托管服务

**答案 / Answer: `A,D`**

AWS VPN creates an encrypted tunnel over the public internet between an on-premises network and an AWS VPC, and AWS Direct Connect establishes a dedicated private physical network connection from an on-premises data center to AWS. Both provide connectivity between on-premises resources and the AWS Cloud.
Amazon Connect is a cloud-based contact center service that enables customer service operations through voice and chat channels, and is a business communications tool rather than a network connectivity solution for linking on-premises infrastructure to AWS. Amazon Cognito provides user identity and authentication services for web and mobile applications, managing user sign-up, sign-in, and access control, and is an identity service rather than a network connectivity solution. AWS Managed Services provides ongoing management of AWS infrastructure to reduce operational overhead, and is an operational management offering rather than a network connectivity service between on-premises environments and the AWS Cloud.

AWS VPN 通过公共互联网在本地网络和 AWS VPC 之间创建加密隧道，而 AWS Direct Connect 则建立从本地数据中心到 AWS 的专用私有物理网络连接。两者都提供本地资源和 AWS 云之间的连接。
Amazon Connect 是一种基于云的联络中心服务，可通过语音和聊天渠道实现客户服务操作，并且是一种业务通信工具，而不是用于将本地基础设施连接到 AWS 的网络连接解决方案。 Amazon Cognito 为 Web 和移动应用程序提供用户身份和身份验证服务，管理用户注册、登录和访问控制，是一种身份服务而不是网络连接解决方案。 AWS Managed Services 提供对 AWS 基础设施的持续管理，以减少运营开销，并且是一种运营管理产品，而不是本地环境与 AWS 云之间的网络连接服务。

---

## Question 36 · Domain 1

**EN** A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which of the following meets these requirements?

**中** 云从业者正在制定灾难恢复计划，并打算在多个地理区域之间复制数据。以下哪一项符合这些要求？

- **A.** AWS Accounts
  - AWS 账户
- **B.** AWS Regions
  - AWS 区域
- **C.** Availability Zones
  - 可用区
- **D.** Edge locations
  - 边缘位置

**答案 / Answer: `B`**

AWS Regions are geographically separate areas around the world, making them the correct choice for replicating data across different physical locations to satisfy disaster recovery requirements.
AWS Accounts are a logical boundary for managing resources and billing, not a geographic infrastructure component. Availability Zones are isolated data center clusters within a single Region, so replicating between AZs does not achieve geographic separation across different areas of the world. Edge locations are points of presence used for content delivery and caching, not designed for data replication or disaster recovery purposes.

AWS 区域是世界各地地理上独立的区域，使其成为跨不同物理位置复制数据以满足灾难恢复要求的正确选择。
AWS 账户是管理资源和计费的逻辑边界，而不是地理基础设施组件。可用区是单个区域内的隔离数据中心集群，因此可用区之间的复制并不能实现跨世界不同区域的地理隔离。边缘站点是用于内容交付和缓存的存在点，不是为数据复制或灾难恢复目的而设计的。

---

## Question 37 · Domain 3 · Select 2

**EN** Which of the following are characteristics of Amazon S3?

**中** 以下哪项是 Amazon S3 的特性？

- **A.** A global file system
  - 全局文件系统
- **B.** An object store
  - 对象存储
- **C.** A local file store
  - 本地文件存储
- **D.** A network file system
  - 网络文件系统
- **E.** A durable storage system
  - 耐用的存储系统

**答案 / Answer: `B,E`**

Amazon S3 is an object store that provides highly durable storage with 99.999999999% durability, storing data as objects in buckets rather than as files in a file system or blocks on a disk.
A global file system describes Amazon EFS, which provides a shared network file system accessible across multiple EC2 instances, not an object storage service. A local file store describes temporary instance storage such as EC2 instance store volumes, which are physically attached to the host and lost when the instance stops. A network file system also describes Amazon EFS, which mounts as a shared file system over a network connection rather than storing data as objects.

Amazon S3 是一种对象存储，提供持久性高达 99.999999999% 的高持久性存储，将数据作为对象存储在存储桶中，而不是作为文件系统中的文件或磁盘上的块。
全局文件系统描述了 Amazon EFS，它提供跨多个 EC2 实例访问的共享网络文件系统，而不是对象存储服务。本地文件存储描述临时实例存储，例如 EC2 实例存储卷，它们物理连接到主机，并在实例停止时丢失。网络文件系统还描述了 Amazon EFS，它通过网络连接作为共享文件系统安装，而不是将数据存储为对象。

---

## Question 38 · Domain 2 · Select 2

**EN** The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure?

**中** 贵公司的 AWS 账户管理员已被解雇。通过授予他作为管理员的权限，他能够创建多个 IAM 用户帐户和访问密钥。此外，您不确定他是否有权访问 AWS 根帐户。您应该立即采取什么措施来保护您的 AWS 基础设施？

- **A.** Download all the attached policies in a safe place
  - 将所有附加政策下载到安全的地方
- **B.** Delete all IAM accounts and recreate them
  - 删除所有 IAM 帐户并重新创建
- **C.** Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired
  - 使用 CloudWatch 服务检查自管理员被解雇以来在您的帐户中进行的所有 API 调用
- **D.** Rotate all access keys
  - 轮换所有访问键
- **E.** Change the email address and password of the root user account and enable MFA
  - 更改 root 用户帐户的电子邮件地址和密码并启用 MFA

**答案 / Answer: `D,E`**

Rotating all access keys immediately invalidates any keys the former administrator may have copied or retained, and changing the root account email and password with MFA enabled prevents root-level access using any credentials the administrator may have had.
Downloading attached policies to a safe place does not address the immediate security risk; the priority is to revoke the former administrator's access rather than preserving policy documentation, and policies can be reviewed from the console at any time. Deleting all IAM accounts and recreating them would lock out the entire team immediately and disrupt operations without actually addressing whether the root account is compromised; the root account password change must take priority. Using CloudWatch to check all API calls made since the administrator was fired is a useful forensic step for understanding what actions were taken, but it is a post-incident investigation activity rather than an immediate protective measure that should come before securing credentials.

立即轮换所有访问密钥会使前管理员可能复制或保留的任何密钥失效，并且在启用 MFA 的情况下更改根帐户电子邮件和密码可防止使用管理员可能拥有的任何凭据进行根级别访问。
将附加策略下载到安全位置并不能解决直接的安全风险；优先级是撤销前管理员的访问权限，而不是保留策略文档，并且可以随时从控制台查看策略。删除所有 IAM 帐户并重新创建它们会立即锁定整个团队并扰乱运营，而不会真正解决根帐户是否受到威胁的问题；必须优先更改 root 帐户密码。使用 CloudWatch 检查自管理员被解雇以来进行的所有 API 调用是了解所采取的操作的有用取证步骤，但这是事件后调查活动，而不是在保护凭据之前应采取的立即保护措施。

---

## Question 39 · Domain 3

**EN** Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?

**中** 用户报告连接到具有全球客户群的网站时存在延迟。哪种 AWS 服务将通过减少延迟来改善客户体验？

- **A.** Amazon CloudFront
  - Amazon CloudFront
- **B.** AWS Direct Connect
  - AWS Direct Connect
- **C.** Amazon EC2 Auto Scaling
  - Amazon EC2 自动伸缩
- **D.** AWS Transit Gateway
  - AWS 传输网关

**答案 / Answer: `A`**

Amazon CloudFront caches content at edge locations worldwide, delivering it from the location nearest to each user, which significantly reduces latency for a website with a global customer base.
AWS Direct Connect provides a dedicated private network link between on-premises infrastructure and AWS, which improves connectivity for enterprise networks but does not reduce latency for public internet users accessing a website. Amazon EC2 Auto Scaling adjusts the number of instances based on demand to maintain performance and availability, but does not reduce the geographic distance between the server and global users. AWS Transit Gateway connects VPCs and on-premises networks through a central hub, and is a network routing service with no content delivery or latency optimization capability for end users.

Amazon CloudFront 在全球边缘位置缓存内容，从距离每个用户最近的位置交付内容，这显着减少了拥有全球客户群的网站的延迟。
AWS Direct Connect 在本地基础设施和 AWS 之间提供专用的专用网络链接，这可以改善企业网络的连接性，但不会减少公共互联网用户访问网站的延迟。 Amazon EC2 弹性伸缩根据需求调整实例数量以维持性能和可用性，但不会缩短服务器与全球用户之间的地理距离。 AWS Transit Gateway 通过中央集线器连接 VPC 和本地网络，是一种网络路由服务，不为最终用户提供内容交付或延迟优化功能。

---

## Question 40 · Domain 1 · Select 2

**EN** Which of the following are benefits of hosting infrastructure in the AWS Cloud?

**中** 以下哪些是在 AWS 云中托管基础设施的好处？

- **A.** There are no upfront commitments
  - 没有预先承诺
- **B.** AWS manages all security in the cloud
  - AWS 管理云中的所有安全
- **C.** Users have the ability to provision resources on demand
  - 用户可以按需配置资源
- **D.** Users have access to free and unlimited storage
  - 用户可以访问免费且无限的存储空间
- **E.** Users have control over the physical infrastructure
  - 用户可以控制物理基础设施

**答案 / Answer: `A,C`**

AWS requires no upfront hardware commitments, allowing organizations to pay only for what they consume, and resources can be provisioned on demand in minutes allowing businesses to scale quickly without waiting for hardware procurement and installation.
AWS does not manage all security in the cloud; under the shared responsibility model, AWS secures the underlying infrastructure while customers are responsible for securing their applications, data, and configurations that run on top of that infrastructure. Users do not have access to free and unlimited storage on AWS; storage services such as S3 and EBS are priced based on usage, and while there are free tier limits for new accounts, storage is not free or unlimited in general. Users do not have control over the physical infrastructure; one of the trade-offs of moving to the cloud is that customers give up physical access to and control of the underlying hardware, trusting AWS to manage it securely and reliably.

AWS 不需要预先承诺硬件，允许组织只需为其消耗的资源付费，并且可以在几分钟内按需配置资源，从而使企业无需等待硬件采购和安装即可快速扩展。
AWS 并不管理云中的所有安全；在共享责任模型下，AWS 保护底层基础设施的安全，而客户则负责保护在该基础设施之上运行的应用程序、数据和配置的安全。用户无法访问 AWS 上的免费且无限制的存储空间； S3 和 EBS 等存储服务根据使用情况定价，虽然新帐户有免费套餐限制，但存储通常不是免费或无限制的。用户无法控制物理基础设施；迁移到云的权衡之一是客户放弃对底层硬件的物理访问和控制，而信任 AWS 安全可靠地管理它。

---

## Question 41 · Domain 3

**EN** Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?

**中** 哪种 AWS 服务将帮助用户确定在 Amazon EC2 实例上运行的应用程序是否有足够的 CPU 容量？

- **A.** Amazon CloudWatch
  - Amazon CloudWatch
- **B.** AWS Config
  - AWS Config
- **C.** AWS CloudTrail
  - AWS CloudTrail
- **D.** Amazon Inspector
  - Amazon Inspector

**答案 / Answer: `A`**

Amazon CloudWatch monitors EC2 CPU utilization metrics and can display dashboards showing whether an instance has sufficient CPU capacity for its workload, triggering alarms when defined thresholds are exceeded.
AWS Config continuously tracks and records the configuration of AWS resources to assess compliance and detect configuration changes, and does not monitor real-time performance metrics such as CPU utilization. AWS CloudTrail records API calls and account activity across an AWS environment for auditing and compliance purposes, and has no capability to monitor instance-level performance metrics. Amazon Inspector is an automated security assessment service that scans EC2 instances and container images for software vulnerabilities and unintended network exposure, and is a security tool rather than a performance monitoring service.

Amazon CloudWatch 监控 EC2 CPU 利用率指标，并可以显示仪表板，显示实例是否有足够的 CPU 容量来满足其工作负载，并在超过定义的阈值时触发警报。
AWS Config 持续跟踪和记录 AWS 资源的配置，以评估合规性并检测配置更改，并且不监控 CPU 利用率等实时性能指标。 AWS CloudTrail 记录 AWS 环境中的 API 调用和账户活动，以用于审计和合规性目的，并且无法监控实例级性能指标。 Amazon Inspector 是一种自动化安全评估服务，可扫描 EC2 实例和容器映像是否有软件漏洞和意外网络暴露，并且是一种安全工具，而不是性能监控服务。

---

## Question 42 · Domain 3

**EN** What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?

**中** Amazon Relational Database Service (Amazon RDS) 的优势之一是什么？

- **A.** It simplifies relational database administration tasks
  - 它简化了关系数据库管理任务
- **B.** It provides 99.99999999999% reliability and durability
  - 它提供 99.99999999999% 的可靠性和耐用性
- **C.** It automatically scales databases for loads
  - 它会根据负载自动扩展数据库
- **D.** It enables users to dynamically adjust CPU and RAM resources
  - 它使用户能够动态调整 CPU 和 RAM 资源

**答案 / Answer: `A`**

Amazon RDS simplifies relational database administration by automating time-consuming tasks like hardware provisioning, database setup, patching, and backups, letting customers focus on application development rather than infrastructure management.
99.9999999999% reliability and durability is a figure associated with Amazon S3's object durability, not a published SLA for Amazon RDS. Automatically scaling databases for loads describes Amazon Aurora Serverless, which scales compute capacity automatically based on demand, not a default behavior of standard RDS instances. Dynamically adjusting CPU and RAM resources describes the behavior of services with automatic vertical scaling, which RDS does not provide natively as customers must manually modify instance types to change compute resources.

Amazon RDS 通过自动执行硬件配置、数据库设置、修补和备份等耗时任务来简化关系数据库管理，让客户专注于应用程序开发而不是基础设施管理。
99.9999999999% 可靠性和耐用性是与 Amazon S3 的对象耐用性相关的数字，而不是 Amazon RDS 已发布的 SLA。自动缩放数据库负载描述了 Amazon Aurora Serverless，它根据需求自动缩放计算容量，而不是标准 RDS 实例的默认行为。动态调整 CPU 和 RAM 资源描述了具有自动垂直扩展的服务的行为，RDS 本身并不提供这种功能，因为客户必须手动修改实例类型才能更改计算资源。

---

## Question 43 · Domain 4

**EN** A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. What is the MOST appropriate response?

**中** 云从业者被问到如何估算在 AWS 上使用新应用程序的成本。最合适的回应是什么？

- **A.** Inform the user that AWS pricing allows for on-demand pricing
  - 告知用户 AWS 定价允许按需定价
- **B.** Direct the user to the AWS Pricing Calculator for an estimate
  - 将用户引导至 AWS Pricing Calculator 进行估算
- **C.** Use Amazon QuickSight to analyze current spending on-premises
  - 使用 Amazon QuickSight 分析当前的本地支出
- **D.** Use Amazon AppStream 2.0 for real-time pricing analytics
  - 使用 Amazon AppStream 2.0 进行实时定价分析

**答案 / Answer: `B`**

The AWS Pricing Calculator allows users to model AWS service configurations and generate detailed cost estimates before any resources are deployed, making it the most appropriate tool to direct a user to when they need to estimate the cost of a new application.
Informing the user that AWS uses on-demand pricing is accurate but does not help them estimate actual costs for a specific application, as it provides no tool or mechanism for calculating projected spend. Amazon QuickSight is a serverless business intelligence service for creating dashboards and visualisations from business data, and is not a tool for analyzing on-premises spending or estimating AWS costs. Amazon AppStream 2.0 is a fully managed application streaming service that delivers desktop applications to users through a browser, and has no capability for real-time pricing analytics or cost estimation.

AWS Pricing Calculator 允许用户在部署任何资源之前对 AWS 服务配置进行建模并生成详细的成本估算，这使其成为在用户需要估算新应用程序成本时指导用户的最合适工具。
告知用户 AWS 使用按需定价是准确的，但无法帮助他们估计特定应用程序的实际成本，因为它没有提供用于计算预计支出的工具或机制。 Amazon QuickSight 是一种无服务器商业智能服务，用于根据业务数据创建仪表板和可视化效果，而不是用于分析本地支出或估算 AWS 成本的工具。 Amazon AppStream 2.0 是一种完全托管的应用程序流服务，可通过浏览器向用户提供桌面应用程序，并且不具备实时定价分析或成本估算的功能。

---

## Question 44 · Domain 1

**EN** A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. What expense can be reduced using the AWS Cloud?

**中** 一家公司希望在 AWS 云中构建新的应用程序工作负载，而不是使用本地资源。使用 AWS 云可以减少哪些费用？

- **A.** The cost of writing custom-built Java or Node .js code
  - 编写定制 Java 或 Node.js 代码的成本
- **B.** Penetration testing for security
  - 安全渗透测试
- **C.** Hardware required to support new applications
  - 支持新应用程序所需的硬件
- **D.** Writing specific test cases for third-party applications
  - 为第三方应用程序编写特定的测试用例

**答案 / Answer: `C`**

Moving workloads to AWS eliminates the capital expenditure required to purchase, install, rack, and cable physical servers and networking equipment for new applications, replacing it with pay-as-you-go consumption pricing.
The cost of writing custom application code in languages such as Java or Node.js remains unchanged when moving to the cloud, as software development is a people and process cost that is independent of whether the infrastructure is on-premises or hosted on AWS. Penetration testing costs for security remain with the application team whether on-premises or in the cloud, as the need to test application and infrastructure security exists regardless of where the workload runs, and AWS provides guidance for testing its own components separately. Writing test cases for third-party applications is a development and quality assurance task that remains consistent regardless of infrastructure location, as it is determined by the third-party software requirements rather than by the hosting environment.

将工作负载迁移到 AWS 消除了为新应用程序购买、安装、机架和布线物理服务器和网络设备所需的资本支出，取而代之的是按使用量付费的消费定价。
当迁移到云时，使用 Java 或 Node.js 等语言编写自定义应用程序代码的成本保持不变，因为软件开发是人员和流程成本，与基础设施是在本地还是托管在 AWS 上无关。无论是在本地还是在云中，安全渗透测试成本仍然由应用程序团队承担，因为无论工作负载在何处运行，都需要测试应用程序和基础设施安全性，并且 AWS 提供了单独测试其自身组件的指南。为第三方应用程序编写测试用例是一项开发和质量保证任务，无论基础设施位置如何，该任务都保持一致，因为它是由第三方软件需求而不是托管环境决定的。

---

## Question 45 · Domain 1

**EN** What is an AWS Cloud design best practice?

**中** 什么是 AWS 云设计最佳实践？

- **A.** Tight coupling of components
  - 组件紧密耦合
- **B.** Single point of failure
  - 单点故障
- **C.** High availability
  - 高可用性
- **D.** Overprovisioning of resources
  - 资源过度供给

**答案 / Answer: `C`**

High availability is an AWS Cloud design best practice that ensures applications remain accessible through redundancy, multi-AZ deployments, and automatic failover mechanisms.
Tight coupling of components is an anti-pattern in cloud design, as it creates dependencies between services that cause cascading failures and contradicts the best practice of loose coupling. Single point of failure is an architectural weakness that cloud design best practices are specifically aimed at eliminating through redundancy and distributed deployments. Overprovisioning of resources is an on-premises habit that cloud adoption is intended to eliminate through pay-as-you-go pricing and elastic scaling rather than a best practice to follow.

高可用性是 AWS 云设计的最佳实践，可确保应用程序通过冗余、多可用区部署和自动故障转移机制保持可访问性。
组件的紧耦合是云设计中的反模式，因为它会在服务之间创建依赖关系，从而导致级联故障，并且与松耦合的最佳实践相矛盾。单点故障是一个架构弱点，云设计最佳实践专门旨在通过冗余和分布式部署来消除单点故障。资源过度配置是一种本地习惯，云采用旨在通过即用即付定价和弹性扩展来消除这种习惯，而不是遵循的最佳实践。

---

## Question 46 · Domain 2

**EN** Which of the following can a customer use to enable single sign-on (SSO) to the AWS Management Console?

**中** 客户可以使用以下哪项来启用 AWS 管理控制台的单点登录 (SSO)？

- **A.** Amazon Connect
  - 亚马逊连接
- **B.** AWS Directory Service
  - AWS 目录服务
- **C.** Amazon Pinpoint
  - 亚马逊精确定位
- **D.** Amazon Rekognition
  - 亚马逊重新识别

**答案 / Answer: `B`**

AWS Directory Service integrates with Microsoft Active Directory, enabling single sign-on to the AWS Management Console using existing corporate usernames and passwords without creating separate IAM users for each employee.
Amazon Connect is a cloud-based contact center service that handles customer interactions through voice and chat channels, and has no capability to enable corporate credential federation or single sign-on authentication to the AWS Management Console. Amazon Pinpoint is an outbound communications service for sending targeted messages via email, SMS, and push notifications to application users, and is a marketing and engagement service with no connection to SSO or corporate identity federation for console access. Amazon Rekognition is a machine learning service for analyzing images and videos to detect objects, faces, and scenes, and is a visual analysis service with no role in enabling corporate credential single sign-on.

AWS Directory Service 与 Microsoft Active Directory 集成，支持使用现有公司用户名和密码单点登录 AWS 管理控制台，而无需为每位员工创建单独的 IAM 用户。
Amazon Connect 是一项基于云的联络中心服务，通过语音和聊天渠道处理客户交互，并且无法启用企业凭证联合或对 AWS 管理控制台的单点登录身份验证。 Amazon Pinpoint 是一种出站通信服务，用于通过电子邮件、SMS 和推送通知向应用程序用户发送目标消息，并且是一种营销和互动服务，不连接到 SSO 或企业身份联合以进行控制台访问。 Amazon Rekognition 是一项机器学习服务，用于分析图像和视频以检测对象、人脸和场景，并且是一项视觉分析服务，不支持企业凭证单点登录。

---

## Question 47 · Domain 2

**EN** Which of the following is the responsibility of AWS?

**中** 以下哪项是 AWS 的责任？

- **A.** Setting up AWS Identity and Access Management (IAM) users and groups
  - 设置 AWS Identity and Access Management (IAM) 用户和组
- **B.** Physically destroying storage media at end of life
  - 在存储介质寿命结束时对存储介质进行物理销毁
- **C.** Patching guest operating systems
  - 修补来宾操作系统
- **D.** Configuring security settings on Amazon EC2 instances
  - 在 Amazon EC2 实例上配置安全设置

**答案 / Answer: `B`**

AWS is responsible for physically destroying storage media at end of life using industry-standard techniques to prevent data leakage, following secure decommissioning procedures as part of their data center operations under the shared responsibility model.
Setting up IAM users and groups is the customer's responsibility; customers define their own identity and access management structure including creating users, assigning them to groups, and attaching policies that control what each identity can access. Patching guest operating systems on EC2 instances is the customer's responsibility; AWS manages the underlying host hardware and hypervisor, but the operating system running inside the virtual machine must be patched and maintained by the customer. Configuring security settings on EC2 instances including firewall rules, operating system hardening, and application security configurations is the customer's responsibility as part of securing what they deploy and manage on AWS compute resources.

AWS 负责使用行业标准技术在生命周期结束时物理销毁存储介质，以防止数据泄漏，并遵循安全退役程序，作为共享责任模型下数据中心运营的一部分。
设置 IAM 用户和组是客户的责任；客户定义自己的身份和访问管理结构，包括创建用户、将其分配到组以及附加控制每个身份可以访问的内容的策略。修补 EC2 实例上的来宾操作系统是客户的责任； AWS 管理底层主机硬件和虚拟机管理程序，但虚拟机内运行的操作系统必须由客户修补和维护。在 EC2 实例上配置安全设置（包括防火墙规则、操作系统强化和应用程序安全配置）是客户的责任，作为保护他们在 AWS 计算资源上部署和管理的内容的一部分。

---

## Question 48 · Domain 4

**EN** AWS Budgets can be used to:

**中** AWS Budgets 可用于：

- **A.** Prevent a given user from creating a resource
  - 阻止给定用户创建资源
- **B.** Send an alert when the utilization of Reserved Instances drops below a certain percentage
  - 当预留实例的利用率低于一定百分比时发送警报
- **C.** Set resource limits in AWS accounts to prevent overspending
  - 在 AWS 账户中设置资源限制以防止超支
- **D.** Split an AWS bill across multiple forms of payment
  - 将 AWS 账单拆分为多种付款方式

**答案 / Answer: `B`**

AWS Budgets supports Reserved Instance utilization budgets that send alerts when the utilization of Reserved Instances drops below a defined percentage threshold, helping customers ensure they are getting value from their RI commitments.
Preventing a given user from creating a resource is an access control function achieved through IAM policies or Service Control Policies in AWS Organizations, not through AWS Budgets. AWS Budgets is an alerting and monitoring tool and cannot enforce hard limits or prevent resource creation, making setting resource limits to prevent overspending an incorrect description of its capabilities. Splitting an AWS bill across multiple forms of payment is a billing and payment method configuration handled through the AWS Billing Console, and is not a feature of AWS Budgets.

AWS Budgets 支持预留实例利用率预算，当预留实例的利用率低于定义的百分比阈值时，该预算会发送警报，帮助客户确保他们从 RI 承诺中获得价值。
阻止给定用户创建资源是通过 IAM 策略或 AWS Organizations 中的服务控制策略实现的访问控制功能，而不是通过 AWS Budgets。 AWS Budgets 是一种警报和监控工具，无法强制实施硬限制或阻止资源创建，因此设置资源限制以防止超支是对其功能的错误描述。将 AWS 账单拆分为多种付款方式是通过 AWS 账单控制台处理的账单和付款方式配置，而不是 AWS Budgets 的功能。

---

## Question 49 · Domain 2

**EN** A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. Who should the user contact FIRST about this situation?

**中** 用户正在 AWS 上运行应用程序，并注意到一个或多个 AWS 拥有的 IP 地址涉及分布式拒绝服务 (DDoS) 攻击。对于这种情况，用户应该首先联系谁？

- **A.** AWS Premium Support
  - AWS 高级支持
- **B.** AWS Technical Account Manager
  - AWS 技术客户经理
- **C.** AWS Solutions Architect
  - AWS 解决方案架构师
- **D.** AWS Abuse team
  - AWS 滥用团队

**答案 / Answer: `D`**

The AWS Abuse Team handles reports of AWS resources being used in malicious activities including DDoS attacks, and should be the first point of contact when AWS-owned IP addresses are identified as participating in an attack, as they can investigate and stop the misuse.
AWS Premium Support assists paying customers with technical issues and architectural guidance related to their own AWS environment, but is not the designated channel for reporting abuse originating from AWS IP addresses belonging to other accounts. The AWS Technical Account Manager is a support resource for Enterprise plan customers providing proactive guidance and operational reviews, but is not the appropriate contact for reporting external abuse incidents involving AWS infrastructure. AWS Solutions Architects help customers design architectures and optimize workloads, and are not the contact for reporting security incidents or abuse involving AWS infrastructure and IP addresses.

AWS 滥用团队负责处理有关 AWS 资源被用于恶意活动（包括 DDoS 攻击）的报告，并且应该是当 AWS 拥有的 IP 地址被识别为参与攻击时的第一联系人，因为他们可以调查并阻止滥用行为。
AWS Premium Support 帮助付费客户解决与其自己的 AWS 环境相关的技术问题和架构指导，但不是报告源自其他账户的 AWS IP 地址的滥用行为的指定渠道。 AWS 技术客户经理是为企业计划客户提供主动指导和运营审查的支持资源，但不是报告涉及 AWS 基础设施的外部滥用事件的适当联系人。 AWS 解决方案架构师帮助客户设计架构和优化工作负载，但不是报告涉及 AWS 基础设施和 IP 地址的安全事件或滥用的联系人。

---

## Question 50 · Domain 3

**EN** A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?

**中** 某公司在 Amazon EC2 实例上部署了多个关系数据库。数据库软件供应商每个月都会发布需要应用于数据库的新安全补丁。应用安全补丁最有效的方法是什么？

- **A.** Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor
  - 每月连接到每个数据库实例，并从供应商处下载并应用必要的安全补丁
- **B.** Enable automate patching for the instances using the Amazon RDS console
  - 使用 Amazon RDS 控制台为实例启用自动修补
- **C.** In AWS Config, configure a rule for the instances and the required patch level
  - 在 AWS Config 中，配置实例的规则和所需的补丁级别
- **D.** Use AWS Systems Manager to automate database patching according to a schedule
  - 使用 AWS Systems Manager 根据计划自动修补数据库

**答案 / Answer: `D`**

AWS Systems Manager Patch Manager automates the process of patching managed EC2 instances with security updates on a defined schedule, eliminating the need for manual intervention each time a vendor releases new patches.
Connecting to each database instance individually on a monthly basis to download and apply patches manually is the least efficient approach, requiring significant administrative effort that scales poorly as the number of instances grows. Amazon RDS console patching applies to databases managed by the RDS service, and cannot be used to patch database software running on self-managed EC2 instances where the customer is responsible for the operating system and software. AWS Config is a configuration compliance and change tracking service that can assess whether instances meet a required patch level, but does not itself automate or apply patches to instances.

AWS Systems Manager Patch Manager 可按照定义的计划自动执行使用安全更新对托管 EC2 实例进行修补的过程，从而无需在供应商每次发布新补丁时进行手动干预。
每月单独连接到每个数据库实例以手动下载和应用补丁是效率最低的方法，需要大量的管理工作，并且随着实例数量的增长而扩展性很差。 Amazon RDS 控制台修补适用于由 RDS 服务管理的数据库，不能用于修补在客户负责操作系统和软件的自管理 EC2 实例上运行的数据库软件。 AWS Config 是一种配置合规性和更改跟踪服务，可以评估实例是否满足所需的补丁级别，但本身不会自动执行补丁或将补丁应用于实例。

---

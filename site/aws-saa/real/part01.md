# AWS SAA-C03 真题演练卷 · 第 01 份

> 题目 1–50 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 1  `Select 3`

**EN** A company is designing a web application that stores sensitive customer data. The application is hosted on Amazon EC2 instances within a private subnet, and the data is stored in an Amazon RDS database. The company wants to ensure data security by encrypting data both at rest and in transit. Which combination of steps should be implemented to achieve this goal?

**中** 一家公司正在设计一个存储敏感客户数据的 Web 应用。该应用托管在私有子网中的 Amazon EC2 实例上，数据存储在 Amazon RDS 数据库中。公司希望通过同时加密静态数据和传输中的数据来确保数据安全。应实施哪一组步骤来实现这个目标？

- **A.** Enable encryption for the RDS database at the time of creation.
  - 在创建 RDS 数据库时启用加密。
- **B.** Use an Application Load Balancer (ALB) with HTTPS listeners to terminate SSL/TLS connections.
  - 使用带 HTTPS 侦听器的 Application Load Balancer (ALB) 来终止 SSL/TLS 连接。
- **C.** Enable server-side encryption (SSE) on the EC2 instance root volume using AWS KMS.
  - 使用 AWS KMS 对 EC2 实例根卷启用服务器端加密 (SSE)。
- **D.** Configure the application to use SSL/TLS to connect to the RDS database.
  - 配置应用程序使用 SSL/TLS 连接到 RDS 数据库。
- **E.** Use security groups to block all inbound traffic to the EC2 instances.
  - 使用安全组阻止所有发往 EC2 实例的入站流量。

**正确答案 / Answer: `A, B, D`**

To ensure data security in the given scenario, the company must encrypt data both at rest and in transit. Enabling encryption for the RDS database ensures that data stored in the database is encrypted at rest. Using an Application Load Balancer (ALB) with HTTPS listeners encrypts data in transit between the client and the ALB. Configuring the application to use SSL/TLS for connections to the RDS database secures data in transit between the application and the database. While server-side encryption on EC2 instances and security group rules are important, they do not directly address the encryption requirements for this scenario.

要确保数据安全，公司必须同时加密静态数据和传输中的数据。对 RDS 数据库启用加密可确保库中的静态数据被加密；使用带 HTTPS 侦听器的 ALB 可加密客户端与 ALB 之间的传输数据；配置应用通过 SSL/TLS 连接 RDS 可加密应用与数据库之间的传输数据。EC2 实例的服务器端加密和安全组规则虽然重要，但并不直接满足本场景的加密要求。

---

## Question 2  `Select 3`

**EN** Your company is building a web application on AWS that stores sensitive customer data in an Amazon S3 bucket. The application is backed by an Amazon RDS database. You are tasked with designing a secure architecture to ensure compliance with security best practices. Which combination of steps should you take to secure the data both in transit and at rest?

**中** 贵公司正在 AWS 上构建一个 Web 应用，将敏感客户数据存储在 Amazon S3 存储桶中，后端由 Amazon RDS 数据库支撑。你的任务是设计一个安全架构，确保符合安全最佳实践。应采取哪组步骤来同时保护传输中和静态的数据？

- **A.** Enable server-side encryption (SSE) on the Amazon S3 bucket using AWS Key Management Service (KMS).
  - 使用 AWS Key Management Service (KMS) 对 Amazon S3 存储桶启用服务器端加密 (SSE)。
- **B.** Use SSL/TLS to encrypt data in transit between the application and Amazon RDS.
  - 使用 SSL/TLS 加密应用与 Amazon RDS 之间的传输数据。
- **C.** Ensure the Amazon S3 bucket is publicly accessible to simplify application access.
  - 确保 Amazon S3 存储桶公开可访问，以简化应用访问。
- **D.** Enable Amazon RDS encryption at rest using AWS-managed keys.
  - 使用 AWS 托管密钥为 Amazon RDS 启用静态加密。
- **E.** Set up an IAM policy to allow all users full access to the Amazon S3 bucket for testing purposes.
  - 设置一条 IAM 策略，允许所有用户对 Amazon S3 存储桶拥有完全访问权限，以便测试。

**正确答案 / Answer: `A, B, D`**

To design a secure architecture for storing sensitive customer data on AWS, you must ensure both data at rest and data in transit are properly protected. This includes enabling encryption for S3 and RDS to secure data at rest and using SSL/TLS to secure data in transit. Avoiding risky configurations like public bucket access and overly permissive IAM policies is also critical for maintaining a secure environment.

在 AWS 上存储敏感数据的安全架构必须同时保护静态与传输中数据：为 S3 和 RDS 启用静态加密，并使用 SSL/TLS 保护传输数据。同时应避免公开访问存储桶、过度宽松的 IAM 策略等高风险配置。

---

## Question 3  `Select 3`

**EN** A company is designing a new web application that will store sensitive customer information in an Amazon RDS database. The company wants to ensure data security by encrypting the data at rest and in transit. Additionally, the company must meet compliance requirements by controlling database access at the network level. Which combination of actions should the Solutions Architect recommend?

**中** 一家公司正在设计一个新的 Web 应用，将敏感客户信息存储在 Amazon RDS 数据库中。公司希望通过静态加密和传输加密确保数据安全，同时还需通过在网络层控制数据库访问来满足合规要求。解决方案架构师应推荐哪组操作？

- **A.** Enable encryption at rest for the Amazon RDS instance using AWS KMS.
  - 使用 AWS KMS 为 Amazon RDS 实例启用静态加密。
- **B.** Use a VPC security group to restrict access to the RDS instance.
  - 使用 VPC 安全组限制对 RDS 实例的访问。
- **C.** Enable AWS Shield to protect the RDS database against DDoS attacks.
  - 启用 AWS Shield 保护 RDS 数据库免受 DDoS 攻击。
- **D.** Require SSL/TLS for database connections to encrypt data in transit.
  - 要求数据库连接使用 SSL/TLS 以加密传输数据。
- **E.** Use Amazon RDS Multi-AZ deployment to ensure high availability.
  - 使用 Amazon RDS 多可用区部署确保高可用性。

**正确答案 / Answer: `A, B, D`**

To design a secure architecture for the web application, the company must ensure that the data is protected both at rest and in transit. Enabling encryption at rest with AWS KMS and requiring SSL/TLS for database connections satisfy these requirements. Additionally, using a VPC security group ensures that access to the database is controlled at the network level. AWS Shield and Multi-AZ deployment are important for other use cases, such as availability and DDoS protection, but they are not directly relevant to the encryption and network security requirements described in this scenario.

要设计安全架构，必须同时保护静态和传输数据：KMS 静态加密 + 强制 SSL/TLS 连接满足加密要求；使用 VPC 安全组在网络层控制访问。AWS Shield 和多可用区部署对可用性/DDoS 有价值，但与本题加密和网络安全的直接要求无关。

---

## Question 4  `Select 3`

**EN** A company is designing a web application that processes sensitive customer information. The application will be hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). As part of the security requirements, the application must ensure that sensitive data is encrypted both in transit and at rest. Which of the following steps should the company take to meet these requirements?

**中** 一家公司正在设计一个处理敏感客户信息的 Web 应用，应用将托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上。作为安全要求的一部分，必须确保敏感数据在传输中和静态时都加密。公司应采取以下哪些步骤？

- **A.** Use an SSL/TLS certificate on the Application Load Balancer to enforce HTTPS connections.
  - 在 ALB 上使用 SSL/TLS 证书强制 HTTPS 连接。
- **B.** Enable server-side encryption for the S3 bucket where sensitive data backups are stored.
  - 为存储敏感数据备份的 S3 存储桶启用服务器端加密。
- **C.** Use an IAM role to allow the EC2 instances to access the sensitive data without hardcoding credentials.
  - 使用 IAM 角色让 EC2 实例访问敏感数据，而无需硬编码凭证。
- **D.** Configure the EC2 instances to use an encrypted Amazon Elastic Block Store (Amazon EBS) volume.
  - 将 EC2 实例配置为使用加密的 Amazon EBS 卷。
- **E.** Set up VPC Flow Logs to monitor and log all network traffic for the EC2 instances.
  - 设置 VPC Flow Logs 监控并记录 EC2 实例的所有网络流量。

**正确答案 / Answer: `A, B, D`**

To meet the requirements of encrypting sensitive data in transit and at rest, the company must enforce HTTPS connections on the ALB with SSL/TLS, enable server-side encryption for S3 buckets, and use encrypted EBS volumes for EC2 instances. While IAM roles and VPC Flow Logs are security best practices, they do not directly address the encryption requirements specified in the scenario.

为满足传输+静态加密，需在 ALB 上通过 SSL/TLS 强制 HTTPS、为 S3 启用服务器端加密、让 EC2 使用加密 EBS 卷。IAM 角色和 VPC Flow Logs 是安全最佳实践，但不直接满足本题的加密要求。

---

## Question 5  `Select 3`

**EN** A company wants to provide secure access for its developers to manage resources in an AWS account. The developers should only be able to access specific services and actions based on their job roles. Additionally, the company wants to ensure that access keys are not hardcoded into applications or shared manually. Which of the following solutions would meet these requirements?

**中** 一家公司希望为其开发者提供管理 AWS 账户资源的安全访问。开发者应仅能根据岗位职责访问特定服务和操作，同时公司希望确保访问密钥不被硬编码到应用中或手动共享。以下哪些方案满足这些要求？

- **A.** Create IAM roles with policies that grant the necessary permissions and allow developers to assume these roles.
  - 创建带有所需权限策略的 IAM 角色，允许开发者代入 (assume) 这些角色。
- **B.** Create IAM users for each developer, attach policies with required permissions, and share long-term access keys with them.
  - 为每位开发者创建 IAM 用户，附加所需权限的策略，并与他们共享长期访问密钥。
- **C.** Use AWS Systems Manager Session Manager to provide secure access to AWS resources without the need for SSH keys or bastion hosts.
  - 使用 AWS Systems Manager Session Manager 提供对 AWS 资源的安全访问，无需 SSH 密钥或堡垒主机。
- **D.** Enable Multi-Factor Authentication (MFA) for IAM users and enforce its use for all AWS Management Console logins.
  - 为 IAM 用户启用多因素认证 (MFA)，并对所有 AWS 管理控制台登录强制使用。
- **E.** Use Amazon Cognito to manage user identities and their access to AWS resources.
  - 使用 Amazon Cognito 管理用户身份及其对 AWS 资源的访问。

**正确答案 / Answer: `A, C, D`**

To design secure access to AWS resources, you should use IAM roles with policies for granting temporary permissions, enforce MFA to enhance account security, and leverage Systems Manager Session Manager for secure access. Sharing long-term credentials or using inappropriate services like Cognito for this purpose is not recommended.

安全访问应使用带策略的 IAM 角色授予临时权限、强制 MFA 提升账户安全、并利用 Session Manager 安全访问。共享长期凭证或将 Cognito 用于此目的是不推荐的。

---

## Question 6  `Select 3`

**EN** A company has an S3 bucket named 'company-data' that stores sensitive customer information. The bucket should only be accessible to employees within the company network via the corporate VPN. The company also wants to ensure that any access attempts from outside the corporate network are denied. How can you design secure access to the S3 bucket to meet these requirements?

**中** 一家公司有一个名为 'company-data' 的 S3 存储桶，用于存储敏感客户信息。该存储桶只应允许公司网络内的员工通过企业 VPN 访问，并确保来自公司网络外部的任何访问尝试都被拒绝。你应如何设计对该 S3 存储桶的安全访问以满足这些要求？

- **A.** Configure an S3 bucket policy to allow access only from specific IP ranges corresponding to the corporate VPN.
  - 配置 S3 存储桶策略，仅允许来自对应企业 VPN 的特定 IP 范围的访问。
- **B.** Enable S3 Block Public Access on the bucket to prevent unauthorized public access.
  - 在存储桶上启用 S3 Block Public Access 防止未授权的公开访问。
- **C.** Use an IAM role with permissions to access the bucket and assign it to employees' EC2 instances in the corporate network.
  - 使用一个具有访问该存储桶权限的 IAM 角色，并将其分配给公司网络内员工的 EC2 实例。
- **D.** Enable AWS CloudTrail logging for the bucket to monitor access attempts and identify unauthorized access.
  - 为存储桶启用 AWS CloudTrail 日志记录，以监控访问尝试并识别未授权访问。
- **E.** Use VPC endpoints for S3 to ensure traffic to the bucket stays within the AWS network.
  - 为 S3 使用 VPC 终端节点 (VPC endpoint)，确保到存储桶的流量保持在 AWS 网络内。

**正确答案 / Answer: `A, B, E`**

To secure access to the S3 bucket, you should use a combination of an S3 bucket policy to allow access only from the corporate VPN's IP ranges, enable S3 Block Public Access to prevent unauthorized public access, and use VPC endpoints for S3 to keep traffic within the AWS network. These measures collectively ensure that the bucket is only accessible to employees within the corporate network and is protected from unauthorized or public access.

应组合使用：S3 存储桶策略仅允许企业 VPN 的 IP 段、启用 S3 Block Public Access、为 S3 使用 VPC 终端节点让流量留在 AWS 网络内。这些措施共同确保存储桶仅对公司网络内员工可访问，并防止未授权/公开访问。

---

## Question 7  `Single answer`

**EN** A company is building a web application hosted on Amazon EC2 instances in a private subnet. The application needs to securely access data stored in an Amazon S3 bucket. The company requires that no S3 bucket credentials are hardcoded in the application, and all communication must remain private. How should the company securely configure access to the S3 bucket?

**中** 一家公司正在一个私有子网中的 Amazon EC2 实例上构建 Web 应用。应用需要安全地访问存储在 Amazon S3 存储桶中的数据。公司要求应用中不得硬编码任何 S3 凭证，且所有通信必须保持私有。公司应如何安全地配置对 S3 存储桶的访问？

- **A.** Assign an IAM role to the EC2 instances and configure a VPC endpoint for S3.
  - 为 EC2 实例分配一个 IAM 角色，并为 S3 配置一个 VPC 终端节点。
- **B.** Store the S3 bucket credentials in an encrypted file on the EC2 instances.
  - 将 S3 存储桶凭证存储到 EC2 实例上的加密文件中。
- **C.** Use an IAM user with programmatic access keys and configure the application to use these keys.
  - 使用一个带编程访问密钥的 IAM 用户，并配置应用使用这些密钥。
- **D.** Configure a public-facing NAT Gateway in the VPC and use it for accessing the S3 bucket.
  - 在 VPC 中配置一个面向公网的 NAT 网关并用它访问 S3 存储桶。

**正确答案 / Answer: `A`**

The correct approach to securely access an S3 bucket from EC2 instances in a private subnet is to assign an IAM role to the EC2 instances, which provides temporary credentials without hardcoding them. Configuring a VPC endpoint for S3 ensures that all traffic between the EC2 instances and the S3 bucket remains private within the AWS network, eliminating the need to route traffic through the internet or use a NAT Gateway.

从私有子网的 EC2 实例安全访问 S3 的正确做法是：为实例分配 IAM 角色（提供临时凭证，无需硬编码），并为 S3 配置 VPC 终端节点，使实例与 S3 之间的流量保持私有、无需经过互联网或 NAT 网关。

---

## Question 8  `Select 2`

**EN** A company wants to grant its development team access to specific Amazon S3 buckets while ensuring that the team cannot access other resources in the AWS account. The team members should authenticate using their corporate Active Directory credentials. Which solution will meet these requirements in the most secure and efficient way?

**中** 一家公司希望授予其开发团队访问特定 Amazon S3 存储桶的权限，同时确保该团队无法访问 AWS 账户中的其他资源。团队成员应使用其企业 Active Directory 凭证进行身份验证。哪种方案能以最安全高效的方式满足这些要求？

- **A.** Use AWS Identity and Access Management (IAM) users with bucket policies attached to each S3 bucket.
  - 使用 AWS Identity and Access Management (IAM) 用户，并为每个 S3 存储桶附加存储桶策略。
- **B.** Set up AWS Single Sign-On (AWS SSO) integrated with the corporate Active Directory, and assign permissions to access the S3 buckets through IAM roles.
  - 设置与企业 Active Directory 集成的 AWS Single Sign-On (AWS SSO)，并通过 IAM 角色分配访问 S3 存储桶的权限。
- **C.** Create an IAM policy allowing access to specific S3 buckets, attach it directly to each developer, and enable multi-factor authentication (MFA).
  - 创建一条允许访问特定 S3 存储桶的 IAM 策略，直接附加到每位开发者，并启用多因素认证 (MFA)。
- **D.** Use an identity provider (IdP) federation with SAML, create IAM roles granting access to the S3 buckets, and map the roles to permissions based on Active Directory groups.
  - 使用基于 SAML 的身份提供方 (IdP) 联合，创建授予 S3 存储桶访问权限的 IAM 角色，并根据 Active Directory 组映射角色权限。

**正确答案 / Answer: `B, D`**

To design secure access to AWS resources, integrating with the corporate Active Directory ensures that the development team can authenticate using their existing credentials. Using AWS SSO or SAML-based federation with an IdP provides a scalable and secure way to grant access to specific resources, such as Amazon S3 buckets, through IAM roles. Options 2 and 4 meet all requirements while adhering to AWS security best practices.

与企业 Active Directory 集成可让团队用现有凭证认证。使用 AWS SSO 或基于 SAML 的联合身份，可通过 IAM 角色以可扩展、安全的方式授予对特定资源（如 S3 存储桶）的访问。选项 B 和 D 满足所有要求并符合最佳实践。

---

## Question 9  `Single answer`

**EN** A company is deploying a new application using Amazon ECS with Fargate. The application requires sensitive database credentials to connect to an Amazon RDS instance. The company wants to securely manage these credentials without hardcoding them into the application code or storing them in the container image. What is the BEST way to achieve this?

**中** 一家公司正在使用 Amazon ECS 与 Fargate 部署新应用。应用需要敏感的数据库凭证来连接 Amazon RDS 实例。公司希望安全管理这些凭证，而不将其硬编码到应用代码中或存储在容器镜像中。实现这一目标的最佳方式是什么？

- **A.** Store the credentials in an Amazon S3 bucket and grant the ECS task permissions to access the bucket.
  - 将凭证存储在 Amazon S3 存储桶中，并授予 ECS 任务访问该存储桶的权限。
- **B.** Use AWS Secrets Manager to store the credentials and configure the ECS task definition to retrieve the secrets at runtime.
  - 使用 AWS Secrets Manager 存储凭证，并配置 ECS 任务定义在运行时检索这些密钥。
- **C.** Embed the credentials directly into the ECS task definition as environment variables.
  - 将凭证作为环境变量直接嵌入 ECS 任务定义。
- **D.** Encrypt the credentials using AWS KMS and include the encrypted values in the container image.
  - 使用 AWS KMS 加密凭证，并将加密后的值包含在容器镜像中。

**正确答案 / Answer: `B`**

AWS Secrets Manager is the best solution for securely managing sensitive information such as database credentials. It integrates with Amazon ECS, allowing applications to retrieve secrets at runtime without exposing them in plain text or hardcoding them. This approach also supports automated secret rotation and provides robust security controls.

AWS Secrets Manager 是安全管理数据库凭证等敏感信息的最佳方案。它与 Amazon ECS 集成，允许应用在运行时检索密钥而不以明文暴露或硬编码，同时支持自动轮换并提供强大的安全控制。

---

## Question 10  `Select 3`

**EN** A media company runs a video streaming platform that experiences significant traffic spikes during live events. They want to ensure their application can scale automatically to handle unpredictable traffic patterns while minimizing costs. Which combination of AWS services should the company use to achieve this goal?

**中** 一家媒体公司运营视频流平台，在直播活动期间会经历显著的流量峰值。他们希望确保应用能自动伸缩以应对不可预测的流量模式，同时将成本降至最低。公司应使用哪组 AWS 服务来实现这一目标？

- **A.** Amazon EC2 Auto Scaling with an Application Load Balancer
  - 带 Application Load Balancer 的 Amazon EC2 Auto Scaling
- **B.** Amazon RDS with Multi-AZ deployment
  - 采用多可用区部署的 Amazon RDS
- **C.** Amazon DynamoDB with on-demand capacity mode
  - 使用按需容量模式的 Amazon DynamoDB
- **D.** AWS Elastic Beanstalk with Auto Scaling enabled
  - 启用 Auto Scaling 的 AWS Elastic Beanstalk
- **E.** Amazon S3 with Transfer Acceleration
  - 带 Transfer Acceleration 的 Amazon S3

**正确答案 / Answer: `A, C, D`**

To handle unpredictable traffic spikes effectively, the company should use services that provide automatic scaling and cost optimization. Amazon EC2 Auto Scaling with an Application Load Balancer ensures the compute layer scales based on demand. Amazon DynamoDB with on-demand capacity mode automatically handles traffic spikes at the database layer. AWS Elastic Beanstalk simplifies application scaling by providing a managed environment with Auto Scaling enabled. Together, these services provide a comprehensive solution for scaling the application while minimizing costs.

为有效应对不可预测的流量峰值，应使用提供自动伸缩和成本优化的服务：带 ALB 的 EC2 Auto Scaling 使计算层按需伸缩；按需容量模式的 DynamoDB 自动应对数据库层流量峰值；Elastic Beanstalk 通过启用 Auto Scaling 的托管环境简化应用伸缩。三者结合可提供全面的伸缩方案并降低成本。

---

## Question 11  `Single answer`

**EN** A company is migrating its on-premises data to AWS and wants to ensure that its applications remain highly available during the transition. The company plans to use Amazon Route 53 for DNS management and needs a solution that can automatically route traffic to a healthy application version in case of failure. Which Route 53 routing policy should the company use?

**中** 一家公司正在将本地数据迁移到 AWS，并希望确保迁移期间应用保持高可用。公司计划使用 Amazon Route 53 进行 DNS 管理，需要一个能在故障时自动将流量路由到健康应用版本的方案。应使用哪种 Route 53 路由策略？

- **A.** Simple routing policy
  - 简单路由策略 (Simple routing policy)
- **B.** Failover routing policy
  - 故障转移路由策略 (Failover routing policy)
- **C.** Geolocation routing policy
  - 地理位置路由策略 (Geolocation routing policy)
- **D.** Latency routing policy
  - 延迟路由策略 (Latency routing policy)

**正确答案 / Answer: `B`**

The failover routing policy in Amazon Route 53 is the correct choice because it allows the company to specify a primary resource and a secondary resource. If Route 53 determines that the primary resource is unhealthy, it automatically routes traffic to the secondary resource, ensuring high availability. This matches the company's requirement to maintain application availability during the transition.

Route 53 的故障转移路由策略允许指定主资源和辅助资源。当 Route 53 判定主资源不健康时，会自动将流量路由到辅助资源，确保高可用，正符合公司迁移期间保持应用可用的需求。

---

## Question 12  `Select 3`

**EN** A company is designing a new web application that will be hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores sensitive customer data in an Amazon RDS database. The solution must ensure that data is encrypted both in transit and at rest. What combination of steps should the Solutions Architect take to meet this requirement?

**中** 一家公司正在设计一个将托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上的新 Web 应用，应用将敏感客户数据存储在 Amazon RDS 数据库中。方案必须确保数据在传输中和静态时都加密。解决方案架构师应采取哪组步骤？

- **A.** Enable SSL/TLS on the Application Load Balancer (ALB) and use an HTTPS listener.
  - 在 Application Load Balancer (ALB) 上启用 SSL/TLS 并使用 HTTPS 侦听器。
- **B.** Configure the EC2 instances to use an encrypted Amazon EBS volume.
  - 将 EC2 实例配置为使用加密的 Amazon EBS 卷。
- **C.** Use AWS Key Management Service (AWS KMS) to enable encryption for the Amazon RDS database.
  - 使用 AWS Key Management Service (AWS KMS) 为 Amazon RDS 数据库启用加密。
- **D.** Enable server-side encryption (SSE) on the Amazon S3 bucket used by the application.
  - 为应用使用的 Amazon S3 存储桶启用服务器端加密 (SSE)。
- **E.** Configure a WAF (Web Application Firewall) to protect the web application from attacks.
  - 配置 WAF (Web 应用防火墙) 保护 Web 应用免受攻击。

**正确答案 / Answer: `A, B, C`**

To meet the requirement of encrypting data in transit and at rest, the architect must enable SSL/TLS on the Application Load Balancer to encrypt data in transit and configure encryption for data at rest. This includes using encrypted EBS volumes for EC2 instances and enabling RDS encryption with AWS KMS. Options involving S3 SSE and WAF do not directly address the encryption requirements in this scenario.

为满足传输+静态加密，需在 ALB 上启用 SSL/TLS 加密传输数据，并对静态数据加密：EC2 使用加密 EBS 卷、RDS 使用 KMS 加密。涉及 S3 SSE 和 WAF 的选项不直接满足本场景的加密要求。

---

## Question 13  `Single answer`

**EN** A company has multiple AWS accounts that are used for different departments such as Finance, Development, and Operations. They want to centrally manage access controls to ensure that users can only access resources in their respective accounts, while also enabling centralized billing and monitoring. Which AWS service or feature should they use to achieve this?

**中** 一家公司有多个 AWS 账户，分别用于财务、开发和运维等部门。他们希望集中管理访问控制，确保用户只能访问各自账户中的资源，同时实现集中计费和监控。应使用哪种 AWS 服务或功能？

- **A.** AWS Organizations with Service Control Policies (SCPs)
  - 带有服务控制策略 (SCP) 的 AWS Organizations
- **B.** AWS Identity and Access Management (IAM) Roles only
  - 仅使用 AWS Identity and Access Management (IAM) 角色
- **C.** Amazon S3 Cross-Account Access
  - Amazon S3 跨账户访问
- **D.** AWS Resource Access Manager (RAM)
  - AWS Resource Access Manager (RAM)

**正确答案 / Answer: `A`**

AWS Organizations is the recommended service for managing multiple accounts in a centralized manner. With SCPs, you can define permissions at the organization or account level, ensuring consistent and secure access management. It also integrates with consolidated billing and other governance features, making it the best fit for this scenario.

AWS Organizations 是集中管理多个账户的推荐服务。借助 SCP，可在组织或账户级别定义权限，确保一致且安全的访问管理，并与合并计费及其他治理功能集成，最契合本场景。

---

## Question 14  `Single answer`

**EN** Your organization uses AWS Organizations to manage multiple AWS accounts. You need to ensure that IAM users and roles within a member account can access certain resources in another member account securely and with minimal administrative overhead. Which solution satisfies this requirement?

**中** 你的组织使用 AWS Organizations 管理多个 AWS 账户。你需要确保成员账户中的 IAM 用户和角色能以最小的管理开销安全地访问另一个成员账户中的某些资源。哪种方案满足此要求？

- **A.** Create cross-account IAM roles in the target account and grant permission to the source account.
  - 在目标账户中创建跨账户 IAM 角色，并向源账户授予权限。
- **B.** Manually create identical IAM users and policies in both accounts.
  - 在两个账户中手动创建相同的 IAM 用户和策略。
- **C.** Use Service Control Policies (SCPs) to grant access to the required resources across accounts.
  - 使用服务控制策略 (SCP) 跨账户授予所需资源的访问权限。
- **D.** Enable resource sharing through AWS Resource Access Manager (RAM) for the required resources.
  - 通过 AWS Resource Access Manager (RAM) 为所需资源启用资源共享。

**正确答案 / Answer: `A`**

The best way to manage access controls across multiple AWS accounts is to use cross-account IAM roles. These roles allow you to securely grant permissions to IAM users or roles in one account to access resources in another account. This approach is scalable, secure, and adheres to AWS best practices. Other options like SCPs, RAM, or duplicating IAM users are either incorrect or unsuitable for this specific scenario.

跨多账户管理访问控制的最佳方式是使用跨账户 IAM 角色。它允许安全地授予一个账户中的 IAM 用户或角色访问另一个账户资源的权限，可扩展、安全并符合最佳实践。

---

## Question 15  `Single answer`

**EN** A company has multiple AWS accounts that are part of an AWS Organizations setup. The company wants to centrally manage access for developers to specific resources across these accounts without having to create IAM users in each account. What is the MOST appropriate solution?

**中** 一家公司有多个属于 AWS Organizations 的 AWS 账户。公司希望集中管理开发者对这些账户中特定资源的访问，而无需在每个账户中创建 IAM 用户。最合适的方案是什么？

- **A.** Use AWS Systems Manager Parameter Store to share access policies across accounts.
  - 使用 AWS Systems Manager Parameter Store 跨账户共享访问策略。
- **B.** Set up AWS Single Sign-On (AWS SSO) to manage access centrally and grant permissions to resources in member accounts.
  - 设置 AWS Single Sign-On (AWS SSO) 集中管理访问，并向成员账户中的资源授予权限。
- **C.** Create IAM roles in each account and manually distribute the credentials to developers.
  - 在每个账户中创建 IAM 角色，并手动将凭证分发给开发者。
- **D.** Enable cross-account resource sharing using Resource Access Manager (RAM) and rely on IAM users for access management.
  - 使用 Resource Access Manager (RAM) 启用跨账户资源共享，并依赖 IAM 用户进行访问管理。

**正确答案 / Answer: `B`**

AWS Single Sign-On (AWS SSO) provides a centralized way to manage access across multiple AWS accounts within AWS Organizations. It eliminates the need for creating and managing individual IAM users in each account and provides a scalable solution for controlling access to resources. The other options either do not address the centralized access management requirement or are not recommended practices.

AWS Single Sign-On (AWS SSO) 提供在 AWS Organizations 内跨多个账户集中管理访问的方式。它免去了在各账户中创建和管理单个 IAM 用户的需要，是可扩展的资源访问控制方案。

---

## Question 16  `Single answer`

**EN** A company has multiple AWS accounts managed under a single AWS Organization. They want to implement centralized access management for users across all accounts while minimizing administrative overhead. Which approach should they take?

**中** 一家公司在单个 AWS Organization 下管理多个 AWS 账户。他们希望为所有账户的用户实现集中访问管理，同时尽量减少管理开销。应采取哪种方式？

- **A.** Create IAM users in each account and grant them appropriate permissions.
  - 在每个账户中创建 IAM 用户并授予适当权限。
- **B.** Use AWS Single Sign-On (AWS SSO) to manage access and permissions centrally for all accounts.
  - 使用 AWS Single Sign-On (AWS SSO) 为所有账户集中管理访问和权限。
- **C.** Set up cross-account IAM roles in each account and share the credentials with users.
  - 在每个账户中设置跨账户 IAM 角色，并与用户共享凭证。
- **D.** Use AWS Resource Access Manager (AWS RAM) to manage user access across accounts.
  - 使用 AWS Resource Access Manager (AWS RAM) 跨账户管理用户访问。

**正确答案 / Answer: `B`**

The company requires centralized access management for users across multiple AWS accounts while minimizing administrative overhead. AWS Single Sign-On (AWS SSO) is specifically designed to provide centralized user access management for AWS Organizations, making it the most suitable solution for this scenario.

公司需要跨多账户集中管理用户访问并尽量减少管理开销。AWS Single Sign-On (AWS SSO) 专为 AWS Organizations 提供集中的用户访问管理，最适合本场景。

---

## Question 17  `Single answer`

**EN** A company wants to provide its employees federated access to AWS resources using their existing corporate credentials. The company uses Microsoft Active Directory as its identity provider (IdP). They want to manage access centrally and ensure that employees can log in to the AWS Management Console without creating individual IAM users. Which solution will best meet these requirements?

**中** 一家公司希望让员工使用现有企业凭证联合访问 AWS 资源。公司使用 Microsoft Active Directory 作为身份提供方 (IdP)，希望集中管理访问，并让员工无需创建单个 IAM 用户即可登录 AWS 管理控制台。哪种方案最佳？

- **A.** Set up AWS IAM Identity Center (AWS Single Sign-On) and integrate it with the corporate Active Directory using AWS Directory Service.
  - 设置 AWS IAM Identity Center (AWS Single Sign-On)，并使用 AWS Directory Service 与公司 Active Directory 集成。
- **B.** Create individual IAM users for each employee and configure password policies to match corporate standards.
  - 为每位员工创建单独的 IAM 用户，并配置符合公司标准的密码策略。
- **C.** Use AWS Cognito to federate access between Microsoft Active Directory and AWS services.
  - 使用 AWS Cognito 在 Microsoft Active Directory 与 AWS 服务之间联合访问。
- **D.** Enable AWS IAM Federation and manually configure Active Directory to issue SAML assertions to AWS.
  - 启用 AWS IAM 联合，手动配置 Active Directory 向 AWS 颁发 SAML 断言。

**正确答案 / Answer: `A`**

The best solution for federated access to AWS resources using corporate credentials is AWS IAM Identity Center (AWS Single Sign-On). It provides centralized access management and integrates easily with Microsoft Active Directory using AWS Directory Service. This setup allows employees to use their existing credentials to log in to the AWS Management Console without creating individual IAM users, meeting the company's requirements efficiently.

使用企业凭证联合访问 AWS 的最佳方案是 AWS IAM Identity Center (AWS SSO)。它提供集中访问管理，并通过 AWS Directory Service 轻松与 Microsoft Active Directory 集成，让员工用现有凭证登录控制台而无需创建单独 IAM 用户。

---

## Question 18  `Single answer`

**EN** A company wants to grant its employees access to multiple AWS accounts using their corporate credentials managed in Microsoft Active Directory (AD). The company also requires centralized management of user permissions across these accounts. How can the company achieve this using AWS services?

**中** 一家公司希望让员工使用在 Microsoft Active Directory (AD) 中管理的企业凭证访问多个 AWS 账户，并要求集中管理这些账户中的用户权限。公司应如何利用 AWS 服务实现？

- **A.** Use AWS IAM Identity Center (AWS Single Sign-On) integrated with Microsoft Active Directory to manage federated access and assign permissions to users across AWS accounts.
  - 使用与 Microsoft Active Directory 集成的 AWS IAM Identity Center (AWS Single Sign-On) 管理联合访问，并为用户分配跨 AWS 账户的权限。
- **B.** Create individual IAM users in each AWS account and configure the IAM users to authenticate against Microsoft Active Directory.
  - 在每个 AWS 账户中创建单独的 IAM 用户，并配置这些 IAM 用户对 Microsoft Active Directory 进行身份验证。
- **C.** Configure an Amazon Cognito user pool to integrate with Microsoft Active Directory and use it to provide access across AWS accounts.
  - 配置一个 Amazon Cognito 用户池与 Microsoft Active Directory 集成，用它提供跨 AWS 账户的访问。
- **D.** Set up a custom identity broker application that integrates with Microsoft Active Directory and uses AssumeRole API calls to grant access to AWS accounts.
  - 设置一个与 Microsoft Active Directory 集成的自定义身份代理应用，并通过 AssumeRole API 授予对 AWS 账户的访问。

**正确答案 / Answer: `A`**

AWS IAM Identity Center (AWS Single Sign-On) is the recommended service for centrally managing federated access to multiple AWS accounts using corporate credentials. It integrates with Microsoft Active Directory to authenticate users and provides a centralized interface for managing permissions across accounts. This approach simplifies access management and eliminates the need for creating individual IAM users or custom identity broker applications.

AWS IAM Identity Center (AWS SSO) 是使用企业凭证集中管理多账户联合访问的推荐服务。它与 Microsoft Active Directory 集成以验证用户，并提供跨账户权限的集中管理界面。

---

## Question 19  `Single answer`

**EN** A company wants to provide its employees with secure, seamless access to the AWS Management Console and multiple AWS accounts using their existing corporate credentials. The IT team wants to minimize the need for managing IAM users and passwords in AWS. Which solution should the company implement to achieve this?

**中** 一家公司希望让员工使用现有企业凭证安全、无缝地访问 AWS 管理控制台和多个 AWS 账户。IT 团队希望尽量减少在 AWS 中管理 IAM 用户和密码的工作。应实施哪种方案？

- **A.** Configure AWS IAM Identity Center (AWS Single Sign-On) to integrate with the company's existing identity provider (IdP) using SAML 2.0.
  - 配置 AWS IAM Identity Center (AWS Single Sign-On) 使用 SAML 2.0 与公司现有身份提供方 (IdP) 集成。
- **B.** Create IAM users for each employee in every AWS account and assign them appropriate permissions.
  - 在每个 AWS 账户中为每位员工创建 IAM 用户并分配适当权限。
- **C.** Set up an AWS Lambda function to authenticate users against the company's corporate directory and grant temporary access to AWS resources.
  - 设置一个 AWS Lambda 函数对员工企业目录进行身份验证，并授予对 AWS 资源的临时访问。
- **D.** Use IAM roles with an external identity provider (IdP) to enable federated access to AWS accounts.
  - 使用带外部身份提供方 (IdP) 的 IAM 角色启用对 AWS 账户的联合访问。

**正确答案 / Answer: `A`**

AWS IAM Identity Center (AWS Single Sign-On) is the recommended service for providing federated access to AWS accounts using corporate credentials. It simplifies identity management by integrating with existing IdPs through SAML 2.0 and eliminates the need for creating and managing individual IAM users and passwords.

AWS IAM Identity Center (AWS SSO) 是使用企业凭证为 AWS 账户提供联合访问的推荐服务。它通过 SAML 2.0 与现有 IdP 集成来简化身份管理，免去创建和管理单个 IAM 用户和密码。

---

## Question 20  `Single answer`

**EN** Your company uses an on-premises Active Directory (AD) for user authentication and is migrating workloads to AWS. The IT team wants to provide federated access to AWS Management Console and other AWS resources for users in the AD domain, without the need to manage individual IAM users in the AWS account. Which solution should you implement?

**中** 你的公司使用本地 Active Directory (AD) 进行用户身份验证，并正在将工作负载迁移到 AWS。IT 团队希望为 AD 域中的用户提供对 AWS 管理控制台及其他 AWS 资源的联合访问，而无需在 AWS 账户中管理单个 IAM 用户。应实施哪种方案？

- **A.** Set up AWS IAM Identity Center (AWS Single Sign-On) and integrate it with your on-premises Active Directory using AWS Directory Service.
  - 设置 AWS IAM Identity Center (AWS Single Sign-On)，并使用 AWS Directory Service 与本地 Active Directory 集成。
- **B.** Create individual IAM users for each AD user and configure their permissions manually.
  - 为每位 AD 用户创建单独的 IAM 用户并手动配置其权限。
- **C.** Deploy an AD Connector using AWS Directory Service and configure IAM roles for SAML-based federation.
  - 使用 AWS Directory Service 部署 AD Connector，并为基于 SAML 的联合配置 IAM 角色。
- **D.** Use AWS Secrets Manager to store AD credentials and configure IAM policies to authenticate users.
  - 使用 AWS Secrets Manager 存储 AD 凭证，并配置 IAM 策略对用户进行身份验证。

**正确答案 / Answer: `A`**

AWS IAM Identity Center (AWS Single Sign-On) is the recommended service for enabling federated access to AWS resources for users in an on-premises Active Directory domain. It simplifies identity management by centralizing authentication and allowing users to access AWS resources without the need for individual IAM user accounts. This solution aligns with best practices and avoids manual, error-prone processes.

AWS IAM Identity Center (AWS SSO) 是为本地 Active Directory 域用户启用联合访问 AWS 资源的推荐服务。它通过集中身份验证来简化身份管理，让用户无需单独 IAM 用户账户即可访问 AWS 资源。

---

## Question 21  `Single answer`

**EN** A company is designing a highly available application that must run in multiple locations to ensure fault tolerance in the event of a natural disaster. The application requires low-latency connections to users within specific geographic regions. Which AWS feature should the company use to meet these requirements?

**中** 一家公司正在设计一个高可用应用，必须在多个位置运行以确保在自然灾害时的容错能力。应用需要与特定地理区域内的用户保持低延迟连接。公司应使用哪种 AWS 功能？

- **A.** Deploy the application across multiple AWS Regions.
  - 将应用部署到多个 AWS 区域 (Region)。
- **B.** Deploy the application in multiple Availability Zones within a single AWS Region.
  - 将应用部署到单个 AWS 区域内的多个可用区。
- **C.** Use Amazon CloudFront to distribute the application globally.
  - 使用 Amazon CloudFront 在全球分发应用。
- **D.** Use AWS Local Zones to host the application closer to end users.
  - 使用 AWS Local Zones 将应用托管在更靠近最终用户的位置。

**正确答案 / Answer: `A`**

To meet the requirements of fault tolerance and low-latency connections for users in specific geographic regions, deploying the application across multiple AWS Regions is the best choice. This approach ensures the application is resilient in the event of a disaster affecting one region and provides lower latency by serving users from the nearest region.

为满足容错和面向特定地理区域用户的低延迟，跨多个 AWS 区域部署是最佳选择。这样在某一区域受灾时应用仍具韧性，并通过就近区域服务用户降低延迟。

---

## Question 22  `Select 2`

**EN** Your company is planning to deploy a high-availability web application on AWS. The application must be resilient to regional failures and ensure minimal downtime. Which combination of AWS global infrastructure components should you use to meet this requirement?

**中** 你的公司计划在 AWS 上部署一个高可用 Web 应用。应用必须能抵御区域性故障并确保最短停机时间。你应使用哪组 AWS 全球基础设施组件？

- **A.** Deploy the application across multiple Availability Zones within a single AWS Region.
  - 在单个 AWS 区域内的多个可用区部署应用。
- **B.** Deploy the application across multiple AWS Regions.
  - 跨多个 AWS 区域部署应用。
- **C.** Use a single Availability Zone with Auto Scaling enabled.
  - 使用启用 Auto Scaling 的单个可用区。
- **D.** Use an Elastic Load Balancer to distribute traffic across Availability Zones.
  - 使用 Elastic Load Balancer 跨可用区分发流量。
- **E.** Enable Amazon CloudFront for global content delivery.
  - 为全球内容分发启用 Amazon CloudFront。

**正确答案 / Answer: `B, D`**

To achieve resilience to regional failures and ensure high availability, you should deploy the application across multiple AWS Regions. Additionally, to handle availability within each Region, an Elastic Load Balancer can distribute traffic across multiple Availability Zones. This combination ensures both Regional and AZ-level fault tolerance.

为抵御区域故障并确保高可用，应跨多个 AWS 区域部署应用；在每个区域内用 Elastic Load Balancer 跨多个可用区分发流量，从而实现区域级和可用区级的容错。

---

## Question 23  `Select 2`

**EN** A company is designing a multi-region disaster recovery solution for its web application. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The database is hosted on Amazon RDS. The company wants to ensure high availability and minimize downtime in case of a regional failure. Which combination of strategies should the company use?

**中** 一家公司正在为其 Web 应用设计多区域灾难恢复方案。应用托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上，数据库托管在 Amazon RDS 上。公司希望确保高可用并最大限度地减少区域故障时的停机时间。应使用哪组策略？

- **A.** Deploy the application in multiple AWS Regions and use Amazon Route 53 to configure DNS failover.
  - 在多个 AWS 区域部署应用，并使用 Amazon Route 53 配置 DNS 故障转移。
- **B.** Enable Multi-AZ for the Amazon RDS instance to ensure automatic failover within the same region.
  - 为 Amazon RDS 实例启用多可用区，以确保同一区域内的自动故障转移。
- **C.** Set up a read replica in another AWS Region for the Amazon RDS instance, and promote it to a standalone database in case of failure.
  - 在另一个 AWS 区域为 Amazon RDS 实例设置只读副本，并在故障时将其提升为独立数据库。
- **D.** Use an Auto Scaling group to launch replacement EC2 instances in the same Availability Zone during a failure.
  - 使用 Auto Scaling 组在故障期间于同一可用区启动替换 EC2 实例。
- **E.** Deploy the ALB in a single Availability Zone to reduce costs.
  - 将 ALB 部署在单个可用区以降低成本。

**正确答案 / Answer: `A, C`**

To design a multi-region disaster recovery solution, the application and database must be replicated across multiple AWS Regions. Route 53 can facilitate automated DNS failover, and a read replica in another region ensures database availability during a regional outage. Multi-AZ RDS and single AZ ALB deployments do not cover regional failures, and Auto Scaling in one AZ only addresses instance-level failures.

多区域灾难恢复方案需要应用和数据库跨多个 AWS 区域复制。Route 53 可实现自动 DNS 故障转移，跨区域只读副本可在区域中断时确保数据库可用。多可用区 RDS 和单可用区 ALB 无法覆盖区域故障，单可用区 Auto Scaling 只能处理实例级故障。

---

## Question 24  `Single answer`

**EN** Your company is migrating a global application to AWS. The application requires low-latency access for users distributed across multiple continents. Additionally, the application must comply with local data residency laws in certain countries. Which design approach best addresses these requirements?

**中** 你的公司正在将一个全球性应用迁移到 AWS。应用需要为分布在不同大洲的用户提供低延迟访问，同时还必须遵守某些国家的本地数据驻留法律。哪种设计方式最能满足这些要求？

- **A.** Deploy the application in a single AWS Region closest to the majority of users and use edge locations for caching.
  - 将应用部署在离大多数用户最近的一个 AWS 区域，并使用边缘站点进行缓存。
- **B.** Deploy the application in multiple AWS Regions and use AWS Global Accelerator to route traffic based on latency.
  - 将应用部署在多个 AWS 区域，并使用 AWS Global Accelerator 基于延迟路由流量。
- **C.** Deploy the application in a single AWS Region and use Amazon S3 Transfer Acceleration to speed up data uploads.
  - 将应用部署在单个 AWS 区域，并使用 Amazon S3 Transfer Acceleration 加速数据上传。
- **D.** Deploy the application in multiple Availability Zones within a single AWS Region to ensure high availability.
  - 将应用部署在单个 AWS 区域内的多个可用区以确保高可用。

**正确答案 / Answer: `B`**

The best approach is to deploy the application in multiple AWS Regions to reduce latency for users across different continents and comply with local data residency laws. AWS Global Accelerator further enhances performance by routing user traffic to the nearest healthy endpoint based on latency. Other options either fail to address global latency or compliance requirements.

最佳方式是在多个 AWS 区域部署应用，以降低不同大洲用户的延迟并遵守本地数据驻留法律；AWS Global Accelerator 基于延迟将用户流量路由到最近的健康终端节点，进一步提升性能。

---

## Question 25  `Select 2`

**EN** A company is setting up an AWS environment for their new application and is focused on implementing security best practices. They want to ensure that their IAM users and roles adhere to the principle of least privilege. Which of the following actions align with this principle? (Select TWO.)

**中** 一家公司正在为新应用搭建 AWS 环境，重点关注安全最佳实践。他们希望确保 IAM 用户和角色遵循最小权限原则。以下哪些操作符合该原则？(选择两项)

- **A.** Grant permissions to users based on their specific job responsibilities.
  - 根据用户的具体工作职责授予权限。
- **B.** Assign the AdministratorAccess policy to all IAM users to ensure they can perform any required task.
  - 为所有 IAM 用户分配 AdministratorAccess 策略，确保他们能执行任何所需任务。
- **C.** Regularly review and remove unused IAM roles and permissions.
  - 定期审查并移除未使用的 IAM 角色和权限。
- **D.** Use inline policies instead of managed policies for all users to simplify permission management.
  - 对所有用户使用内联策略而非托管策略，以简化权限管理。
- **E.** Allow users to self-assign additional permissions when needed.
  - 允许用户在需要时自行分配额外权限。

**正确答案 / Answer: `A, C`**

The principle of least privilege requires granting only the permissions necessary for users to perform their tasks and regularly reviewing permissions to remove unnecessary access. This reduces the risk of unauthorized or accidental misuse of resources. Granting excessive permissions, allowing users to self-assign permissions, or mismanaging policies can lead to security vulnerabilities.

最小权限原则要求只授予用户完成任务所需的权限，并定期审查权限以移除不必要的访问，从而降低未授权或误用资源的风险。授予过多权限、允许自行分配权限或策略管理不当都可能导致安全漏洞。

---

## Question 26  `Select 3`

**EN** Your company recently hired a new team of developers who need access to an Amazon S3 bucket to store application logs. The logs contain sensitive customer data, so you must ensure the principle of least privilege is followed while granting access. Which steps should you take to securely provide access to the developers?

**中** 你的公司最近招聘了一个新开发团队，他们需要访问一个 Amazon S3 存储桶来存储应用日志。日志包含敏感客户数据，因此你在授予访问时必须确保遵循最小权限原则。应采取哪些步骤来安全地提供访问？

- **A.** Create an IAM group for the developers, attach a policy granting access to only the specific S3 bucket, and add the developers to the group.
  - 为开发者创建一个 IAM 组，附加仅允许访问该特定 S3 存储桶的策略，并将开发者加入该组。
- **B.** Attach an AmazonS3FullAccess policy directly to each developer's IAM user for simplicity.
  - 为简化起见，直接将 AmazonS3FullAccess 策略附加到每位开发者的 IAM 用户。
- **C.** Use an S3 bucket policy to grant access to the developers based on their IAM roles and restrict access to specific actions like 's3:PutObject' and 's3:GetObject'.
  - 使用 S3 存储桶策略，基于开发者的 IAM 角色授予访问，并将操作限制为 's3:PutObject' 和 's3:GetObject' 等特定操作。
- **D.** Enable multi-factor authentication (MFA) for all developer IAM users and require MFA for S3 bucket access.
  - 为所有开发者 IAM 用户启用多因素认证 (MFA)，并要求访问 S3 存储桶时使用 MFA。
- **E.** Grant public read/write access to the S3 bucket to ensure the developers can access it without additional permissions.
  - 授予 S3 存储桶公共读写权限，确保开发者无需额外权限即可访问。

**正确答案 / Answer: `A, C, D`**

To follow the principle of least privilege, you should grant only the minimum permissions necessary for developers to perform their tasks. Using an IAM group with specific policies and bucket policies ensures permissions are controlled and limited to the required actions. Additionally, enabling MFA adds an extra layer of security when accessing the sensitive data. Avoid granting overly broad permissions, such as AmazonS3FullAccess, or public access, as these pose significant security risks.

遵循最小权限原则，应只授予开发者完成任务所需的最小权限：使用带特定策略的 IAM 组和存储桶策略可控制并限定到所需操作，启用 MFA 为访问敏感数据增加一层保护。应避免授予 AmazonS3FullAccess 或公共访问等过宽权限，它们会带来重大安全风险。

---

## Question 27  `Single answer`

**EN** You are designing a secure architecture for an application on AWS. The application requires access to an Amazon S3 bucket to store and retrieve files. According to AWS security best practices, how should you grant this access to the application?

**中** 你正在为 AWS 上的应用设计安全架构。应用需要访问一个 Amazon S3 存储桶来存储和检索文件。根据 AWS 安全最佳实践，应如何授予该应用此访问权限？

- **A.** Attach an AmazonS3FullAccess managed policy directly to the application's IAM role.
  - 将 AmazonS3FullAccess 托管策略直接附加到应用的 IAM 角色。
- **B.** Create a custom IAM policy with only the required S3 permissions and attach it to the application's IAM role.
  - 创建一条只含所需 S3 权限的自定义 IAM 策略，并附加到应用的 IAM 角色。
- **C.** Use the root user to manage access to the S3 bucket for the application.
  - 使用根用户管理应用对 S3 存储桶的访问。
- **D.** Make the S3 bucket public so the application can easily access it without requiring IAM permissions.
  - 将 S3 存储桶设为公开，以便应用无需 IAM 权限即可轻松访问。

**正确答案 / Answer: `B`**

The principle of least privilege states that you should grant the minimum permissions necessary for a task. By creating a custom IAM policy with only the required S3 permissions and attaching it to the application's IAM role, you ensure that the application has secure and limited access to the S3 bucket, following AWS security best practices. Options 1, 3, and 4 either violate this principle or introduce significant security risks.

最小权限原则要求只授予任务所需的最小权限。创建只含所需 S3 权限的自定义 IAM 策略并附加到应用的 IAM 角色，可确保应用对 S3 存储桶拥有安全且受限的访问，符合最佳实践。选项 1、3、4 均违反该原则或引入重大安全风险。

---

## Question 28  `Single answer`

**EN** A company is building a multi-tier application on AWS. The application uses an Amazon RDS database in the backend and EC2 instances for the application tier. The company wants to ensure that only the EC2 instances in the application tier can access the RDS database, following the principle of least privilege. How should the company configure access to the RDS database?

**中** 一家公司正在 AWS 上构建多层应用，后端使用 Amazon RDS 数据库，应用层使用 EC2 实例。公司希望确保只有应用层的 EC2 实例能访问 RDS 数据库，遵循最小权限原则。应如何配置对 RDS 数据库的访问？

- **A.** Assign an IAM role to the EC2 instances that grants access to the RDS database.
  - 为 EC2 实例分配一个授予 RDS 数据库访问权限的 IAM 角色。
- **B.** Place the EC2 instances and RDS database in the same security group.
  - 将 EC2 实例和 RDS 数据库放在同一个安全组中。
- **C.** Configure an RDS security group to allow inbound traffic only from the EC2 instances' security group.
  - 配置 RDS 安全组，仅允许来自 EC2 实例安全组的入站流量。
- **D.** Enable public access on the RDS database and restrict access using the database username and password.
  - 在 RDS 数据库上启用公共访问，并使用数据库用户名和密码限制访问。

**正确答案 / Answer: `C`**

To follow the principle of least privilege, access to the RDS database should be restricted to the EC2 instances that need it. Configuring the RDS security group to allow inbound traffic only from the EC2 instances' security group ensures that only the application tier can connect to the database. This approach minimizes the attack surface and ensures secure communication between the application and database tiers.

遵循最小权限原则，对 RDS 数据库的访问应限制为需要它的 EC2 实例。配置 RDS 安全组仅允许来自 EC2 实例安全组的入站流量，可确保只有应用层能连接数据库，从而最小化攻击面并保证应用层与数据库层的安全通信。

---

## Question 29  `Select 3`

**EN** A company is planning to host a web application using Amazon EC2 instances and Amazon RDS for its database. The application will process sensitive customer data. Under the AWS shared responsibility model, which of the following tasks is the company responsible for?

**中** 一家公司计划使用 Amazon EC2 实例和 Amazon RDS 数据库托管 Web 应用，应用将处理敏感客户数据。根据 AWS 责任共担模型，以下哪些任务是公司的责任？

- **A.** Encrypting the data stored in the Amazon RDS database
  - 加密存储在 Amazon RDS 数据库中的数据
- **B.** Managing the physical security of the data center hosting the EC2 instances
  - 管理托管 EC2 实例的数据中心的物理安全
- **C.** Applying security patches to the operating system of the EC2 instances
  - 为 EC2 实例的操作系统应用安全补丁
- **D.** Configuring network access control lists (NACLs) to restrict incoming and outgoing traffic
  - 配置网络访问控制列表 (NACL) 以限制进出流量
- **E.** Ensuring the hypervisor used by the EC2 instances is patched and secure
  - 确保 EC2 实例使用的虚拟机监控程序 (hypervisor) 已打补丁且安全

**正确答案 / Answer: `A, C, D`**

Under the AWS shared responsibility model, AWS is responsible for the security 'of' the cloud, including physical infrastructure and virtualization layers. Customers, on the other hand, are responsible for the security 'in' the cloud, which includes securing their data, configuring network security, and managing operating system patches and updates.

在责任共担模型中，AWS 负责"云的安全"（包括物理基础设施和虚拟化层）；客户负责"云中的安全"，包括保护自身数据、配置网络安全、管理操作系统补丁和更新。

---

## Question 30  `Select 3`

**EN** A company is using Amazon S3 to store sensitive data that is subject to compliance requirements. They also use EC2 instances for processing this data. According to the AWS shared responsibility model, which of the following tasks are the responsibility of the customer?

**中** 一家公司使用 Amazon S3 存储受合规要求约束的敏感数据，同时使用 EC2 实例处理这些数据。根据 AWS 责任共担模型，以下哪些任务是客户的责任？

- **A.** Encrypting sensitive data stored in Amazon S3
  - 加密存储在 Amazon S3 中的敏感数据
- **B.** Ensuring that EC2 instances are patched and updated
  - 确保 EC2 实例已打补丁并更新
- **C.** Maintaining the physical security of AWS data centers
  - 维护 AWS 数据中心的物理安全
- **D.** Configuring IAM policies to restrict access to the S3 bucket
  - 配置 IAM 策略以限制对 S3 存储桶的访问
- **E.** Ensuring that AWS provides sufficient power and cooling for its data centers
  - 确保 AWS 为其数据中心提供足够的电力和冷却

**正确答案 / Answer: `A, B, D`**

In the AWS shared responsibility model, AWS is responsible for 'security of the cloud,' which includes the physical infrastructure such as data centers, power, and cooling. The customer is responsible for 'security in the cloud,' which includes tasks such as configuring access controls (IAM policies), managing encryption, and maintaining the security of their EC2 instances and applications. This distinction ensures that customers have control over their data and workloads while AWS handles the underlying infrastructure.

在责任共担模型中，AWS 负责"云的安全"，包括数据中心、电力、冷却等物理基础设施；客户负责"云中的安全"，包括配置访问控制 (IAM 策略)、管理加密、维护其 EC2 实例和应用的安全。

---

## Question 31  `Select 3`

**EN** A company is hosting a web application on Amazon EC2 instances behind an Application Load Balancer. The company is concerned about the security and compliance of their environment. Based on the AWS shared responsibility model, which tasks are the customer's responsibility?

**中** 一家公司在 Application Load Balancer 后面的 Amazon EC2 实例上托管 Web 应用，并关注其环境的安全与合规。基于 AWS 责任共担模型，哪些任务是客户的责任？

- **A.** Configuring security groups and network ACLs for the EC2 instances
  - 为 EC2 实例配置安全组和网络 ACL
- **B.** Ensuring the operating system running on the EC2 instances is patched and updated
  - 确保 EC2 实例上运行的操作系统已打补丁并更新
- **C.** Maintaining the physical security of the data centers hosting the EC2 instances
  - 维护托管 EC2 实例的数据中心的物理安全
- **D.** Encrypting sensitive data stored on the EC2 instances
  - 加密存储在 EC2 实例上的敏感数据
- **E.** Monitoring the health and availability of the physical hardware underlying the EC2 instances
  - 监控 EC2 实例底层物理硬件的健康和可用性

**正确答案 / Answer: `A, B, D`**

The AWS shared responsibility model defines that AWS is responsible for the security 'of' the cloud, while customers are responsible for the security 'in' the cloud. This means that AWS manages and secures the infrastructure hosting the services, including physical security, hardware, and software maintenance. Meanwhile, customers are responsible for securing their own applications, data, and configurations within the cloud environment. In this scenario, configuring security groups and network ACLs, patching the operating system, and encrypting data are all customer responsibilities.

责任共担模型规定 AWS 负责"云的安全"，客户负责"云中的安全"。AWS 管理和保护托管服务的基础设施（物理安全、硬件、软件维护）；客户负责保护其在云环境中的自有应用、数据和配置。本场景中，配置安全组和 NACL、打补丁、加密数据都是客户的责任。

---

## Question 32  `Select 2`

**EN** A company is planning to migrate its on-premises web application to AWS. The application will run on Amazon EC2 instances and use Amazon S3 for storing static assets. Who is responsible for managing the security of the operating system installed on the EC2 instances and the configuration of S3 bucket permissions?

**中** 一家公司计划将本地 Web 应用迁移到 AWS。应用将在 Amazon EC2 实例上运行，并使用 Amazon S3 存储静态资源。谁负责管理 EC2 实例上操作系统的安全以及 S3 存储桶权限的配置？

- **A.** The customer is responsible for managing the security of the operating system on the EC2 instances.
  - 客户负责管理 EC2 实例上操作系统的安全。
- **B.** AWS is responsible for managing the security of the operating system on the EC2 instances.
  - AWS 负责管理 EC2 实例上操作系统的安全。
- **C.** The customer is responsible for configuring the S3 bucket permissions.
  - 客户负责配置 S3 存储桶权限。
- **D.** AWS is responsible for configuring the S3 bucket permissions.
  - AWS 负责配置 S3 存储桶权限。
- **E.** AWS is responsible for ensuring that EC2 instances are free from malware.
  - AWS 负责确保 EC2 实例不含恶意软件。

**正确答案 / Answer: `A, C`**

Under the AWS shared responsibility model, AWS is responsible for the security 'of' the cloud (e.g., infrastructure, hardware, and managed services), while the customer is responsible for the security 'in' the cloud. This includes managing the security of their operating systems on EC2 instances and configuring permissions for resources such as S3 buckets. Understanding this distinction is crucial for architecting secure solutions on AWS.

在责任共担模型中，AWS 负责"云的安全"（基础设施、硬件和托管服务），客户负责"云中的安全"，包括管理 EC2 实例操作系统的安全以及配置 S3 存储桶等资源的权限。

---

## Question 33  `Select 3`

**EN** A company is building a web application that stores sensitive customer data in an Amazon RDS database. The application is hosted on Amazon EC2 instances behind an Application Load Balancer. The company needs to ensure the application is designed securely and minimizes the risk of data breaches. Which of the following design choices should be implemented to achieve this?

**中** 一家公司正在构建一个将敏感客户数据存储在 Amazon RDS 数据库中的 Web 应用，应用托管在 Application Load Balancer 后面的 Amazon EC2 实例上。公司需要确保应用设计安全并最大限度地降低数据泄露风险。应实施以下哪些设计选择？

- **A.** Enable encryption at rest for the Amazon RDS database.
  - 为 Amazon RDS 数据库启用静态加密。
- **B.** Use an Application Load Balancer with SSL/TLS termination to encrypt traffic between clients and the load balancer.
  - 使用带 SSL/TLS 终止的 Application Load Balancer 加密客户端与负载均衡器之间的流量。
- **C.** Grant EC2 instances direct public internet access to simplify database access.
  - 授予 EC2 实例直接公网访问，以简化数据库访问。
- **D.** Use security groups to restrict database access to the application instances only.
  - 使用安全组将对数据库的访问限制为仅应用实例。
- **E.** Store database credentials as plaintext environment variables on EC2 instances.
  - 将数据库凭证以明文环境变量的形式存储在 EC2 实例上。

**正确答案 / Answer: `A, B, D`**

To design secure workloads and applications, you must ensure data is encrypted both at rest and in transit. Access to sensitive resources like databases should be tightly controlled using security groups and private networking. Additionally, secrets such as database credentials should be managed securely using AWS services designed for this purpose. Following these practices helps minimize the risk of data breaches and unauthorized access.

设计安全的工作负载和应用，必须确保数据在静态和传输时都加密，并严格限制对数据库等敏感资源的访问（使用安全组和私有网络）。数据库凭证等机密应使用 AWS 专用服务安全管理。遵循这些实践有助于降低数据泄露和未授权访问风险。

---

## Question 34  `Select 2`

**EN** Your company is deploying a web application on AWS that handles sensitive customer data. To meet security compliance requirements, you need to ensure that the workload is secure and that the data remains encrypted both at rest and in transit. Which of the following actions should you take? (Select TWO.)

**中** 你的公司正在 AWS 上部署一个处理敏感客户数据的 Web 应用。为满足安全合规要求，需确保工作负载安全且数据在静态和传输时都保持加密。应采取以下哪些操作？(选择两项)

- **A.** Use Amazon S3 with server-side encryption for storing sensitive data.
  - 使用带服务器端加密的 Amazon S3 存储敏感数据。
- **B.** Use AWS Certificate Manager to provision and manage SSL/TLS certificates for HTTPS communication.
  - 使用 AWS Certificate Manager 为 HTTPS 通信预置和管理 SSL/TLS 证书。
- **C.** Store sensitive data in Amazon EC2 instance storage for faster processing.
  - 将敏感数据存储在 Amazon EC2 实例存储中以便更快处理。
- **D.** Disable security groups temporarily to allow unrestricted access during testing.
  - 在测试期间临时禁用安全组以允许无限制访问。
- **E.** Configure S3 bucket policies to allow public read access for troubleshooting purposes.
  - 为便于排查，配置 S3 存储桶策略允许公共读访问。

**正确答案 / Answer: `A, B`**

To design secure workloads and applications, it is critical to encrypt sensitive data both at rest and in transit. Using Amazon S3 with server-side encryption protects data at rest, while AWS Certificate Manager ensures secure HTTPS communication, protecting data in transit. Options 3, 4, and 5 introduce security vulnerabilities or fail to meet encryption requirements, making them unsuitable for this scenario.

设计安全工作负载的关键是同时加密静态和传输中数据：带服务器端加密的 S3 保护静态数据，AWS Certificate Manager 确保安全的 HTTPS 通信以保护传输数据。选项 3、4、5 引入安全漏洞或未满足加密要求。

---

## Question 35  `Select 3`

**EN** A company is designing a new web application that stores sensitive customer data. The application will be hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). To ensure data security, the company wants to encrypt all traffic between the client and the application, as well as between the ALB and the EC2 instances. What should the company do to meet this requirement?

**中** 一家公司正在设计一个存储敏感客户数据的新 Web 应用，应用将托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上。为确保数据安全，公司希望加密客户端与应用之间以及 ALB 与 EC2 实例之间的所有流量。公司应如何满足此要求？

- **A.** Configure the ALB to use an HTTPS listener with a valid SSL/TLS certificate for client-to-ALB communication.
  - 配置 ALB 使用带有效 SSL/TLS 证书的 HTTPS 侦听器，用于客户端到 ALB 的通信。
- **B.** Use an HTTP listener on the ALB and configure the EC2 instances to handle SSL/TLS termination.
  - 在 ALB 上使用 HTTP 侦听器，并配置 EC2 实例处理 SSL/TLS 终止。
- **C.** Install SSL/TLS certificates on the EC2 instances and configure them to use HTTPS for ALB-to-EC2 communication.
  - 在 EC2 实例上安装 SSL/TLS 证书，并配置它们使用 HTTPS 进行 ALB 到 EC2 的通信。
- **D.** Enable server-side encryption (SSE) for the EC2 instances to secure traffic.
  - 为 EC2 实例启用服务器端加密 (SSE) 以保护流量。
- **E.** Use AWS Certificate Manager (ACM) to provision and manage SSL/TLS certificates for the ALB.
  - 使用 AWS Certificate Manager (ACM) 为 ALB 预置和管理 SSL/TLS 证书。

**正确答案 / Answer: `A, C, E`**

To design a secure workload, the company must ensure that traffic is encrypted both between the client and the ALB and between the ALB and the EC2 instances. An HTTPS listener with a valid SSL/TLS certificate on the ALB secures client-to-ALB communication. Installing SSL/TLS certificates on the EC2 instances ensures ALB-to-EC2 encryption. Using AWS Certificate Manager (ACM) simplifies certificate management for the ALB.

设计安全的工作负载，公司必须确保客户端到 ALB 之间以及 ALB 到 EC2 之间的流量都加密。在 ALB 上使用带有效 SSL/TLS 证书的 HTTPS 侦听器保护客户端到 ALB 的通信；在 EC2 实例上安装 SSL/TLS 证书确保 ALB 到 EC2 的加密；使用 ACM 简化 ALB 的证书管理。

---

## Question 36  `Select 3`

**EN** A company is migrating its on-premises application to AWS. The application processes sensitive customer data and must comply with strict regulatory requirements. The application uses an Amazon EC2 instance to host the backend and stores data in an Amazon S3 bucket. As a Solutions Architect, how can you ensure that the workload is secure and meets compliance requirements?

**中** 一家公司正在将本地应用迁移到 AWS。应用处理敏感客户数据，必须遵守严格的监管要求，其后端托管在 Amazon EC2 实例上，并将数据存储在 Amazon S3 存储桶中。作为解决方案架构师，你如何确保工作负载安全并满足合规要求？

- **A.** Enable server-side encryption (SSE) for the Amazon S3 bucket to encrypt customer data at rest.
  - 为 Amazon S3 存储桶启用服务器端加密 (SSE)，加密静态客户数据。
- **B.** Use AWS Key Management Service (AWS KMS) to manage encryption keys for the S3 bucket.
  - 使用 AWS Key Management Service (AWS KMS) 管理 S3 存储桶的加密密钥。
- **C.** Attach an IAM policy to the EC2 instance role that grants full S3 bucket access to all users.
  - 为 EC2 实例角色附加一条 IAM 策略，授予所有用户对 S3 存储桶的完全访问权限。
- **D.** Use AWS Systems Manager Session Manager to securely access the EC2 instance without opening SSH ports.
  - 使用 AWS Systems Manager Session Manager 安全访问 EC2 实例，无需开放 SSH 端口。
- **E.** Set up S3 bucket policies to allow public read access for quick data sharing.
  - 设置 S3 存储桶策略允许公共读访问，以便快速共享数据。

**正确答案 / Answer: `A, B, D`**

To design secure workloads and applications, it is essential to enforce encryption for data at rest and in transit, minimize attack surfaces, and apply the principle of least privilege. Enabling server-side encryption for S3, using AWS KMS, and leveraging AWS Systems Manager for secure EC2 instance access all contribute to securing the workload and meeting compliance requirements. Avoid granting excessive permissions or exposing sensitive data to the public, as these practices can lead to security vulnerabilities.

设计安全工作负载需强制静态和传输加密、最小化攻击面并遵循最小权限原则。为 S3 启用服务器端加密、使用 AWS KMS、利用 Systems Manager 安全访问 EC2 实例都有助于保护工作负载并满足合规要求。应避免授予过多权限或向公众暴露敏感数据。

---

## Question 37  `Single answer`

**EN** A company runs a web application that stores critical business data in an Amazon RDS MySQL instance. The application has been experiencing performance issues, and the team has identified that the database is under heavy read traffic. The team wants to improve application performance and ensure high availability while minimizing changes to the existing application. What is the BEST solution to meet these requirements?

**中** 一家公司运行一个 Web 应用，将关键业务数据存储在 Amazon RDS MySQL 实例中。应用一直存在性能问题，团队发现数据库承受着繁重的读流量。团队希望在尽量少改动现有应用的前提下提升性能并确保高可用。最佳方案是什么？

- **A.** Enable Multi-AZ deployment for the Amazon RDS MySQL instance.
  - 为 Amazon RDS MySQL 实例启用多可用区部署。
- **B.** Create an Amazon RDS Read Replica and configure the application to offload read traffic to the replica.
  - 创建 Amazon RDS 只读副本，并配置应用将读流量卸载到副本。
- **C.** Increase the RDS instance size to handle more read and write traffic.
  - 增大 RDS 实例规格以处理更多读写流量。
- **D.** Migrate the database to Amazon DynamoDB for better scalability.
  - 将数据库迁移到 Amazon DynamoDB 以获得更好的可扩展性。

**正确答案 / Answer: `B`**

The best solution to improve performance for a read-heavy workload while maintaining high availability is to create an Amazon RDS Read Replica. This allows the application to distribute read traffic between the primary instance and the replica, improving performance without requiring significant changes to the application. While other options provide benefits in specific scenarios, they do not address the specific need for scaling read traffic effectively with minimal changes.

在保持高可用的同时提升读密集工作负载性能的最佳方案是创建 Amazon RDS 只读副本。它让应用在主实例与副本之间分配读流量，无需大幅改动应用即可提升性能。

---

## Question 38  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user data in an Amazon RDS database and uses an Amazon S3 bucket to store user-uploaded files. The company notices that user-uploaded files occasionally fail to upload due to transient S3 service interruptions. What is the BEST solution to ensure the application's availability and reliability during such interruptions?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用。应用将用户数据存储在 Amazon RDS 数据库中，并使用 Amazon S3 存储桶存储用户上传的文件。公司发现用户上传的文件偶尔因 S3 服务的瞬时中断而上传失败。确保此类中断期间应用可用性和可靠性的最佳方案是什么？

- **A.** Enable S3 Transfer Acceleration to reduce latency and improve performance.
  - 启用 S3 Transfer Acceleration 以降低延迟并提升性能。
- **B.** Implement an Amazon SQS queue to temporarily store file upload requests and process them later.
  - 实施一个 Amazon SQS 队列临时存储文件上传请求，稍后处理。
- **C.** Set up an Amazon CloudFront distribution in front of the S3 bucket to cache the uploaded files.
  - 在 S3 存储桶前设置一个 Amazon CloudFront 分发来缓存上传的文件。
- **D.** Use an S3 Event Notification to trigger an AWS Lambda function that retries failed uploads.
  - 使用 S3 事件通知触发一个 AWS Lambda 函数重试失败的上传。

**正确答案 / Answer: `B`**

Transient service interruptions in S3 can cause file uploads to fail. To address this, decoupling the upload process with an Amazon SQS queue ensures that file upload requests are not lost and can be retried later when the S3 service is available. This approach increases the reliability and availability of the application.

S3 的瞬时服务中断可能导致文件上传失败。用 Amazon SQS 队列解耦上传流程，可确保上传请求不丢失，并在 S3 服务恢复后重试，从而提升应用的可靠性和可用性。

---

## Question 39  `Single answer`

**EN** A company is designing a web application that will be hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The application needs to store session data for users, ensuring high availability and fault tolerance. Which solution best meets these requirements?

**中** 一家公司正在设计一个将托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上的 Web 应用。应用需要存储用户会话数据，确保高可用和容错。哪种方案最佳？

- **A.** Store session data in Amazon RDS with Multi-AZ enabled.
  - 将会话数据存储在启用多可用区的 Amazon RDS 中。
- **B.** Store session data in Amazon ElastiCache using Redis with cluster mode enabled.
  - 将会话数据存储在启用集群模式的 Amazon ElastiCache (Redis) 中。
- **C.** Store session data on the EC2 instance's instance store.
  - 将会话数据存储在 EC2 实例的实例存储 (instance store) 上。
- **D.** Store session data in an Amazon S3 bucket.
  - 将会话数据存储在 Amazon S3 存储桶中。

**正确答案 / Answer: `B`**

Amazon ElastiCache using Redis with cluster mode enabled is well-suited for session management due to its ability to provide low-latency, high-throughput access to data. It also ensures fault tolerance and high availability through clustering and replication, making it the best choice for this scenario.

启用集群模式的 Amazon ElastiCache (Redis) 非常适合会话管理，因为它能提供低延迟、高吞吐的数据访问，并通过集群和复制确保容错与高可用。

---

## Question 40  `Select 2`

**EN** A company is designing a serverless application using AWS Lambda and Amazon S3. The application needs to process image files uploaded to an S3 bucket. Once an image is uploaded, the Lambda function should be triggered automatically to generate thumbnails for the image. The solution should be cost-effective and scalable. Which configuration steps should be taken to meet these requirements?

**中** 一家公司正在使用 AWS Lambda 和 Amazon S3 设计无服务器应用。应用需要处理上传到 S3 存储桶的图片文件。图片上传后，应自动触发 Lambda 函数为图片生成缩略图。方案应具成本效益且可扩展。应采取哪些配置步骤？

- **A.** Configure the S3 bucket to use Event Notifications to trigger the Lambda function on the 's3:ObjectCreated' event.
  - 配置 S3 存储桶使用事件通知，在 's3:ObjectCreated' 事件上触发 Lambda 函数。
- **B.** Set up an Amazon S3 Lifecycle policy to transition objects to Amazon S3 Glacier after processing.
  - 设置 Amazon S3 生命周期策略，在处理后将对象转移到 Amazon S3 Glacier。
- **C.** Write an IAM policy that grants the Lambda function permissions to read objects from the S3 bucket and write thumbnails back to the bucket.
  - 编写一条 IAM 策略，授予 Lambda 函数从 S3 存储桶读取对象并将缩略图写回存储桶的权限。
- **D.** Enable cross-region replication on the S3 bucket to enhance data durability and availability.
  - 在 S3 存储桶上启用跨区域复制以增强数据持久性和可用性。
- **E.** Create an Amazon SQS queue to buffer notifications from S3 before invoking the Lambda function.
  - 创建一个 Amazon SQS 队列在调用 Lambda 函数前缓冲来自 S3 的通知。

**正确答案 / Answer: `A, C`**

To meet the requirements of a cost-effective, scalable image processing system, AWS S3 Event Notifications should be configured to trigger the Lambda function whenever an image is uploaded. Additionally, the Lambda function must have sufficient IAM permissions to interact with the S3 bucket. The other options, such as lifecycle policies, cross-region replication, or SQS, are unnecessary or irrelevant for this specific use case.

为满足成本效益和可扩展的图片处理需求，应配置 S3 事件通知在图片上传时触发 Lambda 函数；同时 Lambda 函数必须具备足够的 IAM 权限与 S3 存储桶交互。生命周期策略、跨区域复制或 SQS 对本用例不必要或不相关。

---

## Question 41  `Single answer`

**EN** Your company is developing a serverless application using AWS Lambda. The application needs to securely access an Amazon S3 bucket to store and retrieve files. What is the MOST secure way to grant the Lambda function access to the S3 bucket?

**中** 你的公司正在使用 AWS Lambda 开发一个无服务器应用。应用需要安全地访问一个 Amazon S3 存储桶来存储和检索文件。授予 Lambda 函数访问 S3 存储桶的最安全方式是什么？

- **A.** Embed the S3 bucket credentials directly into the Lambda function code.
  - 将 S3 存储桶凭证直接嵌入 Lambda 函数代码。
- **B.** Store the S3 bucket access keys in an encrypted file within an Amazon S3 bucket and import them into the Lambda function at runtime.
  - 将 S3 存储桶访问密钥存储在 Amazon S3 存储桶内的加密文件中，并在运行时导入 Lambda 函数。
- **C.** Assign an IAM role to the Lambda function with permissions to access the S3 bucket.
  - 为 Lambda 函数分配一个具有访问 S3 存储桶权限的 IAM 角色。
- **D.** Use environment variables in the Lambda function to store the S3 bucket access keys.
  - 使用 Lambda 函数中的环境变量存储 S3 存储桶访问密钥。

**正确答案 / Answer: `C`**

When granting AWS Lambda functions access to other AWS resources, the recommended approach is to assign an IAM role to the Lambda function. This allows AWS to automatically provide secure, temporary credentials to the function when it executes, removing the need to manage or expose static credentials. This approach adheres to the principle of least privilege and helps maintain a secure application architecture.

授予 AWS Lambda 函数访问其他 AWS 资源时，推荐做法是为 Lambda 函数分配 IAM 角色。这让 AWS 在函数执行时自动提供安全的临时凭证，无需管理或暴露静态凭证，符合最小权限原则并有助于维持安全的应用架构。

---

## Question 42  `Single answer`

**EN** A development team is building a serverless application using AWS Lambda functions. The application requires access to an Amazon DynamoDB table to store and retrieve data. To ensure secure access while adhering to the principle of least privilege, how should the team configure the application?

**中** 一个开发团队正在使用 AWS Lambda 函数构建无服务器应用。应用需要访问一个 Amazon DynamoDB 表来存储和检索数据。为确保安全访问并遵循最小权限原则，团队应如何配置应用？

- **A.** Embed the access keys of an IAM user with DynamoDB permissions directly into the application code.
  - 将具有 DynamoDB 权限的 IAM 用户访问密钥直接嵌入应用代码。
- **B.** Assign an IAM role to the Lambda function with the necessary permissions to access the DynamoDB table.
  - 为 Lambda 函数分配一个具有访问 DynamoDB 表所需权限的 IAM 角色。
- **C.** Store the access keys of an IAM user with DynamoDB permissions in AWS Secrets Manager and retrieve them from the Lambda function at runtime.
  - 将具有 DynamoDB 权限的 IAM 用户访问密钥存储在 AWS Secrets Manager 中，并在运行时从 Lambda 函数检索。
- **D.** Assign the Lambda function a policy granting full access to all DynamoDB tables in the AWS account.
  - 为 Lambda 函数分配一条授予对 AWS 账户中所有 DynamoDB 表完全访问权限的策略。

**正确答案 / Answer: `B`**

The best practice for securing application credentials and adhering to the principle of least privilege is to use IAM roles. By assigning an IAM role to the Lambda function, AWS automatically provides secure, temporary credentials scoped to the permissions defined in the role. This eliminates the need for hardcoding or managing long-term access keys, reducing the risk of accidental exposure.

保护应用凭证并遵循最小权限原则的最佳实践是使用 IAM 角色。为 Lambda 函数分配 IAM 角色后，AWS 会自动提供限定于该角色所定义权限的安全临时凭证，无需硬编码或管理长期访问密钥，从而降低意外暴露风险。

---

## Question 43  `Single answer`

**EN** An application running on Amazon EC2 instances needs to access an Amazon S3 bucket to store logs. The application currently stores the AWS access key and secret key in a configuration file on the instance. What is the most secure and recommended way to provide the necessary permissions to the application?

**中** 一个运行在 Amazon EC2 实例上的应用需要访问一个 Amazon S3 存储桶来存储日志。应用目前将 AWS 访问密钥和私有密钥存储在实例上的配置文件中。向应用提供必要权限的最安全且推荐的方式是什么？

- **A.** Use an IAM role assigned to the EC2 instance to grant the necessary permissions.
  - 使用分配给 EC2 实例的 IAM 角色授予必要权限。
- **B.** Store the AWS access key and secret key in an encrypted file on the instance.
  - 将 AWS 访问密钥和私有密钥存储在实例上的加密文件中。
- **C.** Hardcode the AWS access key and secret key into the application code.
  - 将 AWS 访问密钥和私有密钥硬编码到应用代码中。
- **D.** Use Amazon S3 bucket policies to directly allow access to the application.
  - 使用 Amazon S3 存储桶策略直接允许应用访问。

**正确答案 / Answer: `A`**

The recommended approach for securely granting permissions to applications running on EC2 instances is to use IAM roles. By assigning an IAM role to the instance, you eliminate the need to store and manage credentials manually. The instance can retrieve temporary credentials from the instance metadata service, which are automatically rotated and managed by AWS.

为 EC2 实例上运行的应用安全授予权限的推荐方式是使用 IAM 角色。为实例分配角色后，无需手动存储和管理凭证：实例可从实例元数据服务获取临时凭证，这些凭证由 AWS 自动轮换和管理。

---

## Question 44  `Single answer`

**EN** You are developing an application that will run on Amazon EC2 instances. The application requires access to an Amazon S3 bucket to store and retrieve files. How can you securely provide the application with the necessary credentials to access the S3 bucket?

**中** 你正在开发一个将在 Amazon EC2 实例上运行的应用。应用需要访问一个 Amazon S3 存储桶来存储和检索文件。你如何安全地为应用提供访问 S3 存储桶所需的凭证？

- **A.** Embed the AWS access key and secret key directly in the application code.
  - 将 AWS 访问密钥和私有密钥直接嵌入应用代码。
- **B.** Use an IAM role assigned to the EC2 instance to grant access to the S3 bucket.
  - 使用分配给 EC2 实例的 IAM 角色授予对 S3 存储桶的访问权限。
- **C.** Store the AWS access key and secret key in the EC2 instance's user data script.
  - 将 AWS 访问密钥和私有密钥存储在 EC2 实例的用户数据脚本中。
- **D.** Manually create long-term access keys and distribute them to the EC2 instance.
  - 手动创建长期访问密钥并分发到 EC2 实例。

**正确答案 / Answer: `B`**

Assigning an IAM role to an EC2 instance is the best practice for securely providing applications running on the instance with access to AWS resources. The role allows the instance to request temporary credentials from the instance metadata service, eliminating the need to hardcode or manually manage credentials. This approach minimizes security risks and follows AWS's recommended guidelines for application configuration and credentials management.

为 EC2 实例分配 IAM 角色是为实例上运行的应用提供 AWS 资源访问权限的最佳实践。角色允许实例从实例元数据服务请求临时凭证，无需硬编码或手动管理凭证，从而最大限度地降低安全风险。

---

## Question 45  `Single answer`

**EN** A company is configuring an application that will run in a private subnet of their VPC in AWS. The application needs to access an Amazon S3 bucket in the same region, but the company wants to avoid using the public internet to improve security. What is the most appropriate solution to achieve this?

**中** 一家公司正在配置一个将在其 VPC 私有子网中运行的应用。应用需要访问同一区域内的 Amazon S3 存储桶，但公司希望避免使用公网以提升安全性。最合适的方案是什么？

- **A.** Create a VPC endpoint for Amazon S3 and update the route table of the private subnet to use the endpoint.
  - 为 Amazon S3 创建一个 VPC 终端节点，并更新私有子网的路由表以使用该终端节点。
- **B.** Configure a NAT gateway in the private subnet to allow the application to access Amazon S3.
  - 在私有子网中配置一个 NAT 网关，允许应用访问 Amazon S3。
- **C.** Use an Elastic IP to assign a public IP address to the application and access Amazon S3 directly.
  - 使用弹性 IP 为应用分配公网 IP 地址并直接访问 Amazon S3。
- **D.** Enable internet access for the private subnet by associating it with an internet gateway and access Amazon S3.
  - 通过将私有子网与互联网网关关联来为其启用互联网访问，并访问 Amazon S3。

**正确答案 / Answer: `A`**

To securely access Amazon S3 from a private subnet without using the public internet, a VPC endpoint for S3 is the most appropriate solution. This enables private connectivity between the VPC and S3, ensuring data does not traverse the public internet. Updating the route table ensures that traffic destined for S3 is routed through the endpoint.

要从私有子网安全访问 Amazon S3 而不经公网，S3 的 VPC 终端节点是最合适的方案。它在 VPC 与 S3 之间启用私有连接，确保数据不经过公网；更新路由表则确保发往 S3 的流量经终端节点路由。

---

## Question 46  `Single answer`

**EN** A company is running a workload in a VPC and requires private connectivity to AWS services such as Amazon S3 and Amazon DynamoDB. The solution should ensure that traffic does not traverse the public internet and should minimize the need for managing additional infrastructure such as NAT gateways. Which solution meets these requirements?

**中** 一家公司正在 VPC 中运行工作负载，需要与 Amazon S3 和 Amazon DynamoDB 等 AWS 服务建立私有连接。方案应确保流量不经过公网，并尽量减少管理 NAT 网关等额外基础设施的需要。哪种方案满足这些要求？

- **A.** Create VPC endpoints for Amazon S3 and Amazon DynamoDB.
  - 为 Amazon S3 和 Amazon DynamoDB 创建 VPC 终端节点。
- **B.** Use a NAT gateway to route traffic to Amazon S3 and Amazon DynamoDB.
  - 使用 NAT 网关将流量路由到 Amazon S3 和 Amazon DynamoDB。
- **C.** Establish a VPN connection between the VPC and AWS to access Amazon S3 and Amazon DynamoDB privately.
  - 在 VPC 与 AWS 之间建立 VPN 连接以私有方式访问 Amazon S3 和 Amazon DynamoDB。
- **D.** Use an internet gateway to route traffic to Amazon S3 and Amazon DynamoDB.
  - 使用互联网网关将流量路由到 Amazon S3 和 Amazon DynamoDB。

**正确答案 / Answer: `A`**

VPC endpoints provide private connectivity between resources in a VPC and AWS services such as Amazon S3 and DynamoDB, ensuring that traffic does not traverse the public internet. This solution minimizes additional infrastructure requirements and costs compared to options like NAT gateways. Using internet gateways or VPN connections would not achieve the required private connectivity to AWS services.

VPC 终端节点在 VPC 内资源与 Amazon S3、DynamoDB 等 AWS 服务之间提供私有连接，确保流量不经过公网。与 NAT 网关等方案相比，它还能最大限度减少额外基础设施需求和成本。

---

## Question 47  `Single answer`

**EN** A company has deployed an application in a private subnet within a VPC. The application needs to securely access an Amazon S3 bucket in the same region without using a public internet connection. What is the most cost-effective solution to achieve this?

**中** 一家公司在 VPC 的私有子网中部署了一个应用。应用需要在不使用公网连接的情况下安全访问同一区域内的 Amazon S3 存储桶。最具成本效益的方案是什么？

- **A.** Configure a NAT Gateway in the public subnet and route traffic to the S3 bucket through it.
  - 在公有子网中配置一个 NAT 网关，并通过它将流量路由到 S3 存储桶。
- **B.** Set up a VPC endpoint for Amazon S3 and update the route table of the private subnet to route traffic to the endpoint.
  - 为 Amazon S3 设置一个 VPC 终端节点，并更新私有子网的路由表将流量路由到该终端节点。
- **C.** Use an Internet Gateway and attach it to the VPC, allowing the application to access S3 over the internet.
  - 使用互联网网关并将其附加到 VPC，允许应用通过互联网访问 S3。
- **D.** Establish a VPN connection from the private subnet to the Amazon S3 service.
  - 从私有子网到 Amazon S3 服务建立 VPN 连接。

**正确答案 / Answer: `B`**

The most cost-effective and secure way for an application in a private subnet to access an Amazon S3 bucket in the same region is by setting up a VPC endpoint for Amazon S3. This allows the traffic to remain within the AWS network, avoiding the need for an internet connection or a NAT Gateway, which would incur additional costs.

私有子网中的应用访问同区域 S3 存储桶最具成本效益且安全的方式是设置 S3 的 VPC 终端节点。这让流量保持在 AWS 网络内，无需互联网连接或会增加额外成本的 NAT 网关。

---

## Question 48  `Single answer`

**EN** A company is deploying an application in a VPC that needs to securely communicate with an Amazon S3 bucket in the same region. The company wants to ensure that the traffic does not traverse the public internet. What is the most appropriate solution?

**中** 一家公司正在 VPC 中部署一个应用，需要与同一区域内的 Amazon S3 存储桶安全通信，并希望确保流量不经过公网。最合适的方案是什么？

- **A.** Use an S3 VPC endpoint to establish private connectivity between the VPC and Amazon S3.
  - 使用 S3 VPC 终端节点在 VPC 与 Amazon S3 之间建立私有连接。
- **B.** Use an internet gateway to route traffic from the VPC to Amazon S3.
  - 使用互联网网关将流量从 VPC 路由到 Amazon S3。
- **C.** Enable AWS Direct Connect to establish a private connection between the VPC and Amazon S3.
  - 启用 AWS Direct Connect 在 VPC 与 Amazon S3 之间建立私有连接。
- **D.** Attach a NAT gateway to the VPC for accessing Amazon S3 privately.
  - 为 VPC 附加一个 NAT 网关以私有方式访问 Amazon S3。

**正确答案 / Answer: `A`**

To ensure private communication between a VPC and Amazon S3, an S3 VPC endpoint is the best solution. It uses AWS PrivateLink to keep the traffic within the AWS network, avoiding the public internet. Other options like an internet gateway or NAT gateway do not meet the requirement of keeping the traffic private.

为确保 VPC 与 Amazon S3 之间的私有通信，S3 VPC 终端节点是最佳方案。它使用 AWS PrivateLink 使流量保持在 AWS 网络内、避免公网。互联网网关或 NAT 网关无法满足保持流量私有的要求。

---

## Question 49  `Single answer`

**EN** Your company is hosting a web application on an Amazon EC2 instance in a public subnet. Users report they cannot access the application. Upon investigation, you discover the EC2 instance is running correctly, and the application is listening on port 80. Which configuration change is most likely needed to resolve the issue?

**中** 你的公司在公有子网中的 Amazon EC2 实例上托管 Web 应用。用户报告无法访问该应用。经排查，EC2 实例运行正常，应用正在侦听 80 端口。最可能需要哪项配置更改来解决问题？

- **A.** Add an inbound rule to the instance's Security Group to allow traffic on port 80 from 0.0.0.0/0.
  - 为实例的安全组添加一条入站规则，允许来自 0.0.0.0/0 的 80 端口流量。
- **B.** Add an outbound rule to the instance's Security Group to allow traffic on port 80 to 0.0.0.0/0.
  - 为实例的安全组添加一条出站规则，允许到 0.0.0.0/0 的 80 端口流量。
- **C.** Create a Network ACL rule to explicitly allow inbound traffic on port 80 from 0.0.0.0/0.
  - 创建一条网络 ACL 规则，显式允许来自 0.0.0.0/0 的 80 端口入站流量。
- **D.** Enable port forwarding in the EC2 instance's operating system to redirect traffic to port 80.
  - 在 EC2 实例的操作系统中启用端口转发，将流量重定向到 80 端口。

**正确答案 / Answer: `A`**

The issue lies in controlling network traffic to the EC2 instance. Security Groups are stateful, and to allow inbound traffic to the application, an inbound rule for port 80 must be added. This ensures external traffic can reach the web application.

问题在于对 EC2 实例网络流量的控制。安全组是有状态的，要允许入站流量到达应用，必须添加一条 80 端口的入站规则，这样外部流量才能到达 Web 应用。

---

## Question 50  `Select 2`

**EN** Your company runs a web application hosted on an EC2 instance in a public subnet of a VPC. To improve security, you are tasked with ensuring that only HTTP (port 80) and HTTPS (port 443) traffic from the internet can access the EC2 instance, while blocking all other traffic. Which configuration changes should you make to implement this requirement?

**中** 你的公司在 VPC 公有子网中的 EC2 实例上运行 Web 应用。为提升安全性，你需确保只有来自互联网的 HTTP (80 端口) 和 HTTPS (443 端口) 流量能访问该 EC2 实例，阻止所有其他流量。应进行哪些配置更改？

- **A.** Configure the Security Group attached to the EC2 instance to allow inbound traffic only on ports 80 and 443 from 0.0.0.0/0.
  - 配置附加到 EC2 实例的安全组，仅允许来自 0.0.0.0/0 的 80 和 443 端口入站流量。
- **B.** Update the Network ACL associated with the subnet to allow inbound traffic on ports 80 and 443 from 0.0.0.0/0 and deny all other inbound traffic.
  - 更新与子网关联的网络 ACL，允许来自 0.0.0.0/0 的 80 和 443 端口入站流量并拒绝所有其他入站流量。
- **C.** Create a new route in the subnet's route table to explicitly allow traffic on ports 80 and 443.
  - 在子网路由表中创建一条新路由，显式允许 80 和 443 端口的流量。
- **D.** Remove the default outbound rule in the Security Group that allows all traffic.
  - 移除安全组中允许所有流量的默认出站规则。
- **E.** Disable the default VPC DNS resolver to prevent unauthorized traffic.
  - 禁用默认 VPC DNS 解析器以防止未授权流量。

**正确答案 / Answer: `A, B`**

To control ports, protocols, and network traffic, you need to configure both Security Groups and Network ACLs. Security Groups operate at the instance level and allow or deny specific inbound and outbound traffic. Network ACLs operate at the subnet level and provide an additional layer of control. By configuring both correctly, you ensure that only HTTP and HTTPS traffic can reach the EC2 instance, while blocking all other traffic.

要控制端口、协议和网络流量，需同时配置安全组和网络 ACL。安全组作用于实例级，允许或拒绝特定的入站和出站流量；网络 ACL 作用于子网级，提供额外的控制层。正确配置两者即可确保只有 HTTP 和 HTTPS 流量能到达 EC2 实例。

---

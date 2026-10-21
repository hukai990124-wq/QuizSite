# AWS SAA-C03 真题演练卷 · 第 02 份

> 题目 51–100 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 51  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application is accessible over HTTPS, and the company wants to ensure that only HTTPS traffic is allowed to reach the instances. How can the company achieve this?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。该应用程序可通过 HTTPS 访问，并且该公司希望确保仅允许 HTTPS 流量到达实例。公司如何才能实现这一目标？

- **A.** Configure the ALB to redirect all HTTP traffic to HTTPS.
  - 配置 ALB 以将所有 HTTP 流量重定向到 HTTPS。
- **B.** Modify the ALB's security group to allow only inbound traffic on port 443.
  - 修改 ALB 的安全组以仅允许端口 443 上的入站流量。
- **C.** Set up a Network ACL to block all traffic except for HTTPS on port 443.
  - 设置网络 ACL 以阻止端口 443 上除 HTTPS 之外的所有流量。
- **D.** Add a rule to the EC2 instance security group to allow HTTPS traffic and block all other traffic.
  - 向 EC2 实例安全组添加规则以允许 HTTPS 流量并阻止所有其他流量。

**正确答案 / Answer: `B`**

To ensure that only HTTPS traffic reaches the EC2 instances, the correct approach is to modify the Application Load Balancer's security group to allow inbound traffic only on port 443, which is used for HTTPS. This ensures that any non-HTTPS traffic is blocked before it reaches the ALB, aligning with the company's requirement for secure communication.

为了确保只有 HTTPS 流量到达 EC2 实例，正确的方法是修改 Application Load Balancer 的安全组，以仅允许用于 HTTPS 的端口 443 上的入站流量。这可确保任何非 HTTPS 流量在到达 ALB 之前被阻止，从而符合公司对安全通信的要求。

---

## Question 52  `Select 3`

**EN** Your company has deployed an application on an Amazon EC2 instance within a VPC. The application receives requests on port 443 (HTTPS) from external clients and needs to communicate with a database hosted on an Amazon RDS instance on port 3306 (MySQL). To improve security, you need to ensure that only the necessary traffic is allowed to and from the EC2 instance. Which of the following configurations should you implement?

**中** 您的公司已在 VPC 内的 Amazon EC2 实例上部署了应用程序。应用程序在端口 443 (HTTPS) 上接收来自外部客户端的请求，并需要与端口 3306 (MySQL) 上 Amazon RDS 实例上托管的数据库进行通信。为了提高安全性，您需要确保仅允许进出 EC2 实例的必要流量。您应该实施以下哪些配置？

- **A.** Create a security group rule allowing inbound traffic to the EC2 instance on port 443 from 0.0.0.0/0.
  - 创建安全组规则，允许端口 443 上从 0.0.0.0/0 到 EC2 实例的入站流量。
- **B.** Create a security group rule allowing inbound traffic to the RDS instance on port 3306 from the EC2 instance's security group.
  - 创建安全组规则，允许从 EC2 实例的安全组到端口 3306 上的 RDS 实例的入站流量。
- **C.** Create a network ACL rule allowing inbound traffic to the EC2 instance on port 443 from 0.0.0.0/0.
  - 创建网络 ACL 规则，允许端口 443 上从 0.0.0.0/0 到 EC2 实例的入站流量。
- **D.** Create a security group rule allowing outbound traffic from the EC2 instance to the RDS instance on port 3306.
  - 创建安全组规则，允许端口 3306 上从 EC2 实例到 RDS 实例的出站流量。
- **E.** Create a network ACL rule allowing outbound traffic from the EC2 instance to the RDS instance on port 3306.
  - 创建网络 ACL 规则，允许端口 3306 上从 EC2 实例到 RDS 实例的出站流量。

**正确答案 / Answer: `A, B, D`**

To secure network traffic, security groups are the primary tool for controlling inbound and outbound traffic to and from resources. Here, the EC2 instance requires an inbound rule on port 443 for HTTPS traffic from external clients, while the RDS instance should only allow inbound traffic from the EC2 instance on port 3306. Additionally, the EC2 instance needs an outbound rule to connect to the RDS instance on port 3306. Network ACL rules are not required in this scenario since security groups provide sufficient control.

为了保护网络流量，安全组是控制进出资源的入站和出站流量的主要工具。在此，EC2 实例需要在端口 443 上针对来自外部客户端的 HTTPS 流量制定入站规则，而 RDS 实例应仅允许在端口 3306 上来自 EC2 实例的入站流量。此外，EC2 实例需要在端口 3306 上连接到 RDS 实例的出站规则。在此场景中不需要网络 ACL 规则，因为安全组提供了足够的控制。

---

## Question 53  `Single answer`

**EN** You are designing a solution to provide secure access for an application hosted on Amazon EC2 instances within a private VPC subnet. The application needs to access data stored in an Amazon S3 bucket. The solution must ensure that no sensitive credentials are stored on the EC2 instances and minimize network exposure. Which approach should you take?

**中** 您正在设计一个解决方案，为私有 VPC 子网内的 Amazon EC2 实例上托管的应用程序提供安全访问。应用程序需要访问存储在 Amazon S3 存储桶中的数据。该解决方案必须确保 EC2 实例上不存储任何敏感凭证，并最大限度地减少网络暴露。您应该采取哪种方法？

- **A.** Attach an IAM role to the EC2 instances with permissions to access the S3 bucket.
  - 将 IAM 角色附加到有权访问 S3 存储桶的 EC2 实例。
- **B.** Store AWS access keys in a secure file on the EC2 instances to authenticate with S3.
  - 将 AWS 访问密钥存储在 EC2 实例上的安全文件中，以便通过 S3 进行身份验证。
- **C.** Use a NAT gateway to route traffic from the EC2 instances to the S3 bucket over the Internet.
  - 使用 NAT 网关通过 Internet 将流量从 EC2 实例路由到 S3 存储桶。
- **D.** Configure a VPC endpoint for S3 and attach an IAM role to the EC2 instances with permissions to access the S3 bucket.
  - 为 S3 配置 VPC 终端节点，并将 IAM 角色附加到有权访问 S3 存储桶的 EC2 实例。

**正确答案 / Answer: `D`**

To securely access an S3 bucket from EC2 instances in a private subnet, the best approach is to use an IAM role for authorization and a VPC endpoint for S3 to ensure all traffic stays within the AWS network. This approach adheres to AWS security best practices by avoiding the storage of sensitive credentials and minimizing exposure to the public Internet.

要从私有子网中的 EC2 实例安全地访问 S3 存储桶，最好的方法是使用 IAM 角色进行授权并使用 S3 的 VPC 终端节点，以确保所有流量保留在 AWS 网络内。此方法通过避免存储敏感凭证并最大程度地减少对公共互联网的暴露，遵循 AWS 安全最佳实践。

---

## Question 54  `Single answer`

**EN** An organization wants to securely provide access to its web application hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The application requires authentication and authorization for users, but the organization does not want to manage a custom identity solution. Which solution would best meet these requirements?

**中** 组织希望安全地提供对其托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上的 Web 应用程序的访问。该应用程序需要对用户进行身份验证和授权，但组织不想管理自定义身份解决方案。哪种解决方案最能满足这些要求？

- **A.** Enable AWS WAF on the Application Load Balancer to handle authentication and authorization.
  - 在 Application Load Balancer 上启用 AWS WAF 来处理身份验证和授权。
- **B.** Use Amazon Cognito to provide user sign-up, sign-in, and access control integrated with the Application Load Balancer.
  - 使用 Amazon Cognito 提供与 Application Load Balancer 集成的用户注册、登录和访问控制。
- **C.** Create custom authentication logic in the application code and deploy it on the Amazon EC2 instances.
  - 在应用程序代码中创建自定义身份验证逻辑并将其部署在 Amazon EC2 实例上。
- **D.** Use IAM roles and policies to authenticate users directly through the Application Load Balancer.
  - 使用 IAM 角色和策略直接通过 Application Load Balancer 对用户进行身份验证。

**正确答案 / Answer: `B`**

Amazon Cognito is the best solution for providing secure application access without the need to manage a custom identity solution. It integrates seamlessly with the Application Load Balancer and can handle user authentication, authorization, and user management. Other options either do not provide authentication and authorization (e.g., AWS WAF and IAM roles) or require additional operational and security effort (e.g., custom authentication logic).

Amazon Cognito 是提供安全应用程序访问且无需管理自定义身份解决方案的最佳解决方案。它与 Application Load Balancer 无缝集成，可以处理用户认证、授权和用户管理。其他选项要么不提供身份验证和授权（例如，AWS WAF 和 IAM 角色），要么需要额外的操作和安全工作（例如，自定义身份验证逻辑）。

---

## Question 55  `Single answer`

**EN** A company is deploying an internal web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application should only be accessible to employees who authenticate through the company's identity provider using SAML-based Single Sign-On (SSO). Which solution securely meets this requirement?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上部署内部 Web 应用程序。该应用程序只能由使用基于 SAML 的单点登录 (SSO) 通过公司身份提供商进行身份验证的员工访问。哪种解决方案可以安全地满足此要求？

- **A.** Configure the ALB to use an AWS WAF rule that blocks all traffic except requests from the company's IP range.
  - 将 ALB 配置为使用 AWS WAF 规则来阻止除来自公司 IP 范围的请求之外的所有流量。
- **B.** Enable authentication on the ALB and integrate it with the company's SAML-based identity provider.
  - 在 ALB 上启用身份验证并将其与公司基于 SAML 的身份提供商集成。
- **C.** Use an IAM policy on the EC2 instances to restrict access to employees authenticated by the company's identity provider.
  - 在 EC2 实例上使用 IAM 策略来限制对经过公司身份提供商身份验证的员工的访问。
- **D.** Deploy a VPN connection between the company's network and the VPC, and route all application traffic through the VPN.
  - 在公司网络和 VPC 之间部署 VPN 连接，并通过 VPN 路由所有应用程序流量。

**正确答案 / Answer: `B`**

Enabling authentication on the Application Load Balancer (ALB) and integrating it with the company's SAML-based identity provider is the most secure and scalable solution. This approach enforces user authentication through SSO before granting access to the web application, which aligns with the company's requirements. Other options either do not provide user-level authentication or introduce unnecessary complexity without addressing the specific need for SAML-based SSO.

在 Application Load Balancer (ALB) 上启用身份验证并将其与公司基于 SAML 的身份提供商集成是最安全且可扩展的解决方案。此方法在授予对 Web 应用程序的访问权限之前通过 SSO 强制执行用户身份验证，这符合公司的要求。其他选项要么不提供用户级身份验证，要么引入不必要的复杂性，而无法满足基于 SAML 的 SSO 的特定需求。

---

## Question 56  `Single answer`

**EN** A company is developing a serverless web application that needs to securely access an Amazon DynamoDB table. The application is hosted on AWS Lambda. How can you ensure secure access to the DynamoDB table with the least operational overhead?

**中** 一家公司正在开发一个无服务器 Web 应用程序，需要安全地访问 Amazon DynamoDB 表。该应用程序托管在 AWS Lambda 上。如何确保以最少的运营开销安全访问 DynamoDB 表？

- **A.** Embed the DynamoDB access credentials directly in the Lambda function's code.
  - 将 DynamoDB 访问凭证直接嵌入到 Lambda 函数的代码中。
- **B.** Store the DynamoDB access credentials in AWS Secrets Manager and retrieve them at runtime.
  - 将 DynamoDB 访问凭证存储在 AWS Secrets Manager 中并在运行时检索它们。
- **C.** Assign an IAM role to the Lambda function with permissions to access the DynamoDB table.
  - 将 IAM 角色分配给具有访问 DynamoDB 表权限的 Lambda 函数。
- **D.** Use an API Gateway to proxy requests between the Lambda function and the DynamoDB table.
  - 使用 API 网关代理 Lambda 函数和 DynamoDB 表之间的请求。

**正确答案 / Answer: `C`**

The most secure and operationally efficient way to grant a Lambda function access to a DynamoDB table is by assigning an IAM role to the Lambda function. This eliminates the need to manage credentials manually and adheres to AWS best practices for secure application access. By leveraging IAM roles, you can define fine-grained permissions and ensure that the Lambda function only has the access it needs.

授予 Lambda 函数对 DynamoDB 表的访问权限的最安全、最高效的方法是将 IAM 角色分配给 Lambda 函数。这样就无需手动管理凭证，并遵守 AWS 安全应用程序访问最佳实践。通过利用 IAM 角色，您可以定义细粒度的权限并确保 Lambda 函数仅具有其所需的访问权限。

---

## Question 57  `Select 3`

**EN** A financial services company is building a new web application that requires user authentication and authorization. The application also needs to monitor its AWS environment for potential security threats and ensure that sensitive customer data stored in Amazon S3 is secure and monitored for any anomalies. Which combination of AWS services should the company use to meet these requirements?

**中** 一家金融服务公司正在构建一个需要用户身份验证和授权的新 Web 应用程序。该应用程序还需要监控其 AWS 环境是否存在潜在的安全威胁，并确保存储在 Amazon S3 中的敏感客户数据是安全的并监控任何异常情况。公司应该使用哪种 AWS 服务组合来满足这些要求？

- **A.** Amazon Cognito to handle user authentication and authorization
  - Amazon Cognito 处理用户认证和授权
- **B.** Amazon GuardDuty to monitor for potential security threats
  - Amazon GuardDuty 用于监控潜在的安全威胁
- **C.** Amazon Macie to classify and monitor sensitive data stored in Amazon S3
  - Amazon Macie 对 Amazon S3 中存储的敏感数据进行分类和监控
- **D.** AWS WAF to protect the application from common web exploits
  - AWS WAF 用于保护应用程序免受常见 Web 攻击
- **E.** AWS Identity and Access Management (IAM) to manage user access to the application
  - AWS Identity and Access Management (IAM) 用于管理用户对应用程序的访问

**正确答案 / Answer: `A, B, C`**

The company needs to address three specific requirements: user authentication and authorization, threat detection, and sensitive data monitoring. Amazon Cognito provides user authentication and authorization capabilities, Amazon GuardDuty monitors for security threats in the AWS environment, and Amazon Macie identifies and protects sensitive data in Amazon S3. These services together meet the scenario's requirements effectively, while AWS WAF and IAM, although valuable for other purposes, are not the best fit for the described use cases.

该公司需要满足三个具体要求：用户身份验证和授权、威胁检测以及敏感数据监控。 Amazon Cognito 提供用户身份验证和授权功能，Amazon GuardDuty 监控 AWS 环境中的安全威胁，Amazon Macie 识别和保护 Amazon S3 中的敏感数据。这些服务共同有效地满足了场景的要求，而 AWS WAF 和 IAM 虽然对于其他目的很有价值，但并不是最适合所描述的用例。

---

## Question 58  `Select 2`

**EN** Your company processes sensitive customer data, including personally identifiable information (PII), and stores it in Amazon S3 buckets. You need to ensure that any anomalies in access patterns or unauthorized access attempts to this data are detected and that sensitive information in the S3 buckets is identified and classified automatically. Which combination of AWS services should you use to meet these requirements?

**中** 您的公司处理敏感的客户数据，包括个人身份信息 (PII)，并将其存储在 Amazon S3 存储桶中。您需要确保检测到访问模式中的任何异常或对此数据的未经授权的访问尝试，并自动识别和分类 S3 存储桶中的敏感信息。您应该使用哪种 AWS 服务组合来满足这些要求？

- **A.** Amazon Macie
  - Amazon Macie
- **B.** Amazon GuardDuty
  - Amazon GuardDuty
- **C.** Amazon Cognito
  - Amazon Cognito
- **D.** AWS WAF
  - AWS WAF
- **E.** Amazon Inspector
  - Amazon Inspector

**正确答案 / Answer: `A, B`**

To address the requirements, Amazon Macie is used to identify and classify sensitive data, such as PII, in S3 buckets. Amazon GuardDuty complements this by detecting anomalies in access patterns or unauthorized access attempts to the data. Together, they provide robust data security and anomaly detection for sensitive information stored in Amazon S3.

为了满足这一需求，使用 Amazon Macie 对 S3 存储桶中的敏感数据（例如 PII）进行识别和分类。 Amazon GuardDuty 通过检测访问模式中的异常或对数据的未经授权的访问尝试来补充这一点。它们共同为 Amazon S3 中存储的敏感信息提供强大的数据安全性和异常检测。

---

## Question 59  `Select 3`

**EN** A retail company wants to enhance the security of its AWS environment. They need to: 1) Detect unusual activities such as unauthorized access attempts and API misuse, 2) Identify and classify sensitive information stored in S3 buckets, and 3) Provide user authentication for their mobile application. Which combination of AWS services should they use to meet these requirements?

**中** 一家零售公司希望增强其 AWS 环境的安全性。他们需要：1) 检测异常活动，例如未经授权的访问尝试和 API 滥用，2) 识别 S3 存储桶中存储的敏感信息并对其进行分类，以及 3) 为其移动应用程序提供用户身份验证。他们应该使用哪种 AWS 服务组合来满足这些要求？

- **A.** Amazon GuardDuty
  - Amazon GuardDuty
- **B.** Amazon Macie
  - Amazon Macie
- **C.** Amazon Cognito
  - Amazon Cognito
- **D.** AWS WAF
  - AWS WAF
- **E.** Amazon Detective
  - 亚马逊侦探

**正确答案 / Answer: `A, B, C`**

To meet the company's requirements: 1) Amazon GuardDuty detects unusual activities such as unauthorized access or API misuse, 2) Amazon Macie identifies and classifies sensitive information in S3 buckets, and 3) Amazon Cognito provides user authentication for their mobile app. Together, these services address the specific security needs described in the scenario.

为了满足公司的要求：1) Amazon GuardDuty 检测异常活动，例如未经授权的访问或 API 滥用，2) Amazon Macie 识别 S3 存储桶中的敏感信息并对其进行分类，3) Amazon Cognito 为其移动应用程序提供用户身份验证。这些服务共同满足场景中描述的特定安全需求。

---

## Question 60  `Select 3`

**EN** A company hosts a web application on Amazon EC2 behind an Application Load Balancer (ALB). The application has been experiencing an increased number of external threat vectors, including DDoS attacks and SQL injection attempts. As a Solutions Architect, which actions should you recommend to mitigate these threats while minimizing administrative overhead?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 上托管一个 Web 应用程序。该应用程序遇到的外部威胁媒介数量不断增加，包括 DDoS 攻击和 SQL 注入尝试。作为解决方案架构师，您应该建议采取哪些措施来缓解这些威胁，同时最大限度地减少管理开销？

- **A.** Enable AWS Shield Standard to protect against DDoS attacks.
  - 启用 AWS Shield 标准以防御 DDoS 攻击。
- **B.** Use AWS WAF to create rules that block SQL injection attempts.
  - 使用 AWS WAF 创建阻止 SQL 注入尝试的规则。
- **C.** Enable EC2 instance-based firewalls to filter incoming malicious traffic.
  - 启用基于 EC2 实例的防火墙来过滤传入的恶意流量。
- **D.** Use Amazon GuardDuty to block malicious IP addresses in real-time.
  - 使用 Amazon GuardDuty 实时阻止恶意 IP 地址。
- **E.** Integrate the ALB with AWS WAF for application layer threat protection.
  - 将 ALB 与 AWS WAF 集成以实现应用层威胁防护。

**正确答案 / Answer: `A, B, E`**

To mitigate external threat vectors like DDoS and SQL injection, AWS provides managed services that minimize administrative overhead while offering robust protection. AWS Shield Standard protects against DDoS attacks at no additional cost for all AWS customers. AWS WAF allows you to create rules to filter out specific types of malicious traffic, such as SQL injection attempts. By integrating AWS WAF with an Application Load Balancer, you can centralize protection for your application while maintaining scalability and ease of management. These solutions are cost-effective and align with AWS best practices for security.

为了减轻 DDoS 和 SQL 注入等外部威胁媒介，AWS 提供托管服务，最大限度地减少管理开销，同时提供强大的保护。 AWS Shield 标准可防止所有 AWS 客户免受 DDoS 攻击，无需支付额外费用。 AWS WAF 允许您创建规则来过滤掉特定类型的恶意流量，例如 SQL 注入尝试。通过将 AWS WAF 与 Application Load Balancer 集成，您可以集中保护您的应用程序，同时保持可扩展性和易于管理。这些解决方案具有成本效益，并且符合 AWS 安全最佳实践。

---

## Question 61  `Select 2`

**EN** A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application is accessible publicly, and the company is concerned about potential external threats like DDoS attacks and SQL injection. What steps should the company take to mitigate these threats?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。该应用程序可公开访问，该公司担心 DDoS 攻击和 SQL 注入等潜在的外部威胁。公司应采取哪些措施来减轻这些威胁？

- **A.** Use AWS Shield Standard to protect against DDoS attacks.
  - 使用 AWS Shield 标准来防御 DDoS 攻击。
- **B.** Enable AWS WAF on the ALB to create rules blocking SQL injection attempts.
  - 在 ALB 上启用 AWS WAF 以创建阻止 SQL 注入尝试的规则。
- **C.** Launch the application in a private subnet to block all public traffic.
  - 在私有子网中启动应用程序以阻止所有公共流量。
- **D.** Configure Amazon GuardDuty to detect potential threats and send alerts.
  - 配置 Amazon GuardDuty 以检测潜在威胁并发送警报。
- **E.** Use Security Groups to block traffic from known malicious IP addresses.
  - 使用安全组阻止来自已知恶意 IP 地址的流量。

**正确答案 / Answer: `A, B`**

To mitigate external threats like DDoS attacks and SQL injection, AWS provides specialized tools such as AWS Shield and AWS WAF. AWS Shield Standard is included by default and helps protect against DDoS attacks, while AWS WAF enables you to create custom rules to detect and block malicious traffic, such as SQL injection attempts. Other options, such as using GuardDuty or Security Groups, are helpful for monitoring or controlling traffic but are not comprehensive solutions for these specific threats.

为了缓解 DDoS 攻击和 SQL 注入等外部威胁，AWS 提供了 AWS Shield 和 AWS WAF 等专用工具。默认情况下包含 AWS Shield 标准版，有助于防止 DDoS 攻击，而 AWS WAF 使您能够创建自定义规则来检测和阻止恶意流量，例如 SQL 注入尝试。其他选项（例如使用 GuardDuty 或安全组）有助于监视或控制流量，但并不是针对这些特定威胁的全面解决方案。

---

## Question 62  `Select 3`

**EN** A gaming company is hosting its multiplayer game servers on Amazon EC2 instances behind an Application Load Balancer (ALB). Recently, the company has noticed an increase in malicious activities, including DDoS attacks and SQL injection attempts. Which combination of AWS services and configurations should the company implement to protect against these external threat vectors?

**中** 一家游戏公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管其多人游戏服务器。最近，该公司注意到恶意活动有所增加，包括 DDoS 攻击和 SQL 注入尝试。公司应该实施哪种 AWS 服务和配置组合来防范这些外部威胁媒介？

- **A.** Use AWS WAF to create rules that block SQL injection attempts and malicious IP addresses
  - 使用 AWS WAF 创建阻止 SQL 注入尝试和恶意 IP 地址的规则
- **B.** Enable AWS Shield Advanced on the Application Load Balancer to mitigate DDoS attacks
  - 在 Application Load Balancer 上启用 AWS Shield Advanced 以缓解 DDoS 攻击
- **C.** Deploy Amazon GuardDuty to detect and automatically block malicious IP addresses
  - 部署 Amazon GuardDuty 检测并自动拦截恶意 IP 地址
- **D.** Use AWS Config to monitor and block configuration changes that might expose the system to threats
  - 使用 AWS Config 监视和阻止可能使系统面临威胁的配置更改
- **E.** Implement security groups to allow traffic only from trusted IP ranges
  - 实施安全组以仅允许来自受信任 IP 范围的流量

**正确答案 / Answer: `A, B, E`**

To effectively protect against external threats like DDoS attacks and SQL injection, the company should use AWS WAF to block attack patterns, enable AWS Shield Advanced to defend against DDoS attacks, and configure security groups to restrict access to trusted IP ranges. These measures collectively enhance the security posture while maintaining application availability. Amazon GuardDuty and AWS Config are useful for monitoring and compliance but do not directly protect against these specific threat vectors in this scenario.

为了有效防御 DDoS 攻击、SQL 注入等外部威胁，企业应使用 AWS WAF 来拦截攻击模式，启用 AWS Shield Advanced 来防御 DDoS 攻击，并配置安全组来限制对可信 IP 范围的访问。这些措施共同增强了安全态势，同时保持了应用程序可用性。 Amazon GuardDuty 和 AWS Config 对于监控和合规性很有用，但在这种情况下不能直接防范这些特定的威胁向量。

---

## Question 63  `Select 2`

**EN** A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The web application has recently been targeted by a Distributed Denial of Service (DDoS) attack and SQL injection attempts. As a Solutions Architect, which combination of AWS services and configurations should you recommend to protect the application from these external threats?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。该 Web 应用程序最近成为分布式拒绝服务 (DDoS) 攻击和 SQL 注入尝试的目标。作为解决方案架构师，您应该推荐哪种 AWS 服务和配置组合来保护应用程序免受这些外部威胁？

- **A.** Configure AWS WAF (Web Application Firewall) with rules to block SQL injection attempts.
  - 使用规则配置 AWS WAF（Web 应用程序防火墙）以阻止 SQL 注入尝试。
- **B.** Enable AWS Shield Advanced to protect against DDoS attacks.
  - 启用 AWS Shield Advanced 以防御 DDoS 攻击。
- **C.** Use an Amazon S3 bucket to store the web application content and minimize attack surface.
  - 使用 Amazon S3 存储桶存储 Web 应用程序内容并最大程度地减少攻击面。
- **D.** Enable VPC Flow Logs to monitor network traffic and identify malicious activity.
  - 启用 VPC 流日志以监控网络流量并识别恶意活动。
- **E.** Configure Security Groups and Network ACLs to block specific IPs identified as malicious.
  - 配置安全组和网络 ACL 以阻止被识别为恶意的特定 IP。

**正确答案 / Answer: `A, B`**

To protect against external threats like DDoS and SQL injection, AWS Shield Advanced and AWS WAF are the recommended services. AWS Shield Advanced provides comprehensive DDoS protection, while AWS WAF enables application-layer security through custom or managed rules. Other options like VPC Flow Logs, Security Groups, and using S3 address different aspects of security but do not directly mitigate these specific threats.

为了防御 DDoS 和 SQL 注入等外部威胁，建议使用 AWS Shield Advanced 和 AWS WAF 服务。 AWS Shield Advanced 提供全面的 DDoS 保护，而 AWS WAF 通过自定义或托管规则实现应用层安全。其他选项（例如 VPC 流日志、安全组和使用 S3）可解决安全性的不同方面，但不能直接缓解这些特定威胁。

---

## Question 64  `Select 3`

**EN** A company stores sensitive customer data in an Amazon S3 bucket. Due to regulatory requirements, they must ensure that the data is encrypted both at rest and in transit. Additionally, unauthorized access to the bucket should be prevented. Which combination of actions should the company take to meet these requirements?

**中** 某公司将敏感客户数据存储在 Amazon S3 存储桶中。由于监管要求，他们必须确保数据在静态和传输过程中都经过加密。此外，应防止未经授权访问存储桶。公司应该采取哪些行动组合来满足这些要求？

- **A.** Enable server-side encryption (SSE) with AWS Key Management Service (AWS KMS) for the S3 bucket.
  - 使用 AWS Key Management Service (AWS KMS) 为 S3 存储桶启用服务器端加密 (SSE)。
- **B.** Use an S3 bucket policy to restrict access to specific IAM roles and users.
  - 使用 S3 存储桶策略来限制对特定 IAM 角色和用户的访问。
- **C.** Enable S3 Versioning to maintain a history of object changes.
  - 启用 S3 版本控制以维护对象更改的历史记录。
- **D.** Configure the bucket to force HTTPS connections using a bucket policy.
  - 使用存储桶策略将存储桶配置为强制 HTTPS 连接。
- **E.** Use Amazon Macie to monitor and classify sensitive data in the bucket.
  - 使用 Amazon Macie 对桶中的敏感数据进行监控和分类。

**正确答案 / Answer: `A, B, D`**

To meet the regulatory requirements, the company must ensure encryption both at rest and in transit, and restrict unauthorized access. Enabling server-side encryption with AWS KMS ensures encryption at rest, while forcing HTTPS connections secures data in transit. Restricting access using an S3 bucket policy prevents unauthorized access to the sensitive customer data. While other options like enabling versioning or using Amazon Macie are valuable for other purposes, they do not directly address the specific requirements in this scenario.

为了满足监管要求，公司必须确保静态和传输中的加密，并限制未经授权的访问。使用 AWS KMS 启用服务器端加密可确保静态加密，同时强制 HTTPS 连接可确保传输中数据的安全。使用 S3 存储桶策略限制访问可防止对敏感客户数据进行未经授权的访问。虽然启用版本控制或使用 Amazon Macie 等其他选项对于其他目的很有价值，但它们并不能直接解决此场景中的特定要求。

---

## Question 65  `Select 2`

**EN** A company is migrating its on-premises data to Amazon S3. The company requires that the data be encrypted at rest and wants to ensure that only their internal compliance team manages the encryption keys. Additionally, they need to track access to the data for audit purposes. Which combination of solutions should the company implement to meet these requirements?

**中** 一家公司正在将其本地数据迁移到 Amazon S3。该公司要求对静态数据进行加密，并希望确保只有其内部合规团队管理加密密钥。此外，他们需要跟踪对数据的访问以进行审计。公司应该实施哪种解决方案组合来满足这些要求？

- **A.** Use Server-Side Encryption with S3-Managed Keys (SSE-S3) for data encryption at rest.
  - 使用服务器端加密和 S3 托管密钥 (SSE-S3) 进行静态数据加密。
- **B.** Use Server-Side Encryption with AWS Key Management Service (SSE-KMS) with a customer-managed CMK.
  - 将服务器端加密与 AWS Key Management Service (SSE-KMS) 和客户管理的 CMK 结合使用。
- **C.** Enable S3 Server Access Logging to track requests made to the bucket.
  - 启用 S3 服务器访问日志记录以跟踪对存储桶发出的请求。
- **D.** Enable S3 Object Lock to prevent any modifications to the data.
  - 启用 S3 对象锁定以防止对数据进行任何修改。
- **E.** Use Client-Side Encryption and manage the encryption keys on-premises.
  - 使用客户端加密并在本地管理加密密钥。

**正确答案 / Answer: `B, C`**

To meet the requirements, the company should use SSE-KMS with a customer-managed CMK to ensure that their compliance team manages the encryption keys. Additionally, enabling S3 Server Access Logging will provide the necessary access tracking for audit purposes. These solutions together fulfill both the encryption and compliance requirements effectively.

为了满足要求，公司应将 SSE-KMS 与客户管理的 CMK 结合使用，以确保其合规团队管理加密密钥。此外，启用 S3 服务器访问日志记录将为审计目的提供必要的访问跟踪。这些解决方案共同有效满足了加密和合规性要求。

---

## Question 66  `Select 2`

**EN** A company stores sensitive customer data in an Amazon S3 bucket. The company must ensure the data is encrypted at rest and that only specific IAM roles are permitted to access the bucket. Which combination of actions should the Solutions Architect recommend to achieve this?

**中** 某公司将敏感客户数据存储在 Amazon S3 存储桶中。公司必须确保数据静态加密，并且仅允许特定 IAM 角色访问存储桶。解决方案架构师应该建议哪种操作组合来实现这一目标？

- **A.** Enable server-side encryption with Amazon S3-managed keys (SSE-S3) for the bucket.
  - 使用 Amazon S3 托管密钥 (SSE-S3) 为存储桶启用服务器端加密。
- **B.** Use an S3 bucket policy to explicitly deny access to all users except those with the specified IAM roles.
  - 使用 S3 存储桶策略显式拒绝除具有指定 IAM 角色的用户之外的所有用户的访问。
- **C.** Enable versioning on the S3 bucket to track changes to objects.
  - 在 S3 存储桶上启用版本控制以跟踪对象的更改。
- **D.** Configure server-side encryption with AWS Key Management Service (SSE-KMS) and use a customer-managed key.
  - 使用 AWS Key Management Service (SSE-KMS) 配置服务器端加密并使用客户管理的密钥。
- **E.** Use an S3 Access Control List (ACL) to grant access only to the specified IAM roles.
  - 使用 S3 访问控制列表 (ACL) 仅向指定的 IAM 角色授予访问权限。

**正确答案 / Answer: `B, D`**

To meet the requirements of encrypting data at rest and restricting access to specific IAM roles, enabling SSE-KMS with a customer-managed key ensures proper encryption with fine-grained control over key permissions. Additionally, using an S3 bucket policy to deny access to unauthorized users ensures that only specific IAM roles can access the data. These two measures together provide robust security controls for sensitive data stored in S3.

为了满足静态数据加密和限制对特定 IAM 角色的访问的要求，使用客户管理的密钥启用 SSE-KMS 可确保正确的加密以及对密钥权限的细粒度控制。此外，使用 S3 存储桶策略拒绝未经授权的用户访问可确保只有特定 IAM 角色才能访问数据。这两项措施共同为 S3 中存储的敏感数据提供强大的安全控制。

---

## Question 67  `Select 3`

**EN** A company is hosting sensitive financial data in an Amazon S3 bucket. The company requires that this data must be encrypted when stored, and only specific employees within the organization should have access to it. Additionally, access to the bucket should be logged for auditing purposes. What combination of controls should the company implement to meet these requirements?

**中** 一家公司在 Amazon S3 存储桶中托管敏感的财务数据。该公司要求这些数据在存储时必须加密，并且只有组织内的特定员工才能访问它。此外，出于审计目的，应记录对存储桶的访问。公司应实施哪些控制组合来满足这些要求？

- **A.** Enable Server-Side Encryption with AWS Key Management Service (SSE-KMS) for the S3 bucket.
  - 使用 AWS Key Management Service (SSE-KMS) 为 S3 存储桶启用服务器端加密。
- **B.** Configure an S3 bucket policy to allow public read access to the bucket.
  - 配置 S3 存储桶策略以允许公共读取该存储桶。
- **C.** Enable S3 server access logging or AWS CloudTrail logging for the bucket.
  - 为存储桶启用 S3 服务器访问日志记录或 AWS CloudTrail 日志记录。
- **D.** Use IAM policies to restrict access to the bucket to specific IAM users or roles.
  - 使用 IAM 策略将对存储桶的访问权限限制为特定 IAM 用户或角色。
- **E.** Enable Transfer Acceleration for faster data uploads to the S3 bucket.
  - 启用传输加速以更快地将数据上传到 S3 存储桶。

**正确答案 / Answer: `A, C, D`**

To secure sensitive financial data in an Amazon S3 bucket, encryption is required to protect the data at rest (achieved using SSE-KMS). Access must be restricted to specific employees, which can be implemented using IAM policies. Finally, access logs are essential for audit purposes, which can be enabled with S3 Server Access Logging or AWS CloudTrail. These controls together meet the company's security requirements.

为了保护 Amazon S3 存储桶中的敏感财务数据，需要加密来保护静态数据（使用 SSE-KMS 实现）。访问权限必须仅限于特定员工，这可以使用 IAM 策略来实现。最后，访问日志对于审计目的至关重要，可以通过 S3 服务器访问日志记录或 AWS CloudTrail 来启用。这些控制措施共同满足公司的安全要求。

---

## Question 68  `Select 2`

**EN** A company wants to migrate their on-premises web application to AWS. The application consists of a stateless backend that processes user requests and a MySQL database that stores user data. The company wants to ensure high availability, fault tolerance, and scalability for both the backend and database components. Which combination of AWS services should they use?

**中** 一家公司希望将其本地 Web 应用程序迁移到 AWS。该应用程序由处理用户请求的无状态后端和存储用户数据的 MySQL 数据库组成。该公司希望确保后端和数据库组件的高可用性、容错性和可扩展性。他们应该使用哪种 AWS 服务组合？

- **A.** Deploy the backend on Amazon EC2 instances behind an Application Load Balancer (ALB) and enable Auto Scaling.
  - 在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上部署后端并启用 Auto Scaling。
- **B.** Use Amazon RDS with Multi-AZ deployment for the MySQL database.
  - 将 Amazon RDS 与 MySQL 数据库的多可用区部署结合使用。
- **C.** Deploy the backend on a single Amazon EC2 instance and take regular snapshots for backup.
  - 将后端部署在单个 Amazon EC2 实例上并定期拍摄快照进行备份。
- **D.** Use Amazon DynamoDB instead of MySQL to store user data.
  - 使用 Amazon DynamoDB 代替 MySQL 来存储用户数据。
- **E.** Deploy the backend using AWS Lambda with API Gateway and store data in Amazon S3.
  - 使用 AWS Lambda 和 API Gateway 部署后端，并将数据存储在 Amazon S3 中。

**正确答案 / Answer: `A, B`**

To ensure high availability, fault tolerance, and scalability for the application, the backend should be deployed on EC2 instances behind an ALB with Auto Scaling. This setup handles traffic spikes and provides fault tolerance. For the database, Amazon RDS with Multi-AZ deployment ensures high availability, data durability, and seamless failover, aligning with the company's requirements.

为了确保应用程序的高可用性、容错性和可扩展性，后端应部署在具有 Auto Scaling 功能的 ALB 后面的 EC2 实例上。此设置可以处理流量峰值并提供容错能力。对于数据库，采用多可用区部署的 Amazon RDS 可确保高可用性、数据持久性和无缝故障转移，符合公司的要求。

---

## Question 69  `Single answer`

**EN** A company is running a high-traffic e-commerce website hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The company wants to ensure that customer sessions are maintained seamlessly during their shopping experience. Which feature of the ALB should the company use to achieve this?

**中** 一家公司正在运行一个高流量电子商务网站，该网站托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上。该公司希望确保客户会话在购物过程中保持无缝。公司应该使用 ALB 的哪些功能来实现这一目标？

- **A.** Enable Sticky Sessions (Session Affinity) on the ALB
  - 在 ALB 上启用粘性会话（会话亲和性）
- **B.** Configure Cross-Zone Load Balancing on the ALB
  - 在 ALB 上配置跨可用区负载均衡
- **C.** Enable Target Group Health Checks on the ALB
  - 在 ALB 上启用目标组运行状况检查
- **D.** Use AWS Global Accelerator with the ALB
  - 将 AWS Global Accelerator 与 ALB 结合使用

**正确答案 / Answer: `A`**

The correct answer is 'Enable Sticky Sessions (Session Affinity) on the ALB' because this feature ensures that user requests are consistently routed to the same target during their session, providing seamless session handling for the e-commerce website. Other options, while useful for different purposes, do not address the need for maintaining user sessions.

正确的答案是“在 ALB 上启用粘性会话（会话亲和性）”，因为此功能可确保用户请求在会话期间一致路由到同一目标，从而为电子商务网站提供无缝会话处理。其他选项虽然可用于不同的目的，但不能满足维护用户会话的需要。

---

## Question 70  `Single answer`

**EN** A company is hosting a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user-uploaded images in an Amazon S3 bucket. Recently, the company noticed that some images are missing or being overwritten when users upload files with the same name. How can the company prevent this issue while still allowing users to upload images?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。该应用程序将用户上传的图像存储在 Amazon S3 存储桶中。近日，该公司注意到，当用户上传同名文件时，部分图片丢失或被覆盖。公司如何在允许用户上传图像的同时防止此问题？

- **A.** Configure the S3 bucket to use versioning.
  - 配置 S3 存储桶以使用版本控制。
- **B.** Enable server-side encryption for the S3 bucket.
  - 为 S3 存储桶启用服务器端加密。
- **C.** Add a timestamp or unique identifier to the image file names before storing them in the S3 bucket.
  - 在将图像文件存储到 S3 存储桶之前，向图像文件名添加时间戳或唯一标识符。
- **D.** Set up an Amazon S3 Lifecycle policy to archive older versions of the files.
  - 设置 Amazon S3 生命周期策略来存档旧版本的文件。

**正确答案 / Answer: `C`**

The root cause of the issue is that files with the same name are being overwritten in the S3 bucket. Adding a timestamp or unique identifier to the file names ensures uniqueness and prevents overwrites. While S3 versioning can retain older versions of files, it does not stop overwrites from occurring, and other options like encryption or Lifecycle policies do not directly address the problem of naming conflicts.

该问题的根本原因是 S3 存储桶中的同名文件被覆盖。向文件名添加时间戳或唯一标识符可确保唯一性并防止覆盖。虽然 S3 版本控制可以保留旧版本的文件，但它并不能阻止覆盖的发生，并且加密或生命周期策略等其他选项不能直接解决命名冲突问题。

---

## Question 71  `Single answer`

**EN** A company is hosting a web application on an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB). The company wants to ensure that the application can scale to meet sudden spikes in traffic while maintaining high availability and minimizing costs. Which configuration change would best meet this requirement?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例的 Auto Scaling 组上托管 Web 应用程序。该公司希望确保应用程序能够扩展以满足突然的流量高峰，同时保持高可用性并最大限度地降低成本。哪种配置更改最能满足此要求？

- **A.** Configure the Auto Scaling group with a target tracking scaling policy based on CPU utilization.
  - 使用基于 CPU 利用率的目标跟踪扩展策略配置 Auto Scaling 组。
- **B.** Increase the minimum number of instances in the Auto Scaling group to handle peak traffic at all times.
  - 增加 Auto Scaling 组中的最小实例数以始终处理峰值流量。
- **C.** Use a Network Load Balancer (NLB) instead of an Application Load Balancer (ALB) to improve performance.
  - 使用 Network Load Balancer (NLB) 代替 Application Load Balancer (ALB) 以提高性能。
- **D.** Manually adjust the desired capacity of the Auto Scaling group during peak traffic hours.
  - 在流量高峰时段手动调整 Auto Scaling 组所需的容量。

**正确答案 / Answer: `A`**

Configuring a target tracking scaling policy based on CPU utilization allows the Auto Scaling group to dynamically and automatically scale in or out depending on the current workload. This approach ensures that the web application can handle sudden traffic spikes while maintaining cost efficiency, as instances are added or removed only when necessary. The other options either lead to higher costs, miss critical application-level functionality, or require manual intervention, which is not ideal for scalability and high availability.

根据 CPU 利用率配置目标跟踪扩展策略，可以让 Auto Scaling 组根据当前工作负载动态自动扩展或扩展。这种方法确保 Web 应用程序可以处理突然的流量峰值，同时保持成本效率，因为仅在必要时添加或删除实例。其他选项要么导致更高的成本，错过关键的应用程序级功能，要么需要手动干预，这对于可扩展性和高可用性来说并不理想。

---

## Question 72  `Select 3`

**EN** A company stores sensitive financial data in an Amazon S3 bucket. The data must only be accessed by specific IAM users, and all access requests need to be logged for auditing purposes. Which combination of steps should you take to meet these requirements?

**中** 某公司将敏感财务数据存储在 Amazon S3 存储桶中。数据只能由特定的 IAM 用户访问，并且所有访问请求都需要记录下来以供审核。您应该采取哪种步骤组合来满足这些要求？

- **A.** Use an S3 bucket policy to explicitly grant access to the specific IAM users.
  - 使用 S3 存储桶策略显式向特定 IAM 用户授予访问权限。
- **B.** Enable Amazon S3 server access logging for the bucket.
  - 为存储桶启用 Amazon S3 服务器访问日志记录。
- **C.** Use an IAM role and attach it to the users to allow access to the bucket.
  - 使用 IAM 角色并将其附加到用户以允许访问存储桶。
- **D.** Enable AWS CloudTrail to log all S3 access requests.
  - 启用 AWS CloudTrail 记录所有 S3 访问请求。
- **E.** Add a public-read ACL to the bucket to ensure easy access for auditors.
  - 在存储桶中添加公共读取的 ACL，以确保审计人员能够轻松访问。

**正确答案 / Answer: `A, B, D`**

To meet the requirements of restricting access to specific IAM users and ensuring all access requests are logged, you need to implement an S3 bucket policy to manage access permissions, enable S3 server access logging for detailed bucket access logs, and enable AWS CloudTrail to capture API-level logs for auditing. These steps ensure data governance and security while meeting auditing requirements.

为了满足限制特定 IAM 用户的访问并确保记录所有访问请求的要求，您需要实施 S3 存储桶策略来管理访问权限，启用 S3 服务器访问日志记录详细的存储桶访问日志，并启用 AWS CloudTrail 捕获 API 级日志进行审计。这些步骤可确保数据治理和安全性，同时满足审计要求。

---

## Question 73  `Select 3`

**EN** A company stores sensitive financial data in Amazon S3 and needs to ensure that access to this data is restricted to specific IAM roles within the organization. Additionally, the company wants to log all access attempts to this data for auditing purposes. What combination of approaches should the company implement to meet these requirements?

**中** 公司将敏感财务数据存储在 Amazon S3 中，并且需要确保对此数据的访问仅限于组织内的特定 IAM 角色。此外，该公司希望记录对此数据的所有访问尝试，以用于审计目的。公司应该实施哪些方法组合来满足这些要求？

- **A.** Use an S3 bucket policy to allow access only to specific IAM roles.
  - 使用 S3 存储桶策略仅允许特定 IAM 角色的访问。
- **B.** Enable S3 Versioning to maintain multiple versions of the data for auditing purposes.
  - 启用 S3 版本控制以维护数据的多个版本以用于审核目的。
- **C.** Enable S3 Server Access Logging to track all access requests to the bucket.
  - 启用 S3 服务器访问日志记录以跟踪对存储桶的所有访问请求。
- **D.** Configure AWS CloudTrail to log all API calls made to the bucket.
  - 配置 AWS CloudTrail 以记录对存储桶进行的所有 API 调用。
- **E.** Use Amazon Macie to block unauthorized access to sensitive data.
  - 使用 Amazon Macie 阻止对敏感数据的未经授权的访问。

**正确答案 / Answer: `A, C, D`**

To meet the requirements, the company should implement an S3 bucket policy to restrict access to specific IAM roles, use S3 Server Access Logging to track all access requests, and enable AWS CloudTrail to log API calls to the bucket. These combined approaches ensure both access control and comprehensive auditing capabilities.

为了满足要求，公司应实施 S3 存储桶策略来限制对特定 IAM 角色的访问，使用 S3 服务器访问日志记录来跟踪所有访问请求，并启用 AWS CloudTrail 记录对存储桶的 API 调用。这些组合方法确保了访问控制和全面的审核功能。

---

## Question 74  `Select 2`

**EN** A company wants to ensure that sensitive data stored in an Amazon S3 bucket is only accessible by specific IAM users and roles. Additionally, the company requires all access requests to be logged for auditing purposes. Which combination of steps should the company implement to meet these requirements?

**中** 一家公司希望确保存储在 Amazon S3 存储桶中的敏感数据只能由特定 IAM 用户和角色访问。此外，该公司要求记录所有访问请求以供审计之用。公司应该实施哪些步骤组合来满足这些要求？

- **A.** Enable S3 Server Access Logging on the bucket.
  - 在存储桶上启用 S3 服务器访问日志记录。
- **B.** Attach a bucket policy that grants access only to specific IAM users and roles.
  - 附加仅向特定 IAM 用户和角色授予访问权限的存储桶策略。
- **C.** Enable S3 Object Lock to prevent accidental deletion of objects.
  - 启用 S3 对象锁定以防止意外删除对象。
- **D.** Enable AWS CloudTrail to log all API requests made to the bucket.
  - 启用 AWS CloudTrail 来记录对存储桶发出的所有 API 请求。
- **E.** Use Amazon Macie to classify and monitor sensitive data in the bucket.
  - 使用 Amazon Macie 对桶中的敏感数据进行分类和监控。

**正确答案 / Answer: `B, D`**

To meet the requirements, the company needs to restrict access to the sensitive data and ensure all access requests are logged. A bucket policy restricting access to specific IAM users and roles satisfies the access control requirement. Enabling AWS CloudTrail fulfills the logging requirement by capturing all API requests made to the bucket. Other options, such as S3 Server Access Logging and Amazon Macie, are useful for other purposes but do not address both access control and logging requirements in this scenario.

为了满足要求，公司需要限制对敏感数据的访问并确保记录所有访问请求。限制对特定 IAM 用户和角色的访问的存储桶策略满足访问控制要求。启用 AWS CloudTrail 通过捕获对存储桶发出的所有 API 请求来满足日志记录要求。其他选项（例如 S3 服务器访问日志记录和 Amazon Macie）可用于其他目的，但不能同时满足此场景中的访问控制和日志记录要求。

---

## Question 75  `Select 3`

**EN** Your organization recently adopted an AWS environment where sensitive business data is stored in Amazon S3. Compliance requirements mandate that access to this data must be tightly controlled, monitored, and audited. Which combination of solutions can help you meet these requirements?

**中** 您的组织最近采用了 AWS 环境，其中敏感业务数据存储在 Amazon S3 中。合规性要求要求必须严格控制、监控和审核对这些数据的访问。哪种解决方案组合可以帮助您满足这些要求？

- **A.** Enable Amazon S3 Bucket Policies to define fine-grained access to specific objects and actions.
  - 启用 Amazon S3 存储桶策略来定义对特定对象和操作的细粒度访问。
- **B.** Turn on AWS CloudTrail to log all API activity related to the S3 buckets.
  - 打开 AWS CloudTrail 以记录与 S3 存储桶相关的所有 API 活动。
- **C.** Use AWS Config to track changes to S3 bucket configurations and alert on non-compliance.
  - 使用 AWS Config 跟踪 S3 存储桶配置的更改并就不合规情况发出警报。
- **D.** Enable S3 Versioning to retain multiple versions of objects for audit purposes.
  - 启用 S3 版本控制以保留对象的多个版本以用于审计目的。
- **E.** Use IAM roles with inline policies to grant unrestricted access to the S3 bucket.
  - 使用具有内联策略的 IAM 角色来授予对 S3 存储桶的不受限制的访问权限。

**正确答案 / Answer: `A, B, C`**

To meet compliance requirements for data access and governance in Amazon S3, you need a combination of access control, monitoring, and auditing solutions. S3 Bucket Policies provide fine-grained access control, CloudTrail enables monitoring of API activity, and AWS Config ensures that any changes to the S3 bucket's configuration are tracked and can trigger alerts for non-compliance. S3 Versioning and unrestricted IAM role policies are not suitable solutions for this scenario.

To meet compliance requirements for data access and governance in Amazon S3, you need a combination of access control, monitoring, and auditing solutions. S3 Bucket Policies provide fine-grained access control, CloudTrail enables monitoring of API activity, and AWS Config ensures that any changes to the S3 bucket's configuration are tracked and can trigger alerts for non-compliance. S3 版本控制和无限制的 IAM 角色策略不适合此场景的解决方案。

---

## Question 76  `Single answer`

**EN** A company runs a critical application on Amazon RDS for MySQL and needs to ensure that they can quickly recover their data in case of accidental deletion or corruption. Which approach provides the most effective solution for data recovery?

**中** 一家公司在 Amazon RDS for MySQL 上运行关键应用程序，需要确保在意外删除或损坏的情况下能够快速恢复数据。哪种方法提供最有效的数据恢复解决方案？

- **A.** Enable RDS automated backups and perform manual snapshots periodically.
  - 启用 RDS 自动备份并定期执行手动快照。
- **B.** Replicate the RDS database to another region using AWS Database Migration Service (DMS).
  - 使用 AWS Database Migration Service (DMS) 将 RDS 数据库复制到另一个区域。
- **C.** Enable Multi-AZ deployment for the RDS instance to automatically failover in case of data corruption.
  - 为 RDS 实例启用多可用区部署，以便在数据损坏时自动进行故障转移。
- **D.** Use Amazon RDS read replicas to create point-in-time recovery backups.
  - 使用 Amazon RDS 只读副本创建时间点恢复备份。

**正确答案 / Answer: `A`**

The most effective solution for data recovery in this scenario is to enable RDS automated backups, which allow point-in-time recovery to restore the database to a specific state before accidental deletion or corruption. Manual snapshots provide an additional layer of protection by allowing the user to create backups at specific times.

在这种情况下，最有效的数据恢复解决方案是启用 RDS 自动备份，它允许时间点恢复将数据库恢复到意外删除或损坏之前的特定状态。手动快照允许用户在特定时间创建备份，从而提供额外的保护层。

---

## Question 77  `Select 3`

**EN** Your company runs a critical web application on Amazon EC2 instances with an Amazon RDS MySQL database in the backend. Recently, there was an accidental deletion of some database tables, causing significant disruption. To prevent data loss in the future, you are tasked with designing a solution to ensure the ability to quickly recover from similar incidents. What should you do to meet this requirement?

**中** 您的公司在 Amazon EC2 实例上运行关键 Web 应用程序，后端有 Amazon RDS MySQL 数据库。最近，一些数据库表被意外删除，造成严重中断。为了防止将来发生数据丢失，您的任务是设计一个解决方案，以确保能够从类似事件中快速恢复。为了满足这个要求你应该做什么？

- **A.** Enable automated backups for the Amazon RDS database.
  - 启用 Amazon RDS 数据库的自动备份。
- **B.** Take manual snapshots of the Amazon RDS database on a regular basis.
  - 定期对 Amazon RDS 数据库进行手动快照。
- **C.** Configure multi-AZ deployment for the Amazon RDS database.
  - 为 Amazon RDS 数据库配置多可用区部署。
- **D.** Enable point-in-time recovery for the Amazon RDS database.
  - 为 Amazon RDS 数据库启用时间点恢复。
- **E.** Use Amazon S3 to store periodic exports of the database using the mysqldump utility.
  - 使用 Amazon S3 通过 mysqldump 实用程序存储数据库的定期导出。

**正确答案 / Answer: `A, B, D`**

To ensure data recovery for an Amazon RDS database, enabling automated backups and point-in-time recovery are critical as they allow you to restore the database to a state before any accidental deletion. Manual snapshots provide an additional backup option for specific points in time. Multi-AZ deployment does not address recovery from logical errors, and while exporting data to Amazon S3 may assist in long-term storage, it is not the most effective solution for immediate recovery scenarios.

为了确保 Amazon RDS 数据库的数据恢复，启用自动备份和时间点恢复至关重要，因为它们允许您将数据库恢复到任何意外删除之前的状态。手动快照为特定时间点提供了额外的备份选项。多可用区部署并不能解决逻辑错误的恢复问题，虽然将数据导出到 Amazon S3 可能有助于长期存储，但它并不是立即恢复场景的最有效解决方案。

---

## Question 78  `Select 2`

**EN** A company hosts a critical application on Amazon EC2 instances in a single Availability Zone. The application writes transaction logs to an Amazon RDS database. Recently, the company experienced a hardware failure in the Availability Zone, resulting in data loss and downtime. The company wants to improve its data recovery strategy to ensure high availability and minimize downtime in case of future failures. What combination of actions should the company take?

**中** 一家公司在单个可用区的 Amazon EC2 实例上托管关键应用程序。应用程序将事务日志写入 Amazon RDS 数据库。最近，该公司的可用区出现硬件故障，导致数据丢失和停机。该公司希望改进其数据恢复策略，以确保高可用性并最大限度地减少未来发生故障时的停机时间。公司应该采取哪些行动组合？

- **A.** Enable Multi-AZ deployment for the Amazon RDS database.
  - 为 Amazon RDS 数据库启用多可用区部署。
- **B.** Configure EC2 Auto Scaling across multiple Availability Zones.
  - 跨多个可用区配置 EC2 Auto Scaling。
- **C.** Use Amazon S3 to store transaction logs instead of Amazon RDS.
  - 使用 Amazon S3 来存储事务日志，而不是 Amazon RDS。
- **D.** Take frequent manual snapshots of the Amazon RDS database.
  - 频繁手动拍摄 Amazon RDS 数据库快照。
- **E.** Implement an Amazon RDS Read Replica in a different Region.
  - 在不同区域实施 Amazon RDS 只读副本。

**正确答案 / Answer: `A, B`**

By enabling Multi-AZ deployment for Amazon RDS, the company ensures that the database can fail over to a standby instance in a different Availability Zone during an outage, minimizing downtime and data loss. Additionally, configuring EC2 Auto Scaling across multiple Availability Zones ensures the application remains highly available even if an Availability Zone becomes unavailable. These actions together improve the company's data recovery and high availability strategy in line with AWS best practices.

通过为 Amazon RDS 启用多可用区部署，该公司确保数据库可以在中断期间故障转移到不同可用区中的备用实例，从而最大限度地减少停机时间和数据丢失。此外，跨多个可用区配置 EC2 Auto Scaling 可确保即使某个可用区不可用，应用程序仍保持高可用性。这些行动共同改进了公司的数据恢复和高可用性策略，符合 AWS 最佳实践。

---

## Question 79  `Single answer`

**EN** A company runs a critical web application on Amazon EC2 instances in an Auto Scaling group spanning multiple Availability Zones. The data for the application is stored in an Amazon RDS database. The company wants to ensure minimal downtime and data loss in case of a disaster that impacts the primary AWS Region. What is the most suitable solution to achieve this?

**中** 一家公司在跨多个可用区的 Auto Scaling 组中的 Amazon EC2 实例上运行关键 Web 应用程序。应用程序的数据存储在 Amazon RDS 数据库中。该公司希望确保在发生影响主要 AWS 区域的灾难时将停机时间和数据丢失降至最低。实现这一目标最合适的解决方案是什么？

- **A.** Set up Amazon RDS Read Replicas in the same Region and promote one to primary in case of failure.
  - 在同一区域中设置 Amazon RDS 只读副本，并在发生故障时将其中一个提升为主副本。
- **B.** Enable Amazon RDS Multi-AZ deployment and configure automatic failover.
  - 启用 Amazon RDS 多可用区部署并配置自动故障转移。
- **C.** Create a cross-Region read replica for the RDS database and promote it to primary in the event of a disaster.
  - 为 RDS 数据库创建跨区域只读副本，并在发生灾难时将其提升为主数据库。
- **D.** Take regular automated snapshots of the RDS database and restore them in another Region when needed.
  - 定期自动拍摄 RDS 数据库快照，并在需要时将其还原到另一个区域。

**正确答案 / Answer: `C`**

The best solution to ensure minimal downtime and data loss in case of a Region-wide disaster is to create a cross-Region read replica for the RDS database. This allows the company to quickly promote the replica to a primary database in the event of a disaster, ensuring business continuity. Other options, such as Multi-AZ deployments or same-Region read replicas, do not address cross-Region requirements, while restoring from snapshots can lead to significant downtime and data loss.

确保在发生区域范围灾难时最大限度地减少停机时间和数据丢失的最佳解决方案是为 RDS 数据库创建跨区域只读副本。这使得公司能够在发生灾难时快速将副本升级为主数据库，确保业务连续性。其他选项（例如多可用区部署或同区域只读副本）无法满足跨区域要求，而从快照还原可能会导致严重的停机和数据丢失。

---

## Question 80  `Single answer`

**EN** A company must retain sensitive customer data for 7 years to comply with regulatory requirements. The data should be highly durable, encrypted, and infrequently accessed after the first 30 days. Which solution should the company implement to meet these requirements in a cost-effective manner?

**中** 公司必须将敏感客户数据保留 7 年才能遵守监管要求。数据应该高度耐用、加密，并且在前 30 天后很少被访问。公司应该实施哪种解决方案来以经济高效的方式满足这些要求？

- **A.** Store the data in an Amazon S3 bucket with the S3 Glacier Deep Archive storage class, using a lifecycle policy to transition the data after 30 days.
  - 将数据存储在具有 S3 Glacier Deep Archive 存储类的 Amazon S3 存储桶中，并使用生命周期策略在 30 天后转换数据。
- **B.** Store the data in an Amazon S3 bucket with the S3 Standard-Infrequent Access (S3 Standard-IA) storage class, using a lifecycle policy to transition the data after 30 days.
  - 将数据存储在具有 S3 标准-不频繁访问（S3 标准-IA）存储类的 Amazon S3 存储桶中，并使用生命周期策略在 30 天后转换数据。
- **C.** Store the data in an Amazon S3 bucket with the S3 Intelligent-Tiering storage class and enable encryption using an AWS Key Management Service (AWS KMS) key.
  - 将数据存储在具有 S3 智能分层存储类的 Amazon S3 存储桶中，并使用 AWS Key Management Service (AWS KMS) 密钥启用加密。
- **D.** Store the data in Amazon EBS volumes and take regular snapshots for long-term retention.
  - 将数据存储在 Amazon EBS 卷中并定期拍摄快照以便长期保留。

**正确答案 / Answer: `A`**

The company needs a solution that balances cost-effectiveness, durability, encryption, and compliance with a 7-year retention policy. Amazon S3 Glacier Deep Archive is the ideal storage class for long-term retention of infrequently accessed data due to its low cost and high durability. By using a lifecycle policy, the company can transition the data from the default S3 storage class to Glacier Deep Archive after the initial 30-day period of higher access frequency, reducing costs while meeting regulatory and security requirements.

该公司需要一种能够平衡成本效益、耐用性、加密和遵守 7 年保留政策的解决方案。 Amazon S3 Glacier Deep Archive 因其低成本和高耐用性而成为长期保留不经常访问的数据的理想存储类别。通过使用生命周期策略，该公司可以在最初 30 天的较高访问频率后将数据从默认的 S3 存储类别迁移到 Glacier Deep Archive，从而降低成本，同时满足监管和安全要求。

---

## Question 81  `Single answer`

**EN** A company is required to retain its customer transaction data for 7 years due to compliance regulations. The data must be easily accessible for the first year and then archived for cost efficiency, but it should still be retrievable within a few hours if needed. How should the company design its data retention strategy using AWS services?

**中** 根据合规规定，公司需要保留其客户交易数据 7 年。第一年数据必须易于访问，然后存档以提高成本效率，但如果需要，仍应在几个小时内检索数据。公司应如何使用 AWS 服务设计数据保留策略？

- **A.** Store the data in Amazon S3 Standard for the first year, then transition it to S3 Glacier Deep Archive after one year using an S3 Lifecycle policy.
  - 第一年将数据存储在 Amazon S3 Standard 中，然后使用 S3 生命周期策略在一年后将其转换到 S3 Glacier Deep Archive。
- **B.** Store the data in Amazon S3 Standard for the first year, then transition it to S3 Intelligent-Tiering after one year.
  - 第一年将数据存储在 Amazon S3 标准中，一年后将其转换为 S3 智能分层。
- **C.** Store the data in Amazon S3 Standard for the first year, then transition it to S3 Glacier Flexible Retrieval after one year using an S3 Lifecycle policy.
  - 第一年将数据存储在 Amazon S3 标准中，然后使用 S3 生命周期策略在一年后将其转换为 S3 Glacier 灵活检索。
- **D.** Store the data in Amazon S3 Standard for the first year, then transition it to Amazon EBS snapshots after one year.
  - 第一年将数据存储在 Amazon S3 标准中，一年后将其转换为 Amazon EBS 快照。

**正确答案 / Answer: `C`**

To meet the company's data retention requirements, Amazon S3 Standard can be used for the first year to ensure easy accessibility. After the first year, transitioning to S3 Glacier Flexible Retrieval using an S3 Lifecycle policy is the optimal solution as it balances cost-efficiency and retrieval times in hours, fulfilling both compliance and business needs. Other options either fail to meet the retrieval time requirement or are not cost-effective for long-term storage.

为了满足公司的数据保留要求，第一年可以使用 Amazon S3 标准，以确保易于访问。第一年后，使用 S3 生命周期策略过渡到 S3 Glacier 灵活检索是最佳解决方案，因为它可以平衡成本效率和以小时为单位的检索时间，满足合规性和业务需求。其他选项要么无法满足检索时间要求，要么对于长期存储来说不具有成本效益。

---

## Question 82  `Single answer`

**EN** A company needs to enforce a data retention policy for its critical business data stored in Amazon S3. The data must be retained for 7 years to meet compliance requirements, and it should be protected against accidental deletion or overwriting during this period. Which solution will meet these requirements?

**中** 公司需要对其存储在 Amazon S3 中的关键业务数据实施数据保留策略。数据必须保留 7 年以满足合规性要求，并且在此期间应防止数据被意外删除或覆盖。哪种解决方案可以满足这些要求？

- **A.** Enable S3 Versioning and configure a lifecycle policy to transition non-current versions to Glacier after 7 years.
  - 启用 S3 版本控制并配置生命周期策略，以在 7 年后将非当前版本过渡到 Glacier。
- **B.** Enable S3 Object Lock in Compliance mode with a retention period of 7 years.
  - 在合规模式下启用 S3 对象锁定，保留期为 7 年。
- **C.** Use S3 Intelligent-Tiering to automatically move objects to the appropriate storage class based on access patterns.
  - 使用 S3 智能分层根据访问模式自动将对象移动到适当的存储类。
- **D.** Enable MFA Delete on the S3 bucket and configure a lifecycle policy to delete objects after 7 years.
  - 在 S3 存储桶上启用 MFA 删除，并配置生命周期策略以在 7 年后删除对象。

**正确答案 / Answer: `B`**

To meet the 7-year compliance requirement, the company needs to ensure that the data cannot be deleted or modified for the entire retention period. S3 Object Lock in Compliance mode is specifically designed for this purpose, as it enforces a write-once-read-many (WORM) model that prevents any changes to the data until the retention period expires. Other options, while useful for cost optimization or additional security, do not provide the necessary compliance guarantees.

为了满足 7 年的合规要求，公司需要确保数据在整个保留期内不能被删除或修改。合规模式下的 S3 对象锁定专门为此目的而设计，因为它强制执行一次写入多次读取 (WORM) 模型，可防止在保留期到期之前对数据进行任何更改。其他选项虽然对于成本优化或额外的安全性有用，但不提供必要的合规性保证。

---

## Question 83  `Single answer`

**EN** A financial services company needs to store sensitive customer transaction data in AWS for compliance purposes. The data must be retained for 7 years and classified to meet regulatory requirements. Which solution should you recommend to ensure data retention and classification requirements are met?

**中** 出于合规性目的，一家金融服务公司需要将敏感的客户交易数据存储在 AWS 中。数据必须保留 7 年并进行分类以满足监管要求。您应该推荐哪种解决方案来确保满足数据保留和分类要求？

- **A.** Store the data in Amazon S3 with Object Lock enabled in compliance mode and apply S3 bucket policies to control access.
  - 将数据存储在 Amazon S3 中，并在合规模式下启用对象锁定，并应用 S3 存储桶策略来控制访问。
- **B.** Store the data in Amazon Glacier Deep Archive and manually delete files after 7 years.
  - 将数据存储在 Amazon Glacier Deep Archive 中，并在 7 年后手动删除文件。
- **C.** Use Amazon RDS with automated snapshots configured to retain backups for 7 years.
  - 将 Amazon RDS 与配置为保留备份 7 年的自动快照结合使用。
- **D.** Store the data in Amazon DynamoDB with Time to Live (TTL) set to automatically delete records after 7 years.
  - 将数据存储在 Amazon DynamoDB 中，并将生存时间 (TTL) 设置为 7 年后自动删除记录。

**正确答案 / Answer: `A`**

To meet both data retention and classification requirements for compliance, Amazon S3 with Object Lock in compliance mode is the best solution. It ensures that data cannot be altered or deleted during the specified retention period. Additionally, S3 bucket policies can enforce strict access controls to support classification needs, making this solution suitable for sensitive financial data.

为了满足合规性的数据保留和分类要求，合规模式下具有对象锁定的 Amazon S3 是最佳解决方案。它确保数据在指定的保留期内不会被更改或删除。此外，S3 存储桶策略可以实施严格的访问控制来支持分类需求，使该解决方案适合敏感的财务数据。

---

## Question 84  `Single answer`

**EN** A financial services company uses Amazon S3 to store sensitive customer data. They want to ensure that all data is encrypted at rest and that they comply with stringent regulatory requirements for key management by maintaining full control over encryption keys. Which solution should they implement?

**中** 一家金融服务公司使用 Amazon S3 存储敏感的客户数据。他们希望确保所有数据静态加密，并通过保持对加密密钥的完全控制来遵守密钥管理的严格监管要求。他们应该实施哪种解决方案？

- **A.** Use S3 Server-Side Encryption with Amazon S3-Managed Keys (SSE-S3)
  - 使用带有 Amazon S3 托管密钥的 S3 服务器端加密 (SSE-S3)
- **B.** Use S3 Server-Side Encryption with AWS Key Management Service (SSE-KMS) and AWS-managed keys
  - 将 S3 服务器端加密与 AWS Key Management Service (SSE-KMS) 和 AWS 托管密钥结合使用
- **C.** Use S3 Server-Side Encryption with AWS Key Management Service (SSE-KMS) and customer-managed keys
  - 将 S3 服务器端加密与 AWS Key Management Service (SSE-KMS) 和客户管理的密钥结合使用
- **D.** Use Client-Side Encryption with keys managed in-house
  - 使用客户端加密和内部管理的密钥

**正确答案 / Answer: `C`**

The company needs a solution that ensures encryption at rest and gives them full control over the encryption keys to comply with regulations. S3 Server-Side Encryption with AWS Key Management Service (SSE-KMS) and customer-managed keys meets these requirements by allowing the company to manage their own keys while leveraging AWS KMS for secure key storage, rotation, and auditing.

该公司需要一种解决方案，确保静态加密并让他们完全控制加密密钥以遵守法规。使用 AWS Key Management Service (SSE-KMS) 和客户管理密钥的 S3 服务器端加密满足了这些要求，允许公司管理自己的密钥，同时利用 AWS KMS 进行安全密钥存储、轮换和审核。

---

## Question 85  `Single answer`

**EN** A company is storing sensitive customer data in an Amazon S3 bucket. Compliance requirements mandate that the data must be encrypted at rest and that the encryption keys must be rotated automatically on a regular basis. Which solution will meet these requirements with the least operational overhead?

**中** 一家公司将敏感客户数据存储在 Amazon S3 存储桶中。合规性要求要求数据必须静态加密，并且加密密钥必须定期自动轮换。哪种解决方案能够以最少的运营开销满足这些要求？

- **A.** Use S3 server-side encryption with Amazon S3-managed keys (SSE-S3).
  - 使用带有 Amazon S3 托管密钥 (SSE-S3) 的 S3 服务器端加密。
- **B.** Use S3 server-side encryption with AWS Key Management Service (AWS KMS) keys (SSE-KMS).
  - 将 S3 服务器端加密与 AWS Key Management Service (AWS KMS) 密钥 (SSE-KMS) 结合使用。
- **C.** Use S3 server-side encryption with customer-provided keys (SSE-C).
  - 使用带有客户提供的密钥的 S3 服务器端加密 (SSE-C)。
- **D.** Enable client-side encryption and manage keys through an on-premises hardware security module (HSM).
  - 通过本地硬件安全模块 (HSM) 启用客户端加密并管理密钥。

**正确答案 / Answer: `B`**

The company needs a solution that ensures encryption at rest and supports automatic key rotation with minimal operational overhead. SSE-KMS leverages AWS Key Management Service (KMS) to manage encryption keys, providing features like automatic key rotation and centralized management, making it the best choice for this scenario.

该公司需要一种解决方案，确保静态加密并支持自动密钥轮换，同时将运营开销降至最低。 SSE-KMS 利用 AWS Key Management Service (KMS)来管理加密密钥，提供密钥自动轮换、集中管理等功能，是该场景的最佳选择。

---

## Question 86  `Single answer`

**EN** A company stores sensitive customer data in an Amazon S3 bucket. The company requires that all data be encrypted at rest, and they must have full control over the encryption keys, including the ability to manage and rotate them. Which solution best meets these requirements?

**中** 某公司将敏感客户数据存储在 Amazon S3 存储桶中。该公司要求所有数据静态加密，并且必须完全控制加密密钥，包括管理和轮换密钥的能力。哪种解决方案最能满足这些要求？

- **A.** Use Amazon S3 server-side encryption with Amazon S3-managed keys (SSE-S3).
  - 将 Amazon S3 服务器端加密与 Amazon S3 托管密钥 (SSE-S3) 结合使用。
- **B.** Use Amazon S3 server-side encryption with AWS Key Management Service keys (SSE-KMS).
  - 将 Amazon S3 服务器端加密与 AWS Key Management Service 密钥 (SSE-KMS) 结合使用。
- **C.** Use Amazon S3 server-side encryption with customer-provided keys (SSE-C).
  - 使用带有客户提供的密钥的 Amazon S3 服务器端加密 (SSE-C)。
- **D.** Use client-side encryption with encryption keys managed locally by the company.
  - 使用由公司本地管理的加密密钥进行客户端加密。

**正确答案 / Answer: `D`**

The company requires full control over encryption keys, including management and rotation, which is only possible with client-side encryption. This approach puts the responsibility for encryption and decryption entirely on the company, ensuring they retain full control over the keys. Other server-side encryption options, such as SSE-S3, SSE-KMS, and SSE-C, either rely on AWS-managed key infrastructure or do not provide full key management capabilities.

该公司要求完全控制加密密钥，包括管理和轮换，这只有通过客户端加密才能实现。这种方法将加密和解密的责任完全交给公司，确保他们保留对密钥的完全控制。其他服务器端加密选项（例如 SSE-S3、SSE-KMS 和 SSE-C）要么依赖于 AWS 托管的密钥基础设施，要么不提供完整的密钥管理功能。

---

## Question 87  `Select 2`

**EN** A company is building a new application that stores sensitive customer data in Amazon S3. The company requires that the data be encrypted both at rest and in transit. Additionally, they want complete control over the encryption keys used for the data. Which combination of solutions will meet these requirements?

**中** 一家公司正在构建一个新应用程序，将敏感客户数据存储在 Amazon S3 中。该公司要求数据在静态和传输过程中都进行加密。此外，他们希望完全控制用于数据的加密密钥。哪种解决方案组合可以满足这些要求？

- **A.** Use Amazon S3 default server-side encryption with AES-256 and enable SSL/TLS for data in transit.
  - 使用带有 AES-256 的 Amazon S3 默认服务器端加密，并为传输中的数据启用 SSL/TLS。
- **B.** Use Amazon S3 server-side encryption with AWS KMS-managed keys (SSE-KMS) and enable SSL/TLS for data in transit.
  - 将 Amazon S3 服务器端加密与 AWS KMS 托管密钥 (SSE-KMS) 结合使用，并为传输中的数据启用 SSL/TLS。
- **C.** Use Amazon S3 server-side encryption with customer-provided keys (SSE-C) and enable SSL/TLS for data in transit.
  - 使用带有客户提供的密钥 (SSE-C) 的 Amazon S3 服务器端加密，并为传输中的数据启用 SSL/TLS。
- **D.** Use client-side encryption with AWS KMS for managing encryption keys and enable SSL/TLS for data in transit.
  - 使用 AWS KMS 的客户端加密来管理加密密钥，并为传输中的数据启用 SSL/TLS。
- **E.** Use Amazon S3 bucket policies to enforce encryption and disable SSL/TLS for data in transit.
  - 使用 Amazon S3 存储桶策略对传输中的数据强制加密并禁用 SSL/TLS。

**正确答案 / Answer: `C, D`**

The company requires complete control over encryption keys for data stored in Amazon S3 and encryption for data in transit. Option 3 (SSE-C) allows the company to manage their own encryption keys while AWS handles encryption and decryption. Option 4 (client-side encryption) also meets the requirements by allowing the company to encrypt data using their own keys before uploading it to S3. Both solutions combine with SSL/TLS to secure data in transit, fully meeting the requirements. Other options either do not provide full key control or violate encryption requirements.

该公司要求完全控制存储在 Amazon S3 中的数据的加密密钥以及传输中数据的加密。选项 3 (SSE-C) 允许公司管理自己的加密密钥，同时 AWS 处理加密和解密。选项 4（客户端加密）也满足要求，允许公司在将数据上传到 S3 之前使用自己的密钥对其进行加密。这两种解决方案都与 SSL/TLS 相结合来保护传输中的数据，完全满足要求。其他选项要么不提供完整的密钥控制，要么违反加密要求。

---

## Question 88  `Select 3`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores data in an Amazon RDS database. The company wants to ensure that the architecture is resilient to failure in a single Availability Zone. How should the architecture be designed to meet this requirement?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。该应用程序将数据存储在 Amazon RDS 数据库中。该公司希望确保该架构能够抵御单个可用区中的故障。应该如何设计架构来满足这个需求？

- **A.** Deploy the EC2 instances across multiple Availability Zones and register them with the ALB.
  - 跨多个可用区部署 EC2 实例并向 ALB 注册它们。
- **B.** Enable Multi-AZ deployment for the Amazon RDS database.
  - 为 Amazon RDS 数据库启用多可用区部署。
- **C.** Configure the ALB to route traffic only to instances in the primary Availability Zone.
  - 配置 ALB 以仅将流量路由到主可用区中的实例。
- **D.** Set up an Auto Scaling group for the EC2 instances and configure it to span across multiple Availability Zones.
  - 为 EC2 实例设置 Auto Scaling 组并将其配置为跨多个可用区。
- **E.** Use Amazon S3 for storing application data instead of RDS.
  - 使用 Amazon S3 代替 RDS 来存储应用程序数据。

**正确答案 / Answer: `A, B, D`**

To design a resilient architecture, you must distribute resources across multiple Availability Zones to ensure high availability and fault tolerance. Deploying EC2 instances across multiple zones, enabling Multi-AZ for RDS, and using an Auto Scaling group that spans multiple zones ensures that your application can handle failures in a single Availability Zone and remain operational.

要设计弹性架构，您必须跨多个可用区分配资源，以确保高可用性和容错能力。跨多个区域部署 EC2 实例、为 RDS 启用多可用区并使用跨多个区域的 Auto Scaling 组可确保您的应用程序可以处理单个可用区中的故障并保持运行。

---

## Question 89  `Single answer`

**EN** An e-commerce company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB) in a single Availability Zone. The company has been experiencing downtime during hardware failures in the Availability Zone. How can the company improve the resilience of the architecture to minimize downtime?

**中** 一家电子商务公司正在单个可用区中 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。该公司在可用区的硬件故障期间经历了停机。公司如何提高架构的弹性以最大限度地减少停机时间？

- **A.** Deploy the EC2 instances in multiple Availability Zones and configure the ALB to distribute traffic across them.
  - 在多个可用区中部署 EC2 实例并配置 ALB 以在它们之间分配流量。
- **B.** Increase the size of the EC2 instances in the current Availability Zone to handle more traffic during failures.
  - 增加当前可用区中 EC2 实例的大小，以在故障期间处理更多流量。
- **C.** Replace the Application Load Balancer with a Network Load Balancer for higher reliability.
  - 将 Application Load Balancer 替换为 Network Load Balancer，以获得更高的可靠性。
- **D.** Configure Auto Scaling to terminate and replace failed EC2 instances within the same Availability Zone.
  - 配置 Auto Scaling 以终止并替换同一可用区内出现故障的 EC2 实例。

**正确答案 / Answer: `A`**

To design a resilient architecture, it is critical to avoid single points of failure. By deploying EC2 instances in multiple Availability Zones and using the Application Load Balancer to distribute traffic, the application can continue to serve requests even if one Availability Zone becomes unavailable. This approach ensures high availability and fault tolerance, which are key principles of resilient architecture design.

要设计弹性架构，避免单点故障至关重要。通过在多个可用区部署 EC2 实例并使用 Application Load Balancer 分配流量，即使一个可用区不可用，应用程序也可以继续服务请求。这种方法确保了高可用性和容错能力，这是弹性架构设计的关键原则。

---

## Question 90  `Single answer`

**EN** A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB) across multiple Availability Zones. The application is stateful and requires session persistence for users. The company wants to improve the resilience of the architecture without redesigning the application. What should the company do?

**中** 一家公司在跨多个可用区的 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。该应用程序是有状态的，需要用户的会话持久性。该公司希望在不重新设计应用程序的情况下提高架构的弹性。公司应该做什么？

- **A.** Enable sticky sessions on the Application Load Balancer.
  - 在 Application Load Balancer 上启用粘性会话。
- **B.** Use Amazon RDS with Multi-AZ deployment for session persistence.
  - 将 Amazon RDS 与多可用区部署结合使用以实现会话持久性。
- **C.** Deploy a Redis cluster on Amazon ElastiCache to store session data.
  - 在 Amazon ElastiCache 上部署 Redis 集群，用于存储会话数据。
- **D.** Configure Auto Scaling with a minimum instance count across multiple Availability Zones.
  - 跨多个可用区配置 Auto Scaling 的最小实例数。

**正确答案 / Answer: `A`**

To improve the resilience of the architecture without redesigning the application, enabling sticky sessions (session affinity) on the Application Load Balancer ensures that user requests are consistently routed to the same EC2 instance, preserving session data and avoiding disruptions during failover. This solution aligns with the requirement to maintain session persistence while enhancing resilience.

为了在不重新设计应用程序的情况下提高架构的弹性，在 Application Load Balancer 上启用粘性会话（会话亲和性）可确保用户请求一致路由到同一 EC2 实例，保留会话数据并避免故障转移期间的中断。该解决方案符合维持会话持久性同时增强弹性的要求。

---

## Question 91  `Select 2`

**EN** A company is migrating its web application to AWS and wants to ensure high availability and fault tolerance for its application. The application is deployed on Amazon EC2 instances fronted by an Application Load Balancer. The company’s primary goal is to ensure that the application remains available even if an entire Availability Zone goes down. Which of the following architecture choices will meet this requirement?

**中** 一家公司正在将其 Web 应用程序迁移到 AWS，并希望确保其应用程序的高可用性和容错能力。该应用程序部署在 Application Load Balancer 前面的 Amazon EC2 实例上。该公司的主要目标是确保即使整个可用区出现故障，应用程序仍然可用。以下哪种架构选择可以满足此要求？

- **A.** Deploy EC2 instances in multiple Availability Zones and attach them to the Application Load Balancer.
  - 在多个可用区中部署 EC2 实例并将它们附加到 Application Load Balancer。
- **B.** Enable Auto Scaling for the EC2 instances and configure it to span across multiple Availability Zones.
  - 为 EC2 实例启用 Auto Scaling 并将其配置为跨多个可用区。
- **C.** Deploy EC2 instances in a single Availability Zone and set up an Application Load Balancer in front of them.
  - 在单个可用区中部署 EC2 实例，并在它们前面设置 Application Load Balancer。
- **D.** Use Elastic Load Balancing's cross-zone load balancing feature to distribute traffic across instances in different regions.
  - 使用 Elastic Load Balancing 的跨区域负载均衡功能在不同区域的实例之间分配流量。
- **E.** Deploy the Application Load Balancer and EC2 instances in different Availability Zones to ensure fault tolerance.
  - 将 Application Load Balancer 和 EC2 实例部署在不同的可用区以确保容错。

**正确答案 / Answer: `A, B`**

To achieve high availability and fault tolerance, EC2 instances must be deployed in multiple Availability Zones, and Auto Scaling should be configured to span these zones. This ensures that the application remains operational even if an entire Availability Zone experiences a failure. The Application Load Balancer will route traffic to healthy instances in other zones as needed.

为了实现高可用性和容错能力，EC2 实例必须部署在多个可用区中，并且应将 Auto Scaling 配置为跨这些可用区。这可以确保即使整个可用区出现故障，应用程序也能保持运行。 Application Load Balancer 将根据需要将流量路由到其他区域中的健康实例。

---

## Question 92  `Select 4`

**EN** A company is building a web application that experiences unpredictable spikes in traffic. The application stores user data in a relational database and uses a RESTful API to process requests. The company wants the architecture to automatically handle traffic spikes, ensure high availability, and minimize operational overhead. Which combination of AWS services should they use to design a scalable and loosely coupled architecture?

**中** 一家公司正在构建一个 Web 应用程序，该应用程序会遇到不可预测的流量峰值。该应用程序将用户数据存储在关系数据库中，并使用 RESTful API 来处理请求。该公司希望该架构能够自动处理流量峰值、确保高可用性并最大限度地减少运营开销。他们应该使用哪种 AWS 服务组合来设计可扩展且松散耦合的架构？

- **A.** Amazon RDS with Multi-AZ deployment for the database
  - Amazon RDS 数据库多可用区部署
- **B.** Amazon EC2 Auto Scaling for the web servers
  - Amazon EC2 Web 服务器的自动缩放
- **C.** Elastic Load Balancer (ELB) to distribute incoming traffic
  - Elastic Load Balancer (ELB) 用于分配传入流量
- **D.** Amazon SQS to decouple the application components
  - Amazon SQS 用于解耦应用程序组件
- **E.** Amazon EFS to store static website content
  - Amazon EFS 存储静态网站内容

**正确答案 / Answer: `A, B, C, D`**

To design a scalable and loosely coupled architecture, the combination of Amazon RDS with Multi-AZ, EC2 Auto Scaling, ELB, and Amazon SQS ensures high availability, fault tolerance, and the ability to handle unpredictable traffic spikes. These services work together to minimize operational overhead, decouple components, and provide a robust solution for the web application. Amazon EFS, while useful in other scenarios, is not relevant for this specific use case.

为了设计可扩展且松散耦合的架构，Amazon RDS 与多可用区、EC2 Auto Scaling、ELB 和 Amazon SQS 的组合可确保高可用性、容错性以及处理不可预测的流量峰值的能力。这些服务协同工作，最大限度地减少运营开销、解耦组件，并为 Web 应用程序提供强大的解决方案。 Amazon EFS 虽然在其他场景中有用，但与此特定用例无关。

---

## Question 93  `Select 3`

**EN** A company is building a web application that requires high availability and scalability. The application is expected to experience unpredictable traffic patterns. The backend of the application consists of an Amazon RDS database and a fleet of Amazon EC2 instances running behind an Application Load Balancer (ALB). How can you design the architecture to ensure scalability and loose coupling?

**中** 一家公司正在构建需要高可用性和可扩展性的 Web 应用程序。应用程序预计会经历不可预测的流量模式。应用程序的后端由 Amazon RDS 数据库和在 Application Load Balancer (ALB) 后面运行的一组 Amazon EC2 实例组成。如何设计架构以确保可扩展性和松耦合？

- **A.** Use an Amazon SQS queue to decouple the web application from the backend EC2 instances.
  - 使用 Amazon SQS 队列将 Web 应用程序与后端 EC2 实例解耦。
- **B.** Configure Amazon Auto Scaling for the EC2 instances to handle traffic spikes automatically.
  - 为 EC2 实例配置 Amazon Auto Scaling 以自动处理流量峰值。
- **C.** Deploy the Amazon RDS instance in a Multi-AZ configuration for high availability.
  - 在多可用区配置中部署 Amazon RDS 实例以实现高可用性。
- **D.** Replace the Application Load Balancer with a Network Load Balancer for improved traffic distribution.
  - 将 Application Load Balancer 替换为 Network Load Balancer，以改善流量分配。
- **E.** Use Amazon EFS to share session data across the EC2 instances.
  - 使用 Amazon EFS 在 EC2 实例之间共享会话数据。

**正确答案 / Answer: `A, B, C`**

To design a scalable and loosely coupled architecture, it is crucial to decouple components using services like Amazon SQS, configure Auto Scaling for dynamic capacity management, and ensure high availability for critical components like the database using Multi-AZ deployments. These measures allow the application to efficiently handle unpredictable traffic patterns while minimizing downtime and fostering loose coupling between components.

要设计可扩展且松散耦合的架构，至关重要的是使用 Amazon SQS 等服务解耦组件，配置 Auto Scaling 进行动态容量管理，并使用多可用区部署确保数据库等关键组件的高可用性。这些措施使应用程序能够有效地处理不可预测的流量模式，同时最大限度地减少停机时间并促进组件之间的松散耦合。

---

## Question 94  `Select 3`

**EN** A company is building a web application that serves users across multiple geographic regions. The application consists of a frontend hosted on Amazon S3 and an API backend that processes requests using Amazon API Gateway and AWS Lambda. The company expects significant traffic growth and wants to design the architecture to be scalable, fault-tolerant, and loosely coupled. What additional components should you include in the architecture to meet these requirements?

**中** 一家公司正在构建一个为多个地理区域的用户提供服务的 Web 应用程序。该应用程序由托管在 Amazon S3 上的前端和使用 Amazon API Gateway 和 AWS Lambda 处理请求的 API 后端组成。该公司预计流量将显着增长，并希望将架构设计为可扩展、容错和松散耦合。您应该在架构中包含哪些附加组件来满足这些要求？

- **A.** Use Amazon CloudFront to distribute content globally and reduce latency.
  - 使用 Amazon CloudFront 在全球范围内分发内容并减少延迟。
- **B.** Implement Amazon RDS in a Multi-AZ configuration to handle API requests.
  - 在多可用区配置中实施 Amazon RDS 以处理 API 请求。
- **C.** Add an Amazon SQS queue between API Gateway and AWS Lambda to decouple the services.
  - 在 API 网关和 AWS Lambda 之间添加 Amazon SQS 队列，实现服务解耦。
- **D.** Deploy the application in multiple AWS Regions and use Route 53 for DNS-based routing.
  - 在多个 AWS 区域中部署应用程序并使用 Route 53 进行基于 DNS 的路由。
- **E.** Use Elastic Load Balancing (ELB) to distribute traffic directly to the Amazon S3 bucket.
  - 使用 Elastic Load Balancing (ELB) 将流量直接分配到 Amazon S3 存储桶。

**正确答案 / Answer: `A, C, D`**

To create a scalable and loosely coupled architecture, using Amazon CloudFront reduces latency for static content, while Amazon SQS decouples services to handle traffic spikes more effectively. Deploying the application across multiple AWS Regions with Route 53 ensures fault tolerance and low-latency DNS routing for global users. These elements work together to meet the company's requirements for scalability, fault tolerance, and loose coupling.

为了创建可扩展且松散耦合的架构，使用 Amazon CloudFront 可以减少静态内容的延迟，而 Amazon SQS 可以解耦服务以更有效地处理流量峰值。使用 Route 53 跨多个 AWS 区域部署应用程序可确保为全球用户提供容错和低延迟 DNS 路由。这些元素协同工作以满足公司对可扩展性、容错性和松散耦合的要求。

---

## Question 95  `Select 3`

**EN** A media company is migrating its video streaming application to AWS. The application requires high availability, low latency, and the ability to handle unpredictable spikes in traffic. Which combination of AWS services and features should be implemented to meet these requirements?

**中** 一家媒体公司正在将其视频流应用程序迁移到 AWS。该应用程序需要高可用性、低延迟以及处理不可预测的流量峰值的能力。应实施哪种 AWS 服务和功能组合才能满足这些要求？

- **A.** Use Amazon CloudFront with an S3 bucket as the origin to deliver content globally with low latency.
  - 使用 Amazon CloudFront 以 S3 存储桶作为源，以低延迟在全球范围内传送内容。
- **B.** Deploy the application on a single EC2 instance with an Elastic IP to ensure high availability.
  - 将应用程序部署在具有弹性 IP 的单个 EC2 实例上，以确保高可用性。
- **C.** Use Application Load Balancer (ALB) in front of an Auto Scaling group of EC2 instances to handle traffic spikes.
  - 在 EC2 实例 Auto Scaling 组前面使用 Application Load Balancer (ALB) 来处理流量峰值。
- **D.** Enable AWS Global Accelerator to improve performance and availability for global users.
  - 启用 AWS Global Accelerator 来提高全球用户的性能和可用性。
- **E.** Store user session data in Amazon RDS to reduce application latency during peak traffic.
  - 将用户会话数据存储在 Amazon RDS 中，以减少高峰流量期间的应用程序延迟。

**正确答案 / Answer: `A, C, D`**

To meet the application's requirements for high availability, low latency, and the ability to handle traffic spikes, a combination of Amazon CloudFront for content delivery, Application Load Balancer with Auto Scaling for traffic management, and AWS Global Accelerator for global performance improvements is ideal. These services work together to ensure the application is resilient, responsive, and scalable.

为了满足应用程序对高可用性、低延迟和处理流量峰值的要求，用于内容交付的 Amazon CloudFront、用于流量管理的具有自动缩放功能的 Application Load Balancer 和用于全局性能改进的 AWS Global Accelerator 的组合是理想的选择。这些服务协同工作以确保应用程序具有弹性、响应能力和可扩展性。

---

## Question 96  `Single answer`

**EN** A company is running a web application with a MySQL database hosted on an Amazon RDS instance. The application is experiencing intermittent high latency during peak traffic hours. The solution architect has been tasked with improving database performance without significant application changes. Which solution would address this issue effectively?

**中** 一家公司正在运行一个 Web 应用程序，该应用程序的 MySQL 数据库托管在 Amazon RDS 实例上。该应用程序在高峰流量时段遇到间歇性高延迟。解决方案架构师的任务是在不进行重大应用程序更改的情况下提高数据库性能。哪种解决方案可以有效解决这个问题？

- **A.** Enable Amazon RDS Read Replicas and configure the application to use them for read operations.
  - 启用 Amazon RDS 只读副本并配置应用程序以使用它们进行读取操作。
- **B.** Scale the RDS instance vertically by upgrading to a larger instance type.
  - 通过升级到更大的实例类型来垂直扩展 RDS 实例。
- **C.** Enable Multi-AZ deployment for the RDS instance to improve performance.
  - 为 RDS 实例启用多可用区部署以提高性能。
- **D.** Migrate the database to Amazon Redshift for better performance.
  - 将数据库迁移到 Amazon Redshift 以获得更好的性能。

**正确答案 / Answer: `A`**

Using Amazon RDS Read Replicas is the most effective solution for handling read-heavy traffic during peak times without significant application changes. Read replicas provide additional read capacity, which can reduce latency and improve performance without needing to scale the primary database instance vertically or migrate to a different database technology.

使用 Amazon RDS 只读副本是在高峰时段处理读取大量流量且无需进行重大应用程序更改的最有效解决方案。只读副本提供额外的读取容量，可以减少延迟并提高性能，而无需垂直扩展主数据库实例或迁移到不同的数据库技术。

---

## Question 97  `Select 4`

**EN** A company is running a high-traffic web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user-uploaded images in an Amazon S3 bucket, processes them through an Amazon SQS queue, and archives the results in another S3 bucket. The company wants to ensure that the architecture is highly available and fault-tolerant, while minimizing operational overhead. Which combination of services should you recommend adding to achieve this goal?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行高流量 Web 应用程序。该应用程序将用户上传的图像存储在 Amazon S3 存储桶中，通过 Amazon SQS 队列对其进行处理，并将结果存档在另一个 S3 存储桶中。该公司希望确保该架构具有高可用性和容错性，同时最大限度地减少运营开销。您应该建议添加哪种服务组合来实现此目标？

- **A.** Enable S3 Versioning on the image storage bucket to prevent accidental data loss.
  - 在图像存储桶上启用 S3 版本控制以防止意外数据丢失。
- **B.** Set up Auto Scaling for the EC2 instances to handle traffic spikes.
  - 为 EC2 实例设置 Auto Scaling 以处理流量峰值。
- **C.** Deploy the EC2 instances across multiple Availability Zones.
  - 跨多个可用区部署 EC2 实例。
- **D.** Use Amazon DynamoDB to store the metadata of processed images instead of S3.
  - 使用 Amazon DynamoDB 来存储处理图像的元数据而不是 S3。
- **E.** Enable Cross-Region Replication for the S3 buckets to improve disaster recovery.
  - 为 S3 存储桶启用跨区域复制以改善灾难恢复。

**正确答案 / Answer: `A, B, C, E`**

The architecture relies on fault tolerance and high availability to meet business needs. Enabling S3 Versioning ensures data protection, Auto Scaling handles traffic spikes, deploying EC2 instances across multiple AZs adds redundancy, and enabling Cross-Region Replication ensures disaster recovery. These features together reduce operational overhead and enhance the system's resilience.

该架构依靠容错和高可用性来满足业务需求。启用 S3 版本控制可确保数据保护，Auto Scaling 可处理流量高峰，跨多个可用区部署 EC2 实例可增加冗余，启用跨区域复制可确保灾难恢复。这些功能共同减少了运营开销并增强了系统的弹性。

---

## Question 98  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user-uploaded files in an Amazon S3 bucket. Recently, the company noticed an increase in latency when downloading files from the S3 bucket. As a solutions architect, what should you recommend to minimize download latency for end users?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。该应用程序将用户上传的文件存储在 Amazon S3 存储桶中。最近，该公司注意到从 S3 存储桶下载文件时的延迟增加。作为解决方案架构师，您应该建议什么来最大限度地减少最终用户的下载延迟？

- **A.** Enable S3 Transfer Acceleration for the S3 bucket.
  - 为 S3 存储桶启用 S3 传输加速。
- **B.** Move the files to an Amazon EBS volume attached to the EC2 instances.
  - 将文件移动到附加到 EC2 实例的 Amazon EBS 卷。
- **C.** Use Amazon CloudFront to cache the files closer to the users.
  - 使用 Amazon CloudFront 缓存离用户更近的文件。
- **D.** Enable cross-region replication for the S3 bucket.
  - 为 S3 存储桶启用跨区域复制。

**正确答案 / Answer: `C`**

Amazon CloudFront is designed to improve performance by caching content at edge locations closer to users. This reduces latency for downloading files, especially when users are geographically distributed. The other options either address different problems (e.g., disaster recovery) or are not optimal for this specific use case.

Amazon CloudFront 旨在通过在更靠近用户的边缘位置缓存内容来提高性能。这可以减少下载文件的延迟，特别是当用户分布在不同的地理位置时。其他选项要么解决不同的问题（例如灾难恢复），要么对于该特定用例来说不是最佳选择。

---

## Question 99  `Single answer`

**EN** You are building a serverless application that requires a REST API to interact with a DynamoDB table. The API must support multiple HTTP methods (e.g., GET, POST, PUT) and require authentication using AWS IAM roles. Which service or configuration should you use to implement this API?

**中** 您正在构建一个需要 REST API 与 DynamoDB 表交互的无服务器应用程序。 API 必须支持多种 HTTP 方法（例如 GET、POST、PUT），并需要使用 AWS IAM 角色进行身份验证。您应该使用哪种服务或配置来实现此 API？

- **A.** Use Amazon API Gateway to create a REST API and enable AWS IAM authorization.
  - 使用 Amazon API Gateway 创建 REST API 并启用 AWS IAM 授权。
- **B.** Use Amazon EC2 to host a REST API and configure AWS IAM authorization in the application code.
  - 使用 Amazon EC2 托管 REST API 并在应用程序代码中配置 AWS IAM 授权。
- **C.** Use an Application Load Balancer (ALB) to expose the API and enable AWS IAM authorization.
  - 使用 Application Load Balancer (ALB) 公开 API 并启用 AWS IAM 授权。
- **D.** Use AWS Lambda to create the API and directly integrate AWS IAM authorization into the Lambda function.
  - 使用 AWS Lambda 创建 API 并将 AWS IAM 授权直接集成到 Lambda 函数中。

**正确答案 / Answer: `A`**

Amazon API Gateway is a managed service designed for creating, publishing, and managing RESTful APIs. It integrates seamlessly with AWS IAM to provide robust authentication and authorization mechanisms. This makes it the best choice for creating a secure, serverless REST API that interacts with services such as DynamoDB. Using other services like EC2 or ALB would require additional effort and would not align with the intended serverless architecture.

Amazon API Gateway 是一项托管服务，旨在创建、发布和管理 RESTful API。它与 AWS IAM 无缝集成，提供强大的身份验证和授权机制。这使其成为创建与 DynamoDB 等服务交互的安全、无服务器 REST API 的最佳选择。使用 EC2 或 ALB 等其他服务需要额外的工作，并且不符合预期的无服务器架构。

---

## Question 100  `Single answer`

**EN** A company wants to expose a RESTful API to its customers for accessing real-time inventory data. The API needs to be scalable, secure, and cost-efficient. Additionally, the company wants to control which users can access specific API methods and log all API requests for auditing purposes. Which AWS service combination would best meet these requirements?

**中** 一家公司希望向客户公开 RESTful API，以访问实时库存数据。 API 需要可扩展、安全且经济高效。此外，该公司希望控制哪些用户可以访问特定的 API 方法并记录所有 API 请求以进行审计。哪种 AWS 服务组合最能满足这些要求？

- **A.** Amazon API Gateway and AWS Lambda
  - Amazon API Gateway 和 AWS Lambda
- **B.** Amazon API Gateway and Amazon RDS
  - Amazon API Gateway 和 Amazon RDS
- **C.** Amazon EC2 with a custom REST API and Amazon CloudWatch
  - 具有自定义 REST API 的 Amazon EC2 和 Amazon CloudWatch
- **D.** Amazon API Gateway, AWS Lambda, and AWS IAM
  - Amazon API Gateway、AWS Lambda 和 AWS IAM

**正确答案 / Answer: `D`**

Amazon API Gateway is designed to expose REST APIs in a scalable and cost-efficient manner. Combined with AWS Lambda, it allows you to handle backend logic without provisioning servers. AWS IAM enables fine-grained access control for API methods, ensuring security. API Gateway also integrates with CloudWatch for logging and monitoring, meeting all the requirements of scalability, security, and auditing.

Amazon API Gateway 旨在以可扩展且经济高效的方式公开 REST API。与 AWS Lambda 结合使用，您可以在不配置服务器的情况下处理后端逻辑。 AWS IAM 能够对 API 方法进行细粒度的访问控制，保证安全性。 API Gateway 还与 CloudWatch 集成以进行日志记录和监控，满足可扩展性、安全性和审计的所有要求。

---

# AWS SAA-C03 真题演练卷 · 第 05 份

> 题目 201–250 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 201  `Single answer`

**EN** A company is hosting a web application on an Amazon EC2 instance behind an Application Load Balancer (ALB). During peak traffic, users report slow response times and intermittent errors. You notice that the EC2 instance is operating at 100% CPU utilization. What is the most cost-effective solution to improve application availability and performance?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。在高峰流量期间，用户报告响应时间缓慢和间歇性错误。您注意到 EC2 实例的 CPU 利用率为 100%。提高应用程序可用性和性能的最具成本效益的解决方案是什么？

- **A.** Add more EC2 instances to the target group of the Application Load Balancer.
  - 将更多 EC2 实例添加到 Application Load Balancer 的目标组。
- **B.** Upgrade the EC2 instance to a larger instance type to handle more traffic.
  - 将 EC2 实例升级到更大的实例类型以处理更多流量。
- **C.** Enable sticky sessions on the Application Load Balancer to route users to the same instance.
  - 在 Application Load Balancer 上启用粘性会话以将用户路由到同一实例。
- **D.** Configure an Auto Scaling group to dynamically add or remove EC2 instances based on traffic patterns.
  - 配置 Auto Scaling 组以根据流量模式动态添加或删除 EC2 实例。

**正确答案 / Answer: `D`**

The most cost-effective solution is to configure an Auto Scaling group with the Application Load Balancer. This ensures that additional EC2 instances are launched during peak traffic and terminated during low traffic, optimizing both performance and cost. While adding more EC2 instances or upgrading the instance type might temporarily resolve the issue, these approaches do not dynamically adjust to changes in traffic patterns, which can lead to inefficient resource utilization.

最经济高效的解决方案是使用 Application Load Balancer 配置 Auto Scaling 组。这可确保在高峰流量期间启动额外的 EC2 实例，并在低流量期间终止额外的 EC2 实例，从而优化性能和成本。虽然添加更多 EC2 实例或升级实例类型可能会暂时解决该问题，但这些方法不会动态调整以适应流量模式的变化，这可能会导致资源利用效率低下。

---

## Question 202  `Single answer`

**EN** A company is hosting a web application that serves dynamic content to users. The application is deployed across multiple Availability Zones for high availability. The company wants to distribute incoming traffic based on the URL path (e.g., '/images/' should route to one set of instances, and '/api/' should route to another set of instances). Which AWS service configuration is the MOST suitable for this requirement?

**中** 一家公司正在托管一个为用户提供动态内容的 Web 应用程序。该应用程序跨多个可用区部署以实现高可用性。该公司希望根据 URL 路径分配传入流量（例如，“/images/”应路由到一组实例，“/api/”应路由到另一组实例）。哪种 AWS 服务配置最适合此要求？

- **A.** Use an Application Load Balancer (ALB) with path-based routing rules.
  - 使用具有基于路径的路由规则的 Application Load Balancer (ALB)。
- **B.** Use a Network Load Balancer (NLB) with listener rules for URL paths.
  - 将 Network Load Balancer (NLB) 与 URL 路径的侦听器规则结合使用。
- **C.** Deploy an Auto Scaling group in each Availability Zone and manage traffic distribution using Route 53.
  - 在每个可用区中部署 Auto Scaling 组并使用 Route 53 管理流量分配。
- **D.** Use an Application Load Balancer (ALB) with host-based routing rules.
  - 将 Application Load Balancer (ALB) 与基于主机的路由规则结合使用。

**正确答案 / Answer: `A`**

The most suitable solution for routing traffic based on URL paths is an Application Load Balancer (ALB) with path-based routing rules. ALB operates at the application layer (Layer 7) and supports advanced routing features like path-based and host-based routing. This makes it ideal for dynamic content routing scenarios like the one described in the question.

基于 URL 路径路由流量的最合适解决方案是具有基于路径的路由规则的 Application Load Balancer (ALB)。 ALB 在应用层（第 7 层）运行，支持高级路由功能，例如基于路径和基于主机的路由。这使得它非常适合动态内容路由场景，例如问题中描述的场景。

---

## Question 203  `Single answer`

**EN** Your company runs a high-traffic e-commerce platform using Amazon RDS for MySQL. You have noticed a significant increase in the number of database connections during peak hours, leading to connection limits being exceeded and degraded performance. How can you use Amazon RDS Proxy to address this issue?

**中** 您的公司使用 Amazon RDS for MySQL 运行高流量电子商务平台。您注意到高峰时段数据库连接数量显着增加，导致超出连接限制并降低性能。如何使用 Amazon RDS Proxy 来解决这个问题？

- **A.** Amazon RDS Proxy pools and manages database connections, reducing the overhead of opening and closing database connections frequently.
  - Amazon RDS 代理池和管理数据库连接，减少频繁打开和关闭数据库连接的开销。
- **B.** Amazon RDS Proxy replicates your database to handle the increased number of connections and distributes the load across replicas.
  - Amazon RDS 代理复制您的数据库以处理增加的连接数并在副本之间分配负载。
- **C.** Amazon RDS Proxy automatically scales the underlying database instance to handle the increased number of connections.
  - Amazon RDS 代理自动扩展底层数据库实例以处理增加的连接数。
- **D.** Amazon RDS Proxy caches query results to reduce the number of queries sent to the database.
  - Amazon RDS 代理缓存查询结果以减少发送到数据库的查询数量。

**正确答案 / Answer: `A`**

Amazon RDS Proxy is designed to manage and pool database connections, which is particularly useful for applications experiencing high connection churn or exceeding connection limits. By reusing existing connections, it reduces the overhead of establishing new connections and improves database performance during peak traffic periods. It does not replicate databases, scale the underlying database instance, or cache query results.

Amazon RDS 代理旨在管理和池化数据库连接，这对于遇到高连接流失或超出连接限制的应用程序特别有用。通过重用现有连接，可以减少建立新连接的开销，并提高高峰流量期间的数据库性能。它不复制数据库、扩展底层数据库实例或缓存查询结果。

---

## Question 204  `Single answer`

**EN** A company is running a multi-tenant application using Amazon RDS for its database. The application experiences unpredictable spikes in traffic, leading to frequent connection timeouts due to the high number of database connections. The development team wants to improve database connection management without modifying the application code. Which solution is the most appropriate for this scenario?

**中** 一家公司正在使用 Amazon RDS 作为其数据库来运行多租户应用程序。应用程序会遇到不可预测的流量峰值，由于数据库连接数量过多，导致频繁的连接超时。开发团队希望在不修改应用程序代码的情况下改进数据库连接管理。哪种解决方案最适合这种场景？

- **A.** Configure Amazon RDS Proxy to pool and share database connections.
  - 配置 Amazon RDS 代理以池化和共享数据库连接。
- **B.** Enable Amazon RDS read replicas to offload read traffic and reduce database connections.
  - 启用 Amazon RDS 只读副本以卸载读取流量并减少数据库连接。
- **C.** Increase the instance size of the Amazon RDS database to handle more connections.
  - 增加 Amazon RDS 数据库的实例大小以处理更多连接。
- **D.** Enable Multi-AZ deployments on the Amazon RDS instance to improve connection handling.
  - 在 Amazon RDS 实例上启用多可用区部署以改进连接处理。

**正确答案 / Answer: `A`**

Amazon RDS Proxy is the best solution for managing unpredictable spikes in database connections because it pools and shares connections efficiently, reducing the risk of connection exhaustion and improving database performance. It also works seamlessly without requiring changes to the application code. Other options either do not address the core issue of connection pooling or are not cost-effective for this use case.

Amazon RDS 代理是管理不可预测的数据库连接峰值的最佳解决方案，因为它可以有效地池化和共享连接，从而降低连接耗尽的风险并提高数据库性能。它还可以无缝工作，无需更改应用程序代码。其他选项要么不能解决连接池的核心问题，要么对于该用例来说不具有成本效益。

---

## Question 205  `Select 3`

**EN** Your company is running an application that connects to an Amazon RDS database. Recently, the application has experienced connection exhaustion issues during traffic spikes, causing downtime. To address this, you decide to implement Amazon RDS Proxy. Which benefits does Amazon RDS Proxy provide in this scenario?

**中** 您的公司正在运行一个连接到 Amazon RDS 数据库的应用程序。最近，该应用程序在流量高峰期间遇到了连接耗尽问题，导致停机。为了解决这个问题，您决定实施 Amazon RDS 代理。 Amazon RDS Proxy 在这种情况下提供哪些好处？

- **A.** Improves application scalability by pooling and sharing database connections.
  - 通过池化和共享数据库连接来提高应用程序的可扩展性。
- **B.** Encrypts data in transit between the application and the database.
  - 加密应用程序和数据库之间传输的数据。
- **C.** Allows for database read replicas to be used automatically for write operations.
  - 允许自动使用数据库只读副本进行写入操作。
- **D.** Reduces the need for application retries during failovers.
  - 减少故障转移期间应用程序重试的需要。
- **E.** Automatically scales the underlying RDS instance during high traffic.
  - 在高流量期间自动扩展底层 RDS 实例。

**正确答案 / Answer: `A, B, D`**

Amazon RDS Proxy is designed to improve the performance and availability of applications that use Amazon RDS. It achieves this by pooling and sharing database connections, encrypting data in transit, and minimizing downtime during failovers. However, it does not automatically scale the database instance or enable write operations on read replicas.

Amazon RDS 代理旨在提高使用 Amazon RDS 的应用程序的性能和可用性。它通过池化和共享数据库连接、加密传输中的数据以及最大限度地减少故障转移期间的停机时间来实现这一目标。但是，它不会自动扩展数据库实例或在只读副本上启用写入操作。

---

## Question 206  `Single answer`

**EN** You are designing a high-traffic application that connects to an Amazon RDS database. You have noticed an increase in connection churn and inefficient connection management during traffic spikes, which is affecting database performance. How can you improve the application’s scalability and ensure efficient database connection management?

**中** 您正在设计一个连接到 Amazon RDS 数据库的高流量应用程序。您已经注意到流量高峰期间连接流失率增加和连接管理效率低下，这正在影响数据库性能。如何提高应用程序的可扩展性并确保高效的数据库连接管理？

- **A.** Use Amazon RDS Proxy to manage database connections and optimize connection pooling.
  - 使用 Amazon RDS Proxy 管理数据库连接并优化连接池。
- **B.** Increase the size of the Amazon RDS instance to handle more database connections.
  - 增加 Amazon RDS 实例的大小以处理更多数据库连接。
- **C.** Deploy an Amazon ElastiCache cluster in front of your Amazon RDS database.
  - 在 Amazon RDS 数据库前面部署 Amazon ElastiCache 集群。
- **D.** Enable Amazon Aurora Serverless to auto-scale the database capacity based on demand.
  - 启用 Amazon Aurora Serverless，根据需求自动扩展数据库容量。

**正确答案 / Answer: `A`**

Amazon RDS Proxy is designed to manage database connection pooling efficiently, which reduces the overhead of opening and closing database connections during traffic spikes. This makes it an ideal solution for applications with unpredictable or spiky workloads, as it improves scalability and minimizes the impact on the database.

Amazon RDS Proxy 旨在有效管理数据库连接池，从而减少流量高峰期间打开和关闭数据库连接的开销。这使其成为具有不可预测或尖峰工作负载的应用程序的理想解决方案，因为它提高了可扩展性并最大限度地减少对数据库的影响。

---

## Question 207  `Select 3`

**EN** A company is designing a disaster recovery (DR) strategy for its primary workload running on Amazon EC2. The DR strategy involves a standby environment in a separate AWS Region. To ensure the standby environment can scale effectively during a failover event, the company needs to handle service quotas and throttling for Amazon EC2 instances. What steps should the company take to configure service quotas for the standby environment?

**中** 一家公司正在为其在 Amazon EC2 上运行的主要工作负载设计灾难恢复 (DR) 策略。 DR 策略涉及单独 AWS 区域中的备用环境。为了确保备用环境在故障转移事件期间能够有效扩展，公司需要处理 Amazon EC2 实例的服务配额和限制。公司应该采取哪些步骤来配置备用环境的服务配额？

- **A.** Request a service quota increase for EC2 instance limits in the standby region.
  - 请求增加备用区域中 EC2 实例限制的服务配额。
- **B.** Use AWS Service Quotas to automatically mirror service limits from the primary region to the standby region.
  - 使用 AWS Service Quotas 自动将服务限制从主要区域镜像到备用区域。
- **C.** Monitor the standby environment with Amazon CloudWatch to track quota usage and proactively request increases if needed.
  - 使用 Amazon CloudWatch 监控备用环境，以跟踪配额使用情况并在需要时主动请求增加。
- **D.** Implement an Auto Scaling group in the standby region to automatically handle quota increases during failover.
  - 在备用区域中实施 Auto Scaling 组，以在故障转移期间自动处理配额增加。
- **E.** Verify the default service quotas in the standby region and ensure they align with the workload requirements.
  - 验证备用区域中的默认服务配额并确保它们符合工作负载要求。

**正确答案 / Answer: `A, C, E`**

When preparing a standby environment for disaster recovery, it is critical to ensure that regional service quotas, such as EC2 instance limits, are sufficient for the anticipated workload. Quotas are managed independently for each region, so the company must request increases in the standby region where needed. Monitoring quota usage with tools like CloudWatch helps avoid throttling during failover. Additionally, verifying the default quotas ensures a proactive approach to meeting workload requirements.

在为灾难恢复准备备用环境时，确保区域服务配额（例如 EC2 实例限制）足以满足预期工作负载至关重要。每个区域的配额是独立管理的，因此公司必须在需要时请求增加备用区域。使用 CloudWatch 等工具监控配额使用情况有助于避免故障转移期间的限制。此外，验证默认配额可确保主动满足工作负载要求。

---

## Question 208  `Select 2`

**EN** You are designing a disaster recovery (DR) solution for a critical application deployed in AWS. The primary environment handles high traffic, and the standby environment is configured for failover. During testing, you notice that API requests to a critical AWS service in the standby environment are being throttled. What steps should you take to resolve this issue?

**中** 您正在为 AWS 中部署的关键应用程序设计灾难恢复 (DR) 解决方案。主环境处理高流量，备用环境配置为故障转移。在测试过程中，您注意到对备用环境中的关键 AWS 服务的 API 请求受到限制。您应该采取什么步骤来解决这个问题？

- **A.** Request a service quota increase for the relevant AWS service in the standby environment.
  - 请求增加备用环境中相关 AWS 服务的服务配额。
- **B.** Enable Amazon CloudWatch metrics to monitor throttling in the standby environment.
  - 启用 Amazon CloudWatch 指标以监控备用环境中的限制。
- **C.** Modify the standby environment to use AWS Lambda for API requests to avoid throttling.
  - 修改备用环境，使用 AWS Lambda 进行 API 请求，避免限流。
- **D.** Use the AWS Service Quotas dashboard to review and adjust limits for the affected service.
  - 使用 AWS Service Quotas 仪表板查看和调整受影响服务的限制。
- **E.** Scale out compute resources in the standby environment to distribute the API requests across multiple instances.
  - 横向扩展备用环境中的计算资源，以跨多个实例分配 API 请求。

**正确答案 / Answer: `A, D`**

To resolve throttling issues in a standby environment, you need to address the root cause, which is the service quota limit. By using the AWS Service Quotas dashboard, you can review the current limits and request a quota increase if necessary. Monitoring tools like CloudWatch are helpful for detecting issues but do not resolve them, and changing compute resources or architectures does not impact service quotas.

要解决备环境的限流问题，需要解决根本原因，即服务配额限制。通过使用 AWS Service Quotas 仪表板，您可以查看当前限制并在必要时请求增加配额。 CloudWatch 等监控工具有助于检测问题，但不能解决问题，并且更改计算资源或架构不会影响服务配额。

---

## Question 209  `Single answer`

**EN** Your company is designing a disaster recovery solution for a web application hosted in AWS. The primary environment is in the us-east-1 region, and a standby environment is configured in the us-west-2 region to ensure failover during outages. You need to ensure that the standby environment can handle the expected workload seamlessly during failover. Which action should you take to prevent throttling issues in the standby region?

**中** 您的公司正在为 AWS 中托管的 Web 应用程序设计灾难恢复解决方案。主环境位于 us-east-1 区域，备用环境配置在 us-west-2 区域，以确保中断期间的故障转移。您需要确保备用环境能够在故障转移期间无缝处理预期的工作负载。您应该采取哪些措施来防止备用区域出现限制问题？

- **A.** Request a service quota increase for the required resources in the us-west-2 region.
  - 请求增加 us-west-2 区域中所需资源的服务配额。
- **B.** Enable Auto Scaling in the us-west-2 region to automatically adjust capacity during failover.
  - 在 us-west-2 区域中启用 Auto Scaling 以在故障转移期间自动调整容量。
- **C.** Create a CloudWatch alarm to monitor throttling errors in the us-west-2 region.
  - 创建 CloudWatch 警报以监控 us-west-2 区域中的限制错误。
- **D.** Pre-provision all resources in the us-west-2 region with the same capacity as the us-east-1 region.
  - 预先配置 us-west-2 区域中的所有资源，使其容量与 us-east-1 区域相同。

**正确答案 / Answer: `A`**

Service quotas are limits set by AWS that control the maximum amount of resources a service can use. In a disaster recovery scenario, if the standby environment takes over the workload, it may exceed the default service quotas of the region, leading to throttling. Requesting a service quota increase in the standby region ensures sufficient capacity to handle the workload during failover.

服务配额是 AWS 设置的限制，用于控制服务可以使用的最大资源量。在容灾场景下，如果备环境接管工作负载，可能会超出该区域默认的服务配额，从而导致限流。请求增加备用区域中的服务配额可确保有足够的容量来处理故障转移期间的工作负载。

---

## Question 210  `Select 3`

**EN** You are designing a disaster recovery (DR) architecture for a business-critical application. The application is deployed in a primary AWS Region and has a standby environment in a secondary Region. During DR drills, you notice that the standby environment fails to scale appropriately because of service quota limits in the secondary Region. How can you ensure the standby environment can handle production workloads during a failover while adhering to AWS best practices?

**中** 您正在为关键业务应用程序设计灾难恢复 (DR) 架构。该应用程序部署在主要 AWS 区域中，并在辅助区域中具有备用环境。在灾难恢复演练期间，您注意到由于次要区域中的服务配额限制，备用环境无法适当扩展。如何确保备用环境能够在故障转移期间处理生产工作负载，同时遵守 AWS 最佳实践？

- **A.** Request quota increases in the secondary Region for the required services and resources to match the primary Region's quotas.
  - 请求增加辅助区域中所需服务和资源的配额，以匹配主要区域的配额。
- **B.** Use AWS Service Quotas to monitor and adjust quotas in the secondary Region proactively.
  - 使用 AWS Service Quotas 主动监控和调整次要区域中的配额。
- **C.** Configure Auto Scaling groups in the standby environment to automatically request quota increases during failover.
  - 在备用环境中配置 Auto Scaling 组以在故障转移期间自动请求增加配额。
- **D.** Deploy service resources in the secondary Region with quotas already scaled to match expected failover demand.
  - 在次要区域中部署服务资源，并已调整配额以满足预期的故障转移需求。
- **E.** Enable AWS Trusted Advisor to automatically increase service quotas in the secondary Region during failover.
  - 启用 AWS Trusted Advisor 在故障转移期间自动增加辅助区域中的服务配额。

**正确答案 / Answer: `A, B, D`**

To ensure the standby environment can handle production workloads during failover, you must proactively manage service quotas in the secondary Region. This includes requesting quota increases, monitoring quotas using AWS Service Quotas, and pre-deploying resources with sufficient quotas. Auto Scaling groups and AWS Trusted Advisor cannot automatically adjust quotas, so they are not viable options in this scenario.

为了确保备用环境可以在故障转移期间处理生产工作负载，您必须主动管理辅助区域中的服务配额。这包括请求增加配额、使用 AWS Service Quotas 监控配额以及预部署具有足够配额的资源。 Auto Scaling 组和 AWS Trusted Advisor 无法自动调整配额，因此在这种情况下它们不是可行的选择。

---

## Question 211  `Single answer`

**EN** A company is designing a solution to store critical financial data that must be highly durable, replicated across multiple facilities for disaster recovery, and accessible with low latency. Additionally, the company needs to ensure that the storage solution adheres to compliance requirements for data integrity audits. Which AWS storage service should they choose?

**中** 一家公司正在设计一种解决方案来存储关键财务数据，这些数据必须高度耐用、跨多个设施复制以进行灾难恢复，并且可低延迟访问。此外，公司需要确保存储解决方案符合数据完整性审计的合规性要求。他们应该选择哪种 AWS 存储服务？

- **A.** Amazon S3 with Cross-Region Replication (CRR)
  - 具有跨区域复制 (CRR) 的 Amazon S3
- **B.** Amazon EFS (Elastic File System)
  - Amazon EFS（弹性文件系统）
- **C.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器
- **D.** Amazon S3 Glacier Deep Archive
  - Amazon S3 Glacier 深度归档

**正确答案 / Answer: `A`**

Amazon S3 with Cross-Region Replication (CRR) is the best choice for storing critical financial data because it provides unmatched durability (11 9s), the ability to replicate data across regions for disaster recovery, and compliance features like versioning and audit logging. Other options, such as EFS and FSx, do not meet all the requirements, while S3 Glacier Deep Archive is focused on long-term archival storage rather than low-latency access.

具有跨区域复制 (CRR) 功能的 Amazon S3 是存储关键财务数据的最佳选择，因为它提供无与伦比的耐用性 (11 个 9)、跨区域复制数据以进行灾难恢复的能力，以及版本控制和审核日志记录等合规性功能。其他选项，例如 EFS 和 FSx，并不能满足所有要求，而 S3 Glacier Deep Archive 则专注于长期归档存储而不是低延迟访问。

---

## Question 212  `Single answer`

**EN** A company is designing a new web application that will allow users to upload and manage photos. The application requires a storage solution that provides high durability, supports automatic replication across multiple Availability Zones, and offers lifecycle management to transition objects to lower-cost storage tiers. Which AWS storage service should the company choose?

**中** 一家公司正在设计一款新的网络应用程序，允许用户上传和管理照片。该应用程序需要一个存储解决方案，提供高耐用性，支持跨多个可用区的自动复制，并提供生命周期管理以将对象转换到成本较低的存储层。公司应该选择哪种 AWS 存储服务？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EBS
  - Amazon EBS
- **C.** Amazon EFS
  - Amazon EFS
- **D.** AWS Storage Gateway
  - AWS Storage Gateway

**正确答案 / Answer: `A`**

Amazon S3 is the best choice for this scenario because it provides highly durable, multi-AZ object storage with built-in lifecycle management capabilities. These features make it ideal for applications requiring reliable storage and cost optimization. Other options, such as Amazon EBS and Amazon EFS, are better suited for specific use cases like block storage or file storage, but they do not meet the requirements for object storage with multi-AZ durability and lifecycle management.

Amazon S3 是该场景的最佳选择，因为它提供高度耐用的多可用区对象存储，并具有内置生命周期管理功能。这些功能使其成为需要可靠存储和成本优化的应用的理想选择。其他选项（例如 Amazon EBS 和 Amazon EFS）更适合块存储或文件存储等特定用例，但它们不能满足具有多可用区持久性和生命周期管理的对象存储的要求。

---

## Question 213  `Single answer`

**EN** A company needs to store critical financial data and requires a storage solution that provides high durability, automatic replication across multiple Availability Zones (AZs), and supports encryption at rest. Which Amazon S3 storage class is the most appropriate for this use case?

**中** 公司需要存储关键的财务数据，并且需要一种存储解决方案，该解决方案能够提供高耐用性、跨多个可用区 (AZ) 的自动复制，并支持静态加密。哪种 Amazon S3 存储类最适合此用例？

- **A.** Amazon S3 Standard
  - Amazon S3 标准
- **B.** Amazon S3 Intelligent-Tiering
  - Amazon S3 智能分层
- **C.** Amazon S3 Glacier
  - Amazon S3 Glacier
- **D.** Amazon S3 One Zone-IA
  - Amazon S3 一区-IA

**正确答案 / Answer: `A`**

Amazon S3 Standard is the most suitable option for critical financial data storage because it provides high durability (11 nines), automatic replication across multiple Availability Zones, and encryption at rest, fulfilling all the requirements specified in the scenario.

Amazon S3 标准版是关键金融数据存储的最合适选择，因为它提供高持久性（11 个 9）、跨多个可用区的自动复制以及静态加密，满足场景中指定的所有要求。

---

## Question 214  `Single answer`

**EN** A company needs a durable storage solution to store critical business data. The data must be replicated across multiple Availability Zones (AZs) to ensure high availability and durability. Which AWS storage service should the company choose?

**中** 公司需要持久的存储解决方案来存储关键业务数据。数据必须跨多个可用区 (AZ) 复制，以确保高可用性和持久性。公司应该选择哪种 AWS 存储服务？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EBS
  - Amazon EBS
- **C.** Amazon EFS
  - Amazon EFS
- **D.** Instance Store
  - 实例存储

**正确答案 / Answer: `A`**

Amazon S3 is the best choice for this scenario because it is designed for high durability and availability. It automatically replicates data across multiple Availability Zones, ensuring that critical business data remains safe and accessible even in the event of an AZ failure. The other options either lack cross-AZ replication or durability guarantees, making them unsuitable for the given requirements.

Amazon S3 是这种场景的最佳选择，因为它专为高耐用性和可用性而设计。它自动跨多个可用区复制数据，确保即使在可用区发生故障时关键业务数据仍然安全且可访问。其他选项要么缺乏跨可用区复制，要么缺乏持久性保证，使得它们不适合给定的要求。

---

## Question 215  `Single answer`

**EN** A company is running a microservices-based application on Amazon ECS using AWS Fargate. The application has multiple services interacting with each other, and the development team is facing difficulties identifying bottlenecks and debugging issues in the application workflow. Which solution will provide end-to-end visibility into the requests as they flow through the application?

**中** 一家公司正在使用 AWS Fargate 在 Amazon ECS 上运行基于微服务的应用程序。该应用程序具有多个相互交互的服务，开发团队在识别应用程序工作流程中的瓶颈和调试问题方面面临着困难。哪种解决方案将在请求流经应用程序时提供端到端的可见性？

- **A.** Enable AWS X-Ray tracing for the ECS tasks and instrument the application code to send trace data to AWS X-Ray.
  - 为 ECS 任务启用 AWS X-Ray 跟踪并检测应用程序代码以将跟踪数据发送到 AWS X-Ray。
- **B.** Use Amazon CloudWatch Logs to collect and analyze application logs for each ECS service.
  - 使用 Amazon CloudWatch 日志收集和分析每个 ECS 服务的应用程序日志。
- **C.** Enable VPC Flow Logs to monitor network traffic between microservices.
  - 启用 VPC 流日志以监控微服务之间的网络流量。
- **D.** Use AWS CloudTrail to track API calls between the ECS services for request tracing.
  - 使用 AWS CloudTrail 跟踪 ECS 服务之间的 API 调用以进行请求跟踪。

**正确答案 / Answer: `A`**

AWS X-Ray is the correct choice because it is specifically designed to provide distributed tracing for applications. X-Ray enables developers to trace requests as they travel through the application and build a detailed service map to debug issues, identify bottlenecks, and optimize performance. Other options like CloudWatch Logs, VPC Flow Logs, and CloudTrail are useful for logging and monitoring but do not offer the same level of visibility into request flows as X-Ray does.

AWS X-Ray 是正确的选择，因为它专门设计用于为应用程序提供分布式跟踪。 X-Ray 使开发人员能够在请求穿过应用程序时跟踪请求，并构建详细的服务图来调试问题、识别瓶颈并优化性能。 CloudWatch Logs、VPC Flow Logs 和 CloudTrail 等其他选项对于日志记录和监控非常有用，但无法提供与 X-Ray 相同级别的请求流可见性。

---

## Question 216  `Single answer`

**EN** A company has a microservices-based application running on Amazon ECS with multiple services communicating via REST APIs. The development team is experiencing difficulties debugging latency issues and understanding the dependencies between services. Which service should you recommend to gain better visibility into the application's performance and identify bottlenecks?

**中** 一家公司有一个在 Amazon ECS 上运行的基于微服务的应用程序，其中多个服务通过 REST API 进行通信。开发团队在调试延迟问题和理解服务之间的依赖关系方面遇到了困难。您应该推荐哪种服务来更好地了解应用程序的性能并识别瓶颈？

- **A.** Amazon CloudWatch Logs
  - Amazon CloudWatch 日志
- **B.** AWS X-Ray
  - AWS X 射线
- **C.** Amazon CloudTrail
  - 亚马逊云追踪
- **D.** AWS Trusted Advisor
  - AWS Trusted Advisor

**正确答案 / Answer: `B`**

AWS X-Ray is specifically designed to provide end-to-end tracing for applications, enabling developers to visualize service dependencies, trace requests, and identify bottlenecks in distributed systems like microservices. This makes it the ideal choice for debugging latency issues and improving workload visibility in the given scenario.

AWS X-Ray 专门设计用于为应用程序提供端到端跟踪，使开发人员能够可视化服务依赖关系、跟踪请求并识别微服务等分布式系统中的瓶颈。这使其成为调试延迟问题和提高给定场景中工作负载可见性的理想选择。

---

## Question 217  `Single answer`

**EN** You are designing a microservices-based application running on Amazon ECS. The application is experiencing intermittent latency issues when making API calls between services. You need to identify the root cause of the latency and visualize the flow of requests across the application. Which solution should you implement?

**中** 您正在设计一个在 Amazon ECS 上运行的基于微服务的应用程序。在服务之间进行 API 调用时，应用程序遇到间歇性延迟问题。您需要确定延迟的根本原因并可视化整个应用程序中的请求流。您应该实施哪种解决方案？

- **A.** Enable AWS X-Ray tracing in the ECS task definitions and use the X-Ray console to analyze traces.
  - 在 ECS 任务定义中启用 AWS X-Ray 跟踪并使用 X-Ray 控制台分析跟踪。
- **B.** Use Amazon CloudWatch Logs Insights to analyze application logs for latency issues.
  - 使用 Amazon CloudWatch Logs Insights 分析应用程序日志中的延迟问题。
- **C.** Enable VPC Flow Logs to monitor network traffic patterns between ECS services.
  - 启用 VPC 流日志以监控 ECS 服务之间的网络流量模式。
- **D.** Configure an Application Load Balancer (ALB) to log request and response times using ALB access logs.
  - 配置 Application Load Balancer (ALB) 以使用 ALB 访问日志记录请求和响应时间。

**正确答案 / Answer: `A`**

To diagnose latency in a microservices-based application, AWS X-Ray is the ideal tool as it provides end-to-end request tracing and allows you to visualize the flow of requests across services. This is particularly important for identifying bottlenecks or performance issues in distributed applications, which cannot be achieved using logs or network-level monitoring alone.

要诊断基于微服务的应用程序中的延迟，AWS X-Ray 是理想的工具，因为它提供端到端请求跟踪，并允许您可视化跨服务的请求流。这对于识别分布式应用程序中的瓶颈或性能问题尤其重要，而仅使用日志或网络级监控无法实现这一点。

---

## Question 218  `Single answer`

**EN** A company has a microservices-based application running on Amazon ECS, with multiple services communicating with each other over HTTP. The development team is experiencing difficulty in tracing requests as they move across different services to identify bottlenecks and performance issues. Which solution will provide end-to-end visibility into the application requests?

**中** 一家公司有一个基于微服务的应用程序在 Amazon ECS 上运行，多个服务通过 HTTP 相互通信。当开发团队在不同的服务之间移动请求以识别瓶颈和性能问题时，他们在跟踪请求方面遇到了困难。哪种解决方案将提供应用程序请求的端到端可见性？

- **A.** Enable AWS X-Ray tracing on each ECS service and ensure the application code is instrumented with the X-Ray SDK.
  - 在每个 ECS 服务上启用 AWS X-Ray 跟踪，并确保应用程序代码使用 X-Ray SDK 进行检测。
- **B.** Use Amazon CloudWatch Logs to automatically trace requests across all ECS services without modifying the application code.
  - 使用 Amazon CloudWatch 日志自动跟踪所有 ECS 服务的请求，而无需修改应用程序代码。
- **C.** Deploy an Application Load Balancer (ALB) and enable logging to trace requests between ECS services.
  - 部署 Application Load Balancer (ALB) 并启用日志记录以跟踪 ECS 服务之间的请求。
- **D.** Enable AWS Config to monitor the configuration changes of ECS services and trace application requests.
  - 启用 AWS Config 监控 ECS 服务的配置变化并跟踪应用程序请求。

**正确答案 / Answer: `A`**

AWS X-Ray is designed specifically for tracing end-to-end requests in distributed systems like microservices. By enabling X-Ray on ECS services and instrumenting application code with the X-Ray SDK, the development team can collect detailed performance data, trace requests, and diagnose bottlenecks across multiple services. Other services like CloudWatch Logs and ALB logging provide monitoring and logging capabilities but do not offer the same level of visibility as X-Ray for tracing requests end-to-end.

AWS X-Ray 专为跟踪微服务等分布式系统中的端到端请求而设计。通过在 ECS 服务上启用 X-Ray 并使用 X-Ray SDK 检测应用程序代码，开发团队可以跨多个服务收集详细的性能数据、跟踪请求并诊断瓶颈。 CloudWatch Logs 和 ALB 日志记录等其他服务提供监控和日志记录功能，但无法提供与 X-Ray 相同级别的端到端跟踪请求可见性。

---

## Question 219  `Select 3`

**EN** A company runs a video streaming platform and is experiencing performance issues during peak traffic hours. Their application is running on Amazon EC2 instances behind an Application Load Balancer (ALB). Users are reporting latency and buffering issues. Upon investigation, you find that the EC2 instances are running at maximum capacity during peak times. How can you optimize the architecture to handle the high traffic while minimizing costs?

**中** 一家公司运营一个视频流平台，在流量高峰时段遇到性能问题。他们的应用程序在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行。用户报告延迟和缓冲问题。经过调查，您发现 EC2 实例在高峰时段以最大容量运行。如何优化架构以处理高流量，同时最大限度地降低成本？

- **A.** Enable Auto Scaling for the EC2 instances behind the ALB to dynamically adjust capacity based on demand.
  - 为 ALB 后面的 EC2 实例启用 Auto Scaling，以根据需求动态调整容量。
- **B.** Use Amazon ElastiCache to cache frequently accessed data and reduce load on the EC2 instances.
  - 使用 Amazon ElastiCache 缓存经常访问的数据并减少 EC2 实例的负载。
- **C.** Switch from an Application Load Balancer to a Network Load Balancer for lower latency.
  - 从 Application Load Balancer 切换到 Network Load Balancer 以降低延迟。
- **D.** Migrate the video streaming application to AWS Lambda to handle traffic spikes.
  - 将视频流应用程序迁移到 AWS Lambda 以处理流量峰值。
- **E.** Use Amazon CloudFront as a Content Delivery Network (CDN) to cache and deliver video content closer to users.
  - 使用 Amazon CloudFront 作为内容分发网络 (CDN) 来缓存视频内容并将其分发到更靠近用户的位置。

**正确答案 / Answer: `A, B, E`**

To design a high-performing architecture for a video streaming platform, it's essential to handle traffic spikes efficiently while minimizing costs. Auto Scaling ensures the backend can scale dynamically to meet demand. Amazon ElastiCache reduces backend load by caching frequently accessed data. Amazon CloudFront improves user experience by caching and delivering content from edge locations, reducing latency and offloading traffic from the origin servers. Switching to a Network Load Balancer or using AWS Lambda are unsuitable for this use case due to the specific requirements of video streaming applications.

要为视频流平台设计高性能架构，必须有效处理流量峰值，同时最大限度地降低成本。自动缩放确保后端可以动态扩展以满足需求。 Amazon ElastiCache 通过缓存经常访问的数据来减少后端负载。 Amazon CloudFront 通过缓存和传输边缘位置的内容、减少延迟并减轻源服务器的流量来改善用户体验。由于视频流应用的特定要求，切换到 Network Load Balancer 或使用 AWS Lambda 不适合此用例。

---

## Question 220  `Select 2`

**EN** A gaming company has deployed a multiplayer online game. The game servers are hosted on Amazon EC2 instances behind an Application Load Balancer (ALB) in a single AWS Region. Players are reporting increased latency during peak traffic hours. Upon investigation, the company identifies that the ALB is experiencing high request latencies, and some EC2 instances are being overwhelmed with traffic. How should the company redesign the architecture to improve performance and handle peak traffic effectively?

**中** 一家游戏公司部署了一款多人在线游戏。游戏服务器托管在单个 AWS 区域中 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上。玩家报告在流量高峰时段延迟增加。经过调查，该公司发现 ALB 遇到了很高的请求延迟，并且一些 EC2 实例流量不堪重负。公司应该如何重新设计架构来提高性能并有效处理高峰流量？

- **A.** Enable Auto Scaling for the EC2 instances to dynamically adjust the number of instances based on traffic demand.
  - 为 EC2 实例启用 Auto Scaling，以根据流量需求动态调整实例数量。
- **B.** Deploy an Amazon CloudFront distribution in front of the Application Load Balancer to cache and serve frequently accessed content.
  - 在 Application Load Balancer 前面部署 Amazon CloudFront 发行版，以缓存和提供经常访问的内容。
- **C.** Use a Network Load Balancer (NLB) instead of the Application Load Balancer to reduce latency.
  - 使用 Network Load Balancer (NLB) 代替 Application Load Balancer 以减少延迟。
- **D.** Configure the Application Load Balancer to distribute traffic across multiple AWS Regions using cross-region load balancing.
  - 配置 Application Load Balancer 以使用跨区域负载平衡在多个 AWS 区域之间分配流量。
- **E.** Increase the size of the EC2 instances to handle more traffic per instance.
  - 增加 EC2 实例的大小以处理每个实例的更多流量。

**正确答案 / Answer: `A, B`**

To design a high-performing architecture for the gaming application, enabling Auto Scaling ensures that the EC2 instances can handle fluctuating traffic dynamically. Additionally, deploying Amazon CloudFront helps offload static content delivery from the ALB, improving overall performance and latency. Other options either do not fit the requirements or provide less scalable solutions.

要为游戏应用程序设计高性能架构，启用 Auto Scaling 可确保 EC2 实例可以动态处理波动的流量。此外，部署 Amazon CloudFront 有助于卸载 ALB 的静态内容交付，从而提高整体性能和延迟。其他选项要么不符合要求，要么提供可扩展性较差的解决方案。

---

## Question 221  `Select 2`

**EN** A company is designing a high-performing architecture for a real-time analytics application that ingests and processes millions of events per second from IoT devices. The application must ensure low-latency data processing and provide near real-time insights to users. Which combination of AWS services should the company use to achieve these requirements?

**中** 一家公司正在为实时分析应用程序设计高性能架构，该应用程序每秒从物联网设备中摄取和处理数百万个事件。应用程序必须确保低延迟数据处理并向用户提供近乎实时的见解。公司应该使用哪种 AWS 服务组合来实现这些要求？

- **A.** Amazon Kinesis Data Streams for data ingestion and Amazon Kinesis Data Analytics for real-time processing
  - 用于数据摄取的 Amazon Kinesis 数据流和用于实时处理的 Amazon Kinesis 数据分析
- **B.** Amazon SQS for data ingestion and AWS Lambda for processing
  - Amazon SQS 用于数据摄取，AWS Lambda 用于处理
- **C.** Amazon DynamoDB for both data ingestion and real-time processing
  - Amazon DynamoDB 用于数据摄取和实时处理
- **D.** Amazon Kinesis Data Firehose for data ingestion and Amazon Redshift for real-time processing
  - 用于数据摄取的 Amazon Kinesis Data Firehose 和用于实时处理的 Amazon Redshift
- **E.** Amazon Kinesis Data Streams for data ingestion and AWS Lambda for processing
  - 用于数据摄取的 Amazon Kinesis 数据流和用于处理的 AWS Lambda

**正确答案 / Answer: `A, E`**

For a real-time analytics application that processes millions of events per second, Amazon Kinesis Data Streams is an ideal service for high-throughput, low-latency data ingestion. Amazon Kinesis Data Analytics can process this data in real-time, offering built-in analytics capabilities. Alternatively, AWS Lambda can be used alongside Kinesis Data Streams to process and transform streaming data in near real-time. Other services like SQS, DynamoDB, Firehose, and Redshift are not designed to handle this specific real-time, high-throughput use case effectively.

对于每秒处理数百万个事件的实时分析应用程序，Amazon Kinesis Data Streams 是高吞吐量、低延迟数据摄取的理想服务。 Amazon Kinesis 数据分析可以实时处理这些数据，提供内置分析功能。或者，AWS Lambda 可以与 Kinesis Data Streams 一起使用，以近乎实时的方式处理和转换流数据。 SQS、DynamoDB、Firehose 和 Redshift 等其他服务并非旨在有效处理这种特定的实时、高吞吐量用例。

---

## Question 222  `Select 2`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application has experienced slow response times during traffic spikes. After analyzing the workload, you discover that the EC2 instances are under heavy CPU utilization during these spikes. How can you design a more high-performing architecture to handle traffic spikes effectively?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。在流量高峰期间，该应用程序的响应时间很慢。分析工作负载后，您发现 EC2 实例在这些峰值期间 CPU 使用率很高。如何设计性能更高的架构来有效处理流量峰值？

- **A.** Configure Auto Scaling for the EC2 instances to dynamically scale based on CPU utilization metrics.
  - 为 EC2 实例配置 Auto Scaling，以根据 CPU 利用率指标动态扩展。
- **B.** Replace the Application Load Balancer with a Network Load Balancer to decrease latency.
  - 将 Application Load Balancer 替换为 Network Load Balancer 以减少延迟。
- **C.** Use Amazon ElastiCache to cache frequently accessed data to reduce load on the EC2 instances.
  - 使用 Amazon ElastiCache 缓存经常访问的数据以减少 EC2 实例的负载。
- **D.** Migrate the application to Amazon S3 for static website hosting.
  - 将应用程序迁移到 Amazon S3 以进行静态网站托管。
- **E.** Enable Elastic Load Balancing cross-zone load balancing to distribute traffic evenly across instances.
  - 启用 Elastic Load Balancing 跨区域负载均衡以在实例之间均匀分配流量。

**正确答案 / Answer: `A, C`**

To handle traffic spikes effectively and improve performance, the architecture should include Auto Scaling for dynamic scalability and ElastiCache for offloading frequently accessed data from the EC2 instances. These solutions reduce the computational burden during traffic spikes, ensuring a more responsive and high-performing application.

为了有效处理流量峰值并提高性能，该架构应包括用于动态可扩展性的 Auto Scaling 和用于从 EC2 实例卸载频繁访问的数据的 ElastiCache。这些解决方案减少了流量高峰期间的计算负担，确保应用程序响应更快且性能更高。

---

## Question 223  `Single answer`

**EN** A data analytics company processes petabytes of log data daily and requires a scalable storage solution for their data lake. They need a cost-effective service that can handle large-scale storage, provide high availability, and integrate with their analytics tools for optimized query performance. Which AWS storage solution is the most appropriate for their requirements?

**中** 一家数据分析公司每天处理 PB 级的日志数据，需要为其数据湖提供可扩展的存储解决方案。他们需要一种经济高效的服务，能够处理大规模存储、提供高可用性并与分析工具集成以优化查询性能。哪种 AWS 存储解决方案最适合他们的要求？

- **A.** Amazon S3 with S3 Standard storage class
  - Amazon S3 具有 S3 标准存储类别
- **B.** Amazon EFS (Elastic File System)
  - Amazon EFS（弹性文件系统）
- **C.** Amazon RDS with a General Purpose SSD storage
  - 带通用 SSD 存储的 Amazon RDS
- **D.** Amazon DynamoDB
  - Amazon DynamoDB

**正确答案 / Answer: `A`**

Amazon S3 with S3 Standard is the most suitable option for building a data lake due to its scalability, durability, and cost-effectiveness. It supports massive amounts of unstructured data and integrates well with analytics tools, addressing the company's need for high availability and optimized query performance. Other options like EFS, RDS, and DynamoDB are designed for different use cases and do not align with the petabyte-scale data lake requirement.

由于其可扩展性、耐用性和成本效益，采用 S3 标准的 Amazon S3 是构建数据湖的最合适选择。它支持海量非结构化数据，并与分析工具良好集成，满足公司对高可用性和优化查询性能的需求。 EFS、RDS 和 DynamoDB 等其他选项是针对不同的用例而设计的，并不符合 PB 级数据湖的要求。

---

## Question 224  `Single answer`

**EN** A company is building a data analytics platform to process and store large volumes of time-series data from IoT devices. The platform must ensure high throughput for frequent writes and provide scalable storage that can accommodate the growing dataset over time. Which storage solution should the company use?

**中** 一家公司正在构建一个数据分析平台来处理和存储来自物联网设备的大量时间序列数据。该平台必须确保频繁写入的高吞吐量，并提供可扩展的存储，以适应随着时间的推移不断增长的数据集。公司应该使用哪种存储解决方案？

- **A.** Amazon S3 with S3 Standard storage class
  - Amazon S3 具有 S3 标准存储类别
- **B.** Amazon RDS with a MySQL database
  - Amazon RDS 带有 MySQL 数据库
- **C.** Amazon DynamoDB with on-demand capacity mode
  - Amazon DynamoDB 按需容量模式
- **D.** Amazon EFS with General Purpose performance mode
  - Amazon EFS 具有通用性能模式

**正确答案 / Answer: `C`**

The best solution for storing and processing large volumes of time-series data with high throughput and scalability requirements is Amazon DynamoDB. It is a fully managed, serverless NoSQL database designed to handle frequent writes and automatically scale to accommodate growing datasets. The on-demand capacity mode further simplifies scaling for unpredictable workloads, making it an ideal fit for this scenario.

存储和处理具有高吞吐量和可扩展性要求的大量时间序列数据的最佳解决方案是 Amazon DynamoDB。它是一个完全托管的无服务器 NoSQL 数据库，旨在处理频繁写入并自动扩展以适应不断增长的数据集。按需容量模式进一步简化了不可预测工作负载的扩展，使其非常适合这种场景。

---

## Question 225  `Single answer`

**EN** A media streaming company is building a video-on-demand platform that requires high throughput and low latency performance for storing and serving video files. The solution needs to scale automatically to handle unpredictable traffic patterns without manual intervention. Which AWS storage solution is best suited for this use case?

**中** 一家媒体流公司正在构建一个视频点播平台，该平台需要高吞吐量和低延迟性能来存储和提供视频文件。该解决方案需要自动扩展以处理不可预测的流量模式，而无需人工干预。哪种 AWS 存储解决方案最适合此用例？

- **A.** Amazon S3 with S3 Transfer Acceleration
  - Amazon S3 具有 S3 传输加速
- **B.** Amazon EBS Provisioned IOPS SSD (io2)
  - Amazon EBS 预配置 IOPS SSD (io2)
- **C.** Amazon EFS
  - Amazon EFS
- **D.** Amazon S3 with Intelligent-Tiering
  - 带智能分层的 Amazon S3

**正确答案 / Answer: `A`**

Amazon S3 with S3 Transfer Acceleration is the most appropriate solution for a video-on-demand platform because it offers the scalability, high throughput, and low latency needed for streaming video content to a global audience. S3 Transfer Acceleration optimizes data transfer speeds for users in different geographic locations, ensuring a smooth streaming experience.

具有 S3 传输加速功能的 Amazon S3 是视频点播平台最合适的解决方案，因为它提供了向全球观众流式传输视频内容所需的可扩展性、高吞吐量和低延迟。 S3 传输加速为不同地理位置的用户优化数据传输速度，确保流畅的流媒体体验。

---

## Question 226  `Single answer`

**EN** A media streaming company needs to store large volumes of video files that are accessed frequently by global users. The solution must ensure high performance, low latency, and scalability. Which storage solution should they choose?

**中** 媒体流公司需要存储全球用户经常访问的大量视频文件。该解决方案必须确保高性能、低延迟和可扩展性。他们应该选择哪种存储解决方案？

- **A.** Amazon S3 with Transfer Acceleration
  - Amazon S3 带传输加速
- **B.** Amazon Elastic File System (EFS)
  - 亚马逊弹性文件系统 (EFS)
- **C.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器
- **D.** Amazon S3 Glacier
  - Amazon S3 Glacier

**正确答案 / Answer: `A`**

The most suitable storage solution for frequently accessed video files with high performance and global scalability requirements is Amazon S3 with Transfer Acceleration. It leverages Amazon CloudFront's edge locations to deliver low-latency access to users worldwide, making it ideal for media streaming use cases. Other options like EFS, FSx, and S3 Glacier are not designed for this specific scenario.

对于经常访问且具有高性能和全局可扩展性要求的视频文件来说，最合适的存储解决方案是具有传输加速功能的 Amazon S3。它利用 Amazon CloudFront 的边缘位置为全球用户提供低延迟访问，使其成为媒体流用例的理想选择。 EFS、FSx 和 S3 Glacier 等其他选项并非针对此特定场景而设计。

---

## Question 227  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores session data on the instance's local storage. The company wants to ensure that users do not lose their session data if an EC2 instance fails or is replaced. What is the BEST solution to address this requirement?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。应用程序将会话数据存储在实例的本地存储上。该公司希望确保在 EC2 实例发生故障或被替换时用户不会丢失会话数据。满足此要求的最佳解决方案是什么？

- **A.** Store session data in Amazon ElastiCache for Redis.
  - 将会话数据存储在 Redis 的 Amazon ElastiCache 中。
- **B.** Enable sticky sessions (session affinity) on the Application Load Balancer.
  - 在 Application Load Balancer 上启用粘性会话（会话亲和性）。
- **C.** Use Amazon S3 to store session data.
  - 使用 Amazon S3 来存储会话数据。
- **D.** Store session data in an Amazon RDS database.
  - 将会话数据存储在 Amazon RDS 数据库中。

**正确答案 / Answer: `A`**

The best solution is to store session data in Amazon ElastiCache for Redis. This service provides low-latency, in-memory data storage, making it ideal for session management. It ensures that session data is not tied to a specific EC2 instance, addressing the issue of session loss if an instance fails or is replaced. While other options, such as sticky sessions or Amazon RDS, may partially address the requirement, they do not provide the same level of scalability, performance, and fault tolerance as ElastiCache.

最好的解决方案是将会话数据存储在 Redis 的 Amazon ElastiCache 中。该服务提供低延迟的内存数据存储，使其成为会话管理的理想选择。它确保会话数据不绑定到特定的 EC2 实例，从而解决实例失败或被替换时会话丢失的问题。虽然其他选项（例如粘性会话或 Amazon RDS）可以部分满足要求，但它们无法提供与 ElastiCache 相同级别的可扩展性、性能和容错能力。

---

## Question 228  `Single answer`

**EN** A company is running an e-commerce platform on AWS. The application is hosted in an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB). The database layer is managed using Amazon RDS for PostgreSQL. During peak traffic, the database performance degrades, and read-heavy queries start to slow down the application. What is the MOST cost-effective solution to improve database performance and handle the increased workload?

**中** 一家公司正在 AWS 上运行电子商务平台。该应用程序托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例的 Auto Scaling 组中。数据库层使用 Amazon RDS for PostgreSQL 进行管理。在高峰流量期间，数据库性能会下降，并且大量读取的查询开始减慢应用程序的速度。提高数据库性能和处理增加的工作负载的最具成本效益的解决方案是什么？

- **A.** Enable Amazon RDS Multi-AZ deployment for the database to improve read performance.
  - 为数据库启用 Amazon RDS 多可用区部署，以提高读取性能。
- **B.** Configure Amazon RDS Read Replicas to offload read queries from the primary database.
  - 配置 Amazon RDS 只读副本以卸载主数据库的读取查询。
- **C.** Increase the instance size of the Amazon RDS database to handle more queries.
  - 增加 Amazon RDS 数据库的实例大小以处理更多查询。
- **D.** Migrate the database to Amazon Aurora for better scalability and read performance.
  - 将数据库迁移到 Amazon Aurora 以获得更好的可扩展性和读取性能。

**正确答案 / Answer: `B`**

The most cost-effective solution to improve read-heavy database performance is to use Amazon RDS Read Replicas. Read Replicas allow you to offload read queries from the primary database, reducing the load on the primary instance and improving overall performance. Other options, like Multi-AZ or increasing instance size, do not specifically target read performance or may involve higher costs.

提高读取密集型数据库性能的最具成本效益的解决方案是使用 Amazon RDS 只读副本。只读副本允许您从主数据库卸载读取查询，从而减少主实例上的负载并提高整体性能。其他选项（例如多可用区或增加实例大小）并不专门针对读取性能或可能涉及更高的成本。

---

## Question 229  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores uploaded user files in an Amazon S3 bucket. Recently, the company noticed an increase in unauthorized attempts to access the S3 bucket directly from the internet. As a solutions architect, how can you secure the S3 bucket to allow access only from the web application?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。应用程序将上传的用户文件存储在 Amazon S3 存储桶中。最近，该公司注意到直接从互联网访问 S3 存储桶的未经授权尝试有所增加。作为解决方案架构师，如何保护 S3 存储桶以仅允许从 Web 应用程序进行访问？

- **A.** Create a VPC endpoint for Amazon S3 and configure the bucket to allow access only from the VPC.
  - 为 Amazon S3 创建 VPC 终端节点并将存储桶配置为仅允许从 VPC 进行访问。
- **B.** Restrict access to the S3 bucket by creating an S3 bucket policy that allows access only from the ALB's public IP address.
  - 通过创建仅允许从 ALB 的公共 IP 地址进行访问的 S3 存储桶策略来限制对 S3 存储桶的访问。
- **C.** Create an S3 bucket policy that allows access only from the ALB using a condition key for the ALB's AWS account ID.
  - 创建一个 S3 存储桶策略，仅允许使用 ALB 的 AWS 账户 ID 的条件键从 ALB 进行访问。
- **D.** Add a bucket policy that allows access only from the ALB using a condition that requires the aws:Referer header to match the application's domain.
  - 添加一个存储桶策略，该策略仅允许从 ALB 进行访问，使用的条件要求 aws:Referer 标头与应用程序的域匹配。

**正确答案 / Answer: `C`**

To secure an S3 bucket and allow access only from an ALB, you should use a bucket policy that restricts access based on the ALB's AWS account ID. This approach leverages AWS's native security mechanisms to ensure that only requests originating from the authorized ALB are allowed. Other methods, such as using a VPC endpoint or IP-based policies, are either unnecessary or unsuitable in this context.

要保护 S3 存储桶并仅允许从 ALB 进行访问，您应使用基于 ALB 的 AWS 账户 ID 限制访问的存储桶策略。此方法利用 AWS 的本机安全机制来确保仅允许来自授权 ALB 的请求。其他方法（例如使用 VPC 终端节点或基于 IP 的策略）在这种情况下要么是不必要的，要么是不适合的。

---

## Question 230  `Single answer`

**EN** A company is designing a web application that will be deployed on Amazon EC2 instances behind an Application Load Balancer (ALB). The application processes user-uploaded images and stores them in Amazon S3. The company wants to optimize the performance of delivering these images to users while minimizing costs. Which solution should the company implement?

**中** 一家公司正在设计一个 Web 应用程序，该应用程序将部署在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上。该应用程序处理用户上传的图像并将其存储在 Amazon S3 中。该公司希望优化向用户交付这些图像的性能，同时最大限度地降低成本。公司应该实施哪种解决方案？

- **A.** Use Amazon S3 Transfer Acceleration to improve image delivery performance.
  - 使用 Amazon S3 传输加速来提高图像传输性能。
- **B.** Store the images in Amazon S3 and configure an Amazon CloudFront distribution to cache the images.
  - 将图像存储在 Amazon S3 中并配置 Amazon CloudFront 分发来缓存图像。
- **C.** Serve the images directly from the Amazon EC2 instances using the ALB.
  - 使用 ALB 直接从 Amazon EC2 实例提供图像。
- **D.** Store the images in Amazon Elastic Block Store (EBS) volumes attached to the EC2 instances.
  - 将映像存储在附加到 EC2 实例的 Amazon Elastic Block Store (EBS) 卷中。

**正确答案 / Answer: `B`**

The best solution is to store the images in Amazon S3 and use Amazon CloudFront to cache the images. Amazon CloudFront is a content delivery network (CDN) that helps minimize latency and improves performance by delivering content from edge locations closest to the user, while also reducing costs by offloading traffic from the origin (S3).

最好的解决方案是将图像存储在 Amazon S3 中，并使用 Amazon CloudFront 来缓存图像。 Amazon CloudFront 是一种内容交付网络 (CDN)，可通过从最靠近用户的边缘位置交付内容来帮助最大限度地减少延迟并提高性能，同时还通过从源 (S3) 卸载流量来降低成本。

---

## Question 231  `Single answer`

**EN** A company operates a hybrid cloud environment and wants to ensure low-latency access to frequently accessed data for its on-premises applications while seamlessly integrating with AWS. The company also wants to offload infrequently accessed data to AWS to reduce local storage costs. Which solution would best meet these requirements?

**中** 一家公司运营混合云环境，希望确保低延迟地访问其本地应用程序经常访问的数据，同时与 AWS 无缝集成。该公司还希望将不经常访问的数据卸载到 AWS，以降低本地存储成本。哪种解决方案最能满足这些要求？

- **A.** Use AWS Storage Gateway in File Gateway mode to cache frequently accessed data on-premises and store infrequent data in Amazon S3.
  - 在文件网关模式下使用 AWS Storage Gateway，将频繁访问的数据缓存在本地，并将不频繁访问的数据存储在 Amazon S3 中。
- **B.** Use Amazon FSx for Windows File Server to provide low-latency access to on-premises applications and back up data to Amazon S3 Glacier.
  - 使用 Amazon FSx for Windows File Server 提供对本地应用程序的低延迟访问并将数据备份到 Amazon S3 Glacier。
- **C.** Use AWS DataSync to replicate data between on-premises storage and Amazon EFS for low-latency access.
  - 使用 AWS DataSync 在本地存储和 Amazon EFS 之间复制数据以实现低延迟访问。
- **D.** Use Amazon S3 with Transfer Acceleration to provide low-latency access for on-premises applications.
  - 将 Amazon S3 与传输加速结合使用，为本地应用程序提供低延迟访问。

**正确答案 / Answer: `A`**

The AWS Storage Gateway in File Gateway mode is the best solution for hybrid storage requirements where frequently accessed data needs to be cached locally for low-latency access, and infrequent data is stored cost-effectively in Amazon S3. It seamlessly integrates on-premises environments with AWS storage services, meeting the business requirements outlined.

文件网关模式下的 AWS Storage Gateway 是满足混合存储需求的最佳解决方案，其中频繁访问的数据需要在本地缓存以实现低延迟访问，而不频繁的数据则经济高效地存储在 Amazon S3 中。它将本地环境与 AWS 存储服务无缝集成，满足概述的业务要求。

---

## Question 232  `Single answer`

**EN** A company operates a highly regulated on-premises data center but wants to leverage AWS for long-term data archival while ensuring low latency access to frequently accessed files. Which hybrid storage solution would best meet these requirements?

**中** 一家公司运营着一个受到严格监管的本地数据中心，但希望利用 AWS 进行长期数据归档，同时确保对频繁访问的文件进行低延迟访问。哪种混合存储解决方案最能满足这些要求？

- **A.** Use AWS Storage Gateway File Gateway to integrate on-premises storage with Amazon S3 for file-based data access.
  - 使用 AWS Storage Gateway 文件网关将本地存储与 Amazon S3 集成，以进行基于文件的数据访问。
- **B.** Use AWS Direct Connect to transfer all data to Amazon S3 Glacier for archival and retrieval.
  - 使用 AWS Direct Connect 将所有数据传输到 Amazon S3 Glacier 进行存档和检索。
- **C.** Use Amazon FSx for Windows File Server to provide a fully managed file system accessible from both on-premises and AWS.
  - 使用 Amazon FSx for Windows File Server 提供可从本地和 AWS 访问的完全托管文件系统。
- **D.** Use AWS Snowball Edge to transfer data to S3 and run local compute workloads on-premises.
  - 使用 AWS Snowball Edge 将数据传输到 S3 并在本地运行本地计算工作负载。

**正确答案 / Answer: `A`**

AWS Storage Gateway File Gateway is the best solution for this scenario as it provides a hybrid storage option that integrates seamlessly with on-premises environments. It enables low-latency access to frequently used files while storing less frequently accessed data in Amazon S3, meeting the regulatory and business requirements for hybrid storage and long-term archival.

AWS Storage Gateway 文件网关是此场景的最佳解决方案，因为它提供了与本地环境无缝集成的混合存储选项。它可以对常用文件进行低延迟访问，同时将不常访问的数据存储在 Amazon S3 中，满足混合存储和长期归档的法规和业务要求。

---

## Question 233  `Single answer`

**EN** A company operates a hybrid environment with on-premises infrastructure and AWS Cloud services. They need a storage solution that allows their on-premises applications to access frequently used data with low latency while securely archiving infrequently accessed data to Amazon S3. Which solution best meets these requirements?

**中** 一家公司运营着包含本地基础设施和 AWS 云服务的混合环境。他们需要一种存储解决方案，允许其本地应用程序以低延迟访问常用数据，同时将不常访问的数据安全地归档到 Amazon S3。哪种解决方案最能满足这些要求？

- **A.** Use AWS Storage Gateway with the File Gateway configuration to provide low-latency access to frequently used files and automatic tiering to Amazon S3 for archival storage.
  - 将 AWS Storage Gateway 与文件网关配置结合使用，可提供对常用文件的低延迟访问，并自动分层到 Amazon S3 进行存档存储。
- **B.** Use AWS DataSync to transfer files between the on-premises environment and Amazon S3, and configure lifecycle policies in S3 to manage archival data.
  - 使用 AWS DataSync 在本地环境和 Amazon S3 之间传输文件，并在 S3 中配置生命周期策略来管理存档数据。
- **C.** Use Amazon FSx for Windows File Server to provide on-premises low-latency access and enable S3 lifecycle rules to move old data to archival storage.
  - 使用适用于 Windows 文件服务器的 Amazon FSx 提供本地低延迟访问并启用 S3 生命周期规则以将旧数据移至存档存储。
- **D.** Use Amazon EBS volumes mounted to on-premises servers over a Direct Connect link for low-latency access and archive the data to S3 Glacier using AWS Backup.
  - 使用通过 Direct Connect 链接挂载到本地服务器的 Amazon EBS 卷来实现低延迟访问，并使用 AWS Backup 将数据存档到 S3 Glacier。

**正确答案 / Answer: `A`**

The AWS Storage Gateway in File Gateway configuration is specifically designed for hybrid storage architectures where low-latency access to active data is required on-premises, while securely archiving older data to Amazon S3. It enables seamless integration between on-premises applications and AWS storage, meeting the business requirements for this scenario.

文件网关配置中的 AWS Storage Gateway 专为需要在本地低延迟访问活动数据的混合存储架构而设计，同时将旧数据安全地存档到 Amazon S3。它可以实现本地应用程序与 AWS 存储之间的无缝集成，满足该场景的业务需求。

---

## Question 234  `Single answer`

**EN** A company operates a video production business and stores large media files on-premises due to high data transfer costs and latency concerns. However, they want to implement a hybrid storage solution that allows them to seamlessly access and archive infrequently accessed media files to AWS while keeping frequently accessed files on-premises. Which solution would best meet this requirement?

**中** 一家公司经营视频制作业务，并由于数据传输成本高和延迟问题而在本地存储大型媒体文件。然而，他们希望实施一种混合存储解决方案，使他们能够无缝访问不经常访问的媒体文件并将其存档到 AWS，同时将经常访问的文件保留在本地。哪种解决方案最能满足此要求？

- **A.** Use AWS Storage Gateway File Gateway to extend on-premises storage and configure lifecycle policies to archive infrequently accessed files to Amazon S3 Glacier.
  - 使用 AWS Storage Gateway 文件网关扩展本地存储并配置生命周期策略以将不经常访问的文件存档到 Amazon S3 Glacier。
- **B.** Set up AWS Direct Connect to transfer all files to Amazon S3 and use Amazon S3 Intelligent-Tiering for cost optimization.
  - 设置 AWS Direct Connect 以将所有文件传输到 Amazon S3 并使用 Amazon S3 智能分层来优化成本。
- **C.** Deploy Amazon FSx for Windows File Server on-premises and enable replication to Amazon S3 for archiving.
  - 在本地部署 Windows 文件服务器的 Amazon FSx 并启用复制到 Amazon S3 进行存档。
- **D.** Use Amazon RDS with read replicas to synchronize the on-premises files and archive older files to Amazon S3 Glacier.
  - 将 Amazon RDS 与只读副本结合使用以同步本地文件并将较旧的文件存档到 Amazon S3 Glacier。

**正确答案 / Answer: `A`**

The company requires a hybrid storage solution to store frequently accessed media files on-premises while archiving infrequently accessed files to AWS. AWS Storage Gateway File Gateway is specifically designed for this use case, allowing seamless integration of on-premises storage with AWS cloud storage services like Amazon S3 and S3 Glacier. Other solutions mentioned either do not align with the hybrid storage requirement or are not suitable for managing large media files.

该公司需要一种混合存储解决方案来在本地存储经常访问的媒体文件，同时将不经常访问的文件存档到 AWS。 AWS Storage Gateway 文件网关专为此用例而设计，允许将本地存储与 Amazon S3 和 S3 Glacier 等 AWS 云存储服务无缝集成。提到的其他解决方案要么不符合混合存储要求，要么不适合管理大型媒体文件。

---

## Question 235  `Single answer`

**EN** A company is building a highly available web application that allows users to upload and retrieve large media files. The storage solution must provide the following features: scalability to handle unpredictable traffic patterns, low-latency access to frequently accessed files, and integration with a content delivery network (CDN) for global distribution. Which storage service is most appropriate for this use case?

**中** 一家公司正在构建一个高度可用的 Web 应用程序，允许用户上传和检索大型媒体文件。存储解决方案必须提供以下功能：可扩展性以处理不可预测的流量模式、对频繁访问的文件进行低延迟访问以及与内容交付网络 (CDN) 集成以进行全球分发。哪种存储服务最适合此用例？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon Elastic Block Store (Amazon EBS)
  - 亚马逊弹性块存储 (Amazon EBS)
- **C.** Amazon Elastic File System (Amazon EFS)
  - 亚马逊弹性文件系统 (Amazon EFS)
- **D.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器

**正确答案 / Answer: `A`**

Amazon S3 is the most appropriate choice for this scenario because it is designed to handle large-scale object storage with high scalability and low-latency access. It integrates seamlessly with Amazon CloudFront, enabling global delivery of media files with a content delivery network. The other options, such as Amazon EBS, Amazon EFS, and Amazon FSx for Windows File Server, lack the scalability, CDN integration, or suitability for unpredictable traffic patterns required for this use case.

Amazon S3 是这种场景最合适的选择，因为它旨在处理具有高可扩展性和低延迟访问的大规模对象存储。它与 Amazon CloudFront 无缝集成，支持通过内容交付网络在全球范围内交付媒体文件。其他选项（例如适用于 Windows 文件服务器的 Amazon EBS、Amazon EFS 和 Amazon FSx）缺乏可扩展性、CDN 集成或对该用例所需的不可预测流量模式的适用性。

---

## Question 236  `Single answer`

**EN** A company is building a web application that allows users to upload and share high-resolution images. The images need to be stored with high durability, made publicly accessible for viewing, and require lifecycle management to automatically transition to a lower-cost storage tier after 30 days. Which AWS storage service is the MOST appropriate for this use case?

**中** 一家公司正在构建一个 Web 应用程序，允许用户上传和共享高分辨率图像。这些图像需要以高耐久性进行存储，可供公众查看，并且需要生命周期管理以在 30 天后自动过渡到成本较低的存储层。哪种 AWS 存储服务最适合此用例？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EFS
  - Amazon EFS
- **C.** Amazon EBS
  - Amazon EBS
- **D.** AWS Snowball
  - AWS Snowball

**正确答案 / Answer: `A`**

Amazon S3 is specifically designed to store objects such as images and provides features like high durability, public accessibility, and lifecycle management. These features align perfectly with the requirements of the given use case. Other services like Amazon EFS and Amazon EBS are not suitable as they are designed for different purposes, and AWS Snowball is a data transfer device, not a storage service.

Amazon S3 专门用于存储图像等对象，并提供高耐用性、公共可访问性和生命周期管理等功能。这些功能与给定用例的要求完美契合。其他服务（例如 Amazon EFS 和 Amazon EBS）不适合，因为它们是为不同的目的而设计的，并且 AWS Snowball 是数据传输设备，而不是存储服务。

---

## Question 237  `Select 3`

**EN** A company is hosting a web application that serves static content, processes user-generated media files, and stores user profile data. The application requires low-latency access to user profile data, scalable storage for static content, and a shared file system for media processing across multiple servers. Which combination of storage solutions should the company use to meet these requirements?

**中** 一家公司正在托管一个 Web 应用程序，该应用程序提供静态内容、处理用户生成的媒体文件并存储用户配置文件数据。该应用程序需要对用户配置文件数据进行低延迟访问、静态内容的可扩展存储以及用于跨多个服务器进行媒体处理的共享文件系统。公司应该使用哪种存储解决方案组合来满足这些要求？

- **A.** Amazon S3 for static content storage
  - Amazon S3 用于静态内容存储
- **B.** Amazon Elastic Block Store (EBS) for storing static content
  - 用于存储静态内容的 Amazon Elastic Block Store (EBS)
- **C.** Amazon Elastic File System (EFS) for media processing
  - 用于媒体处理的 Amazon Elastic File System (EFS)
- **D.** Amazon S3 for hosting user profile data
  - Amazon S3 用于托管用户配置文件数据
- **E.** Amazon Elastic Block Store (EBS) for user profile data
  - 用于用户配置文件数据的 Amazon Elastic Block Store (EBS)

**正确答案 / Answer: `A, C, E`**

The correct combination of storage services ensures the application meets its requirements. Amazon S3 is best suited for static content due to its scalability and cost-effectiveness. Amazon EFS is the optimal choice for shared storage required by media processing. For user profile data requiring low-latency access, Amazon EBS is the appropriate solution as it provides high-performance block storage attached to EC2 instances.

存储服务的正确组合可确保应用程序满足其要求。由于其可扩展性和成本效益，Amazon S3 最适合静态内容。 Amazon EFS 是媒体处理所需共享存储的最佳选择。对于需要低延迟访问的用户配置文件数据，Amazon EBS 是合适的解决方案，因为它提供附加到 EC2 实例的高性能块存储。

---

## Question 238  `Single answer`

**EN** A company is running a web application that serves media files to users. The media files need to be stored durably and accessed frequently by users across the globe. Additionally, the company wants to minimize latency while keeping costs low. Which AWS storage service is the most appropriate for this use case?

**中** 一家公司正在运行一个为用户提供媒体文件的 Web 应用程序。媒体文件需要持久存储并由全球用户频繁访问。此外，该公司希望在保持低成本的同时最大限度地减少延迟。哪种 AWS 存储服务最适合此用例？

- **A.** Amazon S3 with an S3 Transfer Acceleration enabled bucket
  - 具有启用 S3 传输加速的存储桶的 Amazon S3
- **B.** Amazon Elastic Block Store (Amazon EBS)
  - 亚马逊弹性块存储 (Amazon EBS)
- **C.** Amazon Elastic File System (Amazon EFS)
  - 亚马逊弹性文件系统 (Amazon EFS)
- **D.** Amazon S3 Glacier Deep Archive
  - Amazon S3 Glacier 深度归档

**正确答案 / Answer: `A`**

Amazon S3 is the best service for storing media files that need to be accessed frequently and durably with global reach. Enabling S3 Transfer Acceleration further reduces latency for users distributed worldwide by utilizing Amazon’s globally distributed CloudFront edge locations. Other options like EBS, EFS, and S3 Glacier Deep Archive are not suitable due to their specific use cases and limitations.

Amazon S3 是存储需要在全球范围内频繁、持久访问的媒体文件的最佳服务。通过利用 Amazon 全球分布的 CloudFront 边缘站点，启用 S3 传输加速可进一步减少分布在世界各地的用户的延迟。其他选项（如 EBS、EFS 和 S3 Glacier Deep Archive）由于其特定的用例和限制而不适合。

---

## Question 239  `Select 1`

**EN** A company is running a cloud-based application that requires storage for the following use cases: storing application logs, hosting a shared filesystem for multiple EC2 instances, and running a high-performance database. Which combination of AWS storage services best meets these requirements?

**中** 一家公司正在运行一个基于云的应用程序，该应用程序需要存储来满足以下用例：存储应用程序日志、为多个 EC2 实例托管共享文件系统以及运行高性能数据库。哪种 AWS 存储服务组合最能满足这些要求？

- **A.** Amazon S3 for storing logs, Amazon EFS for the shared filesystem, and Amazon EBS for the database
  - Amazon S3 用于存储日志，Amazon EFS 用于共享文件系统，Amazon EBS 用于数据库
- **B.** Amazon S3 for storing logs, Amazon FSx for the shared filesystem, and Amazon EBS for the database
  - Amazon S3 用于存储日志，Amazon FSx 用于共享文件系统，Amazon EBS 用于数据库
- **C.** Amazon S3 for storing logs, Amazon EFS for the shared filesystem, and Amazon RDS for the database
  - Amazon S3 用于存储日志，Amazon EFS 用于共享文件系统，Amazon RDS 用于数据库
- **D.** Amazon S3 for storing logs, Amazon EFS for the shared filesystem, and Amazon Glacier for the database
  - Amazon S3 用于存储日志，Amazon EFS 用于共享文件系统，Amazon Glacier 用于数据库

**正确答案 / Answer: `A`**

Each storage type has specific use cases. Amazon S3 is suitable for storing logs as it provides durable and scalable object storage. Amazon EFS offers a shared file system that can be accessed by multiple EC2 instances. Amazon EBS provides block-level storage optimized for performance-intensive workloads, such as databases. This combination effectively addresses all the use cases described in the question.

每种存储类型都有特定的用例。 Amazon S3 适合存储日志，因为它提供持久且可扩展的对象存储。 Amazon EFS 提供可由多个 EC2 实例访问的共享文件系统。 Amazon EBS 提供针对性能密集型工作负载（例如数据库）进行优化的块级存储。这种组合有效地解决了问题中描述的所有用例。

---

## Question 240  `Single answer`

**EN** A company is designing a cloud-native application that requires scalable storage for unstructured data such as images, videos, and log files. The application also needs to integrate seamlessly with other AWS services for analytics and machine learning. Which storage type should the company use?

**中** 一家公司正在设计一个云原生应用程序，该应用程序需要可扩展的存储来存储非结构化数据，例如图像、视频和日志文件。该应用程序还需要与其他 AWS 服务无缝集成以进行分析和机器学习。公司应该使用哪种存储类型？

- **A.** Amazon EBS (Elastic Block Store)
  - Amazon EBS（弹性块存储）
- **B.** Amazon EFS (Elastic File System)
  - Amazon EFS（弹性文件系统）
- **C.** Amazon S3 (Simple Storage Service)
  - Amazon S3（简单存储服务）
- **D.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器

**正确答案 / Answer: `C`**

Amazon S3 is the best choice for this scenario because it is an object storage service optimized for storing unstructured data such as multimedia files and log data. It provides virtually unlimited scalability, high durability, and integrates with other AWS services like Amazon Athena, AWS Lambda, and Amazon Rekognition, making it well-suited for cloud-native applications requiring analytics and machine learning capabilities.

Amazon S3 是该场景的最佳选择，因为它是针对存储多媒体文件和日志数据等非结构化数据而优化的对象存储服务。它提供几乎无限的可扩展性、高耐用性，并与 Amazon Athena、AWS Lambda 和 Amazon Rekognition 等其他 AWS 服务集成，使其非常适合需要分析和机器学习功能的云原生应用程序。

---

## Question 241  `Single answer`

**EN** A company is building a data analytics platform and requires a storage solution for large-scale, unstructured data (such as images, videos, and log files). The solution needs to provide high durability, scalability, and global access, while also allowing integration with analytics services like Amazon Athena. Which storage type should the company use?

**中** 某公司正在构建数据分析平台，需要针对大规模非结构化数据（例如图像、视频、日志文件）的存储解决方案。该解决方案需要提供高耐用性、可扩展性和全球访问，同时还允许与 Amazon Athena 等分析服务集成。公司应该使用哪种存储类型？

- **A.** Amazon EBS (Elastic Block Store)
  - Amazon EBS（弹性块存储）
- **B.** Amazon S3 (Simple Storage Service)
  - Amazon S3（简单存储服务）
- **C.** Amazon EFS (Elastic File System)
  - Amazon EFS（弹性文件系统）
- **D.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器

**正确答案 / Answer: `B`**

For storing large-scale, unstructured data such as images, videos, and log files, Amazon S3 is the best choice. It is an object storage service offering high durability, scalability, and global access. Additionally, its integration with services like Amazon Athena makes it an excellent option for analytics use cases. Other storage types like EBS, EFS, and FSx are better suited for specific use cases such as block storage, file storage, or Windows-based file systems.

对于存储图像、视频和日志文件等大规模非结构化数据，Amazon S3 是最佳选择。它是一种对象存储服务，提供高持久性、可扩展性和全局访问能力。此外，它与 Amazon Athena 等服务的集成使其成为分析用例的绝佳选择。其他存储类型（例如 EBS、EFS 和 FSx）更适合特定用例，例如块存储、文件存储或基于 Windows 的文件系统。

---

## Question 242  `Single answer`

**EN** A media company is building a cloud-based video streaming platform. They need a scalable storage solution for storing large video files that are accessed frequently by users all over the world. The solution should also support metadata tagging for managing the files efficiently. Which AWS storage type is the most suitable for their use case?

**中** 一家媒体公司正在构建基于云的视频流平台。他们需要一个可扩展的存储解决方案来存储世界各地用户经常访问的大型视频文件。该解决方案还应该支持元数据标记，以有效管理文件。哪种 AWS 存储类型最适合其使用案例？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EBS
  - Amazon EBS
- **C.** Amazon EFS
  - Amazon EFS
- **D.** AWS Storage Gateway
  - AWS Storage Gateway

**正确答案 / Answer: `A`**

The company's use case involves storing large video files with global accessibility and metadata tagging. Amazon S3 is the best choice because it is an object storage service designed for scalability, metadata management, and high availability across different regions. Other options, like Amazon EBS and EFS, are designed for different types of storage workloads, and AWS Storage Gateway is not applicable to this scenario.

该公司的用例涉及存储具有全局可访问性和元数据标记的大型视频文件。 Amazon S3 是最好的选择，因为它是一种对象存储服务，旨在实现跨区域的可扩展性、元数据管理和高可用性。其他选项（例如 Amazon EBS 和 EFS）是针对不同类型的存储工作负载而设计的，AWS Storage Gateway 不适用于此场景。

---

## Question 243  `Single answer`

**EN** A company runs a high-traffic web application that experiences unpredictable spikes in demand. They want to ensure their compute resources automatically scale to handle traffic increases while minimizing costs during periods of low usage. Which solution should you recommend?

**中** 一家公司运行一个高流量的 Web 应用程序，该应用程序会遇到不可预测的需求峰值。他们希望确保计算资源自动扩展以应对流量增加，同时在低使用率期间最大限度地降低成本。您应该推荐哪种解决方案？

- **A.** Use an Auto Scaling group with a combination of On-Demand and Spot Instances to handle variable traffic.
  - 将 Auto Scaling 组与按需实例和 Spot 实例相结合使用来处理可变流量。
- **B.** Manually launch and terminate EC2 instances based on traffic patterns observed from CloudWatch metrics.
  - 根据从 CloudWatch 指标观察到的流量模式手动启动和终止 EC2 实例。
- **C.** Deploy the application using AWS Lambda functions with Provisioned Concurrency enabled.
  - 使用 AWS Lambda 函数部署应用程序并启用预配置并发。
- **D.** Run the application on EC2 instances with a Reserved Instance pricing model for consistent cost savings.
  - 使用预留实例定价模型在 EC2 实例上运行应用程序，以持续节省成本。

**正确答案 / Answer: `A`**

The best solution for high-traffic web applications with unpredictable spikes is to use an Auto Scaling group. This ensures the application can automatically scale in response to demand, providing both high performance and cost efficiency. Combining On-Demand and Spot Instances in the Auto Scaling group further optimizes costs while maintaining elasticity and reliability.

对于具有不可预测峰值的高流量 Web 应用程序，最佳解决方案是使用 Auto Scaling 组。这确保应用程序可以根据需求自动扩展，从而提供高性能和成本效益。在 Auto Scaling 组中结合按需实例和 Spot 实例可进一步优化成本，同时保持弹性和可靠性。

---

## Question 244  `Select 3`

**EN** A company is running a web application on a fleet of Amazon EC2 instances behind an Application Load Balancer. The traffic to the application is highly variable, with significant spikes during certain times of the day. The company wants to ensure the solution is cost-effective while maintaining high performance and elasticity. Which combination of actions should you take to meet these requirements?

**中** 一家公司正在 Application Load Balancer 后面的一组 Amazon EC2 实例上运行 Web 应用程序。应用程序的流量变化很大，在一天中的某些时间段会出现显着的峰值。该公司希望确保该解决方案具有成本效益，同时保持高性能和弹性。您应该采取哪种行动组合来满足这些要求？

- **A.** Use an Auto Scaling group to automatically scale the EC2 instances based on demand.
  - 使用 Auto Scaling 组根据需求自动扩展 EC2 实例。
- **B.** Configure the Auto Scaling group to use Scheduled Scaling to handle predictable traffic patterns.
  - 配置 Auto Scaling 组以使用 Scheduled Scaling 来处理可预测的流量模式。
- **C.** Replace the EC2 fleet with a single, larger EC2 instance to handle peak traffic.
  - 将 EC2 队列替换为单个更大的 EC2 实例以处理峰值流量。
- **D.** Enable Elastic Load Balancing to distribute traffic among multiple availability zones.
  - 启用 Elastic Load Balancing 在多个可用区之间分配流量。
- **E.** Use Spot Instances in the Auto Scaling group to reduce costs for non-critical workloads.
  - 使用 Auto Scaling 组中的 Spot 实例来降低非关键工作负载的成本。

**正确答案 / Answer: `A, B, D`**

To design a high-performing and elastic compute solution for variable workloads, you should use Auto Scaling to dynamically adjust resources and Scheduled Scaling to handle predictable patterns. Elastic Load Balancing ensures traffic is evenly distributed across instances in multiple availability zones, improving resilience and performance. Avoid using a single large instance, as it is neither elastic nor fault-tolerant, and Spot Instances are inappropriate for critical workloads that require consistent availability.

要为可变工作负载设计高性能、弹性的计算解决方案，您应该使用 Auto Scaling 来动态调整资源，并使用 Scheduled Scaling 来处理可预测的模式。 Elastic Load Balancing 可确保流量在多个可用区的实例之间均匀分布，从而提高弹性和性能。避免使用单个大型实例，因为它既不具有弹性，也不具有容错能力，并且 Spot 实例不适合需要一致可用性的关键工作负载。

---

## Question 245  `Single answer`

**EN** A company runs a web application that experiences unpredictable traffic spikes throughout the day. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The company wants to ensure that the solution is cost-effective, high-performing, and capable of handling sudden traffic surges without manual intervention. Which solution should you implement?

**中** 一家公司运行的 Web 应用程序全天都会遇到不可预测的流量峰值。该应用程序托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上。该公司希望确保该解决方案具有成本效益、高性能，并且能够在无需人工干预的情况下处理突然的流量激增。您应该实施哪种解决方案？

- **A.** Use an Auto Scaling group with dynamic scaling policies to automatically adjust the number of EC2 instances based on traffic patterns.
  - 使用具有动态扩展策略的 Auto Scaling 组，根据流量模式自动调整 EC2 实例的数量。
- **B.** Manually launch additional EC2 instances when traffic increases and terminate them during low traffic periods.
  - 当流量增加时手动启动额外的 EC2 实例，并在流量低时终止它们。
- **C.** Switch to using Amazon ECS with Fargate to run the application without provisioning or managing EC2 instances.
  - 切换到使用 Amazon ECS 与 Fargate 来运行应用程序，而无需预置或管理 EC2 实例。
- **D.** Upgrade all EC2 instances to larger instance types to handle traffic spikes.
  - 将所有 EC2 实例升级到更大的实例类型以应对流量高峰。

**正确答案 / Answer: `A`**

The best solution for handling unpredictable traffic spikes in a cost-effective and high-performing manner is to use an Auto Scaling group with dynamic scaling policies. This allows the number of EC2 instances to scale up or down automatically based on traffic demands, ensuring the application remains responsive while optimizing costs. Other options either require manual intervention, involve unnecessary architectural changes, or lead to over-provisioning and increased costs.

以经济高效且高性能的方式处理不可预测的流量峰值的最佳解决方案是使用具有动态扩展策略的 Auto Scaling 组。这允许 EC2 实例的数量根据流量需求自动增加或减少，确保应用程序保持响应，同时优化成本。其他选项要么需要手动干预，涉及不必要的架构更改，要么导致过度配置和成本增加。

---

## Question 246  `Single answer`

**EN** A company runs a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). Traffic to the application increases significantly during business hours, causing performance issues. The company wants to ensure the application automatically scales during traffic spikes while minimizing costs during idle times. What is the most appropriate solution to meet these requirements?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。应用程序的流量在工作时间内显着增加，从而导致性能问题。该公司希望确保应用程序在流量高峰期间自动扩展，同时在空闲时间最大限度地降低成本。满足这些要求的最合适的解决方案是什么？

- **A.** Manually add or remove EC2 instances based on traffic patterns.
  - 根据流量模式手动添加或删除 EC2 实例。
- **B.** Configure an Auto Scaling group with target tracking scaling policies based on the average CPU utilization of the EC2 instances.
  - 根据 EC2 实例的平均 CPU 利用率，使用目标跟踪扩展策略配置 Auto Scaling 组。
- **C.** Use Spot Instances exclusively to handle traffic spikes and terminate them during idle times.
  - 仅使用 Spot 实例来处理流量峰值并在空闲时间终止它们。
- **D.** Configure an Auto Scaling group with scheduled scaling policies to add and remove instances at fixed times.
  - 使用计划的扩展策略配置 Auto Scaling 组，以在固定时间添加和删除实例。

**正确答案 / Answer: `B`**

To design a high-performing and elastic compute solution, an Auto Scaling group with target tracking scaling policies is the most appropriate choice. It dynamically adjusts the number of EC2 instances based on real-time metrics, such as CPU utilization, ensuring the application can handle traffic spikes while minimizing costs during low traffic periods. This approach aligns with AWS best practices for scalability and elasticity.

要设计高性能、弹性的计算解决方案，具有目标跟踪扩展策略的 Auto Scaling 组是最合适的选择。它根据实时指标（例如 CPU 利用率）动态调整 EC2 实例的数量，确保应用程序能够处理流量峰值，同时在低流量期间最大限度地降低成本。此方法符合 AWS 在可扩展性和弹性方面的最佳实践。

---

## Question 247  `Single answer`

**EN** A company is hosting a web application that uses an Amazon RDS database instance for data storage. The company notices performance bottlenecks during peak usage times due to high read traffic. Which solution can help improve the database's performance and scalability while minimizing changes to the application?

**中** 一家公司正在托管一个使用 Amazon RDS 数据库实例进行数据存储的 Web 应用程序。该公司注意到在高峰使用时间由于高读取流量而出现性能瓶颈。哪种解决方案可以帮助提高数据库的性能和可扩展性，同时最大限度地减少对应用程序的更改？

- **A.** Enable Multi-AZ deployments for the RDS instance.
  - 为 RDS 实例启用多可用区部署。
- **B.** Migrate the database to Amazon DynamoDB.
  - 将数据库迁移到 Amazon DynamoDB。
- **C.** Add read replicas to the RDS instance.
  - 将只读副本添加到 RDS 实例。
- **D.** Enable RDS Performance Insights to optimize queries.
  - 启用 RDS Performance Insights 以优化查询。

**正确答案 / Answer: `C`**

The best solution to handle high read traffic is to add read replicas to the Amazon RDS instance. Read replicas allow you to offload read queries from the primary database instance, improving performance and scalability. This solution is straightforward to implement and requires minimal changes to the existing application.

处理高读取流量的最佳解决方案是将只读副本添加到 Amazon RDS 实例。只读副本允许您从主数据库实例卸载读取查询，从而提高性能和可扩展性。该解决方案实施起来很简单，并且只需要对现有应用程序进行最少的更改。

---

## Question 248  `Select 2`

**EN** A company is running a web application on an Amazon EC2 instance that connects to an Amazon RDS database. The application requires high availability and disaster recovery. The company wants to ensure that their web application and database remain operational in the event of an entire AWS Region outage. Which solution should you recommend?

**中** 一家公司正在连接到 Amazon RDS 数据库的 Amazon EC2 实例上运行 Web 应用程序。该应用程序需要高可用性和灾难恢复。该公司希望确保其 Web 应用程序和数据库在整个 AWS 区域发生中断时仍保持运行。您应该推荐哪种解决方案？

- **A.** Deploy the EC2 instance and RDS database in a single Availability Zone and enable RDS Multi-AZ.
  - 在单个可用区中部署 EC2 实例和 RDS 数据库并启用 RDS 多可用区。
- **B.** Use an EC2 Auto Scaling group across multiple Regions and create a read replica of the RDS database in the secondary Region.
  - 跨多个区域使用 EC2 Auto Scaling 组，并在辅助区域中创建 RDS 数据库的只读副本。
- **C.** Deploy the EC2 instance in multiple Availability Zones and enable RDS Multi-AZ.
  - 在多个可用区部署 EC2 实例并启用 RDS 多可用区。
- **D.** Set up a backup EC2 instance and a cross-region read replica of the RDS database in a secondary Region.
  - 在辅助区域中设置备份 EC2 实例和 RDS 数据库的跨区域只读副本。
- **E.** Use AWS Elastic Load Balancing to distribute traffic across EC2 instances in multiple Regions and implement RDS Global Database.
  - 使用 AWS Elastic Load Balancing 在多个区域的 EC2 实例之间分配流量并实施 RDS 全局数据库。

**正确答案 / Answer: `D, E`**

To ensure high availability and disaster recovery in the event of a Regional outage, you need to deploy resources in multiple AWS Regions. Setting up a backup EC2 instance in the secondary Region and creating a cross-region read replica for the RDS database provides a disaster recovery solution. Additionally, using AWS Elastic Load Balancing for EC2 in multiple Regions and RDS Global Database ensures automated failover and minimal downtime, making these options the best solution for the given scenario.

为了确保区域中断时的高可用性和灾难恢复，您需要在多个 AWS 区域部署资源。在辅助 Region 中设置备份 EC2 实例并为 RDS 数据库创建跨区域只读副本提供了灾难恢复解决方案。此外，在多个区域中使用适用于 EC2 的 AWS Elastic Load Balancing 和 RDS 全局数据库可确保自动故障转移和最短的停机时间，使这些选项成为给定场景的最佳解决方案。

---

## Question 249  `Single answer`

**EN** A company is migrating an on-premises application to AWS. The application needs to store large amounts of structured data and requires high availability, scalability, and the ability to run complex queries. Which AWS service is the most suitable for this use case?

**中** 一家公司正在将本地应用程序迁移到 AWS。应用程序需要存储大量结构化数据，并需要高可用性、可扩展性以及运行复杂查询的能力。哪种 AWS 服务最适合此用例？

- **A.** Amazon RDS
  - Amazon RDS
- **B.** Amazon DynamoDB
  - Amazon DynamoDB
- **C.** Amazon Redshift
  - Amazon Redshift
- **D.** Amazon S3
  - Amazon S3

**正确答案 / Answer: `A`**

Amazon RDS is the most appropriate choice because it is a managed relational database service that supports structured data, high availability, scalability, and complex SQL queries, which are all requirements for the company's application. Other options like DynamoDB, Redshift, and S3 do not meet all the criteria for this specific use case.

Amazon RDS 是最合适的选择，因为它是托管关系数据库服务，支持结构化数据、高可用性、可扩展性和复杂的 SQL 查询，这些都是公司应用程序的要求。其他选项（例如 DynamoDB、Redshift 和 S3）不满足此特定用例的所有标准。

---

## Question 250  `Single answer`

**EN** You are designing an application that will run on Amazon EC2 instances within an Auto Scaling group. The application requires consistent, low-latency access to shared data that must persist beyond the lifecycle of the instances. Which storage solution should you use to meet these requirements?

**中** 您正在设计一个将在 Auto Scaling 组内的 Amazon EC2 实例上运行的应用程序。应用程序需要对共享数据进行一致、低延迟的访问，这些数据必须在实例的生命周期之外持续存在。您应该使用哪种存储解决方案来满足这些要求？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EBS
  - Amazon EBS
- **C.** Amazon EFS
  - Amazon EFS
- **D.** AWS Instance Store
  - AWS 实例存储

**正确答案 / Answer: `C`**

Amazon Elastic File System (EFS) is the best choice for this scenario because it is designed for applications that require shared file storage with low-latency access across multiple EC2 instances. EFS is fully managed, scalable, and persists independently of the lifecycle of individual instances, meeting all the requirements of the application.

Amazon Elastic File System (EFS) 是此场景的最佳选择，因为它专为需要跨多个 EC2 实例进行低延迟访问的共享文件存储的应用程序而设计。 EFS 是完全托管的、可扩展的，并且独立于各个实例的生命周期而持续存在，满足应用程序的所有要求。

---

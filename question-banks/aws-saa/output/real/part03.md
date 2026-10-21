# AWS SAA-C03 真题演练卷 · 第 03 份

> 题目 101–150 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 101  `Single answer`

**EN** Your company is building a serverless application for processing and exposing data via APIs. The application must support both RESTful requests and WebSocket communication. You need a solution that will allow you to manage these APIs efficiently, apply throttling and caching policies, and integrate seamlessly with AWS Lambda for backend processing. Which service should you use to meet these requirements?

**中** 您的公司正在构建一个无服务器应用程序，用于通过 API 处理和公开数据。应用程序必须支持 RESTful 请求和 WebSocket 通信。您需要一个解决方案，让您能够高效管理这些 API、应用限制和缓存策略，并与 AWS Lambda 无缝集成以进行后端处理。您应该使用哪种服务来满足这些要求？

- **A.** Amazon API Gateway
  - Amazon API Gateway
- **B.** AWS App Runner
  - AWS 应用程序运行器
- **C.** Amazon Elastic Load Balancer (ELB)
  - 亚马逊 Elastic Load Balancer (ELB)
- **D.** Amazon CloudFront
  - Amazon CloudFront

**正确答案 / Answer: `A`**

Amazon API Gateway is the most suitable service for this scenario because it is explicitly designed for managing RESTful and WebSocket APIs. It offers features like throttling, caching, and seamless integration with AWS Lambda, which are essential for a serverless application. Other options like AWS App Runner, ELB, and CloudFront do not provide the necessary API management capabilities.

Amazon API Gateway 是最适合此场景的服务，因为它是专门为管理 RESTful 和 WebSocket API 而设计的。它提供了节流、缓存以及与 AWS Lambda 无缝集成等功能，这些功能对于无服务器应用程序至关重要。 AWS App Runner、ELB 和 CloudFront 等其他选项不提供必要的 API 管理功能。

---

## Question 102  `Select 3`

**EN** You are designing an application that allows users to upload images and retrieve them using a REST API. You want to use Amazon API Gateway to manage the API and ensure scalability, security, and monitoring. The image data is stored in an S3 bucket, and you want to minimize operational overhead while ensuring that only authenticated users can access the images. Which combination of actions should you take to meet these requirements?

**中** 您正在设计一个应用程序，允许用户上传图像并使用 REST API 检索图像。您希望使用 Amazon API Gateway 来管理 API 并确保可扩展性、安全性和监控。图像数据存储在 S3 存储桶中，您希望最大限度地减少操作开销，同时确保只有经过身份验证的用户才能访问图像。您应该采取哪种行动组合来满足这些要求？

- **A.** Use Amazon API Gateway to create a REST API and integrate it with the S3 bucket using an HTTP proxy integration.
  - 使用 Amazon API Gateway 创建 REST API 并使用 HTTP 代理集成将其与 S3 存储桶集成。
- **B.** Enable AWS IAM authorization in Amazon API Gateway and configure IAM policies to restrict access to the S3 bucket.
  - 在 Amazon API Gateway 中启用 AWS IAM 授权并配置 IAM 策略以限制对 S3 存储桶的访问。
- **C.** Use Amazon API Gateway to create a REST API and integrate it with AWS Lambda to retrieve images from the S3 bucket.
  - 使用 Amazon API Gateway 创建 REST API 并将其与 AWS Lambda 集成以从 S3 存储桶检索图像。
- **D.** Enable Amazon Cognito user pools for API Gateway to handle authentication and authorization.
  - 为 API Gateway 启用 Amazon Cognito 用户池来处理身份验证和授权。
- **E.** Use API Gateway usage plans to throttle requests and monitor API usage.
  - 使用 API Gateway 使用计划来限制请求并监控 API 使用情况。

**正确答案 / Answer: `B, D, E`**

To meet the requirements of the scenario, you should use API Gateway with AWS IAM authorization to securely manage access to the S3 bucket. Amazon Cognito can handle user authentication, ensuring that only authenticated users can access the API. Additionally, API Gateway usage plans allow you to throttle requests and monitor usage, reducing operational overhead and ensuring scalability. Direct HTTP proxy integration or Lambda-based solutions introduce unnecessary complexity in this scenario.

为了满足该场景的要求，您应该使用具有 AWS IAM 授权的 API Gateway 来安全地管理对 S3 存储桶的访问。 Amazon Cognito 可以处理用户身份验证，确保只有经过身份验证的用户才能访问 API。此外，API Gateway 使用计划允许您限制请求并监控使用情况，从而减少运营开销并确保可扩展性。在此场景中，直接 HTTP 代理集成或基于 Lambda 的解决方案会带来不必要的复杂性。

---

## Question 103  `Select 2`

**EN** A company wants to securely transfer files from their on-premises systems to Amazon S3 for processing. They require a fully managed solution that supports SFTP (Secure File Transfer Protocol) and integrates seamlessly with Amazon S3. Additionally, the company needs to ensure that credentials for accessing the service are securely managed and rotated automatically. Which combination of AWS services should they use?

**中** 一家公司希望将文件从其本地系统安全地传输到 Amazon S3 进行处理。他们需要一个支持 SFTP（安全文件传输协议）并与 Amazon S3 无缝集成的完全托管解决方案。此外，公司需要确保访问服务的凭据得到安全管理和自动轮换。他们应该使用哪种 AWS 服务组合？

- **A.** AWS Transfer Family
  - AWS 传输系列
- **B.** Amazon SQS
  - Amazon SQS
- **C.** Secrets Manager
  - 保密经理
- **D.** Amazon EC2
  - Amazon EC2
- **E.** AWS Lambda
  - AWS Lambda

**正确答案 / Answer: `A, C`**

The correct combination of services to meet the company’s requirements is AWS Transfer Family and Secrets Manager. AWS Transfer Family provides a fully managed SFTP solution that integrates with Amazon S3, while Secrets Manager ensures secure storage and automatic rotation of credentials. These two services together address the need for secure file transfer and credential management in a fully managed and scalable manner.

满足公司要求的正确服务组合是 AWS Transfer Family 和 Secrets Manager。 AWS Transfer 系列提供了与 Amazon S3 集成的完全托管的 SFTP 解决方案，而 Secrets Manager 可确保凭证的安全存储和自动轮换。这两项服务共同满足了以完全托管和可扩展的方式进行安全文件传输和凭证管理的需求。

---

## Question 104  `Single answer`

**EN** A company needs to set up a secure and automated solution to transfer large files from external partners into an Amazon S3 bucket. The solution must integrate with the company's existing Identity Provider (IdP) for user authentication and authorization. Which AWS managed service is the most appropriate for this use case?

**中** 公司需要建立一个安全且自动化的解决方案，将来自外部合作伙伴的大文件传输到 Amazon S3 存储桶中。该解决方案必须与公司现有的身份提供商 (IdP) 集成，以进行用户身份验证和授权。哪种 AWS 托管服务最适合此用例？

- **A.** AWS Transfer Family
  - AWS 传输系列
- **B.** Amazon Simple Queue Service (Amazon SQS)
  - Amazon 简单队列服务 (Amazon SQS)
- **C.** AWS Secrets Manager
  - AWS Secrets Manager
- **D.** Amazon Kinesis Data Streams
  - Amazon Kinesis 数据流

**正确答案 / Answer: `A`**

AWS Transfer Family is specifically designed for secure, managed file transfers to Amazon S3 using protocols like SFTP, FTPS, and FTP. It also supports integration with Identity Providers (IdPs) for user authentication, making it the ideal service for this scenario. The other options do not address the requirement of transferring large files securely to Amazon S3.

AWS Transfer 系列专门设计用于使用 SFTP、FTPS 和 FTP 等协议将文件安全、托管地传输到 Amazon S3。它还支持与身份提供商 (IdP) 集成以进行用户身份验证，使其成为此场景的理想服务。其他选项不能满足将大文件安全传输到 Amazon S3 的要求。

---

## Question 105  `Select 2`

**EN** A company needs to transfer large amounts of data from their on-premises systems to Amazon S3 daily. The data transfer must use SFTP due to compliance requirements. Additionally, the team wants to ensure that any credentials used for the SFTP process are securely managed. Which combination of AWS services can meet these requirements?

**中** 公司每天需要将大量数据从本地系统传输到 Amazon S3。由于合规性要求，数据传输必须使用 SFTP。此外，该团队希望确保用于 SFTP 过程的任何凭据都得到安全管理。哪种 AWS 服务组合可以满足这些要求？

- **A.** AWS Transfer Family and Amazon S3
  - AWS Transfer 系列和 Amazon S3
- **B.** Amazon SQS and Amazon S3
  - Amazon SQS 和 Amazon S3
- **C.** AWS Transfer Family and Secrets Manager
  - AWS Transfer Family 和 Secret Manager
- **D.** Amazon S3 and Secrets Manager
  - Amazon S3 和机密管理器
- **E.** AWS Systems Manager and Amazon SQS
  - AWS Systems Manager 和 Amazon SQS

**正确答案 / Answer: `A, C`**

To meet the compliance requirements, the company can use AWS Transfer Family to set up an SFTP server that integrates directly with Amazon S3 for data storage. For secure management of credentials, AWS Secrets Manager can store and retrieve the credentials used for the SFTP process. This combination ensures secure, scalable, and compliant data transfers.

为了满足合规性要求，该公司可以使用 AWS Transfer Family 设置直接与 Amazon S3 集成的 SFTP 服务器以进行数据存储。为了安全管理凭证，AWS Secrets Manager 可以存储和检索用于 SFTP 过程的凭证。这种组合可确保安全、可扩展且合规的数据传输。

---

## Question 106  `Single answer`

**EN** A company needs to securely transfer large files from its on-premises environment to an Amazon S3 bucket. The solution should ensure that user credentials for access to the S3 bucket are not hard-coded into the transfer process. Which AWS managed service is the most appropriate for this use case?

**中** 公司需要将大文件从其本地环境安全地传输到 Amazon S3 存储桶。该解决方案应确保访问 S3 存储桶的用户凭据不会被硬编码到传输过程中。哪种 AWS 托管服务最适合此用例？

- **A.** AWS Transfer Family
  - AWS 传输系列
- **B.** Amazon Simple Queue Service (Amazon SQS)
  - Amazon 简单队列服务 (Amazon SQS)
- **C.** AWS Secrets Manager
  - AWS Secrets Manager
- **D.** AWS DataSync
  - AWS 数据同步

**正确答案 / Answer: `A`**

AWS Transfer Family is the most suitable service for securely transferring large files to Amazon S3 without hard-coding credentials. It supports popular file transfer protocols like SFTP, FTPS, and FTP, facilitating secure and seamless integration with on-premises environments.

AWS Transfer Family 是最适合将大型文件安全传输到 Amazon S3 的服务，无需硬编码凭证。它支持 SFTP、FTPS 和 FTP 等流行的文件传输协议，促进与本地环境的安全、无缝集成。

---

## Question 107  `Single answer`

**EN** A company is running a high-traffic e-commerce website and notices that their application is experiencing latency issues when retrieving frequently accessed product details from an Amazon RDS database. The company wants to implement a caching solution to improve performance and offload read requests from the database. Which caching strategy would be the most appropriate in this scenario?

**中** 一家公司正在运行一个高流量的电子商务网站，并注意到他们的应用程序在从 Amazon RDS 数据库检索经常访问的产品详细信息时遇到延迟问题。该公司希望实施缓存解决方案来提高性能并减轻数据库的读取请求。在这种情况下哪种缓存策略最合适？

- **A.** Implement Amazon ElastiCache using Memcached to cache frequently accessed product details.
  - 使用 Memcached 实现 Amazon ElastiCache 来缓存经常访问的产品详细信息。
- **B.** Enable Amazon RDS Read Replicas to serve read traffic for frequently accessed data.
  - 启用 Amazon RDS 只读副本来为频繁访问的数据提供读取流量。
- **C.** Use Amazon S3 for storing and caching product details to reduce database load.
  - 使用 Amazon S3 存储和缓存产品详细信息以减少数据库负载。
- **D.** Implement Amazon CloudFront to cache database queries closer to the users.
  - 实现 Amazon CloudFront 来缓存更靠近用户的数据库查询。

**正确答案 / Answer: `A`**

The best caching strategy for reducing latency and offloading read requests from a database is to use an in-memory caching solution like Amazon ElastiCache. Memcached is particularly effective for use cases that require simple, key-value data storage and high-speed retrieval, such as caching product details. Other options, like RDS Read Replicas or CloudFront, are not designed for this specific use case, while S3 is a storage solution and not a caching service.

减少延迟和卸载数据库读取请求的最佳缓存策略是使用 Amazon ElastiCache 等内存中缓存解决方案。 Memcached 对于需要简单的键值数据存储和高速检索的用例特别有效，例如缓存产品详细信息。其他选项（例如 RDS 只读副本或 CloudFront）并非针对此特定用例而设计，而 S3 是一种存储解决方案，而不是缓存服务。

---

## Question 108  `Single answer`

**EN** An e-commerce application serves a high volume of product catalog read requests and occasionally receives updates to product details. To improve performance and reduce latency, you are tasked with implementing a caching strategy. The application runs on AWS and uses an Amazon RDS database to store product data. Which caching strategy would BEST meet these requirements?

**中** 电子商务应用程序可处理大量产品目录读取请求，并且偶尔会收到产品详细信息的更新。为了提高性能并减少延迟，您的任务是实施缓存策略。该应用程序在 AWS 上运行，并使用 Amazon RDS 数据库来存储产品数据。哪种缓存策略最能满足这些要求？

- **A.** Use Amazon ElastiCache with a write-through caching strategy to cache query results.
  - 使用 Amazon ElastiCache 和直写式缓存策略来缓存查询结果。
- **B.** Use Amazon CloudFront to cache database query results and serve them to users.
  - 使用 Amazon CloudFront 缓存数据库查询结果并将其提供给用户。
- **C.** Use Amazon ElastiCache with a lazy loading caching strategy to cache query results.
  - 使用 Amazon ElastiCache 和延迟加载缓存策略来缓存查询结果。
- **D.** Use AWS Lambda to periodically pre-fetch the top products and store them in Amazon S3.
  - 使用 AWS Lambda 定期预取顶级产品并将其存储在 Amazon S3 中。

**正确答案 / Answer: `C`**

A lazy loading strategy with Amazon ElastiCache is well-suited for this scenario because it caches query results only when requested, ensuring optimal performance and cost-efficiency for read-heavy workloads. This approach minimizes latency for frequently accessed data while preventing unnecessary cache updates when product details change infrequently.

Amazon ElastiCache 的延迟加载策略非常适合这种场景，因为它仅在请求时才缓存查询结果，从而确保读取密集型工作负载的最佳性能和成本效率。这种方法可以最大限度地减少频繁访问数据的延迟，同时在产品详细信息不经常更改时防止不必要的缓存更新。

---

## Question 109  `Single answer`

**EN** A company is running a high-traffic e-commerce website that experiences unpredictable spikes in user activity during sales events. The backend consists of a relational database on Amazon RDS that is queried frequently for product details. To improve performance and reduce database load during these peak times, the company wants to implement a caching solution. Which approach should the company take?

**中** 一家公司正在运营一个高流量的电子商务网站，该网站在销售活动期间会出现不可预测的用户活动高峰。后端由 Amazon RDS 上的关系数据库组成，经常查询产品详细信息。为了提高性能并减少高峰时段的数据库负载，该公司希望实施缓存解决方案。公司应该采取哪种方法？

- **A.** Use Amazon ElastiCache with Redis to cache frequently accessed product details.
  - 将 Amazon ElastiCache 与 Redis 结合使用来缓存经常访问的产品详细信息。
- **B.** Enable read replicas for the Amazon RDS database to distribute read queries.
  - 为 Amazon RDS 数据库启用只读副本以分发读取查询。
- **C.** Store product details in Amazon S3 and serve them directly to users.
  - 将产品详细信息存储在 Amazon S3 中并直接向用户提供服务。
- **D.** Use DynamoDB to replace the relational database and handle all product queries.
  - 使用 DynamoDB 替换关系数据库并处理所有产品查询。

**正确答案 / Answer: `A`**

Caching is an effective strategy to reduce database load and improve application performance by storing frequently accessed data in a high-speed layer. Amazon ElastiCache with Redis is a managed caching service that can be used to cache the results of frequently executed queries, such as product details, reducing the need for the backend database to handle repetitive requests. This makes it the ideal solution for the given scenario.

缓存是通过将频繁访问的数据存储在高速层来减少数据库负载并提高应用程序性能的有效策略。 Amazon ElastiCache with Redis 是一种托管缓存服务，可用于缓存频繁执行的查询的结果，例如产品详细信息，从而减少后端数据库处理重复请求的需要。这使其成为给定场景的理想解决方案。

---

## Question 110  `Single answer`

**EN** A company operates a high-traffic e-commerce website where product details and customer reviews are accessed frequently. To improve performance and reduce the load on their backend database, the company decides to implement caching. Which strategy would be the most appropriate to ensure frequently accessed data is cached while ensuring updates to product details are reflected quickly in the cache?

**中** 一家公司运营着一个高流量的电子商务网站，人们经常访问该网站的产品详细信息和客户评论。为了提高性能并减少后端数据库的负载，该公司决定实施缓存。哪种策略最适合确保缓存频繁访问的数据，同时确保产品详细信息的更新快速反映在缓存中？

- **A.** Write-through caching
  - 直写式缓存
- **B.** Lazy loading (cache-aside)
  - 延迟加载（缓存侧）
- **C.** Read-through caching
  - 通读缓存
- **D.** Write-behind caching
  - 后写式缓存

**正确答案 / Answer: `B`**

Lazy loading (cache-aside) is the most appropriate strategy for this scenario because it allows the cache to store only frequently accessed data, reducing unnecessary usage of cache memory. Additionally, it gives control over cache invalidation and refresh mechanisms, ensuring that updates to product details are quickly reflected in the cache. This makes it ideal for the described read-heavy workload where data freshness is a priority.

延迟加载（cache-aside）是这种情况下最合适的策略，因为它允许缓存只存储经常访问的数据，减少不必要的缓存内存使用。此外，它还可以控制缓存失效和刷新机制，确保产品详细信息的更新快速反映在缓存中。这使得它非常适合所描述的以数据新鲜度为优先考虑的读取密集型工作负载。

---

## Question 111  `Single answer`

**EN** You are designing a microservices-based application on AWS. One of the services processes user requests and stores session data temporarily. The team is debating whether to use a stateless or stateful architecture for the service. Which design choice aligns with microservices best practices?

**中** 您正在 AWS 上设计一个基于微服务的应用程序。其中一项服务处理用户请求并临时存储会话数据。该团队正在讨论是否为该服务使用无状态或有状态架构。哪种设计选择符合微服务最佳实践？

- **A.** Design the service as stateless and store session data in an external data store like Amazon DynamoDB or ElastiCache.
  - 将服务设计为无状态，并将会话数据存储在 Amazon DynamoDB 或 ElastiCache 等外部数据存储中。
- **B.** Design the service as stateful and store session data within the service's local memory.
  - 将服务设计为有状态并将会话数据存储在服务的本地内存中。
- **C.** Design the service as stateful and use Amazon S3 for session storage.
  - 将服务设计为有状态并使用 Amazon S3 进行会话存储。
- **D.** Design the service as stateless but store session data directly in each service instance's local disk.
  - 将服务设计为无状态，但将会话数据直接存储在每个服务实例的本地磁盘中。

**正确答案 / Answer: `A`**

Microservices should be stateless to ensure they can scale horizontally and handle failures effectively. This involves offloading any stateful information, such as session data, to external systems like DynamoDB or ElastiCache. By doing so, individual service instances remain independent and replaceable, which supports fault tolerance and scalability.

微服务应该是无状态的，以确保它们可以水平扩展并有效地处理故障。这涉及将任何状态信息（例如会话数据）卸载到 DynamoDB 或 ElastiCache 等外部系统。通过这样做，各个服务实例保持独立且可替换，从而支持容错和可扩展性。

---

## Question 112  `Single answer`

**EN** You are designing a microservices-based application on AWS. One of the services processes thousands of independent requests daily and does not require storing session data between requests. What is the most appropriate design approach for this service?

**中** 您正在 AWS 上设计一个基于微服务的应用程序。其中一项服务每天处理数千个独立请求，并且不需要在请求之间存储会话数据。这项服务最合适的设计方法是什么？

- **A.** Design the service as a stateless workload and use Amazon SQS to decouple request processing.
  - 将服务设计为无状态工作负载，并使用 Amazon SQS 解耦请求处理。
- **B.** Design the service as a stateful workload and store session data in Amazon RDS for each request.
  - 将服务设计为有状态工作负载，并将每个请求的会话数据存储在 Amazon RDS 中。
- **C.** Design the service as a stateless workload and use Amazon ElastiCache to store session data temporarily.
  - 将服务设计为无状态工作负载，并使用 Amazon ElastiCache 临时存储会话数据。
- **D.** Design the service as a stateful workload and use Amazon DynamoDB for session data persistence.
  - 将服务设计为有状态工作负载，并使用 Amazon DynamoDB 进行会话数据持久化。

**正确答案 / Answer: `A`**

In a microservices architecture, stateless workloads are preferred for independent requests as they simplify scaling and reduce dependency on external storage for maintaining state. Amazon SQS is an excellent choice to decouple services, enabling asynchronous communication and reliable processing of requests. Stateful designs are unnecessarily complex and costly for this scenario.

在微服务架构中，无状态工作负载是独立请求的首选，因为它们简化了扩展并减少了对外部存储维护状态的依赖。 Amazon SQS 是解耦服务的绝佳选择，可实现异步通信和可靠的请求处理。对于这种情况，有状态设计不必要地复杂且成本高昂。

---

## Question 113  `Single answer`

**EN** A company is designing a microservices-based application on AWS. One of the microservices processes requests from users and stores metadata in an Amazon DynamoDB table. Another microservice performs data analytics by aggregating data from multiple sources and needs to maintain session state for complex computations. Which design approach should the company implement to optimize the architecture?

**中** 一家公司正在 AWS 上设计基于微服务的应用程序。其中一个微服务处理来自用户的请求并将元数据存储在 Amazon DynamoDB 表中。另一个微服务通过聚合来自多个源的数据来执行数据分析，并且需要维护复杂计算的会话状态。公司应该采用哪种设计方法来优化架构？

- **A.** Design the first microservice to be stateless and the second microservice to be stateful.
  - 将第一个微服务设计为无状态，将第二个微服务设计为有状态。
- **B.** Design both microservices to be stateless to ensure scalability.
  - 将两个微服务设计为无状态以确保可扩展性。
- **C.** Design the first microservice to be stateful and the second microservice to be stateless.
  - 将第一个微服务设计为有状态，将第二个微服务设计为无状态。
- **D.** Design both microservices to be stateful to maintain data consistency.
  - 将两个微服务设计为有状态的以保持数据一致性。

**正确答案 / Answer: `A`**

Microservices should be designed based on their specific workload requirements. Stateless services are ideal for handling requests that do not require session information, as they scale more easily. Stateful services are necessary when session state or data needs to persist across multiple operations, such as in the case of complex analytics. In this scenario, the first microservice can be stateless because it uses DynamoDB for metadata storage, while the second microservice needs to be stateful to handle session state during analytics computations.

微服务应根据其特定的工作负载需求进行设计。无状态服务非常适合处理不需要会话信息的请求，因为它们更容易扩展。当会话状态或数据需要在多个操作中持续存在时（例如在复杂分析的情况下），有状态服务是必要的。在此场景中，第一个微服务可以是无状态的，因为它使用 DynamoDB 进行元数据存储，而第二个微服务需要有状态才能在分析计算期间处理会话状态。

---

## Question 114  `Single answer`

**EN** You are designing a microservices-based architecture for a new e-commerce application that handles frequent user sessions and shopping cart data. Which design approach should you follow to ensure scalability and fault tolerance in the application?

**中** 您正在为新的电子商务应用程序设计一个基于微服务的架构，用于处理频繁的用户会话和购物车数据。您应该遵循哪种设计方法来确保应用程序的可扩展性和容错能力？

- **A.** Store session state and shopping cart data in the microservice's memory to reduce latency.
  - 将会话状态和购物车数据存储在微服务的内存中以减少延迟。
- **B.** Use a distributed cache or database to store session state and shopping cart data for scalability.
  - 使用分布式缓存或数据库来存储会话状态和购物车数据以实现可扩展性。
- **C.** Design microservices to maintain user session states locally to avoid external dependencies.
  - 设计微服务以在本地维护用户会话状态，以避免外部依赖。
- **D.** Use a stateful design for microservices to maintain a persistent connection with the client.
  - 使用微服务的有状态设计来维持与客户端的持久连接。

**正确答案 / Answer: `B`**

Microservices should be designed to be stateless whenever possible to maximize scalability and fault tolerance. For scenarios requiring state management, such as session state or shopping cart data, an external distributed cache or database (e.g., Amazon ElastiCache or DynamoDB) should be used. This ensures that data is not tied to any specific microservice instance and can be accessed by other instances if needed.

微服务应尽可能设计为无状态，以最大限度地提高可扩展性和容错能力。对于需要状态管理的场景，例如会话状态或购物车数据，应使用外部分布式缓存或数据库（例如 Amazon ElastiCache 或 DynamoDB）。这确保数据不绑定到任何特定的微服务实例，并且可以在需要时被其他实例访问。

---

## Question 115  `Select 2`

**EN** A company is building a serverless application that processes orders. When a customer places an order, the application should validate the order details, charge the customer, and update the inventory. Each step should be handled independently, and any failure in one step should not affect the others. The company also wants to ensure scalability and minimal operational overhead. Which AWS service combination is most suitable for implementing this event-driven architecture?

**中** 一家公司正在构建一个处理订单的无服务器应用程序。当客户下订单时，应用程序应验证订单详细信息、向客户收费并更新库存。每个步骤都应该独立处理，一个步骤的任何失败都不应影响其他步骤。该公司还希望确保可扩展性和最小的运营开销。哪种 AWS 服务组合最适合实施这种事件驱动架构？

- **A.** Amazon SQS and AWS Lambda
  - Amazon SQS 和 AWS Lambda
- **B.** Amazon SNS and AWS Lambda
  - Amazon SNS 和 AWS Lambda
- **C.** Amazon Kinesis Data Streams and AWS Lambda
  - Amazon Kinesis 数据流和 AWS Lambda
- **D.** Amazon RDS and AWS Lambda
  - Amazon RDS 和 AWS Lambda
- **E.** Amazon DynamoDB Streams and AWS Lambda
  - Amazon DynamoDB 流和 AWS Lambda

**正确答案 / Answer: `A, B`**

An event-driven architecture is ideal for decoupling services and ensuring scalability. Amazon SQS and AWS Lambda are suitable for handling asynchronous workflows and independent steps. For scenarios where multiple systems need to react to the same event, Amazon SNS and AWS Lambda are the best fit. These combinations minimize operational overhead while ensuring reliable and scalable event processing.

事件驱动的架构非常适合解耦服务并确保可扩展性。 Amazon SQS 和 AWS Lambda 适合处理异步工作流程和独立步骤。对于多个系统需要对同一事件做出反应的场景，Amazon SNS 和 AWS Lambda 是最适合的。这些组合最大限度地减少了运营开销，同时确保可靠且可扩展的事件处理。

---

## Question 116  `Select 3`

**EN** A company is designing an event-driven architecture to process customer orders. When an order is placed, the system should validate the order, charge the customer, and then send a confirmation email. These actions should be decoupled so that failures in one action do not affect the others. Which combination of AWS services should the company use to implement this architecture?

**中** 一家公司正在设计一个事件驱动的架构来处理客户订单。下订单后，系统应验证订单，向客户收费，然后发送确认电子邮件。这些操作应该是分离的，以便一个操作的失败不会影响其他操作。公司应该使用哪种 AWS 服务组合来实施此架构？

- **A.** Amazon SQS to decouple components and Amazon Lambda to process events
  - Amazon SQS 用于解耦组件和 Amazon Lambda 来处理事件
- **B.** Amazon SNS to fan out messages to multiple subscribers and Amazon Lambda to process events
  - Amazon SNS 将消息扇出到多个订阅者和 Amazon Lambda 来处理事件
- **C.** Amazon RDS to store the order data and Amazon EC2 to validate and process the orders
  - Amazon RDS 用于存储订单数据，Amazon EC2 用于验证和处理订单
- **D.** Amazon DynamoDB Streams to trigger downstream processing and Amazon Lambda for serverless compute
  - 用于触发下游处理的 Amazon DynamoDB Streams 和用于无服务器计算的 Amazon Lambda
- **E.** AWS Step Functions to orchestrate the workflow and Amazon EC2 to run tasks
  - AWS Step Functions 用于编排工作流程，Amazon EC2 用于运行任务

**正确答案 / Answer: `A, B, D`**

Event-driven architectures rely on services that decouple components and asynchronously process events. Amazon SQS and SNS are core messaging services that facilitate decoupling and event distribution. Amazon DynamoDB Streams allows capturing and processing changes to database items in an event-driven manner. These services, combined with Amazon Lambda's serverless compute capabilities, enable the company to process customer orders asynchronously and independently. Other options, like Amazon RDS or EC2, do not provide the required decoupling or event-driven capabilities.

事件驱动架构依赖于解耦组件并异步处理事件的服务。 Amazon SQS 和 SNS 是核心消息服务，有助于解耦和事件分发。 Amazon DynamoDB Streams 允许以事件驱动的方式捕获和处理对数据库项的更改。这些服务与 Amazon Lambda 的无服务器计算功能相结合，使该公司能够异步且独立地处理客户订单。其他选项（例如 Amazon RDS 或 EC2）不提供所需的解耦或事件驱动功能。

---

## Question 117  `Single answer`

**EN** A company is designing an event-driven architecture for processing orders placed on their e-commerce platform. When an order is placed, the system generates an order event that triggers multiple downstream services such as payment processing, inventory management, and email notifications. The company wants to ensure that all downstream services can process the events independently and at their own pace. Which AWS service is the most suitable for implementing this architecture?

**中** 一家公司正在设计一个事件驱动的架构来处理其电子商务平台上的订单。下订单时，系统会生成订单事件，触发多个下游服务，例如支付处理、库存管理和电子邮件通知。该公司希望确保所有下游服务都能按照自己的节奏独立处理事件。哪种 AWS 服务最适合实施该架构？

- **A.** Amazon Simple Queue Service (SQS)
  - 亚马逊简单队列服务 (SQS)
- **B.** Amazon Simple Notification Service (SNS)
  - 亚马逊简单通知服务 (SNS)
- **C.** Amazon EventBridge
  - Amazon EventBridge
- **D.** AWS Step Functions
  - AWS Step Functions

**正确答案 / Answer: `C`**

Amazon EventBridge is optimized for event-driven architectures. It enables event producers to send events to an event bus, which can then route those events to multiple targets like AWS services or custom applications. This ensures that downstream services can consume and process events independently and at their own pace, aligning perfectly with the company's requirements.

Amazon EventBridge 针对事件驱动架构进行了优化。它使事件生成者能够将事件发送到事件总线，然后事件总线可以将这些事件路由到多个目标，例如 AWS 服务或自定义应用程序。这确保下游服务可以按照自己的节奏独立使用和处理事件，从而完全符合公司的要求。

---

## Question 118  `Single answer`

**EN** A retail company wants to build an event-driven architecture to process customer orders. When a customer places an order, the system should validate the order, charge the customer, and update the inventory in separate components. Each component should operate independently, and failures in one component should not affect the others. Which solution meets these requirements?

**中** 一家零售公司希望构建一个事件驱动的架构来处理客户订单。当客户下订单时，系统应验证订单、向客户收费并更新单独组件中的库存。每个组件应独立运行，一个组件的故障不应影响其他组件。哪种解决方案满足这些要求？

- **A.** Use an Amazon SQS queue to decouple the components and have each component poll messages from the queue.
  - 使用 Amazon SQS 队列来解耦组件，并让每个组件从队列中轮询消息。
- **B.** Use Amazon SNS to publish an order event and have Lambda functions subscribed to handle validation, charging, and inventory updates.
  - 使用 Amazon SNS 发布订单事件并订阅 Lambda 函数来处理验证、计费和库存更新。
- **C.** Use Amazon Kinesis Data Streams to process the events in real-time and ensure order, charging, and inventory updates are handled sequentially.
  - 使用 Amazon Kinesis 数据流实时处理事件，并确保顺序处理订单、收费和库存更新。
- **D.** Use a single Amazon RDS database to store orders, and have each component poll the database for new order records.
  - 使用单个 Amazon RDS 数据库来存储订单，并让每个组件轮询数据库以获取新订单记录。

**正确答案 / Answer: `B`**

Amazon SNS is the best choice for this scenario because it supports a publish/subscribe model. When a customer places an order, an event can be published to an SNS topic, and multiple subscribers (such as Lambda functions) can process the event independently for validation, charging, and inventory updates. This ensures the components are decoupled, and failures in one component do not affect others. Other options either do not meet the decoupling requirement or are not suitable for event-driven architectures.

Amazon SNS 是此场景的最佳选择，因为它支持发布/订阅模型。当客户下订单时，可以将事件发布到 SNS 主题，并且多个订阅者（例如 Lambda 函数）可以独立处理该事件以进行验证、计费和库存更新。这可确保组件解耦，并且一个组件中的故障不会影响其他组件。其他选项要么不满足解耦要求，要么不适合事件驱动架构。

---

## Question 119  `Select 3`

**EN** A company runs a web application on a single Amazon EC2 instance with an attached Amazon RDS database. The application is experiencing increased traffic, causing performance issues. To address this, the company wants to improve scalability and ensure high availability. Which of the following solutions should they implement?

**中** 一家公司在带有附加 Amazon RDS 数据库的单个 Amazon EC2 实例上运行 Web 应用程序。应用程序的流量增加，导致性能问题。为了解决这个问题，该公司希望提高可扩展性并确保高可用性。他们应该实施以下哪些解决方案？

- **A.** Add an Elastic Load Balancer (ELB) and launch additional EC2 instances to distribute traffic
  - 添加 Elastic Load Balancer (ELB) 并启动其他 EC2 实例来分配流量
- **B.** Upgrade the EC2 instance type to a larger instance with more CPU and memory
  - 将 EC2 实例类型升级到具有更多 CPU 和内存的更大实例
- **C.** Enable Multi-AZ for the RDS database to ensure high availability
  - 为 RDS 数据库启用多可用区，保证高可用性
- **D.** Add an Auto Scaling group to dynamically launch or terminate EC2 instances based on demand
  - 添加 Auto Scaling 组以根据需求动态启动或终止 EC2 实例
- **E.** Use Amazon S3 to host the application instead of EC2 instances
  - 使用 Amazon S3 托管应用程序而不是 EC2 实例

**正确答案 / Answer: `A, C, D`**

To improve scalability and ensure high availability, the company should focus on horizontal scaling by adding an Elastic Load Balancer, enabling Auto Scaling, and implementing Multi-AZ for the RDS database. Vertical scaling (e.g., upgrading the instance type) can temporarily increase capacity but is not as effective for long-term scalability or fault tolerance. Hosting the application on S3 is not relevant for this scenario since the application is dynamic and relies on EC2 and RDS.

为了提高可扩展性并确保高可用性，公司应重点关注水平扩展，通过添加 Elastic Load Balancer、启用 Auto Scaling 以及为 RDS 数据库实现多可用区。垂直扩展（例如升级实例类型）可以暂时增加容量，但对于长期可扩展性或容错能力并不那么有效。在 S3 上托管应用程序与此场景无关，因为应用程序是动态的并且依赖于 EC2 和 RDS。

---

## Question 120  `Single answer`

**EN** A media streaming company uses an Amazon EC2 instance to host a web application that is experiencing increased traffic during peak hours. The company has noticed slower performance during these times. Which solution ensures scalability and optimal performance while minimizing downtime?

**中** 一家媒体流公司使用 Amazon EC2 实例来托管在高峰时段流量增加的 Web 应用程序。该公司注意到这段时间表现较慢。哪种解决方案可确保可扩展性和最佳性能，同时最大限度地减少停机时间？

- **A.** Upgrade the instance type to a larger instance for more CPU and memory resources.
  - 将实例类型升级到更大的实例以获得更多 CPU 和内存资源。
- **B.** Add more EC2 instances and place them behind an Application Load Balancer.
  - 添加更多 EC2 实例并将它们放置在 Application Load Balancer 后面。
- **C.** Use Auto Scaling to automatically scale vertically during peak traffic.
  - 使用 Auto Scaling 在流量高峰期间自动垂直扩展。
- **D.** Migrate the application to Amazon RDS for better scalability.
  - 将应用程序迁移到 Amazon RDS 以获得更好的可扩展性。

**正确答案 / Answer: `B`**

Horizontal scaling, achieved by adding more instances and distributing traffic with a load balancer, is the preferred solution for handling increased traffic in a scalable and resilient manner. Vertical scaling, while useful in some cases, has limitations in terms of scalability and downtime during upgrades.

水平扩展是通过添加更多实例并使用负载均衡器分配流量来实现的，是以可扩展和弹性的方式处理增加的流量的首选解决方案。垂直扩展虽然在某些情况下很有用，但在可扩展性和升级期间的停机时间方面存在限制。

---

## Question 121  `Select 4`

**EN** Your company runs a web application on an Amazon EC2 instance backed by a single Amazon RDS database. During peak traffic hours, the application experiences performance issues due to high CPU usage on the EC2 instance and increased latency in processing database queries. Which of the following actions can you take to address the performance issues?

**中** 您的公司在由单个 Amazon RDS 数据库支持的 Amazon EC2 实例上运行 Web 应用程序。在流量高峰时段，由于 EC2 实例上的 CPU 使用率较高以及处理数据库查询的延迟增加，应用程序会遇到性能问题。您可以采取以下哪些措施来解决性能问题？

- **A.** Upgrade the EC2 instance type to a larger instance with more CPU and memory.
  - 将 EC2 实例类型升级到具有更多 CPU 和内存的更大实例。
- **B.** Enable Auto Scaling for the EC2 instance to add more instances during peak hours.
  - 为 EC2 实例启用 Auto Scaling 以在高峰时段添加更多实例。
- **C.** Migrate the database to an Amazon RDS instance with a larger instance size.
  - 将数据库迁移到实例大小更大的 Amazon RDS 实例。
- **D.** Implement Amazon RDS Read Replicas to offload read queries from the primary database.
  - 实施 Amazon RDS 只读副本以卸载主数据库的读取查询。
- **E.** Use Amazon ElastiCache to cache frequently accessed data and reduce load on the database.
  - 使用 Amazon ElastiCache 来缓存经常访问的数据并减少数据库的负载。

**正确答案 / Answer: `A, C, D, E`**

This scenario involves both horizontal and vertical scaling to address performance issues. Upgrading the EC2 instance and RDS instance are vertical scaling solutions, where resources are increased on the existing instances. Adding RDS Read Replicas and using ElastiCache are horizontal scaling solutions that distribute the workload across multiple resources, helping to offload traffic from the primary database and improve overall performance. Auto Scaling for a single EC2 instance is not meaningful, as it cannot horizontally scale a single instance.

此场景涉及水平和垂直扩展以解决性能问题。升级 EC2 实例和 RDS 实例是垂直扩展解决方案，在现有实例上增加资源。添加 RDS 只读副本和使用 ElastiCache 是水平扩展解决方案，可将工作负载分配到多个资源，有助于减轻主数据库的流量并提高整体性能。 Auto Scaling 对于单个 EC2 实例没有意义，因为它无法水平扩展单个实例。

---

## Question 122  `Single answer`

**EN** A company is running an e-commerce website on an Amazon EC2 instance with increasing traffic during holiday seasons. They want to improve the scalability of their application to handle unpredictable spikes in traffic while minimizing downtime. Which approach should they use?

**中** 一家公司在 Amazon EC2 实例上运行一个电子商务网站，该网站在假期期间流量不断增加。他们希望提高应用程序的可扩展性，以处理不可预测的流量峰值，同时最大限度地减少停机时间。他们应该使用哪种方法？

- **A.** Scale the application vertically by upgrading the EC2 instance to a larger instance type.
  - 通过将 EC2 实例升级到更大的实例类型来垂直扩展应用程序。
- **B.** Implement an Auto Scaling group with multiple EC2 instances to scale horizontally based on demand.
  - 实施具有多个 EC2 实例的 Auto Scaling 组，以根据需求进行水平扩展。
- **C.** Use Amazon RDS with Multi-AZ deployment to improve database performance.
  - 使用 Amazon RDS 与多可用区部署来提高数据库性能。
- **D.** Deploy the application in multiple AWS Regions to improve scalability.
  - 在多个 AWS 区域中部署应用程序以提高可扩展性。

**正确答案 / Answer: `B`**

Horizontal scaling (adding more EC2 instances using an Auto Scaling group) is the best solution for handling unpredictable traffic spikes. It allows the infrastructure to grow or shrink dynamically as needed, ensuring cost-efficiency and high availability during peak traffic periods. Vertical scaling, while useful in certain scenarios, has physical limits and could lead to downtime during upgrades.

水平扩展（使用 Auto Scaling 组添加更多 EC2 实例）是处理不可预测的流量峰值的最佳解决方案。它允许基础设施根据需要动态增长或收缩，确保高峰流量期间的成本效益和高可用性。垂直扩展虽然在某些情况下有用，但具有物理限制，并可能导致升级期间停机。

---

## Question 123  `Single answer`

**EN** A global e-commerce company is experiencing high latencies for customers accessing its website from different regions worldwide. The backend servers are hosted on Amazon EC2 instances within a single AWS Region. The company wants to improve website performance for international users by caching static content (such as images, CSS, and JavaScript) closer to their locations. What is the most appropriate solution to address this requirement?

**中** 一家全球电子商务公司的客户从全球不同地区访问其网站时遇到了很高的延迟。后端服务器托管在单个 AWS 区域内的 Amazon EC2 实例上。该公司希望通过在靠近国际用户位置的地方缓存静态内容（例如图像、CSS 和 JavaScript）来提高国际用户的网站性能。满足这一要求的最合适的解决方案是什么？

- **A.** Use Amazon CloudFront to distribute and cache static content across edge locations globally.
  - 使用 Amazon CloudFront 在全球边缘站点之间分发和缓存静态内容。
- **B.** Increase the instance size of the backend Amazon EC2 servers to handle more traffic.
  - 增加后端 Amazon EC2 服务器的实例大小以处理更多流量。
- **C.** Deploy additional Amazon EC2 instances in multiple AWS Regions to reduce latency for international users.
  - 在多个 AWS 区域部署额外的 Amazon EC2 实例，以减少国际用户的延迟。
- **D.** Create an S3 bucket in each AWS Region and use cross-region replication to serve static content.
  - 在每个 AWS 区域中创建一个 S3 存储桶并使用跨区域复制来提供静态内容。

**正确答案 / Answer: `A`**

Amazon CloudFront is specifically designed to handle scenarios like this by caching content at edge locations closest to users. It minimizes latency by serving cached content from the nearest edge location and supports static and dynamic content delivery. This makes it the most appropriate choice for improving website performance for international users.

Amazon CloudFront 专门设计用于通过在最靠近用户的边缘位置缓存内容来处理此类场景。它通过从最近的边缘位置提供缓存内容来最大限度地减少延迟，并支持静态和动态内容交付。这使其成为国际用户提高网站性能的最合适选择。

---

## Question 124  `Single answer`

**EN** Your company operates a global e-commerce platform hosted in an AWS Region. Customers across the globe report that the website is slow to load, especially when accessing large media files such as images and videos. You need to improve the performance for these customers while minimizing latency and reducing the load on your web servers. Which solution is the most appropriate to achieve this?

**中** 您的公司运营着一个托管于 AWS 区域的全球电子商务平台。全球客户报告该网站加载速度缓慢，尤其是在访问图像和视频等大型媒体文件时。您需要提高这些客户的性能，同时最大限度地减少延迟并减少 Web 服务器上的负载。哪种解决方案最适合实现这一目标？

- **A.** Use AWS CloudFront to cache static content closer to users and serve it from edge locations.
  - 使用 AWS CloudFront 缓存更靠近用户的静态内容并从边缘站点提供服务。
- **B.** Migrate your application to another AWS Region closer to the majority of your customers.
  - 将您的应用程序迁移到距离大多数客户更近的另一个 AWS 区域。
- **C.** Enable Amazon S3 Transfer Acceleration for your website.
  - 为您的网站启用 Amazon S3 传输加速。
- **D.** Deploy additional EC2 instances in multiple Regions to handle customer requests.
  - 在多个区域部署额外的 EC2 实例来处理客户请求。

**正确答案 / Answer: `A`**

AWS CloudFront is specifically designed to serve static and dynamic content through a global network of edge locations, significantly reducing latency for users worldwide. By caching content closer to the end-user, it minimizes the load on the origin servers and provides a seamless experience for customers regardless of their geographical location. This makes it the most appropriate solution for improving the performance of the global e-commerce platform.

AWS CloudFront 专门设计用于通过全球边缘站点网络提供静态和动态内容，从而显着减少全球用户的延迟。通过在更靠近最终用户的位置缓存内容，它可以最大程度地减少源服务器上的负载，并为客户提供无缝体验，无论其地理位置如何。这使其成为提高全球电子商务平台性能的最合适的解决方案。

---

## Question 125  `Select 3`

**EN** A company is deploying a global e-commerce platform and wants to ensure low latency for customers accessing their website from different parts of the world. The platform consists of static assets such as product images, JavaScript files, and CSS files, as well as dynamic content that is generated by backend servers. Which of the following actions should the company take to optimize performance and reduce latency for their users?

**中** 一家公司正在部署一个全球电子商务平台，并希望确保来自世界不同地区的客户访问其网站的延迟较低。该平台由产品图像、JavaScript 文件和 CSS 文件等静态资产以及后端服务器生成的动态内容组成。公司应采取以下哪些措施来优化性能并减少用户的延迟？

- **A.** Use Amazon CloudFront to cache static assets closer to the users.
  - 使用 Amazon CloudFront 缓存更靠近用户的静态资源。
- **B.** Enable CloudFront's caching for dynamic content by configuring cache behaviors and query string parameters.
  - 通过配置缓存行为和查询字符串参数，启用 CloudFront 的动态内容缓存。
- **C.** Deploy Amazon S3 Transfer Acceleration for all content delivery.
  - 为所有内容交付部署 Amazon S3 传输加速。
- **D.** Use Route 53 Geolocation Routing to direct users to the closest AWS Region where the backend servers are deployed.
  - 使用 Route 53 地理位置路由将用户定向到部署后端服务器的最近的 AWS 区域。
- **E.** Enable CloudFront's Origin Shield to reduce load on the origin servers.
  - 启用 CloudFront 的 Origin Shield 以减少源服务器上的负载。

**正确答案 / Answer: `A, B, E`**

To optimize content delivery for a global user base, Amazon CloudFront is the best choice for caching both static and dynamic content at edge locations. CloudFront reduces latency by delivering content from the closest edge location to the user. Additionally, enabling Origin Shield further reduces the load on origin servers and enhances performance. S3 Transfer Acceleration and Route 53 Geolocation Routing are not suitable for this scenario as they do not directly address global content delivery and caching.

为了优化全球用户群的内容交付，Amazon CloudFront 是在边缘位置缓存静态和动态内容的最佳选择。 CloudFront 通过将内容从最近的边缘位置传送给用户来减少延迟。此外，启用 Origin Shield 进一步减少了源服务器的负载并提高了性能。 S3 传输加速和 Route 53 地理定位路由不适合此场景，因为它们不直接解决全局内容交付和缓存问题。

---

## Question 126  `Select 3`

**EN** A global e-commerce company is experiencing high latency for users accessing their website from different regions of the world. The website hosts both static assets (like product images) and dynamic content (like personalized recommendations) on an EC2 instance behind an Application Load Balancer (ALB) in a single AWS region. How can the company reduce latency for global users while minimizing changes to their existing architecture?

**中** 一家全球电子商务公司正在经历来自世界不同地区的用户访问其网站的高延迟问题。该网站在单个 AWS 区域中 Application Load Balancer (ALB) 后面的 EC2 实例上托管静态资产（如产品图像）和动态内容（如个性化推荐）。公司如何减少全球用户的延迟，同时最大限度地减少对现有架构的更改？

- **A.** Use Amazon CloudFront to cache static assets closer to users.
  - 使用 Amazon CloudFront 缓存更靠近用户的静态资源。
- **B.** Configure Amazon CloudFront to serve dynamic content from the origin.
  - 配置 Amazon CloudFront 以提供来自源的动态内容。
- **C.** Enable AWS Global Accelerator to route traffic to the nearest AWS edge location.
  - 启用 AWS Global Accelerator 将流量路由到最近的 AWS 边缘站点。
- **D.** Deploy the entire application to multiple AWS regions and use Route 53 for DNS-based latency routing.
  - 将整个应用程序部署到多个 AWS 区域，并使用 Route 53 进行基于 DNS 的延迟路由。
- **E.** Use an S3 bucket with cross-region replication to store and serve static assets.
  - 使用具有跨区域复制功能的 S3 存储桶来存储和提供静态资产。

**正确答案 / Answer: `A, B, C`**

The best solution to reduce latency for global users with minimal architectural changes is to use Amazon CloudFront and AWS Global Accelerator. CloudFront delivers both static and dynamic content from edge locations, improving latency for global users without requiring application changes. AWS Global Accelerator further enhances performance by routing traffic to the nearest AWS edge location. Deploying the application to multiple regions or using S3 cross-region replication is either overly complex or less efficient in this scenario.

通过最少的架构更改来减少全球用户延迟的最佳解决方案是使用 Amazon CloudFront 和 AWS Global Accelerator。 CloudFront 从边缘位置提供静态和动态内容，从而改善全球用户的延迟，而无需更改应用程序。 AWS Global Accelerator 通过将流量路由到最近的 AWS 边缘站点来进一步增强性能。在这种情况下，将应用程序部署到多个区域或使用 S3 跨区域复制要么过于复杂，要么效率较低。

---

## Question 127  `Select 2`

**EN** Your company wants to migrate a monolithic application to containers to improve scalability and portability. The application currently runs on multiple EC2 instances and uses a shared file system for storing logs. Which of the following steps would help you design a successful migration to containers on AWS? (Choose TWO)

**中** 您的公司希望将单体应用程序迁移到容器以提高可扩展性和可移植性。该应用程序当前在多个 EC2 实例上运行，并使用共享文件系统来存储日志。以下哪些步骤可以帮助您成功迁移到 AWS 上的容器？ （选择两项）

- **A.** Break the monolithic application into smaller microservices and containerize each component separately.
  - 将单体应用程序分解为更小的微服务，并将每个组件单独容器化。
- **B.** Use AWS Fargate to run the containers without managing the underlying EC2 instances.
  - 使用 AWS Fargate 运行容器而无需管理底层 EC2 实例。
- **C.** Continue using the shared file system directly inside the containers without modifications.
  - 继续直接在容器内使用共享文件系统，无需修改。
- **D.** Store the application configuration in environment variables or AWS Secrets Manager for better portability.
  - 将应用程序配置存储在环境变量或 AWS Secrets Manager 中以获得更好的可移植性。
- **E.** Run the containers on Amazon Lightsail for better cost optimization.
  - 在 Amazon Lightsail 上运行容器以实现更好的成本优化。

**正确答案 / Answer: `A, D`**

To successfully migrate a monolithic application into containers, it's important to break the application into smaller, independently managed microservices. Using environment variables or AWS Secrets Manager for configurations ensures better portability and security. These steps help align with the best practices for containerization and application modernization on AWS.

为了成功地将单体应用程序迁移到容器中，将应用程序分解为更小的、独立管理的微服务非常重要。使用环境变量或 AWS Secrets Manager 进行配置可确保更好的可移植性和安全性。这些步骤有助于与 AWS 上的容器化和应用程序现代化的最佳实践保持一致。

---

## Question 128  `Select 3`

**EN** A company wants to migrate its monolithic application to containers on AWS. The application currently runs on a virtual machine and has dependencies on a relational database. The company aims to modernize the architecture while minimizing downtime during the migration. Which combination of steps should the solutions architect recommend?

**中** 一家公司希望将其单体应用程序迁移到 AWS 上的容器。该应用程序当前运行在虚拟机上，并且依赖于关系数据库。该公司的目标是实现架构现代化，同时最大限度地减少迁移期间的停机时间。解决方案架构师应该推荐哪种步骤组合？

- **A.** Containerize the application using Docker and push the container image to Amazon Elastic Container Registry (ECR).
  - 使用 Docker 对应用程序进行容器化，并将容器映像推送到 Amazon Elastic Container Registry (ECR)。
- **B.** Refactor the application to a microservices architecture before containerization.
  - 在容器化之前将应用程序重构为微服务架构。
- **C.** Use AWS Database Migration Service (AWS DMS) to migrate the database to Amazon RDS with minimal downtime.
  - 使用 AWS Database Migration Service (AWS DMS) 将数据库迁移到 Amazon RDS，同时最大限度地减少停机时间。
- **D.** Deploy the containerized application to Amazon Elastic Kubernetes Service (EKS) for orchestration.
  - 将容器化应用程序部署到 Amazon Elastic Kubernetes Service (EKS) 进行编排。
- **E.** Use AWS Snowball to migrate the application data to Amazon S3 for storage.
  - 使用 AWS Snowball 将应用数据迁移到 Amazon S3 进行存储。

**正确答案 / Answer: `A, C, D`**

The correct steps for migrating applications into containers on AWS involve containerizing the application, migrating its dependencies such as databases, and deploying it to a suitable container orchestration service like Amazon EKS. Refactoring to microservices is optional and depends on specific business requirements, while AWS Snowball is not relevant in this context.

将应用程序迁移到 AWS 上的容器的正确步骤包括对应用程序进行容器化、迁移其依赖项（例如数据库）以及将其部署到合适的容器编排服务（例如 Amazon EKS）。重构微服务是可选的，并且取决于特定的业务需求，而 AWS Snowball 在此上下文中不相关。

---

## Question 129  `Select 3`

**EN** A company wants to migrate their existing monolithic application into containers to improve scalability and resource utilization. They are planning to use Amazon ECS with the Fargate launch type. What steps should they take to ensure a successful containerization and deployment of their application?

**中** 一家公司希望将其现有的单体应用程序迁移到容器中，以提高可扩展性和资源利用率。他们计划将 Amazon ECS 与 Fargate 发射类型结合使用。他们应该采取哪些步骤来确保成功容器化和部署其应用程序？

- **A.** Refactor the application into smaller microservices to improve scalability and deployability.
  - 将应用程序重构为更小的微服务，以提高可扩展性和可部署性。
- **B.** Create a Dockerfile to containerize the application and define its runtime environment.
  - 创建 Dockerfile 以容器化应用程序并定义其运行时环境。
- **C.** Use AWS CloudFormation to build and manage the container images directly.
  - 使用 AWS CloudFormation 直接构建和管理容器镜像。
- **D.** Define task definitions in Amazon ECS to specify container configurations, resource requirements, and networking options.
  - 在 Amazon ECS 中定义任务定义以指定容器配置、资源要求和网络选项。
- **E.** Configure an Amazon EFS volume to store container images during runtime.
  - 配置 Amazon EFS 卷以在运行时存储容器映像。

**正确答案 / Answer: `A, B, D`**

To migrate an application into containers using Amazon ECS with Fargate, the application should first be refactored into smaller microservices, if necessary, to maximize scalability. A Dockerfile is required to package the application into a container image. Task definitions in ECS are critical to define how containers run within the cluster. AWS CloudFormation and Amazon EFS are valuable but do not directly contribute to building or running the containers themselves, making these options incorrect for this scenario.

要使用 Amazon ECS 和 Fargate 将应用程序迁移到容器中，如有必要，应首先将应用程序重构为更小的微服务，以最大限度地提高可扩展性。需要 Dockerfile 将应用程序打包到容器映像中。 ECS 中的任务定义对于定义容器在集群中的运行方式至关重要。 AWS CloudFormation 和 Amazon EFS 很有价值，但并不直接有助于构建或运行容器本身，因此这些选项不适合此场景。

---

## Question 130  `Select 2`

**EN** A company wants to migrate their monolithic application to a containerized architecture using AWS. The application relies on a relational database and needs to ensure high scalability and availability. Which combination of AWS services can facilitate this migration effectively?

**中** 一家公司希望使用 AWS 将其单体应用程序迁移到容器化架构。应用程序依赖于关系数据库，需要保证高可扩展性和可用性。哪种 AWS 服务组合可以有效促进此迁移？

- **A.** Amazon ECS for container orchestration and Amazon RDS for the relational database
  - 用于容器编排的 Amazon ECS 和用于关系数据库的 Amazon RDS
- **B.** Amazon EKS for container orchestration and Amazon Aurora for the relational database
  - Amazon EKS 用于容器编排，Amazon Aurora 用于关系数据库
- **C.** AWS Fargate for serverless container management and Amazon DynamoDB for the relational database
  - 用于无服务器容器管理的 AWS Fargate 和用于关系数据库的 Amazon DynamoDB
- **D.** Amazon Lightsail for container orchestration and Amazon ElastiCache for the relational database
  - 用于容器编排的 Amazon Lightsail 和用于关系数据库的 Amazon ElastiCache
- **E.** AWS App Runner for deploying containers and Amazon RDS for the relational database
  - 用于部署容器的 AWS App Runner 和用于关系数据库的 Amazon RDS

**正确答案 / Answer: `A, B`**

To migrate applications into containers effectively on AWS, you need a container orchestration service and a compatible relational database service that ensures scalability and high availability. Amazon ECS and EKS are the primary services for container orchestration on AWS, while Amazon RDS and Aurora are managed relational database services that meet the requirements. AWS Fargate, Lightsail, and App Runner either lack full orchestration capabilities or focus on different use cases, making them less ideal for this scenario.

为了将应用程序有效地迁移到 AWS 上的容器中，您需要容器编排服务和兼容的关系数据库服务来确保可扩展性和高可用性。 Amazon ECS 和 EKS 是 AWS 上容器编排的主要服务，而 Amazon RDS 和 Aurora 是满足要求的托管关系数据库服务。 AWS Fargate、Lightsail 和 App Runner 要么缺乏完整的编排功能，要么专注于不同的用例，这使得它们不太适合这种场景。

---

## Question 131  `Select 3`

**EN** A company hosts a web application that serves dynamic content to its users. The application is deployed across multiple Availability Zones for high availability. To improve the scalability and availability of the application, the company plans to use an Application Load Balancer (ALB). Which of the following configurations would be MOST appropriate for the ALB?

**中** 一家公司托管一个为其用户提供动态内容的 Web 应用程序。该应用程序跨多个可用区部署以实现高可用性。为了提高应用程序的可扩展性和可用性，该公司计划使用 Application Load Balancer (ALB)。以下哪项配置最适合 ALB？

- **A.** Configure the ALB to route requests to targets based on the path of the URL.
  - 配置 ALB 以根据 URL 的路径将请求路由到目标。
- **B.** Associate the ALB with an Auto Scaling group to automatically adjust the number of targets.
  - 将 ALB 与 Auto Scaling 组关联以自动调整目标数量。
- **C.** Enable sticky sessions on the ALB to ensure traffic is consistently routed to the same target.
  - 在 ALB 上启用粘性会话以确保流量始终路由到同一目标。
- **D.** Use the ALB's WebSocket support to handle real-time communication between clients and servers.
  - 使用 ALB 的 WebSocket 支持来处理客户端和服务器之间的实时通信。
- **E.** Configure Cross-Zone Load Balancing to ensure traffic is evenly distributed across targets in all Availability Zones.
  - 配置跨区域负载平衡以确保流量均匀分布在所有可用区的目标之间。

**正确答案 / Answer: `A, D, E`**

The Application Load Balancer (ALB) supports features such as path-based routing, WebSocket connections, and Cross-Zone Load Balancing, which are essential for dynamic, highly available, and scalable applications. While sticky sessions and Auto Scaling group associations are valid configurations in some scenarios, they do not align with this specific use case's goals of improving scalability and availability.

Application Load Balancer (ALB) 支持基于路径的路由、WebSocket 连接和跨区域负载平衡等功能，这些功能对于动态、高可用性和可扩展的应用程序至关重要。虽然粘性会话和 Auto Scaling 组关联在某些情况下是有效的配置，但它们与此特定用例提高可扩展性和可用性的目标并不相符。

---

## Question 132  `Select 3`

**EN** Your company is hosting a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application serves different content based on the URL path. For example, requests to '/api/ ' should route to a set of instances running APIs, while requests to '/static/ ' should route to instances hosting static files. How can you configure the ALB to achieve this routing behavior?

**中** 您的公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。应用程序根据 URL 路径提供不同的内容。例如，对“/api/”的请求应路由到一组运行 API 的实例，而对“/static/”的请求应路由到托管静态文件的实例。如何配置 ALB 来实现此路由行为？

- **A.** Define a listener rule to forward requests with the path pattern '/api/*' to a specific target group.
  - 定义侦听器规则以将路径模式为“/api/*”的请求转发到特定目标组。
- **B.** Define a listener rule to forward requests with the path pattern '/static/*' to a specific target group.
  - 定义侦听器规则以将具有路径模式“/static/*”的请求转发到特定目标组。
- **C.** Use host-based routing instead of path-based routing, as it is required for this routing behavior.
  - 使用基于主机的路由而不是基于路径的路由，因为这是此路由行为所必需的。
- **D.** Create an additional ALB to handle requests to '/static/*' and associate it with the same EC2 instances.
  - 创建一个额外的 ALB 来处理对“/static/*”的请求并将其与相同的 EC2 实例关联。
- **E.** Set up path-based routing rules in the ALB listener to forward requests based on URL path patterns.
  - 在 ALB 侦听器中设置基于路径的路由规则，以根据 URL 路径模式转发请求。

**正确答案 / Answer: `A, B, E`**

To achieve the desired routing behavior, you can use the path-based routing feature of an Application Load Balancer. By defining listener rules with specific path patterns (e.g., '/api/
' and '/static/
'), the ALB can forward requests to appropriate target groups. Host-based routing is not required here because the routing is not based on hostnames. Additionally, a single ALB is sufficient for handling multiple routing rules.

要实现所需的路由行为，您可以使用 Application Load Balancer 的基于路径的路由功能。通过使用特定路径模式定义侦听器规则（例如，'/api/
'和'/静态/
'），ALB 可以将请求转发到适当的目标组。这里不需要基于主机的路由，因为路由不基于主机名。此外，单个 ALB 足以处理多个路由规则。

---

## Question 133  `Single answer`

**EN** A company hosts a web application with dynamic and static content. They want to distribute incoming traffic across multiple EC2 instances and ensure that the application can handle HTTP and HTTPS traffic. Additionally, they want to offload SSL/TLS termination to reduce the workload on the EC2 instances. Which AWS service and configuration should they use?

**中** 一家公司托管一个包含动态和静态内容的 Web 应用程序。他们希望在多个 EC2 实例之间分配传入流量，并确保应用程序可以处理 HTTP 和 HTTPS 流量。此外，他们希望卸载 SSL/TLS 终止以减少 EC2 实例上的工作负载。他们应该使用哪种 AWS 服务和配置？

- **A.** Use an Application Load Balancer with listeners configured for both HTTP and HTTPS, and enable SSL/TLS termination.
  - 使用 Application Load Balancer 并为 HTTP 和 HTTPS 配置侦听器，并启用 SSL/TLS 终止。
- **B.** Use a Network Load Balancer with listeners configured for both HTTP and HTTPS, and enable SSL/TLS termination.
  - 使用 Network Load Balancer 并为 HTTP 和 HTTPS 配置侦听器，并启用 SSL/TLS 终止。
- **C.** Use an Application Load Balancer with only an HTTP listener and configure the EC2 instances to handle HTTPS traffic.
  - 使用仅具有 HTTP 侦听器的 Application Load Balancer 并配置 EC2 实例以处理 HTTPS 流量。
- **D.** Use a Classic Load Balancer with both HTTP and HTTPS listeners for traffic distribution.
  - 使用具有 HTTP 和 HTTPS 侦听器的经典负载均衡器进行流量分配。

**正确答案 / Answer: `A`**

An Application Load Balancer is the best choice for web applications requiring HTTP and HTTPS traffic distribution. It supports SSL/TLS termination, reducing the workload on backend EC2 instances, and provides features like path-based routing and host-based routing that are not available in Classic Load Balancers. Network Load Balancers are better suited for high-throughput, low-latency TCP/UDP traffic rather than HTTP-based applications.

Application Load Balancer 是需要 HTTP 和 HTTPS 流量分配的 Web 应用程序的最佳选择。它支持 SSL/TLS 终止，减少后端 EC2 实例的工作负载，并提供经典负载均衡器中不提供的基于路径的路由和基于主机的路由等功能。 Network Load Balancer 更适合高吞吐量、低延迟的 TCP/UDP 流量，而不是基于 HTTP 的应用程序。

---

## Question 134  `Single answer`

**EN** You are designing a web application that needs to support millions of users and requires seamless scaling based on traffic demand. The application consists of multiple microservices, each responsible for a specific function (e.g., authentication, payment processing, and content delivery). You want to route traffic to specific microservices based on the URL path of incoming requests (e.g., '/auth' should route to the authentication service). Which type of load balancer should you use to meet these requirements?

**中** 您正在设计一个 Web 应用程序，需要支持数百万用户，并需要根据流量需求进行无缝扩展。该应用程序由多个微服务组成，每个微服务负责特定功能（例如身份验证、支付处理和内容交付）。您希望根据传入请求的 URL 路径将流量路由到特定的微服务（例如，“/auth”应路由到身份验证服务）。您应该使用哪种类型的负载均衡器来满足这些要求？

- **A.** Application Load Balancer
  - Application Load Balancer
- **B.** Network Load Balancer
  - Network Load Balancer
- **C.** Classic Load Balancer
  - 经典负载均衡器
- **D.** Gateway Load Balancer
  - 网关负载均衡器

**正确答案 / Answer: `A`**

In this scenario, the requirement is to route traffic to different microservices based on the URL path, which is a feature supported by the Application Load Balancer (ALB). ALB is specifically designed for HTTP/HTTPS traffic and provides advanced routing mechanisms like path-based and host-based routing, making it the most suitable choice for this architecture. The other types of load balancers either lack these features or are designed for entirely different use cases.

该场景下的需求是根据 URL 路径将流量路由到不同的微服务，这是 Application Load Balancer（ALB）支持的功能。 ALB 专为 HTTP/HTTPS 流量而设计，提供基于路径和基于主机的路由等高级路由机制，使其成为该架构的最合适选择。其他类型的负载均衡器要么缺乏这些功能，要么是针对完全不同的用例而设计的。

---

## Question 135  `Select 3`

**EN** You are designing a multi-tier web application on AWS consisting of a front-end tier, an application tier, and a database tier. The front-end tier is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB). The application tier is also hosted on EC2 instances, and the database tier is managed using Amazon RDS. Which of the following design decisions will improve the scalability and fault tolerance of the application?

**中** 您正在 AWS 上设计一个多层 Web 应用程序，其中包括前端层、应用程序层和数据库层。前端层托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上。应用程序层也托管在 EC2 实例上，数据库层使用 Amazon RDS 进行管理。以下哪项设计决策将提高应用程序的可扩展性和容错能力？

- **A.** Configure Auto Scaling groups for both the front-end and application-tier EC2 instances.
  - 为前端和应用程序层 EC2 实例配置 Auto Scaling 组。
- **B.** Use Multi-AZ deployment for the Amazon RDS database.
  - 对 Amazon RDS 数据库使用多可用区部署。
- **C.** Deploy the application-tier EC2 instances in a single Availability Zone to reduce latency.
  - 在单个可用区中部署应用程序层 EC2 实例以减少延迟。
- **D.** Use Elastic Load Balancing to distribute traffic across the application-tier EC2 instances.
  - 使用 Elastic Load Balancing 在应用层 EC2 实例之间分配流量。
- **E.** Store session state in the application-tier EC2 instance memory to improve performance.
  - 将会话状态存储在应用层 EC2 实例内存中以提高性能。

**正确答案 / Answer: `A, B, D`**

In a multi-tier architecture, scalability and fault tolerance are key design considerations. Auto Scaling and Elastic Load Balancing ensure that the system can handle varying traffic loads and remain available even in the event of instance failures. Multi-AZ deployment for Amazon RDS is a best practice to maintain database availability in the event of infrastructure failure. Storing session state in EC2 instance memory and deploying in a single Availability Zone are counterproductive to fault tolerance and scalability.

在多层架构中，可扩展性和容错性是关键的设计考虑因素。 Auto Scaling 和 Elastic Load Balancing 确保系统可以处理不同的流量负载，并且即使在实例发生故障时也保持可用。 Amazon RDS 的多可用区部署是在基础设施发生故障时维持数据库可用性的最佳实践。将会话状态存储在 EC2 实例内存中并部署在单个可用区中会对容错能力和可扩展性产生反作用。

---

## Question 136  `Select 3`

**EN** A company is designing a web application using a multi-tier architecture on AWS. The architecture consists of a front-end layer, an application layer, and a database layer. The front-end is hosted on Amazon EC2 instances behind an Elastic Load Balancer (ELB). The application layer is also hosted on EC2 instances and communicates with the database layer, which uses Amazon RDS. The company needs to ensure that the application is highly available, scalable, and secure. Which combination of actions should be taken to meet these requirements?

**中** 一家公司正在 AWS 上使用多层架构设计 Web 应用程序。该架构由前端层、应用层和数据库层组成。前端托管在 Elastic Load Balancer (ELB) 后面的 Amazon EC2 实例上。应用程序层也托管在 EC2 实例上，并与使用 Amazon RDS 的数据库层进行通信。公司需要确保应用程序具有高可用性、可扩展性和安全性。应采取哪些行动组合来满足这些要求？

- **A.** Use Auto Scaling groups for EC2 instances in both the front-end and application layers.
  - 在前端层和应用程序层中对 EC2 实例使用 Auto Scaling 组。
- **B.** Place the EC2 instances in a single Availability Zone to minimize latency.
  - 将 EC2 实例放置在单个可用区中以最大限度地减少延迟。
- **C.** Configure a security group to allow only the required ports between the front-end, application, and database layers.
  - 配置安全组以仅允许前端、应用程序和数据库层之间所需的端口。
- **D.** Enable Multi-AZ deployment for the Amazon RDS database.
  - 为 Amazon RDS 数据库启用多可用区部署。
- **E.** Install a single EC2 instance as a bastion host and allow SSH access from the public internet.
  - 安装单个 EC2 实例作为堡垒主机并允许从公共互联网进行 SSH 访问。

**正确答案 / Answer: `A, C, D`**

A multi-tier architecture on AWS requires proper configuration to ensure high availability, scalability, and security. Auto Scaling groups improve scalability and fault tolerance for the front-end and application layers. Security groups must be configured to restrict access between layers to only the necessary ports, maintaining security. Amazon RDS with Multi-AZ deployment ensures high availability for the database layer by providing failover capability. Placing resources in a single Availability Zone or relying on a single bastion host introduces risks to availability and security.

AWS 上的多层架构需要正确的配置以确保高可用性、可扩展性和安全性。 Auto Scaling 组提高了前端和应用程序层的可扩展性和容错能力。必须配置安全组以将层之间的访问限制为仅必要的端口，以维护安全性。多可用区部署的 Amazon RDS 通过提供故障转移功能确保数据库层的高可用性。将资源放置在单个可用区或依赖单个堡垒主机会给可用性和安全性带来风险。

---

## Question 137  `Select 3`

**EN** An e-commerce company is designing a multi-tier application on AWS. The application requires a web tier, an application tier, and a database tier. The web tier should automatically scale based on incoming traffic, the application tier must securely communicate with the database tier, and the database should be highly available. Which combination of AWS services will best meet these requirements?

**中** 一家电子商务公司正在 AWS 上设计多层应用程序。该应用程序需要 Web 层、应用程序层和数据库层。 Web 层应根据传入流量自动扩展，应用程序层必须与数据库层安全通信，并且数据库应具有高可用性。哪种 AWS 服务组合最能满足这些要求？

- **A.** Use an Auto Scaling group with Application Load Balancer for the web tier
  - 将 Auto Scaling 组与 Application Load Balancer 用于 Web 层
- **B.** Deploy the application tier on Amazon EC2 instances in a private subnet and restrict access using security groups
  - 在私有子网中的 Amazon EC2 实例上部署应用程序层并使用安全组限制访问
- **C.** Use Amazon RDS Multi-AZ deployment for the database tier
  - 对数据库层使用 Amazon RDS 多可用区部署
- **D.** Deploy the database tier on an Amazon S3 bucket to store relational data
  - 在 Amazon S3 存储桶上部署数据库层以存储关系数据
- **E.** Use AWS Lambda to replace the application tier for secure database communication
  - 使用 AWS Lambda 替换应用层以实现安全的数据库通信

**正确答案 / Answer: `A, B, C`**

A multi-tier architecture involves separating the web, application, and database layers to enhance scalability, security, and high availability. Using an Auto Scaling group with an Application Load Balancer for the web tier ensures traffic handling is dynamic. Deploying the application tier in private subnets with security groups secures communication with the database tier. Using Amazon RDS Multi-AZ for the database tier ensures fault tolerance and high availability. Amazon S3 and AWS Lambda are not appropriate for the database and application tiers in this scenario.

多层架构涉及分离 Web、应用程序和数据库层，以增强可扩展性、安全性和高可用性。将 Auto Scaling 组与 Web 层的 Application Load Balancer 结合使用可确保流量处理是动态的。在具有安全组的私有子网中部署应用程序层可确保与数据库层的通信安全。数据库层使用 Amazon RDS 多可用区可确保容错和高可用性。 Amazon S3 和 AWS Lambda 不适合此场景中的数据库和应用程序层。

---

## Question 138  `Select 3`

**EN** A company is designing a multi-tier web application on AWS. The application has a web tier, an application tier, and a database tier. The company requires the architecture to be highly available and to automatically scale based on demand. Which combination of AWS services should the company use to achieve this requirement?

**中** 一家公司正在 AWS 上设计多层 Web 应用程序。该应用程序具有 Web 层、应用程序层和数据库层。该公司要求架构具有高可用性并根据需求自动扩展。公司应使用哪种 AWS 服务组合来实现此要求？

- **A.** Amazon EC2 instances in an Auto Scaling group for the web tier and application tier, with an Application Load Balancer in front of the web tier
  - Web 层和应用程序层的 Auto Scaling 组中的 Amazon EC2 实例，其中 Application Load Balancer 位于 Web 层前面
- **B.** Amazon RDS with Multi-AZ deployment for the database tier
  - 数据库层具有多可用区部署的 Amazon RDS
- **C.** Amazon S3 for hosting the database tier
  - Amazon S3 用于托管数据库层
- **D.** Amazon Route 53 for DNS and health checks
  - Amazon Route 53 用于 DNS 和健康检查
- **E.** AWS Elastic Beanstalk for deploying and managing the entire application stack
  - AWS Elastic Beanstalk 用于部署和管理整个应用程序堆栈

**正确答案 / Answer: `A, B, D`**

The architecture requires high availability and automatic scaling across all tiers. EC2 instances in Auto Scaling groups with a load balancer, RDS with Multi-AZ deployment, and Route 53 for DNS and health checks collectively fulfill these requirements. S3 is not suitable for hosting databases, and Elastic Beanstalk does not provide the necessary control for this use case.

该架构需要跨所有层的高可用性和自动扩展。具有负载均衡器的 Auto Scaling 组中的 EC2 实例、具有多可用区部署的 RDS 以及用于 DNS 和运行状况检查的 Route 53 共同满足这些要求。 S3 不适合托管数据库，并且 Elastic Beanstalk 不为此用例提供必要的控制。

---

## Question 139  `Single answer`

**EN** A company is building a distributed application that processes a large number of user-generated events in near real-time. The application requires the ability to scale dynamically, ensure that messages are not lost, and allow multiple downstream services to process the same message independently. Which AWS service should the company use to meet these requirements?

**中** 一家公司正在构建一个分布式应用程序，该应用程序可以近乎实时地处理大量用户生成的事件。应用程序需要能够动态扩展，确保消息不丢失，并允许多个下游服务独立处理同一条消息。公司应该使用哪种 AWS 服务来满足这些要求？

- **A.** Amazon SQS (Standard Queue)
  - Amazon SQS（标准队列）
- **B.** Amazon SNS
  - Amazon SNS
- **C.** Amazon Kinesis Data Streams
  - Amazon Kinesis 数据流
- **D.** Amazon MQ
  - Amazon MQ

**正确答案 / Answer: `B`**

Amazon SNS is the ideal choice for this scenario because it natively supports the publish/subscribe messaging pattern, allowing multiple downstream services to receive and process the same message independently. It also provides high scalability and reliability, ensuring that messages are not lost. While other services like Amazon SQS or Amazon Kinesis Data Streams have their own use cases, they are not as well-suited for a publish/subscribe pattern where multiple consumers need to process the same message in real-time.

Amazon SNS 是这种场景的理想选择，因为它原生支持发布/订阅消息模式，允许多个下游服务独立接收和处理同一消息。它还提供了高可扩展性和可靠性，确保消息不丢失。虽然 Amazon SQS 或 Amazon Kinesis 数据流等其他服务有自己的用例，但它们不太适合多个消费者需要实时处理同一消息的发布/订阅模式。

---

## Question 140  `Single answer`

**EN** A company is building a distributed application where multiple microservices need to communicate asynchronously. They require a fully managed messaging service that ensures messages are delivered at least once and can decouple the sending and receiving systems. Additionally, they want to implement a publish/subscribe pattern where multiple subscribers can receive the same message. Which AWS service should they use?

**中** 一家公司正在构建一个分布式应用程序，其中多个微服务需要异步通信。它们需要完全托管的消息传递服务，以确保消息至少传递一次，并且可以解耦发送和接收系统。此外，他们希望实现发布/订阅模式，其中多个订阅者可以接收相同的消息。他们应该使用哪种 AWS 服务？

- **A.** Amazon SQS Standard Queue
  - Amazon SQS 标准队列
- **B.** Amazon SQS FIFO Queue
  - Amazon SQS 先进先出队列
- **C.** Amazon SNS
  - Amazon SNS
- **D.** Amazon MQ
  - Amazon MQ

**正确答案 / Answer: `C`**

Amazon SNS is the correct choice because it is designed for the publish/subscribe messaging pattern, allowing multiple subscribers to receive the same message. It decouples microservices effectively and ensures at-least-once delivery. Amazon SQS is better suited for point-to-point communication, and Amazon MQ is more appropriate for applications requiring traditional messaging protocols.

Amazon SNS 是正确的选择，因为它是为发布/订阅消息传递模式设计的，允许多个订阅者接收相同的消息。它有效解耦微服务并确保至少一次交付。 Amazon SQS 更适合点对点通信，Amazon MQ 更适合需要传统消息协议的应用。

---

## Question 141  `Select 2`

**EN** A company is implementing a distributed order processing system that requires decoupling between the order submission service and the order fulfillment service. They want to ensure that order messages are delivered reliably and are processed only once. Additionally, the system should be capable of scaling to handle variable loads. Which AWS service combination should be used to meet these requirements?

**中** 某公司正在实现一个分布式订单处理系统，需要将订单提交服务和订单履行服务解耦。他们希望确保订单消息可靠传递并且仅处理一次。此外，系统应该能够扩展以处理可变负载。应使用哪种 AWS 服务组合来满足这些要求？

- **A.** Amazon SQS with FIFO queues
  - 带 FIFO 队列的 Amazon SQS
- **B.** Amazon SNS with standard topics
  - Amazon SNS 具有标准主题
- **C.** Amazon SQS with standard queues
  - 带标准队列的 Amazon SQS
- **D.** Amazon SNS with FIFO topics
  - Amazon SNS 与 FIFO 主题
- **E.** Amazon SNS with SQS FIFO queue subscriptions
  - 具有 SQS FIFO 队列订阅的 Amazon SNS

**正确答案 / Answer: `A, E`**

The combination of Amazon SQS with FIFO queues and Amazon SNS with SQS FIFO queue subscriptions satisfies the requirement for decoupling, reliable message delivery, exactly-once processing, and scaling. Amazon SQS FIFO queues handle order preservation and message deduplication, while Amazon SNS enables the publish/subscribe functionality to scale the system by distributing messages to multiple subscribers.

Amazon SQS 与 FIFO 队列的组合以及 Amazon SNS 与 SQS FIFO 队列订阅的组合满足了解耦、可靠的消息传递、一次性处理和扩展的要求。 Amazon SQS FIFO 队列处理顺序保存和消息重复数据删除，而 Amazon SNS 启用发布/订阅功能，通过将消息分发给多个订阅者来扩展系统。

---

## Question 142  `Single answer`

**EN** A company is building a distributed application that requires real-time notifications to multiple subscribers whenever an event occurs. The application must decouple the message producers from the consumers and allow multiple subscribers to process the same message independently. Which AWS service combination best meets these requirements?

**中** 一家公司正在构建一个分布式应用程序，该应用程序需要在事件发生时向多个订阅者发出实时通知。应用程序必须将消息生产者与消费者解耦，并允许多个订阅者独立处理同一消息。哪种 AWS 服务组合最能满足这些要求？

- **A.** Amazon SQS with long polling
  - Amazon SQS 长轮询
- **B.** Amazon SNS with multiple subscriptions
  - Amazon SNS 具有多个订阅
- **C.** Amazon Kinesis Data Streams with consumers
  - Amazon Kinesis 与消费者的数据流
- **D.** Amazon MQ with topic-based messaging
  - Amazon MQ 具有基于主题的消息传递

**正确答案 / Answer: `B`**

Amazon SNS is the best choice for a publish/subscribe model where multiple subscribers need to process the same message independently. It decouples message producers from consumers and allows for real-time notifications to multiple subscribers, which aligns perfectly with the given scenario.

对于多个订阅者需要独立处理同一消息的发布/订阅模型，Amazon SNS 是最佳选择。它将消息生产者与消费者解耦，并允许向多个订阅者发送实时通知，这与给定的场景完美契合。

---

## Question 143  `Select 3`

**EN** A company is building a serverless application using AWS Lambda and Amazon API Gateway. The application processes images uploaded to an Amazon S3 bucket. After processing, the images are stored in another S3 bucket. The company wants to scale the solution automatically, ensure high availability, and minimize operational overhead. Which combination of AWS services and configurations should the company use to achieve this?

**中** 一家公司正在使用 AWS Lambda 和 Amazon API Gateway 构建无服务器应用程序。该应用程序处理上传到 Amazon S3 存储桶的图像。处理后，图像存储在另一个 S3 存储桶中。该公司希望自动扩展解决方案、确保高可用性并最大限度地减少运营开销。公司应该使用哪种 AWS 服务和配置组合来实现这一目标？

- **A.** Configure an S3 event notification to trigger an AWS Lambda function when an image is uploaded.
  - 配置 S3 事件通知，在图片上传时触发 AWS Lambda 函数。
- **B.** Use Amazon EC2 Auto Scaling to handle Lambda scaling during high traffic periods.
  - 使用 Amazon EC2 Auto Scaling 在高流量期间处理 Lambda 扩展。
- **C.** Set up an Amazon API Gateway to invoke the Lambda function for processing images.
  - 设置 Amazon API Gateway 以调用 Lambda 函数来处理图像。
- **D.** Store processed images in an Amazon S3 bucket with lifecycle policies for automatic archival after a set period.
  - 将处理后的图像存储在 Amazon S3 存储桶中，并具有生命周期策略，以便在设定的时间段后自动存档。
- **E.** Use AWS Fargate to host the image processing logic for better control of the underlying infrastructure.
  - 使用 AWS Fargate 托管图像处理逻辑，以更好地控制底层基础设施。

**正确答案 / Answer: `A, C, D`**

This question tests your understanding of serverless patterns using AWS Lambda, Amazon S3, and Amazon API Gateway. By configuring S3 event notifications to trigger a Lambda function, you automate the image processing workflow in a serverless manner. Amazon API Gateway can be used for additional API interaction if needed. Storing the processed images in S3 with lifecycle policies ensures cost-effective storage management. AWS Lambda already provides automatic scaling and high availability, so there is no need for manual scaling or using Fargate in this scenario.

此问题测试您对使用 AWS Lambda、Amazon S3 和 Amazon API Gateway 的无服务器模式的理解。通过配置 S3 事件通知来触发 Lambda 函数，您可以以无服务器方式自动化图像处理工作流程。如果需要，Amazon API Gateway 可用于额外的 API 交互。使用生命周期策略将处理后的图像存储在 S3 中可确保经济高效的存储管理。 AWS Lambda 已经提供了自动扩展和高可用性，因此在该场景中无需手动扩展或使用 Fargate。

---

## Question 144  `Select 2`

**EN** A developer is designing a serverless application where an image uploaded to an S3 bucket needs to be processed and resized. The image processing must be triggered automatically when a new file is uploaded, and the solution should not require the management of server infrastructure. Which combination of services and features should the developer use to achieve this?

**中** 开发人员正在设计一个无服务器应用程序，其中需要处理上传到 S3 存储桶的图像并调整其大小。上传新文件时必须自动触发图像处理，并且该解决方案不应需要管理服务器基础设施。开发人员应该使用哪种服务和功能组合来实现这一目标？

- **A.** Amazon S3 event notifications to trigger an AWS Lambda function
  - 用于触发 AWS Lambda 功能的 Amazon S3 事件通知
- **B.** AWS Lambda to process and resize the image
  - AWS Lambda 处理和调整图像大小
- **C.** Amazon EC2 Auto Scaling to scale instances for processing the image
  - Amazon EC2 自动缩放以缩放实例以处理图像
- **D.** AWS Fargate to run containerized image processing tasks
  - AWS Fargate 用于运行容器化图像处理任务
- **E.** Amazon S3 lifecycle policies to automatically resize images after upload
  - Amazon S3 生命周期策略上传后自动调整图像大小

**正确答案 / Answer: `A, B`**

The combination of Amazon S3 event notifications and AWS Lambda is ideal for this serverless use case. S3 event notifications allow triggering a Lambda function when an image is uploaded to the bucket. Lambda can then handle image processing and resizing in a fully serverless manner, meeting the requirement to avoid managing infrastructure. The other options either involve server management or do not align with the use case.

Amazon S3 事件通知和 AWS Lambda 的组合非常适合此无服务器用例。 S3 事件通知允许在图像上传到存储桶时触发 Lambda 函数。然后，Lambda 可以以完全无服务器的方式处理图像处理和调整大小，从而满足避免管理基础设施的要求。其他选项要么涉及服务器管理，要么与用例不相符。

---

## Question 145  `Single answer`

**EN** A company wants to process files uploaded to an Amazon S3 bucket. The files must be processed automatically, and the architecture should be highly available, serverless, and scalable. Which solution should the company implement?

**中** 一家公司想要处理上传到 Amazon S3 存储桶的文件。文件必须自动处理，并且架构应该具有高可用性、无服务器和可扩展性。公司应该实施哪种解决方案？

- **A.** Use Amazon EC2 instances to poll the S3 bucket and process the files.
  - 使用 Amazon EC2 实例轮询 S3 存储桶并处理文件。
- **B.** Configure an S3 event notification to trigger an AWS Lambda function to process the files.
  - 配置 S3 事件通知以触发 AWS Lambda 函数来处理文件。
- **C.** Set up an AWS Fargate service to monitor the S3 bucket and process the files.
  - 设置 AWS Fargate 服务来监控 S3 存储桶并处理文件。
- **D.** Deploy an application on Amazon ECS with an S3 event notification to process the files.
  - 在 Amazon ECS 上部署应用程序，并使用 S3 事件通知来处理文件。

**正确答案 / Answer: `B`**

Using an S3 event notification to trigger an AWS Lambda function is the best solution because it is serverless, automatically scales with demand, and is natively integrated with Amazon S3. This minimizes operational overhead while meeting the requirements of high availability and scalability.

使用 S3 事件通知触发 AWS Lambda 功能是最佳解决方案，因为它是无服务器的，可根据需求自动扩展，并且与 Amazon S3 原生集成。这可以最大限度地减少运营开销，同时满足高可用性和可扩展性的要求。

---

## Question 146  `Select 2`

**EN** A company is running a web application with unpredictable traffic patterns and wants to minimize operational overhead while ensuring the application scales automatically to handle bursts of traffic. The application consists of a containerized backend API and a front-end website. Which combination of AWS services provides a serverless solution to meet these requirements?

**中** 一家公司正在运行一个具有不可预测的流量模式的 Web 应用程序，并且希望最大限度地减少运营开销，同时确保应用程序自动扩展以处理突发流量。该应用程序由容器化后端 API 和前端网站组成。哪种 AWS 服务组合提供了满足这些要求的无服务器解决方案？

- **A.** Deploy the backend API using AWS Fargate and the front-end website using Amazon S3 with Amazon CloudFront.
  - 使用 AWS Fargate 部署后端 API，使用 Amazon S3 和 Amazon CloudFront 部署前端网站。
- **B.** Deploy the backend API using Amazon EC2 Auto Scaling and the front-end website using AWS Elastic Beanstalk.
  - 使用 Amazon EC2 Auto Scaling 部署后端 API，使用 AWS Elastic Beanstalk 部署前端网站。
- **C.** Deploy the backend API using AWS Lambda and API Gateway, and the front-end website using Amazon S3 with Amazon CloudFront.
  - 使用 AWS Lambda 和 API Gateway 部署后端 API，使用 Amazon S3 和 Amazon CloudFront 部署前端网站。
- **D.** Deploy the backend API using Amazon ECS on EC2 and the front-end website using Amazon S3 with Amazon CloudFront.
  - 在 EC2 上使用 Amazon ECS 部署后端 API，并使用 Amazon S3 和 Amazon CloudFront 部署前端网站。
- **E.** Deploy the backend API using AWS Lambda and API Gateway, and the front-end website using AWS Amplify Hosting.
  - 使用 AWS Lambda 和 API Gateway 部署后端 API，并使用 AWS Amplify Hosting 部署前端网站。

**正确答案 / Answer: `A, C`**

The question focuses on implementing a serverless architecture to minimize operational overhead and ensure automatic scaling. AWS Fargate and Lambda are serverless technologies for running containerized applications and backend APIs, respectively. Amazon S3 combined with CloudFront is an efficient serverless solution for hosting and distributing static websites. These combinations meet the requirements for a fully serverless, scalable, and low-maintenance solution.

该问题的重点是实施无服务器架构，以最大限度地减少运营开销并确保自动扩展。 AWS Fargate 和 Lambda 是分别用于运行容器化应用程序和后端 API 的无服务器技术。 Amazon S3 与 CloudFront 结合是一种用于托管和分发静态网站的高效无服务器解决方案。这些组合满足完全无服务器、可扩展和低维护解决方案的要求。

---

## Question 147  `Single answer`

**EN** A company is building a data analytics application that processes large volumes of unstructured data, such as images and videos. This data needs to be accessed from multiple geographic locations, and the solution should provide high durability and scalability. Which AWS storage type is the MOST appropriate for this use case?

**中** 一家公司正在构建一个数据分析应用程序，用于处理大量非结构化数据，例如图像和视频。这些数据需要从多个地理位置访问，解决方案应提供高耐用性和可扩展性。哪种 AWS 存储类型最适合此用例？

- **A.** Amazon S3 (Simple Storage Service)
  - Amazon S3（简单存储服务）
- **B.** Amazon EFS (Elastic File System)
  - Amazon EFS（弹性文件系统）
- **C.** Amazon EBS (Elastic Block Store)
  - Amazon EBS（弹性块存储）
- **D.** AWS Snowball
  - AWS Snowball

**正确答案 / Answer: `A`**

Amazon S3 is the most suitable storage type for this scenario because it is designed for storing large amounts of unstructured data, such as images and videos, with high durability and scalability. S3 is also accessible from multiple geographic locations, making it ideal for global applications. The other options either lack the required features or are designed for different use cases.

Amazon S3 是最适合该场景的存储类型，因为它专为存储大量非结构化数据（例如图像和视频）而设计，具有很高的耐用性和可扩展性。 S3 还可以从多个地理位置访问，这使其成为全球应用程序的理想选择。其他选项要么缺乏所需的功能，要么是针对不同的用例而设计的。

---

## Question 148  `Single answer`

**EN** A company is building an application that requires low-latency access to data for a database. The storage solution must provide block-level storage with consistent performance and the ability to be attached to an EC2 instance. Which AWS storage type is the most suitable for this requirement?

**中** 一家公司正在构建一个需要低延迟访问数据库数据的应用程序。存储解决方案必须提供具有一致性能的块级存储以及连接到 EC2 实例的能力。哪种 AWS 存储类型最适合此要求？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EFS
  - Amazon EFS
- **C.** Amazon EBS
  - Amazon EBS
- **D.** Amazon Glacier
  - Amazon Glacier

**正确答案 / Answer: `C`**

Amazon EBS (Elastic Block Store) is specifically designed to provide block-level storage for use with EC2 instances. It offers low-latency performance and is well-suited for database applications that require consistent IOPS and low latency. Other options, such as S3, EFS, and Glacier, do not meet the low-latency or block-level storage criteria required for the given use case.

Amazon EBS（弹性块存储）专门设计用于提供与 EC2 实例一起使用的块级存储。它提供低延迟性能，非常适合需要一致 IOPS 和低延迟的数据库应用程序。其他选项（例如 S3、EFS 和 Glacier）不满足给定用例所需的低延迟或块级存储标准。

---

## Question 149  `Single answer`

**EN** A company is building a data analytics platform that processes and stores terabytes of data daily. The platform requires storage that can scale seamlessly, provide high durability, and support access via HTTP for integration with other applications. Which AWS storage solution is the most suitable for this use case?

**中** 一家公司正在构建一个数据分析平台，每天处理和存储数 TB 的数据。该平台需要能够无缝扩展、提供高耐用性并支持通过 HTTP 访问以与其他应用程序集成的存储。哪种 AWS 存储解决方案最适合此用例？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EBS
  - Amazon EBS
- **C.** Amazon EFS
  - Amazon EFS
- **D.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器

**正确答案 / Answer: `A`**

Amazon S3 is the ideal storage solution for this scenario because it is designed for object storage, which excels at storing large amounts of unstructured data like analytics and logs. It offers seamless scalability, high durability, and HTTP-based access, which aligns with the platform's requirements for integration and performance. Other options, such as Amazon EBS, EFS, and FSx, are better suited for specific use cases like block or file storage but do not meet the scalability and access requirements of this scenario.

Amazon S3 是此场景的理想存储解决方案，因为它专为对象存储而设计，擅长存储大量非结构化数据（例如分析和日志）。它提供无缝的可扩展性、高耐用性和基于 HTTP 的访问，符合平台的集成和性能要求。其他选项（例如 Amazon EBS、EFS 和 FSx）更适合块或文件存储等特定用例，但不能满足此场景的可扩展性和访问要求。

---

## Question 150  `Single answer`

**EN** A company is designing a data storage solution for their application. They need to store large amounts of unstructured data such as images and videos, and the solution should be highly durable, scalable, and accessible over the internet via HTTP/HTTPS. Which AWS storage type is most suitable for this use case?

**中** 一家公司正在为其应用程序设计数据存储解决方案。他们需要存储大量非结构化数据，例如图像和视频，并且解决方案应该具有高度耐用性、可扩展性，并且可以通过 HTTP/HTTPS 通过互联网进行访问。哪种 AWS 存储类型最适合此用例？

- **A.** Amazon EBS (Elastic Block Store)
  - Amazon EBS（弹性块存储）
- **B.** Amazon EFS (Elastic File System)
  - Amazon EFS（弹性文件系统）
- **C.** Amazon S3 (Simple Storage Service)
  - Amazon S3（简单存储服务）
- **D.** Amazon FSx for Windows File Server
  - Amazon FSx 适用于 Windows 文件服务器

**正确答案 / Answer: `C`**

Amazon S3 is the best choice for storing large amounts of unstructured data such as images and videos. It is an object storage service that offers high durability, scalability, and accessibility over the internet via HTTP/HTTPS, which perfectly aligns with the requirements of the given use case.

Amazon S3 是存储图像、视频等大量非结构化数据的最佳选择。它是一种对象存储服务，可通过 HTTP/HTTPS 通过互联网提供高耐用性、可扩展性和可访问性，完全符合给定用例的要求。

---

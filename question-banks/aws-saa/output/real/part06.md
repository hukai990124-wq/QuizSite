# AWS SAA-C03 真题演练卷 · 第 06 份

> 题目 251–300 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 251  `Single answer`

**EN** A company processes large volumes of data to generate analytics reports. The data is stored in Amazon S3, and the processing tasks require distributed computation over hundreds of nodes. The company wants to minimize operational overhead while optimizing for cost. Which AWS compute service is the most appropriate for this use case?

**中** 一家公司处理大量数据以生成分析报告。数据存储在 Amazon S3 中，处理任务需要在数百个节点上进行分布式计算。该公司希望最大限度地减少运营开销，同时优化成本。哪种 AWS 计算服务最适合此用例？

- **A.** AWS Batch
  - AWS Batch
- **B.** Amazon EMR
  - Amazon EMR
- **C.** AWS Fargate
  - AWS Fargate
- **D.** Amazon EC2 Auto Scaling
  - Amazon EC2 自动伸缩

**正确答案 / Answer: `B`**

Amazon EMR is the most appropriate service for this scenario because it is specifically designed for distributed data processing and analytics using frameworks like Apache Hadoop and Apache Spark. It minimizes operational overhead by managing the underlying infrastructure and integrates seamlessly with Amazon S3 for storing large datasets. Other options like AWS Batch, AWS Fargate, and Amazon EC2 Auto Scaling are not optimized for this type of workload.

Amazon EMR 是最适合此场景的服务，因为它是专门为使用 Apache Hadoop 和 Apache Spark 等框架的分布式数据处理和分析而设计的。它通过管理底层基础设施最大限度地减少运营开销，并与 Amazon S3 无缝集成以存储大型数据集。 AWS Batch、AWS Fargate 和 Amazon EC2 Auto Scaling 等其他选项并未针对此类工作负载进行优化。

---

## Question 252  `Single answer`

**EN** A data analytics company processes large-scale log data daily to generate reports for its clients. The workload involves running highly parallelized compute-intensive tasks on the dataset, which vary in size each day depending on client requests. The company wants to minimize operational overhead and only pay for the resources it uses. Which AWS compute service is the most suitable for this workload?

**中** 一家数据分析公司每天处理大规模日志数据，为其客户生成报告。工作负载涉及在数据集上运行高度并行的计算密集型任务，这些任务的大小每天都会根据客户端请求而变化。该公司希望最大限度地减少运营开销，并且只需为其使用的资源付费。哪种 AWS 计算服务最适合此工作负载？

- **A.** Amazon EC2 with Auto Scaling
  - Amazon EC2 具有自动缩放功能
- **B.** AWS Batch
  - AWS Batch
- **C.** AWS Fargate
  - AWS Fargate
- **D.** Amazon EMR
  - Amazon EMR

**正确答案 / Answer: `B`**

AWS Batch is the most suitable service for this scenario because it is specifically designed to handle batch processing workloads. It automatically provisions and scales the necessary compute resources, minimizing operational overhead and ensuring cost-effectiveness by only using resources when jobs are running. This aligns perfectly with the company's requirements for processing dynamic workloads with minimal operational effort.

AWS Batch 是最适合此场景的服务，因为它是专门为处理批处理工作负载而设计的。它自动配置和扩展必要的计算资源，最大限度地减少运营开销，并仅在作业运行时使用资源来确保成本效益。这完全符合公司以最少的操作工作量处理动态工作负载的要求。

---

## Question 253  `Single answer`

**EN** A company needs to process a large number of data files for a machine learning training pipeline. The processing requires distributed data transformation and cleaning tasks that can be executed in parallel. The company wants to minimize operational overhead while ensuring scalability and cost-efficiency. Which AWS service is the most appropriate for this use case?

**中** 一家公司需要为机器学习训练管道处理大量数据文件。该处理需要可以并行执行的分布式数据转换和清理任务。该公司希望最大限度地减少运营开销，同时确保可扩展性和成本效益。哪种 AWS 服务最适合此用例？

- **A.** AWS Batch
  - AWS Batch
- **B.** Amazon EMR
  - Amazon EMR
- **C.** AWS Fargate
  - AWS Fargate
- **D.** AWS Lambda
  - AWS Lambda

**正确答案 / Answer: `B`**

Amazon EMR is the most appropriate service for this scenario because it is specifically designed for distributed big data processing tasks, such as data transformation and cleaning, using frameworks like Apache Spark and Hadoop. It provides scalability and cost-efficiency while minimizing operational overhead, which aligns perfectly with the company's requirements.

Amazon EMR 是最适合这种场景的服务，因为它是专门为分布式大数据处理任务而设计的，例如数据转换和清理，使用 Apache Spark 和 Hadoop 等框架。它提供可扩展性和成本效益，同时最大限度地减少运营开销，这完全符合公司的要求。

---

## Question 254  `Single answer`

**EN** A company processes large datasets on a recurring basis to generate analytics reports. The processing involves running complex transformations across multiple nodes but does not require real-time processing. The company is looking for a cost-effective, serverless option to handle the job without managing underlying infrastructure. Which AWS service is best suited for this use case?

**中** 一家公司定期处理大型数据集以生成分析报告。该处理涉及跨多个节点运行复杂的转换，但不需要实时处理。该公司正在寻找一种经济高效的无服务器选项来处理这项工作，而无需管理底层基础设施。哪种 AWS 服务最适合此用例？

- **A.** AWS Batch
  - AWS Batch
- **B.** Amazon EMR
  - Amazon EMR
- **C.** AWS Fargate
  - AWS Fargate
- **D.** AWS Lambda
  - AWS Lambda

**正确答案 / Answer: `B`**

Amazon EMR is the best choice for this scenario because it provides a managed framework for distributed data processing, which is ideal for running large-scale transformations and analytics across multiple nodes. It is also cost-effective and removes the need to manage the underlying infrastructure, aligning with the company's requirements.

Amazon EMR 是此场景的最佳选择，因为它为分布式数据处理提供了托管框架，非常适合跨多个节点运行大规模转换和分析。它还具有成本效益，无需管理底层基础设施，符合公司的要求。

---

## Question 255  `Select 2`

**EN** A financial services company wants to deploy a latency-sensitive application for users in multiple regions around the world. The application requires consistent low latency for user requests and needs to cache frequently accessed data close to users. Which combination of AWS services and features would best address these requirements?

**中** 一家金融服务公司希望为全球多个地区的用户部署延迟敏感的应用程序。该应用程序要求用户请求始终保持低延迟，并且需要将经常访问的数据缓存在靠近用户的位置。哪种 AWS 服务和功能组合最能满足这些要求？

- **A.** Amazon CloudFront with edge locations for caching content
  - Amazon CloudFront 具有用于缓存内容的边缘位置
- **B.** AWS Global Accelerator for routing user traffic to the closest healthy endpoint
  - AWS Global Accelerator 用于将用户流量路由到最近的健康端点
- **C.** Amazon S3 Standard storage class for globally caching data
  - Amazon S3 用于全局缓存数据的标准存储类
- **D.** Amazon Route 53 for geolocation-based routing
  - Amazon Route 53 用于基于地理位置的路由
- **E.** Amazon RDS Multi-AZ for replicating databases across regions
  - Amazon RDS 用于跨区域复制数据库的多可用区

**正确答案 / Answer: `A, B`**

To meet the requirements of latency-sensitive applications with global users, Amazon CloudFront and AWS Global Accelerator are the best fit. CloudFront caches data at edge locations close to users, reducing latency for frequently accessed content. AWS Global Accelerator optimizes traffic routing to the closest healthy endpoint, ensuring consistent low latency for user requests. Together, they address both caching and routing needs for low-latency global applications.

为了满足全球用户对延迟敏感的应用程序的要求，Amazon CloudFront 和 AWS Global Accelerator 是最佳选择。 CloudFront 在靠近用户的边缘位置缓存数据，从而减少频繁访问内容的延迟。 AWS Global Accelerator 优化到最近的健康端点的流量路由，确保用户请求一致的低延迟。它们共同解决了低延迟全局应用程序的缓存和路由需求。

---

## Question 256  `Select 4`

**EN** An organization operates a global e-commerce platform and wants to deliver low-latency content to its users around the world. They also want to ensure compute services can dynamically scale close to the end users to handle localized workloads. Which combination of AWS services and infrastructure features should the organization use to achieve this?

**中** 一家组织运营着一个全球电子商务平台，希望向世界各地的用户提供低延迟的内容。他们还希望确保计算服务能够动态扩展以接近最终用户，以处理本地化工作负载。组织应使用哪种 AWS 服务和基础设施功能组合来实现这一目标？

- **A.** Amazon CloudFront with edge locations
  - Amazon CloudFront 具有边缘位置
- **B.** AWS Global Accelerator
  - AWS Global Accelerator
- **C.** AWS Outposts
  - AWS Outposts
- **D.** AWS Lambda@Edge
  - AWS Lambda@边缘
- **E.** Amazon Route 53 Geolocation Routing
  - Amazon Route 53 地理定位路由
- **F.** Amazon EC2 Auto Scaling in a single AWS Region
  - 单个 AWS 区域中的 Amazon EC2 Auto Scaling

**正确答案 / Answer: `A, B, D, E`**

To address global latency and scalability challenges, organizations should leverage AWS global infrastructure and edge services. Amazon CloudFront and AWS Global Accelerator optimize content delivery and traffic routing, while AWS Lambda@Edge enables compute at the edge for dynamic workloads. Amazon Route 53 Geolocation Routing helps direct users to the closest resources. These services collectively ensure low latency and high performance for a global application. AWS Outposts and EC2 Auto Scaling in a single Region are not designed for global distribution or edge computing.

为了解决全球延迟和可扩展性挑战，组织应利用 AWS 全球基础设施和边缘服务。 Amazon CloudFront 和 AWS Global Accelerator 优化内容交付和流量路由，而 AWS Lambda@Edge 支持动态工作负载的边缘计算。 Amazon Route 53 地理定位路由可帮助将用户引导至最近的资源。这些服务共同确保全球应用程序的低延迟和高性能。单个区域中的 AWS Outposts 和 EC2 Auto Scaling 不适用于全球分布或边缘计算。

---

## Question 257  `Single answer`

**EN** Your company is building a global e-commerce application that requires low-latency access for users across multiple continents. The application is hosted in a primary AWS Region, but some users are experiencing high latency when accessing static assets like product images. Which approach should you implement to reduce latency for global users while minimizing costs?

**中** 您的公司正在构建一个全球电子商务应用程序，需要跨多个大洲的用户进行低延迟访问。该应用程序托管在主要 AWS 区域中，但某些用户在访问产品图像等静态资产时遇到高延迟。您应该采用哪种方法来减少全球用户的延迟，同时最大限度地降低成本？

- **A.** Use Amazon CloudFront to cache the static assets at edge locations closer to users.
  - 使用 Amazon CloudFront 将静态资源缓存在更靠近用户的边缘位置。
- **B.** Deploy additional EC2 instances in multiple AWS Regions and replicate static assets across those instances.
  - 在多个 AWS 区域中部署其他 EC2 实例并在这些实例之间复制静态资产。
- **C.** Use AWS Direct Connect to establish dedicated high-speed connections between your data center and the primary AWS Region.
  - 使用 AWS Direct Connect 在您的数据中心和主 AWS 区域之间建立专用高速连接。
- **D.** Configure an Amazon RDS Read Replica in multiple AWS Regions to serve the static assets.
  - 在多个 AWS 区域中配置 Amazon RDS 只读副本以提供静态资产。

**正确答案 / Answer: `A`**

Amazon CloudFront is a managed service designed specifically for reducing latency for end users by caching content at edge locations globally. It ensures that users can retrieve static assets from the nearest edge location, providing a better experience compared to accessing them from a single centralized AWS Region. This approach is the most effective and cost-efficient for the described use case.

Amazon CloudFront 是一项托管服务，专门设计用于通过在全球边缘位置缓存内容来减少最终用户的延迟。它确保用户可以从最近的边缘位置检索静态资产，与从单个集中式 AWS 区域访问静态资产相比，提供更好的体验。对于所描述的用例来说，这种方法是最有效且最具成本效益的。

---

## Question 258  `Select 3`

**EN** A global e-commerce company wants to serve its customers with low-latency access to their application worldwide. The application consists of a web front-end, a REST API, and a back-end processing system. The company has users in North America, Europe, and Asia. Which AWS services or features should be leveraged to meet the low-latency requirement?

**中** 一家全球电子商务公司希望为其全球客户提供低延迟访问其应用程序的服务。该应用程序由 Web 前端、REST API 和后端处理系统组成。该公司的用户遍布北美、欧洲和亚洲。应利用哪些 AWS 服务或功能来满足低延迟要求？

- **A.** Amazon CloudFront with edge locations for caching static content
  - Amazon CloudFront 具有用于缓存静态内容的边缘位置
- **B.** AWS Global Accelerator for optimizing global application traffic routing
  - AWS Global Accelerator 用于优化全局应用程序流量路由
- **C.** Amazon RDS with cross-region read replicas for low-latency database read operations
  - Amazon RDS 具有跨区域只读副本，用于低延迟数据库读取操作
- **D.** AWS Direct Connect for connecting on-premises data centers to AWS regions
  - AWS Direct Connect 用于将本地数据中心连接到 AWS 区域
- **E.** Amazon S3 Transfer Acceleration for speeding up data uploads to a central S3 bucket
  - Amazon S3 传输加速，用于加快数据上传到中央 S3 存储桶的速度

**正确答案 / Answer: `A, B, C`**

To reduce latency in a globally distributed application, AWS offers services like Amazon CloudFront for caching static content at edge locations, AWS Global Accelerator for optimizing traffic routing using AWS's global network, and Amazon RDS cross-region read replicas to enable low-latency database reads. These services together address the latency challenges for global users accessing the application. AWS Direct Connect and S3 Transfer Acceleration, while valuable for other use cases, do not directly address global application access latency.

为了减少全球分布式应用程序中的延迟，AWS 提供了 Amazon CloudFront 等服务（用于在边缘位置缓存静态内容）、AWS Global Accelerator（用于使用 AWS 全球网络优化流量路由）以及 Amazon RDS 跨区域只读副本（用于实现低延迟数据库读取）。这些服务共同解决了全球用户访问应用程序的延迟挑战。 AWS Direct Connect 和 S3 传输加速虽然对其他用例很有价值，但不能直接解决全局应用程序访问延迟问题。

---

## Question 259  `Single answer`

**EN** A company is building an e-commerce platform that processes user orders. The platform needs to ensure that order updates are broadcast to multiple downstream services, such as inventory management, shipping, and billing systems, in real-time. These downstream systems should be able to independently subscribe to and process the order updates without impacting each other. Which AWS service should the company use to implement this solution?

**中** 一家公司正在构建一个处理用户订单的电子商务平台。该平台需要确保订单更新实时广播到多个下游服务，例如库存管理、运输和计费系统。这些下游系统应该能够独立订阅和处理订单更新，而不会互相影响。公司应使用哪种 AWS 服务来实施此解决方案？

- **A.** Amazon SQS
  - Amazon SQS
- **B.** Amazon SNS
  - Amazon SNS
- **C.** Amazon MQ
  - Amazon MQ
- **D.** AWS Step Functions
  - AWS Step Functions

**正确答案 / Answer: `B`**

The publish/subscribe model is ideal for scenarios where a single event (e.g., an order update) needs to be broadcast to multiple independent systems. Amazon SNS is purpose-built for this use case, allowing you to create a topic and have multiple subscribers receive messages in real-time. Other services like SQS or MQ are better suited for point-to-point messaging rather than broadcast scenarios.

发布/订阅模型非常适合需要将单个事件（例如订单更新）广播到多个独立系统的场景。 Amazon SNS 是专门为此用例构建的，允许您创建主题并让多个订阅者实时接收消息。 SQS 或 MQ 等其他服务更适合点对点消息传递而不是广播场景。

---

## Question 260  `Single answer`

**EN** A company is building a distributed application that requires decoupling of components to ensure scalability and fault tolerance. The application must enable real-time notifications when a new event occurs, while also allowing multiple subscribers to independently process the same event. Which AWS service combination best meets these requirements?

**中** 一家公司正在构建一个分布式应用程序，需要解耦组件以确保可扩展性和容错能力。应用程序必须在新事件发生时启用实时通知，同时还允许多个订阅者独立处理同一事件。哪种 AWS 服务组合最能满足这些要求？

- **A.** Amazon SQS with Amazon Lambda
  - Amazon SQS 与 Amazon Lambda
- **B.** Amazon SNS with Amazon SQS
  - Amazon SNS 与 Amazon SQS
- **C.** Amazon MQ with Amazon EC2
  - Amazon MQ 与 Amazon EC2
- **D.** Amazon Kinesis Data Streams with Amazon DynamoDB
  - Amazon Kinesis 数据流与 Amazon DynamoDB

**正确答案 / Answer: `B`**

Amazon SNS (Simple Notification Service) is designed for the publish/subscribe messaging pattern, allowing messages to be sent to multiple subscribers in real time. When combined with Amazon SQS (Simple Queue Service), each subscriber can receive and process messages independently. This combination is ideal for applications that require decoupling of components, scalability, and fault tolerance.

Amazon SNS（简单通知服务）专为发布/订阅消息传递模式而设计，允许消息实时发送给多个订阅者。与 Amazon SQS（简单队列服务）结合使用时，每个订阅者都可以独立接收和处理消息。这种组合非常适合需要组件解耦、可扩展性和容错的应用程序。

---

## Question 261  `Select 2`

**EN** A company is building a distributed application where multiple components need to communicate with each other. Some components need real-time updates, while others can process updates at their own pace. The company wants to decouple these components and ensure reliable message processing. Which AWS services should the company use to implement this architecture?

**中** 一家公司正在构建一个分布式应用程序，其中多个组件需要相互通信。有些组件需要实时更新，而其他组件则可以按照自己的节奏处理更新。该公司希望解耦这些组件并确保可靠的消息处理。公司应该使用哪些 AWS 服务来实施此架构？

- **A.** Amazon Simple Notification Service (SNS) for real-time updates and Amazon Simple Queue Service (SQS) for decoupled message processing
  - 用于实时更新的 Amazon Simple Notification Service (SNS) 和用于解耦消息处理的 Amazon Simple Queue Service (SQS)
- **B.** Amazon Kinesis Data Streams for real-time updates and Amazon SQS for decoupled message processing
  - 用于实时更新的 Amazon Kinesis 数据流和用于解耦消息处理的 Amazon SQS
- **C.** Amazon SNS for message storage and Amazon SQS for message delivery
  - Amazon SNS 用于消息存储，Amazon SQS 用于消息传递
- **D.** Amazon SQS for real-time updates and Amazon SNS for decoupled message processing
  - Amazon SQS 用于实时更新，Amazon SNS 用于解耦消息处理
- **E.** Amazon SNS for real-time updates and Amazon Kinesis Data Streams for decoupled message processing
  - 用于实时更新的 Amazon SNS 和用于解耦消息处理的 Amazon Kinesis 数据流

**正确答案 / Answer: `A, B`**

To build a decoupled architecture with real-time updates, Amazon SNS and Amazon Kinesis Data Streams are suitable for publish/subscribe and streaming use cases. Amazon SQS is ideal for decoupled message processing with reliable delivery. The combination of these services allows components to communicate efficiently while processing messages at their own pace.

为了构建具有实时更新的解耦架构，Amazon SNS 和 Amazon Kinesis 数据流适合发布/订阅和流媒体用例。 Amazon SQS 非常适合具有可靠传递的解耦消息处理。这些服务的组合允许组件有效地通信，同时按照自己的节奏处理消息。

---

## Question 262  `Single answer`

**EN** A company is building a new event-driven application where multiple microservices need to process and respond to events in near real-time. The solution must ensure that each microservice receives all the events it is subscribed to, and there is a need to decouple the components to improve scalability and fault tolerance. Which AWS service should the company use to meet these requirements?

**中** 一家公司正在构建一个新的事件驱动应用程序，其中多个微服务需要近乎实时地处理和响应事件。解决方案必须保证每个微服务接收到它订阅的所有事件，并且需要解耦组件以提高可扩展性和容错能力。公司应该使用哪种 AWS 服务来满足这些要求？

- **A.** Amazon SQS
  - Amazon SQS
- **B.** Amazon SNS
  - Amazon SNS
- **C.** Amazon MQ
  - Amazon MQ
- **D.** Amazon Kinesis Data Streams
  - Amazon Kinesis 数据流

**正确答案 / Answer: `B`**

Amazon SNS is the best fit for this scenario because it is a highly scalable and fully managed publish/subscribe messaging service. It allows multiple microservices to subscribe to a topic and ensures that each subscriber receives all the events it is subscribed to. This makes it ideal for decoupling components in an event-driven architecture.

Amazon SNS 最适合此场景，因为它是一种高度可扩展且完全托管的发布/订阅消息传递服务。它允许多个微服务订阅一个主题，并确保每个订阅者都能收到其订阅的所有事件。这使其成为事件驱动架构中解耦组件的理想选择。

---

## Question 263  `Single answer`

**EN** A company runs a web application that experiences unpredictable traffic patterns. During peak traffic, the application becomes unresponsive due to resource constraints, and during low traffic periods, the company incurs unnecessary costs due to underutilized resources. What is the most appropriate solution to handle these challenges?

**中** 一家公司运行的 Web 应用程序会遇到不可预测的流量模式。在流量高峰期间，应用程序由于资源限制而变得无响应，而在流量低谷期间，由于资源未得到充分利用，公司会产生不必要的成本。应对这些挑战的最合适的解决方案是什么？

- **A.** Configure Amazon EC2 Auto Scaling to dynamically adjust the number of instances based on demand.
  - 配置 Amazon EC2 弹性伸缩，根据需求动态调整实例数量。
- **B.** Manually launch and terminate EC2 instances as traffic increases or decreases.
  - 随着流量增加或减少，手动启动和终止 EC2 实例。
- **C.** Use an Amazon S3 bucket to host the web application, replacing the EC2 instances.
  - 使用 Amazon S3 存储桶托管 Web 应用程序，替换 EC2 实例。
- **D.** Deploy a fixed number of EC2 instances and use Elastic Load Balancing to distribute traffic evenly.
  - 部署固定数量的 EC2 实例，并使用 Elastic Load Balancing 均匀分配流量。

**正确答案 / Answer: `A`**

Amazon EC2 Auto Scaling is designed to handle fluctuating traffic patterns by automatically adjusting the number of EC2 instances based on defined scaling policies. This ensures that the application remains responsive during peak traffic and minimizes costs during low traffic periods, making it the most appropriate solution for this scenario.

Amazon EC2 Auto Scaling 旨在通过根据定义的扩展策略自动调整 EC2 实例的数量来处理波动的流量模式。这可确保应用程序在高峰流量期间保持响应，并在低流量期间最大限度地降低成本，使其成为此场景的最合适的解决方案。

---

## Question 264  `Single answer`

**EN** A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). Traffic to the application varies significantly depending on the time of day, with traffic spikes occurring unpredictably. The company wants to ensure that the application can handle traffic surges seamlessly while keeping costs optimized. Which solution is the most appropriate to meet these requirements?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。应用程序的流量根据一天中的不同时间而显着变化，流量峰值的发生是不可预测的。该公司希望确保该应用程序能够无缝处理流量激增，同时保持成本优化。哪种解决方案最适合满足这些要求？

- **A.** Manually provision additional EC2 instances during peak traffic hours and terminate them during low traffic periods.
  - 在高峰流量时段手动配置额外的 EC2 实例，并在低流量时段终止它们。
- **B.** Configure an Amazon EC2 Auto Scaling group with dynamic scaling policies based on CPU utilization metrics.
  - 使用基于 CPU 利用率指标的动态扩展策略配置 Amazon EC2 Auto Scaling 组。
- **C.** Use Reserved Instances for all EC2 instances to handle the workload during traffic surges.
  - 对所有 EC2 实例使用预留实例来处理流量激增期间的工作负载。
- **D.** Deploy the application on a single large EC2 instance with enhanced networking capabilities.
  - 将应用程序部署在具有增强网络功能的单个大型 EC2 实例上。

**正确答案 / Answer: `B`**

The best solution is to use Amazon EC2 Auto Scaling with dynamic scaling policies. This approach allows the application to automatically adjust the number of instances based on traffic demands, providing both scalability and cost efficiency. Manually provisioning instances or using a single large instance is not practical or scalable for unpredictable traffic patterns. Reserved Instances, while cost-effective for predictable workloads, lack the flexibility required to handle traffic surges effectively.

最佳解决方案是将 Amazon EC2 Auto Scaling 与动态扩展策略结合使用。这种方法允许应用程序根据流量需求自动调整实例数量，从而提供可扩展性和成本效率。对于不可预测的流量模式，手动配置实例或使用单个大型实例是不切实际或不可扩展的。预留实例虽然对于可预测的工作负载来说具有成本效益，但缺乏有效处理流量激增所需的灵活性。

---

## Question 265  `Single answer`

**EN** A company hosts a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The traffic to the application is highly variable, with spikes during marketing campaigns. The company wants to optimize costs while ensuring the application can handle sudden spikes in traffic. Which solution best meets these requirements?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。应用程序的流量变化很大，在营销活动期间会出现峰值。该公司希望优化成本，同时确保应用程序能够应对突然的流量高峰。哪种解决方案最能满足这些要求？

- **A.** Configure Amazon EC2 Auto Scaling with a target tracking scaling policy to adjust the number of instances based on average CPU utilization.
  - 使用目标跟踪扩展策略配置 Amazon EC2 Auto Scaling，以根据平均 CPU 利用率调整实例数量。
- **B.** Use AWS Auto Scaling to scale the ALB itself based on incoming traffic patterns.
  - 使用 AWS Auto Scaling 根据传入流量模式扩展 ALB 本身。
- **C.** Manually add or remove EC2 instances based on expected traffic spikes during marketing campaigns.
  - 根据营销活动期间的预期流量峰值手动添加或删除 EC2 实例。
- **D.** Use a fixed number of EC2 instances with Reserved Instances to handle the peak traffic.
  - 使用固定数量的 EC2 实例和预留实例来处理峰值流量。

**正确答案 / Answer: `A`**

Using Amazon EC2 Auto Scaling with a target tracking scaling policy is the best solution for applications with highly variable traffic. It ensures the application scales dynamically to handle spikes in demand while minimizing costs during periods of low traffic. This approach eliminates the need for manual intervention and ensures resources are used efficiently.

将 Amazon EC2 Auto Scaling 与目标跟踪扩展策略结合使用是流量高度变化的应用程序的最佳解决方案。它确保应用程序动态扩展以处理需求高峰，同时在低流量期间最大限度地降低成本。这种方法消除了人工干预的需要，并确保资源得到有效利用。

---

## Question 266  `Single answer`

**EN** A company runs a web application that experiences variable traffic patterns throughout the day. During peak hours, the application becomes slow due to high CPU utilization on the servers, while during off-peak hours, many servers remain underutilized. How can the company ensure the application performs well during peak times while minimizing costs during off-peak hours?

**中** 一家公司运行一个 Web 应用程序，该应用程序全天都会经历变化的流量模式。在高峰时段，由于服务器上的 CPU 利用率较高，应用程序会变慢，而在非高峰时段，许多服务器仍未得到充分利用。公司如何确保应用程序在高峰时段表现良好，同时在非高峰时段最大限度地降低成本？

- **A.** Use Amazon EC2 Auto Scaling to automatically add or remove instances based on traffic patterns.
  - 使用 Amazon EC2 Auto Scaling 根据流量模式自动添加或删除实例。
- **B.** Manually scale the number of Amazon EC2 instances up and down based on predicted traffic.
  - 根据预测流量手动增加和减少 Amazon EC2 实例的数量。
- **C.** Use Amazon EC2 Spot Instances to handle traffic spikes during peak hours.
  - 使用 Amazon EC2 Spot 实例来应对高峰时段的流量高峰。
- **D.** Deploy the application on a larger instance type to handle peak traffic.
  - 在更大的实例类型上部署应用程序以处理峰值流量。

**正确答案 / Answer: `A`**

Amazon EC2 Auto Scaling is the ideal solution for applications with variable traffic patterns. It ensures the application automatically scales out to handle peak loads and scales in during off-peak times, optimizing both performance and cost-efficiency. This eliminates the need for manual intervention or over-provisioning resources.

Amazon EC2 Auto Scaling 是流量模式可变的应用程序的理想解决方案。它确保应用程序自动横向扩展以处理峰值负载并在非高峰时段横向收缩，从而优化性能和成本效率。这消除了手动干预或过度配置资源的需要。

---

## Question 267  `Single answer`

**EN** A company is developing a serverless application to process images uploaded to an Amazon S3 bucket. The images need to be converted into multiple resolutions, and the processing should be highly scalable with minimal operational overhead. Which solution is the MOST cost-effective and operationally efficient for this use case?

**中** 一家公司正在开发一个无服务器应用程序来处理上传到 Amazon S3 存储桶的图像。图像需要转换为多种分辨率，并且处理应该具有高度可扩展性，并且操作开销最小。对于此用例，哪种解决方案最具成本效益和运营效率？

- **A.** Use Amazon EC2 instances to run a custom application triggered by S3 event notifications.
  - 使用 Amazon EC2 实例运行由 S3 事件通知触发的自定义应用程序。
- **B.** Use Amazon Elastic Kubernetes Service (Amazon EKS) to manage a containerized application triggered by S3 event notifications.
  - 使用 Amazon Elastic Kubernetes Service (Amazon EKS) 管理由 S3 事件通知触发的容器化应用程序。
- **C.** Use AWS Lambda functions triggered by S3 event notifications to process the images.
  - 使用由 S3 事件通知触发的 AWS Lambda 函数来处理图像。
- **D.** Use AWS Fargate with Amazon ECS to run a containerized application triggered by S3 event notifications.
  - 将 AWS Fargate 与 Amazon ECS 结合使用来运行由 S3 事件通知触发的容器化应用程序。

**正确答案 / Answer: `C`**

AWS Lambda is the best choice for this scenario because it provides a fully managed, serverless compute platform that automatically scales and integrates seamlessly with Amazon S3 event notifications. This eliminates operational overhead while being cost-effective for tasks like processing images. Other options involve managing infrastructure or add unnecessary complexity to the solution.

AWS Lambda 是此场景的最佳选择，因为它提供了完全托管的无服务器计算平台，可自动扩展并与 Amazon S3 事件通知无缝集成。这消除了运营开销，同时对于处理图像等任务来说具有成本效益。其他选项涉及管理基础设施或给解决方案增加不必要的复杂性。

---

## Question 268  `Select 2`

**EN** An e-commerce company wants to process user-uploaded product images. The company needs a highly scalable and cost-effective solution that automatically triggers image processing whenever a file is uploaded to an S3 bucket. The processed images should be stored back in another S3 bucket. Which combination of services and configurations should the company use?

**中** 一家电子商务公司想要处理用户上传的产品图片。该公司需要一个高度可扩展且经济高效的解决方案，每当文件上传到 S3 存储桶时，该解决方案就会自动触发图像处理。处理后的图像应存储回另一个 S3 存储桶中。公司应该使用哪种服务和配置组合？

- **A.** Configure an S3 bucket to trigger an AWS Lambda function upon object creation.
  - 配置 S3 存储桶以在创建对象时触发 AWS Lambda 函数。
- **B.** Use Amazon ECS with Fargate to process the images in a containerized application.
  - 将 Amazon ECS 与 Fargate 结合使用来处理容器化应用程序中的图像。
- **C.** Store the processed images in the same S3 bucket as the source images.
  - 将处理后的图像存储在与源图像相同的 S3 存储桶中。
- **D.** Write a Lambda function to process the images and store them in another S3 bucket.
  - 编写 Lambda 函数来处理图像并将其存储在另一个 S3 存储桶中。
- **E.** Enable Amazon SQS to send messages to trigger the processing.
  - 使能 Amazon SQS 发送消息触发处理。

**正确答案 / Answer: `A, D`**

The best solution for this scenario is to use S3 event notifications to trigger an AWS Lambda function whenever a new file is uploaded. The Lambda function can then process the images and store the results in a separate S3 bucket. This approach is serverless, scalable, and cost-effective, leveraging the event-driven architecture capabilities of AWS. Using Fargate or SQS adds unnecessary complexity and cost for this specific use case.

此场景的最佳解决方案是使用 S3 事件通知在上传新文件时触发 AWS Lambda 函数。然后，Lambda 函数可以处理图像并将结果存储在单独的 S3 存储桶中。这种方法是无服务器、可扩展且经济高效的，利用了 AWS 的事件驱动架构功能。对于此特定用例，使用 Fargate 或 SQS 会增加不必要的复杂性和成本。

---

## Question 269  `Select 2`

**EN** A company is building a serverless application to process user-uploaded images. The application needs to perform the following steps: store the images, trigger a backend process to analyze the images, and store the analyzed metadata in a database. Which combination of AWS services can be used to achieve this in a scalable and cost-effective manner?

**中** 一家公司正在构建一个无服务器应用程序来处理用户上传的图像。应用程序需要执行以下步骤：存储图像，触发后端进程来分析图像，并将分析后的元数据存储在数据库中。可以使用哪种 AWS 服务组合以可扩展且经济高效的方式实现这一目标？

- **A.** Amazon S3 to store the images, AWS Lambda to process the images, and Amazon DynamoDB to store metadata
  - Amazon S3 用于存储图像，AWS Lambda 用于处理图像，Amazon DynamoDB 用于存储元数据
- **B.** Amazon EBS to store the images, AWS Fargate to process the images, and Amazon RDS to store metadata
  - Amazon EBS 用于存储图像，AWS Fargate 用于处理图像，Amazon RDS 用于存储元数据
- **C.** Amazon S3 to store the images, AWS Step Functions to orchestrate processing, and Amazon DynamoDB to store metadata
  - Amazon S3 用于存储图像，AWS Step Functions 用于编排处理，Amazon DynamoDB 用于存储元数据
- **D.** Amazon S3 to store the images, AWS Lambda to process the images, and Amazon Aurora to store metadata
  - Amazon S3 用于存储图像，AWS Lambda 用于处理图像，Amazon Aurora 用于存储元数据
- **E.** Amazon EFS to store the images, AWS Lambda to process the images, and Amazon DynamoDB to store metadata
  - Amazon EFS 用于存储图像，AWS Lambda 用于处理图像，Amazon DynamoDB 用于存储元数据

**正确答案 / Answer: `A, C`**

Serverless architectures are ideal for applications requiring scalability and cost-effectiveness. Amazon S3 is a highly scalable object storage service suitable for storing user-uploaded files. AWS Lambda is a serverless compute service that can efficiently process images without provisioning servers. Amazon DynamoDB is a serverless NoSQL database that provides low-latency and high-performance storage for metadata. AWS Step Functions can be used to orchestrate serverless workflows, making it another viable option for this scenario.

无服务器架构非常适合需要可扩展性和成本效益的应用程序。 Amazon S3 是一种高度可扩展的对象存储服务，适合存储用户上传的文件。 AWS Lambda 是一种无服务器计算服务，无需配置服务器即可高效处理图像。 Amazon DynamoDB 是一个无服务器 NoSQL 数据库，为元数据提供低延迟和高性能存储。 AWS Step Functions 可用于编排无服务器工作流程，使其成为此场景的另一个可行选择。

---

## Question 270  `Select 2`

**EN** A company is building a serverless web application that processes images uploaded by its users. The application should automatically trigger image processing after an upload, and the solution must handle unpredictable traffic spikes without provisioning or managing servers. Which combination of AWS services should the company use to achieve this?

**中** 一家公司正在构建一个无服务器 Web 应用程序，用于处理用户上传的图像。应用程序应在上传后自动触发图像处理，并且解决方案必须在不配置或管理服务器的情况下处理不可预测的流量峰值。公司应该使用哪种 AWS 服务组合来实现这一目标？

- **A.** Amazon S3 to store the images and invoke an AWS Lambda function for processing
  - Amazon S3 存储图像并调用 AWS Lambda 函数进行处理
- **B.** Amazon EC2 to process the images and an Elastic Load Balancer to handle traffic spikes
  - Amazon EC2 用于处理图像，Elastic Load Balancer 用于处理流量峰值
- **C.** AWS Lambda to process the images and Amazon SQS to decouple the image processing workflow
  - AWS Lambda 用于处理图像，Amazon SQS 用于解耦图像处理工作流程
- **D.** AWS Fargate to run containerized image processing tasks and Amazon SNS for notifications
  - AWS Fargate 用于运行容器化图像处理任务，Amazon SNS 用于通知
- **E.** Amazon S3 to store the images and AWS Step Functions to orchestrate the processing workflow
  - Amazon S3 用于存储图像，AWS Step Functions 用于协调处理工作流程

**正确答案 / Answer: `A, C`**

Combining Amazon S3 and AWS Lambda allows for a fully serverless architecture where S3 can trigger Lambda functions upon image uploads. Adding Amazon SQS to the architecture helps decouple the processing workflow and handle traffic spikes effectively. Lambda is ideal for serverless image processing due to its scalability and simplicity.

将 Amazon S3 和 AWS Lambda 相结合可实现完全无服务器架构，其中 S3 可以在图像上传时触发 Lambda 函数。将 Amazon SQS 添加到架构中有助于解耦处理工作流程并有效处理流量峰值。由于其可扩展性和简单性，Lambda 非常适合无服务器图像处理。

---

## Question 271  `Single answer`

**EN** A company is deploying a containerized application in AWS and needs to ensure high availability and scalability across multiple Availability Zones. The application requires minimal operational overhead for managing the control plane and integration with other AWS services like Elastic Load Balancing and IAM. Which service should the company use?

**中** 一家公司正在 AWS 中部署容器化应用程序，需要确保跨多个可用区的高可用性和可扩展性。该应用程序需要最少的运营开销来管理控制平面以及与其他 AWS 服务（例如 Elastic Load Balancing 和 IAM）的集成。公司应该使用哪种服务？

- **A.** Amazon ECS with Fargate
  - Amazon ECS 带 Fargate
- **B.** Amazon ECS with EC2 launch type
  - Amazon ECS 带 EC2 启动类型
- **C.** Amazon EKS
  - Amazon EKS
- **D.** AWS Lambda
  - AWS Lambda

**正确答案 / Answer: `A`**

Amazon ECS with Fargate is the best choice for running containerized applications that require high availability, scalability, and minimal operational overhead. Fargate eliminates the need to manage infrastructure or the container orchestration control plane, and it integrates well with other AWS services, making it a highly efficient solution for this scenario.

带有 Fargate 的 Amazon ECS 是运行需要高可用性、可扩展性和最小运营开销的容器化应用程序的最佳选择。 Fargate 无需管理基础设施或容器编排控制平面，并且与其他 AWS 服务集成良好，使其成为此场景的高效解决方案。

---

## Question 272  `Select 2`

**EN** A company is running a containerized web application on Amazon ECS using a Fargate launch type. The application requires seamless service discovery and secure communication between containers. How can you meet these requirements?

**中** 一家公司正在使用 Fargate 启动类型在 Amazon ECS 上运行容器化 Web 应用程序。该应用程序需要容器之间的无缝服务发现和安全通信。如何满足这些要求？

- **A.** Enable AWS App Mesh to manage service-to-service communication and secure traffic between containers.
  - 使 AWS App Mesh 能够管理服务间通信并保护容器之间的流量。
- **B.** Use an Application Load Balancer (ALB) with HTTPS listeners to route traffic securely to ECS tasks.
  - 使用带有 HTTPS 侦听器的 Application Load Balancer (ALB) 将流量安全地路由到 ECS 任务。
- **C.** Configure ECS Service Discovery to automatically register services in AWS Cloud Map and enable DNS-based service discovery.
  - 配置 ECS 服务发现以自动在 AWS Cloud Map 中注册服务并启用基于 DNS 的服务发现。
- **D.** Deploy an Amazon RDS database inside the same ECS cluster to centralize service discovery.
  - 在同一 ECS 集群内部署 Amazon RDS 数据库以集中服务发现。
- **E.** Add a Network Load Balancer (NLB) to handle DNS resolution for ECS services.
  - 添加 Network Load Balancer (NLB) 来处理 ECS 服务的 DNS 解析。

**正确答案 / Answer: `A, C`**

To meet the requirements of seamless service discovery and secure communication between containers, you can use AWS App Mesh for service-to-service communication with encryption and ECS Service Discovery for DNS-based service registration and discovery. These solutions work together to ensure secure and reliable communication in a containerized environment on Amazon ECS.

为了满足无缝服务发现和容器之间安全通信的要求，您可以使用 AWS App Mesh 进行加密的服务间通信，并使用 ECS Service Discovery 进行基于 DNS 的服务注册和发现。这些解决方案协同工作，确保 Amazon ECS 上容器化环境中的安全可靠的通信。

---

## Question 273  `Single answer`

**EN** A company is running containerized applications across a fleet of Amazon ECS tasks. They want to ensure that their application maintains high availability and can automatically recover from failures, while also distributing tasks across multiple Availability Zones (AZs). Which approach should they take to meet these requirements?

**中** 一家公司正在跨一组 Amazon ECS 任务运行容器化应用程序。他们希望确保应用程序保持高可用性并能够自动从故障中恢复，同时跨多个可用区 (AZ) 分配任务。他们应该采取哪种方法来满足这些要求？

- **A.** Use an Amazon ECS service with a Fargate launch type and enable service auto-scaling.
  - 使用具有 Fargate 启动类型的 Amazon ECS 服务并启用服务自动扩展。
- **B.** Run Amazon ECS tasks on a single EC2 instance in a specific Availability Zone.
  - 在特定可用区中的单个 EC2 实例上运行 Amazon ECS 任务。
- **C.** Use an Amazon ECS service with a cluster that spans multiple subnets across different Availability Zones.
  - 将 Amazon ECS 服务与跨越不同可用区的多个子网的集群结合使用。
- **D.** Manually monitor task health and redeploy tasks if they fail in a specific AZ.
  - 手动监控任务运行状况，并在任务在特定可用区失败时重新部署任务。

**正确答案 / Answer: `C`**

To achieve high availability and fault tolerance for containerized applications on Amazon ECS, you should use a service that runs across multiple AZs. Configuring the ECS cluster to span multiple subnets in different AZs ensures that tasks are distributed across AZs, which helps mitigate the impact of an AZ failure. Manual monitoring and redeployment or restricting tasks to a single AZ are not suitable for high availability.

为了在 Amazon ECS 上实现容器化应用程序的高可用性和容错能力，您应该使用跨多个可用区运行的服务。配置 ECS 集群跨不同可用区的多个子网，可以确保任务跨可用区分布，从而有助于减轻可用区故障的影响。手动监控和重新部署或将任务限制到单个可用区不适合高可用性。

---

## Question 274  `Single answer`

**EN** A company runs a microservices application using containers and wants to improve scalability and high availability. They are deciding between Amazon ECS and Amazon EKS. The DevOps team also prefers minimal operational overhead for managing infrastructure and control planes. Which solution should the company choose?

**中** 一家公司使用容器运行微服务应用程序，并希望提高可扩展性和高可用性。他们正在 Amazon ECS 和 Amazon EKS 之间做出选择。 DevOps 团队还喜欢以最小的运营开销来管理基础设施和控制平面。公司应该选择哪种解决方案？

- **A.** Amazon ECS with Fargate
  - Amazon ECS 带 Fargate
- **B.** Amazon EKS with self-managed nodes
  - Amazon EKS 具有自我管理节点
- **C.** Amazon ECS with EC2 launch type
  - Amazon ECS 带 EC2 启动类型
- **D.** Amazon EKS with Fargate
  - Amazon EKS 带 Fargate

**正确答案 / Answer: `A`**

Amazon ECS with Fargate is the best choice when the goal is to minimize operational overhead while running containerized workloads. Fargate eliminates the need to manage infrastructure and allows the company to focus on running their application. While Amazon EKS with Fargate also reduces infrastructure management, ECS is often simpler to use and integrates tightly with other AWS services, making it ideal for teams that do not require Kubernetes-specific features.

当目标是在运行容器化工作负载时最大限度地减少运营开销时，带有 Fargate 的 Amazon ECS 是最佳选择。 Fargate 消除了管理基础设施的需要，使公司能够专注于运行他们的应用程序。虽然带有 Fargate 的 Amazon EKS 还减少了基础设施管理，但 ECS 通常更易于使用，并且与其他 AWS 服务紧密集成，使其成为不需要 Kubernetes 特定功能的团队的理想选择。

---

## Question 275  `Single answer`

**EN** A company is running an e-commerce platform that experiences unpredictable traffic spikes during flash sales. The database workload involves frequent read and write operations, and the company needs a highly scalable and high-performing solution to handle these spikes. Which of the following is the MOST appropriate database solution for this use case?

**中** 一家公司正在运营一个电子商务平台，该平台在闪购期间会遇到不可预测的流量峰值。数据库工作负载涉及频繁的读写操作，公司需要一个高度可扩展且高性能的解决方案来应对这些峰值。以下哪项是最适合此用例的数据库解决方案？

- **A.** Amazon RDS with Multi-AZ deployment
  - Amazon RDS 多可用区部署
- **B.** Amazon Aurora with Auto Scaling
  - Amazon Aurora 具有自动缩放功能
- **C.** Amazon DynamoDB with on-demand capacity mode
  - Amazon DynamoDB 按需容量模式
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `C`**

The e-commerce platform requires a database solution that can handle unpredictable traffic spikes and frequent read/write operations. Amazon DynamoDB with on-demand capacity mode is the most suitable choice as it provides instant scalability, high performance, and the ability to handle sudden traffic changes without pre-provisioned capacity. Other options like Amazon RDS and Aurora are effective for relational database workloads but require more planning for scalability. Amazon Redshift is designed for analytical workloads and is not suitable for transactional use cases.

电子商务平台需要一个能够处理不可预测的流量峰值和频繁的读/写操作的数据库解决方案。具有按需容量模式的 Amazon DynamoDB 是最合适的选择，因为它提供即时可扩展性、高性能以及无需预先配置容量即可处理突发流量变化的能力。 Amazon RDS 和 Aurora 等其他选项对于关系数据库工作负载非常有效，但需要更多的可扩展性规划。 Amazon Redshift 专为分析工作负载而设计，不适用于事务性用例。

---

## Question 276  `Single answer`

**EN** A company is building a high-traffic e-commerce platform and needs to choose a high-performing database solution for their product catalog. The catalog consists of a highly structured dataset with millions of rows, requires fast queries for product searches, and must support complex joins and aggregations. Which database solution should the company choose?

**中** 某公司正在构建高流量的电子商务平台，需要为其产品目录选择高性能的数据库解决方案。该目录由具有数百万行的高度结构化数据集组成，需要快速查询产品搜索，并且必须支持复杂的联接和聚合。公司应该选择哪种数据库解决方案？

- **A.** Amazon RDS for MySQL
  - MySQL 的 Amazon RDS
- **B.** Amazon DynamoDB
  - Amazon DynamoDB
- **C.** Amazon Neptune
  - 亚马逊海王星
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `A`**

The key requirements of the scenario include handling structured data, performing fast queries, and supporting complex joins and aggregations. These characteristics align with the capabilities of relational databases like Amazon RDS for MySQL. Other options, such as DynamoDB, Neptune, and Redshift, are designed for specific use cases like NoSQL workloads, graph data, or analytical processing, making them less suitable for this scenario.

该场景的关键要求包括处理结构化数据、执行快速查询以及支持复杂的联接和聚合。这些特性与 Amazon RDS for MySQL 等关系数据库的功能相一致。其他选项（例如 DynamoDB、Neptune 和 Redshift）是针对特定用例（例如 NoSQL 工作负载、图形数据或分析处理）而设计的，因此不太适合这种场景。

---

## Question 277  `Single answer`

**EN** A gaming company is building a leaderboard system for their multiplayer game with millions of active users. The system requires low-latency, high-throughput performance and the ability to scale dynamically with unpredictable spikes in traffic. The leaderboard data needs to be frequently updated and queried by player rank. Which AWS database solution is the most appropriate for this use case?

**中** 一家游戏公司正在为其拥有数百万活跃用户的多人游戏构建排行榜系统。该系统需要低延迟、高吞吐量的性能以及在不可预测的流量峰值下动态扩展的能力。排行榜数据需要经常更新并按玩家排名进行查询。哪种 AWS 数据库解决方案最适合此用例？

- **A.** Amazon RDS with MySQL
  - Amazon RDS 与 MySQL
- **B.** Amazon Aurora PostgreSQL
  - Amazon Aurora PostgreSQL
- **C.** Amazon DynamoDB
  - Amazon DynamoDB
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `C`**

Amazon DynamoDB is the most appropriate database solution for this scenario because it is a NoSQL database that provides low-latency responses and can handle the high-throughput, dynamic scaling required by a leaderboard system. Other options like Amazon RDS or Aurora are better suited for traditional relational workloads, and Amazon Redshift is designed for analytical processing rather than transactional use cases.

Amazon DynamoDB 是最适合这种场景的数据库解决方案，因为它是一个 NoSQL 数据库，可以提供低延迟响应，并且可以处理排行榜系统所需的高吞吐量、动态扩展。 Amazon RDS 或 Aurora 等其他选项更适合传统关系工作负载，而 Amazon Redshift 专为分析处理而不是事务用例而设计。

---

## Question 278  `Single answer`

**EN** A company is running a high-traffic e-commerce application that requires low-latency database responses and the ability to handle millions of requests per second during sales events. The application also requires real-time session management for logged-in users. Which database solution should you recommend to provide the best performance for these requirements?

**中** 一家公司正在运行高流量的电子商务应用程序，该应用程序需要低延迟的数据库响应以及在销售活动期间每秒处理数百万个请求的能力。该应用程序还需要对登录用户进行实时会话管理。您应该推荐哪种数据库解决方案来为这些要求提供最佳性能？

- **A.** Amazon RDS using MySQL in a Multi-AZ deployment
  - Amazon RDS 在多可用区部署中使用 MySQL
- **B.** Amazon DynamoDB with on-demand capacity mode and DynamoDB Accelerator (DAX)
  - 具有按需容量模式和 DynamoDB 加速器 (DAX) 的 Amazon DynamoDB
- **C.** Amazon Aurora PostgreSQL with read replicas
  - Amazon Aurora 具有只读副本的 PostgreSQL
- **D.** Amazon Redshift with enhanced VPC routing enabled
  - Amazon Redshift 启用增强型 VPC 路由

**正确答案 / Answer: `B`**

For high-traffic applications requiring low-latency database responses and real-time session management, Amazon DynamoDB with on-demand capacity mode is the best fit due to its ability to automatically scale to handle millions of requests per second. Adding DynamoDB Accelerator (DAX) further optimizes read performance by caching responses, ensuring low latency even during peak traffic events. Relational databases like Amazon RDS and Aurora are better suited for traditional transactional workloads, while Amazon Redshift is optimized for analytic queries rather than operational use cases.

对于需要低延迟数据库响应和实时会话管理的高流量应用程序，具有按需容量模式的 Amazon DynamoDB 是最佳选择，因为它能够自动扩展以每秒处理数百万个请求。添加 DynamoDB 加速器 (DAX) 通过缓存响应进一步优化读取性能，确保即使在高峰流量事件期间也能实现低延迟。 Amazon RDS 和 Aurora 等关系数据库更适合传统事务工作负载，而 Amazon Redshift 针对分析查询而不是操作用例进行了优化。

---

## Question 279  `Select 2`

**EN** A company is running a web application that allows users to upload and retrieve images. They use Amazon S3 to store the images and need to ensure that only authenticated users can access their own files. The solution must be cost-effective and minimize management overhead. Which combination of approaches will meet these requirements?

**中** 一家公司正在运行一个 Web 应用程序，允许用户上传和检索图像。他们使用 Amazon S3 来存储图像，并需要确保只有经过身份验证的用户才能访问自己的文件。该解决方案必须具有成本效益并最大限度地减少管理开销。哪种方法组合可以满足这些要求？

- **A.** Use an S3 bucket policy to allow public read and write access.
  - 使用 S3 存储桶策略允许公共读写访问。
- **B.** Use S3 pre-signed URLs to grant users temporary access to upload and retrieve their files.
  - 使用 S3 预签名 URL 授予用户临时访问权限以上传和检索其文件。
- **C.** Enable Amazon S3 Transfer Acceleration to increase upload and download speeds.
  - 启用 Amazon S3 传输加速以提高上传和下载速度。
- **D.** Integrate the application with AWS IAM and leverage fine-grained permissions for individual users.
  - 将应用程序与 AWS IAM 集成，并利用单个用户的细粒度权限。
- **E.** Use an AWS Lambda function triggered by an API Gateway to generate pre-signed URLs dynamically for user-specific file access.
  - 使用 API 网关触发的 AWS Lambda 函数动态生成预签名 URL，以供用户特定的文件访问。

**正确答案 / Answer: `B, E`**

The combination of using S3 pre-signed URLs (Option 2) and dynamically generating them with an AWS Lambda function triggered by an API Gateway (Option 5) provides a secure, scalable, and cost-effective solution. Pre-signed URLs ensure that only authenticated users can securely access their specific files. Using Lambda to generate these URLs dynamically reduces management overhead and ensures the solution can scale with the application.

使用 S3 预签名 URL（选项 2）与通过 API 网关（选项 5）触发的 AWS Lambda 函数动态生成它们的组合提供了安全、可扩展且经济高效的解决方案。预签名 URL 可确保只有经过身份验证的用户才能安全地访问其特定文件。使用 Lambda 动态生成这些 URL 可以减少管理开销，并确保解决方案可以随着应用程序的扩展而扩展。

---

## Question 280  `Single answer`

**EN** A company is running a web application that stores user-uploaded images in an Amazon S3 bucket. The company wants to ensure that uploaded images are immediately replicated to another AWS Region for disaster recovery purposes. What is the BEST solution to achieve this requirement?

**中** 一家公司正在运行一个 Web 应用程序，该应用程序将用户上传的图像存储在 Amazon S3 存储桶中。该公司希望确保上传的图像立即复制到另一个 AWS 区域以实现灾难恢复目的。实现这一要求的最佳解决方案是什么？

- **A.** Enable S3 Cross-Region Replication (CRR) on the source bucket.
  - 在源存储桶上启用 S3 跨区域复制 (CRR)。
- **B.** Configure AWS DataSync to transfer objects between S3 buckets in the two Regions.
  - 配置 AWS DataSync 以在两个区域的 S3 存储桶之间传输对象。
- **C.** Use Amazon CloudFront with the S3 bucket as the origin to replicate the data.
  - 使用 Amazon CloudFront 以 S3 存储桶为源来复制数据。
- **D.** Enable versioning on the source bucket and use AWS Backup to replicate the objects to another Region.
  - 在源存储桶上启用版本控制并使用 AWS Backup 将对象复制到另一个区域。

**正确答案 / Answer: `A`**

S3 Cross-Region Replication (CRR) is the most suitable solution for replicating data between S3 buckets in different Regions. It is specifically built for this purpose and ensures that objects are automatically and asynchronously copied to a destination bucket. CRR requires enabling versioning on both the source and destination buckets. Other options mentioned do not provide the same level of automation or are not appropriate for the use case.

S3 跨区域复制 (CRR) 是在不同区域的 S3 存储桶之间复制数据的最合适的解决方案。它是专门为此目的而构建的，可确保对象自动异步复制到目标存储桶。 CRR 需要在源存储桶和目标存储桶上启用版本控制。提到的其他选项不提供相同级别的自动化或不适合用例。

---

## Question 281  `Single answer`

**EN** A company is hosting a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user-uploaded content in an Amazon S3 bucket. The company wants to ensure the S3 bucket is not publicly accessible but still allows the application to upload and retrieve objects. How can this requirement be met?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。该应用程序将用户上传的内容存储在 Amazon S3 存储桶中。该公司希望确保 S3 存储桶不可公开访问，但仍允许应用程序上传和检索对象。如何才能满足这个要求呢？

- **A.** Create a bucket policy that allows public read and write access to the bucket.
  - 创建存储桶策略，允许公共对存储桶进行读写访问。
- **B.** Configure an IAM role for the EC2 instances with permissions to access the S3 bucket.
  - 为具有访问 S3 存储桶权限的 EC2 实例配置 IAM 角色。
- **C.** Use S3 Access Logs to monitor access and ensure no unauthorized users can access the bucket.
  - 使用 S3 访问日志来监控访问并确保未经授权的用户无法访问存储桶。
- **D.** Enable block public access settings on the bucket and use a bucket policy to allow access only from the ALB.
  - 在存储桶上启用阻止公共访问设置，并使用存储桶策略仅允许来自 ALB 的访问。

**正确答案 / Answer: `B`**

The best way to ensure the S3 bucket is not publicly accessible while still allowing the application to upload and retrieve objects is to use an IAM role attached to the EC2 instances. This role can provide fine-grained access permissions to the S3 bucket without exposing it to the public. Other options either do not meet the requirements or involve unnecessary steps.

确保 S3 存储桶不可公开访问，同时仍允许应用程序上传和检索对象的最佳方法是使用附加到 EC2 实例的 IAM 角色。该角色可以提供对 S3 存储桶的细粒度访问权限，而无需将其公开。其他选项要么不满足要求，要么涉及不必要的步骤。

---

## Question 282  `Single answer`

**EN** Your company runs an e-commerce application on AWS, using an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB). To improve the performance of the application during high traffic periods, you decide to implement caching. Which solution would be the most cost-effective and scalable way to achieve this?

**中** 您的公司在 AWS 上运行电子商务应用程序，使用 Application Load Balancer (ALB) 后面的 Amazon EC2 实例的 Auto Scaling 组。为了提高应用程序在高流量期间的性能，您决定实施缓存。哪种解决方案是实现这一目标的最具成本效益和可扩展性的方式？

- **A.** Enable caching on the Application Load Balancer.
  - 在 Application Load Balancer 上启用缓存。
- **B.** Use Amazon ElastiCache to cache frequently accessed data.
  - 使用 Amazon ElastiCache 来缓存经常访问的数据。
- **C.** Increase the size of the EC2 instances in the Auto Scaling group.
  - 增加 Auto Scaling 组中 EC2 实例的大小。
- **D.** Store cached data in Amazon S3 and serve it directly to users.
  - 将缓存数据存储在 Amazon S3 中并直接提供给用户。

**正确答案 / Answer: `B`**

The most cost-effective and scalable option to improve application performance during high traffic periods is to use Amazon ElastiCache. It provides in-memory caching for frequently accessed data, reducing the load on your back-end infrastructure and improving response times. Other options, such as increasing EC2 instance sizes or using S3, do not address the specific need for dynamic caching effectively.

在高流量期间提高应用程序性能的最具成本效益和可扩展性的选项是使用 Amazon ElastiCache。它为经常访问的数据提供内存缓存，减少后端基础设施的负载并缩短响应时间。其他选项（例如增加 EC2 实例大小或使用 S3）无法有效满足动态缓存的特定需求。

---

## Question 283  `Single answer`

**EN** A company is building a highly available web application on AWS. The application must be resilient to failures at the data center level and should have low latency for users in a single geographic region. Which AWS global infrastructure design should the company implement?

**中** 一家公司正在 AWS 上构建高度可用的 Web 应用程序。应用程序必须能够适应数据中心级别的故障，并且对于单个地理区域的用户来说应该具有较低的延迟。公司应该实施哪种 AWS 全球基础设施设计？

- **A.** Deploy the application in multiple Availability Zones within a single AWS Region.
  - 在单个 AWS 区域内的多个可用区中部署应用程序。
- **B.** Deploy the application in multiple AWS Regions.
  - 在多个 AWS 区域中部署应用程序。
- **C.** Deploy the application in a single Availability Zone within a single AWS Region.
  - 将应用程序部署在单个 AWS 区域内的单个可用区中。
- **D.** Deploy the application in multiple data centers within a single Availability Zone.
  - 在单个可用区内的多个数据中心部署应用程序。

**正确答案 / Answer: `A`**

For a highly available application with low latency in a single geographic region, deploying in multiple Availability Zones within a single AWS Region is the best practice. Availability Zones are isolated data centers within a Region, and spreading resources across them ensures resilience to failures at the data center level while maintaining low latency for users within the Region.

对于单个地理区域中低延迟的高可用应用程序，在单个 AWS 区域内的多个可用区中部署是最佳实践。可用区是区域内的隔离数据中心，将资源分散到它们之间可确保数据中心级别的故障恢复能力，同时为区域内的用户保持低延迟。

---

## Question 284  `Single answer`

**EN** A company is deploying a new application and requires high availability and fault tolerance. They want to ensure that their application can continue running even if an entire data center becomes unavailable. How should the company design their application using AWS global infrastructure?

**中** 某公司正在部署一个新的应用程序，需要高可用性和容错能力。他们希望确保即使整个数据中心不可用，他们的应用程序也可以继续运行。公司应该如何使用 AWS 全球基础设施设计他们的应用程序？

- **A.** Deploy the application across multiple Availability Zones within a single AWS Region.
  - 跨单个 AWS 区域内的多个可用区部署应用程序。
- **B.** Deploy the application within a single Availability Zone in an AWS Region.
  - 在 AWS 区域的单个可用区内部署应用程序。
- **C.** Deploy the application across multiple AWS Regions with each Region using a single Availability Zone.
  - 跨多个 AWS 区域部署应用程序，每个区域使用单个可用区。
- **D.** Deploy the application in a single AWS Region and enable Auto Scaling within that Region.
  - 在单个 AWS 区域中部署应用程序并在该区域内启用 Auto Scaling。

**正确答案 / Answer: `A`**

Deploying the application across multiple Availability Zones within a single AWS Region is the best approach to achieve high availability and fault tolerance. Availability Zones are physically separate data centers within a Region that are designed to remain operational even if another Availability Zone fails. This ensures minimal downtime and uninterrupted service for the application.

跨单个 AWS 区域内的多个可用区部署应用程序是实现高可用性和容错能力的最佳方法。可用区是一个区域内物理上独立的数据中心，即使另一个可用区发生故障也能保持运行。这确保了应用程序的停机时间最短且服务不间断。

---

## Question 285  `Select 3`

**EN** A company is designing a high-availability architecture for its application that must serve users across multiple AWS Regions. The application requires low latency for users in each region and should remain operational even if an entire AWS Region becomes unavailable. Which combination of options satisfies these requirements?

**中** 一家公司正在为其应用程序设计高可用性架构，该架构必须为多个 AWS 区域的用户提供服务。该应用程序要求每个区域的用户具有低延迟，并且即使整个 AWS 区域不可用也应保持运行。哪种选项组合可以满足这些要求？

- **A.** Deploy the application across multiple Availability Zones within a single AWS Region.
  - 跨单个 AWS 区域内的多个可用区部署应用程序。
- **B.** Deploy the application in multiple AWS Regions, leveraging Route 53 for DNS-based failover.
  - 在多个 AWS 区域中部署应用程序，利用 Route 53 进行基于 DNS 的故障转移。
- **C.** Use AWS Global Accelerator to improve latency and direct traffic to healthy endpoints in different Regions.
  - 使用 AWS Global Accelerator 改善延迟并将流量引导至不同区域中的健康端点。
- **D.** Enable cross-region replication for application data stored in Amazon S3 to ensure data durability and availability.
  - 对 Amazon S3 中存储的应用数据启用跨区域复制，保证数据的持久性和可用性。
- **E.** Host the application on a single EC2 instance with an Elastic IP for each Region.
  - 将应用程序托管在每个区域具有弹性 IP 的单个 EC2 实例上。

**正确答案 / Answer: `B, C, D`**

To achieve high availability across multiple AWS Regions, the application must be deployed in multiple Regions, with mechanisms like Route 53 for DNS-based failover and AWS Global Accelerator for low latency and fault tolerance. Cross-region replication ensures data durability and availability. A single Region or instance solution does not meet the requirements for fault tolerance and high availability in the event of a Region failure.

为了实现跨多个 AWS 区域的高可用性，应用程序必须部署在多个区域，并使用 Route 53 等机制（用于基于 DNS 的故障转移）和 AWS Global Accelerator 来实现低延迟和容错。跨区域复制保证数据的持久性和可用性。单一 Region 或实例解决方案无法满足 Region 故障时的容错和高可用要求。

---

## Question 286  `Select 3`

**EN** A company is designing a highly available web application hosted on Amazon EC2 instances in the us-east-1 Region. The application must be resilient to the failure of an entire Availability Zone. How can the company achieve this?

**中** 一家公司正在设计一个在 us-east-1 区域的 Amazon EC2 实例上托管的高度可用的 Web 应用程序。应用程序必须能够应对整个可用区的故障。公司如何才能实现这一目标？

- **A.** Deploy the EC2 instances across multiple Availability Zones within the us-east-1 Region.
  - 跨 us-east-1 区域内的多个可用区部署 EC2 实例。
- **B.** Deploy the EC2 instances in a single Availability Zone and use an Elastic Load Balancer to distribute traffic.
  - 在单个可用区中部署 EC2 实例并使用 Elastic Load Balancer 分配流量。
- **C.** Use an Auto Scaling group to launch EC2 instances in multiple Availability Zones.
  - 使用 Auto Scaling 组在多个可用区中启动 EC2 实例。
- **D.** Configure an Amazon RDS Multi-AZ deployment for the application's database.
  - 为应用程序的数据库配置 Amazon RDS 多可用区部署。
- **E.** Deploy the EC2 instances across multiple AWS Regions to ensure high availability.
  - 跨多个 AWS 区域部署 EC2 实例以确保高可用性。

**正确答案 / Answer: `A, C, D`**

To design a highly available application, the EC2 instances should be distributed across multiple Availability Zones within the same Region. This ensures resilience to the failure of an entire Zone. Using an Auto Scaling group can further enhance fault tolerance by managing instance distribution automatically. Additionally, a Multi-AZ RDS deployment ensures that the application's database remains available even if one Zone becomes unavailable. Deploying across Regions is not required for high availability but is more relevant for disaster recovery scenarios.

要设计高可用性应用程序，EC2 实例应分布在同一区域内的多个可用区。这确保了整个区域的故障恢复能力。使用 Auto Scaling 组可以通过自动管理实例分布来进一步增强容错能力。此外，多可用区 RDS 部署可确保即使一个区域不可用，应用程序的数据库仍然可用。跨区域部署并不是高可用性所必需的，但与灾难恢复场景更相关。

---

## Question 287  `Select 3`

**EN** A company is running a high-traffic e-commerce application that uses an Amazon RDS database for its backend. Product catalog and frequently accessed data queries are causing high read traffic on the database, leading to performance issues. The company wants to implement caching to reduce the load on the database and improve response times. Which of the following AWS services and strategies should the company use to address this issue?

**中** 一家公司正在运行一个高流量电子商务应用程序，该应用程序使用 Amazon RDS 数据库作为后端。产品目录和频繁访问的数据查询导致数据库读取流量较高，从而导致性能问题。该公司希望实施缓存以减少数据库负载并缩短响应时间。公司应使用以下哪些 AWS 服务和策略来解决此问题？

- **A.** Use Amazon ElastiCache with Redis to cache frequently accessed data.
  - 将 Amazon ElastiCache 与 Redis 结合使用来缓存经常访问的数据。
- **B.** Implement Amazon CloudFront to cache the database queries.
  - 实现 Amazon CloudFront 来缓存数据库查询。
- **C.** Use Amazon ElastiCache with Memcached to cache product catalog data.
  - 将 Amazon ElastiCache 与 Memcached 结合使用来缓存产品目录数据。
- **D.** Enable Amazon RDS Multi-AZ for improved performance.
  - 启用 Amazon RDS 多可用区以提高性能。
- **E.** Implement database query caching in the application layer using Amazon ElastiCache.
  - 使用 Amazon ElastiCache 在应用层实现数据库查询缓存。

**正确答案 / Answer: `A, C, E`**

Caching is a common strategy to improve application performance by reducing the load on backend databases and speeding up response times for frequently accessed data. Amazon ElastiCache (with Redis or Memcached) is a managed service designed for this purpose. Redis is suited for advanced and complex caching needs, while Memcached is effective for straightforward use cases like caching product catalogs. Application-layer caching using ElastiCache is another effective strategy to reduce database query overhead. Other services like Amazon CloudFront and RDS Multi-AZ do not directly address the database read performance issue described in the scenario.

缓存是一种常见策略，可通过减少后端数据库的负载并加快频繁访问数据的响应时间来提高应用程序性能。 Amazon ElastiCache（带有 Redis 或 Memcached）是为此目的而设计的托管服务。 Redis 适合高级且复杂的缓存需求，而 Memcached 对于缓存产品目录等简单用例非常有效。使用 ElastiCache 的应用程序层缓存是减少数据库查询开销的另一种有效策略。其他服务（例如 Amazon CloudFront 和 RDS 多可用区）不会直接解决场景中描述的数据库读取性能问题。

---

## Question 288  `Single answer`

**EN** A company runs a high-traffic e-commerce application that frequently queries product details from an Amazon RDS database. To reduce database load and improve performance, the company wants to use a caching solution with minimal effort to manage infrastructure. Which solution should the company implement?

**中** 一家公司运行一个高流量的电子商务应用程序，该应用程序经常从 Amazon RDS 数据库查询产品详细信息。为了减少数据库负载并提高性能，该公司希望使用缓存解决方案，以最少的努力来管理基础架构。公司应该实施哪种解决方案？

- **A.** Use Amazon ElastiCache with Redis to cache frequently accessed product details.
  - 将 Amazon ElastiCache 与 Redis 结合使用来缓存经常访问的产品详细信息。
- **B.** Enable RDS read replicas to handle the read-heavy workload.
  - 启用 RDS 只读副本来处理读取繁重的工作负载。
- **C.** Use Amazon S3 to cache product details and serve them directly to users.
  - 使用 Amazon S3 缓存产品详细信息并将其直接提供给用户。
- **D.** Deploy a self-managed Redis cluster on Amazon EC2 instances to cache product details.
  - 在 Amazon EC2 实例上部署自我管理的 Redis 集群来缓存产品详细信息。

**正确答案 / Answer: `A`**

Amazon ElastiCache with Redis is the best solution for this scenario because it is a managed service specifically designed for caching purposes. It reduces the load on the backend database and improves application performance by storing frequently accessed data in memory. Unlike other options, ElastiCache requires minimal management effort, aligning with the company's requirement.

Amazon ElastiCache 与 Redis 是这种情况的最佳解决方案，因为它是专门为缓存目的而设计的托管服务。它通过将频繁访问的数据存储在内存中来减少后端数据库的负载并提高应用程序性能。与其他选项不同，ElastiCache 需要最少的管理工作，符合公司的要求。

---

## Question 289  `Single answer`

**EN** A social media platform is experiencing performance issues due to high database read volumes for frequently accessed user profile data. As the Solutions Architect, you need to design a caching solution to improve performance and reduce database load. The solution must ensure the cached data is automatically invalidated and updated when user profile data changes in the primary database. Which solution should you implement?

**中** 由于频繁访问的用户配置文件数据的数据库读取量较高，社交媒体平台正在遇到性能问题。作为解决方案架构师，您需要设计一个缓存解决方案来提高性能并减少数据库负载。解决方案必须确保当主数据库中的用户配置文件数据发生更改时，缓存数据自动失效并更新。您应该实施哪种解决方案？

- **A.** Use Amazon ElastiCache with a write-through caching strategy
  - 将 Amazon ElastiCache 与直写式缓存策略结合使用
- **B.** Use Amazon ElastiCache with a lazy loading caching strategy
  - 使用带有延迟加载缓存策略的 Amazon ElastiCache
- **C.** Use Amazon ElastiCache with Redis and enable Data Change Notifications (DCN)
  - 将 Amazon ElastiCache 与 Redis 结合使用并启用数据更改通知 (DCN)
- **D.** Use Amazon ElastiCache with Redis and implement a cache invalidation mechanism triggered by database updates
  - 将 Amazon ElastiCache 与 Redis 结合使用，实现数据库更新触发的缓存失效机制

**正确答案 / Answer: `D`**

The correct solution is to use Amazon ElastiCache with Redis and implement a cache invalidation mechanism triggered by database updates. This design ensures that the cache is consistent with the database, as the invalidation mechanism actively removes or updates outdated cache entries when changes occur in the primary database. Strategies like write-through and lazy loading are not suitable here because they do not address invalidation of stale data. Additionally, while Redis itself supports certain features like Pub/Sub, ElastiCache does not natively support automated notifications for database changes, so a custom invalidation mechanism is required.

正确的解决方案是将 Amazon ElastiCache 与 Redis 结合使用，并实现数据库更新触发的缓存失效机制。这种设计确保缓存与数据库一致，因为当主数据库发生更改时，失效机制会主动删除或更新过时的缓存条目。直写和延迟加载等策略在这里不适合，因为它们不能解决陈旧数据的失效问题。此外，虽然 Redis 本身支持 Pub/Sub 等某些功能，但 ElastiCache 本身并不支持数据库更改的自动通知，因此需要自定义失效机制。

---

## Question 290  `Single answer`

**EN** An e-commerce company hosts its web application on Amazon EC2 instances behind an Application Load Balancer. The application's backend database is an Amazon RDS instance. The database experiences high read traffic during flash sales, causing performance issues. You need to implement a caching solution to reduce the load on the database and improve application performance. Which solution should you choose?

**中** 一家电子商务公司将其 Web 应用程序托管在 Application Load Balancer 后面的 Amazon EC2 实例上。该应用程序的后端数据库是一个 Amazon RDS 实例。数据库在闪购期间遇到高读取流量，导致性能问题。您需要实施缓存解决方案来减少数据库的负载并提高应用程序性能。您应该选择哪种解决方案？

- **A.** Use Amazon ElastiCache for Redis to cache frequently accessed data.
  - 使用 Amazon ElastiCache for Redis 来缓存经常访问的数据。
- **B.** Enable Amazon RDS Read Replicas to distribute read traffic.
  - 启用 Amazon RDS 只读副本以分配读取流量。
- **C.** Use Amazon S3 to store and retrieve frequently accessed data.
  - 使用 Amazon S3 存储和检索经常访问的数据。
- **D.** Enable Amazon DynamoDB Accelerator (DAX) for caching database queries.
  - 启用 Amazon DynamoDB 加速器 (DAX) 来缓存数据库查询。

**正确答案 / Answer: `A`**

The best solution for caching frequently accessed data in this scenario is Amazon ElastiCache for Redis. It provides in-memory caching that significantly reduces database load and improves performance, especially during high traffic events like flash sales. The other options are either not designed for caching (Amazon S3), specific to other services (DAX for DynamoDB), or less optimal for achieving the desired performance boost (RDS Read Replicas).

在这种情况下，缓存频繁访问的数据的最佳解决方案是 Redis 的 Amazon ElastiCache。它提供内存缓存，可显着减少数据库负载并提高性能，尤其是在闪购等高流量活动期间。其他选项要么不是为缓存而设计的 (Amazon S3)，而是特定于其他服务（DynamoDB 的 DAX），要么不是实现所需性能提升的最佳选择（RDS 只读副本）。

---

## Question 291  `Single answer`

**EN** A company is designing a new application that requires high performance and scalability. The application will have a read-intensive access pattern, with thousands of requests per second primarily retrieving data. Which of the following solutions would be the MOST cost-effective and scalable for this use case?

**中** 一家公司正在设计一种需要高性能和可扩展性的新应用程序。该应用程序将具有读取密集型访问模式，每秒有数千个请求主要用于检索数据。对于此用例，以下哪种解决方案最具成本效益且可扩展？

- **A.** Store the data in an Amazon RDS instance and use read replicas to handle the read traffic.
  - 将数据存储在 Amazon RDS 实例中，并使用只读副本来处理读取流量。
- **B.** Use Amazon DynamoDB with on-demand capacity mode and enable DynamoDB Accelerator (DAX).
  - 将 Amazon DynamoDB 与按需容量模式结合使用并启用 DynamoDB Accelerator (DAX)。
- **C.** Store the data in Amazon S3 and use S3 Select to optimize data retrieval.
  - 将数据存储在 Amazon S3 中并使用 S3 Select 优化数据检索。
- **D.** Store the data in an Amazon EBS volume attached to an EC2 instance, and scale the EC2 instance vertically.
  - 将数据存储在附加到 EC2 实例的 Amazon EBS 卷中，并垂直扩展 EC2 实例。

**正确答案 / Answer: `B`**

For a read-intensive workload with thousands of requests per second, Amazon DynamoDB with DAX is the most cost-effective and scalable solution. DynamoDB is designed to handle high throughput, and DAX provides an in-memory caching layer to further reduce latency for read operations. While other options like RDS with read replicas could work, they are typically less cost-effective and scalable compared to DynamoDB with DAX.

对于每秒数千个请求的读取密集型工作负载，带有 DAX 的 Amazon DynamoDB 是最具成本效益且可扩展的解决方案。 DynamoDB 旨在处理高吞吐量，DAX 提供内存缓存层以进一步减少读取操作的延迟。虽然带有只读副本的 RDS 等其他选项也可以使用，但与带有 DAX 的 DynamoDB 相比，它们的成本效益和可扩展性通常较低。

---

## Question 292  `Single answer`

**EN** A company is designing a new application that needs to store large volumes of data. The application has a read-intensive access pattern, with frequent queries to retrieve data for analytics. The company requires a highly scalable and cost-effective solution. Which storage option is the most appropriate for this scenario?

**中** 一家公司正在设计一个需要存储大量数据的新应用程序。该应用程序具有读取密集型访问模式，需要频繁查询来检索数据以进行分析。该公司需要高度可扩展且经济高效的解决方案。哪种存储选项最适合这种情况？

- **A.** Amazon RDS with provisioned IOPS
  - Amazon RDS 具有配置的 IOPS
- **B.** Amazon DynamoDB with on-demand capacity mode
  - Amazon DynamoDB 按需容量模式
- **C.** Amazon S3 with S3 Select
  - Amazon S3 带 S3 选择
- **D.** Amazon EFS with General Purpose performance mode
  - Amazon EFS 具有通用性能模式

**正确答案 / Answer: `C`**

Amazon S3 with S3 Select is the best choice for a read-intensive analytics workload because it is highly scalable, cost-effective, and designed to handle large volumes of data efficiently. S3 Select further optimizes performance by allowing applications to retrieve only the required data from objects, minimizing data transfer and improving query performance for analytics. Other options, while useful in specific scenarios, are not as well-suited to this read-intensive, analytics-focused workload.

具有 S3 Select 的 Amazon S3 是读取密集型分析工作负载的最佳选择，因为它具有高度可扩展性、经济高效，并且旨在高效处理大量数据。 S3 Select 允许应用程序仅从对象中检索所需的数据，从而最大限度地减少数据传输并提高分析查询性能，从而进一步优化性能。其他选项虽然在特定场景中有用，但不太适合这种读取密集型、以分析为重点的工作负载。

---

## Question 293  `Single answer`

**EN** A company is building a new application that requires a database to store and retrieve data. The access patterns for the application show that it will be highly read-intensive, with occasional writes. Additionally, the application must scale seamlessly during traffic spikes without requiring manual intervention. Which AWS solution is the most cost-effective and suitable for these requirements?

**中** 一家公司正在构建一个新的应用程序，需要数据库来存储和检索数据。应用程序的访问模式表明它将是高度读取密集型的，偶尔会进行写入。此外，应用程序必须在流量高峰期间无缝扩展，而无需手动干预。哪种 AWS 解决方案最具成本效益且适合这些要求？

- **A.** Amazon RDS with a Multi-AZ deployment
  - 具有多可用区部署的 Amazon RDS
- **B.** Amazon DynamoDB with on-demand capacity mode
  - Amazon DynamoDB 按需容量模式
- **C.** Amazon Aurora with read replicas
  - 具有只读副本的 Amazon Aurora
- **D.** Amazon ElastiCache for Redis
  - Amazon ElastiCache 用于 Redis

**正确答案 / Answer: `C`**

The application requires a database optimized for highly read-intensive workloads and seamless scaling. Amazon Aurora with read replicas meets these requirements by offering high performance for read-heavy traffic with up to 15 read replicas. It also provides automatic scaling and cost-effectiveness compared to other solutions. While other options are useful in different scenarios, they are not the most suitable choice for this specific access pattern and requirement.

该应用程序需要针对高度读取密集型工作负载和无缝扩展进行优化的数据库。具有只读副本的 Amazon Aurora 通过最多 15 个只读副本为读取密集型流量提供高性能，从而满足这些要求。与其他解决方案相比，它还提供自动扩展和成本效益。虽然其他选项在不同场景中很有用，但它们并不是最适合此特定访问模式和要求的选择。

---

## Question 294  `Select 2`

**EN** A company is designing a system to store and process customer data. The system has two distinct access patterns: one is read-intensive, where analytics applications frequently query the data, and the other is write-intensive, where new customer data is ingested at a high rate. The company wants to optimize for cost and performance while ensuring scalability. Which combination of AWS services should the company use?

**中** 一家公司正在设计一个系统来存储和处理客户数据。该系统具有两种不同的访问模式：一种是读取密集型，其中分析应用程序频繁查询数据，另一种是写入密集型，其中新客户数据被高速摄取。该公司希望在确保可扩展性的同时优化成本和性能。公司应该使用哪种 AWS 服务组合？

- **A.** Amazon DynamoDB for write-intensive workloads and Amazon RDS Read Replicas for read-intensive workloads
  - Amazon DynamoDB 适用于写入密集型工作负载，Amazon RDS 只读副本适用于读取密集型工作负载
- **B.** Amazon S3 for write-intensive workloads and Amazon Athena for read-intensive workloads
  - Amazon S3 适用于写入密集型工作负载，Amazon Athena 适用于读取密集型工作负载
- **C.** Amazon Aurora with Auto Scaling for write-intensive workloads and Amazon ElastiCache for read-intensive workloads
  - Amazon Aurora 具有适用于写入密集型工作负载的 Auto Scaling 功能，Amazon ElastiCache 适用于读取密集型工作负载
- **D.** Amazon DynamoDB with DynamoDB Accelerator (DAX) for read-intensive workloads and write-intensive workloads
  - 具有 DynamoDB Accelerator (DAX) 的 Amazon DynamoDB，适用于读取密集型工作负载和写入密集型工作负载
- **E.** Amazon Redshift for both write-intensive and read-intensive workloads
  - Amazon Redshift 适用于写入密集型和读取密集型工作负载

**正确答案 / Answer: `A, B`**

The correct answer combines Amazon DynamoDB for write-intensive workloads and Amazon RDS Read Replicas for read-intensive workloads, or Amazon S3 for write-intensive storage with Amazon Athena for analytics-focused reads. Both options align well with the described access patterns and optimize for performance, cost, and scalability. Other options either do not sufficiently address the access patterns or are less optimized for the specific workloads described.

正确答案是将用于写入密集型工作负载的 Amazon DynamoDB 和用于读取密集型工作负载的 Amazon RDS 只读副本相结合，或者将用于写入密集型存储的 Amazon S3 与用于以分析为重点的读取的 Amazon Athena 结合起来。这两个选项都与所描述的访问模式很好地配合，并针对性能、成本和可扩展性进行了优化。其他选项要么不能充分解决访问模式，要么针对所描述的特定工作负载优化程度较低。

---

## Question 295  `Select 3`

**EN** A company is planning to migrate its on-premises relational database to Amazon RDS for PostgreSQL. The database is expected to handle high read and write traffic with a requirement for low latency. The database size is 3TB, and the company expects a steady growth rate of 500GB per year. Which combination of actions should the company take to ensure optimal performance and scalability?

**中** 一家公司正计划将其本地关系数据库迁移到 Amazon RDS for PostgreSQL。数据库预计能够处理高读写流量并要求低延迟。数据库大小为 3TB，公司预计每年稳定增长 500GB。公司应采取哪些行动组合来确保最佳性能和可扩展性？

- **A.** Choose an Amazon RDS instance type with sufficient memory and compute capacity, such as db.r6g.large or higher, based on usage patterns.
  - 根据使用模式选择具有足够内存和计算能力的 Amazon RDS 实例类型，例如 db.r6g.large 或更高。
- **B.** Enable Multi-AZ deployment for Amazon RDS to improve read performance and fault tolerance.
  - 为 Amazon RDS 启用多可用区部署，以提高读取性能和容错能力。
- **C.** Use Amazon RDS Provisioned IOPS storage to handle high input/output operations and maintain low latency.
  - 使用 Amazon RDS 预置 IOPS 存储来处理高输入/输出操作并保持低延迟。
- **D.** Implement read replicas to scale read operations and offload read traffic from the primary database.
  - 实施只读副本以扩展读取操作并卸载主数据库的读取流量。
- **E.** Enable automatic scaling for the RDS instance to dynamically adjust instance type based on traffic.
  - 为 RDS 实例启用自动伸缩，根据流量动态调整实例类型。

**正确答案 / Answer: `A, C, D`**

To ensure optimal performance and scalability, the company must choose an appropriately sized RDS instance, use Provisioned IOPS for high I/O performance, and implement read replicas to scale read operations. Multi-AZ deployment, while useful for fault tolerance, does not address the performance or capacity planning requirements for high traffic. Additionally, RDS does not support automatic scaling of instance types, so this is not a valid action.

为了确保最佳的性能和可扩展性，公司必须选择适当大小的 RDS 实例，使用预置 IOPS 来实现高 I/O 性能，并实施只读副本来扩展读取操作。多可用区部署虽然对于容错很有用，但无法满足高流量的性能或容量规划要求。此外，RDS 不支持实例类型的自动扩展，因此这不是有效的操作。

---

## Question 296  `Single answer`

**EN** Your company is migrating a high-traffic e-commerce website to AWS. The website's backend uses a relational database that must handle millions of read and write operations per second with low latency. During peak times, the traffic volume spikes significantly. Which configuration is MOST suitable for handling the database workload effectively while ensuring scalability and performance?

**中** 您的公司正在将一个高流量电子商务网站迁移到 AWS。该网站的后端使用关系数据库，每秒必须以低延迟处理数百万次读写操作。在高峰时段，交通量会大幅增加。哪种配置最适合有效处理数据库工作负载，同时确保可扩展性和性能？

- **A.** Use an RDS instance with a General Purpose (GP2) storage type and enable Multi-AZ for high availability.
  - 使用具有通用 (GP2) 存储类型的 RDS 实例并启用多可用区以实现高可用性。
- **B.** Use an RDS instance with Provisioned IOPS storage and choose an instance type optimized for memory and I/O performance.
  - 使用具有预配置 IOPS 存储的 RDS 实例，并选择针对内存和 I/O 性能进行优化的实例类型。
- **C.** Use Amazon Aurora with Auto Scaling enabled and General Purpose (GP2) storage.
  - 使用启用了 Auto Scaling 的 Amazon Aurora 和通用 (GP2) 存储。
- **D.** Deploy an RDS instance with Magnetic storage to minimize costs and configure read replicas for scalability.
  - 部署具有磁性存储的 RDS 实例以最大限度地降低成本并配置只读副本以实现可扩展性。

**正确答案 / Answer: `B`**

The database workload requires high, consistent, and predictable IOPS to handle millions of operations per second with low latency. Provisioned IOPS storage provides the necessary performance for such demanding workloads, and pairing it with an instance type optimized for memory and I/O ensures that the application can handle expected traffic spikes effectively. While other options provide some benefits, they do not meet the specific performance requirements of the scenario.

数据库工作负载需要高、一致且可预测的 IOPS，才能以低延迟处理每秒数百万次的操作。预配置 IOPS 存储为此类要求严格的工作负载提供了必要的性能，并将其与针对内存和 I/O 优化的实例类型配对，可确保应用程序能够有效处理预期的流量峰值。虽然其他选项提供了一些好处，但它们不能满足场景的特定性能要求。

---

## Question 297  `Select 4`

**EN** A company runs a highly transactional e-commerce application and uses Amazon RDS for its database backend. The application experiences fluctuating traffic patterns, with peak usage during sales events. The operations team has noticed performance bottlenecks during peak traffic, including high latency for read and write operations. As a Solutions Architect, which of the following solutions would help address the performance issues while optimizing costs?

**中** 一家公司运行高度事务性的电子商务应用程序，并使用 Amazon RDS 作为其数据库后端。该应用程序的流量模式存在波动，在销售活动期间会出现使用高峰。运营团队注意到高峰流量期间的性能瓶颈，包括读写操作的高延迟。作为解决方案架构师，以下哪些解决方案可以帮助解决性能问题，同时优化成本？

- **A.** Enable Auto Scaling for Amazon RDS to dynamically increase the instance size during peak traffic.
  - 为 Amazon RDS 启用 Auto Scaling，以在流量高峰期间动态增加实例大小。
- **B.** Migrate to an Amazon RDS instance type with more CPU and memory capacity, such as moving from db.m5.large to db.m5.xlarge.
  - 迁移到具有更多 CPU 和内存容量的 Amazon RDS 实例类型，例如从 db.m5.large 迁移到 db.m5.xlarge。
- **C.** Use Amazon RDS Provisioned IOPS (PIOPS) for the database storage to handle higher I/O requirements.
  - 使用 Amazon RDS 预配置 IOPS (PIOPS) 进行数据库存储，以处理更高的 I/O 要求。
- **D.** Implement Amazon ElastiCache as a caching layer in front of the database to reduce the load on the database.
  - 实现 Amazon ElastiCache 作为数据库前面的缓存层，以减少数据库的负载。
- **E.** Read replicas can be created to offload read queries from the primary database instance.
  - 可以创建只读副本以卸载主数据库实例的读取查询。

**正确答案 / Answer: `B, C, D, E`**

To address performance bottlenecks in a transactional application, scaling the database instance type (Option 2) and leveraging Provisioned IOPS (Option 3) can improve performance for read and write operations. Adding a caching solution like Amazon ElastiCache (Option 4) can reduce database load by serving frequent queries from the cache. Additionally, creating read replicas (Option 5) can offload read-heavy workloads from the primary database. Option 1 is incorrect because RDS does not support Auto Scaling of instance sizes; such scaling must be performed manually or by using Aurora Serverless.

为了解决事务应用程序中的性能瓶颈，扩展数据库实例类型（选项 2）并利用预配置 IOPS（选项 3）可以提高读写操作的性能。添加 Amazon ElastiCache（选项 4）等缓存解决方案可以通过从缓存提供频繁查询来减少数据库负载。此外，创建只读副本（选项 5）可以减轻主数据库的读取繁重工作负载。选项一不正确，因为 RDS 不支持实例大小的弹性伸缩；此类扩展必须手动执行或使用 Aurora Serverless 执行。

---

## Question 298  `Select 3`

**EN** A company is designing a high-performance application that processes large volumes of financial transactions. The database backend must handle consistent, low-latency read and write operations under heavy load. The company has decided to use Amazon RDS for their database. Which of the following configurations should they choose to meet their requirements?

**中** 一家公司正在设计一种处理大量金融交易的高性能应用程序。数据库后端必须在重负载下处理一致、低延迟的读写操作。该公司决定使用 Amazon RDS 作为他们的数据库。他们应该选择以下哪些配置来满足他们的要求？

- **A.** Select an RDS instance type with sufficient memory and compute capacity, such as db.r5.4xlarge.
  - 选择具有足够内存和计算能力的 RDS 实例类型，例如 db.r5.4xlarge。
- **B.** Enable Multi-AZ deployment to ensure high availability and automatic failover.
  - 启用多可用区部署以确保高可用性和自动故障转移。
- **C.** Set up a General Purpose (gp2) storage type for cost efficiency.
  - 设置通用 (gp2) 存储类型以提高成本效率。
- **D.** Use Provisioned IOPS (io1 or io2) storage to ensure high throughput and low-latency disk performance.
  - 使用预配置 IOPS（io1 或 io2）存储来确保高吞吐量和低延迟的磁盘性能。
- **E.** Enable Read Replicas to scale database read operations independently.
  - 启用只读副本以独立扩展数据库读取操作。

**正确答案 / Answer: `A, D, E`**

To meet the performance requirements of a high-load application with consistent, low-latency read and write operations, it is necessary to select an appropriately sized RDS instance type, use Provisioned IOPS storage for high throughput, and enable Read Replicas to offload read operations. Multi-AZ deployment is beneficial for availability but is not directly related to performance, and General Purpose (gp2) storage is not suitable for high-performance workloads.

为了满足高负载应用程序的性能要求以及一致、低延迟的读写操作，需要选择适当大小的 RDS 实例类型，使用预置 IOPS 存储来实现高吞吐量，并启用只读副本来卸载读取操作。多可用区部署有利于可用性，但与性能没有直接关系，通用（gp2）存储不适合高性能工作负载。

---

## Question 299  `Single answer`

**EN** An e-commerce company is using an Amazon RDS MySQL database to handle customer transactions. During peak shopping hours, the application is experiencing high latency due to a large number of database connections. The company wants to optimize database performance and connection management without modifying the application code. Which solution should you recommend?

**中** 一家电子商务公司正在使用 Amazon RDS MySQL 数据库来处理客户交易。在购物高峰时段，由于大量数据库连接，应用程序会出现高延迟。该公司希望在不修改应用程序代码的情况下优化数据库性能和连接管理。您应该推荐哪种解决方案？

- **A.** Configure an Amazon RDS Proxy to manage database connections efficiently.
  - 配置 Amazon RDS 代理以有效管理数据库连接。
- **B.** Enable Multi-AZ for the RDS instance to improve read performance.
  - 为 RDS 实例启用多可用区以提高读取性能。
- **C.** Increase the size of the RDS instance to handle more connections.
  - 增加 RDS 实例的大小以处理更多连接。
- **D.** Set up an Amazon ElastiCache cluster in front of the database to cache frequently accessed data.
  - 在数据库前面设置一个 Amazon ElastiCache 集群，用于缓存经常访问的数据。

**正确答案 / Answer: `A`**

Amazon RDS Proxy is the best solution for managing high database connection loads in this scenario. It pools database connections and reuses them efficiently, reducing connection overhead and improving performance without requiring application code changes. Other options, such as enabling Multi-AZ or increasing instance size, do not directly address the problem of connection management.

Amazon RDS Proxy 是在这种情况下管理高数据库连接负载的最佳解决方案。它集中数据库连接并有效地重用它们，从而减少连接开销并提高性能，而无需更改应用程序代码。其他选项（例如启用多可用区或增加实例大小）并不能直接解决连接管理问题。

---

## Question 300  `Single answer`

**EN** A company is running a highly available application on Amazon RDS for PostgreSQL. The application has recently experienced an increase in traffic, resulting in intermittent connection errors due to the high number of database connections. The company wants to implement a solution to better handle the connection load and improve database performance without making changes to the application code. Which solution should the company implement?

**中** 一家公司正在 Amazon RDS for PostgreSQL 上运行高度可用的应用程序。该应用程序最近遇到了流量增加的情况，由于数据库连接数量过多，导致间歇性连接错误。该公司希望实施一种解决方案，以更好地处理连接负载并提高数据库性能，而无需更改应用程序代码。公司应该实施哪种解决方案？

- **A.** Enable Amazon RDS Proxy for the PostgreSQL database.
  - 为 PostgreSQL 数据库启用 Amazon RDS 代理。
- **B.** Scale the RDS instance to a larger instance type with more CPU and memory.
  - 将 RDS 实例扩展到具有更多 CPU 和内存的更大实例类型。
- **C.** Use Amazon ElastiCache to cache frequently accessed database queries.
  - 使用 Amazon ElastiCache 缓存经常访问的数据库查询。
- **D.** Enable Multi-AZ deployments for the RDS instance.
  - 为 RDS 实例启用多可用区部署。

**正确答案 / Answer: `A`**

Amazon RDS Proxy is designed to manage and pool database connections. By enabling RDS Proxy, the company can reduce the load on the database from a high number of connections, improve application scalability, and avoid the need for application code changes. This makes it the most effective and efficient solution to the given problem.

Amazon RDS 代理旨在管理和池化数据库连接。通过启用 RDS Proxy，该公司可以减少大量连接对数据库造成的负载，提高应用程序可扩展性，并避免更改应用程序代码。这使其成为解决给定问题的最有效和最高效的解决方案。

---

# AWS SAA-C03 真题演练卷 · 第 10 份

> 题目 451–500 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 451  `Single answer`

**EN** A company needs to run a batch processing job on a fleet of EC2 instances for several hours. The job is not time-sensitive and can tolerate interruptions. The company wants to minimize costs while ensuring the workload can be completed within an acceptable timeframe. Which purchasing option is the MOST cost-effective for this use case?

**中** 一家公司需要在一组 EC2 实例上运行批处理作业几个小时。这项工作对时间不敏感，可以容忍中断。该公司希望最大限度地降低成本，同时确保工作量能够在可接受的时间范围内完成。对于此用例，哪种购买选项最具成本效益？

- **A.** On-Demand Instances
  - 按需实例
- **B.** Reserved Instances
  - 预留实例
- **C.** Spot Instances
  - 现货实例
- **D.** Savings Plans
  - 储蓄计划

**正确答案 / Answer: `C`**

Spot Instances are the most cost-effective option for this scenario because they allow you to run EC2 instances at a significantly reduced price compared to On-Demand Instances. Since the batch job is not time-sensitive and can tolerate interruptions, the risk associated with Spot Instances is acceptable. Other options, such as Reserved Instances or Savings Plans, are better suited for predictable, long-term workloads and do not provide the same level of cost savings for this specific use case.

对于这种情况，竞价型实例是最具成本效益的选项，因为与按需实例相比，它们允许您以显着降低的价格运行 EC2 实例。由于批处理作业对时间不敏感并且可以容忍中断，因此与 Spot 实例相关的风险是可以接受的。其他选项（例如预留实例或节省计划）更适合可预测的长期工作负载，并且无法为此特定用例提供相同水平的成本节省。

---

## Question 452  `Single answer`

**EN** A company runs a set of batch processing workloads on Amazon EC2 instances. These workloads are non-critical and can be interrupted without causing significant issues. The company wants to minimize costs while running these workloads. Which purchasing option should they choose?

**中** 一家公司在 Amazon EC2 实例上运行一组批处理工作负载。这些工作负载并不重要，可以中断而不会造成重大问题。该公司希望在运行这些工作负载时最大限度地降低成本。他们应该选择哪种购买方式？

- **A.** On-Demand Instances
  - 按需实例
- **B.** Reserved Instances
  - 预留实例
- **C.** Spot Instances
  - 现货实例
- **D.** Savings Plans
  - 储蓄计划

**正确答案 / Answer: `C`**

Spot Instances are the best choice for this scenario because they are highly cost-effective for workloads that can tolerate interruptions, such as batch processing. By taking advantage of unused EC2 capacity, the company can reduce costs significantly compared to On-Demand Instances or Reserved Instances. While Savings Plans offer cost savings, they are not specifically tied to interruptible workloads and would not provide the same level of cost optimization as Spot Instances for this use case.

Spot 实例是这种场景的最佳选择，因为它们对于可以容忍中断的工作负载（例如批处理）来说具有很高的成本效益。与按需实例或预留实例相比，通过利用未使用的 EC2 容量，公司可以显着降低成本。虽然 Savings Plans 可以节省成本，但它们并不专门与可中断的工作负载相关，并且不会为此用例提供与 Spot 实例相同级别的成本优化。

---

## Question 453  `Single answer`

**EN** A company is designing a distributed video streaming application for its global audience. The application must minimize latency and provide seamless playback for users regardless of their geographic location. The company also wants to process metadata related to user engagement (such as play, pause, and stop events) as close to the users as possible. Which strategy should the company implement to meet these requirements?

**中** 一家公司正在为其全球受众设计分布式视频流应用程序。应用程序必须最大限度地减少延迟并为用户提供无缝播放，无论其地理位置如何。该公司还希望尽可能靠近用户处理与用户参与相关的元数据（例如播放、暂停和停止事件）。公司应该实施什么策略来满足这些要求？

- **A.** Use Amazon CloudFront to cache video content at edge locations and process metadata using AWS Lambda@Edge.
  - 使用 Amazon CloudFront 在边缘位置缓存视频内容并使用 AWS Lambda@Edge 处理元数据。
- **B.** Deploy Amazon EC2 instances in multiple AWS Regions and use an Application Load Balancer to distribute traffic.
  - 在多个 AWS 区域中部署 Amazon EC2 实例并使用 Application Load Balancer 分配流量。
- **C.** Use Amazon S3 for video storage, Amazon CloudFront for content delivery, and process metadata with an Amazon RDS database.
  - 使用 Amazon S3 进行视频存储，使用 Amazon CloudFront 进行内容交付，并使用 Amazon RDS 数据库处理元数据。
- **D.** Deploy an Amazon Elastic Kubernetes Service (Amazon EKS) cluster in a central region and use Amazon CloudFront to reduce latency.
  - 在中部区域部署 Amazon Elastic Kubernetes Service (Amazon EKS) 集群并使用 Amazon CloudFront 来减少延迟。

**正确答案 / Answer: `A`**

To minimize latency and provide seamless playback, video content should be cached close to the users using Amazon CloudFront. AWS Lambda@Edge enables processing of metadata at the edge locations, close to where the events occur, ensuring low-latency handling of user engagement data. This strategy is optimized for both content delivery and edge processing, meeting the requirements of the scenario.

为了最大限度地减少延迟并提供无缝播放，应使用 Amazon CloudFront 将视频内容缓存在靠近用户的位置。 AWS Lambda@Edge 支持在靠近事件发生位置的边缘位置处理元数据，确保用户参与数据的低延迟处理。该策略针对内容交付和边缘处理进行了优化，满足场景需求。

---

## Question 454  `Single answer`

**EN** A company processes large volumes of real-time sensor data from IoT devices deployed globally. The company needs to minimize latency for data processing and provide near-instant responses to users based on their geographical location. The processed data should also be sent to a central AWS Region for long-term analytics and storage. Which solution should the company implement to meet these requirements?

**中** 一家公司处理来自全球部署的物联网设备的大量实时传感器数据。该公司需要最大限度地减少数据处理的延迟，并根据用户的地理位置向用户提供近乎即时的响应。处理后的数据还应发送到中央 AWS 区域以进行长期分析和存储。公司应该实施哪种解决方案来满足这些要求？

- **A.** Use AWS Lambda@Edge to process the data at edge locations and Amazon S3 to store the processed data in the central AWS Region.
  - 使用 AWS Lambda@Edge 在边缘站点处理数据，并使用 Amazon S3 将处理后的数据存储在中央 AWS 区域。
- **B.** Deploy Amazon EC2 instances in multiple AWS Regions and use Auto Scaling to handle data processing.
  - 在多个 AWS 区域中部署 Amazon EC2 实例并使用 Auto Scaling 进行数据处理。
- **C.** Use AWS IoT Greengrass for edge processing and configure it to send processed data to Amazon S3 in the central AWS Region.
  - 使用 AWS IoT Greengrass 进行边缘处理，并将其配置为将处理后的数据发送到中央 AWS 区域中的 Amazon S3。
- **D.** Configure Amazon CloudFront to cache the data at edge locations and use Amazon Redshift to analyze the data in the central AWS Region.
  - 配置 Amazon CloudFront 以在边缘位置缓存数据，并使用 Amazon Redshift 分析中央 AWS 区域中的数据。

**正确答案 / Answer: `C`**

AWS IoT Greengrass is the ideal solution for this scenario because it allows edge devices to process IoT data locally, reducing latency and enabling near-instant responses. It also integrates seamlessly with AWS services like Amazon S3 for centralized storage and analytics. This makes it a perfect fit for distributed compute strategies in IoT use cases.

AWS IoT Greengrass 是此场景的理想解决方案，因为它允许边缘设备在本地处理 IoT 数据，从而减少延迟并实现近乎即时的响应。它还与 Amazon S3 等 AWS 服务无缝集成，以实现集中存储和分析。这使其非常适合物联网用例中的分布式计算策略。

---

## Question 455  `Single answer`

**EN** A company is building an IoT application that collects sensor data from devices located in remote areas with intermittent internet connectivity. They want to process the data locally at the source to reduce latency and only send aggregated results to the cloud for storage and further analysis. Which solution is the MOST appropriate for this use case?

**中** 一家公司正在构建一个物联网应用程序，该应用程序从位于互联网连接间歇性的偏远地区的设备收集传感器数据。他们希望在源头本地处理数据以减少延迟，并且仅将汇总结果发送到云端进行存储和进一步分析。哪种解决方案最适合此用例？

- **A.** Deploy AWS Lambda@Edge functions to process the data locally on the IoT devices.
  - 部署 AWS Lambda@Edge 功能以在物联网设备上本地处理数据。
- **B.** Use Amazon S3 Transfer Acceleration to speed up data transfer from IoT devices to the cloud for processing.
  - 使用 Amazon S3 传输加速加速从 IoT 设备到云端的数据传输以进行处理。
- **C.** Implement AWS IoT Greengrass on the IoT devices for local data processing and aggregation.
  - 在 IoT 设备上实施 AWS IoT Greengrass 以进行本地数据处理和聚合。
- **D.** Set up Amazon EC2 instances in an AWS Region close to the IoT devices for real-time data processing.
  - 在靠近 IoT 设备的 AWS 区域中设置 Amazon EC2 实例以进行实时数据处理。

**正确答案 / Answer: `C`**

AWS IoT Greengrass is designed specifically to enable edge processing by allowing IoT devices to run Lambda functions locally, process data in real-time, and operate with intermittent connectivity. This solution aligns perfectly with the requirements of the scenario, where local data processing and reduced reliance on cloud connectivity are essential.

AWS IoT Greengrass 专门设计用于支持边缘处理，允许 IoT 设备在本地运行 Lambda 函数、实时处理数据并通过间歇性连接进行操作。该解决方案完全符合场景的要求，其中本地数据处理和减少对云连接的依赖至关重要。

---

## Question 456  `Single answer`

**EN** A company is designing an IoT solution to process video data from thousands of surveillance cameras deployed across multiple locations. The solution should minimize latency and reduce the need to send large volumes of raw video data to a central AWS Region for analysis. Which approach should the company implement to achieve these requirements?

**中** 一家公司正在设计一种物联网解决方案，用于处理来自部署在多个地点的数千个监控摄像头的视频数据。该解决方案应最大限度地减少延迟并减少将大量原始视频数据发送到中央 AWS 区域进行分析的需要。公司应该采用哪种方法来实现这些要求？

- **A.** Use AWS Lambda functions deployed in the central AWS Region to process video streams in real-time.
  - 使用部署在 AWS 中部区域的 AWS Lambda 函数来实时处理视频流。
- **B.** Deploy Amazon Elastic Kubernetes Service (Amazon EKS) clusters in the central AWS Region to process video data.
  - 在中部 AWS 区域部署 Amazon Elastic Kubernetes Service (Amazon EKS) 集群来处理视频数据。
- **C.** Implement AWS IoT Greengrass on edge devices to process video data locally before sending only necessary insights to AWS.
  - 在边缘设备上实施 AWS IoT Greengrass 以在本地处理视频数据，然后仅向 AWS 发送必要的见解。
- **D.** Stream all raw video data to Amazon S3 and use AWS Glue to process the video files.
  - 将所有原始视频数据流式传输到 Amazon S3 并使用 AWS Glue 处理视频文件。

**正确答案 / Answer: `C`**

The best solution for reducing latency and minimizing the transmission of raw video data is to use AWS IoT Greengrass. Greengrass enables IoT devices to process data locally at the edge, allowing the system to perform real-time processing and only send necessary insights to the cloud. This approach is particularly effective for distributed compute strategies in scenarios where low latency is critical.

减少延迟并最大限度地减少原始视频数据传输的最佳解决方案是使用 AWS IoT Greengrass。 Greengrass 使物联网设备能够在边缘本地处理数据，从而使系统能够执行实时处理并仅将必要的见解发送到云端。在低延迟至关重要的场景中，这种方法对于分布式计算策略特别有效。

---

## Question 457  `Single answer`

**EN** A company operates a manufacturing facility in a remote location with limited internet connectivity. They need to run low-latency applications for processing IoT sensor data locally, while also periodically syncing the processed data to AWS for centralized storage and analytics. Which AWS service or solution is the most appropriate for this use case?

**中** 一家公司在互联网连接有限的偏远地区经营一家制造工厂。他们需要运行低延迟应用程序来在本地处理物联网传感器数据，同时还定期将处理后的数据同步到 AWS 以进行集中存储和分析。哪种 AWS 服务或解决方案最适合此用例？

- **A.** AWS Outposts
  - AWS Outposts
- **B.** AWS Snowball Edge
  - AWS Snowball 边缘
- **C.** AWS Local Zones
  - AWS 本地区域
- **D.** Amazon EC2 instances in the nearest AWS Region
  - 最近的 AWS 区域中的 Amazon EC2 实例

**正确答案 / Answer: `B`**

AWS Snowball Edge is the best solution for this use case because it provides both local compute and storage capabilities, enabling the company to process IoT sensor data with low latency in a remote location. It is specifically designed for environments with limited or no internet connectivity, and it allows the data to be synced to AWS for further processing and storage when connectivity is available.

AWS Snowball Edge 是此用例的最佳解决方案，因为它提供本地计算和存储功能，使公司能够在远程位置以低延迟处理物联网传感器数据。它专为互联网连接有限或没有互联网连接的环境而设计，它允许将数据同步到 AWS，以便在连接可用时进行进一步处理和存储。

---

## Question 458  `Single answer`

**EN** A manufacturing company operates in a remote location with limited internet connectivity. They want to run and process low-latency workloads locally while ensuring seamless integration with their existing AWS cloud environment. Which AWS service would be the most suitable solution for this scenario?

**中** 一家制造公司在互联网连接有限的偏远地区运营。他们希望在本地运行和处理低延迟工作负载，同时确保与现有的 AWS 云环境无缝集成。哪种 AWS 服务最适合这种场景的解决方案？

- **A.** AWS Outposts
  - AWS Outposts
- **B.** AWS Snowball Edge
  - AWS Snowball 边缘
- **C.** AWS Direct Connect
  - AWS Direct Connect
- **D.** Amazon EC2
  - Amazon EC2

**正确答案 / Answer: `B`**

AWS Snowball Edge is the most suitable choice for the given scenario because it is designed to operate in remote or disconnected environments. It provides local compute and storage capabilities, allowing workloads to run locally without internet connectivity. AWS Outposts, while offering hybrid functionality, requires continuous connectivity to AWS, and other options like AWS Direct Connect and Amazon EC2 are not designed for disconnected or remote environments.

AWS Snowball Edge 是给定场景的最合适选择，因为它设计用于在远程或断开连接的环境中运行。它提供本地计算和存储功能，允许工作负载在没有互联网连接的情况下本地运行。 AWS Outposts 虽然提供混合功能，但需要与 AWS 持续连接，而 AWS Direct Connect 和 Amazon EC2 等其他选项并非专为断开连接或远程环境而设计。

---

## Question 459  `Single answer`

**EN** A company operates a high-latency, low-bandwidth facility in a remote location where cloud connectivity is unreliable. They need to process data locally and periodically sync it with AWS for long-term storage and analysis. Which solution is the most suitable for their requirements?

**中** 一家公司在云连接不可靠的远程位置运营高延迟、低带宽设施。他们需要在本地处理数据并定期与 AWS 同步以进行长期存储和分析。哪种解决方案最适合他们的要求？

- **A.** Use AWS Outposts to extend AWS infrastructure to the remote facility.
  - 使用 AWS Outposts 将 AWS 基础设施扩展到远程设施。
- **B.** Use AWS Snowball Edge to process data locally and transfer it to AWS when internet connectivity is available.
  - 使用 AWS Snowball Edge 在本地处理数据，并在互联网连接可用时将其传输到 AWS。
- **C.** Launch an EC2 instance in the nearest AWS Region and use a VPN for secure data transfer.
  - 在最近的 AWS 区域启动 EC2 实例并使用 VPN 进行安全数据传输。
- **D.** Use Amazon S3 Transfer Acceleration to minimize latency and optimize data transfer.
  - 使用 Amazon S3 传输加速来最大限度地减少延迟并优化数据传输。

**正确答案 / Answer: `B`**

AWS Snowball Edge is specifically designed for hybrid environments where internet connectivity is unreliable or unavailable. It enables local data processing and can sync with AWS later, making it the optimal solution for the company's requirements. The other options either depend on stable internet connectivity or do not address the need for local data processing.

AWS Snowball Edge 专为互联网连接不可靠或不可用的混合环境而设计。它支持本地数据处理，并可以稍后与 AWS 同步，使其成为满足公司需求的最佳解决方案。其他选项要么依赖于稳定的互联网连接，要么无法满足本地数据处理的需求。

---

## Question 460  `Single answer`

**EN** A company needs to run a low-latency application that processes sensitive customer data in a location with poor network connectivity to AWS Regions. The application requires consistent performance and integration with existing AWS services. Which hybrid solution should the company use to meet these requirements?

**中** 公司需要运行一个低延迟应用程序，在与 AWS 区域的网络连接较差的位置处理敏感的客户数据。该应用程序需要一致的性能以及与现有 AWS 服务的集成。公司应该使用哪种混合解决方案来满足这些要求？

- **A.** AWS Outposts
  - AWS Outposts
- **B.** AWS Snowball Edge Compute Optimized
  - AWS Snowball 边缘计算优化
- **C.** AWS Direct Connect
  - AWS Direct Connect
- **D.** Amazon Elastic Compute Cloud (Amazon EC2)
  - Amazon 弹性计算云 (Amazon EC2)

**正确答案 / Answer: `A`**

AWS Outposts is specifically designed to extend AWS resources to customer-operated on-premises environments, providing low latency, consistent AWS service performance, and integration with AWS. This makes it the ideal choice for running applications that require local processing and seamless access to AWS services in environments with poor connectivity to AWS Regions.

AWS Outposts 专门设计用于将 AWS 资源扩展到客户运营的本地环境，提供低延迟、一致的 AWS 服务性能以及与 AWS 的集成。这使其成为在与 AWS 区域连接较差的环境中运行需要本地处理和无缝访问 AWS 服务的应用程序的理想选择。

---

## Question 461  `Single answer`

**EN** A company is running a high-performance computing (HPC) workload that requires low latency and high network throughput. They need to select an EC2 instance type optimized for compute-intensive workloads and networking performance. Which instance type should they choose?

**中** 一家公司正在运行需要低延迟和高网络吞吐量的高性能计算 (HPC) 工作负载。他们需要选择针对计算密集型工作负载和网络性能进行优化的 EC2 实例类型。他们应该选择哪种实例类型？

- **A.** R5 instances - Memory optimized
  - R5 实例 - 内存优化
- **B.** C6g instances - Compute optimized
  - C6g 实例 - 计算优化
- **C.** T3 instances - Burstable general purpose
  - T3 实例 - 可突发通用
- **D.** M6i instances - General purpose
  - M6i 实例 - 通用

**正确答案 / Answer: `B`**

Compute-optimized instances, such as C6g, are designed for high-performance workloads that require significant compute power and low latency. These instances are ideal for high-performance computing (HPC) applications, as they provide enhanced networking capabilities and optimized CPU performance. Other instance types, such as memory-optimized or general-purpose instances, are not specialized for compute-intensive tasks.

计算优化实例（例如 C6g）专为需要大量计算能力和低延迟的高性能工作负载而设计。这些实例非常适合高性能计算 (HPC) 应用程序，因为它们提供增强的网络功能和优化的 CPU 性能。其他实例类型（例如内存优化实例或通用实例）并非专门用于计算密集型任务。

---

## Question 462  `Single answer`

**EN** A company is running a data processing application that requires high computational power and low latency for complex calculations. The application does not require significant amounts of memory or storage. Which EC2 instance type should the company choose to optimize performance while minimizing costs?

**中** 一家公司正在运行一个数据处理应用程序，该应用程序需要高计算能力和低延迟来进行复杂计算。该应用程序不需要大量内存或存储。公司应该选择哪种 EC2 实例类型来优化性能，同时最大限度地降低成本？

- **A.** C5 (Compute Optimized) instances
  - C5（计算优化）实例
- **B.** R5 (Memory Optimized) instances
  - R5（内存优化）实例
- **C.** T4g (Burstable Performance) instances
  - T4g（突发性能）实例
- **D.** I3 (Storage Optimized) instances
  - I3（存储优化）实例

**正确答案 / Answer: `A`**

The application described in the scenario requires high computational power and low latency for processing, which aligns with the capabilities of Compute Optimized instances such as the C5 family. Compute Optimized instances are specifically designed to deliver high performance for compute-intensive workloads, making them the best choice for this use case.

该场景中描述的应用程序需要高计算能力和低处理延迟，这与 C5 系列等计算优化实例的功能相一致。计算优化实例专门为计算密集型工作负载提供高性能而设计，使其成为此用例的最佳选择。

---

## Question 463  `Single answer`

**EN** A gaming company runs a multiplayer online game that requires high-performance compute resources for real-time gameplay processing. The workload is not memory-intensive but requires low latency and high-speed CPU performance. Which EC2 instance type should the company choose to optimize cost and performance?

**中** 一家游戏公司运行一款多人在线游戏，需要高性能计算资源来进行实时游戏处理。该工作负载不是内存密集型的，但需要低延迟和高速的 CPU 性能。公司应该选择哪种 EC2 实例类型来优化成本和性能？

- **A.** R6g (Memory optimized, Graviton2 processor)
  - R6g（内存优化，Graviton2 处理器）
- **B.** C6g (Compute optimized, Graviton2 processor)
  - C6g（计算优化，Graviton2 处理器）
- **C.** M6a (General purpose, AMD processor)
  - M6a（通用，AMD 处理器）
- **D.** T4g (Burstable performance, Graviton2 processor)
  - T4g（突发性能，Graviton2 处理器）

**正确答案 / Answer: `B`**

Compute-optimized EC2 instances, such as the C6g family, are designed for applications requiring high-performance CPUs with low latency. This makes them an excellent fit for compute-intensive workloads, such as real-time multiplayer gaming. Other instance families, like memory-optimized (R6g) and general-purpose (M6a), are better suited for workloads with different resource needs, while burstable instances (T4g) are not designed to handle sustained high-performance requirements.

计算优化的 EC2 实例（例如 C6g 系列）专为需要高性能 CPU 和低延迟的应用程序而设计。这使得它们非常适合计算密集型工作负载，例如实时多人游戏。其他实例系列，例如内存优化型 (R6g) 和通用型 (M6a)，更适合具有不同资源需求的工作负载，而突发型实例 (T4g) 则无法满足持续的高性能要求。

---

## Question 464  `Single answer`

**EN** A company is running a batch processing application that handles large datasets and requires high memory capacity to perform in-memory computations efficiently. The application is CPU-intensive but benefits most from having a large memory footprint. Which instance type should the company choose to optimize performance and cost?

**中** 一家公司正在运行一个批处理应用程序，该应用程序可以处理大型数据集，并且需要高内存容量才能有效地执行内存中计算。该应用程序是 CPU 密集型的，但最大的好处是拥有大的内存占用。公司应该选择哪种实例类型来优化性能和成本？

- **A.** Compute Optimized (C5)
  - 计算优化 (C5)
- **B.** Memory Optimized (R5)
  - 内存优化 (R5)
- **C.** Storage Optimized (I3)
  - 存储优化 (I3)
- **D.** General Purpose (T4g)
  - 通用 (T4g)

**正确答案 / Answer: `B`**

Memory Optimized (R5) instances are the best choice for memory-intensive applications that require high memory capacity for in-memory computations. These instances provide the optimal memory-to-vCPU ratio, ensuring efficient processing of large datasets while keeping costs in check. Other instance families, like Compute Optimized or Storage Optimized, do not prioritize high memory capacity and would not be a cost-effective or performance-efficient choice for this workload.

内存优化 (R5) 实例是需要高内存容量进行内存计算的内存密集型应用程序的最佳选择。这些实例提供最佳的内存与 vCPU 比率，确保高效处理大型数据集，同时控制成本。其他实例系列（例如计算优化型或存储优化型）不会优先考虑高内存容量，因此对于此工作负载而言不是经济高效或性能高效的选择。

---

## Question 465  `Single answer`

**EN** A company is running a monolithic application on a single Amazon EC2 instance that experiences unpredictable traffic spikes. The company wants to optimize compute utilization by decoupling the application into smaller components without managing infrastructure. What solution should the company implement?

**中** 一家公司正在单个 Amazon EC2 实例上运行整体应用程序，该实例会遇到不可预测的流量峰值。该公司希望通过将应用程序解耦为更小的组件来优化计算利用率，而无需管理基础设施。公司应该实施什么解决方案？

- **A.** Use Amazon ECS with Fargate to containerize the application and deploy its components as microservices.
  - 将 Amazon ECS 与 Fargate 结合使用来容器化应用程序并将其组件部署为微服务。
- **B.** Migrate the application to Amazon RDS to handle the traffic spikes with database scaling.
  - 将应用程序迁移到 Amazon RDS，以通过数据库扩展来处理流量峰值。
- **C.** Refactor the application into AWS Lambda functions and use Amazon API Gateway for routing between components.
  - 将应用程序重构为 AWS Lambda 函数，并使用 Amazon API Gateway 在组件之间进行路由。
- **D.** Deploy the application on an Auto Scaling group of Amazon EC2 instances with a load balancer.
  - 使用负载均衡器在 Amazon EC2 实例的 Auto Scaling 组上部署应用程序。

**正确答案 / Answer: `C`**

The best solution is to refactor the application into AWS Lambda functions and use Amazon API Gateway for routing. This approach optimizes compute utilization by adopting a serverless architecture, which automatically scales with traffic and eliminates the need to manage infrastructure. It also enables the application to be decoupled into microservices, which aligns with the company's goal.

最好的解决方案是将应用程序重构为 AWS Lambda 函数并使用 Amazon API Gateway 进行路由。这种方法通过采用无服务器架构来优化计算利用率，该架构可以根据流量自动扩展，并且无需管理基础设施。它还使应用程序能够解耦为微服务，这符合公司的目标。

---

## Question 466  `Select 3`

**EN** A company is running a monolithic application on a fleet of EC2 instances, but they are experiencing high operational overhead and uneven utilization of compute resources during traffic spikes. They want to improve scalability and reduce costs by migrating to a more optimized architecture. Which combination of solutions would best address their requirements?

**中** 一家公司正在一组 EC2 实例上运行单体应用程序，但在流量高峰期间，他们面临着较高的运营开销和计算资源利用率不均匀的情况。他们希望通过迁移到更优化的架构来提高可扩展性并降低成本。哪种解决方案组合最能满足他们的需求？

- **A.** Migrate the application to AWS Lambda functions and use Amazon API Gateway to manage incoming requests
  - 将应用程序迁移到 AWS Lambda 功能并使用 Amazon API Gateway 管理传入请求
- **B.** Containerize the application and deploy it to Amazon ECS with AWS Fargate as the launch type
  - 将应用程序容器化并将其部署到 Amazon ECS，并使用 AWS Fargate 作为启动类型
- **C.** Use EC2 Auto Scaling with a larger instance size to handle traffic spikes
  - 使用具有较大实例大小的 EC2 Auto Scaling 来应对流量高峰
- **D.** Break the monolithic application into microservices and deploy them on Amazon Elastic Kubernetes Service (EKS)
  - 将单体应用程序分解为微服务并将其部署在 Amazon Elastic Kubernetes Service (EKS) 上
- **E.** Migrate to Amazon Lightsail to simplify the infrastructure management
  - 迁移到 Amazon Lightsail 以简化基础设施管理

**正确答案 / Answer: `A, B, D`**

To optimize compute utilization, the company should prioritize serverless computing, containerization, and microservices architecture. AWS Lambda with Amazon API Gateway provides a fully managed serverless solution. Amazon ECS with AWS Fargate allows running containers without managing server infrastructure. Breaking the application into microservices and using Amazon EKS ensures modularity and scalability. Solutions like EC2 Auto Scaling with larger instances or Amazon Lightsail are less effective for the stated requirements.

为了优化计算利用率，公司应优先考虑无服务器计算、容器化和微服务架构。 AWS Lambda 与 Amazon API Gateway 提供完全托管的无服务器解决方案。 Amazon ECS 与 AWS Fargate 允许运行容器而无需管理服务器基础设施。将应用程序分解为微服务并使用 Amazon EKS 确保了模块化和可扩展性。具有较大实例的 EC2 Auto Scaling 或 Amazon Lightsail 等解决方案对于规定的要求效果较差。

---

## Question 467  `Select 2`

**EN** A company is designing a new web application that experiences unpredictable traffic spikes. They want to optimize their compute utilization and minimize operational overhead while ensuring the application can scale seamlessly to handle traffic fluctuations. Which AWS services should the company use to meet these requirements?

**中** 一家公司正在设计一个新的 Web 应用程序，该应用程序会遇到不可预测的流量峰值。他们希望优化计算利用率并最大限度地减少运营开销，同时确保应用程序可以无缝扩展以应对流量波动。公司应该使用哪些 AWS 服务来满足这些要求？

- **A.** Amazon ECS with Fargate
  - Amazon ECS 带 Fargate
- **B.** AWS Lambda
  - AWS Lambda
- **C.** Amazon EC2 Auto Scaling with On-Demand Instances
  - Amazon EC2 按需实例自动伸缩
- **D.** AWS Elastic Beanstalk with a custom AMI
  - 带有自定义 AMI 的 AWS Elastic Beanstalk
- **E.** Amazon EC2 Reserved Instances
  - Amazon EC2 预留实例

**正确答案 / Answer: `A, B`**

Amazon ECS with Fargate and AWS Lambda are both serverless solutions that abstract server management and automatically scale to handle unpredictable traffic patterns. ECS with Fargate is ideal for containerized workloads, while AWS Lambda is perfect for event-driven applications. Both options minimize operational overhead and optimize compute utilization, aligning with the company's requirements for flexibility and seamless scaling.

带 Fargate 的 Amazon ECS 和 AWS Lambda 都是无服务器解决方案，可抽象服务器管理并自动扩展以处理不可预测的流量模式。具有 Fargate 的 ECS 非常适合容器化工作负载，而 AWS Lambda 则非常适合事件驱动的应用程序。这两种选项都最大限度地减少了运营开销并优化了计算利用率，符合公司对灵活性和无缝扩展的要求。

---

## Question 468  `Single answer`

**EN** A startup is running a web application that experiences unpredictable traffic spikes. The application consists of multiple microservices that need to scale independently. The team wants to optimize compute utilization while minimizing operational overhead and costs. Which approach should they take?

**中** 一家初创公司正在运行一个 Web 应用程序，该应用程序会遇到不可预测的流量峰值。该应用程序由多个需要独立扩展的微服务组成。该团队希望优化计算利用率，同时最大限度地减少运营开销和成本。他们应该采取哪种方法？

- **A.** Deploy the application on Amazon EC2 instances in an Auto Scaling group with pre-defined scaling policies.
  - 使用预定义的扩展策略将应用程序部署在 Auto Scaling 组中的 Amazon EC2 实例上。
- **B.** Package the microservices into containers and deploy them on Amazon ECS with AWS Fargate.
  - 将微服务打包到容器中，然后将其部署在 Amazon ECS 和 AWS Fargate 上。
- **C.** Use AWS Lambda functions for each microservice and trigger them based on specific events.
  - 对每个微服务使用 AWS Lambda 函数，并根据特定事件触发它们。
- **D.** Use Amazon EC2 instances with Elastic Load Balancing to distribute traffic among the instances.
  - 将 Amazon EC2 实例与 Elastic Load Balancing 结合使用在实例之间分配流量。

**正确答案 / Answer: `B`**

Amazon ECS with AWS Fargate is the best option for this scenario because it allows the startup to package microservices into containers and deploy them without managing servers. Fargate automatically allocates the right amount of compute resources for each container, enabling independent scaling of microservices and optimizing compute utilization. This minimizes operational overhead and costs, making it an ideal solution for unpredictable traffic patterns.

Amazon ECS 和 AWS Fargate 是这种场景的最佳选择，因为它允许初创公司将微服务打包到容器中并部署它们，而无需管理服务器。 Fargate 自动为每个容器分配适量的计算资源，从而实现微服务的独立扩展并优化计算利用率。这最大限度地减少了运营开销和成本，使其成为不可预测的流量模式的理想解决方案。

---

## Question 469  `Single answer`

**EN** Your company runs a web application on Amazon EC2 instances behind an Application Load Balancer. Traffic to your application is highly variable, with frequent spikes during promotional campaigns. You want to ensure the application can automatically handle traffic spikes efficiently while minimizing costs. Which scaling strategy should you choose?

**中** 您的公司在 Application Load Balancer 后面的 Amazon EC2 实例上运行 Web 应用程序。您的应用程序的流量变化很大，在促销活动期间经常出现峰值。您希望确保应用程序能够自动有效地处理流量峰值，同时最大限度地降低成本。您应该选择哪种扩展策略？

- **A.** Set up an Auto Scaling group with dynamic scaling policies based on CPU utilization metrics.
  - 根据 CPU 利用率指标设置具有动态扩展策略的 Auto Scaling 组。
- **B.** Manually add and remove EC2 instances from the Auto Scaling group during traffic spikes.
  - 在流量高峰期间，手动在 Auto Scaling 组中添加和删除 EC2 实例。
- **C.** Configure an Auto Scaling group with scheduled scaling policies aligned to your promotional campaign times.
  - 使用与促销活动时间一致的计划扩展策略配置 Auto Scaling 组。
- **D.** Enable hibernation for the EC2 instances to quickly resume operations during traffic spikes.
  - 启用 EC2 实例的休眠功能，以便在流量高峰期间快速恢复运行。

**正确答案 / Answer: `A`**

Dynamic scaling policies in an Auto Scaling group allow you to automatically adjust the number of EC2 instances based on real-time metrics, such as CPU utilization or application load. This strategy is ideal for handling highly variable traffic patterns efficiently, as it ensures the application scales out during spikes and scales in when traffic decreases, minimizing costs. Other options either require manual intervention, are designed for predictable traffic patterns, or do not address scaling at all.

Auto Scaling 组中的动态扩展策略允许您根据实时指标（例如 CPU 利用率或应用程序负载）自动调整 EC2 实例的数量。该策略非常适合有效处理高度变化的流量模式，因为它可以确保应用程序在高峰期间横向扩展，并在流量下降时横向收缩，从而最大限度地降低成本。其他选项要么需要手动干预，要么是为可预测的流量模式而设计的，要么根本不解决扩展问题。

---

## Question 470  `Single answer`

**EN** A company runs an e-commerce application on Amazon EC2 instances behind an Application Load Balancer (ALB). During seasonal sales events, there is a significant spike in traffic, often leading to degraded application performance due to resource constraints. The company wants to ensure the application can handle traffic spikes while optimizing costs. Which scaling strategy should the company implement to meet these requirements?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行电子商务应用程序。在季节性销售活动期间，流量会大幅增加，通常会因资源限制而导致应用程序性能下降。该公司希望确保应用程序能够处理流量高峰，同时优化成本。公司应该实施哪种扩展策略来满足这些要求？

- **A.** Set up an Auto Scaling group with scheduled scaling policies to scale up during expected traffic spikes.
  - 设置具有计划扩展策略的 Auto Scaling 组，以便在预期流量高峰期间进行扩展。
- **B.** Enable EC2 instance hibernation to quickly resume instances during traffic spikes.
  - 启用 EC2 实例休眠以在流量高峰期间快速恢复实例。
- **C.** Set up an Auto Scaling group with dynamic scaling policies based on ALB target group request counts.
  - 根据 ALB 目标组请求计数设置具有动态扩展策略的 Auto Scaling 组。
- **D.** Manually launch additional EC2 instances during sales events to handle increased traffic.
  - 在销售活动期间手动启动额外的 EC2 实例以处理增加的流量。

**正确答案 / Answer: `C`**

Dynamic scaling policies with Auto Scaling groups allow the application to adjust its capacity based on real-time demand. By using metrics such as request counts from the ALB target group, the system can automatically add or remove instances as traffic increases or decreases. This ensures optimal performance during high traffic while controlling costs during low traffic periods. Scheduled scaling is less flexible, hibernation is not designed for traffic scaling, and manual intervention is not practical or efficient.

具有 Auto Scaling 组的动态扩展策略允许应用程序根据实时需求调整其容量。通过使用 ALB 目标组的请求计数等指标，系统可以随着流量的增加或减少自动添加或删除实例。这确保了高流量期间的最佳性能，同时在低流量期间控制成本。计划扩展不太灵活，休眠不是为流量扩展而设计的，并且手动干预不实用或不高效。

---

## Question 471  `Select 3`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer. The traffic to the application fluctuates significantly throughout the day, with spikes in usage during certain hours. The company wants to ensure that the application remains highly available while minimizing costs. Which combination of actions should you recommend to meet these requirements?

**中** 一家公司正在 Application Load Balancer 后面的 Amazon EC2 实例上运行 Web 应用程序。应用程序的流量全天波动很大，在某些时段使用量会出现峰值。该公司希望确保应用程序保持高可用性，同时最大限度地降低成本。您应该建议采取哪种行动组合来满足这些要求？

- **A.** Configure an Auto Scaling group with dynamic scaling policies based on CPU utilization.
  - 使用基于 CPU 利用率的动态扩展策略配置 Auto Scaling 组。
- **B.** Enable EC2 Hibernate to reuse instance memory during traffic spikes.
  - 允许 EC2 Hibernate 在流量高峰期间重用实例内存。
- **C.** Set up an Auto Scaling group with scheduled scaling to handle predictable traffic patterns.
  - 设置具有计划扩展的 Auto Scaling 组以处理可预测的流量模式。
- **D.** Manually launch and terminate EC2 instances to match traffic demand.
  - 手动启动和终止 EC2 实例以满足流量需求。
- **E.** Use Spot Instances in the Auto Scaling group to reduce costs.
  - 使用 Auto Scaling 组中的 Spot 实例来降低成本。

**正确答案 / Answer: `A, C, E`**

To handle fluctuating traffic while minimizing costs, you should leverage Auto Scaling with both dynamic and scheduled scaling policies. Dynamic scaling ensures the system responds to real-time traffic changes, while scheduled scaling optimizes for predictable traffic patterns. Additionally, introducing Spot Instances into the Auto Scaling group reduces costs without compromising scalability or availability. EC2 Hibernate and manual management are not suitable strategies for this scenario.

为了处理波动的流量，同时最大限度地降低成本，您应该利用具有动态和计划扩展策略的 Auto Scaling。动态扩展可确保系统响应实时流量变化，而计划扩展可针对可预测的流量模式进行优化。此外，将 Spot 实例引入 Auto Scaling 组可以降低成本，而不会影响可扩展性或可用性。 EC2 Hibernate 和手动管理不适合此场景。

---

## Question 472  `Single answer`

**EN** An e-commerce company is using an Amazon EC2 instance to host their application. During peak holiday seasons, the traffic to their website increases significantly, causing performance issues. The company wants a cost-effective solution to handle these traffic spikes automatically and scale down during off-peak hours. Additionally, they want to avoid losing in-memory session data when instances are terminated. Which solution best addresses this requirement?

**中** 一家电子商务公司正在使用 Amazon EC2 实例来托管其应用程序。在假期高峰期间，其网站的流量显着增加，导致性能问题。该公司希望有一个经济高效的解决方案来自动处理这些流量高峰并在非高峰时段缩减流量。此外，他们希望避免在实例终止时丢失内存中的会话数据。哪种解决方案最能满足这一要求？

- **A.** Use Auto Scaling with a launch configuration and enable instance hibernation.
  - 将 Auto Scaling 与启动配置结合使用并启用实例休眠。
- **B.** Use Auto Scaling with a launch template and Amazon Elastic Load Balancer (ELB) to distribute traffic.
  - 将 Auto Scaling 与启动模板和 Amazon Elastic Load Balancer (ELB) 结合使用来分配流量。
- **C.** Use an Amazon EC2 instance with an EBS-backed root volume and manually scale the instance type during peak times.
  - 使用具有 EBS 支持的根卷的 Amazon EC2 实例，并在高峰时段手动扩展实例类型。
- **D.** Use AWS Lambda functions to replace the EC2 instance and handle varying traffic.
  - 使用 AWS Lambda 函数替换 EC2 实例并处理变化的流量。

**正确答案 / Answer: `B`**

The correct answer is to use Auto Scaling with a launch template and an Amazon Elastic Load Balancer (ELB). Auto Scaling allows the application to automatically increase or decrease the number of EC2 instances based on demand, ensuring cost efficiency and high availability. ELB ensures that traffic is distributed evenly across instances, providing better performance during high traffic periods. Hibernation is not suitable for Auto Scaling, as it is used for different use cases, like quickly resuming long-running instances.

正确的答案是将 Auto Scaling 与启动模板和 Amazon Elastic Load Balancer (ELB) 结合使用。 Auto Scaling 允许应用程序根据需求自动增加或减少 EC2 实例的数量，从而确保成本效率和高可用性。 ELB 确保流量在实例之间均匀分布，从而在高流量期间提供更好的性能。休眠不适合 Auto Scaling，因为它用于不同的用例，例如快速恢复长时间运行的实例。

---

## Question 473  `Single answer`

**EN** A startup is developing a new analytics platform for processing user behavior data. They expect high read and write throughput during peak times but anticipate that traffic will vary significantly throughout the day. The company wants to minimize costs while ensuring the database automatically scales to handle these workload variations. What is the most cost-optimized database solution for their needs?

**中** 一家初创公司正在开发一个新的分析平台来处理用户行为数据。他们预计高峰时段会有较高的读写吞吐量，但预计全天流量会有很大变化。该公司希望最大限度地降低成本，同时确保数据库自动扩展以处理这些工作负载变化。满足他们需求的成本最优化的数据库解决方案是什么？

- **A.** Use Amazon RDS with a Multi-AZ deployment and provisioned IOPS storage.
  - 将 Amazon RDS 与多可用区部署和预配置 IOPS 存储结合使用。
- **B.** Use Amazon DynamoDB with on-demand capacity mode.
  - 使用 Amazon DynamoDB 按需容量模式。
- **C.** Use Amazon Aurora Serverless v2 with auto-scaling configured.
  - 使用配置了自动扩展的 Amazon Aurora Serverless v2。
- **D.** Use Amazon ElastiCache for Redis with fixed-node clusters.
  - 将 Amazon ElastiCache 用于具有固定节点集群的 Redis。

**正确答案 / Answer: `B`**

Amazon DynamoDB with on-demand capacity mode is ideal for applications with unpredictable or highly variable workloads. It automatically scales to meet demand and charges only for the read and write capacity actually consumed, making it the most cost-optimized solution for the given scenario.

具有按需容量模式的 Amazon DynamoDB 非常适合具有不可预测或高度可变工作负载的应用程序。它会自动扩展以满足需求，并且仅根据实际消耗的读写容量收费，使其成为给定场景中成本最优化的解决方案。

---

## Question 474  `Single answer`

**EN** A company needs to design a cost-optimized database solution for their e-commerce application. The workload involves frequent read and write operations, with unpredictable traffic spikes during sales events. Data must be highly available and durable, and the company wants to minimize costs by selecting the most appropriate database service. Which solution is the most cost-effective and meets the requirements?

**中** 公司需要为其电子商务应用程序设计成本优化的数据库解决方案。该工作负载涉及频繁的读写操作，并且在销售活动期间会出现不可预测的流量峰值。数据必须具有高可用性和持久性，公司希望通过选择最合适的数据库服务来最大限度地降低成本。哪种解决方案最具成本效益且满足要求？

- **A.** Use Amazon RDS with Multi-AZ deployment and provisioned capacity.
  - 将 Amazon RDS 与多可用区部署和预置容量结合使用。
- **B.** Use Amazon DynamoDB with on-demand capacity mode.
  - 使用 Amazon DynamoDB 按需容量模式。
- **C.** Use Amazon Aurora Serverless v2 with read replicas.
  - 将 Amazon Aurora Serverless v2 与只读副本结合使用。
- **D.** Use Amazon Redshift with reserved nodes.
  - 使用带有保留节点的 Amazon Redshift。

**正确答案 / Answer: `B`**

For unpredictable traffic spikes with frequent read/write operations, Amazon DynamoDB with on-demand capacity mode is the most cost-effective solution. It provides automatic scaling that aligns with the e-commerce application's workload, ensuring no overprovisioning or underutilization. Additionally, DynamoDB's durability and high availability features meet the requirements for the application.

对于频繁读/写操作的不可预测的流量峰值，具有按需容量模式的 Amazon DynamoDB 是最具成本效益的解决方案。它提供与电子商务应用程序的工作负载相匹配的自动扩展，确保不会出现过度配置或利用率不足的情况。此外，DynamoDB 的耐用性和高可用性功能满足应用程序的要求。

---

## Question 475  `Single answer`

**EN** A company runs a high-traffic e-commerce platform that uses a relational database for its transactional data. The database experiences unpredictable workloads with traffic spikes during major sales events. The company has a limited budget and wants to ensure the database solution is cost-optimized while still providing high availability and scalability. Which solution is the most cost-effective choice?

**中** 一家公司运营一个高流量电子商务平台，该平台使用关系数据库来存储交易数据。在重大销售活动期间，数据库会经历不可预测的工作负载和流量高峰。该公司的预算有限，希望确保数据库解决方案实现成本优化，同时仍提供高可用性和可扩展性。哪种解决方案是最具成本效益的选择？

- **A.** Use Amazon RDS with a Multi-AZ deployment and provisioned instances with sufficient capacity to handle peak traffic.
  - 将 Amazon RDS 与多可用区部署结合使用，并配置具有足够容量的实例来处理峰值流量。
- **B.** Use Amazon RDS with a Multi-AZ deployment and configure an Auto Scaling group for the database instances.
  - 将 Amazon RDS 与多可用区部署结合使用，并为数据库实例配置 Auto Scaling 组。
- **C.** Use Amazon Aurora Serverless v2, which automatically adjusts capacity to match workload demands.
  - 使用 Amazon Aurora Serverless v2，它会自动调整容量以满足工作负载需求。
- **D.** Use Amazon DynamoDB with on-demand capacity mode and migrate the relational database schema to a NoSQL model.
  - 使用 Amazon DynamoDB 和按需容量模式，并将关系数据库架构迁移到 NoSQL 模型。

**正确答案 / Answer: `C`**

Amazon Aurora Serverless v2 is the most cost-optimized solution for this scenario because it provides the ability to scale database capacity automatically based on workload demands and charges only for the consumed capacity. This avoids the need to provision resources for peak traffic, reducing overall costs while maintaining scalability and high availability.

Amazon Aurora Serverless v2 是此场景中成本最优化的解决方案，因为它提供了根据工作负载需求自动扩展数据库容量的能力，并且仅对消耗的容量进行收费。这避免了为高峰流量调配资源的需要，降低了总体成本，同时保持了可扩展性和高可用性。

---

## Question 476  `Single answer`

**EN** A small e-commerce company is experiencing rapid growth and wants to optimize the cost of their database solution for their online store. Currently, they are using a single Amazon RDS MySQL instance with minimal read traffic, but they expect traffic to increase significantly during holiday sales. They want a solution that can handle spikes in read traffic cost-effectively while minimizing operational overhead. Which solution is the most cost-optimized for their use case?

**中** 一家小型电子商务公司正在经历快速增长，并且希望优化其在线商店的数据库解决方案的成本。目前，他们使用单个 Amazon RDS MySQL 实例，读取流量最小，但他们预计假期销售期间流量会显着增加。他们希望有一种解决方案能够经济高效地处理读取流量峰值，同时最大限度地减少运营开销。哪种解决方案最适合他们的用例成本优化？

- **A.** Enable Multi-AZ deployment for Amazon RDS MySQL to improve availability during traffic spikes.
  - 为 Amazon RDS MySQL 启用多可用区部署，以提高流量高峰期间的可用性。
- **B.** Scale up the Amazon RDS instance to a larger instance type to handle increased traffic.
  - 将 Amazon RDS 实例扩展到更大的实例类型以处理增加的流量。
- **C.** Configure Amazon RDS MySQL to use Read Replicas to offload read traffic.
  - 配置 Amazon RDS MySQL 以使用只读副本来卸载读取流量。
- **D.** Migrate to Amazon Aurora with Auto Scaling to automatically adjust capacity.
  - 通过 Auto Scaling 迁移到 Amazon Aurora，以自动调整容量。

**正确答案 / Answer: `C`**

Using Read Replicas with Amazon RDS MySQL is the most cost-optimized solution in this scenario. Read Replicas allow the company to handle increased read traffic by distributing it across multiple replicas without scaling up the primary database. This approach is cost-efficient and minimizes operational overhead compared to alternatives like scaling up the instance or migrating to a more complex database solution.

将只读副本与 Amazon RDS MySQL 结合使用是此场景中成本最优化的解决方案。只读副本允许公司通过将读取流量分布到多个副本来处理增加的读取流量，而无需扩展主数据库。与扩展实例或迁移到更复杂的数据库解决方案等替代方案相比，这种方法具有成本效益，并且可以最大限度地减少运营开销。

---

## Question 477  `Select 2`

**EN** A company is running a web application on a fleet of Amazon EC2 instances behind an Application Load Balancer (ALB). The web application stores user-uploaded images in Amazon S3 and maintains metadata about the images in an Amazon RDS database. The company wants to ensure that the solution is highly available and fault-tolerant. Which of the following design choices will improve the solution's fault tolerance and availability?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的一组 Amazon EC2 实例上运行 Web 应用程序。 Web 应用程序将用户上传的图像存储在 Amazon S3 中，并在 Amazon RDS 数据库中维护有关图像的元数据。该公司希望确保该解决方案具有高可用性和容错性。以下哪些设计选择将提高解决方案的容错能力和可用性？

- **A.** Enable Multi-AZ deployment for the Amazon RDS database.
  - 为 Amazon RDS 数据库启用多可用区部署。
- **B.** Configure Amazon S3 bucket versioning for the user-uploaded images.
  - 为用户上传的镜像配置 Amazon S3 存储桶版本控制。
- **C.** Use Auto Scaling for the Amazon EC2 instances behind the Application Load Balancer.
  - 对 Application Load Balancer 后面的 Amazon EC2 实例使用 Auto Scaling。
- **D.** Enable cross-region replication for the Amazon S3 bucket.
  - 为 Amazon S3 存储桶启用跨区域复制。
- **E.** Attach an Elastic IP address to the Application Load Balancer.
  - 将弹性 IP 地址附加到 Application Load Balancer。

**正确答案 / Answer: `A, C`**

To improve fault tolerance and availability, enabling Multi-AZ deployment for Amazon RDS ensures automatic failover during database outages, and using Auto Scaling for the EC2 instances ensures the web tier can handle varying loads and recover from instance failures. Other options, while useful in certain contexts, do not directly address the scenario's requirements.

为了提高容错能力和可用性，为 Amazon RDS 启用多可用区部署可确保数据库中断期间的自动故障转移，并且对 EC2 实例使用 Auto Scaling 可确保 Web 层可以处理变化的负载并从实例故障中恢复。其他选项虽然在某些情况下有用，但不能直接满足场景的要求。

---

## Question 478  `Select 2`

**EN** You are designing a highly available web application for your organization using AWS. The application requires a minimum of two instances running at all times to handle traffic. Additionally, the application must be resilient to a single Availability Zone failure. Which combination of components will best meet these requirements?

**中** 您正在使用 AWS 为您的组织设计一个高度可用的 Web 应用程序。该应用程序需要至少两个实例始终运行来处理流量。此外，应用程序必须能够应对单个可用区故障。哪种组件组合最能满足这些要求？

- **A.** Launch an Auto Scaling group with a desired capacity of 2, minimum capacity of 2, and deploy the instances across multiple Availability Zones.
  - 启动所需容量为 2、最小容量为 2 的 Auto Scaling 组，并跨多个可用区部署实例。
- **B.** Use an Elastic Load Balancer to distribute traffic across instances in multiple Availability Zones.
  - 使用 Elastic Load Balancer 在多个可用区的实例之间分配流量。
- **C.** Deploy all instances in a single Availability Zone and increase the instance size to handle peak traffic.
  - 将所有实例部署在单个可用区中，并增加实例大小以处理峰值流量。
- **D.** Launch an Auto Scaling group with a desired capacity of 2 and deploy the instances in a single Availability Zone.
  - 启动所需容量为 2 的 Auto Scaling 组，并将实例部署在单个可用区中。
- **E.** Use an Elastic Load Balancer to distribute traffic but restrict it to a single Availability Zone for lower latency.
  - 使用 Elastic Load Balancer 分配流量，但将其限制在单个可用区以降低延迟。

**正确答案 / Answer: `A, B`**

To achieve high availability and resilience to an Availability Zone failure, you should use an Auto Scaling group to ensure a minimum of two instances are running and deploy them across multiple Availability Zones. An Elastic Load Balancer is essential to distribute traffic across multiple instances and Availability Zones, ensuring traffic is routed to healthy instances even if one Availability Zone goes down.

为了实现高可用性和对可用区故障的恢复能力，您应该使用 Auto Scaling 组来确保至少有两个实例正在运行，并将它们部署在多个可用区中。 Elastic Load Balancer 对于跨多个实例和可用区分配流量至关重要，确保即使一个可用区出现故障，流量也能路由到运行状况良好的实例。

---

## Question 479  `Single answer`

**EN** A company is hosting a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores files uploaded by users in an Amazon S3 bucket. The company wants to ensure that only the ALB can access the S3 bucket to retrieve and serve files. How can this be achieved?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。应用程序将用户上传的文件存储在 Amazon S3 存储桶中。该公司希望确保只有 ALB 可以访问 S3 存储桶来检索和提供文件。如何才能实现这一目标？

- **A.** Create a bucket policy for the S3 bucket that allows access only from the ALB's public IP address.
  - 为 S3 存储桶创建存储桶策略，仅允许从 ALB 的公共 IP 地址进行访问。
- **B.** Create a bucket policy for the S3 bucket that allows access only from the ALB's VPC endpoint.
  - 为 S3 存储桶创建存储桶策略，仅允许从 ALB 的 VPC 终端节点进行访问。
- **C.** Attach an IAM role to the ALB that grants access to the S3 bucket.
  - 将 IAM 角色附加到授予 S3 存储桶访问权限的 ALB。
- **D.** Use an S3 Access Point with a VPC-only restriction and configure the ALB to access it.
  - 使用仅限 VPC 限制的 S3 访问点并配置 ALB 来访问它。

**正确答案 / Answer: `B`**

To ensure secure access to an S3 bucket by an ALB, it is best to use a VPC endpoint for S3. A bucket policy can then be configured to allow access only from this VPC endpoint, ensuring that traffic remains within the AWS network and is securely restricted to the load balancer. This approach avoids the challenges of dynamically changing IPs and aligns with AWS best practices for securing S3 access.

为了确保 ALB 对 S3 存储桶的安全访问，最好使用 S3 的 VPC 终端节点。然后，可以将存储桶策略配置为仅允许从此 VPC 终端节点进行访问，确保流量保留在 AWS 网络内并安全地限制在负载均衡器中。这种方法避免了动态更改 IP 的挑战，并符合保护 S3 访问的 AWS 最佳实践。

---

## Question 480  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user-uploaded files on an Amazon EFS file system. Recently, the company noticed that the application is becoming unresponsive during peak traffic times. Upon analysis, it was determined that the EC2 instances are experiencing high CPU utilization due to the processing of uploaded files. How can you optimize the architecture to improve performance while minimizing changes to the application?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。该应用程序将用户上传的文件存储在 Amazon EFS 文件系统上。最近，该公司注意到该应用程序在流量高峰期间变得无响应。经分析，确定 EC2 实例由于处理上传文件而导致 CPU 利用率较高。如何优化架构以提高性能，同时最大限度地减少对应用程序的更改？

- **A.** Move the uploaded files to Amazon S3 and process them using AWS Lambda triggered by S3 events.
  - 将上传的文件移动到 Amazon S3 并使用 S3 事件触发的 AWS Lambda 进行处理。
- **B.** Use EC2 Auto Scaling to add more EC2 instances behind the ALB during peak traffic.
  - 使用 EC2 Auto Scaling 在流量高峰期间在 ALB 后面添加更多 EC2 实例。
- **C.** Migrate the file processing workload to AWS Batch and keep the uploaded files on Amazon EFS.
  - 将文件处理工作负载迁移到 AWS Batch，并将上传的文件保留在 Amazon EFS 上。
- **D.** Add a caching layer using Amazon ElastiCache to reduce the load on the EC2 instances.
  - 使用 Amazon ElastiCache 添加缓存层以减少 EC2 实例上的负载。

**正确答案 / Answer: `A`**

The correct answer is to move the uploaded files to Amazon S3 and use AWS Lambda to process them. This solution decouples the file processing workload from the web servers, reducing their CPU utilization and improving overall application performance. Additionally, it leverages serverless services, which are scalable and cost-effective, and requires minimal modifications to the existing architecture.

正确的答案是将上传的文件移动到 Amazon S3 并使用 AWS Lambda 来处理它们。该解决方案将文件处理工作负载与 Web 服务器分离，降低了 CPU 利用率并提高了整体应用程序性能。此外，它还利用可扩展且经济高效的无服务器服务，并且需要对现有架构进行最少的修改。

---

## Question 481  `Select 2`

**EN** A company is using AWS Organizations to manage multiple AWS accounts. They want to allocate costs to different departments within the organization and track spending for each department. Which combination of AWS cost management features should they use?

**中** 一家公司正在使用 AWS Organizations 来管理多个 AWS 账户。他们希望将成本分配给组织内的不同部门并跟踪每个部门的支出。他们应该使用哪种 AWS 成本管理功能组合？

- **A.** Enable cost allocation tags and apply appropriate tags to resources.
  - 启用成本分配标签并将适当的标签应用于资源。
- **B.** Use consolidated billing to group all accounts under a single payer account.
  - 使用合并计费将所有帐户分组到一个付款人帐户下。
- **C.** Enable AWS Budgets to define spending limits for each department.
  - 启用 AWS Budgets 来定义每个部门的支出限额。
- **D.** Activate Cost and Usage Reports (CUR) for detailed cost analysis.
  - 激活成本和使用情况报告 (CUR) 以进行详细的成本分析。
- **E.** Use AWS CloudTrail to monitor API activity for cost tracking.
  - 使用 AWS CloudTrail 监控 API 活动以进行成本跟踪。

**正确答案 / Answer: `A, B`**

To track and allocate costs to different departments, you need a combination of cost allocation tags and consolidated billing. Cost allocation tags enable tagging of resources to categorize costs, while consolidated billing allows grouping of accounts for unified cost management. Other tools like AWS Budgets and CUR provide additional insights and monitoring but are not directly tied to cost allocation or grouping.

要跟踪成本并将其分配给不同部门，您需要成本分配标签和合并计费的组合。成本分配标签可以对资源进行标记以对成本进行分类，而合并计费则可以对帐户进行分组以进行统一的成本管理。 AWS Budgets 和 CUR 等其他工具提供额外的见解和监控，但不直接与成本分配或分组相关。

---

## Question 482  `Select 3`

**EN** Your organization uses AWS Organizations with multiple accounts and wants to implement better cost tracking and management. The finance team has requested you to provide a solution to track costs at a granular level for specific projects across all accounts and to consolidate billing for easier payment management. Which combination of approaches should you use to achieve this?

**中** 您的组织使用具有多个账户的 AWS Organizations，并希望实施更好的成本跟踪和管理。财务团队要求您提供一个解决方案，以详细跟踪所有账户中特定项目的成本，并整合账单以简化付款管理。您应该使用哪种方法组合来实现这一目标？

- **A.** Enable cost allocation tags to track project-specific costs across all accounts.
  - 启用成本分配标签以跟踪所有帐户中特定于项目的成本。
- **B.** Set up consolidated billing in AWS Organizations to centralize payment for all accounts.
  - 在 AWS Organizations 中设置合并计费，以集中所有帐户的付款。
- **C.** Enable Amazon CloudWatch billing alarms for each AWS account to track spending thresholds.
  - 为每个 AWS 账户启用 Amazon CloudWatch 计费警报以跟踪支出阈值。
- **D.** Use AWS Budgets to allocate fixed spending limits for each account in the organization.
  - 使用 AWS 预算为组织中的每个账户分配固定支出限额。
- **E.** Activate the AWS Cost and Usage Report to gain detailed insights into spending patterns.
  - 激活 AWS 成本和使用情况报告以详细了解支出模式。

**正确答案 / Answer: `A, B, E`**

To meet the requirements of tracking project-specific costs across accounts and consolidating billing, you need to enable cost allocation tags for granular tracking and set up consolidated billing in AWS Organizations for centralized payment management. Additionally, the AWS Cost and Usage Report provides detailed insights into spending patterns across accounts, complementing these efforts for effective cost management.

为了满足跨账户跟踪项目特定成本并合并计费的需求，您需要启用成本分配标签进行精细跟踪，并在 AWS Organizations 中设置合并计费以进行集中支付管理。此外，AWS 成本和使用情况报告提供了跨账户支出模式的详细见解，补充了这些有效成本管理的努力。

---

## Question 483  `Select 3`

**EN** Your company uses AWS Organizations to manage multiple accounts. As the Solutions Architect, you need to implement a cost management strategy to monitor and allocate costs across different projects and teams. Which features of AWS cost management services should you use to achieve this objective?

**中** 贵公司使用 AWS Organizations 来管理多个帐户。作为解决方案架构师，您需要实施成本管理策略来监控和分配不同项目和团队的成本。您应该使用 AWS 成本管理服务的哪些功能来实现此目标？

- **A.** Enable cost allocation tags to track spending by resources associated with specific projects or teams.
  - 启用成本分配标签来跟踪与特定项目或团队相关的资源的支出。
- **B.** Use AWS Cost Explorer to visualize historical cost and usage data across all accounts in the organization.
  - 使用 AWS Cost Explorer 可视化组织中所有账户的历史成本和使用情况数据。
- **C.** Set up an Amazon S3 bucket to store all cost and usage reports manually exported from the AWS Management Console.
  - 设置 Amazon S3 存储桶来存储从 AWS 管理控制台手动导出的所有成本和使用情况报告。
- **D.** Enable consolidated billing in AWS Organizations to combine billing data for all member accounts.
  - 在 AWS Organizations 中启用合并计费，以合并所有成员帐户的计费数据。
- **E.** Create resource groups in AWS Resource Groups to automatically calculate the costs for grouped resources.
  - 在 AWS 资源组中创建资源组以自动计算分组资源的成本。

**正确答案 / Answer: `A, B, D`**

To effectively manage and allocate costs across projects and teams within a multi-account setup, you should enable cost allocation tags to track spending, use AWS Cost Explorer for cost and usage analysis, and enable consolidated billing in AWS Organizations to streamline billing data for all member accounts. These features together provide a comprehensive solution for monitoring and managing costs in an AWS environment.

要在多账户设置中跨项目和团队有效管理和分配成本，您应该启用成本分配标签来跟踪支出，使用 AWS Cost Explorer 进行成本和使用情况分析，并在 AWS Organizations 中启用合并账单以简化所有成员账户的账单数据。这些功能共同提供了用于监控和管理 AWS 环境中的成本的全面解决方案。

---

## Question 484  `Select 2`

**EN** A company is using AWS Organizations to manage multiple AWS accounts. The finance team wants to track the monthly costs for each department and ensure that costs are accurately categorized. Which combination of AWS cost management features can help them achieve this?

**中** 一家公司正在使用 AWS Organizations 来管理多个 AWS 账户。财务团队希望跟踪每个部门的每月成本并确保成本准确分类。哪种 AWS 成本管理功能组合可以帮助他们实现这一目标？

- **A.** Enable cost allocation tags for resources and use AWS Cost Explorer to view costs by tags.
  - 为资源启用成本分配标签并使用 AWS Cost Explorer 按标签查看成本。
- **B.** Set up a consolidated billing account in AWS Organizations and review costs under the management (payer) account.
  - 在 AWS Organizations 中设置合并计费帐户，并在管理（付款人）帐户下审核成本。
- **C.** Create budgets in AWS Budgets and associate them with specific AWS accounts.
  - 在 AWS Budgets 中创建预算并将其与特定 AWS 账户关联。
- **D.** Use AWS Cost Anomaly Detection to categorize costs by department automatically.
  - 使用 AWS 成本异常检测自动按部门对成本进行分类。
- **E.** Enable Reserved Instance (RI) sharing in AWS Organizations to reduce overall costs.
  - 在 AWS Organizations 中启用预留实例 (RI) 共享以降低总体成本。

**正确答案 / Answer: `A, B`**

To track costs by department, the finance team should enable cost allocation tags and use AWS Cost Explorer to analyze costs based on these tags. Consolidated billing under AWS Organizations allows a unified view of costs across multiple accounts, which is essential for accurate tracking. While AWS Budgets, Cost Anomaly Detection, and RI sharing are valuable cost management tools, they do not directly address the requirement of categorizing and tracking costs by department.

要按部门跟踪成本，财务团队应启用成本分配标签并使用 AWS Cost Explorer 根据这些标签分析成本。 AWS Organizations 下的合并计费允许跨多个帐户统一查看成本，这对于准确跟踪至关重要。虽然 AWS 预算、成本异常检测和 RI 共享是有价值的成本管理工具，但它们并不能直接满足按部门分类和跟踪成本的要求。

---

## Question 485  `Select 2`

**EN** A company wants to monitor and control its AWS spending. They require a tool to set a specific dollar limit for their monthly AWS usage and receive alerts when usage approaches or exceeds the set limit. Additionally, they want to analyze historical spending trends to better plan future budgets. Which combination of AWS cost management tools will best meet their requirements?

**中** 一家公司希望监控和控制其 AWS 支出。他们需要一种工具来为其每月的 AWS 使用量设置特定的美元限额，并在使用量接近或超过设定限额时收到警报。此外，他们希望分析历史支出趋势，以更好地规划未来预算。哪种 AWS 成本管理工具组合最能满足他们的要求？

- **A.** AWS Budgets for setting spending limits and receiving alerts, and Cost Explorer for analyzing historical spending trends.
  - 用于设置支出限制和接收警报的 AWS Budgets，以及用于分析历史支出趋势的 Cost Explorer。
- **B.** AWS Cost and Usage Report for setting monthly spending limits and receiving alerts, and AWS Budgets for analyzing historical spending trends.
  - 用于设置每月支出限额和接收警报的 AWS 成本和使用情况报告，以及用于分析历史支出趋势的 AWS 预算。
- **C.** Cost Explorer for setting monthly spending limits and receiving alerts, and AWS Budgets for analyzing historical spending trends.
  - Cost Explorer 用于设置每月支出限额和接收警报，AWS Budgets 用于分析历史支出趋势。
- **D.** AWS Budgets for setting spending limits and receiving alerts, and AWS Cost and Usage Report for detailed cost and usage data.
  - 用于设置支出限额和接收警报的 AWS 预算，以及用于详细成本和使用数据的 AWS 成本和使用情况报告。

**正确答案 / Answer: `A, D`**

To meet the company's requirements, they should use AWS Budgets to set specific spending limits and receive alerts when those limits are approached or exceeded. For analyzing historical spending trends, Cost Explorer is the best choice as it provides visualizations of historical data. Alternatively, the AWS Cost and Usage Report can provide granular cost and usage details, which can complement budget planning efforts.

为了满足公司的要求，他们应该使用 AWS Budgets 来设置特定的支出限额，并在接近或超过这些限额时收到警报。对于分析历史支出趋势，Cost Explorer 是最佳选择，因为它提供历史数据的可视化。或者，AWS 成本和使用情况报告可以提供详细的成本和使用情况详细信息，这可以补充预算规划工作。

---

## Question 486  `Select 2`

**EN** A company wants to monitor and control its AWS costs effectively. They need the ability to: 1) forecast future costs based on historical data, 2) get alerted when their monthly spending exceeds a defined threshold, and 3) analyze detailed usage patterns to identify cost-saving opportunities. Which combination of AWS cost management tools should they use to meet these requirements?

**中** 一家公司希望有效监控和控制其 AWS 成本。他们需要能够：1) 根据历史数据预测未来成本，2) 当每月支出超过定义的阈值时收到警报，3) 分析详细的使用模式以识别节省成本的机会。他们应该使用哪种 AWS 成本管理工具组合来满足这些要求？

- **A.** AWS Cost Explorer to forecast costs and analyze usage patterns, and AWS Budgets to set up spending alerts
  - AWS Cost Explorer 用于预测成本并分析使用模式，AWS Budgets 用于设置支出警报
- **B.** AWS Cost and Usage Report to forecast future costs, and AWS Budgets to create detailed cost analyses
  - AWS 成本和使用情况报告可预测未来成本，AWS 预算可创建详细的成本分析
- **C.** AWS Budgets for setting up alerts, and AWS Cost and Usage Report to analyze usage patterns and forecast costs
  - 用于设置警报的 AWS 预算，以及用于分析使用模式和预测成本的 AWS 成本和使用情况报告
- **D.** AWS Cost Explorer to analyze usage patterns and forecast costs, and AWS Cost and Usage Report for granular data export
  - AWS Cost Explorer 用于分析使用模式和预测成本，AWS 成本和使用报告用于精细数据导出

**正确答案 / Answer: `A, D`**

To meet the requirements, the company should use multiple AWS cost management tools. AWS Cost Explorer is ideal for forecasting costs and analyzing usage patterns. AWS Budgets can be used to set up alerts when spending exceeds a defined threshold for cost control. Additionally, the AWS Cost and Usage Report provides granular data for in-depth analysis, complementing the use of Cost Explorer.

为了满足要求，公司应该使用多种 AWS 成本管理工具。 AWS Cost Explorer 非常适合预测成本和分析使用模式。 AWS 预算可用于在支出超过定义的成本控制阈值时设置警报。此外，AWS 成本和使用情况报告还提供用于深入分析的精细数据，对 Cost Explorer 的使用进行了补充。

---

## Question 487  `Select 2`

**EN** A company wants to monitor its AWS spending and set alerts when costs exceed their allocated monthly budget for a specific project. They also want to analyze historical usage trends to predict future costs and optimize resource usage. Which combination of AWS cost management tools should they use to achieve this?

**中** 一家公司希望监控其 AWS 支出，并在成本超出为特定项目分配的每月预算时设置警报。他们还希望分析历史使用趋势以预测未来成本并优化资源使用。他们应该使用哪种 AWS 成本管理工具组合来实现这一目标？

- **A.** AWS Budgets
  - AWS 预算
- **B.** Cost Explorer
  - 成本管理器
- **C.** AWS Cost and Usage Report
  - AWS 成本和使用情况报告
- **D.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **E.** AWS Pricing Calculator
  - AWS 定价计算器

**正确答案 / Answer: `A, B`**

To monitor AWS spending and set alerts when costs exceed a budget, AWS Budgets is the ideal solution. To analyze historical usage and predict future costs, Cost Explorer is the appropriate tool. Together, these tools address both the company's requirements.

要监控 AWS 支出并在成本超出预算时设置警报，AWS Budgets 是理想的解决方案。要分析历史使用情况并预测未来成本，Cost Explorer 是合适的工具。这些工具共同满足了公司的需求。

---

## Question 488  `Select 3`

**EN** A company has recently migrated its workloads to AWS and wants to monitor and manage its cloud spending effectively. The finance team wants to analyze historical cost trends, set alerts for when spending exceeds predefined thresholds, and receive detailed reports of their AWS usage and costs. Which combination of AWS cost management tools should the company use to achieve these requirements?

**中** 一家公司最近将其工作负载迁移到 AWS，并希望有效监控和管理其云支出。财务团队希望分析历史成本趋势，在支出超过预定义阈值时设置警报，并接收有关 AWS 使用情况和成本的详细报告。公司应使用哪种 AWS 成本管理工具组合来实现这些要求？

- **A.** AWS Cost Explorer
  - AWS 成本管理器
- **B.** AWS Budgets
  - AWS 预算
- **C.** AWS Cost and Usage Report
  - AWS 成本和使用情况报告
- **D.** AWS Trusted Advisor
  - AWS Trusted Advisor
- **E.** AWS Pricing Calculator
  - AWS 定价计算器

**正确答案 / Answer: `A, B, C`**

To effectively monitor and manage cloud spending, the company should use AWS Cost Explorer for analyzing historical cost trends, AWS Budgets for setting alerts when spending exceeds thresholds, and AWS Cost and Usage Report for obtaining detailed data on their AWS costs and usage. These tools together address all the requirements of the finance team.

为了有效监控和管理云支出，公司应使用 AWS Cost Explorer 来分析历史成本趋势，使用 AWS Budgets 在支出超过阈值时设置警报，并使用 AWS Cost and Use Report 来获取有关其 AWS 成本和使用情况的详细数据。这些工具共同满足财务团队的所有要求。

---

## Question 489  `Single answer`

**EN** An e-commerce company is experiencing increased latency on their product catalog API due to high traffic. The API retrieves product details from a relational database. To improve performance and reduce database load, the company wants to implement a caching strategy. Which solution would provide the best performance improvement while ensuring cache freshness when product details are updated?

**中** 由于高流量，一家电子商务公司的产品目录 API 的延迟增加。 API 从关系数据库中检索产品详细信息。为了提高性能并减少数据库负载，该公司希望实施缓存策略。哪种解决方案可以提供最佳的性能改进，同时在产品详细信息更新时确保缓存新鲜度？

- **A.** Use Amazon ElastiCache with a time-to-live (TTL) expiration policy and set a short TTL value.
  - 将 Amazon ElastiCache 与生存时间 (TTL) 过期策略结合使用并设置较短的 TTL 值。
- **B.** Deploy AWS Lambda to query the database and cache results locally in memory.
  - 部署 AWS Lambda 来查询数据库并将结果缓存在本地内存中。
- **C.** Use Amazon ElastiCache with a write-through caching strategy and update the cache whenever the database is updated.
  - 将 Amazon ElastiCache 与直写式缓存策略结合使用，并在数据库更新时更新缓存。
- **D.** Enable Amazon RDS read replicas and use them to serve the API requests instead of implementing a cache.
  - 启用 Amazon RDS 只读副本并使用它们来服务 API 请求，而不是实现缓存。

**正确答案 / Answer: `C`**

In this scenario, the company needs a solution that improves performance and ensures cache freshness when product details are updated. A write-through caching strategy with Amazon ElastiCache is the best approach because it updates the cache immediately whenever the database is updated, ensuring data consistency and reducing latency for API requests. Other options either do not ensure cache freshness or do not provide the same level of performance improvement.

在这种场景下，该公司需要一种解决方案，能够提高性能并在产品详细信息更新时确保缓存新鲜度。使用 Amazon ElastiCache 的直写式缓存策略是最好的方法，因为它会在数据库更新时立即更新缓存，从而确保数据一致性并减少 API 请求的延迟。其他选项要么不能确保缓存新鲜度，要么不能提供相同级别的性能改进。

---

## Question 490  `Single answer`

**EN** A company is running an e-commerce application on AWS. The application experiences high read traffic for product details, which rarely change. To improve performance and reduce database load, you have been tasked with implementing a caching solution. Which approach would be the MOST cost-effective and reliable for this use case?

**中** 一家公司正在 AWS 上运行电子商务应用程序。该应用程序对产品详细信息的读取流量很高，而这些信息很少发生变化。为了提高性能并减少数据库负载，您的任务是实施缓存解决方案。对于此用例，哪种方法最具成本效益且最可靠？

- **A.** Use Amazon ElastiCache with a Redis cluster to cache product details.
  - 将 Amazon ElastiCache 与 Redis 集群结合使用来缓存产品详细信息。
- **B.** Use Amazon DynamoDB Accelerator (DAX) to cache product details.
  - 使用 Amazon DynamoDB 加速器 (DAX) 缓存产品详细信息。
- **C.** Enable caching at the application layer by writing custom caching logic in the backend code.
  - 通过在后端代码中编写自定义缓存逻辑来在应用程序层启用缓存。
- **D.** Use Amazon S3 to store precomputed product details and serve them directly to users.
  - 使用 Amazon S3 存储预先计算的产品详细信息并将其直接提供给用户。

**正确答案 / Answer: `A`**

The best caching strategy for this scenario is to use Amazon ElastiCache with a Redis cluster, as it provides a fast, in-memory data store that can handle high read traffic while reducing the load on the backend database. This option is cost-effective and reliable, aligning with the company's need to optimize performance for read-heavy queries. Other options either require specific conditions (like DynamoDB for DAX), involve unnecessary complexity (custom application caching), or are unsuitable for the use case (S3 for dynamic data).

此场景的最佳缓存策略是将 Amazon ElastiCache 与 Redis 集群结合使用，因为它提供了快速的内存数据存储，可以处理高读取流量，同时减少后端数据库的负载。此选项经济高效且可靠，符合公司优化读取密集型查询性能的需求。其他选项要么需要特定条件（例如用于 DAX 的 DynamoDB），要么涉及不必要的复杂性（自定义应用程序缓存），要么不适合用例（用于动态数据的 S3）。

---

## Question 491  `Single answer`

**EN** A company runs a web application that frequently queries a database for product details. The application is experiencing high latency due to repeated queries for the same data. The company wants to implement a caching strategy to improve performance and reduce database load. Which solution is the MOST appropriate?

**中** 一家公司运行一个 Web 应用程序，该应用程序经常查询数据库以获取产品详细信息。由于重复查询相同数据，应用程序出现高延迟。该公司希望实施缓存策略来提高性能并减少数据库负载。哪种解决方案最合适？

- **A.** Use Amazon ElastiCache with a Redis cluster to store frequently accessed product details.
  - 将 Amazon ElastiCache 与 Redis 集群结合使用来存储经常访问的产品详细信息。
- **B.** Enable Amazon RDS Multi-AZ for the database to improve query performance.
  - 为数据库启用 Amazon RDS 多可用区，以提高查询性能。
- **C.** Use Amazon S3 to cache the product details in an object storage bucket.
  - 使用 Amazon S3 将产品详细信息缓存到对象存储桶中。
- **D.** Implement an Amazon CloudFront distribution to cache the database queries.
  - 实现 Amazon CloudFront 分发来缓存数据库查询。

**正确答案 / Answer: `A`**

Amazon ElastiCache with Redis is the most appropriate solution in this scenario because it provides an in-memory caching layer that can store frequently accessed data, significantly reducing database load and query latency. This is a common strategy for improving application performance when dealing with repeated database queries.

Amazon ElastiCache 搭配 Redis 是这种场景下最合适的解决方案，因为它提供了内存缓存层，可以存储经常访问的数据，显着减少数据库负载和查询延迟。这是处理重复的数据库查询时提高应用程序性能的常见策略。

---

## Question 492  `Single answer`

**EN** An e-commerce company is experiencing high latency when retrieving frequently accessed product data from its relational database. To improve performance, they want to implement a caching strategy. They need the solution to automatically invalidate the cache when data in the database changes. Which solution is the MOST appropriate for this requirement?

**中** 一家电子商务公司在从其关系数据库检索经常访问的产品数据时遇到了高延迟。为了提高性能，他们希望实施缓存策略。他们需要一种解决方案，能够在数据库中的数据发生更改时自动使缓存失效。哪种解决方案最适合此要求？

- **A.** Use Amazon ElastiCache with a write-through caching strategy.
  - 将 Amazon ElastiCache 与直写式缓存策略结合使用。
- **B.** Use Amazon ElastiCache with a lazy-loading caching strategy.
  - 将 Amazon ElastiCache 与延迟加载缓存策略结合使用。
- **C.** Use Amazon ElastiCache with a TTL (Time-to-Live) expiration policy.
  - 将 Amazon ElastiCache 与 TTL（生存时间）过期策略结合使用。
- **D.** Use Amazon ElastiCache with DynamoDB Streams to implement cache invalidation.
  - 将 Amazon ElastiCache 与 DynamoDB Streams 结合使用来实现缓存失效。

**正确答案 / Answer: `D`**

To meet the requirement of automatically invalidating the cache when data in the database changes, the most appropriate solution is to use Amazon ElastiCache with DynamoDB Streams. DynamoDB Streams can capture database changes in real-time, and you can use them to trigger cache invalidation logic, ensuring the cache remains up-to-date with the database. Other options, such as write-through or lazy-loading strategies, do not provide real-time invalidation for changes made directly to the database.

为了满足数据库中的数据发生变化时自动使缓存失效的需求，最合适的解决方案是将 Amazon ElastiCache 与 DynamoDB Streams 结合使用。 DynamoDB Streams 可以实时捕获数据库更改，您可以使用它们来触发缓存失效逻辑，确保缓存与数据库保持最新。其他选项（例如直写或延迟加载策略）不为直接对数据库所做的更改提供实时失效。

---

## Question 493  `Select 2`

**EN** A company needs to store sensitive financial data in Amazon S3 for compliance purposes. Their data retention policy requires that all data be retained for 7 years and automatically deleted after that period without manual intervention. Additionally, they must ensure no one can delete the data before the retention period ends. Which solution should the company implement?

**中** 出于合规目的，公司需要将敏感财务数据存储在 Amazon S3 中。他们的数据保留政策要求所有数据保留 7 年，并在该期限后自动删除，无需人工干预。此外，他们必须确保在保留期结束之前没有人可以删除数据。公司应该实施哪种解决方案？

- **A.** Enable Amazon S3 Object Lock in compliance mode and set a retention period of 7 years.
  - 在合规模式下启用 Amazon S3 对象锁定并设置保留期为 7 年。
- **B.** Use lifecycle policies to move the data to the S3 Glacier storage class and set a delete marker for 7 years.
  - 使用生命周期策略将数据移动到 S3 Glacier 存储类，并设置 7 年的删除标记。
- **C.** Set up an Amazon S3 bucket policy that denies delete operations for all objects older than 7 years.
  - 设置 Amazon S3 存储桶策略，拒绝对所有超过 7 年的对象进行删除操作。
- **D.** Enable versioning on the S3 bucket and configure an S3 lifecycle policy to delete expired object versions after 7 years.
  - 在 S3 存储桶上启用版本控制并配置 S3 生命周期策略以在 7 年后删除过期的对象版本。
- **E.** Enable Amazon S3 Object Lock in governance mode and set a retention period of 7 years.
  - 在治理模式下启用 Amazon S3 对象锁，并设置保留期为 7 年。

**正确答案 / Answer: `A, E`**

To enforce a 7-year retention policy with no manual intervention and ensure the data cannot be deleted before the retention period ends, Amazon S3 Object Lock is the appropriate solution. Compliance mode provides the highest level of protection, as even AWS account administrators cannot delete the data. Governance mode offers retention enforcement but allows account administrators to override the lock if necessary.

要在无需人工干预的情况下执行 7 年保留策略，并确保数据在保留期结束前无法被删除，Amazon S3 对象锁是合适的解决方案。合规模式提供最高级别的保护，因为即使是 AWS 账户管理员也无法删除数据。治理模式提供保留强制，但允许帐户管理员在必要时覆盖锁定。

---

## Question 494  `Single answer`

**EN** A financial services company is required by regulatory compliance to retain transaction logs for 7 years but must delete them immediately after the retention period ends. These logs are stored in Amazon S3. Which approach should you use to meet this requirement while optimizing costs and ensuring compliance?

**中** 根据监管合规要求，金融服务公司必须将交易日志保留 7 年，但必须在保留期结束后立即删除它们。这些日志存储在 Amazon S3 中。您应该使用哪种方法来满足此要求，同时优化成本并确保合规性？

- **A.** Apply an S3 Lifecycle policy to transition the logs to S3 Glacier after 30 days and delete them after 7 years.
  - 应用 S3 生命周期策略，在 30 天后将日志转换为 S3 Glacier，并在 7 年后将其删除。
- **B.** Enable versioning on the S3 bucket and manually delete objects older than 7 years.
  - 在 S3 存储桶上启用版本控制并手动删除超过 7 年的对象。
- **C.** Create a Lambda function triggered by an S3 event to delete objects older than 7 years.
  - 创建由 S3 事件触发的 Lambda 函数，以删除超过 7 年的对象。
- **D.** Use S3 Intelligent-Tiering to manage the logs and manually delete them after 7 years.
  - 使用 S3 智能分层管理日志并在 7 年后手动删除它们。

**正确答案 / Answer: `A`**

S3 Lifecycle policies are specifically designed to manage the lifecycle of objects in S3. By transitioning objects to lower-cost storage classes like S3 Glacier and automatically deleting them after the retention period, you can optimize costs and meet compliance requirements without manual intervention or custom code.

S3 生命周期策略专门用于管理 S3 中对象的生命周期。通过将对象转换为 S3 Glacier 等成本较低的存储类并在保留期后自动删除它们，您可以优化成本并满足合规性要求，而无需手动干预或自定义代码。

---

## Question 495  `Single answer`

**EN** A financial services company needs to retain transaction logs for a period of 7 years to comply with regulatory requirements. The logs are accessed infrequently but must be immediately available when requested. Which solution provides the most cost-effective and compliant approach to meet these requirements?

**中** 一家金融服务公司需要将交易日志保留 7 年，以符合监管要求。日志很少被访问，但必须在请求时立即可用。哪种解决方案提供了最具成本效益且合规的方法来满足这些要求？

- **A.** Store the logs in Amazon S3 Standard with a lifecycle policy to transition them to Amazon S3 Glacier Deep Archive after 7 years.
  - 将日志存储在 Amazon S3 Standard 中，并具有生命周期策略，以便在 7 年后将其转换到 Amazon S3 Glacier Deep Archive。
- **B.** Store the logs in Amazon S3 Intelligent-Tiering and configure a lifecycle policy to delete them after 7 years.
  - 将日志存储在 Amazon S3 智能分层中，并配置生命周期策略以在 7 年后删除它们。
- **C.** Store the logs in Amazon S3 Glacier Instant Retrieval and configure a lifecycle policy to delete them after 7 years.
  - 将日志存储在 Amazon S3 Glacier Instant Retrieval 中，并配置生命周期策略以在 7 年后删除它们。
- **D.** Store the logs in Amazon S3 Standard-IA (Infrequent Access) with no lifecycle policy.
  - 将日志存储在 Amazon S3 Standard-IA（不频繁访问）中，没有生命周期策略。

**正确答案 / Answer: `B`**

To meet the regulatory requirement of 7 years of data retention with immediate access, S3 Intelligent-Tiering provides a cost-effective solution. It automatically optimizes storage costs over time while ensuring that the logs are immediately accessible. Configuring a lifecycle policy to delete the data after 7 years ensures compliance with the retention policy.

为了满足数据保留 7 年并可立即访问的监管要求，S3 智能分层提供了一种经济高效的解决方案。随着时间的推移，它会自动优化存储成本，同时确保可以立即访问日志。配置生命周期策略以在 7 年后删除数据可确保符合保留策略。

---

## Question 496  `Select 2`

**EN** A company is required to retain application logs for 5 years to meet compliance requirements. The logs are currently stored in an Amazon S3 bucket. The company wants to minimize costs while ensuring the logs are retained for the required duration and are protected from accidental deletion. What is the MOST cost-effective way to achieve this?

**中** 公司需要将应用程序日志保留 5 年以满足合规性要求。日志当前存储在 Amazon S3 存储桶中。该公司希望最大限度地降低成本，同时确保日志保留所需的时间并防止意外删除。实现这一目标的最具成本效益的方法是什么？

- **A.** Use S3 Intelligent-Tiering for the logs and configure a Lifecycle policy to delete logs older than 5 years.
  - 对日志使用 S3 智能分层，并配置生命周期策略以删除超过 5 年的日志。
- **B.** Move the logs to S3 Glacier Deep Archive and configure a Lifecycle policy to delete logs older than 5 years.
  - 将日志移至 S3 Glacier Deep Archive 并配置生命周期策略以删除超过 5 年的日志。
- **C.** Enable S3 Object Lock in Compliance mode for the S3 bucket and configure a retention period of 5 years.
  - 在合规模式下为 S3 存储桶启用 S3 对象锁定，并将保留期配置为 5 年。
- **D.** Use S3 Standard storage class and enable versioning to protect the logs from accidental deletion.
  - 使用 S3 标准存储类并启用版本控制以保护日志免遭意外删除。
- **E.** Configure a Lifecycle policy to move logs to S3 Standard-IA after 30 days and then to S3 Glacier Deep Archive after 90 days.
  - 配置生命周期策略以在 30 天后将日志移至 S3 Standard-IA，然后在 90 天后移至 S3 Glacier Deep Archive。

**正确答案 / Answer: `B, C`**

For long-term retention of logs at the lowest cost, S3 Glacier Deep Archive is the optimal storage class. Using a Lifecycle policy automates data deletion after 5 years, ensuring compliance with retention policies. Additionally, enabling S3 Object Lock in Compliance mode ensures that the logs cannot be accidentally deleted during the retention period, providing the required protection.

为了以最低的成本长期保留日志，S3 Glacier Deep Archive 是最佳的存储类别。使用生命周期策略可在 5 年后自动删除数据，确保遵守保留策略。此外，在合规模式下启用 S3 对象锁定可确保日志在保留期内不会被意外删除，从而提供所需的保护。

---

## Question 497  `Single answer`

**EN** A company is planning to migrate its application to AWS, and the application requires a database with predictable performance and the ability to scale storage and throughput independently. The database will handle a steady workload with occasional spikes in traffic during promotions. Which database configuration will best meet the company's requirements?

**中** 一家公司正计划将其应用程序迁移到 AWS，该应用程序需要一个具有可预测性能以及独立扩展存储和吞吐量的能力的数据库。该数据库将处理稳定的工作负载，并在促销期间偶尔出现流量高峰。哪种数据库配置最能满足公司的要求？

- **A.** Amazon RDS with provisioned IOPS storage
  - 具有预配置 IOPS 存储的 Amazon RDS
- **B.** Amazon DynamoDB with auto-scaling enabled
  - Amazon DynamoDB 启用自动缩放
- **C.** Amazon Aurora Serverless
  - Amazon Aurora 无服务器
- **D.** Amazon Redshift with reserved nodes
  - Amazon Redshift 带预留节点

**正确答案 / Answer: `B`**

The key requirements in this scenario are predictable performance, the ability to scale storage and throughput independently, and support for steady workloads with occasional traffic spikes. Amazon DynamoDB with auto-scaling enabled addresses these needs effectively. It allows automatic scaling of read and write throughput based on demand and supports seamless handling of traffic fluctuations. Other options either do not meet these requirements or are designed for different use cases.

此场景中的关键要求是可预测的性能、独立扩展存储和吞吐量的能力以及支持偶尔出现流量峰值的稳定工作负载。启用自动缩放功能的 Amazon DynamoDB 可以有效满足这些需求。它允许根据需求自动扩展读写吞吐量，并支持无缝处理流量波动。其他选项要么不满足这些要求，要么是针对不同的用例而设计的。

---

## Question 498  `Single answer`

**EN** A company is using Amazon DynamoDB to store product catalog data. The workload involves frequent read and write operations, with occasional spikes during sales events. The team has noticed throttling errors when these spikes occur and wants to ensure consistent application performance. How should the team address capacity planning for the DynamoDB table?

**中** 一家公司正在使用 Amazon DynamoDB 来存储产品目录数据。工作负载涉及频繁的读写操作，在销售活动期间偶尔会出现峰值。该团队注意到出现这些峰值时会出现限制错误，并希望确保一致的应用程序性能。团队应如何解决 DynamoDB 表的容量规划？

- **A.** Switch the table to use on-demand capacity mode to handle sudden spikes automatically.
  - 将表切换为使用按需容量模式以自动处理突然的峰值。
- **B.** Increase the provisioned read and write capacity units to handle the anticipated spikes.
  - 增加预配置的读取和写入容量单位以处理预期的峰值。
- **C.** Enable DynamoDB Accelerator (DAX) to improve the read performance of the table.
  - 启用 DynamoDB Accelerator (DAX) 以提高表的读取性能。
- **D.** Set up an Auto Scaling policy for the table to dynamically adjust provisioned capacity based on demand.
  - 为表设置 Auto Scaling 策略，以根据需求动态调整预置容量。

**正确答案 / Answer: `A`**

On-demand capacity mode is specifically designed for use cases with unpredictable traffic patterns, as it eliminates the need to manually manage capacity or set up Auto Scaling policies. It adjusts capacity automatically to handle sudden spikes in traffic, ensuring consistent performance without throttling errors.

按需容量模式专为流量模式不可预测的用例而设计，因为它无需手动管理容量或设置 Auto Scaling 策略。它会自动调整容量以处理突然的流量峰值，确保一致的性能而不会出现限制错误。

---

## Question 499  `Single answer`

**EN** Your company is deploying a new e-commerce platform, and the team has decided to use Amazon DynamoDB to store customer orders. The workload is expected to have highly variable traffic patterns, with spikes during promotional events. You want to ensure the database can scale to handle peak loads while minimizing costs during periods of low activity. What is the most appropriate capacity planning configuration for this use case?

**中** 贵公司正在部署新的电子商务平台，团队决定使用 Amazon DynamoDB 来存储客户订单。预计工作负载的流量模式变化很大，在促销活动期间会出现峰值。您希望确保数据库可以扩展以处理峰值负载，同时最大限度地降低低活动期间的成本。对于该用例来说，最合适的容量规划配置是什么？

- **A.** Provisioned capacity with sufficient read and write capacity units to handle peak traffic.
  - 预配置容量，具有足够的读取和写入容量单位来处理峰值流量。
- **B.** DynamoDB On-Demand capacity mode to automatically scale with traffic without pre-provisioning.
  - DynamoDB 按需容量模式可根据流量自动扩展，无需预先配置。
- **C.** Enable Auto Scaling on provisioned capacity to dynamically adjust capacity based on traffic.
  - 对预配置容量启用 Auto Scaling，以根据流量动态调整容量。
- **D.** Use Reserved Capacity for predictable traffic patterns to save costs.
  - 使用预留容量实现可预测的流量模式以节省成本。

**正确答案 / Answer: `B`**

DynamoDB On-Demand capacity mode is the best choice for workloads with unpredictable and highly variable traffic patterns, as it eliminates the need for manual capacity planning or pre-provisioning of capacity units. It automatically scales up or down based on traffic, optimizing both performance and cost-efficiency.

DynamoDB 按需容量模式是具有不可预测且高度可变流量模式的工作负载的最佳选择，因为它消除了手动容量规划或预先配置容量单位的需要。它根据流量自动扩展或缩小，从而优化性能和成本效率。

---

## Question 500  `Select 4`

**EN** An e-commerce company is planning to migrate its on-premises relational database to Amazon Aurora. The database will handle high read and write traffic during peak shopping seasons. To prepare for the migration, you need to determine the appropriate database instance class and storage capacity. Which factors should you consider to ensure optimal performance and scalability?

**中** 一家电子商务公司正计划将其本地关系数据库迁移到 Amazon Aurora。该数据库将在购物旺季处理高读写流量。为了准备迁移，您需要确定适当的数据库实例类和存储容量。您应该考虑哪些因素来确保最佳性能和可扩展性？

- **A.** The number of read replicas required to handle read traffic
  - 处理读取流量所需的只读副本数量
- **B.** The expected size of the database, including current and future growth
  - 数据库的预期大小，包括当前和未来的增长
- **C.** The maximum number of concurrent connections the database will need to support
  - 数据库需要支持的最大并发连接数
- **D.** The type of storage used for the database, such as General Purpose (SSD) or Provisioned IOPS (SSD)
  - 用于数据库的存储类型，例如通用 (SSD) 或预配置 IOPS (SSD)
- **E.** The number of availability zones where the database will be deployed
  - 将部署数据库的可用区数量

**正确答案 / Answer: `A, B, C, D`**

Database capacity planning involves evaluating key factors like read and write traffic, expected storage size, and concurrent connections to ensure the database can handle the workload. Additionally, selecting the appropriate storage type (e.g., Provisioned IOPS for high I/O performance) is crucial for optimal database performance. Considerations like availability zones are important for durability and availability but do not directly impact capacity planning.

数据库容量规划涉及评估读写流量、预期存储大小和并发连接等关键因素，以确保数据库能够处理工作负载。此外，选择适当的存储类型（例如，实现高 I/O 性能的预配置 IOPS）对于优化数据库性能至关重要。可用性区域等考虑因素对于持久性和可用性很重要，但不会直接影响容量规划。

---

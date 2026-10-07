# AWS SAA-C03 真题演练卷 · 第 07 份

> 题目 301–350 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 301  `Single answer`

**EN** Your company has a web application hosted on Amazon ECS that connects to an Amazon RDS MySQL database. The application occasionally experiences connection issues under heavy traffic due to too many open connections to the database. How can you resolve this issue in a cost-effective and scalable way?

**中** 您的公司有一个托管在 Amazon ECS 上的 Web 应用程序，该应用程序连接到 Amazon RDS MySQL 数据库。由于与数据库的打开连接过多，应用程序偶尔会在流量大的情况下遇到连接问题。如何以经济有效且可扩展的方式解决这个问题？

- **A.** Increase the instance size of the RDS database to handle more connections.
  - 增加 RDS 数据库的实例大小以处理更多连接。
- **B.** Use Amazon RDS Proxy to manage the database connections efficiently.
  - 使用 Amazon RDS 代理有效地管理数据库连接。
- **C.** Implement connection pooling in the application code to limit the number of open connections.
  - 在应用程序代码中实现连接池以限制打开的连接数。
- **D.** Enable Multi-AZ deployment for the RDS database to improve availability.
  - 为 RDS 数据库启用多可用区部署以提高可用性。

**正确答案 / Answer: `B`**

Amazon RDS Proxy is a managed service that sits between your application and the RDS database, pooling and sharing connections to efficiently handle traffic spikes. It reduces the overhead of managing connections and is a scalable, cost-effective solution for this scenario.

Amazon RDS 代理是一项位于应用程序和 RDS 数据库之间的托管服务，可池化和共享连接以有效处理流量峰值。它减少了管理连接的开销，并且是针对此场景的可扩展且经济高效的解决方案。

---

## Question 302  `Single answer`

**EN** Your company is planning to migrate its on-premises database infrastructure to AWS. Currently, the database uses an Oracle engine, and the team is considering migrating to a fully managed relational database service on AWS. The team has decided to migrate to an open-source database engine to reduce licensing costs. Which migration path and AWS service combination is BEST suited for this use case?

**中** 您的公司正计划将其本地数据库基础设施迁移到 AWS。目前，数据库使用 Oracle 引擎，团队正在考虑迁移到 AWS 上完全托管的关系数据库服务。该团队决定迁移到开源数据库引擎以降低许可成本。哪种迁移路径和 AWS 服务组合最适合此用例？

- **A.** Use AWS Database Migration Service (DMS) for a heterogeneous migration to Amazon RDS for PostgreSQL.
  - 使用 AWS Database Migration Service (DMS) 异构迁移到 Amazon RDS for PostgreSQL。
- **B.** Use AWS Database Migration Service (DMS) for a homogeneous migration to Amazon RDS for Oracle.
  - 使用 AWS Database Migration Service (DMS) 均匀迁移到 Amazon RDS for Oracle。
- **C.** Use AWS Database Migration Service (DMS) for a heterogeneous migration to Amazon Aurora for MySQL.
  - 使用 AWS Database Migration Service (DMS) 异构迁移到 Amazon Aurora for MySQL。
- **D.** Use AWS Database Migration Service (DMS) for a homogeneous migration to Amazon RDS for MySQL.
  - 使用 AWS Database Migration Service (DMS) 均匀迁移到 Amazon RDS for MySQL。

**正确答案 / Answer: `A`**

In this scenario, the company is migrating from an Oracle database to an open-source engine to reduce licensing costs. A heterogeneous migration is required because the source (Oracle) and target (PostgreSQL) database engines are different. AWS Database Migration Service (DMS) is the ideal tool for this purpose, as it supports heterogeneous migrations. Amazon RDS for PostgreSQL is a managed, open-source database service that meets the company’s cost-saving goals.

在这种情况下，该公司正在从 Oracle 数据库迁移到开源引擎，以降低许可成本。由于源（Oracle）和目标（PostgreSQL）数据库引擎不同，因此需要异构迁移。 AWS Database Migration Service (DMS) 是实现此目的的理想工具，因为它支持异构迁移。 Amazon RDS for PostgreSQL 是一种托管的开源数据库服务，可以满足公司的成本节约目标。

---

## Question 303  `Single answer`

**EN** A company wants to migrate its on-premises Oracle database to AWS with minimal downtime. The company also plans to keep using Oracle as the database engine in AWS. Which AWS service is most appropriate for this use case?

**中** 一家公司希望以最短的停机时间将其本地 Oracle 数据库迁移到 AWS。该公司还计划继续使用 Oracle 作为 AWS 的数据库引擎。哪种 AWS 服务最适合此用例？

- **A.** AWS Database Migration Service (DMS)
  - AWS Database Migration Service (DMS)
- **B.** Amazon Aurora
  - Amazon Aurora
- **C.** Amazon RDS for Oracle
  - Amazon RDS 适用于 Oracle
- **D.** Amazon DynamoDB
  - Amazon DynamoDB

**正确答案 / Answer: `A`**

For a homogeneous migration like Oracle to Oracle, AWS Database Migration Service (DMS) is the most suitable option as it supports minimal downtime and simplifies the migration process. While Amazon RDS for Oracle can host the Oracle database after the migration, it does not facilitate the migration itself.

对于 Oracle 到 Oracle 等同构迁移，AWS Database Migration Service (DMS) 是最合适的选择，因为它支持最短的停机时间并简化迁移过程。虽然 Amazon RDS for Oracle 可以在迁移后托管 Oracle 数据库，但它并不促进迁移本身。

---

## Question 304  `Single answer`

**EN** A company is planning to migrate its on-premises Oracle database to AWS. The database needs to be migrated with minimal changes to the application, and the company wants to continue using Oracle's database features. What is the most appropriate AWS service to use for this migration?

**中** 一家公司计划将其本地 Oracle 数据库迁移到 AWS。需要在对应用程序进行最少更改的情况下迁移数据库，并且该公司希望继续使用 Oracle 的数据库功能。最适合用于此迁移的 AWS 服务是什么？

- **A.** Amazon RDS for Oracle
  - Amazon RDS 适用于 Oracle
- **B.** Amazon Aurora with PostgreSQL compatibility
  - Amazon Aurora 与 PostgreSQL 兼容
- **C.** Amazon DynamoDB
  - Amazon DynamoDB
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `A`**

For a heterogeneous migration where the company wants to keep using Oracle's database features with minimal changes, Amazon RDS for Oracle is the best choice. The other options are either incompatible with Oracle or are designed for entirely different use cases, such as NoSQL or data warehousing.

对于异构迁移，公司希望以最小的更改继续使用 Oracle 的数据库功能，Amazon RDS for Oracle 是最佳选择。其他选项要么与 Oracle 不兼容，要么是为完全不同的用例设计的，例如 NoSQL 或数据仓库。

---

## Question 305  `Single answer`

**EN** A company is planning to migrate its on-premises Oracle database to AWS. The team wants to minimize the migration effort and downtime while keeping the database engine unchanged. Which AWS service and approach should they use?

**中** 一家公司计划将其本地 Oracle 数据库迁移到 AWS。该团队希望最大限度地减少迁移工作和停机时间，同时保持数据库引擎不变。他们应该使用哪种 AWS 服务和方法？

- **A.** Use AWS Database Migration Service (DMS) for a homogeneous migration to Amazon RDS for Oracle.
  - 使用 AWS Database Migration Service (DMS) 均匀迁移到 Amazon RDS for Oracle。
- **B.** Use AWS Database Migration Service (DMS) for a heterogeneous migration to Amazon Aurora.
  - 使用 AWS Database Migration Service (DMS) 异构迁移到 Amazon Aurora。
- **C.** Use AWS Snowball Edge to migrate the Oracle database to Amazon DynamoDB.
  - 使用 AWS Snowball Edge 将 Oracle 数据库迁移到 Amazon DynamoDB。
- **D.** Use AWS Glue to migrate the Oracle database to Amazon Redshift.
  - 使用 AWS Glue 将 Oracle 数据库迁移到 Amazon Redshift。

**正确答案 / Answer: `A`**

When migrating databases with minimal effort and downtime, AWS Database Migration Service (DMS) is the preferred choice. A homogeneous migration keeps the database engine unchanged (Oracle to Amazon RDS for Oracle). This ensures compatibility and minimizes the need for schema or application changes. The other options involve either changing the database engine or using services not suitable for this use case.

当以最少的工作量和最少的停机时间迁移数据库时，AWS Database Migration Service (DMS) 是首选。同构迁移保持数据库引擎不变（Oracle 到 Amazon RDS）。这确保了兼容性并最大限度地减少了架构或应用程序更改的需要。其他选项涉及更改数据库引擎或使用不适合此用例的服务。

---

## Question 306  `Select 2`

**EN** A company has a mission-critical web application running on Amazon RDS MySQL. As part of their disaster recovery and performance optimization strategy, they want to reduce read latency for their global users and ensure minimal downtime in case of a regional failure. Which combination of features should they use to meet these requirements?

**中** 一家公司有一个在 Amazon RDS MySQL 上运行的任务关键型 Web 应用程序。作为灾难恢复和性能优化策略的一部分，他们希望减少全球用户的读取延迟，并确保在出现区域故障时将停机时间降至最低。他们应该使用哪种功能组合来满足这些要求？

- **A.** Create Read Replicas in multiple AWS Regions.
  - 在多个 AWS 区域中创建只读副本。
- **B.** Enable Multi-AZ deployment for the RDS instance.
  - 为 RDS 实例启用多可用区部署。
- **C.** Use Amazon RDS Proxy to manage database connections.
  - 使用 Amazon RDS 代理来管理数据库连接。
- **D.** Enable automated backups for the RDS instance.
  - 为 RDS 实例启用自动备份。
- **E.** Configure Amazon CloudFront for caching database queries.
  - 配置 Amazon CloudFront 用于缓存数据库查询。

**正确答案 / Answer: `A, B`**

To meet the requirements of reducing read latency for global users and ensuring minimal downtime during a regional failure, a combination of Read Replicas in multiple AWS Regions and Multi-AZ deployment is appropriate. Read Replicas distribute read traffic and improve performance for global users, while Multi-AZ deployment ensures high availability and automatic recovery within a region.

为了满足减少全球用户读取延迟并确保区域故障期间最短停机时间的要求，多个 AWS 区域中的只读副本和多可用区部署的组合是合适的。只读副本为全球用户分配读取流量并提高性能，而多可用区部署可确保区域内的高可用性和自动恢复。

---

## Question 307  `Single answer`

**EN** A company runs a MySQL database on Amazon RDS to support their e-commerce platform. They experience high read traffic during sales events and want to improve read performance and availability without affecting write operations. What is the best solution to address this requirement?

**中** 一家公司在 Amazon RDS 上运行 MySQL 数据库以支持其电子商务平台。他们在销售活动期间遇到高读取流量，并希望在不影响写入操作的情况下提高读取性能和可用性。满足这一要求的最佳解决方案是什么？

- **A.** Enable Multi-AZ deployment for the database instance.
  - 为数据库实例启用多可用区部署。
- **B.** Create read replicas for the database instance.
  - 为数据库实例创建只读副本。
- **C.** Upgrade the database instance to a larger instance size.
  - 将数据库实例升级到更大的实例大小。
- **D.** Migrate the database to Amazon Aurora.
  - 将数据库迁移到 Amazon Aurora。

**正确答案 / Answer: `B`**

The most appropriate solution for handling high read traffic without affecting write operations is to create read replicas. Read replicas allow you to scale out read operations by distributing the read workload across multiple instances, improving performance and availability during peak events like sales. Multi-AZ, upgrading instance size, or migrating to Aurora are not as suitable for the given scenario.

在不影响写入操作的情况下处理高读取流量的最合适解决方案是创建只读副本。只读副本允许您通过在多个实例之间分配读取工作负载来扩展读取操作，从而在销售等高峰活动期间提高性能和可用性。多可用区、升级实例大小或迁移到 Aurora 不太适合给定场景。

---

## Question 308  `Single answer`

**EN** Your company runs a global e-commerce platform that uses an Amazon RDS MySQL database to store customer and order data. Traffic to the platform has increased significantly in certain regions, causing high read latency on your database. You want to improve read performance for users in these regions without affecting the performance of the primary database. Which solution would best address this issue?

**中** 您的公司运行一个全球电子商务平台，该平台使用 Amazon RDS MySQL 数据库来存储客户和订单数据。某些区域的平台流量显着增加，导致数据库读取延迟较高。您希望在不影响主数据库性能的情况下提高这些区域中用户的读取性能。哪种解决方案最能解决这个问题？

- **A.** Create Amazon RDS read replicas in the regions experiencing high traffic.
  - 在流量较高的区域创建 Amazon RDS 只读副本。
- **B.** Enable Multi-AZ deployment for your Amazon RDS database.
  - 为您的 Amazon RDS 数据库启用多可用区部署。
- **C.** Migrate your database to Amazon DynamoDB for better scalability.
  - 将数据库迁移到 Amazon DynamoDB 以获得更好的可扩展性。
- **D.** Increase the instance size of your Amazon RDS primary database.
  - 增加 Amazon RDS 主数据库的实例大小。

**正确答案 / Answer: `A`**

Amazon RDS read replicas are specifically designed to improve read performance by allowing read traffic to be offloaded from the primary database to replica databases. By creating read replicas in regions with high traffic, you can improve latency and ensure a better user experience without impacting the primary database's performance.

Amazon RDS 只读副本专门设计用于通过允许将读取流量从主数据库卸载到副本数据库来提高读取性能。通过在高流量区域创建只读副本，您可以在不影响主数据库性能的情况下改善延迟并确保更好的用户体验。

---

## Question 309  `Single answer`

**EN** An e-commerce company needs a database solution to handle product catalog data that includes hierarchical relationships (e.g., categories and subcategories), supports rapid scalability, and ensures low-latency access to frequently queried data. Which AWS database service would be the most appropriate for this use case?

**中** 电子商务公司需要一个数据库解决方案来处理包含层次关系（例如类别和子类别）的产品目录数据，支持快速可扩展性，并确保对频繁查询的数据进行低延迟访问。哪种 AWS 数据库服务最适合此用例？

- **A.** Amazon DynamoDB
  - Amazon DynamoDB
- **B.** Amazon RDS for MySQL
  - MySQL 的 Amazon RDS
- **C.** Amazon ElastiCache
  - Amazon ElastiCache
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `A`**

The e-commerce product catalog requires a database that can handle hierarchical relationships, scale easily, and provide low-latency performance. Amazon DynamoDB is a non-relational database designed for such use cases, offering features like flexible schema design, high throughput, and serverless scalability. While RDS, ElastiCache, and Redshift are powerful tools, they are not optimized to meet the specific requirements of this scenario.

电子商务产品目录需要一个能够处理层次关系、轻松扩展并提供低延迟性能的数据库。 Amazon DynamoDB 是专为此类用例设计的非关系数据库，提供灵活的架构设计、高吞吐量和无服务器可扩展性等功能。虽然 RDS、ElastiCache 和 Redshift 都是功能强大的工具，但它们并未针对满足此场景的特定要求进行优化。

---

## Question 310  `Single answer`

**EN** A company is building a real-time analytics platform that processes high-velocity data streams. They need a database solution that can provide low-latency access to frequently queried data and support in-memory caching for fast performance. Which AWS database service should they choose for this use case?

**中** 一家公司正在构建一个处理高速数据流的实时分析平台。他们需要一种数据库解决方案，能够对频繁查询的数据提供低延迟访问，并支持内存缓存以实现快速性能。他们应该为此用例选择哪种 AWS 数据库服务？

- **A.** Amazon RDS
  - Amazon RDS
- **B.** Amazon DynamoDB
  - Amazon DynamoDB
- **C.** Amazon ElastiCache
  - Amazon ElastiCache
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `C`**

For a real-time analytics platform that requires low-latency access and in-memory caching, Amazon ElastiCache is the most suitable service. It provides high-speed data access by caching frequently queried data and supports real-time use cases with minimal delays. Other services like RDS, DynamoDB, and Redshift are better suited for different workloads, such as transactional databases, NoSQL, or data warehousing.

对于需要低延迟访问和内存缓存的实时分析平台，Amazon ElastiCache 是最合适的服务。它通过缓存频繁查询的数据来提供高速数据访问，并以最小的延迟支持实时用例。 RDS、DynamoDB 和 Redshift 等其他服务更适合不同的工作负载，例如事务数据库、NoSQL 或数据仓库。

---

## Question 311  `Single answer`

**EN** A company is developing a high-performance web application that requires low-latency data retrieval. The application needs to store user session data, which includes frequently accessed information, and must scale automatically during peak traffic periods. Which AWS database solution is the most appropriate for this use case?

**中** 一家公司正在开发需要低延迟数据检索的高性能 Web 应用程序。应用程序需要存储用户会话数据，其中包括经常访问的信息，并且必须在高峰流量期间自动扩展。哪种 AWS 数据库解决方案最适合此用例？

- **A.** Amazon RDS with MySQL
  - Amazon RDS 与 MySQL
- **B.** Amazon DynamoDB
  - Amazon DynamoDB
- **C.** Amazon Redshift
  - Amazon Redshift
- **D.** Amazon ElastiCache
  - Amazon ElastiCache

**正确答案 / Answer: `D`**

Amazon ElastiCache is the most appropriate solution in this scenario because it is specifically designed to provide ultra-low latency for in-memory data storage and retrieval. It is ideal for storing user session data, which requires frequent access and must scale automatically during peak traffic. While other options like Amazon RDS or DynamoDB can handle data storage, they are not optimized for the low-latency, in-memory requirements of the application.

Amazon ElastiCache 是此场景中最合适的解决方案，因为它专门为内存中数据存储和检索提供超低延迟而设计。它非常适合存储用户会话数据，这些数据需要频繁访问并且必须在高峰流量期间自动扩展。虽然 Amazon RDS 或 DynamoDB 等其他选项可以处理数据存储，但它们并未针对应用程序的低延迟、内存中要求进行优化。

---

## Question 312  `Select 2`

**EN** A company is developing a new e-commerce application that requires high scalability, low-latency access to session data, and flexibility to handle both structured and unstructured data. Which combination of AWS database services should the company use to meet these requirements?

**中** 一家公司正在开发一种新的电子商务应用程序，该应用程序需要高可扩展性、对会话数据的低延迟访问以及处理结构化和非结构化数据的灵活性。公司应使用哪种 AWS 数据库服务组合来满足这些要求？

- **A.** Amazon DynamoDB for unstructured data and Amazon ElastiCache for session data
  - Amazon DynamoDB 用于非结构化数据，Amazon ElastiCache 用于会话数据
- **B.** Amazon RDS for structured data and Amazon Redshift for session data
  - Amazon RDS 用于结构化数据，Amazon Redshift 用于会话数据
- **C.** Amazon DynamoDB for unstructured data and Amazon Aurora for session data
  - Amazon DynamoDB 用于非结构化数据，Amazon Aurora 用于会话数据
- **D.** Amazon ElastiCache for session data and Amazon DynamoDB for structured and unstructured data
  - Amazon ElastiCache 用于会话数据，Amazon DynamoDB 用于结构化和非结构化数据
- **E.** Amazon RDS for structured data and Amazon ElastiCache for session data
  - Amazon RDS 用于结构化数据，Amazon ElastiCache 用于会话数据

**正确答案 / Answer: `A, D`**

The application requires solutions that can handle both unstructured and structured data, as well as provide low-latency session management. Amazon DynamoDB is ideal for unstructured data and supports scalable workloads, while Amazon ElastiCache is a managed in-memory data store perfect for low-latency session data. Other options, such as Amazon RDS and Amazon Redshift, are not suitable for all requirements in this scenario.

该应用程序需要能够处理非结构化和结构化数据并提供低延迟会话管理的解决方案。 Amazon DynamoDB 非常适合非结构化数据并支持可扩展的工作负载，而 Amazon ElastiCache 是托管内存数据存储，非常适合低延迟会话数据。其他选项（例如 Amazon RDS 和 Amazon Redshift）并不适合此场景中的所有要求。

---

## Question 313  `Select 3`

**EN** An e-commerce company experiences intermittent latency issues with its application hosted on AWS. The application uses an Amazon RDS instance in a single Availability Zone and processes requests through an Application Load Balancer (ALB). The current architecture is causing bottlenecks during peak traffic periods. How can the company redesign its networking architecture to make it more scalable and high-performing?

**中** 一家电子商务公司在 AWS 上托管的应用程序遇到间歇性延迟问题。该应用程序在单个可用区中使用 Amazon RDS 实例，并通过 Application Load Balancer (ALB) 处理请求。当前的架构在高峰流量期间会造成瓶颈。公司如何重新设计其网络架构以使其更具可扩展性和高性能？

- **A.** Enable Multi-AZ deployment for the Amazon RDS instance to provide failover and improve performance during high traffic.
  - 为 Amazon RDS 实例启用多可用区部署，以在高流量期间提供故障转移并提高性能。
- **B.** Configure an Amazon CloudFront distribution in front of the ALB to cache frequently accessed content close to users.
  - 在 ALB 前面配置 Amazon CloudFront 分发，以缓存靠近用户的经常访问的内容。
- **C.** Switch the Application Load Balancer to a Network Load Balancer for improved latency performance.
  - 将 Application Load Balancer 切换为 Network Load Balancer，以改善延迟性能。
- **D.** Use AWS Global Accelerator to provide a single static IP and route traffic to the nearest AWS region.
  - 使用 AWS Global Accelerator 提供单个静态 IP 并将流量路由到最近的 AWS 区域。
- **E.** Implement a VPC peering connection between the ALB and the RDS instance to reduce latency.
  - 在 ALB 和 RDS 实例之间实现 VPC 对等连接以减少延迟。

**正确答案 / Answer: `A, B, D`**

To address intermittent latency issues and scalability, enabling Multi-AZ RDS deployment increases availability, while using Amazon CloudFront caches content closer to users to reduce backend load. AWS Global Accelerator improves application performance for global users by optimizing traffic routing. These changes collectively create a more scalable and high-performing architecture, suitable for an e-commerce application experiencing peak traffic.

为了解决间歇性延迟问题和可扩展性，启用多可用区 RDS 部署可提高可用性，同时使用 Amazon CloudFront 缓存更靠近用户的内容以减少后端负载。 AWS Global Accelerator 通过优化流量路由，为全球用户提高应用性能。这些变化共同创建了一个更具可扩展性和高性能的架构，适合经历高峰流量的电子商务应用程序。

---

## Question 314  `Select 4`

**EN** A company hosts a web application on multiple Amazon EC2 instances behind an Application Load Balancer (ALB) in a single AWS Region. The application is experiencing increased latency as traffic grows. The company wants to ensure the architecture is high-performing and scalable. What changes should the company implement to improve performance and scalability?

**中** 一家公司在单个 AWS 区域中 Application Load Balancer (ALB) 后面的多个 Amazon EC2 实例上托管 Web 应用程序。随着流量的增长，应用程序的延迟也会增加。该公司希望确保该架构具有高性能和可扩展性。公司应该实施哪些改变来提高性能和可扩展性？

- **A.** Enable cross-zone load balancing on the Application Load Balancer.
  - 在 Application Load Balancer 上启用跨可用区负载均衡。
- **B.** Add more EC2 instances to the existing Auto Scaling group.
  - 将更多 EC2 实例添加到现有 Auto Scaling 组。
- **C.** Deploy the application across multiple AWS Regions and use Amazon Route 53 for DNS-based traffic routing.
  - 跨多个 AWS 区域部署应用程序并使用 Amazon Route 53 进行基于 DNS 的流量路由。
- **D.** Replace the Application Load Balancer with a Network Load Balancer for faster request processing.
  - 将 Application Load Balancer 替换为 Network Load Balancer，以加快请求处理速度。
- **E.** Enable AWS Global Accelerator to improve global application performance.
  - 启用 AWS Global Accelerator 以提高全局应用程序性能。

**正确答案 / Answer: `A, B, C, E`**

To ensure a high-performing and scalable network architecture, several strategies can be implemented. Enabling cross-zone load balancing helps distribute traffic evenly across all targets. Adding EC2 instances to the Auto Scaling group ensures the infrastructure can scale with growing demands. Deploying the application across multiple Regions and using Route 53 ensures low-latency access for global users. Using AWS Global Accelerator can further enhance global performance. However, replacing an Application Load Balancer with a Network Load Balancer is not suitable for web applications requiring Layer 7 features.

为了确保高性能和可扩展的网络架构，可以实施多种策略。启用跨区域负载平衡有助于在所有目标之间均匀分配流量。将 EC2 实例添加到 Auto Scaling 组可确保基础设施能够根据不断增长的需求进行扩展。跨多个区域部署应用程序并使用 Route 53 可确保全球用户的低延迟访问。使用 AWS Global Accelerator 可以进一步增强全局性能。但是，用 Network Load Balancer 替换 Application Load Balancer 并不适合需要第 7 层功能的 Web 应用程序。

---

## Question 315  `Single answer`

**EN** A company is building a globally distributed application that requires low-latency access for users across multiple regions. The application uses an Auto Scaling group in each region for compute resources and an Amazon RDS database for storing user data. The company wants to ensure high availability and scalability for the database and reduce read latency for users in different regions. Which solution should the company implement?

**中** 一家公司正在构建一个全球分布式应用程序，需要跨多个区域的用户进行低延迟访问。该应用程序使用每个区域中的 Auto Scaling 组作为计算资源，并使用 Amazon RDS 数据库来存储用户数据。该公司希望确保数据库的高可用性和可扩展性，并减少不同地区用户的读取延迟。公司应该实施哪种解决方案？

- **A.** Enable Amazon RDS Multi-AZ deployments and configure cross-region read replicas.
  - 启用 Amazon RDS 多可用区部署并配置跨区域只读副本。
- **B.** Use Amazon ElastiCache with Multi-AZ deployments to cache database queries.
  - 将 Amazon ElastiCache 与多可用区部署结合使用来缓存数据库查询。
- **C.** Configure Amazon Aurora Global Database for the RDS database.
  - 为 RDS 数据库配置 Amazon Aurora 全局数据库。
- **D.** Set up an Amazon CloudFront distribution to cache database responses.
  - 设置 Amazon CloudFront 分发来缓存数据库响应。

**正确答案 / Answer: `C`**

Amazon Aurora Global Database is the best solution for a globally distributed, high-performance application requiring low-latency reads and high availability. It ensures near-real-time data replication across regions, enabling users to access data with minimal latency regardless of their location, while also providing disaster recovery capabilities. Other options either do not address the global scalability requirement or are not suitable for database synchronization.

Amazon Aurora 全局数据库是需要低延迟读取和高可用性的全球分布式高性能应用程序的最佳解决方案。它确保跨区域的近实时数据复制，使用户无论身在何处都能以最小的延迟访问数据，同时还提供灾难恢复功能。其他选项要么不能满足全局可伸缩性要求，要么不适合数据库同步。

---

## Question 316  `Select 3`

**EN** A company is deploying a multi-tier web application on AWS. They want the application to handle a variable amount of traffic while maintaining low latency and high availability. The architecture must ensure scalability and reliability for the front-end and back-end tiers. Which combination of services and architectures should you recommend to meet these requirements?

**中** 一家公司正在 AWS 上部署多层 Web 应用程序。他们希望应用程序能够处理可变的流量，同时保持低延迟和高可用性。该架构必须确保前端和后端层的可扩展性和可靠性。您应该推荐哪种服务和架构组合来满足这些要求？

- **A.** Use an Application Load Balancer (ALB) to distribute traffic across multiple Amazon EC2 instances in an Auto Scaling group for the front-end tier.
  - 使用 Application Load Balancer (ALB) 在前端层 Auto Scaling 组中的多个 Amazon EC2 实例之间分配流量。
- **B.** Deploy the back-end tier on a single Amazon RDS instance to simplify the architecture and reduce costs.
  - 在单个 Amazon RDS 实例上部署后端层以简化架构并降低成本。
- **C.** Enable Amazon CloudFront to cache static content and reduce latency for global users.
  - 启用 Amazon CloudFront 缓存静态内容并减少全球用户的延迟。
- **D.** Use Amazon DynamoDB with on-demand capacity mode for the back-end tier to handle variable traffic and provide high availability.
  - 使用 Amazon DynamoDB 和后端层的按需容量模式来处理可变流量并提供高可用性。
- **E.** Set up a Network Load Balancer (NLB) for the front-end tier to manage TCP traffic and improve performance for dynamic content.
  - 为前端层设置 Network Load Balancer (NLB)，以管理 TCP 流量并提高动态内容的性能。

**正确答案 / Answer: `A, C, D`**

To design a high-performing and scalable network architecture for a multi-tier web application, you should use an Application Load Balancer (ALB) with Auto Scaling for the front-end tier to handle variable traffic. For the back-end tier, Amazon DynamoDB with on-demand capacity mode offers scalability and high availability. Additionally, Amazon CloudFront helps reduce latency for global users by caching static content. Deploying a single RDS instance or using a Network Load Balancer instead of an ALB does not meet the requirements for scalability, reliability, or appropriate traffic handling.

要为多层 Web 应用程序设计高性能且可扩展的网络架构，您应该在前端层使用具有自动缩放功能的 Application Load Balancer (ALB)，以处理可变流量。对于后端层，具有按需容量模式的 Amazon DynamoDB 提供可扩展性和高可用性。此外，Amazon CloudFront 通过缓存静态内容帮助减少全球用户的延迟。部署单个 RDS 实例或使用 Network Load Balancer 代替 ALB 无法满足可扩展性、可靠性或适当流量处理的要求。

---

## Question 317  `Single answer`

**EN** A company is migrating its on-premises application to AWS and needs to ensure high availability for its relational database. The application requires a primary database instance for writes and multiple read replicas for read-heavy workloads. What is the MOST cost-effective and operationally efficient architecture to meet these requirements?

**中** 一家公司正在将其本地应用程序迁移到 AWS，需要确保其关系数据库的高可用性。该应用程序需要一个主数据库实例用于写入，并需要多个只读副本来处理读取繁重的工作负载。满足这些要求的最具成本效益和运营效率的架构是什么？

- **A.** Deploy an Amazon RDS database with Multi-AZ enabled and manually create read replicas on separate RDS instances.
  - 部署启用多可用区的 Amazon RDS 数据库，并在单独的 RDS 实例上手动创建只读副本。
- **B.** Deploy an Amazon RDS database with Multi-AZ enabled and automatic read replicas in different Regions.
  - 在不同区域部署启用多可用区和自动只读副本的 Amazon RDS 数据库。
- **C.** Deploy an Amazon RDS database with a primary instance and create multiple read replicas within the same Region.
  - 使用主实例部署 Amazon RDS 数据库，并在同一区域内创建多个只读副本。
- **D.** Deploy an Amazon Aurora database cluster with a primary instance and multiple Aurora Replicas.
  - 部署具有一个主实例和多个 Aurora 副本的 Amazon Aurora 数据库集群。

**正确答案 / Answer: `D`**

Amazon Aurora is the best solution in this scenario as it combines high availability and read scalability with operational efficiency. It supports automatic replication, up to 15 read replicas, and offers better performance at a lower cost compared to a traditional Amazon RDS setup. Aurora's architecture is specifically optimized for scenarios like this, whereas other options either lack operational efficiency or introduce unnecessary complexity and costs.

Amazon Aurora 是此场景中的最佳解决方案，因为它将高可用性、读取可扩展性与运营效率结合在一起。与传统的 Amazon RDS 设置相比，它支持自动复制、最多 15 个只读副本，并以更低的成本提供更好的性能。 Aurora 的架构专门针对此类场景进行了优化，而其他选项要么缺乏运营效率，要么会带来不必要的复杂性和成本。

---

## Question 318  `Select 2`

**EN** A company is migrating its on-premises application to AWS. The application requires high availability and fault tolerance. The company decides to use Amazon EC2 instances with an Elastic Load Balancer (ELB) and an Auto Scaling group. Which additional configuration will ensure the application remains highly available across multiple AWS Regions?

**中** 一家公司正在将其本地应用程序迁移到 AWS。该应用程序需要高可用性和容错能力。该公司决定将 Amazon EC2 实例与 Elastic Load Balancer (ELB) 和 Auto Scaling 组结合使用。哪些附加配置将确保应用程序在多个 AWS 区域保持高可用性？

- **A.** Deploy the application in multiple Availability Zones within a single Region.
  - 将应用程序部署在单个区域内的多个可用区中。
- **B.** Use Route 53 with a latency-based routing policy to direct traffic between Regions.
  - 使用 Route 53 和基于延迟的路由策略来引导区域之间的流量。
- **C.** Enable Auto Scaling to add instances automatically if CPU utilization exceeds 80%.
  - 启用 Auto Scaling 以在 CPU 利用率超过 80% 时自动添加实例。
- **D.** Configure an Amazon RDS database with cross-Region read replicas.
  - 配置具有跨区域只读副本的 Amazon RDS 数据库。
- **E.** Set up an Amazon S3 bucket with versioning enabled to store application logs.
  - 设置启用版本控制的 Amazon S3 存储桶来存储应用程序日志。

**正确答案 / Answer: `B, D`**

To ensure high availability across multiple Regions, it is essential to configure Route 53 with a latency-based routing policy to direct traffic between Regions. Additionally, cross-Region read replicas for Amazon RDS provide database redundancy and failover capabilities in case of a Regional outage. These configurations work together to maintain the application's availability and fault tolerance beyond a single Region.

为了确保跨多个区域的高可用性，必须使用基于延迟的路由策略配置 Route 53 以引导区域之间的流量。此外，Amazon RDS 的跨区域只读副本在发生区域中断时提供数据库冗余和故障转移功能。这些配置协同工作，以维持应用程序在单个区域之外的可用性和容错能力。

---

## Question 319  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user-uploaded files in an Amazon S3 bucket and stores metadata in an Amazon RDS database. Recently, the company has been experiencing a significant increase in traffic, causing intermittent performance issues with the EC2 instances. As a Solutions Architect, how can you address these performance issues while minimizing operational overhead?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。该应用程序将用户上传的文件存储在 Amazon S3 存储桶中，并将元数据存储在 Amazon RDS 数据库中。最近，该公司的流量大幅增加，导致 EC2 实例出现间歇性性能问题。作为解决方案架构师，您如何解决这些性能问题，同时最大限度地减少运营开销？

- **A.** Scale the EC2 instances vertically by upgrading to a larger instance type.
  - 通过升级到更大的实例类型来垂直扩展 EC2 实例。
- **B.** Use Amazon Auto Scaling to dynamically adjust the number of EC2 instances based on demand.
  - 使用 Amazon Auto Scaling 根据需求动态调整 EC2 实例的数量。
- **C.** Implement Amazon CloudFront to cache static content and reduce load on the EC2 instances.
  - 实施 Amazon CloudFront 来缓存静态内容并减少 EC2 实例上的负载。
- **D.** Migrate the web application to a serverless solution like AWS Lambda and Amazon API Gateway.
  - 将 Web 应用程序迁移到无服务器解决方案，例如 AWS Lambda 和 Amazon API Gateway。

**正确答案 / Answer: `B`**

The best solution to address the performance issues and minimize operational overhead is to use Amazon Auto Scaling. This allows the EC2 instances to scale dynamically based on demand, ensuring that sufficient resources are available during traffic spikes while reducing costs during low traffic periods. This strategy does not require a complete architectural change and effectively addresses the issue at hand.

解决性能问题并最大限度地减少运营开销的最佳解决方案是使用 Amazon Auto Scaling。这使得 EC2 实例可以根据需求动态扩展，确保在流量高峰期间有足够的资源可用，同时在流量较低期间降低成本。该策略不需要完全的架构更改，并且可以有效地解决当前的问题。

---

## Question 320  `Select 2`

**EN** A company is running a web application on an Auto Scaling group of Amazon EC2 instances behind an Application Load Balancer (ALB). The company wants to improve the availability and resiliency of its application by protecting against potential outages in a single AWS Region. How can the company achieve this with the LEAST operational overhead?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例的 Auto Scaling 组上运行 Web 应用程序。该公司希望通过防止单个 AWS 区域中的潜在中断来提高其应用程序的可用性和弹性。公司如何才能以最少的运营费用实现这一目标？

- **A.** Deploy the application in multiple AWS Regions using separate Auto Scaling groups and Application Load Balancers, and configure Route 53 with a failover routing policy.
  - 使用单独的 Auto Scaling 组和 Application Load Balancer 在多个 AWS 区域中部署应用程序，并使用故障转移路由策略配置 Route 53。
- **B.** Deploy the application in multiple AWS Regions using separate Auto Scaling groups and Application Load Balancers, and configure Route 53 with a weighted routing policy.
  - 使用单独的 Auto Scaling 组和 Application Load Balancer 在多个 AWS 区域中部署应用程序，并使用加权路由策略配置 Route 53。
- **C.** Enable Multi-AZ deployments for the Auto Scaling group and Application Load Balancer.
  - 为 Auto Scaling 组和 Application Load Balancer 启用多可用区部署。
- **D.** Use AWS Global Accelerator to route traffic to the application across multiple AWS Regions.
  - 使用 AWS Global Accelerator 将流量跨多个 AWS 区域路由到应用程序。
- **E.** Deploy the application in multiple Availability Zones within the same AWS Region using a single Application Load Balancer.
  - 使用单个 Application Load Balancer 在同一 AWS 区域内的多个可用区中部署应用程序。

**正确答案 / Answer: `A, D`**

To achieve high availability and resiliency across AWS Regions, you need to deploy the application in multiple Regions and use tools like Route 53 with a failover policy or AWS Global Accelerator to route traffic efficiently. These approaches ensure traffic is redirected to a healthy Region during Regional outages, meeting the scenario's requirements for improving resilience with minimal operational overhead.

为了实现跨 AWS 区域的高可用性和弹性，您需要在多个区域中部署应用程序，并使用具有故障转移策略的 Route 53 或 AWS Global Accelerator 等工具来高效路由流量。这些方法可确保在区域中断期间将流量重定向到健康的区域，从而满足以最小的运营开销提高弹性的场景要求。

---

## Question 321  `Single answer`

**EN** A company has a global user base and runs a web application hosted in a single AWS Region. The application experiences high latency for users in distant locations from the hosting Region. The company wants to improve the performance and availability of the application for all users worldwide, and ensure that user requests are routed to the closest healthy endpoint automatically. Which AWS service should the company use to achieve this?

**中** 一家公司拥有全球用户群，并运行在单个 AWS 区域中托管的 Web 应用程序。对于远离托管区域的用户来说，应用程序会遇到高延迟。该公司希望为全球所有用户提高应用程序的性能和可用性，并确保用户请求自动路由到最近的健康端点。公司应该使用哪种 AWS 服务来实现这一目标？

- **A.** Amazon CloudFront
  - Amazon CloudFront
- **B.** AWS Global Accelerator
  - AWS Global Accelerator
- **C.** AWS Direct Connect
  - AWS Direct Connect
- **D.** Amazon Route 53
  - Amazon Route 53

**正确答案 / Answer: `B`**

AWS Global Accelerator is the best choice here because it uses the AWS global network to optimize the path between the users and the application, ensuring low latency and high availability. It also provides automatic routing to the closest healthy endpoint based on the user's location, which perfectly aligns with the company's requirements.

AWS Global Accelerator 是这里的最佳选择，因为它使用 AWS 全球网络来优化用户和应用程序之间的路径，确保低延迟和高可用性。它还可以根据用户的位置自动路由到最近的健康端点，这完全符合公司的要求。

---

## Question 322  `Select 2`

**EN** A global e-commerce company serves users across multiple continents. They require low-latency access to their application, secure content delivery, and support for dynamic and static content. Additionally, they want to improve failover capability by routing user requests to the closest available application endpoint. What combination of AWS services would best meet their requirements?

**中** 一家全球电子商务公司为多个大洲的用户提供服务。他们需要低延迟地访问其应用程序、安全的内容交付以及对动态和静态内容的支持。此外，他们希望通过将用户请求路由到最近的可用应用程序端点来提高故障转移能力。哪种 AWS 服务组合最能满足他们的要求？

- **A.** Amazon CloudFront
  - Amazon CloudFront
- **B.** AWS Global Accelerator
  - AWS Global Accelerator
- **C.** Amazon Route 53
  - Amazon Route 53
- **D.** Amazon S3 Transfer Acceleration
  - Amazon S3 传输加速
- **E.** AWS Direct Connect
  - AWS Direct Connect

**正确答案 / Answer: `A, B`**

Amazon CloudFront and AWS Global Accelerator together provide a robust solution for the e-commerce company’s requirements. CloudFront ensures secure and low-latency delivery of static and dynamic content, while Global Accelerator routes user requests to the closest available endpoint for improved performance and failover. Other options either do not address low-latency delivery or are not relevant to the use case.

Amazon CloudFront 和 AWS Global Accelerator 共同为电子商务公司的需求提供了强大的解决方案。 CloudFront 确保安全、低延迟地交付静态和动态内容，而 Global Accelerator 将用户请求路由到最近的可用端点，以提高性能和故障转移。其他选项要么不解决低延迟交付问题，要么与用例无关。

---

## Question 323  `Select 3`

**EN** A global e-commerce company needs to improve the performance and availability of its website for users worldwide. They want to reduce latency for static content delivery, accelerate dynamic content, and ensure high availability even during regional failures. Which combination of services should they use?

**中** 一家全球电子商务公司需要为全球用户提高其网站的性能和可用性。他们希望减少静态内容交付的延迟，加速动态内容，并确保即使在区域故障期间也具有高可用性。他们应该使用哪种服务组合？

- **A.** Amazon CloudFront for content delivery and caching
  - Amazon CloudFront 用于内容交付和缓存
- **B.** AWS Global Accelerator to route traffic to the nearest healthy endpoint
  - AWS Global Accelerator 将流量路由到最近的健康端点
- **C.** Amazon S3 for hosting static content directly without additional services
  - Amazon S3 用于直接托管静态内容，无需额外服务
- **D.** AWS Transit Gateway to interconnect VPCs in multiple regions
  - AWS Transit Gateway 互联多地域 VPC
- **E.** Amazon Route 53 for DNS-based traffic routing
  - Amazon Route 53 用于基于 DNS 的流量路由

**正确答案 / Answer: `A, B, E`**

To optimize performance and availability for a global audience, the company should use Amazon CloudFront for caching and delivering static content, AWS Global Accelerator for routing traffic to the nearest healthy endpoint for dynamic content, and Amazon Route 53 for DNS-based intelligent routing. These services together ensure low latency, high availability, and efficient traffic management. S3 alone cannot provide caching or acceleration benefits, and Transit Gateway is irrelevant to this use case.

为了优化全球受众的性能和可用性，公司应使用 Amazon CloudFront 来缓存和交付静态内容，使用 AWS Global Accelerator 将流量路由到最近的健康端点以获取动态内容，并使用 Amazon Route 53 进行基于 DNS 的智能路由。这些服务共同确保低延迟、高可用性和高效的流量管理。 S3 本身无法提供缓存或加速优势，并且 Transit Gateway 与此用例无关。

---

## Question 324  `Select 2`

**EN** Your company operates a global e-commerce platform with users accessing it from multiple regions worldwide. You have observed increased latency for users in geographically distant regions from your primary application hosted in a single AWS Region. Additionally, some users report degraded performance when connecting to the platform during peak traffic hours. Which AWS services should you use to improve both latency and application availability globally?

**中** 贵公司运营一个全球电子商务平台，用户可以从全球多个地区访问该平台。您发现，位于与单个 AWS 区域中托管的主要应用程序相距较远的区域的用户的延迟时间有所增加。此外，一些用户报告在高峰流量时段连接到平台时性能下降。您应该使用哪些 AWS 服务来改善全球延迟和应用程序可用性？

- **A.** Amazon CloudFront
  - Amazon CloudFront
- **B.** AWS Global Accelerator
  - AWS Global Accelerator
- **C.** Amazon Elastic Load Balancer (ELB)
  - 亚马逊 Elastic Load Balancer (ELB)
- **D.** Amazon Route 53
  - Amazon Route 53
- **E.** AWS Direct Connect
  - AWS Direct Connect

**正确答案 / Answer: `A, B`**

To improve latency and application availability for users globally, Amazon CloudFront and AWS Global Accelerator are the appropriate services. CloudFront caches content at edge locations, reducing latency for delivering static and dynamic content. AWS Global Accelerator routes traffic through the AWS global network, optimizing performance and availability by directing users to the best endpoint. Together, these services address both latency and availability challenges for a global audience.

为了改善全球用户的延迟和应用程序可用性，Amazon CloudFront 和 AWS Global Accelerator 是合适的服务。 CloudFront 在边缘位置缓存内容，减少交付静态和动态内容的延迟。 AWS Global Accelerator 通过 AWS 全球网络路由流量，通过将用户引导至最佳终端节点来优化性能和可用性。这些服务共同解决了全球受众的延迟和可用性挑战。

---

## Question 325  `Select 3`

**EN** You are designing the network architecture for a highly available e-commerce application hosted on AWS. The application should span multiple Availability Zones (AZs) for fault tolerance. The architecture needs to include public and private subnets, where the public subnet hosts the load balancer and the private subnets host the application servers. Which of the following steps should you take to design this architecture correctly?

**中** 您正在为 AWS 上托管的高度可用的电子商务应用程序设计网络架构。应用程序应跨越多个可用区 (AZ) 以实现容错。该架构需要包括公共子网和私有子网，其中公共子网托管负载均衡器，私有子网托管应用程序服务器。您应该采取以下哪些步骤来正确设计此架构？

- **A.** Create a public subnet in at least two Availability Zones and associate them with an Internet Gateway.
  - 在至少两个可用区中创建公有子网并将它们与 Internet 网关关联。
- **B.** Create a private subnet in at least two Availability Zones and route traffic to the public subnet through a NAT Gateway.
  - 在至少两个可用区中创建私有子网，并通过 NAT 网关将流量路由到公有子网。
- **C.** Attach a Virtual Private Gateway to the VPC to enable private communication between the public and private subnets.
  - 将虚拟专用网关附加到 VPC 以启用公有子网和私有子网之间的私有通信。
- **D.** Configure route tables for the public subnet to point to the Internet Gateway and for the private subnet to point to a NAT Gateway.
  - 配置路由表，使公有子网指向 Internet 网关，并将私有子网配置为指向 NAT 网关。
- **E.** Deploy the application servers in the public subnet for direct access to the Internet.
  - 将应用服务器部署在公有子网中，以便直接访问 Internet。

**正确答案 / Answer: `A, B, D`**

To design a network architecture for a highly available application, you must utilize both public and private subnets. Public subnets host resources such as load balancers that require direct Internet access, and these subnets need to be associated with an Internet Gateway. Private subnets host application servers, which should not have direct Internet access but can route outbound traffic via a NAT Gateway. Configuring route tables properly ensures that traffic flows correctly between subnets and external resources. Using a Virtual Private Gateway or placing servers in public subnets would not meet the requirements for this architecture.

要为高可用性应用程序设计网络体系结构，您必须同时利用公共子网和私有子网。公有子网托管需要直接访问 Internet 的负载均衡器等资源，并且这些子网需要与 Internet 网关关联。私有子网托管应用程序服务器，这些服务器不应直接访问 Internet，但可以通过 NAT 网关路由出站流量。正确配置路由表可确保流量在子网和外部资源之间正确流动。使用虚拟专用网关或将服务器放置在公共子网中无法满足此体系结构的要求。

---

## Question 326  `Select 3`

**EN** You are designing a multi-tier application hosted in AWS. The application has a front-end web tier, an application tier, and a database tier. The web tier needs to be accessible over the internet, while the application and database tiers must remain private but allow communication between tiers. How should you configure the subnets and routing to meet these requirements?

**中** 您正在设计一个托管在 AWS 中的多层应用程序。该应用程序具有前端 Web 层、应用程序层和数据库层。 Web 层需要可通过互联网进行访问，而应用程序和数据库层必须保持私有，但允许各层之间进行通信。您应该如何配置子网和路由来满足这些要求？

- **A.** Place the web tier in a public subnet with an Internet Gateway attached to the VPC and configure routing to allow public traffic.
  - 将 Web 层放置在公有子网中，并将 Internet 网关附加到 VPC，并配置路由以允许公共流量。
- **B.** Place the application tier in a private subnet with a route to the Internet Gateway to allow traffic from the web tier.
  - 将应用程序层放置在具有到 Internet 网关的路由的私有子网中，以允许来自 Web 层的流量。
- **C.** Place the database tier in a private subnet with no direct route to the Internet Gateway.
  - 将数据库层放置在私有子网中，没有到 Internet 网关的直接路由。
- **D.** Configure a NAT Gateway in a public subnet to allow the application tier to access external services without exposing it to the internet.
  - 在公有子网中配置 NAT 网关，以允许应用程序层访问外部服务，而无需将其暴露于 Internet。
- **E.** Enable VPC Peering between the web tier and the database tier for direct communication.
  - 在 Web 层和数据库层之间启用 VPC 对等互连以进行直接通信。

**正确答案 / Answer: `A, C, D`**

To design a secure and efficient network architecture for a multi-tier application in AWS, you should place the web tier in a public subnet with internet access via an Internet Gateway, while the application and database tiers should remain in private subnets. The application tier can access external services using a NAT Gateway, and the database tier should have no direct internet access for security. Proper routing and security group configurations ensure tier-to-tier communication without requiring VPC Peering.

要为 AWS 中的多层应用程序设计安全高效的网络架构，您应该将 Web 层放置在公共子网中，并通过 Internet 网关访问 Internet，而应用程序和数据库层应保留在私有子网中。应用程序层可以使用 NAT 网关访问外部服务，而出于安全考虑，数据库层不应直接访问 Internet。正确的路由和安全组配置可确保层间通信，而无需 VPC 对等互连。

---

## Question 327  `Select 3`

**EN** An organization is deploying a web application in a VPC with the following requirements:
What is the most appropriate way to design the subnets and routing to meet these requirements?

**中** 某个组织正在 VPC 中部署 Web 应用程序，并满足以下要求：
设计子网和路由以满足这些要求的最合适方法是什么？

- **A.** Create public subnets in two AZs for the web servers and private subnets in two AZs for the application servers and database. Configure an Internet Gateway for the public subnets.
  - 在两个可用区中为 Web 服务器创建公有子网，在两个可用区中为应用程序服务器和数据库创建私有子网。为公共子网配置 Internet 网关。
- **B.** Create a single public subnet for the web servers, a private subnet for the application servers, and a private subnet for the database. Configure a NAT Gateway in the private subnet for internet access.
  - 为 Web 服务器创建一个公有子网、为应用程序服务器创建一个私有子网以及为数据库创建一个私有子网。在私有子网中配置 NAT 网关以用于 Internet 访问。
- **C.** Deploy the database in a private subnet and associate a route table that does not have a route to the Internet Gateway.
  - 将数据库部署在私有子网中，并关联一个没有到 Internet 网关的路由的路由表。
- **D.** Associate the public subnets with a route table that has a route to the Internet Gateway and the private subnets with a route table that has a route to a NAT Gateway in the public subnet.
  - 将公有子网与具有到 Internet 网关的路由的路由表关联，并将私有子网与具有到公有子网中 NAT 网关的路由的路由表关联。
- **E.** Deploy all resources in a single private subnet and use a VPN to allow external access to the web servers.
  - 将所有资源部署在单个私有子网中，并使用 VPN 允许外部访问 Web 服务器。

**正确答案 / Answer: `A, C, D`**

To meet the requirements, the web servers should be deployed in public subnets spanning multiple AZs with a route to the Internet Gateway for external access. Application servers and the database should reside in private subnets for isolation. The database should have no direct internet access, and the application servers can use a NAT Gateway for outbound internet access if needed. This design ensures high availability, proper security boundaries, and appropriate routing.

为了满足要求，Web 服务器应部署在跨多个可用区的公有子网中，并有到 Internet 网关的路由以供外部访问。应用程序服务器和数据库应驻留在私有子网中以进行隔离。数据库不应直接访问 Internet，并且应用程序服务器可以根据需要使用 NAT 网关进行出站 Internet 访问。此设计可确保高可用性、适当的安全边界和适当的路由。

---

## Question 328  `Select 3`

**EN** A company is designing a new VPC network architecture in AWS to host a multi-tier web application. The architecture must ensure that the application is highly secure, scalable, and adheres to AWS best practices. The application consists of a public-facing web tier, an application tier, and a database tier that must not be accessible from the internet. How should the VPC and subnet tiers be designed to meet these requirements?

**中** 一家公司正在 AWS 中设计新的 VPC 网络架构来托管多层 Web 应用程序。该架构必须确保应用程序高度安全、可扩展，并遵守 AWS 最佳实践。该应用程序由面向公众的 Web 层、应用程序层和不能从 Internet 访问的数据库层组成。 VPC 和子网层应如何设计才能满足这些要求？

- **A.** Place the web tier in public subnets and the application and database tiers in private subnets.
  - 将 Web 层放置在公共子网中，将应用程序层和数据库层放置在私有子网中。
- **B.** Use a single NAT Gateway in the VPC to allow outbound internet access for resources in private subnets.
  - 在 VPC 中使用单个 NAT 网关以允许对私有子网中的资源进行出站 Internet 访问。
- **C.** Configure a route in the public subnets to direct traffic to the internet gateway.
  - 在公有子网中配置路由以将流量引导至 Internet 网关。
- **D.** Place all tiers (web, application, and database) in a single private subnet to improve security.
  - 将所有层（Web、应用程序和数据库）放置在单个私有子网中以提高安全性。
- **E.** Configure a security group for the database tier that only allows inbound traffic from the application tier.
  - 为数据库层配置一个安全组，仅允许来自应用程序层的入站流量。

**正确答案 / Answer: `A, C, E`**

To design a secure and scalable VPC network architecture for a multi-tier web application, follow AWS best practices. Public-facing resources (web tier) should be placed in public subnets, while private resources (application and database tiers) should be isolated in private subnets. Public subnets require a route to the internet gateway for internet access, and security groups should strictly control traffic flows between tiers. This ensures the architecture is both secure and functional.

要为多层 Web 应用程序设计安全且可扩展的 VPC 网络架构，请遵循 AWS 最佳实践。面向公众的资源（Web 层）应放置在公共子网中，而私有资源（应用程序和数据库层）应隔离在私有子网中。公共子网需要到互联网网关的路由才能访问互联网，安全组应严格控制各层之间的流量。这确保了架构既安全又实用。

---

## Question 329  `Single answer`

**EN** A company is hosting a web application that serves both static and dynamic content to its users. The application is deployed across multiple Availability Zones for high availability. The company wants to ensure that incoming traffic is distributed based on the URL path of the request. For example, requests to '/images/ ' should be routed to servers hosting static content, while requests to '/api/ ' should be routed to a separate set of backend instances that handle dynamic content. Which load balancer configuration should you recommend?

**中** 一家公司正在托管一个 Web 应用程序，为其用户提供静态和动态内容。该应用程序跨多个可用区部署以实现高可用性。该公司希望确保传入流量根据请求的 URL 路径进行分配。例如，对“/images/”的请求应路由到托管静态内容的服务器，而对“/api/”的请求应路由到一组单独的处理动态内容的后端实例。您应该推荐哪种负载均衡器配置？

- **A.** Use an Application Load Balancer (ALB) with path-based routing rules.
  - 使用具有基于路径的路由规则的 Application Load Balancer (ALB)。
- **B.** Use a Network Load Balancer (NLB) with target groups for different backend instances.
  - 将 Network Load Balancer (NLB) 与不同后端实例的目标组结合使用。
- **C.** Use a Classic Load Balancer with sticky sessions enabled.
  - 使用启用了粘性会话的经典负载均衡器。
- **D.** Use Route 53 with weighted routing to distribute traffic.
  - 使用 Route 53 和加权路由来分配流量。

**正确答案 / Answer: `A`**

An Application Load Balancer (ALB) is the best choice for this scenario because it operates at the application layer (Layer 7) and supports advanced routing capabilities, including path-based routing. This allows you to direct different URL paths to specific backend target groups, fulfilling the requirements of the scenario. Other options, like the Network Load Balancer or Classic Load Balancer, lack the necessary features, and Route 53 is not designed for this functionality.

Application Load Balancer (ALB) 是此场景的最佳选择，因为它在应用层（第 7 层）运行并支持高级路由功能，包括基于路径的路由。这允许您将不同的 URL 路径定向到特定的后端目标组，以满足场景的要求。其他选项（例如 Network Load Balancer 或经典负载均衡器）缺乏必要的功能，并且 Route 53 并非针对此功能而设计。

---

## Question 330  `Single answer`

**EN** A company is building a web application that handles both HTTP and HTTPS traffic for its users. They want to use an Application Load Balancer (ALB) to distribute incoming requests to multiple Amazon EC2 instances. The security team requires that all HTTP requests be redirected to HTTPS to ensure secure communication. How should the company configure the ALB to meet this requirement?

**中** 一家公司正在构建一个 Web 应用程序，为其用户处理 HTTP 和 HTTPS 流量。他们希望使用 Application Load Balancer (ALB) 将传入请求分发到多个 Amazon EC2 实例。安全团队要求将所有 HTTP 请求重定向到 HTTPS 以确保安全通信。公司应该如何配置 ALB 来满足这个需求？

- **A.** Create an HTTPS listener and configure an SSL certificate. Add a rule to forward requests to the target group.
  - 创建 HTTPS 监听并配置 SSL 证书。添加规则以将请求转发到目标组。
- **B.** Create an HTTP listener with a rule to redirect all traffic to HTTPS and create a separate HTTPS listener to handle HTTPS traffic.
  - 创建一个 HTTP 侦听器，其中包含将所有流量重定向到 HTTPS 的规则，并创建一个单独的 HTTPS 侦听器来处理 HTTPS 流量。
- **C.** Create an HTTP listener and add a rule to forward requests to the HTTPS listener.
  - 创建 HTTP 侦听器并添加规则以将请求转发到 HTTPS 侦听器。
- **D.** Create two separate ALBs: one for HTTP traffic and one for HTTPS traffic.
  - 创建两个单独的 ALB：一个用于 HTTP 流量，另一个用于 HTTPS 流量。

**正确答案 / Answer: `B`**

An Application Load Balancer supports listeners for both HTTP and HTTPS protocols. To meet the requirement of redirecting HTTP traffic to HTTPS, the company should create an HTTP listener and configure a rule to redirect all HTTP requests to HTTPS. A separate HTTPS listener should be created to handle secure traffic. This approach ensures that all communication is encrypted without needing multiple ALBs or unnecessary complexity.

Application Load Balancer 支持 HTTP 和 HTTPS 协议的侦听器。为了满足将 HTTP 流量重定向到 HTTPS 的需求，公司需要创建 HTTP 监听器并配置规则将所有 HTTP 请求重定向到 HTTPS。应创建单独的 HTTPS 侦听器来处理安全流量。这种方法可确保所有通信都经过加密，无需多个 ALB 或不必要的复杂性。

---

## Question 331  `Single answer`

**EN** You are tasked with designing a highly available web application on AWS. The application requires routing traffic to different backend services based on the URL path in the request (e.g., '/api/ ' should route to one service, while '/static/ ' should route to another). Which type of load balancer is most appropriate for this use case?

**中** 您的任务是在 AWS 上设计高度可用的 Web 应用程序。应用程序需要根据请求中的 URL 路径将流量路由到不同的后端服务（例如，“/api/”应路由到一个服务，而“/static/”应路由到另一个服务）。哪种类型的负载均衡器最适合此用例？

- **A.** Application Load Balancer
  - Application Load Balancer
- **B.** Network Load Balancer
  - Network Load Balancer
- **C.** Classic Load Balancer
  - 经典负载均衡器
- **D.** Gateway Load Balancer
  - 网关负载均衡器

**正确答案 / Answer: `A`**

The Application Load Balancer is specifically designed for HTTP/HTTPS traffic and supports advanced routing features, such as routing requests based on URL paths or host headers. This makes it the ideal choice for the use case described, where traffic is routed to different backend services based on specific URL paths.

Application Load Balancer 专为 HTTP/HTTPS 流量而设计，支持高级路由功能，例如基于 URL 路径或主机标头的路由请求。这使其成为所描述用例的理想选择，其中流量根据特定 URL 路径路由到不同的后端服务。

---

## Question 332  `Select 3`

**EN** A company is hosting a web application that serves different types of content to users. They want to use an Application Load Balancer (ALB) to route traffic to different target groups based on the URL path in the requests. For example, requests to '/api/ ' should be routed to a target group of API servers, and requests to '/static/ ' should be routed to a target group of static content servers. Which of the following steps should the Solutions Architect take to achieve this?

**中** 一家公司正在托管一个 Web 应用程序，为用户提供不同类型的内容。他们希望使用 Application Load Balancer (ALB) 根据请求中的 URL 路径将流量路由到不同的目标组。例如，对“/api/”的请求应路由到 API 服务器的目标组，对“/static/”的请求应路由到静态内容服务器的目标组。解决方案架构师应采取以下哪些步骤来实现这一目标？

- **A.** Configure an Application Load Balancer and create listeners with rules that evaluate the URL path in the requests.
  - 配置 Application Load Balancer 并使用评估请求中 URL 路径的规则创建侦听器。
- **B.** Set up target groups for the API servers and static content servers, and register the appropriate EC2 instances with each target group.
  - 为 API 服务器和静态内容服务器设置目标组，并向每个目标组注册适当的 EC2 实例。
- **C.** Use a Network Load Balancer instead of an Application Load Balancer since it supports path-based routing.
  - 使用 Network Load Balancer 而不是 Application Load Balancer，因为它支持基于路径的路由。
- **D.** Add a listener rule to forward traffic to the default target group for any requests that do not match specified rules.
  - 添加侦听器规则，以将任何与指定规则不匹配的请求的流量转发到默认目标组。
- **E.** Enable sticky sessions on the Application Load Balancer to maintain session consistency for all requests.
  - 在 Application Load Balancer 上启用粘性会话以维护所有请求的会话一致性。

**正确答案 / Answer: `A, B, D`**

To implement path-based routing with an Application Load Balancer, you must define listener rules that evaluate the URL path and forward traffic to the appropriate target groups. Each target group is associated with a set of backend resources (e.g., EC2 instances). Additionally, a default listener rule should be configured to handle any requests that do not match the specified path-based rules. Network Load Balancers do not support path-based routing, and sticky sessions are not relevant for this requirement.

要使用 Application Load Balancer 实现基于路径的路由，您必须定义评估 URL 路径并将流量转发到适当目标组的侦听器规则。每个目标组都与一组后端资源（例如 EC2 实例）相关联。此外，应配置默认侦听器规则来处理与指定的基于路径的规则不匹配的任何请求。 Network Load Balancer 不支持基于路径的路由，粘性会话与此要求无关。

---

## Question 333  `Single answer`

**EN** A company wants to securely connect its on-premises data center to its AWS VPC for hybrid cloud workloads. The connection must be highly reliable and capable of handling consistent, large volumes of data transfer. Which option would best meet these requirements?

**中** 一家公司希望将其本地数据中心安全地连接到其 AWS VPC 以实现混合云工作负载。连接必须高度可靠，并且能够处理一致的大量数据传输。哪个选项最能满足这些要求？

- **A.** AWS Direct Connect
  - AWS Direct Connect
- **B.** AWS Site-to-Site VPN
  - AWS 站点到站点 VPN
- **C.** AWS PrivateLink
  - AWS PrivateLink
- **D.** AWS Transit Gateway
  - AWS Transit Gateway

**正确答案 / Answer: `A`**

AWS Direct Connect is the most suitable solution for companies requiring a reliable and high-performance connection between their on-premises data center and AWS. It bypasses the public internet, ensuring lower latency and greater reliability, which is essential for consistent, large data transfers. Other options like Site-to-Site VPN and PrivateLink are designed for different use cases and do not meet the specific requirements of this scenario.

对于需要在本地数据中心和 AWS 之间建立可靠、高性能连接的公司来说，AWS Direct Connect 是最合适的解决方案。它绕过公共互联网，确保更低的延迟和更高的可靠性，这对于一致的大数据传输至关重要。其他选项（例如 Site-to-Site VPN 和 PrivateLink）是针对不同的用例而设计的，不能满足此场景的特定要求。

---

## Question 334  `Single answer`

**EN** A company is running a hybrid cloud environment and needs to establish a secure and low-latency connection between its on-premises data center and its AWS environment. The company requires consistent bandwidth for transferring large datasets and wants to avoid using the public internet for critical workloads. Which network connection option should the company choose?

**中** 一家公司正在运行混合云环境，需要在其本地数据中心和 AWS 环境之间建立安全、低延迟的连接。该公司需要一致的带宽来传输大型数据集，并希望避免使用公共互联网来处理关键工作负载。公司应该选择哪种网络连接选项？

- **A.** AWS Site-to-Site VPN
  - AWS 站点到站点 VPN
- **B.** AWS Direct Connect
  - AWS Direct Connect
- **C.** AWS PrivateLink
  - AWS PrivateLink
- **D.** AWS Transit Gateway
  - AWS Transit Gateway

**正确答案 / Answer: `B`**

AWS Direct Connect is the best choice for this scenario because it provides a private, dedicated connection between the on-premises data center and AWS, ensuring low latency and consistent bandwidth for critical workloads. Other options like VPN rely on the public internet and do not meet the low-latency and consistent bandwidth requirements, while PrivateLink and Transit Gateway serve entirely different purposes.

AWS Direct Connect 是此场景的最佳选择，因为它在本地数据中心和 AWS 之间提供私有、专用的连接，确保关键工作负载的低延迟和一致的带宽。 VPN 等其他选项依赖于公共互联网，无法满足低延迟和一致的带宽要求，而 PrivateLink 和 Transit Gateway 则服务于完全不同的目的。

---

## Question 335  `Single answer`

**EN** Your company is planning to deploy a hybrid architecture where workloads hosted on-premises need to securely communicate with applications running in an Amazon VPC. The connection requires consistent performance, low latency, and the ability to transfer large amounts of data frequently. Which network connection option should you use?

**中** 您的公司正计划部署混合架构，其中本地托管的工作负载需要与 Amazon VPC 中运行的应用程序安全地通信。连接需要一致的性能、低延迟以及频繁传输大量数据的能力。您应该使用哪种网络连接选项？

- **A.** AWS Direct Connect
  - AWS Direct Connect
- **B.** AWS VPN
  - AWS VPN
- **C.** AWS PrivateLink
  - AWS PrivateLink
- **D.** Internet Gateway
  - 互联网网关

**正确答案 / Answer: `A`**

AWS Direct Connect is the best choice for this scenario because it offers a dedicated, private connection that bypasses the public internet, ensuring low latency, consistent performance, and the ability to handle large data transfers. While AWS VPN provides secure connectivity, it relies on the public internet, which can lead to variability in performance and higher latency. AWS PrivateLink and Internet Gateway do not meet the requirements for a hybrid architecture connecting on-premises environments to AWS.

AWS Direct Connect 是这种场景的最佳选择，因为它提供了绕过公共互联网的专用、私密连接，确保低延迟、一致的性能以及处理大数据传输的能力。虽然 AWS VPN 提供安全连接，但它依赖于公共互联网，这可能会导致性能变化和更高的延迟。 AWS PrivateLink 和 Internet Gateway 不满足将本地环境连接到 AWS 的混合架构的要求。

---

## Question 336  `Single answer`

**EN** A company needs to establish a secure and low-latency connection between their on-premises data center and their AWS environment to transfer large volumes of data regularly. They also want to ensure the connection is private and does not traverse the public internet. Which solution is the most appropriate?

**中** 公司需要在其本地数据中心和 AWS 环境之间建立安全、低延迟的连接，以定期传输大量数据。他们还希望确保连接是私有的并且不会穿越公共互联网。哪种解决方案最合适？

- **A.** Use AWS Direct Connect
  - 使用 AWS Direct Connect
- **B.** Use AWS Site-to-Site VPN
  - 使用 AWS 站点到站点 VPN
- **C.** Use AWS PrivateLink
  - 使用 AWS PrivateLink
- **D.** Use an internet-based VPN connection
  - 使用基于互联网的 VPN 连接

**正确答案 / Answer: `A`**

AWS Direct Connect is the best solution for establishing a private, low-latency, and high-throughput connection between an on-premises environment and AWS. It provides a dedicated connection that does not traverse the public internet, making it ideal for transferring large volumes of data securely.

AWS Direct Connect 是在本地环境和 AWS 之间建立私有、低延迟和高吞吐量连接的最佳解决方案。它提供不穿越公共互联网的专用连接，使其成为安全传输大量数据的理想选择。

---

## Question 337  `Select 2`

**EN** A retail company wants to perform real-time data ingestion and transformation for clickstream data generated from their e-commerce website. The solution must handle high throughput, low latency, and allow processing the data in near real-time for analytics. Which AWS services can be used together to achieve this requirement?

**中** 一家零售公司希望对其电子商务网站生成的点击流数据执行实时数据摄取和转换。该解决方案必须处理高吞吐量、低延迟，并允许近乎实时地处理数据以进行分析。可以结合使用哪些 AWS 服务来实现这一要求？

- **A.** Amazon Kinesis Data Streams for ingesting the data and AWS Lambda for real-time transformation
  - 用于摄取数据的 Amazon Kinesis 数据流和用于实时转换的 AWS Lambda
- **B.** Amazon S3 for ingesting the data and AWS Glue for real-time transformation
  - Amazon S3 用于摄取数据，AWS Glue 用于实时转换
- **C.** Amazon Kinesis Data Firehose for ingesting the data and Amazon Redshift for transformation
  - Amazon Kinesis Data Firehose 用于摄取数据，Amazon Redshift 用于转换
- **D.** Amazon Kinesis Data Streams for ingesting the data and AWS Glue for batch transformation
  - 用于摄取数据的 Amazon Kinesis 数据流和用于批量转换的 AWS Glue
- **E.** Amazon Managed Streaming for Apache Kafka (MSK) for ingesting the data and AWS Lambda for real-time transformation
  - 用于提取数据的 Amazon Managed Streaming for Apache Kafka (MSK) 和用于实时转换的 AWS Lambda

**正确答案 / Answer: `A, E`**

For high-performing data ingestion and transformation in real-time, services like Amazon Kinesis Data Streams or Amazon Managed Streaming for Apache Kafka (MSK) are ideal for handling high-throughput data. AWS Lambda complements these by enabling real-time transformation of the ingested data. Together, these services provide a scalable, low-latency solution for real-time analytics and processing, which is essential for use cases like clickstream data ingestion and transformation.

对于实时高性能数据提取和转换，Amazon Kinesis Data Streams 或 Amazon Managed Streaming for Apache Kafka (MSK) 等服务非常适合处理高吞吐量数据。 AWS Lambda 通过实现摄取数据的实时转换来补充这些。这些服务共同为实时分析和处理提供了可扩展、低延迟的解决方案，这对于点击流数据摄取和转换等用例至关重要。

---

## Question 338  `Select 2`

**EN** A company needs to ingest and transform massive amounts of real-time streaming data from IoT sensors deployed globally. The data needs to be processed with low latency and stored in a data lake for further analysis. Which combination of AWS services would provide a high-performing solution for this use case?

**中** 公司需要从全球部署的物联网传感器中获取并转换大量实时流数据。数据需要以低延迟进行处理并存储在数据湖中以供进一步分析。哪种 AWS 服务组合可以为此用例提供高性能解决方案？

- **A.** Amazon Kinesis Data Streams to ingest data and AWS Lambda to transform it
  - 用于摄取数据的 Amazon Kinesis 数据流和用于转换数据的 AWS Lambda
- **B.** AWS Glue for real-time data ingestion and transformation
  - AWS Glue 用于实时数据摄取和转换
- **C.** Amazon S3 for storing data and AWS Glue for batch transformation
  - Amazon S3 用于存储数据，AWS Glue 用于批量转换
- **D.** Amazon Kinesis Data Firehose to ingest and transform data, and Amazon S3 to store the data
  - Amazon Kinesis Data Firehose 用于摄取和转换数据，Amazon S3 用于存储数据
- **E.** Amazon Redshift for real-time data ingestion and transformation
  - Amazon Redshift 用于实时数据摄取和转换

**正确答案 / Answer: `A, D`**

For real-time data ingestion and transformation, Amazon Kinesis Data Streams with AWS Lambda is a high-performing solution due to its low-latency capabilities. Additionally, Amazon Kinesis Data Firehose provides a managed service for ingesting, transforming, and delivering streaming data to destinations like Amazon S3. Both solutions align with the requirements for real-time processing, transformation, and storage in this scenario.

对于实时数据摄取和转换，带有 AWS Lambda 的 Amazon Kinesis 数据流由于其低延迟功能而成为高性能解决方案。此外，Amazon Kinesis Data Firehose 还提供托管服务，用于摄取、转换流数据并将其传送到 Amazon S3 等目的地。这两种解决方案都符合该场景中实时处理、转换和存储的要求。

---

## Question 339  `Select 2`

**EN** A retail company needs to ingest and transform real-time streaming data from multiple sources, such as website clickstreams, IoT device metrics, and mobile app interactions. The company wants to ensure low latency, reliability, and the ability to run SQL-based transformations on the incoming data. Which combination of AWS services would best meet this requirement?

**中** 零售公司需要从多个来源获取和转换实时流数据，例如网站点击流、物联网设备指标和移动应用程序交互。该公司希望确保低延迟、可靠性以及对传入数据运行基于 SQL 的转换的能力。哪种 AWS 服务组合最能满足此要求？

- **A.** Amazon Kinesis Data Streams and AWS Lambda
  - Amazon Kinesis 数据流和 AWS Lambda
- **B.** Amazon Kinesis Data Analytics and Amazon Kinesis Data Streams
  - Amazon Kinesis 数据分析和 Amazon Kinesis 数据流
- **C.** Amazon S3 and AWS Glue
  - Amazon S3 和 AWS Glue
- **D.** Amazon DynamoDB and Amazon EMR
  - Amazon DynamoDB 和 Amazon EMR
- **E.** Amazon Redshift and Amazon Data Pipeline
  - Amazon Redshift 和 Amazon Data Pipeline

**正确答案 / Answer: `A, B`**

The combination of Amazon Kinesis Data Streams and Amazon Kinesis Data Analytics is the best solution for this scenario. Kinesis Data Streams enables the ingestion of high-throughput, real-time data from multiple sources, and Kinesis Data Analytics allows you to run SQL-based transformations on the streaming data. This setup ensures low latency, reliability, and the ability to handle real-time transformations, meeting the company's requirements.

Amazon Kinesis 数据流和 Amazon Kinesis 数据分析的组合是该场景的最佳解决方案。 Kinesis Data Streams 支持从多个源提取高吞吐量的实时数据，Kinesis Data Analytics 允许您对流数据运行基于 SQL 的转换。此设置可确保低延迟、可靠性和处理实时转换的能力，满足公司的要求。

---

## Question 340  `Select 2`

**EN** A company needs to ingest and process streaming data from IoT devices in real-time. The data must be collected, transformed, and stored in an Amazon S3 bucket for further analysis. The solution should be cost-effective, scalable, and able to handle high throughput. Which combination of services provides the most suitable solution?

**中** 公司需要实时提取和处理来自物联网设备的流数据。必须收集、转换数据并将其存储在 Amazon S3 存储桶中以供进一步分析。该解决方案应该具有成本效益、可扩展并且能够处理高吞吐量。哪种服务组合提供最合适的解决方案？

- **A.** Amazon Kinesis Data Streams for ingestion, AWS Lambda for transformation, and Amazon S3 for storage
  - 用于摄取的 Amazon Kinesis 数据流、用于转换的 AWS Lambda 和用于存储的 Amazon S3
- **B.** Amazon SQS for ingestion, AWS Glue for transformation, and Amazon S3 for storage
  - Amazon SQS 用于摄取，AWS Glue 用于转换，Amazon S3 用于存储
- **C.** Amazon Kinesis Firehose for ingestion and transformation, and Amazon S3 for storage
  - Amazon Kinesis Firehose 用于摄取和转换，Amazon S3 用于存储
- **D.** Amazon DynamoDB Streams for ingestion, AWS Lambda for transformation, and Amazon S3 for storage
  - 用于摄取的 Amazon DynamoDB 流、用于转换的 AWS Lambda 和用于存储的 Amazon S3
- **E.** Amazon MQ for ingestion, AWS Step Functions for transformation, and Amazon S3 for storage
  - Amazon MQ 用于摄取，AWS Step Functions 用于转换，Amazon S3 用于存储

**正确答案 / Answer: `A, C`**

For real-time streaming data ingestion and transformation, Amazon Kinesis services (Data Streams or Firehose) are the most suitable options due to their scalability and ability to handle high throughput. AWS Lambda is a cost-effective serverless option for real-time data transformation, and Amazon S3 provides scalable and durable storage for the transformed data. Both Kinesis Data Streams with Lambda and Kinesis Firehose alone can meet the requirements of this scenario effectively.

对于实时流数据摄取和转换，Amazon Kinesis 服务（数据流或 Firehose）由于其可扩展性和处理高吞吐量的能力而成为最合适的选择。 AWS Lambda 是一种经济高效的无服务器选项，用于实时数据转换，Amazon S3 为转换后的数据提供可扩展且持久的存储。带有 Lambda 的 Kinesis Data Streams 和单独的 Kinesis Firehose 都可以有效满足此场景的要求。

---

## Question 341  `Select 3`

**EN** A company is migrating its on-premises web application to AWS and wants to ensure high availability and fault tolerance. The application consists of a front-end hosted on virtual machines and a back-end relational database. Which combination of services and features should the company use to meet its requirements?

**中** 一家公司正在将其本地 Web 应用程序迁移到 AWS，并希望确保高可用性和容错能力。该应用程序由托管在虚拟机上的前端和后端关系数据库组成。公司应该使用哪种服务和功能组合来满足其要求？

- **A.** Deploy the front-end on Amazon EC2 instances in an Auto Scaling group across multiple Availability Zones
  - 在跨多个可用区的 Auto Scaling 组中的 Amazon EC2 实例上部署前端
- **B.** Use an Application Load Balancer to distribute traffic to the front-end EC2 instances
  - 使用 Application Load Balancer 将流量分配到前端 EC2 实例
- **C.** Host the database on a single Amazon RDS instance in one Availability Zone
  - 将数据库托管在一个可用区的单个 Amazon RDS 实例上
- **D.** Enable Multi-AZ deployment for the Amazon RDS database
  - 为 Amazon RDS 数据库启用多可用区部署
- **E.** Store session state locally on each EC2 instance
  - 在每个 EC2 实例上本地存储会话状态

**正确答案 / Answer: `A, B, D`**

To achieve high availability and fault tolerance, the company should deploy the front-end on EC2 instances in an Auto Scaling group across multiple Availability Zones and use an Application Load Balancer to distribute traffic. For the back-end database, enabling Multi-AZ deployment for Amazon RDS ensures redundancy and failover capabilities. Hosting the database on a single instance or storing session state locally on EC2 instances introduces single points of failure, which should be avoided.

为了实现高可用性和容错能力，公司应将前端部署在跨多个可用区的 Auto Scaling 组中的 EC2 实例上，并使用 Application Load Balancer 来分发流量。对于后端数据库，启用 Amazon RDS 的多可用区部署可确保冗余和故障转移能力。在单个实例上托管数据库或在 EC2 实例上本地存储会话状态会引入单点故障，应避免这种情况。

---

## Question 342  `Single answer`

**EN** A company is running an e-commerce application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores session data on the local disk of each EC2 instance, but the company is experiencing issues with session persistence when instances are replaced during scaling operations. As a Solutions Architect, which solution would you recommend to ensure session data is preserved during scaling events?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行电子商务应用程序。该应用程序将会话数据存储在每个 EC2 实例的本地磁盘上，但在扩展操作期间更换实例时，该公司遇到了会话持久性问题。作为解决方案架构师，您会推荐哪种解决方案来确保在扩展事件期间保留会话数据？

- **A.** Store session data in Amazon S3 and retrieve it for each user session.
  - 将会话数据存储在 Amazon S3 中并为每个用户会话检索它。
- **B.** Enable sticky sessions (session affinity) on the Application Load Balancer.
  - 在 Application Load Balancer 上启用粘性会话（会话亲和性）。
- **C.** Store session data in Amazon DynamoDB for a highly available and scalable solution.
  - 将会话数据存储在 Amazon DynamoDB 中，以获得高度可用且可扩展的解决方案。
- **D.** Use Amazon ElastiCache to store and retrieve session data.
  - 使用 Amazon ElastiCache 存储和检索会话数据。

**正确答案 / Answer: `C`**

To ensure session data is preserved during scaling events, a solution must decouple session storage from individual EC2 instances. Amazon DynamoDB provides a highly available, durable, and scalable solution for managing session data, making it the most appropriate choice in this scenario. While other options like sticky sessions or ElastiCache could work, they either introduce dependencies or add unnecessary complexity compared to DynamoDB.

为了确保在扩展事件期间保留会话数据，解决方案必须将会话存储与各个 EC2 实例分离。 Amazon DynamoDB 为管理会话数据提供了高度可用、持久且可扩展的解决方案，使其成为此场景中最合适的选择。虽然粘性会话或 ElastiCache 等其他选项也可以使用，但与 DynamoDB 相比，它们要么引入依赖项，要么增加不必要的复杂性。

---

## Question 343  `Single answer`

**EN** A company is hosting a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores session data on the instances' local file system. During scaling events, users are experiencing issues with session persistence, as new instances do not have access to prior session data. What is the most cost-effective solution to ensure session persistence across scaling events?

**中** 一家公司在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上托管 Web 应用程序。应用程序将会话数据存储在实例的本地文件系统上。在扩展事件期间，用户会遇到会话持久性问题，因为新实例无法访问先前的会话数据。确保跨扩展事件的会话持久性的最具成本效益的解决方案是什么？

- **A.** Enable sticky sessions (session affinity) on the Application Load Balancer.
  - 在 Application Load Balancer 上启用粘性会话（会话亲和性）。
- **B.** Store session data in Amazon DynamoDB and configure the application to retrieve session data from it.
  - 将会话数据存储在 Amazon DynamoDB 中并配置应用程序以从中检索会话数据。
- **C.** Use Amazon ElastiCache with Redis to store session data.
  - 使用 Amazon ElastiCache 与 Redis 一起存储会话数据。
- **D.** Migrate the application to AWS Lambda and use Amazon S3 to store session data.
  - 将应用程序迁移到 AWS Lambda 并使用 Amazon S3 存储会话数据。

**正确答案 / Answer: `C`**

Amazon ElastiCache with Redis is ideal for storing ephemeral session data due to its low-latency, in-memory storage capabilities, which are both cost-effective and performant. This ensures session persistence across scaling events without introducing unnecessary complexity or higher costs associated with other solutions.

采用 Redis 的 Amazon ElastiCache 具有低延迟、内存中存储功能，非常适合存储临时会话数据，且具有成本效益和高性能。这确保了跨扩展事件的会话持久性，而不会引入与其他解决方案相关的不必要的复杂性或更高的成本。

---

## Question 344  `Select 2`

**EN** A company is hosting a multi-tier web application on AWS. The application uses an Application Load Balancer (ALB) to distribute traffic to multiple Amazon EC2 instances in an Auto Scaling group. The database layer uses Amazon RDS for MySQL. During peak traffic, users report increased latency and occasional timeout errors. The company wants to improve the application's performance and scalability while minimizing operational overhead. Which combination of actions should the Solutions Architect recommend?

**中** 一家公司在 AWS 上托管多层 Web 应用程序。该应用程序使用 Application Load Balancer (ALB) 将流量分配到 Auto Scaling 组中的多个 Amazon EC2 实例。数据库层使用 Amazon RDS for MySQL。在流量高峰期间，用户报告延迟增加并且偶尔出现超时错误。该公司希望提高应用程序的性能和可扩展性，同时最大限度地减少运营开销。解决方案架构师应该推荐哪种操作组合？

- **A.** Enable Auto Scaling for the EC2 instances to handle increased traffic.
  - 为 EC2 实例启用 Auto Scaling 以处理增加的流量。
- **B.** Modify the ALB listener to use TCP instead of HTTP to reduce latency.
  - 修改 ALB 侦听器以使用 TCP 而不是 HTTP 以减少延迟。
- **C.** Enable Amazon RDS Read Replicas to offload read traffic from the primary database.
  - 启用 Amazon RDS 只读副本以卸载主数据库的读取流量。
- **D.** Migrate the application from EC2 instances to AWS Lambda using Amazon API Gateway.
  - 使用 Amazon API Gateway 将应用程序从 EC2 实例迁移到 AWS Lambda。
- **E.** Increase the instance type of the primary database in Amazon RDS to a larger size.
  - 将 Amazon RDS 中主库的实例类型增大到更大的大小。

**正确答案 / Answer: `A, C`**

To address the reported performance issues during peak traffic, a combination of scalable solutions is recommended. Enabling Auto Scaling for the EC2 instances ensures the application can handle varying traffic loads dynamically. Adding Amazon RDS Read Replicas offloads read-heavy traffic from the primary database, improving overall database performance. These solutions align with AWS best practices for scalability and operational efficiency.

为了解决高峰流量期间报告的性能问题，建议组合使用可扩展的解决方案。为 EC2 实例启用 Auto Scaling 可确保应用程序能够动态处理变化的流量负载。添加 Amazon RDS 只读副本可减轻主数据库的读取繁重流量，从而提高整体数据库性能。这些解决方案符合 AWS 在可扩展性和运营效率方面的最佳实践。

---

## Question 345  `Select 2`

**EN** A retail company collects and stores transactional data from its point-of-sale (POS) systems in an Amazon S3 data lake. The company wants to create interactive dashboards and visualizations to analyze sales trends. The solution should allow business analysts to create reports without needing to write SQL queries. Which combination of services should you recommend?

**中** 一家零售公司从其销售点 (POS) 系统收集交易数据并将其存储在 Amazon S3 数据湖中。该公司希望创建交互式仪表板和可视化来分析销售趋势。该解决方案应允许业务分析师无需编写 SQL 查询即可创建报告。您应该推荐哪种服务组合？

- **A.** Amazon QuickSight
  - Amazon QuickSight
- **B.** Amazon Athena
  - Amazon Athena
- **C.** AWS Lake Formation
  - AWS 湖组
- **D.** Amazon Redshift
  - Amazon Redshift
- **E.** AWS Glue
  - AWS Glue

**正确答案 / Answer: `A, C`**

The combination of Amazon QuickSight and AWS Lake Formation is ideal for this scenario. QuickSight allows business analysts to create dashboards and visualizations without needing SQL expertise, and Lake Formation simplifies the management and secure access of the data stored in the Amazon S3 data lake. While other services like Athena and Glue can be helpful for querying and transforming data, they are not directly required for the stated objectives of the question.

Amazon QuickSight 和 AWS Lake Formation 的组合非常适合此场景。 QuickSight 允许业务分析师创建仪表板和可视化，而无需 SQL 专业知识，Lake Formation 简化了 Amazon S3 数据湖中存储的数据的管理和安全访问。虽然 Athena 和 Glue 等其他服务有助于查询和转换数据，但问题的既定目标并不直接需要它们。

---

## Question 346  `Select 2`

**EN** A retail company has a large dataset of sales transactions stored in Amazon S3. They want to perform ad hoc SQL queries on this data to analyze sales trends without setting up or managing any servers. Additionally, they need the ability to grant specific teams access to only certain parts of the dataset. Which combination of services would best meet these requirements?

**中** 一家零售公司在 Amazon S3 中存储了大量销售交易数据集。他们希望对此数据执行即席 SQL 查询来分析销售趋势，而无需设置或管理任何服务器。此外，他们需要能够授予特定团队仅访问数据集某些部分的权限。哪种服务组合最能满足这些要求？

- **A.** Amazon Athena
  - Amazon Athena
- **B.** AWS Lake Formation
  - AWS 湖组
- **C.** Amazon QuickSight
  - Amazon QuickSight
- **D.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `A, B`**

The combination of Amazon Athena and AWS Lake Formation is ideal for this scenario. Amazon Athena provides the ability to run serverless ad hoc SQL queries directly on Amazon S3 data, while AWS Lake Formation enables fine-grained access control to the dataset, ensuring that only authorized teams can access specific parts of the data. These services together fulfill both the analytical and access control requirements for the retail company.

Amazon Athena 和 AWS Lake Formation 的组合非常适合此场景。 Amazon Athena 提供直接对 Amazon S3 数据运行无服务器即席 SQL 查询的能力，而 AWS Lake Formation 可以对数据集进行细粒度访问控制，确保只有授权团队才能访问数据的特定部分。这些服务共同满足零售公司的分析和访问控制要求。

---

## Question 347  `Select 2`

**EN** A retail company wants to analyze transactional data stored in Amazon S3 for insights. The company needs a solution that allows them to run ad-hoc SQL queries on the data without having to set up or manage infrastructure. They also want to ensure that the data is well-organized and secured for future analysis. Which combination of AWS services should they use?

**中** 一家零售公司希望分析 Amazon S3 中存储的交易数据以获得见解。该公司需要一种解决方案，允许他们对数据运行即席 SQL 查询，而无需设置或管理基础设施。他们还希望确保数据组织良好且安全，以供将来分析。他们应该使用哪种 AWS 服务组合？

- **A.** Amazon Athena
  - Amazon Athena
- **B.** AWS Lake Formation
  - AWS 湖组
- **C.** Amazon RDS
  - Amazon RDS
- **D.** Amazon QuickSight
  - Amazon QuickSight
- **E.** Amazon Redshift
  - Amazon Redshift

**正确答案 / Answer: `A, B`**

The combination of Amazon Athena and AWS Lake Formation meets the company's requirements perfectly. Amazon Athena allows them to run ad-hoc SQL queries directly on the data stored in Amazon S3 without managing infrastructure, while AWS Lake Formation helps organize and secure the data for future analysis. Other options like Amazon RDS, Amazon QuickSight, and Amazon Redshift are either unsuitable for the use case or require additional setup and infrastructure management.

Amazon Athena 与 AWS Lake Formation 的结合完美满足了公司的需求。 Amazon Athena 允许他们直接对 Amazon S3 中存储的数据运行即席 SQL 查询，而无需管理基础设施，而 AWS Lake Formation 有助于组织和保护数据以供将来分析。其他选项（例如 Amazon RDS、Amazon QuickSight 和 Amazon Redshift）要么不适合该用例，要么需要额外的设置和基础设施管理。

---

## Question 348  `Select 2`

**EN** A company has a large dataset stored in Amazon S3. They want to perform ad-hoc SQL queries on this data without setting up or managing any servers. Additionally, they need to visualize the results of these queries in dashboards to share insights across their organization. Which combination of AWS services should they use to meet these requirements?

**中** 某公司有一个大型数据集存储在 Amazon S3 中。他们希望在不设置或管理任何服务器的情况下对此数据执行即席 SQL 查询。此外，他们需要在仪表板中可视化这些查询的结果，以便在整个组织中分享见解。他们应该使用哪种 AWS 服务组合来满足这些要求？

- **A.** Amazon Athena
  - Amazon Athena
- **B.** AWS Lake Formation
  - AWS 湖组
- **C.** Amazon QuickSight
  - Amazon QuickSight
- **D.** Amazon Redshift
  - Amazon Redshift
- **E.** Amazon EMR
  - Amazon EMR

**正确答案 / Answer: `A, C`**

The combination of Amazon Athena and Amazon QuickSight is the most suitable solution for this scenario. Amazon Athena enables the company to perform ad-hoc SQL queries on the data stored in Amazon S3 without any server management. Meanwhile, Amazon QuickSight allows the visualization of query results through dashboards, fulfilling the requirement to share insights across the organization. Other options like AWS Lake Formation, Amazon Redshift, and Amazon EMR are not as well-suited for this specific use case, as they either involve additional complexity or are designed for different purposes.

Amazon Athena 和 Amazon QuickSight 的组合是最适合该场景的解决方案。 Amazon Athena 使公司能够对 Amazon S3 中存储的数据执行即席 SQL 查询，而无需任何服务器管理。同时，Amazon QuickSight 允许通过仪表板可视化查询结果，满足在整个组织内共享见解的要求。 AWS Lake Formation、Amazon Redshift 和 Amazon EMR 等其他选项不太适合此特定用例，因为它们要么涉及额外的复杂性，要么是为不同的目的而设计的。

---

## Question 349  `Single answer`

**EN** A company needs to ingest data from IoT devices deployed across multiple regions. The data is generated continuously and needs to be processed in real-time for analytics and anomaly detection. Which solution provides the most efficient and scalable data ingestion pattern for this use case?

**中** 公司需要从跨多个区域部署的物联网设备获取数据。数据是连续生成的，需要实时处理以进行分析和异常检测。哪种解决方案为此用例提供了最高效且可扩展的数据摄取模式？

- **A.** Use Amazon Kinesis Data Streams to ingest the data from IoT devices and process it in real-time.
  - 使用 Amazon Kinesis 数据流从 IoT 设备获取数据并实时处理。
- **B.** Use Amazon S3 to store the data from IoT devices and run batch processing jobs periodically.
  - 使用 Amazon S3 存储来自 IoT 设备的数据并定期运行批处理作业。
- **C.** Use Amazon Simple Queue Service (SQS) to collect messages from IoT devices and trigger AWS Lambda for real-time processing.
  - 使用 Amazon Simple Queue Service (SQS) 从 IoT 设备收集消息并触发 AWS Lambda 进行实时处理。
- **D.** Use AWS DataSync to transfer data from IoT devices to an on-premises data pipeline for real-time processing.
  - 使用 AWS DataSync 将数据从 IoT 设备传输到本地数据管道以进行实时处理。

**正确答案 / Answer: `A`**

Amazon Kinesis Data Streams is specifically designed for real-time data ingestion and processing, making it the most suitable choice for scenarios involving continuous data generation, such as IoT devices. It allows for scalable, low-latency data streaming and can integrate with other AWS services for real-time analytics and anomaly detection. Other options, like S3 and SQS, do not meet the requirement for real-time data ingestion and processing, while AWS DataSync is focused on data migration rather than streaming.

Amazon Kinesis Data Streams 专为实时数据摄取和处理而设计，使其成为涉及连续数据生成的场景（例如物联网设备）的最合适选择。它支持可扩展、低延迟的数据流，并且可以与其他 AWS 服务集成以进行实时分析和异常检测。其他选项（例如 S3 和 SQS）无法满足实时数据摄取和处理的要求，而 AWS DataSync 则专注于数据迁移而不是流式传输。

---

## Question 350  `Single answer`

**EN** A company needs to ingest large volumes of log data from thousands of IoT devices deployed across multiple geographical locations. The data needs to be processed near real-time for analytics and monitoring. Which AWS service and ingestion pattern should the company use to handle the data ingestion effectively?

**中** 公司需要从部署在多个地理位置的数千个物联网设备中获取大量日志数据。需要近乎实时地处理数据以进行分析和监控。公司应使用哪种 AWS 服务和摄取模式来有效处理数据摄取？

- **A.** Use Amazon Kinesis Data Streams with a continuous data streaming pattern
  - 使用具有连续数据流模式的 Amazon Kinesis 数据流
- **B.** Use Amazon S3 with a batch data upload pattern
  - 使用 Amazon S3 进行批量数据上传模式
- **C.** Use AWS Snowball Edge for bulk data transfer
  - 使用 AWS Snowball Edge 进行批量数据传输
- **D.** Use Amazon SQS with a message queuing pattern
  - 将 Amazon SQS 与消息队列模式结合使用

**正确答案 / Answer: `A`**

To handle large volumes of log data from IoT devices and process it in near real-time, a real-time streaming service like Amazon Kinesis Data Streams is the best choice. It supports high-throughput data ingestion and real-time processing, which aligns with the company's requirements. Other services like S3, Snowball Edge, and SQS are not optimized for continuous real-time data ingestion.

为了处理来自 IoT 设备的大量日志数据并近乎实时地进行处理，像 Amazon Kinesis Data Streams 这样的实时流服务是最佳选择。它支持高吞吐量的数据摄取和实时处理，这符合公司的要求。 S3、Snowball Edge 和 SQS 等其他服务并未针对连续实时数据摄取进行优化。

---

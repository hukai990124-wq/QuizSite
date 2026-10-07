# AWS SAA-C03 真题演练卷 · 第 09 份

> 题目 401–450 · 中英对照 · 来源：HydraNode 免费题库（考生回忆真题，仅供参考）

## Question 401  `Select 2`

**EN** A company processes large amounts of critical data daily and stores it in an Amazon S3 bucket. The company wants to implement a backup strategy to ensure high durability and disaster recovery, while also optimizing costs. Which of the following strategies should the company implement?

**中** 某公司每天处理大量关键数据并将其存储在 Amazon S3 存储桶中。该公司希望实施备份策略以确保高耐用性和灾难恢复，同时优化成本。公司应实施以下哪些策略？

- **A.** Enable versioning on the S3 bucket and configure a lifecycle policy to transition previous versions to S3 Glacier.
  - 在 S3 存储桶上启用版本控制并配置生命周期策略以将以前的版本转换为 S3 Glacier。
- **B.** Set up cross-region replication (CRR) to replicate the S3 bucket to another AWS Region.
  - 设置跨区域复制 (CRR) 以将 S3 存储桶复制到另一个 AWS 区域。
- **C.** Create a daily backup of the S3 bucket using AWS Backup and store it in Amazon EBS snapshots.
  - 使用 AWS Backup 创建 S3 存储桶的每日备份并将其存储在 Amazon EBS 快照中。
- **D.** Enable S3 bucket logging and archive the logs to an S3 Glacier storage class.
  - 启用 S3 存储桶日志记录并将日志存档到 S3 Glacier 存储类。
- **E.** Use AWS DataSync to schedule regular backups of the S3 bucket to on-premises storage.
  - 使用 AWS DataSync 安排将 S3 存储桶定期备份到本地存储。

**正确答案 / Answer: `A, B`**

The correct answers involve leveraging built-in S3 features for backup and disaster recovery. Enabling versioning ensures data durability by retaining all versions of objects, and transitioning old versions to S3 Glacier optimizes costs. Cross-region replication provides an additional layer of disaster recovery by replicating data to another Region. The other options either do not apply to S3 backup strategies or do not align with the company's requirements for durability, disaster recovery, and cost optimization.

正确答案涉及利用内置 S3 功能进行备份和灾难恢复。启用版本控制通过保留对象的所有版本来确保数据持久性，并将旧版本转换为 S3 Glacier 可优化成本。跨区域复制通过将数据复制到另一个区域来提供额外的灾难恢复层。其他选项要么不适用于 S3 备份策略，要么不符合公司对持久性、灾难恢复和成本优化的要求。

---

## Question 402  `Select 3`

**EN** A company runs a critical e-commerce application on Amazon RDS for PostgreSQL. To ensure the application's data can be quickly recovered in case of accidental deletion or a regional disaster, they want to implement a backup strategy. Which of the following are appropriate actions to meet their requirements?

**中** 一家公司在 Amazon RDS for PostgreSQL 上运行关键的电子商务应用程序。为了确保应用程序的数据在意外删除或区域灾难的情况下能够快速恢复，他们希望实施备份策略。以下哪项是满足他们要求的适当行动？

- **A.** Enable automated backups for the RDS instance and configure a backup retention period.
  - 为 RDS 实例启用自动备份并配置备份保留期限。
- **B.** Set up an RDS Read Replica in another AWS Region and enable backups on the replica.
  - 在另一个 AWS 区域中设置 RDS 只读副本并在副本上启用备份。
- **C.** Regularly export RDS snapshots to Amazon S3 and replicate the data to another AWS Region.
  - 定期将 RDS 快照导出到 Amazon S3 并将数据复制到另一个 AWS 区域。
- **D.** Use AWS Backup to take application-consistent backups of the RDS database.
  - 使用 AWS Backup 对 RDS 数据库进行应用程序一致的备份。
- **E.** Enable Multi-AZ on the RDS instance to ensure data durability.
  - 在 RDS 实例上启用多可用区，以保证数据的持久性。

**正确答案 / Answer: `A, C, D`**

To implement a robust backup strategy for Amazon RDS for PostgreSQL, it is essential to enable automated backups for point-in-time recovery and protect against regional disasters by exporting snapshots to another region or using AWS Backup for cross-region backup capabilities. Multi-AZ primarily addresses high availability within the same region and is not a substitute for backups.

要为 PostgreSQL 的 Amazon RDS 实施强大的备份策略，必须启用自动备份以进行时间点恢复，并通过将快照导出到另一个区域或使用 AWS Backup 实现跨区域备份功能来防止区域灾难。多可用区主要解决同一区域内的高可用性问题，不能替代备份。

---

## Question 403  `Single answer`

**EN** A company needs to back up its Amazon RDS database to ensure minimal data loss in the event of a failure. They require point-in-time recovery for up to 7 days and want to automate the backup process. What is the most cost-effective backup strategy to achieve this?

**中** 公司需要备份其 Amazon RDS 数据库，以确保在发生故障时将数据丢失降至最低。他们需要长达 7 天的时间点恢复，并希望自动化备份过程。实现这一目标最经济有效的备份策略是什么？

- **A.** Enable automated backups for the RDS instance.
  - 为 RDS 实例启用自动备份。
- **B.** Create manual snapshots of the RDS instance daily.
  - 每天创建 RDS 实例的手动快照。
- **C.** Set up Amazon S3 Lifecycle Policies to archive the backups.
  - 设置 Amazon S3 生命周期策略以存档备份。
- **D.** Use AWS Backup to schedule daily backups for the RDS instance.
  - 使用 AWS Backup 安排 RDS 实例的每日备份。

**正确答案 / Answer: `A`**

Enabling automated backups on an Amazon RDS instance is the most cost-effective and straightforward solution for providing daily backups and point-in-time recovery capabilities. Automated backups store snapshots and transaction logs, ensuring that data can be restored to any point in time within the retention period, which aligns perfectly with the company's requirements.

在 Amazon RDS 实例上启用自动备份是提供每日备份和时间点恢复功能的最具成本效益且最简单的解决方案。自动备份存储快照和事务日志，确保数据可以恢复到保留期内的任何时间点，这完全符合公司的要求。

---

## Question 404  `Select 2`

**EN** A company is running a critical application on Amazon EC2 instances in a single Availability Zone. They want to implement a backup strategy to ensure that their application data is protected and recoverable in case of unexpected failures or disasters. Which of the following strategies will provide the most comprehensive and reliable backup solution?

**中** 一家公司正在单个可用区的 Amazon EC2 实例上运行关键应用程序。他们希望实施备份策略，以确保其应用程序数据受到保护并在发生意外故障或灾难时可恢复。以下哪种策略将提供最全面、最可靠的备份解决方案？

- **A.** Create snapshots of the Amazon EBS volumes attached to the EC2 instances and store them in the same region.
  - 创建附加到 EC2 实例的 Amazon EBS 卷的快照并将它们存储在同一区域中。
- **B.** Enable AWS Backup to manage and automate backups for EBS volumes and configure cross-region backup replication.
  - 启用 AWS Backup 来管理和自动执行 EBS 卷的备份并配置跨区域备份复制。
- **C.** Use an Amazon S3 Lifecycle policy to transition older backups to Amazon S3 Glacier for long-term storage.
  - 使用 Amazon S3 生命周期策略将较旧的备份转移到 Amazon S3 Glacier 进行长期存储。
- **D.** Configure an Amazon RDS Multi-AZ deployment for the application database to ensure high availability.
  - 配置应用数据库 Amazon RDS 多 AZ 部署，保证高可用。
- **E.** Use AWS Storage Gateway to replicate application data to an on-premises data center for additional redundancy.
  - 使用 AWS Storage Gateway 将应用程序数据复制到本地数据中心以获得额外冗余。

**正确答案 / Answer: `B, C`**

A reliable backup strategy should include automated and managed solutions like AWS Backup with cross-region replication to protect against region-wide failures. Additionally, transitioning older backups to cost-effective storage like S3 Glacier helps manage long-term storage costs efficiently. These strategies together provide robust and comprehensive backup coverage.

可靠的备份策略应包括自动化和托管解决方案，例如具有跨区域复制功能的 AWS Backup，以防止区域范围内的故障。此外，将旧备份过渡到 S3 Glacier 等经济高效的存储有助于有效管理长期存储成本。这些策略共同提供了强大且全面的备份覆盖范围。

---

## Question 405  `Select 2`

**EN** An e-commerce company is running a high-transactional web application on Amazon EC2 instances. The application requires low latency and high IOPS for its database, while log files for audit purposes need a cost-effective storage solution. Which combination of Amazon Elastic Block Store (EBS) volume types should the company choose?

**中** 一家电子商务公司正在 Amazon EC2 实例上运行高事务性 Web 应用程序。该应用程序的数据库需要低延迟和高 IOPS，而用于审计目的的日志文件需要经济高效的存储解决方案。公司应选择哪种 Amazon Elastic Block Store (EBS) 卷类型组合？

- **A.** Provisioned IOPS SSD (io2) for the database and Cold HDD (sc1) for the logs
  - 为数据库预配置 IOPS SSD (io2)，为日志预配置冷 HDD (sc1)
- **B.** General Purpose SSD (gp3) for the database and Throughput Optimized HDD (st1) for the logs
  - 用于数据库的通用 SSD (gp3) 和用于日志的吞吐量优化 HDD (st1)
- **C.** Provisioned IOPS SSD (io1) for the database and Throughput Optimized HDD (st1) for the logs
  - 为数据库配置 IOPS SSD (io1)，为日志配置吞吐量优化 HDD (st1)
- **D.** General Purpose SSD (gp2) for the database and Cold HDD (sc1) for the logs
  - 用于数据库的通用 SSD (gp2) 和用于日志的冷 HDD (sc1)
- **E.** Provisioned IOPS SSD (io2) for the database and General Purpose SSD (gp3) for the logs
  - 用于数据库的预配置 IOPS SSD (io2) 和用于日志的通用 SSD (gp3)

**正确答案 / Answer: `A, C`**

For a high-transactional database, Provisioned IOPS SSD volumes (io1 or io2) are the best choice due to their ability to deliver high performance and low latency. For log files, which require high throughput and are write-intensive, Throughput Optimized HDD (st1) is a cost-effective solution. This combination ensures optimal performance for critical database operations while keeping costs low for log storage.

对于高事务性数据库，预配置 IOPS SSD 卷（io1 或 io2）是最佳选择，因为它们能够提供高性能和低延迟。对于需要高吞吐量且写入密集型的日志文件，吞吐量优化 HDD (st1) 是一种经济高效的解决方案。这种组合可确保关键数据库操作的最佳性能，同时保持日志存储的低成本。

---

## Question 406  `Single answer`

**EN** A company is running a batch processing workload that requires high throughput for large, sequential data transfers. The workload is not latency-sensitive, and cost optimization is a key priority. Which Amazon EBS volume type is the MOST suitable for this use case?

**中** 一家公司正在运行批处理工作负载，需要高吞吐量来进行大型顺序数据传输。工作负载对延迟不敏感，成本优化是一个关键优先事项。哪种 Amazon EBS 卷类型最适合此用例？

- **A.** General Purpose SSD (gp3)
  - 通用 SSD (gp3)
- **B.** Provisioned IOPS SSD (io2)
  - 预配置 IOPS SSD (io2)
- **C.** Throughput Optimized HDD (st1)
  - 吞吐量优化 HDD (st1)
- **D.** Cold HDD (sc1)
  - 冷硬盘 (sc1)

**正确答案 / Answer: `C`**

The workload described in the scenario requires high throughput for large, sequential data transfers, which is a key characteristic of Throughput Optimized HDD (st1) volumes. Additionally, the cost-sensitive nature of the workload makes st1 a better fit than SSD volumes, which are generally more expensive. Cold HDD (sc1) is not suitable due to its lower performance characteristics, even though it is cost-effective.

该场景中描述的工作负载需要高吞吐量来进行大型顺序数据传输，这是吞吐量优化 HDD (st1) 卷的关键特征。此外，工作负载对成本敏感的性质使得 st1 比 SSD 卷更适合，后者通常更昂贵。尽管冷 HDD (sc1) 具有成本效益，但由于其性能特征较低，因此不适合。

---

## Question 407  `Single answer`

**EN** A company is running a high-performance database workload on Amazon EC2 instances and requires consistent high IOPS with low latency. Additionally, the solution must support a volume size of up to 16 TiB. Which Amazon EBS volume type is the most appropriate for this use case?

**中** 一家公司在 Amazon EC2 实例上运行高性能数据库工作负载，需要一致的高 IOPS 和低延迟。此外，该解决方案必须支持高达 16 TiB 的卷大小。哪种 Amazon EBS 卷类型最适合此用例？

- **A.** General Purpose SSD (gp3)
  - 通用 SSD (gp3)
- **B.** Provisioned IOPS SSD (io2)
  - 预配置 IOPS SSD (io2)
- **C.** Provisioned IOPS SSD (io1)
  - 预配置 IOPS SSD (io1)
- **D.** Throughput Optimized HDD (st1)
  - 吞吐量优化 HDD (st1)

**正确答案 / Answer: `B`**

For high-performance database workloads requiring consistent high IOPS and low latency, the Provisioned IOPS SSD (io2) volume type is the most appropriate choice. It is specifically designed for such use cases, offering higher reliability and durability compared to io1, and it supports the required volume size of up to 16 TiB. Other volume types like gp3 or st1 are not optimized for such demanding workloads.

对于需要一致的高 IOPS 和低延迟的高性能数据库工作负载，预配置 IOPS SSD (io2) 卷类型是最合适的选择。它专为此类用例而设计，与 io1 相比，提供更高的可靠性和耐用性，并且支持高达 16 TiB 的所需卷大小。其他卷类型（例如 gp3 或 st1）并未针对如此苛刻的工作负载进行优化。

---

## Question 408  `Single answer`

**EN** A company is running a database workload on an Amazon EC2 instance and requires a storage solution that provides low latency and high IOPS for frequent read and write operations. The database also needs to handle high transaction volumes efficiently. Which Amazon EBS volume type is the most suitable for this workload?

**中** 某公司在 Amazon EC2 实例上运行数据库工作负载，需要一个能够为频繁读写操作提供低延迟和高 IOPS 的存储解决方案。数据库还需要有效地处理大量事务。哪种 Amazon EBS 卷类型最适合此工作负载？

- **A.** General Purpose SSD (gp3)
  - 通用 SSD (gp3)
- **B.** Provisioned IOPS SSD (io2)
  - 预配置 IOPS SSD (io2)
- **C.** Throughput Optimized HDD (st1)
  - 吞吐量优化 HDD (st1)
- **D.** Cold HDD (sc1)
  - 冷硬盘 (sc1)

**正确答案 / Answer: `B`**

Provisioned IOPS SSD (io2) volumes are specifically designed for high-performance transactional workloads that require high IOPS and low latency, such as databases. While General Purpose SSD (gp3) is versatile, it does not match the performance levels of io2 for high-transaction workloads. Throughput-optimized and cold HDD volumes are tailored for sequential workloads and infrequent access, respectively, and do not meet the performance needs of the database in this scenario.

预配置 IOPS SSD (io2) 卷专为需要高 IOPS 和低延迟的高性能事务工作负载（例如数据库）而设计。虽然通用 SSD (gp3) 用途广泛，但它无法与 io2 对于高事务工作负载的性能水平相匹配。吞吐量优化卷和冷 HDD 卷分别针对顺序工作负载和不频繁访问而定制，无法满足此场景中数据库的性能需求。

---

## Question 409  `Select 2`

**EN** A company is using Amazon S3 to store large volumes of data. Some of the data needs to be retained for regulatory compliance, while other data becomes infrequently accessed after 30 days and should be cost-optimized. The company also wants to ensure automatic deletion of data that is no longer needed after 5 years. How should the company design its S3 lifecycle policy to meet these requirements?

**中** 一家公司正在使用 Amazon S3 来存储大量数据。某些数据需要保留以符合法规要求，而其他数据在 30 天后就不再经常访问，应进行成本优化。该公司还希望确保自动删除 5 年后不再需要的数据。公司应如何设计其 S3 生命周期策略来满足这些要求？

- **A.** Move infrequently accessed data to S3 Intelligent-Tiering after 30 days.
  - 30 天后将不经常访问的数据移至 S3 智能分层。
- **B.** Move infrequently accessed data to S3 Standard-IA after 30 days.
  - 30 天后将不常访问的数据移至 S3 Standard-IA。
- **C.** Delete data that is no longer needed after 5 years.
  - 删除 5 年后不再需要的数据。
- **D.** Enable S3 Glacier Deep Archive for compliance data after 30 days.
  - 30 天后启用 S3 Glacier 深度存档以获取合规性数据。
- **E.** Use object versioning to retain all versions of data for compliance purposes.
  - 使用对象版本控制保留数据的所有版本以实现合规性目的。

**正确答案 / Answer: `B, C`**

The correct approach involves transitioning infrequently accessed data to S3 Standard-IA after 30 days to optimize costs and setting a lifecycle policy to delete unneeded data after 5 years. S3 Intelligent-Tiering is not ideal here because access patterns are predictable. Glacier Deep Archive and versioning are not required to meet the specified requirements in this scenario.

正确的方法是在 30 天后将不经常访问的数据转换为 S3 Standard-IA 以优化成本，并设置生命周期策略以在 5 年后删除不需要的数据。 S3 智能分层在这里并不理想，因为访问模式是可预测的。 Glacier Deep Archive 和版本控制不需要满足此场景中的指定要求。

---

## Question 410  `Single answer`

**EN** Your company is using Amazon S3 to store vast amounts of data, including logs that are no longer actively accessed after 30 days. However, due to compliance requirements, these logs must be retained for seven years. You want to optimize storage costs while ensuring that the data is automatically managed throughout its lifecycle. Which approach should you take?

**中** 您的公司正在使用 Amazon S3 存储大量数据，包括 30 天后不再主动访问的日志。但是，由于合规性要求，这些日志必须保留七年。您希望优化存储成本，同时确保数据在其整个生命周期中得到自动管理。您应该采取哪种方法？

- **A.** Create an S3 Lifecycle policy to transition objects to S3 Glacier after 30 days and expire them after seven years.
  - 创建 S3 生命周期策略以在 30 天后将对象过渡到 S3 Glacier，并在 7 年后过期。
- **B.** Manually move objects to S3 Glacier after 30 days and delete them after seven years.
  - 30 天后手动将对象移动到 S3 Glacier，并在 7 年后将其删除。
- **C.** Use Amazon S3 Intelligent-Tiering to automatically manage the storage class and delete objects after seven years.
  - 使用 Amazon S3 智能分层自动管理存储类别并在七年后删除对象。
- **D.** Create an S3 Lifecycle policy to transition objects to S3 Standard-Infrequent Access (S3 Standard-IA) after 30 days and then to S3 Glacier after 60 days, expiring them after seven years.
  - 创建 S3 生命周期策略，以在 30 天后将对象转换为 S3 标准-不频繁访问 (S3 标准-IA)，然后在 60 天后转换为 S3 Glacier，并在七年后过期。

**正确答案 / Answer: `A`**

S3 Lifecycle policies are ideal for managing data lifecycles in Amazon S3. In this scenario, transitioning objects to S3 Glacier after 30 days minimizes storage costs, and expiring them after seven years ensures compliance while automatically managing data retention. This eliminates manual effort and optimizes cost efficiency.

S3 生命周期策略非常适合管理 Amazon S3 中的数据生命周期。在此场景中，30 天后将对象转换为 S3 Glacier 可最大限度地降低存储成本，并在 7 年后使对象过期可确保合规性，同时自动管理数据保留。这消除了手动工作并优化了成本效率。

---

## Question 411  `Single answer`

**EN** A company stores large volumes of log data in an Amazon S3 bucket. The data is frequently accessed for the first 30 days, after which it is rarely accessed but must be retained for compliance purposes for at least 7 years. Which solution is the MOST cost-effective for managing the data lifecycle while ensuring compliance?

**中** 某公司在 Amazon S3 桶中存储大量日志数据。数据在前 30 天内经常被访问，此后很少被访问，但出于合规目的必须保留至少 7 年。哪种解决方案在管理数据生命周期同时确保合规性方面最具成本效益？

- **A.** Configure an S3 Lifecycle policy to transition objects to S3 Glacier Instant Retrieval after 30 days and delete them after 7 years.
  - 配置 S3 生命周期策略以在 30 天后将对象过渡到 S3 Glacier 即时检索，并在 7 年后删除它们。
- **B.** Manually move objects to S3 Glacier after 30 days and delete them after 7 years.
  - 30 天后手动将对象移动到 S3 Glacier，并在 7 年后将其删除。
- **C.** Configure an S3 Lifecycle policy to transition objects to S3 Standard-IA after 30 days and then to S3 Glacier Deep Archive after 7 years.
  - 配置 S3 生命周期策略以在 30 天后将对象转换为 S3 Standard-IA，然后在 7 年后将对象转换为 S3 Glacier Deep Archive。
- **D.** Configure an S3 Lifecycle policy to transition objects to S3 Standard-IA after 30 days and then to S3 Glacier Deep Archive after 1 year.
  - 配置 S3 生命周期策略以在 30 天后将对象转换为 S3 Standard-IA，然后在 1 年后将对象转换为 S3 Glacier Deep Archive。

**正确答案 / Answer: `A`**

S3 Lifecycle policies are designed to optimize cost and automate data management. In this scenario, transitioning data to S3 Glacier Instant Retrieval after 30 days ensures cost savings while maintaining fast access for compliance checks. Configuring the policy to automatically delete data after 7 years meets the compliance requirement without manual intervention.

S3 生命周期策略旨在优化成本和自动化数据管理。在这种情况下，30 天后将数据转换到 S3 Glacier 即时检索可确保节省成本，同时保持快速访问以进行合规性检查。配置 7 年后自动删除数据的策略，满足合规要求，无需人工干预。

---

## Question 412  `Single answer`

**EN** Your company stores critical data in an Amazon S3 bucket for analytics. Compliance requirements mandate that data older than 90 days must be archived to reduce costs, and data older than 1 year must be deleted. How can you implement this requirement efficiently while minimizing management overhead?

**中** 您的公司将关键数据存储在 Amazon S3 存储桶中以进行分析。合规性要求规定，必须归档超过 90 天的数据以降低成本，并且必须删除超过 1 年的数据。如何有效地实现这一要求，同时最大限度地减少管理开销？

- **A.** Use Amazon S3 Lifecycle policies to transition data to Amazon S3 Glacier after 90 days and delete it after 1 year.
  - 使用 Amazon S3 生命周期策略在 90 天后将数据传输到 Amazon S3 Glacier，并在 1 年后将其删除。
- **B.** Manually move data older than 90 days to Amazon S3 Glacier and delete objects older than 1 year using an AWS CLI script.
  - 使用 AWS CLI 脚本手动将超过 90 天的数据移动到 Amazon S3 Glacier 并删除超过 1 年的对象。
- **C.** Use Amazon S3 Lifecycle policies to transition data to Amazon S3 Standard-IA after 90 days and delete it after 1 year.
  - 使用 Amazon S3 生命周期策略在 90 天后将数据转换为 Amazon S3 Standard-IA，并在 1 年后将其删除。
- **D.** Configure an AWS Lambda function to monitor object age and move data to Amazon S3 Glacier after 90 days, and delete it after 1 year.
  - 配置 AWS Lambda 函数来监控对象年龄，并在 90 天后将数据移至 Amazon S3 Glacier，并在 1 年后将其删除。

**正确答案 / Answer: `A`**

Amazon S3 Lifecycle policies are a native feature designed to manage object lifecycles efficiently. By configuring a policy, you can automatically transition data to lower-cost storage classes like S3 Glacier and delete objects after a specified period, meeting both cost-optimization and compliance requirements without manual intervention. This is the most efficient and reliable solution for the given scenario.

Amazon S3 生命周期策略是旨在高效管理对象生命周期的本机功能。通过配置策略，您可以自动将数据迁移到 S3 Glacier 等成本较低的存储类别，并在指定时间后删除对象，无需人工干预即可满足成本优化和合规性要求。对于给定场景，这是最有效、最可靠的解决方案。

---

## Question 413  `Single answer`

**EN** A company has an on-premises file storage system used for application data and wants to migrate to AWS while maintaining low latency access for some of its on-premises applications. The company also requires seamless integration with its on-premises environment and the ability to transfer large datasets periodically to AWS for long-term archiving. Which solution best meets these requirements?

**中** 一家公司拥有用于应用程序数据的本地文件存储系统，并且希望迁移到 AWS，同时保持某些本地应用程序的低延迟访问。该公司还需要与其本地环境无缝集成，并能够定期将大型数据集传输到 AWS 进行长期存档。哪种解决方案最能满足这些要求？

- **A.** Use AWS Storage Gateway in File Gateway mode to provide access to S3 storage and integrate with on-premises applications.
  - 在文件网关模式下使用 AWS Storage Gateway 提供对 S3 存储的访问并与本地应用程序集成。
- **B.** Use AWS DataSync to continuously replicate data from the on-premises storage system to Amazon S3 and provide low latency access.
  - 使用 AWS DataSync 将数据从本地存储系统持续复制到 Amazon S3 并提供低延迟访问。
- **C.** Use Amazon S3 Transfer Acceleration to upload data to an S3 bucket for archiving, and configure applications to access the data directly from S3.
  - 使用 Amazon S3 传输加速将数据上传到 S3 存储桶进行存档，并将应用程序配置为直接从 S3 访问数据。
- **D.** Use AWS Storage Gateway in Tape Gateway mode to emulate a tape library for archiving and provide low latency access to on-premises applications.
  - 在磁带网关模式下使用 AWS Storage Gateway 模拟磁带库进行归档，并提供对本地应用程序的低延迟访问。

**正确答案 / Answer: `A`**

The AWS Storage Gateway in File Gateway mode is the best solution for hybrid storage scenarios where on-premises applications require low latency access to files while utilizing Amazon S3 for scalable and durable storage. File Gateway caches frequently accessed data locally, ensuring high performance for on-premises applications, and seamlessly transfers data to AWS for long-term archiving. Other options, such as DataSync or Transfer Acceleration, are more suitable for data migration or upload optimization rather than hybrid storage with local application integration.

文件网关模式下的 AWS Storage Gateway 是混合存储场景的最佳解决方案，在混合存储场景中，本地应用程序需要对文件进行低延迟访问，同时利用 Amazon S3 进行可扩展且持久的存储。文件网关在本地缓存经常访问的数据，确保本地应用程序的高性能，并将数据无缝传输到 AWS 进行长期存档。其他选项（例如 DataSync 或传输加速）更适合数据迁移或上传优化，而不是与本地应用程序集成的混合存储。

---

## Question 414  `Single answer`

**EN** A company has an on-premises file storage system that needs to be integrated with AWS to provide low-latency access to frequently used data and seamless access to the full dataset stored in Amazon S3. Which hybrid storage solution should they use to meet this requirement?

**中** 一家公司拥有一个本地文件存储系统，需要与 AWS 集成，以提供对常用数据的低延迟访问以及对 Amazon S3 中存储的完整数据集的无缝访问。他们应该使用哪种混合存储解决方案来满足此要求？

- **A.** AWS DataSync
  - AWS 数据同步
- **B.** AWS Storage Gateway - File Gateway
  - AWS Storage Gateway - 文件网关
- **C.** AWS Transfer Family
  - AWS 传输系列
- **D.** Amazon S3 Glacier
  - Amazon S3 Glacier

**正确答案 / Answer: `B`**

AWS Storage Gateway - File Gateway is specifically designed for hybrid storage scenarios where low-latency access is required for frequently used data while providing seamless access to the full dataset stored in Amazon S3. It caches frequently accessed data locally, which meets the company’s requirements. Other options like AWS DataSync, AWS Transfer Family, and Amazon S3 Glacier serve different purposes and do not address the need for low-latency access or hybrid storage integration.

AWS Storage Gateway - 文件网关专为混合存储场景而设计，其中需要对常用数据进行低延迟访问，同时提供对 Amazon S3 中存储的完整数据集的无缝访问。将经常访问的数据缓存在本地，满足公司的需求。 AWS DataSync、AWS Transfer Family 和 Amazon S3 Glacier 等其他选项具有不同的用途，不能满足低延迟访问或混合存储集成的需求。

---

## Question 415  `Single answer`

**EN** A company runs a hybrid cloud architecture where a critical on-premises application requires low-latency access to frequently used data stored in the AWS Cloud. The company also wants to archive infrequently accessed data to Amazon S3 Glacier for cost efficiency. Which AWS service should the company use to meet these requirements?

**中** 一家公司运行混合云架构，其中关键的本地应用程序需要低延迟地访问存储在 AWS 云中的常用数据。该公司还希望将不常访问的数据存档到 Amazon S3 Glacier 以提高成本效率。公司应该使用哪种 AWS 服务来满足这些要求？

- **A.** AWS Storage Gateway, File Gateway
  - AWS Storage Gateway，文件网关
- **B.** AWS DataSync
  - AWS 数据同步
- **C.** AWS Transfer Family
  - AWS 传输系列
- **D.** AWS Storage Gateway, Tape Gateway
  - AWS Storage Gateway，磁带网关

**正确答案 / Answer: `A`**

AWS Storage Gateway, File Gateway is the correct choice because it enables low-latency access to frequently used cloud data by caching it locally, while also supporting the archiving of less frequently accessed data to cost-efficient storage tiers like Amazon S3 Glacier. The other options do not meet the requirements of providing low-latency access alongside efficient archiving.

AWS Storage Gateway 文件网关是正确的选择，因为它通过在本地缓存常用云数据来实现对常用云数据的低延迟访问，同时还支持将不常访问的数据归档到 Amazon S3 Glacier 等经济高效的存储层。其他选项无法满足提供低延迟访问和高效归档的要求。

---

## Question 416  `Single answer`

**EN** A large enterprise wants to migrate its on-premises file storage to AWS while maintaining low-latency access for its on-premises applications. The company also needs a solution to periodically archive cold data to Amazon S3 for cost-effectiveness. Which hybrid storage solution would best meet these requirements?

**中** 一家大型企业希望将其本地文件存储迁移到 AWS，同时保持其本地应用程序的低延迟访问。该公司还需要一种解决方案来定期将冷数据存档到 Amazon S3，以实现成本效益。哪种混合存储解决方案最能满足这些要求？

- **A.** AWS DataSync
  - AWS 数据同步
- **B.** AWS Transfer Family
  - AWS 传输系列
- **C.** AWS Storage Gateway - File Gateway
  - AWS Storage Gateway - 文件网关
- **D.** Amazon S3 Glacier
  - Amazon S3 Glacier

**正确答案 / Answer: `C`**

AWS Storage Gateway - File Gateway is the ideal solution for this scenario because it allows on-premises applications to access files stored in Amazon S3 using standard file protocols, while providing low-latency performance. Additionally, it seamlessly integrates with Amazon S3 for storing and archiving data, meeting the company's requirements for cost-effective archival storage.

AWS Storage Gateway - 文件网关是此场景的理想解决方案，因为它允许本地应用程序使用标准文件协议访问存储在 Amazon S3 中的文件，同时提供低延迟性能。此外，它还与 Amazon S3 无缝集成，用于数据存储和归档，满足公司对经济高效的归档存储的要求。

---

## Question 417  `Single answer`

**EN** A company is building a data lake on AWS to store large amounts of structured and unstructured data. The data is accessed daily for the first 30 days and then infrequently thereafter. The company wants to minimize storage costs while ensuring that the data is still accessible with low latency when needed. Which storage solution and access pattern combination should the company use?

**中** 一家公司正在 AWS 上构建数据湖来存储大量结构化和非结构化数据。前 30 天每天都会访问数据，此后则很少访问。该公司希望最大限度地降低存储成本，同时确保在需要时仍然可以低延迟地访问数据。公司应使用哪种存储解决方案和访问模式组合？

- **A.** Store the data in Amazon S3 Standard and transition it to S3 Glacier after 30 days
  - 将数据存储在 Amazon S3 Standard 中，并在 30 天后将其转换为 S3 Glacier
- **B.** Store the data in Amazon S3 Intelligent-Tiering and allow automatic tier transitions based on access patterns
  - 将数据存储在 Amazon S3 智能分层中，并允许根据访问模式自动进行层转换
- **C.** Store the data in Amazon S3 Standard-IA and transition it to S3 Glacier Deep Archive after 30 days
  - 将数据存储在 Amazon S3 Standard-IA 中，并在 30 天后将其转换到 S3 Glacier Deep Archive
- **D.** Store the data in Amazon S3 One Zone-IA to minimize costs and manually manage data transitions
  - 将数据存储在 Amazon S3 One Zone-IA 中，以最大限度地降低成本并手动管理数据转换

**正确答案 / Answer: `B`**

The best solution for the given scenario is Amazon S3 Intelligent-Tiering. It optimizes storage costs by automatically tiering data based on changing access patterns and ensures low latency access. This eliminates the need for manual transitions and ensures the data is stored cost-effectively while being readily accessible, meeting the company's requirements for both cost efficiency and low latency access.

针对给定场景的最佳解决方案是 Amazon S3 智能分层。它通过根据不断变化的访问模式自动分层数据来优化存储成本，并确保低延迟访问。这消除了手动转换的需要，并确保数据以经济高效的方式存储，同时易于访问，满足公司对成本效率和低延迟访问的要求。

---

## Question 418  `Single answer`

**EN** A company is building a data analytics application that ingests large volumes of data and processes it to generate daily reports. The application has two distinct access patterns: (1) frequently accessed data for the last 7 days and (2) infrequently accessed historical data older than 7 days. Which storage solution provides the most cost-effective yet performant architecture for this use case?

**中** 一家公司正在构建一个数据分析应用程序，该应用程序摄取大量数据并对其进行处理以生成每日报告。该应用程序具有两种不同的访问模式：(1) 最近 7 天频繁访问的数据和 (2) 7 天以上不经常访问的历史数据。哪种存储解决方案可为该用例提供最具成本效益且高性能的架构？

- **A.** Store all data in Amazon S3 Standard storage class.
  - 将所有数据存储在 Amazon S3 标准存储类中。
- **B.** Store data for the last 7 days in Amazon S3 Standard and move older data to S3 Glacier Deep Archive using lifecycle policies.
  - 将过去 7 天的数据存储在 Amazon S3 Standard 中，并使用生命周期策略将旧数据移动到 S3 Glacier Deep Archive。
- **C.** Store data for the last 7 days in Amazon S3 Intelligent-Tiering and move older data to S3 Glacier using lifecycle policies.
  - 将过去 7 天的数据存储在 Amazon S3 智能分层中，并使用生命周期策略将旧数据移动到 S3 Glacier。
- **D.** Store all data in Amazon S3 One Zone-IA to lower costs.
  - 将所有数据存储在 Amazon S3 One Zone-IA 中以降低成本。

**正确答案 / Answer: `C`**

The most effective solution leverages Amazon S3 Intelligent-Tiering for the frequently accessed data (last 7 days), as it automatically moves data between access tiers to optimize costs. For older, infrequently accessed data, S3 Glacier provides a balance of low storage costs and reasonable retrieval times, which is ideal for the historical data in this use case. Lifecycle policies automate the transition of data between these storage classes.

最有效的解决方案利用 Amazon S3 智能分层来处理频繁访问的数据（最近 7 天），因为它会自动在访问层之间移动数据以优化成本。对于较旧的、不经常访问的数据，S3 Glacier 提供了低存储成本和合理检索时间的平衡，这对于该用例中的历史数据来说是理想的选择。生命周期策略自动在这些存储类别之间进行数据转换。

---

## Question 419  `Single answer`

**EN** A company runs a web application that stores user-uploaded images in an Amazon S3 bucket. The application has two distinct access patterns: (1) frequent access for the first 30 days after an image is uploaded and (2) infrequent access after the initial 30 days. The company wants to optimize storage costs without impacting application performance. What is the BEST solution?

**中** 一家公司运行一个 Web 应用程序，将用户上传的图像存储在 Amazon S3 存储桶中。该应用程序有两种不同的访问模式：(1) 上传图像后的前 30 天内频繁访问；(2) 最初 30 天后不频繁访问。该公司希望在不影响应用程序性能的情况下优化存储成本。最好的解决方案是什么？

- **A.** Configure an S3 Lifecycle policy to transition objects to S3 Intelligent-Tiering after 30 days.
  - 配置 S3 生命周期策略以在 30 天后将对象过渡到 S3 智能分层。
- **B.** Configure an S3 Lifecycle policy to transition objects to S3 Standard-IA after 30 days.
  - 配置 S3 生命周期策略以在 30 天后将对象过渡到 S3 Standard-IA。
- **C.** Configure an S3 Lifecycle policy to transition objects to S3 Glacier Deep Archive after 30 days.
  - 配置 S3 生命周期策略以在 30 天后将对象过渡到 S3 Glacier Deep Archive。
- **D.** Store all objects in S3 Standard and manually move them to the appropriate storage class after 30 days.
  - 将所有对象存储在 S3 Standard 中，并在 30 天后手动将它们移动到适当的存储类别。

**正确答案 / Answer: `B`**

The S3 Standard-IA storage class is optimized for objects that are accessed less frequently but still require quick retrieval, and it provides cost savings compared to S3 Standard. By configuring an S3 Lifecycle policy, objects can be automatically transitioned to Standard-IA after 30 days, aligning with the application's predictable access pattern while minimizing costs.

S3 Standard-IA 存储类针对访问频率较低但仍需要快速检索的对象进行了优化，与 S3 Standard 相比，它可以节省成本。通过配置 S3 生命周期策略，对象可以在 30 天后自动转换为 Standard-IA，与应用程序的可预测访问模式保持一致，同时最大限度地降低成本。

---

## Question 420  `Single answer`

**EN** A company is designing a photo-sharing application where users can upload images. The application stores images in Amazon S3. The images are accessed frequently for the first 30 days after upload but are rarely accessed after that. The company wants to minimize storage costs while ensuring the images remain available for download when requested. What is the MOST cost-efficient storage solution?

**中** 一家公司正在设计一款照片共享应用程序，用户可以在其中上传图像。应用程序将图像存储在 Amazon S3 中。图片上传后的前 30 天内访问频繁，但此后很少访问。该公司希望最大限度地降低存储成本，同时确保图像在需要时仍可供下载。什么是最具成本效益的存储解决方案？

- **A.** Store the images in the S3 Standard storage class for the first 30 days, then transition them to the S3 Glacier Flexible Retrieval storage class.
  - 前 30 天将图像存储在 S3 标准存储类中，然后将其转换为 S3 Glacier 灵活检索存储类。
- **B.** Store the images in the S3 Intelligent-Tiering storage class.
  - 将图像存储在 S3 智能分层存储类中。
- **C.** Store the images in the S3 Standard storage class for the first 30 days, then transition them to the S3 Standard-Infrequent Access (S3 Standard-IA) storage class.
  - 前 30 天将图像存储在 S3 标准存储类中，然后将其转换为 S3 标准-不频繁访问 (S3 标准-IA) 存储类。
- **D.** Store all images in the S3 Standard storage class permanently.
  - 将所有图像永久存储在 S3 标准存储类中。

**正确答案 / Answer: `C`**

The company's access pattern indicates that images are frequently accessed for the first 30 days and then infrequently accessed afterward. Using S3 Standard for the first 30 days ensures low-latency access during the frequent-access period. Transitioning to S3 Standard-IA after 30 days reduces storage costs for the infrequently accessed images while maintaining quick retrieval times. This approach strikes the best balance between cost and performance for the given scenario.

该公司的访问模式表明，图像在前 30 天内访问频率较高，之后访问频率较低。前 30 天使用 S3 标准可确保频繁访问期间的低延迟访问。 30 天后过渡到 S3 Standard-IA 可降低不常访问图像的存储成本，同时保持快速检索时间。这种方法在给定场景的成本和性能之间取得了最佳平衡。

---

## Question 421  `Single answer`

**EN** A company is migrating its on-premises data to Amazon S3 and wants to minimize costs for storing infrequently accessed data. The company also requires immediate access to data when needed without waiting for retrieval. Which S3 storage class should the company choose?

**中** 一家公司正在将其本地数据迁移到 Amazon S3，并希望最大限度地降低存储不经常访问的数据的成本。该公司还要求在需要时立即访问数据，而无需等待检索。公司应该选择哪种 S3 存储类别？

- **A.** S3 Standard
  - S3 标准
- **B.** S3 Standard-IA (Infrequent Access)
  - S3 标准-IA（不频繁访问）
- **C.** S3 Intelligent-Tiering
  - S3 智能分层
- **D.** S3 Glacier Instant Retrieval
  - S3 Glacier 即时检索

**正确答案 / Answer: `B`**

S3 Standard-IA is the appropriate choice for storing infrequently accessed data while maintaining immediate access. It provides a cost-effective solution by offering lower storage costs compared to S3 Standard, while still delivering the required rapid access to the data. Other options like S3 Intelligent-Tiering and S3 Glacier Instant Retrieval are either unsuitable or introduce unnecessary complexity or costs for this specific use case.

S3 Standard-IA 是存储不经常访问的数据同时保持即时访问的适当选择。与 S3 标准相比，它提供了更低的存储成本，同时仍然提供所需的数据快速访问，从而提供了一种经济高效的解决方案。 S3 智能分层和 S3 Glacier 即时检索等其他选项要么不适合，要么为此特定用例带来不必要的复杂性或成本。

---

## Question 422  `Single answer`

**EN** A media company stores large volumes of video files in Amazon S3. These files are infrequently accessed after the first 30 days but must be retained for at least five years for compliance purposes. The company wants to optimize storage costs while ensuring the files remain easily accessible when needed. What is the MOST cost-effective solution?

**中** 一家媒体公司在 Amazon S3 中存储大量视频文件。这些文件在前 30 天后很少被访问，但出于合规性目的必须保留至少五年。该公司希望优化存储成本，同时确保在需要时轻松访问文件。最具成本效益的解决方案是什么？

- **A.** Use Amazon S3 Intelligent-Tiering for all files.
  - 对所有文件使用 Amazon S3 智能分层。
- **B.** Move the files to the S3 Standard-IA storage class after 30 days.
  - 30 天后将文件移至 S3 Standard-IA 存储类别。
- **C.** Use S3 Lifecycle policies to transition the files to S3 Glacier Flexible Retrieval after 30 days.
  - 使用 S3 生命周期策略在 30 天后将文件转换为 S3 Glacier 灵活检索。
- **D.** Use S3 Lifecycle policies to transition the files to S3 Glacier Deep Archive after 30 days.
  - 使用 S3 生命周期策略在 30 天后将文件转换到 S3 Glacier Deep Archive。

**正确答案 / Answer: `B`**

The media company's files are accessed infrequently after 30 days but must remain accessible on-demand for compliance. S3 Standard-IA provides a cost-effective solution for this use case by reducing storage costs while still allowing fast retrieval when needed. The other options either fail to meet the access requirements or are not the most cost-effective choice for the given access pattern.

媒体公司的文件在 30 天后很少被访问，但必须保持按需访问以确保合规性。 S3 Standard-IA 通过降低存储成本，同时仍允许在需要时快速检索，为此用例提供了一种经济高效的解决方案。其他选项要么无法满足访问要求，要么不是给定访问模式的最具成本效益的选择。

---

## Question 423  `Single answer`

**EN** A company uses Amazon S3 to store large volumes of log files that are rarely accessed but must be retained for compliance purposes for 7 years. The company needs a cost-effective storage solution while ensuring that files can be retrieved within hours if needed. Which S3 storage class should the company use to meet these requirements?

**中** 一家公司使用 Amazon S3 存储大量很少访问但出于合规目的必须保留 7 年的日志文件。该公司需要一种经济高效的存储解决方案，同时确保可以在需要时在数小时内检索文件。公司应该使用哪种 S3 存储类别来满足这些要求？

- **A.** S3 Standard
  - S3 标准
- **B.** S3 Intelligent-Tiering
  - S3 智能分层
- **C.** S3 Glacier Flexible Retrieval
  - S3 Glacier 灵活检索
- **D.** S3 Glacier Deep Archive
  - S3 Glacier 深度存档

**正确答案 / Answer: `C`**

S3 Glacier Flexible Retrieval is the best choice for this scenario because it balances cost-effectiveness with relatively fast retrieval times (within hours). This makes it ideal for rarely accessed data that must be retained for compliance purposes but may occasionally need to be retrieved quickly. Other options either do not meet the cost or retrieval time requirements.

S3 Glacier 灵活检索是这种场景的最佳选择，因为它平衡了成本效益和相对较快的检索时间（数小时内）。这使得它非常适合那些很少访问的数据，这些数据必须出于合规性目的而保留，但有时可能需要快速检索。其他选项要么不满足成本或检索时间要求。

---

## Question 424  `Single answer`

**EN** An e-commerce company needs to store large amounts of customer transaction logs for compliance purposes. These logs are rarely accessed but must be retained for 10 years. The company wants to minimize storage costs while ensuring that the data remains accessible when needed. Which Amazon S3 storage class should the company use?

**中** 出于合规性目的，电子商务公司需要存储大量客户交易日志。这些日志很少被访问，但必须保留 10 年。该公司希望最大限度地降低存储成本，同时确保数据在需要时仍可访问。公司应该使用哪种 Amazon S3 存储类？

- **A.** S3 Standard
  - S3 标准
- **B.** S3 Intelligent-Tiering
  - S3 智能分层
- **C.** S3 Glacier Flexible Retrieval
  - S3 Glacier 灵活检索
- **D.** S3 One Zone-IA
  - S3 一区-IA

**正确答案 / Answer: `C`**

The scenario requires a storage class optimized for long-term retention of rarely accessed data at the lowest possible cost. S3 Glacier Flexible Retrieval is purpose-built for such use cases, providing low-cost storage for archival data while ensuring durability and accessibility when needed. Other options like S3 Standard and S3 Intelligent-Tiering are costlier and more suited for different use cases, while S3 One Zone-IA lacks the durability required for compliance purposes.

该场景需要一种经过优化的存储类，以便以尽可能低的成本长期保留很少访问的数据。 S3 Glacier 灵活检索专为此类用例而设计，为归档数据提供低成本存储，同时确保需要时的耐用性和可访问性。 S3 标准和 S3 智能分层等其他选项成本更高，更适合不同的用例，而 S3 One Zone-IA 缺乏合规性所需的耐用性。

---

## Question 425  `Single answer`

**EN** A company is building a new application that requires a scalable, durable, and cost-effective storage solution for storing log files. The logs need to be accessed occasionally for analysis but are not frequently modified. Which AWS storage service is the most suitable for this use case?

**中** 一家公司正在构建一个新应用程序，需要一个可扩展、耐用且经济高效的存储解决方案来存储日志文件。日志需要偶尔访问进行分析，但不经常修改。哪种 AWS 存储服务最适合此用例？

- **A.** Amazon S3
  - Amazon S3
- **B.** Amazon EBS
  - Amazon EBS
- **C.** Amazon EFS
  - Amazon EFS
- **D.** AWS Snowball
  - AWS Snowball

**正确答案 / Answer: `A`**

Amazon S3 is the best choice for this scenario because it is designed for object storage, which is ideal for storing unstructured data such as log files. It offers high durability, scalability, and cost-effectiveness, making it a perfect fit for this use case. Other options like Amazon EBS and Amazon EFS are better suited for different types of workloads, while AWS Snowball is not a storage service.

Amazon S3 是这种场景的最佳选择，因为它是为对象存储而设计的，非常适合存储日志文件等非结构化数据。它具有高耐用性、可扩展性和成本效益，非常适合此用例。其他选项（例如 Amazon EBS 和 Amazon EFS）更适合不同类型的工作负载，而 AWS Snowball 不是存储服务。

---

## Question 426  `Select 1`

**EN** A company is designing a new application that requires high-performance storage for a database, shared access to files from multiple instances, and a scalable solution for storing backups and logs. Which combination of storage types should the company use to meet these requirements?

**中** 一家公司正在设计一种新应用程序，该应用程序需要高性能的数据库存储、对多个实例的文件的共享访问以及用于存储备份和日志的可扩展解决方案。公司应该使用哪种存储类型组合来满足这些要求？

- **A.** Amazon S3 for backups and logs, Amazon EBS for the database, Amazon EFS for shared file access
  - Amazon S3 用于备份和日志，Amazon EBS 用于数据库，Amazon EFS 用于共享文件访问
- **B.** Amazon EFS for backups and logs, Amazon EBS for the database, Amazon FSx for shared file access
  - Amazon EFS 用于备份和日志，Amazon EBS 用于数据库，Amazon FSx 用于共享文件访问
- **C.** Amazon S3 for backups and logs, Amazon FSx for the database, Amazon EFS for shared file access
  - Amazon S3 用于备份和日志，Amazon FSx 用于数据库，Amazon EFS 用于共享文件访问
- **D.** Amazon S3 for backups and logs, Amazon EBS for the database, Amazon FSx for shared file access
  - Amazon S3 用于备份和日志，Amazon EBS 用于数据库，Amazon FSx 用于共享文件访问
- **E.** Amazon Glacier for backups and logs, Amazon EBS for the database, Amazon EFS for shared file access
  - Amazon Glacier 用于备份和日志，Amazon EBS 用于数据库，Amazon EFS 用于共享文件访问

**正确答案 / Answer: `A`**

The correct combination of storage types addresses the specific requirements of the application. Amazon S3 offers scalable object storage for backups and logs. Amazon EBS provides high-performance block storage for the database. Amazon EFS is ideal for shared file access, as it is a managed file system accessible from multiple instances. This combination ensures the application meets its performance, scalability, and accessibility needs.

存储类型的正确组合可以满足应用程序的特定要求。 Amazon S3 为备份和日志提供可扩展的对象存储。 Amazon EBS 为数据库提供高性能的块存储。 Amazon EFS 非常适合共享文件访问，因为它是可从多个实例访问的托管文件系统。这种组合可确保应用程序满足其性能、可扩展性和可访问性需求。

---

## Question 427  `Single answer`

**EN** A company is building a data lake to store large volumes of unstructured data, such as images and videos. The data must be highly durable, and there is a need for scalable storage that can handle high throughput. Which AWS storage type is the most appropriate for this use case?

**中** 一家公司正在构建一个数据湖来存储大量非结构化数据，例如图像和视频。数据必须高度耐用，并且需要能够处理高吞吐量的可扩展存储。哪种 AWS 存储类型最适合此用例？

- **A.** Amazon S3 (Object Storage)
  - Amazon S3（对象存储）
- **B.** Amazon EBS (Block Storage)
  - Amazon EBS（块存储）
- **C.** Amazon EFS (File Storage)
  - Amazon EFS（文件存储）
- **D.** AWS Snowball Edge (Edge Storage)
  - AWS Snowball 边缘（边缘存储）

**正确答案 / Answer: `A`**

Amazon S3 is the most appropriate choice for this use case because it is an object storage service designed to handle unstructured data at scale. It offers high durability, scalability, and supports high throughput, all of which are essential for building a data lake. In contrast, Amazon EBS and Amazon EFS are designed for different use cases, and AWS Snowball Edge is not an online storage solution.

Amazon S3 是此用例的最合适选择，因为它是一种对象存储服务，旨在大规模处理非结构化数据。它提供高耐用性、可扩展性并支持高吞吐量，所有这些对于构建数据湖都是至关重要的。相比之下，Amazon EBS 和 Amazon EFS 是针对不同的用例而设计的，而 AWS Snowball Edge 不是在线存储解决方案。

---

## Question 428  `Select 2`

**EN** A company is designing a new cloud-based application that requires high-speed, low-latency access to data for its database system. The application will also need to store large amounts of unstructured data, such as images and videos, for long-term access. Which combination of storage solutions should the company use to meet these requirements?

**中** 一家公司正在设计一种新的基于云的应用程序，需要对其数据库系统的数据进行高速、低延迟的访问。该应用程序还需要存储大量非结构化数据，例如图像和视频，以供长期访问。公司应该使用哪种存储解决方案组合来满足这些要求？

- **A.** Amazon EBS for the database and Amazon S3 for storing unstructured data
  - Amazon EBS 用于数据库，Amazon S3 用于存储非结构化数据
- **B.** Amazon EFS for the database and Amazon S3 for storing unstructured data
  - Amazon EFS 用于数据库，Amazon S3 用于存储非结构化数据
- **C.** Amazon S3 for the database and Amazon Glacier for storing unstructured data
  - Amazon S3 用于数据库，Amazon Glacier 用于存储非结构化数据
- **D.** Amazon EBS for the database and Amazon Glacier for storing unstructured data
  - Amazon EBS 用于数据库，Amazon Glacier 用于存储非结构化数据
- **E.** Amazon EFS for the database and Amazon EBS for storing unstructured data
  - Amazon EFS 用于数据库，Amazon EBS 用于存储非结构化数据

**正确答案 / Answer: `A, D`**

To meet the requirements, the company should use Amazon EBS for the database as it provides high-speed, low-latency block storage suitable for database workloads. For storing large amounts of unstructured data like images and videos, Amazon S3 is an ideal choice due to its scalability, durability, and cost-effectiveness. Amazon Glacier can also be used for archiving unstructured data that is infrequently accessed. Using the right storage types ensures performance, durability, and cost optimization.

为了满足要求，公司应该使用 Amazon EBS 作为数据库，因为它提供适合数据库工作负载的高速、低延迟块存储。对于存储图像和视频等大量非结构化数据，Amazon S3 因其可扩展性、耐用性和成本效益而成为理想选择。 Amazon Glacier 还可用于归档不经常访问的非结构化数据。使用正确的存储类型可确保性能、耐用性和成本优化。

---

## Question 429  `Single answer`

**EN** A company runs a web application that experiences unpredictable spikes in traffic. The application is currently hosted on an On-Demand Amazon EC2 instance, but the company is looking for a more cost-optimized compute solution while maintaining performance during traffic spikes. What should the Solutions Architect recommend?

**中** 一家公司运行的 Web 应用程序会遇到不可预测的流量峰值。该应用程序目前托管在按需 Amazon EC2 实例上，但该公司正在寻找成本更加优化的计算解决方案，同时在流量高峰期间保持性能。解决方案架构师应该推荐什么？

- **A.** Use Amazon EC2 Spot Instances to handle the web application traffic.
  - 使用 Amazon EC2 Spot 实例来处理 Web 应用程序流量。
- **B.** Migrate the application to AWS Lambda and use Amazon API Gateway to handle requests.
  - 将应用程序迁移到 AWS Lambda 并使用 Amazon API Gateway 来处理请求。
- **C.** Use EC2 Auto Scaling with a mix of On-Demand and Spot Instances.
  - 将 EC2 Auto Scaling 与按需实例和 Spot 实例混合使用。
- **D.** Switch to a Reserved Instance for the application.
  - 切换到应用程序的预留实例。

**正确答案 / Answer: `C`**

The correct answer is to use EC2 Auto Scaling with a mix of On-Demand and Spot Instances. This approach allows the application to dynamically scale to handle traffic spikes while optimizing costs by utilizing Spot Instances for non-critical tasks and On-Demand Instances for critical, stable workloads. This balances cost and performance, which is ideal for the given scenario.

正确的答案是将 EC2 Auto Scaling 与按需实例和 Spot 实例混合使用。这种方法允许应用程序动态扩展以处理流量峰值，同时通过将 Spot 实例用于非关键任务并使用按需实例来处理关键、稳定的工作负载来优化成本。这平衡了成本和性能，这对于给定场景来说是理想的。

---

## Question 430  `Single answer`

**EN** A startup is building a web application that experiences variable traffic patterns. During peak hours, the application requires additional compute resources, but during off-peak hours, the usage drops significantly. The company wants to minimize costs while ensuring the application is highly available and can scale automatically with demand. Which compute solution should the startup use?

**中** 一家初创公司正在构建一个经历可变流量模式的 Web 应用程序。在高峰时段，应用程序需要额外的计算资源，但在非高峰时段，使用量会大幅下降。该公司希望最大限度地降低成本，同时确保应用程序具有高可用性，并且可以根据需求自动扩展。初创公司应该使用哪种计算解决方案？

- **A.** Launch On-Demand EC2 instances with Auto Scaling enabled.
  - 启动启用 Auto Scaling 的按需 EC2 实例。
- **B.** Use EC2 Spot Instances with Auto Scaling enabled.
  - 使用启用了 Auto Scaling 的 EC2 Spot 实例。
- **C.** Deploy the application on AWS Elastic Beanstalk with an EC2 Auto Scaling group using Reserved Instances.
  - 使用预留实例通过 EC2 Auto Scaling 组在 AWS Elastic Beanstalk 上部署应用程序。
- **D.** Use AWS Fargate with an Application Load Balancer for the application.
  - 将 AWS Fargate 与 Application Load Balancer 结合使用用于该应用。

**正确答案 / Answer: `B`**

EC2 Spot Instances with Auto Scaling enabled provide the best balance of cost optimization and the ability to scale with variable traffic. Spot Instances are ideal for fault-tolerant workloads and can significantly reduce costs compared to On-Demand Instances. Auto Scaling ensures that the application can handle peak traffic while minimizing resource usage during off-peak periods.

启用 Auto Scaling 的 EC2 Spot 实例可在成本优化和可变流量扩展能力之间实现最佳平衡。 Spot 实例非常适合容错工作负载，与按需实例相比可以显着降低成本。 Auto Scaling 可确保应用程序能够处理高峰流量，同时最大限度地减少非高峰期间的资源使用。

---

## Question 431  `Single answer`

**EN** A company runs a web application that experiences unpredictable traffic patterns. During peak times, the application requires additional compute capacity to handle the load, but during off-peak hours, the compute usage drops significantly. The company wants to optimize costs while ensuring the application remains highly available and can scale automatically. Which solution best meets these requirements?

**中** 一家公司运行的 Web 应用程序会遇到不可预测的流量模式。在高峰时段，应用程序需要额外的计算能力来处理负载，但在非高峰时段，计算使用量会显着下降。该公司希望优化成本，同时确保应用程序保持高可用性并可以自动扩展。哪种解决方案最能满足这些要求？

- **A.** Use On-Demand Instances for all compute needs to ensure flexibility and high availability.
  - 使用按需实例来满足所有计算需求，以确保灵活性和高可用性。
- **B.** Use Reserved Instances for all compute needs to reduce costs.
  - 使用预留实例来满足所有计算需求以降低成本。
- **C.** Use a combination of On-Demand Instances and Spot Instances with an Auto Scaling group to handle traffic changes.
  - 将按需实例和 Spot 实例与 Auto Scaling 组结合使用来处理流量变化。
- **D.** Use a combination of Reserved Instances and Dedicated Hosts for predictable performance.
  - 结合使用预留实例和专用主机来实现可预测的性能。

**正确答案 / Answer: `C`**

The combination of On-Demand Instances and Spot Instances with an Auto Scaling group is the most cost-optimized solution for handling unpredictable traffic patterns. Spot Instances provide significant cost savings, while On-Demand Instances ensure the application remains highly available. The Auto Scaling group dynamically adjusts the number of instances based on traffic, ensuring efficient use of resources.

按需实例和 Spot 实例与 Auto Scaling 组的组合是处理不可预测的流量模式的成本最优化的解决方案。竞价型实例可显着节省成本，而按需实例可确保应用程序保持高可用性。 Auto Scaling 组根据流量动态调整实例数量，保证资源的高效利用。

---

## Question 432  `Single answer`

**EN** A startup is running a web application on Amazon EC2 instances. The application has variable traffic patterns, with high traffic during the day and minimal usage at night. Cost optimization is a top priority for the startup. Which compute solution should you recommend?

**中** 一家初创公司正在 Amazon EC2 实例上运行 Web 应用程序。该应用程序具有可变的流量模式，白天流量较高，夜间使用量最少。成本优化是初创公司的首要任务。您应该推荐哪种计算解决方案？

- **A.** Use On-Demand instances for all application traffic.
  - 对所有应用程序流量使用按需实例。
- **B.** Use Reserved Instances for all application traffic.
  - 对所有应用程序流量使用预留实例。
- **C.** Use Spot Instances for all application traffic.
  - 对所有应用程序流量使用 Spot 实例。
- **D.** Use Auto Scaling with a mix of On-Demand and Spot Instances.
  - 将 Auto Scaling 与按需实例和 Spot 实例混合使用。

**正确答案 / Answer: `D`**

The best solution for the startup is to use Auto Scaling with a mix of On-Demand and Spot Instances. Auto Scaling dynamically adjusts the number of running instances based on traffic, ensuring cost efficiency during low-usage periods. Spot Instances provide significant cost savings for non-critical workloads, while On-Demand Instances ensure reliability for critical components. This approach balances cost optimization with application reliability.

初创公司的最佳解决方案是将 Auto Scaling 与按需实例和 Spot 实例结合使用。 Auto Scaling 根据流量动态调整运行实例数量，确保低使用率期间的成本效率。竞价型实例可以为非关键工作负载显着节省成本，而按需实例则可以确保关键组件的可靠性。这种方法平衡了成本优化和应用程序可靠性。

---

## Question 433  `Select 3`

**EN** A company is running a critical web application on Amazon EC2 instances behind an Elastic Load Balancer (ELB). The application stores user-uploaded files in an Amazon S3 bucket and uses Amazon RDS for its database. The company has recently experienced a regional outage, and they want to ensure that the application is highly available and can withstand regional failures in the future. What is the best solution to achieve this?

**中** 一家公司正在 Elastic Load Balancer (ELB) 后面的 Amazon EC2 实例上运行关键 Web 应用程序。该应用程序将用户上传的文件存储在 Amazon S3 存储桶中，并使用 Amazon RDS 作为其数据库。该公司最近经历了区域性中断，他们希望确保应用程序具有高可用性，并且能够承受未来的区域性故障。实现这一目标的最佳解决方案是什么？

- **A.** Set up an Auto Scaling group for EC2 instances across multiple Availability Zones within the same region.
  - 为同一区域内多个可用区的 EC2 实例设置 Auto Scaling 组。
- **B.** Enable cross-region replication for the Amazon S3 bucket to replicate data to another region.
  - 为 Amazon S3 存储桶启用跨区域复制，将数据复制到另一个区域。
- **C.** Deploy the application in a separate region and configure Route 53 with a failover routing policy.
  - 在单独的区域中部署应用程序，并使用故障转移路由策略配置 Route 53。
- **D.** Enable Multi-AZ deployments for the Amazon RDS database.
  - 为 Amazon RDS 数据库启用多可用区部署。
- **E.** Configure the Elastic Load Balancer to span multiple regions.
  - 配置 Elastic Load Balancer 跨越多个区域。

**正确答案 / Answer: `B, C, D`**

To ensure high availability across regions, the solution must address both data replication and failover mechanisms. Cross-region replication for Amazon S3 ensures that data is available in another region, while deploying the application in a separate region and configuring Route 53 with a failover routing policy provides the ability to switch traffic to the secondary region during a regional failure. Enabling Multi-AZ for Amazon RDS ensures high availability within a region and is essential for minimizing downtime during localized failures.

为了确保跨区域的高可用性，解决方案必须解决数据复制和故障转移机制。 Amazon S3 的跨区域复制可确保数据在另一个区域中可用，同时在单独的区域中部署应用程序并使用故障转移路由策略配置 Route 53，从而能够在区域故障期间将流量切换到辅助区域。为 Amazon RDS 启用多可用区可确保区域内的高可用性，对于最大限度地减少局部故障期间的停机时间至关重要。

---

## Question 434  `Single answer`

**EN** A company is running a highly available web application in a VPC. The application is hosted on Amazon EC2 instances behind an Application Load Balancer (ALB) and uses an Amazon RDS database for persistence. The company wants to ensure that the database is highly available and can automatically failover in case of an instance failure. Which solution meets these requirements?

**中** 一家公司正在 VPC 中运行高度可用的 Web 应用程序。该应用程序托管在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上，并使用 Amazon RDS 数据库进行持久化。该公司希望确保数据库具有高可用性，并且能够在实例发生故障时自动进行故障转移。哪种解决方案满足这些要求？

- **A.** Use a Multi-AZ deployment for the Amazon RDS database.
  - 对 Amazon RDS 数据库使用多可用区部署。
- **B.** Deploy the database on Amazon EC2 instances with replication configured between instances.
  - 在 Amazon EC2 实例上部署数据库，并在实例之间配置复制。
- **C.** Use Amazon RDS Read Replicas to provide high availability.
  - 使用 Amazon RDS 只读副本来提供高可用性。
- **D.** Configure the database in a single Availability Zone and back it up using AWS Backup.
  - 在单个可用区中配置数据库并使用 AWS Backup 进行备份。

**正确答案 / Answer: `A`**

The best way to ensure high availability and automatic failover for an Amazon RDS database is to use a Multi-AZ deployment. This setup replicates the database to a standby instance in another Availability Zone and provides automatic failover capabilities. Other options, such as using read replicas or EC2-based databases, do not meet the high availability and failover requirements as effectively.

确保 Amazon RDS 数据库高可用性和自动故障转移的最佳方法是使用多可用区部署。此设置将数据库复制到另一个可用区中的备用实例，并提供自动故障转移功能。其他选项（例如使用只读副本或基于 EC2 的数据库）无法有效满足高可用性和故障转移要求。

---

## Question 435  `Single answer`

**EN** An e-commerce company is hosting its web application on Amazon EC2 instances and stores product images in an Amazon S3 bucket. The company wants to ensure that the images are only accessible through the web application and not directly via the S3 bucket URL. How can you achieve this requirement?

**中** 一家电子商务公司在 Amazon EC2 实例上托管其 Web 应用程序，并将产品图像存储在 Amazon S3 存储桶中。该公司希望确保只能通过 Web 应用程序访问图像，而不是直接通过 S3 存储桶 URL 访问。如何才能达到这个要求呢？

- **A.** Use an S3 bucket policy to allow access only from the web application's public IP address.
  - 使用 S3 存储桶策略仅允许从 Web 应用程序的公共 IP 地址进行访问。
- **B.** Enable server-side encryption on the S3 bucket to restrict direct access.
  - 在 S3 存储桶上启用服务器端加密以限制直接访问。
- **C.** Use an S3 bucket policy that denies all public access and allows access only through an Amazon CloudFront origin access control.
  - 使用拒绝所有公共访问并仅允许通过 Amazon CloudFront 源访问控制进行访问的 S3 存储桶策略。
- **D.** Configure Amazon S3 Transfer Acceleration to restrict direct access to the S3 bucket.
  - 配置 Amazon S3 传输加速以限制对 S3 存储桶的直接访问。

**正确答案 / Answer: `C`**

To restrict direct access to an S3 bucket while still allowing access through a web application, you can use Amazon CloudFront with an origin access control (OAC) or origin access identity (OAI). This setup ensures that the S3 bucket is only accessible through CloudFront, and direct access to the bucket URL is denied using an S3 bucket policy. This method is secure and follows best practices for content delivery in AWS.

要限制对 S3 存储桶的直接访问，同时仍允许通过 Web 应用程序进行访问，您可以将 Amazon CloudFront 与源访问控制 (OAC) 或源访问身份 (OAI) 结合使用。此设置可确保只能通过 CloudFront 访问 S3 存储桶，并且使用 S3 存储桶策略拒绝直接访问存储桶 URL。此方法非常安全，并且遵循 AWS 中内容交付的最佳实践。

---

## Question 436  `Single answer`

**EN** A company is running a web application on Amazon EC2 instances behind an Application Load Balancer (ALB). The application stores user-uploaded images in Amazon S3. The company wants to ensure that only the ALB can access the S3 bucket to retrieve the images. How can this be achieved?

**中** 一家公司正在 Application Load Balancer (ALB) 后面的 Amazon EC2 实例上运行 Web 应用程序。该应用程序将用户上传的图像存储在 Amazon S3 中。该公司希望确保只有 ALB 可以访问 S3 存储桶来检索图像。如何才能实现这一目标？

- **A.** Create an S3 bucket policy that allows access only from the ALB's security group.
  - 创建仅允许从 ALB 的安全组进行访问的 S3 存储桶策略。
- **B.** Create an S3 bucket policy that restricts access based on the ALB's IP address.
  - 创建一个 S3 存储桶策略，根据 ALB 的 IP 地址限制访问。
- **C.** Create an S3 bucket policy that allows access only from the ALB's AWS Service Principal.
  - 创建仅允许从 ALB 的 AWS 服务主体进行访问的 S3 存储桶策略。
- **D.** Create an S3 bucket policy that allows access based on the ALB's VPC endpoint.
  - 创建允许基于 ALB 的 VPC 终端节点进行访问的 S3 存储桶策略。

**正确答案 / Answer: `C`**

To restrict access to an S3 bucket so that only an ALB can access it, a bucket policy must be configured to allow access from the ALB's AWS Service Principal. This ensures that requests are validated as coming from the ALB, providing a secure mechanism to control access. Other methods, like using security groups or IP addresses, are not supported or practical for this use case.

要限制对 S3 存储桶的访问，以便只有 ALB 可以访问它，必须将存储桶策略配置为允许来自 ALB 的 AWS 服务主体的访问。这可确保请求被验证为来自 ALB，从而提供安全机制来控制访问。此用例不支持或不实用其他方法，例如使用安全组或 IP 地址。

---

## Question 437  `Select 2`

**EN** A company uses AWS Organizations to manage multiple AWS accounts. They want to allocate costs for specific projects across accounts and generate detailed billing reports for each project. Which combination of AWS features should they use to achieve this?

**中** 某公司使用 AWS Organizations 管理多个 AWS 账户。他们希望跨账户分配特定项目的成本，并为每个项目生成详细的计费报告。他们应该使用哪种 AWS 功能组合来实现这一目标？

- **A.** Enable and use Cost Allocation Tags to assign project-specific tags to resources.
  - 启用并使用成本分配标签将项目特定的标签分配给资源。
- **B.** Use AWS Cost Explorer to create custom dashboards for project-based cost analysis.
  - 使用 AWS Cost Explorer 创建自定义仪表板以进行基于项目的成本分析。
- **C.** Enable Consolidated Billing in AWS Organizations to manage costs across all accounts.
  - 在 AWS Organizations 中启用合并计费以管理所有帐户的成本。
- **D.** Use Reserved Instance Sharing to allocate costs for reserved resources across accounts.
  - 使用预留实例共享来跨账户分配预留资源的成本。
- **E.** Activate the AWS Budgets feature to automatically allocate costs to specific projects.
  - 激活 AWS 预算功能以自动将成本分配到特定项目。

**正确答案 / Answer: `A, C`**

To allocate costs for projects across multiple accounts, you need both Cost Allocation Tags and Consolidated Billing. Cost Allocation Tags allow you to tag resources with project-specific metadata, while Consolidated Billing provides a unified view of costs across accounts managed in AWS Organizations, enabling efficient cost tracking and reporting for specific projects.

要跨多个账户分配项目成本，您需要成本分配标签和合并账单。成本分配标签允许您使用特定于项目的元数据来标记资源，而整合计费提供了 AWS Organizations 中管理的各个帐户的统一成本视图，从而实现了特定项目的高效成本跟踪和报告。

---

## Question 438  `Select 4`

**EN** A company uses AWS Organizations to manage multiple AWS accounts. They want to allocate costs to different teams within the organization and ensure each team has visibility into its spending. Which combination of AWS cost management features should they use?

**中** 某公司使用 AWS Organizations 管理多个 AWS 账户。他们希望将成本分配给组织内的不同团队，并确保每个团队都能了解其支出。他们应该使用哪种 AWS 成本管理功能组合？

- **A.** Enable cost allocation tags to categorize resources by team and track their costs.
  - 启用成本分配标签以按团队对资源进行分类并跟踪其成本。
- **B.** Use multi-account consolidated billing to manage costs across all accounts.
  - 使用多帐户合并计费来管理所有帐户的成本。
- **C.** Create a Resource Access Manager (RAM) share to allocate costs to specific teams.
  - 创建资源访问管理器 (RAM) 共享以将成本分配给特定团队。
- **D.** Set up AWS Budgets to monitor spending and notify teams when they approach their budget limits.
  - 设置 AWS 预算来监控支出并在团队接近预算限额时通知团队。
- **E.** Activate the AWS Cost and Usage Report (CUR) to analyze detailed cost and usage data.
  - 激活 AWS 成本和使用情况报告 (CUR) 以分析详细的成本和使用情况数据。

**正确答案 / Answer: `A, B, D, E`**

To ensure proper cost allocation and visibility for each team, the company should: 1) enable cost allocation tags to categorize resources, 2) use multi-account consolidated billing to manage costs across accounts, 3) set up AWS Budgets to monitor and control spending, and 4) activate the AWS Cost and Usage Report (CUR) to analyze detailed cost and usage data. AWS Resource Access Manager (RAM) is unrelated to cost management and does not help in this scenario.

为了确保每个团队正确的成本分配和可见性，公司应该：1) 启用成本分配标签来对资源进行分类，2) 使用多账户合并计费来管理跨账户的成本，3) 设置 AWS 预算来监控和控制支出，4) 激活 AWS 成本和使用情况报告 (CUR) 来分析详细的成本和使用情况数据。 AWS Resource Access Manager (RAM) 与成本管理无关，在这种情况下没有帮助。

---

## Question 439  `Select 3`

**EN** A company has a multi-account setup in AWS Organizations and wants to track the costs incurred by each department within the organization. They also want to allocate costs for shared services, such as a central logging system, to the respective departments. Which combination of AWS features can help the company achieve this goal?

**中** 一家公司在 AWS Organizations 中设置了多账户，并希望跟踪组织内每个部门产生的成本。他们还希望将共享服务（例如中央日志记录系统）的成本分配给各个部门。哪种 AWS 功能组合可以帮助公司实现这一目标？

- **A.** Enable cost allocation tags and set up tag-based cost reports in AWS Cost Explorer.
  - 在 AWS Cost Explorer 中启用成本分配标签并设置基于标签的成本报告。
- **B.** Use AWS Budgets to automatically split shared costs across accounts.
  - 使用 AWS Budgets 自动分摊跨账户的共享成本。
- **C.** Enable consolidated billing in AWS Organizations to combine usage and get a single bill for all accounts.
  - 在 AWS Organizations 中启用合并计费，以合并使用情况并为所有帐户获取单一账单。
- **D.** Create linked accounts for each department in AWS Organizations and track costs at the linked account level.
  - 为 AWS Organizations 中的每个部门创建链接帐户，并在链接帐户级别跟踪成本。
- **E.** Use the AWS Pricing Calculator to estimate costs and allocate shared services accordingly.
  - 使用 AWS 定价计算器来估算成本并相应地分配共享服务。

**正确答案 / Answer: `A, C, D`**

To track costs for each department and allocate shared service costs effectively, the company should enable cost allocation tags to categorize resources, use consolidated billing to combine account usage into a single bill, and create linked accounts for each department to track costs at a detailed level. These features work together to provide comprehensive cost management and allocation capabilities.

为了跟踪每个部门的成本并有效地分配共享服务成本，公司应该启用成本分配标签来对资源进行分类，使用合并计费将帐户使用情况合并到单个账单中，并为每个部门创建链接帐户以详细跟踪成本。这些功能共同提供全面的成本管理和分配功能。

---

## Question 440  `Select 3`

**EN** A company uses multiple AWS accounts for different departments and wants to accurately assign costs to each department for better financial management. They also want to generate detailed cost reports and ensure costs are allocated correctly based on usage. Which combination of AWS cost management features should they use?

**中** 一家公司为不同部门使用多个 AWS 账户，并希望准确地将成本分配给每个部门以实现更好的财务管理。他们还希望生成详细的成本报告并确保根据使用情况正确分配成本。他们应该使用哪种 AWS 成本管理功能组合？

- **A.** Enable cost allocation tags and tag resources appropriately
  - 适当启用成本分配标签并标记资源
- **B.** Set up an AWS Budgets report for each department
  - 为每个部门设置 AWS 预算报告
- **C.** Use consolidated billing in AWS Organizations to manage accounts
  - 使用 AWS Organizations 中的合并计费来管理帐户
- **D.** Create a Savings Plan to reduce costs across all accounts
  - 创建储蓄计划以降低所有账户的成本
- **E.** Use the Cost Explorer to filter costs by tags and generate reports
  - 使用 Cost Explorer 按标签过滤成本并生成报告

**正确答案 / Answer: `A, C, E`**

To accurately assign costs to departments and generate detailed reports, the company should use cost allocation tags to categorize resources, consolidated billing in AWS Organizations to manage accounts centrally, and the Cost Explorer to filter and analyze costs by tags. These features work together to provide a clear and detailed view of departmental costs.

为了准确地将成本分配到部门并生成详细的报告，公司应该使用成本分配标签对资源进行分类，使用 AWS Organizations 中的合并计费来集中管理帐户，并使用成本浏览器按标签过滤和分析成本。这些功能共同作用，提供部门成本的清晰详细的视图。

---

## Question 441  `Select 3`

**EN** A company wants to monitor and manage its AWS costs effectively. They need a solution to forecast future costs based on historical usage, set alerts for cost thresholds, and analyze detailed cost and usage data. Which combination of AWS cost management tools should they use to meet these requirements?

**中** 一家公司希望有效监控和管理其 AWS 成本。他们需要一种解决方案来根据历史使用情况预测未来成本、设置成本阈值警报以及分析详细的成本和使用数据。他们应该使用哪种 AWS 成本管理工具组合来满足这些要求？

- **A.** AWS Budgets for setting cost threshold alerts
  - 用于设置成本阈值警报的 AWS 预算
- **B.** Cost Explorer for forecasting future costs based on historical usage
  - Cost Explorer 用于根据历史使用情况预测未来成本
- **C.** AWS Cost and Usage Report for analyzing detailed cost and usage data
  - AWS 成本和使用情况报告，用于分析详细的成本和使用情况数据
- **D.** AWS Trusted Advisor for monitoring and managing costs
  - AWS Trusted Advisor 用于监控和管理成本
- **E.** AWS Pricing Calculator for forecasting future costs
  - 用于预测未来成本的 AWS 定价计算器

**正确答案 / Answer: `A, B, C`**

To effectively monitor and manage costs, the company can use AWS Budgets to set cost threshold alerts, Cost Explorer to forecast future costs based on historical data, and AWS Cost and Usage Report for detailed analysis of cost and usage. Each tool addresses a specific aspect of the company's requirements.

为了有效监控和管理成本，公司可以使用 AWS Budgets 设置成本阈值警报，使用 Cost Explorer 根据历史数据预测未来成本，并使用 AWS 成本和使用情况报告详细分析成本和使用情况。每个工具都满足公司需求的特定方面。

---

## Question 442  `Single answer`

**EN** A company wants to manage its AWS costs effectively. They need a tool to analyze historical spend patterns, forecast future costs, and visualize cost trends over time. Which AWS cost management tool should they use?

**中** 一家公司希望有效管理其 AWS 成本。他们需要一种工具来分析历史支出模式、预测未来成本并可视化随时间变化的成本趋势。他们应该使用哪种 AWS 成本管理工具？

- **A.** AWS Budgets
  - AWS 预算
- **B.** AWS Cost Explorer
  - AWS 成本管理器
- **C.** AWS Cost Anomaly Detection
  - AWS 成本异常检测
- **D.** AWS Cost and Usage Report
  - AWS 成本和使用情况报告

**正确答案 / Answer: `B`**

AWS Cost Explorer is the appropriate tool for analyzing historical spending patterns, visualizing cost trends, and forecasting future costs. While other tools like AWS Budgets and AWS Cost and Usage Report can help with cost management, they are not designed for in-depth analysis and forecasting as described in the scenario.

AWS Cost Explorer 是分析历史支出模式、可视化成本趋势和预测未来成本的合适工具。虽然 AWS 预算和 AWS 成本和使用情况报告等其他工具可以帮助进行成本管理，但它们并不是为场景中所述的深入分析和预测而设计的。

---

## Question 443  `Select 2`

**EN** A company wants to monitor and control its AWS costs proactively. The finance team needs to set up alerts when monthly spending exceeds a certain threshold. Additionally, they want to analyze historical cost trends and forecast future costs for better planning. Which combination of AWS cost management tools should they use?

**中** 一家公司希望主动监控和控制其 AWS 成本。当每月支出超过一定阈值时，财务团队需要设置警报。此外，他们希望分析历史成本趋势并预测未来成本，以便更好地规划。他们应该使用哪种 AWS 成本管理工具组合？

- **A.** AWS Budgets to set spending thresholds and receive alerts when limits are breached.
  - AWS 预算用于设置支出阈值并在超出限制时接收警报。
- **B.** AWS Cost Explorer to visualize historical spending and forecast future costs.
  - AWS Cost Explorer 可可视化历史支出并预测未来成本。
- **C.** AWS Cost and Usage Report to generate detailed billing reports for every service.
  - AWS 成本和使用情况报告可为每项服务生成详细的计费报告。
- **D.** AWS Trusted Advisor to optimize costs by providing recommendations on unused or underutilized resources.
  - AWS Trusted Advisor 通过提供有关未使用或未充分利用的资源的建议来优化成本。

**正确答案 / Answer: `A, B`**

To monitor and control AWS costs, the company should use AWS Budgets for setting spending thresholds and receiving alerts, and AWS Cost Explorer for analyzing historical spending and forecasting future costs. These tools complement each other and address the company's requirements of proactive monitoring and cost trend analysis.

为了监控和控制 AWS 成本，公司应使用 AWS Budgets 来设置支出阈值和接收警报，并使用 AWS Cost Explorer 来分析历史支出和预测未来成本。这些工具相辅相成，可满足公司主动监控和成本趋势分析的要求。

---

## Question 444  `Select 2`

**EN** A company wants to monitor and control its AWS cloud spending. The finance team needs a tool to set up monthly cost thresholds for different accounts and receive notifications if spending exceeds these thresholds. Additionally, the team wants to analyze historical spending trends to optimize future budgets. Which combination of AWS cost management tools should they use?

**中** 一家公司希望监控其 AWS 云支出。财务团队需要一个工具来为不同账户设置每月成本阈值，并在支出超过这些阈值时收到通知。此外，该团队希望分析历史支出趋势以优化未来预算。他们应该使用哪种 AWS 成本管理工具组合？

- **A.** AWS Budgets for setting cost thresholds and receiving alerts
  - 用于设置成本阈值和接收警报的 AWS 预算
- **B.** Cost Explorer for analyzing historical spending trends and forecasting future costs
  - Cost Explorer 用于分析历史支出趋势并预测未来成本
- **C.** AWS Cost and Usage Report for setting automated alerts on cost thresholds
  - AWS 成本和使用情况报告，用于设置成本阈值自动警报
- **D.** AWS Trusted Advisor for detailed cost optimization recommendations
  - AWS Trusted Advisor 提供详细的成本优化建议
- **E.** AWS Cost Anomaly Detection for identifying unusual billing patterns
  - AWS 成本异常检测用于识别异常计费模式

**正确答案 / Answer: `A, B`**

To meet the finance team's requirements, AWS Budgets should be used for setting cost thresholds and receiving alerts, while Cost Explorer is ideal for analyzing historical spending trends and forecasting future costs. These tools work together to effectively monitor, control, and optimize AWS cloud spending.

为了满足财务团队的要求，应使用 AWS Budgets 设置成本阈值和接收警报，而 Cost Explorer 非常适合分析历史支出趋势和预测未来成本。这些工具协同工作，可以有效监控、控制和优化 AWS 云支出。

---

## Question 445  `Select 2`

**EN** Your company is planning to deploy a highly available web application on AWS. The application must run in multiple locations to ensure low latency for global users and should remain operational even if an entire data center fails. Which AWS infrastructure components should you use to meet these requirements?

**中** 您的公司计划在 AWS 上部署高度可用的 Web 应用程序。该应用程序必须在多个位置运行，以确保全球用户的低延迟，并且即使整个数据中心发生故障也应保持运行。您应该使用哪些 AWS 基础设施组件来满足这些要求？

- **A.** Deploy the application across multiple Availability Zones within a single AWS Region
  - 跨单个 AWS 区域内的多个可用区部署应用程序
- **B.** Deploy the application across multiple AWS Regions
  - 跨多个 AWS 区域部署应用程序
- **C.** Deploy the application in a single Availability Zone for cost efficiency
  - 将应用程序部署在单个可用区中以提高成本效率
- **D.** Use Amazon CloudFront to cache content at edge locations
  - 使用 Amazon CloudFront 在边缘位置缓存内容
- **E.** Use a single AWS Region with a backup in an on-premises data center
  - 使用单个 AWS 区域并在本地数据中心进行备份

**正确答案 / Answer: `A, B`**

To meet the requirements of high availability and low latency for global users, you need to deploy the application across multiple Availability Zones within a Region and across multiple AWS Regions. This architecture ensures resilience against both data center and regional failures while providing a better experience for users worldwide.

为了满足全球用户高可用性和低延迟的需求，您需要跨区域内的多个可用区以及跨多个 AWS 区域部署应用程序。该架构可确保针对数据中心和区域故障的恢复能力，同时为全球用户提供更好的体验。

---

## Question 446  `Select 3`

**EN** You are designing a highly available web application hosted on AWS. The application must handle unpredictable traffic spikes and ensure low latency for users across multiple geographic locations. Which of the following design choices will best meet these requirements?

**中** 您正在设计一个托管在 AWS 上的高度可用的 Web 应用程序。应用程序必须处理不可预测的流量峰值，并确保跨多个地理位置的用户的低延迟。以下哪种设计选择最能满足这些要求？

- **A.** Deploy the application across multiple Availability Zones within a single AWS Region.
  - 跨单个 AWS 区域内的多个可用区部署应用程序。
- **B.** Distribute the application across multiple AWS Regions and use Route 53 for routing traffic based on latency.
  - 跨多个 AWS 区域分发应用程序，并使用 Route 53 根据延迟路由流量。
- **C.** Deploy the application in a single Availability Zone with an Auto Scaling group configured for high availability.
  - 将应用程序部署在单个可用区中，并配置 Auto Scaling 组以实现高可用性。
- **D.** Use CloudFront to cache content at AWS Edge locations to reduce latency for users worldwide.
  - 使用 CloudFront 在 AWS 边缘站点缓存内容，以减少全球用户的延迟。
- **E.** Deploy the application across multiple AWS Regions but use Elastic Load Balancing to distribute traffic only within one Region.
  - 跨多个 AWS 区域部署应用程序，但使用 Elastic Load Balancing 仅在一个区域内分配流量。

**正确答案 / Answer: `A, B, D`**

To handle unpredictable traffic spikes and ensure low latency for a geographically distributed user base, the optimal solution is to deploy your application across multiple AWS Regions, use latency-based routing with Route 53, and leverage CloudFront to cache content at Edge locations worldwide. Deploying across multiple Availability Zones within a single Region is also critical for fault tolerance but does not optimize for global reach. A single Availability Zone or Region-limited design will not meet the requirements for high availability and low latency globally.

为了处理不可预测的流量峰值并确保地理上分散的用户群的低延迟，最佳解决方案是跨多个 AWS 区域部署应用程序，使用基于延迟的 Route 53 路由，并利用 CloudFront 在全球边缘站点缓存内容。在单个区域内跨多个可用区进行部署对于容错也至关重要，但并不能针对全球覆盖范围进行优化。单一可用区或区域限制的设计无法满足全球高可用性和低延迟的要求。

---

## Question 447  `Select 2`

**EN** A company is deploying a global application with users in North America, Europe, and Asia. The application requires low-latency access for users in all regions and must remain highly available even if an entire AWS Region becomes unavailable. Which design approach aligns with these requirements?

**中** 一家公司正在部署一个全球应用程序，用户遍布北美、欧洲和亚洲。该应用程序要求所有区域的用户都能进行低延迟访问，并且即使整个 AWS 区域不可用，也必须保持高可用性。哪种设计方法符合这些要求？

- **A.** Deploy the application across multiple Availability Zones within a single AWS Region to ensure low latency and high availability.
  - 跨单个 AWS 区域内的多个可用区部署应用程序，以确保低延迟和高可用性。
- **B.** Deploy the application in multiple AWS Regions and configure latency-based routing in Amazon Route 53.
  - 在多个 AWS 区域中部署应用程序并在 Amazon Route 53 中配置基于延迟的路由。
- **C.** Deploy the application in a single AWS Region with Amazon CloudFront to cache content globally.
  - 使用 Amazon CloudFront 在单个 AWS 区域中部署应用程序以在全球范围内缓存内容。
- **D.** Deploy the application across multiple AWS Regions and use AWS Global Accelerator to route traffic for optimal performance.
  - 跨多个 AWS 区域部署应用程序并使用 AWS Global Accelerator 路由流量以获得最佳性能。
- **E.** Use a single AWS Region with Multi-AZ deployments and enable AWS Direct Connect for global users.
  - 使用具有多可用区部署的单个 AWS 区域，并为全球用户启用 AWS Direct Connect。

**正确答案 / Answer: `B, D`**

Meeting the requirements of low latency for global users and high availability in the event of a regional failure requires deploying the application in multiple AWS Regions. Latency-based routing in Amazon Route 53 ensures that users are directed to the nearest Region, while AWS Global Accelerator optimizes performance and provides failover capabilities. Deploying in a single Region, even with advanced features like Multi-AZ or CloudFront, does not fully meet the requirements.

要满足全球用户的低延迟要求以及区域故障时的高可用性要求，需要在多个 AWS 区域中部署应用程序。 Amazon Route 53 中基于延迟的路由可确保用户被定向到最近的区域，而 AWS Global Accelerator 则优化性能并提供故障转移功能。在单个区域中部署，即使具有多可用区或 CloudFront 等高级功能，也不能完全满足要求。

---

## Question 448  `Single answer`

**EN** A company is designing a highly available application that will be deployed in AWS. The application must minimize downtime and ensure data redundancy. Which design approach should the company take to achieve this goal?

**中** 一家公司正在设计一个将部署在 AWS 中的高度可用的应用程序。应用程序必须最大限度地减少停机时间并确保数据冗余。公司应该采取哪种设计方法来实现这一目标？

- **A.** Deploy the application in a single Availability Zone within an AWS Region.
  - 将应用程序部署在 AWS 区域内的单个可用区中。
- **B.** Distribute the application across multiple Availability Zones within an AWS Region.
  - 将应用程序分布到 AWS 区域内的多个可用区。
- **C.** Deploy the application in a single AWS Region but across multiple edge locations.
  - 在单个 AWS 区域但跨多个边缘站点部署应用程序。
- **D.** Distribute the application across multiple AWS Regions and Availability Zones.
  - 跨多个 AWS 区域和可用区分发应用程序。

**正确答案 / Answer: `B`**

Deploying an application across multiple Availability Zones within a single AWS Region is a best practice for achieving high availability and fault tolerance. Availability Zones are physically separated data centers within a Region, and they provide low-latency connectivity. By distributing the application across multiple Availability Zones, the company can ensure that even if one Availability Zone fails, the application remains operational.

在单个 AWS 区域内的多个可用区部署应用程序是实现高可用性和容错能力的最佳实践。可用区是区域内物理上分离的数据中心，它们提供低延迟连接。通过将应用程序分布到多个可用区，公司可以确保即使一个可用区发生故障，应用程序仍保持运行。

---

## Question 449  `Single answer`

**EN** A financial services company is running a batch processing workload that is extremely cost-sensitive and can tolerate interruptions. The workload is currently running on On-Demand Instances, but the company wants to reduce costs further. Which AWS purchasing option would be the most cost-effective for this workload?

**中** 一家金融服务公司正在运行批处理工作负载，该工作负载对成本极其敏感并且可以容忍中断。该工作负载目前在按需实例上运行，但该公司希望进一步降低成本。对于此工作负载，哪种 AWS 购买选项最具成本效益？

- **A.** Spot Instances
  - 现货实例
- **B.** Reserved Instances
  - 预留实例
- **C.** Savings Plans
  - 储蓄计划
- **D.** Dedicated Hosts
  - 专用主机

**正确答案 / Answer: `A`**

Spot Instances are ideal for workloads that are flexible with interruptions, like batch processing, and they offer the highest cost savings compared to other purchasing options. Reserved Instances and Savings Plans are more suited for predictable, long-term workloads, and Dedicated Hosts are used for compliance requirements rather than cost optimization.

Spot 实例非常适合能够灵活应对中断的工作负载（例如批处理），并且与其他购买选项相比，它们可以实现最高的成本节省。预留实例和节省计划更适合可预测的长期工作负载，而专用主机则用于满足合规性要求而不是成本优化。

---

## Question 450  `Select 2`

**EN** A company runs a web application on a fleet of Amazon EC2 instances. The application experiences predictable spikes in traffic during the holiday season, and the company wants to minimize costs while ensuring sufficient compute capacity during these high-traffic periods. What is the MOST cost-effective purchasing strategy the company should use?

**中** 一家公司在一组 Amazon EC2 实例上运行 Web 应用程序。该应用程序在假期期间会出现可预测的流量高峰，该公司希望最大限度地降低成本，同时确保在这些高流量期间有足够的计算能力。公司应采用的最具成本效益的采购策略是什么？

- **A.** Purchase Reserved Instances for the baseline traffic and use Spot Instances for the additional capacity during high-traffic periods.
  - 为基准流量购买预留实例，并在高流量期间使用 Spot 实例以获得额外容量。
- **B.** Use On-Demand Instances for the entire workload to handle both baseline and peak traffic.
  - 对整个工作负载使用按需实例来处理基准流量和峰值流量。
- **C.** Purchase Reserved Instances for the baseline traffic and use On-Demand Instances for the additional capacity during high-traffic periods.
  - 为基准流量购买预留实例，并在高流量期间使用按需实例以获得额外容量。
- **D.** Use Savings Plans for all EC2 instances to cover both baseline and peak traffic.
  - 对所有 EC2 实例使用 Savings Plans 以涵盖基准流量和峰值流量。
- **E.** Use Auto Scaling with Spot Instances to handle the entire workload.
  - 将 Auto Scaling 与 Spot 实例结合使用来处理整个工作负载。

**正确答案 / Answer: `A, C`**

To achieve cost optimization, a mix of purchasing options is often the best approach. Reserved Instances are well-suited for predictable baseline workloads because of their cost savings, while On-Demand or Spot Instances provide flexibility for handling spikes in traffic. Spot Instances are highly cost-effective but should only be used for workloads that can tolerate interruptions, making them suitable for additional capacity during spikes. On-Demand Instances, while more expensive, are a reliable option for unpredictable or temporary needs.

为了实现成本优化，混合购买选项通常是最好的方法。预留实例非常适合可预测的基准工作负载，因为它们可以节省成本，而按需实例或 Spot 实例可以灵活地处理流量峰值。 Spot 实例具有很高的成本效益，但只能用于可以容忍中断的工作负载，使其适合在高峰期间提供额外容量。按需实例虽然价格更高，但却是满足不可预测或临时需求的可靠选择。

---

# AWS CLF-C02 练习卷 · 第 01 套

> 50 题 · 中英日对照 · 练习题来源为 MIT 许可的 CloudCertPrep；非 AWS 官方题目。中文和日文为机器翻译。

## Question 1 · Domain 3

**EN** A characteristic of edge locations is that they:

**中** 边缘位置的一个特征是：

**日本語** エッジ ロケーションの特徴は次のとおりです。

- **A.** Host Amazon EC2 instances closer to users
  - 将 Amazon EC2 实例托管在更靠近用户的位置
  - Amazon EC2 インスタンスをユーザーの近くでホストする
- **B.** Help lower latency and improve performance for users
  - 帮助用户降低延迟并提高性能
  - ユーザーの待ち時間を短縮し、パフォーマンスを向上させるのに役立ちます
- **C.** Cache frequently changing data without reaching the origin server
  - 缓存频繁变化的数据，无需到达源服务器
  - オリジンサーバーに到達せずに頻繁に変更されるデータをキャッシュする
- **D.** Refresh data changes daily
  - 每日刷新数据变化
  - 更新データは毎日変更されます

**答案 / Answer: `B`**

Edge locations cache content geographically close to end users, reducing round-trip distance and lowering latency to improve performance for global applications.
Host Amazon EC2 instances closer to users. EC2 instances run in Regions and AZs, not at edge locations. Cache frequently changing data without reaching the origin server. Edge locations cache static or infrequently changing content, not frequently changing data. Refresh data changes daily. Edge locations serve cached content based on TTL settings, not on a fixed daily refresh cycle.

边缘站点在地理位置上缓存靠近最终用户的内容，减少往返距离并降低延迟，从而提高全球应用程序的性能。
将 Amazon EC2 实例托管在更靠近用户的位置。 EC2 实例在区域和可用区中运行，而不是在边缘位置运行。缓存频繁更改的数据，而无需到达源服务器。边缘位置缓存静态或不经常更改的内容，而不是经常更改的数据。每天刷新数据变化。边缘站点根据 TTL 设置而不是固定的每日刷新周期提供缓存内容。

エッジ ロケーションはエンド ユーザーに地理的に近いコンテンツをキャッシュするため、往復距離が短縮され、遅延が短縮され、グローバル アプリケーションのパフォーマンスが向上します。
Amazon EC2 インスタンスをユーザーの近くにホストします。EC2 インスタンスは、エッジ ロケーションではなく、リージョンと AZ で実行されます。オリジンサーバーに到達することなく、頻繁に変更されるデータをキャッシュします。エッジ ロケーションは、頻繁に変更されるデータではなく、静的コンテンツまたは頻繁に変更されないコンテンツをキャッシュします。更新データは毎日変更されます。エッジ ロケーションは、毎日の固定更新サイクルではなく、TTL 設定に基づいてキャッシュされたコンテンツを提供します。

---

## Question 2 · Domain 1

**EN** How can a user protect against AWS service disruptions if a natural disaster affects an entire geographic area?

**中** 如果自然灾害影响整个地理区域，用户如何防止 AWS 服务中断？

**日本語** 自然災害が地理的領域全体に影響を及ぼした場合、ユーザーは AWS サービスの中断からどのように保護できますか?

- **A.** Deploy applications across multiple Availability Zones within an AWS Region
  - 跨 AWS 区域内的多个可用区部署应用程序
  - AWS リージョン内の複数のアベイラビリティーゾーンにアプリケーションをデプロイする
- **B.** Use a hybrid cloud computing deployment model within the geographic area
  - 在地理区域内使用混合云计算部署模型
  - 地理的エリア内でハイブリッド クラウド コンピューティング展開モデルを使用する
- **C.** Deploy applications across multiple AWS Regions
  - 跨多个 AWS 区域部署应用程序
  - 複数の AWS リージョンにアプリケーションをデプロイする
- **D.** Store application artifacts using AWS Artifact and replicate them across multiple AWS Regions
  - 使用 AWS Artifact 存储应用程序工件并跨多个 AWS 区域复制它们
  - AWS Artifact を使用してアプリケーションのアーティファクトを保存し、複数の AWS リージョンにレプリケートする

**答案 / Answer: `C`**

A natural disaster affecting an entire geographic area could take down a whole AWS Region, so deploying across multiple Regions in different geographies ensures the application remains operational even if one Region becomes completely unavailable.
Deploying across multiple Availability Zones within a single Region protects against isolated data center failures but does not provide protection if the entire Region and its surrounding geographic area is affected by a natural disaster. Using a hybrid cloud deployment model within the same geographic area keeps infrastructure in the affected zone, meaning a regional natural disaster would still disrupt both the on-premises and cloud components simultaneously. AWS Artifact is a portal for accessing AWS compliance reports and security documentation, not a storage or replication service, making this option factually incorrect as a disaster recovery strategy.

影响整个地理区域的自然灾害可能会导致整个 AWS 区域瘫痪，因此跨不同地理位置的多个区域进行部署可确保应用程序保持运行，即使一个区域完全不可用。
跨单个区域内的多个可用区进行部署可以防止孤立的数据中心故障，但如果整个区域及其周边地理区域受到自然灾害的影响，则无法提供保护。在同一地理区域内使用混合云部署模型可以将基础设施保留在受影响的区域，这意味着区域性自然灾害仍会同时破坏本地和云组件。 AWS Artifact 是用于访问 AWS 合规性报告和安全文档的门户，而不是存储或复制服务，这使得此选项作为灾难恢复策略实际上是不正确的。

地理的領域全体に影響を与える自然災害により、AWS リージョン全体がダウンする可能性があるため、異なる地域の複数のリージョンにデプロイすると、1 つのリージョンが完全に利用できなくなった場合でも、アプリケーションは確実に動作し続けることができます。
単一リージョン内の複数のアベイラビリティーゾーンにまたがってデプロイすると、孤立したデータセンターの障害からは保護されますが、リージョン全体とその周囲の地理的領域が自然災害の影響を受けた場合は保護されません。同じ地理的エリア内でハイブリッド クラウド デプロイメント モデルを使用すると、インフラストラクチャが影響を受けるゾーン内に維持されます。つまり、地域的な自然災害が発生した場合でも、オンプレミスとクラウドの両方のコンポーネントが同時に中断される可能性があります。AWS Artifact は、AWS コンプライアンス レポートやセキュリティ ドキュメントにアクセスするためのポータルであり、ストレージやレプリケーション サービスではないため、このオプションは災害復旧戦略として事実上間違っています。

---

## Question 3 · Domain 1

**EN** According to best practices, how should an application be designed to run in the AWS Cloud?

**中** 根据最佳实践，应如何设计应用程序以在 AWS 云中运行？

**日本語** ベストプラクティスによれば、AWS クラウドで実行するアプリケーションはどのように設計されるべきですか?

- **A.** Use tightly coupled components
  - 使用紧密耦合的组件
  - 密結合コンポーネントを使用する
- **B.** Use loosely coupled components
  - 使用松散耦合的组件
  - 疎結合コンポーネントを使用する
- **C.** Use monolithic components
  - 使用单体组件
  - モノリシックコンポーネントを使用する
- **D.** Use stateful components
  - 使用有状态组件
  - ステートフルなコンポーネントを使用する

**答案 / Answer: `B`**

Using loosely coupled components means each part of an application can scale, fail, and be updated independently without cascading failures to other components, which is the foundational AWS best practice for building resilient and scalable architectures.
Using tightly coupled components creates direct dependencies between parts of an application so that a failure or change in one component directly affects others, increasing the risk of cascading failures and making the system harder to scale and maintain independently. A monolithic design combines all components into a single unit that is difficult to scale or update independently, which is the opposite of the modular approach AWS recommends. Stateful components store session data locally on a specific instance, which prevents requests from being distributed freely across instances and undermines horizontal scaling and resilience.

使用松散耦合的组件意味着应用程序的每个部分都可以独立扩展、失败和更新，而不会导致其他组件发生级联故障，这是构建弹性和可扩展架构的基本 AWS 最佳实践。
使用紧密耦合的组件会在应用程序的各个部分之间创建直接依赖关系，因此一个组件的故障或更改会直接影响其他组件，从而增加级联故障的风险，并使系统更难以独立扩展和维护。整体设计将所有组件组合成一个单元，很难独立扩展或更新，这与 AWS 推荐的模块化方法相反。有状态组件将会话数据本地存储在特定实例上，这会阻止请求在实例之间自由分发，并破坏水平扩展和弹性。

疎結合コンポーネントを使用すると、アプリケーションの各部分が他のコンポーネントに障害を連鎖させることなく、独立してスケール、障害、および更新できることを意味します。これが、復元力とスケーラブルなアーキテクチャを構築するための AWS の基本的なベストプラクティスです。
緊密に結合されたコンポーネントを使用すると、アプリケーションの部分間に直接の依存関係が作成されるため、1 つのコンポーネントの障害や変更が他のコンポーネントに直接影響し、連鎖障害のリスクが増大し、システムを独立して拡張および保守することが困難になります。モノリシック設計では、すべてのコンポーネントが 1 つのユニットに結合され、独立して拡張したり更新したりすることが困難になります。これは、AWS が推奨するモジュール式アプローチの逆です。ステートフル コンポーネントはセッション データを特定のインスタンスにローカルに保存するため、リクエストがインスタンス間で自由に分散されなくなり、水平方向のスケーリングと復元力が損なわれます。

---

## Question 4 · Domain 1

**EN** A company has business critical workloads hosted on AWS and they are unwilling to accept any downtime. Which of the following is a recommended best practice to protect their workloads in the event of an unexpected natural disaster?

**中** 一家公司在 AWS 上托管关键业务工作负载，他们不愿意接受任何停机。以下哪项是在发生意外自然灾害时保护其工作负载的建议最佳实践？

**日本語** ある企業はビジネスクリティカルなワークロードを AWS でホストしており、いかなるダウンタイムも受け入れたくありません。予期せぬ自然災害が発生した場合にワークロードを保護するために推奨されるベスト プラクティスは次のうちどれですか?

- **A.** Replicate data across multiple Edge Locations worldwide and use Amazon CloudFront to perform automatic failover in the event of an outage
  - 在全球多个边缘站点之间复制数据，并使用 Amazon CloudFront 在发生中断时执行自动故障转移
  - 世界中の複数のエッジ ロケーションにデータを複製し、Amazon CloudFront を使用して障害発生時に自動フェイルオーバーを実行します。
- **B.** Deploy AWS resources across multiple Availability Zones within the same AWS Region
  - 在同一 AWS 区域内的多个可用区部署 AWS 资源
  - 同じ AWS リージョン内の複数のアベイラビリティーゾーンに AWS リソースをデプロイする
- **C.** Create point-in-time backups in another subnet and recover this data when a disaster occurs
  - 在另一个子网中创建时间点备份并在发生灾难时恢复此数据
  - 別のサブネットにポイントインタイム バックアップを作成し、災害発生時にこのデータを復元します
- **D.** Deploy AWS resources to another AWS Region and implement an Active-Active disaster recovery strategy
  - 将 AWS 资源部署到另一个 AWS 区域并实施 Active-Active 灾难恢复策略
  - AWS リソースを別の AWS リージョンにデプロイし、アクティブ/アクティブの災害復旧戦略を実装します。

**答案 / Answer: `D`**

Deploying AWS resources to a second AWS Region and running an Active-Active disaster recovery strategy means both Regions serve live production traffic simultaneously, so if a natural disaster eliminates one Region entirely, the other continues serving users without any downtime.
Amazon CloudFront distributes and caches content at edge locations to reduce latency for end users, but it is a content delivery service and does not replicate workloads or perform automatic failover of application infrastructure in the event of a regional disaster. Deploying resources across multiple Availability Zones within a single Region improves resilience against isolated failures, but a large-scale natural disaster can affect an entire Region simultaneously, making Multi-AZ alone insufficient when zero downtime is required. Creating point-in-time backups in another subnet stores recovery data within the same Region and requires manual restoration time, which directly conflicts with the requirement to accept no downtime. Subnets are also intra-Region constructs that offer no geographic separation.

将 AWS 资源部署到第二个 AWS 区域并运行主动-主动灾难恢复策略意味着两个区域同时为实时生产流量提供服务，因此，如果自然灾害完全消除了一个区域，另一个区域将继续为用户提供服务，而不会造成任何停机。
Amazon CloudFront 在边缘位置分发和缓存内容，以减少最终用户的延迟，但它是一种内容交付服务，不会在发生区域灾难时复制工作负载或执行应用程序基础设施的自动故障转移。在单个区域内跨多个可用区部署资源可以提高针对孤立故障的恢复能力，但大规模自然灾害可能会同时影响整个区域，因此在需要零停机时间时，仅靠多可用区是不够的。在另一个子网中创建时间点备份将恢复数据存储在同一区域内，并且需要手动恢复时间，这与接受不停机的要求直接冲突。子网也是区域内构造，不提供地理隔离。

AWS リソースを 2 番目の AWS リージョンにデプロイし、アクティブ/アクティブの災害復旧戦略を実行すると、両方のリージョンがライブ本番トラフィックを同時に処理することになるため、自然災害により一方のリージョンが完全に消滅しても、もう一方のリージョンはダウンタイムなしでユーザーにサービスを提供し続けます。
Amazon CloudFront は、エンド ユーザーの待ち時間を短縮するためにエッジ ロケーションでコンテンツを配布およびキャッシュしますが、これはコンテンツ配信サービスであり、地域的な災害が発生した場合にワークロードを複製したり、アプリケーション インフラストラクチャの自動フェイルオーバーを実行したりすることはありません。単一リージョン内の複数のアベイラビリティーゾーンにリソースをデプロイすると、個別の障害に対する回復力が向上しますが、大規模な自然災害はリージョン全体に同時に影響を与える可能性があるため、ゼロダウンタイムが必要な場合にはマルチ AZ だけでは不十分になります。別のサブネットにポイントインタイム バックアップを作成すると、同じリージョン内にリカバリ データが保存され、手動による復元時間が必要になります。これは、ダウンタイムを許容しないという要件と直接矛盾します。サブネットは、地理的な分離を提供しないリージョン内の構造でもあります。

---

## Question 5 · Domain 3 · Select 2

**EN** What should you do in order to keep the data on EBS volumes safe?

**中** 为了确保 EBS 卷上的数据安全，您应该做什么？

**日本語** EBS ボリューム上のデータを安全に保つためには何をすべきでしょうか?

- **A.** Create EBS snapshots
  - 创建 EBS 快照
  - EBSスナップショットを作成する
- **B.** Ensure that EBS data is encrypted at rest
  - 确保 EBS 数据静态加密
  - EBS データが保存時に暗号化されていることを確認する
- **C.** Replicate EBS volumes across multiple Availability Zones
  - 跨多个可用区复制 EBS 卷
  - 複数のアベイラビリティーゾーン間で EBS ボリュームをレプリケートする
- **D.** Use AWS Backup to automate and manage backup schedules
  - 使用 AWS Backup 自动化和管理备份计划
  - AWS Backup を使用してバックアップ スケジュールを自動化および管理する
- **E.** Increase the size of the EBS volume regularly
  - 定期增加 EBS 卷的大小
  - EBS ボリュームのサイズを定期的に増やす

**答案 / Answer: `A,B`**

EBS snapshots create point-in-time backups of your volume stored durably in Amazon S3, allowing data to be restored if a volume is lost or corrupted. Enabling encryption at rest protects the data stored on EBS volumes from unauthorised access using AWS KMS managed keys.
Replicating EBS volumes across multiple Availability Zones improves availability but does not protect against accidental deletion or data corruption, as a replicated volume would reflect the same corrupted state. Using AWS Backup automates backup management across multiple AWS services but is not itself a direct method of keeping EBS data safe without also taking snapshots. Increasing the size of an EBS volume adds storage capacity but has no effect on data protection or security.

EBS 快照为持久存储在 Amazon S3 中的卷创建时间点备份，允许在卷丢失或损坏时恢复数据。启用静态加密可保护 EBS 卷上存储的数据免遭使用 AWS KMS 托管密钥的未经授权的访问。
跨多个可用区复制 EBS 卷可以提高可用性，但不能防止意外删除或数据损坏，因为复制的卷将反映相同的损坏状态。使用 AWS Backup 可以跨多个 AWS 服务自动执行备份管理，但它本身并不是在不拍摄快照的情况下保持 EBS 数据安全的直接方法。增加 EBS 卷的大小会增加存储容量，但不会影响数据保护或安全性。

EBS スナップショットは、Amazon S3 に永続的に保存されるボリュームのポイントインタイム バックアップを作成し、ボリュームが失われたり破損したりした場合にデータを復元できるようにします。保存時の暗号化を有効にすると、AWS KMS 管理キーを使用して、EBS ボリュームに保存されたデータが不正アクセスから保護されます。
複数のアベイラビリティーゾーン間で EBS ボリュームをレプリケートすると、可用性が向上しますが、レプリケートされたボリュームは同じ破損した状態を反映するため、誤った削除やデータ破損を防ぐことはできません。AWS Backup を使用すると、複数の AWS サービスにわたるバックアップ管理が自動化されますが、それ自体は、スナップショットを取得せずに EBS データを安全に保つ直接的な方法ではありません。EBS ボリュームのサイズを増やすとストレージ容量が追加されますが、データ保護やセキュリティには影響しません。

---

## Question 6 · Domain 1 · Task 1.2 · Select 2

**EN** Which of the following options are related to the reliability of AWS?

**中** 以下哪些选项与 AWS 的可靠性相关？

**日本語** 次のオプションのうち、AWS の信頼性に関連するものはどれですか?

- **A.** Applying the principle of least privilege to all AWS resources
  - 将最小权限原则应用于所有 AWS 资源
  - 最小特権の原則をすべての AWS リソースに適用する
- **B.** Automatically provisioning new resources to meet demand
  - 自动配置新资源以满足需求
  - 需要に合わせて新しいリソースを自動的にプロビジョニングする
- **C.** All AWS services are considered Global Services, and this design helps customers serve their international users
  - 所有 AWS 服务都被视为全球服务，这种设计可帮助客户为其国际用户提供服务
  - すべての AWS サービスはグローバル サービスとみなされ、この設計は顧客が海外のユーザーにサービスを提供するのに役立ちます
- **D.** Providing compensation to customers if issues occur
  - 出现问题时向客户提供赔偿
  - 問題が発生した場合の顧客への補償の提供
- **E.** Ability to recover quickly from failures
  - 从失败中快速恢复的能力
  - 障害から迅速に回復する能力

**答案 / Answer: `B,E`**

Automatically provisioning new resources to meet demand and the ability to recover quickly from failures are both core reliability principles, ensuring the system continues operating correctly under varying conditions and after failure events.
Applying the principle of least privilege is a security practice related to access control, not a reliability principle. All AWS services being considered global services is false, as many services are regional, and global reach is a separate concept from reliability. Providing compensation to customers if issues occur describes an SLA remediation mechanism and is not a design principle that contributes to system reliability.

自动配置新资源以满足需求以及从故障中快速恢复的能力都是核心可靠性原则，确保系统在变化的条件下和故障事件发生后继续正确运行。
应用最小权限原则是与访问控制相关的安全实践，而不是可靠性原则。所有 AWS 服务都被视为全球服务是错误的，因为许多服务都是区域性的，而全球覆盖范围与可靠性是不同的概念。如果出现问题，向客户提供补偿描述了 SLA 补救机制，而不是有助于系统可靠性的设计原则。

需要に合わせて新しいリソースを自動的にプロビジョニングすることと、障害から迅速に回復する機能は、どちらも信頼性の核となる原則であり、さまざまな条件下や障害発生後でもシステムが正しく動作し続けることを保証します。
最小特権の原則の適用は、アクセス制御に関連するセキュリティ慣行であり、信頼性の原則ではありません。多くのサービスは地域的なものであり、グローバルなリーチは信頼性とは別の概念であるため、すべての AWS サービスがグローバル サービスとみなされるのは誤りです。問題が発生した場合に顧客に補償を提供することは、SLA 修復メカニズムを説明するものであり、システムの信頼性に寄与する設計原則ではありません。

---

## Question 7 · Domain 3

**EN** What time-savings advantage is offered with the use of Amazon Rekognition?

**中** 使用 Amazon Rekognition 可以节省哪些时间？

**日本語** Amazon Rekognition を使用すると、どのような時間節約のメリットが得られますか?

- **A.** Amazon Rekognition provides automatic watermarking of images
  - Amazon Rekognition 提供图像自动水印功能
  - Amazon Rekognition は画像の自動透かしを提供します
- **B.** Amazon Rekognition provides automatic detection of objects appearing in pictures
  - Amazon Rekognition 可自动检测图片中出现的对象
  - Amazon Rekognition は、写真に写っているオブジェクトを自動検出します
- **C.** Amazon Recognition provides the ability to resize millions of images automatically
  - Amazon Recognition 提供自动调整数百万张图像大小的功能
  - Amazon Recognition は、数百万の画像のサイズを自動的に変更する機能を提供します
- **D.** Amazon Rekognition uses Amazon Mechanical Turk to allow humans to bid on object detection jobs
  - Amazon Rekognition 使用 Amazon Mechanical Turk 允许人类对物体检测作业进行投标
  - Amazon Rekognition は Amazon Mechanical Turk を使用して人間が物体検出ジョブに入札できるようにします

**答案 / Answer: `B`**

Amazon Rekognition automatically analyzes images and videos to detect objects, scenes, faces, text, and activities using machine learning, eliminating the time that would otherwise be spent on manual image review or building custom ML pipelines.
Automatic watermarking of images is not a feature of Amazon Rekognition, which is an analysis and detection service rather than an image editing or rights management tool. Resizing millions of images automatically is not a Rekognition capability and describes an image processing task better suited to a custom solution or a service like AWS Lambda with an image library. Amazon Rekognition does not use Amazon Mechanical Turk or involve human bidding on jobs, as its detection capabilities are fully automated through deep learning models without human intervention.

Amazon Rekognition 使用机器学习自动分析图像和视频，以检测对象、场景、人脸、文本和活动，从而消除了手动图像审查或构建自定义 ML 管道所花费的时间。
图像的自动水印不是 Amazon Rekognition 的功能，Amazon Rekognition 是一种分析和检测服务，而不是图像编辑或权限管理工具。自动调整数百万张图像的大小并不是 Rekognition 的功能，而是描述了更适合自定义解决方案或带有图像库的 AWS Lambda 等服务的图像处理任务。 Amazon Rekognition 不使用 Amazon Mechanical Turk 或涉及人工竞标工作，因为其检测功能通过深度学习模型完全自动化，无需人工干预。

Amazon Rekognition は、機械学習を使用して画像とビデオを自動的に分析し、オブジェクト、シーン、顔、テキスト、アクティビティを検出します。これにより、手動での画像レビューやカスタム ML パイプラインの構築に費やす時間を削減できます。
画像の自動透かしは Amazon Rekognition の機能ではありません。Amazon Rekognition は画像編集や著作権管理ツールではなく、分析および検出サービスです。数百万枚の画像のサイズを自動的に変更することは Rekognition の機能ではなく、カスタム ソリューションや画像ライブラリを備えた AWS Lambda のようなサービスに適した画像処理タスクを説明します。Amazon Rekognition は、Amazon Mechanical Turk を使用したり、人間がジョブに入札したりすることはありません。その検出機能は、人間の介入なしで深層学習モデルによって完全に自動化されています。

---

## Question 8 · Domain 3

**EN** What technology enables compute capacity to adjust as loads change?

**中** 什么技术可以使计算容量随着负载变化而调整？

**日本語** 負荷の変化に応じてコンピューティング能力を調整できるテクノロジーは何ですか?

- **A.** Load balancing
  - 负载均衡
  - 負荷分散
- **B.** Automatic failover
  - 自动故障转移
  - 自動フェイルオーバー
- **C.** Round robin
  - 循环赛
  - ラウンドロビン
- **D.** Auto Scaling
  - 自动缩放
  - オートスケーリング

**答案 / Answer: `D`**

Auto Scaling monitors load and automatically adjusts the number of compute instances to match demand, ensuring capacity scales up during peak periods and scales back down when demand drops, without any manual intervention.
Load balancing distributes incoming traffic across existing compute instances to prevent any single instance from being overwhelmed, but does not add or remove capacity in response to changing load. Automatic failover redirects traffic to a healthy instance or resource when a failure is detected, which addresses availability rather than capacity adjustment. Round robin is a traffic distribution method that cycles requests evenly across a set of servers, and like load balancing, manages traffic distribution rather than adjusting the number of available compute instances.

Auto Scaling 监控负载并自动调整计算实例的数量以满足需求，确保容量在高峰期扩大并在需求下降时缩小，无需任何手动干预。
负载均衡在现有计算实例之间分配传入流量，以防止任何单个实例不堪重负，但不会根据负载变化而添加或删除容量。当检测到故障时，自动故障转移会将流量重定向到运行状况良好的实例或资源，这解决了可用性问题，而不是容量调整问题。循环法是一种流量分配方法，它在一组服务器之间均匀地循环请求，并且与负载平衡一样，管理流量分配而不是调整可用计算实例的数量。

Auto Scaling は負荷を監視し、需要に合わせてコンピューティング インスタンスの数を自動的に調整します。これにより、手動による介入を必要とせずに、ピーク時に容量をスケールアップし、需要が低下したときにスケールダウンすることが保証されます。
負荷分散は、受信トラフィックを既存のコンピューティング インスタンス全体に分散して、単一のインスタンスが過負荷になるのを防ぎますが、負荷の変化に応じて容量を追加または削除することはありません。自動フェイルオーバーは、障害が検出されたときにトラフィックを正常なインスタンスまたはリソースにリダイレクトし、容量の調整ではなく可用性に対処します。ラウンドロビンは、一連のサーバー間でリクエストを均等に循環させるトラフィック分散方法であり、負荷分散と同様に、利用可能なコンピューティング インスタンスの数を調整するのではなく、トラフィック分散を管理します。

---

## Question 9 · Domain 2 · Select 2

**EN** A company has moved to AWS recently. Which of the following AWS Services will help ensure that they have the proper security settings?

**中** 一家公司最近迁移到了 AWS。以下哪些 AWS 服务将有助于确保他们拥有正确的安全设置？

**日本語** 最近、ある企業が AWS に移行しました。次の AWS サービスのうち、適切なセキュリティ設定を確保するのに役立つのはどれですか?

- **A.** AWS Trusted Advisor
  - AWS Trusted Advisor
  - AWS Trusted Advisor
- **B.** Amazon Inspector
  - Amazon Inspector
  - Amazon Inspector
- **C.** Amazon SNS
  - Amazon SNS
  - Amazon SNS
- **D.** Amazon CloudWatch
  - Amazon CloudWatch
  - Amazon CloudWatch
- **E.** Concierge Support Team
  - 礼宾支持团队
  - コンシェルジュサポートチーム

**答案 / Answer: `A,B`**

AWS Trusted Advisor provides automated security checks identifying vulnerabilities such as unrestricted security group access and missing MFA, and Amazon Inspector performs automated security assessments of EC2 instances to identify vulnerabilities and unintended network access. Both help ensure proper security settings.
Amazon SNS is a fully managed publish/subscribe messaging service for sending notifications to subscribers, and does not evaluate or ensure AWS security settings or configurations. Amazon CloudWatch monitors operational metrics and logs for observability and alerting, and while it can trigger notifications on specific metrics or log patterns, it does not actively assess or validate AWS resource security configurations. The Concierge Support Team assists Enterprise support plan customers with billing and account management, and does not perform technical security assessments or review resource security settings.

AWS Trusted Advisor 提供自动安全检查，识别漏洞，例如不受限制的安全组访问和缺少 MFA，而 Amazon Inspector 对 EC2 实例执行自动安全评估，以识别漏洞和意外网络访问。两者都有助于确保正确的安全设置。
Amazon SNS 是一项完全托管的发布/订阅消息服务，用于向订阅者发送通知，并且不评估或确保 AWS 安全设置或配置。 Amazon CloudWatch 监控操作指标和日志以实现可观察性和警报，虽然它可以触发有关特定指标或日志模式的通知，但它不会主动评估或验证 AWS 资源安全配置。礼宾支持团队协助企业支持计划客户进行计费和帐户管理，但不执行技术安全评估或审查资源安全设置。

AWS Trusted Advisor は、無制限のセキュリティ グループ アクセスや MFA の欠落などの脆弱性を特定する自動セキュリティ チェックを提供し、Amazon Inspector は、EC2 インスタンスの自動セキュリティ評価を実行して、脆弱性や意図しないネットワーク アクセスを特定します。どちらも適切なセキュリティ設定を確保するのに役立ちます。
Amazon SNS は、サブスクライバーに通知を送信するためのフルマネージドのパブリッシュ/サブスクライブ メッセージング サービスであり、AWS のセキュリティ設定や構成を評価または保証しません。Amazon CloudWatch は、可観測性とアラートのために運用メトリクスとログを監視し、特定のメトリクスまたはログ パターンで通知をトリガーできますが、AWS リソースのセキュリティ構成を積極的に評価または検証しません。コンシェルジュ サポート チームは、エンタープライズ サポート プランの顧客の請求とアカウント管理を支援しますが、技術的なセキュリティ評価やリソース セキュリティ設定の確認は行いません。

---

## Question 10 · Domain 1

**EN** What is an advantage of deploying an application across multiple Availability Zones?

**中** 跨多个可用区部署应用程序有什么优势？

**日本語** 複数のアベイラビリティーゾーンにアプリケーションをデプロイする利点は何ですか?

- **A.** There is a lower risk of service failure if a natural disaster causes a service disruption in a given AWS Region
  - 如果自然灾害导致给定 AWS 区域的服务中断，则服务失败的风险会降低
  - 自然災害により特定の AWS リージョンでサービスが中断された場合でも、サービス障害のリスクが低くなります。
- **B.** The application will have higher availability because it can withstand a service disruption in one Availability Zone
  - 应用程序将具有更高的可用性，因为它可以承受一个可用区的服务中断
  - 1 つのアベイラビリティーゾーンでのサービス中断に耐えられるため、アプリケーションの可用性が高くなります。
- **C.** There will be better coverage as Availability Zones are geographically distant and can serve a wider area
  - 由于可用区地理位置较远，可以服务更广泛的区域，因此覆盖范围会更好
  - アベイラビリティーゾーンは地理的に離れており、より広いエリアにサービスを提供できるため、カバレッジが向上します。
- **D.** There will be decreased application latency that will improve the user experience
  - 应用程序延迟将会减少，从而改善用户体验
  - アプリケーションの遅延が減少し、ユーザー エクスペリエンスが向上します。

**答案 / Answer: `B`**

Deploying across multiple Availability Zones keeps an application running when one AZ experiences an outage, as traffic fails over to instances in the remaining AZs, directly increasing availability.
Multiple AZs within a single Region do not protect against a natural disaster affecting the entire Region, as all AZs in a Region share the same geographic area and would be exposed to the same regional disruption. Availability Zones within a Region are intentionally close together with low-latency links between them, so they do not provide wider geographic coverage or serve users in distant locations. Deploying across multiple AZs redistributes existing resources rather than reducing the distance between the application and its users, so it does not decrease latency.

跨多个可用区部署可以在一个可用区发生中断时保持应用程序运行，因为流量会故障转移到其余可用区中的实例，从而直接提高可用性。
单个区域内的多个可用区无法防范影响整个区域的自然灾害，因为一个区域内的所有可用区共享相同的地理区域，并且会遭受相同的区域破坏。区域内的可用区故意紧密相连，并在它们之间建立低延迟链接，因此它们不会提供更广泛的地理覆盖范围或为遥远位置的用户提供服务。跨多个可用区部署会重新分配现有资源，而不是缩短应用程序与其用户之间的距离，因此不会减少延迟。

複数のアベイラビリティーゾーンにデプロイすると、1 つの AZ で障害が発生した場合でも、トラフィックが残りの AZ のインスタンスにフェイルオーバーされるため、アプリケーションの実行が継続され、可用性が直接向上します。
リージョン内のすべての AZ は同じ地理的エリアを共有しており、同じ地域の混乱にさらされる可能性があるため、単一リージョン内の複数の AZ はリージョン全体に影響を及ぼす自然災害から保護することはできません。リージョン内のアベイラビリティーゾーンは、それらの間の低遅延リンクを使用して意図的に近接しているため、より広い地理的範囲を提供したり、離れた場所にいるユーザーにサービスを提供したりすることはありません。複数の AZ にデプロイすると、アプリケーションとそのユーザー間の距離が縮まるのではなく、既存のリソースが再分散されるため、遅延は減少しません。

---

## Question 11 · Domain 1 · Select 2

**EN** Why would an organization decide to use AWS over an on-premises data center?

**中** 为什么组织会决定使用 AWS 而不是本地数据中心？

**日本語** 組織はなぜオンプレミスのデータセンターではなく AWS を使用することに決めたのでしょうか?

- **A.** Free commercial software licenses
  - 免费商业软件许可证
  - 無料の商用ソフトウェアライセンス
- **B.** Free technical support
  - 免费技术支持
  - 無料の技術サポート
- **C.** Elastic resources
  - 弹性资源
  - 弾力性のあるリソース
- **D.** On-site visits for auditing
  - 实地考察审核
  - 監査のための現場訪問
- **E.** Cost Savings
  - 节省成本
  - コスト削減

**答案 / Answer: `C,E`**

AWS provides elastic resources that scale up and down with demand, eliminating the need to over-provision capacity, and offers cost savings through pay-as-you-go pricing that avoids large upfront capital investments required by on-premises data centers.
AWS does not provide free commercial software licenses, as third-party software costs are separate from AWS infrastructure pricing and must be purchased independently or through AWS Marketplace. AWS does not provide free technical support, as support is available through paid tiers and basic support only covers account and billing queries without technical assistance. AWS does not offer on-site visits for auditing, as customers requiring compliance evidence use AWS audit reports, certifications, and the AWS Artifact portal rather than physical site access.

AWS 提供可根据需求伸缩的弹性资源，无需过度配置容量，并通过即用即付定价方式节省成本，避免了本地数据中心所需的大量前期资本投资。
AWS 不提供免费的商业软件许可证，因为第三方软件成本与 AWS 基础设施定价分开，必须单独购买或通过 AWS Marketplace 购买。 AWS 不提供免费技术支持，因为可以通过付费级别提供支持，并且基本支持仅涵盖账户和账单查询，无需技术帮助。 AWS 不提供现场审计服务，因为需要合规证据的客户使用 AWS 审计报告、认证和 AWS Artifact 门户，而不是物理站点访问。

AWS は、需要に応じてスケールアップおよびスケールダウンできる柔軟なリソースを提供するため、容量を過剰にプロビジョニングする必要がなく、オンプレミスのデータセンターに必要な多額の先行投資を回避できる従量課金制の価格設定を通じてコスト削減を実現します。
サードパーティのソフトウェアの費用は AWS インフラストラクチャの価格とは別であり、個別に購入するか、AWS Marketplace を通じて購入する必要があるため、AWS は無料の商用ソフトウェアライセンスを提供しません。AWS は無料のテクニカルサポートを提供していません。サポートは有料レベルを通じて利用可能であり、基本サポートは技術サポートなしでアカウントと請求のクエリのみをカバーします。コンプライアンスの証拠を必要とする顧客は、物理的なサイトへのアクセスではなく、AWS 監査レポート、認定、および AWS Artifact ポータルを使用するため、AWS では監査のためのオンサイト訪問は提供していません。

---

## Question 12 · Domain 4

**EN** You have set up consolidated billing for several AWS accounts. One of the accounts has purchased a number of reserved instances for 3 years. Which of the following is true regarding this scenario?

**中** 您已为多个 AWS 账户设置合并账单。其中一个账户购买了一定数量的预留实例，期限为 3 年。关于此场景，以下哪项描述是正确的？

**日本語** 複数の AWS アカウントに対して一括請求を設定しました。アカウントの 1 つは、3 年間にわたって多数の予約インスタンスを購入しました。このシナリオに関して正しいのは次のうちどれですか?

- **A.** The Reserved Instance discounts can only be shared with the master account
  - 预留实例折扣只能与主账户共享
  - リザーブドインスタンスの割引はマスターアカウントとのみ共有できます
- **B.** All accounts can receive the hourly cost benefit of the Reserved Instances
  - 所有账户均可享受预留实例的每小时成本效益
  - すべてのアカウントはリザーブドインスタンスの時間単位のコストメリットを享受できます
- **C.** The purchased instances will have better performance than On-demand instances
  - 购买的实例将比按需实例具有更好的性能
  - 購入したインスタンスはオンデマンド インスタンスよりも優れたパフォーマンスを発揮します
- **D.** There are no cost benefits from using consolidated billing; It is for informational purposes only
  - 使用合并计费没有成本效益；仅供参考
  - 一括請求 (コンソリデーティッドビリング) を使用してもコスト上のメリットはありません。情報提供のみを目的としています

**答案 / Answer: `B`**

With consolidated billing, Reserved Instance discounts are automatically shared across all accounts in the organization, so any account can benefit from the hourly cost savings.
The Reserved Instance discounts applying only to the master account is incorrect because consolidated billing specifically shares RI benefits across all member accounts in the organization, not just the account that purchased them. The claim that reserved instances have better performance than On-Demand instances is false because both run on the same underlying AWS infrastructure, and the Reserved Instance pricing model is a billing commitment rather than a different hardware tier. Consolidated billing does provide real cost benefits beyond purely organizational purposes, combining usage for volume discounts and sharing Reserved Instance savings across accounts, so the claim that it is for informational purposes only is incorrect.

通过合并计费，预留实例折扣会自动在组织中的所有账户之间共享，因此任何账户都可以从每小时的成本节省中受益。
仅适用于主账户的预留实例折扣是不正确的，因为合并计费专门在组织中的所有成员账户（而不仅仅是购买它们的账户）之间共享 RI 权益。预留实例比按需实例具有更好性能的说法是错误的，因为两者都在相同的底层 AWS 基础设施上运行，并且预留实例定价模型是一种计费承诺，而不是不同的硬件层。整合计费确实提供了超越纯粹组织目的的实际成本效益，结合了批量折扣的使用和跨账户共享预留实例节省，因此其仅供参考的说法是不正确的。

一括請求 (コンソリデーティッドビリング) を使用すると、リザーブドインスタンスの割引が組織内のすべてのアカウントで自動的に共有されるため、どのアカウントでも時間単位のコスト削減の恩恵を受けることができます。
マスター アカウントにのみ適用されるリザーブド インスタンスの割引は正しくありません。一括請求では、RI 特典を購入したアカウントだけでなく、組織内のすべてのメンバー アカウントに具体的に共有されるからです。リザーブド インスタンスのパフォーマンスがオンデマンド インスタンスよりも優れているという主張は誤りです。両方とも同じ基盤となる AWS インフラストラクチャ上で実行され、リザーブド インスタンスの価格モデルは異なるハードウェア層ではなく課金コミットメントであるためです。一括請求 (コンソリデーティッドビリング) は、ボリュームディスカウントのための使用を組み合わせたり、アカウント間でリザーブドインスタンスの節約を共有したりすることで、純粋に組織的な目的を超えた実際のコストメリットを提供します。そのため、情報提供のみを目的としているという主張は正しくありません。

---

## Question 13 · Domain 1

**EN** Which of the following is one of the benefits of moving infrastructure from an on-premises data center to AWS?

**中** 以下哪一项是将基础设施从本地数据中心迁移到 AWS 的好处之一？

**日本語** インフラストラクチャをオンプレミスのデータセンターから AWS に移行する利点は次のうちどれですか?

- **A.** Free support for all enterprise customers
  - 为所有企业客户提供免费支持
  - すべての企業顧客向けの無料サポート
- **B.** Automatic data protection
  - 自动数据保护
  - 自動データ保護
- **C.** Reduced Capital Expenditure (CapEx)
  - 减少资本支出 (CapEx)
  - 資本支出（CapEx）の削減
- **D.** AWS holds responsibility for managing customer applications
  - AWS 负责管理客户应用程序
  - AWS は顧客アプリケーションの管理責任を負います

**答案 / Answer: `C`**

Migrating from on-premises to AWS converts large upfront capital expenditures such as purchasing and maintaining physical hardware into smaller variable operational expenses, directly reducing CapEx and improving financial flexibility.
AWS does not provide free support to all enterprise customers, as support is available through paid tiers ranging from Developer to Enterprise, with costs varying by plan. AWS does not automatically protect data on behalf of customers, as data protection responsibilities such as encryption and backup configuration remain with the customer under the Shared Responsibility Model. AWS does not manage customer applications, as application-layer responsibilities including code, configuration, and runtime management remain with the customer regardless of which infrastructure services they use.

从本地迁移到 AWS 可以将购买和维护物理硬件等大量前期资本支出转化为较小的可变运营支出，从而直接降低资本支出并提高财务灵活性。
AWS 并不向所有企业客户提供免费支持，因为可以通过从开发人员到企业的付费级别提供支持，但费用因计划而异。 AWS 不会代表客户自动保护数据，因为根据共享责任模型，加密和备份配置等数据保护责任仍由客户承担。 AWS 不管理客户应用程序，因为无论客户使用哪种基础设施服务，包括代码、配置和运行时管理在内的应用程序层责任仍由客户承担。

オンプレミスから AWS に移行すると、物理ハードウェアの購入や保守などの多額の初期資本支出がより小さな変動運用経費に変換され、CapEx が直接削減され、財務上の柔軟性が向上します。
AWS はすべての企業顧客に無料サポートを提供しているわけではありません。サポートは開発者からエンタープライズまでの有料レベルで利用可能であり、コストはプランによって異なります。暗号化やバックアップ設定などのデータ保護の責任は責任共有モデルに基づいてお客様にあるため、AWS はお客様に代わって自動的にデータを保護しません。AWS は顧客のアプリケーションを管理しません。これは、顧客が使用するインフラストラクチャ サービスに関係なく、コード、構成、ランタイム管理を含むアプリケーション層の責任は顧客にあるからです。

---

## Question 14 · Domain 2

**EN** Which AWS IAM feature allows developers to access AWS services through the AWS CLI?

**中** AWS IAM 的哪些功能允许开发人员通过 AWS CLI 访问 AWS 服务？

**日本語** 開発者が AWS CLI を介して AWS サービスにアクセスできるようにする AWS IAM 機能はどれですか?

- **A.** API keys
  - API 密钥
  - APIキー
- **B.** Access keys
  - 访问键
  - アクセスキー
- **C.** User names/Passwords
  - 用户名/密码
  - ユーザー名/パスワード
- **D.** SSH keys
  - SSH 密钥
  - SSHキー

**答案 / Answer: `B`**

IAM access keys, consisting of an access key ID and a secret access key, are the credentials used to authenticate programmatic requests to AWS services through the AWS CLI and SDKs.
API keys is an informal term not specific to AWS IAM; AWS programmatic access uses access keys consisting of an access key ID and secret access key, and this informal label does not accurately describe the credential type. User names and passwords are used to log in to the AWS Management Console interactively, and are not the credentials used for CLI or SDK programmatic access, which requires access keys. SSH keys are used to connect securely to EC2 instances via Secure Shell and are not the credentials that authenticate developers' CLI requests to AWS services.

IAM 访问密钥由访问密钥 ID 和秘密访问密钥组成，是用于通过 AWS CLI 和开发工具包对 AWS 服务的编程请求进行身份验证的凭证。
API 密钥是一个非正式术语，并非特定于 AWS IAM； AWS 编程访问使用由访问密钥 ID 和秘密访问密钥组成的访问密钥，并且此非正式标签无法准确描述凭证类型。用户名和密码用于以交互方式登录 AWS 管理控制台，而不是用于 CLI 或 SDK 编程访问的凭证，后者需要访问密钥。 SSH 密钥用于通过 Secure Shell 安全地连接到 EC2 实例，而不是验证开发人员对 AWS 服务的 CLI 请求的凭证。

IAM アクセス キーは、アクセス キー ID とシークレット アクセス キーで構成され、AWS CLI および SDK を介して AWS サービスへのプログラムによるリクエストを認証するために使用される認証情報です。
API キーは非公式の用語であり、AWS IAM に固有のものではありません。AWS のプログラムによるアクセスでは、アクセス キー ID とシークレット アクセス キーで構成されるアクセス キーが使用されますが、この非公式のラベルは認証情報の種類を正確に記述していません。ユーザー名とパスワードは、AWS マネジメント コンソールに対話的にログインするために使用され、アクセス キーを必要とする CLI または SDK のプログラムによるアクセスに使用される認証情報ではありません。SSH キーは、Secure Shell 経由で EC2 インスタンスに安全に接続するために使用され、AWS サービスに対する開発者の CLI リクエストを認証する認証情報ではありません。

---

## Question 15 · Domain 3

**EN** AWS allows users to manage their resources using a web based user interface. What is the name of this interface?

**中** AWS 允许用户使用基于 Web 的用户界面来管理其资源。这个接口的名称是什么？

**日本語** AWS を使用すると、ユーザーは Web ベースのユーザー インターフェイスを使用してリソースを管理できます。このインターフェースの名前は何ですか?

- **A.** AWS CLI
  - AWS CLI
  - AWS CLI
- **B.** AWS API
  - AWS API
  - AWS API
- **C.** AWS SDK
  - AWS 软件开发工具包
  - AWS SDK
- **D.** AWS Management Console
  - AWS 管理控制台
  - AWS マネジメントコンソール

**答案 / Answer: `D`**

The AWS Management Console is the web-based graphical interface used to manage and interact with AWS resources directly from a browser.
The AWS CLI is a command-line tool that allows users to interact with AWS services through typed commands in a terminal, not through a web-based graphical interface. The AWS API provides programmatic access to AWS services through HTTP requests made directly by applications or scripts, and has no graphical user interface. The AWS SDK provides libraries and tools for interacting with AWS services through application code in languages such as Python, Java, and JavaScript, and is not a user-facing interface for managing resources.

AWS 管理控制台是基于 Web 的图形界面，用于直接从浏览器管理 AWS 资源并与之交互。
AWS CLI 是一种命令行工具，允许用户通过在终端中键入命令（而不是通过基于 Web 的图形界面）与 AWS 服务交互。 AWS API 通过应用程序或脚本直接发出的 HTTP 请求提供对 AWS 服务的编程访问，并且没有图形用户界面。 AWS 开发工具包提供了用于通过 Python、Java 和 JavaScript 等语言的应用程序代码与 AWS 服务交互的库和工具，而不是用于管理资源的面向用户的界面。

AWS マネジメント コンソールは、ブラウザから直接 AWS リソースを管理および操作するために使用される Web ベースのグラフィカル インターフェイスです。
AWS CLI は、ユーザーがウェブベースのグラフィカル インターフェイスではなく、ターミナルに入力されたコマンドを通じて AWS のサービスと対話できるようにするコマンドライン ツールです。AWS API は、アプリケーションまたはスクリプトによって直接行われた HTTP リクエストを通じて AWS サービスへのプログラムによるアクセスを提供します。グラフィカル ユーザー インターフェイスはありません。AWS SDK は、Python、Java、JavaScript などの言語のアプリケーション コードを通じて AWS のサービスと対話するためのライブラリとツールを提供しますが、リソースを管理するためのユーザー向けインターフェイスではありません。

---

## Question 16 · Domain 1

**EN** Which of the following is a benefit of running an application in multiple Availability Zones?

**中** 以下哪项是在多个可用区中运行应用程序的好处？

**日本語** 複数のアベイラビリティーゾーンでアプリケーションを実行する利点は次のうちどれですか?

- **A.** Allows you to exceed AWS service limits
  - 允许您超出 AWS 服务限制
  - AWS のサービス制限を超えることができます
- **B.** Reduces application response time between servers and global users
  - 减少服务器和全局用户之间的应用程序响应时间
  - サーバーとグローバル ユーザー間のアプリケーションの応答時間を短縮します。
- **C.** Increases available compute capacity
  - 增加可用计算能力
  - 利用可能なコンピューティング容量を増加します
- **D.** Increases the availability of your application
  - 提高应用程序的可用性
  - アプリケーションの可用性が向上します

**答案 / Answer: `D`**

Deploying an application across multiple Availability Zones ensures it continues running from the remaining AZs if one experiences an outage, directly increasing availability by eliminating single points of failure within a Region.
AWS service limits are account and resource quotas set by AWS that can be increased through a support request, and are entirely unrelated to how many Availability Zones an application is deployed across. Reducing application response time for global users requires deploying across multiple Regions or using a content delivery network such as CloudFront, as AZs within a single Region are geographically close together and do not reduce latency for distant users. Increasing available compute capacity requires provisioning additional instances or enabling Auto Scaling, as spreading existing resources across multiple AZs redistributes capacity rather than adding to it.

跨多个可用区部署应用程序可确保在遇到中断时该应用程序可以继续从其余可用区运行，从而通过消除区域内的单点故障来直接提高可用性。
AWS 服务限制是 AWS 设置的账户和资源配额，可以通过支持请求来增加，并且与应用程序部署的可用区数量完全无关。减少全球用户的应用程序响应时间需要跨多个区域部署或使用 CloudFront 等内容交付网络，因为单个区域内的可用区在地理上靠近，并且不会减少远程用户的延迟。增加可用计算容量需要配置更多实例或启用 Auto Scaling，因为将现有资源分散到多个可用区会重新分配容量，而不是增加容量。

複数のアベイラビリティーゾーンにアプリケーションをデプロイすると、1 つの AZ で障害が発生した場合でも残りの AZ からアプリケーションが実行し続けることが保証され、リージョン内の単一障害点が排除されて可用性が直接向上します。
AWS のサービス制限は、AWS によって設定されるアカウントとリソースの割り当てであり、サポート リクエストを通じて増やすことができ、アプリケーションがデプロイされるアベイラビリティーゾーンの数とはまったく関係ありません。グローバル ユーザーのアプリケーションの応答時間を短縮するには、複数のリージョンにまたがってデプロイするか、CloudFront などのコンテンツ配信ネットワークを使用する必要があります。これは、単一リージョン内の AZ は地理的に近いため、離れたユーザーのレイテンシは短縮されないためです。既存のリソースを複数の AZ に分散すると、容量が追加されるのではなく再配分されるため、利用可能なコンピューティング容量を増やすには、追加のインスタンスをプロビジョニングするか、Auto Scaling を有効にする必要があります。

---

## Question 17 · Domain 4

**EN** Which is the minimum AWS Support plan that includes Infrastructure Event Management without additional costs?

**中** 哪个是包含基础设施事件管理且无需额外费用的最低 AWS Support 计划？

**日本語** 追加コストなしでインフラストラクチャ イベント管理を含む最小の AWS Support プランはどれですか?

- **A.** Enterprise
  - 企业
  - 企業
- **B.** Business
  - 商业
  - 仕事
- **C.** Developer
  - 开发商
  - 開発者
- **D.** Basic
  - 基本的
  - 基本

**答案 / Answer: `A`**

Infrastructure Event Management is included at no extra cost only with the AWS Enterprise Support plan, providing architectural guidance and real-time support during planned events such as product launches and traffic spikes.
Business Support customers can access Infrastructure Event Management but must pay an additional fee for each event engagement, making it not included as a standard benefit at no extra cost. Developer Support provides business-hours email access to Cloud Support Engineers for general technical questions and does not include Infrastructure Event Management at any price point. Basic Support provides access to documentation, whitepapers, and the seven core Trusted Advisor checks, and does not include any form of event management support.

仅 AWS 企业支持计划包含基础设施事件管理，无需额外付费，可在产品发布和流量高峰等计划事件期间提供架构指导和实时支持。
业务支持客户可以访问基础设施事件管理，但必须为每次活动支付额外费用，因此不包含在免费的标准权益中。开发人员支持为云支持工程师提供工作时间电子邮件访问，以解答一般技术问题，并且不包括任何价位的基础设施事件管理。基本支持提供对文档、白皮书和七个核心 Trusted Advisor 检查的访问，但不包括任何形式的事件管理支持。

インフラストラクチャ イベント管理は、AWS エンタープライズ サポート プランにのみ追加料金なしで含まれており、製品の発売やトラフィックの急増などの計画されたイベント中にアーキテクチャ ガイダンスとリアルタイム サポートを提供します。
ビジネス サポートの顧客はインフラストラクチャ イベント管理にアクセスできますが、イベント エンゲージメントごとに追加料金を支払う必要があるため、追加料金なしの標準特典としては含まれていません。開発者サポートでは、一般的な技術的な質問についてクラウド サポート エンジニアに営業時間内に電子メールでアクセスできますが、どの価格帯でもインフラストラクチャ イベント管理は含まれていません。基本サポートでは、ドキュメント、ホワイトペーパー、および 7 つの主要な Trusted Advisor チェックへのアクセスが提供されますが、いかなる形式のイベント管理サポートも含まれていません。

---

## Question 18 · Domain 2

**EN** What are the default security credentials that are required to access the AWS management console for an IAM user account?

**中** IAM 用户账户访问 AWS 管理控制台需要哪些默认安全凭证？

**日本語** IAM ユーザー アカウントの AWS 管理コンソールにアクセスするために必要なデフォルトのセキュリティ認証情報は何ですか?

- **A.** MFA
  - 艺术硕士
  - MFA
- **B.** Security tokens
  - 安全令牌
  - セキュリティトークン
- **C.** A user name and password
  - 用户名和密码
  - ユーザー名とパスワード
- **D.** Access keys
  - 访问键
  - アクセスキー

**答案 / Answer: `C`**

IAM user console access is secured with a user name and password combination as the default credentials, providing the basic authentication required to access the AWS Management Console.
MFA is an optional additional authentication factor that can be layered on top of a username and password to require a one-time code from a device, but it is not the default credential requirement and is configured separately from the primary user name and password. Security tokens are temporary credentials consisting of an access key ID, secret access key, and session token that are issued when an IAM role is assumed, and are used for programmatic and role-based access rather than as default console credentials for IAM user accounts. Access keys consisting of an access key ID and secret access key are the credentials used for programmatic API and CLI access, not for logging into the AWS Management Console, which uses user name and password.

IAM 用户控制台访问通过用户名和密码组合作为默认凭证进行保护，提供访问 AWS 管理控制台所需的基本身份验证。
MFA 是一种可选的附加身份验证因素，可以叠加在用户名和密码之上，以要求设备提供一次性代码，但它不是默认的凭据要求，而是与主用户名和密码分开配置。安全令牌是临时凭证，由访问密钥 ID、秘密访问密钥和会话令牌组成，在承担 IAM 角色时颁发，用于编程和基于角色的访问，而不是用作 IAM 用户帐户的默认控制台凭证。由访问密钥 ID 和秘密访问密钥组成的访问密钥是用于编程 API 和 CLI 访问的凭证，而不是用于登录使用用户名和密码的 AWS 管理控制台的凭证。

IAM ユーザー コンソールへのアクセスは、デフォルトの認証情報としてユーザー名とパスワードの組み合わせで保護され、AWS マネジメント コンソールへのアクセスに必要な基本認証を提供します。
MFA は、デバイスからのワンタイム コードを要求するためにユーザー名とパスワードの上に重ねることができるオプションの追加の認証要素ですが、これはデフォルトの資格情報要件ではなく、プライマリ ユーザー名とパスワードとは別に構成されます。セキュリティ トークンは、IAM ロールが引き受けられたときに発行されるアクセス キー ID、シークレット アクセス キー、およびセッション トークンで構成される一時的な認証情報であり、IAM ユーザー アカウントのデフォルトのコンソール認証情報としてではなく、プログラムによるロールベースのアクセスに使用されます。アクセス キー ID とシークレット アクセス キーで構成されるアクセス キーは、ユーザー名とパスワードを使用する AWS マネジメント コンソールへのログインではなく、プログラムによる API および CLI アクセスに使用される認証情報です。

---

## Question 19 · Domain 2 · Select 2

**EN** Which of the following common IT tasks can AWS cover to free up company IT resources?

**中** AWS 可以承担以下哪些常见 IT 任务以释放公司 IT 资源？

**日本語** 企業の IT リソースを解放するために AWS が対応できる一般的な IT タスクは次のうちどれですか?

- **A.** Patching database software
  - 修补数据库软件
  - データベース ソフトウェアにパッチを適用する
- **B.** Testing application releases
  - 测试应用程序版本
  - アプリケーションリリースのテスト
- **C.** Backing up databases
  - 备份数据库
  - データベースのバックアップ
- **D.** Creating database schema
  - 创建数据库模式
  - データベーススキーマの作成
- **E.** Running penetration tests
  - 运行渗透测试
  - 侵入テストの実行

**答案 / Answer: `A,C`**

Patching database software and backing up databases are maintenance tasks that AWS handles automatically for managed services such as RDS, freeing up customers' IT resources from these time-consuming operational responsibilities.
Testing application releases is the customer's responsibility as it requires knowledge of the specific application logic, acceptance criteria, and business requirements that only the customer possesses, making it a task AWS cannot cover on the customer's behalf. Creating database schema requires understanding of the customer's data model and application requirements, and is a design and development activity that the customer must perform rather than a managed service task AWS provides. Running penetration tests is a security activity that customers perform on their own applications and infrastructure, and is not an operational burden AWS covers as part of its managed service offerings.

修补数据库软件和备份数据库是 AWS 为 RDS 等托管服务自动处理的维护任务，从而将客户的 IT 资源从这些耗时的操作职责中解放出来。
测试应用程序版本是客户的责任，因为它需要了解只有客户拥有的特定应用程序逻辑、验收标准和业务要求，这使得 AWS 无法代表客户完成这项任务。创建数据库架构需要了解客户的数据模型和应用程序需求，并且是客户必须执行的设计和开发活动，而不是 AWS 提供的托管服务任务。运行渗透测试是客户在自己的应用程序和基础设施上执行的一项安全活动，而不是 AWS 作为其托管服务产品的一部分涵盖的运营负担。

データベース ソフトウェアのパッチ適用とデータベースのバックアップは、AWS が RDS などのマネージド サービスに対して自動的に処理するメンテナンス タスクであり、お客様の IT リソースをこれらの時間のかかる運用責任から解放します。
アプリケーションリリースのテストは、顧客のみが持つ特定のアプリケーションロジック、承認基準、ビジネス要件に関する知識が必要となるため、顧客の責任であり、AWS が顧客に代わって実行することはできないタスクです。データベース スキーマの作成には、顧客のデータ モデルとアプリケーション要件を理解する必要があり、AWS が提供するマネージド サービス タスクではなく、顧客が実行する必要がある設計および開発アクティビティです。侵入テストの実行は、顧客が独自のアプリケーションやインフラストラクチャに対して実行するセキュリティ活動であり、AWS がマネージドサービス提供の一部としてカバーする運用上の負担ではありません。

---

## Question 20 · Domain 2

**EN** Where are AWS compliance documents, such as an SOC 1 report, located?

**中** AWS 合规性文档（例如 SOC 1 报告）位于哪里？

**日本語** SOC 1 レポートなどの AWS コンプライアンス文書はどこにありますか?

- **A.** Amazon Inspector
  - Amazon Inspector
  - Amazon Inspector
- **B.** AWS CloudTrail
  - AWS CloudTrail
  - AWS CloudTrail
- **C.** AWS Artifact
  - AWS Artifact
  - AWS Artifact
- **D.** AWS Certificate Manager
  - AWS 证书管理器
  - AWS 証明書マネージャー

**答案 / Answer: `C`**

AWS Artifact is the dedicated self-service portal for accessing AWS compliance documentation, including SOC 1, SOC 2, ISO 27001, and PCI DSS reports, allowing customers to download these documents for their own audit and compliance purposes.
Amazon Inspector is an automated security assessment service that scans EC2 instances and container images for software vulnerabilities and network exposure risks, and does not provide or store AWS compliance certifications or SOC reports. AWS CloudTrail logs all API calls and management events in an AWS account for auditing purposes, and produces customer-specific activity logs rather than AWS compliance certifications or third-party audit reports. AWS Certificate Manager provisions and manages SSL/TLS certificates for use with AWS services to encrypt data in transit, and is a certificate management service rather than a repository of compliance reports.

AWS Artifact 是用于访问 AWS 合规性文档（包括 SOC 1、SOC 2、ISO 27001 和 PCI DSS 报告）的专用自助服务门户，允许客户下载这些文档以用于自己的审计和合规性目的。
Amazon Inspector 是一项自动化安全评估服务，可扫描 EC2 实例和容器映像是否有软件漏洞和网络暴露风险，并且不提供或存储 AWS 合规性认证或 SOC 报告。 AWS CloudTrail 将所有 API 调用和管理事件记录在 AWS 账户中以用于审计目的，并生成特定于客户的活动日志，而不是 AWS 合规性认证或第三方审计报告。 AWS Certificate Manager 预置和管理 SSL/TLS 证书，以便与 AWS 服务一起使用以加密传输中的数据，并且它是一项证书管理服务，而不是合规性报告存储库。

AWS Artifact は、SOC 1、SOC 2、ISO 27001、PCI DSS レポートなどの AWS コンプライアンス文書にアクセスするための専用セルフサービス ポータルであり、顧客はこれらの文書を独自の監査とコンプライアンスの目的でダウンロードできます。
Amazon Inspector は、EC2 インスタンスとコンテナイメージをスキャンしてソフトウェアの脆弱性とネットワーク露出のリスクを調べる自動セキュリティ評価サービスであり、AWS コンプライアンス証明書や SOC レポートの提供や保存は行いません。AWS CloudTrail は、監査目的ですべての API 呼び出しと管理イベントを AWS アカウントに記録し、AWS コンプライアンス認定やサードパーティの監査レポートではなく、顧客固有のアクティビティ ログを生成します。AWS Certificate Manager は、転送中のデータを暗号化するために AWS のサービスで使用する SSL/TLS 証明書をプロビジョニングおよび管理します。これは、コンプライアンス レポートのリポジトリではなく、証明書管理サービスです。

---

## Question 21 · Domain 2 · Select 2

**EN** Hundreds of thousands of DDoS attacks are recorded every month worldwide. What service does AWS provide to help protect AWS Customers from these attacks?

**中** 全球每个月都会记录数十万起 DDoS 攻击。 AWS 提供哪些服务来帮助保护 AWS 客户免受这些攻击？

**日本語** 世界中で毎月数十万件の DDoS 攻撃が記録されています。AWS の顧客をこれらの攻撃から保護するために、AWS はどのようなサービスを提供していますか?

- **A.** AWS Shield
  - AWS Shield
  - AWS Shield
- **B.** AWS Config
  - AWS Config
  - AWS Config
- **C.** Amazon Cognito
  - Amazon Cognito
  - Amazon Cognito
- **D.** AWS WAF
  - AWS WAF
  - AWS WAF
- **E.** AWS KMS
  - AWS KMS
  - AWS KMS

**答案 / Answer: `A,D`**

AWS Shield provides managed DDoS protection at the network and transport layers, and AWS WAF lets you create rules that filter malicious web traffic at the application layer. Together they defend against the full spectrum of DDoS attacks.
AWS Config continuously monitors and records AWS resource configurations to evaluate compliance, and is a configuration management and auditing service with no capability to block or mitigate DDoS traffic. Amazon Cognito is a user identity and authentication service for web and mobile applications, providing sign-up and sign-in functionality and federated identity, and has no DDoS mitigation capabilities. AWS KMS is a key management service for creating and controlling encryption keys used to protect data, and is not involved in network traffic filtering or DDoS defense.

AWS Shield 在网络和传输层提供托管 DDoS 保护，AWS WAF 允许您创建在应用程序层过滤恶意 Web 流量的规则。它们共同防御全方位的 DDoS 攻击。
AWS Config 持续监控和记录 AWS 资源配置以评估合规性，并且是一种配置管理和审核服务，无法阻止或缓解 DDoS 流量。 Amazon Cognito 是一种针对 Web 和移动应用程序的用户身份和身份验证服务，提供注册和登录功能以及联合身份，并且不具有 DDoS 缓解功能。 AWS KMS 是一种密钥管理服务，用于创建和控制用于保护数据的加密密钥，不参与网络流量过滤或 DDoS 防御。

AWS Shield は、ネットワーク層とトランスポート層でマネージド DDoS 保護を提供し、AWS WAF を使用すると、アプリケーション層で悪意のある Web トラフィックをフィルタリングするルールを作成できます。これらは連携して、あらゆる種類の DDoS 攻撃を防御します。
AWS Config は、AWS リソース構成を継続的に監視および記録してコンプライアンスを評価します。これは、DDoS トラフィックをブロックまたは軽減する機能を持たない構成管理および監査サービスです。Amazon Cognito は、Web およびモバイル アプリケーション用のユーザー ID および認証サービスであり、サインアップおよびサインイン機能とフェデレーション ID を提供しますが、DDoS 軽減機能はありません。AWS KMS は、データ保護に使用される暗号化キーを作成および制御するためのキー管理サービスであり、ネットワーク トラフィック フィルタリングや DDoS 防御には関与しません。

---

## Question 22 · Domain 3 · Select 2

**EN** Which AWS services should be used for read/write of constantly changing data?

**中** 应使用哪些 AWS 服务来读取/写入不断变化的数据？

**日本語** 常に変化するデータの読み取り/書き込みにはどの AWS サービスを使用する必要がありますか?

- **A.** Amazon S3 GLACIER
  - Amazon S3 冰川
  - Amazon S3 氷河
- **B.** Amazon RDS
  - Amazon RDS
  - Amazon RDS
- **C.** AWS Snowball
  - AWS Snowball
  - AWS Snowball
- **D.** Amazon Redshift
  - Amazon Redshift
  - Amazon Redshift
- **E.** Amazon EFS
  - Amazon EFS
  - Amazon EFS

**答案 / Answer: `B,E`**

Amazon RDS supports frequent read/write operations on relational data with full ACID transaction support, making it well suited for applications with constantly changing structured data. Amazon EFS provides a shared network file system with concurrent read/write access for multiple EC2 instances, making it appropriate for workloads that require continuous file-level changes.
Amazon S3 Glacier is an archival storage service designed for data that is rarely accessed and does not support the frequent read/write operations that constantly changing data requires. AWS Snowball is a physical device used to transfer large volumes of data into or out of AWS and has no capability to serve as a read/write data store for active workloads. Amazon Redshift is a data warehouse service optimized for running complex analytical queries across large datasets, not for handling frequent transactional read/write operations on constantly changing data.

Amazon RDS 支持对关系数据进行频繁的读/写操作，并具有完整的 ACID 事务支持，非常适合结构化数据不断变化的应用程序。 Amazon EFS 为多个 EC2 实例提供具有并发读/写访问的共享网络文件系统，使其适合需要连续文件级更改的工作负载。
Amazon S3 Glacier 是一种归档存储服务，专为很少访问的数据而设计，不支持不断变化的数据所需的频繁读/写操作。 AWS Snowball 是一种物理设备，用于将大量数据传入或传出 AWS，无法充当活动工作负载的读/写数据存储。 Amazon Redshift 是一种数据仓库服务，针对跨大型数据集运行复杂的分析查询进行了优化，而不是针对不断变化的数据处理频繁的事务性读/写操作。

Amazon RDS は、完全な ACID トランザクション サポートにより、リレーショナル データに対する頻繁な読み取り/書き込み操作をサポートしており、絶えず変化する構造化データを使用するアプリケーションに最適です。Amazon EFS は、複数の EC2 インスタンスに対する同時読み取り/書き込みアクセスを備えた共有ネットワーク ファイル システムを提供し、ファイル レベルの継続的な変更を必要とするワークロードに適しています。
Amazon S3 Glacier は、ほとんどアクセスされないデータ用に設計されたアーカイブ ストレージ サービスであり、常に変化するデータに必要な頻繁な読み取り/書き込み操作をサポートしていません。AWS Snowball は、AWS との間で大量のデータを転送するために使用される物理デバイスであり、アクティブなワークロードの読み取り/書き込みデータ ストアとして機能する機能はありません。Amazon Redshift は、絶えず変化するデータに対する頻繁なトランザクション読み取り/書き込み操作を処理するのではなく、大規模なデータセットにわたって複雑な分析クエリを実行するために最適化されたデータ ウェアハウス サービスです。

---

## Question 23 · Domain 3

**EN** A company is looking for a scalable data warehouse solution. Which of the following AWS solutions would meet the company's needs?

**中** 一家公司正在寻找可扩展的数据仓库解决方案。以下哪些 AWS 解决方案可以满足该公司的需求？

**日本語** ある企業は、スケーラブルなデータ ウェアハウス ソリューションを探しています。次の AWS ソリューションのうち、会社のニーズを満たすのはどれですか?

- **A.** Amazon Simple Storage Service (Amazon S3)
  - 亚马逊简单存储服务 (Amazon S3)
  - Amazon シンプル ストレージ サービス (Amazon S3)
- **B.** Amazon DynamoDB
  - Amazon DynamoDB
  - Amazon DynamoDB
- **C.** Amazon Kinesis
  - Amazon Kinesis
  - Amazon Kinesis
- **D.** Amazon Redshift
  - Amazon Redshift
  - Amazon Redshift

**答案 / Answer: `D`**

Amazon Redshift is a fully managed, petabyte-scale data warehouse service designed for running complex analytical queries across large datasets, making it the purpose-built solution for scalable data warehousing.
Amazon S3 is an object storage service for storing and retrieving any type of data, not a data warehouse for running analytical queries. Amazon DynamoDB is a NoSQL key-value and document database optimized for high-speed transactional workloads, not for complex analytical queries across large datasets. Amazon Kinesis is a service for collecting, processing, and analyzing real-time streaming data, not for warehousing and querying historical datasets.

Amazon Redshift 是一种完全托管的 PB 级数据仓库服务，旨在跨大型数据集运行复杂的分析查询，使其成为可扩展数据仓库的专用解决方案。
Amazon S3 是一种用于存储和检索任何类型数据的对象存储服务，而不是用于运行分析查询的数据仓库。 Amazon DynamoDB 是一个 NoSQL 键值和文档数据库，针对高速事务工作负载进行了优化，而不是针对跨大型数据集的复杂分析查询。 Amazon Kinesis 是一个用于收集、处理和分析实时流数据的服务，而不是用于仓储和查询历史数据集的服务。

Amazon Redshift は、大規模なデータセットにわたって複雑な分析クエリを実行するために設計された、フルマネージドのペタバイト規模のデータ ウェアハウス サービスであり、スケーラブルなデータ ウェアハウジング専用のソリューションです。
Amazon S3 は、分析クエリを実行するためのデータ ウェアハウスではなく、あらゆる種類のデータを保存および取得するためのオブジェクト ストレージ サービスです。Amazon DynamoDB は、大規模なデータセットにわたる複雑な分析クエリではなく、高速トランザクション ワークロード向けに最適化された NoSQL キー/値およびドキュメント データベースです。Amazon Kinesis は、リアルタイムのストリーミング データを収集、処理、分析するためのサービスであり、履歴データセットの保管やクエリを行うためのサービスではありません。

---

## Question 24 · Domain 3 · Select 2

**EN** What does the AWS Health Dashboard provide?

**中** AWS Health Dashboard 提供什么？

**日本語** AWS Health Dashboard は何を提供しますか?

- **A.** Detailed troubleshooting guidance to address AWS events impacting your resources
  - 详细的故障排除指南，用于解决影响您的资源的 AWS 事件
  - リソースに影響を与える AWS イベントに対処するための詳細なトラブルシューティング ガイダンス
- **B.** Health checks for Auto Scaling instances
  - Auto Scaling 实例的健康检查
  - Auto Scaling インスタンスのヘルスチェック
- **C.** Recommendations for Cost Optimization
  - 成本优化建议
  - コスト最適化のための推奨事項
- **D.** A dashboard detailing vulnerabilities in your applications
  - 详细说明应用程序中的漏洞的仪表板
  - アプリケーションの脆弱性を詳細に示すダッシュボード
- **E.** Personalized view of AWS service health
  - AWS 服务运行状况的个性化视图
  - AWS サービスの健全性のパーソナライズされたビュー

**答案 / Answer: `A,E`**

AWS Health Dashboard provides a personalized view of how AWS service events affect your specific resources, and detailed troubleshooting guidance to help you respond to and resolve those events.
Health checks for Auto Scaling instances are a feature of Amazon EC2 Auto Scaling that monitors instance health and replaces unhealthy instances automatically, and are not a capability of the AWS Health Dashboard. Recommendations for cost optimization are provided by AWS Trusted Advisor, which inspects your environment and suggests ways to reduce spending, and are not a feature of the AWS Health Dashboard. A dashboard detailing vulnerabilities in applications describes Amazon Inspector, which scans for software vulnerabilities and unintended network exposure, and is not a function of the AWS Health Dashboard.

AWS Health Dashboard 提供有关 AWS 服务事件如何影响您的特定资源的个性化视图，以及帮助您响应和解决这些事件的详细故障排除指南。
Auto Scaling 实例的运行状况检查是 Amazon EC2 Auto Scaling 的一项功能，用于监控实例运行状况并自动替换不运行状况的实例，而不是 AWS Health Dashboard 的功能。成本优化建议由 AWS Trusted Advisor 提供，它会检查您的环境并提出减少支出的方法，这不是 AWS Health Dashboard 的功能。详细说明应用程序中的漏洞的仪表板描述了 Amazon Inspector，它扫描软件漏洞和意外的网络暴露，并且不是 AWS Health Dashboard 的功能。

AWS Health Dashboard は、AWS サービス イベントが特定のリソースにどのような影響を与えるかをパーソナライズしたビューと、それらのイベントへの対応と解決に役立つ詳細なトラブルシューティング ガイダンスを提供します。
Auto Scaling インスタンスのヘルスチェックは、インスタンスの健全性を監視し、異常なインスタンスを自動的に置き換える Amazon EC2 Auto Scaling の機能であり、AWS Health Dashboard の機能ではありません。コスト最適化の推奨事項は、環境を検査して支出を削減する方法を提案する AWS Trusted Advisor によって提供されますが、これは AWS Health Dashboard の機能ではありません。アプリケーションの脆弱性を詳細に説明するダッシュボードには、ソフトウェアの脆弱性と意図しないネットワーク露出をスキャンする Amazon Inspector が記載されていますが、これは AWS Health Dashboard の機能ではありません。

---

## Question 25 · Domain 3

**EN** What is the AWS database service that allows you to upload data structured in key-value format?

**中** 允许您上传键值格式结构化数据的 AWS 数据库服务是什么？

**日本語** Key-Value 形式で構造化されたデータをアップロードできる AWS データベース サービスとは何ですか?

- **A.** Amazon DynamoDB
  - Amazon DynamoDB
  - Amazon DynamoDB
- **B.** Amazon Aurora
  - Amazon Aurora
  - Amazon Aurora
- **C.** Amazon Redshift
  - Amazon Redshift
  - Amazon Redshift
- **D.** Amazon RDS
  - Amazon RDS
  - Amazon RDS

**答案 / Answer: `A`**

Amazon DynamoDB is a fully managed NoSQL database that natively supports key-value and document data models, making it ideal for uploading and retrieving data structured as key-value pairs.
Amazon Aurora is a fully managed relational database engine compatible with MySQL and PostgreSQL that uses structured SQL schemas, and does not support the flexible key-value data model that DynamoDB provides. Amazon Redshift is a fully managed data warehouse service designed for running complex analytical queries across large volumes of structured data, and is not a key-value database. Amazon RDS is a managed relational database service supporting multiple SQL engines, and uses structured table-based schemas rather than the key-value data model.

Amazon DynamoDB 是一个完全托管的 NoSQL 数据库，本身支持键值和文档数据模型，非常适合上传和检索结构化为键值对的数据。
Amazon Aurora 是一个完全托管的关系数据库引擎，兼容 MySQL 和 PostgreSQL，使用结构化 SQL 模式，不支持 DynamoDB 提供的灵活的键值数据模型。 Amazon Redshift 是一项完全托管的数据仓库服务，旨在跨大量结构化数据运行复杂的分析查询，并且不是键值数据库。 Amazon RDS 是一种支持多个 SQL 引擎的托管关系数据库服务，并使用基于结构化表的模式而不是键值数据模型。

Amazon DynamoDB は、キーと値のペアとして構造化されたデータのアップロードと取得に最適な、キーと値およびドキュメント データ モデルをネイティブにサポートするフルマネージド NoSQL データベースです。
Amazon Aurora は、MySQL および PostgreSQL と互換性のあるフルマネージド リレーショナル データベース エンジンで、構造化 SQL スキーマを使用しますが、DynamoDB が提供する柔軟なキー値データ モデルはサポートしません。Amazon Redshift は、大量の構造化データに対して複雑な分析クエリを実行するために設計されたフルマネージド データ ウェアハウス サービスであり、キーと値のデータベースではありません。Amazon RDS は、複数の SQL エンジンをサポートするマネージド リレーショナル データベース サービスで、キーと値のデータ モデルではなく、構造化されたテーブル ベースのスキーマを使用します。

---

## Question 26 · Domain 3

**EN** In your on-premises environment, you can create as many virtual servers as you need from a single template. What can you use to perform the same in AWS?

**中** 在本地环境中，您可以根据需要从单个模板创建任意数量的虚拟服务器。您可以使用什么在 AWS 中执行相同的操作？

**日本語** オンプレミス環境では、単一のテンプレートから必要な数の仮想サーバーを作成できます。AWS で同じことを実行するには何を使用できますか?

- **A.** IAM
  - IAM
  - IAM
- **B.** An internet gateway
  - 互联网网关
  - インターネットゲートウェイ
- **C.** EBS Snapshot
  - EBS 快照
  - EBS スナップショット
- **D.** AMI
  - 急性心肌梗死
  - アミ

**答案 / Answer: `D`**

An Amazon Machine Image is a template containing the operating system, application software, and configuration needed to launch an EC2 instance, directly equivalent to the on-premises practice of spinning up multiple virtual servers from a single template.
IAM is an identity and access management service that controls permissions and user access within AWS, and has no role in creating or launching virtual server instances. An internet gateway is a VPC component that enables communication between resources inside a VPC and the public internet, and is unrelated to server provisioning or templating. An EBS snapshot is a point-in-time backup of a storage volume used for data recovery purposes, not a template for launching new instances with a defined operating system and configuration.

Amazon 系统映像是一个模板，其中包含启动 EC2 实例所需的操作系统、应用程序软件和配置，直接相当于从单个模板启动多个虚拟服务器的本地实践。
IAM 是一种身份和访问管理服务，用于控制 AWS 内的权限和用户访问，并且在创建或启动虚拟服务器实例方面没有作用。互联网网关是一个 VPC 组件，它支持 VPC 内的资源与公共互联网之间的通信，并且与服务器配置或模板无关。 EBS 快照是用于数据恢复目的的存储卷的时间点备份，而不是用于启动具有定义的操作系统和配置的新实例的模板。

Amazon マシンイメージは、EC2 インスタンスを起動するために必要なオペレーティング システム、アプリケーション ソフトウェア、および設定を含むテンプレートであり、単一のテンプレートから複数の仮想サーバーをスピンアップするオンプレミスの実践に直接相当します。
IAM は、AWS 内の権限とユーザー アクセスを制御する ID およびアクセス管理サービスであり、仮想サーバー インスタンスの作成または起動には役割を持ちません。インターネット ゲートウェイは、VPC 内のリソースとパブリック インターネット間の通信を可能にする VPC コンポーネントであり、サーバーのプロビジョニングやテンプレートとは無関係です。EBS スナップショットは、データ回復の目的で使用されるストレージ ボリュームのポイントインタイム バックアップであり、定義されたオペレーティング システムと構成で新しいインスタンスを起動するためのテンプレートではありません。

---

## Question 27 · Domain 1 · Task 1.1 · Select 2

**EN** What are the benefits of having infrastructure hosted in AWS?

**中** 在 AWS 中托管基础设施有哪些好处？

**日本語** インフラストラクチャを AWS でホストする利点は何ですか?

- **A.** Increasing speed and agility
  - 提高速度和敏捷性
  - スピードと敏捷性の向上
- **B.** Gaining unlimited free storage for all data
  - 获得所有数据的无限免费存储空间
  - すべてのデータを無制限に無料で保存できるストレージを獲得
- **C.** Gaining complete control over the physical infrastructure
  - 获得对物理基础设施的完全控制
  - 物理インフラストラクチャを完全に制御する
- **D.** Operating applications on behalf of customers
  - 代表客户操作应用程序
  - 顧客に代わってアプリケーションを操作する
- **E.** All of the physical security and most of the data and network security are taken care of for you
  - 所有物理安全以及大部分数据和网络安全均已为您处理好
  - すべての物理的なセキュリティと、ほとんどのデータとネットワークのセキュリティが自動的に処理されます。

**答案 / Answer: `A,E`**

AWS increases speed and agility by allowing customers to provision resources in minutes rather than weeks, and handles physical security along with most data and network security so customers can focus on building applications rather than managing infrastructure.
Unlimited free storage is not an AWS benefit, as storage services such as Amazon S3 and EBS are billed based on the amount of data stored and retrieved. Complete control over physical infrastructure is not available to AWS customers, as AWS owns and manages all physical hardware, data centers, and networking equipment on the customer's behalf. Operating applications on behalf of customers is not an AWS benefit, as customers remain responsible for building, deploying, and managing their own applications under the shared responsibility model.

AWS 允许客户在几分钟而不是几周内配置资源，从而提高速度和敏捷性，并处理物理安全以及大多数数据和网络安全，以便客户可以专注于构建应用程序而不是管理基础设施。
无限免费存储并不是 AWS 的一项优势，因为 Amazon S3 和 EBS 等存储服务是根据存储和检索的数据量计费的。 AWS 客户无法完全控制物理基础设施，因为 AWS 代表客户拥有并管理所有物理硬件、数据中心和网络设备。代表客户操作应用程序并不是 AWS 的优势，因为客户仍然负责在共担责任模型下构建、部署和管理自己的应用程序。

AWS は、顧客がリソースを数週間ではなく数分でプロビジョニングできるようにすることで速度と俊敏性を高め、ほとんどのデータおよびネットワーク セキュリティとともに物理的セキュリティを処理するため、顧客はインフラストラクチャの管理ではなくアプリケーションの構築に集中できます。
Amazon S3 や EBS などのストレージ サービスは、保存および取得されるデータの量に基づいて料金が請求されるため、無制限の無料ストレージは AWS のメリットではありません。AWS は顧客に代わってすべての物理ハードウェア、データセンター、ネットワーク機器を所有および管理しているため、AWS の顧客は物理インフラストラクチャを完全に制御することはできません。顧客に代わってアプリケーションを運用することは AWS のメリットではありません。顧客は責任共有モデルに基づいて独自のアプリケーションの構築、デプロイ、管理に引き続き責任を負います。

---

## Question 28 · Domain 2 · Select 2

**EN** How can a customer increase security to AWS account logons?

**中** 客户如何提高 AWS 账户登录的安全性？

**日本語** 顧客はどのようにして AWS アカウントのログオンのセキュリティを強化できますか?

- **A.** Configure AWS Certificate Manager
  - 配置 AWS 证书管理器
  - AWS 証明書マネージャーの構成
- **B.** Enable Multi-Factor Authentication (MFA)
  - 启用多重身份验证 (MFA)
  - 多要素認証 (MFA) を有効にする
- **C.** Use Amazon Cognito to manage access
  - 使用 Amazon Cognito 来管理访问
  - Amazon Cognito を使用してアクセスを管理する
- **D.** Configure a strong password policy
  - 配置强密码策略
  - 強力なパスワード ポリシーを構成する
- **E.** Enable AWS Organizations
  - 启用 AWS Organizations
  - AWS Organizations を有効にする

**答案 / Answer: `B,D`**

Enabling MFA requires a second factor beyond the password to complete sign-in, and configuring a strong password policy enforces complexity, length, and rotation requirements. Both directly strengthen AWS account logon security.
AWS Certificate Manager provisions and manages SSL/TLS certificates for encrypting data in transit between applications and users, and has no role in controlling or securing account logon processes. Amazon Cognito manages user authentication and access for customer-facing applications through user pools and identity pools, and is designed for application-level user management rather than securing AWS account logons directly. AWS Organizations is an account management service for centrally governing and consolidating multiple AWS accounts, and does not itself provide logon security features for individual account access.

启用 MFA 需要密码之外的第二个因素才能完成登录，并且配置强密码策略会强制执行复杂性、长度和轮换要求。两者都直接加强了 AWS 账户登录的安全性。
AWS Certificate Manager 预置和管理 SSL/TLS 证书，用于加密应用程序和用户之间传输的数据，并且在控制或保护账户登录过程中不发挥作用。 Amazon Cognito 通过用户池和身份池管理面向客户的应用程序的用户身份验证和访问，专为应用程序级用户管理而设计，而不是直接保护 AWS 账户登录。 AWS Organizations 是一项用于集中管理和整合多个 AWS 账户的账户管理服务，其本身并不为个人账户访问提供登录安全功能。

MFA を有効にするには、サインインを完了するためにパスワード以外の 2 番目の要素が必要であり、強力なパスワード ポリシーを構成すると、複雑さ、長さ、ローテーションの要件が強制されます。どちらも AWS アカウントのログオン セキュリティを直接強化します。
AWS Certificate Manager は、アプリケーションとユーザーの間で転送されるデータを暗号化するための SSL/TLS 証明書をプロビジョニングおよび管理しますが、アカウントのログオンプロセスを制御または保護する役割はありません。Amazon Cognito は、ユーザー プールと ID プールを通じて顧客向けアプリケーションのユーザー認証とアクセスを管理し、AWS アカウントのログオンを直接保護するのではなく、アプリケーション レベルのユーザー管理を目的として設計されています。AWS Organizations は、複数の AWS アカウントを集中管理および統合するためのアカウント管理サービスであり、それ自体は個々のアカウント アクセスに対するログオン セキュリティ機能を提供しません。

---

## Question 29 · Domain 2

**EN** Which of the following AWS security features is associated with an EC2 instance and functions to filter incoming traffic requests?

**中** 以下哪些 AWS 安全功能与 EC2 实例和过滤传入流量请求的功能相关？

**日本語** 次の AWS セキュリティ機能のうち、EC2 インスタンスに関連付けられており、受信トラフィック リクエストをフィルタリングする機能はどれですか?

- **A.** AWS X-Ray
  - AWS X 射线
  - AWS X-Ray
- **B.** Network ACL
  - 网络访问控制列表
  - ネットワークACL
- **C.** Security Groups
  - 安全组
  - セキュリティグループ
- **D.** VPC Flow logs
  - VPC 流日志
  - VPC フローログ

**答案 / Answer: `C`**

Security groups act as a stateful virtual firewall directly associated with EC2 instances, evaluating and filtering inbound and outbound traffic based on protocol, port, and source or destination rules defined by the customer.
AWS X-Ray is an application tracing and debugging service that analyzes requests as they flow through distributed applications to identify performance bottlenecks and errors, and has no capability to filter or control network traffic to EC2 instances. Network ACLs are stateless firewalls that operate at the subnet level rather than the EC2 instance level, applying rules to all traffic entering or leaving a subnet without tracking connection state, and are not directly associated with individual instances. VPC Flow Logs capture metadata about the IP traffic flowing to and from network interfaces within a VPC, providing visibility for analysis and troubleshooting, but they record traffic information rather than filter or block incoming requests.

安全组充当与 EC2 实例直接关联的状态虚拟防火墙，根据客户定义的协议、端口以及源或目标规则评估和过滤入站和出站流量。
AWS X-Ray 是一项应用程序跟踪和调试服务，可在请求流经分布式应用程序时对其进行分析，以识别性能瓶颈和错误，并且无法过滤或控制流向 EC2 实例的网络流量。网络 ACL 是在子网级别而不是 EC2 实例级别运行的无状态防火墙，将规则应用于进入或离开子网的所有流量，而不跟踪连接状态，并且不与各个实例直接关联。 VPC 流日志捕获有关 VPC 内流入和流出网络接口的 IP 流量的元数据，为分析和故障排除提供可见性，但它们记录流量信息，而不是过滤或阻止传入请求。

セキュリティ グループは、EC2 インスタンスに直接関連付けられたステートフルな仮想ファイアウォールとして機能し、プロトコル、ポート、および顧客が定義した送信元または宛先のルールに基づいて受信トラフィックと送信トラフィックを評価およびフィルタリングします。
AWS X-Ray は、分散アプリケーションを通過するリクエストを分析してパフォーマンスのボトルネックやエラーを特定するアプリケーション トレースおよびデバッグ サービスですが、EC2 インスタンスへのネットワーク トラフィックをフィルタリングまたは制御する機能はありません。ネットワーク ACL は、EC2 インスタンス レベルではなくサブネット レベルで動作するステートレス ファイアウォールで、接続状態を追跡せずにサブネットに出入りするすべてのトラフィックにルールを適用し、個々のインスタンスに直接関連付けられません。VPC フロー ログは、VPC 内のネットワーク インターフェイスとの間で送受信される IP トラフィックに関するメタデータをキャプチャし、分析とトラブルシューティングのための可視性を提供しますが、受信リクエストをフィルターしたりブロックしたりするのではなく、トラフィック情報を記録します。

---

## Question 30 · Domain 2 · Select 2

**EN** In the AWS Shared responsibility Model, which of the following are the responsibility of the customer?

**中** 在 AWS 责任共担模型中，以下哪些是客户的责任？

**日本語** AWS 責任共有モデルでは、顧客の責任は次のうちどれですか?

- **A.** Disk disposal
  - 磁盘处置
  - ディスクの廃棄
- **B.** Controlling physical access to compute resources
  - 控制对计算资源的物理访问
  - コンピューティングリソースへの物理的アクセスの制御
- **C.** Patching the Network infrastructure
  - 修补网络基础设施
  - ネットワークインフラストラクチャにパッチを適用する
- **D.** Setting password complexity rules
  - 设置密码复杂度规则
  - パスワードの複雑さのルールを設定する
- **E.** Configuring network access rules
  - 配置网络访问规则
  - ネットワークアクセスルールの設定

**答案 / Answer: `D,E`**

Setting password complexity rules and configuring network access rules such as security groups and NACLs are both customer responsibilities, as customers control their own identity policies and network configuration within their AWS environment.
Disk disposal is AWS's responsibility, as AWS manages the secure decommissioning and destruction of physical storage hardware. Controlling physical access to compute resources is AWS's responsibility, as customers have no access to the underlying physical infrastructure. Patching the network infrastructure is AWS's responsibility, covering the managed networking layer beneath the customer's virtual network.

设置密码复杂性规则和配置网络访问规则（例如安全组和 NACL）都是客户的责任，因为客户在其 AWS 环境中控制自己的身份策略和网络配置。
磁盘处置是 AWS 的责任，因为 AWS 管理物理存储硬件的安全退役和销毁。控制对计算资源的物理访问是 AWS 的责任，因为客户无法访问底层物理基础设施。修补网络基础设施是 AWS 的责任，涵盖客户虚拟网络下的托管网络层。

顧客は AWS 環境内で独自のアイデンティティ ポリシーとネットワーク構成を制御するため、パスワードの複雑さのルールの設定と、セキュリティ グループや NACL などのネットワーク アクセス ルールの構成は、どちらも顧客の責任となります。
AWS は物理ストレージハードウェアの安全な廃止および破壊を管理するため、ディスクの廃棄は AWS の責任となります。顧客は基盤となる物理インフラストラクチャにアクセスできないため、コンピューティング リソースへの物理的アクセスの制御は AWS の責任です。ネットワークインフラストラクチャへのパッチ適用は AWS の責任であり、顧客の仮想ネットワークの下にあるマネージドネットワーク層をカバーします。

---

## Question 31 · Domain 3

**EN** What does Amazon Elastic Beanstalk provide?

**中** Amazon Elastic Beanstalk 提供什么？

**日本語** Amazon Elastic Beanstalk は何を提供しますか?

- **A.** A PaaS solution to automate application deployment
  - 用于自动化应用程序部署的 PaaS 解决方案
  - アプリケーションのデプロイメントを自動化する PaaS ソリューション
- **B.** A compute engine for Amazon ECS
  - Amazon ECS 的计算引擎
  - Amazon ECS のコンピューティング エンジン
- **C.** A scalable file storage solution for use with AWS and on-premises servers
  - 可与 AWS 和本地服务器配合使用的可扩展文件存储解决方案
  - AWS およびオンプレミスサーバーで使用するためのスケーラブルなファイルストレージソリューション
- **D.** A NoSQL database service
  - NoSQL 数据库服务
  - NoSQLデータベースサービス

**答案 / Answer: `A`**

AWS Elastic Beanstalk is a Platform as a Service offering that automatically handles deployment, capacity provisioning, load balancing, auto-scaling, and application health monitoring, allowing developers to upload their application code and have the platform manage the infrastructure.
Amazon ECS is the container orchestration service that runs Docker containers and is the compute engine for containerised workloads, but it is not an abstraction that automatically manages deployment and infrastructure for general applications in the way Beanstalk does. A scalable file storage solution describes Amazon EFS, which provides shared NFS storage for EC2 instances; Elastic Beanstalk is a deployment and management platform, not a storage service. A NoSQL database service describes Amazon DynamoDB, which provides fully managed key-value and document storage; Elastic Beanstalk is a deployment platform rather than a database.

AWS Elastic Beanstalk 是一种平台即服务产品，可自动处理部署、容量配置、负载平衡、自动扩展和应用程序运行状况监控，允许开发人员上传其应用程序代码并让平台管理基础设施。
Amazon ECS 是运行 Docker 容器的容器编排服务，也是容器化工作负载的计算引擎，但它并不是像 Beanstalk 那样自动管理一般应用程序的部署和基础设施的抽象。可扩展的文件存储解决方案描述了 Amazon EFS，它为 EC2 实例提供共享 NFS 存储； Elastic Beanstalk 是一个部署和管理平台，而不是存储服务。 NoSQL 数据库服务描述了 Amazon DynamoDB，它提供完全托管的键值和文档存储； Elastic Beanstalk 是一个部署平台而不是数据库。

AWS Elastic Beanstalk は、デプロイメント、容量プロビジョニング、負荷分散、自動スケーリング、およびアプリケーションの健全性モニタリングを自動的に処理するサービスとしてのプラットフォーム製品であり、開発者がアプリケーション コードをアップロードしてプラットフォームにインフラストラクチャを管理させることができます。
Amazon ECS は、Docker コンテナを実行するコンテナ オーケストレーション サービスであり、コンテナ化されたワークロードのコンピューティング エンジンですが、Beanstalk のように一般的なアプリケーションのデプロイメントとインフラストラクチャを自動的に管理する抽象化ではありません。スケーラブルなファイル ストレージ ソリューションでは、EC2 インスタンスに共有 NFS ストレージを提供する Amazon EFS について説明します。Elastic Beanstalk はデプロイメントおよび管理プラットフォームであり、ストレージ サービスではありません。NoSQL データベース サービスでは、完全に管理されたキーと値およびドキュメントのストレージを提供する Amazon DynamoDB について説明します。Elastic Beanstalk はデータベースではなくデプロイメント プラットフォームです。

---

## Question 32 · Domain 2

**EN** Which of the following is equivalent to a username and password and is used to authenticate your programmatic access to AWS services and APIs?

**中** 以下哪项相当于用户名和密码，用于验证您对 AWS 服务和 API 的编程访问？

**日本語** ユーザー名とパスワードに相当し、AWS のサービスと API へのプログラムによるアクセスを認証するために使用されるものは次のうちどれですか?

- **A.** Instance Password
  - 实例密码
  - インスタンスのパスワード
- **B.** Key pairs
  - 密钥对
  - キーペア
- **C.** Access Keys
  - 访问键
  - アクセスキー
- **D.** MFA
  - 艺术硕士
  - MFA

**答案 / Answer: `C`**

AWS Access Keys, consisting of an access key ID and a secret access key, are the credentials used to authenticate programmatic API calls, functioning like a username and password for AWS SDKs and CLI.
An instance password refers to the Windows administrator password generated for EC2 Windows instances to enable RDP access, which is a server login credential rather than an API authentication mechanism equivalent to a username and password. Key pairs are RSA public/private key combinations used to authenticate SSH connections to Linux EC2 instances, and while they serve an authentication purpose, they are for instance-level SSH access rather than AWS API and service authentication. MFA is an additional authentication factor added on top of primary credentials such as a username and password, requiring a one-time code from a device, and is a supplementary mechanism rather than a standalone credential pair equivalent to a username and password.

AWS 访问密钥由访问密钥 ID 和秘密访问密钥组成，是用于验证编程 API 调用的凭证，其功能类似于 AWS 开发工具包和 CLI 的用户名和密码。
实例密码是指为 EC2 Windows 实例启用 RDP 访问而生成的 Windows 管理员密码，它是服务器登录凭据，而不是相当于用户名和密码的 API 身份验证机制。密钥对是 RSA 公钥/私钥组合，用于验证与 Linux EC2 实例的 SSH 连接，虽然它们用于身份验证目的，但它们用于实例级 SSH 访问，而不是 AWS API 和服务身份验证。 MFA 是在用户名和密码等主要凭据之上添加的附加身份验证因素，需要设备提供一次性代码，并且是一种补充机制，而不是相当于用户名和密码的独立凭据对。

アクセス キー ID とシークレット アクセス キーで構成される AWS アクセス キーは、プログラムによる API 呼び出しの認証に使用される認証情報であり、AWS SDK および CLI のユーザー名とパスワードのように機能します。
インスタンスのパスワードは、RDP アクセスを有効にするために EC2 Windows インスタンス用に生成された Windows 管理者パスワードを指します。これは、ユーザー名とパスワードに相当する API 認証メカニズムではなく、サーバーのログイン資格情報です。キーペアは、Linux EC2 インスタンスへの SSH 接続を認証するために使用される RSA 公開キーと秘密キーの組み合わせであり、認証の目的を果たしますが、AWS API やサービス認証ではなく、インスタンスレベルの SSH アクセスです。MFA は、ユーザー名やパスワードなどのプライマリ資格情報に加えて追加される追加の認証要素であり、デバイスからのワンタイム コードを必要とし、ユーザー名とパスワードに相当するスタンドアロンの資格情報ペアではなく補助的なメカニズムです。

---

## Question 33 · Domain 2 · Select 2

**EN** What credential components are required to gain programmatic access to an AWS account?

**中** 需要哪些凭证组件才能以编程方式访问 AWS 账户？

**日本語** AWS アカウントにプログラムでアクセスするにはどのような認証コンポーネントが必要ですか?

- **A.** An access key ID
  - 访问密钥 ID
  - アクセスキーID
- **B.** A primary key
  - 主键
  - 主キー
- **C.** A secret access key
  - 秘密访问密钥
  - 秘密のアクセスキー
- **D.** A user ID
  - 用户 ID
  - ユーザーID
- **E.** A secondary key
  - 辅助钥匙
  - 二次キー

**答案 / Answer: `A,C`**

Programmatic AWS access requires an access key ID to identify the calling entity and a secret access key to sign requests, together authenticating API calls made via the CLI or SDKs.
A primary key is not a valid AWS IAM credential component; it is a database term for a unique row identifier and has no role in AWS programmatic authentication. A user ID is an internal AWS identifier assigned to IAM users for tracking purposes but cannot be supplied as a credential to authenticate programmatic API requests. A secondary key is not a recognized AWS IAM credential type, and no such concept exists in the AWS authentication model for programmatic access.

编程式 AWS 访问需要一个访问密钥 ID 来识别调用实体，还需要一个秘密访问密钥来签署请求，同时验证通过 CLI 或 SDK 进行的 API 调用。
主键不是有效的 AWS IAM 凭证组件；它是唯一行标识符的数据库术语，在 AWS 编程身份验证中没有作用。用户 ID 是分配给 IAM 用户用于跟踪目的的内部 AWS 标识符，但不能作为凭证提供以验证编程 API 请求。辅助密钥不是公认的 AWS IAM 凭证类型，并且用于编程访问的 AWS 身份验证模型中不存在此类概念。

プログラムによる AWS アクセスには、呼び出し側エンティティを識別するためのアクセス キー ID と、リクエストに署名するためのシークレット アクセス キーが必要で、これらを合わせて CLI または SDK 経由で行われた API 呼び出しを認証します。
主キーは有効な AWS IAM 資格情報コンポーネントではありません。これは一意の行識別子を表すデータベース用語であり、AWS プログラム認証では何の役割も持ちません。ユーザー ID は、追跡目的で IAM ユーザーに割り当てられる内部 AWS 識別子ですが、プログラムによる API リクエストを認証するための認証情報として指定することはできません。セカンダリキーは認識されている AWS IAM 認証情報タイプではなく、プログラムによるアクセスの AWS 認証モデルにはそのような概念は存在しません。

---

## Question 34 · Domain 4

**EN** What does AWS provide to deploy popular technologies such as IBM MQ on AWS with the least amount of effort and time?

**中** AWS 提供什么来以最少的精力和时间在 AWS 上部署 IBM MQ 等流行技术？

**日本語** IBM MQ などの一般的なテクノロジーを最小限の労力と時間で AWS にデプロイするために、AWS は何を提供しますか?

- **A.** Amazon Aurora
  - Amazon Aurora
  - Amazon Aurora
- **B.** Amazon CloudWatch
  - Amazon CloudWatch
  - Amazon CloudWatch
- **C.** AWS Quick Start reference deployments
  - AWS 快速入门参考部署
  - AWS クイックスタートリファレンスデプロイメント
- **D.** AWS OpsWorks
  - AWS OpsWorks
  - AWS OpsWorks

**答案 / Answer: `C`**

AWS Quick Start reference deployments provide automated gold-standard templates that deploy popular IT solutions on AWS in minutes, giving administrators a fast path to production-ready environments built on AWS best practices.
Amazon Aurora is a fully managed relational database compatible with MySQL and PostgreSQL, and is a database service with no capability to deploy or provision third-party technologies or solutions. Amazon CloudWatch collects metrics, logs, and event data from AWS services and resources to provide operational monitoring and alerting, and is a monitoring service with no deployment or provisioning capability. AWS OpsWorks (deprecated) was a configuration management service that used Chef and Puppet to automate server configuration, and while it could automate some infrastructure tasks it is not a pre-built deployment resource for rapidly deploying popular third-party technologies with minimal effort. Note: AWS OpsWorks was deprecated in 2024.

AWS 快速入门参考部署提供了自动化的黄金标准模板，可在几分钟内在 AWS 上部署流行的 IT 解决方案，从而为管理员提供一条快速途径，实现基于 AWS 最佳实践构建的生产就绪环境。
Amazon Aurora 是完全托管的关系型数据库，兼容 MySQL 和 PostgreSQL，是一种数据库服务，无法部署或提供第三方技术或解决方案。 Amazon CloudWatch 从 AWS 服务和资源收集指标、日志和事件数据以提供操作监控和警报，并且是一种没有部署或预置功能的监控服务。 AWS OpsWorks（已弃用）是一种配置管理服务，它使用 Chef 和 Puppet 来自动执行服务器配置，虽然它可以自动执行某些基础设施任务，但它并不是一种预构建的部署资源，无法轻松快速部署流行的第三方技术。注意：AWS OpsWorks 已于 2024 年弃用。

AWS クイック スタート リファレンス デプロイメントは、人気の IT ソリューションを AWS に数分でデプロイする自動化されたゴールドスタンダード テンプレートを提供し、管理者に AWS のベスト プラクティスに基づいて構築された本番環境への迅速なパスを提供します。
Amazon Aurora は、MySQL および PostgreSQL と互換性のあるフルマネージド リレーショナル データベースであり、サードパーティのテクノロジやソリューションを導入またはプロビジョニングする機能を持たないデータベース サービスです。Amazon CloudWatch は、AWS のサービスとリソースからメトリクス、ログ、イベント データを収集して、運用の監視とアラートを提供します。これは、デプロイメントやプロビジョニングの機能を持たない監視サービスです。AWS OpsWorks (非推奨) は、Chef と Puppet を使用してサーバー構成を自動化する構成管理サービスであり、一部のインフラストラクチャタスクを自動化できますが、最小限の労力で人気のサードパーティテクノロジーを迅速にデプロイするための事前構築されたデプロイメントリソースではありません。注: AWS OpsWorks は 2024 年に非推奨になりました。

---

## Question 35 · Domain 3

**EN** A customer needs to run a MySQL database that easily scales. Which AWS service should they use?

**中** 客户需要运行易于扩展的 MySQL 数据库。他们应该使用哪种 AWS 服务？

**日本語** 顧客は、簡単に拡張できる MySQL データベースを実行する必要があります。どの AWS サービスを使用する必要がありますか?

- **A.** Amazon Aurora
  - Amazon Aurora
  - Amazon Aurora
- **B.** Amazon Redshift
  - Amazon Redshift
  - Amazon Redshift
- **C.** Amazon DynamoDB
  - Amazon DynamoDB
  - Amazon DynamoDB
- **D.** Amazon ElastiCache
  - Amazon ElastiCache
  - Amazon ElastiCache

**答案 / Answer: `A`**

Amazon Aurora is a MySQL and PostgreSQL-compatible relational database built for the cloud that automatically scales storage and can handle high throughput, making it the purpose-built choice for a MySQL workload that needs to scale easily.
Amazon Redshift is a managed data warehouse service optimized for running analytical SQL queries across large datasets, and is not a relational database engine compatible with MySQL workloads. Amazon DynamoDB is a fully managed NoSQL key-value and document database, and does not support MySQL or relational data models. Amazon ElastiCache is a managed in-memory caching service designed to accelerate application performance by storing frequently accessed data in memory, and is not a relational database capable of running MySQL workloads.

Amazon Aurora 是一款专为云构建的与 MySQL 和 PostgreSQL 兼容的关系数据库，可自动扩展存储并可处理高吞吐量，使其成为需要轻松扩展的 MySQL 工作负载的专用选择。
Amazon Redshift 是一种托管数据仓库服务，针对跨大型数据集运行分析 SQL 查询进行了优化，并且不是与 MySQL 工作负载兼容的关系数据库引擎。 Amazon DynamoDB 是完全托管的 NoSQL 键值和文档数据库，不支持 MySQL 或关系数据模型。 Amazon ElastiCache 是一种托管内存缓存服务，旨在通过将频繁访问的数据存储在内存中来提高应用程序性能，并且不是能够运行 MySQL 工作负载的关系数据库。

Amazon Aurora は、クラウド向けに構築された MySQL および PostgreSQL 互換のリレーショナル データベースで、ストレージを自動的に拡張し、高スループットを処理できるため、簡単に拡張する必要がある MySQL ワークロード専用の選択肢となります。
Amazon Redshift は、大規模なデータセット全体で分析 SQL クエリを実行するために最適化されたマネージド データ ウェアハウス サービスであり、MySQL ワークロードと互換性のあるリレーショナル データベース エンジンではありません。Amazon DynamoDB は、フルマネージドの NoSQL キー/値およびドキュメント データベースであり、MySQL またはリレーショナル データ モデルをサポートしません。Amazon ElastiCache は、頻繁にアクセスされるデータをメモリに保存することでアプリケーションのパフォーマンスを高速化するように設計されたマネージド インメモリ キャッシュ サービスであり、MySQL ワークロードを実行できるリレーショナル データベースではありません。

---

## Question 36 · Domain 2 · Select 2

**EN** Under the shared responsibility model, which of the following tasks are the responsibility of the AWS customer?

**中** 在共担责任模型下，以下哪些任务是 AWS 客户的责任？

**日本語** 責任共有モデルでは、次のタスクのうち AWS 顧客の責任はどれですか?

- **A.** Ensuring that application data is encrypted at rest
  - 确保应用程序数据静态加密
  - 保存中のアプリケーション データが確実に暗号化されるようにする
- **B.** Ensuring that AWS NTP servers are set to the correct time
  - 确保 AWS NTP 服务器设置为正确的时间
  - AWS NTP サーバーが正しい時刻に設定されていることを確認する
- **C.** Ensuring that users have received security training in the use of AWS services
  - 确保用户接受过使用 AWS 服务的安全培训
  - ユーザーが AWS サービスの使用に関するセキュリティトレーニングを受けていることを確認する
- **D.** Ensuring that access to data centers is restricted
  - 确保对数据中心的访问受到限制
  - データセンターへのアクセスを確実に制限する
- **E.** Ensuring that hardware is disposed of properly
  - 确保正确处置硬件
  - ハードウェアが適切に廃棄されるようにする

**答案 / Answer: `A,C`**

Customers are responsible for encrypting their application data at rest and for training their users on proper security practices when using AWS services, both sitting on the customer side of the model.
Ensuring that AWS NTP servers are set to the correct time is entirely AWS's responsibility, as customers have no access to or control over the underlying infrastructure components that provide time synchronisation. Ensuring that access to data centers is restricted is entirely AWS's responsibility, covering physical access controls, surveillance, and protection of the facilities that house AWS infrastructure. Ensuring that hardware is disposed of properly is entirely AWS's responsibility, as customers never take possession of physical hardware and AWS manages all end-of-life processes for its own equipment.

客户负责对其静态应用程序数据进行加密，并在使用 AWS 服务时对用户进行适当的安全实践培训，两者都位于模型的客户端。
确保 AWS NTP 服务器设置为正确的时间完全是 AWS 的责任，因为客户无法访问或控制提供时间同步的底层基础设施组件。确保对数据中心的访问受到限制完全是 AWS 的责任，包括对 AWS 基础设施所在设施的物理访问控制、监视和保护。确保正确处置硬件完全是 AWS 的责任，因为客户永远不会拥有物理硬件，并且 AWS 管理自己设备的所有报废流程。

お客様は、保存中のアプリケーションデータを暗号化し、AWS サービスを使用する際に適切なセキュリティ慣行についてユーザーをトレーニングする責任があり、どちらもモデルの顧客側にあります。
顧客は時刻同期を提供する基盤となるインフラストラクチャコンポーネントにアクセスしたり制御したりできないため、AWS NTP サーバーが正しい時刻に設定されていることを確認することは完全に AWS の責任です。データセンターへのアクセスを確実に制限することは、物理的なアクセス制御、監視、AWS インフラストラクチャを収容する施設の保護を含め、完全に AWS の責任です。顧客が物理的なハードウェアを所有することはなく、AWS は自社の機器のすべての耐用年数終了プロセスを管理するため、ハードウェアが適切に廃棄されることを保証することは完全に AWS の責任です。

---

## Question 37 · Domain 3

**EN** Your company is designing a new application that will store and retrieve photos and videos. Which of the following services should you recommend as the underlying storage mechanism?

**中** 您的公司正在设计一个新的应用程序，用于存储和检索照片和视频。您应该推荐以下哪些服务作为底层存储机制？

**日本語** あなたの会社は、写真とビデオを保存および取得する新しいアプリケーションを設計しています。基盤となるストレージ メカニズムとして推奨するサービスは次のうちどれですか?

- **A.** Amazon EBS
  - 亚马逊 EBS
  - アマゾンEBS
- **B.** Amazon SQS
  - Amazon SQS
  - Amazon SQS
- **C.** Amazon S3
  - Amazon S3
  - Amazon S3
- **D.** Amazon EC2 Instance Store
  - Amazon EC2 实例存储
  - Amazon EC2 インスタンス ストア

**答案 / Answer: `C`**

Amazon S3 is designed for storing and retrieving any amount of unstructured data, including photos and videos, with high durability and scalability, making it the purpose-built object storage solution for this use case.
Amazon EBS provides persistent block storage volumes that attach directly to EC2 instances, and is designed for low-latency disk access rather than storing and serving large volumes of unstructured media objects. Amazon SQS is a fully managed message queuing service for decoupling application components, and is a messaging service with no capability to store or retrieve files. Amazon EC2 Instance Store provides temporary block storage physically attached to the host machine running an EC2 instance, and is ephemeral storage that is lost when the instance stops, making it entirely unsuitable for persistent photo and video storage.

Amazon S3 专为存储和检索任意数量的非结构化数据（包括照片和视频）而设计，具有高耐用性和可扩展性，使其成为为此用例专门构建的对象存储解决方案。
Amazon EBS 提供直接连接到 EC2 实例的持久块存储卷，专为低延迟磁盘访问而设计，而不是存储和服务大量非结构化媒体对象。 Amazon SQS 是一种完全托管的消息队列服务，用于解耦应用程序组件，并且是一种不具备存储或检索文件功能的消息传递服务。 Amazon EC2 实例存储提供物理连接到运行 EC2 实例的主机的临时块存储，并且是临时存储，当实例停止时会丢失，因此完全不适合持久照片和视频存储。

Amazon S3 は、写真やビデオを含むあらゆる量の非構造化データを高い耐久性と拡張性で保存および取得できるように設計されており、このユースケース専用のオブジェクト ストレージ ソリューションとなります。
Amazon EBS は、EC2 インスタンスに直接接続する永続的なブロック ストレージ ボリュームを提供し、大量の非構造化メディア オブジェクトを保存して提供するのではなく、低レイテンシーのディスク アクセス向けに設計されています。Amazon SQS は、アプリケーション コンポーネントを分離するためのフルマネージド メッセージ キュー サービスであり、ファイルを保存または取得する機能を持たないメッセージング サービスです。Amazon EC2 インスタンス ストアは、EC2 インスタンスを実行しているホスト マシンに物理的に接続された一時的なブロック ストレージを提供します。これはインスタンスが停止すると失われる一時的なストレージであるため、永続的な写真やビデオのストレージにはまったく適していません。

---

## Question 38 · Domain 1

**EN** How can the AWS Cloud increase user workforce productivity after migration from an on-premises data center?

**中** 从本地数据中心迁移后，AWS 云如何提高用户的员工生产力？

**日本語** オンプレミスのデータセンターから移行した後、AWS クラウドはユーザーの従業員の生産性をどのように向上させることができますか?

- **A.** Users do not have to wait for infrastructure provisioning
  - 用户无需等待基础设施配置
  - ユーザーはインフラストラクチャのプロビジョニングを待つ必要はありません
- **B.** The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure
  - AWS 云基础设施比本地数据中心基础设施快得多
  - AWS クラウド インフラストラクチャは、オンプレミスのデータセンター インフラストラクチャよりもはるかに高速です
- **C.** AWS takes over application configuration management on behalf of users
  - AWS 代表用户接管应用程序配置管理
  - AWS がユーザーに代わってアプリケーション構成管理を引き継ぎます
- **D.** Users do not need to address security and compliance issues
  - 用户无需解决安全和合规问题
  - ユーザーはセキュリティとコンプライアンスの問題に対処する必要がありません

**答案 / Answer: `A`**

With AWS, developers and engineers can self-provision infrastructure in minutes through the console or APIs, eliminating the waiting time associated with traditional hardware procurement and setup.
The AWS Cloud infrastructure is much faster than an on-premises data center infrastructure is misleading. The productivity gain comes from removing provisioning delays, not from raw infrastructure speed. AWS takes over application configuration management on behalf of users is false. Application configuration remains the customer's responsibility under the Shared Responsibility Model. Users do not need to address security and compliance issues is false. Customers remain responsible for security in the cloud, including their applications, data, and access controls.

借助 AWS，开发人员和工程师可以通过控制台或 API 在几分钟内自行配置基础设施，从而消除与传统硬件采购和设置相关的等待时间。
AWS 云基础设施比本地数据中心基础设施快得多，这是一种误导。生产力的提高来自于消除配置延迟，而不是来自原始基础设施速度。 AWS 代表用户接管应用程序配置管理是错误的。在责任共担模型下，应用程序配置仍然是客户的责任。用户不需要解决安全性和合规性问题是错误的。客户仍然对云中的安全负责，包括其应用程序、数据和访问控制。

AWS を使用すると、開発者やエンジニアはコンソールや API を介して数分でインフラストラクチャをセルフプロビジョニングできるため、従来のハードウェアの調達やセットアップに伴う待ち時間がなくなりました。
AWS クラウド インフラストラクチャは、オンプレミスのデータセンター インフラストラクチャよりもはるかに高速です。誤解を招く恐れがあります。生産性の向上は、インフラストラクチャの速度によるものではなく、プロビジョニングの遅延を取り除くことによってもたらされます。AWS がユーザーに代わってアプリケーション構成管理を引き継ぐというのは誤りです。責任共有モデルに基づき、アプリケーションの構成は引き続きお客様の責任となります。ユーザーがセキュリティやコンプライアンスの問題に対処する必要はないというのは誤りです。お客様は、アプリケーション、データ、アクセス制御を含むクラウド内のセキュリティに対して引き続き責任を負います。

---

## Question 39 · Domain 2

**EN** You have AWS Basic support, and you have discovered that some AWS resources are being used maliciously, and those resources could potentially compromise your data. What should you do?

**中** 您拥有 AWS 基本支持，并且发现某些 AWS 资源被恶意使用，这些资源可能会损害您的数据。你应该做什么？

**日本語** あなたは AWS Basic サポートを受けており、一部の AWS リソースが悪意を持って使用されており、それらのリソースがデータを侵害する可能性があることを発見しました。どうすればいいでしょうか？

- **A.** Contact the AWS Customer Service team
  - 联系 AWS 客户服务团队
  - AWS カスタマーサービスチームにお問い合わせください
- **B.** Contact the AWS Abuse Team
  - 联系 AWS 滥用团队
  - AWS 不正使用チームに連絡する
- **C.** Contact the AWS Concierge team
  - 联系 AWS 礼宾团队
  - AWS コンシェルジュ チームにお問い合わせください
- **D.** Contact the AWS Security team
  - 联系 AWS 安全团队
  - AWS セキュリティチームにお問い合わせください

**答案 / Answer: `B`**

The AWS Abuse Team handles reports of AWS infrastructure being used for malicious activity such as hacking, spam, or unauthorised use, and this channel is available to all customers regardless of their support tier.
The AWS Customer Service team handles general account and billing enquiries, and is not the designated contact for reporting malicious use of AWS infrastructure. The AWS Concierge team is a dedicated support resource available exclusively to Enterprise support plan customers for billing and account assistance, and does not handle abuse or malicious activity reports. The AWS Security team manages AWS's own internal security posture and vulnerability disclosure program, and is not the correct channel for customers to report malicious use of AWS resources within their own accounts.

AWS 滥用团队负责处理有关 AWS 基础设施被用于恶意活动（例如黑客攻击、垃圾邮件或未经授权的使用）的报告，并且所有客户都可以使用此渠道，无论其支持级别如何。
AWS 客户服务团队负责处理一般账户和账单查询，并且不是报告恶意使用 AWS 基础设施的指定联系人。 AWS Concierge 团队是专门为企业支持计划客户提供计费和账户协助的专用支持资源，并且不处理滥用或恶意活动报告。 AWS 安全团队负责管理 AWS 自己的内部安全状况和漏洞披露计划，并不是客户举报其账户内恶意使用 AWS 资源的正确渠道。

AWS 不正使用チームは、AWS インフラストラクチャがハッキング、スパム、不正使用などの悪意のある活動に使用されているという報告を処理します。このチャネルはサポート層に関係なく、すべての顧客が利用できます。
AWS カスタマー サービス チームは一般的なアカウントおよび請求に関する問い合わせを処理しますが、AWS インフラストラクチャの悪意のある使用を報告するための指定連絡先ではありません。AWS コンシェルジュ チームは、エンタープライズ サポート プランの顧客のみが請求やアカウントのサポートを受けることができる専用のサポート リソースであり、不正行為や悪意のあるアクティビティのレポートには対応しません。AWS セキュリティ チームは、AWS 独自の内部セキュリティ体制と脆弱性開示プログラムを管理していますが、顧客が自分のアカウント内で AWS リソースの悪意のある使用を報告するための正しいチャネルではありません。

---

## Question 40 · Domain 4

**EN** Which is the MINIMUM AWS Support plan that allows for one-hour target response time for support cases?

**中** 哪一个 MINIMUM AWS Support 计划可以为支持案例提供一小时的目标响应时间？

**日本語** サポート ケースの目標応答時間を 1 時間にすることができる最小 AWS Support プランはどれですか?

- **A.** Enterprise
  - 企业
  - 企業
- **B.** Business
  - 商业
  - 仕事
- **C.** Developer
  - 开发商
  - 開発者
- **D.** Basic
  - 基本的
  - 基本

**答案 / Answer: `B`**

AWS Business Support guarantees a one-hour response time for production system-down cases and provides 24/7 phone, email, and chat access. Developer Support offers business-hours email only; Basic has no case support; Enterprise offers faster response but at higher cost.
Enterprise Support provides faster response times including a 15-minute SLA for business-critical system failures, and also meets the one-hour production system-down SLA, but it is a higher-cost plan than Business Support and therefore not the minimum required. Developer Support provides business-hours email access to Cloud Support Engineers with response times measured in hours rather than one hour, and does not include 24/7 access or a one-hour production system-down SLA. Basic Support provides access to documentation and the seven core Trusted Advisor checks but includes no technical case support and no defined response time SLAs.

AWS 业务支持保证对生产系统停机案例的一小时响应时间，并提供 24/7 电话、电子邮件和聊天访问。开发者支持仅在工作时间提供电子邮件；基本没有案例支持；企业提供更快的响应，但成本更高。
企业支持提供更快的响应时间，包括针对关键业务系统故障的 15 分钟 SLA，并且还满足一小时生产系统停机 SLA，但它是比业务支持成本更高的计划，因此不是最低要求。开发人员支持为云支持工程师提供工作时间电子邮件访问，响应时间以小时而不是一小时为单位，并且不包括 24/7 访问或一小时生产系统停机 SLA。基本支持提供对文档和七个核心 Trusted Advisor 检查的访问，但不包括技术案例支持，也没有定义的响应时间 SLA。

AWS ビジネスサポートは、実稼働システムがダウンした場合の 1 時間の応答時間を保証し、24 時間年中無休の電話、メール、チャットへのアクセスを提供します。開発者サポートは営業時間内の電子メールのみを提供します。Basic では大文字と小文字がサポートされません。Enterprise はより迅速な応答を提供しますが、コストは高くなります。
エンタープライズ サポートは、ビジネス クリティカルなシステム障害に対する 15 分の SLA を含む、より速い応答時間を提供し、実稼働システム ダウン時の 1 時間の SLA も満たしていますが、ビジネス サポートよりも高コストのプランであるため、最低限必要なものではありません。開発者サポートでは、クラウド サポート エンジニアへの営業時間内の電子メール アクセスが提供され、応答時間は 1 時間ではなく時間単位で測定されます。24 時間年中無休のアクセスや 1 時間の実稼働システム ダウン SLA は含まれません。基本サポートでは、ドキュメントと 7 つのコア Trusted Advisor チェックへのアクセスが提供されますが、技術的なケースのサポートや定義された応答時間の SLA は含まれません。

---

## Question 41 · Domain 3

**EN** What is the lowest-cost, durable storage option for retaining database backups for immediate retrieval?

**中** 用于保留数据库备份以便立即检索的成本最低、持久的存储选项是什么？

**日本語** すぐに取得できるようにデータベースのバックアップを保持するための、最も低コストで耐久性のあるストレージ オプションは何ですか?

- **A.** Amazon S3
  - Amazon S3
  - Amazon S3
- **B.** Amazon S3 Glacier Flexible Retrieval
  - Amazon S3 冰川灵活检索
  - Amazon S3 氷河の柔軟な取得
- **C.** Amazon EBS
  - 亚马逊 EBS
  - アマゾンEBS
- **D.** Amazon EC2 Instance Store
  - Amazon EC2 实例存储
  - Amazon EC2 インスタンス ストア

**答案 / Answer: `A`**

Amazon S3 Standard provides durable, highly available object storage with immediate millisecond retrieval, and is more cost-effective than EBS for backup storage while meeting the immediate retrieval requirement.
Amazon S3 Glacier Flexible Retrieval is designed for long-term archival storage at very low cost, and retrieval takes from minutes to hours, making it unsuitable for backups that require immediate access. Amazon EBS provides persistent block storage volumes attached directly to EC2 instances for low-latency disk access, and is significantly more expensive per gigabyte than S3 for storing backup data. Amazon EC2 Instance Store provides temporary block storage physically attached to the host machine, and is ephemeral storage that is lost when the instance stops, making it entirely unsuitable for durable backup storage.

Amazon S3 标准版提供持久、高可用的对象存储，毫秒级即时检索，在满足即时检索需求的同时，备份存储比 EBS 更具成本效益。
Amazon S3 Glacier 灵活检索专为以非常低的成本进行长期存档存储而设计，检索时间从几分钟到几小时不等，因此不适合需要立即访问的备份。 Amazon EBS 提供直接附加到 EC2 实例的持久块存储卷以实现低延迟磁盘访问，并且每 GB 的成本比存储备份数据的 S3 贵得多。 Amazon EC2 实例存储提供物理连接到主机的临时块存储，并且是临时存储，当实例停止时就会丢失，因此完全不适合持久备份存储。

Amazon S3 Standard は、ミリ秒単位の即時取得を備えた耐久性と可用性の高いオブジェクト ストレージを提供し、即時取得の要件を満たしながら、バックアップ ストレージとして EBS よりもコスト効率が高くなります。
Amazon S3 Glacier Flexible Retrieval は、非常に低コストで長期アーカイブ ストレージを行うために設計されており、取得には数分から数時間かかるため、即時アクセスが必要なバックアップには適していません。Amazon EBS は、低レイテンシのディスク アクセスのために EC2 インスタンスに直接接続された永続的なブロック ストレージ ボリュームを提供しますが、バックアップ データの保存には S3 よりもギガバイトあたりのコストが大幅に高くなります。Amazon EC2 インスタンス ストアは、ホスト マシンに物理的に接続された一時的なブロック ストレージを提供します。これはインスタンスが停止すると失われる一時的なストレージであるため、耐久性のあるバックアップ ストレージにはまったく適していません。

---

## Question 42 · Domain 3 · Select 2

**EN** Which AWS services can be used to improve the performance of a global application and reduce latency for its users?

**中** 哪些 AWS 服务可用于提高全球应用程序的性能并减少用户的延迟？

**日本語** グローバルアプリケーションのパフォーマンスを向上させ、ユーザーのレイテンシーを短縮するために使用できる AWS のサービスはどれですか?

- **A.** AWS KMS
  - AWS KMS
  - AWS KMS
- **B.** AWS Global Accelerator
  - AWS 全球加速器
  - AWS グローバルアクセラレーター
- **C.** AWS Direct Connect
  - AWS Direct Connect
  - AWS Direct Connect
- **D.** AWS Glue
  - AWS Glue
  - AWS Glue
- **E.** Amazon CloudFront
  - Amazon CloudFront
  - Amazon CloudFront

**答案 / Answer: `B,E`**

AWS Global Accelerator improves global application performance by routing user traffic through the AWS private backbone network to the nearest healthy endpoint, reducing internet latency, and Amazon CloudFront caches and serves content from edge locations worldwide, bringing content closer to users and reducing latency for global audiences.
AWS KMS is an encryption key management service for creating and controlling cryptographic keys used to protect data, and has no capability to improve application performance or reduce latency. AWS Direct Connect establishes a dedicated private network connection between on-premises infrastructure and AWS, and is designed for hybrid connectivity rather than improving performance for global end users. AWS Glue is a managed ETL service for discovering, preparing, and transforming data for analytics workloads, and is a data integration service with no application performance or latency capability.

AWS Global Accelerator 通过 AWS 私有骨干网络将用户流量路由到最近的健康端点，减少互联网延迟，从而提高全球应用程序性能，而 Amazon CloudFront 缓存并提供来自全球边缘站点的内容，使内容更贴近用户并减少全球受众的延迟。
AWS KMS 是一种加密密钥管理服务，用于创建和控制用于保护数据的加密密钥，并且无法提高应用程序性能或减少延迟。 AWS Direct Connect 在本地基础设施和 AWS 之间建立专用的专用网络连接，专为混合连接而设计，而不是为全球最终用户提高性能。 AWS Glue 是一种托管 ETL 服务，用于发现、准备和转换分析工作负载的数据，并且是一种不具有应用程序性能或延迟功能的数据集成服务。

AWS Global Accelerator は、AWS プライベート バックボーン ネットワークを介してユーザー トラフィックを最も近い正常なエンドポイントにルーティングすることでグローバル アプリケーションのパフォーマンスを向上させ、インターネットのレイテンシーを削減します。また、Amazon CloudFront は世界中のエッジ ロケーションからコンテンツをキャッシュして提供し、コンテンツをユーザーに近づけ、世界中の視聴者のレイテンシーを削減します。
AWS KMS は、データの保護に使用される暗号キーを作成および制御するための暗号キー管理サービスであり、アプリケーションのパフォーマンスを向上させたり、遅延を短縮したりする機能はありません。AWS Direct Connect は、オンプレミスのインフラストラクチャと AWS の間に専用のプライベート ネットワーク接続を確立し、グローバル エンド ユーザーのパフォーマンスを向上させるのではなく、ハイブリッド接続向けに設計されています。AWS Glue は、分析ワークロードのデータを検出、準備、変換するためのマネージド ETL サービスであり、アプリケーションのパフォーマンスや待機時間の機能を持たないデータ統合サービスです。

---

## Question 43 · Domain 4

**EN** How should a customer forecast the future costs for running a new web application?

**中** 客户应如何预测运行新 Web 应用程序的未来成本？

**日本語** 顧客は新しい Web アプリケーションの実行にかかる将来のコストをどのように予測すべきでしょうか?

- **A.** Amazon Aurora Backtrack
  - Amazon Aurora 原路返回
  - Amazon Aurora バックトラック
- **B.** Amazon CloudWatch Billing Alarms
  - Amazon CloudWatch 计费报警器
  - Amazon CloudWatch 請求アラーム
- **C.** AWS Pricing Calculator
  - AWS Pricing Calculator
  - AWS Pricing Calculator
- **D.** AWS Cost and Usage Report
  - AWS 成本和使用情况报告
  - AWS のコストと使用状況レポート

**答案 / Answer: `C`**

The AWS Pricing Calculator allows customers to model AWS service configurations and estimate future costs before deploying them, making it the purpose-built tool for forecasting the cost of a new application.
Amazon Aurora Backtrack is a feature that allows an Aurora database to be rewound to a previous point in time without restoring from a backup, and is a database recovery feature with no connection to cost forecasting. Amazon CloudWatch Billing Alarms trigger notifications when actual AWS spending exceeds a defined threshold, and are a cost alerting tool for active workloads rather than a forecasting tool for new applications. AWS Cost and Usage Reports provide the most detailed breakdown of actual AWS charges already incurred, and are a historical cost analysis tool rather than a future cost estimation service.

AWS Pricing Calculator 允许客户对 AWS 服务配置进行建模并在部署之前估算未来成本，使其成为预测新应用程序成本的专用工具。
Amazon Aurora 回溯功能允许 Aurora 数据库回退到之前的时间点，而无需从备份进行恢复，并且是一种与成本预测无关的数据库恢复功能。当实际 AWS 支出超过定义的阈值时，Amazon CloudWatch 计费警报会触发通知，并且是活动工作负载的成本警报工具，而不是新应用程序的预测工具。 AWS 成本和使用情况报告提供了已产生的实际 AWS 费用的最详细明细，并且是历史成本分析工具，而不是未来成本估算服务。

AWS Pricing Calculator を使用すると、顧客は AWS のサービス構成をモデル化し、展開する前に将来のコストを見積もることができるため、新しいアプリケーションのコストを予測するための専用ツールになります。
Amazon Aurora バックトラックは、Aurora データベースをバックアップから復元せずに前の時点に巻き戻すことができる機能であり、コスト予測とは関係のないデータベース回復機能です。Amazon CloudWatch 請求アラームは、AWS の実際の支出が定義されたしきい値を超えたときに通知をトリガーします。これは、新しいアプリケーションの予測ツールではなく、アクティブなワークロードのコスト アラート ツールです。AWS のコストおよび使用状況レポートは、すでに発生した実際の AWS 料金の最も詳細な内訳を提供し、将来のコスト見積もりサービスではなく、過去のコスト分析ツールです。

---

## Question 44 · Domain 4

**EN** Which Amazon EC2 instance pricing model can provide discounts of up to 90%?

**中** 哪种 Amazon EC2 实例定价模型可以提供高达 90%的折扣？

**日本語** 最大 90% の割引を提供できる Amazon EC2 インスタンスの価格モデルはどれですか?

- **A.** Reserved Instances
  - 预留实例
  - リザーブドインスタンス
- **B.** On-Demand
  - 一经请求
  - オンデマンド
- **C.** Dedicated Hosts
  - 专用主机
  - 専用ホスト
- **D.** Spot Instances
  - 现货实例
  - スポットインスタンス

**答案 / Answer: `D`**

Spot Instances use spare AWS capacity and can offer discounts of up to 90% compared to On-Demand prices. Reserved Instances offer up to approximately 72% discount; On-Demand is the baseline price; Dedicated Hosts typically cost more than standard options.
Reserved Instances offer savings of up to approximately 72% compared to On-Demand pricing in exchange for a 1 or 3-year commitment, which is a significant discount but substantially less than the up to 90% available through Spot Instances. On-Demand Instances are charged at the standard AWS rate with no discount, as they are the baseline pricing model against which all other purchasing options are measured. Dedicated Hosts are priced at a premium over standard EC2 pricing to account for the dedicated physical infrastructure, making them more expensive rather than cheaper than standard purchasing options.

Spot 实例使用备用 AWS 容量，与按需价格相比可提供高达 90% 的折扣。预留实例提供高达约 72% 的折扣；按需价格是基准价格；专用主机的成本通常高于标准选项。
与以 1 或 3 年承诺为代价的按需定价相比，预留实例可节省高达约 72%，这是一个很大的折扣，但远低于通过 Spot 实例实现的高达 90% 的节省。按需实例按标准 AWS 费率收费，无折扣，因为它们是衡量所有其他购买选项的基准定价模型。考虑到专用物理基础设施，专用主机的定价高于标准 EC2 定价，这使得它们比标准购买选项更昂贵而不是更便宜。

スポット インスタンスは AWS の予備容量を使用し、オンデマンド価格と比較して最大 90% の割引を提供できます。リザーブドインスタンスでは最大約 72% の割引が提供されます。オンデマンドは基本価格です。Ddedicate Host は通常、標準オプションよりもコストがかかります。
リザーブドインスタンスは、1 年または 3 年の契約と引き換えに、オンデマンド価格と比較して最大約 72% の節約を提供します。これは大幅な割引ですが、スポット インスタンスで利用できる最大 90% よりも大幅に低くなります。オンデマンドインスタンスは、他のすべての購入オプションが測定される基準となる価格モデルであるため、割引なしの標準 AWS 料金で請求されます。Ddedicate Host は、専用の物理インフラストラクチャを考慮して、標準の EC2 価格よりも割増の価格が設定されており、標準の購入オプションよりも安いというよりはむしろ高価になります。

---

## Question 45 · Domain 1

**EN** What is a value proposition of the AWS Cloud?

**中** AWS 云的价值主张是什么？

**日本語** AWS クラウドの価値提案とは何ですか?

- **A.** AWS is responsible for security in the AWS Cloud
  - AWS 负责 AWS 云中的安全
  - AWS は AWS クラウドのセキュリティを担当します
- **B.** No long-term contract is required
  - 无需签订长期合同
  - 長期契約は必要ありません
- **C.** Provision new servers in days
  - 在几天内配置新服务器
  - 数日で新しいサーバーをプロビジョニング
- **D.** AWS manages user applications in the AWS Cloud
  - AWS 管理 AWS 云中的用户应用程序
  - AWS は AWS クラウドでユーザー アプリケーションを管理します

**答案 / Answer: `B`**

No long-term contract is required because AWS uses a pay-as-you-go model, allowing customers to use services on demand and stop at any time without upfront commitments or termination penalties.
AWS is responsible for security in the cloud is a partial truth that misrepresents the Shared Responsibility Model. Security is shared, with AWS responsible for the infrastructure and customers responsible for their data and configurations. Provision new servers in days is inaccurate. One of AWS's key advantages is provisioning resources in minutes, not days, which is the reality that distinguishes cloud from traditional procurement. AWS manages user applications in the AWS Cloud is false. Application management remains the customer's responsibility under the Shared Responsibility Model.

不需要长期合同，因为 AWS 采用即用即付模式，允许客户按需使用服务并随时停止，无需预先承诺或终止罚款。
AWS 负责云中的安全性是部分事实，歪曲了共享责任模型。安全性是共享的，AWS 负责基础设施，客户负责其数据和配置。在几天内配置新服务器是不准确的。 AWS 的主要优势之一是在几分钟而不是几天内配置资源，这就是云与传统采购的区别。 AWS 在 AWS 云中管理用户应用程序是错误的。在责任共担模型下，应用程序管理仍然是客户的责任。

AWS は従量課金制モデルを採用しているため、長期契約は必要ありません。これにより、顧客は前払いの約束や終了違約金なしでオンデマンドでいつでもサービスを利用でき、停止することができます。
AWS がクラウドのセキュリティに責任を負っているというのは、責任共有モデルを誤って伝える部分的な真実です。セキュリティは共有されており、AWS がインフラストラクチャを担当し、顧客はデータと構成を担当します。新しいサーバーを数日でプロビジョニングするのは不正確です。AWS の主な利点の 1 つは、リソースを数日ではなく数分でプロビジョニングできることです。これがクラウドと従来の調達を区別する現実です。AWS がユーザー アプリケーションを AWS クラウドで管理するのは間違いです。責任共有モデルに基づき、アプリケーション管理は引き続きお客様の責任となります。

---

## Question 46 · Domain 2 · Select 2

**EN** Which of the following security-related services does AWS offer?

**中** AWS 提供以下哪些与安全相关的服务？

**日本語** AWS が提供するセキュリティ関連サービスは次のうちどれですか?

- **A.** Multi-factor authentication physical tokens
  - 多重身份验证物理令牌
  - 多要素認証の物理トークン
- **B.** AWS Trusted Advisor security checks
  - AWS Trusted Advisor 安全检查
  - AWS Trusted Advisor セキュリティ チェック
- **C.** Data encryption
  - 数据加密
  - データの暗号化
- **D.** Automated penetration testing
  - 自动化渗透测试
  - 自動侵入テスト
- **E.** Amazon S3 copyrighted content detection
  - Amazon S3 版权内容检测
  - Amazon S3 著作権で保護されたコンテンツの検出

**答案 / Answer: `B,C`**

AWS Trusted Advisor includes security checks that flag vulnerabilities such as open security groups, and AWS provides data encryption capabilities through services like KMS and native encryption across storage and database services. Both are genuine AWS security-related offerings.
Multi-factor authentication physical tokens are hardware MFA devices that customers purchase independently rather than a service provided by AWS; customers configure them with their accounts but AWS does not supply or manufacture the hardware tokens. Automated penetration testing is not an AWS service offering; AWS permits customers to conduct their own penetration testing on permitted services, but AWS does not perform automated penetration testing on customer workloads as a service. Amazon S3 copyrighted content detection is not an AWS service; Amazon Macie detects sensitive data categories such as PII in S3, but copyright detection is not within the scope of available AWS security services.

AWS Trusted Advisor 包括标记开放安全组等漏洞的安全检查，AWS 通过 KMS 等服务以及跨存储和数据库服务的本机加密提供数据加密功能。两者都是真正的 AWS 安全相关产品。
多重身份验证物理令牌是客户独立购买的硬件 MFA 设备，而不是 AWS 提供的服务；客户使用自己的帐户配置它们，但 AWS 不提供或制造硬件令牌。自动渗透测试不是 AWS 服务产品； AWS 允许客户对允许的服务进行自己的渗透测试，但 AWS 不会对作为服务的客户工作负载执行自动渗透测试。 Amazon S3 受版权保护的内容检测不是 AWS 服务； Amazon Macie 检测 S3 中的 PII 等敏感数据类别，但版权检测不在可用的 AWS 安全服务的范围内。

AWS Trusted Advisor には、オープン セキュリティ グループなどの脆弱性にフラグを立てるセキュリティ チェックが含まれており、AWS は、KMS などのサービスを通じてデータ暗号化機能や、ストレージおよびデータベース サービス全体にわたるネイティブ暗号化機能を提供します。どちらも AWS の本物のセキュリティ関連製品です。
多要素認証の物理トークンは、AWS が提供するサービスではなく、顧客が独自に購入するハードウェア MFA デバイスです。顧客は自分のアカウントでそれらを設定しますが、AWS はハードウェア トークンを供給または製造しません。自動侵入テストは AWS のサービスではありません。AWS では、顧客が許可されたサービスに対して独自の侵入テストを実施することを許可していますが、AWS は顧客のワークロードに対してサービスとして自動侵入テストを実行しません。Amazon S3 著作権で保護されたコンテンツの検出は AWS のサービスではありません。Amazon Macie は S3 の PII などの機密データ カテゴリを検出しますが、著作権検出は利用可能な AWS セキュリティ サービスの範囲内ではありません。

---

## Question 47 · Domain 1

**EN** Jessica is managing an e-commerce web application in AWS. The application is hosted on six EC2 instances. One day, three of the instances crashed; but none of her customers were affected. What has Jessica done correctly in this scenario?

**中** Jessica 正在 AWS 中管理一个电子商务 Web 应用程序。该应用程序托管在六个 EC2 实例上。有一天，其中三个实例崩溃了；但她的顾客都没有受到影响。在这种情况下，杰西卡做对了什么？

**日本語** ジェシカは AWS で電子商取引 Web アプリケーションを管理しています。アプリケーションは 6 つの EC2 インスタンスでホストされています。ある日、3 つのインスタンスがクラッシュしました。しかし、彼女の顧客は誰も影響を受けませんでした。このシナリオでジェシカは何を正しく行いましたか?

- **A.** She has properly built an elastic system
  - 她正确地建立了一个弹性系统
  - 彼女は弾力性のあるシステムを適切に構築しています
- **B.** She has properly built a fault tolerant system
  - 她已经正确建立了容错系统
  - 彼女はフォールトトレラントシステムを適切に構築しました
- **C.** She has properly built an encrypted system
  - 她已经正确建立了一个加密系统
  - 彼女は暗号化システムを適切に構築しました
- **D.** She has properly built a scalable system
  - 她正确地构建了一个可扩展的系统
  - 彼女はスケーラブルなシステムを適切に構築しました

**答案 / Answer: `B`**

A fault-tolerant system is designed to continue operating correctly even when some of its components fail, which is exactly what the scenario describes: three of six instances crashed but no customers were affected.
An elastic system automatically scales capacity up or down in response to changes in demand, but elasticity does not address continued operation during component failure. An encrypted system protects data from unauthorised access through cryptographic controls, which is a security property unrelated to maintaining availability when instances crash. A scalable system is designed to handle growth in workload or users by adding resources, but scalability does not ensure the application keeps running when existing instances fail.

容错系统的设计目的是，即使某些组件出现故障，也能继续正常运行，这正是场景所描述的：六个实例中的三个崩溃，但没有客户受到影响。
弹性系统会根据需求的变化自动扩大或缩小容量，但弹性并不能解决组件故障期间的持续运行问题。加密系统通过加密控制来保护数据免遭未经授权的访问，这是一种与在实例崩溃时保持可用性无关的安全属性。可扩展的系统旨在通过添加资源来处理工作负载或用户的增长，但可扩展性并不能确保应用程序在现有实例发生故障时保持运行。

フォールト トレラント システムは、コンポーネントの一部に障害が発生した場合でも正常に動作し続けるように設計されています。これはまさにシナリオで説明されているとおりです。6 つのインスタンスのうち 3 つがクラッシュしましたが、顧客は影響を受けませんでした。
弾力性のあるシステムは、需要の変化に応じて容量を自動的に増減しますが、弾力性はコンポーネント障害時の継続的な動作には対応しません。暗号化されたシステムは、暗号化制御を通じて不正アクセスからデータを保護します。これは、インスタンスがクラッシュした場合の可用性の維持とは関係のないセキュリティ特性です。スケーラブルなシステムは、リソースを追加することでワークロードやユーザーの増加に対応できるように設計されていますが、既存のインスタンスに障害が発生した場合でも、スケーラビリティによってアプリケーションが実行し続けることが保証されるわけではありません。

---

## Question 48 · Domain 3

**EN** Your company has a data store application that requires access to a NoSQL database. Which AWS database offering would meet this requirement?

**中** 您的公司有一个需要访问 NoSQL 数据库的数据存储应用程序。哪种 AWS 数据库产品可以满足此要求？

**日本語** あなたの会社には、NoSQL データベースへのアクセスを必要とするデータ ストア アプリケーションがあります。この要件を満たす AWS データベース製品はどれですか?

- **A.** Amazon Aurora
  - Amazon Aurora
  - Amazon Aurora
- **B.** Amazon DynamoDB
  - Amazon DynamoDB
  - Amazon DynamoDB
- **C.** Amazon Elastic Block Store
  - 亚马逊弹性块商店
  - Amazonエラスティックブロックストア
- **D.** Amazon Redshift
  - Amazon Redshift
  - Amazon Redshift

**答案 / Answer: `B`**

Amazon DynamoDB is a fully managed NoSQL key-value and document database designed for applications that need fast, flexible, schema-less data storage.
Amazon Aurora is a fully managed relational database compatible with MySQL and PostgreSQL that uses structured schemas and SQL, and does not support NoSQL data models. Amazon Elastic Block Store provides block storage volumes that attach to EC2 instances for use as persistent disks, and is a storage service with no database capability of any kind. Amazon Redshift is a managed data warehouse service optimized for running analytical SQL queries across large datasets, and is not a NoSQL database.

Amazon DynamoDB 是一个完全托管的 NoSQL 键值和文档数据库，专为需要快速、灵活、无模式数据存储的应用程序而设计。
Amazon Aurora 是一款完全托管的关系数据库，兼容 MySQL 和 PostgreSQL，使用结构化模式和 SQL，不支持 NoSQL 数据模型。 Amazon Elastic Block Store 提供附加到 EC2 实例以用作永久性磁盘的块存储卷，并且是一种不具有任何类型数据库功能的存储服务。 Amazon Redshift 是一项针对跨大型数据集运行分析 SQL 查询而优化的托管数据仓库服务，它不是 NoSQL 数据库。

Amazon DynamoDB は、高速で柔軟なスキーマレス データ ストレージを必要とするアプリケーション向けに設計された、フルマネージド NoSQL キー/値およびドキュメント データベースです。
Amazon Aurora は、MySQL および PostgreSQL と互換性のあるフルマネージド リレーショナル データベースで、構造化スキーマと SQL を使用しますが、NoSQL データ モデルはサポートしません。Amazon Elastic Block Store は、永続ディスクとして使用するために EC2 インスタンスに接続するブロック ストレージ ボリュームを提供します。これは、いかなる種類のデータベース機能も持たないストレージ サービスです。Amazon Redshift は、大規模なデータセット全体で分析 SQL クエリを実行するために最適化されたマネージド データ ウェアハウス サービスであり、NoSQL データベースではありません。

---

## Question 49 · Domain 2

**EN** You have noticed that several critical Amazon EC2 instances have been terminated. Which of the following AWS services would help you determine who took this action?

**中** 您已经注意到，几个关键的 Amazon EC2 实例已被终止。以下哪些 AWS 服务可以帮助您确定谁执行了此操作？

**日本語** いくつかの重要な Amazon EC2 インスタンスが終了したことに気づきました。次の AWS サービスのうち、誰がこのアクションを実行したかを判断するのに役立ちますか?

- **A.** Amazon Inspector
  - Amazon Inspector
  - Amazon Inspector
- **B.** AWS CloudTrail
  - AWS CloudTrail
  - AWS CloudTrail
- **C.** AWS Trusted Advisor
  - AWS Trusted Advisor
  - AWS Trusted Advisor
- **D.** EC2 Instance Usage Report
  - EC2 实例使用情况报告
  - EC2 インスタンス使用状況レポート

**答案 / Answer: `B`**

AWS CloudTrail records all API calls and account activity across an AWS environment, capturing who performed each action, from which IP address, and at what time, making it the definitive source for identifying who terminated EC2 instances.
Amazon Inspector is an automated security assessment service that scans EC2 instances and container images for software vulnerabilities and unintended network exposure, and does not record who performed API actions or management events. AWS Trusted Advisor inspects your AWS environment and provides recommendations across security, cost, performance, and fault tolerance, and is an advisory tool rather than an audit log of account activity. EC2 Instance Usage Report provides billing and usage data about EC2 instances and does not contain API call logs or identity information about who terminated instances.

AWS CloudTrail 记录 AWS 环境中的所有 API 调用和账户活动，捕获执行每个操作的人员、IP 地址以及时间，使其成为识别谁终止 EC2 实例的最终来源。
Amazon Inspector 是一项自动化安全评估服务，可扫描 EC2 实例和容器映像中的软件漏洞和意外网络暴露，并且不记录谁执行了 API 操作或管理事件。 AWS Trusted Advisor 检查您的 AWS 环境并提供安全性、成本、性能和容错方面的建议，它是一种咨询工具，而不是帐户活动的审核日志。 EC2 实例使用情况报告提供有关 EC2 实例的计费和使用数据，不包含 API 调用日志或有关谁终止实例的身份信息。

AWS CloudTrail は、AWS 環境全体のすべての API 呼び出しとアカウント アクティビティを記録し、各アクションを誰が、どの IP アドレスから、いつ実行したかをキャプチャし、誰が EC2 インスタンスを終了したかを特定するための決定的な情報源となります。
Amazon Inspector は、EC2 インスタンスとコンテナ イメージをスキャンしてソフトウェアの脆弱性や意図しないネットワークへの露出を検出する自動セキュリティ評価サービスであり、API アクションや管理イベントを実行したユーザーは記録しません。AWS Trusted Advisor は、AWS 環境を検査し、セキュリティ、コスト、パフォーマンス、フォールト トレランス全体にわたる推奨事項を提供します。これは、アカウント アクティビティの監査ログではなく、助言ツールです。EC2 インスタンス使用状況レポートは、EC2 インスタンスに関する請求および使用状況データを提供しますが、インスタンスを終了したユーザーに関する API 呼び出しログや ID 情報は含まれません。

---

## Question 50 · Domain 3

**EN** What is the primary storage service used by Amazon RDS database instances?

**中** Amazon RDS 数据库实例使用的主存储服务是什么？

**日本語** Amazon RDS データベース インスタンスによって使用されるプライマリ ストレージ サービスは何ですか?

- **A.** Amazon S3 Glacier
  - Amazon S3 冰川
  - Amazon S3 氷河
- **B.** Amazon EBS
  - 亚马逊 EBS
  - アマゾンEBS
- **C.** Amazon EFS
  - Amazon EFS
  - Amazon EFS
- **D.** Amazon S3
  - Amazon S3
  - Amazon S3

**答案 / Answer: `B`**

Amazon RDS database instances use Amazon EBS volumes as their primary storage layer, providing persistent block-level storage that persists independently of the database instance lifecycle.
Amazon S3 Glacier is an archival storage service designed for long-term data retention at low cost and is not used as active storage for running database instances. Amazon EFS is a shared file system service mountable across multiple EC2 instances and is not the primary storage layer for RDS. Amazon S3 is an object storage service accessed via API and is not used as block-level storage for database instances.

Amazon RDS 数据库实例使用 Amazon EBS 卷作为其主存储层，提供独立于数据库实例生命周期持续存在的持久块级存储。
Amazon S3 Glacier 是一种归档存储服务，旨在以低成本长期保留数据，不用作运行数据库实例的主动存储。 Amazon EFS 是可跨多个 EC2 实例安装的共享文件系统服务，不是 RDS 的主存储层。 Amazon S3 是通过 API 访问的对象存储服务，不用作数据库实例的块级存储。

Amazon RDS データベース インスタンスは、Amazon EBS ボリュームをプライマリ ストレージ層として使用し、データベース インスタンスのライフサイクルとは独立して持続する永続的なブロックレベルのストレージを提供します。
Amazon S3 Glacier は、低コストでデータを長期保存するために設計されたアーカイブ ストレージ サービスであり、データベース インスタンスを実行するためのアクティブ ストレージとしては使用されません。Amazon EFS は、複数の EC2 インスタンスにわたってマウント可能な共有ファイル システム サービスであり、RDS のプライマリ ストレージ層ではありません。Amazon S3 は、API 経由でアクセスされるオブジェクト ストレージ サービスであり、データベース インスタンスのブロックレベルのストレージとしては使用されません。

---

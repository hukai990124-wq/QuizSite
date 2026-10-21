# AWS CLF-C02 练习卷 · 第 02 套

> 50 题 · 中英日对照 · 练习题来源为 MIT 许可的 CloudCertPrep；非 AWS 官方题目。中文和日文为机器翻译。

## Question 1 · Domain 4

**EN** Which of the following is an available option when purchasing Amazon EC2 instances?

**中** 购买 Amazon EC2 实例时可以选择以下哪些选项？

**日本語** Amazon EC2 インスタンスを購入するときに利用可能なオプションは次のうちどれですか?

- **A.** The ability to bid to get the lowest possible prices
  - 能够投标以获得尽可能低的价格
  - 可能な限り最低価格を得るために入札する機能
- **B.** The ability to register EC2 instances to get volume discounts on every hour the instances are running
  - 能够注册 EC2 实例以获得实例运行每小时的批量折扣
  - EC2 インスタンスを登録して、インスタンスの実行時間ごとにボリューム ディスカウントを受ける機能
- **C.** The ability to buy Dedicated Instances for up to 90% discount
  - 能够以高达 90% 的折扣购买专用实例
  - 専用インスタンスを最大 90% 割引で購入できる機能
- **D.** The ability to pay upfront to get lower hourly costs
  - 能够预先付款以获得更低的每小时成本
  - 前払いして時間当たりのコストを削減できる機能

**答案 / Answer: `D`**

Reserved Instances allow you to pay upfront in exchange for lower hourly rates over a 1 or 3-year term, providing predictable savings for steady-state workloads.
The ability to bid for a lower hourly cost describes Spot Instances, which are priced based on spare EC2 capacity through a market-based mechanism rather than a commitment-based model. The ability to register EC2 instances to get volume discounts on every hour they are running is not a real EC2 purchasing option. Volume discounts in AWS apply through mechanisms such as consolidated billing or S3 storage tiers rather than through instance registration. The ability to buy Dedicated Instances for up to 90% discount is incorrect on two counts: Dedicated Instances are priced at a premium rather than a discount, and the 90% discount figure applies to Spot Instances rather than Dedicated Instances.

预留实例允许您在 1 或 3 年期限内预先支付费用，以换取较低的小时费率，从而为稳态工作负载提供可预测的节省。
竞价型实例能够以较低的小时成本进行竞价，这种实例通过基于市场的机制而不是基于承诺的模型，根据备用 EC2 容量进行定价。注册 EC2 实例以获得每小时运行的批量折扣的能力并不是真正的 EC2 购买选项。 AWS 中的批量折扣通过整合计费或 S3 存储层等机制而不是通过实例注册来应用。以高达 90% 的折扣购买专用实例的能力在两个方面是不正确的：专用实例的定价是溢价而不是折扣，90% 的折扣数字适用于 Spot 实例而不是专用实例。

リザーブド インスタンスを使用すると、1 年または 3 年間の時間料金を下げる代わりに前払いできるため、定常状態のワークロードに対して予測可能な節約が実現します。
より低い時間当たりのコストを入札できる機能は、コミットメントベースのモデルではなく市場ベースのメカニズムを通じて、予備の EC2 容量に基づいて価格設定されるスポット インスタンスを表します。EC2 インスタンスを登録して、実行時間ごとにボリューム ディスカウントを受ける機能は、実際の EC2 購入オプションではありません。AWS のボリュームディスカウントは、インスタンス登録ではなく、一括請求 (コンソリデーティッドビリング) や S3 ストレージ階層などのメカニズムを通じて適用されます。専用インスタンスを最大 90% 割引で購入できるという機能は、次の 2 つの点で正しくありません。専用インスタンスの価格は割引ではなくプレミアムで設定されており、90% 割引の数値は専用インスタンスではなくスポット インスタンスに適用されます。

---

## Question 2 · Domain 3

**EN** Both AWS and traditional IT distributors provide a wide range of virtual servers to meet their customers' requirements. What is the name of these virtual servers in AWS?

**中** AWS 和传统 IT 分销商都提供各种虚拟服务器来满足客户的需求。 AWS 中这些虚拟服务器的名称是什么？

**日本語** AWS と従来の IT ディストリビュータはどちらも、顧客の要件を満たす幅広い仮想サーバーを提供しています。AWS のこれらの仮想サーバーの名前は何ですか?

- **A.** Amazon EBS Snapshots
  - 亚马逊 EBS 快照
  - Amazon EBS スナップショット
- **B.** Amazon VP
  - 亚马逊副总裁
  - アマゾン副社長
- **C.** Amazon Lightsail
  - Amazon Lightsail
  - Amazon Lightsail
- **D.** Amazon EC2 Instances
  - Amazon EC2 实例
  - Amazon EC2 インスタンス

**答案 / Answer: `D`**

Amazon EC2 instances are virtual servers in the AWS Cloud that provide resizable compute capacity, allowing customers to run applications on AWS infrastructure just as they would on physical servers.
Amazon EBS Snapshots are point-in-time backups of EBS storage volumes, not virtual servers. Amazon VPC is a networking service that provides an isolated virtual network environment within AWS, not a virtual server. Amazon Lightsail also provides virtual servers but is designed for simpler workloads with a more limited and fixed configuration, whereas EC2 offers the full range of instance types and customization options comparable to traditional IT virtual server offerings.

Amazon EC2 实例是 AWS 云中的虚拟服务器，可提供可调整大小的计算容量，允许客户在 AWS 基础设施上运行应用程序，就像在物理服务器上一样。
Amazon EBS 快照是 EBS 存储卷的时间点备份，而不是虚拟服务器。 Amazon VPC 是一种网络服务，可在 AWS 内提供隔离的虚拟网络环境，而不是虚拟服务器。 Amazon Lightsail 还提供虚拟服务器，但专为更简单的工作负载而设计，具有更有限和固定的配置，而 EC2 则提供与传统 IT 虚拟服务器产品相当的全系列实例类型和自定义选项。

Amazon EC2 インスタンスは、サイズ変更可能なコンピューティング容量を提供する AWS クラウドの仮想サーバーであり、顧客は物理サーバー上で行うのと同じように AWS インフラストラクチャ上でアプリケーションを実行できます。
Amazon EBS スナップショットは、仮想サーバーではなく、EBS ストレージ ボリュームのポイントインタイム バックアップです。Amazon VPC は、仮想サーバーではなく、AWS 内に隔離された仮想ネットワーク環境を提供するネットワーク サービスです。Amazon Lightsail も仮想サーバーを提供しますが、より制限された固定構成によるシンプルなワークロード向けに設計されているのに対し、EC2 は従来の IT 仮想サーバー製品と同等のあらゆる種類のインスタンス タイプとカスタマイズ オプションを提供します。

---

## Question 3 · Domain 3

**EN** You are facing a lot of problems with your current contact center. Which service provides a cloud-based contact center that can deliver a better service for your customers?

**中** 您当前的联络中心面临很多问题。哪种服务提供基于云的联络中心，可以为您的客户提供更好的服务？

**日本語** 現在のコンタクト センターでは多くの問題に直面しています。顧客により良いサービスを提供できるクラウドベースのコンタクト センターを提供するサービスはどれですか?

- **A.** Amazon Lightsail
  - Amazon Lightsail
  - Amazon Lightsail
- **B.** Amazon Connect
  - 亚马逊连接
  - アマゾンコネクト
- **C.** AWS Direct Connect
  - AWS Direct Connect
  - AWS Direct Connect
- **D.** AWS Elastic Beanstalk
  - AWS 弹性豆茎
  - AWS Elastic Beanstalk

**答案 / Answer: `B`**

Amazon Connect is a cloud-based contact center service that lets you set up a customer service center in minutes with pay-per-use pricing and no infrastructure to manage, making it the purpose-built solution for replacing a traditional contact center.
Amazon Lightsail is a simplified cloud platform for deploying small applications and websites with predictable pricing, and has no contact center or customer communication functionality. AWS Direct Connect establishes a dedicated private network connection between on-premises infrastructure and AWS, and is a networking service entirely unrelated to contact center operations. AWS Elastic Beanstalk is a PaaS service for deploying and managing web applications, not a contact center or customer service platform.

Amazon Connect 是一项基于云的联络中心服务，让您可以在几分钟内建立一个客户服务中心，按使用付费定价，无需管理基础设施，使其成为替代传统联络中心的专用解决方案。
Amazon Lightsail 是一个简化的云平台，用于部署小型应用程序和网站，具有可预测的定价，并且没有联络中心或客户通信功能。 AWS Direct Connect 在本地基础设施和 AWS 之间建立专用的专用网络连接，是一项与联络中心运营完全无关的网络服务。 AWS Elastic Beanstalk 是一种用于部署和管理 Web 应用程序的 PaaS 服务，而不是联络中心或客户服务平台。

Amazon Connect はクラウドベースのコンタクトセンター サービスで、従量課金制でカスタマー サービス センターを数分でセットアップでき、管理するインフラストラクチャが不要で、従来のコンタクト センターを置き換えるための専用ソリューションとなります。
Amazon Lightsail は、小規模なアプリケーションや Web サイトを予測可能な価格で展開するための簡素化されたクラウド プラットフォームであり、コンタクト センターや顧客コミュニケーション機能はありません。AWS Direct Connect は、オンプレミスのインフラストラクチャと AWS の間に専用のプライベート ネットワーク接続を確立し、コンタクト センターの運用とはまったく関係のないネットワーキング サービスです。AWS Elastic Beanstalk は、ウェブアプリケーションをデプロイおよび管理するための PaaS サービスであり、コンタクトセンターやカスタマーサービスプラットフォームではありません。

---

## Question 4 · Domain 2 · Select 2

**EN** Which of the below are responsibilities of the customer when using Amazon EC2?

**中** 使用 Amazon EC2 时，客户应承担以下哪些责任？

**日本語** Amazon EC2 を使用する場合、お客様の責任は次のうちどれですか?

- **A.** Protecting sensitive data
  - 保护敏感数据
  - 機密データの保護
- **B.** Patching of the underlying infrastructure
  - 底层基础设施的修补
  - 基盤となるインフラストラクチャのパッチ適用
- **C.** Setup and operation of managed databases
  - 托管数据库的设置和操作
  - 管理されたデータベースのセットアップと運用
- **D.** Maintaining consistent hardware components
  - 维护一致的硬件组件
  - 一貫したハードウェア コンポーネントの維持
- **E.** Installing and configuring third-party software
  - 安装和配置第三方软件
  - サードパーティ製ソフトウェアのインストールと構成

**答案 / Answer: `A,E`**

Customers using Amazon EC2 are responsible for managing user access to their EC2 instances, including configuring operating system users and SSH keys, and for protecting data at rest and in transit on those instances through encryption and access controls.
Preventing physical access to EC2 hardware is AWS's responsibility as customers have no access to or visibility into the physical data center facilities where EC2 instances run. Patching the network infrastructure is AWS's responsibility as the underlying physical and virtual networking components that connect EC2 instances are managed and maintained entirely by AWS. Managing the hypervisor is AWS's responsibility as the virtualization layer that abstracts physical hardware into EC2 instances is part of the AWS infrastructure that customers cannot access or modify.

使用 Amazon EC2 的客户负责管理对其 EC2 实例的用户访问，包括配置操作系统用户和 SSH 密钥，并通过加密和访问控制来保护这些实例上的静态数据和传输中的数据。
防止对 EC2 硬件进行物理访问是 AWS 的责任，因为客户无法访问或查看运行 EC2 实例的物理数据中心设施。修补网络基础设施是 AWS 的责任，因为连接 EC2 实例的底层物理和虚拟网络组件完全由 AWS 管理和维护。管理虚拟机管理程序是 AWS 的责任，因为将物理硬件抽象为 EC2 实例的虚拟化层是 AWS 基础设施的一部分，客户无法访问或修改。

Amazon EC2 を使用するお客様は、オペレーティング システム ユーザーと SSH キーの構成を含む、EC2 インスタンスへのユーザー アクセスを管理し、暗号化とアクセス制御を通じてこれらのインスタンス上で保存中および転送中のデータを保護する責任があります。
お客様は EC2 インスタンスが実行されている物理的なデータセンター施設にアクセスしたり、それを確認したりできないため、EC2 ハードウェアへの物理的なアクセスを防ぐのは AWS の責任です。EC2 インスタンスに接続する基盤となる物理および仮想ネットワーク コンポーネントは完全に AWS によって管理および維持されるため、ネットワーク インフラストラクチャへのパッチ適用は AWS の責任となります。物理ハードウェアを EC2 インスタンスに抽象化する仮想化レイヤーは、顧客がアクセスしたり変更したりできない AWS インフラストラクチャの一部であるため、ハイパーバイザーの管理は AWS の責任です。

---

## Question 5 · Domain 3

**EN** An organization has a legacy application designed using monolithic-based architecture. Which AWS service can be used to decouple the components of the application?

**中** 某个组织拥有使用基于整体的架构设计的遗留应用程序。哪种 AWS 服务可用于解耦应用程序的组件？

**日本語** 組織には、モノリシック ベースのアーキテクチャを使用して設計されたレガシー アプリケーションがあります。アプリケーションのコンポーネントを分離するために使用できる AWS のサービスはどれですか?

- **A.** Amazon SQS
  - Amazon SQS
  - Amazon SQS
- **B.** Amazon SNS
  - Amazon SNS
  - Amazon SNS
- **C.** Amazon EventBridge
  - Amazon EventBridge
  - Amazon EventBridge
- **D.** AWS Step Functions
  - AWS Step Functions
  - AWS Step Functions

**答案 / Answer: `A`**

Amazon SQS is a fully managed message queuing service that decouples application components by allowing each component to send and receive messages independently, enabling a monolithic application to be broken into loosely coupled parts that communicate asynchronously.
Amazon SNS is a publish/subscribe messaging service that broadcasts messages to multiple subscribers simultaneously, which is useful for fan-out notification patterns but is not the primary service for decoupling monolithic application components through asynchronous message queuing. Amazon EventBridge is a serverless event bus that routes events between AWS services, SaaS applications, and custom applications based on event patterns; while it supports decoupled architectures, it is event-driven routing rather than a message queue for decoupling component dependencies in a monolithic application. AWS Step Functions is a serverless workflow orchestration service that coordinates multiple AWS services into structured workflows, which handles workflow state management rather than providing the message queuing mechanism needed to decouple monolithic application components.

Amazon SQS 是一种完全托管的消息队列服务，它通过允许每个组件独立发送和接收消息来解耦应用程序组件，从而使整体应用程序能够分解为异步通信的松散耦合部分。
Amazon SNS 是一种发布/订阅消息服务，可同时向多个订阅者广播消息，这对于扇出通知模式很有用，但不是通过异步消息队列解耦整体应用程序组件的主要服务。 Amazon EventBridge 是一种无服务器事件总线，可根据事件模式在 AWS 服务、SaaS 应用程序和自定义应用程序之间路由事件；虽然它支持解耦架构，但它是事件驱动的路由而不是消息队列，用于解耦整体应用程序中的组件依赖性。 AWS Step Functions 是一种无服务器工作流编排服务，可将多个 AWS 服务协调为结构化工作流，处理工作流状态管理，而不是提供解耦整体应用程序组件所需的消息队列机制。

Amazon SQS は、各コンポーネントが個別にメッセージを送受信できるようにすることでアプリケーション コンポーネントを分離し、モノリシック アプリケーションを非同期通信する疎結合部分に分割できるようにするフルマネージドのメッセージ キュー サービスです。
Amazon SNS は、メッセージを複数のサブスクライバに同時にブロードキャストするパブリッシュ/サブスクライブ メッセージング サービスです。これは、ファンアウト通知パターンには便利ですが、非同期メッセージ キューイングを通じてモノリシック アプリケーション コンポーネントを分離するための主要なサービスではありません。Amazon EventBridge は、イベント パターンに基づいて AWS サービス、SaaS アプリケーション、カスタム アプリケーションの間でイベントをルーティングするサーバーレス イベント バスです。分離されたアーキテクチャをサポートしていますが、モノリシック アプリケーション内のコンポーネントの依存関係を分離するためのメッセージ キューではなく、イベント ドリブンのルーティングです。AWS Step Functions は、複数の AWS サービスを構造化ワークフローに調整するサーバーレス ワークフロー オーケストレーション サービスです。モノリシック アプリケーション コンポーネントを分離するために必要なメッセージ キュー メカニズムを提供するのではなく、ワークフローの状態管理を処理します。

---

## Question 6 · Domain 2 · Select 2

**EN** Which of the following would you use to manage your encryption keys in the AWS Cloud?

**中** 您将使用以下哪项来管理 AWS 云中的加密密钥？

**日本語** AWS クラウドで暗号化キーを管理するために使用するものは次のうちどれですか?

- **A.** AWS KMS
  - AWS KMS
  - AWS KMS
- **B.** AWS Certificate Manager
  - AWS 证书管理器
  - AWS 証明書マネージャー
- **C.** AWS CodeDeploy
  - AWS 代码部署
  - AWS コードデプロイ
- **D.** AWS CodeCommit
  - AWS 代码提交
  - AWS コードコミット
- **E.** CloudHSM
  - 云 HSM
  - クラウドHSM

**答案 / Answer: `A,E`**

AWS KMS provides centralized software-based key management with AWS-managed infrastructure and integrates natively with most AWS services for encryption at rest, and AWS CloudHSM provides dedicated hardware security modules for customers requiring hardware-based key control for regulatory compliance. Both are valid services for managing encryption keys in the AWS Cloud.
AWS Certificate Manager provisions and manages SSL/TLS certificates for encrypting data in transit between applications and users, and is a certificate provisioning service rather than a key management service for creating and storing encryption keys. AWS CodeDeploy is an automated deployment service that delivers application code to EC2 instances, Lambda functions, and on-premises servers, and is a deployment automation tool with no encryption key management capability. AWS CodeCommit is a fully managed source control service for hosting Git repositories for version-controlled code storage, and is a code collaboration tool rather than an encryption key management service.

AWS KMS 通过 AWS 管理的基础设施提供基于软件的集中密钥管理，并与大多数 AWS 服务本地集成以实现静态加密，AWS CloudHSM 为需要基于硬件的密钥控制以确保合规性的客户提供专用的硬件安全模块。两者都是用于管理 AWS 云中加密密钥的有效服务。
AWS Certificate Manager 预置和管理 SSL/TLS 证书，用于加密应用程序和用户之间传输的数据，它是一种证书预置服务，而不是用于创建和存储加密密钥的密钥管理服务。 AWS CodeDeploy 是一种自动化部署服务，可将应用程序代码交付到 EC2 实例、Lambda 函数和本地服务器，并且是一种不具有加密密钥管理功能的部署自动化工具。 AWS CodeCommit 是一项完全托管的源代码控制服务，用于托管 Git 存储库以进行版本控制的代码存储，并且是一种代码协作工具，而不是加密密钥管理服务。

AWS KMS は、AWS が管理するインフラストラクチャによる一元的なソフトウェアベースのキー管理を提供し、保存時の暗号化のためにほとんどの AWS サービスとネイティブに統合します。また、AWS CloudHSM は、規制遵守のためにハードウェアベースのキー管理を必要とする顧客に専用のハードウェア セキュリティ モジュールを提供します。どちらも、AWS クラウドで暗号化キーを管理するための有効なサービスです。
AWS Certificate Manager は、アプリケーションとユーザーの間で転送されるデータを暗号化するための SSL/TLS 証明書をプロビジョニングおよび管理します。これは、暗号化キーを作成および保存するためのキー管理サービスではなく、証明書プロビジョニング サービスです。AWS CodeDeploy は、アプリケーション コードを EC2 インスタンス、Lambda 関数、オンプレミス サーバーに配信する自動デプロイメント サービスであり、暗号化キー管理機能を持たないデプロイ自動化ツールです。AWS CodeCommit は、バージョン管理されたコードストレージ用の Git リポジトリをホストするフルマネージドのソース管理サービスであり、暗号化キー管理サービスではなく、コードコラボレーションツールです。

---

## Question 7 · Domain 1

**EN** Which pillar of the AWS Well-Architected Framework provides recommendations to help customers select the right compute resources based on workload requirements?

**中** AWS 架构完善框架的哪个支柱提供建议来帮助客户根据工作负载需求选择正确的计算资源？

**日本語** AWS Well-Architected フレームワークのどの柱が、顧客がワークロード要件に基づいて適切なコンピューティングリソースを選択するのに役立つ推奨事項を提供しますか?

- **A.** Operational Excellence
  - 卓越运营
  - 優れた運用性
- **B.** Security
  - 安全
  - 安全
- **C.** Performance Efficiency
  - 性能效率
  - パフォーマンス効率
- **D.** Reliability
  - 可靠性
  - 信頼性

**答案 / Answer: `C`**

The Performance Efficiency pillar of the Well-Architected Framework focuses on selecting the right resource types and sizes based on workload requirements to use computing resources efficiently.
Operational Excellence focuses on running and monitoring systems to deliver business value and continually improving processes and procedures, and does not specifically address compute resource selection based on workload requirements. Security focuses on protecting information and systems through risk assessment, access management, and controls, and is not concerned with matching compute resources to workload performance needs. Reliability focuses on ensuring a workload can recover from failures and dynamically acquire resources to meet demand, but its emphasis is on resilience and recovery rather than on selecting the right compute resource types for efficiency.

架构完善的框架的性能效率支柱侧重于根据工作负载要求选择正确的资源类型和大小，以有效地使用计算资源。
卓越运营侧重于运行和监控系统以提供业务价值并不断改进流程和程序，并且不专门解决根据工作负载需求选择计算资源的问题。安全性侧重于通过风险评估、访问管理和控制来保护信息和系统，而不关心将计算资源与工作负载性能需求相匹配。可靠性侧重于确保工作负载能够从故障中恢复并动态获取资源以满足需求，但其重点是弹性和恢复，而不是选择正确的计算资源类型以提高效率。

Well-Architected フレームワークのパフォーマンス効率の柱は、コンピューティング リソースを効率的に使用するために、ワークロード要件に基づいて適切なリソースの種類とサイズを選択することに重点を置いています。
オペレーショナル エクセレンスは、ビジネス価値を提供するシステムの実行と監視、およびプロセスと手順の継続的な改善に焦点を当てており、ワークロード要件に基づくコンピューティング リソースの選択には特に対応していません。セキュリティは、リスク評価、アクセス管理、制御を通じて情報とシステムを保護することに重点を置き、コンピューティング リソースをワークロードのパフォーマンスのニーズに適合させることには関心がありません。信頼性は、ワークロードが障害から回復し、需要を満たすためにリソースを動的に取得できることを保証することに重点を置いていますが、効率を高めるために適切なコンピューティング リソース タイプを選択することよりも、回復力と回復性に重点が置かれています。

---

## Question 8 · Domain 2 · Select 2

**EN** A developer needs to set up an SSL security certificate for a client's eCommerce website in order to use the HTTPS protocol. Which of the following AWS services can be used to deploy the required SSL server certificates?

**中** 开发人员需要为客户的电子商务网站设置 SSL 安全证书才能使用 HTTPS 协议。以下哪些 AWS 服务可用于部署所需的 SSL 服务器证书？

**日本語** 開発者は、HTTPS プロトコルを使用するために、クライアントの e コマース Web サイトに SSL セキュリティ証明書を設定する必要があります。必要な SSL サーバー証明書をデプロイするために使用できる AWS サービスは次のうちどれですか?

- **A.** Amazon Route 53
  - Amazon Route 53
  - Amazon Route 53
- **B.** AWS Certificate Manager
  - AWS 证书管理器
  - AWS 証明書マネージャー
- **C.** AWS Directory Service
  - AWS 目录服务
  - AWS ディレクトリ サービス
- **D.** AWS Identity and Access Management
  - AWS 身份和访问管理
  - AWS ID とアクセス管理
- **E.** AWS Config
  - AWS Config
  - AWS Config

**答案 / Answer: `B,D`**

AWS Certificate Manager is the primary service for provisioning, managing, and deploying SSL/TLS certificates for use with AWS services such as CloudFront and Elastic Load Balancing. AWS IAM also supports uploading and storing SSL server certificates that can be deployed to services not yet supported by ACM, making both valid options.
Amazon Route 53 is a DNS and domain registration service that manages how traffic is routed to resources, and has no capability to provision or deploy SSL certificates. AWS Directory Service is a managed Microsoft Active Directory service used for identity management, and is unrelated to SSL certificate provisioning. AWS Config is a compliance and configuration monitoring service that tracks resource configuration changes, and does not provision or deploy SSL certificates.

AWS Certificate Manager 是用于预置、管理和部署 SSL/TLS 证书以与 CloudFront 和 Elastic Load Balancing 等 AWS 服务配合使用的主要服务。 AWS IAM 还支持上传和存储 SSL 服务器证书，这些证书可以部署到 ACM 尚不支持的服务，从而使这两个选项都有效。
Amazon Route 53 是一种 DNS 和域注册服务，用于管理流量如何路由到资源，并且无法配置或部署 SSL 证书。 AWS Directory Service 是一项用于身份管理的托管 Microsoft Active Directory 服务，与 SSL 证书配置无关。 AWS Config 是一项合规性和配置监控服务，可跟踪资源配置更改，并且不提供或部署 SSL 证书。

AWS Certificate Manager は、CloudFront や Elastic Load Balancing などの AWS のサービスで使用する SSL/TLS 証明書をプロビジョニング、管理、デプロイするための主要なサービスです。AWS IAM は、ACM でまだサポートされていないサービスに導入できる SSL サーバー証明書のアップロードと保存もサポートしているため、両方のオプションが有効になります。
Amazon Route 53 は、トラフィックがリソースにルーティングされる方法を管理する DNS およびドメイン登録サービスであり、SSL 証明書をプロビジョニングまたは展開する機能はありません。AWS Directory Service は、アイデンティティ管理に使用されるマネージド型 Microsoft Active Directory サービスであり、SSL 証明書のプロビジョニングとは無関係です。AWS Config は、リソース構成の変更を追跡するコンプライアンスおよび構成監視サービスであり、SSL 証明書のプロビジョニングや展開は行いません。

---

## Question 9 · Domain 3

**EN** Which AWS service helps enterprises extend their on-premises storage to AWS in a cost-effective manner?

**中** 哪种 AWS 服务可以帮助企业以经济高效的方式将本地存储扩展到 AWS？

**日本語** 企業がコスト効率の高い方法でオンプレミスのストレージを AWS に拡張するのに役立つ AWS のサービスはどれですか?

- **A.** AWS Transfer Family
  - AWS 传输系列
  - AWS 転送ファミリー
- **B.** AWS Storage Gateway
  - AWS 存储网关
  - AWSストレージゲートウェイ
- **C.** Amazon Aurora
  - Amazon Aurora
  - Amazon Aurora
- **D.** Amazon EFS
  - Amazon EFS
  - Amazon EFS

**答案 / Answer: `B`**

AWS Storage Gateway connects on-premises environments to AWS cloud storage, providing a hybrid storage solution that allows organizations to extend their existing on-premises storage infrastructure to AWS in a cost-effective way by tiering infrequently accessed data to the cloud.
AWS Transfer Family provides managed file transfer workflows using SFTP, FTPS, and FTP protocols to move files directly into and out of Amazon S3 or EFS, and is a data transfer service rather than a hybrid storage extension solution for on-premises environments. Amazon Aurora is a fully managed, high-performance relational database engine compatible with MySQL and PostgreSQL, and is a database service rather than a storage extension solution for on-premises data. Amazon EFS is a managed, scalable NFS file system accessible by multiple EC2 instances in the cloud, and while it provides file storage, it is a cloud-native service rather than a gateway for extending on-premises storage capacity to AWS.

AWS Storage Gateway 将本地环境连接到 AWS 云存储，提供混合存储解决方案，允许组织将不经常访问的数据分层到云中，以经济高效的方式将其现有本地存储基础设施扩展到 AWS。
AWS Transfer 系列使用 SFTP、FTPS 和 FTP 协议提供托管文件传输工作流程，将文件直接移入和移出 Amazon S3 或 EFS，并且是一种数据传输服务，而不是适用于本地环境的混合存储扩展解决方案。 Amazon Aurora 是一款完全托管、兼容 MySQL 和 PostgreSQL 的高性能关系数据库引擎，是数据库服务而不是本地数据的存储扩展解决方案。 Amazon EFS 是一种托管、可扩展的 NFS 文件系统，可由云中的多个 EC2 实例访问，虽然它提供文件存储，但它是一种云原生服务，而不是用于将本地存储容量扩展到 AWS 的网关。

AWS Storage Gateway は、オンプレミス環境を AWS クラウド ストレージに接続し、アクセス頻度の低いデータをクラウドに階層化することで、組織がコスト効率の高い方法で既存のオンプレミス ストレージ インフラストラクチャを AWS に拡張できるハイブリッド ストレージ ソリューションを提供します。
AWS Transfer Family は、SFTP、FTPS、および FTP プロトコルを使用して Amazon S3 または EFS との間でファイルを直接移動するマネージド ファイル転送ワークフローを提供します。これは、オンプレミス環境向けのハイブリッド ストレージ拡張ソリューションではなく、データ転送サービスです。Amazon Aurora は、MySQL および PostgreSQL と互換性のあるフルマネージドの高性能リレーショナル データベース エンジンで、オンプレミス データ用のストレージ拡張ソリューションではなく、データベース サービスです。Amazon EFS は、クラウド上の複数の EC2 インスタンスからアクセスできる、マネージドでスケーラブルな NFS ファイル システムです。ファイル ストレージを提供しますが、オンプレミスのストレージ容量を AWS に拡張するためのゲートウェイではなく、クラウドネイティブ サービスです。

---

## Question 10 · Domain 2

**EN** What is the main benefit of attaching security groups to an Amazon RDS instance?

**中** 将安全组附加到 Amazon RDS 实例的主要好处是什么？

**日本語** Amazon RDS インスタンスにセキュリティ グループをアタッチする主な利点は何ですか?

- **A.** Manages user access and encryption keys
  - 管理用户访问和加密密钥
  - ユーザーアクセスと暗号化キーを管理します
- **B.** Controls what IP address ranges can connect to your database instance
  - 控制哪些 IP 地址范围可以连接到您的数据库实例
  - データベース インスタンスに接続できる IP アドレス範囲を制御します
- **C.** Deploys SSL/TLS certificates for use with your database instance
  - 部署 SSL/TLS 证书以与您的数据库实例一起使用
  - データベース インスタンスで使用する SSL/TLS 証明書をデプロイします。
- **D.** Distributes incoming traffic across multiple targets
  - 将传入流量分布到多个目标
  - 受信トラフィックを複数のターゲットに分散します

**答案 / Answer: `B`**

Security groups attached to an RDS instance act as a virtual firewall controlling which IP address ranges and EC2 instances are allowed to establish connections to the database, restricting network access to only authorised sources.
Managing user access and encryption keys describes AWS IAM and AWS KMS respectively, which are separate services for identity management and key management rather than functions provided by security groups attached to an RDS instance. Deploying SSL/TLS certificates for database connections is performed by AWS Certificate Manager and the RDS parameter group configuration, not by security groups, which control network connectivity rather than certificate provisioning. Distributing incoming traffic across multiple targets describes an Elastic Load Balancer, which routes requests to multiple backend instances, and is not a function of security groups attached to a database instance.

附加到 RDS 实例的安全组充当虚拟防火墙，控制允许哪些 IP 地址范围和 EC2 实例建立与数据库的连接，从而将网络访问限制为仅授权来源。
管理用户访问和加密密钥分别描述了 AWS IAM 和 AWS KMS，它们是用于身份管理和密钥管理的独立服务，而不是附加到 RDS 实例的安全组提供的功能。为数据库连接部署 SSL/TLS 证书是由 AWS Certificate Manager 和 RDS 参数组配置执行的，而不是由安全组执行的，安全组控制网络连接而不是证书预置。跨多个目标分配传入流量描述的是弹性负载均衡器，它将请求路由到多个后端实例，而不是附加到数据库实例的安全组的功能。

RDS インスタンスにアタッチされたセキュリティ グループは、どの IP アドレス範囲と EC2 インスタンスがデータベースへの接続を確立できるかを制御する仮想ファイアウォールとして機能し、ネットワーク アクセスを承認されたソースのみに制限します。
ユーザー アクセスと暗号化キーの管理では、AWS IAM と AWS KMS についてそれぞれ説明します。これらは、RDS インスタンスにアタッチされたセキュリティ グループによって提供される機能ではなく、アイデンティティ管理とキー管理のための別個のサービスです。データベース接続用の SSL/TLS 証明書のデプロイは、証明書のプロビジョニングではなくネットワーク接続を制御するセキュリティ グループではなく、AWS Certificate Manager と RDS パラメータ グループ設定によって実行されます。受信トラフィックを複数のターゲットに分散するということは、リクエストを複数のバックエンド インスタンスにルーティングする Elastic Load Balancer について説明するものであり、データベース インスタンスにアタッチされているセキュリティ グループの機能ではありません。

---

## Question 11 · Domain 3

**EN** What does AWS Service Catalog provide?

**中** AWS Service Catalog 提供什么？

**日本語** AWS Service Catalog は何を提供しますか?

- **A.** It enables customers to quickly find descriptions and use cases for AWS services
  - 它使客户能够快速找到 AWS 服务的描述和用例
  - これにより、顧客は AWS サービスの説明とユースケースをすぐに見つけることができます。
- **B.** It enables customers to explore the different catalogs of AWS services
  - 它使客户能够探索不同的 AWS 服务目录
  - これにより、顧客は AWS サービスのさまざまなカタログを探索できるようになります。
- **C.** It simplifies organizing and governing commonly deployed IT services
  - 它简化了常见部署的 IT 服务的组织和管理
  - 一般的に導入されている IT サービスの編成と管理を簡素化します。
- **D.** It allows developers to deploy infrastructure on AWS using familiar programming languages
  - 它允许开发人员使用熟悉的编程语言在 AWS 上部署基础设施
  - 開発者は使い慣れたプログラミング言語を使用して AWS にインフラストラクチャをデプロイできます。

**答案 / Answer: `C`**

AWS Service Catalog allows organizations to create and manage approved catalogs of IT services, enabling standardized governance and self-service deployment of commonly used resources across the organization.
Providing descriptions and use cases for AWS services describes the function of the AWS documentation and the AWS console service pages, not AWS Service Catalog, which is a governance and deployment tool rather than an informational reference resource. Enabling customers to explore different catalogs of AWS services describes the AWS Marketplace, where customers can find and purchase third-party software and services, rather than AWS Service Catalog, which manages internally approved IT products. Allowing developers to deploy infrastructure using familiar programming languages describes the AWS Cloud Development Kit, which lets developers define cloud infrastructure in languages such as Python, TypeScript, and Java, and is a developer tooling service rather than a catalog management and governance platform.

AWS Service Catalog 允许组织创建和管理经批准的 IT 服务目录，从而实现整个组织内常用资源的标准化治理和自助部署。
提供 AWS 服务的描述和用例描述了 AWS 文档和 AWS 控制台服务页面的功能，而不是 AWS Service Catalog，后者是一种治理和部署工具，而不是信息参考资源。让客户能够探索不同的 AWS 服务目录描述了 AWS Marketplace，客户可以在其中查找和购买第三方软件和服务，而不是管理内部批准的 IT 产品的 AWS Service Catalog。 AWS 云开发套件允许开发人员使用熟悉的编程语言部署基础设施，它允许开发人员使用 Python、TypeScript 和 Java 等语言定义云基础设施，并且它是一种开发人员工具服务，而不是目录管理和治理平台。

AWS Service Catalog を使用すると、組織は IT サービスの承認済みカタログを作成および管理できるため、標準化されたガバナンスと、組織全体でよく使用されるリソースのセルフサービス展開が可能になります。
AWS サービスの説明とユースケースの提供では、情報リファレンス リソースではなくガバナンスおよびデプロイメント ツールである AWS Service Catalog ではなく、AWS ドキュメントと AWS コンソール サービス ページの機能について説明します。「顧客が AWS サービスのさまざまなカタログを探索できるようにする」では、内部で承認された IT 製品を管理する AWS Service Catalog ではなく、顧客がサードパーティのソフトウェアとサービスを見つけて購入できる AWS Marketplace について説明します。「開発者が使い慣れたプログラミング言語を使用してインフラストラクチャをデプロイできるようにする」では、開発者が Python、TypeScript、Java などの言語でクラウド インフラストラクチャを定義できるようにする AWS クラウド開発キットについて説明します。これは、カタログ管理およびガバナンス プラットフォームではなく、開発者ツール サービスです。

---

## Question 12 · Domain 3

**EN** A customer spent a lot of time configuring a newly deployed Amazon EC2 instance. After the workload increases, the customer decides to provision another EC2 instance with an identical configuration. How can the customer achieve this?

**中** 客户花费了大量时间来配置新部署的 Amazon EC2 实例。工作负载增加后，客户决定配置另一个具有相同配置的 EC2 实例。客户如何才能实现这一目标？

**日本語** 顧客は、新しくデプロイされた Amazon EC2 インスタンスの構成に多くの時間を費やしました。ワークロードが増加した後、顧客は同一の構成で別の EC2 インスタンスをプロビジョニングすることにしました。顧客はどうすればこれを達成できるでしょうか?

- **A.** By creating an AWS Config template from the old instance and launching a new instance from it
  - 通过从旧实例创建 AWS Config 模板并从中启动新实例
  - 古いインスタンスから AWS Config テンプレートを作成し、そこから新しいインスタンスを起動する
- **B.** By creating an EBS Snapshot of the old instance
  - 通过创建旧实例的 EBS 快照
  - 古いインスタンスの EBS スナップショットを作成することによって
- **C.** By installing Aurora on EC2 and launching a new instance from it
  - 通过在 EC2 上安装 Aurora 并从中启动新实例
  - EC2 に Aurora をインストールし、そこから新しいインスタンスを起動する
- **D.** By creating an AMI from the old instance and launching a new instance from it
  - 通过从旧实例创建 AMI 并从中启动新实例
  - 古いインスタンスから AMI を作成し、そこから新しいインスタンスを起動する

**答案 / Answer: `D`**

Creating an AMI from a configured EC2 instance captures its operating system, software, and settings as a reusable template, allowing you to launch new instances with identical configurations at any time.
Creating an AWS Config template manages compliance rules and configuration drift detection, not instance images or replication. Creating an EBS Snapshot backs up the data on a volume but does not capture the full instance configuration including the OS and software settings needed to launch an identical instance. Installing Aurora on EC2 is not a valid approach, as Aurora is a managed database service that runs on AWS infrastructure and is not installed on customer EC2 instances.

从已配置的 EC2 实例创建 AMI 会捕获其操作系统、软件和设置作为可重复使用的模板，从而允许您随时启动具有相同配置的新实例。
创建 AWS Config 模板管理合规性规则和配置偏差检测，而不是实例映像或复制。创建 EBS 快照会备份卷上的数据，但不会捕获完整的实例配置，包括启动相同实例所需的操作系统和软件设置。在 EC2 上安装 Aurora 不是有效的方法，因为 Aurora 是在 AWS 基础设施上运行的托管数据库服务，而不是安装在客户 EC2 实例上。

構成された EC2 インスタンスから AMI を作成すると、そのオペレーティング システム、ソフトウェア、設定が再利用可能なテンプレートとしてキャプチャされ、いつでも同一の構成で新しいインスタンスを起動できるようになります。
AWS Config テンプレートを作成すると、インスタンス イメージやレプリケーションではなく、コンプライアンス ルールと構成ドリフト検出が管理されます。EBS スナップショットを作成すると、ボリューム上のデータがバックアップされますが、同一のインスタンスを起動するために必要な OS やソフトウェア設定を含む完全なインスタンス構成はキャプチャされません。Aurora は AWS インフラストラクチャ上で実行されるマネージド データベース サービスであり、顧客の EC2 インスタンスにはインストールされないため、EC2 に Aurora をインストールすることは有効なアプローチではありません。

---

## Question 13 · Domain 1 · Select 2

**EN** Which design principles for cloud architecture are recommended when re-architecting a large monolithic application?

**中** 重新构建大型单体应用程序时，建议采用哪些云架构设计原则？

**日本語** 大規模なモノリシック アプリケーションを再構築する場合、クラウド アーキテクチャのどの設計原則が推奨されますか?

- **A.** Use manual monitoring
  - 使用手动监控
  - 手動監視を使用する
- **B.** Use fixed servers
  - 使用固定服务器
  - 固定サーバーを使用する
- **C.** Implement loose coupling
  - 实施松耦合
  - 疎結合の実装
- **D.** Rely on individual components
  - 依赖各个组件
  - 個々のコンポーネントに依存する
- **E.** Design for scalability
  - 可扩展性设计
  - スケーラビリティを考慮した設計

**答案 / Answer: `C,E`**

Loose coupling reduces inter-component dependencies so that a failure in one part of the application does not cascade to others, and designing for scalability ensures each component can independently handle varying loads, both being essential principles when breaking apart a monolithic architecture.
Manual monitoring relies on human observation rather than automated alerting and is an anti-pattern in cloud architecture. Fixed servers contradict the cloud principle of elasticity and scalability, locking capacity to a predetermined amount regardless of demand. Relying on individual components is the defining characteristic of a monolithic architecture and is the problem being solved, not a recommended design principle.

松散耦合减少了组件间的依赖性，以便应用程序某个部分的故障不会连锁到其他部分，而可扩展性设计则确保每个组件都可以独立处理不同的负载，这两者都是分解整体架构时的基本原则。
手动监控依赖于人类观察而不是自动警报，是云架构中的反模式。固定服务器与云的弹性和可扩展性原则相矛盾，无论需求如何，都将容量锁定在预定数量。依赖单个组件是整体架构的定义特征，也是要解决的问题，而不是推荐的设计原则。

疎結合によりコンポーネント間の依存関係が軽減されるため、アプリケーションの一部での障害が他の部分に連鎖することがなくなり、スケーラビリティを考慮した設計により、各コンポーネントがさまざまな負荷を個別に処理できるようになります。どちらも、モノリシック アーキテクチャを分割する際の重要な原則です。
手動監視は自動アラートではなく人間の観察に依存しており、クラウド アーキテクチャではアンチパターンです。固定サーバーはクラウドの弾力性と拡張性の原則に反し、需要に関係なく容量を所定の量にロックします。個々のコンポーネントに依存することは、モノリシック アーキテクチャの特徴であり、解決すべき問題であり、推奨される設計原則ではありません。

---

## Question 14 · Domain 3

**EN** Which of the following is true regarding the AWS availability zones and edge locations?

**中** 关于 AWS 可用区和边缘站点，以下哪一项是正确的？

**日本語** AWS アベイラビリティゾーンとエッジロケーションに関して正しいのは次のうちどれですか?

- **A.** Edge locations are located in separate Availability Zones worldwide to serve global customers
  - 边缘站点位于全球不同的可用区，为全球客户提供服务
  - エッジ ロケーションは世界中の個別のアベイラビリティ ゾーンに配置され、世界中の顧客にサービスを提供します
- **B.** An availability zone exists within an edge location to distribute content globally with low latency
  - 边缘位置内存在可用区，可以低延迟地在全球范围内分发内容
  - エッジロケーション内にアベイラビリティゾーンが存在し、低遅延でコンテンツをグローバルに配信します
- **C.** An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations
  - 可用区是 AWS 提供多个物理上分离且隔离的边缘站点的地理位置
  - アベイラビリティーゾーンは、AWS が物理的に分離された複数のエッジロケーションを提供する地理的な場所です。
- **D.** An AWS Availability Zone is an isolated location within an AWS Region, however edge locations are located in multiple cities worldwide
  - AWS 可用区是 AWS 区域内的一个隔离位置，但边缘站点位于全球多个城市
  - AWS アベイラビリティーゾーンは AWS リージョン内の孤立した場所ですが、エッジロケーションは世界中の複数の都市にあります

**答案 / Answer: `D`**

An Availability Zone is an isolated data center location within an AWS Region with independent power, cooling, and networking, while edge locations are separate infrastructure points distributed across hundreds of cities worldwide to serve content closer to end users.
Edge locations are located in separate Availability Zones worldwide to serve global customers edge locations are an independent layer of infrastructure and are not located within or associated with Availability Zones. An availability zone exists within an edge location to distribute content globally with low latency the relationship is inverted here, and Availability Zones are part of Regions, not contained within edge locations. An Availability Zone is a geographic location where AWS provides multiple, physically separated and isolated edge locations this confuses the definition of an Availability Zone with that of a Region, and edge locations are not nested inside Availability Zones.

可用区是 AWS 区域内的独立数据中心位置，具有独立的电源、冷却和网络，而边缘位置是分布在全球数百个城市的独立基础设施点，旨在为更接近最终用户的内容提供服务。
边缘站点位于全球不同的可用区中，为全球客户提供服务。边缘站点是独立的基础设施层，不位于可用区内或与可用区关联。可用区存在于边缘位置内，用于以低延迟在全球范围内分发内容，此处的关系是相反的，可用区是区域的一部分，不包含在边缘位置内。可用区是 AWS 提供多个物理上分离且隔离的边缘站点的地理位置，这将可用区的定义与区域的定义混淆，并且边缘站点不嵌套在可用区内。

アベイラビリティーゾーンは、独立した電源、冷却、ネットワーキングを備えた AWS リージョン内の独立したデータセンターの場所であり、一方、エッジロケーションは、エンドユーザーに近い場所でコンテンツを提供するために、世界中の数百の都市に分散された個別のインフラストラクチャ ポイントです。
エッジ ロケーションは、世界中の顧客にサービスを提供するために、世界中の個別のアベイラビリティ ゾーンに配置されます。エッジ ロケーションはインフラストラクチャの独立した層であり、アベイラビリティ ゾーン内に配置されたり、アベイラビリティ ゾーンに関連付けられたりすることはありません。アベイラビリティーゾーンはエッジロケーション内に存在し、低遅延でコンテンツをグローバルに配信します。ここでは関係が逆転し、アベイラビリティーゾーンはリージョンの一部であり、エッジロケーション内には含まれません。アベイラビリティーゾーンは、AWS が物理的に分離された複数のエッジロケーションを提供する地理的な場所です。これにより、アベイラビリティーゾーンの定義とリージョンの定義が混同され、エッジロケーションはアベイラビリティーゾーン内にネストされません。

---

## Question 15 · Domain 2 · Select 2

**EN** Which of the following are types of AWS Identity and Access Management (IAM) identities?

**中** 以下哪些是 AWS Identity and Access Management (IAM) 身份类型？

**日本語** AWS Identity and Access Management (IAM) ID のタイプは次のうちどれですか?

- **A.** AWS Resource Groups
  - AWS 资源组
  - AWS リソースグループ
- **B.** IAM Policies
  - IAM 政策
  - IAM ポリシー
- **C.** IAM Roles
  - IAM 角色
  - IAM の役割
- **D.** IAM Users
  - IAM 用户
  - IAM ユーザー
- **E.** AWS Organizations
  - AWS Organizations
  - AWS Organizations

**答案 / Answer: `C,D`**

IAM Users represent individual people or applications with specific credentials and permissions, and IAM Roles provide temporary security credentials that can be assumed by users, services, or AWS resources. Both are types of IAM identities.
AWS Resource Groups organize AWS resources by tags or CloudFormation stacks to make it easier to manage and automate operations across groups of resources, and are not IAM identities that can be used for authentication or permission assignment. IAM Policies are JSON documents that define permissions specifying allowed or denied actions on AWS resources, and are permission documents attached to identities rather than identity types themselves. AWS Organizations is a service for managing multiple AWS accounts under a central structure for consolidated billing and governance, and is an account management service rather than an IAM identity type.

IAM 用户代表具有特定凭证和权限的个人或应用程序，IAM 角色提供可由用户、服务或 AWS 资源代入的临时安全凭证。两者都是 IAM 身份的类型。
AWS 资源组通过标签或 CloudFormation 堆栈组织 AWS 资源，以便更轻松地管理和自动化跨资源组的操作，并且不是可用于身份验证或权限分配的 IAM 身份。 IAM 策略是定义权限的 JSON 文档，指定对 AWS 资源允许或拒绝的操作，并且是附加到身份而不是身份类型本身的权限文档。 AWS Organizations 是一项用于在统一计费和治理的中央结构下管理多个 AWS 账户的服务，并且是一项账户管理服务，而不是 IAM 身份类型。

IAM ユーザーは、特定の認証情報とアクセス許可を持つ個々の個人またはアプリケーションを表し、IAM ロールは、ユーザー、サービス、または AWS リソースが引き受けることができる一時的なセキュリティ認証情報を提供します。どちらも IAM ID のタイプです。
AWS リソース グループは、タグまたは CloudFormation スタックによって AWS リソースを編成し、リソースのグループ全体での操作の管理と自動化を容易にします。認証やアクセス許可の割り当てに使用できる IAM ID ではありません。IAM ポリシーは、AWS リソースに対する許可または拒否されるアクションを指定するアクセス許可を定義する JSON ドキュメントであり、アイデンティティ タイプ自体ではなくアイデンティティに添付されるアクセス許可ドキュメントです。AWS Organizations は、一括請求とガバナンスの中央構造の下で複数の AWS アカウントを管理するためのサービスであり、IAM ID タイプではなくアカウント管理サービスです。

---

## Question 16 · Domain 2

**EN** Which of the following resources can an AWS customer use to learn more about prohibited uses of the services offered by AWS?

**中** AWS 客户可以使用以下哪些资源来了解有关 AWS 提供的服务的禁止使用的更多信息？

**日本語** AWS の顧客は、AWS が提供するサービスの禁止されている使用について詳しく知るために次のリソースを使用できますか?

- **A.** AWS Service Control Policies (SCPs)
  - AWS 服务控制策略 (SCP)
  - AWS サービス コントロール ポリシー (SCP)
- **B.** AWS Artifact
  - AWS Artifact
  - AWS Artifact
- **C.** AWS Budgets
  - AWS Budgets
  - AWS Budgets
- **D.** AWS Acceptable Use Policy
  - AWS 可接受使用政策
  - AWS の利用規約

**答案 / Answer: `D`**

The AWS Acceptable Use Policy outlines prohibited uses of AWS services, including activities such as sending spam, hosting illegal content, or launching attacks, and applies to all AWS customers and users.
AWS Service Control Policies are permission guardrails applied within AWS Organizations to restrict what actions accounts can perform, not a document describing prohibited uses of AWS services to external customers. AWS Artifact is a self-service portal for accessing AWS compliance reports and security documentation such as SOC reports and ISO certifications, not a resource for understanding usage restrictions. AWS Budgets is a cost management tool for setting spending thresholds and receiving alerts, unrelated to acceptable use or prohibited activities.

AWS 可接受使用政策概述了 AWS 服务的禁止使用，包括发送垃圾邮件、托管非法内容或发起攻击等活动，并适用于所有 AWS 客户和用户。
AWS 服务控制策略是 AWS Organizations 中应用的权限护栏，用于限制账户可以执行的操作，而不是描述禁止外部客户使用 AWS 服务的文档。 AWS Artifact 是一个用于访问 AWS 合规性报告和安全文档（例如 SOC 报告和 ISO 认证）的自助服务门户，而不是用于了解使用限制的资源。 AWS Budgets 是一种成本管理工具，用于设置支出阈值和接收警报，与可接受的使用或禁止的活动无关。

AWS 利用規約は、スパムの送信、違法なコンテンツのホスティング、攻撃の開始などの活動を含む AWS サービスの禁止された使用を概説しており、すべての AWS の顧客およびユーザーに適用されます。
AWS サービス コントロール ポリシーは、アカウントが実行できるアクションを制限するために AWS Organizations 内で適用されるアクセス許可のガードレールであり、外部顧客に対する AWS サービスの禁止された使用を説明する文書ではありません。AWS Artifact は、AWS コンプライアンス レポートや、SOC レポートや ISO 認証などのセキュリティ文書にアクセスするためのセルフサービス ポータルであり、使用制限を理解するためのリソースではありません。AWS Budgets は、許容される使用や禁止されているアクティビティとは無関係に、支出のしきい値を設定し、アラートを受信するためのコスト管理ツールです。

---

## Question 17 · Domain 2 · Select 2

**EN** Under the Shared Responsibility Model, which of the following controls do customers fully inherit from AWS?

**中** 在责任共担模型下，客户完全从 AWS 继承了以下哪些控制权？

**日本語** 責任共有モデルでは、お客様が AWS から完全に継承する制御は次のうちどれですか?

- **A.** Patch management controls
  - 补丁管理控制
  - パッチ管理コントロール
- **B.** Database controls
  - 数据库控件
  - データベース制御
- **C.** Awareness & Training
  - 意识与培训
  - 意識向上とトレーニング
- **D.** Environmental controls
  - 环境控制
  - 環境管理
- **E.** Physical controls
  - 物理控制
  - 物理的制御

**答案 / Answer: `D,E`**

Physical controls such as data center physical security and hardware protection, and environmental controls such as power, cooling, and fire suppression, are entirely managed by AWS and fully inherited by customers who have no access to or responsibility for these areas.
Patch management is a shared control where AWS patches the underlying infrastructure and managed services, while customers retain responsibility for patching their own operating systems and applications. Database controls are a shared control where AWS manages the database engine in fully managed services, while customers remain responsible for access management, schema design, and data handling. Awareness and training is a shared control where AWS trains its own employees, while customers are independently responsible for training their own staff on security and compliance practices.

数据中心物理安全和硬件保护等物理控制，以及电源、冷却和灭火等环境控制，完全由 AWS 管理，并由无权访问或负责这些区域的客户完全继承。
补丁管理是一种共享控制，AWS 可以在其中修补底层基础设施和托管服务，而客户则保留修补自己的操作系统和应用程序的责任。数据库控制是一种共享控制，AWS 在完全托管的服务中管理数据库引擎，而客户仍然负责访问管理、架构设计和数据处理。意识和培训是一种共享控制，AWS 培训自己的员工，而客户则独立负责对自己的员工进行安全和合规实践培训。

データセンターの物理的セキュリティやハードウェア保護などの物理的制御、および電源、冷却、消火などの環境制御は AWS によって完全に管理され、これらの領域へのアクセスや責任を持たない顧客によって完全に継承されます。
パッチ管理は、AWS が基盤となるインフラストラクチャとマネージドサービスにパッチを適用する共有制御であり、お客様は独自のオペレーティングシステムとアプリケーションにパッチを適用する責任を負います。データベース コントロールは、AWS がフルマネージド サービスでデータベース エンジンを管理する共有コントロールであり、アクセス管理、スキーマ設計、およびデータ処理は顧客が引き続き責任を負います。意識向上とトレーニングは、AWS が自社の従業員をトレーニングする共有管理であり、お客様はセキュリティとコンプライアンスの実践について自社のスタッフをトレーニングする責任を独自に負います。

---

## Question 18 · Domain 3

**EN** A developer wants to quickly deploy and manage his application in the AWS Cloud, but he doesn't have any experience with cloud computing. Which of the following AWS services would help the developer achieve his goal?

**中** 一位开发人员希望在 AWS 云中快速部署和管理他的应用程序，但他没有任何云计算经验。以下哪些 AWS 服务可以帮助开发人员实现其目标？

**日本語** 開発者は、アプリケーションを AWS クラウドに迅速にデプロイして管理したいと考えていますが、クラウド コンピューティングの経験はありません。次の AWS サービスのうち、開発者が目標を達成するのに役立つものはどれですか?

- **A.** AWS Fargate
  - AWS 法门
  - AWS ファーゲート
- **B.** AWS Batch
  - AWS 批处理
  - AWSバッチ
- **C.** Amazon Personalize
  - 亚马逊个性化
  - アマゾンパーソナライズ
- **D.** AWS Elastic Beanstalk
  - AWS 弹性豆茎
  - AWS Elastic Beanstalk

**答案 / Answer: `D`**

AWS Elastic Beanstalk automatically handles the deployment details of capacity provisioning, load balancing, auto-scaling, and application health monitoring, allowing developers without cloud infrastructure experience to deploy and manage applications without needing to understand the underlying infrastructure.
AWS Fargate is a serverless compute engine for containers that removes the need to manage servers for containerised workloads, but it requires knowledge of container concepts and configuration, making it more complex to adopt for developers without cloud experience compared to the abstraction Beanstalk provides. AWS Batch manages the infrastructure required to run batch computing jobs at scale, and is designed for processing large numbers of batch workloads rather than helping developers quickly deploy and manage general-purpose applications. Amazon Personalize is a fully managed machine learning service that builds real-time personalization and recommendation systems, and is an AI/ML service for a specific use case rather than a general application deployment and management platform.

AWS Elastic Beanstalk 自动处理容量配置、负载均衡、自动扩展和应用程序运行状况监控等部署细节，让没有云基础设施经验的开发人员无需了解底层基础设施即可部署和管理应用程序。
AWS Fargate 是一种用于容器的无服务器计算引擎，无需管理容器化工作负载的服务器，但它需要了解容器概念和配置，与 Beanstalk 提供的抽象相比，对于没有云经验的开发人员来说，采用起来更加复杂。 AWS Batch 管理大规模运行批处理计算作业所需的基础设施，旨在处理大量批处理工作负载，而不是帮助开发人员快速部署和管理通用应用程序。 Amazon Personalize 是一项完全托管的机器学习服务，可构建实时个性化和推荐系统，并且是针对特定用例的 AI/ML 服务，而不是通用应用程序部署和管理平台。

AWS Elastic Beanstalk は、容量プロビジョニング、ロードバランシング、自動スケーリング、アプリケーションの健全性モニタリングなどのデプロイメントの詳細を自動的に処理するため、クラウドインフラストラクチャの経験がない開発者でも、基礎となるインフラストラクチャを理解することなくアプリケーションをデプロイおよび管理できます。
AWS Fargate はコンテナ用のサーバーレス コンピューティング エンジンで、コンテナ化されたワークロードのサーバーを管理する必要がなくなりますが、コンテナの概念と構成に関する知識が必要なため、Beanstalk が提供する抽象化と比較して、クラウドの経験がない開発者にとっての導入はより複雑になります。AWS Batch は、バッチコンピューティングジョブを大規模に実行するために必要なインフラストラクチャを管理し、開発者が汎用アプリケーションを迅速にデプロイおよび管理できるようにするのではなく、大量のバッチワークロードを処理するように設計されています。Amazon Personalize は、リアルタイムのパーソナライゼーションおよび推奨システムを構築するフルマネージドの機械学習サービスであり、一般的なアプリケーションのデプロイおよび管理プラットフォームではなく、特定のユースケース向けの AI/ML サービスです。

---

## Question 19 · Domain 1 · Select 2

**EN** When comparing AWS Cloud with on-premises Total Cost of Ownership, which expenses must be considered?

**中** 在比较 AWS 云与本地总拥有成本时，必须考虑哪些费用？

**日本語** AWS クラウドとオンプレミスの総所有コストを比較する場合、どの経費を考慮する必要がありますか?

- **A.** Software development
  - 软件开发
  - ソフトウェア開発
- **B.** Project management
  - 项目管理
  - プロジェクト管理
- **C.** Storage hardware
  - 存储硬件
  - ストレージハードウェア
- **D.** Physical servers
  - 物理服务器
  - 物理サーバー
- **E.** Antivirus software license
  - 防病毒软件许可证
  - ウイルス対策ソフトウェアのライセンス

**答案 / Answer: `C,D`**

Storage hardware and physical servers are on-premises capital expenses that must be purchased, maintained, and eventually replaced, making them key differentiators in a TCO comparison since they are eliminated when moving to AWS.
Software development costs remain consistent regardless of whether infrastructure is on-premises or in the cloud and are not a differentiating factor in a TCO analysis. Project management costs also apply equally across both environments and do not change based on infrastructure hosting decisions. Antivirus software licensing remains the customer's responsibility in both on-premises and cloud environments and is not eliminated by moving to AWS.

存储硬件和物理服务器是必须购买、维护并最终更换的本地资本支出，这使得它们成为 TCO 比较中的关键区别因素，因为在迁移到 AWS 时它们被消除了。
无论基础设施是在本地还是在云中，软件开发成本都保持一致，并且不是 TCO 分析中的差异因素。项目管理成本也同样适用于这两种环境，并且不会根据基础设施托管决策而变化。在本地和云环境中，防病毒软件许可仍然是客户的责任，并且不会因迁移到 AWS 而消除。

ストレージハードウェアと物理サーバーはオンプレミスの資本支出であり、購入、保守、最終的には交換する必要がありますが、AWS への移行時にはこれらが不要になるため、TCO 比較における重要な差別化要因となります。
ソフトウェア開発コストは、インフラストラクチャがオンプレミスかクラウドかに関係なく一定であり、TCO 分析における差別化要因ではありません。プロジェクト管理コストも両方の環境に均等に適用され、インフラストラクチャ ホスティングの決定に基づいて変化することはありません。ウイルス対策ソフトウェアのライセンスは、オンプレミス環境でもクラウド環境でも引き続きお客様の責任であり、AWS に移行しても不要になるわけではありません。

---

## Question 20 · Domain 3

**EN** Amazon RDS supports multiple database engines to choose from. Which of the following is not one of them?

**中** Amazon RDS 支持多种数据库引擎可供选择。以下哪一项不是其中之一？

**日本語** Amazon RDS は、複数のデータベース エンジンから選択できるようにサポートしています。次のうち、どれにも当てはまりませんか?

- **A.** PostgreSQL
  - PostgreSQL
  - PostgreSQL
- **B.** Oracle
  - 甲骨文
  - オラクル
- **C.** Microsoft SQL Server
  - 微软 SQL 服务器
  - Microsoft SQLサーバー
- **D.** Teradata
  - 泰拉数据
  - テラデータ

**答案 / Answer: `D`**

Teradata is not a supported engine in Amazon RDS. The supported engines are PostgreSQL, Oracle, Microsoft SQL Server, MySQL, MariaDB, and Amazon Aurora.
PostgreSQL is a fully supported RDS engine available for both standard and Aurora deployments. Oracle is a supported RDS engine, allowing customers to run Oracle databases on managed infrastructure. Microsoft SQL Server is a supported RDS engine, available across several editions including Express, Web, Standard, and Enterprise.

Teradata 不是 Amazon RDS 中受支持的引擎。支持的引擎包括 PostgreSQL、Oracle、Microsoft SQL Server、MySQL、MariaDB 和 Amazon Aurora。
PostgreSQL 是完全受支持的 RDS 引擎，可用于标准部署和 Aurora 部署。 Oracle 是受支持的 RDS 引擎，允许客户在托管基础设施上运行 Oracle 数据库。 Microsoft SQL Server 是受支持的 RDS 引擎，提供多个版本，包括 Express、Web、Standard 和 Enterprise。

Teradata は、Amazon RDS ではサポートされているエンジンではありません。サポートされているエンジンは、PostgreSQL、Oracle、Microsoft SQL Server、MySQL、MariaDB、および Amazon Aurora です。
PostgreSQL は、標準デプロイメントと Aurora デプロイメントの両方で使用できる、完全にサポートされている RDS エンジンです。Oracle はサポートされている RDS エンジンであり、顧客は管理されたインフラストラクチャ上で Oracle データベースを実行できます。Microsoft SQL Server はサポートされている RDS エンジンであり、Express、Web、Standard、Enterprise などの複数のエディションで利用できます。

---

## Question 21 · Domain 1

**EN** A key practice when designing solutions on AWS is to minimize dependencies between components so that the failure of a single component does not impact other components. What is this practice called?

**中** 在 AWS 上设计解决方案时的一个关键实践是最大限度地减少组件之间的依赖关系，以便单个组件的故障不会影响其他组件。这种做法叫什么？

**日本語** AWS でソリューションを設計する際の重要な実践は、単一コンポーネントの障害が他のコンポーネントに影響を与えないように、コンポーネント間の依存関係を最小限に抑えることです。この習慣は何と呼ばれていますか?

- **A.** Elastic coupling
  - 弹性联轴器
  - 弾性カップリング
- **B.** Loosely coupling
  - 松散耦合
  - 疎結合
- **C.** Scalable coupling
  - 可扩展的耦合
  - スケーラブルなカップリング
- **D.** Tightly coupling
  - 紧密耦合
  - 密結合

**答案 / Answer: `B`**

Loose coupling is the design practice of minimizing dependencies between application components so that a failure in one component does not cascade to others, improving overall system resilience.
Elastic coupling is not a recognized cloud design principle or architectural term, and may cause confusion with Amazon EC2 Auto Scaling or Elastic Load Balancing, which are services rather than coupling patterns. Scalable coupling is not a recognized architectural concept, and scalability is a separate design goal achieved through practices such as horizontal scaling rather than a type of component coupling. Tight coupling is the opposite of the correct answer, describing an architecture where components are highly dependent on each other, meaning a failure in one component is more likely to cascade and impact others.

松耦合是一种设计实践，旨在最大限度地减少应用程序组件之间的依赖关系，以便一个组件中的故障不会级联到其他组件，从而提高整体系统的弹性。
弹性耦合不是公认的云设计原则或架构术语，可能会导致与 Amazon EC2 Auto Scaling 或 Elastic Load Balancing 混淆，后者是服务而不是耦合模式。可扩展耦合不是一个公认的架构概念，可扩展性是通过水平扩展等实践实现的单独设计目标，而不是一种组件耦合。紧耦合与正确答案相反，它描述了一种组件彼此高度依赖的架构，这意味着一个组件的故障更有可能级联并影响其他组件。

疎結合は、アプリケーション コンポーネント間の依存関係を最小限に抑え、1 つのコンポーネントでの障害が他のコンポーネントに波及しないようにする設計手法であり、システム全体の回復力が向上します。
エラスティック カップリングはクラウド設計原則またはアーキテクチャ用語として認識されていないため、カップリング パターンではなくサービスである Amazon EC2 Auto Scaling または Elastic Load Balancing との混乱を引き起こす可能性があります。スケーラブルな結合は認識されたアーキテクチャ概念ではなく、スケーラビリティはコンポーネント結合の一種ではなく、水平スケーリングなどの実践を通じて達成される別の設計目標です。密結合は正解の逆で、コンポーネントが相互に大きく依存しているアーキテクチャを表します。つまり、1 つのコンポーネントでの障害が連鎖して他のコンポーネントに影響を与える可能性が高くなります。

---

## Question 22 · Domain 4 · Select 2

**EN** Savings Plans are available for which of the following AWS compute services?

**中** Savings Plans 适用于以下哪些 AWS 计算服务？

**日本語** Savings Plans は、次の AWS コンピューティング サービスのどれで利用できますか?

- **A.** AWS Batch
  - AWS 批处理
  - AWSバッチ
- **B.** AWS Outposts
  - AWS 前哨站
  - AWS アウトポスト
- **C.** Amazon Lightsail
  - Amazon Lightsail
  - Amazon Lightsail
- **D.** Amazon EC2
  - Amazon EC2
  - Amazon EC2
- **E.** AWS Lambda
  - AWS Lambda
  - AWS Lambda

**答案 / Answer: `D,E`**

AWS Savings Plans are flexible pricing models available for Amazon EC2 and AWS Lambda, offering savings over On-Demand in exchange for a one or three-year usage commitment.
AWS Batch is a managed service for running batch computing workloads at scale, and while it can use EC2 instances that may be covered by Savings Plans, AWS Batch itself as a service is not directly covered by a Savings Plan commitment. AWS Outposts extends AWS infrastructure to customer on-premises environments, and workloads running on Outposts are not covered by Compute Savings Plans in the same way as standard AWS Region deployments. Amazon Lightsail is a simplified compute service with straightforward bundled pricing for virtual servers and web applications, and is not covered by AWS Savings Plans.

AWS Savings Plans 是适用于 Amazon EC2 和 AWS Lambda 的灵活定价模型，通过一年或三年的使用承诺，提供比按需更优惠的服务。
AWS Batch 是一项用于大规模运行批量计算工作负载的托管服务，虽然它可以使用 Savings Plans 可能涵盖的 EC2 实例，但 AWS Batch 本身作为一项服务并不直接包含在 Savings Plan 承诺中。 AWS Outposts 将 AWS 基础设施扩展到客户本地环境，并且与标准 AWS 区域部署一样，计算节省计划不涵盖在 Outposts 上运行的工作负载。 Amazon Lightsail 是一项简化的计算服务，为虚拟服务器和 Web 应用程序提供直接的捆绑定价，并且不包含在 AWS Savings Plans 范围内。

AWS Savings Plans は、Amazon EC2 および AWS Lambda で利用できる柔軟な料金モデルで、1 年または 3 年の使用契約と引き換えにオンデマンドよりも節約を提供します。
AWS Batch は、バッチ コンピューティング ワークロードを大規模に実行するためのマネージド サービスであり、Savings Plans の対象となる EC2 インスタンスを使用できますが、サービスとしての AWS Batch 自体は Savings Plan コミットメントの直接の対象ではありません。AWS Outposts は、AWS インフラストラクチャを顧客のオンプレミス環境に拡張します。Outposts で実行されるワークロードは、標準の AWS リージョンのデプロイメントと同様に、Compute Savings Plans の対象になりません。Amazon Lightsail は、仮想サーバーと Web アプリケーションの簡単なバンドル料金を備えた簡素化されたコンピューティング サービスであり、AWS Savings Plans の対象ではありません。

---

## Question 23 · Domain 4

**EN** Which AWS Group assists customers in achieving their desired business outcomes?

**中** 哪个 AWS 集团可帮助客户实现所需的业务成果？

**日本語** お客様が望むビジネス成果の達成を支援しているのはどの AWS グループですか?

- **A.** AWS Security Team
  - AWS 安全团队
  - AWSセキュリティチーム
- **B.** AWS Professional Services
  - AWS 专业服务
  - AWS プロフェッショナルサービス
- **C.** AWS Trusted Advisor
  - AWS Trusted Advisor
  - AWS Trusted Advisor
- **D.** AWS Concierge Support Team
  - AWS 礼宾支持团队
  - AWS コンシェルジュ サポート チーム

**答案 / Answer: `B`**

AWS Professional Services is a team of experts that works directly with customers to help them achieve their desired business outcomes through cloud strategy, architecture guidance, and migration support.
The AWS Security Team manages AWS's own internal security posture and the responsible disclosure program for AWS infrastructure, and is not a customer-facing team that works with customers to achieve business outcomes on AWS. AWS Trusted Advisor inspects your AWS environment and provides automated recommendations across security, cost, performance, and fault tolerance, and is a self-service advisory tool rather than a professional services team that works directly with customers. The AWS Concierge Support Team is available to Enterprise Support customers for billing and account inquiries, providing dedicated account guidance rather than strategic business outcome or cloud migration support.

AWS 专业服务是一个专家团队，直接与客户合作，通过云策略、架构指导和迁移支持帮助他们实现所需的业务成果。
AWS 安全团队负责管理 AWS 自身的内部安全状况以及 AWS 基础设施的负责任的披露计划，而不是一个面向客户的团队，与客户合作在 AWS 上实现业务成果。 AWS Trusted Advisor 检查您的 AWS 环境并提供安全性、成本、性能和容错方面的自动化建议，并且是一种自助咨询工具，而不是直接与客户合作的专业服务团队。 AWS 礼宾支持团队可为企业支持客户提供计费和账户查询服务，提供专门的账户指导，而不是战略业务成果或云迁移支持。

AWS プロフェッショナル サービスは、クラウド戦略、アーキテクチャ ガイダンス、移行サポートを通じて、お客様と直接連携して、お客様が望むビジネス成果を達成できるよう支援する専門家チームです。
AWS セキュリティ チームは、AWS 独自の内部セキュリティ体制と AWS インフラストラクチャに関する責任ある開示プログラムを管理しており、AWS でビジネスの成果を達成するために顧客と協力する顧客対応チームではありません。AWS Trusted Advisor は、AWS 環境を検査し、セキュリティ、コスト、パフォーマンス、フォールト トレランスにわたる自動推奨事項を提供します。これは、顧客と直接連携するプロフェッショナル サービス チームではなく、セルフサービス アドバイザリー ツールです。AWS コンシェルジュ サポート チームは、エンタープライズ サポートの顧客に請求やアカウントに関する問い合わせを提供し、戦略的なビジネス成果やクラウド移行サポートではなく、専用のアカウント ガイダンスを提供します。

---

## Question 24 · Domain 1

**EN** How can you increase your application's fault-tolerance while it is being hosted in AWS?

**中** 当应用程序托管在 AWS 中时，如何提高其容错能力？

**日本語** AWS でホストされているアプリケーションの耐障害性を高めるにはどうすればよいでしょうか?

- **A.** Deploy your application across multiple EC2 instances
  - 跨多个 EC2 实例部署您的应用程序
  - 複数の EC2 インスタンスにアプリケーションをデプロイする
- **B.** Deploy your application across multiple Availability Zones
  - 跨多个可用区部署您的应用程序
  - アプリケーションを複数のアベイラビリティーゾーンにデプロイする
- **C.** Host your application on one powerful EC2 instance type instead of multiple smaller instances
  - 将您的应用程序托管在一个功能强大的 EC2 实例类型上，而不是多个较小的实例上
  - 複数の小さなインスタンスではなく、1 つの強力な EC2 インスタンス タイプでアプリケーションをホストします
- **D.** Deploy the underlying application resources across multiple subnets
  - 跨多个子网部署底层应用程序资源
  - 基盤となるアプリケーション リソースを複数のサブネットにデプロイする

**答案 / Answer: `B`**

Deploying across multiple Availability Zones ensures that if one AZ experiences a failure, the application continues running in another, providing fault tolerance through physical redundancy within a Region.
Deploying across multiple EC2 instances improves capacity and availability within a single location but does not protect against an AZ-level failure if all instances are in the same zone. Hosting on one powerful EC2 instance consolidates the application onto a single point of failure, which reduces fault tolerance rather than increasing it. Deploying across multiple subnets improves network segmentation but does not provide fault tolerance unless those subnets span multiple Availability Zones.

跨多个可用区部署可确保如果一个可用区发生故障，应用程序可以在另一个可用区中继续运行，从而通过区域内的物理冗余提供容错能力。
跨多个 EC2 实例进行部署可以提高单个位置内的容量和可用性，但如果所有实例都位于同一区域中，则无法防止出现可用区级故障。托管在一个强大的 EC2 实例上可将应用程序整合到单点故障上，从而降低而不是提高容错能力。跨多个子网部署可以改善网络分段，但不能提供容错能力，除非这些子网跨越多个可用区。

複数のアベイラビリティーゾーンにデプロイすると、1 つの AZ で障害が発生した場合でも、アプリケーションは別の AZ で実行を継続し、リージョン内の物理的な冗長性によるフォールト トレランスが提供されます。
複数の EC2 インスタンスにデプロイすると、単一の場所内の容量と可用性が向上しますが、すべてのインスタンスが同じゾーンにある場合、AZ レベルの障害からは保護されません。1 つの強力な EC2 インスタンスでホスティングすると、アプリケーションが単一障害点に統合され、フォールト トレランスが向上するのではなく低下します。複数のサブネットにまたがってデプロイすると、ネットワークのセグメンテーションが向上しますが、それらのサブネットが複数のアベイラビリティーゾーンにまたがっていない限り、フォールトトレランスは提供されません。

---

## Question 25 · Domain 3 · Select 2

**EN** Which of the following are examples of AWS-managed databases?

**中** 以下哪些是 AWS 托管数据库的示例？

**日本語** AWS 管理のデータベースの例は次のうちどれですか?

- **A.** Amazon Neptune
  - 亚马逊海王星
  - アマゾン ネプチューン
- **B.** Amazon CloudSearch
  - 亚马逊云搜索
  - アマゾンクラウドサーチ
- **C.** Microsoft SQL Server on Amazon EC2
  - Amazon EC2 上的 Microsoft SQL Server
  - Amazon EC2 上の Microsoft SQL Server
- **D.** MySQL on Amazon EC2
  - Amazon EC2 上的 MySQL
  - Amazon EC2 上の MySQL
- **E.** Amazon RDS for MySQL
  - Amazon RDS 用于 MySQL
  - MySQL の Amazon RDS

**答案 / Answer: `A,E`**

Amazon Neptune is a fully managed graph database, and Amazon RDS for MySQL is a fully managed relational database, with AWS handling provisioning, patching, backups, and recovery for both.
Amazon CloudSearch is a managed search service for building search functionality into applications, and is not a database service. Microsoft SQL Server on Amazon EC2 is a self-managed database deployment where the customer is responsible for installation, patching, backups, and maintenance, making it the opposite of an AWS-managed database. MySQL on Amazon EC2 is also a self-managed deployment with the same customer responsibilities, and does not benefit from the managed database features that AWS provides through RDS.

Amazon Neptune 是一个完全托管的图形数据库，Amazon RDS for MySQL 是一个完全托管的关系数据库，AWS 负责处理两者的配置、修补、备份和恢复。
Amazon CloudSearch 是一种托管搜索服务，用于将搜索功能构建到应用程序中，而不是数据库服务。 Amazon EC2 上的 Microsoft SQL Server 是一种自我管理的数据库部署，客户负责安装、修补、备份和维护，这与 AWS 管理的数据库相反。 Amazon EC2 上的 MySQL 也是自我管理部署，具有相同的客户责任，并且不受益于 AWS 通过 RDS 提供的托管数据库功能。

Amazon Neptune はフルマネージドのグラフ データベースであり、Amazon RDS for MySQL はフルマネージドのリレーショナル データベースであり、両方のプロビジョニング、パッチ適用、バックアップ、リカバリを AWS が処理します。
Amazon CloudSearch は、アプリケーションに検索機能を組み込むためのマネージド検索サービスであり、データベース サービスではありません。Amazon EC2 上の Microsoft SQL Server はセルフマネージド データベース デプロイメントであり、インストール、パッチ適用、バックアップ、メンテナンスはお客様が責任を負い、AWS マネージド データベースとは対照的です。Amazon EC2 上の MySQL も、同じ顧客責任を持つ自己管理型のデプロイメントであり、AWS が RDS を通じて提供するマネージド データベース機能の恩恵を受けません。

---

## Question 26 · Domain 1

**EN** Which architectural principle is used when deploying an Amazon Relational Database Service (Amazon RDS) instance in Multiple Availability Zone mode?

**中** 在多可用区模式下部署 Amazon Relational Database Service (Amazon RDS) 实例时使用哪种架构原则？

**日本語** Amazon Relational Database Service (Amazon RDS) インスタンスをマルチ アベイラビリティ ゾーン モードでデプロイする場合、どのアーキテクチャ原則が使用されますか?

- **A.** Implement loose coupling
  - 实施松耦合
  - 疎結合の実装
- **B.** Design for failure
  - 为失败而设计
  - 失敗に備えた設計
- **C.** Automate everything that can be automated
  - 自动化一切可以自动化的事情
  - 自動化できるものはすべて自動化する
- **D.** Use services, not servers
  - 使用服务，而不是服务器
  - サーバーではなくサービスを使用する

**答案 / Answer: `B`**

Deploying RDS in Multi-AZ mode applies the design for failure principle by maintaining a synchronous standby replica in another Availability Zone, automatically failing over if the primary instance becomes unavailable.
Loose coupling refers to reducing interdependencies between application components so failures do not cascade, not to database redundancy across zones. Automate everything that can be automated refers to replacing manual operational tasks with scripted or managed processes to improve consistency. Use services, not servers refers to leveraging managed AWS services instead of provisioning and maintaining your own infrastructure.

在多可用区模式下部署 RDS 通过在另一个可用区维护同步备用副本来应用故障设计原则，在主实例不可用时自动进行故障转移。
松耦合是指减少应用程序组件之间的相互依赖性，使故障不会级联，而不是跨区域的数据库冗余。自动化一切可以自动化的事情是指用脚本化或托管流程代替手动操作任务，以提高一致性。使用服务而不是服务器是指利用托管 AWS 服务而不是配置和维护您自己的基础设施。

RDS をマルチ AZ モードでデプロイすると、別のアベイラビリティーゾーンに同期スタンバイレプリカを維持することで障害に備えた設計の原則が適用され、プライマリインスタンスが使用できなくなった場合には自動的にフェイルオーバーします。
疎結合とは、ゾーン間のデータベースの冗長性ではなく、障害が連鎖しないようにアプリケーション コンポーネント間の相互依存性を減らすことを指します。自動化できるものはすべて自動化することは、一貫性を向上させるために手動の運用タスクをスクリプト化されたプロセスまたは管理されたプロセスに置き換えることを指します。サーバーではなくサービスを使用するということは、独自のインフラストラクチャをプロビジョニングおよび保守する代わりに、マネージド AWS サービスを活用することを指します。

---

## Question 27 · Domain 3

**EN** Which service can you use to route traffic to the endpoint that provides the best application performance for your users worldwide?

**中** 您可以使用哪种服务将流量路由到为全球用户提供最佳应用程序性能的端点？

**日本語** 世界中のユーザーに最高のアプリケーション パフォーマンスを提供するエンドポイントにトラフィックをルーティングするために使用できるサービスはどれですか?

- **A.** AWS Global Accelerator
  - AWS 全球加速器
  - AWS グローバルアクセラレーター
- **B.** AWS Data Pipeline
  - AWS 数据管道
  - AWS データパイプライン
- **C.** Amazon DynamoDB Accelerator (DAX)
  - Amazon DynamoDB 加速器 (DAX)
  - Amazon DynamoDB アクセラレータ (DAX)
- **D.** Amazon S3 Transfer Acceleration
  - Amazon S3 传输加速
  - Amazon S3 転送加速

**答案 / Answer: `A`**

AWS Global Accelerator uses the AWS global network to route user traffic to the optimal healthy endpoint based on performance, geography, and health checks, improving application performance and availability for global users.
AWS Data Pipeline (deprecated) is a service for orchestrating and automating the movement and transformation of data between AWS services, unrelated to traffic routing or application performance. Amazon DynamoDB Accelerator is an in-memory cache specifically for DynamoDB that reduces read latency for database queries, not a service for routing application traffic to optimal endpoints. Amazon S3 Transfer Acceleration speeds up uploads to S3 buckets by routing traffic through CloudFront edge locations, which is specific to S3 data transfer and not a general application traffic routing solution.

AWS Global Accelerator 使用 AWS 全球网络根据性能、地理位置和运行状况检查将用户流量路由到最佳的健康终端节点，从而为全球用户提高应用程序性能和可用性。
AWS Data Pipeline（已弃用）是一项用于编排和自动化 AWS 服务之间的数据移动和转换的服务，与流量路由或应用程序性能无关。 Amazon DynamoDB 加速器是专门针对 DynamoDB 的内存缓存，可减少数据库查询的读取延迟，而不是用于将应用程序流量路由到最佳端点的服务。 Amazon S3 传输加速通过 CloudFront 边缘站点路由流量来加速到 S3 存储桶的上传速度，这是特定于 S3 数据传输的，而不是通用应用程序流量路由解决方案。

AWS Global Accelerator は、AWS グローバル ネットワークを使用して、パフォーマンス、地理、ヘルスチェックに基づいてユーザー トラフィックを最適な正常なエンドポイントにルーティングし、グローバル ユーザーのアプリケーションのパフォーマンスと可用性を向上させます。
AWS Data Pipeline (非推奨) は、トラフィック ルーティングやアプリケーションのパフォーマンスとは無関係に、AWS サービス間のデータの移動と変換を調整および自動化するためのサービスです。Amazon DynamoDB アクセラレータは、データベース クエリの読み取り遅延を短縮する DynamoDB 専用のメモリ内キャッシュであり、アプリケーション トラフィックを最適なエンドポイントにルーティングするサービスではありません。Amazon S3 Transfer Acceleration は、CloudFront エッジロケーションを介してトラフィックをルーティングすることにより、S3 バケットへのアップロードを高速化します。これは、S3 データ転送に固有であり、一般的なアプリケーション トラフィック ルーティング ソリューションではありません。

---

## Question 28 · Domain 1

**EN** What costs are included when comparing AWS Total Cost of Ownership (TCO) with on-premises TCO?

**中** 将 AWS 总拥有成本 (TCO) 与本地 TCO 进行比较时包含哪些成本？

**日本語** AWS の総所有コスト (TCO) とオンプレミスの TCO を比較する場合、どのようなコストが含まれますか?

- **A.** Project management
  - 项目管理
  - プロジェクト管理
- **B.** Antivirus software licensing
  - 防病毒软件许可
  - ウイルス対策ソフトウェアのライセンス
- **C.** Data center security
  - 数据中心安全
  - データセンターのセキュリティ
- **D.** Software development
  - 软件开发
  - ソフトウェア開発

**答案 / Answer: `C`**

On-premises TCO includes physical data center security costs such as guards, access controls, and surveillance. These are eliminated when moving to AWS, where physical security is entirely AWS's responsibility.
Project management costs apply equally to both on-premises and cloud environments and are not a differentiating factor in a TCO comparison. Antivirus software licensing is an application-layer cost that remains the customer's responsibility regardless of whether they run on-premises or on AWS. Software development costs are also consistent across environments and do not change based on infrastructure hosting decisions.

本地 TCO 包括物理数据中心安全成本，例如警卫、访问控制和监控。当迁移到 AWS 时，这些问题就被消除了，其中物理安全完全由 AWS 负责。
项目管理成本同样适用于本地和云环境，并且不是 TCO 比较中的差异因素。防病毒软件许可属于应用程序层成本，无论是在本地还是在 AWS 上运行，均由客户承担。软件开发成本在不同环境中也是一致的，并且不会根据基础设施托管决策而变化。

オンプレミスの TCO には、警備員、アクセス制御、監視などの物理的なデータセンターのセキュリティ コストが含まれます。これらは AWS に移行すると排除され、物理的なセキュリティは完全に AWS の責任となります。
プロジェクト管理コストはオンプレミス環境とクラウド環境の両方に等しく適用され、TCO 比較における差別化要素ではありません。ウイルス対策ソフトウェアのライセンスはアプリケーション層のコストであり、オンプレミスで実行されているか AWS で実行されているかに関係なく、お客様の責任となります。ソフトウェア開発コストも環境間で一貫しており、インフラストラクチャのホスティングの決定に基づいて変化することはありません。

---

## Question 29 · Domain 1

**EN** Which of the following is a benefit of using the AWS Cloud?

**中** 使用 AWS 云有以下哪些好处？

**日本語** AWS クラウドを使用する利点は次のうちどれですか?

- **A.** Permissive security removes the administrative burden
  - 宽松的安全性消除了管理负担
  - 寛容なセキュリティにより管理負担が軽減されます
- **B.** Ability to focus on revenue-generating activities
  - 能够专注于创收活动
  - 収益を生み出す活動に集中する能力
- **C.** Control over cloud network hardware
  - 控制云网络硬件
  - クラウドネットワークハードウェアの制御
- **D.** Choice of specific cloud hardware vendors
  - 选择特定的云硬件供应商
  - 特定のクラウド ハードウェア ベンダーの選択

**答案 / Answer: `B`**

AWS offloads infrastructure management to its own teams, freeing customers from data center operations so they can redirect time and resources toward product development, customer engagement, and other revenue-generating activities.
Permissive security is not an AWS benefit and directly contradicts AWS's security model, which is built on the principle of least privilege and layered access controls. Control over cloud network hardware is not available to customers, as AWS manages all physical networking infrastructure on their behalf. Choice of specific cloud hardware vendors is not offered to customers, as AWS selects and manages its own hardware independently of customer preferences.

AWS 将基础设施管理工作交给自己的团队，将客户从数据中心运营中解放出来，这样他们就可以将时间和资源转移到产品开发、客户参与和其他创收活动上。
宽松的安全性不是 AWS 的优势，并且与 AWS 的安全模型直接矛盾，该模型建立在最小权限和分层访问控制的原则之上。客户无法控制云网络硬件，因为 AWS 代表他们管理所有物理网络基础设施。 AWS 不向客户提供特定云硬件供应商的选择，因为 AWS 独立于客户偏好选择和管理自己的硬件。

AWS はインフラストラクチャ管理を自社のチームにオフロードし、顧客をデータセンターの運用から解放し、時間とリソースを製品開発、顧客エンゲージメント、その他の収益を生み出す活動に振り向けることができます。
寛容なセキュリティは AWS の利点ではなく、最小権限と多層アクセス制御の原則に基づいて構築された AWS のセキュリティ モデルに直接矛盾します。AWS が顧客に代わってすべての物理ネットワーク インフラストラクチャを管理するため、顧客はクラウド ネットワーク ハードウェアを制御できません。AWS は顧客の好みとは関係なく独自のハードウェアを選択して管理するため、特定のクラウド ハードウェア ベンダーの選択は顧客には提供されません。

---

## Question 30 · Domain 3

**EN** Which of the following is a feature of Amazon RDS that performs automatic failover when the primary database fails to respond?

**中** 以下哪一项是 Amazon RDS 在主数据库无法响应时执行自动故障转移的功能？

**日本語** プライマリ データベースが応答しない場合に自動フェイルオーバーを実行する Amazon RDS の機能は次のうちどれですか?

- **A.** RDS Single-AZ
  - RDS 单可用区
  - RDS シングル AZ
- **B.** RDS Read Replicas
  - RDS 只读副本
  - RDS リードレプリカ
- **C.** RDS Snapshots
  - RDS 快照
  - RDS スナップショット
- **D.** RDS Multi-AZ
  - RDS 多可用区
  - RDS マルチ AZ

**答案 / Answer: `D`**

Amazon RDS Multi-AZ maintains a synchronous standby replica in a different Availability Zone and automatically fails over to it if the primary database becomes unresponsive, minimizing downtime.
RDS Single-AZ deploys the database in a single Availability Zone with no standby instance, meaning there is no automatic failover if the primary database becomes unavailable. RDS Read Replicas create read-only copies of the database to offload read traffic from the primary instance, but they are not synchronised in real time and do not provide automatic failover for high availability. RDS Snapshots are point-in-time backups used for data recovery and restoration, and cannot perform automatic failover in response to a database failure.

Amazon RDS 多可用区在不同的可用区中维护同步备用副本，并在主数据库无响应时自动故障转移到该副本，从而最大限度地减少停机时间。
RDS 单可用区将数据库部署在单个可用区中，没有备用实例，这意味着如果主数据库不可用，则不会自动进行故障转移。 RDS 只读副本创建数据库的只读副本以减轻主实例的读取流量，但它们不实时同步，并且不提供自动故障转移以实现高可用性。 RDS 快照是用于数据恢复和还原的时间点备份，无法针对数据库故障执行自动故障转移。

Amazon RDS マルチ AZ は、別のアベイラビリティーゾーンに同期スタンバイレプリカを維持し、プライマリデータベースが応答しなくなった場合に自動的にフェイルオーバーして、ダウンタイムを最小限に抑えます。
RDS シングル AZ は、スタンバイ インスタンスを持たない単一のアベイラビリティーゾーンにデータベースをデプロイします。つまり、プライマリ データベースが使用できなくなった場合、自動フェイルオーバーは行われません。RDS リードレプリカはデータベースの読み取り専用コピーを作成して、プライマリ インスタンスから読み取りトラフィックをオフロードしますが、リアルタイムでは同期されず、高可用性のための自動フェイルオーバーは提供されません。RDS スナップショットは、データのリカバリと復元に使用されるポイントインタイム バックアップであり、データベース障害に応じて自動フェイルオーバーを実行することはできません。

---

## Question 31 · Domain 2

**EN** Which AWS service allows a company to connect their AWS resources with an on-premises Microsoft Active Directory, enabling users to sign in with their existing corporate credentials?

**中** 哪种 AWS 服务允许公司将其 AWS 资源与本地 Microsoft Active Directory 连接起来，从而使用户能够使用现有的公司凭证登录？

**日本語** 企業が AWS リソースをオンプレミスの Microsoft Active Directory に接続して、ユーザーが既存の企業認証情報を使用してサインインできるようにする AWS サービスはどれですか?

- **A.** AWS IAM Identity Center
  - AWS IAM Identity Center
  - AWS IAM Identity Center
- **B.** AWS Directory Service
  - AWS 目录服务
  - AWS ディレクトリ サービス
- **C.** Amazon Cognito
  - Amazon Cognito
  - Amazon Cognito
- **D.** AWS Secrets Manager
  - AWS 秘密管理器
  - AWS シークレットマネージャー

**答案 / Answer: `B`**

AWS Directory Service provides managed Microsoft Active Directory in the AWS Cloud, allowing organizations to connect their AWS resources with an existing on-premises Active Directory so users can access AWS applications using their established corporate credentials.
AWS IAM Identity Center provides single sign-on access to multiple AWS accounts and business applications, but does not provide the managed directory infrastructure needed to extend on-premises Active Directory into AWS. Amazon Cognito provides user identity and authentication for customer-facing web and mobile applications, and is not designed for corporate directory integration with AWS resources. AWS Secrets Manager stores, rotates, and retrieves credentials and secrets programmatically, but does not manage directory services or user authentication against Active Directory.

AWS Directory Service 在 AWS 云中提供托管 Microsoft Active Directory，允许组织将其 AWS 资源与现有的本地 Active Directory 连接起来，以便用户可以使用其既定的公司凭证访问 AWS 应用程序。
AWS IAM Identity Center 提供对多个 AWS 账户和业务应用程序的单点登录访问，但不提供将本地 Active Directory 扩展到 AWS 所需的托管目录基础设施。 Amazon Cognito 为面向客户的 Web 和移动应用程序提供用户身份和身份验证，并非专为企业目录与 AWS 资源集成而设计。 AWS Secrets Manager 以编程方式存储、轮换和检索凭证和密钥，但不管理目录服务或针对 Active Directory 的用户身份验证。

AWS Directory Service は、AWS クラウドでマネージド Microsoft Active Directory を提供し、組織が AWS リソースを既存のオンプレミス Active Directory に接続できるようにし、ユーザーが確立された企業認証情報を使用して AWS アプリケーションにアクセスできるようにします。
AWS IAM Identity Center は、複数の AWS アカウントおよびビジネス アプリケーションへのシングル サインオン アクセスを提供しますが、オンプレミスの Active Directory を AWS に拡張するために必要なマネージド ディレクトリ インフラストラクチャは提供しません。Amazon Cognito は、顧客向けの Web およびモバイル アプリケーションにユーザー ID と認証を提供しますが、AWS リソースと企業ディレクトリを統合するように設計されていません。AWS Secrets Manager は、認証情報とシークレットをプログラムで保存、ローテーション、取得しますが、ディレクトリ サービスや Active Directory に対するユーザー認証は管理しません。

---

## Question 32 · Domain 3

**EN** Which AWS Service can be used to register a new domain name?

**中** 哪些 AWS 服务可用于注册新域名？

**日本語** 新しいドメイン名の登録にはどの AWS サービスを使用できますか?

- **A.** Amazon Personalize
  - 亚马逊个性化
  - アマゾンパーソナライズ
- **B.** Amazon Route 53
  - Amazon Route 53
  - Amazon Route 53
- **C.** AWS KMS
  - AWS KMS
  - AWS KMS
- **D.** AWS Config
  - AWS Config
  - AWS Config

**答案 / Answer: `B`**

Amazon Route 53 provides domain name registration in addition to DNS routing, health checks, and traffic management, making it the only AWS service that can register a new domain name.
Amazon Personalize is a machine learning service that provides personalized product and content recommendations, and has no domain registration or DNS functionality. AWS KMS is a key management service used to create and control encryption keys for securing data, and is unrelated to domain registration. AWS Config tracks and records AWS resource configurations and evaluates them against compliance rules, and has no domain registration capability.

Amazon Route 53 除了提供 DNS 路由、健康检查和流量管理之外，还提供域名注册，使其成为唯一可以注册新域名的 AWS 服务。
Amazon Personalize 是一项机器学习服务，可提供个性化产品和内容推荐，并且没有域名注册或 DNS 功能。 AWS KMS 是一项密钥管理服务，用于创建和控制加密密钥以保护数据，与域注册无关。 AWS Config 跟踪和记录 AWS 资源配置并根据合规性规则对其进行评估，并且不具有域注册功能。

Amazon Route 53 は、DNS ルーティング、ヘルスチェック、トラフィック管理に加えてドメイン名登録を提供し、新しいドメイン名を登録できる唯一の AWS サービスとなります。
Amazon Personalize は、パーソナライズされた製品とコンテンツの推奨を提供する機械学習サービスであり、ドメイン登録や DNS 機能はありません。AWS KMS は、データを保護するための暗号化キーの作成と制御に使用されるキー管理サービスであり、ドメイン登録とは無関係です。AWS Config は、AWS リソース構成を追跡および記録し、コンプライアンス ルールに照らして評価しますが、ドメイン登録機能はありません。

---

## Question 33 · Domain 4

**EN** Which of the following will help AWS customers save on costs when migrating their workloads to AWS?

**中** 以下哪一项可以帮助 AWS 客户在将工作负载迁移到 AWS 时节省成本？

**日本語** AWS の顧客がワークロードを AWS に移行する際にコストを節約するのに役立つのは次のうちどれですか?

- **A.** Use servers instead of managed services
  - 使用服务器而不是托管服务
  - マネージド サービスの代わりにサーバーを使用する
- **B.** Use existing third-party software licenses on AWS
  - 使用 AWS 上现有的第三方软件许可证
  - AWS で既存のサードパーティ ソフトウェア ライセンスを使用する
- **C.** Migrate production workloads to AWS edge locations instead of AWS Regions
  - 将生产工作负载迁移到 AWS 边缘站点而不是 AWS 区域
  - 実稼働ワークロードを AWS リージョンではなく AWS エッジロケーションに移行する
- **D.** Use AWS Outposts to run all workloads in a cost-optimized environment
  - 使用 AWS Outposts 在成本优化的环境中运行所有工作负载
  - AWS Outposts を使用して、コストが最適化された環境ですべてのワークロードを実行します

**答案 / Answer: `B`**

AWS supports Bring Your Own License, allowing customers to reuse existing third-party software licenses on AWS, which avoids paying for new licenses and reduces migration costs.
Using servers instead of managed services typically increases operational costs by requiring customers to manage and maintain the underlying operating systems, databases, and software, rather than reducing them through the efficiency of AWS managed services. Migrating production workloads to AWS edge locations instead of AWS Regions is not a valid migration strategy, as edge locations are designed for content caching and delivery rather than hosting production compute workloads. Using AWS Outposts to run all workloads does not save migration costs, as Outposts are designed for workloads that must remain on-premises due to latency or data residency requirements, and involve additional costs for dedicated AWS-managed hardware in the customer's facility.

AWS Support 自带许可证，允许客户重复使用 AWS 上现有的第三方软件许可证，从而避免支付新许可证费用并降低迁移成本。
使用服务器而不是托管服务通常会增加运营成本，因为要求客户管理和维护底层操作系统、数据库和软件，而不是通过 AWS 托管服务的效率来降低运营成本。将生产工作负载迁移到 AWS 边缘站点而不是 AWS 区域并不是有效的迁移策略，因为边缘站点是为内容缓存和交付而不是托管生产计算工作负载而设计的。使用 AWS Outposts 运行所有工作负载并不能节省迁移成本，因为 Outposts 专为由于延迟或数据驻留要求而必须保留在本地的工作负载而设计，并且会涉及客户设施中专用 AWS 托管硬件的额外成本。

AWS Support の Bring Your Own License により、顧客は AWS 上で既存のサードパーティ ソフトウェア ライセンスを再利用できるため、新しいライセンスの支払いが不要になり、移行コストが削減されます。
マネージドサービスの代わりにサーバーを使用すると、通常、AWS マネージドサービスの効率化によって運用コストが削減されるのではなく、基盤となるオペレーティングシステム、データベース、ソフトウェアの管理と保守が顧客に求められるため、運用コストが増加します。エッジ ロケーションは本番コンピューティング ワークロードをホストするのではなく、コンテンツのキャッシュと配信を目的として設計されているため、本番ワークロードを AWS リージョンではなく AWS エッジ ロケーションに移行することは有効な移行戦略ではありません。AWS Outposts を使用してすべてのワークロードを実行しても、移行コストは節約されません。Outposts は、レイテンシやデータ常駐要件によりオンプレミスに残す必要があるワークロード向けに設計されており、顧客の施設内で AWS が管理する専用ハードウェアの追加コストがかかるためです。

---

## Question 34 · Domain 2 · Select 2

**EN** Which of the following are examples of the customer's responsibility to implement security IN the cloud?

**中** 以下哪些是客户在云中实施安全性的责任的示例？

**日本語** クラウドにセキュリティを実装するための顧客の責任の例は次のうちどれですか?

- **A.** Building a schema for an application
  - 为应用程序构建架构
  - アプリケーションのスキーマの構築
- **B.** Replacing physical hardware
  - 更换物理硬件
  - 物理ハードウェアの交換
- **C.** Creating a new hypervisor
  - 创建新的虚拟机管理程序
  - 新しいハイパーバイザーの作成
- **D.** Patch management of the underlying infrastructure
  - 底层基础设施的补丁管理
  - 基盤となるインフラストラクチャのパッチ管理
- **E.** File system encryption
  - 文件系统加密
  - ファイルシステムの暗号化

**答案 / Answer: `A,E`**

Building an application schema is an application development task that customers perform as part of managing their applications in the cloud, and encrypting file systems on EC2 instances to protect data at rest is a customer responsibility for security in the cloud. Both fall within the customer's side of the shared responsibility model.
Replacing physical hardware is entirely AWS's responsibility as customers have no access to or interaction with the physical servers, storage devices, and networking equipment in AWS data centers. Creating a new hypervisor is AWS's responsibility as the virtualization layer that abstracts physical hardware into virtual instances is part of the AWS-managed infrastructure that customers cannot access or modify. Patch management of the underlying infrastructure, including the host operating systems, hypervisor, and physical network equipment, is AWS's responsibility, whereas customers are responsible for patching the guest operating system on their own EC2 instances.

构建应用程序架构是客户在云中管理应用程序时执行的一项应用程序开发任务，而加密 EC2 实例上的文件系统以保护静态数据是客户对云安全的责任。两者都属于共同责任模型的客户方。
更换物理硬件完全是 AWS 的责任，因为客户无法访问 AWS 数据中心中的物理服务器、存储设备和网络设备或与之交互。创建新的虚拟机管理程序是 AWS 的责任，因为将物理硬件抽象为虚拟实例的虚拟化层是 AWS 管理的基础设施的一部分，客户无法访问或修改。底层基础设施（包括主机操作系统、虚拟机管理程序和物理网络设备）的补丁管理由 AWS 负责，而客户则负责为自己的 EC2 实例上的客户操作系统打补丁。

アプリケーション スキーマの構築は、顧客がクラウドでのアプリケーション管理の一環として実行するアプリケーション開発タスクであり、EC2 インスタンス上のファイル システムを暗号化して保存データを保護することは、クラウドのセキュリティに対する顧客の責任です。どちらも責任共有モデルの顧客側に当てはまります。
顧客は AWS データセンター内の物理サーバー、ストレージデバイス、ネットワーク機器にアクセスしたり操作したりできないため、物理ハードウェアの交換は完全に AWS の責任となります。物理ハードウェアを仮想インスタンスに抽象化する仮想化レイヤーは、顧客がアクセスしたり変更したりできない AWS 管理のインフラストラクチャの一部であるため、新しいハイパーバイザーの作成は AWS の責任です。ホストオペレーティングシステム、ハイパーバイザー、物理ネットワーク機器などの基盤となるインフラストラクチャのパッチ管理は AWS の責任ですが、お客様は独自の EC2 インスタンス上のゲストオペレーティングシステムにパッチを適用する責任があります。

---

## Question 35 · Domain 3

**EN** Which of the following approaches will help you eliminate human error and automate the process of creating and updating your AWS environment?

**中** 以下哪种方法将帮助您消除人为错误并自动执行创建和更新 AWS 环境的过程？

**日本語** 次のアプローチのうち、人的エラーを排除し、AWS 環境の作成と更新のプロセスを自動化するのに役立つのはどれですか?

- **A.** Use Software test automation tools
  - 使用软件测试自动化工具
  - ソフトウェアテスト自動化ツールを使用する
- **B.** Use AWS CodeDeploy to build and automate your AWS environment
  - 使用 AWS CodeDeploy 构建并自动化您的 AWS 环境
  - AWS CodeDeploy を使用して AWS 環境を構築および自動化する
- **C.** Use code to provision and operate your AWS infrastructure
  - 使用代码来配置和操作您的 AWS 基础设施
  - コードを使用して AWS インフラストラクチャをプロビジョニングおよび運用する
- **D.** Migrate all of your applications to a dedicated host
  - 将所有应用程序迁移到专用主机
  - すべてのアプリケーションを専用ホストに移行する

**答案 / Answer: `C`**

Infrastructure as code uses tools such as AWS CloudFormation to define and provision AWS resources programmatically through templates, eliminating manual console steps and making environment creation repeatable, consistent, and automated.
Software test automation tools are used to automate testing of application code, such as running unit tests or integration tests, and do not address the provisioning and configuration of AWS infrastructure. AWS CodeDeploy is a deployment service that automates application deployments to EC2 instances, Lambda functions, or on-premises servers; it handles application code deployment but does not provision or configure the underlying AWS infrastructure environment. Migrating applications to a dedicated host changes the underlying physical server isolation model for compliance or licensing purposes, but does not automate or codify the process of creating and updating the AWS environment.

基础设施即代码使用 AWS CloudFormation 等工具通过模板以编程方式定义和预置 AWS 资源，从而消除手动控制台步骤并使环境创建可重复、一致和自动化。
软件测试自动化工具用于自动测试应用程序代码，例如运行单元测试或集成测试，并且不解决 AWS 基础设施的预置和配置问题。 AWS CodeDeploy 是一项部署服务，可自动将应用程序部署到 EC2 实例、Lambda 函数或本地服务器；它处理应用程序代码部署，但不预置或配置底层 AWS 基础设施环境。将应用程序迁移到专用主机会出于合规性或许可目的更改底层物理服务器隔离模型，但不会自动化或编码创建和更新 AWS 环境的过程。

コードとしてのインフラストラクチャは、AWS CloudFormation などのツールを使用して、テンプレートを通じて AWS リソースをプログラム的に定義およびプロビジョニングするため、手動のコンソール手順が不要になり、環境の作成が反復可能で一貫性があり、自動化されます。
ソフトウェア テスト自動化ツールは、単体テストや統合テストの実行など、アプリケーション コードのテストを自動化するために使用され、AWS インフラストラクチャのプロビジョニングや構成には対応しません。AWS CodeDeploy は、EC2 インスタンス、Lambda 関数、またはオンプレミスサーバーへのアプリケーションのデプロイを自動化するデプロイメントサービスです。アプリケーションコードのデプロイメントは処理しますが、基盤となる AWS インフラストラクチャ環境のプロビジョニングや構成は行いません。アプリケーションを専用ホストに移行すると、コンプライアンスまたはライセンスの目的で基礎となる物理サーバー分離モデルが変更されますが、AWS 環境の作成および更新のプロセスが自動化または体系化されることはありません。

---

## Question 36 · Domain 1 · Select 2

**EN** As part of the AWS Migration Acceleration Program (MAP), what does AWS provide to accelerate Enterprise adoption of AWS?

**中** 作为 AWS 迁移加速计划 (MAP) 的一部分，AWS 提供哪些服务来加速企业采用 AWS？

**日本語** AWS Migration Acceleration Program (MAP) の一環として、企業の AWS 導入を促進するために AWS は何を提供しますか?

- **A.** AWS Partners
  - AWS 合作伙伴
  - AWSパートナー
- **B.** AWS Artifact
  - AWS Artifact
  - AWS Artifact
- **C.** AWS Professional Services
  - AWS 专业服务
  - AWS プロフェッショナルサービス
- **D.** Amazon Athena
  - 亚马逊雅典娜
  - アマゾンアテナ
- **E.** Amazon Pinpoint
  - 亚马逊精确定位
  - アマゾンピンポイント

**答案 / Answer: `A,C`**

As part of the AWS Migration Acceleration Program, AWS provides access to AWS Partners including consulting and technology partners with migration expertise, and AWS Professional Services which works directly with customers on cloud adoption and migration projects. Both are core components of the MAP program.
AWS Artifact is a self-service portal for accessing AWS compliance reports and security agreements, and is a compliance documentation resource rather than a component of the Migration Acceleration Program. Amazon Athena is a serverless query service that analyzes data stored in Amazon S3 using SQL, and is an analytics service with no role in enterprise cloud adoption acceleration or migration support. Amazon Pinpoint is a customer engagement service for sending targeted messages via email, SMS, and push notifications, and is a marketing communications tool with no connection to enterprise cloud migration acceleration.

作为 AWS 迁移加速计划的一部分，AWS 为 AWS 合作伙伴提供访问权限，包括具有迁移专业知识的咨询和技术合作伙伴，以及直接与客户合作开展云采用和迁移项目的 AWS 专业服务。两者都是 MAP 计划的核心组成部分。
AWS Artifact 是一个用于访问 AWS 合规性报告和安全协议的自助服务门户，并且是合规性文档资源，而不是迁移加速计划的组件。 Amazon Athena 是一种无服务器查询服务，可使用 SQL 分析 Amazon S3 中存储的数据，并且是一种分析服务，在企业云采用加速或迁移支持中不发挥作用。 Amazon Pinpoint 是一项客户参与服务，用于通过电子邮件、SMS 和推送通知发送有针对性的消息，并且是一种营销通信工具，与企业云迁移加速无关。

AWS 移行加速プログラムの一環として、AWS は、移行の専門知識を持つコンサルティングパートナーやテクノロジーパートナーを含む AWS パートナーと、クラウドの導入および移行プロジェクトでお客様と直接連携する AWS プロフェッショナルサービスへのアクセスを提供します。どちらも MAP プログラムの中核コンポーネントです。
AWS Artifact は、AWS コンプライアンス レポートとセキュリティ契約にアクセスするためのセルフサービス ポータルであり、移行加速プログラムのコンポーネントではなくコンプライアンス文書リソースです。Amazon Athena は、Amazon S3 に保存されたデータを SQL を使用して分析するサーバーレス クエリ サービスであり、エンタープライズ クラウドの導入促進や移行サポートには役割を持たない分析サービスです。Amazon Pinpoint は、電子メール、SMS、プッシュ通知を介して対象を絞ったメッセージを送信するための顧客エンゲージメント サービスであり、エンタープライズ クラウド移行の加速とは関係のないマーケティング コミュニケーション ツールです。

---

## Question 37 · Domain 3

**EN** A customer is planning to move billions of images and videos to be stored on Amazon S3. The customer has approximately 60 petabytes of data to move. Which of the following AWS services is the best choice to transfer the data to AWS?

**中** 客户计划将数十亿张图像和视频转移到 Amazon S3 上存储。客户有大约 60 PB 的数据需要移动。以下哪项 AWS 服务是将数据传输到 AWS 的最佳选择？

**日本語** 顧客は、数十億の画像とビデオを Amazon S3 に保存するために移動することを計画しています。顧客は約 60 ペタバイトのデータを移動する必要があります。データを AWS に転送するには、次の AWS サービスのうちどれが最適ですか?

- **A.** AWS Snowball
  - AWS Snowball
  - AWS Snowball
- **B.** Amazon S3 Transfer Acceleration
  - Amazon S3 传输加速
  - Amazon S3 転送加速
- **C.** AWS Snowmobile
  - AWS 雪地车
  - AWS スノーモービル
- **D.** Amazon VP
  - 亚马逊副总裁
  - アマゾン副社長

**答案 / Answer: `C`**

AWS Snowmobile is an exabyte-scale data transfer service delivered as a ruggedised 45-foot shipping container, capable of transferring up to 100 petabytes per unit, making it the appropriate choice for a 60 petabyte migration.
AWS Snowball is a physical data transport device suited for transferring up to 80 terabytes per device, which is far below the 60 petabyte requirement and would require an impractical number of devices compared to Snowmobile. Amazon S3 Transfer Acceleration speeds up uploads to S3 by routing traffic through CloudFront edge locations over the internet, but is not suitable for petabyte-scale data migrations where physical transport is required. Amazon VPC is a networking service for provisioning isolated virtual networks within AWS, and has no role in physically or programmatically transferring large datasets into AWS.

AWS Snowmobile 是一种 EB 级数据传输服务，以加固的 45 英尺集装箱形式提供，每个单元能够传输高达 100 PB 的数据，使其成为 60 PB 迁移的合适选择。
AWS Snowball 是一款物理数据传输设备，适合每台设备传输高达 80 TB 的数据，这远远低于 60 PB 的要求，并且与 Snowmobile 相比，所需的设备数量不切实际。 Amazon S3 传输加速通过互联网上的 CloudFront 边缘站点路由流量，加快上传到 S3 的速度，但不适合需要物理传输的 PB 级数据迁移。 Amazon VPC 是一种网络服务，用于在 AWS 内配置隔离虚拟网络，并且不参与以物理方式或以编程方式将大型数据集传输到 AWS 中。

AWS Snowmobile は、耐久性の高い 45 フィートの輸送コンテナとして提供されるエクサバイト規模のデータ転送サービスで、ユニットあたり最大 100 ペタバイトを転送できるため、60 ペタバイトの移行には適切な選択肢となります。
AWS Snowball は、デバイスあたり最大 80 テラバイトの転送に適した物理データ トランスポート デバイスですが、これは 60 ペタバイトの要件をはるかに下回っており、Snowmobile と比較すると非現実的な数のデバイスが必要になります。Amazon S3 Transfer Acceleration は、インターネット上の CloudFront エッジロケーションを介してトラフィックをルーティングすることで、S3 へのアップロードを高速化しますが、物理的な転送が必要なペタバイト規模のデータ移行には適していません。Amazon VPC は、AWS 内に分離された仮想ネットワークをプロビジョニングするためのネットワーキング サービスであり、大規模なデータセットを物理的またはプログラム的に AWS に転送する役割はありません。

---

## Question 38 · Domain 3 · Select 2

**EN** Which of the following procedures can reduce latency when your end users are retrieving data?

**中** 当您的最终用户检索数据时，以下哪些过程可以减少延迟？

**日本語** エンドユーザーがデータを取得する際の待ち時間を短縮できる手順は次のうちどれですか?

- **A.** Store media assets in the region closest to your end users
  - 将媒体资产存储在距离最终用户最近的区域
  - メディア資産をエンドユーザーに最も近いリージョンに保存する
- **B.** Store media assets on an additional EBS volume and increase the capacity of your server
  - 将媒体资产存储在额外的 EBS 卷上并增加服务器的容量
  - メディア資産を追加の EBS ボリュームに保存し、サーバーの容量を増やします。
- **C.** Replicate media assets to at least two availability zones
  - 将媒体资产复制到至少两个可用区
  - メディア資産を少なくとも 2 つのアベイラビリティ ゾーンにレプリケートする
- **D.** Reduce the size of media assets using the Amazon Elastic Transcoder
  - 使用 Amazon Elastic Transcoder 减小媒体资产的大小
  - Amazon Elastic Transcoder を使用してメディア資産のサイズを削減する
- **E.** Store media assets in S3 and use CloudFront to distribute these assets
  - 将媒体资产存储在 S3 中并使用 CloudFront 分发这些资产
  - メディアアセットを S3 に保存し、CloudFront を使用してこれらのアセットを配布します

**答案 / Answer: `A,E`**

Storing media assets in the Region closest to end users reduces the physical distance data must travel, and using Amazon CloudFront with S3 caches content at edge locations worldwide, both directly reducing retrieval latency for end users.
Adding an EBS volume and increasing server capacity addresses storage and compute performance but does not reduce the network distance between the origin and end users. Replicating assets across multiple Availability Zones improves availability and fault tolerance within a Region but does not reduce latency for geographically distant users. Amazon Elastic Transcoder converts media files into different formats for playback on various devices and has no effect on the latency of content delivery to end users.

将媒体资产存储在最靠近最终用户的区域可减少数据必须传输的物理距离，并且将 Amazon CloudFront 与 S3 结合使用可在全球边缘位置缓存内容，两者都直接减少了最终用户的检索延迟。
添加 EBS 卷和增加服务器容量可以解决存储和计算性能问题，但不会缩短源用户和最终用户之间的网络距离。跨多个可用区复制资产可以提高区域内的可用性和容错能力，但不会减少地理位置遥远的用户的延迟。 Amazon Elastic Transcoder 将媒体文件转换为不同的格式以便在各种设备上播放，并且不会影响向最终用户传送内容的延迟。

エンド ユーザーに最も近いリージョンにメディア資産を保存すると、データが移動する必要がある物理的な距離が短縮され、Amazon CloudFront を S3 と併用すると、コンテンツが世界中のエッジ ロケーションにキャッシュされ、どちらもエンド ユーザーの取得遅延を直接削減します。
EBS ボリュームを追加してサーバー容量を増やすと、ストレージとコンピューティングのパフォーマンスが向上しますが、オリジン ユーザーとエンド ユーザー間のネットワーク距離は短縮されません。複数のアベイラビリティーゾーンに資産をレプリケートすると、リージョン内の可用性と耐障害性が向上しますが、地理的に離れたユーザーの待ち時間は短縮されません。Amazon Elastic Transcoder は、メディア ファイルをさまざまなデバイスで再生できるようにさまざまな形式に変換しますが、エンドユーザーへのコンテンツ配信の遅延には影響しません。

---

## Question 39 · Domain 1

**EN** Why should a company choose AWS instead of a traditional data center?

**中** 为什么公司应该选择 AWS 而不是传统的数据中心？

**日本語** 企業はなぜ従来のデータセンターではなく AWS を選択する必要があるのでしょうか?

- **A.** AWS provides users with full control over the underlying resources
  - AWS 为用户提供对底层资源的完全控制
  - AWS はユーザーに基盤となるリソースを完全に制御できるようにします
- **B.** AWS does not require long-term contracts and provides a pay-as-you-go model
  - AWS 不需要长期合同，并提供即用即付模式
  - AWS は長期契約を必要とせず、従量課金制モデルを提供します
- **C.** AWS offers edge locations in every country, supporting global reach
  - AWS 在每个国家/地区提供边缘站点，支持全球覆盖
  - AWS は各国にエッジ ロケーションを提供し、グローバルな展開をサポートします
- **D.** AWS has no limits on the number of resources that can be created
  - AWS 对可以创建的资源数量没有限制
  - AWS には作成できるリソースの数に制限はありません

**答案 / Answer: `B`**

AWS offers a pay-as-you-go pricing model with no long-term contracts required for most services, allowing companies to avoid large upfront capital expenditure and pay only for the resources they actually consume.
AWS does not provide users with full control over the underlying physical resources; AWS manages the hardware, hypervisor, and physical infrastructure, while customers manage their workloads and data. AWS does not have edge locations in every country; AWS has edge locations in many countries for services like CloudFront, but coverage is not universal across every nation, and this is not a core reason to choose AWS over a traditional data center. While AWS has very high service limits, there are limits on the number of resources that can be created per account per Region; customers can request limit increases, but resources are not truly unlimited, making this statement inaccurate.

AWS 提供按需付费的定价模式，大多数服务不需要长期合同，从而使公司能够避免大量的前期资本支出，而只需为他们实际消耗的资源付费。
AWS 不为用户提供对底层物理资源的完全控制； AWS 管理硬件、虚拟机管理程序和物理基础设施，而客户则管理其工作负载和数据。 AWS 并非在每个国家/地区都设有边缘站点； AWS 在许多国家/地区都设有 CloudFront 等服务的边缘站点，但覆盖范围并非在每个国家/地区都普遍，这并不是选择 AWS 而不是传统数据中心的核心原因。虽然 AWS 的服务限制非常高，但每个区域每个账户可以创建的资源数量也有限制；客户可以请求增加限制，但资源并不是真正无限的，因此这种说法不准确。

AWS は、ほとんどのサービスで長期契約が不要な従量課金制の料金モデルを提供しているため、企業は多額の初期投資を回避し、実際に消費したリソースに対してのみ支払うことができます。
AWS では、ユーザーが基盤となる物理リソースを完全に制御できるわけではありません。AWS はハードウェア、ハイパーバイザー、物理インフラストラクチャを管理し、顧客はワークロードとデータを管理します。AWS はすべての国にエッジ ロケーションを持っているわけではありません。AWS は多くの国に CloudFront などのサービスのエッジ ロケーションを持っていますが、そのサービス範囲はすべての国に共通しているわけではなく、これが従来のデータセンターではなく AWS を選択する主な理由ではありません。AWS には非常に高いサービス制限がありますが、アカウントごと、リージョンごとに作成できるリソースの数には制限があります。顧客は制限の増加をリクエストできますが、リソースは実際には無制限ではないため、この記述は不正確になります。

---

## Question 40 · Domain 1

**EN** Which of the following is an advantage of using AWS?

**中** 以下哪一项是使用 AWS 的优势？

**日本語** AWS を使用する利点は次のうちどれですか?

- **A.** AWS audits user data
  - AWS 审核用户数据
  - AWS はユーザーデータを監査します
- **B.** Data is automatically secure
  - 数据自动安全
  - データは自動的に保護されます
- **C.** There is no guessing on capacity needs
  - 无需猜测容量需求
  - 必要な容量を推測することはできません
- **D.** AWS manages compliance needs
  - AWS 管理合规性需求
  - AWS はコンプライアンスのニーズを管理します

**答案 / Answer: `C`**

AWS eliminates the need to guess capacity needs by providing on-demand scaling, so organizations can provision exactly what they need and adjust in minutes rather than purchasing hardware based on peak capacity forecasts.
AWS does not audit user data; AWS has strict policies and controls against accessing customer data without authorisation, and the customer remains responsible for the privacy and governance of data stored in their AWS environment. Data stored in AWS is not automatically secure; customers must actively configure encryption, access controls, and security settings for their own data, as the shared responsibility model requires customers to protect the data they put in the cloud. AWS does not manage the compliance needs of individual customers; while AWS provides compliance certifications for its infrastructure and tools through Artifact to support customer compliance efforts, each customer is responsible for applying those frameworks to their own workloads and meeting their specific regulatory requirements.

AWS 通过提供按需扩展，消除了猜测容量需求的需要，因此组织可以准确配置他们需要的内容并在几分钟内进行调整，而不是根据峰值容量预测购买硬件。
AWS 不审核用户数据； AWS 制定了严格的政策和控制措施，禁止未经授权访问客户数据，并且客户仍对其 AWS 环境中存储的数据的隐私和治理负责。 AWS 中存储的数据并不自动安全；客户必须主动为其自己的数据配置加密、访问控制和安全设置，因为共担责任模型要求客户保护他们放入云中的数据。 AWS 不管理个人客户的合规性需求；虽然 AWS 通过 Artifact 为其基础设施和工具提供合规性认证以支持客户的合规性工作，但每个客户都有责任将这些框架应用到自己的工作负载并满足其特定的监管要求。

AWS はオンデマンドのスケーリングを提供することで、容量のニーズを推測する必要性を排除するため、組織はピーク容量の予測に基づいてハードウェアを購入するのではなく、必要なものを正確にプロビジョニングして数分で調整できます。
AWS はユーザーデータを監査しません。AWS には、許可なく顧客データにアクセスすることに対する厳格なポリシーと管理があり、顧客は引き続き AWS 環境に保存されているデータのプライバシーとガバナンスに対して責任を負います。AWS に保存されたデータは自動的に安全になるわけではありません。責任共有モデルでは、クラウドに置いたデータを保護することが顧客に求められるため、顧客は自分のデータの暗号化、アクセス制御、セキュリティ設定を積極的に構成する必要があります。AWS は、個々の顧客のコンプライアンスのニーズを管理しません。AWS は顧客のコンプライアンスの取り組みをサポートするために Artifact を通じてインフラストラクチャとツールのコンプライアンス認定を提供していますが、各顧客はそれらのフレームワークを独自のワークロードに適用し、特定の規制要件を満たす責任があります。

---

## Question 41 · Domain 4

**EN** What is the most cost-effective purchasing option for running a set of EC2 instances that must always be available for a period of two months?

**中** 对于运行一组必须始终可用两个月的 EC2 实例来说，最具成本效益的购买选项是什么？

**日本語** 2 か月間常に使用できる必要がある一連の EC2 インスタンスを実行する場合、最もコスト効率の高い購入オプションは何ですか?

- **A.** On-Demand Instances
  - 按需实例
  - オンデマンドインスタンス
- **B.** Spot Instances
  - 现货实例
  - スポットインスタンス
- **C.** Reserved Instances - All Upfront
  - 预留实例 - 全部预付
  - リザーブドインスタンス - すべて前払い
- **D.** Reserved Instances - No Upfront
  - 预留实例 - 无需预付费用
  - リザーブドインスタンス - 前払いなし

**答案 / Answer: `A`**

For a workload that must always be available but only for two months, On-Demand Instances are the best choice as you pay only for the compute time you use with no long-term commitment, and the short duration does not justify the minimum one-year Reserved Instance term.
Spot Instances can be interrupted by AWS when spare capacity is reclaimed, directly violating the requirement that instances must always be available. Reserved Instances with All Upfront payment require a minimum one-year commitment, which would cost significantly more over just two months than paying On-Demand for that period. Reserved Instances with No Upfront payment also require a minimum one-year commitment, making the total cost over the commitment term far exceed the two-month requirement.

对于必须始终可用但只能持续两个月的工作负载，按需实例是最佳选择，因为您只需为使用的计算时间付费，无需长期承诺，而且持续时间短并不能证明最低一年的预留实例期限是合理的。
回收闲置容量时，AWS 可能会中断 Spot 实例，这直接违反了实例必须始终可用的要求。全额预付款的预留实例需要至少一年的承诺，这在短短两个月内将比按需支付该期间的费用高得多。无需预付款的预留实例还需要至少一年的承诺，使得承诺期内的总成本远远超过两个月的要求。

常に 2 か月間のみ利用可能である必要があるワークロードの場合、長期契約なしで使用したコンピューティング時間に対してのみ料金を支払うオンデマンド インスタンスが最適な選択です。また、期間が短いため、最低 1 年間のリザーブド インスタンス期間が正当化されません。
スポット インスタンスは、予備容量が回収されるときに AWS によって中断される可能性があり、インスタンスが常に利用可能である必要があるという要件に直接違反します。すべて前払いのリザーブドインスタンスには最低 1 年間のコミットメントが必要ですが、その期間をオンデマンドで支払うよりもわずか 2 か月で大幅に費用がかかります。前払いのないリザーブドインスタンスには最低 1 年間のコミットメントも必要となるため、コミットメント期間にわたる総コストは 2 か月の要件をはるかに超えます。

---

## Question 42 · Domain 4

**EN** Which of the following AWS support plans provides access to only the seven core AWS Trusted Advisor checks?

**中** 以下哪一个 AWS Support 计划仅提供对七个核心 AWS Trusted Advisor 检查的访问权限？

**日本語** 次の AWS Support プランのうち、7 つのコア AWS Trusted Advisor チェックのみへのアクセスを提供するものはどれですか?

- **A.** Business & Enterprise Support
  - 商业和企业支持
  - ビジネスおよびエンタープライズサポート
- **B.** Basic & Developer Support
  - 基础和开发人员支持
  - 基本サポートと開発者サポート
- **C.** Developer & Enterprise Support
  - 开发者和企业支持
  - 開発者およびエンタープライズサポート
- **D.** Developer & Business Support
  - 开发者和业务支持
  - 開発者とビジネスのサポート

**答案 / Answer: `B`**

Basic and Developer Support plans provide access to only the seven core Trusted Advisor checks. The full set of Trusted Advisor checks requires a Business or Enterprise Support plan.
Business and Enterprise Support plans both provide access to the full suite of Trusted Advisor checks rather than only the seven core checks, so this option describes the plans with the most Trusted Advisor access rather than those limited to seven checks. Developer and Enterprise Support is an incorrect pairing because Developer Support is limited to the seven core checks while Enterprise Support has access to the full suite, meaning they are at opposite ends of the Trusted Advisor access spectrum. Developer and Business Support is an incorrect pairing because Business Support provides the full suite of Trusted Advisor checks while Developer Support is limited to the seven core checks, so only Developer Support belongs in this limited-access category.

基本和开发人员支持计划仅提供对七个核心 Trusted Advisor 检查的访问权限。全套 Trusted Advisor 检查需要商业或企业支持计划。
商业和企业支持计划都提供对全套 Trusted Advisor 检查的访问权限，而不仅仅是七个核心检查，因此此选项描述了具有最多 Trusted Advisor 访问权限的计划，而不是仅限于七个检查的计划。开发人员和企业支持是不正确的配对，因为开发人员支持仅限于七个核心检查，而企业支持可以访问整套套件，这意味着它们位于 Trusted Advisor 访问范围的两端。开发人员和业务支持是不正确的配对，因为业务支持提供全套 Trusted Advisor 检查，而开发人员支持仅限于七个核心检查，因此只有开发人员支持属于此限制访问类别。

Basic および Developer Support プランでは、7 つのコア Trusted Advisor チェックのみへのアクセスが提供されます。Trusted Advisor チェックの完全なセットには、ビジネス サポート プランまたはエンタープライズ サポート プランが必要です。
ビジネス サポート プランとエンタープライズ サポート プランは両方とも、7 つのコア チェックのみではなく、Trusted Advisor チェックの完全なスイートへのアクセスを提供するため、このオプションでは、7 つのチェックに限定されたプランではなく、最も多くの Trusted Advisor アクセスを備えたプランについて説明します。開発者サポートとエンタープライズ サポートは間違った組み合わせです。開発者サポートは 7 つのコア チェックに限定されているのに対し、エンタープライズ サポートはフル スイートにアクセスできます。つまり、両者は Trusted Advisor のアクセス スペクトルの対極にあることを意味します。ビジネス サポートは Trusted Advisor チェックの完全なスイートを提供するのに対し、開発者サポートは 7 つのコア チェックに限定されているため、開発者サポートとビジネス サポートの組み合わせは正しくありません。そのため、この限定アクセス カテゴリには開発者サポートのみが属します。

---

## Question 43 · Domain 2 · Select 2

**EN** Which of the following can be used to enable the Virtual Multi-Factor Authentication?

**中** 以下哪一项可用于启用虚拟多重身份验证？

**日本語** 仮想多要素認証を有効にするために使用できるのは次のうちどれですか?

- **A.** Amazon Connect
  - 亚马逊连接
  - アマゾンコネクト
- **B.** AWS CLI
  - AWS CLI
  - AWS CLI
- **C.** AWS Identity and Access Management (IAM)
  - AWS 身份和访问管理 (IAM)
  - AWS ID およびアクセス管理 (IAM)
- **D.** Amazon SNS
  - Amazon SNS
  - Amazon SNS
- **E.** Amazon Virtual Private Cloud
  - 亚马逊虚拟私有云
  - Amazon バーチャル プライベート クラウド

**答案 / Answer: `B,C`**

Virtual MFA can be enabled through AWS IAM, which provides the console interface for assigning and configuring MFA devices for users, and through the AWS CLI, which allows MFA settings to be managed programmatically.
Amazon Connect is a cloud-based contact center service for handling customer communications, entirely unrelated to authentication or MFA configuration. Amazon SNS is a notification service for sending messages to subscribers and has no role in enabling or managing MFA. Amazon VPC is a virtual private network service for isolating and configuring cloud network infrastructure, unrelated to user authentication settings.

虚拟 MFA 可以通过 AWS IAM 启用，AWS IAM 提供用于为用户分配和配置 MFA 设备的控制台界面，也可以通过 AWS CLI 启用，AWS CLI 允许以编程方式管理 MFA 设置。
Amazon Connect 是一种基于云的联络中心服务，用于处理客户通信，与身份验证或 MFA 配置完全无关。 Amazon SNS 是一种用于向订阅者发送消息的通知服务，在启用或管理 MFA 方面没有作用。 Amazon VPC 是一种虚拟专用网络服务，用于隔离和配置云网络基础设施，与用户身份验证设置无关。

仮想 MFA は、ユーザーに MFA デバイスを割り当てて設定するためのコンソール インターフェイスを提供する AWS IAM と、MFA 設定をプログラムで管理できる AWS CLI を通じて有効にできます。
Amazon Connect は、認証や MFA 設定とはまったく関係なく、顧客とのコミュニケーションを処理するためのクラウドベースのコンタクト センター サービスです。Amazon SNS は、サブスクライバにメッセージを送信するための通知サービスであり、MFA を有効にしたり管理したりする役割はありません。Amazon VPC は、ユーザー認証設定とは無関係に、クラウド ネットワーク インフラストラクチャを分離して構成するための仮想プライベート ネットワーク サービスです。

---

## Question 44 · Domain 2

**EN** Who is responsible for scaling a DynamoDB database in the AWS Shared Responsibility Model?

**中** 谁负责在 AWS 责任共担模型中扩展 DynamoDB 数据库？

**日本語** AWS 責任共有モデルで DynamoDB データベースのスケーリングを担当するのは誰ですか?

- **A.** Your security team
  - 您的安全团队
  - あなたのセキュリティチーム
- **B.** Your development team
  - 您的开发团队
  - 開発チーム
- **C.** AWS
  - AWS
  - AWS
- **D.** Your internal DevOps team
  - 您的内部 DevOps 团队
  - 社内の DevOps チーム

**答案 / Answer: `C`**

Amazon DynamoDB is a fully managed NoSQL database service where AWS handles all scaling automatically, including read and write capacity adjustments, so customers do not need to manage or plan for database scaling themselves.
The customer's security team focuses on security policies, access controls, and compliance rather than the operational scaling of a managed database service, and DynamoDB's autoscaling is handled by AWS infrastructure rather than any customer team. The development team builds and maintains application code, and while they configure DynamoDB table settings during development, the actual scaling of a fully managed service is performed automatically by AWS rather than manually by developers. The internal DevOps team manages infrastructure, deployments, and operational workflows, but the scaling of a fully managed service like DynamoDB is handled automatically by AWS and does not require DevOps intervention.

Amazon DynamoDB 是一项完全托管的 NoSQL 数据库服务，AWS 自动处理所有扩展，包括读写容量调整，因此客户无需自行管理或规划数据库扩展。
客户的安全团队专注于安全策略、访问控制和合规性，而不是托管数据库服务的运营扩展，并且 DynamoDB 的自动扩展由 AWS 基础设施而不是任何客户团队处理。开发团队构建和维护应用程序代码，在开发过程中配置 DynamoDB 表设置时，完全托管服务的实际扩展由 AWS 自动执行，而不是由开发人员手动执行。内部 DevOps 团队管理基础设施、部署和操作工作流程，但 DynamoDB 等完全托管服务的扩展由 AWS 自动处理，不需要 DevOps 干预。

Amazon DynamoDB は、AWS が読み取りおよび書き込み容量の調整を含むすべてのスケーリングを自動的に処理するフルマネージド NoSQL データベース サービスです。そのため、顧客はデータベースのスケーリングを自分で管理したり計画したりする必要がありません。
顧客のセキュリティ チームは、マネージド データベース サービスの運用スケーリングではなく、セキュリティ ポリシー、アクセス制御、コンプライアンスに重点を置いており、DynamoDB の自動スケーリングは、顧客チームではなく AWS インフラストラクチャによって処理されます。開発チームはアプリケーション コードを構築して保守し、開発中に DynamoDB テーブル設定を構成しますが、フルマネージド サービスの実際のスケーリングは、開発者が手動で行うのではなく、AWS によって自動的に実行されます。社内の DevOps チームはインフラストラクチャ、デプロイメント、運用ワークフローを管理しますが、DynamoDB のようなフルマネージド サービスのスケーリングは AWS によって自動的に処理されるため、DevOps の介入は必要ありません。

---

## Question 45 · Domain 2

**EN** Which statement is true in relation to the security of Amazon EC2?

**中** 关于 Amazon EC2 的安全性，哪种说法是正确的？

**日本語** Amazon EC2 のセキュリティに関して正しいのはどれですか?

- **A.** You should use instance store volumes to store login data
  - 您应该使用实例存储卷来存储登录数据
  - ログインデータを保存するにはインスタンスストアボリュームを使用する必要があります
- **B.** You should regularly patch the operating system and applications on your EC2 instances
  - 您应该定期修补 EC2 实例上的操作系统和应用程序
  - EC2 インスタンス上のオペレーティング システムとアプリケーションに定期的にパッチを適用する必要があります。
- **C.** You should deploy critical components of your application in the Availability Zone that you trust
  - 您应该将应用程序的关键组件部署在您信任的可用区中
  - アプリケーションの重要なコンポーネントは、信頼できるアベイラビリティーゾーンにデプロイする必要があります。
- **D.** You can track all API calls using Amazon Athena
  - 您可以使用 Amazon Athena 跟踪所有 API 调用
  - Amazon Athena を使用してすべての API 呼び出しを追跡できます

**答案 / Answer: `B`**

AWS shared responsibility means the customer is responsible for securing what runs on EC2, including the operating system and applications, which requires regularly applying security patches to close vulnerabilities that could be exploited by attackers.
Instance store volumes provide temporary, high-speed local storage that is deleted when the instance stops or is terminated, making them inappropriate for storing login data that must persist across instance restarts or replacements. Deploying critical application components in a single trusted Availability Zone reduces fault tolerance and does not improve security; best practice is to distribute across multiple Availability Zones for resilience, and no AZ is inherently more trusted than another within the same region. Amazon Athena is a serverless query service for analyzing data stored in S3 using SQL, and does not track API calls; AWS CloudTrail is the correct service for recording API activity across an AWS account.

AWS 共同责任意味着客户有责任保护 EC2 上运行的内容，包括操作系统和应用程序，这需要定期应用安全补丁来关闭可能被攻击者利用的漏洞。
实例存储卷提供临时、高速本地存储，该存储会在实例停止或终止时被删除，因此不适合存储在实例重新启动或替换时必须保留的登录数据。在单个受信任的可用区中部署关键应用程序组件会降低容错能力，并且不会提高安全性；最佳实践是跨多个可用区进行分布以实现弹性，并且没有哪个可用区本质上比同一区域内的另一个可用区更受信任。 Amazon Athena 是一种无服务器查询服务，用于使用 SQL 分析 S3 中存储的数据，并且不跟踪 API 调用； AWS CloudTrail 是用于记录 AWS 账户中的 API 活动的正确服务。

AWS の責任共有とは、オペレーティング システムやアプリケーションなど、EC2 上で実行されるものを保護する責任はお客様にあることを意味し、攻撃者に悪用される可能性のある脆弱性を解消するためにセキュリティ パッチを定期的に適用する必要があります。
インスタンス ストア ボリュームは、一時的な高速ローカル ストレージを提供しますが、インスタンスが停止または終了すると削除されるため、インスタンスの再起動または置換後も保持する必要があるログイン データの保存には不適切です。重要なアプリケーション コンポーネントを単一の信頼できるアベイラビリティ ゾーンにデプロイすると、フォールト トレランスが低下し、セキュリティは向上しません。ベスト プラクティスは、回復力を高めるために複数のアベイラビリティー ゾーンに分散することです。また、同じリージョン内の他の AZ よりも本質的に信頼できる AZ はありません。Amazon Athena は、SQL を使用して S3 に保存されたデータを分析するためのサーバーレス クエリ サービスであり、API 呼び出しを追跡しません。AWS CloudTrail は、AWS アカウント全体の API アクティビティを記録するための適切なサービスです。

---

## Question 46 · Domain 2

**EN** Which AWS service or feature is used to manage the keys used to encrypt customer data?

**中** 哪些 AWS 服务或功能用于管理用于加密客户数据的密钥？

**日本語** 顧客データの暗号化に使用されるキーの管理には、AWS のどのサービスまたは機能が使用されますか?

- **A.** AWS KMS
  - AWS KMS
  - AWS KMS
- **B.** AWS Service Control Policies (SCPs)
  - AWS 服务控制策略 (SCP)
  - AWS サービス コントロール ポリシー (SCP)
- **C.** Multi-Factor Authentication (MFA)
  - 多重身份验证 (MFA)
  - 多要素認証 (MFA)
- **D.** Amazon Macie
  - Amazon Macie
  - Amazon Macie

**答案 / Answer: `A`**

AWS Key Management Service lets you create, manage, and control cryptographic keys used to encrypt your data across AWS services, providing centralized key management with audit logging via CloudTrail.
AWS Service Control Policies are organizational policies used within AWS Organizations to restrict the maximum permissions available to accounts in an organization, and are an access governance tool rather than a key management service for encryption keys. Multi-Factor Authentication adds a second verification factor to the login process requiring a code from a hardware or virtual device, and is an authentication security mechanism rather than a service for managing encryption keys. Amazon Macie uses machine learning to automatically discover and protect sensitive data in Amazon S3, and is a data classification and protection service rather than a key management service for creating and controlling encryption keys.

AWS Key Management Service 允许您创建、管理和控制用于跨 AWS 服务加密数据的加密密钥，通过 CloudTrail 提供集中密钥管理和审核日志记录。
AWS 服务控制策略是 AWS Organizations 中使用的组织策略，用于限制组织中账户可用的最大权限，并且是访问治理工具，而不是加密密钥的密钥管理服务。多重身份验证在登录过程中添加了第二个验证因素，需要来自硬件或虚拟设备的代码，并且是一种身份验证安全机制，而不是管理加密密钥的服务。 Amazon Macie 使用机器学习自动发现和保护 Amazon S3 中的敏感数据，是数据分类和保护服务，而不是用于创建和控制加密密钥的密钥管理服务。

AWS Key Management Service を使用すると、AWS のサービス全体でデータを暗号化するために使用される暗号キーを作成、管理、制御でき、CloudTrail を介した監査ログによる一元的なキー管理が可能になります。
AWS Service Control ポリシーは、組織内のアカウントに利用できる最大のアクセス許可を制限するために AWS Organizations 内で使用される組織ポリシーであり、暗号化キーのキー管理サービスではなく、アクセス ガバナンス ツールです。多要素認証は、ハードウェアまたは仮想デバイスからのコードを必要とするログイン プロセスに 2 番目の検証要素を追加します。これは、暗号化キーを管理するサービスではなく、認証セキュリティ メカニズムです。Amazon Macie は、機械学習を使用して Amazon S3 内の機密データを自動的に検出して保護します。これは、暗号化キーを作成および制御するためのキー管理サービスではなく、データの分類および保護サービスです。

---

## Question 47 · Domain 1

**EN** Why are Serverless Architectures more economical than Server-based Architectures?

**中** 为什么无服务器架构比基于服务器的架构更经济？

**日本語** サーバーレス アーキテクチャがサーバーベースのアーキテクチャより経済的であるのはなぜですか?

- **A.** Serverless Architectures eliminate all networking costs associated with running applications
  - 无服务器架构消除了与运行应用程序相关的所有网络成本
  - サーバーレス アーキテクチャにより、アプリケーションの実行に関連するネットワーク コストがすべて排除されます
- **B.** With Server-based Architectures, compute resources continue to run all the time, but with Serverless Architectures, compute resources are only used when code is being executed
  - 在基于服务器的架构中，计算资源始终持续运行，但在无服务器架构中，计算资源仅在执行代码时使用
  - サーバーベースのアーキテクチャでは、コンピューティング リソースは常に実行され続けますが、サーバーレス アーキテクチャでは、コードが実行されている場合にのみコンピューティング リソースが使用されます。
- **C.** When you reserve serverless capacity, you will get large discounts compared to server reservation
  - 当您预留无服务器容量时，与预留服务器相比，您将获得较大折扣
  - サーバーレス容量を予約すると、サーバー予約に比べて大幅な割引が受けられます
- **D.** With Serverless Architectures you have the ability to scale automatically up or down as demand changes
  - 借助无服务器架构，您可以根据需求变化自动扩展或缩小规模
  - サーバーレス アーキテクチャを使用すると、需要の変化に応じて自動的にスケールアップまたはスケールダウンできます。

**答案 / Answer: `B`**

Serverless architectures are more economical because compute resources are only allocated during actual code execution, meaning there are no charges for idle capacity, unlike server-based architectures where instances run continuously and incur costs even when no requests are being processed.
Serverless architectures do not eliminate networking costs; data transfer and API call costs still apply and are billed separately based on usage. Reserved capacity discounts do not apply to serverless compute in the same way they apply to EC2 instances; serverless pricing is based entirely on the number of requests and duration of execution rather than reserved capacity commitments. The ability to scale automatically is also available on server-based architectures using Auto Scaling groups, so this is not a characteristic unique to serverless; the key economic advantage is the elimination of costs during idle periods.

无服务器架构更加经济，因为计算资源仅在实际代码执行期间分配，这意味着空闲容量不会产生任何费用，这与基于服务器的架构不同，在基于服务器的架构中，即使没有处理任何请求，实例也会持续运行并产生成本。
无服务器架构并不能消除网络成本；数据传输和 API 调用费用仍然适用，并根据使用情况单独计费。预留容量折扣不适用于无服务器计算，就像适用于 EC2 实例一样；无服务器定价完全基于请求数量和执行持续时间，而不是预留容量承诺。使用 Auto Scaling 组的基于服务器的架构也可以实现自动扩展的能力，因此这并不是 Serverless 独有的特性；关键的经济优势是消除闲置期间的成本。

サーバーレス アーキテクチャは、コンピューティング リソースが実際のコード実行中にのみ割り当てられるため、より経済的です。つまり、インスタンスが継続的に実行され、リクエストが処理されていない場合でもコストが発生するサーバーベースのアーキテクチャとは異なり、アイドル状態の容量に対する料金は発生しません。
サーバーレス アーキテクチャによってネットワーク コストが削減されるわけではありません。データ転送と API 呼び出しの料金は引き続き適用され、使用量に基づいて個別に請求されます。予約容量の割引は、EC2 インスタンスに適用されるのと同じようにサーバーレス コンピューティングには適用されません。サーバーレスの料金は、予約容量のコミットメントではなく、リクエストの数と実行時間に完全に基づいています。自動的にスケーリングする機能は、Auto Scaling グループを使用するサーバーベースのアーキテクチャでも利用できるため、これはサーバーレスに固有の特性ではありません。主な経済的利点は、アイドル期間中のコストが削減されることです。

---

## Question 48 · Domain 3 · Select 2

**EN** For some services, AWS automatically replicates data across multiple Availability Zones to provide fault tolerance in the event of a server failure or Availability Zone outage. Which services automatically replicate data across Availability Zones?

**中** 对于某些服务，AWS 会自动跨多个可用区复制数据，以便在服务器发生故障或可用区中断时提供容错能力。哪些服务会自动跨可用区复制数据？

**日本語** 一部のサービスでは、AWS は複数のアベイラビリティーゾーン間でデータを自動的にレプリケートし、サーバー障害またはアベイラビリティーゾーンの停止が発生した場合のフォールトトレランスを提供します。アベイラビリティーゾーン間でデータを自動的にレプリケートするサービスはどれですか?

- **A.** Instance Store
  - 实例存储
  - インスタンスストア
- **B.** S3
  - S3
  - S3
- **C.** DynamoDB
  - DynamoDB
  - DynamoDB
- **D.** Amazon Route 53
  - Amazon Route 53
  - Amazon Route 53
- **E.** AWS VPN
  - AWS VPN
  - AWS VPN

**答案 / Answer: `B,C`**

Amazon S3 automatically replicates objects across a minimum of three Availability Zones within a Region, and DynamoDB replicates data across multiple AZs by default, both providing built-in fault tolerance.
Instance Store is temporary block storage attached directly to the host EC2 instance. It is not replicated and data is lost if the instance stops or fails. Amazon Route 53 is a DNS and traffic routing service and does not replicate data across AZs in the same way. AWS VPN is a network connectivity service for securely connecting on-premises networks to AWS, unrelated to data replication.

Amazon S3 默认情况下会自动跨区域内至少三个可用区复制对象，而 DynamoDB 默认会跨多个可用区复制数据，两者都提供内置容错功能。
实例存储是直接附加到主机 EC2 实例的临时块存储。如果实例停止或失败，它不会被复制并且数据会丢失。 Amazon Route 53 是 DNS 和流量路由服务，不会以相同的方式跨可用区复制数据。 AWS VPN 是一种网络连接服务，用于将本地网络安全连接到 AWS，与数据复制无关。

Amazon S3 は、リージョン内の少なくとも 3 つのアベイラビリティーゾーンにわたってオブジェクトを自動的にレプリケートし、DynamoDB はデフォルトで複数の AZ にわたってデータをレプリケートし、どちらも組み込みのフォールト トレランスを提供します。
インスタンス ストアは、ホスト EC2 インスタンスに直接接続された一時的なブロック ストレージです。インスタンスが停止または失敗すると、複製されず、データが失われます。Amazon Route 53 は DNS およびトラフィック ルーティング サービスであり、同じ方法で AZ 間でデータをレプリケートしません。AWS VPN は、データ レプリケーションとは関係なく、オンプレミス ネットワークを AWS に安全に接続するためのネットワーク接続サービスです。

---

## Question 49 · Domain 2

**EN** What is the AWS' recommendation regarding access keys?

**中** AWS 关于访问密钥的建议是什么？

**日本語** アクセスキーに関する AWS の推奨事項は何ですか?

- **A.** Delete all access keys and use passwords instead
  - 删除所有访问密钥并改用密码
  - すべてのアクセス キーを削除し、代わりにパスワードを使用します
- **B.** Only share them with trusted people
  - 只与值得信赖的人分享
  - 信頼できる人とのみ共有してください
- **C.** Rotate them regularly
  - 定期轮换它们
  - 定期的に回転させてください
- **D.** Save them within your application code
  - 将它们保存在您的应用程序代码中
  - アプリケーションコード内に保存します

**答案 / Answer: `C`**

AWS recommends rotating access keys regularly to limit the window of exposure if a key is ever compromised, as shorter-lived credentials reduce the risk of unauthorised access going undetected.
Deleting all access keys and using passwords instead is not a valid approach, as passwords are used for console access while access keys are required for programmatic access through the CLI and API, and both have legitimate roles in a well-managed AWS account. Sharing access keys only with trusted people still violates the principle of least privilege, as access keys should be scoped to individual IAM users or roles rather than shared between people. Saving access keys within application code is a significant security risk as code repositories can be exposed publicly or internally, and AWS recommends using IAM roles for applications running on AWS resources instead of embedding credentials in code.

AWS 建议定期轮换访问密钥，以限制密钥被泄露时的暴露时间，因为较短的凭证可以降低未检测到未经授权的访问的风险。
删除所有访问密钥并使用密码并不是一种有效的方法，因为密码用于控制台访问，而通过 CLI 和 API 进行编程访问则需要访问密钥，并且两者在管理良好的 AWS 账户中都具有合法角色。仅与受信任的人共享访问密钥仍然违反了最小权限原则，因为访问密钥的范围应限于单个 IAM 用户或角色，而不是在人员之间共享。在应用程序代码中保存访问密钥会带来重大安全风险，因为代码存储库可能会公开或内部公开，AWS 建议对在 AWS 资源上运行的应用程序使用 IAM 角色，而不是在代码中嵌入凭证。

AWS では、認証情報の有効期間が短いと、不正アクセスが検出されないリスクが軽減されるため、アクセスキーを定期的にローテーションして、キーが侵害された場合の公開範囲を制限することを推奨しています。
すべてのアクセスキーを削除し、代わりにパスワードを使用することは有効なアプローチではありません。コンソールへのアクセスにはパスワードが使用されますが、CLI と API を介したプログラムによるアクセスにはアクセスキーが必要であり、どちらも適切に管理された AWS アカウントで正当なロールを持っているからです。アクセス キーは複数のユーザー間で共有するのではなく、個々の IAM ユーザーまたはロールに限定される必要があるため、信頼できるユーザーとのみアクセス キーを共有することは、依然として最小特権の原則に違反します。コードリポジトリが公開または内部に公開される可能性があるため、アプリケーションコード内にアクセスキーを保存することは重大なセキュリティリスクであり、AWS ではコードに認証情報を埋め込む代わりに、AWS リソース上で実行されるアプリケーションに対して IAM ロールを使用することを推奨しています。

---

## Question 50 · Domain 2

**EN** What best describes penetration testing?

**中** 什么最能描述渗透测试？

**日本語** 侵入テストを最もよく表すものは何でしょうか?

- **A.** Testing your application's response time from different locations
  - 从不同位置测试应用程序的响应时间
  - さまざまな場所からアプリケーションの応答時間をテストする
- **B.** Testing your network to find security vulnerabilities that an attacker could exploit
  - 测试您的网络以查找攻击者可能利用的安全漏洞
  - ネットワークをテストして、攻撃者が悪用する可能性のあるセキュリティの脆弱性を見つける
- **C.** Testing your instances to check for the unhealthy ones
  - 测试您的实例以检查是否有不健康的实例
  - インスタンスをテストして異常なインスタンスがないか確認する
- **D.** Testing your software for bugs and errors
  - 测试您的软件是否存在缺陷和错误
  - ソフトウェアのバグやエラーをテストする

**答案 / Answer: `B`**

Penetration testing is the practice of simulating cyberattacks against your own systems to discover exploitable security vulnerabilities before malicious attackers can find and use them, allowing you to remediate weaknesses proactively.
Testing application response time from different locations describes performance and latency testing, which evaluates how quickly an application responds to requests from various geographic locations rather than identifying security vulnerabilities that attackers could exploit. Testing instances to check for unhealthy ones describes health checking or monitoring, which verifies that compute instances are operational and responsive rather than assessing the security posture of the network for exploitable weaknesses. Testing software for bugs and errors describes functional or quality assurance testing, which validates that code behaves as expected rather than specifically probing for security vulnerabilities that an attacker could use to gain unauthorised access.

渗透测试是模拟针对您自己的系统的网络攻击的做法，以便在恶意攻击者发现和使用可利用的安全漏洞之前发现可利用的安全漏洞，从而使您能够主动修复漏洞。
从不同位置测试应用程序响应时间描述了性能和延迟测试，它评估应用程序响应来自不同地理位置的请求的速度，而不是识别攻击者可以利用的安全漏洞。测试实例以检查不健康的实例描述了运行状况检查或监控，它验证计算实例是否可运行且响应良好，而不是评估网络的安全状况是否存在可利用的弱点。测试软件的错误和错误描述了功能或质量保证测试，它验证代码的行为是否符合预期，而不是专门探测攻击者可能用来获得未经授权的访问的安全漏洞。

ペネトレーション テストとは、自社のシステムに対するサイバー攻撃をシミュレートして、悪意のある攻撃者が見つけて使用する前に悪用可能なセキュリティの脆弱性を発見し、プロアクティブに弱点を修復できるようにする実践です。
さまざまな場所からのアプリケーションの応答時間のテストでは、攻撃者が悪用する可能性のあるセキュリティの脆弱性を特定するのではなく、アプリケーションがさまざまな地理的場所からのリクエストにどれだけ早く応答するかを評価するパフォーマンスと遅延のテストについて説明します。異常なインスタンスをチェックするためのインスタンスのテストでは、悪用可能な弱点がないかネットワークのセキュリティ体制を評価するのではなく、コンピューティング インスタンスが動作し、応答していることを検証するヘルス チェックまたはモニタリングについて説明します。ソフトウェアのバグやエラーのテストでは、攻撃者が不正アクセスを取得するために使用する可能性のあるセキュリティの脆弱性を具体的に調査するのではなく、コードが期待どおりに動作することを検証する機能または品質保証のテストについて説明します。

---

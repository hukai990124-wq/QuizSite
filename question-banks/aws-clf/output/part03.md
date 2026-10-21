# AWS CLF-C02 练习卷 · 第 03 套

> 50 题 · 中英日对照 · 练习题来源为 MIT 许可的 CloudCertPrep；非 AWS 官方题目。中文和日文为机器翻译。

## Question 1 · Domain 2

**EN** What does it mean to grant least privilege to AWS IAM users?

**中** 向 AWS IAM 用户授予最低权限是什么意思？

**日本語** AWS IAM ユーザーに最小限の権限を与えるとはどういう意味ですか?

- **A.** It is granting permissions to a single user only
  - 它仅向单个用户授予权限
  - 単一のユーザーにのみ権限を付与しています
- **B.** It is granting permissions using AWS IAM policies only
  - 它仅使用 AWS IAM 策略授予权限
  - AWS IAM ポリシーのみを使用してアクセス許可を付与しています
- **C.** It is granting AdministratorAccess policy permissions to trustworthy users
  - 它将 AdministratorAccess 策略权限授予值得信赖的用户
  - 信頼できるユーザーに AdministratorAccess ポリシーのアクセス許可を付与しています
- **D.** It is granting only the permissions required to perform a given task
  - 它仅授予执行给定任务所需的权限
  - 特定のタスクを実行するために必要な権限のみを付与します。

**答案 / Answer: `D`**

Least privilege means granting only the minimum permissions required to perform a specific task, ensuring that IAM users cannot access resources or perform actions beyond what their job requires, minimizing the risk of misuse.
Granting permissions to a single user only describes individual rather than shared access, but does not capture the concept of scoping permissions to the minimum required; least privilege is about the breadth of permissions granted rather than the number of users receiving them. Granting permissions using IAM policies only is a description of the mechanism for assigning permissions in AWS, but does not define the principle of least privilege, which is about minimizing the scope of those permissions rather than the method of granting them. Granting AdministratorAccess permissions to trustworthy users is the opposite of least privilege; administrator access grants unrestricted access to all AWS services and resources, which far exceeds the minimum permissions needed for most tasks regardless of how trustworthy the user is.

最小权限意味着仅授予执行特定任务所需的最低权限，确保 IAM 用户无法访问资源或执行超出其工作要求的操作，从而最大限度地降低误用风险。
向单个用户授予权限仅描述个人访问而不是共享访问，但并未体现将权限范围限定为所需的最低限度的概念；最小权限是指授予权限的范围，而不是接收权限的用户数量。仅使用 IAM 策略授予权限是对 AWS 中分配权限的机制的描述，但没有定义最小权限原则，即最小化这些权限的范围而不是授予权限的方法。向值得信赖的用户授予 AdministratorAccess 权限与最小权限相反；管理员访问权限授予对所有 AWS 服务和资源的不受限制的访问权限，这远远超出了大多数任务所需的最低权限，无论用户的可信程度如何。

最小特権とは、特定のタスクを実行するために必要な最小限の権限のみを付与することを意味し、IAM ユーザーがリソースにアクセスしたり、業務で必要な以上のアクションを実行したりできないようにして、悪用のリスクを最小限に抑えます。
単一ユーザーへのアクセス許可の付与は、共有アクセスではなく個人アクセスについてのみ説明しますが、アクセス許可の範囲を必要最小限に絞るという概念は捉えていません。最小権限とは、権限を受け取るユーザーの数ではなく、付与される権限の範囲を指します。IAM ポリシーのみを使用してアクセス許可を付与することは、AWS でアクセス許可を割り当てるメカニズムの説明ですが、最小特権の原則、つまりアクセス許可を付与する方法ではなくその範囲を最小限に抑える原則を定義するものではありません。信頼できるユーザーに AdministratorAccess 権限を付与することは、最小限の特権の逆です。管理者アクセスでは、すべての AWS のサービスとリソースへの無制限のアクセスが許可されます。これは、ユーザーがどれほど信頼できるかに関係なく、ほとんどのタスクに必要な最小限のアクセス許可をはるかに超えています。

---

## Question 2 · Domain 2

**EN** What does Amazon GuardDuty do to protect AWS accounts and workloads?

**中** Amazon GuardDuty 如何保护 AWS 账户和工作负载？

**日本語** Amazon GuardDuty は AWS アカウントとワークロードを保護するために何をしますか?

- **A.** Notifies AWS customers about abuse events once they are reported
  - 一旦报告滥用事件，立即通知 AWS 客户
  - 不正行為イベントが報告されると、AWS 顧客に通知します。
- **B.** Continuously monitors AWS infrastructure and helps detect threats such as attacker reconnaissance or account compromise
  - 持续监控 AWS 基础设施并帮助检测攻击者侦察或账户泄露等威胁
  - AWS インフラストラクチャを継続的に監視し、攻撃者の偵察やアカウント侵害などの脅威の検出を支援します。
- **C.** Helps AWS customers identify the root cause of potential security issues
  - 帮助 AWS 客户识别潜在安全问题的根本原因
  - AWS の顧客が潜在的なセキュリティ問題の根本原因を特定できるように支援します
- **D.** Checks security groups for rules that allow unrestricted access to AWS resources
  - 检查安全组中是否存在允许无限制访问 AWS 资源的规则
  - AWS リソースへの無制限のアクセスを許可するルールがないかセキュリティ グループをチェックします。

**答案 / Answer: `B`**

Amazon GuardDuty is a threat detection service that continuously monitors AWS accounts and workloads using machine learning and threat intelligence to identify suspicious activity such as attacker reconnaissance, compromised instances, or unusual API calls.
Notifying customers about abuse events once they are reported is the function of the AWS Abuse Team, which handles reports of AWS resources being used for malicious activity and communicates with affected account holders, rather than a capability of GuardDuty. Helping customers identify the root cause of potential security issues describes Amazon Detective, which analyzes and visualises security data from GuardDuty and CloudTrail to trace the origin and scope of suspicious activity rather than detecting threats in real time. Checking security groups for rules that allow unrestricted access to AWS resources is a function of AWS Trusted Advisor, which performs security checks including identification of overly permissive security group configurations, not GuardDuty.

Amazon GuardDuty 是一项威胁检测服务，它使用机器学习和威胁情报持续监控 AWS 账户和工作负载，以识别可疑活动，例如攻击者侦察、受损实例或异常 API 调用。
一旦报告滥用事件，通知客户是 AWS 滥用团队的职责，该团队负责处理有关 AWS 资源被用于恶意活动的报告并与受影响的账户持有者进行通信，而不是 GuardDuty 的功能。 Amazon Detective 描述了帮助客户识别潜在安全问题的根本原因，它分析和可视化来自 GuardDuty 和 CloudTrail 的安全数据，以追踪可疑活动的起源和范围，而不是实时检测威胁。检查安全组中是否存在允许不受限制地访问 AWS 资源的规则是 AWS Trusted Advisor 的一项功能，它执行安全检查，包括识别过于宽松的安全组配置，而不是 GuardDuty。

Amazon GuardDuty は、機械学習と脅威インテリジェンスを使用して AWS アカウントとワークロードを継続的に監視し、攻撃者の偵察、インスタンスの侵害、異常な API 呼び出しなどの不審なアクティビティを特定する脅威検出サービスです。
不正行為イベントが報告された場合に顧客に通知するのは、GuardDuty の機能ではなく、AWS 不正行為チームの機能です。AWS リソースが悪意のあるアクティビティに使用されているという報告を処理し、影響を受けるアカウント所有者と通信します。「顧客による潜在的なセキュリティ問題の根本原因の特定を支援する」では、GuardDuty と CloudTrail からのセキュリティ データを分析および視覚化し、リアルタイムで脅威を検出するのではなく、不審なアクティビティの発生源と範囲を追跡する Amazon Detective について説明します。AWS リソースへの無制限のアクセスを許可するルールのセキュリティ グループのチェックは、GuardDuty ではなく、過度に寛容なセキュリティ グループ構成の識別を含むセキュリティ チェックを実行する AWS Trusted Advisor の機能です。

---

## Question 3 · Domain 2

**EN** Which AWS service would you use to obtain compliance reports and certificates?

**中** 您将使用哪种 AWS 服务来获取合规性报告和证书？

**日本語** コンプライアンスレポートと証明書を取得するには、どの AWS サービスを使用しますか?

- **A.** AWS Artifact
  - AWS Artifact
  - AWS Artifact
- **B.** AWS Lambda
  - AWS Lambda
  - AWS Lambda
- **C.** Amazon Inspector
  - Amazon Inspector
  - Amazon Inspector
- **D.** AWS Certificate Manager
  - AWS 证书管理器
  - AWS 証明書マネージャー

**答案 / Answer: `A`**

AWS Artifact provides on-demand access to AWS compliance reports and certifications including SOC, PCI DSS, ISO, and HIPAA documents, available directly from the AWS Management Console without needing to engage AWS support.
AWS Lambda is a serverless compute service that runs code in response to events without requiring server provisioning or management, and is a compute service with no connection to compliance reports or certification documentation. Amazon Inspector is an automated security assessment service that scans EC2 instances and container images for software vulnerabilities and network misconfigurations, and produces customer-specific vulnerability findings rather than AWS compliance certifications. AWS Certificate Manager provisions and manages SSL/TLS certificates for use with AWS services, and is a certificate management service rather than a repository of compliance reports or regulatory certifications.

AWS Artifact 提供对 AWS 合规性报告和认证的按需访问，包括 SOC、PCI DSS、ISO 和 HIPAA 文档，可直接从 AWS 管理控制台获取，无需使用 AWS Support。
AWS Lambda 是一种无服务器计算服务，可运行代码来响应事件，无需服务器配置或管理，并且是一种与合规性报告或认证文档无关的计算服务。 Amazon Inspector 是一项自动化安全评估服务，可扫描 EC2 实例和容器映像是否存在软件漏洞和网络配置错误，并生成特定于客户的漏洞结果，而不是 AWS 合规性认证。 AWS Certificate Manager 预置和管理用于 AWS 服务的 SSL/TLS 证书，它是一种证书管理服务，而不是合规性报告或监管认证的存储库。

AWS Artifact は、SOC、PCI DSS、ISO、HIPAA ドキュメントを含む AWS コンプライアンス レポートと認定へのオンデマンド アクセスを提供します。これらは、AWS Support を使用することなく、AWS マネジメント コンソールから直接利用できます。
AWS Lambda は、サーバーのプロビジョニングや管理を必要とせずに、イベントに応答してコードを実行するサーバーレス コンピューティング サービスであり、コンプライアンス レポートや認証ドキュメントとは関係のないコンピューティング サービスです。Amazon Inspector は、EC2 インスタンスとコンテナ イメージをスキャンしてソフトウェアの脆弱性とネットワークの構成ミスを検出し、AWS コンプライアンス認定ではなく顧客固有の脆弱性の調査結果を生成する自動セキュリティ評価サービスです。AWS Certificate Manager は、AWS のサービスで使用する SSL/TLS 証明書をプロビジョニングおよび管理します。これは、コンプライアンス レポートや規制認証のリポジトリではなく、証明書管理サービスです。

---

## Question 4 · Domain 2

**EN** Under the AWS shared responsibility model, which of the following is an example of security in the AWS Cloud?

**中** 在 AWS 共担责任模型下，以下哪项是 AWS 云安全性的示例？

**日本語** AWS 責任共有モデルに基づく、AWS クラウドのセキュリティの例は次のうちどれですか?

- **A.** Managing edge locations
  - 管理边缘站点
  - エッジロケーションの管理
- **B.** Physical security
  - 物理安全
  - 物理的セキュリティ
- **C.** Firewall configuration
  - 防火墙配置
  - ファイアウォールの設定
- **D.** Global infrastructure
  - 全球基础设施
  - グローバルインフラストラクチャ

**答案 / Answer: `C`**

Firewall configuration through security groups and network ACLs, which customers define to control inbound and outbound traffic to their resources, is the customer's responsibility and is an example of security performed within the cloud on the customer's side of the shared responsibility model.
Managing edge locations is AWS's responsibility; AWS operates the global network of edge locations for CloudFront and other services, and customers benefit from these locations without being responsible for their management or security. Physical security of AWS data centers and hardware is entirely AWS's responsibility as customers never have physical access to the facilities where AWS infrastructure runs. Global infrastructure, including the physical data centers, Availability Zones, and Regions, is designed, built, and operated by AWS, and maintaining its security and availability is an AWS responsibility rather than a customer one.

通过安全组和网络 ACL 进行防火墙配置（客户定义这些安全组和网络 ACL 来控制其资源的入站和出站流量）是客户的责任，也是在共享责任模型的客户端云中执行安全性的一个示例。
管理边缘站点是 AWS 的责任； AWS 为 CloudFront 和其他服务运营全球边缘站点网络，客户可以从这些站点中受益，而无需对其管理或安全负责。 AWS 数据中心和硬件的物理安全完全由 AWS 负责，因为客户永远无法物理访问 AWS 基础设施运行的设施。全球基础设施（包括物理数据中心、可用区和区域）由 AWS 设计、构建和运营，维护其安全性和可用性是 AWS 的责任，而不是客户的责任。

リソースへのインバウンドおよびアウトバウンドのトラフィックを制御するために顧客が定義するセキュリティ グループおよびネットワーク ACL によるファイアウォール構成は、顧客の責任であり、責任共有モデルの顧客側でクラウド内で実行されるセキュリティの一例です。
エッジロケーションの管理は AWS の責任です。AWS は、CloudFront やその他のサービスのエッジ ロケーションのグローバル ネットワークを運用しており、顧客は管理やセキュリティに責任を負うことなく、これらのロケーションから恩恵を受けます。顧客は AWS インフラストラクチャが稼働する施設に物理的にアクセスできないため、AWS データセンターとハードウェアの物理的なセキュリティは完全に AWS の責任となります。物理データセンター、アベイラビリティーゾーン、リージョンなどのグローバルインフラストラクチャは AWS によって設計、構築、運用されており、そのセキュリティと可用性の維持は顧客の責任ではなく AWS の責任です。

---

## Question 5 · Domain 4 · Select 2

**EN** Which methods can be used to identify AWS costs by departments?

**中** 可以使用哪些方法来确定各部门的 AWS 成本？

**日本語** 部門ごとの AWS コストを特定するにはどの方法を使用できますか?

- **A.** Enable multi-factor authentication for the AWS account root user
  - 为 AWS 账户根用户启用多重身份验证
  - AWS アカウントの root ユーザーの多要素認証を有効にする
- **B.** Create separate accounts for each department
  - 为每个部门创建单独的帐户
  - 部門ごとに個別のアカウントを作成する
- **C.** Use Reserved Instances whenever possible
  - 尽可能使用预留实例
  - 可能な限りリザーブドインスタンスを使用する
- **D.** Use tags to associate each instance with a particular department
  - 使用标签将每个实例与特定部门相关联
  - タグを使用して各インスタンスを特定の部門に関連付けます
- **E.** Pay bills using purchase orders
  - 使用采购订单支付账单
  - 注文書を使用して請求書を支払う

**答案 / Answer: `B,D`**

Creating separate AWS accounts per department isolates costs naturally as all charges within each account belong to that department, and applying tags to resources allows cost allocation by department within shared accounts through Cost Explorer reports.
Enabling multi-factor authentication for the AWS account root user is a security best practice for protecting account access, and has no connection to identifying or attributing costs by department. Using Reserved Instances reduces compute costs through long-term commitments, and while this benefits the overall bill it does not provide a mechanism for identifying or separating costs by department. Paying bills using purchase orders is a payment method for settling AWS invoices, and has no connection to identifying which department incurred which costs.

每个部门创建单独的 AWS 账户可以自然地隔离成本，因为每个账户内的所有费用都属于该部门，并且将标签应用于资源可以通过 Cost Explorer 报告在共享账户内按部门分配成本。
为 AWS 账户根用户启用多重身份验证是保护账户访问的安全最佳实践，与按部门识别或分配成本无关。使用预留实例可以通过长期承诺降低计算成本，虽然这有利于整体账单，但它没有提供按部门识别或分离成本的机制。使用采购订单支付账单是一种结算 AWS 发票的付款方式，与识别哪个部门产生了哪些成本无关。

部門ごとに個別の AWS アカウントを作成すると、各アカウント内のすべての料金がその部門に属するため、コストが自然に分離されます。また、リソースにタグを適用すると、Cost Explorer レポートを通じて共有アカウント内の部門ごとにコストを割り当てることができます。
AWS アカウントの root ユーザーに対して多要素認証を有効にすることは、アカウント アクセスを保護するためのセキュリティのベスト プラクティスであり、部門ごとのコストの特定や帰属とは関係ありません。リザーブド インスタンスを使用すると、長期的なコミットメントを通じてコンピューティング コストが削減されます。これにより、請求額全体にメリットが生じますが、部門ごとにコストを特定または分離するメカニズムは提供されません。注文書を使用した請求書の支払いは、AWS の請求書を決済するための支払い方法であり、どの部門がどのコストを負担したかの特定には関係ありません。

---

## Question 6 · Domain 4

**EN** Which AWS feature allows a company to take advantage of usage tiers for services across multiple member accounts?

**中** 哪个 AWS 功能允许公司利用跨多个成员账户的服务使用层级？

**日本語** 企業が複数のメンバーアカウントにわたるサービスの使用量階層を活用できるようにする AWS の機能はどれですか?

- **A.** Service control policies (SCPs)
  - 服务控制策略 (SCP)
  - サービス コントロール ポリシー (SCP)
- **B.** Consolidated billing
  - 合并计费
  - 一括請求
- **C.** All Upfront Reserved Instances
  - 所有预先预留的实例
  - すべての事前予約済みインスタンス
- **D.** AWS Cost Explorer
  - AWS Cost Explorer
  - AWS Cost Explorer

**答案 / Answer: `B`**

Consolidated billing through AWS Organizations combines usage across all member accounts, allowing the organization to reach higher volume tiers and qualify for usage-based discounts that individual accounts would not achieve independently.
Service Control Policies are permission guardrails applied through AWS Organizations that restrict which AWS services and actions are available within member accounts, and are a governance mechanism rather than a feature that enables usage tier benefits. All Upfront Reserved Instances are a purchasing commitment where you pay the full cost of the reservation at the start of the term in exchange for the maximum discount, and apply to a single account rather than aggregating usage across multiple accounts. AWS Cost Explorer provides interactive visualisations and analysis of AWS spending patterns over time, and is a cost analysis tool rather than a feature that aggregates usage across accounts to qualify for volume pricing tiers.

通过 AWS Organizations 的合并计费结合了所有成员帐户的使用情况，使组织能够达到更高的数量级别，并有资格获得个人帐户无法独立实现的基于使用的折扣。
服务控制策略是通过 AWS Organizations 应用的权限护栏，限制成员账户中可用的 AWS 服务和操作，并且是一种治理机制，而不是实现使用层优势的功能。所有预付预留实例都是一种购买承诺，您在期限开始时支付预留的全部费用，以换取最大折扣，并适用于单个账户，而不是汇总多个账户的使用情况。 AWS Cost Explorer 提供随时间变化的 AWS 支出模式的交互式可视化和分析，它是一种成本分析工具，而不是聚合跨账户的使用情况以获得批量定价等级的功能。

AWS Organizations による一括請求では、すべてのメンバー アカウントの使用量が結合されるため、組織はより高いボリューム層に達し、個々のアカウントでは単独では達成できない使用量ベースの割引を受けることができます。
サービス コントロール ポリシーは、AWS Organizations を通じて適用されるアクセス許可のガードレールで、メンバー アカウント内で利用できる AWS のサービスとアクションを制限します。これは、使用量レベルのメリットを実現する機能ではなく、ガバナンス メカニズムです。すべての先行リザーブド インスタンスは、最大の割引と引き換えに期間の開始時に予約の全額を支払う購入コミットメントであり、複数のアカウントにわたる使用量を集計するのではなく、単一のアカウントに適用されます。AWS Cost Explorer は、時間の経過に伴う AWS 支出パターンのインタラクティブな視覚化と分析を提供します。これは、アカウント間の使用量を集計してボリューム価格帯の資格を得る機能ではなく、コスト分析ツールです。

---

## Question 7 · Domain 2 · Select 2

**EN** Which AWS service or feature can enhance network security by blocking requests from a particular network for a web application on AWS?

**中** 哪些 AWS 服务或功能可以通过阻止来自特定网络对 AWS 上的 Web 应用程序的请求来增强网络安全性？

**日本語** AWS 上のウェブアプリケーションに対する特定のネットワークからのリクエストをブロックすることで、ネットワークセキュリティを強化できる AWS のサービスまたは機能はどれですか?

- **A.** AWS WAF
  - AWS WAF
  - AWS WAF
- **B.** AWS Trusted Advisor
  - AWS Trusted Advisor
  - AWS Trusted Advisor
- **C.** AWS Direct Connect
  - AWS Direct Connect
  - AWS Direct Connect
- **D.** AWS Organizations
  - AWS Organizations
  - AWS Organizations
- **E.** Network ACLs
  - 网络 ACL
  - ネットワークACL

**答案 / Answer: `A,E`**

AWS WAF creates rules to block requests from specific IP addresses, networks, or matching certain patterns, filtering malicious web traffic at the application layer, and Network ACLs are stateless subnet-level firewalls that can block traffic from specific IP ranges at the network layer. Both can enhance network security by blocking requests from particular networks.
AWS Trusted Advisor provides automated recommendations across security, cost, performance, and fault tolerance categories, and while it identifies insecure configurations, it does not itself block network requests or actively enforce traffic rules. AWS Direct Connect provides a dedicated private network connection between on-premises data centers and AWS, and is a connectivity service rather than a tool for blocking or filtering web application traffic. AWS Organizations manages multiple AWS accounts under a central structure for governance and consolidated billing, and does not have the capability to block network traffic from specific IP ranges for web applications.

AWS WAF 创建规则来阻止来自特定 IP 地址、网络或匹配某些模式的请求，从而在应用层过滤恶意 Web 流量，而网络 ACL 是无状态子网级防火墙，可以在网络层阻止来自特定 IP 范围的流量。两者都可以通过阻止来自特定网络的请求来增强网络安全性。
AWS Trusted Advisor 提供跨安全、成本、性能和容错类别的自动化建议，虽然它可以识别不安全的配置，但它本身不会阻止网络请求或主动强制执行流量规则。 AWS Direct Connect 在本地数据中心和 AWS 之间提供专用的专用网络连接，它是一种连接服务，而不是用于阻止或过滤 Web 应用程序流量的工具。 AWS Organizations 在一个中央结构下管理多个 AWS 账户以进行治理和整合计费，并且无法阻止来自 Web 应用程序的特定 IP 范围的网络流量。

AWS WAF は、特定の IP アドレス、ネットワークからのリクエスト、または特定のパターンの一致をブロックするルールを作成し、アプリケーション層で悪意のある Web トラフィックをフィルタリングします。ネットワーク ACL は、ネットワーク層で特定の IP 範囲からのトラフィックをブロックできるステートレスなサブネット レベルのファイアウォールです。どちらも、特定のネットワークからのリクエストをブロックすることでネットワーク セキュリティを強化できます。
AWS Trusted Advisor は、セキュリティ、コスト、パフォーマンス、フォールト トレランスのカテゴリにわたって自動化された推奨事項を提供します。また、安全でない構成を特定しますが、それ自体はネットワーク リクエストをブロックしたり、トラフィック ルールを積極的に強制したりすることはありません。AWS Direct Connect は、オンプレミス データセンターと AWS の間に専用のプライベート ネットワーク接続を提供します。これは、Web アプリケーション トラフィックをブロックまたはフィルタリングするツールではなく、接続サービスです。AWS Organizations は、ガバナンスと一括請求のための中央構造の下で複数の AWS アカウントを管理しますが、Web アプリケーションの特定の IP 範囲からのネットワーク トラフィックをブロックする機能はありません。

---

## Question 8 · Domain 1

**EN** Performing operations as code is a design principle that supports which pillar of the AWS Well-Architected Framework?

**中** 以代码形式执行操作是支持 AWS 架构完善框架的哪一个支柱的设计原则？

**日本語** コードとして操作を実行することは、AWS Well-Architected フレームワークのどの柱をサポートする設計原則ですか?

- **A.** Performance efficiency
  - 性能效率
  - パフォーマンス効率
- **B.** Operational excellence
  - 卓越运营
  - 優れた運用性
- **C.** Reliability
  - 可靠性
  - 信頼性
- **D.** Security
  - 安全
  - 安全

**答案 / Answer: `B`**

Performing operations as code is an explicit design principle of the Operational Excellence pillar, which focuses on running and improving operations by automating processes and responding to events programmatically.
Performance Efficiency focuses on using compute resources efficiently to meet system requirements, not on automating operational processes. Reliability focuses on ensuring a workload performs its intended function correctly and consistently, with design principles around recovery and redundancy. Security focuses on protecting data, systems, and assets through controls and detective mechanisms.

将操作作为代码执行是卓越运营支柱的明确设计原则，该原则侧重于通过自动化流程和以编程方式响应事件来运行和改进操作。
性能效率侧重于有效地使用计算资源来满足系统要求，而不是自动化操作流程。可靠性侧重于确保工作负载正确且一致地执行其预期功能，并遵循围绕恢复和冗余的设计原则。安全重点是通过控制和检测机制保护数据、系统和资产。

コードとして操作を実行することは、オペレーショナル エクセレンスの柱の明示的な設計原則であり、プロセスを自動化し、プログラムでイベントに応答することによって操作を実行および改善することに重点を置いています。
パフォーマンス効率は、運用プロセスの自動化ではなく、システム要件を満たすためにコンピューティング リソースを効率的に使用することに重点を置いています。信頼性は、リカバリと冗長性を中心とした設計原則に基づいて、ワークロードが意図した機能を正確かつ一貫して実行することを保証することに重点を置いています。セキュリティは、制御と検出メカニズムを通じてデータ、システム、資産を保護することに重点を置いています。

---

## Question 9 · Domain 3

**EN** Which AWS service delivers data, videos, applications, and APIs to users globally with low latency and high transfer speeds?

**中** 哪项 AWS 服务以低延迟和高传输速度向全球用户提供数据、视频、应用程序和 API？

**日本語** 低レイテンシーと高い転送速度でデータ、ビデオ、アプリケーション、API を世界中のユーザーに配信する AWS のサービスはどれですか?

- **A.** Amazon Route 53
  - Amazon Route 53
  - Amazon Route 53
- **B.** Amazon Connect
  - 亚马逊连接
  - アマゾンコネクト
- **C.** Amazon CloudFront
  - Amazon CloudFront
  - Amazon CloudFront
- **D.** Amazon EC2
  - Amazon EC2
  - Amazon EC2

**答案 / Answer: `C`**

Amazon CloudFront is a global content delivery network that delivers data, videos, applications, and APIs to users worldwide with low latency and high transfer speeds through a network of edge locations.
Amazon Route 53 is a DNS and domain routing service that directs users to application endpoints based on routing policies, but it routes traffic rather than caching and delivering content at edge locations. Amazon Connect is a cloud contact center service for managing customer communications via voice and chat, and has no role in content delivery or global data transfer. Amazon EC2 provides virtual servers for running applications and workloads, but requires manual configuration to serve content globally and does not natively deliver it with low latency to users worldwide through edge locations.

Amazon CloudFront 是一个全球内容交付网络，通过边缘站点网络以低延迟和高传输速度向全球用户交付数据、视频、应用程序和 API。
Amazon Route 53 是一种 DNS 和域路由服务，可根据路由策略将用户引导至应用程序端点，但它路由流量，而不是在边缘位置缓存和交付内容。 Amazon Connect 是一项云联络中心服务，用于通过语音和聊天管理客户通信，在内容交付或全球数据传输中不发挥作用。 Amazon EC2 提供用于运行应用程序和工作负载的虚拟服务器，但需要手动配置才能在全球范围内提供内容，并且本身无法通过边缘位置以低延迟向全球用户提供内容。

Amazon CloudFront は、エッジ ロケーションのネットワークを通じて、低遅延と高速転送でデータ、ビデオ、アプリケーション、API を世界中のユーザーに配信するグローバル コンテンツ配信ネットワークです。
Amazon Route 53 は、ルーティング ポリシーに基づいてユーザーをアプリケーション エンドポイントに誘導する DNS およびドメイン ルーティング サービスですが、エッジ ロケーションでコンテンツをキャッシュして配信するのではなく、トラフィックをルーティングします。Amazon Connect は、音声やチャットによる顧客コミュニケーションを管理するためのクラウドコンタクトセンターサービスであり、コンテンツ配信やグローバルデータ転送には関与しません。Amazon EC2 は、アプリケーションとワークロードを実行するための仮想サーバーを提供しますが、コンテンツをグローバルに提供するには手動構成が必要であり、エッジ ロケーションを通じて世界中のユーザーに低遅延でコンテンツをネイティブに配信することはできません。

---

## Question 10 · Domain 3

**EN** Which AWS networking service enables a company to create a virtual network within AWS?

**中** 哪种 AWS 网络服务使公司能够在 AWS 中创建虚拟网络？

**日本語** 企業が AWS 内に仮想ネットワークを作成できるようにする AWS ネットワーキング サービスはどれですか?

- **A.** AWS Config
  - AWS Config
  - AWS Config
- **B.** Amazon Route 53
  - Amazon Route 53
  - Amazon Route 53
- **C.** AWS Direct Connect
  - AWS Direct Connect
  - AWS Direct Connect
- **D.** Amazon Virtual Private Cloud (Amazon VPC)
  - 亚马逊虚拟私有云 (Amazon VPC)
  - Amazon バーチャル プライベート クラウド (Amazon VPC)

**答案 / Answer: `D`**

Amazon Virtual Private Cloud (Amazon VPC) enables companies to create isolated virtual networks within AWS, with full control over IP addressing, subnets, routing, and network gateways.
AWS Config continuously tracks and records the configuration state of AWS resources to assess compliance and detect configuration changes, and is a governance and auditing tool with no capability to provision or define virtual networks. Amazon Route 53 is a DNS and traffic routing service that resolves domain names and directs users to application endpoints, and is a domain management service rather than a service for creating virtual networks within AWS. AWS Direct Connect establishes a dedicated private network connection between on-premises infrastructure and AWS, and is a hybrid connectivity service for linking external networks to AWS rather than a service for creating virtual networks within AWS itself.

Amazon Virtual Private Cloud (Amazon VPC) 使公司能够在 AWS 内创建隔离的虚拟网络，并完全控制 IP 寻址、子网、路由和网络网关。
AWS Config 持续跟踪和记录 AWS 资源的配置状态，以评估合规性并检测配置更改，并且是一种治理和审计工具，无法配置或定义虚拟网络。 Amazon Route 53 是一种 DNS 和流量路由服务，可解析域名并将用户定向到应用程序端点，并且是域管理服务，而不是用于在 AWS 中创建虚拟网络的服务。 AWS Direct Connect 在本地基础设施和 AWS 之间建立专用的专用网络连接，是一种用于将外部网络链接到 AWS 的混合连接服务，而不是用于在 AWS 本身内创建虚拟网络的服务。

Amazon Virtual Private Cloud (Amazon VPC) を使用すると、企業は AWS 内に分離された仮想ネットワークを作成し、IP アドレス指定、サブネット、ルーティング、ネットワーク ゲートウェイを完全に制御できます。
AWS Config は、AWS リソースの構成状態を継続的に追跡および記録して、コンプライアンスを評価し、構成変更を検出します。これはガバナンスおよび監査ツールですが、仮想ネットワークをプロビジョニングまたは定義する機能はありません。Amazon Route 53 は、ドメイン名を解決し、ユーザーをアプリケーション エンドポイントに誘導する DNS およびトラフィック ルーティング サービスであり、AWS 内に仮想ネットワークを作成するためのサービスではなく、ドメイン管理サービスです。AWS Direct Connect は、オンプレミスのインフラストラクチャと AWS の間に専用のプライベート ネットワーク接続を確立し、AWS 自体内に仮想ネットワークを作成するサービスではなく、外部ネットワークを AWS にリンクするためのハイブリッド接続サービスです。

---

## Question 11 · Domain 3 · Select 2

**EN** Which load balancer types are available with Elastic Load Balancing (ELB)?

**中** Elastic Load Balancing (ELB) 提供哪些负载均衡器类型？

**日本語** Elastic Load Balancing (ELB) で利用できるロード バランサーのタイプはどれですか?

- **A.** Public load balancers with AWS Application Auto Scaling capabilities
  - 具有 AWS Application Auto Scaling 功能的公共负载均衡器
  - AWS Application Auto Scaling 機能を備えたパブリック ロード バランサー
- **B.** F5 Big-IP and Citrix NetScaler load balancers
  - F5 Big-IP 和 Citrix NetScaler 负载均衡器
  - F5 Big-IP および Citrix NetScaler ロード バランサー
- **C.** Classic Load Balancers
  - 经典负载均衡器
  - クラシックロードバランサ
- **D.** Cross-zone load balancers with public and private IPs
  - 具有公共和私有 IP 的跨区域负载均衡器
  - パブリック IP とプライベート IP を備えたクロスゾーン ロード バランサー
- **E.** Application Load Balancers
  - 应用程序负载均衡器
  - アプリケーションロードバランサー

**答案 / Answer: `C,E`**

Classic Load Balancers are the legacy ELB option supporting HTTP, HTTPS, and TCP traffic, and Application Load Balancers are the modern Layer 7 option for HTTP and HTTPS routing with advanced request-based routing rules, both being official ELB load balancer types.
Public load balancers with AWS Application Auto Scaling capabilities conflates two separate services and does not describe a load balancer type available within ELB. F5 Big-IP and Citrix NetScaler are third-party load balancing products that run on-premises or on EC2, not native ELB load balancer types. Cross-zone load balancers with public and private IPs describes a configuration feature of ELB rather than a distinct load balancer type.

经典负载均衡器是支持 HTTP、HTTPS 和 TCP 流量的传统 ELB 选项，而应用程序负载均衡器是用于 HTTP 和 HTTPS 路由的现代第 7 层选项，具有基于请求的高级路由规则，两者都是官方 ELB 负载均衡器类型。
具有 AWS Application Auto Scaling 功能的公共负载均衡器合并了两个单独的服务，并且不描述 ELB 中可用的负载均衡器类型。 F5 Big-IP 和 Citrix NetScaler 是在本地或 EC2 上运行的第三方负载平衡产品，而不是本机 ELB 负载平衡器类型。具有公共和私有 IP 的跨区域负载均衡器描述了 ELB 的配置功能，而不是不同的负载均衡器类型。

クラシック ロード バランサーは、HTTP、HTTPS、および TCP トラフィックをサポートする従来の ELB オプションであり、アプリケーション ロード バランサーは、高度なリクエストベースのルーティング ルールを備えた HTTP および HTTPS ルーティング用の最新のレイヤー 7 オプションであり、どちらも公式の ELB ロード バランサー タイプです。
AWS Application Auto Scaling 機能を備えたパブリック ロード バランサーは 2 つの個別のサービスを統合しており、ELB 内で使用できるロード バランサー タイプについては説明していません。F5 Big-IP および Citrix NetScaler は、ネイティブ ELB ロード バランサー タイプではなく、オンプレミスまたは EC2 上で実行されるサードパーティのロード バランシング製品です。パブリック IP とプライベート IP を使用したクロスゾーン ロード バランサーは、個別のロード バランサー タイプではなく、ELB の構成機能を説明します。

---

## Question 12 · Domain 2 · Select 2

**EN** Under the shared responsibility model, which of the following tasks are the responsibility of the customer?

**中** 在共担责任模式下，以下哪些任务是客户的责任？

**日本語** 責任共有モデルでは、次のどのタスクが顧客の責任となりますか?

- **A.** Maintaining the underlying Amazon EC2 hardware
  - 维护底层 Amazon EC2 硬件
  - 基盤となる Amazon EC2 ハードウェアのメンテナンス
- **B.** Managing the VPC network access control lists
  - 管理 VPC 网络访问控制列表
  - VPC ネットワーク アクセス コントロール リストの管理
- **C.** Encrypting data in transit and at rest
  - 加密传输中和静态的数据
  - 転送中および保存中のデータの暗号化
- **D.** Replacing failed hard disk drives
  - 更换出现故障的硬盘驱动器
  - 故障したハードディスクドライブの交換
- **E.** Deploying hardware in different Availability Zones
  - 在不同可用区部署硬件
  - 異なるアベイラビリティーゾーンへのハードウェアの導入

**答案 / Answer: `B,C`**

Customers are responsible for managing VPC network access control lists to define inbound and outbound traffic rules at the subnet level, and for encrypting their own data in transit using TLS and at rest using services such as KMS and S3 server-side encryption.
Maintaining the underlying EC2 hardware including servers, storage, and networking infrastructure is entirely AWS's responsibility, as customers have no physical access to the data center equipment that hosts EC2 instances. Replacing failed hard disk drives is AWS's responsibility as part of managing the physical infrastructure, and customers experience this transparently through AWS's hardware redundancy and replacement processes without any action required. Deploying hardware in different Availability Zones is an AWS infrastructure responsibility; AWS designs and maintains the physical separation of AZs, while customers choose which AZ to deploy their resources in but do not control the underlying hardware deployment.

客户负责管理 VPC 网络访问控制列表，以定义子网级别的入站和出站流量规则，并使用 TLS 加密传输中的数据，并使用 KMS 和 S3 服务器端加密等服务加密静态数据。
维护底层 EC2 硬件（包括服务器、存储和网络基础设施）完全由 AWS 负责，因为客户无法物理访问托管 EC2 实例的数据中心设备。作为管理物理基础设施的一部分，更换故障硬盘驱动器是 AWS 的责任，客户可以通过 AWS 的硬件冗余和更换流程透明地体验这一点，无需任何操作。在不同可用区部署硬件是 AWS 基础设施的责任； AWS 设计并维护可用区的物理隔离，客户可以选择在哪个可用区部署资源，但不控制底层硬件部署。

お客様には、VPC ネットワーク アクセス コントロール リストを管理して、サブネット レベルで受信および送信トラフィック ルールを定義する責任があり、転送中は TLS を使用し、保存中は KMS や S3 サーバー側暗号化などのサービスを使用して自身のデータを暗号化する必要があります。
顧客は EC2 インスタンスをホストするデータセンター機器に物理的にアクセスできないため、サーバー、ストレージ、ネットワークインフラストラクチャを含む基盤となる EC2 ハードウェアの保守は完全に AWS の責任となります。障害が発生したハードディスクドライブの交換は、物理インフラストラクチャ管理の一環として AWS の責任であり、顧客は AWS のハードウェア冗長性と交換プロセスを通じて、何のアクションも必要とせずにこれを透過的に経験します。異なるアベイラビリティーゾーンにハードウェアをデプロイすることは、AWS インフラストラクチャの責任です。AWS は AZ の物理的な分離を設計および維持しますが、顧客はリソースをデプロイする AZ を選択しますが、基盤となるハードウェアのデプロイは制御しません。

---

## Question 13 · Domain 1

**EN** A user deploys an Amazon RDS DB instance in multiple Availability Zones. This strategy involves which pillar of the AWS Well-Architected Framework?

**中** 用户在多个可用区中部署 Amazon RDS 数据库实例。该策略涉及 AWS 架构完善的框架的哪个支柱？

**日本語** ユーザーが Amazon RDS DB インスタンスを複数のアベイラビリティーゾーンにデプロイします。この戦略には、AWS Well-Architected フレームワークのどの柱が関係していますか?

- **A.** Performance efficiency
  - 性能效率
  - パフォーマンス効率
- **B.** Reliability
  - 可靠性
  - 信頼性
- **C.** Cost optimization
  - 成本优化
  - コストの最適化
- **D.** Security
  - 安全
  - 安全

**答案 / Answer: `B`**

Deploying across multiple Availability Zones ensures the database can withstand an AZ failure and recover automatically, which directly maps to the Reliability pillar's focus on workload recovery and availability.
Performance Efficiency focuses on using compute resources efficiently to meet performance requirements, not on redundancy across failure domains. Cost Optimization focuses on eliminating unnecessary spend and choosing the right resource types, not on fault tolerance. Security focuses on protecting data and systems through access controls and detective mechanisms, not on availability architecture.

跨多个可用区部署可确保数据库能够承受可用区故障并自动恢复，这直接映射到可靠性支柱对工作负载恢复和可用性的关注。
性能效率侧重于有效地使用计算资源来满足性能要求，而不是跨故障域的冗余。成本优化的重点是消除不必要的支出和选择正确的资源类型，而不是容错能力。安全性的重点是通过访问控制和检测机制来保护数据和系统，而不是可用性架构。

複数のアベイラビリティーゾーンにデプロイすると、データベースが AZ の障害に耐えて自動的に回復できることが保証され、これはワークロードの回復と可用性に対する信頼性の柱の焦点に直接対応します。
パフォーマンス効率は、障害ドメイン間の冗長性ではなく、パフォーマンス要件を満たすためにコンピューティング リソースを効率的に使用することに重点を置いています。コストの最適化は、フォールト トレランスではなく、不必要な支出を排除し、適切なリソース タイプを選択することに重点を置いています。セキュリティは、可用性アーキテクチャではなく、アクセス制御と検出メカニズムを通じてデータとシステムを保護することに重点を置いています。

---

## Question 14 · Domain 4

**EN** Which of the following makes it easier for you to categorize, manage and filter your resources?

**中** 以下哪一项可以让您更轻松地对资源进行分类、管理和过滤？

**日本語** リソースの分類、管理、フィルタリングが容易になるのは次のうちどれですか?

- **A.** Amazon CloudWatch
  - Amazon CloudWatch
  - Amazon CloudWatch
- **B.** AWS Service Catalog
  - AWS 服务目录
  - AWSサービスカタログ
- **C.** AWS Directory Service
  - AWS 目录服务
  - AWS ディレクトリ サービス
- **D.** AWS Tagging
  - AWS 标记
  - AWS のタグ付け

**答案 / Answer: `D`**

AWS tags are key-value metadata pairs attached to resources, making it easy to categorize, filter, search, and manage resources by project, environment, owner, or any other custom criteria.
Amazon CloudWatch is a monitoring and observability service for collecting metrics, logs, and alarms on AWS resources, not a resource categorization or filtering tool. AWS Service Catalog allows organizations to create and manage approved catalogs of IT services for internal deployment, not for tagging or filtering existing resources. AWS Directory Service provides managed Microsoft Active Directory for user authentication and access management, unrelated to resource categorization or metadata management.

AWS 标签是附加到资源的键值元数据对，可以轻松按项目、环境、所有者或任何其他自定义条件对资源进行分类、筛选、搜索和管理。
Amazon CloudWatch 是一种监控和可观察性服务，用于收集 AWS 资源的指标、日志和警报，而不是资源分类或过滤工具。 AWS Service Catalog 允许组织创建和管理经批准的 IT 服务目录以供内部部署，而不是用于标记或过滤现有资源。 AWS Directory Service 提供托管 Microsoft Active Directory，用于用户身份验证和访问管理，与资源分类或元数据管理无关。

AWS タグは、リソースに付加されたキーと値のメタデータのペアであり、プロジェクト、環境、所有者、またはその他のカスタム基準ごとにリソースを分類、フィルター、検索、管理することを容易にします。
Amazon CloudWatch は、AWS リソースのメトリクス、ログ、アラームを収集するための監視および可観測性サービスであり、リソースの分類やフィルタリング ツールではありません。AWS Service Catalog を使用すると、組織は既存のリソースのタグ付けやフィルタリングのためではなく、内部展開のために IT サービスの承認済みカタログを作成および管理できます。AWS Directory Service は、リソースの分類やメタデータ管理とは関係なく、ユーザー認証とアクセス管理のためにマネージド Microsoft Active Directory を提供します。

---

## Question 15 · Domain 2

**EN** Within the AWS shared responsibility model, who is responsible for security and compliance?

**中** 在 AWS 责任共担模型中，谁负责安全性和合规性？

**日本語** AWS 責任共有モデルでは、セキュリティとコンプライアンスの責任は誰にありますか?

- **A.** The customer is responsible
  - 客户负责
  - 顧客の責任です
- **B.** AWS is responsible
  - AWS 负责
  - AWSが責任を負う
- **C.** AWS and the customer share responsibility
  - AWS 和客户共同承担责任
  - AWS と顧客は責任を共有します
- **D.** AWS shares responsibility with the relevant governing body
  - AWS 与相关管理机构分担责任
  - AWS は関連する統治機関と責任を共有します

**答案 / Answer: `C`**

Security and compliance is a shared responsibility between AWS and the customer; AWS secures the underlying cloud infrastructure while customers are responsible for securing their workloads, data, and configurations built on top of it.
The customer alone being responsible for security and compliance is incorrect; under the shared responsibility model, AWS manages security of the cloud infrastructure including physical data centers, hypervisor, and global network, which are entirely outside customer control. AWS alone being responsible for security and compliance is incorrect; customers must actively manage security in the cloud including IAM policies, encryption configuration, network security, and application security, all of which AWS cannot control or configure on the customer's behalf. AWS sharing responsibility with a relevant governing body is not how the shared responsibility model works; the model divides responsibility between AWS and the customer based on which layer of the stack each party controls, with no involvement from external regulatory bodies in the operational security responsibility.

安全性和合规性是 AWS 和客户之间的共同责任； AWS 保护底层云基础设施的安全，而客户则负责保护构建在其之上的工作负载、数据和配置的安全。
仅由客户负责安全性和合规性是不正确的；在责任共担模式下，AWS 管理云基础设施的安全性，包括物理数据中心、虚拟机管理程序和全球网络，这些完全不受客户控制。单独由 AWS 负责安全性和合规性是不正确的；客户必须主动管理云中的安全性，包括 IAM 策略、加密配置、网络安全和应用程序安全，所有这些 AWS 无法代表客户控制或配置。 AWS 与相关管理机构分担责任并不是共担责任模式的运作方式；该模型根据双方控制堆栈的哪一层来划分 AWS 和客户之间的责任，而外部监管机构不会参与运营安全责任。

セキュリティとコンプライアンスは、AWS と顧客の間の共同責任です。AWS は基盤となるクラウド インフラストラクチャを保護しますが、顧客はその上に構築されたワークロード、データ、構成を保護する責任を負います。
顧客だけがセキュリティとコンプライアンスの責任を負うのは間違いです。責任共有モデルに基づき、AWS は物理データセンター、ハイパーバイザー、グローバル ネットワークなどのクラウド インフラストラクチャのセキュリティを管理しますが、これらは完全に顧客の制御の範囲外です。AWS だけがセキュリティとコンプライアンスの責任を負うのは間違いです。顧客は、IAM ポリシー、暗号化設定、ネットワークセキュリティ、アプリケーションセキュリティなど、クラウド内のセキュリティを積極的に管理する必要がありますが、これらすべてを AWS が顧客に代わって制御または設定することはできません。AWS が関連する統治機関と責任を共有することは、責任共有モデルの仕組みではありません。このモデルでは、各当事者が制御するスタックの層に基づいて AWS と顧客の間で責任を分割し、運用上のセキュリティ責任に外部の規制機関は関与しません。

---

## Question 16 · Domain 3

**EN** What is the recommended storage option when hosting an often-changing database on an Amazon EC2 instance?

**中** 在 Amazon EC2 实例上托管经常更改的数据库时，建议的存储选项是什么？

**日本語** Amazon EC2 インスタンスで頻繁に変更されるデータベースをホストする場合に推奨されるストレージ オプションは何ですか?

- **A.** Amazon EBS
  - 亚马逊 EBS
  - アマゾンEBS
- **B.** Amazon RDS
  - Amazon RDS
  - Amazon RDS
- **C.** Amazon S3
  - Amazon S3
  - Amazon S3
- **D.** Amazon DynamoDB
  - Amazon DynamoDB
  - Amazon DynamoDB

**答案 / Answer: `A`**

Amazon EBS provides persistent block storage volumes that attach to EC2 instances, delivering the consistent low-latency I/O performance needed for databases with frequently changing data.
Amazon RDS is a fully managed relational database service that runs on its own infrastructure, and is not a storage option for a database hosted directly on an EC2 instance. Amazon S3 provides object storage accessible via API calls and is designed for storing files, backups, and static assets rather than serving as the underlying block storage for a database engine running on EC2. Amazon DynamoDB is a fully managed serverless NoSQL database service that runs on AWS infrastructure, and is not a storage volume that can be attached to an EC2 instance.

Amazon EBS 提供附加到 EC2 实例的持久块存储卷，为数据频繁更改的数据库提供所需的一致低延迟 I/O 性能。
Amazon RDS 是一种完全托管的关系数据库服务，在其自己的基础架构上运行，而不是直接托管在 EC2 实例上的数据库的存储选项。 Amazon S3 提供可通过 API 调用访问的对象存储，旨在存储文件、备份和静态资产，而不是充当在 EC2 上运行的数据库引擎的底层块存储。 Amazon DynamoDB 是一种完全托管的无服务器 NoSQL 数据库服务，在 AWS 基础设施上运行，并且不是可以附加到 EC2 实例的存储卷。

Amazon EBS は、EC2 インスタンスに接続する永続的なブロック ストレージ ボリュームを提供し、頻繁にデータが変更されるデータベースに必要な一貫した低レイテンシーの I/O パフォーマンスを提供します。
Amazon RDS は、独自のインフラストラクチャ上で実行されるフルマネージドのリレーショナル データベース サービスであり、EC2 インスタンスで直接ホストされるデータベースのストレージ オプションではありません。Amazon S3 は、API 呼び出し経由でアクセスできるオブジェクト ストレージを提供し、EC2 で実行されるデータベース エンジンの基盤となるブロック ストレージとして機能するのではなく、ファイル、バックアップ、静的資産を保存するように設計されています。Amazon DynamoDB は、AWS インフラストラクチャ上で実行されるフルマネージドのサーバーレス NoSQL データベース サービスであり、EC2 インスタンスに接続できるストレージ ボリュームではありません。

---

## Question 17 · Domain 2

**EN** Where can a customer find information about prohibited actions on AWS infrastructure?

**中** 客户在哪里可以找到有关 AWS 基础设施上禁止的操作的信息？

**日本語** 顧客は AWS インフラストラクチャで禁止されている行為に関する情報をどこで見つけることができますか?

- **A.** AWS Trusted Advisor
  - AWS Trusted Advisor
  - AWS Trusted Advisor
- **B.** AWS Identity and Access Management (IAM)
  - AWS 身份和访问管理 (IAM)
  - AWS ID およびアクセス管理 (IAM)
- **C.** AWS Billing Console
  - AWS 计费控制台
  - AWS 請求コンソール
- **D.** AWS Acceptable Use Policy
  - AWS 可接受使用政策
  - AWS の利用規約

**答案 / Answer: `D`**

The AWS Acceptable Use Policy defines what activities are prohibited on AWS infrastructure including illegal content hosting, network attacks, and sending spam, and is the authoritative reference for customers seeking to understand what actions are not permitted.
AWS Trusted Advisor provides automated recommendations for improving the security, cost efficiency, performance, and fault tolerance of AWS environments, and is an advisory tool rather than a document defining prohibited uses of the AWS platform. AWS IAM manages user identities and permissions to control which AWS services and resources users can access, and is an access management service rather than a policy document listing prohibited infrastructure activities. The AWS Billing Console displays cost and usage data, invoices, and payment information for an AWS account, and is a financial management interface with no connection to defining or documenting prohibited uses of AWS infrastructure.

AWS 可接受使用政策定义了在 AWS 基础设施上禁止哪些活动，包括非法内容托管、网络攻击和发送垃圾邮件，并且是寻求了解不允许哪些行为的客户的权威参考。
AWS Trusted Advisor 提供用于提高 AWS 环境的安全性、成本效率、性能和容错能力的自动化建议，并且是一种咨询工具，而不是定义 AWS 平台禁止使用的文档。 AWS IAM 管理用户身份和权限，以控制用户可以访问哪些 AWS 服务和资源，并且是一项访问管理服务，而不是列出禁止的基础设施活动的策略文档。 AWS 账单控制台显示 AWS 账户的成本和使用数据、发票和付款信息，并且是一个财务管理界面，与定义或记录 AWS 基础设施的禁止使用无关。

AWS 利用規約は、違法なコンテンツのホスティング、ネットワーク攻撃、スパムの送信など、AWS インフラストラクチャ上で禁止される行為を定義しており、どのような行為が許可されていないのかを知りたいお客様にとって信頼できる参考資料となります。
AWS Trusted Advisor は、AWS 環境のセキュリティ、コスト効率、パフォーマンス、耐障害性を向上させるための自動推奨事項を提供します。これは、AWS プラットフォームの禁止された使用を定義する文書ではなく、助言ツールです。AWS IAM は、ユーザー ID とアクセス許可を管理して、ユーザーがアクセスできる AWS のサービスとリソースを制御します。これは、禁止されているインフラストラクチャ アクティビティをリストするポリシー文書ではなく、アクセス管理サービスです。AWS Billing Console は、AWS アカウントのコストと使用状況のデータ、請求書、支払い情報を表示します。これは、AWS インフラストラクチャの禁止された使用の定義や文書化とは無関係な財務管理インターフェイスです。

---

## Question 18 · Domain 3 · Select 2

**EN** Which of the following AWS services provide compute resources?

**中** 以下哪些 AWS 服务提供计算资源？

**日本語** コンピューティング リソースを提供する AWS サービスは次のうちどれですか?

- **A.** AWS Lambda
  - AWS Lambda
  - AWS Lambda
- **B.** Amazon Elastic Container Service (Amazon ECS)
  - 亚马逊弹性容器服务 (Amazon ECS)
  - Amazon エラスティック コンテナ サービス (Amazon ECS)
- **C.** AWS CodeDeploy
  - AWS 代码部署
  - AWS コードデプロイ
- **D.** Amazon S3 Glacier
  - Amazon S3 冰川
  - Amazon S3 氷河
- **E.** AWS Organizations
  - AWS Organizations
  - AWS Organizations

**答案 / Answer: `A,B`**

AWS Lambda provides serverless compute by running code in response to events without requiring you to provision or manage servers, and Amazon ECS runs containerised applications on managed compute infrastructure. Both are purpose-built AWS compute services.
AWS CodeDeploy automates the deployment of application code to compute targets such as EC2 instances and Lambda functions, and is a deployment automation tool rather than a compute service that provides resources. Amazon S3 Glacier is an archival storage service designed for rarely accessed data with retrieval times ranging from minutes to hours, and is a storage service with no compute capability. AWS Organizations is a account management service for centrally governing and consolidating multiple AWS accounts, and has no compute capability of any kind.

AWS Lambda 通过运行代码来响应事件来提供无服务器计算，无需您配置或管理服务器，而 Amazon ECS 在托管计算基础设施上运行容器化应用程序。两者都是专门构建的 AWS 计算服务。
AWS CodeDeploy 可自动将应用程序代码部署到 EC2 实例和 Lambda 函数等计算目标，并且它是一种部署自动化工具，而不是提供资源的计算服务。 Amazon S3 Glacier 是一种归档存储服务，专为很少访问的数据而设计，检索时间从几分钟到几小时不等，并且是一种不具有计算能力的存储服务。 AWS Organizations 是一项用于集中管理和整合多个 AWS 账户的账户管理服务，并且不具有任何类型的计算能力。

AWS Lambda は、サーバーのプロビジョニングや管理を必要とせずに、イベントに応じてコードを実行することでサーバーレス コンピューティングを提供し、Amazon ECS はマネージド コンピューティング インフラストラクチャ上でコンテナ化されたアプリケーションを実行します。どちらも専用の AWS コンピューティング サービスです。
AWS CodeDeploy は、EC2 インスタンスや Lambda 関数などのコンピューティング ターゲットへのアプリケーション コードのデプロイを自動化し、リソースを提供するコンピューティング サービスではなくデプロイ自動化ツールです。Amazon S3 Glacier は、アクセス頻度が低く、取得時間が数分から数時間かかるデータ用に設計されたアーカイブ ストレージ サービスであり、コンピューティング機能を備えていないストレージ サービスです。AWS Organizations は、複数の AWS アカウントを集中管理および統合するためのアカウント管理サービスであり、いかなる種類のコンピューティング機能も備えていません。

---

## Question 19 · Domain 3

**EN** What is a benefit of loose coupling as a principle of cloud architecture design?

**中** 松耦合作为云架构设计的原则有什么好处？

**日本語** クラウド アーキテクチャ設計の原則として疎結合の利点は何ですか?

- **A.** It facilitates low-latency request handling
  - 它有助于低延迟请求处理
  - 低レイテンシーのリクエスト処理が容易になります。
- **B.** It allows applications to have dependent workflows
  - 它允许应用程序具有依赖的工作流程
  - アプリケーションに依存したワークフローを持たせることができます
- **C.** It prevents cascading failures between different components
  - 它可以防止不同组件之间的级联故障
  - 異なるコンポーネント間の連鎖的な障害を防止します
- **D.** It allows companies to focus on their physical data center operations
  - 它使公司能够专注于其物理数据中心运营
  - 企業は物理的なデータセンターの運用に集中できるようになります

**答案 / Answer: `C`**

Loose coupling prevents cascading failures because components interact through well-defined interfaces such as queues and APIs rather than direct dependencies, so a failure in one component does not bring down others.
Low-latency request handling is a performance characteristic achieved through infrastructure choices such as edge caching and regional deployment, and is not a benefit of loose coupling as an architectural pattern. Allowing applications to have dependent workflows describes tight coupling, which is the opposite of loose coupling and increases the risk that a failure in one component will impact others. Allowing companies to focus on physical data center operations describes an on-premises operational model, which is the opposite of what cloud adoption enables and is entirely unrelated to loose coupling as a design principle.

松散耦合可以防止级联故障，因为组件通过明确定义的接口（例如队列和 API）进行交互，而不是直接依赖关系，因此一个组件的故障不会影响其他组件。
低延迟请求处理是通过边缘缓存和区域部署等基础设施选择实现的性能特征，而不是松散耦合作为架构模式的好处。允许应用程序具有依赖的工作流程描述了紧密耦合，这与松散耦合相反，并且增加了一个组件中的故障影响其他组件的风险。允许公司专注于物理数据中心运营描述了一种本地运营模型，这与云采用所实现的相反，并且与松散耦合作为设计原则完全无关。

疎結合は、コンポーネントが直接の依存関係ではなく、キューや API などの明確に定義されたインターフェイスを通じて対話するため、連鎖的な障害を防ぎます。そのため、1 つのコンポーネントで障害が発生しても他のコンポーネントがダウンすることはありません。
低レイテンシーのリクエスト処理は、エッジ キャッシュや地域展開などのインフラストラクチャの選択によって達成されるパフォーマンス特性であり、アーキテクチャ パターンとしての疎結合の利点ではありません。アプリケーションに依存ワークフローを持たせることは密結合を表します。これは疎結合の逆であり、1 つのコンポーネントで障害が発生すると他のコンポーネントに影響を与えるリスクが高まります。「企業が物理的なデータセンターの運用に集中できるようにする」では、オンプレミスの運用モデルについて説明していますが、これはクラウド導入によって可能になることとは逆であり、設計原則としての疎結合とはまったく関係がありません。

---

## Question 20 · Domain 3 · Select 2

**EN** Which AWS services are defined as global instead of regional?

**中** 哪些 AWS 服务被定义为全球服务而不是区域服务？

**日本語** どの AWS サービスがリージョンではなくグローバルとして定義されていますか?

- **A.** Amazon Route 53
  - Amazon Route 53
  - Amazon Route 53
- **B.** Amazon EC2
  - Amazon EC2
  - Amazon EC2
- **C.** Amazon S3
  - Amazon S3
  - Amazon S3
- **D.** Amazon CloudFront
  - Amazon CloudFront
  - Amazon CloudFront
- **E.** Amazon DynamoDB
  - Amazon DynamoDB
  - Amazon DynamoDB

**答案 / Answer: `A,D`**

Amazon Route 53 is a global DNS service that operates without being tied to any single AWS Region, and Amazon CloudFront is a global content delivery network whose edge locations span the globe independently of regional deployments. Both are global services rather than regional.
Amazon EC2 is a regional service; instances are launched in specific Availability Zones within specific Regions, and each EC2 deployment is bound to its Region. Amazon S3 is generally considered a regional service because buckets are created in a specific Region and data resides there by default, even though bucket names are globally unique. Amazon DynamoDB is a regional service where tables are created and data is stored in a specific Region, though Global Tables can replicate across Regions as an additional feature.

Amazon Route 53 是一项全球 DNS 服务，其运行不依赖于任何单个 AWS 区域，而 Amazon CloudFront 是一个全球内容交付网络，其边缘站点遍布全球，独立于区域部署。两者都是全球服务而不是区域服务。
Amazon EC2 为区域服务；实例在特定区域内的特定可用区中启动，每个 EC2 部署都绑定到其区域。 Amazon S3 通常被视为区域服务，因为存储桶是在特定区域中创建的，并且默认情况下数据驻留在该区域，即使存储桶名称是全局唯一的。 Amazon DynamoDB 是一项区域服务，其中创建表并将数据存储在特定区域中，但作为一项附加功能，全局表可以跨区域复制。

Amazon Route 53 は、単一の AWS リージョンに縛られずに動作するグローバル DNS サービスです。Amazon CloudFront は、地域の展開とは関係なくエッジ ロケーションが世界中に広がるグローバル コンテンツ配信ネットワークです。どちらも地域的なサービスではなく、グローバルなサービスです。
Amazon EC2 は地域サービスです。インスタンスは特定のリージョン内の特定のアベイラビリティーゾーンで起動され、各 EC2 デプロイメントはそのリージョンにバインドされます。Amazon S3 は、バケット名がグローバルに一意であるにもかかわらず、バケットが特定のリージョンに作成され、データがデフォルトでそこに存在するため、一般にリージョン サービスとみなされます。Amazon DynamoDB は、テーブルが作成され、データが特定のリージョンに保存されるリージョン サービスですが、グローバル テーブルは追加機能としてリージョン間でレプリケートできます。

---

## Question 21 · Domain 3 · Select 2

**EN** Which of the following are main components of the AWS global infrastructure?

**中** 以下哪些是 AWS 全球基础设施的主要组成部分？

**日本語** AWS グローバル インフラストラクチャの主要コンポーネントは次のうちどれですか?

- **A.** Resource groups
  - 资源组
  - リソースグループ
- **B.** Availability Zones
  - 可用区
  - アベイラビリティーゾーン
- **C.** Security groups
  - 安全组
  - セキュリティグループ
- **D.** Regions
  - 地区
  - 地域
- **E.** Amazon Machine Images (AMIS)
  - 亚马逊机器映像 (AMIS)
  - Amazon マシンイメージ (AMIS)

**答案 / Answer: `B,D`**

Regions and Availability Zones are the two main building blocks of AWS global infrastructure, with Regions being geographic areas and each Region containing multiple isolated Availability Zones.
Resource groups are a management tool used to organize and tag AWS resources within an account, and are not a component of the physical global infrastructure. Security groups are virtual firewalls that control inbound and outbound traffic for AWS resources, and are a networking feature rather than an infrastructure component. Amazon Machine Images are templates used to launch EC2 instances containing the operating system and configuration, and are a compute feature rather than part of the global infrastructure hierarchy.

区域和可用区是 AWS 全球基础设施的两个主要构建块，区域是地理区域，每个区域包含多个独立的可用区。
资源组是一种管理工具，用于组织和标记账户内的 AWS 资源，而不是物理全局基础设施的组件。安全组是控制 AWS 资源的入站和出站流量的虚拟防火墙，并且是一项网络功能而不是基础设施组件。 Amazon 系统映像是用于启动包含操作系统和配置的 EC2 实例的模板，并且是一项计算功能，而不是全局基础设施层次结构的一部分。

リージョンとアベイラビリティーゾーンは AWS グローバルインフラストラクチャの 2 つの主要な構成要素であり、リージョンは地理的エリアであり、各リージョンには複数の分離されたアベイラビリティーゾーンが含まれます。
リソース グループは、アカウント内の AWS リソースを整理してタグ付けするために使用される管理ツールであり、物理的なグローバル インフラストラクチャのコンポーネントではありません。セキュリティ グループは、AWS リソースの受信トラフィックと送信トラフィックを制御する仮想ファイアウォールであり、インフラストラクチャ コンポーネントではなくネットワーク機能です。Amazon マシンイメージは、オペレーティング システムと設定を含む EC2 インスタンスを起動するために使用されるテンプレートであり、グローバル インフラストラクチャ階層の一部ではなくコンピューティング機能です。

---

## Question 22 · Domain 1

**EN** Fault tolerance refers to:

**中** 容错是指：

**日本語** フォールトトレランスとは次のことを指します。

- **A.** The ability of an application to accommodate growth without changing design
  - 应用程序在不改变设计的情况下适应增长的能力
  - 設計を変更せずに成長に対応できるアプリケーションの機能
- **B.** How well and how quickly an application's environment can have lost data restored
  - 应用程序环境恢复丢失数据的效果和速度如何
  - アプリケーションの環境で失われたデータがどのくらい適切かつ迅速に復元されるか
- **C.** How secure your application is
  - 您的应用程序的安全性如何
  - アプリケーションの安全性
- **D.** The built-in redundancy of an application's components
  - 应用程序组件的内置冗余
  - アプリケーションのコンポーネントに組み込まれた冗長性

**答案 / Answer: `D`**

Fault tolerance refers to the built-in redundancy of an application's components, ensuring the system continues operating correctly even when individual components fail.
The ability to accommodate growth without changing design describes scalability, which is a separate cloud concept focused on handling increased demand. How well and how quickly lost data can be restored describes recoverability, which relates to backup and disaster recovery rather than continued operation during failures. How secure an application is describes the security posture of a system, which is an entirely separate concern from redundancy and fault tolerance.

容错是指应用程序组件的内置冗余，确保即使单个组件发生故障，系统也能继续正常运行。
在不改变设计的情况下适应增长的能力描述了可扩展性，这是一个单独的云概念，专注于处理增加的需求。丢失数据的恢复程度和恢复速度描述了可恢复性，它与备份和灾难恢复有关，而不是在故障期间继续运行。应用程序的安全程度描述了系统的安全状况，这与冗余和容错完全不同。

フォールト トレランスとは、アプリケーションのコンポーネントに組み込まれた冗長性を指し、個々のコンポーネントに障害が発生した場合でもシステムが正しく動作し続けることを保証します。
設計を変更せずに成長に対応できるということは、スケーラビリティを表します。スケーラビリティは、需要の増加に対応することに重点を置いた別個のクラウド概念です。失われたデータをいかに適切かつ迅速に復元できるかによって、回復可能性が決まります。これは、障害時の継続的な運用ではなく、バックアップと災害復旧に関係します。アプリケーションの安全性はシステムのセキュリティ体制を表しますが、これは冗長性やフォールト トレランスとはまったく別の問題です。

---

## Question 23 · Domain 2

**EN** Under the AWS shared responsibility model, customer responsibilities include which one of the following?

**中** 在 AWS 责任共担模型下，客户责任包括以下哪一项？

**日本語** AWS 責任共有モデルでは、顧客の責任には次のどれが含まれますか?

- **A.** Securing the hardware, software, facilities, and networks that run all products and services
  - 确保运行所有产品和服务的硬件、软件、设施和网络的安全
  - すべての製品とサービスを実行するハードウェア、ソフトウェア、設備、ネットワークのセキュリティを確保する
- **B.** Providing certificates, reports, and other documentation directly to AWS customers under NDA
  - 根据 NDA 直接向 AWS 客户提供证书、报告和其他文档
  - NDA に基づいて証明書、レポート、その他のドキュメントを AWS 顧客に直接提供する
- **C.** Configuring the operating system, network, and firewall
  - 配置操作系统、网络和防火墙
  - オペレーティング システム、ネットワーク、およびファイアウォールの構成
- **D.** Obtaining industry certifications and independent third-party attestations
  - 获得行业认证和独立第三方认证
  - 業界認証と独立した第三者認証の取得

**答案 / Answer: `C`**

Configuring the operating system, network settings, and firewall rules on EC2 instances falls within the customer's responsibility under the shared responsibility model, as AWS provides the underlying infrastructure while customers are responsible for what they install and configure on top of it.
Securing the hardware, software, facilities, and networks that run all AWS products and services is AWS's responsibility under the shared responsibility model, as customers have no access to or control over the physical and virtual infrastructure that AWS manages. Providing compliance certificates, reports, and documentation to customers under NDA is a service AWS provides through AWS Artifact, not a customer responsibility; customers access these documents rather than create or provide them. Obtaining industry certifications and third-party attestations for the AWS infrastructure is AWS's responsibility, as AWS undergoes independent audits for certifications such as ISO, SOC, and PCI DSS that apply to the infrastructure layer rather than being a customer obligation.

在共享责任模型下，在 EC2 实例上配置操作系统、网络设置和防火墙规则属于客户的责任，因为 AWS 提供底层基础设施，而客户负责在其之上安装和配置的内容。
在共担责任模式下，确保运行所有 AWS 产品和服务的硬件、软件、设施和网络的安全是 AWS 的责任，因为客户无法访问或控制 AWS 管理的物理和虚拟基础设施。根据 NDA 向客户提供合规证书、报告和文档是 AWS 通过 AWS Artifact 提供的服务，而不是客户的责任；客户访问这些文档而不是创建或提供它们。获得 AWS 基础设施的行业认证和第三方证明是 AWS 的责任，因为 AWS 对适用于基础设施层的 ISO、SOC 和 PCI DSS 等认证进行独立审核，而不是客户的义务。

EC2 インスタンスでのオペレーティング システム、ネットワーク設定、およびファイアウォール ルールの構成は、AWS が基盤となるインフラストラクチャを提供する一方、顧客はその上に何をインストールして構成するかについて責任を負うため、責任共有モデルに基づく顧客の責任の範囲内となります。
すべての AWS 製品とサービスを実行するハードウェア、ソフトウェア、施設、ネットワークのセキュリティ保護は、責任共有モデルに基づく AWS の責任です。これは、顧客が AWS が管理する物理インフラストラクチャおよび仮想インフラストラクチャにアクセスしたり制御したりできないためです。NDA に基づいて顧客にコンプライアンス証明書、レポート、ドキュメントを提供することは、AWS が AWS Artifact を通じて提供するサービスであり、顧客の責任ではありません。顧客はこれらのドキュメントを作成したり提供したりするのではなく、これらのドキュメントにアクセスします。AWS インフラストラクチャの業界認証と第三者認証の取得は AWS の責任であり、AWS は顧客の義務ではなく、インフラストラクチャ層に適用される ISO、SOC、PCI DSS などの認証について独立した監査を受けています。

---

## Question 24 · Domain 4 · Select 2

**EN** What are the advantages of Reserved Instances?

**中** 预留实例有哪些优势？

**日本語** リザーブドインスタンスの利点は何ですか?

- **A.** They provide a discount over on-demand pricing
  - 他们提供比按需定价折扣
  - オンデマンド価格よりも割引を提供します
- **B.** They provide access to additional instance types
  - 它们提供对其他实例类型的访问
  - 追加のインスタンス タイプへのアクセスを提供します
- **C.** They provide additional networking capability
  - 它们提供额外的网络功能
  - 追加のネットワーク機能を提供します
- **D.** Customers can upgrade instances as new types become available
  - 当新类型可用时，客户可以升级实例
  - 新しいタイプが利用可能になると、顧客はインスタンスをアップグレードできます
- **E.** Customers can reserve capacity in an Availability Zone
  - 客户可以预留可用区的容量
  - お客様はアベイラビリティーゾーンで容量を予約できます

**答案 / Answer: `A,E`**

Reserved Instances provide significant discounts over On-Demand pricing of up to 72%, and they allow you to reserve capacity in a specific Availability Zone, ensuring that capacity is available when you need it.
Reserved Instances do not provide access to additional instance types beyond what is available on On-Demand. The instance types available to you are the same regardless of how you purchase them. Reserved Instances do not provide additional networking capability. Network performance is determined by the instance type and configuration rather than the purchasing model. Customers cannot upgrade Reserved Instance types as new types become available unless they hold Convertible RIs, which allow exchanges. Standard RIs are locked to the specific instance type purchased.

预留实例比按需定价提供高达 72% 的大幅折扣，并且允许您在特定可用区中预留容量，确保在需要时提供可用容量。
预留实例不提供对按需可用实例类型之外的其他实例类型的访问。无论您如何购买，您可用的实例类型都是相同的。预留实例不提供额外的网络功能。网络性能由实例类型和配置决定，而不是由购买模式决定。当新类型可用时，客户无法升级预留实例类型，除非他们持有允许交换的可转换 RI。标准 RI 被锁定到购买的特定实例类型。

リザーブドインスタンスでは、オンデマンド価格より最大 72% の大幅な割引が提供され、特定のアベイラビリティーゾーンで容量を予約できるため、必要なときに容量を利用できるようになります。
リザーブドインスタンスでは、オンデマンドで利用できるものを超える追加のインスタンスタイプへのアクセスは提供されません。利用可能なインスタンス タイプは、購入方法に関係なく同じです。リザーブドインスタンスは追加のネットワーク機能を提供しません。ネットワークのパフォーマンスは、購入モデルではなく、インスタンスのタイプと構成によって決まります。お客様は、交換を可能にするコンバーティブル RI を保持していない限り、新しいタイプが利用可能になったときにリザーブド インスタンス タイプをアップグレードすることはできません。標準 RI は、購入した特定のインスタンス タイプにロックされます。

---

## Question 25 · Domain 3

**EN** Which AWS service handles the deployment details of capacity provisioning, load balancing, Auto Scaling, and application health monitoring?

**中** 哪个 AWS 服务处理容量配置、负载平衡、Auto Scaling 和应用程序运行状况监控的部署详细信息？

**日本語** キャパシティープロビジョニング、ロードバランシング、Auto Scaling、およびアプリケーションヘルスモニタリングのデプロイの詳細を処理する AWS サービスはどれですか?

- **A.** AWS Config
  - AWS Config
  - AWS Config
- **B.** AWS Elastic Beanstalk
  - AWS 弹性豆茎
  - AWS Elastic Beanstalk
- **C.** Amazon Route 53
  - Amazon Route 53
  - Amazon Route 53
- **D.** Amazon CloudFront
  - Amazon CloudFront
  - Amazon CloudFront

**答案 / Answer: `B`**

AWS Elastic Beanstalk automatically handles capacity provisioning, load balancing, Auto Scaling, and application health monitoring, allowing developers to deploy applications without needing to manage the underlying infrastructure.
AWS Config records and evaluates configuration changes to AWS resources for compliance and auditing purposes and has no role in application deployment or infrastructure provisioning. Amazon Route 53 is a DNS and traffic routing service and does not handle application deployment, load balancing, or health monitoring. Amazon CloudFront is a content delivery network for caching and distributing content globally and is not an application deployment or infrastructure management service.

AWS Elastic Beanstalk 自动处理容量配置、负载平衡、自动扩展和应用程序运行状况监控，使开发人员无需管理底层基础设施即可部署应用程序。
AWS Config 记录并评估 AWS 资源的配置更改，以用于合规性和审计目的，并且在应用程序部署或基础设施配置中不起任何作用。 Amazon Route 53 是 DNS 和流量路由服务，不处理应用程序部署、负载平衡或运行状况监控。 Amazon CloudFront 是一个用于在全球范围内缓存和分发内容的内容交付网络，不是应用程序部署或基础设施管理服务。

AWS Elastic Beanstalk は、容量のプロビジョニング、負荷分散、自動スケーリング、アプリケーションの健全性モニタリングを自動的に処理するため、開発者は基盤となるインフラストラクチャを管理することなくアプリケーションをデプロイできます。
AWS Config は、コンプライアンスと監査の目的で AWS リソースへの設定変更を記録および評価しますが、アプリケーションのデプロイメントやインフラストラクチャのプロビジョニングには役割を持ちません。Amazon Route 53 は DNS およびトラフィック ルーティング サービスであり、アプリケーションの展開、負荷分散、または健全性の監視は処理しません。Amazon CloudFront は、コンテンツをキャッシュしてグローバルに配信するためのコンテンツ配信ネットワークであり、アプリケーション展開サービスやインフラストラクチャ管理サービスではありません。

---

## Question 26 · Domain 2

**EN** Which AWS service needs to be enabled to track all user account changes within the AWS Management Console?

**中** 需要启用哪个 AWS 服务才能跟踪 AWS 管理控制台中的所有用户账户更改？

**日本語** AWS マネジメントコンソール内のすべてのユーザーアカウントの変更を追跡するには、どの AWS サービスを有効にする必要がありますか?

- **A.** AWS CloudTrail
  - AWS CloudTrail
  - AWS CloudTrail
- **B.** Amazon Simple Notification Service (Amazon SNS)
  - 亚马逊简单通知服务 (Amazon SNS)
  - Amazon シンプル通知サービス (Amazon SNS)
- **C.** VPC Flow Logs
  - VPC 流日志
  - VPC フロー ログ
- **D.** AWS CloudHSM
  - AWS 云 HSM
  - AWSクラウドHSM

**答案 / Answer: `A`**

AWS CloudTrail records all API calls and user actions in the AWS Management Console, providing a complete audit trail of account changes for security analysis and compliance.
Amazon Simple Notification Service is a fully managed pub/sub messaging service that delivers notifications to subscribers such as Lambda functions, HTTP endpoints, and email addresses, and has no capability to record or track user account changes within the AWS Management Console. VPC Flow Logs capture information about IP traffic flowing to and from network interfaces within a VPC, and is a network traffic logging feature that records connection-level data rather than user actions or account changes in the console. AWS CloudHSM provides dedicated hardware security modules for generating and managing cryptographic keys, and is a key management and encryption service with no capability to track or audit user activity within the AWS Management Console.

AWS CloudTrail 在 AWS 管理控制台中记录所有 API 调用和用户操作，提供账户更改的完整审计跟踪，以进行安全分析和合规性。
Amazon Simple Notification Service 是一项完全托管的发布/订阅消息服务，可向订阅者发送通知，例如 Lambda 函数、HTTP 终端节点和电子邮件地址，并且无法在 AWS 管理控制台中记录或跟踪用户账户更改。 VPC 流日志捕获有关流入和流出 VPC 内网络接口的 IP 流量的信息，并且是一种网络流量日志记录功能，可记录连接级数据，而不是控制台中的用户操作或帐户更改。 AWS CloudHSM 提供专用硬件安全模块来生成和管理加密密钥，并且是一种密钥管理和加密服务，无法跟踪或审核 AWS 管理控制台中的用户活动。

AWS CloudTrail は、AWS マネジメント コンソールのすべての API 呼び出しとユーザー アクションを記録し、セキュリティ分析とコンプライアンスのためにアカウント変更の完全な監査証跡を提供します。
Amazon Simple Notice Service は、Lambda 関数、HTTP エンドポイント、電子メール アドレスなどの通知をサブスクライバーに配信するフルマネージドのパブリッシュ/サブスクライブ メッセージング サービスですが、AWS マネジメント コンソール内でユーザー アカウントの変更を記録または追跡する機能はありません。VPC フロー ログは、VPC 内のネットワーク インターフェイスに送受信される IP トラフィックに関する情報をキャプチャし、コンソールでのユーザー アクションやアカウントの変更ではなく、接続レベルのデータを記録するネットワーク トラフィック ログ機能です。AWS CloudHSM は、暗号キーを生成および管理するための専用のハードウェア セキュリティ モジュールを提供します。これは、AWS マネジメント コンソール内のユーザー アクティビティを追跡または監査する機能を持たないキー管理および暗号化サービスです。

---

## Question 27 · Domain 1 · Select 2

**EN** Which AWS Cloud design principles can help increase reliability?

**中** 哪些 AWS 云设计原则可以帮助提高可靠性？

**日本語** 信頼性の向上に役立つ AWS クラウドの設計原則はどれですか?

- **A.** Using monolithic architecture
  - 使用单体架构
  - モノリシックアーキテクチャの使用
- **B.** Measuring overall efficiency
  - 衡量整体效率
  - 全体的な効率の測定
- **C.** Testing recovery procedures
  - 测试恢复程序
  - 回復手順のテスト
- **D.** Adopting a consumption model
  - 采用消费模式
  - 消費モデルの採用
- **E.** Automatically recovering from failure
  - 自动从故障中恢复
  - 障害からの自動回復

**答案 / Answer: `C,E`**

Testing recovery procedures validates that disaster recovery plans work correctly, and automatically recovering from failure using health checks and auto-scaling ensures systems self-heal without manual intervention, both being core Reliability pillar design principles.
Monolithic architecture tightly couples all application components together, meaning a failure in one part can bring down the entire system, which reduces rather than increases reliability. Measuring overall efficiency is a design principle associated with the Performance Efficiency pillar, not the Reliability pillar. Adopting a consumption model is a cost management principle associated with the Cost Optimization pillar, focused on paying only for what is used rather than on system resilience.

测试恢复程序可验证灾难恢复计划是否正常工作，并使用运行状况检查和自动扩展自动从故障中恢复，确保系统无需人工干预即可自我修复，这两者都是核心可靠性支柱设计原则。
整体架构将所有应用程序组件紧密耦合在一起，这意味着一个部件的故障可能会导致整个系统瘫痪，从而降低而不是提高可靠性。衡量整体效率是与性能效率支柱相关的设计原则，而不是与可靠性支柱相关的设计原则。采用消耗模型是与成本优化支柱相关的成本管理原则，重点是只为使用的内容付费，而不是为系统弹性付费。

リカバリ手順をテストすることで、ディザスタリカバリ計画が正しく機能することを検証し、ヘルスチェックと自動スケーリングを使用して障害から自動的にリカバリすることで、手動介入なしでシステムの自己修復が確実に行われます。これらは両方とも信頼性の柱となる設計原則です。
モノリシック アーキテクチャは、すべてのアプリケーション コンポーネントを緊密に結合します。つまり、一部で障害が発生するとシステム全体がダウンする可能性があり、信頼性は向上するどころか低下します。全体的な効率の測定は、信頼性の柱ではなく、パフォーマンス効率の柱に関連する設計原則です。消費モデルの採用は、コスト最適化の柱に関連するコスト管理原則であり、システムの復元力ではなく、使用した分だけ支払うことに重点を置いています。

---

## Question 28 · Domain 1

**EN** A batch workload takes 5 hours to finish on an Amazon EC2 instance. The amount of data to be processed doubles monthly and the processing time is proportional. What is the best cloud architecture to address this consistently growing demand?

**中** 在 Amazon EC2 实例上完成批量工作负载需要 5 小时。每月处理的数据量翻倍，处理时间成正比。满足这种持续增长的需求的最佳云架构是什么？

**日本語** Amazon EC2 インスタンスでバッチ ワークロードが完了するまでに 5 時間かかります。処理されるデータの量は毎月 2 倍になり、処理時間もそれに比例します。この増え続ける需要に対応するのに最適なクラウド アーキテクチャは何でしょうか?

- **A.** Run the application on a bigger EC2 instance size
  - 在更大的 EC2 实例大小上运行应用程序
  - より大きな EC2 インスタンス サイズでアプリケーションを実行する
- **B.** Switch to an EC2 instance family that better matches batch requirements
  - 切换到更符合批量要求的 EC2 实例规格族
  - バッチ要件によりよく適合する EC2 インスタンス ファミリーに切り替える
- **C.** Distribute the application across multiple EC2 instances and run the workload in parallel
  - 将应用程序分布到多个 EC2 实例并并行运行工作负载
  - アプリケーションを複数の EC2 インスタンスに分散し、ワークロードを並行して実行します。
- **D.** Run the application on a bare metal EC2 instance
  - 在裸机 EC2 实例上运行应用程序
  - ベアメタル EC2 インスタンスでアプリケーションを実行する

**答案 / Answer: `C`**

Distributing the workload across multiple EC2 instances and running in parallel applies horizontal scaling, which handles consistently growing demand by adding more machines rather than relying on a single larger instance that will eventually hit capacity limits.
Running the application on a bigger EC2 instance applies vertical scaling, which has an upper size limit and creates a single point of failure, making it unsuitable for consistently doubling workloads over time. Switching to a different EC2 instance family optimizes for workload characteristics such as compute or memory intensity, but does not address the problem of consistently growing processing volume. Running on a bare metal EC2 instance provides direct access to physical hardware without a hypervisor layer, which can improve performance for certain workloads but does not scale to handle doubling data volumes.

将工作负载分配到多个 EC2 实例并并行运行可应用水平扩展，通过添加更多机器来处理持续增长的需求，而不是依赖最终会达到容量限制的单个较大实例。
在更大的 EC2 实例上运行应用程序会应用垂直扩展，这具有大小上限并会产生单点故障，使其不适合随着时间的推移持续加倍工作负载。切换到不同的 EC2 实例系列可优化计算或内存强度等工作负载特征，但无法解决处理量持续增长的问题。在裸机 EC2 实例上运行可以直接访问物理硬件，无需虚拟机管理程序层，这可以提高某些工作负载的性能，但无法扩展以处理双倍的数据量。

ワークロードを複数の EC2 インスタンスに分散して並列実行すると、水平スケーリングが適用され、最終的に容量制限に達する単一のより大きなインスタンスに依存するのではなく、より多くのマシンを追加することで、一貫して増大する需要に対応します。
より大きな EC2 インスタンスでアプリケーションを実行すると、垂直スケーリングが適用されます。これにはサイズの上限があり、単一障害点が発生するため、時間の経過とともにワークロードを一貫して 2 倍にするのには適していません。別の EC2 インスタンス ファミリーに切り替えると、コンピューティング強度やメモリ強度などのワークロード特性が最適化されますが、処理量が一貫して増大するという問題には対処できません。ベアメタル EC2 インスタンス上で実行すると、ハイパーバイザー層なしで物理ハードウェアに直接アクセスできるため、特定のワークロードのパフォーマンスを向上させることができますが、データ ボリュームの 2 倍に対応できる拡張性はありません。

---

## Question 29 · Domain 1

**EN** An application designed to span multiple Availability Zones is described as:

**中** 设计用于跨越多个可用区的应用程序被描述为：

**日本語** 複数のアベイラビリティーゾーンにまたがるように設計されたアプリケーションは次のように説明されます。

- **A.** Being highly available
  - 高度可用
  - 可用性が高いこと
- **B.** Having global reach
  - 具有全球影响力
  - 世界的なリーチを持つ
- **C.** Using an economy of scale
  - 利用规模经济
  - 規模の経済を活用する
- **D.** Having elasticity
  - 有弹性
  - 弾力性がある

**答案 / Answer: `A`**

An application spanning multiple Availability Zones remains operational if one AZ experiences an outage, which is the definition of high availability.
Global reach describes deploying across multiple Regions or using a content delivery network to serve users worldwide, which goes beyond AZ-level redundancy within a single Region. Economy of scale refers to the cost benefits AWS passes to customers through aggregated purchasing power, which is a pricing concept unrelated to application architecture. Elasticity refers to dynamically scaling resources up or down in response to demand, which is independent of how many Availability Zones an application spans.

如果一个可用区发生中断，跨多个可用区的应用程序仍可运行，这就是高可用性的定义。
全球覆盖描述了跨多个区域部署或使用内容交付网络为全球用户提供服务，这超出了单个区域内可用区级别的冗余。规模经济是指 AWS 通过聚合购买力传递给客户的成本效益，是一个与应用架构无关的定价概念。弹性是指根据需求动态扩展或缩减资源，这与应用程序跨越的可用区数量无关。

1 つの AZ が停止しても、複数のアベイラビリティーゾーンにまたがるアプリケーションは動作し続けます。これが高可用性の定義です。
グローバル リーチとは、複数のリージョンにまたがる展開、またはコンテンツ配信ネットワークを使用して世界中のユーザーにサービスを提供することを指します。これは、単一リージョン内の AZ レベルの冗長性を超えています。規模の経済とは、AWS が購買力の集約を通じて顧客に提供するコスト上のメリットを指します。これは、アプリケーション アーキテクチャとは関係のない価格設定の概念です。弾力性とは、アプリケーションがまたがるアベイラビリティーゾーンの数には関係なく、需要に応じてリソースを動的にスケールアップまたはスケールダウンすることを指します。

---

## Question 30 · Domain 1

**EN** The continual reduction of AWS Cloud pricing is due to:

**中** AWS 云定价持续降低的原因是：

**日本語** AWS クラウドの料金が継続的に引き下げられているのは、次の理由によるものです。

- **A.** Pay-as-you go pricing
  - 按使用量付费定价
  - 従量課金制の料金設定
- **B.** The AWS global infrastructure
  - AWS 全球基础设施
  - AWS のグローバル インフラストラクチャ
- **C.** Economies of scale
  - 规模经济
  - 規模の経済
- **D.** Reserved storage pricing
  - 预留存储定价
  - リザーブドストレージの料金

**答案 / Answer: `C`**

As AWS grows and serves more customers, it achieves lower per-unit costs through economies of scale and passes those savings on to customers through regular price reductions.
Pay-as-you-go pricing is a billing model that charges for actual usage rather than upfront commitments, but it does not cause prices to decrease over time. The AWS global infrastructure describes the physical footprint of Regions, AZs, and edge locations, which supports service delivery but is not the mechanism behind continual price reductions. Reserved storage pricing is a commitment-based discount option for specific services, not a driver of overall AWS pricing reductions across the platform.

随着 AWS 的发展并为更多客户提供服务，它通过规模经济降低单位成本，并通过定期降价将这些节省的成本转嫁给客户。
即用即付定价是一种计费模式，根据实际使用情况而不是预先承诺进行收费，但它不会导致价格随着时间的推移而下降。 AWS 全球基础设施描述了区域、可用区和边缘站点的物理足迹，它支持服务交付，但不是持续降价背后的机制。预留存储定价是针对特定服务的基于承诺的折扣选项，而不是整个平台上 AWS 整体定价降低的驱动因素。

AWS が成長し、より多くの顧客にサービスを提供するにつれて、規模の経済によってユニットあたりのコストが削減され、その節約分が定期的な値下げを通じて顧客に還元されます。
従量課金制の料金設定は、前払い契約ではなく実際の使用量に応じて課金される請求モデルですが、時間の経過とともに価格が下がることはありません。AWS グローバル インフラストラクチャは、リージョン、AZ、およびエッジ ロケーションの物理的なフットプリントを記述します。これはサービスの提供をサポートしますが、継続的な価格引き下げの背後にあるメカニズムではありません。リザーブドストレージの価格は、特定のサービスに対するコミットメントベースの割引オプションであり、プラットフォーム全体の AWS 全体の価格引き下げの要因ではありません。

---

## Question 31 · Domain 3

**EN** A company needs to host a big data application on AWS using EC2 instances. Which of the following AWS Storage services would they choose to automatically get high throughput to multiple compute nodes?

**中** 一家公司需要使用 EC2 实例在 AWS 上托管大数据应用程序。他们会选择以下哪种 AWS 存储服务来自动为多个计算节点获得高吞吐量？

**日本語** 企業は、EC2 インスタンスを使用して AWS でビッグ データ アプリケーションをホストする必要があります。複数のコンピューティング ノードに対して自動的に高スループットを実現するには、次の AWS ストレージ サービスのうちどれを選択しますか?

- **A.** Amazon Elastic Block Store
  - 亚马逊弹性块商店
  - Amazonエラスティックブロックストア
- **B.** AWS Storage Gateway
  - AWS 存储网关
  - AWSストレージゲートウェイ
- **C.** Amazon Elastic File System
  - 亚马逊弹性文件系统
  - Amazon エラスティック ファイル システム
- **D.** S3
  - S3
  - S3

**答案 / Answer: `C`**

Amazon Elastic File System (EFS) provides a shared NFS file system that automatically scales and delivers high throughput to multiple EC2 instances concurrently, making it ideal for big data workloads that require parallel access across compute nodes.
Amazon Elastic Block Store provides block storage volumes that attach to a single EC2 instance at a time and cannot be simultaneously shared across multiple compute nodes for parallel access. AWS Storage Gateway is a hybrid storage service that connects on-premises environments to AWS cloud storage, and is not designed for high-throughput shared access between EC2 instances. Amazon S3 provides object storage accessible via API calls rather than a mounted file system, and does not deliver the low-latency, high-throughput shared file system access that big data workloads running on EC2 require.

Amazon Elastic File System (EFS) 提供共享 NFS 文件系统，可自动扩展并向多个 EC2 实例同时提供高吞吐量，非常适合需要跨计算节点并行访问的大数据工作负载。
Amazon Elastic Block Store 提供一次附加到单个 EC2 实例的块存储卷，并且无法在多个计算节点之间同时共享以进行并行访问。 AWS Storage Gateway 是一种混合存储服务，可将本地环境连接到 AWS 云存储，并非专为 EC2 实例之间的高吞吐量共享访问而设计。 Amazon S3 提供可通过 API 调用而不是安装的文件系统访问的对象存储，并且不提供在 EC2 上运行的大数据工作负载所需的低延迟、高吞吐量共享文件系统访问。

Amazon Elastic File System (EFS) は、自動的にスケーリングして複数の EC2 インスタンスに同時に高スループットを提供する共有 NFS ファイル システムを提供し、コンピューティング ノード間での並列アクセスを必要とするビッグデータ ワークロードに最適です。
Amazon Elastic Block Store は、一度に 1 つの EC2 インスタンスにアタッチされるブロック ストレージ ボリュームを提供しますが、並列アクセスのために複数のコンピューティング ノード間で同時に共有することはできません。AWS Storage Gateway は、オンプレミス環境を AWS クラウド ストレージに接続するハイブリッド ストレージ サービスであり、EC2 インスタンス間の高スループットの共有アクセス向けに設計されていません。Amazon S3 は、マウントされたファイル システムではなく API 呼び出しを介してアクセスできるオブジェクト ストレージを提供しますが、EC2 で実行されるビッグ データ ワークロードに必要な低遅延、高スループットの共有ファイル システム アクセスは提供しません。

---

## Question 32 · Domain 2

**EN** According to the AWS shared responsibility model what is the sole responsibility of AWS?

**中** 根据 AWS 共享责任模型，AWS 的唯一责任是什么？

**日本語** AWS 責任共有モデルによれば、AWS の唯一の責任は何ですか?

- **A.** Application security
  - 应用安全
  - アプリケーションのセキュリティ
- **B.** Edge location management
  - 边缘位置管理
  - エッジロケーション管理
- **C.** Patch management
  - 补丁管理
  - パッチ管理
- **D.** Client-side data
  - 客户端数据
  - クライアント側のデータ

**答案 / Answer: `B`**

Managing edge locations, the physical infrastructure used by CloudFront and other services, is solely AWS's responsibility as part of its obligation to operate and maintain the global infrastructure underpinning its services.
Application security is the customer's responsibility under the Shared Responsibility Model, as customers are accountable for securing the code, configurations, and access controls within their own applications. Patch management is a shared control where AWS patches the underlying infrastructure and managed services, while customers retain responsibility for patching their own operating systems and applications. Client-side data is the customer's responsibility, as customers control how their data is classified, encrypted, and managed on the client side regardless of which AWS services they use.

管理边缘站点（CloudFront 和其他服务使用的物理基础设施）完全是 AWS 的责任，也是其运营和维护支撑其服务的全球基础设施义务的一部分。
在共享责任模型下，应用程序安全是客户的责任，因为客户负责保护自己的应用程序内的代码、配置和访问控制。补丁管理是一种共享控制，AWS 可以在其中修补底层基础设施和托管服务，而客户则保留修补自己的操作系统和应用程序的责任。客户端数据是客户的责任，因为无论他们使用哪种 AWS 服务，客户都可以控制其数据在客户端的分类、加密和管理方式。

CloudFront やその他のサービスで使用される物理インフラストラクチャであるエッジ ロケーションの管理は、AWS のサービスを支えるグローバル インフラストラクチャを運用および維持する義務の一環として、AWS が単独で責任を負います。
顧客は自分のアプリケーション内のコード、構成、およびアクセス制御を保護する責任があるため、責任共有モデルに基づいてアプリケーションのセキュリティは顧客の責任となります。パッチ管理は、AWS が基盤となるインフラストラクチャとマネージドサービスにパッチを適用する共有制御であり、お客様は独自のオペレーティングシステムとアプリケーションにパッチを適用する責任を負います。どの AWS サービスを使用するかに関係なく、クライアント側でデータを分類、暗号化、管理する方法はお客様が制御するため、クライアント側のデータはお客様の責任となります。

---

## Question 33 · Domain 3

**EN** What is the purpose of AWS Storage Gateway?

**中** AWS Storage Gateway 的用途是什么？

**日本語** AWS Storage Gateway の目的は何ですか?

- **A.** It ensures on-premises data storage is 99.999999999% durable
  - 确保本地数据存储 99.999999999% 持久
  - オンプレミスのデータ ストレージの 99.999999999% の耐久性を保証します
- **B.** It transports petabytes of data to and from AWS
  - 它与 AWS 之间传输 PB 级的数据
  - ペタバイト規模のデータを AWS との間で転送します
- **C.** It connects to multiple Amazon EC2 instances
  - 它连接到多个 Amazon EC2 实例
  - 複数の Amazon EC2 インスタンスに接続します
- **D.** It connects on-premises data storage to the AWS Cloud
  - 它将本地数据存储连接到 AWS 云
  - オンプレミスのデータストレージを AWS クラウドに接続します

**答案 / Answer: `D`**

AWS Storage Gateway is a hybrid cloud storage service that gives you on-premises access to virtually unlimited cloud storage. It connects your existing on-premises applications and workflows to AWS storage services like Amazon S3, Amazon EBS, and Amazon FSx through standard storage protocols such as NFS, SMB, and iSCSI.
The 99.999999999% (11 nines) durability figure is a specific design characteristic of Amazon S3's object storage, not a guarantee applied to local on-premises hardware. Transporting petabytes of data physically to and from AWS is the primary function of the AWS Snow Family (such as AWS Snowball), whereas Storage Gateway is for ongoing network-based integration. Connecting to multiple Amazon EC2 instances is a feature of shared storage services like Amazon EFS or Amazon FSx, rather than a hybrid connectivity solution for on-premises data centers.

AWS Storage Gateway 是一种混合云存储服务，可让您在本地访问几乎无限的云存储。它通过 NFS、SMB 和 iSCSI 等标准存储协议将您现有的本地应用程序和工作流程连接到 Amazon S3、Amazon EBS 和 Amazon FSx 等 AWS 存储服务。
99.999999999%（11 个 9）的耐用性数字是 Amazon S3 对象存储的特定设计特征，而不是应用于本地本地硬件的保证。 AWS Snow 系列（例如 AWS Snowball）的主要功能是从 AWS 物理传输 PB 级数据，而 Storage Gateway 用于持续的基于网络的集成。连接到多个 Amazon EC2 实例是 Amazon EFS 或 Amazon FSx 等共享存储服务的一项功能，而不是本地数据中心的混合连接解决方案。

AWS Storage Gateway は、事実上無制限のクラウド ストレージへのオンプレミス アクセスを提供するハイブリッド クラウド ストレージ サービスです。NFS、SMB、iSCSI などの標準ストレージ プロトコルを介して、既存のオンプレミス アプリケーションとワークフローを Amazon S3、Amazon EBS、Amazon FSx などの AWS ストレージ サービスに接続します。
99.999999999% (11 ナイン) という耐久性の数値は、Amazon S3 のオブジェクト ストレージの特定の設計特性であり、ローカルのオンプレミス ハードウェアに適用される保証ではありません。ペタバイト単位のデータを AWS との間で物理的に転送することが AWS Snow ファミリー (AWS Snowball など) の主な機能であるのに対し、Storage Gateway は継続的なネットワークベースの統合を目的としています。複数の Amazon EC2 インスタンスへの接続は、オンプレミス データセンター向けのハイブリッド接続ソリューションではなく、Amazon EFS や Amazon FSx などの共有ストレージ サービスの機能です。

---

## Question 34 · Domain 1

**EN** Treating infrastructure as code in the AWS Cloud allows users to:

**中** 将基础设施视为 AWS 云中的代码允许用户：

**日本語** AWS クラウドでインフラストラクチャをコードとして扱うことで、ユーザーは次のことが可能になります。

- **A.** Automate migration of on-premises hardware to AWS data centers
  - 自动将本地硬件迁移到 AWS 数据中心
  - オンプレミスのハードウェアから AWS データセンターへの移行を自動化する
- **B.** Let a third party automate an audit of the AWS infrastructure
  - 让第三方自动审核 AWS 基础设施
  - サードパーティによる AWS インフラストラクチャの監査の自動化を許可する
- **C.** Turn over application code to AWS so it can run on the AWS infrastructure
  - 将应用程序代码移交给 AWS，以便它可以在 AWS 基础设施上运行
  - アプリケーションコードを AWS に引き渡して、AWS インフラストラクチャ上で実行できるようにします。
- **D.** Automate the infrastructure provisioning process
  - 自动化基础设施配置流程
  - インフラストラクチャのプロビジョニング プロセスを自動化する

**答案 / Answer: `D`**

Infrastructure as code allows users to define and automate the provisioning of AWS resources using templates, enabling repeatable, version-controlled deployments without manual configuration.
Automating migration of on-premises hardware to AWS data centers is not possible through infrastructure as code, as physical hardware migration is a separate process managed outside of code-based provisioning. Letting a third party automate an audit of AWS infrastructure describes a compliance or security activity unrelated to infrastructure provisioning. Turning over application code to AWS to run on its infrastructure misrepresents how AWS works, as customers are always responsible for their own application code and deployment.

基础设施即代码允许用户使用模板定义和自动配置 AWS 资源，从而无需手动配置即可实现可重复、版本控制的部署。
通过基础设施即代码无法将本地硬件自动迁移到 AWS 数据中心，因为物理硬件迁移是在基于代码的配置之外进行管理的单独流程。让第三方自动审核 AWS 基础设施描述了与基础设施配置无关的合规性或安全活动。将应用程序代码移交给 AWS 在其基础设施上运行并不能体现 AWS 的工作方式，因为客户始终要对自己的应用程序代码和部署负责。

コードとしてのインフラストラクチャを使用すると、ユーザーはテンプレートを使用して AWS リソースのプロビジョニングを定義および自動化できるため、手動構成を必要とせずに反復可能でバージョン管理されたデプロイメントが可能になります。
物理ハードウェアの移行はコードベースのプロビジョニングの外部で管理される別のプロセスであるため、オンプレミスのハードウェアから AWS データセンターへの移行を自動化することは、コードとしてのインフラストラクチャでは不可能です。サードパーティに AWS インフラストラクチャの監査を自動化させることは、インフラストラクチャのプロビジョニングに関係のないコンプライアンスまたはセキュリティ活動を説明することになります。顧客は常に独自のアプリケーション コードとデプロイメントに対して責任を負うため、アプリケーション コードを AWS に引き渡してそのインフラストラクチャ上で実行することは、AWS の仕組みを誤って伝えることになります。

---

## Question 35 · Domain 3 · Select 2

**EN** Which AWS services provide a user with connectivity between the AWS Cloud and on-premises resources?

**中** 哪些 AWS 服务为用户提供 AWS 云和本地资源之间的连接？

**日本語** ユーザーに AWS クラウドとオンプレミス リソース間の接続を提供する AWS のサービスはどれですか?

- **A.** AWS VPN
  - AWS VPN
  - AWS VPN
- **B.** Amazon Connect
  - 亚马逊连接
  - アマゾンコネクト
- **C.** Amazon Cognito
  - Amazon Cognito
  - Amazon Cognito
- **D.** AWS Direct Connect
  - AWS Direct Connect
  - AWS Direct Connect
- **E.** AWS Managed Services
  - AWS 托管服务
  - AWSマネージドサービス

**答案 / Answer: `A,D`**

AWS VPN creates an encrypted tunnel over the public internet between an on-premises network and an AWS VPC, and AWS Direct Connect establishes a dedicated private physical network connection from an on-premises data center to AWS. Both provide connectivity between on-premises resources and the AWS Cloud.
Amazon Connect is a cloud-based contact center service that enables customer service operations through voice and chat channels, and is a business communications tool rather than a network connectivity solution for linking on-premises infrastructure to AWS. Amazon Cognito provides user identity and authentication services for web and mobile applications, managing user sign-up, sign-in, and access control, and is an identity service rather than a network connectivity solution. AWS Managed Services provides ongoing management of AWS infrastructure to reduce operational overhead, and is an operational management offering rather than a network connectivity service between on-premises environments and the AWS Cloud.

AWS VPN 通过公共互联网在本地网络和 AWS VPC 之间创建加密隧道，而 AWS Direct Connect 则建立从本地数据中心到 AWS 的专用私有物理网络连接。两者都提供本地资源和 AWS 云之间的连接。
Amazon Connect 是一种基于云的联络中心服务，可通过语音和聊天渠道实现客户服务操作，并且是一种业务通信工具，而不是用于将本地基础设施连接到 AWS 的网络连接解决方案。 Amazon Cognito 为 Web 和移动应用程序提供用户身份和身份验证服务，管理用户注册、登录和访问控制，是一种身份服务而不是网络连接解决方案。 AWS Managed Services 提供对 AWS 基础设施的持续管理，以减少运营开销，并且是一种运营管理产品，而不是本地环境与 AWS 云之间的网络连接服务。

AWS VPN は、オンプレミス ネットワークと AWS VPC の間にパブリック インターネット経由で暗号化されたトンネルを作成し、AWS Direct Connect はオンプレミス データセンターから AWS への専用プライベート物理ネットワーク接続を確立します。どちらもオンプレミスのリソースと AWS クラウド間の接続を提供します。
Amazon Connect は、音声およびチャット チャネルを介したカスタマー サービスの運用を可能にするクラウドベースのコンタクト センター サービスであり、オンプレミスのインフラストラクチャを AWS にリンクするためのネットワーク接続ソリューションではなく、ビジネス コミュニケーション ツールです。Amazon Cognito は、Web およびモバイル アプリケーションにユーザー ID および認証サービスを提供し、ユーザーのサインアップ、サインイン、アクセス制御を管理します。これは、ネットワーク接続ソリューションではなく ID サービスです。AWS マネージド サービスは、AWS インフラストラクチャの継続的な管理を提供して運用オーバーヘッドを削減します。これは、オンプレミス環境と AWS クラウド間のネットワーク接続サービスではなく、運用管理サービスです。

---

## Question 36 · Domain 1

**EN** A Cloud Practitioner is developing a disaster recovery plan and intends to replicate data between multiple geographic areas. Which of the following meets these requirements?

**中** 云从业者正在制定灾难恢复计划，并打算在多个地理区域之间复制数据。以下哪一项符合这些要求？

**日本語** クラウド プラクティショナーは災害復旧計画を開発しており、複数の地理的エリア間でデータをレプリケートする予定です。これらの要件を満たすのは次のうちどれですか?

- **A.** AWS Accounts
  - AWS 账户
  - AWS アカウント
- **B.** AWS Regions
  - AWS 区域
  - AWS リージョン
- **C.** Availability Zones
  - 可用区
  - アベイラビリティーゾーン
- **D.** Edge locations
  - 边缘位置
  - エッジの位置

**答案 / Answer: `B`**

AWS Regions are geographically separate areas around the world, making them the correct choice for replicating data across different physical locations to satisfy disaster recovery requirements.
AWS Accounts are a logical boundary for managing resources and billing, not a geographic infrastructure component. Availability Zones are isolated data center clusters within a single Region, so replicating between AZs does not achieve geographic separation across different areas of the world. Edge locations are points of presence used for content delivery and caching, not designed for data replication or disaster recovery purposes.

AWS 区域是世界各地地理上独立的区域，使其成为跨不同物理位置复制数据以满足灾难恢复要求的正确选择。
AWS 账户是管理资源和计费的逻辑边界，而不是地理基础设施组件。可用区是单个区域内的隔离数据中心集群，因此可用区之间的复制并不能实现跨世界不同区域的地理隔离。边缘站点是用于内容交付和缓存的存在点，不是为数据复制或灾难恢复目的而设计的。

AWS リージョンは世界中で地理的に離れたエリアであるため、ディザスタリカバリ要件を満たすために異なる物理的な場所にデータをレプリケートするための正しい選択となります。
AWS アカウントは、地理的なインフラストラクチャ コンポーネントではなく、リソースと請求を管理するための論理的な境界です。アベイラビリティーゾーンは、単一リージョン内の分離されたデータセンタークラスターであるため、AZ 間でレプリケーションを行っても、世界の異なるエリアにまたがる地理的な分離は実現されません。エッジ ロケーションは、コンテンツの配信とキャッシュに使用されるポイントであり、データ レプリケーションや災害復旧を目的として設計されたものではありません。

---

## Question 37 · Domain 3 · Select 2

**EN** Which of the following are characteristics of Amazon S3?

**中** 以下哪项是 Amazon S3 的特性？

**日本語** Amazon S3 の特徴は次のうちどれですか?

- **A.** A global file system
  - 全局文件系统
  - グローバルファイルシステム
- **B.** An object store
  - 对象存储
  - オブジェクトストア
- **C.** A local file store
  - 本地文件存储
  - ローカルファイルストア
- **D.** A network file system
  - 网络文件系统
  - ネットワークファイルシステム
- **E.** A durable storage system
  - 耐用的存储系统
  - 耐久性のあるストレージシステム

**答案 / Answer: `B,E`**

Amazon S3 is an object store that provides highly durable storage with 99.999999999% durability, storing data as objects in buckets rather than as files in a file system or blocks on a disk.
A global file system describes Amazon EFS, which provides a shared network file system accessible across multiple EC2 instances, not an object storage service. A local file store describes temporary instance storage such as EC2 instance store volumes, which are physically attached to the host and lost when the instance stops. A network file system also describes Amazon EFS, which mounts as a shared file system over a network connection rather than storing data as objects.

Amazon S3 是一种对象存储，提供持久性高达 99.999999999% 的高持久性存储，将数据作为对象存储在存储桶中，而不是作为文件系统中的文件或磁盘上的块。
全局文件系统描述了 Amazon EFS，它提供跨多个 EC2 实例访问的共享网络文件系统，而不是对象存储服务。本地文件存储描述临时实例存储，例如 EC2 实例存储卷，它们物理连接到主机，并在实例停止时丢失。网络文件系统还描述了 Amazon EFS，它通过网络连接作为共享文件系统安装，而不是将数据存储为对象。

Amazon S3 は、99.999999999% の耐久性を備えた耐久性の高いストレージを提供するオブジェクト ストアで、データをファイル システム内のファイルやディスク上のブロックとしてではなく、バケット内のオブジェクトとして保存します。
グローバル ファイル システムは、オブジェクト ストレージ サービスではなく、複数の EC2 インスタンス間でアクセス可能な共有ネットワーク ファイル システムを提供する Amazon EFS を記述します。ローカル ファイル ストアは、EC2 インスタンス ストア ボリュームなどの一時的なインスタンス ストレージを指します。これらはホストに物理的に接続されており、インスタンスが停止すると失われます。ネットワーク ファイル システムでは、データをオブジェクトとして保存するのではなく、ネットワーク接続を介して共有ファイル システムとしてマウントする Amazon EFS についても説明します。

---

## Question 38 · Domain 2 · Select 2

**EN** The AWS account administrator of your company has been fired. With the permissions granted to him as an administrator, he was able to create multiple IAM user accounts and access keys. Additionally, you are not sure whether he has access to the AWS root account or not. What should you do immediately to protect your AWS infrastructure?

**中** 贵公司的 AWS 账户管理员已被解雇。通过授予他作为管理员的权限，他能够创建多个 IAM 用户帐户和访问密钥。此外，您不确定他是否有权访问 AWS 根帐户。您应该立即采取什么措施来保护您的 AWS 基础设施？

**日本語** あなたの会社の AWS アカウント管理者が解雇されました。管理者として付与されたアクセス許可を使用して、複数の IAM ユーザー アカウントとアクセス キーを作成できました。さらに、彼が AWS ルート アカウントにアクセスできるかどうかもわかりません。AWS インフラストラクチャを保護するには、すぐに何をすべきでしょうか?

- **A.** Download all the attached policies in a safe place
  - 将所有附加政策下载到安全的地方
  - 添付されているすべてのポリシーを安全な場所にダウンロードします
- **B.** Delete all IAM accounts and recreate them
  - 删除所有 IAM 帐户并重新创建
  - すべての IAM アカウントを削除して再作成します
- **C.** Use the CloudWatch service to check all API calls that have been made in your account since the administrator was fired
  - 使用 CloudWatch 服务检查自管理员被解雇以来在您的帐户中进行的所有 API 调用
  - CloudWatch サービスを使用して、管理者が解雇されてからアカウント内で行われたすべての API 呼び出しを確認します
- **D.** Rotate all access keys
  - 轮换所有访问键
  - すべてのアクセスキーをローテーションする
- **E.** Change the email address and password of the root user account and enable MFA
  - 更改 root 用户帐户的电子邮件地址和密码并启用 MFA
  - root ユーザーアカウントのメールアドレスとパスワードを変更し、MFA を有効にします。

**答案 / Answer: `D,E`**

Rotating all access keys immediately invalidates any keys the former administrator may have copied or retained, and changing the root account email and password with MFA enabled prevents root-level access using any credentials the administrator may have had.
Downloading attached policies to a safe place does not address the immediate security risk; the priority is to revoke the former administrator's access rather than preserving policy documentation, and policies can be reviewed from the console at any time. Deleting all IAM accounts and recreating them would lock out the entire team immediately and disrupt operations without actually addressing whether the root account is compromised; the root account password change must take priority. Using CloudWatch to check all API calls made since the administrator was fired is a useful forensic step for understanding what actions were taken, but it is a post-incident investigation activity rather than an immediate protective measure that should come before securing credentials.

立即轮换所有访问密钥会使前管理员可能复制或保留的任何密钥失效，并且在启用 MFA 的情况下更改根帐户电子邮件和密码可防止使用管理员可能拥有的任何凭据进行根级别访问。
将附加策略下载到安全位置并不能解决直接的安全风险；优先级是撤销前管理员的访问权限，而不是保留策略文档，并且可以随时从控制台查看策略。删除所有 IAM 帐户并重新创建它们会立即锁定整个团队并扰乱运营，而不会真正解决根帐户是否受到威胁的问题；必须优先更改 root 帐户密码。使用 CloudWatch 检查自管理员被解雇以来进行的所有 API 调用是了解所采取的操作的有用取证步骤，但这是事件后调查活动，而不是在保护凭据之前应采取的立即保护措施。

すべてのアクセス キーをローテーションすると、元の管理者がコピーまたは保持していたキーが即座に無効になり、MFA を有効にして root アカウントの電子メールとパスワードを変更すると、管理者が持っていた資格情報を使用した root レベルのアクセスができなくなります。
添付されたポリシーを安全な場所にダウンロードしても、差し迫ったセキュリティ リスクには対処できません。ポリシー文書を保存するのではなく、元管理者のアクセス権を取り消すことが優先され、ポリシーはいつでもコンソールから確認できます。すべての IAM アカウントを削除して再作成すると、root アカウントが侵害されているかどうかを実際に対処することなく、チーム全体が即座にロックアウトされ、業務が中断されてしまいます。root アカウントのパスワード変更を優先する必要があります。CloudWatch を使用して、管理者が解雇されて以降に行われたすべての API 呼び出しをチェックすることは、どのようなアクションが行われたかを理解するための有益なフォレンジック手順ですが、資格情報を保護する前に行うべき即時の保護措置ではなく、インシデント後の調査活動です。

---

## Question 39 · Domain 3

**EN** Users are reporting latency when connecting to a website with a global customer base. Which AWS service will improve the customer experience by reducing latency?

**中** 用户报告连接到具有全球客户群的网站时存在延迟。哪种 AWS 服务将通过减少延迟来改善客户体验？

**日本語** ユーザーは、世界中の顧客ベースを持つ Web サイトに接続するときに遅延が発生すると報告しています。レイテンシーを短縮することで顧客エクスペリエンスを向上させる AWS サービスはどれですか?

- **A.** Amazon CloudFront
  - Amazon CloudFront
  - Amazon CloudFront
- **B.** AWS Direct Connect
  - AWS Direct Connect
  - AWS Direct Connect
- **C.** Amazon EC2 Auto Scaling
  - Amazon EC2 自动伸缩
  - Amazon EC2 オートスケーリング
- **D.** AWS Transit Gateway
  - AWS 传输网关
  - AWS トランジット ゲートウェイ

**答案 / Answer: `A`**

Amazon CloudFront caches content at edge locations worldwide, delivering it from the location nearest to each user, which significantly reduces latency for a website with a global customer base.
AWS Direct Connect provides a dedicated private network link between on-premises infrastructure and AWS, which improves connectivity for enterprise networks but does not reduce latency for public internet users accessing a website. Amazon EC2 Auto Scaling adjusts the number of instances based on demand to maintain performance and availability, but does not reduce the geographic distance between the server and global users. AWS Transit Gateway connects VPCs and on-premises networks through a central hub, and is a network routing service with no content delivery or latency optimization capability for end users.

Amazon CloudFront 在全球边缘位置缓存内容，从距离每个用户最近的位置交付内容，这显着减少了拥有全球客户群的网站的延迟。
AWS Direct Connect 在本地基础设施和 AWS 之间提供专用的专用网络链接，这可以改善企业网络的连接性，但不会减少公共互联网用户访问网站的延迟。 Amazon EC2 弹性伸缩根据需求调整实例数量以维持性能和可用性，但不会缩短服务器与全球用户之间的地理距离。 AWS Transit Gateway 通过中央集线器连接 VPC 和本地网络，是一种网络路由服务，不为最终用户提供内容交付或延迟优化功能。

Amazon CloudFront は、コンテンツを世界中のエッジ ロケーションにキャッシュし、各ユーザーに最も近いロケーションからコンテンツを配信します。これにより、世界中の顧客ベースを持つ Web サイトの遅延が大幅に削減されます。
AWS Direct Connect は、オンプレミスのインフラストラクチャと AWS の間に専用のプライベート ネットワーク リンクを提供します。これにより、エンタープライズ ネットワークの接続が向上しますが、Web サイトにアクセスする公共のインターネット ユーザーのレイテンシは短縮されません。Amazon EC2 Auto Scaling は、パフォーマンスと可用性を維持するために需要に基づいてインスタンスの数を調整しますが、サーバーとグローバル ユーザーの間の地理的な距離は減少しません。AWS Transit Gateway は、中央ハブを介して VPC とオンプレミス ネットワークを接続します。これは、エンドユーザー向けのコンテンツ配信やレイテンシー最適化機能を持たないネットワーク ルーティング サービスです。

---

## Question 40 · Domain 1 · Select 2

**EN** Which of the following are benefits of hosting infrastructure in the AWS Cloud?

**中** 以下哪些是在 AWS 云中托管基础设施的好处？

**日本語** AWS クラウドでインフラストラクチャをホスティングする利点は次のうちどれですか?

- **A.** There are no upfront commitments
  - 没有预先承诺
  - 事前の約束はありません
- **B.** AWS manages all security in the cloud
  - AWS 管理云中的所有安全
  - AWS はクラウド内のすべてのセキュリティを管理します
- **C.** Users have the ability to provision resources on demand
  - 用户可以按需配置资源
  - ユーザーはオンデマンドでリソースをプロビジョニングできます
- **D.** Users have access to free and unlimited storage
  - 用户可以访问免费且无限的存储空间
  - ユーザーは無料で無制限のストレージにアクセスできます
- **E.** Users have control over the physical infrastructure
  - 用户可以控制物理基础设施
  - ユーザーは物理インフラストラクチャを制御できます

**答案 / Answer: `A,C`**

AWS requires no upfront hardware commitments, allowing organizations to pay only for what they consume, and resources can be provisioned on demand in minutes allowing businesses to scale quickly without waiting for hardware procurement and installation.
AWS does not manage all security in the cloud; under the shared responsibility model, AWS secures the underlying infrastructure while customers are responsible for securing their applications, data, and configurations that run on top of that infrastructure. Users do not have access to free and unlimited storage on AWS; storage services such as S3 and EBS are priced based on usage, and while there are free tier limits for new accounts, storage is not free or unlimited in general. Users do not have control over the physical infrastructure; one of the trade-offs of moving to the cloud is that customers give up physical access to and control of the underlying hardware, trusting AWS to manage it securely and reliably.

AWS 不需要预先承诺硬件，允许组织只需为其消耗的资源付费，并且可以在几分钟内按需配置资源，从而使企业无需等待硬件采购和安装即可快速扩展。
AWS 并不管理云中的所有安全；在共享责任模型下，AWS 保护底层基础设施的安全，而客户则负责保护在该基础设施之上运行的应用程序、数据和配置的安全。用户无法访问 AWS 上的免费且无限制的存储空间； S3 和 EBS 等存储服务根据使用情况定价，虽然新帐户有免费套餐限制，但存储通常不是免费或无限制的。用户无法控制物理基础设施；迁移到云的权衡之一是客户放弃对底层硬件的物理访问和控制，而信任 AWS 安全可靠地管理它。

AWS ではハードウェアの事前契約が不要なため、組織は消費した分だけ支払うことができ、オンデマンドでリソースを数分でプロビジョニングできるため、ハードウェアの調達や設置を待たずにビジネスを迅速に拡張できます。
AWS はクラウド内のすべてのセキュリティを管理するわけではありません。責任共有モデルでは、AWS が基盤となるインフラストラクチャを保護し、顧客はそのインフラストラクチャ上で実行されるアプリケーション、データ、構成を保護する責任を負います。ユーザーは AWS 上の無料かつ無制限のストレージにアクセスできません。S3 や EBS などのストレージ サービスは使用量に基づいて価格設定されており、新しいアカウントには無料利用枠の制限がありますが、一般にストレージは無料または無制限ではありません。ユーザーは物理インフラストラクチャを制御できません。クラウドへの移行のトレードオフの 1 つは、顧客が基盤となるハードウェアへの物理的なアクセスと制御を放棄し、AWS がハードウェアを安全かつ確実に管理することを信頼することです。

---

## Question 41 · Domain 3

**EN** Which AWS service will help users determine if an application running on an Amazon EC2 instance has sufficient CPU capacity?

**中** 哪种 AWS 服务将帮助用户确定在 Amazon EC2 实例上运行的应用程序是否有足够的 CPU 容量？

**日本語** Amazon EC2 インスタンスで実行されているアプリケーションに十分な CPU 容量があるかどうかをユーザーが判断するのに役立つ AWS のサービスはどれですか?

- **A.** Amazon CloudWatch
  - Amazon CloudWatch
  - Amazon CloudWatch
- **B.** AWS Config
  - AWS Config
  - AWS Config
- **C.** AWS CloudTrail
  - AWS CloudTrail
  - AWS CloudTrail
- **D.** Amazon Inspector
  - Amazon Inspector
  - Amazon Inspector

**答案 / Answer: `A`**

Amazon CloudWatch monitors EC2 CPU utilization metrics and can display dashboards showing whether an instance has sufficient CPU capacity for its workload, triggering alarms when defined thresholds are exceeded.
AWS Config continuously tracks and records the configuration of AWS resources to assess compliance and detect configuration changes, and does not monitor real-time performance metrics such as CPU utilization. AWS CloudTrail records API calls and account activity across an AWS environment for auditing and compliance purposes, and has no capability to monitor instance-level performance metrics. Amazon Inspector is an automated security assessment service that scans EC2 instances and container images for software vulnerabilities and unintended network exposure, and is a security tool rather than a performance monitoring service.

Amazon CloudWatch 监控 EC2 CPU 利用率指标，并可以显示仪表板，显示实例是否有足够的 CPU 容量来满足其工作负载，并在超过定义的阈值时触发警报。
AWS Config 持续跟踪和记录 AWS 资源的配置，以评估合规性并检测配置更改，并且不监控 CPU 利用率等实时性能指标。 AWS CloudTrail 记录 AWS 环境中的 API 调用和账户活动，以用于审计和合规性目的，并且无法监控实例级性能指标。 Amazon Inspector 是一种自动化安全评估服务，可扫描 EC2 实例和容器映像是否有软件漏洞和意外网络暴露，并且是一种安全工具，而不是性能监控服务。

Amazon CloudWatch は、EC2 の CPU 使用率メトリクスを監視し、インスタンスにワークロードに対して十分な CPU 容量があるかどうかを示すダッシュボードを表示し、定義されたしきい値を超えたときにアラームをトリガーできます。
AWS Config は、AWS リソースの構成を継続的に追跡および記録して、コンプライアンスを評価し、構成の変更を検出します。CPU 使用率などのリアルタイムのパフォーマンス メトリクスは監視しません。AWS CloudTrail は、監査とコンプライアンスの目的で AWS 環境全体の API 呼び出しとアカウント アクティビティを記録しますが、インスタンス レベルのパフォーマンス メトリクスを監視する機能はありません。Amazon Inspector は、EC2 インスタンスとコンテナ イメージをスキャンしてソフトウェアの脆弱性や意図しないネットワークへの露出を検出する自動セキュリティ評価サービスで、パフォーマンス監視サービスではなくセキュリティ ツールです。

---

## Question 42 · Domain 3

**EN** What is one of the advantages of the Amazon Relational Database Service (Amazon RDS)?

**中** Amazon Relational Database Service (Amazon RDS) 的优势之一是什么？

**日本語** Amazon Relational Database Service (Amazon RDS) の利点の 1 つは何ですか?

- **A.** It simplifies relational database administration tasks
  - 它简化了关系数据库管理任务
  - リレーショナル データベース管理タスクを簡素化します。
- **B.** It provides 99.99999999999% reliability and durability
  - 它提供 99.99999999999% 的可靠性和耐用性
  - 99.99999999999% の信頼性と耐久性を提供します。
- **C.** It automatically scales databases for loads
  - 它会根据负载自动扩展数据库
  - 負荷に応じてデータベースを自動的にスケーリングします
- **D.** It enables users to dynamically adjust CPU and RAM resources
  - 它使用户能够动态调整 CPU 和 RAM 资源
  - ユーザーが CPU と RAM リソースを動的に調整できるようにします。

**答案 / Answer: `A`**

Amazon RDS simplifies relational database administration by automating time-consuming tasks like hardware provisioning, database setup, patching, and backups, letting customers focus on application development rather than infrastructure management.
99.9999999999% reliability and durability is a figure associated with Amazon S3's object durability, not a published SLA for Amazon RDS. Automatically scaling databases for loads describes Amazon Aurora Serverless, which scales compute capacity automatically based on demand, not a default behavior of standard RDS instances. Dynamically adjusting CPU and RAM resources describes the behavior of services with automatic vertical scaling, which RDS does not provide natively as customers must manually modify instance types to change compute resources.

Amazon RDS 通过自动执行硬件配置、数据库设置、修补和备份等耗时任务来简化关系数据库管理，让客户专注于应用程序开发而不是基础设施管理。
99.9999999999% 可靠性和耐用性是与 Amazon S3 的对象耐用性相关的数字，而不是 Amazon RDS 已发布的 SLA。自动缩放数据库负载描述了 Amazon Aurora Serverless，它根据需求自动缩放计算容量，而不是标准 RDS 实例的默认行为。动态调整 CPU 和 RAM 资源描述了具有自动垂直扩展的服务的行为，RDS 本身并不提供这种功能，因为客户必须手动修改实例类型才能更改计算资源。

Amazon RDS は、ハードウェアのプロビジョニング、データベースのセットアップ、パッチ適用、バックアップなどの時間のかかるタスクを自動化することでリレーショナル データベースの管理を簡素化し、顧客がインフラストラクチャ管理ではなくアプリケーション開発に集中できるようにします。
99.9999999999% の信頼性と耐久性は、Amazon S3 のオブジェクト耐久性に関連する数値であり、Amazon RDS に対して公開されている SLA ではありません。「負荷に応じたデータベースの自動スケーリング」では、標準 RDS インスタンスのデフォルトの動作ではなく、需要に基づいてコンピューティング容量を自動的にスケーリングする Amazon Aurora サーバーレスについて説明します。CPU および RAM リソースの動的な調整は、自動垂直スケーリングによるサービスの動作を記述します。これは、顧客がコンピューティング リソースを変更するにはインスタンス タイプを手動で変更する必要があるため、RDS ではネイティブに提供されません。

---

## Question 43 · Domain 4

**EN** A Cloud Practitioner is asked how to estimate the cost of using a new application on AWS. What is the MOST appropriate response?

**中** 云从业者被问到如何估算在 AWS 上使用新应用程序的成本。最合适的回应是什么？

**日本語** クラウド プラクティショナーは、AWS で新しいアプリケーションを使用するコストを見積もる方法を尋ねられます。最も適切な応答は何ですか?

- **A.** Inform the user that AWS pricing allows for on-demand pricing
  - 告知用户 AWS 定价允许按需定价
  - AWS の料金設定ではオンデマンド料金が可能であることをユーザーに通知します。
- **B.** Direct the user to the AWS Pricing Calculator for an estimate
  - 将用户引导至 AWS Pricing Calculator 进行估算
  - 見積もりのためにユーザーを AWS Pricing Calculator に誘導します。
- **C.** Use Amazon QuickSight to analyze current spending on-premises
  - 使用 Amazon QuickSight 分析当前的本地支出
  - Amazon QuickSight を使用してオンプレミスの現在の支出を分析する
- **D.** Use Amazon AppStream 2.0 for real-time pricing analytics
  - 使用 Amazon AppStream 2.0 进行实时定价分析
  - Amazon AppStream 2.0 を使用してリアルタイムの価格分析を行う

**答案 / Answer: `B`**

The AWS Pricing Calculator allows users to model AWS service configurations and generate detailed cost estimates before any resources are deployed, making it the most appropriate tool to direct a user to when they need to estimate the cost of a new application.
Informing the user that AWS uses on-demand pricing is accurate but does not help them estimate actual costs for a specific application, as it provides no tool or mechanism for calculating projected spend. Amazon QuickSight is a serverless business intelligence service for creating dashboards and visualisations from business data, and is not a tool for analyzing on-premises spending or estimating AWS costs. Amazon AppStream 2.0 is a fully managed application streaming service that delivers desktop applications to users through a browser, and has no capability for real-time pricing analytics or cost estimation.

AWS Pricing Calculator 允许用户在部署任何资源之前对 AWS 服务配置进行建模并生成详细的成本估算，这使其成为在用户需要估算新应用程序成本时指导用户的最合适工具。
告知用户 AWS 使用按需定价是准确的，但无法帮助他们估计特定应用程序的实际成本，因为它没有提供用于计算预计支出的工具或机制。 Amazon QuickSight 是一种无服务器商业智能服务，用于根据业务数据创建仪表板和可视化效果，而不是用于分析本地支出或估算 AWS 成本的工具。 Amazon AppStream 2.0 是一种完全托管的应用程序流服务，可通过浏览器向用户提供桌面应用程序，并且不具备实时定价分析或成本估算的功能。

AWS Pricing Calculator を使用すると、ユーザーは AWS のサービス構成をモデル化し、リソースをデプロイする前に詳細なコスト見積もりを生成できるため、新しいアプリケーションのコストを見積もる必要があるときにユーザーを誘導するのに最適なツールになります。
AWS がオンデマンド料金を使用していることは正確ですが、予測支出を計算するためのツールやメカニズムが提供されていないため、特定のアプリケーションの実際のコストを見積もることには役立ちません。Amazon QuickSight は、ビジネスデータからダッシュボードや視覚化を作成するためのサーバーレスビジネスインテリジェンスサービスであり、オンプレミスの支出を分析したり、AWS のコストを見積もったりするためのツールではありません。Amazon AppStream 2.0 は、ブラウザを通じてデスクトップ アプリケーションをユーザーに配信するフルマネージドのアプリケーション ストリーミング サービスですが、リアルタイムの価格分析やコスト見積もりの機能はありません。

---

## Question 44 · Domain 1

**EN** A company wants to build its new application workloads in the AWS Cloud instead of using on-premises resources. What expense can be reduced using the AWS Cloud?

**中** 一家公司希望在 AWS 云中构建新的应用程序工作负载，而不是使用本地资源。使用 AWS 云可以减少哪些费用？

**日本語** ある企業は、オンプレミスのリソースを使用するのではなく、AWS クラウドで新しいアプリケーションのワークロードを構築したいと考えています。AWS クラウドを使用するとどのような費用を削減できますか?

- **A.** The cost of writing custom-built Java or Node .js code
  - 编写定制 Java 或 Node.js 代码的成本
  - カスタムビルドの Java または Node .js コードを作成するコスト
- **B.** Penetration testing for security
  - 安全渗透测试
  - セキュリティのための侵入テスト
- **C.** Hardware required to support new applications
  - 支持新应用程序所需的硬件
  - 新しいアプリケーションをサポートするために必要なハードウェア
- **D.** Writing specific test cases for third-party applications
  - 为第三方应用程序编写特定的测试用例
  - サードパーティアプリケーション用の特定のテストケースを作成する

**答案 / Answer: `C`**

Moving workloads to AWS eliminates the capital expenditure required to purchase, install, rack, and cable physical servers and networking equipment for new applications, replacing it with pay-as-you-go consumption pricing.
The cost of writing custom application code in languages such as Java or Node.js remains unchanged when moving to the cloud, as software development is a people and process cost that is independent of whether the infrastructure is on-premises or hosted on AWS. Penetration testing costs for security remain with the application team whether on-premises or in the cloud, as the need to test application and infrastructure security exists regardless of where the workload runs, and AWS provides guidance for testing its own components separately. Writing test cases for third-party applications is a development and quality assurance task that remains consistent regardless of infrastructure location, as it is determined by the third-party software requirements rather than by the hosting environment.

将工作负载迁移到 AWS 消除了为新应用程序购买、安装、机架和布线物理服务器和网络设备所需的资本支出，取而代之的是按使用量付费的消费定价。
当迁移到云时，使用 Java 或 Node.js 等语言编写自定义应用程序代码的成本保持不变，因为软件开发是人员和流程成本，与基础设施是在本地还是托管在 AWS 上无关。无论是在本地还是在云中，安全渗透测试成本仍然由应用程序团队承担，因为无论工作负载在何处运行，都需要测试应用程序和基础设施安全性，并且 AWS 提供了单独测试其自身组件的指南。为第三方应用程序编写测试用例是一项开发和质量保证任务，无论基础设施位置如何，该任务都保持一致，因为它是由第三方软件需求而不是托管环境决定的。

ワークロードを AWS に移行すると、新しいアプリケーション用の物理サーバーやネットワーキング機器の購入、設置、ラック、ケーブル接続に必要な資本支出がなくなり、従量課金制の消費価格に置き換えられます。
Java や Node.js などの言語でカスタム アプリケーション コードを作成するコストは、クラウドに移行しても変わりません。ソフトウェア開発には、インフラストラクチャがオンプレミスか AWS でホストされているかに関係なく、人員とプロセスのコストがかかります。ワークロードが実行される場所に関係なく、アプリケーションとインフラストラクチャのセキュリティをテストする必要性が存在し、AWS は独自のコンポーネントを個別にテストするためのガイダンスを提供しているため、オンプレミスでもクラウドでも、セキュリティの侵入テストのコストはアプリケーション チームの負担となります。サードパーティ アプリケーションのテスト ケースの作成は、ホスティング環境ではなくサードパーティ ソフトウェア要件によって決定されるため、インフラストラクチャの場所に関係なく一貫した開発および品質保証タスクです。

---

## Question 45 · Domain 1

**EN** What is an AWS Cloud design best practice?

**中** 什么是 AWS 云设计最佳实践？

**日本語** AWS クラウド設計のベストプラクティスとは何ですか?

- **A.** Tight coupling of components
  - 组件紧密耦合
  - コンポーネントの密結合
- **B.** Single point of failure
  - 单点故障
  - 単一障害点
- **C.** High availability
  - 高可用性
  - 高可用性
- **D.** Overprovisioning of resources
  - 资源过度供给
  - リソースのオーバープロビジョニング

**答案 / Answer: `C`**

High availability is an AWS Cloud design best practice that ensures applications remain accessible through redundancy, multi-AZ deployments, and automatic failover mechanisms.
Tight coupling of components is an anti-pattern in cloud design, as it creates dependencies between services that cause cascading failures and contradicts the best practice of loose coupling. Single point of failure is an architectural weakness that cloud design best practices are specifically aimed at eliminating through redundancy and distributed deployments. Overprovisioning of resources is an on-premises habit that cloud adoption is intended to eliminate through pay-as-you-go pricing and elastic scaling rather than a best practice to follow.

高可用性是 AWS 云设计的最佳实践，可确保应用程序通过冗余、多可用区部署和自动故障转移机制保持可访问性。
组件的紧耦合是云设计中的反模式，因为它会在服务之间创建依赖关系，从而导致级联故障，并且与松耦合的最佳实践相矛盾。单点故障是一个架构弱点，云设计最佳实践专门旨在通过冗余和分布式部署来消除单点故障。资源过度配置是一种本地习惯，云采用旨在通过即用即付定价和弹性扩展来消除这种习惯，而不是遵循的最佳实践。

高可用性は AWS クラウド設計のベストプラクティスであり、冗長性、マルチ AZ 展開、自動フェイルオーバーメカニズムを通じてアプリケーションへのアクセスを確保します。
コンポーネントの密結合は、サービス間の依存関係を生み出し、連鎖的な障害を引き起こし、疎結合のベスト プラクティスに反するため、クラウド設計ではアンチパターンです。単一障害点はアーキテクチャ上の弱点であり、クラウド設計のベスト プラクティスでは、冗長性と分散展開を通じてこれを排除することを特に目的としています。リソースのオーバープロビジョニングはオンプレミスの習慣であり、クラウドの導入では従うべきベスト プラクティスではなく、従量課金制の価格設定と柔軟なスケーリングによって排除することを目的としています。

---

## Question 46 · Domain 2

**EN** Which of the following can a customer use to enable single sign-on (SSO) to the AWS Management Console?

**中** 客户可以使用以下哪项来启用 AWS 管理控制台的单点登录 (SSO)？

**日本語** 顧客が AWS マネジメント コンソールへのシングル サインオン (SSO) を有効にするために使用できるのは次のうちどれですか?

- **A.** Amazon Connect
  - 亚马逊连接
  - アマゾンコネクト
- **B.** AWS Directory Service
  - AWS 目录服务
  - AWS ディレクトリ サービス
- **C.** Amazon Pinpoint
  - 亚马逊精确定位
  - アマゾンピンポイント
- **D.** Amazon Rekognition
  - 亚马逊重新识别
  - アマゾンの認識

**答案 / Answer: `B`**

AWS Directory Service integrates with Microsoft Active Directory, enabling single sign-on to the AWS Management Console using existing corporate usernames and passwords without creating separate IAM users for each employee.
Amazon Connect is a cloud-based contact center service that handles customer interactions through voice and chat channels, and has no capability to enable corporate credential federation or single sign-on authentication to the AWS Management Console. Amazon Pinpoint is an outbound communications service for sending targeted messages via email, SMS, and push notifications to application users, and is a marketing and engagement service with no connection to SSO or corporate identity federation for console access. Amazon Rekognition is a machine learning service for analyzing images and videos to detect objects, faces, and scenes, and is a visual analysis service with no role in enabling corporate credential single sign-on.

AWS Directory Service 与 Microsoft Active Directory 集成，支持使用现有公司用户名和密码单点登录 AWS 管理控制台，而无需为每位员工创建单独的 IAM 用户。
Amazon Connect 是一项基于云的联络中心服务，通过语音和聊天渠道处理客户交互，并且无法启用企业凭证联合或对 AWS 管理控制台的单点登录身份验证。 Amazon Pinpoint 是一种出站通信服务，用于通过电子邮件、SMS 和推送通知向应用程序用户发送目标消息，并且是一种营销和互动服务，不连接到 SSO 或企业身份联合以进行控制台访问。 Amazon Rekognition 是一项机器学习服务，用于分析图像和视频以检测对象、人脸和场景，并且是一项视觉分析服务，不支持企业凭证单点登录。

AWS Directory Service は Microsoft Active Directory と統合されており、従業員ごとに個別の IAM ユーザーを作成しなくても、既存の企業ユーザー名とパスワードを使用して AWS マネジメントコンソールへのシングルサインオンが可能になります。
Amazon Connect は、音声およびチャット チャネルを通じて顧客との対話を処理するクラウドベースのコンタクト センター サービスですが、企業認証情報フェデレーションや AWS マネジメント コンソールへのシングル サインオン認証を有効にする機能はありません。Amazon Pinpoint は、電子メール、SMS、プッシュ通知を介してアプリケーション ユーザーに対象を絞ったメッセージを送信するためのアウトバウンド通信サービスであり、コンソール アクセスのための SSO やコーポレート ID フェデレーションに接続しないマーケティングおよびエンゲージメント サービスです。Amazon Rekognition は、画像やビデオを分析して物体、顔、シーンを検出するための機械学習サービスであり、企業の認証情報によるシングル サインオンを可能にする役割を持たない視覚分析サービスです。

---

## Question 47 · Domain 2

**EN** Which of the following is the responsibility of AWS?

**中** 以下哪项是 AWS 的责任？

**日本語** AWS の責任は次のうちどれですか?

- **A.** Setting up AWS Identity and Access Management (IAM) users and groups
  - 设置 AWS Identity and Access Management (IAM) 用户和组
  - AWS Identity and Access Management (IAM) ユーザーとグループのセットアップ
- **B.** Physically destroying storage media at end of life
  - 在存储介质寿命结束时对存储介质进行物理销毁
  - 寿命終了時にストレージメディアを物理的に破壊する
- **C.** Patching guest operating systems
  - 修补来宾操作系统
  - ゲスト OS にパッチを適用する
- **D.** Configuring security settings on Amazon EC2 instances
  - 在 Amazon EC2 实例上配置安全设置
  - Amazon EC2 インスタンスでのセキュリティ設定の構成

**答案 / Answer: `B`**

AWS is responsible for physically destroying storage media at end of life using industry-standard techniques to prevent data leakage, following secure decommissioning procedures as part of their data center operations under the shared responsibility model.
Setting up IAM users and groups is the customer's responsibility; customers define their own identity and access management structure including creating users, assigning them to groups, and attaching policies that control what each identity can access. Patching guest operating systems on EC2 instances is the customer's responsibility; AWS manages the underlying host hardware and hypervisor, but the operating system running inside the virtual machine must be patched and maintained by the customer. Configuring security settings on EC2 instances including firewall rules, operating system hardening, and application security configurations is the customer's responsibility as part of securing what they deploy and manage on AWS compute resources.

AWS 负责使用行业标准技术在生命周期结束时物理销毁存储介质，以防止数据泄漏，并遵循安全退役程序，作为共享责任模型下数据中心运营的一部分。
设置 IAM 用户和组是客户的责任；客户定义自己的身份和访问管理结构，包括创建用户、将其分配到组以及附加控制每个身份可以访问的内容的策略。修补 EC2 实例上的来宾操作系统是客户的责任； AWS 管理底层主机硬件和虚拟机管理程序，但虚拟机内运行的操作系统必须由客户修补和维护。在 EC2 实例上配置安全设置（包括防火墙规则、操作系统强化和应用程序安全配置）是客户的责任，作为保护他们在 AWS 计算资源上部署和管理的内容的一部分。

AWS は、責任共有モデルに基づくデータセンター運用の一環として安全な廃止手順に従い、データ漏洩を防ぐために業界標準の技術を使用して耐用年数が終了したときにストレージメディアを物理的に破壊する責任を負います。
IAM ユーザーとグループの設定はお客様の責任です。顧客は、ユーザーの作成、ユーザーのグループへの割り当て、各 ID がアクセスできる内容を制御するポリシーの適用など、独自の ID とアクセス管理構造を定義します。EC2 インスタンス上のゲスト オペレーティング システムにパッチを適用するのはお客様の責任です。AWS は基盤となるホスト ハードウェアとハイパーバイザーを管理しますが、仮想マシン内で実行されているオペレーティング システムには、お客様がパッチを適用して保守する必要があります。ファイアウォール ルール、オペレーティング システムの強化、アプリケーション セキュリティ構成など、EC2 インスタンスでのセキュリティ設定の構成は、AWS コンピューティング リソース上でデプロイおよび管理するものを保護する一環として、お客様の責任となります。

---

## Question 48 · Domain 4

**EN** AWS Budgets can be used to:

**中** AWS Budgets 可用于：

**日本語** AWS Budgets は次の目的で使用できます。

- **A.** Prevent a given user from creating a resource
  - 阻止给定用户创建资源
  - 特定のユーザーがリソースを作成できないようにする
- **B.** Send an alert when the utilization of Reserved Instances drops below a certain percentage
  - 当预留实例的利用率低于一定百分比时发送警报
  - リザーブドインスタンスの使用率が一定の割合を下回ったときにアラートを送信する
- **C.** Set resource limits in AWS accounts to prevent overspending
  - 在 AWS 账户中设置资源限制以防止超支
  - AWS アカウントにリソース制限を設定して過剰支出を防ぐ
- **D.** Split an AWS bill across multiple forms of payment
  - 将 AWS 账单拆分为多种付款方式
  - AWS の請求書を複数の支払い方法に分割する

**答案 / Answer: `B`**

AWS Budgets supports Reserved Instance utilization budgets that send alerts when the utilization of Reserved Instances drops below a defined percentage threshold, helping customers ensure they are getting value from their RI commitments.
Preventing a given user from creating a resource is an access control function achieved through IAM policies or Service Control Policies in AWS Organizations, not through AWS Budgets. AWS Budgets is an alerting and monitoring tool and cannot enforce hard limits or prevent resource creation, making setting resource limits to prevent overspending an incorrect description of its capabilities. Splitting an AWS bill across multiple forms of payment is a billing and payment method configuration handled through the AWS Billing Console, and is not a feature of AWS Budgets.

AWS Budgets 支持预留实例利用率预算，当预留实例的利用率低于定义的百分比阈值时，该预算会发送警报，帮助客户确保他们从 RI 承诺中获得价值。
阻止给定用户创建资源是通过 IAM 策略或 AWS Organizations 中的服务控制策略实现的访问控制功能，而不是通过 AWS Budgets。 AWS Budgets 是一种警报和监控工具，无法强制实施硬限制或阻止资源创建，因此设置资源限制以防止超支是对其功能的错误描述。将 AWS 账单拆分为多种付款方式是通过 AWS 账单控制台处理的账单和付款方式配置，而不是 AWS Budgets 的功能。

AWS Budgets は、リザーブド インスタンスの使用率が定義された割合しきい値を下回ったときにアラートを送信するリザーブド インスタンス使用率バジェットをサポートし、顧客が RI コミットメントから価値を確実に得られるように支援します。
特定のユーザーによるリソースの作成の防止は、AWS Budgets ではなく、IAM ポリシーまたは AWS Organizations のサービス コントロール ポリシーを通じて実現されるアクセス制御機能です。AWS Budgets はアラートおよび監視ツールであり、ハード リミットを強制したり、リソースの作成を阻止したりすることはできないため、機能の誤った説明で過剰な使用を防ぐためにリソース制限を設定する必要があります。AWS の請求書を複数の支払い形式に分割することは、AWS 請求コンソールを通じて処理される請求および支払い方法の設定であり、AWS Budgets の機能ではありません。

---

## Question 49 · Domain 2

**EN** A user is running an application on AWS and notices that one or more AWS-owned IP addresses is involved in a distributed denial-of-service (DDoS) attack. Who should the user contact FIRST about this situation?

**中** 用户正在 AWS 上运行应用程序，并注意到一个或多个 AWS 拥有的 IP 地址涉及分布式拒绝服务 (DDoS) 攻击。对于这种情况，用户应该首先联系谁？

**日本語** ユーザーは AWS でアプリケーションを実行しており、AWS が所有する 1 つ以上の IP アドレスが分散型サービス拒否 (DDoS) 攻撃に関与していることに気づきました。この状況について、ユーザーは最初に誰に連絡すればよいでしょうか?

- **A.** AWS Premium Support
  - AWS 高级支持
  - AWS プレミアムサポート
- **B.** AWS Technical Account Manager
  - AWS 技术客户经理
  - AWSテクニカルアカウントマネージャー
- **C.** AWS Solutions Architect
  - AWS 解决方案架构师
  - AWS ソリューションアーキテクト
- **D.** AWS Abuse team
  - AWS 滥用团队
  - AWS 悪用チーム

**答案 / Answer: `D`**

The AWS Abuse Team handles reports of AWS resources being used in malicious activities including DDoS attacks, and should be the first point of contact when AWS-owned IP addresses are identified as participating in an attack, as they can investigate and stop the misuse.
AWS Premium Support assists paying customers with technical issues and architectural guidance related to their own AWS environment, but is not the designated channel for reporting abuse originating from AWS IP addresses belonging to other accounts. The AWS Technical Account Manager is a support resource for Enterprise plan customers providing proactive guidance and operational reviews, but is not the appropriate contact for reporting external abuse incidents involving AWS infrastructure. AWS Solutions Architects help customers design architectures and optimize workloads, and are not the contact for reporting security incidents or abuse involving AWS infrastructure and IP addresses.

AWS 滥用团队负责处理有关 AWS 资源被用于恶意活动（包括 DDoS 攻击）的报告，并且应该是当 AWS 拥有的 IP 地址被识别为参与攻击时的第一联系人，因为他们可以调查并阻止滥用行为。
AWS Premium Support 帮助付费客户解决与其自己的 AWS 环境相关的技术问题和架构指导，但不是报告源自其他账户的 AWS IP 地址的滥用行为的指定渠道。 AWS 技术客户经理是为企业计划客户提供主动指导和运营审查的支持资源，但不是报告涉及 AWS 基础设施的外部滥用事件的适当联系人。 AWS 解决方案架构师帮助客户设计架构和优化工作负载，但不是报告涉及 AWS 基础设施和 IP 地址的安全事件或滥用的联系人。

AWS 不正使用チームは、AWS リソースが DDoS 攻撃などの悪意のある活動に使用されているという報告を処理します。また、AWS が所有する IP アドレスが攻撃に参加していると特定された場合、不正使用を調査して阻止できるため、最初の連絡窓口となります。
AWS プレミアムサポートは、有料の顧客に対し、独自の AWS 環境に関連する技術的な問題やアーキテクチャに関するガイダンスを提供しますが、他のアカウントに属する AWS IP アドレスに起因する不正行為を報告するための指定されたチャネルではありません。AWS テクニカル アカウント マネージャーは、エンタープライズ プランの顧客向けのサポート リソースであり、プロアクティブなガイダンスと運用レビューを提供しますが、AWS インフラストラクチャに関連する外部不正行為インシデントを報告するための適切な連絡先ではありません。AWS ソリューションアーキテクトは、顧客のアーキテクチャ設計とワークロードの最適化を支援しますが、AWS インフラストラクチャと IP アドレスに関連するセキュリティインシデントや不正行為を報告する窓口ではありません。

---

## Question 50 · Domain 3

**EN** A company has deployed several relational databases on Amazon EC2 instances. Every month the database software vendor releases new security patches that need to be applied to the databases. What is the MOST efficient way to apply the security patches?

**中** 某公司在 Amazon EC2 实例上部署了多个关系数据库。数据库软件供应商每个月都会发布需要应用于数据库的新安全补丁。应用安全补丁最有效的方法是什么？

**日本語** ある企業は、Amazon EC2 インスタンスに複数のリレーショナル データベースをデプロイしました。データベース ソフトウェア ベンダーは毎月、データベースに適用する必要がある新しいセキュリティ パッチをリリースします。セキュリティ パッチを適用する最も効率的な方法は何ですか?

- **A.** Connect to each database instance on a monthly basis and download and apply the necessary security patches from the vendor
  - 每月连接到每个数据库实例，并从供应商处下载并应用必要的安全补丁
  - 各データベース インスタンスに毎月接続し、ベンダーから必要なセキュリティ パッチをダウンロードして適用します。
- **B.** Enable automate patching for the instances using the Amazon RDS console
  - 使用 Amazon RDS 控制台为实例启用自动修补
  - Amazon RDS コンソールを使用してインスタンスの自動パッチ適用を有効にする
- **C.** In AWS Config, configure a rule for the instances and the required patch level
  - 在 AWS Config 中，配置实例的规则和所需的补丁级别
  - AWS Config で、インスタンスのルールと必要なパッチ レベルを設定します。
- **D.** Use AWS Systems Manager to automate database patching according to a schedule
  - 使用 AWS Systems Manager 根据计划自动修补数据库
  - AWS Systems Manager を使用して、スケジュールに従ってデータベースのパッチ適用を自動化する

**答案 / Answer: `D`**

AWS Systems Manager Patch Manager automates the process of patching managed EC2 instances with security updates on a defined schedule, eliminating the need for manual intervention each time a vendor releases new patches.
Connecting to each database instance individually on a monthly basis to download and apply patches manually is the least efficient approach, requiring significant administrative effort that scales poorly as the number of instances grows. Amazon RDS console patching applies to databases managed by the RDS service, and cannot be used to patch database software running on self-managed EC2 instances where the customer is responsible for the operating system and software. AWS Config is a configuration compliance and change tracking service that can assess whether instances meet a required patch level, but does not itself automate or apply patches to instances.

AWS Systems Manager Patch Manager 可按照定义的计划自动执行使用安全更新对托管 EC2 实例进行修补的过程，从而无需在供应商每次发布新补丁时进行手动干预。
每月单独连接到每个数据库实例以手动下载和应用补丁是效率最低的方法，需要大量的管理工作，并且随着实例数量的增长而扩展性很差。 Amazon RDS 控制台修补适用于由 RDS 服务管理的数据库，不能用于修补在客户负责操作系统和软件的自管理 EC2 实例上运行的数据库软件。 AWS Config 是一种配置合规性和更改跟踪服务，可以评估实例是否满足所需的补丁级别，但本身不会自动执行补丁或将补丁应用于实例。

AWS Systems Manager Patch Manager は、定義されたスケジュールに従ってマネージド EC2 インスタンスにセキュリティ更新プログラムをパッチ適用するプロセスを自動化し、ベンダーが新しいパッチをリリースするたびに手動で介入する必要がなくなります。
各データベース インスタンスに毎月個別に接続してパッチを手動でダウンロードして適用することは、最も効率の悪い方法であり、多大な管理労力が必要となり、インスタンスの数が増えるにつれて拡張性が低下します。Amazon RDS コンソールのパッチ適用は、RDS サービスによって管理されるデータベースに適用され、顧客がオペレーティング システムとソフトウェアに対して責任を負う自己管理の EC2 インスタンスで実行されているデータベース ソフトウェアにパッチを適用するために使用することはできません。AWS Config は、インスタンスが必要なパッチ レベルを満たしているかどうかを評価できる構成コンプライアンスおよび変更追跡サービスですが、それ自体はインスタンスへのパッチの自動化や適用は行いません。

---

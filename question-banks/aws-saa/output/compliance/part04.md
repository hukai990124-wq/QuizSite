# AWS SAA-C03 原创练习卷 · 第 04 份

> 题目 151–200 · 中英对照 · 来源：Ditectrev 原创题库（非真题 dump）

## Question 151

**EN** What will be the status of the snapshot until the snapshot is complete?

**中** 在快照完成之前快照的状态是什么？

- **A.** Running.
  - 跑步。
- **B.** Working.
  - 在职的。
- **C.** Progressing.
  - 不断进步。
- **D.** Pending.
  - 待办的。

**正确答案 / Answer: `D`**


---

## Question 152

**EN** A customer is running a multi-tier web application farm in a virtual private cloud (VPC) that is not connected to their corporate network. They are connecting to the VPC over the Internet to manage all of their Amazon EC2 instances running in both the public and private subnets. They have only authorized the bastion-security-group with Microsoft Remote Desktop Protocol (RDP) access to the application instance security groups, but the company wants to further limit administrative access to all of the instances in the VPC. Which of the following Bastion deployment scenarios will meet this requirement?

**中** 客户正在未连接到其公司网络的虚拟私有云 (VPC) 中运行多层 Web 应用程序场。他们通过 Internet 连接到 VPC，以管理在公共子网和私有子网中运行的所有 Amazon EC2 实例。他们仅授权具有 Microsoft 远程桌面协议 (RDP) 的 bastion-security-group 访问应用程序实例安全组，但该公司希望进一步限制对 VPC 中所有实例的管理访问。以下哪些 Bastion 部署场景可以满足此要求？

- **A.** Deploy a Windows Bastion host on the corporate network that has RDP access to all instances in the VP.
  - 在企业网络上部署一台 Windows Bastion 主机，该主机对 VP 中的所有实例具有 RDP 访问权限。
- **B.** Deploy a Windows Bastion host with an Elastic IP address in the public subnet and allow SSH access to the bastion from anywhere.
  - 在公有子网中部署具有弹性 IP 地址的 Windows Bastion 主机，并允许从任何地方通过 SSH 访问堡垒。
- **C.** Deploy a Windows Bastion host with an Elastic IP address in the private subnet, and restrict RDP access to the bastion from only the corporate public IP addresses.
  - 在私有子网中部署具有弹性 IP 地址的 Windows Bastion 主机，并限制仅从公司公共 IP 地址对堡垒进行 RDP 访问。
- **D.** Deploy a Windows Bastion host with an auto-assigned Public IP address in the public subnet, and allow RDP access to the bastion from only the corporate public IP addresses.
  - 在公共子网中部署具有自动分配公共 IP 地址的 Windows Bastion 主机，并仅允许从公司公共 IP 地址通过 RDP 访问堡垒。

**正确答案 / Answer: `C`**


---

## Question 153

**EN** True or False: Common points of failures like generators and cooling equipment are shared across Availability Zones.

**中** 对或错：发电机和冷却设备等常见故障点在可用区之间共享。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `B`**


---

## Question 154

**EN** A company is building a voting system for a popular TV show. Viewers will watch the performances then visit the show's website to vote for their favorite performer. It is expected that in a short period of time after the show has finished the site will receive millions of visitors. The visitors will first login to the site using their Amazon.com credentials and then submit their vote. After the voting is completed the page will display the vote totals. The company needs to build the site such that can handle the rapid influx of traffic while maintaining good performance but also wants to keep costs to a minimum. Which of the design patterns below should they use?

**中** 一家公司正在为热门电视节目构建投票系统。观众将观看表演，然后访问节目网站投票选出他们最喜欢的表演者。预计展会结束后的短时间内，该网站将迎来数百万访问者。访问者将首先使用他们的 Amazon.com 凭据登录该网站，然后提交投票。投票结束后，页面会显示投票总数。该公司需要构建能够处理快速涌入的流量的网站，同时保持良好的性能，但也希望将成本降至最低。他们应该使用以下哪种设计模式？

- **A.** Use CloudFront and an Elastic Load balancer in front of an auto-scaled set of web servers. The web servers will first call the Login With Amazon service to authenticate the user, then process the user's vote and store the result into a multi-AZ Relational Database Service instance.
  - 在一组自动扩展的 Web 服务器前使用 CloudFront 和 Elastic Load Balancer。 Web 服务器将首先调用 Login With Amazon 服务对用户进行身份验证，然后处理用户的投票并将结果存储到多可用区关系数据库服务实例中。
- **B.** Use CloudFront and the static website hosting feature of S3 with the Javascript SDK to call the Login With Amazon service to authenticate the user. Use IAM Roles to gain permissions to a DynamoDB table to store the user's vote.
  - 使用 CloudFront 和 S3 的静态网站托管功能以及 Javascript SDK 来调用 Login With Amazon 服务来对用户进行身份验证。使用 IAM 角色获取 DynamoDB 表的权限以存储用户的投票。
- **C.** Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers. The web servers will first call the Login with Amazon service to authenticate the user. The web servers will process the user's vote and store the result into a DynamoDB table using IAM Roles for EC2 instances to gain permissions to the DynamoDB table.
  - 在一组自动扩展的 Web 服务器前使用 CloudFront 和 Elastic Load Balancer。 Web 服务器将首先调用 Login with Amazon 服务来对用户进行身份验证。 Web 服务器将处理用户的投票，并使用 EC2 实例的 IAM 角色将结果存储到 DynamoDB 表中，以获得 DynamoDB 表的权限。
- **D.** Use CloudFront and an Elastic Load Balancer in front of an auto-scaled set of web servers. The web servers will first call the Login with Amazon service to authenticate the user. The web servers will process the user's vote and store the result into an SQS queue using IAM Roles for EC2 Instances to gain permissions to the SQS queue. A set of application servers will then retrieve the items from the queue and store the result into a DynamoDB table.
  - 在一组自动扩展的 Web 服务器前使用 CloudFront 和 Elastic Load Balancer。 Web 服务器将首先调用 Login with Amazon 服务来对用户进行身份验证。 Web 服务器将处理用户的投票，并使用 EC2 实例的 IAM 角色将结果存储到 SQS 队列中，以获得 SQS 队列的权限。然后，一组应用程序服务器将从队列中检索项目并将结果存储到 DynamoDB 表中。

**正确答案 / Answer: `D`**


---

## Question 155

**EN** You are designing a photo sharing mobile app. The application will store all pictures in a single Amazon S3 bucket. Users will upload pictures from their mobile device directly to Amazon S3 and will be able to view and download their own pictures directly from Amazon S3. You want to configure security to handle potentially millions of users in the most secure manner possible. What should your server-side application do when a new user registers on the photo sharing mobile application?

**中** 您正在设计一个照片共享移动应用程序。该应用程序会将所有图片存储在单个 Amazon S3 存储桶中。用户将移动设备上的图片直接上传到 Amazon S3，并且可以直接从 Amazon S3 查看和下载自己的图片。您希望配置安全性以尽可能最安全的方式处理潜在的数百万用户。当新用户在照片共享移动应用程序上注册时，您的服务器端应用程序应该做什么？

- **A.** Create an IAM user. Update the bucket policy with appropriate permissions for the IAM user. Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.
  - 创建 IAM 用户。使用 IAM 用户的适当权限更新存储桶策略。为 IAM 用户生成访问密钥和秘密密钥，将它们存储在移动应用程序中并使用这些凭证访问 Amazon S3。
- **B.** Create an IAM user. Assign appropriate permissions to the IAM user. Generate an access key and secret key for the IAM user, store them in the mobile app and use these credentials to access Amazon S3.
  - 创建 IAM 用户。为 IAM 用户分配适当的权限。为 IAM 用户生成访问密钥和秘密密钥，将它们存储在移动应用程序中并使用这些凭证访问 Amazon S3。
- **C.** Create a set of long-term credentials using AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app and use them to access Amazon S3.
  - 使用具有适当权限的 AWS Security Token Service 创建一组长期凭证。将这些凭据存储在移动应用程序中并使用它们来访问 Amazon S3。
- **D.** Record the user's information in Amazon RDS and create a role in IAM with appropriate permissions. When the user uses their mobile app, create temporary credentials using the AWS Security Token Service `AssumeRole` function. Store these credentials in the mobile app's memory and use them to access Amazon S3. Generate new credentials the next time the user runs the mobile app.
  - 在 Amazon RDS 中记录用户的信息，并在 IAM 中创建具有适当权限的角色。当用户使用其移动应用程序时，使用 AWS Security Token Service“AssumeRole”函数创建临时凭证。将这些凭据存储在移动应用程序的内存中，并使用它们来访问 Amazon S3。用户下次运行移动应用程序时生成新凭据。
- **E.** Record the user's information in Amazon DynamoDB. When the user uses their mobile app, create temporary credentials using AWS Security Token Service with appropriate permissions. Store these credentials in the mobile app's memory and use them to access Amazon S3. Generate new credentials the next time the user runs the mobile app.
  - 在 Amazon DynamoDB 中记录用户的信息。当用户使用其移动应用程序时，使用具有适当权限的 AWS Security Token Service 创建临时凭证。将这些凭据存储在移动应用程序的内存中，并使用它们来访问 Amazon S3。用户下次运行移动应用程序时生成新凭据。

**正确答案 / Answer: `D`**


---

## Question 156

**EN** Is there a limit to how many groups a user can be in?

**中** 一个用户可以加入的组数是否有限制？

- **A.** Yes for all users.
  - 对于所有用户来说是的。
- **B.** Yes for all users except root.
  - 对于除 root 之外的所有用户来说是的。
- **C.** No.
  - 不。
- **D.** Yes unless special permission granted.
  - 是的，除非获得特别许可。

**正确答案 / Answer: `A`**


---

## Question 157

**EN** Which is the default region in AWS?

**中** AWS 的默认区域是哪个？

- **A.** eu-west-1.
  - 欧盟-西-1。
- **B.** us-east-1.
  - 美国东部 1。
- **C.** us-east-2.
  - 美国东部 2。
- **D.** ap-southeast-1.
  - ap-东南-1。

**正确答案 / Answer: `B`**


---

## Question 158

**EN** Your company hosts a social media site supporting users in multiple countries. You have been asked to provide a highly available design for the application that leverages multiple regions for the most recently accessed content and latency sensitive portions of the web site. The most latency sensitive component of the application involves reading user preferences to support web site personalization and ad selection. In addition to running your application in multiple regions, which option will support this application's requirements?

**中** 您的公司托管一个支持多个国家/地区用户的社交媒体网站。您被要求为应用程序提供高度可用的设计，该设计利用多个区域来存储最近访问的内容和网站的延迟敏感部分。应用程序中对延迟最敏感的组件涉及读取用户偏好以支持网站个性化和广告选择。除了在多个区域运行您的应用程序之外，哪个选项将支持该应用程序的要求？

- **A.** Serve user content from S3. CloudFront and use Route 53 latency-based routing between ELBs in each region. Retrieve user preferences from a local DynamoDB table in each region and leverage SQS to capture changes to user preferences with SQS workers for propagating updates to each table.
  - 从 S3 提供用户内容。 CloudFront 并在每个区域的 ELB 之间使用 Route 53 基于延迟的路由。从每个区域的本地 DynamoDB 表中检索用户首选项，并利用 SQS 捕获用户首选项的更改，并通过 SQS 工作线程将更新传播到每个表。
- **B.** Use the S3 Copy API to copy recently accessed content to multiple regions and serve user content from S3. CloudFront with dynamic content and an ELB in each region. Retrieve user preferences from an ElastiCache cluster in each region and leverage SNS notifications to propagate user preference changes to a worker node in each region.
  - 使用 S3 复制 API 将最近访问的内容复制到多个区域并从 S3 提供用户内容。 CloudFront 在每个区域具有动态内容和 ELB。从每个区域中的 ElastiCache 集群检索用户首选项，并利用 SNS 通知将用户首选项更改传播到每个区域中的工作节点。
- **C.** Use the S3 Copy API to copy recently accessed content to multiple regions and serve user content from S3 CloudFront and Route 53 latency-based routing Between ELBs in each region. Retrieve user preferences from a DynamoDB table and leverage SQS to capture changes to user preferences with SQS workers for propagating DynamoDB updates.
  - 使用 S3 Copy API 将最近访问的内容复制到多个区域，并在每个区域的 ELB 之间从 S3 CloudFront 和 Route 53 基于延迟的路由提供用户内容。从 DynamoDB 表中检索用户首选项，并利用 SQS 通过 SQS 工作线程捕获用户首选项的更改，以传播 DynamoDB 更新。
- **D.** Serve user content from S3. CloudFront with dynamic content, and an ELB in each region. Retrieve user preferences from an ElastiCache cluster in each region and leverage Simple Workflow (SWF) to manage the propagation of user preferences from a centralized DB to each ElastiCache cluster.
  - 从 S3 提供用户内容。具有动态内容的 CloudFront，并且每个区域都有一个 ELB。从每个区域的 ElastiCache 集群检索用户首选项，并利用简单工作流 (SWF) 管理用户首选项从集中式数据库到每个 ElastiCache 集群的传播。

**正确答案 / Answer: `A`**


---

## Question 159

**EN** A [...] is a document that provides a formal statement of one or more permissions.

**中** [...] 是提供一个或多个权限的正式声明的文档。

- **A.** policy.
  - 政策。
- **B.** permission.
  - 允许。
- **C.** role.
  - 角色。
- **D.** resource.
  - 资源。

**正确答案 / Answer: `A`**


---

## Question 160

**EN** A company wants to implement their website in a virtual private cloud (VPC). The web tier will use an Auto Scaling group across multiple Availability Zones (AZs). The database will use Multi-AZ RDS MySQL and should not be publicly accessible. What is the minimum number of subnets that need to be configured in the VPC?

**中** 一家公司希望在虚拟私有云 (VPC) 中实施其网站。 Web 层将使用跨多个可用区 (AZ) 的 Auto Scaling 组。该数据库将使用多可用区 RDS MySQL，并且不应公开访问。 VPC 中至少需要配置多少个子网？

- **A.** 1.
  - 1.
- **B.** 2.
  - 2.
- **C.** 3.
  - 3.
- **D.** 4.
  - 4.

**正确答案 / Answer: `D`**


---

## Question 161

**EN** Is there a limit to the number of groups you can have?

**中** 您可以加入的群组数量有限制吗？

- **A.** Yes for all users except root.
  - 对于除 root 之外的所有用户来说是的。
- **B.** No.
  - 不。
- **C.** Yes unless special permission granted.
  - 是的，除非获得特别许可。
- **D.** Yes for all users.
  - 对于所有用户来说是的。

**正确答案 / Answer: `D`**


---

## Question 162

**EN** True or False: Automated backups are enabled by default for a new DB Instance

**中** 对或错：默认情况下为新数据库实例启用自动备份

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `A`**


---

## Question 163

**EN** What is one key difference between an Amazon EBS-backed and an instance-store backed instance?

**中** Amazon EBS 支持的实例和实例存储支持的实例之间的一个主要区别是什么？

- **A.** Amazon EBS-backed instances can be stopped and restarted.
  - Amazon EBS 支持的实例可以停止和重新启动。
- **B.** Instance-store backed instances can be stopped and restarted.
  - 实例存储支持的实例可以停止和重新启动。
- **C.** Auto scaling requires using Amazon EBS-backed instances.
  - 自动扩展需要使用 Amazon EBS 支持的实例。
- **D.** Virtual Private Cloud requires EBS backed instances.
  - 虚拟私有云需要 EBS 支持的实例。

**正确答案 / Answer: `A`**


---

## Question 164

**EN** A major customer has asked you to set up his AWS infrastructure so that it will be easy to recover in the case of a disaster of some sort. Which of the following statements is true of Amazon EC2 security groups?

**中** 一位主要客户要求您设置他的 AWS 基础设施，以便在发生某种灾难时能够轻松恢复。关于 Amazon EC2 安全组，以下哪项陈述是正确的？

- **A.** Create and maintain AMIs of key servers where fast recovery is required.
  - 创建和维护需要快速恢复的关键服务器的 AMI。
- **B.** Regularly run your servers, test them, and apply any software updates and configuration changes.
  - 定期运行您的服务器、测试它们并应用所有软件更新和配置更改。
- **C.** Ensure that you have all supporting custom software packages available in AWS.
  - 确保您在 AWS 中拥有所有可用的支持自定义软件包。
- **D.** All items listed here are important when thinking about disaster recovery.
  - 在考虑灾难恢复时，此处列出的所有项目都很重要。

**正确答案 / Answer: `D`**


---

## Question 165

**EN** Select a true statement about Amazon EC2 Security Groups (EC2-Classic).

**中** 选择有关 Amazon EC2 安全组 (EC2-Classic) 的正确陈述。

- **A.** After you launch an instance in EC2-Classic, you can't change its security groups.
  - 在 EC2-Classic 中启动实例后，您无法更改其安全组。
- **B.** After you launch an instance in EC2-Classic, you can change its security groups only once.
  - 在 EC2-Classic 中启动实例后，您只能更改其安全组一次。
- **C.** After you launch an instance in EC2-Classic, you can only add rules to a security group.
  - 在 EC2-Classic 中启动实例后，您只能向安全组添加规则。
- **D.** After you launch an instance in EC2-Classic, you cannot add or remove rules from a security group.
  - 在 EC2-Classic 中启动实例后，您无法在安全组中添加或删除规则。

**正确答案 / Answer: `A`**


---

## Question 166

**EN** To view information about an Amazon EBS volume, open the Amazon EC2 console at <https://console.aws.amazon.com/ec2/>, click in the Navigation panel.

**中** 要查看有关 Amazon EBS 卷的信息，请打开位于 <https://console.aws.amazon.com/ec2/> 的 Amazon EC2 控制台，然后单击导航面板中的。

- **A.** EBS.
  - 电子束。
- **B.** Describe.
  - 描述。
- **C.** Details.
  - 细节。
- **D.** Volumes.
  - 卷。

**正确答案 / Answer: `D`**


---

## Question 167

**EN** True or False: Provisioned IOPS Costs - you are charged for the IOPS and storage whether or not you use them in a given month.

**中** 对或错：预配置 IOPS 成本 - 无论您在给定月份是否使用 IOPS 和存储，您都需要支付这些费用。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `A`**


---

## Question 168

**EN** You have an EC2 Security Group with several running EC2 instances. You change the Security Group rules to allow inbound traffic on a new port and protocol, and launch several new instances in the same Security Group. The new rules apply:

**中** 您有一个 EC2 安全组，其中包含多个正在运行的 EC2 实例。您更改安全组规则以允许新端口和协议上的入站流量，并在同一安全组中启动多个新实例。新规则适用：

- **A.** Immediately to all instances in the security group.
  - 立即到安全组中的所有实例。
- **B.** Immediately to the new instances only.
  - 仅立即适用于新实例。
- **C.** Immediately to the new instances, but old instances must be stopped and restarted before the new rules apply.
  - 立即适用于新实例，但在应用新规则之前必须停止并重新启动旧实例。
- **D.** To all instances, but it may take several minutes for old instances to see the changes.
  - 对于所有实例，但旧实例可能需要几分钟才能看到更改。

**正确答案 / Answer: `A`**


---

## Question 169

**EN** An edge location refers to which Amazon Web Service?

**中** 边缘站点是指哪个 Amazon Web Service？

- **A.** An edge location is referred to the network configured within a Zone or Region.
  - 边缘位置是指在区域或区域内配置的网络。
- **B.** An edge location is an AWS Region.
  - 边缘站点是一个 AWS 区域。
- **C.** An edge location is the location of the data center used for Amazon CloudFront.
  - 边缘位置是用于 Amazon CloudFront 的数据中心的位置。
- **D.** An edge location is a Zone within an AWS Region.
  - 边缘站点是 AWS 区域内的一个区域。

**正确答案 / Answer: `C`**


---

## Question 170

**EN** If I want to run a database in an Amazon instance, which is the most recommended Amazon storage option?

**中** 如果我想在 Amazon 实例中运行数据库，最推荐的 Amazon 存储选项是什么？

- **A.** Amazon Instance Storage.
  - 亚马逊实例存储。
- **B.** Amazon EBS.
  - Amazon EBS。
- **C.** You can't run a database inside an Amazon instance.
  - 您无法在 Amazon 实例内运行数据库。
- **D.** Amazon S3.
  - Amazon S3。

**正确答案 / Answer: `B`**


---

## Question 171

**EN** A customer is leveraging Amazon Simple Storage Service in eu-west-1 to store static content for a web-based property. The customer is storing objects using the Standard Storage class. Where are the customers objects replicated?

**中** 客户正在利用 eu-west-1 中的 Amazon Simple Storage Service 来存储基于 Web 的资产的静态内容。客户使用标准存储类存储对象。客户对象复制到哪里？

- **A.** A single facility in eu-west-1 and a single facility in eu-central-1.
  - eu-west-1 中的单个设施和 eu-central-1 中的单个设施。
- **B.** A single facility in eu-west-1 and a single facility in us-east-1.
  - eu-west-1 中的单个设施和 us-east-1 中的单个设施。
- **C.** Multiple facilities in eu-west-1.
  - eu-west-1 内有多个设施。
- **D.** A single facility in eu-west-1.
  - eu-west-1 中的单个设施。

**正确答案 / Answer: `C`**


---

## Question 172

**EN** You have set up an S3 bucket with a number of images in it and you have decided that you want anybody to be able to access these images, even anonymous users. To accomplish this you create a bucket policy. You will need to use an Amazon S3 bucket policy that specifies a [...] in the principal element, which means anyone can access the bucket.

**中** 您已经设置了一个包含许多图像的 S3 存储桶，并且您决定希望任何人都能够访问这些图像，甚至是匿名用户。为此，您需要创建存储桶策略。您将需要使用 Amazon S3 存储桶策略，该策略在主体元素中指定 [...]，这意味着任何人都可以访问该存储桶。

- **A.** hash tag (#).
  - 井号 （＃）。
- **B.** anonymous user.
  - 匿名用户。
- **C.** wildcard (*).
  - 通配符 (*)。
- **D.** S3 user.
  - S3 用户。

**正确答案 / Answer: `C`**


---

## Question 173

**EN** You try to connect via SSH to a newly created Amazon EC2 instance and get one of the following error messages: 'Network error: Connection timed out' or 'Error connecting to [instance], reason: -> Connection timed out: connect,' You have confirmed that the network and security group rules are configured correctly and the instance is passing status checks. What steps should you take to identify the source of the behavior? (Choose 2 answers)

**中** 您尝试通过 SSH 连接到新创建的 Amazon EC2 实例，并收到以下错误消息之一：“网络错误：连接超时”或“连接到 [实例] 时出错，原因：-> 连接超时：连接”您已确认网络和安全组规则配置正确，并且实例正在通过状态检查。您应该采取哪些步骤来识别行为的根源？ （选择 2 个答案）

- **A.** Verify that the private key file corresponds to the Amazon EC2 key pair assigned at launch.
  - 验证私钥文件是否与启动时分配的 Amazon EC2 密钥对相对应。
- **B.** Verify that your IAM user policy has permission to launch Amazon EC2 instances.
  - 验证您的 IAM 用户策略是否有权启动 Amazon EC2 实例。
- **C.** Verify that you are connecting with the appropriate user name for your AMI.
  - 验证您是否使用适合 AMI 的用户名进行连接。
- **D.** Verify that the Amazon EC2 Instance was launched with the proper IAM role.
  - 验证是否使用正确的 IAM 角色启动了 Amazon EC2 实例。
- **E.** Verify that your federation trust to AWS has been established.
  - 验证您是否已建立对 AWS 的联合信任。

**正确答案 / Answer: `A, C`**


---

## Question 174

**EN** An Auto-Scaling group spans 3 AZs and currently has 4 running EC2 instances. When Auto Scaling needs to terminate an EC2 instance by default, AutoScaling will: (Choose 2 answers)

**中** Auto-Scaling 组跨越 3 个可用区，当前有 4 个正在运行的 EC2 实例。当 Auto Scaling 默认需要终止 EC2 实例时，AutoScaling 将：（选择 2 个答案）

- **A.** Allow at least five minutes for Windows/Linux shutdown scripts to complete, before terminating the instance.
  - 在终止实例之前，至少等待五分钟让 Windows/Linux 关闭脚本完成。
- **B.** Terminate the instance with the least active network connections. If multiple instances meet this criterion, one will be randomly selected.
  - 终止活动网络连接最少的实例。如果多个实例满足此条件，则会随机选择一个。
- **C.** Send an SNS notification, if configured to do so.
  - 发送 SNS 通知（如果已配置）。
- **D.** Terminate an instance in the AZ which currently has 2 running EC2 instances.
  - 终止可用区中当前有 2 个正在运行的 EC2 实例的实例。
- **E.** Randomly select one of the 3 AZs, and then terminate an instance in that A.
  - 随机选择 3 个 AZ 之一，然后终止该 A 中的一个实例。

**正确答案 / Answer: `C, D`**


---

## Question 175

**EN** A photo-sharing service stores pictures in Amazon Simple Storage Service (S3) and allows application sign-in using an OpenID Connect-compatible identity provider. Which AWS Security Token Service approach to temporary access should you use for the Amazon S3 operations?

**中** 照片共享服务将图片存储在 Amazon Simple Storage Service (S3) 中，并允许应用程序使用与 OpenID Connect 兼容的身份提供商登录。您应该对 Amazon S3 操作使用哪种 AWS Security Token Service 临时访问方法？

- **A.** SAML-based Identity Federation.
  - 基于 SAML 的身份联合。
- **B.** Cross-Account Access.
  - 跨账户访问。
- **C.** AWS Identity and Access Management roles.
  - AWS 身份和访问管理角色。
- **D.** Web Identity Federation.
  - 网络身份联合。

**正确答案 / Answer: `D`**


---

## Question 176

**EN** What is the maximum key length of a tag?

**中** 标签的最大密钥长度是多少？

- **A.** 512 Unicode characters.
  - 512 个 Unicode 字符。
- **B.** 64 Unicode characters.
  - 64 个 Unicode 字符。
- **C.** 256 Unicode characters.
  - 256 个 Unicode 字符。
- **D.** 128 Unicode characters.
  - 128 个 Unicode 字符。

**正确答案 / Answer: `D`**


---

## Question 177

**EN** Does Amazon RDS allow direct host access via Telnet, Secure Shell (SSH), or Windows Remote Desktop Connection?

**中** Amazon RDS 是否允许通过 Telnet、Secure Shell (SSH) 或 Windows 远程桌面连接直接进行主机访问？

- **A.** Yes.
  - 是的。
- **B.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 178

**EN** A user wants to achieve High Availability with PostgreSQL DB. Which of the below mentioned functionalities helps achieve HA?

**中** 用户希望使用 PostgreSQL DB 实现高可用性。下面提到的哪些功能有助于实现 HA？

- **A.** Multi-AZ.
  - 多可用区。
- **B.** Read Replica.
  - 阅读副本。
- **C.** Multi region.
  - 多区域。
- **D.** PostgreSQL does not support HA.
  - PostgreSQL 不支持 HA。

**正确答案 / Answer: `A`**


---

## Question 179

**EN** Are penetration tests allowed as long as they are limited to the customer's instances?

**中** 只要渗透测试仅限于客户的实例，是否就允许进行？

- **A.** Yes, they are allowed but only for selected regions.
  - 是的，它们是允许的，但仅限于选定的地区。
- **B.** No, they are never allowed.
  - 不，他们永远不被允许。
- **C.** Yes, they are allowed without any permission.
  - 是的，他们无需任何许可即可被允许。
- **D.** Yes, they are allowed but only with approval.
  - 是的，它们是允许的，但必须经过批准。

**正确答案 / Answer: `D`**


---

## Question 180

**EN** You are building a system to distribute confidential documents to employees. Using CloudFront, what method could be used to serve content that is stored in S3, but not publically accessible from S3 directly?

**中** 您正在构建一个向员工分发机密文件的系统。使用 CloudFront，可以使用什么方法来提供存储在 S3 中但无法直接从 S3 公开访问的内容？

- **A.** Add the CloudFront account security group 'amazon-cf/amazon-cf-sg' to the appropriate S3 bucket policy.
  - 将 CloudFront 帐户安全组“amazon-cf/amazon-cf-sg”添加到相应的 S3 存储桶策略。
- **B.** Create a S3 bucket policy that lists the CloudFront distribution ID as the Principal and the target bucket as the Amazon Resource Name (ARN).
  - 创建一个 S3 存储桶策略，将 CloudFront 分配 ID 列为主体，将目标存储桶列为 Amazon 资源名称 (ARN)。
- **C.** Create an Identity and Access Management (IAM) User for CloudFront and grant access to the objects in your S3 bucket to that IAM User.
  - 为 CloudFront 创建身份和访问管理 (IAM) 用户，并向该 IAM 用户授予对 S3 存储桶中对象的访问权限。
- **D.** Create an Origin Access Identity (OAI) for CloudFront and grant access to the objects in your S3 bucket to that OA.
  - 为 CloudFront 创建源访问身份 (OAI)，并向该 OA 授予对 S3 存储桶中对象的访问权限。

**正确答案 / Answer: `D`**


---

## Question 181

**EN** You require the ability to analyze a large amount of data, which is stored on Amazon S3 using Amazon Elastic MapReduce. You are using the cc2 8x large Instance type, whose CPUs are mostly idle during processing. Which of the below would be the most cost efficient way to reduce the runtime of the job?

**中** 您需要能够使用 Amazon Elastic MapReduce 分析存储在 Amazon S3 上的大量数据。您使用的是 cc2 8x 大型实例类型，其 CPU 在处理过程中大部分处于空闲状态。以下哪一项是减少作业运行时间的最具成本效益的方法？

- **A.** Create more smaller flies on Amazon S3.
  - 在 Amazon S3 上创建更多较小的苍蝇。
- **B.** Add additional cc2 8x large instances by introducing a task group.
  - 通过引入任务组来添加额外的 cc2 8x 大型实例。
- **C.** Use smaller instances that have higher aggregate 1/0 performance.
  - 使用具有更高聚合 1/0 性能的较小实例。
- **D.** Create fewer, larger fi les on Amazon S3.
  - 在 Amazon S3 上创建更少、更大的文件。

**正确答案 / Answer: `C`**


---

## Question 182

**EN** What is the name of licensing model in which I can use your existing Oracle Database licenses to run Oracle deployments on Amazon RDS?

**中** 我可以使用您现有的 Oracle 数据库许可证在 Amazon RDS 上运行 Oracle 部署的许可模型的名称是什么？

- **A.** Bring Your Own License.
  - 带上您自己的许可证。
- **B.** Role Bases License.
  - 角色基础许可证。
- **C.** Enterprise License.
  - 企业许可证。
- **D.** License Included.
  - 包含许可证。

**正确答案 / Answer: `A`**


---

## Question 183

**EN** Which of the following statements are true about Amazon Route 53 resource records? (Choose 2 answers)

**中** 以下关于 Amazon Route 53 资源记录的哪些说法是正确的？ （选择 2 个答案）

- **A.** An Alias record can map one DNS name to another Amazon Route 53 DNS name.
  - 别名记录可以将一个 DNS 名称映射到另一个 Amazon Route 53 DNS 名称。
- **B.** A CNAME record can be created for your zone apex.
  - 可以为您的区域顶点创建 CNAME 记录。
- **C.** An Amazon Route 53 CNAME record can point to any DNS record hosted anywhere.
  - Amazon Route 53 CNAME 记录可以指向任何地方托管的任何 DNS 记录。
- **D.** TTL can be set for an Alias record in Amazon Route 53.
  - 可以为 Amazon Route 53 中的别名记录设置 TTL。
- **E.** An Amazon Route 53 Alias record can point to any DNS record hosted anywhere.
  - Amazon Route 53 别名记录可以指向任何地方托管的任何 DNS 记录。

**正确答案 / Answer: `A, C`**


---

## Question 184

**EN** Do you need to shutdown your EC2 instance when you create a snapshot of EBS volumes that serve as root devices?

**中** 当您创建用作根设备的 EBS 卷的快照时，是否需要关闭 EC2 实例？

- **A.** No, you only need to shutdown an instance before deleting it.
  - 不需要，您只需在删除实例之前将其关闭即可。
- **B.** Yes.
  - 是的。
- **C.** No, the snapshot would turn off your instance automatically.
  - 不，快照会自动关闭您的实例。
- **D.** No.
  - 不。

**正确答案 / Answer: `B`**


---

## Question 185

**EN** Can I initiate a 'forced failover' for my Oracle Multi-AZ DB Instance deployment?

**中** 我可以为我的 Oracle 多可用区数据库实例部署启动“强制故障转移”吗？

- **A.** Yes.
  - 是的。
- **B.** Only in certain regions.
  - 仅在某些地区。
- **C.** Only in VPC.
  - 仅在 VPC 中。
- **D.** No.
  - 不。

**正确答案 / Answer: `A`**


---

## Question 186

**EN** Amazon RDS provides high availability and failover support for DB instances using [...].

**中** Amazon RDS 使用 [...] 为数据库实例提供高可用性和故障转移支持。

- **A.** customized deployments.
  - 定制部署。
- **B.** AppStream customizations.
  - AppStream 自定义。
- **C.** log events.
  - 记录事件。
- **D.** Multi-AZ deployments.
  - 多可用区部署。

**正确答案 / Answer: `D`**


---

## Question 187

**EN** True or False: Amazon EC2 has no Amazon Resource Names (ARNs) because you can't specify a particular Amazon EC2 resource in an IAM policy.

**中** 对或错：Amazon EC2 没有 Amazon 资源名称 (ARN)，因为您无法在 IAM 策略中指定特定的 Amazon EC2 资源。

- **A.** True.
  - 真的。
- **B.** False.
  - 错误的。

**正确答案 / Answer: `A`**


---

## Question 188

**EN** A major client who has been spending a lot of money on his internet service provider asks you to set up an AWS Direct Connection to try and save him some money. You know he needs high-speed connectivity. Which connection port speeds are available on AWS Direct Connect?

**中** 一位在互联网服务提供商上花费了大量资金的大客户要求您设置 AWS Direct Connection 来尝试为他节省一些钱。您知道他需要高速连接。 AWS Direct Connect 上有哪些连接端口速度可用？

- **A.** 500Mbps and 1Gbps.
  - 500Mbps 和 1Gbps。
- **B.** 1Gbps and 10Gbps.
  - 1Gbps 和 10Gbps。
- **C.** 100Mbps and 1Gbps.
  - 100Mbps 和 1Gbps。
- **D.** 1Gbps.
  - 1Gbps。

**正确答案 / Answer: `B`**


---

## Question 189

**EN** What will be the state of the alarm at the end of 90 minutes, if the CPU utilization is constant at 80%?

**中** 如果 CPU 利用率恒定为 80%，90 分钟结束时警报的状态是什么？

- **A.** ALERT.
  - 警报。
- **B.** ALARM.
  - 警报。
- **C.** OK.
  - 好的。
- **D.** INSUFFICIENT_DATA.
  - 数据不足。

**正确答案 / Answer: `B`**


---

## Question 190

**EN** A 3-tier e-commerce web application is current deployed on-premises and will be migrated to AWS for greater scalability and elasticity The web server currently shares read-only data using a network distributed file system The app server tier uses a clustering mechanism for discovery and shared session state that depends on I P multicast The database tier uses shared-storage clustering to provide database fail over capability, and uses several read slaves for scaling Data on all servers and the distributed file system directory is backed up weekly to off-site tapes. Which AWS storage and database architecture meets the requirements of the application?

**中** 目前在本地部署了一个 3 层电子商务 Web 应用程序，并将迁移到 AWS，以获得更大的可扩展性和弹性 Web 服务器当前使用网络分布式文件系统共享只读数据 应用程序服务器层使用依赖于 IP 多播的集群机制进行发现和共享会话状态 数据库层使用共享存储集群来提供数据库故障转移功能，并使用多个读取从属设备来扩展 所有服务器和分布式文件系统目录上的数据每周备份到异地磁带。哪种 AWS 存储和数据库架构可以满足应用程序的要求？

- **A.** Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZdeployment and one or more read replicas. Backup: web servers, app servers, and database backed up weekly to Glacier using snapshots.
  - Web 服务器：将只读数据存储在 S3 中，并在启动时从 S3 复制到根卷。应用程序服务器：使用 DynamoDB 和 IP 单播的组合来共享状态。数据库：使用具有多可用区部署和一个或多个只读副本的 RDS。备份：Web 服务器、应用程序服务器和数据库每周使用快照备份到 Glacier。
- **B.** Web servers: store read-only data in an EC2 NFS server, mount to each web server at boot time. App servers: share state using a combination of DynamoDB and IP multicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.
  - Web 服务器：将只读数据存储在 EC2 NFS 服务器中，在启动时挂载到每个 Web 服务器。应用程序服务器：结合使用 DynamoDB 和 IP 多播来共享状态。数据库：使用具有多可用区部署和一个或多个只读副本的 RDS。备份：Web 和应用程序服务器每周通过 AMI 备份，数据库通过数据库快照备份。
- **C.** Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZ deployment and one or more Read Replicas. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.
  - Web 服务器：将只读数据存储在 S3 中，并在启动时从 S3 复制到根卷。应用程序服务器：使用 DynamoDB 和 IP 单播的组合来共享状态。数据库：使用具有多可用区部署和一个或多个只读副本的 RDS。备份：Web 和应用程序服务器每周通过 AMI 备份，数据库通过数据库快照备份。
- **D.** Web servers: store read-only data in S3, and copy from S3 to root volume at boot time. App servers: share state using a combination of DynamoDB and IP unicast. Database: use RDS with multi-AZdeployment. Backup: web and app servers backed up weekly via AMIs, database backed up via DB snapshots.
  - Web 服务器：将只读数据存储在 S3 中，并在启动时从 S3 复制到根卷。应用程序服务器：使用 DynamoDB 和 IP 单播的组合来共享状态。数据库：使用 RDS 进行多可用区部署。备份：Web 和应用程序服务器每周通过 AMI 备份，数据库通过数据库快照备份。

**正确答案 / Answer: `C`**


---

## Question 191

**EN** What are the four levels of AWS Premium Support?

**中** AWS 高级支持分为哪四个级别？

- **A.** Basic, Developer, Business, Enterprise.
  - 基础版、开发版、商业版、企业版。
- **B.** Basic, Startup, Business, Enterprise.
  - 基础、启动、商业、企业。
- **C.** Free, Bronze, Silver, Gold.
  - 免费、铜牌、银牌、金牌。
- **D.** All support is free.
  - 所有支持都是免费的。

**正确答案 / Answer: `A`**


---

## Question 192

**EN** What is the default maximum number of Access Keys per user?

**中** 每个用户的默认最大访问密钥数是多少？

- **A.** 10.
  - 10.
- **B.** 15.
  - 15.
- **C.** 2.
  - 2.
- **D.** 20.
  - 20.

**正确答案 / Answer: `C`**


---

## Question 193

**EN** In the most recent company meeting, your CEO focused on the fact that everyone in the organization needs to make sure that all of the infrastructure that is built is truly scalable. Which of the following statements is incorrect in reference to scalable architecture?

**中** 在最近的公司会议上，您的首席执行官重点关注这样一个事实：组织中的每个人都需要确保构建的所有基础设施都真正可扩展。关于可扩展架构，以下哪项陈述是不正确的？

- **A.** A scalable service is capable of handling heterogeneity.
  - 可扩展的服务能够处理异构性。
- **B.** A scalable service is resilient.
  - 可扩展的服务具有弹性。
- **C.** A scalable architecture won't be cost effective as it grows.
  - 随着规模的扩大，可扩展的架构将不再具有成本效益。
- **D.** Increasing resources results in a proportional increase in performance.
  - 增加资源会导致性能成比例提高。

**正确答案 / Answer: `C`**


---

## Question 194

**EN** What does Amazon S3 stand for?

**中** Amazon S3 代表什么？

- **A.** Simple Storage Solution.
  - 简单的存储解决方案。
- **B.** Storage Storage Storage (triple redundancy Storage).
  - Storage 存储（三重冗余存储）。
- **C.** Storage Server Solution.
  - 存储服务器解决方案。
- **D.** Simple Storage Service.
  - 简单的存储服务。

**正确答案 / Answer: `D`**


---

## Question 195

**EN** A company needs to monitor the read and write IOPs metrics for their AWS MySQL RDS instance and send real-time alerts to their operations team. Which AWS services can accomplish this? (Choose 2 answers)

**中** 公司需要监控其 AWS MySQL RDS 实例的读写 IOP 指标，并向其运营团队发送实时警报。哪些 AWS 服务可以完成此任务？ （选择 2 个答案）

- **A.** Amazon Simple Email Service.
  - 亚马逊简单电子邮件服务。
- **B.** Amazon CloudWatch.
  - Amazon CloudWatch。
- **C.** Amazon Simple Queue Service.
  - 亚马逊简单队列服务。
- **D.** Amazon Route 53.
  - Amazon Route 53。
- **E.** Amazon Simple Notification Service.
  - 亚马逊简单通知服务。

**正确答案 / Answer: `B, E`**


---

## Question 196

**EN** A user has configured ELB with two EBS backed EC2 instances. The user is trying to understand the DNS access and IP support for ELB. Which of the below mentioned statements may not help the user understand the IP mechanism supported by ELB?

**中** 用户已使用两个 EBS 支持的 EC2 实例配置 ELB。用户试图了解 ELB 的 DNS 访问和 IP 支持。以下哪些说法可能无法帮助用户理解 ELB 支持的 IP 机制？

- **A.** The client can connect over IPV4 or IPV6 using Dualstack.
  - 客户端可以使用 Dualstack 通过 IPV4 或 IPV6 进行连接。
- **B.** Communication between the load balancer and back-end instances is always through IPV4.
  - 负载均衡器和后端实例之间的通信始终通过 IPV4。
- **C.** ELB DNS supports both IPV4 and IPV6.
  - ELB DNS 同时支持 IPV4 和 IPV6。
- **D.** The ELB supports either IPV4 or IPV6 but not both.
  - ELB 支持 IPV4 或 IPV6，但不能同时支持两者。

**正确答案 / Answer: `D`**


---

## Question 197

**EN** What is Oracle SQL Developer?

**中** 什么是 Oracle SQL Developer？

- **A.** An AWS developer who is an expert in Amazon RDS using both the Oracle and SQL Server DB engines.
  - AWS 开发人员，是使用 Oracle 和 SQL Server 数据库引擎的 Amazon RDS 方面的专家。
- **B.** A graphical Java tool distributed without cost by Oracle.
  - Oracle 免费分发的图形 Java 工具。
- **C.** It is a variant of the SQL Server Management Studio designed by Microsoft to support Oracle DBMS functionalities.
  - 它是 Microsoft 设计的 SQL Server Management Studio 的一个变体，用于支持 Oracle DBMS 功能。
- **D.** A different DBMS released by Microsoft free of cost.
  - Microsoft 免费发布的另一个 DBMS。

**正确答案 / Answer: `B`**


---

## Question 198

**EN** You can use [...] to help secure the instances in your VPC.

**中** 您可以使用 [...] 来帮助保护 VPC 中的实例。

- **A.** security groups and multi-factor authentication.
  - 安全组和多重身份验证。
- **B.** security groups and 2-Factor authentication.
  - 安全组和双因素身份验证。
- **C.** security groups and biometric authentication.
  - 安全组和生物识别身份验证。
- **D.** security groups and network ACLs.
  - 安全组和网络 ACL。

**正确答案 / Answer: `D`**


---

## Question 199

**EN** What is the type of monitoring data (for Amazon EBS volumes) which is available automatically in 5- minute periods at no charge called?

**中** 5 分钟内自动免费提供的监控数据（针对 Amazon EBS 卷）的类型是什么？

- **A.** Basic.
  - 基本的。
- **B.** Primary.
  - 基本的。
- **C.** Detailed.
  - 详细的。
- **D.** Local.
  - 当地的。

**正确答案 / Answer: `A`**


---

## Question 200

**EN** A user comes to you and wants access to Amazon CloudWatch but only wants to monitor a specific LoadBalancer. Is it possible to give him access to a specific set of instances or a specific LoadBalancer?

**中** 用户来找您并希望访问 Amazon CloudWatch，但只想监视特定的 LoadBalancer。是否可以让他访问一组特定的实例或特定的 LoadBalancer？

- **A.** No because you can't use IAM to control access to CloudWatch data for specific resources.
  - 否，因为您无法使用 IAM 控制对特定资源的 CloudWatch 数据的访问。
- **B.** Yes. You can use IAM to control access to CloudWatch data for specific resources.
  - 是的。您可以使用 IAM 控制对特定资源的 CloudWatch 数据的访问。
- **C.** No because you need to be Sysadmin to access CloudWatch data.
  - 否，因为您需要成为系统管理员才能访问 CloudWatch 数据。
- **D.** Yes. Any user can see all CloudWatch data and needs no access rights.
  - 是的。任何用户都可以查看所有 CloudWatch 数据，并且无需访问权限。

**正确答案 / Answer: `A`**


---

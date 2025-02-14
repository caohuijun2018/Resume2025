export const resumeData = {
    // 基本信息
    basicInfo: {
        name: "李瑞国",
        title: "后端开发工程师",
        contact: [
            {icon: 'Flag', text: '后端开发工程师'},
            {icon: "Information", text: "李瑞国 | 男 | 24 | 上海"},
            {icon: "Time", text: "2022.6 | 3年工作经验"},
            {icon: "Phone", text: "19946275213"},
            {icon: "Email", text: "aboauther@gmail.com"},
        ],
    },

    // 工作经历
    workExperience: [
        // {
        //     company: "上海菜吗网络科技有限公司",
        //     position: "法人",
        //     period: "2024.01 - 至今",
        //     highlights: [
        //         "成立公司，与前公司进行项目合作"
        //     ],
        // },
        {
            company: "齐柏林上海网络科技有限公司",
            position: "后端开发工程师",
            period: "2022.06 - 至今",
            highlights: [
                "交易所项目：核心开发人员，负责交易核心以及前后数据链路的开发与迭代",
                "业务域：业务域后端负责人，负责业务域的迭代工作以及资源协调等事宜",
                "基础建设：技术负责人，负责链上链下多领域多数据源的开发工作"
            ],
        },
    ],

    // 项目介绍
    projects: [
        {
            name: "Exchange Core",
            role: "核心开发成员",
            techStack: ["Java", "Redis"],
            description: [
                "作为核心开发成员，深度参与 Exchange Core 交易所的开发与迭代。项目旨在借助 Zero-Knowledge 技术实现安全高并发高可用的去中心化现货交易系统",
                "事件溯源与快照支持：redis事件记录和回放，具备状态快照（序列化）和恢复操作功能",
                "支持限价市价及多种订单状态（IOC,GTC,FOK）",
                "多核流水线处理架构设计，提高系统处理效率，支持高并发场景",
                "事件驱动架构：通过事件源（event sourcing）和消息队列（MQ）机制，确保数据一致性并提高系统的可扩展性",
                "通过 Redis 异步启动，使用 Redis Keyspace 监听优化数据定时清理任务，实现流量削峰及资源占用动态监控",
                "用户订单簿快照，支持市价不同区间的用户订单快照，提高数据分析能力"
            ],
        },
        {
            name: "On-Chain Cashier",
            role: "技术负责人",
            techStack: ["Golang", "Redis", "Mysql"],
            description: [
                "作为项目负责人，实现链上合约对应的 Transaction Events 的解析处理",
                "并发处理safe gap前后的充值事件",
                "集成链管理进度与 event 哈希一致性校验",
                "支持快速提现及多链状态下用户操作的状态一致性功能",
                "Prometheus 指标监控，支持系统状态实时跟踪"
            ],
        },
        {
            name: "Infra Data Spider",
            role: "技术负责人",
            techStack: ["Golang", "Redis", "Mysql"],
            description: [
                "作为项目负责人，实现链上链下不同数据源的数据获取及落库",
                "通用级别的爬虫框架，配置级启动新数据源爬取任务",
                "链上数据爬取任务动态管理，多链状态下配置级启动",
                "高并发状态下动态管理API token",
                "Prometheus 指标监控，支持系统状态实时跟踪"
            ],
        }
    ],

    // 技能清单
    skills: [
        {description: '熟练使用 Golang 进行高并发、高性能系统开发，具备良好的代码规范和工程化能力'},
        {description: '熟悉 Go 语言的并发编程（goroutine、channel、sync 包等）'},
        {description: '掌握 Golang 内存管理，熟悉GC 机制、逃逸分析，能够降低 GC 压力提升系统吞吐量'},
        {description: '熟练使用 Redis，掌握 高效的 key 设计、Stream 处理、事务管理，优化 QPS 和延迟'},
        {description: '熟悉 Prometheus + Grafana 监控体系，能够设计业务监控，优化运维可观测性'},
        {description: '了解 Docker & Kubernetes，具备容器化部署、服务编排、自动扩缩容经验'},
        {description: '具备 Ethereum 相关开发经验，熟悉 Go-ethereum（Geth）、JSON-RPC、FilterLogs 监听 等技术'},
        {description: '具备 多链交互经验（如 BSC、Polygon、Arbitrum），熟悉 EVM 兼容链的事件解析与数据存储'}
    ],

    // 教育经历
    education: {
        university: "上海海事大学",
        degree: "计算机科学与技术",
        period: "2018～2022 ",
    },
};
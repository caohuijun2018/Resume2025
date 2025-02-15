export const resumeData = {
    // 基本信息
    basicInfo: {
      name: "曹慧珺",
      title: "前端开发工程师",
      contact: [
        { icon: 'Flag', text: '前端开发工程师'},
        { icon: "Information", text: "曹慧珺｜女｜上海" },
        { icon: "Time", text: "2022.6 | 3年工作经验" },
        { icon: "Phone", text: "15601940829" },
        { icon: "Email", text: "caohuijun2018@gmail.com" },
      ],
    },
  
    // 工作经历
    workExperience: [
      {
        company: "盒马（中国）有限公司",
        position: "前端开发工程师",
        period: "2022.07 - 至今",
        highlights: [
          "业务域负责人：担任业务域前端负责人，独立负责多业务域的迭代工作以及资源协调等事宜。涵盖 web 端复杂页面、移动端页面、支付宝小程序、Electron 客户端 ",
          "基础建设：低代码及 AI 驱动无代码平台开发成员",
          "通用打印解决方案：技术负责人，负责打印链路以及打印客户端的开发与迭代"
        ],
      },
    ],
  
    // 项目介绍
    projects: [
      {
        name: "通用标签打印解决方案",
        role: "技术负责人",
        techStack: ["React", "Electron"],
        description: [
            "作为项目负责人，实现基于 Electron 的跨端桌面打印应用，打通浏览器到客户端的数据链路，实际落地多业务场景",
            "使用 WebSocket 实现浏览器和客户端通信",
            "完善的任务调度管理架构",
            "兼容多系统，支持客户端应用常规功能"
        ],
      },
      {
        name: "AI 驱动代码生成平台",
        role: "核心开发成员",
        techStack: ["React", "Electron"],
        description: [
            "作为核心开发成员，深度参与 AI 驱动代码生成平台的开发与迭代。该项目旨在借助大模型实现 P2C 功能，以显著提升开发效率。",
            "基于 LangGraph 构建多模态解析与代码生成架构，涵盖需求文档多模态解析与格式化、API 文档解析、通用模块匹配与业务组件择取、文件代码生成、在线预览及代码库写入等复杂链路。",
            "抽离高复用性与代表性模块构建 RAG，并结合向量数据库，有效提高代码生成准确率"
        ],
      },
    ],
  
    // 技能清单
    skills: [
      { description: '熟悉 JavaScript 核心基础，掌握 ES6 及以上语法，熟练使用 TypeScript' },
      { description: '能够编写语意化 HMTL、模块化 CSS，熟练使用 styled-components' },
      { description: '熟练使用 React、Mobx 构建 Web 页面' },

    ],
  
    // 教育经历
    education: {
      university: "江苏科技大学",
      degree: "信息安全",
      period: "2018～2022 ",
    },
  };
// src/data/site.ts

export interface ExpertiseItem {
  title: string;
  description: string;
  tags: string[];
}

export interface CaseItem {
  id: string;
  industry: string;
  client: string;
  title: string;
  summary: string;
  tech: string[];
  detail: string;
}

export interface ExperienceItem {
  id: string;
  start: string;
  end: string;
  company: string;
  role: string;
  summary: string;
  highlights: string[];
  tags: string[];
}

export interface SiteData {
  hero: {
    label: string;
    title: string;
    subtitles: string[];
    clients: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  quote: string;
  about: string;
  expertise: ExpertiseItem[];
  cases: CaseItem[];
  experience: ExperienceItem[];
  contact: {
    email: string;
    linkedin: string;
    wechat?: string;
  };
  footer: {
    socialLinks: { name: string; url: string; icon: "linkedin" | "github" | "email" }[];
    copyright: string;
  };
  nav: {
    brand: string;
    links: { label: string; href: string }[];
  };
}

export const SITE_DATA: SiteData = {
  nav: {
    brand: "Terry Yuan",
    links: [
      { label: "案例", href: "#cases" },
      { label: "经历", href: "#experience" },
      { label: "联系", href: "#contact" },
    ],
  },
  hero: {
    label: "解决方案架构师",
    title: "Terry Yuan",
    subtitles: [
      "15年企业级系统研发",
      "专注金融投资 / 风控 / 保险等领域",
    ],
    clients: "客户：中国投资股份有限公司 · 太平洋保险公司 · 福特汽车金融公司",
    ctaPrimary: "查看案例",
    ctaSecondary: "联系我",
  },
  quote:
    "以精准洞察需求为基，凭简单高效架构，借团队协作之力，权衡技术与成本，为您打造可持续演化的卓越解决方案",
  about:
    "我是一名解决方案架构师，15年来专注于为金融和保险行业客户设计并交付企业级技术方案。从需求分析、架构选型到落地交付，我帮助客户在复杂业务场景中实现系统升级、风控体系建设和数字化转型。我相信好的方案不是堆砌技术，而是理解业务之后最简洁有效的解。",
  expertise: [
    {
      title: "企业级架构设计",
      description:
        "从业务需求出发，设计高可用、可扩展的系统架构。涵盖微服务、云原生、数据架构等领域。",
      tags: ["微服务", "云原生", "数据架构"],
    },
    {
      title: "行业解决方案",
      description:
        "深耕金融/保险行业，提供合规风控、投资管理、保险核心系统等垂直方案。",
      tags: ["风控", "投资", "保险", "合规"],
    },
    {
      title: "技术交付落地",
      description:
        "端到端交付，技术选型→开发落地→运维支撑。主力技术栈 Java/Spring 生态。",
      tags: ["Java", "Spring", "DevOps"],
    },
  ],
  cases: [
    {
      id: "insurance-risk",
      industry: "保险",
      client: "某大型保险公司 · 汽车理赔部",
      title: "智能车险风险管理系统",
      summary: "自动识别车险理赔过程中各阶段潜在风险，构建全流程风控体系。",
      tech: ["Java", "WebSphere", "Ilog规则引擎", "Oracle"],
      detail:
        "针对车险理赔业务中欺诈风险高、人工审核效率低的痛点，设计并交付了智能风控系统。系统基于 Ilog 规则引擎实现可配置的风险规则库，覆盖报案、查勘、定损、核赔全阶段。上线后风险识别准确率提升 40%，理赔审核效率提升 60%。",
    },
    {
      id: "dealer-risk",
      industry: "汽车金融",
      client: "某大型汽车金融公司 · 金融IT部",
      title: "全球经销商风险分析系统",
      summary: "智能分析经销商经营风险，为金融授信决策提供数据支撑。",
      tech: ["Java", "Angular", "Oracle"],
      detail:
        "为全球经销商网络构建风险分析平台，整合财务数据、销售数据、市场数据等多维度信息，通过风险评分模型自动评估经销商经营健康度。系统支撑全球 5000+ 经销商的风险监控，为授信额度调整和风险预警提供实时决策支持。",
    },
  ],
  experience: [
    {
      id: "exp-1",
      start: "2023.04",
      end: "至今",
      company: "马衡达信息技术（上海）有限公司",
      role: "技术经理",
      summary:
        "汇报给技术总监，带领10人Java研发团队，负责汽车金融贷后业务域核心系统的架构规划、技术攻坚与团队管理，保障系统稳定支撑百万级用户业务需求。",
      highlights: [
        "制定部门3年技术演进路线，主导微服务贷后系统整体架构设计，推动团队技术栈统一率从60%提升至95%，降低跨项目协作成本40%。",
        "带领团队完成Spring Boot 3.0全量升级，通过线程池优化、缓存分层架构改造，系统整体吞吐量提升35%，核心接口响应耗时缩短40%。",
        "主导CI/CD流水线搭建，实现自动化构建、测试、部署全流程闭环，支撑业务需求响应速度提升60%，系统部署故障率从15%降至2%。",
        "建立标准化代码评审、单元测试规范，团队代码评审通过率从70%提升至92%，线上BUG率下降38%。",
        "主导Weekend funding支付项目全生命周期交付，协调产品、测试、运维等跨部门团队，按期完成项目上线，支撑周末支付业务零中断。",
        '搭建"导师制"人才培养体系，累计培养3名中级工程师晋升为技术骨干，团队核心人才留存率达100%。',
      ],
      tags: ["微服务", "Spring Boot 3", "CI/CD", "团队管理"],
    },
    {
      id: "exp-2",
      start: "2019.11",
      end: "2022.11",
      company: "上海维信荟智金科科技有限公司",
      role: "资深Java工程师",
      summary:
        "任职于运维中心，负责集团贷后催收相关系统的架构设计、核心功能开发与线上问题排查，支撑催收、电销、客服等多业务线的外呼需求。",
      highlights: [
        "主导VCS外呼平台整体架构设计，完成催记管理、录音管理、多供应商外呼对接等核心模块开发，系统支撑日均外呼量10万+，服务10+内部业务系统。",
        "负责线上性能问题排查与优化，通过JVM参数调优、分布式锁改造、MQ熔断机制落地，解决频繁FullGC、CPU负载过高问题，系统可用性提升至99.95%。",
        "牵头搭建ELK日志监控平台与多服务商容灾切换机制，实现线上故障分钟级定位，第三方服务故障自动切换时长从30分钟缩短至10秒以内。",
      ],
      tags: ["VCS外呼", "JVM调优", "ELK", "MQ熔断"],
    },
    {
      id: "exp-3",
      start: "2014.04",
      end: "2019.06",
      company: "普华永道信息技术（上海）有限公司",
      role: "高级技术主管",
      summary:
        "负责金融领域大中型项目的技术方案设计、项目管理与团队管控，支撑多个客户的数字化转型需求。",
      highlights: [
        "为中大型金融客户提供技术解决方案设计、系统开发与问题排查服务，参与10+项目投标的技术方案编写，累计支撑中标金额超5000万。",
        "独立管理5-8人技术小组，负责投资风险分析、智能核赔等多个核心项目的交付，项目按期交付率达100%，客户满意度均在90分以上。",
        "参与公司智力资产建设，基于普华永道交付框架输出3份技术实施规范，成为部门项目开发的标准参考文档。",
      ],
      tags: ["投资风控", "核赔系统", "项目管理", "投标方案"],
    },
  ],
  contact: {
    email: "terry.yuan@example.com",
    linkedin: "https://linkedin.com/in/terryyuan",
    wechat: "terry_yuan",
  },
  footer: {
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/in/terryyuan", icon: "linkedin" },
      { name: "GitHub", url: "https://github.com/terryyuan", icon: "github" },
      { name: "Email", url: "mailto:terry.yuan@example.com", icon: "email" },
    ],
    copyright: "TERRY YUAN ©2026",
  },
};

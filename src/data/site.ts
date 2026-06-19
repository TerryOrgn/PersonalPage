// src/data/site.ts

// ---- Types ----

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface ProjectItem {
  id: string;
  period: string;
  title: string;
  role: string;
  background: string;
  contributions: string[];
  techStack: string[];
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

export interface EducationItem {
  period: string;
  school: string;
  degree: string;
}

export interface SiteData {
  basics: {
    name: string;
    phone: string;
    email: string;
    startYear: number;
    degree: string;
    graduation: string;
    workYears: number;
  };
  hero: {
    label: string;
    title: string;
    subtitles: string[];
    clients: string;
    ctaPrimary: string;
    ctaSecondary: string;
  };
  quote: string;
  about: string[];
  skills: SkillCategory[];
  coreStrengths: string[];
  projects: ProjectItem[];
  experience: ExperienceItem[];
  education: EducationItem;
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

// ---- Data ----

export const SITE_DATA: SiteData = {
  basics: {
    name: "袁堂林",
    phone: "13681891649",
    email: "yuantanglin@126.com",
    startYear: 2011,
    degree: "本科",
    graduation: "2018.01",
    workYears: 15,
  },

  nav: {
    brand: "袁堂林",
    links: [
      { label: "技能", href: "#skills" },
      { label: "项目", href: "#projects" },
      { label: "经历", href: "#experience" },
      { label: "联系", href: "#contact" },
    ],
  },

  hero: {
    label: "Java 技术架构师 · 技术经理",
    title: "袁堂林",
    subtitles: [
      "15年Java技术栈开发与架构经验",
      "专注汽车金融 · 金融风控 · 物流办公等领域",
    ],
    clients: "曾任职：普华永道 · 德邦物流 · 马衡达 · 维信荟智",
    ctaPrimary: "查看项目",
    ctaSecondary: "联系我",
  },

  quote:
    "以精准洞察需求为基，凭简单高效架构，借团队协作之力，权衡技术与成本，为您打造可持续演化的卓越解决方案",

  about: [
    "15年Java技术栈开发与架构经验，8年+微服务架构设计与团队管理经验，曾任职于普华永道、德邦物流等行业标杆企业，主导过汽车金融、金融风控、物流办公系统等多领域千万级用户规模的核心系统从0到1搭建与迭代，具备从技术战略规划到业务落地交付的全链路管控能力。",
    "精通Spring Boot、Spring Cloud微服务生态，熟练掌握Redis、RabbitMQ、Kafka等中间件，以及MySQL、Oracle、DB2等多类型数据库调优，拥有4年+海量数据处理与高并发系统设计经验，可独立完成千万级流量、亿级数据规模的高可用系统架构设计与性能优化。",
    "具备10人规模技术团队管理经验，擅长技术路线规划、人才梯队建设与研发效能提升，曾推动团队技术栈统一率提升35%、业务需求响应速度提升60%，累计培养3名中级工程师成长为技术骨干，团队核心人才留存率100%。",
    "拥有丰富的DevOps落地经验，主导搭建的CI/CD自动化流水线实现部署故障率从15%降至2%，系统部署效率提升80%，擅长通过技术标准化、流程规范化降低研发成本、保障系统稳定性。",
  ],

  skills: [
    {
      category: "Java 技术栈",
      items: [
        "J2EE",
        "Spring",
        "Spring Boot",
        "Spring Cloud",
        "MyBatis",
        "Hibernate",
        "多线程编程",
        "设计模式",
      ],
    },
    {
      category: "中间件与缓存",
      items: [
        "Redis",
        "RabbitMQ",
        "Apache Kafka",
        "Memcached",
        "xxl-job",
        "ElasticJob",
        "Nginx",
      ],
    },
    {
      category: "数据库",
      items: ["MySQL", "Oracle", "DB2", "MongoDB", "SQL优化", "ETL"],
    },
    {
      category: "大数据与运维",
      items: [
        "Hadoop",
        "Spark",
        "海量数据处理",
        "Jenkins",
        "CI/CD",
        "ELK日志平台",
        "Docker",
        "虚拟化",
      ],
    },
    {
      category: "团队与项目管理",
      items: [
        "技术架构设计",
        "研发流程规范",
        "10人团队管理",
        "跨部门协作",
        "项目全生命周期管理",
      ],
    },
  ],

  coreStrengths: [
    "15年Java技术栈开发与架构经验，8年+微服务架构设计与团队管理经验，曾任职于普华永道、德邦物流等行业标杆企业，主导过汽车金融、金融风控、物流办公系统等多领域千万级用户规模的核心系统从0到1搭建与迭代，具备从技术战略规划到业务落地交付的全链路管控能力。",
    "精通Spring Boot、Spring Cloud微服务生态，熟练掌握Redis、RabbitMQ、Kafka等中间件，以及MySQL、Oracle、DB2等多类型数据库调优，拥有4年+海量数据处理与高并发系统设计经验，可独立完成千万级流量、亿级数据规模的高可用系统架构设计与性能优化。",
    "具备10人规模技术团队管理经验，擅长技术路线规划、人才梯队建设与研发效能提升，曾推动团队技术栈统一率提升35%、业务需求响应速度提升60%，累计培养3名中级工程师成长为技术骨干，团队核心人才留存率100%。",
    "拥有丰富的DevOps落地经验，主导搭建的CI/CD自动化流水线实现部署故障率从15%降至2%，系统部署效率提升80%，擅长通过技术标准化、流程规范化降低研发成本、保障系统稳定性。",
  ],

  projects: [
    {
      id: "proj-1",
      period: "2023.5 — 至今",
      title: "Comm & DealerService 业务域系统",
      role: "技术经理",
      background:
        "为国内头部汽车金融集团搭建贷后业务核心支撑系统，覆盖短信通知、支付结算、自动化流程、财务开票等核心业务场景，支撑千万级用户的贷后全生命周期管理需求。",
      contributions: [
        "负责系统整体架构设计与技术选型，采用Spring Cloud微服务架构拆分4个核心业务域，制定统一技术规范与接口标准，保障系统可扩展性与可维护性。",
        "主导CMS短信平台设计，基于Redis缓存与RabbitMQ异步队列实现流量削峰与异常重试，通过直连上游SQL库提升批量数据读取效率，月均处理短信量90万条，核心接口可用性达99.99%。",
        "牵头CEFT/DEFT支付系统架构设计，实现个人扣款与经销商放款批处理全流程自动化，每日20点定时生成对账报表，支撑亿级资金的安全结算，差错率低于0.01%。",
        "主导PEGA RPA自动化平台落地，基于VDI虚拟化环境部署7路并行机器人任务，实现解抵押文档生成、邮件分发等10+业务流程自动化，人工操作成本降低70%。",
        "负责HVAT增值税开票系统对接，实现汉得财务系统与航天GTAX税控系统的数据打通，月初自动完成ETL解析与发票开具流程，支撑月末全量财务数据归集，开票效率提升80%。",
        "搭建ATLAS主数据管理平台，提供API实时查询、DB直连、定时文件推送三种数据交付模式，为下游系统统一供给经销商基础数据；基于DWS数据副本架构实现核心库读写隔离、业务解耦，保障主库安全与查询性能。",
      ],
      techStack: [
        "DB2",
        "Redis",
        "MyBatis",
        "Spring Boot",
        "Spring Cloud",
        "RabbitMQ",
        "Splunk",
        "Dynatrace",
        "Liberty",
      ],
    },
    {
      id: "proj-2",
      period: "2019.11 — 2022.11",
      title: "VCS 外呼系统",
      role: "资深Java工程师",
      background:
        "为集团搭建统一外呼能力平台，支撑贷后催收、电销、客服等10+业务系统的外呼需求，原有系统存在供应商绑定严重、性能不足、容灾能力弱等问题，需要重构微服务化架构。",
      contributions: [
        "参与系统初始架构设计与技术选型，采用Spring Cloud微服务架构拆分Allocation、Segment、Outsourcing等核心模块，通过RabbitMQ实现服务间异步解耦，支撑日均外呼量10万+。",
        "负责催记、录音、外呼对接等核心模块开发，完成3家主流外呼供应商的对接，实现后台一键切换与自动容灾，外呼接通率提升25%。",
        "主导线上性能优化，通过JVM参数调优、Redis分布式锁改造、MQ熔断机制落地，解决频繁FullGC与CPU负载过高问题，系统可用性从99.5%提升至99.95%。",
        "牵头搭建ELK日志监控平台，实现请求全链路追踪，线上故障排查时间从2小时缩短至15分钟。",
      ],
      techStack: [
        "MySQL",
        "Redis",
        "MyBatis",
        "Spring Boot",
        "Spring Cloud",
        "RabbitMQ",
        "xxl-job",
        "ElasticJob",
        "Jenkins",
        "ELK",
      ],
    },
    {
      id: "proj-3",
      period: "2017.2 — 2019.5",
      title: "投资与风险分析系统",
      role: "高级技术主管",
      background:
        "为金融客户搭建投资绩效与风险分析系统，原有基于EJB的架构难以应对每日30GB+持仓数据的分析需求，单次分析耗时超过2小时，无法满足业务实时决策需求。",
      contributions: [
        "主导系统架构重构，将原有EJB架构改造为Spring Cloud微服务架构，引入Hadoop集群进行分布式计算，拆分10+核心分析模块，单次全量数据分析耗时从2小时缩短至8分钟。",
        "负责核心计算逻辑开发与性能优化，通过数据分片、缓存预计算等手段，大幅提升分析效率，支撑客户每日实时风险评估需求。",
        "管理6人研发团队完成项目全周期交付，项目上线后得到客户高度认可，后续续签2期升级合同。",
      ],
      techStack: ["Spring Boot", "Spring Cloud", "Hadoop", "Oracle", "Ignite", "Linux"],
    },
    {
      id: "proj-4",
      period: "2014.4 — 2015.4",
      title: "智能核赔系统",
      role: "软件工程师",
      background:
        "为财险客户搭建智能核赔系统，原有规则硬编码的开发模式难以应对快速变化的车险理赔规则，核赔效率低、风险管控能力弱，需要引入规则引擎实现规则灵活配置。",
      contributions: [
        "负责智能核赔核心接口开发，完成案件评分、报案规则、查勘规则、单证规则等20+RPC接口的设计与实现，支撑车险理赔全流程的风险自动评估。",
        "主导ILOG规则引擎集成，实现理赔规则的可视化配置，规则调整上线时间从7天缩短至4小时，车险核赔效率提升60%，风险识别准确率提升35%。",
        "负责权限系统设计与外部理赔系统对接，完成与3个核心业务系统的打通，支撑全量车险案件的自动核赔处理。",
      ],
      techStack: ["Spring", "Spring Boot", "MyBatis", "ILOG规则引擎", "Oracle", "Linux"],
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
        "搭建\"导师制\"人才培养体系，累计培养3名中级工程师晋升为技术骨干，团队核心人才留存率达100%。",
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
    {
      id: "exp-4",
      start: "2013.04",
      end: "2014.04",
      company: "德邦物流有限公司",
      role: "Java软件开发工程师",
      summary:
        "任职于办公系统开发组，负责门户二期工作流系统的功能开发与数据迁移工作。",
      highlights: [
        "负责门户二期工作流系统首页功能开发与测试用例编写，完成15+核心功能模块交付，支撑公司5万+员工的办公流程需求。",
        "主导工作流系统全量数据迁移工作，完成1000万+历史数据从旧系统到新业务库、引擎库的平滑迁移，数据迁移零差错。",
        "负责项目开发环境、测试环境的部署与问题排查，支撑项目按期上线，系统上线后故障率低于1%。",
      ],
      tags: ["工作流", "数据迁移", "OA系统"],
    },
    {
      id: "exp-5",
      start: "2011.04",
      end: "2013.03",
      company: "文思海辉股份有限公司",
      role: "Java软件开发工程师",
      summary:
        "任职于软件开发部，参与公司内部OA系统与华为手机云服务、在线测试系统的设计开发工作。",
      highlights: [
        "参与华为在线测试系统的设计、开发与集成测试工作，完成20+核心接口开发，支撑华为终端设备的自动化测试需求，系统测试覆盖率提升30%。",
        "参与公司内部OA系统的功能迭代，完成审批流程、考勤管理等模块开发，支撑公司2000+员工的日常办公需求。",
        "指导2名初级工程师完成开发任务，输出5份开发规范文档，提升团队整体开发效率20%。",
      ],
      tags: ["华为项目", "OA系统", "接口开发", "团队指导"],
    },
  ],

  education: {
    period: "2015.3 — 2018.1",
    school: "上海交通大学",
    degree: "计算机科学与技术 | 本科",
  },

  contact: {
    email: "yuantanglin@126.com",
    linkedin: "https://linkedin.com/in/terryyuan",
    wechat: "terry_yuan",
  },

  footer: {
    socialLinks: [
      { name: "LinkedIn", url: "https://linkedin.com/in/terryyuan", icon: "linkedin" },
      { name: "GitHub", url: "https://github.com/TerryOrgn", icon: "github" },
      { name: "Email", url: "mailto:yuantanglin@126.com", icon: "email" },
    ],
    copyright: "袁堂林 ©2026",
  },
};

# TerryYuan Personal Page - Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a single-page personal brand site for Terry Yuan (解决方案架构师) using Next.js App Router + Tailwind CSS, deployed to Vercel.

**Architecture:** App Router page (`src/app/page.tsx`) imports all section components, each receiving typed data from a single data file (`src/data/site.ts`). No backend — the contact form shows a success message client-side. All content is static and pre-rendered.

**Tech Stack:** Next.js 15, React 19, Tailwind CSS 4, TypeScript 5, framer-motion (light animations), next/font

## Global Constraints

- Fixed dark theme: background `#0a0a0a`, white text
- Responsive breakpoints: sm (640px), md (768px), lg (1024px)
- Single-page scroll with smooth-scroll navigation
- Lighthouse Performance ≥ 90 target
- No backend, no CMS, no auth — static site
- All user-facing copy matches the spec content exactly
- File naming: PascalCase for components, kebab-case for data files

---

## File Structure

```
src/
├── app/
│   ├── layout.tsx              → Root layout: metadata, fonts, globals.css import
│   ├── page.tsx                → Main page: assembles all sections in order
│   └── globals.css             → Tailwind import + custom dark theme variables
├── components/
│   ├── Nav.tsx                 → Fixed nav, smooth-scroll links, scroll-aware border
│   ├── Hero.tsx                → Hero section with CTA buttons
│   ├── Quote.tsx               → Centered design-philosophy blockquote
│   ├── About.tsx               → Centered intro paragraph
│   ├── Expertise.tsx           → 3-column expertise cards with tags
│   ├── Cases.tsx               → 2-column case cards + detail modal
│   ├── Experience.tsx          → Timeline with expand/collapse entries
│   ├── Contact.tsx             → Left form + right contact info
│   └── Footer.tsx              → Social icons + copyright
└── data/
    └── site.ts                 → Typed site content, single source of truth
```

---

### Task 1: Project Scaffolding

**Files:**
- Create: `package.json`, `tsconfig.json`, `next.config.ts`, `postcss.config.mjs`, `tailwind.config.ts`
- Create: `src/app/globals.css`, `src/app/layout.tsx`, `src/app/page.tsx` (placeholder)

**Interfaces:**
- Produces: `npm run dev` starts a working Next.js dev server with Tailwind

- [ ] **Step 1: Initialize Next.js project**

```bash
cd /Users/yuantanglin/PersonalPage
npx create-next-app@latest . --typescript --tailwind --eslint --app --src-dir --import-alias "@/*" --no-turbopack --use-npm
```

Expected: project scaffolded with all config files.

- [ ] **Step 2: Install additional dependencies**

```bash
npm install framer-motion
```

- [ ] **Step 3: Verify Tailwind v4 config**

Run: `cat tailwind.config.ts`
If Tailwind v4, ensure `@tailwind base; @tailwind components; @tailwind utilities;` are in `globals.css`.

- [ ] **Step 4: Set dark background in globals.css**

In `src/app/globals.css`, after Tailwind directives:

```css
:root {
  --bg-primary: #0a0a0a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --accent: #f5f5f5;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
}

html {
  scroll-behavior: smooth;
}
```

- [ ] **Step 5: Verify dev server starts**

```bash
npm run dev
```

Expected: "Ready in Xs" on localhost:3000. Kill the server after confirming.

- [ ] **Step 6: Commit**

```bash
git add -A
git commit -m "feat: scaffold Next.js project with Tailwind and framer-motion"
```

---

### Task 2: Site Data File

**Files:**
- Create: `src/data/site.ts`

**Interfaces:**
- Produces: `SITE_DATA` object with types `SiteData`, `ExpertiseItem`, `CaseItem`, `ExperienceItem`

- [ ] **Step 1: Write data types and content**

```typescript
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
```

- [ ] **Step 2: Verify TypeScript compiles**

```bash
npx tsc --noEmit
```

Expected: No errors.

- [ ] **Step 3: Commit**

```bash
git add src/data/site.ts
git commit -m "feat: add typed site data file with all content"
```

---

### Task 3: Root Layout + Global Styles

**Files:**
- Modify: `src/app/layout.tsx`, `src/app/globals.css`
- Create: `src/app/page.tsx` (placeholder)

**Interfaces:**
- Produces: RootLayout exported as default, wraps children with `<html>` and `<body>`, sets metadata

- [ ] **Step 1: Replace globals.css with full dark-theme styles**

```css
@import "tailwindcss";

:root {
  --bg-primary: #0a0a0a;
  --bg-secondary: #111111;
  --bg-card: #1a1a1a;
  --text-primary: #ffffff;
  --text-secondary: #a0a0a0;
  --text-muted: #666666;
  --accent: #f5f5f5;
  --border: #2a2a2a;
}

body {
  background-color: var(--bg-primary);
  color: var(--text-primary);
  font-family: system-ui, -apple-system, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

html {
  scroll-behavior: smooth;
}

/* Section spacing */
section {
  padding-top: 6rem;
  padding-bottom: 6rem;
}

@media (max-width: 768px) {
  section {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }
}

/* Scrollbar styling */
::-webkit-scrollbar {
  width: 6px;
}

::-webkit-scrollbar-track {
  background: var(--bg-primary);
}

::-webkit-scrollbar-thumb {
  background: var(--border);
  border-radius: 3px;
}
```

- [ ] **Step 2: Write root layout**

```tsx
// src/app/layout.tsx
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Terry Yuan - 解决方案架构师",
  description:
    "15年企业级系统研发经验，专注金融投资/风控/保险领域。为金融行业客户提供端到端技术解决方案。",
  keywords: ["解决方案架构师", "金融科技", "保险科技", "Java", "架构设计"],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh-CN">
      <body className="min-h-screen bg-[var(--bg-primary)] text-[var(--text-primary)] antialiased">
        {children}
      </body>
    </html>
  );
}
```

- [ ] **Step 3: Write placeholder page**

```tsx
// src/app/page.tsx
export default function Home() {
  return (
    <main>
      <h1 className="text-center py-20 text-4xl">Terry Yuan</h1>
    </main>
  );
}
```

- [ ] **Step 4: Verify build**

```bash
npm run dev
```

Expected: Page shows "Terry Yuan" on dark background. Kill server.

- [ ] **Step 5: Commit**

```bash
git add src/app/layout.tsx src/app/globals.css src/app/page.tsx
git commit -m "feat: add root layout with dark theme and metadata"
```

---

### Task 4: Nav Component

**Files:**
- Create: `src/components/Nav.tsx`
- Modify: `src/app/page.tsx` (import Nav)

**Interfaces:**
- Consumes: `SITE_DATA.nav` from `src/data/site`
- Produces: `<Nav />` component with fixed positioning, smooth-scroll links, scroll-aware bottom border

- [ ] **Step 1: Write Nav component**

```tsx
// src/components/Nav.tsx
"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

interface NavLink {
  label: string;
  href: string;
}

interface NavProps {
  brand: string;
  links: NavLink[];
}

export default function Nav({ brand, links }: NavProps) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[var(--bg-primary)]/80 backdrop-blur-md border-b border-[var(--border)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => handleClick(e, "#hero")}
          className="text-lg font-semibold tracking-wide hover:text-[var(--text-secondary)] transition-colors"
        >
          {brand}
        </a>
        <div className="flex gap-8">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className="text-sm uppercase tracking-widest text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </nav>
  );
}
```

- [ ] **Step 2: Import Nav in page.tsx**

```tsx
// src/app/page.tsx
import { SITE_DATA } from "@/data/site";
import Nav from "@/components/Nav";

export default function Home() {
  return (
    <main>
      <Nav brand={SITE_DATA.nav.brand} links={SITE_DATA.nav.links} />
    </main>
  );
}
```

- [ ] **Step 3: Verify dev server works, scroll triggers backdrop**

```bash
npm run dev
```

- [ ] **Step 4: Commit**

```bash
git add src/components/Nav.tsx src/app/page.tsx
git commit -m "feat: add fixed navigation with smooth scroll and backdrop blur"
```

---

### Task 5: Hero Component

**Files:**
- Create: `src/components/Hero.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `SITE_DATA.hero`
- Produces: `<Hero />` section with label, title, subtitles, clients, CTA buttons

- [ ] **Step 1: Write Hero component**

```tsx
// src/components/Hero.tsx
"use client";

interface HeroProps {
  label: string;
  title: string;
  subtitles: string[];
  clients: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export default function Hero({
  label,
  title,
  subtitles,
  clients,
  ctaPrimary,
  ctaSecondary,
}: HeroProps) {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center px-6 pt-20"
    >
      <div className="text-center max-w-4xl">
        <p className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-6">
          {label}
        </p>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-8">
          {title}
        </h1>
        <div className="space-y-2 mb-4">
          {subtitles.map((line, i) => (
            <p
              key={i}
              className="text-lg md:text-xl text-[var(--text-secondary)] leading-relaxed"
            >
              {line}
            </p>
          ))}
        </div>
        <p className="text-sm text-[var(--text-muted)] mb-12">{clients}</p>
        <div className="flex gap-4 justify-center">
          <button
            onClick={() => scrollTo("#cases")}
            className="px-8 py-3 bg-[var(--accent)] text-[var(--bg-primary)] rounded-full font-medium text-sm uppercase tracking-wider hover:scale-105 transition-transform"
          >
            {ctaPrimary}
          </button>
          <button
            onClick={() => scrollTo("#contact")}
            className="px-8 py-3 border border-[var(--text-secondary)] text-[var(--text-primary)] rounded-full font-medium text-sm uppercase tracking-wider hover:border-[var(--text-primary)] hover:scale-105 transition-all"
          >
            {ctaSecondary}
          </button>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add Hero to page.tsx**

```tsx
import { SITE_DATA } from "@/data/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";

export default function Home() {
  return (
    <main>
      <Nav brand={SITE_DATA.nav.brand} links={SITE_DATA.nav.links} />
      <Hero {...SITE_DATA.hero} />
    </main>
  );
}
```

- [ ] **Step 3: Verify in dev server**

Hero fills viewport, buttons scroll (or will once #cases and #contact exist).

- [ ] **Step 4: Commit**

```bash
git add src/components/Hero.tsx src/app/page.tsx
git commit -m "feat: add Hero section with dual CTA buttons"
```

---

### Task 6: Quote Component

**Files:**
- Create: `src/components/Quote.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `quote: string`
- Produces: Centered blockquote section with decorative left border

- [ ] **Step 1: Write Quote component**

```tsx
// src/components/Quote.tsx
interface QuoteProps {
  text: string;
}

export default function Quote({ text }: QuoteProps) {
  return (
    <section className="flex justify-center px-6">
      <blockquote className="max-w-3xl border-l-2 border-[var(--border)] pl-8 py-2">
        <p className="text-xl md:text-2xl italic text-[var(--text-secondary)] leading-relaxed">
          {text}
        </p>
      </blockquote>
    </section>
  );
}
```

- [ ] **Step 2: Add Quote to page.tsx**

```tsx
<Quote text={SITE_DATA.quote} />
```
(insert between Hero and future About)

- [ ] **Step 3: Verify in dev server**

- [ ] **Step 4: Commit**

```bash
git add src/components/Quote.tsx src/app/page.tsx
git commit -m "feat: add design philosophy quote section"
```

---

### Task 7: About Component

**Files:**
- Create: `src/components/About.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `text: string`
- Produces: Centered intro paragraph section

- [ ] **Step 1: Write About component**

```tsx
// src/components/About.tsx
interface AboutProps {
  text: string;
}

export default function About({ text }: AboutProps) {
  return (
    <section id="about" className="flex justify-center px-6">
      <div className="max-w-2xl text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-8">
          About
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-[var(--text-secondary)]">
          {text}
        </p>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add About to page.tsx**

```tsx
<About text={SITE_DATA.about} />
```

- [ ] **Step 3: Verify**

- [ ] **Step 4: Commit**

```bash
git add src/components/About.tsx src/app/page.tsx
git commit -m "feat: add About section"
```

---

### Task 8: Expertise Component

**Files:**
- Create: `src/components/Expertise.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `SITE_DATA.expertise` (ExpertiseItem[])
- Produces: 3-column responsive card grid with hover effects

- [ ] **Step 1: Write Expertise component**

```tsx
// src/components/Expertise.tsx
import { ExpertiseItem } from "@/data/site";

interface ExpertiseProps {
  items: ExpertiseItem[];
}

export default function Expertise({ items }: ExpertiseProps) {
  return (
    <section id="expertise" className="px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-16 text-center">
          Expertise
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {items.map((item, i) => (
            <div
              key={i}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8 hover:-translate-y-1 transition-transform duration-300"
            >
              <span className="text-3xl mb-4 block text-[var(--text-muted)]">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-xl font-semibold mb-4">{item.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                {item.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 text-xs rounded-full bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
<Expertise items={SITE_DATA.expertise} />
```

- [ ] **Step 3: Verify responsiveness at mobile, tablet, desktop**

- [ ] **Step 4: Commit**

```bash
git add src/components/Expertise.tsx src/app/page.tsx
git commit -m "feat: add Expertise section with 3-column card grid"
```

---

### Task 9: Cases Component (with Modal)

**Files:**
- Create: `src/components/Cases.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `SITE_DATA.cases` (CaseItem[])
- Produces: 2-column case card grid, clicking "查看详情" opens a modal with full detail

- [ ] **Step 1: Write Cases component**

```tsx
// src/components/Cases.tsx
"use client";

import { useState } from "react";
import { CaseItem } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

interface CasesProps {
  items: CaseItem[];
}

export default function Cases({ items }: CasesProps) {
  const [selected, setSelected] = useState<CaseItem | null>(null);

  return (
    <section id="cases" className="px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-16 text-center">
          Cases
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8 flex flex-col"
            >
              <div className="flex gap-2 mb-3">
                <span className="px-2 py-0.5 text-xs rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]">
                  {item.industry}
                </span>
              </div>
              <p className="text-sm text-[var(--text-muted)] mb-2">{item.client}</p>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-[var(--text-secondary)] leading-relaxed mb-4 flex-1">
                {item.summary}
              </p>
              <div className="flex flex-wrap gap-2 mb-6">
                {item.tech.map((t) => (
                  <span
                    key={t}
                    className="px-2 py-0.5 text-xs rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)]"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <button
                onClick={() => setSelected(item)}
                className="text-sm uppercase tracking-wider text-[var(--text-primary)] hover:text-[var(--text-secondary)] transition-colors text-left"
              >
                查看详情 →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selected && (
          <>
            {/* Backdrop */}
            <motion.div
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            {/* Panel */}
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
            >
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-xl p-8 max-w-2xl w-full max-h-[80vh] overflow-y-auto">
                <div className="flex items-center justify-between mb-6">
                  <span className="px-2 py-0.5 text-xs rounded bg-[var(--bg-secondary)] text-[var(--text-secondary)] border border-[var(--border)]">
                    {selected.industry}
                  </span>
                  <button
                    onClick={() => setSelected(null)}
                    className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors text-2xl leading-none"
                  >
                    ✕
                  </button>
                </div>
                <p className="text-sm text-[var(--text-muted)] mb-2">{selected.client}</p>
                <h3 className="text-2xl font-semibold mb-4">{selected.title}</h3>
                <p className="text-[var(--text-secondary)] leading-relaxed mb-6">
                  {selected.detail}
                </p>
                <div className="flex flex-wrap gap-2">
                  {selected.tech.map((t) => (
                    <span
                      key={t}
                      className="px-3 py-1 text-xs rounded-full bg-[var(--bg-secondary)] text-[var(--text-muted)] border border-[var(--border)]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
<Cases items={SITE_DATA.cases} />
```

- [ ] **Step 3: Verify modal opens on "查看详情" click, closes on backdrop/✕**

- [ ] **Step 4: Commit**

```bash
git add src/components/Cases.tsx src/app/page.tsx
git commit -m "feat: add Cases section with detail modal"
```

---

### Task 10: Experience Component

**Files:**
- Create: `src/components/Experience.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `SITE_DATA.experience` (ExperienceItem[])
- Produces: Timeline layout, each entry expandable to show highlights

- [ ] **Step 1: Write Experience component**

```tsx
// src/components/Experience.tsx
"use client";

import { useState } from "react";
import { ExperienceItem } from "@/data/site";
import { motion, AnimatePresence } from "framer-motion";

interface ExperienceProps {
  items: ExperienceItem[];
}

export default function Experience({ items }: ExperienceProps) {
  const [expanded, setExpanded] = useState<string | null>(null);

  const toggle = (id: string) => {
    setExpanded(expanded === id ? null : id);
  };

  return (
    <section id="experience" className="px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-16 text-center">
          Experience
        </h2>
        <div className="relative">
          {/* Timeline vertical line */}
          <div className="absolute left-0 md:left-[120px] top-0 bottom-0 w-px bg-[var(--border)]" />

          {items.map((item) => {
            const isOpen = expanded === item.id;
            return (
              <div
                key={item.id}
                className="relative pb-12 last:pb-0"
              >
                {/* Timeline dot */}
                <div
                  className={`absolute left-[-4px] md:left-[116px] top-1 w-[9px] h-[9px] rounded-full border-2 transition-colors cursor-pointer ${
                    isOpen
                      ? "bg-[var(--accent)] border-[var(--accent)]"
                      : "bg-[var(--bg-primary)] border-[var(--border)]"
                  }`}
                  onClick={() => toggle(item.id)}
                />

                <div className="pl-8 md:pl-[160px]">
                  {/* Always visible summary */}
                  <button
                    onClick={() => toggle(item.id)}
                    className="text-left w-full group"
                  >
                    <p className="text-sm text-[var(--text-muted)] mb-1">
                      {item.start} — {item.end}
                    </p>
                    <h3 className="text-lg font-semibold mb-1 group-hover:text-[var(--text-secondary)] transition-colors">
                      {item.company}
                    </h3>
                    <p className="text-sm text-[var(--text-secondary)] mb-3">
                      {item.role}
                    </p>
                    <p className="text-[var(--text-secondary)] leading-relaxed text-sm mb-3">
                      {item.summary}
                    </p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {item.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-0.5 text-xs rounded-full bg-[var(--bg-card)] text-[var(--text-muted)] border border-[var(--border)]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <span className="text-xs uppercase tracking-wider text-[var(--text-muted)]">
                      {isOpen ? "收起 ▲" : "展开详情 ▼"}
                    </span>
                  </button>

                  {/* Expandable highlights */}
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-4 space-y-2 border-t border-[var(--border)] pt-4">
                          {item.highlights.map((h, i) => (
                            <li
                              key={i}
                              className="text-sm text-[var(--text-secondary)] leading-relaxed pl-4 relative before:content-['•'] before:absolute before:left-0 before:text-[var(--text-muted)]"
                            >
                              {h}
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
<Experience items={SITE_DATA.experience} />
```

- [ ] **Step 3: Verify expand/collapse on click, timeline visual correct**

- [ ] **Step 4: Commit**

```bash
git add src/components/Experience.tsx src/app/page.tsx
git commit -m "feat: add Experience timeline with expandable entries"
```

---

### Task 11: Contact Component

**Files:**
- Create: `src/components/Contact.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `SITE_DATA.contact`
- Produces: Left form (name/email/subject/message + submit) + right contact info, form shows success message on submit

- [ ] **Step 1: Write Contact component**

```tsx
// src/components/Contact.tsx
"use client";

import { useState, FormEvent } from "react";

interface ContactProps {
  email: string;
  linkedin: string;
  wechat?: string;
}

export default function Contact({ email, linkedin, wechat }: ContactProps) {
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-4 text-center">
          Contact
        </h2>
        <p className="text-center text-[var(--text-muted)] mb-16">
          有项目想聊？欢迎联系
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div>
            {submitted ? (
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8 text-center">
                <p className="text-lg font-semibold mb-2">消息已发送！</p>
                <p className="text-[var(--text-secondary)]">感谢您的来信，我会尽快回复。</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">
                    姓名
                  </label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-secondary)] transition-colors text-sm"
                    placeholder="您的姓名"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">
                    邮箱
                  </label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-secondary)] transition-colors text-sm"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">
                    主题
                  </label>
                  <input
                    type="text"
                    required
                    value={form.subject}
                    onChange={(e) => setForm({ ...form, subject: e.target.value })}
                    className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-secondary)] transition-colors text-sm"
                    placeholder="项目合作咨询"
                  />
                </div>
                <div>
                  <label className="block text-sm text-[var(--text-secondary)] mb-1">
                    内容
                  </label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    className="w-full bg-[var(--bg-card)] border border-[var(--border)] rounded-lg px-4 py-3 text-[var(--text-primary)] focus:outline-none focus:border-[var(--text-secondary)] transition-colors text-sm resize-none"
                    placeholder="请描述您的项目需求..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[var(--accent)] text-[var(--bg-primary)] rounded-full font-medium text-sm uppercase tracking-wider hover:scale-[1.02] transition-transform"
                >
                  发送
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-6 pl-0 md:pl-8">
            <div>
              <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-1">
                Email
              </p>
              <a
                href={`mailto:${email}`}
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                {email}
              </a>
            </div>
            <div>
              <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-1">
                LinkedIn
              </p>
              <a
                href={linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors"
              >
                查看 LinkedIn 主页
              </a>
            </div>
            {wechat && (
              <div>
                <p className="text-sm text-[var(--text-muted)] uppercase tracking-wider mb-1">
                  微信
                </p>
                <p className="text-[var(--text-secondary)]">{wechat}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
<Contact email={SITE_DATA.contact.email} linkedin={SITE_DATA.contact.linkedin} wechat={SITE_DATA.contact.wechat} />
```

- [ ] **Step 3: Verify form success state, email/LinkedIn links work**

- [ ] **Step 4: Commit**

```bash
git add src/components/Contact.tsx src/app/page.tsx
git commit -m "feat: add Contact section with form and contact info"
```

---

### Task 12: Footer Component

**Files:**
- Create: `src/components/Footer.tsx`
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: `SITE_DATA.footer`
- Produces: Centered social icons row + copyright text

- [ ] **Step 1: Write SVG icon helpers**

Inside `src/components/Footer.tsx`, define inline SVG icons for LinkedIn, GitHub, Email.

```tsx
// src/components/Footer.tsx
interface FooterProps {
  socialLinks: { name: string; url: string; icon: "linkedin" | "github" | "email" }[];
  copyright: string;
}

function SocialIcon({ icon }: { icon: "linkedin" | "github" | "email" }) {
  const size = 20;
  switch (icon) {
    case "linkedin":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "github":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      );
    case "email":
      return (
        <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="4" width="20" height="16" rx="2" />
          <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
        </svg>
      );
  }
}

export default function Footer({ socialLinks, copyright }: FooterProps) {
  return (
    <footer className="border-t border-[var(--border)] px-6 py-12">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-6">
        <div className="flex gap-6">
          {socialLinks.map((link) => (
            <a
              key={link.name}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[var(--text-muted)] hover:text-[var(--text-primary)] transition-colors"
              aria-label={link.name}
            >
              <SocialIcon icon={link.icon} />
            </a>
          ))}
        </div>
        <p className="text-xs text-[var(--text-muted)] uppercase tracking-[0.2em]">
          {copyright}
        </p>
      </div>
    </footer>
  );
}
```

- [ ] **Step 2: Add to page.tsx**

```tsx
<Footer socialLinks={SITE_DATA.footer.socialLinks} copyright={SITE_DATA.footer.copyright} />
```

- [ ] **Step 3: Verify social link icons render and links work**

- [ ] **Step 4: Commit**

```bash
git add src/components/Footer.tsx src/app/page.tsx
git commit -m "feat: add Footer with social icons and copyright"
```

---

### Task 13: Main Page Assembly + Final Polish

**Files:**
- Modify: `src/app/page.tsx`

**Interfaces:**
- Consumes: All components, `SITE_DATA`
- Produces: Complete single-page app with all sections in order

- [ ] **Step 1: Write final page.tsx**

```tsx
// src/app/page.tsx
import { SITE_DATA } from "@/data/site";
import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Quote from "@/components/Quote";
import About from "@/components/About";
import Expertise from "@/components/Expertise";
import Cases from "@/components/Cases";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Nav brand={SITE_DATA.nav.brand} links={SITE_DATA.nav.links} />
      <Hero {...SITE_DATA.hero} />
      <Quote text={SITE_DATA.quote} />
      <About text={SITE_DATA.about} />
      <Expertise items={SITE_DATA.expertise} />
      <Cases items={SITE_DATA.cases} />
      <Experience items={SITE_DATA.experience} />
      <Contact
        email={SITE_DATA.contact.email}
        linkedin={SITE_DATA.contact.linkedin}
        wechat={SITE_DATA.contact.wechat}
      />
      <Footer
        socialLinks={SITE_DATA.footer.socialLinks}
        copyright={SITE_DATA.footer.copyright}
      />
    </main>
  );
}
```

- [ ] **Step 2: Run build to verify everything compiles**

```bash
npm run build
```

Expected: No errors, all pages built.

- [ ] **Step 3: Run dev server, scroll through entire page**

```bash
npm run dev
```

Check: all sections render, scroll is smooth, nav backdrop activates on scroll, expand/collapse works, modal works, form success works.

- [ ] **Step 4: Commit**

```bash
git add src/app/page.tsx
git commit -m "feat: assemble complete single-page site"
```

---

### Task 14: Build Verification

**Files:**
- Modify: `src/data/site.ts` (update placeholder email/LinkedIn if desired)

- [ ] **Step 1: Final production build**

```bash
npm run build
```

Expected: Zero errors, zero warnings. Note the build output size.

- [ ] **Step 2: Verify no TypeScript errors**

```bash
npx tsc --noEmit
```

Expected: Clean exit.

- [ ] **Step 3: Review and clean up any unused files**

```bash
ls src/app/
```

Remove any bootstrapped files not in use (e.g., `favicon.ico` is fine to keep, any page placeholders should be removed).

- [ ] **Step 4: Final commit**

```bash
git add -A
git commit -m "chore: finalize build, clean unused boilerplate"
```

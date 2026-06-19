import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "袁堂林 - Java技术架构师 · 技术经理",
  description:
    "15年Java技术栈开发与架构经验，8年+微服务架构设计与团队管理经验。专注汽车金融、金融风控、物流办公等领域核心系统架构设计与交付。",
  keywords: ["Java架构师", "技术经理", "金融科技", "微服务", "Spring Cloud", "汽车金融", "风控系统"],
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

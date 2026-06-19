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

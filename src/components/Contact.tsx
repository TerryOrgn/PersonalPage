"use client";

import { useState, FormEvent } from "react";

interface ContactProps {
  email: string;
  linkedin: string;
  wechat?: string;
}

export default function Contact({ email, linkedin, wechat }: ContactProps) {
  const [sent, setSent] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const body = `姓名：${form.name}%0D%0A邮箱：${form.email}%0D%0A%0D%0A${form.message}`;
    const mailto = `mailto:${email}?subject=${encodeURIComponent(form.subject)}&body=${body}`;

    setSent(true);
    window.location.href = mailto;
  };

  return (
    <section id="contact" className="px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-4 text-center">
          联系我
        </h2>
        <p className="text-center text-[var(--text-muted)] mb-16">
          有项目想聊？欢迎联系
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
          {/* Form */}
          <div>
            {sent ? (
              <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8 text-center">
                <p className="text-lg font-semibold mb-2">邮件客户端已打开</p>
                <p className="text-[var(--text-secondary)] mb-4">
                  如未自动打开，请手动发送至 {email}
                </p>
                <button
                  onClick={() => setSent(false)}
                  className="text-sm text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors underline"
                >
                  重新填写
                </button>
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
                电话
              </p>
              <p className="text-[var(--text-secondary)]">13681891649</p>
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

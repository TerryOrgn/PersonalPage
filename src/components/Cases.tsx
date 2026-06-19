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
              key="backdrop"
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            {/* Panel */}
            <motion.div
              key="panel"
              className="fixed inset-0 z-50 flex items-center justify-center p-6"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              onClick={() => setSelected(null)}
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

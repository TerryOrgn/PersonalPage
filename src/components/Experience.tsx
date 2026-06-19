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
                        key={item.id}
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

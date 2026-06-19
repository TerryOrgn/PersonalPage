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

import { EducationItem } from "@/data/site";

interface EducationProps {
  item: EducationItem;
}

export default function Education({ item }: EducationProps) {
  return (
    <section id="education" className="px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-16 text-center">
          教育经历
        </h2>
        <div className="bg-[var(--bg-card)] border border-[var(--border)] rounded-lg p-8 text-center max-w-md mx-auto">
          <p className="text-sm text-[var(--text-muted)] mb-2">{item.period}</p>
          <h3 className="text-xl font-semibold mb-2">{item.school}</h3>
          <p className="text-[var(--text-secondary)]">{item.degree}</p>
        </div>
      </div>
    </section>
  );
}

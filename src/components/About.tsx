interface AboutProps {
  paragraphs: string[];
}

export default function About({ paragraphs }: AboutProps) {
  return (
    <section id="about" className="flex justify-center px-6">
      <div className="max-w-3xl text-center">
        <h2 className="text-sm uppercase tracking-[0.3em] text-[var(--text-secondary)] mb-8">
          核心优势
        </h2>
        {paragraphs.map((text, i) => (
          <p
            key={i}
            className="text-base md:text-lg leading-relaxed text-[var(--text-secondary)] mb-4 last:mb-0"
          >
            {text}
          </p>
        ))}
      </div>
    </section>
  );
}

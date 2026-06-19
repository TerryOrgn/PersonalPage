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

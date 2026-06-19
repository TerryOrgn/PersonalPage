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

// src/components/Quote.tsx
interface QuoteProps {
  text: string;
}

export default function Quote({ text }: QuoteProps) {
  return (
    <section className="flex justify-center px-6">
      <blockquote className="max-w-3xl border-l-2 border-[var(--border)] pl-8 py-2">
        <p className="text-xl md:text-2xl italic text-[var(--text-secondary)] leading-relaxed">
          {text}
        </p>
      </blockquote>
    </section>
  );
}

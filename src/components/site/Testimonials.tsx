import { Quote } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

/**
 * DEPOIMENTOS
 * Substitua os placeholders abaixo por depoimentos reais de clientes.
 */
const testimonials = [
  { quote: "[Depoimento real do cliente]", name: "[Nome do cliente]", company: "[Empresa]" },
  { quote: "[Depoimento real do cliente]", name: "[Nome do cliente]", company: "[Empresa]" },
  { quote: "[Depoimento real do cliente]", name: "[Nome do cliente]", company: "[Empresa]" },
];

export function Testimonials() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Depoimentos"
          title={
            <>
              O que dizem sobre <span className="text-gradient">o trabalho.</span>
            </>
          }
          subtitle="Espaço reservado para depoimentos reais de clientes."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {testimonials.map((t, i) => (
            <Reveal key={i} delay={i * 100}>
              <figure className="surface-card surface-card-hover flex h-full flex-col p-7">
                <Quote className="h-6 w-6 text-primary" />
                <blockquote className="mt-5 flex-1 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-6 border-t border-border pt-5">
                  <span className="block text-sm font-bold">{t.name}</span>
                  <span className="block text-xs uppercase tracking-[0.16em] text-muted-foreground">
                    {t.company}
                  </span>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

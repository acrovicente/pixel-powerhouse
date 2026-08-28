import { Gauge, MessageCircle, Palette, ShieldCheck, Smartphone, Target } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const benefits = [
  {
    icon: Palette,
    title: "Design personalizado",
    text: "Seu projeto não precisa parecer igual ao site de qualquer outra empresa.",
  },
  {
    icon: Smartphone,
    title: "Responsivo",
    text: "Experiência adaptada para celular, tablet e computador.",
  },
  {
    icon: Target,
    title: "Foco em conversão",
    text: "Elementos organizados para facilitar a decisão e o contato.",
  },
  {
    icon: Gauge,
    title: "Performance",
    text: "Interface leve e otimizada para uma experiência rápida.",
  },
  {
    icon: ShieldCheck,
    title: "Credibilidade",
    text: "Apresente sua empresa de forma profissional.",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    text: "Facilite o contato direto com seus potenciais clientes.",
  },
];

export function Benefits() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Benefícios"
          title={
            <>
              Por que investir em um <span className="text-gradient">site profissional?</span>
            </>
          }
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((b, i) => (
            <Reveal key={b.title} delay={(i % 3) * 90}>
              <article className="surface-card surface-card-hover group grid h-full grid-cols-[auto_minmax(0,1fr)] gap-4 p-6">
                <span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl border border-border bg-white/[0.03] text-primary transition-colors duration-500 group-hover:border-primary/40">
                  <b.icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <h3 className="text-base font-bold tracking-tight">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{b.text}</p>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const steps = [
  { n: "01", title: "Conversa", text: "Você me explica seu negócio, objetivo e o que precisa." },
  { n: "02", title: "Planejamento", text: "Definimos a estrutura, conteúdo e direção visual." },
  {
    n: "03",
    title: "Design e desenvolvimento",
    text: "O projeto é desenvolvido de acordo com a proposta aprovada.",
  },
  {
    n: "04",
    title: "Publicação",
    text: "Depois dos ajustes finais, o site fica pronto para receber seus visitantes.",
  },
];

export function Process() {
  return (
    <section id="processo" className="relative py-20 md:py-32">
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Como funciona"
          title={
            <>
              Do primeiro contato ao <span className="text-gradient">seu novo site.</span>
            </>
          }
        />

        <div className="relative mt-14">
          <div
            aria-hidden
            className="absolute left-[1.35rem] top-2 bottom-2 w-px md:left-0 md:right-0 md:top-[1.35rem] md:bottom-auto md:h-px md:w-full"
            style={{
              background:
                "linear-gradient(to bottom, transparent, color-mix(in oklab, var(--primary) 45%, transparent), transparent)",
            }}
          />
          <ol className="grid grid-cols-1 gap-8 md:grid-cols-4 md:gap-6">
            {steps.map((step, i) => (
              <Reveal as="li" key={step.n} delay={i * 110} className="relative pl-14 md:pl-0">
                <span className="absolute left-0 top-0 grid h-11 w-11 place-items-center rounded-full border border-primary/40 bg-background text-xs font-black text-primary shadow-[0_0_28px_-6px_var(--glow-strong)] md:static md:mb-6">
                  {step.n}
                </span>
                <h3 className="text-lg font-extrabold tracking-tight">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.text}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

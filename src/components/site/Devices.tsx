import tecnologia from "@/assets/project-tecnologia.jpg";
import clinica from "@/assets/project-clinica.jpg";
import landing from "@/assets/project-landing.jpg";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

export function Devices() {
  return (
    <section className="relative overflow-hidden py-20 md:py-32">
      <div aria-hidden className="glow-orb left-1/2 top-1/2 h-[30rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 opacity-25" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Responsivo"
          title={
            <>
              Seu projeto bonito em <span className="text-gradient">qualquer tela.</span>
            </>
          }
          subtitle="Todos os projetos são pensados para funcionar perfeitamente em computador, tablet e celular."
        />

        <Reveal delay={120} className="mt-16">
          <div className="relative mx-auto max-w-5xl">
            {/* desktop */}
            <div className="surface-card overflow-hidden p-2 shadow-[0_40px_120px_-50px_var(--glow-strong)]">
              <div className="flex items-center gap-1.5 px-3 py-2">
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-white/15" />
                <span className="h-2 w-2 rounded-full bg-primary/60" />
              </div>
              <img
                src={tecnologia}
                alt="Site profissional exibido em monitor desktop"
                width={1280}
                height={912}
                loading="lazy"
                className="aspect-[16/9] w-full rounded-lg border border-border object-cover object-top"
              />
            </div>

            {/* tablet + mobile */}
            <div className="mt-5 grid grid-cols-2 gap-4 md:absolute md:-bottom-14 md:-right-6 md:mt-0 md:w-[46%] md:grid-cols-[1.35fr_1fr]">
              <div className="surface-card overflow-hidden p-1.5">
                <img
                  src={clinica}
                  alt="Site profissional exibido em tablet"
                  width={1280}
                  height={912}
                  loading="lazy"
                  className="aspect-[3/4] w-full rounded-lg border border-border object-cover object-top"
                />
              </div>
              <div className="surface-card overflow-hidden p-1.5">
                <img
                  src={landing}
                  alt="Site profissional exibido em smartphone"
                  width={1280}
                  height={912}
                  loading="lazy"
                  className="aspect-[9/16] w-full rounded-[1.1rem] border border-border object-cover object-top"
                />
              </div>
            </div>
          </div>
        </Reveal>

        <ul className="mt-10 flex flex-wrap justify-center gap-2.5 md:mt-24">
          {["Desktop", "Tablet", "Mobile"].map((label, i) => (
            <Reveal as="li" key={label} delay={i * 80}>
              <span className="inline-flex rounded-full border border-border bg-white/[0.03] px-5 py-2 text-xs font-bold uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

import { whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

export function FinalCta() {
  return (
    <section id="contato" className="relative overflow-hidden py-24 md:py-36">
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="glow-orb left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 opacity-60 animate-pulse-glow" />
        <div className="absolute left-1/2 top-0 h-px w-2/3 -translate-x-1/2 hairline" />
      </div>

      <div className="container-page relative text-center">
        <Reveal as="h2" className="mx-auto max-w-3xl text-[1.9rem] font-extrabold leading-[1.1] sm:text-4xl md:text-[3.2rem]">
          Vamos transformar sua ideia em um{" "}
          <span className="text-gradient">site profissional?</span>
        </Reveal>
        <Reveal delay={100}>
          <p className="mx-auto mt-5 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground md:text-lg">
            Conte um pouco sobre seu projeto e vamos conversar sobre a melhor solução para sua
            empresa.
          </p>
        </Reveal>
        <Reveal delay={180} className="mt-10">
          <CtaButton
            href={whatsappLink()}
            size="lg"
            className="w-full px-10 py-5 text-base uppercase tracking-[0.12em] sm:w-auto"
          >
            Quero meu site
          </CtaButton>
        </Reveal>
        <Reveal delay={240}>
          <p className="mt-5 text-xs uppercase tracking-[0.2em] text-muted-foreground">
            Atendimento direto pelo WhatsApp
          </p>
        </Reveal>
      </div>
    </section>
  );
}

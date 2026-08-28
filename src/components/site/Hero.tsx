import { ArrowRight, Sparkles } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { CtaButton } from "./CtaButton";

const particles = [
  { left: "12%", top: "28%", delay: "0s", size: 3 },
  { left: "22%", top: "62%", delay: "2.5s", size: 2 },
  { left: "38%", top: "18%", delay: "1.2s", size: 2 },
  { left: "58%", top: "70%", delay: "4s", size: 3 },
  { left: "72%", top: "26%", delay: "3.1s", size: 2 },
  { left: "84%", top: "54%", delay: "1.8s", size: 3 },
  { left: "48%", top: "40%", delay: "5.2s", size: 2 },
];

export function Hero() {
  return (
    <section id="inicio" className="relative isolate overflow-hidden pb-24 pt-32 md:pb-36 md:pt-44">
      {/* luz de fundo */}
      <div aria-hidden className="pointer-events-none absolute inset-0 -z-10">
        <div className="glow-orb left-1/2 top-[-14rem] h-[34rem] w-[34rem] -translate-x-1/2 opacity-70 animate-pulse-glow" />
        <div className="glow-orb -left-24 top-40 h-[22rem] w-[22rem] opacity-35" />
        <div className="glow-orb -right-20 top-64 h-[24rem] w-[24rem] opacity-30" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage:
              "linear-gradient(to right, oklch(1 0 0 / 4%) 1px, transparent 1px), linear-gradient(to bottom, oklch(1 0 0 / 4%) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "radial-gradient(ellipse 70% 60% at 50% 35%, black, transparent 75%)",
          }}
        />
        {particles.map((p, i) => (
          <span
            key={i}
            className="absolute rounded-full bg-primary/80 animate-float-slow"
            style={{
              left: p.left,
              top: p.top,
              width: p.size,
              height: p.size,
              animationDelay: p.delay,
              boxShadow: "0 0 12px 2px var(--glow-strong)",
            }}
          />
        ))}
      </div>

      <div className="container-page relative text-center">
        <div
          className="eyebrow animate-enter mx-auto rounded-full border border-border bg-white/[0.03] px-4 py-2"
          style={{ animationDelay: "40ms" }}
        >
          <Sparkles className="h-3.5 w-3.5 text-primary" />
          Criação de sites e landing pages
        </div>

        <h1
          className="animate-enter mx-auto mt-7 max-w-4xl text-[2.15rem] font-extrabold leading-[1.08] sm:text-5xl md:text-6xl lg:text-[4.25rem]"
          style={{ animationDelay: "120ms" }}
        >
          Seu site não precisa apenas ser bonito.
          <br className="hidden sm:block" />{" "}
          <span className="text-gradient">Ele precisa gerar oportunidades.</span>
        </h1>

        <p
          className="animate-enter mx-auto mt-6 max-w-2xl text-[0.98rem] leading-relaxed text-muted-foreground md:text-lg"
          style={{ animationDelay: "220ms" }}
        >
          Criamos sites, landing pages e experiências digitais profissionais para empresas que
          querem apresentar melhor seus serviços, conquistar novos clientes e fortalecer sua
          presença online.
        </p>

        <div
          className="animate-enter mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center"
          style={{ animationDelay: "320ms" }}
        >
          <CtaButton href={whatsappLink()} size="lg">
            Quero criar meu site
            <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </CtaButton>
          <CtaButton href="#projetos" variant="ghost" size="lg" external={false}>
            Ver projetos
          </CtaButton>
        </div>
      </div>

      {/* arco luminoso */}
      <div aria-hidden className="pointer-events-none relative mt-16 h-40 md:mt-24 md:h-56">
        <div
          className="absolute left-1/2 top-0 h-[46rem] w-[150%] max-w-[1700px] -translate-x-1/2 rounded-[50%] border-t"
          style={{
            borderColor: "color-mix(in oklab, var(--primary) 60%, transparent)",
            boxShadow: "0 -22px 90px -18px var(--glow-strong), inset 0 24px 90px -60px var(--glow-strong)",
          }}
        />
        <div
          className="absolute left-1/2 top-0 h-24 w-[70%] -translate-x-1/2 opacity-80"
          style={{
            background: "radial-gradient(ellipse at center top, var(--glow-strong), transparent 70%)",
            filter: "blur(28px)",
          }}
        />
      </div>
    </section>
  );
}

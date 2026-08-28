import { ArrowRight } from "lucide-react";
import { whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";
import { CtaButton } from "./CtaButton";

export function Consult() {
  return (
    <section className="relative py-10 md:py-16">
      <div className="container-page">
        <Reveal>
          <div className="surface-card relative overflow-hidden p-8 md:p-14">
            <div aria-hidden className="glow-orb -right-24 -top-24 h-72 w-72 opacity-40" />
            <div className="relative grid gap-8 lg:grid-cols-[minmax(0,1.3fr)_auto] lg:items-center">
              <div className="min-w-0">
                <h2 className="text-[1.6rem] font-extrabold leading-tight sm:text-3xl md:text-[2.35rem]">
                  Não sabe qual tipo de site sua empresa{" "}
                  <span className="text-gradient">precisa?</span>
                </h2>
                <p className="mt-4 max-w-xl text-[0.95rem] leading-relaxed text-muted-foreground md:text-base">
                  Sem problema. Durante nossa conversa, posso entender seu negócio e indicar a
                  estrutura mais adequada para seu objetivo.
                </p>
              </div>
              <CtaButton
                href={whatsappLink("Olá! Ainda não sei qual tipo de site preciso. Pode me ajudar?")}
                size="lg"
                className="w-full lg:w-auto"
              >
                Falar com um especialista
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </CtaButton>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import { useState } from "react";
import { Plus } from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { cn } from "@/lib/utils";

export const faqs = [
  {
    q: "Quanto custa criar um site?",
    a: "O valor é definido de acordo com a complexidade do projeto: número de páginas, recursos, conteúdo e nível de personalização. Após entender seu objetivo, envio uma proposta clara e sem surpresas.",
  },
  {
    q: "Quanto tempo leva para desenvolver?",
    a: "O prazo depende do escopo e da agilidade no envio das informações e materiais. Definimos juntos um cronograma realista antes de iniciar o projeto.",
  },
  {
    q: "O site funciona no celular?",
    a: "Sim. Todos os projetos são desenvolvidos com design responsivo e a experiência mobile é tratada como prioridade, não como adaptação.",
  },
  {
    q: "Posso enviar minhas próprias imagens?",
    a: "Pode. Trabalho com as imagens da sua empresa e, quando necessário, indico alternativas profissionais para manter o padrão visual do projeto.",
  },
  {
    q: "Vocês criam o conteúdo?",
    a: "Sim, posso ajudar na organização e na escrita dos textos com foco em clareza e conversão, sempre alinhado às informações que você fornece.",
  },
  {
    q: "Posso pedir alterações?",
    a: "Sim. O projeto passa por etapas de revisão e as alterações combinadas são feitas antes da publicação.",
  },
  {
    q: "Vocês configuram o botão do WhatsApp?",
    a: "Sim. O contato por WhatsApp é integrado nos pontos estratégicos da página, com mensagem inicial já preparada.",
  },
  {
    q: "Posso ter domínio próprio?",
    a: "Sim. O site pode ser publicado no seu próprio domínio e oriento você em cada passo da configuração.",
  },
];

export function Faq() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative py-20 md:py-32">
      <div className="container-page relative">
        <SectionHeading
          eyebrow="FAQ"
          title={
            <>
              Perguntas <span className="text-gradient">frequentes.</span>
            </>
          }
        />

        <div className="mx-auto mt-14 max-w-3xl space-y-3">
          {faqs.map((item, i) => {
            const isOpen = open === i;
            return (
              <Reveal key={item.q} delay={Math.min(i, 4) * 60}>
                <div className={cn("surface-card overflow-hidden", isOpen && "border-primary/35")}>
                  <button
                    type="button"
                    onClick={() => setOpen(isOpen ? null : i)}
                    aria-expanded={isOpen}
                    className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-5 py-5 text-left md:px-7"
                  >
                    <span className="min-w-0 text-[0.98rem] font-bold tracking-tight md:text-lg">
                      {item.q}
                    </span>
                    <Plus
                      className={cn(
                        "h-5 w-5 shrink-0 text-primary transition-transform duration-500",
                        isOpen && "rotate-45",
                      )}
                    />
                  </button>
                  <div
                    className={cn(
                      "grid transition-all duration-500 ease-out",
                      isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                    )}
                  >
                    <p className="overflow-hidden px-5 text-sm leading-relaxed text-muted-foreground md:px-7">
                      <span className="block pb-6">{item.a}</span>
                    </p>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}

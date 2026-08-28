import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const pillars = [
  { n: "01", title: "Atrair", text: "Uma apresentação visual que chama atenção." },
  { n: "02", title: "Convencer", text: "Informações organizadas para transmitir confiança." },
  { n: "03", title: "Converter", text: "Chamadas para ação que facilitam o contato." },
];

export function Pillars() {
  return (
    <section className="relative py-20 md:py-32">
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Estratégia"
          title={
            <>
              Não criamos apenas sites bonitos.
              <br />
              <span className="text-gradient">Criamos ferramentas para o seu negócio.</span>
            </>
          }
          subtitle="Um bom site precisa explicar o que sua empresa faz, transmitir confiança, apresentar seus diferenciais e facilitar o próximo passo do cliente."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 md:grid-cols-3">
          {pillars.map((p, i) => (
            <Reveal key={p.n} delay={i * 100}>
              <article className="surface-card surface-card-hover h-full p-7 md:p-9">
                <span
                  className="block text-5xl font-black leading-none md:text-6xl"
                  style={{ backgroundImage: "var(--gradient-text)", WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent" }}
                >
                  {p.n}
                </span>
                <h3 className="mt-6 text-xl font-extrabold uppercase tracking-tight">{p.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">{p.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import {
  Stethoscope,
  UserRound,
  Scissors,
  UtensilsCrossed,
  Building2,
  Rocket,
  Home,
  Briefcase,
} from "lucide-react";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";

const services = [
  {
    icon: Stethoscope,
    title: "Clínicas",
    text: "Sites elegantes para clínicas e profissionais da saúde, com apresentação dos serviços, equipe, localização e botão direto para agendamento.",
  },
  {
    icon: UserRound,
    title: "Médicos e profissionais",
    text: "Uma presença digital profissional para apresentar sua experiência, especialidades, serviços e facilitar o contato.",
  },
  {
    icon: Scissors,
    title: "Salões e estética",
    text: "Sites visualmente atraentes para apresentar serviços, trabalhos, profissionais e levar clientes diretamente para o WhatsApp.",
  },
  {
    icon: UtensilsCrossed,
    title: "Restaurantes",
    text: "Cardápios digitais, páginas de apresentação e experiências mobile pensadas para facilitar pedidos e contatos.",
  },
  {
    icon: Building2,
    title: "Empresas",
    text: "Sites institucionais modernos para empresas que precisam transmitir credibilidade e profissionalismo.",
  },
  {
    icon: Rocket,
    title: "Landing pages",
    text: "Páginas criadas com foco em campanhas, geração de leads, anúncios e conversão.",
  },
  {
    icon: Home,
    title: "Imobiliárias",
    text: "Apresente imóveis, diferenciais, localização e facilite o contato entre clientes e sua equipe.",
  },
  {
    icon: Briefcase,
    title: "Profissionais autônomos",
    text: "Uma página profissional para transformar sua presença online em uma ferramenta de vendas.",
  },
];

export function Services() {
  return (
    <section id="servicos" className="relative py-20 md:py-32">
      <div aria-hidden className="glow-orb -left-40 top-1/3 h-[26rem] w-[26rem] opacity-25" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="O que eu posso criar para você"
          title={
            <>
              Um site pensado para o <span className="text-gradient">seu negócio.</span>
            </>
          }
          subtitle="Cada empresa possui um objetivo diferente. Por isso, criamos projetos personalizados para diferentes tipos de negócios."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {services.map((service, i) => (
            <Reveal key={service.title} delay={(i % 4) * 80}>
              <article className="surface-card surface-card-hover group flex h-full flex-col p-6">
                <span className="grid h-11 w-11 place-items-center rounded-xl border border-border bg-white/[0.03] text-primary transition-colors duration-500 group-hover:border-primary/40">
                  <service.icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 text-base font-bold tracking-tight">{service.title}</h3>
                <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
                  {service.text}
                </p>
                <span className="mt-6 block h-px w-full bg-border transition-colors duration-500 group-hover:bg-primary/40" />
                <span className="mt-3 text-[0.7rem] font-bold tracking-[0.18em] text-muted-foreground">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

import { ArrowUpRight } from "lucide-react";
import { projects } from "@/data/projects";
import { whatsappLink } from "@/config/site";
import { Reveal } from "./Reveal";
import { SectionHeading } from "./SectionHeading";
import { CtaButton } from "./CtaButton";
import { cn } from "@/lib/utils";

export function Portfolio() {
  return (
    <section id="projetos" className="relative py-20 md:py-32">
      <div aria-hidden className="glow-orb -right-40 top-24 h-[28rem] w-[28rem] opacity-25" />
      <div className="container-page relative">
        <SectionHeading
          eyebrow="Portfólio"
          title={
            <>
              Veja o que <span className="text-gradient">podemos criar.</span>
            </>
          }
          subtitle="Alguns exemplos de estilos e experiências que podem ser desenvolvidos para diferentes negócios."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 lg:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={(i % 2) * 90}
              className={cn(project.wide && "lg:col-span-2")}
            >
              <article className="surface-card surface-card-hover group overflow-hidden p-2.5">
                <div className="relative overflow-hidden rounded-xl border border-border">
                  <img
                    src={project.image}
                    alt={`Exemplo de site: ${project.title} — ${project.category}`}
                    width={1280}
                    height={912}
                    loading="lazy"
                    className={cn(
                      "w-full object-cover object-top transition-transform duration-[900ms] ease-out group-hover:scale-[1.03]",
                      project.wide ? "aspect-[16/9]" : "aspect-[4/3]",
                    )}
                  />
                  <div className="absolute inset-0 flex items-end bg-gradient-to-t from-background via-background/60 to-transparent p-5 opacity-0 transition-opacity duration-500 group-hover:opacity-100 sm:p-7">
                    <div className="grid w-full grid-cols-[minmax(0,1fr)_auto] items-end gap-4">
                      <div className="min-w-0">
                        <p className="text-[0.68rem] font-bold tracking-[0.2em] text-primary uppercase">
                          {project.category}
                        </p>
                        <h3 className="mt-1.5 truncate text-lg font-extrabold sm:text-xl">
                          {project.title}
                        </h3>
                        <p className="mt-1 hidden text-sm text-muted-foreground sm:block">
                          {project.description}
                        </p>
                      </div>
                      {project.url ? (
                        <CtaButton href={project.url} className="shrink-0">
                          Ver projeto
                          <ArrowUpRight className="h-4 w-4" />
                        </CtaButton>
                      ) : null}
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-[minmax(0,1fr)_auto] items-center gap-3 px-3 py-4">
                  <div className="min-w-0">
                    <h3 className="truncate text-base font-bold tracking-tight">{project.title}</h3>
                    <p className="truncate text-sm text-muted-foreground">{project.description}</p>
                  </div>
                  <span className="shrink-0 rounded-full border border-border px-3 py-1 text-[0.68rem] font-bold uppercase tracking-[0.14em] text-muted-foreground">
                    {project.category}
                  </span>
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 flex justify-center">
          <CtaButton
            href={whatsappLink("Olá! Vi seu portfólio e gostaria de um site parecido para o meu negócio.")}
            size="lg"
          >
            Quero um projeto assim
          </CtaButton>
        </Reveal>
      </div>
    </section>
  );
}

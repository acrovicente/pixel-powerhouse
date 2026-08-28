import { MonitorSmartphone, PenTool, Smartphone, Target } from "lucide-react";
import { Reveal } from "./Reveal";

const items = [
  { icon: PenTool, label: "Sites personalizados" },
  { icon: MonitorSmartphone, label: "Design responsivo" },
  { icon: Smartphone, label: "Experiência mobile" },
  { icon: Target, label: "Foco em conversão" },
];

export function TrustStrip() {
  return (
    <section className="relative py-16 md:py-24">
      <div className="container-page">
        <Reveal as="h2" className="mx-auto max-w-3xl text-center text-lg font-bold uppercase leading-snug tracking-[0.12em] text-muted-foreground md:text-2xl md:tracking-[0.16em]">
          Um site profissional muda a forma como seu cliente{" "}
          <span className="text-foreground">enxerga sua empresa</span>
        </Reveal>

        <div className="mt-10 hairline" />

        <ul className="mt-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((item, i) => (
            <Reveal as="li" key={item.label} delay={i * 90}>
              <div className="surface-card surface-card-hover flex items-center gap-3 px-5 py-4">
                <item.icon className="h-5 w-5 shrink-0 text-primary" />
                <span className="min-w-0 text-sm font-semibold">{item.label}</span>
              </div>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}

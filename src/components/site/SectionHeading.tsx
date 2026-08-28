import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  subtitle?: ReactNode;
  align?: "center" | "left";
};

export function SectionHeading({ eyebrow, title, subtitle, align = "center" }: Props) {
  return (
    <div className={align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">
            <span className="h-px w-8 bg-primary" />
            {eyebrow}
          </span>
        </Reveal>
      )}
      <Reveal as="h2" delay={80} className="mt-4 text-[1.85rem] font-extrabold leading-[1.12] sm:text-4xl md:text-[2.85rem]">
        {title}
      </Reveal>
      {subtitle && (
        <Reveal delay={160}>
          <p className="mt-4 text-[0.95rem] leading-relaxed text-muted-foreground md:text-lg">
            {subtitle}
          </p>
        </Reveal>
      )}
    </div>
  );
}

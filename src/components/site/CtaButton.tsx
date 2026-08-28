import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
  size?: "md" | "lg";
  className?: string;
  external?: boolean;
  ariaLabel?: string;
};

export function CtaButton({
  href,
  children,
  variant = "primary",
  size = "md",
  className,
  external = true,
  ariaLabel,
}: Props) {
  const isAnchor = href.startsWith("#");
  return (
    <a
      href={href}
      aria-label={ariaLabel}
      {...(external && !isAnchor ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      className={cn(
        "group relative inline-flex items-center justify-center gap-2 rounded-full font-semibold tracking-tight transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "px-8 py-4 text-base" : "px-6 py-3 text-sm",
        variant === "primary"
          ? "text-primary-foreground shadow-[0_10px_40px_-14px_var(--glow-strong)] hover:-translate-y-0.5 hover:shadow-[0_18px_55px_-14px_var(--glow-strong)]"
          : "border border-border-strong bg-white/[0.02] text-foreground hover:-translate-y-0.5 hover:border-primary/50 hover:bg-white/[0.05]",
        className,
      )}
      style={variant === "primary" ? { backgroundImage: "var(--gradient-primary)" } : undefined}
    >
      {children}
    </a>
  );
}

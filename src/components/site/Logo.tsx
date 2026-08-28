import { BRAND } from "@/config/site";

export function Logo({ className }: { className?: string }) {
  return (
    <a href="#inicio" className={`flex items-center gap-2.5 ${className ?? ""}`} aria-label={`${BRAND.name} ${BRAND.suffix}`}>
      <span
        className="relative grid h-9 w-9 shrink-0 place-items-center rounded-xl border border-border"
        style={{ backgroundImage: "var(--gradient-primary)" }}
      >
        <span className="text-sm font-black text-primary-foreground">V</span>
      </span>
      <span className="text-[1.05rem] font-extrabold leading-none tracking-tight">
        {BRAND.name}
        <span className="text-muted-foreground">.{BRAND.suffix.toLowerCase()}</span>
      </span>
    </a>
  );
}

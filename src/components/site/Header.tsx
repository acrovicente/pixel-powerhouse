import { useEffect, useState } from "react";
import { Menu, X, MessageCircle } from "lucide-react";
import { NAV_LINKS, whatsappLink } from "@/config/site";
import { Logo } from "./Logo";
import { CtaButton } from "./CtaButton";
import { cn } from "@/lib/utils";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-colors duration-500",
        scrolled ? "glass-bar" : "border-b border-transparent",
      )}
      style={
        scrolled
          ? undefined
          : { backgroundColor: "color-mix(in oklab, var(--background) 35%, transparent)", backdropFilter: "blur(10px)" }
      }
    >
      <div className="container-page flex h-16 items-center justify-between gap-4 md:h-20">
        <Logo />

        <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-colors hover:bg-white/[0.04] hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <CtaButton href={whatsappLink()} className="hidden lg:inline-flex">
            Solicitar orçamento
          </CtaButton>

          <a
            href={whatsappLink()}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Falar pelo WhatsApp"
            className="grid h-11 w-11 place-items-center rounded-full border border-border-strong bg-white/[0.03] text-primary transition-colors hover:border-primary/50 lg:hidden"
          >
            <MessageCircle className="h-5 w-5" />
          </a>

          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            aria-expanded={open}
            className="grid h-11 w-11 place-items-center rounded-full border border-border-strong bg-white/[0.03] transition-colors hover:border-primary/50 lg:hidden"
          >
            {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {open && (
        <div className="glass-bar lg:hidden">
          <nav className="container-page flex flex-col gap-1 py-4" aria-label="Navegação mobile">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-xl px-4 py-3.5 text-base font-medium text-muted-foreground transition-colors hover:bg-white/[0.05] hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <CtaButton href={whatsappLink()} size="lg" className="mt-2 w-full">
              Solicitar orçamento
            </CtaButton>
          </nav>
        </div>
      )}
    </header>
  );
}

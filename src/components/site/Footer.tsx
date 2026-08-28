import { Instagram, MessageCircle } from "lucide-react";
import { BRAND, INSTAGRAM_URL, whatsappLink } from "@/config/site";
import { Logo } from "./Logo";

const links = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Processo", href: "#processo" },
  { label: "FAQ", href: "#faq" },
  { label: "Contato", href: "#contato" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border py-14 md:py-16">
      <div className="container-page">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)_minmax(0,1fr)]">
          <div className="min-w-0">
            <Logo />
            <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted-foreground">
              {BRAND.tagline}
            </p>
          </div>

          <nav aria-label="Links do rodapé">
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Navegação
            </h3>
            <ul className="mt-5 grid grid-cols-2 gap-y-3 text-sm">
              {links.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-foreground/85 transition-colors hover:text-primary">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-muted-foreground">
              Contato
            </h3>
            <div className="mt-5 flex flex-col gap-3 text-sm">
              <a
                href={whatsappLink()}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-foreground/85 transition-colors hover:text-primary"
              >
                <MessageCircle className="h-4 w-4 text-primary" />
                WhatsApp
              </a>
              {INSTAGRAM_URL ? (
                <a
                  href={INSTAGRAM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-foreground/85 transition-colors hover:text-primary"
                >
                  <Instagram className="h-4 w-4 text-primary" />
                  Instagram
                </a>
              ) : null}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-border pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {BRAND.name} {BRAND.suffix}. Todos os direitos reservados.
          </p>
          <p>Criação de sites, landing pages e páginas de alta conversão.</p>
        </div>
      </div>
    </footer>
  );
}

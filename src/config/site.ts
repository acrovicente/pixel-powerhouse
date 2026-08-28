/**
 * CONFIGURAÇÃO CENTRAL DO SITE
 * ---------------------------------------------------------------
 * Troque o número do WhatsApp aqui (formato internacional, apenas dígitos).
 * Exemplo: "5511999999999" -> +55 11 99999-9999
 *
 * Enquanto estiver vazio, os botões abrem um aviso de configuração
 * em vez de um número fictício.
 */
export const WHATSAPP_NUMBER = "";

export const WHATSAPP_MESSAGE =
  "Olá! Vi seu site e gostaria de solicitar um orçamento para criação de um site.";

export const INSTAGRAM_URL = ""; // opcional: "https://instagram.com/seuperfil"

export const BRAND = {
  name: "Vertex",
  suffix: "Studio",
  tagline:
    "Sites profissionais pensados para apresentar, posicionar e conectar sua empresa aos seus clientes.",
};

export function whatsappLink(message: string = WHATSAPP_MESSAGE): string {
  if (!WHATSAPP_NUMBER) return "#configurar-whatsapp";
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const NAV_LINKS = [
  { label: "Início", href: "#inicio" },
  { label: "Serviços", href: "#servicos" },
  { label: "Projetos", href: "#projetos" },
  { label: "Como funciona", href: "#processo" },
  { label: "FAQ", href: "#faq" },
];

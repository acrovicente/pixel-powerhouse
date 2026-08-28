import clinica from "@/assets/project-clinica.jpg";
import imobiliaria from "@/assets/project-imobiliaria.jpg";
import tecnologia from "@/assets/project-tecnologia.jpg";
import salao from "@/assets/project-salao.jpg";
import restaurante from "@/assets/project-restaurante.jpg";
import landing from "@/assets/project-landing.jpg";

export type Project = {
  title: string;
  category: string;
  image: string;
  description: string;
  /** Link do projeto. Deixe "" para esconder o botão "Ver projeto". */
  url: string;
  /** true = ocupa duas colunas no desktop */
  wide?: boolean;
};

/**
 * PORTFÓLIO
 * ---------------------------------------------------------------
 * Para adicionar um projeto: copie um objeto abaixo, troque os textos
 * e importe a nova imagem no topo do arquivo (src/assets/...).
 */
export const projects: Project[] = [
  {
    title: "Clínica Premium",
    category: "Saúde",
    image: clinica,
    description:
      "Apresentação de especialidades, equipe e localização com agendamento direto.",
    url: "",
    wide: true,
  },
  {
    title: "Landing Page para Imobiliária",
    category: "Imobiliário",
    image: imobiliaria,
    description: "Vitrine de imóveis com foco em captação de contatos qualificados.",
    url: "",
  },
  {
    title: "Empresa de Tecnologia",
    category: "Institucional",
    image: tecnologia,
    description: "Site institucional moderno para transmitir autoridade e credibilidade.",
    url: "",
  },
  {
    title: "Salão de Beleza",
    category: "Estética",
    image: salao,
    description: "Experiência visual elegante conduzindo o cliente até o WhatsApp.",
    url: "",
  },
  {
    title: "Restaurante / Cardápio Digital",
    category: "Alimentação",
    image: restaurante,
    description: "Cardápio digital rápido e otimizado para o celular.",
    url: "",
  },
  {
    title: "Landing Page de Alta Conversão",
    category: "Campanhas",
    image: landing,
    description: "Estrutura desenhada para anúncios, leads e conversão.",
    url: "",
    wide: true,
  },
];

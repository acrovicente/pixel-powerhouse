import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/site/Header";
import { Hero } from "@/components/site/Hero";
import { TrustStrip } from "@/components/site/TrustStrip";
import { Services } from "@/components/site/Services";
import { Portfolio } from "@/components/site/Portfolio";
import { Pillars } from "@/components/site/Pillars";
import { Devices } from "@/components/site/Devices";
import { Benefits } from "@/components/site/Benefits";
import { Process } from "@/components/site/Process";
import { Consult } from "@/components/site/Consult";
import { Testimonials } from "@/components/site/Testimonials";
import { Faq, faqs } from "@/components/site/Faq";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

const title = "Criação de Sites e Landing Pages de Alta Conversão";
const description =
  "Criação de sites profissionais e landing pages de alta conversão para clínicas, empresas, salões, restaurantes e profissionais. Projetos personalizados e responsivos.";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: `${title} | Vertex Studio` },
      { name: "description", content: description },
      { property: "og:title", content: `${title} | Vertex Studio` },
      { property: "og:description", content: description },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    links: [{ rel: "canonical", href: "/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Vertex Studio",
          description,
          serviceType: [
            "Criação de sites",
            "Criação de landing pages",
            "Desenvolvimento de sites responsivos",
          ],
        }),
      },
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: { "@type": "Answer", text: f.a },
          })),
        }),
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Header />
      <main>
        <Hero />
        <TrustStrip />
        <Services />
        <Portfolio />
        <Pillars />
        <Devices />
        <Benefits />
        <Process />
        <Consult />
        <Testimonials />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <WhatsAppFab />
    </div>
  );
}

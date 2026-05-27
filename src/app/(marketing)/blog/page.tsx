import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas de beleza, tendências e conteúdo exclusivo do Liivv Beauty.",
};

export default function BlogPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="container-site section-padding text-center">
          <Badge variant="peach" className="mb-4">Conteúdo</Badge>
          <h1 className="text-display-xl font-display font-light text-light leading-tight mb-4">
            Blog <span className="text-gradient">Liivv</span>
          </h1>
          <p className="font-body text-light-muted text-lg max-w-lg mx-auto">
            Dicas de beleza, tendências e conteúdo exclusivo para a mulher corporativa.
            Em breve por aqui.
          </p>
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

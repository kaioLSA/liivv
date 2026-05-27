import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Transformações",
  description: "Confira os resultados e transformações realizadas no Liivv Beauty.",
};

export default function ProjectsPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="container-site section-padding text-center">
          <Badge variant="peach" className="mb-4">Galeria</Badge>
          <h1 className="text-display-xl font-display font-light text-light leading-tight mb-4">
            Nossas <span className="text-gradient">transformações</span>
          </h1>
          <p className="font-body text-light-muted text-lg max-w-lg mx-auto">
            Em breve, nossa galeria completa de resultados e transformações estará disponível aqui.
          </p>
        </div>
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

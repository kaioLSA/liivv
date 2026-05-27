import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Serviços",
  description:
    "Portfólio completo de serviços de beleza do Liivv Beauty: escova, corte, coloração, mechas, manicure e tratamentos.",
};

export default function ServicesPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="container-site section-padding-sm text-center">
          <Badge variant="peach" className="mb-4">O que oferecemos</Badge>
          <h1 className="text-display-xl font-display font-light text-light leading-tight">
            Nossos <span className="text-gradient">serviços</span>
          </h1>
        </div>
        <ServicesSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AboutSection } from "@/components/sections/AboutSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { CTASection } from "@/components/sections/CTASection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Sobre Nós",
  description:
    "Conheça a história e os valores do Liivv Beauty, o salão corporativo premium de São Paulo.",
};

export default function AboutPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="container-site section-padding-sm text-center">
          <Badge variant="peach" className="mb-4">Nossa história</Badge>
          <h1 className="text-display-xl font-display font-light text-light leading-tight">
            Sobre o <span className="text-gradient">Liivv Beauty</span>
          </h1>
        </div>
        <AboutSection />
        <TimelineSection />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

import type { Metadata } from "next";
import { Navbar } from "@/components/navigation/Navbar";
import { Footer } from "@/components/layout/Footer";
import { ContactSection } from "@/components/sections/ContactSection";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = {
  title: "Contato",
  description:
    "Entre em contato com o Liivv Beauty e agende seu horário. Complexo Rochavera, São Paulo.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="pt-28">
        <div className="container-site section-padding-sm text-center">
          <Badge variant="peach" className="mb-4">Fale conosco</Badge>
          <h1 className="text-display-xl font-display font-light text-light leading-tight">
            Entre em <span className="text-gradient">contato</span>
          </h1>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

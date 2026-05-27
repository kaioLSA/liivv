import { Navbar } from "@/components/navigation/Navbar";
import { HeroSection } from "@/components/sections/HeroSection";
import { AboutSection } from "@/components/sections/AboutSection";
import { ServicesSection } from "@/components/sections/ServicesSection";
import { DifferentialsSection } from "@/components/sections/DifferentialsSection";
import { StatsSection } from "@/components/sections/StatsSection";
import { TestimonialsSection } from "@/components/sections/TestimonialsSection";
import { TimelineSection } from "@/components/sections/TimelineSection";
import { StatementSection } from "@/components/sections/StatementSection";
import { CTASection } from "@/components/sections/CTASection";
import { FAQSection } from "@/components/sections/FAQSection";
import { ContactSection } from "@/components/sections/ContactSection";
import { Footer } from "@/components/layout/Footer";
import { SectionDivider } from "@/components/layout/SectionDivider";

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <SectionDivider variant="dark-to-light" />
        <AboutSection />
        <SectionDivider variant="light-to-dark" />
        <ServicesSection />
        <SectionDivider variant="dark-to-light" />
        <DifferentialsSection />
        <SectionDivider variant="light-to-dark" />
        <StatsSection />
        <SectionDivider variant="dark-to-light" />
        <TestimonialsSection />
        <SectionDivider variant="light-to-dark" />
        <TimelineSection />
        <SectionDivider variant="dark-to-light" />
        <StatementSection />
        <SectionDivider variant="light-to-dark" />
        <CTASection />
        <SectionDivider variant="dark-to-light" />
        <FAQSection />
        <SectionDivider variant="light-to-dark" />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}

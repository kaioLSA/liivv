"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contact } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function CTASection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".cta-content > *", { y: 40, opacity: 0, filter: "blur(8px)" }, {
        y: 0, opacity: 1, filter: "blur(0px)", duration: 1, ease: "power4.out", stagger: 0.12,
        scrollTrigger: { trigger: ".cta-content", start: "top 80%", toggleActions: "play none none reverse" },
      });

      // Glow breathing
      gsap.to(".cta-glow", {
        opacity: 0.7, scale: 1.1,
        duration: 3, ease: "sine.inOut",
        yoyo: true, repeat: -1,
      });

      // Background parallax
      gsap.to(".cta-bg", {
        yPercent: -15, ease: "none",
        scrollTrigger: { trigger: ref.current, start: "top bottom", end: "bottom top", scrub: 1 },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} style={{ position: "relative", padding: "clamp(5rem,12vw,12rem) 0", overflow: "hidden", backgroundColor: "#080705" }}>
      {/* Background */}
      <div className="cta-bg" style={{ position: "absolute", inset: "-20%", pointerEvents: "none" }}>
        <div className="cta-glow" style={{
          position: "absolute", top: "30%", left: "20%",
          width: 700, height: 700,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(254,189,171,0.1) 0%, transparent 65%)",
          opacity: 0.4,
        }} />
        <div style={{
          position: "absolute", bottom: "20%", right: "15%",
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(201,168,130,0.07) 0%, transparent 65%)",
        }} className="anim-pulse-glow" />
      </div>

      {/* Grid overlay */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(254,189,171,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(254,189,171,0.02) 1px, transparent 1px)",
        backgroundSize: "60px 60px",
        pointerEvents: "none",
      }} />

      <div className="wrap" style={{ position: "relative", zIndex: 10, textAlign: "center" }}>
        <div className="cta-content" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 24, maxWidth: 700, marginInline: "auto" }}>

          {/* Tag */}
          <div className="badge">Agende seu horário</div>

          {/* Headline */}
          <h2 className="t-display" style={{ color: "#FAF7F5" }}>
            Sua melhor versão{" "}
            <span className="text-shine">começa aqui.</span>
          </h2>

          {/* Sub */}
          <p className="t-body" style={{ color: "rgba(250,247,245,0.55)", maxWidth: 500 }}>
            Agende no Liivv Beauty e descubra o que é cuidar de si com excelência,
            agilidade e sofisticação — feito para quem não tem tempo a perder.
          </p>

          {/* Buttons */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginTop: 8 }}>
            <button
              className="btn btn-primary"
              style={{ fontSize: "0.92rem" }}
              onClick={() => window.open(`https://wa.me/${contact.whatsapp}?text=Olá! Gostaria de agendar um horário no Liivv Beauty.`, "_blank")}
            >
              Agendar via WhatsApp
            </button>
            <button
              className="btn btn-ghost"
              onClick={() => document.getElementById("contato")?.scrollIntoView({ behavior: "smooth" })}
            >
              Falar com a equipe
            </button>
          </div>

          {/* Trust signals */}
          <div style={{ display: "flex", flexWrap: "wrap", gap: "8px 20px", justifyContent: "center", marginTop: 16, maxWidth: 480 }}>
            {["Atendimento pontual", "Qualidade impecável", "Ambiente premium", "Complexo Rochavera"].map((item) => (
              <div key={item} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.78rem", color: "rgba(250,247,245,0.35)", fontFamily: "var(--font-body)" }}>
                <span style={{ width: 4, height: 4, borderRadius: "50%", background: "rgba(254,189,171,0.5)", flexShrink: 0 }} />
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

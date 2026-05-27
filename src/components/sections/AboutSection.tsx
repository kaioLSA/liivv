"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const SALON_PHOTO = "https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&w=900&q=80";

export function AboutSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".about-left", { x: -50, opacity: 0 }, {
        x: 0, opacity: 1, duration: 1.1, ease: "power4.out",
        scrollTrigger: { trigger: ".about-left", start: "top 82%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(".about-right > *", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.12,
        scrollTrigger: { trigger: ".about-right", start: "top 82%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const pillars = [
    { title: "Beleza inteligente", desc: "Serviços premium que respeitam sua agenda" },
    { title: "Ambiente corporativo", desc: "Sofisticação pensada para profissionais" },
    { title: "Equipe especializada", desc: "Profissionais focados em resultado" },
    { title: "Localização premium", desc: "No coração do Complexo Rochavera" },
  ];

  return (
    <section
      id="sobre"
      ref={ref}
      className="section"
      style={{ backgroundColor: "#FFFFFF" }}
    >
      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "clamp(2.5rem,5vw,5rem)",
          alignItems: "center",
        }}>
          {/* Left — Photo */}
          <div className="about-left" style={{ position: "relative" }}>
            <div style={{
              position: "relative",
              borderRadius: 24,
              overflow: "hidden",
              aspectRatio: "4/5",
              background: "#f0ede9",
            }}>
              <Image
                src={SALON_PHOTO}
                alt="Liivv Beauty — Salão Corporativo"
                fill
                style={{ objectFit: "cover", objectPosition: "center" }}
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              {/* Overlay gradient at bottom for quote */}
              <div style={{
                position: "absolute",
                bottom: 0, left: 0, right: 0,
                padding: "40px 28px 28px",
                background: "linear-gradient(to top, rgba(8,7,5,0.75) 0%, transparent 100%)",
              }}>
                <p style={{
                  fontFamily: "var(--font-hero)",
                  fontSize: "clamp(1rem,1.4vw,1.2rem)",
                  fontWeight: 300,
                  color: "#FAF7F5",
                  fontStyle: "italic",
                  lineHeight: 1.5,
                  marginBottom: 8,
                }}>
                  "Cuidar de si é uma estratégia de poder."
                </p>
                <p className="t-label" style={{ color: "rgba(250,247,245,0.55)" }}>
                  — Erika, fundadora
                </p>
              </div>
            </div>

            {/* Floating badge */}
            <div className="about-float-badge anim-float-slow" style={{
              position: "absolute",
              top: "28%", right: -20,
              background: "#FFFFFF",
              border: "1px solid rgba(254,189,171,0.3)",
              boxShadow: "0 8px 32px rgba(0,0,0,0.12)",
              borderRadius: 16,
              padding: "18px 22px",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--font-dm-sans, sans-serif)",
                fontSize: "2rem",
                fontWeight: 700,
                color: "#FEBDAB",
                lineHeight: 1,
              }}>7+</div>
              <div className="t-label" style={{ color: "#9A9290", marginTop: 4, fontSize: "0.6rem" }}>
                Anos no mercado
              </div>
            </div>
          </div>

          {/* Right — Content */}
          <div className="about-right" style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div className="badge-dark">Nossa história</div>

            <h2 className="t-heading" style={{ color: "#1A1410" }}>
              Nascemos para a mulher{" "}
              <span className="text-shine-dark">que não para.</span>
            </h2>

            <div style={{ width: 48, height: 2, background: "rgba(254,189,171,0.5)", borderRadius: 2 }} />

            <p className="t-body" style={{ color: "#5A5250" }}>
              O Liivv Beauty nasceu da união entre quase 7 anos de excelência no Complexo
              Rochavera e uma nova gestão com expertise em branding, planejamento estratégico
              e consumer insights.
            </p>
            <p className="t-body" style={{ color: "#5A5250" }}>
              Criamos algo único: um salão onde sofisticação e agilidade coexistem. Cada detalhe
              foi pensado para a profissional que valoriza resultado, qualidade e o seu tempo.
            </p>

            {/* Pillars grid */}
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 8 }}>
              {pillars.map((p) => (
                <div key={p.title} className="card-light" style={{ padding: "18px 20px" }}>
                  <div style={{
                    width: 8, height: 8, borderRadius: "50%",
                    background: "#FEBDAB",
                    marginBottom: 12,
                  }} />
                  <div className="t-small" style={{ color: "#1A1410", fontWeight: 600, marginBottom: 4 }}>
                    {p.title}
                  </div>
                  <div style={{ fontSize: "0.78rem", color: "#7A7270", lineHeight: 1.55 }}>
                    {p.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

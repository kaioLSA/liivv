"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Clock } from "lucide-react";
import { services } from "@/data/services";
import { contact } from "@/config/site";
import type { Service } from "@/types/content.types";

gsap.registerPlugin(ScrollTrigger);

type Category = "all" | "hair" | "nails" | "treatment";

export function ServicesSection() {
  const ref = useRef<HTMLElement>(null);
  const [cat, setCat] = useState<Category>("all");

  const filtered = cat === "all" ? services : services.filter((s) => s.category === cat);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".srv-header > *", { y: 35, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".srv-header", start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    const tween = gsap.fromTo(".srv-card", { y: 40, opacity: 0, scale: 0.97 }, {
      y: 0, opacity: 1, scale: 1, duration: 0.7, ease: "power4.out", stagger: 0.07,
      scrollTrigger: { trigger: ".srv-grid", start: "top 85%", toggleActions: "play none none reverse" },
    });
    return () => { tween.kill(); };
  }, [filtered]);

  const cats: { key: Category; label: string }[] = [
    { key: "all", label: "Todos" },
    { key: "hair", label: "Cabelo" },
    { key: "nails", label: "Unhas" },
    { key: "treatment", label: "Tratamentos" },
  ];

  return (
    <section id="servicos" ref={ref} className="section" style={{ backgroundColor: "#080705" }}>
      <div className="wrap">
        {/* Header */}
        <div className="srv-header" style={{ maxWidth: 620, marginBottom: 56 }}>
          <div className="badge" style={{ marginBottom: 24 }}>Nossos serviços</div>
          <h2 className="t-heading" style={{ color: "#FAF7F5", marginBottom: 16 }}>
            Excelência em{" "}
            <span className="text-shine">cada detalhe.</span>
          </h2>
          <p className="t-body" style={{ color: "rgba(250,247,245,0.55)" }}>
            Portfólio completo pensado para a profissional que não abre mão de qualidade,
            mesmo com agenda cheia.
          </p>
        </div>

        {/* Filter pills */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 40 }}>
          {cats.map((c) => (
            <button
              key={c.key}
              onClick={() => setCat(c.key)}
              style={{
                padding: "8px 22px",
                borderRadius: 9999,
                border: "none",
                cursor: "pointer",
                fontFamily: "var(--font-body)",
                fontSize: "0.83rem",
                fontWeight: 500,
                letterSpacing: "0.02em",
                transition: "all 0.3s ease",
                ...(cat === c.key
                  ? { background: "#FEBDAB", color: "#080705", boxShadow: "0 4px 20px rgba(254,189,171,0.25)" }
                  : { background: "rgba(250,247,245,0.05)", color: "rgba(250,247,245,0.5)", border: "1px solid rgba(250,247,245,0.1)" }
                ),
              }}
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="srv-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 16,
          marginBottom: 56,
        }}>
          {filtered.map((s: Service) => (
            <ServiceCard key={s.id} service={s} />
          ))}
        </div>

        {/* CTA */}
        <div style={{ textAlign: "center" }}>
          <button
            className="btn btn-primary"
            onClick={() => window.open(`https://wa.me/${contact.whatsapp}?text=Olá! Gostaria de agendar um serviço.`, "_blank")}
          >
            Agendar via WhatsApp
          </button>
        </div>
      </div>
    </section>
  );
}

function ServiceCard({ service }: { service: Service }) {
  const ref = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={ref}
      className="srv-card card"
      style={{ padding: "28px 28px 24px", position: "relative", cursor: "default" }}
    >
      {service.featured && (
        <div style={{
          position: "absolute", top: 16, right: 16,
          padding: "3px 10px",
          background: "rgba(254,189,171,0.1)",
          border: "1px solid rgba(254,189,171,0.2)",
          borderRadius: 9999,
          fontSize: "0.65rem",
          color: "#FEBDAB",
          fontFamily: "var(--font-body)",
          letterSpacing: "0.12em",
          textTransform: "uppercase",
          fontWeight: 500,
        }}>
          Destaque
        </div>
      )}

      <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
        <span style={{ color: "#FEBDAB", opacity: 0.6, fontSize: "1.1rem" }}>✦</span>
        <div style={{ flex: 1, height: 1, background: "linear-gradient(to right, rgba(254,189,171,0.15), transparent)" }} />
      </div>

      <h3 style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.2rem,1.8vw,1.5rem)", fontWeight: 300, color: "#FAF7F5", marginBottom: 10, lineHeight: 1.2 }}>
        {service.title}
      </h3>
      <p className="t-small" style={{ color: "rgba(250,247,245,0.5)", marginBottom: 20, lineHeight: 1.65 }}>
        {service.description}
      </p>
      <div style={{ display: "flex", alignItems: "center", gap: 6, color: "rgba(250,247,245,0.35)" }}>
        <Clock size={13} />
        <span style={{ fontFamily: "var(--font-body)", fontSize: "0.78rem" }}>{service.duration}</span>
      </div>
    </div>
  );
}

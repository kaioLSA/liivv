"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";
import { testimonials } from "@/data/testimonials";

gsap.registerPlugin(ScrollTrigger);

export function TestimonialsSection() {
  const ref = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".test-header > *", { y: 35, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".test-header", start: "top 85%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(cardRef.current, { y: 50, opacity: 0 }, {
        y: 0, opacity: 1, duration: 1, ease: "power4.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 85%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const goTo = (next: number) => {
    const i = ((next % testimonials.length) + testimonials.length) % testimonials.length;
    if (!cardRef.current) { setActive(i); return; }
    gsap.to(cardRef.current, {
      opacity: 0, x: next > active ? -30 : 30, duration: 0.25, ease: "power2.in",
      onComplete: () => {
        setActive(i);
        gsap.fromTo(cardRef.current, { opacity: 0, x: next > active ? 30 : -30 }, { opacity: 1, x: 0, duration: 0.4, ease: "power3.out" });
      },
    });
  };

  const t = testimonials[active];

  return (
    <section id="depoimentos" ref={ref} className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="wrap">
        {/* Header */}
        <div className="test-header" style={{ textAlign: "center", maxWidth: 560, marginInline: "auto", marginBottom: 64 }}>
          <div className="badge-dark" style={{ marginBottom: 20 }}>Depoimentos</div>
          <h2 className="t-heading" style={{ color: "#1A1410" }}>
            O que nossas <span className="text-shine-dark">clientes dizem.</span>
          </h2>
        </div>

        {/* Main card */}
        <div ref={cardRef} style={{ maxWidth: 780, marginInline: "auto", marginBottom: 40 }}>
          <div className="card-light" style={{ padding: "clamp(2rem,5vw,4rem)", position: "relative" }}>
            {/* Big quote mark */}
            <div style={{
              position: "absolute", top: 20, left: 28,
              fontFamily: "var(--font-body)", fontSize: 96, fontWeight: 300,
              color: "rgba(254,189,171,0.15)", lineHeight: 1, userSelect: "none",
            }}>
              "
            </div>

            {/* Stars */}
            <div style={{ display: "flex", gap: 4, marginBottom: 24 }}>
              {Array.from({ length: t.rating }).map((_, i) => (
                <Star key={i} size={15} fill="#FEBDAB" color="#FEBDAB" />
              ))}
            </div>

            <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1.1rem,2vw,1.5rem)", fontWeight: 300, color: "#1A1410", fontStyle: "italic", lineHeight: 1.65, marginBottom: 32, position: "relative", zIndex: 1 }}>
              "{t.content}"
            </p>

            <div style={{ display: "flex", alignItems: "center", gap: 16, paddingTop: 24, borderTop: "1px solid rgba(0,0,0,0.07)" }}>
              <div style={{
                width: 44, height: 44, borderRadius: "50%",
                background: "linear-gradient(135deg, rgba(254,189,171,0.2) 0%, rgba(201,168,130,0.15) 100%)",
                border: "1px solid rgba(254,189,171,0.3)",
                display: "flex", alignItems: "center", justifyContent: "center",
                fontFamily: "var(--font-body)", fontSize: "1.3rem", fontWeight: 300, color: "#C9707E",
              }}>
                {t.name.charAt(0)}
              </div>
              <div>
                <div className="t-small" style={{ color: "#1A1410", fontWeight: 600 }}>{t.name}</div>
                <div style={{ fontSize: "0.78rem", color: "#9A9290", marginTop: 2 }}>
                  {t.role}{t.company ? ` · ${t.company}` : ""}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Controls */}
        <div style={{ maxWidth: 780, marginInline: "auto", display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  height: 4, borderRadius: 2, border: "none", cursor: "pointer",
                  transition: "all 0.35s ease",
                  background: i === active ? "#FEBDAB" : "rgba(0,0,0,0.12)",
                  width: i === active ? 28 : 8,
                }}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
          <div style={{ display: "flex", gap: 8 }}>
            {[
              { onClick: () => goTo(active - 1), icon: <ChevronLeft size={16} /> },
              { onClick: () => goTo(active + 1), icon: <ChevronRight size={16} /> },
            ].map((btn, i) => (
              <button
                key={i}
                onClick={btn.onClick}
                style={{
                  width: 40, height: 40, borderRadius: "50%", border: "1px solid rgba(0,0,0,0.1)",
                  background: "rgba(0,0,0,0.03)", color: "#7A7270", cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  transition: "all 0.3s",
                }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(254,189,171,0.5)"; e.currentTarget.style.color = "#C9707E"; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(0,0,0,0.1)"; e.currentTarget.style.color = "#7A7270"; }}
              >
                {btn.icon}
              </button>
            ))}
          </div>
        </div>

        {/* Mini cards */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 12, marginTop: 48 }}>
          {testimonials.slice(0, 3).map((item, i) => (
            <button
              key={item.id}
              onClick={() => goTo(i)}
              style={{
                textAlign: "left", cursor: "pointer", background: "none", border: "none", padding: 0,
              }}
            >
              <div className="card-light" style={{
                padding: "20px 20px",
                transition: "all 0.3s ease",
                ...(i === active ? { borderColor: "rgba(254,189,171,0.4)", boxShadow: "0 4px 20px rgba(254,189,171,0.1)" } : {}),
              }}>
                <div style={{ display: "flex", gap: 3, marginBottom: 10 }}>
                  {Array.from({ length: 5 }).map((_, j) => <Star key={j} size={11} fill="#FEBDAB" color="#FEBDAB" />)}
                </div>
                <p style={{ fontSize: "0.8rem", color: "#7A7270", lineHeight: 1.55,
                  display: "-webkit-box", WebkitLineClamp: 2, WebkitBoxOrient: "vertical", overflow: "hidden",
                  marginBottom: 10,
                }}>
                  "{item.content}"
                </p>
                <div className="t-small" style={{ color: "#1A1410", fontWeight: 500, fontSize: "0.78rem" }}>
                  {item.name}
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}

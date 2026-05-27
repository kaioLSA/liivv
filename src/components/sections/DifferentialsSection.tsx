"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { differentials } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export function DifferentialsSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".diff-sticky > *", { x: -40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".diff-sticky", start: "top 80%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(".diff-item", { x: 40, opacity: 0 }, {
        x: 0, opacity: 1, duration: 0.8, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".diff-list", start: "top 80%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section id="diferenciais" ref={ref} className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(2.5rem,5vw,5rem)", alignItems: "start" }}>

          {/* Sticky left */}
          <div className="diff-sticky" style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div className="badge-dark">Por que o Liivv</div>
            <h2 className="t-heading" style={{ color: "#1A1410" }}>
              Mais do que beleza.{" "}
              <span className="text-shine-dark">Uma experiência.</span>
            </h2>
            <p className="t-body" style={{ color: "#5A5250" }}>
              Enquanto outros salões entregam serviços, o Liivv entrega uma experiência completa —
              do ambiente à qualidade, tudo pensado para elevar sua confiança.
            </p>

            {/* Quote */}
            <div style={{ borderLeft: "2px solid rgba(254,189,171,0.4)", paddingLeft: 20, marginTop: 8 }}>
              <p style={{ fontFamily: "var(--font-body)", fontSize: "clamp(1rem,1.3vw,1.2rem)", fontWeight: 300, color: "#5A5250", fontStyle: "italic", lineHeight: 1.6, marginBottom: 8 }}>
                "Vai no Liivv. Lá você é bem atendida, sai linda e ainda sente que seu tempo foi respeitado."
              </p>
              <div className="t-label" style={{ color: "#9A9290" }}>— Clientes Liivv Beauty</div>
            </div>
          </div>

          {/* Right — list */}
          <div className="diff-list" style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {differentials.map((d, i) => (
              <div key={d.id} className="diff-item card-light" style={{ padding: "24px 24px" }}>
                <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
                  <div style={{
                    width: 40, height: 40, borderRadius: 10, flexShrink: 0,
                    background: "rgba(254,189,171,0.12)",
                    border: "1px solid rgba(254,189,171,0.25)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontSize: "1rem", color: "#C9707E",
                  }}>
                    {d.icon}
                  </div>
                  <div style={{ flex: 1 }}>
                    <h3 className="t-small" style={{ color: "#1A1410", fontWeight: 600, marginBottom: 6 }}>
                      {d.title}
                    </h3>
                    <p style={{ fontSize: "0.82rem", color: "#7A7270", lineHeight: 1.6 }}>
                      {d.description}
                    </p>
                  </div>
                  <div className="t-label" style={{ color: "rgba(254,189,171,0.5)", flexShrink: 0 }}>
                    0{i + 1}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

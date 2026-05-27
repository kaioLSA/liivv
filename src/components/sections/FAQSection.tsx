"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Plus } from "lucide-react";
import { faqItems } from "@/data/content";
import { contact } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function FAQSection() {
  const ref = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(null);
  const bodyRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".faq-header > *", { y: 35, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".faq-header", start: "top 85%", toggleActions: "play none none reverse" },
      });
      gsap.fromTo(".faq-row", { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.7, ease: "power4.out", stagger: 0.07,
        scrollTrigger: { trigger: ".faq-list", start: "top 80%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const toggle = (i: number) => {
    const prev = open;
    const next = open === i ? null : i;

    // Close previous
    if (prev !== null && bodyRefs.current[prev]) {
      gsap.to(bodyRefs.current[prev], { height: 0, opacity: 0, duration: 0.35, ease: "power3.in" });
    }

    setOpen(next);

    if (next !== null && bodyRefs.current[next]) {
      gsap.set(bodyRefs.current[next], { height: "auto" });
      const h = bodyRefs.current[next]!.offsetHeight;
      gsap.fromTo(bodyRefs.current[next], { height: 0, opacity: 0 }, { height: h, opacity: 1, duration: 0.42, ease: "power3.out" });
    }
  };

  return (
    <section ref={ref} className="section" style={{ backgroundColor: "#FFFFFF" }}>
      <div className="wrap">
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: "clamp(2.5rem,5vw,5rem)", alignItems: "start" }}>

          {/* Left */}
          <div className="faq-header" style={{ display: "flex", flexDirection: "column", gap: 18 }}>
            <div className="badge-dark">Perguntas frequentes</div>
            <h2 className="t-heading" style={{ color: "#1A1410" }}>
              Tudo o que você{" "}
              <span className="text-shine-dark">precisa saber.</span>
            </h2>
            <p className="t-body" style={{ color: "#5A5250" }}>
              Ficou com dúvidas? Aqui estão as respostas mais comuns das nossas clientes.
            </p>
            <a
              href={`https://wa.me/${contact.whatsapp}?text=Olá! Tenho uma dúvida sobre o Liivv Beauty.`}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                fontFamily: "var(--font-body)", fontSize: "0.85rem",
                color: "#C9707E", textDecoration: "underline", textUnderlineOffset: 4,
                transition: "color 0.2s",
              }}
              onMouseEnter={e => (e.currentTarget.style.color = "#E8A090")}
              onMouseLeave={e => (e.currentTarget.style.color = "#C9707E")}
            >
              Ainda tem dúvidas? Fale conosco →
            </a>
          </div>

          {/* Right — accordion */}
          <div className="faq-list" style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            {faqItems.map((item, i) => (
              <div key={i} className="faq-row">
                <button
                  onClick={() => toggle(i)}
                  style={{
                    width: "100%", textAlign: "left", cursor: "pointer",
                    background: open === i ? "rgba(254,189,171,0.06)" : "#FFFFFF",
                    border: `1px solid ${open === i ? "rgba(254,189,171,0.35)" : "rgba(0,0,0,0.08)"}`,
                    borderRadius: 14,
                    padding: "18px 20px",
                    display: "flex", alignItems: "center", justifyContent: "space-between", gap: 16,
                    transition: "all 0.3s ease",
                  }}
                >
                  <span className="t-small" style={{ color: "#1A1410", fontWeight: 500 }}>
                    {item.question}
                  </span>
                  <div style={{
                    width: 28, height: 28, borderRadius: "50%", flexShrink: 0,
                    border: "1px solid rgba(254,189,171,0.35)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "#C9707E",
                    transition: "transform 0.3s, border-color 0.3s",
                    transform: open === i ? "rotate(45deg)" : "rotate(0deg)",
                  }}>
                    <Plus size={13} />
                  </div>
                </button>

                <div ref={(el) => { bodyRefs.current[i] = el; }} style={{ height: 0, overflow: "hidden", opacity: 0 }}>
                  <div style={{ padding: "14px 20px 18px" }}>
                    <p className="t-small" style={{ color: "#7A7270", lineHeight: 1.7 }}>
                      {item.answer}
                    </p>
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

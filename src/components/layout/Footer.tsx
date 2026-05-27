"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { asset } from "@/lib/utils/basePath";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Heart } from "lucide-react";
import { navigation, contact, siteConfig } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function Footer() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".footer-col", { y: 24, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 90%", toggleActions: "play none none none" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  const go = (href: string) => {
    document.getElementById(href.replace("#", ""))?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer ref={ref} style={{ backgroundColor: "#080705", borderTop: "1px solid rgba(254,189,171,0.08)", position: "relative" }}>
      {/* Top glow line */}
      <div style={{
        position: "absolute", top: 0, left: "50%", transform: "translateX(-50%)",
        width: 400, height: 1,
        background: "linear-gradient(90deg, transparent, rgba(254,189,171,0.3), transparent)",
      }} />

      <div className="wrap" style={{ paddingTop: 64, paddingBottom: 40 }}>
        {/* Grid */}
        <div className="footer-grid" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
          gap: "clamp(2rem,4vw,4rem)",
          marginBottom: 56,
        }}>
          {/* Brand */}
          <div className="footer-col footer-brand" style={{ gridColumn: "span 1", display: "flex", flexDirection: "column", gap: 16, maxWidth: 260 }}>
            <div style={{ position: "relative", width: 110, height: 32 }}>
              <Image src={asset("/logo/liivv.svg")} alt="Liivv Beauty" fill style={{ objectFit: "contain", objectPosition: "left" }} />
            </div>
            <p style={{ fontSize: "0.82rem", color: "rgba(250,247,245,0.4)", fontFamily: "var(--font-body)", lineHeight: 1.7 }}>
              Salão de beleza corporativo que une sofisticação, agilidade e excelência para a mulher que lidera.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { href: "https://instagram.com/liivvbeauty", label: "@" },
                { href: `https://wa.me/${contact.whatsapp}`, label: "W" },
              ].map((s) => (
                <a
                  key={s.href}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    width: 34, height: 34, borderRadius: "50%",
                    border: "1px solid rgba(250,247,245,0.1)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    fontFamily: "var(--font-body)", fontSize: "0.8rem",
                    color: "rgba(250,247,245,0.4)", textDecoration: "none",
                    transition: "all 0.3s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "rgba(254,189,171,0.4)"; e.currentTarget.style.color = "#FEBDAB"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "rgba(250,247,245,0.1)"; e.currentTarget.style.color = "rgba(250,247,245,0.4)"; }}
                >
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="footer-col" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.82rem", color: "#FAF7F5", marginBottom: 4 }}>
              Navegação
            </h4>
            {navigation.map((item) => (
              <button key={item.href} onClick={() => go(item.href)} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: "0.82rem",
                color: "rgba(250,247,245,0.4)", textAlign: "left",
                transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FAF7F5")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,245,0.4)")}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Services */}
          <div className="footer-col" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.82rem", color: "#FAF7F5", marginBottom: 4 }}>
              Serviços
            </h4>
            {["Escova Profissional", "Corte Feminino", "Coloração", "Mechas", "Manicure & Pedicure", "Corte Masculino"].map((s) => (
              <button key={s} onClick={() => go("#servicos")} style={{
                background: "none", border: "none", cursor: "pointer",
                fontFamily: "var(--font-body)", fontSize: "0.82rem",
                color: "rgba(250,247,245,0.4)", textAlign: "left", transition: "color 0.2s",
              }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FAF7F5")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,245,0.4)")}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Contact */}
          <div className="footer-col" style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            <h4 style={{ fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.82rem", color: "#FAF7F5", marginBottom: 4 }}>
              Contato
            </h4>
            {[
              contact.address,
              contact.addressDetail,
              contact.hours,
            ].map((val) => (
              <span key={val} style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "rgba(250,247,245,0.4)", display: "block" }}>
                {val}
              </span>
            ))}
            <a href={`https://wa.me/${contact.whatsapp}`} target="_blank" rel="noopener noreferrer"
              style={{ fontFamily: "var(--font-body)", fontSize: "0.82rem", color: "#FEBDAB", textDecoration: "none", transition: "color 0.2s" }}
              onMouseEnter={e => (e.currentTarget.style.color = "#FDD5C8")}
              onMouseLeave={e => (e.currentTarget.style.color = "#FEBDAB")}
            >
              {contact.phone}
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 12, alignItems: "center", justifyContent: "space-between", paddingTop: 28, borderTop: "1px solid rgba(254,189,171,0.07)" }}>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(250,247,245,0.3)" }}>
            © {new Date().getFullYear()} {siteConfig.name}. Todos os direitos reservados.
          </p>
          <p style={{ fontFamily: "var(--font-body)", fontSize: "0.75rem", color: "rgba(250,247,245,0.3)", display: "flex", alignItems: "center", gap: 6 }}>
            Feito com <Heart size={11} style={{ color: "#FEBDAB", fill: "#FEBDAB" }} /> para mulheres que não param.
          </p>
        </div>
      </div>
    </footer>
  );
}

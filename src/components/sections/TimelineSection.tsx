"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { timeline } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export function TimelineSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".tl-header > *", { y: 35, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.9, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ".tl-header", start: "top 85%", toggleActions: "play none none reverse" },
      });

      // Horizontal line grows on scroll
      gsap.fromTo(".tl-line-fill", { scaleX: 0 }, {
        scaleX: 1, ease: "none",
        scrollTrigger: { trigger: ".tl-track", start: "top 65%", end: "bottom 70%", scrub: 1.5 },
      });

      // Each card fades in
      gsap.fromTo(".tl-card", { y: 30, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power4.out", stagger: 0.12,
        scrollTrigger: { trigger: ".tl-track", start: "top 75%", toggleActions: "play none none reverse" },
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} className="section" style={{ backgroundColor: "#080705" }}>
      <div className="wrap">
        {/* Header */}
        <div className="tl-header" style={{ textAlign: "center", maxWidth: 560, marginInline: "auto", marginBottom: 72 }}>
          <div className="badge" style={{ marginBottom: 20 }}>Nossa trajetória</div>
          <h2 className="t-heading" style={{ color: "#FAF7F5" }}>
            Uma história de <span className="text-shine">excelência.</span>
          </h2>
        </div>

        {/* Desktop horizontal track */}
        <div className="tl-track">
          {/* Line */}
          <div style={{ display: "none", position: "relative", marginBottom: 40 }} className="md-flex">
            <div style={{ height: 1, background: "rgba(254,189,171,0.1)", width: "100%", position: "relative" }}>
              <div className="tl-line-fill" style={{
                position: "absolute", inset: 0,
                background: "linear-gradient(to right, transparent, #FEBDAB, transparent)",
                transformOrigin: "left",
              }} />
            </div>
          </div>

          <div style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: 16,
            position: "relative",
          }}>
            {/* Desktop dots above */}
            <div style={{
              position: "absolute", top: -52, left: 0, right: 0,
              display: "flex", justifyContent: "space-around",
            }} className="hidden md:flex">
              {timeline.map((_, i) => (
                <div key={i} style={{ position: "relative" }}>
                  <div style={{
                    width: 12, height: 12, borderRadius: "50%",
                    background: "#FEBDAB",
                    border: "3px solid #080705",
                    boxShadow: "0 0 12px rgba(254,189,171,0.4)",
                  }} />
                </div>
              ))}
            </div>

            {timeline.map((item, i) => (
              <div key={item.year} className="tl-card card" style={{ padding: "28px 24px" }}>
                <div style={{
                  fontFamily: "var(--font-display)",
                  fontSize: "clamp(2rem,3vw,3rem)",
                  fontWeight: 300,
                  color: "#FEBDAB",
                  letterSpacing: "-0.03em",
                  lineHeight: 1,
                  marginBottom: 12,
                }}>
                  {item.year}
                </div>
                <h3 className="t-small" style={{ color: "#FAF7F5", fontWeight: 600, marginBottom: 8 }}>
                  {item.title}
                </h3>
                <p style={{ fontSize: "0.82rem", color: "rgba(250,247,245,0.5)", lineHeight: 1.6 }}>
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

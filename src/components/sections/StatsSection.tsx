"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { stats } from "@/data/content";

gsap.registerPlugin(ScrollTrigger);

export function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const numRefs = useRef<(HTMLSpanElement | null)[]>([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(".stat-item", { y: 40, opacity: 0 }, {
        y: 0, opacity: 1, duration: 0.8, ease: "power4.out", stagger: 0.1,
        scrollTrigger: { trigger: ref.current, start: "top 80%", toggleActions: "play none none reverse" },
      });

      stats.forEach((stat, i) => {
        const el = numRefs.current[i];
        if (!el) return;
        const num = parseFloat(stat.value.replace(/[^0-9.]/g, ""));
        if (isNaN(num)) return;
        const obj = { v: 0 };
        gsap.to(obj, {
          v: num, duration: 2.2, ease: "power2.out",
          onUpdate: () => { el.textContent = Math.round(obj.v).toString(); },
          scrollTrigger: { trigger: ref.current, start: "top 75%", once: true },
        });
      });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={ref} style={{ backgroundColor: "#080705", padding: "72px 0", position: "relative", overflow: "hidden" }}>
      <div className="divider" style={{ position: "absolute", top: 0, left: 0, right: 0 }} />
      <div className="divider" style={{ position: "absolute", bottom: 0, left: 0, right: 0 }} />

      {/* Glow */}
      <div style={{
        position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
        width: 600, height: 300,
        background: "radial-gradient(ellipse, rgba(254,189,171,0.04) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="wrap">
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: 4,
        }}>
          {stats.map((stat, i) => (
            <div key={stat.label} className={`stat-item stat-cell`} style={{
              padding: "40px 32px",
              textAlign: "center",
              position: "relative",
              borderRight: i < stats.length - 1 ? "1px solid rgba(254,189,171,0.08)" : "none",
            }}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontWeight: 300,
                fontSize: "clamp(3rem,5vw,5.5rem)",
                color: "#FEBDAB",
                letterSpacing: "-0.04em",
                lineHeight: 1,
                marginBottom: 10,
              }}>
                <span ref={(el) => { numRefs.current[i] = el; }}>
                  {stat.value.replace(/[^0-9]/g, "")}
                </span>
                {stat.suffix && (
                  <span style={{ fontSize: "0.55em", opacity: 0.7 }}>{stat.suffix}</span>
                )}
              </div>
              <div className="t-small" style={{ color: "#FAF7F5", fontWeight: 500, marginBottom: 4 }}>
                {stat.label}
              </div>
              {stat.description && (
                <div style={{ fontSize: "0.75rem", color: "rgba(250,247,245,0.38)", fontFamily: "var(--font-body)" }}>
                  {stat.description}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

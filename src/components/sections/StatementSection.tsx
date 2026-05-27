"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export function StatementSection() {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Line 1 drifts from slightly right → left as the section scrolls through viewport
      gsap.fromTo(".stmt-line-1",
        { x: "6%" },
        {
          x: "-6%", ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        }
      );
      // Line 2 is the mirror — left → right
      gsap.fromTo(".stmt-line-2",
        { x: "-6%" },
        {
          x: "6%", ease: "none",
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.4,
          },
        }
      );
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={ref}
      style={{
        backgroundColor: "#FAF7F5",
        padding: "clamp(4.5rem, 10vw, 9rem) 0",
        overflow: "hidden",
        position: "relative",
      }}
    >
      {/* Background geometric shapes */}
      <svg
        aria-hidden
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          pointerEvents: "none",
        }}
        preserveAspectRatio="xMidYMid slice"
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Left parallelogram */}
        <polygon
          points="180,40 420,40 340,360 100,360"
          fill="none"
          stroke="rgba(26,20,16,0.055)"
          strokeWidth="1.5"
        />
        {/* Right parallelogram */}
        <polygon
          points="1020,40 1260,40 1340,360 1100,360"
          fill="none"
          stroke="rgba(26,20,16,0.055)"
          strokeWidth="1.5"
        />
        {/* Center diamond */}
        <polygon
          points="720,30 870,200 720,370 570,200"
          fill="none"
          stroke="rgba(26,20,16,0.04)"
          strokeWidth="1"
        />
      </svg>

      {/* Line 1 — light, thin */}
      <div
        className="stmt-line-1"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(2.8rem, 8vw, 8rem)",
          fontWeight: 300,
          color: "rgba(26,20,16,0.18)",
          letterSpacing: "-0.025em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          textAlign: "center",
          lineHeight: 1.1,
          position: "relative",
          zIndex: 1,
        }}
      >
        Cuidar de si é uma
      </div>

      {/* Line 2 — bold, dark */}
      <div
        className="stmt-line-2"
        style={{
          fontFamily: "var(--font-body)",
          fontSize: "clamp(2.8rem, 8vw, 8rem)",
          fontWeight: 700,
          color: "#1A1410",
          letterSpacing: "-0.035em",
          textTransform: "uppercase",
          whiteSpace: "nowrap",
          textAlign: "center",
          lineHeight: 1.1,
          position: "relative",
          zIndex: 1,
        }}
      >
        Estratégia de poder
      </div>

      {/* Bottom label */}
      <div
        style={{
          textAlign: "center",
          marginTop: "clamp(1.5rem, 3vw, 2.5rem)",
          position: "relative",
          zIndex: 1,
        }}
      >
        <span
          className="t-label"
          style={{ color: "rgba(26,20,16,0.28)", letterSpacing: "0.2em" }}
        >
          LIIVV BEAUTY · COMPLEXO ROCHAVERA
        </span>
      </div>
    </section>
  );
}

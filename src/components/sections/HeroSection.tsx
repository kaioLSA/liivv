"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { contact } from "@/config/site";

gsap.registerPlugin(ScrollTrigger);

export function HeroSection() {
  const sRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

      // Label
      tl.fromTo(".hero-label", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, 0.5);

      // Each word of the headline
      tl.fromTo(".hero-word", { y: "110%", opacity: 0 }, { y: "0%", opacity: 1, duration: 1.1, stagger: 0.07 }, 0.7);

      // Divider line
      tl.fromTo(".hero-line", { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 0.9, ease: "power3.inOut" }, 1.2);

      // Sub text
      tl.fromTo(".hero-sub", { y: 25, opacity: 0, filter: "blur(6px)" }, { y: 0, opacity: 1, filter: "blur(0px)", duration: 0.9 }, 1.3);

      // CTA buttons
      tl.fromTo(".hero-cta", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8, stagger: 0.1 }, 1.5);

      // Stats
      tl.fromTo(".hero-stat", { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.7, stagger: 0.1 }, 1.8);

      // Scroll indicator
      tl.fromTo(".hero-scroll", { opacity: 0 }, { opacity: 1, duration: 0.6 }, 2.1);

      // Mouse parallax
      const onMove = (e: MouseEvent) => {
        const nx = (e.clientX / window.innerWidth - 0.5) * 2;
        const ny = (e.clientY / window.innerHeight - 0.5) * 2;
        gsap.to(".hero-orb-1", { x: nx * 25, y: ny * 15, duration: 1.5, ease: "power2.out" });
        gsap.to(".hero-orb-2", { x: nx * -15, y: ny * -10, duration: 1.8, ease: "power2.out" });
      };
      window.addEventListener("mousemove", onMove, { passive: true });
      return () => window.removeEventListener("mousemove", onMove);
    }, sRef);

    return () => ctx.revert();
  }, []);

  const words = ["Beleza", "que", "eleva", "sua"];
  const highlightWords = ["performance."];

  return (
    <section
      id="hero"
      ref={sRef}
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#080705",
        overflow: "hidden",
      }}
    >
      {/* Background decorative orbs */}
      <div className="hero-orb-1" style={{
        position: "absolute",
        top: "8%", left: "10%",
        width: "clamp(280px, 50vw, 600px)", height: "clamp(280px, 50vw, 600px)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(254,189,171,0.07) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
      }} aria-hidden />
      <div className="hero-orb-2" style={{
        position: "absolute",
        bottom: "10%", right: "8%",
        width: "clamp(220px, 42vw, 500px)", height: "clamp(220px, 42vw, 500px)",
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(201,168,130,0.06) 0%, transparent 70%)",
        filter: "blur(40px)",
        pointerEvents: "none",
      }} aria-hidden />

      {/* Subtle grid */}
      <div style={{
        position: "absolute", inset: 0,
        backgroundImage: "linear-gradient(rgba(254,189,171,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(254,189,171,0.025) 1px, transparent 1px)",
        backgroundSize: "72px 72px",
        pointerEvents: "none",
      }} aria-hidden />

      {/* Vignette */}
      <div style={{
        position: "absolute", inset: 0,
        background: "radial-gradient(ellipse 80% 70% at 50% 50%, transparent 0%, rgba(8,7,5,0.7) 100%)",
        pointerEvents: "none",
      }} aria-hidden />

      {/* Content */}
      <div className="wrap" style={{ position: "relative", zIndex: 10, display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center", paddingTop: "clamp(90px,18vw,120px)", paddingBottom: "clamp(60px,10vw,80px)" }}>

        {/* Label */}
        <div className="hero-label badge" style={{ marginBottom: 36 }}>
          <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#FEBDAB", flexShrink: 0 }} />
          Complexo Rochavera · São Paulo
        </div>

        {/* Headline */}
        <h1 style={{ marginBottom: 28 }}>
          <div style={{ overflow: "hidden", marginBottom: 6 }}>
            <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "center", gap: "0 18px" }}>
              {words.map((word, i) => (
                <span key={i} className="hero-word t-hero" style={{ display: "inline-block", color: "#FAF7F5" }}>
                  {word}
                </span>
              ))}
            </div>
          </div>
          <div style={{ overflow: "hidden" }}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              {highlightWords.map((word, i) => (
                <span key={i} className="hero-word t-hero text-shine" style={{ display: "inline-block" }}>
                  {word}
                </span>
              ))}
            </div>
          </div>
        </h1>

        {/* Divider */}
        <div className="hero-line" style={{
          width: 80, height: 1,
          background: "linear-gradient(90deg, transparent, rgba(254,189,171,0.5), transparent)",
          marginBottom: 28,
        }} />

        {/* Subtext */}
        <p className="hero-sub t-body" style={{ maxWidth: "min(520px, 90vw)", color: "rgba(250,247,245,0.6)", marginBottom: "clamp(28px,6vw,44px)" }}>
          Salão corporativo premium desenhado para a mulher que lidera, trabalha e sabe que
          autocuidado é uma estratégia de poder.
        </p>

        {/* CTA Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 14, justifyContent: "center", marginBottom: "clamp(40px,8vw,72px)" }}>
          <button
            className="hero-cta btn btn-primary"
            onClick={() => window.open(`https://wa.me/${contact.whatsapp}?text=Olá! Gostaria de agendar um horário no Liivv Beauty.`, "_blank")}
          >
            Agendar agora
          </button>
          <button
            className="hero-cta btn btn-ghost"
            onClick={() => document.getElementById("servicos")?.scrollIntoView({ behavior: "smooth" })}
          >
            Explorar serviços
          </button>
        </div>

        {/* Stats row */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "16px clamp(24px,7vw,48px)", justifyContent: "center" }}>
          {[
            { n: "7+", l: "Anos de excelência" },
            { n: "2k+", l: "Clientes atendidas" },
            { n: "98%", l: "Satisfação" },
          ].map((s) => (
            <div key={s.l} className="hero-stat" style={{ textAlign: "center" }}>
              <div style={{ fontFamily: "var(--font-display)", fontWeight: 300, fontSize: "clamp(1.8rem,3.5vw,2.8rem)", color: "#FEBDAB", letterSpacing: "-0.02em", lineHeight: 1 }}>
                {s.n}
              </div>
              <div className="t-label" style={{ color: "rgba(250,247,245,0.4)", marginTop: 4 }}>
                {s.l}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="hero-scroll"
        style={{ position: "absolute", bottom: 36, left: "50%", transform: "translateX(-50%)", display: "flex", flexDirection: "column", alignItems: "center", gap: 8, cursor: "pointer" }}
        onClick={() => document.getElementById("sobre")?.scrollIntoView({ behavior: "smooth" })}
      >
        <span className="t-label" style={{ color: "rgba(250,247,245,0.3)" }}>Scroll</span>
        <div style={{ width: 1, height: 48, background: "linear-gradient(to bottom, rgba(254,189,171,0.5), transparent)", animation: "pulse-glow 2s ease-in-out infinite" }} />
      </div>
    </section>
  );
}

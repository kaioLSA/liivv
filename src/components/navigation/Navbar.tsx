"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { gsap } from "gsap";
import { Menu, X } from "lucide-react";
import { navigation, contact } from "@/config/site";

export function Navbar() {
  const navRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    gsap.fromTo(navRef.current,
      { y: -100, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.2, ease: "power4.out", delay: 0.3 }
    );
  }, []);

  // Lock scroll without causing layout shift
  useEffect(() => {
    const html = document.documentElement;
    if (open) {
      const scrollY = window.scrollY;
      html.style.overflow = "hidden";
      html.style.position = "fixed";
      html.style.top = `-${scrollY}px`;
      html.style.width = "100%";
    } else {
      const scrollY = Math.abs(parseInt(html.style.top || "0", 10));
      html.style.overflow = "";
      html.style.position = "";
      html.style.top = "";
      html.style.width = "";
      window.scrollTo(0, scrollY);
    }
    return () => {
      html.style.overflow = "";
      html.style.position = "";
      html.style.top = "";
      html.style.width = "";
    };
  }, [open]);

  const go = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <>
      <nav
        ref={navRef}
        style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 50,
          transition: "all 0.5s ease",
          padding: scrolled ? "12px 0" : "20px 0",
          ...(scrolled
            ? { background: "rgba(8,7,5,0.88)", backdropFilter: "blur(32px)", borderBottom: "1px solid rgba(254,189,171,0.1)" }
            : { background: "transparent" }
          ),
        }}
      >
        <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {/* Logo */}
          <button
            onClick={() => go("#hero")}
            style={{ position: "relative", width: 120, height: 36, flexShrink: 0, opacity: 0.92, cursor: "pointer", background: "none", border: "none" }}
            aria-label="Liivv Beauty"
          >
            <Image src="/logo/liivv.svg" alt="Liivv Beauty" fill style={{ objectFit: "contain", objectPosition: "left" }} priority />
          </button>

          {/* Desktop links */}
          <div className="nav-desktop-links" style={{ alignItems: "center", gap: 36 }}>
            {navigation.map((item) => (
              <button
                key={item.href}
                onClick={() => go(item.href)}
                className="t-small"
                style={{ background: "none", border: "none", color: "rgba(250,247,245,0.6)", cursor: "pointer", transition: "color 0.2s", letterSpacing: "0.02em" }}
                onMouseEnter={e => (e.currentTarget.style.color = "#FAF7F5")}
                onMouseLeave={e => (e.currentTarget.style.color = "rgba(250,247,245,0.6)")}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Desktop CTA */}
          <button
            className="nav-desktop-cta btn btn-primary btn-sm"
            onClick={() => window.open(`https://wa.me/${contact.whatsapp}?text=Olá! Gostaria de agendar um horário.`, "_blank")}
          >
            Agendar horário
          </button>

          {/* Hamburger */}
          <button
            className="nav-hamburger"
            onClick={() => setOpen(!open)}
            aria-label={open ? "Fechar menu" : "Abrir menu"}
            style={{
              background: "none", border: "none", outline: "none",
              cursor: "pointer", padding: "4px",
              display: "flex", alignItems: "center", justifyContent: "center",
              color: "#FAF7F5",
              WebkitTapHighlightColor: "transparent",
            }}
          >
            {open ? <X size={22} strokeWidth={1.5} /> : <Menu size={22} strokeWidth={1.5} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu — full-screen overlay */}
      <div
        aria-hidden={!open}
        style={{
          position: "fixed", top: 0, left: 0,
          width: "100vw", height: "100dvh",
          zIndex: 45,
          backgroundColor: "#080705",
          display: "flex", flexDirection: "column",
          overflow: "hidden",
          transition: "opacity 0.38s ease, transform 0.38s cubic-bezier(0.16,1,0.3,1)",
          opacity: open ? 1 : 0,
          transform: open ? "translateY(0)" : "translateY(-12px)",
          pointerEvents: open ? "auto" : "none",
        }}
      >
        {/* Top strip — mirrors the navbar row */}
        <div style={{
          padding: "20px 0",
          borderBottom: "1px solid rgba(254,189,171,0.08)",
          flexShrink: 0,
        }}>
          <div className="wrap" style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <div style={{ position: "relative", width: 120, height: 36, opacity: 0.92 }}>
              <Image src="/logo/liivv.svg" alt="Liivv Beauty" fill style={{ objectFit: "contain", objectPosition: "left" }} />
            </div>
            <button
              onClick={() => setOpen(false)}
              aria-label="Fechar menu"
              style={{
                background: "none", border: "none",
                padding: 6,
                display: "flex", alignItems: "center", justifyContent: "center",
                cursor: "pointer", color: "rgba(250,247,245,0.55)",
                transition: "color 0.2s",
              }}
            >
              <X size={22} strokeWidth={1.5} />
            </button>
          </div>
        </div>

        {/* Nav links */}
        <div style={{ flex: 1, display: "flex", flexDirection: "column", justifyContent: "flex-start", padding: "8px clamp(1.25rem,5vw,5rem) 0" }}>
          {navigation.map((item, i) => (
            <button
              key={item.href}
              onClick={() => go(item.href)}
              style={{
                background: "none", border: "none", cursor: "pointer",
                textAlign: "left", padding: "18px 0",
                borderBottom: "1px solid rgba(254,189,171,0.07)",
                color: "#FAF7F5",
                fontFamily: "var(--font-body)",
                fontSize: "clamp(1.2rem, 5vw, 1.5rem)",
                fontWeight: 300,
                letterSpacing: "-0.01em",
                transition: "color 0.2s, padding-left 0.22s",
                display: "flex", alignItems: "center", justifyContent: "space-between",
              }}
              onMouseEnter={e => { e.currentTarget.style.color = "#FEBDAB"; e.currentTarget.style.paddingLeft = "6px"; }}
              onMouseLeave={e => { e.currentTarget.style.color = "#FAF7F5"; e.currentTarget.style.paddingLeft = "0"; }}
            >
              {item.label}
              <span style={{ color: "rgba(254,189,171,0.25)", fontSize: "0.9rem" }}>→</span>
            </button>
          ))}
        </div>

        {/* Bottom — CTA */}
        <div style={{
          padding: "20px clamp(1.25rem,5vw,5rem) 32px",
          borderTop: "1px solid rgba(254,189,171,0.08)",
          display: "flex", flexDirection: "column", gap: 10,
          flexShrink: 0,
        }}>
          <button
            className="btn btn-primary"
            style={{ width: "100%", justifyContent: "center", fontSize: "0.9rem" }}
            onClick={() => {
              window.open(`https://wa.me/${contact.whatsapp}?text=Olá! Gostaria de agendar um horário no Liivv Beauty.`, "_blank");
              setOpen(false);
            }}
          >
            Agendar via WhatsApp
          </button>
          <p style={{ textAlign: "center", fontSize: "0.68rem", color: "rgba(250,247,245,0.2)", fontFamily: "var(--font-body)", letterSpacing: "0.08em" }}>
            COMPLEXO ROCHAVERA · SÃO PAULO
          </p>
        </div>
      </div>
    </>
  );
}

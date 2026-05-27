"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import Image from "next/image";

export default function Loading() {
  const barRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();
    tl.fromTo(wrapRef.current, { opacity: 0 }, { opacity: 1, duration: 0.4 })
      .fromTo(barRef.current, { scaleX: 0, transformOrigin: "left" }, { scaleX: 1, duration: 1.6, ease: "power2.inOut" }, 0.2)
      .to(wrapRef.current, { opacity: 0, duration: 0.3, delay: 0.2 });
  }, []);

  return (
    <div style={{
      position: "fixed", inset: 0, zIndex: 9999,
      backgroundColor: "#080705",
      display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 40,
    }}>
      <div ref={wrapRef} style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 36 }}>
        <div style={{ position: "relative", width: 140, height: 42 }}>
          <Image src="/logo/liivv.svg" alt="Liivv Beauty" fill style={{ objectFit: "contain" }} priority />
        </div>

        <div style={{ width: 160, height: 1, background: "rgba(254,189,171,0.12)", borderRadius: 1, overflow: "hidden", position: "relative" }}>
          <div ref={barRef} style={{
            position: "absolute", inset: 0,
            background: "linear-gradient(90deg, #FEBDAB, #C9A882)",
          }} />
        </div>

        <p style={{
          fontFamily: "var(--font-body)", fontSize: "0.65rem",
          color: "rgba(250,247,245,0.3)", letterSpacing: "0.25em", textTransform: "uppercase",
        }}>
          Beleza Inteligente
        </p>
      </div>
    </div>
  );
}

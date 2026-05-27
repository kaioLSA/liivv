"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";

gsap.registerPlugin(ScrollTrigger);

interface TextRevealProps {
  children: string;
  as?: "h1" | "h2" | "h3" | "h4" | "p" | "span";
  className?: string;
  delay?: number;
  stagger?: number;
  splitBy?: "chars" | "words" | "lines";
}

export function TextReveal({
  children,
  as: Tag = "h2",
  className,
  delay = 0,
  stagger = 0.04,
  splitBy = "words",
}: TextRevealProps) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const text = el.textContent ?? "";
    const units = splitBy === "chars"
      ? text.split("")
      : splitBy === "words"
      ? text.split(" ")
      : [text];

    el.innerHTML = units
      .map((u) => `<span class="clip-text inline-block"><span class="inline-block">${u}${splitBy === "words" ? "&nbsp;" : ""}</span></span>`)
      .join("");

    const spans = el.querySelectorAll("span > span");

    const tween = gsap.fromTo(
      spans,
      { y: "110%", opacity: 0 },
      {
        y: "0%",
        opacity: 1,
        duration: 1,
        ease: "power4.out",
        stagger,
        delay,
        scrollTrigger: {
          trigger: el,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      tween.kill();
      el.innerHTML = text;
    };
  }, [children, delay, stagger, splitBy]);

  return (
    // @ts-expect-error dynamic tag
    <Tag ref={ref} className={cn("overflow-hidden", className)}>
      {children}
    </Tag>
  );
}

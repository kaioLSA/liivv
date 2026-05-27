"use client";

import { useEffect, useRef, type ReactNode } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { cn } from "@/lib/utils/cn";

gsap.registerPlugin(ScrollTrigger);

interface ScrollRevealProps {
  children: ReactNode;
  className?: string;
  animation?: "fade" | "slide" | "scale" | "blur";
  delay?: number;
  duration?: number;
  once?: boolean;
}

export function ScrollReveal({
  children,
  className,
  animation = "slide",
  delay = 0,
  duration = 0.9,
  once = false,
}: ScrollRevealProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fromVars: gsap.TweenVars = {
      fade: { opacity: 0 },
      slide: { opacity: 0, y: 50 },
      scale: { opacity: 0, scale: 0.92 },
      blur: { opacity: 0, filter: "blur(12px)", y: 20 },
    }[animation];

    const toVars: gsap.TweenVars = {
      fade: { opacity: 1 },
      slide: { opacity: 1, y: 0 },
      scale: { opacity: 1, scale: 1 },
      blur: { opacity: 1, filter: "blur(0px)", y: 0 },
    }[animation];

    const tween = gsap.fromTo(el, fromVars, {
      ...toVars,
      duration,
      delay,
      ease: "power4.out",
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        toggleActions: once ? "play none none none" : "play none none reverse",
      },
    });

    return () => {
      tween.kill();
    };
  }, [animation, delay, duration, once]);

  return (
    <div ref={ref} className={cn("will-change-transform", className)}>
      {children}
    </div>
  );
}

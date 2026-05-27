"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { EASE, DURATION, SCROLL_DEFAULTS } from "@/config/animations";

gsap.registerPlugin(ScrollTrigger);

export function useScrollAnimation() {
  const ref = useRef<HTMLElement>(null);

  const revealFromBottom = (
    targets: string | Element | Element[],
    options?: { stagger?: number; delay?: number; start?: string }
  ) => {
    return gsap.fromTo(
      targets,
      { y: 60, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.expo,
        stagger: options?.stagger ?? 0,
        delay: options?.delay ?? 0,
        scrollTrigger: {
          trigger: typeof targets === "string" ? targets : undefined,
          start: options?.start ?? SCROLL_DEFAULTS.start,
          toggleActions: SCROLL_DEFAULTS.toggleActions,
        },
      }
    );
  };

  const blurReveal = (
    targets: string | Element | Element[],
    options?: { stagger?: number; delay?: number }
  ) => {
    return gsap.fromTo(
      targets,
      { filter: "blur(10px)", opacity: 0, y: 20 },
      {
        filter: "blur(0px)",
        opacity: 1,
        y: 0,
        duration: DURATION.slow,
        ease: EASE.expo,
        stagger: options?.stagger ?? 0,
        delay: options?.delay ?? 0,
        scrollTrigger: {
          trigger: typeof targets === "string" ? targets : undefined,
          start: SCROLL_DEFAULTS.start,
          toggleActions: SCROLL_DEFAULTS.toggleActions,
        },
      }
    );
  };

  const scaleReveal = (
    targets: string | Element | Element[],
    options?: { stagger?: number; delay?: number }
  ) => {
    return gsap.fromTo(
      targets,
      { scale: 0.92, opacity: 0 },
      {
        scale: 1,
        opacity: 1,
        duration: DURATION.slow,
        ease: EASE.expo,
        stagger: options?.stagger ?? 0,
        delay: options?.delay ?? 0,
        scrollTrigger: {
          trigger: typeof targets === "string" ? targets : undefined,
          start: SCROLL_DEFAULTS.start,
          toggleActions: SCROLL_DEFAULTS.toggleActions,
        },
      }
    );
  };

  return { ref, revealFromBottom, blurReveal, scaleReveal };
}

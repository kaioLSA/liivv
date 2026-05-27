"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type GSAPContextCallback = (context: { gsap: typeof gsap; ScrollTrigger: typeof ScrollTrigger }) => void;

export function useGSAP(callback: GSAPContextCallback, deps: unknown[] = []) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      callback({ gsap, ScrollTrigger });
    }, ref);

    return () => ctx.revert();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, deps);

  return ref;
}

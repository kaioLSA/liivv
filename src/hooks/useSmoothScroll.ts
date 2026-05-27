"use client";

import { useCallback } from "react";

export function useSmoothScroll() {
  const scrollTo = useCallback((target: string | number, offset = 0) => {
    if (typeof target === "number") {
      window.scrollTo({ top: target + offset, behavior: "smooth" });
      return;
    }
    const el = document.querySelector(target);
    if (!el) return;
    const top = el.getBoundingClientRect().top + window.scrollY + offset;
    window.scrollTo({ top, behavior: "smooth" });
  }, []);

  const scrollToTop = useCallback(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return { scrollTo, scrollToTop };
}

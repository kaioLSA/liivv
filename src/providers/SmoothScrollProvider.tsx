"use client";

import { createContext, useContext, type ReactNode } from "react";
import { useSmoothScroll } from "@/hooks/useSmoothScroll";

interface SmoothScrollContextValue {
  scrollTo: (target: string | number, offset?: number) => void;
  scrollToTop: () => void;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
  scrollToTop: () => {},
});

export function useSmoothScrollContext() {
  return useContext(SmoothScrollContext);
}

export function SmoothScrollProvider({ children }: { children: ReactNode }) {
  const { scrollTo, scrollToTop } = useSmoothScroll();

  return (
    <SmoothScrollContext.Provider value={{ scrollTo, scrollToTop }}>
      {children}
    </SmoothScrollContext.Provider>
  );
}

"use client";

import { createContext, useContext, useEffect, type ReactNode } from "react";
import { registerGSAPPlugins } from "@/lib/gsap/config";
import { useGlobalMouseGlow } from "@/hooks/useMouseGlow";

interface AnimationContextValue {
  isReady: boolean;
}

const AnimationContext = createContext<AnimationContextValue>({ isReady: false });

export function useAnimation() {
  return useContext(AnimationContext);
}

export function AnimationProvider({ children }: { children: ReactNode }) {
  useGlobalMouseGlow();

  useEffect(() => {
    registerGSAPPlugins();
  }, []);

  return (
    <AnimationContext.Provider value={{ isReady: true }}>
      {children}
    </AnimationContext.Provider>
  );
}

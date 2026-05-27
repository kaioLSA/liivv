"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { TextPlugin } from "gsap/TextPlugin";
import { CustomEase } from "gsap/CustomEase";

export function registerGSAPPlugins() {
  gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, TextPlugin, CustomEase);

  CustomEase.create("expo.out", "M0,0 C0.16,1 0.3,1 1,1");
  CustomEase.create("smooth.inOut", "M0,0 C0.4,0 0.2,1 1,1");

  gsap.defaults({
    ease: "power3.out",
    duration: 0.8,
  });

  ScrollTrigger.defaults({
    toggleActions: "play none none reverse",
  });
}

export { gsap, ScrollTrigger };

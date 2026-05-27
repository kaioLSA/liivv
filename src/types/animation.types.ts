export interface AnimationConfig {
  duration: number;
  ease: string;
  delay?: number;
}

export interface ScrollTriggerConfig {
  trigger: string;
  start?: string;
  end?: string;
  scrub?: boolean | number;
  markers?: boolean;
  toggleActions?: string;
}

export interface RevealAnimation {
  from: gsap.TweenVars;
  to: gsap.TweenVars;
  scrollTrigger?: ScrollTriggerConfig;
}

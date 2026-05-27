export const EASE = {
  expo: "power4.out",
  smooth: "power2.inOut",
  spring: "elastic.out(1, 0.5)",
  bounce: "back.out(1.2)",
  circ: "circ.out",
  sine: "sine.inOut",
} as const;

export const DURATION = {
  fast: 0.4,
  normal: 0.8,
  slow: 1.2,
  xslow: 1.8,
} as const;

export const STAGGER = {
  fast: 0.06,
  normal: 0.1,
  slow: 0.15,
  xslow: 0.2,
} as const;

export const SCROLL_DEFAULTS = {
  start: "top 85%",
  end: "bottom 15%",
  toggleActions: "play none none reverse",
} as const;

export const REVEAL_FROM_BOTTOM = {
  from: { y: 60, opacity: 0 },
  to: { y: 0, opacity: 1, duration: DURATION.slow, ease: EASE.expo },
} as const;

export const REVEAL_FROM_LEFT = {
  from: { x: -60, opacity: 0 },
  to: { x: 0, opacity: 1, duration: DURATION.slow, ease: EASE.expo },
} as const;

export const REVEAL_FROM_RIGHT = {
  from: { x: 60, opacity: 0 },
  to: { x: 0, opacity: 1, duration: DURATION.slow, ease: EASE.expo },
} as const;

export const SCALE_REVEAL = {
  from: { scale: 0.9, opacity: 0 },
  to: { scale: 1, opacity: 1, duration: DURATION.slow, ease: EASE.expo },
} as const;

export const BLUR_REVEAL = {
  from: { filter: "blur(12px)", opacity: 0, y: 20 },
  to: { filter: "blur(0px)", opacity: 1, y: 0, duration: DURATION.slow, ease: EASE.expo },
} as const;

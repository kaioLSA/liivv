import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/** Reveal a group of elements from bottom with scroll trigger */
export function revealGroup(
  container: HTMLElement | null,
  selector: string,
  options?: { stagger?: number; delay?: number; start?: string }
) {
  if (!container) return;
  const els = container.querySelectorAll(selector);
  if (!els.length) return;

  return gsap.fromTo(
    els,
    { y: 50, opacity: 0, filter: "blur(8px)" },
    {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      duration: 0.9,
      ease: "power4.out",
      stagger: options?.stagger ?? 0.1,
      delay: options?.delay ?? 0,
      scrollTrigger: {
        trigger: container,
        start: options?.start ?? "top 85%",
        toggleActions: "play none none reverse",
      },
    }
  );
}

/** Animate a counter from 0 to target */
export function animateCounter(
  el: HTMLElement | null,
  target: number,
  options?: { duration?: number; trigger?: HTMLElement }
) {
  if (!el) return;
  const obj = { val: 0 };
  return gsap.to(obj, {
    val: target,
    duration: options?.duration ?? 2,
    ease: "power2.out",
    onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
    scrollTrigger: options?.trigger
      ? { trigger: options.trigger, start: "top 75%", once: true }
      : undefined,
  });
}

/** Horizontal scroll scrub */
export function horizontalScroll(container: HTMLElement | null, track: HTMLElement | null) {
  if (!container || !track) return;
  const width = track.scrollWidth - container.clientWidth;
  return gsap.to(track, {
    x: -width,
    ease: "none",
    scrollTrigger: {
      trigger: container,
      pin: true,
      scrub: 1,
      start: "top top",
      end: `+=${width}`,
    },
  });
}

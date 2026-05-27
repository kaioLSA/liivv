import { cn } from "@/lib/utils/cn";

interface GlowOrbProps {
  size?: "sm" | "md" | "lg" | "xl";
  color?: "peach" | "gold" | "white";
  className?: string;
  animate?: boolean;
}

const sizes = {
  sm: "w-40 h-40",
  md: "w-64 h-64",
  lg: "w-96 h-96",
  xl: "w-[600px] h-[600px]",
};

const colors = {
  peach: "bg-brand-peach",
  gold: "bg-brand-gold",
  white: "bg-white",
};

export function GlowOrb({ size = "lg", color = "peach", className, animate = true }: GlowOrbProps) {
  return (
    <div
      className={cn(
        "absolute rounded-full blur-3xl opacity-20 pointer-events-none",
        sizes[size],
        colors[color],
        animate && "animate-glow-pulse",
        className
      )}
      aria-hidden
    />
  );
}

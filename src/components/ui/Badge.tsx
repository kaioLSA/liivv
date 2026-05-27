import { cn } from "@/lib/utils/cn";
import type { ReactNode } from "react";

interface BadgeProps {
  children: ReactNode;
  variant?: "default" | "peach" | "outline";
  className?: string;
}

export function Badge({ children, variant = "default", className }: BadgeProps) {
  const variants = {
    default: "bg-white/5 text-light-muted border border-dark-border",
    peach: "bg-brand-peach/10 text-brand-peach border border-brand-peach/20",
    outline: "bg-transparent text-light-muted border border-dark-border-strong",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-body font-medium tracking-widest uppercase rounded-full",
        variants[variant],
        className
      )}
    >
      {children}
    </span>
  );
}

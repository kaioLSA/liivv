"use client";

import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from "react";
import { cn } from "@/lib/utils/cn";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "ghost" | "outline" | "text";
  size?: "sm" | "md" | "lg";
  children: ReactNode;
  icon?: ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "primary", size = "md", className, children, icon, ...props }, ref) => {
    const base =
      "relative inline-flex items-center justify-center gap-2.5 font-body font-medium tracking-wide transition-all duration-300 ease-expo-out select-none overflow-hidden group";

    const variants = {
      primary:
        "bg-brand-peach text-dark hover:bg-brand-peach-light shadow-button hover:shadow-button-hover active:scale-[0.98]",
      ghost:
        "bg-white/5 text-light border border-dark-border hover:border-dark-border-strong hover:bg-white/8 backdrop-blur-sm",
      outline:
        "bg-transparent text-brand-peach border border-brand-peach/40 hover:border-brand-peach hover:bg-brand-peach/8",
      text:
        "bg-transparent text-light-muted hover:text-light underline-offset-4 hover:underline p-0",
    };

    const sizes = {
      sm: "h-9 px-5 text-sm rounded-full",
      md: "h-12 px-7 text-sm rounded-full",
      lg: "h-14 px-9 text-base rounded-full",
    };

    return (
      <button
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        {...props}
      >
        <span className="relative z-10 flex items-center gap-2.5">
          {children}
          {icon && <span className="transition-transform duration-300 group-hover:translate-x-0.5">{icon}</span>}
        </span>
        {variant === "primary" && (
          <span className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        )}
      </button>
    );
  }
);

Button.displayName = "Button";
export { Button };

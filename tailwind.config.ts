import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          peach: "#FEBDAB",
          "peach-light": "#FDD5C8",
          "peach-dark": "#E8A090",
          "peach-muted": "#C9907E",
          gold: "#C9A882",
          "gold-light": "#DEC4A1",
        },
        dark: {
          DEFAULT: "#0A0907",
          surface: "#120E0B",
          card: "#1A1410",
          elevated: "#221C17",
          border: "rgba(254,189,171,0.12)",
          "border-strong": "rgba(254,189,171,0.25)",
        },
        light: {
          DEFAULT: "#FAF7F5",
          muted: "rgba(250,247,245,0.6)",
          subtle: "rgba(250,247,245,0.35)",
          ghost: "rgba(250,247,245,0.12)",
        },
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "Georgia", "serif"],
        body: ["var(--font-inter)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      fontSize: {
        "display-2xl": ["clamp(4rem,10vw,10rem)", { lineHeight: "0.9", letterSpacing: "-0.04em" }],
        "display-xl": ["clamp(3rem,7vw,7rem)", { lineHeight: "0.92", letterSpacing: "-0.03em" }],
        "display-lg": ["clamp(2.5rem,5vw,5rem)", { lineHeight: "0.95", letterSpacing: "-0.025em" }],
        "display-md": ["clamp(2rem,3.5vw,3.5rem)", { lineHeight: "1", letterSpacing: "-0.02em" }],
      },
      spacing: {
        "section": "clamp(5rem,10vw,10rem)",
        "section-sm": "clamp(3rem,6vw,6rem)",
      },
      backdropBlur: {
        xs: "2px",
      },
      backgroundImage: {
        "radial-peach": "radial-gradient(ellipse at center, rgba(254,189,171,0.15) 0%, transparent 70%)",
        "radial-peach-sm": "radial-gradient(ellipse at center, rgba(254,189,171,0.08) 0%, transparent 60%)",
        "gradient-hero": "linear-gradient(135deg, #0A0907 0%, #120E0B 50%, #0A0907 100%)",
        "gradient-card": "linear-gradient(135deg, rgba(26,20,16,0.9) 0%, rgba(18,14,11,0.6) 100%)",
        "gradient-peach": "linear-gradient(135deg, #FEBDAB 0%, #E8A090 100%)",
        "gradient-gold": "linear-gradient(135deg, #DEC4A1 0%, #C9A882 100%)",
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "float-slow": "float 9s ease-in-out infinite",
        "glow-pulse": "glowPulse 3s ease-in-out infinite",
        "fade-in": "fadeIn 0.8s ease forwards",
        "slide-up": "slideUp 0.8s cubic-bezier(0.16,1,0.3,1) forwards",
        "shimmer": "shimmer 2s linear infinite",
      },
      keyframes: {
        float: {
          "0%,100%": { transform: "translateY(0px) rotate(0deg)" },
          "33%": { transform: "translateY(-12px) rotate(1deg)" },
          "66%": { transform: "translateY(-6px) rotate(-1deg)" },
        },
        glowPulse: {
          "0%,100%": { opacity: "0.4", transform: "scale(1)" },
          "50%": { opacity: "0.7", transform: "scale(1.05)" },
        },
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        slideUp: {
          from: { opacity: "0", transform: "translateY(30px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% center" },
          "100%": { backgroundPosition: "200% center" },
        },
      },
      boxShadow: {
        "glow-peach": "0 0 40px rgba(254,189,171,0.2), 0 0 80px rgba(254,189,171,0.08)",
        "glow-peach-sm": "0 0 20px rgba(254,189,171,0.15)",
        "glow-peach-lg": "0 0 80px rgba(254,189,171,0.3), 0 0 160px rgba(254,189,171,0.12)",
        "card": "0 1px 0 rgba(254,189,171,0.08) inset, 0 20px 60px rgba(0,0,0,0.4)",
        "card-hover": "0 1px 0 rgba(254,189,171,0.15) inset, 0 30px 80px rgba(0,0,0,0.5), 0 0 40px rgba(254,189,171,0.1)",
        "button": "0 4px 24px rgba(254,189,171,0.3), 0 1px 0 rgba(255,255,255,0.2) inset",
        "button-hover": "0 8px 40px rgba(254,189,171,0.4), 0 1px 0 rgba(255,255,255,0.3) inset",
      },
      transitionTimingFunction: {
        "expo-out": "cubic-bezier(0.16, 1, 0.3, 1)",
        "expo-in-out": "cubic-bezier(0.87, 0, 0.13, 1)",
        "spring": "cubic-bezier(0.34, 1.56, 0.64, 1)",
      },
    },
  },
  plugins: [],
};

export default config;

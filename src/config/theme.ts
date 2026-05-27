export const theme = {
  colors: {
    brand: {
      peach: "#FEBDAB",
      peachLight: "#FDD5C8",
      peachDark: "#E8A090",
      gold: "#C9A882",
      goldLight: "#DEC4A1",
    },
    dark: {
      DEFAULT: "#0A0907",
      surface: "#120E0B",
      card: "#1A1410",
      elevated: "#221C17",
    },
    light: {
      DEFAULT: "#FAF7F5",
      muted: "rgba(250,247,245,0.6)",
      subtle: "rgba(250,247,245,0.35)",
    },
  },
  fonts: {
    display: "Cormorant Garamond, Georgia, serif",
    body: "Inter, system-ui, sans-serif",
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "20px",
    xl: "28px",
    full: "9999px",
  },
  transitions: {
    fast: "0.2s cubic-bezier(0.16,1,0.3,1)",
    normal: "0.4s cubic-bezier(0.16,1,0.3,1)",
    slow: "0.8s cubic-bezier(0.16,1,0.3,1)",
  },
} as const;

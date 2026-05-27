"use client";

import { createContext, useContext, type ReactNode } from "react";

interface ThemeContextValue {
  theme: "dark";
  colors: {
    primary: string;
    background: string;
    surface: string;
    text: string;
  };
}

const ThemeContext = createContext<ThemeContextValue>({
  theme: "dark",
  colors: {
    primary: "#FEBDAB",
    background: "#0A0907",
    surface: "#120E0B",
    text: "#FAF7F5",
  },
});

export function useTheme() {
  return useContext(ThemeContext);
}

export function ThemeProvider({ children }: { children: ReactNode }) {
  return (
    <ThemeContext.Provider
      value={{
        theme: "dark",
        colors: {
          primary: "#FEBDAB",
          background: "#0A0907",
          surface: "#120E0B",
          text: "#FAF7F5",
        },
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

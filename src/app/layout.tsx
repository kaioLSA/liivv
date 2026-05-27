import type { Metadata, Viewport } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { AnimationProvider } from "@/providers/AnimationProvider";

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Liivv Beauty — Beleza Inteligente",
  description:
    "Salão de beleza corporativo premium no Complexo Rochavera, São Paulo. Sofisticação, agilidade e excelência para a mulher que lidera.",
  keywords: ["salão beleza corporativo", "Rochavera", "beleza inteligente", "salão premium São Paulo"],
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#080705",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR" className={`${dmSans.variable} ${cormorant.variable}`}>
      <body style={{ backgroundColor: "#080705", color: "#FAF7F5", overflowX: "hidden" }}>
        <AnimationProvider>{children}</AnimationProvider>
      </body>
    </html>
  );
}

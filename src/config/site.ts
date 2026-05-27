import type { ContactInfo, NavigationItem, SocialLink } from "@/types/global.types";

export const siteConfig = {
  name: "Liivv Beauty",
  tagline: "Beleza Inteligente",
  description:
    "Salão de beleza corporativo que une sofisticação, agilidade e excelência. Cuidamos da mulher que trabalha, lidera e vive intensamente.",
  url: "https://liivvbeauty.com.br",
  ogImage: "/og-image.jpg",
  locale: "pt-BR",
};

export const navigation: NavigationItem[] = [
  { label: "Início", href: "#hero" },
  { label: "Sobre", href: "#sobre" },
  { label: "Serviços", href: "#servicos" },
  { label: "Diferenciais", href: "#diferenciais" },
  { label: "Depoimentos", href: "#depoimentos" },
  { label: "Contato", href: "#contato" },
];

export const contact: ContactInfo = {
  phone: "+55 11 99999-9999",
  whatsapp: "5511999999999",
  email: "contato@liivvbeauty.com.br",
  address: "Complexo Rochavera",
  addressDetail: "Av. das Nações Unidas, São Paulo – SP",
  hours: "Seg–Sex: 8h–20h | Sáb: 9h–18h",
  instagram: "@liivvbeauty",
};

export const socialLinks: SocialLink[] = [
  { platform: "Instagram", href: "https://instagram.com/liivvbeauty", icon: "instagram" },
  { platform: "WhatsApp", href: `https://wa.me/5511999999999`, icon: "whatsapp" },
];

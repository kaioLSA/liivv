import type { Service } from "@/types/content.types";

export const services: Service[] = [
  {
    id: "escova",
    title: "Escova Profissional",
    description:
      "Resultado impecável em tempo reduzido. Fios lisos, sedosos e com acabamento que dura o dia inteiro no ritmo corporativo.",
    duration: "45–60 min",
    icon: "✦",
    featured: true,
    category: "hair",
  },
  {
    id: "corte-feminino",
    title: "Corte Feminino",
    description:
      "Cortes modernos e personalizados pensados para valorizar sua imagem profissional. Cada detalhe executado com precisão.",
    duration: "60–90 min",
    icon: "✦",
    featured: true,
    category: "hair",
  },
  {
    id: "coloracao",
    title: "Coloração",
    description:
      "Do tom natural ao total transformation. Utilizamos técnicas avançadas e produtos premium para resultados de alta performance.",
    duration: "120–180 min",
    icon: "✦",
    category: "hair",
  },
  {
    id: "mechas",
    title: "Mechas & Luzes",
    description:
      "Técnicas modernas de iluminação que adicionam dimensão, movimento e sofisticação aos seus fios.",
    duration: "120–240 min",
    icon: "✦",
    featured: true,
    category: "hair",
  },
  {
    id: "tratamento",
    title: "Tratamentos Capilares",
    description:
      "Protocolos intensivos de reconstrução, hidratação e nutrição para cabelos com saúde e brilho.",
    duration: "60–90 min",
    icon: "✦",
    category: "treatment",
  },
  {
    id: "manicure",
    title: "Manicure & Pedicure",
    description:
      "Cuidado completo das mãos e pés com produtos de alta qualidade. Detalhes que completam uma imagem profissional impecável.",
    duration: "45–75 min",
    icon: "✦",
    category: "nails",
  },
  {
    id: "corte-masculino",
    title: "Corte Masculino",
    description:
      "Cortes precisos e modernos para o executivo que valoriza apresentação e praticidade em um ambiente sofisticado.",
    duration: "30–45 min",
    icon: "✦",
    category: "hair",
  },
];

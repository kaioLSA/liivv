import type { Stat, TimelineItem, Differential, FAQItem } from "@/types/content.types";

export const stats: Stat[] = [
  { value: "7", suffix: "+", label: "Anos de excelência", description: "Consolidados no Complexo Rochavera" },
  { value: "2000", suffix: "+", label: "Clientes atendidas", description: "Mulheres que confiam na Liivv" },
  { value: "98", suffix: "%", label: "Satisfação", description: "Taxa de retorno das clientes" },
  { value: "15", suffix: "min", label: "Tempo médio de espera", description: "Respeito ao seu tempo" },
];

export const timeline: TimelineItem[] = [
  {
    year: "2018",
    title: "A origem",
    description:
      "O salão nasce no coração do Complexo Rochavera com a visão de ser referência em beleza para o público corporativo de São Paulo.",
  },
  {
    year: "2021",
    title: "Expansão de serviços",
    description:
      "Ampliação do portfólio com tratamentos premium e novos protocolos desenvolvidos para as demandas da mulher moderna.",
  },
  {
    year: "2024",
    title: "Nova gestão, nova identidade",
    description:
      "Erika traz sua experiência em branding e planejamento estratégico para reposicionar o Liivv como referência em beleza inteligente.",
  },
  {
    year: "2025",
    title: "Beleza que performa",
    description:
      "Consolidação da marca Liivv Beauty como o destino premium para mulheres que lideram, trabalham e se cuidam com propósito.",
  },
];

export const differentials: Differential[] = [
  {
    id: "agilidade",
    title: "Agilidade sem abrir mão da qualidade",
    description:
      "Serviços precisos e rápidos desenvolvidos para caber na agenda de quem não pode parar. Pontualidade é um compromisso, não uma promessa.",
    icon: "⚡",
  },
  {
    id: "experiencia",
    title: "Experiência corporativa completa",
    description:
      "Ambiente sofisticado, atendimento personalizado e um ritual de beleza pensado para elevar sua confiança e presença profissional.",
    icon: "◆",
  },
  {
    id: "localizacao",
    title: "Localização estratégica",
    description:
      "Dentro do Complexo Rochavera, próximo dos maiores escritórios de São Paulo. Beleza no caminho do trabalho, sem desvios.",
    icon: "◉",
  },
  {
    id: "qualidade",
    title: "Padrão premium em cada detalhe",
    description:
      "Produtos de alta performance, profissionais especializados e protocolos exclusivos que garantem resultado impecável em toda visita.",
    icon: "✦",
  },
  {
    id: "personalizacao",
    title: "Atendimento totalmente personalizado",
    description:
      "Cada cliente tem um perfil único. Conhecemos sua rotina, suas preferências e entregamos resultados que combinam com quem você é.",
    icon: "◈",
  },
  {
    id: "confianca",
    title: "7 anos construindo confiança",
    description:
      "Uma história de consistência, qualidade e relacionamentos duradouros. Clientes que voltam todo mês porque sabem o que vão encontrar.",
    icon: "◐",
  },
];

export const faqItems: FAQItem[] = [
  {
    question: "Preciso agendar com antecedência?",
    answer:
      "Recomendamos o agendamento prévio para garantir o horário ideal para você. Nosso sistema online está disponível 24h e o agendamento via WhatsApp é rápido e prático.",
  },
  {
    question: "Vocês atendem homens também?",
    answer:
      "Sim! Oferecemos cortes masculinos com a mesma qualidade e agilidade que nossos clientes corporativos esperam.",
  },
  {
    question: "Qual o tempo médio de atendimento?",
    answer:
      "Cada serviço tem seu tempo específico informado no agendamento. Trabalhamos com pontualidade para respeitar sua agenda profissional.",
  },
  {
    question: "Vocês têm estacionamento?",
    answer:
      "Sim, estamos dentro do Complexo Rochavera que conta com amplo estacionamento e facilidade de acesso.",
  },
  {
    question: "Quais formas de pagamento aceitam?",
    answer:
      "Aceitamos cartões de crédito, débito, Pix e dinheiro. Para pagamentos corporativos ou planos de assinatura, entre em contato conosco.",
  },
  {
    question: "Vocês oferecem pacotes ou planos?",
    answer:
      "Estamos estruturando nossos planos de fidelidade para oferecer a melhor experiência às clientes regulares. Em breve lançaremos novidades exclusivas.",
  },
];

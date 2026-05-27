export interface Service {
  id: string;
  title: string;
  description: string;
  duration: string;
  icon: string;
  featured?: boolean;
  category: "hair" | "nails" | "treatment";
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company?: string;
  content: string;
  rating: number;
  avatar?: string;
}

export interface Stat {
  value: string;
  suffix?: string;
  label: string;
  description?: string;
}

export interface TimelineItem {
  year: string;
  title: string;
  description: string;
}

export interface Differential {
  id: string;
  title: string;
  description: string;
  icon: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

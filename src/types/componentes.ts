// src/types/componentes.ts

import type { FAQItem } from "./procedimento";

export type HeroServicoData = {
  nome?: string;
  categoria?: string;
  titulo: string;
  subtitulo: string;
  imagemHero: string;
  preco?: string;
  whatsapp: string;
};

export type IntroducaoServicoData = {
  nome: string;
  titulo?: string;
  introducao: string[];
  imagemDestaque: string;
};

export type BeneficiosServicoData = {
  beneficios: string[];
};

export type FAQServicoData = {
  faq: FAQItem[];
};

export type CTAAgendamentoData = {
  whatsapp: string;
};
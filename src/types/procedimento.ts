export interface FAQItem {
  pergunta: string;
  resposta: string;
}

export interface Procedimento {
  slug: string;
  categoria: string;

  nome: string;

  tituloSeo: string;
  descricaoSeo: string;

  titulo: string;
  subtitulo: string;

  imagemHero: string;
  imagemDestaque: string;

  preco: string;

  whatsapp: string;

  introducao: string[];

  beneficios: string[];

  faq: FAQItem[];
}
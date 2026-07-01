import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";
import { precos } from "../precos";

export const depilacaoVirilhaCompleta: Procedimento = {
  slug: "depilacao-virilha-completa",

  categoria: "Depilação",

  nome: "Depilação Virilha Completa",

  tituloSeo:
    "Depilação Virilha Completa em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Depilação de virilha completa em Balneário Camboriú por R$ 85,00. Atendimento com discrição, higiene e conforto.",

  titulo:
    "Depilação Virilha Completa em Balneário Camboriú",

  subtitulo:
    "Mais conforto, liberdade e sensação de pele lisa com um atendimento cuidadoso e profissional.",

  imagemHero: "/images/services/depilacao.jpg",

  imagemDestaque: "/images/services/depilacao.jpg",

  preco: precos.depilacaoVirilhaCompleta,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma depilação de virilha completa."
  ),

  introducao: [
    "A depilação de virilha completa proporciona uma sensação prolongada de limpeza, conforto e bem-estar.",
    "O procedimento é realizado com discrição, técnica e atenção ao conforto da cliente.",
    "Priorizamos higiene, segurança e um ambiente acolhedor para oferecer uma excelente experiência."
  ],

  beneficios: [
    "Pele lisa",
    "Mais conforto",
    "Resultado uniforme",
    "Maior higiene",
    "Atendimento profissional"
  ],

  faq: [
    {
      pergunta: "Qual o valor da depilação de virilha completa?",
      resposta:
        "O procedimento custa R$ 85,00."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos o agendamento pelo WhatsApp."
    },
    {
      pergunta: "Qual a diferença para a virilha tradicional?",
      resposta:
        "A virilha completa remove uma área maior de pelos em comparação à depilação tradicional."
    },
    {
      pergunta: "Quanto tempo dura o resultado?",
      resposta:
        "Depende do crescimento natural dos pelos, mas normalmente dura algumas semanas."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
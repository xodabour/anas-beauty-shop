import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";
import { precos } from "../precos";

export const depilacaoGluteos: Procedimento = {
  slug: "depilacao-gluteos",

  categoria: "Depilação",

  nome: "Depilação de Glúteos",

  tituloSeo: "Depilação de Glúteos em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Depilação de glúteos em Balneário Camboriú por R$ 50,00. Atendimento cuidadoso, discreto e profissional no Ana's Beauty Shop.",

  titulo: "Depilação de Glúteos em Balneário Camboriú",

  subtitulo:
    "Procedimento realizado com discrição, higiene e conforto para uma pele mais lisa e bem cuidada.",

  imagemHero: "/images/services/depilacao.jpg",

  imagemDestaque: "/images/services/depilacao.jpg",

  preco: precos.depilacaoGluteos,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma depilação de glúteos."
  ),

  introducao: [
    "A depilação de glúteos é indicada para quem deseja uma pele mais lisa, uniforme e com sensação prolongada de cuidado.",
    "No Ana's Beauty Shop, o procedimento é realizado com discrição, higiene e atenção ao conforto da cliente.",
    "O atendimento acontece em um ambiente acolhedor, pensado para proporcionar segurança, bem-estar e um resultado delicado."
  ],

  beneficios: [
    "Pele mais lisa",
    "Atendimento discreto",
    "Mais conforto",
    "Higiene e cuidado",
    "Resultado uniforme"
  ],

  faq: [
    {
      pergunta: "Qual o valor da depilação de glúteos?",
      resposta:
        "A depilação de glúteos custa R$ 50,00."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos agendar pelo WhatsApp para garantir disponibilidade."
    },
    {
      pergunta: "O atendimento é discreto?",
      resposta:
        "Sim. O procedimento é realizado com discrição, cuidado e respeito ao conforto da cliente."
    },
    {
      pergunta: "Quanto tempo dura o resultado?",
      resposta:
        "O resultado varia conforme o crescimento natural dos pelos, mas normalmente dura algumas semanas."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
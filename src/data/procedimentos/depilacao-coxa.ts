import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";

export const depilacaoCoxa: Procedimento = {
  slug: "depilacao-coxa",

  categoria: "Depilação",

  nome: "Depilação de Coxa",

  tituloSeo: "Depilação de Coxa em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Depilação de coxa em Balneário Camboriú por R$ 60,00. Atendimento cuidadoso, pele lisa e conforto no Ana's Beauty Shop.",

  titulo: "Depilação de Coxa em Balneário Camboriú",

  subtitulo:
    "Pele mais lisa, macia e bem cuidada com um procedimento realizado com atenção e conforto.",

  imagemHero: "/images/services/depilacao.jpg",

  imagemDestaque: "/images/services/depilacao.jpg",

  preco: "R$ 60,00",

  whatsapp: config.whatsapp(
  "Olá! Gostaria de agendar uma depilação de coxa."
),

  introducao: [
    "A depilação de coxa é indicada para quem deseja uma pele mais lisa, uniforme e com sensação prolongada de cuidado.",
    "No Ana's Beauty Shop, o procedimento é realizado com atenção ao conforto da cliente e cuidado com a pele.",
    "É uma ótima opção para complementar outros procedimentos de depilação corporal e manter a pele sempre bem cuidada."
  ],

  beneficios: [
    "Pele lisa",
    "Mais conforto",
    "Acabamento uniforme",
    "Sensação de leveza",
    "Resultado duradouro"
  ],

  faq: [
    {
      pergunta: "Qual o valor da depilação de coxa?",
      resposta:
        "A depilação de coxa custa R$ 60,00."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos agendar pelo WhatsApp para garantir disponibilidade."
    },
    {
      pergunta: "Quanto tempo dura o resultado?",
      resposta:
        "O resultado varia conforme o crescimento dos pelos, mas normalmente dura algumas semanas."
    },
    {
      pergunta: "Posso combinar com perna inteira?",
      resposta:
        "Sim. Também oferecemos depilação de perna inteira e outros procedimentos corporais."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
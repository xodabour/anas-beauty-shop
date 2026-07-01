import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";

export const manicure: Procedimento = {
  slug: "manicure",

  categoria: "Unhas",

  nome: "Manicure",

  tituloSeo: "Manicure em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Manicure tradicional em Balneário Camboriú por R$ 40,00. Cuidado completo com as unhas das mãos no Ana's Beauty Shop.",

  titulo: "Manicure em Balneário Camboriú",

  subtitulo:
    "Unhas bem cuidadas, acabamento delicado e esmaltação elegante para valorizar suas mãos.",

  imagemHero: "/images/services/unhas.jpg",

  imagemDestaque: "/images/services/unhas.jpg",

  preco: "R$ 40,00",

  whatsapp: config.whatsapp(
  "Olá! Gostaria de agendar uma manicure."
),

  introducao: [
    "A manicure tradicional é ideal para quem deseja manter as unhas das mãos bonitas, limpas e bem cuidadas.",
    "No Ana's Beauty Shop, o atendimento é realizado com atenção aos detalhes, higiene e acabamento elegante.",
    "O procedimento inclui cuidado com as unhas, cutículas e esmaltação, proporcionando um resultado delicado e sofisticado."
  ],

  beneficios: [
    "Unhas bem cuidadas",
    "Acabamento elegante",
    "Esmaltação delicada",
    "Higiene e conforto",
    "Mãos mais bonitas"
  ],

  faq: [
    {
      pergunta: "Qual o valor da manicure?",
      resposta:
        "A manicure tradicional custa R$ 40,00."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos agendar pelo WhatsApp para garantir o melhor horário."
    },
    {
      pergunta: "O serviço inclui esmaltação?",
      resposta:
        "Sim. A manicure tradicional inclui o cuidado com as unhas e esmaltação."
    },
    {
      pergunta: "Vocês fazem manicure e pedicure no mesmo horário?",
      resposta:
        "Sim, mediante disponibilidade de agenda."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
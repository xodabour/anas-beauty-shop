import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";

export const pedicure: Procedimento = {
  slug: "pedicure",

  categoria: "Unhas",

  nome: "Pedicure",

  tituloSeo: "Pedicure em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Pedicure tradicional em Balneário Camboriú por R$ 45,00. Cuidado completo com os pés no Ana's Beauty Shop.",

  titulo: "Pedicure em Balneário Camboriú",

  subtitulo:
    "Cuidados especiais para os pés, com higiene, conforto e acabamento impecável.",

  imagemHero: "/images/services/unhas.jpg",

  imagemDestaque: "/images/services/unhas.jpg",

  preco: "R$ 45,00",

  whatsapp: config.whatsapp(
  "Olá! Gostaria de agendar uma pedicure."
),

  introducao: [
    "A pedicure tradicional é ideal para manter os pés bonitos, bem cuidados e com aparência saudável.",
    "No Ana's Beauty Shop, o procedimento é realizado com higiene, atenção aos detalhes e conforto durante todo o atendimento.",
    "O cuidado com os pés ajuda a renovar a sensação de bem-estar e deixa o acabamento mais elegante para o dia a dia ou ocasiões especiais."
  ],

  beneficios: [
    "Pés bem cuidados",
    "Acabamento elegante",
    "Mais conforto",
    "Esmaltação delicada",
    "Sensação de bem-estar"
  ],

  faq: [
    {
      pergunta: "Qual o valor da pedicure?",
      resposta:
        "A pedicure tradicional custa R$ 45,00."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos agendar pelo WhatsApp para garantir disponibilidade."
    },
    {
      pergunta: "O serviço inclui esmaltação?",
      resposta:
        "Sim. A pedicure tradicional inclui o cuidado com os pés e esmaltação."
    },
    {
      pergunta: "Posso fazer manicure e pedicure juntas?",
      resposta:
        "Sim, conforme disponibilidade da agenda do salão."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
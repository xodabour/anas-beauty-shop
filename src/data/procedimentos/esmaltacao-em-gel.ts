import type { Procedimento } from "../../types/procedimento";

import { config } from "../config";
import { imagens } from "../imagens";
import { precos } from "../precos";

export const esmaltacaoEmGel: Procedimento = {
  slug: "esmaltacao-em-gel",

  categoria: "Unhas",

  nome: "Esmaltação em Gel",

  tituloSeo: "Esmaltação em Gel em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Esmaltação em gel em Balneário Camboriú por R$ 90,00. Unhas com brilho intenso, longa duração e acabamento impecável no Ana's Beauty Shop.",

  titulo: "Esmaltação em Gel em Balneário Camboriú",

  subtitulo:
    "Mais brilho, maior durabilidade e unhas impecáveis por muito mais tempo.",

  imagemHero: imagens.unhas,

  imagemDestaque: imagens.unhas,

  preco: precos.esmaltacaoEmGel,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma esmaltação em gel."
  ),

  introducao: [
    "A esmaltação em gel é perfeita para quem busca unhas bonitas por mais tempo, com brilho intenso e excelente resistência.",
    "No Ana's Beauty Shop, utilizamos produtos profissionais e técnicas cuidadosas para garantir um acabamento uniforme e sofisticado.",
    "É uma excelente opção para quem tem uma rotina corrida ou deseja manter as unhas impecáveis por várias semanas."
  ],

  beneficios: [
    "Maior durabilidade",
    "Brilho intenso",
    "Secagem imediata",
    "Menor risco de descascar",
    "Acabamento sofisticado"
  ],

  faq: [
    {
      pergunta: "Qual o valor da esmaltação em gel?",
      resposta:
        "A esmaltação em gel custa R$ 90,00."
    },
    {
      pergunta: "Quanto tempo dura a esmaltação em gel?",
      resposta:
        "A durabilidade pode variar conforme os cuidados e o crescimento das unhas, mas normalmente permanece bonita por várias semanas."
    },
    {
      pergunta: "A esmaltação em gel estraga as unhas?",
      resposta:
        "Quando aplicada e removida corretamente por uma profissional, a esmaltação em gel preserva a saúde das unhas."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos realizar o agendamento pelo WhatsApp para garantir o melhor horário."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
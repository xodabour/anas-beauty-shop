import type { Procedimento } from "../../types/procedimento";

import { config } from "../config";
import { imagens } from "../imagens";
import { precos } from "../precos";

export const hidratacao: Procedimento = {
  slug: "hidratacao",

  categoria: "Cabelo",

  nome: "Hidratação",

  tituloSeo: "Hidratação Capilar em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Hidratação capilar em Balneário Camboriú para devolver brilho, maciez, movimento e saúde aos fios no Ana's Beauty Shop.",

  titulo: "Hidratação Capilar em Balneário Camboriú",

  subtitulo:
    "Tratamento para devolver maciez, brilho e vitalidade aos cabelos ressecados e sem vida.",

  imagemHero: imagens.cabelo,

  imagemDestaque: imagens.cabelo,

  preco: precos.avaliacao,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma hidratação capilar."
  ),

  introducao: [
    "A hidratação capilar é indicada para cabelos ressecados, opacos, ásperos ou sem movimento.",
    "No Ana's Beauty Shop, o tratamento é realizado conforme a necessidade dos fios, ajudando a repor água, melhorar a textura e devolver brilho ao cabelo.",
    "É uma excelente opção para manter os fios bonitos, saudáveis e preparados para outros procedimentos."
  ],

  beneficios: [
    "Mais maciez",
    "Brilho natural",
    "Redução do ressecamento",
    "Fios mais maleáveis",
    "Aspecto saudável"
  ],

  faq: [
    {
      pergunta: "Quanto custa uma hidratação capilar?",
      resposta:
        "O valor pode variar conforme o comprimento, volume e necessidade dos fios. Entre em contato pelo WhatsApp para uma avaliação."
    },
    {
      pergunta: "Hidratação serve para cabelo com química?",
      resposta:
        "Sim. A hidratação é muito indicada para cabelos com química, coloração, mechas ou progressiva."
    },
    {
      pergunta: "De quanto em quanto tempo devo fazer hidratação?",
      resposta:
        "Depende da condição do cabelo, mas muitas clientes fazem a cada 15 ou 30 dias para manter os fios saudáveis."
    },
    {
      pergunta: "A hidratação alisa o cabelo?",
      resposta:
        "Não. A hidratação não tem como objetivo alisar, mas sim devolver maciez, brilho e saúde aos fios."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
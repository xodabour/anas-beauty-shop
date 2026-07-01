import type { Procedimento } from "../../types/procedimento";

import { config } from "../config";
import { imagens } from "../imagens";
import { precos } from "../precos";

export const depilacaoVirilha: Procedimento = {
  slug: "depilacao-virilha",

  categoria: "Depilação",

  nome: "Depilação Virilha",

  tituloSeo: "Depilação Virilha em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Depilação de virilha em Balneário Camboriú com atendimento cuidadoso, higiene e conforto no Ana's Beauty Shop.",

  titulo: "Depilação Virilha em Balneário Camboriú",

  subtitulo:
    "Cuidado, discrição e conforto para uma pele mais lisa e bem cuidada.",

  imagemHero: imagens.depilacao,

  imagemDestaque: imagens.depilacao,

  preco: precos.depilacaoVirilha,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma depilação de virilha."
  ),

  introducao: [
    "A depilação de virilha é um procedimento procurado por quem deseja mais conforto, higiene e sensação de pele bem cuidada.",
    "No Ana's Beauty Shop, o atendimento é realizado com discrição, cuidado e atenção ao bem-estar da cliente.",
    "O procedimento é feito em ambiente acolhedor, com foco em higiene, conforto e acabamento delicado."
  ],

  beneficios: [
    "Mais conforto",
    "Pele lisa",
    "Atendimento discreto",
    "Higiene e cuidado",
    "Acabamento delicado"
  ],

  faq: [
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos agendar pelo WhatsApp para garantir disponibilidade."
    },
    {
      pergunta: "A depilação de virilha dói?",
      resposta:
        "A sensibilidade varia de pessoa para pessoa, mas buscamos realizar o procedimento com o máximo de conforto possível."
    },
    {
      pergunta: "Qual a diferença entre virilha e virilha completa?",
      resposta:
        "A virilha tradicional remove os pelos da região mais externa, enquanto a virilha completa abrange uma área maior."
    },
    {
      pergunta: "Quanto tempo dura o resultado?",
      resposta:
        "O tempo varia conforme o crescimento dos pelos, mas geralmente o resultado dura algumas semanas."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
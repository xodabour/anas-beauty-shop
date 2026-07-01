import type { Procedimento } from "../../types/procedimento";

import { config } from "../config";
import { imagens } from "../imagens";
import { precos } from "../precos";

export const depilacaoAxila: Procedimento = {
  slug: "depilacao-axila",

  categoria: "Depilação",

  nome: "Depilação Axila",

  tituloSeo: "Depilação de Axila em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Depilação de axila em Balneário Camboriú por R$ 30,00. Pele lisa, confortável e bem cuidada no Ana's Beauty Shop.",

  titulo: "Depilação de Axila em Balneário Camboriú",

  subtitulo:
    "Mais conforto, higiene e uma pele lisa para o seu dia a dia.",

  imagemHero: imagens.depilacao,

  imagemDestaque: imagens.depilacao,

  preco: precos.depilacaoAxila,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma depilação de axila."
  ),

  introducao: [
    "A depilação de axila proporciona uma sensação prolongada de limpeza, conforto e bem-estar.",
    "No Ana's Beauty Shop, realizamos o procedimento com cuidado e atenção para oferecer uma experiência confortável.",
    "É um dos procedimentos mais procurados por quem deseja praticidade e uma pele sempre bem cuidada."
  ],

  beneficios: [
    "Pele lisa",
    "Mais higiene",
    "Mais conforto",
    "Procedimento rápido",
    "Resultado duradouro"
  ],

  faq: [
    {
      pergunta: "Qual o valor da depilação de axila?",
      resposta:
        "A depilação de axila custa R$ 30,00."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos agendar para garantir disponibilidade."
    },
    {
      pergunta: "A depilação de axila é rápida?",
      resposta:
        "Sim. É um procedimento rápido e realizado com bastante cuidado."
    },
    {
      pergunta: "Quanto tempo dura o resultado?",
      resposta:
        "Depende do crescimento dos pelos, mas normalmente o resultado permanece por algumas semanas."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
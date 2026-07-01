import type { Procedimento } from "../../types/procedimento";

import { config } from "../config";
import { imagens } from "../imagens";
import { precos } from "../precos";

export const designDeSobrancelhas: Procedimento = {
  slug: "design-de-sobrancelhas",

  categoria: "Sobrancelhas",

  nome: "Design de Sobrancelhas",

  tituloSeo:
    "Design de Sobrancelhas em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Design de sobrancelhas em Balneário Camboriú para realçar o olhar com um formato personalizado e harmonioso no Ana's Beauty Shop.",

  titulo: "Design de Sobrancelhas em Balneário Camboriú",

  subtitulo:
    "Realce sua beleza com sobrancelhas desenhadas de forma personalizada para o seu rosto.",

  imagemHero: imagens.sobrancelhas,

  imagemDestaque: imagens.sobrancelhas,

  preco: precos.designSobrancelhas,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar um design de sobrancelhas."
  ),

  introducao: [
    "O design de sobrancelhas é um procedimento que valoriza o olhar através da modelagem personalizada dos fios, respeitando o formato natural do rosto.",
    "Cada atendimento é realizado de forma individual, buscando equilíbrio, simetria e um resultado que destaque a beleza de cada cliente.",
    "No Ana's Beauty Shop, utilizizamos técnicas que proporcionam um acabamento delicado, natural e harmonioso."
  ],

  beneficios: [
    "Valoriza o olhar",
    "Formato personalizado",
    "Mais harmonia facial",
    "Acabamento natural",
    "Atendimento cuidadoso"
  ],

  faq: [
    {
      pergunta: "O design de sobrancelhas dói?",
      resposta:
        "A sensibilidade varia de pessoa para pessoa, mas o procedimento é rápido e realizado com cuidado para proporcionar o máximo de conforto."
    },
    {
      pergunta: "Com que frequência devo fazer a manutenção?",
      resposta:
        "Em geral, a manutenção é recomendada entre 15 e 30 dias, dependendo do crescimento natural dos pelos."
    },
    {
      pergunta: "O formato é escolhido na hora?",
      resposta:
        "Sim. O desenho é definido conforme o formato do rosto, respeitando as características naturais das sobrancelhas."
    },
    {
      pergunta: "É necessário agendar horário?",
      resposta:
        "Sim. Recomendamos realizar o agendamento pelo WhatsApp para garantir disponibilidade."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
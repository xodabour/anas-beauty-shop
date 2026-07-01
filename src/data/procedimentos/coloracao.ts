import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";
import { precos } from "../precos";

export const coloracao: Procedimento = {
  slug: "coloracao",

  categoria: "Cabelo",

  nome: "Coloração",

  tituloSeo: "Coloração em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Coloração profissional em Balneário Camboriú. Renovação da cor dos fios com produtos de qualidade e atendimento personalizado no Ana's Beauty Shop.",

  titulo: "Coloração em Balneário Camboriú",

  subtitulo:
    "Realce sua beleza com uma coloração personalizada, respeitando a saúde dos fios e o resultado que você deseja.",

  imagemHero: "/images/services/cabelo.jpg",

  imagemDestaque: "/images/services/cabelo.jpg",

  preco: precos.avaliacao,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma coloração."
  ),

  introducao: [
    "A coloração transforma o visual, renova a autoestima e valoriza a beleza natural.",
    "Cada cabelo recebe uma avaliação personalizada para definir a melhor técnica, tonalidade e os cuidados necessários durante o procedimento.",
    "O valor pode variar conforme o comprimento, quantidade de produto utilizada e histórico químico dos fios."
  ],

  beneficios: [
    "Cobertura dos fios brancos",
    "Mudança de visual",
    "Mais brilho",
    "Cor uniforme",
    "Resultado personalizado"
  ],

  faq: [
    {
      pergunta: "Quanto custa uma coloração?",
      resposta:
        "O valor depende do comprimento, volume e técnica utilizada. Entre em contato para uma avaliação."
    },
    {
      pergunta: "Vocês fazem retoque de raiz?",
      resposta:
        "Sim. Também realizamos retoque de raiz e manutenção da cor."
    },
    {
      pergunta: "A coloração agride os fios?",
      resposta:
        "Utilizamos produtos profissionais e indicamos tratamentos para manter a saúde capilar."
    },
    {
      pergunta: "Posso pintar um cabelo com química?",
      resposta:
        "Sim, desde que os fios sejam avaliados previamente pela profissional."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
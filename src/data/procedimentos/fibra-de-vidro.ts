import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";
import { precos } from "../precos";

export const fibraDeVidro: Procedimento = {
  slug: "fibra-de-vidro",

  categoria: "Unhas",

  nome: "Fibra de Vidro",

  tituloSeo: "Fibra de Vidro em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Colocação de fibra de vidro em Balneário Camboriú por R$ 190,00. Alongamento de unhas com acabamento elegante e resistente no Ana's Beauty Shop.",

  titulo: "Fibra de Vidro em Balneário Camboriú",

  subtitulo:
    "Alongamento elegante, resistente e com acabamento natural para unhas mais bonitas e sofisticadas.",

  imagemHero: "/images/services/unhas.jpg",

  imagemDestaque: "/images/services/unhas.jpg",

  preco: precos.fibraDeVidro,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma colocação de fibra de vidro."
  ),

  introducao: [
    "A fibra de vidro é uma técnica de alongamento indicada para quem deseja unhas mais longas, resistentes e com aparência elegante.",
    "No Ana's Beauty Shop, a colocação é realizada com cuidado, técnica e atenção ao formato natural das unhas.",
    "O resultado proporciona beleza, durabilidade e um acabamento sofisticado para o dia a dia ou ocasiões especiais."
  ],

  beneficios: [
    "Unhas mais resistentes",
    "Alongamento elegante",
    "Acabamento natural",
    "Maior durabilidade",
    "Formato personalizado"
  ],

  faq: [
    {
      pergunta: "Qual o valor da colocação de fibra de vidro?",
      resposta:
        "A colocação de fibra de vidro custa R$ 190,00."
    },
    {
      pergunta: "A fibra de vidro fica natural?",
      resposta:
        "Sim. Quando bem aplicada, a fibra de vidro proporciona um acabamento elegante e natural."
    },
    {
      pergunta: "Precisa fazer manutenção?",
      resposta:
        "Sim. A manutenção é importante para preservar a resistência, beleza e durabilidade das unhas."
    },
    {
      pergunta: "Quanto tempo dura a fibra de vidro?",
      resposta:
        "A durabilidade varia conforme os cuidados e o crescimento das unhas naturais."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
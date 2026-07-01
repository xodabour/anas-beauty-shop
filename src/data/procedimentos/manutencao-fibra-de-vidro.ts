import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";

export const manutencaoFibraDeVidro: Procedimento = {
  slug: "manutencao-fibra-de-vidro",

  categoria: "Unhas",

  nome: "Manutenção de Fibra de Vidro",

  tituloSeo: "Manutenção de Fibra de Vidro em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Manutenção de fibra de vidro em Balneário Camboriú por R$ 160,00. Preserve a beleza, resistência e acabamento das suas unhas no Ana's Beauty Shop.",

  titulo: "Manutenção de Fibra de Vidro em Balneário Camboriú",

  subtitulo:
    "Cuidados essenciais para manter suas unhas em fibra bonitas, resistentes e com acabamento impecável.",

  imagemHero: "/images/services/unhas.jpg",

  imagemDestaque: "/images/services/unhas.jpg",

  preco: "R$ 160,00",

  whatsapp: config.whatsapp(
  "Olá! Gostaria de agendar uma manutenção de fibra de vidro."
),

  introducao: [
    "A manutenção da fibra de vidro é essencial para preservar a beleza, resistência e segurança do alongamento.",
    "Com o crescimento natural das unhas, é importante realizar o cuidado periódico para evitar desníveis, quebras e perda do acabamento.",
    "No Ana's Beauty Shop, a manutenção é feita com técnica, higiene e atenção aos detalhes para manter suas unhas sempre elegantes."
  ],

  beneficios: [
    "Preserva a durabilidade",
    "Mantém o acabamento bonito",
    "Evita quebras",
    "Corrige o crescimento natural",
    "Mantém as unhas resistentes"
  ],

  faq: [
    {
      pergunta: "Qual o valor da manutenção de fibra de vidro?",
      resposta:
        "A manutenção de fibra de vidro custa R$ 160,00."
    },
    {
      pergunta: "De quanto em quanto tempo devo fazer manutenção?",
      resposta:
        "O intervalo pode variar conforme o crescimento das unhas, mas normalmente a manutenção é feita a cada 15 a 25 dias."
    },
    {
      pergunta: "Posso ficar muito tempo sem manutenção?",
      resposta:
        "Não é recomendado, pois o crescimento natural pode comprometer a estrutura, aparência e resistência das unhas."
    },
    {
      pergunta: "A manutenção deixa as unhas como novas?",
      resposta:
        "Sim. A manutenção corrige o crescimento, reforça a estrutura e renova o acabamento."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
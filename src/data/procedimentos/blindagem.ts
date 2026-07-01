import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";

export const blindagem: Procedimento = {
  slug: "blindagem",

  categoria: "Unhas",

  nome: "Blindagem de Unhas",

  tituloSeo: "Blindagem de Unhas em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Blindagem de unhas em Balneário Camboriú por R$ 120,00. Fortaleça suas unhas naturais com acabamento elegante e maior durabilidade no Ana's Beauty Shop.",

  titulo: "Blindagem de Unhas em Balneário Camboriú",

  subtitulo:
    "Proteção, resistência e brilho para quem deseja manter as unhas naturais sempre bonitas.",

  imagemHero: "/images/services/unhas.jpg",

  imagemDestaque: "/images/services/unhas.jpg",

  preco: "R$ 120,00",

  whatsapp: config.whatsapp(
  "Olá! Gostaria de agendar umas unhas."
),

  introducao: [
    "A blindagem de unhas é indicada para quem deseja fortalecer as unhas naturais sem realizar alongamentos.",
    "O procedimento cria uma camada protetora que aumenta a resistência, reduz quebras e proporciona um acabamento com brilho intenso.",
    "No Ana's Beauty Shop, utilizamos produtos profissionais para garantir um resultado bonito, resistente e confortável."
  ],

  beneficios: [
    "Fortalece as unhas naturais",
    "Reduz quebras",
    "Mais brilho",
    "Maior durabilidade do esmalte",
    "Acabamento elegante"
  ],

  faq: [
    {
      pergunta: "Qual o valor da blindagem de unhas?",
      resposta:
        "A blindagem de unhas custa R$ 120,00."
    },
    {
      pergunta: "Blindagem é a mesma coisa que alongamento?",
      resposta:
        "Não. A blindagem fortalece as unhas naturais, enquanto o alongamento aumenta o comprimento das unhas."
    },
    {
      pergunta: "Para quem a blindagem é indicada?",
      resposta:
        "É ideal para pessoas com unhas naturais frágeis, que quebram facilmente ou desejam maior durabilidade da esmaltação."
    },
    {
      pergunta: "Quanto tempo dura a blindagem?",
      resposta:
        "A durabilidade depende do crescimento natural das unhas e dos cuidados diários, sendo recomendada a manutenção periódica."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
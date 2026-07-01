import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";
import { precos } from "../precos";

export const mechas: Procedimento = {
  slug: "mechas",

  categoria: "Cabelo",

  nome: "Mechas",

  tituloSeo: "Mechas em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Mechas em Balneário Camboriú para iluminar os fios com naturalidade, sofisticação e acabamento personalizado. Agende uma avaliação no Ana's Beauty Shop.",

  titulo: "Mechas em Balneário Camboriú",

  subtitulo:
    "Ilumine seus cabelos com técnica, elegância e um resultado personalizado para valorizar sua beleza.",

  imagemHero: "/images/services/cabelo.jpg",

  imagemDestaque: "/images/services/cabelo.jpg",

  preco: precos.avaliacao,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma avaliação de mechas."
  ),

  introducao: [
    "As mechas são uma excelente opção para quem deseja iluminar o visual, criar profundidade nos fios e trazer mais movimento ao cabelo.",
    "No Ana's Beauty Shop, o procedimento é realizado de forma personalizada, considerando o tom atual do cabelo, histórico químico, textura dos fios e o resultado desejado pela cliente.",
    "Por ser um procedimento técnico, o valor das mechas pode variar conforme o comprimento, volume, quantidade de produto e complexidade do trabalho."
  ],

  beneficios: [
    "Iluminação personalizada",
    "Mais movimento aos fios",
    "Resultado sofisticado",
    "Visual moderno",
    "Valorização do rosto"
  ],

  faq: [
    {
      pergunta: "Quanto custa fazer mechas?",
      resposta:
        "O valor depende do comprimento, volume, técnica escolhida e avaliação dos fios. Recomendamos entrar em contato pelo WhatsApp para uma avaliação personalizada."
    },
    {
      pergunta: "Mechas danificam o cabelo?",
      resposta:
        "Todo procedimento químico exige cuidado, por isso avaliamos os fios antes e indicamos tratamentos para preservar a saúde capilar."
    },
    {
      pergunta: "Qual a diferença entre luzes e mechas?",
      resposta:
        "As luzes costumam ser mais finas e distribuídas, enquanto as mechas podem ter marcação, largura e efeito mais personalizados conforme o resultado desejado."
    },
    {
      pergunta: "Preciso fazer tratamento depois das mechas?",
      resposta:
        "Sim. Hidratação, reconstrução ou cronograma capilar ajudam a manter brilho, força e saúde dos fios após o procedimento."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
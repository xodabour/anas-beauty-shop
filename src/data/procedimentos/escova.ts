import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";
import { precos } from "../precos";

export const escova: Procedimento = {
  slug: "escova",

  categoria: "Cabelo",

  nome: "Escova",

  tituloSeo: "Escova em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Escova profissional em Balneário Camboriú para cabelos alinhados, com brilho, movimento e acabamento impecável no Ana's Beauty Shop.",

  titulo: "Escova em Balneário Camboriú",

  subtitulo:
    "Fios alinhados, leves e com brilho para qualquer ocasião, realizados com técnica e produtos profissionais.",

  imagemHero: "/images/services/cabelo.jpg",

  imagemDestaque: "/images/services/cabelo.jpg",

  preco: precos.avaliacao,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma escova."
  ),

  introducao: [
    "A escova é um dos serviços mais procurados para quem deseja cabelos alinhados, com brilho e movimento natural.",
    "Utilizamos técnicas adequadas para cada tipo de cabelo, proporcionando um acabamento elegante e duradouro.",
    "O resultado é um cabelo com aparência saudável, macio e pronto para qualquer ocasião."
  ],

  beneficios: [
    "Brilho intenso",
    "Redução do frizz",
    "Movimento natural",
    "Acabamento profissional",
    "Visual elegante"
  ],

  faq: [
    {
      pergunta: "Quanto custa uma escova?",
      resposta:
        "O valor pode variar conforme o comprimento e volume do cabelo. Consulte-nos pelo WhatsApp."
    },
    {
      pergunta: "A escova dura quantos dias?",
      resposta:
        "A duração depende do tipo de cabelo, clima e cuidados após o procedimento."
    },
    {
      pergunta: "Vocês fazem escova em qualquer tipo de cabelo?",
      resposta:
        "Sim. Adaptamos a técnica conforme a textura e necessidade dos fios."
    },
    {
      pergunta: "Preciso agendar?",
      resposta:
        "Sim. Recomendamos o agendamento para garantir o melhor horário."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
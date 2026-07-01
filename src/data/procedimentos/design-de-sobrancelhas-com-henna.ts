import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";

export const designDeSobrancelhasComHenna: Procedimento = {
  slug: "design-de-sobrancelhas-com-henna",

  categoria: "Sobrancelhas",

  nome: "Design de Sobrancelhas com Henna",

  tituloSeo:
    "Design de Sobrancelhas com Henna em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Design de sobrancelhas com henna em Balneário Camboriú para realçar o olhar, corrigir pequenas falhas e proporcionar um acabamento natural no Ana's Beauty Shop.",

  titulo: "Design de Sobrancelhas com Henna em Balneário Camboriú",

  subtitulo:
    "Sobrancelhas mais definidas, preenchidas e harmoniosas para valorizar sua beleza natural.",

  imagemHero: "/images/services/sobrancelhas.jpg",

  imagemDestaque: "/images/services/sobrancelhas.jpg",

  preco: "R$ 65,00",

  whatsapp: config.whatsapp(
  "Olá! Gostaria de agendar um design de sobrancelhas com henna."
),

  introducao: [
    "O design de sobrancelhas com henna é ideal para quem deseja corrigir pequenas falhas e conquistar um efeito mais marcado e harmonioso.",
    "Após o desenho personalizado das sobrancelhas, a henna é aplicada para proporcionar um preenchimento temporário, valorizando ainda mais o olhar.",
    "No Ana's Beauty Shop, o procedimento é realizado com produtos de qualidade e técnicas que respeitam o formato natural do rosto."
  ],

  beneficios: [
    "Preenche pequenas falhas",
    "Valoriza o olhar",
    "Efeito natural",
    "Formato personalizado",
    "Maior definição das sobrancelhas"
  ],

  faq: [
    {
      pergunta: "Quanto tempo dura a henna?",
      resposta:
        "A duração varia conforme o tipo de pele e os cuidados diários, permanecendo geralmente entre 5 e 10 dias na pele e até 15 dias nos fios."
    },
    {
      pergunta: "A henna deixa um aspecto artificial?",
      resposta:
        "Não. Quando aplicada corretamente, proporciona um resultado natural e harmonioso, respeitando o formato das sobrancelhas."
    },
    {
      pergunta: "Quem pode fazer o procedimento?",
      resposta:
        "O procedimento é indicado para quem deseja destacar o desenho das sobrancelhas ou preencher pequenas falhas de forma temporária."
    },
    {
      pergunta: "É necessário agendar horário?",
      resposta:
        "Sim. Recomendamos realizar o agendamento pelo WhatsApp para garantir o melhor horário."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
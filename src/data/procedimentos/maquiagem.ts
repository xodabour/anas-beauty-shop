import type { Procedimento } from "../../types/procedimento";
import { config } from "../config";
export const maquiagem: Procedimento = {
  slug: "maquiagem",

  categoria: "Maquiagem",

  nome: "Maquiagem",

  tituloSeo: "Maquiagem em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Maquiagem profissional em Balneário Camboriú para festas, formaturas, casamentos e eventos especiais no Ana's Beauty Shop.",

  titulo: "Maquiagem em Balneário Camboriú",

  subtitulo:
    "Realce sua beleza com uma maquiagem personalizada para qualquer ocasião especial.",

  imagemHero: "/images/services/maquiagem.jpg",

  imagemDestaque: "/images/services/maquiagem.jpg",

  preco: "R$ 150,00",

  whatsapp: config.whatsapp(
  "Olá! Gostaria de agendar uma maquiagem."
),

  introducao: [
    "A maquiagem profissional é ideal para quem deseja valorizar a beleza e conquistar um acabamento impecável em ocasiões especiais.",
    "No Ana's Beauty Shop, cada produção é personalizada de acordo com o estilo, o evento e as características de cada cliente.",
    "Utilizamos técnicas que proporcionam um resultado elegante, harmonioso e com excelente durabilidade."
  ],

  beneficios: [
    "Acabamento profissional",
    "Produção personalizada",
    "Valorização da beleza natural",
    "Excelente durabilidade",
    "Ideal para eventos especiais"
  ],

  faq: [
    {
      pergunta: "Para quais ocasiões a maquiagem é indicada?",
      resposta:
        "A maquiagem é indicada para casamentos, formaturas, aniversários, ensaios fotográficos, eventos corporativos e outras ocasiões especiais."
    },
    {
      pergunta: "A maquiagem tem boa durabilidade?",
      resposta:
        "Sim. Utilizamos técnicas e produtos que ajudam a proporcionar maior fixação e excelente acabamento durante o evento."
    },
    {
      pergunta: "Posso escolher o estilo da maquiagem?",
      resposta:
        "Sim. A produção é personalizada conforme o seu gosto, o tipo de evento e suas características."
    },
    {
      pergunta: "É necessário agendar com antecedência?",
      resposta:
        "Sim. Recomendamos realizar o agendamento antecipadamente para garantir o horário desejado."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
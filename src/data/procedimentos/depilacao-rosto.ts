import type { Procedimento } from "../../types/procedimento";

import { config } from "../config";
import { imagens } from "../imagens";
import { precos } from "../precos";

export const depilacaoRosto: Procedimento = {
  slug: "depilacao-rosto",

  categoria: "Depilação",

  nome: "Depilação de Rosto",

  tituloSeo: "Depilação de Rosto em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Depilação facial em Balneário Camboriú por R$ 50,00. Pele lisa, delicada e bem cuidada no Ana's Beauty Shop.",

  titulo: "Depilação de Rosto em Balneário Camboriú",

  subtitulo:
    "Realce sua beleza com uma pele mais lisa, uniforme e bem cuidada.",

  imagemHero: imagens.depilacao,

  imagemDestaque: imagens.depilacao,

  preco: precos.depilacaoRosto,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma depilação de rosto."
  ),

  introducao: [
    "A depilação facial remove os pelos indesejados de forma delicada, proporcionando uma pele mais uniforme e uma aparência mais limpa.",
    "No Ana's Beauty Shop, utilizamos técnicas que priorizam o conforto e respeitam a sensibilidade da pele.",
    "É um procedimento indicado para quem deseja um acabamento natural e uma rotina de cuidados com a beleza."
  ],

  beneficios: [
    "Pele mais lisa",
    "Aparência uniforme",
    "Procedimento delicado",
    "Mais autoestima",
    "Acabamento natural"
  ],

  faq: [
    {
      pergunta: "Qual o valor da depilação de rosto?",
      resposta:
        "A depilação de rosto custa R$ 50,00."
    },
    {
      pergunta: "A depilação facial pode irritar a pele?",
      resposta:
        "É normal uma leve vermelhidão temporária, que costuma desaparecer em pouco tempo."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. O agendamento garante maior conforto e disponibilidade."
    },
    {
      pergunta: "Posso usar maquiagem logo após?",
      resposta:
        "O ideal é aguardar algumas horas para evitar irritações na pele."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
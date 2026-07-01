import type { Procedimento } from "../../types/procedimento";

import { config } from "../config";
import { imagens } from "../imagens";
import { precos } from "../precos";

export const depilacaoPernaInteira: Procedimento = {
  slug: "depilacao-perna-inteira",

  categoria: "Depilação",

  nome: "Depilação de Perna Inteira",

  tituloSeo: "Depilação de Perna Inteira em Balneário Camboriú | Ana's Beauty Shop",

  descricaoSeo:
    "Depilação de perna inteira em Balneário Camboriú por R$ 85,00. Pele lisa, macia e bem cuidada com atendimento profissional no Ana's Beauty Shop.",

  titulo: "Depilação de Perna Inteira em Balneário Camboriú",

  subtitulo:
    "Conquiste uma pele lisa, uniforme e bem cuidada com um procedimento realizado com conforto e atenção aos detalhes.",

  imagemHero: imagens.depilacao,

  imagemDestaque: imagens.depilacao,

  preco: precos.depilacaoPernaInteira,

  whatsapp: config.whatsapp(
    "Olá! Gostaria de agendar uma depilação de perna inteira."
  ),

  introducao: [
    "A depilação de perna inteira remove os pelos de toda a extensão das pernas, proporcionando uma pele mais lisa e uma sensação prolongada de conforto.",
    "No Ana's Beauty Shop, o procedimento é realizado com produtos de qualidade, higiene e atenção ao bem-estar da cliente.",
    "É uma excelente escolha para quem busca praticidade, beleza e um acabamento uniforme."
  ],

  beneficios: [
    "Pele lisa por mais tempo",
    "Acabamento uniforme",
    "Mais conforto",
    "Sensação de leveza",
    "Resultado duradouro"
  ],

  faq: [
    {
      pergunta: "Qual o valor da depilação de perna inteira?",
      resposta:
        "A depilação de perna inteira custa R$ 85,00."
    },
    {
      pergunta: "A depilação inclui a coxa?",
      resposta:
        "Sim. O procedimento contempla toda a extensão das pernas, incluindo coxa e parte inferior."
    },
    {
      pergunta: "Preciso agendar horário?",
      resposta:
        "Sim. Recomendamos realizar o agendamento para garantir disponibilidade."
    },
    {
      pergunta: "Quanto tempo dura o resultado?",
      resposta:
        "O resultado depende do crescimento natural dos pelos, mas normalmente permanece por algumas semanas."
    },
    {
      pergunta: "Onde fica o salão?",
      resposta:
        "Estamos na Rua 1536, nº 719, Centro, Balneário Camboriú - SC."
    }
  ]
};
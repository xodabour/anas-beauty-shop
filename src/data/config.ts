export const config = {
  nome: "Ana's Beauty Shop",

  cidade: "Balneário Camboriú",
  estado: "SC",

  endereco: "Rua 1536, nº 719, Centro, Balneário Camboriú - SC",
  enderecoCurto: "Rua 1536, nº 719",

  telefone: "+55 47 99162-0575",
  telefoneNumerico: "5547991620575",

  whatsapp(mensagem: string) {
    return `https://wa.me/${this.telefoneNumerico}?text=${encodeURIComponent(
      mensagem
    )}`;
  },

  instagram: "https://www.instagram.com/anas_beautyshop/",

  site: "https://www.anasbeautyshop.com.br",

  horario: {
    semana: "Terça a sexta, das 9h às 19h",
    sabado: "Sábado, das 9h às 17h",
  },
};
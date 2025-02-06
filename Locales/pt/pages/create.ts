export default {
  title: "Estamos quase lá!",
  subtitle:
    "Preencha o formulário abaixo com as informações do seu cartão interativo.",
  form: {
    to: "Para",
    text: "Texto do cartão",
    from: "De",
    create: "Criar",
    boxColor: "Cor da caixa",
    backgroundColor: "Cor de fundo",
  },
  error: {
    to: "O campo deve ser preenchido.",
    text: {
      min: "O campo deve ter no mínimo 100 caracteres.",
      max: "O campo deve ter no máximo 500 caracteres.",
    },
    from: "O campo deve ser preenchido.",
  },
  pro: {
    enablePro: "Escolha o plano Pro para ter acesso a essa funcionalidade.",
  },
  toast: {
    changeToPro: {
      title: "Que tal mudar de plano?",
      description: "Para {amount} fotos, é necessário mudar para Pro.",
      buttonLabel: "Mudar para Pro",
    },
    removePhotos: {
      title: "Que pena... mas ainda dá tempo!",
      description:
        "Escolha o plano Pro e evite a remoção das fotos ao concluir o pagamento.",
    },
    overPlan: {
      title: "Opa, tem mais foto que o plano Pro cobre.",
      description:
        "Futuramente teremos cartões para {amount} fotos. Por enquanto, vamos considerar as 5 (Básico) ou 8 (Pro) primeiras fotos.",
    },
  },
};

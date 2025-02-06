export default {
  title: "We're almost done!",
  subtitle: "Fill out the form below with your interactive card information.",
  form: {
    images: "Images",
    to: "To",
    text: "Card text",
    from: "From",
    create: "Create",
    boxColor: "Box color",
    backgroundColor: "Background color",
    music: {
      label: "YouTube music",
      placeholder: "E.g.: https://www.youtube.com/watch?v=NNC0kIzM1Fo",
    },
  },
  error: {
    to: "The field must be filled in.",
    text: {
      min: "The field must have at least 100 characters.",
      max: "The field must have a maximum of 500 characters.",
    },
    from: "The field must be filled in.",
    music: "A URL must be a valid YouTube link.",
  },
  pro: {
    enablePro: "Choose the Pro plan to access this feature.",
  },
  toast: {
    changeToPro: {
      title: "How about switching plans?",
      description: "For {amount} photos, you need to switch to Pro.",
      buttonLabel: "Change to Pro",
    },
    removePhotos: {
      title: "Too bad... but there's still time!",
      description:
        "Choose the Pro plan to avoid photo removal once the payment is completed.",
    },
    overPlan: {
      title: "Oops! You have more photos than the Pro plan covers.",
      description:
        "Soon, we'll have plans for {amount} photos. For now, we'll only count the first 5 (Basic) or 8 (Pro) photos.",
    },
  },
};

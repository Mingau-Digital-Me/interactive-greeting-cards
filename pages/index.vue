<template>
  <div class="landing-page">
    <section id="landing-page__first-section" class="landing-page__section">
      <div class="landing-page__section--first-view">
        <div
          class="flex flex-col items-center justify-center gap-4 mx-10 h-dvh sm:h-fit"
        >
          <span class="text-4xl sm:text-8xl font-bold text-center">
            {{ $t("LandingPage.section.first.title") }}
          </span>
          <span class="text-lg sm:text-xl font-normal text-center mt-10">
            {{ $t("LandingPage.section.first.subtitle") }}
          </span>

          <UButton
            size="xl"
            color="primary"
            variant="solid"
            class="sm:w-44 text-center mt-4 sm:mt-10"
            trailing-icon="i-heroicons-arrow-right"
            :label="$t('LandingPage.section.first.button.label')"
            :ui="{
              base: 'w-full flex justify-center items-center',
            }"
            @click=""
          />
        </div>

        <div class="h-dvh flex flex-col items-center justify-center sm:h-fit">
          <NuxtImg
            class="m-10 w-10/12"
            src="./pages/LandingPage/greetings-illustration.png"
          />
        </div>
      </div>
    </section>

    <section class="landing-page__section">
      <div class="landing-page__section--how-to">
        <div class="flex flex-col self-center sm:self-start relative">
          <h2 class="text-4xl sm:text-6xl font-bold">
            {{ $t("LandingPage.section.howItWorks.title") }}
          </h2>
          <NuxtImg
            :width="120"
            src="./pages/LandingPage/arrow.png"
            class="hidden sm:inline-block -rotate-[65deg] absolute left-48 top-40"
          />
        </div>

        <div class="flex flex-wrap sm:grid sm:grid-cols-2 mt-8">
          <div
            class="h-60 w-60 sm:h-80 sm:w-80 m-4 flex-grow rounded-3xl bg-primary-800 border-4 border-primary-300"
          ></div>
          <div
            class="h-60 w-60 sm:h-80 sm:w-80 m-4 flex-grow rounded-3xl bg-primary-800 border-4 border-primary-300"
          ></div>
          <div
            class="h-60 w-60 sm:h-80 sm:w-80 m-4 flex-grow rounded-3xl bg-primary-800 border-4 border-primary-300"
          ></div>
          <div
            class="h-60 w-60 sm:h-80 sm:w-80 m-4 flex-grow rounded-3xl bg-primary-800 border-4 border-primary-300"
          ></div>
        </div>
      </div>
    </section>

    <section class="landing-page__section">
      <div class="landing-page__section--pricing">
        <CardPricingList :cards="cardsPricing" />
      </div>
    </section>

    <section class="landing-page__faq">
      <div class="landing-page__section--faq">
        <h2 class="text-4xl sm:text-6xl text-center font-bold">
          {{ $t("LandingPage.section.faq.title") }}
        </h2>

        <UAccordion
          :ui="{
            wrapper: 'sm:min-w-[800px]',
            item: {
              padding: 'px-4',
            },
            default: {
              truncate: false,
              class: 'text-left',
            },
          }"
          :items="questions"
          variant="ghost"
          size="xl"
          class="mt-8"
        />
      </div>
    </section>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();

definePageMeta({
  layout: "app",
});

const cardsPricing = computed(() => [
  {
    name: "basic",
    // image: "",
    image: "./components/CardPricing/single-heart.png",
    price: 19.9,
    isPerMonth: true,
    isMostChosen: false,
    items: [
      t("LandingPage.section.cardsPricing.tierOne.itemOne"),
      t("LandingPage.section.cardsPricing.tierOne.itemTwo"),
      t("LandingPage.section.cardsPricing.tierOne.itemThree"),
    ],
  },
  {
    name: "pro",
    // image: "",
    image: "./components/CardPricing/multiple-hearts.png",
    price: 290.9,
    isPerMonth: false,
    isMostChosen: true,
    items: [
      t("LandingPage.section.cardsPricing.tierTwo.itemOne"),
      t("LandingPage.section.cardsPricing.tierTwo.itemTwo"),
    ],
  },
]);

const questions = computed(() => [
  {
    label: t("LandingPage.section.faq.question.one.label"),
    content: t("LandingPage.section.faq.question.one.content"),
  },
  {
    label: t("LandingPage.section.faq.question.two.label"),
    content: t("LandingPage.section.faq.question.two.content"),
  },
  {
    label: t("LandingPage.section.faq.question.three.label"),
    content: t("LandingPage.section.faq.question.three.content"),
  },
  {
    label: t("LandingPage.section.faq.question.four.label"),
    content: t("LandingPage.section.faq.question.four.content"),
  },
]);

let activeHearts = ref<number>(0);

function createHeart() {
  const WINDOW_WIDTH = window.innerWidth;
  const IS_MOBILE = WINDOW_WIDTH < 400;
  const MAX_HEARTS = IS_MOBILE ? 20 : 40;

  if (activeHearts.value >= MAX_HEARTS) return;

  const TIMESTAMP = new Date().getTime();
  const HEART_SIZES = {
    SMALL: "small",
    MEDIUM: "medium",
    LARGE: "large",
  };

  const heartId = "heart-" + TIMESTAMP;
  const minX = 40;
  const maxX = WINDOW_WIDTH - 80;
  const leftPosition = Math.random() * (maxX - minX);
  const duration = Math.round(Math.random() * 10 + 15);
  const sizes = [HEART_SIZES.SMALL, HEART_SIZES.MEDIUM, HEART_SIZES.LARGE];

  const heart = document.createElement("div");
  heart.id = heartId;
  heart.innerHTML = "❤️";
  heart.style.left = `${leftPosition}px`;
  heart.style.animationDuration = `${duration}s`;
  heart.classList.add("heart");
  heart.classList.add(sizes[Math.floor(Math.random() * sizes.length)]);

  document.getElementById("landing-page__first-section")?.appendChild(heart);
  activeHearts.value++;

  setTimeout(() => {
    const currentHeart = document.getElementById(heartId);
    currentHeart?.remove();
    activeHearts.value--;
  }, duration * 1000);
}

onMounted(() => {
  setInterval(createHeart, 500);
});
</script>

<style lang="postcss">
#landing-page__first-section {
  @apply overflow-x-hidden;
}

.landing-page {
  @apply w-full max-w-full;

  &__initial,
  &__section,
  &__faq {
    @apply flex justify-center items-center pb-10 sm:pb-0;
  }

  &__section {
    @apply min-h-dvh;

    &--first-view {
      @apply flex flex-col items-center sm:grid sm:grid-cols-2 sm:gap-4 z-10;
    }

    &--how-to {
      @apply flex flex-col items-center sm:grid grid-cols-2;
    }

    &--pricing {
      @apply flex;
    }

    &--faq {
      @apply flex flex-col justify-center items-center sm:gap-8 mx-8 sm:m-0 w-max h-max;
    }
  }

  &__faq {
    @apply sm:justify-between h-[680px] sm:pl-4;

    background-image: linear-gradient(
        to bottom,
        #1c1917 0%,
        rgba(28, 25, 23, 0) 60%
      ),
      url("../public/pages/LandingPage/faq.webp");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-color: #1c1917;
  }
}

.heart {
  position: absolute;
  color: red;
  font-size: 30px;
  top: -50px;
  animation: heart-falling linear infinite;
}

.heart.small {
  font-size: 20px;
}
.heart.medium {
  font-size: 30px;
}
.heart.large {
  font-size: 40px;
}

@keyframes heart-falling {
  0% {
    transform: translateY(-50px) translateX(0) scale(1);
    opacity: 1;
  }
  10% {
    transform: translateY(10vh) translateX(0) scale(1.5);
    opacity: 1;
  }
  20% {
    transform: translateY(20vh) translateX(0) scale(1);
    opacity: 1;
  }
  30% {
    transform: translateY(30vh) translateX(0) scale(1.5);
    opacity: 1;
  }
  40% {
    transform: translateY(40vh) translateX(0) scale(1);
    opacity: 1;
  }
  50% {
    transform: translateY(50vh) translateX(0) scale(1.5);
    opacity: 1;
  }
  60% {
    transform: translateY(60vh) translateX(0) scale(1);
    opacity: 1;
  }
  70% {
    transform: translateY(70vh) translateX(0) scale(1.5);
    opacity: 1;
  }
  80% {
    transform: translateY(80vh) translateX(0) scale(1);
    opacity: 1;
  }
  90% {
    transform: translateY(90vh) translateX(0) scale(1.5);
    opacity: 1;
  }
  100% {
    transform: translateY(100vh) translateX(-20px) scale(0.5);
    opacity: 0;
  }
}
</style>

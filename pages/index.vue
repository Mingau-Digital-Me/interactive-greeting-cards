<template>
  <div class="landing-page">
    <section class="landing-page__section">
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

    <section class="landing-page__section">
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
    image: "./components/CardPricing/coin.png",
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
    name: "light",
    // image: "",
    image: "./components/CardPricing/coins.png",
    price: 29.9,
    isPerMonth: true,
    isMostChosen: false,
    items: [
      t("LandingPage.section.cardsPricing.tierTwo.itemOne"),
      t("LandingPage.section.cardsPricing.tierTwo.itemTwo"),
    ],
  },
  {
    name: "Bolt",
    // image: "",
    image: "./components/CardPricing/bag-of-coins.png",
    price: 109.9,
    isPerMonth: false,
    isMostChosen: true,
    items: [t("LandingPage.section.cardsPricing.tierThree.itemOne")],
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
</script>

<style lang="postcss">
.landing-page {
  @apply w-full max-w-full;
  &__section {
    @apply min-h-dvh flex justify-center items-center pb-10 sm:pb-0;

    &--first-view {
      @apply flex flex-col items-center sm:grid sm:grid-cols-2 sm:gap-4;
    }

    &--how-to {
      @apply flex flex-col items-center sm:grid grid-cols-2;
    }

    &--pricing {
      @apply flex;
    }

    &--faq {
      @apply flex flex-col justify-center items-center sm:gap-8 mx-8 sm:m-0;
    }
  }
}
</style>

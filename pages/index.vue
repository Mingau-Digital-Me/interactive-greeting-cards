<template>
  <div class="landing-page">
    <section class="landing-page__section">
      <div class="flex flex-col items-center sm:grid sm:grid-cols-2 gap-4">
        <div class="flex flex-col items-center justify-center gap-4 m-10">
          <span class="text-4xl sm:text-8xl font-bold text-center">
            {{ $t("LandingPage.section.first.title") }}
          </span>
          <span class="text-lg sm:text-xl font-normal text-center mt-10">
            {{ $t("LandingPage.section.first.subtitle") }}
          </span>

          <UButton
            size="lg"
            color="gray"
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
        <NuxtImg
          class="m-10 w-10/12"
          src="./pages/LandingPage/greetings-illustration.png"
        />
      </div>
    </section>
    <section class="landing-page__section">
      <CardPricingList :cards="cardsPricing" />
    </section>
    <section class="landing-page__section"></section>
    <section class="landing-page__section"></section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "app",
});

const cardsPricing = [
  {
    name: "basic",
    // image: "",
    image: "./components/CardPricing/coin.png",
    price: 19.9,
    isPerMonth: true,
    isMostChosen: false,
    items: ["First Item", "Second Item", "Third Item"],
  },
  {
    name: "light",
    // image: "",
    image: "./components/CardPricing/coins.png",
    price: 29.9,
    isPerMonth: false,
    isMostChosen: false,
    items: ["First Item", "Second Item"],
  },
  {
    name: "Bolt",
    // image: "",
    image: "./components/CardPricing/bag-of-coins.png",
    price: 69.9,
    isPerMonth: false,
    isMostChosen: true,
    items: ["First Item"],
  },
];
</script>

<style lang="postcss">
.landing-page {
  @apply w-full max-w-full;
  &__section {
    @apply min-h-dvh flex flex-col items-center justify-center py-4;
  }
}
</style>

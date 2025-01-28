<template>
  <div class="landing-page">
    <!-- <section class="landing-page__section"></section> -->
    <section class="landing-page__section--primary">
      <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
        <CardPricing
          v-for="(card, index) in cardsPricing"
          :name="card.name"
          :image="card.image"
          :price="card.price"
          :items="card.items"
          :is-per-month="card.isPerMonth"
          :is-most-chosen="card.isMostChosen"
          :key="index"
        />
      </div>
    </section>
    <section class="landing-page__section"></section>
    <section class="landing-page__section--primary"></section>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "app",
});

const cardsPricing = [
  {
    name: "basic",
    image: "",
    // image: "./components/CardPricing/coin.png",
    price: 19.9,
    isPerMonth: false,
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
    price: 39.9,
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
    @apply min-h-dvh flex flex-col py-4;

    &--primary {
      @apply min-h-dvh bg-sky-500 flex flex-col justify-center py-4;
    }
  }
}
</style>

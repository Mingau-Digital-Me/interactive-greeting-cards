<template>
  <div class="flex flex-col justify-center items-center gap-9">
    <h2 class="text-4xl sm:text-6xl font-bold">
      {{ $t("CardPricingList.prices") }}
    </h2>

    <div
      class="flex flex-col sm:flex-row justify-center items-center mt-8 gap-8"
    >
      <CardPricing
        v-for="(card, index) in props.cards"
        :name="card.name"
        :image="card.image"
        :price="card.price"
        :include-items="card.includeItems"
        :not-include-items="card.notIncludeItems"
        :is-per-month="card.isPerMonth"
        :is-most-chosen="card.isMostChosen"
        :key="index"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
interface ICard {
  name: string;
  image: string;
  price: number;
  includeItems: Array<string>;
  notIncludeItems: Array<string>;
  isPerMonth: boolean;
  isMostChosen: boolean;
}

interface IProps {
  cards: Array<ICard>;
}

const props = defineProps<IProps>();
</script>

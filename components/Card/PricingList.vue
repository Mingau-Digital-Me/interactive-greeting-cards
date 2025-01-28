<template>
  <div class="flex flex-col sm:flex-row justify-center items-center gap-4">
    <CardPricing
      v-for="(card, index) in props.cards"
      :name="card.name"
      :image="card.image"
      :price="card.price"
      :items="card.items"
      :is-per-month="card.isPerMonth"
      :is-most-chosen="card.isMostChosen"
      :key="index"
    />
  </div>
</template>

<script setup lang="ts">
interface ICard {
  name: string;
  image: string;
  price: number;
  items: Array<string>;
  isPerMonth: boolean;
  isMostChosen: boolean;
}

interface IProps {
  cards: Array<ICard>;
}

const props = defineProps<IProps>();
</script>

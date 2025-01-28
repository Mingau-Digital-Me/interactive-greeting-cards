<template>
  <div class="card-pricing">
    <div class="card-pricing__header">
      <div v-if="image">
        <div>
          <h1 class="capitalize text-3xl font-light">{{ name }}</h1>
          <div class="text-2xl font-bold">{{ priceCurrency }}</div>
          <div class="text-sm font-light">{{ planRecorrency }}</div>
        </div>

        <NuxtImg
          v-if="image"
          :src="image"
          :width="500"
          class="card-pricing__header--image"
        />
      </div>

      <div v-else class="flex flex-col justify-center items-center">
        <h1 class="capitalize text-xl font-light">{{ name }}</h1>
        <div class="flex flex-col items-center mt-2">
          <div class="text-4xl font-bold">{{ priceCurrency }}</div>
          <div class="text-xs font-light">{{ planRecorrency }}</div>
        </div>
      </div>
    </div>

    <div class="card-pricing__content">
      <ul>
        <li v-for="(item, index) in items" :key="index" class="relative mt-1">
          <UIcon
            name="i-heroicons-check"
            class="text-green-600 absolute bottom-1 w-5 h-5"
          />
          <span class="m-6">{{ item }}</span>
        </li>
      </ul>
    </div>

    <div class="card-pricing__footer"></div>
  </div>
</template>

<script setup lang="ts">
const { t, locale } = useI18n();

interface IProps {
  name: string;
  image: string;
  price: number;
  items: Array<string>;
  isPerMonth: boolean;
  isMostChosen: boolean;
}

const { name, image, price, items, isPerMonth, isMostChosen } =
  defineProps<IProps>();

const planRecorrency = computed(() =>
  isPerMonth ? `${t("CardPricing.perMonth")}` : `${t("CardPricing.perYear")}`
);
const priceCurrency = computed(() => formatCurrency(price));

function formatCurrency(value: number) {
  const currency = locale.value === "pt" ? "BRL" : "USD";

  return new Intl.NumberFormat(locale.value, {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  }).format(value);
}
</script>

<style lang="postcss">
.card-pricing {
  @apply max-w-64 min-w-64 p-4 rounded text-black dark:text-white;

  &:hover {
    .card-pricing {
      @apply sm:dark:!bg-slate-800 sm:!bg-slate-400;
      background-color: red;

      &__header {
        &--image {
          @apply sm:scale-75 sm:-translate-y-5;
        }
      }
    }
  }

  &__header {
    @apply relative pb-4;

    &--image {
      @apply absolute -top-16 -right-20 scale-50 transition-all translate-y-0;
    }
  }

  &__content {
    @apply min-h-40 py-4;
  }

  &__footer {
  }
}
</style>

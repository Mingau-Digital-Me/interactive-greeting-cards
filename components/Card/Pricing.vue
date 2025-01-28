<template>
  <div class="card-pricing dark:card-pricing--dark">
    <div class="card-pricing__header">
      <div v-if="image">
        <div>
          <h1 class="capitalize text-3xl font-thin">{{ name }}</h1>
          <div class="text-2xl font-semibold">{{ priceCurrency }}</div>
          <div class="text-sm mx-[1px] font-light">{{ planRecorrency }}</div>
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

    <div class="card-pricing__footer">
      <UButton
        size="lg"
        trailing-icon="i-heroicons-arrow-right"
        :label="acquirelabel"
        :ui="{
          base: 'w-full flex justify-center items-center',
        }"
        onclick="acquirePlan"
      />
    </div>
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

const priceCurrency = computed(() => formatCurrency(price));
const acquirelabel = computed(() => `${t("CardPricing.acquire")}`);
const planRecorrency = computed(() =>
  isPerMonth ? `${t("CardPricing.perMonth")}` : `${t("CardPricing.perYear")}`
);

function formatCurrency(value: number) {
  const currency = locale.value === "pt" ? "BRL" : "USD";

  return new Intl.NumberFormat(locale.value, {
    style: "currency",
    currency: currency,
    currencyDisplay: "symbol",
  }).format(value);
}

function acquirePlan() {}
</script>

<style lang="postcss">
.card-pricing {
  @apply max-w-64 min-w-64 p-6 rounded text-black dark:text-white bg-gray-100 dark:bg-gray-800 sm:transition-all sm:ease-linear sm:scale-100;

  box-shadow: rgba(0, 0, 0, 0.25) 0px 14px 28px,
    rgba(0, 0, 0, 0.22) 0px 10px 10px;

  &:hover {
    @apply sm:scale-105;

    .card-pricing__header {
      &--image {
        @apply sm:scale-75 sm:-translate-y-5;
      }
    }
  }

  &__header {
    @apply relative pb-4;

    &--image {
      @apply absolute -top-10 -right-14 scale-50 transition-all ease-linear translate-y-0;
    }
  }

  &__content {
    @apply min-h-40 py-4;
  }

  &__footer {
    @apply flex justify-center items-center pt-4;
  }
}
</style>

<template>
  <div class="card-pricing dark:card-pricing--dark">
    <div class="card-pricing__header">
      <div v-if="image">
        <div>
          <h1 class="capitalize text-2xl font-thin">{{ name }}</h1>
          <div class="text-4xl font-bold">{{ priceCurrency }}</div>
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
        <div class="flex flex-col items-center mt-1">
          <div class="text-5xl font-bold">{{ priceCurrency }}</div>
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
        size="xl"
        trailing-icon="i-heroicons-arrow-right"
        :label="$t('CardPricing.acquire')"
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
  @apply max-w-80 min-w-80 sm:max-w-96 sm:min-w-96 rounded-2xl text-black dark:text-white bg-gray-100 dark:bg-gray-800 sm:transition-all duration-300 sm:ease-linear sm:scale-100 sm:opacity-95 dark:border dark:border-gray-600;

  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;

  &:hover {
    @apply sm:scale-105 sm:opacity-100;

    .card-pricing {
      &__header {
        &--image {
          @apply sm:scale-75 sm:-translate-y-5;
        }
      }
      &__header,
      &__content,
      &__footer {
        @apply bg-gray-50 dark:bg-gray-900;
      }
    }
  }

  &__header {
    @apply relative p-6 pb-4 rounded-t-2xl;

    &--image {
      @apply absolute -top-14 -right-20 scale-50 transition-all ease-linear translate-y-0;
    }
  }

  &__content {
    @apply min-h-40 py-4 bg-gray-100 dark:bg-gray-800 p-6 border-t dark:border-gray-600;
  }

  &__footer {
    @apply flex justify-center items-center p-6 pt-4 bg-gray-100 dark:bg-gray-800 rounded-b-2xl;
  }
}
</style>

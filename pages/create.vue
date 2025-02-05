<template>
  <div class="create-page">
    <div class="create-page__form">
      <UForm
        :schema="schema"
        :state="state"
        class="space-y-4"
        @submit="onSubmit"
      >
        <UFormGroup :label="t('CreatePage.form.to')" name="to">
          <UInput v-model="state.to" />
        </UFormGroup>

        <UFormGroup
          :label="t('CreatePage.form.text')"
          name="text"
          class="relative"
        >
          <UTextarea v-model="state.text" :maxrows="5" :rows="6" />
          <p
            v-if="state.text.length > 500"
            class="absolute -top-6 right-0 text-xs text-red-400"
          >
            {{ state.text.length }} / {{ MAX_TEXT_CHARACTER }}
          </p>
          <p v-else class="absolute -top-6 right-0 text-xs">
            {{ state.text.length }} / {{ MAX_TEXT_CHARACTER }}
          </p>
        </UFormGroup>

        <UFormGroup :label="t('CreatePage.form.from')" name="from">
          <UInput v-model="state.from" />
        </UFormGroup>

        <div>
          <div class="sm:flex sm:gap-8 h-60">
            <UFormGroup
              name="boxColor"
              class="relative w-48"
              :class="isPro ? '' : 'not-pro'"
              :label="t('CreatePage.form.boxColor')"
            >
              <color-picker-block
                v-model="state.boxColor"
                class="absolute top-0 sm:-left-[10px]"
              />
            </UFormGroup>

            <UFormGroup
              name="backgroundColor"
              class="relative w-48"
              :class="isPro ? '' : 'not-pro'"
              :label="t('CreatePage.form.backgroundColor')"
            >
              <color-picker-block
                v-model="state.backgroundColor"
                class="absolute top-0 sm:-left-[10px]"
              />
            </UFormGroup>
          </div>
          <p v-show="!isPro" class="text-sm text-gray-600">
            {{ t("CreatePage.pro.enablePro") }}
          </p>
        </div>

        <UButton type="submit">{{ t("CreatePage.form.create") }}</UButton>
      </UForm>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "app",
});

import { z } from "zod";
const { t } = useI18n();
const { query } = useRoute();
import type { FormSubmitEvent } from "#ui/types";

const isPro = computed(() => query.isPro === "true");

const MIN_TEXT_CHARACTER = 100;
const MAX_TEXT_CHARACTER = 500;

const schema = z.object({
  to: z.string().min(1, t("CreatePage.error.to")),
  text: z
    .string()
    .min(MIN_TEXT_CHARACTER, t("CreatePage.error.text.min"))
    .max(MAX_TEXT_CHARACTER, t("CreatePage.error.text.max")),
  from: z.string().min(1, t("CreatePage.error.from")),
  boxColor: z.string().nonempty(),
  backgroundColor: z.string().nonempty(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  to: "",
  text: "",
  from: "",
  boxColor: "#000000",
  backgroundColor: "#f97373",
});

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with data
  console.log(event.data);
}
</script>

<style lang="postcss">
.create-page {
  @apply min-h-[82dvh] sm:p-8 p-4 sm:grid sm:grid-cols-2 sm:gap-8;

  &__form {
  }
}

.CP-block {
  @apply !bg-transparent;
}

.not-pro {
  @apply pointer-events-none opacity-40;
}
</style>

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

        <UFormGroup :label="t('CreatePage.form.from')" name="from">
          <UInput v-model="state.from" />
        </UFormGroup>

        <UFormGroup :label="t('CreatePage.form.boxColor')" name="boxColor">
          <color-picker-block v-model="state.boxColor" />
        </UFormGroup>

        <UFormGroup
          :label="t('CreatePage.form.backgroundColor')"
          name="backgroundColor"
          class=""
        >
          <color-picker-block v-model="state.backgroundColor" />
        </UFormGroup>

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
import type { FormSubmitEvent } from "#ui/types";

const schema = z.object({
  to: z.string().min(1, t("CreatePage.error.to")),
  from: z.string().min(1, t("CreatePage.error.from")),
  boxColor: z.string().nonempty(),
  backgroundColor: z.string().nonempty(),
});

type Schema = z.output<typeof schema>;

const state = reactive({
  to: "",
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
</style>

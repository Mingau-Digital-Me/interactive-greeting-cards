<template>
  <div class="flex flex-col gap-1 font-medium">
    <label>{{ t("TogglePlan.label") }}</label>
    <div
      class="flex sm:justify-start justify-between items-center gap-4 max-w-full"
    >
      <UButton
        :color="model === false ? 'primary' : 'gray'"
        @click="togglePlan()"
        size="xl"
        class="sm:w-24 flex-1 flex justify-center"
        :label="t('TogglePlan.type.basic')"
      />

      <UButton
        :color="model ? 'primary' : 'gray'"
        @click="togglePlan()"
        size="xl"
        class="sm:w-24 flex-1 flex justify-center"
        :label="t('TogglePlan.type.pro')"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n();
const model = defineModel();

function togglePlan() {
  model.value = !model.value;
}
</script>

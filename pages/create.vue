<template>
  <div class="create-page">
    <div class="create-page__form">
      <div class="create-page__form-wrapper">
        <div class="pt-4 sm:pt-8">
          <h2 class="text-3xl font-bold">{{ t("CreatePage.title") }}</h2>
          <p class="text-base text-gray-400 py-1 sm:py-2">
            {{ t("CreatePage.subtitle") }}
          </p>
        </div>

        <TogglePlan v-model="isPro" />

        <div class="flex flex-col gap-1 font-medium">
          <label>{{ t("CreatePage.form.images") }}</label>
          <input type="file" @input="handleImages" multiple />
        </div>

        <UForm
          :schema="schema"
          :state="state"
          @submit="onSubmit"
          class="create-page__form-container"
        >
          <UFormGroup :label="t('CreatePage.form.to')" name="to" size="xl">
            <UInput v-model="state.to" />
          </UFormGroup>

          <UFormGroup
            :label="t('CreatePage.form.text')"
            name="text"
            class="relative"
            size="xl"
          >
            <UTextarea v-model="state.text" :maxrows="5" :rows="6" />
            <p
              v-if="state.text.length > 200"
              class="absolute -top-6 right-0 text-xs text-red-400"
            >
              {{ state.text.length }} / {{ MAX_TEXT_CHARACTER }}
            </p>
            <p v-else class="absolute -top-6 right-0 text-xs">
              {{ state.text.length }} / {{ MAX_TEXT_CHARACTER }}
            </p>
          </UFormGroup>

          <UFormGroup :label="t('CreatePage.form.from')" name="from" size="xl">
            <UInput v-model="state.from" />
          </UFormGroup>

          <div :class="isPro ? '' : 'not-pro'">
            <div class="flex sm:gap-8 h-60">
              <UFormGroup
                name="boxColor"
                size="xl"
                class="sm:relative w-48"
                :label="t('CreatePage.form.boxColor')"
              >
                <color-picker-block
                  :key="updateColorPickerComponent"
                  v-model="state.boxColor"
                  class="absolute top-0 -left-[10px]"
                />
              </UFormGroup>

              <UFormGroup
                name="backgroundColor"
                size="xl"
                class="sm:relative w-48"
                :label="t('CreatePage.form.backgroundColor')"
              >
                <color-picker-block
                  :key="updateColorPickerComponent"
                  v-model="state.backgroundColor"
                  class="absolute top-0 -left-[10px]"
                />
              </UFormGroup>
            </div>
            <p v-show="!isPro" class="text-gray-400 text-base">
              {{ t("CreatePage.pro.enablePro") }}
            </p>
          </div>

          <UFormGroup
            :label="t('CreatePage.form.music.label')"
            name="music"
            size="xl"
            :help="!isPro ? t('CreatePage.pro.enablePro') : ''"
            :class="isPro ? '' : 'not-pro'"
          >
            <UInput
              v-model="state.music"
              :placeholder="t('CreatePage.form.music.placeholder')"
            />
          </UFormGroup>

          <UButton class="hidden" id="buttonSubmit" type="submit"></UButton>
        </UForm>
      </div>
    </div>

    <div class="create-page__preview">
      <div class="create-page__preview-container">
        <div class="create-page__preview-container--box">
          <GreetingsLoveBox
            :is-preview="true"
            v-model:to="state.to"
            v-model:text="state.text"
            v-model:from="state.from"
            v-model:music="state.music"
            v-model:box-color="state.boxColor"
            v-model:background-color="state.backgroundColor"
          />
        </div>

        <UButton
          class="flex w-full justify-center"
          type="submit"
          @click="submitButton()"
          >{{ t("CreatePage.form.create") }}</UButton
        >
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
definePageMeta({
  layout: "app",
});

import { z } from "zod";
import type { FormSubmitEvent } from "#ui/types";
import TogglePlan from "~/components/TogglePlan.vue";

const { t } = useI18n();
const { query } = useRoute();
const toast = useToast();

const isPro = ref<boolean>(query.isPro === "true");
const updateColorPickerComponent = ref(0);

const MIN_TEXT_CHARACTER = 100;
const MAX_TEXT_CHARACTER = 200;
const MAX_NUMBER_OF_IMAGES_FOR_BASIC_PLAN = 5;
const MAX_NUMBER_OF_IMAGES_FOR_PRO_PLAN = 8;
const YOUTUBE_REGEX =
  /^(https?:\/\/)?(www\.)?(youtube\.com\/(watch\?v=|embed\/|v\/)|youtu\.be\/)[\w-]+(&\S*)?$/;

const schema = z.object({
  to: z.string().min(1, t("CreatePage.error.to")),
  text: z
    .string()
    .min(MIN_TEXT_CHARACTER, t("CreatePage.error.text.min"))
    .max(MAX_TEXT_CHARACTER, t("CreatePage.error.text.max")),
  from: z.string().min(1, t("CreatePage.error.from")),
  boxColor: z.string().nonempty(),
  backgroundColor: z.string().nonempty(),
  music: z
    .string()
    .refine(
      (val) => val === "" || YOUTUBE_REGEX.test(val),
      t("CreatePage.error.music")
    ),
});

type Schema = z.output<typeof schema>;

const DEFAULT_BOX_COLOR = "#000000";
const DEFAULT_BACKGROUND_COLOR = "#f97373";

const state = reactive({
  to: "",
  text: "",
  from: "",
  boxColor: DEFAULT_BOX_COLOR,
  backgroundColor: DEFAULT_BACKGROUND_COLOR,
  music: "",
});

watch(isPro, (old, current) => {
  if (!old && current) {
    state.boxColor = DEFAULT_BOX_COLOR;
    state.backgroundColor = DEFAULT_BACKGROUND_COLOR;
    state.music = "";

    updateColorPickerComponent.value++;
  }
});

const { handleFileInput, files } = useFileStorage({ clearOldFiles: true });

async function handleImages(event: Event) {
  await handleFileInput(event);

  const currentImages = [...JSON.parse(JSON.stringify(files.value))];

  if (currentImages.length > MAX_NUMBER_OF_IMAGES_FOR_PRO_PLAN) {
    toast.add({
      title: t("CreatePage.toast.overPlan.title"),
      description: t("CreatePage.toast.overPlan.description", {
        amount: currentImages.length,
      }),
    });
  } else if (currentImages.length > MAX_NUMBER_OF_IMAGES_FOR_BASIC_PLAN) {
    toast.add({
      title: t("CreatePage.toast.changeToPro.title"),
      description: t("CreatePage.toast.changeToPro.description", {
        amount: currentImages.length,
      }),
      actions: [
        {
          label: t("CreatePage.toast.changeToPro.buttonLabel"),
          click: () => (isPro.value = true),
        },
      ],
      callback: () => {
        toast.add({
          title: t("CreatePage.toast.removePhotos.title"),
          description: t("CreatePage.toast.removePhotos.description"),
        });
      },
    });
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  const rawFiles = [...JSON.parse(JSON.stringify(files.value))];
  const images = isPro
    ? rawFiles.slice(0, MAX_NUMBER_OF_IMAGES_FOR_PRO_PLAN)
    : rawFiles.slice(0, MAX_NUMBER_OF_IMAGES_FOR_BASIC_PLAN);

  console.log("onSubmit: ", {
    ...event.data,
    isPro: isPro.value,
    images,
  });
}

function submitButton() {
  const buttonSubmit = document.getElementById("buttonSubmit");
  buttonSubmit?.click();
}
</script>

<style lang="postcss">
.create-page {
  @apply min-h-[82dvh] sm:grid sm:grid-cols-2 sm:gap-8 gap-4 flex flex-col items-center px-4 sm:px-0 w-full;

  &__form {
    @apply sm:max-h-[80dvh] sm:overflow-y-auto sm:flex sm:justify-center max-w-full py-4;

    &-wrapper {
      @apply flex flex-col gap-8 max-w-[520px];
    }

    &-container {
      @apply flex flex-col justify-center sm:gap-8 gap-4;
    }
  }

  &__preview {
    @apply w-full sm:max-h-[80dvh] rounded flex flex-col items-center py-4;

    &-container {
      @apply max-w-[520px] min-w-[92vw] sm:min-w-[360px] max-h-[700px] min-h-[700px] rounded flex flex-col justify-between items-center sm:gap-8 gap-4;

      &--box {
        @apply flex flex-1 rounded-xl max-w-[520px] min-w-[92vw] sm:min-w-[390px] max-h-[620px] min-h-[620px];
      }
    }
  }
}

.CP-block {
  @apply !bg-transparent;
}

.not-pro {
  @apply pointer-events-none opacity-40;
}
</style>

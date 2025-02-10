<template>
  <div class="polaroid-string">
    <div class="polaroid-string__wrapper">
      <img
        class="polaroid-string__img"
        src="../public/components/PolaroidString/string.png"
      />
      <Polaroid
        :image-src="imageSrcOne"
        class="polaroid-string__polaroid polaroid--one"
        @click="toggleBringToFront($event, 0)"
      />
      <Polaroid
        :image-src="imageSrcTwo"
        class="polaroid-string__polaroid polaroid--two"
        @click="toggleBringToFront($event, 1)"
      />
      <Polaroid
        :image-src="imageSrcThree"
        class="polaroid-string__polaroid polaroid--three"
        @click="toggleBringToFront($event, 2)"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

const props = defineProps({
  imageSrcOne: String,
  imageSrcTwo: String,
  imageSrcThree: String,
});

const originalParents = ref<(Element | null)[]>([]);
const originalSiblings = ref<(Element | null)[]>([]);

function toggleBringToFront(event: Event, index: number) {
  const polaroid = event.currentTarget as HTMLElement;
  const isExpanded = polaroid.classList.contains("expanded");
  const holdPolaroidsHTMLElement = document.getElementById("hold-polaroid");

  if (isExpanded) {
    // return to original location
    polaroid.classList.remove("expanded");
    originalParents.value[index]?.insertBefore(
      polaroid,
      originalSiblings.value[index]
    );
  } else {
    // save original location before removing
    originalParents.value[index] = polaroid.parentElement;
    originalSiblings.value[index] = polaroid.nextElementSibling;

    // move to body
    holdPolaroidsHTMLElement?.appendChild(polaroid);
    polaroid.classList.add("expanded");
  }
}
</script>

<style lang="postcss">
.polaroid-string {
  @apply max-w-[400px] w-[200px] !max-h-[90px] !h-[90px] relative;

  &__wrapper {
    background-size: cover;
    background-position: top;
    background-repeat: no-repeat;
  }

  &__img {
    @apply z-10 absolute;
  }

  &__polaroid {
    @apply absolute z-0 cursor-pointer;
  }
}

.polaroid {
  transition: transform 0.5s ease-in-out, scale 0.5s ease-in-out;

  &--one,
  &--two,
  &--three {
    scale: 0.16;
    cursor: pointer;
  }

  &--one {
    left: -90px;
    top: -90px;
    transform: rotateZ(12deg);
  }

  &--two {
    top: -84px;
    left: -18px;
    right: 36px;
  }

  &--three {
    right: -77px;
    top: -94px;
    transform: rotateZ(-12deg);
  }
}

.expanded {
  position: fixed;
  top: 50%;
  left: 50%;
  z-index: 1000;
  scale: 1;
  transform: translate(-50%, -50%);
}
</style>

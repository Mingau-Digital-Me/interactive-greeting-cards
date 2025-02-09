<template>
  <div class="polaroid-string">
    <div class="polaroid-string__wrapper">
      <img
        class="polaroid-string__img"
        src="../public/components/PolaroidString/string.png"
      />
      <Polaroid
        :image-src="imageSrcOne"
        class="polaroid-string__polaroid--one"
      />
      <Polaroid
        :image-src="imageSrcTwo"
        class="polaroid-string__polaroid--two"
      />
      <Polaroid
        :image-src="imageSrcThree"
        class="polaroid-string__polaroid--three"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps({
  imageSrcOne: String,
  imageSrcTwo: String,
  imageSrcThree: String,
});
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
    &--one,
    &--two,
    &--three {
      @apply absolute z-0;
    }

    &--one {
      left: -97px;
      top: -90px;
      scale: 0.16;
      transform: rotateZ(8deg);
    }
    &--two {
      top: -85px;
      left: -28px;
      right: 36px;
      margin-inline: auto;
      width: fit-content;
      scale: 0.16;
    }
    &--three {
      right: -90px;
      top: -94px;
      scale: 0.16;
      transform: rotateZ(-12deg);
    }
  }
}
</style>

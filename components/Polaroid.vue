<template>
  <div class="polaroid">
    <div class="image-wrapper" :style="imageStyle">
      <img v-if="imageSrc" :src="imageSrc" alt="Polaroid image" />
    </div>
    <slot></slot>
  </div>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  imageSrc: String,
});

const imageStyle = computed(() => ({
  background: props.imageSrc ? "none" : "#ccc",
}));
</script>

<style scoped>
.polaroid {
  width: 300px;
  height: 300px;
  background: white;
  padding: 12px;
  display: flex;
  flex-direction: column;
  align-items: center;
  box-shadow: 2px 4px 10px rgba(0, 0, 0, 0.2);
  border-radius: 5px;
}

.image-wrapper {
  width: 200px;
  height: 240px;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.image-wrapper img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: contrast(1.1) brightness(0.9) sepia(0.2);
}
</style>

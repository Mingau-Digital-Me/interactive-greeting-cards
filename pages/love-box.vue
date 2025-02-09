<template>
  <GreetingsLoveBox
    v-model:to="state.to"
    v-model:text="state.text"
    v-model:from="state.from"
    v-model:images="state.files"
    v-model:music="state.music"
    v-model:box-color="state.boxColor"
    v-model:background-color="state.backgroundColor"
  />
</template>

<script setup lang="ts">
definePageMeta({
  layout: "greetings",
});

const images = [
  "./components/Polaroid/casal1.jfif",
  "./components/Polaroid/casal2.jpeg",
  "./components/Polaroid/casal3.jpg",
  "./components/Polaroid/casal4.jpg",
  "./components/Polaroid/casal5.jpg",
  "./components/Polaroid/casal6.jpg",
];

const state = {
  to: "",
  text: "",
  from: "",
  files: images,
  music: "",
  boxColor: "",
  backgroundColor: "",
};
</script>

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

const state = {
  to: "",
  text: "",
  from: "",
  files: "",
  music: "",
  boxColor: "",
  backgroundColor: "",
};
</script>

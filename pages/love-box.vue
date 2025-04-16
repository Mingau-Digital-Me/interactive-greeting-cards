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

const to = "Nome de quem esta mandando";
const text = `Que a vida te abrace com alegrias, 
conquistas e muito amor. Que cada dia traga novos
motivos para sorrir. Você merece tudo de melhor,
hoje e sempre. Parabéns pela sua jornada, eu te amo
muuuuuuuuuito!`;
const from = "Nome da pessoa";

const state = {
  to,
  text,
  from,
  files: images,
  music: "",
  boxColor: "",
  backgroundColor: "",
};
</script>

<script setup>
import { onMounted, ref } from 'vue';
import Letter from "@/pages/game/Letter.vue";

const numbers = ref([
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
  11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  21, 22, 23, 24, 25, 26, 27, 28, 29, 30
]);

const target = ref(1);
const rank = ref(0);
const timer = ref(120); // Timer starts at 60 seconds

const upper = () => {
  target.value = target.value + 1;
}

const upperRank = () => {
  rank.value += 1;
  target.value = 1;
  shuffleNumbers();
}

const shuffleNumbers = () => {
  for (let i = numbers.value.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [numbers.value[i], numbers.value[j]] = [numbers.value[j], numbers.value[i]];
  }
}

const resetTimer = () => {
  timer.value = 120;
}

const startTimer = () => {
  setInterval(() => {
    if (timer.value > 0) {
      timer.value -= 1;
    }
  }, 1000);
}

onMounted(() => {
  upperRank();
  startTimer();
})
</script>

<template>
  <div class="container mx-auto p-4">
    <h1 class="font-bold text-3xl text-center mb-6">🧠 The Magic Table</h1>
    <div class="font-bold text-3xl mb-4">
      <h2>Target Number: {{ target }}</h2>
      <h2>Your Rank: {{ rank }}</h2>
      <h2>Time Left: {{ timer }}s</h2>
    </div>
    <div class="grid-container gap-4">
      <Letter v-for="number in numbers" :key="number" :letter="number" :targetNumber="target" :upperNumber="upper" :upperRank="upperRank" :time="timer"/>
    </div>
  </div>
</template>

<style scoped>
.grid-container {
  display: grid;
  grid-template-columns: repeat(10, 1fr); /* 5 columns for a 5x5 grid */
  gap: 10px; /* Exact gap of 10px */
}

.container {
  max-width: 1200px;
}
</style>

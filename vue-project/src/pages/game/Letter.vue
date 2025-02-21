<script setup>
import { ref, watch, defineProps } from 'vue';

const props = defineProps({
  letter: Number,
  targetNumber: Number,
  upperNumber: Function,
  upperRank: Function,
  time: Number
});

const randomValue = Math.random();
const sigmoid = (x) => 1 / (1 + Math.exp(-x));
const isA = sigmoid(randomValue - 0.5) > 0.5;
const randomValue2 = Math.random();
const isC = sigmoid(randomValue2 - 0.7) > 0.5;

const clickIt = () => {
  if (props.letter === props.targetNumber && props.time > 0) {
    props.upperNumber();
    if (props.targetNumber > 24){
      props.upperRank();
    }
  }
}
</script>

<template>
  <div v-if="isA && !isC" class="letterA" @click="clickIt">
    <p class="font-bold text-3xl">{{ letter }}</p>
  </div>
  <div v-if="!isA && !isC" class="letterB" @click="clickIt">
    <p class="font-bold text-3xl">{{ letter }}</p>
  </div>
  <div v-if="isC" class="letterC" @click="clickIt">
    <p class="font-bold text-3xl">{{ letter }}</p>
  </div>
</template>

<style scoped>
.letterA {
  background-color: red;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 100px; /* Fixed width */
  height: 100px; /* Fixed height */
  box-sizing: border-box; /* Ensures padding and border are included in the width and height */
}
.letterB {
  background-color: blue;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 100px; /* Fixed width */
  height: 100px; /* Fixed height */
  box-sizing: border-box; /* Ensures padding and border are included in the width and height */
}
.letterC {
  background-color: green;
  padding: 20px;
  border: 1px solid #ccc;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  width: 100px; /* Fixed width */
  height: 100px; /* Fixed height */
  box-sizing: border-box; /* Ensures padding and border are included in the width and height */
}
</style>

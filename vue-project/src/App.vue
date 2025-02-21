<script setup>
import Header from './components/Header.vue'
</script>

<template>
  <link rel="stylesheet" href="./assets/main.css"/>
  <body>
  <div class="bg-white w-4/5 m-auto rounded-xl mt-14 shadow-xl">
    <div class="py-3">
      <Header/>
      <router-view>
      </router-view>
    </div>

  </div>
  </body>
</template>

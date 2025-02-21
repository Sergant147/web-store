<template>
  <h1 class="font-bold text-3xl">Мои Закладки</h1>
  <CardList :items="favorites" />
</template>
<script setup>
import axios from "axios";
import {onMounted, ref} from 'vue'
const favorites = ref([])
async function fetchFavorites() {
  const {data: favoritesData} = await axios.get("https://94df37a464948ca6.mokky.dev/favorites");
  favorites.value = favoritesData.map((item) => {
    return item.item;
  });
}
onMounted(async () => {
  await fetchFavorites();
})
import CardList from "@/components/CardList.vue";
</script>

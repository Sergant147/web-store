<template>
  <h1 class="font-bold text-3xl">Мои Покупки</h1>
  <CardList :items="favorites" />
  <button class="bg-lime-500 rounded-xl" @click="clearCart">
    Оформить заказ
  </button>
</template>
<script setup>
import axios from "axios";
import {onMounted, ref} from 'vue'
const favorites = ref([])
async function fetchFavorites() {
  const {data: favoritesData} = await axios.get("https://94df37a464948ca6.mokky.dev/cart");
  favorites.value = favoritesData.map((item) => {
    return item.item;
  });
}
onMounted(async () => {
  await fetchFavorites();
})
const clearCart = async function () {
  const {data: cartdata} = await axios.get("https://94df37a464948ca6.mokky.dev/cart");
  for (const item of cartdata) {
    await axios.delete(`https://94df37a464948ca6.mokky.dev/cart/${item.id}`);
  }
  fetchFavorites()
}
import CardList from "@/components/CardList.vue";
</script>


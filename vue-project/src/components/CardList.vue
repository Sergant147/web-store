<script setup>
import Card from "@/components/Card.vue";
import axios from "axios";

defineProps({
  items: Array
})

async function onAdd(item) {
  if (!item.isAdded) {
    await axios.post("https://94df37a464948ca6.mokky.dev/cart", {
      addedId: item.id,
      productId: item.id,
      item: item
    });
  } else {
    const {data: cartData} = await axios.get("https://94df37a464948ca6.mokky.dev/cart");
    const cartItem = cartData.find((cartItem) => cartItem.productId === item.id);
    if (cartItem) {
      await axios.delete(`https://94df37a464948ca6.mokky.dev/cart/${cartItem.id}`);
    }
  }
  item.isAdded = !item.isAdded;
}

async function onFavorite(item) {
  if (!item.isFavorite) {
    await axios.post("https://94df37a464948ca6.mokky.dev/favorites", {
      favoriteId: item.id,
      productId: item.id,
      item: item
    });
  } else {
    const {data: favoritesData} = await axios.get("https://94df37a464948ca6.mokky.dev/favorites");
    const favorite = favoritesData.find((favorite) => favorite.productId === item.id);
    if (favorite) {
      await axios.delete(`https://94df37a464948ca6.mokky.dev/favorites/${favorite.id}`);
    }
  }
  item.isFavorite = !item.isFavorite;
}
</script>

<template>
  <div class="grid grid-cols-4 gap-5">
    <Card v-for="item in items" :key="item.id" :image-url="item.imageUrl" :title="item.title"
          :price="item.price" :on-click-add="onAdd" :on-click-favorite="onFavorite" :item="item" :is-added="item.isAdded" />
  </div>
</template>

<script setup>
import CardList from "@/components/CardList.vue";
import {onMounted, reactive, ref, watch} from "vue";
import axios from "axios";

const products = ref([])

const filters = reactive({
  sortBy: "title",
  searchQuery: "",
  category: ""
})

const onChangeCategory = (event) => {
  filters.category = event.target.value;
}

const onChangeSelect = (event) => {
  filters.sortBy = event.target.value
}

const onChangeSearch = (event) => {
  filters.searchQuery = event.target.value
}

onMounted(async () => {
  try {
    const {data} = await axios.get("https://94df37a464948ca6.mokky.dev/items");
    products.value = data;
    await fetchFavorites();
    await fetchCarts();
  } catch (error) {
    console.log(error)
  }
})

async function fetchFavorites() {
  const {data: favoritesData} = await axios.get("https://94df37a464948ca6.mokky.dev/favorites");
  products.value = products.value.map((item) => {
    const favorite = favoritesData.find((itemFound) => itemFound.productId === item.id)
    if (!favorite) {
      return item;
    }
    return {
      ...item,
      favoriteId: favorite.id,
      isFavorite: true
    }
  })
}

async function fetchCarts() {
  const {data: cartData} = await axios.get("https://94df37a464948ca6.mokky.dev/cart");
  products.value = products.value.map((item) => {
    const cart = cartData.find((itemFound) => itemFound.productId === item.id)
    if (!cart) {
      return item;
    }
    return {
      ...item,
      addedId: cart.id, // Using a unique property name for cart items
      isAdded: true
    }
  })
}

watch(filters, async () => {
  const params = {
    sortBy: filters.sortBy,
  }
  if (filters.searchQuery) {
    params.title = `*${filters.searchQuery}*`
  }
  if (filters.category && filters.category != "all") {
    params.category = filters.category
  }
  const {data} = await axios.get(`https://94df37a464948ca6.mokky.dev/items`, {params})
  products.value = data;
  await fetchFavorites();
  await fetchCarts();
})

</script>

<template>
  <div class="flex justify-between px-3 py-3">
    <h1 class="mb-2 font-bold text-3xl">Все Кроссовки</h1>
    <div class="flex px-3 items-center gap-4">
      <select
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        @change="onChangeSelect">
        <option value="title">По названию</option>
        <option value="-price">По цене (дорогие)</option>
        <option value="price">По цене (дешевые)</option>
      </select>
      <select
        class="px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        @change="onChangeCategory"
      >
        <option>all</option>
        <option>brain</option>
        <option>cat</option>
        <option>computer</option>
        <option>chicken</option>
        <option>dog</option>
        <option>elephant</option>
        <option>lion</option>
        <option>mouse</option>
        <option>rabbit</option>
        <option>tiger</option>
        <option>table</option>
        <option>chair</option>
        <option>ball</option>
      </select>
      <div class="relative">
        <img class="absolute left-4 top-3" src="/search.svg" alt="Search"/>
        <input
          class="border border-gray-200 rounded-md py-2 pl-11 pr-4 outline-none focus:border-gray-400"
          type="text"
          placeholder="Поиск... "
          @input="onChangeSearch"
        />
      </div>
    </div>
  </div>
  <CardList :items="products"/>
</template>


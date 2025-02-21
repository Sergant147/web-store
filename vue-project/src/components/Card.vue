<script setup>
const props = defineProps({
  id: Number,
  price: Number,
  title: String,
  imageUrl: String,
  isFavorite: Boolean,
  isAdded: Boolean,
  onClickAdd: Function,
  onClickFavorite: Function,
  item: Object
})

const onClickFav = async () => {
  await props.onClickFavorite(props.item)
}

const onClick = async () => {
  await props.onClickAdd(props.item)
}
</script>

<template>
  <div
    class="relative bg-white border border-slate-100 rounded-3xl p-8 cursor-pointer hover:-translate-y-2 transition hover:shadow-xl"
  >
    <img
      :src="props.item.isFavorite ? '/like-1.svg' : '/like-2.svg'"
      alt="Like"
      class="absolute top-0 left-0"
      @click="onClickFav"
    />
    <img :src="imageUrl" alt="Sneaker"/>
    <p class="mt-2">{{ title }}</p>
    <div class="flex justify-between mt-5">
      <div flex="flex flex-col">
        <span class="text-slate-400">Цена: </span>
        <b v-if="price < 101">{{ price }}. руб</b>
        <b v-if="price > 100">{{ Math.floor(price / 100) }} $</b>

      </div>
      <img :src="!isAdded ? '/plus.svg' : '/checked.svg'" alt="Plus" @click="onClick"/>
    </div>
  </div>
</template>

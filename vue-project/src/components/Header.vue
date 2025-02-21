<script>
</script>

<template>
  <div class="flex justify-between px-3 py-3 border-b border-slate-200">
    <router-link to="/">
      <div class="flex items-center gap-2">
        <img src="/logo.png" alt="Logo" :width="60" :height="60">
        <div>
          <h1 class="text-xl font-bold uppercase">Vue Store</h1>
          <h2 class="opacity-40 hover:opacity-100 transition">Магазин лучших товаров</h2>
        </div>
      </div>
    </router-link>
    <div>
      <ul class="flex justify-between gap-5 px-3 py-4">
        <router-link to="/favorites">
          <li class="flex justify-between gap-2 cursor-pointer transition">
            <img src="/heart.svg" alt="Heart" height="20" width="20"/>
            <h2>Заметки</h2>
          </li>
        </router-link>
        <router-link to="/cart">
          <li class="flex justify-between gap-2 cursor-pointer transition">
            <img src="/cart.svg" alt="Cart" height="20" width="20">
            <h2>Корзина</h2>
          </li>
        </router-link>
        <router-link to="/game">
          <li class="flex justify-between gap-2 cursor-pointer transition">
            <img src="/brain.png" alt="Game" height="20" width="30">
            <h2>Игра</h2>
          </li>
        </router-link>
      </ul>
    </div>
  </div>
</template>

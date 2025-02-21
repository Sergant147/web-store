import './assets/main.css'

import {createApp} from 'vue'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import {autoAnimatePlugin} from '@formkit/auto-animate/vue'
import Home from "@/pages/Home.vue";
import Favorites from "@/pages/Favorites.vue";
import Cart from "@/pages/Cart.vue";
import Game from "@/pages/game/Game.vue";

const app = createApp(App)
const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/favorites',
    name: 'Favorites',
    component: Favorites
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/game',
    name: 'Game',
    component: Game
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
app.use(autoAnimatePlugin)
app.use(router)

app.mount('#app')

import { createRouter, createWebHistory } from 'vue-router'
import Cardapio from '../views/Cardapio.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/', name: 'cardapio', component: Cardapio.View
    }
  ],
})

export default router
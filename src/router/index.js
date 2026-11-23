import CardapioView from '@/views/CardapioView.vue'
import { createRouter, createWebHistory } from 'vue-router'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'cardapio', component: CardapioView },
  ],
})

export default router
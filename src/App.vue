<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import CardLanche from './components/CardLanche.vue';


const totalItens = ref(0)

</script>
<template>
  <div class="min-h-screen bg-gray-100 transition-colors dark:bg-gray-900">
    <!-- Barra de navegação -->
    <NavBar :total-itens="totalItens"></NavBar>   

    <main class="mx-auto max-w-6xl px-4 py-6">
      <h1 class="mb-1 text-3xl font-bold text-gray-800 dark:text-gray-100">Cardápio</h1>
      <p class="mb-6 text-gray-500 dark:text-gray-400">Escolha seu lanche e faça seu pedido sem pegar fila 😉</p>

      <!-- Grade responsiva: 1 coluna no celular, 2 no tablet, 3 no notebook, 4 em telas grandes -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <!-- Card 1 -->
      <CardLanche></CardLanche>    
      
      </div>
    </main>

    <footer class="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      Cantina da Escola — Programação Web II · Professores: André Lima e Marcos Pagagnotti
    </footer>
  </div>
</template>
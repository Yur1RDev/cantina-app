<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import CardLanche from './components/CardLanche.vue';



</script>

<template>
  <div class="min-h-screen bg-gray-100 transition-colors dark:bg-gray-900">
    <!-- Barra de navegação -->
    <NavBar :total-itens="totalItens"></NavBar>

    <main class="mx-auto max-w-6xl px-4 py-6">
      <RouterView />
    </main>

    <footer class="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      Cantina da Escola — Programação Web II · Professores: André Lima e Marcos Pagagnotti
    </footer>
  </div>
</template>

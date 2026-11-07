<script setup>
import { ref } from 'vue';
import NavBar from './components/NavBar.vue';
import CardLanche from './components/CardLanche.vue';

const lanches = ref([
  { id: '1', nome: 'X-Salada', descricao: 'Pão, hambúrguer, queijo, alface e tomate', preco: 12.0, emoji: '🍔', categoria: 'Salgados', disponivel: true },
  { id: '2', nome: 'Coxinha', descricao: 'Coxinha de frango crocante', preco: 6.5, emoji: '🍗', categoria: 'Salgados', disponivel: true },
  { id: '3', nome: 'Pastel de Queijo', descricao: 'Pastel frito na hora', preco: 7.0, emoji: '🥟', categoria: 'Salgados', disponivel: true },
  { id: '4', nome: 'Pão de Queijo', descricao: 'Quentinho e macio', preco: 4.0, emoji: '🧀', categoria: 'Salgados', disponivel: false },
  { id: '5', nome: 'Suco de Laranja', descricao: 'Natural, feito na hora', preco: 6.0, emoji: '🍊', categoria: 'Bebidas', disponivel: true },
  { id: '6', nome: 'Refrigerante Lata', descricao: 'Diversos sabores', preco: 5.5, emoji: '🥤', categoria: 'Bebidas', disponivel: true },
  { id: '7', nome: 'Bolo de Chocolate', descricao: 'Fatia generosa com cobertura', preco: 7.5, emoji: '🍰', categoria: 'Doces', disponivel: true },
  { id: '8', nome: 'Sorvete', descricao: 'Casquinha com 2 bolas', preco: 8.5, emoji: '🍦', categoria: 'Doces', disponivel: false },
])

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
      <CardLanche
          v-for="lanche in lanches" 
          :key="lanche.id"
          :lanche="lanche"
          @adicionar="totalItens++"
          ></CardLanche>    
      
      </div>
    </main>

    <footer class="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      Cantina da Escola — Programação Web II · Professores: André Lima e Marcos Pagagnotti
    </footer>
  </div>
</template>
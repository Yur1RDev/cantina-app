<script setup></script>

<template>
  <div class="min-h-screen bg-gray-100 transition-colors dark:bg-gray-900">
    <!-- Barra de navegação -->
    <header class="sticky top-0 z-10 bg-escola-600 text-white shadow-md">
      <nav class="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <a href="#" class="flex items-center gap-2 text-xl font-bold">
          <span>🍔</span> Cantina da Escola
        </a>

        <div class="flex items-center gap-2 sm:gap-4">
          <a href="#" class="rounded-lg bg-escola-700 px-3 py-2 font-semibold">Cardápio</a>
          <a href="#" class="rounded-lg px-3 py-2 transition-colors hover:bg-escola-700">Meus Pedidos</a>
          <a href="#" class="rounded-lg px-3 py-2 transition-colors hover:bg-escola-700">🛒 Carrinho</a>
          <button
            class="rounded-lg px-2 py-2 transition-colors hover:bg-escola-700"
            title="Modo escuro"
          >
            ☀️
          </button>
        </div>
      </nav>
    </header>

    <main class="mx-auto max-w-6xl px-4 py-6">
      <h1 class="mb-1 text-3xl font-bold text-gray-800 dark:text-gray-100">Cardápio</h1>
      <p class="mb-6 text-gray-500 dark:text-gray-400">Escolha seu lanche e faça seu pedido sem pegar fila 😉</p>

      <!-- Grade responsiva: 1 coluna no celular, 2 no tablet, 3 no notebook, 4 em telas grandes -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <!-- Card 1 -->
        <article class="flex flex-col rounded-2xl bg-white p-5 shadow-xs transition-shadow hover:shadow-lg dark:bg-gray-800">
          <div class="flex-1">
            <div class="mb-3 flex h-24 items-center justify-center text-6xl">🍔</div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">X-Salada</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Pão, hambúrguer, queijo, alface e tomate</p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-lg font-bold text-escola-600 dark:text-escola-400">R$ 12,00</span>
            <button class="rounded-lg bg-escola-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-escola-700 active:scale-95">
              Adicionar
            </button>
          </div>
        </article>

        <!-- Card 2 -->
        <article class="flex flex-col rounded-2xl bg-white p-5 shadow-xs transition-shadow hover:shadow-lg dark:bg-gray-800">
          <div class="flex-1">
            <div class="mb-3 flex h-24 items-center justify-center text-6xl">🍗</div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">Coxinha</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Coxinha de frango crocante</p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-lg font-bold text-escola-600 dark:text-escola-400">R$ 6,50</span>
            <button class="rounded-lg bg-escola-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-escola-700 active:scale-95">
              Adicionar
            </button>
          </div>
        </article>

        <!-- Card 3 (esgotado) -->
        <article class="flex flex-col rounded-2xl bg-white p-5 opacity-60 shadow-xs dark:bg-gray-800">
          <div class="flex-1">
            <div class="mb-3 flex h-24 items-center justify-center text-6xl">🧀</div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">Pão de Queijo</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Quentinho e macio</p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-lg font-bold text-escola-600 dark:text-escola-400">R$ 4,00</span>
            <span class="rounded-lg bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
              Esgotado
            </span>
          </div>
        </article>

        <!-- Card 4 -->
        <article class="flex flex-col rounded-2xl bg-white p-5 shadow-xs transition-shadow hover:shadow-lg dark:bg-gray-800">
          <div class="flex-1">
            <div class="mb-3 flex h-24 items-center justify-center text-6xl">🍊</div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">Suco de Laranja</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">Natural, feito na hora</p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-lg font-bold text-escola-600 dark:text-escola-400">R$ 6,00</span>
            <button class="rounded-lg bg-escola-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-escola-700 active:scale-95">
              Adicionar
            </button>
          </div>
        </article>
      </div>
    </main>

    <footer class="py-6 text-center text-sm text-gray-500 dark:text-gray-400">
      Cantina da Escola — Programação Web II · Professores: André Lima e Marcos Pagagnotti
    </footer>
  </div>
</template>
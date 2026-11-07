<script setup>
defineProps({
  lanche: { type: Object, required: true},
})

defineEmits(['adicionar'])
</script>

<template>
    <div>
          <article class="flex flex-col rounded-2xl bg-white p-5 shadow-xs transition-shadow hover:shadow-lg dark:bg-gray-800">
          <div class="flex-1">
            <div class="mb-3 flex h-24 items-center justify-center text-6xl">{{ lanche.emoji }}</div>
            <h3 class="text-lg font-bold text-gray-800 dark:text-gray-100">{{ lanche.nome }}</h3>
            <p class="mt-1 text-sm text-gray-500 dark:text-gray-400">{{ lanche.descricao }}</p>
          </div>
          <div class="mt-4 flex items-center justify-between">
            <span class="text-lg font-bold text-escola-600 dark:text-escola-400">R$ {{ lanche.preco.toFixed(2).replace('.', ',') }}</span>
            
            <button @click="$emit('adicionar', lanche)" v-if="lanche.disponivel" class="rounded-lg bg-escola-600 px-4 py-2 text-sm font-semibold text-white transition-colors hover:bg-escola-700 active:scale-95">
              Adicionar
            </button>
            <span 
            v-else
            class="rounded-lg bg-gray-200 px-3 py-2 text-sm font-semibold text-gray-500 dark:bg-gray-700 dark:text-gray-400">
              Esgotado
            </span>            
          </div>
        </article> 
    </div>
</template>


<style lang="scss" scoped>

</style>
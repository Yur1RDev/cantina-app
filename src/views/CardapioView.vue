<script setup>
    import CardLanche from '@/components/CardLanche.vue'
    import { lanches } from '@/data/lanches'
    import { ref } from 'vue'

        const avisoAdicionado = ref('')
        let timer = null

        function adicionarAoCarrinho(lanche) {        
        avisoAdicionado.value = 
            `${lanche.nome} adicionado ao carrinho!`
        clearTimeout(timer)
        timer = setTimeout(() => (avisoAdicionado.value = ''), 
            2000)
        }

</script>

<template>
    <div class="min-h-screen bg-gray-100 transition-colors dark:bg-gray-900">
      <h1 class="mb-1 text-3xl font-bold text-gray-800 dark:text-gray-100">Cardápio</h1>
      <p class="mb-6 text-gray-500 dark:text-gray-400">Escolha seu lanche e faça seu pedido sem pegar fila 😉</p>

      <p
        v-if="avisoAdicionado"
        class="mb-4 rounded-xl bg-green-100 px-4 py-3 font-semibold text-green-800 dark:bg-green-900 dark:text-green-200">
            ✅ {{ avisoAdicionado }}
        </p>

      <!-- Grade responsiva: 1 coluna no celular, 2 no tablet, 3 no notebook, 4 em telas grandes -->
      <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        <CardLanche
          v-for="lanche in lanches"
          :key="lanche.id"
          :lanche="lanche"
          @adicionar="adicionarAoCarrinho"
        ></CardLanche>
      </div>
    </div>
</template>
    
<style lang="scss" scoped>

</style>
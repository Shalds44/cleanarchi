<script setup lang="ts">
import { ref } from 'vue'
import FoodFilter from './filter/FoodFilter.vue'
import { FoodFilterI } from '@/domain/entities'

let listFoodFilter = ref<Array<FoodFilterI>>([])

const food = {
  id: 254,
  name: 'Tomate',
  logo: 'Tomate'
}
for (let i = 0; i <= 20; i++) {
  listFoodFilter.value.push(food)
}
</script>
<template>
  <div>
    <div v-for="foodFilter in listFoodFilter" :key="foodFilter.id">
      <FoodFilter :foodFilter="foodFilter"></FoodFilter>
    </div>
  </div>
</template>

<style scoped></style>

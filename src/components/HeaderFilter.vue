<script setup lang="ts">
import { ref } from 'vue'
import FoodFilter from './filter/FoodFilter.vue'
interface FoodFilter {
  id: number
  name: string
  logo: string
}
let listFoodFilter = ref<Array<FoodFilter>>([])

const food = {
  id: 254,
  name: 'Tomate',
  logo: 'Tomate'
}
for (let i = 0; i <= 20; i++) {
  listFoodFilter.value.push(food)
}
const isActive = ref(false)
</script>
<template>
  <div>
    <div v-for="foodFilter in listFoodFilter">
      <FoodFilter :foodFilter="foodFilter"></FoodFilter>
    </div>
  </div>
</template>

<style scoped></style>

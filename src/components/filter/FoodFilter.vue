<script setup lang="ts">
defineProps<{
  foodFilter: FoodFilter
}>()
</script>
<template>
  <div class="food-filter">
    <label for="Tomates">
      <input type="radio" />
      <div>
        <font-awesome-icon icon="hippo" />
        <span>{{ foodFilter.name }}</span>
      </div>
    </label>
  </div>
</template>

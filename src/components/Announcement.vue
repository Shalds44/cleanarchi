<script setup lang="ts">
import type { Announcement } from '@/domain/entities'
defineProps<{
  announcement: Announcement
}>()
</script>

<template>
  <v-card class="mx-auto" max-width="600">
    <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

    <v-card-title> {{ announcement.title }} </v-card-title>

    <v-card-subtitle> {{ announcement.city }} </v-card-subtitle>
    <v-card-text>
      {{ announcement.text }}
    </v-card-text>
    <v-card-actions>
      <v-btn>Voir plus</v-btn>
    </v-card-actions>
  </v-card>
</template>

<style scoped lang="scss"></style>

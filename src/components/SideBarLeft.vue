<script setup lang="ts">
import { ref } from 'vue'
import Post from './Post.vue'
const isActive = ref(false)
</script>
<template>
  <div>
    <v-card>
      <v-list lines="two">
        <Post />
        <v-list-item :title="'Profil'" rounded="shaped" color="primary"></v-list-item>
        <v-list-item :title="'Messages'" rounded="shaped" color="primary"></v-list-item>
        <v-list-item :title="'Notifications'" rounded="shaped" color="primary"></v-list-item>
      </v-list>
    </v-card>
  </div>
</template>
<style scoped></style>

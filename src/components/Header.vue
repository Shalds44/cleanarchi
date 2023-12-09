<template>
  <v-toolbar class="header">
    <v-container>
      <v-row justify="start">
        <v-col>
          <h1>Logo</h1>
        </v-col>
        <v-col>
          <RouterLink to="/">Accueil</RouterLink>
        </v-col>
        <v-col>
          <RouterLink to="/profil">Profil</RouterLink>
        </v-col>
        <v-col>
          <RouterLink to="/about">About</RouterLink>
        </v-col>
        <v-col>
          <RouterLink to="/decorator">Decorateur</RouterLink>
        </v-col>
      </v-row>
    </v-container>
  </v-toolbar>
</template>

<style scoped></style>
<script setup lang="ts">
</script>
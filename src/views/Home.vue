<script setup lang="ts">
import { ref, onMounted } from 'vue'
import axios from 'axios'
let response = ref(null)
let listProduct = ref([])

interface Product {
  id: number
  title: string
  subTitle: string
  text: string
}
for (let i = 0; i <= 20; i++) {
  const element = array[i]
}
// onMounted(async () => {
//   response = await axios.get('https://127.0.0.1:8000/api/post', {
//     headers: {
//       'Content-Type': 'application/json'
//     }
//   })

//   console.log(response)
// })
</script>
<template>
  <main>
    <h1>Liste Articles</h1>
    <v-card class="mx-auto" max-width="600">
      <v-img src="https://cdn.vuetifyjs.com/images/cards/sunshine.jpg" height="200px" cover></v-img>

      <v-card-title> Le château </v-card-title>

      <v-card-subtitle> Fantasy </v-card-subtitle>
      <v-card-text>
        I'm a thing. But, like most politicians, he promised more than he could deliver. You won't
        have time for sleeping, soldier, not with all the bed making you'll be doing. Then we'll go
        with that data file! Hey, you add a one ann'importe quoid two zeros to that or we walk!
        You're going to do his laundry? I've got to find a way to escape.
      </v-card-text>
      <v-card-actions>
        <v-btn>Voir plus</v-btn>
      </v-card-actions>
    </v-card>
  </main>
</template>

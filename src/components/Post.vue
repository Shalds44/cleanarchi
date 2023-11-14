<script setup lang="ts">
import { ref } from 'vue'

const dialog = ref(false)
</script>
<template>
  <v-dialog v-model="dialog" persistent width="1024">
    <template v-slot:activator="{ props }">
      <v-btn color="primary" v-bind="props"> Poster </v-btn>
    </template>
    <v-card>
      <v-card-title>
        <span class="text-h5">Votre Texte</span>
      </v-card-title>
      <v-card-text>
        <v-container>
          <v-row>
            <v-col cols="12" sm="6" md="4">
              <v-text-field label="Titre" required variant="solo"></v-text-field>
            </v-col>
            <v-col cols="12">
              <v-textarea label="Histoire" variant="solo"></v-textarea>
            </v-col>

            <v-col cols="12" sm="6">
              <v-autocomplete
                :items="['Policier', 'Historique', 'Fantasy', 'Jeunesse']"
                label="Catégories"
                variant="solo"
                multiple
              ></v-autocomplete>
            </v-col>
          </v-row>
        </v-container>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Fermer </v-btn>
        <v-btn color="blue-darken-1" variant="text" @click="dialog = false"> Poster </v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

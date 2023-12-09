<script lang="ts" setup>

import Colombia from "@/designpattern/decorator/Colombia.ts";
import Deca from "@/designpattern/decorator/Deca.ts";
import Espresso from "@/designpattern/decorator/Espresso.ts";
import Sumatra from "@/designpattern/decorator/Sumatra.ts";
import {ref} from "vue";
import {WithSugar} from "@/designpattern/decorator/WithSugar";


const deca = new Deca()
deca.setDescription("Café sans caféine")

const descriptionCafe = ref(deca.getDescription())
const prixCafe = ref(deca.cout())
const decaWithSugar = new WithSugar(deca)
const prixCafeWithSugar = decaWithSugar.cout()
console.log(decaWithSugar)
const decaWithSugarAndChantilly = new WithSugar(decaWithSugar)
const prixCafeWithSugarAndChantilly = decaWithSugarAndChantilly.cout()

</script>

<template>
  <main>
    <div class="main-content">
      <h1>Design Pattern Decorator</h1>
      <h1>Café</h1>
      <div>
        <p>Description d'un déca : {{descriptionCafe}}</p>
        <p>Prix du café: {{prixCafe}}</p>
        <p>Prix du café avec de la chantilly: {{prixCafeWithSugar}}</p>
        <p>Prix du café avec de la chantilly et du sucre: {{prixCafeWithSugarAndChantilly}}</p>
      </div>

    </div>
  </main>
</template>

<style scoped>

</style>

<template>
  <div class="bg-gray-50 flex full-width">
    <div class="text-green-500 w-1/2">
      <Card v-for="perk in green" :text="perk"/>
    </div>
    <div  class="text-red-500 w-1/2">
      <Card v-for="negative in red" :text="negative"/>
    </div>
  </div>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="reroll">reroll</button>
</template>

<script setup>
import { ref } from "vue"
import { nRandomPerks, nRandomNegatives } from "../utils"
import Card from "../components/Card.vue"

const red = ref([])
const green = ref([])

const reroll = () => {
  green.value = nRandomPerks(2)
  red.value = nRandomNegatives(1)
}
reroll()
</script>

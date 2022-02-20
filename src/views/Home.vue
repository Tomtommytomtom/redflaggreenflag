
<template>
  <div class="bg-gray-50 flex w-1/2 m-auto">
    <PerksColumn class="w-1/2" :perks="green" />
    <div class="w-1/2">
      <PerksColumn style="visibility:hidden;" :perks="green" />
      <NegativeColumn  :negatives="red"/>
    </div>
  </div>
  <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" @click="reroll">reroll</button>
</template>

<script setup>
import { ref } from "vue"
import { nRandomPerks, nRandomNegatives } from "../utils"
import PerksColumn from "@/components/PerksColumn.vue"
import NegativeColumn from "@/components/NegativeColumn.vue"

const red = ref([])
const green = ref([])

const reroll = () => {
  green.value = nRandomPerks(3)
  red.value = nRandomNegatives(2)
}
reroll()
</script>

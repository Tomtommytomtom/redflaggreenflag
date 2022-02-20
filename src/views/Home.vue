
<template>
<div class="h-full p-2">
  <div id="outer-box" class="outer-box w-full p-2">
    <!-- <div class="ball"></div> -->
    <Header/>
    <div class="grow-bottom-container">
      <div class="flex inner-box">
        <PerksColumn class="w-1/2" :perks="green" />
        <div class="w-1/2">
          <PerksColumn style="visibility:hidden;" :perks="green" />
          <NegativeColumn  :negatives="red"/>
        </div>
      </div>
    </div>
    <Footer class="mt-16"/>
  </div>
  <!-- <button @click="playAnimation">play animation</button> -->
</div>
</template>
      <circle id="ball" cx="50" cy="50" r="5"/>
<script setup>
import { onMounted, ref } from "vue"
import { nRandomPerks, nRandomNegatives } from "../utils"
import PerksColumn from "@/components/PerksColumn.vue"
import NegativeColumn from "@/components/NegativeColumn.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { addBouncePathToDocument, playAll } from "@/path"

const red = ref([])
const green = ref([])

const reroll = () => {
  green.value = nRandomPerks(2)
  red.value = nRandomNegatives(1)
  red.value[0] = `The two halves of their
face don‘t match /
Both are attractive but
look totally different`
}
reroll()

onMounted(() => {
  addBouncePathToDocument()
  playAll()
})
</script>

<style>
.dot{
  position: absolute;
  height: 10px;
  width: 10px;
  color: red;
  background-color:red;
}

.outer-box{
  border: 2px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
}

.grow-bottom-container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}

/* .ball{
  width: 10px;
  height: 10px;
  background-color: black;
  border-radius: 999px;
  position: absolute;
  x-offset: -10px;
  y-offset: -10px;
} */


</style>

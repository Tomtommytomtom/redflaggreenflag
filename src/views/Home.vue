
<template>
<div class="p-2">
  <svg id="svg-overlay" class="svg-overlay absolute">
    <!-- <circle id="ball" cx="50" cy="50" r="5" class="ball"/> -->
  </svg>
  <div id="outer-box" class="outer-box h-full w-full p-2 relative">
    
    <Header/>
    <div class="grow-bottom-container">
      <div class="flex inner-box">
        <PerksColumn class="w-1/2" :perks="positives" :visible="visiblePositives" />
        <div class="w-1/2">
          <PerksColumn style="visibility:hidden;" :visible="visiblePositives" :perks="positives" />
          <NegativeColumn  :negatives="negatives" :visible="visibleNegatives"/>
        </div>
      </div>
    </div>
    <Footer class="mt-16"/>
  </div>
</div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { nRandomPerks, nRandomNegatives } from "../utils"
import PerksColumn from "@/components/PerksColumn.vue"
import NegativeColumn from "@/components/NegativeColumn.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"
import { addBouncePathToDocument, playAll, stopAnimations, resetAnimations } from "@/path"

const positives = ref([])
const negatives = ref([])


const positiveCount = ref(2)
const negativeCount = ref(1)


const visiblePositives = ref([])
const visibleNegatives = ref([])

const reroll = () => {
  positives.value = nRandomPerks(positiveCount.value)
  negatives.value = nRandomNegatives(negativeCount.value)
  visiblePositives.value = Array(positiveCount.value).fill(false)
  visibleNegatives.value = Array(negativeCount.value).fill(false)
}
reroll()

const secondBounce = () => {
  visibleNegatives.value = visibleNegatives.value.map(() => true)
}

const firstBounce = () => {
  visiblePositives.value = visiblePositives.value.map(() => true)
}


const play = () => {
  stopAnimations()
  resetAnimations()
  playAll(firstBounce,secondBounce,undefined)
}

window.addEventListener("click",play)
window.addEventListener("touchstart",play)

onMounted(() => {
  addBouncePathToDocument()
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
  /* hack */
  min-height: calc(100vh - 1rem);
  border: 2px solid black;
  display: flex;
  flex-direction: column;
}

.grow-bottom-container{
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}

.svg-overlay{
  position: absolute;
  height: 100%;
  width: calc(100% - 20px);
}

</style>

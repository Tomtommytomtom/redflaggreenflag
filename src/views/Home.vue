
<template>
<div class="h-full p-2">
  <div id="outer-box" class="outer-box w-full p-2">
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
import { addBouncePathToDocument, playFirstAnimation, playSecondAnimation, playThirdAnimation } from "@/path"

const negatives = ref([])
const positives = ref([])

const negativeCount = ref(1)
const positiveCount = ref(2)

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
  playThirdAnimation()
}

const firstBounce = () => {
  visiblePositives.value = visiblePositives.value.map(() => true)
  playSecondAnimation(secondBounce)
}

const play = () => {
  playFirstAnimation(firstBounce)
}

window.addEventListener("click",play)

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

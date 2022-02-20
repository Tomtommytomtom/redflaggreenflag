
<template>
<div class="h-full p-2">
  <div id="outer-box" class="outer-box w-full p-2">
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

</div>
</template>

<script setup>
import { onMounted, ref } from "vue"
import { nRandomPerks, nRandomNegatives } from "../utils"
import PerksColumn from "@/components/PerksColumn.vue"
import NegativeColumn from "@/components/NegativeColumn.vue"
import Header from "@/components/Header.vue"
import Footer from "@/components/Footer.vue"

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
  const outerBox = document.getElementById("outer-box").getBoundingClientRect()
  const firstPerkBox = document.getElementById("0-perk").getBoundingClientRect()
  const firstNegativeBox = document.getElementById("0-negative").getBoundingClientRect()


  console.log(firstPerkBox);
  console.log(firstNegativeBox);

  //TODO: change constants with relative values to screen size
  const firstBouncingPoint = {
    x: Math.round(firstPerkBox.right - 50),
    y: Math.round(firstPerkBox.top)
  }

  const secondBouncingPoint = {
    x: Math.round(firstNegativeBox.right - 80),
    y: Math.round(firstNegativeBox.top)
  }
  
  const startingPoint = {
    x: Math.round(outerBox.left),
    y: Math.round(firstBouncingPoint.y - 120)
  }
  
  const endingPoint = {
    x: Math.round(outerBox.right),
    y: Math.round(secondBouncingPoint.y - 80)
  }

  console.log(firstBouncingPoint);
  console.log(secondBouncingPoint);

  const svg = document.getElementById("svg-overlay")
  
  const firstPath = document.createElementNS('http://www.w3.org/2000/svg',"path")
  firstPath.setAttributeNS(null,"d",`M ${startingPoint.x} ${startingPoint.y} Q ${startingPoint.x + 100} ${startingPoint.y} ${firstBouncingPoint.x} ${firstBouncingPoint.y}`)
  firstPath.setAttributeNS(null,"style","fill:none;stroke:#000000;stroke-width:1px;stroke-dasharray:4")
  svg.appendChild(firstPath)
  
  const secondPath = document.createElementNS('http://www.w3.org/2000/svg',"path")
  secondPath.setAttributeNS(null,"d",`M ${firstBouncingPoint.x} ${firstBouncingPoint.y} Q ${firstBouncingPoint.x + 100} ${firstBouncingPoint.y - 200} ${secondBouncingPoint.x} ${secondBouncingPoint.y}`)
  secondPath.setAttributeNS(null,"style","fill:none;stroke:#000000;stroke-width:1px;stroke-dasharray:4")
  svg.appendChild(secondPath)

  const finalPath = document.createElementNS('http://www.w3.org/2000/svg',"path")
  finalPath.setAttributeNS(null,"d",`M ${secondBouncingPoint.x} ${secondBouncingPoint.y} Q ${secondBouncingPoint.x + 40} ${secondBouncingPoint.y - 100} ${endingPoint.x} ${endingPoint.y}`)
  finalPath.setAttributeNS(null,"style","fill:none;stroke:#000000;stroke-width:1px;stroke-dasharray:4")
  svg.appendChild(finalPath)

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


</style>

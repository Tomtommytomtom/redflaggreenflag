<template>
  <div class="footer italic flex items-end justify-between">
   <FlagSVGVue style="margin-bottom: -.75em; margin-left: 1.5em"/>
   <MenuSVG style="width: 2em" v-if="isGame" @click="changeToMenu" />
   <button v-else @click="changeToGame">Back</button>
  </div>
</template>

<script setup>
import { changeToMenu, changeToGame, isGame } from "@/state";
import { onMounted } from "vue"
import FlagSVGVue from './FlagSVG.vue';
import MenuSVG from './MenuSVG.vue'

onMounted(() => {
  const svg = document.getElementById("flag")
});


</script>

<style lang="scss">
.footer { 
  font-size: 1rem;
  line-height: 1rem;
  width: 100%;
}
</style>
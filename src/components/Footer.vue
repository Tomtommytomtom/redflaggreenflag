<template>
  <div class="footer flex items-end justify-between italic">
    <FlagSVGVue style="margin-bottom: -0.75em; margin-left: 1.5em" />
    <MenuSVG style="width: 2em" v-if="isGame" @click="changeToMenu" />
    <button v-else @click="changeToGame">Back</button>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { changeToMenu, changeToGame, isGame } from "@/state";
import FlagSVGVue from "./FlagSVG.vue";
import MenuSVG from "./MenuSVG.vue";

onMounted(() => {
  const svg = document.getElementById("flag");
});
</script>

<style lang="scss">
.footer {
  font-size: 1rem;
  line-height: 1rem;
  width: 100%;
}
</style>

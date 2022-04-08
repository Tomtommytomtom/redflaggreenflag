<template>
  <div class="footer flex items-end justify-between italic">
    <FlagSVGVue style="margin-bottom: -0.75em; margin-left: 1.5em" />
    <RouterLink v-if="isGame" to="/menu">
      <MenuSVG style="width: 2em"/>
    </RouterLink>
    <RouterLink v-else to="/">
      <button>Back</button>
    </RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from "vue-router";
import { isGame } from "@/state";
import FlagSVGVue from "./FlagSVG.vue";
import MenuSVG from "./MenuSVG.vue";
</script>

<style lang="scss">
.footer {
  font-size: 1rem;
  line-height: 1rem;
  width: 100%;
}
</style>

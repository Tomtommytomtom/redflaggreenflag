<template>
  <div class="footer flex items-end justify-between italic">
    <FlagSVGVue style="margin-bottom: -0.75em; margin-left: 1.5em" />
    <RouterLink v-if="!isMenu" to="/menu">
      <MenuSVG style="width: 2em" />
    </RouterLink>
    <RouterLink v-else to="/">
      <button><ChevronLeftIcon class="h-10" /></button>
    </RouterLink>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import FlagSVGVue from "./FlagSVG.vue";
import MenuSVG from "./MenuSVG.vue";

const route = useRoute();

console.log(route.path);

const isMenu = computed(() => route.path.includes("/menu"));
</script>

<style lang="scss">
.footer {
  font-size: 1rem;
  line-height: 1rem;
  width: 100%;
}
</style>

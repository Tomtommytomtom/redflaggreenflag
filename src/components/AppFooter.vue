<template>
  <div class="footer flex items-end justify-between italic">
    <FlagSVGVue style="margin-bottom: -0.75em; margin-left: 1.5em" />
    <RouterLink v-if="isRoot" to="/menu">
      <MenuSVG style="width: 2em" />
    </RouterLink>
    <button v-else @click="goBack"><ChevronLeftIcon class="h-10" /></button>
  </div>
</template>

<script setup>
import { computed } from "vue";
import { RouterLink, useRoute } from "vue-router";
import { ChevronLeftIcon } from "@heroicons/vue/outline";
import FlagSVGVue from "./FlagSVG.vue";
import MenuSVG from "./MenuSVG.vue";
import { useRouter } from "vue-router"

const router = useRouter()

const goBack = () => router.go(-1)

const route = useRoute();



const isRoot = computed(() => route.path === "/");
</script>

<style lang="scss">
.footer {
  font-size: 1rem;
  line-height: 1rem;
  width: 100%;
}
</style>

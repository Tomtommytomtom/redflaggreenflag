<template>
  <div class="footer italic flex items-end">
   <FlagSVGVue style="margin-bottom: -.75em; margin-left: 1.5em"/>
  </div>
</template>

<script setup>
import { onMounted } from "vue"
import FlagSVGVue from './FlagSVG.vue';

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
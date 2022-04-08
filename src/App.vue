<template>
  <div class="cont h-full p-2">
    <svg id="svg-overlay" class="svg-overlay absolute"></svg>
    <div id="outer-box" class="outer-box relative h-full w-full p-2">
      <Header />
      <div class="grow-bottom-container">
        <router-view></router-view>
      </div>
      <Footer class="mt-16" />
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { placeFlag } from "@/path";

import Header from "@/components/AppHeader.vue";
import Footer from "@/components/AppFooter.vue";

onMounted(() => {
  placeFlag();
});
</script>

<style>
.dot {
  position: absolute;
  height: 10px;
  width: 10px;
  color: red;
  background-color: red;
}

.outer-box {
  /* hack */
  min-height: calc(100vh - 1rem);
  border: 2px solid black;
  display: flex;
  flex-direction: column;
}

.grow-bottom-container {
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: flex-end;
}

.svg-overlay {
  position: absolute;
  height: 100%;
  width: calc(100% - 1rem);
  max-width: calc(500px - 1rem);
}

.black-box {
  background-color: black;
  color: white;
  padding: 2em 1em;
  font-size: 12px;
  height: calc(1.2em * 6 + 3em);
}

.cont {
  max-width: 500px;
  margin: 0 auto;
}
</style>


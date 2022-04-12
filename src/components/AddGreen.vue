<template>
<div class="grid grid-cols-2 gap-2">
  <CardInput/>
  <div class="grid grid-cols-2 gap-2">
    <CardButton @click="clickAdd">
      <CheckIcon class="w-6"/>
    </CardButton>
  </div>
</div>
</template>

<script lang="ts" setup>
import { CheckIcon } from "@heroicons/vue/outline";
import CardInput from './CardInput.vue';
import CardButton from "./CardButton.vue";

const clickAdd = () => {
  console.log('clicked add')
}
</script>

<style lang="scss">

</style>
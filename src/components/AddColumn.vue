<template>
  <div class="grid grid-cols-2 gap-2">
    <Card>
      <slot/>
    </Card>
    <div class="grid grid-cols-2 gap-2">
      <div></div>
      <CardButton isBlack @click="clickRemove">
        <XIcon class="w-6" />
      </CardButton>
    </div>
  </div>
</template>s

<script lang="ts" setup>
import { XIcon } from "@heroicons/vue/outline";
import CardButton from "./CardButton.vue"
import Card from "./Card.vue"

const clickRemove = () => {
  console.log("clicked remove")
}
</script>

<style lang="scss">
</style>
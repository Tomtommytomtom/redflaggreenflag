<template>
  <div>
    <span class="italic">(BUT)</span>
    <div v-for="(perk,index) in negatives" >
      <Card :text="perk" :id="`${index}-negative`"/>
      <span class="italic" v-if="index !== negatives.length - 1">AND</span>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue"

const props = defineProps({
  negatives: Array
})
</script>

<style>

</style>

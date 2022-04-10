<template>
  <div>
    <span class="italic">(BUT)</span>
    <div v-for="(perk, index) in negatives" :key="index">
      <Card
        class="black-box"
        :text="perk"
        :class="{ 'last-negative': index === negatives.length - 1 }"
        :id="`${index}-negative`"
        :visible="props.visible[index]"
      />
      <span class="italic" v-if="index !== negatives.length - 1">AND</span>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";

const props = defineProps({
  negatives: Array,
  visible: Array,
});
</script>

<style></style>

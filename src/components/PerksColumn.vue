<template>
  <div>
    <span class="italic">YOUR DATE</span>
    <div v-for="(perk, index) in perks" :key="index">
      <Card :id="`${index}-perk`">
        {{ props.visible[index] ? perk : "" }}
      </Card>
      <span class="italic" v-if="index !== perks.length - 1">AND</span>
    </div>
  </div>
</template>

<script setup>
import Card from "./Card.vue";

const props = defineProps({
  perks: Array,
  visible: Array,
});
</script>

<style></style>

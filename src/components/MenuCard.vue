<template>
  <Card
    class="custom-height custom-height flex items-center justify-center p-0 px-2 text-lg not-italic"
  >
    <slot></slot>
  </Card>
</template>

<script setup>
import Card from "./Card.vue";
</script>

<style scoped>
.custom-height {
  height: 16vh;
}
</style>

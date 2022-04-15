<template>
  <Card class="p-0">
    <button
      @click="emit('click')"
      class="no-styles-button flex w-full items-center justify-center"
    >
      <slot />
    </button>
  </Card>
</template>

<script setup>
import Card from "./Card.vue";

const emit = defineEmits(["click"]);
</script>

<style lang="scss"></style>

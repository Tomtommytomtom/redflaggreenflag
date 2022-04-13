<template>
  <Card class="p-0">
    <button @click="emit('click')" class="no-styles-button flex justify-center items-center w-full">
      <slot/>
    </button>
  </Card>
</template>

<script  setup>
import Card from "./Card.vue"

const emit = defineEmits(["click"])
</script>

<style lang="scss">

</style>
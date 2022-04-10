<template>
  <div
    class="box flex w-full items-center italic"
    :class="{ 'black-box': isBlack }"
  >
    <slot />
  </div>
</template>

<script setup>
defineProps({
  isBlack: {
    type: Boolean,
    default: false,
  },
});
</script>

<style>
.black-box {
  background-color: black;
  color: white;
}
</style>

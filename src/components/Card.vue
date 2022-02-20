<template>
  <div class="box">
    {{props.text}}
  </div>
</template>

<script setup>
const props = defineProps({
  text: String
})
</script>

<style>
.box {
  border: 1px solid black;
  padding: 1em .5em;
  font-size: 24px;
}
</style>

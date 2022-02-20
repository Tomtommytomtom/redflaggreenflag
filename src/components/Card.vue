<template>
  <div class="box italic">
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
  padding: 2em 1em;
  font-size: 12px;
  height: calc(1.2em * 6 + 3em);
}
</style>

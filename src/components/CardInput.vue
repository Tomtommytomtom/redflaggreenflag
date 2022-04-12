<template>
  <Card ref="card" id="textarea-container-card">
    <textarea
      rows="1"
      ref="input"
      id="text-area-add-green"
      v-model="text"
      placeholder="Your Text Goes Here"
      class="text-input"
      cols="10"
      wrap="hard"
      @input="resizeInput"
    />
  </Card>
</template>

<script lang="ts" setup>
import { onMounted, ref } from "vue";
import Card from "./Card.vue"

const text = ref("")
const input = ref()
const maxWidth = ref()

const measureMaxWidth = () => {
  const card = document.getElementById("textarea-container-card")
  const rect = card.getBoundingClientRect()
  const padding = parseFloat(window.getComputedStyle(card, null).getPropertyValue('padding-left')) * 2
  maxWidth.value = rect.width - padding
}

const testTextWidth = (text) => {
  var c = document.createElement("canvas");
  var ctx = c.getContext("2d");
  ctx.font = "12px Inter var";
  return Math.ceil(ctx.measureText(text).width)
}

onMounted(() => {
  measureMaxWidth()
})

const resizeInput = () => {
  const textWidth = testTextWidth(input.value.value)
  let rows = Math.floor(textWidth / maxWidth.value) + 1
  if(rows >= 3){
    rows = 3
  }
  input.value.rows = rows
}

</script>

<style scoped lang="scss">
.text-input {
  outline: none;
  resize: none;
  border: none;
  box-shadow: none;
  width: 100%;
  font-style: inherit;
  font-size: inherit;
  text-align: center;
  padding: 0;
  height: fit-content;
  vertical-align: middle;
  overflow-y: hidden;
  background-color: inherit;
  color: inherit;  
}
</style>
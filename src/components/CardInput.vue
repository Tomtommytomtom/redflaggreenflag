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

<script  setup>
import { computed, onMounted, ref } from "vue";
import Card from "./Card.vue"

const input = ref()
const maxWidth = ref()

const props = defineProps({
  modelValue: String
})

const emit = defineEmits(["update:modelValue"])

const text = computed({
  get: () => props.modelValue,
  set: (newValue) => emit("update:modelValue",newValue)
})

const measureMaxWidth = () => {
  const card = document.getElementById("textarea-container-card")
  const rect = card.getBoundingClientRect()
  const padding = parseFloat(window.getComputedStyle(card, null).getPropertyValue('padding-left')) * 2
  maxWidth.value = rect.width - padding
}

const testTextWidth = (textToTest) => {
  const c = document.createElement("canvas");
  const ctx = c.getContext("2d");
  ctx.font = "12px Inter var";
  
  
  return Math.ceil(ctx.measureText(textToTest).width)
}

onMounted(() => {
  measureMaxWidth()
})

const resizeInput = () => {
  const textWidth = testTextWidth(input.value.value)
  let rows = Math.floor(textWidth / (maxWidth.value + 10)) + 1
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
  overflow-x: hidden;
  background-color: inherit;
  color: inherit;  
}
</style>
<template>
<div class="grid grid-cols-2 gap-2">
  <CardInput v-model="input" :isBlack="isBlack"/>
  <div class="grid grid-cols-2 gap-2">
    <CardButton @click="add">
      <CheckIcon class="w-6"/>
    </CardButton>
  </div>
</div>
</template>

<script  setup>
import { CheckIcon } from "@heroicons/vue/outline";
import { ref } from "vue";
import CardInput from './CardInput.vue';
import CardButton from "./CardButton.vue";

const emit = defineEmits(['add'])

defineProps({
  isBlack: {
    type: Boolean,
    default: false
  }
})

const input = ref("")

const add = () => {
  
  
  emit('add',input.value)
}
</script>

<style lang="scss">

</style>
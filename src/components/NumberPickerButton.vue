<template>
  <Card class="flex h-full flex-col justify-items-stretch p-0">
    <button class="no-styles-button basis-1/4" @click="value++">
      <ChevronUpIcon class="m-auto h-6" />
    </button>
    <div class="flex basis-2/4 items-center text-lg not-italic">
      <slot v-bind="{ value }">
        {{ value }}
      </slot>
    </div>
    <button
      :disabled="value === 1"
      class="no-styles-button basis-1/4"
      @click="value--"
    >
      <ChevronDownIcon class="m-auto h-6" />
    </button>
  </Card>
</template>

<script setup>
import { ChevronUpIcon, ChevronDownIcon } from "@heroicons/vue/outline";
import { computed } from "vue";
import Card from "./Card.vue";

const props = defineProps({
  modelValue: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(["update:modelValue"]);

const value = computed({
  get: () => props.modelValue,
  set: (val) => emit("update:modelValue", val),
});
</script>

<style lang="scss" scoped>
button:disabled {
  opacity: 0.2;
}
</style>

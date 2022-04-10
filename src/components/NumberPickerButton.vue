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
    <button class="no-styles-button basis-1/4" @click="value--">
      <ChevronDownIcon class="m-auto h-6" />
    </button>
  </Card>
</template>

<script lang="ts" setup>
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
.no-styles-button {
  background-color: inherit;
  width: 100%;
  height: 100%;
}
</style>

<template>
  <div class="grid grid-cols-2 gap-2">
    <Card :isBlack="isBlack">
      <slot />
    </Card>
    <div class="grid grid-cols-2 gap-2">
      <div></div>
      <CardButton isBlack @click="clickRemove">
        <XIcon class="w-6" />
      </CardButton>
    </div>
  </div>
</template>

<script setup>
import { XIcon } from "@heroicons/vue/outline";
import CardButton from "./CardButton.vue";
import Card from "./Card.vue";

defineProps({
  isBlack: {
    type: Boolean,
    default: false,
  },
});

const emit = defineEmits(["click:remove"]);

const clickRemove = () => {
  emit("click:remove");
};
</script>

<style lang="scss"></style>

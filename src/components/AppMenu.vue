<template>
  <div class="grid grid-cols-2 gap-2 relative">
    <div class="absolute under-construction flex items-center justify-center text-4xl">
      COMING SOON
    </div>
    <MenuCard>Change Amounts</MenuCard>
    <div class="grid grid-cols-2 gap-1">
      <NumberPickerButton v-model="positiveCount" />
      <NumberPickerButton v-model="negativeCount" isBlack>
        <template #default="{ value }"> ({{ value }}) </template>
      </NumberPickerButton>
    </div>
    <MenuCard>Add Cards</MenuCard>
    <div class="grid grid-cols-2 gap-1">
      <MenuCard>Green</MenuCard>
      <MenuCard isBlack>(Red)</MenuCard>
    </div>
    <div>
      <!-- Empty -->
    </div>
    <MenuCard isBlack>History</MenuCard>
  </div>
</template>

<script setup>
import { positiveCount, negativeCount } from "@/state";
import MenuCard from "./MenuCard.vue";
import NumberPickerButton from "./NumberPickerButton.vue";
</script>

<style></style>

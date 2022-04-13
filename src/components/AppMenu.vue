<template>
<BaseContainer class="justify-center">
  <div class="grid grid-cols-2 gap-2 relative">
    <!-- <div class="absolute under-construction flex items-center justify-center text-4xl">
      COMING SOON
    </div> -->
    <MenuCard>Change Amounts</MenuCard>
    <div class="grid grid-cols-2 gap-1">
      <NumberPickerButton v-model="positiveCount" />
      <NumberPickerButton v-model="negativeCount" isBlack>
        <template #default="{ value }"> ({{ value }}) </template>
      </NumberPickerButton>
    </div>
    <MenuCard>Add Cards</MenuCard>
    <div class="grid grid-cols-2 gap-1">
      <RouterLink to="/add/green">
        <MenuCard>Green</MenuCard>
      </RouterLink>
      <RouterLink to="/add/red">
        <MenuCard isBlack>(Red)</MenuCard>
      </RouterLink>
    </div>
    <div>
      <!-- Empty -->
    </div>
    <RouterLink to="/history">
      <MenuCard isBlack>History</MenuCard>
    </RouterLink>
  </div>
</BaseContainer>
</template>

<script setup>
import { positiveCount, negativeCount } from "@/state";
import { RouterLink } from "vue-router"
import MenuCard from "./MenuCard.vue";
import NumberPickerButton from "./NumberPickerButton.vue";
import BaseContainer from "./BaseContainer.vue";
</script>

<style></style>

<template>
<BaseContainer class="mt-12">
  <div class="grid grid-cols-1 gap-4">
    <AddInputColumn  @add="addHandler" isBlack/>
    <AddColumn isBlack v-for="red in negativesFromLocalStorageRef" @click:remove="() => removeHandler(red)">{{red}}</AddColumn>
  </div>
</BaseContainer>
</template>

<script lang="ts" setup>
import { negativesFromLocalStorageRef, addCustomNegative, removeNegative } from '@/utils';
import AddInputColumn from './AddInputColumn.vue';
import AddColumn from './AddColumn.vue';
import BaseContainer from './BaseContainer.vue';


const addHandler = (text) => {
  console.log("adding negative");
  
  addCustomNegative(text)
}

const removeHandler = (text) => {
  console.log("removing", text);
  removeNegative(text)
}
</script>

<style lang="scss">

</style>
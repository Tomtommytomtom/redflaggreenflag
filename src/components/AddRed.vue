<template>
<BaseContainer class="mt-12">
  <div class="grid grid-cols-1 gap-4">
    <AddInputColumn  @add="addHandler" isBlack/>
    <AddColumn isBlack v-for="(red,index) in negativesFromLocalStorageRef" :key="index" @click:remove="() => removeHandler(red)">{{red}}</AddColumn>
  </div>
</BaseContainer>
</template>

<script  setup>
import { negativesFromLocalStorageRef, addCustomNegative, removeNegative } from '@/utils';
import AddInputColumn from './AddInputColumn.vue';
import AddColumn from './AddColumn.vue';
import BaseContainer from './BaseContainer.vue';


const addHandler = (text) => {
  
  
  addCustomNegative(text)
}

const removeHandler = (text) => {
  
  removeNegative(text)
}
</script>

<style lang="scss">

</style>
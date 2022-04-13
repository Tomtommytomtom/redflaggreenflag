<template>
<BaseContainer class="mt-12">
  <div class="grid grid-cols-1 gap-4">
    <AddInputColumn @add="addHandler"/>
    <AddColumn v-for="(positive,index) in positivesFromLocalStorageRef" :key="index" @click:remove="() => removeHandler(positive)">{{positive}}</AddColumn>
  </div>
</BaseContainer>
</template>

<script  setup>
import { positivesFromLocalStorageRef, addCustomPositive, removePositive } from '@/utils';
import AddInputColumn from './AddInputColumn.vue';
import AddColumn from './AddColumn.vue';
import BaseContainer from './BaseContainer.vue';


const addHandler = (text) => {
  
  
  addCustomPositive(text)
}

const removeHandler = (text) => {
  
  removePositive(text)
}

</script>

<style lang="scss">

</style>
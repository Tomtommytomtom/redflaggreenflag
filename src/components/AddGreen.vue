<template>
<BaseContainer class="mt-12">
  <div class="grid grid-cols-1 gap-4">
    <AddInputColumn @add="addHandler"/>
    <AddColumn v-for="positive in positivesFromLocalStorageRef" @click:remove="removeHandler">{{positive}}</AddColumn>
  </div>
</BaseContainer>
</template>

<script lang="ts" setup>
import { positivesFromLocalStorageRef, addCustomPositive, removePositive } from '@/utils';
import AddInputColumn from './AddInputColumn.vue';
import AddColumn from './AddColumn.vue';
import BaseContainer from './BaseContainer.vue';


const addHandler = (text) => {
  console.log("adding positve", text);
  
  addCustomPositive(text)
}

const removeHandler = (text) => {
  console.log("removing", text);
  removePositive(text)
}

</script>

<style lang="scss">

</style>
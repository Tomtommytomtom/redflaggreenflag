<template>
  <div class="grid grid-cols-1 gap-4">
    <AddInputColumn @add="addHandler"/>
    <AddColumn v-for="red in negativesFromLocalStorageRef">{{red}}</AddColumn>
  </div>
</template>

<script lang="ts" setup>
import { negativesFromLocalStorageRef, addCustomNegative } from '@/utils';
import AddInputColumn from './AddInputColumn.vue';
import AddColumn from './AddColumn.vue';


const addHandler = (text) => {
  console.log("adding negative", text);
  
  addCustomNegative(text)
}

</script>

<style lang="scss">

</style>
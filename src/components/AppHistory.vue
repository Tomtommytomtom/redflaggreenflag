<template>
<BaseContainer>
  <div class="grid grid-cols-2 gap-2 mb-2" v-for="match in history" >
    <Card class="p-2 scrollable">
      <div>
        <span class="font-bold">YOUR DATE&nbsp;</span>
        <span v-for="(p,index) in match.text.positives">
          <span>{{p}}&nbsp;</span>
          <span class="font-bold" v-if="index !== match.text.positives.length - 1">AND&nbsp;</span>
        </span>
        <span class="font-bold">BUT&nbsp;</span>
         <span v-for="(n,index) in match.text.negatives">
          <span>{{n}}&nbsp;</span>
          <span class="font-bold" v-if="index !== match.text.negatives.length - 1">AND&nbsp;</span>
        </span>
      </div>
    </Card>
    <div class="grid grid-cols-2 gap-2">
      <Card class="justify-center" :class="{'hidden-but-still-there': match.action === 'DATE'}">DATE</Card>
      <Card class="justify-center" :class="{'hidden-but-still-there': match.action !== 'DATE'}" isBlack>(NEXT)</Card>
    </div>
  </div>
</BaseContainer>  
</template>

<script setup>
import BaseContainer from './BaseContainer.vue';
import { history } from '@/history';


import Card from './Card.vue';
</script>

<style lang="scss">
.hidden-but-still-there{
  visibility: hidden;
}

.scrollable{
  overflow-y: auto;
  white-space: break-spaces;
}
</style>
<template>
  <BaseContainer class="pt-4">
    <div
      class="mb-4 grid grid-cols-2 gap-2"
      v-for="(match, index) in history"
      :key="index"
    >
      <Card class="scrollable p-2">
        <div>
          <span class="font-bold">YOUR DATE&nbsp;</span>
          <span v-for="(p, index) in match.text.positives" :key="index">
            <span>{{ p }}&nbsp;</span>
            <span
              class="font-bold"
              v-if="index !== match.text.positives.length - 1"
              >AND&nbsp;</span
            >
          </span>
          <span class="font-bold">BUT&nbsp;</span>
          <span v-for="(n, index) in match.text.negatives" :key="index">
            <span>{{ n }}&nbsp;</span>
            <span
              class="font-bold"
              v-if="index !== match.text.negatives.length - 1"
              >AND&nbsp;</span
            >
          </span>
        </div>
      </Card>
      <div class="grid grid-cols-2 gap-2">
        <Card
          class="justify-center"
          :class="{ 'hidden-but-still-there': match.action !== 'DATE' }"
          >DATE</Card
        >
        <Card
          class="justify-center"
          :class="{ 'hidden-but-still-there': match.action === 'DATE' }"
          isBlack
          >(NEXT)</Card
        >
      </div>
    </div>
  </BaseContainer>
</template>

<script setup>
import { history } from "@/history";
import BaseContainer from "./BaseContainer.vue";

import Card from "./Card.vue";
</script>

<style lang="scss">
.hidden-but-still-there {
  visibility: hidden;
}

.scrollable {
  overflow-y: auto;
  white-space: break-spaces;
}
</style>

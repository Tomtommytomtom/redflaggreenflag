<template>
  <div class="flex">
    <div class="flex w-1/2 flex-col pr-1">
      <PerksColumn :perks="positives" :visible="visiblePositives" />
      <span style="visibility: hidden">AND</span>
      <div class="flex">
        <button @click="date" :disabled="disableButtons" class="box mr-1 grow">
          DATE
        </button>
        <button @click="next" :disabled="disableButtons" class="black-box grow">
          (NEXT)
        </button>
      </div>
    </div>
    <div class="w-1/2 pl-1">
      <PerksColumn
        style="visibility: hidden"
        :visible="visiblePositives"
        :perks="positives"
      />
      <NegativeColumn :negatives="negatives" :visible="visibleNegatives" />
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { nRandomPerks, nRandomNegatives } from "../utils";
import PerksColumn from "@/components/PerksColumn.vue";
import NegativeColumn from "@/components/NegativeColumn.vue";
import {
  drawPaths,
  playFirstAnimationSequence,
  stopAllAnimationSequences,
  resetAllAnimationSequences,
  playSecondAnimationSequence,
  playThirdAnimationSequence,
} from "@/path";

const disableButtons = ref(true);

const positives = ref([]);
const negatives = ref([]);

const positiveCount = ref(2);
const negativeCount = ref(1);

const visiblePositives = ref([]);
const visibleNegatives = ref([]);

const reroll = () => {
  positives.value = nRandomPerks(positiveCount.value);
  negatives.value = nRandomNegatives(negativeCount.value);
  visiblePositives.value = Array(positiveCount.value).fill(false);
  visibleNegatives.value = Array(negativeCount.value).fill(false);
};
reroll();

const secondBounce = () => {
  visibleNegatives.value = visibleNegatives.value.map(() => true);
};

const firstBounce = () => {
  visiblePositives.value = visiblePositives.value.map(() => true);
};

const play = () => {
  playFirstAnimationSequence(firstBounce, secondBounce, () => {
    disableButtons.value = false;
  });
};

const resetEverything = () => {
  stopAllAnimationSequences();
  resetAllAnimationSequences();
  addListeners();
};

const next = () => {
  disableButtons.value = true;
  const callbacks = Array();
  callbacks[3] = () => {
    resetEverything();
    reroll();
  };
  playThirdAnimationSequence(...callbacks);
};

const date = () => {
  disableButtons.value = true;
  const callbacks = Array();
  callbacks[4] = () => {
    resetEverything();
    reroll();
  };

  playSecondAnimationSequence(...callbacks);
};

const firstClick = () => {
  play();
  removeListeners();
};

const addListeners = () => {
  window.addEventListener("click", firstClick);
  window.addEventListener("touchstart", firstClick);
};

const removeListeners = () => {
  window.removeEventListener("click", firstClick);
  window.removeEventListener("touchstart", firstClick);
};

addListeners();
</script>

<style></style>

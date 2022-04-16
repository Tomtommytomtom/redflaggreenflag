<template>
  <BaseContainer class="justify-end">
    <div class="flex">
      <div class="flex w-1/2 flex-col pr-1">
        <PerksColumn :perks="positives" :visible="visiblePositives" />
        <span style="visibility: hidden">AND</span>
        <div class="flex">
          <button
            @click="date"
            :disabled="disableButtons"
            class="box mr-1 basis-1/2"
          >
            DATE
          </button>
          <button
            @click="next"
            :disabled="disableButtons"
            class="box black-box basis-1/2"
          >
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
  </BaseContainer>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import { nRandomPerks, nRandomNegatives } from "@/utils";
import { positiveCount, negativeCount } from "@/state";
import PerksColumn from "@/components/PerksColumn.vue";
import NegativeColumn from "@/components/NegativeColumn.vue";
import {
  playFirstAnimationSequence,
  stopAllAnimationSequences,
  resetAllAnimationSequences,
  playSecondAnimationSequence,
  playThirdAnimationSequence,
  drawPaths,
  removePaths,
} from "@/path";
import { addToHistory } from "@/history";
import BaseContainer from "./BaseContainer.vue";

const disableButtons = ref(true);

const positives = ref([]);
const negatives = ref([]);

// const positiveCount = ref(2);
// const negativeCount = ref(1);

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
  // eslint-disable-next-line no-use-before-define
  addListeners();
};

const scrollToBottom = () => window.scrollTo({
  top: document.body.scrollHeight,
  behavior: 'smooth'
});

const next = () => {
  scrollToBottom()
  addToHistory({
    text: {
      positives: positives.value,
      negatives: negatives.value,
    },
    action: "NEXT",
  });
  disableButtons.value = true;
  const callbacks = [];
  callbacks[3] = () => {
    resetEverything();
    reroll();
  };
  playThirdAnimationSequence(...callbacks);
};

const date = () => {
  scrollToBottom()
  addToHistory({
    text: {
      positives: positives.value,
      negatives: negatives.value,
    },
    action: "DATE",
  });
  disableButtons.value = true;
  const callbacks = [];
  callbacks[4] = () => {
    resetEverything();
    reroll();
  };

  playSecondAnimationSequence(...callbacks);
};

const firstClick = () => {
  play();
  // eslint-disable-next-line no-use-before-define
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

onMounted(() => {
  drawPaths();
});

onUnmounted(() => {
  stopAllAnimationSequences();
  resetAllAnimationSequences();
  removeListeners();
  removePaths();
});

addListeners();
</script>

<style></style>

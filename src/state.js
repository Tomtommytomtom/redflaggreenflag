import { ref, watch } from "vue";

export const positiveCount = ref(+localStorage.getItem("positiveCount") || 2);
export const negativeCount = ref(+localStorage.getItem("negativeCount") || 1);

watch(positiveCount, () => {
  localStorage.setItem("positiveCount", positiveCount.value);
});
watch(negativeCount, () => {
  localStorage.setItem("negativeCount", negativeCount.value);
});

import { ref } from "vue";

export const history = ref(JSON.parse(localStorage.getItem("history")) || []);

export const addToHistory = (data) => {
  history.value.unshift(data);
  localStorage.setItem("history", JSON.stringify(history.value));
};

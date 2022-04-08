import { ref, computed } from "vue";

const state = ["GAME", "MENU"];

const stateRef = ref(state[0]);

export const changeState = (newState) => {
  if (!state.includes(newState)) {
    return;
  }
  stateRef.value = newState;
};

export const currentState = computed(() => stateRef.value);

export const changeToMenu = () => changeState("MENU");
export const changeToGame = () => changeState("GAME");

export const isGame = computed(() => currentState.value === "GAME");
export const isMenu = computed(() => currentState.value === "MENU");

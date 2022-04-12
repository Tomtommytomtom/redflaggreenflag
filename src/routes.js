import Game from "./components/AppGame.vue";
import Menu from "./components/AppMenu.vue";
import AddGreen from "./components/AddInputColumn.vue"
import AddRed from "./components/AddRed.vue"

/** @type {import('vue-router').RouterOptions['routes']} */
// eslint-disable-next-line import/prefer-default-export
export const routes = [
  { path: "/", component: Game, meta: { title: "Game" } },
  { path: "/menu", component: Menu },
  { path: "/add/green", component: AddGreen },
  { path: "/add/red", component: AddRed },
  { path: "/:path(.*)", component: Game },
  
];

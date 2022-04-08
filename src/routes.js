import Game from "./components/AppGame.vue";
import Menu from "./components/AppMenu.vue"

/** @type {import('vue-router').RouterOptions['routes']} */
// eslint-disable-next-line import/prefer-default-export
export const routes = [
  { path: "/", component: Game, meta: { title: "Game" } },
  { path: "/menu", component: Menu },
  { path: "/:path(.*)", component: Game },
];

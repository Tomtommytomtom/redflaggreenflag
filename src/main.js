import { createApp } from "vue";
import "./tailwind.css";
import { createRouter, createWebHistory } from "vue-router";
import App from "./App.vue";
import { routes } from "./routes";

const app = createApp(App);

const router = createRouter({
  history: createWebHistory("/redflaggreenflag"),
  routes,
});

app.use(router);
app.mount("#app");

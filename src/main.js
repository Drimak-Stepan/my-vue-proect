import "./assets/scss/index.scss";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import Notifications from "@kyvg/vue3-notification";
import store from "./store";

const app = createApp(App);

app.use(Notifications);
app.use(store);
app.use(router);
app.mount("#app");

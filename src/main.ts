import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");

const a = "a";
// 👇 ts is not
console.log({ a: a });

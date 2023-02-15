import { createApp } from "vue";

// import Main from "./views/main/Main.vue";
// import Characters from "./views/characters/Characters.vue";
import App from './App.vue'
import "./style.css";
import router from './router/routes.js'

const app = createApp(App);

app.use(router);
app.mount("#app");

// import { createApp } from "vue";
// import "./style.css";
// import App from "./App.vue";
// // import routes from './router/routes.js';
// // import VueRouter from 'vue-router';
// // const router = new VueRouter ({
// // mode: 'history',
// // routes
// // })

// createApp(App).mount("#app");

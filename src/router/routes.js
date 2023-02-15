
import Main from "../views/main/Main.vue";
import Characters from "../views/characters/Characters.vue";
import { createRouter, createWebHistory } from "vue-router";
import Character from '../views/character/Character.vue'
import Form from '../views/form/Form.vue'
// import Error404 from '../views/error404/Error404.vue'
// import App from '../App.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      component: Main,
    },
    {
      path: "/characters",
      component: Characters,
    },
    {
      path: "/character/:id",
      component: Character,
      props: true
    },
    {
      path: "/form",
      component: Form,
    }
    // {
    //   path: '/:catchall(.*)*',
    //   component: Error404,
    //   name: 'Error404'
    // }
  ],
});

// this.$router.push({
//   name: 'Error404',
//   // preserve current path and remove the first char to avoid the target URL starting with `//`
//   params: { catchall: this.$route.path.substring(1).split('/') },
//   // preserve existing query and hash if any
//   query: this.$route.query,
//   hash: this.$route.hash,
// })

export default router

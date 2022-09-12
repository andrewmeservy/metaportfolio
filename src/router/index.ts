import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import { locale } from "../i18n";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL + locale),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/software",
      name: "software",
      component: () => import("../views/SoftwareView.vue"),
    },
    {
      path: "/audio",
      name: "audio",
      component: () => import("../views/AudioView.vue"),
    },
    {
      path: "/more",
      name: "more",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/MoreView.vue"),
    },
  ],
});

export default router;

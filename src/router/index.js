import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layout";

Vue.use(VueRouter);

let routes = [
  {
    path: "/",
    name: "Home",
    component: Layout,
    redirect: "/home",
    children: [
      {
        path: "home",
        name: "home",
        component: () => import("@/views/home/index"),
      },
    ],
  },
  {
    path: "/game",
    name: "Game",
    component: () => import("@/views/game/index"),
  },
];

const router = new VueRouter({
  routes,
});

export default router;

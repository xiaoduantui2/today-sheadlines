import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    redirect: "/home",
  },
  {
    path: "/layout",
    name: "layout",
    component: () => import("../views/layout"),
    children: [
      {
        path: "/home",
        name: "home",
        component: () => import("../views/home"),
      },
      {
        path: "/search",
        name: "search",
        component: () => import("../views/search"),
      },
      {
        path: '/my',
        name: 'my',
        component: () =>import('../views/my')
      },
      {
        path: '/video',
        name: 'video',
        component: () =>import('../views/video')
      }
    ],
  },
];

const router = new VueRouter({
  routes,
});

export default router;

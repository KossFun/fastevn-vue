import Vue from "vue";
import Router from "vue-router";
import Layout from "./views/Layout.vue";

Vue.use(Router);

export default new Router({
  mode: "hash",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/index",
      name: "index",
      component: Layout,
      redirect: "/index/home",
      children: [
        {
          path: "/index/home",
          name: "home",
          component: () => import("./views/Home.vue")
        },
        {
          path: "/index/setting",
          name: "setting",
          component: () => import("./views/Setting.vue")
        },
        {
          path: "/index/file",
          name: "file",
          component: () => import("./views/File.vue")
        },
        {
          path: "/index/cpu",
          name: "cpu",
          component: () => import("./views/CPU.vue")
        },
        {
          path: "/index/about",
          name: "about",
          component: () => import("./views/About.vue")
        }
      ]
    },
    {
      path: "/setting",
      name: "setting",
      component: () => import("./views/Setting.vue")
    }
  ]
});

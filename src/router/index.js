import Vue from "vue";
import Router from "vue-router";
import Home from "../views/Home.vue";
import ItemsIndex from "../views/ItemsIndex.vue";
import ItemsNew from "../views/ItemsNew.vue";
import ItemsShow from "../views/ItemsShow.vue";
import ItemsEdit from "../views/ItemsEdit.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/items",
      name: "items-index",
      component: ItemsIndex
    },
    {
      path: "/items/new",
      name: "items-new",
      component: ItemsNew
    },
    {
      path: "/items/:id",
      name: "items-show",
      component: ItemsShow
    },
    {
      path: "/items/:id/edit",
      name: "items-edit",
      component: ItemsEdit
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (about.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "about" */ "../views/About.vue")
    }
  ]
});

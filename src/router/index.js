import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue")
  },
  {
    path: "/login",
    name: "login",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Login.vue")
  },
  {
    path: "/register",
    name: "register",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Register.vue")
  },
  {
    path: "/map",
    name: "map",
    component: () => import(/* webpackChunkName: "about" */ "../views/Map.vue")
  },
  {
    path: "/myroutes",
    name: "myroutes",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyRoutes.vue")
  },
  {
    path: "/wineriesdescription",
    name: "wineriesdescription",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WineriesDescription.vue")
  },
  {
    path: "/adminpage",
    name: "adminpage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminPage.vue")
  },
  /////////////////////////////ROUTER//////////////////////////////
  {
    path: "/usersadmin",
    name: "usersadmin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UsersAdmin.vue")
  },
  {
    path: "/wineriesadmin",
    name: "wineriesadmin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WineriesAdmin.vue")
  },
  {
    path: "/addwinerieadmin",
    name: "addwinerieadmin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddWinerieAdmin.vue")
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue")
  }
];

const router = new VueRouter({
  routes
});

export default router;

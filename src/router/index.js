import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "../store/index.js";

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
    meta: "",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/MyRoutes.vue"),
    beforeEnter(to, from, next) {
      let loggedUser = store.state.loggedUser.length;
      if (loggedUser == 0) {
        next("/login");
      } else {
        next();
      }
    }
  },
  {
    path: "/routesdescription",
    name: "routesdescription",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/RoutesDescription.vue")
  },
  {
    path: "/adminpage",
    name: "adminpage",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AdminPage.vue"),
    beforeEnter(to, from, next) {
      let typeUser = store.getters.typeUser;
      if (typeUser == 1) {
        next("/");
      } else {
        next();
      }
    }
  },
  /////////////////////////////ROUTER//////////////////////////////
  {
    path: "/usersadmin",
    name: "usersadmin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/UsersAdmin.vue"),
    beforeEnter(to, from, next) {
      let typeUser = store.getters.typeUser;
      if (typeUser == 1) {
        next("/"); // como o user 1 é um user normal é retornado à pagina inicial
      } else {
        next();
      }
    }
  },
  {
    path: "/wineriesadmin",
    name: "wineriesadmin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WineriesAdmin.vue"),
    beforeEnter(to, from, next) {
      let typeUser = store.getters.typeUser;
      if (typeUser == 1) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/addwinerieadmin",
    name: "addwinerieadmin",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AddWinerieAdmin.vue"),
    beforeEnter(to, from, next) {
      let typeUser = store.getters.typeUser;
      if (typeUser == 1) {
        next("/");
      } else {
        next();
      }
    }
  },
  {
    path: "/profile",
    name: "profile",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Profile.vue")
  },
  {
    path: "/wineriesdescription/:winerieId",
    name: "wineriesdescription",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WineriesDescription.vue")
  },
  {
    path: "/wineriesdescription/:winerieId",
    name: "wineriesdescription",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/WineriesDescription.vue")
  },
  {
    path: "/route",
    name: "route",
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Route.vue")
  },
];

const router = new VueRouter({
  routes,
  scrollBehavior () {
    return { x: 0, y: 0 }}
});

export default router;

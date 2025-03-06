import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Geo from "../views/Geo.vue";
import Soon from "../views/Soon.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import { auth } from "../firebase";

const routes = [
  { path: "/", component: Home, meta: { requiresAuth: true } },
  { path: "/geo", component: Geo, meta: { requiresAuth: true } },
  { path: "/soon", component: Soon, meta: { requiresAuth: true } },
  { path: "/login", component: Login, meta: { requiresGuest: true } },
  { path: "/register", component: Register, meta: { requiresGuest: true } }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

router.beforeEach((to, from, next) => {
  auth.onAuthStateChanged((user) => {
    if (to.meta.requiresAuth && !user) {
      next("/login");
    } else if (to.meta.requiresGuest && user) {
      next("/");
    } else {
      next();
    }
  });
});

export default router;

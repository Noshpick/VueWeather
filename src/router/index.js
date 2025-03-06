import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import Geo from '../views/Geo.vue';
import Soon from '../views/Soon.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/geo', component: Geo },
  { path: '/soon', component: Soon }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

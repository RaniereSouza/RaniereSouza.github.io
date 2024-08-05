import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: '/',               name: 'initial',     alias: ['/index.html'], redirect: '/home'},
  {path: '/home',           name: 'home',        component: () => import('../views/Home.vue')},
  {path: '/maintenance',    name: 'maintenance', component: () => import('../views/Maintenance.vue'), alias: ['/work-in-progress']},
  {path: '/:pathMatch(.*)', name: 'not-found',   component: () => import('../views/NotFound.vue')},
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

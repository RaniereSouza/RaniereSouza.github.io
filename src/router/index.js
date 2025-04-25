import { createRouter, createWebHistory } from 'vue-router';

const maintenanceModeOn =
  import.meta.env.VITE_MAINTENANCE_MODE === 'true' ||
  import.meta.env.VITE_MAINTENANCE_MODE === 'on' ||
  import.meta.env.VITE_MAINTENANCE_MODE === 'ok'

const routes = !maintenanceModeOn ? [
  {path: '/',               name: 'initial',     alias: ['/index.html'], redirect: '/home'},
  {path: '/home',           name: 'home',        component: () => import('../views/Home.vue')},
  {path: '/maintenance',    name: 'maintenance', component: () => import('../views/Maintenance.vue'), alias: ['/work-in-progress']},
  {path: '/:pathMatch(.*)', name: 'not-found',   component: () => import('../views/NotFound.vue')},
] : [
  {path: '/:pathMatch(.*)', name: 'maintenance', component: () => import('../views/Maintenance.vue'), alias: ['/work-in-progress']},
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

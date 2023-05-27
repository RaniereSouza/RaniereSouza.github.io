import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {path: '/', name: 'initial', alias: ['/index.html'], redirect: '/home'},
  {path: '/home', component: () => import('../views/Home.vue'), name: 'home'},
  {path: '/maintenance', component: () => import('../views/Maintenance.vue'), name: 'maintenance', alias: ['/work-in-progress']},
  {path: '/:pathMatch(.*)', component: () => import('../views/NotFound.vue'), name: 'not-found'},
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

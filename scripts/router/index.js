import { createRouter, createWebHistory } from 'vue-router';

import Maintenance from '../views/Maintenance.js';
import NotFound from '../views/NotFound.js';
import Home from '../views/Home.js';

const routes = [
  {path: '/', name: 'initial', alias: ['/index.html'], redirect: '/work-in-progress'},
  {path: '/home', component: Home, name: 'home'},
  {path: '/maintenance', component: Maintenance, name: 'maintenance', alias: ['/work-in-progress']},
  {path: '/:pathMatch(.*)', component: NotFound, name: 'not-found'},
];

export default createRouter({
  routes,
  history: createWebHistory(),
});

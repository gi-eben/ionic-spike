import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

import Page1 from '../views/Page1.vue'
import Page2 from '../views/Page2.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/1',
    component: Page1
  },
  {
    path: '/2',
    component: Page2
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router

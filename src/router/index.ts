import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/folder/Inbox'
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },

  {
    path: '/roomPage',
    component: () => import ('../views/roomPage.vue')
  },
  {
    path: '/waterelectricitybillPage',
    component: () => import ('../views/waterelectricitybillPage.vue')
  },

  {
    path: '/manageroomPage1',
    component: () => import ('../views/manageroomPage1.vue')
  },

  {
    path: '/billPage',
    component: () => import ('../views/billPage.vue')
  },

  {
    path: '/billPage2',
    component: () => import ('../views/billPage2.vue')
  },
  {
    path: '/AgreementPage',
    component: () => import ('../views/AgreementPage.vue')
  },
  {
    path: '/managebillPage',
    component: () => import ('../views/managebillPage.vue')
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

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
    path: '/roomPage',
    component: () => import ('../views/roomPage.vue')
  },
  {
    path: '/waterelectricitybillPage',
    component: () => import ('../views/waterelectricitybillPage.vue')
  },
  {
    path: '/homePage',
    component: () => import ('../views/homePage.vue')
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
  {

    path: '/suppliesPage',
    component: () => import ('../views/suppliesPage.vue')
  },
  {

    path: '/billoverduePage',
    component: () => import ('../views/billoverduePage.vue')
  },
  {
    path: '/userdataPage',
    component: () => import ('../views/userdataPage.vue')
  },
  {
    path: '/userdataPage2',
    component: () => import ('../views/userdataPage2.vue')
  },
  {
    path: '/suppliesAddPage',
    component: () => import ('../views/suppliesAddPage.vue')
  },

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

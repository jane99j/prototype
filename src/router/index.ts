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
    path: '/AgreementPage',
    component: () => import ('../views/AgreementPage.vue')
  },
  {
    path: '/managebillPage',
    component: () => import ('../views/managebillPage.vue')
  },
  {
<<<<<<< HEAD
    path: '/suppliesPage',
    component: () => import ('../views/suppliesPage.vue')
  },
=======
<<<<<<< HEAD
    path: '/billoverduePage',
    component: () => import ('../views/billoverduePage.vue')
  }
=======
    path: '/userdataPage',
    component: () => import ('../views/userdataPage.vue')
  },
>>>>>>> 16924edef1d37eb2aedd964ce2f8c80ae216a332
>>>>>>> f2c2de6abf276abca7c796f3cbe454e8453496a0
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

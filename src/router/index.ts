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
<<<<<<< HEAD
    path: '/folder/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/demoPage',
    component: () => import ('../views/demoPage.vue')
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

  
=======
    path: '/AgreementPage',
    component: () => import ('../views/AgreementPage.vue')
  }
>>>>>>> b12c51eaa0d0871c17d8a87f5f27f016e640f4fc
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router

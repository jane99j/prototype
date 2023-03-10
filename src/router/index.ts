import { createRouter, createWebHistory } from '@ionic/vue-router';
import { RouteRecordRaw } from 'vue-router';

const routes: Array<RouteRecordRaw> = [
  {
    path: '',
    redirect: '/homePage'
  },
  {
    path: '/:id',
    component: () => import ('../views/FolderPage.vue')
  },
  {
    path: '/newroomPage',
    component: () => import ('../views/RoomManagement/newroomPage.vue')
  },
  {
    path: '/newroomeOne',
    component: () => import ('../views/RoomManagement/newroomeOne.vue')
  },
  {
    path: '/homePage',
    component: () => import ('../views/Room/homePage.vue')
  },


  {
    path: '/manageroomPage',
    component: () => import ('../views/manageroomPage.vue')
  },

  {
    path: '/billPage',
    component: () => import ('../views/Invoice/billPage.vue')
  },
  {
    path: '/AgreementPage',
    component: () => import ('../views/Room/AgreementPage.vue')
  },
  {

    path: '/suppliesPage',
    component: () => import ('../views/Parcel/suppliesPage.vue')
  },
  {

    path: '/billoverduePage',
    component: () => import ('../views/ShowInformation/billoverduePage.vue')
  },
  {
    path: '/userdataPage',
    component: () => import ('../views/Room/userdataPage.vue')
  },
  {
    path: '/userdataPage2',
    component: () => import ('../views/Room/userdataPage2.vue')
  },
  {
    path: '/suppliesAddPage',
    component: () => import ('../views/Parcel/suppliesAddPage.vue')
  },
  {
    path: '/listPage',
    component: () => import ('../views/Room/listPage.vue')
  },
  {

    path: '/suppliesMovePage',
    component: () => import ('../views/Parcel/suppliesMovePage.vue')
  },
  {
    path: '/listhomePage',
    component: () => import ('../views/listhomePage.vue')
  },
  {
    path: '/editroomPage',
    component: () => import ('../views/updateRoom/editroomPage.vue')
  },
  {
    path: '/bookingPage',
    component: () => import ('../views/Room/bookingPage.vue')
  },
  {
    path: '/suppliesDelPage',
    component: () => import ('../views/Parcel/suppliesDelPage.vue')
  },
  {
    path: '/paychckPage',
    component: () => import ('../views/Invoice/paychckPage.vue')

  },
  {
    path: '/payment_historyPage',
    component: () => import ('../views/Invoice/payment_historyPage.vue')

  },
  {
    path: '/newroometwo',
    component: () => import ('../views/RoomManagement/newroometwo.vue')

  },
  {
    path: '/newroomthree',
    component: () => import ('../views/RoomManagement/newroomthree.vue')

  },
  {
    path: '/loginPage',
    component: () => import ('../views/loginPage.vue')
  },
  {
    path: '/newroomfinish',
    component: () => import ('../views/RoomManagement/newroomfinish.vue')

  }, 
  {
    path: '/roompricePage',
    component: () => import ('../views/RoomManagement/roompricePage.vue')

  },
  {
    path: '/newroomsix',
    component: () => import ('../views/RoomManagement/newroomsix.vue')

  },
  {
    path: '/Newlocate',
    component: () => import ('../views/RoomManagement/Newlocate.vue')

  },
  {
    path: '/PageNewRoom',
    component: () => import ('../views/RoomManagement/PageNewRoom.vue')

  },
  {
    path: '/PageOne',
    component: () => import ('../views/Meter/PageOne.vue')

  },
  {
    path: '/PageTwo',
    component: () => import ('../views/Meter/PageTwo.vue')

  },
  {
    path: '/billdetails',
    component: () => import ('../views/Invoice/billdetails.vue')

  },
  {
    path: '/bill_invoice',
    component: () => import ('../views/Invoice/bill_invoice.vue')

  },
  {
    path: '/successfulPayment',
    component: () => import ('../views/Invoice/successfulPayment.vue')

  },
    {
    path: '/successfulPaymentTwo',
    component: () => import ('../views/Invoice/successfulPaymentTwo.vue')

  },
  {
    path: '/updatebillPage',
    component: () => import ('../views/Invoice/updatebillPage.vue')

  },
  {
    path: '/testPage',
    component: () => import ('../views/Room/testPage.vue')

  },
  {
    path: '/RoomManage',
    component: () => import ('../views/Room/RoomManage.vue')

  },
  {
    path: '/reserveRoom',
    component: () => import ('../views/Room/reserveRoom.vue')

  },
  {
    path: '/reserveRoom2',
    component: () => import ('../views/Room/reserveRoom2.vue')

  },
  {
    path: '/testroomPage',
    component: () => import ('../views/test1/testroomPage.vue')

  },
  {
    path: '/roompriceTest',
    component: () => import ('../views/RoomManagement/roompriceTest.vue')

  },
  {
    path: '/testppage',
    component: () => import ('../views/test1/testppage.vue')

  },
  {
    path: '/suppliesSendPage',
    component: () => import ('../views/Parcel/suppliesSendPage.vue')

  },
  {
    path: '/suppliesMovePage/:key',
    component: () => import ('../views/Parcel/suppliesMovePage.vue'),
    name:'supplies1'
  },
  {
    path: '/suppliesDelPage/:key',
    component: () => import ('../views/Parcel/suppliesDelPage.vue'),
    name:'supplies2'
  },

  {
    path: '/RoomManage/:room_id/',
    component: () => import ('../views/Room/RoomManage.vue'),
    name:'idroom1'

  },
  {
    path: '/reserveRoom/:room_id',
    component: () => import ('../views/Room/reserveRoom.vue'),
    name:'idroom2'

  },
  {
    path: '/reserveRoom2/:room_id/',
    component: () => import ('../views/Room/reserveRoom2.vue'),
    name:'idroomre'

  },

  {
    path: '/testroomPage/:key',
    component: () => import ('../views/test1/testroomPage.vue'),
    name:'room'
  },
  {
    path: '/billdetails/:payroom',
    component: () => import ('../views/Invoice/billdetails.vue'),
    name:'idroomsta'
  },
  

]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
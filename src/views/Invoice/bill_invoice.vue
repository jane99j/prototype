<template>
  <ion-page>
      <ion-header :translucent="true">
    <ion-toolbar color="purple">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>สร้างใบแจ้งหนี้</ion-title>
    </ion-toolbar>
  </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <ion-item>
          <ion-row>
        <ion-toolbar>
          <ion-segment  value="all">
              <ion-segment-button value="all" @click="allroom()">
                <ion-label>ห้องทั้งหมด</ion-label>
                </ion-segment-button>
                <ion-segment-button v-for="i in categorymenu" :key="i.name" :value="i.name" @click="filterRoom(i.category)">
                <ion-label>{{ i.name }}</ion-label>
              </ion-segment-button>
          </ion-segment> 
            </ion-toolbar>
            </ion-row>
          </ion-item>
          <ion-grid>
              <ion-item color="light">
                <ion-col  :sizeMd="8">                  
                </ion-col>
                <ion-col :sizeXs="8" :sizeMd="3">
                  <ion-searchbar></ion-searchbar>
                </ion-col>
                <ion-col :sizeXs="3" :sizeMd="1">                 
                  <ion-button color="purple" expand="block">ค้นหาห้อง</ion-button>
                </ion-col>
              </ion-item>
            </ion-grid>
          <ion-card>                
            <ion-grid>             
              <ion-item>
                <label>ใบแจ้งหนี้</label>
                <ion-button slot="end" color="success"  routerLink="/successfulPayment">ชำระแล้ว</ion-button>
              </ion-item>           
              <ion-item color="light">
                <ion-col size="2">ห้อง</ion-col>
                <ion-col size="3">สถานะ</ion-col> 
                <ion-col size="3">จำนวนเงิน</ion-col> 
                <ion-col size="2">ประภท</ion-col>
                <ion-col size="2"></ion-col>    
              </ion-item>
              <ion-item  v-for="i in filteredroom" :key="i.no" @click="toroute(i.url)">
                <ion-col size="2">{{ i.no }}</ion-col>               
                <ion-col size="3" v-if="i.state === 1">
                  <ion-badge color="medium">{{ i.status }}</ion-badge>
                </ion-col>   
                <ion-col size="3">{{ i.price }}</ion-col>
                <ion-col size="2">{{ i.type }}</ion-col>  
                <ion-col size="2"><ion-button color="warning" size="small"  routerLink="/billdetails">รายระเอียด</ion-button></ion-col>                
              </ion-item>
            </ion-grid>          
          </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { RouteLocationRaw, useRoute } from 'vue-router';
import { IonButton,IonSearchbar,IonCard,IonItem,IonGrid,IonCol,IonSegment,IonSegmentButton,IonLabel,
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {IonButton,IonSearchbar,IonCard,IonItem,IonGrid,IonCol,IonSegment,IonSegmentButton,IonLabel,
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar
  },
  data() {
      return {
        datatest: [
          {no: '102',
          status: 'ยังไม่ชำระ',
          state :1,
          price :5000,
          type :'ห้องทั่วไป',
          category: 1,
          },
          {no: '103',
          status: 'ยังไม่ชำระ',
          state :1,
          price :5500,
          type :'ห้องแอร์',
          category: 2,
          },
          {no: '105',
          status: 'ยังไม่ชำระ',
          state :1,
          price :5500,
          type :'ห้องแอร์',
          category: 2,
          },
          {no: '106',
          status: 'ยังไม่ชำระ',
          state :1,
          price :6200,
          type :'ห้องทั่วไป',
          category: 3,
          },
        ],
        categorymenu: [
        {
          name: 'ห้องทั่วไป',
          category: 1,
        },
        {
          name: 'ห้องแอร์',
          category: 2,
        },
        {
          name: 'ห้องVIP',
          category: 3,
        }
      ],
      filteredroom: {}
    }
  },
  methods: {
    toroute(rou: RouteLocationRaw) {
      this.$router.push(rou)
    },
    allroom() {
    this.filteredroom = this.datatest
    },
    filterRoom(iddata: number) {
      console.log(iddata)
      this.filteredroom = this.datatest.filter(item => item.category === iddata)
    }
  },
  beforeMount(){
    this.allroom()
  },
  
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
 
}
#container a {
  text-decoration: none;
}
ion-segment{
  size: 10px;
  text-align: left;
}

ion-searchbar.ios{
  width: 80%;
}

.ion-color-purple {
--ion-color-base: var(--ion-color-purple);
--ion-color-base-rgb: var(--ion-color-purple-rgb);
--ion-color-contrast: var(--ion-color-purple-contrast);
--ion-color-contrast-rgb: var(--ion-color-purple-contrast-rgb);
--ion-color-shade: var(--ion-color-purple-shade);
--ion-color-tint: var(--ion-color-purple-tint);
}
ion-content {
  --background: #e7e6eb;
  --color: #fff;
}

</style>

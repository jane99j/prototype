<template>
  <ion-page>
      <ion-header :translucent="true">
    <ion-toolbar color="purple">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>จัดการห้อง</ion-title>
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
                <label>เลือกห้องพักที่ต้องการ</label>
              <ion-button slot="end" color="medium" size="small" routerLink="/testroomPage">จัดการห้อง</ion-button>
              </ion-item>     
   
              <ion-item color="light">
                <ion-col size="3">ห้อง</ion-col>
                <ion-col size="3">สถานะ</ion-col>
                <ion-col size="6">ประเภทห้อง</ion-col>  
              </ion-item>


              <dev v-for="i in room" :key="i.id"> 
                <router-link style="text-decoration: none;" :to="{
                name:'room',params:{
                key:i.idroom  }}">

                <ion-item>
                <ion-col size="3">{{ i.room_id }}</ion-col>
                <ion-col size="3" v-if="i.status === 0"><ion-badge>ว่าง</ion-badge></ion-col>
                <ion-col size="3" v-if="i.status === 1"><ion-badge color="secondary">ไม่ว่าง</ion-badge></ion-col>
                <ion-col size="3" v-if="i.status === 2"><ion-badge color="danger">ค้างชำระ</ion-badge></ion-col>
                <ion-col size="3" v-if="i.status === 3"><ion-badge color="warning">จองแล้ว</ion-badge></ion-col>
                <ion-col size="3" v-if="i.status === 4"><ion-badge color="tertiary">รอย้ายออก</ion-badge></ion-col>
                <ion-col size="3" v-if="i.status === 5"><ion-badge>ยังไม่ชำระ</ion-badge></ion-col>
                <ion-col size="3" v-if="i.status === 6"><ion-badge color="success">ชำระแล้ว</ion-badge></ion-col>
                <ion-col size="6">{{ i.room_type }}</ion-col>
              

              </ion-item>

              </router-link>
             
              </dev>

             
            </ion-grid>          
          </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
// import { RouteLocationRaw, useRoute } from 'vue-router';
import { IonButton,IonSearchbar,IonCard,IonItem,IonGrid,IonCol,IonSegment,IonSegmentButton,IonLabel,
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonBadge,IonRow } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: { IonButton,IonSearchbar,IonCard,IonItem,IonGrid,IonCol,IonSegment,IonSegmentButton,IonLabel,
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonBadge,IonRow
  },

  data() {
  return {
    room: {},
  }
},
methods: {
  ////GETdata////
  async getDataFromDatabase() {
    try {
      const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json`);
      this.room = response.data;
      console.log(JSON.stringify(this.room))
    } catch (error) {
      console.error(error);
    }
  }
},
created() {
    this.getDataFromDatabase();
  }
  
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

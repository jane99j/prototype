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
                <ion-segment-button v-for="i in categorymenu" :key="i.name" :value="i.name"
                    @click="filterRoom(i.status)">
                    <ion-label>{{ i.name }}</ion-label>
                  </ion-segment-button>
          </ion-segment> 
            </ion-toolbar>
            </ion-row>
          </ion-item>
          <ion-grid>
              <ion-item color="light">
                <ion-col  :sizeMd="6">
                </ion-col>
                <ion-col  :sizeMd="2"> 
                  <ion-item>
                    <ion-select interface="popover" placeholder="เลือกชั้น">
                      <ion-select-option value="apples">1</ion-select-option>
                      <ion-select-option value="oranges">2</ion-select-option>
                      <ion-select-option value="bananas">3</ion-select-option>
                    </ion-select>                  
                  </ion-item>                 
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
                <ion-col size="3">ห้อง</ion-col>
                <ion-col size="3">สถานะ</ion-col> 
                <ion-col size="2">จำนวนเงิน</ion-col> 
                <ion-col size="2"></ion-col>    
              </ion-item>
              <div v-for="i in roomtype" :key="i.id">
              <ion-item  v-if="i.status ===5 || i.status ===2 ">
                <ion-col size="3">{{ i.room_id }}</ion-col>               
                <ion-col size="3" >
                  <ion-badge color="medium" v-if="i.status === 5">ยังไม่ชำระ</ion-badge>
                  <ion-badge color="danger" v-if="i.status === 2">ค้างชำระ</ion-badge>

                </ion-col>   
                <ion-col size="2">{{ i.price }}</ion-col>
                <ion-col size="2"><ion-button color="warning" size="small"  :routerLink="{
                      name: 'idroomsta', params: {
                        payroom:i.idroom
                    
                      }
                    }">รายระเอียด</ion-button></ion-col>                
              </ion-item>
            </div>
            </ion-grid>          
          </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { RouteLocationRaw, useRoute } from 'vue-router';
import { IonBadge,IonButton,IonSearchbar,IonCard,IonItem,IonGrid,IonCol,IonSegment,IonSegmentButton,IonLabel,
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {IonBadge,IonButton,IonSearchbar,IonCard,IonItem,IonGrid,IonCol,IonSegment,IonSegmentButton,IonLabel,
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar
  },
  data() {
      return {
        
        roomtype: [],
        // categorymenu: [
        // {
        //   name: 'ชำระแล้ว',
        //   status: 6,
        // }


      // ],
      filteredroom: []
    }
  },
  methods: {
    toroute(rou: RouteLocationRaw) {
      this.$router.push(rou)
    },
    filterRoom(iddata: number) {
      // console.log(iddata)
       console.log(this.filteredroom)
      this.filteredroom = this.roomtype.filter((item: { status: number }) => item.status === iddata)
      // console.log(this.filteredroom)
    },
    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json`);
        this.roomtype = response.data;
        console.log(JSON.stringify(this.roomtype))
      } catch (error) {
        console.error(error);
      }
    },
   
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

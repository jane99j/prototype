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
          <ion-card>                
            <ion-grid>
              <ion-item>
                <label slot="end">เลือกห้องพักที่ต้องการ</label>
                <ion-button slot="end" color="medium" size="default">จัดการ</ion-button>
              </ion-item>            
              <ion-item color="light">
              <ion-checkbox slot="start" color="light"></ion-checkbox>
                <ion-col size="3">ห้อง</ion-col>
                <ion-col size="3">สถานะ</ion-col>
                <ion-col size="6">ประเภทห้อง</ion-col>  
              </ion-item>
              <ion-item  v-for="i in filteredroom" :key="i.no" @click="toroute(i.url)">
              <ion-checkbox slot="start" value="allcheck"></ion-checkbox>
                <ion-col size="3">{{ i.no }}</ion-col>              
                <ion-col size="3" v-if="i.state === 1">
                  <ion-badge color="success">{{ i.status }}</ion-badge>
                </ion-col> 
                <ion-col size="3" v-if="i.state === 0">
                  <ion-badge color="medium">{{ i.status }}</ion-badge>
                </ion-col>
                <ion-col size="6">{{ i.type }}</ion-col>              
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
import { IonCard,IonItem,IonCheckbox,IonGrid,IonCol,IonSegment,IonSegmentButton,IonLabel,
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: { IonCard,IonItem,IonCheckbox,IonGrid,IonCol,IonSegment,IonSegmentButton,IonLabel,
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar
  },
  data() {
      return {
        datatest: [
          {no: '101',
          status: 'ว่าง',
          state :0,
          price: '5,000',
          type :'ห้องทั่วไป',
          category: 1,
          },
          { no: '102',
          status: 'ไม่ว่าง',
          state :1,
          price: '5,200',
          type :'ห้องแอร์',
          category: 2,
          },
          { no: '103',
          status: 'ไม่ว่าง',
          state :1,
          price: '6,200',
          type :'ห้อง VIP',
          category: 3,
          },
          {no: '104',
          status: 'ว่าง',
          state :0,
          price: '5,000',
          type :'ห้องทั่วไป',
          category: 1,
          },
          { no: '105',
          status: 'ไม่ว่าง',
          state :1,
          price: '5,200',
          type :'ห้องแอร์',
          category: 2,
          },
          { no: '106',
          status: 'ไม่ว่าง',
          state :1,
          price: '6,200',
          type :'ห้อง VIP',
          category: 3,
          },
          { no: '108',
          status: 'ไม่ว่าง',
          state :1,
          price: '6,200',
          type :'ห้อง VIP',
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
    },
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

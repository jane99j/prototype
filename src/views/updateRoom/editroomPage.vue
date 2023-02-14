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
              <ion-segment value="all">
                <ion-segment-button value="all" @click="allroom()">
                  <ion-label>ห้องทั้งหมด</ion-label>
                </ion-segment-button>
                <ion-segment-button v-for="i in roomtype" :key="i.room_type" :value="i.room_type"
                  @click="filterRoom(i.room_type)">
                  <ion-label>{{ i.room_type }}</ion-label>
                </ion-segment-button>
              </ion-segment>
            </ion-toolbar>
          </ion-row>
        </ion-item>
        <ion-grid>
          <ion-item color="light">
            <ion-col :sizeMd="8">
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
              <ion-checkbox slot="start" color="light"></ion-checkbox>
              <ion-col size="3">ห้อง</ion-col>
              <ion-col size="3">สถานะ</ion-col>
              <ion-col size="6">ประเภทห้อง</ion-col>
            </ion-item>
            <ion-item v-for="i in roomtype" :key="i.no" @click="toroute(i.url)">
              <ion-col size="3">{{ i.room_id }}</ion-col>
              <ion-col size="3" v-if="i.status === 0">
                <ion-badge color="medium">ว่าง </ion-badge>
              </ion-col>
              <ion-col size="3" v-if="i.state === 1">
                <ion-badge color="secondary">ไม่ว่าง</ion-badge>
              </ion-col>
              <ion-col size="3">{{ i.room_type }}</ion-col>
              <ion-col>
                <ion-button :routerLink="{
                  name: 'id', params: {
                    IDroom: i.room_id
                  }
                }">จัดการ</ion-button>
              </ion-col>
            </ion-item>
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
import {
  IonBadge, IonButton, IonSearchbar, IonCard, IonItem, IonCheckbox, IonGrid, IonCol, IonSegment, IonSegmentButton, IonLabel,
  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
} from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonBadge, IonButton, IonSearchbar, IonCard, IonItem, IonCheckbox, IonGrid, IonCol, IonSegment, IonSegmentButton, IonLabel,
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar
  },
  data() {
    return {
      roomtype: [],
      filteredroom: {},


    }
  },
  methods: {
    toroute(rou: RouteLocationRaw) {
      this.$router.push(rou)
    },
    allroom() {
      this.filteredroom = this.roomtype
    },
    filterRoom(iddata: string) {
      // console.log(iddata)
      // console.log(this.filteredroom)
      this.filteredroom = this.roomtype.filter((item: { room_type: string }) => item.room_type === iddata)
      console.log(this.filteredroom)
    },
    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json`);
        this.roomtype = Object.values(response.data);
        this.filteredroom = this.roomtype;
        console.log(JSON.stringify(this.roomtype))
      } catch (error) {
        console.error(error);
      }

    },


  },
  created() {
    this.getDataFromDatabase();
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

ion-segment {
  size: 10px;
  text-align: left;
}

ion-searchbar.ios {
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

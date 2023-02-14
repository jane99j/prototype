<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="purple">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>ห้องพัก</ion-title>
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
        <ion-grid>
          <ion-item color="light">
            <ion-col :sizeMd="6"></ion-col>
            <ion-col :sizeMd="2">
              <ion-item>
                <ion-select interface="popover" placeholder="ประเภทห้อง">
                  <ion-select-option value="apples">ห้องทั่วไป</ion-select-option>
                  <ion-select-option value="oranges">ห้องแอร์</ion-select-option>
                  <ion-select-option value="bananas">ห้องVIP</ion-select-option>
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
        <ion-grid>
          <ion-card>

            <ion-item>

              <ion-col>
                <ion-segment value="all">
                  <ion-segment-button value="all" @click="allroom()">
                    <ion-label>ห้องทั้งหมด</ion-label>
                  </ion-segment-button>

                  <ion-segment-button v-for="i in categorymenu" :key="i.name" :value="i.name"
                  @click="filterRoom(i.status)">
                    <ion-label>{{ i.name }}</ion-label>
                  </ion-segment-button>
                </ion-segment>
              </ion-col>
            </ion-item>

            <ion-item color="light">
              <ion-label slot="end">ห้องทั้งหมด 8 ห้อง </ion-label>
            </ion-item>
          </ion-card>
          <ion-row>
            <ion-col :sizeXs="6" :sizeMd="4" v-for="i in filteredroom" :key="i.id">              

                <ion-card :routerLink="{
                name: 'idroom1', params: {
                  room_id: i.idroom 
                },
              }">
                  <ion-card-header>
                    <ion-card-title>{{ i.room_id }}</ion-card-title>
                    <ion-card-subtitle></ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-icon slot="icon-only" :icon="person" v-if="i.status"></ion-icon>
                  </ion-card-content>
                  <ion-card-content>

                    <ion-label>
                      <ion-badge v-if="i.status === 0">ว่าง </ion-badge>
                    <ion-badge color="tertiary" v-if="i.status === 1">ไม่ว่าง </ion-badge>
                    <ion-badge color="danger" v-if="i.status === 2">ค้างชำระ </ion-badge>
                    <ion-badge color="warning" v-if="i.status === 3">จองแล้ว </ion-badge>
                    <ion-badge color="warning" v-if="i.status === 4">รอย้ายออก </ion-badge>
                    </ion-label>
                  </ion-card-content>
                </ion-card>
                
            </ion-col>
          </ion-row>

          <ion-item color="light">
            <ion-label slot="end">ชั้น2</ion-label>
          </ion-item>
        </ion-grid>

      </div>
    </ion-content>
  </ion-page>

</template>

<script lang="ts">
import axios from 'axios';
import { ref, defineComponent } from 'vue';
import { RouteLocationRaw, useRoute } from 'vue-router';
import {
  IonBadge, IonIcon, IonCardContent, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonSearchbar, onIonViewDidEnter, IonLabel, IonSegment, IonSegmentButton,
} from '@ionic/vue';
import { colorFill, person } from 'ionicons/icons';


export default defineComponent({
  components: {
    IonBadge,
    IonIcon,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCol,
    IonGrid,
    IonRow,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardTitle,
    IonCardContent,
    IonSearchbar,
    IonLabel,
    IonSegment,
    IonSegmentButton,
  },
  data() {
    return {
      roomtype: [],
      categorymenu: [
        {
          name: 'ห้องว่าง',
          status: 0,
        },
        {
          name: 'จองแล้ว',
          status: 3,
        },
        {
          name: 'ค้างชำระ',
          status: 2,
        }
      ],
      filteredroom: []
    }
  },

  methods: {
    toroute(rou: RouteLocationRaw) {
      this.$router.push(rou)
    },
    allroom() {
      this.filteredroom = this.roomtype
    },
    filterRoom(iddata: number) {
      // console.log(iddata)
      // console.log(this.filteredroom)
      this.filteredroom = this.roomtype.filter((item: { status: number }) => item.status === iddata)
       console.log(this.filteredroom)
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
  beforeMount(){
    this.allroom()
  },
  created() {
    this.getDataFromDatabase();
  },
  
  setup() {
    return { person }
  }


});
</script>

<style scoped>
ion-icon {
  font-size: 300%;
  float: right;
  margin-top: 7px;
  color: rgb(115, 112, 116);
}

#container {
  text-align: left;
  position: absolute;
  left: 0;
  right: 0;


}

ion-segment-button::part(indicator-background) {
  background: #3a169c;
}

/* Material Design styles */
ion-segment-button.md::part(native) {
  color: #000;

}

.segment-button-checked.md::part(native) {
  background-color: #ffffff;
  color: #3a169c;
}

/* iOS styles */
ion-segment-button.ios::part(native) {
  color: #3a169c;
}

.segment-button-checked.ios::part(native) {
  color: rgb(112, 20, 20);
}

ion-segment-button.ios::part(indicator-background) {
  border-radius: 20px;
}

ion-segment-button.md::part(indicator-background) {
  height: 4px;
}

ion-card-header.ios {
  display: flex;
  flex-flow: column-reverse;
}

ion-badge {
  --background: rgb(109, 109, 109);
  --color: rgb(255, 255, 255);
  --padding-end: 20px;
  --padding-start: 20px;
  --min-width: var(--min-width)
}

ion-card {
  display: flexbox;

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
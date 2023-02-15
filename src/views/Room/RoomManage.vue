<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>{{ $route.params.id }}</ion-title>
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
          <ion-row>
            <ion-col :sizeXs="12" :sizeMd="8">
              <ion-card>
                <ion-card-content>
                  <ion-badge v-if="room.status === 0" slot="start">ว่าง </ion-badge>
                  <ion-badge color="secondary" v-if="room.status === 1">ไม่ว่าง </ion-badge>
                  <ion-badge color="danger" v-if="room.status === 2">ค้างชำระ </ion-badge>
                  <ion-badge color="warning" v-if="room.status === 3">จองแล้ว </ion-badge>
                  <ion-badge color="tertiary" v-if="room.status === 4">รอย้ายออก </ion-badge>

                  <ion-item color="light">
                    <ion-label>หมายเลข{{ room.room_id }}</ion-label>
                  </ion-item>
                  <center>
                    <ion-button :routerLink="{
                      name: 'idroom2', params: {
                        idroom: $route.params.idroom
                    
                      }
                    }">เพิ่มผู้เช่า</ion-button>
                    <ion-button color="danger" v-if="room.status === 1" @click="getout">ย้ายออก</ion-button>
                    <ion-button color="warning" v-if="room.status !== 1" :routerLink="{
                      name: 'idroomre', params: {
                        idroomre: $route.params.idroom
                    
                      }
                    }">จองห้อง</ion-button>
                  </center>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonBadge, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonBadge,
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar, IonCard, IonCardContent, IonButton
  },
  data() {
    return {
      useradd: {},
      room: {},
    }
  },
  methods: {
    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${this.$route.params.room_id}.json`);
        this.room = (response.data);
        console.log(this.room);

      } catch (error) {
        console.error(error);
      }
    },
    getout() {
      console.log("sendData active");
      axios.patch(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${this.$route.params.room_id}.json`, { status: 4 })
        .then((response) => {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },



  },

  created() {
    this.getDataFromDatabase();
  }

});
</script>
<style>
ion-badge {
  --background: rgb(109, 109, 109);
  --color: rgb(255, 255, 255);
  --padding-end: 20px;
  --padding-start: 20px;
  --min-width: var(--min-width)
}
</style>


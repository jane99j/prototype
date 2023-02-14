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
            <ion-col :sizeXs="12" :sizeMd="12">
              <ion-card>
                <ion-card-content>
                  <ion-item color="light">
                    <ion-label>ห้อง {{ room.room_id }}</ion-label>   
                    <ion-badge color="tertiary" v-if="room.status === 1">ไม่ว่าง</ion-badge>
                    <ion-badge  v-if="room.status === 0">ว่าง </ion-badge>
                  </ion-item>                 
                  <center>
                    <ion-button :routerLink="{
                      name: 'idroom2', params: {
                        idroom: $route.params.idroom
                    
                      }
                    }">เพิ่มผู้เช่า</ion-button>
                    <ion-button>จัดการ</ion-button>
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
import { IonBadge,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonButton } from '@ionic/vue';

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
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/residents/${this.$route.params.userid}.json`);
        this.useradd = response.data;
        console.log(JSON.stringify(this.useradd))
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


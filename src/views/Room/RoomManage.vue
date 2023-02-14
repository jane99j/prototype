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
        <ion-card>
          <ion-card-header>

            <ion-card-title>

            </ion-card-title>

            <ion-card-subtitle>
              <h2>{{ room.room_id }}</h2>
            </ion-card-subtitle>
            <center>              
              <ion-button :routerLink="{
                name: 'idroom2', params: {
                  room_id: $route.params.idroom

                }
              }">เพิ่มผู้เช่า</ion-button>
              <ion-button>จัดการ</ion-button>
            </center>
          </ion-card-header>

          <ion-card-content>
          </ion-card-content>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonButton
  },
  data() {
  return {
    room: {},
  }
},
  methods: {
  async getDataFromDatabase() {
    try {
      const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${this.$route.params.idroom}.json`);
      this.room = (response.data);
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


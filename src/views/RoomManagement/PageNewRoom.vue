<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="purple">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>เพิ่มห้องพัก</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <center>
          <ion-grid :fixed="true">
            <ion-row>
              <ion-col routerLink="/manageroomPage1">
                <ion-card>
                  <ion-card-header v-for="i in dormitory" :key="i.id">
                    <ion-card-title> ชื่อ : {{i.name_room}}</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    <IonRow>
                      <div>
                        <ion-button routerLink="/roompricePage">เริ่มตั้งค่า</ion-button>

                      </div>
                    </IonRow>
                  </ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col>

              </ion-col>
              <ion-col>

              </ion-col>
            </ion-row>
          </ion-grid>
        </center>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton
  },

  data() {
    return {
      dormitory: {}
    }
  },
  methods: {
    async getDataFromDatabase() {
      try {       
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/dormitory.json`);
        this.dormitory = response.data;
        console.log(JSON.stringify(this.dormitory))
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

<style>
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


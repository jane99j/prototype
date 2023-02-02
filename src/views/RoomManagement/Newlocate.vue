<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="purple">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>เพิ่มหอพัก</ion-title>
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
          <form action="">
            <ion-item color="light">
              <ion-card-header>

                <ion-card-title>ตั้งค่าหอพัก</ion-card-title>
              </ion-card-header>
            </ion-item>
            <ion-card-content>
              <ion-list>
                <ion-item>
                  <ion-label>ชื่อหอพัก :</ion-label>
                  <ion-input type="text" v-model="dormitory.name_room"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label>ที่อยู่หอพัก :</ion-label>
                  <ion-input type="text" v-model="dormitory.add"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-label>เบอร์โทรศัพท์ :</ion-label>
                  <ion-input type="text" v-model="dormitory.phone"></ion-input>

                </ion-item>
              </ion-list>
            </ion-card-content>
          </form>
        </ion-card>
        <ion-card>
          <IonRow>
            <div className="ion-float-end">
              <ion-button type="submit" @click="sendData">เพิ่ม</ion-button>
            </div>
            <ion-button  routerLink="/PageNewRoom">ต่อไป</ion-button>
          </IonRow>

        </ion-card>
      </div>
    </ion-content>
  </ion-page>

</template>
  
  
<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonInput } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonInput
  },
  data() {
    return {
      dormitory: {
        name_room: "",
        add: "",
        phone: "",
      }
    }
  },
  methods: {
    sendData() {
      console.log("sendData active");

      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/dormitory.json", {
        name_room: this.dormitory.name_room,
        add: this.dormitory.add,
        phone: this.dormitory.phone,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      this.clearData();
    },
    clearData() {
      this.dormitory.name_room = "";
      this.dormitory.add = "";
      this.dormitory.phone = "";
    }
    
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

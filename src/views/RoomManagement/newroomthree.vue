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
          <ion-item color="light">
            <ion-card-header>
              <ion-card-title>จำนวนชั้น</ion-card-title>
            </ion-card-header>
          </ion-item>

          <ion-card-content>
            <ion-list>

              <ion-item>
                <ion-label>เลือกประเภทห้องพัก</ion-label>
                <ion-select interface="popover" placeholder="ประเภทห้องพัก">
                  <ion-select-option value="1">ห้องทั่วไป</ion-select-option>
                  <ion-select-option value="2">ห้องแอร์</ion-select-option>
                  <ion-select-option value="3">ห้อง VIP</ion-select-option>
                </ion-select>
              </ion-item>

              <ion-item>
                <ion-row>
                  <div class="counter__section">
                    <ion-button id="decrement" @click="decrement()">-</ion-button>
                    <label>{{ count }}</label>
                    <ion-button id="increment" @click="increment()">+</ion-button>
                  </div>
                </ion-row>
              </ion-item>

              <div className="ion-float-end">
                <ion-button  routerLink="">เพิ่ม</ion-button>
              </div>

            </ion-list>
          </ion-card-content>
        </ion-card>
        <ion-card v-for="i in count" :key="i">
          <ion-card-content>
            <ion-item>
              <ion-label>ห้อง :</ion-label>
              <ion-input v-model="room.room_id"></ion-input>
            </ion-item>
          </ion-card-content>
        </ion-card>

        <ion-card>
          <IonRow>
            <div className="ion-float-end">
              <ion-button routerLink="/newroomfour">ต่อไป</ion-button>
            </div>
          </IonRow>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonInput, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonInput, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton
  },
  data() {
    return {
      count: 0,
      room_id:'',
      room: [ ]
      }

    },

  methods: {
    increment() {
      this.count++;
    },
    decrement() {
      this.count--;
    },
  },
});
</script>
<style>
.counter__section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

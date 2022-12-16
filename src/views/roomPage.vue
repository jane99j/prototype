<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>เพิ่มห้องพัก</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
      <ion-item>
        <ion-label>เลขห้องพัก :</ion-label>
        <ion-input text placeholder="กรอกเลขห้องพัก"></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ชั้น :</ion-label>
        <ion-input text placeholder="กรอกเลขชั้น"></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ตึก :</ion-label>
        <ion-input text placeholder="กรอกชื่อตึก" ></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ราคาห้อง :</ion-label>
        <ion-input number placeholder="กรอกราคาห้องพัก" ></ion-input>
      </ion-item>

      </ion-list>
    </ion-card-content>
    <ion-button expand="block">บันทึก</ion-button>
  </ion-card>

  </template>
  
  <script lang="ts">
    import {  IonCardTitle,IonCard, IonCardContent, IonCardHeader,IonInput, IonItem, IonLabel, IonList,IonButton } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonCardTitle,IonCard, IonCardContent, IonCardHeader,IonInput, IonItem, IonLabel, IonList,IonButton },
    });
  </script>
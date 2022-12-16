<template>
    <ion-card>
    <h1> เพิ่มห้องพัก</h1>
    <ion-list>
      <ion-item>
        <ion-label>เลขห้องพัก</ion-label>
        <ion-input></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ชั้น</ion-label>
        <ion-input placeholder=""></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ตึก</ion-label>
        <ion-input value=""></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ราคาห้อง</ion-label>
        <ion-input value="" :readonly="true"></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label></ion-label>
        <ion-button>บันทึกห้องพัก</ion-button>
      </ion-item>
    </ion-list>
</ion-card>
  </template>
  
  <script lang="ts">
    import { IonInput, IonItem, IonLabel, IonList,IonButton } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonInput, IonItem, IonLabel, IonList,IonButton },
    });
  </script>
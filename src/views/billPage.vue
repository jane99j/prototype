<template>
  
<ion-card>
  <ion-card-header>
    <ion-card-title></ion-card-title>
  </ion-card-header>

  <ion-card-content>
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>ห้อง</ion-col>
        <ion-col>สถานะห้อง</ion-col>
        <ion-col>ค่าน้ำ</ion-col>
        <ion-col>ค่าไฟ</ion-col>
        <ion-col><ion-button>ออกบิลทั้งหมด</ion-button></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-button>รายละเอียด</ion-button></ion-col>
      </ion-row>
    </ion-grid>

  </ion-card-content>
</ion-card>
   
  </template>
  
  <script lang="ts">
    import { IonButton,IonInput,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonButton,IonInput,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow },
    });
  </script>
  
  <style scoped>
    ion-col {
      background-color: #ffffff;
      border: solid 1px rgb(215, 215, 215);
      color: rgb(0, 0, 0);
      text-align: center;
    }
  </style>
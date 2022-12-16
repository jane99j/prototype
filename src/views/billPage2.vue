<template>
    <ion-card>
    <ion-card-header>
      <ion-card-title>รายละเอียดบิล</ion-card-title>

    </ion-card-header>

    <ion-card-content>

      <ion-list>
    <ion-item>
      <ion-label>หมายเลขห้องพัก :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>วัน/เดือน/ปี :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าห้อง :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าน้ำ :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าไฟฟ้า :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าอินเตอร์เน็ต :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าที่จอดรถ :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าอื่นๆ :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ยอดรวม :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    </ion-list>

    </ion-card-content>

    <ion-button fill="clear">พิมพ์</ion-button>
    <ion-button fill="clear">ออกบิล</ion-button>
  </ion-card>
  
  </template>
  
  <script lang="ts">
    import { IonInput, IonItem, IonLabel, IonList,IonButton, IonCard, IonCardContent, IonCardHeader,IonCardTitle } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonInput, IonItem, IonLabel, IonList,IonButton, IonCard, IonCardContent, IonCardHeader,IonCardTitle },
    });
  </script>
  
  <style scoped>
    /* iOS places the subtitle above the title */
    ion-card-header.ios {
      display: flex;
      flex-flow: column-reverse;
    }
  </style>
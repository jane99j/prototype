<template>
    <ion-card>
      <ion-card-header>
        <ion-card-title>ห้อง 101</ion-card-title>
        <ion-card-subtitle></ion-card-subtitle>
      </ion-card-header>
  
      <ion-card-content>
        วัน/เดือน/ปี xx-xx-20xx
      </ion-card-content>
      <ion-card-content>
        ค่าห้อง 4000
      </ion-card-content>
      <ion-card-content>
        ค่าน้ำ 200
      </ion-card-content>
      <ion-card-content>
        ค่าไฟ 1000
      </ion-card-content>
      <ion-card-content>
        ค่าอินเตอร์เน็ต 500
      </ion-card-content>
      <ion-card-content>
        ค่าจอดรถ 100
      </ion-card-content>
      <ion-card-content>
        ค่าซ้อมบำรุง xxx
      </ion-card-content>
  
      <ion-button fill="clear">พิมพ์</ion-button>
      <ion-button fill="clear">ออกบิล</ion-button>
    </ion-card>
  </template>
  
  <script lang="ts">
    import { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonButton, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle },
    });
  </script>
  
  <style scoped>
    /* iOS places the subtitle above the title */
    ion-card-header.ios {
      display: flex;
      flex-flow: column-reverse;
    }
  </style>
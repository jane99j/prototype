<template>
   <ion-card>
    <ion-card-header>
      <ion-card-title>ราคาต่อหน่วยค่าน้ำ/ไฟฟ้า</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
      <ion-item>
        <ion-label>ระบุค่าน้ำต่อหน่วย :</ion-label>
        <ion-input placeholder=""></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>ระบุค่าไฟฟ้าต่อหน่วย :</ion-label>
        <ion-input placeholder=""></ion-input>
      </ion-item>

    </ion-list>

    </ion-card-content>
    <ion-button expand="block">บันทึก</ion-button>
  </ion-card>

  </template>
  
  <script lang="ts">
    import { IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonInput, IonItem, IonLabel, IonList },
    });
  </script>
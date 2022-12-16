<template>
    <h1>ค่าน้ำ</h1>
    <ion-list>
      <ion-item>
        <ion-select placeholder="หน่วยค่าน้ำ">
        <ion-select-option value="apples">5</ion-select-option>
        <ion-select-option value="oranges">10</ion-select-option>
        <ion-select-option value="bananas">15</ion-select-option>
      </ion-select>
      </ion-item>
  
      <ion-item>
        <ion-label>ระบุหน่วยค่าน้ำ</ion-label>
        <ion-input placeholder="หน่วยค่าน้ำ"></ion-input>
      </ion-item>
      <h1>ค่าไฟ</h1>
      <ion-item>
        <ion-label>ระบุหน่วยค่าไฟ</ion-label>
        <ion-input placeholder="หน่วยค่าไฟ"></ion-input>
      </ion-item>

      <ion-item>
        <ion-label></ion-label>
        <ion-button>บันทึก</ion-button>
      </ion-item>
    </ion-list>
  </template>
  
  <script lang="ts">
    import { IonInput, IonItem, IonLabel, IonList } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonInput, IonItem, IonLabel, IonList },
    });
  </script>
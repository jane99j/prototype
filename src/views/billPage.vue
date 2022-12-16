<template>
    <ion-card>
    <h1>รอบเดือน 04-2022</h1>
    <ion-card>
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
        <ion-col>101</ion-col>
        <ion-col>ไม่ว่าง</ion-col>
        <ion-col>20 หน่วย</ion-col>
        <ion-col>50 หน่วย</ion-col>
        <ion-col><ion-button>รายละเอียด</ion-button></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>102</ion-col>
        <ion-col>ไม่ว่าง</ion-col>
        <ion-col>20 หน่วย</ion-col>
        <ion-col>50 หน่วย</ion-col>
        <ion-col><ion-button>รายละเอียด</ion-button></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>103</ion-col>
        <ion-col>ไม่ว่าง</ion-col>
        <ion-col>20 หน่วย</ion-col>
        <ion-col>50 หน่วย</ion-col>
        <ion-col><ion-button>รายละเอียด</ion-button></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>104</ion-col>
        <ion-col>ไม่ว่าง</ion-col>
        <ion-col>20 หน่วย</ion-col>
        <ion-col>50 หน่วย</ion-col>
        <ion-col><ion-button>รายละเอียด</ion-button></ion-col>
      </ion-row>
    </ion-grid>
</ion-card>
</ion-card>
  </template>
  
  <script lang="ts">
    import { IonCol, IonGrid, IonRow } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonCol, IonGrid, IonRow },
    });
  </script>
  
  <style scoped>
    ion-col {
      background-color: #000000;
      border: solid 1px #fff;
      color: #fff;
      text-align: center;
    }
  </style>
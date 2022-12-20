<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ $route.params.id }}</ion-title>
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
    <ion-card-header>
      <ion-card-title>
        <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>A101</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>
</ion-card-title>

      <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>วันที่ทำสัญญา</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>สิ้นสุดสัญญา</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>ค่าเช่า/เดือน</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>ประกันค่าห้อง</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly><ion-button>แก้ไข</ion-button></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-card-title>
</ion-card-title>
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly><ion-button color="danger">ยกเลิกสัญญาเช่า</ion-button></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

</ion-card-header>
    

    <ion-card-content>
    </ion-card-content>
  </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow,} from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,
      IonContent,
      IonHeader,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardTitle
    }
  });
  </script>
  <style scoped>
    ion-img{
        width: 15%;
    }
  </style>

  
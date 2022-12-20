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
    <ion-card-header><ion-img src="assets/1.png"></ion-img>
      <ion-card-title>
        <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>ห้อง A101</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>
</ion-card-title>
      <ion-card-subtitle><ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>ชื่อ</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly>สกุล</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>เบอร์โทร</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col><ion-button>ข้อมูลเพิ่มเติม</ion-button></ion-col>
      </ion-row>
    </ion-grid>




</ion-card-subtitle>
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
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonCol, IonGrid, IonRow,IonImg} from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,
      IonContent,
      IonHeader,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonImg
    }
  });
  </script>
  <style scoped>
    ion-img{
        width: 15%;
    }
  </style>

  
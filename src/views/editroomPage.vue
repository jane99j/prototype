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
                <ion-card-title>แก้ไข้ห้องห้อง</ion-card-title>
        <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>หมายเลขห้อง</ion-input></ion-col>
        <ion-col><ion-input readonly>101</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>ชั้นที่</ion-input></ion-col>
        <ion-col><ion-input readonly>1</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>ตึกที่</ion-input></ion-col>
        <ion-col><ion-input readonly>A1</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>ราคาห้อง</ion-input></ion-col>
        <ion-col><ion-input readonly>4000</ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
      </ion-row>
    </ion-grid>
    <ion-button>แก้ไข</ion-button>
    <ion-button>ล้าง</ion-button>

            </ion-card-header>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonCardHeader, IonCardTitle,IonCol, IonGrid, IonRow,IonButton } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonCard,IonCardHeader, IonCardTitle,IonCol, IonGrid, IonRow,IonButton
    }
  });
  </script>
  

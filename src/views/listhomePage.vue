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
            <ion-card-header><ion-item>
                <ion-row>
                    <ion-card-title>รายการห้องพัก</ion-card-title>  
                </ion-row>
                </ion-item>
                <ion-card-content>
                <ion-grid :fixed="true">
                <ion-row>
                <ion-col size="auto"> <ion-label>ค้นหาห้องพัก</ion-label></ion-col>
                <ion-col size="auto"><ion-searchbar placeholder="ค้นหา หมายเลขห้องพัก"></ion-searchbar></ion-col>
                <ion-col size="auto"><ion-button>ค้นหาห้องพัก</ion-button></ion-col>
                </ion-row>
                </ion-grid>
                </ion-card-content>

                
            </ion-card-header>
          <ion-grid>
            <b><ion-row>
            <ion-col>#</ion-col>
            <ion-col>สถานะ</ion-col>
            <ion-col> </ion-col>
            </ion-row></b>

            <ion-row>
            <ion-col>หมายเลขห้อง</ion-col>
            <ion-col>แสดงสถานะ</ion-col>
            <ion-col><ion-button color="warning" routerLink="/editroomPage" size="small">จัดการห้อง</ion-button></ion-col>
            </ion-row>
            <ion-row>
            <ion-col>หมายเลขห้อง</ion-col>
            <ion-col>แสดงสถานะ</ion-col>
            <ion-col><ion-button color="warning" routerLink="/editroomPage" size="small">จัดการห้อง</ion-button></ion-col>
            </ion-row>
        </ion-grid>
        </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar
    }
  });
  </script>
  
  <style scoped>
    ion-col {
    text-align: center;
    }
  </style>
  
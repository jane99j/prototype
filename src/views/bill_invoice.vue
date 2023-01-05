<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>ใบแจ้งหนี้</ion-title>
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
        <ion-card-header color="primary">
          <ion-card-title>ใบแจ้งหนี้</ion-card-title>
        </ion-card-header>
      
        <ion-card-content>
        <ion-card>
          
      </ion-card>
      <ion-toolbar>

          </ion-toolbar>
          <ion-grid>
            <b><ion-row>
            <ion-col>หมายเลขห้อง</ion-col>
            <ion-col>สถานะ</ion-col>
            <ion-col>จำนวนเงิน</ion-col>
            <ion-col></ion-col>
            </ion-row></b>
  
            <ion-row>
            <ion-col>101</ion-col>
            <ion-col>ยังไม่ชำระ</ion-col>
            <ion-col>5,000</ion-col>
            <ion-col><ion-button color="warning" routerLink="/billdetails" size="small">รายระเอียด</ion-button></ion-col>
            </ion-row>
            
            <ion-row>
            <ion-col>102</ion-col>
            <ion-col>ยังไม่ชำระ</ion-col>
            <ion-col>5,000</ion-col>
            <ion-col><ion-button color="warning" routerLink="/billdetails" size="small">รายระเอียด</ion-button></ion-col>
            </ion-row> 
          </ion-grid>
  
    </ion-card-content>
  </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButton,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,
      IonContent,
      IonHeader,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,
      IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow,IonButton
    }
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
  
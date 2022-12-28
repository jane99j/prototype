<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>เพิ่มห้องพัก</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>
      
        <div id="container">
        <center>
          <ion-card>
            <ion-card-header >     
                    <ion-card-title>ตั้งค่าเสร็จเรียบร้อย</ion-card-title>
                </ion-card-header>
            <IonRow>
            <div>
            <ion-button routerLink="/homePage">เริ่มการติดตั้ง</ion-button>
        
            </div> 
            </IonRow>
        </ion-card>
        </center>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton} from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton
    }
  });
  </script>
  
  <style>
  ion-segment {
    --background: #54dc98;
    color: blueviolet;
  }
</style>

  
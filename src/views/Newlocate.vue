<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>เพิ่มหอพัก</ion-title>
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
            <ion-item color="light">
                  <ion-card-header >
                      
                      <ion-card-title>ตั้งค่าหอพัก</ion-card-title>
                  </ion-card-header>
              </ion-item>
      <ion-card-content>
        <ion-list>
        <ion-item>
          <ion-label>ชื่อหอพัก</ion-label>
          <ion-input text placeholder="ระบุชื่อหอพัก"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>ที่อยู่หอพัก</ion-label>
          <ion-input text placeholder="ระบุที่อยู่"></ion-input>
        </ion-item>

        <ion-item>
          <ion-label>เบอร์ไทรศัพท์</ion-label>
          <ion-input text placeholder="ระบุเบอร์โทรศัพท์"></ion-input>
        </ion-item>
      </ion-list>     
      </ion-card-content>
    </ion-card>
    <ion-card>
      <IonRow>
      <div className="ion-float-end">
        <ion-button routerLink="/newroomeOne">ต่อไป</ion-button>
      </div> 
      </IonRow>
    </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton
    }
  });
  </script>
  <style>
  </style>
    
<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title></ion-title>
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
                      
                      <ion-card-title>กำหนดราคาค่าห้องพัก</ion-card-title>
                  </ion-card-header>
              </ion-item>
      <ion-card-content>
        <ion-list>
          <ion-item>
            <ion-label>เลือกประเภทห้องพัก</ion-label>
          <ion-select interface="popover" placeholder="ประเภทห้องพัก">
            <ion-select-option value="apples">ห้องพักประเภท A</ion-select-option>
            <ion-select-option value="oranges">ห้องพักประเภท B</ion-select-option>
            <ion-select-option value="bananas">ห้องพักประเภท C</ion-select-option>
          </ion-select>
        </ion-item>
        </ion-list>
  
        <ion-list>
        <ion-item>
          <ion-label>กำหนดราคาประเภทห้อง</ion-label>
          <ion-input text placeholder="ระบุจำนวนเงิน"></ion-input>
        </ion-item>
      </ion-list>
        
  
      </ion-card-content>
    </ion-card>
    <ion-card>
      <IonRow>
      <div className="ion-float-end">
        <ion-button color="warning">แก้ไข</ion-button>
        <ion-button color="success">บันทึก</ion-button>
      </div> 
      </IonRow>
    </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonInput,IonLabel,IonSelectOption,IonSelect,IonList,IonItem,IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
        IonInput,IonLabel, IonSelectOption,IonSelect,IonList,IonItem,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle
    }
  });
  </script>
  <style>
  </style>
    
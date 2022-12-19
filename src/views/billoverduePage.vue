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
            <ion-label>บิลค้าง</ion-label>
        <center>
          <ion-card>
          <ion-grid :fixed="false">
            <ion-row>
                <ion-col>เลขบิล</ion-col>
                <ion-col>สถานะ</ion-col>
                <ion-col>วันที่</ion-col>
                <ion-col>ห้อง</ion-col>
                <ion-col>ยอดเงิน</ion-col>
                <ion-col></ion-col>
            </ion-row>
            </ion-grid>
            <ion-grid>
            <ion-row>
                <ion-col>...</ion-col>
                <ion-col>...</ion-col>
                <ion-col>...</ion-col>
                <ion-col>...</ion-col>
                <ion-col>...</ion-col>
                <ion-col>
                    <ion-button slot="" size="small">ดูรายละเอียด</ion-button>
                </ion-col>
            </ion-row>
            </ion-grid>
        </ion-card>
    </center>
        </ion-card>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonGrid,IonRow,IonCol,IonButton,IonLabel } from '@ionic/vue';
  import { ellipse } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonCard,IonGrid,IonRow,IonCol,IonButton,IonLabel
    },
  });
  </script>
  
  <style scoped>
    ion-label {margin-left: 5%;}

  

  
 
  </style>
  
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
                <ion-card-title>การชำระเงิน</ion-card-title>
            </ion-card-header>
        </ion-card>
        <center>
          <ion-card color="light">
          <ion-grid :fixed="false">
            <b>
            <ion-row>
                <ion-col>เลขบิล</ion-col>
                <ion-col>ห้อง</ion-col>
                <ion-col>วันที่</ion-col>
                <ion-col>จำนวนเงิน</ion-col>
                <ion-col>จ่าย</ion-col>
            </ion-row>
          </b>
            </ion-grid>
            <ion-grid>
            <ion-row>
                <ion-col>12425</ion-col>
                <ion-col>101</ion-col>
                <ion-col>31/11/2565</ion-col>
                <ion-col>5,000</ion-col>
                <ion-col>5,000</ion-col>
            </ion-row>
            <ion-row>
                <ion-col>25664</ion-col>
                <ion-col>102</ion-col>
                <ion-col>31/11/2565</ion-col>
                <ion-col>5,000</ion-col>
                <ion-col>5,000</ion-col>
            </ion-row>
            </ion-grid>
        </ion-card>
    </center>

        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonGrid,IonRow,IonCol } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonGrid,IonRow,IonCol
    },
});
  </script>
  
  <style scoped>
    ion-label {margin-left: 5%;}

    ion-icon{
    font-size: 300%;
    float: right ;
    margin-top: 7px;
    
  } 
  ion-row{
    font-size:medium;
  }
  </style>
  
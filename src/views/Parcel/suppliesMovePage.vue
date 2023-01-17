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
        </div>
        
    <ion-card>
    <ion-card-content>

        <ion-card>
        <ion-card-header>
        <ion-card-title>รายละเอียดพัสดุ</ion-card-title>
        </ion-card-header>

        <ion-card-content>
        <ion-grid>

        <ion-row>
        <ion-col><h2>ชื่อห้องพัก</h2></ion-col>
        <ion-col><ion-input readonly placeholder="ชื่อห้องพัก"></ion-input></ion-col>
        </ion-row>
        <ion-row>
        <ion-col><h2>ชื่อผู้รับ</h2></ion-col>
        <ion-col><ion-input readonly placeholder="ชื่อผู้รับ"></ion-input></ion-col>
        </ion-row>
        <ion-row>
        <ion-col><h2>หมายเลขพัสดุ</h2></ion-col>
        <ion-col><ion-input readonly placeholder="หมายเลขพัสดุ"></ion-input></ion-col>
        </ion-row>
        <ion-row>
        <ion-col><h2>บริษัทขนส่ง</h2></ion-col>
        <ion-col><ion-input readonly placeholder="บริษัทขนส่ง"></ion-input></ion-col>
        </ion-row>
        <ion-row>
        <ion-col>รูปภาพพัสดุ</ion-col>
        <ion-col><ion-input readonly placeholder="รูปภาพพัสดุ"></ion-input></ion-col>
        </ion-row>

        </ion-grid>

        <ion-button color="success" routerLink="/suppliesDelPage">นำจ่ายพัสดุ</ion-button>
        <ion-button color="danger">ลบพัสดุ</ion-button>
        </ion-card-content>

        </ion-card>

    </ion-card-content>
    </ion-card>
      </ion-content>
    </ion-page>

    </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {  IonButton ,IonInput,IonCol, IonGrid, IonRow,IonCardTitle ,IonCardHeader,IonCard, IonCardContent,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonInput,IonButton ,
      IonToolbar,IonCard, IonCardContent ,IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow 
    }
  });
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  ion-card{
    width: auto;
    min-height: 92vh;
    background-color: rgb(250, 250, 250);
  }
  ion-card ion-card{
    width: 90%;
    min-height: auto;
    margin-left: 5%;
    margin-top: 3%;
    border-radius: 10px;
  }
  ion-col {
    background-color: #ffffff;
    border: solid 1px rgb(228, 228, 228);
    color: rgb(0, 0, 0);
    text-align: center;
  }
  ion-button{
    float: right    ;
  }
  </style>
  
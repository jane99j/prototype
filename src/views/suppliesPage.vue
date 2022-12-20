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
    <ion-button>พัสดุค้างจำหน่าย</ion-button>
    <ion-button fill="outline">พัสดุที่นำหน่ายแล้ว</ion-button>
    <ion-button routerLink="/suppliesAddPage">เพิ่มพัสดุ</ion-button>
    </ion-card-content>

    <div>
    <ion-card-content>
    <ion-grid :fixed="true">
    <ion-row>
      <ion-col size="80px"> <ion-label>ค้นหาพัสดุ</ion-label></ion-col>
      <ion-col size="auto"><ion-searchbar placeholder="ค้นหา ชื่อผู้รับ/ชื่อห้อง/เลขพัสดุ"></ion-searchbar></ion-col>
      <ion-col size="auto"><ion-button>ค้นหาพัสดุ</ion-button></ion-col>
    </ion-row>
    </ion-grid>
    </ion-card-content>
    </div>
    <ion-card>
    </ion-card>
    </ion-card>
      </ion-content>
    </ion-page>

    </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {  IonLabel,IonCol, IonGrid, IonRow,IonSearchbar,IonButton,IonCard, IonCardContent,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,
      IonToolbar,IonCard, IonCardContent,IonButton,IonSearchbar,
      IonCol, IonGrid, IonRow,IonLabel
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
    width: 98.5%;
    min-height: 92vh;
    background-color: rgb(250, 250, 250);
  }
  ion-card ion-card {
    min-height: 68vh;
    width: 88%;
    margin-left: 6%;
    border-radius:20px;
  }

  ion-card-content{
    margin-left: auto;
  }
  ion-label{
    font-size: 18px;
    margin-left: 5px;
    padding-top: 10px;
    float: left;
  }
  ion-searchbar{
    width: 103%;
    margin-left: 25%px;
    margin-bottom: auto;
  }div ion-card ion-grid ion-row ion-col ion-button{
    margin-top: 11px;

  }
  </style>
  
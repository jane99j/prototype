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

    <ion-list>
    <ion-item>
      <ion-label>ชื่อห้อง</ion-label>
      <ion-input placeholder="กรอกรายชื่อห้องบนพัสดุ"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ชื่อผู้รับ</ion-label>
      <ion-input placeholder="กรอกรายชื่อผู้รับ"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>หมายเลขพัสดุ</ion-label>
      <ion-input placeholder="กรอกหมายเลขพัสดุ"></ion-input>
    </ion-item>

    <ion-select placeholder="เลือกบริษัทขนส่ง">
        <ion-select-option value="ThailandPost">ไปรษณีย์ไทย</ion-select-option>
        <ion-select-option value="KerryExpress">Kerry Express</ion-select-option>
        <ion-select-option value="J&TEXPRESS">J&T EXPRESS</ion-select-option>
        <ion-select-option value="FLASHEXPRESS">FLASH EXPRESS</ion-select-option>
        <ion-select-option value="BESTEXPRESS">BEST EXPRESS</ion-select-option>
        <ion-select-option value="NinjaVan">Ninja Van</ion-select-option>
    </ion-select>
    

    </ion-list>
    <ion-button expand="block" routerLink="/suppliesPage">บันทึกข้อมูล</ion-button>
    </ion-card-content>
    </ion-card>
      </ion-content>
    </ion-page>

    </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButton,IonSelect,IonSelectOption,IonInput, IonItem, IonLabel, IonList,IonCard, IonCardContent,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButton,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonSelectOption,
      IonToolbar,IonCard, IonCardContent,IonInput, IonItem, IonLabel, IonList,IonSelect
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
  </style>
  
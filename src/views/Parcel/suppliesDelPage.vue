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
        <ion-card-title>นำจ่ายพัสดุ</ion-card-title>
        </ion-card-header>

        <ion-card-content>

        <ion-grid>

        <ion-row>
        <ion-col size="2"><h2>ผู้รับพัสดุ</h2></ion-col>
        <ion-col> 
        <ion-item>
        <ion-checkbox slot="start"></ion-checkbox>
        <ion-label>เจ้าของพัสดุ</ion-label>
        </ion-item>
        </ion-col>
        <ion-col></ion-col>
        </ion-row>

        <ion-row>
        <ion-col size="2"></ion-col>
        <ion-col> 
        <ion-item>
        <ion-checkbox slot="start"></ion-checkbox>
        <ion-label>รับแทน</ion-label>
        </ion-item>
        </ion-col>
        <ion-col></ion-col>
        </ion-row>

        <ion-row>
        <ion-col size="2"></ion-col>
        <ion-col> 
        <ion-item>
        <ion-input placeholder="ชื่อ-สกุล"></ion-input>
        </ion-item>
        <ion-item>
        <ion-input placeholder="เบอร์โทรศัพท์"></ion-input>
        </ion-item>
        </ion-col>
        <ion-col></ion-col>
        </ion-row>
        </ion-grid>

        <ion-button color="success" routerLink="/suppliesPage">นำจ่ายพัสดุ</ion-button>
        <ion-button color="danger" routerLink="/suppliesPage">ยกเลิก</ion-button>
        </ion-card-content>

        </ion-card>

    </ion-card-content>
    </ion-card>
      </ion-content>
    </ion-page>

    </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButton,IonInput,IonCheckbox,IonItem,IonLabel,IonCol, IonGrid, IonRow,IonCardTitle ,IonCardHeader,IonCard, IonCardContent,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,
      IonToolbar,IonCard, IonCardContent ,IonCardHeader,IonCardTitle,
      IonCol, IonGrid, IonRow,IonCheckbox,IonItem,IonLabel,IonInput,IonButton
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
    color: #ffffff;
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
    width: 80%;
    min-height: auto;
    margin-left: 10%;
    margin-top: 3%;
    border-radius: 10px;
  }
  ion-col {
    background-color: #ffffff;
    color: rgb(0, 0, 0);
    text-align: center;
    align-items: center;
  }
  h2{
    font-size: 18px;
    padding-top: 9%;
  }
  ion-input{
    display: flex;
  }
  ion-button{
    float: right    ;
  }
  
  </style>
  
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
        <ion-card-title>ผู้รับพัสดุ</ion-card-title>
        </ion-card-header>

        <ion-card-content>

        <ion-list>

          <ion-item>
            <ion-input readonly>ห้อง {{ $route.params.room2 }}</ion-input>
          </ion-item>

          <ion-item>
            <ion-input readonly>ชื่อ {{ $route.params.name2 }}</ion-input>
          </ion-item>

          <ion-item>
            <ion-input readonly>หมายเลขพัสดุ {{ $route.params.supplies2 }}</ion-input>
          </ion-item>

        </ion-list>

        <ion-item>
        <ion-label>เลือกผู้รับพัสดุ</ion-label>
        <ion-select placeholder="">
        <ion-select-option value="owner">เจ้าของ</ion-select-option>
        <ion-select-option value="agent">รับแทน</ion-select-option>
        </ion-select>
        </ion-item>


        <ion-list>

      <ion-item>
      <ion-input placeholder="ชื่อ-สกุล"></ion-input>
    </ion-item>
    
    <ion-item>
      <ion-input placeholder="เบอร์โทรศัพท์"></ion-input>
    </ion-item>

      </ion-list>


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
  import { IonSelectOption,IonSelect,IonInput,IonItem,IonList,IonButton,IonLabel,IonCardTitle ,IonCardHeader,IonCard, IonCardContent,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,
      IonToolbar,IonCard, IonCardContent ,IonCardHeader,IonCardTitle,
      IonLabel,IonList,IonItem,IonButton,IonInput,
      IonSelectOption,IonSelect,
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
  }
  ion-card ion-card{
    width: 80%;
    min-height: auto;
    margin-left: 10%;
    margin-top: 3%;
    border-radius: 10px;
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
  
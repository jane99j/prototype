<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>การชำระสำเร็จ</ion-title>
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
        <ion-card-header color="success">
          <ion-card-title>การชำระสำเร็จ</ion-card-title>
        </ion-card-header>
      
        <ion-card-content>
        <ion-card>
          
      </ion-card>
      <ion-toolbar>
          <ion-card>
            <ion-row>
            <ion-item>
              <ion-select interface="popover" placeholder="เดือน" slot="end">
              <ion-select-option value="apples">ต.ค</ion-select-option>
              <ion-select-option value="oranges">พ.ย</ion-select-option>
              <ion-select-option value="bananas">ธ.ค</ion-select-option>
            </ion-select>
            </ion-item>
            
            <ion-item>
            <ion-select interface="popover" placeholder="เลือกชั้น">
                <ion-select-option value="apples">ชั้นที่1</ion-select-option>
                <ion-select-option value="oranges">ชั้นที่2</ion-select-option>
                <ion-select-option value="bananas">ชั้นที่3</ion-select-option>
            </ion-select>
            </ion-item>
            
        </ion-row>
          </ion-card>
          </ion-toolbar>
          <ion-grid>
            <b><ion-row>
            <ion-col>หมายเลขห้อง</ion-col>
            <ion-col>สถานะ</ion-col>
            <ion-col>จำนวนเงิน</ion-col>
            <ion-col></ion-col>
            </ion-row></b>
  
            <ion-row>
            <ion-col>105</ion-col>
            <ion-col><ion-badge color="success">ชำระแล้ว</ion-badge><p>01/12/65</p></ion-col>
            <ion-col>5,000</ion-col>
            <ion-col><ion-button color="warning" routerLink="/successfulPaymentTwo" size="small">รายระเอียด</ion-button></ion-col>
            </ion-row> 

            <ion-row>
            <ion-col>106</ion-col>
            <ion-col><ion-badge color="success">ชำระแล้ว</ion-badge><p>04/12/65</p></ion-col>
            <ion-col>5,000</ion-col>
            <ion-col><ion-button color="warning" routerLink="/successfulPaymentTwo" size="small">รายระเอียด</ion-button></ion-col>
            </ion-row> 
          </ion-grid>
  
    </ion-card-content>
  </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButton,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow,IonBadge,IonSelect,IonSelectOption} from '@ionic/vue';

  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,
      IonContent,
      IonHeader,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,
      IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow,IonButton,IonBadge,IonSelect,IonSelectOption
    }
  });
  </script>
  
  <style scoped>
  ion-col {
        background-color: #ffffff;
        border: solid 1px rgb(215, 215, 215);
        color: rgb(0, 0, 0);
        text-align: center;
      }
  ion-badge {
      --background: rgb(109, 109, 109);
      --color: rgb(255, 255, 255);
      --padding-end: 20px;
      --padding-start: 20px;
      --min-width:var(--min-width)
      
      }
  </style>
  
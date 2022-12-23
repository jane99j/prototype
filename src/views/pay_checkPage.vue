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
        <ion-card-header>
          <ion-card>
            <ion-row>
              <ion-col><b><h4>เช็คการจ่าย</h4></b></ion-col>
            </ion-row>
          </ion-card>
        </ion-card-header>
    
        <ion-card>
          <ion-row>
              <ion-button routerLink="/billoverduePage">บิลทั่วไป</ion-button>
              <ion-button routerLink="/pay_checkPage">บิลค้างชำระ</ion-button> 
              <ion-searchbar  placeholder="หมายเลขห้องพัก"></ion-searchbar>
              <ion-button>ค้นหาห้องพัก</ion-button>   
          </ion-row> 
        <ion-toolbar>
          <ion-buttons :collapse="true" slot="end">
            <ion-button>เลือกทั้งหมด</ion-button>
          </ion-buttons>
        </ion-toolbar>
        <ion-grid>
          <b><ion-row>
          <ion-col>#</ion-col>
          <ion-col>หมายเลขห้อง</ion-col>
          <ion-col>ยอดเงิน</ion-col>
          <ion-col></ion-col>
          </ion-row></b>

          <ion-row>
          <ion-col><ion-checkbox></ion-checkbox></ion-col>
          <ion-col>101</ion-col>
          <ion-col>5,000</ion-col>
          <ion-col><ion-button color="warning" routerLink="/paychckPage" size="small">จัดการจ่าย</ion-button></ion-col>
          </ion-row>
          <ion-row>
          <ion-col><ion-checkbox></ion-checkbox></ion-col>
          <ion-col>102</ion-col>
          <ion-col>5,000</ion-col>
          <ion-col><ion-button color="warning" routerLink="/paychckPage" size="small">จัดการจ่าย</ion-button></ion-col>
          </ion-row> 
        </ion-grid>
        </ion-card>

      <ion-grid>
        <ion-row class="ion-justify-content-end">
          <ion-col size="9">
          </ion-col>
          <ion-col size="3">
            <ion-button  routerLink="">จ่ายแล้ว</ion-button>
          </ion-col>
        </ion-row>
      </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton,IonCol,IonGrid} from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonCol,IonGrid
  }
});
</script>

<style scoped>
  ion-col {
  text-align: center;
  }
  ion-searchbar{
    width: 20%; 
    

  }
</style>

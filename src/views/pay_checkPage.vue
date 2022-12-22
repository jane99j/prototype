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
          <ion-grid>
            <ion-row>
              <ion-col><b><h3>เช็คการจ่าย</h3></b></ion-col>
              <ion-col offset="4" ><ion-searchbar placeholder="ค้นหา หมายเลขห้องพัก"></ion-searchbar></ion-col>
              <ion-col><ion-button>ค้นหาห้องพัก</ion-button></ion-col>
            </ion-row>
          </ion-grid>
        </ion-card-header>
    
        <ion-card>
        <ion-toolbar>
          <ion-title>Title</ion-title>
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
          <ion-col><ion-button color="warning" routerLink="/editroomPage" size="small">จัดการจ่าย</ion-button></ion-col>
          </ion-row> 
        </ion-grid>
        </ion-card>

      <ion-grid>
        <ion-row class="ion-justify-content-end">
          <ion-col size="8">
          </ion-col>
          <ion-col size="4">
            <ion-button  routerLink="/editroomPage">จ่ายแล้ว</ion-button>
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
</style>

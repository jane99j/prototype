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
    <ion-card-title></ion-card-title>
  </ion-card-header>

  <ion-card-content>
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>ห้อง</ion-col>
        <ion-col>สถานะห้อง</ion-col>
        <ion-col>ค่าน้ำ</ion-col>
        <ion-col>ค่าไฟ</ion-col>
        <ion-col><ion-button>ออกบิลทั้งหมด</ion-button></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-input readonly></ion-input></ion-col>
        <ion-col><ion-button href="billPage2">รายละเอียด</ion-button></ion-col>
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
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow } from '@ionic/vue';

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
    IonInput,
    IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow
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
</style>

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
      <ion-card-title>เพิ่มห้องพัก</ion-card-title>
    </ion-card-header>

    <ion-card-content>
      <ion-list>
      <ion-item>
        <ion-label>เลขห้องพัก :</ion-label>
        <ion-input text placeholder="กรอกเลขห้องพัก"></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ชั้น :</ion-label>
        <ion-input text placeholder="กรอกเลขชั้น"></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ตึก :</ion-label>
        <ion-input text placeholder="กรอกชื่อตึก" ></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>ราคาห้อง :</ion-label>
        <ion-input number placeholder="กรอกราคาห้องพัก" ></ion-input>
      </ion-item>

      </ion-list>
    </ion-card-content>
    <ion-button expand="block" routerLink="/listhomePage">บันทึก</ion-button>
  </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton
  }
});
</script>

  
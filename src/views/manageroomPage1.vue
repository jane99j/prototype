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
    <center>
    <ion-card-header>
      <ion-card-title>จัดการห้องพัก</ion-card-title>
    </ion-card-header>
    <ion-card-content>
    <ion-list>
    <ion-item>
      <ion-label>หมายเลขห้องพัก</ion-label>
    <ion-input readonly></ion-input>
    </ion-item>
    </ion-list>
     
      <ion-button color="success" routerLink="/AgreementPage">ทำสัญญา</ion-button>
      <ion-button color="warning" routerLink="/editroomPage">จัดการห้องพัก</ion-button>

    </ion-card-content>
  </center>
  </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonList,IonInput, IonItem, IonLabel,IonButton,IonCard, IonCardContent, IonCardHeader, IonCardTitle  } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonList,IonInput, IonItem, IonLabel,IonButton,IonCard, IonCardContent, IonCardHeader, IonCardTitle 
  }
});
</script>

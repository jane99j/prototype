<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>เพิ่มหอพัก</ion-title>
      </ion-toolbar>
    </ion-header>
    
    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">เพิ่มหอพัก</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
   <ion-card>
    <ion-card-header>
      <ion-card-title>กำหนดน้ำไฟ</ion-card-title>
    </ion-card-header>
    
    <ion-card-content>
      <ion-label>ราคาต่อหน่วยค่าน้ำ/ไฟฟ้า</ion-label>
      <ion-list>
      <ion-item>
        <ion-label>ค่าน้ำต่อหน่วย :</ion-label>
        <ion-input placeholder=""></ion-input>
      </ion-item>

      <ion-item>
        <ion-label>ค่าไฟฟ้าต่อหน่วย :</ion-label>
        <ion-input placeholder=""></ion-input>
      </ion-item>

    </ion-list>

    </ion-card-content>
    <IonRow>
    <div className="ion-float-end">
      <ion-button routerLink="/newroometwo">ต่อไป</ion-button>
    </div> 
    </IonRow>
  </ion-card>
</div>
    </ion-content>
  </ion-page>

  </template>
  
  <script lang="ts">
    import { IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonInput, IonItem, IonLabel, IonList,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonInput, IonItem, IonLabel, IonList,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar },
    });
  </script>
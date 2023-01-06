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
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <ion-card>
          <ion-item color="light">
              <ion-card-header >
                  <ion-card-title>จำนวนชั้น</ion-card-title>
              </ion-card-header>
          </ion-item>
          
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-label>จำนวนชั้น *</ion-label>
        <ion-select interface="popover" placeholder="เลือกจำนวนชั้น">
          <ion-select-option value="apples">1</ion-select-option>
          <ion-select-option value="oranges">2</ion-select-option>
          <ion-select-option value="bananas">3</ion-select-option>
        </ion-select>
      </ion-item>
  
      <ion-item>
        <ion-label>จำนวนห้องชั้นที่1 :</ion-label>
        <ion-input text placeholder=""></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>จำนวนห้องชั้นที่2 :</ion-label>
        <ion-input text placeholder="" ></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>จำนวนห้องชั้นที่3 :</ion-label>
        <ion-input number placeholder="" ></ion-input>
      </ion-item>

      </ion-list>
    </ion-card-content>
  </ion-card>
  <ion-card>
    <IonRow>
    <div className="ion-float-end">
      <ion-button routerLink="/newroomfour">ต่อไป</ion-button>
    </div> 
    </IonRow>
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

  
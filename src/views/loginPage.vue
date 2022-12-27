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
        <ion-grid>
    <ion-row>
      <ion-col></ion-col>
      <ion-col> <ion-card>
    <ion-card-header>
      <ion-card-title><center>เข้าสู่ระบบ</center></ion-card-title>
      <ion-card-subtitle><ion-item>
    <ion-label position="floating">บัญชีผู้ใช้</ion-label>
    <ion-input placeholder="กรอกบัญชีผู้ใช้"></ion-input>
  </ion-item></ion-card-subtitle>
    </ion-card-header>

    <ion-card-content>
      <ion-item>
    <ion-label position="floating">รหัสผ่าน</ion-label>
    <ion-input type="password"></ion-input>
  </ion-item>
    </ion-card-content>
<center><ion-button fill="clear">เข้าสู่ระบบ</ion-button>
    <ion-button fill="clear">สมัครสมาชิก</ion-button></center>
    
  </ion-card>
</ion-col>
      <ion-col></ion-col>
    </ion-row>
  </ion-grid>
       
        
        
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonCol, IonGrid, IonRow } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonInput, IonItem, IonLabel, IonCol, IonGrid, IonRow
  }
});
</script>

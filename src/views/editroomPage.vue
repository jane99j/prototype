<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>แก้ไขห้องพัก</ion-title>
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
                    
                    <ion-card-title>กำหนดการชำระ</ion-card-title>
                </ion-card-header>
            </ion-item>
    <ion-card-content>
      <ion-list>
        <ion-item>
        <ion-text>เลขห้องพัก</ion-text>
        </ion-item>

        <ion-item>
          <ion-label>ราคาห้อง</ion-label>
        <ion-select interface="popover" placeholder="เลือกเรท">
          <ion-select-option value="apples">ห้องพักประเภท A</ion-select-option>
          <ion-select-option value="oranges">ห้องพักประเภท B</ion-select-option>
          <ion-select-option value="bananas">ห้องพักประเภท C</ion-select-option>
        </ion-select>
      </ion-item>
        
      </ion-list>
        <ion-button routerLink="">บันทึก</ion-button>
        <ion-button routerLink="">ล้าง</ion-button>
    </ion-card-content>
  </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton,IonList } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonList
  }
});
</script>
<style>
</style>
  
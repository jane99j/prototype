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
    <ion-card-content>
      <ion-card-title>กำหนดการชำระ</ion-card-title>
      <ion-list>
        <ion-item>
          <ion-label>วันสุดท้ายของการชำระเงิน</ion-label>
        <ion-select interface="popover" placeholder="เลือกวัน">
          <ion-select-option value="apples">ทุกวันที่3</ion-select-option>
          <ion-select-option value="oranges">ทุกวันที่5</ion-select-option>
          <ion-select-option value="bananas">ทุกวันที่6</ion-select-option>
        </ion-select>
      </ion-item>
      </ion-list>

      <ion-list>
      <ion-item>
        <ion-label>กำหนดค่าปรับ</ion-label>
        <ion-input text placeholder="ระบุจำนวนเงิน">บาท</ion-input>
      </ion-item>
    </ion-list>
    <ion-item>
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>ต้องการ</ion-label>
    </ion-item>
    <ion-item>
      <ion-checkbox slot="start"></ion-checkbox>
      <ion-label>ไม่ต้องการ</ion-label>
    </ion-item>
      
      


    </ion-card-content>
  </ion-card>
  <ion-card>
    <IonRow>
    <div className="ion-float-end">
      <ion-button routerLink="/newroomeOne">ต่อไป</ion-button>
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
<style>
</style>
  
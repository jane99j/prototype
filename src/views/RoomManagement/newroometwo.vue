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
                    <ion-card-title>บัญชีธนาคร</ion-card-title>
                    <ion-label>บัญชีธนาคร/ไฟฟ้า</ion-label>
                </ion-card-header>
            </ion-item>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-label>ธนาคร</ion-label>
        <ion-select interface="popover" placeholder="เลือกธนาคาร">
          <ion-select-option value="apples">กรุงเทพ</ion-select-option>
          <ion-select-option value="oranges">กสิกรไทย</ion-select-option>
          <ion-select-option value="bananas">กรุงไทย</ion-select-option>
        </ion-select>
      </ion-item>
  
      <ion-item>
        <ion-label>ชื่อบัญชี</ion-label>
        <ion-input text placeholder=""></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>เลขบัญชี</ion-label>
        <ion-input text placeholder="" ></ion-input>
      </ion-item>
      </ion-list>
    </ion-card-content>  
  </ion-card>

  <ion-card>
           <ion-item color="light">
                <ion-card-header >
                    <ion-card-title>ขั้นตอนการแจ้งการชำระเงิน</ion-card-title>
                    <ion-label>ข้อความรจะแสดงพร้อมชื่อบัญชีธนาคารในบิล/ไฟฟ้า</ion-label>
                </ion-card-header>
            </ion-item>
    <ion-card-content>
      <ion-item>
        <ion-label>ข้อความ</ion-label>
        <ion-textarea placeholder="กรอกข้อความ"></ion-textarea>
      </ion-item>
    </ion-card-content>  

  </ion-card>

  <ion-card>
    <IonRow>
    <div className="ion-float-end">
      <ion-button routerLink="/newroomthree">ต่อไป</ion-button>
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

  
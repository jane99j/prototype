

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>รับเงิน</ion-title>
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
        <ion-card color="light">
          <ion-item color="primary">
              <h4><ion-text>ห้อง 101</ion-text></h4>
                  
          </ion-item>
          
        <ion-card>
          <ion-item>
              <h4><ion-text  color="danger">ค้างชำระ</ion-text>
                  <ion-text color="danger" slot="end"> 5,000 </ion-text></h4>
          </ion-item>
          </ion-card>
        <ion-card>
              <ion-list>
              <ion-item color="light">
                  <h2><ion-label>รับเงิน</ion-label></h2>
              </ion-item>
              <ion-item>
                  <ion-label>จำนวนเงิน</ion-label>
                  <ion-input placeholder="ระบุจำนวนเงิน"></ion-input>
              </ion-item>

              <ion-list>
                  <ion-item>
                  <ion-label>ชำระเงิน</ion-label>
                  <ion-select interface="popover" placeholder="เลือกการชำระ">
                  <ion-select-option value="apples">เงินสด</ion-select-option>
                  <ion-select-option value="oranges">โอนจ่าย</ion-select-option>
                  </ion-select>
              </ion-item>

              <ion-item  color="light">
                  <p><ion-text>รับเงินทั้งหมด 5,000</ion-text></p>
              </ion-item>
              
                  <ion-button expand="block" color="success"  routerLink="/bill_invoice">รับเงิน</ion-button>
              </ion-list>
          </ion-list>
              
          </ion-card >
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonList, IonItem, IonSelect, IonSelectOption,IonText,IonButton  } from '@ionic/vue';

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
    IonCard,IonList, IonItem, IonSelect, IonSelectOption ,IonText,IonButton
  }
});
</script>



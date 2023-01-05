

<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>ใบแจ้งหนี</ion-title>
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
            <ion-list>
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
                <ion-item><label>รับเงินทั้งหมด</label></ion-item>
                    
                </ion-list>

               
            </ion-list>
                
            </ion-card >
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonList, IonItem, IonSelect, IonSelectOption  } from '@ionic/vue';
  
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
      IonCard,IonList, IonItem, IonSelect, IonSelectOption 
    }
  });
  </script>

  

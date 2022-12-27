<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>เพิ่มห้องพัก</ion-title>
        </ion-toolbar>
      </ion-header>
      
      <ion-content :fullscreen="true">
        <ion-header collapse="condense">
          <ion-toolbar>
            <ion-title size="large">{{ $route.params.id }}</ion-title>
          </ion-toolbar>
        </ion-header>
      
        <div id="container">
          <ion-card>
            <ion-item color="light">
                <ion-card-header >
                    
                    <ion-card-title>กำหนดราค่าห้อง</ion-card-title>
                </ion-card-header>
            </ion-item>

            <ion-card-content>
              <ion-item>
                <ion-label>ราคาห้องพัก:</ion-label>
                <ion-input text placeholder="ระบุห้องพัก" ></ion-input>
              </ion-item>
            </ion-card-content>
          </ion-card><br>

          <ion-card>
            <ion-radio-group  value="turtles">
                <ion-item color="light">
                  <ion-card-title>เลือกสถานะห้อง:</ion-card-title>
                </ion-item>
                <ion-item>
                  <ion-label>ว่าง</ion-label>
                  <ion-radio slot="end" value="dogs"></ion-radio>
                </ion-item>

                <ion-item>
                  <ion-label>ไม่ว่าง</ion-label>
                  <ion-radio slot="end" value="cats"></ion-radio>
                </ion-item>
              </ion-radio-group>
          </ion-card>

          <ion-card>
            <IonRow>
            <div className="ion-float-end">
            <ion-button routerLink="/newroomfinish">บันทึก</ion-button>
            </div> 
            </IonRow>
        </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonLabel,IonButton } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonLabel,IonButton
    }
  });
  </script>
  
  <style>
  ion-segment {
    --background: #54dc98;
    color: blueviolet;
  }
</style>

  
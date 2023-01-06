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
                  <ion-card-title>ค่าห้อง</ion-card-title>
                  <ion-label>เลือกห้องที่ต้องการปรับราคา</ion-label>
              </ion-card-header>
          </ion-item>

          <ion-card-content> 
          <ion-grid>
          <ion-row class="ion-justify-content-end">
            <ion-col size="3">
              <ion-item-divider color="light">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>เลือกทั้งชั้น</ion-label>
              </ion-item-divider>
            </ion-col>
            <ion-col size="3">
              <ion-item-divider color="light">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>ไม่เลือก</ion-label>
              </ion-item-divider>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-item-divider color="light">
          <ion-label>ชั้นที่1</ion-label>
        </ion-item-divider>
      <ion-grid :fixed="true" >
          <ion-row>
            <ion-col routerLink="/manageroomPage1">
              <ion-card>
                  <ion-card-header>
                    <ion-card-title>101</ion-card-title>
                  </ion-card-header>
                  <ion-card-content></ion-card-content>
                </ion-card>
              </ion-col>
            <ion-col routerLink="/bookingPage">
              <ion-card>
                  <ion-card-header>
                    <ion-card-title>102</ion-card-title>
                  </ion-card-header>
                  <ion-card-content></ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col routerLink="/bookingPage">
              <ion-card>
                  <ion-card-header>
                    <ion-card-title>103</ion-card-title>
                  </ion-card-header>
                  <ion-card-content></ion-card-content>
                </ion-card>
              </ion-col>
          </ion-row>
        </ion-grid>

        <ion-grid>
          <ion-row class="ion-justify-content-end">
            <ion-col size="3">
              <ion-item-divider color="light">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>เลือกทั้งชั้น</ion-label>
              </ion-item-divider>
            </ion-col>
            <ion-col size="3">
              <ion-item-divider color="light">
                <ion-checkbox slot="start"></ion-checkbox>
                <ion-label>ไม่เลือก</ion-label>
              </ion-item-divider>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-item-divider color="light">
          <ion-label>ชั้นที่2</ion-label>
        </ion-item-divider>
      <ion-grid :fixed="true" >
          <ion-row>
            <ion-col routerLink="/manageroomPage1">
              <ion-card>
                  <ion-card-header>
                    <ion-card-title>201</ion-card-title>
                  </ion-card-header>
                  <ion-card-content></ion-card-content>
                </ion-card>
              </ion-col>
            <ion-col routerLink="/bookingPage">
              <ion-card>
                  <ion-card-header>
                    <ion-card-title>202</ion-card-title>
                  </ion-card-header>
                  <ion-card-content></ion-card-content>
                </ion-card>
              </ion-col>
              <ion-col routerLink="/bookingPage">
              <ion-card>
                  <ion-card-header>
                    <ion-card-title>203</ion-card-title>
                  </ion-card-header>
                  <ion-card-content></ion-card-content>
                </ion-card>
              </ion-col>
          </ion-row>
        </ion-grid>
    </ion-card-content>  
  </ion-card>
  <ion-card>
    <IonRow>
    <div className="ion-float-end">
      <ion-label>กดเลือกห้องที่ต้องการแก้ไข</ion-label>
      <ion-button routerLink="/newroomprice">กำหนดค่าห้อง</ion-button>
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
ion-card-content{
  text-align: center;
}

</style>

  
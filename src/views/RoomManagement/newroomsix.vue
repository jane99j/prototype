<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title></ion-title>
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
                            
                            <ion-card-title>กำหนดค่าบริการห้องพัก</ion-card-title>
                            <ion-label>รายการค่าบริการจะแสดงในขั้นตอนเลือกประเภทห้องพัก</ion-label>
                        </ion-card-header>
                    </ion-item>
            <ion-card-content>
                <ion-item>
                          <ion-label>บริการ :</ion-label>
                          <ion-input text placeholder="ระบุบริการ"></ion-input>
                      </ion-item>
                      <ion-item>
                          <ion-label>ราคาบริการ :</ion-label>
                          <ion-input text placeholder="ระบุราคาบริการ"></ion-input>
                      </ion-item>

                      <IonRow>
                      <div className="ion-float-end">
                        <ion-button routerLink="/newroomeOne">เพิ่ม</ion-button>
                      </div> 
                      </IonRow>

                      
            </ion-card-content>
          </ion-card>
          <ion-card>
            <ion-card-content>
              <ion-grid fixed="true">
                <ion-item>
                  <ion-col>ค่าจอดรถ</ion-col>
                  <ion-col>300</ion-col>
                  <ion-col>
                    <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                  </ion-col>
                </ion-item>
            
                <ion-item>
                  <ion-col>ค่าอินเตอร์เน็ต</ion-col>
                  <ion-col>500</ion-col>
                  <ion-col>
                    <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                  </ion-col>
                </ion-item>
                
                <ion-item>
                  <ion-col>ค่าบริการอื่่นๆ</ion-col>
                  <ion-col>4,000</ion-col>
                  <ion-col>
                    <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                  </ion-col>
                </ion-item>
              </ion-grid>
            </ion-card-content>
          </ion-card>
  <ion-card>
  <IonRow>
  <div className="ion-float-end">
    <ion-button routerLink="/newroomprice">บันทึก</ion-button>
  </div> 
  </IonRow>
</ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonInput,IonLabel,IonItem,IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
      IonInput,IonLabel,IonItem,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle
  }
});
</script>
<style>
</style>
  
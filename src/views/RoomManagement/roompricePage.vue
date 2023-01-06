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
                              
                              <ion-card-title>กำหนดราคาค่าห้องพัก</ion-card-title>
                              <ion-label>รายการค่าบริการจะแสดงในขั้นตอนเลือกประเภทห้องพัก</ion-label>
                          </ion-card-header>
                      </ion-item>
              <ion-card-content>
                  <ion-item>
                            <ion-label>ประเภทห้อง :</ion-label>
                            <ion-input text placeholder="ระบุประภทห้องพัก"></ion-input>
                        </ion-item>
                        <ion-item>
                            <ion-label>กำหนดราคา :</ion-label>
                            <ion-input text placeholder="ระบุราคาห้องพัก"></ion-input>
                        </ion-item>
                        
                      <ion-item>
                        <ion-label>ของใช้ภายในห้อง</ion-label>
                      </ion-item>

                        <ion-item>
                        <ion-checkbox slot="start"></ion-checkbox>
                        <ion-label>พัดลม</ion-label>
                        </ion-item>

                        <ion-item>
                        <ion-checkbox slot="start"></ion-checkbox>
                        <ion-label>แอร์</ion-label>
                        </ion-item>

                        <ion-item>
                        <ion-checkbox slot="start"></ion-checkbox>
                        <ion-label>ตู้เสื้อผ้า</ion-label>
                        </ion-item>

                        <ion-item>
                        <ion-checkbox slot="start"></ion-checkbox>
                        <ion-label>โต๊ะเครื่องแป้ง</ion-label>
                        </ion-item>

                        <ion-item>
                        <ion-checkbox slot="start"></ion-checkbox>
                        <ion-label>เครื่องทำน้ำอุ่น</ion-label>
                        </ion-item>


                        <IonRow>
                        <div className="ion-float-end">
                          <ion-button routerLink="#">เพิ่ม</ion-button>
                        </div> 
                        </IonRow>

                        
              </ion-card-content>
            </ion-card>
            <ion-card>
              <ion-card-content>
                <ion-grid fixed="true">
                  <ion-item>
                    <ion-col>ห้องทั่วไป</ion-col>
                    <ion-col>3,000</ion-col>
                    <ion-col>
                      <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                    </ion-col>
                    <ion-col>
                      <ion-text color="tertiary" routerLink="">รายละเอียด</ion-text>
                    </ion-col>
                  </ion-item>
              
                  <ion-item>
                    <ion-col>ห้องแอร์</ion-col>
                    <ion-col>3,500</ion-col>
                    <ion-col>
                      <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                    </ion-col>
                    <ion-col>
                      <ion-text color="tertiary" routerLink="">รายละเอียด</ion-text>
                    </ion-col>
                  </ion-item>
                  
                  <ion-item>
                    <ion-col>ห้องVIP</ion-col>
                    <ion-col>4,000</ion-col>
                    <ion-col>
                      <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                    </ion-col>
                    <ion-col>
                      <ion-text color="tertiary" routerLink="">รายละเอียด</ion-text>
                    </ion-col>
                  </ion-item>
                </ion-grid>
              </ion-card-content>
            </ion-card>
    <ion-card>
    <IonRow>
    <div className="ion-float-end">
      <ion-button routerLink="/newroomPage">ต่อไป</ion-button>
    </div> 
    </IonRow>
  </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonCheckbox,IonInput,IonLabel,IonItem,IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonCheckbox,IonInput,IonLabel,IonItem,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle
    }
  });
  </script>
  <style>
  </style>
    
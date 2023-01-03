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
              <ion-list>
          <ion-item>
            <ion-label>เลือกประเภทห้องพัก</ion-label>
          <ion-select interface="popover" placeholder="ประเภทห้องพัก">
            <ion-select-option value="apples">ห้องทั่วไป</ion-select-option>
            <ion-select-option value="oranges">ห้องแอร์</ion-select-option>
            <ion-select-option value="bananas">ห้อง VIP</ion-select-option>
          </ion-select>
        </ion-item>
        </ion-list>
            </ion-card-content>
          </ion-card>
                <ion-card>
                <ion-radio-group  value="turtles">
                    <ion-item color="light">
                      <ion-card-title>บริการเพิ่มเติม</ion-card-title>
                    </ion-item>
                    <ion-item color="light">
                      <div className="ion-float-end">
                      <ion-button routerLink="/newroomsix">+ เพิ่มค่าบริการ</ion-button>
                      </div> 
                    </ion-item>
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
                  <ion-col>ค่าเฟอร์นิเจอร์</ion-col>
                  <ion-col>500</ion-col>
                  <ion-col>
                    <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                  </ion-col>
                </ion-item>
              </ion-grid>
                  </ion-radio-group>
              </ion-card>

              <ion-card>
              <ion-radio-group>
                <ion-item color="light">
                      <ion-card-title>สถานะห้อง</ion-card-title>
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
  import { IonRadioGroup,IonItem,IonCol,IonRow,IonCard,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonLabel,IonButton } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonRadioGroup,IonItem,IonCol,IonRow,IonCard,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonLabel,IonButton
    }
  });
  </script>
  
  <style>
  ion-segment {
    --background: #54dc98;
    color: blueviolet;
  }
</style>

  
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
                      
                      <ion-card-title>จองห้องพัก</ion-card-title>
                  </ion-card-header>
              </ion-item>
            <ion-card-content>
                <ion-list>
                <ion-item>
                <ion-label>ชื่อ</ion-label>
                <ion-input text placeholder="ชื่อผู้จอง"></ion-input>
                </ion-item>

                <ion-item>
                <ion-label>สกุล</ion-label>
                <ion-input text placeholder="สกุลผู้จอง"></ion-input>
                </ion-item>

                <ion-item>
                <ion-label>เบอร์โทรศัพท์</ion-label>
                <ion-input text placeholder="092-XXXXXX"></ion-input>
                </ion-item>

                <ion-item>
                <ion-label>ค่าประกัน</ion-label>
                <ion-input text placeholder="."></ion-input>
                </ion-item>

                <ion-item>
                    <ion-label>วันที่เข้าพัก : </ion-label>
                    <ion-datetime-button datetime="datetime1"></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                    <ion-datetime id="datetime1"></ion-datetime>
                    </ion-modal>
                </ion-item>
            </ion-list>     
            </ion-card-content>
            </ion-card>
    <ion-card>
      <IonRow>
      <div className="ion-float-end">
        <ion-button routerLink="/userdataPage">บันทึก</ion-button>
      </div> 
      </IonRow>
    </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  
  <script lang="ts">
  import { defineComponent, ref } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton,IonDatetime,IonLabel,IonItem,IonInput,IonDatetimeButton} from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonDatetime,IonLabel,IonItem,IonInput,IonDatetimeButton
    },
    setup() {
      const datetime = ref();
      const reset = () => datetime.value.$el.reset();
      const cancel = () => datetime.value.$el.cancel();
      const confirm = () => datetime.value.$el.confirm();
      return { datetime, reset, cancel, confirm }
    }

   
  });
  </script>
  <style>
  </style>
    
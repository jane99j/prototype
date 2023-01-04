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
          <ion-title size="large">เพิ่มหอพัก</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
   
  <ion-grid>
  <ion-row>
    <ion-col>
      <ion-card>
    <ion-item color="light">
      <ion-card-header >
      <ion-card-title>กำหนดน้ำไฟ</ion-card-title>
      <ion-label>ราคาต่อหน่วยค่าน้ำ</ion-label>
      </ion-card-header>
    </ion-item>
    
    <ion-card-content>
      <ion-list>
        <ion-item>
            <ion-label>การคิดค่าไฟฟ้า</ion-label>
          <ion-select interface="popover" placeholder="เลือกการคิดค่าน้ำ">
            <ion-select-option value="apples">แบบเหมาจ่าย</ion-select-option>
            <ion-select-option value="oranges">ตามหน่วยจริง</ion-select-option>
          </ion-select>
        </ion-item>
      <ion-item>
        <ion-label>ราค่าน้ำ :</ion-label>
        <ion-input placeholder=""></ion-input>
      </ion-item>

    </ion-list>

    </ion-card-content>
  </ion-card>
    </ion-col>
    <ion-col>
      <ion-card>
    <ion-item color="light">
                <ion-card-header >
                    <ion-card-title>กำหนดน้ำไฟ</ion-card-title>
                    <ion-label>ราคาต่อหน่วยค่าไฟฟ้า</ion-label>
                </ion-card-header>
            </ion-item>
    
    <ion-card-content>
      <ion-list>
        <ion-item>
            <ion-label>การคิดค่าไฟ</ion-label>
          <ion-select interface="popover" placeholder="เลือกการคิดค่าน้ำ">
            <ion-select-option value="apples">แบบเหมาจ่าย</ion-select-option>
            <ion-select-option value="oranges">ตามหน่วยจริง</ion-select-option>
          </ion-select>
        </ion-item>
      <ion-item>
        <ion-label>ราค่าน้ำ :</ion-label>
        <ion-input placeholder=""></ion-input>
      </ion-item>

    </ion-list>

    </ion-card-content>
  </ion-card>
    </ion-col>
  </ion-row>
</ion-grid>

        <ion-card>
            <IonRow>
            <div className="ion-float-end">
            <ion-button routerLink="/newroomfinish">ยืนยัน</ion-button>
            </div> 
            </IonRow>
        </ion-card>

</div>
    </ion-content>
  </ion-page>

  </template>
  
  <script lang="ts">
    import { IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonInput, IonItem, IonLabel, IonList,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonInput, IonItem, IonLabel, IonList,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar },
    });
  </script>
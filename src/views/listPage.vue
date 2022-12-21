<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>{{ $route.params.id }}</ion-title>
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
            <ion-card-header>
                <ion-item><ion-card-title>หมายเลขห้อง</ion-card-title></ion-item>
                <ion-item>
                <ion-card-title>รายการค่าบริการต่างๆ</ion-card-title>
                <ion-card-subtitle>ค่าบริการเพิ่มเติมที่เรียกเก็บ เช่น ค่าอินเตอร์เน็ต,ค่าที่จอดรถ</ion-card-subtitle>
                </ion-item>
            </ion-card-header>
                
            <ion-card-content>
            <ion-card>
                <ion-grid>
                <ion-row>
                <ion-col><ion-item>
                <ion-label>รายการเพิ่มเติม :</ion-label>
                <ion-input placeholder="ชื่อบริการ"></ion-input>
                </ion-item>
                </ion-col>
                <ion-col>
                <ion-item>
                    <ion-label>ราคา :</ion-label>
                <ion-input placeholder="ระบุราคา"></ion-input>บาท
                </ion-item>
                </ion-col>
                <ion-col>
                    <ion-button color="success" routerLink="#" >เพิ่มรายการ</ion-button>
                </ion-col>
                </ion-row>
                </ion-grid>
                
                <ion-grid> 
                <ion-row>
                    <ion-col>รายการ</ion-col>
                    <ion-col>ราคา</ion-col>
                    <ion-col> </ion-col>
                </ion-row>
                </ion-grid>

                <ion-grid>       
                <ion-row>
                    <ion-col>....</ion-col>
                    <ion-col>....</ion-col>
                    <ion-col><ion-button color="warning"  routerLink="#">แก้ไข</ion-button> </ion-col>
                </ion-row>
                </ion-grid>  
            </ion-card>
            <ion-button expand="block" routerLink="#">บันทึกรายการ</ion-button>
            </ion-card-content>
            </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonItem,IonInput,IonButton,IonCol, IonGrid, IonRow  } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonItem,IonInput,IonButton,IonCol, IonGrid, IonRow 
    }
  });
  </script>
  <style scoped>
  ion-col {
    border: solid 0px rgb(126, 124, 124);
    color: rgb(0, 0, 0);
    text-align: center;
    
  }
</style>
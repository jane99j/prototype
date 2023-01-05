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
          <h1>การจัดการชำระเงิน</h1>
          <h1>ห้อง 104</h1>
          <ion-item color="light">
                <ion-grid> 
                <ion-item color="light">                        
                    <label>ค่าบริการ</label>
                    <ion-col><p>              
                    <ion-item>
                        <ion-input placeholder="บริการ"></ion-input>
                    </ion-item>
                    </p>
                    </ion-col>
                    <ion-col><p>
                    
                    <ion-item>
                        <ion-input placeholder="จำนวนเงิน"></ion-input>  
                    </ion-item>
                    </p>
                    </ion-col>
                    <ion-col>
                        <ion-button >+ เพิ่ม</ion-button>
                    </ion-col>
                </ion-item>
                </ion-grid>               
                </ion-item>
          <ion-button>บันทึก</ion-button>
          <ion-card>
          <center><h1>ประวัติการชำระเงิน</h1></center>
        <ion-grid :fixed="false">
      <ion-row>
        <ion-col>เดือน</ion-col>
        <ion-col>ค่าเช่า</ion-col>
        <ion-col>ค่าน้ำ</ion-col>
        <ion-col>ค่าไฟ</ion-col>
        <ion-col>บิลปัจจุบัน</ion-col>
        <ion-col>ค่าปรับเลยกำหนด</ion-col>
        <ion-col>บิล+ยอดค้าง+ค่าปรับ</ion-col>
        <ion-col>ยอดที่ชำระ</ion-col>
        <ion-col>ยอดค้าง</ion-col>
      </ion-row>
    </ion-grid>
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>มกราคม</ion-col>
        <ion-col>4000</ion-col>
        <ion-col>100</ion-col>
        <ion-col>900</ion-col>
        <ion-col>5000</ion-col>
        <ion-col>0</ion-col>
        <ion-col>0</ion-col>
        <ion-col>5000</ion-col>
        <ion-col>0</ion-col>
      </ion-row>
    </ion-grid>
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>กุมภาพันธ์</ion-col>
        <ion-col>4000</ion-col>
        <ion-col>200</ion-col>
        <ion-col>800</ion-col>
        <ion-col>5000</ion-col>
        <ion-col>0</ion-col>
        <ion-col>0</ion-col>
        <ion-col>2000</ion-col>
        <ion-col>3000</ion-col>
      </ion-row>
    </ion-grid>
          </ion-card>
        </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonInput, IonItem,} from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonCard,IonInput, IonItem, 
    }
  });
  </script>
  
  <style scoped>
    ion-col {
    text-align: center;
    }
  </style>
  
<template>
  <ion-page>
    <ion-header :translucent="true">
    <ion-toolbar color="purple">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>บัญชีธนาคร</ion-title>
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
                    <ion-card-title>บัญชีธนาคร</ion-card-title>
                    <ion-label>บัญชีธนาคร/ไฟฟ้า</ion-label>
                </ion-card-header>
            </ion-item>
    <ion-card-content>
      <ion-list>
        <ion-item>
          <ion-label>ธนาคร</ion-label>
        <ion-select  placeholder="เลือกธนาคาร" v-model="dormitory.bank_name">
          <ion-select-option value="กรุงเทพ">กรุงเทพ</ion-select-option>
          <ion-select-option value="กสิกรไทย">กสิกรไทย</ion-select-option>
          <ion-select-option value="กรุงไทย">กรุงไทย</ion-select-option>
        </ion-select>
      </ion-item>
  
      <ion-item>
        <ion-label>ชื่อบัญชี</ion-label>
        <ion-input text placeholder="" v-model="dormitory.name_b"></ion-input>
      </ion-item>
  
      <ion-item>
        <ion-label>เลขบัญชี</ion-label>
        <ion-input text placeholder="" v-model="dormitory.nuber_b"></ion-input>
      </ion-item>
      </ion-list>
    </ion-card-content>  
  </ion-card>

  <ion-card>
           <ion-item color="light">
                <ion-card-header >
                    <ion-card-title>ขั้นตอนการแจ้งการชำระเงิน</ion-card-title>
                    <ion-label>ข้อความรจะแสดงพร้อมชื่อบัญชีธนาคารในบิล/ไฟฟ้า</ion-label>
                </ion-card-header>
            </ion-item>
    <ion-card-content>
      <ion-item>
        <ion-label>ข้อความ</ion-label>
        <ion-textarea placeholder="กรอกข้อความ" v-model="dormitory.ms"></ion-textarea>
      </ion-item>
    </ion-card-content>  

  </ion-card>

  <ion-card>
    <IonRow>
    <div className="ion-float-end">
      <ion-button @click="sendData" routerLink="/newroomthree">ต่อไป</ion-button>
    </div> 
    </IonRow>
  </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonTextarea,IonInput,IonItem,IonSelect,IonSelectOption,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonTextarea,IonInput,IonItem,IonSelect,IonSelectOption,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton
  },
  data() {
    return {
      dormitory: {
        bank_name: "",
        name_b: "",
        nuber_b: "",
        ms : "",
      }
    }
  },
  methods: {
    sendData() {
      console.log("sendData active");

      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_message.json", {
        bank_name: this.dormitory.bank_name,
        name_b: this.dormitory.name_b,
        nuber_b: this.dormitory.nuber_b,
        ms: this.dormitory.ms
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });

      this.clearData();
    },
    clearData() {
      this.dormitory.bank_name = "";
      this.dormitory.name_b = "";
      this.dormitory.nuber_b = "";
      this.dormitory.ms = "";
    }
    
  }
});
</script>
<style>
.ion-color-purple {
--ion-color-base: var(--ion-color-purple);
--ion-color-base-rgb: var(--ion-color-purple-rgb);
--ion-color-contrast: var(--ion-color-purple-contrast);
--ion-color-contrast-rgb: var(--ion-color-purple-contrast-rgb);
--ion-color-shade: var(--ion-color-purple-shade);
--ion-color-tint: var(--ion-color-purple-tint);
}
ion-content {
  --background: #e7e6eb;
  --color: #fff;
}</style>

  
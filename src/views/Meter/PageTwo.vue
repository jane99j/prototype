<template>
  <ion-page>
    <ion-header :translucent="true">
    <ion-toolbar color="purple">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>จดมิเตอร์น้ำ</ion-title>
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
        </div>        
        <ion-card>
          <ion-item color="light">
          <ion-card-header>
            <ion-card-title>จดรอบมิเตอร์</ion-card-title>
          </ion-card-header>          
        </ion-item>
        <ion-grid>
      <ion-row>
        <ion-col size="3"> <ion-datetime-button datetime="datetime1"></ion-datetime-button>
          <ion-modal :keep-contents-mounted="true">
          <ion-datetime id="datetime1"></ion-datetime>
          </ion-modal>
          <ion-item>
          <ion-label>เลือกรอบบิลปัจจุบัน</ion-label></ion-item>
        </ion-col>

        <ion-col></ion-col>
        <ion-col></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid>
    <ion-row>

        <ion-col size="3">

          <ion-list>
    <ion-item>
      <ion-select interface="popover" placeholder="เลือกชั้น">
        <ion-select-option value="apples">ชั้นที่1</ion-select-option>
        <ion-select-option value="oranges">ชั้นที่2</ion-select-option>
        <ion-select-option value="bananas">ชั้นที่3</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>

        </ion-col>
        <ion-col></ion-col>
        <ion-col>
          <ion-nav-link routerLink="PageOne">
          <ion-button>จดมิเตอร์น้ำ</ion-button></ion-nav-link>
        </ion-col>
      </ion-row>
    </ion-grid>    

<ion-card>

  <ion-grid>
  <ion-row>
    <ion-col>รายชื่อห้อง</ion-col>
    <ion-col>จดก่อนหน้า</ion-col>
    <ion-col>จดล่าสุด</ion-col>
    <ion-col>หน่วยที่ใช้</ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row>
    <ion-col><ion-input placeholder="101" readonly></ion-input></ion-col>
    <ion-col><ion-input placeholder="จดก่อนหน้า" readonly></ion-input></ion-col>
    <ion-col><ion-input placeholder="จดล่าสุด" readonly></ion-input></ion-col>
    <ion-col><ion-input placeholder="หน่วยที่ใช้" readonly></ion-input></ion-col>
  </ion-row>
</ion-grid>

<ion-grid>
  <ion-row>
    <ion-col><ion-input placeholder="102" readonly></ion-input></ion-col>
    <ion-col><ion-input placeholder="จดก่อนหน้า" readonly></ion-input></ion-col>
    <ion-col><ion-input placeholder="จดล่าสุด" readonly></ion-input></ion-col>
    <ion-col><ion-input placeholder="หน่วยที่ใช้" readonly></ion-input></ion-col>
  </ion-row>
</ion-grid>

    

</ion-card>
<ion-button expand="block">บันทึก</ion-button>
</ion-card>
      </ion-content>
    </ion-page>
</template>


<script lang="ts">
  import {IonMenuButton,IonButtons,IonPage,IonNavLink,IonInput,IonButton ,IonList, IonSelect, IonSelectOption,IonGrid,IonHeader, IonTitle, IonToolbar, IonContent,IonCol,IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonLabel } from '@ionic/vue';

  export default {
    components: { IonMenuButton,IonButtons,IonPage,IonNavLink,IonInput,IonButton ,IonList, IonSelect, IonSelectOption,IonGrid,IonHeader, IonTitle, IonToolbar, IonContent, IonCol,IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem ,IonLabel },
    data() {
      return {
      };
    },
  };
</script>
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0; 

}
#container a {
  text-decoration: none;
}
ion-segment{
  size: 10px;
  text-align: left;
}

ion-searchbar.ios{
  width: 80%;
}
ion-label{
  text-align: center;
}
ion-datetime-button{
  padding-top: 5%;
}
ion-select{
  margin-left: 40%;
}
ion-col{
  text-align: center;
}
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
}
</style>
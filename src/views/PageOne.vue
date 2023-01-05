<template>
        <ion-header>
    <ion-toolbar>
      <ion-title>จดมิเตอร์น้ำ</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-card>

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
          <ion-nav-link router-direction="forward" :component="component">
          <ion-button>จดมิเตอร์ไฟฟ้า</ion-button></ion-nav-link>
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
</template>


<script lang="ts">
  import {IonNavLink,IonInput,IonButton ,IonList, IonSelect, IonSelectOption,IonGrid,IonHeader, IonTitle, IonToolbar, IonContent,IonCol,IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonLabel } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  export default {
    components: { IonNavLink,IonInput,IonButton ,IonList, IonSelect, IonSelectOption,IonGrid,IonHeader, IonTitle, IonToolbar, IonContent, IonCol,IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem ,IonLabel },
    data() {
      return {
        component: PageTwo,
      };
    },
  };
</script>
<style scoped>
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

</style>
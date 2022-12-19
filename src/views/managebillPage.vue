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
        <center>
    <h1>เลือกมิเตอร์</h1>
    <ion-row>
        <ion-col> <ion-datetime-button datetime="datetime1"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
    <ion-datetime id="datetime1"></ion-datetime>
    </ion-modal>
</ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
      </ion-row>

      <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-list>
    <ion-item>
      <ion-select placeholder="ชั้น">
        <ion-select-option value="apples">ชั้นที่ 1</ion-select-option>
        <ion-select-option value="oranges">ชั้นที่ 2</ion-select-option>
        <ion-select-option value="bananas">ชั้นที่ 3</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list></ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col><ion-button>ค่าน้ำ</ion-button><ion-button>ค่าไฟ</ion-button></ion-col>
      </ion-row>
    </ion-grid>

</center>
    <ion-card>
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>ห้อง</ion-col>
        <ion-col>สถานะห้อง</ion-col>
        <ion-col>จดก่อนหน้า</ion-col>
        <ion-col>จดล่าสุด</ion-col>
        <ion-col>หน่วยที่ใช้</ion-col>
      </ion-row>
    </ion-grid>
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>101</ion-col>
        <ion-col>ไม่ว่าง</ion-col>
        <ion-col>500</ion-col>
        <ion-col><ion-input placeholder="กรอก"></ion-input></ion-col>
        <ion-col><ion-input placeholder="กรอก"></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>102</ion-col>
        <ion-col>ไม่ว่าง</ion-col>
        <ion-col>500</ion-col>
        <ion-col><ion-input placeholder="กรอก"></ion-input></ion-col>
        <ion-col><ion-input placeholder="กรอก"></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col>103</ion-col>
        <ion-col>ไม่ว่าง</ion-col>
        <ion-col>500</ion-col>
        <ion-col><ion-input placeholder="กรอก"></ion-input></ion-col>
        <ion-col><ion-input placeholder="กรอก"></ion-input></ion-col>
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
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonList, IonSelect, IonSelectOption } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,IonCol, IonGrid, IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonList, IonSelect, IonSelectOption
  }
});
</script>

<style scoped>
ion-col {
      background-color: #ffffff;
      border: solid 1px rgb(255, 255, 255);
      color: rgb(0, 0, 0);
      text-align: center;
    }
</style>


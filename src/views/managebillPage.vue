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
    <ion-label>เลือกรอบบิลปัจจุบัน</ion-label>
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

        <ion-col><ion-list>
    <ion-item>
      <ion-select placeholder="ตึก">
        <ion-select-option value="apples">ตึก A</ion-select-option>
        <ion-select-option value="oranges">ตึก B</ion-select-option>
        <ion-select-option value="bananas">ตึก C</ion-select-option>
        <ion-select-option value="bananas">ตึก D</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list></ion-col>
        <ion-col><ion-searchbar placeholder="ค้นหาห้องพัก"></ion-searchbar></ion-col>
        <ion-col></ion-col>
        <ion-col><ion-segment value="menu1">
    <ion-segment-button value="menu1">
      <ion-label>ค่าน้ำ</ion-label>
    </ion-segment-button>
    <ion-segment-button value="menu2">
      <ion-label>ค่าไฟ</ion-label>
    </ion-segment-button>
  </ion-segment></ion-col>
        
      </ion-row>
    </ion-grid>

</center>
    <ion-card>
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>ห้อง</ion-input></ion-col>
        <ion-col><ion-input readonly>สถานะห้อง</ion-input></ion-col>
        <ion-col><ion-input readonly>จดก่อนหน้า</ion-input></ion-col>
        <ion-col><ion-input readonly>จดล่าสุด</ion-input></ion-col>
        <ion-col><ion-input readonly>หน่วยที่ใช้</ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>101</ion-input></ion-col>
        <ion-col><ion-input readonly>ไม่ว่าง</ion-input></ion-col>
        <ion-col><ion-input readonly>0</ion-input></ion-col>
        <ion-col><ion-input placeholder="กรอก"></ion-input></ion-col>
        <ion-col><ion-input placeholder=""></ion-input></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid :fixed="false">
      <ion-row>
        <ion-col><ion-input readonly>101</ion-input></ion-col>
        <ion-col><ion-input readonly>ไม่ว่าง</ion-input></ion-col>
        <ion-col><ion-input readonly>0</ion-input></ion-col>
        <ion-col><ion-input placeholder="กรอก"></ion-input></ion-col>
        <ion-col><ion-input placeholder=""></ion-input></ion-col>
      </ion-row>
    </ion-grid>
    
    <ion-grid :fixed="false">
      <ion-row>
        <ion-col></ion-col>
        <ion-col></ion-col>
        <ion-col><ion-button>บันทึกข้อมูลทั้งหมด</ion-button></ion-col>
        <ion-col></ion-col>
        <ion-col></ion-col>
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
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonCol, IonGrid, IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonList, IonSelect, IonSelectOption,IonSearchbar,IonSegment, IonSegmentButton,IonLabel } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,IonCol, IonGrid, IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonList, IonSelect, IonSelectOption,IonSearchbar,IonSegment, IonSegmentButton,IonLabel
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


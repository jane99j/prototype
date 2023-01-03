<template>
        <ion-header>
    <ion-toolbar>
      <ion-title>จดมิเตอร์น้ำ</ion-title>
    </ion-toolbar>
  </ion-header>
  <ion-content class="ion-padding">
    <ion-card>
        <center>
    <h1>มิเตอร์น้ำ</h1>
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
  </ion-list></ion-col>
        <ion-col><ion-searchbar placeholder="ค้นหาห้องพัก"></ion-searchbar></ion-col>
        <ion-col></ion-col>
        <ion-col>    
          <ion-nav-link router-direction="forward" :component="component">
            <ion-button>ไฟฟ้า</ion-button>
          </ion-nav-link>
        </ion-col>
        
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
  </ion-content>
</template>


<script lang="ts">
  import { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonCol, IonGrid, IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonList, IonSelect, IonSelectOption,IonSearchbar ,IonLabel } from '@ionic/vue';
  import PageTwo from './PageTwo.vue';

  export default {
    components: { IonHeader, IonTitle, IonToolbar, IonContent, IonNavLink, IonButton, IonCol, IonGrid, IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonList, IonSelect, IonSelectOption,IonSearchbar ,IonLabel },
    data() {
      return {
        component: PageTwo,
      };
    },
  };
</script>

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>สัญญา</ion-title>
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
          <ion-card-header>
            <ion-card-title>สัญญา</ion-card-title>
          </ion-card-header>
          <ion-title></ion-title>
        </ion-item>

        <ion-item>
        <ion-label>เลือกประเภทห้องพัก</ion-label>
        <ion-select placeholder="ประเภทห้องพัก" slot="end">
          <ion-select-option value="apples">ห้องทั่วไป</ion-select-option>
          <ion-select-option value="apples">ห้องแอร์</ion-select-option>
          <ion-select-option value="apples">ห้อง VIP</ion-select-option>
        </ion-select>
        </ion-item>

        <ion-item>
        <ion-label>หมายเลขห้อง</ion-label>
        <ion-select placeholder="เลือก" slot="end">
          <ion-select-option value="apples">101</ion-select-option>
        </ion-select>
        </ion-item>

    <ion-item>
      <ion-label>วันที่ทำสัญญา : </ion-label>
    <ion-datetime-button datetime="datetime1"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
    <ion-datetime id="datetime1"></ion-datetime>
    </ion-modal>
    </ion-item>

    <ion-item>
      <ion-label>ระยะเวลาสัญญา : </ion-label>
      <ion-select placeholder="เลือก" slot="end">
        <ion-select-option value="apples">3 เดือน</ion-select-option>
        <ion-select-option value="oranges">6 เดือน</ion-select-option>
        <ion-select-option value="bananas">1 ปี</ion-select-option>
      </ion-select>
    </ion-item>

    
    <ion-item>
      <ion-text>ราคาห้อง  4,000</ion-text>
    </ion-item>
    <ion-item>
      <ion-text>ค่าเช่าล่วงหน้า :</ion-text>
      <ion-input text placeholder="ระบุจำนวนเงิน" ></ion-input>
    </ion-item>


    <ion-item-divider color="light">
      <ion-card-title>ผู้เช่า</ion-card-title>
    </ion-item-divider>
    <ion-item>
      <ion-label>ชื่อ :</ion-label>
      <ion-input text placeholder="กรอกชื่อ" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>สกุล :</ion-label>
      <ion-input text placeholder="กรอกนามสกุล"></ion-input>
    </ion-item>
    
    <ion-item>
      <ion-label>หมายเลขบัตรประชาชน :</ion-label>
      <ion-input number placeholder="กรอกหมายเลขบัตรประชาชน" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>เบอร์โทรติดต่อ :</ion-label>
      <ion-input number placeholder="กรอกเบอร์โทรศัพท์" ></ion-input>
    </ion-item>

    <ion-item>
    <ion-label>ที่อยู่ :</ion-label>
      <ion-input text placeholder="กรอกที่อยู่ที่สามารถติดต่อได้" ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>วันที่เข้าพัก : </ion-label>
    <ion-datetime-button datetime="datetime1" slot="end"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">

    </ion-modal>
    </ion-item>

    

  <ion-button expand="block" routerLink="/homePage">บันทึกสัญญา</ion-button>
  </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons,IonButton,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonSelect, IonSelectOption,IonDatetime, IonDatetimeButton, IonModal ,IonLabel,IonItem,IonInput,IonCard, IonCardHeader,IonCardTitle,
IonText  } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {IonButton,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonSelect, IonSelectOption,IonDatetime, IonDatetimeButton, IonModal ,IonLabel,IonItem,IonInput,IonCard, IonCardHeader,IonCardTitle
    ,IonText
  }
});
</script>

<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
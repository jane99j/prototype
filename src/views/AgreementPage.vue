<template>
  <ion-card>
    <ion-card-header>
      <ion-card-title>ทำสัญญาห้องพัก</ion-card-title>
    </ion-card-header>

  <ion-card-content>
    <ion-item>
    <h2>วันที่ทำสัญญา : </h2>
    <ion-datetime-button datetime="datetime1"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
    <ion-datetime id="datetime1"></ion-datetime>
    </ion-modal>
    </ion-item>

    <ion-item>
    <h2>วันที่ยกเลิกสัญญา : </h2>
    <ion-datetime-button datetime="datetime2"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">
    <ion-datetime id="datetime2"></ion-datetime>
    </ion-modal>
    </ion-item>
  
    <ion-list>
    <ion-item>
      <h2>ระยะเวลาสัญญา : </h2>
      <ion-select placeholder="เลือก">
        <ion-select-option value="apples">3 เดือน</ion-select-option>
        <ion-select-option value="oranges">6 เดือน</ion-select-option>
        <ion-select-option value="bananas">1 ปี</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>

  </ion-card-content>

    <ion-card-content>
      <ion-list>
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

  </ion-list>
    </ion-card-content>
  <ion-card-content>

    <ion-item>
    <ion-label>เลขห้องพัก :</ion-label>
      <ion-input readonly ></ion-input>
    </ion-item>

    <ion-item>
    <ion-label>ชั้นที่ :</ion-label>
      <ion-input readonly ></ion-input>
    </ion-item>

    <ion-item>
    <ion-label>ตึก :</ion-label>
      <ion-input readonly ></ion-input>
    </ion-item>

    <ion-item>
    <ion-label>ราคาห้องพัก :</ion-label>
      <ion-input readonly ></ion-input>
    </ion-item>

    <ion-item>
    <ion-label>เงินประกัน :</ion-label>
      <ion-input number placeholder="กรอกจำนวนเงิน" ></ion-input>
    </ion-item>

  </ion-card-content>
  <ion-button expand="block">บันทึกสัญญา</ion-button>
  </ion-card>
</template>

<script lang="ts">
  import { IonButton,IonSelect, IonSelectOption,IonDatetime, IonDatetimeButton, IonModal,IonList ,IonLabel,IonItem,IonInput,IonCard, IonCardContent, IonCardHeader,IonCardTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonButton,IonSelect, IonSelectOption,IonDatetime, IonDatetimeButton, IonModal,IonList ,IonLabel,IonItem,IonInput,IonCard, IonCardContent, IonCardHeader, IonCardTitle },
  });
</script>

<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
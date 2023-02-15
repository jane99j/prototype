
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="purple">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>สัญญาเช่า</ion-title>
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
        <ion-grid>
          <ion-row>
            <ion-col sizeXs="12" sizeMd="10">
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
      <ion-input text placeholder="ระบุจำนวนเงิน" v-model="instagr.agr_period"></ion-input>
    </ion-item>


    <ion-item-divider color="light">
      <ion-card-title>ผู้เช่า</ion-card-title>
    </ion-item-divider>
    <ion-item>
      <ion-label>ชื่อ :</ion-label>
      <ion-input text placeholder="กรอกชื่อ" v-model="instagr.agr_fname"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>สกุล :</ion-label>
      <ion-input text placeholder="กรอกนามสกุล" v-model="instagr.agr_lname"></ion-input>
    </ion-item>
    
    <ion-item>
      <ion-label>หมายเลขบัตรประชาชน :</ion-label>
      <ion-input number placeholder="กรอกหมายเลขบัตรประชาชน" v-model="instagr.agr_idcard"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>เบอร์โทรติดต่อ :</ion-label>
      <ion-input number placeholder="กรอกเบอร์โทรศัพท์" v-model="instagr.agr_phone" ></ion-input>
    </ion-item>

    <ion-item>
    <ion-label>ที่อยู่ :</ion-label>
      <ion-input text placeholder="กรอกที่อยู่ที่สามารถติดต่อได้" v-model="instagr.agr_address"></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>วันที่เข้าพัก : </ion-label>
    <ion-datetime-button datetime="datetime1" slot="end"></ion-datetime-button>
    <ion-modal :keep-contents-mounted="true">

    </ion-modal>
    </ion-item>

    <ion-button @click="sendData" routerLink="#" expand="block" >บันทึก</ion-button>
  </ion-card>
            </ion-col>
            
          </ion-row>
        </ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonButtons,IonButton,IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonSelect, IonSelectOption,IonDatetime, IonDatetimeButton, IonModal ,IonLabel,IonItem,IonInput,IonCard, IonCardHeader,IonCardTitle,
IonText  } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {IonButton,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonSelect, IonSelectOption,IonDatetime, IonDatetimeButton, IonModal ,IonLabel,IonItem,IonInput,IonCard, IonCardHeader,IonCardTitle
    ,IonText
  },
  data() {
    return {
      intsagreement: {},

      instagr: {
        room_type: "",
        room_number: "",
        agr_dateagr: "",
        agr_period: "",
        agr_rental: "",
        agr_fname: "",
        agr_lname: "",
        agr_idcard: "",
        agr_phone: "",
        agr_address: "",
        agr_date: "",
      }
    }
  },
  methods: {
    
    /////instdata///////
    sendData() {
      console.log("sendData active");

      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_agreement.json", {
        room_type: this.instagr.room_type,
        room_number: this.instagr.room_number,
        agr_dateagr: this.instagr.agr_dateagr,
        agr_period: this.instagr.agr_period,
        agr_rental: this.instagr.agr_rental,
        agr_fname: this.instagr.agr_fname,
        agr_lname: this.instagr.agr_lname,
        agr_idcard: this.instagr.agr_idcard,
        agr_phone: this.instagr.agr_phone,
        agr_address: this.instagr.agr_address,
        agr_date: this.instagr.agr_date,
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
      this.instagr.room_type = "";
      this.instagr.room_number = "";
      this.instagr.agr_dateagr = "";
      this.instagr.agr_period = "";
      this.instagr.agr_rental = "";
      this.instagr.agr_fname = "";
      this.instagr.agr_lname = "";
      this.instagr.agr_idcard = "";
      this.instagr.agr_phone = "";
      this.instagr.agr_address = "";
      this.instagr.agr_date = "";
    }
  },

});

</script>

<style scoped>
  #container {
    text-align: left;
    position: absolute;
    left: 0;
    right: 0;

  }
.header-row {
  background: #7163AA;
  color: #fff;
  font-size: 18px;
}
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
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
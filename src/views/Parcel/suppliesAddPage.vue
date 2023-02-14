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
        </div>
        
    <ion-card>
    <ion-card-content>

    <ion-list>
    <ion-item>

      <ion-label>ชื่อห้อง</ion-label>
      <ion-input placeholder="กรอกรายชื่อห้องบนพัสดุ" v-model="instsupplies.room_number" required ></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ชื่อผู้รับ</ion-label>
      <ion-input placeholder="กรอกรายชื่อผู้รับ" v-model="instsupplies.own_name" required></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>หมายเลขพัสดุ</ion-label>
      <ion-input placeholder="กรอกหมายเลขพัสดุ" v-model="instsupplies.supplies_number" required></ion-input>
    </ion-item>

    <ion-item>
    <ion-select placeholder="เลือกบริษัทขนส่ง" v-model="instsupplies.company">
        <ion-select-option :value="1">ไปรษณีย์ไทย</ion-select-option>
        <ion-select-option :value="2">Kerry Express</ion-select-option>
        <ion-select-option :value="3">J&T EXPRESS</ion-select-option>
        <ion-select-option :value="4">FLASH EXPRESS</ion-select-option>
        <ion-select-option :value="5">BEST EXPRESS</ion-select-option>
        <ion-select-option :value="6">Ninja Van</ion-select-option>
    </ion-select>
    </ion-item>

    </ion-list>
    <ion-button expand="block" @click="sendData" routerLink="/suppliesPage">บันทึกข้อมูล</ion-button>
    </ion-card-content>
    </ion-card>
      </ion-content>
    </ion-page>

    </template>
  
  <script lang="ts">
  import axios from 'axios';
  import { defineComponent } from 'vue';
  import { IonButton,IonSelect,IonSelectOption,IonInput, IonItem, IonLabel, IonList,IonCard, IonCardContent,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButton,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonSelectOption,
      IonToolbar,IonCard, IonCardContent,IonInput, IonItem, IonLabel, IonList,IonSelect
    },

  data() {
    return {
      
      supplies: {},

      instsupplies: {
        room_number: "",
        own_name: "",
        supplies_number: "",
        company:"",
      }
    }
  },

    methods: {
          /////instdata///////
    sendData() {
      console.log("sendData active");

      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/supplies.json", {
        key:"",
        room_number: this.instsupplies.room_number,
        own_name: this.instsupplies.own_name,
        supplies_number: this.instsupplies.supplies_number,
        company:this.instsupplies.company,
        supplies_status:1,
        recipient:0,
        recipient_name:"",
        recipient_phone:"",


      })
        .then(function (response) {
          console.log(response);
          axios.patch(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/supplies/${response.data.name}.json`,{key:response.data.name})
        })
        .catch(function (error) {
          console.log(error);
        });

      this.clearData();
    },
    clearData() {
      this.instsupplies.room_number = "";
      this.instsupplies.own_name = "";
      this.instsupplies.supplies_number = "";
      this.instsupplies.company = "";
    }
  },

  });
  </script>
  
  <style scoped>
  #container {
    text-align: center;
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  
  #container strong {
    font-size: 20px;
    line-height: 26px;
  }
  
  #container p {
    font-size: 16px;
    line-height: 22px;
    color: #8c8c8c;
    margin: 0;
  }
  
  #container a {
    text-decoration: none;
  }
  ion-card{
    width: auto;
    min-height: 92vh;
    background-color: rgb(250, 250, 250);
  }
  </style>
  
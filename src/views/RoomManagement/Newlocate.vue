<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>เพิ่มหอพัก</ion-title>
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
            <form action="">
            <ion-item color="light">
                  <ion-card-header >
                      
                      <ion-card-title>ตั้งค่าหอพัก</ion-card-title>
                  </ion-card-header>
              </ion-item>
            <ion-card-content>
                <ion-list>
                <ion-item>
                <ion-label>ชื่อหอพัก :</ion-label>
                <ion-input type="text" v-model="friend.namedormitory"></ion-input>
                </ion-item>

                <ion-item>
                <ion-label>ที่อยู่หอพัก :</ion-label>
                <ion-input type="text" v-model="friend.addressdormitory"></ion-input>
                </ion-item>

                <ion-item>
                <ion-label>เบอร์โทรศัพท์ :</ion-label>
                <ion-input type="text" v-model="friend.phonedormitory"></ion-input>
               
                </ion-item>
            </ion-list>     
            </ion-card-content>
          </form>
            </ion-card>
    <ion-card>
      <IonRow>
      <div className="ion-float-end">
        
        <ion-button  type="submit" @click="sendData" routerLink="/PageNewRoom">ต่อไป</ion-button>
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
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton,IonInput } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonInput
    },
    data(){
    return{
      friend:{
        namedormitory:"",
        addressdormitory:"",
        phonedormitory:"",
      }
    }
},
methods:{
  sendData(){
    console.log("sendData active");

    axios.post("http://localhost/api.php", {
      namedormitory: this.friend.namedormitory,
      addressdormitory: this.friend.addressdormitory,
      phonedormitory: this.friend.phonedormitory,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    this.clearData();
  },
  clearData(){
    this.friend.namedormitory = "";
    this.friend.addressdormitory = "";
    this.friend.phonedormitory = "";
  }
},
  });
  </script>
  <style>
  </style>
    
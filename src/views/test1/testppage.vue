<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar color="purple">
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
          <ion-grid>
            <ion-row>
              
  
              <ion-col :sizeXs="12" :sizeMd="6">
                <ion-card>
                  <ion-grid>
                    <ion-item>
                      <label>ห้องพัก</label>
                    </ion-item>
                    <ion-item>
                      <ion-label>ชั้น</ion-label>
                      <ion-select interface="popover" placeholder="เลือกชั้น">
                        <ion-select-option value="1">1</ion-select-option>
                        <ion-select-option value="2">2</ion-select-option>
                        <ion-select-option value="3">3</ion-select-option>
                        <ion-select-option value="4">4</ion-select-option>
                        <ion-select-option value="5">5</ion-select-option>
                      </ion-select>
                    </ion-item>
                    <ion-item color="light">
                      <ion-label slot="start">ห้อง</ion-label>
                      <ion-label slot="start">ประเภทห้อง</ion-label>
                    </ion-item>
                    
                    <ion-item v-for="roomtype in roomtype" v-bind:key="roomtype.id">
                        <ion-label>{{ roomtype.room_id }}</ion-label>
                      <ion-label>{{ roomtype.room_type }}</ion-label>
                      <ion-button  @click="deleteDataFromDatabase(roomtype.id)">ลบ</ion-button>
                    </ion-item>
  
                  </ion-grid>
                </ion-card>
              </ion-col>
            </ion-row>
          </ion-grid>
          <ion-card>
            <IonRow>
              <div className="ion-float-end">
                <ion-button routerLink="/newroomfour">ต่อไป</ion-button>
              </div>
            </IonRow>
          </ion-card>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import * as Vue from 'vue' // in Vue 3
  import axios from 'axios'
  
  import { home, navigate, star, close, create } from 'ionicons/icons';
  import { defineComponent } from 'vue';
  import { IonSelect, IonSelectOption, IonItem, IonCard,  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
  import { add } from 'ionicons/icons';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonSelect, IonSelectOption, IonItem, IonCard,  IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton
    },
    setup() {
      return { home, navigate, star, close, create }
    },
    data() {
      return {
        room_id:'',
        roomtype:'',
  
      }
    },
  
    methods: {  
        async getDataFromDatabase() {
       
          const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json`+this.room_id).then((response)=>{
            console.log(JSON.stringify(this.roomtype))
            this.roomtype = response.data;
          });                
        
      },
     /*async deleteDataFromDatabase() {
       
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json`+this.room_id).then(()=>{
          this.getDataFromDatabase();
        });
       
      },*/

      
    },
    created() {
      this.getDataFromDatabase();
  
    },
  
  });
  </script>

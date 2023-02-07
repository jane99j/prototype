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
                <ion-item>
                  <ion-card-header>
                    <ion-card-title>จำนวนชั้น</ion-card-title>
                  </ion-card-header>
                </ion-item>
                <ion-card-content>
                  <ion-list>
                    <ion-item>
                      <ion-label>ชั้น</ion-label>
                      <ion-select interface="popover" placeholder="เลือกชั้น" v-model="row.roomclas">
                        <ion-select-option value="1">1</ion-select-option>
                        <ion-select-option value="2">2</ion-select-option>
                        <ion-select-option value="3">3</ion-select-option>
                        <ion-select-option value="4">4</ion-select-option>
                        <ion-select-option value="5">5</ion-select-option>
                      </ion-select>
                    </ion-item>
                    <ion-item>
                      <ion-label>เลือกประเภทห้องพัก</ion-label>
                      <ion-select interface="popover" placeholder="ประเภทห้องพัก" v-model="row.room_type">
                        <ion-select-option value="ห้องทั่วไป">ห้องทั่วไป</ion-select-option>
                        <ion-select-option value="ห้องแอร์">ห้องแอร์</ion-select-option>
                        <ion-select-option value="ห้องพัดลม">ห้องพัดลม+แอร์</ion-select-option>
                      </ion-select>
                    </ion-item>


                    <ion-item>
                      <ion-label>หมาเลขห้อง :</ion-label>
                      <ion-input v-model="row.room_id"></ion-input>
                    </ion-item>
                    
                    <ion-button expand="block" @click="sendData" routerLink="">เพิ่มห้อง</ion-button>
                  </ion-list>
                </ion-card-content>
              </ion-card>
            </ion-col>

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


                  <ion-item v-for="i in roomtype" :key="i.room_id">

                    <ion-label>{{ i.room_id }}</ion-label>
                    <ion-label>{{ i.room_type }}</ion-label>
                    <ion-button slot="end" :routerLink="{
                      name: 'room_id', params: {
                        room_id: i.room_id, room_type: i.room_type
                      }
                    }">
                      <ion-icon slot="icon-only" :icon="create"></ion-icon>
                    </ion-button>


                    <ion-button slot="end">
                      <ion-icon slot="icon-only" :icon="close"></ion-icon>
                    </ion-button>

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
import { IonLabel, IonSelect, IonSelectOption, IonItem, IonCard, IonInput, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';
import { add } from 'ionicons/icons';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonLabel, IonSelect, IonSelectOption, IonItem, IonCard, IonInput, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton
  },
  setup() {
    return { home, navigate, star, close, create }
  },
  data() {
    return {
      count: 0,
      roomtype: {},

      row: {
        room_id: "",
        room_type: "",
        roomclas: '',
      },

    }
  },

  methods: {


    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json`);
        this.roomtype = response.data;
        console.log(JSON.stringify(this.roomtype))
      } catch (error) {
        console.error(error);
      }
    },
    sendData() {
      console.log("sendData active");
      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json", {
        room_id: this.row.room_id,
        room_type: this.row.room_type,
        roomclas: this.row.roomclas,

      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      /// window.location.reload();
      this.clearData();
      //this.re();

    },
    clearData() {
      this.row.room_id = "";
      this.row.room_type = "";
      this.row.roomclas = "";
    },
    re() {
      window.location.reload();
    },
  },
  created() {
    this.getDataFromDatabase();

  },

});
</script>
<style>
.counter__section {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>

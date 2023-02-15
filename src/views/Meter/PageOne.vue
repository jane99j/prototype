<template>
  <ion-page>
    <ion-header :translucent="true">
    <ion-toolbar color="purple">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>จดมิเตอร์ไฟ</ion-title>
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
          <ion-item color="light">
          <ion-card-header>
            <ion-card-title>จดรอบมิเตอร์</ion-card-title>
          </ion-card-header>          
        </ion-item>
        <ion-grid>
      <ion-row>
        <ion-col size="3"> <ion-datetime-button datetime="datetime1"></ion-datetime-button>
          <ion-modal :keep-contents-mounted="true">
          <ion-datetime id="datetime1"></ion-datetime>
          </ion-modal>
          <ion-item>
          <ion-label>เลือกรอบบิลปัจจุบัน</ion-label></ion-item>
        </ion-col>

        <ion-col></ion-col>
        <ion-col></ion-col>
      </ion-row>
    </ion-grid>

    <ion-grid>
    <ion-row>

        <ion-col size="3">

          <ion-list>
    <ion-item>
      <ion-select interface="popover" placeholder="เลือกชั้น">
        <ion-select-option value="apples">ชั้นที่1</ion-select-option>
        <ion-select-option value="oranges">ชั้นที่2</ion-select-option>
        <ion-select-option value="bananas">ชั้นที่3</ion-select-option>
      </ion-select>
    </ion-item>
  </ion-list>

        </ion-col>
        <ion-col></ion-col>
        <ion-col>
          <ion-nav-link routerLink="PageTwo">
          <ion-button>จดมิเตอร์น้ำ</ion-button></ion-nav-link>
        </ion-col>
      </ion-row>
    </ion-grid>    

<ion-card>

  <ion-grid>
  <ion-row>
    <ion-col>รายชื่อห้อง</ion-col>
    <ion-col>จดก่อนหน้า</ion-col>
    <ion-col>จดล่าสุด</ion-col>
    <ion-col>หน่วยที่ใช้</ion-col>
  </ion-row>
</ion-grid>


<ion-grid>
  <ion-row v-for="i in roomtype" :key="i.id">
    <ion-col>{{ i.room_id }}</ion-col>
    <ion-col>{{i.notewater_f}}</ion-col>
    <ion-col><ion-input v-model="i.notewater_l"></ion-input></ion-col>
    <ion-col>{{filteroption(i.notewater_f, i.notewater_l,i.idroom)}}</ion-col>
  </ion-row>
</ion-grid>

</ion-card>
<ion-button expand="block" @click="filteroption">บันทึก</ion-button>
</ion-card>
      </ion-content>
    </ion-page>
</template>


<script lang="ts">
import axios from 'axios';
  import { ref, defineComponent } from 'vue';
  import {IonMenuButton,IonButtons,IonPage,IonNavLink,IonButton ,IonList, IonSelect, IonSelectOption,IonGrid,IonHeader, IonTitle, IonToolbar, IonContent,IonCol,IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem, IonLabel,IonInput } from '@ionic/vue';
import { Item } from '@ionic/core/dist/types/components/item/item';

  export default defineComponent({
    components: { IonMenuButton,IonButtons,IonPage,IonNavLink,IonButton ,IonList, IonSelect, IonSelectOption,IonGrid,IonHeader, IonTitle, IonToolbar, IonContent, IonCol,IonRow ,IonCard, IonDatetime, IonDatetimeButton, IonModal, IonItem ,IonLabel,IonInput },
    data() {
      return {
        roomtype: {},
        meter:[],
        meterUpdate:{
          notewater_l:"",
        },
        inst_room:{
          notewater_l:"",
          notewater_f:"",
        },
        avg:[] as any,
        
        
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
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/meter_note.json`);
        this.meter = response.data;
        console.log(JSON.stringify(this.meter))
      } catch (error) {
        console.error(error);
      }
  },
    filteroption(meterf: number,meterl: number,idroom: string){
      let avg= Number(meterf)+Number(meterl)
      console.log(idroom,"test")
      axios.patch(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${idroom}.json`,{avg:avg,notewater_l:meterl})
      //wait this.getDataFromDatabase();
      //this.avg = this.meter.map((item: {note_l: number,note_f: number})=> {
        //item.note_l + item.note_f;
      //})
        return avg;
    },
  
  // updateData() {
  //     axios.patch(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/`, {
  //       notewater_l:this.meterUpdate.notewater_l,
        

  //     })
  //       .then(function (response) {
  //         console.log(response);
  //       })
  //       .catch(function (error) {
  //         console.log(error);
  //       })
  //   },
    sendData() {
      console.log("sendData active");

      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json", {
        notewater_l: this.inst_room.notewater_l,
      })
        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      },
},
  created() {
      this.getDataFromDatabase();
      //this.updateData();
  

    },
  });
</script>
<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0; 

}
#container a {
  text-decoration: none;
}
ion-segment{
  size: 10px;
  text-align: left;
}

ion-searchbar.ios{
  width: 80%;
}
ion-label{
  text-align: center;
}
ion-datetime-button{
  padding-top: 5%;
}
ion-select{
  margin-left: 40%;
}
ion-col{
  text-align: center;
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
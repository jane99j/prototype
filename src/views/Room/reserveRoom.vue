<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>เพิ่มผู้เข้าพัก</ion-title>
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

              <ion-card-title>เพิ่มผู้เข้าพัก</ion-card-title>
            </ion-card-header>
          </ion-item>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label>{{ roomtype.room_id }}</ion-label>
              </ion-item>
              <ion-item>
                <ion-label>{{ $route.params.type }}</ion-label>
              </ion-item>

              <ion-item>
                <ion-label>สถานะ</ion-label>
                <ion-label>{{ $route.params.sta }}</ion-label>
              </ion-item>

              <ion-item>
                <ion-label>ชื่อ</ion-label>
                <ion-input text placeholder="ชื่อ" v-model="residents.fname"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label>สกุล</ion-label>
                <ion-input text placeholder="สกุล" v-model="residents.lname"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label>เบอร์โทรศัพท์</ion-label>
                <ion-input text placeholder="092-XXXXXX" v-model="residents.phone"></ion-input>
              </ion-item>

              <ion-item>
                <ion-label>วันที่เข้าพัก : </ion-label>
                <ion-datetime-button datetime="datetime1"></ion-datetime-button>
                <ion-modal :keep-contents-mounted="true">
                  <ion-datetime id="datetime1"></ion-datetime>
                </ion-modal>
              </ion-item>
            </ion-list>
          </ion-card-content>
        </ion-card>
        <ion-card>
          <IonRow>
            <div className="ion-float-end">
              <ion-button @click="sendData">บันทึก</ion-button>
            </div>
          </IonRow>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>
  
  
<script lang="ts">
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import { IonCardHeader, IonCardTitle, IonList, IonCardContent, IonCard, IonRow, IonModal, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonDatetime, IonLabel, IonItem, IonInput, IonDatetimeButton } from '@ionic/vue';
import { Item } from '@ionic/core/dist/types/components/item/item';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonCardHeader, IonCardTitle, IonList, IonCardContent, IonCard, IonRow, IonModal, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonDatetime, IonLabel, IonItem, IonInput, IonDatetimeButton
  },
  data() {
    return {
      roomtype: [],
      residents: {
        fname: "",
        lname: "",
        phone: "",
        room_id: "",



      },
    }
  },
  methods: {
    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${this.$route.params.idroom}.json`);
        this.roomtype = Object.values(response.data);
        console.log(this.roomtype)
        console.log(this.$route.params.roomtype)
        // this.roomtype = this.roomtype.filter((item: { room_id: string }) =>
        //   item.room_id === this.$route.params.room_id
        // )
        console.log(this.roomtype)
      } catch (error) {
        console.error(error);
      }
    },
    sendData() {
      console.log("sendData active");

      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/residents.json", {
        room_id: this.$route.params.room_id,
        fname: this.residents.fname,
        lname: this.residents.lname,
        phone: this.residents.phone,
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
      this.residents.fname = "";
      this.residents.lname = "";
      this.residents.phone = "";
    },
    setup() {
      const datetime = ref();
      const reset = () => datetime.value.$el.reset();
      const cancel = () => datetime.value.$el.cancel();
      const confirm = () => datetime.value.$el.confirm();
      return { datetime, reset, cancel, confirm }
    }
  },
  created() {
    this.getDataFromDatabase();
  },

});
</script>
<style>

</style>

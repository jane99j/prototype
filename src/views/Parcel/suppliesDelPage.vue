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

          <ion-card>
            <ion-card-header>
              <ion-card-title>ผู้รับพัสดุ</ion-card-title>
            </ion-card-header>

            <ion-card-content>

              <ion-list>

                <ion-item>
                  <ion-label>ห้อง : {{ $route.params.room }}</ion-label>
                </ion-item>

                <ion-item>
                  <ion-label>ชื่อ : {{ $route.params.name }}</ion-label>
                </ion-item>

                <ion-item>
                  <ion-label>หมายเลขพัสดุ : {{ $route.params.supplies }}</ion-label>
                </ion-item>
                <ion-item>
                  <ion-label  v-if="$route.params.company === '1'">บริษัทขนส่ง : ไปรษณีย์ไทย</ion-label>
                  <ion-label  v-if="$route.params.company === '2'">บริษัทขนส่ง : KerryExpress</ion-label>
                  <ion-label  v-if="$route.params.company === '3'">บริษัทขนส่ง : J&TEXPRESS</ion-label>
                  <ion-label  v-if="$route.params.company === '4'">บริษัทขนส่ง : FLASHEXPRESS</ion-label>
                  <ion-label  v-if="$route.params.company === '5'">บริษัทขนส่ง : BESTEXPRESS</ion-label>
                  <ion-label  v-if="$route.params.company === '6'">บริษัทขนส่ง : NinjaVan</ion-label>
                </ion-item>

              </ion-list>

              <ion-item>
                <ion-label>เลือกผู้รับพัสดุ</ion-label>
                <ion-select v-model="suppliesUpdate.recipient">
                  <ion-select-option :id="1" :value="1">เจ้าของ</ion-select-option>
                  <ion-select-option :id="2" :value="2">รับแทน</ion-select-option>
                </ion-select>
              </ion-item>


              <ion-list>

                <ion-item>
                  <ion-input placeholder="ชื่อ-สกุล" v-model="suppliesUpdate.recipient_name"></ion-input>
                </ion-item>

                <ion-item>
                  <ion-input placeholder="เบอร์โทรศัพท์" v-model="suppliesUpdate.recipient_phone"></ion-input>
                </ion-item>

              </ion-list>


              <ion-button color="success" @click="updateData" routerLink="/suppliesPage">นำจ่ายพัสดุ</ion-button>
              <ion-button color="danger" routerLink="/suppliesPage">ยกเลิก</ion-button>
            </ion-card-content>

          </ion-card>

        </ion-card-content>
      </ion-card>
    </ion-content>
  </ion-page>

</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonSelectOption, IonSelect, IonInput, IonItem, IonList, IonButton, IonLabel, IonCardTitle, IonCardHeader, IonCard, IonCardContent, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle,
    IonToolbar, IonCard, IonCardContent, IonCardHeader, IonCardTitle,
    IonLabel, IonList, IonItem, IonButton, IonInput,
    IonSelectOption, IonSelect,
  },
  data() {
    return {
      supplies: [],
      supplies2: {},
      supplies3: {},
      suppliess: [],
      suppliesUpdate:{
        recipient:"",
        recipient_name:"",
        recipient_phone:"",
      }

    }
  },
  methods: {
    // async getDataFromDatabase() {
    //   try {
    //     const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/supplies.json`);
    //     this.supplies = Object.values(response.data);
    //     console.log(this.supplies)
    //     this.supplies = this.supplies.filter((item: { room_number: string }) =>
    //       item.room_number === this.$route.params.room);
    //     console.log(this.supplies)
    //   } catch (error) {
    //     console.error(error);
    //   }
    // },
    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/supplies.json`);
        this.supplies = Object.values(response.data);
        this.supplies2 = Object.keys(response.data);
        this.supplies3 = Object.entries(response.data);
        // this.suppliess
        
        console.log(this.supplies);
        console.log(this.supplies2);
        console.log(this.supplies3);
        this.supplies = this.supplies.filter((item: { room_number: string }) =>
          item.room_number === this.$route.params.room);
        console.log(this.supplies)
      } catch (error) {
        console.error(error);
      }
    },
    updateData() {
      axios.put(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/supplies/`, {
        supplies_status:2,
        recipient:this.suppliesUpdate.recipient,
        recipient_name:"",
        recipient_phone:"",


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
    this.updateData();
  }
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
  color: #ffffff;
  margin: 0;
}

#container a {
  text-decoration: none;
}

ion-card {
  width: auto;
  min-height: 92vh;
}

ion-card ion-card {
  width: 80%;
  min-height: auto;
  margin-left: 10%;
  margin-top: 3%;
  border-radius: 10px;
}

h2 {
  font-size: 18px;
  padding-top: 9%;
}

ion-input {
  display: block;
}

ion-button {
  float: right;
}
</style>

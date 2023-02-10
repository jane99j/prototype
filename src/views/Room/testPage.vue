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

      <div id="app">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <h1>TEST DATABASE</h1>
        <ion-row>
            <ion-col :sizeXs="12" :sizeMd="6">
              <ion-card>
                <ion-item>
                  <ion-card-header>
                    <ion-card-title>จำนวนชั้น{{ $route.params.room_id }}</ion-card-title>
                  </ion-card-header>
                </ion-item>
                <ion-card-content>
                  <ion-list>
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
                    <ion-item>
                      <ion-label>เลือกประเภทห้องพัก</ion-label>
                      <ion-select interface="popover" placeholder="ประเภทห้องพัก" >
                        <ion-select-option  ></ion-select-option>
                      </ion-select>
                    </ion-item>


                    <ion-item>
                      <ion-label>หมาเลขห้อง :</ion-label>
                      <ion-input ></ion-input>
                    </ion-item>
                    
                    <ion-button expand="block" @click="sendData" routerLink="">เพิ่มห้อง</ion-button>
                  </ion-list>
                </ion-card-content>
              </ion-card>
            </ion-col>
            </ion-row>
      </div>



    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  },
  data() {
    return {
      roomtype: [],
    }
  },
  methods: {

    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json`);
        this.roomtype = Object.values(response.data);
        console.log(this.roomtype)
        console.log(this.$route.params.roomtype)
        this.roomtype = this.roomtype.filter((item: { room_id: string }) =>
          item.room_id === this.$route.params.room_id
        )
        console.log(this.roomtype)
      } catch (error) {
        console.error(error);
      }
    },
   /* putdate() {
      axios.put("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room.json", { room_id: })

        .then(function (response) {
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
    },*/
  },
  created() {
    this.getDataFromDatabase();
  },
  /*beforeMount() {
    
  }*/

});

</script>

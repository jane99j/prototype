<template>
  <ion-page>
    <ion-header :translucent="true">
    <ion-toolbar color="purple">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>จัดการห้องพัก</ion-title>
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
    <ion-col > 
      <ion-card>  
      </ion-card>
            <ion-card>
                  <ion-item color="light">
                        <ion-card-header >                            
                            <ion-card-title>จัดการห้องพัก(ค่าห้อง)</ion-card-title>
                            <ion-label>แก้ไขข้อมูล รายระเอียดห้องพัก</ion-label>
                        </ion-card-header>
                    </ion-item>
            <ion-card-content>
                    <ion-item>
                      <ion-input readonly>เลขห้อง : {{ room.room_id }}</ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label>ประเภทห้อง : {{ room.room_type }}</ion-label>

                        <ion-select interface="popover" placeholder="ประเภทห้อง" slot="end" v-model="room_type">
                          <ion-select-option  v-for="i in roomtype" :key="i.id" :value="i.room_type">{{ i.room_type }}</ion-select-option>
                        </ion-select>                  
                      </ion-item> 
                      <!-- <ion-item>
                          <ion-label>กำหนดราคา :</ion-label>
                          <ion-input value="3,000"></ion-input>
                      </ion-item> -->
<!--                       
                    <ion-item>
                      <ion-label>ของใช้ภายในห้อง</ion-label>
                    </ion-item> -->
                        <ion-button routerLink="/editroomPage" expand="block" @click="updateData">บันทึก</ion-button>               
            </ion-card-content>
            </ion-card>

            </ion-col>
    <!-- <ion-col :sizeXs="12" :sizeMd="4"> 
      <ion-card>        
                <ion-grid fixed="true">
                  <ion-item color="light">
                    <ion-card-title>ประเภทห้อง</ion-card-title>
                  </ion-item>
                  <ion-item>
                    <ion-col></ion-col>
                    <ion-col></ion-col>
                    <ion-col>
                      <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                    </ion-col>
                  </ion-item>              
                </ion-grid>
    </ion-card>

    </ion-col> -->
</ion-row>
</ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import axios from 'axios';
import { ref,defineComponent } from 'vue';
import { RouteLocationRaw,} from 'vue-router';
import { IonSelect, IonSelectOption,IonInput,IonLabel,IonItem,IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonSelect, IonSelectOption,IonInput,IonLabel,IonItem,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle
  },
  data() {
      return {
        room: {},
        roomtype:{},
        room_type:"",
  
    }
  },
  methods: {
    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${this.$route.params.key}.json`);
        this.room = (response.data);

        // this.supplies = this.supplies0.filter((item: { room_number: string }) =>
        //   item.room_number === this.$route.params.room);
        console.log(this.room)
      } catch (error) {
        console.error(error);
      }
    },
    async getroomtype() {
    try {
      const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_roomtype.json`);
      this.roomtype = response.data;
      console.log(JSON.stringify(this.roomtype))
    } catch (error) {
      console.error(error);
    }
  },
  updateData() {
      axios.patch(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${this.$route.params.key}.json`,{
        room_type:this.room_type
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
    this.getroomtype();
  }
  });
</script>
<style>
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
  


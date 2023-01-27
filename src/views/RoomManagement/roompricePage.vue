<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="purple">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>กำหนดราคาค่าห้องพัก</ion-title>
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

              <ion-card-title>กำหนดราคาค่าห้องพัก</ion-card-title>
              <ion-label>รายการค่าบริการจะแสดงในขั้นตอนเลือกประเภทห้องพัก</ion-label>
            </ion-card-header>
          </ion-item>
          <ion-card-content>
            <ion-item>
              <ion-label>ประเภทห้อง :</ion-label>
              <ion-input text placeholder="ระบุประเภทห้อง" v-model="instroom.room_type"></ion-input>
            </ion-item>
            <ion-item>
              <ion-label>กำหนดราคา :</ion-label>
              <ion-input text placeholder="ระบุราคาห้องพัก" v-model="instroom.room_price"></ion-input>
            </ion-item>

            <ion-item>
              <ion-label>ของใช้ภายในห้อง</ion-label>
            </ion-item>
            <ion-button @click="presentAlert">เพิ่มรายการข้องใช้</ion-button>

            <ion-item v-for="i in instFurniture" :key="i.id">
              <ion-checkbox  slot="start" v-checkbox="instroom.fniture_name"> </ion-checkbox>
              <ion-label>{{ i.fniture_name }}</ion-label>
            </ion-item>


            <IonRow>
              <div className="ion-float-end">
                <ion-button @click="sendData" routerLink="#">เพิ่ม</ion-button>
              </div>
            </IonRow>


          </ion-card-content>
        </ion-card>
        <ion-card>
          <ion-card-content>
            <ion-grid fixed="true">
              <ion-item>
                <ion-col>ห้องทั่วไป</ion-col>
                <ion-col>3,000</ion-col>
                <ion-col>
                  <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                </ion-col>
                <ion-col>
                  <ion-text color="tertiary" routerLink="">รายละเอียด</ion-text>
                </ion-col>
              </ion-item>

              <ion-item>
                <ion-col>ห้องแอร์</ion-col>
                <ion-col>3,500</ion-col>
                <ion-col>
                  <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                </ion-col>
                <ion-col>
                  <ion-text color="tertiary" routerLink="">รายละเอียด</ion-text>
                </ion-col>
              </ion-item>

              <ion-item>
                <ion-col>ห้องVIP</ion-col>
                <ion-col>4,000</ion-col>
                <ion-col>
                  <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                </ion-col>
                <ion-col>
                  <ion-text color="tertiary" routerLink="">รายละเอียด</ion-text>
                </ion-col>
              </ion-item>
            </ion-grid>
          </ion-card-content>
        </ion-card>
        <ion-card>
          <IonRow>
            <div className="ion-float-end">
              <ion-button routerLink="/newroomPage">ต่อไป</ion-button>
            </div>
          </IonRow>
        </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>
  
  
<script lang="ts">
import axios from 'axios';
import { ref, defineComponent } from 'vue';
import { alertController, IonCheckbox, IonInput, IonLabel, IonItem, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonCheckbox, IonInput, IonLabel, IonItem, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle
  },
  setup() {
    const handlerMessage = ref('');
    const roleMessage = ref('');
    const presentAlert = async () => {
      const alert = await alertController.create({
        header: 'เพิ่มรายการที่ต้องการ',
        buttons: ['OK'],
        inputs: [
          {
            placeholder: 'รายการ',

          },
          {
            placeholder: 'ราคา',
          },
        ],
      });
      await alert.present();
      const { role } = await alert.onDidDismiss();
      roleMessage.value = `Dismissed with role: ${role}`;
    };
    return {
      presentAlert
    };
  },
  data() {
    return {
      instFurniture: {
      },

      instroom: {
        room_type: "",
        room_price: "",
        fniture_name: "",
      }
    }
  },
  methods: {
    ////GETdata////
    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_furniture.json`);
        this.instFurniture = response.data;
        console.log(JSON.stringify(this.instFurniture))
      } catch (error) {
        console.error(error);
      }
    },
    /////instdata///////
    sendData() {
      console.log("sendData active");

      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_roomtype.json", {
        fniture_name: this.instroom.fniture_name,
        room_price: this.instroom.room_price,
        room_type: this.instroom.room_type,
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
      this.instroom.fniture_name = "";
      this.instroom.room_price = "";
      this.instroom.room_type = "";
    }
  },
  created() {
      this.getDataFromDatabase();
    },

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

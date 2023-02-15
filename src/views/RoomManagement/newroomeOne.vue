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
          <ion-title size="large">เพิ่มหอพัก</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>

        <ion-grid>
          <ion-row>
            <ion-col>
              <ion-card>
                <ion-item color="light">
                  <ion-card-header>
                    <ion-card-title>กำหนดน้ำไฟ</ion-card-title>
                    <ion-label>ราคาต่อหน่วยค่าน้ำ</ion-label>
                  </ion-card-header>
                </ion-item>

                <ion-card-content>
                  <ion-list>
                    <ion-item>
                      <ion-label>การคิดค่าน้ำ</ion-label>
                      <ion-select interface="popover" placeholder="เลือกการคิดค่าน้ำ" v-model="setmeter.water_type">
                        <ion-select-option value="1">แบบเหมาจ่าย</ion-select-option>
                        <ion-select-option value="2">ตามหน่วยจริง</ion-select-option>
                      </ion-select>
                    </ion-item>
                    <ion-item>
                      <ion-label>ราค่าน้ำ :</ion-label>
                      <ion-input placeholder="" v-model="setmeter.water"></ion-input>
                    </ion-item>

                  </ion-list>

                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col>
              <ion-card>
                <ion-item color="light">
                  <ion-card-header>
                    <ion-card-title>กำหนดน้ำไฟ</ion-card-title>
                    <ion-label>ราคาต่อหน่วยค่าไฟฟ้า</ion-label>
                  </ion-card-header>
                </ion-item>

                <ion-card-content>
                  <ion-list>
                    <ion-item>
                      <ion-label>การคิดค่าไฟ</ion-label>
                      <ion-select interface="popover" placeholder="เลือกการคิดค่าน้ำ" v-model="setmeter.fire_type">
                        <ion-select-option value="1">แบบเหมาจ่าย</ion-select-option>
                        <ion-select-option value="2">ตามหน่วยจริง</ion-select-option>
                      </ion-select>
                    </ion-item>
                    <ion-item>
                      <ion-label>ราค่าน้ำ :</ion-label>
                      <ion-input placeholder="" v-model="setmeter.fire"></ion-input>
                    </ion-item>

                  </ion-list>

                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-row>
        </ion-grid>

        <ion-card>
          <IonRow>
            <div className="ion-float-end">
              <ion-button routerLink="/newroomfinish" @click="sendData">ยืนยัน</ion-button>
            </div>
          </IonRow>
        </ion-card>

      </div>
    </ion-content>
  </ion-page>

</template>

<script lang="ts">
import axios from 'axios';
import { IonSelect, IonSelectOption, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonList, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { IonSelect, IonSelectOption, IonButton, IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonItem, IonLabel, IonList, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar },

  data() {
    return {
      setmeter: {
        water_type: "",
        fire_type: "",
        fire: "",
        water: "",

      },

    }
  },

  methods: {
    sendData() {
      console.log("sendData active");
      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/setmeter.json", {
        idsetmeter: "",
        water_type: this.setmeter.water_type,
        fire_type: this.setmeter.fire_type,
        fire: this.setmeter.fire,
        water: this.setmeter.water,

      })
        .then(function (response) {
          axios.patch(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/setmeter/${response.data.name}.json`, { idsetmeter: response.data.name })
          console.log(response);
        })
        .catch(function (error) {
          console.log(error);
        });
      /// window.location.reload();
      this.clearData();


    },
    clearData() {
      this.setmeter.water_type = "";
      this.setmeter.fire_type = "";
      this.setmeter.fire = "";
      this.setmeter.water = "";

        // this.re();
    }
    // re() {
    //   window.location.reload();
    // },
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
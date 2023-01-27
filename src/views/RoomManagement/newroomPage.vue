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
        <ion-card>
          <ion-item color="light">
            <ion-card-header>

              <ion-card-title>กำหนดการชำระ</ion-card-title>
            </ion-card-header>
          </ion-item>
          <ion-card-content>
            <ion-list>
              <ion-item>
                <ion-label>วันสุดท้ายของการชำระเงิน</ion-label>
                <ion-select interface="popover" placeholder="เลือกวัน" v-model="dateline.dateline">
                  <ion-select-option value="3">ทุกวันที่3</ion-select-option>
                  <ion-select-option value="4">ทุกวันที่5</ion-select-option>
                  <ion-select-option value="6">ทุกวันที่6</ion-select-option>
                </ion-select>
              </ion-item>
            </ion-list>

            <ion-list>
              <ion-item>
                <ion-label>กำหนดค่าปรับ</ion-label>
                <ion-input text placeholder="ระบุจำนวนเงิน" v-model="dateline.priceday">บาท</ion-input>
              </ion-item>
            </ion-list>
            <ion-radio-group value="turtles" v-model="dateline.need">
              <ion-item>
                <ion-label>ต้องการ </ion-label>
                <ion-radio slot="start" value="true"></ion-radio>
              </ion-item>

              <ion-item>
                <ion-label>ไม่ต้องการ</ion-label>
                <ion-radio slot="start" value="false"></ion-radio>
              </ion-item>
            </ion-radio-group>
            
          </ion-card-content>
        </ion-card>
        <ion-card>
          <IonRow>
            <div className="ion-float-end">
              <ion-button @click="sendData" routerLink="/newroometwo">ต่อไป</ion-button>
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
import { IonRadioGroup, IonItem, IonRadio, IonSelectOption, IonSelect, IonInput, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonRadioGroup, IonItem, IonRadio, IonSelectOption, IonSelect, IonInput, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton
  },
  data() {
    return {
      dateline: {
        dateline: "",
        priceday: "",
        need: "",
      }
    }
  },
  methods: {
    sendData() {
      console.log("sendData active");

      axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/dateline.json", {
        dateline: this.dateline.dateline,
        priceday: this.dateline.priceday,
        need: this.dateline.need,
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
      this.dateline.dateline = "";
      this.dateline.priceday = "";
      this.dateline.need = "";
    }

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

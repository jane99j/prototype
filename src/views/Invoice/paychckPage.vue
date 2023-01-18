

<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="purple">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>รับเงิน</ion-title>
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
          <ion-item color="light">
              <h4><ion-text>ห้อง 101</ion-text></h4>    
            </ion-item>
          <ion-row>
          <ion-col :sizeXs="12" :sizeMd="8">
            
              <ion-card>
                <ion-list>
              <ion-item color="light">
                  <h2><ion-label>รับเงิน</ion-label></h2>
              </ion-item>
              <ion-item>
                  <ion-label>จำนวนเงิน</ion-label>
                  <ion-input placeholder="ระบุจำนวนเงิน"></ion-input>
              </ion-item>

              <ion-list>
                  <ion-item>
                  <ion-label>ชำระเงิน</ion-label>
                  <ion-select interface="popover" placeholder="เลือกการชำระ">
                  <ion-select-option value="apples">เงินสด</ion-select-option>
                  <ion-select-option value="oranges">โอนจ่าย</ion-select-option>
                  </ion-select>
              </ion-item>

              <ion-item  color="light">
                  <p><ion-text>รับเงินทั้งหมด 5,000</ion-text></p>
              </ion-item>
              
              <ion-button color="success" expand="block" @click="presentAlert">รับเงิน</ion-button>
              <p>{{ handlerMessage }}</p>
              <p>{{ roleMessage }}</p>
              </ion-list>
                </ion-list>
              </ion-card>
          </ion-col>
        </ion-row>
        </ion-grid>

       
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { alertController ,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonList, IonItem, IonSelect, IonSelectOption,IonText,IonButton, IonGrid  } from '@ionic/vue';
import router from '@/router';
import { RouterLink } from 'vue-router';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonList,
    IonItem,
    IonSelect,
    IonSelectOption,
    IonText,
    IonButton,
    IonGrid
}, 

    setup() {
      const handlerMessage = ref('');
      const roleMessage = ref('');

      const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'ยืนยันการชำระเงินหรือไม่!',
          buttons: [
            {
              text: 'ยกเลิก',
              role: 'cancel',
              handler: () => {
                handlerMessage.value = 'Alert canceled';
              },
            },
            {
              text: 'ยืนยัน',
              role: 'confirm',
              handler: () => {
                handlerMessage.value = 'Alert confirmed';
              },
            },
          ],
        });


        await alert.present();

        const { role } = await alert.onDidDismiss();
        roleMessage.value = `Dismissed with role: ${role}`;
      };

      return {
        handlerMessage,
        roleMessage,
        presentAlert,
      };
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



<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>สร้างใบแจ้งหนี้</ion-title>
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
  <ion-card-header color="primary">
    <ion-card-title>สร้างใบแจ้งหนี้</ion-card-title>
  </ion-card-header>

  <ion-card-content>
    <ion-title>
      รอบเดือน 12/2565
    </ion-title>
    <ion-toolbar>
          <ion-label slot="end" >ออกบิลเสร็จแล้ว กดดูใบแจ้งหนี้ เพื่อดูรายการใบแจ้งหนี้ของรอบเดือน</ion-label>
          <ion-button color="secondary" size="small" slot="end" routerLink="/bill_invoice">>> ดูใบแจ้งหนี้</ion-button>
          <ion-button color="warning" size="small" slot="end" @click="presentAlert">ออกบิลทุกห้อง</ion-button>
          
        </ion-toolbar>
        <ion-grid>
          <b><ion-row>
          <ion-col>หมายเลขห้อง</ion-col>
          <ion-col>สถานะ</ion-col>
          <ion-col>ค่าน้ำ/หน่วย</ion-col>
          <ion-col>ค่าไฟ/หน่วย</ion-col>
          <ion-col></ion-col>
          
          </ion-row></b>

          <ion-row>
          <ion-col>101</ion-col> 
          <ion-col>ไม่ว่าง</ion-col>
          <ion-col>20</ion-col>
          <ion-col>50</ion-col>
          <ion-col><ion-button>แก้ไข</ion-button></ion-col>
          
          </ion-row>
          <ion-row>
          <ion-col>102</ion-col>
          <ion-col>ไม่ว่าง</ion-col>
          <ion-col>20</ion-col>
          <ion-col>50</ion-col>
          <ion-col><ion-button>แก้ไข</ion-button></ion-col>
          
          </ion-row> 
        </ion-grid>

  </ion-card-content>
</ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import { alertController, IonButton,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow } from '@ionic/vue';

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
    IonCard, IonCardContent, IonCardHeader,IonCardTitle,IonCol, IonGrid, IonRow,IonButton
  },
  setup() {
      const handlerMessage = ref('');
      const roleMessage = ref('');

      const presentAlert = async () => {
        const alert = await alertController.create({
          header: 'ยืนยันการออกบิล!',
          buttons: [
            {
              text: 'ยกเลิก',
              role: 'cancel',
              handler: () => {
                handlerMessage.value = 'Alert canceled';
              },
            },
            {
              text: 'ตกลง',
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

<style scoped>
ion-col {
      background-color: #ffffff;
      border: solid 1px rgb(215, 215, 215);
      color: rgb(0, 0, 0);
      text-align: center;
    }
</style>

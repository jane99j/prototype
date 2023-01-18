<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="purple">
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>ใบแจ้งหนี้</ion-title>
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
        <ion-grid class="ion-text-center">
          <ion-card-header color="light">
          <ion-card-title>ใบแจ้งหนี้</ion-card-title>
        </ion-card-header>
        <ion-row>
          <ion-col>
          <ion-item>
            <ion-select interface="popover" placeholder="เลือกชั้น">
                <ion-select-option value="apples">ชั้นที่1</ion-select-option>
                <ion-select-option value="oranges">ชั้นที่2</ion-select-option>
                <ion-select-option value="bananas">ชั้นที่3</ion-select-option>
            </ion-select>
                <ion-button slot="end" color="success" size="default" routerLink="/successfulPayment">ชำระสำเร็จ</ion-button>
            </ion-item>
          </ion-col>
        </ion-row>

        <ion-row class="header-row">
          <ion-col>
            <ion-text>หมายเลขห้อง</ion-text>
          </ion-col>

          <ion-col>
            <ion-text>สถานะ</ion-text>
          </ion-col>

          <ion-col>
            <ion-text>จำนวนเงิน</ion-text>
          </ion-col>

          <ion-col>
            <ion-text></ion-text>
          </ion-col>
        </ion-row>

        <ion-row v-for="i in datatest" :key="i.no">
          <ion-col  >
            <ion-text>
              {{ i.no }}
            </ion-text>
          </ion-col>

            <ion-col>
              <ion-text>
                {{ i.status }}
              </ion-text>
            </ion-col>

            <ion-col>
              <ion-text>
                {{ i.price }}
              </ion-text>
            </ion-col>

            <ion-col>
              <ion-button color="warning" routerLink="/billdetails" size="small">รายระเอียด</ion-button>
            </ion-col>
        </ion-row>


        </ion-grid>
      </ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { defineComponent } from 'vue';
import { IonButton,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
         IonCol,IonRow,IonText,IonItem,IonSelect,IonSelectOption,IonCard,IonGrid,IonCardHeader } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButton,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,
    IonCol,IonRow,IonText,IonItem,IonSelect,IonSelectOption,IonCard,IonGrid,IonCardHeader  },
    data() {
      return {
        datatest: [
          { no: '102',
          status: 'ยังไม่ชำระ',
          price: '5,000',
          },
          { no: '103',
          status: 'ยังไม่ชำระ',
          price: '5,200',
          },
        ]
      }
    }
});
</script>
<style>
  #container {
    text-align: left;
    position: absolute;
    left: 0;
    right: 0;
    top: 10%;

  }
.header-row {
  background: #7163AA;
  color: #fff;
  font-size: 18px;
}

ion-col {
  border: 1px solid #ECEEEF;

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
  
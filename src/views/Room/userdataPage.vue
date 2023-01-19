<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar color="purple">
        <ion-buttons slot="start" >
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
       <ion-grid>
        <ion-row>
          <ion-col :sizeXs="12" :sizeMd="8">
          <ion-row> 
            <ion-button routerLink="/listPage">ค่าบริการอื่นๆ</ion-button>
            <ion-button>ประวัติการชำระ</ion-button>
            <ion-button routerLink="/suppliesAddPage">จัดการห้องพัก</ion-button>
          </ion-row>   
              <ion-card>    
              <ion-card-content>
                  <ion-item color="light">
                    <ion-label>สัญญา ห้อง XXX </ion-label>
                  </ion-item>
                  <ion-row>
                    <ion-input readonly>วันทำสัญญา :</ion-input>
                      <ion-input readonly>01/06/22</ion-input>
                  </ion-row>
                  <ion-row>
                    <ion-input readonly>วันสิ้นสุดสัญญา :</ion-input>
                    <ion-input readonly>01/12/22</ion-input>
                  </ion-row>
                  <ion-row>
                      <ion-input readonly>ค่าประกัน :</ion-input>
                      <ion-input readonly> 4,000</ion-input>
                  </ion-row>
                  <ion-row>
                    <ion-input readonly>ราคาห้อง</ion-input>
                    <ion-input readonly>4,000</ion-input>
                  </ion-row>
                  <ion-item color="light">
                    <ion-label>ผู้เช่า 
                    </ion-label>
                  </ion-item>
                  <ion-item>
                    <ion-button slot="end" routerLink="/reserveRoom" color="dark" fill="outline">+ เพิ่มผู้เช่า</ion-button>
                  </ion-item>
                  <ion-row>
                      <ion-input readonly>ชื่อ :</ion-input>
                      <ion-input readonly>ดวงใจ  ใจดี </ion-input> 
                      <u><ion-label routerLink="#">แก้ไข</ion-label></u> 
                  </ion-row>
                  <ion-row>
                  <ion-item>
                      <ion-label>วันที่ย้ายออก :</ion-label>
                      <ion-datetime-button datetime="datetime1"></ion-datetime-button>
                    <ion-modal :keep-contents-mounted="true">
                      <ion-datetime id="datetime1"></ion-datetime>
                    </ion-modal>
                  </ion-item> 
                  <ion-button routerLink="" color="danger">ยกเลิกสัญญา/ย้ายออก</ion-button>
                </ion-row>  
                  
              </ion-card-content>
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
import { defineComponent} from 'vue';  import { IonDatetimeButton, IonDatetime,IonModal, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent,IonCol, IonGrid, IonRow,IonButton,IonLabel } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {IonDatetimeButton,IonDatetime,IonModal,IonButton ,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonCard, IonCardContent,IonLabel 
  }

});
</script>
<style scoped>
  ion-img{
      width: 15%;
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
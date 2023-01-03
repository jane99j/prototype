
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>ห้องพัก</ion-title>
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

        <ion-item>
          <ion-col size="4">
          <ion-label>ประเภทห้อง</ion-label>
        <ion-select interface="popover" placeholder="เลือก">
          <ion-select-option value="apples">ห้องทั่วไป</ion-select-option>
          <ion-select-option value="oranges">ห้องแอร์</ion-select-option>
          <ion-select-option value="bananas">ห้องVIP</ion-select-option>
        </ion-select>
          </ion-col>
        </ion-item>
        <ion-item color="light">
          <ion-label>ห้องทั้งหมด 3 ห้อง </ion-label>
        </ion-item>
        <ion-col size="6">
          <ion-segment value="menu1">
            <ion-segment-button value="menu1">
              <ion-label>ห้องทั้งหมด</ion-label>
            </ion-segment-button>
            <ion-segment-button value="menu2">
              <ion-label>ห้องว่าง</ion-label>
            </ion-segment-button>
            <ion-segment-button value="menu3">
              <ion-label>ห้องที่จองแล้ว</ion-label>
            </ion-segment-button>
            <ion-segment-button value="menu4">
              <ion-label>ห้องที่ค้างชำระ</ion-label>
            </ion-segment-button>
          </ion-segment>
          </ion-col>
        

        <ion-grid :fixed="true" >
          <ion-row>
            <ion-col routerLink="/AgreementPage">
                <ion-card>
                  <ion-card-header>
                    <ion-card-title>101</ion-card-title>
                    <ion-card-subtitle></ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>   
                    </ion-card-content>
                    <ion-card-content>
                    <ion-label>ว่าง</ion-label>
                  </ion-card-content>
                </ion-card>
            </ion-col>

            <ion-col routerLink="/userdataPage">
                <ion-card color="light">
                  <ion-card-header>
                    <ion-card-title>101</ion-card-title>
                    <ion-card-subtitle></ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-icon slot="icon-only" :icon="person"></ion-icon>
                    </ion-card-content>
                    <ion-card-content>
                    <ion-label>ยังไม่ชำระ</ion-label>
                  </ion-card-content>
                </ion-card>

            </ion-col>
            
            <ion-col routerLink="/bookingPage">
              <ion-card color="medium">
                  <ion-card-header>
                    <ion-card-title>103</ion-card-title>
                    <ion-card-subtitle></ion-card-subtitle>
                  </ion-card-header>
                  <ion-card-content>
                    <ion-icon slot="icon-only" :icon="person"></ion-icon>
                    </ion-card-content>
                  <ion-card-content>
                    จองแล้ว
                  </ion-card-content>
                </ion-card>
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
import {IonLabel, IonSegment, IonSegmentButton,IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonSelectOption} from '@ionic/vue';
import {person,searchCircle } from 'ionicons/icons';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonLabel, IonSegment,IonSegmentButton,IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonSelectOption
  },
  setup() {
      return {person,searchCircle }
  }
});


</script>
<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
  ion-icon{
    font-size: 300%;
    float: right ;
    margin-top: 7px;
    
  }
  ion-segment-button {
    background-color: rgb(255, 255, 255);
    --indicator-color: #006eff;
    --color: #000;
    --color-checked: #0098fe;
    --indicator-height: 4px;
  }
  ion-searchbar{
    width: 100%;
  }
  ion-button{
    margin-top: 10%;
    
  }
 
</style>

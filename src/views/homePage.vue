
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
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
          <ion-card>
        <ion-card-header>
              <ion-card-title>ห้องพัก</ion-card-title>
            </ion-card-header>
        </ion-card>
        <ion-row>
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

  <ion-col size="5">
    <ion-searchbar :search-icon="searchCircle" placeholder="ค้นหา เลขห้องพัก"></ion-searchbar>
  </ion-col>
  <ion-col size="1">
    <ion-button>ค้นหา</ion-button>
  </ion-col>

        </ion-row>
        <ion-grid :fixed="true" >
          <ion-row>
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
            <ion-col routerLink="/manageroomPage1">
              <ion-card>
                  <ion-card-header>
                    <ion-card-title>102</ion-card-title>
                  </ion-card-header>
                  <ion-card-content>
                    </ion-card-content>
                  <ion-card-content>
                    ว่าง
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
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {IonButton,IonSearchbar ,IonLabel, IonSegment, IonSegmentButton,IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,} from '@ionic/vue';
import {person,searchCircle } from 'ionicons/icons';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButton,IonSearchbar ,IonLabel, IonSegment,IonSegmentButton,IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,
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
    --indicator-color: #0098fe;
    --color: #000;
    --color-checked: #ffffff;
    --indicator-height: 4px;
  }
  ion-searchbar{
    width: 100%;
  }
  ion-button{
    margin-top: 10%;
    
  }

 
</style>

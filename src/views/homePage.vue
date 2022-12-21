
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
          <ion-row>
        <ion-button routerLink="#" >ห้องทั้งหมด</ion-button>
              <ion-button >ห้องว่าง</ion-button>
              <ion-button >ห้องจอง</ion-button>
              <ion-button routerLink="#">ห้องค้าง</ion-button>
        </ion-row>
        <ion-card-header>
                <ion-item><ion-card-title>ห้องพัก</ion-card-title></ion-item>
            </ion-card-header>

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
        </ion-grid></ion-card>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import {IonLabel,IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton} from '@ionic/vue';
import {person} from 'ionicons/icons';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonLabel,IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton
  },
  setup() {
      return {person}
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
  
 
</style>

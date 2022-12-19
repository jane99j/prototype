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
        <ion-grid :fixed="true">
          <ion-row>
            <ion-col>
                <ion-card color="light">
                  <ion-card-header>
                    <ion-card-title>101</ion-card-title>
                    <ion-card-subtitle></ion-card-subtitle>
                  </ion-card-header>

                  <ion-card-content>
                    ยังไม่ชำระ
                  </ion-card-content>
                </ion-card>

            </ion-col>
            <ion-col>
              <ion-card color="light">
                  <ion-card-header>
                    <ion-card-title>102</ion-card-title>
                    <ion-card-subtitle></ion-card-subtitle>
                  </ion-card-header>

                  <ion-card-content>
                    ชำระแล้ว
                  </ion-card-content>
                </ion-card>
            </ion-col>
            <ion-col>
              <ion-card color="light">
                  <ion-card-header>
                    <ion-card-title>103</ion-card-title>
                    <ion-card-subtitle></ion-card-subtitle>
                  </ion-card-header>

                  <ion-card-content>
                    ชำระแล้ว
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
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle
  }
});
</script>
<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>

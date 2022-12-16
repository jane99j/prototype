
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
      <ion-grid>
    <ion-row>
      <ion-col>
        <ion-card color="light">
        <ion-card-header>
            <ion-card-title>101</ion-card-title>
            <ion-card-subtitle>
                <ion-icon name="person"></ion-icon>
            </ion-card-subtitle>
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
            <ion-card-subtitle>
                <ion-icon name="person"></ion-icon>
            </ion-card-subtitle>
        </ion-card-header>
    
        <ion-card-content>
            ยังไม่ชำระ
        </ion-card-content>
        </ion-card>
      </ion-col>
    </ion-row>
  </ion-grid>
    </ion-content>
  </ion-page>

    
  </template>

  
  
  <script lang="ts">
    import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonIcon },
    });
  </script>
  
  <style scoped>
    /* iOS places the subtitle above the title */
    ion-card-header.ios {
      display: flex;
      flex-flow: column-reverse;
    }
  </style>
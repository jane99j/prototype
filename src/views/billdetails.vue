<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>รายระเอียดบิล</ion-title>
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
      <ion-card-title>รายละเอียดบิล</ion-card-title>
            <ion-item color="light">
                  <ion-card-header >  
                    <ion-card-title>ตั้งค่าหอพัก</ion-card-title>
                </ion-card-header>
            </ion-item>
            <ion-card-content>

            </ion-card-content>
        </ion-card >
 
            
  


        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import {  } from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: { }
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
  
  
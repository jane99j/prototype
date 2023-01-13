<template>
  <ion-page>
    <ion-header :translucent="true" >
      <ion-toolbar>
        <ion-buttons slot="start" >
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>แก้ไขห้องพัก</ion-title>
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
        <ion-row class="ion-margin">
          <ion-col>
            <ion-title>
              <ion-text color="default">
                Your title remove if don't want use
              </ion-text>
            </ion-title>
          </ion-col>
        </ion-row>

        <ion-row class="header-row">
          <ion-col>
            <ion-text>Data</ion-text>
          </ion-col>

          <ion-col>
            <ion-text>Cliente</ion-text>
          </ion-col>

          <ion-col>
            <ion-text>Pagamento</ion-text>
          </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-text>
                19/10/2020
            </ion-text>
          </ion-col>

            <ion-col>
              <ion-text>
                Nome
              </ion-text>
            </ion-col>

            <ion-col>
              <ion-text>
                R$ 200
              </ion-text>
            </ion-col>
        </ion-row>

        <ion-row>
          <ion-col>
            <ion-text>
                19/10/2020
            </ion-text>
          </ion-col>

            <ion-col>
              <ion-text>
                Nome
              </ion-text>
            </ion-col>

            <ion-col>
              <ion-text>
                R$ 200
              </ion-text>
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
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,  }
});
</script>
<style>
.header-row {
  background: #7163AA;
  color: #fff;
  font-size: 18px;
}

ion-col {
  border: 1px solid #ECEEEF;

}



</style>
  
<template>
  <ion-card>
    <center>
    <ion-card-header>
      <ion-card-title>จัดการห้องพัก</ion-card-title>
    </ion-card-header>
    <ion-card-content>
    <ion-list>
    <ion-item>
      <ion-label>หมายเลขห้องพัก</ion-label>
    <ion-input readonly></ion-input>
    </ion-item>
    </ion-list>
     
      <ion-button color="success">ทำสัญญา</ion-button>
      <ion-button color="warning">จัดการห้องพัก</ion-button>

    </ion-card-content>
  </center>
  </ion-card>
</template>

<script lang="ts">
  import { IonList,IonInput, IonItem, IonLabel,IonButton,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: {IonList,IonInput, IonItem, IonLabel,IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle },
  });
</script>

<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
</style>
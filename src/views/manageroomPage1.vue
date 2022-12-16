<template>
<center>
    <ion-card>
    <h1>หมายเลขห้อง 000</h1>
    <ion-button>ทำสัญญา</ion-button>
    <ion-button>จัดการห้องพัก</ion-button>
</ion-card>
</center>
  </template>
  
  <script lang="ts">
    import { IonButton } from '@ionic/vue';
    import { defineComponent } from 'vue';
  
    export default defineComponent({
      components: { IonButton },
    });
  </script>
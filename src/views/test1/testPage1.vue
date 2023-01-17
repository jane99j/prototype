<template>
  <ion-list>
    <ion-item>
      <ion-label>ชื่อจริง</ion-label>
      <ion-input type="text" placeholder=""></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>นามสกุลจริง</ion-label>
      <ion-input type="text" placeholder=""></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ชื่อเล่น</ion-label>
      <ion-input type="text" value=""></ion-input>
    </ion-item>
  </ion-list>

<ion-button>บันทึก</ion-button>
</template>

<script lang="ts">
  import { IonInput, IonItem, IonLabel, IonList,IonButton } from '@ionic/vue';
  import { defineComponent } from 'vue';

  export default defineComponent({
    components: { IonInput, IonItem, IonLabel, IonList,IonButton  },
  });
</script>
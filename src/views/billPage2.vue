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
      <ion-card-title>รายละเอียดบิล</ion-card-title>

    </ion-card-header>

    <ion-card-content>

      <ion-list>
    <ion-item>
      <ion-label>หมายเลขห้องพัก :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>วัน/เดือน/ปี :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าห้อง :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าน้ำ :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าไฟฟ้า :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าอินเตอร์เน็ต :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าที่จอดรถ :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ค่าอื่นๆ :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    <ion-item>
      <ion-label>ยอดรวม :</ion-label>
      <ion-input readonly></ion-input>
    </ion-item>

    </ion-list>

    </ion-card-content>

    <ion-button fill="clear">พิมพ์</ion-button>
    <ion-button fill="clear">ออกบิล</ion-button>
  </ion-card>
  
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonInput, IonItem, IonLabel, IonList,IonButton, IonCard, IonCardContent, IonCardHeader,IonCardTitle } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonInput, IonItem, IonLabel, IonList,IonButton, IonCard, IonCardContent, IonCardHeader,IonCardTitle
  }
});
</script>


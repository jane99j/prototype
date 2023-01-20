
<template>
  <ion-page>
    <ion-content>
    <ion-header :translucent="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
    </ion-header>
    
    <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">{{ $route.params.id }}</ion-title>
        </ion-toolbar>
      </ion-header>
    
      <div id="container">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <ion-nav :root="component"></ion-nav>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { IonNav } from '@ionic/vue';
import PageOne from './PageOne.vue';
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader,  IonPage, IonTitle, IonToolbar } from '@ionic/vue';


export default defineComponent({
  name: 'FolderPage',
  components: {IonNav,IonContent,IonHeader,IonPage,IonTitle,IonToolbar},
    data() {
        return {
          component: PageOne,
        } ;
      },
});
</script>


  
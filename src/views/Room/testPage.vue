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

      <div id="app">
        <strong class="capitalize">{{ $route.params.id }}</strong>
        <h1>TEST DATABASE</h1>
        <table class="table- table-bordered " v-for="i in roomtype" :key="i.id">
          <tr>
            <th>สถานะ</th>
          </tr>
          <tr>
            <th>{{ i.state_name }}</th>
          </tr>


        </table>
      </div>



    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,
  },
  data() {
    return {
      roomtype: {},
    }
  },
  methods: {
    async getDataFromDatabase() {
      try {
        const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/status.json`);
        this.roomtype = response.data;
        console.log(JSON.stringify(this.roomtype))
      } catch (error) {
        console.error(error);
      }
    },
  },
  created() {
    this.getDataFromDatabase();
  },
  /*beforeMount() {
    
  }*/

});

</script>

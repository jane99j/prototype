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
        <h1>TEST DATABASE</h1>
        <table class="table- table-bordered ">
          <tr>
            <th>fistname</th>
            <th>lastname</th>
            <th>user</th>
          </tr>
          <tr v-for=" alluser" v-bind:key="alluser.id">
            <th>{{ alluser.namedormitory }}</th>
            <th>{{ alluser.addressdormitory }}</th>
            <th>{{ alluser.phonedormitory }}</th>

          </tr>


        </table>

        <div id="app">
          {{ info }}
        </div>

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


});

new Vue({
  el: '#app',
  data() {
    return {
      info: null
    }
  },
  mounted() {
    axios
      .get('http://localhost/api_select.php')
      .then(response => (this.info = response))
  }
})

</script>

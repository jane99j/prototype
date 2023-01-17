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
        <form action="">
          <table>
            <tr>
              <td>Name</td>
              <td><input type="text" v-model="friend.name"></td>
            </tr>
            <tr>
                <td>Email</td>
                <td><input type="Email" v-model="friend.email"></td>
              </tr>
              <tr>
                <td>Phone</td>
                <td><input type="text" v-model="friend.phone"></td>
              </tr>
              <tr>
                <td></td>
                <ion-button type="submit" @click="sendData">ยืนยัน</ion-button>
              </tr>


          </table>
        </form>
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import axios from 'axios';
import { defineComponent } from 'vue';
import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton
  },
  data(){
    return{
      friend:{
        name:"",
        email:"",
        phone:"",
      }
    }
},
methods:{
  sendData(){
    console.log("sendData active");

    axios.post("http://localhost/api.php", {
      name: this.friend.name,
      email: this.friend.email,
      phone: this.friend.phone,
  })
  .then(function (response) {
    console.log(response);
  })
  .catch(function (error) {
    console.log(error);
  });

    this.clearData();
  },
  clearData(){
    this.friend.name = "";
    this.friend.phone = "";
    this.friend.email = "";
  }
},

});


</script>

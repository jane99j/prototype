
<template>
  <ion-page>
    <ion-header :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>ห้องพัก</ion-title>
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
          <ion-card-header color="light">
          <ion-card-title>ห้องพัก</ion-card-title>
        </ion-card-header>
        <ion-item>
          <ion-col size="4">
        <ion-select interface="popover" placeholder="ประเภทห้อง">
          <ion-select-option value="apples">ห้องทั่วไป</ion-select-option>
          <ion-select-option value="oranges">ห้องแอร์</ion-select-option>
          <ion-select-option value="bananas">ห้องVIP</ion-select-option>
        </ion-select>
          </ion-col>
        </ion-item>
        <ion-item color="light">
          <ion-label>ห้องทั้งหมด 8 ห้อง </ion-label>
        </ion-item>
        <ion-col size="6">
          <ion-segment value="menu1" @ionChange="segmentChanged($event)" v-model ="segment">
            <ion-segment-button value="menu1">
              <ion-label>ห้องทั้งหมด</ion-label>
            </ion-segment-button>
            <ion-segment-button value="menu2">
              <ion-label>ห้องว่าง</ion-label>
            </ion-segment-button>
            <ion-segment-button value="menu3">
              <ion-label>ห้องที่จองแล้ว</ion-label>
            </ion-segment-button>
            <ion-segment-button value="menu4">
              <ion-label>ห้องที่ค้างชำระ</ion-label>
            </ion-segment-button>
            <ion-segment-button value="menu5">
              <ion-label>ห้องที่รอการย้ายออก</ion-label>
            </ion-segment-button>
          </ion-segment>
          </ion-col>
        
          <div v-if="segment =='menu1'">
              <ion-grid :fixed="false" >
        <ion-row>
          <ion-col routerLink="/RoomManage">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>101</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>  
                  </ion-card-content>
                  <ion-card-content>
                  <ion-label>ว่าง</ion-label>
                </ion-card-content>
              </ion-card>
          </ion-col>

          <ion-col routerLink="/userdataPage">
              <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>102</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-icon slot="icon-only" :icon="person"></ion-icon>
                  </ion-card-content>
                  <ion-card-content>
                    <ion-badge color="">ยังไม่ได้ชำระ</ion-badge>
                </ion-card-content>
              </ion-card>

          </ion-col>
          
          <ion-col routerLink="/bookingPage">
            <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>103</ion-card-title>
                  <ion-card-subtitle><ion-label>วันที่เข้าพัก :01/05/22</ion-label></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-badge color="warning">จองแล้ว</ion-badge>
                </ion-card-content>
              </ion-card>
          </ion-col>
          <ion-col routerLink="/userdataPage">
            <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>104</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-icon slot="icon-only" :icon="person"></ion-icon>
                  </ion-card-content>
                <ion-card-content>
                  <ion-badge color="danger">ค้างชำระ</ion-badge>
                </ion-card-content>
              </ion-card>
          </ion-col>
        </ion-row>
      </ion-grid>

      <ion-grid :fixed="false" >
        <ion-row>
          <ion-col routerLink="/userdataPage2">
              <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>105</ion-card-title>
                  <ion-card-subtitle>
                    <ion-label>วันที่ออก :01/05/22</ion-label>
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-icon slot="icon-only" :icon="person"></ion-icon>
                  </ion-card-content>
                  <ion-card-content>
                    <ion-badge color="tertiary">รอย้ายออก</ion-badge>
                </ion-card-content>
              </ion-card>
            </ion-col>

            <ion-col routerLink="/userdataPage">
            <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>106</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-icon slot="icon-only" :icon="person"></ion-icon>
                  </ion-card-content>
                <ion-card-content>
                  <ion-badge color="danger">ค้างชำระ</ion-badge>
                </ion-card-content>
              </ion-card>
          </ion-col>
            <ion-col routerLink="/RoomManage">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>107</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>  
                  </ion-card-content>
                  <ion-card-content>
                  <ion-label>ว่าง</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col>
            <ion-col routerLink="/userdataPage">
              <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>108</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-icon slot="icon-only" :icon="person"></ion-icon>
                  </ion-card-content>
                  <ion-card-content>
                    <ion-badge color="success">ชำระแล้ว</ion-badge>
                </ion-card-content>
              </ion-card>
            </ion-col>
        </ion-row>
      </ion-grid>
          </div>




          <div v-if="segment =='menu2'">
              <ion-grid :fixed="false" >
              <ion-grid>
  <ion-row>
    <ion-col size="3"><ion-col routerLink="/RoomManage">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>101</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>  
                  </ion-card-content>
                  <ion-card-content>
                  <ion-label>ว่าง</ion-label>
                </ion-card-content>
              </ion-card>
          </ion-col></ion-col>

    <ion-col size="3">
      <ion-col routerLink="/RoomManage">
              <ion-card>
                <ion-card-header>
                  <ion-card-title>107</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>  
                  </ion-card-content>
                  <ion-card-content>
                  <ion-label>ว่าง</ion-label>
                </ion-card-content>
              </ion-card>
            </ion-col></ion-col>

    <ion-col></ion-col>
    <ion-col></ion-col>
  </ion-row>
</ion-grid>
</ion-grid>
          </div>




          <div v-if="segment =='menu3'">
              <ion-grid :fixed="false" >
              <ion-grid>
  <ion-row>
    <ion-col><ion-col routerLink="/bookingPage">
            <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>103</ion-card-title>
                  <ion-card-subtitle>
                    <ion-label>วันที่เข้าพัก :01/05/22</ion-label>
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-badge color="warning">จองแล้ว</ion-badge>
                </ion-card-content>
              </ion-card>
          </ion-col></ion-col>
    <ion-col></ion-col>
    <ion-col></ion-col>
    <ion-col></ion-col>
  </ion-row>
</ion-grid>
</ion-grid>
          </div>



          <div v-if="segment =='menu4'">
              <ion-grid :fixed="false" >
  <ion-grid>
  <ion-row>
      <ion-col size="3" routerLink="/userdataPage">
            <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>104</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>

                  <ion-icon slot="icon-only" :icon="person"></ion-icon>
                  </ion-card-content>
                <ion-card-content>
                  <ion-badge color="danger">ค้างชำระ</ion-badge>
                </ion-card-content>
              </ion-card>
          </ion-col>


          <ion-col size="3" routerLink="/userdataPage">
            <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>106</ion-card-title>
                  <ion-card-subtitle></ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-icon slot="icon-only" :icon="person"></ion-icon>
                  </ion-card-content>
                <ion-card-content>
                  <ion-badge color="danger">ค้างชำระ</ion-badge>
                </ion-card-content>
              </ion-card>
          </ion-col>
    <ion-col></ion-col>
    <ion-col></ion-col>
  </ion-row>
</ion-grid>
</ion-grid>
           
          </div>
          
          <div v-if="segment =='menu5'">
              <ion-grid :fixed="false" >
              <ion-grid>
  <ion-row>
    <ion-col><ion-col routerLink="/userdataPage2">
              <ion-card color="light">
                <ion-card-header>
                  <ion-card-title>105</ion-card-title>
                  <ion-card-subtitle>
                    <ion-label>วันที่ออก :01/05/22</ion-label>
                  </ion-card-subtitle>
                </ion-card-header>
                <ion-card-content>
                  <ion-icon slot="icon-only" :icon="person"></ion-icon>
                  </ion-card-content>
                  <ion-card-content>
                    <ion-badge color="tertiary">รอย้ายออก</ion-badge>
                </ion-card-content>
              </ion-card>
            </ion-col>
          </ion-col>
    <ion-col></ion-col>
    <ion-col></ion-col>
    <ion-col></ion-col>
  </ion-row>
</ion-grid>
</ion-grid>
          </div>

      </ion-card> 
      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import { ref } from 'vue';
import { defineComponent } from 'vue';
import {IonLabel, IonSegment, IonSegmentButton,IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonSelectOption} from '@ionic/vue';
import {person,searchCircle} from 'ionicons/icons';
import { Segment } from '@ionic/core/dist/types/components/segment/segment';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonLabel, IonSegment,IonSegmentButton,IonIcon,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCol, IonGrid, IonRow,IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonSelectOption
  },
  methods:{
      SegmentChanged(ev: CustomEvent){
          this.segment = ev.detail.value;
      },
  },
  setup() {
      const segment= ref("menu1");
      return {person,searchCircle,segment}
  }
});


</script>
<style scoped>
  /* iOS places the subtitle above the title */
  ion-card-header.ios {
    display: flex;
    flex-flow: column-reverse;
  }
  ion-icon{
    font-size: 300%;
    float: right ;
    margin-top: 7px;
    color: rgb(115, 112, 116);
  }
  ion-segment-button {
    background-color: rgb(255, 255, 255);
    --indicator-color: #006eff;
    --color: #000;
    --color-checked: #0098fe;
    --indicator-height: 4px;
  }
  ion-crad{

  }

  ion-badge {
      --background: rgb(109, 109, 109);
      --color: rgb(255, 255, 255);
      --padding-end: 20px;
      --padding-start: 20px;
      --min-width:var(--min-width)
      
      }
 ion-card{
    display: flexbox;

  }
</style>

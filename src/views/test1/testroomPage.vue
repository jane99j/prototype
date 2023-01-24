<template>
  <ion-page>
    <ion-header :translucent="true">
    <ion-toolbar color="purple">
      <ion-buttons slot="start">
        <ion-menu-button color="primary"></ion-menu-button>
      </ion-buttons>
      <ion-title>จัดการห้องพัก</ion-title>
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
        <ion-grid>
  <ion-row>
    <ion-col :sizeXs="12" :sizeMd="8"> 
      <ion-card>  
      </ion-card>
            <ion-card>
                  <ion-item color="light">
                        <ion-card-header >                            
                            <ion-card-title>จัดการห้องพัก(ค่าห้อง)</ion-card-title>
                            <ion-label>แก้ไขข้อมูล รายระเอียดห้องพัก</ion-label>
                        </ion-card-header>
                    </ion-item>
            <ion-card-content>
                    <ion-item>
                      <ion-label >เลขห้อง :</ion-label>
                      <ion-input type="text" value="101"></ion-input>
                      </ion-item>
                      <ion-item>
                        <ion-label>ประเภทห้อง :</ion-label>
                        <ion-select interface="popover" placeholder="ประเภทห้อง" slot="end">
                          <ion-select-option value="apples">ห้องทั่วไป</ion-select-option>
                          <ion-select-option value="oranges">ห้องแอร์</ion-select-option>
                          <ion-select-option value="bananas">ห้องVIP</ion-select-option>
                        </ion-select>                  
                      </ion-item> 
                      <ion-item>
                          <ion-label>กำหนดราคา :</ion-label>
                          <ion-input value="3,000"></ion-input>
                      </ion-item>
                      
                    <ion-item>
                      <ion-label>ของใช้ภายในห้อง</ion-label>
                    </ion-item>

                      <ion-item  v-for="i in filteredroom" :key="i.no" >
                      <ion-checkbox slot="start"></ion-checkbox>
                      <ion-label>{{ i.name }}</ion-label>
                      </ion-item>                  

                      <IonRow>
                      <div className="ion-float-end">
                        <ion-button routerLink="#">บันทึก</ion-button>
                      </div> 
                      </IonRow>                      
            </ion-card-content>
            </ion-card>

    </ion-col>
    <ion-col :sizeXs="12" :sizeMd="4"> 
      <ion-card>        
                <ion-grid fixed="true">
                  <ion-item color="light">
                    <ion-card-title>ประเภทห้อง</ion-card-title>
                  </ion-item>
                  <ion-item v-for="i in typeroom" :key="i.name" :value="i.name">
                    <ion-col>{{ i.nameroom }}</ion-col>
                    <ion-col>{{ i.roomprice }}</ion-col>
                    <ion-col>
                      <ion-text color="tertiary" routerLink="">แก้ไข</ion-text>
                    </ion-col>
                  </ion-item>              
                </ion-grid>
    </ion-card>

    </ion-col>
</ion-row>
</ion-grid>
      </div>
    </ion-content>
  </ion-page>
</template>


<script lang="ts">
import { ref,defineComponent } from 'vue';
import { RouteLocationRaw,} from 'vue-router';
import { IonCheckbox,IonInput,IonLabel,IonItem,IonCard, IonCardContent, IonCardHeader, IonCardTitle,IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonButton } from '@ionic/vue';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonCheckbox,IonInput,IonLabel,IonItem,IonButtons,IonContent,IonHeader,IonMenuButton,IonPage,IonTitle,IonToolbar,IonButton,IonCard, IonCardContent, IonCardHeader,IonCardTitle
  },
  data() {
      return {
        datatest: [         
          {name: 'พัดลม',
           price: 200,
          },
          {name: 'แอร์',
           price: 200,
          },
          {name: 'ตู้เสื้อผ้า',
           price: 200,
          },
          {name: 'โต๊ะเครื่องแป้ง',
           price: 200,
          },   
          {name: 'เครื่องทำน้ำอุ่น',
           price: 200,
          },         
        ],
        typeroom: [
        {
          nameroom: 'ห้องทั่วไป',
          roomprice: 3000,
        },
        {
          nameroom: 'ห้องแอร์',
          roomprice: 3500,
        },
        {
          nameroom: 'ห้องVIP',
          roomprice: 4000,
        }
      ],
      filteredroom: {}
    }
  },
  methods: {
    toroute(rou: RouteLocationRaw) {
      this.$router.push(rou)
    },
    allroom() {
    this.filteredroom = this.datatest
    },
   
  },
  beforeMount(){
    this.allroom()
  },
  });
</script>
<style>
.ion-color-purple {
--ion-color-base: var(--ion-color-purple);
--ion-color-base-rgb: var(--ion-color-purple-rgb);
--ion-color-contrast: var(--ion-color-purple-contrast);
--ion-color-contrast-rgb: var(--ion-color-purple-contrast-rgb);
--ion-color-shade: var(--ion-color-purple-shade);
--ion-color-tint: var(--ion-color-purple-tint);
}
ion-content {
  --background: #e7e6eb;
  --color: #fff;
}
</style>
  


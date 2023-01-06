

<template>
    <ion-page>
      <ion-header :translucent="true">
        <ion-toolbar>
          <ion-buttons slot="start">
            <ion-menu-button color="primary"></ion-menu-button>
          </ion-buttons>
          <ion-title>ใบแจ้งหนี้</ion-title>
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
            <ion-item>
                <ion-text slot="start">10X</ion-text>
                <ion-badge slot="start" color="success">ชำระแล้ว</ion-badge>
              <ion-button slot="end" color="medium" size="default">พิมพ์ใบแจ้งนี้</ion-button>
            </ion-item>
            
          </ion-card>
          <ion-card>         
            <ion-list lines="none">
                <ion-item>
                    <ion-label>
                        <h2><p>IT หอพัก</p></h2>
                        <p>63/42 ต.XX อ.XX จ.XX 40XXX</p>
                        <p>โทร: 092-XXXXXXX</p>
                        <p>สถานะ ยังไม่ชำระ</p>  
                    </ion-label>
                    <ion-label slot="end">
                        <p>เลขที่/ON: 10XX</p>
                        <p>วันที่ date : 30/12/65</p>
                        <p>ห้อง : 10X</p>  
                        <p>ชำระก่อน Due date :5/01/66 </p>  
                    </ion-label>
                </ion-item>
                </ion-list>
        
        
        <ion-label></ion-label>


        <ion-card-content>
            <ion-item color="light">
            <ion-grid>
                    <ion-row>
                        <ion-col size="2"></ion-col>
                        <ion-col>รายการ</ion-col>
                        <ion-col>จำนวนเงิน</ion-col>
                    </ion-row>
            
                </ion-grid>
            </ion-item>
            <ion-grid> 
                    <ion-item>
                        <ion-col size="2">1</ion-col>
                        <ion-col><p>ค่าห้อง</p></ion-col>
                        <ion-col><p>4,000</p></ion-col>
                    </ion-item>
                    <ion-item>
                        <ion-col size="2">2</ion-col>
                        <ion-col><p>ค่าน้ำ 20</p></ion-col>
                        <ion-col><p>100</p></ion-col>
                    </ion-item>
                    <ion-item>
                        <ion-col size="2">2</ion-col>
                        <ion-col><p>ค่าไฟ 50</p></ion-col>
                        <ion-col><p>400</p></ion-col>
                    </ion-item>
                    <ion-item>
                        <ion-col size="2">3</ion-col>
                        <ion-col><p>ค่าจอดรถ</p></ion-col>
                        <ion-col><p>300</p></ion-col>
                    </ion-item>
                    <ion-item>
                        <ion-col size="2">4</ion-col>
                        <ion-col><p>ค่าอินเตอร์เน็ต</p></ion-col>
                        <ion-col><p>200</p></ion-col>
                    </ion-item>
                </ion-grid>
                <ion-item color="light"></ion-item>
            <ion-grid> 
                     <ion-item>
                        <ion-col></ion-col>
                        <ion-col><p>ยอดค้างเก่า</p></ion-col>
                        <ion-col><p>0</p></ion-col>
                    </ion-item>

                    <ion-item>
                        <ion-col></ion-col>
                        <ion-col><p>รวม</p></ion-col>
                        <ion-col><p>5,000</p></ion-col>
                    </ion-item>
                    <ion-item>
                        <ion-col></ion-col>
                        <ion-col><p>ยอดชำระ</p></ion-col>
                        <ion-col><p>5,000</p></ion-col>
                    </ion-item>
                    <ion-item>
                        <ion-col></ion-col>
                        <ion-col><p>ยอดค้างชำระ</p></ion-col>
                        <ion-col><p>0</p></ion-col>
                    </ion-item>
            </ion-grid>
        </ion-card-content>
            </ion-card >
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard, IonCardContent,IonCol, IonGrid, IonRow,IonButton,IonBadge} from '@ionic/vue';
  
  export default defineComponent({
    name: 'FolderPage',
    components: {
      IonButtons,
      IonContent,
      IonHeader,
      IonMenuButton,
      IonPage,
      IonTitle,
      IonToolbar,
      IonCard, IonCardContent,IonCol, IonGrid, IonRow,IonButton,IonBadge
    }
  });
  </script>
  

  
  
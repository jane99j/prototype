

<template>
    <ion-page>
      <ion-header :translucent="true">
      <ion-toolbar color="purple">
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
          <ion-grid>
            <ion-row>
              <ion-col :sizeXs="12" :sizeMd="8"> 
                <ion-card>
            <ion-item>
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
                        <p>ห้อง : 101</p>  
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
                <ion-item color="light">
                  <ion-grid> 
                    <ion-item color="light">                        
                      <label>ค่าบริการ</label>
                      <ion-col><p>              
                        <ion-item>
                          <ion-input placeholder="บริการ"></ion-input>
                        </ion-item>
                      </p>
                        </ion-col>
                        <ion-col><p>
                        
                        <ion-item>
                          <ion-input placeholder="จำนวนเงิน"></ion-input>  
                        </ion-item>
                       </p>
                        </ion-col>
                        <ion-col>
                          <ion-button >+ เพิ่ม</ion-button>
                        </ion-col>
                    </ion-item>
                </ion-grid>               
                </ion-item>
            <ion-grid> 
                   <ion-item>
                        <ion-col size="5"></ion-col>
                        <ion-col><p>ยอดค้างเก่า</p></ion-col>
                        <ion-col><p>0</p></ion-col>
                    </ion-item>
                    
                    <ion-item>
                        <ion-col size="5"></ion-col>
                        <ion-col><p>รวม</p></ion-col>
                        <ion-col><p>5,000</p></ion-col>
                    </ion-item>
                    
                    <ion-item>
                        <ion-col size="5"></ion-col>
                        <ion-col><p>ยอดชำระ</p></ion-col>
                        <ion-col><p>0</p></ion-col>
                    </ion-item>
                    <ion-item>
                        <ion-col size="5"></ion-col>
                        <ion-col><p>ยอดค้างชำระ</p></ion-col>
                        <ion-col><p>5,000</p></ion-col>
                    </ion-item>
            </ion-grid>
        </ion-card-content>
            </ion-card>

              </ion-col>
              <ion-col :sizeXs="12" :sizeMd="4"> 
                <ion-card>
                <ion-list>
              <ion-item color="light">
                  <h2><ion-label>รับเงิน</ion-label></h2>
              </ion-item>
              <ion-item>
                  <ion-label>จำนวนเงิน</ion-label>
                  <ion-input placeholder="ระบุจำนวนเงิน"></ion-input>
              </ion-item>

              <ion-list>
                  <ion-item>
                  <ion-label>ชำระเงิน</ion-label>
                  <ion-select interface="popover" placeholder="เลือกการชำระ">
                  <ion-select-option value="apples">เงินสด</ion-select-option>
                  <ion-select-option value="oranges">โอนจ่าย</ion-select-option>
                  </ion-select>
              </ion-item>

              <ion-item  color="light">
                  <p><ion-text>รับเงินทั้งหมด 5,000</ion-text></p>
              </ion-item>
              
              <ion-button color="success" expand="block" @click="presentAlert">รับเงิน</ion-button>
              <p>{{ handlerMessage }}</p>
              <p>{{ roleMessage }}</p>
              </ion-list>
                </ion-list>
              </ion-card>

              </ion-col>
          </ion-row>
          </ion-grid>
        </div>
      </ion-content>
    </ion-page>
  </template>
  
  <script lang="ts">
  import { defineComponent } from 'vue';
  import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar,IonCard,IonCol, IonGrid, IonRow,IonButton} from '@ionic/vue';
  
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
      IonCard,IonCol, IonGrid, IonRow,IonButton
    }
  });
  </script>
<style>
#container {
    text-align: left;
    position: absolute;
    left: 0;
    right: 0;
    top: 10%;

  }
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
  

  
  
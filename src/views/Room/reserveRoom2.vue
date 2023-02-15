<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar color="purple">
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>จองห้อง</ion-title>
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
                                <ion-item color="light">

                                    <ion-card-header>

                                        <ion-card-title>จองห้อง</ion-card-title>
                                    </ion-card-header>
                                </ion-item>
                                <ion-card-content>
                                    <ion-list>

                                        <ion-item>
                                            <ion-label>หมายเลขห้อง {{ roomtype.room_id }}</ion-label>
                                        </ion-item>
                                        <ion-item>
                                            <ion-label>ประเภทห้อง {{ roomtype.room_type }}</ion-label>
                                        </ion-item>




                                        <ion-item>
                                            <ion-label>ชื่อ</ion-label>
                                            <ion-input text placeholder="ชื่อ" v-model="residents.fname"></ion-input>
                                        </ion-item>

                                        <ion-item>
                                            <ion-label>สกุล</ion-label>
                                            <ion-input text placeholder="สกุล" v-model="residents.lname"></ion-input>
                                        </ion-item>

                                        <ion-item>
                                            <ion-label>เบอร์โทรศัพท์</ion-label>
                                            <ion-input text placeholder="092-XXXXXX"
                                                v-model="residents.phone"></ion-input>
                                        </ion-item>

                                        <ion-item>
                                            <ion-label>วันที่เข้าพัก : </ion-label>
                                            <ion-datetime-button datetime="datetime1"></ion-datetime-button>
                                            <ion-modal :keep-contents-mounted="true">
                                                <ion-datetime id="datetime1"></ion-datetime>
                                            </ion-modal>
                                        </ion-item>                              
                                    </ion-list>
                                </ion-card-content>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                    <ion-row>
                        <ion-col :sizeXs="12" :sizeMd="8">
                            <ion-card>
                                <div className="ion-float-end">
                                    <ion-button @click="sendData" slot="end">บันทึก</ion-button>
                                </div>
                            </ion-card>
                        </ion-col>
                    </ion-row>
                </ion-grid>
            </div>
        </ion-content>
    </ion-page>
</template>
  
  
<script lang="ts">
import axios from 'axios';
import { defineComponent, ref } from 'vue';
import { IonCardHeader, IonCardTitle, IonList, IonCardContent, IonCard, IonRow, IonModal, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonDatetime, IonLabel, IonItem, IonInput, IonDatetimeButton } from '@ionic/vue';
import { Item } from '@ionic/core/dist/types/components/item/item';

export default defineComponent({
    name: 'FolderPage',
    components: {
        IonCardHeader, IonCardTitle, IonList, IonCardContent, IonCard, IonRow, IonModal, IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar, IonButton, IonDatetime, IonLabel, IonItem, IonInput, IonDatetimeButton
    },
    data() {
        return {
            roomtype: [] as any,
            residents: {
                fname: "",
                lname: "",
                phone: "",
                room_id: "",



            },
        }
    },
    methods: {
        async getDataFromDatabase() {
            try {
                const response = await axios.get(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${this.$route.params.room_id}.json`);
                this.roomtype = (response.data);
                console.log(this.roomtype)
                console.log(this.$route.params.roomtype)
                // this.roomtype = this.roomtype.filter((item: { room_id: string }) =>
                //   item.room_id === this.$route.params.room_id
                // )
                console.log(this.roomtype)
            } catch (error) {
                console.error(error);
            }
        },
        sendData() {
            console.log("sendData active");

            axios.post("https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/residents.json", {
                Uid: "",
                room_id: this.roomtype.room_id,
                fname: this.residents.fname,
                lname: this.residents.lname,
                phone: this.residents.phone,
            })

                .then((response) => {
                    axios.patch(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/residents/${response.data.name}.json`, { Uid: response.data.name })
                    axios.patch(`https://demodate-549e4-default-rtdb.asia-southeast1.firebasedatabase.app/inst_room/${this.$route.params.room_id}.json`, { status: 3 })
                    console.log(response);
                })
                .catch(function (error) {
                    console.log(error);
                });

            this.clearData();
        },
        clearData() {
            this.residents.fname = "";
            this.residents.lname = "";
            this.residents.phone = "";
        },
        setup() {
            const datetime = ref();
            const reset = () => datetime.value.$el.reset();
            const cancel = () => datetime.value.$el.cancel();
            const confirm = () => datetime.value.$el.confirm();
            return { datetime, reset, cancel, confirm }
        }
    },
    created() {
        this.getDataFromDatabase();
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

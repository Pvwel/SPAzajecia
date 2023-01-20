<template>
  <v-app>
<NavBar />
<v-container fluid>
  <v-card
        color="transparent"
        height="45px"
        tile
        flat
        class="d-flex align-center justify-center mt-12"
        dark
      >
        <v-row>
          <v-col cols="12" sm="12">
            <v-item-group>
              <v-container>
                <v-row justify="center">
                  <v-col
                    cols="12"
                    xs="12"
                    sm="4"
                    md="2"
                    v-for="(cetegory, i) in categories"
                    :key="i"
                  >
                    <v-item v-slot="{ active, toggle }">
                      <v-card
                        class="d-flex align-center"
                        height="30"
                        @click="toggle"
                        flat
                      >
                        <v-row>
                          <v-col >
                            <v-list-item class="text-center">
                              <v-list-item-content>
                                <v-list-item-title 
                                  :class="
                                    active ? 'green--text' : 'black--text'
                                  "
                                  >{{ cetegory.title }}</v-list-item-title
                                >
                              </v-list-item-content>
                            </v-list-item>
                          </v-col>
                        </v-row>
                      </v-card>
                    </v-item>
                  </v-col>
                </v-row>
              </v-container>
            </v-item-group>
          </v-col>
        </v-row>
      </v-card>
      <v-toolbar color="transparent" dark class="mt-2">
        <v-checkbox v-model="products" label="Buty" class="check mt-4"></v-checkbox>
        <v-checkbox v-model="other" label="Inne" class="check mt-4"></v-checkbox>
        <v-divider vertical></v-divider>
        <v-btn variant="text">Wybierz rozmiar
          <v-icon right class="ml-2 mt-n1">fas fa-caret-right</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn variant="text">Wybierz kolor
          <v-icon right class="ml-2 mt-n1">fas fa-caret-right</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
       <span class="text-caption mx-2">CENA OD</span>
       <v-slider v-model="slider2" label="track-color" class="mt-5"></v-slider>
       <span class="text-caption mx-2">DO</span>
      </v-toolbar>
      <v-divider class=mt-2></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title>PRODUKTY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title align="right">Filtry:</v-toolbar-title>
        <v-btn variant="text" >Kolor</v-btn>
        <v-btn variant="text" >Cena</v-btn>
      </v-toolbar>
      <v-row>
          <v-col cols="12" sm="3" v-for="(chair,i) in products" :key="i" align="center" >
            <v-btn flat width="200" height="300">
              <v-card height="300" align="center" flat outlined tile>
                <v-img :src="chair.image" width="200" height="200" contain></v-img>
                <v-card-text class="mt-n1">
                  <strong>{{chair.title}}</strong>
                </v-card-text>
                <v-card-text class="mt-n2">
                  <strong>{{chair.price}}</strong>
                </v-card-text>
              </v-card>
              </v-btn>
          </v-col>
          
      </v-row>
      <v-divider></v-divider>
      <v-toolbar color="transparent">
        <v-btn variant="text">Zobacz więcej</v-btn>
        <v-spacer></v-spacer>
        <v-btn>
        <v-icon color="grey" left class="mr-4 mt-n1">fas fa-long-arrow-alt-left</v-icon></v-btn>
        <span class="text-caption">1</span>
        <v-btn>
        <v-icon color="grey" left class="ml-4 mt-n1 mr-2">fas fa-long-arrow-alt-right</v-icon></v-btn>
      </v-toolbar>
</v-container>
<FooterView />
  </v-app>
  
</template>

<script>
import { defineComponent } from 'vue';

// Components
import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';

export default defineComponent({
  name: 'HomeView',
setup(){
  return {
    other: false,
    slider2: 90,
    categories: [
    {title: "BUTY" },
        {title: "MASKI SHREK" },
        {title: "BLUZY" },

    ],
    products:[
    {
          class: "pa-0",
          image: "c1.png",
          title: "Maska Osioł-Shrek",
          price: "99.99zł",
        },
        {
          class: "pa-0",
          image: "c2.png",
          title: "Łyżwy",
          price: "280.00zł",
        },
        {
          class: "pa-0",
          image: "c3.png",
          title: "Kolorowe",
          price: "200.00zł",
        },
        {
          class: "pa-0",
          image: "c4.png",
          title: "Pantofle",
          price: "250.00zł",
        },
        {
          class: "pa-0",
          image: "c5.png",
          title: "Snikers",
          price: "200.00zł",
        },
        {
          class: "pa-0",
          image: "c10.png",
          title: "Buty do biegania",
          price: "170.00zł",
        },
        {
          class: "pa-0",
          image: "c11.png",
          title: "Buty do biegania",
          price: "200.00zł",
        },
        {
          class: "pa-0",
          image: "c12.png",
          title: "Buty do biegania",
          price: "250.00zł",
        },
        {
          class: "pa-0",
          image: "c13.png",
          title: "Buty do biegania",
          price: "420.00zł",
        },
        {
          class: "pa-0",
          image: "c14.png",
          title: "Trampki",
          price: "220.00zł",
        },
        {
          class: "pa-0",
          image: "c15.png",
          title: "Buty do biegania",
          price: "200.00zł",
        },
        {
          class: "pa-0",
          image: "c16.png",
          title: "Shrek",
          price: "999999.99zł",
        },
    ]
  }
}, 
  components: {
    NavBar,
    FooterView
},
});
</script>
<style scoped>
  
</style>
<template>
<div></div>
<v-row>
          <v-col cols="12" sm="3" v-for="(products,i) in products" :key="i" align="center" >
            <v-btn flat width="200" height="300" to="/Product">
              <v-card height="300" align="center" flat outlined tile>
                <v-img :src="products.image" width="200" height="200" contain></v-img>
                <v-card-text class="mt-n1">
                  <strong>{{products.title}}</strong>
                </v-card-text>
                <v-card-text class="mt-n2">
                  <strong>{{products.price}}</strong>
                </v-card-text>
                
                
              </v-card>
              </v-btn>
              
          </v-col>
          <strong>{{products.tag}}</strong>
</v-row>
</template>

<script>



import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProductsName',
setup(){
  return {
    
    
    products:[
    {
          class: "pa-0",
          image: "c1.png",
          title: "Maska Osioł-Shrek",
          price: "99.99zł",
          tag: "2",
          
        },
        {
          class: "pa-0",
          image: "c2.png",
          title: "Łyżwy",
          price: "280.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c3.png",
          title: "Kolorowe",
          price: "200.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c4.png",
          title: "Pantofle",
          price: "250.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c5.png",
          title: "Snikers",
          price: "200.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c10.png",
          title: "Buty do biegania",
          price: "170.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c11.png",
          title: "Buty do biegania",
          price: "200.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c12.png",
          title: "Buty do biegania",
          price: "250.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c13.png",
          title: "Buty do biegania",
          price: "420.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c14.png",
          title: "Trampki",
          price: "220.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c15.png",
          title: "Buty do biegania",
          price: "200.00zł",
          tag: "1",
        },
        {
          class: "pa-0",
          image: "c16.png",
          title: "Shrek",
          price: "999999.99zł",
          tag: "2",
        },
    ]
  }
}, 

});



</script>
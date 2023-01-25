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
  name: 'ProductsMask',
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
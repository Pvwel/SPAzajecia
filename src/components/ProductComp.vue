<template>
    <div></div>
    <v-row align="center" justify="center">
        
              <v-col cols="15" sm="3" v-for="(products,i) in products" :key="i" align="right" >
                
                  <v-card height="500"  align="center" flat outlined tile>
                    <v-img :src="products.image"  width="600" height="500" contain></v-img>
                </v-card>
            <v-card class="d-flex align-center justify-center" flat outlined tile >  
                <v-card-text  align="center">
                  <strong>{{products.title}}</strong>
                </v-card-text>
                <v-card-text  align="center">
                  <strong>{{products.price}}</strong>
                </v-card-text>
                
            </v-card>
            
            <div style="position: absolute;margin-left:auto;margin-right:auto;left:0;right:0;text-align: center ;">
      
      
        
      <v-btn 
      
      
      >Dodaj do koszyka
</v-btn>
    

</div>
</v-col>
</v-row>




            
              <strong>{{products.tag}}</strong>
   

    
    </template>

    
    
    <script>
    
    
    
    import { defineComponent } from 'vue';
    
    export default defineComponent({
      name: 'ProductsComp',
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

        ]
      }
    }, 
    
    });
    
    
    
    </script>
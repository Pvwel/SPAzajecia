<template>
  <div></div>

 
 
    
 
 
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
                 
                 <div class="flex">
                   <v-btn variant="text"
                     
                       
                       height="30"
                       to="/Maski"
                       
                       
                       text="Shrek"> 

                       
                   </v-btn>
                 
                   <v-btn variant="text"
                     
                       
                       height="30"
                       to="/Buty"
                       
                       
                       text="Buty"> 
                   </v-btn>
                 

                   <v-btn variant="text"
                     
                       
                       height="30"
                       to="/Bluzy"
                       
                       
                       text="Bluzy"> 

                                 
                       
                   </v-btn>

                 </div>

                
               </v-row>
              
             </v-container>
            
              
           </v-item-group>
         </v-col>
       </v-row>
     </v-card>


     
     
    
 </template>

<style>
div.flex {
    display: flex;
    margin-left: auto;
    margin-right: auto;   
}


</style>







 <script>
import { defineComponent } from 'vue';

export default defineComponent({
 name: 'CategoryComp',
setup(){
 return {

   categories: [
   {title: "BUTY" },
   {title: "MASKI SHREK" },
   {title: "BLUZY" },

   ],
 }
}
});



</script>


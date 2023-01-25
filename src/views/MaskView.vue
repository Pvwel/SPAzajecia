<template>
    <v-app>
    <NavBar />
    <v-container fluid>
    <CategoryComp />
      <FiltersComp />    
       <ProductMask />
        
      <OnFooter />  
    </v-container>
    <v-spacer ></v-spacer>
    <v-spacer ></v-spacer>
    <v-spacer ></v-spacer>
    <v-spacer ></v-spacer>
    <v-spacer ></v-spacer>
    <FooterView />
      </v-app>
      
    </template>
    
    <script setup>
    
    
    
    import NavBar from '@/components/NavBar.vue';
    import FooterView from '@/components/FooterView.vue';
    import ProductMask from '@/components/ProductMask.vue'
    import CategoryComp from '@/components/CategoryComp.vue';
    import FiltersComp from '@/components/FiltersComp.vue';
    import OnFooter from '@/components/OnFooter.vue';


    </script>
    <style scoped>
      
    </style>
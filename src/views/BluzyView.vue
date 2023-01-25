<template>
    <v-app>
    <NavBar />
    <v-container fluid>
    <CategoryComp />
      <FiltersComp />    
      <div>
       <h4> Nie ma produktów </h4>

      </div>
      
      
    </v-container>
    
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>
    <v-spacer></v-spacer>

    <FooterView />
      </v-app>
      
    </template>
    
    <script setup>
    
    
    
    import NavBar from '@/components/NavBar.vue';
    import FooterView from '@/components/FooterView.vue';

    import CategoryComp from '@/components/CategoryComp.vue';
    import FiltersComp from '@/components/FiltersComp.vue';
    
    
    </script>
  
<template>
<div>
</div>
<v-app>
<NavBar />
<v-container fluid>
<CategoryComp />
  
   <ProductComp />
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
import ProductComp from '@/components/ProductComp.vue';
</script>
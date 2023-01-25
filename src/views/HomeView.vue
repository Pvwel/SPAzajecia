<template>
<v-app>
<NavBar />
<v-container fluid>
<CategoryComp />
  <FiltersComp />    

    <ProductsName />
  <OnFooter />  
</v-container>
<FooterView />
  </v-app>
  
</template>

<script setup>



import NavBar from '@/components/NavBar.vue';
import FooterView from '@/components/FooterView.vue';
import ProductsName from '@/components/ProductsName.vue';
import CategoryComp from '@/components/CategoryComp.vue';
import FiltersComp from '@/components/FiltersComp.vue';
import OnFooter from '@/components/OnFooter.vue';

</script>
<style scoped>
  
</style>
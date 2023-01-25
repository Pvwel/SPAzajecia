<template>
    <div></div>
    <v-toolbar color="transparent" dark class="mt-2">
        
        <v-divider vertical></v-divider>
        <v-btn variant="text">Wybierz rozmiar
          <v-icon right class="ml-2 mt-n1">fas fa-caret-right</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-btn variant="text">Wybierz kolor
          <v-icon right class="ml-2 mt-n1">fas fa-caret-right</v-icon>
        </v-btn>
        <v-divider vertical></v-divider>
        <v-text-field density="compact" variant="outlined" label="Cena od" class="mt-5" ></v-text-field>
        
        <v-text-field density="compact" variant="outlined" label="Cena do" class="mt-5" ></v-text-field>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
      </v-toolbar>
      <v-divider class=mt-2></v-divider>
      <v-toolbar color="transparent">
        <v-toolbar-title>PRODUKTY</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-title align="right">Filtry:</v-toolbar-title>

        <v-btn variant="text" >Cena</v-btn>
      </v-toolbar>
</template>



<script>


import { defineComponent } from 'vue';

export default defineComponent({
  name: 'FiltersComp',

})


  


</script>
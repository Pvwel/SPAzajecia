<template>
      <HeaderComponent @click="ChangeContent" :text='content'/>
</template>

<script>
import HeaderComponent from './components/HeaderComponent.vue'

export default {
  name: 'App',
  components: {
    HeaderComponent
  },

  methods: {
    ChangeContent() {
      this.content = "start"
    }
  }
}



</script>



<style>
#App {
  font-family: Avenir, Arial, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align:center;
  color:#2c3e50;
  margin-top: 60px;
}


</style>

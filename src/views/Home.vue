<template>
<div id="app">
   <router-view></router-view>
    <Toppage></Toppage>

<br>
<br>
<div class="container"> <InfoRotas></InfoRotas></div>
<br>
<br><br>
<br><br>
<br><br>
<br>
     <div class="container">  <Features></Features></div>
    
  
</div>
 
</template>

<script>

// @ is an alias to /src

import Toppage from "../components/Toppage.vue"

import InfoRotas from "../components/InfoRotas.vue"

import Features from "../components/Features.vue"







export default {
  name: "home",
  components: {
    Toppage,
    InfoRotas,
    Features
  },
/*   computed:{
    addWineries(){
      this.$store.commit('ADD_WINERIES')
    }
  }, */
};
</script>


<style>
</style>

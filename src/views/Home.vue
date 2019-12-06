<template>
<div id="app">
     <Navbar></Navbar>
    <Toppage></Toppage>

<br>
<br>
<div class="container" >
  <div class="row">
    <div class="col-sm-4">
      <CidadesRotas></CidadesRotas>
    </div>
    <div class="col-sm-4">
      <InfoRotas></InfoRotas>
    </div>
    <div class="col-sm-4">
     <quintas-destaque></quintas-destaque>
    </div>
  </div>
</div>
 <Footer></Footer>
</div>
 
</template>

<script>

// @ is an alias to /src
import Navbar from "@/components/Navbar.vue";
import Toppage from "../components/Toppage.vue"
import CidadesRotas from "../components/CidadesRotas.vue"
import InfoRotas from "../components/InfoRotas.vue"
import QuintasDestaque from "../components/QuintasDestaque.vue"
import Footer from "../components/Footer.vue"





export default {
  name: "home",
  components: {
    Navbar,
    Toppage,
    CidadesRotas,
    InfoRotas,
    QuintasDestaque,
    Footer
 
   
    
   
  }
};
</script>


<style>
</style>

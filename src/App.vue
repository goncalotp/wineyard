<template>
  <div id="app">
    <Navbar></Navbar> 
    <router-view> </router-view>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

export default {
  name: "app",
  components: {
    Navbar,
    Footer
  }
};
</script>
<style>

</style>

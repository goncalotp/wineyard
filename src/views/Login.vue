<template>
  <div>
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
   
    <router-view></router-view>
    
    <LoginModal />
    <Footer></Footer>
  </div>
</template>
<script>
import LoginModal from "@/components/LoginModal.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"

export default {
  name: "login",
  components: {
    LoginModal,
    Navbar,
    Footer,
   
  }
}
</script>
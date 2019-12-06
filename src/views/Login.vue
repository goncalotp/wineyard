<template>
  <div>
    <Navbar></Navbar>
    <router-view></router-view>
    <LoginModal />
  </div>
</template>
<script>
import LoginModal from "@/components/LoginModal.vue"
import Navbar from "@/components/Navbar.vue"
export default {
  name: "login",
  components: {
    LoginModal,
    Navbar
  }
}
</script>
<template>
  <div>
    <Navbar></Navbar>
    <br>
    <br>
    <br>
    <br>
    <RegisterForm />
    <Footer></Footer>
  </div>
</template>
<script>
import RegisterForm from "@/components/RegisterForm.vue"
import Navbar from "@/components/Navbar.vue"
import Footer from "@/components/Footer.vue"
export default {
  name: "register",
  components: {
    RegisterForm,
    Navbar,
    Footer
  }
}
</script>
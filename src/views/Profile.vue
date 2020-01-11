<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />
      <h1 style="text-align:center">Perfil</h1>
      <div class="col-sm-2" >
         <div class="card-wrapper">
      <!--Front Side-->
      <div class="face front">
        <!-- Image-->
        <div class="view overlay" style="text-align:center">
          <img
            class="card-img-top"
            src="../assets/user.png"
            alt="Example photo"
            style="width:150px; "
          />
         
        </div>
        <!--Content-->
        <div class="card-body" style="text-align:left" >
          <h4 class="" >
            <router-link style="color: black; text-decoration: none;" to="/">{{ name() }}</router-link>
          </h4>
          <p class="card-text" >
              <router-link style="color: black; text-decoration: none;" to="/">{{ email() }}</router-link>
          </p>
         
        </div>
      </div>
    </div>
      </div>
    </div>
     <div class="col-sm-10">
       <!-- ratings -->
     </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
    
  </div>
</template>


<script>
export default {
  name: "",
  props: {},
  created: function() {
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
    }
  }, 
  computed: {},
  methods: {
   
    name() {
      return this.$store.getters.name;
    },

    email(){
      return this.$store.getters.email;
    }
  
  }
};
    </script>

<style scoped>

</style>

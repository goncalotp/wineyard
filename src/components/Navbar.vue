<template>
  <nav class="navbar navbar-expand-lg   ">
    <a href="" class="navbar-left">
      <router-link to="/home"></router-link
      ><img style="width:30px" src="../assets/logo.png" />
    </a>
    <a class="navbar-brand" href="#">Wineyard</a>
    <ul class="navbar-nav ml-auto">
      <div class=" dropdown nav-item ">
        <a
          v-if="this.$store.state.loggedUser.length != 0"
          href="#"
          class="nav-link dropdown-toggle"
          data-toggle="dropdown"
        >
          <router-link to="/">{{ name() }}</router-link></a
        >
        <div class="dropdown-content dropdown-menu">
          <li
            class="nav-item"
            v-for="user in this.$store.state.loggedUser"
            v-bind:key="user"
          >
            <a v-if="user.type == '0'" id="items" class="dropdown-item" href="#">
              <router-link to="/adminpage">Gestão</router-link>
            </a>
          </li>
          <a href="#" class="dropdown-item"><router-link to="/profile">Perfil</router-link></a>
          <a href="#" @click="logout()" class="dropdown-item"><router-link to="/">Logout</router-link></a>
        </div>
      </div>
      <li class="nav-item">
        <a
          v-if="this.$store.state.loggedUser.length != 0"
          id="items"
          class="nav-link"
          href="#"
        >
          <router-link to="/myroutes">Minhas Rotas</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a id="items" class="nav-link" href="#">
          <router-link to="/map">Mapa</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a id="items" class="nav-link" href="#">
              <router-link to="/about">Contactos</router-link>
        </a>
      </li>
      <li class="nav-item">
        <a
          v-if="this.$store.state.loggedUser.length == 0"
          id="items"
          class="nav-link"
          href="#"
        >
          <router-link to="/login">Login</router-link>
        </a>
      </li>
      <!--GESTÂO DO ADMIN-->
    </ul>
  </nav>
</template>

<script>
export default {
  name: "Navbar",
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
    logout() {
      this.$store.commit("LOGOUT");
    },
    name() {
      return this.$store.getters.name;
    },
    getTypeUser() {
      return this.$store.getters.typeUser;
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#searchBar {
  border-radius: 50px;
  background: rgb(49, 49, 49);
  color: white;
}

#fafaSearch {
  border: none;
  background: none;
}

.navbar {
  color: black;
  background-color: rgb(49, 49, 49);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
}

.dropdown-content a {
  color: black;
  padding: 12px 16px;
}

.dropdown:hover .dropdown-content {
  display: block;
}
a {
  color: white;
}

.nav-link {
  color: white;
  font-family: "Cinzel", serif;
}

.navbar-brand{
   font-family: "Cinzel", serif;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

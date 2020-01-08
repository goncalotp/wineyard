<template>
  <nav class="navbar navbar-expand-lg   ">
    <a href="" class="navbar-left">
      <router-link to="/home"></router-link
      ><img style="width:30px" src="../assets/logo.png" />
    </a>
    <a class="navbar-brand" href="#">Wineyard</a>

    <ul class="navbar-nav ml-auto">
      <div class="row">
        <div class="col-12">
          <div class="input-group">
            <input
              id="searchBar"
              class="form-control border-secondary"
              type="search"
              placeholder="procurar"
            />
            <div class="input-group-append">
              <button id="fafaSearch" type="button">
                <i class="glyphicon glyphicon-search form-control-feedback"></i>
              </button>
            </div>
          </div>
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
        <a id="items" class="nav-link" href="#">Contactos</a>
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
      <li class="nav-item">
        <a
          v-if="this.$store.state.loggedUser.length != 0"
          @click="logout()"
          id="items"
          class="nav-link"
          href="#"
        >
          <router-link to="/">{{ name() }}</router-link>
        </a>
      </li>
      <div class="nav-item dropdown">
        <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown"
          >Messages</a
        >
        <div class="dropdown-menu">
          <a href="#" class="dropdown-item">Inbox</a>
          <a href="#" class="dropdown-item">Sent</a>
          <a href="#" class="dropdown-item">Drafts</a>
        </div>
      </div>
      <!--GESTÂO DO ADMIN-->
      <li class="nav-item">
        <a
          v-if="this.$store.state.loggedUser.length != 0"
          id="items"
          class="nav-link"
          href="#"
        >
          <router-link to="/adminpage">{{ getTypeUser() }}</router-link>
        </a>
      </li>
      <li class="nav-item dropdown">
        <a
          class="nav-link dropdown-toggle"
          href="#"
          id="navbarDropdown"
          role="button"
          data-toggle="dropdown"
          aria-haspopup="true"
          aria-expanded="false"
        >
          PT
        </a>
        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
          <a class="dropdown-item" href="#">EN</a>
        </div>
      </li>
    </ul>
    <div>
      <select>
        <option value="0">PT</option>
        <option value="1">ENG</option>
      </select>
    </div>
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
  overflow: hidden;

  background-color: rgb(49, 49, 49);
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 4;
}

.navbar,
a {
  color: white;
}

.nav-link {
  color: white;
}
</style>

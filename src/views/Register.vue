<template>
  <div id="fromrRegister">
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container">
      <div class="row">
        <div class="col-sm-4">
          <img style="width: 100%" src="../assets/vineyardgif.gif" />
        </div>
        <div class="container col-sm-6">
          <h1>Criar Conta</h1>
          <form v-on:submit.prevent="addUser()">
            <div class="form-group">
              <label for="registerName">Nome:</label>
              <input
                type="text"
                class="form-control"
                id="registerName"
                placeholder="Insira o seu nome"
                required
                v-model="name"
              />
            </div>
            <div class="form-group">
              <label for="registerEmail">E-mail:</label>
              <input
                type="email"
                class="form-control"
                id="registerEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
                required
                v-model="email"
              />
              <small id="emailHelp" class="form-text text-muted"
                >We'll never share your email with anyone else.</small
              >
            </div>
            <div class="form-group">
              <label for="registerPass">Password:</label>
              <input
                type="password"
                class="form-control"
                id="registerPass"
                placeholder="Password"
                required
                v-model="password"
              />
            </div>
            <div class="form-group">
              <label for="registerConfPass">Confirmar Password:</label>
              <input
                type="password"
                class="form-control"
                id="registerConfPass"
                placeholder="Confirme sua Password"
                required
                v-model="confPassword"
              />
            </div>
            <button type="submit" class="button float-right">
              Criar Conta
            </button>
            <button id="loginBtn" type="button" class="button float-right">
              <router-link
                style="color: black; text-decoration: none;"
                to="/login"
                >Login</router-link
              >
            </button>
          </form>
        </div>
      </div>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<script>
export default {
  data: () => ({
    name: "",
    email: "",
    password: "",
    confPassword: ""
  }),
  created: function() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    }
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
    }
  },
  methods: {
    addUser() {
      this.$store.commit("ADD_USER", {
        email: this.email,
        name: this.name,
        password: this.password,
        confPassword: this.confPassword
      });
    }
  }
};
</script>

<style>
.button {
  background-color: #555555; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  font-family: "Cinzel", serif;
}

.button:hover {
  background-color: black;
}

#loginBtn {
  background-color: white;
  border: none;
  font-family: "Cinzel", serif;
}
h1 {
  font-family: "Cinzel", serif;
}


label{
font-family: "Didact Gothic", sans-serif;
}
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

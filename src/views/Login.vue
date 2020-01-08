<template>
  <div id="fromLogin">
    <div class="container col-sm-4">
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <h1>Login</h1>
      <form v-on:submit.prevent="login()">
        <div class="form-group">
          <label for="exampleInputEmail1">Email:</label>
          <input
            type="email"
            class="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Enter email"
            required
            v-model="emailLogin"
          />
          <small id="emailHelp" class="form-text text-muted"
            >We'll never share your email with anyone else.</small
          >
        </div>
        <div class="form-group">
          <label for="passwordLogin">Password:</label>
          <input
            type="password"
            class="form-control"
            id="passwordLogin"
            placeholder="Password"
            v-model="passwordLogin"
          />
        </div>
        <button type="button" class="btn btn-link">
          <router-link to="/register">Registar</router-link>
        </button>
        <button type="submit" class="btn btn-primary">Iniciar Sessão</button>
      </form>
    </div>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
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
    emailLogin: "",
    passwordLogin: ""
  }),
  created: function() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
    }
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    }
  },
  methods: {
    login() {
      this.$store.commit("LOGIN", {
        emailLogin: this.emailLogin,
        passwordLogin: this.passwordLogin
      });
    }
  },
  saveStorage() {
    localStorage.setItem("users", JSON.stringify(this.$store.state.users));
  }
};
</script>

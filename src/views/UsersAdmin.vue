<template>
  <div class="container-fluid">
    <br />
    <br />
    <br />
    <button type="button" class="btn btn-primary">
      <router-link to="adminpage">Voltar</router-link>
    </button>
    <div class="container">
      <h1>GESTÃO DE UTILIZADORES</h1>
      <button type="button" class="btn btn-primary" @click="orderByName()">A-Z</button>
      <table class="table">
        <thead>
          <tr>
            <th class="align-middle" scope="col">Nome</th>
            <th class="align-middle" scope="col">e-m@il</th>
            <th class="align-middle" scope="col">Tipo de Utilizador</th>
            <th class="align-middle" scope="col">Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in this.$store.state.users" v-bind:key="user">
            <td class="align-middle">{{user.name}}</td>
            <td class="align-middle">{{user.email}}</td>
            <td class="align-middle">
                <span v-if='user.type == 0'>Administardor</span>
                <span v-else>Utilizador</span>
              <button @click="changeTypeUser(user.email)">-></button>
            </td>
            <td class="align-middle">
              <span v-if="user.type!=0">
                <button @click="removeUser(user.email)">Apagar User</button>
              </span>
              <span v-else>Não se pode Remover</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  created: function() {
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    }
  },
  methods: {
    removeUser(mail) {
      if (confirm("Deseja mesmo remover o utilizador?")) {
        this.$store.commit("REMOVE_USER", {
          email: mail
        });
      }
    },
    changeTypeUser(mail){
        if (confirm("Deseja mesmo mudar o tipo de utilizador?")) {
        this.$store.commit("CHANGE_TYPE_USER", {
          email: mail
        });
      }
    },
    compareName(a, b) {
      if (a.name < b.name) return -1
      if (a.name > b.name) return 1
      else return 0
    },
    orderByName(){
        this.$store.commit("ORDER_BY_NAME", {
            compare: this.compareName
        });
    }
  },
};
</script>
<template>
  <div class="container-fluid">
    <br />
    <br />
    <br />
    <button id="backBtn" type="button" class="button">
      <router-link style="color: white; text-decoration: none; " to="adminpage">
        Voltar
      </router-link>
    </button>
    <div class="container">
      <h1>GESTÃO DE UTILIZADORES</h1>
     
      <div style="text-align:right">
        <input
          type="text"
          v-model="searchResultName"
          placeholder="procura por nome"
        />
      </div>
      <table class="table">
        <thead>
          <tr>
            <th class="align-middle" @click="orderByName()" scope="col">Nome 🔽</th>
            <th class="align-middle" scope="col">E-mail</th>
            <th class="align-middle" scope="col">Tipo de Utilizador</th>
            <th class="align-middle" scope="col">Mudar tipo de utilizador</th>
            <th class="align-middle" scope="col">Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="user in searchBar" v-bind:key="user">
            <td class="align-middle">{{ user.name }}</td>
            <td class="align-middle">{{ user.email }}</td>
            <td class="align-middle">
              <span v-if="user.type == 0">Administrador</span>
              <span v-else>Utilizador</span>
            </td>
            <td class="align-middle">
              <button
                style="border:none; background-color:white;"
                @click="changeTypeUser(user.email)"
              >
                🔁
              </button>
            </td>
            <td class="align-middle">
              <span v-if="user.type != 0">
                <button
                  style="border:none; background-color:white"
                  @click="removeUser(user.email)"
                >
                  🗑️
                </button>
              </span>
              <span v-else>Não se pode Remover</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>
<script>
const Swal = require("sweetalert2");
export default {
  data: () => ({
    searchResultName: "",
    route: ""
  }),
  created: function() {
    if (localStorage.getItem("users")) {
      this.$store.state.users = JSON.parse(localStorage.getItem("users"));
    }
  },
  methods: {
    removeUser(mail) {
      Swal.fire({
        title: "Deseja mesmo remover o utilizador?",
        text: "Vai apagar o utilizador",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#555555",
        cancelButtonColor: "#555555",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
      }).then(result => {
        if (result.value) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Utilizador apagado.",
            showConfirmButton: false,
            timer: 1500
          });
          this.$store.commit("REMOVE_USER", {
            email: mail
          });
        }
      });
    },
    changeTypeUser(mail) {
      Swal.fire({
        title: "Deseja mesmo mudar o tipo de utilizador?",
        text: "Vai mudar o tipo de utilizador",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#555555",
        cancelButtonColor: "#555555",
        confirmButtonText: "Sim",
        cancelButtonText: "Não"
      }).then(result => {
        if (result.value) {
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Tipo de utilizador alterado.",
            showConfirmButton: false,
            timer: 1500
          });
          this.$store.commit("CHANGE_TYPE_USER", {
            email: mail
          });
        }
      });
    },
    compareName(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      else return 0;
    },
    orderByName() {
      this.$store.commit("ORDER_BY_NAME", {
        compare: this.compareName
      });
    }
  },

  computed: {
    searchBar() {
      return this.$store.state.users.filter(user => {
        let filterSearchBar = true;
        if (this.searchResultName !== "") {
          filterSearchBar = user.name.includes(this.searchResultName);
        }
        return filterSearchBar;
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
  background-color: #689666;
}
#backBtn {
  background-color: #555555;
}

#backBtn:hover {
  background-color: #689666;
}

tr {
  text-align: center;
}
td {
  text-align: center;
}
footer {
  position: relative;
  left: 0;
  bottom: 0;
  width: 100%;
  color: white;
  text-align: center;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

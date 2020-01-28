<template>
  <div>
    <img style="width:100%" src="../assets/header2.jpg" />
    <br />
    <br />
    <div style="text-align:center">
      <h3>As minhas rotas</h3>
      <br />
      <div class="container">
        <div class="card-columns">
          <div v-for="userR in filterRoutesUser" :key="userR">
            <div class="card text-white mb-3">
              <a class="button" @click="removeRoute(userR.id)" id="close">X</a>
              <br />
              <h5>{{ userR.nameRoute }}</h5>
              <p class="card-text">
                {{ userR.dateRoute }}
              </p>
              <a
                class="button"
                @click="startRoute(userR.id)"
                style="background: none"
              >
                <i class="fa fa-map-o"> </i> &nbsp; &nbsp; Ver rota
              </a>
            </div>
          </div>
        </div>
      </div>

      <br />
      <h3>Criar rota nova</h3>
      <br />
      <form v-on:submit.prevent="addMyRoutes()">
        <div class="form-group container col-sm-6">
          <label for="selectRoutes">Escolher Rota</label>
          <select class="form-control" id="selectRoutes" v-model="routesMy">
            <option value="1">Rota 1</option>
            <option value="2">Rota 2</option>
            <option value="3">Rota 3</option>
          </select>
          <div class="col-sm-12">
            <table
              v-if="this.routesMy != ''"
              class="table form-group"
              style="text-align:middle"
            >
              <thead>
                <tr>
                  <th class="align-middle" scope="col">Nome</th>
                  <th class="align-middle" scope="col">Classificação</th>
                  <th class="align-middle" scope="col">Degustação</th>
                  <th class="align-middle" scope="col">Almoço</th>
                  <th class="align-middle" scope="col">Visitar</th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="winerie in filterRoutes" v-bind:key="winerie">
                  <td class="align-middle">{{ winerie.name }}</td>
                  <td class="align-middle">{{ winerie.rate }}</td>
                  <td class="align-middle">
                    <span v-if="winerie.wine == true">✔️</span>
                    <span v-else>❌</span>
                  </td>
                  <td class="align-middle">
                    <span v-if="winerie.lunch == true">✔️</span>
                    <span v-else>❌</span>
                  </td>
                  <td class="align-middle">
                    <input
                      type="checkbox"
                      :value="winerie.id"
                      v-model="checkWineries"
                      :checked="isAllSelected"
                    />
                  </td>
                </tr>
              </tbody>
              <td>Selecionar todos</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <input
                  type="checkbox"
                  v-model="isAllSelected"
                  @click="selectAll"
                />
              </td>
            </table>
          </div>
          <br />
          <div class="row">
            <label for="registerRoute">Nome da rota:</label>
            <input
              type="text"
              class="form-control"
              v-model="routeName"
              id="registerRoute"
              placeholder="Insira o nome da sua rota"
            />
          </div>
          <br />
        </div>
      </form>

      <br />
      <br />

      <button type="submit" @click="addMyRoutes" class="button">
        + Adicionar rota
      </button>

      <br />
      <br />
      <br />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    routesMy: "",
    lunchMy: "",
    wineMy: "",
    routeName: "",
    checkWineries: [],
    isAllSelected: false
  }),
  created: function() {
    if (localStorage.getItem("routesUsers")) {
      this.$store.state.routesUsers = JSON.parse(
        localStorage.getItem("routesUsers")
      );
    }
  },
  methods: {
    getLastId() {
      return this.$store.getters.lastIdMyRoutes;
    },
    addMyRoutes() {
      let lastId = this.getLastId();
      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      this.$store.commit("ROUTES_USERS", {
        routeUser: lastId + 1,
        idRoute: this.routesMy,
        username: this.$store.getters.email,
        chkWineries: this.checkWineries,
        routeName: this.routeName,
        routeDate: `${day}/${month}/${year}`
      });
      let c = confirm("Deseja iniciar a sua rota?");
      if (c == true) {
        this.$router.push({ name: "route", params: lastId + 1 });
        this.$store.state.selectMyRouteId = lastId + 1;
      }
    },
    startRoute(id) {
      let conf = confirm("Deseja começar esta rota?");
      if (conf == true) {
        this.$router.push({ name: "route", params: id });
        this.$store.state.selectMyRouteId = id;
      }
    },
    selectAll() {
      this.checkWineries = [];
      if (!this.isAllSelected) {
        for (let i in this.$store.state.wineries)
          this.checkWineries.push(this.state.wineries[i].id);
      }
    },
    winerieName() {
      return this.$store.getters.winerieName;
    },
    removeRoute(id) {
      if (confirm("Deseja mesmo remover a rota=")) {
        this.$store.commit("REMOVE_ROUTE", {
          id: id
        });
      }
    }
  },
  computed: {
    filterRoutes() {
      return this.$store.state.wineries.filter(
        winerie => winerie.route == this.routesMy
      );
    },
    filterRoutesUser() {
      return this.$store.state.routesUsers.filter(
        routeUser => routeUser.user == this.$store.getters.email
      );
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
label {
  font-family: "Didact Gothic", sans-serif;
}

h3 {
  font-family: "Cinzel", serif;
}

#addRoute {
  border-radius: 50px;
  background-color: white;
  color: black;
}

.card {
  background-color: #444444;
  transition: 0.3s;
  width: 20%;
  margin: 0 auto;
  float: center;
  margin-bottom: 10px;
}
#close {
  background-color: #444444;
  padding-left: 310px;
}
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");

.google-map {
  height: 500px;
  margin: auto;
}
</style>

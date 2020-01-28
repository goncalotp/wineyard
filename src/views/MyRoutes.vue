<template>
  <div>
    <img style="width:100%" src="../assets/header2.jpg" />
    <br />
    <br />
    <div style="text-align:center">
      <h3>As minhas rotas</h3>
      <br />
      <div v-for="userR in filterRoutesUser" :key="userR">
        <p>{{ userR.nameRoute }}</p>
        <p>{{ userR.dateRoute }}</p>
        <div v-for="winerie in this.$store.state.wineries" :key="winerie">
          <span v-if="winerie.id == userR.wineries">
            <p>{{ winerie.name }}</p>
          </span>
        </div>
      </div>

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
    selectAll() {
      this.checkWineries = [];
      if (!this.isAllSelected) {
        for (let i in this.$store.state.wineries)
          this.checkWineries.push(this.state.wineries[i].id);
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

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");

.wrapper {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  width: 100px;
  margin: 50vh auto 0;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  -webkit-transform: translateY(-50%);
  transform: translateY(-50%);
}

.switch_box {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  max-width: 80px;
  min-width: 80px;
  height: 0px;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  flex: 1;
}

/* Switch 4 Specific Style Start */

.input_wrapper {
  width: 80px;
  height: 35px;
  position: relative;
  cursor: pointer;
}

.input_wrapper input[type="checkbox"] {
  width: 80px;
  height: 40px;
  cursor: pointer;
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background: #e4473c;
  border-radius: 2px;
  position: relative;
  outline: 0;
  -webkit-transition: all 0.2s;
  transition: all 0.2s;
}

.input_wrapper input[type="checkbox"]:after {
  position: absolute;
  content: "";
  top: 3px;
  left: 3px;
  width: 34px;
  height: 34px;
  background: #dfeaec;
  z-index: 2;
  border-radius: 2px;
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
}

.input_wrapper svg {
  position: absolute;
  top: 50%;
  -webkit-transform-origin: 50% 50%;
  transform-origin: 50% 50%;
  fill: rgb(56, 56, 56);
  -webkit-transition: all 0.35s;
  transition: all 0.35s;
  z-index: 1;
}

.input_wrapper .is_checked {
  width: 18px;
  left: 18%;
  -webkit-transform: translateX(190%) translateY(-30%) scale(0);
  transform: translateX(190%) translateY(-30%) scale(0);
}

.input_wrapper .is_unchecked {
  width: 15px;
  right: 15%;
  -webkit-transform: translateX(0) translateY(-30%) scale(1);
  transform: translateX(0) translateY(-30%) scale(1);
}

/* Checked State */
.input_wrapper input[type="checkbox"]:checked {
  background: #23da87;
}

.input_wrapper input[type="checkbox"]:checked:after {
  left: calc(100% - 37px);
}

.input_wrapper input[type="checkbox"]:checked + .is_checked {
  -webkit-transform: translateX(0) translateY(-30%) scale(1);
  transform: translateX(0) translateY(-30%) scale(1);
}

.input_wrapper input[type="checkbox"]:checked ~ .is_unchecked {
  -webkit-transform: translateX(-190%) translateY(-30%) scale(0);
  transform: translateX(-190%) translateY(-30%) scale(0);
}
.google-map {
  height: 500px;
  margin: auto;
}
</style>

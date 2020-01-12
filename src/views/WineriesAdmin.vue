<template>
  <div class="container-fluid">
    <br />
    <br />
    <br />
    <button type="button" class="button btn-primary">
      <router-link style="color: white; text-decoration: none; " to="adminpage">Voltar</router-link>
    </button>
    <div class="container">
      <h1>GESTÃO DAS QUINTAS E ADEGAS</h1>
      <button type="button" class="button btn-primary" @click="orderByName()">A-Z</button>
      <table class="table">
        <thead>
          <tr>
            <th class="align-middle" scope="col">Nome</th>
            <th class="align-middle" scope="col">Rota</th>
            <th class="align-middle" scope="col">Classificação</th>
            <th class="align-middle" scope="col">Degostação</th>
            <th class="align-middle" scope="col">Almoço</th>
            <th class="align-middle" scope="col">Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="winerie in this.$store.state.wineries" v-bind:key="winerie">
            <td class="align-middle">{{ winerie.name }}</td>
            <td class="align-middle">{{ winerie.route }}</td>
            <td class="align-middle">{{ winerie.rate }}</td>
            <td class="align-middle">
              <span v-if="winerie.wine == true">SIM</span>
              <span v-else>NÃO</span>
            </td>
            <td class="align-middle">
              <span v-if="winerie.lunch == true">SIM</span>
              <span v-else>NÃO</span>
            </td>
            <td class="align-middle">
              <button @click="removeWineries(winerie.id)">Apagar Quinta/Adega</button>
            </td>
          </tr>
        </tbody>
      </table>
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
    <br />
  </div>
</template>
<script>
export default {
  methods: {
    created: function() {
      if (localStorage.getItem("wineries")) {
        this.$store.state.wineries = JSON.parse(
          localStorage.getItem("wineries")
        );
      }
    },
    removeWineries(id) {
      if (confirm("Deseja mesmo remover a Quinta/Adega?")) {
        this.$store.commit("REMOVE_WINERIES", {
          idWinerie: id
        });
      }
    },
    compareName(a, b) {
      if (a.name < b.name) return -1;
      if (a.name > b.name) return 1;
      else return 0;
    },
    orderByName() {
      this.$store.commit("ORDER_BY_NAME_WINERIES", {
        compare: this.compareName
      });
    }
  },
  saveStorage() {
    localStorage.setItem(
      "wineries",
      JSON.stringify(this.$store.state.wineries)
    );
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
}
.button:hover {
  background-color: black;
}
#backBtn {
  background-color: #555555;
}
</style>

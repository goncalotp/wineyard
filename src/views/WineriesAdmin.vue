<template>
  <div class="container-fluid">
    <br />
    <br />
    <br />
    <button type="button" class="btn btn-primary">
      <router-link to="adminpage">Voltar</router-link>
    </button>
    <div class="container">
      <h1>GESTÃO DAS QUINTAS E ADEGAS</h1>
      <button type="button" class="btn btn-primary" @click="orderByName()">A-Z</button>
      <table class="table">
        <thead>
          <tr>
            <th class="align-middle" scope="col">Nome</th>
            <th class="align-middle" scope="col">Rota</th>
            <th class="align-middle" scope="col">Classificação</th>
            <th class="align-middle" scope="col">Remover</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="winerie in this.$store.state.wineries" v-bind:key="winerie">
            <td class="align-middle">{{winerie.name}}</td>
            <td class="align-middle">{{winerie.route}}</td>
            <td class="align-middle">{{winerie.rate}}</td>
            <td class="align-middle">
                <button @click="removeWineries(winerie.id)">Apagar Quinta/Adega</button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    created: function() {
      if (localStorage.getItem("wineries")) {
        this.$store.state.wineries = JSON.parse(localStorage.getItem("wineries"));
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
            localStorage.setItem("wineries", JSON.stringify(this.$store.state.wineries))
            
        }
};
</script>
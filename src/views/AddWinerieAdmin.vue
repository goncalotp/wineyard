<template>
  <div class="container-fluid">
    <br />
    <br />
    <br />
    <button id="backBtn" type="button" class="button">
      <router-link style="color: white; text-decoration: none;" to="adminpage"
        >Voltar</router-link
      >
    </button>
    <div class="container">
      <h1>Adicionar Quinta e Adega</h1>
      <form v-on:submit.prevent="addWineries()">
        <div class="form-group">
          <label for="textWinerie">Nome da Quinta/Adega</label>
          <input
            type="text"
            class="form-control col-sm"
            id="textWinerie"
            v-model="nameForm"
            required
          />
        </div>
        <div class="form-group">
          <label for="sltRoute">Rota</label>
          <select
            class="form-control"
            id="sltRoute"
            v-model="routeForm"
            required
          >
            <option value="1">Rota 1-Baixo Corgo</option>
            <option value="2">Rota 2-Cima Corgo</option>
            <option value="3">Rota 3-Douro Superior</option>
          </select>
        </div>
        <div class="form-group">
          <label for="textLat">Latitude</label>
          <input
            type="number"
            class="form-control col-sm"
            id="textLat"
            step=".00001"
            v-model="latitudeForm"
            required
          />
        </div>
        <div class="form-group">
          <label for="textLon">Longitude</label>
          <input
            type="number"
            class="form-control col-sm"
            id="textLong"
            step=".00001"
            v-model="longForm"
            required
          />
        </div>
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkLuch"
            value="true"
            v-model="lunchForm"
          />
          <label class="form-check-label" for="checkLunch"
            >A Quinta/Adega possui serviço de Almoço</label
          >
        </div>
        <div class="form-group form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="checkWineTasting"
            value="true"
            v-model="wineForm"
          />
          <label class="form-check-label" for="checkWineTasting"
            >A Quinta/Adega possui degostação de Vinhos</label
          >
        </div>
        <div class="form-group">
          <label for="textDescription">Texto descritivo da Quinta/Adega</label>
          <textarea
            class="form-control"
            id="textDescription"
            rows="3"
            v-model="descriptionForm"
          ></textarea>
        </div>
        <div class="form-group">
          <label for="urlImage">Imagem da Quinta</label>
          <input
            type="url"
            class="form-control col-sm"
            id="urlImage"
            v-model="imgForm"
            required
          />
        </div>
        <div style="text-align:right" class="form-group">
          <button type="submit" class="button">
            Adicionar Quinta/Adega
          </button>
        </div>
      </form>
      <br /><br />
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    nameForm: "",
    routeForm: "",
    descriptionForm: "",
    wineForm: "",
    imgForm: "",
    lunchForm: "",
    latitudeForm: "",
    longForm: ""
  }),
  methods: {
    getLastId() {
      return this.$store.getters.lastId;
    },
    addWineries() {
      this.$store.commit("ADD_WINERIES_FORM", {
        idWinerie: this.getLastId() + 1,
        nameForm: this.nameForm,
        routeForm: this.routeForm,
        descriptionForm: this.descriptionForm,
        imgForm: this.imgForm,
        lunchForm: this.lunchForm,
        wineForm: this.wineForm,
        latitudeForm: this.latitudeForm,
        longForm: this.longForm
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
   background-color: 	#689666
}
#backBtn {
  background-color: #555555;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

<template>
  <div class="container">
    <br />
    <br />
    <br />
    <div v-for="winerie in this.$store.state.wineries" :key="winerie">
      <span v-if="winerie.id == getwinerieSelected()">
        <h1 style="text-align:center">{{ winerie.name }}</h1>
        <br /><br />
        <div class="container">
          <div class="row">
            <div class="col-sm-6">
              <h5>{{ winerie.description }}</h5>
              <br />
              <br />
              <h6>Mais informações:</h6>
              <div class="align-middle">
                🍷Degustação de vinhos:
                <span v-if="winerie.wine == true">✔️</span>
                <span v-else>❌</span>
              </div>
              <div class="align-middle">
                🍴 Servem almoço: <span v-if="winerie.lunch == true">✔️</span>
                <span v-else>❌</span>
              </div>
              <div class="align-middle">⭐Pontuação: {{ winerie.rate }}</div>
            </div>
            <div class="col-sm-6">
              <img v-bind:src="winerie.img" style="width:100%" />
            </div>
          </div>
        </div>
      </span>
    </div>
    <hr />

    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <h3>Comentários</h3>
          <form
            v-on:submit.prevent="addComment()"
            v-if="this.$store.state.loggedUser.length != 0"
          >
            <div class="form-group">
              <textarea
                class="form-group"
                style="resize: none; height: 100px; width: 500px"
                id="comment"
                rows="2"
                v-model="textComment"
              ></textarea>
              <div class="slidecontainer"></div>
            </div>
            <button type="submit">Comentar</button>
            <br />
            <br />
          </form>
          <div
            v-for="comment in this.$store.state.comments.slice().reverse()"
            v-bind:key="comment"
          >
            <span v-if="comment.idWinerie == getwinerieSelected()">
              <hr />
              <h5>{{ comment.name }}</h5>
              <div class="row">
                <p class="col-sm-10">{{ comment.comment }}</p>
                <!--  <button v-if="this.$store.state.loggedUser.length != 0 && getTypeUser()!= 1 " id="lixo">🗑️</button> -->
              </div>
              <small>{{ comment.date }} {{ comment.hour }}</small>
            </span>
          </div>
        </div>
        <div class="col-sm-6" style="text-align:center">
          <br />
          <div v-if="this.$store.state.loggedUser.length != 0">
            <div v-if="this.filterRatings.length == 0">
              <br>
              <b>1</b> &nbsp;
              <input
                type="range"
                min="1"
                max="5"
                value="3"
                class="slider"
                id="myRange"
                v-model="rating"
              />
              &nbsp;
              <b>5</b>
              <h5 id="ratingSliderRating">{{ rating }}</h5>
              <br />
              <button id="pontuarBtn" @click="vote()">Pontuar</button>
              <br />
            </div>
            <br />
            <div v-for="rate in filterRatings" :key="rate">
              <span>
                <button @click="changeRating(rate.id)">Alterar</button><br />
                <h4>Seu voto: {{ rate.rate }}⭐</h4>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <br /><br />
  </div>
</template>
<script>
export default {
  data: () => ({
    textComment: "",
    typeUser: "",
    rating: "",
    total: 0
  }),
  created: function() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("comments")) {
      this.$store.state.comments = JSON.parse(localStorage.getItem("comments"));
    }
    if (localStorage.getItem("wineries")) {
      this.$store.state.wineries = JSON.parse(localStorage.getItem("wineries"));
    }
    if (sessionStorage.getItem("winerieSelected")) {
      this.$store.state.winerieSelected = JSON.parse(
        sessionStorage.getItem("winerieSelected")
      );
    }
    if (localStorage.getItem("ratings")) {
      this.$store.state.ratings = JSON.parse(localStorage.getItem("ratings"));
    }
    /* window.addEventListener("onload", this.average()); */
  },
  methods: {
    getTypeUser() {
      return this.$store.getters.typeUser;
    },
    getLastId() {
      return this.$store.getters.lastIdComment;
    },
    getwinerieSelected() {
      return this.$store.getters.winerieSelect;
    },
    getLastIdRating() {
      return this.$store.getters.lastIdRating;
    },
    getEmail() {
      return this.$store.getters.email;
    },

    winerieName() {
      return this.$store.getters.winerieName;
    },
    addComment() {
      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      let hour = today.getHours();
      let minutes = today.getMinutes();
      this.$store.commit("ADD_COMMENT", {
        idComment: this.getLastId() + 1,
        idWinerieComment: this.getwinerieSelected(),
        emailComment: this.$store.getters.email,
        nameComment: this.$store.getters.name,
        textComment: this.textComment,
        dateComment: `${day}/${month}/${year}`,
        hourComment: `${hour}:${minutes}`,
        nameWineries: this.winerieName()
      });
      this.textComment = "";
    },
    vote() {
      this.$store.commit("RATING", {
        idRate: this.getLastIdRating() + 1,
        id: this.$store.state.winerieSelected,
        rating: this.rating,
        user: this.$store.getters.email
      });
      this.average();
    },
    changeRating(id) {
      this.$store.commit("REMOVE_RATING", {
        idRate: id
      });
      this.average();
    },
    average() {
      let total = 0;
      for (const rate of this.filterWineries) {
        total += Number(rate.rate);
      }
      let average = total / this.filterWineries.length;
      this.$store.commit("CHANGE_RATE", {
        newRate: average
      });
    }
  },
  computed: {
    //Filtrar pelo o id da quinta aberta e pelo o user logado
    filterRatings() {
      return this.$store.state.ratings.filter(
        rating =>
          rating.idWinerie == this.$store.state.winerieSelected &&
          rating.userRate == this.getEmail()
      );
    },
    //Filtrar só o id da quinta nos ratings
    filterWineries() {
      return this.$store.state.ratings.filter(
        rating => rating.idWinerie == this.$store.state.winerieSelected
      );
    }
  }
};
</script>
<style>
#pontuarBtn {
  width: 50%;
  text-align: center;
}

#ratingSliderRating{
  font-size: 50px
}
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 50%;
  height: 10px;
  border-radius: 5px;
  background: #444444;
  outline: none;
  opacity: 0.7;
  -webkit-transition: 0.2s;
  transition: opacity 0.2s;
}

.slider:hover {
  opacity: 1;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 33px;
  border: 0;
  background: url("../assets/logorating.png");
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 20px;
  height: 21px;
  border: 0;
  background: url("../assets/circuloverde1.png");
  cursor: pointer;
}

b {
  font-family: "Cinzel", serif;
}

button {
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

button:hover {
  background-color: #689666;
}

h1 {
  font-family: "Cinzel", serif;
}

h5,
h3,
span {
  font-family: "Didact Gothic", sans-serif;
}
#lixo {
  background: none;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

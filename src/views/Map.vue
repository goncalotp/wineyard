<template>
  <div class="container">
    <br />
    <br />
    <br />
    <h1>Titulo</h1>
    <h5>Descrição</h5>
    <hr />
    <div class="container col-sm-12">
      <b>1</b> &nbsp;
      <input
        type="range"
        min="1"
        max="5"
        value="0"
        class="slider"
        id="myRange"
        v-model="rating"
      />
      &nbsp; <b>5</b> <button id="btnPoints">Pontuar</button>
      <p>Value:{{ rating }} <span id="demo"></span></p>
      <h3>Comentários</h3>
      <form
        v-on:submit.prevent="addComment()"
        v-if="this.$store.state.loggedUser.length != 0"
      >
        <div class="form-group">
          <span></span>
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
        <!-- <span v-if='idWinerie == this.$store.state.winerieSelected'></span> -->
        <hr />
        <h5>{{ comment.name }}</h5>
        <div class="row">
          <p class="col-sm-10">{{ comment.comment }}</p>
          <button id="lixo">🗑️</button>
        </div>
        <small>{{ comment.date }} {{ comment.hour }}</small>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => ({
    textComment: "",
    typeUser: "",
    rating: ""
  }),
  created: function() {
    window.addEventListener("unload", this.saveStorage);
    if (localStorage.getItem("comments")) {
      this.$store.state.comments = JSON.parse(localStorage.getItem("comments"));
    }
  },
  computed: {
    getTypeUser() {
      return this.$store.getters.typeUser;
    }
  },
  methods: {
    getLastId() {
      return this.$store.getters.lastIdComment;
    },
    addComment() {
      let today = new Date();
      let day = today.getDate();
      let month = today.getMonth() + 1;
      let year = today.getFullYear();
      let hour = today.getHours();
      let minutes = today.getMinutes();
      alert();
      this.$store.commit("ADD_COMMENT", {
        idComment: this.getLastId() + 1,
        idWinerieComment: 1,
        emailComment: this.$store.getters.email,
        nameComment: this.$store.getters.name,
        textComment: this.textComment,
        dateComment: `${day}/${month}/${year}`,
        hourComment: `${hour}:${minutes}`,
        nameWineries: this.$store.getters.winerieName
      });
      this.textComment = "";
    }
  }
};
</script>
<style>
.slidecontainer {
  width: 100%;
}

.slider {
  -webkit-appearance: none;
  width: 20%;
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

h1 {
  font-family: "Cinzel", serif;
}

h5,
h3 {
  font-family: "Didact Gothic", sans-serif;
}
#lixo {
  background: none;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

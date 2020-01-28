<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 style="text-align:center" class="card-title">
        Comentários recentes <img src="../assets/logo.png" style="width: 15%" />
      </h5>

      <hr />
      <div v-for="comment in this.$store.state.comments.slice().reverse()" v-bind:key="comment">
        <img
          src="../assets/casinha.png"
          style="width:10%; padding-bottom: 0.5em "
        />
        &nbsp; <b></b
        ><label id="nomeQuinta" class="align-middle">{{
          comment.nameWinerie
        }}</label>
        <br />
        <label class="align-middle">{{ comment.comment }}</label>
        <hr />
        <br />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Toppage",
  props: {
    msg: String
  },
  created: function() {
    if (localStorage.getItem("comments")) {
      this.$store.state.comments = JSON.parse(localStorage.getItem("comments"));
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h5 {
  font-family: "Didact Gothic", sans-serif;
}

#nomeQuinta {
  font-family: "Cinzel", serif;
}
@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

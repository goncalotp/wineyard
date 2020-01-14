<template>
  <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 style="text-align:center" class="card-title">
        Comentários recentes <img src="../assets/logo.png" style="width: 15%" />
      </h5>  
     

      <hr />
      <div v-for="comment in this.$store.state.comments" v-bind:key="comment">
        <label class="align-middle">{{ comment.comment }}</label>
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
<style scoped></style>

<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />

      <h1 style="text-align:center">Perfil</h1>
      <div class="row">
        <div class="row justify-content-center">
          <div class="grid-item">
            <div class="card-wrapper">
              <!--Front Side-->
              <div class="face front">
                <!-- Image-->
                <div class="view overlay" style="text-align:center">
                  <img
                    class="card-img-top"
                    src="../assets/user.png"
                    alt="Example photo"
                    style="width:150px; "
                  />
                </div>
                <!--Content-->
                <div class="card-body" style="text-align:left">
                  <h4 class="">
                    <router-link
                      style="color: black; text-decoration: none;"
                      to="/"
                      >{{ name() }}</router-link
                    >
                  </h4>
                  <p class="card-text">
                    <router-link
                      style="color: black; text-decoration: none;"
                      to="/"
                      >{{ email() }}</router-link
                    >
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="grid-item col-sm-10">
          <br /><br />
          <table class="table">
            <thead>
              <tr>
                <th class="align-middle" scope="col">Quinta</th>
                <th class="align-middle" scope="col">Comentário</th>
                <th class="align-middle" scope="col">Data</th>
                <th class="align-middle" scope="col">Remover</th>
              </tr>
            </thead>
            <tbody>
              <tr
                v-for="comment in this.$store.state.comments"
                v-bind:key="comment"
              >
                <td v-if="email() == comment.email" class="align-middle">
                  {{ comment.nameWinerie }}
                </td>
                <td v-if="email() == comment.email" class="align-middle">
                  {{ comment.comment }}
                </td>
                <td v-if="email() == comment.email" class="align-middle">
                  {{ comment.date }}
                </td>
                <td v-if="email() == comment.email" class="align-middle">
                  <button id="lixo" @click="removeComment(comment.id)">
                    🗑️
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
  </div>
</template>

<script>
export default {
  name: "",
  props: {},
  created: function() {
    if (localStorage.getItem("loggedUser")) {
      this.$store.state.loggedUser = JSON.parse(
        localStorage.getItem("loggedUser")
      );
    }
    if (localStorage.getItem("comments")) {
      this.$store.state.comments = JSON.parse(localStorage.getItem("comments"));
    }
  },
  computed: {},
  methods: {
    removeComment(id) {
      if (confirm("Deseja mesmo remover o comentário?")) {
        this.$store.commit("REMOVE_COMMENT", {
          id: id
        });
      }
    },
    name() {
      return this.$store.getters.name;
    },

    email() {
      return this.$store.getters.email;
    }
  }
};
</script>

<style scoped>
h1 {
  font-family: "Cinzel", serif;
}

#lixo {
  background: none;
  border: none;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />
      <h1 style="text-align:center">Gestão</h1>
      <br />
      <div class="card sm-6" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="../assets/user.png" class="card-img" alt />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">UTILIZADORES</h5>
              <p class="card-text">
                Pode ver os utilizadores que estão registados no site
              </p>
              <button type="button" class="button btn btn-primary">
                <router-link
                  to="usersadmin"
                  style="color: white; text-decoration: none;"
                  >Ver Mais</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card sm-" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img
              src="../assets/logo.png"
              style="width:90%"
              class="card-img"
              alt
            />
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <h5 class="card-title">ADEGAS E QUINTAS</h5>
              <p class="card-text">
                Visualizar todas as quintas existentes no site e edita-las
              </p>
              <button type="button" class="button btn btn-primary">
                <router-link
                  style="color: white; text-decoration: none;"
                  to="/wineriesadmin"
                  >Ver Mais</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card sm-" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src="../assets/logoplus.png" class="card-img" alt />
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <h5 class="card-title">ADICIONAR QUINTA E ADEGA</h5>
              <p class="card-text"></p>
              <button type="button" class="button btn btn-primary">
                <router-link
                  style="color: white; text-decoration: none;"
                  to="addwinerieadmin"
                  >Ver Mais</router-link
                >
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.card {
  margin: 0 auto; /* Added */
  float: none; /* Added */
  margin-bottom: 10px; /* Added */
}

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
  background-color: #689666;
}

h1 {
  font-family: "Cinzel", serif;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

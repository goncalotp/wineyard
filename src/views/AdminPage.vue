<template>
  <div>
    <div class="container">
      <br />
      <br />
      <br />
      <div class="card sm-6" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src class="card-img" alt />
          </div>
          <div class="col-md-8">
            <div class="card-body">
              <h5 class="card-title">UTILIZADORES</h5>
              <p class="card-text">Pode ver os utilizadores que estão registados no site</p>
              <button type="button" class="btn btn-primary">
                <router-link to="usersadmin">Ver Mais</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card sm-" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src class="card-img" alt />
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <h5 class="card-title">ADEGAS E QUINTAS</h5>
              <p class="card-text">Visualizar todas as quintas existentes no site e edita-las</p>
              <button type="button" class="btn btn-primary">
                <router-link to="/wineriesadmin">Ver Mais</router-link>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="card sm-" style="max-width: 540px;">
        <div class="row no-gutters">
          <div class="col-md-4">
            <img src class="card-img" alt />
          </div>
          <div class="col-sm-8">
            <div class="card-body">
              <h5 class="card-title">ALGO</h5>
              <p class="card-text">Opá já nao me lembro o que era neste card</p>
              <button type="button" class="btn btn-primary">
                <router-link to="addwinerieadmin">Ver Mais</router-link>
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
</style>
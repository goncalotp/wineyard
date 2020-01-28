<template>
  <!-- Footer -->
  <footer class="page-footer font-small mdb-color lighten-3 ">
    <!-- Footer Links -->
    <div class="container text-center text-md-left">
      <!-- Grid row -->
      <div class="row">
        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 mr-auto my-md-4 my-0 mt-4 mb-1">
          <!-- Content -->
          <h5 class="font-weight-bold text-uppercase mb-4">Wineyard</h5>
          <p>
            Aplicação desenvolvida para a unidade curricular de Programação Web
            1.
          </p>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 mx-auto my-md-4 my-0 mt-4 mb-1">
          <!-- Links -->
          <h5 class="font-weight-bold text-uppercase mb-4">Sobre</h5>

          <ul class="list-unstyled">
            <li>
              <a href="#!"> <router-link to="/myroutes">Minhas Rotas</router-link></a>
            </li>
            <li>
              <a href="#!"> <router-link to="/about">Contactos</router-link></a>
            </li>
            <li>
              <a href="#!"><router-link to="/map">Mapa</router-link></a>
            </li>
            <li>
              <a href="#!"> <router-link to="/login">Login</router-link></a>
            </li>
          </ul>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <div class="col-md-4 col-lg-3 mx-auto my-md-4 my-0 mt-4 mb-1">
          <!-- Contact details -->
          <h5 class="font-weight-bold text-uppercase mb-4">Contactos</h5>

          <ul class="list-unstyled">
            <li>
              <i class="fas fa-home mr-3">
                Escola Superior Media Artes e Design</i
              >
            </li>
            <li>
              <i class="fas fa-envelope mr-3"> wineyardgrupo@gmail.com</i>
            </li>
            <li>
              <i class="fas fa-phone mr-3"> + 351 931 343 123</i>
            </li>
          </ul>
        </div>
        <!-- Grid column -->

        <hr class="clearfix w-100 d-md-none" />

        <!-- Grid column -->
        <div class="col-md-2 col-lg-2 text-center mx-auto my-4">
          <img style="width: 70%" src="../assets/logo.png" />
        </div>
        <!-- Grid column -->
      </div>
      <!-- Grid row -->
    </div>
    <!-- Footer Links -->
  </footer>
  <!-- Footer -->
</template>

<script>
export default {
  name: "Footer"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
footer {
  background-color: rgb(49, 49, 49);
 

}

h5,
i {
  color: white;
  font-family: "Didact Gothic", sans-serif;
}

p{
 color: white;
  font-family: "Didact Gothic", sans-serif;
}

a,i{
  font-size: 14px;
  color:white;
  font-family: "Didact Gothic", sans-serif;
}


@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

<template>
  <div>

    <div class="container">
      <div class="row">
        <div class="col-sm">
          <div class="col-lg-12">
            <div class="card-body" style="max-height: 350px">
              <h5 style="text-align:center" class="card-title"> Rota 1 <img src="../assets/circuloverde1.png"> Baixo
                Corgo </h5>
              <br>
              Armamar <br> Galafura<br>Lamego<br>Mesão Frio<br>Peso da Régua - Poirares<br>Peso da Régua - Vilarinho de
              Freires<br>Pinhão<br>Sabrosa<br>Santa Marta de Penaguião<br>Vila Real
              <br>
              <img width="100%" src="../assets/rota1.jpg">
              <button class="col-sm" id="seeWineries" @click="addWineries"><router-link to="/wineriesdescription">VER QUINTAS</router-link></button>
            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-lg-12">
            <div class="card-body" style="max-height: 350px">
              <h5 style="text-align:center" class="card-title"> Rota 2 <img src="../assets/circuloroxo1.png"> Alto Corgo
              </h5>
              <br>
              Alijó <br> Favaios<br>Murça<br>Pinhão<br>São João da Pesqueira<br>Tabuaço
              <br>

              <img style="text-align:center" width="75%" src="../assets/rota 2.jpg">
              <button  class="col-sm" id="seeWineries" @click="addWineries">VER QUINTAS</button>

            </div>
          </div>
        </div>
        <div class="col-sm">
          <div class="col-lg-12">
            <div class="card-body" style="max-height: 350px">
              <h5 style="text-align:center" class="card-title"> Rota 3 <img src="../assets/circulovermelho1.png"> À
                descoberta do Douro Superior </h5>
              <br>
              Figueira de Castelo Rodrigo<br> Freixo de Espada à Cinta<br>Pinhão<br>Torre de Moncorvo<br>Vila
              Flor<br>Vila Nova de Foz Côa<br>Carrazeda de Ansiães<br>Mêda
              <br>
              <img style="text-align:center" width="75%" src="../assets/rota3.jpg">
              <button  class="col-sm" id="seeWineries" @click="addWineries">VER QUINTAS</button>
            </div>
          </div>
        </div>
      </div>
    </div>



  </div>
</template>
<script>
  export default {
    methods: {
      addWineries() {
        this.$store.commit('ADD_WINERIES')
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#seeWineries{
  align-self: center;
  border-radius: 50px;
  background-color: white;
  color: black;
}

</style>
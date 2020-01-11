<template>
  <div>
    <router-view></router-view>

    <br />
    <br />
    <br />
    <br />
    <br />
    <div class="container"><h1 align="center">Quem somos</h1></div>
    <br />
  
    <div class="container" align="center">
      <div class="row">
        <div class="col-sm-4">
          <div class="card" style="width: 15rem;">
            <img src="../assets/chico.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"><b>Francisco Fernandes</b></h5>
              <p class="card-text">Web Developer</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card" style="width: 15rem;">
            <img src="../assets/goncalo.png" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"><b>Gonçalo Perdigão</b></h5>
              <p class="card-text">Web Developer</p>
            </div>
          </div>
        </div>

        <div class="col-sm-4">
          <div class="card" style="width: 15rem;">
            <img src="../assets/rui.jpg" class="card-img-top" alt="..." />
            <div class="card-body">
              <h5 class="card-title"><b>Rui Costa e Silva</b></h5>
              <p class="card-text">Web Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <br />
    <br />

    <p align="center">
      Somos alunos da licenciatura de Tecnologias e Sistemas de Informação para
      a Web e foi-nos proposto a realização de uma aplicação sobre rota de
      vinhos.
    </p>

    <p align="center">
      O nosso objetivo é facilitar a procura de rotas , quintas ou pontos
      turísticos a todas as pessoas que os pretendam visitar.
    </p>

    <br /><br /><br /><br />
  </div>
</template>

<style scoped>
.column {
  float: left;
  width: 50%;
}


p {
  font-family: "Didact Gothic", sans-serif;
}

h1 {
  font-family: "Cinzel", serif;
}
h5 {
  font-family: "Cinzel", serif;
}
.center {
  display: block;
  margin-left: auto;
  margin-right: auto;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

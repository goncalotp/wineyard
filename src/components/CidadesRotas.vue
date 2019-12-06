<template>
<div>
<table >
   <tr>
    <td >
      <div class="card" >
        <div class="card-body"  >
          <h5 class="card-title"><img  src="../assets/circuloverde1.png"> Cidades  </h5>
              Armamar <br> Galafura<br>Lamego<br>Mesão Frio<br>Peso da Régua - Poirares<br>Peso da Régua - Vilarinho de Freires<br>Pinhão<br>Sabrosa<br>Santa Marta de Penaguião<br>Vila Real
        </div>
      </div>
    </td>
  </tr>
<tr>
    <td >
      <div class="card" >
        <div class="card-body" style="max-height: 350px" >
          <h5 class="card-title"><img  src="../assets/circuloroxo1.png"> Cidades  </h5>
            Alijó <br> Favaios<br>Murça<br>Pinhão<br>São João da Pesqueira<br>Tabuaço
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td > 
    <div class="card" >
      <div class="card-body" style="max-height: 350px" >
        <h5 class="card-title"><img  src="../assets/circulovermelho1.png"> Cidades  </h5>
        Figueira de Castelo Rodrigo<br> Freixo de Espada à Cinta<br>Pinhão<br>Torre de Moncorvo<br>Vila Flor<br>Vila Nova de Foz Côa<br>Carrazeda de Ansiães<br>Mêda
      </div>
    </div>
    </td>
  </tr>
</table>
</div>



</template>

<script>


export default {
  name: "Toppage",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.card {
  border: none;
}

td {
  height: 9cm
}
</style>

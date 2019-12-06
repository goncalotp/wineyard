<template>
<div>
<table>
 <tr > 
    <td>
      <div class="card" >
        <div class="card-body" style="max-height: 350px">
          <h5 style="text-align:center" class="card-title"> Rota 1 <img  src="../assets/circuloverde1.png"> Baixo Corgo </h5> 
          <br>
            <span>
              <img width="100%" src="../assets/rota1.jpg"> 
            </span>
   
        </div>
      </div>
  </td>
</tr>
  <tr>
    <td >
      <div class="card" >
        <div class="card-body" style="max-height: 350px">
           <h5 style="text-align:center" class="card-title"> Rota 2 <img  src="../assets/circuloroxo1.png"> Alto Corgo </h5> 
          <br>
          <span>
            <img style="text-align:center" width="75%" src="../assets/rota 2.jpg"> 
          </span>
        </div>
      </div>
    </td>
  </tr>
  <tr>
    <td >
      <div class="card" >
        <div class="card-body" style="max-height: 350px">
          <h5 style="text-align:center" class="card-title"> Rota 3 <img  src="../assets/circulovermelho1.png"> À descoberta do Douro Superior </h5> 
          <br>
          <span>
            <img style="text-align:center" width="75%" src="../assets/rota3.jpg"> 
          </span>
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
  height: 3cm
}
</style>

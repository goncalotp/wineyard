<template>
  <nav class="navbar navbar-expand-lg  ">
  <a href="" class="navbar-left"><router-link to="/home"></router-link><img style="width:30px" src="../assets/logo.png"></a>
  <a class="navbar-brand" href="#">Wineyard</a>


  
    <ul class="navbar-nav ml-auto">
     <div class="row">
        <div class="col-12">
            <div class="input-group">
                <input id="searchBar" class="form-control border-secondary" type="search" placeholder="procurar">
                <div  class="input-group-append">
                    <button id="fafaSearch" type="button">
                        <i class="glyphicon glyphicon-search form-control-feedback"></i>
                    </button>
                </div>
            </div>
        </div>
    </div>
      <li class="nav-item">
        <a id="items" class="nav-link" href="#">Minhas Rotas </a>
      </li>
      <li class="nav-item">
        <a  id="items" class="nav-link" href="#">Mapa</a>
      </li>
       <li class="nav-item">
        <a id="items"  class="nav-link" href="#">Contactos</a>
      </li>
       <li class="nav-item">
        <a  id="items" class="nav-link" href="#"><router-link to="/login">Login</router-link></a>
      </li>
     </ul>
<div >
  <select>
    <option value="0">PT</option>
    <option value="1">ENG</option>
  </select>
</div>
   
</nav>


 
 

 
  
</template>

<script>


export default {
  name: "Navbar",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>



 #searchBar {
   border-radius: 50px;
   background: rgb(67, 53, 92);
   color: white;
 }


 #fafaSearch {
   border: none;
   background: none;
 }

 .navbar {
  overflow: hidden;
  
  background-color: rgb(67, 53, 92);
  position: fixed;
  top: 0; 
  width: 100%;
  
  
}

.navbar, a {
  color: white;
   opacity: 0.9
}

.nav-link {
  color: white;
}




</style>

<template>
  <nav class="navbar navbar-expand-lg navbar-light ">
  <a href="#" class="navbar-left"><img style="width:30px" src="../assets/logo.png"></a>
  <a class="navbar-brand" href="#">Wineyard</a>


  
    <ul class="navbar-nav ml-auto">
     <div class="row">
        <div class="col-12">
            <div class="input-group">
                <input id="searchBar" class="form-control border-secondary" type="search" placeholder="procurar">
                <div  class="input-group-append">
                    <button id="fafaSearch" type="button">
                        <i class="fa fa-search"></i>
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
        <a  id="items" class="nav-link" href="#">Login</a>
      </li>
     </ul>
</nav>
      <!-- <li class="nav-item">
        <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li> -->
    
    <!-- <form class="form-inline my-2 my-lg-0">
      <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
      <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form> -->
 

 
  
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


#items{
  color: grey
}

 #searchBar {
   border-radius: 25px;
 }


 #fafaSearch {
   border: none;
   background: none;
 }

 .navbar {
  overflow: hidden;
  background-color: white;
  position: fixed;
  top: 0; 
  width: 100%;
}

</style>

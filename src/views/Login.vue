<template>
  <div>
    
    <br>
    <br>
    <br>
    <br>
   
    <router-view></router-view>
    
  
    <div id="fromLogin">
      
        <div class="row">
       <div class="col-sm-6" style="text-align:center">
            <img style="width:50%"  src="../assets/vineyardgif.gif">
       </div>
       
        <div class="col-sm-4">
           <br>
           <br>
           <br>
           <br>
           <br>
            <h1>Login</h1>
            <br>
        <form>
            <div class="form-group">
                <label for="exampleInputEmail1">Email:</label>
                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"
                    placeholder="Enter email" required v-model="emailLogin">
                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                    else.</small>
            </div>
            <div class="form-group">
                <label for="exampleInputPassword1">Password:</label>
                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
            </div>
            <button type="button"><router-link to="/register">Registar</router-link></button>
            <button type="submit">Iniciar Sessão</button>
        </form>
        </div>
        </div>
    </div>
  </div>
</template>
<script>


</script>


<style>
 button {
      border: none;
      background: none;
      color: rgb(67, 53, 92);  
  }

</style>
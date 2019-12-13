<template>
<div>
 <br>
 <br>
 <br>
 <br>
  <div id="fromLogin">
     <router-view></router-view>
        <div class="row">
       <div class="col-sm-6" style="text-align:center">
            <img style="width:50%"  src="../assets/vineyardgif.gif">
       </div>
        <div class="col-sm-4">
         <br>
         <br>
         <br>
            <h1> Registar</h1>
            <form v-on:submit.prevent="addUser()">
                <div class="form-group">
                    <label for="registerName">Nome:</label>
                    <input type="text" class="form-control" id="registerName" placeholder="Insira o seu nome" required
                        v-model="name">
                </div>
                <div class="form-group">
                    <label for="registerEmail">E-mail:</label>
                    <input type="email" class="form-control" id="registerEmail" aria-describedby="emailHelp"
                        placeholder="Enter email" required v-model="email">
                    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone
                        else.</small>
                </div>
                <div class="form-group">
                    <label for="registerPass">Password:</label>
                    <input type="password" class="form-control" id="registerPass" placeholder="Password" required
                        v-model="password">
                </div>
                <div class="form-group">
                    <label for="registerConfPass">Confirmar Password:</label>
                    <input type="password" class="form-control" id="registerConfPass"
                        placeholder="Confirme sua Password" required v-model="confPassword">
                </div>
                <button type="submit" class="btn btn-primary  float-right">Criar Conta</button>
                <button type="button" class="btn btn-link float-right">
                    <router-link to="/login">Login</router-link>
                </button>
            </form>
        
        </div>
        </div>
    </div>
  </div>
</template>
<script>



</script>
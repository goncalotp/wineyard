<template>
    <div id="fromLogin">
       
        <div class="container col-sm-4">
            <h1>Login</h1>
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
            <button type="button" class="btn btn-link"><router-link to="/register">Registar</router-link></button>
            <button type="submit" class="btn btn-primary">Iniciar Sessão</button>
        </form>
        </div>
    </div>
</template>

<script>
export default {
  name: "LoginModal",

};
</script>
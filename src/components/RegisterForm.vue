<template>
    <div id="fromrRegister">

        <div class="container col-sm-4">
            <h1> <img src="../assets/circuloverde1.png"> Conta</h1>
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
</template>

<script>
    export default {
        name: "RegisterForm",
        data: () => ({
            id: 0,
            name: "",
            email: "",
            password: "",
            confPassword: "",
            users: []
        }),
        created: function () {
            window.addEventListener('unload', this.saveStorage)
            if (localStorage.getItem("users")) {
                this.users = JSON.parse(localStorage.getItem("users"))
            }
        },
        methods: {
            getLastId() {
                if (this.users.length) {
                    return this.users[this.users.length - 1].id
                } else {
                    return 0
                }

            },
            addUser() {
                if (!this.users.some(
                        user => user.email === this.email
                    )) {
                    if (this.password === this.confPassword) {
                        this.users.push({
                            id: this.getLastId() + 1,
                            name: this.name,
                            email: this.email,
                            password: this.password
                        })
                    } else {
                        alert("PASSWORDS DIFERENTES")
                    }
                } else {
                    alert("E-MAIL JÁ EXISTENTE")
                }
            },
            saveStorage() {
                localStorage.setItem("users", JSON.stringify(this.users))
            }

        }
    };
</script>
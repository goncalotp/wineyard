<template>
    <div>
        <br><br>
        <h2>ROTA 1 - Quintas</h2> <hr>
        <div v-for="winerie in this.$store.state.wineries" v-bind:key=winerie>
            <span v-if="winerie.route == 1">
            <h3>{{winerie.name}}</h3>
            <p>{{winerie.description}}</p>
            <hr>
            </span>
        </div>
    </div>
</template>

<script>
    export default {
        created: function () {
            window.addEventListener('unload', this.saveStorage)
        },
        saveStorage() {
           localStorage.setItem("wineries", JSON.stringify(this.$store.state.wineries))
        }
    }
</script>
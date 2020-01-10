import Vue from "vue";
import Vuex from "vuex";

const Swal = require("sweetalert2");

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    users: [
      {
        name: "admin",
        email: "admin@admin.admin",
        password: "123",
        type: 0
      }
    ],
    x: 0,
    loggedUser: [],
    existUser: false,
    wineries: [
      {
        id: 1,
        route: 1,
        name: "QUINTA XPTO",
        description: "VINHO VERDE E BRANCO",
        rate: 0
      },
      {
        id: 2,
        route: 2,
        name: "QUINTA ALEGRE",
        description: "VINHO TINTO E MADURO",
        rate: 0
      }
    ]
  },
  getters: {
    name(state) {
      return state.loggedUser[0].name;
    },
    typeUser(state) {
      return state.loggedUser[0].type;
    }
  },
  mutations: {
    ADD_USER(state, payload) {
      if (!state.users.some(user => user.email === payload.email)) {
        if (payload.password != payload.confPassword) {
          alert("PASSWORDS DIFERENTES");
        } else {
          state.users.push({
            name: payload.name,
            email: payload.email,
            password: payload.password,
            type: 1
          });
          state.loggedUser.push({
            name: payload.name,
            email: payload.email,
            password: payload.password,
            type: 1
          });

          localStorage.setItem("users", JSON.stringify(this.state.users));
          localStorage.setItem(
            "loggedUser",
            JSON.stringify(this.state.loggedUser)
          );
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Conta registada," + " " + "bem-vindo" + " " + payload.name,
            showConfirmButton: false,
            timer: 1500
          });
        }
      } else {
        Swal.fire({
          position: "center",
          icon: "info",
          title: "Conta já existente",
          showConfirmButton: false,
          timer: 1500
        });
      }
    },
    LOGIN(state, payload) {
      for (const user of state.users) {
        if (
          user.email === payload.emailLogin &&
          user.password === payload.passwordLogin
        ) {
          state.loggedUser.push({
            name: user.name,
            email: payload.emailLogin,
            password: payload.passwordLogin,
            type: user.type
          }),
            localStorage.setItem(
              "loggedUser",
              JSON.stringify(this.state.loggedUser)
            );
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Bem-vindo" + " " + user.name,
            showConfirmButton: false,
            timer: 1500
          });
          state.existUser = true;
        }
      }
      if (state.existUser === false) {
        alert("Credenciais Inválidas");
      } else {
        state.existUser = false;
      }
    },
    LOGOUT(state) {
      state.loggedUser.pop();
      localStorage.removeItem(
        "loggedUser",
        JSON.stringify(this.state.loggedUser)
      );
    },
    ADD_WINERIES() {
      localStorage.setItem("wineries", JSON.stringify(this.state.wineries));
    },
    ////////////////////////////STORE////////////////////////////////
    CHANGE_TYPE_USER(state, payload) {
      for (const user of state.users) {
        if (user.email === payload.mail) {
          if (user.type == 0) {
            user.type = 1;
            alert("aqui");
          } else {
            user.type = 0;
            alert("aqui1");
          }
        }
      }
      localStorage.setItem("users", JSON.stringify(this.state.users));
    },
    REMOVE_USER(state, payload) {
      state.users = state.users.filter(user => user.email !== payload.email);
      localStorage.setItem("users", JSON.stringify(this.state.users));
    },
    ORDER_BY_NAME(state, payload) {
      state.users.sort(payload.compare);
    },
    ORDER_BY_NAME_WINERIES(state, payload) {
      state.wineries.sort(payload.compare);
    },
    REMOVE_WINERIES(state, payload) {
      state.wineries = state.wineries.filter(
        winerie => winerie.id !== payload.idWinerie
      );
      localStorage.setItem("wineries", JSON.stringify(this.state.wineries));
    },
    ADD_WINERIES_FORM(state, payload) {
      for (const winerie of state.wineries) {
        if (
          winerie.latitude == payload.latitudeForm &&
          winerie.long == payload.longForm
        ) {
          state.existWineries = true;
        }
      }
      if (state.existWineries == false) {
        state.wineries.push({
          id: payload.idWinerie,
          name: payload.nameForm,
          route: payload.routeForm,
          description: payload.descriptionForm,
          img: payload.imgForm,
          rate: 0,
          lunch: payload.lunchForm,
          wine: payload.wineForm,
          latitude: payload.latitudeForm,
          long: payload.longForm
        });
        localStorage.setItem("wineries", JSON.stringify(this.state.wineries));
      } else {
        alert("Já existe quinta/adega com as mesmas cordenadas");
      }
    }
  },
  actions: {},
  modules: {}
});

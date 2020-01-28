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
        name: "Quinta da Casa Amarela",
        description:
          "Quinta situada na margem esquerda do rio Douro, pertencendo à mesma família desde 1885.",
        lunch: true,
        wine: true,
        long: -7.81458,
        lat: 41.14053,
        rate: 0,
        img: "https://lifecooler.com/files/registos/imagens/334756/161142.jpg"
      },
      {
        id: 2,
        route: 1,
        name: "Quinta da Gaivosa",
        description:
          "As vinhas, localizadas na margem direita do rio Corgo, têm mais de 60 anos. Possui uma adega nas suas instalações.",
        lunch: false,
        wine: false,
        long: -7.76359,
        lat: 41.23266,
        rate: 0,
        img:
          "https://www.portugalbywine.com/media//MULTIMEDIA/FOTOS/1162/15822197975658p.JPG"
      },
      {
        id: 3,
        route: 1,
        name: "Quinta da Pacheca",
        description:
          "A primeira referência a esta quinta data de 1738, embora a produção vitivinícola só tenha começado a ser fomentada com José Freire de Serpa Pimentel, em 1903. Em 2006, venceu o prémio nacional Best of Wine Tourism na categoria 'Experiências Inovadoras de Enoturismo', atribuído pela rede Great Wine Capitals.",
        lunch: true,
        wine: true,
        long: -7.79614,
        lat: 41.15483,
        rate: 0,
        img:
          "https://ucarecdn.com/c5ce02f1-ddc1-494f-8963-a0ff11e92da4/-/format/auto/-/preview/3000x3000/-/quality/lighter/"
      },
      {
        id: 4,
        route: 1,
        name: "Quinta de Marrocos",
        description:
          "A Quinta de Marrocos encontra-se na mesma família há quatro gerações. Mantém técnicas de produção tradicionais, como a pisa das uvas, que é feita em lagares de granito.",
        lunch: false,
        wine: true, // prova de vinho : sim
        long: -7.75942,
        lat: 41.15049,
        rate: 0,
        img:
          "https://guiastecnicos.turismodeportugal.pt/img/enoturismos/16_porto_e_douro_quinta_de_marrocos/l/quinta_marrocos3.jpg"
      },
      {
        id: 5,
        route: 1,
        name: "Quinta de Santa Eufémia",
        description:
          "Foi fundada em 1864 por Bernardo Rodrigues de Carvalho, mantendo-se na quarta geração da família. Nela podemos encontrar o marco pombalino número 27, o último da primeira demarcação.",
        lunch: false,
        wine: true,
        long: -7.74342,
        lat: 41.13726,
        rate: 0,
        img:
          "https://iportwine.com/wp-content/uploads/2019/02/santa-eufemia-port-wine-house.jpg"
      },
      {
        id: 6,
        route: 1,
        name: "Quinta de São Domingos",
        description:
          "Situada próxima da cidade do Peso da Régua, a Quinta de São Domingos mantém ainda um aspecto puro e distante da evolução e urbanização.",
        lunch: true,
        wine: true,
        long: -7.77911,
        lat: 41.15764,
        rate: 0,
        img:
          "https://r-cf.bstatic.com/images/hotel/max1024x768/732/73214378.jpg"
      },
      {
        id: 7,
        route: 1,
        name: "Quinta do Vallado",
        description:
          "As origens da quinta que pertenceu a Antónia Adelaide Ferreira remontam ao início do século XVIII, mantendo-se ainda na posse da família Ferreira. Além de uma vasta vinha que ocupa ambas as margens do Corgo, perto do local onde este se funde com o Douro, possui ainda um alojamento de turismo rural com várias comodidades. Destaque para o facto de ter recebido o prémio 'Best of Wine Tourism 2013', na categoria 'Arquitetura e Paisagens'",
        lunch: true,
        wine: true,
        long: -7.76617,
        lat: 41.16236,
        rate: 0,
        img:
          "https://q-cf.bstatic.com/images/hotel/max1024x768/135/135139037.jpg"
      },
      {
        id: 8,
        route: 1,
        name: "Quinta Seara D'Ordens",
        description:
          "As origens da quinta remontam ao século XVIII, quando a família Leite adquiriu um terreno perto da Seara de Poiares. Neste local são cultivadas vinhas, oliveiras e amendoeiras.",
        lunch: false,
        wine: true,
        long: -7.72667,
        lat: 41.1875,
        rate: 0,
        img:
          "https://www.cm-pesoregua.pt/thumbs/cmpesodaregua/uploads/content_image/image/413/quinta_seara_d_ordens_1_1024_2500.png"
      },
      {
        id: 9,
        route: 2,
        name: "Quinta da Esteveira",
        description:
          "A Rota do Vinho do Porto, aglomerado de pontos de interesse ligados à produção, história, cultivo e comercialização do vinho, encontra-se subdividida em três percursos mais pequenos. A sub-rota de Cima Corgo abrange os concelhos de Tabuaço, Sabrosa, Alijó, Murça, São João da Pesqueira. Alguns dos 30 locais assinalados reúnem um espólio de artesanato e utensílios vinícolas, que pode ser apreciado pelos turistas.",
        lunch: false,
        wine: true,
        long: -7.53791,
        lat: 41.17049,
        rate: 0,
        img:
          "https://laqv.ca/sites/default/files/styles/large/public/vignerons/casal_dos_jordoes.jpg?itok=GAUi389M"
      },
      {
        id: 10,
        route: 2,
        name: "Quinta da Fonte Nova",
        description:
          "Quinta situada em frente da foz do rio Tua, num anfiteatro natural de enorme beleza. É detida por uma empresa tradicional, herdeira de gerações de famílias durienses desde sempre ligadas à vinha e ao vinho.",
        lunch: false,
        wine: false,
        long: -7.4366,
        lat: 41.18925,
        rate: 0,
        img: "https://limg.hostelsclub.com/pics/7637/007637-1170856581.jpg"
      },
      {
        id: 11,
        route: 2,
        name: "Quinta da Foz",
        description:
          "Localizada na foz do rio Pinhão, esta quinta é referida nas demarcações pombalinas e pertenceu à família Cálem durante cerca de 150 anos, mas foi alienada recentemente. É famosa pelas suas lagaradas na época da vindima, em que são recriadas com rigor as velhas tradições do Douro.",
        lunch: false,
        wine: true,
        long: -7.54981,
        lat: 41.18934,
        rate: 0,
        img:
          "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwje5v3W9fjmAhUZBWMBHRNWDWoQjRx6BAgBEAQ&url=http%3A%2F%2Fwww.quintadafoz.pt%2Fqdf%2Fpt%2Fwho-we-are.html&psig=AOvVaw326VzOmR4Vftqdx1H97GNI&ust=1578741802796249"
      },
      {
        id: 12,
        route: 2,
        name: "Quinta da Senhora do Convento",
        description:
          "A Quinta da Senhora do Convento circunda o rio Távora, afluente do rio Douro. O mosteiro cistercense de São Pedro das Águias está na origem desta quinta.",
        lunch: false,
        wine: false,
        long: -7.51745,
        lat: 41.08635,
        rate: 0,
        img:
          "http://www.pateovelho.pt/wp-content/uploads/2018/03/slide-cpnvento2.jpg"
      },
      {
        id: 13,
        route: 2,
        name: "Quinta das Carvalhas",
        description:
          "Esta é uma das maiores e mais espetaculares quintas da região do Douro, que pode ser rastreada até pelo menos 1759, tendo sido adquirida em 1975 pela Real Companhia Velha. Ocupa uma elevação proeminente, na margem oposta à vila do Pinhão, e é visitável através de um circuito turístico que percorre a propriedade. No topo, encontra-se a Casa Redonda, uma infraestrutura onde se organizam diversos eventos.",
        lunch: true,
        wine: true,
        long: -7.54338,
        lat: 41.18741,
        rate: 0,
        img:
          "https://www.winetourismportugal.com/fotos/produtos/quinta-carvalhas7_318562084534469e3bdef4_1.jpg"
      },
      {
        id: 14,
        route: 2,
        name: "Quinta de La Rosa",
        description:
          "Quinta na posse da família Bergqvist há mais de cem anos. Tem excelentes vistas sobre o rio Douro e uma casa construída durante o século XVII.",
        lunch: true,
        wine: true,
        long: -7.55345,
        lat: 41.18149,
        rate: 0,
        img:
          "https://www.the-yeatman-hotel.com/fotos/marcas/banner_3_9072986595bb4c65cbb597.jpg"
      },
      {
        id: 15,
        route: 2,
        name: "Quinta de Nápoles",
        description:
          "A quinta com referências desde 1496, foi comprada e profundamente remodelado pela Niepoort em 1987. Dispõe de uma instalações de vinificação moderna e de grande dimensão.",
        lunch: false,
        wine: false,
        long: -7.64309,
        lat: 41.14878,
        rate: 0,
        img:
          "https://bottledbliss.files.wordpress.com/2016/07/niepoort-quinta-de-napoles.jpg?w=996&h=679"
      },
      {
        id: 16,
        route: 2,
        name: "Quinta de S. Luiz",
        description:
          "A Quinta de S. Luiz fica situada na margem esquerda do Rio Douro, entre a Régua e o Pinhão, na freguesia de Tabuaço e é considerada uma das mais emblemáticas da Região.",
        lunch: false,
        wine: true,
        long: -7.61048,
        lat: 41.15796,
        rate: 0,
        img:
          "https://www.visitportugal.com/sites/default/files/styles/encontre_detalhe_poi_destaque/public/mediateca/N4.CST1135D.jpg?itok=txXG_As0"
      },
      {
        id: 17,
        route: 2,
        name: "Quinta de Ventozelo",
        description:
          "É uma das maiores e mais antigas propriedades da Região Demarcada do Douro. As suas origens remontam ao início do século XIX, antes de ser referenciada no mapa do Barão de Forrester, em 1848. As primeiras colheitas terão sido feitas pelos monges de Cister, que povoaram a região, durante a Idade Média, desempenhando um papel importante no fomento da agricultura local.",
        lunch: false,
        wine: true,
        long: -7.61048,
        lat: 41.15796,
        rate: 0,
        img:
          "https://www.sjpesqueira.pt/thumbs/cmsaojoaopesqueira/uploads/poi/image/163/qta_ventozelo_1_1024_2500.jpg"
      },
      {
        id: 18,
        route: 2,
        name: "Quinta do Crasto",
        description:
          "As origens da Quinta do Crasto remontam ao século XVII, sendo detida pela família Roquette há mais de um século. No seu terreno ainda se encontra um marco pombalino datado de 1758.",
        lunch: false,
        wine: true,
        long: -7.62831,
        lat: 41.16505,
        rate: 0,
        img:
          "https://www.winetourismportugal.com/fotos/produtos/quinta_do_crasto1_61144541352d95f50ae5ea_1.jpg"
      },
      {
        id: 19,
        route: 2,
        name: "Quinta do Monte Travesso",
        description:
          "Quinta típica do Douro, rodeada de vinhedos e olivais em terras de xisto. Localizada em Tabuaço, pertence à família Nápoles de Carvalho, que há cinco gerações que se dedica à produção de vinhos e azeites.",
        lunch: false,
        wine: false,
        long: -7.57958,
        lat: 41.13162,
        rate: 0,
        img:
          "https://res.cloudinary.com/dxhpu9wdf/image/upload/w_800,h_400,c_fill,f_auto/origin/storage/0_20180814-qmt-hr-109_bfd28317.jpg"
      },
      {
        id: 20,
        route: 2,
        name: "Quinta do Panascal",
        description:
          "A Quinta do Panascal, data do século XVIII, e é a mais importante das três magníficas propriedades da Fonseca. É uma lindíssima propriedade sobranceira ao rio Távora oferecendo, a quem a visita, um ambiente paradisíaco.",
        lunch: false,
        wine: true,
        long: -7.57306,
        lat: 41.14667,
        rate: 0,
        img:
          "https://media-cdn.tripadvisor.com/media/photo-s/0b/e4/5e/b0/quinta-do-panascal.jpg"
      },
      {
        id: 21,
        route: 2,
        name: "Quinta do Passadouro",
        description:
          "A Quinta do Passadouro está situada nas margens do rio Pinhão, no coração da região vinhateira, e dedica-se à produção de vinhos de marca própria. Estende-se por encostas tradicionais em socalcos, de onde é possível apreciar as vinhas e diversas variedades de árvores de frutos.",
        lunch: true,
        wine: true,
        long: -7.531103,
        lat: 41.233559,
        rate: 0,
        img:
          "https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&ved=2ahUKEwiY6Pv0-PjmAhU57uAKHUJ6Ay8QjRx6BAgBEAQ&url=https%3A%2F%2Fwww.tripadvisor.pt%2FHotel_Review-g580264-d1076122-Reviews-Quinta_do_Passadouro-Pinhao_Vila_Real_District_Northern_Portugal.html&psig=AOvVaw1ralf_fbZMIdTcp0M9CenN&ust=1578742669249244"
      },
      {
        id: 22,
        route: 2,
        name: "Quinta do Portal",
        description:
          "Quinta propriedade da família Mansilha Branco, produtora de vinhos na região duriense desde tempos imemoriais, que remontam pelo menos ao século XV. Da propriedade é possível vislumbrar o Douro montanhoso que recorta o horizonte.",
        lunch: true,
        wine: true,
        long: -7.56928,
        lat: 41.23881,
        rate: 0,
        img:
          "https://www.portugalbywine.com/media//MULTIMEDIA/FOTOS/1590/12152432505103w.jpg"
      },
      {
        id: 23,
        route: 2,
        name: "Quinta do Seixo",
        description:
          "A Quinta do Seixo está localizada no Cima-Corgo, no coração da Região Demarcada do Douro. Seguindo o Rio Douro da Régua até ao Pinhão, descobre-se facilmente esta antiga Quinta e a sua moderna Adega perfeitamente integrada na paisagem.",
        lunch: false,
        wine: true,
        long: -7.55996,
        lat: 41.16683,
        rate: 0,
        img:
          "https://www.winetourismportugal.com/fotos/produtos/quinta_do_seixo3_114540268254f7395d945b4_1.jpeg"
      },
      {
        id: 24,
        route: 2,
        name: "Quinta do Tedo",
        description:
          "Situada na confluência dos rios Têdo e Douro, a 5 minutos de Folgosa e entre o Peso da Régua e o Pinhão, esta quinta única pratica agricultura orgânica e produz vinhos do Porto, de mesa e azeite. Com vistas deslumbrantes sobre o rio que lhe dá nome e sobre o rio Douro, esta quinta tem uma sala de provas e permite visitas à propriedade, aos lagares e aos armazéns de envelhecimento, sete dias por semana.",
        lunch: false,
        wine: true,
        long: -7.64018,
        lat: 41.15679,
        rate: 0,
        img:
          "https://apis.infoportugal.info/cms-media/pois/final/133/ARM.HO.77-133970.jpg"
      },
      {
        id: 25,
        route: 2,
        name: "Quinta Nova de N. Sra. do Carmo",
        description:
          "Esta quinta data, pelo menos, de 1756, como prova a sua inclusão na primeira demarcação do Douro realizada nessa altura. A propriedade foi comprada pela Real Companhia Velha, em 1987, que a vendeu à Burmester em 1991, sendo depois adquirida em 1999 pela família Amorim (mais conhecida como produtores de cortiça).",
        lunch: true,
        wine: true,
        long: -7.59955,
        lat: 41.16299,
        rate: 0,
        img:
          "https://q-cf.bstatic.com/images/hotel/max1024x768/289/28994986.jpg"
      },
      {
        id: 26,
        route: 3,
        name: "Quinta das Aveleiras",
        description:
          "Sobranceira à vila de Torre de Moncorvo, inclui um complexo de Turismo em Espaço Rural, constituído por três casas antigas. As vinhas circundantes dão origem aos vinhos Das Aveleiras. Algum do espólio desta quinta está contido no Museu de Torre de Moncorvo. Em 2006, venceu o prémio nacional Best of Wine Tourism na categoria 'Alojamento', atribuído pela rede Great Wine Capitals.",
        lunch: true,
        wine: true,
        long: -7.05582,
        lat: 41.17043,
        rate: 0,
        img:
          "https://r-cf.bstatic.com/images/hotel/max1024x768/900/90066134.jpg"
      },
      {
        id: 27,
        route: 3,
        name: "Quinta de Vila Maior",
        description:
          "Situada em pleno vale da Vilariça, próxima da foz do rio Sabor. A adega conta com lagares de granito para a pisa das uvas, onde ocorrem as tradicionais lagaradas.",
        lunch: false,
        wine: false,
        long: -7.11307,
        lat: 41.19467,
        rate: 0,
        img:
          "http://quintavilamaior.com/wp-content/uploads/2019/06/frente-vila.jpg"
      },
      {
        id: 28,
        route: 3,
        name: "Quinta dos Canais-Bartol",
        description:
          "As origens desta quinta remontam ao século XVII, uma vez que consta no mapa do Barão Forrester. Nas suas caves encontram-se vinhos com mais de 100 anos.",
        lunch: true,
        wine: false,
        long: -7.30553,
        lat: 41.15108,
        rate: 0,
        img:
          "http://1.bp.blogspot.com/-nyaLIqLSo5w/UjN96jNlUCI/AAAAAAAAHKo/JZArDjRCRmM/s400/P1280912.JPG"
      }
    ],
    routeSelected: "",
    winerieSelected: "0",
    existWineries: false,
    comments: [],
    ratings: [],
    count: 0,
    average: 0,
    vote: true,
    routesUsers: [],
    selectMyRouteId: 0
  },
  getters: {
    name(state) {
      return state.loggedUser[0].name;
    },
    email(state) {
      return state.loggedUser[0].email;
    },
    typeUser(state) {
      return state.loggedUser[0].type;
    },
    routeSelect(state) {
      return state.routeSelected;
    },
    winerieSelect(state) {
      return state.winerieSelected;
    },
    lastIdComment(state) {
      return state.comments.length
        ? state.comments[state.comments.length - 1].id
        : 0;
    },
    selectedMyRouteId(state) {
      return state.selectMyRouteId;
    },
    winerieName(state) {
      for (const winerie of state.wineries) {
        if (winerie.id == state.winerieSelected) {
          return winerie.name;
        }
      }
    },
    lastId(state) {
      return state.wineries.length
        ? state.wineries[state.wineries.length - 1].id
        : 0;
    },
    lastIdRating(state) {
      return state.ratings.length
        ? state.ratings[state.ratings.length - 1].id
        : 0;
    },
    lastIdMyRoutes(state) {
      return state.routesUsers.length
        ? state.routesUsers[state.routesUsers.length - 1].id
        : 0;
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
    CHANGE_TYPE_USER(state, payload) {
      for (const user of state.users) {
        if (user.email === payload.mail) {
          if (user.type == 0) {
            user.type = 1;
          } else {
            user.type = 0;
          }
        }
      }
      localStorage.setItem("users", JSON.stringify(this.state.users));
    },
    REMOVE_USER(state, payload) {
      state.users = state.users.filter(user => user.email !== payload.email);
      localStorage.setItem("users", JSON.stringify(this.state.users));
    },
    REMOVE_ROUTE(state, payload) {
      state.routesUsers = state.routesUsers.filter(
        route => route.id !== payload.id
      );
      localStorage.setItem(
        "routesUsers",
        JSON.stringify(this.state.routesUsers)
      );
    },
    REMOVE_COMMENT(state, payload) {
      state.comments = state.comments.filter(
        comment => comment.id !== payload.id
      );
      localStorage.setItem("comments", JSON.stringify(this.state.comments));
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
          winerie.lat === payload.latitudeForm &&
          winerie.long === payload.longForm
        ) {
          alert("aqui");
          state.existWineries = true;
        }
      }
      if (state.existWineries == false) {
        state.wineries.push({
          id: payload.idWinerie,
          route: payload.routeForm,
          name: payload.nameForm,
          description: payload.descriptionForm,
          lunch: payload.lunchForm,
          wine: payload.wineForm,
          long: payload.longForm,
          lat: payload.latitudeForm,
          rate: 0,
          img: payload.imgForm
        });
        localStorage.setItem("wineries", JSON.stringify(this.state.wineries));
      } else {
        alert("Já existe quinta/adega com as mesmas cordenadas");
        state.existWineries = false;
      }
    },
    SELECT_ROUTE(state, payload) {
      state.routeSelected = payload.idRoute;
      sessionStorage.setItem(
        "routeSelected",
        JSON.stringify(this.state.routeSelect)
      );
    },
    SELECT_WINERIE(state, payload) {
      state.winerieSelected = payload.idWinerie;
      sessionStorage.setItem(
        "winerieSelected",
        JSON.stringify(this.state.winerieSelected)
      );
    },
    ADD_COMMENT(state, payload) {
      state.comments.push({
        id: payload.idComment,
        idWinerie: payload.idWinerieComment,
        email: payload.emailComment,
        name: payload.nameComment,
        comment: payload.textComment,
        date: payload.dateComment,
        hour: payload.hourComment,
        nameWinerie: payload.nameWineries
      });
      localStorage.setItem("comments", JSON.stringify(this.state.comments));
    },
    RATING(state, payload) {
      state.ratings.push({
        id: payload.idRate,
        idWinerie: payload.id,
        rate: payload.rating,
        userRate: payload.user
      });
      localStorage.setItem("ratings", JSON.stringify(this.state.ratings));
    },
    REMOVE_RATING(state, payload) {
      state.ratings = state.ratings.filter(
        rating => rating.id !== payload.idRate
      );
      localStorage.setItem("ratings", JSON.stringify(this.state.ratings));
    },
    ROUTES_USERS(state, payload) {
      state.routesUsers.push({
        id: payload.routeUser,
        routeId: payload.idRoute,
        user: payload.username,
        wineries: payload.chkWineries,
        nameRoute: payload.routeName,
        dateRoute: payload.routeDate
      });
      localStorage.setItem(
        "routesUsers",
        JSON.stringify(this.state.routesUsers)
      );
    },
    ////////////////////////////CHANGES
    CHANGE_SELECTED_MYROUTES(state, payload) {
      state.selectMyRouteId = payload.selectRoute;
    }
  },
  actions: {},
  modules: {}
});

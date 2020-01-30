<template>
  <div>
    <h1>ROTA ?</h1>

    <div class="google-map" id="myMap"></div>
    <br />
    <h1 style="text-align:center">
      <img src="../assets/logorating.png" /> Etapas da Rota
      <img src="../assets/logorating.png" />
    </h1>
    <br />
    
      <div class="card">
        <div id="result"></div>
      </div>
    
  </div>
</template>
<script>
export default {
  name: "Maps",
  created: function() {
    if (localStorage.getItem("wineries")) {
      this.$store.state.wineries = JSON.parse(localStorage.getItem("wineries"));
    }
    if (localStorage.getItem("routesUsers")) {
      this.$store.state.routesUsers = JSON.parse(
        localStorage.getItem("routesUsers")
      );
    }
  },
  computed: {},
  async mounted() {
    this.renderMap();
  },
  methods: {
    renderMap() {
      let lati = 0;
      let long = 0;
      let map = "";
      for (const userRoute of this.$store.state.routesUsers) {
        if (userRoute.routeId == 1) {
          lati = 41.161933;
          long = -7.766806;
        } else if (userRoute.routeId == 2) {
          lati = 41.163577;
          long = -7.582799;
        } else if (userRoute.routeId == 3) {
          lati = 41.186872;
          long = -7.115952;
        }
      }
      const directionsService = new google.maps.DirectionsService();
      const directionsRenderer = new google.maps.DirectionsRenderer();
      map = new google.maps.Map(document.querySelector("#myMap"), {
        center: { lat: lati, lng: long },
        zoom: 13
      });
      directionsRenderer.setMap(map);
      this.calcRoute(directionsService, directionsRenderer);
    },
    calcRoute(directionsService, directionsRenderer) {
      let wayPts = [];
      let start = [];
      let end = [];
      for (const winerie of this.$store.state.wineries) {
        for (const winerieRoute of this.$store.state.routesUsers) {
          if (winerieRoute.id == this.$store.state.selectMyRouteId) {
            let len = winerieRoute.wineries.length - 1;
            if (winerie.id == winerieRoute.wineries[0]) {
              start.push({
                lat: Number(winerie.lat),
                lng: Number(winerie.long)
              });
            }
            if (winerie.id == winerieRoute.wineries[len]) {
              end.push({ lat: Number(winerie.lat), lng: Number(winerie.long) });
            }
            for (let i = 1; i < winerieRoute.wineries.length - 1; i++) {
              {
                if (winerie.id == winerieRoute.wineries[i]) {
                  let point = {
                    lat: Number(winerie.lat),
                    lng: Number(winerie.long)
                  };
                  wayPts.push({ location: point, stopover: true });
                }
              }
            }
          }
        }
      }
      /*   const winerie = { lat: 41.163577, lng: -7.582799 };
      const origi = { lat: 41.366949, lng: -8.738722 }; */
      const selectMode = "DRIVING";

      const request = {
        origin: start[0],
        destination: end[0],
        waypoints: wayPts,
        optimizeWaypoints: true,
        travelMode: google.maps.TravelMode[selectMode]
      };
      directionsService.route(request, (result, status) => {
        if (status == "OK") {
          directionsRenderer.setDirections(result);
          const directionsData = result.routes[0].legs[0];
          var route = result.routes[0];
          if (directionsData) {
            // document.querySelector(
            //   "#result"
            // ).innerHTML = `Distancia : ${directionsData.distance.text} (${directionsData.duration.text})  `;

            for (var i = 0; i < route.legs.length; i++) {
              var routeSegment = i + 1;
              document.querySelector("#result").innerHTML +=
                "<h3>" + routeSegment + "º" + "Etapa: " + "<br></h3>";
              document.querySelector("#result").innerHTML +=
                "<b>Caminho</b> : " +
                route.legs[i].start_address +
                " <b>para</b> "; // ver o porque de dar undfined pode ser de ter tirado a cena de ver as ruas etc
              document.querySelector("#result").innerHTML +=
                route.legs[i].end_address + " <br> ";
              document.querySelector("#result").innerHTML +=
                "<b>Distância</b> : " + route.legs[i].distance.text + " <br> ";
              document.querySelector("#result").innerHTML +=
                "<b>Duração da viagem</b> : " +
                route.legs[i].duration.text +
                " <br><br> <hr> ";
            } // este for ver ou tirar
          } else {
            document.querySelector("#result").innerHTML =
              "Directions request faileds";
          }
        } else {
          document.querySelector("#result").innerHTML = status;
        }
      });
    }
  }
};
</script>
<style scoped>
.google-map {
  height: 720px;
  margin: 0 auto;
}
.card {
  background-color: white;
  width: 800px;
  border: none;
  text-align: center;
}
h1 {
  font-family: "Cinzel", serif;
}
#result {
  font-family: "Didact Gothic", sans-serif;
  font-size: 20px;
}



@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

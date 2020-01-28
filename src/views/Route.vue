<template>
  <div>
    <h1>ROTA ?</h1>
    <button @click="renderMap()">RENDER MAP</button>
    <div class="google-map" id="myMap"></div>
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
        }
      });
    }
  }
};
</script>

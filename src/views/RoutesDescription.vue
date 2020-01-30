<template>
  <div>
    <h1>MAPS WITH VUE</h1>

    <div class="google-map" id="myMap"></div>
  </div>
</template>

<script>
export default {
  name: "Maps",
  created: function() {
    const obj = this;
    if (localStorage.getItem("wineries")) {
      this.$store.state.wineries = JSON.parse(localStorage.getItem("wineries"));
    }
    window.seleteWinerie = function(id) {
      obj.$store.commit("SELECT_WINERIE", { idWinerie: id });
      obj.$router.push({
        name: "wineriesdescription",
        params: { winerieId: id }
      });
    };
  },
  computed: {
    getSelectedRoute() {
      return this.$store.getters.routeSelect;
    }
  },

  async mounted() {
    this.renderMap();
  },
  methods: {
    renderMap() {
      let lati = 0;
      let long = 0;
      let map = "";
      if (this.getSelectedRoute == 1) {
        lati = 41.161933;
        long = -7.766806;
      } else if (this.getSelectedRoute == 2) {
        lati = 41.163577;
        long = -7.582799;
      } else if (this.getSelectedRoute == 3) {
        lati = 41.186872;
        long = -7.115952;
      }
      map = new google.maps.Map(document.querySelector("#myMap"), {
        center: { lat: lati, lng: long },
        zoom: 13,
        streetViewControl: false,
        scaleControl: false,
        zoomControl: true,
        mapTypeControl: false,
        styles: [
          {
            elementType: "geometry",
            stylers: [
              {
                color: "#ebe3cd"
              }
            ]
          },
          {
            elementType: "labels",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#523735"
              }
            ]
          },
          {
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#f5f1e6"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#c9b2a6"
              }
            ]
          },
          {
            featureType: "administrative.country",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffff00"
              },
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#dcd2be"
              }
            ]
          },
          {
            featureType: "administrative.land_parcel",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#ae9e90"
              }
            ]
          },
          {
            featureType: "administrative.neighborhood",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [
              {
                color: "#dfd2ae"
              }
            ]
          },
          {
            featureType: "poi",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "geometry",
            stylers: [
              {
                color: "#dfd2ae"
              }
            ]
          },
          {
            featureType: "poi",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#93817c"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#a5b076"
              }
            ]
          },
          {
            featureType: "poi.park",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#447530"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [
              {
                color: "#f5f1e6"
              }
            ]
          },
          {
            featureType: "road",
            elementType: "labels.icon",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry",
            stylers: [
              {
                color: "#fdfcf8"
              }
            ]
          },
          {
            featureType: "road.arterial",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#48464f"
              },
              {
                visibility: "on"
              },
              {
                weight: 2.5
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry",
            stylers: [
              {
                color: "#f8c967"
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#ffffff"
              },
              {
                weight: 2
              }
            ]
          },
          {
            featureType: "road.highway",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#e9bc62"
              }
            ]
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry",
            stylers: [
              {
                color: "#e98d58"
              }
            ]
          },
          {
            featureType: "road.highway.controlled_access",
            elementType: "geometry.stroke",
            stylers: [
              {
                color: "#db8555"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "geometry.fill",
            stylers: [
              {
                visibility: "on"
              }
            ]
          },
          {
            featureType: "road.local",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#806b63"
              }
            ]
          },
          {
            featureType: "transit",
            stylers: [
              {
                visibility: "off"
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "geometry",
            stylers: [
              {
                color: "#dfd2ae"
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#8f7d77"
              }
            ]
          },
          {
            featureType: "transit.line",
            elementType: "labels.text.stroke",
            stylers: [
              {
                color: "#ebe3cd"
              }
            ]
          },
          {
            featureType: "transit.station",
            elementType: "geometry",
            stylers: [
              {
                color: "#dfd2ae"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "geometry.fill",
            stylers: [
              {
                color: "#b9d3c2"
              }
            ]
          },
          {
            featureType: "water",
            elementType: "labels.text.fill",
            stylers: [
              {
                color: "#92998d"
              }
            ]
          }
        ]
      });
      for (const winerie of this.$store.state.wineries) {
        if (winerie.route == this.getSelectedRoute) {
          let marker = new google.maps.Marker({
            position: { lat: Number(winerie.lat), lng: Number(winerie.long) },
            title: `${winerie.name}`,
            icon:
              "https://github.com/ChicoFernandess/WINEYARD/blob/master/src/assets/logorating.png?raw=true"
          });

          let contentString = `<div id="content">
          <h5 >${winerie.name}</h5>
          <span><h6>Pontuação: ${winerie.rate}⭐</h6>
          <button class="button" onclick='seleteWinerie(${winerie.id})'">Ver Mais</button>
          </div></div>
          <style>
          .button {
              background-color: #555555; /* Green */
              border: none;
              color: white;
              width:200px;
              height: 40px;
              text-align: center;
              text-decoration: none;
              font-size: 12px;
              margin: 4px 2px;
              cursor: pointer;
              font-family: "Cinzel", serif;
                  }
              .button:hover {
              background-color: #689666;
              }
            h5{
            font-family: "Cinzel", serif;
            }
            p,h6{
            
            font-family: "Didact Gothic", sans-serif;
            text-align:center;
            padding-left: 10px
          }
          div{
            text-align:center
          }


          </style>`;
          let infoWindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker.setMap(map);
          marker.addListener("click", () => infoWindow.open(map, marker))
        }
      }
    },
    seleteWinerie(id) {
      this.$store.commit("SELECT_WINERIE", {
        idWinerie: id
      });
      this.$router.push({
        name: "wineriesdescription",
        params: { winerieId: id }
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

.button {
  background-color: #555555; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  font-family: "Cinzel", serif;
}

@import url("https://fonts.googleapis.com/css?family=Cinzel&display=swap");

@import url("https://fonts.googleapis.com/css?family=Didact+Gothic&display=swap");
</style>

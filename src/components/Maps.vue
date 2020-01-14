<template>
  <div>
    <h1>MAPS WITH VUE</h1>
    <button @click="renderMap()">RENDER MAP</button>
    <div class="google-map" id="myMap"></div>
  </div>
</template>

<script>
export default {
  name: "Maps",
  data: function() {
    return {
      map: "",
      marker: "",
      infoWindow: "",
      contentString: "",
      lat: "",
      long: ""
    };
  },
  created: function() {
    if (localStorage.getItem("wineries")) {
      this.$store.state.wineries = JSON.parse(localStorage.getItem("wineries"));
    }
  },
  computed: {
    getSelectedRoute() {
      return this.$store.getters.routeSelect;
    }
  },
  methods: {
    renderMap() {
      if (this.getSelectedRoute == 1) {
        this.lat = 41.161933;
        this.long = -7.766806;
      } else if (this.getSelectedRoute == 2) {
        this.lat = 41.163577;
        this.long = -7.582799;
      } else if (this.getSelectedRoute == 3) {
        this.lat = 41.186872;
        this.long = -7.115952;
      }
      this.map = new google.maps.Map(document.querySelector("#myMap"), {
        center: { lat: this.lat, lng: this.long },
        zoom: 12
      });
      for (const winerie of this.$store.state.wineries) {
        if (winerie.route == this.getSelectedRoute) {
          this.marker = new google.maps.Marker({
            position: { lat: winerie.lat, lng: winerie.long },
            title: `${winerie.name}`
          });
          this.contentString = `<div id="content"><div></div
          <h1 class="firstHeading">${winerie.name}</h1>
          <div><p>Latitude:${winerie.lat}</p>
          <p>Longitude:${winerie.long}</p>
          </div></div>`;
          this.infoWindow = new google.maps.InfoWindow({
            content: this.contentString
          });
          this.marker.setMap(this.map);
          this.marker.addListener("click", () =>
            this.infowindow.open(this.map, this.marker)
          );
        }
      }
    }
  }
};
</script>
<style scoped>
.google-map {
  height: 500px;
  margin: 0 auto;
}
</style>
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
      alert("xxx" + id);
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
        zoom: 13
      });
      for (const winerie of this.$store.state.wineries) {
        if (winerie.route == this.getSelectedRoute) {
          let marker = new google.maps.Marker({
            position: { lat: Number(winerie.lat), lng: Number(winerie.long) },
            title: `${winerie.name}`
          });

          let contentString = `<div id="content">
          <h5>${winerie.name}</h5>
          <div><p>Latitude:${winerie.lat}</p>
          <p>Longitude:${winerie.long}</p>
          <button onclick='seleteWinerie(${winerie.id})'">Ver Mais</button>
          </div></div>`;
          let infoWindow = new google.maps.InfoWindow({
            content: contentString
          });
          marker.setMap(map);
          marker.addListener("click", () => infoWindow.open(map, marker));
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
  height: 720px;;
  margin: 0 auto;
}
</style>

<template lang="html">
  <div id="app">
    <solar-system :planets="planets"></solar-system>
    <planet-detail></planet-detail>
  </div>
</template>

<script>
import SolarSystem from './components/SolarSystem.vue'
import PlanetDetail from './components/PlanetDetail.vue'
import { eventBus } from './main.js'

export default {
  name: "app",
  data(){
    return{
      planets: [],
      selectedPlanetIndex: null,
      selectedPlanet: null
    }
  },
  components: {
    SolarSystem,
    PlanetDetail
  },
  mounted(){
    fetch('http://localhost:3000/api/planets/')
    .then(response => response.json())
    .then(planets => this.planets = planets)

    eventBus.$on("planet-selected", (index) => {
      this.selectedPlanetIndex = index
      this.selectedPlanet = this.planets[index]
    })
  },
  methods: {
    getPlanet(){

    }
  }
}
</script>

<style lang="css" scoped>
</style>

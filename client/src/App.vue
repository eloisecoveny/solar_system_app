<template lang="html">

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
  },
  methods: {

  }
}
</script>

<style lang="css" scoped>
</style>

<template lang="html">
  <div id="planetIndex" >
    <h1>Solar System</h1>
      <ul v-for="(planet, index) in planets">
        <li v-on:click="handleClick(index)">{{planet.name}}</li>
      </ul>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "solar-system",
  props: ["planets"],
  data(){
    return {
      selectedPlanet: null
    }
  },
  methods: {
    handleClick(index){
      eventBus.$emit("planet-selected", index)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

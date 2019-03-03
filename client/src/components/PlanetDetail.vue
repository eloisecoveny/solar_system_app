<template lang="html">
  <div id="planet-detail">
    <h1>Planet Detail</h1>
    <h2>{{selectedPlanet.name}}</h2>
    <img :alt="selectedPlanet.name" :src="selectedPlanet.image"/>
    <p>{{selectedPlanet.description}}</p>
    <p>Number of Moons: {{selectedPlanet.funFacts.no_moons}}</p>
    <p>Length of Year: {{selectedPlanet.funFacts.lengthOfYears}}</p>
      <button v-on:click="handleToggleLeft(selectedPlanet._id)" type="button" name="buttonLeft">Closer to Sun</button>
      <button v-on:click="handleToggleRight(selectedPlanet._id)" type="button" name="buttonRight">Further from Sun</button>
      <button v-on:click="goHome(selectedPlanet._id)" type="button" name="buttonHome">Home</button>
  </div>
</template>

<script>
import {eventBus} from '../main.js'

export default {
  name: "planet-detail",
  props: ['selectedPlanet'],
  methods: {
    handleToggleRight(id){
      eventBus.$emit("toggle-right", id)
    },
    handleToggleLeft(id){
      eventBus.$emit("toggle-left", id)
    },
    goHome(id){
      eventBus.$emit("go-home", id)
    },
    textFormat(text){
      text.to_s.gsub(/\n/, "<br/>")
    }
  }
}
</script>

<style lang="css" scoped>
body {
  display: flex;
  flex-direction: wrap;
  justify-content: flex-end;
}
img {
  width: 50%
}
</style>

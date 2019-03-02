<template lang="html">
  <div id="planet-detail">
    <h1>Planet Detail</h1>
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
    }
  }
}
</script>

<style lang="css" scoped>
</style>

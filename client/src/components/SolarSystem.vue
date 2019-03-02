<template lang="html">
  <h1>Solar System</h1>
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
    handleSelect(){

    }
  }
}
</script>

<style lang="css" scoped>
</style>

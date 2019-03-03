<template lang="html">
  <div id="quiz-index">
    <h1>You're ready to take the test on:</h1>
    <p>{{ this.quizPlanet.name }}</p>
    <planet-quiz :quizPlanet="quizPlanet"></planet-quiz>
    <button v-on:click="goHome(quizPlanet._id)" type="button" name="buttonHome">Home</button>
  </div>

</template>

<script>
import PlanetQuiz from './PlanetQuiz.vue'
import { eventBus } from '../main.js'

export default {
  name: "quiz-manager",
  props: ["shuffledPlanets", "quizPlanet", "quizPlanetIndex"],
  data(){
    return{
    }
  },
  components: {
    PlanetQuiz
  },
  computed: {
    completed(){
      eventBus.$on("completed-quiz", () => {
        this.planetQuizIndex + 1
        this.planetQuiz = this.planets[this.planetQuizIndex]
      })
    }
  },
  methods: {
    goHome(id){
      eventBus.$emit("go-home", id)
    }
  }
}
</script>

<style lang="css" scoped>
</style>

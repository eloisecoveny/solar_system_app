<template lang="html">
  <div id="app">
    <solar-system v-if="!selectedPlanet && !quizPlanet" :planets="planets"></solar-system>
    <planet-detail v-if="selectedPlanet && !quizPlanet" :selectedPlanet="selectedPlanet"></planet-detail>
    <button v-if="!quizPlanet" v-on:click="shufflePlanets()" type="button" name="take-quiz">Take the Quiz</button>
    <quiz-manager v-if="quizPlanet" :shuffledPlanets="shuffledPlanets" :quizPlanet="quizPlanet" :quizPlanetIndex="quizPlanetIndex"></quiz-manager>
  </div>
</template>

<script>
import SolarSystem from './components/SolarSystem.vue'
import PlanetDetail from './components/PlanetDetail.vue'
import QuizManager from './components/QuizManager.vue'
import { eventBus } from './main.js'

export default {
  name: "app",
  data(){
    return{
      planets: [],
      selectedPlanetIndex: null,
      selectedPlanet: null,
      shuffledPlanets: [],
      quizPlanet: null,
      quizPlanetIndex: null
    }
  },
  components: {
    SolarSystem,
    PlanetDetail,
    QuizManager,
  },
  mounted(){
    fetch('http://localhost:3000/api/planets/')
    .then(response => response.json())
    .then(planets => this.planets = planets)

    eventBus.$on("planet-selected", (index) => {
      this.selectedPlanetIndex = index
      this.selectedPlanet = this.planets[index]
    })
    eventBus.$on("toggle-right", () => {
      if (this.selectedPlanetIndex < 9){
        this.selectedPlanetIndex = this.selectedPlanetIndex + 1
        this.selectedPlanet = this.planets[this.selectedPlanetIndex]
      }
    })
    eventBus.$on("toggle-left", () => {
      if (this.selectedPlanetIndex > 0){
        this.selectedPlanetIndex = this.selectedPlanetIndex - 1
        this.selectedPlanet = this.planets[this.selectedPlanetIndex]
      }
    })
    eventBus.$on("go-home", () => {
      this.selectedPlanet = null
      this.selectedPlanetIndex =  null
      this.quizPlanet = null
      this.quizPlanetIndex = null
    })
    eventBus.$on("next-quiz", () => {
      console.log("Quiz index", this.quizPlanetIndex);
      if(this.quizPlanetIndex < 9){
        this.nextQuiz()
      } else {
        (this.quizCompleted())
    }})
  },
  computed: {
  },
  methods: {
    shufflePlanets(){
      this.planets.forEach((planet) => {
        this.shuffledPlanets.push(planet)
      })
      this.shuffledPlanets.sort((a, b) => {
        return 0.5 - Math.random()
      })
      this.takeQuiz()
    },
    takeQuiz(){
      this.quizPlanetIndex = 8
      this.quizPlanet = this.shuffledPlanets[this.quizPlanetIndex]
    },
    nextQuiz(){
      this.quizPlanetIndex += 1
      this.quizPlanet = this.shuffledPlanets[this.quizPlanetIndex]
      // eventBus.$emit("new-planet-quiz", (event))
    },
    quizCompleted(){
      console.log("well done!");
    }
  }
}
</script>

<style lang="css" scoped>
</style>

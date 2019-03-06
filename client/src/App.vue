<template lang="html">

  <div class="animated fadeInDown faster" id="app">

    <div id="button">
      <button v-if="!quizPlanet" v-on:click="shufflePlanets()" type="button" name="take-quiz">Space Training >>></button>
    </div>

    <link href="https://fonts.googleapis.com/css?family=Mukta|ZCOOL+QingKe+HuangYou" rel="stylesheet">

    <solar-system v-if="!selectedPlanet && !quizPlanet" :planets="planets"></solar-system>

    <planet-detail v-if="selectedPlanet && !quizPlanet" :selectedPlanet="selectedPlanet"></planet-detail>

    <quiz-manager v-if="quizPlanet && !completed" :shuffledPlanets="shuffledPlanets" :quizPlanet="quizPlanet" :quizPlanetIndex="quizPlanetIndex"></quiz-manager>

    <completed-quiz v-if="completed"></completed-quiz>

  </div>
</template>

<script>
import SolarSystem from './components/SolarSystem.vue'
import PlanetDetail from './components/PlanetDetail.vue'
import QuizManager from './components/QuizManager.vue'
import CompletedQuiz from './components/CompletedQuiz.vue'
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
      quizPlanetIndex: null,
      completed: false
    }
  },
  components: {
    SolarSystem,
    PlanetDetail,
    QuizManager,
    CompletedQuiz
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
      // console.log("Quiz index", this.quizPlanetIndex);
      if(this.quizPlanetIndex < 9){
        this.nextQuiz()
      } else {
        (this.quizCompleted())
    }})
    eventBus.$on("return-home", () => {
      this.completed = false
      this.quizPlanet = null
    })
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
      this.quizPlanetIndex = 0
      this.quizPlanet = this.shuffledPlanets[this.quizPlanetIndex]
    },
    nextQuiz(){
      this.quizPlanetIndex += 1
      this.quizPlanet = this.shuffledPlanets[this.quizPlanetIndex]
      // eventBus.$emit("new-planet-quiz", (event))
    },
    quizCompleted(){
      this.completed = true
    }
  }
}
</script>

<style lang="css" scoped>

#app {
  animation-duration: 5s;
  min-height: 100vh;
  min-width: 100vh;
}

#button {
  display: flex;
  justify-content: flex-end;
}

button {
  color: white;
  font-family: 'ZCOOL QingKe HuangYou', cursive;
  font-size: 40px;
  margin-top: 20px;
  margin-right: 20px;
  color: rgb(98, 135, 193);
}

</style>

<template lang="html">
  <div id="quiz-index">
    <h1>You're ready to take the test on:</h1>
    {{ generateAnswers }}
    <p>{{ quizPlanet.name }}</p>
      <quiz-answers :quizAnswers="quizAnswers"></quiz-answers>
      <planet-quiz :quizPlanet="quizPlanet" :planetAnswers="planetAnswers"></planet-quiz>
    <button v-on:click="goHome(quizPlanet._id)" type="button" name="buttonHome">Home</button>
  </div>

</template>

<script>
import PlanetQuiz from './PlanetQuiz.vue'
import QuizAnswers from './QuizAnswers.vue'
import { eventBus } from '../main.js'

export default {
  name: "quiz-manager",
  props: ["shuffledPlanets", "quizPlanet", "quizPlanetIndex"],
  data(){
    return{
      planetAnswers: [],
      randomAnswers: [],
      quizAnswers: []
    }
  },
  components: {
    PlanetQuiz,
    QuizAnswers
  },
  computed: {
    generateAnswers(){
      const answers = Object.values(this.quizPlanet.quizFacts)
      answers.sort((a, b) => 0.5 - Math.random())
      answers.splice(3, (answers.length - 3))
      answers.push(this.quizPlanet.name)
      this.planetAnswers = answers
      this.generateRandom()
      this.compileQuizAnswers()
    }
  },
  methods: {
    goHome(id){
      eventBus.$emit("go-home", id)
    },
    generateRandom(){
      const allValues = this.shuffledPlanets.map((planet) => {
        return Object.values(planet.quizFacts)
      });
      allValues.push(this.shuffledPlanets.map(planet => planet.name))
      const singleArr = allValues.reduce((a, b) => a.concat(b), []
      );
      singleArr.sort((a, b) => 0.5 - Math.random())
      this.randomAnswers = singleArr.slice(0, 6)
    },
    compileQuizAnswers(){
       const answers = this.planetAnswers.concat(this.randomAnswers);
       answers.sort((a, b) => 0.5 - Math.random());
       this.quizAnswers = answers;
    }
  }
}
</script>

<style lang="css" scoped>
</style>
